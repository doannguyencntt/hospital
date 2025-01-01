var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~phau-thuat-thu-thuat-lich-su-phau-thuat-thu-thuat-lich-su-phau-thuat-thu-thuat-module~phau-t~569dd880"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-detailed/duyet-ket-qua-detailed.component.html": 
        /*!**********************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-detailed/duyet-ket-qua-detailed.component.html ***!
          \**********************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n{Title:'Xét Nghiệm',Path:''},\n{Title:'DS Duyệt Kết Quả', Path:'/xet-nghiem/duyet-ket-qua', queryParams: {holdQuery : true}, Active: true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"10px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b order-btn\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chi tiết duyệt kết quả xét nghiệm</h2>\n                <b *ngIf=\"duyetKqXetNghiemDetail.TrangThai == true\"\n                    style=\"color:#bb808b;\">{{duyetKqXetNghiemDetail.TrangThaiDisplay}}</b>\n                <b *ngIf=\"duyetKqXetNghiemDetail.TrangThai == false\"\n                    style=\"color:orange;\">{{duyetKqXetNghiemDetail.TrangThaiDisplay}}</b>\n                <b *ngIf=\"duyetKqXetNghiemDetail.TrangThai == null\"\n                    style=\"color:green;\">{{duyetKqXetNghiemDetail.TrangThaiDisplay}}</b>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <div class=\"row mb-2\">\n                    <fieldset style=\"background: #e1f5fe;\">\n                        <legend>Thông tin hành chính</legend>\n                        <div fxFlex=\"100%\">\n                            <ul class=\"inline\">\n                                <li>Barcode:\n                                    <strong>{{duyetKqXetNghiemDetail.Barcode}}</strong>\n                                </li>\n                                <li>Mã NB:\n                                    <strong>{{duyetKqXetNghiemDetail.MaBn}}</strong>\n                                </li>\n                                <li>Mã TN:\n                                    <strong>{{duyetKqXetNghiemDetail.MaTn}}</strong>\n                                </li>\n                                <li>Họ tên:\n                                    <strong>{{duyetKqXetNghiemDetail.HoTen}}</strong>\n                                </li>\n                                <li>Tuổi:\n                                    <strong>{{duyetKqXetNghiemDetail.Tuoi}}</strong>\n                                </li>\n                                <li>\n                                    Giới tính:\n                                    <strong>{{duyetKqXetNghiemDetail.GioiTinhDisplay}}</strong>\n                                </li>\n                                <li>\n                                    Mã số thẻ: <strong>{{duyetKqXetNghiemDetail.MaBhyt}}</strong>\n                                </li>\n                                <li>\n                                    Tuyến: <strong style=\"color: green;\">{{duyetKqXetNghiemDetail.Tuyen}}</strong>\n                                </li>\n                                <li>\n                                    Mức hưởng: <strong *ngIf=\"duyetKqXetNghiemDetail.MucHuong!=null\"\n                                        style=\"color: blue;\">{{duyetKqXetNghiemDetail.MucHuong}}%</strong>\n                                </li>\n                                <li>Dân tộc:\n                                    <strong>{{duyetKqXetNghiemDetail.DanToc}}</strong>\n                                </li>\n                                <li>\n                                    Địa chỉ:\n                                    <strong>{{duyetKqXetNghiemDetail.DiaChi}}</strong>\n                                </li>\n                                <li>\n                                    Nghề nghiệp:\n                                    <strong>{{duyetKqXetNghiemDetail.NgheNghiep}}</strong>\n                                </li>\n\n                                <li>\n                                    Chẩn đoán: <strong>{{duyetKqXetNghiemDetail.ChanDoanReadonly}}</strong>\n                                </li>\n                                <li>\n                                    Khoa chỉ định: <strong>{{duyetKqXetNghiemDetail.Khoa}}</strong>\n                                </li>\n                                <li>\n                                    Phòng: <strong>{{duyetKqXetNghiemDetail.Phong}}</strong>\n                                </li>\n                                <li *ngIf=\"duyetKqXetNghiemDetail.TenCongTy != null\">\n                                    Tên công ty: <strong>{{duyetKqXetNghiemDetail.TenCongTy}}</strong>\n                                </li>\n                            </ul>\n                        </div>\n                    </fieldset>\n\n                    <fieldset class=\"mt-2 set-col\">\n                        <legend>Chi tiết kết quả xét nghiệm</legend>\n                        <div *ngIf=\"gridDataSource != undefined\">\n                            <app-grid masterName=\"ketQuaXetNghiem\" [sort]=\"sort\" [documentType]=\"documentType\"\n                                [useHeaderDefault]=\"false\" [useAddDeault]=\"false\" [useAddDeault]=\"false\"\n                                [useActionDefault]=\"false\" #gridChiTietDuyetKetQuaXn [checkboxAble]=\"false\"\n                                [gridColumns]=\"gridColumns\" [gridDataSource]=\"gridDataSource\" [groups]=\"groups\"\n                                [pageable]=\"false\" [headerTemplate]=\"headerTemplate\" maxHeight=\"500\">\n                            </app-grid>\n\n                            <ng-template #headerTemplate>\n                                <div style=\"margin-top: 5px;width: 99%; justify-content: space-between;\"\n                                    class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex.lt-md=\"auto\" fxHide.xs\n                                    fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <div fxFlex=\"50%\" class=\"order-search\">\n                                        <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                                        <input fxFlex=\"40%\" [formControl]=\"searchCtrl\"\n                                            class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\"\n                                            name=\"searchString\" [(ngModel)]=\"search.SearchString\"\n                                            (ngModelChange)=\"searchChanges($event)\" (keyup)=\"onKeySearchChanges($event)\"\n                                            placeholder=\"Nhập từ khóa...\" />\n                                    </div>\n                                    <div fxFlex=\"50%\" class=\"order-color\">\n                                        <div class=\"set-color gray\"></div>\n                                        <p>DV chưa gởi duyệt</p>\n                                        <div class=\"set-color black\"></div>\n                                        <p>Bình thường</p>\n                                        <div class=\"set-color blue\"></div>\n                                        <p>Bất thường</p>\n                                        <div class=\"set-color red\"></div>\n                                        <p>Nguy hiểm</p>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </div>\n\n                        <div class=\"order-maneuver\">\n                            <div class=\"first-row\">\n                                <app-combobox id=\"nguoi-thuc-hien\" [disabled]=\"true\" fxFlex=\"30%\" fxFlex.sm=\"50%\"\n                                    label=\"Người Thực Hiện\" [required]=\"true\"\n                                    [(model)]=\"duyetKqXetNghiemDetail.NguoiThucHienId\" class=\"item-no-padding\"\n                                    [modelText]=\"duyetKqXetNghiemDetail.NguoiThucHien\">\n                                </app-combobox>\n\n                                <app-textbox id=\"ghi-chu\" [disabled]=\"duyetKqXetNghiemDetail.TrangThai == null\"\n                                    fxFlex=\"70%\" fxFlex.sm=\"50%\" maxlength=\"1000\"\n                                    [(model)]=\"duyetKqXetNghiemDetail.GhiChu\" label=\"Ghi Chú\">\n                                </app-textbox>\n                                <!-- <app-textbox id=\"chan-doan\" [disabled]=\"duyetKqXetNghiemDetail.TrangThai == null\"\n                                    fxFlex=\"70%\" fxFlex.sm=\"60%\" maxlength=\"250\"\n                                    [(model)]=\"duyetKqXetNghiemDetail.ChanDoan\" label=\"Chẩn Đoán\">\n                                </app-textbox> -->\n                            </div>\n\n                        </div>\n                    </fieldset>\n\n                    <div class=\"form-footer\">\n                        <button type=\"button\" mat-button class=\"mr-1\" (click)=\"quayLai()\"><i class=\"ft-arrow-left\"></i>\n                            Quay lại</button>\n                        <button *ngIf=\"duyetKqXetNghiemDetail.TrangThai != null\" type=\"button\" class=\"mr-1\"\n                            style=\"float: right;\" color=\"primary\" mat-raised-button (click)=\"xuLyDuyet()\">\n                            Duyệt</button>\n                        <button *ngIf=\"coDichVuDuocDuyet\" type=\"button\" class=\"mr-1\" color=\"primary\"\n                            style=\"float: right;\" mat-raised-button mat-button (click)=\"Print()\">\n                            In Kết Quả\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #nhomTemplate let-value=\"value\" let-dataItem>\n    <div style=\"width: 100%;position: absolute;margin-left: 20px;\" kendoTooltip>\n        <strong style=\"width: 100%;\">\n            {{value}}\n            <ul class='inline small ml-20'>\n                <li *ngFor=\"let item of dataItem.items[0].DanhSachLoaiMau\">\n                    <span *ngIf=\"checkHiddenIcon(item, dataItem.items[0].DanhSachLoaiMauDaCoKetQua)\">\n                        <span *ngIf=\"!isMauKhongDat(item, dataItem.items[0].DanhSachLoaiMauKhongDat)\">\n                            <span class='green'>&#10003;</span> {{item}}\n                        </span>\n                        <span *ngIf=\"isMauKhongDat(item, dataItem.items[0].DanhSachLoaiMauKhongDat)\">\n                            <span class='red'>&times; </span> {{item}}\n                        </span>\n                    </span>\n\n                    <span *ngIf=\"!checkHiddenIcon(item, dataItem.items[0].DanhSachLoaiMauDaCoKetQua)\">\n                        <span class='red'></span> {{item}}\n                    </span>\n                </li>\n            </ul>\n\n            <a class='float-right' *ngIf=\"dataItem.items[0].YeuCauChayLai == true\n            && dataItem.items[0].DaDuyet == true && duyetKqXetNghiemDetail.TrangThai != null\" #tooltip=\"kendoTooltip\"\n                tooltipClass=\"tooltip-block\" position=\"top\" [tooltipTemplate]=\"templateInfo\" filter=\"*\"\n                (mouseover)=\"setUpDataTooltip(dataItem)\" kendoTooltip>Yêu\n                cầu chạy lại XN</a>\n\n            <ng-template #templateInfo let-dataItem>\n                <div>\n                    <span>Người yêu cầu: </span><span>{{displayToolTipGridNguoiYeuCau}}</span>\n                </div>\n                <div>\n                    <span>Ngày yêu cầu: </span><span>{{displayToolTipGridNgayYeuCau}}</span>\n                </div>\n                <div>\n                    <span>Lý do yêu cầu: </span><span>{{displayToolTipGridLyDoYeuCau}}</span>\n                </div>\n                <div>\n                    <span>Người duyệt: </span><span>{{displayToolTipGridNguoiDuyet}}</span>\n                </div>\n                <div>\n                    <span>Ngày duyệt: </span><span>{{displayToolTipGridNgayDuyet}}</span>\n                </div>\n            </ng-template>\n        </strong>\n    </div>\n</ng-template>\n\n<ng-template #tenTemplate let-dataItem>\n    <span [ngStyle]=\"{'padding-left':(dataItem.Level)*20+'px','font-weight':dataItem.IdChilds.length>0?'bold':'normal'}\"\n        kendoTooltip title=\"{{dataItem.Ten}}\">{{dataItem.Ten}}</span>\n</ng-template>\n\n<ng-template #kqCuTemplate let-dataItem>\n    <span *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\"\n        [ngStyle]=\"{'color':dataItem.LoaiKetQuaTuMay == 1 ? 'black' : (dataItem.LoaiKetQuaTuMay == 2 ? 'blue' : 'red'),'font-weight':dataItem.ToDamGiaTri?'bold':'normal'}\">{{dataItem.GiaTriCu}}</span>\n</ng-template>\n\n<ng-template #kqTuMayTemplate let-dataItem>\n    <span *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\"\n        [ngStyle]=\"{'color':dataItem.LoaiKetQuaTuMay == 1 ? 'black' : (dataItem.LoaiKetQuaTuMay == 2 ? 'blue' : 'red'),'font-weight':(dataItem.ToDamGiaTri?'bold':'normal')}\">{{dataItem.GiaTriTuMay}}</span>\n</ng-template>\n\n<ng-template #kqNhapTayTemplate let-dataItem>\n    <span *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\"\n        [ngStyle]=\"{'color':dataItem.LoaiKetQuaTuMay == 1 ? 'black' : (dataItem.LoaiKetQuaTuMay == 2 ? 'blue' : 'red'),'font-weight':(dataItem.ToDamGiaTri?'bold':'normal')}\">{{dataItem.GiaTriNhapTay}}</span>\n</ng-template>\n\n<ng-template #kqDuyetTemplate let-dataItem>\n    <app-textbox\n        *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0) || dataItem.Duyet || duyetKqXetNghiemDetail.TrangThai == null || dataItem.DaGoiDuyet != true\"\n        [disabled]=\"dataItem.Duyet || duyetKqXetNghiemDetail.TrangThai == null || dataItem.DaGoiDuyet != true\"\n        class=\"no-label\" id=\"GiaTriDuyetA{{dataItem.Id}}\" label=\" \" maxlength=\"100\" [(model)]=\"dataItem.GiaTriDuyet\">\n    </app-textbox>\n    <!-- <p class=\"ml-1\" *ngIf=\"dataItem.Duyet\">{{dataItem.GiaTriDuyet}}</p> -->\n</ng-template>\n<!-- (modelChange)=\"CheckHighlight(dataItem, $event)\" -->\n<ng-template #damKQTemplate let-dataItem>\n\n    <app-checkbox *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\"\n        [disabled]=\"dataItem.Duyet || duyetKqXetNghiemDetail.TrangThai == null || dataItem.DaGoiDuyet != true\"\n        id=\"damKetQua{{dataItem.Id}}\" label=\" \" [(model)]=\"dataItem.ToDamGiaTri\" class=\"pl-2\"></app-checkbox>\n</ng-template>\n<ng-template #chiSoBinhThuongTemplate let-dataItem>\n    <span *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\">{{dataItem.Csbt}}</span>\n</ng-template>\n<ng-template #donViTinhTemplate let-dataItem>\n    <span *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\">{{dataItem.DonVi}}</span>\n</ng-template>\n<ng-template #gioTiepNhanTemplate let-dataItem>\n    <span\n        *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\">{{dataItem.ThoiDiemGuiYeuCauDisplay}}</span>\n</ng-template>\n<ng-template #gioNhanMauTemplate let-dataItem>\n    <span\n        *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\">{{dataItem.ThoiDiemNhanKetQuaDisplay}}</span>\n</ng-template>\n<ng-template #mayXNTemplate let-dataItem>\n    <!-- <div *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\">\n        <span>\n            {{dataItem.TenMayXetNghiem}}\n        </span>\n    </div> -->\n    <span>\n        {{dataItem.TenMayXetNghiem}}\n    </span>\n</ng-template>\n<ng-template #nguoiDuyetTemplate let-dataItem>\n    <span *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\">{{dataItem.NguoiDuyet}}</span>\n</ng-template>\n<ng-template #ngayDuyetTemplate let-dataItem>\n    <span\n        *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\">{{dataItem.ThoiDiemDuyetKetQuaDisplay}}</span>\n</ng-template>\n\n<!-- DUYỆT -->\n\n<ng-template #duyetHeaderColumnTemplate let-value=\"value\" let-dataItem>\n    <app-checkbox class=\"pl-2\"\n        [disabled]=\"duyetKqXetNghiemDetail.TrangThai == null || dataItem.items[0].DaGoiDuyet != true\" label=\" \"\n        [(model)]=\"dataItem.items[0].DuyetNhom\" id=\"duyet{{processId(dataItem)}}\"\n        (modelChange)=\"ApproveOnGroup($event, dataItem)\">\n    </app-checkbox>\n</ng-template>\n\n<ng-template #duyetTemplate let-dataItem>\n    <app-checkbox value=\"true\"\n        [disabled]=\"(duyetKqXetNghiemDetail.TrangThai == null || dataItem.DaGoiDuyet != true || dataItem.Level != 1)\"\n        [model]=\"dataItem.Duyet\" label=\" \" (modelChange)=\"Approve(dataItem, $event)\" class=\"pl-2\">\n    </app-checkbox>\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-in-nhom-dv-list-popup/duyet-ket-qua-in-nhom-dv-list-popup.component.html": 
        /*!************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-in-nhom-dv-list-popup/duyet-ket-qua-in-nhom-dv-list-popup.component.html ***!
          \************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-0\">\n    <div>PHIẾU KẾT QUẢ XÉT NGHIỆM</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\"><iframe width=\"100%\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <div style=\"float: right; padding-top: 10px;\">\n        <button tabindex=\"-1\" type=\"button\" (click)=\"print()\" mat-raised-button mat-button color=\"primary\"\n            class=\"md-primary mr-1 mt-2\">Tải kết quả về</button>\n    </div>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-list/duyet-ket-qua-list.component.html": 
        /*!**************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-list/duyet-ket-qua-list.component.html ***!
          \**************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n        {Title:'Xét Nghiệm',Path:''},\n        {Title:'DS Duyệt Kết Quả', Path:'/xet-nghiem/duyet-ket-qua', queryParams: {holdQuery : true}, Active: true}\n        ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid #gridParent baseRoute=\"xet-nghiem/duyet-ket-qua\" [sort]=\"sort\"\n                [additionalSearchString]=\"additionalSearchString\" [gridColumns]=\"gridColumns\" [lazyLoadPage]=\"true\"\n                [documentType]=\"documentType\" [useAddDeault]=\"false\" [checkboxAble]=\"false\" [useHeaderDefault]=\"false\"\n                [searchString]=\"search.SearchString\" [headerTemplate]=\"headerTemplate\" [showStt]=\"true\"\n                [useActionDefault]=\"false\" [detailTemplate]=\"detailTemplate\">\n            </app-grid>\n\n            <ng-template #detailTemplate let-dataItem>\n                <app-grid baseRoute=\"xet-nghiem/duyet-ket-qua\" [groups]=\"groups\" #gridDetail\n                    [gridColumns]=\"gridColumnChilds\" pageSize=\"5\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    [sort]=\"sortChild\" [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [urlGetData]=\"urlGetDataGridChild\" [showStt]=\"true\"\n                    [urlGetTotalPage]=\"urlGetTotalPageGridChild\" [additionalSearchString]=\"dataItem.Id\"\n                    [autoHeight]=\"true\">\n                </app-grid>\n            </ng-template>\n\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <app-checkbox (modelChange)=\"CheckboxChange($event, true)\" id=\"cho-duyet\"\n                        [(model)]=\"search.ChoDuyet\" class=\"ml-2\" label=\"Chờ duyệt\">\n                    </app-checkbox>\n                    <app-checkbox (modelChange)=\"CheckboxChange($event, false, true)\" id=\"da-duyet\"\n                        [(model)]=\"search.DaDuyet\" class=\"ml-2\" label=\"Đã duyệt\">\n                    </app-checkbox>\n\n                    <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                        fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"search.SearchString\" (keyup)=\"onKey($event)\"\n                            (ngModelChange)=\"clearSearch()\" placeholder=\"Nhập từ khóa...\" />\n                        <button color=\"primary\" mat-mini-fab type=\"button\" class=\"button-barcoe-in-search\" kendoTooltip\n                            title=\"Phím tắt: Ctrl + Q\" (click)=\"QuetMaQRCodeClick()\">\n                            <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                        </button>\n                    </div>\n                    <app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\" style=\"display: none;\">\n                    </app-barcode>\n\n                    <app-daterangepicker style=\"margin-left: 25px;\" id=\"RangeNhap\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n                        [(model)]=\"search.RangeThucHien\" label=\"Thực hiện từ ngày - đến ngày\"\n                        (modelChange)=\"changeNgay()\" class=\"mt-1 on-header\">\n                    </app-daterangepicker>\n\n                    <app-daterangepicker style=\"margin-left: 5px;\" id=\"RangeDuyet\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n                        [(model)]=\"search.RangeDuyet\" label=\"Duyệt từ ngày - đến ngày\" (modelChange)=\"changeNgay()\"\n                        class=\"mt-1 on-header\">\n                    </app-daterangepicker>\n\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n                        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                    </button>\n\n                    <span fxFlex></span>\n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button\n                        kendoTooltip title=\"Lọc cột\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                    </button>\n\n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of gridColumns\">\n                            <button *ngIf=\"!column.HideFilter\"\n                                class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                    {{ column.Title }}\n                                </mat-checkbox>\n                            </button>\n                        </div>\n                    </mat-menu>\n                    <button (click)=\"exportExcel()\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button kendoTooltip\n                        title=\"Xuất Excel\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                    </button>\n                </div>\n            </ng-template>\n\n        </div>\n    </vex-page-layout-content>\n\n</vex-page-layout>\n\n<ng-template #barcodeTemplate let-dataItem>\n    <a (click)=\"xemChiTiet(dataItem.Id)\">\n        {{dataItem.Barcode}}</a>\n</ng-template>\n\n<ng-template #soLuongTemplate let-dataItem>\n    {{dataItem.SoLuongTra | number:'1.0':'vi-VN' }}\n</ng-template>\n\n<ng-template #giaTemplate let-dataItem>\n    {{dataItem.DonGiaNhap | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n<ng-template #tinhTrangTemplate let-dataItem>\n    <div *ngIf=\"dataItem.TrangThai == false\" style=\"color: red;\">\n        {{dataItem.TrangThaiDisplay}}\n    </div>\n    <div *ngIf=\"dataItem.TrangThai == null\" style=\"color: orange;\">\n        {{dataItem.TrangThaiDisplay}}\n    </div>\n    <div *ngIf=\"dataItem.TrangThai == true\" style=\"color: green;\">\n        {{dataItem.TrangThaiDisplay}}\n    </div>\n</ng-template>\n\n<ng-template #gioiTinhTemplate let-dataItem>\n    {{dataItem.GioiTinhDisplay}}\n</ng-template>\n\n<ng-template #ngayThucHienTemplate let-dataItem>\n    {{dataItem.NgayThucHienDisplay}}\n</ng-template>\n\n<ng-template #ngayDuyetKqTemplate let-dataItem>\n    {{dataItem.NgayDuyetKqDisplay}}\n</ng-template>\n\n<ng-template #trangThaiTemplate let-dataItem>\n    <strong *ngIf=\"dataItem.TrangThai == true\" style=\"color:#bb808b;\">Chờ duyệt (chạy lại)</strong>\n    <strong *ngIf=\"dataItem.TrangThai == false\" style=\"color:orange;\">Chờ duyệt</strong>\n    <strong *ngIf=\"dataItem.TrangThai == null\" style=\"color:green;\">Đã duyệt</strong>\n</ng-template>\n\n<ng-template #actionTemplate let-dataItem>\n    <button *ngIf=\"dataItem.TrangThai == null\" (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\"\n        [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n        <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n    </button>\n    <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n        <ng-template let-customer=\"customer\" matMenuContent>\n            <button (click)=\"nhomDichVuCanIn(dataItem.Id,dataItem.YeuCauTiepNhanId)\" mat-menu-item>\n                <span>Xem Kết Quả</span>\n            </button>\n        </ng-template>\n    </mat-menu>\n</ng-template>\n\n<ng-template #nhomXetNghiemTemplate let-value=\"value\" let-dataItem>\n    <strong style=\"width: 100%;\">\n        {{value}}\n        <ul class='inline small ml-20'>\n            <li *ngFor=\"let item of dataItem.items[0].DanhSachLoaiMau\">\n                <span *ngIf=\"checkHiddenIcon(item, dataItem.items[0].DanhSachLoaiMauDaCoKetQua)\">\n                    <span *ngIf=\"!isMauKhongDat(item, dataItem.items[0].DanhSachLoaiMauKhongDat)\">\n                        <span class='green'>&#10003;</span> {{item}}\n                    </span>\n                    <span *ngIf=\"isMauKhongDat(item, dataItem.items[0].DanhSachLoaiMauKhongDat)\">\n                        <span class='red'>&times; </span> {{item}}\n                    </span>\n                </span>\n\n                <span *ngIf=\"!checkHiddenIcon(item, dataItem.items[0].DanhSachLoaiMauDaCoKetQua)\">\n                    <span class='red'></span> {{item}}\n                </span>\n            </li>\n        </ul>\n\n        <a class='float-right' *ngIf=\"dataItem.items[0].YeuCauChayLai == true\n            && dataItem.items[0].DaDuyet == true\" #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\" position=\"top\"\n            [tooltipTemplate]=\"templateInfo\" filter=\"*\" (mouseover)=\"setUpDataTooltip(dataItem)\" kendoTooltip>Yêu cầu\n            chạy lại XN</a>\n\n        <ng-template #templateInfo let-dataItem>\n            <div>\n                <span>Người yêu cầu: </span><span>{{displayToolTipGridNguoiYeuCau}}</span>\n            </div>\n            <div>\n                <span>Ngày yêu cầu: </span><span>{{displayToolTipGridNgayYeuCau}}</span>\n            </div>\n            <div>\n                <span>Lý do yêu cầu: </span><span>{{displayToolTipGridLyDoYeuCau}}</span>\n            </div>\n            <div>\n                <span>Người duyệt: </span><span>{{displayToolTipGridNguoiDuyet}}</span>\n            </div>\n            <div>\n                <span>Ngày duyệt: </span><span>{{displayToolTipGridNgayDuyet}}</span>\n            </div>\n        </ng-template>\n    </strong>\n</ng-template>\n\n<ng-template #thoiGianChiDinhTemplate let-dataItem>\n    {{dataItem.ThoiGianChiDinhDisplay}}\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-nhom-dv-list-popup/duyet-ket-qua-nhom-dv-list-popup.component.html": 
        /*!******************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-nhom-dv-list-popup/duyet-ket-qua-nhom-dv-list-popup.component.html ***!
          \******************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>Xác Nhận</div>\n</div>\n<ng-container>\n    <ng-container>\n        <div *ngFor=\"let item of nhomDichVuDuyets\">\n            <app-checkbox [(model)]=\"item.IsCheck\" label=\"{{item.TenNhomDichVu}}\" (modelChange)=\"isCheck()\" class=\"pb-0\">\n            </app-checkbox>\n        </div>\n\n    </ng-container>\n    <hr style=\" border: 1px solid black; margin-top: 15px;\">\n</ng-container>\n\n<ng-container>\n    <div style=\"float: right; padding-top: 10px;\">\n        <button tabindex=\"-1\" type=\"button\" (click)=\"close()\" mat-stroked-button class=\"mr-1 mt-2\">Đóng</button>\n        <button [disabled]=\"!disabled\" tabindex=\"-1\" type=\"button\" (click)=\"okPrint()\" mat-raised-button mat-button color=\"primary\"\n            class=\"md-primary mr-1 mt-2\">OK</button>\n    </div>\n</ng-container>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-phieu-popup/duyet-ket-qua-phieu-popup.component.html": 
        /*!****************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-phieu-popup/duyet-ket-qua-phieu-popup.component.html ***!
          \****************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">Kết quả xét nghiệm ({{arrFileUrl.length}} file)</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n    <mat-icon [icIcon]=\"icClose\" [mat-dialog-close]=\"null\"></mat-icon>\n  </button>\n</div>\n<mat-dialog-content style=\"height: 550px;\">\n    <div class=\"container-iframe\">\n        <ng-container [ngSwitch]=\"arrFileUrl.length > 0\">\n            <div *ngSwitchCase=\"true\">\n                <ng-container *ngFor=\"let item of arrFileUrl\">\n                    <iframe width=\"100%\" height=\"550px\" frameborder=\"0\" [src]=\"item | safe\" type=\"application/pdf\" allowTransparency=\"true\" background=\"transparent\"></iframe>\n                </ng-container>\n            </div>\n            <div *ngSwitchDefault>Không có dữ liệu</div>\n        </ng-container>\n\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions class=\"mt-4 pb-5\">\n    <button type=\"button\" style=\"margin-left: auto;\" [mat-dialog-close]=\"null\" mat-button class=\"mr-1 mt-4\"><i\n      class=\"ft-arrow-left\"></i> Hủy</button>\n    <button type=\"button\" *ngIf=\"arrFilePdf.length > 0\" (click)=\"downloadAllFile()\" mat-stroked-button color=\"primary\" class=\"mr-1 mt-4\">Tải tất cả</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-popup/duyet-ket-qua-popup.component.html": 
        /*!****************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-popup/duyet-ket-qua-popup.component.html ***!
          \****************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>XÁC NHẬN</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content [ngStyle]=\"{'height':lstData.length > 10 ? '190px':'auto'}\">\n    <span *ngIf=\"hasData\">Những chỉ số bạn chưa duyệt: </span>\n    <ul *ngIf=\"hasData\" style=\"max-height: 100px; overflow: auto;\">\n        <li *ngFor=\"let item of lstData\">\n            <span>&nbsp;&nbsp; + {{item.Ten}}<strong></strong></span>\n        </li>\n    </ul>\n\n    <div style=\"margin: 20px auto\">\n        <span>Bạn có chắc chắn muốn duyệt kết quả xét nghiệm này không?</span>\n    </div>\n\n</mat-dialog-content>\n\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <button type=\"button\" mat-button class=\"mr-1\" (click)=\"Khong()\">Không</button>\n    <button type=\"button\" mat-button class=\"mr-1\" (click)=\"Co('Print')\">Có & In KQ</button>\n    <button type=\"button\" (click)=\"Co('Yes')\" color=\"primary\" mat-raised-button>Có</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-detailed/duyet-ket-qua-detailed.component.scss": 
        /*!********************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-detailed/duyet-ket-qua-detailed.component.scss ***!
          \********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("fieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em;\n  padding-bottom: 0.625em;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline !important;\n}\n\ntable {\n  width: 100%;\n  background-color: white;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\ntable th {\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\ntable th.w-250 {\n  width: 250px;\n}\n\ntable tr.bg-light-red {\n  background-color: #eaa3a3;\n}\n\n.order-btn {\n  display: flex !important;\n  justify-content: space-between !important;\n}\n\n.order-for-in-xuat {\n  display: flex;\n}\n\n.set-col {\n  flex-direction: column;\n}\n\n.order-color {\n  display: flex;\n  flex-direction: row;\n  gap: 15px;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.order-color .set-color {\n  padding: 10px 40px;\n}\n\n.order-color .set-color.black {\n  background-color: black;\n}\n\n.order-color .set-color.red {\n  background-color: red;\n}\n\n.order-color .set-color.blue {\n  background-color: blue;\n}\n\n.order-color .set-color.gray {\n  background-color: lightgray;\n}\n\n.order-search {\n  align-items: center;\n}\n\n.order-maneuver {\n  margin-top: 25px;\n  display: flex;\n  flex-direction: column;\n}\n\n.order-maneuver .first-row {\n  display: flex;\n  gap: 16px;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0vZHV5ZXQta2V0LXF1YS9kdXlldC1rZXQtcXVhLWRldGFpbGVkL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxceGV0LW5naGllbVxcZHV5ZXQta2V0LXF1YVxcZHV5ZXQta2V0LXF1YS1kZXRhaWxlZFxcZHV5ZXQta2V0LXF1YS1kZXRhaWxlZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0vZHV5ZXQta2V0LXF1YS9kdXlldC1rZXQtcXVhLWRldGFpbGVkL2R1eWV0LWtldC1xdWEtZGV0YWlsZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsMEJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO0VBQ0EseUNBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi94ZXQtbmdoaWVtL2R1eWV0LWtldC1xdWEvZHV5ZXQta2V0LXF1YS1kZXRhaWxlZC9kdXlldC1rZXQtcXVhLWRldGFpbGVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZmllbGRzZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAwLjM1ZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtO1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbnRhYmxlIHRoIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbnRhYmxlIHRoLnctMjUwIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG50YWJsZSB0ci5iZy1saWdodC1yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFhM2EzO1xufVxuXG4ub3JkZXItYnRuIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbn1cblxuLm9yZGVyLWZvci1pbi14dWF0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnNldC1jb2wge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ub3JkZXItY29sb3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBnYXA6IDE1cHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5vcmRlci1jb2xvciAuc2V0LWNvbG9yIHtcbiAgcGFkZGluZzogMTBweCA0MHB4O1xufVxuXG4ub3JkZXItY29sb3IgLnNldC1jb2xvci5ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4ub3JkZXItY29sb3IgLnNldC1jb2xvci5yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5vcmRlci1jb2xvciAuc2V0LWNvbG9yLmJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4ub3JkZXItY29sb3IgLnNldC1jb2xvci5ncmF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuXG4ub3JkZXItc2VhcmNoIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm9yZGVyLW1hbmV1dmVyIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm9yZGVyLW1hbmV1dmVyIC5maXJzdC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE2cHg7XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59IiwiZmllbGRzZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAwLjM1ZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtO1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbnRhYmxlIHRoIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbnRhYmxlIHRoLnctMjUwIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG50YWJsZSB0ci5iZy1saWdodC1yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFhM2EzO1xufVxuXG4ub3JkZXItYnRuIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbn1cblxuLm9yZGVyLWZvci1pbi14dWF0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnNldC1jb2wge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ub3JkZXItY29sb3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBnYXA6IDE1cHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5vcmRlci1jb2xvciAuc2V0LWNvbG9yIHtcbiAgcGFkZGluZzogMTBweCA0MHB4O1xufVxuXG4ub3JkZXItY29sb3IgLnNldC1jb2xvci5ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4ub3JkZXItY29sb3IgLnNldC1jb2xvci5yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5vcmRlci1jb2xvciAuc2V0LWNvbG9yLmJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4ub3JkZXItY29sb3IgLnNldC1jb2xvci5ncmF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuXG4ub3JkZXItc2VhcmNoIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm9yZGVyLW1hbmV1dmVyIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm9yZGVyLW1hbmV1dmVyIC5maXJzdC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE2cHg7XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-detailed/duyet-ket-qua-detailed.component.ts": 
        /*!******************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-detailed/duyet-ket-qua-detailed.component.ts ***!
          \******************************************************************************************************************/
        /*! exports provided: DuyetKetQuaXetNghiemDetailedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetKetQuaXetNghiemDetailedComponent", function () { return DuyetKetQuaXetNghiemDetailedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _duyet_ket_qua_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../duyet-ket-qua.model */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua.model.ts");
            /* harmony import */ var _duyet_ket_qua_popup_duyet_ket_qua_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../duyet-ket-qua-popup/duyet-ket-qua-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-popup/duyet-ket-qua-popup.component.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_error_error_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/error/error.service */ "./src/app/core/error/error.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _duyet_ket_qua_phieu_popup_duyet_ket_qua_phieu_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../duyet-ket-qua-phieu-popup/duyet-ket-qua-phieu-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-phieu-popup/duyet-ket-qua-phieu-popup.component.ts");
            /* harmony import */ var _chon_loai_ket_qua_xet_nghiem_popup_chon_loai_ket_qua_xet_nghiem_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../chon-loai-ket-qua-xet-nghiem-popup/chon-loai-ket-qua-xet-nghiem-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/chon-loai-ket-qua-xet-nghiem-popup/chon-loai-ket-qua-xet-nghiem-popup.component.ts");
            var DuyetKetQuaXetNghiemDetailedComponent = /** @class */ (function () {
                function DuyetKetQuaXetNghiemDetailedComponent(router, route, notificationService, dialog, baseService, authService, apiService, errorService, cdRef, renderer) {
                    this.router = router;
                    this.route = route;
                    this.notificationService = notificationService;
                    this.dialog = dialog;
                    this.baseService = baseService;
                    this.authService = authService;
                    this.apiService = apiService;
                    this.errorService = errorService;
                    this.cdRef = cdRef;
                    this.renderer = renderer;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
                    this.search = new _duyet_ket_qua_model__WEBPACK_IMPORTED_MODULE_5__["Search"]();
                    this.duyetKqXetNghiemDetail = new _duyet_ket_qua_model__WEBPACK_IMPORTED_MODULE_5__["DuyetKetQua"]();
                    this.inPhieuDuyetKetQua = new _duyet_ket_qua_model__WEBPACK_IMPORTED_MODULE_5__["PhieuDuyetKetQua"]();
                    this.id = this.route.snapshot.params.id;
                    this.coDichVuDuocDuyet = false;
                    this.sort = [
                        {
                            field: 'Id',
                            dir: 'asc'
                        }
                    ];
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__["DocumentType"].DuyetKetQuaXetNghiem;
                    this.groups = [{ field: 'Nhom' }];
                    this.gridColumns = [];
                    this.displayToolTipGridNguoiYeuCau = null;
                    this.displayToolTipGridNgayYeuCau = null;
                    this.displayToolTipGridLyDoYeuCau = null;
                    this.displayToolTipGridNguoiDuyet = null;
                    this.displayToolTipGridNgayDuyet = null;
                    this.showToastNotifyError = false;
                    this.ChiTietKetQuaXetNghiems = new Array();
                }
                DuyetKetQuaXetNghiemDetailedComponent.prototype.ngOnInit = function () {
                    this.gridColumns = [
                        { Field: 'Nhom', Title: '', Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomTemplate },
                        { Field: 'Ten', Title: 'Tên', Width: 200, Sortable: false, Template: this.tenTemplate, ShowTooltip: true },
                        { Field: 'GiaTriCu', Title: 'KQ Cũ', Width: 100, Sortable: false, Template: this.kqCuTemplate },
                        { Field: 'GiaTriTuMay', Title: 'KQ Từ Máy', Width: 100, Sortable: false, Template: this.kqTuMayTemplate },
                        { Field: 'GiaTriNhapTay', Title: 'KQ Nhập Tay', Width: 70, Sortable: false, Template: this.kqNhapTayTemplate },
                        { Field: 'GiaTriDuyet', Title: 'KQ Duyệt', Width: 100, Sortable: false, Template: this.kqDuyetTemplate },
                        { Field: 'ToDamGiaTri', Title: 'Đậm KQ', Width: 60, Sortable: false, Template: this.damKQTemplate },
                        { Field: 'Csbt', Title: 'CSBT', Width: 90, Sortable: false, Template: this.chiSoBinhThuongTemplate },
                        { Field: 'DonVi', Title: 'ĐVT', Width: 50, Sortable: false, Template: this.donViTinhTemplate },
                        {
                            Field: 'ThoiDiemGuiYeuCauDisplay',
                            Title: 'Giờ Tiếp Nhận Mẫu',
                            Width: 100,
                            Sortable: false,
                            ShowTooltip: true,
                            Template: this.gioTiepNhanTemplate
                        },
                        {
                            Field: 'ThoiDiemNhanKetQuaDisplay',
                            Title: 'Giờ Nhận KQ',
                            Width: 100,
                            Sortable: false,
                            ShowTooltip: true,
                            Template: this.gioNhanMauTemplate
                        },
                        { Field: 'MayXetNghiemId', Title: 'Máy XN', Width: 100, Sortable: false, Template: this.mayXNTemplate },
                        {
                            Field: 'Duyet', Title: 'Duyệt', Width: 50, Sortable: false,
                            Template: this.duyetTemplate, TemplateGroupHeaderColumn: this.duyetHeaderColumnTemplate
                        },
                        {
                            Field: 'ThoiDiemDuyetKetQua',
                            Title: 'Ngày Duyệt',
                            Width: 100,
                            Sortable: false,
                            ShowTooltip: true,
                            Template: this.ngayDuyetTemplate
                        },
                        { Field: 'NguoiDuyet', Title: 'Người Duyệt', Width: 99, Sortable: false, Template: this.nguoiDuyetTemplate }
                    ];
                    if (this.id) {
                        this.GetById(this.id);
                    }
                };
                DuyetKetQuaXetNghiemDetailedComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                DuyetKetQuaXetNghiemDetailedComponent.prototype.GetById = function (id) {
                    var _this = this;
                    this.showPopupDownloadData();
                    this.baseService.getById(id).subscribe(function (resultData) {
                        _this.closePopupLoadingData();
                        var nhomIds = [];
                        if (resultData) {
                            _this.duyetKqXetNghiemDetail = Object.assign({}, resultData);
                            // console.log("chi tiet: ", this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(x => x.Level === 1 && x.DaGoiDuyet == true))
                            console.log("resultData Duyet: ", resultData);
                            if (_this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.some(function (x) { return x.DaDuyet; })) {
                                _this.coDichVuDuocDuyet = true;
                            }
                            else {
                                _this.coDichVuDuocDuyet = false;
                            }
                            _this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(function (x) { return x.DaGoiDuyet != true; })
                                .forEach(function (x) { x.HighLightClass = 'bg-row-lightgray'; });
                            _this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(function (x) { return x.DaGoiDuyet == true; }).forEach(function (dataItem) {
                                if (dataItem.Level == 1 && dataItem.IdChilds.length == 0) {
                                    dataItem.HighLightClass =
                                        ((dataItem.GiaTriTuMay == null || dataItem.GiaTriTuMay == '')
                                            && (dataItem.GiaTriNhapTay == null || dataItem.GiaTriNhapTay == '')) ? 'bg-row-lightRed' : null;
                                }
                                else if (dataItem.Level == 1 && dataItem.IdChilds.length > 0) {
                                    dataItem.HighLightClass = null;
                                }
                                if (dataItem.Level != 1) {
                                    dataItem.HighLightClass =
                                        ((dataItem.GiaTriTuMay == null || dataItem.GiaTriTuMay == '')
                                            && (dataItem.GiaTriNhapTay == null || dataItem.GiaTriNhapTay == '')) ? 'bg-row-lightRed' : null;
                                }
                            });
                            function onlyUnique(value, index, self) {
                                return self.indexOf(value) === index;
                            }
                            nhomIds = _this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.map(function (x) { return x.NhomId; }).filter(onlyUnique);
                            _this.SetDataSourceForGrid();
                        }
                        nhomIds.forEach(function (nhomId) {
                            if (_this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(function (x) { return x.NhomId === nhomId; })
                                .every(function (x) { return x.Duyet === true; })) {
                                _this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(function (x) { return x.NhomId === nhomId; }).forEach(function (x) { return x.DuyetNhom = true; });
                            }
                            else {
                                _this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(function (x) { return x.NhomId === nhomId; }).forEach(function (x) { return x.DuyetNhom = false; });
                            }
                        });
                    }, function (err) {
                        _this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                DuyetKetQuaXetNghiemDetailedComponent.prototype.SetDataSourceForGrid = function () {
                    this.gridDataSource = null;
                    this.gridDataSource = {
                        data: this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.slice(),
                        total: this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.length
                    };
                    if (this.gridChiTietDuyetKetQuaXn) {
                        this.gridChiTietDuyetKetQuaXn._gridDataSource = Object.assign({}, this.gridDataSource);
                        this.gridChiTietDuyetKetQuaXn.setDataSource();
                    }
                };
                DuyetKetQuaXetNghiemDetailedComponent.prototype.quayLai = function () {
                    this.router.navigateByUrl('/xet-nghiem/duyet-ket-qua' + '?holdQuery=true');
                };
                DuyetKetQuaXetNghiemDetailedComponent.prototype.xuLyDuyet = function () {
                    var _this = this;
                    var dataNeedFillValue = this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems
                        .filter(function (o) { return o.DaGoiDuyet && !o.Duyet; });
                    var dataChiTietXetNghiem = this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems;
                    var dialogRef;
                    if (dataNeedFillValue && dataNeedFillValue.some(function (x) { return x; })) {
                        dialogRef = this.dialog.open(_duyet_ket_qua_popup_duyet_ket_qua_popup_component__WEBPACK_IMPORTED_MODULE_6__["DuyetKetQuaXetNghiemPopupComponent"], {
                            disableClose: true,
                            width: '700px',
                            data: { Model: dataNeedFillValue, DataChiTietXetNghiem: dataChiTietXetNghiem }
                        });
                    }
                    else {
                        dialogRef = this.dialog.open(_duyet_ket_qua_popup_duyet_ket_qua_popup_component__WEBPACK_IMPORTED_MODULE_6__["DuyetKetQuaXetNghiemPopupComponent"], {
                            disableClose: true,
                            width: '400px',
                            data: { Model: dataNeedFillValue, DataChiTietXetNghiem: dataChiTietXetNghiem }
                        });
                    }
                    dialogRef.afterClosed().subscribe(function (result) {
                        if (result) {
                            if (result != undefined && result != null && result != "") {
                                if (result.LoaiIn != null) {
                                    _this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems = _this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(function (z) { return !z.DaDuyet && z.DaGoiDuyet == true; });
                                    _this.apiService.post('DuyetKetQuaXetNghiem/DuyetPhienXetNghiem', _this.duyetKqXetNghiemDetail).subscribe(function () {
                                        _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].ActionSuccessfully, ['Duyệt']));
                                        _this.duyetKqXetNghiemDetail.TrangThai = null;
                                        _this.showPopupDownloadData();
                                        _this.inPhieuDuyetKetQua.HostingName = window.location.protocol + '//' + window.location.host;
                                        _this.inPhieuDuyetKetQua.Header = true;
                                        _this.inPhieuDuyetKetQua.PhienXetNghiemId = _this.id;
                                        _this.inPhieuDuyetKetQua.YeuCauTiepNhanId = _this.duyetKqXetNghiemDetail.YeuCauTiepNhanId;
                                        _this.inPhieuDuyetKetQua.LoaiIn = result.LoaiIn;
                                        _this.inPhieuDuyetKetQua.ListIn = result.ListIn;
                                        _this.apiService.post('XetNghiem/GetAllHtmlPdfKetQuaXetNghiem', _this.inPhieuDuyetKetQua).subscribe(function (arrHtml) {
                                            _this.dialog.open(_duyet_ket_qua_phieu_popup_duyet_ket_qua_phieu_popup_component__WEBPACK_IMPORTED_MODULE_18__["DuyetKetQuaPhieuPopupComponent"], {
                                                disableClose: false,
                                                width: '1000px',
                                                data: arrHtml
                                            }).afterClosed().subscribe(function () {
                                                location.reload();
                                            });
                                            _this.closePopupLoadingData();
                                        }, function (err) {
                                            if (err.Message !== 'Validation Failed') {
                                                _this.notificationService.showError(err.Message);
                                            }
                                            _this.closePopupLoadingData();
                                        });
                                    }, function (err) {
                                        _this.validationErrors = err.ValidationErrors;
                                        if (_this.showToastNotifyError === true) {
                                            var mess = _this.errorService.getValidationErrors(err);
                                            if (mess != null) {
                                                _this.notificationService.showError(mess);
                                            }
                                        }
                                        if (err.Message !== 'Validation Failed') {
                                            _this.notificationService.showError(err.Message);
                                        }
                                    });
                                }
                                if (result === 'Yes') {
                                    _this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems = _this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(function (z) { return !z.DaDuyet && z.DaGoiDuyet == true; });
                                    _this.apiService.post('DuyetKetQuaXetNghiem/DuyetPhienXetNghiem', _this.duyetKqXetNghiemDetail).subscribe(function () {
                                        _this.duyetKqXetNghiemDetail.TrangThai = null;
                                        _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].ActionSuccessfully, ['Duyệt']));
                                        location.reload();
                                    }, function (err) {
                                        _this.validationErrors = err.ValidationErrors;
                                        if (_this.showToastNotifyError === true) {
                                            var mess = _this.errorService.getValidationErrors(err);
                                            if (mess != null) {
                                                _this.notificationService.showError(mess);
                                            }
                                        }
                                        if (err.Message !== 'Validation Failed') {
                                            _this.notificationService.showError(err.Message);
                                        }
                                    });
                                }
                            }
                        }
                    });
                };
                DuyetKetQuaXetNghiemDetailedComponent.prototype.searchChanges = function ($event) {
                    var _this = this;
                    this.searchString = $event;
                    if (!this.searchString) {
                        setTimeout(function () {
                            _this.setDataSourceForGrid();
                        }, 0);
                    }
                };
                DuyetKetQuaXetNghiemDetailedComponent.prototype.onKeySearchChanges = function ($event) {
                    var _this = this;
                    if ($event.keyCode === 13) {
                        setTimeout(function () {
                            _this.setDataSourceForGrid();
                        }, 0);
                    }
                };
                DuyetKetQuaXetNghiemDetailedComponent.prototype.setDataSourceForGrid = function () {
                    this.ChiTietKetQuaXetNghiems = [];
                    if (this.searchString == null || this.searchString === '') {
                        this.ChiTietKetQuaXetNghiems = this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.slice();
                    }
                    else {
                        var search_1 = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].removeVietnamese(this.searchString).toLowerCase().trim().replace(/đ/g, 'd');
                        this.ChiTietKetQuaXetNghiems = this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.slice().filter(function (o) { return (o.GiaTriCu != null && src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].removeVietnamese(o.GiaTriCu).toLowerCase().replace(/đ/g, 'd')
                            .indexOf(search_1) >= 0)
                            || (o.Ten != null && src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].removeVietnamese(o.Ten).toLowerCase().replace(/đ/g, 'd')
                                .indexOf(search_1) >= 0)
                            || (o.GiaTriTuMay != null && src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].removeVietnamese(o.GiaTriTuMay).toLowerCase().replace(/đ/g, 'd')
                                .indexOf(search_1) >= 0)
                            || (o.GiaTriNhapTay != null && src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].removeVietnamese(o.GiaTriNhapTay).toLowerCase().replace(/đ/g, 'd')
                                .indexOf(search_1) >= 0)
                            || (o.Csbt != null && src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].removeVietnamese(o.Csbt).toLowerCase().replace(/đ/g, 'd')
                                .indexOf(search_1) >= 0)
                            || (o.DonVi != null && src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].removeVietnamese(o.DonVi).toLowerCase().replace(/đ/g, 'd')
                                .indexOf(search_1) >= 0)
                            || (o.ThoiDiemGuiYeuCauDisplay != null &&
                                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].removeVietnamese(o.ThoiDiemGuiYeuCauDisplay).toLowerCase().replace(/đ/g, 'd')
                                    .indexOf(search_1) >= 0)
                            || (o.ThoiDiemNhanKetQuaDisplay != null &&
                                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].removeVietnamese(o.ThoiDiemNhanKetQuaDisplay).toLowerCase().replace(/đ/g, 'd')
                                    .indexOf(search_1) >= 0)
                            || (o.TenMayXetNghiem != null && src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].removeVietnamese(o.TenMayXetNghiem).toLowerCase().replace(/đ/g, 'd')
                                .indexOf(search_1) >= 0)
                            || (o.NguoiDuyet != null && src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].removeVietnamese(o.NguoiDuyet).toLowerCase().replace(/đ/g, 'd')
                                .indexOf(search_1) >= 0)
                            || (o.NgayDuyetDisplay != null && src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].removeVietnamese(o.NgayDuyetDisplay).toLowerCase().replace(/đ/g, 'd')
                                .indexOf(search_1) >= 0); });
                    }
                    this.gridDataSource = null;
                    this.gridDataSource = {
                        data: this.ChiTietKetQuaXetNghiems,
                        total: this.ChiTietKetQuaXetNghiems.length
                    };
                    if (!this.cdRef.destroyed) {
                        this.cdRef.detectChanges();
                    }
                    if (this.gridChiTietDuyetKetQuaXn) {
                        this.gridChiTietDuyetKetQuaXn._gridDataSource = Object.assign({}, this.gridDataSource);
                        this.gridChiTietDuyetKetQuaXn.setDataSource();
                    }
                };
                DuyetKetQuaXetNghiemDetailedComponent.prototype.checkHiddenIcon = function (item, danhSachLoaiMau) {
                    // tslint:disable-next-line: prefer-for-of
                    for (var i = 0; i < danhSachLoaiMau.length; i++) {
                        if (item === danhSachLoaiMau[i]) {
                            return true;
                        }
                    }
                    return false;
                };
                DuyetKetQuaXetNghiemDetailedComponent.prototype.setUpDataTooltip = function (dataItem) {
                    this.displayToolTipGridNguoiYeuCau = dataItem.items[0].NguoiYeuCau;
                    this.displayToolTipGridNgayYeuCau = dataItem.items[0].NgayYeuCauDisplay;
                    this.displayToolTipGridLyDoYeuCau = dataItem.items[0].LyDoYeuCau;
                    this.displayToolTipGridNguoiDuyet = dataItem.items[0].NguoiDuyetChayLai;
                    this.displayToolTipGridNgayDuyet = dataItem.items[0].NgayDuyetDisplay;
                };
                DuyetKetQuaXetNghiemDetailedComponent.prototype.CheckHighlight = function (dataItem, currentValue) {
                    dataItem.GiaTriDuyet = currentValue;
                    // dataItem.HighLightClass = !dataItem.GiaTriDuyet && dataItem.Duyet === false && dataItem.Level !== 1 ? 'bg-row-lightRed' : '';
                    dataItem.HighLightClass = (dataItem.GiaTriDuyet == null || dataItem.GiaTriDuyet == '')
                        && dataItem.Duyet === false
                        && dataItem.IsParent
                        && dataItem.DaGoiDuyet == true ? 'bg-row-lightRed' : '';
                };
                DuyetKetQuaXetNghiemDetailedComponent.prototype.Approve = function (dataItem, currentValue) {
                    var _this = this;
                    dataItem.Duyet = currentValue;
                    dataItem.HighLightClass = dataItem.DaGoiDuyet != true ? '' : 'bg-row-lightgray';
                    dataItem.HighLightClass = !dataItem.GiaTriDuyet && dataItem.Duyet === false && dataItem.Level !== 1 && dataItem.DaGoiDuyet == true ? 'bg-row-lightRed' : '';
                    var chiTietKetQuaXetNghiems = this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(function (z) { return z.DaGoiDuyet == true; });
                    // console.log("data detail: ", dataDetail)
                    var data = {
                        Id: this.duyetKqXetNghiemDetail.Id,
                        ChiTietKetQuaXetNghiems: chiTietKetQuaXetNghiems,
                        GhiChu: this.duyetKqXetNghiemDetail.GhiChu,
                        ChanDoan: this.duyetKqXetNghiemDetail.ChanDoan,
                    };
                    this.apiService.post('DuyetKetQuaXetNghiem/DuyetOnGrid?currentId=' +
                        dataItem.Id + '&&currentCheck=' + currentValue, data)
                        .subscribe(function (res) {
                        if (res.some(function (x) { return x.Duyet; })) {
                            _this.coDichVuDuocDuyet = true;
                        }
                        else {
                            _this.coDichVuDuocDuyet = false;
                        }
                        if (res && res.some(function (x) { return x; })) {
                            res.forEach(function (data) {
                                _this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(function (x) { return x.Id === data.Id; }).forEach(function (q) {
                                    q.Duyet = data.Duyet;
                                    q.GiaTriDuyet = data.GiaTriDuyet;
                                    q.ToDamGiaTri = data.ToDamGiaTri;
                                    q.NguoiDuyet = data.NguoiDuyet;
                                    q.ThoiDiemDuyetKetQua = data.ThoiDiemDuyetKetQua;
                                    q.ThoiDiemDuyetKetQuaDisplay = data.ThoiDiemDuyetKetQuaDisplay;
                                    // q.HighLightClass = dataItem.DaGoiDuyet == true? 'bg-row-lightgray' : null;
                                    if (q.DaGoiDuyet != true) {
                                        q.HighLightClass = 'bg-row-lightgray';
                                    }
                                    else {
                                        if (q.Level == 1 && q.IdChilds.length == 0) {
                                            q.HighLightClass = ((q.GiaTriTuMay == null || q.GiaTriTuMay == '')
                                                && (q.GiaTriNhapTay == null || q.GiaTriNhapTay == '')) ? 'bg-row-lightRed' : null;
                                        }
                                        else if (q.Level == 1 && q.IdChilds.length > 0) {
                                            q.HighLightClass = null;
                                        }
                                        if (q.Level != 1) {
                                            q.HighLightClass = ((q.GiaTriTuMay == null || q.GiaTriTuMay == '')
                                                && (q.GiaTriNhapTay == null || q.GiaTriNhapTay == '')) ? 'bg-row-lightRed' : null;
                                        }
                                    }
                                });
                            });
                            var currentNhomId_1 = _this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.
                                filter(function (x) { return x.Id === dataItem.Id; }).map(function (x) { return x.NhomId; })[0];
                            if (_this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(function (x) { return x.NhomId === currentNhomId_1; })
                                .every(function (x) { return x.Duyet === true; })) {
                                _this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.
                                    filter(function (x) { return x.NhomId === currentNhomId_1; }).forEach(function (x) { return x.DuyetNhom = true; });
                            }
                            else {
                                _this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.
                                    filter(function (x) { return x.NhomId === currentNhomId_1; }).forEach(function (x) { return x.DuyetNhom = false; });
                            }
                            _this.SetDataSourceForGrid();
                        }
                    }, function (err) {
                        var gridItem = _this.gridDataSource.data.find(function (o) { return o.Id === dataItem.Id; });
                        if (gridItem != undefined) {
                            dataItem.Duyet = gridItem.DaDuyet;
                            dataItem.HighLightClass = dataItem.DaGoiDuyet != true ? '' : 'bg-row-lightgray';
                            dataItem.HighLightClass = !dataItem.GiaTriDuyet && dataItem.Duyet === false && dataItem.Level !== 1 && dataItem.DaGoiDuyet == true ? 'bg-row-lightRed' : '';
                        }
                        if (_this.showToastNotifyError === true) {
                            var mess = _this.errorService.getValidationErrors(err);
                            if (mess != null) {
                                _this.notificationService.showError(mess);
                            }
                        }
                        if (err.Message !== 'Validation Failed') {
                            _this.notificationService.showError(err.Message);
                        }
                    });
                };
                DuyetKetQuaXetNghiemDetailedComponent.prototype.ApproveOnGroup = function (currentValue, dataItem) {
                    var _this = this;
                    var duyetKetQuaTheoNhom = {
                        Id: this.id,
                        ChiTietKetQuaXetNghiems: dataItem.items
                    };
                    this.apiService.post('DuyetKetQuaXetNghiem/ApproveOnGroup?currentNhomId=' + dataItem.items.map(function (x) { return x.NhomId; })[0] +
                        '&&currentCheck=' + currentValue, duyetKetQuaTheoNhom)
                        .subscribe(function (res) {
                        if (res.some(function (x) { return x.Duyet; })) {
                            _this.coDichVuDuocDuyet = true;
                        }
                        else {
                            _this.coDichVuDuocDuyet = false;
                        }
                        if (res && res.some(function (x) { return x; })) {
                            res.forEach(function (data) {
                                _this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(function (x) { return x.Id === data.Id; }).forEach(function (q) {
                                    q.Duyet = data.Duyet;
                                    q.GiaTriDuyet = data.GiaTriDuyet;
                                    q.ToDamGiaTri = data.ToDamGiaTri;
                                    q.NguoiDuyet = data.NguoiDuyet;
                                    q.ThoiDiemDuyetKetQua = data.ThoiDiemDuyetKetQua;
                                    q.ThoiDiemDuyetKetQuaDisplay = data.ThoiDiemDuyetKetQuaDisplay;
                                    if (q.DaGoiDuyet != true) {
                                        q.HighLightClass = 'bg-row-lightgray';
                                    }
                                    else {
                                        if (q.Level == 1 && q.IdChilds.length == 0) {
                                            q.HighLightClass = ((q.GiaTriTuMay == null || q.GiaTriTuMay == '')
                                                && (q.GiaTriNhapTay == null || q.GiaTriNhapTay == '')) ? 'bg-row-lightRed' : null;
                                        }
                                        else if (q.Level == 1 && q.IdChilds.length > 0) {
                                            q.HighLightClass = null;
                                        }
                                        if (q.Level != 1) {
                                            q.HighLightClass = ((q.GiaTriTuMay == null || q.GiaTriTuMay == '')
                                                && (q.GiaTriNhapTay == null || q.GiaTriNhapTay == '')) ? 'bg-row-lightRed' : null;
                                        }
                                    }
                                });
                                if (_this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems
                                    .filter(function (x) { return x.Id === data.Id; }).every(function (x) { return x.Duyet === true; })) {
                                    _this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems
                                        .filter(function (x) { return x.Id === data.Id; }).forEach(function (x) { return x.DuyetNhom = true; });
                                }
                                else {
                                    _this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems
                                        .filter(function (x) { return x.Id === data.Id; }).forEach(function (x) { return x.DuyetNhom = false; });
                                }
                            });
                            _this.SetDataSourceForGrid();
                        }
                    }, function (err) {
                        if (_this.showToastNotifyError === true) {
                            var mess = _this.errorService.getValidationErrors(err);
                            if (mess != null) {
                                _this.notificationService.showError(mess);
                            }
                        }
                        if (err.Message !== 'Validation Failed') {
                            _this.notificationService.showError(err.Message);
                        }
                    });
                };
                DuyetKetQuaXetNghiemDetailedComponent.prototype.processId = function (dataItem) {
                    return dataItem.items.map(function (x) { return x.NhomId; })[0];
                };
                DuyetKetQuaXetNghiemDetailedComponent.prototype.Print = function () {
                    var _this = this;
                    var dialogRef;
                    var dataChiTietXetNghiem = this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(function (x) { return x.DaGoiDuyet == true && (x.DaDuyet || x.Duyet); });
                    dialogRef = this.dialog.open(_chon_loai_ket_qua_xet_nghiem_popup_chon_loai_ket_qua_xet_nghiem_popup_component__WEBPACK_IMPORTED_MODULE_19__["ChonLoaiKetQuaXetNghiemPopupComponent"], {
                        disableClose: true,
                        width: '1000px',
                        // height: '300px',
                        data: dataChiTietXetNghiem,
                    }).afterClosed().subscribe(function (result) {
                        if (result != undefined && result != null && result != "") {
                            if (result == 'No') {
                                // dialogRef.close();
                            }
                            else {
                                if (_this.authService.hasPermission(_this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].Process)) {
                                    _this.showPopupDownloadData();
                                    _this.inPhieuDuyetKetQua.HostingName = window.location.protocol + '//' + window.location.host;
                                    _this.inPhieuDuyetKetQua.Header = true;
                                    _this.inPhieuDuyetKetQua.PhienXetNghiemId = _this.id;
                                    _this.inPhieuDuyetKetQua.YeuCauTiepNhanId = _this.duyetKqXetNghiemDetail.YeuCauTiepNhanId;
                                    _this.inPhieuDuyetKetQua.LoaiIn = result.LoaiIn;
                                    _this.inPhieuDuyetKetQua.ListIn = result.ListIn;
                                    _this.apiService.post('XetNghiem/GetAllHtmlPdfKetQuaXetNghiem', _this.inPhieuDuyetKetQua).subscribe(function (arrHtml) {
                                        _this.dialog.open(_duyet_ket_qua_phieu_popup_duyet_ket_qua_phieu_popup_component__WEBPACK_IMPORTED_MODULE_18__["DuyetKetQuaPhieuPopupComponent"], {
                                            disableClose: false,
                                            width: '1000px',
                                            data: arrHtml
                                        }).afterClosed().subscribe(function (result) {
                                        });
                                        _this.closePopupLoadingData();
                                    }, function (err) {
                                        if (err.Message !== 'Validation Failed') {
                                            _this.notificationService.showError(err.Message);
                                        }
                                        _this.closePopupLoadingData();
                                    });
                                    // this.apiService.post<Array<string>>('DuyetKetQuaXetNghiem/InPhieuDuyetKetQua', this.inPhieuDuyetKetQua).subscribe(
                                    //     resData => {
                                    //         if (resData) {
                                    //             this.dialog.open(DuyetKetQuaPhieuPopupComponent, {
                                    //                 disableClose: false,
                                    //                 width: '1000px',
                                    //                 data: resData
                                    //             }).afterClosed().subscribe(result => {
                                    //             });
                                    //             this.closePopupLoadingData();
                                    //         }
                                    //     },
                                    //     (err: ApiError) => {
                                    //         if (err.Message !== 'Validation Failed') {
                                    //             this.notificationService.showError(err.Message);
                                    //         }
                                    //         this.closePopupLoadingData();
                                    //     }
                                    // );
                                }
                                else {
                                    _this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                                }
                            }
                        }
                    });
                };
                DuyetKetQuaXetNghiemDetailedComponent.prototype.showPopupDownloadData = function () {
                    if (this.popupLoadingData == null
                        || this.popupLoadingData.openDialogs == null
                        || (this.popupLoadingData.openDialogs != null && this.popupLoadingData.openDialogs.length === 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang tải dữ liệu...' },
                        });
                    }
                };
                DuyetKetQuaXetNghiemDetailedComponent.prototype.isMauKhongDat = function (mau, danhSachMauKhongDat) {
                    // tslint:disable-next-line: prefer-for-of
                    for (var i = 0; i < danhSachMauKhongDat.length; i++) {
                        if (mau === danhSachMauKhongDat[i]) {
                            return true;
                        }
                    }
                    return false;
                };
                return DuyetKetQuaXetNghiemDetailedComponent;
            }());
            DuyetKetQuaXetNghiemDetailedComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialog"] },
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_9__["BaseService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
                { type: src_app_core_error_error_service__WEBPACK_IMPORTED_MODULE_11__["ErrorService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('menuTrigger', { read: _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatMenuTrigger"], static: false })
            ], DuyetKetQuaXetNghiemDetailedComponent.prototype, "trigger", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomTemplate', { static: true })
            ], DuyetKetQuaXetNghiemDetailedComponent.prototype, "nhomTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenTemplate', { static: true })
            ], DuyetKetQuaXetNghiemDetailedComponent.prototype, "tenTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('kqCuTemplate', { static: true })
            ], DuyetKetQuaXetNghiemDetailedComponent.prototype, "kqCuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('kqTuMayTemplate', { static: true })
            ], DuyetKetQuaXetNghiemDetailedComponent.prototype, "kqTuMayTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('kqNhapTayTemplate', { static: true })
            ], DuyetKetQuaXetNghiemDetailedComponent.prototype, "kqNhapTayTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('kqDuyetTemplate', { static: true })
            ], DuyetKetQuaXetNghiemDetailedComponent.prototype, "kqDuyetTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('damKQTemplate', { static: true })
            ], DuyetKetQuaXetNghiemDetailedComponent.prototype, "damKQTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chiSoBinhThuongTemplate', { static: true })
            ], DuyetKetQuaXetNghiemDetailedComponent.prototype, "chiSoBinhThuongTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donViTinhTemplate', { static: true })
            ], DuyetKetQuaXetNghiemDetailedComponent.prototype, "donViTinhTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gioTiepNhanTemplate', { static: true })
            ], DuyetKetQuaXetNghiemDetailedComponent.prototype, "gioTiepNhanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gioNhanMauTemplate', { static: true })
            ], DuyetKetQuaXetNghiemDetailedComponent.prototype, "gioNhanMauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mayXNTemplate', { static: true })
            ], DuyetKetQuaXetNghiemDetailedComponent.prototype, "mayXNTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nguoiDuyetTemplate', { static: true })
            ], DuyetKetQuaXetNghiemDetailedComponent.prototype, "nguoiDuyetTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayDuyetTemplate', { static: true })
            ], DuyetKetQuaXetNghiemDetailedComponent.prototype, "ngayDuyetTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('duyetTemplate', { static: true })
            ], DuyetKetQuaXetNghiemDetailedComponent.prototype, "duyetTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('duyetHeaderColumnTemplate', { static: true })
            ], DuyetKetQuaXetNghiemDetailedComponent.prototype, "duyetHeaderColumnTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridChiTietDuyetKetQuaXn', { static: false })
            ], DuyetKetQuaXetNghiemDetailedComponent.prototype, "gridChiTietDuyetKetQuaXn", void 0);
            DuyetKetQuaXetNghiemDetailedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-duyet-ket-qua-detailed',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-ket-qua-detailed.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-detailed/duyet-ket-qua-detailed.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-ket-qua-detailed.component.scss */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-detailed/duyet-ket-qua-detailed.component.scss")).default]
                })
            ], DuyetKetQuaXetNghiemDetailedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-in-nhom-dv-list-popup/duyet-ket-qua-in-nhom-dv-list-popup.component.scss": 
        /*!**********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-in-nhom-dv-list-popup/duyet-ket-qua-in-nhom-dv-list-popup.component.scss ***!
          \**********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0vZHV5ZXQta2V0LXF1YS9kdXlldC1rZXQtcXVhLWluLW5ob20tZHYtbGlzdC1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHhldC1uZ2hpZW1cXGR1eWV0LWtldC1xdWFcXGR1eWV0LWtldC1xdWEtaW4tbmhvbS1kdi1saXN0LXBvcHVwXFxkdXlldC1rZXQtcXVhLWluLW5ob20tZHYtbGlzdC1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0vZHV5ZXQta2V0LXF1YS9kdXlldC1rZXQtcXVhLWluLW5ob20tZHYtbGlzdC1wb3B1cC9kdXlldC1rZXQtcXVhLWluLW5ob20tZHYtbGlzdC1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4veGV0LW5naGllbS9kdXlldC1rZXQtcXVhL2R1eWV0LWtldC1xdWEtaW4tbmhvbS1kdi1saXN0LXBvcHVwL2R1eWV0LWtldC1xdWEtaW4tbmhvbS1kdi1saXN0LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59IiwiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-in-nhom-dv-list-popup/duyet-ket-qua-in-nhom-dv-list-popup.component.ts": 
        /*!********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-in-nhom-dv-list-popup/duyet-ket-qua-in-nhom-dv-list-popup.component.ts ***!
          \********************************************************************************************************************************************/
        /*! exports provided: DuyetKetQuaInNhomDvListPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetKetQuaInNhomDvListPopupComponent", function () { return DuyetKetQuaInNhomDvListPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _duyet_ket_qua_phieu_popup_duyet_ket_qua_phieu_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../duyet-ket-qua-phieu-popup/duyet-ket-qua-phieu-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-phieu-popup/duyet-ket-qua-phieu-popup.component.ts");
            var DuyetKetQuaInNhomDvListPopupComponent = /** @class */ (function () {
                function DuyetKetQuaInNhomDvListPopupComponent(sanitizer, dialog, dialogRef, data) {
                    this.sanitizer = sanitizer;
                    this.dialog = dialog;
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.src = "";
                    this.arrHtml = [];
                }
                DuyetKetQuaInNhomDvListPopupComponent.prototype.ngOnInit = function () {
                    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
                };
                DuyetKetQuaInNhomDvListPopupComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                DuyetKetQuaInNhomDvListPopupComponent.prototype.print = function () {
                    this.dialogRef.close();
                    if (this.arrHtml != []) {
                        this.arrHtml = [];
                    }
                    this.arrHtml.push(this.data);
                    this.dialog.open(_duyet_ket_qua_phieu_popup_duyet_ket_qua_phieu_popup_component__WEBPACK_IMPORTED_MODULE_5__["DuyetKetQuaPhieuPopupComponent"], {
                        disableClose: false,
                        width: '1000px',
                        data: this.arrHtml
                    }).afterClosed().subscribe(function () {
                    });
                };
                return DuyetKetQuaInNhomDvListPopupComponent;
            }());
            DuyetKetQuaInNhomDvListPopupComponent.ctorParameters = function () { return [
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            DuyetKetQuaInNhomDvListPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duyet-ket-qua-in-nhom-dv-list-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-ket-qua-in-nhom-dv-list-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-in-nhom-dv-list-popup/duyet-ket-qua-in-nhom-dv-list-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-ket-qua-in-nhom-dv-list-popup.component.scss */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-in-nhom-dv-list-popup/duyet-ket-qua-in-nhom-dv-list-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], DuyetKetQuaInNhomDvListPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-list/duyet-ket-qua-list.component.scss": 
        /*!************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-list/duyet-ket-qua-list.component.scss ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi94ZXQtbmdoaWVtL2R1eWV0LWtldC1xdWEvZHV5ZXQta2V0LXF1YS1saXN0L2R1eWV0LWtldC1xdWEtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-list/duyet-ket-qua-list.component.ts": 
        /*!**********************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-list/duyet-ket-qua-list.component.ts ***!
          \**********************************************************************************************************/
        /*! exports provided: DuyetKetQuaXetNghiemListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetKetQuaXetNghiemListComponent", function () { return DuyetKetQuaXetNghiemListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _duyet_ket_qua_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../duyet-ket-qua.model */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua.model.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7__);
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_8__);
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_9__);
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14__);
            /* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/twotone-done */ "./node_modules/@iconify/icons-ic/twotone-done.js");
            /* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_15__);
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _duyet_ket_qua_nhom_dv_list_popup_duyet_ket_qua_nhom_dv_list_popup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../duyet-ket-qua-nhom-dv-list-popup/duyet-ket-qua-nhom-dv-list-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-nhom-dv-list-popup/duyet-ket-qua-nhom-dv-list-popup.component.ts");
            var DuyetKetQuaXetNghiemListComponent = /** @class */ (function () {
                function DuyetKetQuaXetNghiemListComponent(router, dialog, apiService, authService, route, renderer, notificationService) {
                    this.router = router;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.authService = authService;
                    this.route = route;
                    this.renderer = renderer;
                    this.notificationService = notificationService;
                    this.gridColumns = [];
                    this.gridColumnChilds = [];
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
                    this.search = new _duyet_ket_qua_model__WEBPACK_IMPORTED_MODULE_5__["Search"]();
                    this.query = null;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7___default.a;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_8___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_9___default.a;
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14___default.a;
                    this.icDone = _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_15___default.a;
                    this.validationErrors = null;
                    this.additionalSearchString = null;
                    this.holdQuery = null;
                    this.baseRoute = 'xet-nghiem/duyet-ket-qua';
                    this.groups = [{ field: 'NhomXetNghiemDisplay' }];
                    this.isScan = false;
                    this.inPhieuDuyetKetQua = new _duyet_ket_qua_model__WEBPACK_IMPORTED_MODULE_5__["PhieuDuyetKetQua"]();
                    this.sort = [{
                            field: 'NgayThucHien',
                            dir: 'asc'
                        },
                        {
                            field: 'Id',
                            dir: 'asc'
                        }];
                    this.sortChild = [
                        {
                            field: 'Id',
                            dir: 'asc'
                        }
                    ];
                    this.urlGetDataGridChild = 'DuyetKetQuaXetNghiem/GetDataChildrenAsync';
                    this.urlGetTotalPageGridChild = 'DuyetKetQuaXetNghiem/GetTotalPageChildrenAsync';
                    this.displayToolTipGridNguoiYeuCau = null;
                    this.displayToolTipGridNgayYeuCau = null;
                    this.displayToolTipGridLyDoYeuCau = null;
                    this.displayToolTipGridNguoiDuyet = null;
                    this.displayToolTipGridNgayDuyet = null;
                }
                DuyetKetQuaXetNghiemListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DuyetKetQuaXetNghiem;
                    if (this.route.snapshot.queryParams.holdQuery != null) {
                        this.holdQuery = this.route.snapshot.queryParams.holdQuery;
                    }
                    if (this.holdQuery != null &&
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_6__["LocalStorageHelper"].getItem('adtDuyetKqXetNghiem') != null) {
                        this.additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_6__["LocalStorageHelper"].getItem('adtDuyetKqXetNghiem');
                        this.search = JSON.parse(this.additionalSearchString);
                        if (this.search.RangeThucHien != null) {
                            if (this.search.RangeThucHien.StartDate != null) {
                                var startDate = new Date(this.search.RangeThucHien.StartDate);
                                this.search.RangeThucHien.StartDate = new Date(startDate);
                            }
                            if (this.search.RangeThucHien.EndDate != null) {
                                var endDate = new Date(this.search.RangeThucHien.EndDate);
                                this.search.RangeThucHien.EndDate = new Date(endDate);
                            }
                        }
                        if (this.search.RangeDuyet != null) {
                            if (this.search.RangeDuyet.StartDate != null) {
                                var startDate = new Date(this.search.RangeDuyet.StartDate);
                                this.search.RangeDuyet.StartDate = new Date(startDate);
                            }
                            if (this.search.RangeDuyet.EndDate != null) {
                                var endDate = new Date(this.search.RangeDuyet.EndDate);
                                this.search.RangeDuyet.EndDate = new Date(endDate);
                            }
                        }
                    }
                    else {
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_6__["LocalStorageHelper"].setItem('adtDuyetKqXetNghiem', null);
                        this.additionalSearchString = JSON.stringify(this.search);
                    }
                    this.gridColumns = [
                        { Field: 'Barcode', Title: 'Barcode', Width: 95, Sortable: true, Template: this.barcodeTemplate },
                        { Field: 'MaTn', Title: 'Mã TN', Width: 126, Sortable: true },
                        { Field: 'MaBn', Title: 'Mã NB', Width: 112, Sortable: true },
                        { Field: 'HoTen', Title: 'Họ Tên', MinWidth: 130, Sortable: true },
                        { Field: 'GioiTinh', Title: 'Giới Tính', Width: 80, Sortable: true, Template: this.gioiTinhTemplate },
                        { Field: 'NamSinh', Title: 'Năm Sinh', Width: 80, Sortable: false },
                        { Field: 'DiaChi', Title: 'Địa Chỉ', Width: 120, Sortable: true, ShowTooltip: true },
                        { Field: 'TrangThai', Title: 'Trạng Thái', Width: 140, Sortable: true, Template: this.trangThaiTemplate },
                        { Field: 'NguoiThucHien', Title: 'Người Thực Hiện', Width: 120, Sortable: true, ShowTooltip: true },
                        {
                            Field: 'NgayThucHien',
                            Title: 'Ngày Thực Hiện',
                            Width: 156,
                            Sortable: true,
                            ShowTooltip: true,
                            Template: this.ngayThucHienTemplate
                        },
                        { Field: 'NguoiDuyetKq', Title: 'Người Duyệt KQ', Width: 120, Sortable: true, ShowTooltip: true },
                        {
                            Field: 'NgayDuyetKq',
                            Title: 'Ngày Duyệt KQ',
                            Width: 156,
                            Sortable: true,
                            ShowTooltip: true,
                            Template: this.ngayDuyetKqTemplate
                        },
                        { Field: 'Action', Title: '', HideFilter: true, Width: 50, Template: this.actionTemplate }
                    ];
                    this.gridColumnChilds = [
                        {
                            Field: 'NhomXetNghiemDisplay',
                            Title: '',
                            Width: 150,
                            Sortable: true,
                            Hidden: true,
                            HideFilter: true,
                            TemplateGroupHeader: this.nhomXetNghiemTemplate
                        },
                        { Field: 'MaDv', Title: 'Mã DV', Width: 80, Sortable: true },
                        { Field: 'TenDv', Title: 'Tên DV', MinWidth: 80, Sortable: true },
                        { Field: 'ThoiGianChiDinh', Title: 'Thời Gian Chỉ Định', Width: 175, Sortable: true, Template: this.thoiGianChiDinhTemplate },
                        { Field: 'NguoiChiDinh', Title: 'Người Chỉ Định', Width: 140, Sortable: true },
                        { Field: 'BenhPham', Title: 'Bệnh Phẩm', Width: 135, Sortable: true },
                        { Field: 'LoaiMau', Title: 'Loại Mẫu', Width: 110, Sortable: false }
                    ];
                };
                DuyetKetQuaXetNghiemListComponent.prototype.changeNgay = function () {
                    this.Timkiem();
                };
                DuyetKetQuaXetNghiemListComponent.prototype.clearSearch = function () {
                    if (this.search.SearchString === '' || this.search.SearchString == null) {
                        var searchClone = JSON.parse(JSON.stringify(this.search));
                        if (searchClone.RangeThucHien.StartDate != null) {
                            var startDate = new Date(searchClone.RangeThucHien.StartDate);
                            searchClone.RangeThucHien.StartDate = new Date(startDate);
                        }
                        if (searchClone.RangeThucHien.EndDate != null) {
                            var endDate = new Date(searchClone.RangeThucHien.EndDate);
                            searchClone.RangeThucHien.EndDate = new Date(endDate);
                        }
                        if (searchClone.RangeDuyet.StartDate != null) {
                            var startDate = new Date(searchClone.RangeDuyet.StartDate);
                            searchClone.RangeDuyet.StartDate = new Date(startDate);
                        }
                        if (searchClone.RangeDuyet.EndDate != null) {
                            var endDate = new Date(searchClone.RangeDuyet.EndDate);
                            searchClone.RangeDuyet.EndDate = new Date(endDate);
                        }
                        this.query = JSON.stringify(searchClone);
                        var queryForHole = JSON.parse(JSON.stringify(searchClone));
                        if (queryForHole.RangeNhap != null) {
                            if (queryForHole.RangeNhap.startDate != null) {
                                queryForHole.RangeNhap.startDate = new Date(queryForHole.RangeNhap.startDate);
                            }
                            if (queryForHole.RangeNhap.endDate != null) {
                                queryForHole.RangeNhap.endDate = new Date(queryForHole.RangeNhap.endDate);
                            }
                        }
                        if (queryForHole.RangeDuyet != null) {
                            if (queryForHole.RangeDuyet.startDate != null) {
                                queryForHole.RangeDuyet.startDate = new Date(queryForHole.RangeDuyet.startDate);
                            }
                            if (queryForHole.RangeDuyet.endDate != null) {
                                queryForHole.RangeDuyet.endDate = new Date(queryForHole.RangeDuyet.endDate);
                            }
                        }
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_6__["LocalStorageHelper"].setItem('adtDuyetKqXetNghiem', JSON.stringify(queryForHole));
                        if (this.gridParent) {
                            this.gridParent.searchString = '';
                            this.gridParent._additionalSearchString = this.query;
                            this.gridParent.search();
                        }
                    }
                };
                DuyetKetQuaXetNghiemListComponent.prototype.onKey = function (event) {
                    if (event.keyCode === 13) {
                        this.Timkiem();
                    }
                };
                DuyetKetQuaXetNghiemListComponent.prototype.Timkiem = function () {
                    var QueryString = null;
                    this.gridParent._additionalSearchString = null;
                    QueryString = this.search.SearchString;
                    this.router.navigateByUrl('/xet-nghiem/duyet-ket-qua?holdQuery=true');
                    var ycTraThuocUtilityClone = JSON.parse(JSON.stringify(this.search));
                    if (ycTraThuocUtilityClone.RangeThucHien.StartDate != null) {
                        var startDate = new Date(ycTraThuocUtilityClone.RangeThucHien.StartDate);
                        ycTraThuocUtilityClone.RangeThucHien.StartDate = new Date(startDate);
                    }
                    if (ycTraThuocUtilityClone.RangeThucHien.EndDate != null) {
                        var endDate = new Date(ycTraThuocUtilityClone.RangeThucHien.EndDate);
                        ycTraThuocUtilityClone.RangeThucHien.EndDate = new Date(endDate);
                    }
                    if (ycTraThuocUtilityClone.RangeDuyet.StartDate != null) {
                        var startDate = new Date(ycTraThuocUtilityClone.RangeDuyet.StartDate);
                        ycTraThuocUtilityClone.RangeDuyet.StartDate = new Date(startDate);
                    }
                    if (ycTraThuocUtilityClone.RangeDuyet.EndDate != null) {
                        var endDate = new Date(ycTraThuocUtilityClone.RangeDuyet.EndDate);
                        ycTraThuocUtilityClone.RangeDuyet.EndDate = new Date(endDate);
                    }
                    this.query = JSON.stringify(ycTraThuocUtilityClone);
                    var queryForHole = JSON.parse(JSON.stringify(ycTraThuocUtilityClone));
                    if (queryForHole.RangeThucHien != null) {
                        if (queryForHole.RangeThucHien.startDate != null) {
                            queryForHole.RangeThucHien.startDate = new Date(queryForHole.RangeThucHien.startDate);
                        }
                        if (queryForHole.RangeThucHien.endDate != null) {
                            queryForHole.RangeThucHien.endDate = new Date(queryForHole.RangeThucHien.endDate);
                        }
                    }
                    if (queryForHole.RangeDuyet != null) {
                        if (queryForHole.RangeDuyet.startDate != null) {
                            queryForHole.RangeDuyet.startDate = new Date(queryForHole.RangeDuyet.startDate);
                        }
                        if (queryForHole.RangeDuyet.endDate != null) {
                            queryForHole.RangeDuyet.endDate = new Date(queryForHole.RangeDuyet.endDate);
                        }
                    }
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_6__["LocalStorageHelper"].setItem('adtDuyetKqXetNghiem', JSON.stringify(queryForHole));
                    this.gridParent._additionalSearchString = this.query;
                    this.gridParent.searchString = QueryString;
                    this.gridParent.search();
                };
                DuyetKetQuaXetNghiemListComponent.prototype.exportExcel = function () {
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
                        self.showPopupLoadingData(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["KetQuaXetNghiemMessage"].MessageDownloadingExcel);
                        self.apiService.postExportExcel('DuyetKetQuaXetNghiem/ExportDuyetKetQuaXetNghiem', self.gridParent._gridQueryInfo).subscribe(function (resultData) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_18__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'DuyetKetQuaXetNghiem' + dateTimeNow.getFullYear() + '.xlsx');
                            self.closePopupLoadingData();
                        }, function (err) {
                            self.notificationService.showError(err.Message);
                            self.closePopupLoadingData();
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DuyetKetQuaXetNghiemListComponent.prototype.showPopupLoadingData = function (message) {
                    if (this.popupLoadingData == null
                        || this.popupLoadingData.openDialogs == null
                        || (this.popupLoadingData.openDialogs != null && this.popupLoadingData.openDialogs.length === 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: message },
                        });
                    }
                };
                DuyetKetQuaXetNghiemListComponent.prototype.showPopupDownloadData = function () {
                    if (this.popupLoadingData == null
                        || this.popupLoadingData.openDialogs == null
                        || (this.popupLoadingData.openDialogs != null && this.popupLoadingData.openDialogs.length === 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang tải dữ liệu...' },
                        });
                    }
                };
                DuyetKetQuaXetNghiemListComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData) {
                        this.popupLoadingData.close();
                    }
                };
                DuyetKetQuaXetNghiemListComponent.prototype.xemChiTiet = function (id) {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
                        this.router.navigateByUrl(this.baseRoute + '/chi-tiet/' + id + '?holdQuery=true');
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DuyetKetQuaXetNghiemListComponent.prototype.CheckboxChange = function ($event, dangChoDuyet, daDuyet) {
                    if (dangChoDuyet === void 0) { dangChoDuyet = false; }
                    if (daDuyet === void 0) { daDuyet = false; }
                    this.router.navigateByUrl(this.baseRoute + '?holdQuery=true');
                    if (dangChoDuyet) {
                        this.search.ChoDuyet = $event;
                    }
                    else if (daDuyet) {
                        this.search.DaDuyet = $event;
                    }
                    this.Timkiem();
                };
                DuyetKetQuaXetNghiemListComponent.prototype.nhomDichVuCanIn = function (phienXetNghiemId, yeuCauTiepNhanId) {
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
                        self.apiService.get("DuyetKetQuaXetNghiem/GetNhomDichVuDuyet?phienXetNghiemId=" + phienXetNghiemId).subscribe(function (resultData) {
                            if (resultData != undefined && resultData != null) {
                                self.dialog.open(_duyet_ket_qua_nhom_dv_list_popup_duyet_ket_qua_nhom_dv_list_popup_component__WEBPACK_IMPORTED_MODULE_20__["DuyetKetQuaNhomDvListPopupComponent"], {
                                    disableClose: false,
                                    width: '350px',
                                    data: { Model: resultData, PhienXetNghiemId: phienXetNghiemId, YeuCauTiepNhanId: yeuCauTiepNhanId },
                                }).afterClosed().subscribe(function (result) {
                                });
                            }
                        }, function (err) {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DuyetKetQuaXetNghiemListComponent.prototype.download = function () { };
                DuyetKetQuaXetNghiemListComponent.prototype.QuetMaQRCodeClick = function () {
                    var elementBarcode = document.getElementById('barcodeActive');
                    if (elementBarcode) {
                        elementBarcode.click();
                    }
                };
                DuyetKetQuaXetNghiemListComponent.prototype.changeQR = function (changeQr) {
                    if (changeQr != null && typeof changeQr === 'string' && changeQr.endsWith('@')) {
                        // this.modelQRCode = event;
                        var dataTimKiem = changeQr.split('|');
                        if (dataTimKiem.length > 1) {
                            this.search.SearchString = dataTimKiem[0];
                        }
                        else {
                            this.search.SearchString = changeQr.slice(0, -1);
                        }
                        this.Timkiem();
                    }
                    else {
                        this.notificationService.showError('Không tìm thấy thông tin cần tìm.');
                    }
                    this.isScan = false;
                };
                DuyetKetQuaXetNghiemListComponent.prototype.keyEvent = function (event) {
                    // tslint:disable-next-line: deprecation
                    if (event.keyCode === 81 && event.ctrlKey && this.isScan !== true) {
                        this.isScan = true;
                        event.preventDefault();
                        this.QuetMaQRCodeClick();
                    }
                };
                DuyetKetQuaXetNghiemListComponent.prototype.setUpDataTooltip = function (dataItem) {
                    this.displayToolTipGridNguoiYeuCau = dataItem.items[0].NguoiYeuCau;
                    this.displayToolTipGridNgayYeuCau = dataItem.items[0].NgayYeuCauDisplay;
                    this.displayToolTipGridLyDoYeuCau = dataItem.items[0].LyDoYeuCau;
                    this.displayToolTipGridNguoiDuyet = dataItem.items[0].NguoiDuyet;
                    this.displayToolTipGridNgayDuyet = dataItem.items[0].NgayDuyetDisplay;
                };
                DuyetKetQuaXetNghiemListComponent.prototype.checkHiddenIcon = function (item, danhSachLoaiMau) {
                    if (danhSachLoaiMau) {
                        // tslint:disable-next-line: prefer-for-of
                        for (var i = 0; i < danhSachLoaiMau.length; i++) {
                            if (item === danhSachLoaiMau[i]) {
                                return true;
                            }
                        }
                    }
                    return false;
                };
                DuyetKetQuaXetNghiemListComponent.prototype.isMauKhongDat = function (mau, danhSachMauKhongDat) {
                    // tslint:disable-next-line: prefer-for-of
                    for (var i = 0; i < danhSachMauKhongDat.length; i++) {
                        if (mau === danhSachMauKhongDat[i]) {
                            return true;
                        }
                    }
                    return false;
                };
                return DuyetKetQuaXetNghiemListComponent;
            }());
            DuyetKetQuaXetNghiemListComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_17__["ApiService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('menuTrigger', { read: _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatMenuTrigger"], static: false })
            ], DuyetKetQuaXetNghiemListComponent.prototype, "trigger", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('barcodeTemplate', { static: true })
            ], DuyetKetQuaXetNghiemListComponent.prototype, "barcodeTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gioiTinhTemplate', { static: true })
            ], DuyetKetQuaXetNghiemListComponent.prototype, "gioiTinhTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
            ], DuyetKetQuaXetNghiemListComponent.prototype, "trangThaiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayThucHienTemplate', { static: true })
            ], DuyetKetQuaXetNghiemListComponent.prototype, "ngayThucHienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayDuyetKqTemplate', { static: true })
            ], DuyetKetQuaXetNghiemListComponent.prototype, "ngayDuyetKqTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thoiGianChiDinhTemplate', { static: true })
            ], DuyetKetQuaXetNghiemListComponent.prototype, "thoiGianChiDinhTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomXetNghiemTemplate', { static: true })
            ], DuyetKetQuaXetNghiemListComponent.prototype, "nhomXetNghiemTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], DuyetKetQuaXetNghiemListComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridParent', { static: false })
            ], DuyetKetQuaXetNghiemListComponent.prototype, "gridParent", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDetail', { static: false })
            ], DuyetKetQuaXetNghiemListComponent.prototype, "gridDetail", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])
            ], DuyetKetQuaXetNghiemListComponent.prototype, "keyEvent", null);
            DuyetKetQuaXetNghiemListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-duyet-ket-qua-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-ket-qua-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-list/duyet-ket-qua-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-ket-qua-list.component.scss */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-list/duyet-ket-qua-list.component.scss")).default]
                })
            ], DuyetKetQuaXetNghiemListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-nhom-dv-list-popup/duyet-ket-qua-nhom-dv-list-popup.component.scss": 
        /*!****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-nhom-dv-list-popup/duyet-ket-qua-nhom-dv-list-popup.component.scss ***!
          \****************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi94ZXQtbmdoaWVtL2R1eWV0LWtldC1xdWEvZHV5ZXQta2V0LXF1YS1uaG9tLWR2LWxpc3QtcG9wdXAvZHV5ZXQta2V0LXF1YS1uaG9tLWR2LWxpc3QtcG9wdXAuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-nhom-dv-list-popup/duyet-ket-qua-nhom-dv-list-popup.component.ts": 
        /*!**************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-nhom-dv-list-popup/duyet-ket-qua-nhom-dv-list-popup.component.ts ***!
          \**************************************************************************************************************************************/
        /*! exports provided: DuyetKetQuaNhomDvListPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetKetQuaNhomDvListPopupComponent", function () { return DuyetKetQuaNhomDvListPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _duyet_ket_qua_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../duyet-ket-qua.model */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua.model.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _duyet_ket_qua_phieu_popup_duyet_ket_qua_phieu_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../duyet-ket-qua-phieu-popup/duyet-ket-qua-phieu-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-phieu-popup/duyet-ket-qua-phieu-popup.component.ts");
            /* harmony import */ var _duyet_ket_qua_in_nhom_dv_list_popup_duyet_ket_qua_in_nhom_dv_list_popup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../duyet-ket-qua-in-nhom-dv-list-popup/duyet-ket-qua-in-nhom-dv-list-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-in-nhom-dv-list-popup/duyet-ket-qua-in-nhom-dv-list-popup.component.ts");
            var DuyetKetQuaNhomDvListPopupComponent = /** @class */ (function () {
                function DuyetKetQuaNhomDvListPopupComponent(dialogRef, apiService, notificationService, data, dialog, ref, authService) {
                    this.dialogRef = dialogRef;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.data = data;
                    this.dialog = dialog;
                    this.ref = ref;
                    this.authService = authService;
                    this.nhomDichVuDuyets = [];
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.disabled = true;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__["DocumentType"].DuyetKetQuaXetNghiem;
                    this.inPhieuDuyetKetQua = new _duyet_ket_qua_model__WEBPACK_IMPORTED_MODULE_6__["PhieuDuyetKetQua"]();
                    this.validationErrors = null;
                }
                DuyetKetQuaNhomDvListPopupComponent.prototype.ngOnInit = function () {
                    console.log(this.data);
                    this.nhomDichVuDuyets = this.data.Model;
                };
                DuyetKetQuaNhomDvListPopupComponent.prototype.isCheck = function () {
                    if (this.nhomDichVuDuyets.some(function (x) { return x.IsCheck; })) {
                        this.disabled = true;
                    }
                    else {
                        this.disabled = false;
                    }
                };
                DuyetKetQuaNhomDvListPopupComponent.prototype.okPrint = function () {
                    this.dialogRef.close();
                    this.print(this.data.PhienXetNghiemId, this.data.YeuCauTiepNhanId);
                };
                DuyetKetQuaNhomDvListPopupComponent.prototype.print = function (id, yeuCauTiepNhanId) {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Process)) {
                        this.inPhieuDuyetKetQua.HostingName = window.location.protocol + '//' + window.location.host;
                        this.inPhieuDuyetKetQua.Header = true;
                        this.inPhieuDuyetKetQua.PhienXetNghiemId = id;
                        this.inPhieuDuyetKetQua.YeuCauTiepNhanId = yeuCauTiepNhanId;
                        if (this.inPhieuDuyetKetQua.NhomDichVuBenhVienIds != []) {
                            this.inPhieuDuyetKetQua.NhomDichVuBenhVienIds = [];
                        }
                        this.nhomDichVuDuyets.forEach(function (element) {
                            if (element.IsCheck) {
                                _this.inPhieuDuyetKetQua.NhomDichVuBenhVienIds.push(element.NhomDichVuBenhVienId);
                            }
                        });
                        this.apiService.post('XetNghiem/GetAllHtmlPdfKetQuaXetNghiem', this.inPhieuDuyetKetQua).subscribe(function (arrHtml) {
                            _this.dialog.open(_duyet_ket_qua_phieu_popup_duyet_ket_qua_phieu_popup_component__WEBPACK_IMPORTED_MODULE_12__["DuyetKetQuaPhieuPopupComponent"], {
                                disableClose: false,
                                width: '1000px',
                                data: arrHtml
                            }).afterClosed().subscribe(function () {
                            });
                            _this.closePopupLoadingData();
                        }, function (err) {
                            if (err.Message !== 'Validation Failed') {
                                _this.notificationService.showError(err.Message);
                            }
                            _this.closePopupLoadingData();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DuyetKetQuaNhomDvListPopupComponent.prototype.ok = function () {
                    var _this = this;
                    this.inPhieuDuyetKetQua.HostingName = window.location.protocol + '//' + window.location.host;
                    this.inPhieuDuyetKetQua.PhienXetNghiemId = this.data.PhienXetNghiemId;
                    this.inPhieuDuyetKetQua.Id = this.data.PhienXetNghiemId;
                    if (this.inPhieuDuyetKetQua.NhomDichVuBenhVienIds != []) {
                        this.inPhieuDuyetKetQua.NhomDichVuBenhVienIds = [];
                    }
                    this.nhomDichVuDuyets.forEach(function (element) {
                        if (element.IsCheck) {
                            _this.inPhieuDuyetKetQua.NhomDichVuBenhVienIds.push(element.NhomDichVuBenhVienId);
                        }
                    });
                    this.showPopupLoadingData();
                    this.dialogRef.close();
                    this.apiService.post("XetNghiem/XemPhieuXetNghiem", this.inPhieuDuyetKetQua).subscribe(function (resData) {
                        if (resData != undefined && resData != null && resData.length > 0) {
                            _this.closePopupLoadingData();
                            _this.dialog.open(_duyet_ket_qua_in_nhom_dv_list_popup_duyet_ket_qua_in_nhom_dv_list_popup_component__WEBPACK_IMPORTED_MODULE_13__["DuyetKetQuaInNhomDvListPopupComponent"], {
                                disableClose: false,
                                width: '1200px',
                                data: resData[0].Html,
                            }).afterClosed().subscribe(function () {
                                _this.closePopupLoadingData();
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
                DuyetKetQuaNhomDvListPopupComponent.prototype.showPopupLoadingData = function () {
                    if (this.popupLoadingData == null
                        || this.popupLoadingData.openDialogs == null
                        || (this.popupLoadingData.openDialogs != null && this.popupLoadingData.openDialogs.length === 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang tải dữ liệu...' },
                        });
                    }
                };
                DuyetKetQuaNhomDvListPopupComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData) {
                        this.popupLoadingData.close();
                    }
                };
                DuyetKetQuaNhomDvListPopupComponent.prototype.close = function () {
                    this.dialog.closeAll();
                };
                return DuyetKetQuaNhomDvListPopupComponent;
            }());
            DuyetKetQuaNhomDvListPopupComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] }
            ]; };
            DuyetKetQuaNhomDvListPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duyet-ket-qua-nhom-dv-list-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-ket-qua-nhom-dv-list-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-nhom-dv-list-popup/duyet-ket-qua-nhom-dv-list-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-ket-qua-nhom-dv-list-popup.component.scss */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-nhom-dv-list-popup/duyet-ket-qua-nhom-dv-list-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
            ], DuyetKetQuaNhomDvListPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-phieu-popup/duyet-ket-qua-phieu-popup.component.scss": 
        /*!**************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-phieu-popup/duyet-ket-qua-phieu-popup.component.scss ***!
          \**************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 550px;\n}\n\n.container-iframe iframe {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0vZHV5ZXQta2V0LXF1YS9kdXlldC1rZXQtcXVhLXBoaWV1LXBvcHVwL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxceGV0LW5naGllbVxcZHV5ZXQta2V0LXF1YVxcZHV5ZXQta2V0LXF1YS1waGlldS1wb3B1cFxcZHV5ZXQta2V0LXF1YS1waGlldS1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0vZHV5ZXQta2V0LXF1YS9kdXlldC1rZXQtcXVhLXBoaWV1LXBvcHVwL2R1eWV0LWtldC1xdWEtcGhpZXUtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0vZHV5ZXQta2V0LXF1YS9kdXlldC1rZXQtcXVhLXBoaWV1LXBvcHVwL2R1eWV0LWtldC1xdWEtcGhpZXUtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTUwcHg7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59IiwiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU1MHB4O1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-phieu-popup/duyet-ket-qua-phieu-popup.component.ts": 
        /*!************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-phieu-popup/duyet-ket-qua-phieu-popup.component.ts ***!
          \************************************************************************************************************************/
        /*! exports provided: DuyetKetQuaPhieuPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetKetQuaPhieuPopupComponent", function () { return DuyetKetQuaPhieuPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            var DuyetKetQuaPhieuPopupComponent = /** @class */ (function () {
                function DuyetKetQuaPhieuPopupComponent(data, apiService, dialog, notificationService) {
                    this.data = data;
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.arrFilePdf = [];
                    this.arrFileUrl = [];
                }
                DuyetKetQuaPhieuPopupComponent.prototype.ngOnInit = function () {
                    this.getALlFilePDFFromHtml(this.data);
                };
                DuyetKetQuaPhieuPopupComponent.prototype.getALlFilePDFFromHtml = function (arrHtml) {
                    var _this = this;
                    this.showPopupLoadingData();
                    arrHtml.forEach(function (html) {
                        var obj = {
                            Html: html,
                            TenFile: 'KetQuaXetNghiem'
                        };
                        _this.apiService.postExportPdf('XetNghiem/GetFilePDFFromHtml', obj).subscribe(function (file) {
                            var newBlob = new Blob([file], { type: 'application/pdf' });
                            var datalocalURL = window.URL.createObjectURL(newBlob);
                            // document.querySelector("iframe").src = datalocalURL;
                            //console.log('datalocalURL', datalocalURL);
                            _this.arrFileUrl.push(datalocalURL);
                            _this.arrFilePdf.push(file);
                            if (_this.arrFileUrl.length === arrHtml.length) {
                                _this.closePopupLoadingData();
                            }
                        }, function (err) {
                            if (err.Message !== 'Validation Failed') {
                                _this.notificationService.showError(err.Message);
                            }
                            _this.closePopupLoadingData();
                        });
                    });
                };
                DuyetKetQuaPhieuPopupComponent.prototype.downloadAllFile = function () {
                    var dateTimeNow = new Date();
                    this.arrFilePdf.forEach(function (file) {
                        src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(file, 'application/pdf', 'KetQuaXetNghiem' + dateTimeNow.getFullYear() + '.pdf');
                    });
                };
                DuyetKetQuaPhieuPopupComponent.prototype.showPopupLoadingData = function () {
                    if (this.popupLoadingData == null
                        || this.popupLoadingData.openDialogs == null
                        || (this.popupLoadingData.openDialogs != null && this.popupLoadingData.openDialogs.length === 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang tải dữ liệu...' },
                        });
                    }
                };
                DuyetKetQuaPhieuPopupComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData) {
                        this.popupLoadingData.close();
                    }
                };
                return DuyetKetQuaPhieuPopupComponent;
            }());
            DuyetKetQuaPhieuPopupComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
            ]; };
            DuyetKetQuaPhieuPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-duyet-ket-qua-phieu-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-ket-qua-phieu-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-phieu-popup/duyet-ket-qua-phieu-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-ket-qua-phieu-popup.component.scss */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-phieu-popup/duyet-ket-qua-phieu-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], DuyetKetQuaPhieuPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-popup/duyet-ket-qua-popup.component.scss": 
        /*!**************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-popup/duyet-ket-qua-popup.component.scss ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".div-content {\n  margin-top: 20px !important;\n}\n\n.div-content-spec {\n  margin-top: 30px !important;\n}\n\n.content-1 {\n  border-bottom: 1px solid var(--foreground-divider);\n}\n\nfieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em;\n  padding-bottom: 0.625em;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline-block !important;\n}\n\n.po-h-radio {\n  margin-top: -2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0vZHV5ZXQta2V0LXF1YS9kdXlldC1rZXQtcXVhLXBvcHVwL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxceGV0LW5naGllbVxcZHV5ZXQta2V0LXF1YVxcZHV5ZXQta2V0LXF1YS1wb3B1cFxcZHV5ZXQta2V0LXF1YS1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0vZHV5ZXQta2V0LXF1YS9kdXlldC1rZXQtcXVhLXBvcHVwL2R1eWV0LWtldC1xdWEtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7QUNDRjs7QURFQTtFQUNFLGtEQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4veGV0LW5naGllbS9kdXlldC1rZXQtcXVhL2R1eWV0LWtldC1xdWEtcG9wdXAvZHV5ZXQta2V0LXF1YS1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXYtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmRpdi1jb250ZW50LXNwZWMge1xuICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb250ZW50LTEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbn1cblxuZmllbGRzZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAwLjM1ZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtO1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG4ucG8taC1yYWRpbyB7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59IiwiLmRpdi1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4uZGl2LWNvbnRlbnQtc3BlYyB7XG4gIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbnRlbnQtMSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xufVxuXG5maWVsZHNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgcGFkZGluZy10b3A6IDAuMzVlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW07XG4gIHBhZGRpbmctbGVmdDogMC43NWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1ZW07XG4gIGJvcmRlcjogMXB4ICNlMGUwZTA7XG4gIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcbn1cblxuZmllbGRzZXQgLml0ZW1fcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmZpZWxkc2V0IHVsID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmZpZWxkc2V0IHVsLmlubGluZSA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5wby1oLXJhZGlvIHtcbiAgbWFyZ2luLXRvcDogLTJweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-popup/duyet-ket-qua-popup.component.ts": 
        /*!************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-popup/duyet-ket-qua-popup.component.ts ***!
          \************************************************************************************************************/
        /*! exports provided: DuyetKetQuaXetNghiemPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetKetQuaXetNghiemPopupComponent", function () { return DuyetKetQuaXetNghiemPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _chon_loai_ket_qua_xet_nghiem_popup_chon_loai_ket_qua_xet_nghiem_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chon-loai-ket-qua-xet-nghiem-popup/chon-loai-ket-qua-xet-nghiem-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/chon-loai-ket-qua-xet-nghiem-popup/chon-loai-ket-qua-xet-nghiem-popup.component.ts");
            var DuyetKetQuaXetNghiemPopupComponent = /** @class */ (function () {
                function DuyetKetQuaXetNghiemPopupComponent(data, dialogRef, dialog) {
                    this.data = data;
                    this.dialogRef = dialogRef;
                    this.dialog = dialog;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.lstData = new Array();
                    this.hasData = false;
                    this.lstData = this.data.Model;
                    if (this.lstData.some(function (x) { return x; })) {
                        this.hasData = true;
                    }
                }
                DuyetKetQuaXetNghiemPopupComponent.prototype.ngOnInit = function () {
                };
                DuyetKetQuaXetNghiemPopupComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                DuyetKetQuaXetNghiemPopupComponent.prototype.Khong = function () {
                    this.dialogRef.close();
                };
                DuyetKetQuaXetNghiemPopupComponent.prototype.Co = function (option) {
                    var _this = this;
                    if (option === 'Print') {
                        var dialogRef = void 0;
                        dialogRef = this.dialog.open(_chon_loai_ket_qua_xet_nghiem_popup_chon_loai_ket_qua_xet_nghiem_popup_component__WEBPACK_IMPORTED_MODULE_4__["ChonLoaiKetQuaXetNghiemPopupComponent"], {
                            disableClose: true,
                            width: '1000px',
                            // height: '300px',
                            data: this.data.DataChiTietXetNghiem,
                        }).afterClosed().subscribe(function (result) {
                            if (result != undefined && result != null && result != "") {
                                if (result == 'No') {
                                    _this.dialogRef.close();
                                }
                                else {
                                    _this.dialogRef.close(result);
                                }
                            }
                        });
                    }
                    else if (option === 'Yes') {
                        this.dialogRef.close(option);
                    }
                    else
                        this.dialogRef.close(null);
                };
                return DuyetKetQuaXetNghiemPopupComponent;
            }());
            DuyetKetQuaXetNghiemPopupComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
            ]; };
            DuyetKetQuaXetNghiemPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duyet-ket-qua-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-ket-qua-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-popup/duyet-ket-qua-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-ket-qua-popup.component.scss */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-popup/duyet-ket-qua-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], DuyetKetQuaXetNghiemPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-routing.module.ts": 
        /*!***************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-routing.module.ts ***!
          \***************************************************************************************/
        /*! exports provided: DuyetKetQuaXetNghiemRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetKetQuaXetNghiemRoutingModule", function () { return DuyetKetQuaXetNghiemRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _duyet_ket_qua_list_duyet_ket_qua_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./duyet-ket-qua-list/duyet-ket-qua-list.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-list/duyet-ket-qua-list.component.ts");
            /* harmony import */ var _duyet_ket_qua_detailed_duyet_ket_qua_detailed_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./duyet-ket-qua-detailed/duyet-ket-qua-detailed.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-detailed/duyet-ket-qua-detailed.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            var routes = [
                {
                    path: '',
                    component: _duyet_ket_qua_list_duyet_ket_qua_list_component__WEBPACK_IMPORTED_MODULE_3__["DuyetKetQuaXetNghiemListComponent"],
                    data: {
                        title: 'Danh sách duyệt kết quả xét nghiệm',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__["DocumentType"].DuyetKetQuaXetNghiem,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_7__["PermisssionGuard"]]
                },
                {
                    path: 'chi-tiet/:id',
                    component: _duyet_ket_qua_detailed_duyet_ket_qua_detailed_component__WEBPACK_IMPORTED_MODULE_4__["DuyetKetQuaXetNghiemDetailedComponent"],
                    data: {
                        title: 'Chi tiết duyệt kết quả xét nghiệm',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__["DocumentType"].DuyetKetQuaXetNghiem,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_7__["PermisssionGuard"]]
                }
            ];
            var DuyetKetQuaXetNghiemRoutingModule = /** @class */ (function () {
                function DuyetKetQuaXetNghiemRoutingModule() {
                }
                return DuyetKetQuaXetNghiemRoutingModule;
            }());
            DuyetKetQuaXetNghiemRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], DuyetKetQuaXetNghiemRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua.model.ts": 
        /*!******************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua.model.ts ***!
          \******************************************************************************/
        /*! exports provided: Search, RangeDate, PhieuDuyetKetQua, DuyetKetQua, ListDataChild, NhomDichVuDuyet */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function () { return Search; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeDate", function () { return RangeDate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuDuyetKetQua", function () { return PhieuDuyetKetQua; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetKetQua", function () { return DuyetKetQua; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDataChild", function () { return ListDataChild; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhomDichVuDuyet", function () { return NhomDichVuDuyet; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Search = /** @class */ (function () {
                function Search(SearchString, ChoDuyet, DaDuyet, 
                // tslint:disable-next-line: no-use-before-declare
                RangeThucHien, 
                // tslint:disable-next-line: no-use-before-declare
                RangeDuyet) {
                    if (SearchString === void 0) { SearchString = null; }
                    if (ChoDuyet === void 0) { ChoDuyet = true; }
                    if (DaDuyet === void 0) { DaDuyet = false; }
                    if (RangeThucHien === void 0) { RangeThucHien = new RangeDate(); }
                    if (RangeDuyet === void 0) { RangeDuyet = new RangeDate(); }
                    this.SearchString = SearchString;
                    this.ChoDuyet = ChoDuyet;
                    this.DaDuyet = DaDuyet;
                    this.RangeThucHien = RangeThucHien;
                    this.RangeDuyet = RangeDuyet;
                }
                return Search;
            }());
            var RangeDate = /** @class */ (function () {
                function RangeDate(StartDate, EndDate) {
                    if (StartDate === void 0) { StartDate = null; }
                    if (EndDate === void 0) { EndDate = null; }
                    this.StartDate = StartDate;
                    this.EndDate = EndDate;
                }
                return RangeDate;
            }());
            var PhieuDuyetKetQua = /** @class */ (function () {
                function PhieuDuyetKetQua(Id, HostingName, Header, PhienXetNghiemId, YeuCauTiepNhanId, NhomDichVuBenhVienIds, LoaiIn, ListIn) {
                    if (Id === void 0) { Id = null; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (Header === void 0) { Header = null; }
                    if (PhienXetNghiemId === void 0) { PhienXetNghiemId = null; }
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (NhomDichVuBenhVienIds === void 0) { NhomDichVuBenhVienIds = []; }
                    if (LoaiIn === void 0) { LoaiIn = null; }
                    if (ListIn === void 0) { ListIn = []; }
                    this.Id = Id;
                    this.HostingName = HostingName;
                    this.Header = Header;
                    this.PhienXetNghiemId = PhienXetNghiemId;
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                    this.NhomDichVuBenhVienIds = NhomDichVuBenhVienIds;
                    this.LoaiIn = LoaiIn;
                    this.ListIn = ListIn;
                }
                return PhieuDuyetKetQua;
            }());
            var DuyetKetQua = /** @class */ (function () {
                function DuyetKetQua(Id, YeuCauTiepNhanId, Barcode, MaTn, MaBn, HoTen, MaBhyt, GioiTinhDisplay, NamSinh, DiaChi, Tuoi, Tuyen, MucHuong, DanToc, NgheNghiep, ChanDoanReadonly, Khoa, Phong, NguoiThucHien, NguoiThucHienId, ChanDoan, TrangThai, TrangThaiDisplay, GhiChu, ChiTietKetQuaXetNghiems, 
                //BVHD-3364
                TenCongTy) {
                    if (Id === void 0) { Id = null; }
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (Barcode === void 0) { Barcode = null; }
                    if (MaTn === void 0) { MaTn = null; }
                    if (MaBn === void 0) { MaBn = null; }
                    if (HoTen === void 0) { HoTen = null; }
                    if (MaBhyt === void 0) { MaBhyt = null; }
                    if (GioiTinhDisplay === void 0) { GioiTinhDisplay = null; }
                    if (NamSinh === void 0) { NamSinh = null; }
                    if (DiaChi === void 0) { DiaChi = null; }
                    if (Tuoi === void 0) { Tuoi = null; }
                    if (Tuyen === void 0) { Tuyen = null; }
                    if (MucHuong === void 0) { MucHuong = null; }
                    if (DanToc === void 0) { DanToc = null; }
                    if (NgheNghiep === void 0) { NgheNghiep = null; }
                    if (ChanDoanReadonly === void 0) { ChanDoanReadonly = null; }
                    if (Khoa === void 0) { Khoa = null; }
                    if (Phong === void 0) { Phong = null; }
                    if (NguoiThucHien === void 0) { NguoiThucHien = null; }
                    if (NguoiThucHienId === void 0) { NguoiThucHienId = null; }
                    if (ChanDoan === void 0) { ChanDoan = null; }
                    if (TrangThai === void 0) { TrangThai = null; }
                    if (TrangThaiDisplay === void 0) { TrangThaiDisplay = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (ChiTietKetQuaXetNghiems === void 0) { ChiTietKetQuaXetNghiems = new Array(); }
                    if (TenCongTy === void 0) { TenCongTy = null; }
                    this.Id = Id;
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                    this.Barcode = Barcode;
                    this.MaTn = MaTn;
                    this.MaBn = MaBn;
                    this.HoTen = HoTen;
                    this.MaBhyt = MaBhyt;
                    this.GioiTinhDisplay = GioiTinhDisplay;
                    this.NamSinh = NamSinh;
                    this.DiaChi = DiaChi;
                    this.Tuoi = Tuoi;
                    this.Tuyen = Tuyen;
                    this.MucHuong = MucHuong;
                    this.DanToc = DanToc;
                    this.NgheNghiep = NgheNghiep;
                    this.ChanDoanReadonly = ChanDoanReadonly;
                    this.Khoa = Khoa;
                    this.Phong = Phong;
                    this.NguoiThucHien = NguoiThucHien;
                    this.NguoiThucHienId = NguoiThucHienId;
                    this.ChanDoan = ChanDoan;
                    this.TrangThai = TrangThai;
                    this.TrangThaiDisplay = TrangThaiDisplay;
                    this.GhiChu = GhiChu;
                    this.ChiTietKetQuaXetNghiems = ChiTietKetQuaXetNghiems;
                    this.TenCongTy = TenCongTy;
                }
                return DuyetKetQua;
            }());
            var ListDataChild = /** @class */ (function () {
                function ListDataChild(DuyetNhom, Ten, GiaTriCu, GiaTriTuMay, GiaTriNhapTay, GiaTriDuyet, ToDamGiaTri, Csbt, DonVi, ThoiDiemGuiYeuCau, ThoiDiemGuiYeuCauDisplay, ThoiDiemNhanKetQua, ThoiDiemNhanKetQuaDisplay, MayXetNghiemId, TenMayXetNghiem, ThoiDiemDuyetKetQua, ThoiDiemDuyetKetQuaDisplay, NguoiDuyet, LoaiMau, DichVuXetNghiemId, LoaiKetQuaTuMay, IdChilds, Id, Level, DanhSachLoaiMau, YeuCauChayLai, DaDuyet, Duyet, HighLightClass, DaGoiDuyet, IsParent, NgayYeuCauDisplay, LyDoYeuCau, NgayDuyetDisplay, NguoiYeuCau, NguoiDuyetChayLai, Nhom, NhomId) {
                    if (DuyetNhom === void 0) { DuyetNhom = false; }
                    if (Ten === void 0) { Ten = null; }
                    if (GiaTriCu === void 0) { GiaTriCu = null; }
                    if (GiaTriTuMay === void 0) { GiaTriTuMay = null; }
                    if (GiaTriNhapTay === void 0) { GiaTriNhapTay = null; }
                    if (GiaTriDuyet === void 0) { GiaTriDuyet = null; }
                    if (ToDamGiaTri === void 0) { ToDamGiaTri = null; }
                    if (Csbt === void 0) { Csbt = null; }
                    if (DonVi === void 0) { DonVi = null; }
                    if (ThoiDiemGuiYeuCau === void 0) { ThoiDiemGuiYeuCau = null; }
                    if (ThoiDiemGuiYeuCauDisplay === void 0) { ThoiDiemGuiYeuCauDisplay = null; }
                    if (ThoiDiemNhanKetQua === void 0) { ThoiDiemNhanKetQua = null; }
                    if (ThoiDiemNhanKetQuaDisplay === void 0) { ThoiDiemNhanKetQuaDisplay = null; }
                    if (MayXetNghiemId === void 0) { MayXetNghiemId = null; }
                    if (TenMayXetNghiem === void 0) { TenMayXetNghiem = null; }
                    if (ThoiDiemDuyetKetQua === void 0) { ThoiDiemDuyetKetQua = null; }
                    if (ThoiDiemDuyetKetQuaDisplay === void 0) { ThoiDiemDuyetKetQuaDisplay = null; }
                    if (NguoiDuyet === void 0) { NguoiDuyet = null; }
                    if (LoaiMau === void 0) { LoaiMau = null; }
                    if (DichVuXetNghiemId === void 0) { DichVuXetNghiemId = null; }
                    if (LoaiKetQuaTuMay === void 0) { LoaiKetQuaTuMay = null; }
                    if (IdChilds === void 0) { IdChilds = new Array(); }
                    if (Id === void 0) { Id = null; }
                    if (Level === void 0) { Level = null; }
                    if (DanhSachLoaiMau === void 0) { DanhSachLoaiMau = new Array(); }
                    if (YeuCauChayLai === void 0) { YeuCauChayLai = null; }
                    if (DaDuyet === void 0) { DaDuyet = null; }
                    if (Duyet === void 0) { Duyet = false; }
                    if (HighLightClass === void 0) { HighLightClass = null; }
                    if (DaGoiDuyet === void 0) { DaGoiDuyet = null; }
                    if (IsParent === void 0) { IsParent = null; }
                    if (NgayYeuCauDisplay === void 0) { NgayYeuCauDisplay = null; }
                    if (LyDoYeuCau === void 0) { LyDoYeuCau = null; }
                    if (NgayDuyetDisplay === void 0) { NgayDuyetDisplay = null; }
                    if (NguoiYeuCau === void 0) { NguoiYeuCau = null; }
                    if (NguoiDuyetChayLai === void 0) { NguoiDuyetChayLai = null; }
                    if (Nhom === void 0) { Nhom = null; }
                    if (NhomId === void 0) { NhomId = null; }
                    this.DuyetNhom = DuyetNhom;
                    this.Ten = Ten;
                    this.GiaTriCu = GiaTriCu;
                    this.GiaTriTuMay = GiaTriTuMay;
                    this.GiaTriNhapTay = GiaTriNhapTay;
                    this.GiaTriDuyet = GiaTriDuyet;
                    this.ToDamGiaTri = ToDamGiaTri;
                    this.Csbt = Csbt;
                    this.DonVi = DonVi;
                    this.ThoiDiemGuiYeuCau = ThoiDiemGuiYeuCau;
                    this.ThoiDiemGuiYeuCauDisplay = ThoiDiemGuiYeuCauDisplay;
                    this.ThoiDiemNhanKetQua = ThoiDiemNhanKetQua;
                    this.ThoiDiemNhanKetQuaDisplay = ThoiDiemNhanKetQuaDisplay;
                    this.MayXetNghiemId = MayXetNghiemId;
                    this.TenMayXetNghiem = TenMayXetNghiem;
                    this.ThoiDiemDuyetKetQua = ThoiDiemDuyetKetQua;
                    this.ThoiDiemDuyetKetQuaDisplay = ThoiDiemDuyetKetQuaDisplay;
                    this.NguoiDuyet = NguoiDuyet;
                    this.LoaiMau = LoaiMau;
                    this.DichVuXetNghiemId = DichVuXetNghiemId;
                    this.LoaiKetQuaTuMay = LoaiKetQuaTuMay;
                    this.IdChilds = IdChilds;
                    this.Id = Id;
                    this.Level = Level;
                    this.DanhSachLoaiMau = DanhSachLoaiMau;
                    this.YeuCauChayLai = YeuCauChayLai;
                    this.DaDuyet = DaDuyet;
                    this.Duyet = Duyet;
                    this.HighLightClass = HighLightClass;
                    this.DaGoiDuyet = DaGoiDuyet;
                    this.IsParent = IsParent;
                    this.NgayYeuCauDisplay = NgayYeuCauDisplay;
                    this.LyDoYeuCau = LyDoYeuCau;
                    this.NgayDuyetDisplay = NgayDuyetDisplay;
                    this.NguoiYeuCau = NguoiYeuCau;
                    this.NguoiDuyetChayLai = NguoiDuyetChayLai;
                    this.Nhom = Nhom;
                    this.NhomId = NhomId;
                }
                return ListDataChild;
            }());
            var NhomDichVuDuyet = /** @class */ (function () {
                function NhomDichVuDuyet(IsCheck, NhomDichVuBenhVienId, TenNhomDichVu) {
                    if (IsCheck === void 0) { IsCheck = true; }
                    if (NhomDichVuBenhVienId === void 0) { NhomDichVuBenhVienId = null; }
                    if (TenNhomDichVu === void 0) { TenNhomDichVu = null; }
                    this.IsCheck = IsCheck;
                    this.NhomDichVuBenhVienId = NhomDichVuBenhVienId;
                    this.TenNhomDichVu = TenNhomDichVu;
                }
                return NhomDichVuDuyet;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua.module.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua.module.ts ***!
          \*******************************************************************************/
        /*! exports provided: DuyetKetQuaXetNghiemModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetKetQuaXetNghiemModule", function () { return DuyetKetQuaXetNghiemModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var _duyet_ket_qua_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./duyet-ket-qua.service */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _duyet_ket_qua_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./duyet-ket-qua-routing.module */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-routing.module.ts");
            /* harmony import */ var _duyet_ket_qua_list_duyet_ket_qua_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./duyet-ket-qua-list/duyet-ket-qua-list.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-list/duyet-ket-qua-list.component.ts");
            /* harmony import */ var _duyet_ket_qua_popup_duyet_ket_qua_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./duyet-ket-qua-popup/duyet-ket-qua-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-popup/duyet-ket-qua-popup.component.ts");
            /* harmony import */ var _duyet_ket_qua_detailed_duyet_ket_qua_detailed_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./duyet-ket-qua-detailed/duyet-ket-qua-detailed.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-detailed/duyet-ket-qua-detailed.component.ts");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _duyet_ket_qua_phieu_popup_duyet_ket_qua_phieu_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./duyet-ket-qua-phieu-popup/duyet-ket-qua-phieu-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-phieu-popup/duyet-ket-qua-phieu-popup.component.ts");
            /* harmony import */ var _duyet_ket_qua_nhom_dv_list_popup_duyet_ket_qua_nhom_dv_list_popup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./duyet-ket-qua-nhom-dv-list-popup/duyet-ket-qua-nhom-dv-list-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-nhom-dv-list-popup/duyet-ket-qua-nhom-dv-list-popup.component.ts");
            /* harmony import */ var _duyet_ket_qua_in_nhom_dv_list_popup_duyet_ket_qua_in_nhom_dv_list_popup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./duyet-ket-qua-in-nhom-dv-list-popup/duyet-ket-qua-in-nhom-dv-list-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua-in-nhom-dv-list-popup/duyet-ket-qua-in-nhom-dv-list-popup.component.ts");
            var DuyetKetQuaXetNghiemModule = /** @class */ (function () {
                function DuyetKetQuaXetNghiemModule() {
                }
                return DuyetKetQuaXetNghiemModule;
            }());
            DuyetKetQuaXetNghiemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _duyet_ket_qua_list_duyet_ket_qua_list_component__WEBPACK_IMPORTED_MODULE_9__["DuyetKetQuaXetNghiemListComponent"],
                        _duyet_ket_qua_popup_duyet_ket_qua_popup_component__WEBPACK_IMPORTED_MODULE_10__["DuyetKetQuaXetNghiemPopupComponent"],
                        _duyet_ket_qua_detailed_duyet_ket_qua_detailed_component__WEBPACK_IMPORTED_MODULE_11__["DuyetKetQuaXetNghiemDetailedComponent"],
                        _duyet_ket_qua_phieu_popup_duyet_ket_qua_phieu_popup_component__WEBPACK_IMPORTED_MODULE_21__["DuyetKetQuaPhieuPopupComponent"],
                        _duyet_ket_qua_nhom_dv_list_popup_duyet_ket_qua_nhom_dv_list_popup_component__WEBPACK_IMPORTED_MODULE_22__["DuyetKetQuaNhomDvListPopupComponent"],
                        _duyet_ket_qua_in_nhom_dv_list_popup_duyet_ket_qua_in_nhom_dv_list_popup_component__WEBPACK_IMPORTED_MODULE_23__["DuyetKetQuaInNhomDvListPopupComponent"],
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_14__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_12__["BreadcrumbsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_16__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"],
                        _duyet_ket_qua_routing_module__WEBPACK_IMPORTED_MODULE_8__["DuyetKetQuaXetNghiemRoutingModule"]
                    ],
                    providers: [
                        _duyet_ket_qua_service__WEBPACK_IMPORTED_MODULE_5__["DuyetKetQuaXetNghiemService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"], useClass: _duyet_ket_qua_service__WEBPACK_IMPORTED_MODULE_5__["DuyetKetQuaXetNghiemService"] },
                    ],
                    entryComponents: [
                        _duyet_ket_qua_popup_duyet_ket_qua_popup_component__WEBPACK_IMPORTED_MODULE_10__["DuyetKetQuaXetNghiemPopupComponent"],
                        _duyet_ket_qua_phieu_popup_duyet_ket_qua_phieu_popup_component__WEBPACK_IMPORTED_MODULE_21__["DuyetKetQuaPhieuPopupComponent"],
                        _duyet_ket_qua_nhom_dv_list_popup_duyet_ket_qua_nhom_dv_list_popup_component__WEBPACK_IMPORTED_MODULE_22__["DuyetKetQuaNhomDvListPopupComponent"],
                        _duyet_ket_qua_in_nhom_dv_list_popup_duyet_ket_qua_in_nhom_dv_list_popup_component__WEBPACK_IMPORTED_MODULE_23__["DuyetKetQuaInNhomDvListPopupComponent"],
                    ]
                })
            ], DuyetKetQuaXetNghiemModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua.service.ts": 
        /*!********************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua.service.ts ***!
          \********************************************************************************/
        /*! exports provided: DuyetKetQuaXetNghiemService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetKetQuaXetNghiemService", function () { return DuyetKetQuaXetNghiemService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var DuyetKetQuaXetNghiemService = /** @class */ (function (_super) {
                __extends(DuyetKetQuaXetNghiemService, _super);
                function DuyetKetQuaXetNghiemService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'DuyetKetQuaXetNghiem';
                    return _this;
                }
                return DuyetKetQuaXetNghiemService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            DuyetKetQuaXetNghiemService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            DuyetKetQuaXetNghiemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], DuyetKetQuaXetNghiemService);
            /***/ 
        })
    }]);
//# sourceMappingURL=default~phau-thuat-thu-thuat-lich-su-phau-thuat-thu-thuat-lich-su-phau-thuat-thu-thuat-module~phau-t~569dd880-es2015.js.map
//# sourceMappingURL=default~phau-thuat-thu-thuat-lich-su-phau-thuat-thu-thuat-lich-su-phau-thuat-thu-thuat-module~phau-t~569dd880-es5.js.map
//# sourceMappingURL=default~phau-thuat-thu-thuat-lich-su-phau-thuat-thu-thuat-lich-su-phau-thuat-thu-thuat-module~phau-t~569dd880-es5.js.map