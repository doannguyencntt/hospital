(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~kham-benh-kham-doan-tat-ca-phong-kham-doan-tat-ca-phong-module~kham-doan-kham-doan-ket-luan-~89aa333d"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-chua-ket-luan-ksk-list/kham-doan-chua-ket-luan-ksk-list.component.html":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-chua-ket-luan-ksk-list/kham-doan-chua-ket-luan-ksk-list.component.html ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n    style=\"padding-top: 5px;\">\n\n    <app-combobox id=\"CongTyKhamSucKhoeId\" fxFlex=\"30%\" fxFlex.sm=\"20%\" label=\"Tên công ty\" [required]=\"true\"\n    url=\"KhamDoan/GetCongTys\" [(model)]=\"khamDoanChuaKetLuanSearch.CongTyKhamSucKhoeId\" [reloadForGrid]=\"true\"\n    [modelText]=\"khamDoanChuaKetLuanSearch.TenCongTy\" (selectionChange)=\"congTyKhamSucKhoeChange($event)\"\n    (openCombobox)=\"openCombobox($event)\" (keyup)=\"onKey($event)\">\n</app-combobox>\n\n<app-combobox id=\"HopDongKhamSucKhoeId\" fxFlex=\"30%\" fxFlex.sm=\"20%\" label=\"Số hợp đồng\" [required]=\"true\"\n    url=\"KhamDoan/GetHopDongKhamSucKhoes\" [(model)]=\"khamDoanChuaKetLuanSearch.HopDongKhamSucKhoeId\"\n    [reloadForGrid]=\"true\" [modelText]=\"khamDoanChuaKetLuanSearch.TenSoHopDong\"\n    (selectionChange)=\"soHopDongChange($event)\" [autoSelectFirstItem]=\"true\" [bind]=\"true\"\n    (dataForLookupChange)=\"changeLookupHopDong($event)\"\n    [queryInfo]=\"{ParameterDependencies:'{CongTyKhamSucKhoeId:' + khamDoanChuaKetLuanSearch.CongTyKhamSucKhoeId + '}', Take: 50}\"\n    (openCombobox)=\"openCombobox($event)\" (keyup)=\"onKey($event)\">\n</app-combobox>\n    <div fxFlex=\"40%\">        \n        <button type=\"button\"  (click)=\"redirectKetLuan()\" color=\"primary\" class=\"float-right mr-1\"\n        mat-raised-button><i class=\"ft-save\"></i> Chuyển sang kết luận</button>\n    </div>\n</div>\n\n<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n    fxLayoutAlign=\"space-between\" style=\"padding-top: 15px;\">\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Danh sách nhân viên</h3>\n    <app-grid #gridChild [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n        [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [checkboxAble]=\"false\" pageSize=\"50\" [showStt]=\"true\"\n        urlGetData=\"KhamDoan/GetDataDanhSachChuaKetLuanCLSKhamSucKhoeForGridAsync\" [sort]=\"sort\" heightToolbar=\"326\"\n        urlGetTotalPage=\"KhamDoan/GetTotalPageDanhSachChuaKetLuanCLSKhamSucKhoeForGridAsync\" [headerTemplate]=\"headerTemplate\">\n        <ng-template #ketLuanTemplate let-dataItem>\n            <label *ngIf=\"dataItem.TinhTrangCLS == 0\">\n                <span>{{dataItem.KSKKetLuanCLSDisplay}}</span>\n            </label>\n            <label *ngIf=\"dataItem.TinhTrangCLS == 1\" class=\"green\">\n                <span>{{dataItem.KSKKetLuanCLSDisplay}}</span>\n            </label>\n\n        </ng-template>\n        <ng-template #maTNTemplate let-dataItem>\n            <div class=\"text-center\" kendoTooltip>\n                <a (click)=\"chinhSua(dataItem.Id, dataItem.YeuCauTiepNhanId,dataItem.CongTyKhamSucKhoeId,dataItem.HopDongKhamSucKhoeId)\">\n                    <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.MaTN}}\">\n                        {{dataItem.MaTN}}</p>\n                </a>\n            </div>\n        </ng-template>\n\n        <ng-template #gioiTinhTemplate let-dataItem>\n            {{dataItem.GioiTinhDisplay}}\n        </ng-template>\n\n        <ng-template #dichVuDaThucHienTemplate let-dataItem>\n            <div *ngIf=\"dataItem.DichVuDaThucHien == dataItem.TongDichVu\">\n                <label style=\"color:green\">\n                    {{dataItem.DichVuDaThucHien}}\n                </label>/\n                <label>\n                    <b>{{dataItem.TongDichVu}}</b>\n                </label>\n            </div>\n\n            <div *ngIf=\"dataItem.DichVuDaThucHien < dataItem.TongDichVu\">\n                <label style=\"color:orange\">\n                    {{dataItem.DichVuDaThucHien}}\n                </label>/\n                <label>\n                    <b>{{dataItem.TongDichVu}}</b>\n                </label>\n            </div>\n        </ng-template>\n    </app-grid>\n\n    <ng-template #headerTemplate>\n        <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <app-checkbox name=\"co-duyet\" (modelChange)=\"trangThaiCheckBox($event,'chuaketluan')\" class=\"ml-2\"\n                value=\"coduyet\" [(model)]=\"khamDoanChuaKetLuanSearch.ChuaKetLuan\" fxFlex.lt-md=\"auto\" fxHide.xs\n                fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Chưa KL\">\n            </app-checkbox>\n\n            <app-checkbox name=\"co-duyet\" (modelChange)=\"trangThaiCheckBox($event,'daketluan')\" class=\"ml-2\"\n                value=\"coduyet\" [(model)]=\"khamDoanChuaKetLuanSearch.DaKetLuan\" fxFlex.lt-md=\"auto\" fxHide.xs\n                fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Đã KL\">\n            </app-checkbox>\n\n            <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 10px;\">\n                <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString\" [(ngModel)]=\"khamDoanChuaKetLuanSearch.SearchString\"\n                    (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n            </div>\n        </div>\n    </ng-template>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-da-ket-luan-ksk-list/kham-doan-da-ket-luan-ksk-list.component.html":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-da-ket-luan-ksk-list/kham-doan-da-ket-luan-ksk-list.component.html ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n    style=\"padding-top: 5px;\">\n\n    <app-combobox id=\"CongTyKhamSucKhoeId\" fxFlex=\"30%\" fxFlex.sm=\"20%\" label=\"Tên công ty\" [required]=\"true\"\n        url=\"KhamDoan/GetCongTys\" [(model)]=\"khamDoanDaKetLuanSearch.CongTyKhamSucKhoeId\" [reloadForGrid]=\"true\"\n        [modelText]=\"khamDoanDaKetLuanSearch.TenCongTy\" (selectionChange)=\"congTyKhamSucKhoeChange($event)\"\n        (openCombobox)=\"openCombobox($event)\" (keyup)=\"onKey($event)\">\n    </app-combobox>\n\n    <app-combobox id=\"HopDongKhamSucKhoeId\" fxFlex=\"30%\" fxFlex.sm=\"20%\" label=\"Số hợp đồng\" [required]=\"true\"\n        url=\"KhamDoan/GetHopDongKhamSucKhoes?LaHopDongKetThuc={{true}}\"\n        [(model)]=\"khamDoanDaKetLuanSearch.HopDongKhamSucKhoeId\" [modelText]=\"khamDoanDaKetLuanSearch.TenSoHopDong\" \n        (selectionChange)=\"soHopDongChange($event)\" [reloadForGrid]=\"true\" \n        [bind]=\"true\" (dataForLookupChange)=\"changeLookupHopDong($event)\"\n        [queryInfo]=\"{ParameterDependencies:'{CongTyKhamSucKhoeId:' + khamDoanDaKetLuanSearch.CongTyKhamSucKhoeId + '}', Take: 50}\"\n        (openCombobox)=\"openCombobox($event)\" (keyup)=\"onKey($event)\">\n    </app-combobox>\n</div>\n\n<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n    fxLayoutAlign=\"space-between\" style=\"padding-top: 15px;\">\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Danh sách nhân viên</h3>\n    <app-grid #gridChildDaKetLuan [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n        [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [checkboxAble]=\"false\" pageSize=\"50\" [showStt]=\"true\"\n        urlGetData=\"KhamDoan/GetDataForGridAsyncDanhSachKetLuanCLSKhamSucKhoe\" [sort]=\"sort\" heightToolbar=\"326\"\n        urlGetTotalPage=\"KhamDoan/GetTotalPageForGridAsyncDanhSachKetLuanCLSKhamSucKhoe\" [headerTemplate]=\"headerTemplate\">\n        <ng-template #ketLuanTemplate let-dataItem>\n            <label *ngIf=\"dataItem.TinhTrangCLS == 0\">\n                <span>{{dataItem.KSKKetLuanCLSDisplay}}</span>\n            </label>\n            <label *ngIf=\"dataItem.TinhTrangCLS == 1\" class=\"green\">\n                <span>{{dataItem.KSKKetLuanCLSDisplay}}</span>\n            </label>\n\n        </ng-template>\n        <ng-template #maTNTemplate let-dataItem>\n            <div class=\"text-center\" kendoTooltip>\n                <a (click)=\"chinhSua(dataItem.Id, dataItem.YeuCauTiepNhanId,dataItem.CongTyKhamSucKhoeId,dataItem.HopDongKhamSucKhoeId)\">\n                    <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.MaTN}}\">\n                        {{dataItem.MaTN}}</p>\n                </a>\n            </div>\n        </ng-template>\n\n        <ng-template #gioiTinhTemplate let-dataItem>\n            {{dataItem.GioiTinhDisplay}}\n        </ng-template>\n\n        <ng-template #dichVuDaThucHienTemplate let-dataItem>\n            <div *ngIf=\"dataItem.DichVuDaThucHien == dataItem.TongDichVu\">\n                <label style=\"color:green\">\n                    {{dataItem.DichVuDaThucHien}}\n                </label>/\n                <label>\n                    <b>{{dataItem.TongDichVu}}</b>\n                </label>\n            </div>\n\n            <div *ngIf=\"dataItem.DichVuDaThucHien < dataItem.TongDichVu\">\n                <label style=\"color:orange\">\n                    {{dataItem.DichVuDaThucHien}}\n                </label>/\n                <label>\n                    <b>{{dataItem.TongDichVu}}</b>\n                </label>\n            </div>\n        </ng-template>\n    </app-grid>\n\n    <ng-template #headerTemplate>\n        <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <app-checkbox name=\"co-duyet\" (modelChange)=\"trangThaiCheckBox($event,'chuaketluan')\" class=\"ml-2\"\n                value=\"coduyet\" [(model)]=\"khamDoanDaKetLuanSearch.ChuaKetLuan\" fxFlex.lt-md=\"auto\" fxHide.xs\n                fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Chưa KL\">\n            </app-checkbox>\n\n            <app-checkbox name=\"co-duyet\" (modelChange)=\"trangThaiCheckBox($event,'daketluan')\" class=\"ml-2\"\n                value=\"coduyet\" [(model)]=\"khamDoanDaKetLuanSearch.DaKetLuan\" fxFlex.lt-md=\"auto\" fxHide.xs\n                fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Đã KL\">\n            </app-checkbox>\n\n            <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 10px;\">\n                <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString\" [(ngModel)]=\"khamDoanDaKetLuanSearch.SearchString\"\n                    (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n            </div>\n        </div>\n    </ng-template>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk-doan-detail/kham-doan-ket-luan-cls-ksk-doan-detail.component.html":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk-doan-detail/kham-doan-ket-luan-cls-ksk-doan-detail.component.html ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n        {Title:'Khám Đoàn', Path: '/kham-doan'}\n        ,{Title:'DS Kết Luận Cận Lâm Sàng Khám Sức Khỏe Đoàn', Path: '/kham-doan/kham-doan-ket-luan-cls-ksk', queryParams: {holdQuery : true}}\n        ,{Title:'Kết Luận Cận Lâm Sàng Khám Sức Khỏe Đoàn',Path:'',Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Kết Luận Cận Lâm Sàng Khám Sức Khỏe Đoàn</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                    <app-kham-doan-thong-tin-hanh-chinh [yeuCauTiepNhanId]=\"yeuCauTiepNhanId\" class=\"mb-3\">\n                    </app-kham-doan-thong-tin-hanh-chinh>\n                    <fieldset fxFlex=\"100%\" class=\"mb-3\">\n                        <legend>Thông tin CLS</legend>\n                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"0 grid\" fxLayoutGap.lt-sm=\"0\">\n                            <app-grid #grid baseRoute=\"\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n                                [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                                [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" [urlGetData]=\"urlGetDataGrid\"\n                                [urlGetTotalPage]=\"urlGetTotalPageGrid\" [autoHeight]=true #gridCLS\n                                [detailTemplate]=\"detailTemplate\"\n                                [additionalSearchString]=\"additonString\" [groups]=\"groups\"\n                                (onDataBound)=\"onDataBound($event)\"\n                                >\n                            </app-grid>\n                            <ng-template #detailTemplate let-dataItem>\n                                <div style=\"overflow: auto;\">\n                                    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"0 grid\" fxLayoutGap.lt-sm=\"0\">\n                                    <table class=\"table table-hover table-bordered table-responsive-xl\"\n                                        *ngIf=\"dataItem.KetQuaCLSGridChiTietVos !== null && dataItem.KetQuaCLSGridChiTietVos.length > 0\" style=\"width: 100%;\">\n                                        <thead>\n                                            <th resizable style=\"width:50%\">TÊN</th>\n                                            <th resizable style=\"width: 100px;\"> KẾT QUẢ CŨ</th>\n                                            <th resizable style=\"width: 100px;\"> KẾT QUẢ</th>\n                                            <th resizable style=\"width: 100px;\"> CSBT </th>\n                                            <th resizable style=\"width: 100px;\"> ĐƠN VỊ</th>\n                                            <th resizable style=\"width: 100px;\"> Máy XN</th>\n                                            <th resizable style=\"width: 100px;\"> Người duyệt </th>\n                                            <th resizable style=\"width: 120px;\"> Ngày duyệt </th>\n                                        </thead>\n                                        <tbody>\n                                            <ng-container *ngFor=\"let data of dataItem.KetQuaCLSGridChiTietVos\">\n                                                <tr [class]=\"data.NgayDuyet == null ? 'bg-light-red' : ''\"\n                                                    (click)=\"data.expanded = !data.expanded\">\n                                                    <td [class]=\"!data.IsParent ? 'pl-5' : ''\"\n                                                        [style.font-weight]=\"data.Items !== null && data.Items.length > 0 ? 'bold' : ''\">\n                                                        <ng-container *ngIf=\"data.IsParent\">\n                                                            <span style=\"cursor: pointer;\"> {{!data.expanded ? '+' :\n                                                                '&ndash;'}} </span>\n                                                        </ng-container>\n                                                        {{data.TenDichVu}}\n                                                    </td>\n                                                    <ng-container *ngIf=\"data.IsRoot\">\n                                                        <td colspan=\"12\"></td>\n                                                    </ng-container>\n                                                    <ng-container *ngIf=\"!data.IsRoot\">\n                                                        <td [ngClass]=\"{ 'in-dam': data.IsBold}\"> {{data.KetQuaCu}}\n                                                        </td>\n                                                        <td [ngClass]=\"{ 'in-dam': data.IsBold}\"> {{data.KetQuaMoi}}\n                                                        </td>\n                                                        <td [ngClass]=\"{ 'in-dam': data.IsBold}\"> {{data.CSBT}} </td>\n                                                        <td> {{data.DonVi}} </td>\n                                                        <td> {{data.MayXN}} </td>\n                                                        <td> {{data.NguoiDuyet}} </td>\n                                                        <td> {{data.NgayDuyet}} </td>\n                                                    </ng-container>\n                                                </tr>\n                                                <ng-container *ngIf=\"data.expanded\">\n                                                    <ng-container *ngFor=\"let detail of data.Items\">\n                                                        <tr [class]=\"detail.NgayDuyet == null ? 'bg-light-red' : ''\"\n                                                            (click)=\"detail.expanded = !detail.expanded\">\n                                                            <td [class]=\"!detail.IsParent ? 'pl-8' : 'pl-5'\"\n                                                                [style.font-weight]=\"detail.Items != null && detail.Items.length > 0 ? 'bold' : ''\">\n                                                                <ng-container *ngIf=\"detail.IsParent\">\n                                                                    <span style=\"cursor: pointer;\"> {{!detail.expanded ?\n                                                                        '+' : '&ndash;'}} </span>\n                                                                </ng-container>\n                                                                {{detail.TenDichVu}}\n                                                            </td>\n                                                            <td [ngClass]=\"{ 'in-dam': detail.IsBold}\">\n                                                                {{detail.KetQuaCu}} </td>\n                                                            <td [ngClass]=\"{ 'in-dam': detail.IsBold}\">\n                                                                {{detail.KetQuaMoi}} </td>\n                                                            <td [ngClass]=\"{ 'in-dam': detail.IsBold}\"> {{detail.CSBT}}\n                                                            </td>\n                                                            <td> {{detail.DonVi}} </td>\n                                                            <td> {{detail.MayXN}} </td>\n                                                            <td> {{detail.NguoiDuyet}} </td>\n                                                            <td> {{detail.NgayDuyet}} </td>\n                                                        </tr>\n\n                                                        <ng-container *ngIf=\"detail.expanded\">\n                                                            <ng-container *ngFor=\"let detail of detail.Items\">\n                                                                <tr\n                                                                    [class]=\"detail.NgayDuyet == null ? 'bg-light-red' : ''\">\n                                                                    <td [class]=\"!detail.IsParent ? 'pl-12' : 'pl-10'\">\n                                                                        {{detail.TenDichVu}}</td>\n                                                                    <td [ngClass]=\"{ 'in-dam': detail.IsBold}\">\n                                                                        {{data.KetQuaCu}} </td>\n                                                                    <td [ngClass]=\"{ 'in-dam': detail.IsBold}\">\n                                                                        {{data.KetQuaMoi}} </td>\n                                                                    <td [ngClass]=\"{ 'in-dam': detail.IsBold}\">\n                                                                        {{data.CSBT}} </td>\n                                                                    <td> {{data.DonVi}} </td>\n                                                                    <td> {{data.MayXN}} </td>\n                                                                    <td> {{data.NguoiDuyet}} </td>\n                                                                    <td> {{data.NgayDuyet}} </td>\n                                                                </tr>\n                                                            </ng-container>\n                                                        </ng-container>\n                                                    </ng-container>\n                                                </ng-container>\n                                            </ng-container>\n                                        </tbody>\n                                    </table>\n                                    </div>\n                                </div>\n\n                                <ng-template #sttTemplate let-rowIndex=\"rowIndex\">\n                                    {{rowIndex + 1}}\n                                </ng-template>\n                            </ng-template>\n                            <ng-template #nhomGroupHeaderTemplate let-aggregates let-value=\"value\">\n                                <strong fxFlex=\"70%\">{{value}}</strong>\n                            </ng-template>\n\n                            <ng-template #xemKetQuaActionTemplate let-dataItem>\n                                <!-- type == 1 => pdf type == 2 => file -->\n                                <!------------------------------------- Chuẩn đoán hình ảnh và thăm dò chức năng ---------------------------------------------->\n                                <button *ngIf=\"dataItem.LoaiKetQuaCLS !== 'Xét nghiệm'\" type=\"button\"\n                                    (click)=\"xemKetQua(dataItem)\" color=\"primary\" mat-raised-button\n                                    class=\"mr-2\">Xem</button>\n                                <span xPosition=\"before\" yPosition=\"below\">\n                                    <button *ngIf=\"dataItem.LoaiKetQuaCLS !== 'Xét nghiệm'\" type=\"button\"\n                                        (click)=\"taiKetQua(dataItem)\" color=\"primary\" mat-raised-button>Tải\n                                        về</button>\n                                </span>\n                                <!------------------------------------ Xét nghiệm ----------------------------------------------------------------------------->\n                                <button *ngIf=\"dataItem.LoaiKetQuaCLS === 'Xét nghiệm'\" type=\"button\"\n                                    (click)=\"downloadXNCLS(dataItem)\" color=\"primary\" mat-raised-button class=\"mr-2\">Xem\n                                    và tải về</button>\n                                <!-- <button *ngIf=\"dataItem.LoaiKetQuaCLS === 'Xét nghiệm'\" fileName=\"KetQuaXetNghiem\" (click)=\"downloadXNCLS(dataItem)\"\n        color=\"primary\" mat-raised-button>Tải\n        về</button> -->\n                            </ng-template>\n                        </div>\n\n                    </fieldset>\n                    \n                    <fieldset fxFlex=\"100%\" class=\"mb-3\">\n                        <legend>KẾT LUẬN CẬN LÂM SÀNG</legend>\n                        \n                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"15px grid\" fxLayoutGap.lt-sm=\"0\">\n                            <span fxFlex=\"49%\" style=\"text-align: right;\" *ngIf=\"trangThaiHopDong== true\"> <button type=\"button\" color=\"primary\" (click)=\"ketQuaMau()\"  disabled\n                                    mat-stroked-button mat-button class=\"mr-1\">Kết quả\n                                    mẫu</button></span>\n                            <span fxFlex=\"49%\" style=\"text-align: right;\"  *ngIf=\"trangThaiHopDong== false\"> <button type=\"button\" color=\"primary\" (click)=\"ketQuaMau()\"   \n                                    mat-stroked-button mat-button class=\"mr-1\">Kết quả\n                                    mẫu</button></span>\n                            <span fxFlex=\"2%\"></span>\n                            <span fxFlex=\"49%\"></span>\n                            <app-textarea id=\"KetQua\" fxFlex=\"49%\" fxFlex.sm=\"49%\" maxlength=\"1000\" label=\"Kết quả\" [validationerror]=\"'KSKKetQuaCanLamSang' | validationerror:validationErrors\"\n                                [(model)]=\"khamDoanKetLuanCLS.KSKKetQuaCanLamSang\" required=\"true\" minHeight=\"30\" [disabled]=\"trangThaiHopDong\">\n                            </app-textarea>\n                            <span fxFlex=\"2%\"></span>\n                            <app-textarea id=\"DanhGia\" fxFlex=\"49%\" fxFlex.sm=\"49%\" maxlength=\"1000\" label=\"Đánh giá\" [(model)]=\"khamDoanKetLuanCLS.KSKDanhGiaCanLamSang\"  [disabled]=\"trangThaiHopDong\"\n                            [validationerror]=\"'KSKDanhGiaCanLamSang' | validationerror:validationErrors\"\n                                required=\"true\" minHeight=\"30\">\n                            </app-textarea>\n                        </div>\n                    </fieldset>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" (click)=\"cancel()\" mat-button class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i>\n                        Hủy</button>\n                    <button type=\"button\"  (click)=\"save()\" color=\"primary\" *ngIf=\"!trangThaiHopDong\"\n                        mat-raised-button><i class=\"ft-save\"></i> Lưu</button>\n                        <button type=\"button\"  (click)=\"redirectKetLuan()\" color=\"primary\"\n                            mat-raised-button><i class=\"ft-save\"></i>Lưu và chuyển sang kết luận</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk-list/kham-doan-ket-luan-cls-ksk-list.component.html":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk-list/kham-doan-ket-luan-cls-ksk-list.component.html ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"\n                    [\n                        {Title:'Khám Đoàn',Path:''},\n                        {Title:'DS Kết Luận Cận Lâm Sàng Khám Sức Khỏe Đoàn',Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\" style=\"overflow: hidden; padding-top: 7px; padding-left: 7px;\">\n            <kendo-tabstrip (tabSelect)=\"chuyenDen($event)\">\n\n                <kendo-tabstrip-tab [title]=\"'HĐ CHƯA KẾT LUẬN XONG'\"\n                    [selected]=\"listStatusSelectTabKhamDoanKetLuan.selectedTabChuaKetLuan\">\n                    <ng-template kendoTabContent>\n                        <div class=\"content-tab-popup\" style=\"margin-top: -13px;\">\n                            <app-kham-doan-chua-ket-luan-ksk-list>\n                            </app-kham-doan-chua-ket-luan-ksk-list>\n                        </div>\n                    </ng-template>\n                </kendo-tabstrip-tab>\n\n                <kendo-tabstrip-tab [title]=\"'HĐ ĐÃ KẾT LUẬN XONG'\"\n                    [selected]=\"listStatusSelectTabKhamDoanKetLuan.selectedTabDaKetLuan\">\n                    <ng-template kendoTabContent>\n                        <div class=\"content-tab-popup\" style=\"margin-top: -13px;\">\n                            <app-kham-doan-da-ket-luan-ksk-list>\n                            </app-kham-doan-da-ket-luan-ksk-list>\n                        </div>\n                    </ng-template>\n                </kendo-tabstrip-tab>\n            </kendo-tabstrip>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-chua-ket-luan-ksk-list/kham-doan-chua-ket-luan-ksk-list.component.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-chua-ket-luan-ksk-list/kham-doan-chua-ket-luan-ksk-list.component.scss ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWtldC1sdWFuLWNscy1rc2sva2hhbS1kb2FuLWNodWEta2V0LWx1YW4ta3NrLWxpc3Qva2hhbS1kb2FuLWNodWEta2V0LWx1YW4ta3NrLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-chua-ket-luan-ksk-list/kham-doan-chua-ket-luan-ksk-list.component.ts":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-chua-ket-luan-ksk-list/kham-doan-chua-ket-luan-ksk-list.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: KhamDoanChuaKetLuanKskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanChuaKetLuanKskListComponent", function() { return KhamDoanChuaKetLuanKskListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _kham_doan_ket_luan_kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../kham-doan-ket-luan/kham-doan-ket-luan.model */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/kham-doan-ket-luan.model.ts");
















let KhamDoanChuaKetLuanKskListComponent = class KhamDoanChuaKetLuanKskListComponent {
    constructor(apiService, authService, router, notificationService, dialog, route, location) {
        this.apiService = apiService;
        this.authService = authService;
        this.router = router;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.route = route;
        this.location = location;
        this.khamDoanChuaKetLuanSearch = new _kham_doan_ket_luan_kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_15__["KhamDoanChuaKetLuanSearch"]();
        this.baseRoute = "/kham-doan/kham-doan-ket-luan-cls-ksk";
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.isSelectDuocPham = false;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
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
        this.khamDoanChuaKetLuanSearch = new _kham_doan_ket_luan_kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_15__["KhamDoanChuaKetLuanSearch"]();
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
                var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_10__["LocalStorageHelper"].getItem("additionalSearchStringKhamDoanChuaKetLuanCLS");
                if (additionalSearchString != null) {
                    this.khamDoanChuaKetLuanSearch = JSON.parse(additionalSearchString);
                    this.addtionStringDefault = additionalSearchString;
                    this.gridChild.additionalSearchString = additionalSearchString;
                    hasLocalSearchString = true;
                }
            }
        }
        if (!hasLocalSearchString) {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_10__["LocalStorageHelper"].removeItem("additionalSearchStringKhamDoanChuaKetLuanCLS");
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
        this.location.replaceState(this.baseRoute + '?holdQuery=true');
        this.khamDoanChuaKetLuanSearch.LaHopDongDaKetLuan = false;
        var queryString = JSON.stringify(this.khamDoanChuaKetLuanSearch);
        this.gridChild._additionalSearchString = queryString;
        this.gridChild.search();
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_10__["LocalStorageHelper"].setItem("additionalSearchStringKhamDoanChuaKetLuanCLS", queryString);
    }
    congTyKhamSucKhoeChange(event) {
        this.khamDoanChuaKetLuanSearch.LaHopDongDaKetLuan = false;
        this.changeDataCongTy = true;
        if (event != undefined && event != null) {
            this.location.replaceState(this.baseRoute + '?holdQuery=true');
            this.khamDoanChuaKetLuanSearch.CongTyKhamSucKhoeId = event.KeyId;
            this.khamDoanChuaKetLuanSearch.TenCongTy = event.Ten;
            this.khamDoanChuaKetLuanSearch.HopDongKhamSucKhoeId = null;
            this.gridChild._additionalSearchString = null;
            this.gridChild.search();
        }
        else {
            this.location.replaceState(this.baseRoute + '?holdQuery=true');
            this.khamDoanChuaKetLuanSearch.CongTyKhamSucKhoeId = null;
            this.khamDoanChuaKetLuanSearch.TenCongTy = null;
            this.khamDoanChuaKetLuanSearch.HopDongKhamSucKhoeId = null;
            this.khamDoanChuaKetLuanSearch.TenSoHopDong = null;
            var queryString = JSON.stringify(this.khamDoanChuaKetLuanSearch);
            this.gridChild._additionalSearchString = queryString;
            this.gridChild.search();
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_10__["LocalStorageHelper"].setItem("additionalSearchStringKhamDoanChuaKetLuanCLS", queryString);
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
            this.location.replaceState(this.baseRoute + '?holdQuery=true');
            this.khamDoanChuaKetLuanSearch.HopDongKhamSucKhoeId = null;
            this.khamDoanChuaKetLuanSearch.TenSoHopDong = null;
            var queryString = JSON.stringify(this.khamDoanChuaKetLuanSearch);
            this.gridChild._additionalSearchString = queryString;
            this.gridChild.search();
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_10__["LocalStorageHelper"].setItem("additionalSearchStringKhamDoanChuaKetLuanCLS", queryString);
        }
    }
    chinhSua(id, yeuCauTiepNhanId, congTyKhamSucKhoeId, hopdongId) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Update)) {
            this.router.navigate([this.baseRoute + "/detail/" + yeuCauTiepNhanId + "/" + hopdongId + "/" + congTyKhamSucKhoeId]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__["SystemMessage"].UnAuthorizedMessage);
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
    redirectKetLuan() {
        this.router.navigate(['/kham-doan/ket-luan-kham-suc-khoe-doan'], { queryParams: { "holdQuery": true } });
    }
    changeLookupHopDong(event) {
        // if(event && event.length > 0 && this.khamDoanChuaKetLuanSearch.CongTyKhamSucKhoeId && !this.khamDoanChuaKetLuanSearch.HopDongKhamSucKhoeId )
        // {
        //   this.khamDoanChuaKetLuanSearch.HopDongKhamSucKhoeId = event[0].KeyId;
        // }
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
                src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_10__["LocalStorageHelper"].setItem("additionalSearchStringKhamDoanChuaKetLuanCLS", queryString);
            }
        }
    }
};
KhamDoanChuaKetLuanKskListComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maTNTemplate', { static: true })
], KhamDoanChuaKetLuanKskListComponent.prototype, "maTNTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ketLuanTemplate', { static: true })
], KhamDoanChuaKetLuanKskListComponent.prototype, "ketLuanTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gioiTinhTemplate', { static: true })
], KhamDoanChuaKetLuanKskListComponent.prototype, "gioiTinhTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dichVuDaThucHienTemplate', { static: true })
], KhamDoanChuaKetLuanKskListComponent.prototype, "dichVuDaThucHienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], { static: true })
], KhamDoanChuaKetLuanKskListComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], KhamDoanChuaKetLuanKskListComponent.prototype, "sort", void 0);
KhamDoanChuaKetLuanKskListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kham-doan-chua-ket-luan-ksk-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-chua-ket-luan-ksk-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-chua-ket-luan-ksk-list/kham-doan-chua-ket-luan-ksk-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-chua-ket-luan-ksk-list.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-chua-ket-luan-ksk-list/kham-doan-chua-ket-luan-ksk-list.component.scss")).default]
    })
], KhamDoanChuaKetLuanKskListComponent);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-da-ket-luan-ksk-list/kham-doan-da-ket-luan-ksk-list.component.scss":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-da-ket-luan-ksk-list/kham-doan-da-ket-luan-ksk-list.component.scss ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWtldC1sdWFuLWNscy1rc2sva2hhbS1kb2FuLWRhLWtldC1sdWFuLWtzay1saXN0L2toYW0tZG9hbi1kYS1rZXQtbHVhbi1rc2stbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-da-ket-luan-ksk-list/kham-doan-da-ket-luan-ksk-list.component.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-da-ket-luan-ksk-list/kham-doan-da-ket-luan-ksk-list.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: KhamDoanDaKetLuanKskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanDaKetLuanKskListComponent", function() { return KhamDoanDaKetLuanKskListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/kham-doan.enum */ "./src/app/shared/enum/kham-doan.enum.ts");
/* harmony import */ var _kham_doan_ket_luan_cls_ksk_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../kham-doan-ket-luan-cls-ksk.model */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk.model.ts");














let KhamDoanDaKetLuanKskListComponent = class KhamDoanDaKetLuanKskListComponent {
    constructor(authService, router, notificationService, route) {
        this.authService = authService;
        this.router = router;
        this.notificationService = notificationService;
        this.route = route;
        this.khamDoanDaKetLuanSearch = new _kham_doan_ket_luan_cls_ksk_model__WEBPACK_IMPORTED_MODULE_13__["KhamDoanDaKetLuanSearch"]();
        this.baseRoute = "/kham-doan/kham-doan-ket-luan-cls-ksk";
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_9___default.a;
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
                var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__["LocalStorageHelper"].getItem("additionalSearchStringKhamDoanDaKetLuanCLS");
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
            if (menuInfo.HinhThucKhamBenh != src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_12__["HinhThucKhamBenh"].KhamDoanNgoaiVien) {
                src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__["LocalStorageHelper"].removeItem("additionalSearchStringKhamDoanDaKetLuanCLS");
                queryString = JSON.stringify(this.khamDoanDaKetLuanSearch);
            }
            else {
                this.khamDoanDaKetLuanSearch.CongTyKhamSucKhoeId = this.authService.getCongTyKhamSucKhoeId();
                this.khamDoanDaKetLuanSearch.HopDongKhamSucKhoeId = this.authService.getHopDongKhamSucKhoeId();
                queryString = JSON.stringify(this.khamDoanDaKetLuanSearch);
                src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__["LocalStorageHelper"].setItem("additionalSearchStringKhamDoanDaKetLuanCLS", queryString);
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
        this.router.navigateByUrl('/kham-doan/kham-doan-ket-luan-cls-ksk?holdQuery=true');
        var queryString = JSON.stringify(this.khamDoanDaKetLuanSearch);
        this.gridChildDaKetLuan._additionalSearchString = queryString;
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__["LocalStorageHelper"].setItem("additionalSearchStringKhamDoanDaKetLuanCLS", queryString);
        this.gridChildDaKetLuan.search();
    }
    congTyKhamSucKhoeChange(event) {
        // this.location.replaceState(this.baseRoute + '?holdQuery=true');
        this.changeDataCongTy = true;
        if (event != undefined && event != null) {
            this.router.navigateByUrl('/kham-doan/kham-doan-ket-luan-cls-ksk?holdQuery=true');
            this.khamDoanDaKetLuanSearch.HopDongKhamSucKhoeId = null;
            this.khamDoanDaKetLuanSearch.TenSoHopDong = null;
            this.khamDoanDaKetLuanSearch.CongTyKhamSucKhoeId = event.KeyId;
            this.khamDoanDaKetLuanSearch.TenCongTy = event.Ten;
            let queryString = JSON.stringify(this.khamDoanDaKetLuanSearch);
            this.gridChildDaKetLuan._additionalSearchString = null;
            this.gridChildDaKetLuan.search();
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__["LocalStorageHelper"].setItem("additionalSearchStringKhamDoanDaKetLuanCLS", queryString);
        }
        else {
            // this.location.replaceState(this.baseRoute + '?holdQuery=true');
            this.router.navigateByUrl('/kham-doan/kham-doan-ket-luan-cls-ksk?holdQuery=true');
            this.khamDoanDaKetLuanSearch.CongTyKhamSucKhoeId = null;
            this.khamDoanDaKetLuanSearch.TenCongTy = null;
            this.khamDoanDaKetLuanSearch.HopDongKhamSucKhoeId = null;
            this.khamDoanDaKetLuanSearch.TenSoHopDong = null;
            let queryString = JSON.stringify(this.khamDoanDaKetLuanSearch);
            this.gridChildDaKetLuan._additionalSearchString = queryString;
            this.gridChildDaKetLuan.search();
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__["LocalStorageHelper"].setItem("additionalSearchStringKhamDoanDaKetLuanCLS", queryString);
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
            this.router.navigateByUrl('/kham-doan/kham-doan-ket-luan-cls-ksk?holdQuery=true');
            this.khamDoanDaKetLuanSearch.HopDongKhamSucKhoeId = null;
            this.khamDoanDaKetLuanSearch.TenSoHopDong = null;
            let queryString = JSON.stringify(this.khamDoanDaKetLuanSearch);
            this.gridChildDaKetLuan._additionalSearchString = queryString;
            this.gridChildDaKetLuan.search();
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__["LocalStorageHelper"].setItem("additionalSearchStringKhamDoanDaKetLuanCLS", queryString);
        }
    }
    chinhSua(id, yeuCauTiepNhanId, congTyKhamSucKhoeId, hopdongId) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Update)) {
            this.router.navigate([this.baseRoute + "/detail/" + yeuCauTiepNhanId + "/" + hopdongId + "/" + congTyKhamSucKhoeId]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
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
                src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__["LocalStorageHelper"].setItem("additionalSearchStringKhamDoanDaKetLuanCLS", queryString);
            }
        }
    }
};
KhamDoanDaKetLuanKskListComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maTNTemplate', { static: true })
], KhamDoanDaKetLuanKskListComponent.prototype, "maTNTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ketLuanTemplate', { static: true })
], KhamDoanDaKetLuanKskListComponent.prototype, "ketLuanTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gioiTinhTemplate', { static: true })
], KhamDoanDaKetLuanKskListComponent.prototype, "gioiTinhTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dichVuDaThucHienTemplate', { static: true })
], KhamDoanDaKetLuanKskListComponent.prototype, "dichVuDaThucHienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], { static: true })
], KhamDoanDaKetLuanKskListComponent.prototype, "gridChildDaKetLuan", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], KhamDoanDaKetLuanKskListComponent.prototype, "sort", void 0);
KhamDoanDaKetLuanKskListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kham-doan-da-ket-luan-ksk-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-da-ket-luan-ksk-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-da-ket-luan-ksk-list/kham-doan-da-ket-luan-ksk-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-da-ket-luan-ksk-list.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-da-ket-luan-ksk-list/kham-doan-da-ket-luan-ksk-list.component.scss")).default]
    })
], KhamDoanDaKetLuanKskListComponent);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk-doan-detail/kham-doan-ket-luan-cls-ksk-doan-detail.component.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk-doan-detail/kham-doan-ket-luan-cls-ksk-doan-detail.component.scss ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".zoom {\n  padding: 50px;\n  background-color: green;\n  transition: transform 0.2s;\n  /* Animation */\n  width: 200px;\n  height: 200px;\n  margin: 0 auto;\n}\n\n.zoom:hover {\n  transform: scale(1.5);\n  /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */\n}\n\n.margin_left_10px {\n  margin-left: 10px;\n}\n\nfieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em;\n  padding-bottom: 0.625em;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline !important;\n}\n\ntable {\n  width: 100%;\n  background-color: white;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\ntable th {\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\ntable th.w-450 {\n  width: 400px;\n}\n\ntable th.w-250 {\n  width: 250px;\n}\n\ntable tr.bg-light-red {\n  background-color: #eaa3a3;\n}\n\ntable tr.in-dam {\n  border-bottom: 2px solid white !important;\n}\n\n.in-dam {\n  font-weight: bold;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4ta2V0LWx1YW4tY2xzLWtzay9raGFtLWRvYW4ta2V0LWx1YW4tY2xzLWtzay1kb2FuLWRldGFpbC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGtoYW0tZG9hblxca2hhbS1kb2FuLWtldC1sdWFuLWNscy1rc2tcXGtoYW0tZG9hbi1rZXQtbHVhbi1jbHMta3NrLWRvYW4tZGV0YWlsXFxraGFtLWRvYW4ta2V0LWx1YW4tY2xzLWtzay1kb2FuLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4ta2V0LWx1YW4tY2xzLWtzay9raGFtLWRvYW4ta2V0LWx1YW4tY2xzLWtzay1kb2FuLWRldGFpbC9raGFtLWRvYW4ta2V0LWx1YW4tY2xzLWtzay1kb2FuLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxxRkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UseUNBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWtldC1sdWFuLWNscy1rc2sva2hhbS1kb2FuLWtldC1sdWFuLWNscy1rc2stZG9hbi1kZXRhaWwva2hhbS1kb2FuLWtldC1sdWFuLWNscy1rc2stZG9hbi1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuem9vbSB7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgLyogQW5pbWF0aW9uICovXG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi56b29tOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICAvKiAoMTUwJSB6b29tIC0gTm90ZTogaWYgdGhlIHpvb20gaXMgdG9vIGxhcmdlLCBpdCB3aWxsIGdvIG91dHNpZGUgb2YgdGhlIHZpZXdwb3J0KSAqL1xufVxuXG4ubWFyZ2luX2xlZnRfMTBweCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5maWVsZHNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgcGFkZGluZy10b3A6IDAuMzVlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW07XG4gIHBhZGRpbmctbGVmdDogMC43NWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1ZW07XG4gIGJvcmRlcjogMXB4ICNlMGUwZTA7XG4gIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcbn1cblxuZmllbGRzZXQgLml0ZW1fcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmZpZWxkc2V0IHVsID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmZpZWxkc2V0IHVsLmlubGluZSA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxudGFibGUgdGgge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxudGFibGUgdGgudy00NTAge1xuICB3aWR0aDogNDAwcHg7XG59XG5cbnRhYmxlIHRoLnctMjUwIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG50YWJsZSB0ci5iZy1saWdodC1yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFhM2EzO1xufVxuXG50YWJsZSB0ci5pbi1kYW0ge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmluLWRhbSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSIsIi56b29tIHtcbiAgcGFkZGluZzogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICAvKiBBbmltYXRpb24gKi9cbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnpvb206aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gIC8qICgxNTAlIHpvb20gLSBOb3RlOiBpZiB0aGUgem9vbSBpcyB0b28gbGFyZ2UsIGl0IHdpbGwgZ28gb3V0c2lkZSBvZiB0aGUgdmlld3BvcnQpICovXG59XG5cbi5tYXJnaW5fbGVmdF8xMHB4IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbmZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbTtcbiAgYm9yZGVyOiAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xufVxuXG5maWVsZHNldCAuaXRlbV9yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuZmllbGRzZXQgdWwgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuZmllbGRzZXQgdWwuaW5saW5lID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG50YWJsZSB0aCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG50YWJsZSB0aC53LTQ1MCB7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxudGFibGUgdGgudy0yNTAge1xuICB3aWR0aDogMjUwcHg7XG59XG5cbnRhYmxlIHRyLmJnLWxpZ2h0LXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWEzYTM7XG59XG5cbnRhYmxlIHRyLmluLWRhbSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uaW4tZGFtIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk-doan-detail/kham-doan-ket-luan-cls-ksk-doan-detail.component.ts":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk-doan-detail/kham-doan-ket-luan-cls-ksk-doan-detail.component.ts ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: KhamDoanKetLuanClsKskDoanDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanKetLuanClsKskDoanDetailComponent", function() { return KhamDoanKetLuanClsKskDoanDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _ket_qua_mau_popup_ket_qua_mau_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ket-qua-mau-popup/ket-qua-mau-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/ket-qua-mau-popup/ket-qua-mau-popup.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _can_lam_sang_lich_su_can_lam_sang_xem_ket_qua_cdha_tdcn_popup_xem_ket_qua_cdha_tdcn_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../can-lam-sang/lich-su-can-lam-sang/xem-ket-qua-cdha-tdcn-popup/xem-ket-qua-cdha-tdcn-popup.component */ "./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/xem-ket-qua-cdha-tdcn-popup/xem-ket-qua-cdha-tdcn-popup.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var src_app_core_utilities_file_download_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/utilities/file-download.helper */ "./src/app/core/utilities/file-download.helper.ts");
/* harmony import */ var _kham_benh_kham_benh_lan_kham_hien_tai_phieu_in_xet_nghiem_popup_phieu_in_xet_nghiem_popup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../kham-benh/kham-benh/lan-kham-hien-tai/phieu-in-xet-nghiem-popup/phieu-in-xet-nghiem-popup.component */ "./src/app/modules/main/kham-benh/kham-benh/lan-kham-hien-tai/phieu-in-xet-nghiem-popup/phieu-in-xet-nghiem-popup.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_shared_component_dialogs_view_image_pdf_view_image_pdf_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component */ "./src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component.ts");
/* harmony import */ var _kham_benh_kham_benh_lan_kham_hien_tai_view_image_pdf_list_view_image_pdf_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../kham-benh/kham-benh/lan-kham-hien-tai/view-image-pdf-list/view-image-pdf-list.component */ "./src/app/modules/main/kham-benh/kham-benh/lan-kham-hien-tai/view-image-pdf-list/view-image-pdf-list.component.ts");
/* harmony import */ var _kham_benh_kham_benh_lan_kham_hien_tai_lay_mau_xet_nghiem_ket_qua_popup_lay_mau_xet_nghiem_ket_qua_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../kham-benh/kham-benh/lan-kham-hien-tai/lay-mau-xet-nghiem-ket-qua-popup/lay-mau-xet-nghiem-ket-qua-popup.component */ "./src/app/modules/main/kham-benh/kham-benh/lan-kham-hien-tai/lay-mau-xet-nghiem-ket-qua-popup/lay-mau-xet-nghiem-ket-qua-popup.component.ts");
/* harmony import */ var _kham_doan_ket_luan_cls_ksk_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../kham-doan-ket-luan-cls-ksk.model */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk.model.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");

























let KhamDoanKetLuanClsKskDoanDetailComponent = class KhamDoanKetLuanClsKskDoanDetailComponent {
    constructor(apiService, route, notificationService, authService, dialog, router, http, baseService) {
        this.apiService = apiService;
        this.route = route;
        this.notificationService = notificationService;
        this.authService = authService;
        this.dialog = dialog;
        this.router = router;
        this.http = http;
        this.baseService = baseService;
        this.khamDoanKetLuanCLS = {};
        this.phieuInXetNghiemVo = new _kham_doan_ket_luan_cls_ksk_model__WEBPACK_IMPORTED_MODULE_18__["PhieuInXetNghiemVo"];
        this.gridColumns = [];
        this.gridChildColumns = [];
        this.ddd = "";
        this.urlGetDataGrid = "KhamDoan/GetDataThongTinCLSForGridAsync";
        this.urlGetTotalPageGrid = "KhamDoan/GetTotalPageForGridAsyncKetQuaCLS";
        this.hopDongId = 0;
        this.congTyId = 0;
        this.additonString = "";
        this.trangThaiHopDong = false;
        this.from = "";
        this.groups = [{ field: 'LoaiKetQuaCLS' }];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].KhamDoanKetLuanCanLamSangKhamSucKhoeDoan;
        let id = this.route.snapshot.params.id;
        this.hopDongId = this.route.snapshot.params.hopDongNhanVienId;
        this.congTyId = this.route.snapshot.params.congTyId;
        this.from = this.route.snapshot.params.f;
        this.additonString = id + "-" + this.hopDongId + "-" + this.congTyId;
        this.checkHopDongKetThuc(this.hopDongId, this.congTyId);
        id = (id === undefined || id === null) ? 0 : id;
        const x = new Number(id);
        this.yeuCauTiepNhanId = x;
        this.khamDoanKetLuanCLS.Id = this.yeuCauTiepNhanId;
        this.getById(this.yeuCauTiepNhanId);
        // this.gridColumns = [
        //   { Field: "NoiDung", Title: "Nội dung", Width: 90, Sortable: true},
        //   { Field: "NguoiThucHien", Title: "Người thực hiện", Width: 90, Sortable: true},
        //   { Field: "NgayThucHien", Title: "Ngày thực hiện", Width: 90, Sortable: true,Template: this.ngayThucHienTemplate},
        //   { Field: "NguoiKetLuan", Title: "Người kết luận", Width: 90, Sortable: true},
        //   { Field: "NgayKetLuan", Title: "Ngày kết luận", Width: 100, Sortable: true,Template: this.ngayKetLuanTemplate},
        //   { Field: "ChanDoan", Title: "Chẩn đoán", Width: 90, Sortable: true},
        //   { Field: "XemKQ", Title: "Xem KQ", Width: 80, Sortable: true}
        // ];
        this.gridColumns = [
            { Field: "LoaiKetQuaCLS", Title: "", Width: 200, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "NoiDung", Title: "Nội dung", Width: 150, Sortable: true },
            { Field: "NguoiThucHien", Title: "Người Thực hiện", Width: 150, Sortable: true },
            { Field: "NgayThucHien", Title: "Ngày thực hiện", Width: 150, Sortable: true },
            { Field: "BacSiKetLuan", Title: "Người kết luận", Width: 100, Sortable: true },
            { Field: "NgayKetLuan", Title: "Ngày kết luận", Width: 150, Sortable: true },
            { Field: "ChuanDoan", Title: "Chẩn đoán", Width: 100, Sortable: true },
            { Field: "XemKetQua", Title: "Xem KQ", Width: 200, Template: this.xemKetQuaActionTemplate },
            { Field: "", Title: "", Width: 150, Template: this.trangThaiTemplate }
        ];
        this.gridChildColumns = [
            { Field: "TenDichVu", Title: "Tên", Width: 150, Sortable: true },
            { Field: "KetQua", Title: "Kết quả", Width: 250, Sortable: true },
            { Field: "CSBT", Title: "CSBT", Width: 150, Sortable: true },
            { Field: "DonVi", Title: "Đơn vị", Width: 150, Sortable: true },
            { Field: "MayXN", Title: "Máy XN", Width: 150, Sortable: true },
            { Field: "NguoiDuyet", Title: "Người duyệt", Width: 150, Sortable: true },
            { Field: "NgayDuyet", Title: "Ngày duyệt", Width: 150, Sortable: true },
        ];
    }
    checkHopDongKetThuc(hopDongId, congTyId) {
        let model = {
            HopDongId: hopDongId,
            congTyId: congTyId
        };
        this.apiService.post("KhamDoan/CheckHopDongKetThuc", model)
            .subscribe((resultData) => {
            this.trangThaiHopDong = resultData;
        }, (err) => {
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
        });
    }
    onDataBound(event) {
        this.data = event;
    }
    ketQuaMau() {
        this.apiService.post("KhamDoan/GetListKetQuaTheoYeuCauTiepNhan?yeuCauTiepNhanId=" + this.yeuCauTiepNhanId)
            .subscribe((resultData) => {
            this.dialog
                .open(_ket_qua_mau_popup_ket_qua_mau_popup_component__WEBPACK_IMPORTED_MODULE_8__["KetQuaMauPopupComponent"], {
                width: "400px",
                data: { Model: resultData }
            })
                .afterClosed()
                .subscribe((result) => {
                if (result != undefined) {
                    this.khamDoanKetLuanCLS.KSKKetQuaCanLamSang = "";
                    let number = 1;
                    let resultLenght = result.length;
                    result.forEach(element => {
                        if (element.IsCheck == true) {
                            this.khamDoanKetLuanCLS.KSKKetQuaCanLamSang += element.KetQuaCLS;
                            if (resultLenght > number) {
                                this.khamDoanKetLuanCLS.KSKKetQuaCanLamSang += "; ";
                            }
                            number++;
                        }
                    });
                }
            });
        }, (err) => {
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
        });
    }
    // cls
    showPopupLoadingData() {
        if (this.popupLoadingData == undefined
            || this.popupLoadingData == null
            || this.popupLoadingData.openDialogs == undefined
            || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
            this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"], {
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
    OpenClickPopupXemKetQuaCLS(dataItem) {
        if (dataItem.TenGuidList.length == 1) {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpParams"]({
                fromObject: {
                    tenGuid: dataItem.TenGuid,
                    duongDan: dataItem.XemKetQua,
                },
            });
            this.apiService
                .get("TaiLieuDinhKem/GetTaiLieuUrl", params)
                .subscribe((result) => {
                if (result) {
                    if (dataItem.TenGuid.indexOf(".pdf") != -1 ||
                        dataItem.TenGuid.indexOf(".PDF") != -1) {
                        this.dialog.open(src_app_shared_component_dialogs_view_image_pdf_view_image_pdf_component__WEBPACK_IMPORTED_MODULE_15__["ViewImagePdfComponent"], {
                            disableClose: false,
                            width: "1000px",
                            height: "600px",
                            data: {
                                Type: "PDF",
                                Title: "Xem tài liệu",
                                Description: result.MoTa !== null ? result.MoTa : "",
                                Src: result,
                            },
                        });
                    }
                    else {
                        this.dialog.open(src_app_shared_component_dialogs_view_image_pdf_view_image_pdf_component__WEBPACK_IMPORTED_MODULE_15__["ViewImagePdfComponent"], {
                            disableClose: false,
                            width: '1000px',
                            height: '600px',
                            data: { Type: "Image", Title: "Xem ảnh", Description: (dataItem.MoTa != undefined ? dataItem.MoTa : ""), Src: result }
                        });
                    }
                }
            });
        }
        else {
            this.dialog.open(_kham_benh_kham_benh_lan_kham_hien_tai_view_image_pdf_list_view_image_pdf_list_component__WEBPACK_IMPORTED_MODULE_16__["ViewImagePdfListComponent"], {
                disableClose: true,
                width: '1000px',
                height: 'auto',
                // data: { Type:"Image",Title: "Xem ảnh", Description: (dataItem.MoTa != undefined ? dataItem.MoTa : ""),Src: result}
                data: { Model: dataItem }
            }).afterClosed()
                .subscribe((result) => {
            });
        }
    }
    downloadFile(dataItem) {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang tải file...' }
        });
        dataItem.TenGuidList.forEach(element => {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpParams"]({
                fromObject: {
                    tenGuid: element.TenGuid,
                    duongDan: dataItem.XemKetQua,
                },
            });
            this.apiService
                .get("TaiLieuDinhKem/GetTaiLieuUrl", params)
                .subscribe((result) => {
                console.log(result);
                this.dataPopup = result;
                const options = new _angular_http__WEBPACK_IMPORTED_MODULE_11__["RequestOptions"]({ responseType: _angular_http__WEBPACK_IMPORTED_MODULE_11__["ResponseContentType"].Blob });
                this.http.get(this.dataPopup, options).subscribe(res => {
                    Object(src_app_core_utilities_file_download_helper__WEBPACK_IMPORTED_MODULE_12__["saveFile"])(res.blob(), element.TenFile);
                    this.dialog.closeAll();
                });
            });
        });
    }
    xemKetQua(dataItem) {
        // if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
        this.dialog.open(_can_lam_sang_lich_su_can_lam_sang_xem_ket_qua_cdha_tdcn_popup_xem_ket_qua_cdha_tdcn_popup_component__WEBPACK_IMPORTED_MODULE_10__["XemKetQuaCdhaTdcnPopupComponent"], {
            disableClose: false,
            width: '1000px',
            data: dataItem.Id
        }).afterClosed().subscribe(result => {
        });
        // } else {
        //   this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        // }
    }
    taiKetQua(dataItem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
            this.showPopupLoadingData();
            var obj = {
                "Id": dataItem.Id,
                "HostingName": window.location.protocol + "//" + window.location.host
            };
            let html = yield this.apiService.post("CanLamSang/XuLyInPhieuKetQua", obj).toPromise()
                .catch(err => {
                if (err.Message !== 'Validation Failed') {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            });
            if (html != undefined) {
                var objHtml = {
                    "Html": html,
                    "TenFile": "KetQuaCDHATDCN"
                };
                let file = yield this.apiService.postExportPdf('CanLamSang/GetFilePDFFromHtml', objHtml).toPromise()
                    .catch(err => {
                    if (err.Message !== 'Validation Failed') {
                        this.notificationService.showError(err.Message);
                    }
                    this.closePopupLoadingData();
                });
                if (file != undefined) {
                    let newBlob = new Blob([file], { type: "application/pdf" });
                    let datalocalURL = window.URL.createObjectURL(newBlob);
                    const options = new _angular_http__WEBPACK_IMPORTED_MODULE_11__["RequestOptions"]({ responseType: _angular_http__WEBPACK_IMPORTED_MODULE_11__["ResponseContentType"].Blob });
                    this.http.get(datalocalURL, options).subscribe(result => {
                        Object(src_app_core_utilities_file_download_helper__WEBPACK_IMPORTED_MODULE_12__["saveFile"])(result.blob(), "KetQuaCDHATDCN.pdf");
                        this.closePopupLoadingData();
                    });
                }
            }
        });
    }
    //================================= Yêu cầu chạy lại xét nghiệm =======================================
    OpenClickPopupXemKetQuaXNCLS(dataItem) {
        let phienXetNghiemId = dataItem.PhienXetNghiemId;
        let nhomDichVuBenhVienId = dataItem.NhomDichVuBenhVienId;
        this.dialog.open(_kham_benh_kham_benh_lan_kham_hien_tai_phieu_in_xet_nghiem_popup_phieu_in_xet_nghiem_popup_component__WEBPACK_IMPORTED_MODULE_13__["PhieuInXetNghiemComponent"], {
            disableClose: false,
            width: '1000px',
            data: { phienXetNghiemId, nhomDichVuBenhVienId }
        }).afterClosed().subscribe(res => {
            if (res == "Yes") {
            }
        });
    }
    downloadXNCLS(dataItem) {
        this.phieuInXetNghiemVo.PhienXetNghiemId = dataItem.PhienXetNghiemId;
        this.phieuInXetNghiemVo.NhomDichVuBenhVienId = dataItem.NhomDichVuBenhVienId;
        if (window.location.protocol == "http:") {
            this.phieuInXetNghiemVo.HostingName = "http://" + window.location.host;
        }
        else {
            this.phieuInXetNghiemVo.HostingName = "http://" + window.location.host;
        }
        this.apiService.post('KhamBenh/ExportPdfKetQuaXetNghiem', this.phieuInXetNghiemVo).subscribe(arrHtml => {
            this.dialog.open(_kham_benh_kham_benh_lan_kham_hien_tai_lay_mau_xet_nghiem_ket_qua_popup_lay_mau_xet_nghiem_ket_qua_popup_component__WEBPACK_IMPORTED_MODULE_17__["LayMauXetNghiemKetQuaPopupComponent"], {
                disableClose: false,
                width: '1000px',
                data: arrHtml
            }).afterClosed().subscribe(result => {
            });
            this.closePopupLoadingData();
        }, (err) => {
            if (err.Message !== 'Validation Failed') {
                this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
        });
    }
    getSharedData() {
        return this.khamDoanKetLuanCLS;
    }
    getById(id) {
        this.apiService.get("KhamDoan/GetDataCLS?id=" + id).subscribe(resultData => {
            this.khamDoanKetLuanCLS = resultData;
        });
    }
    save() {
        var self = this;
        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmComponent"], {
            disableClose: false,
            width: "500px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có muốn lưu kết luận cận lâm sàng này không ?",
            },
        }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_20__["SecurityOperation"].Update)) {
                    self.apiService.post("KhamDoan/LuuKetLuanCLS", self.khamDoanKetLuanCLS).subscribe((result) => {
                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_23__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                        self.closePopupLoadingData();
                        this.router.navigateByUrl('/kham-doan/kham-doan-ket-luan-cls-ksk?holdQuery=true');
                    }, (err) => {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                        self.closePopupLoadingData();
                    });
                }
                else {
                    self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__["SystemMessage"].UnAuthorizedMessage);
                }
            }
            // else {
            //   this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
            // }
        });
    }
    cancel() {
        this.ngOnInit();
        this.router.navigateByUrl('/kham-doan/kham-doan-ket-luan-cls-ksk?holdQuery=true');
    }
    redirectKetLuan() {
        var self = this;
        if (!this.trangThaiHopDong) {
            self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmComponent"], {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có muốn lưu kết luận cận lâm sàng và chuyển sang kết luận này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_20__["SecurityOperation"].Update)) {
                        self.apiService.post("KhamDoan/LuuKetLuanCLS", self.khamDoanKetLuanCLS).subscribe((result) => {
                            self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_23__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                            self.closePopupLoadingData();
                            self.router.navigate(['/kham-doan/ket-luan-kham-suc-khoe-doan/chi-tiet'], { queryParams: { "Id": this.khamDoanKetLuanCLS.HopDongKhamSucKhoeNhanVienId, "YeuCauTiepNhanId": this.yeuCauTiepNhanId, "f": "ketluancls" } });
                        }, (err) => {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                            self.closePopupLoadingData();
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__["SystemMessage"].UnAuthorizedMessage);
                    }
                }
                // else {
                //   this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
                // }
            });
        }
        else {
            self.router.navigate(['/kham-doan/ket-luan-kham-suc-khoe-doan/chi-tiet'], { queryParams: { "Id": this.khamDoanKetLuanCLS.HopDongKhamSucKhoeNhanVienId, "YeuCauTiepNhanId": this.yeuCauTiepNhanId, "f": "ketluancls" } });
        }
    }
};
KhamDoanKetLuanClsKskDoanDetailComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_11__["Http"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_22__["BaseService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
], KhamDoanKetLuanClsKskDoanDetailComponent.prototype, "trangThaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('xemKetQuaActionTemplate', { static: true })
], KhamDoanKetLuanClsKskDoanDetailComponent.prototype, "xemKetQuaActionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], KhamDoanKetLuanClsKskDoanDetailComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayThucHienTemplate', { static: true })
], KhamDoanKetLuanClsKskDoanDetailComponent.prototype, "ngayThucHienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayKetLuanTemplate', { static: true })
], KhamDoanKetLuanClsKskDoanDetailComponent.prototype, "ngayKetLuanTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('grid', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_24__["GridComponent"], static: false })
], KhamDoanKetLuanClsKskDoanDetailComponent.prototype, "grid", void 0);
KhamDoanKetLuanClsKskDoanDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kham-doan-ket-luan-cls-ksk-doan-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-ket-luan-cls-ksk-doan-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk-doan-detail/kham-doan-ket-luan-cls-ksk-doan-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-ket-luan-cls-ksk-doan-detail.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk-doan-detail/kham-doan-ket-luan-cls-ksk-doan-detail.component.scss")).default]
    })
], KhamDoanKetLuanClsKskDoanDetailComponent);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk-list/kham-doan-ket-luan-cls-ksk-list.component.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk-list/kham-doan-ket-luan-cls-ksk-list.component.scss ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".greenText {\n  color: green;\n}\n\n.orangeText {\n  color: orange;\n}\n\n.blackText {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4ta2V0LWx1YW4tY2xzLWtzay9raGFtLWRvYW4ta2V0LWx1YW4tY2xzLWtzay1saXN0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxca2hhbS1kb2FuXFxraGFtLWRvYW4ta2V0LWx1YW4tY2xzLWtza1xca2hhbS1kb2FuLWtldC1sdWFuLWNscy1rc2stbGlzdFxca2hhbS1kb2FuLWtldC1sdWFuLWNscy1rc2stbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4ta2V0LWx1YW4tY2xzLWtzay9raGFtLWRvYW4ta2V0LWx1YW4tY2xzLWtzay1saXN0L2toYW0tZG9hbi1rZXQtbHVhbi1jbHMta3NrLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4va2hhbS1kb2FuL2toYW0tZG9hbi1rZXQtbHVhbi1jbHMta3NrL2toYW0tZG9hbi1rZXQtbHVhbi1jbHMta3NrLWxpc3Qva2hhbS1kb2FuLWtldC1sdWFuLWNscy1rc2stbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmVlblRleHQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5vcmFuZ2VUZXh0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmJsYWNrVGV4dCB7XG4gIGNvbG9yOiBibGFjaztcbn0iLCIuZ3JlZW5UZXh0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ub3JhbmdlVGV4dCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5ibGFja1RleHQge1xuICBjb2xvcjogYmxhY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk-list/kham-doan-ket-luan-cls-ksk-list.component.ts":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk-list/kham-doan-ket-luan-cls-ksk-list.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: KhamDoanKetLuanClsKskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanKetLuanClsKskListComponent", function() { return KhamDoanKetLuanClsKskListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var _kham_doan_ket_luan_kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../kham-doan-ket-luan/kham-doan-ket-luan.model */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/kham-doan-ket-luan.model.ts");






let KhamDoanKetLuanClsKskListComponent = class KhamDoanKetLuanClsKskListComponent {
    constructor(route) {
        this.route = route;
        this.baseRoute = "/kham-doan/ket-luan-kham-suc-khoe-doan";
        this.indexTap = 0;
        this.holdQuery = null;
        this.listStatusSelectTabKhamDoanKetLuan = new _kham_doan_ket_luan_kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_5__["ListStatusSelectTabKhamDoanKetLuan"]();
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].KhamDoanKetLuanKhamSucKhoeDoan;
        if (this.route.snapshot.queryParams.holdQuery != null) {
            this.holdQuery = this.route.snapshot.queryParams.holdQuery;
        }
        if (this.holdQuery != null && src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_4__["LocalStorageHelper"].getItem('additionalSearchStringKetLuanKhamDoanCLS') != null) {
            this.data = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_4__["LocalStorageHelper"].getItem('additionalSearchStringKetLuanKhamDoanCLS');
            this.listStatusSelectTabKhamDoanKetLuan = JSON.parse(this.data);
        }
        else {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_4__["LocalStorageHelper"].setItem('additionalSearchStringKetLuanKhamDoanCLS', null);
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
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_4__["LocalStorageHelper"].setItem('additionalSearchStringKetLuanKhamDoanCLS', JSON.stringify(this.listStatusSelectTabKhamDoanKetLuan));
    }
};
KhamDoanKetLuanClsKskListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
KhamDoanKetLuanClsKskListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kham-doan-ket-luan-cls-ksk-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-ket-luan-cls-ksk-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk-list/kham-doan-ket-luan-cls-ksk-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-ket-luan-cls-ksk-list.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk-list/kham-doan-ket-luan-cls-ksk-list.component.scss")).default]
    })
], KhamDoanKetLuanClsKskListComponent);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk-routing.module.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk-routing.module.ts ***!
  \****************************************************************************************************************/
/*! exports provided: KhamDoanKetLuanClsKskRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanKetLuanClsKskRoutingModule", function() { return KhamDoanKetLuanClsKskRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _kham_doan_ket_luan_cls_ksk_doan_detail_kham_doan_ket_luan_cls_ksk_doan_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kham-doan-ket-luan-cls-ksk-doan-detail/kham-doan-ket-luan-cls-ksk-doan-detail.component */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk-doan-detail/kham-doan-ket-luan-cls-ksk-doan-detail.component.ts");
/* harmony import */ var _kham_doan_ket_luan_cls_ksk_list_kham_doan_ket_luan_cls_ksk_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kham-doan-ket-luan-cls-ksk-list/kham-doan-ket-luan-cls-ksk-list.component */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk-list/kham-doan-ket-luan-cls-ksk-list.component.ts");








const routes = [
    {
        path: '',
        component: _kham_doan_ket_luan_cls_ksk_list_kham_doan_ket_luan_cls_ksk_list_component__WEBPACK_IMPORTED_MODULE_7__["KhamDoanKetLuanClsKskListComponent"],
        data: {
            title: "Kết luận cls khám sức khỏe ",
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanKetLuanCanLamSangKhamSucKhoeDoan,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
    {
        path: 'detail/:id/:hopDongNhanVienId/:congTyId',
        component: _kham_doan_ket_luan_cls_ksk_doan_detail_kham_doan_ket_luan_cls_ksk_doan_detail_component__WEBPACK_IMPORTED_MODULE_6__["KhamDoanKetLuanClsKskDoanDetailComponent"],
        data: {
            title: 'Kết luận cls khám sức khỏe đoàn',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanKetLuanCanLamSangKhamSucKhoeDoan,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
];
let KhamDoanKetLuanClsKskRoutingModule = class KhamDoanKetLuanClsKskRoutingModule {
};
KhamDoanKetLuanClsKskRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], KhamDoanKetLuanClsKskRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: KhamDoanKetLuanClsKskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanKetLuanClsKskModule", function() { return KhamDoanKetLuanClsKskModule; });
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
/* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-intl */ "./node_modules/@progress/kendo-angular-intl/dist/fesm2015/index.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _kham_doan_ket_luan_cls_ksk_list_kham_doan_ket_luan_cls_ksk_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./kham-doan-ket-luan-cls-ksk-list/kham-doan-ket-luan-cls-ksk-list.component */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk-list/kham-doan-ket-luan-cls-ksk-list.component.ts");
/* harmony import */ var _kham_doan_ket_luan_cls_ksk_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./kham-doan-ket-luan-cls-ksk-routing.module */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk-routing.module.ts");
/* harmony import */ var _kham_doan_ket_luan_cls_ksk_doan_detail_kham_doan_ket_luan_cls_ksk_doan_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./kham-doan-ket-luan-cls-ksk-doan-detail/kham-doan-ket-luan-cls-ksk-doan-detail.component */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk-doan-detail/kham-doan-ket-luan-cls-ksk-doan-detail.component.ts");
/* harmony import */ var _ket_qua_mau_popup_ket_qua_mau_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ket-qua-mau-popup/ket-qua-mau-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/ket-qua-mau-popup/ket-qua-mau-popup.component.ts");
/* harmony import */ var _kham_doan_thong_tin_hanh_chinh_kham_doan_thong_tin_hanh_chinh_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../kham-doan-thong-tin-hanh-chinh/kham-doan-thong-tin-hanh-chinh.module */ "./src/app/modules/main/kham-doan/kham-doan-thong-tin-hanh-chinh/kham-doan-thong-tin-hanh-chinh.module.ts");
/* harmony import */ var _kham_benh_kham_benh_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../kham-benh/kham-benh.module */ "./src/app/modules/main/kham-benh/kham-benh.module.ts");
/* harmony import */ var _kham_doan_ket_luan_kham_doan_ket_luan_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../kham-doan-ket-luan/kham-doan-ket-luan.module */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/kham-doan-ket-luan.module.ts");
/* harmony import */ var _kham_doan_chua_ket_luan_ksk_list_kham_doan_chua_ket_luan_ksk_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./kham-doan-chua-ket-luan-ksk-list/kham-doan-chua-ket-luan-ksk-list.component */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-chua-ket-luan-ksk-list/kham-doan-chua-ket-luan-ksk-list.component.ts");
/* harmony import */ var _kham_doan_da_ket_luan_ksk_list_kham_doan_da_ket_luan_ksk_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./kham-doan-da-ket-luan-ksk-list/kham-doan-da-ket-luan-ksk-list.component */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-da-ket-luan-ksk-list/kham-doan-da-ket-luan-ksk-list.component.ts");

























let KhamDoanKetLuanClsKskModule = class KhamDoanKetLuanClsKskModule {
};
KhamDoanKetLuanClsKskModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_kham_doan_ket_luan_cls_ksk_list_kham_doan_ket_luan_cls_ksk_list_component__WEBPACK_IMPORTED_MODULE_16__["KhamDoanKetLuanClsKskListComponent"], _kham_doan_ket_luan_cls_ksk_doan_detail_kham_doan_ket_luan_cls_ksk_doan_detail_component__WEBPACK_IMPORTED_MODULE_18__["KhamDoanKetLuanClsKskDoanDetailComponent"], _ket_qua_mau_popup_ket_qua_mau_popup_component__WEBPACK_IMPORTED_MODULE_19__["KetQuaMauPopupComponent"], _kham_doan_chua_ket_luan_ksk_list_kham_doan_chua_ket_luan_ksk_list_component__WEBPACK_IMPORTED_MODULE_23__["KhamDoanChuaKetLuanKskListComponent"], _kham_doan_da_ket_luan_ksk_list_kham_doan_da_ket_luan_ksk_list_component__WEBPACK_IMPORTED_MODULE_24__["KhamDoanDaKetLuanKskListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _kham_doan_ket_luan_cls_ksk_routing_module__WEBPACK_IMPORTED_MODULE_17__["KhamDoanKetLuanClsKskRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_14__["LayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_13__["GridModule"],
            _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_11__["IntlModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_12__["PdfViewerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
            _kham_doan_thong_tin_hanh_chinh_kham_doan_thong_tin_hanh_chinh_module__WEBPACK_IMPORTED_MODULE_20__["KhamDoanThongTinHanhChinhModule"],
            _kham_benh_kham_benh_module__WEBPACK_IMPORTED_MODULE_21__["KhamBenhModule"],
            _kham_doan_ket_luan_kham_doan_ket_luan_module__WEBPACK_IMPORTED_MODULE_22__["KhamDoanKetLuanModule"]
        ], entryComponents: [
            _ket_qua_mau_popup_ket_qua_mau_popup_component__WEBPACK_IMPORTED_MODULE_19__["KetQuaMauPopupComponent"]
        ]
    })
], KhamDoanKetLuanClsKskModule);



/***/ })

}]);
//# sourceMappingURL=default~kham-benh-kham-doan-tat-ca-phong-kham-doan-tat-ca-phong-module~kham-doan-kham-doan-ket-luan-~89aa333d-es2015.js.map