(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nhap-xuat-duoc-pham-tong-hop-du-tru-mua-thuoc-tai-khoa-tong-hop-du-tru-mua-thuoc-tai-khoa-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/ds-tong-hop-du-tru-mua-thuoc-tai-khoa/ds-tong-hop-du-tru-mua-thuoc-tai-khoa.component.html":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/ds-tong-hop-du-tru-mua-thuoc-tai-khoa/ds-tong-hop-du-tru-mua-thuoc-tai-khoa.component.html ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n            {Title:'Nhập Xuất',Path:''}\n            ,{Title:'Dược Phẩm',Path:''}\n            ,{Title:'Dự Trù Mua',Path:''}                    \n            ,{Title:'THDT Mua Tại Khoa',Path:'',Active:true}]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n\n        <div class=\"card overflow-auto -mt-15\">\n            <kendo-tabstrip fxFlex=\"100%\" class=\"tab-no-padding-content field-set-p\"\n                (tabSelect)=\"chuyenDen('card1', $event)\">\n                <kendo-tabstrip-tab [selected]=\"lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy\">\n                    <ng-template kendoTabTitle>\n                        CHỜ XỬ LÝ\n                    </ng-template>\n                    <ng-template kendoTabContent>\n                        <kendo-splitter>\n                            <kendo-splitter-pane [collapsible]=\"true\" class=\"sticky-panelbar\">\n                                <div class=\"\">\n                                    <kendo-panelbar class=\"m-1\">\n                                        <kendo-panelbar-item expanded=\"true\" class=\"panelbar-item\">\n                                            <ng-template kendoPanelBarContent>\n                                                <div class=\"card overflow-auto -mt-15\">\n                                                    <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n                                                        [useActionDefault]=\"false\"  \n                                                        [additionalSearchString]=\"addtionStringDefault\"\n                                                        (extOnDataBound)=\"onDataBound($event)\" [lazyLoadPage]=\"true\"\n                                                        [useHeaderDefault]=\"false\" [allowSortDefault]=\"false\"\n                                                        [checkboxAble]=\"false\" pageSize=\"50\" #gridChoDuyet\n                                                        [sort]=\"sortDuTruChoXuLy\"\n                                                        urlGetData=\"YeuCauMuaDuocPham/GetDanhSachDuyetMuaDuTruTaiKhoaForGridAsync\"\n                                                        urlGetTotalPage=\"YeuCauMuaDuocPham/GetTotalDanhSachDuyetMuaDuTruTaiKhoaForGridAsync\"\n                                                        [headerTemplate]=\"headerTemplate\" [groups]=\"groups\"\n                                                        [detailTemplate]=\"detailTemplate\" heightToolbar=\"200\">\n                                                        <ng-template #detailTemplate let-dataItem>\n                                                            <app-grid [gridColumns]=\"gridChildThuocVacXinColumns\"\n                                                                [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                                                                [sort]=\"sortDuTruChild\" [showStt]=\"true\"\n                                                                [groups]=\"groupChiTietTabChoGoi\"\n                                                                [urlGetData]=\"urlGetDataGridChildAsync\"\n                                                                [additionalSearchString]=\"dataItem.Id\"\n                                                                [urlGetTotalPage]=\"urlGetTotalPageGridChild\"\n                                                                [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                                                                [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                                                                [autoHeight]=\"true\">\n                                                            </app-grid>\n                                                        </ng-template>\n\n                                                    </app-grid>\n                                                </div>\n                                            </ng-template>\n                                        </kendo-panelbar-item>\n                                    </kendo-panelbar>\n                                </div>\n                            </kendo-splitter-pane>\n                        </kendo-splitter>\n                    </ng-template>\n                </kendo-tabstrip-tab>\n                <kendo-tabstrip-tab [selected]=\"lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy\">\n                    <ng-template kendoTabTitle>\n                        ĐÃ GỬI\n                    </ng-template>\n                    <ng-template kendoTabContent>\n                        <kendo-splitter>\n                            <kendo-splitter-pane [collapsible]=\"true\" class=\"sticky-panelbar\">\n                                <div class=\"\">\n                                    <kendo-panelbar class=\"m-1\">\n                                        <kendo-panelbar-item expanded=\"true\" class=\"panelbar-item\">\n                                            <ng-template kendoPanelBarContent>\n                                                <div class=\"card overflow-auto -mt-15\">\n                                                    <app-grid [gridColumns]=\"gridDaXuLyColumns\" #gridChildDaXuLy\n                                                        [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                                                        [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\"\n                                                        [additionalSearchString]=\"addtionStringDefaultDaXuLy\"\n                                                        [allowSortDefault]=\"false\" [checkboxAble]=\"false\" pageSize=\"50\"\n                                                        urlGetData=\"YeuCauMuaDuocPham/GetDataTHDTTaiKhoaDaXuLyForGridAsync\"\n                                                        urlGetTotalPage=\"YeuCauMuaDuocPham/GetTotalTHDTTaiKhoaDaXuLyForGridAsync\"\n                                                        [headerTemplate]=\"headerTemplate1\"\n                                                        [sort]=\"sortDaGoi\"\n                                                        [detailTemplate]=\"detailTemplate1\" heightToolbar=\"200\">\n                                                        <ng-template #detailTemplate1 let-dataItem>\n                                                            <app-grid [gridColumns]=\"gridDaXuLyChiTietColumns\"\n                                                                [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                                                                [showStt]=\"true\"\n                                                                urlGetData=\"YeuCauMuaDuocPham/GetDataTHDTTaiKhoaDaXuLyForGridAsyncDetail\"\n                                                                urlGetTotalPage=\"YeuCauMuaDuocPham/GetTotalTHDTTaiKhoaDaXuLyForGridAsyncDetail\"\n                                                                [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                                                                searchString=\"{{dataItem.Id}}\" [checkboxAble]=\"false\"\n                                                                [lazyLoadPage]=\"true\" [autoHeight]=\"true\"\n                                                                [detailTemplate]=\"detailTemplateChild\">\n                                                            </app-grid>\n                                                        </ng-template>\n                                                    </app-grid>\n                                                </div>\n                                            </ng-template>\n                                        </kendo-panelbar-item>\n                                    </kendo-panelbar>\n                                </div>\n                            </kendo-splitter-pane>\n                        </kendo-splitter>\n                    </ng-template>\n                </kendo-tabstrip-tab>\n                <kendo-tabstrip-tab [selected]=\"lstStatusSelectTabTHDTKhoa.selectedTabTuChoi\">\n                    <ng-template kendoTabTitle>\n                        TỪ CHỐI\n                    </ng-template>\n                    <ng-template kendoTabContent>\n                        <kendo-splitter>\n                            <kendo-splitter-pane [collapsible]=\"true\" class=\"sticky-panelbar\">\n                                <div class=\"\">\n                                    <kendo-panelbar class=\"m-1\">\n                                        <kendo-panelbar-item expanded=\"true\" class=\"panelbar-item\">\n                                            <ng-template kendoPanelBarContent>\n                                                <div class=\"card overflow-auto -mt-15\">\n                                                    <app-grid [gridColumns]=\"gridTuChoiXuLyColumns\" #gridChildTuChoi\n                                                        [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                                                        [additionalSearchString]=\"addtionStringDefaultTuChoi\"\n                                                        [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\"\n                                                        [allowSortDefault]=\"false\" [checkboxAble]=\"false\" pageSize=\"50\"\n                                                        urlGetData=\"YeuCauMuaDuocPham/GetDataDuTruMuaDuocPhamTuChoiTaiKhoaForGridAsync\"\n                                                        urlGetTotalPage=\"YeuCauMuaDuocPham/GetTotalDuTruMuaDuocPhamTuChoiTaiKhoaForGridAsync\"\n                                                        [headerTemplate]=\"headerTemplate2\"\n                                                        [detailTemplate]=\"detailTemplate2\" heightToolbar=\"200\">\n                                                        <ng-template #detailTemplate2 let-dataItem>\n                                                            <app-grid [gridColumns]=\"gridChildTuChoiChildColumns\"\n                                                                [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                                                                [urlGetData]=\"urlDSTHDTTuChoiChildAsync\"\n                                                                [groups]=\"groupTuChois\" [showStt]=\"true\"\n                                                                [urlGetTotalPage]=\"urlGetTotalDSTHDTTuChoiChild\"\n                                                                [additionalSearchString]=\"dataItem.Id\"\n                                                                [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                                                                [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                                                                [autoHeight]=\"true\">\n                                                            </app-grid>\n                                                        </ng-template>\n                                                    </app-grid>\n                                                </div>\n                                            </ng-template>\n                                        </kendo-panelbar-item>\n                                    </kendo-panelbar>\n                                </div>\n                            </kendo-splitter-pane>\n                        </kendo-splitter>\n                    </ng-template>\n                </kendo-tabstrip-tab>\n            </kendo-tabstrip>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n\n<!-- template dang chờ duyêt  -->\n<ng-template #soPhieuTemplate let-dataItem>\n    <div class=\"text-center\" kendoTooltip>\n        <a (click)=\"chiTiet(dataItem.Id, dataItem.TrangThaiDuTru)\">\n            <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.SoPhieu}}\">\n                {{dataItem.SoPhieu}}\n            </p>\n        </a>\n    </div>\n</ng-template>\n<ng-template #headerTemplate>\n    <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <app-checkbox name=\"cho-duyet\"  class=\"ml-2\" value=\"coduyet\"\n            [(model)]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.ChoDuyet\"\n            (modelChange)=\"trangThaiCheckBox($event, 'choduyet', 0)\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n            fxLayoutAlign=\"start center\" label=\"Chờ duyệt\">\n        </app-checkbox>\n        <app-checkbox name=\"co-goi\"  class=\"ml-2\" value=\"coduyet\"\n            (modelChange)=\"trangThaiCheckBox($event, 'chogoi', 0)\"\n            [(model)]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.DaDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n            fxLayoutAlign=\"start center\" label=\"Chờ gửi\">\n        </app-checkbox>\n        <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n            fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 10px;\">\n            <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n            <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                type=\"search\" name=\"searchString\" [(ngModel)]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.SearchString\"\n                (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n        </div>\n\n        <app-daterangepicker style=\"margin-left: 5px;\" id=\"range-ngay-yeu-cau\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n            [(model)]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate\" label=\"Yêu cầu từ ngày - đến ngày\"\n            (keyup)=\"onKey($event)\" (modelChange)=\"timKiem()\" (blur)=\"blur()\" class=\"mt-1 on-header\">\n        </app-daterangepicker>\n\n        <span fxFlex></span>\n\n    </div>\n</ng-template>\n\n\n<ng-template #nhomGroupHeaderTemplate let-value=\"value\" let-dataItem let-aggregates=\"aggregates\">\n    <div fxFlex=\"100%\">\n        <strong fxFlex=\"15%\"  [ngStyle]=\"{'color':value !== 'Chờ duyệt' ? '#afb42b' : 'sandybrown' }\">\n            <span>{{theFirstValueFormat(value)}}({{aggregates.TrangThai.count}})</span>\n        </strong>\n        <strong fxFlex=\"70%\" *ngIf=\"value !== 'Chờ duyệt'\">\n            <span fxFlex=\"60%\">Kỳ dự trù: <span style=\"color:#afb42b\">{{theFirstValueFormatChuKy(value)}}</span></span>\n        </strong>\n        <button fxFlex=\"15%\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n            (click)=\"guiKhoaDuyetTatCa(value)\" *ngIf=\"value !== 'Chờ duyệt'\" style=\"margin-right: -25px\">\n            Gửi khoa dược duyệt\n        </button>\n    </div>\n</ng-template>\n\n<ng-template #nhomGroupThuocVacxinHeaderTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n</ng-template>\n\n<ng-template #actionTemplate let-dataItem>\n    <button *ngIf=\"dataItem.TrangThai === 'Chờ duyệt'\" type=\"button\" (click)=\"TuChoi(dataItem.Id)\" color=\"warn\"\n        mat-raised-button><i class=\"ft-save mr-1\"></i> Từ chối</button>\n    <button *ngIf=\"dataItem.TrangThai === 'Chờ duyệt'\" style=\"margin-left: 3px\" type=\"button\"\n        (click)=\"PheDuyet(dataItem.Id)\" color=\"primary\" mat-raised-button><i class=\"ft-save mr-1\"></i>Duyệt</button>\n    <button *ngIf=\"dataItem.TrangThai !== 'Chờ duyệt'\" type=\"button\" (click)=\"HuyDuyet(dataItem.Id)\" color=\"warn\"\n        mat-raised-button><i class=\"ft-save mr-1\"></i> Hủy duyệt</button>\n</ng-template>\n<!--End template dang chờ duyêt  -->\n\n<!-- template Đã gửi -->\n<!-- <ng-template #soPhieuTemplate let-dataItem>\n    <div class=\"text-center\" kendoTooltip>\n        <a (click)=\"chiTiet(dataItem.Id, dataItem.TinhTrang)\">\n            <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.SoPhieu}}\">\n                {{dataItem.SoPhieu}}</p>\n        </a>\n    </div>\n</ng-template> -->\n\n<ng-template #detailTemplateChild let-dataItem>\n    <app-grid [gridColumns]=\"gridDaXuLyChiTietChildColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n        [urlGetData]=\"urlGetDataDaXuLyChiTietChild\" [urlGetTotalPage]=\"urlGetTotalDaXuLyChiTietChild\"\n        [additionalSearchString]=\"dataItem.Id\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n        [groups]=\"groupDaXuLyChiTietChilds\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" [autoHeight]=\"true\"\n        [showStt]=\"true\">\n\n    </app-grid>\n</ng-template>\n\n<ng-template #headerTemplate1>\n    <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <app-checkbox name=\"cho-duyet\" (modelChange)=\"trangThaiCheckBox($event,'choduyet',1)\" class=\"ml-2\"\n            value=\"coduyet\" [(model)]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.DaGuiChoDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs\n            fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Đã gửi & Chờ duyệt\">\n        </app-checkbox>\n        <app-checkbox name=\"co-goi\" (modelChange)=\"trangThaiCheckBox($event,'daduyet',1)\" class=\"ml-2\" value=\"coduyet\"\n            [(model)]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.DaDuyetDaXuLy\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n            fxLayoutAlign=\"start center\" label=\"Đã duyệt\">\n        </app-checkbox>\n        <app-checkbox name=\"co-goi\" (modelChange)=\"trangThaiCheckBox($event,'tuchoi',1)\" class=\"ml-2\" value=\"coduyet\"\n            [(model)]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.TuChoiDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n            fxLayoutAlign=\"start center\" label=\"Từ chối\">\n        </app-checkbox>\n        <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n            fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 10px;\">\n            <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n            <input [formControl]=\"searchCtrlDaXuLy\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                type=\"search\" name=\"SearchStringDaXuLy\"\n                [(ngModel)]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.SearchStringDaXuLy\" (keyup)=\"onKey($event)\"\n                (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n        </div>\n        <app-daterangepicker style=\"margin-left: 5px;\" id=\"range-ngay-yeu-cau\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n            [(model)]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy\" label=\"Yêu cầu từ ngày - đến ngày\"\n            (keyup)=\"onKey($event)\" (modelChange)=\"timKiem()\" (blur)=\"blur()\" class=\"mt-1 on-header\">\n        </app-daterangepicker>\n        <span fxFlex></span>\n    </div>\n</ng-template>\n\n<ng-template #ngayYeuCauDaXuLyTemplate let-dataItem>\n    {{dataItem.NgayYeuCauDisplay}}\n</ng-template>\n<ng-template #ngayYeuCauDetailDaXuLyTemplate let-dataItem>\n    {{dataItem.NgayYeuCauDisplay}}\n</ng-template>\n<ng-template #ngayKhoDuocDaXuLyTemplate let-dataItem>\n    {{dataItem.NgayKhoDuocDuyetDisplay}}\n</ng-template>\n<ng-template #ngayGiamDocDaXuLyTemplate let-dataItem>\n    {{dataItem.NgayGiamDocDuyetDisplay}}\n</ng-template>\n<ng-template #ngayTruongKhoaDaXuLyTemplate let-dataItem>\n    {{dataItem.NgayTruongKhoaDuyetDisplay}}\n</ng-template>\n<ng-template #tinhTrangTemplate let-dataItem>\n    <label *ngIf=\"dataItem.TinhTrang == 0\" style=\"color: blue;\">\n        <span>Đã gửi & Chờ duyệt</span>\n    </label>\n    <label *ngIf=\"dataItem.TinhTrang == 1\" class=\"green\">\n        <span>Đã duyệt</span>\n    </label>\n    <label *ngIf=\"dataItem.TinhTrang == 2\" class=\"red\">\n        <span>Từ chối</span>\n    </label>\n</ng-template>\n\n<ng-template #soPhieuDaXuLyTemplate let-dataItem>\n    <div class=\"text-center\" kendoTooltip>\n        <a (click)=\"chiTietDaXuLyParent(dataItem.Id)\">\n            <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.SoPhieu}}\">\n                {{dataItem.SoPhieu}}\n            </p>\n        </a>\n    </div>\n</ng-template>\n\n<ng-template #soPhieuDaXuLyChiTietTemplate let-dataItem>\n    <div class=\"text-center\" kendoTooltip>\n        <a (click)=\"chiTietDaXuLy(dataItem.Id, dataItem.TinhTrang, 1)\">\n            <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.SoPhieu}}\">\n                {{dataItem.SoPhieu}}\n            </p>\n        </a>\n    </div>\n</ng-template>\n\n\n<ng-template #nhomGroupDaXuLyChildHeaderTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n</ng-template>\n<!-- End template Đã gửi -->\n\n<!-- template Từ chối -->\n<ng-template #headerTemplate2>\n    <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n            fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 10px;\">\n            <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n            <input [formControl]=\"searchCtrlTuChoi\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                type=\"search\" name=\"SearchStringTuChoi\"\n                [(ngModel)]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.SearchStringTuChoi\" (keyup)=\"onKey($event)\"\n                (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n        </div>\n        <app-daterangepicker style=\"margin-left: 5px;\" id=\"range-ngay-yeu-cau\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n            [(model)]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi\" label=\"Yêu cầu từ ngày - đến ngày\"\n            (keyup)=\"onKey($event)\" (modelChange)=\"timKiem()\" (blur)=\"blur()\" class=\"mt-1 on-header\">\n        </app-daterangepicker>\n        <span fxFlex></span>\n    </div>\n</ng-template>\n\n<ng-template #soPhieuTuChoiTemplate let-dataItem>\n    <div class=\"text-center\" kendoTooltip>\n        <a (click)=\"chiTietDaXuLy(dataItem.Id, 2, 1)\">\n            <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.SoPhieu}}\">\n                {{dataItem.SoPhieu}}\n            </p>\n        </a>\n    </div>\n</ng-template>\n<ng-template #nhomGroupTuChoiHeaderTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n</ng-template>\n\n<ng-template #ngayYeuCauTuChoiTemplate let-dataItem>\n    {{dataItem.NgayYeuCauDisplay}}\n</ng-template>\n\n<ng-template #ngayTuChoiTemplate let-dataItem>\n    {{dataItem.NgayTuChoiDisplay}}\n</ng-template>\n<!-- End template Từ chối -->\n\n<ng-template #nhomChiTietTabChoGoiTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n</ng-template>\n\n\n\n<ng-template #hdChuaNhapTemplate let-dataItem>\n    <ng-template #templateHdInfo let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr *ngFor=\"let hdt of hdts\">\n                <td>{{hdt.Ten}}:</td>\n                <td>{{hdt.SLTon}}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <div class=\"kho-tong-ton-ng-template\" kendoTooltip>\n        <span class=\"kho-tong-ton-label\">{{dataItem.HDChuaNhap}}</span>\n        <span *ngIf=\"dataItem.HDChuaNhap != 0\" class=\"kho-tong-ton-ng-template\" kendoTooltip #tooltip=\"kendoTooltip\"\n            tooltipClass=\"tooltip-block\" position=\"left\" [tooltipTemplate]=\"templateHdInfo\" filter=\"*\">\n            <mat-icon [icIcon]=\"icInfo\" (mouseover)=\"TooltipCustom(dataItem)\" class=\"info\"></mat-icon>\n        </span>\n    </div>\n</ng-template>\n\n<ng-template #khoTongTonTemplate let-dataItem>\n    <ng-template #templateInfo let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr *ngFor=\"let kho of khos\">\n                <td>{{kho.Ten}}:</td>\n                <td>{{kho.SLTon}}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <div class=\"kho-tong-ton-ng-template\" kendoTooltip>\n        <span class=\"kho-tong-ton-label\">{{dataItem.KhoTongTon}}</span>\n        <span *ngIf=\"dataItem.KhoTongTon != 0\" class=\"kho-tong-ton-ng-template\" kendoTooltip #tooltip=\"kendoTooltip\"\n            tooltipClass=\"tooltip-block\" position=\"left\" [tooltipTemplate]=\"templateInfo\" filter=\"*\">\n            <mat-icon [icIcon]=\"icInfo\" (mouseover)=\"TooltipCustom(dataItem)\" class=\"info\"></mat-icon>\n        </span>\n    </div>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm.component.html":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm.component.html ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>{{Title}}</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <div [innerHtml]=\"Message\"></div>\n</mat-dialog-content>\n\n\n<mat-dialog-actions align=\"end\" class=\"mt-3\">\n    <button mat-button (click)=\"close('No')\">{{ButtonNo}}</button>\n    <button mat-raised-button color=\"primary\" (click)=\"close('YesAndPrint')\">{{ButtonYesAndPrint}}</button>\n    <button mat-raised-button color=\"primary\" (click)=\"close('Yes')\">{{ButtonYes}}</button>\n\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.html":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.html ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Dược phẩm',Path:''},\n                {Title:'Dự trù mua',Path:''},         \n                {Title:'THDT Mua Tại Khoa',Path:'/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa',Active:true}               \n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Gửi duyệt dự trù mua dược phẩm</h2>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                    <app-textbox id=\"khoa\" fxFlex=\"25\" fxFlex.sm=\"25\" [(model)]=\"thongTinGoiTaiKhoa.TenKhoaPhong\"\n                        [required]=\"true\" maxlength=\"250\" label=\"Khoa\" [disabled]=\"true\">\n                    </app-textbox>\n                    <app-textbox id=\"KyDuTru\" fxFlex=\"25\" fxFlex.sm=\"25\" [(model)]=\"thongTinGoiTaiKhoa.KyDuTru\"\n                        [required]=\"true\" maxlength=\"250\" label=\"Kỳ dự trù\" [disabled]=\"true\">\n                    </app-textbox>\n                    <app-textbox id=\"nguoiYeuCau\" fxFlex=\"25\" fxFlex.sm=\"25\"\n                        [(model)]=\"thongTinGoiTaiKhoa.TenNhanVienYeuCau\" [required]=\"true\" maxlength=\"250\"\n                        label=\"Người yêu cầu\" [disabled]=\"true\">\n                    </app-textbox>\n                    <app-datepicker id=\"ngayYeuCau\" fxFlex=\"25\" fxFlex.sm=\"25\" [required]=\"true\" label=\"Ngày yêu cầu\"\n                        [(model)]=\"thongTinGoiTaiKhoa.NgayYeuCau\" [disabled]=\"true\"\n                        [validationerror]=\"'TuNgay' | validationerror:validationErrors\">\n                    </app-datepicker>\n                    <app-textarea id=\"ghiChu\" fxFlex=\"100\" fxFlex.sm=\"100\" maxlength=\"4000\" label=\"Ghi chú\"\n                        minHeight=\"20\" [(model)]=\"thongTinGoiTaiKhoa.GhiChu\">\n                    </app-textarea>\n                    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông tin chi tiết</h3>\n                    <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridColumns]=\"gridColumns\"\n                        [allowSortDefault]=\"true\" [documentType]=\"documentType\" [sort]=\"sortDuTruTaiKhoa\"\n                        urlGetData=\"YeuCauMuaDuocPham/GetDuTruMuaDPTaiKhoaForGridAsync\"\n                        urlGetTotalPage=\"YeuCauMuaDuocPham/GetTotalDuTruMuaDPTaiKhoaForGridAsync\" [useAddDeault]=\"false\"\n                        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" (extOnDataBound)=\"onDataBound($event)\"\n                        [groups]=\"groups\" [additionalSearchString]=\"kyDuTruMuaDuocPhamVatTuId\" [checkboxAble]=\"false\"\n                        [lazyLoadPage]=\"true\" maxHeight=\"500\" [pageable]=\"false\" [detailTemplate]=\"detailTemplate\">\n                        <ng-template #detailTemplate let-dataItem>\n                            <app-grid [gridColumns]=\"gridChildColumns\" [documentType]=\"documentType\"\n                                [useAddDeault]=\"false\" [sort]=\"sortDuTruChild\" [urlGetData]=\"urlGetDataGridChildAsync\"\n                                additionalSearchString=\"{{kyDuTruMuaDuocPhamVatTuId}}-{{dataItem.LaBHYT}}-{{dataItem.DuocPhamId}}\"\n                                [urlGetTotalPage]=\"urlGetTotalPageGridChild\" [showStt]=\"true\" [useHeaderDefault]=\"false\"\n                                [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                                [autoHeight]=\"true\">\n                            </app-grid>\n                        </ng-template>\n                    </app-grid>\n                </div>\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" title=\"Phím tắt: Esc\" (click)=\"cancel()\" mat-button\n                        class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n                    <button type=\"button\" (click)=\"guiTatCa()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i>\n                        Gửi</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.html":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.html ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>IN PHIẾU DỰ TRÙ MUA DƯỢC PHẨM TẠI KHOA </div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\"><iframe width=\"100%\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' class=\"mr-1 mt-2\" textPrint=\"In phiếu\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.html":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.html ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>IN PHIẾU DỰ TRÙ MUA DƯỢC PHẨM</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\"><iframe width=\"100%\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' class=\"mr-1 mt-2\" textPrint=\"In phiếu\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-detail/tong-hop-du-tru-mua-thuoc-tai-khoa-detail.component.html":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-detail/tong-hop-du-tru-mua-thuoc-tai-khoa-detail.component.html ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''},\n                {Title:'Dự trù mua',Path:''},         \n                {Title:'THDT Mua Tại Khoa',Path:'/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa', queryParams: {holdQuery : true},Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chi tiết duyệt dự trù mua dược phẩm</h2>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == true\"\n                    style=\"color:green\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == false\"\n                    style=\"color:red\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == null\"\n                    style=\"color:orange\">{{trangThaiVo.Ten}}</b>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared [trangThaiVo]=\"trangThaiVo\">\n                </app-du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" (click)=\"inPhieu()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i>\n                        In phiếu dự trù</button>\n                    <button type=\"button\" title=\"Phím tắt: Esc\" (click)=\"cancel()\" mat-button\n                        class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i> Quay lại</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.html":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.html ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập Xuất',Path:''},\n                {Title:'Dược Phẩm',Path:''},\n                {Title:'Dự trù mua',Path:''},         \n                {Title:'THDT Mua Tại Khoa',Path:'/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa',queryParams: {holdQuery : true},Active:true}                \n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b render-text\" fxLayout=\"row\" fxLayoutAlign=\"start center\">                \n                <h2 *ngIf=\"tabDaXuLy== 'DaXuLy'\"  class=\"title m-0\" >Chi Tiết Tổng Hợp Dự Trù Mua Dược Phẩm</h2>\n                <h2 *ngIf=\"tabDaXuLy!= 'DaXuLy'\"  class=\"title m-0\" >Duyệt Tổng Hợp Dự Trù Mua Dược Phẩm</h2>\n                <!-- Đã gửi -->\n                <label *ngIf=\"tabDaXuLy== 'DaXuLy' && danhSachTongHopDuTruMuaThuocTaiKhoa.TinhTrang == 0\"\n                    style=\"color: blue;\">\n                    <span>Đã gửi & Chờ duyệt</span>\n                </label>\n                <label *ngIf=\"tabDaXuLy== 'DaXuLy' && danhSachTongHopDuTruMuaThuocTaiKhoa.TinhTrang == 1\" class=\"green\">\n                    <span>Đã duyệt</span>\n                </label>\n                <label *ngIf=\"tabDaXuLy== 'DaXuLy' && danhSachTongHopDuTruMuaThuocTaiKhoa.TinhTrang == 2\" class=\"red\">\n                    <span>Từ chối</span>\n                </label>\n\n                <!-- chờ gửi -->\n                <label *ngIf=\"tabDaXuLy!= 'DaXuLy' && danhSachTongHopDuTruMuaThuocTaiKhoa.TinhTrang == 1\"\n                    style=\"color: sandybrown;\">\n                    <span>Chờ duyệt</span>\n                </label>\n                <label *ngIf=\"tabDaXuLy!= 'DaXuLy' && danhSachTongHopDuTruMuaThuocTaiKhoa.TinhTrang == 0\"  \n                   style=\"color: #afb42b;\">\n                    <span>Chờ gửi</span>\n                </label>\n\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-tong-hop-du-tru-mua-thuoc-tai-khoa-shared [tabSelected]=\"tabDaXuLy\"\n                    [validationErrorsDuocPham]=\"validationErrors\" [isCreate]=\"true\">\n                </app-tong-hop-du-tru-mua-thuoc-tai-khoa-shared>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet.component.html":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet.component.html ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>{{Title}}</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"min-height: 115px;\">\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <div fxFlex=\"100\" fxFlex.sm=\"100\" [innerHtml]=\"Message\"></div>\n        <app-textarea id=\"lyDo\" [(model)]=\"lyDo\" fxFlex=\"100\" fxFlex.sm=\"100\" maxlength=\"1000\" label=\"Lý do\"\n            minHeight=\"20\">\n        </app-textarea>\n    </div>\n</mat-dialog-content>\n\n\n<mat-dialog-actions align=\"end\" class=\"mt-3\">\n    <button mat-button (click)=\"close('No')\">{{ButtonNo}}</button>\n    <button mat-raised-button [disabled]=\"!lyDo\" color=\"warn\" (click)=\"close('Yes')\">{{ButtonYes}}</button>\n\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-shared/tong-hop-du-tru-mua-thuoc-tai-khoa-shared.component.html":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-shared/tong-hop-du-tru-mua-thuoc-tai-khoa-shared.component.html ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <div fxFlex=\"100%\" *ngIf=\"danhSachTongHopDuTruMuaThuocTaiKhoa.LyDoGiamDocTuChoi !== undefined && \n    danhSachTongHopDuTruMuaThuocTaiKhoa.LyDoGiamDocTuChoi !== null\">\n        <h4 style=\"color: red;\">Lý do: {{danhSachTongHopDuTruMuaThuocTaiKhoa.LyDoGiamDocTuChoi}}</h4>\n    </div>\n\n    <div fxFlex=\"100%\" *ngIf=\"danhSachTongHopDuTruMuaThuocTaiKhoa.LyDoTruongKhoaTuChoi !== undefined && \n    danhSachTongHopDuTruMuaThuocTaiKhoa.LyDoTruongKhoaTuChoi !== null\">\n        <h4 style=\"color: red;\">Lý do: {{danhSachTongHopDuTruMuaThuocTaiKhoa.LyDoTruongKhoaTuChoi}}</h4>\n    </div>\n\n    <app-textbox id=\"soPhieu\" fxFlex=\"20\" fxFlex.sm=\"20\" [(model)]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.SoPhieu\"\n        [required]=\"true\" maxlength=\"250\" label=\"Số phiếu\" [disabled]=\"true\">\n    </app-textbox>\n    <app-combobox id=\"LoaiDuTru\" fxFlex=\"20\" fxFlex.sm=\"20\" [required]=\"true\" url=\"YeuCauLinhDuocPham/GetKhoLinh\"\n        [(model)]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.LoaiDuTru\" *ngIf=\"tabSelected == 'ChoXuLy'\"\n        [modelText]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.TenLoaiDuTru\" label=\"Nhóm\" [disabled]=\"true\"\n        [validationerror]=\"'LoaiDuTru' | validationerror:validationErrors\">\n    </app-combobox>\n    <app-combobox id=\"khoNhapId\" fxFlex=\"20\" fxFlex.sm=\"20\" [required]=\"true\"\n        [(model)]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.KhoNhapId\" [disabled]=\"true\" *ngIf=\"tabSelected == 'ChoXuLy'\"\n        [modelText]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.TenKho\" url=\"YeuCauLinhDuocPham/GetKhoCurrentUser\" label=\"Kho\"\n        [validationerror]=\"'KhoNhapId' | validationerror:validationErrors\">\n    </app-combobox>\n    \n    <app-textbox id=\"KyDuTru\" fxFlex=\"20\" fxFlex.sm=\"20\" [(model)]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.KyDuTru\"\n        [required]=\"true\" maxlength=\"250\" label=\"Kỳ dự trù\" [disabled]=\"true\">\n    </app-textbox>\n\n    <!-- Nhân viên kho dược và giám đốc duyệt -->\n    <app-textbox id=\"TenNhanVienYeuCau\" fxFlex=\"20\" fxFlex.sm=\"20\"\n        [(model)]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.TenNhanVienYeuCau\" [required]=\"true\" maxlength=\"250\"\n        label=\"Người yêu cầu\" [disabled]=\"true\">\n    </app-textbox>\n    <app-datetimepicker id=\"ngayYeuCau\" fxFlex=\"20\" fxFlex.sm=\"20\"\n        [(model)]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.NgayYeuCau\" [disabled]=\"true\" [required]=\"true\"\n        label=\"Ngày yêu cầu\">\n    </app-datetimepicker>\n\n    <!-- Nhân viên kho dược và giám đốc duyệt -->\n    <app-textbox id=\"TenNhanVienKhoDuocDuyet\" fxFlex=\"20\" fxFlex.sm=\"20\" *ngIf=\"danhSachTongHopDuTruMuaThuocTaiKhoa.TenNhanVienKhoDuocDuyet !== undefined && \n             danhSachTongHopDuTruMuaThuocTaiKhoa.TenNhanVienKhoDuocDuyet !== null\"\n        [(model)]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.TenNhanVienKhoDuocDuyet\" [required]=\"true\" maxlength=\"250\"\n        label=\"Nhân viên kho dược duyệt\" [disabled]=\"true\">\n    </app-textbox>\n    <app-datetimepicker id=\"NgayKhoDuocDuyet\" fxFlex=\"20\" fxFlex.sm=\"20\" *ngIf=\"danhSachTongHopDuTruMuaThuocTaiKhoa.TenNhanVienKhoDuocDuyet !== undefined && \n             danhSachTongHopDuTruMuaThuocTaiKhoa.TenNhanVienKhoDuocDuyet !== null\"\n        [(model)]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.NgayKhoDuocDuyet\" [disabled]=\"true\" [required]=\"true\"\n        label=\"Ngày kho dược duyệt\">\n    </app-datetimepicker>\n    <app-textbox id=\"TenGiamDocDuyet\" fxFlex=\"20\" fxFlex.sm=\"20\" *ngIf=\"danhSachTongHopDuTruMuaThuocTaiKhoa.TenGiamDocDuyet !== undefined && \n    danhSachTongHopDuTruMuaThuocTaiKhoa.TenGiamDocDuyet !== null\"\n        [(model)]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.TenGiamDocDuyet\" [required]=\"true\" maxlength=\"250\"\n        label=\"Tên giám đốc\" [disabled]=\"true\">\n    </app-textbox>\n    <app-datetimepicker id=\"NgayGiamDocDuyet\" fxFlex=\"20\" fxFlex.sm=\"20\" *ngIf=\"danhSachTongHopDuTruMuaThuocTaiKhoa.TenGiamDocDuyet !== undefined && \n                                     danhSachTongHopDuTruMuaThuocTaiKhoa.TenGiamDocDuyet !== null\"\n        [(model)]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.NgayGiamDocDuyet\" [disabled]=\"true\" [required]=\"true\"\n        label=\"Ngày giám đốc duyệt\">\n    </app-datetimepicker>\n    \n    <!-- <app-textbox id=\"LyDoGiamDocTuChoi\" fxFlex=\"80\" fxFlex.sm=\"80\" *ngIf=\"danhSachTongHopDuTruMuaThuocTaiKhoa.LyDoGiamDocTuChoi !== undefined && \n        danhSachTongHopDuTruMuaThuocTaiKhoa.LyDoGiamDocTuChoi !== null\"\n        [(model)]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.LyDoGiamDocTuChoi\" [disabled]=\"true\" maxlength=\"250\"\n        label=\"Lý do giám đốc từ chối\">\n    </app-textbox> -->\n\n    <!-- Nhân viên kho dược và giám đốc duyệt -->\n\n    <app-textbox id=\"GhiChu\" fxFlex=\"80\" fxFlex.sm=\"80\" [(model)]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.GhiChu\"\n        [disabled]=\"true\" maxlength=\"250\" label=\"Ghi chú\">\n    </app-textbox>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông tin chi tiết</h3>\n    <div fxFlex=\"100%\" [style.display]=\"tabSelected == 'DaXuLy' ? 'block' : 'none'\">\n        <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n            [urlGetData]=\"urlGetDataDaXuLy\" [urlGetTotalPage]=\"urlGetTotalPageDaXuLy\"\n            [additionalSearchString]=\"duTruMuaDuocPhamTaiKhoaId\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n            [groups]=\"groups\" [checkboxAble]=\"false\" [detailTemplate]=\"detailTemplate\" [lazyLoadPage]=\"true\"\n            [autoHeight]=\"true\" [showStt]=\"true\" (extOnDataBound)=\"onDataBound($event)\">\n            <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n                <strong>{{value}}</strong>\n            </ng-template>\n        </app-grid>\n        <ng-template #detailTemplate let-dataItem>\n            <app-grid [gridColumns]=\"gridColumnsChild\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                [urlGetData]=\"urlGetDataDaXuLyChild\" [urlGetTotalPage]=\"urlGetTotalPageDaXuLyChild\" [autoHeight]=\"true\"\n                [showStt]=\"true\"\n                [additionalSearchString]=\"dataItem.DuTruMuaDuocPhamTheoKhoaId + ';' + dataItem.LaBHYT + ';'  + dataItem.DuocPhamId\">\n            </app-grid>\n        </ng-template>\n    </div>\n    <div fxFlex=\"100%\" [style.display]=\"tabSelected != 'DaXuLy' ? 'block' : 'none'\">\n        <app-grid [gridColumns]=\"gridChildThuocVacXinColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n            [sort]=\"sortDuTruChild\" [urlGetData]=\"urlGetDataGridChildAsync\"\n            [additionalSearchString]=\"duTruMuaDuocPhamId\" [urlGetTotalPage]=\"urlGetTotalPageGridChild\"\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n            [autoHeight]=\"true\" (extOnDataBound)=\"onDataBound($event)\" [groups]=\"groups\">\n        </app-grid>\n        <ng-template #nhomSLTKDuyet let-dataItem let-rowIndex=\"rowIndex\">\n            <app-textboxnumeric class=\"no-label\" [step]=\"100\" [(model)]=\"dataItem.SoLuongDuTruTruongKhoaDuyet\"\n                max=\"999999\" min=\"1\" [disabled]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.TinhTrang == 0 && tabSelected != 'DaXuLy'\">\n            </app-textboxnumeric>\n        </ng-template>\n        <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n            <strong>{{value}}</strong>\n        </ng-template>\n    </div>\n\n</div>\n\n<ng-template #khoTongTonTemplate let-dataItem>\n    <ng-template #templateInfo let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr *ngFor=\"let kho of khos\">\n                <td>{{kho.Ten}}:</td>\n                <td>{{kho.SLTon}}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <div class=\"kho-tong-ton-ng-template\" kendoTooltip>\n        <span class=\"kho-tong-ton-label\">{{dataItem.KhoTongTon}}</span>\n        <span *ngIf=\"dataItem.KhoTongTon != 0\" class=\"kho-tong-ton-ng-template\" kendoTooltip #tooltip=\"kendoTooltip\"\n            tooltipClass=\"tooltip-block\" position=\"left\" [tooltipTemplate]=\"templateInfo\" filter=\"*\">\n            <mat-icon [icIcon]=\"icInfo\" (mouseover)=\"TooltipCustom(dataItem)\" class=\"info\"></mat-icon>\n        </span>\n    </div>\n</ng-template>\n\n<ng-template #hdChuaNhapTemplate let-dataItem>\n    <ng-template #templateHdInfo let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr *ngFor=\"let hdt of hdts\">\n                <td>{{hdt.Ten}}:</td>\n                <td>{{hdt.SLTon}}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <div class=\"kho-tong-ton-ng-template\" kendoTooltip>\n        <span class=\"kho-tong-ton-label\">{{dataItem.HDChuaNhap}}</span>\n        <span *ngIf=\"dataItem.HDChuaNhap != 0\" class=\"kho-tong-ton-ng-template\" kendoTooltip #tooltip=\"kendoTooltip\"\n            tooltipClass=\"tooltip-block\" position=\"left\" [tooltipTemplate]=\"templateHdInfo\" filter=\"*\">\n            <mat-icon [icIcon]=\"icInfo\" (mouseover)=\"TooltipCustom(dataItem)\" class=\"info\"></mat-icon>\n        </span>\n    </div>\n</ng-template>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n    <button *ngIf=\"tabSelected == 'DaXuLy'\" type=\"button\" mat-button class=\"mr-1 align-left-fx\"\n        (click)=\"InPhieuTongHopTaiKhoa()\" mat-raised-button color=\"primary\"><i class=\"ft-arrow-left\"></i>\n        In phiếu tổng hợp tại khoa </button>\n    <button type=\"button\" *ngIf=\"tabSelected == 'DaXuLy'\" title=\"Phím tắt: Esc\" (click)=\"cancel()\" mat-button\n        class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i> Quay Lại</button>\n\n    <!-- Trường hợp chờ gửi  đang ở trạng thái chờ gửi thì các nút là Quay lại, HỦy duyệt 0 chờ duyet 1 chua duyet-->\n    <button *ngIf=\"danhSachTongHopDuTruMuaThuocTaiKhoa.TinhTrang == 0 && tabSelected != 'DaXuLy'\" type=\"button\"\n        title=\"Phím tắt: Esc\" (click)=\"cancel()\" mat-button class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i>\n        Quay lại</button>\n    <button *ngIf=\"danhSachTongHopDuTruMuaThuocTaiKhoa.TinhTrang == 0 && tabSelected != 'DaXuLy'\" type=\"button\"\n     (click)=\"HuyDuyet(duTruMuaDuocPhamId)\"  color=\"warn\" mat-raised-button><i class=\"ft-save\"></i>Hủy duyệt</button>\n\n    <!-- Trường hợp chửa gửi  đang ở trạng thái chờ gửi thì các nút là Quay lại, HỦy duyệt 0 chờ duyet 1 chua duyet-->\n    <button *ngIf=\"danhSachTongHopDuTruMuaThuocTaiKhoa.TinhTrang === 1 && tabSelected != 'DaXuLy'\" type=\"button\"\n        title=\"Phím tắt: Esc\" (click)=\"cancel()\" mat-button class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i>\n        Hủy</button>\n    <button *ngIf=\"danhSachTongHopDuTruMuaThuocTaiKhoa.TinhTrang === 1 && tabSelected != 'DaXuLy'\" type=\"button\"\n        (click)=\"TuChoi()\" color=\"warn\" mat-raised-button><i class=\"ft-save\"></i>Từ chối</button>\n    <button *ngIf=\"danhSachTongHopDuTruMuaThuocTaiKhoa.TinhTrang === 1 && tabSelected != 'DaXuLy'\" type=\"button\"\n        (click)=\"PheDuyet(duTruMuaDuocPhamId)\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i>\n        Duyệt</button>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared/du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared.component.html":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared/du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared.component.html ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n    <div fxFlex=\"100%\" *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == false\">\n        <h4 style=\"color: red;\">Lý do: {{danhSachTongHopDuTruMuaThuocTaiKhoa.LyDoTruongKhoaTuChoi}}</h4>\n    </div>\n\n    <app-textbox id=\"soPhieu\" fxFlex=\"20\" fxFlex.sm=\"20\" [(model)]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.SoPhieu\"\n        [required]=\"true\" maxlength=\"250\" label=\"Số phiếu\" [disabled]=\"true\">\n    </app-textbox>\n    <app-combobox id=\"LoaiDuTru\" fxFlex=\"20\" fxFlex.sm=\"20\" [required]=\"true\" url=\"YeuCauLinhDuocPham/GetKhoLinh\"\n        [(model)]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.LoaiDuTru\"\n        [modelText]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.TenLoaiDuTru\" label=\"Nhóm\" [disabled]=\"true\"\n        [validationerror]=\"'LoaiDuTru' | validationerror:validationErrors\">\n    </app-combobox>\n    <app-combobox id=\"khoNhapId\" fxFlex=\"20\" fxFlex.sm=\"20\" [required]=\"true\"\n        [(model)]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.KhoNhapId\" [disabled]=\"true\"\n        [modelText]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.TenKho\" url=\"YeuCauLinhDuocPham/GetKhoCurrentUser\" label=\"Kho\"\n        [validationerror]=\"'KhoNhapId' | validationerror:validationErrors\">\n    </app-combobox>\n    <app-textbox id=\"KyDuTru\" fxFlex=\"20\" fxFlex.sm=\"20\" [(model)]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.KyDuTru\"\n        [required]=\"true\" maxlength=\"250\" label=\"Kỳ dự trù\" [disabled]=\"true\">\n    </app-textbox>\n    <app-textbox id=\"TenNhanVienYeuCau\" fxFlex=\"20\" fxFlex.sm=\"20\"\n        [(model)]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.TenNhanVienYeuCau\" [required]=\"true\" maxlength=\"250\"\n        label=\"Người yêu cầu\" [disabled]=\"true\">\n    </app-textbox>\n    <app-datetimepicker id=\"ngayYeuCau\" fxFlex=\"20\" fxFlex.sm=\"20\"\n        [(model)]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.NgayYeuCau\" [disabled]=\"true\" [required]=\"true\"\n        label=\"Ngày yêu cầu\">\n    </app-datetimepicker>\n    <app-textbox id=\"GhiChu\" fxFlex=\"80\" fxFlex.sm=\"80\" [(model)]=\"danhSachTongHopDuTruMuaThuocTaiKhoa.GhiChu\"\n        [disabled]=\"true\" [required]=\"true\" maxlength=\"250\" label=\"Ghi chú\">\n    </app-textbox>\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông tin chi tiết</h3>\n    <!-- <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\" [sort]=\"sortDuTruChild\"\n        [urlGetData]=\"urlGetData\" [urlGetTotalPage]=\"urlGetTotal\" [additionalSearchString]=\"duTruMuaDuocPhamId\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [groups]=\"groups\" [checkboxAble]=\"false\"\n        [detailTemplate]=\"detailTemplate\" [lazyLoadPage]=\"true\" [autoHeight]=\"true\" [showStt]=\"true\"\n        (extOnDataBound)=\"onDataBound($event)\">\n        <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n            <strong>{{value}}</strong>\n        </ng-template>\n    </app-grid>\n    <ng-template #detailTemplate let-dataItem>\n        <app-grid [gridColumns]=\"gridChildColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n            [urlGetData]=\"urlGetDataChild\" [urlGetTotalPage]=\"urlGetTotalChild\" [autoHeight]=\"true\" [showStt]=\"true\"\n            [additionalSearchString]=\"dataItem.DuTruMuaDuocPhamTheoKhoaChiTietId + ';' + dataItem.LaBHYT\">\n        </app-grid>\n    </ng-template> -->\n    <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\" [sort]=\"sortDuTruChild\"\n        [urlGetData]=\"urlGetData\" [urlGetTotalPage]=\"urlGetTotal\" [additionalSearchString]=\"duTruMuaDuocPhamId\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [groups]=\"groups\" [checkboxAble]=\"false\"\n        [lazyLoadPage]=\"true\" [autoHeight]=\"true\" [showStt]=\"true\">\n        <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n            <strong>{{value}}</strong>\n        </ng-template>\n    </app-grid>\n</div>");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/ds-tong-hop-du-tru-mua-thuoc-tai-khoa/ds-tong-hop-du-tru-mua-thuoc-tai-khoa.component.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/ds-tong-hop-du-tru-mua-thuoc-tai-khoa/ds-tong-hop-du-tru-mua-thuoc-tai-khoa.component.scss ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".info {\n  margin-bottom: -8px;\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS9kcy10b25nLWhvcC1kdS10cnUtbXVhLXRodW9jLXRhaS1raG9hL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFxkdW9jLXBoYW1cXHRvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2FcXGRzLXRvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2FcXGRzLXRvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2EuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3RvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2EvZHMtdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS9kcy10b25nLWhvcC1kdS10cnUtbXVhLXRodW9jLXRhaS1raG9hLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS90b25nLWhvcC1kdS10cnUtbXVhLXRodW9jLXRhaS1raG9hL2RzLXRvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2EvZHMtdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZvIHtcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufSIsIi5pbmZvIHtcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/ds-tong-hop-du-tru-mua-thuoc-tai-khoa/ds-tong-hop-du-tru-mua-thuoc-tai-khoa.component.ts":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/ds-tong-hop-du-tru-mua-thuoc-tai-khoa/ds-tong-hop-du-tru-mua-thuoc-tai-khoa.component.ts ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: DsTongHopDuTruMuaThuocTaiKhoaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsTongHopDuTruMuaThuocTaiKhoaComponent", function() { return DsTongHopDuTruMuaThuocTaiKhoaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @iconify/icons-ic/cancel */ "./node_modules/@iconify/icons-ic/cancel.js");
/* harmony import */ var _iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _tong_hop_du_tru_mua_thuoc_tai_khoa_model__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-thuoc-tai-khoa.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa.model.ts");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _tong_hop_du_tru_mua_thuoc_tai_khoa_khong_duyet_tong_hop_du_tru_mua_thuoc_tai_khoa_khong_duyet_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet.component.ts");
/* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @iconify/icons-ic/baseline-info */ "./node_modules/@iconify/icons-ic/baseline-info.js");
/* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_30__);































let DsTongHopDuTruMuaThuocTaiKhoaComponent = class DsTongHopDuTruMuaThuocTaiKhoaComponent {
    constructor(dialog, router, apiService, authService, notificationService, cd, route, location) {
        this.dialog = dialog;
        this.router = router;
        this.apiService = apiService;
        this.authService = authService;
        this.notificationService = notificationService;
        this.cd = cd;
        this.route = route;
        this.location = location;
        this.lstStatusSelectTabTHDTKhoa = new _tong_hop_du_tru_mua_thuoc_tai_khoa_model__WEBPACK_IMPORTED_MODULE_25__["ListStatusSelectTabTHDTKhoa"]();
        this.thongTinLyDoHuyDuyetTaiKhoa = {};
        this.duyetDuTruMuaDuocPhamViewModel = {};
        this.tongHopDuTruMuaThuocTaiKhoa = [];
        this.baseRoute = "/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa";
        this.khos = [];
        this.hdts = [];
        this.icInfo = _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_30___default.a;
        this.urlGetDataGridChildAsync = "YeuCauMuaDuocPham/GetDuTruMuaDuocPhamDangChoXuLyTaiKhoaChiTietForGridAsync";
        this.urlGetTotalPageGridChild = "YeuCauMuaDuocPham/GetTotalDuTruMuaDuocPhamDangChoXuLyTaiKhoaChiTietForGridAsync";
        this.urlDSTHDTTuChoiChildAsync = "YeuCauMuaDuocPham/GetDSTHDTTuChoiChildForGridAsync";
        this.urlGetTotalDSTHDTTuChoiChild = "YeuCauMuaDuocPham/GetTotalDSTHDTTuChoiChildForGridAsync";
        this.popupLoadingData = null;
        this.addtionStringDefault = null;
        this.addtionStringDefaultDaXuLy = null;
        this.addtionStringDefaultTuChoi = null;
        this.gridColumns = [];
        this.gridDaXuLyColumns = [];
        this.gridDaXuLyChiTietColumns = [];
        this.gridDaXuLyChiTietChildColumns = [];
        this.urlGetDataDaXuLyChiTietChild = "YeuCauMuaDuocPham/GetDuTruMuaDuocPhamChiTietForGridAsyncChild";
        this.urlGetTotalDaXuLyChiTietChild = "YeuCauMuaDuocPham/GetTotalDuTruMuaDuocPhamChiTietForGridAsyncChild";
        this.gridChildThuocVacXinColumns = [];
        this.gridChildTuChoiChildColumns = [];
        this.gridChildThuocHoaChatColumns = [];
        this.gridTuChoiXuLyColumns = [];
        this.validationErrors = [];
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_22___default.a;
        this.icCancel = _iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_21___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_18___default.a;
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_17___default.a;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_24___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_20___default.a;
        this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_23___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_16___default.a;
        this.holdQuery = null;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.searchCtrlDaXuLy = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.searchCtrlTuChoi = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.groupChiTietTabChoGoi = [{ field: 'Nhom' }];
        this.groupTuChois = [{ field: 'Nhom' }];
        this.groupDaXuLyChiTietChilds = [{ field: 'Nhom' }];
        this.sort = [
            {
                field: "NgayYeuCau",
                dir: "desc",
            },
        ];
        this.sortDuTruChoXuLy = [
            {
                field: "SoPhieu",
                dir: "asc"
            }
        ];
        this.sortDuTruChild = [
            {
                field: "Id",
                dir: "asc"
            }
        ];
        this.groups = [{
                field: 'TrangThai', aggregates: [
                    { field: 'Nhom', aggregate: 'count' },
                    { field: 'TrangThai', aggregate: 'count' },
                ]
            }];
        this.sortDaGoi = [{
                field: "TinhTrang",
                dir: "asc"
            }, {
                field: "NgayYeuCau",
                dir: "asc"
            }];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhSachTongHopDuTruMuaDuocPhamTaiKhoa;
        this.danhSachTongHopDuTruMuaThuocTaiKhoa = new _tong_hop_du_tru_mua_thuoc_tai_khoa_model__WEBPACK_IMPORTED_MODULE_25__["TongHopDuTruMuaThuocTaiKhoaSreach"]();
        this.backWithSearch();
        this.gridColumns = [
            { Field: "TrangThai", Title: "TrangThai", Width: 100, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "SoPhieu", Title: "Số Phiếu", Width: 120, Sortable: true, Template: this.soPhieuTemplate },
            { Field: "LoaiNhom", Title: "Nhóm", Width: 150, Sortable: true },
            { Field: "TenKho", Title: "Kho", MinWidth: 150, Sortable: true },
            { Field: "KyDuTru", Title: "Kỳ dự trù", Width: 160, Sortable: true },
            { Field: "NgayYeuCauDisplay", Title: "Ngày yêu cầu", Width: 150, Sortable: true },
            { Field: "NguoiYeuCau", Title: "Người yêu cầu", Width: 150, Sortable: true },
            { Field: "NgayTruongKhoaDuyetDisplay", Title: "Ngày T.Khoa Duyệt", Width: 150, Sortable: true },
            { Field: "Action", Title: "", Width: 150, Template: this.actionTemplate },
        ];
        //grid đã xữ lý
        this.gridDaXuLyColumns = [
            { Field: "SoPhieu", Title: "Số Phiếu", Width: 120, Sortable: true, Template: this.soPhieuDaXuLyTemplate },
            { Field: "TenKhoa", Title: "Khoa", Width: 150, Sortable: true },
            { Field: "KyDuTru", Title: "kỳ dự trù", Width: 160, Sortable: true },
            { Field: "NguoiYeuCau", Title: "Người Yêu Cầu", Width: 150, Sortable: true },
            { Field: "NgayYeuCau", Title: "Ngày Yêu Cầu", Width: 150, Sortable: true, Template: this.ngayYeuCauDaXuLyTemplate },
            { Field: "TinhTrang", Title: "Tình Trạng", Width: 150, Template: this.tinhTrangTemplate },
            { Field: "NgayKhoDuocDuyet", Title: "Ngày K.Dược Duyệt", Width: 150, Sortable: true, Template: this.ngayKhoDuocDaXuLyTemplate },
            { Field: "NgayGiamDocDuyet", Title: "Ngày G.ĐỐC Duyệt", Width: 150, Sortable: true, Template: this.ngayGiamDocDaXuLyTemplate },
            { Field: "GhiChu", Title: "Ghi chú", Width: 150, Sortable: true },
        ];
        this.gridDaXuLyChiTietColumns = [
            { Field: "SoPhieu", Title: "Số Phiếu", Width: 120, Template: this.soPhieuDaXuLyChiTietTemplate },
            { Field: "LoaiNhom", Title: "Nhóm", Width: 120 },
            { Field: "TenKho", Title: "Kho", Width: 150 },
            { Field: "KyDuTru", Title: "kỳ dự trù", Width: 160 },
            { Field: "NgayYeuCau", Title: "Ngày Yêu Cầu", Width: 150, Template: this.ngayYeuCauDetailDaXuLyTemplate },
            { Field: "NguoiYeuCau", Title: "Người Yêu Cầu", Width: 150 },
            { Field: "NgayTruongKhoaDuyet", Title: "Ngày T.Khoa Duyệt", Width: 150, Template: this.ngayTruongKhoaDaXuLyTemplate },
        ];
        this.gridDaXuLyChiTietChildColumns = [
            { Field: "Nhom", Title: "Nhóm", Width: 100, Hidden: true, TemplateGroupHeader: this.nhomGroupDaXuLyChildHeaderTemplate },
            { Field: "TenDuocPham", Title: "Tên", Width: 100, ShowTooltip: true },
            { Field: "HoatChat", Title: "Hoạt chất", Width: 120, ShowTooltip: true },
            { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 80 },
            { Field: "DonViTinh", Title: "ĐVT", Width: 50 },
            { Field: "DuongDung", Title: "Đường Dùng", Width: 50 },
            { Field: "HangSanXuat", Title: "Hãng SX", Width: 100 },
            { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
            { Field: "NhomDuPhong", Title: "Nhóm Đ.Trị/D.Phòng", Width: 80 },
            { Field: "SoLuongDuTru", Title: "SL Dự Trù", Width: 120 },
            { Field: "SoLuongDuKienSuDung", Title: "SL D.KIẾN S.DỤNG TRONG KỲ", Width: 120 },
            { Field: "SoLuongDuTruTruongKhoaDuyet", Title: "SL Dự Trù T.Khoa Duyệt", Width: 100 },
        ];
        //grid từ chối
        this.gridTuChoiXuLyColumns = [
            { Field: "SoPhieu", Title: "Số Phiếu", Width: 120, Sortable: true, Template: this.soPhieuTuChoiTemplate },
            { Field: "LoaiNhom", Title: "Nhóm", Width: 150, Sortable: true },
            { Field: "TenKho", Title: "Kho", Width: 150, Sortable: true },
            { Field: "KyDuTru", Title: "kỳ dự trù", Width: 160, Sortable: true },
            { Field: "NgayYeuCau", Title: "Ngày yêu cầu", Width: 150, Sortable: true, Template: this.ngayYeuCauTuChoiTemplate },
            { Field: "NguoiYeuCau", Title: "Người yêu cầu", Width: 150, Sortable: true },
            { Field: "NgayTuChoi", Title: "Ngày Từ Chối", Width: 150, Sortable: true, Template: this.ngayTuChoiTemplate },
            { Field: "NguoiTuChoi", Title: "Người từ chối", Width: 150, Sortable: true },
            { Field: "LyDoTuChoi", Title: "Lý Do", MinWidth: 150, Sortable: true },
        ];
        this.gridChildTuChoiChildColumns = [
            // { Field: "Nhom", Title: "Loại", Width: 100, ShowTooltip: true },
            { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupTuChoiHeaderTemplate },
            { Field: "TenDuocPham", Title: "Tên", Width: 100, ShowTooltip: true },
            { Field: "HoatChat", Title: "Hoạt chất", Width: 120, ShowTooltip: true },
            { Field: "HamLuong", Title: "Nồng độ/Hàm lượng", Width: 80 },
            { Field: "SoDangKy", Title: "SĐK", Width: 50 },
            { Field: "DonViTinh", Title: "ĐVT", Width: 50 },
            { Field: "DuongDung", Title: "Đường Dùng", Width: 50 },
            { Field: "HangSanXuat", Title: "Hãng SX", Width: 100 },
            { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
            { Field: "NhomDuPhong", Title: "Nhóm Đ.Trị/D.Phòng", Width: 80 },
            { Field: "SoLuongDuTru", Title: "SL Dự Trù", Width: 120 },
            { Field: "SoLuongDuKienSuDung", Title: "SL D.KIẾN S.DỤNG TRONG KỲ", Width: 120 },
        ];
        this.gridChildThuocVacXinColumns = [
            { Field: "Nhom", Title: "Loại", Width: 100, ShowTooltip: true, Hidden: true, TemplateGroupHeader: this.nhomChiTietTabChoGoiTemplate },
            { Field: "TenDuocPham", Title: "Tên", Width: 100, ShowTooltip: true },
            { Field: "HoatChat", Title: "Hoạt chất", Width: 120, ShowTooltip: true },
            { Field: "HamLuong", Title: "Nồng độ/Hàm lượng", Width: 80 },
            { Field: "SoDangKy", Title: "SĐK", Width: 50 },
            { Field: "DonViTinh", Title: "ĐVT", Width: 50 },
            { Field: "DuongDung", Title: "Đường Dùng", Width: 50 },
            { Field: "HangSanXuat", Title: "Hãng SX", Width: 100 },
            { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
            { Field: "NhomDuPhong", Title: "Nhóm Đ.Trị/D.Phòng", Width: 80 },
            { Field: "SoLuongDuTru", Title: "SL Dự Trù", Width: 120 },
            { Field: "SoLuongDuKienSuDung", Title: "SL D.KIẾN S.DỤNG TRONG KỲ", Width: 120 },
            { Field: "KhoDuTruTon", Title: "Kho D.Trù Tồn", Width: 80 },
            { Field: 'KhoTongTon', Title: 'Kho Tổng Tồn', Width: 80, Template: this.khoTongTonTemplate },
            { Field: 'HDChuaNhap', Title: 'H.Đồng Chưa Nhập', Width: 100, Template: this.hdChuaNhapTemplate },
        ];
    }
    backWithSearch() {
        let hasLocalSearchString = false;
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
            let holdQuery = this.route.snapshot.queryParams.holdQuery;
            if (holdQuery != null && holdQuery) {
                var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].getItem("additionalSearchStringdanhSachTongHopDuTruMuaThuocTaiKhoa");
                var selectedTab = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].getItem("additionalSearchStringdanhSachTongHopDuTruMuaThuocTaiKhoaSelectedTab");
                if (additionalSearchString != null) {
                    this.danhSachTongHopDuTruMuaThuocTaiKhoa = JSON.parse(additionalSearchString);
                    //Chờ xử lý
                    if (this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.TuNgay != null
                        && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.TuNgay != 'null' && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.TuNgay != '') {
                        this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.startDate = new Date(this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.startDate);
                    }
                    else {
                        this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.startDate = null;
                    }
                    if (this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.DenNgay != null
                        && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.DenNgay != 'null' && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.DenNgay != '') {
                        this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.endDate = new Date(this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.endDate);
                    }
                    else {
                        this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.endDate = null;
                    }
                    // Đã xử lý
                    if (this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.TuNgay != null
                        && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.TuNgay != 'null'
                        && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.TuNgay != '') {
                        this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.startDate = new Date(this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.startDate);
                    }
                    else {
                        this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.startDate = null;
                    }
                    if (this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.DenNgay != null
                        && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.DenNgay != 'null'
                        && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.DenNgay != '') {
                        this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.endDate = new Date(this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.endDate);
                    }
                    else {
                        this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.endDate = null;
                    }
                    //Từ chối
                    if (this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.TuNgay != null
                        && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.TuNgay != 'null'
                        && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.TuNgay != '') {
                        this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.startDate = new Date(this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.startDate);
                    }
                    else {
                        this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.startDate = null;
                    }
                    if (this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.DenNgay != null
                        && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.DenNgay != 'null'
                        && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.DenNgay != '') {
                        this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.endDate = new Date(this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.endDate);
                    }
                    else {
                        this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.endDate = null;
                    }
                    hasLocalSearchString = true;
                }
                if (selectedTab != null) {
                    this.lstStatusSelectTabTHDTKhoa = JSON.parse(selectedTab);
                    if (this.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy == true) {
                        if (additionalSearchString != null && this.gridChoDuyet != undefined) {
                            this.gridChoDuyet._additionalSearchString = additionalSearchString;
                        }
                        this.addtionStringDefault = additionalSearchString;
                    }
                    else if (this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy == true) {
                        if (additionalSearchString != null && this.gridChildDaXuLy != undefined) {
                            this.gridChildDaXuLy._additionalSearchString = additionalSearchString;
                        }
                        this.addtionStringDefaultDaXuLy = additionalSearchString;
                    }
                    else {
                        if (additionalSearchString != null && this.gridChildTuChoi != undefined) {
                            this.gridChildTuChoi._additionalSearchString = additionalSearchString;
                        }
                        this.addtionStringDefaultTuChoi = additionalSearchString;
                    }
                    hasLocalSearchString = true;
                }
            }
        }
        if (!hasLocalSearchString) {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].removeItem("additionalSearchStringdanhSachTongHopDuTruMuaThuocTaiKhoa");
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].removeItem("additionalSearchStringdanhSachTongHopDuTruMuaThuocTaiKhoaSelectedTab");
        }
    }
    theFirstValueFormat(str) {
        let strGroup = str.split('.');
        if (strGroup.length != 0) {
            return strGroup[0];
        }
    }
    theFirstValueFormatChuKy(str) {
        let strGroup = str.split('.');
        if (strGroup.length != 0) {
            if (strGroup[1] !== undefined) {
                return strGroup[1];
            }
        }
    }
    blur() {
        this.timKiem();
    }
    onKey(event) {
        if (event.key == "Enter") {
            this.timKiem();
        }
    }
    // clearSearch() {
    //   this.danhSachTongHopDuTruMuaThuocTaiKhoa.SearchString = null;
    //   if (this.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy == true) {
    //     this.gridChoDuyet.search();
    //   } else if (this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy == true) {
    //     this.gridChildDaXuLy.search();
    //   } else {
    //     this.gridChildTuChoi.search();
    //   }
    //   // this.gridChoDuyet.search();
    // }
    searchChanges(event) {
        var self = this;
        if (event != undefined && (event == null || event == "")) {
            if (self.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy == true) {
                if (self.gridChoDuyet != undefined) {
                    self.gridChoDuyet.searchString = null;
                }
            }
            else if (self.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy == true) {
                if (self.gridChildDaXuLy != undefined) {
                    self.gridChildDaXuLy.searchString = null;
                }
            }
            else {
                if (self.gridChildTuChoi != undefined) {
                    self.gridChildTuChoi.searchString = null;
                }
            }
            self.timKiem();
        }
    }
    timKiem() {
        this.location.replaceState(this.baseRoute + '?holdQuery=true');
        // if (this.danhSachTongHopDuTruMuaThuocTaiKhoa.NgayYeuCauTuFormat != null) {
        //   this.danhSachTongHopDuTruMuaThuocTaiKhoa.FromDate = CommonService.formatDateTime(this.danhSachTongHopDuTruMuaThuocTaiKhoa.NgayYeuCauTuFormat, "dd/mm/yyyy");
        // } else {
        //   this.danhSachTongHopDuTruMuaThuocTaiKhoa.FromDate = null;
        // }
        // if (this.danhSachTongHopDuTruMuaThuocTaiKhoa.NgayYeuCauDenFormat != null) {
        //   this.danhSachTongHopDuTruMuaThuocTaiKhoa.ToDate = CommonService.formatDateTime(this.danhSachTongHopDuTruMuaThuocTaiKhoa.NgayYeuCauDenFormat, "dd/mm/yyyy");
        // } else {
        //   this.danhSachTongHopDuTruMuaThuocTaiKhoa.ToDate = null;
        // }
        //Chờ xử lý
        if (this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate != null && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.startDate != null) {
            this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.startDate, "mm/dd/yyyy");
        }
        else {
            this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.TuNgay = null;
        }
        if (this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate != null && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.endDate != null) {
            this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.endDate, "mm/dd/yyyy");
        }
        else {
            this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.DenNgay = null;
        }
        // Đã xử lý
        if (this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy != null && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.startDate != null) {
            this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.startDate, "mm/dd/yyyy");
        }
        else {
            this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.TuNgay = null;
        }
        if (this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy != null && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.endDate != null) {
            this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.endDate, "mm/dd/yyyy");
        }
        else {
            this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.DenNgay = null;
        }
        //Từ chối
        if (this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi != null && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.startDate != null) {
            this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.startDate, "mm/dd/yyyy");
        }
        else {
            this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.TuNgay = null;
        }
        if (this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi != null && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.endDate != null) {
            this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.endDate, "mm/dd/yyyy");
        }
        else {
            this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.DenNgay = null;
        }
        var queryString = JSON.stringify(this.danhSachTongHopDuTruMuaThuocTaiKhoa);
        if (this.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy == true) {
            console.log(this.danhSachTongHopDuTruMuaThuocTaiKhoa);
            if (this.gridChoDuyet != undefined && this.gridChoDuyet != null) {
                this.gridChoDuyet._additionalSearchString = queryString;
                this.gridChoDuyet.search();
            }
            this.unSelectedTab();
            this.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy = true;
            let queryStringLstselectedTab = JSON.stringify(this.lstStatusSelectTabTHDTKhoa);
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].setItem("additionalSearchStringdanhSachTongHopDuTruMuaThuocTaiKhoaSelectedTab", queryStringLstselectedTab);
        }
        else if (this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy == true) {
            if (this.gridChildDaXuLy != undefined && this.gridChildDaXuLy != null) {
                this.gridChildDaXuLy._additionalSearchString = queryString;
                this.gridChildDaXuLy.search();
            }
            this.unSelectedTab();
            this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy = true;
            let queryStringLstselectedTab = JSON.stringify(this.lstStatusSelectTabTHDTKhoa);
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].setItem("additionalSearchStringdanhSachTongHopDuTruMuaThuocTaiKhoaSelectedTab", queryStringLstselectedTab);
        }
        else {
            if (this.gridChildTuChoi != undefined && this.gridChildTuChoi != null) {
                this.gridChildTuChoi._additionalSearchString = queryString;
                this.gridChildTuChoi.search();
            }
            this.unSelectedTab();
            this.lstStatusSelectTabTHDTKhoa.selectedTabTuChoi = true;
            let queryStringLstselectedTab = JSON.stringify(this.lstStatusSelectTabTHDTKhoa);
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].setItem("additionalSearchStringdanhSachTongHopDuTruMuaThuocTaiKhoaSelectedTab", queryStringLstselectedTab);
        }
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].setItem("additionalSearchStringdanhSachTongHopDuTruMuaThuocTaiKhoa", queryString);
    }
    guiKhoaDuyetTatCa(val) {
        var kyDuTruMuaDuocPhamVatTuId = this.tongHopDuTruMuaThuocTaiKhoa.filter(cc => cc.TrangThai == val).map(cc => cc.KyDuTruMuaDuocPhamVatTuId)[0];
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
            this.router.navigate(["/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa/gui/" + kyDuTruMuaDuocPhamVatTuId]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    tuChoiDuyet(id) {
    }
    huyDuyet(id) {
    }
    chiTiet(id, trangThai) {
        if (trangThai == 1 || trangThai == 0) { //Đã duyệt hoặc từ chối
            if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
                this.router.navigate(["/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa/chi-tiet/" + id]);
            }
            else {
                this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
            }
        }
        else { // chờ duyệt
            if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
                this.router.navigate(["/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa/duyet/" + id + "/" + false]);
            }
            else {
                this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
            }
        }
    }
    chiTietTuChoi(id) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
            this.router.navigate(["/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa/chi-tiet/" + id]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    inPhieuLinh(id) {
    }
    loadingPage() {
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang tải dữ liệu..." },
        });
    }
    TuChoi(id) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
            if (this.confrim != null) {
                this.dialog.closeAll();
                this.confrim = null;
            }
            this.confrim = this.dialog.open(_tong_hop_du_tru_mua_thuoc_tai_khoa_khong_duyet_tong_hop_du_tru_mua_thuoc_tai_khoa_khong_duyet_component__WEBPACK_IMPORTED_MODULE_29__["TongHopDuTruMuaThuocTaiKhoaKhongDuyetComponent"], {
                disableClose: true,
                width: "400px",
                height: "300px",
            }).afterClosed().subscribe((result) => {
                if (result != "" && result != undefined) {
                    this.thongTinLyDoHuyDuyetTaiKhoa.LyDoHuy = result;
                    this.thongTinLyDoHuyDuyetTaiKhoa.Id = id;
                    this.apiService.post("YeuCauMuaDuocPham/TuChoiDuyetTaiKhoa", this.thongTinLyDoHuyDuyetTaiKhoa)
                        .subscribe((resultData) => {
                        if (resultData !== null && resultData !== undefined) {
                            if (resultData) {
                                this.gridChoDuyet.search();
                                this.notificationService.showSuccess("Từ chối duyệt thành công.");
                            }
                        }
                    });
                }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    PheDuyet(id) {
        this.duyetDuTruMuaDuocPhamViewModel.DuTruMuaDuocPhamId = id;
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
            if (this.confrim != null) {
                this.dialog.closeAll();
                this.confrim = null;
            }
            this.confrim = this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_28__["ConfirmComponent"], {
                disableClose: false,
                width: "400px",
                data: {
                    Title: "Xác nhận",
                    Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].MessConfirm, [
                        "Duyệt",
                    ]),
                },
            })
                .afterClosed()
                .subscribe((result) => {
                /* result is a string:Yes,No,No answer*/
                if (result == "Yes") {
                    this.apiService.post("YeuCauMuaDuocPham/DuyetTaiKhoa/", this.duyetDuTruMuaDuocPhamViewModel)
                        .subscribe((resultData) => {
                        if (resultData !== null && resultData !== undefined) {
                            if (resultData) {
                                this.gridChoDuyet.search();
                                this.notificationService.showSuccess("Duyệt thành công.");
                            }
                            else {
                                this.notificationService.showError("Duyệt không thành công.");
                            }
                        }
                    });
                }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    HuyDuyet(id) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
            if (this.confrim != null) {
                this.dialog.closeAll();
                this.confrim = null;
            }
            this.confrim = this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_28__["ConfirmComponent"], {
                disableClose: false,
                width: "400px",
                data: {
                    Title: "Xác nhận",
                    Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].MessConfirm, [
                        "Hủy Duyệt",
                    ]),
                },
            })
                .afterClosed()
                .subscribe((result) => {
                /* result is a string:Yes,No,No answer*/
                if (result == "Yes") {
                    this.apiService.post("YeuCauMuaDuocPham/HuyDuyetTaiKhoa/" + id)
                        .subscribe((resultData) => {
                        if (resultData !== null && resultData !== undefined) {
                            if (resultData) {
                                this.gridChoDuyet.search();
                                this.notificationService.showSuccess("Hủy Duyệt thành công.");
                            }
                            else {
                                this.notificationService.showError("Hủy không thành công.");
                            }
                        }
                    });
                }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    changeTabParent(element, event) {
    }
    CheckboxChange($event, choDuyet = false, daDuyet = false) {
        this.router.navigateByUrl("/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa?holdQuery=true");
        if (choDuyet) {
            this.danhSachTongHopDuTruMuaThuocTaiKhoa.ChoDuyet = $event;
        }
        else if (daDuyet) {
            this.danhSachTongHopDuTruMuaThuocTaiKhoa.DaDuyet = $event;
        }
        this.timKiem();
    }
    onDataBound(event) {
        if (event != undefined && event.Data.length > 0) {
            this.tongHopDuTruMuaThuocTaiKhoa = event.Data;
        }
    }
    chiTietDaXuLyParent(id) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
            this.router.navigate(["/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa/duyet/" + id + "/" + true]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    chiTietDaXuLy(id, tinhTrang, isParent) {
        // tinh trang => 1 : đã duyệt, 2: từ chối, isParent => 0: Cha, 1: Con
        if ((tinhTrang == 1 || tinhTrang == 2) && isParent == 0) {
            if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].View)) {
                this.router.navigate(["/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa/chi-tiet/" + id]);
            }
            else {
                this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
            }
        }
        else if ((tinhTrang == 1 || tinhTrang == 2) && isParent == 1) {
            if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].View)) {
                this.router.navigate(["/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa/chi-tiet/" + id]);
            }
            else {
                this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
            }
        }
        else if (tinhTrang == 0 && isParent == 0) {
            if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
                this.router.navigate(["/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa/duyet/" + id + "/" + true]);
            }
            else {
                this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
            }
        }
        else if (tinhTrang == 0 && isParent == 1) {
            if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].View)) {
                this.router.navigate(["/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa/chi-tiet/" + id]);
            }
            else {
                this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
            }
        }
    }
    unSelectedTab() {
        this.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy = false;
        this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy = false;
        this.lstStatusSelectTabTHDTKhoa.selectedTabTuChoi = false;
    }
    chuyenDen(element, event) {
        // console.log("lstStatusSelectTabTHDTKhoa: ", this.lstStatusSelectTabTHDTKhoa)
        var self = this;
        self.location.replaceState(self.baseRoute + '?holdQuery=true');
        var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].getItem("additionalSearchStringdanhSachTongHopDuTruMuaThuocTaiKhoa");
        if (event.index == 0 || event.title == "CHỜ XỬ LÝ") {
            self.unSelectedTab();
            self.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy = true;
            let queryString = JSON.stringify(self.lstStatusSelectTabTHDTKhoa);
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].setItem("additionalSearchStringdanhSachTongHopDuTruMuaThuocTaiKhoaSelectedTab", queryString);
            this.addtionStringDefault = additionalSearchString;
            let addtionTemp = JSON.parse(additionalSearchString);
            if (addtionTemp != null && addtionTemp.SearchString !== undefined && addtionTemp.SearchString !== null && addtionTemp.SearchString !== "") {
                this.danhSachTongHopDuTruMuaThuocTaiKhoa.SearchString = addtionTemp.SearchString;
            }
        }
        else if (event.index == 1 || event.title == "ĐÃ GỬI") {
            self.unSelectedTab();
            self.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy = true;
            let queryString = JSON.stringify(self.lstStatusSelectTabTHDTKhoa);
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].setItem("additionalSearchStringdanhSachTongHopDuTruMuaThuocTaiKhoaSelectedTab", queryString);
            this.addtionStringDefaultDaXuLy = additionalSearchString;
            let addtionTemp = JSON.parse(additionalSearchString);
            if (addtionTemp != null && addtionTemp.SearchStringDaXuLy !== undefined && addtionTemp.SearchStringDaXuLy !== null && addtionTemp.SearchStringDaXuLy !== "") {
                this.danhSachTongHopDuTruMuaThuocTaiKhoa.SearchStringDaXuLy = addtionTemp.SearchStringDaXuLy;
            }
        }
        else if (event.index == 2 || event.title == "TỪ CHỐI") {
            self.unSelectedTab();
            self.lstStatusSelectTabTHDTKhoa.selectedTabTuChoi = true;
            let queryString = JSON.stringify(self.lstStatusSelectTabTHDTKhoa);
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].setItem("additionalSearchStringdanhSachTongHopDuTruMuaThuocTaiKhoaSelectedTab", queryString);
            this.addtionStringDefaultTuChoi = additionalSearchString;
            let addtionTemp = JSON.parse(additionalSearchString);
            if (addtionTemp != null && addtionTemp.SearchStringTuChoi !== undefined && addtionTemp.SearchStringTuChoi !== null && addtionTemp.SearchStringTuChoi !== "") {
                this.danhSachTongHopDuTruMuaThuocTaiKhoa.SearchStringTuChoi = addtionTemp.SearchStringTuChoi;
            }
        }
    }
    TooltipCustom(duTruGiamDocDetail) {
        this.khos = [...duTruGiamDocDetail.ThongTinChiTietTonKhoTongs];
        this.hdts = [...duTruGiamDocDetail.ThongTinChiTietTonHDTs];
    }
    trangThaiCheckBox(event, tinhTrang, tabSelected) {
        if (tabSelected == 1) {
            if (tinhTrang == "choduyet") {
                this.danhSachTongHopDuTruMuaThuocTaiKhoa.DaGuiChoDuyet = event;
            }
            if (tinhTrang == "daduyet") {
                this.danhSachTongHopDuTruMuaThuocTaiKhoa.DaDuyetDaXuLy = event;
            }
            if (tinhTrang == "tuchoi") {
                this.danhSachTongHopDuTruMuaThuocTaiKhoa.TuChoiDuyet = event;
            }
            this.timKiem();
        }
        else {
            if (tinhTrang == "choduyet") {
                this.danhSachTongHopDuTruMuaThuocTaiKhoa.ChoDuyet = event;
            }
            if (tinhTrang == "chogoi") {
                this.danhSachTongHopDuTruMuaThuocTaiKhoa.DaDuyet = event;
            }
            this.timKiem();
        }
    }
};
DsTongHopDuTruMuaThuocTaiKhoaComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_14__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], DsTongHopDuTruMuaThuocTaiKhoaComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tinhTrangTemplate', { static: true })
], DsTongHopDuTruMuaThuocTaiKhoaComponent.prototype, "tinhTrangTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayYeuCauDaXuLyTemplate', { static: true })
], DsTongHopDuTruMuaThuocTaiKhoaComponent.prototype, "ngayYeuCauDaXuLyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayYeuCauDetailDaXuLyTemplate', { static: true })
], DsTongHopDuTruMuaThuocTaiKhoaComponent.prototype, "ngayYeuCauDetailDaXuLyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayKhoDuocDaXuLyTemplate', { static: true })
], DsTongHopDuTruMuaThuocTaiKhoaComponent.prototype, "ngayKhoDuocDaXuLyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayTruongKhoaDaXuLyTemplate', { static: true })
], DsTongHopDuTruMuaThuocTaiKhoaComponent.prototype, "ngayTruongKhoaDaXuLyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('khoTongTonTemplate', { static: true })
], DsTongHopDuTruMuaThuocTaiKhoaComponent.prototype, "khoTongTonTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayGiamDocDaXuLyTemplate', { static: true })
], DsTongHopDuTruMuaThuocTaiKhoaComponent.prototype, "ngayGiamDocDaXuLyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hdChuaNhapTemplate', { static: true })
], DsTongHopDuTruMuaThuocTaiKhoaComponent.prototype, "hdChuaNhapTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("tuNgayTemplate", { static: true })
], DsTongHopDuTruMuaThuocTaiKhoaComponent.prototype, "tuNgayTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("denNgayTemplate", { static: true })
], DsTongHopDuTruMuaThuocTaiKhoaComponent.prototype, "denNgayTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngayTaiKhoaTemplate", { static: true })
], DsTongHopDuTruMuaThuocTaiKhoaComponent.prototype, "ngayTaiKhoaTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngayTaiKhoaDuocTemplate", { static: true })
], DsTongHopDuTruMuaThuocTaiKhoaComponent.prototype, "ngayTaiKhoaDuocTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngayTaiGiamDocTemplate", { static: true })
], DsTongHopDuTruMuaThuocTaiKhoaComponent.prototype, "ngayTaiGiamDocTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soPhieuTemplate', { static: true })
], DsTongHopDuTruMuaThuocTaiKhoaComponent.prototype, "soPhieuTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soPhieuDaXuLyTemplate', { static: true })
], DsTongHopDuTruMuaThuocTaiKhoaComponent.prototype, "soPhieuDaXuLyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soPhieuDaXuLyChiTietTemplate', { static: true })
], DsTongHopDuTruMuaThuocTaiKhoaComponent.prototype, "soPhieuDaXuLyChiTietTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupTuChoiHeaderTemplate', { static: true })
], DsTongHopDuTruMuaThuocTaiKhoaComponent.prototype, "nhomGroupTuChoiHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupDaXuLyChildHeaderTemplate', { static: true })
], DsTongHopDuTruMuaThuocTaiKhoaComponent.prototype, "nhomGroupDaXuLyChildHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayYeuCauTuChoiTemplate', { static: true })
], DsTongHopDuTruMuaThuocTaiKhoaComponent.prototype, "ngayYeuCauTuChoiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayTuChoiTemplate', { static: true })
], DsTongHopDuTruMuaThuocTaiKhoaComponent.prototype, "ngayTuChoiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soPhieuTuChoiTemplate', { static: true })
], DsTongHopDuTruMuaThuocTaiKhoaComponent.prototype, "soPhieuTuChoiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('STTTemplate', { static: true })
], DsTongHopDuTruMuaThuocTaiKhoaComponent.prototype, "STTTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], DsTongHopDuTruMuaThuocTaiKhoaComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridChoDuyet', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], static: false })
], DsTongHopDuTruMuaThuocTaiKhoaComponent.prototype, "gridChoDuyet", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridChildDaXuLy', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], static: false })
], DsTongHopDuTruMuaThuocTaiKhoaComponent.prototype, "gridChildDaXuLy", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridChildTuChoi', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], static: false })
], DsTongHopDuTruMuaThuocTaiKhoaComponent.prototype, "gridChildTuChoi", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomChiTietTabChoGoiTemplate', { static: true })
], DsTongHopDuTruMuaThuocTaiKhoaComponent.prototype, "nhomChiTietTabChoGoiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DsTongHopDuTruMuaThuocTaiKhoaComponent.prototype, "sort", void 0);
DsTongHopDuTruMuaThuocTaiKhoaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ds-tong-hop-du-tru-mua-thuoc-tai-khoa',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ds-tong-hop-du-tru-mua-thuoc-tai-khoa.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/ds-tong-hop-du-tru-mua-thuoc-tai-khoa/ds-tong-hop-du-tru-mua-thuoc-tai-khoa.component.html")).default,
        animations: [src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_26__["stagger60ms"], src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_27__["fadeInUp400ms"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ds-tong-hop-du-tru-mua-thuoc-tai-khoa.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/ds-tong-hop-du-tru-mua-thuoc-tai-khoa/ds-tong-hop-du-tru-mua-thuoc-tai-khoa.component.scss")).default]
    })
], DsTongHopDuTruMuaThuocTaiKhoaComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm.component.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm.component.scss ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3RvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2EvZ3VpLXRvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2EtY29uZmlybS9ndWktdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS1jb25maXJtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm.component.ts":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm.component.ts ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: GuiTongHopDuTruMuaThuocTaiKhoaConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuiTongHopDuTruMuaThuocTaiKhoaConfirmComponent", function() { return GuiTongHopDuTruMuaThuocTaiKhoaConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);




let GuiTongHopDuTruMuaThuocTaiKhoaConfirmComponent = class GuiTongHopDuTruMuaThuocTaiKhoaConfirmComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.Title = null;
        this.Message = null;
        this.ButtonYes = "Có";
        this.ButtonYesAndPrint = "Có & In Phiếu";
        this.ButtonNo = "Không";
    }
    ngOnInit() {
        this.Title = this.data.Title;
        this.Message = this.data.Message;
    }
    close(result) {
        this.dialogRef.close(result);
    }
};
GuiTongHopDuTruMuaThuocTaiKhoaConfirmComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
GuiTongHopDuTruMuaThuocTaiKhoaConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], GuiTongHopDuTruMuaThuocTaiKhoaConfirmComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.scss ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS9ndWktdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS1kdXlldC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcZHVvYy1waGFtXFx0b25nLWhvcC1kdS10cnUtbXVhLXRodW9jLXRhaS1raG9hXFxndWktdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS1kdXlldFxcZ3VpLXRvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2EtZHV5ZXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3RvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2EvZ3VpLXRvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2EtZHV5ZXQvZ3VpLXRvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2EtZHV5ZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3RvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2EvZ3VpLXRvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2EtZHV5ZXQvZ3VpLXRvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2EtZHV5ZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSIsIi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.ts":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.ts ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: GuiTongHopDuTruMuaThuocTaiKhoaDuyetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuiTongHopDuTruMuaThuocTaiKhoaDuyetComponent", function() { return GuiTongHopDuTruMuaThuocTaiKhoaDuyetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _tong_hop_du_tru_mua_thuoc_tai_khoa_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-thuoc-tai-khoa.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/baseline-info */ "./node_modules/@iconify/icons-ic/baseline-info.js");
/* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _gui_tong_hop_du_tru_mua_thuoc_tai_khoa_confirm_gui_tong_hop_du_tru_mua_thuoc_tai_khoa_confirm_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm.component.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _phieu_mua_du_tru_tai_khoa_phieu_mua_du_tru_tai_khoa_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.ts");



















let GuiTongHopDuTruMuaThuocTaiKhoaDuyetComponent = class GuiTongHopDuTruMuaThuocTaiKhoaDuyetComponent {
    constructor(dialog, router, apiService, authService, notificationService, cd, route, location, ref) {
        this.dialog = dialog;
        this.router = router;
        this.apiService = apiService;
        this.authService = authService;
        this.notificationService = notificationService;
        this.cd = cd;
        this.route = route;
        this.location = location;
        this.ref = ref;
        this.duTruMuaDuocPhamTaiKhoaChiTietVo = [];
        this.popupLoadingData = null;
        this.popupSavingData = null;
        this.icInfo = _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_15___default.a;
        this.validationErrors = null;
        this.kyDuTruMuaDuocPhamVatTuId = 0;
        this.sortDuTruTaiKhoa = [{ field: "Id", dir: "asc" }];
        this.gridColumns = [];
        this.gridChildColumns = [];
        this.urlGetDataGridChildAsync = "YeuCauMuaDuocPham/GetDuTruMuaDPTaiKhoaChiTietForGridAsync";
        this.urlGetTotalPageGridChild = "YeuCauMuaDuocPham/GetTotalDuTruMuaDPTaiKhoaChiTietForGridAsync";
        this.sortDuTruChild = [{ field: "Id", dir: "asc" }];
        this.groups = [{ field: 'Nhom', dir: 'asc', aggregates: [] }];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].DanhSachTongHopDuTruMuaDuocPhamTaiKhoa;
        this.thongTinGoiTaiKhoa = new _tong_hop_du_tru_mua_thuoc_tai_khoa_model__WEBPACK_IMPORTED_MODULE_1__["TongHopDuTruMuaThuocTaiKhoa"]();
        this.duyetDuTruMuaDuocPhamViewModel = new _tong_hop_du_tru_mua_thuoc_tai_khoa_model__WEBPACK_IMPORTED_MODULE_1__["DuyetDuTruMuaDuocPhamViewModel"]();
        this.kyDuTruMuaDuocPhamVatTuId = this.route.snapshot.params.id;
        this.gridColumns = [
            { Field: "Nhom", Title: "Loại", Width: 100, ShowTooltip: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "TenDuocPham", Title: "Tên", Width: 100, ShowTooltip: true },
            { Field: "HoatChat", Title: "Hoạt chất", Width: 100, ShowTooltip: true },
            { Field: "HamLuong", Title: "Nồng độ/Hàm lượng", Width: 80 },
            { Field: "SoDangKy", Title: "SĐK", Width: 50 },
            { Field: "DonViTinh", Title: "ĐVT", Width: 50 },
            { Field: "DuongDung", Title: "Đường Dùng", Width: 50 },
            { Field: "HangSanXuat", Title: "Hãng SX", Width: 50 },
            { Field: "NuocSanXuat", Title: "Nước SX", Width: 50 },
            { Field: "NhomDuPhong", Title: "Nhóm Đ.Trị/D.Phòng", Width: 80 },
            { Field: "SoLuongDuTru", Title: "SL Dự Trù", Width: 100 },
            { Field: "SoLuongDuKienSuDung", Title: "SL D.Kiến S.Dụng Trong Kỳ", Width: 100 },
            { Field: "SoLuongDuTruTruongKhoaDuyet", Title: "T.Khoa Duyệt", Width: 100 }
        ];
        this.gridChildColumns = [
            { Field: "LoaiNhom", Title: "Nhóm", Width: 100, Sortable: true },
            { Field: "TenKho", Title: "Kho", Width: 100, Sortable: true },
            { Field: "KyDuTru", Title: "Kỳ dự trù", Width: 150, Sortable: true },
            { Field: "SoLuongDuTru", Title: "SL Dự Trù", Width: 100, Sortable: true },
            { Field: "SoLuongDuKienSuDung", Title: "SL D.kiến trong kỳ", Width: 100, Sortable: true },
            { Field: "SoLuongDuTruTruongKhoaDuyet", Title: "T.Khoa Duyệt", Width: 100, Sortable: true },
        ];
        this.getThongTinTongHopDuTruMuaTaiKhoa();
    }
    getThongTinTongHopDuTruMuaTaiKhoa() {
        let phongBenhVienId = this.authService.getPhongLamViecId();
        this.apiService.get("YeuCauMuaDuocPham/GetThongTinGoiTaiKhoa/" + phongBenhVienId)
            .subscribe((resultData) => {
            if (resultData !== null && resultData !== undefined) {
                this.thongTinGoiTaiKhoa = resultData;
            }
        });
    }
    getKyTheoId() {
        let phongBenhVienId = this.authService.getPhongLamViecId();
        this.apiService.get("YeuCauMuaDuocPham/GetThongTinGoiTaiKhoa/" + phongBenhVienId)
            .subscribe((resultData) => {
            if (resultData !== null && resultData !== undefined) {
                this.thongTinGoiTaiKhoa = resultData;
            }
        });
    }
    onDataBoundChild(event) {
        if (event != undefined && event.Data.length > 0) {
            this.thongTinGoiTaiKhoa.KyDuTru = event.Data[0].KyDuTru;
        }
    }
    loadingPage() {
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang tải dữ liệu..." },
        });
    }
    closepopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    savingPage() {
        this.popupSavingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"], {
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
    onDataBound(event) {
        if (event != undefined && event.Data.length > 0) {
            this.duTruMuaDuocPhamTaiKhoaChiTietVo = event.Data;
            this.thongTinGoiTaiKhoa.KyDuTru = event.Data[0].KyDuTru;
        }
    }
    guiTatCa() {
        var self = this;
        self.validationErrors = [];
        self.ref.detectChanges();
        //thông tin mua dư trù 
        self.duyetDuTruMuaDuocPhamViewModel.DuTruMuaDuocPhamId = self.kyDuTruMuaDuocPhamVatTuId;
        self.duyetDuTruMuaDuocPhamViewModel.NhanVienYeuCauId = self.thongTinGoiTaiKhoa.NhanVienYeuCauId;
        self.duyetDuTruMuaDuocPhamViewModel.KhoaPhongId = self.thongTinGoiTaiKhoa.KhoaPhongId;
        self.duyetDuTruMuaDuocPhamViewModel.GhiChu = self.thongTinGoiTaiKhoa.GhiChu;
        self.duyetDuTruMuaDuocPhamViewModel.NgayYeuCau = self.thongTinGoiTaiKhoa.NgayYeuCau;
        self.duyetDuTruMuaDuocPhamViewModel.DuTruMuaDuocPhamTaiKhoaChiTietVos = self.duTruMuaDuocPhamTaiKhoaChiTietVo;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Update)) {
            self.dialog.open(_gui_tong_hop_du_tru_mua_thuoc_tai_khoa_confirm_gui_tong_hop_du_tru_mua_thuoc_tai_khoa_confirm_component__WEBPACK_IMPORTED_MODULE_16__["GuiTongHopDuTruMuaThuocTaiKhoaConfirmComponent"], {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có chắc chắn muốn gửi duyệt phiếu dự trù này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    self.apiService.post("YeuCauMuaDuocPham/GoiThongTinTaiKhoa", self.duyetDuTruMuaDuocPhamViewModel)
                        .subscribe((resultData) => {
                        if (resultData != undefined && resultData != null) {
                            self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                            self.router.navigate(['/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa']);
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
                else if (res == "YesAndPrint") {
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Update)) {
                        self.savingPage();
                        self.apiService.post("YeuCauMuaDuocPham/GoiThongTinTaiKhoa", self.duyetDuTruMuaDuocPhamViewModel).subscribe((resultData) => {
                            if (resultData != undefined && resultData != null) {
                                self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                self.closePopupSavingData();
                                self.dialog.open(_phieu_mua_du_tru_tai_khoa_phieu_mua_du_tru_tai_khoa_component__WEBPACK_IMPORTED_MODULE_18__["PhieuMuaTruTaiKhoaComponent"], {
                                    disableClose: false,
                                    width: '1200px',
                                    data: { Id: resultData },
                                }).afterClosed().subscribe(() => {
                                    self.router.navigate(['/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa']);
                                });
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
                    }
                }
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
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
};
GuiTongHopDuTruMuaThuocTaiKhoaDuyetComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('STTTemplate', { static: true })
], GuiTongHopDuTruMuaThuocTaiKhoaDuyetComponent.prototype, "STTTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('STTChildTemplate', { static: true })
], GuiTongHopDuTruMuaThuocTaiKhoaDuyetComponent.prototype, "STTChildTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('khoTongTonTemplate', { static: true })
], GuiTongHopDuTruMuaThuocTaiKhoaDuyetComponent.prototype, "khoTongTonTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], GuiTongHopDuTruMuaThuocTaiKhoaDuyetComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])("document:keydown", ["$event"])
], GuiTongHopDuTruMuaThuocTaiKhoaDuyetComponent.prototype, "keyEvent", null);
GuiTongHopDuTruMuaThuocTaiKhoaDuyetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_14__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_13__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.scss")).default]
    })
], GuiTongHopDuTruMuaThuocTaiKhoaDuyetComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.scss":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.scss ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS9waGlldS1tdWEtZHUtdHJ1LXRhaS1raG9hL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFxkdW9jLXBoYW1cXHRvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2FcXHBoaWV1LW11YS1kdS10cnUtdGFpLWtob2FcXHBoaWV1LW11YS1kdS10cnUtdGFpLWtob2EuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3RvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2EvcGhpZXUtbXVhLWR1LXRydS10YWkta2hvYS9waGlldS1tdWEtZHUtdHJ1LXRhaS1raG9hLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3RvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2EvcGhpZXUtbXVhLWR1LXRydS10YWkta2hvYS9waGlldS1tdWEtZHUtdHJ1LXRhaS1raG9hLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59IiwiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.ts":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.ts ***!
  \******************************************************************************************************************************************************/
/*! exports provided: PhieuMuaTruTaiKhoaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuMuaTruTaiKhoaComponent", function() { return PhieuMuaTruTaiKhoaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _tong_hop_du_tru_mua_thuoc_tai_khoa_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-thuoc-tai-khoa.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa.model.ts");







let PhieuMuaTruTaiKhoaComponent = class PhieuMuaTruTaiKhoaComponent {
    constructor(dialogRef, apiService, notificationService, data, ref) {
        this.dialogRef = dialogRef;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.data = data;
        this.ref = ref;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.inPhieuDuocPham = new _tong_hop_du_tru_mua_thuoc_tai_khoa_model__WEBPACK_IMPORTED_MODULE_6__["PhieuInDuTruMuaTaiKhoa"]();
        this.src = "";
        this.dataHTML = "";
    }
    ngOnInit() {
        console.log(this.data);
        this.xem();
    }
    xem() {
        var self = this;
        self.validationErrors = [];
        self.ref.detectChanges();
        self.inPhieuDuocPham.DuTruMuaDuocPhamTheoKhoaId = self.data.Id;
        self.inPhieuDuocPham.Header = false;
        self.apiService.post("YeuCauMuaDuocPham/InPhieuDuTruMuaTaiKhoa", self.inPhieuDuocPham).subscribe(resData => {
            if (resData != undefined && resData != null) {
                self.inPhieuDuocPham.Header = false;
                self.dataHTML = resData;
                self.src = "data:text/html;charset=utf-8," + encodeURIComponent(resData);
            }
        }, (err) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
            }
        });
    }
    getSharedPrintForm() {
        var template = this.dataHTML.replace("<p style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'>" +
            "<th>PHIẾU TỔNG HỢP DỰ TRÙ THUỐC,VÁC XIN,HÓA CHẤT XÉT NGHIỆM</th>" +
            "</p>", "");
        return new Promise(resolve => {
            resolve(template);
            this.close();
        });
    }
    close() {
        this.dialogRef.close();
    }
};
PhieuMuaTruTaiKhoaComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
PhieuMuaTruTaiKhoaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phieu-mua-du-tru-tai-khoa',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-mua-du-tru-tai-khoa.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-mua-du-tru-tai-khoa.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], PhieuMuaTruTaiKhoaComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.scss ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS9waGlldS10b25nLWhvcC1kdS10cnUtbXVhLXRodW9jLXRhaS1raG9hLWR1eWV0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFxkdW9jLXBoYW1cXHRvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2FcXHBoaWV1LXRvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2EtZHV5ZXRcXHBoaWV1LXRvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2EtZHV5ZXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3RvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2EvcGhpZXUtdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS1kdXlldC9waGlldS10b25nLWhvcC1kdS10cnUtbXVhLXRodW9jLXRhaS1raG9hLWR1eWV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3RvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2EvcGhpZXUtdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS1kdXlldC9waGlldS10b25nLWhvcC1kdS10cnUtbXVhLXRodW9jLXRhaS1raG9hLWR1eWV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59IiwiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.ts":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.ts ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: PhieuTongHopDuTruMuaThuocTaiKhoaDuyetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuTongHopDuTruMuaThuocTaiKhoaDuyetComponent", function() { return PhieuTongHopDuTruMuaThuocTaiKhoaDuyetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _tong_hop_du_tru_mua_thuoc_tai_khoa_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-thuoc-tai-khoa.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa.model.ts");







let PhieuTongHopDuTruMuaThuocTaiKhoaDuyetComponent = class PhieuTongHopDuTruMuaThuocTaiKhoaDuyetComponent {
    constructor(dialogRef, apiService, notificationService, data, ref) {
        this.dialogRef = dialogRef;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.data = data;
        this.ref = ref;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.inPhieuDuocPhamTaiKhoaTaiKhoa = new _tong_hop_du_tru_mua_thuoc_tai_khoa_model__WEBPACK_IMPORTED_MODULE_6__["PhieuInDuTruMuaTaiKhoa"]();
        this.src = "";
        this.dataHTML = "";
    }
    ngOnInit() {
        console.log(this.data);
        this.xem();
    }
    xem() {
        var self = this;
        self.validationErrors = [];
        self.ref.detectChanges();
        self.inPhieuDuocPhamTaiKhoaTaiKhoa.DuTruMuaDuocPhamTheoKhoaId = self.data.Id;
        self.inPhieuDuocPhamTaiKhoaTaiKhoa.Header = false;
        self.apiService.post("YeuCauMuaDuocPham/InPhieuDuTruMuaTaiKhoa", self.inPhieuDuocPhamTaiKhoaTaiKhoa).subscribe(resData => {
            if (resData != undefined && resData != null) {
                self.inPhieuDuocPhamTaiKhoaTaiKhoa.Header = false;
                self.dataHTML = resData;
                self.src = "data:text/html;charset=utf-8," + encodeURIComponent(resData);
            }
        }, (err) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
            }
        });
    }
    getSharedPrintForm() {
        return new Promise(resolve => {
            resolve(this.dataHTML);
            this.close();
        });
    }
    close() {
        this.dialogRef.close();
    }
};
PhieuTongHopDuTruMuaThuocTaiKhoaDuyetComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
PhieuTongHopDuTruMuaThuocTaiKhoaDuyetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], PhieuTongHopDuTruMuaThuocTaiKhoaDuyetComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-detail/tong-hop-du-tru-mua-thuoc-tai-khoa-detail.component.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-detail/tong-hop-du-tru-mua-thuoc-tai-khoa-detail.component.scss ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS90b25nLWhvcC1kdS10cnUtbXVhLXRodW9jLXRhaS1raG9hLWRldGFpbC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcZHVvYy1waGFtXFx0b25nLWhvcC1kdS10cnUtbXVhLXRodW9jLXRhaS1raG9hXFx0b25nLWhvcC1kdS10cnUtbXVhLXRodW9jLXRhaS1raG9hLWRldGFpbFxcdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3RvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2EvdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS1kZXRhaWwvdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3RvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2EvdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS1kZXRhaWwvdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSIsIi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-detail/tong-hop-du-tru-mua-thuoc-tai-khoa-detail.component.ts":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-detail/tong-hop-du-tru-mua-thuoc-tai-khoa-detail.component.ts ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: TongHopDuTruMuaThuocTaiKhoaDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaThuocTaiKhoaDetailComponent", function() { return TongHopDuTruMuaThuocTaiKhoaDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var _tong_hop_du_tru_mua_thuoc_tai_khoa_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-thuoc-tai-khoa.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa.model.ts");
/* harmony import */ var _tong_hop_du_tru_mua_thuoc_tai_khoa_xem_chi_tiet_shared_du_tru_mua_thuoc_tai_khoa_xem_chi_tiet_shared_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared/du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared/du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared.component.ts");
/* harmony import */ var _yeu_cau_mua_thuoc_phieu_mua_duoc_pham_phieu_mua_duoc_pham_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../yeu-cau-mua-thuoc/phieu-mua-duoc-pham/phieu-mua-duoc-pham.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/phieu-mua-duoc-pham/phieu-mua-duoc-pham.component.ts");

















let TongHopDuTruMuaThuocTaiKhoaDetailComponent = class TongHopDuTruMuaThuocTaiKhoaDetailComponent {
    constructor(dialog, authService, notificationService, location, ref, route, apiService) {
        this.dialog = dialog;
        this.authService = authService;
        this.notificationService = notificationService;
        this.location = location;
        this.ref = ref;
        this.route = route;
        this.apiService = apiService;
        this.popupLoadingData = null;
        this.validationErrors = null;
        this.trangThaiVo = null;
        this.phieuMuaDuocPhamTaiKhoaId = null;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhSachTongHopDuTruMuaDuocPhamTaiKhoa;
        this.danhSachTongHopDuTruMuaThuocTaiKhoa = new _tong_hop_du_tru_mua_thuoc_tai_khoa_model__WEBPACK_IMPORTED_MODULE_14__["TongHopDuTruMuaThuocTaiKhoa"]();
        const id = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.GetTrangThaiPhieuMuaDuTru(id);
            this.phieuMuaDuocPhamTaiKhoaId = id;
        }
    }
    //long update trang thái
    GetTrangThaiPhieuMuaDuTru(id) {
        var self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_8__["SecurityOperation"].View)) {
            self.apiService.get("YeuCauMuaDuocPham/GetTrangThaiPhieuDuocPhamDuTru?phieuMuaDuocPhamId=" + id).subscribe((result) => {
                this.trangThaiVo = result;
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    loadingPage() {
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang tải dữ liệu..." },
        });
    }
    closepopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    inPhieu() {
        var self = this;
        self.danhSachTongHopDuTruMuaThuocTaiKhoa = self.shared.getSharedData();
        self.loadingPage();
        self.dialog.open(_yeu_cau_mua_thuoc_phieu_mua_duoc_pham_phieu_mua_duoc_pham_component__WEBPACK_IMPORTED_MODULE_16__["PhieuMuaDuocPhamComponent"], {
            disableClose: false,
            width: '1200px',
            data: { Id: self.phieuMuaDuocPhamTaiKhoaId, Loai: self.danhSachTongHopDuTruMuaThuocTaiKhoa.LoaiDuTru },
        }).afterClosed().subscribe(() => {
            self.closepopupLoadingData();
        });
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
};
TongHopDuTruMuaThuocTaiKhoaDetailComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_tong_hop_du_tru_mua_thuoc_tai_khoa_xem_chi_tiet_shared_du_tru_mua_thuoc_tai_khoa_xem_chi_tiet_shared_component__WEBPACK_IMPORTED_MODULE_15__["TongHopDuTruMuaThuocTaiKhoaChiTietSharedComponent"], { static: true })
], TongHopDuTruMuaThuocTaiKhoaDetailComponent.prototype, "shared", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
], TongHopDuTruMuaThuocTaiKhoaDetailComponent.prototype, "keyEvent", null);
TongHopDuTruMuaThuocTaiKhoaDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tong-hop-du-tru-mua-thuoc-tai-khoa-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tong-hop-du-tru-mua-thuoc-tai-khoa-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-detail/tong-hop-du-tru-mua-thuoc-tai-khoa-detail.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_13__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_12__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tong-hop-du-tru-mua-thuoc-tai-khoa-detail.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-detail/tong-hop-du-tru-mua-thuoc-tai-khoa-detail.component.scss")).default]
    })
], TongHopDuTruMuaThuocTaiKhoaDetailComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.scss":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.scss ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n\n.render-text {\n  justify-content: space-between !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS90b25nLWhvcC1kdS10cnUtbXVhLXRodW9jLXRhaS1raG9hLWR1eWV0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFxkdW9jLXBoYW1cXHRvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2FcXHRvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2EtZHV5ZXRcXHRvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2EtZHV5ZXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3RvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2EvdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS1kdXlldC90b25nLWhvcC1kdS10cnUtbXVhLXRodW9jLXRhaS1raG9hLWR1eWV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5Q0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS90b25nLWhvcC1kdS10cnUtbXVhLXRodW9jLXRhaS1raG9hLWR1eWV0L3RvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2EtZHV5ZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4ucmVuZGVyLXRleHQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbn0iLCIuZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4ucmVuZGVyLXRleHQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.ts":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.ts ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: TongHopDuTruMuaThuocTaiKhoaDuyetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaThuocTaiKhoaDuyetComponent", function() { return TongHopDuTruMuaThuocTaiKhoaDuyetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var _tong_hop_du_tru_mua_thuoc_tai_khoa_shared_tong_hop_du_tru_mua_thuoc_tai_khoa_shared_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-thuoc-tai-khoa-shared/tong-hop-du-tru-mua-thuoc-tai-khoa-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-shared/tong-hop-du-tru-mua-thuoc-tai-khoa-shared.component.ts");
/* harmony import */ var _tong_hop_du_tru_mua_thuoc_tai_khoa_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-thuoc-tai-khoa.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa.model.ts");













let TongHopDuTruMuaThuocTaiKhoaDuyetComponent = class TongHopDuTruMuaThuocTaiKhoaDuyetComponent {
    constructor(dialog, router, apiService, authService, notificationService, cd, route, location, ref) {
        this.dialog = dialog;
        this.router = router;
        this.apiService = apiService;
        this.authService = authService;
        this.notificationService = notificationService;
        this.cd = cd;
        this.route = route;
        this.location = location;
        this.ref = ref;
        this.popupSavingData = null;
        this.popupLoadingData = null;
        this.validationErrors = null;
        //paramre kiem tra true 
        this.tabDaXuLy = "";
    }
    ngOnInit() {
        this.danhSachTongHopDuTruMuaThuocTaiKhoa = new _tong_hop_du_tru_mua_thuoc_tai_khoa_model__WEBPACK_IMPORTED_MODULE_12__["TongHopDuTruMuaThuocTaiKhoa"];
        let isSelected = this.route.snapshot.params.isSelected;
        if (isSelected === "true") {
            this.tabDaXuLy = "DaXuLy";
            const id = this.route.snapshot.params.id;
            if (id != undefined && id != null && isSelected === "true") {
                this.getThongTinTongHopDuTruMuaTaiKhoaDaXuLy(id);
            }
        }
        else {
            this.tabDaXuLy = "ChoXuLy";
            const id = this.route.snapshot.params.id;
            if (id != undefined && id != null) {
                this.getThongTinTongHopDuTruMuaTaiKhoa(id);
            }
        }
    }
    getThongTinTongHopDuTruMuaTaiKhoaDaXuLy(id) {
        this.apiService.get('YeuCauMuaDuocPham/GetThongTinDuTruDuocPhamTaiKhoaDaXuLy/' + id)
            .subscribe((resultData) => {
            if (resultData !== null && resultData !== undefined) {
                this.danhSachTongHopDuTruMuaThuocTaiKhoa = resultData;
            }
        });
    }
    getThongTinTongHopDuTruMuaTaiKhoa(id) {
        this.apiService.get('YeuCauMuaDuocPham/GetThongTinDuTruDuocPhamTaiKhoa/' + id)
            .subscribe((resultData) => {
            if (resultData !== null && resultData !== undefined) {
                this.danhSachTongHopDuTruMuaThuocTaiKhoa = resultData;
            }
        });
    }
    loadingPage() {
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang lưu dữ liệu..." },
        });
    }
    closepopupLoadingData() {
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
    closepopupSavingData() {
        if (this.popupSavingData != undefined && this.popupSavingData != null) {
            this.popupSavingData.close();
        }
    }
};
TongHopDuTruMuaThuocTaiKhoaDuyetComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_tong_hop_du_tru_mua_thuoc_tai_khoa_shared_tong_hop_du_tru_mua_thuoc_tai_khoa_shared_component__WEBPACK_IMPORTED_MODULE_11__["TongHopDuTruMuaThuocTaiKhoaSharedComponent"], { static: true })
], TongHopDuTruMuaThuocTaiKhoaDuyetComponent.prototype, "shared", void 0);
TongHopDuTruMuaThuocTaiKhoaDuyetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_10__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_9__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.scss")).default]
    })
], TongHopDuTruMuaThuocTaiKhoaDuyetComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet.component.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet.component.scss ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3RvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2EvdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS1raG9uZy1kdXlldC90b25nLWhvcC1kdS10cnUtbXVhLXRodW9jLXRhaS1raG9hLWtob25nLWR1eWV0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet.component.ts":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet.component.ts ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: TongHopDuTruMuaThuocTaiKhoaKhongDuyetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaThuocTaiKhoaKhongDuyetComponent", function() { return TongHopDuTruMuaThuocTaiKhoaKhongDuyetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);




let TongHopDuTruMuaThuocTaiKhoaKhongDuyetComponent = class TongHopDuTruMuaThuocTaiKhoaKhongDuyetComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.Title = null;
        this.Message = null;
        this.lyDo = null;
        this.ButtonYes = "Có";
        this.ButtonNo = "Không";
    }
    ngOnInit() {
        this.Title = "Xác nhận";
        this.Message = "Bạn có muốn từ chối phiếu dự trù này không?";
    }
    close(result) {
        if (result == 'Yes') {
            this.dialogRef.close(this.lyDo);
        }
        else {
            this.dialogRef.close("");
        }
    }
};
TongHopDuTruMuaThuocTaiKhoaKhongDuyetComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
TongHopDuTruMuaThuocTaiKhoaKhongDuyetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], TongHopDuTruMuaThuocTaiKhoaKhongDuyetComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-routing.module.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-routing.module.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: TongHopDuTruMuaThuocTaiKhoaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaThuocTaiKhoaRoutingModule", function() { return TongHopDuTruMuaThuocTaiKhoaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _ds_tong_hop_du_tru_mua_thuoc_tai_khoa_ds_tong_hop_du_tru_mua_thuoc_tai_khoa_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ds-tong-hop-du-tru-mua-thuoc-tai-khoa/ds-tong-hop-du-tru-mua-thuoc-tai-khoa.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/ds-tong-hop-du-tru-mua-thuoc-tai-khoa/ds-tong-hop-du-tru-mua-thuoc-tai-khoa.component.ts");
/* harmony import */ var _tong_hop_du_tru_mua_thuoc_tai_khoa_detail_tong_hop_du_tru_mua_thuoc_tai_khoa_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-thuoc-tai-khoa-detail/tong-hop-du-tru-mua-thuoc-tai-khoa-detail.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-detail/tong-hop-du-tru-mua-thuoc-tai-khoa-detail.component.ts");
/* harmony import */ var _gui_tong_hop_du_tru_mua_thuoc_tai_khoa_duyet_gui_tong_hop_du_tru_mua_thuoc_tai_khoa_duyet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.ts");
/* harmony import */ var _tong_hop_du_tru_mua_thuoc_tai_khoa_duyet_tong_hop_du_tru_mua_thuoc_tai_khoa_duyet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.ts");










const routes = [
    {
        path: '',
        // pathMatch: 'full',
        component: _ds_tong_hop_du_tru_mua_thuoc_tai_khoa_ds_tong_hop_du_tru_mua_thuoc_tai_khoa_component__WEBPACK_IMPORTED_MODULE_6__["DsTongHopDuTruMuaThuocTaiKhoaComponent"],
        data: {
            title: 'Danh Sách Tổng Hợp Dự Trù Mua Dược Phẩm Tại Khoa',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhSachTongHopDuTruMuaDuocPhamTaiKhoa,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
    {
        path: 'duyet/:id/:isSelected',
        component: _tong_hop_du_tru_mua_thuoc_tai_khoa_duyet_tong_hop_du_tru_mua_thuoc_tai_khoa_duyet_component__WEBPACK_IMPORTED_MODULE_9__["TongHopDuTruMuaThuocTaiKhoaDuyetComponent"],
        data: {
            title: 'Duyệt Dự Trù Mua Dược Phẩm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhSachTongHopDuTruMuaDuocPhamTaiKhoa,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
    {
        path: 'chi-tiet/:id',
        component: _tong_hop_du_tru_mua_thuoc_tai_khoa_detail_tong_hop_du_tru_mua_thuoc_tai_khoa_detail_component__WEBPACK_IMPORTED_MODULE_7__["TongHopDuTruMuaThuocTaiKhoaDetailComponent"],
        data: {
            title: 'Chi Tiết Dự Trù Mua Dược Phẩm Tại Khoa',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhSachTongHopDuTruMuaDuocPhamTaiKhoa,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
    {
        path: 'gui/:id',
        component: _gui_tong_hop_du_tru_mua_thuoc_tai_khoa_duyet_gui_tong_hop_du_tru_mua_thuoc_tai_khoa_duyet_component__WEBPACK_IMPORTED_MODULE_8__["GuiTongHopDuTruMuaThuocTaiKhoaDuyetComponent"],
        data: {
            title: 'Gửi Dự Trù Mua Dược Phẩm Tại Khoa',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhSachTongHopDuTruMuaDuocPhamTaiKhoa,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
];
let TongHopDuTruMuaThuocTaiKhoaRoutingModule = class TongHopDuTruMuaThuocTaiKhoaRoutingModule {
};
TongHopDuTruMuaThuocTaiKhoaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TongHopDuTruMuaThuocTaiKhoaRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-shared/tong-hop-du-tru-mua-thuoc-tai-khoa-shared.component.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-shared/tong-hop-du-tru-mua-thuoc-tai-khoa-shared.component.scss ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n\n.kho-tong-ton-ng-template {\n  display: inline;\n  white-space: nowrap;\n}\n\n.kho-tong-ton-label {\n  display: inline;\n  text-overflow: ellipsis;\n}\n\n.info {\n  margin-bottom: -8px;\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS90b25nLWhvcC1kdS10cnUtbXVhLXRodW9jLXRhaS1raG9hLXNoYXJlZC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcZHVvYy1waGFtXFx0b25nLWhvcC1kdS10cnUtbXVhLXRodW9jLXRhaS1raG9hXFx0b25nLWhvcC1kdS10cnUtbXVhLXRodW9jLXRhaS1raG9hLXNoYXJlZFxcdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS1zaGFyZWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3RvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2EvdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS1zaGFyZWQvdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS1zaGFyZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3RvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2EvdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS1zaGFyZWQvdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS1zaGFyZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4ua2hvLXRvbmctdG9uLW5nLXRlbXBsYXRlIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ua2hvLXRvbmctdG9uLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmluZm8ge1xuICBtYXJnaW4tYm90dG9tOiAtOHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59IiwiLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLmtoby10b25nLXRvbi1uZy10ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmtoby10b25nLXRvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5pbmZvIHtcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-shared/tong-hop-du-tru-mua-thuoc-tai-khoa-shared.component.ts":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-shared/tong-hop-du-tru-mua-thuoc-tai-khoa-shared.component.ts ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: TongHopDuTruMuaThuocTaiKhoaSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaThuocTaiKhoaSharedComponent", function() { return TongHopDuTruMuaThuocTaiKhoaSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _tong_hop_du_tru_mua_thuoc_tai_khoa_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-thuoc-tai-khoa.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa.model.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _tong_hop_du_tru_mua_thuoc_tai_khoa_khong_duyet_tong_hop_du_tru_mua_thuoc_tai_khoa_khong_duyet_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/baseline-info */ "./node_modules/@iconify/icons-ic/baseline-info.js");
/* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _phieu_mua_du_tru_tai_khoa_phieu_mua_du_tru_tai_khoa_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.ts");
var TongHopDuTruMuaThuocTaiKhoaSharedComponent_1;

















let TongHopDuTruMuaThuocTaiKhoaSharedComponent = TongHopDuTruMuaThuocTaiKhoaSharedComponent_1 = class TongHopDuTruMuaThuocTaiKhoaSharedComponent {
    constructor(apiService, route, dialog, router, location, notificationService, authService) {
        this.apiService = apiService;
        this.route = route;
        this.dialog = dialog;
        this.router = router;
        this.location = location;
        this.notificationService = notificationService;
        this.authService = authService;
        this.duTruMuaDuocPhamTaiKhoaChiTietVo = [];
        this.duyetDuTruMuaDuocPhamViewModel = {};
        this.thongTinLyDoHuyDuyetTaiKhoa = {};
        this.popupSavingData = null;
        this.validationErrors = null;
        this.gridChildThuocVacXinColumns = [];
        this.gridColumns = [];
        this.gridColumnsChild = [];
        this.sortDuTruChild = [{
                field: 'Id',
                dir: 'asc'
            }];
        this.groups = [{ field: 'Nhom', dir: 'asc', aggregates: [] }];
        this.urlGetDataGridChildAsync = 'YeuCauMuaDuocPham/GetDuTruMuaDuocPhamDangChoXuLyTaiKhoaChiTietForGridAsync';
        this.urlGetTotalPageGridChild = 'YeuCauMuaDuocPham/GetTotalDuTruMuaDuocPhamDangChoXuLyTaiKhoaChiTietForGridAsync';
        this.duTruMuaDuocPhamId = 0;
        this.urlGetDataDaXuLy = 'YeuCauMuaDuocPham/GetDuTruMuaDuocPhamTaiKhoaChiTietForGridAsync';
        this.urlGetTotalPageDaXuLy = 'YeuCauMuaDuocPham/GetTotalDuTruMuaDuocPhamTaiKhoaChiTietForGridAsync';
        this.urlGetDataDaXuLyChild = 'YeuCauMuaDuocPham/GetDuTruMuaDuocPhamTaiKhoaChiTietForGridAsyncChild';
        this.urlGetTotalPageDaXuLyChild = 'YeuCauMuaDuocPham/GetTotalDuTruMuaDuocPhamTaiKhoaChiTietForGridAsyncChild';
        this.duTruMuaDuocPhamTaiKhoaId = 0;
        this.khos = [];
        this.hdts = [];
        this.icInfo = _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_15___default.a;
        this.hideGuibtn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        console.log('daxuly: ', this.tabSelected);
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhSachTongHopDuTruMuaDuocPhamTaiKhoa;
        this.danhSachTongHopDuTruMuaThuocTaiKhoa = new _tong_hop_du_tru_mua_thuoc_tai_khoa_model__WEBPACK_IMPORTED_MODULE_6__["TongHopDuTruMuaThuocTaiKhoa"]();
        const id = this.route.snapshot.params.id;
        if (id != undefined && id != null) {
            this.duTruMuaDuocPhamTaiKhoaId = id;
            if (this.tabSelected == 'DaXuLy') {
                this.getThongTinTongHopDuTruMuaTaiKhoaDaXuLy(id);
            }
            else {
                this.getThongTinTongHopDuTruMuaTaiKhoa(id);
            }
        }
        this.duTruMuaDuocPhamId = id;
        this.gridChildThuocVacXinColumns = [
            // { Field: "STT", Title: "#", Width: 25, Template: this.STTTemplate },
            { Field: 'Nhom', Title: 'Loại', Width: 100, ShowTooltip: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: 'TenDuocPham', Title: 'Tên', MinWidth: 100, ShowTooltip: true },
            { Field: 'HoatChat', Title: 'Hoạt chất', Width: 120, ShowTooltip: true },
            { Field: 'HamLuong', Title: 'Nồng độ/Hàm lượng', Width: 80 },
            { Field: 'DonViTinh', Title: 'ĐVT', Width: 50 },
            { Field: 'DuongDung', Title: 'Đường Dùng', Width: 50 },
            { Field: 'HangSanXuat', Title: 'Hãng SX', Width: 100 },
            { Field: 'NuocSanXuat', Title: 'Nước SX', Width: 100 },
            { Field: 'NhomDuPhong', Title: 'Nhóm Đ.Trị/D.Phòng', Width: 80 },
            { Field: 'SoLuongDuTru', Title: 'SL Dự Trù', Width: 100 },
            { Field: 'SoLuongDuKienSuDung', Title: 'SL D.Kiến S.Dụng Trong Kỳ', Width: 100 },
            { Field: 'KhoDuTruTon', Title: 'Kho D.Trù Tồn', Width: 80 },
            { Field: 'KhoTongTon', Title: 'Kho Tổng Tồn', Width: 80, Template: this.khoTongTonTemplate },
            { Field: 'HDChuaNhap', Title: 'H.Đồng Chưa Nhập', Width: 100, Template: this.hdChuaNhapTemplate },
            { Field: 'SoLuongDuTruTruongKhoaDuyet', Title: 'T.Khoa Duyệt', Width: 100, Template: this.nhomSLTKDuyet },
        ];
        this.gridColumns = [
            { Field: 'Nhom', Title: 'Loại', Width: 100, ShowTooltip: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: 'TenDuocPham', Title: 'Tên', MinWidth: 100, ShowTooltip: true },
            { Field: 'HoatChat', Title: 'Hoạt chất', Width: 100, ShowTooltip: true },
            { Field: 'HamLuong', Title: 'Nồng độ/Hàm lượng', Width: 80 },
            { Field: 'SoDangKy', Title: 'SĐK', Width: 50 },
            { Field: 'DonViTinh', Title: 'ĐVT', Width: 50 },
            { Field: 'DuongDung', Title: 'Đường Dùng', Width: 50 },
            { Field: 'HangSanXuat', Title: 'Hãng SX', Width: 100 },
            { Field: 'NuocSanXuat', Title: 'Nước SX', Width: 100 },
            { Field: 'NhomDuPhong', Title: 'Nhóm Đ.Trị/D.Phòng', Width: 80 },
            { Field: 'SoLuongDuTru', Title: 'SL Dự Trù', Width: 100 },
            { Field: 'SoLuongDuKienSuDung', Title: 'SL D.Kiến S.Dụng Trong Kỳ', Width: 100 },
            { Field: 'SoLuongDuTruTruongKhoaDuyet', Title: 'T.Khoa Duyệt', Width: 100 },
        ];
        this.gridColumnsChild = [
            // { Field: 'Nhom', Title: 'Loại', Width: 100, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: 'LoaiThuoc', Title: 'Nhóm', Width: 100 },
            { Field: 'TenKho', Title: 'Kho', Width: 100 },
            { Field: 'KyDuTruDisplay', Title: 'Kỳ dự trù', Width: 120 },
            { Field: 'SoLuongDuTru', Title: 'SL Dự Trù', Width: 100 },
            { Field: 'SoLuongDuKienSuDung', Title: 'SL Dự Kiến Trong Kỳ', Width: 100 },
        ];
    }
    getThongTinTongHopDuTruMuaTaiKhoa(id) {
        this.apiService.get('YeuCauMuaDuocPham/GetThongTinDuTruDuocPhamTaiKhoa/' + id)
            .subscribe((resultData) => {
            if (resultData !== null && resultData !== undefined) {
                this.danhSachTongHopDuTruMuaThuocTaiKhoa = resultData;
            }
        });
    }
    getThongTinTongHopDuTruMuaTaiKhoaDaXuLy(id) {
        this.apiService.get('YeuCauMuaDuocPham/GetThongTinDuTruDuocPhamTaiKhoaDaXuLy/' + id)
            .subscribe((resultData) => {
            if (resultData !== null && resultData !== undefined) {
                this.danhSachTongHopDuTruMuaThuocTaiKhoa = resultData;
            }
        });
    }
    onDataBound(event) {
        if (event != undefined && event.Data.length > 0) {
            this.duTruMuaDuocPhamTaiKhoaChiTietVo = event.Data;
        }
    }
    PheDuyet(id) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update)) {
            if (this.confrim != null) {
                this.dialog.closeAll();
                this.confrim = null;
            }
            this.confrim = this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmComponent"], {
                disableClose: false,
                width: '400px',
                data: {
                    Title: 'Xác nhận',
                    Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].MessConfirm, [
                        'Duyệt',
                    ]),
                },
            })
                .afterClosed()
                .subscribe((result) => {
                /* result is a string:Yes,No,No answer*/
                if (result == 'Yes') {
                    this.duyetDuTruMuaDuocPhamViewModel.DuTruMuaDuocPhamId = id;
                    this.duyetDuTruMuaDuocPhamViewModel.DuTruMuaDuocPhamTaiKhoaChiTietVos = this.duTruMuaDuocPhamTaiKhoaChiTietVo;
                    this.apiService.post('YeuCauMuaDuocPham/DuyetTaiKhoa/', this.duyetDuTruMuaDuocPhamViewModel)
                        .subscribe((resultData) => {
                        if (resultData !== null && resultData !== undefined) {
                            if (resultData) {
                                this.cancel();
                                this.notificationService.showSuccess('Duyệt thành công.');
                            }
                            else {
                                this.notificationService.showError('Duyệt không thành công.');
                            }
                        }
                    });
                }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    TuChoi() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update)) {
            if (this.confrim != null) {
                this.dialog.closeAll();
                this.confrim = null;
            }
            this.confrim = this.dialog.open(_tong_hop_du_tru_mua_thuoc_tai_khoa_khong_duyet_tong_hop_du_tru_mua_thuoc_tai_khoa_khong_duyet_component__WEBPACK_IMPORTED_MODULE_13__["TongHopDuTruMuaThuocTaiKhoaKhongDuyetComponent"], {
                disableClose: true,
                width: '400px',
                height: '300px',
            }).afterClosed().subscribe((result) => {
                if (result != '' && result != undefined) {
                    this.thongTinLyDoHuyDuyetTaiKhoa.LyDoHuy = result;
                    this.thongTinLyDoHuyDuyetTaiKhoa.Id = this.duTruMuaDuocPhamTaiKhoaId;
                    this.apiService.post('YeuCauMuaDuocPham/TuChoiDuyetTaiKhoa', this.thongTinLyDoHuyDuyetTaiKhoa)
                        .subscribe((resultData) => {
                        if (resultData !== null && resultData !== undefined) {
                            if (resultData) {
                                this.cancel();
                                this.notificationService.showSuccess('Từ chối duyệt thành công.');
                            }
                        }
                    });
                }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    HuyDuyet(id) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update)) {
            if (this.confrim != null) {
                this.dialog.closeAll();
                this.confrim = null;
            }
            this.confrim = this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmComponent"], {
                disableClose: false,
                width: "400px",
                data: {
                    Title: "Xác nhận",
                    Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].MessConfirm, [
                        "Hủy Duyệt",
                    ]),
                },
            })
                .afterClosed()
                .subscribe((result) => {
                /* result is a string:Yes,No,No answer*/
                if (result == "Yes") {
                    this.apiService.post("YeuCauMuaDuocPham/HuyDuyetTaiKhoa/" + id)
                        .subscribe((resultData) => {
                        if (resultData !== null && resultData !== undefined) {
                            if (resultData) {
                                this.notificationService.showSuccess("Hủy Duyệt thành công.");
                                this.router.navigate(['/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa']);
                            }
                            else {
                                this.notificationService.showError("Hủy không thành công.");
                            }
                        }
                    });
                }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    cancel() {
        // this.router.navigate(["/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa"], {
        //   queryParamsHandling: "preserve",
        // });
        this.location.back();
    }
    keyEvent(event) {
        if (event.keyCode == 27 && !event.ctrlKey) {
            // esc
            this.cancel();
            event.preventDefault();
        }
    }
    TooltipCustom(duTruGiamDocDetail) {
        this.khos = [...duTruGiamDocDetail.ThongTinChiTietTonKhoTongs];
        this.hdts = [...duTruGiamDocDetail.ThongTinChiTietTonHDTs];
    }
    InPhieuTongHopTaiKhoa() {
        const id = this.route.snapshot.params.id;
        this.dialog.open(_phieu_mua_du_tru_tai_khoa_phieu_mua_du_tru_tai_khoa_component__WEBPACK_IMPORTED_MODULE_16__["PhieuMuaTruTaiKhoaComponent"], {
            disableClose: false,
            width: '1200px',
            data: { Id: id },
        }).afterClosed().subscribe(() => {
            // this.router.navigate(['/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa']);
        });
    }
};
TongHopDuTruMuaThuocTaiKhoaSharedComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_14__["Location"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], TongHopDuTruMuaThuocTaiKhoaSharedComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomSLTKDuyet', { static: true })
], TongHopDuTruMuaThuocTaiKhoaSharedComponent.prototype, "nhomSLTKDuyet", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(TongHopDuTruMuaThuocTaiKhoaSharedComponent_1, { static: true })
], TongHopDuTruMuaThuocTaiKhoaSharedComponent.prototype, "shared", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('khoTongTonTemplate', { static: true })
], TongHopDuTruMuaThuocTaiKhoaSharedComponent.prototype, "khoTongTonTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hdChuaNhapTemplate', { static: true })
], TongHopDuTruMuaThuocTaiKhoaSharedComponent.prototype, "hdChuaNhapTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TongHopDuTruMuaThuocTaiKhoaSharedComponent.prototype, "trangThaiVo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TongHopDuTruMuaThuocTaiKhoaSharedComponent.prototype, "validationErrorsDuocPham", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TongHopDuTruMuaThuocTaiKhoaSharedComponent.prototype, "isCreate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TongHopDuTruMuaThuocTaiKhoaSharedComponent.prototype, "tabSelected", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TongHopDuTruMuaThuocTaiKhoaSharedComponent.prototype, "hideGuibtn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])
], TongHopDuTruMuaThuocTaiKhoaSharedComponent.prototype, "keyEvent", null);
TongHopDuTruMuaThuocTaiKhoaSharedComponent = TongHopDuTruMuaThuocTaiKhoaSharedComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tong-hop-du-tru-mua-thuoc-tai-khoa-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tong-hop-du-tru-mua-thuoc-tai-khoa-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-shared/tong-hop-du-tru-mua-thuoc-tai-khoa-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tong-hop-du-tru-mua-thuoc-tai-khoa-shared.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-shared/tong-hop-du-tru-mua-thuoc-tai-khoa-shared.component.scss")).default]
    })
], TongHopDuTruMuaThuocTaiKhoaSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared/du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared.component.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared/du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared.component.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS90b25nLWhvcC1kdS10cnUtbXVhLXRodW9jLXRhaS1raG9hLXhlbS1jaGktdGlldC1zaGFyZWQvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXGR1b2MtcGhhbVxcdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYVxcdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS14ZW0tY2hpLXRpZXQtc2hhcmVkXFxkdS10cnUtbXVhLXRodW9jLXRhaS1raG9hLXhlbS1jaGktdGlldC1zaGFyZWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3RvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2EvdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS14ZW0tY2hpLXRpZXQtc2hhcmVkL2R1LXRydS1tdWEtdGh1b2MtdGFpLWtob2EteGVtLWNoaS10aWV0LXNoYXJlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS90b25nLWhvcC1kdS10cnUtbXVhLXRodW9jLXRhaS1raG9hLXhlbS1jaGktdGlldC1zaGFyZWQvZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS14ZW0tY2hpLXRpZXQtc2hhcmVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn0iLCIuZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared/du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared.component.ts":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared/du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared.component.ts ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: TongHopDuTruMuaThuocTaiKhoaChiTietSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaThuocTaiKhoaChiTietSharedComponent", function() { return TongHopDuTruMuaThuocTaiKhoaChiTietSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _tong_hop_du_tru_mua_thuoc_tai_khoa_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-thuoc-tai-khoa.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa.model.ts");






let TongHopDuTruMuaThuocTaiKhoaChiTietSharedComponent = class TongHopDuTruMuaThuocTaiKhoaChiTietSharedComponent {
    constructor(apiService, route) {
        this.apiService = apiService;
        this.route = route;
        this.duTruMuaDuocPhamTaiKhoaChiTietVo = [];
        this.duyetDuTruMuaDuocPhamViewModel = {};
        this.thongTinLyDoHuyDuyetTaiKhoa = {};
        this.popupSavingData = null;
        this.validationErrors = null;
        this.gridColumns = [];
        this.gridChildColumns = [];
        this.sortDuTruChild = [{
                field: "Id",
                dir: "asc"
            }];
        this.urlGetData = "YeuCauMuaDuocPham/GetDuTruMuaDuocPhamChiTietForGridAsyncChild";
        this.urlGetTotal = "YeuCauMuaDuocPham/GetTotalDuTruMuaDuocPhamChiTietForGridAsyncChild";
        this.urlGetDataChild = "YeuCauMuaDuocPham/GetDuTruMuaDuocPhamTaiKhoaChiTietForGridAsyncChild";
        this.urlGetTotalChild = "YeuCauMuaDuocPham/GetTotalDuTruMuaDuocPhamTaiKhoaChiTietForGridAsyncChild";
        this.duTruMuaDuocPhamId = 0;
        this.groups = [{ field: 'Nhom' }];
        this.hideGuibtn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhSachTongHopDuTruMuaDuocPhamTaiKhoa;
        this.danhSachTongHopDuTruMuaThuocTaiKhoa = new _tong_hop_du_tru_mua_thuoc_tai_khoa_model__WEBPACK_IMPORTED_MODULE_5__["TongHopDuTruMuaThuocTaiKhoa"]();
        let id = this.route.snapshot.params.id;
        if (id != undefined && id != null) {
            this.getThongTinTongHopDuTruMuaTaiKhoa(id);
        }
        this.duTruMuaDuocPhamId = id;
        this.gridColumns = [
            { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "TenDuocPham", Title: "Tên", Width: 100, ShowTooltip: true },
            { Field: "HoatChat", Title: "Hoạt chất", Width: 100, ShowTooltip: true },
            { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 80 },
            { Field: "DonViTinh", Title: "ĐVT", Width: 50 },
            { Field: "SoDangKy", Title: "SDK", Width: 50 },
            { Field: "DuongDung", Title: "Đường Dùng", Width: 50 },
            { Field: "HangSanXuat", Title: "Hãng SX", Width: 100 },
            { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
            { Field: "NhomDuPhong", Title: "Nhóm Đ.Trị/D.Phòng", Width: 100 },
            { Field: "SoLuongDuTru", Title: "SL Dự Trù", Width: 100 },
            { Field: "SoLuongDuKienSuDung", Title: "SL D.KIẾN S.DỤNG TRONG KỲ", Width: 100 },
            { Field: "SoLuongDuTruTruongKhoaDuyet", Title: "T.Khoa Duyệt", Width: 100 },
        ];
        this.gridChildColumns = [
            { Field: "TenNhomDieuTriDuPhong", Title: "Nhóm", Width: 100 },
            { Field: "TenKho", Title: "Kho", Width: 120 },
            { Field: "KyDuTruDisplay", Title: "Kỳ dự trù", Width: 80 },
            { Field: "SoLuongDuTruDisplay", Title: "SL dự trù", Width: 50 },
            { Field: "SoLuongDuKienSuDungDisplay", Title: "SL d.kiến trong kỳ", Width: 50 },
        ];
    }
    getThongTinTongHopDuTruMuaTaiKhoa(id) {
        this.apiService.get("YeuCauMuaDuocPham/GetThongTinDuTruDuocPhamTaiKhoa/" + id)
            .subscribe((resultData) => {
            if (resultData !== null && resultData !== undefined) {
                this.danhSachTongHopDuTruMuaThuocTaiKhoa = resultData;
                console.log("data: ", resultData);
            }
        });
    }
    onDataBound(event) {
        if (event != undefined && event.Data.length > 0) {
            this.duTruMuaDuocPhamTaiKhoaChiTietVo = event.Data;
        }
    }
    getSharedData() {
        return this.danhSachTongHopDuTruMuaThuocTaiKhoa;
    }
};
TongHopDuTruMuaThuocTaiKhoaChiTietSharedComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], TongHopDuTruMuaThuocTaiKhoaChiTietSharedComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomSLTKDuyet', { static: true })
], TongHopDuTruMuaThuocTaiKhoaChiTietSharedComponent.prototype, "nhomSLTKDuyet", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TongHopDuTruMuaThuocTaiKhoaChiTietSharedComponent.prototype, "trangThaiVo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TongHopDuTruMuaThuocTaiKhoaChiTietSharedComponent.prototype, "validationErrorsDuocPham", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TongHopDuTruMuaThuocTaiKhoaChiTietSharedComponent.prototype, "isCreate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TongHopDuTruMuaThuocTaiKhoaChiTietSharedComponent.prototype, "hideGuibtn", void 0);
TongHopDuTruMuaThuocTaiKhoaChiTietSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared/du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared/du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared.component.scss")).default]
    })
], TongHopDuTruMuaThuocTaiKhoaChiTietSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa.module.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa.module.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: TongHopDuTruMuaThuocTaiKhoaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaThuocTaiKhoaModule", function() { return TongHopDuTruMuaThuocTaiKhoaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tong_hop_du_tru_mua_thuoc_tai_khoa_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-thuoc-tai-khoa-routing.module */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-routing.module.ts");
/* harmony import */ var _ds_tong_hop_du_tru_mua_thuoc_tai_khoa_ds_tong_hop_du_tru_mua_thuoc_tai_khoa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ds-tong-hop-du-tru-mua-thuoc-tai-khoa/ds-tong-hop-du-tru-mua-thuoc-tai-khoa.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/ds-tong-hop-du-tru-mua-thuoc-tai-khoa/ds-tong-hop-du-tru-mua-thuoc-tai-khoa.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/dist/fesm2015/index.js");
/* harmony import */ var _gui_tong_hop_du_tru_mua_thuoc_tai_khoa_duyet_gui_tong_hop_du_tru_mua_thuoc_tai_khoa_duyet_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.ts");
/* harmony import */ var _tong_hop_du_tru_mua_thuoc_tai_khoa_detail_tong_hop_du_tru_mua_thuoc_tai_khoa_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-thuoc-tai-khoa-detail/tong-hop-du-tru-mua-thuoc-tai-khoa-detail.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-detail/tong-hop-du-tru-mua-thuoc-tai-khoa-detail.component.ts");
/* harmony import */ var _tong_hop_du_tru_mua_thuoc_tai_khoa_duyet_tong_hop_du_tru_mua_thuoc_tai_khoa_duyet_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.ts");
/* harmony import */ var _tong_hop_du_tru_mua_thuoc_tai_khoa_shared_tong_hop_du_tru_mua_thuoc_tai_khoa_shared_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-thuoc-tai-khoa-shared/tong-hop-du-tru-mua-thuoc-tai-khoa-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-shared/tong-hop-du-tru-mua-thuoc-tai-khoa-shared.component.ts");
/* harmony import */ var _phieu_tong_hop_du_tru_mua_thuoc_tai_khoa_duyet_phieu_tong_hop_du_tru_mua_thuoc_tai_khoa_duyet_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.ts");
/* harmony import */ var _gui_tong_hop_du_tru_mua_thuoc_tai_khoa_confirm_gui_tong_hop_du_tru_mua_thuoc_tai_khoa_confirm_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm.component.ts");
/* harmony import */ var _tong_hop_du_tru_mua_thuoc_tai_khoa_khong_duyet_tong_hop_du_tru_mua_thuoc_tai_khoa_khong_duyet_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet.component.ts");
/* harmony import */ var _tong_hop_du_tru_mua_thuoc_tai_khoa_xem_chi_tiet_shared_du_tru_mua_thuoc_tai_khoa_xem_chi_tiet_shared_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared/du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared/du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared.component.ts");
/* harmony import */ var _phieu_mua_du_tru_tai_khoa_phieu_mua_du_tru_tai_khoa_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.ts");
/* harmony import */ var _yeu_cau_mua_thuoc_yeu_cau_mua_thuoc_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../yeu-cau-mua-thuoc/yeu-cau-mua-thuoc.module */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/yeu-cau-mua-thuoc.module.ts");

























let TongHopDuTruMuaThuocTaiKhoaModule = class TongHopDuTruMuaThuocTaiKhoaModule {
};
TongHopDuTruMuaThuocTaiKhoaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ds_tong_hop_du_tru_mua_thuoc_tai_khoa_ds_tong_hop_du_tru_mua_thuoc_tai_khoa_component__WEBPACK_IMPORTED_MODULE_4__["DsTongHopDuTruMuaThuocTaiKhoaComponent"],
            _gui_tong_hop_du_tru_mua_thuoc_tai_khoa_duyet_gui_tong_hop_du_tru_mua_thuoc_tai_khoa_duyet_component__WEBPACK_IMPORTED_MODULE_15__["GuiTongHopDuTruMuaThuocTaiKhoaDuyetComponent"],
            _tong_hop_du_tru_mua_thuoc_tai_khoa_detail_tong_hop_du_tru_mua_thuoc_tai_khoa_detail_component__WEBPACK_IMPORTED_MODULE_16__["TongHopDuTruMuaThuocTaiKhoaDetailComponent"],
            _tong_hop_du_tru_mua_thuoc_tai_khoa_duyet_tong_hop_du_tru_mua_thuoc_tai_khoa_duyet_component__WEBPACK_IMPORTED_MODULE_17__["TongHopDuTruMuaThuocTaiKhoaDuyetComponent"],
            _tong_hop_du_tru_mua_thuoc_tai_khoa_shared_tong_hop_du_tru_mua_thuoc_tai_khoa_shared_component__WEBPACK_IMPORTED_MODULE_18__["TongHopDuTruMuaThuocTaiKhoaSharedComponent"],
            _phieu_tong_hop_du_tru_mua_thuoc_tai_khoa_duyet_phieu_tong_hop_du_tru_mua_thuoc_tai_khoa_duyet_component__WEBPACK_IMPORTED_MODULE_19__["PhieuTongHopDuTruMuaThuocTaiKhoaDuyetComponent"],
            _gui_tong_hop_du_tru_mua_thuoc_tai_khoa_confirm_gui_tong_hop_du_tru_mua_thuoc_tai_khoa_confirm_component__WEBPACK_IMPORTED_MODULE_20__["GuiTongHopDuTruMuaThuocTaiKhoaConfirmComponent"],
            _tong_hop_du_tru_mua_thuoc_tai_khoa_khong_duyet_tong_hop_du_tru_mua_thuoc_tai_khoa_khong_duyet_component__WEBPACK_IMPORTED_MODULE_21__["TongHopDuTruMuaThuocTaiKhoaKhongDuyetComponent"],
            _tong_hop_du_tru_mua_thuoc_tai_khoa_xem_chi_tiet_shared_du_tru_mua_thuoc_tai_khoa_xem_chi_tiet_shared_component__WEBPACK_IMPORTED_MODULE_22__["TongHopDuTruMuaThuocTaiKhoaChiTietSharedComponent"],
            _phieu_mua_du_tru_tai_khoa_phieu_mua_du_tru_tai_khoa_component__WEBPACK_IMPORTED_MODULE_23__["PhieuMuaTruTaiKhoaComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tong_hop_du_tru_mua_thuoc_tai_khoa_routing_module__WEBPACK_IMPORTED_MODULE_3__["TongHopDuTruMuaThuocTaiKhoaRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_9__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
            _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_14__["DropDownButtonModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_12__["LayoutModule"],
            _yeu_cau_mua_thuoc_yeu_cau_mua_thuoc_module__WEBPACK_IMPORTED_MODULE_24__["YeuCauMuaThuocModule"]
        ],
        entryComponents: [
            _phieu_tong_hop_du_tru_mua_thuoc_tai_khoa_duyet_phieu_tong_hop_du_tru_mua_thuoc_tai_khoa_duyet_component__WEBPACK_IMPORTED_MODULE_19__["PhieuTongHopDuTruMuaThuocTaiKhoaDuyetComponent"],
            _gui_tong_hop_du_tru_mua_thuoc_tai_khoa_confirm_gui_tong_hop_du_tru_mua_thuoc_tai_khoa_confirm_component__WEBPACK_IMPORTED_MODULE_20__["GuiTongHopDuTruMuaThuocTaiKhoaConfirmComponent"],
            _tong_hop_du_tru_mua_thuoc_tai_khoa_khong_duyet_tong_hop_du_tru_mua_thuoc_tai_khoa_khong_duyet_component__WEBPACK_IMPORTED_MODULE_21__["TongHopDuTruMuaThuocTaiKhoaKhongDuyetComponent"],
            _phieu_mua_du_tru_tai_khoa_phieu_mua_du_tru_tai_khoa_component__WEBPACK_IMPORTED_MODULE_23__["PhieuMuaTruTaiKhoaComponent"]
        ]
    })
], TongHopDuTruMuaThuocTaiKhoaModule);



/***/ })

}]);
//# sourceMappingURL=nhap-xuat-duoc-pham-tong-hop-du-tru-mua-thuoc-tai-khoa-tong-hop-du-tru-mua-thuoc-tai-khoa-module-es2015.js.map