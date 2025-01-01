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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["xet-nghiem-duyet-ket-qua-new-duyet-ket-qua-new-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/chon-loai-ket-qua-xet-nghiem-new-popup/chon-loai-ket-qua-xet-nghiem-new-popup.component.html": 
        /*!**********************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/chon-loai-ket-qua-xet-nghiem-new-popup/chon-loai-ket-qua-xet-nghiem-new-popup.component.html ***!
          \**********************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-1\">\n    <div>IN KẾT QUẢ XÉT NGHIỆM</div>\n    <button type=\"button\" mat-icon-button (click)=\"close('No')\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content\n[ngStyle]=\"{'height':luaChon == 1 || luaChon == 2? '150px': '500px'}\"\n >\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <app-radio id=\"chon-loai-dv\" name=\"select\" class=\"no-format-css pl-4 temp\" [(model)]=\"luaChon\" (modelChange)=\"changeLuaChon($event)\"\n            [items]=\"[{Value:1,Text:'Tất cả'},{Value:2,Text:'Theo nhóm'},{Value:3,Text:'Theo dịch vụ'}]\">\n        </app-radio>\n        <span fxFlex=\"100%\" fxFlex.sm=\"100%\" [style.display]=\"luaChon== 2 ? 'block':'none'\">\n            <app-grid #gridTheoNhom [gridColumns]=\"gridColumnsNhom\" [gridDataSource]=\"gridDataSource\"\n                 [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"  (extCheckboxSelection)=\"extCheckboxSelection($event)\" [triggerSelectAll]=\"true\"\n                [useActionDefault]=\"false\" [checkboxAble]=\"true\" [autoHeight]=\"true\" [pageable]=\"false\"  \n                >\n            </app-grid>\n        </span>\n        <span fxFlex=\"100%\" fxFlex.sm=\"100%\" [style.display]=\"luaChon == 3 ? 'block':'none'\">\n            <app-grid #gridTheoDichVu [gridColumns]=\"gridColumnsDichVu\" [gridDataSource]=\"gridDataSource\" [autoRefreshDataSource]=\"true\"\n                 [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" (extCheckboxSelection)=\"extCheckboxSelection($event)\" [triggerSelectAll]=\"true\"\n                [useActionDefault]=\"false\" [checkboxAble]=\"true\" [autoHeight]=\"true\" [pageable]=\"true\" [groups]=\"groups\" [headerTemplate]=\"headerTemplate\">\n            </app-grid>\n        </span>\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                    fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                    <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                        type=\"search\" name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"onKey($event)\"\n                        (ngModelChange)=\"searchChanges()\"\n                        placeholder=\"Nhập từ khóa...\" />\n                </div>\n            </div>\n        </ng-template>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\" style=\"padding-bottom: 15px;\">\n    <button tabindex=\"-1\" type=\"button\" (click)=\"close('Yes')\" mat-raised-button mat-button color=\"primary\"\n        class=\"md-primary\">In</button>\n</mat-dialog-actions>\n<ng-template #nhomTemplate let-value=\"value\" let-dataItem>\n    {{value}}\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/dich-vu-can-cap-nhat-popup/dich-vu-can-cap-nhat-popup.component.html": 
        /*!**********************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/dich-vu-can-cap-nhat-popup/dich-vu-can-cap-nhat-popup.component.html ***!
          \**********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>{{title}}</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"overflow-y: hidden;\">\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <app-grid masterName=\"ketQuaXetNghiemUpdate\" [documentType]=\"documentType\" [useHeaderDefault]=\"false\"\n            [useAddDeault]=\"false\" [useAddDeault]=\"false\" [useActionDefault]=\"false\" #gridDichVu [checkboxAble]=\"false\"\n            [gridColumns]=\"gridColumns\" [gridDataSource]=\"gridDataSource\" [groups]=\"groups\" [pageable]=\"false\"\n            maxHeight=\"500\">\n        </app-grid>\n    </div>\n\n    <ng-template #tenTemplate let-dataItem>\n        <span\n            [ngStyle]=\"{'padding-left':(dataItem.Level)*20+'px','font-weight':dataItem.IdChilds.length>0?'bold':'normal'}\"\n            kendoTooltip title=\"{{dataItem.Ten}}\">{{dataItem.Ten}}</span>\n        <div *ngIf=\"dataItem.LaDichVuSarCovid2\">\n            <app-combobox id=\"LoaiKitThu\" fxFlex=\"auto\" fxFlex.sm=\"32%\" label=\"Loại kít thử\" [popupSettings]=\"null\"\n                url=\"DuyetKetQuaXetNghiem/DichVuTestSarsCovids\" [(model)]=\"dataItem.LoaiKitThuId\"\n                [modelText]=\"dataItem.LoaiKitThu\">\n            </app-combobox>\n        </div>\n    </ng-template>\n\n    <ng-template #kqDuyetTemplate let-dataItem>\n        <app-textbox class=\"no-label\" id=\"GiaTriDuyetA{{dataItem.Id}}\" label=\" \" maxlength=\"100\"\n            *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\"\n            [(model)]=\"dataItem.GiaTriDuyet\">\n        </app-textbox>\n    </ng-template>\n    <ng-template #damKQTemplate let-dataItem>\n        <app-checkbox label=\" \" [(model)]=\"dataItem.ToDamGiaTri\"\n            *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\" class=\"pl-2\">\n        </app-checkbox>\n    </ng-template>\n\n    <ng-template #nhomTemplate let-value=\"value\" let-dataItem>\n        <strong>{{value}}</strong>\n    </ng-template>\n\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <button tabindex=\"-1\" type=\"button\" mat-stroked-button color=\"primary\" mat-dialog-close>Hủy</button>\n    <button tabindex=\"-1\" type=\"button\" (click)=\"luu()\" mat-stroked-button color=\"primary\" class=\"md-primary\">Cập\n        nhật</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-in-nhom-dv-list-new-popup/duyet-ket-qua-in-nhom-dv-list-new-popup.component.html": 
        /*!************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-in-nhom-dv-list-new-popup/duyet-ket-qua-in-nhom-dv-list-new-popup.component.html ***!
          \************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-0\">\n    <div>PHIẾU KẾT QUẢ XÉT NGHIỆM</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\"><iframe width=\"100%\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <div style=\"float: right; padding-top: 10px;\">\n        <button tabindex=\"-1\" type=\"button\" (click)=\"print()\" mat-raised-button mat-button color=\"primary\"\n            class=\"md-primary mr-1 mt-2\">Tải kết quả về</button>\n    </div>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-detailed/duyet-ket-qua-new-detailed.component.html": 
        /*!**********************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-detailed/duyet-ket-qua-new-detailed.component.html ***!
          \**********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n{Title:'Xét Nghiệm',Path:''},\n{Title:'DS Duyệt Kết Quả', Path:'/xet-nghiem/duyet-ket-qua-new', queryParams: {holdQuery : true}, Active: true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"10px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 border-b order-btn\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                style=\"padding-top: 0.5rem;\">\n                <h2 class=\"title m-0\">Chi tiết duyệt kết quả xét nghiệm</h2>\n                <div class=\"bg-app-bar px-3 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchStringBarCode\" [(ngModel)]=\"search.SearchStringBarCode\"\n                            (keyup)=\"onKey($event)\" maxlength=\"10\" (ngModelChange)=\"searchChangesNangCao($event)\"\n                            placeholder=\"Nhập barcode...\" />\n                        <button (click)=\"QuetMaQRCodeClick()\" color=\"primary\" mat-mini-fab type=\"button\" kendoTooltip\n                            title=\"Quét mã vạch thẻ\" class=\"button-barcoe-in-search\">\n                            <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                        </button>\n                    </div>\n\n                    <app-datetimepicker fxFlex=\"245px\" [(model)]=\"search.ThoiDiemGoiDuyetTuFormat\" #tiepnhantu\n                        id=\"ThoiDiemGoiDuyetTuFormat\" label=\"Từ ngày\" class=\"ml-2 on-header\" (keyup)=\"onKey($event)\">\n                    </app-datetimepicker>\n\n                    <app-datetimepicker fxFlex=\"245px\" [(model)]=\"search.ThoiDiemGoiDuyetDenFormat\" #tiepnhanden\n                        id=\"ThoiDiemGoiDuyetDenFormat\" label=\"Đến ngày\" class=\"ml-2 on-header\" (keyup)=\"onKey($event)\">\n                    </app-datetimepicker>\n                </div>\n                <b *ngIf=\"duyetKqXetNghiemDetail.TrangThai == true\"\n                    style=\"color:orange;\">{{duyetKqXetNghiemDetail.TrangThaiDisplay}}</b>\n                <b *ngIf=\"duyetKqXetNghiemDetail.TrangThai == false\"\n                    style=\"color:blue;\">{{duyetKqXetNghiemDetail.TrangThaiDisplay}}</b>\n                <b *ngIf=\"duyetKqXetNghiemDetail.TrangThai == null\"\n                    style=\"color:green;\">{{duyetKqXetNghiemDetail.TrangThaiDisplay}}</b>\n            </div>\n\n\n            <div class=\"px-6\" fxLayout=\"column\" style=\"padding-top: 0.5rem;\">\n                <div class=\"row mb-2\">\n                    <!-- style=\"background: #e1f5fe;\"  -->\n                    <fieldset class=\"{{(duyetKqXetNghiemDetail != null && duyetKqXetNghiemDetail.LaCapCuu == true) ? 'bg-tthc-lightpink' : 'bg-tthc-lightblue'}}\">\n                        <legend>Thông tin hành chính</legend>\n                        <div fxFlex=\"100%\">\n                            <ul class=\"inline\">\n                                <li>Barcode:\n                                    <strong>{{duyetKqXetNghiemDetail.BarCodeID}}</strong>\n                                </li>\n                                <li>Mã NB:\n                                    <strong>{{duyetKqXetNghiemDetail.MaBN}}</strong>\n                                </li>\n                                <li>Mã TN:\n                                    <strong>{{duyetKqXetNghiemDetail.MaYeuCauTiepNhan}}</strong>\n                                </li>\n                                <li>Họ tên:\n                                    <strong>{{duyetKqXetNghiemDetail.HoTen}}</strong>\n                                </li>\n                                <li>Năm sinh:\n                                    <strong>{{duyetKqXetNghiemDetail.NamSinhDisplay}}</strong>\n                                </li>\n                                <li>\n                                    Giới tính:\n                                    <strong>{{duyetKqXetNghiemDetail.GioiTinhDisplay}}</strong>\n                                </li>\n                                <li>Số thẻ BHYT:\n                                    <strong>{{duyetKqXetNghiemDetail.MaSoBHYT}}</strong>\n                                </li>\n                                <li>\n                                    Đối tượng: <strong style=\"color: blue;\">{{duyetKqXetNghiemDetail.DoiTuong}}</strong>\n                                </li>\n                                <li>\n                                    Địa chỉ:\n                                    <strong>{{duyetKqXetNghiemDetail.DiaChi}}</strong>\n                                </li>\n                                <li>\n                                    Chẩn đoán: <strong>{{duyetKqXetNghiemDetail.ChanDoan}}</strong>\n                                </li>\n                                <li>\n                                    Khoa chỉ định: <strong>{{duyetKqXetNghiemDetail.KhoaChiDinh}}</strong>\n                                </li>\n                                <li>\n                                    Phòng: <strong>{{duyetKqXetNghiemDetail.Phong}}</strong>\n                                </li>\n                                <li>\n                                    SĐT: <strong>{{duyetKqXetNghiemDetail.SoDienThoai}}</strong>\n                                </li>\n                            </ul>\n                        </div>\n                    </fieldset>\n                    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"10px grid\" fxLayoutGap.lt-sm=\"0\"\n                        style=\"padding-top: 10px;\">\n                        <div fxFlex=\"60%\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"10px grid\" fxLayoutGap.lt-sm=\"0\">\n                            <app-combobox id=\"nguoi-thuc-hien\" fxFlex=\"30%\" fxFlex.sm=\"50%\" label=\"Người Thực Hiện\"\n                                [required]=\"true\" [(model)]=\"duyetKqXetNghiemDetail.NguoiThucHienId\"\n                                url=\"NhanVien/GetListLookupNhanVien\" class=\"item-no-padding\"\n                                [modelText]=\"duyetKqXetNghiemDetail.NguoiThucHien\">\n                            </app-combobox>\n\n                            <app-textbox id=\"ghi-chu\" [disabled]=\"duyetKqXetNghiemDetail.TrangThai == null\" fxFlex=\"70%\"\n                                fxFlex.sm=\"50%\" maxlength=\"1000\" [(model)]=\"duyetKqXetNghiemDetail.GhiChu\"\n                                label=\"Ghi Chú\">\n                            </app-textbox>\n                        </div>\n                        <div fxFlex=\"auto\" fxLayoutAlign=\"end center\">\n                            <button type=\"button\" class=\"mr-1\" style=\"float: right;\" color=\"primary\" mat-raised-button\n                                (click)=\"xuLyDuyet()\">\n                                Duyệt</button>\n                            <button type=\"button\" class=\"mr-1\" style=\"float: right;\" color=\"primary\" mat-raised-button\n                                (click)=\"xuLyDuyetVaIn()\">\n                                Duyệt Và In</button>\n                            <!-- <button *ngIf=\"coDichVuDuocDuyet\" type=\"button\" class=\"mr-1\" color=\"primary\"\n                                style=\"float: right;\" mat-raised-button mat-button (click)=\"Print()\">\n                                In Kết Quả\n                            </button> -->\n                            <button type=\"button\" class=\"mr-1\" style=\"float: right;\" color=\"primary\" mat-raised-button\n                                (click)=\"capNhat()\">\n                                Cập nhật</button>\n                            <!-- *ngIf=\"duyetKqXetNghiemDetail.TrangThai != null\" -->\n                        </div>\n                    </div>\n\n\n                    <fieldset class=\"mt-2 set-col\">\n                        <legend>Chi tiết kết quả xét nghiệm</legend>\n                        <div *ngIf=\"gridDataSource != undefined\">\n                            <app-grid masterName=\"ketQuaXetNghiem\" [sort]=\"sort\" [documentType]=\"documentType\"\n                                [useHeaderDefault]=\"false\" [useAddDeault]=\"false\" [useAddDeault]=\"false\"\n                                [useActionDefault]=\"false\" #gridChiTietDuyetKetQuaXn [checkboxAble]=\"false\"\n                                [gridColumns]=\"gridColumns\" [gridDataSource]=\"gridDataSource\" [groups]=\"groups\"\n                                [pageable]=\"false\" [headerTemplate]=\"headerTemplate\" heightToolbar=\"425\"\n                                (extOnKeydownGrid)=\"onKeydownGrid($event)\">\n                            </app-grid>\n\n                            <ng-template #headerTemplate>\n                                <div style=\"margin-top: 5px;width: 99%; justify-content: space-between;\"\n                                    class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex.lt-md=\"auto\" fxHide.xs\n                                    fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <div fxFlex=\"50%\" class=\"order-search\">\n                                        <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                                        <input fxFlex=\"40%\" [formControl]=\"searchCtrl\"\n                                            class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\"\n                                            name=\"searchString\" [(ngModel)]=\"search.SearchString\"\n                                            (ngModelChange)=\"searchChanges($event)\" (keyup)=\"onKey($event)\"\n                                            placeholder=\"Nhập từ khóa...\" />\n                                    </div>\n                                    <div fxFlex=\"50%\" class=\"order-color\">\n                                        <div class=\"set-color bluelight\"></div>\n                                        <p>DV chưa duyệt</p>\n                                        <div class=\"set-color black\"></div>\n                                        <p>Bình thường</p>\n                                        <div class=\"set-color blue\"></div>\n                                        <p>Bất thường</p>\n                                        <div class=\"set-color red\"></div>\n                                        <p>Nguy hiểm</p>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </div>\n\n                    </fieldset>\n\n                    <!-- <div class=\"form-footer\">\n                        <button type=\"button\" mat-button class=\"mr-1\" (click)=\"quayLai()\"><i class=\"ft-arrow-left\"></i>\n                            Quay lại</button>\n\n                    </div> -->\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #nhomTemplate let-value=\"value\" let-dataItem>\n    <div style=\"width: 100%;position: absolute;margin-left: 20px;\" kendoTooltip>\n        <strong style=\"width: 100%;\">\n            <app-checkbox id=\"check_{{dataItem.items[0].NhomDichVuBenhVienId}}\" label=\"{{value}}\" fxFlex=\"10%\"\n                (modelChange)=\"checkBoxNhomChange($event,dataItem)\" [(model)]=\"dataItem.items[0].CheckBoxParent\">\n            </app-checkbox>\n            <ul class='inline small ml-20'>\n                <li *ngFor=\"let item of dataItem.items[0].DanhSachLoaiMau\">\n                    <span *ngIf=\"checkHiddenIcon(item, dataItem.items[0].DanhSachLoaiMauDaCoKetQua)\">\n                        <span *ngIf=\"!isMauKhongDat(item, dataItem.items[0].DanhSachLoaiMauKhongDat)\">\n                            <span class='green'>&#10003;</span> {{item}}\n                        </span>\n                        <span *ngIf=\"isMauKhongDat(item, dataItem.items[0].DanhSachLoaiMauKhongDat)\">\n                            <span class='red'>&times; </span> {{item}}\n                        </span>\n                    </span>\n\n                    <span *ngIf=\"!checkHiddenIcon(item, dataItem.items[0].DanhSachLoaiMauDaCoKetQua)\">\n                        <span class='red'></span> {{item}}\n                    </span>\n                </li>\n            </ul>\n\n            <a class='float-right' *ngIf=\"dataItem.items[0].YeuCauChayLai == true\n            && dataItem.items[0].DaDuyet == true && duyetKqXetNghiemDetail.TrangThai != null\" #tooltip=\"kendoTooltip\"\n                tooltipClass=\"tooltip-block\" position=\"top\" [tooltipTemplate]=\"templateInfo\" filter=\"*\"\n                (mouseover)=\"setUpDataTooltip(dataItem)\" kendoTooltip>Yêu\n                cầu chạy lại XN</a>\n\n            <ng-template #templateInfo let-dataItem>\n                <div>\n                    <span>Người yêu cầu: </span><span>{{displayToolTipGridNguoiYeuCau}}</span>\n                </div>\n                <div>\n                    <span>Ngày yêu cầu: </span><span>{{displayToolTipGridNgayYeuCau}}</span>\n                </div>\n                <div>\n                    <span>Lý do yêu cầu: </span><span>{{displayToolTipGridLyDoYeuCau}}</span>\n                </div>\n                <div>\n                    <span>Người duyệt: </span><span>{{displayToolTipGridNguoiDuyet}}</span>\n                </div>\n                <div>\n                    <span>Ngày duyệt: </span><span>{{displayToolTipGridNgayDuyet}}</span>\n                </div>\n            </ng-template>\n        </strong>\n    </div>\n</ng-template>\n\n<ng-template #tenTemplate let-dataItem>\n    <span [ngStyle]=\"{'padding-left':(dataItem.Level)*20+'px','font-weight':dataItem.IdChilds.length>0?'bold':'normal'}\"\n        kendoTooltip title=\"{{dataItem.Ten}}\">{{dataItem.Ten}}</span>\n    <div *ngIf=\"dataItem.LaDichVuSarCovid2 && dataItem.CheckBox\">\n        <app-combobox id=\"LoaiKitThu\" fxFlex=\"auto\" fxFlex.sm=\"32%\" label=\"Loại kít thử\" [popupSettings]=\"null\"\n            url=\"DuyetKetQuaXetNghiem/DichVuTestSarsCovids\" [(model)]=\"dataItem.LoaiKitThuId\"\n            [modelText]=\"dataItem.LoaiKitThu\">\n        </app-combobox>\n    </div>\n</ng-template>\n\n<ng-template #kqCuTemplate let-dataItem>\n    <div *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\"\n        [ngStyle]=\"{'background-color':dataItem.GiaTriCu !=null && dataItem.GiaTriCu !='' ? 'deepskyblue' : ''}\"\n        kendoTooltip #tooltip=\"kendoTooltip\" position=\"left\" filter=\"*\"\n        [tooltipTemplate]=\"(dataItem.GiaTriCu != null && dataItem.GiaTriCu != '') ? templateInfoNgayDuyet : ''\"\n        (mouseover)=\"TooltipCustomNgayDuyet(dataItem)\">\n        {{dataItem.GiaTriCu}}</div>\n</ng-template>\n\n<ng-template #templateInfoNgayDuyet let-dataItem>\n    <span class=\"tooltiptext\">\n        {{ngayDuyet}}\n    </span>\n</ng-template>\n\n<ng-template #kqTuMayTemplate let-dataItem>\n    <span *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\"\n        [ngStyle]=\"{'color':dataItem.LoaiKetQuaTuMay == 1 ? 'black' : (dataItem.LoaiKetQuaTuMay == 2 ? 'blue' : 'red')}\">{{dataItem.GiaTriTuMay}}</span>\n</ng-template>\n\n<ng-template #kqNhapTayTemplate let-dataItem kendoTooltip>\n    <span kendoTooltip #tooltip=\"kendoTooltip\" position=\"left\"\n        [tooltipTemplate]=\"(dataItem.GiaTriNhapTay != null && dataItem.GiaTriNhapTay != '') ? templateInfo: ''\"\n        filter=\"*\" (mouseover)=\"TooltipCustom(dataItem.GiaTriNhapTay)\"\n        *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\"\n        [ngStyle]=\"{'color':dataItem.LoaiKetQuaNhapTay == 1 ? 'black' : (dataItem.LoaiKetQuaNhapTay == 2 ? 'blue' : 'red')}\">{{dataItem.GiaTriNhapTay}}</span>\n</ng-template>\n\n<ng-template #templateInfo let-dataItem>\n    <span class=\"tooltiptext\">\n        {{kqNhapTay}}\n    </span>\n</ng-template>\n\n<ng-template #kqDuyetTemplate let-dataItem kendoTooltip let-rowIndex=\"rowIndex\">\n    <app-textbox id=\"GiaTriDuyet-{{dataItem.Id}}\"\n        *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0) || dataItem.Duyet || duyetKqXetNghiemDetail.TrangThai == null || dataItem.DaGoiDuyet != true\"\n        kendoTooltip #tooltip=\"kendoTooltip\" position=\"left\"\n        [tooltipTemplate]=\"(dataItem.GiaTriDuyet != null && dataItem.GiaTriDuyet != '') ? templateInfoKQDuyet: ''\"\n        filter=\"*\" (mouseover)=\"TooltipCustomKQD(dataItem.GiaTriDuyet)\" [disabled]=\"dataItem.DaDuyet\" class=\"no-label\"\n        label=\" \" maxlength=\"500\" [(model)]=\"dataItem.GiaTriDuyet\">\n    </app-textbox>\n\n\n\n\n    <!-- <p class=\"ml-1\" *ngIf=\"dataItem.Duyet\">{{dataItem.GiaTriDuyet}}</p> -->\n</ng-template>\n\n<ng-template #templateInfoKQDuyet let-dataItem>\n    <span class=\"tooltiptext\">\n        {{kqDuyet}}\n    </span>\n</ng-template>\n\n<!-- (modelChange)=\"CheckHighlight(dataItem, $event)\" -->\n<ng-template #damKQTemplate let-dataItem>\n\n    <app-checkbox *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\"\n        [disabled]=\"dataItem.DaDuyet\" id=\"damKetQua-{{dataItem.Id}}\" label=\" \" [(model)]=\"dataItem.ToDamGiaTri\"\n        class=\"pl-2\"></app-checkbox>\n</ng-template>\n<ng-template #chiSoBinhThuongTemplate let-dataItem>\n    <span *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\">{{dataItem.Csbt}}</span>\n</ng-template>\n<ng-template #donViTinhTemplate let-dataItem>\n    <span *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\">{{dataItem.DonVi}}</span>\n</ng-template>\n<ng-template #gioTiepNhanTemplate let-dataItem>\n    <span\n        *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\">{{dataItem.ThoiDiemGuiYeuCauDisplay}}</span>\n</ng-template>\n<ng-template #gioNhanMauTemplate let-dataItem>\n    <span\n        *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\">{{dataItem.ThoiDiemNhanKetQuaDisplay}}</span>\n</ng-template>\n<ng-template #mayXNTemplate let-dataItem>\n    <!-- <div *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\">\n        <span>\n            {{dataItem.TenMayXetNghiem}}\n        </span>\n    </div> -->\n    <span>\n        {{dataItem.TenMayXetNghiem}}\n    </span>\n</ng-template>\n<ng-template #nguoiDuyetTemplate let-dataItem>\n    <span *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\">{{dataItem.NguoiDuyet}}</span>\n</ng-template>\n<ng-template #ngayDuyetTemplate let-dataItem>\n    <span\n        *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\">{{dataItem.ThoiDiemDuyetKetQuaDisplay}}</span>\n</ng-template>\n\n<!-- DUYỆT -->\n\n<ng-template #duyetHeaderColumnTemplate let-value=\"value\" let-dataItem>\n    <app-checkbox class=\"pl-2\" label=\" \" [(model)]=\"dataItem.items[0].DuyetNhom\" id=\"duyet{{processId(dataItem)}}\">\n    </app-checkbox>\n    <!-- (modelChange)=\"ApproveOnGroup($event, dataItem)\" -->\n</ng-template>\n\n<ng-template #duyetTemplate let-dataItem>\n    <app-checkbox value=\"true\" [(model)]=\"dataItem.CheckBox\" (modelChange)=\"checkBoxDichVu(dataItem, $event)\" label=\" \"\n        class=\"pl-2\">\n    </app-checkbox>\n    <!-- (modelChange)=\"Approve(dataItem, $event)\" -->\n</ng-template>\n\n<ng-template #checkBoxHeaderTemplate let-dataItem>\n    <input type=\"checkbox\" id=\"vehicle1\" (ngModelChange)=\"checkBoxAllChange($event)\" name=\"vehicle1\"\n        [(ngModel)]=\"checkAll\">\n</ng-template>\n\n<app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\" style=\"display: none;\"></app-barcode>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-list/duyet-ket-qua-new-list.component.html": 
        /*!**************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-list/duyet-ket-qua-new-list.component.html ***!
          \**************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n        {Title:'Xét Nghiệm',Path:''},\n        {Title:'DS Duyệt Kết Quả', Path:'/xet-nghiem/duyet-ket-qua-new', queryParams: {holdQuery : true}, Active: true}\n        ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid #gridParent baseRoute=\"xet-nghiem/duyet-ket-qua-new\" [sort]=\"sort\" [gridColumns]=\"gridColumns\"\n                [lazyLoadPage]=\"true\" [documentType]=\"documentType\" [useAddDeault]=\"false\" [checkboxAble]=\"false\"\n                [useHeaderDefault]=\"false\" [additionalSearchString]=\"addtionStringDefault\"\n                [searchString]=\"search.SearchString\" [headerTemplate]=\"headerTemplate\" [showStt]=\"true\"\n                [useActionDefault]=\"false\" [detailTemplate]=\"detailTemplate\">\n            </app-grid>\n\n            <ng-template #detailTemplate let-dataItem>\n                <app-grid baseRoute=\"xet-nghiem/duyet-ket-qua-new\" [groups]=\"groups\" #gridDetail\n                    [gridColumns]=\"gridColumnChilds\" pageSize=\"5\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    [sort]=\"sortChild\" [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [urlGetData]=\"urlGetDataGridChild\" [showStt]=\"true\"\n                    [urlGetTotalPage]=\"urlGetTotalPageGridChild\" [additionalSearchString]=\"dataItem.Id\"\n                    [autoHeight]=\"true\">\n                </app-grid>\n            </ng-template>\n\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <app-checkbox (modelChange)=\"CheckboxChange($event, 'choduyet')\" id=\"cho-duyet\"\n                        [(model)]=\"search.ChoDuyet\" class=\"ml-2\" label=\"Chờ duyệt\">\n                    </app-checkbox>\n\n                    <app-checkbox (modelChange)=\"CheckboxChange($event,'dangthuchien')\" id=\"DangThucHien\"\n                        [(model)]=\"search.DangThucHien\" class=\"ml-2\" label=\"Đang thực hiện\">\n                    </app-checkbox>\n\n                    <app-checkbox (modelChange)=\"CheckboxChange($event, 'daduyet')\" id=\"da-duyet\"\n                        [(model)]=\"search.DaDuyet\" class=\"ml-2\" label=\"Đã duyệt\">\n                    </app-checkbox>\n\n\n\n                    <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                        fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"search.SearchString\" (keyup)=\"onKey($event)\"\n                            (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n                        <button color=\"primary\" mat-mini-fab type=\"button\" class=\"button-barcoe-in-search\" kendoTooltip\n                            title=\"Phím tắt: Ctrl + Q\" (click)=\"QuetMaQRCodeClick()\">\n                            <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                        </button>\n                    </div>\n\n                    <app-datetimepicker fxFlex=\"245px\" [(model)]=\"search.ThoiDiemGoiDuyetTuFormat\" #tiepnhantu\n                        style=\"margin-left: 20px;\" id=\"ThoiDiemGoiDuyetTuFormat\"\n                        label=\"Từ ngày\" class=\"ml-2 on-header\" (keyup)=\"onKey($event)\">\n                    </app-datetimepicker>\n\n                    <app-datetimepicker fxFlex=\"245px\" [(model)]=\"search.ThoiDiemGoiDuyetDenFormat\" #tiepnhanden\n                        id=\"ThoiDiemGoiDuyetDenFormat\" label=\"Đến ngày\" class=\"ml-2 on-header\"\n                        (keyup)=\"onKey($event)\">\n                    </app-datetimepicker>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1\"\n                     style=\"margin-left: 5px;\" (click)=\"Timkiem()\">Tìm kiếm</button>\n                    <!-- <app-daterangepicker style=\"margin-left: 25px;\" id=\"RangeNhap\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n                        [(model)]=\"search.RangeThucHien\" label=\"Thực hiện từ ngày - đến ngày\"\n                        (modelChange)=\"changeNgay()\" class=\"mt-1 on-header\">\n                    </app-daterangepicker> -->\n\n                    <!-- <app-daterangepicker style=\"margin-left: 5px;\" id=\"RangeDuyet\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n                        [(model)]=\"search.RangeDuyet\" label=\"Duyệt từ ngày - đến ngày\" (modelChange)=\"changeNgay()\"\n                        class=\"mt-1 on-header\">\n                    </app-daterangepicker> -->\n\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n                        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                    </button>\n\n                    <span fxFlex></span>\n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button\n                        kendoTooltip title=\"Lọc cột\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                    </button>\n\n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of gridColumns\">\n                            <button *ngIf=\"!column.HideFilter\"\n                                class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                    {{ column.Title }}\n                                </mat-checkbox>\n                            </button>\n                        </div>\n                    </mat-menu>\n                    <button (click)=\"exportExcel()\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button kendoTooltip\n                        title=\"Xuất Excel\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                    </button>\n                </div>\n            </ng-template>\n\n        </div>\n    </vex-page-layout-content>\n\n</vex-page-layout>\n\n<app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\" style=\"display: none;\">\n</app-barcode>\n\n<ng-template #barcodeTemplate let-dataItem>\n    <a (click)=\"xemChiTiet(dataItem.Id)\">\n        {{dataItem.Barcode}}</a>\n</ng-template>\n\n<ng-template #soLuongTemplate let-dataItem>\n    {{dataItem.SoLuongTra | number:'1.0':'vi-VN' }}\n</ng-template>\n\n<ng-template #giaTemplate let-dataItem>\n    {{dataItem.DonGiaNhap | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n<ng-template #tinhTrangTemplate let-dataItem>\n    <span\n        [ngStyle]=\"{'color': (dataItem.TrangThai == 1 ? 'red' : (dataItem.TrangThai == 2 ? 'orange' : (dataItem.TrangThai == 3 ? 'blue' : 'green') ) )}\">\n        {{dataItem.TrangThaiDisplay}}\n    </span>\n</ng-template>\n\n<ng-template #gioiTinhTemplate let-dataItem>\n    {{dataItem.GioiTinhDisplay}}\n</ng-template>\n\n<ng-template #ngayThucHienTemplate let-dataItem>\n    {{dataItem.NgayThucHienDisplay}}\n</ng-template>\n\n<ng-template #ngayDuyetKqTemplate let-dataItem>\n    {{dataItem.NgayDuyetKqDisplay}}\n</ng-template>\n\n<ng-template #trangThaiTemplate let-dataItem>\n    <span\n        [ngStyle]=\"{'color': (dataItem.TrangThai == 1 ? 'red' : (dataItem.TrangThai == 2 ? 'orange' : (dataItem.TrangThai == 3 ? 'blue' : 'green') ) )}\">\n        {{dataItem.TrangThaiDisplay}}\n    </span>\n</ng-template>\n\n<ng-template #actionTemplate let-dataItem>\n    <button *ngIf=\"dataItem.TrangThai == null\" (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\"\n        [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n        <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n    </button>\n    <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n        <ng-template let-customer=\"customer\" matMenuContent>\n            <button (click)=\"nhomDichVuCanIn(dataItem.Id,dataItem.YeuCauTiepNhanId)\" mat-menu-item>\n                <span>Xem Kết Quả</span>\n            </button>\n        </ng-template>\n    </mat-menu>\n</ng-template>\n\n<ng-template #nhomXetNghiemTemplate let-value=\"value\" let-dataItem>\n    <strong style=\"width: 100%;\">\n        {{value}}\n        <ul class='inline small ml-20'>\n            <li *ngFor=\"let item of dataItem.items[0].DanhSachLoaiMau\">\n                <span *ngIf=\"checkHiddenIcon(item, dataItem.items[0].DanhSachLoaiMauDaCoKetQua)\">\n                    <span *ngIf=\"!isMauKhongDat(item, dataItem.items[0].DanhSachLoaiMauKhongDat)\">\n                        <span class='green'>&#10003;</span> {{item}}\n                    </span>\n                    <span *ngIf=\"isMauKhongDat(item, dataItem.items[0].DanhSachLoaiMauKhongDat)\">\n                        <span class='red'>&times; </span> {{item}}\n                    </span>\n                </span>\n\n                <span *ngIf=\"!checkHiddenIcon(item, dataItem.items[0].DanhSachLoaiMauDaCoKetQua)\">\n                    <span class='red'></span> {{item}}\n                </span>\n            </li>\n        </ul>\n\n        <a class='float-right' *ngIf=\"dataItem.items[0].YeuCauChayLai == true\n            && dataItem.items[0].DaDuyet == true\" #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\" position=\"top\"\n            [tooltipTemplate]=\"templateInfo\" filter=\"*\" (mouseover)=\"setUpDataTooltip(dataItem)\" kendoTooltip>Yêu cầu\n            chạy lại XN</a>\n\n        <ng-template #templateInfo let-dataItem>\n            <div>\n                <span>Người yêu cầu: </span><span>{{displayToolTipGridNguoiYeuCau}}</span>\n            </div>\n            <div>\n                <span>Ngày yêu cầu: </span><span>{{displayToolTipGridNgayYeuCau}}</span>\n            </div>\n            <div>\n                <span>Lý do yêu cầu: </span><span>{{displayToolTipGridLyDoYeuCau}}</span>\n            </div>\n            <div>\n                <span>Người duyệt: </span><span>{{displayToolTipGridNguoiDuyet}}</span>\n            </div>\n            <div>\n                <span>Ngày duyệt: </span><span>{{displayToolTipGridNgayDuyet}}</span>\n            </div>\n        </ng-template>\n    </strong>\n</ng-template>\n\n<ng-template #thoiGianChiDinhTemplate let-dataItem>\n    {{dataItem.ThoiGianChiDinhDisplay}}\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-popup/duyet-ket-qua-new-popup.component.html": 
        /*!****************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-popup/duyet-ket-qua-new-popup.component.html ***!
          \****************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>XÁC NHẬN</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content [ngStyle]=\"{'height':lstData.length > 10 ? '190px':'auto'}\">\n    <span *ngIf=\"hasData\">Những dịch vụ bạn chưa nhập kết quả: </span>\n    <ul *ngIf=\"hasData\" style=\"max-height: 100px; overflow: auto;\">\n        <li *ngFor=\"let item of lstData\">\n            <span>&nbsp;&nbsp; + {{item.Ten}}<strong></strong></span>\n        </li>\n    </ul>\n\n    <!-- <div style=\"margin: 20px auto\">\n        <span>Bạn có chắc chắn muốn duyệt kết quả xét nghiệm này không?</span>\n    </div> -->\n\n</mat-dialog-content>\n\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <button type=\"button\" mat-button class=\"mr-1\" (click)=\"Khong()\">Không</button>\n    <!-- <button type=\"button\" mat-button class=\"mr-1\" (click)=\"Co('Print')\">Có & In KQ</button> -->\n    <button type=\"button\" (click)=\"Co('Yes')\" color=\"primary\" mat-raised-button>Duyệt</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-nhom-dv-list-new-popup/duyet-ket-qua-nhom-dv-list-new-popup.component.html": 
        /*!******************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-nhom-dv-list-new-popup/duyet-ket-qua-nhom-dv-list-new-popup.component.html ***!
          \******************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>Xác Nhận</div>\n</div>\n<ng-container>\n    <ng-container>\n        <div *ngFor=\"let item of nhomDichVuDuyets\">\n            <app-checkbox [(model)]=\"item.IsCheck\" label=\"{{item.TenNhomDichVu}}\" (modelChange)=\"isCheck()\" class=\"pb-0\">\n            </app-checkbox>\n        </div>\n\n    </ng-container>\n    <hr style=\" border: 1px solid black; margin-top: 15px;\">\n</ng-container>\n\n<ng-container>\n    <div style=\"float: right; padding-top: 10px;\">\n        <button tabindex=\"-1\" type=\"button\" (click)=\"close()\" mat-stroked-button class=\"mr-1 mt-2\">Đóng</button>\n        <button [disabled]=\"!disabled\" tabindex=\"-1\" type=\"button\" (click)=\"okPrint()\" mat-raised-button mat-button color=\"primary\"\n            class=\"md-primary mr-1 mt-2\">OK</button>\n    </div>\n</ng-container>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-phieu-new-popup/duyet-ket-qua-phieu-new-popup.component.html": 
        /*!****************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-phieu-new-popup/duyet-ket-qua-phieu-new-popup.component.html ***!
          \****************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">Kết quả xét nghiệm ({{arrFileUrl.length}} file)</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n    <mat-icon [icIcon]=\"icClose\" [mat-dialog-close]=\"null\"></mat-icon>\n  </button>\n</div>\n<mat-dialog-content style=\"height: 550px;\">\n    <div class=\"container-iframe\">\n        <ng-container [ngSwitch]=\"arrFileUrl.length > 0\">\n            <div *ngSwitchCase=\"true\">\n                <ng-container *ngFor=\"let item of arrFileUrl\">\n                    <iframe width=\"100%\" height=\"550px\" frameborder=\"0\" [src]=\"item | safe\" type=\"application/pdf\" allowTransparency=\"true\" background=\"transparent\"></iframe>\n                </ng-container>\n            </div>\n            <div *ngSwitchDefault>Không có dữ liệu</div>\n        </ng-container>\n\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions class=\"mt-4 pb-5\">\n    <button type=\"button\" style=\"margin-left: auto;\" [mat-dialog-close]=\"null\" mat-button class=\"mr-1 mt-4\"><i\n      class=\"ft-arrow-left\"></i> Hủy</button>\n    <button type=\"button\" *ngIf=\"arrFilePdf.length > 0\" (click)=\"downloadAllFile()\" mat-stroked-button color=\"primary\" class=\"mr-1 mt-4\">Tải tất cả</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/chon-loai-ket-qua-xet-nghiem-new-popup/chon-loai-ket-qua-xet-nghiem-new-popup.component.scss": 
        /*!********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/chon-loai-ket-qua-xet-nghiem-new-popup/chon-loai-ket-qua-xet-nghiem-new-popup.component.scss ***!
          \********************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0vZHV5ZXQta2V0LXF1YS1uZXcvY2hvbi1sb2FpLWtldC1xdWEteGV0LW5naGllbS1uZXctcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx4ZXQtbmdoaWVtXFxkdXlldC1rZXQtcXVhLW5ld1xcY2hvbi1sb2FpLWtldC1xdWEteGV0LW5naGllbS1uZXctcG9wdXBcXGNob24tbG9haS1rZXQtcXVhLXhldC1uZ2hpZW0tbmV3LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4veGV0LW5naGllbS9kdXlldC1rZXQtcXVhLW5ldy9jaG9uLWxvYWkta2V0LXF1YS14ZXQtbmdoaWVtLW5ldy1wb3B1cC9jaG9uLWxvYWkta2V0LXF1YS14ZXQtbmdoaWVtLW5ldy1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4veGV0LW5naGllbS9kdXlldC1rZXQtcXVhLW5ldy9jaG9uLWxvYWkta2V0LXF1YS14ZXQtbmdoaWVtLW5ldy1wb3B1cC9jaG9uLWxvYWkta2V0LXF1YS14ZXQtbmdoaWVtLW5ldy1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59IiwiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/chon-loai-ket-qua-xet-nghiem-new-popup/chon-loai-ket-qua-xet-nghiem-new-popup.component.ts": 
        /*!******************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/chon-loai-ket-qua-xet-nghiem-new-popup/chon-loai-ket-qua-xet-nghiem-new-popup.component.ts ***!
          \******************************************************************************************************************************************************/
        /*! exports provided: ChonLoaiKetQuaXetNghiemNewPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChonLoaiKetQuaXetNghiemNewPopupComponent", function () { return ChonLoaiKetQuaXetNghiemNewPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            var ChonLoaiKetQuaXetNghiemNewPopupComponent = /** @class */ (function () {
                function ChonLoaiKetQuaXetNghiemNewPopupComponent(data, sanitizer, dialog, dialogRef, apiService, notificationService, cdRef) {
                    this.data = data;
                    this.sanitizer = sanitizer;
                    this.dialog = dialog;
                    this.dialogRef = dialogRef;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.cdRef = cdRef;
                    this.src = '';
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.luaChon = 1;
                    this.gridDataSource = {
                        data: [],
                        total: 0
                    };
                    this.gridColumnsNhom = [];
                    this.gridColumnsDichVu = [];
                    this.listMySectionId = [];
                    this.groups = [{ field: 'Nhom' }];
                    this.searchString = "";
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6___default.a;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
                }
                ChonLoaiKetQuaXetNghiemNewPopupComponent.prototype.ngOnInit = function () {
                    this.gridColumnsNhom = [
                        { Field: 'Nhom', Title: 'Tên', Width: 120 }
                    ];
                    this.gridColumnsDichVu = [
                        { Field: 'Nhom', Title: '', Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomTemplate },
                        { Field: 'Ten', Title: 'Tên', Width: 120 }
                    ];
                };
                ChonLoaiKetQuaXetNghiemNewPopupComponent.prototype.searchChanges = function () {
                    if (this.searchString != undefined && this.searchString != null && this.searchString != "") {
                    }
                    else {
                        this.timKiemGridDataSource(this.searchString);
                    }
                };
                ChonLoaiKetQuaXetNghiemNewPopupComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.timKiemGridDataSource(this.searchString);
                    }
                };
                ChonLoaiKetQuaXetNghiemNewPopupComponent.prototype.timKiemGridDataSource = function (searching) {
                    var _this = this;
                    if (searching == undefined && searching == null && searching == "") {
                        this.changeLuaChon(3);
                    }
                    else {
                        this.changeLuaChon(3);
                        if (this.gridDataSource.data.length != 0) {
                            var queryStringSearch = JSON.stringify(this.gridDataSource.data);
                            var modelSearch = {
                                DanhSachCanSearchs: queryStringSearch,
                                Searching: searching
                            };
                            this.apiService.post("XetNghiem/TimKiemGridPopUpXetNghiem", modelSearch).subscribe(function (result) {
                                _this.gridDataSource.data = result;
                                _this.gridDataSource.total = result.length;
                                //this.grids.gridDataSource = this.gridDataSource;
                                _this.grids.setDataSource();
                            }, function (err) {
                                if (err.Message !== 'Validation Failed') {
                                    _this.notificationService.showError(err.Message);
                                }
                            });
                        }
                    }
                };
                ChonLoaiKetQuaXetNghiemNewPopupComponent.prototype.changeLuaChon = function (event) {
                    if (event == 2) {
                        var flags = [], output = [], l = this.data.length, i = void 0;
                        for (i = 0; i < l; i++) {
                            if (flags[this.data[i].Nhom])
                                continue;
                            flags[this.data[i].Nhom] = true;
                            output.push(this.data[i]);
                        }
                        var outputCoKetQuaDuyetKetQua_1 = [];
                        output.forEach(function (element) {
                            if (element.ThoiDiemDuyetKetQua != null) {
                                outputCoKetQuaDuyetKetQua_1.push(element);
                            }
                        });
                        var sortOutputCoKetQuaDuyetKetQua = [];
                        if (outputCoKetQuaDuyetKetQua_1.length == 1) {
                            sortOutputCoKetQuaDuyetKetQua = outputCoKetQuaDuyetKetQua_1;
                        }
                        else {
                            for (var i_1 = 0; i_1 < outputCoKetQuaDuyetKetQua_1.length - 1; i_1++) {
                                for (var j = 1; j < outputCoKetQuaDuyetKetQua_1.length; j++) {
                                    if (outputCoKetQuaDuyetKetQua_1[i_1].NhomId > outputCoKetQuaDuyetKetQua_1[j].NhomId) {
                                        sortOutputCoKetQuaDuyetKetQua = this.swapArray(outputCoKetQuaDuyetKetQua_1, i_1, j);
                                    }
                                }
                            }
                        }
                        this.gridDataSource.data = sortOutputCoKetQuaDuyetKetQua;
                        this.gridDataSource.total = sortOutputCoKetQuaDuyetKetQua.length;
                        this.grid.setDataSource();
                    }
                    if (event == 3) {
                        var output_1 = [];
                        this.data.forEach(function (element) {
                            if (element.Level == 1) {
                                output_1.push(element);
                            }
                        });
                        var outputCoKetQuaDuyetKetQua_2 = [];
                        output_1.forEach(function (element) {
                            if (element.ThoiDiemDuyetKetQua != null) {
                                outputCoKetQuaDuyetKetQua_2.push(element);
                            }
                        });
                        this.gridDataSource.data = outputCoKetQuaDuyetKetQua_2;
                        this.gridDataSource.total = outputCoKetQuaDuyetKetQua_2.length;
                        this.grids.setDataSource();
                    }
                };
                ChonLoaiKetQuaXetNghiemNewPopupComponent.prototype.swapArray = function (Array, Swap1, Swap2) {
                    var temp = Array[Swap1];
                    Array[Swap1] = Array[Swap2];
                    Array[Swap2] = temp;
                    return Array;
                };
                ChonLoaiKetQuaXetNghiemNewPopupComponent.prototype.extCheckboxSelection = function (event) {
                    if (event.length > 0) {
                        this.listMySectionId = event;
                    }
                };
                ChonLoaiKetQuaXetNghiemNewPopupComponent.prototype.huyCheckBoxSelection = function () {
                    this.gridDataSource.data.forEach(function (element) {
                        {
                            if ($('#' + 'marketingselectCheckboxId' + element.Id).prop('checked')) {
                                $('#' + 'marketingselectCheckboxId' + element.Id).trigger('click');
                            }
                        }
                    });
                };
                ChonLoaiKetQuaXetNghiemNewPopupComponent.prototype.close = function (result) {
                    var _this = this;
                    if (result == 'Yes') {
                        var listDataSelect_1 = new Array();
                        var data = this.gridDataSource.data.findIndex(function (x) { return x.CheckedDefault == true; });
                        this.listMySectionId.forEach(function (element) {
                            _this.gridDataSource.data.forEach(function (elements) {
                                if (elements.Id == element) {
                                    listDataSelect_1.push(elements);
                                }
                            });
                        });
                        var objKetQuaChonIn = {
                            LoaiIn: this.luaChon,
                            ListIn: listDataSelect_1
                        };
                        this.dialogRef.close(objKetQuaChonIn);
                    }
                    if (result == 'No') {
                        this.dialogRef.close(result);
                    }
                };
                return ChonLoaiKetQuaXetNghiemNewPopupComponent;
            }());
            ChonLoaiKetQuaXetNghiemNewPopupComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomTemplate', { static: true })
            ], ChonLoaiKetQuaXetNghiemNewPopupComponent.prototype, "nhomTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("gridTheoNhom", { static: true })
            ], ChonLoaiKetQuaXetNghiemNewPopupComponent.prototype, "grid", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("gridTheoDichVu", { static: true })
            ], ChonLoaiKetQuaXetNghiemNewPopupComponent.prototype, "grids", void 0);
            ChonLoaiKetQuaXetNghiemNewPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-chon-loai-ket-qua-xet-nghiem-new-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chon-loai-ket-qua-xet-nghiem-new-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/chon-loai-ket-qua-xet-nghiem-new-popup/chon-loai-ket-qua-xet-nghiem-new-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chon-loai-ket-qua-xet-nghiem-new-popup.component.scss */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/chon-loai-ket-qua-xet-nghiem-new-popup/chon-loai-ket-qua-xet-nghiem-new-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], ChonLoaiKetQuaXetNghiemNewPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/dich-vu-can-cap-nhat-popup/dich-vu-can-cap-nhat-popup.component.scss": 
        /*!********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/dich-vu-can-cap-nhat-popup/dich-vu-can-cap-nhat-popup.component.scss ***!
          \********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".md-primary {\n  color: white;\n  background-color: #005dab;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\nfieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em !important;\n  padding-bottom: 0.625em !important;\n  padding-left: 0.75em !important;\n  padding-right: 0.75em !important;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n  height: auto;\n}\n\nfieldset legend {\n  display: flex;\n  align-items: flex-end;\n  text-transform: uppercase;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline-block !important;\n}\n\n.minHeight270 {\n  min-height: 270px;\n}\n\n.minHeight321 {\n  min-height: 321px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0vZHV5ZXQta2V0LXF1YS1uZXcvZGljaC12dS1jYW4tY2FwLW5oYXQtcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx4ZXQtbmdoaWVtXFxkdXlldC1rZXQtcXVhLW5ld1xcZGljaC12dS1jYW4tY2FwLW5oYXQtcG9wdXBcXGRpY2gtdnUtY2FuLWNhcC1uaGF0LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4veGV0LW5naGllbS9kdXlldC1rZXQtcXVhLW5ldy9kaWNoLXZ1LWNhbi1jYXAtbmhhdC1wb3B1cC9kaWNoLXZ1LWNhbi1jYXAtbmhhdC1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi94ZXQtbmdoaWVtL2R1eWV0LWtldC1xdWEtbmV3L2RpY2gtdnUtY2FuLWNhcC1uaGF0LXBvcHVwL2RpY2gtdnUtY2FuLWNhcC1uaGF0LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1kLXByaW1hcnkge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVkYWI7XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuZmllbGRzZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAwLjM1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4ICNlMGUwZTA7XG4gIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5maWVsZHNldCBsZWdlbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG4ubWluSGVpZ2h0MjcwIHtcbiAgbWluLWhlaWdodDogMjcwcHg7XG59XG5cbi5taW5IZWlnaHQzMjEge1xuICBtaW4taGVpZ2h0OiAzMjFweDtcbn0iLCIubWQtcHJpbWFyeSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWRhYjtcbn1cblxuLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG5maWVsZHNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgcGFkZGluZy10b3A6IDAuMzVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1ZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbmZpZWxkc2V0IGxlZ2VuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuZmllbGRzZXQgLml0ZW1fcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmZpZWxkc2V0IHVsID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmZpZWxkc2V0IHVsLmlubGluZSA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5taW5IZWlnaHQyNzAge1xuICBtaW4taGVpZ2h0OiAyNzBweDtcbn1cblxuLm1pbkhlaWdodDMyMSB7XG4gIG1pbi1oZWlnaHQ6IDMyMXB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/dich-vu-can-cap-nhat-popup/dich-vu-can-cap-nhat-popup.component.ts": 
        /*!******************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/dich-vu-can-cap-nhat-popup/dich-vu-can-cap-nhat-popup.component.ts ***!
          \******************************************************************************************************************************/
        /*! exports provided: DichVuCanCapNhatPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuCanCapNhatPopupComponent", function () { return DichVuCanCapNhatPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _duyet_ket_qua_new_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../duyet-ket-qua-new.model */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new.model.ts");
            var DichVuCanCapNhatPopupComponent = /** @class */ (function () {
                function DichVuCanCapNhatPopupComponent(ref, notificationService, apiService, dialog, authService, data, dialogRef) {
                    this.ref = ref;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.authService = authService;
                    this.data = data;
                    this.dialogRef = dialogRef;
                    this.duyetKqXetNghiemDetail = new _duyet_ket_qua_new_model__WEBPACK_IMPORTED_MODULE_12__["DuyetKetQuaNew"]();
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
                    this.title = null;
                    this.dataUpdate = null;
                    this.gridColumns = [];
                    this.groups = [{ field: 'Nhom' }];
                    this.popupSavingData = null;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DuyetKetQuaXetNghiem;
                    this.gridDataSource = {
                        data: [],
                        total: 0
                    };
                }
                DichVuCanCapNhatPopupComponent.prototype.ngOnInit = function () {
                    this.duyetKqXetNghiemDetail = this.data.Model;
                    this.dataUpdate = this.data.DataChiTiet;
                    this.title = this.data.Title;
                    this.gridColumns = [
                        { Field: 'Nhom', Title: '', Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomTemplate },
                        { Field: 'Ten', Title: 'Tên', Width: 200, Sortable: false, Template: this.tenTemplate, ShowTooltip: true },
                        { Field: 'GiaTriCu', Title: 'KQ Cũ', Width: 100, Sortable: false },
                        { Field: 'GiaTriTuMay', Title: 'KQ Từ Máy', Width: 100, Sortable: false },
                        { Field: 'GiaTriNhapTay', Title: 'KQ Nhập Tay', Width: 70, Sortable: false },
                        { Field: 'GiaTriDuyet', Title: 'KQ Duyệt', Width: 100, Sortable: false, Template: this.kqDuyetTemplate },
                        { Field: 'ToDamGiaTri', Title: 'Đậm KQ', Width: 60, Sortable: false, Template: this.damKQTemplate },
                        { Field: 'Csbt', Title: 'CSBT', Width: 90, Sortable: false },
                        { Field: 'DonVi', Title: 'ĐVT', Width: 50, Sortable: false },
                    ];
                    this.setDataSourceForGrid();
                };
                DichVuCanCapNhatPopupComponent.prototype.setDataSourceForGrid = function () {
                    this.gridDataSource = {
                        data: this.dataUpdate,
                        total: this.dataUpdate.length
                    };
                    this.gridDichVu.gridDataSource = this.gridDataSource;
                };
                DichVuCanCapNhatPopupComponent.prototype.savingPage = function () {
                    this.popupSavingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang lưu dữ liệu..." },
                    });
                };
                DichVuCanCapNhatPopupComponent.prototype.closepopupSavingData = function () {
                    if (this.popupSavingData != undefined && this.popupSavingData != null) {
                        this.popupSavingData.close();
                    }
                };
                DichVuCanCapNhatPopupComponent.prototype.close = function (answer) {
                    this.dialogRef.close(answer);
                };
                DichVuCanCapNhatPopupComponent.prototype.luu = function () {
                    var self = this;
                    self.validationErrors = null;
                    self.ref.detectChanges();
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
                        self.savingPage();
                        self.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems = self.dataUpdate;
                        self.apiService.post("DuyetKetQuaXetNghiem/CapNhatDichVuXetNghiem", self.duyetKqXetNghiemDetail).subscribe(function () {
                            self.closepopupSavingData();
                            var mess = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].ActionSuccessfully, ["Cập nhật"]);
                            self.notificationService.showSuccess(mess);
                            self.close("OK");
                        }, function (err) {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                            self.closepopupSavingData();
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                return DichVuCanCapNhatPopupComponent;
            }());
            DichVuCanCapNhatPopupComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomTemplate', { static: true })
            ], DichVuCanCapNhatPopupComponent.prototype, "nhomTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('kqDuyetTemplate', { static: true })
            ], DichVuCanCapNhatPopupComponent.prototype, "kqDuyetTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('damKQTemplate', { static: true })
            ], DichVuCanCapNhatPopupComponent.prototype, "damKQTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDichVu', { static: true })
            ], DichVuCanCapNhatPopupComponent.prototype, "gridDichVu", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenTemplate', { static: true })
            ], DichVuCanCapNhatPopupComponent.prototype, "tenTemplate", void 0);
            DichVuCanCapNhatPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dich-vu-can-cap-nhat-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dich-vu-can-cap-nhat-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/dich-vu-can-cap-nhat-popup/dich-vu-can-cap-nhat-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dich-vu-can-cap-nhat-popup.component.scss */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/dich-vu-can-cap-nhat-popup/dich-vu-can-cap-nhat-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
            ], DichVuCanCapNhatPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-in-nhom-dv-list-new-popup/duyet-ket-qua-in-nhom-dv-list-new-popup.component.scss": 
        /*!**********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-in-nhom-dv-list-new-popup/duyet-ket-qua-in-nhom-dv-list-new-popup.component.scss ***!
          \**********************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0vZHV5ZXQta2V0LXF1YS1uZXcvZHV5ZXQta2V0LXF1YS1pbi1uaG9tLWR2LWxpc3QtbmV3LXBvcHVwL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxceGV0LW5naGllbVxcZHV5ZXQta2V0LXF1YS1uZXdcXGR1eWV0LWtldC1xdWEtaW4tbmhvbS1kdi1saXN0LW5ldy1wb3B1cFxcZHV5ZXQta2V0LXF1YS1pbi1uaG9tLWR2LWxpc3QtbmV3LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4veGV0LW5naGllbS9kdXlldC1rZXQtcXVhLW5ldy9kdXlldC1rZXQtcXVhLWluLW5ob20tZHYtbGlzdC1uZXctcG9wdXAvZHV5ZXQta2V0LXF1YS1pbi1uaG9tLWR2LWxpc3QtbmV3LXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi94ZXQtbmdoaWVtL2R1eWV0LWtldC1xdWEtbmV3L2R1eWV0LWtldC1xdWEtaW4tbmhvbS1kdi1saXN0LW5ldy1wb3B1cC9kdXlldC1rZXQtcXVhLWluLW5ob20tZHYtbGlzdC1uZXctcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUgLnBhZ2VicmVhayB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iLCIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUgLnBhZ2VicmVhayB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-in-nhom-dv-list-new-popup/duyet-ket-qua-in-nhom-dv-list-new-popup.component.ts": 
        /*!********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-in-nhom-dv-list-new-popup/duyet-ket-qua-in-nhom-dv-list-new-popup.component.ts ***!
          \********************************************************************************************************************************************************/
        /*! exports provided: DuyetKetQuaInNhomDvListNewPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetKetQuaInNhomDvListNewPopupComponent", function () { return DuyetKetQuaInNhomDvListNewPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _duyet_ket_qua_phieu_new_popup_duyet_ket_qua_phieu_new_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../duyet-ket-qua-phieu-new-popup/duyet-ket-qua-phieu-new-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-phieu-new-popup/duyet-ket-qua-phieu-new-popup.component.ts");
            var DuyetKetQuaInNhomDvListNewPopupComponent = /** @class */ (function () {
                function DuyetKetQuaInNhomDvListNewPopupComponent(sanitizer, dialog, dialogRef, data) {
                    this.sanitizer = sanitizer;
                    this.dialog = dialog;
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.src = "";
                    this.arrHtml = [];
                }
                DuyetKetQuaInNhomDvListNewPopupComponent.prototype.ngOnInit = function () {
                    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
                };
                DuyetKetQuaInNhomDvListNewPopupComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                DuyetKetQuaInNhomDvListNewPopupComponent.prototype.print = function () {
                    this.dialogRef.close();
                    if (this.arrHtml != []) {
                        this.arrHtml = [];
                    }
                    this.arrHtml.push(this.data);
                    this.dialog.open(_duyet_ket_qua_phieu_new_popup_duyet_ket_qua_phieu_new_popup_component__WEBPACK_IMPORTED_MODULE_5__["DuyetKetQuaPhieuNewPopupComponent"], {
                        disableClose: false,
                        width: '1000px',
                        data: this.arrHtml
                    }).afterClosed().subscribe(function () {
                    });
                };
                return DuyetKetQuaInNhomDvListNewPopupComponent;
            }());
            DuyetKetQuaInNhomDvListNewPopupComponent.ctorParameters = function () { return [
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            DuyetKetQuaInNhomDvListNewPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duyet-ket-qua-in-nhom-dv-list-new-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-ket-qua-in-nhom-dv-list-new-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-in-nhom-dv-list-new-popup/duyet-ket-qua-in-nhom-dv-list-new-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-ket-qua-in-nhom-dv-list-new-popup.component.scss */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-in-nhom-dv-list-new-popup/duyet-ket-qua-in-nhom-dv-list-new-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], DuyetKetQuaInNhomDvListNewPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-detailed/duyet-ket-qua-new-detailed.component.scss": 
        /*!********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-detailed/duyet-ket-qua-new-detailed.component.scss ***!
          \********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("fieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em;\n  padding-bottom: 0.625em;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline !important;\n}\n\ntable {\n  width: 100%;\n  background-color: white;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\ntable th {\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\ntable th.w-250 {\n  width: 250px;\n}\n\ntable tr.bg-light-red {\n  background-color: #eaa3a3;\n}\n\n.order-btn {\n  display: flex !important;\n  justify-content: space-between !important;\n}\n\n.order-for-in-xuat {\n  display: flex;\n}\n\n.set-col {\n  flex-direction: column;\n}\n\n.order-color {\n  display: flex;\n  flex-direction: row;\n  gap: 15px;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.order-color .set-color {\n  padding: 10px 40px;\n}\n\n.order-color .set-color.black {\n  background-color: black;\n}\n\n.order-color .set-color.red {\n  background-color: red;\n}\n\n.order-color .set-color.blue {\n  background-color: blue;\n}\n\n.order-color .set-color.gray {\n  background-color: lightgray;\n}\n\n.order-color .set-color.palegoldenrod {\n  background-color: palegoldenrod;\n}\n\n.order-color .set-color.deepskyblue {\n  background-color: deepskyblue;\n}\n\n.order-color .set-color.bluelight {\n  background-color: #b3e5fc;\n}\n\n.order-search {\n  align-items: center;\n}\n\n.order-maneuver {\n  margin-top: 25px;\n  display: flex;\n  flex-direction: column;\n}\n\n.order-maneuver .first-row {\n  display: flex;\n  gap: 16px;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 300px;\n  background-color: black;\n  color: #fff;\n  border-radius: 6px;\n  /* Position the tooltip */\n  position: absolute;\n  z-index: 1;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0vZHV5ZXQta2V0LXF1YS1uZXcvZHV5ZXQta2V0LXF1YS1uZXctZGV0YWlsZWQvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx4ZXQtbmdoaWVtXFxkdXlldC1rZXQtcXVhLW5ld1xcZHV5ZXQta2V0LXF1YS1uZXctZGV0YWlsZWRcXGR1eWV0LWtldC1xdWEtbmV3LWRldGFpbGVkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4veGV0LW5naGllbS9kdXlldC1rZXQtcXVhLW5ldy9kdXlldC1rZXQtcXVhLW5ldy1kZXRhaWxlZC9kdXlldC1rZXQtcXVhLW5ldy1kZXRhaWxlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7RUFDQSx5Q0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7QUNDRjs7QURFQTtFQUNFLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0vZHV5ZXQta2V0LXF1YS1uZXcvZHV5ZXQta2V0LXF1YS1uZXctZGV0YWlsZWQvZHV5ZXQta2V0LXF1YS1uZXctZGV0YWlsZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmaWVsZHNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgcGFkZGluZy10b3A6IDAuMzVlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW07XG4gIHBhZGRpbmctbGVmdDogMC43NWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1ZW07XG4gIGJvcmRlcjogMXB4ICNlMGUwZTA7XG4gIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcbn1cblxuZmllbGRzZXQgLml0ZW1fcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmZpZWxkc2V0IHVsID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmZpZWxkc2V0IHVsLmlubGluZSA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxudGFibGUgdGgge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxudGFibGUgdGgudy0yNTAge1xuICB3aWR0aDogMjUwcHg7XG59XG5cbnRhYmxlIHRyLmJnLWxpZ2h0LXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWEzYTM7XG59XG5cbi5vcmRlci1idG4ge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xufVxuXG4ub3JkZXItZm9yLWluLXh1YXQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc2V0LWNvbCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5vcmRlci1jb2xvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGdhcDogMTVweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm9yZGVyLWNvbG9yIC5zZXQtY29sb3Ige1xuICBwYWRkaW5nOiAxMHB4IDQwcHg7XG59XG5cbi5vcmRlci1jb2xvciAuc2V0LWNvbG9yLmJsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5vcmRlci1jb2xvciAuc2V0LWNvbG9yLnJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLm9yZGVyLWNvbG9yIC5zZXQtY29sb3IuYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbi5vcmRlci1jb2xvciAuc2V0LWNvbG9yLmdyYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5vcmRlci1jb2xvciAuc2V0LWNvbG9yLnBhbGVnb2xkZW5yb2Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxlZ29sZGVucm9kO1xufVxuXG4ub3JkZXItY29sb3IgLnNldC1jb2xvci5kZWVwc2t5Ymx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRlZXBza3libHVlO1xufVxuXG4ub3JkZXItY29sb3IgLnNldC1jb2xvci5ibHVlbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNlNWZjO1xufVxuXG4ub3JkZXItc2VhcmNoIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm9yZGVyLW1hbmV1dmVyIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm9yZGVyLW1hbmV1dmVyIC5maXJzdC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE2cHg7XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7XG59XG5cbi50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDMwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgLyogUG9zaXRpb24gdGhlIHRvb2x0aXAgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xufVxuXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufSIsImZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbTtcbiAgYm9yZGVyOiAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xufVxuXG5maWVsZHNldCAuaXRlbV9yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuZmllbGRzZXQgdWwgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuZmllbGRzZXQgdWwuaW5saW5lID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG50YWJsZSB0aCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG50YWJsZSB0aC53LTI1MCB7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxudGFibGUgdHIuYmctbGlnaHQtcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhYTNhMztcbn1cblxuLm9yZGVyLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG59XG5cbi5vcmRlci1mb3ItaW4teHVhdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zZXQtY29sIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm9yZGVyLWNvbG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiAxNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ub3JkZXItY29sb3IgLnNldC1jb2xvciB7XG4gIHBhZGRpbmc6IDEwcHggNDBweDtcbn1cblxuLm9yZGVyLWNvbG9yIC5zZXQtY29sb3IuYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLm9yZGVyLWNvbG9yIC5zZXQtY29sb3IucmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4ub3JkZXItY29sb3IgLnNldC1jb2xvci5ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxuLm9yZGVyLWNvbG9yIC5zZXQtY29sb3IuZ3JheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLm9yZGVyLWNvbG9yIC5zZXQtY29sb3IucGFsZWdvbGRlbnJvZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHBhbGVnb2xkZW5yb2Q7XG59XG5cbi5vcmRlci1jb2xvciAuc2V0LWNvbG9yLmRlZXBza3libHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGVlcHNreWJsdWU7XG59XG5cbi5vcmRlci1jb2xvciAuc2V0LWNvbG9yLmJsdWVsaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2U1ZmM7XG59XG5cbi5vcmRlci1zZWFyY2gge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ub3JkZXItbWFuZXV2ZXIge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ub3JkZXItbWFuZXV2ZXIgLmZpcnN0LXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTZweDtcbn1cblxuLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibGFjaztcbn1cblxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogMzAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-detailed/duyet-ket-qua-new-detailed.component.ts": 
        /*!******************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-detailed/duyet-ket-qua-new-detailed.component.ts ***!
          \******************************************************************************************************************************/
        /*! exports provided: DuyetKetQuaNewDetailedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetKetQuaNewDetailedComponent", function () { return DuyetKetQuaNewDetailedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_error_error_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/error/error.service */ "./src/app/core/error/error.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var _duyet_ket_qua_new_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../duyet-ket-qua-new.model */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new.model.ts");
            /* harmony import */ var _duyet_ket_qua_new_popup_duyet_ket_qua_new_popup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../duyet-ket-qua-new-popup/duyet-ket-qua-new-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-popup/duyet-ket-qua-new-popup.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_notification_notification_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/component/dialogs/notification/notification.component */ "./src/app/shared/component/dialogs/notification/notification.component.ts");
            /* harmony import */ var _dich_vu_can_cap_nhat_popup_dich_vu_can_cap_nhat_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../dich-vu-can-cap-nhat-popup/dich-vu-can-cap-nhat-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/dich-vu-can-cap-nhat-popup/dich-vu-can-cap-nhat-popup.component.ts");
            var DuyetKetQuaNewDetailedComponent = /** @class */ (function () {
                function DuyetKetQuaNewDetailedComponent(router, route, notificationService, dialog, baseService, authService, apiService, errorService, cdRef, renderer) {
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
                    this.search = new _duyet_ket_qua_new_model__WEBPACK_IMPORTED_MODULE_15__["SearchNew"]();
                    this.duyetKqXetNghiemDetail = new _duyet_ket_qua_new_model__WEBPACK_IMPORTED_MODULE_15__["DuyetKetQuaNew"]();
                    this.inPhieuDuyetKetQua = new _duyet_ket_qua_new_model__WEBPACK_IMPORTED_MODULE_15__["PhieuDuyetKetQuaNew"]();
                    this.id = this.route.snapshot.params.id;
                    this.kqNhapTay = null;
                    this.kqDuyet = null;
                    this.ngayDuyet = null;
                    this.baseRoute = 'xet-nghiem/duyet-ket-qua-new';
                    this.coDichVuDuocDuyet = false;
                    this.checkAll = null;
                    this.popupSavingData = null;
                    this.sort = [
                        {
                            field: 'Id',
                            dir: 'asc'
                        }
                    ];
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__["DocumentType"].DuyetKetQuaXetNghiem;
                    this.groups = [{ field: 'Nhom' }];
                    this.gridColumns = [];
                    this.displayToolTipGridNguoiYeuCau = null;
                    this.displayToolTipGridNgayYeuCau = null;
                    this.displayToolTipGridLyDoYeuCau = null;
                    this.displayToolTipGridNguoiDuyet = null;
                    this.displayToolTipGridNgayDuyet = null;
                    this.showToastNotifyError = false;
                    this.ChiTietKetQuaXetNghiems = new Array();
                    this.currentCellFocused = null;
                }
                DuyetKetQuaNewDetailedComponent.prototype.ngOnInit = function () {
                    this.gridColumns = [
                        { Field: 'Nhom', Title: '', Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomTemplate },
                        {
                            Field: 'Duyet', Title: '', Width: 50, Sortable: false,
                            Template: this.duyetTemplate, TemplateGroupHeaderColumn: this.duyetHeaderColumnTemplate,
                            TemplateHeader: this.checkBoxHeaderTemplate
                        },
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
                DuyetKetQuaNewDetailedComponent.prototype.ngAfterContentInit = function () {
                    //Called after ngOnInit when the component's or directive's content has been initialized.
                    //Add 'implements AfterContentInit' to the class.
                };
                DuyetKetQuaNewDetailedComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                DuyetKetQuaNewDetailedComponent.prototype.GetById = function (id) {
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
                            // this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(x => x.DaDuyet != true)
                            //     .forEach(x => { x.HighLightClass = 'bg-row-palegoldenrod'; });
                            _this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.forEach(function (dataItem) {
                                if ((dataItem.GiaTriTuMay == null || dataItem.GiaTriTuMay == '')
                                    && (dataItem.GiaTriNhapTay == null || dataItem.GiaTriNhapTay == '')
                                    && (dataItem.GiaTriDuyet == null || dataItem.GiaTriDuyet == '')) {
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
                                }
                                else {
                                    if (dataItem.DaDuyet != true) {
                                        dataItem.HighLightClass = 'bg-row-lightblue2';
                                    }
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
                DuyetKetQuaNewDetailedComponent.prototype.SetDataSourceForGrid = function () {
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
                DuyetKetQuaNewDetailedComponent.prototype.quayLai = function () {
                    this.router.navigateByUrl('/xet-nghiem/duyet-ket-qua-new' + '?holdQuery=true');
                };
                DuyetKetQuaNewDetailedComponent.prototype.savingPage = function () {
                    this.popupSavingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang lưu dữ liệu..." },
                    });
                };
                DuyetKetQuaNewDetailedComponent.prototype.closepopupSavingData = function () {
                    if (this.popupSavingData != undefined && this.popupSavingData != null) {
                        this.popupSavingData.close();
                    }
                };
                DuyetKetQuaNewDetailedComponent.prototype.xuLyDuyet = function () {
                    var _this = this;
                    if (this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.every(function (z) { return !z.CheckBox; })) {
                        this.dialog.open(src_app_shared_component_dialogs_notification_notification_component__WEBPACK_IMPORTED_MODULE_17__["NotificationComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "THÔNG BÁO", Message: "Vui lòng chọn dịch vụ muốn duyệt." }
                        }).afterClosed().subscribe(function (result) {
                        });
                    }
                    else {
                        var dataNeedFillValue = this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems
                            .filter(function (o) { return !o.DaDuyet
                            && o.CheckBox
                            && ((o.Level == 1 && o.IdChilds.length == 0) || (o.Level != 1 && o.IdChilds.length > 0))
                            && (o.GiaTriTuMay == null || o.GiaTriTuMay == '')
                            && (o.GiaTriNhapTay == null || o.GiaTriNhapTay == '')
                            && (o.GiaTriDuyet == null || o.GiaTriDuyet == ''); });
                        var dataChiTietXetNghiem = this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems;
                        var dialogRef = void 0;
                        if (dataNeedFillValue && dataNeedFillValue.some(function (x) { return x; })) {
                            dialogRef = this.dialog.open(_duyet_ket_qua_new_popup_duyet_ket_qua_new_popup_component__WEBPACK_IMPORTED_MODULE_16__["DuyetKetQuaNewPopupComponent"], {
                                disableClose: true,
                                width: '700px',
                                data: { Model: dataNeedFillValue, DataChiTietXetNghiem: dataChiTietXetNghiem }
                            });
                            dialogRef.afterClosed().subscribe(function (result) {
                                if (result) {
                                    if (result != undefined && result != null && result != "") {
                                        if (result === 'Yes') {
                                            _this.savingPage();
                                            _this.apiService.post('DuyetKetQuaXetNghiem/DuyetKetQuaXetNghiem', _this.duyetKqXetNghiemDetail).subscribe(function () {
                                                _this.closepopupSavingData();
                                                _this.GetById(_this.id);
                                                _this.duyetKqXetNghiemDetail.TrangThai = null;
                                                _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ['Duyệt']));
                                                // location.reload();
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
                                                _this.closepopupSavingData();
                                            });
                                        }
                                    }
                                }
                            });
                        }
                        else {
                            this.savingPage();
                            this.apiService.post('DuyetKetQuaXetNghiem/DuyetKetQuaXetNghiem', this.duyetKqXetNghiemDetail).subscribe(function () {
                                _this.closepopupSavingData();
                                _this.GetById(_this.id);
                                _this.duyetKqXetNghiemDetail.TrangThai = null;
                                _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ['Duyệt']));
                                // location.reload();
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
                                _this.closepopupSavingData();
                            });
                        }
                        // else {
                        //     dialogRef = this.dialog.open(DuyetKetQuaNewPopupComponent, {
                        //         disableClose: true,
                        //         width: '400px',
                        //         data: { Model: dataNeedFillValue, DataChiTietXetNghiem: dataChiTietXetNghiem }
                        //     });
                        // }
                    }
                };
                DuyetKetQuaNewDetailedComponent.prototype.xuLyDuyetVaIn = function () {
                    var _this = this;
                    if (this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.every(function (z) { return !z.CheckBox; })) {
                        this.dialog.open(src_app_shared_component_dialogs_notification_notification_component__WEBPACK_IMPORTED_MODULE_17__["NotificationComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "THÔNG BÁO", Message: "Vui lòng chọn dịch vụ muốn duyệt và in." }
                        }).afterClosed().subscribe(function (result) {
                        });
                    }
                    else {
                        var dataNeedFillValue = this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems
                            .filter(function (o) { return !o.DaDuyet && o.CheckBox
                            && ((o.Level == 1 && o.IdChilds.length == 0) || (o.Level != 1 && o.IdChilds.length > 0))
                            && (o.GiaTriTuMay == null || o.GiaTriTuMay == '')
                            && (o.GiaTriNhapTay == null || o.GiaTriNhapTay == '') && (o.GiaTriDuyet == null || o.GiaTriDuyet == ''); });
                        var dataChiTietXetNghiem = this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems;
                        var dialogRef = void 0;
                        if (dataNeedFillValue && dataNeedFillValue.some(function (x) { return x; })) {
                            dialogRef = this.dialog.open(_duyet_ket_qua_new_popup_duyet_ket_qua_new_popup_component__WEBPACK_IMPORTED_MODULE_16__["DuyetKetQuaNewPopupComponent"], {
                                disableClose: true,
                                width: '700px',
                                data: { Model: dataNeedFillValue, DataChiTietXetNghiem: dataChiTietXetNghiem }
                            });
                            dialogRef.afterClosed().subscribe(function (result) {
                                if (result) {
                                    if (result != undefined && result != null && result != "") {
                                        if (result === 'Yes') {
                                            _this.savingPage();
                                            _this.apiService.post('DuyetKetQuaXetNghiem/DuyetKetQuaXetNghiem', _this.duyetKqXetNghiemDetail).subscribe(function () {
                                                _this.closepopupSavingData();
                                                _this.duyetKqXetNghiemDetail.TrangThai = null;
                                                // this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Duyệt']));
                                                // Xử lý in kết quả xn
                                                _this.inPhieuDuyetKetQua.HostingName = window.location.protocol + '//' + window.location.host;
                                                _this.inPhieuDuyetKetQua.Header = true;
                                                _this.inPhieuDuyetKetQua.PhienXetNghiemId = _this.id;
                                                _this.inPhieuDuyetKetQua.YeuCauTiepNhanId = _this.duyetKqXetNghiemDetail.YeuCauTiepNhanId;
                                                _this.inPhieuDuyetKetQua.LoaiIn = 3;
                                                _this.inPhieuDuyetKetQua.ListIn = _this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(function (x) { return x.CheckBox; });
                                                // this.apiService.postExportPdf<Array<string>>
                                                //     ('XetNghiem/GetAllHtmlPdfDuyetKetQuaXetNghiemDuocCheckGrid', this.inPhieuDuyetKetQua).subscribe(
                                                //         arrHtml => {
                                                //             this.dialog.open(DuyetKetQuaPhieuNewPopupComponent, {
                                                //                 disableClose: false,
                                                //                 width: '1000px',
                                                //                 data: arrHtml
                                                //             }).afterClosed().subscribe(() => {
                                                //                 this.GetById(this.id);
                                                //                 // location.reload();
                                                //             });
                                                //             this.closePopupLoadingData();
                                                //         },
                                                //         (err: ApiError) => {
                                                //             if (err.Message !== 'Validation Failed') {
                                                //                 this.notificationService.showError(err.Message);
                                                //             }
                                                //             this.closePopupLoadingData();
                                                //         });
                                                var loading = _this.showLoading("Đang in...");
                                                _this.apiService.postExportPdf('XetNghiem/GetAllHtmlPdfDuyetKetQuaXetNghiemDuocCheckGrid', _this.inPhieuDuyetKetQua).subscribe(function (res) {
                                                    if (res != undefined && res != null) {
                                                        var newBlob = new Blob([res], { type: "application/pdf" });
                                                        var blobUrl = URL.createObjectURL(newBlob);
                                                        var iframe = document.createElement('iframe');
                                                        iframe.style.display = 'none';
                                                        iframe.src = blobUrl;
                                                        document.body.appendChild(iframe);
                                                        iframe.contentWindow.print();
                                                        _this.closeLoading(loading);
                                                        _this.closePopupLoadingData();
                                                        _this.GetById(_this.id);
                                                    }
                                                }, function (err) {
                                                    if (err.Message != "Validation Failed") {
                                                        _this.notificationService.showError(err.Message);
                                                    }
                                                    _this.closeLoading(loading);
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
                                                _this.closepopupSavingData();
                                            });
                                        }
                                    }
                                }
                            });
                        }
                        else {
                            this.showPopupDownloadData();
                            this.apiService.post('DuyetKetQuaXetNghiem/DuyetKetQuaXetNghiem', this.duyetKqXetNghiemDetail).subscribe(function () {
                                _this.duyetKqXetNghiemDetail.TrangThai = null;
                                _this.closePopupLoadingData();
                                // this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Duyệt']));
                                // Xử lý in kết quả xn
                                _this.inPhieuDuyetKetQua.HostingName = window.location.protocol + '//' + window.location.host;
                                _this.inPhieuDuyetKetQua.Header = true;
                                _this.inPhieuDuyetKetQua.PhienXetNghiemId = _this.id;
                                _this.inPhieuDuyetKetQua.YeuCauTiepNhanId = _this.duyetKqXetNghiemDetail.YeuCauTiepNhanId;
                                _this.inPhieuDuyetKetQua.LoaiIn = 3;
                                _this.inPhieuDuyetKetQua.ListIn = _this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(function (x) { return x.CheckBox; });
                                _this.showPopupDownloadData();
                                // this.apiService.postExportPdf<Array<string>>
                                //     ('XetNghiem/GetAllHtmlPdfDuyetKetQuaXetNghiemDuocCheckGrid', this.inPhieuDuyetKetQua).subscribe(
                                //         arrHtml => {
                                //             this.closePopupLoadingData();
                                //             this.dialog.open(DuyetKetQuaPhieuNewPopupComponent, {
                                //                 disableClose: false,
                                //                 width: '1000px',
                                //                 data: arrHtml
                                //             }).afterClosed().subscribe(() => {
                                //                 this.GetById(this.id);
                                //                 // location.reload();
                                //                 this.closePopupLoadingData();
                                //             });
                                //         },
                                //         (err: ApiError) => {
                                //             if (err.Message !== 'Validation Failed') {
                                //                 this.notificationService.showError(err.Message);
                                //             }
                                //             this.closePopupLoadingData();
                                //         });
                                var loading = _this.showLoading("Đang in...");
                                _this.apiService.postExportPdf('XetNghiem/GetAllHtmlPdfDuyetKetQuaXetNghiemDuocCheckGrid', _this.inPhieuDuyetKetQua).subscribe(function (res) {
                                    if (res != undefined && res != null) {
                                        var newBlob = new Blob([res], { type: "application/pdf" });
                                        var blobUrl = URL.createObjectURL(newBlob);
                                        var iframe = document.createElement('iframe');
                                        iframe.style.display = 'none';
                                        iframe.src = blobUrl;
                                        document.body.appendChild(iframe);
                                        iframe.contentWindow.print();
                                        _this.closeLoading(loading);
                                        _this.closePopupLoadingData();
                                        _this.GetById(_this.id);
                                    }
                                }, function (err) {
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                    _this.closeLoading(loading);
                                    _this.closePopupLoadingData();
                                });
                            }, function (err) {
                                _this.validationErrors = err.ValidationErrors;
                                if (_this.showToastNotifyError === true) {
                                    var mess = _this.errorService.getValidationErrors(err);
                                    if (mess != null) {
                                        _this.notificationService.showError(mess);
                                    }
                                    _this.closePopupLoadingData();
                                }
                                if (err.Message !== 'Validation Failed') {
                                    _this.notificationService.showError(err.Message);
                                }
                                _this.closePopupLoadingData();
                            });
                        }
                    }
                };
                DuyetKetQuaNewDetailedComponent.prototype.searchChanges = function ($event) {
                    var _this = this;
                    this.searchString = $event;
                    if (!this.searchString) {
                        setTimeout(function () {
                            _this.setDataSourceForGrid();
                        }, 0);
                    }
                };
                DuyetKetQuaNewDetailedComponent.prototype.onKey = function (event) {
                    var _this = this;
                    if (event.key == "Enter") {
                        if (this.search.SearchStringBarCode != undefined && this.search.SearchStringBarCode != null && this.search.SearchStringBarCode != '') {
                            this.TimkiemNangCao();
                        }
                        else {
                            setTimeout(function () {
                                _this.setDataSourceForGrid();
                            }, 0);
                        }
                    }
                };
                DuyetKetQuaNewDetailedComponent.prototype.setDataSourceForGrid = function () {
                    this.ChiTietKetQuaXetNghiems = [];
                    if (this.searchString == null || this.searchString === '') {
                        this.ChiTietKetQuaXetNghiems = this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.slice();
                    }
                    else {
                        var search_1 = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(this.searchString).toLowerCase().trim().replace(/đ/g, 'd');
                        this.ChiTietKetQuaXetNghiems = this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.slice().filter(function (o) { return (o.GiaTriCu != null && src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(o.GiaTriCu).toLowerCase().replace(/đ/g, 'd')
                            .indexOf(search_1) >= 0)
                            || (o.Ten != null && src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(o.Ten).toLowerCase().replace(/đ/g, 'd')
                                .indexOf(search_1) >= 0)
                            || (o.GiaTriTuMay != null && src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(o.GiaTriTuMay).toLowerCase().replace(/đ/g, 'd')
                                .indexOf(search_1) >= 0)
                            || (o.GiaTriNhapTay != null && src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(o.GiaTriNhapTay).toLowerCase().replace(/đ/g, 'd')
                                .indexOf(search_1) >= 0)
                            || (o.Csbt != null && src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(o.Csbt).toLowerCase().replace(/đ/g, 'd')
                                .indexOf(search_1) >= 0)
                            || (o.DonVi != null && src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(o.DonVi).toLowerCase().replace(/đ/g, 'd')
                                .indexOf(search_1) >= 0)
                            || (o.ThoiDiemGuiYeuCauDisplay != null &&
                                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(o.ThoiDiemGuiYeuCauDisplay).toLowerCase().replace(/đ/g, 'd')
                                    .indexOf(search_1) >= 0)
                            || (o.ThoiDiemNhanKetQuaDisplay != null &&
                                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(o.ThoiDiemNhanKetQuaDisplay).toLowerCase().replace(/đ/g, 'd')
                                    .indexOf(search_1) >= 0)
                            || (o.TenMayXetNghiem != null && src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(o.TenMayXetNghiem).toLowerCase().replace(/đ/g, 'd')
                                .indexOf(search_1) >= 0)
                            || (o.NguoiDuyet != null && src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(o.NguoiDuyet).toLowerCase().replace(/đ/g, 'd')
                                .indexOf(search_1) >= 0)
                            || (o.NgayDuyetDisplay != null && src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(o.NgayDuyetDisplay).toLowerCase().replace(/đ/g, 'd')
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
                DuyetKetQuaNewDetailedComponent.prototype.checkHiddenIcon = function (item, danhSachLoaiMau) {
                    // tslint:disable-next-line: prefer-for-of
                    for (var i = 0; i < danhSachLoaiMau.length; i++) {
                        if (item === danhSachLoaiMau[i]) {
                            return true;
                        }
                    }
                    return false;
                };
                DuyetKetQuaNewDetailedComponent.prototype.setUpDataTooltip = function (dataItem) {
                    this.displayToolTipGridNguoiYeuCau = dataItem.items[0].NguoiYeuCau;
                    this.displayToolTipGridNgayYeuCau = dataItem.items[0].NgayYeuCauDisplay;
                    this.displayToolTipGridLyDoYeuCau = dataItem.items[0].LyDoYeuCau;
                    this.displayToolTipGridNguoiDuyet = dataItem.items[0].NguoiDuyetChayLai;
                    this.displayToolTipGridNgayDuyet = dataItem.items[0].NgayDuyetDisplay;
                };
                DuyetKetQuaNewDetailedComponent.prototype.CheckHighlight = function (dataItem, currentValue) {
                    dataItem.GiaTriDuyet = currentValue;
                    // dataItem.HighLightClass = !dataItem.GiaTriDuyet && dataItem.Duyet === false && dataItem.Level !== 1 ? 'bg-row-lightRed' : '';
                    dataItem.HighLightClass = (dataItem.GiaTriDuyet == null || dataItem.GiaTriDuyet == '')
                        && dataItem.Duyet === false
                        && dataItem.IsParent
                        && dataItem.DaGoiDuyet == true ? 'bg-row-lightRed' : '';
                };
                DuyetKetQuaNewDetailedComponent.prototype.processId = function (dataItem) {
                    return dataItem.items.map(function (x) { return x.NhomId; })[0];
                };
                DuyetKetQuaNewDetailedComponent.prototype.showPopupDownloadData = function () {
                    if (this.popupLoadingData == null
                        || this.popupLoadingData.openDialogs == null
                        || (this.popupLoadingData.openDialogs != null && this.popupLoadingData.openDialogs.length === 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang tải dữ liệu...' },
                        });
                    }
                };
                DuyetKetQuaNewDetailedComponent.prototype.isMauKhongDat = function (mau, danhSachMauKhongDat) {
                    // tslint:disable-next-line: prefer-for-of
                    for (var i = 0; i < danhSachMauKhongDat.length; i++) {
                        if (mau === danhSachMauKhongDat[i]) {
                            return true;
                        }
                    }
                    return false;
                };
                DuyetKetQuaNewDetailedComponent.prototype.checkBoxNhomChange = function (event, data) {
                    var lstDataCurrent = this.gridChiTietDuyetKetQuaXn.getAllDataFromDatasource();
                    lstDataCurrent = lstDataCurrent.filter(function (x) { return x.NhomDichVuBenhVienId == data.items[0].NhomDichVuBenhVienId; });
                    lstDataCurrent.forEach(function (element) {
                        element.CheckBox = event;
                        element.CheckBoxParent = event;
                    });
                    this.gridChiTietDuyetKetQuaXn._gridDataSource = Object.assign({}, lstDataCurrent);
                    this.gridChiTietDuyetKetQuaXn.setDataSource();
                };
                DuyetKetQuaNewDetailedComponent.prototype.checkBoxDichVu = function (dataItem, event) {
                    var lstDataCurrent = this.gridChiTietDuyetKetQuaXn.getAllDataFromDatasource();
                    var lstDataCurrentParent = lstDataCurrent.filter(function (x) { return x.Id == dataItem.Id; });
                    var lstDataCurrentLv2 = lstDataCurrent.filter(function (x) { return x.Level == 2; });
                    var lstDataCurrentLv3 = lstDataCurrent.filter(function (x) { return x.Level == 3; });
                    lstDataCurrentParent[0].IdChilds.forEach(function (parentId) {
                        if (lstDataCurrentLv2.length > 0) {
                            lstDataCurrentLv2.forEach(function (element) {
                                if (element.Id == parentId) {
                                    element.CheckBox = event;
                                }
                            });
                        }
                        if (lstDataCurrentLv3.length > 0) {
                            lstDataCurrentLv3.forEach(function (element) {
                                element.CheckBox = lstDataCurrentLv2.find(function (x) { return x.DichVuXetNghiemId == element.DichVuXetNghiemChaId; }) != null ? event : null;
                            });
                        }
                    });
                    if (lstDataCurrent.every(function (x) { return !x.CheckBox; })) {
                        lstDataCurrent.forEach(function (element) {
                            element.CheckBoxParent = false;
                        });
                    }
                    this.gridChiTietDuyetKetQuaXn._gridDataSource = Object.assign({}, lstDataCurrent);
                    this.gridChiTietDuyetKetQuaXn.setDataSource();
                };
                DuyetKetQuaNewDetailedComponent.prototype.changeQR = function ($event) {
                    // if ($event != null && typeof $event == "string" && $event.endsWith("@")) {
                    //   this.modelQRCode = $event;
                    //   var dataTimKiem = $event.split("|");
                    //   if (dataTimKiem.length > 1) {
                    //     this.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = dataTimKiem[0];
                    //   } else {
                    //     this.searchString = $event.slice(0, -1);
                    //     this.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = $event.slice(0, -1);
                    //   }
                    //   this.getThongTinYeuCauBenhNhan(this.timKiemThongTinBenhNhan);
                    // } else {
                    //   this.notificationService.showError(
                    //     "Không tìm thấy thông tin cần tìm."
                    //   );
                    // }
                    // this.isScanF1 = false;
                };
                DuyetKetQuaNewDetailedComponent.prototype.QuetMaQRCodeClick = function () {
                    var elementBarcode = document.getElementById("barcodeActive");
                    if (elementBarcode != undefined) {
                        elementBarcode.click();
                    }
                };
                DuyetKetQuaNewDetailedComponent.prototype.TimkiemNangCao = function () {
                    var _this = this;
                    if (this.search.ThoiDiemGoiDuyetTuFormat != null) {
                        this.search.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].formatDateTime(this.search.ThoiDiemGoiDuyetTuFormat, "dd/mm/yyyy");
                    }
                    else {
                        this.search.FromDate = null;
                    }
                    if (this.search.ThoiDiemGoiDuyetDenFormat != null) {
                        this.search.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].formatDateTime(this.search.ThoiDiemGoiDuyetDenFormat, "dd/mm/yyyy");
                    }
                    else {
                        this.search.ToDate = null;
                    }
                    this.apiService.post("DuyetKetQuaXetNghiem/TimKiemPhienXetNghiemGanNhat", this.search).subscribe(function (resultData) {
                        if (resultData != undefined && resultData != null) {
                            _this.router.navigateByUrl(_this.baseRoute + '/chi-tiet/' + resultData + '?holdQuery=true');
                            _this.duyetKqXetNghiemDetail.Id = resultData;
                            _this.id = resultData;
                            _this.GetById(resultData);
                        }
                    }, function (err) {
                        _this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                    });
                };
                DuyetKetQuaNewDetailedComponent.prototype.searchChangesNangCao = function ($event) {
                };
                DuyetKetQuaNewDetailedComponent.prototype.capNhat = function () {
                    var _this = this;
                    var dataCapNhat = this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems
                        .filter(function (o) { return o.DaDuyet && o.CheckBox; });
                    var dataCapNhatAssign = [];
                    dataCapNhat.forEach(function (val) { return dataCapNhatAssign.push(Object.assign({}, val)); });
                    if (dataCapNhat.length > 0) {
                        this.dialog.open(_dich_vu_can_cap_nhat_popup_dich_vu_can_cap_nhat_popup_component__WEBPACK_IMPORTED_MODULE_18__["DichVuCanCapNhatPopupComponent"], {
                            disableClose: true,
                            width: '1200px',
                            data: { Model: this.duyetKqXetNghiemDetail, DataChiTiet: dataCapNhatAssign, Title: "Các dịch vụ cập nhật" }
                        }).afterClosed().subscribe(function (result) {
                            if (result === "OK") {
                                _this.GetById(_this.id);
                            }
                        });
                    }
                    else {
                        this.dialog.open(src_app_shared_component_dialogs_notification_notification_component__WEBPACK_IMPORTED_MODULE_17__["NotificationComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "THÔNG BÁO", Message: "Vui lòng chọn dịch vụ đã duyệt để cập nhật." }
                        }).afterClosed().subscribe(function (result) {
                        });
                    }
                };
                DuyetKetQuaNewDetailedComponent.prototype.TooltipCustom = function (dataItem) {
                    if (dataItem != null && dataItem != '') {
                        this.kqNhapTay = dataItem;
                    }
                    else {
                        this.kqNhapTay = null;
                    }
                };
                DuyetKetQuaNewDetailedComponent.prototype.TooltipCustomKQD = function (dataItem) {
                    if (dataItem != null && dataItem != '') {
                        this.kqDuyet = dataItem;
                    }
                    else {
                        this.kqDuyet = null;
                    }
                };
                DuyetKetQuaNewDetailedComponent.prototype.TooltipCustomNgayDuyet = function (dataItem) {
                    var _this = this;
                    if (dataItem != undefined && dataItem != null) {
                        var valueObj = {
                            YeuCauTiepNhanId: dataItem.YeuCauTiepNhanId,
                            DichVuXetNghiemId: dataItem.DichVuXetNghiemId,
                            DichVuXetNghiemTen: dataItem.Ten,
                            KetQuaXetNghiemChiTietId: dataItem.Id
                        };
                        this.apiService.post("DuyetKetQuaXetNghiem/GetNgayDuyetKetQuaCu", valueObj).subscribe(function (resultData) {
                            if (resultData != null && resultData != undefined) {
                                _this.ngayDuyet = resultData;
                            }
                        }, function () {
                        });
                    }
                    else {
                        this.ngayDuyet = null;
                    }
                };
                DuyetKetQuaNewDetailedComponent.prototype.checkBoxAllChange = function (event) {
                    var lstDataCurrent = this.gridChiTietDuyetKetQuaXn.getAllDataFromDatasource();
                    this.checkAll = event;
                    lstDataCurrent.forEach(function (element) {
                        element.CheckBox = event;
                        element.CheckBoxParent = event;
                    });
                    this.gridChiTietDuyetKetQuaXn._gridDataSource = Object.assign({}, lstDataCurrent);
                    this.gridChiTietDuyetKetQuaXn.setDataSource();
                };
                DuyetKetQuaNewDetailedComponent.prototype.onKeydownGrid = function (obj) {
                    var self = this;
                    if (obj.FocusGridContent == true && obj.Event.code === "Enter" || obj.Event.code === "NumpadEnter" || obj.Event.code === 'ArrowRight' || obj.Event.code === 'ArrowLeft'
                        || obj.Event.code === 'ArrowDown' || obj.Event.code === 'ArrowUp') {
                        setTimeout(function () {
                            var cellFocused = obj.Sender.focusCell();
                            if (obj.Event.code === "Enter" || obj.Event.code === "NumpadEnter") {
                                if (obj.Event.target.id.indexOf('GiaTriDuyet-') >= 0) {
                                    var id_1 = Number(obj.Event.target.id.replace('GiaTriDuyet-', ''));
                                    var dataAll_1 = [];
                                    obj.Sender.data.data.forEach(function (item) {
                                        item.items.filter(function (z) { return !z.DaDuyet; }).forEach(function (e) {
                                            dataAll_1.push(e);
                                        });
                                    });
                                    var index = dataAll_1.findIndex((function (z) { return z.Id == id_1; }));
                                    var dataNext = dataAll_1[index + 1];
                                    if (dataNext != undefined && dataNext != null) {
                                        var idNext_1 = null;
                                        if (dataNext.IdChilds.length > 0 && dataNext.Level != 2 && dataNext.Level != 3) {
                                            idNext_1 = dataAll_1[index + 2].Id;
                                        }
                                        else {
                                            idNext_1 = dataAll_1[index + 1].Id;
                                        }
                                        $(document).ready(function () {
                                            //or if you want to be more efficient and use less characters, chain it
                                            $("#GiaTriDuyet-" + idNext_1).focus().select();
                                        });
                                    }
                                }
                                //Action on Đậm KQ
                                if (cellFocused != undefined && cellFocused.dataItem != null) {
                                    if (cellFocused.colIndex == 6) {
                                        cellFocused.dataItem.ToDamGiaTri = cellFocused.dataItem.ToDamGiaTri == true ? false : true;
                                    }
                                }
                            }
                            else {
                                if (obj.Event.code === 'ArrowRight' || obj.Event.code === 'ArrowLeft' || obj.Event.code === 'ArrowDown' || obj.Event.code === 'ArrowUp') {
                                    if (cellFocused != undefined && cellFocused.dataItem != null) {
                                        //Action on KQ Duyệt
                                        if (cellFocused.colIndex == 5) {
                                            //Đang focus vào input mà di chuyển phím thì nó phải nhấn 2 lần mới ra khỏi input dc, chỗ này xứ lý vấn đề đó
                                            if (self.currentCellFocused != null && (self.currentCellFocused.colIndex != cellFocused.colIndex || self.currentCellFocused.rowIndex != cellFocused.rowIndex)) {
                                                $("#GiaTriDuyet-" + cellFocused.dataItem.Id).focus().select();
                                            }
                                            else {
                                                var nextCellFocus = null;
                                                if (obj.Event.code === 'ArrowRight') {
                                                    nextCellFocus = self.gridChiTietDuyetKetQuaXn.grid.focusCell(cellFocused.rowIndex, cellFocused.colIndex + 1);
                                                }
                                                if (obj.Event.code === 'ArrowLeft') {
                                                    nextCellFocus = self.gridChiTietDuyetKetQuaXn.grid.focusCell(cellFocused.rowIndex, cellFocused.colIndex - 1);
                                                }
                                                if (obj.Event.code === 'ArrowDown') {
                                                    nextCellFocus = self.gridChiTietDuyetKetQuaXn.grid.focusCell(cellFocused.rowIndex + 1, cellFocused.colIndex);
                                                }
                                                if (obj.Event.code === 'ArrowUp') {
                                                    nextCellFocus = self.gridChiTietDuyetKetQuaXn.grid.focusCell(cellFocused.rowIndex - 1, cellFocused.colIndex);
                                                }
                                                if (nextCellFocus != undefined && nextCellFocus.dataItem != null) {
                                                    $("#GiaTriDuyet-" + nextCellFocus.dataItem.Id).focus().select();
                                                    cellFocused = nextCellFocus;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            self.cdRef.detectChanges();
                            self.currentCellFocused = cellFocused;
                        });
                    }
                };
                DuyetKetQuaNewDetailedComponent.prototype.showLoading = function (title) {
                    if (title === void 0) { title = 'Đang lưu dữ liệu...'; }
                    return this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: title }
                    });
                };
                DuyetKetQuaNewDetailedComponent.prototype.closeLoading = function (loading) {
                    loading.close();
                };
                return DuyetKetQuaNewDetailedComponent;
            }());
            DuyetKetQuaNewDetailedComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
                { type: src_app_core_error_error_service__WEBPACK_IMPORTED_MODULE_9__["ErrorService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('menuTrigger', { read: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuTrigger"], static: false })
            ], DuyetKetQuaNewDetailedComponent.prototype, "trigger", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomTemplate', { static: true })
            ], DuyetKetQuaNewDetailedComponent.prototype, "nhomTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenTemplate', { static: true })
            ], DuyetKetQuaNewDetailedComponent.prototype, "tenTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('kqCuTemplate', { static: true })
            ], DuyetKetQuaNewDetailedComponent.prototype, "kqCuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('kqTuMayTemplate', { static: true })
            ], DuyetKetQuaNewDetailedComponent.prototype, "kqTuMayTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('kqNhapTayTemplate', { static: true })
            ], DuyetKetQuaNewDetailedComponent.prototype, "kqNhapTayTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('kqDuyetTemplate', { static: true })
            ], DuyetKetQuaNewDetailedComponent.prototype, "kqDuyetTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('damKQTemplate', { static: true })
            ], DuyetKetQuaNewDetailedComponent.prototype, "damKQTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chiSoBinhThuongTemplate', { static: true })
            ], DuyetKetQuaNewDetailedComponent.prototype, "chiSoBinhThuongTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donViTinhTemplate', { static: true })
            ], DuyetKetQuaNewDetailedComponent.prototype, "donViTinhTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gioTiepNhanTemplate', { static: true })
            ], DuyetKetQuaNewDetailedComponent.prototype, "gioTiepNhanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gioNhanMauTemplate', { static: true })
            ], DuyetKetQuaNewDetailedComponent.prototype, "gioNhanMauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mayXNTemplate', { static: true })
            ], DuyetKetQuaNewDetailedComponent.prototype, "mayXNTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nguoiDuyetTemplate', { static: true })
            ], DuyetKetQuaNewDetailedComponent.prototype, "nguoiDuyetTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayDuyetTemplate', { static: true })
            ], DuyetKetQuaNewDetailedComponent.prototype, "ngayDuyetTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('duyetTemplate', { static: true })
            ], DuyetKetQuaNewDetailedComponent.prototype, "duyetTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('duyetHeaderColumnTemplate', { static: true })
            ], DuyetKetQuaNewDetailedComponent.prototype, "duyetHeaderColumnTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkBoxHeaderTemplate', { static: true })
            ], DuyetKetQuaNewDetailedComponent.prototype, "checkBoxHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridChiTietDuyetKetQuaXn', { static: false })
            ], DuyetKetQuaNewDetailedComponent.prototype, "gridChiTietDuyetKetQuaXn", void 0);
            DuyetKetQuaNewDetailedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duyet-ket-qua-new-detailed',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-ket-qua-new-detailed.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-detailed/duyet-ket-qua-new-detailed.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-ket-qua-new-detailed.component.scss */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-detailed/duyet-ket-qua-new-detailed.component.scss")).default]
                })
            ], DuyetKetQuaNewDetailedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-list/duyet-ket-qua-new-list.component.scss": 
        /*!************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-list/duyet-ket-qua-new-list.component.scss ***!
          \************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi94ZXQtbmdoaWVtL2R1eWV0LWtldC1xdWEtbmV3L2R1eWV0LWtldC1xdWEtbmV3LWxpc3QvZHV5ZXQta2V0LXF1YS1uZXctbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-list/duyet-ket-qua-new-list.component.ts": 
        /*!**********************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-list/duyet-ket-qua-new-list.component.ts ***!
          \**********************************************************************************************************************/
        /*! exports provided: DuyetKetQuaNewListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetKetQuaNewListComponent", function () { return DuyetKetQuaNewListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
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
            /* harmony import */ var _duyet_ket_qua_new_model__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../duyet-ket-qua-new.model */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new.model.ts");
            /* harmony import */ var _duyet_ket_qua_nhom_dv_list_new_popup_duyet_ket_qua_nhom_dv_list_new_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../duyet-ket-qua-nhom-dv-list-new-popup/duyet-ket-qua-nhom-dv-list-new-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-nhom-dv-list-new-popup/duyet-ket-qua-nhom-dv-list-new-popup.component.ts");
            var DuyetKetQuaNewListComponent = /** @class */ (function () {
                function DuyetKetQuaNewListComponent(router, dialog, apiService, authService, route, renderer, notificationService) {
                    this.router = router;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.authService = authService;
                    this.route = route;
                    this.renderer = renderer;
                    this.notificationService = notificationService;
                    this.addtionStringDefault = null;
                    this.gridColumns = [];
                    this.gridColumnChilds = [];
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
                    this.search = new _duyet_ket_qua_new_model__WEBPACK_IMPORTED_MODULE_20__["SearchNew"]();
                    this.query = null;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7___default.a;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_8___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_9___default.a;
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14___default.a;
                    this.icDone = _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_15___default.a;
                    this.validationErrors = null;
                    this.additionalSearchString = null;
                    this.holdQuery = null;
                    this.baseRoute = 'xet-nghiem/duyet-ket-qua-new';
                    this.groups = [{ field: 'NhomXetNghiemDisplay' }];
                    this.isScan = false;
                    this.inPhieuDuyetKetQua = new _duyet_ket_qua_new_model__WEBPACK_IMPORTED_MODULE_20__["PhieuDuyetKetQuaNew"]();
                    this.sort = [
                        {
                            field: "TrangThai",
                            dir: "asc",
                        },
                    ];
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
                DuyetKetQuaNewListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DuyetKetQuaXetNghiem;
                    var dateNow = new Date();
                    this.search.ThoiDiemGoiDuyetTuFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
                    this.search.ThoiDiemGoiDuyetDenFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
                    if (this.search.ThoiDiemGoiDuyetTuFormat != null) {
                        this.search.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_18__["CommonService"].formatDateTime(this.search.ThoiDiemGoiDuyetTuFormat, "dd/mm/yyyy");
                    }
                    else {
                        this.search.FromDate = null;
                    }
                    if (this.search.ThoiDiemGoiDuyetDenFormat != null) {
                        this.search.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_18__["CommonService"].formatDateTime(this.search.ThoiDiemGoiDuyetDenFormat, "dd/mm/yyyy");
                    }
                    else {
                        this.search.ToDate = null;
                    }
                    var queryString = JSON.stringify(this.search);
                    this.addtionStringDefault = queryString;
                    this.backWithSearch();
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
                DuyetKetQuaNewListComponent.prototype.backWithSearch = function () {
                    var hasLocalSearchString = false;
                    if (this.route.snapshot.queryParams.holdQuery != undefined) {
                        var holdQuery = this.route.snapshot.queryParams.holdQuery;
                        if (holdQuery != null && holdQuery) {
                            var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_6__["LocalStorageHelper"].getItem("adtDuyetKqXetNghiemNew");
                            if (additionalSearchString != null) {
                                this.search = JSON.parse(additionalSearchString);
                                if (this.search.ThoiDiemGoiDuyetTuFormat != undefined && this.search.ThoiDiemGoiDuyetTuFormat != null && this.search.ThoiDiemGoiDuyetTuFormat != "") {
                                    this.search.ThoiDiemGoiDuyetTuFormat = new Date(this.search.ThoiDiemGoiDuyetTuFormat);
                                }
                                else {
                                    this.search.ThoiDiemGoiDuyetTuFormat = null;
                                }
                                if (this.search.ThoiDiemGoiDuyetTuFormat != undefined && this.search.ThoiDiemGoiDuyetTuFormat != null && this.search.ThoiDiemGoiDuyetTuFormat != "") {
                                    this.search.ThoiDiemGoiDuyetTuFormat = new Date(this.search.ThoiDiemGoiDuyetTuFormat);
                                }
                                else {
                                    this.search.ThoiDiemGoiDuyetTuFormat = null;
                                }
                                this.addtionStringDefault = additionalSearchString;
                                this.gridParent.additionalSearchString = additionalSearchString;
                                hasLocalSearchString = true;
                            }
                        }
                    }
                    if (!hasLocalSearchString) {
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_6__["LocalStorageHelper"].removeItem("adtDuyetKqXetNghiemNew");
                    }
                };
                DuyetKetQuaNewListComponent.prototype.changeNgay = function () {
                    this.Timkiem();
                };
                DuyetKetQuaNewListComponent.prototype.searchChanges = function (event) {
                    var self = this;
                    if (event != undefined && (event == null || event == "")) {
                        self.search.SearchString = null;
                        self.Timkiem();
                    }
                };
                DuyetKetQuaNewListComponent.prototype.onKey = function (event) {
                    if (event.keyCode === 13) {
                        this.Timkiem();
                    }
                };
                DuyetKetQuaNewListComponent.prototype.Timkiem = function () {
                    this.router.navigateByUrl('/xet-nghiem/duyet-ket-qua-new?holdQuery=true');
                    if (this.search.ThoiDiemGoiDuyetTuFormat != null) {
                        this.search.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_18__["CommonService"].formatDateTime(this.search.ThoiDiemGoiDuyetTuFormat, "dd/mm/yyyy");
                    }
                    else {
                        this.search.FromDate = null;
                    }
                    if (this.search.ThoiDiemGoiDuyetDenFormat != null) {
                        this.search.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_18__["CommonService"].formatDateTime(this.search.ThoiDiemGoiDuyetDenFormat, "dd/mm/yyyy");
                    }
                    else {
                        this.search.ToDate = null;
                    }
                    var queryString = JSON.stringify(this.search);
                    this.gridParent._additionalSearchString = queryString;
                    this.gridParent.search();
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_6__["LocalStorageHelper"].setItem("adtDuyetKqXetNghiemNew", queryString);
                };
                DuyetKetQuaNewListComponent.prototype.exportExcel = function () {
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
                DuyetKetQuaNewListComponent.prototype.showPopupLoadingData = function (message) {
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
                DuyetKetQuaNewListComponent.prototype.showPopupDownloadData = function () {
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
                DuyetKetQuaNewListComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData) {
                        this.popupLoadingData.close();
                    }
                };
                DuyetKetQuaNewListComponent.prototype.xemChiTiet = function (id) {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
                        this.router.navigateByUrl(this.baseRoute + '/chi-tiet/' + id + '?holdQuery=true');
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DuyetKetQuaNewListComponent.prototype.CheckboxChange = function (event, text) {
                    if (text == 'choduyet') {
                        this.search.ChoDuyet = event;
                    }
                    if (text == 'dangthuchien') {
                        this.search.DangThucHien = event;
                    }
                    if (text == 'daduyet') {
                        this.search.DaDuyet = event;
                    }
                    //this.Timkiem();
                };
                DuyetKetQuaNewListComponent.prototype.nhomDichVuCanIn = function (phienXetNghiemId, yeuCauTiepNhanId) {
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
                        self.apiService.get("DuyetKetQuaXetNghiem/GetNhomDichVuDuyet?phienXetNghiemId=" + phienXetNghiemId).subscribe(function (resultData) {
                            if (resultData != undefined && resultData != null) {
                                self.dialog.open(_duyet_ket_qua_nhom_dv_list_new_popup_duyet_ket_qua_nhom_dv_list_new_popup_component__WEBPACK_IMPORTED_MODULE_21__["DuyetKetQuaNhomDvListNewPopupComponent"], {
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
                DuyetKetQuaNewListComponent.prototype.download = function () { };
                DuyetKetQuaNewListComponent.prototype.QuetMaQRCodeClick = function () {
                    var elementBarcode = document.getElementById('barcodeActive');
                    if (elementBarcode) {
                        elementBarcode.click();
                    }
                };
                DuyetKetQuaNewListComponent.prototype.changeQR = function (changeQr) {
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
                DuyetKetQuaNewListComponent.prototype.keyEvent = function (event) {
                    // tslint:disable-next-line: deprecation
                    if (event.keyCode === 81 && event.ctrlKey && this.isScan !== true) {
                        this.isScan = true;
                        event.preventDefault();
                        this.QuetMaQRCodeClick();
                    }
                };
                DuyetKetQuaNewListComponent.prototype.setUpDataTooltip = function (dataItem) {
                    this.displayToolTipGridNguoiYeuCau = dataItem.items[0].NguoiYeuCau;
                    this.displayToolTipGridNgayYeuCau = dataItem.items[0].NgayYeuCauDisplay;
                    this.displayToolTipGridLyDoYeuCau = dataItem.items[0].LyDoYeuCau;
                    this.displayToolTipGridNguoiDuyet = dataItem.items[0].NguoiDuyet;
                    this.displayToolTipGridNgayDuyet = dataItem.items[0].NgayDuyetDisplay;
                };
                DuyetKetQuaNewListComponent.prototype.checkHiddenIcon = function (item, danhSachLoaiMau) {
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
                DuyetKetQuaNewListComponent.prototype.isMauKhongDat = function (mau, danhSachMauKhongDat) {
                    // tslint:disable-next-line: prefer-for-of
                    for (var i = 0; i < danhSachMauKhongDat.length; i++) {
                        if (mau === danhSachMauKhongDat[i]) {
                            return true;
                        }
                    }
                    return false;
                };
                return DuyetKetQuaNewListComponent;
            }());
            DuyetKetQuaNewListComponent.ctorParameters = function () { return [
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
            ], DuyetKetQuaNewListComponent.prototype, "trigger", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('barcodeTemplate', { static: true })
            ], DuyetKetQuaNewListComponent.prototype, "barcodeTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gioiTinhTemplate', { static: true })
            ], DuyetKetQuaNewListComponent.prototype, "gioiTinhTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
            ], DuyetKetQuaNewListComponent.prototype, "trangThaiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayThucHienTemplate', { static: true })
            ], DuyetKetQuaNewListComponent.prototype, "ngayThucHienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayDuyetKqTemplate', { static: true })
            ], DuyetKetQuaNewListComponent.prototype, "ngayDuyetKqTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thoiGianChiDinhTemplate', { static: true })
            ], DuyetKetQuaNewListComponent.prototype, "thoiGianChiDinhTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomXetNghiemTemplate', { static: true })
            ], DuyetKetQuaNewListComponent.prototype, "nhomXetNghiemTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], DuyetKetQuaNewListComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDetail', { static: false })
            ], DuyetKetQuaNewListComponent.prototype, "gridDetail", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridParent', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__["GridComponent"], static: true })
            ], DuyetKetQuaNewListComponent.prototype, "gridParent", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])
            ], DuyetKetQuaNewListComponent.prototype, "keyEvent", null);
            DuyetKetQuaNewListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duyet-ket-qua-new-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-ket-qua-new-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-list/duyet-ket-qua-new-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-ket-qua-new-list.component.scss */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-list/duyet-ket-qua-new-list.component.scss")).default]
                })
            ], DuyetKetQuaNewListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-popup/duyet-ket-qua-new-popup.component.scss": 
        /*!**************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-popup/duyet-ket-qua-new-popup.component.scss ***!
          \**************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".div-content {\n  margin-top: 20px !important;\n}\n\n.div-content-spec {\n  margin-top: 30px !important;\n}\n\n.content-1 {\n  border-bottom: 1px solid var(--foreground-divider);\n}\n\nfieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em;\n  padding-bottom: 0.625em;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline-block !important;\n}\n\n.po-h-radio {\n  margin-top: -2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0vZHV5ZXQta2V0LXF1YS1uZXcvZHV5ZXQta2V0LXF1YS1uZXctcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx4ZXQtbmdoaWVtXFxkdXlldC1rZXQtcXVhLW5ld1xcZHV5ZXQta2V0LXF1YS1uZXctcG9wdXBcXGR1eWV0LWtldC1xdWEtbmV3LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4veGV0LW5naGllbS9kdXlldC1rZXQtcXVhLW5ldy9kdXlldC1rZXQtcXVhLW5ldy1wb3B1cC9kdXlldC1rZXQtcXVhLW5ldy1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0RBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi94ZXQtbmdoaWVtL2R1eWV0LWtldC1xdWEtbmV3L2R1eWV0LWtldC1xdWEtbmV3LXBvcHVwL2R1eWV0LWtldC1xdWEtbmV3LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdi1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4uZGl2LWNvbnRlbnQtc3BlYyB7XG4gIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbnRlbnQtMSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xufVxuXG5maWVsZHNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgcGFkZGluZy10b3A6IDAuMzVlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW07XG4gIHBhZGRpbmctbGVmdDogMC43NWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1ZW07XG4gIGJvcmRlcjogMXB4ICNlMGUwZTA7XG4gIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcbn1cblxuZmllbGRzZXQgLml0ZW1fcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmZpZWxkc2V0IHVsID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmZpZWxkc2V0IHVsLmlubGluZSA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5wby1oLXJhZGlvIHtcbiAgbWFyZ2luLXRvcDogLTJweDtcbn0iLCIuZGl2LWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtY29udGVudC1zcGVjIHtcbiAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudC0xIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG59XG5cbmZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbTtcbiAgYm9yZGVyOiAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xufVxuXG5maWVsZHNldCAuaXRlbV9yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuZmllbGRzZXQgdWwgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuZmllbGRzZXQgdWwuaW5saW5lID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLnBvLWgtcmFkaW8ge1xuICBtYXJnaW4tdG9wOiAtMnB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-popup/duyet-ket-qua-new-popup.component.ts": 
        /*!************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-popup/duyet-ket-qua-new-popup.component.ts ***!
          \************************************************************************************************************************/
        /*! exports provided: DuyetKetQuaNewPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetKetQuaNewPopupComponent", function () { return DuyetKetQuaNewPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            var DuyetKetQuaNewPopupComponent = /** @class */ (function () {
                function DuyetKetQuaNewPopupComponent(data, dialogRef, dialog) {
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
                DuyetKetQuaNewPopupComponent.prototype.ngOnInit = function () {
                };
                DuyetKetQuaNewPopupComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                DuyetKetQuaNewPopupComponent.prototype.Khong = function () {
                    this.dialogRef.close();
                };
                DuyetKetQuaNewPopupComponent.prototype.Co = function (option) {
                    if (option === 'Print') {
                        var dialogRef = void 0;
                        var dichVuDuocCheck = this.data.DataChiTietXetNghiem.filter(function (z) { return z.CheckBox; });
                        var objKetQuaChonIn = {
                            LoaiIn: 3,
                            ListIn: dichVuDuocCheck
                        };
                        this.dialogRef.close(objKetQuaChonIn);
                    }
                    else if (option === 'Yes') {
                        this.dialogRef.close(option);
                    }
                    else
                        this.dialogRef.close(null);
                };
                return DuyetKetQuaNewPopupComponent;
            }());
            DuyetKetQuaNewPopupComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
            ]; };
            DuyetKetQuaNewPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duyet-ket-qua-new-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-ket-qua-new-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-popup/duyet-ket-qua-new-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-ket-qua-new-popup.component.scss */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-popup/duyet-ket-qua-new-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], DuyetKetQuaNewPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-routing.module.ts": 
        /*!***********************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-routing.module.ts ***!
          \***********************************************************************************************/
        /*! exports provided: DuyetKetQuaNewRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetKetQuaNewRoutingModule", function () { return DuyetKetQuaNewRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _duyet_ket_qua_new_detailed_duyet_ket_qua_new_detailed_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./duyet-ket-qua-new-detailed/duyet-ket-qua-new-detailed.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-detailed/duyet-ket-qua-new-detailed.component.ts");
            /* harmony import */ var _duyet_ket_qua_new_list_duyet_ket_qua_new_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./duyet-ket-qua-new-list/duyet-ket-qua-new-list.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-list/duyet-ket-qua-new-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _duyet_ket_qua_new_list_duyet_ket_qua_new_list_component__WEBPACK_IMPORTED_MODULE_7__["DuyetKetQuaNewListComponent"],
                    data: {
                        title: 'Danh sách duyệt kết quả xét nghiệm',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DuyetKetQuaXetNghiem,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
                {
                    path: 'chi-tiet/:id',
                    component: _duyet_ket_qua_new_detailed_duyet_ket_qua_new_detailed_component__WEBPACK_IMPORTED_MODULE_6__["DuyetKetQuaNewDetailedComponent"],
                    data: {
                        title: 'Chi tiết duyệt kết quả xét nghiệm',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DuyetKetQuaXetNghiem,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                }
            ];
            var DuyetKetQuaNewRoutingModule = /** @class */ (function () {
                function DuyetKetQuaNewRoutingModule() {
                }
                return DuyetKetQuaNewRoutingModule;
            }());
            DuyetKetQuaNewRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], DuyetKetQuaNewRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new.module.ts": 
        /*!***************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new.module.ts ***!
          \***************************************************************************************/
        /*! exports provided: DuyetKetQuaNewModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetKetQuaNewModule", function () { return DuyetKetQuaNewModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _duyet_ket_qua_new_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./duyet-ket-qua-new-routing.module */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-routing.module.ts");
            /* harmony import */ var _duyet_ket_qua_new_popup_duyet_ket_qua_new_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./duyet-ket-qua-new-popup/duyet-ket-qua-new-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-popup/duyet-ket-qua-new-popup.component.ts");
            /* harmony import */ var _duyet_ket_qua_phieu_new_popup_duyet_ket_qua_phieu_new_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./duyet-ket-qua-phieu-new-popup/duyet-ket-qua-phieu-new-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-phieu-new-popup/duyet-ket-qua-phieu-new-popup.component.ts");
            /* harmony import */ var _duyet_ket_qua_nhom_dv_list_new_popup_duyet_ket_qua_nhom_dv_list_new_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./duyet-ket-qua-nhom-dv-list-new-popup/duyet-ket-qua-nhom-dv-list-new-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-nhom-dv-list-new-popup/duyet-ket-qua-nhom-dv-list-new-popup.component.ts");
            /* harmony import */ var _duyet_ket_qua_new_list_duyet_ket_qua_new_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./duyet-ket-qua-new-list/duyet-ket-qua-new-list.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-list/duyet-ket-qua-new-list.component.ts");
            /* harmony import */ var _duyet_ket_qua_in_nhom_dv_list_new_popup_duyet_ket_qua_in_nhom_dv_list_new_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./duyet-ket-qua-in-nhom-dv-list-new-popup/duyet-ket-qua-in-nhom-dv-list-new-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-in-nhom-dv-list-new-popup/duyet-ket-qua-in-nhom-dv-list-new-popup.component.ts");
            /* harmony import */ var _duyet_ket_qua_new_detailed_duyet_ket_qua_new_detailed_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./duyet-ket-qua-new-detailed/duyet-ket-qua-new-detailed.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new-detailed/duyet-ket-qua-new-detailed.component.ts");
            /* harmony import */ var _chon_loai_ket_qua_xet_nghiem_new_popup_chon_loai_ket_qua_xet_nghiem_new_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chon-loai-ket-qua-xet-nghiem-new-popup/chon-loai-ket-qua-xet-nghiem-new-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/chon-loai-ket-qua-xet-nghiem-new-popup/chon-loai-ket-qua-xet-nghiem-new-popup.component.ts");
            /* harmony import */ var _dich_vu_can_cap_nhat_popup_dich_vu_can_cap_nhat_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dich-vu-can-cap-nhat-popup/dich-vu-can-cap-nhat-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/dich-vu-can-cap-nhat-popup/dich-vu-can-cap-nhat-popup.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _duyet_ket_qua_new_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./duyet-ket-qua-new.service */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            var DuyetKetQuaNewModule = /** @class */ (function () {
                function DuyetKetQuaNewModule() {
                }
                return DuyetKetQuaNewModule;
            }());
            DuyetKetQuaNewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _duyet_ket_qua_new_popup_duyet_ket_qua_new_popup_component__WEBPACK_IMPORTED_MODULE_4__["DuyetKetQuaNewPopupComponent"],
                        _duyet_ket_qua_phieu_new_popup_duyet_ket_qua_phieu_new_popup_component__WEBPACK_IMPORTED_MODULE_5__["DuyetKetQuaPhieuNewPopupComponent"],
                        _duyet_ket_qua_nhom_dv_list_new_popup_duyet_ket_qua_nhom_dv_list_new_popup_component__WEBPACK_IMPORTED_MODULE_6__["DuyetKetQuaNhomDvListNewPopupComponent"],
                        _duyet_ket_qua_new_list_duyet_ket_qua_new_list_component__WEBPACK_IMPORTED_MODULE_7__["DuyetKetQuaNewListComponent"],
                        _duyet_ket_qua_in_nhom_dv_list_new_popup_duyet_ket_qua_in_nhom_dv_list_new_popup_component__WEBPACK_IMPORTED_MODULE_8__["DuyetKetQuaInNhomDvListNewPopupComponent"],
                        _duyet_ket_qua_new_detailed_duyet_ket_qua_new_detailed_component__WEBPACK_IMPORTED_MODULE_9__["DuyetKetQuaNewDetailedComponent"],
                        _chon_loai_ket_qua_xet_nghiem_new_popup_chon_loai_ket_qua_xet_nghiem_new_popup_component__WEBPACK_IMPORTED_MODULE_10__["ChonLoaiKetQuaXetNghiemNewPopupComponent"],
                        _dich_vu_can_cap_nhat_popup_dich_vu_can_cap_nhat_popup_component__WEBPACK_IMPORTED_MODULE_11__["DichVuCanCapNhatPopupComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _duyet_ket_qua_new_routing_module__WEBPACK_IMPORTED_MODULE_3__["DuyetKetQuaNewRoutingModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_13__["TooltipModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_17__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_15__["BreadcrumbsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_19__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltipModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"],
                    ],
                    providers: [
                        _duyet_ket_qua_new_service__WEBPACK_IMPORTED_MODULE_24__["DuyetKetQuaNewService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_25__["BaseService"], useClass: _duyet_ket_qua_new_service__WEBPACK_IMPORTED_MODULE_24__["DuyetKetQuaNewService"] },
                    ],
                    entryComponents: [
                        _duyet_ket_qua_new_popup_duyet_ket_qua_new_popup_component__WEBPACK_IMPORTED_MODULE_4__["DuyetKetQuaNewPopupComponent"],
                        _duyet_ket_qua_phieu_new_popup_duyet_ket_qua_phieu_new_popup_component__WEBPACK_IMPORTED_MODULE_5__["DuyetKetQuaPhieuNewPopupComponent"],
                        _duyet_ket_qua_nhom_dv_list_new_popup_duyet_ket_qua_nhom_dv_list_new_popup_component__WEBPACK_IMPORTED_MODULE_6__["DuyetKetQuaNhomDvListNewPopupComponent"],
                        _duyet_ket_qua_in_nhom_dv_list_new_popup_duyet_ket_qua_in_nhom_dv_list_new_popup_component__WEBPACK_IMPORTED_MODULE_8__["DuyetKetQuaInNhomDvListNewPopupComponent"],
                        _chon_loai_ket_qua_xet_nghiem_new_popup_chon_loai_ket_qua_xet_nghiem_new_popup_component__WEBPACK_IMPORTED_MODULE_10__["ChonLoaiKetQuaXetNghiemNewPopupComponent"],
                        _dich_vu_can_cap_nhat_popup_dich_vu_can_cap_nhat_popup_component__WEBPACK_IMPORTED_MODULE_11__["DichVuCanCapNhatPopupComponent"]
                    ]
                })
            ], DuyetKetQuaNewModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new.service.ts": 
        /*!****************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new.service.ts ***!
          \****************************************************************************************/
        /*! exports provided: DuyetKetQuaNewService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetKetQuaNewService", function () { return DuyetKetQuaNewService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var DuyetKetQuaNewService = /** @class */ (function (_super) {
                __extends(DuyetKetQuaNewService, _super);
                function DuyetKetQuaNewService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'DuyetKetQuaXetNghiem';
                    return _this;
                }
                return DuyetKetQuaNewService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            DuyetKetQuaNewService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            DuyetKetQuaNewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DuyetKetQuaNewService);
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-nhom-dv-list-new-popup/duyet-ket-qua-nhom-dv-list-new-popup.component.scss": 
        /*!****************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-nhom-dv-list-new-popup/duyet-ket-qua-nhom-dv-list-new-popup.component.scss ***!
          \****************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi94ZXQtbmdoaWVtL2R1eWV0LWtldC1xdWEtbmV3L2R1eWV0LWtldC1xdWEtbmhvbS1kdi1saXN0LW5ldy1wb3B1cC9kdXlldC1rZXQtcXVhLW5ob20tZHYtbGlzdC1uZXctcG9wdXAuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-nhom-dv-list-new-popup/duyet-ket-qua-nhom-dv-list-new-popup.component.ts": 
        /*!**************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-nhom-dv-list-new-popup/duyet-ket-qua-nhom-dv-list-new-popup.component.ts ***!
          \**************************************************************************************************************************************************/
        /*! exports provided: DuyetKetQuaNhomDvListNewPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetKetQuaNhomDvListNewPopupComponent", function () { return DuyetKetQuaNhomDvListNewPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _duyet_ket_qua_new_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../duyet-ket-qua-new.model */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new.model.ts");
            /* harmony import */ var _duyet_ket_qua_in_nhom_dv_list_new_popup_duyet_ket_qua_in_nhom_dv_list_new_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../duyet-ket-qua-in-nhom-dv-list-new-popup/duyet-ket-qua-in-nhom-dv-list-new-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-in-nhom-dv-list-new-popup/duyet-ket-qua-in-nhom-dv-list-new-popup.component.ts");
            /* harmony import */ var _duyet_ket_qua_phieu_new_popup_duyet_ket_qua_phieu_new_popup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../duyet-ket-qua-phieu-new-popup/duyet-ket-qua-phieu-new-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-phieu-new-popup/duyet-ket-qua-phieu-new-popup.component.ts");
            var DuyetKetQuaNhomDvListNewPopupComponent = /** @class */ (function () {
                function DuyetKetQuaNhomDvListNewPopupComponent(dialogRef, apiService, notificationService, data, dialog, ref, authService) {
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
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DuyetKetQuaXetNghiem;
                    this.inPhieuDuyetKetQua = new _duyet_ket_qua_new_model__WEBPACK_IMPORTED_MODULE_11__["PhieuDuyetKetQuaNew"]();
                    this.validationErrors = null;
                }
                DuyetKetQuaNhomDvListNewPopupComponent.prototype.ngOnInit = function () {
                    console.log(this.data);
                    this.nhomDichVuDuyets = this.data.Model;
                };
                DuyetKetQuaNhomDvListNewPopupComponent.prototype.isCheck = function () {
                    if (this.nhomDichVuDuyets.some(function (x) { return x.IsCheck; })) {
                        this.disabled = true;
                    }
                    else {
                        this.disabled = false;
                    }
                };
                DuyetKetQuaNhomDvListNewPopupComponent.prototype.okPrint = function () {
                    this.dialogRef.close();
                    this.print(this.data.PhienXetNghiemId, this.data.YeuCauTiepNhanId);
                };
                DuyetKetQuaNhomDvListNewPopupComponent.prototype.print = function (id, yeuCauTiepNhanId) {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Process)) {
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
                        this.apiService.post('XetNghiem/GetAllHtmlPdfDuyetKetQuaXetNghiemDuocCheckGrid', this.inPhieuDuyetKetQua).subscribe(function (arrHtml) {
                            _this.dialog.open(_duyet_ket_qua_phieu_new_popup_duyet_ket_qua_phieu_new_popup_component__WEBPACK_IMPORTED_MODULE_13__["DuyetKetQuaPhieuNewPopupComponent"], {
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
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DuyetKetQuaNhomDvListNewPopupComponent.prototype.ok = function () {
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
                            _this.dialog.open(_duyet_ket_qua_in_nhom_dv_list_new_popup_duyet_ket_qua_in_nhom_dv_list_new_popup_component__WEBPACK_IMPORTED_MODULE_12__["DuyetKetQuaInNhomDvListNewPopupComponent"], {
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
                DuyetKetQuaNhomDvListNewPopupComponent.prototype.showPopupLoadingData = function () {
                    if (this.popupLoadingData == null
                        || this.popupLoadingData.openDialogs == null
                        || (this.popupLoadingData.openDialogs != null && this.popupLoadingData.openDialogs.length === 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang tải dữ liệu...' },
                        });
                    }
                };
                DuyetKetQuaNhomDvListNewPopupComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData) {
                        this.popupLoadingData.close();
                    }
                };
                DuyetKetQuaNhomDvListNewPopupComponent.prototype.close = function () {
                    this.dialog.closeAll();
                };
                return DuyetKetQuaNhomDvListNewPopupComponent;
            }());
            DuyetKetQuaNhomDvListNewPopupComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
            ]; };
            DuyetKetQuaNhomDvListNewPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duyet-ket-qua-nhom-dv-list-new-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-ket-qua-nhom-dv-list-new-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-nhom-dv-list-new-popup/duyet-ket-qua-nhom-dv-list-new-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-ket-qua-nhom-dv-list-new-popup.component.scss */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-nhom-dv-list-new-popup/duyet-ket-qua-nhom-dv-list-new-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
            ], DuyetKetQuaNhomDvListNewPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-phieu-new-popup/duyet-ket-qua-phieu-new-popup.component.scss": 
        /*!**************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-phieu-new-popup/duyet-ket-qua-phieu-new-popup.component.scss ***!
          \**************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 550px;\n}\n\n.container-iframe iframe {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0vZHV5ZXQta2V0LXF1YS1uZXcvZHV5ZXQta2V0LXF1YS1waGlldS1uZXctcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx4ZXQtbmdoaWVtXFxkdXlldC1rZXQtcXVhLW5ld1xcZHV5ZXQta2V0LXF1YS1waGlldS1uZXctcG9wdXBcXGR1eWV0LWtldC1xdWEtcGhpZXUtbmV3LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4veGV0LW5naGllbS9kdXlldC1rZXQtcXVhLW5ldy9kdXlldC1rZXQtcXVhLXBoaWV1LW5ldy1wb3B1cC9kdXlldC1rZXQtcXVhLXBoaWV1LW5ldy1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4veGV0LW5naGllbS9kdXlldC1rZXQtcXVhLW5ldy9kdXlldC1rZXQtcXVhLXBoaWV1LW5ldy1wb3B1cC9kdXlldC1rZXQtcXVhLXBoaWV1LW5ldy1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1NTBweDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iLCIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTUwcHg7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-phieu-new-popup/duyet-ket-qua-phieu-new-popup.component.ts": 
        /*!************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-phieu-new-popup/duyet-ket-qua-phieu-new-popup.component.ts ***!
          \************************************************************************************************************************************/
        /*! exports provided: DuyetKetQuaPhieuNewPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetKetQuaPhieuNewPopupComponent", function () { return DuyetKetQuaPhieuNewPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            var DuyetKetQuaPhieuNewPopupComponent = /** @class */ (function () {
                function DuyetKetQuaPhieuNewPopupComponent(data, apiService, dialog, notificationService) {
                    this.data = data;
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.arrFilePdf = [];
                    this.arrFileUrl = [];
                }
                DuyetKetQuaPhieuNewPopupComponent.prototype.ngOnInit = function () {
                    this.getALlFilePDFFromHtml(this.data);
                };
                DuyetKetQuaPhieuNewPopupComponent.prototype.getALlFilePDFFromHtml = function (arrHtml) {
                    this.showPopupLoadingData();
                    var newBlob = new Blob([arrHtml], { type: 'application/pdf' });
                    var datalocalURL = window.URL.createObjectURL(newBlob);
                    // document.querySelector("iframe").src = datalocalURL;
                    //console.log('datalocalURL', datalocalURL);
                    this.arrFileUrl.push(datalocalURL);
                    this.arrFilePdf.push(arrHtml);
                    this.closePopupLoadingData();
                    // arrHtml.forEach(html => {
                    //     const obj = {
                    //         Html: html,
                    //         TenFile: 'KetQuaXetNghiem'
                    //     };
                    //     this.apiService.postExportPdf<any>('XetNghiem/GetFilePDFFromHtml', obj).subscribe(
                    //         file => {
                    //             const newBlob = new Blob([file], { type: 'application/pdf' });
                    //             const datalocalURL = window.URL.createObjectURL(newBlob);
                    //             // document.querySelector("iframe").src = datalocalURL;
                    //             //console.log('datalocalURL', datalocalURL);
                    //             this.arrFileUrl.push(datalocalURL);
                    //             this.arrFilePdf.push(file);
                    //             if (this.arrFileUrl.length === arrHtml.length) {
                    //                 this.closePopupLoadingData();
                    //             }
                    //         },
                    //         (err: ApiError) => {
                    //             if (err.Message !== 'Validation Failed') {
                    //                 this.notificationService.showError(err.Message);
                    //             }
                    //             this.closePopupLoadingData();
                    //         });
                    // });
                };
                DuyetKetQuaPhieuNewPopupComponent.prototype.downloadAllFile = function () {
                    var dateTimeNow = new Date();
                    this.arrFilePdf.forEach(function (file) {
                        src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(file, 'application/pdf', 'KetQuaXetNghiem' + dateTimeNow.getFullYear() + '.pdf');
                    });
                };
                DuyetKetQuaPhieuNewPopupComponent.prototype.showPopupLoadingData = function () {
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
                DuyetKetQuaPhieuNewPopupComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData) {
                        this.popupLoadingData.close();
                    }
                };
                return DuyetKetQuaPhieuNewPopupComponent;
            }());
            DuyetKetQuaPhieuNewPopupComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
            ]; };
            DuyetKetQuaPhieuNewPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duyet-ket-qua-phieu-new-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-ket-qua-phieu-new-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-phieu-new-popup/duyet-ket-qua-phieu-new-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-ket-qua-phieu-new-popup.component.scss */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-phieu-new-popup/duyet-ket-qua-phieu-new-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], DuyetKetQuaPhieuNewPopupComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=xet-nghiem-duyet-ket-qua-new-duyet-ket-qua-new-module-es2015.js.map
//# sourceMappingURL=xet-nghiem-duyet-ket-qua-new-duyet-ket-qua-new-module-es5.js.map
//# sourceMappingURL=xet-nghiem-duyet-ket-qua-new-duyet-ket-qua-new-module-es5.js.map