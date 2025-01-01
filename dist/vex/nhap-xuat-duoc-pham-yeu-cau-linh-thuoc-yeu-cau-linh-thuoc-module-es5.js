(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nhap-xuat-duoc-pham-yeu-cau-linh-thuoc-yeu-cau-linh-thuoc-module"], {
        /***/ "./node_modules/@iconify/icons-ic/sharp-edit.js": 
        /*!******************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/sharp-edit.js ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM21.41 6.34l-3.75-3.75-2.53 2.54 3.75 3.75 2.53-2.54z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/@iconify/icons-ic/warning.js": 
        /*!***************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/warning.js ***!
          \***************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/danh-sach-yeu-cau-linh-thuoc/danh-sach-yeu-cau-linh-thuoc.component.html": 
        /*!************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/danh-sach-yeu-cau-linh-thuoc/danh-sach-yeu-cau-linh-thuoc.component.html ***!
          \************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n            {Title:'Nhập xuất',Path:''}\n            ,{Title:'Dược phẩm',Path:''}\n            ,{Title:'Dự trù lĩnh',Path:''}\n            ,{Title:'Yêu cầu lĩnh dược phẩm',Path:'',Active:true}\n            ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\"\n                [allowSortDefault]=\"false\" [checkboxAble]=\"false\" pageSize=\"50\"\n                urlGetData=\"YeuCauLinhDuocPham/GetDataDSLinhDuocPhamForGridAsync\"\n                urlGetTotalPage=\"YeuCauLinhDuocPham/GetTotalPageFDSLinhDuocPhamForGridAsync\"\n                [detailTemplate]=\"detailTemplate\">\n                <!-- [detailTemplate]=\"detailTemplate\" -->\n            </app-grid>\n\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <app-checkbox name=\"dang-thanh-toan\" (modelChange)=\"checkTrangThaiDCT($event,1)\" class=\"ml-2\"\n                        [(model)]=\"kiemTraDanhSachDaChoGoi\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\" value=\"dangthanhtoan\" label=\"Đang chờ gởi\">\n                    </app-checkbox>\n                    <app-checkbox name=\"dang-thanh-toan\" (modelChange)=\"checkTrangThaiDCT($event,2)\" class=\"ml-2\"\n                        [(model)]=\"kiemTraDanhSachDangChoDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\" value=\"dangthanhtoan\" label=\"Đang chờ duyệt\">\n                    </app-checkbox>\n                    <app-checkbox name=\"dang-thanh-toan\" (modelChange)=\"checkTrangThaiDCT($event,3)\" class=\"ml-2\"\n                        [(model)]=\"kiemTraDanhSachTuChoiDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\" value=\"dangthanhtoan\" label=\"Từ chối duyệt\">\n                    </app-checkbox>\n                    <app-checkbox name=\"dang-thanh-toan\" (modelChange)=\"checkTrangThaiDCT($event,4)\" class=\"ml-2\"\n                        [(model)]=\"kiemTraDanhSachDaDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\" value=\"dangthanhtoan\" label=\"Đã duyệt\">\n                    </app-checkbox>\n\n                    <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                        fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"onKey($event)\"\n                            (ngModelChange)=\"searchChanges()\"\n                            placeholder=\"Nhập từ khóa(Người yêu cầu,Lĩnh từ kho,Lĩnh về kho,Người duyệt)\" />\n                    </div>\n                    <span fxFlex=\"5px\"></span>\n                    <app-daterangepicker id=\"Daterange\" fxFlex=\"250px\" class=\"mt-1 on-header\" (blur)=\"blur($event)\"\n                        [(model)]=\"timKiemTuNgay.NgayYeuCauRangDate\" label=\"Yêu cầu từ ngày - đến ngày\"\n                        (keyup)=\"onKeyDateRange($event)\" (modelChange)=\"changRange($event)\">\n                    </app-daterangepicker>\n                    <span fxFlex=\"5px\"></span>\n                    <app-daterangepicker id=\"Daterange\" fxFlex=\"250px\" label=\"Duyệt từ ngày - đến ngày\"\n                        class=\"mt-1 on-header\" (blur)=\"blur($event)\" (keyup)=\"onKeyDateRange($event)\"\n                        [(model)]=\"timKiemTuNgay.NgayDuyetRangDate\" (modelChange)=\"changRange($event)\">\n                    </app-daterangepicker>\n                    <!-- <button type=\"button\" color=\"primary\" (click)=\"TimkiemNangCao()\" class=\"ml-2\"\n                    mat-raised-button>Tìm</button> -->\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\"\n                        (click)=\"clearSearch()\">\n                        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                    </button>\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\"\n                        (click)=\"clearSearch()\">\n                        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                    </button>\n\n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" style=\"margin-left: auto;\" fxFlex=\"none\" class=\"mr-2\"\n                        mat-icon-button kendoTooltip title=\"Lọc cột\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                    </button>\n\n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of gridColumns\">\n                            <button *ngIf=\"column.Title != ''\"\n                                class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                    {{ column.Title }}\n                                </mat-checkbox>\n                            </button>\n                        </div>\n                    </mat-menu>\n                    <button (click)=\"exportExcel()\" mat-icon-button kendoTooltip title=\"Xuất Excel\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                    </button>\n                    <button [matMenuTriggerFor]=\"taoPhieuLinh\" class=\"ml-3 mr-2\" color=\"primary\" fxFlex=\"none\"\n                        mat-mini-fab kendoTooltip title=\"Thêm\" type=\"button\">\n                        <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                    </button>\n                    <mat-menu #taoPhieuLinh xPosition=\"after\" yPosition=\"below\">\n                        <button mat-menu-item\n                            (click)=\"gridChild.navigate('/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-thuong',149,3)\">\n                            <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                            <span>Tạo phiếu lĩnh dự trù</span>\n                        </button>\n                        <button mat-menu-item\n                            (click)=\"gridChild.navigate('/nhap-xuat/duoc-pham/duoc-pham-can-bu',150,3)\">\n                            <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                            <span>Tạo phiếu lĩnh bù</span>\n                        </button>\n                        <button mat-menu-item\n                            (click)=\"gridChild.navigate('/nhap-xuat/duoc-pham/duoc-pham-can-linh-truc-tiep',151,3)\">\n                            <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                            <span>Tạo phiếu lĩnh trực tiếp</span>\n                        </button>\n                    </mat-menu>\n                </div>\n            </ng-template>\n            <!-- <ng-template #detailTemplate let-dataItem>\n            <app-grid baseRoute=\"\" [gridColumns]=\"gridChild\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                [urlGetData]=\"urlGetDataChild\" [additionalSearchString]=\"dataItem.Id\" [autoHeight]=\"true\" [pageable]=\"false\">\n            </app-grid>\n        </ng-template> -->\n            <ng-template #actionTemplate let-dataItem>\n                {{dataItem.DaGui}}\n                <div kendoTooltip>\n                    <button type=\"button\" mat-raised-button mat-button\n                        (click)=\"Xem(dataItem.Id, dataItem.LoaiPhieuLinh,dataItem.DaGui)\" style=\"margin: 1px;\">\n                        Xem chi tiết\n                    </button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button (click)=\"InPhieuLinh(dataItem)\"\n                        style=\"margin: 1px;\" *ngIf=\"dataItem.DuocDuyet != true\">\n                        In phiếu lĩnh\n                    </button>\n                    <button type=\"button\" color=\"warn\" mat-raised-button mat-button (click)=\"Huy(dataItem)\"\n                        style=\"margin: 2px;\" *ngIf=\"dataItem.DuocDuyet != true\">\n                        Hủy\n                    </button>\n                </div>\n            </ng-template>\n\n            <ng-template #TinhTrangTemplate let-dataItem>\n                <span *ngIf=\"dataItem.DuocDuyet == null\" style=\"color: orange;\">{{dataItem.TinhTrang}}</span>\n                <span *ngIf=\"dataItem.DuocDuyet == false\" style=\"color: red;\">{{dataItem.TinhTrang}}</span>\n                <span *ngIf=\"dataItem.DuocDuyet == true\" style=\"color: green;\">{{dataItem.TinhTrang}}</span>\n            </ng-template>\n            <ng-template #ngayYeuCauTemplate let-dataItem>\n                {{dataItem.NgayYeuCauHienThi}}\n            </ng-template>\n            <ng-template #ngayDuyetTemplate let-dataItem>\n                {{dataItem.NgayDuyetHienThi}}\n            </ng-template>\n            <ng-template #maTNTemplate let-dataItem>\n                <a (click)=\"Xem(dataItem.Id, dataItem.LoaiPhieuLinh,dataItem.DaGui)\">{{dataItem.MaPL}}</a>\n            </ng-template>\n            <ng-template #groupTemplate let-dataItem>\n                <button (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\"\n                    [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                    <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n                </button>\n                <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <ng-template let-customer=\"customer\" matMenuContent>\n                        <!-- <button (click)=\"Xem(dataItem.Id, dataItem.LoaiPhieuLinh)\" mat-menu-item>\n                            <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                            <span>Sửa</span>\n                        </button> -->\n                        <button (click)=\"Huy(dataItem)\" mat-menu-item *ngIf=\"dataItem.DuocDuyet == null\">\n                            <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                            <span>Xóa</span>\n                        </button>\n                        <button (click)=\"InPhieuLinh(dataItem)\" mat-menu-item>\n                            <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                            <span>In</span>\n                        </button>\n                    </ng-template>\n                </mat-menu>\n            </ng-template>\n        </div>\n        <ng-template #detailTemplate let-dataItem>\n            <!-- 1 linh du tru null ,(true, false) -> # null -->\n            <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhDuTruChuaDuyetColumns\" *ngIf=\"dataItem.LoaiPhieuLinh == 1 && dataItem.DuocDuyet == null\"\n                [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                urlGetData=\"YeuCauLinhDuocPham/GetDataDSYeuCauLinhDuocPhamChildForGridAsync\"\n                urlGetTotalPage=\"YeuCauLinhDuocPham/GetTotalPageFDSYeuCauLinhDuocPhamChildForGridAsync\"\n                additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}\"\n                [autoHeight]=\"true\" [groups]=\"groups\">\n            </app-grid>\n            <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhDuTruDaDuyetColumns\" *ngIf=\"dataItem.LoaiPhieuLinh == 1 && dataItem.DuocDuyet != null\"\n                [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                urlGetData=\"YeuCauLinhDuocPham/GetDataDSYeuCauLinhDuocPhamChildForGridAsync\"\n                urlGetTotalPage=\"YeuCauLinhDuocPham/GetTotalPageFDSYeuCauLinhDuocPhamChildForGridAsync\"\n                additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}\"\n                [autoHeight]=\"true\" [groups]=\"groups\">\n            </app-grid>\n            <!-- end  linh du tru null ,(true, false) -> # null -->\n\n            <!-- 2 linh bu -->\n            <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhBuColumns\"\n                *ngIf=\"dataItem.LoaiPhieuLinh == 2 && dataItem.DuocDuyet == null\" [documentType]=\"documentType\"\n                [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                [lazyLoadPage]=\"true\" urlGetData=\"YeuCauLinhDuocPham/GetDataDSYeuCauLinhDuocPhamChildForGridAsync\"\n                urlGetTotalPage=\"YeuCauLinhDuocPham/GetTotalPageFDSYeuCauLinhDuocPhamChildForGridAsync\"\n                additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}\"\n                [autoHeight]=\"true\"  [detailTemplate]=\"detailTemplateDuocPhamLinhBu\">\n            </app-grid>\n            <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhBuDaDuyetColumns\"\n                *ngIf=\"dataItem.LoaiPhieuLinh == 2 && dataItem.DuocDuyet == true\" [documentType]=\"documentType\"\n                [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                [lazyLoadPage]=\"true\" urlGetData=\"YeuCauLinhDuocPham/GetDataDSYeuCauLinhDuocPhamChildForGridAsync\"\n                urlGetTotalPage=\"YeuCauLinhDuocPham/GetTotalPageFDSYeuCauLinhDuocPhamChildForGridAsync\"\n                additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}\"\n                [autoHeight]=\"true\"  [detailTemplate]=\"detailTemplateDuocPhamLinhBu\">\n            </app-grid>\n            <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhBuTuChoiColumns\"\n                *ngIf=\"dataItem.LoaiPhieuLinh == 2 && dataItem.DuocDuyet ==false\" [documentType]=\"documentType\"\n                [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                [lazyLoadPage]=\"true\" urlGetData=\"YeuCauLinhDuocPham/GetDataDSYeuCauLinhDuocPhamChildForGridAsync\"\n                urlGetTotalPage=\"YeuCauLinhDuocPham/GetTotalPageFDSYeuCauLinhDuocPhamChildForGridAsync\"\n                additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}\"\n                [autoHeight]=\"true\" >\n            </app-grid>\n            <!-- 3 linh người bệnh -->\n            <app-grid #gridA baseRoute=\"\" [gridColumns]=\"gridChildLinhBenhNhanColumns\"\n                *ngIf=\"dataItem.LoaiPhieuLinh == 3 && dataItem.DuocDuyet != false\" [documentType]=\"documentType\"\n                [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                [lazyLoadPage]=\"true\" urlGetData=\"YeuCauLinhDuocPham/GetDataDSYeuCauLinhDuocPhamChildForGridAsync\n                        \" urlGetTotalPage=\"YeuCauLinhDuocPham/GetTotalPageFDSYeuCauLinhDuocPhamChildForGridAsync\"\n                additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}-{{dataItem.DuocDuyet}}-{{dataItem.DaGui}}\"\n                [autoHeight]=\"true\" [detailTemplate]=\"detailTemplateDuocPhamLinhBenhNhan\">\n            </app-grid>\n\n            <app-grid #gridB baseRoute=\"\" [gridColumns]=\"gridChildChildLinhBenhNhanTuChoiColumns\"\n                *ngIf=\"dataItem.LoaiPhieuLinh == 3 && dataItem.DuocDuyet == false\" [documentType]=\"documentType\"\n                [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                [lazyLoadPage]=\"true\" urlGetData=\"YeuCauLinhDuocPham/GetDataDSYeuCauLinhDuocPhamChildForGridAsync\"\n                urlGetTotalPage=\"YeuCauLinhDuocPham/GetTotalPageFDSYeuCauLinhDuocPhamChildForGridAsync\"\n                additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}-{{dataItem.DuocDuyet}}\"\n                [autoHeight]=\"true\" >\n            </app-grid>\n        </ng-template>\n        <!-- child linh người bệnh -->\n        <ng-template #detailTemplateDuocPhamLinhBenhNhan let-dataItem>\n            <app-grid baseRoute=\"\" *ngIf=\"dataItem.DuocDuyet == null\" [gridColumns]=\"gridChildChildLinhBenhNhanColumns\" [documentType]=\"documentType\"\n                [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                [lazyLoadPage]=\"true\" urlGetData=\"YeuCauLinhDuocPham/GetDataDSYeuCauLinhDuocPhamChildChildForGridAsync\"\n                urlGetTotalPage=\"YeuCauLinhDuocPham/GetTotalPageFDSYeuCauLinhDuocPhamChildChildForGridAsync\" \n                additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.DuocPhamBenhVienId}}-{{dataItem.LaBHYT}}-{{dataItem.LinhVeKhoId}}-{{dataItem.YeuCauTiepNhanId}}-{{dataItem.DuocDuyet}}-{{dataItem.KhoLinhId}}\"\n                [autoHeight]=\"true\">\n            </app-grid>\n            <app-grid baseRoute=\"\" *ngIf=\"dataItem.DuocDuyet != null\" [gridColumns]=\"gridChildChildLinhBenhNhanDaDuyetColumns\" [documentType]=\"documentType\"\n            [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n            [lazyLoadPage]=\"true\" urlGetData=\"YeuCauLinhDuocPham/GetDataDSYeuCauLinhDuocPhamChildChildForGridAsync\"\n            urlGetTotalPage=\"YeuCauLinhDuocPham/GetTotalPageFDSYeuCauLinhDuocPhamChildChildForGridAsync\" \n            additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.DuocPhamBenhVienId}}-{{dataItem.LaBHYT}}-{{dataItem.LinhVeKhoId}}-{{dataItem.YeuCauTiepNhanId}}-{{dataItem.DuocDuyet}}-{{dataItem.KhoLinhId}}\"\n            [autoHeight]=\"true\">\n        </app-grid>\n        </ng-template>\n        <!-- child linh bu -->\n        <ng-template #detailTemplateDuocPhamLinhBu let-dataItem>\n            <app-grid baseRoute=\"\" *ngIf=\"dataItem.DaDuyet == null\" [gridColumns]=\"gridChildChildLinhBuColumns\" [documentType]=\"documentType\"\n                [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                [lazyLoadPage]=\"true\" urlGetData=\"YeuCauLinhDuocPham/GetDataDSYeuCauLinhDuocPhamChildChildForGridAsync\"\n                urlGetTotalPage=\"YeuCauLinhDuocPham/GetTotalPageFDSYeuCauLinhDuocPhamChildChildForGridAsync\"\n                additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.DuocPhamBenhVienId}}-{{dataItem.LaBHYT}}-{{dataItem.LinhVeKhoId}}\"\n                [autoHeight]=\"true\">\n            </app-grid>\n            <app-grid baseRoute=\"\" *ngIf=\"dataItem.DaDuyet == true\" [gridColumns]=\"gridChildChildLinhBuDaDuyetColumns\" [documentType]=\"documentType\"\n            [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n            [lazyLoadPage]=\"true\" urlGetData=\"YeuCauLinhDuocPham/GetDataDSYeuCauLinhDuocPhamChildChildForGridAsync\"\n            urlGetTotalPage=\"YeuCauLinhDuocPham/GetTotalPageFDSYeuCauLinhDuocPhamChildChildForGridAsync\"\n            additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.DuocPhamBenhVienId}}-{{dataItem.LaBHYT}}-{{dataItem.LinhVeKhoId}}\"\n            [autoHeight]=\"true\">\n        </app-grid>\n        </ng-template>\n        <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n            <strong>{{value}}</strong>\n        </ng-template>\n        <ng-template #sttTemplate let-dataItem let-rowIndex=\"rowIndex\">\n            {{rowIndex + 1}}\n        </ng-template>\n        <ng-template #slCanBuTemplate let-dataItem let-rowIndex=\"rowIndex\">\n            {{ dataItem.SoLuongCanBuString}}\n        </ng-template>\n        \n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/in-linh-duoc-pham/in-linh-duoc-pham.component.html": 
        /*!**************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/in-linh-duoc-pham/in-linh-duoc-pham.component.html ***!
          \**************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-1\">\n    <div>XEM TRƯỚC KHI IN</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n    \n</div>\n<mat-dialog-content style=\"overflow:hidden\">\n    <div class=\"container-iframe\">\n        <iframe width=\"100%\" style=\"height: 500px;\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <app-print-form textPrint=\"In\" type=\"PDF\" [event]=\"modelPrint\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-gui-lai/phieu-linh-thuoc-bu-gui-lai.component.html": 
        /*!**********************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-gui-lai/phieu-linh-thuoc-bu-gui-lai.component.html ***!
          \**********************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Dược phẩm',Path:''}\n                ,{Title:'Dự trù lĩnh',Path:''}\n                ,{Title:'Yêu cầu lĩnh dược phẩm',Path:'/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc',queryParams: {holdQuery : true },Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Yêu cầu lĩnh bù dược phẩm</h2>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == true\"\n                    style=\"color:green\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == false\"\n                    style=\"color:red\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == null && trangThaiVo.EnumTrangThaiPhieuLinh == 2\"\n                    style=\"color:orange\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == null && trangThaiVo.EnumTrangThaiPhieuLinh == 1\"\n                    style=\"color:blue\">{{trangThaiVo.Ten}}</b>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-phieu-linh-thuoc-bu-shared #temp *ngIf=\"trangThaiVo!=null\" [isCreate]=\"trangThaiVo.TrangThai==null\"\n                    (hideDuyetbtn)=\"anHienButtonDuyet($event)\" (disabledNguoiTaoPhieu)=\"disableNguoiTaoPhieu($event)\"\n                    [validationErrorsLinhBu]=\"validationErrors\" [trangThaiVo]=\"trangThaiVo\">\n\n                </app-phieu-linh-thuoc-bu-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" [disabled]=\"!isHideDuyet\" (click)=\"inPhieu()\" *ngIf=\"isDisabledNguoiTaoPhieu\"\n                        color=\"primary\" mat-raised-button><i class=\"ft-save\"></i>\n                        In phiếu lĩnh</button>\n\n                    <button type=\"button\" title=\"Phím tắt: Esc\" (click)=\"cancel()\" mat-button\n                        class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n\n                    <button type=\"button\" *ngIf=\"isDisabledNguoiTaoPhieu && (trangThaiVo != undefined && trangThaiVo != null \n                        && (trangThaiVo.TrangThai != true && trangThaiVo.TrangThai != false))\"\n                        [disabled]=\"!isHideDuyet\" (click)=\"luuPhieuLinhBu(false)\" color=\"primary\" mat-raised-button><i\n                            class=\"ft-save\"></i>\n                        Lưu tạm</button>\n                    <button type=\"button\" *ngIf=\"isDisabledNguoiTaoPhieu && ( trangThaiVo != undefined && trangThaiVo != null \n                            && (trangThaiVo.TrangThai != true && trangThaiVo.TrangThai != false))\"\n                        [disabled]=\"!isHideDuyet\" (click)=\"luuPhieuLinhBu(true)\" color=\"primary\" mat-raised-button><i\n                            class=\"ft-save\"></i>\n                        Gửi</button>\n                    <!-- <button type=\"button\"\n                        *ngIf=\"!loading && trangThaiVo != undefined && trangThaiVo != null \n                            && (trangThaiVo.TrangThai != null && trangThaiVo.TrangThai != true && trangThaiVo.TrangThai != false) \"\n                        [disabled]=\"!isHideDuyet\" (click)=\"luuVaGuiDuyetLai()\" color=\"primary\" mat-raised-button><i\n                            class=\"ft-save\"></i> Lưu & Gửi\n                        duyệt lại</button> -->\n                    <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img\n                            src=\"/assets/img/loader.gif\" alt=\"Loading\" /></button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-popup/phieu-linh-thuoc-bu-popup.component.html": 
        /*!******************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-popup/phieu-linh-thuoc-bu-popup.component.html ***!
          \******************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-0\">\n    <div>PHIẾU LĨNH THUỐC</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\"><iframe width=\"100%\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' class=\"mr-1 mt-2\" textPrint=\"In lĩnh dược phẩm\" type=\"PDF\" [bodyComponent]=\"this\" *ngIf=\"showNutIn\">\n    </app-print-form>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-shared/phieu-linh-thuoc-bu-shared.component.html": 
        /*!********************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-shared/phieu-linh-thuoc-bu-shared.component.html ***!
          \********************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n    fxLayoutAlign=\"space-between\">\n\n    <div fxFlex=\"100%\" *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai == false\">\n        <h4 style=\"color: red;\">Lý do: {{yeuCauLinhBuDuocPham.LyDoKhongDuyet}}</h4>\n    </div>\n    <!-- [disabled]=\"!isCreate && trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false) || yeuCauLinhBuDuocPham.LaNguoiTaoPhieu == false\" -->\n    <app-combobox *ngIf=\"yeuCauLinhBuDuocPham.LaNguoiTaoPhieu == false\" id=\"linhTuKho\" fxFlex=\"25%\" fxFlex.sm=\"25%\"\n        [required]=\"true\" [(model)]=\"yeuCauLinhBuDuocPham.KhoXuatId\" [modelText]=\"yeuCauLinhBuDuocPham.TenKhoXuat\"\n        label=\"Lĩnh từ kho\" url=\"YeuCauLinhDuocPham/GetKhoLinh\" [disabled]=\"true\" class=\"item-no-padding\"\n        (modelChange)=\"linhTuKhoChange($event)\" [bind]=\"true\">\n\n    </app-combobox>\n\n    <app-combobox *ngIf=\"yeuCauLinhBuDuocPham.LaNguoiTaoPhieu == false\" id=\"linhVeKho\" fxFlex=\"25%\" fxFlex.sm=\"25%\"\n        [required]=\"true\" [(model)]=\"yeuCauLinhBuDuocPham.KhoNhapId\" [modelText]=\"yeuCauLinhBuDuocPham.TenKhoNhap\"\n        [disabled]=\"true\" label=\"Lĩnh về kho\" (modelChange)=\"linhVeKhoChange($event)\" class=\"item-no-padding\">\n\n    </app-combobox>\n    <!-- [disabled]=\"!isCreate && trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false)\" -->\n\n    <app-combobox *ngIf=\"yeuCauLinhBuDuocPham.LaNguoiTaoPhieu == null || yeuCauLinhBuDuocPham.LaNguoiTaoPhieu == true\"\n        id=\"linhTuKho\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\" url=\"YeuCauLinhDuocPham/GetKhoLinh\"\n        [(model)]=\"yeuCauLinhBuDuocPham.KhoXuatId\" [modelText]=\"yeuCauLinhBuDuocPham.TenKhoXuat\" label=\"Lĩnh từ kho\"\n        [queryInfo]=\"{ParameterDependencies:'{KhoId:' + linhTuKhoId +'}', Take: 50}\" class=\"item-no-padding\"\n        (modelChange)=\"linhTuKhoChange($event)\" [bind]=\"true\" [disabled]=\"true\"\n        [validationerror]=\"'KhoXuatId' | validationerror:validationErrorsLinhBu\">\n    </app-combobox>\n\n    <app-combobox *ngIf=\"yeuCauLinhBuDuocPham.LaNguoiTaoPhieu == null || yeuCauLinhBuDuocPham.LaNguoiTaoPhieu == true\"\n        id=\"linhVeKho\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\" [bind]=\"true\" [disabled]=\"true\"\n        [(model)]=\"yeuCauLinhBuDuocPham.KhoNhapId\" [modelText]=\"yeuCauLinhBuDuocPham.TenKhoNhap\"\n        [queryInfo]=\"{ParameterDependencies:'{KhoId:' + linhVeKhoId +'}', Take: 50}\"\n        url=\"YeuCauLinhDuocPham/GetKhoCurrentUserLinhBu\" label=\"Lĩnh về kho\" (modelChange)=\"linhVeKhoChange($event)\"\n        class=\"item-no-padding\" [validationerror]=\"'KhoNhapId' | validationerror:validationErrorsLinhBu\">\n    </app-combobox>\n    <app-textbox id=\"nguoiYeuCau\"\n        [fxFlex]=\"!isCreate && trangThaiVo != null && (trangThaiVo.TrangThai == false || trangThaiVo.TrangThai == true) ? '13%' : '25%'\"\n        [fxFlex.sm]=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai != null ? '13%' : '25%'\"\n        [required]=\"true\" [(model)]=\"yeuCauLinhBuDuocPham.HoTenNguoiYeuCau\" maxlength=\"250\" label=\"Người yêu cầu\"\n        disabled={{true}}>\n    </app-textbox>\n\n    <app-datepicker id=\"ngayYeuCau\"\n        [fxFlex]=\"!isCreate && trangThaiVo != null && (trangThaiVo.TrangThai == false || trangThaiVo.TrangThai == true) ? '12%' : '25%'\"\n        [fxFlex.sm]=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai != null ? '12%' : '25%'\"\n        [(model)]=\"yeuCauLinhBuDuocPham.NgayYeuCau\" disabled={{true}} [required]=\"true\" label=\"Ngày yêu cầu\">\n    </app-datepicker>\n\n    <app-textbox\n        *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai != false && trangThaiVo.TrangThai != null\"\n        id=\"nguoiPheDuyet\" fxFlex=\"13\" fxFlex.sm=\"13\" maxlength=\"250\" label=\"Người phê duyệt\"\n        [(model)]=\"yeuCauLinhBuDuocPham.TenNhanVienDuyet\" disabled={{true}} [required]=\"true\">\n    </app-textbox>\n\n    <app-datepicker\n        *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai != false && trangThaiVo.TrangThai != null\"\n        id=\"ngayDuyet\" fxFlex=\"12\" fxFlex.sm=\"12\" [required]=\"true\" label=\"Ngày duyệt\"\n        [(model)]=\"yeuCauLinhBuDuocPham.NgayDuyet\" disabled={{true}}>\n    </app-datepicker>\n\n    <app-textbox *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai == false\" id=\"nguoiPheDuyet\"\n        fxFlex=\"13\" fxFlex.sm=\"13\" maxlength=\"250\" label=\"Người phê duyệt\"\n        [(model)]=\"yeuCauLinhBuDuocPham.TenNhanVienDuyet\" disabled={{true}} [required]=\"true\">\n    </app-textbox>\n\n    <app-datepicker *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai == false\" id=\"ngayDuyet\"\n        fxFlex=\"12\" fxFlex.sm=\"12\" [required]=\"true\" label=\"Ngày duyệt\" [(model)]=\"yeuCauLinhBuDuocPham.NgayDuyet\"\n        disabled={{true}}>\n    </app-datepicker>\n\n\n    <app-textarea id=\"ghiChu\" fxFlex=\"100\" fxFlex.sm=\"100\" maxlength=\"4000\" label=\"Ghi chú\" minHeight=\"20\"\n        [disabled]=\"!isCreate && trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false) || yeuCauLinhBuDuocPham.LaNguoiTaoPhieu == false\"\n        [(model)]=\"yeuCauLinhBuDuocPham.GhiChu\">\n    </app-textarea>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông tin dược phẩm</h3>\n\n    <ng-container *ngIf=\"isCreate\">\n        <app-datetimepicker fxFlex=\"15%\" [(model)]=\"yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhTuFormat\" #tiepnhantu\n            id=\"ThoiDiemChiDinhTuFormat\" (modelChange)=\"thoiDiemTNChange()\" label=\"Từ ngày chỉ định\" class=\"on-header\">\n        </app-datetimepicker>\n        <app-datetimepicker fxFlex=\"15%\" [(model)]=\"yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhDenFormat\" #tiepnhanden\n            id=\"ThoiDiemChiDinhDenFormat\" (modelChange)=\"thoiDiemTNChange()\" label=\"đến ngày chỉ định\"\n            class=\"on-header\">\n        </app-datetimepicker>\n        <div fxFlex=\"70%\" fxHide.sm></div>\n    </ng-container>\n\n    <div fxFlex=\"100%\" fxLayoutAlign=\"end center\"\n        [style.display]=\"(trangThaiVo != undefined && trangThaiVo != null  && (trangThaiVo.TrangThai == null || trangThaiVo.TrangThai == true) || isCreate) ? 'block' : 'none'\">\n        <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridColumns]=\"gridColumns\"\n            [allowSortDefault]=\"true\" [documentType]=\"documentType\" [useAddDeault]=\"false\" #gridDuocPham\n            [showStt]=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == true ? true : false\"\n            (extOnDataBound)=\"onDataBoundGrid($event)\" [urlGetData]=\"urlGetDataGrid\"\n            [urlGetTotalPage]=\"urlGetTotalPageGrid\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n            [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\" [pageable]=\"false\"\n            [detailTemplate]=\"detailTemplate\" [additionalSearchString]=\"dieuKienLoadGridDuocPham\">\n        </app-grid>\n        <ng-template #detailTemplate let-dataItem>\n            <app-grid style=\"width: 1px;\" [gridColumns]=\"gridChildColumns\" [allowSortDefault]=\"true\"\n                [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\"\n                [pageable]=\"true\" [pageSize]=\"10\" [urlGetData]=\"urlGetDataGridChild\" [showStt]=\"true\"\n                [urlGetTotalPage]=\"urlGetTotalPageGridChild\" [sort]=\"sortChild\" [additionalSearchString]=\"phieuLinhId + ';' \n                                                      + dataItem.DuocPhamBenhVienId + ';' \n                                                      + dataItem.LaBHYT + ';' \n                                                      + isCreate + ';' \n                                                      + yeuCauLinhBuDuocPham.KhoNhapId + ';' \n                                                      + (trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai) + ';'\n                                                      + dataItem.SoLuongTon + ';'\n                                                      + yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhTu + ';'\n                                                      + yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhDen + ';'\n                                                      \">\n            </app-grid>\n        </ng-template>\n    </div>\n\n    <div fxFlex=\"100%\" fxLayoutAlign=\"end center\"\n        [style.display]=\"(trangThaiVo != undefined && trangThaiVo != null  && trangThaiVo.TrangThai == false ) ? 'block' : 'none'\">\n        <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridColumns]=\"gridColumns\"\n            [allowSortDefault]=\"true\" [documentType]=\"documentType\" [useAddDeault]=\"false\" #gridDuocPhamTuChoi\n            (extOnDataBound)=\"onDataBoundGrid($event)\" [urlGetData]=\"urlGetDataGrid\" [showStt]=\"true\"\n            [urlGetTotalPage]=\"urlGetTotalPageGrid\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n            [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\" [pageable]=\"false\"\n            [additionalSearchString]=\"dieuKienLoadGridDuocPham\">\n        </app-grid>\n    </div>\n\n    <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n        <strong>{{value}}</strong>\n    </ng-template>\n    <ng-template #slYeuCauTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <div>\n            <span fxFlex=\"70%\">\n                {{dataItem.SoLuongTon}}\n            </span>\n            <mat-icon class=\"icon-war-status-grid\"\n                *ngIf=\"dataItem.SoLuongTon != null && yeuCauLinhBuDuocPham.KhoXuatId != null && dataItem.SoLuongCanBu > dataItem.SoLuongTon\"\n                fxFlex=\"30%\" [icIcon]=\"icWarning\" kendoTooltip title=\"Số lượng tồn ít hơn số lượng bù\">\n            </mat-icon>\n        </div>\n    </ng-template>\n\n    <ng-template #slYeuCauLinhThucTeTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <app-textboxnumeric\n            *ngIf=\"(trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == null) || trangThaiVo == undefined\"\n            [fxFlex]=\"dataItem.SLYeuCauLinhThucTe > 0 ? '100%' : '70%'\" [(model)]=\"dataItem.SLYeuCauLinhThucTe\"\n            [required]=\"true\" min=\"0\" label=\" \" (modelChange)=\"ganSLThucTeChange($event, dataItem.DuocPhamBenhVienId)\"\n            [validationerror]=\"'YeuCauDuocPhamBenhViens['+rowIndex+'].SLYeuCauLinhThucTe' | validationerror:validationErrorsLinhBu\">\n            <!-- [max]=\"dataItem.SLYeuCauLinhThucTeMax\" -->\n        </app-textboxnumeric>\n        <mat-icon class=\"icon-war-status-grid\" *ngIf=\"dataItem.SLYeuCauLinhThucTe == 0\" fxFlex=\"30%\"\n            [icIcon]=\"icWarning\" kendoTooltip title=\"Sẽ không tạo lĩnh bù cho dược phẩm này.\">\n        </mat-icon>\n        <div *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai != null\">\n            {{dataItem.SLYeuCauLinhThucTe}}\n        </div>\n    </ng-template>\n\n    <ng-template #sttTemplate let-dataItem let-rowIndex=\"rowIndex\"> {{rowIndex + 1}}\n    </ng-template>\n    <ng-template #checkBoxTemplate let-dataItem>\n        <app-checkbox id=\"vehicle1-{{dataItem.DuocPhamBenhVienId}}\" value=\"true\" [(model)]=\"dataItem.CheckBox\"\n            (modelChange)=\"checkBoxDichVu(dataItem, $event)\" label=\" \" class=\"pl-2\">\n        </app-checkbox>\n    </ng-template>\n\n    <ng-template #checkBoxHeaderTemplate let-dataItem>\n        <app-checkbox id=\"vehicle1\" name=\"vehicle1\" value=\"true\" [(model)]=\"checkAll\"\n            (modelChange)=\"checkBoxAllChange($event)\" label=\" \" class=\"pl-2\">\n        </app-checkbox>\n    </ng-template>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-gui-lai/phieu-linh-thuoc-thuong-gui-lai.component.html": 
        /*!******************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-gui-lai/phieu-linh-thuoc-thuong-gui-lai.component.html ***!
          \******************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Dược phẩm',Path:''}\n                ,{Title:'Dự trù lĩnh',Path:''}\n                ,{Title:'Yêu cầu lĩnh dược phẩm',Path:'/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc',queryParams: {holdQuery : true },Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Yêu cầu lĩnh dự trù dược phẩm</h2>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == true\"\n                    style=\"color:green\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == false\"\n                    style=\"color:red\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == null && trangThaiVo.EnumTrangThaiPhieuLinh == 2\"\n                    style=\"color:orange\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == null && trangThaiVo.EnumTrangThaiPhieuLinh == 1\"\n                    style=\"color:blue\">{{trangThaiVo.Ten}}</b>\n\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-phieu-linh-thuoc-thuong-shared #temp *ngIf=\"trangThaiVo!=null\"\n                    [validationErrorsLinhThuong]=\"validationErrors\" [isCreate]=\"trangThaiVo.TrangThai==null\"\n                    (disabledNguoiTaoPhieu)=\"disableNguoiTaoPhieu($event)\" (hideDuyetbtn)=\"anHienButtonDuyet($event)\"\n                    [trangThaiVo]=\"trangThaiVo\">\n                </app-phieu-linh-thuoc-thuong-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" [disabled]=\"!isHideDuyet\" (click)=\"inPhieu()\" color=\"primary\"\n                        *ngIf=\"isDisabledNguoiTaoPhieu\" mat-raised-button><i class=\"ft-save\"></i>\n                        In phiếu lĩnh</button>\n\n                    <button type=\"button\" title=\"Phím tắt: Esc\" (click)=\"cancel()\" mat-button\n                        class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n                    <button type=\"button\"\n                        *ngIf=\"!loading && trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai != true && isDisabledNguoiTaoPhieu\"\n                        [disabled]=\"!isHideDuyet\" (click)=\"luuPhieuLinhThuong()\" color=\"primary\" mat-raised-button><i\n                            class=\"ft-save\"></i>\n                        Lưu tạm</button>\n                    <button type=\"button\"\n                        *ngIf=\"!loading && trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai != true && isDisabledNguoiTaoPhieu\"\n                        [disabled]=\"!isHideDuyet\" (click)=\"guiPhieuLinhThuong()\" color=\"primary\" mat-raised-button><i\n                            class=\"ft-save\"></i>\n                        Gửi</button>\n                    <button type=\"button\"\n                        *ngIf=\"!loading && trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == false && isDisabledNguoiTaoPhieu\"\n                        [disabled]=\"!isHideDuyet\" (click)=\"luuVaGuiDuyetLai()\" color=\"primary\" mat-raised-button><i\n                            class=\"ft-save\"></i> Lưu tạm & Gửi\n                        duyệt lại</button>\n                    <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img\n                            src=\"/assets/img/loader.gif\" alt=\"Loading\" /></button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-popup/phieu-linh-thuoc-thuong-popup.component.html": 
        /*!**************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-popup/phieu-linh-thuoc-thuong-popup.component.html ***!
          \**************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-0\">\n    <div>PHIẾU LĨNH THUỐC</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\"><iframe width=\"100%\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' class=\"mr-1 mt-2\" textPrint=\"In lĩnh dược phẩm\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-shared/phieu-linh-thuoc-thuong-shared.component.html": 
        /*!****************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-shared/phieu-linh-thuoc-thuong-shared.component.html ***!
          \****************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n    <div fxFlex=\"100%\" *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai == false\">\n        <h4 style=\"color: red;\">Lý do: {{yeuCauLinhDuocPham.LyDoKhongDuyet}}</h4>\n    </div>\n\n    <app-combobox *ngIf=\"yeuCauLinhDuocPham.LaNguoiTaoPhieu == false\" id=\"linhTuKho\" fxFlex=\"25%\" fxFlex.sm=\"25%\"\n        [required]=\"true\" url=\"YeuCauLinhDuocPham/GetKhoLinh\" [(model)]=\"yeuCauLinhDuocPham.KhoXuatId\"\n        [modelText]=\"yeuCauLinhDuocPham.TenKhoXuat\" label=\"Lĩnh từ kho\"\n        [disabled]=\"(trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false) && icDisable == true) || (icDisable == true)\"\n        (modelChange)=\"clearGridDuocPham()\">\n    </app-combobox>\n\n    <app-combobox *ngIf=\"yeuCauLinhDuocPham.LaNguoiTaoPhieu == false\" id=\"linhVeKho\" fxFlex=\"25%\" fxFlex.sm=\"25%\"\n        [required]=\"true\" [(model)]=\"yeuCauLinhDuocPham.KhoNhapId\" [modelText]=\"yeuCauLinhDuocPham.TenKhoNhap\"\n        url=\"YeuCauLinhDuocPham/GetKhoCurrentUser\" label=\"Lĩnh về kho\"\n        [disabled]=\"(trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false) && icDisable == true) || (icDisable == true)\"\n        (modelChange)=\"clearGridDuocPham()\">\n    </app-combobox>\n\n    <app-combobox *ngIf=\"yeuCauLinhDuocPham.LaNguoiTaoPhieu == null || yeuCauLinhDuocPham.LaNguoiTaoPhieu == true\"\n        id=\"linhTuKho\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\" url=\"YeuCauLinhDuocPham/GetKhoLinh\"\n        [(model)]=\"yeuCauLinhDuocPham.KhoXuatId\" [modelText]=\"yeuCauLinhDuocPham.TenKhoXuat\" label=\"Lĩnh từ kho\"\n        [disabled]=\"(trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false) && icDisable == true) || (icDisable == true)\"\n        (modelChange)=\"clearGridDuocPham()\"\n        [validationerror]=\"'KhoXuatId' | validationerror:validationErrorsLinhThuong\">\n    </app-combobox>\n    <app-combobox *ngIf=\"yeuCauLinhDuocPham.LaNguoiTaoPhieu == null || yeuCauLinhDuocPham.LaNguoiTaoPhieu == true\"\n        id=\"linhVeKho\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\" [(model)]=\"yeuCauLinhDuocPham.KhoNhapId\"\n        [modelText]=\"yeuCauLinhDuocPham.TenKhoNhap\" url=\"YeuCauLinhDuocPham/GetKhoCurrentUser\" label=\"Lĩnh về kho\"\n        [disabled]=\"(trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false) && icDisable == true) || (icDisable == true)\"\n        (modelChange)=\"clearGridDuocPham()\"\n        [validationerror]=\"'KhoNhapId' | validationerror:validationErrorsLinhThuong\">\n    </app-combobox>\n\n    <app-textbox id=\"nguoiYeuCau\"\n        [fxFlex]=\"!isCreate && trangThaiVo != null && (trangThaiVo.TrangThai == true  || trangThaiVo.TrangThai == false)? '13%' : '25%'\"\n        [fxFlex.sm]=\"!isCreate && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false)? '13%' : '25%'\"\n        [(model)]=\"yeuCauLinhDuocPham.HoTenNguoiYeuCau\" maxlength=\"250\" label=\"Người yêu cầu\" disabled={{true}}>\n    </app-textbox>\n\n    <app-datepicker id=\"ngayYeuCau\"\n        [fxFlex]=\"!isCreate && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false) ? '12%' : '25%'\"\n        [fxFlex.sm]=\"!isCreate && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false)? '12%' : '25%'\"\n        [(model)]=\"yeuCauLinhDuocPham.NgayYeuCau\" disabled={{true}} [required]=\"true\" label=\"Ngày yêu cầu\">\n    </app-datepicker>\n\n    <app-textbox *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai == true\" id=\"nguoiPheDuyet\"\n        fxFlex=\"13\" fxFlex.sm=\"13\" maxlength=\"250\" label=\"Người phê duyệt\"\n        [(model)]=\"yeuCauLinhDuocPham.HoTenNguoiDuyet\" disabled={{true}} [required]=\"true\">\n    </app-textbox>\n\n    <app-datepicker *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai == true\" id=\"ngayDuyet\" fxFlex=\"12\"\n        fxFlex.sm=\"12\" [required]=\"true\" label=\"Ngày duyệt\" [(model)]=\"yeuCauLinhDuocPham.NgayDuyet\" disabled={{true}}>\n    </app-datepicker>\n\n    <app-textbox *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai == false\" id=\"nguoiTuChoiDuyet\"\n        fxFlex=\"13\" fxFlex.sm=\"13\" maxlength=\"250\" label=\"Người từ chối duyệt\"\n        [(model)]=\"yeuCauLinhDuocPham.HoTenNguoiDuyet\" disabled={{true}} [required]=\"true\">\n    </app-textbox>\n\n    <app-datepicker *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai == false\" id=\"ngayTuChoiDuyet\"\n        fxFlex=\"12\" fxFlex.sm=\"12\" [required]=\"true\" label=\"Ngày từ chối duyệt\" [(model)]=\"yeuCauLinhDuocPham.NgayDuyet\"\n        disabled={{true}}>\n    </app-datepicker>\n\n    <app-textarea id=\"ghiChu\" fxFlex=\"100\" fxFlex.sm=\"100\" maxlength=\"4000\" label=\"Ghi chú\" minHeight=\"20\"\n        [disabled]=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == true || yeuCauLinhDuocPham.LaNguoiTaoPhieu == false\"\n        [(model)]=\"yeuCauLinhDuocPham.GhiChu\">\n    </app-textarea>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông tin dược phẩm</h3>\n\n    <ng-container *ngIf=\"yeuCauLinhDuocPham.LaNguoiTaoPhieu == true || yeuCauLinhDuocPham.LaNguoiTaoPhieu == null\">\n        <app-radio id=\"loai\" label=\"Loại\" fxFlex=\"15%\" fxFlex.sm=\"15%\" [(model)]=\"duocPhamGrid.LoaiDuocPham\" [disabled]=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == true || yeuCauLinhDuocPham.KhoXuatId == null || yeuCauLinhDuocPham.KhoNhapId == null\n        || yeuCauLinhDuocPham.KhoXuatId == undefined || yeuCauLinhDuocPham.KhoNhapId == undefined\"\n            (modelChange)=\"huy()\" [items]=\"[{Value:1,Text:'Không BHYT'},{Value:2,Text:'BHYT'}]\">\n        </app-radio>\n\n        <app-combobox id=\"duocPham\" fxFlex=\"40%\" fxFlex.sm=\"40%\" [required]=\"true\"\n            url=\"YeuCauLinhDuocPham/GetDuocPhamKho\" [(model)]=\"duocPhamGrid.DuocPhamBenhVienId\" [disabled]=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == true || yeuCauLinhDuocPham.KhoXuatId == null || yeuCauLinhDuocPham.KhoNhapId == null\n        || yeuCauLinhDuocPham.KhoXuatId == undefined || yeuCauLinhDuocPham.KhoNhapId == undefined\"\n            [queryInfo]=\"{ParameterDependencies:'{KhoId:' +yeuCauLinhDuocPham.KhoXuatId +', LaDuocPhamBHYT: '+duocPhamGrid.LoaiDuocPham+'}', Take: 50}\"\n            (selectionChange)=\"chonDuocPham($event)\" [template]=\"duocPhamTemplate\" (keyup)=\"onKey($event)\"\n            (openCombobox)=\"openCombobox($event)\" [templateHeader]=\"duocPhamTemplateHeader\" label=\"Dược phẩm\"\n            class=\"item-no-padding\" [popupSettings]=\"{width: 800,popupClass:'item-no-padding'}\"\n            [validationerror]=\"'DuocPhamBenhVienId' | validationerror:validationErrors\">\n            <ng-template #duocPhamTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"10%\">Mã DP</th>\n                        <th width=\"25%\">Dược phẩm</th>\n                        <th width=\"20%\">Hoạt chất</th>\n                        <th width=\"10%\">ĐVT</th>\n                        <th width=\"10%\">ĐD</th>\n                        <th width=\"10%\">SL Tồn</th>\n                        <th width=\"15%\">HSD</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #duocPhamTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"10%\">{{dataItem.Ma}}</td>\n                        <td width=\"25%\">{{dataItem.Ten}}</td>\n                        <td width=\"20%\">{{dataItem.HoatChat}}</td>\n                        <td width=\"10%\">{{dataItem.DVT}}</td>\n                        <td width=\"10%\">{{dataItem.DuongDung}}</td>\n                        <td width=\"10%\">{{dataItem.SLTonFormat}}</td>\n                        <td width=\"15%\">{{dataItem.HanSuDung}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n\n\n        <!-- format=\"#.##\" [decimals]=\"1\" -->\n        <app-textboxnumeric fxFlex=\"10\" id=\"slTon\" label=\"SL tồn\" [(model)]=\"duocPhamGrid.SLTon\" disabled={{true}}>\n        </app-textboxnumeric>\n\n        <app-textboxnumeric fxFlex=\"10\" id=\"slYeuCau\" label=\"SL yêu cầu\" [required]=\"true\" max=\"999999999\" min=\"1\"\n            [disabled]=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == true || yeuCauLinhDuocPham.KhoXuatId == null || yeuCauLinhDuocPham.KhoNhapId == null\n        || yeuCauLinhDuocPham.KhoXuatId == undefined || yeuCauLinhDuocPham.KhoNhapId == undefined\"\n            (keyup)=\"onKey($event)\" [(model)]=\"duocPhamGrid.SLYeuCau\"\n            [validationerror]=\"'SLYeuCau' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n        <app-textbox id=\"dvt\" fxFlex=\"10\" fxFlex.sm=\"10\" maxlength=\"1000\" label=\"ĐVT\" [(model)]=\"duocPhamGrid.DVT\"\n            disabled={{true}}>\n        </app-textbox>\n        <app-textbox id=\"duongDung\" fxFlex=\"15\" fxFlex.sm=\"15\" maxlength=\"1000\" label=\"Đường dùng\"\n            [(model)]=\"duocPhamGrid.DuongDung\" disabled={{true}}>\n        </app-textbox>\n        <app-textbox id=\"hangSanXuat\" fxFlex=\"30\" fxFlex.sm=\"30\" maxlength=\"1000\" label=\"Hãng SX\"\n            [(model)]=\"duocPhamGrid.NhaSX\" disabled={{true}}>\n        </app-textbox>\n\n        <app-textbox id=\"nuocSanXuat\" fxFlex=\"10\" fxFlex.sm=\"10\" maxlength=\"1000\" label=\"Nước SX\"\n            [(model)]=\"duocPhamGrid.NuocSX\" disabled={{true}}>\n        </app-textbox>\n\n        <app-multiselect fxFlex=\"25%\" [(model)]=\"duocPhamGrid.MayXetNghiemTenVaIds\" label=\"Sử dụng cho máy XN\"\n            [popupSettings]=\"null\" [autoClose]=\"false\" #mayXetNgiemMultiselect [modelText]=\"\" \n            [queryInfo]=\"{ParameterDependencies:'{DuocPhamBenhVienId:' + duocPhamGrid.DuocPhamBenhVienId + '}', Take: 50}\"\n            url=\"YeuCauLinhDuocPham/GetAllMayXetNghiemYeuCauLinh\" (modelChange)=\"changeMayXetNghiem($event)\">\n        </app-multiselect>\n\n        <div fxFlex=\"100%\" fxLayoutAlign=\"end center\" kendoTooltip>\n            <div\n                [style.display]=\"(trangThaiVo != undefined && trangThaiVo != null  && (trangThaiVo.TrangThai == null || trangThaiVo.TrangThai == false) || isCreate) || yeuCauLinhDuocPham.LaNguoiTaoPhieu == false ? 'block' : 'none'\">\n                <button type=\"button\" [disabled]=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == true || yeuCauLinhDuocPham.KhoXuatId == null || yeuCauLinhDuocPham.KhoNhapId == null\n                || yeuCauLinhDuocPham.KhoXuatId == undefined || yeuCauLinhDuocPham.KhoNhapId == undefined\"\n                    color=\"primary\" (click)=\"huy()\" mat-stroked-button mat-button class=\"mr-1\">Hủy</button>\n            </div>\n            <div>\n                <button [disabled]=\"(trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == true || yeuCauLinhDuocPham.KhoXuatId == null || yeuCauLinhDuocPham.KhoNhapId == null\n            || yeuCauLinhDuocPham.KhoXuatId == undefined || yeuCauLinhDuocPham.KhoNhapId == undefined)\" type=\"button\"\n                    color=\"primary\" (click)=\"themDuocPham()\" mat-raised-button mat-button>Thêm</button>\n            </div>\n        </div>\n    </ng-container>\n\n    <!-- [disabled]=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai != true\"  -->\n    <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridDataSource]=\"gridDataSource\" #gridDuocPham\n        [gridColumns]=\"gridColumns\" [allowSortDefault]=\"true\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n        [groups]=\"groups\" maxHeight=\"500\" [pageable]=\"false\">\n    </app-grid>\n    <ng-template #STTTemplate let-rowIndex=\"rowIndex\">\n        {{rowIndex + 1}}\n    </ng-template>\n    <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n        <strong>{{value}}</strong>\n    </ng-template>\n    <ng-template #actionTemplate let-dataItem>\n        <div class=\"text-center\" kendoTooltip>\n            <button color=\"primary\" style=\"color: red\" mat-icon-button kendoTooltip title=\"Xóa\" type=\"button\"\n                [disabled]=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == true || yeuCauLinhDuocPham.LaNguoiTaoPhieu == false\"\n                (click)=\"xoaDuocPham(dataItem)\">\n                <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n            </button>\n        </div>\n    </ng-template>\n    <!-- [decimals]=\"1\"  format=\"#.##\" -->\n    <ng-template #slYeuCauTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <app-textboxnumeric fxFlex=\"80%\" [(model)]=\"dataItem.SLYeuCau\" [required]=\"true\" class=\"no-label\" min=\"1\"\n            [max]=\"999999999\" label=\" \"\n            [disabled]=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == true || yeuCauLinhDuocPham.LaNguoiTaoPhieu == false\"\n            [validationerror]=\"'YeuCauLinhDuocPhamChiTiets['+rowIndex+'].SoLuong' | validationerror:validationErrorsLinhThuong\">\n        </app-textboxnumeric>\n        <mat-icon class=\"icon-war-status-grid\"\n            *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == null && (dataItem.SLTon != null && dataItem.SLYeuCau > dataItem.SLTon)\"\n            fxFlex=\"20%\" [icIcon]=\"icWarning\" kendoTooltip title=\"Số lượng tồn không đủ\">\n        </mat-icon>\n        <mat-icon class=\"icon-war-status-grid\"\n            *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == false && (dataItem.SoLuongCoTheXuat != null && dataItem.SLYeuCau > dataItem.SoLuongCoTheXuat)\"\n            fxFlex=\"20%\" [icIcon]=\"icWarning\" kendoTooltip title=\"Số lượng có thể xuất không đủ\">\n        </mat-icon>\n    </ng-template>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-gui-lai/phieu-linh-thuoc-truc-tiep-gui-lai.component.html": 
        /*!************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-gui-lai/phieu-linh-thuoc-truc-tiep-gui-lai.component.html ***!
          \************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Dược phẩm',Path:''}\n                ,{Title:'Dự trù lĩnh',Path:''}\n                ,{Title:'Yêu cầu lĩnh dược phẩm',Path:'/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc',queryParams: {holdQuery : true },Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\" *ngIf=\"!shareChoGoi\">\n                <h2 class=\"title m-0\">Yêu cầu lĩnh trực tiếp dược phẩm</h2>\n                <b class=\"status-yeu-cau-linh {{trangThai.DuocDuyet == null ? 'ycl-cho-duyet': trangThai.DuocDuyet == false ? 'ycl-tu-choi' : 'ycl-da-duyet'}}\">{{trangThai.TenTrangThai}}</b>\n            </div>\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\" *ngIf=\"shareChoGoi\">\n                <h2 class=\"title m-0\">Yêu cầu lĩnh trực tiếp dược phẩm</h2>\n                <b class=\"status-yeu-cau-linh {{trangThai.DuocDuyet == null ? 'ycl-cho-duyet': trangThai.DuocDuyet == false ? 'ycl-tu-choi' : 'ycl-da-duyet'}}\">Chờ gởi</b>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\" *ngIf=\"!shareChoGoi\">\n                \n                <app-phieu-linh-thuoc-truc-tiep-shared #temp1 [isCreate]=\"true\" (trangThaiYeuCau)=\"getTrangThaiYeuCau($event)\" (quyenUpdate)=\"quyenUpdatePhieuLinh($event)\"></app-phieu-linh-thuoc-truc-tiep-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" (click)=\"inPhieu()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i>\n                        In phiếu lĩnh</button>\n\n                    <button type=\"button\" (click)=\"cancel()\" mat-button class=\"mr-1 align-right-fx\"><i\n                            class=\"ft-arrow-left\"></i> Hủy</button>\n                            <!-- <button type=\"button\" *ngIf=\"!loading && isShow == true && quyenUpdate == true;\" (click)=\"save()\" color=\"primary\" mat-raised-button><i\n                                class=\"ft-save\"></i> Lưu</button> -->\n                    <!-- <button type=\"button\" *ngIf=\"!loading  &&  isShowLuuDuyetLai == true\" (click)=\"luuVaGuiDuyetLai()\" color=\"primary\"\n                        mat-raised-button><i class=\"ft-save\"></i> Lưu & Gửi duyệt lại</button> -->\n                    <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img\n                            src=\"/assets/img/loader.gif\" alt=\"Loading\" /></button>\n                </div>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\"   *ngIf=\"shareChoGoi\">\n                \n                <app-phieu-linh-truc-tiep-cho-goi-shared #temp></app-phieu-linh-truc-tiep-cho-goi-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" (click)=\"inPhieu()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i>\n                        In phiếu lĩnh</button>\n\n                    <button type=\"button\" (click)=\"cancel()\" mat-button class=\"mr-1 align-right-fx\"><i\n                            class=\"ft-arrow-left\"></i> Hủy</button>\n                    <button type=\"button\"  (click)=\"guiLaiPhieu()\" color=\"primary\" mat-raised-button><i\n                     class=\"ft-save\"></i> Lưu</button>\n                    <!-- <button type=\"button\" *ngIf=\"!loading  &&  isShowLuuDuyetLai == true\" (click)=\"luuVaGuiDuyetLai()\" color=\"primary\"\n                        mat-raised-button><i class=\"ft-save\"></i> Lưu & Gửi duyệt lại</button> -->\n                    <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img\n                            src=\"/assets/img/loader.gif\" alt=\"Loading\" /></button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-popup/phieu-linh-thuoc-truc-tiep-popup.component.html": 
        /*!********************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-popup/phieu-linh-thuoc-truc-tiep-popup.component.html ***!
          \********************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-1\">\n    <div>XEM TRƯỚC KHI IN</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n    \n</div>\n<mat-dialog-content style=\"overflow:hidden\">\n    <!-- <div style=\"width: 100%; height: 40px; background: #005dab;color:#fff;text-align: center;font-size: 23px\"> PHIẾU LĨNH TRỰC TIẾP DƯỢC PHẨM</div> -->\n    <div class=\"container-iframe\">\n        <iframe width=\"100%\" style=\"height: 500px;\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <app-print-form textPrint=\"In\" type=\"PDF\" [event]=\"modelPrint\" [bodyComponent]=\"this\" *ngIf=\"showNutIn\">\n    </app-print-form>\n</mat-dialog-actions>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-shared/phieu-linh-thuoc-truc-tiep-shared.component.html": 
        /*!**********************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-shared/phieu-linh-thuoc-truc-tiep-shared.component.html ***!
          \**********************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <div fxFlex=\"100%\" *ngIf=\"!showGridTrangThai && isCreate\">\n        <h4 style=\"color: red;\">Lý do: {{lyDoKhongDuyet}}</h4>\n    </div>\n    <app-combobox id=\"linhTuKho\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\" *ngIf=\"!isCreate\" [disabled]=\"true\"\n        [(model)]=\"phieuLinhTrucTiep.KeyId\" [modelText]=\"phieuLinhTrucTiep.DisplayName\" bind=\"true\"\n        url=\"YeuCauLinhDuocPham/GetTatCakhoLinhTuCuaNhanVienLoginLinhTrucTiep\" label=\"Lĩnh từ kho\"\n        [validationerror]=\"'KhoXuatId' | validationerror:validationErrorsLinhTT\"\n        (selectionChange)=\"ChonKhoLinhChange($event)\">\n    </app-combobox>\n    <app-combobox id=\"linhTuKho\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\" *ngIf=\"isCreate\" [disabled]=\"true\"\n        [(model)]=\"phieuLinhTrucTiep.KeyId\" [modelText]=\"phieuLinhTrucTiep.DisplayName\"\n        url=\"YeuCauLinhDuocPham/GetTatCakhoLinhTuCuaNhanVienLoginLinhTrucTiep\" label=\"Lĩnh từ kho\"\n        [validationerror]=\"'KhoXuatId' | validationerror:validationErrorsLinhTT\"\n        (selectionChange)=\"ChonKhoLinhChange($event)\">\n\n    </app-combobox>\n    <app-textbox id=\"LinhVePhong\" maxlength=\"250\" label=\"Lĩnh về Khoa\" disabled={{true}} [(model)]=\"LinhVeKhoa\"\n        bind=\"true\" [required]=\"true\" [validationerror]=\"'KhoNhapId' | validationerror:validationErrorsLinhTT\">\n    </app-textbox>\n\n    <app-textbox id=\"nguoiYeuCau\" [fxFlex]=\"isDaTao  ? '15%' : '25%'\" [fxFlex.sm]=\"isDaTao ? '15%' : '25%'\"\n        maxlength=\"250\" label=\"Người yêu cầu\" disabled={{true}} [(model)]=\"nguoiYeuCau\" [required]=\"true\"\n        [validationerror]=\"'NguoiYeuCau' | validationerror:validationErrors\">\n    </app-textbox>\n    <app-datepicker id=\"ngayYeuCau\" [fxFlex]=\"isDaTao ? '10%' : '25%'\" [fxFlex.sm]=\"isDaTao ? '10%' : '25%'\"\n        [required]=\"true\" label=\"Ngày yêu cầu\" disabled={{true}} [(model)]=\"ngayYeuCau\"\n        [validationerror]=\"'NgayYeuCau' | validationerror:validationErrors\">\n    </app-datepicker>\n\n    <ng-container *ngIf=\"isShowDuyet\">\n        <app-textbox id=\"nguoiDuyet\" fxFlex=\"15\" fxFlex.sm=\"15\" maxlength=\"250\" label=\"Người phê duyệt\"\n            *ngIf=\"trangThaiShowDuyet != true\" disabled={{true}} [(model)]=\"daDuyet.NguoiDuyet\" [required]=\"true\"\n            [validationerror]=\"'NguoiDuyet' | validationerror:validationErrors\">\n        </app-textbox>\n        <app-datepicker id=\"ngayDuyet\" fxFlex=\"10\" fxFlex.sm=\"10\" [required]=\"true\" label=\"Ngày duyệt\" disabled={{true}}\n            *ngIf=\"trangThaiShowDuyet != true\" [(model)]=\"daDuyet.NgayDuyet\"\n            [validationerror]=\"'NgayDuyet' | validationerror:validationErrors\">\n        </app-datepicker>\n        <app-textbox id=\"nguoiDuyet\" fxFlex=\"15\" fxFlex.sm=\"15\" maxlength=\"250\" label=\"Người từ chối duyệt\"\n            *ngIf=\"trangThaiShowDuyet == true\" disabled={{true}} [(model)]=\"daDuyet.NguoiDuyet\" [required]=\"true\"\n            [validationerror]=\"'NguoiDuyet' | validationerror:validationErrors\">\n        </app-textbox>\n        <app-datepicker id=\"ngayDuyet\" fxFlex=\"10\" fxFlex.sm=\"10\" [required]=\"true\" label=\"Ngày từ chối duyệt\"\n            disabled={{true}} *ngIf=\"trangThaiShowDuyet == true\" [(model)]=\"daDuyet.NgayDuyet\"\n            [validationerror]=\"'NgayDuyet' | validationerror:validationErrors\">\n        </app-datepicker>\n    </ng-container>\n    <app-textarea id=\"ghiChu\" fxFlex=\"100\" fxFlex.sm=\"100\" maxlength=\"1000\" *ngIf=\"!isShowDuyet\" [(model)]=\"ghiChu\"\n        [disabled]=\"!quyenUpdatePhieu\" label=\"Ghi chú\" minHeight=\"20\"\n        [validationerror]=\"'GhiChu' | validationerror:validationErrors\">\n    </app-textarea>\n    <app-textarea id=\"ghiChu\" fxFlex=\"100\" fxFlex.sm=\"100\" maxlength=\"1000\" *ngIf=\"isShowDuyet && !ishowTrangThaiDuyet \"\n        disabled={{true}} [(model)]=\"ghiChu\" label=\"Ghi chú\" minHeight=\"20\"\n        [validationerror]=\"'GhiChu' | validationerror:validationErrors\">\n    </app-textarea>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông tin dược phẩm</h3>\n    <!-- <app-daterangepicker *ngIf=\"!isCreate\" style=\"margin-left: 5px;\" id=\"range-ngay-yeu-cau\" fxFlex=\"350px\" fxFlex.sm=\"auto\" \n        [(model)]=\"searchDanhSachThongDuocPham.RangeFromDate\"  label=\"Yêu cầu từ ngày điều trị - đến ngày điều trị\"\n        (modelChange)=\"changeNgayBatDauRange($event)\" (blur)=\"blur()\" class=\"mt-1 on-header\">\n    </app-daterangepicker> -->\n    <div fxFlex=\"100%\" fxFlex.sm=\"100%\" fxLayoutAlign=\"start center\" *ngIf=\"!isCreate\">\n        <app-datetimepicker id=\"TuNgay\" fxFlex=\"18%\" fxFlex.sm=\"100%\" [(model)]=\"searchDanhSachThongDuocPham.TuNgay\"\n            label=\"Từ :ngày điều trị\" (modelChange)=\"changeTuNgay($event)\" class=\"mt-1 on-header\">\n        </app-datetimepicker>\n        <span fxFlex=\"2%\" fxFlex.sm=\"100%\"></span>\n        <app-datetimepicker id=\"DenNgay\" fxFlex=\"18%\" fxFlex.sm=\"100%\" [(model)]=\"searchDanhSachThongDuocPham.DenNgay\"\n            label=\"đến :ngày điều trị\" (modelChange)=\"changeDenNgay($event)\" class=\"mt-1 on-header\">\n        </app-datetimepicker>\n    </div>\n\n\n    <!-- *ngIf=\"showGridTrangThai\" ==> create-->\n    <div fxFlex=\"100%\" fxLayoutAlign=\"end center\" *ngIf=\"showGridTrangThai\">\n        <app-grid #gridCha *ngIf=\"!trangThaiDuyetChiTiet\" fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\"\n            [gridColumns]=\"gridChildColumns\" [autoRefreshDataSource]=\"true\" [allowSortDefault]=\"true\"\n            [gridDataSource]=\"gridDataSource\" [documentType]=\"documentType\" [useAddDeault]=\"false\" #gridCreate\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\"\n            [pageable]=\"false\" (extCheckboxSelection)=\"extCheckboxSelections($event)\" [detailTemplate]=\"detailTemplate\"\n            [masterName]='linhTrucTiepMasterName'>\n        </app-grid>\n        <app-grid *ngIf=\"trangThaiDuyetChiTiet\" fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\"\n            [gridColumns]=\"gridChildColumns\" [autoRefreshDataSource]=\"true\" [allowSortDefault]=\"true\"\n            [gridDataSource]=\"gridDataSource\" [documentType]=\"documentType\" [useAddDeault]=\"false\" #gridCreate\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n            maxHeight=\"500\" [pageable]=\"false\" (extCheckboxSelection)=\"extCheckboxSelections($event)\"\n            [detailTemplate]=\"detailTemplate\">\n        </app-grid>\n    </div>\n\n    <div fxFlex=\"100%\" fxLayoutAlign=\"end center\" *ngIf=\"!showGridTrangThai\">\n        <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridColumns]=\"gridColumnTuChois\" #gridCreate\n            [allowSortDefault]=\"true\" [gridDataSource]=\"gridDataSource\" [documentType]=\"documentType\"\n            [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n            [lazyLoadPage]=\"true\" maxHeight=\"500\" [pageable]=\"false\" >\n        </app-grid>\n    </div>\n    <ng-template #detailTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <app-grid [style.display]=\"!isCreate ?'block':'none'\" baseRoute=\"\" [gridColumns]=\"gridColumns\"\n            [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n            [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n            [gridDataSource]=\"getDataSourceChild(dataItem.ListYeuCauDuocPhamBenhViens)\" \n            [showStt]=\"true\" [autoHeight]=\"true\" [pageable]=\"false\">\n        </app-grid>\n        <app-grid baseRoute=\"\" *ngIf=\"isCreate && !isShowDuyet\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n            [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n            [lazyLoadPage]=\"true\" [urlGetData]=\"urlGetDataDaTaoChild\" [urlGetTotalPage]=\"\" \n            additionalSearchString=\"{'YeuCauTiepNhanId':{{dataItem.YeuCauTiepNhanId}},'YeuCauLinhDuocPhamId':{{yeuCauLinhDuocPhamId}},'PhongLamViecId':{{phonglamViecId}},'KhoLinhId':{{dataItem.KhoLinhId}}}\"\n            [autoHeight]=\"true\" [pageable]=\"false\" (extOnDataBound)=\"OnDataBound($event)\" [showStt]=\"true\">\n        </app-grid>\n        <app-grid baseRoute=\"\" *ngIf=\"isCreate && isShowDuyet\" [gridColumns]=\"gridColumnsDaDuyet\" [documentType]=\"documentType\"\n            [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n            [lazyLoadPage]=\"true\" [urlGetData]=\"urlGetDataDaTaoChild\" [urlGetTotalPage]=\"\" \n            additionalSearchString=\"{'YeuCauTiepNhanId':{{dataItem.YeuCauTiepNhanId}},'YeuCauLinhDuocPhamId':{{yeuCauLinhDuocPhamId}},'PhongLamViecId':{{phonglamViecId}},'KhoLinhId':{{dataItem.KhoLinhId}}}\"\n            [autoHeight]=\"true\" [pageable]=\"false\" (extOnDataBound)=\"OnDataBound($event)\" [showStt]=\"true\">\n        </app-grid>\n    </ng-template>\n    <ng-template #slYeuCauTemplate let-dataItem>\n        <app-textboxnumeric *ngIf=\"isCreate\" [decimals]=\"1\" class=\"no-label\" [max]=\"9999\">\n        </app-textboxnumeric>\n    </ng-template>\n    <ng-template #tenNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n        <strong>{{value}}</strong>\n    </ng-template>\n    <ng-template #sttTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        {{rowIndex + 1}}\n    </ng-template>\n    <div class=\"gripViewGoiDichViKhacTemplate\">\n        <ng-template #checkBoxChildTemplate let-dataItem>\n            <span *ngIf=\"dataItem.SoLuongTon >= dataItem.SLYeuCau\">\n                <input type=\"checkbox\" id=\"vehicle1\" [(ngModel)]=\"dataItem.IsCheckRowItem\" name=\"vehicle1\" \n                    (ngModelChange)=\"checkboxGridChild($event,dataItem)\">\n            </span>\n            <span *ngIf=\"dataItem.SLYeuCau  > dataItem.SoLuongTon\">\n                <input type=\"checkbox\" id=\"vehicle1\" [(ngModel)]=\"dataItem.IsCheckRowItem\" name=\"vehicle1\" disabled\n                    (ngModelChange)=\"checkboxGridChild($event,dataItem)\">\n            </span>\n        </ng-template>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-truc-tiep-cho-goi-shared/phieu-linh-truc-tiep-cho-goi-shared.component.html": 
        /*!**************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-truc-tiep-cho-goi-shared/phieu-linh-truc-tiep-cho-goi-shared.component.html ***!
          \**************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <app-combobox id=\"linhTuKho\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\"  [disabled]=\"true\"\n        [(model)]=\"phieuLinhTrucTiep.KeyId\" [modelText]=\"phieuLinhTrucTiep.DisplayName\" bind=\"true\"\n        url=\"YeuCauLinhDuocPham/GetTatCakhoLinhTuCuaNhanVienLoginLinhTrucTiep\" label=\"Lĩnh từ kho\"\n        >\n    </app-combobox>\n    <app-textbox id=\"LinhVePhong\" maxlength=\"250\" label=\"Lĩnh về Khoa\" disabled={{true}} [(model)]=\"LinhVeKhoa\"\n        bind=\"true\" [required]=\"true\" >\n    </app-textbox>\n\n    <app-textbox id=\"nguoiYeuCau\" fxFlex=\"25%\" fxFlex.sm=\"25%\"\n        maxlength=\"250\" label=\"Người yêu cầu\" disabled={{true}} [(model)]=\"nguoiYeuCau\" [required]=\"true\">\n    </app-textbox>\n    <app-datepicker id=\"ngayYeuCau\" fxFlex=\"25%\" fxFlex.sm=\"25%\"\n        [required]=\"true\" label=\"Ngày yêu cầu\" disabled={{true}} [(model)]=\"ngayYeuCau\"\n        >\n    </app-datepicker>\n \n    <app-textarea id=\"ghiChu\" fxFlex=\"100%\" fxFlex.sm=\"100%\" maxlength=\"1000\"  [(model)]=\"ghiChu\"\n         label=\"Ghi chú\" minHeight=\"20\"\n        >\n    </app-textarea>\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông tin dược phẩm</h3>\n    <div fxFlex=\"100%\" fxFlex.sm=\"100%\" fxLayoutAlign=\"start center\" >\n        <app-datetimepicker id=\"TuNgay\" fxFlex=\"18%\" fxFlex.sm=\"100%\" [(model)]=\"searchDanhSachThongDuocPham.TuNgay\"\n            label=\"Từ :ngày điều trị\" (modelChange)=\"changeTuNgay($event)\" class=\"mt-1 on-header\">\n        </app-datetimepicker>\n        <span fxFlex=\"2%\" fxFlex.sm=\"100%\"></span>\n        <app-datetimepicker id=\"DenNgay\" fxFlex=\"18%\" fxFlex.sm=\"100%\" [(model)]=\"searchDanhSachThongDuocPham.DenNgay\"\n            label=\"đến :ngày điều trị\" (modelChange)=\"changeDenNgay($event)\" class=\"mt-1 on-header\">\n        </app-datetimepicker>\n    </div>\n    <div fxFlex=\"100%\" fxLayoutAlign=\"end center\">\n        <app-grid #gridCha  fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\"\n            [gridColumns]=\"gridChildColumns\" [autoRefreshDataSource]=\"true\" [allowSortDefault]=\"false\"\n            [gridDataSource]=\"gridDataSource\" [documentType]=\"documentType\" [useAddDeault]=\"false\" #gridCreate\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\"\n            [pageable]=\"false\" (extCheckboxSelection)=\"extCheckboxSelections($event)\" [detailTemplate]=\"detailTemplate\"\n            [masterName]='linhTrucTiepMasterName'>\n        </app-grid>\n    </div>\n    <ng-template #detailTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <app-grid  baseRoute=\"\" [gridColumns]=\"gridColumns\" [allowSortDefault]=\"false\"\n            [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n            [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n            [gridDataSource]=\"getDataSourceChild(dataItem.ListYeuCauDuocPhamBenhViens)\" \n            [showStt]=\"true\" [autoHeight]=\"true\" [pageable]=\"false\">\n        </app-grid>\n    </ng-template>\n    <ng-template #slYeuCauTemplate let-dataItem>\n        <app-textboxnumeric  [decimals]=\"1\" class=\"no-label\" [max]=\"9999\">\n        </app-textboxnumeric>\n    </ng-template>\n    <ng-template #tenNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n        <strong>{{value}}</strong>\n    </ng-template>\n    <ng-template #sttTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        {{rowIndex + 1}}\n    </ng-template>\n    <div class=\"gripViewGoiDichViKhacTemplate\">\n        <ng-template #checkBoxChildTemplate let-dataItem>\n            <span *ngIf=\"dataItem.SoLuongTon >= dataItem.SLYeuCau\">\n                <input type=\"checkbox\" id=\"vehicle1\" [(ngModel)]=\"dataItem.IsCheckRowItem\" name=\"vehicle1\" \n                    (ngModelChange)=\"checkboxGridChild($event,dataItem)\">\n            </span>\n            <span *ngIf=\"dataItem.SLYeuCau  > dataItem.SoLuongTon\">\n                <input type=\"checkbox\" id=\"vehicle1\" [(ngModel)]=\"dataItem.IsCheckRowItem\" name=\"vehicle1\" disabled\n                    (ngModelChange)=\"checkboxGridChild($event,dataItem)\">\n            </span>\n        </ng-template>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/popup-thong-bao-dp-khong-the-tao/popup-thong-bao-dp-khong-the-tao.component.html": 
        /*!********************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/popup-thong-bao-dp-khong-the-tao/popup-thong-bao-dp-khong-the-tao.component.html ***!
          \********************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-1\">\n    <div style=\"text-align: center;\">Xác Nhận</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div> -->\n\n<mat-dialog-content style=\"overflow: hidden\">\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <div fxFlex=\"100%\" fxFlex.sm=\"100%\"style=\"text-align: center;font-size: 20px\"><b>Xác Nhận</b></div>\n        <div fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"text-align: center;font-size: 15px;padding-bottom: 10px;\">Có các dược phẩm không đủ tồn</div>\n        <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" [gridColumns]=\"gridColumns\" [checkboxAble]=\"false\"\n            [gridDataSource]=\"gridDataSource\"  [useAddDeault]=\"false\"\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\"\n            [pageable]=\"false\">\n        </app-grid>\n        <div fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"font-size: 15px;padding-top: 10px;\">Nếu đồng ý gửi thì sẻ không tạo được những dược\n            phẩm này<br>\n            Bạn có muốn tiếp tục gửi không?</div>\n    </div>\n</mat-dialog-content>\n\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <button mat-button mat-dialog-close (click)=\"Khong('No')\">Không</button>\n    <button mat-raised-button mat-button color=\"primary\" (click)=\"Co('Yes')\" [mat-dialog-close]=\"true\"\n        cdkFocusInitial>Có</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-bu/tao-phieu-linh-thuoc-bu.component.html": 
        /*!**************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-bu/tao-phieu-linh-thuoc-bu.component.html ***!
          \**************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Dược phẩm',Path:''}\n                ,{Title:'Dự trù lĩnh',Path:''}\n                ,{Title:'Yêu cầu lĩnh dược phẩm',Path:'/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc'}\n                ,{Title:'Dược phẩm cần lĩnh bù',Path:'/nhap-xuat/duoc-pham/duoc-pham-can-bu',Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Tạo phiếu lĩnh bù dược phẩm</h2>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-phieu-linh-thuoc-bu-shared [isCreate]=\"!isCreate\" [validationErrorsLinhBu]=\"validationErrors\">\n                </app-phieu-linh-thuoc-bu-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" *ngIf=\"!loading\" mat-button class=\"mr-2 align-right-fx\"\n                        (click)=\"xemPhieuLinh()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i> Xem phiếu\n                        lĩnh</button>\n                    <button type=\"button\" (click)=\"cancel()\" mat-button><i class=\"ft-arrow-left\"></i> Hủy</button>\n                    <button type=\"button\" *ngIf=\"!loading\" (click)=\"guiPhieuLinhBu(false)\" color=\"primary\"\n                        mat-raised-button><i class=\"ft-save\"></i> Lưu tạm</button>\n                    <button type=\"button\" *ngIf=\"!loading\" (click)=\"guiPhieuLinhBu(true)\" color=\"primary\"\n                        mat-raised-button><i class=\"ft-save\"></i> Gửi</button>\n                    <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img\n                            src=\"/assets/img/loader.gif\" alt=\"Loading\" /></button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-thuong/tao-phieu-linh-thuoc-thuong.component.html": 
        /*!**********************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-thuong/tao-phieu-linh-thuoc-thuong.component.html ***!
          \**********************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Dược phẩm',Path:''}\n                ,{Title:'Dự trù lĩnh',Path:''}\n                ,{Title:'Yêu cầu lĩnh dược phẩm',Path:'/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc',Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Tạo phiếu lĩnh dự trù dược phẩm</h2>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\" *ngIf=\"isCreate\">Đang chờ duyệt</b>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-phieu-linh-thuoc-thuong-shared [validationErrorsLinhThuong]=\"validationErrors\" [isCreate]=\"true\"\n                    [trangThaiVo]=\"trangThaiVo\">\n                </app-phieu-linh-thuoc-thuong-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n\n                    <button type=\"button\" title=\"Phím tắt: Esc\" (click)=\"cancel()\" mat-button\n                        class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n                    <button type=\"button\" *ngIf=\"!loading\" (click)=\"luuPhieuLinhThuong()\" color=\"primary\"\n                        mat-raised-button><i class=\"ft-save\"></i> Lưu tạm</button>\n                    <button type=\"button\" *ngIf=\"!loading\" (click)=\"guiPhieuLinhThuong()\" color=\"primary\"\n                        mat-raised-button><i class=\"ft-save\"></i> Gửi</button>\n                    <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img\n                            src=\"/assets/img/loader.gif\" alt=\"Loading\" /></button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-truc-tiep/tao-phieu-linh-thuoc-truc-tiep.component.html": 
        /*!****************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-truc-tiep/tao-phieu-linh-thuoc-truc-tiep.component.html ***!
          \****************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\"\n                [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Dược phẩm',Path:''}\n                ,{Title:'Dự trù lĩnh',Path:''}\n                ,{Title:'Yêu cầu lĩnh dược phẩm',Path:'/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc'}\n                ,{Title:'Dược phẩm cần lĩnh trực tiếp',Path:'/nhap-xuat/duoc-pham/duoc-pham-can-linh-truc-tiep',Active:true}\n                ]\">\n></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Tạo phiếu lĩnh trực tiếp dược phẩm</h2>\n                <!-- <b class=\"status-yeu-cau-linh ycl-cho-duyet\">Đang chờ duyệt</b> -->\n            </div>\n                <div class=\"px-6 py-4\" fxLayout=\"column\">\n    \n                    <app-phieu-linh-thuoc-truc-tiep-shared [isCreate]=\"false\" [validationErrorsLinhTT]=\"validationErrors\"></app-phieu-linh-thuoc-truc-tiep-shared>\n    \n                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                        <button type=\"button\" *ngIf=\"!loading\"    mat-button class=\"mr-2 align-right-fx\" (click)=\"xemPhieuLinh()\" color=\"primary\" mat-raised-button><i\n                            class=\"ft-save\"></i> Xem phiếu lĩnh</button>\n                        <button type=\"button\" (click)=\"cancel()\" mat-raised-button><i class=\"ft-arrow-left\"></i> Hủy</button>\n                        <button type=\"button\" (click)=\"create(false)\" color=\"primary\" mat-raised-button class=\"ft-save\"><i class=\"ft-arrow-left\"></i> Lưu</button>\n                        <button type=\"button\" *ngIf=\"!loading\" (click)=\"create(true)\" color=\"primary\" mat-raised-button><i\n                                class=\"ft-save\"></i> Gửi</button>\n                        <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img src=\"/assets/img/loader.gif\"\n                                alt=\"Loading\" /></button>\n                </div>\n                </div>\n        </div>\n    </div>\n\n</div>\n");
            /***/ 
        }),
        /***/ "./src/@vex/animations/fade-in-up.animation.ts": 
        /*!*****************************************************!*\
          !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
          \*****************************************************/
        /*! exports provided: fadeInUpAnimation, fadeInUp400ms */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUpAnimation", function () { return fadeInUpAnimation; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUp400ms", function () { return fadeInUp400ms; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            function fadeInUpAnimation(duration) {
                return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInUp', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateY(20px)',
                            opacity: 0
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(duration + "ms cubic-bezier(0.35, 0, 0.25, 1)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateY(0)',
                            opacity: 1
                        }))
                    ])
                ]);
            }
            var fadeInUp400ms = fadeInUpAnimation(400);
            /***/ 
        }),
        /***/ "./src/@vex/animations/stagger.animation.ts": 
        /*!**************************************************!*\
          !*** ./src/@vex/animations/stagger.animation.ts ***!
          \**************************************************/
        /*! exports provided: staggerAnimation, stagger80ms, stagger60ms, stagger40ms, stagger20ms */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staggerAnimation", function () { return staggerAnimation; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger80ms", function () { return stagger80ms; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger60ms", function () { return stagger60ms; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger40ms", function () { return stagger40ms; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger20ms", function () { return stagger20ms; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            function staggerAnimation(timing) {
                return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('stagger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@fadeInUp, @fadeInRight, @scaleIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()), { optional: true }),
                    ])
                ]);
            }
            var stagger80ms = staggerAnimation(80);
            var stagger60ms = staggerAnimation(60);
            var stagger40ms = staggerAnimation(40);
            var stagger20ms = staggerAnimation(20);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/danh-sach-yeu-cau-linh-thuoc/danh-sach-yeu-cau-linh-thuoc.component.scss": 
        /*!**********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/danh-sach-yeu-cau-linh-thuoc/danh-sach-yeu-cau-linh-thuoc.component.scss ***!
          \**********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3lldS1jYXUtbGluaC10aHVvYy9kYW5oLXNhY2gteWV1LWNhdS1saW5oLXRodW9jL2Rhbmgtc2FjaC15ZXUtY2F1LWxpbmgtdGh1b2MuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/danh-sach-yeu-cau-linh-thuoc/danh-sach-yeu-cau-linh-thuoc.component.ts": 
        /*!********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/danh-sach-yeu-cau-linh-thuoc/danh-sach-yeu-cau-linh-thuoc.component.ts ***!
          \********************************************************************************************************************************************/
        /*! exports provided: DanhSachYeuCauLinhThuocComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachYeuCauLinhThuocComponent", function () { return DanhSachYeuCauLinhThuocComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
            /* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_10__);
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../yeu-cau-linh-thuoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/yeu-cau-linh-thuoc.model.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var _in_linh_duoc_pham_in_linh_duoc_pham_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../in-linh-duoc-pham/in-linh-duoc-pham.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/in-linh-duoc-pham/in-linh-duoc-pham.component.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_16__);
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_17__);
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_18__);
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_19__);
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_20__);
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _phieu_linh_thuoc_thuong_popup_phieu_linh_thuoc_thuong_popup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../phieu-linh-thuoc-thuong-popup/phieu-linh-thuoc-thuong-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-popup/phieu-linh-thuoc-thuong-popup.component.ts");
            /* harmony import */ var src_app_shared_enum_linh_vat_tu_thuoc_enum__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/shared/enum/linh-vat-tu-thuoc.enum */ "./src/app/shared/enum/linh-vat-tu-thuoc.enum.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! src/app/shared/models/common.model */ "./src/app/shared/models/common.model.ts");
            var DanhSachYeuCauLinhThuocComponent = /** @class */ (function () {
                function DanhSachYeuCauLinhThuocComponent(dialog, router, apiService, authService, notificationService, cd, route, location) {
                    this.dialog = dialog;
                    this.router = router;
                    this.apiService = apiService;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.cd = cd;
                    this.route = route;
                    this.location = location;
                    this.gridColumns = [];
                    this.gridChildLinhDuTruChuaDuyetColumns = [];
                    this.gridChildLinhDuTruDaDuyetColumns = [];
                    this.gridChildLinhBuColumns = [];
                    this.gridChildLinhBuDaDuyetColumns = [];
                    this.gridChildChildLinhBuColumns = [];
                    this.gridChildChildLinhBuDaDuyetColumns = [];
                    this.gridChildLinhBuTuChoiColumns = [];
                    this.gridChildLinhBenhNhanColumns = [];
                    this.gridChildChildLinhBenhNhanColumns = [];
                    this.gridChildChildLinhBenhNhanDaDuyetColumns = [];
                    this.gridChildChildLinhBenhNhanTuChoiColumns = [];
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('');
                    this.urlGetData = "";
                    this.urlGetTotalPage = "";
                    this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_10___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11___default.a;
                    this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_17___default.a;
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_16___default.a;
                    this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_18___default.a;
                    this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_19___default.a;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_20___default.a;
                    this.validationErrors = [];
                    this.popupLoadingDataDaDuyet = null;
                    this.timKiemTuNgay = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_13__["SearchNgay"]();
                    this.inPhieuLinhThuong = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_13__["PhieuLinhThuocThuong"]();
                    this.kiemTraDanhSachDangChoDuyet = true;
                    this.kiemTraDanhSachTuChoiDuyet = false;
                    this.kiemTraDanhSachDaDuyet = false;
                    this.kiemTraDanhSachDaChoGoi = true;
                    this.trangThaiCheck = 0;
                    this.exportQueryInfoQueryInfo = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_13__["ExportQueryInfoQueryInfo"]();
                    this.holdQuery = null;
                    this.additionalSearchString = null;
                    this.groups = [{ field: 'Nhom' }];
                    this.groupsYCTN = [{ field: 'MaYeuCauTiepNhan' }];
                    this.baseRoute = "/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc";
                    this.stringAddtionnal = '';
                    this.addtionStringDefault = null;
                }
                DanhSachYeuCauLinhThuocComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].DanhSachYeuCauLinhDuocPham;
                    this.gridChild.sort = [{
                            field: 'DuocDuyet',
                            dir: 'asc'
                        }];
                    this.linhVatTuGridVo = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_13__["LinhVatTuGridVo"]();
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
                        { Field: "Action", Title: "", Width: 50, Template: this.groupTemplate },
                    ];
                    //-------------Lĩnh bù---------------------------------------------------------------------------------------------------
                    this.gridChildLinhBuColumns = [
                        { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
                        { Field: "TenVatTu", Title: "Tên dược phẩm", Width: 180, ShowTooltip: true },
                        { Field: "HoatChat", Title: "Hoạt chất", Width: 50 },
                        { Field: "NongDoHamLuong", Title: "Nồng độ/hàm lượng", Width: 50 },
                        { Field: "DuongDung", Title: "Đường dùng", Width: 50 },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
                        { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "HangSanXuat", Title: "Hãng SX", Width: 220 },
                        { Field: "NuocSanXuat", Title: "Nước SX", Width: 205 },
                        { Field: "SoLuongTon", Title: "SL Tồn", Width: 100 },
                        { Field: "SoLuongCanBu", Title: "SL cần bù", Width: 60, Template: this.slCanBuTemplate },
                        { Field: "SLDaLinh", Title: "SL đã bù", Width: 100 },
                        { Field: "SoLuongYeuCau", Title: "SL yêu cầu", Width: 100 },
                    ];
                    this.gridChildLinhBuDaDuyetColumns = [
                        { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
                        { Field: "TenVatTu", Title: "Tên dược phẩm", Width: 180, ShowTooltip: true },
                        { Field: "HoatChat", Title: "Hoạt chất", Width: 50 },
                        { Field: "NongDoHamLuong", Title: "Nồng độ/hàm lượng", Width: 50 },
                        { Field: "DuongDung", Title: "Đường dùng", Width: 50 },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
                        { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "HangSanXuat", Title: "Hãng SX", Width: 220 },
                        { Field: "NuocSanXuat", Title: "Nước SX", Width: 205 },
                        { Field: "SoLuongCanBu", Title: "SL cần bù", Width: 60 },
                        { Field: "SLDaLinh", Title: "SL đã bù", Width: 100 },
                        { Field: "SoLuongYeuCauDaDuyet", Title: "SL đã duyệt", Width: 100 },
                    ];
                    this.gridChildChildLinhBuColumns = [
                        { Field: "STT", Title: "#", Width: 50, Template: this.sttTemplate },
                        { Field: "MaTN", Title: "Mã tiếp nhận", Width: 120, Sortable: true },
                        { Field: "MaBN", Title: "Mã người bệnh", Width: 120 },
                        { Field: "HoTen", Title: "Họ tên", Width: 100, Sortable: true },
                        { Field: "DVKham", Title: "DV khám", Width: 200, Sortable: true },
                        { Field: "BSKeToa", Title: "Bác sỹ kê toa", Width: 120, Sortable: true },
                        { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 },
                        { Field: "NgayKe", Title: "Ngày kê", Width: 120, Sortable: true },
                        { Field: "SLCanBu", Title: "Sl cần bù", Width: 100 },
                        { Field: "SLDaLinh", Title: "Sl đã bù", Width: 100 },
                        { Field: "SL", Title: "Sl yêu cầu", Width: 120, Sortable: true }
                    ];
                    this.gridChildChildLinhBuDaDuyetColumns = [
                        { Field: "STT", Title: "#", Width: 50, Template: this.sttTemplate },
                        { Field: "MaTN", Title: "Mã tiếp nhận", Width: 120, Sortable: true },
                        { Field: "MaBN", Title: "Mã người bệnh", Width: 120 },
                        { Field: "HoTen", Title: "Họ tên", Width: 100, Sortable: true },
                        { Field: "DVKham", Title: "DV khám", Width: 200, Sortable: true },
                        { Field: "BSKeToa", Title: "Bác sỹ kê toa", Width: 120, Sortable: true },
                        { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 },
                        { Field: "NgayKe", Title: "Ngày kê", Width: 120, Sortable: true },
                        { Field: "SLCanBu", Title: "Sl cần bù", Width: 100 },
                        { Field: "SLDaLinh", Title: "Sl đã bù", Width: 100 },
                        { Field: "SL", Title: "Sl được duyệt", Width: 120, Sortable: true }
                    ];
                    this.gridChildLinhBuTuChoiColumns = [
                        { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
                        { Field: "TenVatTu", Title: "Tên dược phẩm", Width: 180, ShowTooltip: true },
                        { Field: "HoatChat", Title: "Hoạt chất", Width: 50 },
                        { Field: "NongDoHamLuong", Title: "Nồng độ/hàm lượng", Width: 50 },
                        { Field: "DuongDung", Title: "Đường dùng", Width: 50 },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
                        { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "HangSanXuat", Title: "Hãng SX", Width: 220 },
                        { Field: "NuocSanXuat", Title: "Nước SX", Width: 205 },
                        { Field: "SoLuongCanBu", Title: "SL cần bù", Width: 60, Template: this.slCanBuTemplate },
                        { Field: "SLDaLinh", Title: "SL đã bù", Width: 100 },
                        { Field: "SoLuongYeuCau", Title: "SL yêu cầu", Width: 100 },
                    ];
                    //-------------end  Lĩnh bù---------------------------------------------------------------------------------------------------
                    //-------------lĩnh dự trù------------------------------------------------------------------------------------------------------
                    this.gridChildLinhDuTruChuaDuyetColumns = [
                        { Field: "STT", Title: "#", Width: 50, Template: this.sttTemplate },
                        { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "TenVatTu", Title: "Tên dược phẩm", Width: 120, Sortable: true },
                        { Field: "HoatChat", Title: "Hoạt chất", Width: 50 },
                        { Field: "NongDoHamLuong", Title: "Nồng độ/hàm lượng", Width: 50 },
                        { Field: "DuongDung", Title: "Đường dùng", Width: 50 },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 100, Sortable: true },
                        { Field: "HangSanXuat", Title: "Hãng SX", Width: 200, Sortable: true },
                        { Field: "NuocSanXuat", Title: "Nước SX", Width: 120, Sortable: true },
                        { Field: "SLTon", Title: "SL Tồn", Width: 100 },
                        { Field: "SoLuongYc", Title: "SL yêu cầu", Width: 120 }
                    ];
                    this.gridChildLinhDuTruDaDuyetColumns = [
                        { Field: "STT", Title: "#", Width: 50, Template: this.sttTemplate },
                        { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "TenVatTu", Title: "Tên dược phẩm", Width: 120, Sortable: true },
                        { Field: "HoatChat", Title: "Hoạt chất", Width: 50 },
                        { Field: "NongDoHamLuong", Title: "Nồng độ/hàm lượng", Width: 50 },
                        { Field: "DuongDung", Title: "Đường dùng", Width: 50 },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 100, Sortable: true },
                        { Field: "HangSanXuat", Title: "Hãng SX", Width: 200, Sortable: true },
                        { Field: "NuocSanXuat", Title: "Nước SX", Width: 120, Sortable: true },
                        { Field: "SoLuongTon", Title: "SL Tồn", Width: 100 },
                        { Field: "SoLuongYc", Title: "SL yêu cầu", Width: 120 }
                    ];
                    //----------  end lĩnh dự trù------------------------------------------------------------------------------------------------------
                    //-------------lĩnh bệnh nhân--------------------------------------------------------------------------------------------------------------------
                    this.gridChildLinhBenhNhanColumns = [
                        { Field: "STT", Title: "#", Width: 20, Template: this.sttTemplate },
                        { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 120 },
                        { Field: "MaBenhNhan", Title: "Mã NB", Width: 120, Sortable: true },
                        { Field: "HoTen", Title: "Họ tên", Width: 180, Sortable: true },
                        { Field: "SoLuong", Title: "SL", Width: 80, Sortable: true }
                    ];
                    this.gridChildChildLinhBenhNhanColumns = [
                        { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
                        { Field: "TenDuocPham", Title: "Tên dược phẩm", Width: 180 },
                        { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "HoatChat", Title: "Hoạt chất", Width: 150 },
                        { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
                        { Field: "DuongDung", Title: "Đường dùng", Width: 80 },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 80 },
                        { Field: "HangSanXuat", Title: "Hãng SX", Width: 150 },
                        { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
                        { Field: "DichVuKham", Title: "DV Khám", Width: 180 },
                        { Field: "BacSiKeToa", Title: "BS kê toa", Width: 120 },
                        { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 },
                        { Field: "NgayKetString", Title: "Ngày kê", Width: 120 },
                        { Field: "SoLuongTon", Title: "SL Tồn", Width: 90 },
                        { Field: "SoLuongYeuCau", Title: "SL Yêu cầu", Width: 90 }
                    ];
                    this.gridChildChildLinhBenhNhanDaDuyetColumns = [
                        { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
                        { Field: "TenDuocPham", Title: "Tên dược phẩm", Width: 180 },
                        { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "HoatChat", Title: "Hoạt chất", Width: 150 },
                        { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
                        { Field: "DuongDung", Title: "Đường dùng", Width: 80 },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 80 },
                        { Field: "HangSanXuat", Title: "Hãng SX", Width: 150 },
                        { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
                        { Field: "DichVuKham", Title: "DV Khám", Width: 180 },
                        { Field: "BacSiKeToa", Title: "BS kê toa", Width: 120 },
                        { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 },
                        { Field: "NgayKetString", Title: "Ngày kê", Width: 120 },
                        //{ Field: "SoLuongTon", Title: "SL Tồn", Width: 90 },
                        { Field: "SoLuongYeuCau", Title: "SL Yêu cầu", Width: 90 }
                    ];
                    this.gridChildChildLinhBenhNhanTuChoiColumns = [
                        { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
                        { Field: "TenDuocPham", Title: "Tên dược phẩm", Width: 180 },
                        { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "HoatChat", Title: "Hoạt chất", Width: 150 },
                        { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
                        { Field: "DuongDung", Title: "Đường dùng", Width: 80 },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 80 },
                        { Field: "HangSanXuat", Title: "Hãng SX", Width: 150 },
                        { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
                        //{ Field: "SoLuongTon", Title: "SL Tồn", Width: 90 },
                        { Field: "SoLuongYeuCau", Title: "SL Yêu cầu", Width: 90 }
                    ];
                    //-------------end lĩnh bệnh nhân--------------------------------------------------------------------------------------------------------------------
                    if (this.route.snapshot.queryParams.holdQuery != null) {
                        this.holdQuery = this.route.snapshot.queryParams.holdQuery;
                    }
                    if (this.holdQuery != null &&
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_27__["LocalStorageHelper"].getItem('additionalSearchStringTaoLDP') != null) {
                        this.TimKiemId();
                    }
                    else {
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_27__["LocalStorageHelper"].setItem('additionalSearchStringTaoLDP', null);
                        var NgayDuyetRangDateStartDate = null;
                        var NgayDuyetRangDateEndDate = null;
                        var NgayYeuCauRangDateStartDate = null;
                        var NgayYeuCauRangDateEndDate = null;
                        var Searching = null;
                        var queryString = "{\"NgayYeuCauRangDateStartDate\":" + NgayYeuCauRangDateStartDate + ",\"NgayYeuCauRangDateStartEnd\":" + NgayYeuCauRangDateEndDate
                            + ",\"NgayDuyetRangDateStartDate\":" + NgayDuyetRangDateStartDate + ",\"NgayDuyetRangDateStartEnd\":" + NgayDuyetRangDateEndDate + ",\"Searching\":" + Searching + ",\"DangChoGoi\":" + this.linhVatTuGridVo.DangChoGoi + ",\"DangChoDuyet\":" + this.linhVatTuGridVo.DangChoDuyet + ",\"TuChoiDuyet\":" + this.linhVatTuGridVo.TuChoiDuyet + ",\"DaDuyet\":" + this.linhVatTuGridVo.DaDuyet + " }";
                        this.gridChild.additionalSearchString = queryString;
                    }
                };
                DanhSachYeuCauLinhThuocComponent.prototype.TimKiemId = function () {
                    var searching = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_27__["LocalStorageHelper"].getItem("additionalSearchStringTaoLDP");
                    var KiemTraLoCalAdditonalExit;
                    if (searching != undefined && searching != null && searching != "") {
                        KiemTraLoCalAdditonalExit = JSON.parse(searching);
                    }
                    if (searching == undefined || searching == null || searching == "") {
                        var NgayDuyetRangDateStartDate = null;
                        var NgayDuyetRangDateEndDate = null;
                        var NgayYeuCauRangDateStartDate = null;
                        var NgayYeuCauRangDateEndDate = null;
                        var Searching = null;
                        var queryString = "{\"NgayYeuCauRangDateStartDate\":" + NgayYeuCauRangDateStartDate + ",\"NgayYeuCauRangDateStartEnd\":" + NgayYeuCauRangDateEndDate
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
                };
                DanhSachYeuCauLinhThuocComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.TimkiemNangCao();
                    }
                    if (event.key == "Backspace") {
                        this.TimkiemNangCao();
                    }
                };
                DanhSachYeuCauLinhThuocComponent.prototype.onKeyDateRange = function (event) {
                    if (event.key == 'Enter') {
                        this.TimkiemNangCao();
                    }
                };
                DanhSachYeuCauLinhThuocComponent.prototype.changRange = function (event) {
                    this.TimkiemNangCao();
                };
                DanhSachYeuCauLinhThuocComponent.prototype.searchChanges = function () {
                    if (this.searchString == null || this.searchString == "") {
                        if (this.holdQuery != null) {
                            this.TimkiemNangCao();
                        }
                    }
                };
                DanhSachYeuCauLinhThuocComponent.prototype.TimkiemNangCao = function () {
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
                    if (this.searchString != null || this.searchString != undefined) {
                        this.linhVatTuGridVo.Searching = this.searchString;
                    }
                    else {
                        this.linhVatTuGridVo.Searching = null;
                    }
                    var queryStringSearch = JSON.stringify(this.linhVatTuGridVo);
                    this.stringAddtionnal = queryStringSearch;
                    this.gridChild._additionalSearchString = queryStringSearch;
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_27__["LocalStorageHelper"].setItem("additionalSearchStringTaoLDP", queryStringSearch);
                    this.gridChild.search();
                };
                DanhSachYeuCauLinhThuocComponent.prototype.checkTrangThaiDCT = function (event, type) {
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
                };
                DanhSachYeuCauLinhThuocComponent.prototype.loadingPageDaDuyet = function () {
                    this.popupLoadingDataDaDuyet = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_23__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang tải dữ liệu..." },
                    });
                };
                DanhSachYeuCauLinhThuocComponent.prototype.closePopupLoadingDataDaDuyet = function () {
                    if (this.popupLoadingDataDaDuyet != undefined && this.popupLoadingDataDaDuyet != null) {
                        this.popupLoadingDataDaDuyet.close();
                    }
                };
                DanhSachYeuCauLinhThuocComponent.prototype.blur = function (event) {
                    this.TimkiemNangCao();
                };
                /// in 
                DanhSachYeuCauLinhThuocComponent.prototype.InPhieuLinh = function (data) {
                    var _this = this;
                    var self = this;
                    if (data.LoaiPhieuLinh == 1 || data.LoaiPhieuLinh == 2) { //lĩnh dự trù(dự trù) hoặc lĩnh bù
                        self.loadingPageDaDuyet();
                        self.inPhieuLinhThuong.HostingName = window.location.protocol + "//" + window.location.host;
                        self.inPhieuLinhThuong.Header = true;
                        self.inPhieuLinhThuong.YeuCauLinhDuocPhamId = data.Id;
                        self.inPhieuLinhThuong.LoaiPhieuLinh = data.LoaiPhieuLinh;
                        self.inPhieuLinhThuong.TrangThai = data.DuocDuyet;
                        self.apiService.post("YeuCauLinhDuocPham/InPhieuLinhThuongDuocPham", self.inPhieuLinhThuong).subscribe(function (resData) {
                            if (resData != undefined && resData != null) {
                                self.closePopupLoadingDataDaDuyet();
                                self.inPhieuLinhThuong.Header = false;
                                self.dialog.open(_phieu_linh_thuoc_thuong_popup_phieu_linh_thuoc_thuong_popup_component__WEBPACK_IMPORTED_MODULE_24__["PhieuLinhThuocThuongPopupComponent"], {
                                    disableClose: false,
                                    width: '1200px',
                                    data: resData,
                                });
                            }
                        }, function (err) {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                            self.closePopupLoadingDataDaDuyet();
                        });
                    }
                    else { //lĩnh trực tiếp
                        var trangThaiIn = void 0;
                        if (data.DuocDuyet == false) {
                            trangThaiIn = false;
                        }
                        else {
                            trangThaiIn = true;
                        }
                        var dataIn = {
                            Hosting: null,
                            YeuCauLinhDuocPhamId: data.Id,
                            LoaiPhieuLinh: data.LoaiPhieuLinh,
                            TrangThaiIn: trangThaiIn
                        };
                        if (window.location.protocol == "http:") {
                            dataIn.Hosting = "http://" + window.location.host;
                        }
                        else {
                            dataIn.Hosting = "https://" + window.location.host;
                        }
                        this.apiService.post("YeuCauLinhDuocPham/InLinhDuocPham", dataIn).subscribe(function (resultData) {
                            var dialogRef = _this.dialog.open(_in_linh_duoc_pham_in_linh_duoc_pham_component__WEBPACK_IMPORTED_MODULE_15__["InLinhDuocPhamComponent"], {
                                width: '1000px',
                                data: { Model: resultData, LoaiPhieuLinh: data.Loai }
                            }).afterClosed().subscribe(function () { });
                        }, function (err) {
                            _this.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                _this.notificationService.showError(err.Message);
                            }
                        });
                    }
                };
                DanhSachYeuCauLinhThuocComponent.prototype.Huy = function (dataItem) {
                    var _this = this;
                    if (dataItem != undefined && dataItem != null) {
                        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_28__["ConfirmComponent"], {
                            disableClose: false,
                            width: "500px",
                            data: {
                                Title: "Xác nhận",
                                Message: "Bạn có muốn xóa phiếu lĩnh này không ?",
                            },
                        }).afterClosed().subscribe(function (res) {
                            if (res == "Yes") {
                                _this.apiService.post("YeuCauLinhDuocPham/HuyItemYeuCauLinhThuoc?id=" + dataItem.Id).subscribe(function (resultData) {
                                    _this.notificationService.showSuccess("Xóa thành công");
                                    _this.TimkiemNangCao();
                                }, function (err) {
                                    _this.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                });
                            }
                        });
                    }
                    ;
                };
                DanhSachYeuCauLinhThuocComponent.prototype.clearSearch = function () { };
                DanhSachYeuCauLinhThuocComponent.prototype.exportExcel = function () {
                    var self = this;
                    self.showPopupLoadingData();
                    self.exportQueryInfoQueryInfo.Sort = this.gridChild.sort.map(function (item) {
                        return new src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_29__["Sort"](item.field, item.dir);
                    });
                    self.exportQueryInfoQueryInfo.AdditionalSearchString = this.stringAddtionnal;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_21__["SecurityOperation"].Process)) {
                        self.apiService.postExportExcel('YeuCauLinhDuocPham/ExportDanhSachLinhDuocPham', self.exportQueryInfoQueryInfo).subscribe(function (resultData) {
                            self.closePopupLoadingData();
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'DanhSachYeuCauLinhDuocPham' + dateTimeNow.getFullYear() + '.xlsx');
                        }, function (err) {
                            self.notificationService.showError(err.Message);
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_22__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DanhSachYeuCauLinhThuocComponent.prototype.showPopupLoadingData = function () {
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_23__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                };
                DanhSachYeuCauLinhThuocComponent.prototype.closePopupLoadingData = function () {
                    this.dialog.closeAll();
                };
                DanhSachYeuCauLinhThuocComponent.prototype.Xem = function (id, loaiPhieuLinh, daGui) {
                    //   if (dataItem.LoaiPhieuLinh == 1) { //Lĩnh dự trù (dự trù)
                    //     console.log(dataItem)
                    //     this.router.navigate(["/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/gui-lai-phieu-linh-thuoc-thuong/" + dataItem.Id]);
                    //   } else if (dataItem.LoaiPhieuLinh == 2) { //Lĩnh bù
                    //     this.router.navigate(["/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/gui-lai-phieu-linh-thuoc-bu/" + dataItem.Id]);
                    //   } else if (dataItem.LoaiPhieuLinh == 3) { //Lĩnh trực tiếp
                    //     this.router.navigate(["/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/gui-lai-phieu-linh-thuoc-truc-tiep/" + dataItem.Id]);
                    //   }
                    // }
                    switch (loaiPhieuLinh) {
                        case src_app_shared_enum_linh_vat_tu_thuoc_enum__WEBPACK_IMPORTED_MODULE_25__["EnumLoaiPhieuLinh"].LinhDuTru:
                            if (this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].TaoYeuCauLinhThuongDuocPham, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_21__["SecurityOperation"].Update)) {
                                this.router.navigate(["/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/gui-lai-phieu-linh-thuoc-thuong/" + id], { queryParams: { holdQuery: this.trangThaiCheck } });
                                break;
                            }
                            else {
                                this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_22__["SystemMessage"].UnAuthorizedMessage);
                            }
                        case src_app_shared_enum_linh_vat_tu_thuoc_enum__WEBPACK_IMPORTED_MODULE_25__["EnumLoaiPhieuLinh"].LinhBu:
                            if (this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].TaoYeuCauLinhBuDuocPham, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_21__["SecurityOperation"].Update)) {
                                this.router.navigate(["/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/gui-lai-phieu-linh-thuoc-bu/" + id], { queryParams: { holdQuery: this.trangThaiCheck } });
                                break;
                            }
                            else {
                                this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_22__["SystemMessage"].UnAuthorizedMessage);
                            }
                        case src_app_shared_enum_linh_vat_tu_thuoc_enum__WEBPACK_IMPORTED_MODULE_25__["EnumLoaiPhieuLinh"].LinhChoBenhNhan:
                            if (this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].TaoYeuCauLinhTrucTiepDuocPham, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_21__["SecurityOperation"].Update)) {
                                if (daGui == null || daGui == false) {
                                    this.router.navigate(["/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/gui-lai-phieu-linh-thuoc-truc-tiep/" + id], { queryParams: { holdQuery: true } });
                                    break;
                                }
                                else {
                                    this.router.navigate(["/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/gui-lai-phieu-linh-thuoc-truc-tiep/" + id]);
                                    break;
                                }
                            }
                            else {
                                this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_22__["SystemMessage"].UnAuthorizedMessage);
                            }
                    }
                };
                DanhSachYeuCauLinhThuocComponent.prototype.taoPhieuLinh = function (loaiPhieuLinh) {
                    switch (loaiPhieuLinh) {
                        case src_app_shared_enum_linh_vat_tu_thuoc_enum__WEBPACK_IMPORTED_MODULE_25__["EnumLoaiPhieuLinh"].LinhDuTru:
                            if (this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].TaoYeuCauLinhThuongDuocPham, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_21__["SecurityOperation"].Add)) {
                                this.router.navigate(["/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-thuong"]);
                                break;
                            }
                            else {
                                this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_22__["SystemMessage"].UnAuthorizedMessage);
                            }
                        case src_app_shared_enum_linh_vat_tu_thuoc_enum__WEBPACK_IMPORTED_MODULE_25__["EnumLoaiPhieuLinh"].LinhBu:
                            if (this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].TaoYeuCauLinhBuDuocPham, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_21__["SecurityOperation"].Add)) {
                                this.router.navigate(["/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-bu"]);
                                break;
                            }
                            else {
                                this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_22__["SystemMessage"].UnAuthorizedMessage);
                            }
                        case src_app_shared_enum_linh_vat_tu_thuoc_enum__WEBPACK_IMPORTED_MODULE_25__["EnumLoaiPhieuLinh"].LinhChoBenhNhan:
                            if (this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].TaoYeuCauLinhTrucTiepDuocPham, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_21__["SecurityOperation"].Add)) {
                                this.router.navigate(["/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-truc-tiep"], { queryParams: { holdQuery: 0 } });
                                break; // xem lai
                            }
                            else {
                                this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_22__["SystemMessage"].UnAuthorizedMessage);
                            }
                    }
                };
                return DanhSachYeuCauLinhThuocComponent;
            }());
            DanhSachYeuCauLinhThuocComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_26__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], DanhSachYeuCauLinhThuocComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TinhTrangTemplate', { static: true })
            ], DanhSachYeuCauLinhThuocComponent.prototype, "TinhTrangTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('groupTemplate', { static: true })
            ], DanhSachYeuCauLinhThuocComponent.prototype, "groupTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maTNTemplate', { static: true })
            ], DanhSachYeuCauLinhThuocComponent.prototype, "PLTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayYeuCauTemplate', { static: true })
            ], DanhSachYeuCauLinhThuocComponent.prototype, "ngayYeuCauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayDuyetTemplate', { static: true })
            ], DanhSachYeuCauLinhThuocComponent.prototype, "ngayDuyetTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], DanhSachYeuCauLinhThuocComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
            ], DanhSachYeuCauLinhThuocComponent.prototype, "sttTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slCanBuTemplate', { static: true })
            ], DanhSachYeuCauLinhThuocComponent.prototype, "slCanBuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__["GridComponent"], { static: true })
            ], DanhSachYeuCauLinhThuocComponent.prototype, "gridChild", void 0);
            DanhSachYeuCauLinhThuocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-danh-sach-yeu-cau-linh-thuoc',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./danh-sach-yeu-cau-linh-thuoc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/danh-sach-yeu-cau-linh-thuoc/danh-sach-yeu-cau-linh-thuoc.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./danh-sach-yeu-cau-linh-thuoc.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/danh-sach-yeu-cau-linh-thuoc/danh-sach-yeu-cau-linh-thuoc.component.scss")).default]
                })
            ], DanhSachYeuCauLinhThuocComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/in-linh-duoc-pham/in-linh-duoc-pham.component.scss": 
        /*!************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/in-linh-duoc-pham/in-linh-duoc-pham.component.scss ***!
          \************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veWV1LWNhdS1saW5oLXRodW9jL2luLWxpbmgtZHVvYy1waGFtL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFxkdW9jLXBoYW1cXHlldS1jYXUtbGluaC10aHVvY1xcaW4tbGluaC1kdW9jLXBoYW1cXGluLWxpbmgtZHVvYy1waGFtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS95ZXUtY2F1LWxpbmgtdGh1b2MvaW4tbGluaC1kdW9jLXBoYW0vaW4tbGluaC1kdW9jLXBoYW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veWV1LWNhdS1saW5oLXRodW9jL2luLWxpbmgtZHVvYy1waGFtL2luLWxpbmgtZHVvYy1waGFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iLCIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/in-linh-duoc-pham/in-linh-duoc-pham.component.ts": 
        /*!**********************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/in-linh-duoc-pham/in-linh-duoc-pham.component.ts ***!
          \**********************************************************************************************************************/
        /*! exports provided: InLinhDuocPhamComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InLinhDuocPhamComponent", function () { return InLinhDuocPhamComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var InLinhDuocPhamComponent = /** @class */ (function () {
                function InLinhDuocPhamComponent(data, sanitizer, dialog) {
                    this.data = data;
                    this.sanitizer = sanitizer;
                    this.dialog = dialog;
                    this.src = '';
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.loaiPhieuLinh = "";
                    this.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(this.data.Model);
                }
                InLinhDuocPhamComponent.prototype.ngOnInit = function () {
                    this.modelPrint = this.data.Model;
                    this.loaiPhieuLinh = this.data.LoaiPhieuLinh;
                };
                InLinhDuocPhamComponent.prototype.getSharedPrintForm = function () {
                    var dataReplaceemplateHeaderGayNghien = "";
                    var templateHeaderGayNghien = '<div class=\'wrap\'><div class=\'content\'>PHIẾU LĨNH DƯỢC PHẨM</div></div>';
                    dataReplaceemplateHeaderGayNghien = this.replaceAll(this.modelPrint, templateHeaderGayNghien, '');
                    return new Promise(function (resolve) {
                        resolve(dataReplaceemplateHeaderGayNghien);
                    });
                };
                InLinhDuocPhamComponent.prototype.replaceAll = function (str, find, replace) {
                    return str.replace(new RegExp(find, "g"), replace);
                };
                InLinhDuocPhamComponent.prototype.close = function () {
                    this.dialog.closeAll();
                };
                return InLinhDuocPhamComponent;
            }());
            InLinhDuocPhamComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
            ]; };
            InLinhDuocPhamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-in-linh-duoc-pham',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./in-linh-duoc-pham.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/in-linh-duoc-pham/in-linh-duoc-pham.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./in-linh-duoc-pham.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/in-linh-duoc-pham/in-linh-duoc-pham.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], InLinhDuocPhamComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-gui-lai/phieu-linh-thuoc-bu-gui-lai.component.scss": 
        /*!********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-gui-lai/phieu-linh-thuoc-bu-gui-lai.component.scss ***!
          \********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".status-yeu-cau-linh {\n  margin-left: auto;\n}\n\n.status-yeu-cau-linh.ycl-cho-duyet {\n  color: orange;\n}\n\n.status-yeu-cau-linh.ycl-da-duyet {\n  color: green;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veWV1LWNhdS1saW5oLXRodW9jL3BoaWV1LWxpbmgtdGh1b2MtYnUtZ3VpLWxhaS9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcZHVvYy1waGFtXFx5ZXUtY2F1LWxpbmgtdGh1b2NcXHBoaWV1LWxpbmgtdGh1b2MtYnUtZ3VpLWxhaVxccGhpZXUtbGluaC10aHVvYy1idS1ndWktbGFpLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS95ZXUtY2F1LWxpbmgtdGh1b2MvcGhpZXUtbGluaC10aHVvYy1idS1ndWktbGFpL3BoaWV1LWxpbmgtdGh1b2MtYnUtZ3VpLWxhaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3lldS1jYXUtbGluaC10aHVvYy9waGlldS1saW5oLXRodW9jLWJ1LWd1aS1sYWkvcGhpZXUtbGluaC10aHVvYy1idS1ndWktbGFpLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXR1cy15ZXUtY2F1LWxpbmgge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWNoby1kdXlldCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1kYS1kdXlldCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn0iLCIuc3RhdHVzLXlldS1jYXUtbGluaCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtY2hvLWR1eWV0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWRhLWR1eWV0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-gui-lai/phieu-linh-thuoc-bu-gui-lai.component.ts": 
        /*!******************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-gui-lai/phieu-linh-thuoc-bu-gui-lai.component.ts ***!
          \******************************************************************************************************************************************/
        /*! exports provided: PhieuLinhThuocBuGuiLaiComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhThuocBuGuiLaiComponent", function () { return PhieuLinhThuocBuGuiLaiComponent; });
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
            /* harmony import */ var _phieu_linh_thuoc_bu_shared_phieu_linh_thuoc_bu_shared_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../phieu-linh-thuoc-bu-shared/phieu-linh-thuoc-bu-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-shared/phieu-linh-thuoc-bu-shared.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../yeu-cau-linh-thuoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/yeu-cau-linh-thuoc.model.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var _phieu_linh_thuoc_bu_popup_phieu_linh_thuoc_bu_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../phieu-linh-thuoc-bu-popup/phieu-linh-thuoc-bu-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-popup/phieu-linh-thuoc-bu-popup.component.ts");
            var PhieuLinhThuocBuGuiLaiComponent = /** @class */ (function () {
                function PhieuLinhThuocBuGuiLaiComponent(dialog, route, notificationService, authService, apiService, router, ref) {
                    this.dialog = dialog;
                    this.route = route;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.apiService = apiService;
                    this.router = router;
                    this.ref = ref;
                    this.hostingName = null;
                    this.loading = false;
                    this.trangThaiVo = null;
                    this.yeuCauLinhDuocPham = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_14__["YeuCauLinhBuDuocPham"]();
                    this.isHideDuyet = false;
                    this.isDisabledNguoiTaoPhieu = false;
                    this.phieuLinhId = null;
                    this.flag = true;
                    this.inPhieuLinhBu = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_14__["PhieuLinhThuocThuong"]();
                }
                PhieuLinhThuocBuGuiLaiComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_11__["DocumentType"].TaoYeuCauLinhBuDuocPham;
                    this.route
                        .queryParams
                        .subscribe(function (v) {
                        _this.trangThaiDanhSach = v;
                    });
                    this.yeuCauLinhDuocPham = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_14__["YeuCauLinhBuDuocPham"]();
                    var id = this.route.snapshot.params.id;
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
                };
                PhieuLinhThuocBuGuiLaiComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang lưu dữ liệu..." },
                    });
                };
                PhieuLinhThuocBuGuiLaiComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                PhieuLinhThuocBuGuiLaiComponent.prototype.luuPhieuLinhBu = function (daGui) {
                    var self = this;
                    self.yeuCauLinhDuocPham = self.shared.getSharedData();
                    if (self.yeuCauLinhDuocPham.YeuCauDuocPhamBenhViens.every(function (z) { return !z.CheckBox; })) {
                        if (daGui) {
                            self.notificationService.showError("Vui lòng chọn dược phẩm muốn gửi phiếu.");
                        }
                        else {
                            self.notificationService.showError("Vui lòng chọn dược phẩm muốn lưu phiếu.");
                        }
                    }
                    else {
                        if (daGui) {
                            self.xacNhanGuiPhieuLinh();
                        }
                        else {
                            self.xacNhanLuuPhieuLinh();
                        }
                    }
                };
                PhieuLinhThuocBuGuiLaiComponent.prototype.xacNhanGuiPhieuLinh = function () {
                    var _this = this;
                    var self = this;
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == null) {
                        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmComponent"], {
                            disableClose: false,
                            width: "500px",
                            data: {
                                Title: "Xác nhận",
                                Message: "Bạn có muốn gửi phiếu lĩnh dược phẩm này không ?",
                            },
                        }).afterClosed().subscribe(function (res) {
                            if (res == "Yes") {
                                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Update)) {
                                    self.yeuCauLinhDuocPham.DaGui = true;
                                    self.loadingPage();
                                    self.apiService.post("YeuCauLinhDuocPham/GuiLaiPhieuLinhBu", self.yeuCauLinhDuocPham).subscribe(function (result) {
                                        if (result != undefined && result != null) {
                                            self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                            self.shared.ganDieuKienLoadGridDuocPham(self.yeuCauLinhDuocPham.KhoXuatId, self.yeuCauLinhDuocPham.KhoNhapId);
                                            self.closePopupLoadingData();
                                            self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmComponent"], {
                                                disableClose: false,
                                                width: "500px",
                                                data: {
                                                    Title: "Xác nhận in",
                                                    Message: "Bạn có muốn in phiếu lĩnh dược phẩm này không ?",
                                                },
                                            }).afterClosed().subscribe(function (res) {
                                                if (res == "Yes") {
                                                    self.loadingPage();
                                                    self.inPhieuLinhBu.Header = true;
                                                    self.inPhieuLinhBu.YeuCauLinhDuocPhamId = result.Id;
                                                    self.inPhieuLinhBu.LoaiPhieuLinh = 2;
                                                    self.inPhieuLinhBu.TrangThai = _this.trangThaiVo.TrangThai;
                                                    self.apiService.post("YeuCauLinhDuocPham/InPhieuLinhBuDuocPham", self.inPhieuLinhBu).subscribe(function (resData) {
                                                        if (resData != undefined && resData != null) {
                                                            self.closePopupLoadingData();
                                                            self.inPhieuLinhBu.Header = false;
                                                            self.dialog.open(_phieu_linh_thuoc_bu_popup_phieu_linh_thuoc_bu_popup_component__WEBPACK_IMPORTED_MODULE_17__["PhieuLinhThuocBuPopupComponent"], {
                                                                disableClose: false,
                                                                width: '1200px',
                                                                data: { Model: resData },
                                                            }).afterClosed().subscribe(function () {
                                                                self.closePopupLoadingData();
                                                                self.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
                                                            });
                                                        }
                                                    }, function (err) {
                                                        self.validationErrors = err.ValidationErrors;
                                                        if (err.Message != "Validation Failed") {
                                                            self.notificationService.showError(err.Message);
                                                        }
                                                        self.closePopupLoadingData();
                                                    });
                                                }
                                                else {
                                                    _this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
                                                }
                                            });
                                        }
                                    }, function (err) {
                                        self.validationErrors = err.ValidationErrors;
                                        if (err.Message != "Validation Failed") {
                                            self.notificationService.showError(err.Message);
                                        }
                                        self.closePopupLoadingData();
                                    });
                                }
                                else {
                                    self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                                }
                            }
                        });
                    }
                };
                PhieuLinhThuocBuGuiLaiComponent.prototype.xacNhanLuuPhieuLinh = function () {
                    var self = this;
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == null) {
                        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmComponent"], {
                            disableClose: false,
                            width: "500px",
                            data: {
                                Title: "Xác nhận",
                                Message: "Bạn có muốn lưu phiếu lĩnh dược phẩm này không ?",
                            },
                        }).afterClosed().subscribe(function (res) {
                            if (res == "Yes") {
                                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Update)) {
                                    self.loadingPage();
                                    self.apiService.post("YeuCauLinhDuocPham/GuiLaiPhieuLinhBu", self.yeuCauLinhDuocPham).subscribe(function (result) {
                                        if (result != undefined && result != null) {
                                            self.yeuCauLinhDuocPham.LastModified = result.LastModified;
                                            self.trangThaiVo.EnumTrangThaiPhieuLinh = result.enumTrangThaiPhieuLinh;
                                            self.trangThaiVo.Ten = result.ten;
                                            self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                            self.shared.ganDieuKienLoadGridDuocPham(self.yeuCauLinhDuocPham.KhoXuatId, self.yeuCauLinhDuocPham.KhoNhapId);
                                            self.closePopupLoadingData();
                                        }
                                    }, function (err) {
                                        self.validationErrors = err.ValidationErrors;
                                        if (err.Message != "Validation Failed") {
                                            self.notificationService.showError(err.Message);
                                        }
                                        self.closePopupLoadingData();
                                    });
                                }
                                else {
                                    self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                                }
                            }
                        });
                    }
                };
                // luuVaGuiDuyetLai() {
                //   var self = this;
                //   self.dialog.open(ConfirmComponent, {
                //     disableClose: false,
                //     width: '400px',
                //     data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn gửu lại phê duyệt cho lần lĩnh dược phẩm này không?" }
                //   }).afterClosed().subscribe(result => {
                //     if (result === 'Yes') {
                //       self.yeuCauLinhDuocPham = self.shared.getSharedData();
                //       self.validationErrors = [];
                //       self.ref.detectChanges();
                //       if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
                //         self.loadingPage();
                //         self.apiService.post<any>("YeuCauLinhDuocPham/GuiLaiPhieuLinhBu", self.yeuCauLinhDuocPham).subscribe(
                //           (result) => {
                //             if (result != undefined && result != null) {
                //               self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                //               self.closePopupLoadingData();
                //               self.dialog.open(ConfirmComponent, {
                //                 disableClose: false,
                //                 width: "500px",
                //                 data: {
                //                   Title: "Xác nhận",
                //                   Message: "Bạn có muốn in phiếu phiếu lĩnh dược phẩm này không ?",
                //                 },
                //               }).afterClosed().subscribe((res) => {
                //                 if (res == "Yes") {
                //                   self.loadingPage();
                //                   self.inPhieuLinhBu.Header = true;
                //                   self.inPhieuLinhBu.YeuCauLinhDuocPhamId = result;
                //                   self.inPhieuLinhBu.LoaiPhieuLinh = 2;
                //                   self.inPhieuLinhBu.TrangThai = this.trangThaiVo.TrangThai;
                //                   self.apiService.post<any>("YeuCauLinhDuocPham/InPhieuLinhBuDuocPham", self.inPhieuLinhBu).subscribe(
                //                     resData => {
                //                       if (resData != undefined && resData != null) {
                //                         self.closePopupLoadingData();
                //                         self.inPhieuLinhBu.Header = false;
                //                         self.dialog.open(PhieuLinhThuocBuPopupComponent, {
                //                           disableClose: false,
                //                           width: '1200px',
                //                           data: resData,
                //                         }).afterClosed().subscribe(() => {
                //                           self.closePopupLoadingData();
                //                           self.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
                //                         });
                //                       }
                //                     },
                //                     (err: ApiError) => {
                //                       self.validationErrors = err.ValidationErrors;
                //                       if (err.Message != "Validation Failed") {
                //                         self.notificationService.showError(err.Message);
                //                       }
                //                       self.closePopupLoadingData();
                //                     }
                //                   );
                //                 } else {
                //                   this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
                //                 }
                //               });
                //             }
                //           },
                //           (err: ApiError) => {
                //             self.validationErrors = err.ValidationErrors;
                //             if (err.Message != "Validation Failed") {
                //               self.notificationService.showError(err.Message);
                //             }
                //             self.closePopupLoadingData();
                //           });
                //       } else {
                //         self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
                //       }
                //     }
                //   }
                //   );
                // }
                PhieuLinhThuocBuGuiLaiComponent.prototype.loadingPageDaDuyet = function () {
                    this.popupLoadingDataDaDuyet = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang tải dữ liệu..." },
                    });
                };
                PhieuLinhThuocBuGuiLaiComponent.prototype.closePopupLoadingDataDaDuyet = function () {
                    if (this.popupLoadingDataDaDuyet != undefined && this.popupLoadingDataDaDuyet != null) {
                        this.popupLoadingDataDaDuyet.close();
                    }
                };
                PhieuLinhThuocBuGuiLaiComponent.prototype.inPhieu = function () {
                    var self = this;
                    if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == true) { //Đã duyệt
                        self.loadingPageDaDuyet();
                        self.inPhieuLinhBu.Header = true;
                        self.inPhieuLinhBu.YeuCauLinhDuocPhamId = this.phieuLinhId;
                        self.inPhieuLinhBu.LoaiPhieuLinh = 2;
                        self.inPhieuLinhBu.TrangThai = this.trangThaiVo.TrangThai;
                        self.apiService.post("YeuCauLinhDuocPham/InPhieuLinhBuDuocPham", self.inPhieuLinhBu).subscribe(function (resData) {
                            if (resData != undefined && resData != null) {
                                self.closePopupLoadingDataDaDuyet();
                                self.inPhieuLinhBu.Header = false;
                                self.dialog.open(_phieu_linh_thuoc_bu_popup_phieu_linh_thuoc_bu_popup_component__WEBPACK_IMPORTED_MODULE_17__["PhieuLinhThuocBuPopupComponent"], {
                                    disableClose: false,
                                    width: '1200px',
                                    data: { Model: resData },
                                }).afterClosed().subscribe(function () {
                                    self.closePopupLoadingDataDaDuyet();
                                });
                            }
                        }, function (err) {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                            self.closePopupLoadingDataDaDuyet();
                        });
                    }
                    else if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == false) {
                        self.yeuCauLinhDuocPham = self.shared.getSharedData();
                        self.validationErrors = [];
                        self.ref.detectChanges();
                        self.loadingPageDaDuyet();
                        self.inPhieuLinhBu.Header = true;
                        self.inPhieuLinhBu.YeuCauLinhDuocPhamId = self.phieuLinhId;
                        self.inPhieuLinhBu.LoaiPhieuLinh = 2;
                        self.inPhieuLinhBu.TrangThai = this.trangThaiVo.TrangThai;
                        self.apiService.post("YeuCauLinhDuocPham/InPhieuLinhBuDuocPham", self.inPhieuLinhBu).subscribe(function (resData) {
                            if (resData != undefined && resData != null) {
                                self.inPhieuLinhBu.Header = false;
                                self.closePopupLoadingDataDaDuyet();
                                self.dialog.open(_phieu_linh_thuoc_bu_popup_phieu_linh_thuoc_bu_popup_component__WEBPACK_IMPORTED_MODULE_17__["PhieuLinhThuocBuPopupComponent"], {
                                    disableClose: false,
                                    width: '1200px',
                                    data: { Model: resData },
                                }).afterClosed().subscribe(function () {
                                    self.closePopupLoadingDataDaDuyet();
                                });
                            }
                        }, function (err) {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                            self.closePopupLoadingDataDaDuyet();
                        });
                    }
                    else {
                        self.yeuCauLinhDuocPham = self.shared.getSharedData();
                        if (self.yeuCauLinhDuocPham.YeuCauDuocPhamBenhViens.every(function (z) { return !z.CheckBox; })) {
                            self.notificationService.showError("Vui lòng chọn dược phẩm muốn in phiếu.");
                        }
                        else {
                            self.validationErrors = [];
                            self.ref.detectChanges();
                            self.inPhieuLinhBu.Header = true;
                            self.inPhieuLinhBu.YeuCauLinhDuocPhamId = self.phieuLinhId;
                            self.inPhieuLinhBu.LoaiPhieuLinh = 2;
                            self.inPhieuLinhBu.TrangThai = this.trangThaiVo.TrangThai;
                            if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Update)) {
                                self.loadingPageDaDuyet();
                                self.apiService.post("YeuCauLinhDuocPham/GuiLaiPhieuLinhBu", self.yeuCauLinhDuocPham).subscribe(function (result) {
                                    if (result != undefined && result != null) {
                                        self.closePopupLoadingDataDaDuyet();
                                        self.apiService.post("YeuCauLinhDuocPham/InPhieuLinhBuDuocPham", self.inPhieuLinhBu).subscribe(function (resData) {
                                            if (resData != undefined && resData != null) {
                                                self.inPhieuLinhBu.Header = false;
                                                self.dialog.open(_phieu_linh_thuoc_bu_popup_phieu_linh_thuoc_bu_popup_component__WEBPACK_IMPORTED_MODULE_17__["PhieuLinhThuocBuPopupComponent"], {
                                                    disableClose: false,
                                                    width: '1200px',
                                                    data: { Model: resData },
                                                }).afterClosed().subscribe(function () {
                                                    self.closePopupLoadingDataDaDuyet();
                                                });
                                            }
                                        }, function (err) {
                                            self.validationErrors = err.ValidationErrors;
                                            if (err.Message != "Validation Failed") {
                                                self.notificationService.showError(err.Message);
                                            }
                                            self.closePopupLoadingDataDaDuyet();
                                        });
                                    }
                                }, function (err) {
                                    self.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        self.notificationService.showError(err.Message);
                                    }
                                    self.closePopupLoadingDataDaDuyet();
                                });
                            }
                            else {
                                self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                            }
                        }
                    }
                };
                PhieuLinhThuocBuGuiLaiComponent.prototype.anHienButtonDuyet = function (event) {
                    if (event) {
                        this.isHideDuyet = true;
                    }
                    else {
                        this.isHideDuyet = false;
                    }
                };
                PhieuLinhThuocBuGuiLaiComponent.prototype.disableNguoiTaoPhieu = function (event) {
                    if (event) {
                        this.isDisabledNguoiTaoPhieu = true;
                    }
                    else {
                        this.isDisabledNguoiTaoPhieu = false;
                    }
                };
                PhieuLinhThuocBuGuiLaiComponent.prototype.GetTrangThaiPhieuLinh = function (id) {
                    var _this = this;
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].View)) {
                        self.apiService.get("YeuCauLinhDuocPham/GetTrangThaiPhieuLinh?phieuLinhId=" + id).subscribe(function (result) {
                            _this.trangThaiVo = result;
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                PhieuLinhThuocBuGuiLaiComponent.prototype.cancel = function () {
                    var data;
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
                    this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc'], { queryParams: { holdQuery: data } });
                };
                PhieuLinhThuocBuGuiLaiComponent.prototype.keyEvent = function (event) {
                    if (event.keyCode == 27 && !event.ctrlKey) {
                        //esc
                        this.cancel();
                        event.preventDefault();
                    }
                };
                return PhieuLinhThuocBuGuiLaiComponent;
            }());
            PhieuLinhThuocBuGuiLaiComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('temp', { read: _phieu_linh_thuoc_bu_shared_phieu_linh_thuoc_bu_shared_component__WEBPACK_IMPORTED_MODULE_10__["PhieuLinhThuocBuSharedComponent"], static: false })
            ], PhieuLinhThuocBuGuiLaiComponent.prototype, "shared", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
            ], PhieuLinhThuocBuGuiLaiComponent.prototype, "keyEvent", null);
            PhieuLinhThuocBuGuiLaiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-phieu-linh-thuoc-bu-gui-lai',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-linh-thuoc-bu-gui-lai.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-gui-lai/phieu-linh-thuoc-bu-gui-lai.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-linh-thuoc-bu-gui-lai.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-gui-lai/phieu-linh-thuoc-bu-gui-lai.component.scss")).default]
                })
            ], PhieuLinhThuocBuGuiLaiComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-popup/phieu-linh-thuoc-bu-popup.component.scss": 
        /*!****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-popup/phieu-linh-thuoc-bu-popup.component.scss ***!
          \****************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veWV1LWNhdS1saW5oLXRodW9jL3BoaWV1LWxpbmgtdGh1b2MtYnUtcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXGR1b2MtcGhhbVxceWV1LWNhdS1saW5oLXRodW9jXFxwaGlldS1saW5oLXRodW9jLWJ1LXBvcHVwXFxwaGlldS1saW5oLXRodW9jLWJ1LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS95ZXUtY2F1LWxpbmgtdGh1b2MvcGhpZXUtbGluaC10aHVvYy1idS1wb3B1cC9waGlldS1saW5oLXRodW9jLWJ1LXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3lldS1jYXUtbGluaC10aHVvYy9waGlldS1saW5oLXRodW9jLWJ1LXBvcHVwL3BoaWV1LWxpbmgtdGh1b2MtYnUtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUgLnBhZ2VicmVhayB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iLCIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUgLnBhZ2VicmVhayB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-popup/phieu-linh-thuoc-bu-popup.component.ts": 
        /*!**************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-popup/phieu-linh-thuoc-bu-popup.component.ts ***!
          \**************************************************************************************************************************************/
        /*! exports provided: PhieuLinhThuocBuPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhThuocBuPopupComponent", function () { return PhieuLinhThuocBuPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var PhieuLinhThuocBuPopupComponent = /** @class */ (function () {
                function PhieuLinhThuocBuPopupComponent(dialog, sanitizer, dialogRef, data) {
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
                PhieuLinhThuocBuPopupComponent.prototype.ngOnInit = function () {
                };
                PhieuLinhThuocBuPopupComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                PhieuLinhThuocBuPopupComponent.prototype.getSharedPrintForm = function () {
                    var dataReplaceemplateHeaderGayNghien = "";
                    var templateHeaderGayNghien = '<div class=\'wrap\'><div class=\'content\'>PHIẾU LĨNH DƯỢC PHẨM</div></div>';
                    dataReplaceemplateHeaderGayNghien = this.replaceAll(this.data.Model, templateHeaderGayNghien, '');
                    return new Promise(function (resolve) {
                        resolve(dataReplaceemplateHeaderGayNghien);
                    });
                };
                PhieuLinhThuocBuPopupComponent.prototype.replaceAll = function (str, find, replace) {
                    return str.replace(new RegExp(find, "g"), replace);
                };
                return PhieuLinhThuocBuPopupComponent;
            }());
            PhieuLinhThuocBuPopupComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            PhieuLinhThuocBuPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-phieu-linh-thuoc-bu-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-linh-thuoc-bu-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-popup/phieu-linh-thuoc-bu-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-linh-thuoc-bu-popup.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-popup/phieu-linh-thuoc-bu-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], PhieuLinhThuocBuPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-shared/phieu-linh-thuoc-bu-shared.component.scss": 
        /*!******************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-shared/phieu-linh-thuoc-bu-shared.component.scss ***!
          \******************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".icon-war-status-grid {\n  color: orange;\n  width: auto;\n  height: 15px;\n  margin-top: 5px;\n}\n\nsvg {\n  height: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veWV1LWNhdS1saW5oLXRodW9jL3BoaWV1LWxpbmgtdGh1b2MtYnUtc2hhcmVkL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFxkdW9jLXBoYW1cXHlldS1jYXUtbGluaC10aHVvY1xccGhpZXUtbGluaC10aHVvYy1idS1zaGFyZWRcXHBoaWV1LWxpbmgtdGh1b2MtYnUtc2hhcmVkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS95ZXUtY2F1LWxpbmgtdGh1b2MvcGhpZXUtbGluaC10aHVvYy1idS1zaGFyZWQvcGhpZXUtbGluaC10aHVvYy1idS1zaGFyZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS95ZXUtY2F1LWxpbmgtdGh1b2MvcGhpZXUtbGluaC10aHVvYy1idS1zaGFyZWQvcGhpZXUtbGluaC10aHVvYy1idS1zaGFyZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbi13YXItc3RhdHVzLWdyaWQge1xuICBjb2xvcjogb3JhbmdlO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbnN2ZyB7XG4gIGhlaWdodDogMmVtO1xufSIsIi5pY29uLXdhci1zdGF0dXMtZ3JpZCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuc3ZnIHtcbiAgaGVpZ2h0OiAyZW07XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-shared/phieu-linh-thuoc-bu-shared.component.ts": 
        /*!****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-shared/phieu-linh-thuoc-bu-shared.component.ts ***!
          \****************************************************************************************************************************************/
        /*! exports provided: PhieuLinhThuocBuSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhThuocBuSharedComponent", function () { return PhieuLinhThuocBuSharedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../yeu-cau-linh-thuoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/yeu-cau-linh-thuoc.model.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/warning */ "./node_modules/@iconify/icons-ic/warning.js");
            /* harmony import */ var _iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_10__);
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            var PhieuLinhThuocBuSharedComponent = /** @class */ (function () {
                function PhieuLinhThuocBuSharedComponent(apiService, notificationService, authService, ref, dialog, route) {
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.ref = ref;
                    this.dialog = dialog;
                    this.route = route;
                    this.yeuCauLinhBuDuocPham = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["YeuCauLinhBuDuocPham"]();
                    this.yeuCauLinhBuDuocPhamSearch = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["YeuCauLinhBuDuocPhamSearch"]();
                    this.linhTuKhoId = null;
                    this.linhVeKhoId = null;
                    this.linhVeKhoPreviousId = null;
                    this.dieuKienLoadGridDuocPham = null;
                    this.phieuLinhId = 0;
                    this.icWarning = _iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_10___default.a;
                    this.trangThai = null;
                    this.gridColumns = [];
                    this.gridChildColumns = [];
                    this.lstDuocPhamGrid = [];
                    this.urlGetDataGrid = "YeuCauLinhDuocPham/GetYeuCauDuocPhamBenhVienDataForGridAsync";
                    this.urlGetTotalPageGrid = "YeuCauLinhDuocPham/GetYeuCauDuocPhamBenhVienTotalPageForGridAsync";
                    this.urlGetDataGridChild = "YeuCauLinhDuocPham/GetBenhNhanTheoDuocPhamDataForGridAsync";
                    this.urlGetTotalPageGridChild = "YeuCauLinhDuocPham/GetBenhNhanTheoDuocPhamTotalPageForGridAsync";
                    this.groups = [{ field: 'Nhom' }];
                    this.sortChild = [{ field: 'STT', dir: 'asc' }];
                    this.hideDuyetbtn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.disabledNguoiTaoPhieu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.checkAll = null;
                }
                PhieuLinhThuocBuSharedComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__["DocumentType"].TaoYeuCauLinhBuDuocPham;
                    this.yeuCauLinhBuDuocPham = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["YeuCauLinhBuDuocPham"]();
                    var id = this.route.snapshot.params.id;
                    if (id !== undefined && id !== null) {
                        this.yeuCauLinhBuDuocPham.LaNguoiTaoPhieu = false;
                        this.getById(id);
                        this.phieuLinhId = id;
                    }
                    this.getCurrentUser();
                    this.gridColumns = [
                        { Field: 'CheckBox', Title: '', Width: 50, Sortable: false, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate, Hidden: (this.trangThaiVo != undefined && this.trangThaiVo != null && !(this.trangThaiVo.TrangThai == null)) },
                        { Field: 'STT', Title: 'STT', Width: 50, Sortable: false, Template: this.sttTemplate, Hidden: (this.trangThaiVo != undefined && this.trangThaiVo != null && this.trangThaiVo.TrangThai != null) },
                        { Field: "TenDuocPham", Title: "Tên dược phẩm", Width: 180, ShowTooltip: true, Sortable: true },
                        { Field: "HoatChat", Title: "Hoạt chất", Width: 180, ShowTooltip: true },
                        { Field: "HamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
                        { Field: "DuongDung", Title: "Đường dùng", Width: 100 },
                        // { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 60 },
                        { Field: "HangSanXuat", Title: "Hãng SX", Width: 100 },
                        { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
                        { Field: "SoLuongTon", Title: "SL Tồn", Width: 100, Template: this.slYeuCauTemplate, Hidden: (this.trangThaiVo != undefined && this.trangThaiVo != null && this.trangThaiVo.TrangThai == true) },
                        { Field: "SoLuongCanBu", Title: "SL cần bù", Width: 100 },
                        { Field: "SoLuongDaBu", Title: "SL đã bù", Width: 100 },
                        { Field: "SoLuongYeuCau", Title: "SL yêu cầu", Width: 80, Hidden: (this.trangThaiVo != undefined && this.trangThaiVo != null && this.trangThaiVo.TrangThai == true) },
                        { Field: "SLYeuCauLinhThucTe", Title: "SL lĩnh thực tế", Width: 130, Hidden: (this.trangThaiVo != undefined && this.trangThaiVo != null && this.trangThaiVo.TrangThai == true), Template: this.slYeuCauLinhThucTeTemplate },
                        { Field: "SoLuongDuocDuyet", Title: "SL được duyệt", Width: 100, Hidden: this.isCreate || this.trangThaiVo != undefined && this.trangThaiVo != null && (this.trangThaiVo.TrangThai == null || this.trangThaiVo.TrangThai == false) },
                    ];
                    this.gridChildColumns = [
                        { Field: "MaTN", Title: "Mã TN", Width: 120 },
                        { Field: "MaBN", Title: "Mã NB", Width: 120 },
                        { Field: "HoTen", Title: "Họ tên", Width: 180 },
                        { Field: "DVKham", Title: "DV Khám", Width: 150, ShowTooltip: true },
                        { Field: "BSKeToa", Title: "BS kê toa", Width: 80, ShowTooltip: true },
                        { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 100 },
                        { Field: "NgayKe", Title: "Ngày kê", Width: 100 },
                        { Field: "SL", Title: "SL cần bù", Width: 80 },
                        { Field: "SLDaBu", Title: "SL đã bù", Width: 80 },
                        { Field: "SLYeuCau", Title: "SL yêu cầu", Width: 130, Hidden: (this.trangThaiVo != undefined && this.trangThaiVo != null && this.trangThaiVo.TrangThai == true) },
                        { Field: "SLYeuCau", Title: "SL được duyệt", Width: 130, Hidden: this.isCreate || this.trangThaiVo != undefined && this.trangThaiVo != null && (this.trangThaiVo.TrangThai == null || this.trangThaiVo.TrangThai == false) },
                    ];
                    this.route.queryParams.subscribe(function (params) {
                        var khoLinhId = params['KhoLinhId'];
                        var khoBuId = params['KhoBuId'];
                        if (khoLinhId != undefined && khoBuId != undefined && khoLinhId > 0 && khoBuId > 0) {
                            _this.yeuCauLinhBuDuocPham.KhoXuatId = parseInt(khoLinhId);
                            _this.yeuCauLinhBuDuocPham.KhoNhapId = parseInt(khoBuId);
                            _this.linhTuKhoId = parseInt(khoLinhId);
                            _this.linhVeKhoId = parseInt(khoBuId);
                            _this.ganDieuKienLoadGridDuocPham(parseInt(khoLinhId), parseInt(khoBuId));
                        }
                    });
                };
                PhieuLinhThuocBuSharedComponent.prototype.getCurrentUser = function () {
                    var _this = this;
                    if (this.yeuCauLinhBuDuocPham.LaNguoiTaoPhieu == null) {
                        if (this.yeuCauLinhBuDuocPham.NgayYeuCau == null) {
                            this.yeuCauLinhBuDuocPham.NgayYeuCau = new Date();
                        }
                        if (this.yeuCauLinhBuDuocPham.NhanVienDuyetId == null) {
                            this.apiService.get("YeuCauLinhDuocPham/GetCurrentUser").subscribe(function (resultData) {
                                if (resultData != undefined && resultData != null) {
                                    _this.yeuCauLinhBuDuocPham.NhanVienYeuCauId = resultData.NhanVienYeuCauId;
                                    _this.yeuCauLinhBuDuocPham.HoTenNguoiYeuCau = resultData.HoTen;
                                }
                            });
                        }
                    }
                };
                PhieuLinhThuocBuSharedComponent.prototype.linhTuKhoChange = function (event) {
                    if (event != undefined && event != null) {
                        this.linhTuKhoId = event;
                    }
                    else {
                        this.linhTuKhoId = null;
                    }
                    this.ganDieuKienLoadGridDuocPham(this.linhTuKhoId, this.linhVeKhoId);
                };
                PhieuLinhThuocBuSharedComponent.prototype.linhVeKhoChange = function (event) {
                    var _this = this;
                    if (event != undefined && event != null) {
                        this.linhVeKhoId = event;
                        if (this.trangThaiVo != undefined
                            && this.trangThaiVo != null
                            && this.linhTuKhoId != null
                            && this.linhVeKhoPreviousId != null
                            && (this.trangThaiVo.TrangThai == null || this.trangThaiVo.TrangThai == false)
                            && event != this.linhVeKhoPreviousId) {
                            this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmComponent"], {
                                disableClose: false,
                                width: '400px',
                                data: { Title: "Xác nhận", Message: "Bạn có chắc muốn chọn lại Kho lĩnh không? (Việc chọn lại Kho sẽ xoá bỏ hết các DL Lĩnh hiện tại trên trang này)." }
                            }).afterClosed().subscribe(function (result) {
                                if (result == "Yes") {
                                    _this.yeuCauLinhBuDuocPham.KhoNhapId = event;
                                    _this.linhVeKhoId = event;
                                    _this.ganDieuKienLoadGridDuocPham(_this.linhTuKhoId, event);
                                }
                                else {
                                    _this.yeuCauLinhBuDuocPham.KhoNhapId = _this.linhVeKhoPreviousId;
                                    _this.linhVeKhoId = event;
                                    _this.ganDieuKienLoadGridDuocPham(_this.linhTuKhoId, _this.linhVeKhoPreviousId);
                                }
                            });
                        }
                        else {
                            this.yeuCauLinhBuDuocPham.KhoNhapId = event;
                            this.linhVeKhoId = event;
                            this.ganDieuKienLoadGridDuocPham(this.linhTuKhoId, event);
                        }
                    }
                    else {
                        this.ganDieuKienLoadGridDuocPham(this.linhTuKhoId, event);
                        this.linhVeKhoId = null;
                    }
                };
                PhieuLinhThuocBuSharedComponent.prototype.ganDieuKienLoadGridDuocPham = function (linhTuKhoId, linhVeKhoId) {
                    if (this.trangThaiVo != undefined) {
                        this.yeuCauLinhBuDuocPhamSearch.TrangThai = this.trangThaiVo.TrangThai;
                        this.trangThai = this.trangThaiVo.TrangThai;
                    }
                    // console.log("TrangThai: ", this.trangThaiVo)
                    this.yeuCauLinhBuDuocPhamSearch.LinhTuKhoId = linhTuKhoId;
                    this.yeuCauLinhBuDuocPhamSearch.LinhVeKhoId = linhVeKhoId;
                    this.yeuCauLinhBuDuocPhamSearch.IsCreate = this.isCreate;
                    this.yeuCauLinhBuDuocPhamSearch.YeuCauLinhDuocPhamId = this.phieuLinhId;
                    this.dieuKienLoadGridDuocPham = JSON.stringify(this.yeuCauLinhBuDuocPhamSearch);
                    if (this.yeuCauLinhBuDuocPhamSearch.TrangThai == null || (this.trangThaiVo != undefined && this.trangThaiVo.TrangThai == true)) {
                        this.gridDuocPham._additionalSearchString = this.dieuKienLoadGridDuocPham;
                        this.gridDuocPham.search();
                    }
                    if (this.trangThaiVo != undefined && this.trangThaiVo.TrangThai == false) {
                        this.gridDuocPhamTuChoi._additionalSearchString = this.dieuKienLoadGridDuocPham;
                        this.gridDuocPhamTuChoi.search();
                    }
                };
                PhieuLinhThuocBuSharedComponent.prototype.onDataBoundGrid = function (event) {
                    var _this = this;
                    if (event != undefined && event != null) {
                        if (this.isCreate) {
                            this.yeuCauLinhBuDuocPham.YeuCauDuocPhamBenhViens = [];
                            this.yeuCauLinhBuDuocPham.YeuCauLinhDuocPhamChiTiets = [];
                            event.Data.forEach(function (element) {
                                var yeuCauDuocPhamBenhVien = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["YeuCauDuocPhamBenhVienViewModel"]();
                                yeuCauDuocPhamBenhVien.DuocPhamBenhVienId = element.DuocPhamBenhVienId;
                                yeuCauDuocPhamBenhVien.LaDuocPhamBHYT = element.LaBHYT;
                                yeuCauDuocPhamBenhVien.SoLuongCanBu = element.SoLuongCanBu;
                                yeuCauDuocPhamBenhVien.SoLuongTon = element.SoLuongTon;
                                yeuCauDuocPhamBenhVien.KhoLinhTuId = _this.linhTuKhoId;
                                yeuCauDuocPhamBenhVien.KhoLinhVeId = _this.linhVeKhoId;
                                yeuCauDuocPhamBenhVien.SoLuongYeuCau = element.SoLuongYeuCau;
                                yeuCauDuocPhamBenhVien.SoLuongDaBu = element.SoLuongDaBu;
                                yeuCauDuocPhamBenhVien.SLYeuCauLinhThucTe = element.SLYeuCauLinhThucTe;
                                yeuCauDuocPhamBenhVien.SLYeuCauLinhThucTeMax = element.SLYeuCauLinhThucTeMax;
                                _this.yeuCauLinhBuDuocPham.YeuCauDuocPhamBenhViens.push(yeuCauDuocPhamBenhVien);
                            });
                            // console.log("data: ", this.yeuCauLinhBuDuocPham.YeuCauDuocPhamBenhViens)
                        }
                        else {
                            this.yeuCauLinhBuDuocPham.YeuCauDuocPhamBenhViens = [];
                            this.yeuCauLinhBuDuocPham.YeuCauLinhDuocPhamChiTiets = [];
                            event.Data.forEach(function (element) {
                                var yeuCauDuocPhamBenhVien = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["YeuCauDuocPhamBenhVienViewModel"]();
                                yeuCauDuocPhamBenhVien.DuocPhamBenhVienId = element.DuocPhamBenhVienId;
                                yeuCauDuocPhamBenhVien.LaDuocPhamBHYT = element.LaBHYT;
                                yeuCauDuocPhamBenhVien.SoLuongCanBu = element.SoLuongCanBu;
                                yeuCauDuocPhamBenhVien.SoLuongTon = element.SoLuongTon;
                                yeuCauDuocPhamBenhVien.KhoLinhTuId = _this.yeuCauLinhBuDuocPham.KhoXuatId;
                                yeuCauDuocPhamBenhVien.KhoLinhVeId = _this.yeuCauLinhBuDuocPham.KhoNhapId;
                                yeuCauDuocPhamBenhVien.SoLuongYeuCau = element.SoLuongYeuCau;
                                yeuCauDuocPhamBenhVien.SoLuongDaBu = element.SoLuongDaBu;
                                yeuCauDuocPhamBenhVien.SLYeuCauLinhThucTe = element.SLYeuCauLinhThucTe;
                                yeuCauDuocPhamBenhVien.SLYeuCauLinhThucTeMax = element.SLYeuCauLinhThucTeMax;
                                _this.yeuCauLinhBuDuocPham.YeuCauDuocPhamBenhViens.push(yeuCauDuocPhamBenhVien);
                            });
                        }
                        if (event.Data.length > 0 && (this.yeuCauLinhBuDuocPham.KhoXuatId != null || this.yeuCauLinhBuDuocPham.KhoXuatId != undefined)
                            && (this.yeuCauLinhBuDuocPham.KhoNhapId != null || this.yeuCauLinhBuDuocPham.KhoNhapId != undefined)) {
                            this.hideDuyetbtn.emit(true);
                        }
                        else {
                            this.hideDuyetbtn.emit(false);
                        }
                    }
                    else {
                        this.yeuCauLinhBuDuocPham.YeuCauDuocPhamBenhViens = [];
                    }
                };
                PhieuLinhThuocBuSharedComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang tải dữ liệu..." },
                    });
                };
                PhieuLinhThuocBuSharedComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                PhieuLinhThuocBuSharedComponent.prototype.getById = function (id) {
                    var _this = this;
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_8__["SecurityOperation"].View)) {
                        self.loadingPage();
                        self.apiService.get("YeuCauLinhDuocPham/GetYeuCauLinhDuocPhamBuTao?id=" + id).subscribe(function (resultData) {
                            if (resultData != undefined && resultData != null) {
                                self.closePopupLoadingData();
                                // console.log("data: ", resultData)
                                _this.yeuCauLinhBuDuocPham = resultData;
                                if (_this.yeuCauLinhBuDuocPham.HoTenNguoiYeuCau == null) {
                                    _this.yeuCauLinhBuDuocPham.HoTenNguoiYeuCau = resultData.TenNhanVienYeuCau;
                                }
                                //console.log("yeuCauLinhBuDuocPham: ", this.yeuCauLinhBuDuocPham)
                                if (_this.isCreate) {
                                    _this.linhVeKhoPreviousId = _this.yeuCauLinhBuDuocPham.KhoNhapId;
                                }
                                if (_this.yeuCauLinhBuDuocPham.LaNguoiTaoPhieu) {
                                    _this.disabledNguoiTaoPhieu.emit(true);
                                }
                                else {
                                    _this.disabledNguoiTaoPhieu.emit(false);
                                }
                                _this.linhTuKhoId = _this.yeuCauLinhBuDuocPham.KhoXuatId;
                                _this.linhVeKhoId = _this.yeuCauLinhBuDuocPham.KhoNhapId;
                                if (_this.yeuCauLinhBuDuocPham.DuocDuyet == null || _this.yeuCauLinhBuDuocPham.DuocDuyet == false) {
                                    _this.isCreate = false;
                                }
                                _this.ganDieuKienLoadGridDuocPham(_this.yeuCauLinhBuDuocPham.KhoXuatId, _this.yeuCauLinhBuDuocPham.KhoNhapId);
                            }
                        }, function (err) {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                            self.closePopupLoadingData();
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                PhieuLinhThuocBuSharedComponent.prototype.ganSLThucTeChange = function (soLuong, duocPhamBenhVienId) {
                    if (soLuong != undefined && soLuong != null) {
                        this.yeuCauLinhBuDuocPham.YeuCauDuocPhamBenhViens.filter(function (x) { return x.DuocPhamBenhVienId == duocPhamBenhVienId; }).forEach(function (element) {
                            element.SLYeuCauLinhThucTe = soLuong;
                        });
                    }
                    else {
                        this.yeuCauLinhBuDuocPham.YeuCauDuocPhamBenhViens.filter(function (x) { return x.DuocPhamBenhVienId == duocPhamBenhVienId; }).forEach(function (element) {
                            element.SLYeuCauLinhThucTe = null;
                        });
                    }
                };
                PhieuLinhThuocBuSharedComponent.prototype.checkBoxDichVu = function (dataItem, event) {
                    var index = this.yeuCauLinhBuDuocPham.YeuCauDuocPhamBenhViens.findIndex(function (z) { return z.DuocPhamBenhVienId == dataItem.DuocPhamBenhVienId; });
                    this.yeuCauLinhBuDuocPham.YeuCauDuocPhamBenhViens[index].CheckBox = event;
                    var lstDataCurrent = this.gridDuocPham.getAllDataFromDatasource();
                    if (lstDataCurrent.every(function (z) { return z.CheckBox; })) {
                        this.checkAll = true;
                    }
                    else {
                        this.checkAll = false;
                    }
                };
                PhieuLinhThuocBuSharedComponent.prototype.checkBoxAllChange = function (event) {
                    var _this = this;
                    var lstDataCurrent = this.gridDuocPham.getAllDataFromDatasource();
                    if (lstDataCurrent.length > 0) {
                        lstDataCurrent.forEach(function (element) {
                            element.CheckBox = event;
                            var index = _this.yeuCauLinhBuDuocPham.YeuCauDuocPhamBenhViens.findIndex(function (z) { return z.DuocPhamBenhVienId == element.DuocPhamBenhVienId; });
                            _this.yeuCauLinhBuDuocPham.YeuCauDuocPhamBenhViens[index].CheckBox = event;
                        });
                    }
                };
                PhieuLinhThuocBuSharedComponent.prototype.thoiDiemTNChange = function () {
                    if (this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhTuFormat != null) {
                        this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhTu = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhTuFormat, "dd/mm/yyyy");
                    }
                    else {
                        this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhTu = null;
                    }
                    if (this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhDenFormat != null) {
                        this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhDen = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhDenFormat, "dd/mm/yyyy");
                    }
                    else {
                        this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhDen = null;
                    }
                    this.checkAll = false;
                    var queryString = JSON.stringify(this.yeuCauLinhBuDuocPhamSearch);
                    this.gridDuocPham._additionalSearchString = queryString;
                    this.gridDuocPham.search();
                };
                PhieuLinhThuocBuSharedComponent.prototype.getSharedData = function () {
                    this.yeuCauLinhBuDuocPham.ThoiDiemChiDinhTu = this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhTu;
                    this.yeuCauLinhBuDuocPham.ThoiDiemChiDinhDen = this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhDen;
                    return this.yeuCauLinhBuDuocPham;
                };
                return PhieuLinhThuocBuSharedComponent;
            }());
            PhieuLinhThuocBuSharedComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDuocPham', { static: true })
            ], PhieuLinhThuocBuSharedComponent.prototype, "gridDuocPham", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDuocPhamTuChoi', { static: true })
            ], PhieuLinhThuocBuSharedComponent.prototype, "gridDuocPhamTuChoi", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slYeuCauTemplate', { static: true })
            ], PhieuLinhThuocBuSharedComponent.prototype, "slYeuCauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slYeuCauLinhThucTeTemplate', { static: true })
            ], PhieuLinhThuocBuSharedComponent.prototype, "slYeuCauLinhThucTeTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], PhieuLinhThuocBuSharedComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkBoxTemplate', { static: true })
            ], PhieuLinhThuocBuSharedComponent.prototype, "checkBoxTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkBoxHeaderTemplate', { static: true })
            ], PhieuLinhThuocBuSharedComponent.prototype, "checkBoxHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
            ], PhieuLinhThuocBuSharedComponent.prototype, "sttTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PhieuLinhThuocBuSharedComponent.prototype, "isCreate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PhieuLinhThuocBuSharedComponent.prototype, "validationErrorsLinhBu", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PhieuLinhThuocBuSharedComponent.prototype, "trangThaiVo", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], PhieuLinhThuocBuSharedComponent.prototype, "hideDuyetbtn", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], PhieuLinhThuocBuSharedComponent.prototype, "disabledNguoiTaoPhieu", void 0);
            PhieuLinhThuocBuSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-phieu-linh-thuoc-bu-shared',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-linh-thuoc-bu-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-shared/phieu-linh-thuoc-bu-shared.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-linh-thuoc-bu-shared.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-shared/phieu-linh-thuoc-bu-shared.component.scss")).default]
                })
            ], PhieuLinhThuocBuSharedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-gui-lai/phieu-linh-thuoc-thuong-gui-lai.component.scss": 
        /*!****************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-gui-lai/phieu-linh-thuoc-thuong-gui-lai.component.scss ***!
          \****************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".status-yeu-cau-linh {\n  margin-left: auto;\n}\n\n.status-yeu-cau-linh.ycl-cho-duyet {\n  color: orange;\n}\n\n.status-yeu-cau-linh.ycl-da-duyet {\n  color: green;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veWV1LWNhdS1saW5oLXRodW9jL3BoaWV1LWxpbmgtdGh1b2MtdGh1b25nLWd1aS1sYWkvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXGR1b2MtcGhhbVxceWV1LWNhdS1saW5oLXRodW9jXFxwaGlldS1saW5oLXRodW9jLXRodW9uZy1ndWktbGFpXFxwaGlldS1saW5oLXRodW9jLXRodW9uZy1ndWktbGFpLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS95ZXUtY2F1LWxpbmgtdGh1b2MvcGhpZXUtbGluaC10aHVvYy10aHVvbmctZ3VpLWxhaS9waGlldS1saW5oLXRodW9jLXRodW9uZy1ndWktbGFpLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veWV1LWNhdS1saW5oLXRodW9jL3BoaWV1LWxpbmgtdGh1b2MtdGh1b25nLWd1aS1sYWkvcGhpZXUtbGluaC10aHVvYy10aHVvbmctZ3VpLWxhaS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0dXMteWV1LWNhdS1saW5oIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1jaG8tZHV5ZXQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtZGEtZHV5ZXQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59IiwiLnN0YXR1cy15ZXUtY2F1LWxpbmgge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWNoby1kdXlldCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1kYS1kdXlldCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-gui-lai/phieu-linh-thuoc-thuong-gui-lai.component.ts": 
        /*!**************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-gui-lai/phieu-linh-thuoc-thuong-gui-lai.component.ts ***!
          \**************************************************************************************************************************************************/
        /*! exports provided: PhieuLinhThuocThuongGuiLaiComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhThuocThuongGuiLaiComponent", function () { return PhieuLinhThuocThuongGuiLaiComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _phieu_linh_thuoc_thuong_shared_phieu_linh_thuoc_thuong_shared_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../phieu-linh-thuoc-thuong-shared/phieu-linh-thuoc-thuong-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-shared/phieu-linh-thuoc-thuong-shared.component.ts");
            /* harmony import */ var _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../yeu-cau-linh-thuoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/yeu-cau-linh-thuoc.model.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var _phieu_linh_thuoc_thuong_popup_phieu_linh_thuoc_thuong_popup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../phieu-linh-thuoc-thuong-popup/phieu-linh-thuoc-thuong-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-popup/phieu-linh-thuoc-thuong-popup.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _vat_tu_yeu_cau_linh_vat_tu_yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model.ts");
            var PhieuLinhThuocThuongGuiLaiComponent = /** @class */ (function () {
                function PhieuLinhThuocThuongGuiLaiComponent(dialog, route, notificationService, authService, apiService, router, ref) {
                    this.dialog = dialog;
                    this.route = route;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.apiService = apiService;
                    this.router = router;
                    this.ref = ref;
                    this.hostingName = null;
                    this.loading = false;
                    this.trangThaiVo = new _vat_tu_yeu_cau_linh_vat_tu_yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_18__["TrangThaiTaoPhieuLinh"]();
                    this.isHideDuyet = false;
                    this.isDisabledNguoiTaoPhieu = false;
                    this.phieuLinhId = null;
                    this.inPhieuLinhThuong = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_14__["PhieuLinhThuocThuong"]();
                    this.yeuCauLinhDuocPham = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_14__["YeuCauLinhDuocPham"]();
                }
                PhieuLinhThuocThuongGuiLaiComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].TaoYeuCauLinhThuongDuocPham;
                    this.route
                        .queryParams
                        .subscribe(function (v) {
                        _this.trangThaiDanhSach = v;
                    });
                    var id = this.route.snapshot.params.id;
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
                };
                PhieuLinhThuocThuongGuiLaiComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_17__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang lưu dữ liệu..." },
                    });
                };
                PhieuLinhThuocThuongGuiLaiComponent.prototype.loadingPageDaDuyet = function () {
                    this.popupLoadingDataDaDuyet = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_17__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang tải dữ liệu..." },
                    });
                };
                PhieuLinhThuocThuongGuiLaiComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                PhieuLinhThuocThuongGuiLaiComponent.prototype.closePopupLoadingDataDaDuyet = function () {
                    if (this.popupLoadingDataDaDuyet != undefined && this.popupLoadingDataDaDuyet != null) {
                        this.popupLoadingDataDaDuyet.close();
                    }
                };
                PhieuLinhThuocThuongGuiLaiComponent.prototype.luuPhieuLinhThuong = function () {
                    var self = this;
                    self.yeuCauLinhDuocPham = self.shared.getSharedData();
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == false) { //Từ chối duyệt
                        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmComponent"], {
                            disableClose: false,
                            width: "500px",
                            data: {
                                Title: "Xác nhận",
                                Message: "Bạn có muốn lưu phiếu lĩnh dược phẩm này không ?",
                            },
                        }).afterClosed().subscribe(function (res) {
                            if (res == "Yes") {
                                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Update)) {
                                    self.loadingPage();
                                    self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets = self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.sort(function (a, b) { return (a.STT > b.STT) ? 1 : -1; });
                                    self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.forEach(function (element) {
                                        element.DuocDuyet = false;
                                    });
                                    self.yeuCauLinhDuocPham.IsLuu = true;
                                    self.apiService.post("YeuCauLinhDuocPham/GuiLaiPhieuLinhThuong", self.yeuCauLinhDuocPham).subscribe(function (result) {
                                        if (result != undefined && result != null) {
                                            self.yeuCauLinhDuocPham.LastModified = result.LastModified;
                                            self.yeuCauLinhDuocPham.IsLuu = false;
                                            self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                            self.closePopupLoadingData();
                                        }
                                    }, function (err) {
                                        self.validationErrors = err.ValidationErrors;
                                        if (err.Message != "Validation Failed") {
                                            self.notificationService.showError(err.Message);
                                        }
                                        self.closePopupLoadingData();
                                    });
                                }
                                else {
                                    self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
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
                                Message: "Bạn có muốn lưu phiếu lĩnh dược phẩm này không ?",
                            },
                        }).afterClosed().subscribe(function (res) {
                            if (res == "Yes") {
                                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Update)) {
                                    self.loadingPage();
                                    self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets = self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.sort(function (a, b) { return (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1; });
                                    self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.forEach(function (element) {
                                        element.DuocDuyet = null;
                                    });
                                    self.yeuCauLinhDuocPham.DuocDuyet = null;
                                    self.apiService.post("YeuCauLinhDuocPham/GuiLaiPhieuLinhThuong", self.yeuCauLinhDuocPham).subscribe(function (result) {
                                        if (result != undefined && result != null) {
                                            self.yeuCauLinhDuocPham.LastModified = result.LastModified;
                                            self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                            self.closePopupLoadingData();
                                        }
                                    }, function (err) {
                                        self.validationErrors = err.ValidationErrors;
                                        if (err.Message != "Validation Failed") {
                                            self.notificationService.showError(err.Message);
                                        }
                                        self.closePopupLoadingData();
                                    });
                                }
                                else {
                                    self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
                                }
                            }
                        });
                    }
                };
                PhieuLinhThuocThuongGuiLaiComponent.prototype.guiPhieuLinhThuong = function () {
                    var _this = this;
                    var self = this;
                    self.yeuCauLinhDuocPham = self.shared.getSharedData();
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == false) { //Từ chối duyệt
                        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmComponent"], {
                            disableClose: false,
                            width: "500px",
                            data: {
                                Title: "Xác nhận",
                                Message: "Bạn có muốn gửi phiếu lĩnh dược phẩm này không ?",
                            },
                        }).afterClosed().subscribe(function (res) {
                            if (res == "Yes") {
                                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Update)) {
                                    self.yeuCauLinhDuocPham.DaGui = true;
                                    self.loadingPage();
                                    self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets = self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.sort(function (a, b) { return (a.STT > b.STT) ? 1 : -1; });
                                    self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.forEach(function (element) {
                                        element.DuocDuyet = false;
                                    });
                                    self.yeuCauLinhDuocPham.IsLuu = true;
                                    self.apiService.post("YeuCauLinhDuocPham/GuiLaiPhieuLinhThuong", self.yeuCauLinhDuocPham).subscribe(function (result) {
                                        if (result != undefined && result != null) {
                                            self.yeuCauLinhDuocPham.LastModified = result.LastModified;
                                            self.trangThaiVo.EnumTrangThaiPhieuLinh = result.enumTrangThaiPhieuLinh;
                                            self.trangThaiVo.Ten = result.ten;
                                            self.yeuCauLinhDuocPham.IsLuu = false;
                                            self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                            self.closePopupLoadingData();
                                        }
                                    }, function (err) {
                                        self.validationErrors = err.ValidationErrors;
                                        if (err.Message != "Validation Failed") {
                                            self.notificationService.showError(err.Message);
                                        }
                                        self.closePopupLoadingData();
                                    });
                                }
                                else {
                                    self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
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
                                Message: "Bạn có muốn gửi phiếu lĩnh dược phẩm này không ?",
                            },
                        }).afterClosed().subscribe(function (res) {
                            if (res == "Yes") {
                                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Update)) {
                                    self.yeuCauLinhDuocPham.DaGui = true;
                                    self.loadingPage();
                                    self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets = self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.sort(function (a, b) { return (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1; });
                                    self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.forEach(function (element) {
                                        element.DuocDuyet = null;
                                    });
                                    self.yeuCauLinhDuocPham.DuocDuyet = null;
                                    self.apiService.post("YeuCauLinhDuocPham/GuiLaiPhieuLinhThuong", self.yeuCauLinhDuocPham).subscribe(function (result) {
                                        if (result != undefined && result != null) {
                                            self.yeuCauLinhDuocPham.LastModified = result.LastModified;
                                            self.trangThaiVo.EnumTrangThaiPhieuLinh = result.enumTrangThaiPhieuLinh;
                                            self.trangThaiVo.Ten = result.ten;
                                            self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                            self.closePopupLoadingData();
                                            self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmComponent"], {
                                                disableClose: false,
                                                width: "500px",
                                                data: {
                                                    Title: "Xác nhận",
                                                    Message: "Bạn có muốn in phiếu lĩnh dược phẩm này không ?",
                                                },
                                            }).afterClosed().subscribe(function (res) {
                                                if (res == "Yes") {
                                                    self.loadingPage();
                                                    self.inPhieuLinhThuong.Header = true;
                                                    self.inPhieuLinhThuong.YeuCauLinhDuocPhamId = result.Id;
                                                    self.inPhieuLinhThuong.LoaiPhieuLinh = 1;
                                                    self.inPhieuLinhThuong.TrangThai = _this.trangThaiVo.TrangThai;
                                                    self.apiService.post("YeuCauLinhDuocPham/InPhieuLinhThuongDuocPham", self.inPhieuLinhThuong).subscribe(function (resData) {
                                                        if (resData != undefined && resData != null) {
                                                            self.inPhieuLinhThuong.Header = false;
                                                            self.closePopupLoadingData();
                                                            self.dialog.open(_phieu_linh_thuoc_thuong_popup_phieu_linh_thuoc_thuong_popup_component__WEBPACK_IMPORTED_MODULE_16__["PhieuLinhThuocThuongPopupComponent"], {
                                                                disableClose: false,
                                                                width: '1200px',
                                                                data: resData,
                                                            }).afterClosed().subscribe(function () {
                                                                self.closePopupLoadingData();
                                                                _this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
                                                            });
                                                        }
                                                    }, function (err) {
                                                        self.validationErrors = err.ValidationErrors;
                                                        if (err.Message != "Validation Failed") {
                                                            self.notificationService.showError(err.Message);
                                                        }
                                                        self.closePopupLoadingData();
                                                    });
                                                }
                                                else {
                                                    _this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
                                                }
                                            });
                                        }
                                    }, function (err) {
                                        self.validationErrors = err.ValidationErrors;
                                        if (err.Message != "Validation Failed") {
                                            self.notificationService.showError(err.Message);
                                        }
                                        self.closePopupLoadingData();
                                    });
                                }
                                else {
                                    self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
                                }
                            }
                        });
                    }
                };
                PhieuLinhThuocThuongGuiLaiComponent.prototype.luuVaGuiDuyetLai = function () {
                    var _this = this;
                    var self = this;
                    self.yeuCauLinhDuocPham = self.shared.getSharedData();
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn gửi lại phê duyệt cho lần lĩnh dược phẩm này không?" }
                    }).afterClosed().subscribe(function (result) {
                        if (result === 'Yes') {
                            if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Update)) {
                                self.loadingPage();
                                self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets = self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.sort(function (a, b) { return (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1; });
                                self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.forEach(function (element) {
                                    element.DuocDuyet = false;
                                });
                                self.yeuCauLinhDuocPham.DuocDuyet = false;
                                self.apiService.post("YeuCauLinhDuocPham/GuiLaiPhieuLinhThuong", self.yeuCauLinhDuocPham).subscribe(function (result) {
                                    if (result != undefined && result != null) {
                                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                        self.closePopupLoadingData();
                                        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmComponent"], {
                                            disableClose: false,
                                            width: "500px",
                                            data: {
                                                Title: "Xác nhận",
                                                Message: "Bạn có muốn in phiếu lĩnh dược phẩm này không ?",
                                            },
                                        }).afterClosed().subscribe(function (res) {
                                            if (res == "Yes") {
                                                self.loadingPage();
                                                self.inPhieuLinhThuong.Header = true;
                                                self.inPhieuLinhThuong.YeuCauLinhDuocPhamId = result.Id;
                                                self.inPhieuLinhThuong.LoaiPhieuLinh = 1;
                                                self.inPhieuLinhThuong.TrangThai = _this.trangThaiVo.TrangThai;
                                                self.apiService.post("YeuCauLinhDuocPham/InPhieuLinhThuongDuocPham", self.inPhieuLinhThuong).subscribe(function (resData) {
                                                    if (resData != undefined && resData != null) {
                                                        self.inPhieuLinhThuong.Header = false;
                                                        self.closePopupLoadingData();
                                                        self.dialog.open(_phieu_linh_thuoc_thuong_popup_phieu_linh_thuoc_thuong_popup_component__WEBPACK_IMPORTED_MODULE_16__["PhieuLinhThuocThuongPopupComponent"], {
                                                            disableClose: false,
                                                            width: '1200px',
                                                            data: resData,
                                                        }).afterClosed().subscribe(function () {
                                                            self.closePopupLoadingData();
                                                            _this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
                                                        });
                                                    }
                                                }, function (err) {
                                                    self.validationErrors = err.ValidationErrors;
                                                    if (err.Message != "Validation Failed") {
                                                        self.notificationService.showError(err.Message);
                                                    }
                                                    self.closePopupLoadingData();
                                                });
                                            }
                                            else {
                                                _this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
                                            }
                                        });
                                    }
                                }, function (err) {
                                    self.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        self.notificationService.showError(err.Message);
                                    }
                                    self.closePopupLoadingData();
                                });
                            }
                        }
                    });
                };
                PhieuLinhThuocThuongGuiLaiComponent.prototype.cancel = function () {
                    var data;
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
                    this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc'], { queryParams: { holdQuery: data } });
                };
                PhieuLinhThuocThuongGuiLaiComponent.prototype.inPhieu = function () {
                    var _this = this;
                    var self = this;
                    if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == true) { //Đã duyệt
                        self.loadingPageDaDuyet();
                        self.inPhieuLinhThuong.Header = true;
                        self.inPhieuLinhThuong.YeuCauLinhDuocPhamId = this.phieuLinhId;
                        self.inPhieuLinhThuong.LoaiPhieuLinh = 1;
                        self.inPhieuLinhThuong.TrangThai = this.trangThaiVo.TrangThai;
                        self.apiService.post("YeuCauLinhDuocPham/InPhieuLinhThuongDuocPham", self.inPhieuLinhThuong).subscribe(function (resData) {
                            if (resData != undefined && resData != null) {
                                self.inPhieuLinhThuong.Header = false;
                                self.closePopupLoadingDataDaDuyet();
                                self.dialog.open(_phieu_linh_thuoc_thuong_popup_phieu_linh_thuoc_thuong_popup_component__WEBPACK_IMPORTED_MODULE_16__["PhieuLinhThuocThuongPopupComponent"], {
                                    disableClose: false,
                                    width: '1200px',
                                    data: resData,
                                }).afterClosed().subscribe(function () {
                                    self.closePopupLoadingDataDaDuyet();
                                });
                            }
                        }, function (err) {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                            self.closePopupLoadingDataDaDuyet();
                        });
                    }
                    else {
                        self.yeuCauLinhDuocPham = self.shared.getSharedData();
                        self.validationErrors = [];
                        self.ref.detectChanges();
                        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Update)) {
                            // self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets = self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.sort((a, b) => (a.Nhom > b.Nhom) ? 1 : -1)
                            self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets = self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.sort(function (a, b) { return (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1; });
                            if (self.trangThaiVo.TrangThai == false) {
                                self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.forEach(function (element) {
                                    element.DuocDuyet = false;
                                });
                            }
                            self.yeuCauLinhDuocPham.IsLuu = true;
                            self.apiService.post("YeuCauLinhDuocPham/GuiLaiPhieuLinhThuong", self.yeuCauLinhDuocPham).subscribe(function (result) {
                                if (result != undefined && result != null) {
                                    self.loadingPageDaDuyet();
                                    self.yeuCauLinhDuocPham.LastModified = result.LastModified;
                                    self.yeuCauLinhDuocPham.IsLuu = false;
                                    self.inPhieuLinhThuong.Header = true;
                                    self.inPhieuLinhThuong.YeuCauLinhDuocPhamId = result.Id;
                                    self.inPhieuLinhThuong.LoaiPhieuLinh = 1;
                                    self.inPhieuLinhThuong.TrangThai = _this.trangThaiVo.TrangThai;
                                    self.apiService.post("YeuCauLinhDuocPham/InPhieuLinhThuongDuocPham", self.inPhieuLinhThuong).subscribe(function (resData) {
                                        if (resData != undefined && resData != null) {
                                            self.inPhieuLinhThuong.Header = false;
                                            self.closePopupLoadingDataDaDuyet();
                                            self.dialog.open(_phieu_linh_thuoc_thuong_popup_phieu_linh_thuoc_thuong_popup_component__WEBPACK_IMPORTED_MODULE_16__["PhieuLinhThuocThuongPopupComponent"], {
                                                disableClose: false,
                                                width: '1200px',
                                                data: resData,
                                            }).afterClosed().subscribe(function () {
                                                self.closePopupLoadingDataDaDuyet();
                                            });
                                        }
                                    }, function (err) {
                                        self.validationErrors = err.ValidationErrors;
                                        if (err.Message != "Validation Failed") {
                                            self.notificationService.showError(err.Message);
                                        }
                                        self.closePopupLoadingDataDaDuyet();
                                    });
                                }
                                else {
                                    self.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
                                }
                            }, function (err) {
                                self.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    self.notificationService.showError(err.Message);
                                }
                                self.closePopupLoadingDataDaDuyet();
                            });
                        }
                        else {
                            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
                        }
                    }
                };
                PhieuLinhThuocThuongGuiLaiComponent.prototype.GetTrangThaiPhieuLinh = function (id) {
                    var _this = this;
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].View)) {
                        self.apiService.get("YeuCauLinhDuocPham/GetTrangThaiPhieuLinh?phieuLinhId=" + id).subscribe(function (result) {
                            _this.trangThaiVo = result;
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                PhieuLinhThuocThuongGuiLaiComponent.prototype.keyEvent = function (event) {
                    if (event.keyCode == 27 && !event.ctrlKey) {
                        //esc
                        this.cancel();
                        event.preventDefault();
                    }
                };
                PhieuLinhThuocThuongGuiLaiComponent.prototype.anHienButtonDuyet = function (event) {
                    if (event) {
                        this.isHideDuyet = true;
                    }
                    else {
                        this.isHideDuyet = false;
                    }
                };
                PhieuLinhThuocThuongGuiLaiComponent.prototype.disableNguoiTaoPhieu = function (event) {
                    if (event) {
                        this.isDisabledNguoiTaoPhieu = true;
                    }
                    else {
                        this.isDisabledNguoiTaoPhieu = false;
                    }
                };
                return PhieuLinhThuocThuongGuiLaiComponent;
            }());
            PhieuLinhThuocThuongGuiLaiComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('temp', { read: _phieu_linh_thuoc_thuong_shared_phieu_linh_thuoc_thuong_shared_component__WEBPACK_IMPORTED_MODULE_13__["PhieuLinhThuocThuongSharedComponent"], static: false })
            ], PhieuLinhThuocThuongGuiLaiComponent.prototype, "shared", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
            ], PhieuLinhThuocThuongGuiLaiComponent.prototype, "keyEvent", null);
            PhieuLinhThuocThuongGuiLaiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-phieu-linh-thuoc-thuong-gui-lai',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-linh-thuoc-thuong-gui-lai.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-gui-lai/phieu-linh-thuoc-thuong-gui-lai.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-linh-thuoc-thuong-gui-lai.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-gui-lai/phieu-linh-thuoc-thuong-gui-lai.component.scss")).default]
                })
            ], PhieuLinhThuocThuongGuiLaiComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-popup/phieu-linh-thuoc-thuong-popup.component.scss": 
        /*!************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-popup/phieu-linh-thuoc-thuong-popup.component.scss ***!
          \************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veWV1LWNhdS1saW5oLXRodW9jL3BoaWV1LWxpbmgtdGh1b2MtdGh1b25nLXBvcHVwL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFxkdW9jLXBoYW1cXHlldS1jYXUtbGluaC10aHVvY1xccGhpZXUtbGluaC10aHVvYy10aHVvbmctcG9wdXBcXHBoaWV1LWxpbmgtdGh1b2MtdGh1b25nLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS95ZXUtY2F1LWxpbmgtdGh1b2MvcGhpZXUtbGluaC10aHVvYy10aHVvbmctcG9wdXAvcGhpZXUtbGluaC10aHVvYy10aHVvbmctcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veWV1LWNhdS1saW5oLXRodW9jL3BoaWV1LWxpbmgtdGh1b2MtdGh1b25nLXBvcHVwL3BoaWV1LWxpbmgtdGh1b2MtdGh1b25nLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59IiwiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-popup/phieu-linh-thuoc-thuong-popup.component.ts": 
        /*!**********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-popup/phieu-linh-thuoc-thuong-popup.component.ts ***!
          \**********************************************************************************************************************************************/
        /*! exports provided: PhieuLinhThuocThuongPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhThuocThuongPopupComponent", function () { return PhieuLinhThuocThuongPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var PhieuLinhThuocThuongPopupComponent = /** @class */ (function () {
                function PhieuLinhThuocThuongPopupComponent(dialog, sanitizer, dialogRef, data) {
                    this.dialog = dialog;
                    this.sanitizer = sanitizer;
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.src = "";
                }
                PhieuLinhThuocThuongPopupComponent.prototype.ngOnInit = function () {
                    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
                };
                PhieuLinhThuocThuongPopupComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                // close() {
                //   this.dialog.closeAll();
                // }
                PhieuLinhThuocThuongPopupComponent.prototype.getSharedPrintForm = function () {
                    //   let source = this.data.replace("<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>PHIẾU LĨNH THUỐC</th></p>", "");
                    //   return new Promise(resolve => {
                    //     resolve(source);
                    //     //this.close();
                    //   });
                    // }
                    //let source = this.data.replace("<div class=\'wrap\'><div class=\'content\'>PHIẾU LĨNH THUỐC</div></div>", "");
                    var dataReplaceemplateHeaderGayNghien = "";
                    var templateHeaderGayNghien = '<div class=\'wrap\'><div class=\'content\'>PHIẾU LĨNH DƯỢC PHẨM</div></div>';
                    dataReplaceemplateHeaderGayNghien = this.replaceAll(this.data, templateHeaderGayNghien, '');
                    return new Promise(function (resolve) {
                        resolve(dataReplaceemplateHeaderGayNghien);
                    });
                };
                PhieuLinhThuocThuongPopupComponent.prototype.replaceAll = function (str, find, replace) {
                    return str.replace(new RegExp(find, "g"), replace);
                };
                return PhieuLinhThuocThuongPopupComponent;
            }());
            PhieuLinhThuocThuongPopupComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            PhieuLinhThuocThuongPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-phieu-linh-thuoc-thuong-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-linh-thuoc-thuong-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-popup/phieu-linh-thuoc-thuong-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-linh-thuoc-thuong-popup.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-popup/phieu-linh-thuoc-thuong-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], PhieuLinhThuocThuongPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-shared/phieu-linh-thuoc-thuong-shared.component.scss": 
        /*!**************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-shared/phieu-linh-thuoc-thuong-shared.component.scss ***!
          \**************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".icon-war-status-grid {\n  color: red;\n  margin-top: 18px;\n  width: auto;\n  height: 15px;\n}\n\nsvg {\n  height: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veWV1LWNhdS1saW5oLXRodW9jL3BoaWV1LWxpbmgtdGh1b2MtdGh1b25nLXNoYXJlZC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcZHVvYy1waGFtXFx5ZXUtY2F1LWxpbmgtdGh1b2NcXHBoaWV1LWxpbmgtdGh1b2MtdGh1b25nLXNoYXJlZFxccGhpZXUtbGluaC10aHVvYy10aHVvbmctc2hhcmVkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS95ZXUtY2F1LWxpbmgtdGh1b2MvcGhpZXUtbGluaC10aHVvYy10aHVvbmctc2hhcmVkL3BoaWV1LWxpbmgtdGh1b2MtdGh1b25nLXNoYXJlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS95ZXUtY2F1LWxpbmgtdGh1b2MvcGhpZXUtbGluaC10aHVvYy10aHVvbmctc2hhcmVkL3BoaWV1LWxpbmgtdGh1b2MtdGh1b25nLXNoYXJlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLXdhci1zdGF0dXMtZ3JpZCB7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDE1cHg7XG59XG5cbnN2ZyB7XG4gIGhlaWdodDogMmVtO1xufSIsIi5pY29uLXdhci1zdGF0dXMtZ3JpZCB7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDE1cHg7XG59XG5cbnN2ZyB7XG4gIGhlaWdodDogMmVtO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-shared/phieu-linh-thuoc-thuong-shared.component.ts": 
        /*!************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-shared/phieu-linh-thuoc-thuong-shared.component.ts ***!
          \************************************************************************************************************************************************/
        /*! exports provided: PhieuLinhThuocThuongSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhThuocThuongSharedComponent", function () { return PhieuLinhThuocThuongSharedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/sharp-edit */ "./node_modules/@iconify/icons-ic/sharp-edit.js");
            /* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../yeu-cau-linh-thuoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/yeu-cau-linh-thuoc.model.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/warning */ "./node_modules/@iconify/icons-ic/warning.js");
            /* harmony import */ var _iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_12__);
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/models/common.model */ "./src/app/shared/models/common.model.ts");
            var PhieuLinhThuocThuongSharedComponent = /** @class */ (function () {
                function PhieuLinhThuocThuongSharedComponent(apiService, notificationService, authService, ref, route, dialog) {
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.ref = ref;
                    this.route = route;
                    this.dialog = dialog;
                    this.yeuCauLinhDuocPham = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["YeuCauLinhDuocPham"]();
                    this.duocPhamGrid = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["YeuCauLinhDuocPhamChiTiet"]();
                    this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.icEdit = _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.icWarning = _iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_12___default.a;
                    this.icDisable = null;
                    this.isSelectDuocPham = false;
                    this.queryMayXetNghiem = new src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_16__["MultiselectQueryInfo"]();
                    this.gridDataSource = {
                        data: [],
                        total: 0
                    };
                    this.gridColumns = [];
                    this.dataDuocPhamGrid = null;
                    this.lstDuocPhamGrid = [];
                    this.phieuLinhId = null;
                    this.isHidden = false;
                    this.duocPhamIds = null;
                    this.groups = [{ field: 'Nhom' }];
                    this.hideDuyetbtn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.disabledNguoiTaoPhieu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.dangXuLy = false;
                }
                PhieuLinhThuocThuongSharedComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].TaoYeuCauLinhThuongDuocPham;
                    this.yeuCauLinhDuocPham = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["YeuCauLinhDuocPham"]();
                    this.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets = new Array();
                    var id = this.route.snapshot.params.id;
                    if (id !== undefined && id !== null) {
                        this.yeuCauLinhDuocPham.LaNguoiTaoPhieu = false;
                        this.getById(id);
                        this.phieuLinhId = id;
                    }
                    this.getCurrentUser();
                    this.gridColumns = [
                        { Field: "STT", Title: "#", Width: 60, Template: this.STTTemplate },
                        { Field: "Ten", Title: "Tên dược phẩm", Width: 120, ShowTooltip: true },
                        { Field: "HoatChat", Title: "Hoạt chất", Width: 170, ShowTooltip: true },
                        { Field: "HamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
                        { Field: "DuongDung", Title: "Đường Dùng", Width: 80 },
                        { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "DVT", Title: "ĐVT", Width: 80 },
                        { Field: "NhaSX", Title: "Hãng SX", Width: 200 },
                        { Field: "NuocSX", Title: "Nước SX", Width: 120 },
                        { Field: "DanhSachTenMayXetNghiem", Title: "Máy XN", Width: 120 },
                        {
                            Field: "SLTon", Title: "SL Tồn", Width: 120,
                            Hidden: !this.isCreate
                        },
                        {
                            Field: "SoLuongCoTheXuat", Title: "SL Có thể xuất", Width: 120,
                            Hidden: this.isCreate
                        },
                        { Field: "SLYeuCau", Title: "SL Yêu Cầu", Width: 120, Template: this.slYeuCauTemplate },
                        { Field: "Action", Title: "", Width: 80, Template: this.actionTemplate },
                    ];
                };
                PhieuLinhThuocThuongSharedComponent.prototype.getCurrentUser = function () {
                    var _this = this;
                    this.duocPhamGrid.LoaiDuocPham = 1;
                    if (this.yeuCauLinhDuocPham.LaNguoiTaoPhieu == null) {
                        if (this.isCreate) {
                            this.yeuCauLinhDuocPham.NgayYeuCau = new Date();
                        }
                        this.apiService.get("YeuCauLinhDuocPham/GetCurrentUser").subscribe(function (resultData) {
                            if (resultData != undefined && resultData != null) {
                                _this.yeuCauLinhDuocPham.NhanVienYeuCauId = resultData.NhanVienYeuCauId;
                                _this.yeuCauLinhDuocPham.HoTenNguoiYeuCau = resultData.HoTen;
                            }
                        });
                        if (this.phieuLinhId != null) {
                            this.apiService.get("YeuCauLinhDuocPham/GetNhanVienDuyet?id=" + this.phieuLinhId).subscribe(function (resultData) {
                                if (resultData != undefined && resultData != null) {
                                    _this.yeuCauLinhDuocPham.NhanVienDuyetId = resultData.NhanVienDuyetId;
                                    _this.yeuCauLinhDuocPham.HoTenNguoiDuyet = resultData.HoTenNguoiDuyet;
                                    _this.yeuCauLinhDuocPham.NgayDuyet = resultData.NgayDuyet;
                                }
                            });
                        }
                    }
                };
                PhieuLinhThuocThuongSharedComponent.prototype.chonDuocPham = function (dataItem) {
                    this.DanhSachMayXetNghiemId = null;
                    this.DanhSachTenMayXetNghiem = null;
                    //console.log("duoc pham: ", dataItem)
                    if (dataItem != undefined && dataItem != null) {
                        this.duocPhamGrid.Ten = dataItem.Ten;
                        this.duocPhamGrid.HoatChat = dataItem.HoatChat;
                        this.duocPhamGrid.SLTon = dataItem.SLTon;
                        this.duocPhamGrid.DVT = dataItem.DVT;
                        this.duocPhamGrid.DuongDung = dataItem.DuongDung;
                        this.duocPhamGrid.NhaSX = dataItem.NhaSX;
                        this.duocPhamGrid.NuocSX = dataItem.NuocSX;
                        this.duocPhamGrid.HamLuong = dataItem.HamLuong;
                        this.duocPhamGrid.LaDuocPhamBHYT = dataItem.LaDuocPhamBHYT;
                        this.duocPhamGrid.MayXetNghiemTenVaIds = dataItem.MayXetNghiemTenVaIds;
                        this.getDataXetNghiemWhenChangeDP(dataItem.KeyId);
                    }
                    else {
                        this.validationErrors = [];
                        this.duocPhamGrid.Ten = null;
                        this.duocPhamGrid.HoatChat = null;
                        this.duocPhamGrid.SLTon = null;
                        this.duocPhamGrid.SLYeuCau = null;
                        this.duocPhamGrid.DVT = null;
                        this.duocPhamGrid.DuongDung = null;
                        this.duocPhamGrid.NhaSX = null;
                        this.duocPhamGrid.NuocSX = null;
                        this.duocPhamGrid.HamLuong = null;
                        this.duocPhamGrid.LaDuocPhamBHYT = null;
                        this.duocPhamGrid.MayXetNghiemTenVaIds = null;
                    }
                };
                PhieuLinhThuocThuongSharedComponent.prototype.huy = function () {
                    this.validationErrors = [];
                    this.duocPhamGrid.Ten = null;
                    this.duocPhamGrid.HoatChat = null;
                    this.duocPhamGrid.DuocPhamBenhVienId = null;
                    this.duocPhamGrid.SLTon = null;
                    this.duocPhamGrid.SLYeuCau = null;
                    this.duocPhamGrid.DVT = null;
                    this.duocPhamGrid.DuongDung = null;
                    this.duocPhamGrid.NhaSX = null;
                    this.duocPhamGrid.NuocSX = null;
                    this.duocPhamGrid.HamLuong = null;
                    this.duocPhamGrid.LaDuocPhamBHYT = null;
                    this.duocPhamGrid.MayXetNghiemTenVaIds = null;
                };
                PhieuLinhThuocThuongSharedComponent.prototype.changeData = function (dataItem) {
                    this.changeMayXetNghiem(dataItem);
                };
                PhieuLinhThuocThuongSharedComponent.prototype.getDataXetNghiemWhenChangeDP = function (duocPhamBenhVienId) {
                    var _this = this;
                    this.queryMayXetNghiem.ParameterDependencies = '{DuocPhamBenhVienId:' + duocPhamBenhVienId + '}';
                    this.queryMayXetNghiem.Take = 50;
                    this.apiService.post("YeuCauLinhDuocPham/GetAllMayXetNghiemYeuCauLinh", this.queryMayXetNghiem).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            _this.bindMayXNKhiChangeData(resultData, _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["ChangeDuocPhamBenhVienOrXetNghiem"].DuocPhamBenhVien);
                            _this.mayXetNgiemMultiselect._data = resultData;
                        }
                    }, function (err) {
                        //console.log(err);
                    });
                };
                PhieuLinhThuocThuongSharedComponent.prototype.bindMayXNKhiChangeData = function (dataItem, changeDuocPhamBenhVienOrXetNghiem) {
                    this.DanhSachMayXetNghiemId = null;
                    this.DanhSachTenMayXetNghiem = null;
                    var danhSachMayXetNghiemId = Array();
                    var danhSachMayXetNghiemTen = Array();
                    if (dataItem !== undefined && dataItem !== null && dataItem.length > 0) {
                        if (changeDuocPhamBenhVienOrXetNghiem === _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["ChangeDuocPhamBenhVienOrXetNghiem"].DuocPhamBenhVien) {
                            dataItem.forEach(function (element) {
                                var tenVaIdMayXetNghiems = element.KeyId.split('-');
                                if (tenVaIdMayXetNghiems !== undefined && dataItem !== null && tenVaIdMayXetNghiems.length > 0) {
                                    danhSachMayXetNghiemId.push(tenVaIdMayXetNghiems[0]);
                                    danhSachMayXetNghiemTen.push(tenVaIdMayXetNghiems[1]);
                                }
                            });
                        }
                        else {
                            dataItem.forEach(function (element) {
                                var tenVaIdMayXetNghiems = element.split('-');
                                if (tenVaIdMayXetNghiems !== undefined && dataItem !== null && tenVaIdMayXetNghiems.length > 0) {
                                    danhSachMayXetNghiemId.push(tenVaIdMayXetNghiems[0]);
                                    danhSachMayXetNghiemTen.push(tenVaIdMayXetNghiems[1]);
                                }
                            });
                        }
                    }
                    this.DanhSachMayXetNghiemId = danhSachMayXetNghiemId.join(';');
                    this.DanhSachTenMayXetNghiem = danhSachMayXetNghiemTen.join(';');
                };
                PhieuLinhThuocThuongSharedComponent.prototype.clearGridDuocPham = function () {
                    this.huy();
                    this.lstDuocPhamGrid = [];
                    this.gridDataSource = {
                        data: this.lstDuocPhamGrid,
                        total: 0
                    };
                    this.gridDuocPham.gridDataSource = this.gridDataSource;
                    this.gridDuocPham.setDataSource();
                    this.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets = [];
                };
                PhieuLinhThuocThuongSharedComponent.prototype.getArrayDuocPhamBenhVienId = function () {
                    var _this = this;
                    this.duocPhamGrid.DuocPhamBenhViens = new Array();
                    this.lstDuocPhamGrid.forEach(function (element) {
                        var duocPhamBenhVien = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["DuocPhamGridViewModelValidator"]();
                        duocPhamBenhVien.DuocPhamBenhVienId = element.DuocPhamBenhVienId;
                        duocPhamBenhVien.LaDuocPhamBHYT = element.LaDuocPhamBHYT;
                        _this.duocPhamGrid.DuocPhamBenhViens.push(duocPhamBenhVien);
                    });
                    // console.log("this.duocPhamGrid.DuocPhamBenhViens: ", this.duocPhamGrid.DuocPhamBenhViens)
                };
                PhieuLinhThuocThuongSharedComponent.prototype.changeMayXetNghiem = function (dataItem) {
                    if (dataItem !== undefined && dataItem !== null && dataItem.length > 0) {
                        this.bindMayXNKhiChangeData(dataItem, _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["ChangeDuocPhamBenhVienOrXetNghiem"].XetNghiem);
                    }
                };
                PhieuLinhThuocThuongSharedComponent.prototype.xoaDuocPham = function (dataItem) {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].MessConfirm, ["xóa"]) }
                    }).afterClosed().subscribe(function (result) {
                        if (result === 'Yes') {
                            _this.lstDuocPhamGrid.splice(_this.lstDuocPhamGrid.findIndex(function (x) { return x == dataItem; }), 1);
                            _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].ActionSuccessfully, ["Xóa"]));
                            _this.validationErrorsLinhThuong = [];
                            _this.setValueForGridDuocPham();
                        }
                    });
                };
                PhieuLinhThuocThuongSharedComponent.prototype.themDuocPham = function () {
                    var _this = this;
                    var self = this;
                    //self.getArrayDuocPhamBenhVienId();
                    self.validationErrors = [];
                    self.validationErrorsLinhThuong = [];
                    self.ref.detectChanges();
                    if (self.duocPhamGrid.LoaiDuocPham == 1) {
                        self.duocPhamGrid.LaDuocPhamBHYT = false;
                    }
                    else {
                        self.duocPhamGrid.LaDuocPhamBHYT = true;
                    }
                    self.duocPhamGrid.KhoXuatId = self.yeuCauLinhDuocPham.KhoXuatId;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Add)) {
                        if (this.dangXuLy)
                            return;
                        this.dangXuLy = true;
                        self.apiService.post("YeuCauLinhDuocPham/ThemLinhThuongDuocPhamGridVo", self.duocPhamGrid).subscribe(function (resultData) {
                            if (resultData != undefined && resultData != null) {
                                resultData.DanhSachMayXetNghiemId = null;
                                resultData.DanhSachTenMayXetNghiem = null;
                                resultData.DanhSachMayXetNghiemId = _this.DanhSachMayXetNghiemId;
                                resultData.DanhSachTenMayXetNghiem = _this.DanhSachTenMayXetNghiem;
                                self.lstDuocPhamGrid.push(resultData);
                                self.setValueForGridDuocPham();
                                self.huy();
                            }
                            self.dangXuLy = false;
                        }, function (err) {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                            self.dangXuLy = false;
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                PhieuLinhThuocThuongSharedComponent.prototype.setValueForGridDuocPham = function () {
                    this.gridDataSource = {
                        data: this.lstDuocPhamGrid,
                        total: this.lstDuocPhamGrid.length
                    };
                    this.lstDuocPhamGrid = this.lstDuocPhamGrid.sort(function (a, b) { return (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1; });
                    var STT = 1;
                    this.lstDuocPhamGrid.forEach(function (element) {
                        element.STT = STT;
                        STT++;
                    });
                    this.getArrayDuocPhamBenhVienId();
                    this.gridDuocPham.gridDataSource = this.gridDataSource;
                    this.gridDuocPham.setDataSource();
                    this.pushDataDuocPham();
                    // console.log("this.list: ", this.lstDuocPhamGrid);
                    if (this.lstDuocPhamGrid.length > 0) {
                        this.hideDuyetbtn.emit(true);
                        this.icDisable = true;
                    }
                    else {
                        this.hideDuyetbtn.emit(false);
                        this.icDisable = false;
                    }
                    //console.log(this.icDisable)
                };
                PhieuLinhThuocThuongSharedComponent.prototype.pushDataDuocPham = function () {
                    var _this = this;
                    this.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets = new Array();
                    this.lstDuocPhamGrid.forEach(function (obj) {
                        var model = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["YeuCauLinhDuocPhamChiTiet"]();
                        model.YeuCauLinhDuocPhamId = obj.YeuCauLinhDuocPhamId;
                        model.DuocPhamBenhVienId = obj.DuocPhamBenhVienId;
                        model.LaDuocPhamBHYT = obj.LaDuocPhamBHYT;
                        model.SoLuong = obj.SLYeuCau;
                        model.Nhom = obj.Nhom;
                        model.SoLuongCoTheXuat = obj.SoLuongCoTheXuat;
                        model.STT = obj.STT;
                        model.SLTon = obj.SLTon;
                        model.KhoXuatId = obj.KhoXuatId;
                        model.DanhSachMayXetNghiemId = obj.DanhSachMayXetNghiemId;
                        model.DanhSachTenMayXetNghiem = obj.DanhSachTenMayXetNghiem;
                        _this.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.push(model);
                    });
                };
                PhieuLinhThuocThuongSharedComponent.prototype.getById = function (id) {
                    var _this = this;
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].View)) {
                        self.apiService.get("YeuCauLinhDuocPham/GetPhieuLinhThuongDuocPham?id=" + id).subscribe(function (resultData) {
                            if (resultData != undefined && resultData != null) {
                                _this.yeuCauLinhDuocPham = resultData;
                                if (_this.yeuCauLinhDuocPham.LaNguoiTaoPhieu) {
                                    _this.disabledNguoiTaoPhieu.emit(true);
                                }
                                else {
                                    _this.disabledNguoiTaoPhieu.emit(false);
                                }
                                if (_this.yeuCauLinhDuocPham.DuocDuyet == null) {
                                    _this.isCreate = true;
                                }
                                _this.lstDuocPhamGrid = [];
                                resultData.YeuCauLinhDuocPhamChiTiets.forEach(function (element) {
                                    _this.lstDuocPhamGrid.push(element);
                                });
                                _this.setValueForGridDuocPham();
                            }
                        }, function (err) {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                PhieuLinhThuocThuongSharedComponent.prototype.getSharedData = function () {
                    var _this = this;
                    this.setValueForGridDuocPham();
                    this.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.forEach(function (element) {
                        if (element.SoLuongCoTheXuat == undefined || element.SoLuongCoTheXuat == null) {
                            element.IsValidator = false;
                        }
                        element.KhoXuatId = _this.yeuCauLinhDuocPham.KhoXuatId;
                    });
                    return this.yeuCauLinhDuocPham;
                };
                PhieuLinhThuocThuongSharedComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        if (this.isSelectDuocPham != true) {
                            this.themDuocPham();
                        }
                        else {
                            this.isSelectDuocPham = false;
                        }
                    }
                };
                PhieuLinhThuocThuongSharedComponent.prototype.openCombobox = function (event) {
                    if (event) {
                        this.isSelectDuocPham = true;
                    }
                    else {
                        this.isSelectDuocPham = false;
                    }
                };
                return PhieuLinhThuocThuongSharedComponent;
            }());
            PhieuLinhThuocThuongSharedComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialog"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PhieuLinhThuocThuongSharedComponent.prototype, "trangThaiVo", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PhieuLinhThuocThuongSharedComponent.prototype, "validationErrorsLinhThuong", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PhieuLinhThuocThuongSharedComponent.prototype, "isCreate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], PhieuLinhThuocThuongSharedComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('STTTemplate', { static: true })
            ], PhieuLinhThuocThuongSharedComponent.prototype, "STTTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDuocPham', { static: true })
            ], PhieuLinhThuocThuongSharedComponent.prototype, "gridDuocPham", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], PhieuLinhThuocThuongSharedComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mayXetNgiemMultiselect', { static: false })
            ], PhieuLinhThuocThuongSharedComponent.prototype, "mayXetNgiemMultiselect", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slYeuCauTemplate', { static: true })
            ], PhieuLinhThuocThuongSharedComponent.prototype, "slYeuCauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], PhieuLinhThuocThuongSharedComponent.prototype, "hideDuyetbtn", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], PhieuLinhThuocThuongSharedComponent.prototype, "disabledNguoiTaoPhieu", void 0);
            PhieuLinhThuocThuongSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-phieu-linh-thuoc-thuong-shared',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-linh-thuoc-thuong-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-shared/phieu-linh-thuoc-thuong-shared.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-linh-thuoc-thuong-shared.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-shared/phieu-linh-thuoc-thuong-shared.component.scss")).default]
                })
            ], PhieuLinhThuocThuongSharedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-gui-lai/phieu-linh-thuoc-truc-tiep-gui-lai.component.scss": 
        /*!**********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-gui-lai/phieu-linh-thuoc-truc-tiep-gui-lai.component.scss ***!
          \**********************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veWV1LWNhdS1saW5oLXRodW9jL3BoaWV1LWxpbmgtdGh1b2MtdHJ1Yy10aWVwLWd1aS1sYWkvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXGR1b2MtcGhhbVxceWV1LWNhdS1saW5oLXRodW9jXFxwaGlldS1saW5oLXRodW9jLXRydWMtdGllcC1ndWktbGFpXFxwaGlldS1saW5oLXRodW9jLXRydWMtdGllcC1ndWktbGFpLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS95ZXUtY2F1LWxpbmgtdGh1b2MvcGhpZXUtbGluaC10aHVvYy10cnVjLXRpZXAtZ3VpLWxhaS9waGlldS1saW5oLXRodW9jLXRydWMtdGllcC1ndWktbGFpLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS95ZXUtY2F1LWxpbmgtdGh1b2MvcGhpZXUtbGluaC10aHVvYy10cnVjLXRpZXAtZ3VpLWxhaS9waGlldS1saW5oLXRodW9jLXRydWMtdGllcC1ndWktbGFpLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn0iLCIuZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-gui-lai/phieu-linh-thuoc-truc-tiep-gui-lai.component.ts": 
        /*!********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-gui-lai/phieu-linh-thuoc-truc-tiep-gui-lai.component.ts ***!
          \********************************************************************************************************************************************************/
        /*! exports provided: PhieuLinhThuocTrucTiepGuiLaiComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhThuocTrucTiepGuiLaiComponent", function () { return PhieuLinhThuocTrucTiepGuiLaiComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../yeu-cau-linh-thuoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/yeu-cau-linh-thuoc.model.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _phieu_linh_thuoc_truc_tiep_popup_phieu_linh_thuoc_truc_tiep_popup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../phieu-linh-thuoc-truc-tiep-popup/phieu-linh-thuoc-truc-tiep-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-popup/phieu-linh-thuoc-truc-tiep-popup.component.ts");
            /* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");
            /* harmony import */ var _popup_thong_bao_dp_khong_the_tao_popup_thong_bao_dp_khong_the_tao_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../popup-thong-bao-dp-khong-the-tao/popup-thong-bao-dp-khong-the-tao.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/popup-thong-bao-dp-khong-the-tao/popup-thong-bao-dp-khong-the-tao.component.ts");
            /* harmony import */ var _phieu_linh_truc_tiep_cho_goi_shared_phieu_linh_truc_tiep_cho_goi_shared_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../phieu-linh-truc-tiep-cho-goi-shared/phieu-linh-truc-tiep-cho-goi-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-truc-tiep-cho-goi-shared/phieu-linh-truc-tiep-cho-goi-shared.component.ts");
            /* harmony import */ var _phieu_linh_thuoc_truc_tiep_shared_phieu_linh_thuoc_truc_tiep_shared_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../phieu-linh-thuoc-truc-tiep-shared/phieu-linh-thuoc-truc-tiep-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-shared/phieu-linh-thuoc-truc-tiep-shared.component.ts");
            var PhieuLinhThuocTrucTiepGuiLaiComponent = /** @class */ (function () {
                function PhieuLinhThuocTrucTiepGuiLaiComponent(apiService, dialog, notificationService, authService, router, ref, route) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.router = router;
                    this.ref = ref;
                    this.route = route;
                    this.yeuCauLinhDuocPham = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_11__["LinhTrucTiepDuocPham"]();
                    //@ViewChild(PhieuLinhTrucTiepChoGoiSharedComponent, { static: true }) shared1: any;
                    this.loading = false;
                    this.popupLoadingData = null;
                    this.inPhieuLinhTrucTiep = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_11__["PhieuLinhThuocTrucTiep"]();
                    this.isShow = false;
                    this.isShowLuuDuyetLai = false;
                    this.quyenUpdate = false;
                    this.shareChoGoi = false;
                    this.groups = [
                        {
                            field: "DuocPhamId",
                            aggregates: [
                                { field: 'SoLuongYeuCau', aggregate: 'sum' },
                            ],
                        },
                    ];
                    this.state = {
                        group: this.groups,
                    };
                }
                PhieuLinhThuocTrucTiepGuiLaiComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route
                        .queryParams
                        .subscribe(function (v) {
                        _this.trangThaiDanhSach = v;
                        if (_this.trangThaiDanhSach.holdQuery == 'true') {
                            _this.shareChoGoi = true;
                        }
                    });
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].TaoYeuCauLinhTrucTiepDuocPham;
                    this.trangThai = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_11__["TrangThaiDuyetYeuCauLinh"]();
                    if (window.location.protocol == "http:") {
                        this.inPhieuLinhTrucTiep.Hosting = "http://" + window.location.host;
                    }
                    else {
                        this.inPhieuLinhTrucTiep.Hosting = "https://" + window.location.host;
                    }
                };
                PhieuLinhThuocTrucTiepGuiLaiComponent.prototype.cancel = function () {
                    this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc'], { queryParams: { holdQuery: true } });
                };
                PhieuLinhThuocTrucTiepGuiLaiComponent.prototype.inPhieu = function () {
                    var _this = this;
                    if (this.shareChoGoi) {
                        this.yeuCauLinhDuocPham = this.shared.getSharedData();
                    }
                    else {
                        this.yeuCauLinhDuocPham = this.shared1.getSharedData();
                    }
                    this.validationErrors = [];
                    this.ref.detectChanges();
                    if (this.trangThai.DuocDuyet == false) {
                        this.inPhieuLinhTrucTiep.Header = true;
                        this.inPhieuLinhTrucTiep.TrangThaiIn = false;
                        this.inPhieuLinhTrucTiep.YeuCauLinhDuocPhamId = this.yeuCauLinhDuocPham.Id;
                        this.inPhieuLinhTrucTiep.LoaiPhieuLinh = 0;
                        this.apiService.post("YeuCauLinhDuocPham/InPhieuLinhTrucTiepDuocPham", this.inPhieuLinhTrucTiep).subscribe(function (resData) {
                            if (resData != undefined && resData != null) {
                                _this.inPhieuLinhTrucTiep.Header = false;
                                _this.dialog.open(_phieu_linh_thuoc_truc_tiep_popup_phieu_linh_thuoc_truc_tiep_popup_component__WEBPACK_IMPORTED_MODULE_16__["PhieuLinhThuocTrucTiepPopupComponent"], {
                                    disableClose: false,
                                    width: '1200px',
                                    height: 'auto',
                                    //height: '600',
                                    data: { Model: resData },
                                }).afterClosed().subscribe(function () {
                                    // this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
                                });
                            }
                        }, function (err) {
                            _this.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                _this.notificationService.showError(err.Message);
                            }
                            _this.closePopupLoadingData();
                        });
                    }
                    else {
                        this.inPhieuLinhTrucTiep.Header = true;
                        this.inPhieuLinhTrucTiep.TrangThaiIn = true;
                        this.inPhieuLinhTrucTiep.YeuCauLinhDuocPhamId = this.yeuCauLinhDuocPham.Id;
                        this.inPhieuLinhTrucTiep.LoaiPhieuLinh = 0;
                        this.apiService.post("YeuCauLinhDuocPham/InPhieuLinhTrucTiepDuocPham", this.inPhieuLinhTrucTiep).subscribe(function (resData) {
                            if (resData != undefined && resData != null) {
                                _this.inPhieuLinhTrucTiep.Header = false;
                                _this.dialog.open(_phieu_linh_thuoc_truc_tiep_popup_phieu_linh_thuoc_truc_tiep_popup_component__WEBPACK_IMPORTED_MODULE_16__["PhieuLinhThuocTrucTiepPopupComponent"], {
                                    disableClose: false,
                                    width: '1200px',
                                    height: 'auto',
                                    //height: '600',
                                    data: { Model: resData },
                                }).afterClosed().subscribe(function () {
                                    // this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
                                });
                            }
                        }, function (err) {
                            _this.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                _this.notificationService.showError(err.Message);
                            }
                            _this.closePopupLoadingData();
                        });
                    }
                };
                PhieuLinhThuocTrucTiepGuiLaiComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang lưu dữ liệu..." },
                    });
                };
                PhieuLinhThuocTrucTiepGuiLaiComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                PhieuLinhThuocTrucTiepGuiLaiComponent.prototype.getTrangThaiYeuCau = function (event) {
                    if (event != undefined && event != null) {
                        this.trangThai = event;
                        if (this.trangThai.DuocDuyet == true) {
                            this.isShow = false;
                        }
                        else if (this.trangThai.DuocDuyet == false) {
                            this.isShow = false;
                            this.isShowLuuDuyetLai = true;
                        }
                        else {
                            this.isShow = true;
                        }
                    }
                };
                PhieuLinhThuocTrucTiepGuiLaiComponent.prototype.luuVaGuiDuyetLai = function () {
                };
                PhieuLinhThuocTrucTiepGuiLaiComponent.prototype.quyenUpdatePhieuLinh = function (event) {
                    this.quyenUpdate = event;
                };
                PhieuLinhThuocTrucTiepGuiLaiComponent.prototype.guiLaiPhieu = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Add)) {
                        this.closePopupLoadingData();
                        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmComponent"], {
                            disableClose: false,
                            width: "500px",
                            data: {
                                Title: "Xác nhận",
                                Message: "Bạn có muốn gởi lại phiếu lĩnh dược phẩm này không ?",
                            },
                        }).afterClosed().subscribe(function (res) {
                            if (res == "Yes") {
                                _this.yeuCauLinhDuocPham = _this.shared.getSharedData();
                                var kiemTraCoDuocPhamKhongDuTon = _this.getItemKhongDuTon(_this.yeuCauLinhDuocPham.DanhSachDuocPhamTonKhongDus);
                                _this.closePopupLoadingData();
                                _this.validationErrors = [];
                                _this.ref.detectChanges();
                                if (kiemTraCoDuocPhamKhongDuTon.length == 0) {
                                    _this.newcreate();
                                }
                                else {
                                    _this.dialog.open(_popup_thong_bao_dp_khong_the_tao_popup_thong_bao_dp_khong_the_tao_component__WEBPACK_IMPORTED_MODULE_18__["PopupThongBaoDpKhongTheTaoComponent"], {
                                        disableClose: false,
                                        width: '500px',
                                        data: kiemTraCoDuocPhamKhongDuTon,
                                    }).afterClosed().subscribe(function (res) {
                                        if (res == "Yes") {
                                            _this.newcreate();
                                        }
                                    });
                                }
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                PhieuLinhThuocTrucTiepGuiLaiComponent.prototype.getItemKhongDuTon = function (danhSachYeuCauDuocPhamBenhVien) {
                    var data = [];
                    var dataKhongChoTao = [];
                    var dataList = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_17__["process"])(danhSachYeuCauDuocPhamBenhVien, this.state);
                    dataList.data.forEach(function (element) {
                        var tongSlYeuCau = 0;
                        var tenDuocPham = "";
                        var slTon = 0;
                        if (element.items.length != 0) {
                            element.items.forEach(function (element) {
                                tongSlYeuCau += element.SoLuongYeuCau;
                                tenDuocPham = element.TenDuocPham;
                                slTon = element.SoLuongTon;
                            });
                        }
                        var objGroup = {
                            DuocPhamId: element.value,
                            TenDuocPham: tenDuocPham,
                            SoLuongYeuCau: tongSlYeuCau,
                            SoLuongTon: slTon
                        };
                        data.push(objGroup);
                        var dataSLKhongChoTao = data.filter(function (d) { return d.SoLuongTon < d.SoLuongYeuCau; });
                        if (dataSLKhongChoTao.length != 0) {
                            dataSLKhongChoTao.forEach(function (element) {
                                dataKhongChoTao.push(element);
                            });
                        }
                    });
                    return dataKhongChoTao;
                };
                PhieuLinhThuocTrucTiepGuiLaiComponent.prototype.newcreate = function () {
                    var _this = this;
                    this.loadingPage();
                    this.apiService.post("YeuCauLinhDuocPham/GuiLaiPhieuLinhTrucTiep", this.yeuCauLinhDuocPham).subscribe(function (result) {
                        _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                        if (result != undefined && result != null) {
                            _this.closePopupLoadingData();
                            _this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmComponent"], {
                                disableClose: false,
                                width: "500px",
                                data: {
                                    Title: "Xác nhận",
                                    Message: "Bạn có muốn in phiếu phiếu lĩnh dược phẩm này không ?",
                                },
                            }).afterClosed().subscribe(function (res) {
                                if (res == "Yes") {
                                    _this.loadingPage();
                                    _this.inPhieuLinhTrucTiep.Header = true;
                                    _this.inPhieuLinhTrucTiep.TrangThaiIn = true;
                                    _this.inPhieuLinhTrucTiep.YeuCauLinhDuocPhamId = result;
                                    _this.inPhieuLinhTrucTiep.LoaiPhieuLinh = 0;
                                    _this.apiService.post("YeuCauLinhDuocPham/InPhieuLinhTrucTiepDuocPham", _this.inPhieuLinhTrucTiep).subscribe(function (resData) {
                                        if (resData != undefined && resData != null) {
                                            _this.inPhieuLinhTrucTiep.Header = false;
                                            _this.dialog.open(_phieu_linh_thuoc_truc_tiep_popup_phieu_linh_thuoc_truc_tiep_popup_component__WEBPACK_IMPORTED_MODULE_16__["PhieuLinhThuocTrucTiepPopupComponent"], {
                                                disableClose: false,
                                                width: '1200px',
                                                data: { Model: resData },
                                            }).afterClosed().subscribe(function () {
                                                _this.closePopupLoadingData();
                                                _this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
                                            });
                                        }
                                    }, function (err) {
                                        _this.validationErrors = err.ValidationErrors;
                                        if (err.Message != "Validation Failed") {
                                            _this.notificationService.showError(err.Message);
                                        }
                                        _this.closePopupLoadingData();
                                    });
                                }
                                else {
                                    _this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
                                }
                            });
                        }
                    }, function (err) {
                        _this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                return PhieuLinhThuocTrucTiepGuiLaiComponent;
            }());
            PhieuLinhThuocTrucTiepGuiLaiComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('temp', { read: _phieu_linh_truc_tiep_cho_goi_shared_phieu_linh_truc_tiep_cho_goi_shared_component__WEBPACK_IMPORTED_MODULE_19__["PhieuLinhTrucTiepChoGoiSharedComponent"], static: false })
            ], PhieuLinhThuocTrucTiepGuiLaiComponent.prototype, "shared", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('temp1', { read: _phieu_linh_thuoc_truc_tiep_shared_phieu_linh_thuoc_truc_tiep_shared_component__WEBPACK_IMPORTED_MODULE_20__["PhieuLinhThuocTrucTiepSharedComponent"], static: false })
            ], PhieuLinhThuocTrucTiepGuiLaiComponent.prototype, "shared1", void 0);
            PhieuLinhThuocTrucTiepGuiLaiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-phieu-linh-thuoc-truc-tiep-gui-lai',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-linh-thuoc-truc-tiep-gui-lai.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-gui-lai/phieu-linh-thuoc-truc-tiep-gui-lai.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-linh-thuoc-truc-tiep-gui-lai.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-gui-lai/phieu-linh-thuoc-truc-tiep-gui-lai.component.scss")).default]
                })
            ], PhieuLinhThuocTrucTiepGuiLaiComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-popup/phieu-linh-thuoc-truc-tiep-popup.component.scss": 
        /*!******************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-popup/phieu-linh-thuoc-truc-tiep-popup.component.scss ***!
          \******************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3lldS1jYXUtbGluaC10aHVvYy9waGlldS1saW5oLXRodW9jLXRydWMtdGllcC1wb3B1cC9waGlldS1saW5oLXRodW9jLXRydWMtdGllcC1wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-popup/phieu-linh-thuoc-truc-tiep-popup.component.ts": 
        /*!****************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-popup/phieu-linh-thuoc-truc-tiep-popup.component.ts ***!
          \****************************************************************************************************************************************************/
        /*! exports provided: PhieuLinhThuocTrucTiepPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhThuocTrucTiepPopupComponent", function () { return PhieuLinhThuocTrucTiepPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var PhieuLinhThuocTrucTiepPopupComponent = /** @class */ (function () {
                function PhieuLinhThuocTrucTiepPopupComponent(data, sanitizer, dialog) {
                    this.data = data;
                    this.sanitizer = sanitizer;
                    this.dialog = dialog;
                    this.src = '';
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.loaiPhieuLinh = "";
                    this.showNutIn = true;
                    this.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(this.data.Model);
                    if (this.data.showIn != undefined && this.data.showIn != null) {
                        this.showNutIn = this.data.showIn;
                    }
                }
                PhieuLinhThuocTrucTiepPopupComponent.prototype.ngOnInit = function () {
                    this.modelPrint = this.data.Model;
                };
                PhieuLinhThuocTrucTiepPopupComponent.prototype.getSharedPrintForm = function () {
                    var dataReplaceemplateHeaderGayNghien = "";
                    var templateHeaderGayNghien = '<div class=\'wrap\'><div class=\'content\'>PHIẾU LĨNH DƯỢC PHẨM</div></div>';
                    dataReplaceemplateHeaderGayNghien = this.replaceAll(this.modelPrint, templateHeaderGayNghien, '');
                    return new Promise(function (resolve) {
                        resolve(dataReplaceemplateHeaderGayNghien);
                    });
                };
                PhieuLinhThuocTrucTiepPopupComponent.prototype.replaceAll = function (str, find, replace) {
                    return str.replace(new RegExp(find, "g"), replace);
                };
                PhieuLinhThuocTrucTiepPopupComponent.prototype.close = function () {
                    this.dialog.closeAll();
                };
                return PhieuLinhThuocTrucTiepPopupComponent;
            }());
            PhieuLinhThuocTrucTiepPopupComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
            ]; };
            PhieuLinhThuocTrucTiepPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-phieu-linh-thuoc-truc-tiep-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-linh-thuoc-truc-tiep-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-popup/phieu-linh-thuoc-truc-tiep-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-linh-thuoc-truc-tiep-popup.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-popup/phieu-linh-thuoc-truc-tiep-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], PhieuLinhThuocTrucTiepPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-shared/phieu-linh-thuoc-truc-tiep-shared.component.scss": 
        /*!********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-shared/phieu-linh-thuoc-truc-tiep-shared.component.scss ***!
          \********************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3lldS1jYXUtbGluaC10aHVvYy9waGlldS1saW5oLXRodW9jLXRydWMtdGllcC1zaGFyZWQvcGhpZXUtbGluaC10aHVvYy10cnVjLXRpZXAtc2hhcmVkLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-shared/phieu-linh-thuoc-truc-tiep-shared.component.ts": 
        /*!******************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-shared/phieu-linh-thuoc-truc-tiep-shared.component.ts ***!
          \******************************************************************************************************************************************************/
        /*! exports provided: PhieuLinhThuocTrucTiepSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhThuocTrucTiepSharedComponent", function () { return PhieuLinhThuocTrucTiepSharedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../yeu-cau-linh-thuoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/yeu-cau-linh-thuoc.model.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            var PhieuLinhThuocTrucTiepSharedComponent = /** @class */ (function () {
                function PhieuLinhThuocTrucTiepSharedComponent(notificationService, cdRef, dialog, apiService, route, baseService, authService) {
                    this.notificationService = notificationService;
                    this.cdRef = cdRef;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.route = route;
                    this.baseService = baseService;
                    this.authService = authService;
                    this.linhTrucTiep = {};
                    this.linhTrucTiepDuocPhamObject = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_2__["LinhDuocPhamTrucTiep"]();
                    this.phieuLinhTrucTiep = {};
                    this.thongtinduocphamchitiet = [];
                    this.linhTrucTiepDuocPhamitem = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_2__["LinhTrucTiepDuocPham"]();
                    this.linhTrucTiepDuocPham = [];
                    this.searchDanhSachThongDuocPham = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_2__["SearchDanhSachThongDuocPham"]();
                    this.lyDoKhongDuyet = "";
                    this.gridDataSource = {};
                    this.gridDataSourceCreate = {};
                    this.gridColumns = [];
                    this.gridChildColumns = [];
                    this.gridColumnTuChois = [];
                    this.gridColumnsDaDuyet = [];
                    this.gridDataSources = {};
                    this.LinhVeKhoa = "";
                    this.nguoiYeuCau = "";
                    this.nguoiDuyet = "";
                    this.ngayDuyet = null;
                    this.ghiChu = "";
                    this.urlGetDataChild = "YeuCauLinhDuocPham/GetAllYeuCauLinhThuocTuKho";
                    this.urlGetDataDaTaoChild = "YeuCauLinhDuocPham/GetAllYeuCauLinhThuocTuKhoDaTao";
                    this.KiemTraCheckGrid = false;
                    this.yeuCauTiepNhanIdCheck = 0;
                    this.gridCheckCu = [];
                    this.linhTrucTiepMasterName = "masterLinhTT";
                    this.checkChild = false;
                    this.trangThaiYeuCau = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.quyenUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.isDaTao = false;
                    this.trangThaiDuyet = null;
                    this.groups = [{ field: 'LoaiThuoc' }];
                    this.groupChilds = [{ field: 'MaTN' }];
                    this.yeuCauLinhDuocPhamId = 0;
                    this.ishowpopupComBoBox = false;
                    this.khoLinhIdSearch = 0;
                    this.phongLinhIdSearch = 0;
                    this.isShowDuyet = false;
                    this.trangThaiShowDuyet = false;
                    this.ishowTrangThaiDuyet = false;
                    this.quyenUpdatePhieu = false;
                    this.dateBatDau = "";
                    this.dateKetThuc = "";
                    this.stringListCheckCha = "0";
                    this.trangThaiDuyetChiTiet = false;
                    this.popupLoadingData = null;
                }
                PhieuLinhThuocTrucTiepSharedComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.queryParams.subscribe(function (params) {
                        var khoLinhId = params['KhoLinhId'];
                        var phongLinhVeId = 0; // tmp
                        _this.khoLinhIdSearch = khoLinhId;
                        _this.phongLinhIdSearch = phongLinhVeId;
                        if (khoLinhId != undefined && phongLinhVeId != undefined && khoLinhId > 0) {
                            _this.showGridTrangThai = true; // tao mới nên có grid child con
                            _this.quyenUpdatePhieu = true;
                            _this.KiemTraCheckGrid = true;
                            _this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"], {
                                disableClose: true,
                                width: '200px',
                                height: '90px',
                                data: { Title: 'Đang tải dữ liệu...' }
                            });
                            _this.apiService.post('YeuCauLinhDuocPham/ThongTinDanhSachCanLinh?idKhoLinh=' + khoLinhId + "&phongLinhVeId=" + phongLinhVeId).subscribe(function (resultData) {
                                _this.linhTrucTiepDuocPhamObject.NhanVienYeuCauId = _this.getNhanVienId.AccessToken.Id;
                                _this.linhTrucTiepDuocPhamObject.KhoNhapId = resultData.LinhVePhongId;
                                _this.LinhVeKhoa = resultData.LinhVeKhoa;
                                _this.ngayYeuCau = new Date();
                                _this.nguoiYeuCau = resultData.NguoiYeuCau;
                                _this.phieuLinhTrucTiep.KeyId = parseInt(khoLinhId);
                                _this.phonglamViecId = phongLinhVeId;
                                _this.apiService.post('YeuCauLinhDuocPham/GetData', { idKhoLinh: parseInt(khoLinhId), phongDangNhapId: phongLinhVeId, dateSearchStart: "", dateSearchEnd: "" }).subscribe(function (resultData) {
                                    _this.gridDataSource = {
                                        data: resultData,
                                        total: resultData.length
                                    };
                                    var STT = 1;
                                    resultData.forEach(function (element) {
                                        element.STT = STT;
                                        STT++;
                                    });
                                    resultData = resultData.sort(function (a, b) { return (a.STT > b.STT) ? 1 : -1; });
                                    _this.setDataGridView();
                                    _this.dialog.closeAll();
                                }, function (err) {
                                    _this.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                    _this.dialog.closeAll();
                                });
                            }, function (err) {
                                _this.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                                _this.dialog.closeAll();
                            });
                        }
                    });
                    this.phieuLinhTrucTiep = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_2__["KhoLinhTu"]();
                    this.linhTrucTiepDuocPhamObject.YeuCauLinhDuocPhamChiTiets = new Array();
                    this.daDuyet = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_2__["DaDuyet"]();
                    this.ngayYeuCau = new Date();
                    this.gridChildColumns = [
                        { Field: "STT", Title: "#", Width: 60 },
                        { Field: "MaTN", Title: "Mã TN", Width: 100 },
                        { Field: "MaBN", Title: "Mã NB", Width: 100 },
                        { Field: "HoTen", Title: "Họ tên", Width: 180 },
                        { Field: "SLYeuCau", Title: "Sl", Width: 120 },
                    ];
                    this.gridColumns = [
                        { Field: "CheckBox", Title: "", Width: 40, Template: this.checkBoxChildTemplate, Hidden: this.isCreate },
                        { Field: "LoaiThuoc", Title: "LoaiThuoc", Sortable: false, Hidden: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
                        // { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
                        { Field: "TenDuocPham", Title: "Tên dược phẩm", Width: 180 },
                        { Field: "HoatChat", Title: "Hoạt chất", Width: 180 },
                        { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
                        { Field: "DuongDung", Title: "Đường dùng", Width: 100 },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
                        { Field: "HangSX", Title: "Hãng SX", Width: 180 },
                        { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
                        { Field: "DVKham", Title: "DV Khám", Width: 180 },
                        { Field: "BacSyKeToa", Title: "BS kê toa", Width: 120 },
                        { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 },
                        { Field: "NgayKe", Title: "Ngày kê", Width: 120 },
                        { Field: "SoLuongTon", Title: "SL tồn", Width: 180 },
                        { Field: "SLYeuCau", Title: "SL Yêu cầu", Width: 100 },
                        { Field: "Action", Title: "", Width: 80 }
                    ];
                    this.gridColumnTuChois = [
                        { Field: "LoaiThuoc", Title: "LoaiThuoc", Sortable: false, Hidden: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
                        { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
                        { Field: "TenDuocPham", Title: "Tên dược phẩm", Width: 180 },
                        { Field: "HoatChat", Title: "Hoạt chất", Width: 180 },
                        { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
                        { Field: "DuongDung", Title: "Đường dùng", Width: 100 },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
                        { Field: "HangSX", Title: "Hãng SX", Width: 180 },
                        { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
                        //{ Field: "SoLuongTon", Title: "SL tồn", Width: 180 },
                        { Field: "SLYeuCau", Title: "SL Yêu cầu", Width: 100 },
                        { Field: "Action", Title: "", Width: 80 }
                    ];
                    this.gridColumnsDaDuyet = [
                        { Field: "CheckBox", Title: "", Width: 40, Template: this.checkBoxChildTemplate, Hidden: this.isCreate },
                        { Field: "LoaiThuoc", Title: "LoaiThuoc", Sortable: false, Hidden: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
                        // { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
                        { Field: "TenDuocPham", Title: "Tên dược phẩm", Width: 180 },
                        { Field: "HoatChat", Title: "Hoạt chất", Width: 180 },
                        { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
                        { Field: "DuongDung", Title: "Đường dùng", Width: 100 },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
                        { Field: "HangSX", Title: "Hãng SX", Width: 180 },
                        { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
                        { Field: "DVKham", Title: "DV Khám", Width: 180 },
                        { Field: "BacSyKeToa", Title: "BS kê toa", Width: 120 },
                        { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 },
                        { Field: "NgayKe", Title: "Ngày kê", Width: 120 },
                        // { Field: "SoLuongTon", Title: "SL tồn", Width: 180 },
                        { Field: "SLYeuCau", Title: "SL Yêu cầu", Width: 100 },
                        { Field: "Action", Title: "", Width: 80 }
                    ];
                    var id = this.route.snapshot.params.id;
                    if (id !== undefined && id !== null) {
                        this.getById(id);
                        this.getTrangThaiDuyet(id);
                        this.isCreate = true;
                        if (this.isCreate == true) {
                            this.ishowpopupComBoBox = true;
                        }
                        this.isDaTao = true;
                        this.yeuCauLinhDuocPhamId = id;
                    }
                    this.phonglamViecId = this.authService.getPhongLamViecId();
                    this.getNhanVienId = this.authService.getAccessUser();
                };
                PhieuLinhThuocTrucTiepSharedComponent.prototype.ChonKhoLinhChange = function (data) {
                };
                PhieuLinhThuocTrucTiepSharedComponent.prototype.setDataGridView = function () {
                    this.gridChild.gridDataSource = this.gridDataSource;
                    if (this.gridChild !== undefined)
                        this.gridChild.setDataSource();
                };
                PhieuLinhThuocTrucTiepSharedComponent.prototype.setDataGridViewRefesh = function () {
                    this.gridChild.gridDataSource = this.gridDataSource;
                    if (this.gridChild !== undefined)
                        this.gridChild.setDataSource();
                };
                PhieuLinhThuocTrucTiepSharedComponent.prototype.getSharedData = function () {
                    var _this = this;
                    //thong tin login 
                    this.validationErrors = [];
                    this.linhTrucTiepDuocPhamObject.GhiChu = this.ghiChu;
                    //-----------------xử lý phiếu linh từ ngày - đến ngày---------------------//
                    //----Từ ngày-------------------------------------------------------------//
                    if (this.searchDanhSachThongDuocPham.TuNgay != null) {
                        this.linhTrucTiepDuocPhamObject.ThoiDiemLinhTongHopTuNgay = this.searchDanhSachThongDuocPham.TuNgay;
                    }
                    else {
                        var yeuCauDuocPhamBenhViens = [];
                        yeuCauDuocPhamBenhViens = this.gridDichVuDuocCheck();
                        if (yeuCauDuocPhamBenhViens.length != 0) {
                            var listSortNhoNhatDenLonNhat = yeuCauDuocPhamBenhViens.sort(function (a, b) { return (new Date(a.NgayDieuTri) > new Date(b.NgayDieuTri)) ? 1 : -1; });
                            this.linhTrucTiepDuocPhamObject.ThoiDiemLinhTongHopTuNgay = new Date(listSortNhoNhatDenLonNhat[0].NgayDieuTri);
                        }
                    }
                    //----đến ngày-------------------------------------------------------------//
                    if (this.searchDanhSachThongDuocPham.DenNgay != null) {
                        this.linhTrucTiepDuocPhamObject.ThoiDiemLinhTongHopDenNgay = this.searchDanhSachThongDuocPham.DenNgay;
                    }
                    else {
                        this.linhTrucTiepDuocPhamObject.ThoiDiemLinhTongHopDenNgay = null;
                    }
                    //--------------end xử lý phiếu linh từ ngày - đến ngày---------------------//
                    if (this.phieuLinhTrucTiep.KeyId != null) {
                        this.linhTrucTiepDuocPhamObject.KhoXuatId = this.phieuLinhTrucTiep.KeyId;
                    }
                    // yeucau duoc pham benh vien
                    if (this.gridDataSource.data == null || this.gridDataSource.data == undefined) {
                        this.validationErrors = [];
                    }
                    else {
                        this.linhTrucTiepDuocPhamObject.YeuCauDuocPhamBenhViensTT = new Array();
                        this.linhTrucTiepDuocPhamObject.YeuCauDuocPhamBenhIds = new Array();
                        this.linhTrucTiepDuocPhamObject.DanhSachDuocPhamTonKhongDus = new Array();
                        this.gridDataSource.data.forEach(function (element) {
                            if (element.IsCheckRowItem == true) {
                                element.ListYeuCauDuocPhamBenhViens.forEach(function (item) {
                                    if (item.IsCheckRowItem == true) {
                                        var index = _this.linhTrucTiepDuocPhamObject.YeuCauDuocPhamBenhIds.findIndex(function (sp) { return sp == item.Id; });
                                        if (index == -1) {
                                            _this.linhTrucTiepDuocPhamObject.YeuCauDuocPhamBenhIds.push(item.Id);
                                            var dpKhongDuTon = {
                                                DuocPhamId: item.DuocPhamId,
                                                TenDuocPham: item.TenDuocPham,
                                                SoLuongTon: item.SoLuongTon,
                                                SoLuongYeuCau: item.SLYeuCau
                                            };
                                            _this.linhTrucTiepDuocPhamObject.DanhSachDuocPhamTonKhongDus.push(dpKhongDuTon);
                                        }
                                    }
                                });
                            }
                        });
                    }
                    this.setDataGridView();
                    return this.linhTrucTiepDuocPhamObject;
                };
                PhieuLinhThuocTrucTiepSharedComponent.prototype.getTrangThaiDuyet = function (id) {
                    var _this = this;
                    this.apiService.post('YeuCauLinhDuocPham/GetTrangThaiDuyet?IdYeuCauLinh=' + id).subscribe(function (resultData) {
                        _this.trangThaiDuyet = resultData;
                        if (_this.trangThaiDuyet == true) {
                            _this.trangThaiYeuCau.emit(new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_2__["TrangThaiDuyetYeuCauLinh"]("Đã duyệt", resultData));
                            _this.apiService.post('YeuCauLinhDuocPham/GetDaDuyet?IdYeuCauLinh=' + id).subscribe(function (resultData) {
                                _this.daDuyet.NguoiDuyet = resultData.NguoiDuyet;
                                _this.daDuyet.NgayDuyet = resultData.NgayDuyet;
                                if (_this.daDuyet.NguoiDuyet != null && _this.daDuyet.NgayDuyet != null) {
                                    _this.isShowDuyet = true;
                                    _this.isDaTao = true;
                                    _this.showGridTrangThai = true;
                                    _this.trangThaiShowDuyet = false;
                                    _this.trangThaiDuyetChiTiet = true;
                                }
                            });
                        }
                        else if (_this.trangThaiDuyet == false) {
                            _this.trangThaiYeuCau.emit(new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_2__["TrangThaiDuyetYeuCauLinh"]("Từ chối duyệt", resultData));
                            _this.apiService.post('YeuCauLinhDuocPham/GetDaDuyet?IdYeuCauLinh=' + id).subscribe(function (resultData) {
                                _this.daDuyet.NguoiDuyet = resultData.NguoiDuyet;
                                _this.daDuyet.NgayDuyet = resultData.NgayDuyet;
                                if (_this.daDuyet.NguoiDuyet != null && _this.daDuyet.NgayDuyet != null) {
                                    _this.isShowDuyet = true;
                                    _this.isDaTao = true;
                                    _this.showGridTrangThai = false;
                                    _this.trangThaiShowDuyet = true;
                                }
                            });
                        }
                        else {
                            _this.trangThaiYeuCau.emit(new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_2__["TrangThaiDuyetYeuCauLinh"]("Đang chờ duyệt", resultData));
                            _this.daDuyet.NguoiDuyet = null;
                            _this.daDuyet.NgayDuyet = null;
                            if (_this.daDuyet.NguoiDuyet == null && _this.daDuyet.NgayDuyet == null) {
                                _this.isShowDuyet = false;
                                _this.isDaTao = false;
                                _this.showGridTrangThai = true;
                                _this.trangThaiDuyetChiTiet = true;
                            }
                        }
                    }, function (err) {
                        _this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                    });
                };
                PhieuLinhThuocTrucTiepSharedComponent.prototype.getById = function (id) {
                    var _this = this;
                    var self = this;
                    this.linhTrucTiepDuocPhamObject.Id = id;
                    self.apiService.get("YeuCauLinhDuocPham/GetALL?id=" + id).subscribe(function (resultData) {
                        if (resultData != undefined && resultData != null) {
                            _this.phieuLinhTrucTiep.KeyId = resultData.KhoXuatId;
                            _this.phieuLinhTrucTiep.DisplayName = resultData.TenKhoXuat;
                            _this.daDuyet.NgayDuyet = resultData.NgayDuyet;
                            _this.lyDoKhongDuyet = resultData.LyDoKhongDuyet;
                            self.apiService.post('YeuCauLinhDuocPham/ThongTinLinhTuKhoDaTao?idYeuCauLinhDP=' + id).subscribe(function (resultDatas) {
                                _this.linhTrucTiepDuocPhamObject.NhanVienYeuCauId = resultDatas[0].NhanVienYeuCauId;
                                _this.linhTrucTiepDuocPhamObject.KhoNhapId = resultDatas[0].LinhVePhongId;
                                _this.LinhVeKhoa = resultDatas[0].LinhVeKhoa;
                                _this.nguoiYeuCau = resultDatas[0].NguoiYeuCau;
                                var dataTime = resultDatas[0].NgayYeuCau;
                                _this.ngayYeuCau = dataTime;
                                _this.ghiChu = resultDatas[0].GhiChu;
                                _this.phonglamViecId = resultDatas[0].NoiChiDinhId;
                                if (_this.getNhanVienId.AccessToken.Id == _this.linhTrucTiepDuocPhamObject.NhanVienYeuCauId) {
                                    _this.quyenUpdatePhieu = true;
                                    _this.quyenUpdate.emit(true);
                                }
                                var trangThai = 0;
                                if (_this.trangThaiDuyet == true) {
                                    trangThai = 1;
                                }
                                else if (_this.trangThaiDuyet == null) {
                                    trangThai = 1;
                                }
                                else {
                                    trangThai = 0;
                                }
                                _this.apiService.post('YeuCauLinhDuocPham/GetDataDaTao?idKhoLinh=' + resultData.KhoXuatId + '&idYeuCauLinhDuocPham=' + id + '&phongDangNhapId=' + resultDatas[0].NoiChiDinhId + "&trangThai=" + trangThai).subscribe(function (resultData) {
                                    _this.gridDataSource = {
                                        data: resultData,
                                        total: resultData.length
                                    };
                                    var STT = 1;
                                    resultData.forEach(function (element) {
                                        element.STT = STT;
                                        STT++;
                                    });
                                    resultData = resultData.sort(function (a, b) { return (a.STT > b.STT) ? 1 : -1; });
                                    _this.setDataGridView();
                                }, function (err) {
                                    _this.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                });
                            }, function (err) {
                                _this.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                            });
                        }
                    }, function (err) {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                    });
                };
                PhieuLinhThuocTrucTiepSharedComponent.prototype.extCheckboxSelections = function (event) {
                    var _this = this;
                    this.cdRef.detectChanges();
                    var tmpArray = event;
                    var tmp = [];
                    this.linhTrucTiepDuocPhamObject.CheckKhiTao = tmpArray;
                    var gridCheckCu = [];
                    if (this.linhTrucTiepDuocPhamObject.CheckKhiTao.length != 0) {
                        var dataCheck = [];
                        var _loop_1 = function (i) {
                            for (var j = 0; j < this_1.linhTrucTiepDuocPhamObject.CheckKhiTao.length; j++) {
                                if (this_1.linhTrucTiepDuocPhamObject.CheckKhiTao[j] == this_1.gridDataSource.data[i].YeuCauTiepNhanId) {
                                    if (this_1.checkChild == false) {
                                        this_1.gridDataSource.data[i].IsCheckRowItem = true;
                                        if (this_1.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens.length == this_1.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens.filter(function (sp) { return sp.IsCheckRowItem == false; }).length) {
                                            this_1.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens.forEach(function (elements) {
                                                if (elements.SoLuongTon >= elements.SLYeuCau) {
                                                    elements.IsCheckRowItem = true;
                                                }
                                            });
                                        }
                                        this_1.getDataSourceChild(this_1.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens);
                                        break;
                                    }
                                    else {
                                        this_1.gridDataSource.data[i].IsCheckRowItem = true;
                                        if (this_1.gridDataSource.data[i].IsCheckRowItem == true) {
                                            if (this_1.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens.length == this_1.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens.filter(function (sp) { return sp.IsCheckRowItem == false; }).length) {
                                                this_1.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens.forEach(function (elements) {
                                                    if (elements.SoLuongTon >= elements.SLYeuCau) {
                                                        elements.IsCheckRowItem = true;
                                                    }
                                                });
                                            }
                                        }
                                        this_1.getDataSourceChild(this_1.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens);
                                        break;
                                    }
                                }
                                else {
                                    var index = gridCheckCu.findIndex(function (x) { return x.YeuCauTiepNhanId == _this.gridDataSource.data[i].YeuCauTiepNhanId; });
                                    if (index == -1) {
                                        gridCheckCu.push(this_1.gridDataSource.data[i]);
                                    }
                                }
                            }
                        };
                        var this_1 = this;
                        for (var i = 0; i < this.gridDataSource.data.length; i++) {
                            _loop_1(i);
                        }
                        this.linhTrucTiepDuocPhamObject.CheckKhiTao.forEach(function (element) {
                            var index = gridCheckCu.findIndex(function (x) { return x.YeuCauTiepNhanId == element; });
                            if (index != -1) {
                                var dd = gridCheckCu.filter(function (sp) { return sp.YeuCauTiepNhanId == element; }); //.IsCheckRowItem = false
                                gridCheckCu.splice(gridCheckCu.findIndex(function (x) { return x.YeuCauTiepNhanId == element; }), 1);
                            }
                        });
                        gridCheckCu.forEach(function (element) {
                            element.IsCheckRowItem = false;
                            element.ListYeuCauDuocPhamBenhViens.forEach(function (elements) {
                                elements.IsCheckRowItem = false;
                            });
                            _this.getDataSourceChild(element.ListYeuCauDuocPhamBenhViens);
                        });
                    }
                    else {
                        this.gridDataSource.data.forEach(function (element) {
                            element.IsCheckRowItem = false;
                            element.ListYeuCauDuocPhamBenhViens.forEach(function (elements) {
                                elements.IsCheckRowItem = false;
                            });
                            _this.getDataSourceChild(element.ListYeuCauDuocPhamBenhViens);
                        });
                    }
                };
                PhieuLinhThuocTrucTiepSharedComponent.prototype.OnDataBound = function (dataChild) {
                };
                PhieuLinhThuocTrucTiepSharedComponent.prototype.changeTuNgay = function (event) {
                    this.timkiem();
                };
                PhieuLinhThuocTrucTiepSharedComponent.prototype.changeDenNgay = function (event) {
                    this.timkiem();
                };
                PhieuLinhThuocTrucTiepSharedComponent.prototype.timkiem = function () {
                    var _this = this;
                    if (this.khoLinhIdSearch != undefined && this.phongLinhIdSearch != undefined && this.khoLinhIdSearch > 0) {
                        this.showGridTrangThai = true; // tao mới nên có grid child con
                        this.quyenUpdatePhieu = true;
                        this.KiemTraCheckGrid = true;
                        this.loadingPage();
                        this.apiService.post('YeuCauLinhDuocPham/ThongTinDanhSachCanLinh?idKhoLinh=' + this.khoLinhIdSearch + "&phongLinhVeId=" + this.phongLinhIdSearch).subscribe(function (resultData) {
                            _this.linhTrucTiepDuocPhamObject.NhanVienYeuCauId = _this.getNhanVienId.AccessToken.Id;
                            _this.linhTrucTiepDuocPhamObject.KhoNhapId = resultData.LinhVePhongId;
                            _this.LinhVeKhoa = resultData.LinhVeKhoa;
                            _this.ngayYeuCau = new Date();
                            _this.nguoiYeuCau = resultData.NguoiYeuCau;
                            _this.phieuLinhTrucTiep.KeyId = _this.khoLinhIdSearch;
                            _this.phonglamViecId = _this.phongLinhIdSearch;
                            _this.dateBatDau = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(_this.searchDanhSachThongDuocPham.TuNgay, "mm/dd/yyyy");
                            _this.dateKetThuc = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(_this.searchDanhSachThongDuocPham.DenNgay, "mm/dd/yyyy");
                            _this.apiService.post('YeuCauLinhDuocPham/GetData', { idKhoLinh: _this.khoLinhIdSearch, phongDangNhapId: _this.phongLinhIdSearch, dateSearchStart: _this.dateBatDau, dateSearchEnd: _this.dateKetThuc }).subscribe(
                            // this.apiService.post<Array<any>>('YeuCauLinhDuocPham/GetData?idKhoLinh=' + this.khoLinhIdSearch + '&phongDangNhapId=' + this.phongLinhIdSearch + "&dateSearchStart=" + this.dateBatDau + "&dateSearchEnd=" + this.dateKetThuc).subscribe(
                            function (resultData) {
                                _this.gridDataSource = {
                                    data: resultData,
                                    total: resultData.length
                                };
                                var arrayNull = [];
                                _this.extCheckboxSelections(arrayNull);
                                _this.gridCha.onSelectAllChange('unchecked');
                                var STT = 1;
                                resultData.forEach(function (element) {
                                    element.STT = STT;
                                    STT++;
                                });
                                resultData = resultData.sort(function (a, b) { return (a.STT > b.STT) ? 1 : -1; });
                                _this.setDataGridView();
                                _this.closePopupLoadingData();
                            }, function (err) {
                                _this.closePopupLoadingData();
                                _this.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                            });
                        }, function (err) {
                            _this.closePopupLoadingData();
                            _this.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                _this.notificationService.showError(err.Message);
                            }
                        });
                    }
                };
                PhieuLinhThuocTrucTiepSharedComponent.prototype.checkboxGridChild = function (event, dataItem) {
                    var _this = this;
                    if (event == true) {
                        dataItem.IsCheckRowItem = true;
                    }
                    else {
                        dataItem.IsCheckRowItem = false;
                    }
                    //   let mySelection: number[] = [];
                    this.gridDataSource.data.forEach(function (element) {
                        if (dataItem.YeuCauTiepNhanId == element.Id) {
                            var inxdex = element.ListYeuCauDuocPhamBenhViens.findIndex(function (sp) { return sp.IsCheckRowItem == true; });
                            if (inxdex != -1) {
                                _this.checkChild = true;
                                var indexChange = element.ListYeuCauDuocPhamBenhViens.filter(function (sp) { return sp.Id == dataItem.Id; });
                                if (indexChange.length == 1) {
                                    indexChange.forEach(function (element) {
                                        element.IsCheckRowItem = event;
                                    });
                                }
                                var inxdex_1 = element.ListYeuCauDuocPhamBenhViens.filter(function (sp) { return sp.IsCheckRowItem == false; });
                                if (element.ListYeuCauDuocPhamBenhViens.length == inxdex_1.length) {
                                    if (!jQuery('#' + _this.linhTrucTiepMasterName + 'selectCheckboxId' + element.Id).prop('unchecked')) {
                                        jQuery('#' + _this.linhTrucTiepMasterName + 'selectCheckboxId' + element.Id).trigger('click');
                                    }
                                }
                                if (!jQuery('#' + _this.linhTrucTiepMasterName + 'selectCheckboxId' + element.Id).prop('checked')) {
                                    jQuery('#' + _this.linhTrucTiepMasterName + 'selectCheckboxId' + element.Id).trigger('click');
                                }
                                return;
                            }
                            else {
                                _this.checkChild = true;
                                var inxdex_2 = element.ListYeuCauDuocPhamBenhViens.filter(function (sp) { return sp.IsCheckRowItem == false; });
                                if (element.ListYeuCauDuocPhamBenhViens.length == inxdex_2.length) {
                                    if (!jQuery('#' + _this.linhTrucTiepMasterName + 'selectCheckboxId' + element.Id).prop('unchecked')) {
                                        jQuery('#' + _this.linhTrucTiepMasterName + 'selectCheckboxId' + element.Id).trigger('click');
                                    }
                                }
                                return;
                            }
                        }
                    });
                    //this.checkChild = false;
                };
                PhieuLinhThuocTrucTiepSharedComponent.prototype.checkboxGridCha = function (event, dataItem) {
                    if (event == true) {
                        dataItem.IsCheckRowItem = true;
                    }
                };
                PhieuLinhThuocTrucTiepSharedComponent.prototype.getDataSourceChild = function (parentItem) {
                    return {
                        data: parentItem,
                        total: parentItem.length
                    };
                };
                PhieuLinhThuocTrucTiepSharedComponent.prototype.gridDichVuDuocCheck = function () {
                    var _this = this;
                    var yeuCauDuocPhamBenhViens = [];
                    this.gridDataSource.data.forEach(function (element) {
                        if (element.IsCheckRowItem == true) {
                            element.ListYeuCauDuocPhamBenhViens.forEach(function (item) {
                                if (item.IsCheckRowItem == true) {
                                    var index = _this.linhTrucTiepDuocPhamObject.YeuCauDuocPhamBenhIds.findIndex(function (sp) { return sp == item.Id; });
                                    if (index == -1) {
                                        yeuCauDuocPhamBenhViens.push(item);
                                    }
                                }
                            });
                        }
                    });
                    return yeuCauDuocPhamBenhViens;
                };
                PhieuLinhThuocTrucTiepSharedComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang lưu dữ liệu..." },
                    });
                };
                PhieuLinhThuocTrucTiepSharedComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                return PhieuLinhThuocTrucTiepSharedComponent;
            }());
            PhieuLinhThuocTrucTiepSharedComponent.ctorParameters = function () { return [
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PhieuLinhThuocTrucTiepSharedComponent.prototype, "isCreate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], PhieuLinhThuocTrucTiepSharedComponent.prototype, "trangThaiYeuCau", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], PhieuLinhThuocTrucTiepSharedComponent.prototype, "quyenUpdate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slYeuCauTemplate', { static: true })
            ], PhieuLinhThuocTrucTiepSharedComponent.prototype, "slYeuCauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
            ], PhieuLinhThuocTrucTiepSharedComponent.prototype, "sttTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkBoxChildTemplate', { static: true })
            ], PhieuLinhThuocTrucTiepSharedComponent.prototype, "checkBoxChildTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridCreate', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__["GridComponent"], static: false })
            ], PhieuLinhThuocTrucTiepSharedComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhomGroupHeaderTemplate', { static: true })
            ], PhieuLinhThuocTrucTiepSharedComponent.prototype, "tenNhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridChildCreate', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__["GridComponent"], static: false })
            ], PhieuLinhThuocTrucTiepSharedComponent.prototype, "gridChildCreate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridCha', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__["GridComponent"], static: false })
            ], PhieuLinhThuocTrucTiepSharedComponent.prototype, "gridCha", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PhieuLinhThuocTrucTiepSharedComponent.prototype, "isDaTao", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PhieuLinhThuocTrucTiepSharedComponent.prototype, "validationErrorsLinhTT", void 0);
            PhieuLinhThuocTrucTiepSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-phieu-linh-thuoc-truc-tiep-shared',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-linh-thuoc-truc-tiep-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-shared/phieu-linh-thuoc-truc-tiep-shared.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-linh-thuoc-truc-tiep-shared.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-shared/phieu-linh-thuoc-truc-tiep-shared.component.scss")).default]
                })
            ], PhieuLinhThuocTrucTiepSharedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-truc-tiep-cho-goi-shared/phieu-linh-truc-tiep-cho-goi-shared.component.scss": 
        /*!************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-truc-tiep-cho-goi-shared/phieu-linh-truc-tiep-cho-goi-shared.component.scss ***!
          \************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3lldS1jYXUtbGluaC10aHVvYy9waGlldS1saW5oLXRydWMtdGllcC1jaG8tZ29pLXNoYXJlZC9waGlldS1saW5oLXRydWMtdGllcC1jaG8tZ29pLXNoYXJlZC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-truc-tiep-cho-goi-shared/phieu-linh-truc-tiep-cho-goi-shared.component.ts": 
        /*!**********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-truc-tiep-cho-goi-shared/phieu-linh-truc-tiep-cho-goi-shared.component.ts ***!
          \**********************************************************************************************************************************************************/
        /*! exports provided: PhieuLinhTrucTiepChoGoiSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhTrucTiepChoGoiSharedComponent", function () { return PhieuLinhTrucTiepChoGoiSharedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../yeu-cau-linh-thuoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/yeu-cau-linh-thuoc.model.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            var PhieuLinhTrucTiepChoGoiSharedComponent = /** @class */ (function () {
                function PhieuLinhTrucTiepChoGoiSharedComponent(notificationService, cdRef, dialog, apiService, route, baseService, authService) {
                    this.notificationService = notificationService;
                    this.cdRef = cdRef;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.route = route;
                    this.baseService = baseService;
                    this.authService = authService;
                    this.linhTrucTiepDuocPhamObject = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_2__["LinhDuocPhamTrucTiep"]();
                    this.searchDanhSachThongDuocPham = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_2__["SearchDanhSachThongDuocPham"]();
                    this.phieuLinhTrucTiep = {};
                    this.gridColumns = [];
                    this.gridChildColumns = [];
                    this.gridColumnTuChois = [];
                    this.gridDataSources = {};
                    this.isShowChoGoi = false;
                    this.gridDataSource = {};
                    this.checkChild = false;
                    this.yeuCauLinhDuocPhamId = 0;
                    this.linhTrucTiepMasterName = "masterLinhTT";
                    this.popupLoadingData = null;
                    this.LinhVeKhoa = "";
                    this.nguoiYeuCau = "";
                    this.nguoiDuyet = "";
                    this.ngayDuyet = null;
                    this.ghiChu = "";
                    this.lan = 0;
                }
                PhieuLinhTrucTiepChoGoiSharedComponent.prototype.ngOnInit = function () {
                    this.phieuLinhTrucTiep = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_2__["KhoLinhTu"]();
                    this.linhTrucTiepDuocPhamObject.YeuCauLinhDuocPhamChiTiets = new Array();
                    this.gridChildColumns = [
                        { Field: "STT", Title: "#", Width: 60 },
                        { Field: "MaTN", Title: "Mã TN", Width: 100 },
                        { Field: "MaBN", Title: "Mã NB", Width: 100 },
                        { Field: "HoTen", Title: "Họ tên", Width: 180 },
                        { Field: "SLYeuCau", Title: "Sl", Width: 120 },
                    ];
                    this.gridColumns = [
                        { Field: "CheckBox", Title: "", Width: 40, Template: this.checkBoxChildTemplate, Hidden: this.isShowChoGoi },
                        // { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
                        { Field: "TenDuocPham", Title: "Tên dược phẩm", Width: 180 },
                        { Field: "HoatChat", Title: "Hoạt chất", Width: 180 },
                        { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
                        { Field: "DuongDung", Title: "Đường dùng", Width: 100 },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
                        { Field: "HangSX", Title: "Hãng SX", Width: 180 },
                        { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
                        { Field: "DVKham", Title: "DV Khám", Width: 180 },
                        { Field: "BacSyKeToa", Title: "BS kê toa", Width: 120 },
                        { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 },
                        { Field: "NgayKe", Title: "Ngày kê", Width: 120 },
                        { Field: "SoLuongTon", Title: "SL tồn", Width: 180 },
                        { Field: "SLYeuCau", Title: "SL Yêu cầu", Width: 100 },
                        { Field: "Action", Title: "", Width: 80 }
                    ];
                    this.gridColumnTuChois = [
                        { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
                        { Field: "TenDuocPham", Title: "Tên dược phẩm", Width: 180 },
                        { Field: "HoatChat", Title: "Hoạt chất", Width: 180 },
                        { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
                        { Field: "DuongDung", Title: "Đường dùng", Width: 100 },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
                        { Field: "HangSX", Title: "Hãng SX", Width: 180 },
                        { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
                        { Field: "SoLuongTon", Title: "SL tồn", Width: 180 },
                        { Field: "SLYeuCau", Title: "SL Yêu cầu", Width: 100 },
                        { Field: "Action", Title: "", Width: 80 }
                    ];
                    var id = this.route.snapshot.params.id;
                    if (id !== undefined && id !== null) {
                        this.getById(id);
                        this.isShowChoGoi = true;
                        this.yeuCauLinhDuocPhamId = id;
                    }
                    this.phonglamViecId = this.authService.getPhongLamViecId();
                    this.getNhanVienId = this.authService.getAccessUser();
                };
                PhieuLinhTrucTiepChoGoiSharedComponent.prototype.setDataGridView = function () {
                    this.gridChild.gridDataSource = this.gridDataSource;
                    if (this.gridChild !== undefined)
                        this.gridChild.setDataSource();
                };
                PhieuLinhTrucTiepChoGoiSharedComponent.prototype.setDataGridViewRefesh = function () {
                    this.gridChild.gridDataSource = this.gridDataSource;
                    if (this.gridChild !== undefined)
                        this.gridChild.setDataSource();
                };
                PhieuLinhTrucTiepChoGoiSharedComponent.prototype.getById = function (id) {
                    var _this = this;
                    this.linhTrucTiepDuocPhamObject.Id = id;
                    this.apiService.get("YeuCauLinhDuocPham/GetALL?id=" + id).subscribe(function (resultData) {
                        if (resultData != undefined && resultData != null) {
                            _this.phieuLinhTrucTiep.KeyId = resultData.KhoXuatId;
                            _this.phieuLinhTrucTiep.DisplayName = resultData.TenKhoXuat;
                            var vo_1 = {
                                KhoLinhId: resultData.KhoXuatId,
                                YeuCauLinhDuocPhamId: id,
                                TuNgay: null,
                                DenNgay: null
                            };
                            _this.apiService.post('YeuCauLinhDuocPham/ThongTinLinhTuKhoDaTao?idYeuCauLinhDP=' + id).subscribe(function (resultDatas) {
                                _this.linhTrucTiepDuocPhamObject.NhanVienYeuCauId = resultDatas[0].NhanVienYeuCauId;
                                _this.linhTrucTiepDuocPhamObject.KhoNhapId = resultDatas[0].LinhVePhongId;
                                _this.LinhVeKhoa = resultDatas[0].LinhVeKhoa;
                                _this.nguoiYeuCau = resultDatas[0].NguoiYeuCau;
                                var dataTime = resultDatas[0].NgayYeuCau;
                                _this.ngayYeuCau = dataTime;
                                _this.ghiChu = resultDatas[0].GhiChu;
                                _this.apiService.post('YeuCauLinhDuocPham/GetDataGridYeuCauLinhDuocPhamLuuTamThoi', vo_1).subscribe(function (resultData) {
                                    _this.gridDataSource = {
                                        data: resultData,
                                        total: resultData.length
                                    };
                                    var STT = 1;
                                    resultData.forEach(function (element) {
                                        element.STT = STT;
                                        STT++;
                                    });
                                    resultData = resultData.sort(function (a, b) { return (a.STT > b.STT) ? 1 : -1; });
                                    _this.setDataGridView();
                                    var arrayNull = [];
                                    if (_this.gridDataSource.total != 0) {
                                        _this.gridDataSource.data.forEach(function (element) {
                                            if (element.IsCheckRowItem == true) {
                                                arrayNull.push(element.Id);
                                            }
                                        });
                                    }
                                    _this.extCheckboxSelections(arrayNull);
                                    _this.selectCheckBox(arrayNull);
                                }, function (err) {
                                    _this.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                });
                            }, function (err) {
                                _this.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                            });
                        }
                    }, function (err) {
                        _this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                    });
                };
                PhieuLinhTrucTiepChoGoiSharedComponent.prototype.extCheckboxSelections = function (event) {
                    var _this = this;
                    this.lan++;
                    this.cdRef.detectChanges();
                    var tmpArray = event;
                    var tmp = [];
                    this.linhTrucTiepDuocPhamObject.CheckKhiTao = tmpArray;
                    var gridCheckCu = [];
                    if (this.linhTrucTiepDuocPhamObject.CheckKhiTao.length != 0) {
                        var dataCheck = [];
                        var _loop_2 = function (i) {
                            for (var j = 0; j < this_2.linhTrucTiepDuocPhamObject.CheckKhiTao.length; j++) {
                                if (this_2.linhTrucTiepDuocPhamObject.CheckKhiTao[j] == this_2.gridDataSource.data[i].YeuCauTiepNhanId) {
                                    if (this_2.checkChild == false) {
                                        this_2.gridDataSource.data[i].IsCheckRowItem = true;
                                        if (this_2.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens.length == this_2.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens.filter(function (sp) { return sp.IsCheckRowItem == false; }).length) {
                                            this_2.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens.forEach(function (elements) {
                                                if (elements.SoLuongTon >= elements.SLYeuCau) {
                                                    elements.IsCheckRowItem = true;
                                                }
                                            });
                                        }
                                        this_2.getDataSourceChild(this_2.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens);
                                        break;
                                    }
                                    else {
                                        this_2.gridDataSource.data[i].IsCheckRowItem = true;
                                        if (this_2.gridDataSource.data[i].IsCheckRowItem == true) {
                                            if (this_2.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens.length == this_2.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens.filter(function (sp) { return sp.IsCheckRowItem == false; }).length) {
                                                this_2.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens.forEach(function (elements) {
                                                    if (elements.SoLuongTon >= elements.SLYeuCau) {
                                                        elements.IsCheckRowItem = true;
                                                    }
                                                });
                                            }
                                        }
                                        this_2.getDataSourceChild(this_2.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens);
                                        break;
                                    }
                                }
                                else {
                                    var index = gridCheckCu.findIndex(function (x) { return x.YeuCauTiepNhanId == _this.gridDataSource.data[i].YeuCauTiepNhanId; });
                                    if (index == -1) {
                                        gridCheckCu.push(this_2.gridDataSource.data[i]);
                                    }
                                }
                            }
                        };
                        var this_2 = this;
                        for (var i = 0; i < this.gridDataSource.data.length; i++) {
                            _loop_2(i);
                        }
                        this.linhTrucTiepDuocPhamObject.CheckKhiTao.forEach(function (element) {
                            var index = gridCheckCu.findIndex(function (x) { return x.YeuCauTiepNhanId == element; });
                            if (index != -1) {
                                var dd = gridCheckCu.filter(function (sp) { return sp.YeuCauTiepNhanId == element; }); //.IsCheckRowItem = false
                                gridCheckCu.splice(gridCheckCu.findIndex(function (x) { return x.YeuCauTiepNhanId == element; }), 1);
                            }
                        });
                        gridCheckCu.forEach(function (element) {
                            element.IsCheckRowItem = false;
                            element.ListYeuCauDuocPhamBenhViens.forEach(function (elements) {
                                elements.IsCheckRowItem = false;
                            });
                            _this.getDataSourceChild(element.ListYeuCauDuocPhamBenhViens);
                        });
                    }
                    else {
                        this.gridDataSource.data.forEach(function (element) {
                            element.IsCheckRowItem = false;
                            element.ListYeuCauDuocPhamBenhViens.forEach(function (elements) {
                                elements.IsCheckRowItem = false;
                            });
                            _this.getDataSourceChild(element.ListYeuCauDuocPhamBenhViens);
                        });
                    }
                };
                PhieuLinhTrucTiepChoGoiSharedComponent.prototype.OnDataBound = function (dataChild) {
                };
                PhieuLinhTrucTiepChoGoiSharedComponent.prototype.changeTuNgay = function (event) {
                    this.timkiem();
                };
                PhieuLinhTrucTiepChoGoiSharedComponent.prototype.changeDenNgay = function (event) {
                    this.timkiem();
                };
                PhieuLinhTrucTiepChoGoiSharedComponent.prototype.timkiem = function () {
                    var _this = this;
                    this.loadingPage();
                    this.apiService.get("YeuCauLinhDuocPham/GetALL?id=" + this.yeuCauLinhDuocPhamId).subscribe(function (resultData) {
                        if (resultData != undefined && resultData != null) {
                            _this.phieuLinhTrucTiep.KeyId = resultData.KhoXuatId;
                            _this.phieuLinhTrucTiep.DisplayName = resultData.TenKhoXuat;
                            var vo_2 = {
                                KhoLinhId: resultData.KhoXuatId,
                                YeuCauLinhDuocPhamId: _this.yeuCauLinhDuocPhamId,
                                TuNgay: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(_this.searchDanhSachThongDuocPham.TuNgay, "mm/dd/yyyy"),
                                DenNgay: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(_this.searchDanhSachThongDuocPham.DenNgay, "mm/dd/yyyy")
                            };
                            _this.apiService.post('YeuCauLinhDuocPham/ThongTinLinhTuKhoDaTao?idYeuCauLinhDP=' + _this.yeuCauLinhDuocPhamId).subscribe(function (resultDatas) {
                                _this.linhTrucTiepDuocPhamObject.NhanVienYeuCauId = resultDatas[0].NhanVienYeuCauId;
                                _this.linhTrucTiepDuocPhamObject.KhoNhapId = resultDatas[0].LinhVePhongId;
                                _this.LinhVeKhoa = resultDatas[0].LinhVeKhoa;
                                _this.nguoiYeuCau = resultDatas[0].NguoiYeuCau;
                                var dataTime = resultDatas[0].NgayYeuCau;
                                _this.ngayYeuCau = dataTime;
                                _this.ghiChu = resultDatas[0].GhiChu;
                                _this.apiService.post('YeuCauLinhDuocPham/GetDataGridYeuCauLinhDuocPhamLuuTamThoi', vo_2).subscribe(function (resultData) {
                                    _this.gridDataSource = {
                                        data: resultData,
                                        total: resultData.length
                                    };
                                    // let arrayNull: any[] = [];
                                    // this.extCheckboxSelections(arrayNull);
                                    // this.gridCha.onSelectAllChange('unchecked');
                                    var STT = 1;
                                    resultData.forEach(function (element) {
                                        element.STT = STT;
                                        STT++;
                                    });
                                    resultData = resultData.sort(function (a, b) { return (a.STT > b.STT) ? 1 : -1; });
                                    _this.setDataGridView();
                                    _this.setDataGridView();
                                    _this.closePopupLoadingData();
                                }, function (err) {
                                    _this.closePopupLoadingData();
                                    _this.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                });
                            }, function (err) {
                                _this.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                            });
                        }
                    }, function (err) {
                        _this.closePopupLoadingData();
                        _this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                    });
                };
                PhieuLinhTrucTiepChoGoiSharedComponent.prototype.checkboxGridChild = function (event, dataItem) {
                    var _this = this;
                    if (event == true) {
                        dataItem.IsCheckRowItem = true;
                    }
                    else {
                        dataItem.IsCheckRowItem = false;
                    }
                    //   let mySelection: number[] = [];
                    this.gridDataSource.data.forEach(function (element) {
                        if (dataItem.YeuCauTiepNhanId == element.Id) {
                            var inxdex = element.ListYeuCauDuocPhamBenhViens.findIndex(function (sp) { return sp.IsCheckRowItem == true; });
                            if (inxdex != -1) {
                                _this.checkChild = true;
                                var indexChange = element.ListYeuCauDuocPhamBenhViens.filter(function (sp) { return sp.Id == dataItem.Id; });
                                if (indexChange.length == 1) {
                                    indexChange.forEach(function (element) {
                                        element.IsCheckRowItem = event;
                                    });
                                }
                                var inxdex_3 = element.ListYeuCauDuocPhamBenhViens.filter(function (sp) { return sp.IsCheckRowItem == false; });
                                if (element.ListYeuCauDuocPhamBenhViens.length == inxdex_3.length) {
                                    if (!jQuery('#' + _this.linhTrucTiepMasterName + 'selectCheckboxId' + element.Id).prop('unchecked')) {
                                        jQuery('#' + _this.linhTrucTiepMasterName + 'selectCheckboxId' + element.Id).trigger('click');
                                    }
                                }
                                if (!jQuery('#' + _this.linhTrucTiepMasterName + 'selectCheckboxId' + element.Id).prop('checked')) {
                                    jQuery('#' + _this.linhTrucTiepMasterName + 'selectCheckboxId' + element.Id).trigger('click');
                                }
                                return;
                            }
                            else {
                                _this.checkChild = true;
                                var inxdex_4 = element.ListYeuCauDuocPhamBenhViens.filter(function (sp) { return sp.IsCheckRowItem == false; });
                                if (element.ListYeuCauDuocPhamBenhViens.length == inxdex_4.length) {
                                    if (!jQuery('#' + _this.linhTrucTiepMasterName + 'selectCheckboxId' + element.Id).prop('unchecked')) {
                                        jQuery('#' + _this.linhTrucTiepMasterName + 'selectCheckboxId' + element.Id).trigger('click');
                                    }
                                }
                                return;
                            }
                        }
                    });
                    //this.checkChild = false;
                };
                PhieuLinhTrucTiepChoGoiSharedComponent.prototype.selectCheckBox = function (arr) {
                    var _this = this;
                    if (arr.length != 0) {
                        arr.forEach(function (element) {
                            if (!jQuery('#' + _this.linhTrucTiepMasterName + 'selectCheckboxId' + element).prop('checked')) {
                                jQuery('#' + _this.linhTrucTiepMasterName + 'selectCheckboxId' + element).trigger('click');
                            }
                        });
                    }
                };
                PhieuLinhTrucTiepChoGoiSharedComponent.prototype.checkboxGridCha = function (event, dataItem) {
                    if (event == true) {
                        dataItem.IsCheckRowItem = true;
                    }
                };
                PhieuLinhTrucTiepChoGoiSharedComponent.prototype.getDataSourceChild = function (parentItem) {
                    return {
                        data: parentItem,
                        total: parentItem.length
                    };
                };
                PhieuLinhTrucTiepChoGoiSharedComponent.prototype.gridDichVuDuocCheck = function () {
                    var _this = this;
                    var yeuCauDuocPhamBenhViens = [];
                    this.gridDataSource.data.forEach(function (element) {
                        if (element.IsCheckRowItem == true) {
                            element.ListYeuCauDuocPhamBenhViens.forEach(function (item) {
                                if (item.IsCheckRowItem == true) {
                                    var index = _this.linhTrucTiepDuocPhamObject.YeuCauDuocPhamBenhIds.findIndex(function (sp) { return sp == item.Id; });
                                    if (index == -1) {
                                        yeuCauDuocPhamBenhViens.push(item);
                                    }
                                }
                            });
                        }
                    });
                    return yeuCauDuocPhamBenhViens;
                };
                PhieuLinhTrucTiepChoGoiSharedComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang lưu dữ liệu..." },
                    });
                };
                PhieuLinhTrucTiepChoGoiSharedComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                PhieuLinhTrucTiepChoGoiSharedComponent.prototype.getSharedData = function () {
                    var _this = this;
                    //thong tin login 
                    this.linhTrucTiepDuocPhamObject.YeuCauLinhDuocPhamId = this.yeuCauLinhDuocPhamId;
                    this.validationErrors = [];
                    this.linhTrucTiepDuocPhamObject.GhiChu = this.ghiChu;
                    //-----------------xử lý phiếu linh từ ngày - đến ngày---------------------//
                    //----Từ ngày-------------------------------------------------------------//
                    if (this.searchDanhSachThongDuocPham.TuNgay != null) {
                        this.linhTrucTiepDuocPhamObject.ThoiDiemLinhTongHopTuNgay = this.searchDanhSachThongDuocPham.TuNgay;
                    }
                    else {
                        var yeuCauDuocPhamBenhViens = [];
                        yeuCauDuocPhamBenhViens = this.gridDichVuDuocCheck();
                        if (yeuCauDuocPhamBenhViens.length != 0) {
                            var listSortNhoNhatDenLonNhat = yeuCauDuocPhamBenhViens.sort(function (a, b) { return (new Date(a.NgayDieuTri) > new Date(b.NgayDieuTri)) ? 1 : -1; });
                            this.linhTrucTiepDuocPhamObject.ThoiDiemLinhTongHopTuNgay = new Date(listSortNhoNhatDenLonNhat[0].NgayDieuTri);
                        }
                    }
                    //----đến ngày-------------------------------------------------------------//
                    if (this.searchDanhSachThongDuocPham.DenNgay != null) {
                        this.linhTrucTiepDuocPhamObject.ThoiDiemLinhTongHopDenNgay = this.searchDanhSachThongDuocPham.DenNgay;
                    }
                    else {
                        this.linhTrucTiepDuocPhamObject.ThoiDiemLinhTongHopDenNgay = null;
                    }
                    //--------------end xử lý phiếu linh từ ngày - đến ngày---------------------//
                    if (this.phieuLinhTrucTiep.KeyId != null) {
                        this.linhTrucTiepDuocPhamObject.KhoXuatId = this.phieuLinhTrucTiep.KeyId;
                    }
                    // yeucau duoc pham benh vien
                    if (this.gridDataSource.data == null || this.gridDataSource.data == undefined) {
                        this.validationErrors = [];
                    }
                    else {
                        this.linhTrucTiepDuocPhamObject.YeuCauDuocPhamBenhViensTT = new Array();
                        this.linhTrucTiepDuocPhamObject.YeuCauDuocPhamBenhIds = new Array();
                        this.linhTrucTiepDuocPhamObject.DanhSachDuocPhamTonKhongDus = new Array();
                        this.gridDataSource.data.forEach(function (element) {
                            if (element.IsCheckRowItem == true) {
                                element.ListYeuCauDuocPhamBenhViens.forEach(function (item) {
                                    if (item.IsCheckRowItem == true) {
                                        var index = _this.linhTrucTiepDuocPhamObject.YeuCauDuocPhamBenhIds.findIndex(function (sp) { return sp == item.Id; });
                                        if (index == -1) {
                                            _this.linhTrucTiepDuocPhamObject.YeuCauDuocPhamBenhIds.push(item.Id);
                                            var dpKhongDuTon = {
                                                DuocPhamId: item.DuocPhamId,
                                                TenDuocPham: item.TenDuocPham,
                                                SoLuongTon: item.SoLuongTon,
                                                SoLuongYeuCau: item.SLYeuCau
                                            };
                                            _this.linhTrucTiepDuocPhamObject.DanhSachDuocPhamTonKhongDus.push(dpKhongDuTon);
                                        }
                                    }
                                });
                            }
                        });
                    }
                    this.setDataGridView();
                    return this.linhTrucTiepDuocPhamObject;
                };
                return PhieuLinhTrucTiepChoGoiSharedComponent;
            }());
            PhieuLinhTrucTiepChoGoiSharedComponent.ctorParameters = function () { return [
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkBoxChildTemplate', { static: true })
            ], PhieuLinhTrucTiepChoGoiSharedComponent.prototype, "checkBoxChildTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
            ], PhieuLinhTrucTiepChoGoiSharedComponent.prototype, "sttTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridCreate', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__["GridComponent"], static: false })
            ], PhieuLinhTrucTiepChoGoiSharedComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridCha', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__["GridComponent"], static: false })
            ], PhieuLinhTrucTiepChoGoiSharedComponent.prototype, "gridCha", void 0);
            PhieuLinhTrucTiepChoGoiSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-phieu-linh-truc-tiep-cho-goi-shared',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-linh-truc-tiep-cho-goi-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-truc-tiep-cho-goi-shared/phieu-linh-truc-tiep-cho-goi-shared.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-linh-truc-tiep-cho-goi-shared.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-truc-tiep-cho-goi-shared/phieu-linh-truc-tiep-cho-goi-shared.component.scss")).default]
                })
            ], PhieuLinhTrucTiepChoGoiSharedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/popup-thong-bao-dp-khong-the-tao/popup-thong-bao-dp-khong-the-tao.component.scss": 
        /*!******************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/popup-thong-bao-dp-khong-the-tao/popup-thong-bao-dp-khong-the-tao.component.scss ***!
          \******************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3lldS1jYXUtbGluaC10aHVvYy9wb3B1cC10aG9uZy1iYW8tZHAta2hvbmctdGhlLXRhby9wb3B1cC10aG9uZy1iYW8tZHAta2hvbmctdGhlLXRhby5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/popup-thong-bao-dp-khong-the-tao/popup-thong-bao-dp-khong-the-tao.component.ts": 
        /*!****************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/popup-thong-bao-dp-khong-the-tao/popup-thong-bao-dp-khong-the-tao.component.ts ***!
          \****************************************************************************************************************************************************/
        /*! exports provided: PopupThongBaoDpKhongTheTaoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupThongBaoDpKhongTheTaoComponent", function () { return PopupThongBaoDpKhongTheTaoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var PopupThongBaoDpKhongTheTaoComponent = /** @class */ (function () {
                function PopupThongBaoDpKhongTheTaoComponent(data, dialogRef) {
                    this.data = data;
                    this.dialogRef = dialogRef;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
                    this.gridDataSource = {
                        data: [],
                        total: 0
                    };
                    this.gridColumns = [];
                }
                PopupThongBaoDpKhongTheTaoComponent.prototype.ngOnInit = function () {
                    if (this.data != undefined) {
                        this.data.forEach(function (element) {
                        });
                        this.gridDataSource = {
                            data: this.data,
                            total: this.data.length
                        };
                    }
                    this.gridColumns = [
                        { Field: "TenDuocPham", Title: "Tên", Width: 100 },
                        { Field: "SoLuongTon", Title: "Tồn", Width: 100 },
                        { Field: "SoLuongYeuCau", Title: "SL yêu cầu", Width: 100 },
                    ];
                };
                PopupThongBaoDpKhongTheTaoComponent.prototype.Khong = function (item) {
                    if (item != undefined && item != null && item != "") {
                        this.close();
                    }
                };
                PopupThongBaoDpKhongTheTaoComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                PopupThongBaoDpKhongTheTaoComponent.prototype.Co = function (item) {
                    if (item != undefined && item != null && item != "") {
                        this.dialogRef.close(item);
                    }
                };
                return PopupThongBaoDpKhongTheTaoComponent;
            }());
            PopupThongBaoDpKhongTheTaoComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
            ]; };
            PopupThongBaoDpKhongTheTaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-popup-thong-bao-dp-khong-the-tao',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-thong-bao-dp-khong-the-tao.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/popup-thong-bao-dp-khong-the-tao/popup-thong-bao-dp-khong-the-tao.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-thong-bao-dp-khong-the-tao.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/popup-thong-bao-dp-khong-the-tao/popup-thong-bao-dp-khong-the-tao.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
            ], PopupThongBaoDpKhongTheTaoComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-bu/tao-phieu-linh-thuoc-bu.component.scss": 
        /*!************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-bu/tao-phieu-linh-thuoc-bu.component.scss ***!
          \************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".status-yeu-cau-linh {\n  margin-left: auto;\n}\n\n.status-yeu-cau-linh.ycl-cho-duyet {\n  color: orange;\n}\n\n.status-yeu-cau-linh.ycl-da-duyet {\n  color: green;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veWV1LWNhdS1saW5oLXRodW9jL3Rhby1waGlldS1saW5oLXRodW9jLWJ1L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFxkdW9jLXBoYW1cXHlldS1jYXUtbGluaC10aHVvY1xcdGFvLXBoaWV1LWxpbmgtdGh1b2MtYnVcXHRhby1waGlldS1saW5oLXRodW9jLWJ1LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS95ZXUtY2F1LWxpbmgtdGh1b2MvdGFvLXBoaWV1LWxpbmgtdGh1b2MtYnUvdGFvLXBoaWV1LWxpbmgtdGh1b2MtYnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS95ZXUtY2F1LWxpbmgtdGh1b2MvdGFvLXBoaWV1LWxpbmgtdGh1b2MtYnUvdGFvLXBoaWV1LWxpbmgtdGh1b2MtYnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHVzLXlldS1jYXUtbGluaCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtY2hvLWR1eWV0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWRhLWR1eWV0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSIsIi5zdGF0dXMteWV1LWNhdS1saW5oIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1jaG8tZHV5ZXQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtZGEtZHV5ZXQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-bu/tao-phieu-linh-thuoc-bu.component.ts": 
        /*!**********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-bu/tao-phieu-linh-thuoc-bu.component.ts ***!
          \**********************************************************************************************************************************/
        /*! exports provided: TaoPhieuLinhThuocBuComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaoPhieuLinhThuocBuComponent", function () { return TaoPhieuLinhThuocBuComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _phieu_linh_thuoc_bu_shared_phieu_linh_thuoc_bu_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../phieu-linh-thuoc-bu-shared/phieu-linh-thuoc-bu-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-shared/phieu-linh-thuoc-bu-shared.component.ts");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../yeu-cau-linh-thuoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/yeu-cau-linh-thuoc.model.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _phieu_linh_thuoc_bu_popup_phieu_linh_thuoc_bu_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../phieu-linh-thuoc-bu-popup/phieu-linh-thuoc-bu-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-popup/phieu-linh-thuoc-bu-popup.component.ts");
            /* harmony import */ var src_vex_services_url_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/@vex/services/url.service */ "./src/@vex/services/url.service.ts");
            var TaoPhieuLinhThuocBuComponent = /** @class */ (function () {
                function TaoPhieuLinhThuocBuComponent(apiService, dialog, notificationService, authService, router, ref, location, urlService, route) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.router = router;
                    this.ref = ref;
                    this.location = location;
                    this.urlService = urlService;
                    this.route = route;
                    this.yeuCauLinhDuocPham = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_13__["YeuCauLinhBuDuocPham"]();
                    this.loading = false;
                    this.popupLoadingData = null;
                    this.popupLoadingDataHoanThanh = null;
                    this.isDaTao = false;
                    this.isCreate = false;
                    this.hostingName = null;
                    this.flag = true;
                    this.trangThaiPhieuLinh = null;
                    this.inPhieuLinhBu = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_13__["PhieuLinhThuocThuong"]();
                }
                TaoPhieuLinhThuocBuComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__["DocumentType"].TaoYeuCauLinhBuDuocPham;
                    this.route
                        .queryParams
                        .subscribe(function (v) {
                        _this.stringJson = v;
                        _this.khoLinhId = _this.stringJson.KhoLinhId;
                        _this.khoLinhBuId = _this.stringJson.KhoBuId;
                    });
                    if (window.location.protocol == "http:") {
                        this.inPhieuLinhBu.HostingName = "http://" + window.location.host;
                    }
                    else {
                        this.inPhieuLinhBu.HostingName = "https://" + window.location.host;
                    }
                    this.urlService.previousUrl$
                        .subscribe(function (previousUrl) {
                        _this.previousUrl = previousUrl;
                    });
                };
                TaoPhieuLinhThuocBuComponent.prototype.guiPhieuLinhBu = function (daGui) {
                    var self = this;
                    self.yeuCauLinhDuocPham = self.shared.getSharedData();
                    if (self.yeuCauLinhDuocPham.YeuCauDuocPhamBenhViens.every(function (z) { return !z.CheckBox; })) {
                        if (daGui) {
                            self.notificationService.showError("Vui lòng chọn dược phẩm muốn gửi phiếu.");
                        }
                        else {
                            self.notificationService.showError("Vui lòng chọn dược phẩm muốn lưu phiếu.");
                        }
                    }
                    else {
                        var mess = "";
                        if (daGui) {
                            mess = "Bạn có muốn gửi phiếu lĩnh dược phẩm này không ?";
                        }
                        else {
                            mess = "Bạn có muốn lưu phiếu lĩnh dược phẩm này không ?";
                        }
                        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
                            disableClose: false,
                            width: "500px",
                            data: {
                                Title: "Xác nhận",
                                Message: mess,
                            },
                        }).afterClosed().subscribe(function (res) {
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
                };
                TaoPhieuLinhThuocBuComponent.prototype.xacNhanTaoPhieuLinh = function () {
                    var _this = this;
                    var self = this;
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Add)) {
                        self.yeuCauLinhDuocPham.DaGui = true;
                        self.loadingPage();
                        self.apiService.post("YeuCauLinhDuocPham/GuiPhieuLinhBu", self.yeuCauLinhDuocPham).subscribe(function (result) {
                            if (result != undefined && result != null) {
                                self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].ActionSuccessfully, ["Tạo phiếu lĩnh"]));
                                self.closePopupLoadingData();
                                self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
                                    disableClose: false,
                                    width: "500px",
                                    data: {
                                        Title: "Xác nhận in",
                                        Message: "Bạn có muốn in phiếu lĩnh dược phẩm này không ?",
                                    },
                                }).afterClosed().subscribe(function (res) {
                                    if (res == "Yes") {
                                        self.loadingPageHoanThanh();
                                        self.inPhieuLinhBu.Header = true;
                                        self.inPhieuLinhBu.YeuCauLinhDuocPhamId = result;
                                        self.inPhieuLinhBu.LoaiPhieuLinh = 2;
                                        self.apiService.post("YeuCauLinhDuocPham/InPhieuLinhBuDuocPham", self.inPhieuLinhBu).subscribe(function (resData) {
                                            if (resData != undefined && resData != null) {
                                                self.closePopupLoadingDataHoanThanh();
                                                self.inPhieuLinhBu.Header = false;
                                                self.dialog.open(_phieu_linh_thuoc_bu_popup_phieu_linh_thuoc_bu_popup_component__WEBPACK_IMPORTED_MODULE_18__["PhieuLinhThuocBuPopupComponent"], {
                                                    disableClose: false,
                                                    width: '1200px',
                                                    data: { Model: resData },
                                                }).afterClosed().subscribe(function () {
                                                    self.closePopupLoadingDataHoanThanh();
                                                    self.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
                                                });
                                            }
                                        }, function (err) {
                                            self.validationErrors = err.ValidationErrors;
                                            if (err.Message != "Validation Failed") {
                                                self.notificationService.showError(err.Message);
                                            }
                                            self.closePopupLoadingDataHoanThanh();
                                        });
                                    }
                                    else {
                                        _this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
                                    }
                                });
                            }
                            self.closePopupLoadingData();
                        }, function (err) {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                            self.closePopupLoadingData();
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                TaoPhieuLinhThuocBuComponent.prototype.xacNhanLuuPhieuLinh = function () {
                    var self = this;
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Add)) {
                        self.loadingPage();
                        self.apiService.post("YeuCauLinhDuocPham/GuiPhieuLinhBu", self.yeuCauLinhDuocPham).subscribe(function (result) {
                            if (result != undefined && result != null) {
                                self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].ActionSuccessfully, ["Lưu phiếu lĩnh"]));
                                self.closePopupLoadingData();
                                self.router.navigate(["/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/gui-lai-phieu-linh-thuoc-bu/" + result]);
                            }
                            self.closePopupLoadingData();
                        }, function (err) {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                            self.closePopupLoadingData();
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                TaoPhieuLinhThuocBuComponent.prototype.cancel = function () {
                    this.location.back();
                    // if (this.previousUrl.indexOf("duoc-pham-can-bu") >= 0) {
                    //   this.location.back();
                    // }
                    // else {
                    //   this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
                    // }
                };
                TaoPhieuLinhThuocBuComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang lưu dữ liệu..." },
                    });
                };
                TaoPhieuLinhThuocBuComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                TaoPhieuLinhThuocBuComponent.prototype.loadingPageHoanThanh = function () {
                    this.popupLoadingDataHoanThanh = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang tải dữ liệu..." },
                    });
                };
                TaoPhieuLinhThuocBuComponent.prototype.closePopupLoadingDataHoanThanh = function () {
                    if (this.popupLoadingDataHoanThanh != undefined && this.popupLoadingDataHoanThanh != null) {
                        this.popupLoadingDataHoanThanh.close();
                    }
                };
                TaoPhieuLinhThuocBuComponent.prototype.keyEvent = function (event) {
                    if (event.keyCode == 27 && !event.ctrlKey) {
                        //esc
                        this.cancel();
                        event.preventDefault();
                    }
                };
                TaoPhieuLinhThuocBuComponent.prototype.xemPhieuLinh = function () {
                    var _this = this;
                    var self = this;
                    self.yeuCauLinhDuocPham = self.shared.getSharedData();
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].View)) {
                        if (self.yeuCauLinhDuocPham.YeuCauDuocPhamBenhViens.every(function (z) { return !z.CheckBox; })) {
                            self.notificationService.showError("Vui lòng chọn dược phẩm muốn xem phiếu.");
                        }
                        else {
                            self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
                                disableClose: false,
                                width: "500px",
                                data: {
                                    Title: "Xác nhận in",
                                    Message: "Bạn có muốn xem trước in  phiếu lĩnh dược phẩm này không ?",
                                },
                            }).afterClosed().subscribe(function (res) {
                                if (res == "Yes") {
                                    self.loadingPageHoanThanh();
                                    var dataIn = {
                                        KhoLinhId: _this.khoLinhId,
                                        KhoLinhBuId: _this.khoLinhBuId,
                                        HostingName: "http://" + window.location.host,
                                        YeuCauDuocPhamBenhViens: _this.yeuCauLinhDuocPham.YeuCauDuocPhamBenhViens.filter(function (z) { return z.CheckBox; }),
                                    };
                                    self.apiService.post("YeuCauLinhDuocPham/InPhieuLinhBuDuocPhamXemTruoc", dataIn).subscribe(function (resData) {
                                        if (resData != undefined && resData != null) {
                                            self.closePopupLoadingDataHoanThanh();
                                            self.inPhieuLinhBu.Header = false;
                                            self.dialog.open(_phieu_linh_thuoc_bu_popup_phieu_linh_thuoc_bu_popup_component__WEBPACK_IMPORTED_MODULE_18__["PhieuLinhThuocBuPopupComponent"], {
                                                disableClose: false,
                                                width: '1200px',
                                                data: { Model: resData, showIn: false },
                                            }).afterClosed().subscribe(function () {
                                            });
                                        }
                                    }, function (err) {
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
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                return TaoPhieuLinhThuocBuComponent;
            }());
            TaoPhieuLinhThuocBuComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
                { type: src_vex_services_url_service__WEBPACK_IMPORTED_MODULE_19__["UrlService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_phieu_linh_thuoc_bu_shared_phieu_linh_thuoc_bu_shared_component__WEBPACK_IMPORTED_MODULE_3__["PhieuLinhThuocBuSharedComponent"], { static: true })
            ], TaoPhieuLinhThuocBuComponent.prototype, "shared", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])("document:keydown", ["$event"])
            ], TaoPhieuLinhThuocBuComponent.prototype, "keyEvent", null);
            TaoPhieuLinhThuocBuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-tao-phieu-linh-thuoc-bu',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tao-phieu-linh-thuoc-bu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-bu/tao-phieu-linh-thuoc-bu.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tao-phieu-linh-thuoc-bu.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-bu/tao-phieu-linh-thuoc-bu.component.scss")).default]
                })
            ], TaoPhieuLinhThuocBuComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-thuong/tao-phieu-linh-thuoc-thuong.component.scss": 
        /*!********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-thuong/tao-phieu-linh-thuoc-thuong.component.scss ***!
          \********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".status-yeu-cau-linh {\n  margin-left: auto;\n}\n\n.status-yeu-cau-linh.ycl-cho-duyet {\n  color: orange;\n}\n\n.status-yeu-cau-linh.ycl-da-duyet {\n  color: green;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veWV1LWNhdS1saW5oLXRodW9jL3Rhby1waGlldS1saW5oLXRodW9jLXRodW9uZy9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcZHVvYy1waGFtXFx5ZXUtY2F1LWxpbmgtdGh1b2NcXHRhby1waGlldS1saW5oLXRodW9jLXRodW9uZ1xcdGFvLXBoaWV1LWxpbmgtdGh1b2MtdGh1b25nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS95ZXUtY2F1LWxpbmgtdGh1b2MvdGFvLXBoaWV1LWxpbmgtdGh1b2MtdGh1b25nL3Rhby1waGlldS1saW5oLXRodW9jLXRodW9uZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3lldS1jYXUtbGluaC10aHVvYy90YW8tcGhpZXUtbGluaC10aHVvYy10aHVvbmcvdGFvLXBoaWV1LWxpbmgtdGh1b2MtdGh1b25nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXR1cy15ZXUtY2F1LWxpbmgge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWNoby1kdXlldCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1kYS1kdXlldCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn0iLCIuc3RhdHVzLXlldS1jYXUtbGluaCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtY2hvLWR1eWV0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWRhLWR1eWV0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-thuong/tao-phieu-linh-thuoc-thuong.component.ts": 
        /*!******************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-thuong/tao-phieu-linh-thuoc-thuong.component.ts ***!
          \******************************************************************************************************************************************/
        /*! exports provided: TaoPhieuLinhThuocThuongComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaoPhieuLinhThuocThuongComponent", function () { return TaoPhieuLinhThuocThuongComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _phieu_linh_thuoc_thuong_shared_phieu_linh_thuoc_thuong_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../phieu-linh-thuoc-thuong-shared/phieu-linh-thuoc-thuong-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-shared/phieu-linh-thuoc-thuong-shared.component.ts");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../yeu-cau-linh-thuoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/yeu-cau-linh-thuoc.model.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _phieu_linh_thuoc_thuong_popup_phieu_linh_thuoc_thuong_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../phieu-linh-thuoc-thuong-popup/phieu-linh-thuoc-thuong-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-popup/phieu-linh-thuoc-thuong-popup.component.ts");
            /* harmony import */ var _vat_tu_yeu_cau_linh_vat_tu_yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model.ts");
            var TaoPhieuLinhThuocThuongComponent = /** @class */ (function () {
                function TaoPhieuLinhThuocThuongComponent(apiService, dialog, notificationService, authService, router, ref, location) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.router = router;
                    this.ref = ref;
                    this.location = location;
                    this.yeuCauLinhDuocPham = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_8__["YeuCauLinhDuocPham"]();
                    this.isCreate = false;
                    this.hostingName = null;
                    this.trangThaiPhieuLinh = null;
                    this.inPhieuLinhThuong = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_8__["PhieuLinhThuocThuong"]();
                    this.trangThaiVo = new _vat_tu_yeu_cau_linh_vat_tu_yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_19__["TrangThaiTaoPhieuLinh"]();
                    this.loading = false;
                }
                TaoPhieuLinhThuocThuongComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_17__["DocumentType"].TaoYeuCauLinhThuongDuocPham;
                    if (window.location.protocol == "http:") {
                        this.inPhieuLinhThuong.HostingName = "http://" + window.location.host;
                    }
                    else {
                        this.inPhieuLinhThuong.HostingName = "https://" + window.location.host;
                    }
                    this.trangThaiVo.TrangThai = null;
                };
                TaoPhieuLinhThuocThuongComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang lưu dữ liệu..." },
                    });
                };
                TaoPhieuLinhThuocThuongComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                TaoPhieuLinhThuocThuongComponent.prototype.guiPhieuLinhThuong = function () {
                    var _this = this;
                    var self = this;
                    self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmComponent"], {
                        disableClose: false,
                        width: "500px",
                        data: {
                            Title: "Xác nhận",
                            Message: "Bạn có muốn gửi phiếu lĩnh dược phẩm này không ?",
                        },
                    }).afterClosed().subscribe(function (res) {
                        if (res == "Yes") {
                            self.yeuCauLinhDuocPham = self.shared.getSharedData();
                            self.validationErrors = [];
                            self.ref.detectChanges();
                            if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Add)) {
                                self.yeuCauLinhDuocPham.DaGui = true;
                                self.loadingPage();
                                self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets = self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.sort(function (a, b) { return (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1; });
                                self.apiService.post("YeuCauLinhDuocPham/GuiPhieuLinhThuong", self.yeuCauLinhDuocPham).subscribe(function (result) {
                                    if (result != undefined && result != null) {
                                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__["SystemMessage"].ActionSuccessfully, ["Gửi"]));
                                        self.closePopupLoadingData();
                                        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmComponent"], {
                                            disableClose: false,
                                            width: "500px",
                                            data: {
                                                Title: "Xác nhận in",
                                                Message: "Bạn có muốn in phiếu lĩnh dược phẩm này không ?",
                                            },
                                        }).afterClosed().subscribe(function (res) {
                                            if (res == "Yes") {
                                                self.loadingPage();
                                                self.inPhieuLinhThuong.Header = true;
                                                self.inPhieuLinhThuong.YeuCauLinhDuocPhamId = result;
                                                self.inPhieuLinhThuong.LoaiPhieuLinh = 1;
                                                self.apiService.post("YeuCauLinhDuocPham/InPhieuLinhThuongDuocPham", self.inPhieuLinhThuong).subscribe(function (resData) {
                                                    if (resData != undefined && resData != null) {
                                                        self.inPhieuLinhThuong.Header = false;
                                                        self.closePopupLoadingData();
                                                        self.dialog.open(_phieu_linh_thuoc_thuong_popup_phieu_linh_thuoc_thuong_popup_component__WEBPACK_IMPORTED_MODULE_18__["PhieuLinhThuocThuongPopupComponent"], {
                                                            disableClose: false,
                                                            width: '1200px',
                                                            data: resData,
                                                        }).afterClosed().subscribe(function () {
                                                            self.closePopupLoadingData();
                                                            self.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
                                                        });
                                                    }
                                                }, function (err) {
                                                    self.validationErrors = err.ValidationErrors;
                                                    if (err.Message != "Validation Failed") {
                                                        self.notificationService.showError(err.Message);
                                                    }
                                                    self.closePopupLoadingData();
                                                });
                                            }
                                            else {
                                                _this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
                                            }
                                        });
                                    }
                                }, function (err) {
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
                };
                TaoPhieuLinhThuocThuongComponent.prototype.luuPhieuLinhThuong = function () {
                    var self = this;
                    self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmComponent"], {
                        disableClose: false,
                        width: "500px",
                        data: {
                            Title: "Xác nhận",
                            Message: "Bạn có muốn lưu phiếu lĩnh dược phẩm này không ?",
                        },
                    }).afterClosed().subscribe(function (res) {
                        if (res == "Yes") {
                            self.yeuCauLinhDuocPham = self.shared.getSharedData();
                            self.validationErrors = [];
                            self.ref.detectChanges();
                            if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Add)) {
                                self.yeuCauLinhDuocPham.DaGui = false;
                                self.loadingPage();
                                self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets = self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.sort(function (a, b) { return (a.Nhom > b.Nhom || a.STT > b.STT) ? 1 : -1; });
                                self.apiService.post("YeuCauLinhDuocPham/GuiPhieuLinhThuong", self.yeuCauLinhDuocPham).subscribe(function (result) {
                                    if (result != undefined && result != null) {
                                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                        self.closePopupLoadingData();
                                        self.router.navigate(["/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/gui-lai-phieu-linh-thuoc-thuong/" + result]);
                                    }
                                }, function (err) {
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
                };
                TaoPhieuLinhThuocThuongComponent.prototype.cancel = function () {
                    //this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
                    this.location.back();
                };
                TaoPhieuLinhThuocThuongComponent.prototype.keyEvent = function (event) {
                    if (event.keyCode == 27 && !event.ctrlKey) {
                        //esc
                        this.cancel();
                        event.preventDefault();
                    }
                };
                return TaoPhieuLinhThuocThuongComponent;
            }());
            TaoPhieuLinhThuocThuongComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_phieu_linh_thuoc_thuong_shared_phieu_linh_thuoc_thuong_shared_component__WEBPACK_IMPORTED_MODULE_3__["PhieuLinhThuocThuongSharedComponent"], { static: true })
            ], TaoPhieuLinhThuocThuongComponent.prototype, "shared", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])("document:keydown", ["$event"])
            ], TaoPhieuLinhThuocThuongComponent.prototype, "keyEvent", null);
            TaoPhieuLinhThuocThuongComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-tao-phieu-linh-thuoc-thuong',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tao-phieu-linh-thuoc-thuong.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-thuong/tao-phieu-linh-thuoc-thuong.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tao-phieu-linh-thuoc-thuong.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-thuong/tao-phieu-linh-thuoc-thuong.component.scss")).default]
                })
            ], TaoPhieuLinhThuocThuongComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-truc-tiep/tao-phieu-linh-thuoc-truc-tiep.component.scss": 
        /*!**************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-truc-tiep/tao-phieu-linh-thuoc-truc-tiep.component.scss ***!
          \**************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".align-right-fx {\n  margin-left: auto;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veWV1LWNhdS1saW5oLXRodW9jL3Rhby1waGlldS1saW5oLXRodW9jLXRydWMtdGllcC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcZHVvYy1waGFtXFx5ZXUtY2F1LWxpbmgtdGh1b2NcXHRhby1waGlldS1saW5oLXRodW9jLXRydWMtdGllcFxcdGFvLXBoaWV1LWxpbmgtdGh1b2MtdHJ1Yy10aWVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS95ZXUtY2F1LWxpbmgtdGh1b2MvdGFvLXBoaWV1LWxpbmgtdGh1b2MtdHJ1Yy10aWVwL3Rhby1waGlldS1saW5oLXRodW9jLXRydWMtdGllcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veWV1LWNhdS1saW5oLXRodW9jL3Rhby1waGlldS1saW5oLXRodW9jLXRydWMtdGllcC90YW8tcGhpZXUtbGluaC10aHVvYy10cnVjLXRpZXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufSIsIi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-truc-tiep/tao-phieu-linh-thuoc-truc-tiep.component.ts": 
        /*!************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-truc-tiep/tao-phieu-linh-thuoc-truc-tiep.component.ts ***!
          \************************************************************************************************************************************************/
        /*! exports provided: TaoPhieuLinhThuocTrucTiepComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaoPhieuLinhThuocTrucTiepComponent", function () { return TaoPhieuLinhThuocTrucTiepComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _phieu_linh_thuoc_truc_tiep_shared_phieu_linh_thuoc_truc_tiep_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../phieu-linh-thuoc-truc-tiep-shared/phieu-linh-thuoc-truc-tiep-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-shared/phieu-linh-thuoc-truc-tiep-shared.component.ts");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../yeu-cau-linh-thuoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/yeu-cau-linh-thuoc.model.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _phieu_linh_thuoc_truc_tiep_popup_phieu_linh_thuoc_truc_tiep_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../phieu-linh-thuoc-truc-tiep-popup/phieu-linh-thuoc-truc-tiep-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-popup/phieu-linh-thuoc-truc-tiep-popup.component.ts");
            /* harmony import */ var src_vex_services_url_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/@vex/services/url.service */ "./src/@vex/services/url.service.ts");
            /* harmony import */ var _popup_thong_bao_dp_khong_the_tao_popup_thong_bao_dp_khong_the_tao_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../popup-thong-bao-dp-khong-the-tao/popup-thong-bao-dp-khong-the-tao.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/popup-thong-bao-dp-khong-the-tao/popup-thong-bao-dp-khong-the-tao.component.ts");
            /* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");
            var TaoPhieuLinhThuocTrucTiepComponent = /** @class */ (function () {
                function TaoPhieuLinhThuocTrucTiepComponent(apiService, dialog, notificationService, authService, router, 
                // private ref: ChangeDetectorRef, private location: Location,
                route, ref, location, urlService) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.router = router;
                    this.route = route;
                    this.ref = ref;
                    this.location = location;
                    this.urlService = urlService;
                    this.yeuCauLinhDuocPham = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_13__["LinhTrucTiepDuocPham"]();
                    this.loading = false;
                    this.popupLoadingData = null;
                    this.inPhieuLinhTrucTiep = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_13__["PhieuLinhThuocTrucTiep"]();
                    this.IdKhoLinh = 0;
                    this.groups = [
                        {
                            field: "DuocPhamId",
                            aggregates: [
                                { field: 'SoLuongYeuCau', aggregate: 'sum' },
                            ],
                        },
                    ];
                    this.state = {
                        group: this.groups,
                    };
                }
                TaoPhieuLinhThuocTrucTiepComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__["DocumentType"].TaoYeuCauLinhTrucTiepDuocPham;
                    this.IdKhoLinh = this.route.snapshot.params.KhoLinhId;
                    this.route
                        .queryParams
                        .subscribe(function (v) {
                        _this.trangThai = v;
                    });
                    if (window.location.protocol == "http:") {
                        this.inPhieuLinhTrucTiep.Hosting = "http://" + window.location.host;
                    }
                    else {
                        this.inPhieuLinhTrucTiep.Hosting = "https://" + window.location.host;
                    }
                    this.urlService.previousUrl$
                        .subscribe(function (previousUrl) {
                        _this.previousUrl = previousUrl;
                    });
                };
                TaoPhieuLinhThuocTrucTiepComponent.prototype.create = function (goi) {
                    var _this = this;
                    var messageGoi = "Bạn có muốn tạo phiếu phiếu lĩnh dược phẩm này không ?";
                    var messageLuu = "Bạn có muốn tạo phiếu phiếu lĩnh dược phẩm này không ?";
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Add)) {
                        self.closePopupLoadingData();
                        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
                            disableClose: false,
                            width: "500px",
                            data: {
                                Title: "Xác nhận",
                                Message: goi == true ? messageGoi : messageLuu,
                            },
                        }).afterClosed().subscribe(function (res) {
                            if (res == "Yes") {
                                self.yeuCauLinhDuocPham = self.shared.getSharedData();
                                self.yeuCauLinhDuocPham.Goi = goi;
                                var kiemTraCoDuocPhamKhongDuTon = _this.getItemKhongDuTon(self.yeuCauLinhDuocPham.DanhSachDuocPhamTonKhongDus);
                                self.closePopupLoadingData();
                                self.validationErrors = [];
                                self.ref.detectChanges();
                                if (kiemTraCoDuocPhamKhongDuTon.length == 0) {
                                    _this.newcreate();
                                }
                                else {
                                    self.dialog.open(_popup_thong_bao_dp_khong_the_tao_popup_thong_bao_dp_khong_the_tao_component__WEBPACK_IMPORTED_MODULE_20__["PopupThongBaoDpKhongTheTaoComponent"], {
                                        disableClose: false,
                                        width: '500px',
                                        data: kiemTraCoDuocPhamKhongDuTon,
                                    }).afterClosed().subscribe(function (res) {
                                        if (res == "Yes") {
                                            _this.newcreate();
                                        }
                                    });
                                }
                            }
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                TaoPhieuLinhThuocTrucTiepComponent.prototype.cancel = function () {
                    this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc'], { queryParams: { holdQuery: true } });
                };
                TaoPhieuLinhThuocTrucTiepComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang lưu dữ liệu..." },
                    });
                };
                TaoPhieuLinhThuocTrucTiepComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                TaoPhieuLinhThuocTrucTiepComponent.prototype.xemPhieuLinh = function () {
                    var _this = this;
                    var self = this;
                    self.closePopupLoadingData();
                    self.yeuCauLinhDuocPham = self.shared.getSharedData();
                    if (self.yeuCauLinhDuocPham.YeuCauDuocPhamBenhIds.length == 0) {
                        self.notificationService.showError("Chưa chọn thuốc để in.");
                    }
                    else {
                        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
                            disableClose: false,
                            width: "500px",
                            data: {
                                Title: "Xác nhận",
                                Message: "Bạn có muốn xem trước phiếu lĩnh dược phẩm này không ?",
                            },
                        }).afterClosed().subscribe(function (res) {
                            if (res == "Yes") {
                                self.closePopupLoadingData();
                                self.validationErrors = [];
                                self.ref.detectChanges();
                                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Add)) {
                                    self.loadingPage();
                                    var objInDuocPhamXemTruoc = new _yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_13__["XemTruocPhieuLinhThuocTrucTiep"]();
                                    // objInDuocPhamXemTruoc.Header = true;
                                    if (window.location.protocol == "http:") {
                                        objInDuocPhamXemTruoc.Hosting = "http://" + window.location.host;
                                    }
                                    else {
                                        objInDuocPhamXemTruoc.Hosting = "https://" + window.location.host;
                                    }
                                    objInDuocPhamXemTruoc.YeuCauDuocPhamBenhVienIds = self.yeuCauLinhDuocPham.YeuCauDuocPhamBenhIds;
                                    objInDuocPhamXemTruoc.KhoLinhId = parseInt(_this.trangThai.KhoLinhId);
                                    objInDuocPhamXemTruoc.ThoiDiemLinhTongHopTuNgay = self.yeuCauLinhDuocPham.ThoiDiemLinhTongHopTuNgay;
                                    objInDuocPhamXemTruoc.ThoiDiemLinhTongHopDenNgay = self.yeuCauLinhDuocPham.ThoiDiemLinhTongHopDenNgay;
                                    self.apiService.post("YeuCauLinhDuocPham/XemTruocInPhieuLinhTrucTiepDuocPham", objInDuocPhamXemTruoc).subscribe(function (resData) {
                                        if (resData != undefined && resData != null) {
                                            self.inPhieuLinhTrucTiep.Header = false;
                                            self.dialog.open(_phieu_linh_thuoc_truc_tiep_popup_phieu_linh_thuoc_truc_tiep_popup_component__WEBPACK_IMPORTED_MODULE_18__["PhieuLinhThuocTrucTiepPopupComponent"], {
                                                disableClose: false,
                                                width: '1200px',
                                                data: { Model: resData, showIn: false },
                                            }).afterClosed().subscribe(function () {
                                                self.closePopupLoadingData();
                                            });
                                        }
                                    }, function (err) {
                                        self.validationErrors = err.ValidationErrors;
                                        if (err.Message != "Validation Failed") {
                                            self.notificationService.showError(err.Message);
                                        }
                                        self.closePopupLoadingData();
                                    });
                                }
                                else {
                                    self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].UnAuthorizedMessage);
                                }
                            }
                            // else{
                            //   this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
                            // }
                        });
                    }
                };
                TaoPhieuLinhThuocTrucTiepComponent.prototype.getItemKhongDuTon = function (danhSachYeuCauDuocPhamBenhVien) {
                    var data = [];
                    var dataKhongChoTao = [];
                    var dataList = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_21__["process"])(danhSachYeuCauDuocPhamBenhVien, this.state);
                    dataList.data.forEach(function (element) {
                        var tongSlYeuCau = 0;
                        var tenDuocPham = "";
                        var slTon = 0;
                        if (element.items.length != 0) {
                            element.items.forEach(function (element) {
                                tongSlYeuCau += element.SoLuongYeuCau;
                                tenDuocPham = element.TenDuocPham;
                                slTon = element.SoLuongTon;
                            });
                        }
                        var objGroup = {
                            DuocPhamId: element.value,
                            TenDuocPham: tenDuocPham,
                            SoLuongYeuCau: tongSlYeuCau,
                            SoLuongTon: slTon
                        };
                        data.push(objGroup);
                        var dataSLKhongChoTao = data.filter(function (d) { return d.SoLuongTon < d.SoLuongYeuCau; });
                        if (dataSLKhongChoTao.length != 0) {
                            dataSLKhongChoTao.forEach(function (element) {
                                dataKhongChoTao.push(element);
                            });
                        }
                    });
                    return dataKhongChoTao;
                };
                TaoPhieuLinhThuocTrucTiepComponent.prototype.newcreate = function () {
                    var _this = this;
                    var self = this;
                    self.loadingPage();
                    self.apiService.post("YeuCauLinhDuocPham/GuiPhieuLinhTrucTiep", self.yeuCauLinhDuocPham).subscribe(function (result) {
                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                        if (result != undefined && result != null) {
                            self.closePopupLoadingData();
                            self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
                                disableClose: false,
                                width: "500px",
                                data: {
                                    Title: "Xác nhận",
                                    Message: "Bạn có muốn in phiếu phiếu lĩnh dược phẩm này không ?",
                                },
                            }).afterClosed().subscribe(function (res) {
                                if (res == "Yes") {
                                    self.loadingPage();
                                    self.inPhieuLinhTrucTiep.Header = true;
                                    self.inPhieuLinhTrucTiep.TrangThaiIn = true;
                                    self.inPhieuLinhTrucTiep.YeuCauLinhDuocPhamId = result;
                                    self.inPhieuLinhTrucTiep.LoaiPhieuLinh = 0;
                                    self.apiService.post("YeuCauLinhDuocPham/InPhieuLinhTrucTiepDuocPham", self.inPhieuLinhTrucTiep).subscribe(function (resData) {
                                        if (resData != undefined && resData != null) {
                                            self.inPhieuLinhTrucTiep.Header = false;
                                            self.dialog.open(_phieu_linh_thuoc_truc_tiep_popup_phieu_linh_thuoc_truc_tiep_popup_component__WEBPACK_IMPORTED_MODULE_18__["PhieuLinhThuocTrucTiepPopupComponent"], {
                                                disableClose: false,
                                                width: '1200px',
                                                data: { Model: resData },
                                            }).afterClosed().subscribe(function () {
                                                self.closePopupLoadingData();
                                                _this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
                                            });
                                        }
                                    }, function (err) {
                                        self.validationErrors = err.ValidationErrors;
                                        if (err.Message != "Validation Failed") {
                                            self.notificationService.showError(err.Message);
                                        }
                                        self.closePopupLoadingData();
                                    });
                                }
                                else {
                                    _this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
                                }
                            });
                        }
                    }, function (err) {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                        self.closePopupLoadingData();
                    });
                };
                return TaoPhieuLinhThuocTrucTiepComponent;
            }());
            TaoPhieuLinhThuocTrucTiepComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
                { type: src_vex_services_url_service__WEBPACK_IMPORTED_MODULE_19__["UrlService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_phieu_linh_thuoc_truc_tiep_shared_phieu_linh_thuoc_truc_tiep_shared_component__WEBPACK_IMPORTED_MODULE_3__["PhieuLinhThuocTrucTiepSharedComponent"], { static: true })
            ], TaoPhieuLinhThuocTrucTiepComponent.prototype, "shared", void 0);
            TaoPhieuLinhThuocTrucTiepComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-tao-phieu-linh-thuoc-truc-tiep',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tao-phieu-linh-thuoc-truc-tiep.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-truc-tiep/tao-phieu-linh-thuoc-truc-tiep.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tao-phieu-linh-thuoc-truc-tiep.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-truc-tiep/tao-phieu-linh-thuoc-truc-tiep.component.scss")).default]
                })
            ], TaoPhieuLinhThuocTrucTiepComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/yeu-cau-linh-thuoc-routing.module.ts": 
        /*!**********************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/yeu-cau-linh-thuoc-routing.module.ts ***!
          \**********************************************************************************************************/
        /*! exports provided: YeuCauLinhThuocRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauLinhThuocRoutingModule", function () { return YeuCauLinhThuocRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _danh_sach_yeu_cau_linh_thuoc_danh_sach_yeu_cau_linh_thuoc_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./danh-sach-yeu-cau-linh-thuoc/danh-sach-yeu-cau-linh-thuoc.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/danh-sach-yeu-cau-linh-thuoc/danh-sach-yeu-cau-linh-thuoc.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _tao_phieu_linh_thuoc_thuong_tao_phieu_linh_thuoc_thuong_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tao-phieu-linh-thuoc-thuong/tao-phieu-linh-thuoc-thuong.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-thuong/tao-phieu-linh-thuoc-thuong.component.ts");
            /* harmony import */ var _tao_phieu_linh_thuoc_bu_tao_phieu_linh_thuoc_bu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tao-phieu-linh-thuoc-bu/tao-phieu-linh-thuoc-bu.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-bu/tao-phieu-linh-thuoc-bu.component.ts");
            /* harmony import */ var _phieu_linh_thuoc_thuong_gui_lai_phieu_linh_thuoc_thuong_gui_lai_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./phieu-linh-thuoc-thuong-gui-lai/phieu-linh-thuoc-thuong-gui-lai.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-gui-lai/phieu-linh-thuoc-thuong-gui-lai.component.ts");
            /* harmony import */ var _phieu_linh_thuoc_bu_gui_lai_phieu_linh_thuoc_bu_gui_lai_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./phieu-linh-thuoc-bu-gui-lai/phieu-linh-thuoc-bu-gui-lai.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-gui-lai/phieu-linh-thuoc-bu-gui-lai.component.ts");
            /* harmony import */ var _tao_phieu_linh_thuoc_truc_tiep_tao_phieu_linh_thuoc_truc_tiep_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tao-phieu-linh-thuoc-truc-tiep/tao-phieu-linh-thuoc-truc-tiep.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-truc-tiep/tao-phieu-linh-thuoc-truc-tiep.component.ts");
            /* harmony import */ var _phieu_linh_thuoc_truc_tiep_gui_lai_phieu_linh_thuoc_truc_tiep_gui_lai_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./phieu-linh-thuoc-truc-tiep-gui-lai/phieu-linh-thuoc-truc-tiep-gui-lai.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-gui-lai/phieu-linh-thuoc-truc-tiep-gui-lai.component.ts");
            var routes = [
                {
                    path: '',
                    pathMatch: 'full',
                    component: _danh_sach_yeu_cau_linh_thuoc_danh_sach_yeu_cau_linh_thuoc_component__WEBPACK_IMPORTED_MODULE_3__["DanhSachYeuCauLinhThuocComponent"],
                    data: {
                        title: 'Danh Sách Yêu Cầu Lĩnh Thuốc',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhSachYeuCauLinhDuocPham,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
                },
                {
                    path: 'tao-phieu-linh-thuoc-thuong',
                    component: _tao_phieu_linh_thuoc_thuong_tao_phieu_linh_thuoc_thuong_component__WEBPACK_IMPORTED_MODULE_7__["TaoPhieuLinhThuocThuongComponent"],
                    data: {
                        title: 'Yêu Cầu Lĩnh Dược Phẩm',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].TaoYeuCauLinhThuongDuocPham,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Add
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
                },
                {
                    path: 'tao-phieu-linh-thuoc-bu',
                    component: _tao_phieu_linh_thuoc_bu_tao_phieu_linh_thuoc_bu_component__WEBPACK_IMPORTED_MODULE_8__["TaoPhieuLinhThuocBuComponent"],
                    data: {
                        title: 'Yêu Cầu Lĩnh bù Dược Phẩm',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].TaoYeuCauLinhBuDuocPham,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Add
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
                },
                {
                    path: 'tao-phieu-linh-thuoc-truc-tiep',
                    component: _tao_phieu_linh_thuoc_truc_tiep_tao_phieu_linh_thuoc_truc_tiep_component__WEBPACK_IMPORTED_MODULE_11__["TaoPhieuLinhThuocTrucTiepComponent"],
                    data: {
                        title: 'Yêu Cầu Lĩnh Trực Tiếp Dược Phẩm',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].TaoYeuCauLinhTrucTiepDuocPham,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Add
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
                },
                {
                    path: 'gui-lai-phieu-linh-thuoc-thuong/:id',
                    component: _phieu_linh_thuoc_thuong_gui_lai_phieu_linh_thuoc_thuong_gui_lai_component__WEBPACK_IMPORTED_MODULE_9__["PhieuLinhThuocThuongGuiLaiComponent"],
                    data: {
                        title: 'Yêu Cầu Lĩnh Dược Phẩm',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].TaoYeuCauLinhThuongDuocPham,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
                },
                {
                    path: 'gui-lai-phieu-linh-thuoc-bu/:id',
                    component: _phieu_linh_thuoc_bu_gui_lai_phieu_linh_thuoc_bu_gui_lai_component__WEBPACK_IMPORTED_MODULE_10__["PhieuLinhThuocBuGuiLaiComponent"],
                    data: {
                        title: 'Yêu Cầu Lĩnh bù Dược Phẩm',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].TaoYeuCauLinhBuDuocPham,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
                },
                {
                    path: 'gui-lai-phieu-linh-thuoc-truc-tiep/:id',
                    component: _phieu_linh_thuoc_truc_tiep_gui_lai_phieu_linh_thuoc_truc_tiep_gui_lai_component__WEBPACK_IMPORTED_MODULE_12__["PhieuLinhThuocTrucTiepGuiLaiComponent"],
                    data: {
                        title: 'Yêu Cầu Lĩnh Trực Tiếp Dược Phẩm',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].TaoYeuCauLinhTrucTiepDuocPham,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Add
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
                }
            ];
            var YeuCauLinhThuocRoutingModule = /** @class */ (function () {
                function YeuCauLinhThuocRoutingModule() {
                }
                return YeuCauLinhThuocRoutingModule;
            }());
            YeuCauLinhThuocRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], YeuCauLinhThuocRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/yeu-cau-linh-thuoc.module.ts": 
        /*!**************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/yeu-cau-linh-thuoc.module.ts ***!
          \**************************************************************************************************/
        /*! exports provided: YeuCauLinhThuocModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauLinhThuocModule", function () { return YeuCauLinhThuocModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _yeu_cau_linh_thuoc_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./yeu-cau-linh-thuoc-routing.module */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/yeu-cau-linh-thuoc-routing.module.ts");
            /* harmony import */ var _danh_sach_yeu_cau_linh_thuoc_danh_sach_yeu_cau_linh_thuoc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./danh-sach-yeu-cau-linh-thuoc/danh-sach-yeu-cau-linh-thuoc.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/danh-sach-yeu-cau-linh-thuoc/danh-sach-yeu-cau-linh-thuoc.component.ts");
            /* harmony import */ var _tao_phieu_linh_thuoc_thuong_tao_phieu_linh_thuoc_thuong_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tao-phieu-linh-thuoc-thuong/tao-phieu-linh-thuoc-thuong.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-thuong/tao-phieu-linh-thuoc-thuong.component.ts");
            /* harmony import */ var _tao_phieu_linh_thuoc_bu_tao_phieu_linh_thuoc_bu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tao-phieu-linh-thuoc-bu/tao-phieu-linh-thuoc-bu.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-bu/tao-phieu-linh-thuoc-bu.component.ts");
            /* harmony import */ var _phieu_linh_thuoc_bu_shared_phieu_linh_thuoc_bu_shared_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./phieu-linh-thuoc-bu-shared/phieu-linh-thuoc-bu-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-shared/phieu-linh-thuoc-bu-shared.component.ts");
            /* harmony import */ var _phieu_linh_thuoc_thuong_shared_phieu_linh_thuoc_thuong_shared_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./phieu-linh-thuoc-thuong-shared/phieu-linh-thuoc-thuong-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-shared/phieu-linh-thuoc-thuong-shared.component.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _phieu_linh_thuoc_thuong_gui_lai_phieu_linh_thuoc_thuong_gui_lai_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./phieu-linh-thuoc-thuong-gui-lai/phieu-linh-thuoc-thuong-gui-lai.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-gui-lai/phieu-linh-thuoc-thuong-gui-lai.component.ts");
            /* harmony import */ var _phieu_linh_thuoc_bu_gui_lai_phieu_linh_thuoc_bu_gui_lai_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./phieu-linh-thuoc-bu-gui-lai/phieu-linh-thuoc-bu-gui-lai.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-gui-lai/phieu-linh-thuoc-bu-gui-lai.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _tao_phieu_linh_thuoc_truc_tiep_tao_phieu_linh_thuoc_truc_tiep_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tao-phieu-linh-thuoc-truc-tiep/tao-phieu-linh-thuoc-truc-tiep.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-truc-tiep/tao-phieu-linh-thuoc-truc-tiep.component.ts");
            /* harmony import */ var _phieu_linh_thuoc_truc_tiep_shared_phieu_linh_thuoc_truc_tiep_shared_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./phieu-linh-thuoc-truc-tiep-shared/phieu-linh-thuoc-truc-tiep-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-shared/phieu-linh-thuoc-truc-tiep-shared.component.ts");
            /* harmony import */ var _phieu_linh_thuoc_truc_tiep_gui_lai_phieu_linh_thuoc_truc_tiep_gui_lai_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./phieu-linh-thuoc-truc-tiep-gui-lai/phieu-linh-thuoc-truc-tiep-gui-lai.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-gui-lai/phieu-linh-thuoc-truc-tiep-gui-lai.component.ts");
            /* harmony import */ var _phieu_linh_thuoc_thuong_popup_phieu_linh_thuoc_thuong_popup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./phieu-linh-thuoc-thuong-popup/phieu-linh-thuoc-thuong-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-thuong-popup/phieu-linh-thuoc-thuong-popup.component.ts");
            /* harmony import */ var _in_linh_duoc_pham_in_linh_duoc_pham_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./in-linh-duoc-pham/in-linh-duoc-pham.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/in-linh-duoc-pham/in-linh-duoc-pham.component.ts");
            /* harmony import */ var _phieu_linh_thuoc_bu_popup_phieu_linh_thuoc_bu_popup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./phieu-linh-thuoc-bu-popup/phieu-linh-thuoc-bu-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-bu-popup/phieu-linh-thuoc-bu-popup.component.ts");
            /* harmony import */ var _phieu_linh_thuoc_truc_tiep_popup_phieu_linh_thuoc_truc_tiep_popup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./phieu-linh-thuoc-truc-tiep-popup/phieu-linh-thuoc-truc-tiep-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-thuoc-truc-tiep-popup/phieu-linh-thuoc-truc-tiep-popup.component.ts");
            /* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/dist/fesm2015/index.js");
            /* harmony import */ var _popup_thong_bao_dp_khong_the_tao_popup_thong_bao_dp_khong_the_tao_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./popup-thong-bao-dp-khong-the-tao/popup-thong-bao-dp-khong-the-tao.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/popup-thong-bao-dp-khong-the-tao/popup-thong-bao-dp-khong-the-tao.component.ts");
            /* harmony import */ var _phieu_linh_truc_tiep_cho_goi_shared_phieu_linh_truc_tiep_cho_goi_shared_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./phieu-linh-truc-tiep-cho-goi-shared/phieu-linh-truc-tiep-cho-goi-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/phieu-linh-truc-tiep-cho-goi-shared/phieu-linh-truc-tiep-cho-goi-shared.component.ts");
            var YeuCauLinhThuocModule = /** @class */ (function () {
                function YeuCauLinhThuocModule() {
                }
                return YeuCauLinhThuocModule;
            }());
            YeuCauLinhThuocModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _danh_sach_yeu_cau_linh_thuoc_danh_sach_yeu_cau_linh_thuoc_component__WEBPACK_IMPORTED_MODULE_4__["DanhSachYeuCauLinhThuocComponent"],
                        _tao_phieu_linh_thuoc_thuong_tao_phieu_linh_thuoc_thuong_component__WEBPACK_IMPORTED_MODULE_5__["TaoPhieuLinhThuocThuongComponent"],
                        _tao_phieu_linh_thuoc_bu_tao_phieu_linh_thuoc_bu_component__WEBPACK_IMPORTED_MODULE_6__["TaoPhieuLinhThuocBuComponent"],
                        _phieu_linh_thuoc_bu_shared_phieu_linh_thuoc_bu_shared_component__WEBPACK_IMPORTED_MODULE_7__["PhieuLinhThuocBuSharedComponent"],
                        _phieu_linh_thuoc_thuong_shared_phieu_linh_thuoc_thuong_shared_component__WEBPACK_IMPORTED_MODULE_8__["PhieuLinhThuocThuongSharedComponent"],
                        _phieu_linh_thuoc_thuong_gui_lai_phieu_linh_thuoc_thuong_gui_lai_component__WEBPACK_IMPORTED_MODULE_16__["PhieuLinhThuocThuongGuiLaiComponent"],
                        _phieu_linh_thuoc_bu_gui_lai_phieu_linh_thuoc_bu_gui_lai_component__WEBPACK_IMPORTED_MODULE_17__["PhieuLinhThuocBuGuiLaiComponent"], _tao_phieu_linh_thuoc_truc_tiep_tao_phieu_linh_thuoc_truc_tiep_component__WEBPACK_IMPORTED_MODULE_20__["TaoPhieuLinhThuocTrucTiepComponent"], _phieu_linh_thuoc_truc_tiep_shared_phieu_linh_thuoc_truc_tiep_shared_component__WEBPACK_IMPORTED_MODULE_21__["PhieuLinhThuocTrucTiepSharedComponent"], _phieu_linh_thuoc_truc_tiep_gui_lai_phieu_linh_thuoc_truc_tiep_gui_lai_component__WEBPACK_IMPORTED_MODULE_22__["PhieuLinhThuocTrucTiepGuiLaiComponent"], _in_linh_duoc_pham_in_linh_duoc_pham_component__WEBPACK_IMPORTED_MODULE_24__["InLinhDuocPhamComponent"],
                        _phieu_linh_thuoc_thuong_popup_phieu_linh_thuoc_thuong_popup_component__WEBPACK_IMPORTED_MODULE_23__["PhieuLinhThuocThuongPopupComponent"], _phieu_linh_thuoc_bu_popup_phieu_linh_thuoc_bu_popup_component__WEBPACK_IMPORTED_MODULE_25__["PhieuLinhThuocBuPopupComponent"], _phieu_linh_thuoc_truc_tiep_popup_phieu_linh_thuoc_truc_tiep_popup_component__WEBPACK_IMPORTED_MODULE_26__["PhieuLinhThuocTrucTiepPopupComponent"], _popup_thong_bao_dp_khong_the_tao_popup_thong_bao_dp_khong_the_tao_component__WEBPACK_IMPORTED_MODULE_28__["PopupThongBaoDpKhongTheTaoComponent"], _phieu_linh_truc_tiep_cho_goi_shared_phieu_linh_truc_tiep_cho_goi_shared_component__WEBPACK_IMPORTED_MODULE_29__["PhieuLinhTrucTiepChoGoiSharedComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatOptionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_10__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_15__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                        _yeu_cau_linh_thuoc_routing_module__WEBPACK_IMPORTED_MODULE_3__["YeuCauLinhThuocRoutingModule"],
                        _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_27__["DropDownButtonModule"]
                    ],
                    exports: [
                        _phieu_linh_thuoc_bu_shared_phieu_linh_thuoc_bu_shared_component__WEBPACK_IMPORTED_MODULE_7__["PhieuLinhThuocBuSharedComponent"],
                        _phieu_linh_thuoc_thuong_shared_phieu_linh_thuoc_thuong_shared_component__WEBPACK_IMPORTED_MODULE_8__["PhieuLinhThuocThuongSharedComponent"]
                    ],
                    entryComponents: [
                        src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_18__["ConfirmComponent"],
                        _phieu_linh_thuoc_thuong_popup_phieu_linh_thuoc_thuong_popup_component__WEBPACK_IMPORTED_MODULE_23__["PhieuLinhThuocThuongPopupComponent"],
                        _in_linh_duoc_pham_in_linh_duoc_pham_component__WEBPACK_IMPORTED_MODULE_24__["InLinhDuocPhamComponent"],
                        _phieu_linh_thuoc_bu_popup_phieu_linh_thuoc_bu_popup_component__WEBPACK_IMPORTED_MODULE_25__["PhieuLinhThuocBuPopupComponent"],
                        _phieu_linh_thuoc_truc_tiep_popup_phieu_linh_thuoc_truc_tiep_popup_component__WEBPACK_IMPORTED_MODULE_26__["PhieuLinhThuocTrucTiepPopupComponent"],
                        _popup_thong_bao_dp_khong_the_tao_popup_thong_bao_dp_khong_the_tao_component__WEBPACK_IMPORTED_MODULE_28__["PopupThongBaoDpKhongTheTaoComponent"]
                    ]
                })
            ], YeuCauLinhThuocModule);
            /***/ 
        }),
        /***/ "./src/app/shared/enum/linh-vat-tu-thuoc.enum.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/shared/enum/linh-vat-tu-thuoc.enum.ts ***!
          \*******************************************************/
        /*! exports provided: EnumLoaiPhieuLinh */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumLoaiPhieuLinh", function () { return EnumLoaiPhieuLinh; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var EnumLoaiPhieuLinh;
            (function (EnumLoaiPhieuLinh) {
                EnumLoaiPhieuLinh[EnumLoaiPhieuLinh["LinhDuTru"] = 1] = "LinhDuTru";
                EnumLoaiPhieuLinh[EnumLoaiPhieuLinh["LinhBu"] = 2] = "LinhBu";
                EnumLoaiPhieuLinh[EnumLoaiPhieuLinh["LinhChoBenhNhan"] = 3] = "LinhChoBenhNhan";
            })(EnumLoaiPhieuLinh || (EnumLoaiPhieuLinh = {}));
            /***/ 
        })
    }]);
//# sourceMappingURL=nhap-xuat-duoc-pham-yeu-cau-linh-thuoc-yeu-cau-linh-thuoc-module-es2015.js.map
//# sourceMappingURL=nhap-xuat-duoc-pham-yeu-cau-linh-thuoc-yeu-cau-linh-thuoc-module-es5.js.map
//# sourceMappingURL=nhap-xuat-duoc-pham-yeu-cau-linh-thuoc-yeu-cau-linh-thuoc-module-es5.js.map