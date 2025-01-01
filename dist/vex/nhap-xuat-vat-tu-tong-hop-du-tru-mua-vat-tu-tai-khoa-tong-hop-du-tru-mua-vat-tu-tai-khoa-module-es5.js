(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nhap-xuat-vat-tu-tong-hop-du-tru-mua-vat-tu-tai-khoa-tong-hop-du-tru-mua-vat-tu-tai-khoa-module"], {
        /***/ "./node_modules/@iconify/icons-ic/baseline-info.js": 
        /*!*********************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/baseline-info.js ***!
          \*********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/ds-tong-hop-du-tru-mua-vat-tu-tai-khoa/ds-tong-hop-du-tru-mua-vat-tu-tai-khoa.component.html": 
        /*!**********************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/ds-tong-hop-du-tru-mua-vat-tu-tai-khoa/ds-tong-hop-du-tru-mua-vat-tu-tai-khoa.component.html ***!
          \**********************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n            {Title:'Nhập Xuất',Path:''}\n            ,{Title:'Vật Tư',Path:''}\n            ,{Title:'Dự Trù Mua',Path:''}\n            ,{Title:'THDT Mua Tại Khoa',Path:'',Active:true}\n            ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n\n        <div class=\"card overflow-auto -mt-15\">\n            <kendo-tabstrip fxFlex=\"100%\" class=\"tab-no-padding-content field-set-p\"\n                (tabSelect)=\"chuyenDen('card1', $event)\">\n                <kendo-tabstrip-tab [selected]=\"lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy\">\n                    <ng-template kendoTabTitle>\n                        CHỜ XỬ LÝ   \n                    </ng-template>\n                    <ng-template kendoTabContent>\n                        <kendo-splitter>\n                            <kendo-splitter-pane [collapsible]=\"true\" class=\"sticky-panelbar\">\n                                <div class=\"\">\n                                    <kendo-panelbar class=\"m-1\">\n                                        <kendo-panelbar-item expanded=\"true\" class=\"panelbar-item\">\n                                            <ng-template kendoPanelBarContent>\n                                                <div class=\"card overflow-auto -mt-15\">\n                                                    <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n                                                        [useActionDefault]=\"false\"\n                                                        [additionalSearchString]=\"addtionStringDefault\"\n                                                        (extOnDataBound)=\"onDataBound($event)\" [lazyLoadPage]=\"true\"\n                                                        [useHeaderDefault]=\"false\" [allowSortDefault]=\"false\"\n                                                        [checkboxAble]=\"false\" pageSize=\"50\" #gridChoDuyet\n                                                        [sort]=\"sortDuTruChoXuLy\"\n                                                        urlGetData=\"YeuCauMuaVatTu/GetDanhSachDuyetMuaDuTruTaiKhoaForGridAsync\"\n                                                        urlGetTotalPage=\"YeuCauMuaVatTu/GetTotalDanhSachDuyetMuaDuTruTaiKhoaForGridAsync\"\n                                                        [headerTemplate]=\"headerTemplate\" [groups]=\"groups\"\n                                                        [detailTemplate]=\"detailTemplate\" heightToolbar=\"200\">\n                                                        <ng-template #detailTemplate let-dataItem>\n                                                            <app-grid [gridColumns]=\"gridChildThuocVacXinColumns\"\n                                                                [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                                                                [sort]=\"sortDuTruChild\" [showStt]=\"true\"\n                                                                [groups]=\"groupChiTietTabChoGoi\"\n                                                                [urlGetData]=\"urlGetDataGridChildAsyncChoXuLy\"\n                                                                [additionalSearchString]=\"dataItem.Id\"\n                                                                [urlGetTotalPage]=\"urlGetTotalPageGridChildChoXuLy\"\n                                                                [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                                                                [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                                                                [autoHeight]=\"true\">\n                                                            </app-grid>\n                                                        </ng-template>\n                                                    </app-grid>\n                                                </div>\n                                            </ng-template>\n                                        </kendo-panelbar-item>\n                                    </kendo-panelbar>\n                                </div>\n                            </kendo-splitter-pane>\n                        </kendo-splitter>\n                    </ng-template>\n                </kendo-tabstrip-tab>\n                <kendo-tabstrip-tab [selected]=\"lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy\">\n                    <ng-template kendoTabTitle>\n                        ĐÃ GỬI\n                    </ng-template>\n                    <ng-template kendoTabContent>\n                        <kendo-splitter>\n                            <kendo-splitter-pane [collapsible]=\"true\" class=\"sticky-panelbar\">\n                                <div class=\"\">\n                                    <kendo-panelbar class=\"m-1\">\n                                        <kendo-panelbar-item expanded=\"true\" class=\"panelbar-item\">\n                                            <ng-template kendoPanelBarContent>\n                                                <div class=\"card overflow-auto -mt-15\">\n                                                    <app-grid [gridColumns]=\"gridDaXuLyColumns\" #gridChildDaXuLy\n                                                        [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                                                        [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\"\n                                                        [additionalSearchString]=\"addtionStringDefaultDaXuLy\"\n                                                        [allowSortDefault]=\"false\" [checkboxAble]=\"false\" pageSize=\"50\"\n                                                        urlGetData=\"YeuCauMuaVatTu/GetDataTHDTTaiKhoaDaXuLyForGridAsync\"\n                                                        urlGetTotalPage=\"YeuCauMuaVatTu/GetTotalTHDTTaiKhoaDaXuLyForGridAsync\"\n                                                        [headerTemplate]=\"headerTemplate1\"\n                                                        [sort]=\"sortDaGoi\"\n                                                        [detailTemplate]=\"detailTemplate1\" heightToolbar=\"200\">\n                                                        <ng-template #detailTemplate1 let-dataItem>\n                                                            <app-grid [gridColumns]=\"gridDaXuLyChiTietColumns\"\n                                                                [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                                                                [showStt]=\"true\"\n                                                                urlGetData=\"YeuCauMuaVatTu/GetDataTHDTTaiKhoaDaXuLyForGridAsyncDetail\"\n                                                                urlGetTotalPage=\"YeuCauMuaVatTu/GetTotalTHDTTaiKhoaDaXuLyForGridAsyncDetail\"\n                                                                [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                                                                searchString=\"{{dataItem.Id}}\" [checkboxAble]=\"false\"\n                                                                [lazyLoadPage]=\"true\" [autoHeight]=\"true\"\n                                                                [detailTemplate]=\"detailTemplateChild\">\n                                                                <ng-template #detailTemplateChild let-dataItem>\n                                                                    <app-grid\n                                                                        [gridColumns]=\"gridDaXuLyChiTietChildColumns\"\n                                                                        [documentType]=\"documentType\"\n                                                                        [useAddDeault]=\"false\"\n                                                                        [urlGetData]=\"urlGetDataDaXuLyChiTietChild\"\n                                                                        [urlGetTotalPage]=\"urlGetTotalDaXuLyChiTietChild\"\n                                                                        [additionalSearchString]=\"dataItem.Id\"\n                                                                        [useHeaderDefault]=\"false\"\n                                                                        [useActionDefault]=\"false\"\n                                                                        [groups]=\"groupDaXuLyChiTiets\"\n                                                                        [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                                                                        [autoHeight]=\"true\" [showStt]=\"true\">\n                                                                    </app-grid>\n                                                                </ng-template>\n                                                            </app-grid>\n                                                        </ng-template>\n                                                    </app-grid>\n                                                </div>\n                                            </ng-template>\n                                        </kendo-panelbar-item>\n                                    </kendo-panelbar>\n                                </div>\n                            </kendo-splitter-pane>\n                        </kendo-splitter>\n                    </ng-template>\n                </kendo-tabstrip-tab>\n                <kendo-tabstrip-tab [selected]=\"lstStatusSelectTabTHDTKhoa.selectedTabTuChoi\">\n                    <ng-template kendoTabTitle>\n                        TỪ CHỐI\n                    </ng-template>\n                    <ng-template kendoTabContent>\n                        <kendo-splitter>\n                            <kendo-splitter-pane [collapsible]=\"true\" class=\"sticky-panelbar\">\n                                <div class=\"\">\n                                    <kendo-panelbar class=\"m-1\">\n                                        <kendo-panelbar-item expanded=\"true\" class=\"panelbar-item\">\n                                            <ng-template kendoPanelBarContent>\n                                                <div class=\"card overflow-auto -mt-15\">\n                                                    <app-grid [gridColumns]=\"gridTuChoiXuLyColumns\"\n                                                        [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                                                        [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\"\n                                                        #gridChildTuChoi [allowSortDefault]=\"false\"\n                                                        [urlGetData]=\"urlGetDataTuChoi\"\n                                                        [additionalSearchString]=\"addtionStringDefaultTuChoi\"\n                                                        [urlGetTotalPage]=\"urlGetTotalPageTuChoi\" [checkboxAble]=\"false\"\n                                                        pageSize=\"50\" [headerTemplate]=\"headerTemplate2\"\n                                                        [detailTemplate]=\"detailTemplate2\" heightToolbar=\"200\">\n                                                        <ng-template #detailTemplate2 let-dataItem>\n                                                            <app-grid [gridColumns]=\"gridChildTuChoiChildColumns\"\n                                                                [showStt]=\"true\" [documentType]=\"documentType\"\n                                                                [useAddDeault]=\"false\" [sort]=\"sortDuTruChild\"\n                                                                [groups]=\"groupTuChois\"\n                                                                [urlGetData]=\"urlGetDataGridChildAsyncTuChoi\"\n                                                                [urlGetTotalPage]=\"urlGetTotalPageGridChildTuChoi\"\n                                                                [additionalSearchString]=\"dataItem.Id\"\n                                                                [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                                                                [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                                                                [autoHeight]=\"true\">\n                                                            </app-grid>\n                                                        </ng-template>\n\n                                                    </app-grid>\n                                                </div>\n                                            </ng-template>\n                                        </kendo-panelbar-item>\n                                    </kendo-panelbar>\n                                </div>\n                            </kendo-splitter-pane>\n                        </kendo-splitter>\n                    </ng-template>\n                </kendo-tabstrip-tab>\n            </kendo-tabstrip>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n\n<!-- template dang chờ duyêt  -->\n<ng-template #soPhieuTemplate let-dataItem>\n    <div class=\"text-center\" kendoTooltip>\n        <a (click)=\"chiTiet(dataItem.Id, dataItem.TrangThaiDuTru)\">\n            <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.SoPhieu}}\">\n                {{dataItem.SoPhieu}}\n            </p>\n        </a>\n    </div>\n</ng-template>\n<ng-template #headerTemplate>\n    <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <app-checkbox name=\"cho-duyet\" class=\"ml-2\" value=\"coduyet\"\n            [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.ChoDuyet\"\n            (modelChange)=\"trangThaiCheckBox($event, 'choduyet', 0)\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n            fxLayoutAlign=\"start center\" label=\"Chờ duyệt\">\n        </app-checkbox>\n        <app-checkbox name=\"co-goi\" class=\"ml-2\" value=\"coduyet\"\n            (modelChange)=\"trangThaiCheckBox($event, 'chogoi', 0)\"\n            [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.DaDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n            fxLayoutAlign=\"start center\" label=\"Chờ gửi\">\n        </app-checkbox>\n        <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n            fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 10px;\">\n            <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n            <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                type=\"search\" name=\"searchString\" [(ngModel)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.SearchString\"\n                (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n        </div>\n        <app-daterangepicker style=\"margin-left: 5px;\" id=\"range-ngay-yeu-cau\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n            [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate\" label=\"Yêu cầu từ ngày - đến ngày\"\n            (keyup)=\"onKey($event)\" (modelChange)=\"timKiem()\" (blur)=\"blur()\" class=\"mt-1 on-header\">\n        </app-daterangepicker>\n        <span fxFlex></span>\n\n    </div>\n</ng-template>\n<ng-template #nhomGroupHeaderTemplate let-value=\"value\" let-dataItem let-aggregates=\"aggregates\">\n    <div fxFlex=\"100%\">\n        <strong fxFlex=\"15%\"  [ngStyle]=\"{'color':value !== 'Chờ duyệt' ? '#afb42b' : 'sandybrown' }\">\n            <span>{{theFirstValueFormat(value)}}({{aggregates.TrangThai.count}})</span>\n        </strong>\n        <strong fxFlex=\"70%\" *ngIf=\"value !== 'Chờ duyệt'\">\n            <span fxFlex=\"60%\">Kỳ dự trù: <span style=\"color:#afb42b\">{{theFirstValueFormatChuKy(value)}}</span></span>\n        </strong>\n        <button fxFlex=\"15%\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n            (click)=\"guiKhoaDuyetTatCa(value)\" *ngIf=\"value !== 'Chờ duyệt'\" style=\"margin-right: -25px\">\n            Gửi khoa dược duyệt\n        </button>\n    </div>\n</ng-template>\n\n<ng-template #actionTemplate let-dataItem>\n    <button *ngIf=\"dataItem.TrangThai === 'Chờ duyệt'\" type=\"button\" (click)=\"TuChoi(dataItem.Id)\" color=\"warn\"\n        mat-raised-button><i class=\"ft-save mr-1\"></i> Từ chối</button>\n    <button *ngIf=\"dataItem.TrangThai === 'Chờ duyệt'\" style=\"margin-left: 3px\" type=\"button\"\n        (click)=\"PheDuyet(dataItem.Id)\" color=\"primary\" mat-raised-button><i class=\"ft-save mr-1\"></i>Duyệt</button>\n    <button *ngIf=\"dataItem.TrangThai !== 'Chờ duyệt'\" type=\"button\" (click)=\"HuyDuyet(dataItem.Id)\" color=\"warn\"\n        mat-raised-button><i class=\"ft-save mr-1\"></i> Hủy duyệt</button>\n</ng-template>\n<!--End template dang chờ duyêt  -->\n\n<!-- template Đã xử lý -->\n\n<!-- <ng-template #soPhieuTemplate let-dataItem>\n    <div class=\"text-center\" kendoTooltip>\n        <a (click)=\"chiTiet(dataItem.Id, dataItem.TinhTrang)\">\n            <p kendoTooltip class=\"reverse-ellipsis l\"\n                title=\"{{dataItem.SoPhieu}}\">\n                {{dataItem.SoPhieu}}</p>\n        </a>\n    </div>\n</ng-template> -->\n\n<ng-template #headerTemplate1>\n    <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <app-checkbox name=\"cho-duyet\" (modelChange)=\"trangThaiCheckBox($event,'choduyet',1)\" class=\"ml-2\"\n            value=\"coduyet\" [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.DaGuiChoDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs\n            fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Đã gửi & Chờ duyệt\">\n        </app-checkbox>\n        <app-checkbox name=\"co-goi\" (modelChange)=\"trangThaiCheckBox($event,'daduyet',1)\" class=\"ml-2\" value=\"coduyet\"\n            [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.DaDuyetDaXuLy\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n            fxLayoutAlign=\"start center\" label=\"Đã duyệt\">\n        </app-checkbox>\n        <app-checkbox name=\"co-goi\" (modelChange)=\"trangThaiCheckBox($event,'tuchoi',1)\" class=\"ml-2\" value=\"coduyet\"\n            [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TuChoiDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n            fxLayoutAlign=\"start center\" label=\"Từ chối\">\n        </app-checkbox>\n        <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n            fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 10px;\">\n            <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n            <input [formControl]=\"searchCtrlDaXuLy\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                type=\"search\" name=\"searchCtrlDaXuLy\"\n                [(ngModel)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.SearchStringDaXuLy\" (keyup)=\"onKey($event)\"\n                (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n        </div>\n        <app-daterangepicker style=\"margin-left: 5px;\" id=\"range-ngay-yeu-cau\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n            [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy\" label=\"Yêu cầu từ ngày - đến ngày\"\n            (keyup)=\"onKey($event)\" (modelChange)=\"timKiem()\" (blur)=\"blur()\" class=\"mt-1 on-header\">\n        </app-daterangepicker>\n        <span fxFlex></span>\n    </div>\n</ng-template>\n\n<ng-template #ngayYeuCauDaXuLyTemplate let-dataItem>\n    {{dataItem.NgayYeuCauDisplay}}\n</ng-template>\n<ng-template #ngayYeuCauDetailDaXuLyTemplate let-dataItem>\n    {{dataItem.NgayYeuCauDisplay}}\n</ng-template>\n<ng-template #ngayKhoDuocDaXuLyTemplate let-dataItem>\n    {{dataItem.NgayKhoDuocDuyetDisplay}}\n</ng-template>\n<ng-template #ngayGiamDocDaXuLyTemplate let-dataItem>\n    {{dataItem.NgayGiamDocDuyetDisplay}}\n</ng-template>\n<ng-template #ngayTruongKhoaDaXuLyTemplate let-dataItem>\n    {{dataItem.NgayTruongKhoaDuyetDisplay}}\n</ng-template>\n\n<ng-template #tinhTrangTemplate let-dataItem>\n    <label *ngIf=\"dataItem.TinhTrang == 0\" style=\"color: blue;\">\n        <span>Đã gửi & Chờ duyệt</span>\n    </label>\n    <label *ngIf=\"dataItem.TinhTrang == 1\" class=\"green\">\n        <span>Đã duyệt</span>\n    </label>\n    <label *ngIf=\"dataItem.TinhTrang == 2\" class=\"red\">\n        <span>Từ chối</span>\n    </label>\n</ng-template>\n\n<ng-template #soPhieuDaXuLyTemplate let-dataItem>\n    <div class=\"text-center\" kendoTooltip>\n        <a (click)=\"chiTietDaXuLyParent(dataItem.Id)\">\n            <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.SoPhieu}}\">\n                {{dataItem.SoPhieu}}\n            </p>\n        </a>\n    </div>\n</ng-template>\n\n<ng-template #soPhieuDaXuLyChiTietTemplate let-dataItem>\n    <div class=\"text-center\" kendoTooltip>\n        <a (click)=\"chiTietDaXuLy(dataItem.Id, dataItem.TinhTrang, 1)\">\n            <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.SoPhieu}}\">\n                {{dataItem.SoPhieu}}\n            </p>\n        </a>\n    </div>\n</ng-template>\n<!--End template Đã xử lý -->\n\n\n<!-- template Từ chối -->\n<ng-template #headerTemplate2>\n    <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n            fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 10px;\">\n            <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n            <input [formControl]=\"searchCtrlTuChoi\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                type=\"search\" name=\"SearchStringTuChoi\"\n                [(ngModel)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.SearchStringTuChoi\" (keyup)=\"onKey($event)\"\n                (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n        </div>\n        <app-daterangepicker style=\"margin-left: 5px;\" id=\"range-ngay-yeu-cau\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n            [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi\" label=\"Yêu cầu từ ngày - đến ngày\"\n            (keyup)=\"onKey($event)\" (modelChange)=\"timKiem()\" (blur)=\"blur()\" class=\"mt-1 on-header\">\n        </app-daterangepicker>\n        <span fxFlex></span>\n    </div>\n</ng-template>\n<ng-template #soPhieuTuChoiTemplate let-dataItem>\n    <div class=\"text-center\" kendoTooltip>\n        <a (click)=\"chiTietDaXuLy(dataItem.Id, 2, 1)\">\n            <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.SoPhieu}}\">\n                {{dataItem.SoPhieu}}\n            </p>\n        </a>\n    </div>\n</ng-template>\n\n<ng-template #nhomGroupTuChoiHeaderTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n</ng-template>\n\n<ng-template #ngayYeuCauTuChoiTemplate let-dataItem>\n    {{dataItem.NgayYeuCauDisplay}}\n</ng-template>\n\n<ng-template #ngayTuChoiTemplate let-dataItem>\n    {{dataItem.NgayTuChoiDisplay}}\n</ng-template>\n<!--End template Từ chối -->\n\n<ng-template #nhomChiTietTabChoGoiTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n</ng-template>\n\n\n<ng-template #nhomGroupDaXuLyChiTietHeaderTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n</ng-template>\n\n<ng-template #khoTongTonTemplate let-dataItem>\n    <ng-template #templateHdInfo let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr *ngFor=\"let hdt of khos\">\n                <td>{{hdt.Ten}}:</td>\n                <td>{{hdt.SLTon}}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <div class=\"kho-tong-ton-ng-template\" kendoTooltip>\n        <span class=\"kho-tong-ton-label\">{{dataItem.HDChuaNhap}}</span>\n        <span *ngIf=\"dataItem.HDChuaNhap != 0\" class=\"kho-tong-ton-ng-template\" kendoTooltip #tooltip=\"kendoTooltip\"\n            tooltipClass=\"tooltip-block\" position=\"left\" [tooltipTemplate]=\"templateHdInfo\" filter=\"*\">\n            <mat-icon [icIcon]=\"icInfo\" (mouseover)=\"TooltipCustom(dataItem)\" class=\"info\"></mat-icon>\n        </span>\n    </div>\n</ng-template>\n\n<ng-template #hdChuaNhapTemplate let-dataItem>\n    <ng-template #templateInfo let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr *ngFor=\"let kho of hdts\">\n                <td>{{kho.Ten}}:</td>\n                <td>{{kho.SLTon}}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <div class=\"kho-tong-ton-ng-template\" kendoTooltip>\n        <span class=\"kho-tong-ton-label\">{{dataItem.KhoTongTon}}</span>\n        <span *ngIf=\"dataItem.KhoTongTon != 0\" class=\"kho-tong-ton-ng-template\" kendoTooltip #tooltip=\"kendoTooltip\"\n            tooltipClass=\"tooltip-block\" position=\"left\" [tooltipTemplate]=\"templateInfo\" filter=\"*\">\n            <mat-icon [icIcon]=\"icInfo\" (mouseover)=\"TooltipCustom(dataItem)\" class=\"info\"></mat-icon>\n        </span>\n    </div>\n</ng-template>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm.component.html": 
        /*!****************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm.component.html ***!
          \****************************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>{{Title}}</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <div [innerHtml]=\"Message\"></div>\n</mat-dialog-content>\n\n\n<mat-dialog-actions align=\"end\" class=\"mt-3\">\n    <button mat-button (click)=\"close('No')\">{{ButtonNo}}</button>\n    <button mat-raised-button color=\"primary\" (click)=\"close('YesAndPrint')\">{{ButtonYesAndPrint}}</button>\n    <button mat-raised-button color=\"primary\" (click)=\"close('Yes')\">{{ButtonYes}}</button>\n\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.html": 
        /*!************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.html ***!
          \************************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Vật Tư',Path:''}\n                ,{Title:'Dự Trù Mua',Path:''}\n                ,{Title:'THDT Mua Tại Khoa',Path:'/nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa', Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Gửi duyệt dự trù mua vật tư</h2>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                    <app-textbox id=\"khoa\" [fxFlex]=\"20\" [fxFlex.sm]=\"20\" [(model)]=\"thongTinGoiTaiKhoa.TenKhoaPhong\" [required]=\"true\" maxlength=\"250\" label=\"Khoa\" [disabled]=\"true\">\n                    </app-textbox>\n\n                    <app-textbox id=\"nguoiYeuCau\" [fxFlex]=\"20\" [fxFlex.sm]=\"20\" [(model)]=\"thongTinGoiTaiKhoa.TenNhanVienYeuCau\" [required]=\"true\" maxlength=\"250\" label=\"Người yêu cầu\" [disabled]=\"true\">\n                    </app-textbox>\n\n                    <app-datepicker id=\"ngayYeuCau\" fxFlex=\"20\" fxFlex.sm=\"20\" [required]=\"true\" label=\"Ngày yêu cầu\" [(model)]=\"thongTinGoiTaiKhoa.NgayYeuCau\" [disabled]=\"true\" [validationerror]=\"'TuNgay' | validationerror:validationErrors\">\n                    </app-datepicker>\n\n                    <app-textarea id=\"ghiChu\" fxFlex=\"auto\" fxFlex.sm=\"100\" maxlength=\"4000\" label=\"Ghi chú\" minHeight=\"20\" [(model)]=\"thongTinGoiTaiKhoa.GhiChu\">\n                    </app-textarea>\n\n                    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông tin chi tiết</h3>\n                    <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridColumns]=\"gridColumns\" [allowSortDefault]=\"true\" [documentType]=\"documentType\" [sort]=\"sortDuTruTaiKhoa\" urlGetData=\"YeuCauMuaVatTu/GetDuTruMuaVTTaiKhoaForGridAsync\" urlGetTotalPage=\"YeuCauMuaVatTu/GetTotalDuTruMuaVTTaiKhoaForGridAsync\"\n                        [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" (extOnDataBound)=\"onDataBound($event)\" [additionalSearchString]=\"kyDuTruMuaDuocPhamVatTuId\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\" [pageable]=\"false\"\n                        [detailTemplate]=\"detailTemplate\" [groups]=\"groups\">\n                        <ng-template #detailTemplate let-dataItem>\n                            <app-grid [gridColumns]=\"gridChildColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\" [sort]=\"sortDuTruChild\" [urlGetData]=\"urlGetDataGridChildAsync\" additionalSearchString=\"{{kyDuTruMuaDuocPhamVatTuId}}-{{dataItem.LaBHYT}}-{{dataItem.VatTuId}}\"\n                            [showStt]=\"true\"  [urlGetTotalPage]=\"urlGetTotalPageGridChild\" [useHeaderDefault]=\"false\"                               \n                                 [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" [autoHeight]=\"true\">\n                            </app-grid>\n                        </ng-template>\n                    </app-grid>\n                </div>\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" title=\"Phím tắt: Esc\" (click)=\"cancel()\" mat-button class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n                    <button type=\"button\" (click)=\"guiTatCa()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i>\n                        Gửi</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n</ng-template>\n\n<!-- <ng-template #nhomChiTietTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n</ng-template> -->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.html": 
        /*!********************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.html ***!
          \********************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>IN PHIẾU DỰ TRÙ MUA VẬT TƯ TẠI KHOA </div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\"><iframe width=\"100%\" [src]=\"src| safe\" allowTransparency=\"true\" background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' class=\"mr-1 mt-2\" textPrint=\"In phiếu\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/phieu-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/phieu-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.html": 
        /*!****************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/phieu-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/phieu-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.html ***!
          \****************************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-detail/tong-hop-du-tru-mua-vat-tu-tai-khoa-detail.component.html": 
        /*!******************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-detail/tong-hop-du-tru-mua-vat-tu-tai-khoa-detail.component.html ***!
          \******************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Vật Tư',Path:''}\n                ,{Title:'Dự Trù Mua',Path:''}\n                ,{Title:'THDT Mua Tại Khoa',Path:'/nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa' , queryParams: {holdQuery : true}}                \n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chi tiết duyệt dự trù mua vật tư</h2>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == true\"\n                    style=\"color:green\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == false\"\n                    style=\"color:red\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == null\"\n                    style=\"color:orange\">{{trangThaiVo.Ten}}</b>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared [trangThaiVo]=\"trangThaiVo\">\n                </app-du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" (click)=\"inPhieu()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i>\n                        In phiếu dự trù</button>\n                    <button type=\"button\" title=\"Phím tắt: Esc\" (click)=\"cancel()\" mat-button\n                        class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i> Quay lại</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.html": 
        /*!****************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.html ***!
          \****************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập Xuất',Path:''}\n                ,{Title:'Vật Tư',Path:''}\n                ,{Title:'Dự Trù Mua',Path:''},\n                {Title:'THDT Mua Tại Khoa',Path:'/nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa', queryParams: {holdQuery : true},Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b render-text\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 *ngIf=\"tabDaXuLy== 'DaXuLy'\"  class=\"title m-0\" >Chi Tiết Tổng Hợp Dự Trù Mua Vật Tư</h2>\n                <h2 *ngIf=\"tabDaXuLy!= 'DaXuLy'\"  class=\"title m-0\" >Duyệt Tổng Hợp Dự Trù Mua Vật Tư</h2>\n                <!-- <label *ngIf=\"tabDaXuLy== 'DaXuLy' && danhSachTongHopDuTruMuaVatTuTaiKhoa.TinhTrang == 0\"  style=\"color: blue;\">\n                    <span>Đã gửi & Chờ duyệt</span>\n                </label>\n                <label *ngIf=\"tabDaXuLy== 'DaXuLy' && danhSachTongHopDuTruMuaVatTuTaiKhoa.TinhTrang == 1\" class=\"green\">\n                    <span>Đã duyệt</span>\n                </label>\n                <label *ngIf=\"tabDaXuLy== 'DaXuLy' && danhSachTongHopDuTruMuaVatTuTaiKhoa.TinhTrang == 2\" class=\"red\">\n                    <span>Từ chối</span>\n                </label> -->\n\n                <!-- Đã gửi -->\n                <label *ngIf=\"tabDaXuLy== 'DaXuLy' && danhSachTongHopDuTruMuaVatTuTaiKhoa.TinhTrang == 0\"\n                    style=\"color: blue;\">\n                    <span>Đã gửi & Chờ duyệt</span>\n                </label>\n                <label *ngIf=\"tabDaXuLy== 'DaXuLy' && danhSachTongHopDuTruMuaVatTuTaiKhoa.TinhTrang == 1\" class=\"green\">\n                    <span>Đã duyệt</span>\n                </label>\n                <label *ngIf=\"tabDaXuLy== 'DaXuLy' && danhSachTongHopDuTruMuaVatTuTaiKhoa.TinhTrang == 2\" class=\"red\">\n                    <span>Từ chối</span>\n                </label>\n\n                <!-- chờ gửi -->\n                <label *ngIf=\"tabDaXuLy!= 'DaXuLy' && danhSachTongHopDuTruMuaVatTuTaiKhoa.TinhTrang == 1\"\n                    style=\"color: sandybrown;\">\n                    <span>Chờ duyệt</span>\n                </label>\n                <label *ngIf=\"tabDaXuLy!= 'DaXuLy' && danhSachTongHopDuTruMuaVatTuTaiKhoa.TinhTrang == 0\"\n                    style=\"color: #afb42b;\">\n                    <span>Chờ gửi</span>\n                </label>\n                \n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-tong-hop-du-tru-mua-vat-tu-tai-khoa-shared [tabSelected]=\"tabDaXuLy\"\n                    [validationErrorsVatTu]=\"validationErrors\" [isCreate]=\"true\">\n                </app-tong-hop-du-tru-mua-vat-tu-tai-khoa-shared>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet/tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet.component.html": 
        /*!****************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet/tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet.component.html ***!
          \****************************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>{{Title}}</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"min-height: 115px;\">\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <div fxFlex=\"100\" fxFlex.sm=\"100\" [innerHtml]=\"Message\"></div>\n\n        <app-textarea id=\"lyDo\" [(model)]=\"lyDo\" fxFlex=\"100\" fxFlex.sm=\"100\" maxlength=\"1000\" label=\"Lý do\"\n            minHeight=\"20\">\n        </app-textarea>\n    </div>\n</mat-dialog-content>\n\n\n<mat-dialog-actions align=\"end\" class=\"mt-3\">\n    <button mat-button (click)=\"close('No')\">{{ButtonNo}}</button>\n    <button mat-raised-button [disabled]=\"!lyDo\" color=\"warn\" (click)=\"close('Yes')\">{{ButtonYes}}</button>\n\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-shared/tong-hop-du-tru-mua-vat-tu-tai-khoa-shared.component.html": 
        /*!******************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-shared/tong-hop-du-tru-mua-vat-tu-tai-khoa-shared.component.html ***!
          \******************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <div fxFlex=\"100%\" *ngIf=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.LyDoGiamDocTuChoi !== undefined && \n    danhSachTongHopDuTruMuaVatTuTaiKhoa.LyDoGiamDocTuChoi !== null\">\n        <h4 style=\"color: red;\">Lý do: {{danhSachTongHopDuTruMuaVatTuTaiKhoa.LyDoGiamDocTuChoi}}</h4>\n    </div>\n\n    <div fxFlex=\"100%\" *ngIf=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.LyDoTruongKhoaTuChoi !== undefined && \n    danhSachTongHopDuTruMuaVatTuTaiKhoa.LyDoTruongKhoaTuChoi !== null\">\n        <h4 style=\"color: red;\">Lý do: {{danhSachTongHopDuTruMuaVatTuTaiKhoa.LyDoTruongKhoaTuChoi}}</h4>\n    </div>\n\n    <app-textbox id=\"soPhieu\" fxFlex=\"20\" fxFlex.sm=\"20\" [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.SoPhieu\"\n        [required]=\"true\" maxlength=\"250\" label=\"Số phiếu\" [disabled]=\"true\">\n    </app-textbox>\n\n    <app-combobox id=\"khoNhapId\" fxFlex=\"20\" fxFlex.sm=\"20\" [required]=\"true\"\n        [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.KhoNhapId\" [disabled]=\"true\"\n        [modelText]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TenKho\" url=\"YeuCauLinhVatTu/GetKhoCurrentUser\" label=\"Kho\"\n        [validationerror]=\"'KhoNhapId' | validationerror:validationErrors\">\n    </app-combobox>\n    <app-textbox id=\"KyDuTru\" fxFlex=\"20\" fxFlex.sm=\"20\" [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.KyDuTru\"\n        [required]=\"true\" maxlength=\"250\" label=\"Kỳ dự trù\" [disabled]=\"true\">\n    </app-textbox>\n\n    <app-textbox id=\"TenNhanVienYeuCau\" fxFlex=\"20\" fxFlex.sm=\"20\"\n        [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TenNhanVienYeuCau\" [required]=\"true\" maxlength=\"250\"\n        label=\"Người yêu cầu\" [disabled]=\"true\">\n    </app-textbox>\n    <app-datetimepicker id=\"ngayYeuCau\" fxFlex=\"20\" fxFlex.sm=\"20\"\n        [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.NgayYeuCau\" [disabled]=\"true\" [required]=\"true\"\n        label=\"Ngày yêu cầu\">\n    </app-datetimepicker>\n\n    <!-- Nhân viên kho dược và giám đốc duyệt -->\n    <app-textbox id=\"TenNhanVienKhoDuocDuyet\" fxFlex=\"20\" fxFlex.sm=\"20\" *ngIf=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TenNhanVienKhoDuocDuyet !== undefined && \n   danhSachTongHopDuTruMuaVatTuTaiKhoa.TenNhanVienKhoDuocDuyet !== null\"\n        [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TenNhanVienKhoDuocDuyet\" [required]=\"true\" maxlength=\"250\"\n        label=\"Nhân viên kho dược duyệt\" [disabled]=\"true\">\n    </app-textbox>\n    <app-datetimepicker id=\"NgayKhoDuocDuyet\" fxFlex=\"20\" fxFlex.sm=\"20\" *ngIf=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TenNhanVienKhoDuocDuyet !== undefined && \n   danhSachTongHopDuTruMuaVatTuTaiKhoa.TenNhanVienKhoDuocDuyet !== null\"\n        [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.NgayKhoDuocDuyet\" [disabled]=\"true\" [required]=\"true\"\n        label=\"Ngày kho dược duyệt\">\n    </app-datetimepicker>\n    <app-textbox id=\"TenGiamDocDuyet\" fxFlex=\"20\" fxFlex.sm=\"20\" *ngIf=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TenGiamDocDuyet !== undefined && \ndanhSachTongHopDuTruMuaVatTuTaiKhoa.TenGiamDocDuyet !== null\"\n        [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TenGiamDocDuyet\" [required]=\"true\" maxlength=\"250\"\n        label=\"Tên giám đốc\" [disabled]=\"true\">\n    </app-textbox>\n    <app-datetimepicker id=\"NgayGiamDocDuyet\" fxFlex=\"20\" fxFlex.sm=\"20\" *ngIf=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TenGiamDocDuyet !== undefined && \n                           danhSachTongHopDuTruMuaVatTuTaiKhoa.TenGiamDocDuyet !== null\"\n        [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.NgayGiamDocDuyet\" [disabled]=\"true\" [required]=\"true\"\n        label=\"Ngày giám đốc duyệt\">\n    </app-datetimepicker>\n    <!-- <app-textbox id=\"LyDoGiamDocTuChoi\" fxFlex=\"80\" fxFlex.sm=\"80\" *ngIf=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.LyDoGiamDocTuChoi !== undefined && \ndanhSachTongHopDuTruMuaVatTuTaiKhoa.LyDoGiamDocTuChoi !== null\"\n        [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.LyDoGiamDocTuChoi\" [disabled]=\"true\" maxlength=\"250\"\n        label=\"Lý do giám đốc từ chối\">\n    </app-textbox> -->\n    <!-- Nhân viên kho dược và giám đốc duyệt -->\n\n    <app-textbox id=\"GhiChu\" fxFlex=\"100\" fxFlex.sm=\"100\" [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.GhiChu\"\n        [disabled]=\"true\" maxlength=\"250\" label=\"Ghi chú\">\n    </app-textbox>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông tin chi tiết</h3>\n    <div fxFlex=\"100%\" [style.display]=\"tabSelected == 'DaXuLy' ? 'block' : 'none'\">\n        <!-- <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n            [urlGetData]=\"YeuCauMuaVatTu/GetDuTruMuaVatTuTHDTChiTietForGridAsync\"\n            [urlGetTotalPage]=\"YeuCauMuaVatTu/GetTotalDuTruMuaVatTuTHDTChiTietForGridAsync\"\n            [additionalSearchString]=\"duTruMuaVatTuId\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n            [groups]=\"groups\" [checkboxAble]=\"false\" [detailTemplate]=\"detailTemplate\" [lazyLoadPage]=\"true\"\n            [autoHeight]=\"true\" [showStt]=\"true\">\n            <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n                <strong>{{value}}</strong>\n            </ng-template>\n        </app-grid>\n        <ng-template #detailTemplate let-dataItem>\n            <app-grid [gridColumns]=\"gridColumnsChild\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                [urlGetData]=\"YeuCauMuaVatTu/GetDuTruMuaVatTuTaiKhoaChiTietForGridAsyncChild\"\n                [urlGetTotalPage]=\"YeuCauMuaVatTu/GetTotalDuTruMuaVatTuTaiKhoaChiTietForGridAsyncChild\"\n                [autoHeight]=\"true\" [showStt]=\"true\"\n                [additionalSearchString]=\"dataItem.DuTruMuaVatTuTheoKhoaId + ';' + dataItem.LaBHYT + ';'  + dataItem.VatTuId\">\n            </app-grid>\n        </ng-template> -->\n\n        <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n            [urlGetData]=\"urlGetDataDaXuLy\" [urlGetTotalPage]=\"urlGetTotalPageDaXuLy\"\n            [additionalSearchString]=\"duTruMuaVatTuId\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n            [groups]=\"groups\" [checkboxAble]=\"false\" [detailTemplate]=\"detailTemplate\" [lazyLoadPage]=\"true\"\n            [autoHeight]=\"true\" [showStt]=\"true\" (extOnDataBound)=\"onDataBound($event)\">\n            <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n                <strong>{{value}}</strong>\n            </ng-template>\n        </app-grid>\n        <ng-template #detailTemplate let-dataItem>\n            <app-grid [gridColumns]=\"gridColumnsChild\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                [urlGetData]=\"urlGetDataDaXuLyChild\" [urlGetTotalPage]=\"urlGetTotalPageDaXuLyChild\" [autoHeight]=\"true\"\n                [showStt]=\"true\"\n                [additionalSearchString]=\"dataItem.DuTruMuaVatTuTheoKhoaId + ';' + dataItem.LaBHYT + ';'  + dataItem.VatTuId\">\n            </app-grid>\n        </ng-template>\n    </div>\n    <div fxFlex=\"100%\" [style.display]=\"tabSelected != 'DaXuLy' ? 'block' : 'none'\">\n        <app-grid [gridColumns]=\"gridChildThuocVacXinColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n            [sort]=\"sortDuTruChild\" [urlGetData]=\"urlGetDataGridChildAsync\" [additionalSearchString]=\"duTruMuaVatTuId\"\n            [urlGetTotalPage]=\"urlGetTotalPageGridChild\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n            [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" [autoHeight]=\"true\" (extOnDataBound)=\"onDataBound($event)\"\n            [groups]=\"groups\">\n        </app-grid>\n        <ng-template #nhomSLTKDuyet let-dataItem let-rowIndex=\"rowIndex\">\n            <app-textboxnumeric class=\"no-label\" [step]=\"100\" [(model)]=\"dataItem.SoLuongDuTruTruongKhoaDuyet\"\n              max=\"999999\" min=\"1\" [disabled]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TinhTrang == 0 && tabSelected != 'DaXuLy'\">\n            </app-textboxnumeric>\n        </ng-template>\n        <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n            <strong>{{value}}</strong>\n        </ng-template>\n    </div>\n\n\n</div>\n\n<ng-template #khoTongTonTemplate let-dataItem>\n    <ng-template #templateHdInfo let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr *ngFor=\"let hdt of khos\">\n                <td>{{hdt.Ten}}:</td>\n                <td>{{hdt.SLTon}}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <div class=\"kho-tong-ton-ng-template\" kendoTooltip>\n        <span class=\"kho-tong-ton-label\">{{dataItem.HDChuaNhap}}</span>\n        <span *ngIf=\"dataItem.HDChuaNhap != 0\" class=\"kho-tong-ton-ng-template\" kendoTooltip #tooltip=\"kendoTooltip\"\n            tooltipClass=\"tooltip-block\" position=\"left\" [tooltipTemplate]=\"templateHdInfo\" filter=\"*\">\n            <mat-icon [icIcon]=\"icInfo\" (mouseover)=\"TooltipCustom(dataItem)\" class=\"info\"></mat-icon>\n        </span>\n    </div>\n</ng-template>\n\n<ng-template #hdChuaNhapTemplate let-dataItem>\n    <ng-template #templateInfo let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr *ngFor=\"let kho of hdts\">\n                <td>{{kho.Ten}}:</td>\n                <td>{{kho.SLTon}}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <div class=\"kho-tong-ton-ng-template\" kendoTooltip>\n        <span class=\"kho-tong-ton-label\">{{dataItem.KhoTongTon}}</span>\n        <span *ngIf=\"dataItem.KhoTongTon != 0\" class=\"kho-tong-ton-ng-template\" kendoTooltip #tooltip=\"kendoTooltip\"\n            tooltipClass=\"tooltip-block\" position=\"left\" [tooltipTemplate]=\"templateInfo\" filter=\"*\">\n            <mat-icon [icIcon]=\"icInfo\" (mouseover)=\"TooltipCustom(dataItem)\" class=\"info\"></mat-icon>\n        </span>\n    </div>\n</ng-template>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n    <button *ngIf=\"tabSelected == 'DaXuLy'\" type=\"button\" mat-button class=\"mr-1 align-left-fx\"\n        (click)=\"InPhieuTongHopTaiKhoa()\" mat-raised-button color=\"primary\"><i class=\"ft-arrow-left\"></i>\n        In phiếu tổng hợp tại khoa </button>\n    <button type=\"button\" *ngIf=\"tabSelected == 'DaXuLy'\" title=\"Phím tắt: Esc\" (click)=\"cancel()\" mat-button\n        class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i> Quay Lại</button>\n\n    <!-- Trường hợp chờ gửi  đang ở trạng thái chờ gửi thì các nút là Quay lại, HỦy duyệt 0 chờ duyet 1 chua duyet-->\n    <button *ngIf=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TinhTrang == 0 && tabSelected != 'DaXuLy'\" type=\"button\"\n        title=\"Phím tắt: Esc\" (click)=\"cancel()\" mat-button class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i>\n        Quay lại</button>\n    <button *ngIf=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TinhTrang == 0 && tabSelected != 'DaXuLy'\" type=\"button\"\n        (click)=\"HuyDuyet(duTruMuaVatTuId)\" color=\"warn\" mat-raised-button><i class=\"ft-save\"></i>Hủy Duyệt</button>\n\n    <!-- Trường hợp chửa gửi  đang ở trạng thái chờ gửi thì các nút là Quay lại, HỦy duyệt 0 chờ duyet 1 chua duyet-->\n    <button *ngIf=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TinhTrang === 1 && tabSelected != 'DaXuLy'\" type=\"button\"\n        title=\"Phím tắt: Esc\" (click)=\"cancel()\" mat-button class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i>\n        Hủy</button>\n    <button *ngIf=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TinhTrang === 1 && tabSelected != 'DaXuLy'\" type=\"button\"\n        (click)=\"TuChoi()\" color=\"warn\" mat-raised-button><i class=\"ft-save\"></i>Từ chối</button>\n    <button *ngIf=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TinhTrang === 1 && tabSelected != 'DaXuLy'\" type=\"button\"\n        (click)=\"PheDuyet(duTruMuaVatTuId)\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i>\n        Duyệt</button>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared/du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared.component.html": 
        /*!***********************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared/du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared.component.html ***!
          \***********************************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n    <div fxFlex=\"100%\" *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == false\">\n        <h4 style=\"color: red;\">Lý do: {{danhSachTongHopDuTruMuaVatTuTaiKhoa.LyDoTruongKhoaTuChoi}}</h4>\n    </div>\n    <app-textbox id=\"soPhieu\" fxFlex=\"20\" fxFlex.sm=\"20\" [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.SoPhieu\"\n        [required]=\"true\" maxlength=\"250\" label=\"Số phiếu\" [disabled]=\"true\">\n    </app-textbox>\n    <app-combobox id=\"khoNhapId\" fxFlex=\"20\" fxFlex.sm=\"20\" [required]=\"true\"\n        [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.KhoNhapId\" [disabled]=\"true\"\n        [modelText]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TenKho\" url=\"YeuCauLinhVatTu/GetKhoCurrentUser\" label=\"Kho\"\n        [validationerror]=\"'KhoNhapId' | validationerror:validationErrors\">\n    </app-combobox>\n    <app-textbox id=\"KyDuTru\" fxFlex=\"20\" fxFlex.sm=\"20\" [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.KyDuTru\"\n        [required]=\"true\" maxlength=\"250\" label=\"Kỳ dự trù\" [disabled]=\"true\">\n    </app-textbox>\n    <app-textbox id=\"TenNhanVienYeuCau\" fxFlex=\"20\" fxFlex.sm=\"20\"\n        [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TenNhanVienYeuCau\" [required]=\"true\" maxlength=\"250\"\n        label=\"Người yêu cầu\" [disabled]=\"true\">\n    </app-textbox>\n    <app-datetimepicker id=\"ngayYeuCau\" fxFlex=\"30\" fxFlex.sm=\"30\"\n        [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.NgayYeuCau\" [disabled]=\"true\" [required]=\"true\"\n        label=\"Ngày yêu cầu\">\n    </app-datetimepicker>\n    <app-textbox id=\"GhiChu\" fxFlex=\"70\" fxFlex.sm=\"70\" [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.GhiChu\"\n        [disabled]=\"true\" maxlength=\"250\" label=\"Ghi chú\">\n    </app-textbox>\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông tin chi tiết</h3>\n    <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\" [sort]=\"sortDuTruChild\"\n        [urlGetData]=\"urlGetData\" [urlGetTotalPage]=\"urlGetTotal\" [additionalSearchString]=\"duTruMuaVatTuId\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [groups]=\"groups\" [checkboxAble]=\"false\"\n        [lazyLoadPage]=\"true\" [autoHeight]=\"true\" [showStt]=\"true\">\n        <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n            <strong>{{value}}</strong>\n        </ng-template>\n    </app-grid>\n</div>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/ds-tong-hop-du-tru-mua-vat-tu-tai-khoa/ds-tong-hop-du-tru-mua-vat-tu-tai-khoa.component.scss": 
        /*!********************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/ds-tong-hop-du-tru-mua-vat-tu-tai-khoa/ds-tong-hop-du-tru-mua-vat-tu-tai-khoa.component.scss ***!
          \********************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3RvbmctaG9wLWR1LXRydS1tdWEtdmF0LXR1LXRhaS1raG9hL2RzLXRvbmctaG9wLWR1LXRydS1tdWEtdmF0LXR1LXRhaS1raG9hL2RzLXRvbmctaG9wLWR1LXRydS1tdWEtdmF0LXR1LXRhaS1raG9hLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/ds-tong-hop-du-tru-mua-vat-tu-tai-khoa/ds-tong-hop-du-tru-mua-vat-tu-tai-khoa.component.ts": 
        /*!******************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/ds-tong-hop-du-tru-mua-vat-tu-tai-khoa/ds-tong-hop-du-tru-mua-vat-tu-tai-khoa.component.ts ***!
          \******************************************************************************************************************************************************************************/
        /*! exports provided: DsTongHopDuTruMuaVatTuTaiKhoaComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsTongHopDuTruMuaVatTuTaiKhoaComponent", function () { return DsTongHopDuTruMuaVatTuTaiKhoaComponent; });
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
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_16__);
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_17__);
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_18__);
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19__);
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_20__);
            /* harmony import */ var _iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @iconify/icons-ic/cancel */ "./node_modules/@iconify/icons-ic/cancel.js");
            /* harmony import */ var _iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_21__);
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_22__);
            /* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
            /* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_23__);
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_24__);
            /* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @iconify/icons-ic/baseline-info */ "./node_modules/@iconify/icons-ic/baseline-info.js");
            /* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_25__);
            /* harmony import */ var _tong_hop_du_tru_mua_vat_tu_tai_khoa_model__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-vat-tu-tai-khoa.model */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa.model.ts");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_vat_tu_tai_khoa_khong_duyet_tong_hop_du_tru_mua_vat_tu_tai_khoa_khong_duyet_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet/tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet.component */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet/tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet.component.ts");
            /* harmony import */ var _duoc_pham_tong_hop_du_tru_mua_thuoc_tai_khoa_tong_hop_du_tru_mua_thuoc_tai_khoa_model__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa.model.ts");
            var DsTongHopDuTruMuaVatTuTaiKhoaComponent = /** @class */ (function () {
                function DsTongHopDuTruMuaVatTuTaiKhoaComponent(dialog, router, apiService, authService, notificationService, route, location) {
                    this.dialog = dialog;
                    this.router = router;
                    this.apiService = apiService;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.route = route;
                    this.location = location;
                    this.lstStatusSelectTabTHDTKhoa = new _duoc_pham_tong_hop_du_tru_mua_thuoc_tai_khoa_tong_hop_du_tru_mua_thuoc_tai_khoa_model__WEBPACK_IMPORTED_MODULE_31__["ListStatusSelectTabTHDTKhoa"]();
                    this.icInfo = _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_25___default.a;
                    this.baseRoute = '/nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa';
                    this.urlGetDataTuChoi = 'YeuCauMuaVatTu/GetDataDuTruMuaVatTuTuChoiTaiKhoaForGridAsync';
                    this.urlGetTotalPageTuChoi = 'YeuCauMuaVatTu/GetTotalDuTruMuaVatTuTuChoiTaiKhoaForGridAsync';
                    this.urlGetDataGridChildAsyncChoXuLy = "YeuCauMuaVatTu/GetDuTruMuaVatTuDangChoXuLyTaiKhoaChiTietForGridAsync";
                    this.urlGetTotalPageGridChildChoXuLy = "YeuCauMuaVatTu/GetTotalDuTruMuaVatTuDangChoXuLyTaiKhoaChiTietForGridAsync";
                    this.urlGetDataGridChildAsyncTuChoi = 'YeuCauMuaVatTu/GetDSTHDTTuChoiChildForGridAsync';
                    this.urlGetTotalPageGridChildTuChoi = 'YeuCauMuaVatTu/GetTotalDSTHDTTuChoiChildForGridAsync';
                    this.urlGetDataDaXuLyChiTietChild = "YeuCauMuaVatTu/GetDuTruMuaVatTuChiTietForGridAsyncChild";
                    this.urlGetTotalDaXuLyChiTietChild = "YeuCauMuaVatTu/GetTotalDuTruMuaVatTuChiTietForGridAsyncChild";
                    this.popupLoadingData = null;
                    this.addtionStringDefault = null;
                    this.addtionStringDefaultDaXuLy = null;
                    this.addtionStringDefaultTuChoi = null;
                    this.gridColumns = [];
                    this.gridDaXuLyColumns = [];
                    this.gridDaXuLyChiTietColumns = [];
                    this.gridDaXuLyChiTietChildColumns = [];
                    this.thongTinLyDoHuyDuyetTaiKhoa = {};
                    this.duyetDuTruMuaVatTuViewModel = {};
                    this.tongHopDuTruMuaVatTuTaiKhoa = [];
                    this.gridChildThuocVacXinColumns = [];
                    this.gridTuChoiXuLyColumns = [];
                    this.gridChildTuChoiChildColumns = [];
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
                    this.groupTuChois = [{ field: 'Nhom' }];
                    this.groupDaXuLyChiTiets = [{ field: 'Nhom' }];
                    this.khos = [];
                    this.hdts = [];
                    this.groupChiTietTabChoGoi = [{ field: 'Nhom' }];
                    this.sort = [
                        {
                            field: 'NgayYeuCau',
                            dir: 'desc',
                        },
                    ];
                    this.sortDuTruChild = [
                        {
                            field: 'Id',
                            dir: 'asc'
                        }
                    ];
                    this.groups = [{
                            field: 'TrangThai', aggregates: [
                                { field: 'Nhom', aggregate: 'count' },
                                { field: 'TrangThai', aggregate: 'count' },
                            ]
                        }];
                    this.sortDuTruChoXuLy = [
                        {
                            field: "SoPhieu",
                            dir: "asc"
                        }
                    ];
                    this.sortDaGoi = [{
                            field: "TinhTrang",
                            dir: "asc"
                        }, {
                            field: "NgayYeuCau",
                            dir: "asc"
                        }];
                }
                DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhSachTongHopDuTruMuaVatTuTaiKhoa;
                    this.danhSachTongHopDuTruMuaVatTuTaiKhoa = new _tong_hop_du_tru_mua_vat_tu_tai_khoa_model__WEBPACK_IMPORTED_MODULE_26__["TongHopDuTruMuaVatTuTaiKhoaSreach"]();
                    this.backWithSearch();
                    this.gridColumns = [
                        { Field: 'TrangThai', Title: 'TrangThai', Width: 100, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: 'SoPhieu', Title: 'Số Phiếu', Width: 120, Sortable: true, Template: this.soPhieuTemplate },
                        { Field: 'TenKho', Title: 'Kho', Width: 150, Sortable: true },
                        { Field: 'KyDuTru', Title: 'Kỳ dự trù', Width: 160, Sortable: true },
                        { Field: 'NgayYeuCauDisplay', Title: 'Ngày yêu cầu', Width: 150, Sortable: true },
                        { Field: 'NguoiYeuCau', Title: 'Người yêu cầu', Width: 150, Sortable: true },
                        { Field: 'NgayTruongKhoaDuyetDisplay', Title: 'Ngày T.Khoa Duyệt', Width: 150, Sortable: true },
                        { Field: 'Action', Title: '', Width: 150, Template: this.actionTemplate },
                    ];
                    // grid đã xữ lý
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
                        { Field: "TenKho", Title: "Kho", Width: 150 },
                        { Field: "KyDuTru", Title: "kỳ dự trù", Width: 160 },
                        { Field: "NgayYeuCau", Title: "Ngày Yêu Cầu", Width: 150, Template: this.ngayYeuCauDetailDaXuLyTemplate },
                        { Field: "NguoiYeuCau", Title: "Người Yêu Cầu", Width: 150 },
                        { Field: "NgayTruongKhoaDuyet", Title: "Ngày T.Khoa Duyệt", Width: 150, Template: this.ngayTruongKhoaDaXuLyTemplate },
                    ];
                    this.gridDaXuLyChiTietChildColumns = [
                        // { Field: 'Nhom', Title: 'Loại', Width: 100, ShowTooltip: true },
                        { Field: "Nhom", Title: "Nhóm", Width: 100, Hidden: true, TemplateGroupHeader: this.nhomGroupDaXuLyChiTietHeaderTemplate },
                        { Field: 'TenVatTu', Title: 'Tên', Width: 100, ShowTooltip: true },
                        { Field: 'DonViTinh', Title: 'ĐVT', Width: 50 },
                        { Field: 'QuyCach', Title: 'Quy cách', Width: 52 },
                        { Field: 'HangSanXuat', Title: 'Hãng SX', Width: 100 },
                        { Field: 'NuocSanXuat', Title: 'Nước SX', Width: 100 },
                        { Field: 'SoLuongDuTru', Title: 'SL Dự Trù', Width: 120 },
                        { Field: 'SoLuongDuKienSuDung', Title: 'SL D.KIẾN S.DỤNG TRONG KỲ', Width: 120 },
                        { Field: 'SoLuongDuTruTruongKhoaDuyet', Title: 'SL Dự Trù T.Khoa Duyệt', Width: 100 },
                    ];
                    // grid từ chối
                    this.gridTuChoiXuLyColumns = [
                        { Field: 'SoPhieu', Title: 'Số Phiếu', Width: 120, Sortable: true, Template: this.soPhieuTuChoiTemplate },
                        { Field: 'TenKho', Title: 'Kho', Width: 150, Sortable: true },
                        { Field: 'KyDuTru', Title: 'kỳ dự trù', Width: 160, Sortable: true },
                        { Field: 'NgayYeuCau', Title: 'Ngày yêu cầu', Width: 150, Sortable: true, Template: this.ngayYeuCauTuChoiTemplate },
                        { Field: 'NguoiYeuCau', Title: 'Người yêu cầu', Width: 150, Sortable: true },
                        { Field: 'NgayTuChoi', Title: 'Ngày Từ Chối', Width: 150, Sortable: true, Template: this.ngayTuChoiTemplate },
                        { Field: 'NguoiTuChoi', Title: 'Người từ chối', Width: 150, Sortable: true },
                        { Field: 'LyDoTuChoi', Title: 'Lý Do', Width: 150, Sortable: true },
                    ];
                    this.gridChildTuChoiChildColumns = [
                        { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupTuChoiHeaderTemplate },
                        { Field: "TenVatTu", Title: "Tên", Width: 100, ShowTooltip: true },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 50 },
                        { Field: "HangSanXuat", Title: "Hãng SX", Width: 100 },
                        { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
                        { Field: "SoLuongDuTru", Title: "SL Dự Trù", Width: 120 },
                        { Field: "SoLuongDuKienSuDung", Title: "SL D.KIẾN S.DỤNG TRONG KỲ", Width: 120 },
                    ];
                    this.gridChildThuocVacXinColumns = [
                        { Field: 'Nhom', Title: 'Loại', Width: 100, ShowTooltip: true, Hidden: true, TemplateGroupHeader: this.nhomChiTietTabChoGoiTemplate },
                        { Field: 'VatTu', Title: 'Tên', Width: 100, ShowTooltip: true },
                        { Field: 'DonViTinh', Title: 'ĐVT', Width: 50 },
                        { Field: 'QuyCach', Title: 'Quy cách', ShowTooltip: true, Width: 52 },
                        { Field: 'HangSanXuat', Title: 'Hãng SX', Width: 100 },
                        { Field: 'NuocSanXuat', Title: 'Nước SX', Width: 100 },
                        // { Field: 'NhomDuPhong', Title: 'Nhóm Đ.Trị/D.Phòng', Width: 80 },
                        { Field: 'SoLuongDuTru', Title: 'SL Dự Trù', Width: 120 },
                        { Field: 'SoLuongDuKienSuDung', Title: 'SL D.KIẾN S.DỤNG TRONG KỲ', Width: 120 },
                        { Field: 'KhoDuTruTon', Title: 'Kho D.Trù Tồn', Width: 80 },
                        { Field: 'KhoTongTon', Title: 'Kho Tổng Tồn', Width: 80, Template: this.khoTongTonTemplate },
                        { Field: 'HDChuaNhap', Title: 'H.Đồng Chưa Nhập', Width: 100, Template: this.hdChuaNhapTemplate },
                    ];
                };
                DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype.backWithSearch = function () {
                    var hasLocalSearchString = false;
                    if (this.route.snapshot.queryParams.holdQuery) {
                        var holdQuery = this.route.snapshot.queryParams.holdQuery;
                        if (holdQuery != null && holdQuery) {
                            var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"]
                                .getItem('additionalSearchStringdanhSachTongHopDuTruMuaVatTuTaiKhoa');
                            if (additionalSearchString != null) {
                                this.danhSachTongHopDuTruMuaVatTuTaiKhoa = JSON.parse(additionalSearchString);
                                //Chờ duyệt
                                if (this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.TuNgay != null
                                    && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.TuNgay != 'null' && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.TuNgay != '') {
                                    this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.startDate = new Date(this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.startDate);
                                }
                                else {
                                    this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.startDate = null;
                                }
                                if (this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.DenNgay != null
                                    && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.DenNgay != 'null' && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.DenNgay != '') {
                                    this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.endDate = new Date(this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.endDate);
                                }
                                else {
                                    this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.endDate = null;
                                }
                                // Đã xử lý
                                if (this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.TuNgay != null
                                    && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.TuNgay != 'null' && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.TuNgay != '') {
                                    this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.startDate = new Date(this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.startDate);
                                }
                                else {
                                    this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.startDate = null;
                                }
                                if (this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.DenNgay != null
                                    && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.DenNgay != 'null' && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.DenNgay != '') {
                                    this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.endDate = new Date(this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.endDate);
                                }
                                else {
                                    this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.endDate = null;
                                }
                                //Từ chối
                                if (this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.TuNgay != null
                                    && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.TuNgay != 'null' && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.TuNgay != '') {
                                    this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.startDate = new Date(this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.startDate);
                                }
                                else {
                                    this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.startDate = null;
                                }
                                if (this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.DenNgay != null
                                    && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.DenNgay != 'null' && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.DenNgay != '') {
                                    this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.endDate = new Date(this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.endDate);
                                }
                                else {
                                    this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.endDate = null;
                                }
                                //this.gridChoDuyet.additionalSearchString = additionalSearchString;
                                hasLocalSearchString = true;
                            }
                            var selectedTab = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].getItem("additionalSearchStringTHDTVatTuTaiKhoaSelectedTab");
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
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].removeItem('additionalSearchStringdanhSachTongHopDuTruMuaVatTuTaiKhoa');
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].removeItem("additionalSearchStringTHDTVatTuTaiKhoaSelectedTab");
                    }
                };
                DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype.onKey = function (event) {
                    if (event.key === 'Enter') {
                        this.timKiem();
                    }
                };
                DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype.TooltipCustom = function (duTruGiamDocDetail) {
                    this.khos = duTruGiamDocDetail.ThongTinChiTietTonKhoTongs.slice();
                    this.hdts = duTruGiamDocDetail.ThongTinChiTietTonHDTs.slice();
                };
                DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype.searchChanges = function (event) {
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
                };
                DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype.theFirstValueFormat = function (str) {
                    var strGroup = str.split('.');
                    if (strGroup.length != 0) {
                        return strGroup[0];
                    }
                };
                DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype.theFirstValueFormatChuKy = function (str) {
                    var strGroup = str.split('.');
                    if (strGroup.length != 0) {
                        if (strGroup[1] !== undefined) {
                            return strGroup[1];
                        }
                    }
                };
                DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype.timKiem = function () {
                    this.location.replaceState(this.baseRoute + '?holdQuery=true');
                    //Chờ duyệt
                    if (this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate != null && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.startDate != null) {
                        this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.startDate, "mm/dd/yyyy");
                    }
                    else {
                        this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.TuNgay = null;
                    }
                    if (this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate != null && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.endDate != null) {
                        this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.endDate, "mm/dd/yyyy");
                    }
                    else {
                        this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.DenNgay = null;
                    }
                    //Đã xử lý
                    if (this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy != null && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.startDate != null) {
                        this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.startDate, "mm/dd/yyyy");
                    }
                    else {
                        this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.TuNgay = null;
                    }
                    if (this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy != null && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.endDate != null) {
                        this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.endDate, "mm/dd/yyyy");
                    }
                    else {
                        this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.DenNgay = null;
                    }
                    //Từ chối
                    if (this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi != null && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.startDate != null) {
                        this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.startDate, "mm/dd/yyyy");
                    }
                    else {
                        this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.TuNgay = null;
                    }
                    if (this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi != null && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.endDate != null) {
                        this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.endDate, "mm/dd/yyyy");
                    }
                    else {
                        this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.DenNgay = null;
                    }
                    var queryString = JSON.stringify(this.danhSachTongHopDuTruMuaVatTuTaiKhoa);
                    if (this.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy == true) {
                        if (this.gridChoDuyet != undefined && this.gridChoDuyet != null) {
                            this.gridChoDuyet._additionalSearchString = queryString;
                            this.gridChoDuyet.search();
                        }
                        this.unSelectedTab();
                        this.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy = true;
                        var queryStringLstselectedTab = JSON.stringify(this.lstStatusSelectTabTHDTKhoa);
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].setItem("additionalSearchStringTHDTVatTuTaiKhoaSelectedTab", queryStringLstselectedTab);
                    }
                    else if (this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy == true) {
                        if (this.gridChildDaXuLy != undefined && this.gridChildDaXuLy != null) {
                            this.gridChildDaXuLy._additionalSearchString = queryString;
                            this.gridChildDaXuLy.search();
                        }
                        this.unSelectedTab();
                        this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy = true;
                        var queryStringLstselectedTab = JSON.stringify(this.lstStatusSelectTabTHDTKhoa);
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].setItem("additionalSearchStringTHDTVatTuTaiKhoaSelectedTab", queryStringLstselectedTab);
                    }
                    else {
                        if (this.gridChildTuChoi != undefined && this.gridChildTuChoi != null) {
                            this.gridChildTuChoi._additionalSearchString = queryString;
                            this.gridChildTuChoi.search();
                        }
                        this.unSelectedTab();
                        this.lstStatusSelectTabTHDTKhoa.selectedTabTuChoi = true;
                        var queryStringLstselectedTab = JSON.stringify(this.lstStatusSelectTabTHDTKhoa);
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].setItem("additionalSearchStringTHDTVatTuTaiKhoaSelectedTab", queryStringLstselectedTab);
                    }
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].setItem('additionalSearchStringdanhSachTongHopDuTruMuaVatTuTaiKhoa', queryString);
                };
                DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype.guiKhoaDuyetTatCa = function (val) {
                    var kyDuTruMuaDuocPhamVatTuId = this.tongHopDuTruMuaVatTuTaiKhoa.
                        filter(function (cc) { return cc.TrangThai === val; }).map(function (cc) { return cc.KyDuTruMuaDuocPhamVatTuId; })[0];
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
                        this.router.navigate(['/nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa/gui/' + kyDuTruMuaDuocPhamVatTuId]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype.tuChoiDuyet = function (id) { };
                DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype.huyDuyet = function (id) { };
                DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype.chiTiet = function (id, trangThai) {
                    if (trangThai === 1 || trangThai === 0) { // Đã duyệt hoặc từ chối
                        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
                            this.router.navigate(['/nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa/chi-tiet/' + id]);
                        }
                        else {
                            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                        }
                    }
                    else { // Chưa duyệt
                        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
                            this.router.navigate(['/nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa/duyet/' + id + "/" + false]);
                        }
                        else {
                            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                        }
                    }
                };
                DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype.chiTietTuChoi = function (id) {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
                        this.router.navigate(['/nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa/chi-tiet/' + id]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype.inPhieuLinh = function (id) {
                };
                DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang tải dữ liệu...' },
                    });
                };
                DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype.TuChoi = function (id) {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
                        if (this.confrim != null) {
                            this.dialog.closeAll();
                            this.confrim = null;
                        }
                        this.confrim = this.dialog.open(_tong_hop_du_tru_mua_vat_tu_tai_khoa_khong_duyet_tong_hop_du_tru_mua_vat_tu_tai_khoa_khong_duyet_component__WEBPACK_IMPORTED_MODULE_30__["TongHopDuTruMuaVatTuTaiKhoaKhongDuyetComponent"], {
                            disableClose: true,
                            width: '400px',
                            height: '300px',
                        }).afterClosed().subscribe(function (result) {
                            if (result !== '' && result) {
                                _this.thongTinLyDoHuyDuyetTaiKhoa.LyDoHuy = result;
                                _this.thongTinLyDoHuyDuyetTaiKhoa.Id = id;
                                _this.apiService.post('YeuCauMuaVatTu/TuChoiDuyetTaiKhoa', _this.thongTinLyDoHuyDuyetTaiKhoa)
                                    .subscribe(function (resultData) {
                                    if (resultData !== null && resultData !== undefined) {
                                        if (resultData) {
                                            _this.gridChoDuyet.search();
                                            _this.notificationService.showSuccess('Từ chối duyệt thành công.');
                                        }
                                    }
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype.PheDuyet = function (id) {
                    var _this = this;
                    this.duyetDuTruMuaVatTuViewModel.DuTruMuaVatTuId = id;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
                        if (this.confrim != null) {
                            this.dialog.closeAll();
                            this.confrim = null;
                        }
                        this.confrim = this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_29__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: {
                                Title: 'Xác nhận',
                                Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].MessConfirm, [
                                    'Duyệt',
                                ]),
                            },
                        }).afterClosed()
                            .subscribe(function (result) {
                            if (result === 'Yes') {
                                _this.apiService.post('YeuCauMuaVatTu/DuyetTaiKhoa/', _this.duyetDuTruMuaVatTuViewModel)
                                    .subscribe(function (resultData) {
                                    if (resultData !== null && resultData !== undefined) {
                                        if (resultData) {
                                            _this.gridChoDuyet.search();
                                            _this.notificationService.showSuccess('Duyệt thành công.');
                                        }
                                        else {
                                            _this.notificationService.showError('Duyệt không thành công.');
                                        }
                                    }
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype.HuyDuyet = function (id) {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
                        if (this.confrim != null) {
                            this.dialog.closeAll();
                            this.confrim = null;
                        }
                        this.confrim = this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_29__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: {
                                Title: 'Xác nhận',
                                Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].MessConfirm, [
                                    'Hủy Duyệt',
                                ]),
                            },
                        })
                            .afterClosed()
                            .subscribe(function (result) {
                            /* result is a string:Yes,No,No answer*/
                            if (result === 'Yes') {
                                _this.apiService.post('YeuCauMuaVatTu/HuyDuyetTaiKhoa/' + id)
                                    .subscribe(function (resultData) {
                                    if (resultData !== null && resultData !== undefined) {
                                        if (resultData) {
                                            _this.gridChoDuyet.search();
                                            _this.notificationService.showSuccess('Hủy duyệt thành công.');
                                        }
                                        else {
                                            _this.notificationService.showError('Hủy không thành công.');
                                        }
                                    }
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData) {
                        this.popupLoadingData.close();
                    }
                };
                DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype.changeTabParent = function () {
                };
                DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype.CheckboxChange = function ($event, choDuyet, daDuyet) {
                    if (choDuyet === void 0) { choDuyet = false; }
                    if (daDuyet === void 0) { daDuyet = false; }
                    this.router.navigateByUrl('/nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa?holdQuery=true');
                    if (choDuyet) {
                        this.danhSachTongHopDuTruMuaVatTuTaiKhoa.ChoDuyet = $event;
                    }
                    else if (daDuyet) {
                        this.danhSachTongHopDuTruMuaVatTuTaiKhoa.DaDuyet = $event;
                    }
                    this.timKiem();
                };
                DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype.onDataBound = function (event) {
                    if (event && event.Data.length > 0) {
                        this.tongHopDuTruMuaVatTuTaiKhoa = event.Data;
                    }
                };
                DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype.chiTietDaXuLyParent = function (id) {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
                        this.router.navigate(["/nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa/duyet/" + id + "/" + true]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype.chiTietDaXuLy = function (id, tinhTrang, isParent) {
                    // tinh trang => 1 : đã duyệt, 2: từ chối, isParent => 0: Cha, 1: Con
                    if ((tinhTrang == 1 || tinhTrang == 2) && isParent == 0) {
                        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].View)) {
                            this.router.navigate(["/nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa/chi-tiet/" + id]);
                        }
                        else {
                            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                        }
                    }
                    else if ((tinhTrang == 1 || tinhTrang == 2) && isParent == 1) {
                        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].View)) {
                            this.router.navigate(["/nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa/chi-tiet/" + id]);
                        }
                        else {
                            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                        }
                    }
                    else if (tinhTrang == 0 && isParent == 0) {
                        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
                            this.router.navigate(["/nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa/duyet/" + id + "/" + true]);
                        }
                        else {
                            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                        }
                    }
                    else if (tinhTrang == 0 && isParent == 1) {
                        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].View)) {
                            this.router.navigate(["/nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa/chi-tiet/" + id]);
                        }
                        else {
                            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                        }
                    }
                };
                DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype.unSelectedTab = function () {
                    this.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy = false;
                    this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy = false;
                    this.lstStatusSelectTabTHDTKhoa.selectedTabTuChoi = false;
                };
                DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype.chuyenDen = function (element, event) {
                    console.log("lstStatusSelectTabTHDTKhoa: ", this.lstStatusSelectTabTHDTKhoa);
                    var self = this;
                    self.location.replaceState(self.baseRoute + '?holdQuery=true');
                    var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].getItem("additionalSearchStringdanhSachTongHopDuTruMuaVatTuTaiKhoa");
                    if (event.index == 0 || event.title == "CHỜ XỬ LÝ") {
                        self.unSelectedTab();
                        self.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy = true;
                        var queryString = JSON.stringify(self.lstStatusSelectTabTHDTKhoa);
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].setItem("additionalSearchStringTHDTVatTuTaiKhoaSelectedTab", queryString);
                        this.addtionStringDefault = additionalSearchString;
                        var addtionTemp = JSON.parse(additionalSearchString);
                        if (addtionTemp != null && addtionTemp.SearchString !== undefined && addtionTemp.SearchString !== null && addtionTemp.SearchString !== "") {
                            this.danhSachTongHopDuTruMuaVatTuTaiKhoa.SearchString = addtionTemp.SearchString;
                        }
                    }
                    else if (event.index == 1 || event.title == "ĐÃ GỬI") {
                        self.unSelectedTab();
                        self.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy = true;
                        var queryString = JSON.stringify(self.lstStatusSelectTabTHDTKhoa);
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].setItem("additionalSearchStringTHDTVatTuTaiKhoaSelectedTab", queryString);
                        this.addtionStringDefaultDaXuLy = additionalSearchString;
                        var addtionTemp = JSON.parse(additionalSearchString);
                        if (addtionTemp != null && addtionTemp.SearchStringDaXuLy !== undefined && addtionTemp.SearchStringDaXuLy !== null && addtionTemp.SearchStringDaXuLy !== "") {
                            this.danhSachTongHopDuTruMuaVatTuTaiKhoa.SearchStringDaXuLy = addtionTemp.SearchStringDaXuLy;
                        }
                    }
                    else if (event.index == 2 || event.title == "TỪ CHỐI") {
                        self.unSelectedTab();
                        self.lstStatusSelectTabTHDTKhoa.selectedTabTuChoi = true;
                        var queryString = JSON.stringify(self.lstStatusSelectTabTHDTKhoa);
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].setItem("additionalSearchStringTHDTVatTuTaiKhoaSelectedTab", queryString);
                        this.addtionStringDefaultTuChoi = additionalSearchString;
                        var addtionTemp = JSON.parse(additionalSearchString);
                        if (addtionTemp != null && addtionTemp.SearchStringTuChoi !== undefined && addtionTemp.SearchStringTuChoi !== null && addtionTemp.SearchStringTuChoi !== "") {
                            this.danhSachTongHopDuTruMuaVatTuTaiKhoa.SearchStringTuChoi = addtionTemp.SearchStringTuChoi;
                        }
                    }
                };
                DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype.trangThaiCheckBox = function (event, tinhTrang, tabSelected) {
                    if (tabSelected == 1) {
                        if (tinhTrang == "choduyet") {
                            this.danhSachTongHopDuTruMuaVatTuTaiKhoa.DaGuiChoDuyet = event;
                        }
                        if (tinhTrang == "daduyet") {
                            this.danhSachTongHopDuTruMuaVatTuTaiKhoa.DaDuyetDaXuLy = event;
                        }
                        if (tinhTrang == "tuchoi") {
                            this.danhSachTongHopDuTruMuaVatTuTaiKhoa.TuChoiDuyet = event;
                        }
                        this.timKiem();
                    }
                    else {
                        if (tinhTrang == "choduyet") {
                            this.danhSachTongHopDuTruMuaVatTuTaiKhoa.ChoDuyet = event;
                        }
                        if (tinhTrang == "chogoi") {
                            this.danhSachTongHopDuTruMuaVatTuTaiKhoa.DaDuyet = event;
                        }
                        this.timKiem();
                    }
                };
                DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype.blur = function () {
                    this.timKiem();
                };
                return DsTongHopDuTruMuaVatTuTaiKhoaComponent;
            }());
            DsTongHopDuTruMuaVatTuTaiKhoaComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_14__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], { static: true })
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tuNgayTemplate', { static: true })
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype, "tuNgayTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('denNgayTemplate', { static: true })
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype, "denNgayTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayTaiKhoaTemplate', { static: true })
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype, "ngayTaiKhoaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayTaiKhoaDuocTemplate', { static: true })
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype, "ngayTaiKhoaDuocTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayTaiGiamDocTemplate', { static: true })
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype, "ngayTaiGiamDocTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soPhieuTemplate', { static: true })
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype, "soPhieuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('STTTemplate', { static: true })
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype, "STTTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupDaXuLyChiTietHeaderTemplate', { static: true })
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype, "nhomGroupDaXuLyChiTietHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hdChuaNhapTemplate', { static: true })
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype, "hdChuaNhapTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('khoTongTonTemplate', { static: true })
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype, "khoTongTonTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupTuChoiHeaderTemplate', { static: true })
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype, "nhomGroupTuChoiHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soPhieuTuChoiTemplate', { static: true })
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype, "soPhieuTuChoiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soPhieuDaXuLyChiTietTemplate', { static: true })
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype, "soPhieuDaXuLyChiTietTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soPhieuDaXuLyTemplate', { static: true })
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype, "soPhieuDaXuLyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tinhTrangTemplate', { static: true })
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype, "tinhTrangTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayYeuCauDaXuLyTemplate', { static: true })
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype, "ngayYeuCauDaXuLyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayYeuCauDetailDaXuLyTemplate', { static: true })
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype, "ngayYeuCauDetailDaXuLyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayGiamDocDaXuLyTemplate', { static: true })
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype, "ngayGiamDocDaXuLyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayKhoDuocDaXuLyTemplate', { static: true })
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype, "ngayKhoDuocDaXuLyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayYeuCauTuChoiTemplate', { static: true })
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype, "ngayYeuCauTuChoiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayTuChoiTemplate', { static: true })
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype, "ngayTuChoiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayTruongKhoaDaXuLyTemplate', { static: true })
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype, "ngayTruongKhoaDaXuLyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridChoDuyet', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], static: false })
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype, "gridChoDuyet", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridChildDaXuLy', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], static: false })
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype, "gridChildDaXuLy", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridChildTuChoi', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], static: false })
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype, "gridChildTuChoi", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomChiTietTabChoGoiTemplate', { static: true })
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype, "nhomChiTietTabChoGoiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent.prototype, "sort", void 0);
            DsTongHopDuTruMuaVatTuTaiKhoaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-ds-tong-hop-du-tru-mua-vat-tu-tai-khoa',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ds-tong-hop-du-tru-mua-vat-tu-tai-khoa.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/ds-tong-hop-du-tru-mua-vat-tu-tai-khoa/ds-tong-hop-du-tru-mua-vat-tu-tai-khoa.component.html")).default,
                    animations: [src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_27__["stagger60ms"], src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_28__["fadeInUp400ms"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ds-tong-hop-du-tru-mua-vat-tu-tai-khoa.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/ds-tong-hop-du-tru-mua-vat-tu-tai-khoa/ds-tong-hop-du-tru-mua-vat-tu-tai-khoa.component.scss")).default]
                })
            ], DsTongHopDuTruMuaVatTuTaiKhoaComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm.component.scss": 
        /*!**************************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm.component.scss ***!
          \**************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".info {\n  margin-bottom: -8px;\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2EvZ3VpLXRvbmctaG9wLWR1LXRydS1tdWEtdmF0LXR1LXRhaS1raG9hLWNvbmZpcm0vQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXHZhdC10dVxcdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2FcXGd1aS10b25nLWhvcC1kdS10cnUtbXVhLXZhdC10dS10YWkta2hvYS1jb25maXJtXFxndWktdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2EtY29uZmlybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2EvZ3VpLXRvbmctaG9wLWR1LXRydS1tdWEtdmF0LXR1LXRhaS1raG9hLWNvbmZpcm0vZ3VpLXRvbmctaG9wLWR1LXRydS1tdWEtdmF0LXR1LXRhaS1raG9hLWNvbmZpcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3RvbmctaG9wLWR1LXRydS1tdWEtdmF0LXR1LXRhaS1raG9hL2d1aS10b25nLWhvcC1kdS10cnUtbXVhLXZhdC10dS10YWkta2hvYS1jb25maXJtL2d1aS10b25nLWhvcC1kdS10cnUtbXVhLXZhdC10dS10YWkta2hvYS1jb25maXJtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm8ge1xuICBtYXJnaW4tYm90dG9tOiAtOHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59IiwiLmluZm8ge1xuICBtYXJnaW4tYm90dG9tOiAtOHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm.component.ts": 
        /*!************************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm.component.ts ***!
          \************************************************************************************************************************************************************************************************/
        /*! exports provided: GuiTongHopDuTruMuaVatTuTaiKhoaConfirmComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuiTongHopDuTruMuaVatTuTaiKhoaConfirmComponent", function () { return GuiTongHopDuTruMuaVatTuTaiKhoaConfirmComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            var GuiTongHopDuTruMuaVatTuTaiKhoaConfirmComponent = /** @class */ (function () {
                function GuiTongHopDuTruMuaVatTuTaiKhoaConfirmComponent(dialogRef, data) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.Title = null;
                    this.Message = null;
                    this.ButtonYes = 'Có';
                    this.ButtonYesAndPrint = 'Có & In Phiếu';
                    this.ButtonNo = 'Không';
                }
                GuiTongHopDuTruMuaVatTuTaiKhoaConfirmComponent.prototype.ngOnInit = function () {
                    this.Title = this.data.Title;
                    this.Message = this.data.Message;
                };
                GuiTongHopDuTruMuaVatTuTaiKhoaConfirmComponent.prototype.close = function (result) {
                    this.dialogRef.close(result);
                };
                return GuiTongHopDuTruMuaVatTuTaiKhoaConfirmComponent;
            }());
            GuiTongHopDuTruMuaVatTuTaiKhoaConfirmComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            GuiTongHopDuTruMuaVatTuTaiKhoaConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], GuiTongHopDuTruMuaVatTuTaiKhoaConfirmComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.scss": 
        /*!**********************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.scss ***!
          \**********************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2EvZ3VpLXRvbmctaG9wLWR1LXRydS1tdWEtdmF0LXR1LXRhaS1raG9hLWR1eWV0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFx2YXQtdHVcXHRvbmctaG9wLWR1LXRydS1tdWEtdmF0LXR1LXRhaS1raG9hXFxndWktdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2EtZHV5ZXRcXGd1aS10b25nLWhvcC1kdS10cnUtbXVhLXZhdC10dS10YWkta2hvYS1kdXlldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2EvZ3VpLXRvbmctaG9wLWR1LXRydS1tdWEtdmF0LXR1LXRhaS1raG9hLWR1eWV0L2d1aS10b25nLWhvcC1kdS10cnUtbXVhLXZhdC10dS10YWkta2hvYS1kdXlldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2EvZ3VpLXRvbmctaG9wLWR1LXRydS1tdWEtdmF0LXR1LXRhaS1raG9hLWR1eWV0L2d1aS10b25nLWhvcC1kdS10cnUtbXVhLXZhdC10dS10YWkta2hvYS1kdXlldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59IiwiLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.ts": 
        /*!********************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.ts ***!
          \********************************************************************************************************************************************************************************************/
        /*! exports provided: GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent", function () { return GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _tong_hop_du_tru_mua_vat_tu_tai_khoa_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-vat-tu-tai-khoa.model */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa.model.ts");
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
            /* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_15__);
            /* harmony import */ var _gui_tong_hop_du_tru_mua_vat_tu_tai_khoa_confirm_gui_tong_hop_du_tru_mua_vat_tu_tai_khoa_confirm_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm.component */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var _phieu_mua_du_tru_tai_khoa_phieu_mua_du_tru_tai_khoa_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.ts");
            var GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent = /** @class */ (function () {
                function GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent(dialog, router, apiService, authService, notificationService, route, location, ref) {
                    this.dialog = dialog;
                    this.router = router;
                    this.apiService = apiService;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.route = route;
                    this.location = location;
                    this.ref = ref;
                    this.duTruMuaVatTuTaiKhoaChiTietVo = [];
                    this.popupLoadingData = null;
                    this.popupSavingData = null;
                    this.icInfo = _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_15___default.a;
                    this.validationErrors = null;
                    this.kyDuTruMuaDuocPhamVatTuId = 0;
                    this.sortDuTruTaiKhoa = [{ field: 'Id', dir: 'asc' }];
                    this.gridColumns = [];
                    this.gridChildColumns = [];
                    this.groups = [{ field: 'Nhom', dir: 'asc', aggregates: [] }];
                    this.groupChiTiet = [{ field: 'Nhom' }];
                    this.urlGetDataGridChildAsync = 'YeuCauMuaVatTu/GetDuTruMuaVTTaiKhoaChiTietForGridAsync';
                    this.urlGetTotalPageGridChild = 'YeuCauMuaVatTu/GetTotalDuTruMuaVTTaiKhoaChiTietForGridAsync';
                    this.sortDuTruChild = [{ field: 'Id', dir: 'asc' }];
                }
                GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].DanhSachTongHopDuTruMuaVatTuTaiKhoa;
                    this.thongTinGoiTaiKhoa = new _tong_hop_du_tru_mua_vat_tu_tai_khoa_model__WEBPACK_IMPORTED_MODULE_1__["TongHopDuTruMuaVatTuTaiKhoa"]();
                    this.duyetDuTruMuaVatTuViewModel = new _tong_hop_du_tru_mua_vat_tu_tai_khoa_model__WEBPACK_IMPORTED_MODULE_1__["DuyetDuTruMuaVatTuViewModel"]();
                    this.kyDuTruMuaDuocPhamVatTuId = this.route.snapshot.params.id;
                    this.gridColumns = [
                        { Field: "Nhom", Title: "Loại", Width: 100, ShowTooltip: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: 'VatTu', Title: 'Tên', Width: 100, ShowTooltip: true },
                        { Field: 'DonViTinh', Title: 'ĐVT', Width: 50 },
                        { Field: 'QuyCach', Title: 'Quy cách', ShowTooltip: true, Width: 50 },
                        { Field: 'HangSanXuat', Title: 'Hãng SX', Width: 100 },
                        { Field: 'NuocSanXuat', Title: 'Nước SX', Width: 50 },
                        // { Field: 'NhomDuPhong', Title: 'Nhóm Đ.Trị/D.Phòng', Width: 80 },
                        { Field: 'SoLuongDuTru', Title: 'SL Dự Trù', Width: 80 },
                        { Field: 'SoLuongDuKienSuDung', Title: 'SL DKiến S.Dung Trong Kỳ', Width: 100 },
                        { Field: 'SoLuongDuTruTruongKhoaDuyet', Title: 'T.Khoa Duyệt', Width: 100 }
                    ];
                    this.gridChildColumns = [
                        // { Field: 'STT', Title: '#', Width: 25, Template: this.STTChildTemplate , TemplateGroupHeader: this.nhomChiTietTemplate },
                        //{ Field: 'LoaiNhom', Title: 'Nhóm', Width: 100, Sortable: true },
                        { Field: 'TenKho', Title: 'Kho', Width: 100, Sortable: true },
                        { Field: 'KyDuTru', Title: 'Kỳ dự trù', Width: 150, Sortable: true },
                        { Field: 'SoLuongDuTru', Title: 'SL Dự Trù', Width: 100, Sortable: true },
                        { Field: 'SoLuongDuKienSuDung', Title: 'SL D.kiến trong kỳ', Width: 100, Sortable: true },
                        { Field: 'SoLuongDuTruTruongKhoaDuyet', Title: 'T.Khoa Duyệt', Width: 100, Sortable: true },
                    ];
                    this.getThongTinTongHopDuTruMuaTaiKhoa();
                };
                GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent.prototype.getThongTinTongHopDuTruMuaTaiKhoa = function () {
                    var _this = this;
                    var phongBenhVienId = this.authService.getPhongLamViecId();
                    this.apiService.get('YeuCauMuaVatTu/GetThongTinGoiTaiKhoa/' + phongBenhVienId)
                        .subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.thongTinGoiTaiKhoa = resultData;
                        }
                    });
                };
                GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang tải dữ liệu...' },
                    });
                };
                GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent.prototype.closepopupLoadingData = function () {
                    if (this.popupLoadingData && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent.prototype.savingPage = function () {
                    this.popupSavingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang lưu dữ liệu...' },
                    });
                };
                GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent.prototype.closePopupSavingData = function () {
                    if (this.popupSavingData && this.popupSavingData != null) {
                        this.popupSavingData.close();
                    }
                };
                GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent.prototype.onDataBound = function (event) {
                    if (event && event.Data.length > 0) {
                        this.duTruMuaVatTuTaiKhoaChiTietVo = event.Data;
                    }
                };
                GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent.prototype.guiTatCa = function () {
                    var self = this;
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    // thông tin mua dư trù
                    self.duyetDuTruMuaVatTuViewModel.DuTruMuaVatTuId = self.kyDuTruMuaDuocPhamVatTuId;
                    self.duyetDuTruMuaVatTuViewModel.NhanVienYeuCauId = self.thongTinGoiTaiKhoa.NhanVienYeuCauId;
                    self.duyetDuTruMuaVatTuViewModel.KhoaPhongId = self.thongTinGoiTaiKhoa.KhoaPhongId;
                    self.duyetDuTruMuaVatTuViewModel.GhiChu = self.thongTinGoiTaiKhoa.GhiChu;
                    self.duyetDuTruMuaVatTuViewModel.NgayYeuCau = self.thongTinGoiTaiKhoa.NgayYeuCau;
                    self.duyetDuTruMuaVatTuViewModel.DuTruMuaVatTuTaiKhoaChiTietVos = self.duTruMuaVatTuTaiKhoaChiTietVo;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Update)) {
                        self.dialog.open(_gui_tong_hop_du_tru_mua_vat_tu_tai_khoa_confirm_gui_tong_hop_du_tru_mua_vat_tu_tai_khoa_confirm_component__WEBPACK_IMPORTED_MODULE_16__["GuiTongHopDuTruMuaVatTuTaiKhoaConfirmComponent"], {
                            disableClose: false,
                            width: '500px',
                            data: {
                                Title: 'Xác nhận',
                                Message: 'Bạn có chắc chắn muốn gửi duyệt phiếu dự trù này không ?',
                            },
                        }).afterClosed().subscribe(function (res) {
                            if (res === 'Yes') {
                                self.apiService.post('YeuCauMuaVatTu/GoiThongTinTaiKhoa', self.duyetDuTruMuaVatTuViewModel)
                                    .subscribe(function (resultData) {
                                    if (resultData) {
                                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].ActionSuccessfully, ['Lưu']));
                                        self.router.navigate(['/nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa']);
                                        self.closePopupSavingData();
                                    }
                                }, function (err) {
                                    self.validationErrors = err.ValidationErrors;
                                    if (err.Message !== 'Validation Failed') {
                                        self.notificationService.showError(err.Message);
                                    }
                                    self.closePopupSavingData();
                                });
                            }
                            else if (res === 'YesAndPrint') {
                                self.validationErrors = [];
                                self.ref.detectChanges();
                                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Update)) {
                                    self.savingPage();
                                    self.apiService.post('YeuCauMuaVatTu/GoiThongTinTaiKhoa', self.duyetDuTruMuaVatTuViewModel).subscribe(function (resultData) {
                                        if (resultData) {
                                            self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].ActionSuccessfully, ['Lưu']));
                                            self.closePopupSavingData();
                                            self.dialog.open(_phieu_mua_du_tru_tai_khoa_phieu_mua_du_tru_tai_khoa_component__WEBPACK_IMPORTED_MODULE_18__["PhieuMuaTruTaiKhoaComponent"], {
                                                disableClose: false,
                                                width: '1200px',
                                                data: { Id: resultData },
                                            }).afterClosed().subscribe(function () {
                                                self.router.navigate(['/nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa']);
                                            });
                                        }
                                    }, function (err) {
                                        self.validationErrors = err.ValidationErrors;
                                        if (err.Message !== 'Validation Failed') {
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
                };
                GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent.prototype.cancel = function () {
                    this.location.back();
                };
                GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent.prototype.keyEvent = function (event) {
                    // tslint:disable-next-line: deprecation
                    if (event.keyCode === 27 && !event.ctrlKey) {
                        // esc
                        this.cancel();
                        event.preventDefault();
                    }
                };
                return GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent;
            }());
            GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('STTTemplate', { static: true })
            ], GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent.prototype, "STTTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('STTChildTemplate', { static: true })
            ], GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent.prototype, "STTChildTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('khoTongTonTemplate', { static: true })
            ], GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent.prototype, "khoTongTonTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('nhomChiTietTemplate', { static: true })
            ], GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent.prototype, "nhomChiTietTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('document:keydown', ['$event'])
            ], GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent.prototype, "keyEvent", null);
            GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_14__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_13__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.scss")).default]
                })
            ], GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.scss": 
        /*!******************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.scss ***!
          \******************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2EvcGhpZXUtbXVhLWR1LXRydS10YWkta2hvYS9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcdmF0LXR1XFx0b25nLWhvcC1kdS10cnUtbXVhLXZhdC10dS10YWkta2hvYVxccGhpZXUtbXVhLWR1LXRydS10YWkta2hvYVxccGhpZXUtbXVhLWR1LXRydS10YWkta2hvYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2EvcGhpZXUtbXVhLWR1LXRydS10YWkta2hvYS9waGlldS1tdWEtZHUtdHJ1LXRhaS1raG9hLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3RvbmctaG9wLWR1LXRydS1tdWEtdmF0LXR1LXRhaS1raG9hL3BoaWV1LW11YS1kdS10cnUtdGFpLWtob2EvcGhpZXUtbXVhLWR1LXRydS10YWkta2hvYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSAucGFnZWJyZWFrIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSIsIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSAucGFnZWJyZWFrIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.ts": 
        /*!****************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.ts ***!
          \****************************************************************************************************************************************************/
        /*! exports provided: PhieuMuaTruTaiKhoaComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuMuaTruTaiKhoaComponent", function () { return PhieuMuaTruTaiKhoaComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_vat_tu_tai_khoa_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-vat-tu-tai-khoa.model */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa.model.ts");
            var PhieuMuaTruTaiKhoaComponent = /** @class */ (function () {
                function PhieuMuaTruTaiKhoaComponent(dialogRef, apiService, notificationService, data, ref) {
                    this.dialogRef = dialogRef;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.data = data;
                    this.ref = ref;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.inPhieuVatTu = new _tong_hop_du_tru_mua_vat_tu_tai_khoa_model__WEBPACK_IMPORTED_MODULE_6__["PhieuInDuTruMuaTaiKhoa"]();
                    this.src = '';
                    this.dataHTML = '';
                }
                PhieuMuaTruTaiKhoaComponent.prototype.ngOnInit = function () {
                    console.log(this.data);
                    this.xem();
                };
                PhieuMuaTruTaiKhoaComponent.prototype.xem = function () {
                    var self = this;
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    self.inPhieuVatTu.DuTruMuaVatTuTheoKhoaId = self.data.Id;
                    self.inPhieuVatTu.Header = true;
                    self.apiService.post('YeuCauMuaVatTu/InPhieuDuTruMuaTaiKhoa', self.inPhieuVatTu).subscribe(function (resData) {
                        if (resData) {
                            self.inPhieuVatTu.Header = false;
                            self.dataHTML = resData;
                            self.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(resData);
                        }
                    }, function (err) {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message !== 'Validation Failed') {
                            self.notificationService.showError(err.Message);
                        }
                    });
                };
                PhieuMuaTruTaiKhoaComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    var template = this.dataHTML
                        .replace('<p style=\'background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center\'>' +
                        '<th>PHIẾU TỔNG HỢP DỰ TRÙ VẬT TƯ</th>' +
                        '</p>', '');
                    return new Promise(function (resolve) {
                        resolve(template);
                        _this.close();
                    });
                };
                PhieuMuaTruTaiKhoaComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                return PhieuMuaTruTaiKhoaComponent;
            }());
            PhieuMuaTruTaiKhoaComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            PhieuMuaTruTaiKhoaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-phieu-mua-du-tru-tai-khoa',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-mua-du-tru-tai-khoa.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-mua-du-tru-tai-khoa.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
            ], PhieuMuaTruTaiKhoaComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/phieu-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/phieu-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.scss": 
        /*!**************************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/phieu-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/phieu-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.scss ***!
          \**************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3RvbmctaG9wLWR1LXRydS1tdWEtdmF0LXR1LXRhaS1raG9hL3BoaWV1LXRvbmctaG9wLWR1LXRydS1tdWEtdmF0LXR1LXRhaS1raG9hLWR1eWV0L3BoaWV1LXRvbmctaG9wLWR1LXRydS1tdWEtdmF0LXR1LXRhaS1raG9hLWR1eWV0LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/phieu-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/phieu-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.ts": 
        /*!************************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/phieu-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/phieu-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.ts ***!
          \************************************************************************************************************************************************************************************************/
        /*! exports provided: PhieuTongHopDuTruMuaVatTuTaiKhoaDuyetComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuTongHopDuTruMuaVatTuTaiKhoaDuyetComponent", function () { return PhieuTongHopDuTruMuaVatTuTaiKhoaDuyetComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PhieuTongHopDuTruMuaVatTuTaiKhoaDuyetComponent = /** @class */ (function () {
                function PhieuTongHopDuTruMuaVatTuTaiKhoaDuyetComponent() {
                }
                PhieuTongHopDuTruMuaVatTuTaiKhoaDuyetComponent.prototype.ngOnInit = function () { };
                return PhieuTongHopDuTruMuaVatTuTaiKhoaDuyetComponent;
            }());
            PhieuTongHopDuTruMuaVatTuTaiKhoaDuyetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-phieu-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/phieu-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/phieu-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/phieu-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/phieu-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.scss")).default]
                })
            ], PhieuTongHopDuTruMuaVatTuTaiKhoaDuyetComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-detail/tong-hop-du-tru-mua-vat-tu-tai-khoa-detail.component.scss": 
        /*!****************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-detail/tong-hop-du-tru-mua-vat-tu-tai-khoa-detail.component.scss ***!
          \****************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2EvdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2EtZGV0YWlsL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFx2YXQtdHVcXHRvbmctaG9wLWR1LXRydS1tdWEtdmF0LXR1LXRhaS1raG9hXFx0b25nLWhvcC1kdS10cnUtbXVhLXZhdC10dS10YWkta2hvYS1kZXRhaWxcXHRvbmctaG9wLWR1LXRydS1tdWEtdmF0LXR1LXRhaS1raG9hLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2EvdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2EtZGV0YWlsL3RvbmctaG9wLWR1LXRydS1tdWEtdmF0LXR1LXRhaS1raG9hLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2EvdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2EtZGV0YWlsL3RvbmctaG9wLWR1LXRydS1tdWEtdmF0LXR1LXRhaS1raG9hLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59IiwiLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-detail/tong-hop-du-tru-mua-vat-tu-tai-khoa-detail.component.ts": 
        /*!**************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-detail/tong-hop-du-tru-mua-vat-tu-tai-khoa-detail.component.ts ***!
          \**************************************************************************************************************************************************************************************/
        /*! exports provided: TongHopDuTruMuaVatTuTaiKhoaDetailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaVatTuTaiKhoaDetailComponent", function () { return TongHopDuTruMuaVatTuTaiKhoaDetailComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_vat_tu_tai_khoa_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-vat-tu-tai-khoa.model */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa.model.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_vat_tu_tai_khoa_xem_chi_tiet_shared_du_tru_mua_vat_tu_tai_khoa_xem_chi_tiet_shared_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared/du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared.component */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared/du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared.component.ts");
            /* harmony import */ var _yeu_cau_mua_vat_tu_phieu_mua_vat_tu_phieu_mua_vat_tu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../yeu-cau-mua-vat-tu/phieu-mua-vat-tu/phieu-mua-vat-tu.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/phieu-mua-vat-tu/phieu-mua-vat-tu.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var TongHopDuTruMuaVatTuTaiKhoaDetailComponent = /** @class */ (function () {
                function TongHopDuTruMuaVatTuTaiKhoaDetailComponent(dialog, authService, notificationService, location, ref, route, apiService) {
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
                    this.phieuMuaVatTuTaiKhoaId = null;
                    this.phieuMuaVatTuId = null;
                }
                TongHopDuTruMuaVatTuTaiKhoaDetailComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhSachTongHopDuTruMuaVatTuTaiKhoa;
                    this.danhSachTongHopDuTruMuaVatTuTaiKhoa = new _tong_hop_du_tru_mua_vat_tu_tai_khoa_model__WEBPACK_IMPORTED_MODULE_13__["TongHopDuTruMuaVatTuTaiKhoa"]();
                    var id = this.route.snapshot.params.id;
                    if (id !== undefined && id !== null) {
                        this.GetTrangThaiPhieuMuaDuTru(id);
                        this.phieuMuaVatTuTaiKhoaId = id;
                        this.phieuMuaVatTuId = id;
                    }
                };
                TongHopDuTruMuaVatTuTaiKhoaDetailComponent.prototype.GetTrangThaiPhieuMuaDuTru = function (id) {
                    var _this = this;
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View)) {
                        self.apiService.get("YeuCauMuaVatTu/GetTrangThaiPhieuMuaVatTu?phieuMuaVatTuId=" + id).subscribe(function (result) {
                            if (result !== undefined && result !== null) {
                                _this.trangThaiVo = result;
                            }
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                TongHopDuTruMuaVatTuTaiKhoaDetailComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang lưu dữ liệu...' },
                    });
                };
                TongHopDuTruMuaVatTuTaiKhoaDetailComponent.prototype.closepopupLoadingData = function () {
                    if (this.popupLoadingData) {
                        this.popupLoadingData.close();
                    }
                };
                TongHopDuTruMuaVatTuTaiKhoaDetailComponent.prototype.duyet = function () {
                    var self = this;
                    self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], {
                        disableClose: false,
                        width: '500px',
                        data: {
                            Title: 'Xác nhận',
                            Message: 'Bạn có muốn duyệt phiếu dự trù này không ?',
                        },
                    }).afterClosed().subscribe(function (res) {
                        if (res === 'Yes') {
                            self.danhSachTongHopDuTruMuaVatTuTaiKhoa = self.shared.getSharedData();
                            self.validationErrors = [];
                            self.ref.detectChanges();
                            if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Update)) { }
                            else {
                                self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].UnAuthorizedMessage);
                            }
                        }
                    });
                };
                TongHopDuTruMuaVatTuTaiKhoaDetailComponent.prototype.inPhieu = function () {
                    var self = this;
                    self.danhSachTongHopDuTruMuaVatTuTaiKhoa = self.shared.getSharedData();
                    self.loadingPage();
                    self.dialog.open(_yeu_cau_mua_vat_tu_phieu_mua_vat_tu_phieu_mua_vat_tu_component__WEBPACK_IMPORTED_MODULE_15__["PhieuMuaVatTuComponent"], {
                        disableClose: false,
                        width: '1200px',
                        data: { Id: self.phieuMuaVatTuTaiKhoaId },
                    }).afterClosed().subscribe(function () {
                        self.closepopupLoadingData();
                    });
                };
                TongHopDuTruMuaVatTuTaiKhoaDetailComponent.prototype.cancel = function () {
                    this.location.back();
                };
                TongHopDuTruMuaVatTuTaiKhoaDetailComponent.prototype.keyEvent = function (event) {
                    // tslint:disable-next-line: deprecation
                    if (event.keyCode === 27 && !event.ctrlKey) {
                        // esc
                        this.cancel();
                        event.preventDefault();
                    }
                };
                return TongHopDuTruMuaVatTuTaiKhoaDetailComponent;
            }());
            TongHopDuTruMuaVatTuTaiKhoaDetailComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_17__["ApiService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_tong_hop_du_tru_mua_vat_tu_tai_khoa_xem_chi_tiet_shared_du_tru_mua_vat_tu_tai_khoa_xem_chi_tiet_shared_component__WEBPACK_IMPORTED_MODULE_14__["TongHopDuTruMuaVatTuTaiKhoaChiTietSharedComponent"], { static: true })
            ], TongHopDuTruMuaVatTuTaiKhoaDetailComponent.prototype, "shared", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])
            ], TongHopDuTruMuaVatTuTaiKhoaDetailComponent.prototype, "keyEvent", null);
            TongHopDuTruMuaVatTuTaiKhoaDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-tong-hop-du-tru-mua-vat-tu-tai-khoa-detail',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tong-hop-du-tru-mua-vat-tu-tai-khoa-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-detail/tong-hop-du-tru-mua-vat-tu-tai-khoa-detail.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_12__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_11__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tong-hop-du-tru-mua-vat-tu-tai-khoa-detail.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-detail/tong-hop-du-tru-mua-vat-tu-tai-khoa-detail.component.scss")).default]
                })
            ], TongHopDuTruMuaVatTuTaiKhoaDetailComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.scss": 
        /*!**************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.scss ***!
          \**************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n\n.render-text {\n  justify-content: space-between !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2EvdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2EtZHV5ZXQvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXHZhdC10dVxcdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2FcXHRvbmctaG9wLWR1LXRydS1tdWEtdmF0LXR1LXRhaS1raG9hLWR1eWV0XFx0b25nLWhvcC1kdS10cnUtbXVhLXZhdC10dS10YWkta2hvYS1kdXlldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2EvdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2EtZHV5ZXQvdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2EtZHV5ZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHlDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L3ZhdC10dS90b25nLWhvcC1kdS10cnUtbXVhLXZhdC10dS10YWkta2hvYS90b25nLWhvcC1kdS10cnUtbXVhLXZhdC10dS10YWkta2hvYS1kdXlldC90b25nLWhvcC1kdS10cnUtbXVhLXZhdC10dS10YWkta2hvYS1kdXlldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5yZW5kZXItdGV4dCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xufSIsIi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5yZW5kZXItdGV4dCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.ts": 
        /*!************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.ts ***!
          \************************************************************************************************************************************************************************************/
        /*! exports provided: TongHopDuTruMuaVatTuTaiKhoaDuyetComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaVatTuTaiKhoaDuyetComponent", function () { return TongHopDuTruMuaVatTuTaiKhoaDuyetComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_vat_tu_tai_khoa_shared_tong_hop_du_tru_mua_vat_tu_tai_khoa_shared_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-vat-tu-tai-khoa-shared/tong-hop-du-tru-mua-vat-tu-tai-khoa-shared.component */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-shared/tong-hop-du-tru-mua-vat-tu-tai-khoa-shared.component.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_vat_tu_tai_khoa_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-vat-tu-tai-khoa.model */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa.model.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var TongHopDuTruMuaVatTuTaiKhoaDuyetComponent = /** @class */ (function () {
                function TongHopDuTruMuaVatTuTaiKhoaDuyetComponent(apiService, dialog, route) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.route = route;
                    this.popupSavingData = null;
                    this.popupLoadingData = null;
                    this.validationErrors = null;
                    this.tabDaXuLy = "";
                }
                TongHopDuTruMuaVatTuTaiKhoaDuyetComponent.prototype.ngOnInit = function () {
                    this.danhSachTongHopDuTruMuaVatTuTaiKhoa = new _tong_hop_du_tru_mua_vat_tu_tai_khoa_model__WEBPACK_IMPORTED_MODULE_7__["TongHopDuTruMuaVatTuTaiKhoa"]();
                    var isSelected = this.route.snapshot.params.isSelected;
                    if (isSelected === "true") {
                        this.tabDaXuLy = "DaXuLy";
                        var id = this.route.snapshot.params.id;
                        if (id != undefined && id != null && isSelected === "true") {
                            this.getThongTinTongHopDuTruMuaTaiKhoaDaXuLy(id);
                        }
                    }
                    else {
                        this.tabDaXuLy = "ChoXuLy";
                        var id = this.route.snapshot.params.id;
                        if (id != undefined && id != null) {
                            this.getThongTinTongHopDuTruMuaTaiKhoa(id);
                        }
                    }
                };
                TongHopDuTruMuaVatTuTaiKhoaDuyetComponent.prototype.getThongTinTongHopDuTruMuaTaiKhoaDaXuLy = function (id) {
                    var _this = this;
                    this.apiService.get('YeuCauMuaVatTu/GetThongTinDuTruVatTuTaiKhoaDaXuLy/' + id)
                        .subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.danhSachTongHopDuTruMuaVatTuTaiKhoa = resultData;
                        }
                    });
                };
                TongHopDuTruMuaVatTuTaiKhoaDuyetComponent.prototype.getThongTinTongHopDuTruMuaTaiKhoa = function (id) {
                    var _this = this;
                    this.apiService.get('YeuCauMuaVatTu/GetThongTinDuTruVatTuTaiKhoa/' + id)
                        .subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.danhSachTongHopDuTruMuaVatTuTaiKhoa = resultData;
                        }
                    });
                };
                TongHopDuTruMuaVatTuTaiKhoaDuyetComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang lưu dữ liệu...' },
                    });
                };
                TongHopDuTruMuaVatTuTaiKhoaDuyetComponent.prototype.closepopupLoadingData = function () {
                    if (this.popupLoadingData) {
                        this.popupLoadingData.close();
                    }
                };
                TongHopDuTruMuaVatTuTaiKhoaDuyetComponent.prototype.savingPage = function () {
                    this.popupSavingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang lưu dữ liệu...' },
                    });
                };
                TongHopDuTruMuaVatTuTaiKhoaDuyetComponent.prototype.closepopupSavingData = function () {
                    if (this.popupSavingData) {
                        this.popupSavingData.close();
                    }
                };
                return TongHopDuTruMuaVatTuTaiKhoaDuyetComponent;
            }());
            TongHopDuTruMuaVatTuTaiKhoaDuyetComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_tong_hop_du_tru_mua_vat_tu_tai_khoa_shared_tong_hop_du_tru_mua_vat_tu_tai_khoa_shared_component__WEBPACK_IMPORTED_MODULE_6__["TongHopDuTruMuaVatTuTaiKhoaSharedComponent"], { static: true })
            ], TongHopDuTruMuaVatTuTaiKhoaDuyetComponent.prototype, "shared", void 0);
            TongHopDuTruMuaVatTuTaiKhoaDuyetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.scss")).default]
                })
            ], TongHopDuTruMuaVatTuTaiKhoaDuyetComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet/tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet.component.scss": 
        /*!**************************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet/tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet.component.scss ***!
          \**************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3RvbmctaG9wLWR1LXRydS1tdWEtdmF0LXR1LXRhaS1raG9hL3RvbmctaG9wLWR1LXRydS1tdWEtdmF0LXR1LXRhaS1raG9hLWtob25nLWR1eWV0L3RvbmctaG9wLWR1LXRydS1tdWEtdmF0LXR1LXRhaS1raG9hLWtob25nLWR1eWV0LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet/tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet.component.ts": 
        /*!************************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet/tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet.component.ts ***!
          \************************************************************************************************************************************************************************************************/
        /*! exports provided: TongHopDuTruMuaVatTuTaiKhoaKhongDuyetComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaVatTuTaiKhoaKhongDuyetComponent", function () { return TongHopDuTruMuaVatTuTaiKhoaKhongDuyetComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            var TongHopDuTruMuaVatTuTaiKhoaKhongDuyetComponent = /** @class */ (function () {
                function TongHopDuTruMuaVatTuTaiKhoaKhongDuyetComponent(dialogRef, data) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.Title = null;
                    this.Message = null;
                    this.lyDo = null;
                    this.ButtonYes = 'Có';
                    this.ButtonNo = 'Không';
                }
                TongHopDuTruMuaVatTuTaiKhoaKhongDuyetComponent.prototype.ngOnInit = function () {
                    this.Title = 'Xác nhận';
                    this.Message = 'Bạn có muốn từ chối phiếu dự trù này không?';
                };
                TongHopDuTruMuaVatTuTaiKhoaKhongDuyetComponent.prototype.close = function (result) {
                    if (result === 'Yes') {
                        this.dialogRef.close(this.lyDo);
                    }
                    else {
                        this.dialogRef.close('');
                    }
                };
                return TongHopDuTruMuaVatTuTaiKhoaKhongDuyetComponent;
            }());
            TongHopDuTruMuaVatTuTaiKhoaKhongDuyetComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            TongHopDuTruMuaVatTuTaiKhoaKhongDuyetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet/tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet/tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], TongHopDuTruMuaVatTuTaiKhoaKhongDuyetComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-routing.module.ts": 
        /*!*****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-routing.module.ts ***!
          \*****************************************************************************************************************************************/
        /*! exports provided: TongHopDuTruMuaVatTuTaiKhoaRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaVatTuTaiKhoaRoutingModule", function () { return TongHopDuTruMuaVatTuTaiKhoaRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _ds_tong_hop_du_tru_mua_vat_tu_tai_khoa_ds_tong_hop_du_tru_mua_vat_tu_tai_khoa_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ds-tong-hop-du-tru-mua-vat-tu-tai-khoa/ds-tong-hop-du-tru-mua-vat-tu-tai-khoa.component */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/ds-tong-hop-du-tru-mua-vat-tu-tai-khoa/ds-tong-hop-du-tru-mua-vat-tu-tai-khoa.component.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_vat_tu_tai_khoa_detail_tong_hop_du_tru_mua_vat_tu_tai_khoa_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-vat-tu-tai-khoa-detail/tong-hop-du-tru-mua-vat-tu-tai-khoa-detail.component */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-detail/tong-hop-du-tru-mua-vat-tu-tai-khoa-detail.component.ts");
            /* harmony import */ var _gui_tong_hop_du_tru_mua_vat_tu_tai_khoa_duyet_gui_tong_hop_du_tru_mua_vat_tu_tai_khoa_duyet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_vat_tu_tai_khoa_duyet_tong_hop_du_tru_mua_vat_tu_tai_khoa_duyet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.ts");
            var routes = [
                {
                    path: '',
                    // pathMatch: 'full',
                    component: _ds_tong_hop_du_tru_mua_vat_tu_tai_khoa_ds_tong_hop_du_tru_mua_vat_tu_tai_khoa_component__WEBPACK_IMPORTED_MODULE_6__["DsTongHopDuTruMuaVatTuTaiKhoaComponent"],
                    data: {
                        title: 'Danh Sách Tổng Hợp Dự Trù Mua Vật Tư Tại Khoa',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhSachTongHopDuTruMuaVatTuTaiKhoa,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
                {
                    path: 'duyet/:id/:isSelected',
                    component: _tong_hop_du_tru_mua_vat_tu_tai_khoa_duyet_tong_hop_du_tru_mua_vat_tu_tai_khoa_duyet_component__WEBPACK_IMPORTED_MODULE_9__["TongHopDuTruMuaVatTuTaiKhoaDuyetComponent"],
                    data: {
                        title: 'Duyệt Dự Trù Mua Vật Tư',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhSachTongHopDuTruMuaVatTuTaiKhoa,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
                {
                    path: 'chi-tiet/:id',
                    component: _tong_hop_du_tru_mua_vat_tu_tai_khoa_detail_tong_hop_du_tru_mua_vat_tu_tai_khoa_detail_component__WEBPACK_IMPORTED_MODULE_7__["TongHopDuTruMuaVatTuTaiKhoaDetailComponent"],
                    data: {
                        title: 'Chi Tiết Dự Trù Mua Vật Tư Tại Khoa',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhSachTongHopDuTruMuaVatTuTaiKhoa,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].Process
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
                {
                    path: 'gui/:id',
                    component: _gui_tong_hop_du_tru_mua_vat_tu_tai_khoa_duyet_gui_tong_hop_du_tru_mua_vat_tu_tai_khoa_duyet_component__WEBPACK_IMPORTED_MODULE_8__["GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent"],
                    data: {
                        title: 'Gửi Dự Trù Mua Vật Tư Tại Khoa',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhSachTongHopDuTruMuaVatTuTaiKhoa,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
            ];
            var TongHopDuTruMuaVatTuTaiKhoaRoutingModule = /** @class */ (function () {
                function TongHopDuTruMuaVatTuTaiKhoaRoutingModule() {
                }
                return TongHopDuTruMuaVatTuTaiKhoaRoutingModule;
            }());
            TongHopDuTruMuaVatTuTaiKhoaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], TongHopDuTruMuaVatTuTaiKhoaRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-shared/tong-hop-du-tru-mua-vat-tu-tai-khoa-shared.component.scss": 
        /*!****************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-shared/tong-hop-du-tru-mua-vat-tu-tai-khoa-shared.component.scss ***!
          \****************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n\n.kho-tong-ton-ng-template {\n  display: inline;\n  white-space: nowrap;\n}\n\n.kho-tong-ton-label {\n  display: inline;\n  text-overflow: ellipsis;\n}\n\n.info {\n  margin-bottom: -8px;\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2EvdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2Etc2hhcmVkL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFx2YXQtdHVcXHRvbmctaG9wLWR1LXRydS1tdWEtdmF0LXR1LXRhaS1raG9hXFx0b25nLWhvcC1kdS10cnUtbXVhLXZhdC10dS10YWkta2hvYS1zaGFyZWRcXHRvbmctaG9wLWR1LXRydS1tdWEtdmF0LXR1LXRhaS1raG9hLXNoYXJlZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2EvdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2Etc2hhcmVkL3RvbmctaG9wLWR1LXRydS1tdWEtdmF0LXR1LXRhaS1raG9hLXNoYXJlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2EvdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2Etc2hhcmVkL3RvbmctaG9wLWR1LXRydS1tdWEtdmF0LXR1LXRhaS1raG9hLXNoYXJlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5raG8tdG9uZy10b24tbmctdGVtcGxhdGUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5raG8tdG9uZy10b24tbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IC04cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn0iLCIuZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4ua2hvLXRvbmctdG9uLW5nLXRlbXBsYXRlIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ua2hvLXRvbmctdG9uLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmluZm8ge1xuICBtYXJnaW4tYm90dG9tOiAtOHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-shared/tong-hop-du-tru-mua-vat-tu-tai-khoa-shared.component.ts": 
        /*!**************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-shared/tong-hop-du-tru-mua-vat-tu-tai-khoa-shared.component.ts ***!
          \**************************************************************************************************************************************************************************************/
        /*! exports provided: TongHopDuTruMuaVatTuTaiKhoaSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaVatTuTaiKhoaSharedComponent", function () { return TongHopDuTruMuaVatTuTaiKhoaSharedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_vat_tu_tai_khoa_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-vat-tu-tai-khoa.model */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa.model.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_vat_tu_tai_khoa_khong_duyet_tong_hop_du_tru_mua_vat_tu_tai_khoa_khong_duyet_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet/tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet.component */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet/tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet.component.ts");
            /* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/baseline-info */ "./node_modules/@iconify/icons-ic/baseline-info.js");
            /* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_14__);
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _phieu_mua_du_tru_tai_khoa_phieu_mua_du_tru_tai_khoa_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.ts");
            var TongHopDuTruMuaVatTuTaiKhoaSharedComponent_1;
            var TongHopDuTruMuaVatTuTaiKhoaSharedComponent = TongHopDuTruMuaVatTuTaiKhoaSharedComponent_1 = /** @class */ (function () {
                function TongHopDuTruMuaVatTuTaiKhoaSharedComponent(apiService, route, dialog, router, notificationService, authService, location) {
                    this.apiService = apiService;
                    this.route = route;
                    this.dialog = dialog;
                    this.router = router;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.location = location;
                    this.duTruMuaVatTuTaiKhoaChiTietVo = [];
                    this.duyetDuTruMuaVatTuViewModel = {};
                    this.thongTinLyDoHuyDuyetTaiKhoa = {};
                    this.popupSavingData = null;
                    this.validationErrors = null;
                    this.gridChildThuocVacXinColumns = [];
                    this.sortDuTruChild = [{
                            field: 'Id',
                            dir: 'asc'
                        }];
                    this.gridColumns = [];
                    this.gridColumnsChild = [];
                    this.groups = [{ field: 'Nhom', dir: 'asc', aggregates: [] }];
                    this.khos = [];
                    this.hdts = [];
                    this.urlGetDataGridChildAsync = 'YeuCauMuaVatTu/GetDuTruMuaVatTuTaiKhoaChiTietForGridAsync';
                    this.urlGetTotalPageGridChild = 'YeuCauMuaVatTu/GetTotalDuTruMuaVatTuTaiKhoaChiTietForGridAsync';
                    this.urlGetDataDaXuLy = "YeuCauMuaVatTu/GetDuTruMuaVatTuTHDTChiTietForGridAsync";
                    this.urlGetTotalPageDaXuLy = "YeuCauMuaVatTu/GetTotalDuTruMuaVatTuTHDTChiTietForGridAsync";
                    this.urlGetDataDaXuLyChild = "YeuCauMuaVatTu/GetDuTruMuaVatTuTaiKhoaChiTietForGridAsyncChild";
                    this.urlGetTotalPageDaXuLyChild = "YeuCauMuaVatTu/GetTotalDuTruMuaVatTuTaiKhoaChiTietForGridAsyncChild";
                    this.duTruMuaVatTuId = 0;
                    this.hideGuibtn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.icInfo = _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_14___default.a;
                }
                TongHopDuTruMuaVatTuTaiKhoaSharedComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhSachTongHopDuTruMuaVatTuTaiKhoa;
                    this.danhSachTongHopDuTruMuaVatTuTaiKhoa = new _tong_hop_du_tru_mua_vat_tu_tai_khoa_model__WEBPACK_IMPORTED_MODULE_6__["TongHopDuTruMuaVatTuTaiKhoa"]();
                    var id = this.route.snapshot.params.id;
                    if (id != undefined && id != null) {
                        this.duTruMuaVatTuId = id;
                        console.log("tabSelected: ", this.tabSelected);
                        if (this.tabSelected == "DaXuLy") {
                            this.getThongTinTongHopDuTruMuaTaiKhoaDaXuLy(id);
                        }
                        else {
                            this.getThongTinTongHopDuTruMuaTaiKhoa(id);
                        }
                    }
                    this.duTruMuaVatTuId = id;
                    this.gridChildThuocVacXinColumns = [
                        {
                            Field: 'Nhom',
                            Title: 'Loại',
                            Width: 100,
                            ShowTooltip: true,
                            Hidden: true,
                            TemplateGroupHeader: this.nhomGroupHeaderTemplate
                        },
                        { Field: 'VatTu', Title: 'Vật tư', Width: 100, ShowTooltip: true },
                        { Field: 'DonViTinh', Title: 'ĐVT', Width: 50 },
                        { Field: 'QuyCach', Title: 'Quy cách', ShowTooltip: true, Width: 52 },
                        { Field: 'HangSanXuat', Title: 'Hãng SX', Width: 100 },
                        { Field: 'NuocSanXuat', Title: 'Nước SX', Width: 100 },
                        { Field: 'SoLuongDuTru', Title: 'SL Dự Trù', Width: 100 },
                        { Field: 'SoLuongDuKienSuDung', Title: 'SL D.KIẾN S.DỤNG TRONG KỲ', Width: 100 },
                        { Field: 'KhoDuTruTon', Title: 'Kho D.Trù Tồn', Width: 100 },
                        { Field: 'KhoTongTon', Title: 'Kho Tổng Tồn', Width: 100, Template: this.khoTongTonTemplate },
                        { Field: 'HDChuaNhap', Title: 'HĐ Chưa Nhập', Width: 100, Template: this.hdChuaNhapTemplate },
                        { Field: 'SoLuongDuTruTruongKhoaDuyet', Title: 'T.Khoa Duyệt', Width: 100, Template: this.nhomSLTKDuyet },
                    ];
                    this.gridColumns = [
                        { Field: "Nhom", Title: "Loại", Width: 100, ShowTooltip: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: 'TenVatTu', Title: 'Tên', Width: 50, ShowTooltip: true },
                        { Field: 'DonViTinh', Title: 'ĐVT', Width: 50 },
                        { Field: 'QuyCach', Title: 'Quy cách', ShowTooltip: true, Width: 52 },
                        { Field: 'HangSanXuat', Title: 'Hãng SX', Width: 100 },
                        { Field: 'NuocSanXuat', Title: 'Nước SX', Width: 100 },
                        // { Field: 'NhomDuPhong', Title: 'Nhóm Đ.Trị/D.Phòng', Width: 80 },
                        { Field: 'SoLuongDuTru', Title: 'SL Dự Trù', Width: 120 },
                        { Field: 'SoLuongDuKienSuDung', Title: 'SL D.KIẾN S.DỤNG TRONG KỲ', Width: 120 },
                        { Field: 'KhoDuTruTon', Title: 'Kho D.Trù Tồn', Width: 80 },
                        { Field: 'KhoTongTon', Title: 'Kho Tổng Tồn', Width: 80 },
                        { Field: 'HDChuaNhap', Title: 'H.Đồng Chưa Nhập', Width: 80 },
                        { Field: "SoLuongDuTruTruongKhoaDuyet", Title: "T.Khoa Duyệt", Width: 100 },
                    ];
                    this.gridColumnsChild = [
                        { Field: "Nhom", Title: "Loại", Width: 100, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "TenKho", Title: "Kho", Width: 100 },
                        { Field: "KyDuTruDisplay", Title: "Kỳ dự trù", Width: 120 },
                        { Field: "SoLuongDuTru", Title: "SL Dự Trù", Width: 100 },
                        { Field: "SoLuongDuKienSuDung", Title: "SL Dự Kiến Trong Kỳ", Width: 100 },
                    ];
                };
                TongHopDuTruMuaVatTuTaiKhoaSharedComponent.prototype.getThongTinTongHopDuTruMuaTaiKhoa = function (id) {
                    var _this = this;
                    this.apiService.get('YeuCauMuaVatTu/GetThongTinDuTruVatTuTaiKhoa/' + id)
                        .subscribe(function (resultData) {
                        if (resultData) {
                            _this.danhSachTongHopDuTruMuaVatTuTaiKhoa = resultData;
                        }
                    });
                };
                TongHopDuTruMuaVatTuTaiKhoaSharedComponent.prototype.HuyDuyet = function (id) {
                    var _this = this;
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
                                    'Hủy Duyệt',
                                ]),
                            },
                        })
                            .afterClosed()
                            .subscribe(function (result) {
                            /* result is a string:Yes,No,No answer*/
                            if (result === 'Yes') {
                                _this.apiService.post('YeuCauMuaVatTu/HuyDuyetTaiKhoa/' + id)
                                    .subscribe(function (resultData) {
                                    if (resultData !== null && resultData !== undefined) {
                                        if (resultData) {
                                            _this.notificationService.showSuccess('Hủy duyệt thành công.');
                                            _this.router.navigate(['/nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa']);
                                        }
                                        else {
                                            _this.notificationService.showError('Hủy không thành công.');
                                        }
                                    }
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                TongHopDuTruMuaVatTuTaiKhoaSharedComponent.prototype.getThongTinTongHopDuTruMuaTaiKhoaDaXuLy = function (id) {
                    var _this = this;
                    this.apiService.get("YeuCauMuaVatTu/GetThongTinDuTruVatTuTaiKhoaDaXuLy/" + id)
                        .subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.danhSachTongHopDuTruMuaVatTuTaiKhoa = resultData;
                        }
                    });
                };
                TongHopDuTruMuaVatTuTaiKhoaSharedComponent.prototype.onDataBound = function (event) {
                    if (event && event.Data.length > 0) {
                        this.duTruMuaVatTuTaiKhoaChiTietVo = event.Data;
                    }
                };
                TongHopDuTruMuaVatTuTaiKhoaSharedComponent.prototype.PheDuyet = function (id) {
                    var _this = this;
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
                            .subscribe(function (result) {
                            if (result === 'Yes') {
                                _this.duyetDuTruMuaVatTuViewModel.DuTruMuaVatTuId = id;
                                _this.duyetDuTruMuaVatTuViewModel.DuTruMuaVatTuTaiKhoaChiTietVos = _this.duTruMuaVatTuTaiKhoaChiTietVo;
                                _this.apiService.post('YeuCauMuaVatTu/DuyetTaiKhoa/', _this.duyetDuTruMuaVatTuViewModel)
                                    .subscribe(function (resultData) {
                                    if (resultData !== null && resultData !== undefined) {
                                        if (resultData) {
                                            _this.cancel();
                                            _this.notificationService.showSuccess('Duyệt thành công.');
                                        }
                                        else {
                                            _this.notificationService.showError('Duyệt không thành công.');
                                        }
                                    }
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                TongHopDuTruMuaVatTuTaiKhoaSharedComponent.prototype.TuChoi = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update)) {
                        if (this.confrim != null) {
                            this.dialog.closeAll();
                            this.confrim = null;
                        }
                        this.confrim = this.dialog.open(_tong_hop_du_tru_mua_vat_tu_tai_khoa_khong_duyet_tong_hop_du_tru_mua_vat_tu_tai_khoa_khong_duyet_component__WEBPACK_IMPORTED_MODULE_13__["TongHopDuTruMuaVatTuTaiKhoaKhongDuyetComponent"], {
                            disableClose: true,
                            width: '400px',
                            height: '300px',
                        }).afterClosed().subscribe(function (result) {
                            if (result) {
                                _this.thongTinLyDoHuyDuyetTaiKhoa.LyDoHuy = result;
                                _this.thongTinLyDoHuyDuyetTaiKhoa.Id = _this.duTruMuaVatTuId;
                                _this.apiService.post('YeuCauMuaVatTu/TuChoiDuyetTaiKhoa', _this.thongTinLyDoHuyDuyetTaiKhoa)
                                    .subscribe(function (resultData) {
                                    if (resultData) {
                                        _this.cancel();
                                        _this.notificationService.showSuccess('Từ chối duyệt thành công.');
                                    }
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                TongHopDuTruMuaVatTuTaiKhoaSharedComponent.prototype.cancel = function () {
                    // this.router.navigate(['/nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa'], {
                    //     queryParamsHandling: 'preserve',
                    // });
                    this.location.back();
                };
                TongHopDuTruMuaVatTuTaiKhoaSharedComponent.prototype.TooltipCustom = function (duTruGiamDocDetail) {
                    this.khos = duTruGiamDocDetail.ThongTinChiTietTonKhoTongs.slice();
                    this.hdts = duTruGiamDocDetail.ThongTinChiTietTonHDTs.slice();
                };
                TongHopDuTruMuaVatTuTaiKhoaSharedComponent.prototype.InPhieuTongHopTaiKhoa = function () {
                    var id = this.route.snapshot.params.id;
                    this.dialog.open(_phieu_mua_du_tru_tai_khoa_phieu_mua_du_tru_tai_khoa_component__WEBPACK_IMPORTED_MODULE_16__["PhieuMuaTruTaiKhoaComponent"], {
                        disableClose: false,
                        width: '1200px',
                        data: { Id: id },
                    }).afterClosed().subscribe(function () {
                        // this.router.navigate(['/nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa']);
                    });
                };
                return TongHopDuTruMuaVatTuTaiKhoaSharedComponent;
            }());
            TongHopDuTruMuaVatTuTaiKhoaSharedComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_15__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], TongHopDuTruMuaVatTuTaiKhoaSharedComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('khoTongTonTemplate', { static: true })
            ], TongHopDuTruMuaVatTuTaiKhoaSharedComponent.prototype, "khoTongTonTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hdChuaNhapTemplate', { static: true })
            ], TongHopDuTruMuaVatTuTaiKhoaSharedComponent.prototype, "hdChuaNhapTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomSLTKDuyet', { static: true })
            ], TongHopDuTruMuaVatTuTaiKhoaSharedComponent.prototype, "nhomSLTKDuyet", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(TongHopDuTruMuaVatTuTaiKhoaSharedComponent_1, { static: true })
            ], TongHopDuTruMuaVatTuTaiKhoaSharedComponent.prototype, "shared", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TongHopDuTruMuaVatTuTaiKhoaSharedComponent.prototype, "trangThaiVo", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TongHopDuTruMuaVatTuTaiKhoaSharedComponent.prototype, "validationErrorsVatTu", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TongHopDuTruMuaVatTuTaiKhoaSharedComponent.prototype, "isCreate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], TongHopDuTruMuaVatTuTaiKhoaSharedComponent.prototype, "hideGuibtn", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TongHopDuTruMuaVatTuTaiKhoaSharedComponent.prototype, "tabSelected", void 0);
            TongHopDuTruMuaVatTuTaiKhoaSharedComponent = TongHopDuTruMuaVatTuTaiKhoaSharedComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-tong-hop-du-tru-mua-vat-tu-tai-khoa-shared',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tong-hop-du-tru-mua-vat-tu-tai-khoa-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-shared/tong-hop-du-tru-mua-vat-tu-tai-khoa-shared.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tong-hop-du-tru-mua-vat-tu-tai-khoa-shared.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-shared/tong-hop-du-tru-mua-vat-tu-tai-khoa-shared.component.scss")).default]
                })
            ], TongHopDuTruMuaVatTuTaiKhoaSharedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared/du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared.component.scss": 
        /*!*********************************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared/du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared.component.scss ***!
          \*********************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2EvdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2EteGVtLWNoaS10aWV0LXNoYXJlZC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcdmF0LXR1XFx0b25nLWhvcC1kdS10cnUtbXVhLXZhdC10dS10YWkta2hvYVxcdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2EteGVtLWNoaS10aWV0LXNoYXJlZFxcZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2EteGVtLWNoaS10aWV0LXNoYXJlZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2EvdG9uZy1ob3AtZHUtdHJ1LW11YS12YXQtdHUtdGFpLWtob2EteGVtLWNoaS10aWV0LXNoYXJlZC9kdS10cnUtbXVhLXZhdC10dS10YWkta2hvYS14ZW0tY2hpLXRpZXQtc2hhcmVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L3ZhdC10dS90b25nLWhvcC1kdS10cnUtbXVhLXZhdC10dS10YWkta2hvYS90b25nLWhvcC1kdS10cnUtbXVhLXZhdC10dS10YWkta2hvYS14ZW0tY2hpLXRpZXQtc2hhcmVkL2R1LXRydS1tdWEtdmF0LXR1LXRhaS1raG9hLXhlbS1jaGktdGlldC1zaGFyZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSIsIi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared/du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared.component.ts": 
        /*!*******************************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared/du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared.component.ts ***!
          \*******************************************************************************************************************************************************************************************************/
        /*! exports provided: TongHopDuTruMuaVatTuTaiKhoaChiTietSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaVatTuTaiKhoaChiTietSharedComponent", function () { return TongHopDuTruMuaVatTuTaiKhoaChiTietSharedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_vat_tu_tai_khoa_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-vat-tu-tai-khoa.model */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa.model.ts");
            var TongHopDuTruMuaVatTuTaiKhoaChiTietSharedComponent = /** @class */ (function () {
                function TongHopDuTruMuaVatTuTaiKhoaChiTietSharedComponent(apiService, route, router) {
                    this.apiService = apiService;
                    this.route = route;
                    this.router = router;
                    this.duTruMuaVatTuTaiKhoaChiTietVo = [];
                    this.duyetDuTruMuaVatTuViewModel = {};
                    this.thongTinLyDoHuyDuyetTaiKhoa = {};
                    this.popupSavingData = null;
                    this.validationErrors = null;
                    this.gridColumns = [];
                    this.sortDuTruChild = [{
                            field: 'Id',
                            dir: 'asc'
                        }];
                    this.urlGetData = "YeuCauMuaVatTu/GetDuTruMuaVatTuChiTietForGridAsyncChild";
                    this.urlGetTotal = "YeuCauMuaVatTu/GetTotalDuTruMuaVatTuChiTietForGridAsyncChild";
                    this.duTruMuaVatTuId = 0;
                    this.groups = [{ field: 'Nhom' }];
                    this.hideGuibtn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                TongHopDuTruMuaVatTuTaiKhoaChiTietSharedComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhSachTongHopDuTruMuaVatTuTaiKhoa;
                    this.danhSachTongHopDuTruMuaVatTuTaiKhoa = new _tong_hop_du_tru_mua_vat_tu_tai_khoa_model__WEBPACK_IMPORTED_MODULE_5__["TongHopDuTruMuaVatTuTaiKhoa"]();
                    var id = this.route.snapshot.params.id;
                    if (id != undefined && id != null) {
                        this.getThongTinTongHopDuTruMuaTaiKhoa(id);
                    }
                    this.duTruMuaVatTuId = id;
                    this.gridColumns = [
                        // { Field: 'Nhom', Title: 'Loại', Width: 100, ShowTooltip: true },
                        { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: 'TenVatTu', Title: 'Tên', Width: 100, ShowTooltip: true },
                        { Field: 'DonViTinh', Title: 'ĐVT', Width: 50 },
                        { Field: 'QuyCach', Title: 'Quy cách', ShowTooltip: true, Width: 52 },
                        { Field: 'HangSanXuat', Title: 'Hãng SX', Width: 100 },
                        { Field: 'NuocSanXuat', Title: 'Nước SX', Width: 100 },
                        { Field: 'SoLuongDuTru', Title: 'SL Dự Trù', Width: 100 },
                        { Field: 'SoLuongDuKienSuDung', Title: 'SL D.KIẾN S.DỤNG TRONG KỲ', Width: 100 },
                        { Field: 'SoLuongDuTruTruongKhoaDuyet', Title: 'T.Khoa Duyệt', Width: 100 },
                    ];
                };
                TongHopDuTruMuaVatTuTaiKhoaChiTietSharedComponent.prototype.getThongTinTongHopDuTruMuaTaiKhoa = function (id) {
                    var _this = this;
                    this.apiService.get('YeuCauMuaVatTu/GetThongTinDuTruVatTuTaiKhoa/' + id)
                        .subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.danhSachTongHopDuTruMuaVatTuTaiKhoa = resultData;
                        }
                    });
                };
                TongHopDuTruMuaVatTuTaiKhoaChiTietSharedComponent.prototype.onDataBound = function (event) {
                    if (event && event.Data.length > 0) {
                        this.duTruMuaVatTuTaiKhoaChiTietVo = event.Data;
                    }
                };
                TongHopDuTruMuaVatTuTaiKhoaChiTietSharedComponent.prototype.getSharedData = function () {
                    return this.danhSachTongHopDuTruMuaVatTuTaiKhoa;
                };
                return TongHopDuTruMuaVatTuTaiKhoaChiTietSharedComponent;
            }());
            TongHopDuTruMuaVatTuTaiKhoaChiTietSharedComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], TongHopDuTruMuaVatTuTaiKhoaChiTietSharedComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomSLTKDuyet', { static: true })
            ], TongHopDuTruMuaVatTuTaiKhoaChiTietSharedComponent.prototype, "nhomSLTKDuyet", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TongHopDuTruMuaVatTuTaiKhoaChiTietSharedComponent.prototype, "trangThaiVo", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TongHopDuTruMuaVatTuTaiKhoaChiTietSharedComponent.prototype, "validationErrorsVatTu", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TongHopDuTruMuaVatTuTaiKhoaChiTietSharedComponent.prototype, "isCreate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], TongHopDuTruMuaVatTuTaiKhoaChiTietSharedComponent.prototype, "hideGuibtn", void 0);
            TongHopDuTruMuaVatTuTaiKhoaChiTietSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared/du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared/du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared.component.scss")).default]
                })
            ], TongHopDuTruMuaVatTuTaiKhoaChiTietSharedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa.model.ts": 
        /*!********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa.model.ts ***!
          \********************************************************************************************************************************/
        /*! exports provided: TongHopDuTruMuaVatTuTaiKhoaSreach, TongHopDuTruMuaVatTuTaiKhoa, DuyetDuTruMuaVatTuViewModel, ThongTinLyDoHuyDuyetTaiKhoa, DuTruMuaVatTuTaiKhoaChiTietVo, PhieuInDuTruMuaTaiKhoa */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaVatTuTaiKhoaSreach", function () { return TongHopDuTruMuaVatTuTaiKhoaSreach; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaVatTuTaiKhoa", function () { return TongHopDuTruMuaVatTuTaiKhoa; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetDuTruMuaVatTuViewModel", function () { return DuyetDuTruMuaVatTuViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinLyDoHuyDuyetTaiKhoa", function () { return ThongTinLyDoHuyDuyetTaiKhoa; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuTruMuaVatTuTaiKhoaChiTietVo", function () { return DuTruMuaVatTuTaiKhoaChiTietVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuInDuTruMuaTaiKhoa", function () { return PhieuInDuTruMuaTaiKhoa; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts");
            var TongHopDuTruMuaVatTuTaiKhoaSreach = /** @class */ (function () {
                function TongHopDuTruMuaVatTuTaiKhoaSreach(Id, NgayYeuCauTuFormat, NgayYeuCauDenFormat, FromDate, ToDate, ChoDuyet, DaDuyet, DaDuyetDaXuLy, DaGuiChoDuyet, TuChoiDuyet, SearchString, SearchStringDaXuLy, SearchStringTuChoi, RangeFromDate, RangeFromDateDaXuLy, RangeFromDateTuChoi) {
                    if (Id === void 0) { Id = 0; }
                    if (NgayYeuCauTuFormat === void 0) { NgayYeuCauTuFormat = null; }
                    if (NgayYeuCauDenFormat === void 0) { NgayYeuCauDenFormat = null; }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    if (ChoDuyet === void 0) { ChoDuyet = true; }
                    if (DaDuyet === void 0) { DaDuyet = true; }
                    if (DaDuyetDaXuLy === void 0) { DaDuyetDaXuLy = true; }
                    if (DaGuiChoDuyet === void 0) { DaGuiChoDuyet = true; }
                    if (TuChoiDuyet === void 0) { TuChoiDuyet = true; }
                    if (SearchString === void 0) { SearchString = null; }
                    if (SearchStringDaXuLy === void 0) { SearchStringDaXuLy = null; }
                    if (SearchStringTuChoi === void 0) { SearchStringTuChoi = null; }
                    if (RangeFromDate === void 0) { RangeFromDate = new _vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"](); }
                    if (RangeFromDateDaXuLy === void 0) { RangeFromDateDaXuLy = new _vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"](); }
                    if (RangeFromDateTuChoi === void 0) { RangeFromDateTuChoi = new _vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"](); }
                    this.Id = Id;
                    this.NgayYeuCauTuFormat = NgayYeuCauTuFormat;
                    this.NgayYeuCauDenFormat = NgayYeuCauDenFormat;
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                    this.ChoDuyet = ChoDuyet;
                    this.DaDuyet = DaDuyet;
                    this.DaDuyetDaXuLy = DaDuyetDaXuLy;
                    this.DaGuiChoDuyet = DaGuiChoDuyet;
                    this.TuChoiDuyet = TuChoiDuyet;
                    this.SearchString = SearchString;
                    this.SearchStringDaXuLy = SearchStringDaXuLy;
                    this.SearchStringTuChoi = SearchStringTuChoi;
                    this.RangeFromDate = RangeFromDate;
                    this.RangeFromDateDaXuLy = RangeFromDateDaXuLy;
                    this.RangeFromDateTuChoi = RangeFromDateTuChoi;
                }
                return TongHopDuTruMuaVatTuTaiKhoaSreach;
            }());
            var TongHopDuTruMuaVatTuTaiKhoa = /** @class */ (function () {
                function TongHopDuTruMuaVatTuTaiKhoa(SoPhieu, TenNhanVienYeuCau, KyDuTru, Id, LoaiDuTru, TenLoaiDuTru, KhoNhapId, TenKho, NhanVienYeuCauId, NhanVienYeuDuyetId, NgayYeuCau, GhiChu, TenNhanVienDuyet, TrangThai, KhoaPhongId, TenKhoaPhong, KyDuTruMuaDuocPhamVatTuId, LyDoTruongKhoaTuChoi, TinhTrang, TenNhanVienKhoDuocDuyet, NgayKhoDuocDuyet, TenGiamDocDuyet, NgayGiamDocDuyet, LyDoGiamDocTuChoi) {
                    if (SoPhieu === void 0) { SoPhieu = null; }
                    if (TenNhanVienYeuCau === void 0) { TenNhanVienYeuCau = null; }
                    if (KyDuTru === void 0) { KyDuTru = null; }
                    if (Id === void 0) { Id = 0; }
                    if (LoaiDuTru === void 0) { LoaiDuTru = null; }
                    if (TenLoaiDuTru === void 0) { TenLoaiDuTru = null; }
                    if (KhoNhapId === void 0) { KhoNhapId = null; }
                    if (TenKho === void 0) { TenKho = null; }
                    if (NhanVienYeuCauId === void 0) { NhanVienYeuCauId = null; }
                    if (NhanVienYeuDuyetId === void 0) { NhanVienYeuDuyetId = null; }
                    if (NgayYeuCau === void 0) { NgayYeuCau = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (TenNhanVienDuyet === void 0) { TenNhanVienDuyet = null; }
                    if (TrangThai === void 0) { TrangThai = null; }
                    if (KhoaPhongId === void 0) { KhoaPhongId = null; }
                    if (TenKhoaPhong === void 0) { TenKhoaPhong = null; }
                    if (KyDuTruMuaDuocPhamVatTuId === void 0) { KyDuTruMuaDuocPhamVatTuId = null; }
                    if (LyDoTruongKhoaTuChoi === void 0) { LyDoTruongKhoaTuChoi = null; }
                    if (TinhTrang === void 0) { TinhTrang = null; }
                    if (TenNhanVienKhoDuocDuyet === void 0) { TenNhanVienKhoDuocDuyet = null; }
                    if (NgayKhoDuocDuyet === void 0) { NgayKhoDuocDuyet = null; }
                    if (TenGiamDocDuyet === void 0) { TenGiamDocDuyet = null; }
                    if (NgayGiamDocDuyet === void 0) { NgayGiamDocDuyet = null; }
                    if (LyDoGiamDocTuChoi === void 0) { LyDoGiamDocTuChoi = null; }
                    this.SoPhieu = SoPhieu;
                    this.TenNhanVienYeuCau = TenNhanVienYeuCau;
                    this.KyDuTru = KyDuTru;
                    this.Id = Id;
                    this.LoaiDuTru = LoaiDuTru;
                    this.TenLoaiDuTru = TenLoaiDuTru;
                    this.KhoNhapId = KhoNhapId;
                    this.TenKho = TenKho;
                    this.NhanVienYeuCauId = NhanVienYeuCauId;
                    this.NhanVienYeuDuyetId = NhanVienYeuDuyetId;
                    this.NgayYeuCau = NgayYeuCau;
                    this.GhiChu = GhiChu;
                    this.TenNhanVienDuyet = TenNhanVienDuyet;
                    this.TrangThai = TrangThai;
                    this.KhoaPhongId = KhoaPhongId;
                    this.TenKhoaPhong = TenKhoaPhong;
                    this.KyDuTruMuaDuocPhamVatTuId = KyDuTruMuaDuocPhamVatTuId;
                    this.LyDoTruongKhoaTuChoi = LyDoTruongKhoaTuChoi;
                    this.TinhTrang = TinhTrang;
                    this.TenNhanVienKhoDuocDuyet = TenNhanVienKhoDuocDuyet;
                    this.NgayKhoDuocDuyet = NgayKhoDuocDuyet;
                    this.TenGiamDocDuyet = TenGiamDocDuyet;
                    this.NgayGiamDocDuyet = NgayGiamDocDuyet;
                    this.LyDoGiamDocTuChoi = LyDoGiamDocTuChoi;
                }
                return TongHopDuTruMuaVatTuTaiKhoa;
            }());
            var DuyetDuTruMuaVatTuViewModel = /** @class */ (function () {
                function DuyetDuTruMuaVatTuViewModel(DuTruMuaVatTuId, NhanVienYeuCauId, KhoaPhongId, GhiChu, NgayYeuCau, DuTruMuaVatTuTaiKhoaChiTietVos) {
                    if (DuTruMuaVatTuId === void 0) { DuTruMuaVatTuId = null; }
                    if (NhanVienYeuCauId === void 0) { NhanVienYeuCauId = null; }
                    if (KhoaPhongId === void 0) { KhoaPhongId = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (NgayYeuCau === void 0) { NgayYeuCau = null; }
                    if (DuTruMuaVatTuTaiKhoaChiTietVos === void 0) { DuTruMuaVatTuTaiKhoaChiTietVos = []; }
                    this.DuTruMuaVatTuId = DuTruMuaVatTuId;
                    this.NhanVienYeuCauId = NhanVienYeuCauId;
                    this.KhoaPhongId = KhoaPhongId;
                    this.GhiChu = GhiChu;
                    this.NgayYeuCau = NgayYeuCau;
                    this.DuTruMuaVatTuTaiKhoaChiTietVos = DuTruMuaVatTuTaiKhoaChiTietVos;
                }
                return DuyetDuTruMuaVatTuViewModel;
            }());
            var ThongTinLyDoHuyDuyetTaiKhoa = /** @class */ (function () {
                function ThongTinLyDoHuyDuyetTaiKhoa(Id, LyDoHuy) {
                    if (Id === void 0) { Id = 0; }
                    if (LyDoHuy === void 0) { LyDoHuy = null; }
                    this.Id = Id;
                    this.LyDoHuy = LyDoHuy;
                }
                return ThongTinLyDoHuyDuyetTaiKhoa;
            }());
            var DuTruMuaVatTuTaiKhoaChiTietVo = /** @class */ (function () {
                function DuTruMuaVatTuTaiKhoaChiTietVo(Id, Nhom, KeyId, VatTuId, TenVatTu, LaBHYT, QuyCach, DonViTinh, HangSanXuat, SoLuongDuTru, SoLuongDuKienSuDung, NhomDuPhong, KhoDuTruTon, KhoTongTon, HDChuaNhap, NongDoHamLuong, SoLuongDuTruTruongKhoaDuyet, DuTruMuaVatTuIds, DuTruMuaVatTuChiTietIds) {
                    if (Id === void 0) { Id = 0; }
                    if (Nhom === void 0) { Nhom = null; }
                    if (KeyId === void 0) { KeyId = null; }
                    if (VatTuId === void 0) { VatTuId = null; }
                    if (TenVatTu === void 0) { TenVatTu = null; }
                    if (LaBHYT === void 0) { LaBHYT = null; }
                    if (QuyCach === void 0) { QuyCach = null; }
                    if (DonViTinh === void 0) { DonViTinh = null; }
                    if (HangSanXuat === void 0) { HangSanXuat = null; }
                    if (SoLuongDuTru === void 0) { SoLuongDuTru = null; }
                    if (SoLuongDuKienSuDung === void 0) { SoLuongDuKienSuDung = null; }
                    if (NhomDuPhong === void 0) { NhomDuPhong = null; }
                    if (KhoDuTruTon === void 0) { KhoDuTruTon = null; }
                    if (KhoTongTon === void 0) { KhoTongTon = null; }
                    if (HDChuaNhap === void 0) { HDChuaNhap = null; }
                    if (NongDoHamLuong === void 0) { NongDoHamLuong = null; }
                    if (SoLuongDuTruTruongKhoaDuyet === void 0) { SoLuongDuTruTruongKhoaDuyet = null; }
                    this.Id = Id;
                    this.Nhom = Nhom;
                    this.KeyId = KeyId;
                    this.VatTuId = VatTuId;
                    this.TenVatTu = TenVatTu;
                    this.LaBHYT = LaBHYT;
                    this.QuyCach = QuyCach;
                    this.DonViTinh = DonViTinh;
                    this.HangSanXuat = HangSanXuat;
                    this.SoLuongDuTru = SoLuongDuTru;
                    this.SoLuongDuKienSuDung = SoLuongDuKienSuDung;
                    this.NhomDuPhong = NhomDuPhong;
                    this.KhoDuTruTon = KhoDuTruTon;
                    this.KhoTongTon = KhoTongTon;
                    this.HDChuaNhap = HDChuaNhap;
                    this.NongDoHamLuong = NongDoHamLuong;
                    this.SoLuongDuTruTruongKhoaDuyet = SoLuongDuTruTruongKhoaDuyet;
                    this.DuTruMuaVatTuIds = DuTruMuaVatTuIds;
                    this.DuTruMuaVatTuChiTietIds = DuTruMuaVatTuChiTietIds;
                }
                return DuTruMuaVatTuTaiKhoaChiTietVo;
            }());
            var PhieuInDuTruMuaTaiKhoa = /** @class */ (function () {
                function PhieuInDuTruMuaTaiKhoa(DuTruMuaVatTuTheoKhoaId, HostingName, Header) {
                    if (DuTruMuaVatTuTheoKhoaId === void 0) { DuTruMuaVatTuTheoKhoaId = 0; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (Header === void 0) { Header = null; }
                    this.DuTruMuaVatTuTheoKhoaId = DuTruMuaVatTuTheoKhoaId;
                    this.HostingName = HostingName;
                    this.Header = Header;
                }
                return PhieuInDuTruMuaTaiKhoa;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa.module.ts": 
        /*!*********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa.module.ts ***!
          \*********************************************************************************************************************************/
        /*! exports provided: TongHopDuTruMuaVatTuTaiKhoaModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaVatTuTaiKhoaModule", function () { return TongHopDuTruMuaVatTuTaiKhoaModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _tong_hop_du_tru_mua_vat_tu_tai_khoa_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-vat-tu-tai-khoa-routing.module */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-routing.module.ts");
            /* harmony import */ var _ds_tong_hop_du_tru_mua_vat_tu_tai_khoa_ds_tong_hop_du_tru_mua_vat_tu_tai_khoa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ds-tong-hop-du-tru-mua-vat-tu-tai-khoa/ds-tong-hop-du-tru-mua-vat-tu-tai-khoa.component */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/ds-tong-hop-du-tru-mua-vat-tu-tai-khoa/ds-tong-hop-du-tru-mua-vat-tu-tai-khoa.component.ts");
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
            /* harmony import */ var _gui_tong_hop_du_tru_mua_vat_tu_tai_khoa_duyet_gui_tong_hop_du_tru_mua_vat_tu_tai_khoa_duyet_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_vat_tu_tai_khoa_detail_tong_hop_du_tru_mua_vat_tu_tai_khoa_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-vat-tu-tai-khoa-detail/tong-hop-du-tru-mua-vat-tu-tai-khoa-detail.component */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-detail/tong-hop-du-tru-mua-vat-tu-tai-khoa-detail.component.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_vat_tu_tai_khoa_duyet_tong_hop_du_tru_mua_vat_tu_tai_khoa_duyet_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_vat_tu_tai_khoa_shared_tong_hop_du_tru_mua_vat_tu_tai_khoa_shared_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-vat-tu-tai-khoa-shared/tong-hop-du-tru-mua-vat-tu-tai-khoa-shared.component */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-shared/tong-hop-du-tru-mua-vat-tu-tai-khoa-shared.component.ts");
            /* harmony import */ var _phieu_tong_hop_du_tru_mua_vat_tu_tai_khoa_duyet_phieu_tong_hop_du_tru_mua_vat_tu_tai_khoa_duyet_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./phieu-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/phieu-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/phieu-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/phieu-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.ts");
            /* harmony import */ var _gui_tong_hop_du_tru_mua_vat_tu_tai_khoa_confirm_gui_tong_hop_du_tru_mua_vat_tu_tai_khoa_confirm_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm.component */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm.component.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_vat_tu_tai_khoa_khong_duyet_tong_hop_du_tru_mua_vat_tu_tai_khoa_khong_duyet_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet/tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet.component */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet/tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet.component.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_vat_tu_tai_khoa_xem_chi_tiet_shared_du_tru_mua_vat_tu_tai_khoa_xem_chi_tiet_shared_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared/du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared.component */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared/du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared.component.ts");
            /* harmony import */ var _phieu_mua_du_tru_tai_khoa_phieu_mua_du_tru_tai_khoa_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component */ "./src/app/modules/main/nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.ts");
            /* harmony import */ var _yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.module */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.module.ts");
            var TongHopDuTruMuaVatTuTaiKhoaModule = /** @class */ (function () {
                function TongHopDuTruMuaVatTuTaiKhoaModule() {
                }
                return TongHopDuTruMuaVatTuTaiKhoaModule;
            }());
            TongHopDuTruMuaVatTuTaiKhoaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _ds_tong_hop_du_tru_mua_vat_tu_tai_khoa_ds_tong_hop_du_tru_mua_vat_tu_tai_khoa_component__WEBPACK_IMPORTED_MODULE_4__["DsTongHopDuTruMuaVatTuTaiKhoaComponent"],
                        _gui_tong_hop_du_tru_mua_vat_tu_tai_khoa_duyet_gui_tong_hop_du_tru_mua_vat_tu_tai_khoa_duyet_component__WEBPACK_IMPORTED_MODULE_15__["GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent"],
                        _tong_hop_du_tru_mua_vat_tu_tai_khoa_detail_tong_hop_du_tru_mua_vat_tu_tai_khoa_detail_component__WEBPACK_IMPORTED_MODULE_16__["TongHopDuTruMuaVatTuTaiKhoaDetailComponent"],
                        _tong_hop_du_tru_mua_vat_tu_tai_khoa_duyet_tong_hop_du_tru_mua_vat_tu_tai_khoa_duyet_component__WEBPACK_IMPORTED_MODULE_17__["TongHopDuTruMuaVatTuTaiKhoaDuyetComponent"],
                        _tong_hop_du_tru_mua_vat_tu_tai_khoa_shared_tong_hop_du_tru_mua_vat_tu_tai_khoa_shared_component__WEBPACK_IMPORTED_MODULE_18__["TongHopDuTruMuaVatTuTaiKhoaSharedComponent"],
                        _phieu_tong_hop_du_tru_mua_vat_tu_tai_khoa_duyet_phieu_tong_hop_du_tru_mua_vat_tu_tai_khoa_duyet_component__WEBPACK_IMPORTED_MODULE_19__["PhieuTongHopDuTruMuaVatTuTaiKhoaDuyetComponent"],
                        _gui_tong_hop_du_tru_mua_vat_tu_tai_khoa_confirm_gui_tong_hop_du_tru_mua_vat_tu_tai_khoa_confirm_component__WEBPACK_IMPORTED_MODULE_20__["GuiTongHopDuTruMuaVatTuTaiKhoaConfirmComponent"],
                        _tong_hop_du_tru_mua_vat_tu_tai_khoa_khong_duyet_tong_hop_du_tru_mua_vat_tu_tai_khoa_khong_duyet_component__WEBPACK_IMPORTED_MODULE_21__["TongHopDuTruMuaVatTuTaiKhoaKhongDuyetComponent"],
                        _tong_hop_du_tru_mua_vat_tu_tai_khoa_xem_chi_tiet_shared_du_tru_mua_vat_tu_tai_khoa_xem_chi_tiet_shared_component__WEBPACK_IMPORTED_MODULE_22__["TongHopDuTruMuaVatTuTaiKhoaChiTietSharedComponent"],
                        _phieu_mua_du_tru_tai_khoa_phieu_mua_du_tru_tai_khoa_component__WEBPACK_IMPORTED_MODULE_23__["PhieuMuaTruTaiKhoaComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _tong_hop_du_tru_mua_vat_tu_tai_khoa_routing_module__WEBPACK_IMPORTED_MODULE_3__["TongHopDuTruMuaVatTuTaiKhoaRoutingModule"],
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
                        _yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_module__WEBPACK_IMPORTED_MODULE_24__["YeuCauMuaVatTuModule"]
                    ],
                    entryComponents: [
                        _phieu_tong_hop_du_tru_mua_vat_tu_tai_khoa_duyet_phieu_tong_hop_du_tru_mua_vat_tu_tai_khoa_duyet_component__WEBPACK_IMPORTED_MODULE_19__["PhieuTongHopDuTruMuaVatTuTaiKhoaDuyetComponent"],
                        _gui_tong_hop_du_tru_mua_vat_tu_tai_khoa_confirm_gui_tong_hop_du_tru_mua_vat_tu_tai_khoa_confirm_component__WEBPACK_IMPORTED_MODULE_20__["GuiTongHopDuTruMuaVatTuTaiKhoaConfirmComponent"],
                        _tong_hop_du_tru_mua_vat_tu_tai_khoa_khong_duyet_tong_hop_du_tru_mua_vat_tu_tai_khoa_khong_duyet_component__WEBPACK_IMPORTED_MODULE_21__["TongHopDuTruMuaVatTuTaiKhoaKhongDuyetComponent"],
                        _phieu_mua_du_tru_tai_khoa_phieu_mua_du_tru_tai_khoa_component__WEBPACK_IMPORTED_MODULE_23__["PhieuMuaTruTaiKhoaComponent"]
                    ]
                })
            ], TongHopDuTruMuaVatTuTaiKhoaModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=nhap-xuat-vat-tu-tong-hop-du-tru-mua-vat-tu-tai-khoa-tong-hop-du-tru-mua-vat-tu-tai-khoa-module-es2015.js.map
//# sourceMappingURL=nhap-xuat-vat-tu-tong-hop-du-tru-mua-vat-tu-tai-khoa-tong-hop-du-tru-mua-vat-tu-tai-khoa-module-es5.js.map
//# sourceMappingURL=nhap-xuat-vat-tu-tong-hop-du-tru-mua-vat-tu-tai-khoa-tong-hop-du-tru-mua-vat-tu-tai-khoa-module-es5.js.map