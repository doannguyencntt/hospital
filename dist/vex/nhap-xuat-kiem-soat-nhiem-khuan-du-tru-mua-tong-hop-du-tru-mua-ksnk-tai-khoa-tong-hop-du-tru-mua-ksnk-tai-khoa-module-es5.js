(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nhap-xuat-kiem-soat-nhiem-khuan-du-tru-mua-tong-hop-du-tru-mua-ksnk-tai-khoa-tong-hop-du-tru-mua-ksnk-tai-khoa-module"], {
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
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/ds-tong-hop-du-tru-mua-ksnk-tai-khoa/ds-tong-hop-du-tru-mua-ksnk-tai-khoa.component.html": 
        /*!******************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/ds-tong-hop-du-tru-mua-ksnk-tai-khoa/ds-tong-hop-du-tru-mua-ksnk-tai-khoa.component.html ***!
          \******************************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n            {Title:'Nhập Xuất',Path:''}\n            ,{Title:'Hành chính - KSNK',Path:''}\n            ,{Title:'Dự Trù Mua',Path:''}\n            ,{Title:'THDT Mua Tại Khoa',Path:'',Active:true}\n            ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n\n        <div class=\"card overflow-auto -mt-15\">\n            <kendo-tabstrip fxFlex=\"100%\" class=\"tab-no-padding-content field-set-p\"\n                (tabSelect)=\"chuyenDen('card1', $event)\">\n                <kendo-tabstrip-tab [selected]=\"lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy\">\n                    <ng-template kendoTabTitle>\n                        CHỜ XỬ LÝ   \n                    </ng-template>\n                    <ng-template kendoTabContent>\n                        <kendo-splitter>\n                            <kendo-splitter-pane [collapsible]=\"true\" class=\"sticky-panelbar\">\n                                <div class=\"\">\n                                    <kendo-panelbar class=\"m-1\">\n                                        <kendo-panelbar-item expanded=\"true\" class=\"panelbar-item\">\n                                            <ng-template kendoPanelBarContent>\n                                                <div class=\"card overflow-auto -mt-15\">\n                                                    <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n                                                        [useActionDefault]=\"false\"\n                                                        [additionalSearchString]=\"addtionStringDefault\"\n                                                        (extOnDataBound)=\"onDataBound($event)\" [lazyLoadPage]=\"true\"\n                                                        [useHeaderDefault]=\"false\" [allowSortDefault]=\"false\"\n                                                        [checkboxAble]=\"false\" pageSize=\"50\" #gridChoDuyet\n                                                        [sort]=\"sortDuTruChoXuLy\"\n                                                        urlGetData=\"YeuCauMuaKSNK/GetDanhSachDuyetMuaDuTruTaiKhoaForGridAsync\"\n                                                        urlGetTotalPage=\"YeuCauMuaKSNK/GetTotalDanhSachDuyetMuaDuTruTaiKhoaForGridAsync\"\n                                                        [headerTemplate]=\"headerTemplate\" [groups]=\"groups\"\n                                                        [detailTemplate]=\"detailTemplate\" heightToolbar=\"200\">\n                                                        <ng-template #detailTemplate let-dataItem>\n                                                            <app-grid [gridColumns]=\"gridChildThuocVacXinColumns\"\n                                                                [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                                                                [sort]=\"sortDuTruChild\" [showStt]=\"true\"\n                                                                [groups]=\"groupChiTietTabChoGoi\"\n                                                                [urlGetData]=\"urlGetDataGridChildAsyncChoXuLy\"\n                                                                [additionalSearchString]=\"dataItem.Id\"\n                                                                [urlGetTotalPage]=\"urlGetTotalPageGridChildChoXuLy\"\n                                                                [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                                                                [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                                                                [autoHeight]=\"true\">\n                                                            </app-grid>\n                                                        </ng-template>\n                                                    </app-grid>\n                                                </div>\n                                            </ng-template>\n                                        </kendo-panelbar-item>\n                                    </kendo-panelbar>\n                                </div>\n                            </kendo-splitter-pane>\n                        </kendo-splitter>\n                    </ng-template>\n                </kendo-tabstrip-tab>\n                <kendo-tabstrip-tab [selected]=\"lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy\">\n                    <ng-template kendoTabTitle>\n                        ĐÃ GỬI\n                    </ng-template>\n                    <ng-template kendoTabContent>\n                        <kendo-splitter>\n                            <kendo-splitter-pane [collapsible]=\"true\" class=\"sticky-panelbar\">\n                                <div class=\"\">\n                                    <kendo-panelbar class=\"m-1\">\n                                        <kendo-panelbar-item expanded=\"true\" class=\"panelbar-item\">\n                                            <ng-template kendoPanelBarContent>\n                                                <div class=\"card overflow-auto -mt-15\">\n                                                    <app-grid [gridColumns]=\"gridDaXuLyColumns\" #gridChildDaXuLy\n                                                        [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                                                        [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\"\n                                                        [additionalSearchString]=\"addtionStringDefaultDaXuLy\"\n                                                        [allowSortDefault]=\"false\" [checkboxAble]=\"false\" pageSize=\"50\"\n                                                        urlGetData=\"YeuCauMuaKSNK/GetDataTHDTTaiKhoaDaXuLyForGridAsync\"\n                                                        urlGetTotalPage=\"YeuCauMuaKSNK/GetTotalTHDTTaiKhoaDaXuLyForGridAsync\"\n                                                        [headerTemplate]=\"headerTemplate1\"\n                                                        [sort]=\"sortDaGoi\"\n                                                        [detailTemplate]=\"detailTemplate1\" heightToolbar=\"200\">\n                                                        <ng-template #detailTemplate1 let-dataItem>\n                                                            <app-grid [gridColumns]=\"gridDaXuLyChiTietColumns\"\n                                                                [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                                                                [showStt]=\"true\"\n                                                                urlGetData=\"YeuCauMuaKSNK/GetDataTHDTTaiKhoaDaXuLyForGridAsyncDetail\"\n                                                                urlGetTotalPage=\"YeuCauMuaKSNK/GetTotalTHDTTaiKhoaDaXuLyForGridAsyncDetail\"\n                                                                [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                                                                searchString=\"{{dataItem.Id}}\" [checkboxAble]=\"false\"\n                                                                [lazyLoadPage]=\"true\" [autoHeight]=\"true\"\n                                                                [detailTemplate]=\"detailTemplateChild\">\n                                                                <ng-template #detailTemplateChild let-dataItem>\n                                                                    <app-grid\n                                                                        [gridColumns]=\"gridDaXuLyChiTietChildColumns\"\n                                                                        [documentType]=\"documentType\"\n                                                                        [useAddDeault]=\"false\"\n                                                                        [urlGetData]=\"urlGetDataDaXuLyChiTietChild\"\n                                                                        [urlGetTotalPage]=\"urlGetTotalDaXuLyChiTietChild\"\n                                                                        [additionalSearchString]=\"dataItem.Id\"\n                                                                        [useHeaderDefault]=\"false\"\n                                                                        [useActionDefault]=\"false\"\n                                                                        [groups]=\"groupDaXuLyChiTiets\"\n                                                                        [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                                                                        [autoHeight]=\"true\" [showStt]=\"true\">\n                                                                    </app-grid>\n                                                                </ng-template>\n                                                            </app-grid>\n                                                        </ng-template>\n                                                    </app-grid>\n                                                </div>\n                                            </ng-template>\n                                        </kendo-panelbar-item>\n                                    </kendo-panelbar>\n                                </div>\n                            </kendo-splitter-pane>\n                        </kendo-splitter>\n                    </ng-template>\n                </kendo-tabstrip-tab>\n                <kendo-tabstrip-tab [selected]=\"lstStatusSelectTabTHDTKhoa.selectedTabTuChoi\">\n                    <ng-template kendoTabTitle>\n                        TỪ CHỐI\n                    </ng-template>\n                    <ng-template kendoTabContent>\n                        <kendo-splitter>\n                            <kendo-splitter-pane [collapsible]=\"true\" class=\"sticky-panelbar\">\n                                <div class=\"\">\n                                    <kendo-panelbar class=\"m-1\">\n                                        <kendo-panelbar-item expanded=\"true\" class=\"panelbar-item\">\n                                            <ng-template kendoPanelBarContent>\n                                                <div class=\"card overflow-auto -mt-15\">\n                                                    <app-grid [gridColumns]=\"gridTuChoiXuLyColumns\"\n                                                        [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                                                        [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\"\n                                                        #gridChildTuChoi [allowSortDefault]=\"false\"\n                                                        [urlGetData]=\"urlGetDataTuChoi\"\n                                                        [additionalSearchString]=\"addtionStringDefaultTuChoi\"\n                                                        [urlGetTotalPage]=\"urlGetTotalPageTuChoi\" [checkboxAble]=\"false\"\n                                                        pageSize=\"50\" [headerTemplate]=\"headerTemplate2\"\n                                                        [detailTemplate]=\"detailTemplate2\" heightToolbar=\"200\">\n                                                        <ng-template #detailTemplate2 let-dataItem>\n                                                            <app-grid [gridColumns]=\"gridChildTuChoiChildColumns\"\n                                                                [showStt]=\"true\" [documentType]=\"documentType\"\n                                                                [useAddDeault]=\"false\" [sort]=\"sortDuTruChild\"\n                                                                [groups]=\"groupTuChois\"\n                                                                [urlGetData]=\"urlGetDataGridChildAsyncTuChoi\"\n                                                                [urlGetTotalPage]=\"urlGetTotalPageGridChildTuChoi\"\n                                                                [additionalSearchString]=\"dataItem.Id\"\n                                                                [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                                                                [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                                                                [autoHeight]=\"true\">\n                                                            </app-grid>\n                                                        </ng-template>\n\n                                                    </app-grid>\n                                                </div>\n                                            </ng-template>\n                                        </kendo-panelbar-item>\n                                    </kendo-panelbar>\n                                </div>\n                            </kendo-splitter-pane>\n                        </kendo-splitter>\n                    </ng-template>\n                </kendo-tabstrip-tab>\n            </kendo-tabstrip>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n\n<!-- template dang chờ duyêt  -->\n<ng-template #soPhieuTemplate let-dataItem>\n    <div class=\"text-center\" kendoTooltip>\n        <a (click)=\"chiTiet(dataItem.Id, dataItem.TrangThaiDuTru)\">\n            <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.SoPhieu}}\">\n                {{dataItem.SoPhieu}}\n            </p>\n        </a>\n    </div>\n</ng-template>\n<ng-template #headerTemplate>\n    <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <app-checkbox name=\"cho-duyet\" class=\"ml-2\" value=\"coduyet\"\n            [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.ChoDuyet\"\n            (modelChange)=\"trangThaiCheckBox($event, 'choduyet', 0)\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n            fxLayoutAlign=\"start center\" label=\"Chờ duyệt\">\n        </app-checkbox>\n        <app-checkbox name=\"co-goi\" class=\"ml-2\" value=\"coduyet\"\n            (modelChange)=\"trangThaiCheckBox($event, 'chogoi', 0)\"\n            [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.DaDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n            fxLayoutAlign=\"start center\" label=\"Chờ gửi\">\n        </app-checkbox>\n        <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n            fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 10px;\">\n            <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n            <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                type=\"search\" name=\"searchString\" [(ngModel)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.SearchString\"\n                (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n        </div>\n        <app-daterangepicker style=\"margin-left: 5px;\" id=\"range-ngay-yeu-cau\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n            [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate\" label=\"Yêu cầu từ ngày - đến ngày\"\n            (keyup)=\"onKey($event)\" (modelChange)=\"timKiem()\" (blur)=\"blur()\" class=\"mt-1 on-header\">\n        </app-daterangepicker>\n        <span fxFlex></span>\n\n    </div>\n</ng-template>\n<ng-template #nhomGroupHeaderTemplate let-value=\"value\" let-dataItem let-aggregates=\"aggregates\">\n    <div fxFlex=\"100%\">\n        <strong fxFlex=\"15%\"  [ngStyle]=\"{'color':value !== 'Chờ duyệt' ? '#afb42b' : 'sandybrown' }\">\n            <span>{{theFirstValueFormat(value)}}({{aggregates.TrangThai.count}})</span>\n        </strong>\n        <strong fxFlex=\"70%\" *ngIf=\"value !== 'Chờ duyệt'\">\n            <span fxFlex=\"60%\">Kỳ dự trù: <span style=\"color:#afb42b\">{{theFirstValueFormatChuKy(value)}}</span></span>\n        </strong>\n        <button fxFlex=\"15%\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n            (click)=\"guiKhoaDuyetTatCa(value)\" *ngIf=\"value !== 'Chờ duyệt'\" style=\"margin-right: -25px\">\n            Gửi khoa hành chính duyệt\n        </button>\n    </div>\n</ng-template>\n\n<ng-template #actionTemplate let-dataItem>\n    <button *ngIf=\"dataItem.TrangThai === 'Chờ duyệt'\" type=\"button\" (click)=\"TuChoi(dataItem.Id)\" color=\"warn\"\n        mat-raised-button><i class=\"ft-save mr-1\"></i> Từ chối</button>\n    <button *ngIf=\"dataItem.TrangThai === 'Chờ duyệt'\" style=\"margin-left: 3px\" type=\"button\"\n        (click)=\"PheDuyet(dataItem.Id)\" color=\"primary\" mat-raised-button><i class=\"ft-save mr-1\"></i>Duyệt</button>\n    <button *ngIf=\"dataItem.TrangThai !== 'Chờ duyệt'\" type=\"button\" (click)=\"HuyDuyet(dataItem.Id)\" color=\"warn\"\n        mat-raised-button><i class=\"ft-save mr-1\"></i> Hủy duyệt</button>\n</ng-template>\n<!--End template dang chờ duyêt  -->\n\n<!-- template Đã xử lý -->\n\n<!-- <ng-template #soPhieuTemplate let-dataItem>\n    <div class=\"text-center\" kendoTooltip>\n        <a (click)=\"chiTiet(dataItem.Id, dataItem.TinhTrang)\">\n            <p kendoTooltip class=\"reverse-ellipsis l\"\n                title=\"{{dataItem.SoPhieu}}\">\n                {{dataItem.SoPhieu}}</p>\n        </a>\n    </div>\n</ng-template> -->\n\n<ng-template #headerTemplate1>\n    <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <app-checkbox name=\"cho-duyet\" (modelChange)=\"trangThaiCheckBox($event,'choduyet',1)\" class=\"ml-2\"\n            value=\"coduyet\" [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.DaGuiChoDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs\n            fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Đã gửi & Chờ duyệt\">\n        </app-checkbox>\n        <app-checkbox name=\"co-goi\" (modelChange)=\"trangThaiCheckBox($event,'daduyet',1)\" class=\"ml-2\" value=\"coduyet\"\n            [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.DaDuyetDaXuLy\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n            fxLayoutAlign=\"start center\" label=\"Đã duyệt\">\n        </app-checkbox>\n        <app-checkbox name=\"co-goi\" (modelChange)=\"trangThaiCheckBox($event,'tuchoi',1)\" class=\"ml-2\" value=\"coduyet\"\n            [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TuChoiDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n            fxLayoutAlign=\"start center\" label=\"Từ chối\">\n        </app-checkbox>\n        <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n            fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 10px;\">\n            <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n            <input [formControl]=\"searchCtrlDaXuLy\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                type=\"search\" name=\"searchCtrlDaXuLy\"\n                [(ngModel)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.SearchStringDaXuLy\" (keyup)=\"onKey($event)\"\n                (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n        </div>\n        <app-daterangepicker style=\"margin-left: 5px;\" id=\"range-ngay-yeu-cau\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n            [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy\" label=\"Yêu cầu từ ngày - đến ngày\"\n            (keyup)=\"onKey($event)\" (modelChange)=\"timKiem()\" (blur)=\"blur()\" class=\"mt-1 on-header\">\n        </app-daterangepicker>\n        <span fxFlex></span>\n    </div>\n</ng-template>\n\n<ng-template #ngayYeuCauDaXuLyTemplate let-dataItem>\n    {{dataItem.NgayYeuCauDisplay}}\n</ng-template>\n<ng-template #ngayYeuCauDetailDaXuLyTemplate let-dataItem>\n    {{dataItem.NgayYeuCauDisplay}}\n</ng-template>\n<ng-template #ngayKhoDuocDaXuLyTemplate let-dataItem>\n    {{dataItem.NgayKhoDuocDuyetDisplay}}\n</ng-template>\n<ng-template #ngayGiamDocDaXuLyTemplate let-dataItem>\n    {{dataItem.NgayGiamDocDuyetDisplay}}\n</ng-template>\n<ng-template #ngayTruongKhoaDaXuLyTemplate let-dataItem>\n    {{dataItem.NgayTruongKhoaDuyetDisplay}}\n</ng-template>\n\n<ng-template #tinhTrangTemplate let-dataItem>\n    <label *ngIf=\"dataItem.TinhTrang == 0\" style=\"color: blue;\">\n        <span>Đã gửi & Chờ duyệt</span>\n    </label>\n    <label *ngIf=\"dataItem.TinhTrang == 1\" class=\"green\">\n        <span>Đã duyệt</span>\n    </label>\n    <label *ngIf=\"dataItem.TinhTrang == 2\" class=\"red\">\n        <span>Từ chối</span>\n    </label>\n</ng-template>\n\n<ng-template #soPhieuDaXuLyTemplate let-dataItem>\n    <div class=\"text-center\" kendoTooltip>\n        <a (click)=\"chiTietDaXuLyParent(dataItem.Id)\">\n            <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.SoPhieu}}\">\n                {{dataItem.SoPhieu}}\n            </p>\n        </a>\n    </div>\n</ng-template>\n\n<ng-template #soPhieuDaXuLyChiTietTemplate let-dataItem>\n    <div class=\"text-center\" kendoTooltip>\n        <a (click)=\"chiTietDaXuLy(dataItem.Id, dataItem.TinhTrang, 1)\">\n            <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.SoPhieu}}\">\n                {{dataItem.SoPhieu}}\n            </p>\n        </a>\n    </div>\n</ng-template>\n<!--End template Đã xử lý -->\n\n\n<!-- template Từ chối -->\n<ng-template #headerTemplate2>\n    <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n            fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 10px;\">\n            <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n            <input [formControl]=\"searchCtrlTuChoi\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                type=\"search\" name=\"SearchStringTuChoi\"\n                [(ngModel)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.SearchStringTuChoi\" (keyup)=\"onKey($event)\"\n                (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n        </div>\n        <app-daterangepicker style=\"margin-left: 5px;\" id=\"range-ngay-yeu-cau\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n            [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi\" label=\"Yêu cầu từ ngày - đến ngày\"\n            (keyup)=\"onKey($event)\" (modelChange)=\"timKiem()\" (blur)=\"blur()\" class=\"mt-1 on-header\">\n        </app-daterangepicker>\n        <span fxFlex></span>\n    </div>\n</ng-template>\n<ng-template #soPhieuTuChoiTemplate let-dataItem>\n    <div class=\"text-center\" kendoTooltip>\n        <a (click)=\"chiTietDaXuLy(dataItem.Id, 2, 1)\">\n            <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.SoPhieu}}\">\n                {{dataItem.SoPhieu}}\n            </p>\n        </a>\n    </div>\n</ng-template>\n\n<ng-template #nhomGroupTuChoiHeaderTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n</ng-template>\n\n<ng-template #ngayYeuCauTuChoiTemplate let-dataItem>\n    {{dataItem.NgayYeuCauDisplay}}\n</ng-template>\n\n<ng-template #ngayTuChoiTemplate let-dataItem>\n    {{dataItem.NgayTuChoiDisplay}}\n</ng-template>\n<!--End template Từ chối -->\n\n<ng-template #nhomChiTietTabChoGoiTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n</ng-template>\n\n\n<ng-template #nhomGroupDaXuLyChiTietHeaderTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n</ng-template>\n\n<ng-template #khoTongTonTemplate let-dataItem>\n    <ng-template #templateHdInfo let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr *ngFor=\"let hdt of khos\">\n                <td>{{hdt.Ten}}:</td>\n                <td>{{hdt.SLTon}}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <div class=\"kho-tong-ton-ng-template\" kendoTooltip>\n        <span class=\"kho-tong-ton-label\">{{dataItem.HDChuaNhap}}</span>\n        <span *ngIf=\"dataItem.HDChuaNhap != 0\" class=\"kho-tong-ton-ng-template\" kendoTooltip #tooltip=\"kendoTooltip\"\n            tooltipClass=\"tooltip-block\" position=\"left\" [tooltipTemplate]=\"templateHdInfo\" filter=\"*\">\n            <mat-icon [icIcon]=\"icInfo\" (mouseover)=\"TooltipCustom(dataItem)\" class=\"info\"></mat-icon>\n        </span>\n    </div>\n</ng-template>\n\n<ng-template #hdChuaNhapTemplate let-dataItem>\n    <ng-template #templateInfo let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr *ngFor=\"let kho of hdts\">\n                <td>{{kho.Ten}}:</td>\n                <td>{{kho.SLTon}}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <div class=\"kho-tong-ton-ng-template\" kendoTooltip>\n        <span class=\"kho-tong-ton-label\">{{dataItem.KhoTongTon}}</span>\n        <span *ngIf=\"dataItem.KhoTongTon != 0\" class=\"kho-tong-ton-ng-template\" kendoTooltip #tooltip=\"kendoTooltip\"\n            tooltipClass=\"tooltip-block\" position=\"left\" [tooltipTemplate]=\"templateInfo\" filter=\"*\">\n            <mat-icon [icIcon]=\"icInfo\" (mouseover)=\"TooltipCustom(dataItem)\" class=\"info\"></mat-icon>\n        </span>\n    </div>\n</ng-template>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.html": 
        /*!********************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.html ***!
          \********************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>IN PHIẾU DỰ TRÙ MUA KIỂM SOÁT NHIỄM KHUẨN TẠI KHOA </div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\"><iframe width=\"100%\" [src]=\"src| safe\" allowTransparency=\"true\" background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' class=\"mr-1 mt-2\" textPrint=\"In phiếu\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-detail/tong-hop-du-tru-mua-ksnk-tai-khoa-detail.component.html": 
        /*!**************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-detail/tong-hop-du-tru-mua-ksnk-tai-khoa-detail.component.html ***!
          \**************************************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Hành chính - KSNK',Path:''}\n                ,{Title:'Dự Trù Mua',Path:''}\n                ,{Title:'THDT Mua Tại Khoa',Path:'/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-khoa' , queryParams: {holdQuery : true}}                \n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chi tiết duyệt dự trù mua kiểm soát nhiễm khuẩn</h2>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == true\"\n                    style=\"color:green\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == false\"\n                    style=\"color:red\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == null\"\n                    style=\"color:orange\">{{trangThaiVo.Ten}}</b>\n            </div>\n            <!-- <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-du-tru-mua-ksnk-tai-khoa-xem-chi-tiet-shared [trangThaiVo]=\"trangThaiVo\">\n                </app-du-tru-mua-ksnk-tai-khoa-xem-chi-tiet-shared>\n            </div> -->\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" (click)=\"inPhieu()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i>\n                        In phiếu dự trù</button>\n                    <button type=\"button\" title=\"Phím tắt: Esc\" (click)=\"cancel()\" mat-button\n                        class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i> Quay lại</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-duyet/tong-hop-du-tru-mua-ksnk-tai-khoa-duyet.component.html": 
        /*!************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-duyet/tong-hop-du-tru-mua-ksnk-tai-khoa-duyet.component.html ***!
          \************************************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập Xuất',Path:''}\n                ,{Title:'Hành chính - KSNK',Path:''}\n                ,{Title:'Dự Trù Mua',Path:''},\n                {Title:'THDT Mua Tại Khoa',Path:'/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-khoa', queryParams: {holdQuery : true},Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b render-text\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 *ngIf=\"tabDaXuLy== 'DaXuLy'\"  class=\"title m-0\" >Chi Tiết Tổng Hợp Dự Trù Mua Kiểm Soát Nhiễm Khuẩn</h2>\n                <h2 *ngIf=\"tabDaXuLy!= 'DaXuLy'\"  class=\"title m-0\" >Duyệt Tổng Hợp Dự Trù Mua Kiểm Soát Nhiễm Khuẩn</h2>\n                <!-- <label *ngIf=\"tabDaXuLy== 'DaXuLy' && danhSachTongHopDuTruMuaVatTuTaiKhoa.TinhTrang == 0\"  style=\"color: blue;\">\n                    <span>Đã gửi & Chờ duyệt</span>\n                </label>\n                <label *ngIf=\"tabDaXuLy== 'DaXuLy' && danhSachTongHopDuTruMuaVatTuTaiKhoa.TinhTrang == 1\" class=\"green\">\n                    <span>Đã duyệt</span>\n                </label>\n                <label *ngIf=\"tabDaXuLy== 'DaXuLy' && danhSachTongHopDuTruMuaVatTuTaiKhoa.TinhTrang == 2\" class=\"red\">\n                    <span>Từ chối</span>\n                </label> -->\n\n                <!-- Đã gửi -->\n                <label *ngIf=\"tabDaXuLy== 'DaXuLy' && danhSachTongHopDuTruMuaVatTuTaiKhoa.TinhTrang == 0\"\n                    style=\"color: blue;\">\n                    <span>Đã gửi & Chờ duyệt</span>\n                </label>\n                <label *ngIf=\"tabDaXuLy== 'DaXuLy' && danhSachTongHopDuTruMuaVatTuTaiKhoa.TinhTrang == 1\" class=\"green\">\n                    <span>Đã duyệt</span>\n                </label>\n                <label *ngIf=\"tabDaXuLy== 'DaXuLy' && danhSachTongHopDuTruMuaVatTuTaiKhoa.TinhTrang == 2\" class=\"red\">\n                    <span>Từ chối</span>\n                </label>\n\n                <!-- chờ gửi -->\n                <label *ngIf=\"tabDaXuLy!= 'DaXuLy' && danhSachTongHopDuTruMuaVatTuTaiKhoa.TinhTrang == 1\"\n                    style=\"color: sandybrown;\">\n                    <span>Chờ duyệt</span>\n                </label>\n                <label *ngIf=\"tabDaXuLy!= 'DaXuLy' && danhSachTongHopDuTruMuaVatTuTaiKhoa.TinhTrang == 0\"\n                    style=\"color: #afb42b;\">\n                    <span>Chờ gửi</span>\n                </label>\n                \n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-tong-hop-du-tru-mua-ksnk-tai-khoa-shared [tabSelected]=\"tabDaXuLy\"\n                    [validationErrorsVatTu]=\"validationErrors\" [isCreate]=\"true\">\n                </app-tong-hop-du-tru-mua-ksnk-tai-khoa-shared>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-shared/tong-hop-du-tru-mua-ksnk-tai-khoa-shared.component.html": 
        /*!**************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-shared/tong-hop-du-tru-mua-ksnk-tai-khoa-shared.component.html ***!
          \**************************************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <div fxFlex=\"100%\" *ngIf=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.LyDoGiamDocTuChoi !== undefined && \n    danhSachTongHopDuTruMuaVatTuTaiKhoa.LyDoGiamDocTuChoi !== null\">\n        <h4 style=\"color: red;\">Lý do: {{danhSachTongHopDuTruMuaVatTuTaiKhoa.LyDoGiamDocTuChoi}}</h4>\n    </div>\n\n    <div fxFlex=\"100%\" *ngIf=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.LyDoTruongKhoaTuChoi !== undefined && \n    danhSachTongHopDuTruMuaVatTuTaiKhoa.LyDoTruongKhoaTuChoi !== null\">\n        <h4 style=\"color: red;\">Lý do: {{danhSachTongHopDuTruMuaVatTuTaiKhoa.LyDoTruongKhoaTuChoi}}</h4>\n    </div>\n\n    <app-textbox id=\"soPhieu\" fxFlex=\"20\" fxFlex.sm=\"20\" [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.SoPhieu\"\n        [required]=\"true\" maxlength=\"250\" label=\"Số phiếu\" [disabled]=\"true\">\n    </app-textbox>\n\n    <app-combobox id=\"khoNhapId\" fxFlex=\"20\" fxFlex.sm=\"20\" [required]=\"true\"\n        [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.KhoNhapId\" [disabled]=\"true\"\n        [modelText]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TenKho\" url=\"YeuCauLinhVatTu/GetKhoCurrentUser\" label=\"Kho\"\n        [validationerror]=\"'KhoNhapId' | validationerror:validationErrors\">\n    </app-combobox>\n    <app-textbox id=\"KyDuTru\" fxFlex=\"20\" fxFlex.sm=\"20\" [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.KyDuTru\"\n        [required]=\"true\" maxlength=\"250\" label=\"Kỳ dự trù\" [disabled]=\"true\">\n    </app-textbox>\n\n    <app-textbox id=\"TenNhanVienYeuCau\" fxFlex=\"20\" fxFlex.sm=\"20\"\n        [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TenNhanVienYeuCau\" [required]=\"true\" maxlength=\"250\"\n        label=\"Người yêu cầu\" [disabled]=\"true\">\n    </app-textbox>\n    <app-datetimepicker id=\"ngayYeuCau\" fxFlex=\"20\" fxFlex.sm=\"20\"\n        [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.NgayYeuCau\" [disabled]=\"true\" [required]=\"true\"\n        label=\"Ngày yêu cầu\">\n    </app-datetimepicker>\n\n    <!-- Nhân viên kho dược và giám đốc duyệt -->\n    <app-textbox id=\"TenNhanVienKhoDuocDuyet\" fxFlex=\"20\" fxFlex.sm=\"20\" *ngIf=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TenNhanVienKhoDuocDuyet !== undefined && \n   danhSachTongHopDuTruMuaVatTuTaiKhoa.TenNhanVienKhoDuocDuyet !== null\"\n        [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TenNhanVienKhoDuocDuyet\" [required]=\"true\" maxlength=\"250\"\n        label=\"Nhân viên kho dược duyệt\" [disabled]=\"true\">\n    </app-textbox>\n    <app-datetimepicker id=\"NgayKhoDuocDuyet\" fxFlex=\"20\" fxFlex.sm=\"20\" *ngIf=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TenNhanVienKhoDuocDuyet !== undefined && \n   danhSachTongHopDuTruMuaVatTuTaiKhoa.TenNhanVienKhoDuocDuyet !== null\"\n        [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.NgayKhoDuocDuyet\" [disabled]=\"true\" [required]=\"true\"\n        label=\"Ngày kho dược duyệt\">\n    </app-datetimepicker>\n    <app-textbox id=\"TenGiamDocDuyet\" fxFlex=\"20\" fxFlex.sm=\"20\" *ngIf=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TenGiamDocDuyet !== undefined && \ndanhSachTongHopDuTruMuaVatTuTaiKhoa.TenGiamDocDuyet !== null\"\n        [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TenGiamDocDuyet\" [required]=\"true\" maxlength=\"250\"\n        label=\"Tên giám đốc\" [disabled]=\"true\">\n    </app-textbox>\n    <app-datetimepicker id=\"NgayGiamDocDuyet\" fxFlex=\"20\" fxFlex.sm=\"20\" *ngIf=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TenGiamDocDuyet !== undefined && \n                           danhSachTongHopDuTruMuaVatTuTaiKhoa.TenGiamDocDuyet !== null\"\n        [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.NgayGiamDocDuyet\" [disabled]=\"true\" [required]=\"true\"\n        label=\"Ngày giám đốc duyệt\">\n    </app-datetimepicker>\n    <!-- <app-textbox id=\"LyDoGiamDocTuChoi\" fxFlex=\"80\" fxFlex.sm=\"80\" *ngIf=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.LyDoGiamDocTuChoi !== undefined && \ndanhSachTongHopDuTruMuaVatTuTaiKhoa.LyDoGiamDocTuChoi !== null\"\n        [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.LyDoGiamDocTuChoi\" [disabled]=\"true\" maxlength=\"250\"\n        label=\"Lý do giám đốc từ chối\">\n    </app-textbox> -->\n    <!-- Nhân viên kho dược và giám đốc duyệt -->\n\n    <app-textbox id=\"GhiChu\" fxFlex=\"100\" fxFlex.sm=\"100\" [(model)]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.GhiChu\"\n        [disabled]=\"true\" maxlength=\"250\" label=\"Ghi chú\">\n    </app-textbox>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông tin chi tiết</h3>\n    <div fxFlex=\"100%\" [style.display]=\"tabSelected == 'DaXuLy' ? 'block' : 'none'\">\n        <!-- <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n            [urlGetData]=\"YeuCauMuaKSNK/GetDuTruMuaKSNKTHDTChiTietForGridAsync\"\n            [urlGetTotalPage]=\"YeuCauMuaKSNK/GetTotalDuTruMuaKSNKTHDTChiTietForGridAsync\"\n            [additionalSearchString]=\"duTruMuaVatTuId\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n            [groups]=\"groups\" [checkboxAble]=\"false\" [detailTemplate]=\"detailTemplate\" [lazyLoadPage]=\"true\"\n            [autoHeight]=\"true\" [showStt]=\"true\">\n            <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n                <strong>{{value}}</strong>\n            </ng-template>\n        </app-grid>\n        <ng-template #detailTemplate let-dataItem>\n            <app-grid [gridColumns]=\"gridColumnsChild\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                [urlGetData]=\"YeuCauMuaKSNK/GetDuTruMuaVatTuTaiKhoaChiTietForGridAsyncChild\"\n                [urlGetTotalPage]=\"YeuCauMuaKSNK/GetTotalDuTruMuaVatTuTaiKhoaChiTietForGridAsyncChild\"\n                [autoHeight]=\"true\" [showStt]=\"true\"\n                [additionalSearchString]=\"dataItem.DuTruMuaVatTuTheoKhoaId + ';' + dataItem.LaBHYT + ';'  + dataItem.VatTuId\">\n            </app-grid>\n        </ng-template> -->\n\n        <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n            [urlGetData]=\"urlGetDataDaXuLy\" [urlGetTotalPage]=\"urlGetTotalPageDaXuLy\"\n            [additionalSearchString]=\"duTruMuaVatTuId\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n            [groups]=\"groups\" [checkboxAble]=\"false\" [detailTemplate]=\"detailTemplate\" [lazyLoadPage]=\"true\"\n            [autoHeight]=\"true\" [showStt]=\"true\" (extOnDataBound)=\"onDataBound($event)\">\n            <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n                <strong>{{value}}</strong>\n            </ng-template>\n        </app-grid>\n        <ng-template #detailTemplate let-dataItem>\n            <app-grid [gridColumns]=\"gridColumnsChild\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                [urlGetData]=\"urlGetDataDaXuLyChild\" [urlGetTotalPage]=\"urlGetTotalPageDaXuLyChild\" [autoHeight]=\"true\"\n                [showStt]=\"true\"\n                [additionalSearchString]=\"dataItem.DuTruMuaVatTuTheoKhoaId + ';' + dataItem.LaBHYT + ';'  + dataItem.VatTuId\">\n            </app-grid>\n        </ng-template>\n    </div>\n    <div fxFlex=\"100%\" [style.display]=\"tabSelected != 'DaXuLy' ? 'block' : 'none'\">\n        <app-grid [gridColumns]=\"gridChildThuocVacXinColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n            [sort]=\"sortDuTruChild\" [urlGetData]=\"urlGetDataGridChildAsync\" [additionalSearchString]=\"duTruMuaVatTuId\"\n            [urlGetTotalPage]=\"urlGetTotalPageGridChild\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n            [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" [autoHeight]=\"true\" (extOnDataBound)=\"onDataBound($event)\"\n            [groups]=\"groups\">\n        </app-grid>\n        <ng-template #nhomSLTKDuyet let-dataItem let-rowIndex=\"rowIndex\">\n            <app-textboxnumeric class=\"no-label\" [step]=\"100\" [(model)]=\"dataItem.SoLuongDuTruTruongKhoaDuyet\"\n              max=\"999999\" min=\"1\" [disabled]=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TinhTrang == 0 && tabSelected != 'DaXuLy'\">\n            </app-textboxnumeric>\n        </ng-template>\n        <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n            <strong>{{value}}</strong>\n        </ng-template>\n    </div>\n\n\n</div>\n\n<ng-template #khoTongTonTemplate let-dataItem>\n    <ng-template #templateHdInfo let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr *ngFor=\"let hdt of khos\">\n                <td>{{hdt.Ten}}:</td>\n                <td>{{hdt.SLTon}}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <div class=\"kho-tong-ton-ng-template\" kendoTooltip>\n        <span class=\"kho-tong-ton-label\">{{dataItem.HDChuaNhap}}</span>\n        <span *ngIf=\"dataItem.HDChuaNhap != 0\" class=\"kho-tong-ton-ng-template\" kendoTooltip #tooltip=\"kendoTooltip\"\n            tooltipClass=\"tooltip-block\" position=\"left\" [tooltipTemplate]=\"templateHdInfo\" filter=\"*\">\n            <mat-icon [icIcon]=\"icInfo\" (mouseover)=\"TooltipCustom(dataItem)\" class=\"info\"></mat-icon>\n        </span>\n    </div>\n</ng-template>\n\n<ng-template #hdChuaNhapTemplate let-dataItem>\n    <ng-template #templateInfo let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr *ngFor=\"let kho of hdts\">\n                <td>{{kho.Ten}}:</td>\n                <td>{{kho.SLTon}}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <div class=\"kho-tong-ton-ng-template\" kendoTooltip>\n        <span class=\"kho-tong-ton-label\">{{dataItem.KhoTongTon}}</span>\n        <span *ngIf=\"dataItem.KhoTongTon != 0\" class=\"kho-tong-ton-ng-template\" kendoTooltip #tooltip=\"kendoTooltip\"\n            tooltipClass=\"tooltip-block\" position=\"left\" [tooltipTemplate]=\"templateInfo\" filter=\"*\">\n            <mat-icon [icIcon]=\"icInfo\" (mouseover)=\"TooltipCustom(dataItem)\" class=\"info\"></mat-icon>\n        </span>\n    </div>\n</ng-template>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n    <button *ngIf=\"tabSelected == 'DaXuLy'\" type=\"button\" mat-button class=\"mr-1 align-left-fx\"\n        (click)=\"InPhieuTongHopTaiKhoa()\" mat-raised-button color=\"primary\"><i class=\"ft-arrow-left\"></i>\n        In phiếu tổng hợp tại khoa </button>\n    <button type=\"button\" *ngIf=\"tabSelected == 'DaXuLy'\" title=\"Phím tắt: Esc\" (click)=\"cancel()\" mat-button\n        class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i> Quay Lại</button>\n\n    <!-- Trường hợp chờ gửi  đang ở trạng thái chờ gửi thì các nút là Quay lại, HỦy duyệt 0 chờ duyet 1 chua duyet-->\n    <button *ngIf=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TinhTrang == 0 && tabSelected != 'DaXuLy'\" type=\"button\"\n        title=\"Phím tắt: Esc\" (click)=\"cancel()\" mat-button class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i>\n        Quay lại</button>\n    <button *ngIf=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TinhTrang == 0 && tabSelected != 'DaXuLy'\" type=\"button\"\n        (click)=\"HuyDuyet(duTruMuaVatTuId)\" color=\"warn\" mat-raised-button><i class=\"ft-save\"></i>Hủy Duyệt</button>\n\n    <!-- Trường hợp chửa gửi  đang ở trạng thái chờ gửi thì các nút là Quay lại, HỦy duyệt 0 chờ duyet 1 chua duyet-->\n    <button *ngIf=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TinhTrang === 1 && tabSelected != 'DaXuLy'\" type=\"button\"\n        title=\"Phím tắt: Esc\" (click)=\"cancel()\" mat-button class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i>\n        Hủy</button>\n    <button *ngIf=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TinhTrang === 1 && tabSelected != 'DaXuLy'\" type=\"button\"\n        (click)=\"TuChoi()\" color=\"warn\" mat-raised-button><i class=\"ft-save\"></i>Từ chối</button>\n    <button *ngIf=\"danhSachTongHopDuTruMuaVatTuTaiKhoa.TinhTrang === 1 && tabSelected != 'DaXuLy'\" type=\"button\"\n        (click)=\"PheDuyet(duTruMuaVatTuId)\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i>\n        Duyệt</button>\n</div>\n");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/ds-tong-hop-du-tru-mua-ksnk-tai-khoa/ds-tong-hop-du-tru-mua-ksnk-tai-khoa.component.scss": 
        /*!****************************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/ds-tong-hop-du-tru-mua-ksnk-tai-khoa/ds-tong-hop-du-tru-mua-ksnk-tai-khoa.component.scss ***!
          \****************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1LXRydS1tdWEvdG9uZy1ob3AtZHUtdHJ1LW11YS1rc25rLXRhaS1raG9hL2RzLXRvbmctaG9wLWR1LXRydS1tdWEta3Nuay10YWkta2hvYS9kcy10b25nLWhvcC1kdS10cnUtbXVhLWtzbmstdGFpLWtob2EuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/ds-tong-hop-du-tru-mua-ksnk-tai-khoa/ds-tong-hop-du-tru-mua-ksnk-tai-khoa.component.ts": 
        /*!**************************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/ds-tong-hop-du-tru-mua-ksnk-tai-khoa/ds-tong-hop-du-tru-mua-ksnk-tai-khoa.component.ts ***!
          \**************************************************************************************************************************************************************************************************/
        /*! exports provided: DsTongHopDuTruMuaKSNKTaiKhoaComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsTongHopDuTruMuaKSNKTaiKhoaComponent", function () { return DsTongHopDuTruMuaKSNKTaiKhoaComponent; });
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
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_ksnk_tai_khoa_model__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-ksnk-tai-khoa.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa.model.ts");
            // import { TongHopDuTruMuaKSNKTaiKhoaKhongDuyetComponent } from '../tong-hop-du-tru-mua-ksnk-tai-khoa-khong-duyet/tong-hop-du-tru-mua-ksnk-tai-khoa-khong-duyet.component';
            var DsTongHopDuTruMuaKSNKTaiKhoaComponent = /** @class */ (function () {
                function DsTongHopDuTruMuaKSNKTaiKhoaComponent(dialog, router, apiService, authService, notificationService, route, location) {
                    this.dialog = dialog;
                    this.router = router;
                    this.apiService = apiService;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.route = route;
                    this.location = location;
                    this.lstStatusSelectTabTHDTKhoa = new _tong_hop_du_tru_mua_ksnk_tai_khoa_model__WEBPACK_IMPORTED_MODULE_29__["ListStatusSelectTabTHDTKhoa"]();
                    this.icInfo = _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_25___default.a;
                    this.baseRoute = '/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-khoa';
                    this.urlGetDataTuChoi = 'YeuCauMuaKSNK/GetDataDuTruMuaKSNKTuChoiTaiKhoaForGridAsync';
                    this.urlGetTotalPageTuChoi = 'YeuCauMuaKSNK/GetTotalDuTruMuaKSNKTuChoiTaiKhoaForGridAsync';
                    this.urlGetDataGridChildAsyncChoXuLy = "YeuCauMuaKSNK/GetDuTruMuaKSNKDangChoXuLyTaiKhoaChiTietForGridAsync";
                    this.urlGetTotalPageGridChildChoXuLy = "YeuCauMuaKSNK/GetTotalDuTruMuaKSNKDangChoXuLyTaiKhoaChiTietForGridAsync";
                    this.urlGetDataGridChildAsyncTuChoi = 'YeuCauMuaKSNK/GetDSTHDTTuChoiChildForGridAsync';
                    this.urlGetTotalPageGridChildTuChoi = 'YeuCauMuaKSNK/GetTotalDSTHDTTuChoiChildForGridAsync';
                    this.urlGetDataDaXuLyChiTietChild = "YeuCauMuaKSNK/GetDuTruMuaKSNKChiTietForGridAsyncChild";
                    this.urlGetTotalDaXuLyChiTietChild = "YeuCauMuaKSNK/GetTotalDuTruMuaKSNKChiTietForGridAsyncChild";
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
                DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].THDTMuaTaiKSNK;
                    this.danhSachTongHopDuTruMuaVatTuTaiKhoa = new _tong_hop_du_tru_mua_ksnk_tai_khoa_model__WEBPACK_IMPORTED_MODULE_29__["TongHopDuTruMuaVatTuTaiKhoaSreach"]();
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
                DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype.backWithSearch = function () {
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
                DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype.onKey = function (event) {
                    if (event.key === 'Enter') {
                        this.timKiem();
                    }
                };
                DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype.TooltipCustom = function (duTruGiamDocDetail) {
                    this.khos = duTruGiamDocDetail.ThongTinChiTietTonKhoTongs.slice();
                    this.hdts = duTruGiamDocDetail.ThongTinChiTietTonHDTs.slice();
                };
                DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype.searchChanges = function (event) {
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
                DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype.theFirstValueFormat = function (str) {
                    var strGroup = str.split('.');
                    if (strGroup.length != 0) {
                        return strGroup[0];
                    }
                };
                DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype.theFirstValueFormatChuKy = function (str) {
                    var strGroup = str.split('.');
                    if (strGroup.length != 0) {
                        if (strGroup[1] !== undefined) {
                            return strGroup[1];
                        }
                    }
                };
                DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype.timKiem = function () {
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
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].setItem("additionalSearchStringTHDTVatTuTaiKhoaSelectedTabNhomKSNK", queryStringLstselectedTab);
                    }
                    else if (this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy == true) {
                        if (this.gridChildDaXuLy != undefined && this.gridChildDaXuLy != null) {
                            this.gridChildDaXuLy._additionalSearchString = queryString;
                            this.gridChildDaXuLy.search();
                        }
                        this.unSelectedTab();
                        this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy = true;
                        var queryStringLstselectedTab = JSON.stringify(this.lstStatusSelectTabTHDTKhoa);
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].setItem("additionalSearchStringTHDTVatTuTaiKhoaSelectedTabNhomKSNK", queryStringLstselectedTab);
                    }
                    else {
                        if (this.gridChildTuChoi != undefined && this.gridChildTuChoi != null) {
                            this.gridChildTuChoi._additionalSearchString = queryString;
                            this.gridChildTuChoi.search();
                        }
                        this.unSelectedTab();
                        this.lstStatusSelectTabTHDTKhoa.selectedTabTuChoi = true;
                        var queryStringLstselectedTab = JSON.stringify(this.lstStatusSelectTabTHDTKhoa);
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].setItem("additionalSearchStringTHDTVatTuTaiKhoaSelectedTabNhomKSNK", queryStringLstselectedTab);
                    }
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].setItem('additionalSearchStringTHDTVatTuTaiKhoaSelectedTabNhomKSNK', queryString);
                };
                DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype.guiKhoaDuyetTatCa = function (val) {
                    var kyDuTruMuaDuocPhamVatTuId = this.tongHopDuTruMuaVatTuTaiKhoa.
                        filter(function (cc) { return cc.TrangThai === val; }).map(function (cc) { return cc.KyDuTruMuaDuocPhamVatTuId; })[0];
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
                        this.router.navigate(['/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-khoa/gui/' + kyDuTruMuaDuocPhamVatTuId]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype.tuChoiDuyet = function (id) { };
                DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype.huyDuyet = function (id) { };
                DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype.chiTiet = function (id, trangThai) {
                    if (trangThai === 1 || trangThai === 0) { // Đã duyệt hoặc từ chối
                        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
                            this.router.navigate(['/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-khoa/chi-tiet/' + id]);
                        }
                        else {
                            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                        }
                    }
                    else { // Chưa duyệt
                        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
                            this.router.navigate(['/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-khoa/duyet/' + id + "/" + false]);
                        }
                        else {
                            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                        }
                    }
                };
                DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype.chiTietTuChoi = function (id) {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
                        this.router.navigate(['/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-khoa/chi-tiet/' + id]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype.inPhieuLinh = function (id) {
                };
                DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang tải dữ liệu...' },
                    });
                };
                DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype.TuChoi = function (id) {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
                        if (this.confrim != null) {
                            this.dialog.closeAll();
                            this.confrim = null;
                        }
                        this.confrim = this.dialog.open(null, {
                            disableClose: true,
                            width: '400px',
                            height: '300px',
                        }).afterClosed().subscribe(function (result) {
                            if (result !== '' && result) {
                                _this.thongTinLyDoHuyDuyetTaiKhoa.LyDoHuy = result;
                                _this.thongTinLyDoHuyDuyetTaiKhoa.Id = id;
                                _this.apiService.post('YeuCauMuaKSNK/TuChoiDuyetTaiKhoa', _this.thongTinLyDoHuyDuyetTaiKhoa)
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
                DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype.PheDuyet = function (id) {
                    var _this = this;
                    this.duyetDuTruMuaVatTuViewModel.DuTruMuaVatTuId = id;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
                        if (this.confrim != null) {
                            this.dialog.closeAll();
                            this.confrim = null;
                        }
                        this.confrim = this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_28__["ConfirmComponent"], {
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
                                _this.apiService.post('YeuCauMuaKSNK/DuyetTaiKhoa/', _this.duyetDuTruMuaVatTuViewModel)
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
                DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype.HuyDuyet = function (id) {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
                        if (this.confrim != null) {
                            this.dialog.closeAll();
                            this.confrim = null;
                        }
                        this.confrim = this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_28__["ConfirmComponent"], {
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
                                _this.apiService.post('YeuCauMuaKSNK/HuyDuyetTaiKhoa/' + id)
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
                DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData) {
                        this.popupLoadingData.close();
                    }
                };
                DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype.changeTabParent = function () {
                };
                DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype.CheckboxChange = function ($event, choDuyet, daDuyet) {
                    if (choDuyet === void 0) { choDuyet = false; }
                    if (daDuyet === void 0) { daDuyet = false; }
                    this.router.navigateByUrl('/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-khoa?holdQuery=true');
                    if (choDuyet) {
                        this.danhSachTongHopDuTruMuaVatTuTaiKhoa.ChoDuyet = $event;
                    }
                    else if (daDuyet) {
                        this.danhSachTongHopDuTruMuaVatTuTaiKhoa.DaDuyet = $event;
                    }
                    this.timKiem();
                };
                DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype.onDataBound = function (event) {
                    if (event && event.Data.length > 0) {
                        this.tongHopDuTruMuaVatTuTaiKhoa = event.Data;
                    }
                };
                DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype.chiTietDaXuLyParent = function (id) {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
                        this.router.navigate(["/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-khoa/duyet/" + id + "/" + true]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype.chiTietDaXuLy = function (id, tinhTrang, isParent) {
                    // tinh trang => 1 : đã duyệt, 2: từ chối, isParent => 0: Cha, 1: Con
                    if ((tinhTrang == 1 || tinhTrang == 2) && isParent == 0) {
                        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].View)) {
                            this.router.navigate(["/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-khoa/chi-tiet/" + id]);
                        }
                        else {
                            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                        }
                    }
                    else if ((tinhTrang == 1 || tinhTrang == 2) && isParent == 1) {
                        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].View)) {
                            this.router.navigate(["/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-khoa/chi-tiet/" + id]);
                        }
                        else {
                            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                        }
                    }
                    else if (tinhTrang == 0 && isParent == 0) {
                        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
                            this.router.navigate(["/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-khoa/duyet/" + id + "/" + true]);
                        }
                        else {
                            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                        }
                    }
                    else if (tinhTrang == 0 && isParent == 1) {
                        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].View)) {
                            this.router.navigate(["/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-khoa/chi-tiet/" + id]);
                        }
                        else {
                            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                        }
                    }
                };
                DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype.unSelectedTab = function () {
                    this.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy = false;
                    this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy = false;
                    this.lstStatusSelectTabTHDTKhoa.selectedTabTuChoi = false;
                };
                DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype.chuyenDen = function (element, event) {
                    console.log("lstStatusSelectTabTHDTKhoa: ", this.lstStatusSelectTabTHDTKhoa);
                    var self = this;
                    self.location.replaceState(self.baseRoute + '?holdQuery=true');
                    var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].getItem("additionalSearchStringdanhSachTongHopDuTruMuaVatTuTaiKhoa");
                    if (event.index == 0 || event.title == "CHỜ XỬ LÝ") {
                        self.unSelectedTab();
                        self.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy = true;
                        var queryString = JSON.stringify(self.lstStatusSelectTabTHDTKhoa);
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].setItem("additionalSearchStringTHDTVatTuTaiKhoaSelectedTabNhomKSNK", queryString);
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
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].setItem("additionalSearchStringTHDTVatTuTaiKhoaSelectedTabNhomKSNK", queryString);
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
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].setItem("additionalSearchStringTHDTVatTuTaiKhoaSelectedTabNhomKSNK", queryString);
                        this.addtionStringDefaultTuChoi = additionalSearchString;
                        var addtionTemp = JSON.parse(additionalSearchString);
                        if (addtionTemp != null && addtionTemp.SearchStringTuChoi !== undefined && addtionTemp.SearchStringTuChoi !== null && addtionTemp.SearchStringTuChoi !== "") {
                            this.danhSachTongHopDuTruMuaVatTuTaiKhoa.SearchStringTuChoi = addtionTemp.SearchStringTuChoi;
                        }
                    }
                };
                DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype.trangThaiCheckBox = function (event, tinhTrang, tabSelected) {
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
                DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype.blur = function () {
                    this.timKiem();
                };
                return DsTongHopDuTruMuaKSNKTaiKhoaComponent;
            }());
            DsTongHopDuTruMuaKSNKTaiKhoaComponent.ctorParameters = function () { return [
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
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tuNgayTemplate', { static: true })
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype, "tuNgayTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('denNgayTemplate', { static: true })
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype, "denNgayTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayTaiKhoaTemplate', { static: true })
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype, "ngayTaiKhoaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayTaiKhoaDuocTemplate', { static: true })
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype, "ngayTaiKhoaDuocTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayTaiGiamDocTemplate', { static: true })
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype, "ngayTaiGiamDocTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soPhieuTemplate', { static: true })
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype, "soPhieuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('STTTemplate', { static: true })
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype, "STTTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupDaXuLyChiTietHeaderTemplate', { static: true })
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype, "nhomGroupDaXuLyChiTietHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hdChuaNhapTemplate', { static: true })
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype, "hdChuaNhapTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('khoTongTonTemplate', { static: true })
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype, "khoTongTonTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupTuChoiHeaderTemplate', { static: true })
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype, "nhomGroupTuChoiHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soPhieuTuChoiTemplate', { static: true })
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype, "soPhieuTuChoiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soPhieuDaXuLyChiTietTemplate', { static: true })
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype, "soPhieuDaXuLyChiTietTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soPhieuDaXuLyTemplate', { static: true })
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype, "soPhieuDaXuLyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tinhTrangTemplate', { static: true })
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype, "tinhTrangTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayYeuCauDaXuLyTemplate', { static: true })
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype, "ngayYeuCauDaXuLyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayYeuCauDetailDaXuLyTemplate', { static: true })
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype, "ngayYeuCauDetailDaXuLyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayGiamDocDaXuLyTemplate', { static: true })
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype, "ngayGiamDocDaXuLyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayKhoDuocDaXuLyTemplate', { static: true })
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype, "ngayKhoDuocDaXuLyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayYeuCauTuChoiTemplate', { static: true })
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype, "ngayYeuCauTuChoiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayTuChoiTemplate', { static: true })
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype, "ngayTuChoiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayTruongKhoaDaXuLyTemplate', { static: true })
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype, "ngayTruongKhoaDaXuLyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridChoDuyet', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], static: false })
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype, "gridChoDuyet", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridChildDaXuLy', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], static: false })
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype, "gridChildDaXuLy", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridChildTuChoi', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], static: false })
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype, "gridChildTuChoi", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomChiTietTabChoGoiTemplate', { static: true })
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype, "nhomChiTietTabChoGoiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent.prototype, "sort", void 0);
            DsTongHopDuTruMuaKSNKTaiKhoaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-ds-tong-hop-du-tru-mua-ksnk-tai-khoa',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ds-tong-hop-du-tru-mua-ksnk-tai-khoa.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/ds-tong-hop-du-tru-mua-ksnk-tai-khoa/ds-tong-hop-du-tru-mua-ksnk-tai-khoa.component.html")).default,
                    animations: [src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_26__["stagger60ms"], src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_27__["fadeInUp400ms"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ds-tong-hop-du-tru-mua-ksnk-tai-khoa.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/ds-tong-hop-du-tru-mua-ksnk-tai-khoa/ds-tong-hop-du-tru-mua-ksnk-tai-khoa.component.scss")).default]
                })
            ], DsTongHopDuTruMuaKSNKTaiKhoaComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.scss": 
        /*!******************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.scss ***!
          \******************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4vZHUtdHJ1LW11YS90b25nLWhvcC1kdS10cnUtbXVhLWtzbmstdGFpLWtob2EvcGhpZXUtbXVhLWR1LXRydS10YWkta2hvYS9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxca2llbS1zb2F0LW5oaWVtLWtodWFuXFxkdS10cnUtbXVhXFx0b25nLWhvcC1kdS10cnUtbXVhLWtzbmstdGFpLWtob2FcXHBoaWV1LW11YS1kdS10cnUtdGFpLWtob2FcXHBoaWV1LW11YS1kdS10cnUtdGFpLWtob2EuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1LXRydS1tdWEvdG9uZy1ob3AtZHUtdHJ1LW11YS1rc25rLXRhaS1raG9hL3BoaWV1LW11YS1kdS10cnUtdGFpLWtob2EvcGhpZXUtbXVhLWR1LXRydS10YWkta2hvYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2tpZW0tc29hdC1uaGllbS1raHVhbi9kdS10cnUtbXVhL3RvbmctaG9wLWR1LXRydS1tdWEta3Nuay10YWkta2hvYS9waGlldS1tdWEtZHUtdHJ1LXRhaS1raG9hL3BoaWV1LW11YS1kdS10cnUtdGFpLWtob2EuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUgLnBhZ2VicmVhayB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iLCIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUgLnBhZ2VicmVhayB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.ts": 
        /*!****************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.ts ***!
          \****************************************************************************************************************************************************************************/
        /*! exports provided: PhieuMuaTruKSNKTaiKhoaComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuMuaTruKSNKTaiKhoaComponent", function () { return PhieuMuaTruKSNKTaiKhoaComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_ksnk_tai_khoa_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-ksnk-tai-khoa.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa.model.ts");
            var PhieuMuaTruKSNKTaiKhoaComponent = /** @class */ (function () {
                function PhieuMuaTruKSNKTaiKhoaComponent(dialogRef, apiService, notificationService, data, ref) {
                    this.dialogRef = dialogRef;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.data = data;
                    this.ref = ref;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.inPhieu = new _tong_hop_du_tru_mua_ksnk_tai_khoa_model__WEBPACK_IMPORTED_MODULE_6__["PhieuInDuTruMuaTaiKhoa"]();
                    this.src = '';
                    this.dataHTML = '';
                }
                PhieuMuaTruKSNKTaiKhoaComponent.prototype.ngOnInit = function () {
                    this.xemPhieuVatTu();
                };
                PhieuMuaTruKSNKTaiKhoaComponent.prototype.xemPhieuVatTuVaDuocPham = function () {
                    var self = this;
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    self.inPhieu.DuTruMuaDuocPhamTheoKhoaId = self.data.Id;
                    self.inPhieu.DuTruMuaVatTuTheoKhoaId = self.data.Id;
                    self.inPhieu.Header = true;
                    self.apiService.post('YeuCauMuaKSNK/InPhieuVatTuVaDuocPhamTaiKhoa', self.inPhieu).subscribe(function (resData) {
                        if (resData) {
                            self.inPhieu.Header = false;
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
                PhieuMuaTruKSNKTaiKhoaComponent.prototype.xemPhieuVatTu = function () {
                    var self = this;
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    self.inPhieu.DuTruMuaVatTuTheoKhoaId = self.data.Id;
                    self.inPhieu.Header = true;
                    self.apiService.post('YeuCauMuaKSNK/InPhieuDuTruMuaTaiKhoa', self.inPhieu).subscribe(function (resData) {
                        if (resData) {
                            self.inPhieu.Header = false;
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
                PhieuMuaTruKSNKTaiKhoaComponent.prototype.xemPhieuDuocPham = function () {
                    var self = this;
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    self.inPhieu.DuTruMuaDuocPhamTheoKhoaId = self.data.Id;
                    self.inPhieu.Header = true;
                    self.apiService.post('YeuCauMuaKSNK/InPhieuDuTruMuaTaiKhoaDuocPham', self.inPhieu).subscribe(function (resData) {
                        if (resData) {
                            self.inPhieu.Header = false;
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
                PhieuMuaTruKSNKTaiKhoaComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    var template = this.dataHTML
                        .replace('<p style=\'background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center\'>' +
                        '<th>PHIẾU TỔNG HỢP DỰ TRÙ KIỂM SOÁT NHIỄM KHUẨN</th>' +
                        '</p>', '');
                    return new Promise(function (resolve) {
                        resolve(template);
                        _this.close();
                    });
                };
                PhieuMuaTruKSNKTaiKhoaComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                return PhieuMuaTruKSNKTaiKhoaComponent;
            }());
            PhieuMuaTruKSNKTaiKhoaComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            PhieuMuaTruKSNKTaiKhoaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-phieu-mua-du-tru-tai-khoa',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-mua-du-tru-tai-khoa.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-mua-du-tru-tai-khoa.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
            ], PhieuMuaTruKSNKTaiKhoaComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-detail/tong-hop-du-tru-mua-ksnk-tai-khoa-detail.component.scss": 
        /*!************************************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-detail/tong-hop-du-tru-mua-ksnk-tai-khoa-detail.component.scss ***!
          \************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4vZHUtdHJ1LW11YS90b25nLWhvcC1kdS10cnUtbXVhLWtzbmstdGFpLWtob2EvdG9uZy1ob3AtZHUtdHJ1LW11YS1rc25rLXRhaS1raG9hLWRldGFpbC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxca2llbS1zb2F0LW5oaWVtLWtodWFuXFxkdS10cnUtbXVhXFx0b25nLWhvcC1kdS10cnUtbXVhLWtzbmstdGFpLWtob2FcXHRvbmctaG9wLWR1LXRydS1tdWEta3Nuay10YWkta2hvYS1kZXRhaWxcXHRvbmctaG9wLWR1LXRydS1tdWEta3Nuay10YWkta2hvYS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1LXRydS1tdWEvdG9uZy1ob3AtZHUtdHJ1LW11YS1rc25rLXRhaS1raG9hL3RvbmctaG9wLWR1LXRydS1tdWEta3Nuay10YWkta2hvYS1kZXRhaWwvdG9uZy1ob3AtZHUtdHJ1LW11YS1rc25rLXRhaS1raG9hLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4vZHUtdHJ1LW11YS90b25nLWhvcC1kdS10cnUtbXVhLWtzbmstdGFpLWtob2EvdG9uZy1ob3AtZHUtdHJ1LW11YS1rc25rLXRhaS1raG9hLWRldGFpbC90b25nLWhvcC1kdS10cnUtbXVhLWtzbmstdGFpLWtob2EtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn0iLCIuZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-detail/tong-hop-du-tru-mua-ksnk-tai-khoa-detail.component.ts": 
        /*!**********************************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-detail/tong-hop-du-tru-mua-ksnk-tai-khoa-detail.component.ts ***!
          \**********************************************************************************************************************************************************************************************************/
        /*! exports provided: TongHopDuTruMuaKSNKTaiKhoaDetailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaKSNKTaiKhoaDetailComponent", function () { return TongHopDuTruMuaKSNKTaiKhoaDetailComponent; });
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
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_ksnk_tai_khoa_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-ksnk-tai-khoa.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa.model.ts");
            /* harmony import */ var _yeu_cau_mua_ksnk_phieu_mua_ksnk_phieu_mua_ksnk_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../yeu-cau-mua-ksnk/phieu-mua-ksnk/phieu-mua-ksnk.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/phieu-mua-ksnk/phieu-mua-ksnk.component.ts");
            // import { TongHopDuTruMuaKSNKTaiKhoaChiTietSharedComponent } from '../tong-hop-du-tru-mua-ksnk-tai-khoa-xem-chi-tiet-shared/du-tru-mua-ksnk-tai-khoa-xem-chi-tiet-shared.component';
            var TongHopDuTruMuaKSNKTaiKhoaDetailComponent = /** @class */ (function () {
                function TongHopDuTruMuaKSNKTaiKhoaDetailComponent(dialog, authService, notificationService, location, ref, route, apiService) {
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
                TongHopDuTruMuaKSNKTaiKhoaDetailComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].THDTMuaTaiKSNK;
                    this.danhSachTongHopDuTruMuaVatTuTaiKhoa = new _tong_hop_du_tru_mua_ksnk_tai_khoa_model__WEBPACK_IMPORTED_MODULE_15__["TongHopDuTruMuaVatTuTaiKhoa"]();
                    var id = this.route.snapshot.params.id;
                    if (id !== undefined && id !== null) {
                        this.GetTrangThaiPhieuMuaDuTru(id);
                        this.phieuMuaVatTuTaiKhoaId = id;
                        this.phieuMuaVatTuId = id;
                    }
                };
                TongHopDuTruMuaKSNKTaiKhoaDetailComponent.prototype.GetTrangThaiPhieuMuaDuTru = function (id) {
                    var _this = this;
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View)) {
                        self.apiService.get("YeuCauMuaKSNK/GetTrangThaiPhieuMuaKSNK?phieuMuaKSNKId=" + id).subscribe(function (result) {
                            if (result !== undefined && result !== null) {
                                _this.trangThaiVo = result;
                            }
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                TongHopDuTruMuaKSNKTaiKhoaDetailComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang lưu dữ liệu...' },
                    });
                };
                TongHopDuTruMuaKSNKTaiKhoaDetailComponent.prototype.closepopupLoadingData = function () {
                    if (this.popupLoadingData) {
                        this.popupLoadingData.close();
                    }
                };
                TongHopDuTruMuaKSNKTaiKhoaDetailComponent.prototype.duyet = function () {
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
                TongHopDuTruMuaKSNKTaiKhoaDetailComponent.prototype.inPhieu = function () {
                    var self = this;
                    self.danhSachTongHopDuTruMuaVatTuTaiKhoa = self.shared.getSharedData();
                    self.loadingPage();
                    self.dialog.open(_yeu_cau_mua_ksnk_phieu_mua_ksnk_phieu_mua_ksnk_component__WEBPACK_IMPORTED_MODULE_16__["PhieuMuaKSNKComponent"], {
                        disableClose: false,
                        width: '1200px',
                        data: { Id: self.phieuMuaVatTuTaiKhoaId },
                    }).afterClosed().subscribe(function () {
                        self.closepopupLoadingData();
                    });
                };
                TongHopDuTruMuaKSNKTaiKhoaDetailComponent.prototype.cancel = function () {
                    this.location.back();
                };
                TongHopDuTruMuaKSNKTaiKhoaDetailComponent.prototype.keyEvent = function (event) {
                    // tslint:disable-next-line: deprecation
                    if (event.keyCode === 27 && !event.ctrlKey) {
                        // esc
                        this.cancel();
                        event.preventDefault();
                    }
                };
                return TongHopDuTruMuaKSNKTaiKhoaDetailComponent;
            }());
            TongHopDuTruMuaKSNKTaiKhoaDetailComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_14__["ApiService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])
            ], TongHopDuTruMuaKSNKTaiKhoaDetailComponent.prototype, "keyEvent", null);
            TongHopDuTruMuaKSNKTaiKhoaDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-tong-hop-du-tru-mua-ksnk-tai-khoa-detail',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tong-hop-du-tru-mua-ksnk-tai-khoa-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-detail/tong-hop-du-tru-mua-ksnk-tai-khoa-detail.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_12__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_11__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tong-hop-du-tru-mua-ksnk-tai-khoa-detail.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-detail/tong-hop-du-tru-mua-ksnk-tai-khoa-detail.component.scss")).default]
                })
            ], TongHopDuTruMuaKSNKTaiKhoaDetailComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-duyet/tong-hop-du-tru-mua-ksnk-tai-khoa-duyet.component.scss": 
        /*!**********************************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-duyet/tong-hop-du-tru-mua-ksnk-tai-khoa-duyet.component.scss ***!
          \**********************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n\n.render-text {\n  justify-content: space-between !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4vZHUtdHJ1LW11YS90b25nLWhvcC1kdS10cnUtbXVhLWtzbmstdGFpLWtob2EvdG9uZy1ob3AtZHUtdHJ1LW11YS1rc25rLXRhaS1raG9hLWR1eWV0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFxraWVtLXNvYXQtbmhpZW0ta2h1YW5cXGR1LXRydS1tdWFcXHRvbmctaG9wLWR1LXRydS1tdWEta3Nuay10YWkta2hvYVxcdG9uZy1ob3AtZHUtdHJ1LW11YS1rc25rLXRhaS1raG9hLWR1eWV0XFx0b25nLWhvcC1kdS10cnUtbXVhLWtzbmstdGFpLWtob2EtZHV5ZXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1LXRydS1tdWEvdG9uZy1ob3AtZHUtdHJ1LW11YS1rc25rLXRhaS1raG9hL3RvbmctaG9wLWR1LXRydS1tdWEta3Nuay10YWkta2hvYS1kdXlldC90b25nLWhvcC1kdS10cnUtbXVhLWtzbmstdGFpLWtob2EtZHV5ZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHlDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2tpZW0tc29hdC1uaGllbS1raHVhbi9kdS10cnUtbXVhL3RvbmctaG9wLWR1LXRydS1tdWEta3Nuay10YWkta2hvYS90b25nLWhvcC1kdS10cnUtbXVhLWtzbmstdGFpLWtob2EtZHV5ZXQvdG9uZy1ob3AtZHUtdHJ1LW11YS1rc25rLXRhaS1raG9hLWR1eWV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnJlbmRlci10ZXh0IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG59IiwiLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnJlbmRlci10ZXh0IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-duyet/tong-hop-du-tru-mua-ksnk-tai-khoa-duyet.component.ts": 
        /*!********************************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-duyet/tong-hop-du-tru-mua-ksnk-tai-khoa-duyet.component.ts ***!
          \********************************************************************************************************************************************************************************************************/
        /*! exports provided: TongHopDuTruMuaKSNKTaiKhoaDuyetComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaKSNKTaiKhoaDuyetComponent", function () { return TongHopDuTruMuaKSNKTaiKhoaDuyetComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_ksnk_tai_khoa_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-ksnk-tai-khoa.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa.model.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_ksnk_tai_khoa_shared_tong_hop_du_tru_mua_ksnk_tai_khoa_shared_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-ksnk-tai-khoa-shared/tong-hop-du-tru-mua-ksnk-tai-khoa-shared.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-shared/tong-hop-du-tru-mua-ksnk-tai-khoa-shared.component.ts");
            var TongHopDuTruMuaKSNKTaiKhoaDuyetComponent = /** @class */ (function () {
                function TongHopDuTruMuaKSNKTaiKhoaDuyetComponent(apiService, dialog, route) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.route = route;
                    this.popupSavingData = null;
                    this.popupLoadingData = null;
                    this.validationErrors = null;
                    this.tabDaXuLy = "";
                }
                TongHopDuTruMuaKSNKTaiKhoaDuyetComponent.prototype.ngOnInit = function () {
                    this.danhSachTongHopDuTruMuaVatTuTaiKhoa = new _tong_hop_du_tru_mua_ksnk_tai_khoa_model__WEBPACK_IMPORTED_MODULE_8__["TongHopDuTruMuaVatTuTaiKhoa"]();
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
                TongHopDuTruMuaKSNKTaiKhoaDuyetComponent.prototype.getThongTinTongHopDuTruMuaTaiKhoaDaXuLy = function (id) {
                    var _this = this;
                    this.apiService.get('YeuCauMuaKSNK/GetThongTinDuTruKSNKTaiKhoaDaXuLy/' + id)
                        .subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.danhSachTongHopDuTruMuaVatTuTaiKhoa = resultData;
                        }
                    });
                };
                TongHopDuTruMuaKSNKTaiKhoaDuyetComponent.prototype.getThongTinTongHopDuTruMuaTaiKhoa = function (id) {
                    var _this = this;
                    this.apiService.get('YeuCauMuaKSNK/GetThongTinDuTruKSNKTaiKhoa/' + id)
                        .subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.danhSachTongHopDuTruMuaVatTuTaiKhoa = resultData;
                        }
                    });
                };
                TongHopDuTruMuaKSNKTaiKhoaDuyetComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang lưu dữ liệu...' },
                    });
                };
                TongHopDuTruMuaKSNKTaiKhoaDuyetComponent.prototype.closepopupLoadingData = function () {
                    if (this.popupLoadingData) {
                        this.popupLoadingData.close();
                    }
                };
                TongHopDuTruMuaKSNKTaiKhoaDuyetComponent.prototype.savingPage = function () {
                    this.popupSavingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang lưu dữ liệu...' },
                    });
                };
                TongHopDuTruMuaKSNKTaiKhoaDuyetComponent.prototype.closepopupSavingData = function () {
                    if (this.popupSavingData) {
                        this.popupSavingData.close();
                    }
                };
                return TongHopDuTruMuaKSNKTaiKhoaDuyetComponent;
            }());
            TongHopDuTruMuaKSNKTaiKhoaDuyetComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_tong_hop_du_tru_mua_ksnk_tai_khoa_shared_tong_hop_du_tru_mua_ksnk_tai_khoa_shared_component__WEBPACK_IMPORTED_MODULE_9__["TongHopDuTruMuaKSNKTaiKhoaSharedComponent"], { static: true })
            ], TongHopDuTruMuaKSNKTaiKhoaDuyetComponent.prototype, "shared", void 0);
            TongHopDuTruMuaKSNKTaiKhoaDuyetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-tong-hop-du-tru-mua-ksnk-tai-khoa-duyet',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tong-hop-du-tru-mua-ksnk-tai-khoa-duyet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-duyet/tong-hop-du-tru-mua-ksnk-tai-khoa-duyet.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tong-hop-du-tru-mua-ksnk-tai-khoa-duyet.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-duyet/tong-hop-du-tru-mua-ksnk-tai-khoa-duyet.component.scss")).default]
                })
            ], TongHopDuTruMuaKSNKTaiKhoaDuyetComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-routing.module.ts": 
        /*!***************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-routing.module.ts ***!
          \***************************************************************************************************************************************************************/
        /*! exports provided: TongHopDuTruMuaKSNKTaiKhoaRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaKSNKTaiKhoaRoutingModule", function () { return TongHopDuTruMuaKSNKTaiKhoaRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _ds_tong_hop_du_tru_mua_ksnk_tai_khoa_ds_tong_hop_du_tru_mua_ksnk_tai_khoa_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ds-tong-hop-du-tru-mua-ksnk-tai-khoa/ds-tong-hop-du-tru-mua-ksnk-tai-khoa.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/ds-tong-hop-du-tru-mua-ksnk-tai-khoa/ds-tong-hop-du-tru-mua-ksnk-tai-khoa.component.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_ksnk_tai_khoa_duyet_tong_hop_du_tru_mua_ksnk_tai_khoa_duyet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-ksnk-tai-khoa-duyet/tong-hop-du-tru-mua-ksnk-tai-khoa-duyet.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-duyet/tong-hop-du-tru-mua-ksnk-tai-khoa-duyet.component.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_ksnk_tai_khoa_detail_tong_hop_du_tru_mua_ksnk_tai_khoa_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-ksnk-tai-khoa-detail/tong-hop-du-tru-mua-ksnk-tai-khoa-detail.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-detail/tong-hop-du-tru-mua-ksnk-tai-khoa-detail.component.ts");
            // import { GuiTongHopDuTruMuaKSNKTaiKhoaDuyetComponent } from './gui-tong-hop-du-tru-mua-ksnk-tai-khoa-duyet/gui-tong-hop-du-tru-mua-ksnk-tai-khoa-duyet.component';
            var routes = [
                {
                    path: '',
                    component: _ds_tong_hop_du_tru_mua_ksnk_tai_khoa_ds_tong_hop_du_tru_mua_ksnk_tai_khoa_component__WEBPACK_IMPORTED_MODULE_6__["DsTongHopDuTruMuaKSNKTaiKhoaComponent"],
                    data: {
                        title: 'Danh Sách Tổng Hợp Dự Trù Mua Kiểm Soát Nhiễm Khuẩn Tại Khoa',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].THDTMuaTaiKSNK,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
                {
                    path: 'duyet/:id/:isSelected',
                    component: _tong_hop_du_tru_mua_ksnk_tai_khoa_duyet_tong_hop_du_tru_mua_ksnk_tai_khoa_duyet_component__WEBPACK_IMPORTED_MODULE_7__["TongHopDuTruMuaKSNKTaiKhoaDuyetComponent"],
                    data: {
                        title: 'Duyệt Dự Trù Mua KSNK',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].THDTMuaTaiKSNK,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
                {
                    path: 'chi-tiet/:id',
                    component: _tong_hop_du_tru_mua_ksnk_tai_khoa_detail_tong_hop_du_tru_mua_ksnk_tai_khoa_detail_component__WEBPACK_IMPORTED_MODULE_8__["TongHopDuTruMuaKSNKTaiKhoaDetailComponent"],
                    data: {
                        title: 'Chi Tiết Dự Trù Mua Kiểm Soát Nhiễm Khuẩn Tại Khoa',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].THDTMuaTaiKSNK,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].Process
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
                {
                    path: 'gui/:id',
                    // component: GuiTongHopDuTruMuaKSNKTaiKhoaDuyetComponent,
                    data: {
                        title: 'Gửi Dự Trù Mua Kiểm Soát Nhiễm Khuẩn Tại Khoa',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].THDTMuaTaiKSNK,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
            ];
            var TongHopDuTruMuaKSNKTaiKhoaRoutingModule = /** @class */ (function () {
                function TongHopDuTruMuaKSNKTaiKhoaRoutingModule() {
                }
                return TongHopDuTruMuaKSNKTaiKhoaRoutingModule;
            }());
            TongHopDuTruMuaKSNKTaiKhoaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], TongHopDuTruMuaKSNKTaiKhoaRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-shared/tong-hop-du-tru-mua-ksnk-tai-khoa-shared.component.scss": 
        /*!************************************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-shared/tong-hop-du-tru-mua-ksnk-tai-khoa-shared.component.scss ***!
          \************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n\n.kho-tong-ton-ng-template {\n  display: inline;\n  white-space: nowrap;\n}\n\n.kho-tong-ton-label {\n  display: inline;\n  text-overflow: ellipsis;\n}\n\n.info {\n  margin-bottom: -8px;\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4vZHUtdHJ1LW11YS90b25nLWhvcC1kdS10cnUtbXVhLWtzbmstdGFpLWtob2EvdG9uZy1ob3AtZHUtdHJ1LW11YS1rc25rLXRhaS1raG9hLXNoYXJlZC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxca2llbS1zb2F0LW5oaWVtLWtodWFuXFxkdS10cnUtbXVhXFx0b25nLWhvcC1kdS10cnUtbXVhLWtzbmstdGFpLWtob2FcXHRvbmctaG9wLWR1LXRydS1tdWEta3Nuay10YWkta2hvYS1zaGFyZWRcXHRvbmctaG9wLWR1LXRydS1tdWEta3Nuay10YWkta2hvYS1zaGFyZWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1LXRydS1tdWEvdG9uZy1ob3AtZHUtdHJ1LW11YS1rc25rLXRhaS1raG9hL3RvbmctaG9wLWR1LXRydS1tdWEta3Nuay10YWkta2hvYS1zaGFyZWQvdG9uZy1ob3AtZHUtdHJ1LW11YS1rc25rLXRhaS1raG9hLXNoYXJlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4vZHUtdHJ1LW11YS90b25nLWhvcC1kdS10cnUtbXVhLWtzbmstdGFpLWtob2EvdG9uZy1ob3AtZHUtdHJ1LW11YS1rc25rLXRhaS1raG9hLXNoYXJlZC90b25nLWhvcC1kdS10cnUtbXVhLWtzbmstdGFpLWtob2Etc2hhcmVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLmtoby10b25nLXRvbi1uZy10ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmtoby10b25nLXRvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5pbmZvIHtcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufSIsIi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5raG8tdG9uZy10b24tbmctdGVtcGxhdGUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5raG8tdG9uZy10b24tbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IC04cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-shared/tong-hop-du-tru-mua-ksnk-tai-khoa-shared.component.ts": 
        /*!**********************************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-shared/tong-hop-du-tru-mua-ksnk-tai-khoa-shared.component.ts ***!
          \**********************************************************************************************************************************************************************************************************/
        /*! exports provided: TongHopDuTruMuaKSNKTaiKhoaSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaKSNKTaiKhoaSharedComponent", function () { return TongHopDuTruMuaKSNKTaiKhoaSharedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/baseline-info */ "./node_modules/@iconify/icons-ic/baseline-info.js");
            /* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_12__);
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _tong_hop_du_tru_mua_ksnk_tai_khoa_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-ksnk-tai-khoa.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa.model.ts");
            /* harmony import */ var _phieu_mua_du_tru_tai_khoa_phieu_mua_du_tru_tai_khoa_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.ts");
            var TongHopDuTruMuaKSNKTaiKhoaSharedComponent_1;
            // import { TongHopDuTruMuaKSNKTaiKhoaKhongDuyetComponent } from '../tong-hop-du-tru-mua-ksnk-tai-khoa-khong-duyet/tong-hop-du-tru-mua-ksnk-tai-khoa-khong-duyet.component';
            var TongHopDuTruMuaKSNKTaiKhoaSharedComponent = TongHopDuTruMuaKSNKTaiKhoaSharedComponent_1 = /** @class */ (function () {
                function TongHopDuTruMuaKSNKTaiKhoaSharedComponent(apiService, route, dialog, router, notificationService, authService, location) {
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
                    this.urlGetDataGridChildAsync = 'YeuCauMuaKSNK/GetDuTruMuaKSNKTaiKhoaChiTietForGridAsync';
                    this.urlGetTotalPageGridChild = 'YeuCauMuaKSNK/GetTotalDuTruMuaKSNKTaiKhoaChiTietForGridAsync';
                    this.urlGetDataDaXuLy = "YeuCauMuaKSNK/GetDuTruMuaKSNKTHDTChiTietForGridAsync";
                    this.urlGetTotalPageDaXuLy = "YeuCauMuaKSNK/GetTotalDuTruMuaKSNKTHDTChiTietForGridAsync";
                    this.urlGetDataDaXuLyChild = "YeuCauMuaKSNK/GetDuTruMuaKSNKTaiKhoaChiTietForGridAsyncChild";
                    this.urlGetTotalPageDaXuLyChild = "YeuCauMuaKSNK/GetTotalDuTruMuaKSNKTaiKhoaChiTietForGridAsyncChild";
                    this.duTruMuaVatTuId = 0;
                    this.hideGuibtn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.icInfo = _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_12___default.a;
                }
                TongHopDuTruMuaKSNKTaiKhoaSharedComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].THDTMuaTaiKSNK;
                    this.danhSachTongHopDuTruMuaVatTuTaiKhoa = new _tong_hop_du_tru_mua_ksnk_tai_khoa_model__WEBPACK_IMPORTED_MODULE_14__["TongHopDuTruMuaVatTuTaiKhoa"]();
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
                        { Field: 'VatTu', Title: 'kiểm soát nhiễm khuẩn', Width: 100, ShowTooltip: true },
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
                TongHopDuTruMuaKSNKTaiKhoaSharedComponent.prototype.getThongTinTongHopDuTruMuaTaiKhoa = function (id) {
                    var _this = this;
                    this.apiService.get('YeuCauMuaKSNK/GetThongTinDuTruKSNKTaiKhoa/' + id)
                        .subscribe(function (resultData) {
                        if (resultData) {
                            _this.danhSachTongHopDuTruMuaVatTuTaiKhoa = resultData;
                        }
                    });
                };
                TongHopDuTruMuaKSNKTaiKhoaSharedComponent.prototype.HuyDuyet = function (id) {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Update)) {
                        if (this.confrim != null) {
                            this.dialog.closeAll();
                            this.confrim = null;
                        }
                        this.confrim = this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: {
                                Title: 'Xác nhận',
                                Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].MessConfirm, [
                                    'Hủy Duyệt',
                                ]),
                            },
                        })
                            .afterClosed()
                            .subscribe(function (result) {
                            /* result is a string:Yes,No,No answer*/
                            if (result === 'Yes') {
                                _this.apiService.post('YeuCauMuaKSNK/HuyDuyetTaiKhoa/' + id)
                                    .subscribe(function (resultData) {
                                    if (resultData !== null && resultData !== undefined) {
                                        if (resultData) {
                                            _this.notificationService.showSuccess('Hủy duyệt thành công.');
                                            _this.router.navigate(['/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-khoa']);
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
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                TongHopDuTruMuaKSNKTaiKhoaSharedComponent.prototype.getThongTinTongHopDuTruMuaTaiKhoaDaXuLy = function (id) {
                    var _this = this;
                    this.apiService.get("YeuCauMuaKSNK/GetThongTinDuTruKSNKTaiKhoaDaXuLy/" + id)
                        .subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.danhSachTongHopDuTruMuaVatTuTaiKhoa = resultData;
                        }
                    });
                };
                TongHopDuTruMuaKSNKTaiKhoaSharedComponent.prototype.onDataBound = function (event) {
                    if (event && event.Data.length > 0) {
                        this.duTruMuaVatTuTaiKhoaChiTietVo = event.Data;
                    }
                };
                TongHopDuTruMuaKSNKTaiKhoaSharedComponent.prototype.PheDuyet = function (id) {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Update)) {
                        if (this.confrim != null) {
                            this.dialog.closeAll();
                            this.confrim = null;
                        }
                        this.confrim = this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: {
                                Title: 'Xác nhận',
                                Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].MessConfirm, [
                                    'Duyệt',
                                ]),
                            },
                        })
                            .afterClosed()
                            .subscribe(function (result) {
                            if (result === 'Yes') {
                                _this.duyetDuTruMuaVatTuViewModel.DuTruMuaVatTuId = id;
                                _this.duyetDuTruMuaVatTuViewModel.DuTruMuaVatTuTaiKhoaChiTietVos = _this.duTruMuaVatTuTaiKhoaChiTietVo;
                                _this.apiService.post('YeuCauMuaKSNK/DuyetTaiKhoa/', _this.duyetDuTruMuaVatTuViewModel)
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
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                TongHopDuTruMuaKSNKTaiKhoaSharedComponent.prototype.TuChoi = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Update)) {
                        if (this.confrim != null) {
                            this.dialog.closeAll();
                            this.confrim = null;
                        }
                        this.confrim = this.dialog.open(null, {
                            disableClose: true,
                            width: '400px',
                            height: '300px',
                        }).afterClosed().subscribe(function (result) {
                            if (result) {
                                _this.thongTinLyDoHuyDuyetTaiKhoa.LyDoHuy = result;
                                _this.thongTinLyDoHuyDuyetTaiKhoa.Id = _this.duTruMuaVatTuId;
                                _this.apiService.post('YeuCauMuaKSNK/TuChoiDuyetTaiKhoa', _this.thongTinLyDoHuyDuyetTaiKhoa)
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
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                TongHopDuTruMuaKSNKTaiKhoaSharedComponent.prototype.cancel = function () {
                    this.location.back();
                };
                TongHopDuTruMuaKSNKTaiKhoaSharedComponent.prototype.TooltipCustom = function (duTruGiamDocDetail) {
                    this.khos = duTruGiamDocDetail.ThongTinChiTietTonKhoTongs.slice();
                    this.hdts = duTruGiamDocDetail.ThongTinChiTietTonHDTs.slice();
                };
                TongHopDuTruMuaKSNKTaiKhoaSharedComponent.prototype.InPhieuTongHopTaiKhoa = function () {
                    var id = this.route.snapshot.params.id;
                    this.dialog.open(_phieu_mua_du_tru_tai_khoa_phieu_mua_du_tru_tai_khoa_component__WEBPACK_IMPORTED_MODULE_15__["PhieuMuaTruKSNKTaiKhoaComponent"], {
                        disableClose: false,
                        width: '1200px',
                        data: { Id: id },
                    }).afterClosed().subscribe(function () {
                    });
                };
                return TongHopDuTruMuaKSNKTaiKhoaSharedComponent;
            }());
            TongHopDuTruMuaKSNKTaiKhoaSharedComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], TongHopDuTruMuaKSNKTaiKhoaSharedComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('khoTongTonTemplate', { static: true })
            ], TongHopDuTruMuaKSNKTaiKhoaSharedComponent.prototype, "khoTongTonTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hdChuaNhapTemplate', { static: true })
            ], TongHopDuTruMuaKSNKTaiKhoaSharedComponent.prototype, "hdChuaNhapTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomSLTKDuyet', { static: true })
            ], TongHopDuTruMuaKSNKTaiKhoaSharedComponent.prototype, "nhomSLTKDuyet", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(TongHopDuTruMuaKSNKTaiKhoaSharedComponent_1, { static: true })
            ], TongHopDuTruMuaKSNKTaiKhoaSharedComponent.prototype, "shared", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TongHopDuTruMuaKSNKTaiKhoaSharedComponent.prototype, "trangThaiVo", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TongHopDuTruMuaKSNKTaiKhoaSharedComponent.prototype, "validationErrorsVatTu", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TongHopDuTruMuaKSNKTaiKhoaSharedComponent.prototype, "isCreate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], TongHopDuTruMuaKSNKTaiKhoaSharedComponent.prototype, "hideGuibtn", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TongHopDuTruMuaKSNKTaiKhoaSharedComponent.prototype, "tabSelected", void 0);
            TongHopDuTruMuaKSNKTaiKhoaSharedComponent = TongHopDuTruMuaKSNKTaiKhoaSharedComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-tong-hop-du-tru-mua-ksnk-tai-khoa-shared',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tong-hop-du-tru-mua-ksnk-tai-khoa-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-shared/tong-hop-du-tru-mua-ksnk-tai-khoa-shared.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tong-hop-du-tru-mua-ksnk-tai-khoa-shared.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-shared/tong-hop-du-tru-mua-ksnk-tai-khoa-shared.component.scss")).default]
                })
            ], TongHopDuTruMuaKSNKTaiKhoaSharedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa.model.ts": 
        /*!******************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa.model.ts ***!
          \******************************************************************************************************************************************************/
        /*! exports provided: TongHopDuTruMuaVatTuTaiKhoaSreach, TongHopDuTruMuaVatTuTaiKhoa, DuyetDuTruMuaVatTuViewModel, ThongTinLyDoHuyDuyetTaiKhoa, DuTruMuaVatTuTaiKhoaChiTietVo, PhieuInDuTruMuaTaiKhoa, ListStatusSelectTabTHDTKhoa */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaVatTuTaiKhoaSreach", function () { return TongHopDuTruMuaVatTuTaiKhoaSreach; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaVatTuTaiKhoa", function () { return TongHopDuTruMuaVatTuTaiKhoa; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetDuTruMuaVatTuViewModel", function () { return DuyetDuTruMuaVatTuViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinLyDoHuyDuyetTaiKhoa", function () { return ThongTinLyDoHuyDuyetTaiKhoa; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuTruMuaVatTuTaiKhoaChiTietVo", function () { return DuTruMuaVatTuTaiKhoaChiTietVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuInDuTruMuaTaiKhoa", function () { return PhieuInDuTruMuaTaiKhoa; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListStatusSelectTabTHDTKhoa", function () { return ListStatusSelectTabTHDTKhoa; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _xuat_kho_ksnk_xuat_kho_ksnk_xuat_kho_ksnk_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk.model.ts");
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
                    if (RangeFromDate === void 0) { RangeFromDate = new _xuat_kho_ksnk_xuat_kho_ksnk_xuat_kho_ksnk_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"](); }
                    if (RangeFromDateDaXuLy === void 0) { RangeFromDateDaXuLy = new _xuat_kho_ksnk_xuat_kho_ksnk_xuat_kho_ksnk_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"](); }
                    if (RangeFromDateTuChoi === void 0) { RangeFromDateTuChoi = new _xuat_kho_ksnk_xuat_kho_ksnk_xuat_kho_ksnk_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"](); }
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
                function PhieuInDuTruMuaTaiKhoa(DuTruMuaVatTuTheoKhoaId, DuTruMuaDuocPhamTheoKhoaId, Header) {
                    if (DuTruMuaVatTuTheoKhoaId === void 0) { DuTruMuaVatTuTheoKhoaId = null; }
                    if (DuTruMuaDuocPhamTheoKhoaId === void 0) { DuTruMuaDuocPhamTheoKhoaId = null; }
                    if (Header === void 0) { Header = null; }
                    this.DuTruMuaVatTuTheoKhoaId = DuTruMuaVatTuTheoKhoaId;
                    this.DuTruMuaDuocPhamTheoKhoaId = DuTruMuaDuocPhamTheoKhoaId;
                    this.Header = Header;
                }
                return PhieuInDuTruMuaTaiKhoa;
            }());
            var ListStatusSelectTabTHDTKhoa = /** @class */ (function () {
                function ListStatusSelectTabTHDTKhoa(selectedTabChoXuLy, selectedTabDaXuLy, selectedTabTuChoi) {
                    if (selectedTabChoXuLy === void 0) { selectedTabChoXuLy = true; }
                    if (selectedTabDaXuLy === void 0) { selectedTabDaXuLy = false; }
                    if (selectedTabTuChoi === void 0) { selectedTabTuChoi = false; }
                    this.selectedTabChoXuLy = selectedTabChoXuLy;
                    this.selectedTabDaXuLy = selectedTabDaXuLy;
                    this.selectedTabTuChoi = selectedTabTuChoi;
                }
                return ListStatusSelectTabTHDTKhoa;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa.module.ts": 
        /*!*******************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa.module.ts ***!
          \*******************************************************************************************************************************************************/
        /*! exports provided: TongHopDuTruMuaKSNKTaiKhoaModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaKSNKTaiKhoaModule", function () { return TongHopDuTruMuaKSNKTaiKhoaModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/dist/fesm2015/index.js");
            /* harmony import */ var _ds_tong_hop_du_tru_mua_ksnk_tai_khoa_ds_tong_hop_du_tru_mua_ksnk_tai_khoa_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ds-tong-hop-du-tru-mua-ksnk-tai-khoa/ds-tong-hop-du-tru-mua-ksnk-tai-khoa.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/ds-tong-hop-du-tru-mua-ksnk-tai-khoa/ds-tong-hop-du-tru-mua-ksnk-tai-khoa.component.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_ksnk_tai_khoa_detail_tong_hop_du_tru_mua_ksnk_tai_khoa_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-ksnk-tai-khoa-detail/tong-hop-du-tru-mua-ksnk-tai-khoa-detail.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-detail/tong-hop-du-tru-mua-ksnk-tai-khoa-detail.component.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_ksnk_tai_khoa_duyet_tong_hop_du_tru_mua_ksnk_tai_khoa_duyet_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-ksnk-tai-khoa-duyet/tong-hop-du-tru-mua-ksnk-tai-khoa-duyet.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-duyet/tong-hop-du-tru-mua-ksnk-tai-khoa-duyet.component.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_ksnk_tai_khoa_shared_tong_hop_du_tru_mua_ksnk_tai_khoa_shared_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-ksnk-tai-khoa-shared/tong-hop-du-tru-mua-ksnk-tai-khoa-shared.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-shared/tong-hop-du-tru-mua-ksnk-tai-khoa-shared.component.ts");
            /* harmony import */ var _phieu_mua_du_tru_tai_khoa_phieu_mua_du_tru_tai_khoa_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_ksnk_tai_khoa_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-ksnk-tai-khoa-routing.module */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa-routing.module.ts");
            /* harmony import */ var _yeu_cau_mua_ksnk_yeu_cau_mua_ksnk_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../yeu-cau-mua-ksnk/yeu-cau-mua-ksnk.module */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/yeu-cau-mua-ksnk.module.ts");
            // import { GuiTongHopDuTruMuaKSNKTaiKhoaDuyetComponent } from './gui-tong-hop-du-tru-mua-ksnk-tai-khoa-duyet/gui-tong-hop-du-tru-mua-ksnk-tai-khoa-duyet.component';
            // import { GuiTongHopDuTruMuaKSNKTaiKhoaConfirmComponent } from './gui-tong-hop-du-tru-mua-ksnk-khoa-confirm/gui-tong-hop-du-tru-mua-ksnk-tai-khoa-confirm.component';
            // import { TongHopDuTruMuaKSNKTaiKhoaChiTietSharedComponent } from './tong-hop-du-tru-mua-ksnk-tai-khoa-xem-chi-tiet-shared/du-tru-mua-ksnk-tai-khoa-xem-chi-tiet-shared.component';
            // import { TongHopDuTruMuaKSNKTaiKhoaKhongDuyetComponent } from './tong-hop-du-tru-mua-ksnk-tai-khoa-khong-duyet/tong-hop-du-tru-mua-ksnk-tai-khoa-khong-duyet.component';
            var TongHopDuTruMuaKSNKTaiKhoaModule = /** @class */ (function () {
                function TongHopDuTruMuaKSNKTaiKhoaModule() {
                }
                return TongHopDuTruMuaKSNKTaiKhoaModule;
            }());
            TongHopDuTruMuaKSNKTaiKhoaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _ds_tong_hop_du_tru_mua_ksnk_tai_khoa_ds_tong_hop_du_tru_mua_ksnk_tai_khoa_component__WEBPACK_IMPORTED_MODULE_13__["DsTongHopDuTruMuaKSNKTaiKhoaComponent"],
                        // GuiTongHopDuTruMuaKSNKTaiKhoaDuyetComponent,
                        _tong_hop_du_tru_mua_ksnk_tai_khoa_detail_tong_hop_du_tru_mua_ksnk_tai_khoa_detail_component__WEBPACK_IMPORTED_MODULE_14__["TongHopDuTruMuaKSNKTaiKhoaDetailComponent"],
                        _tong_hop_du_tru_mua_ksnk_tai_khoa_duyet_tong_hop_du_tru_mua_ksnk_tai_khoa_duyet_component__WEBPACK_IMPORTED_MODULE_15__["TongHopDuTruMuaKSNKTaiKhoaDuyetComponent"],
                        _tong_hop_du_tru_mua_ksnk_tai_khoa_shared_tong_hop_du_tru_mua_ksnk_tai_khoa_shared_component__WEBPACK_IMPORTED_MODULE_16__["TongHopDuTruMuaKSNKTaiKhoaSharedComponent"],
                        // GuiTongHopDuTruMuaKSNKTaiKhoaConfirmComponent,
                        // TongHopDuTruMuaKSNKTaiKhoaKhongDuyetComponent,
                        // TongHopDuTruMuaKSNKTaiKhoaChiTietSharedComponent,
                        _phieu_mua_du_tru_tai_khoa_phieu_mua_du_tru_tai_khoa_component__WEBPACK_IMPORTED_MODULE_17__["PhieuMuaTruKSNKTaiKhoaComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _tong_hop_du_tru_mua_ksnk_tai_khoa_routing_module__WEBPACK_IMPORTED_MODULE_18__["TongHopDuTruMuaKSNKTaiKhoaRoutingModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                        _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_12__["DropDownButtonModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
                        _yeu_cau_mua_ksnk_yeu_cau_mua_ksnk_module__WEBPACK_IMPORTED_MODULE_19__["YeuCauMuaKSNKSModule"]
                    ],
                    entryComponents: [
                        // GuiTongHopDuTruMuaKSNKTaiKhoaConfirmComponent,
                        // TongHopDuTruMuaKSNKTaiKhoaKhongDuyetComponent,
                        _phieu_mua_du_tru_tai_khoa_phieu_mua_du_tru_tai_khoa_component__WEBPACK_IMPORTED_MODULE_17__["PhieuMuaTruKSNKTaiKhoaComponent"]
                    ]
                })
            ], TongHopDuTruMuaKSNKTaiKhoaModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=nhap-xuat-kiem-soat-nhiem-khuan-du-tru-mua-tong-hop-du-tru-mua-ksnk-tai-khoa-tong-hop-du-tru-mua-ksnk-tai-khoa-module-es2015.js.map
//# sourceMappingURL=nhap-xuat-kiem-soat-nhiem-khuan-du-tru-mua-tong-hop-du-tru-mua-ksnk-tai-khoa-tong-hop-du-tru-mua-ksnk-tai-khoa-module-es5.js.map
//# sourceMappingURL=nhap-xuat-kiem-soat-nhiem-khuan-du-tru-mua-tong-hop-du-tru-mua-ksnk-tai-khoa-tong-hop-du-tru-mua-ksnk-tai-khoa-module-es5.js.map