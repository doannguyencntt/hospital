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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~tiep-nhan-benh-nhan-danh-sach-cho-kham-danh-sach-cho-kham-module~tiep-nhan-benh-nhan-lich-su~2cabf56a"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup/in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup.component.html": 
        /*!*******************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup/in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup.component.html ***!
          \*******************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-1\">\n    <div fxFlex=\"100%\">\n        <span fxFlex=\"20%\" style=\"padding-top: 20px;\">XEM TRƯỚC KHI IN</span>\n    </div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\">\n        <iframe width=\"100%\" style=\"height: 500px;\" [src]=\"src | safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\" class=\"mt-3\">\n    <!-- in phiếu DvKT -->\n    <app-print-form textPrint=\"In Phiếu Chỉ Định CLS\" type=\"PDF\" [event]=\"data\" style=\"text-align: right;\" typeSize=\"A4\" (click)=\"InPhieu(1)\" \n         [bodyComponent]=\"this\">\n    </app-print-form>  \n    <!-- in phiếu Dvkham -->\n    <app-print-form textPrint=\"In Phiếu Khám Bệnh\" type=\"PDF\" [event]=\"data\" style=\"text-align: right;\" typeSize=\"A5\" typeLayout=\"landscape\"(click)=\"InPhieu(2)\" \n    [bodyComponent]=\"this\">\n  </app-print-form>  \n   <!-- in phiếu Dv giuong -->\n   <!-- <app-print-form textPrint=\"In Dịch Vụ Giường\" type=\"PDF\" [event]=\"data\" style=\"text-align: right;\" typeSize=\"A4\" (click)=\"InPhieu(4)\" \n   (click)=\"InPhieu\" [bodyComponent]=\"this\" >\n </app-print-form>   -->\n  <!-- in phiếu Dv test Xn covid  -->\n   <app-print-form textPrint=\"In phiếu Chỉ định xét nghiệm\n   \" type=\"PDF\" [event]=\"data\" style=\"text-align: right;\" typeSize=\"A4\" (click)=\"InPhieu(3)\" \n   (click)=\"InPhieu\" [bodyComponent]=\"this\" >\n </app-print-form>  \n\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/in-phieu-xn-covid/in-phieu-xn-covid.component.html": 
        /*!*******************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/in-phieu-xn-covid/in-phieu-xn-covid.component.html ***!
          \*******************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-1\">\n    <div>XEM TRƯỚC KHI IN</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content style=\"overflow:hidden\">\n    <div class=\"container-iframe\">\n        <iframe width=\"100%\" style=\"height: 500px;\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <app-print-form textPrint=\"In phiếu chỉ định xét nghiệm\" type=\"PDF\" [event]=\"modelPrint\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/popup-dich-vu-check-trung/popup-dich-vu-check-trung.component.html": 
        /*!***********************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/popup-dich-vu-check-trung/popup-dich-vu-check-trung.component.html ***!
          \***********************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>XÁC NHẬN</div>\n    <!-- <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button> -->\n</div>\n\n<mat-dialog-content>\n    <!-- <h3 class=\"sub-title\">Thông Tin Thẻ</h3> -->\n    <div>\n        Dịch vụ này đã được thêm vào trước đó. Bạn có chắc chắn muốn thêm dịch vụ này hay không?\n    </div>\n    \n</mat-dialog-content>\n\n\n<mat-dialog-actions style=\"margin-top: 20px;\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <button type=\"button\" mat-stroked-button color=\"primary\" (click)=\"Khong()\">Không</button>\n    <button mat-raised-button mat-button color=\"primary\" (click)=\"Co()\">Có</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/popup-marketing-check-trung/popup-marketing-check-trung.component.html": 
        /*!***************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/popup-marketing-check-trung/popup-marketing-check-trung.component.html ***!
          \***************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>Xác Nhận</div>\n    <!-- <button (click)=\"close()\" type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button> -->\n</div>\n\n<mat-dialog-content style=\"margin-bottom: 20px;\">\n    <div class=\"div-tag-content\">\n        <div style=\"margin-bottom: 10px;\">Dịch vụ cảnh báo:</div>\n        <app-grid fxFlex=\"100%\" class=\"k-grid-border\" [gridColumns]=\"gridColumns\" [useAddDeault]=\"false\"\n            [gridDataSource]=\"danhSachGoiDaChonTrongLanPopup\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n            [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" [autoHeight]=\"true\" [pageable]=\"false\">\n        </app-grid>\n        <div style=\"margin-top: 10px;\">Ngoài ra tất cả các dịch vụ khác sẽ được thêm vào, bạn có chấp nhận không ?</div>\n    </div>\n</mat-dialog-content>\n\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <button type=\"button\" mat-stroked-button color=\"primary\" [mat-dialog-close]=\"null\" (click)=\"Khong()\">Không</button>\n    <button mat-raised-button mat-button color=\"primary\" (click)=\"Co()\">Có</button>\n</mat-dialog-actions>\n\n\n<ng-template #canhBaoTemplate let-dataItem>\n    <span>Trùng</span>\n</ng-template>\n\n<ng-template #actionTemplate let-dataItem>\n    <app-checkbox [(model)]=\"dataItem.KhongThem\" id=\"khongThem-{{dataItem.Id}}\"\n        label=\"Không thêm\"></app-checkbox>\n    <!-- <app-textboxnumeric id=\"abc-{{dataItem.Id}}\" [disabled]=\"!dataItem.IsActive || !dataItem.IsChecked\" [(model)]=\"dataItem.SoLuongDungLanNay\"\n        class=\"no-label\" label=\" \" [min]=\"(!dataItem.IsActive || !dataItem.IsChecked) ? 0 : 1\" [max]=\"dataItem.TenNhomDichVu == 'DỊCH VỤ KHÁM BỆNH' ? 1 : (dataItem.SoLuongConLai)\"\n        (modelChange)=\"changeSoLuongDichVu($event, dataItem)\"> \n    </app-textboxnumeric> -->\n</ng-template>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/popup-marketing-tiep-nhan-benh-nhan/popup-marketing-tiep-nhan-benh-nhan.component.html": 
        /*!*******************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/popup-marketing-tiep-nhan-benh-nhan/popup-marketing-tiep-nhan-benh-nhan.component.html ***!
          \*******************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>Gói dịch vụ</div>\n    <button (click)=\"close()\" type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"min-height: 200px;\">    \n    <kendo-splitter orientation=\"horizontal\">\n        <kendo-splitter-pane>\n            <div class=\"pane-content\">\n                <app-grid #parentGrid fxFlex=\"100%\" class=\"k-grid-border\" [gridColumns]=\"gridColumns\" [useAddDeault]=\"false\"\n                [urlGetData]=\"urlGetDataGrid\" [urlGetTotalPage]=\"urlGetTotalPageGrid\" [additionalSearchString]=\"searchStringDefault\"\n                [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [HideHeader]=\"true\" [documentType]=\"documentType\"\n                [lazyLoadPage]=\"true\" [autoHeight]=\"true\" urlGetData=\"KhamBenh/GetGoiDichVuCuaBenhNhanDataForGrid\" urlGetTotalPage=\"KhamBenh/GetGoiDichVuCuaBenhNhanTotalPageForGrid\"\n                [headerTemplate]=\"headerTemplate\" \n                [pageable]=\"false\" [detailTemplate]=\"detailTemplate\" (extOnDataBound)=\"xemChiTietGoiDichVu($event)\">\n            </app-grid>\n            </div>\n        </kendo-splitter-pane>\n        <kendo-splitter-pane [collapsible]=\"true\" size=\"30%\">\n            <div class=\"pane-content p-3\" style=\"height: 100%;\">\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"grid\" fxLayoutGap.lt-sm=\"0\">\n                    <h3 fxFlex=\"100%\">Dịch vụ sử dụng cho lần này</h3>\n                    <ng-container *ngIf=\"danhSachDichVuDaChonTrongLanPopup.length > 0\">\n                        <ng-container *ngFor=\"let goiDichVu of arrGoiDangChon\">\n                            <table class=\"mb-2\" *ngIf=\"kiemTraGoiDichVuCoChonDichVu(goiDichVu.YeuCauGoiDichVuId)\" fxFlex=\"100%\">\n                                <tr>\n                                    <th colspan=\"3\" style=\"text-align: left;\">\n                                        {{goiDichVu.TenGoiDichVu}}\n                                    </th>\n                                    <th><span *ngIf=\"goiDichVu.IsChecked\" class='text-right-td' style=\"color: green;\">Đã đăng ký</span></th>\n                                </tr>\n                                <ng-container *ngFor=\"let dichVu of getArrayDichVuDaChonTheoGoi(goiDichVu.YeuCauGoiDichVuId)\">\n                                    <tr>\n                                        <td width='35%' style=\"max-width: 150px;\" class='reverse-ellipsis r' kendoTooltip title=\"{{dichVu.TenDichVu}}\">- {{dichVu.TenDichVu}}</td>\n                                        <td width='5%' class='text-left-td'>{{dichVu.SoLuongDungLanNay}}</td>\n                                        <td width='20%' class='text-right-td'>{{dichVu.DonGia | number}}</td>\n                                        <td width='20%' class='text-right-td'>{{(dichVu.SoLuongDungLanNay * dichVu.DonGia) | number}}</td>\n                                    </tr>\n                                </ng-container>\n                                <tr>\n                                    <td colspan=\"3\" class='text-right-td'>Tổng: </td>\n                                    <td class='text-right-td'><b>{{tinhTongTienDichVuDangChon(goiDichVu.YeuCauGoiDichVuId) | number}}</b></td>\n                                </tr>\n                                <tr *ngIf=\"goiDichVu.TongTienConBaoLanhDuoc < tinhTongTienDichVuDangChon(goiDichVu.YeuCauGoiDichVuId)\">\n                                    <td colspan='4' class='text-right-td text-red khong-du-bao-lanh' [attr.name]=\"'lbl-khong-du-bao-lanh'\">Không đủ bảo lãnh</td>\n                                </tr>\n                            </table>\n                        </ng-container>\n                    </ng-container>\n                    <ng-container *ngIf=\"danhSachDichVuDaChonTrongLanPopup.length == 0\">\n                        Chưa chọn dịch vụ\n                    </ng-container>\n                </div>\n            </div>\n        </kendo-splitter-pane>\n    </kendo-splitter>\n    \n</mat-dialog-content>\n\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <button type=\"button\" mat-stroked-button color=\"primary\" [mat-dialog-close]=\"null\">Hủy</button>\n    <button mat-raised-button mat-button color=\"primary\" (click)=\"luuDichVuChiDinh()\">Chọn</button>\n</mat-dialog-actions>\n\n<ng-template #detailTemplate let-dataItem>\n    <app-grid class=\"k-grid-border\" [gridColumns]=\"gridColumnsChild\" [useAddDeault]=\"false\" [documentType]=\"documentType\"\n        [useHeaderDefault]=\"true\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" \n        [autoHeight]=\"true\" [pageable]=\"false\" [groups]=\"groups\"\n        masterName=\"gridChiTietGoiDichVu\"\n        urlGetData=\"TiepNhanBenhNhan/GetDataDichVuGoiForGridAsync\" urlGetTotalPage=\"TiepNhanBenhNhan/GetTotalDichVuGoiPageForGridAsync\"\n        [dataItemParent]=\"dataItem\"\n        [additionalSearchString]=\"benhNhanId + '|' + dataItem.Id + '|' + danhSachDichVuDaChonTrongLanPopupString + '|' + danhSachDichVuDaChonTrongLanYCTNNayString\">\n    </app-grid>\n    <!-- (extCheckboxSelection)=\"chonDichVuTrongGoi($event)\" [hideDetailSelectedCheckbox]=\"true\" -->\n</ng-template>\n\n<ng-template #headerTemplate>\n    <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"onKeyGrid($event)\"\n                    (ngModelChange)=\"clearSearch()\"\n                    placeholder=\"Nhập từ khóa...\" />\n        </div>\n\n    </div>\n</ng-template>\n\n<ng-template #tenGoiTemplate let-dataItem>\n    <!-- <div style=\"display: flex; align-items: flex-end; color: green;\">\n        <span style=\"margin-left: 10px;\" class=\"span-1-goi-marketing l\" position=\"right\" title=\"{{dataItem.TenDisplay}}\" kendoTooltip>{{dataItem.TenDisplay}}</span>\n        <span class=\"span-trang-thai\"\n            [ngStyle]=\"{'color':dataItem.TrangThai == 1 ? 'orange' : (dataItem.TrangThai == 2 ? 'green' : 'red') }\">{{dataItem.TrangThaiDisplay}}</span> \n    </div> -->\n\n    <div style=\"display: flex; justify-content: space-between; color: green;\">\n        <!-- <app-checkbox [disabled]=\"dataItem.TrangThai != 6 && dataItem.TrangThai != null\" (modelChange)=\"checkedChange($event, dataItem)\" [(model)]=\"dataItem.IsChecked\" \n        id=\"IsChecked{{dataItem.Id}}\"></app-checkbox>  -->\n        <span class=\"span-1-goi-marketing l\" position=\"right\" style=\"margin-left: 10px;\" title=\"{{dataItem.TenDisplay}}\"\n            kendoTooltip>\n            {{dataItem.TenDisplay}}</span>\n        <!-- <span class=\"span-2-goi-marketing\"\n            [ngStyle]=\"{'color':dataItem.TrangThai == 1 ? 'orange' : (dataItem.TrangThai == 2 ? 'green' : 'red') }\">{{dataItem.TrangThaiDisplay}}</span> -->\n        \n            <span style=\"text-align: right; color: black;\" *ngIf=\"dataItem.IsChecked\" kendoTooltip\n                title=\"{{'ĐÃ THU:' + dataItem.BenhNhanDaThanhToanDisplay + ' - CHƯA THU: ' + dataItem.ChuaThuDisplay + ' - CÒN CHO PHÉP BẢO LÃNH: ' + dataItem.ConLaiDisplay}}\">\n                ĐÃ THU:\n                <b style=\"color: green;\">{{dataItem.BenhNhanDaThanhToanDisplay}}</b>\n                -\n                CHƯA THU: <b style=\"color: orange;\">{{dataItem.ChuaThuDisplay}}</b>\n                -\n                CÒN CHO PHÉP BẢO LÃNH: <b style=\"color: red;\">{{dataItem.ConLaiDisplay}}</b>\n            </span>\n    </div>\n</ng-template>\n<ng-template #tongCongFooterTemplate let-dataItemParent=\"dataItemParent\">\n    <!-- {{test(dataItemParent)}} -->\n    <span class=\"blue\">{{dataItemParent.GiaTruocChietKhau | number:'0.2-2':'vi-VN'}}</span>\n</ng-template>\n<!-- <ng-template #chietKhauFooterTemplate let-dataItemParent=\"dataItemParent\">\n    CK: <span class=\"green\">{{dataItemParent.TiLeChietKhau | number}} %</span>\n</ng-template>\n<ng-template #giaGoiFooterTemplate let-dataItemParent=\"dataItemParent\">\n    Giá gói: <span class=\"red\">{{dataItemParent.GiaSauChietKhau | number:'0.2-2':'vi-VN'}}</span>\n</ng-template> -->\n\n<ng-template #checkBoxHeaderTemplate let-dataItemParent=\"dataItemParent\">\n    <!-- <input type=\"checkbox\" id=\"ckbHeader-{{dataItemParent.Id}}\" [(ngModel)]=\"dataItemParent.IsChecked\" (ngModelChange)=\"chonTatCaDichVuTrongGoi($event, dataItemParent.Id)\"> -->\n    <input type=\"checkbox\" id=\"ckbHeader-{{dataItemParent.Id}}\" [(ngModel)]=\"dataItemParent.chonTatCa\" \n        (ngModelChange)=\"chonTatCaDichVuTrongGoi($event, dataItemParent.Id)\">\n</ng-template>\n<ng-template #checkBoxTemplate let-dataItem>\n    <!-- <input *ngIf=\"dataItem.IsActive\" id=\"{{dataItem.Id}}\" type=\"checkbox\" [attr.name]=\"'ckbItem-' + dataItem.YeuCauGoiDichVuId\"\n        [disabled]=\"dataItem.SoLuongConLai <= 0\"\n        [(ngModel)]=\"dataItem.IsChecked\" (ngModelChange)=\"chonDichVu($event, dataItem)\"> -->\n    <input id=\"ckbItem-{{dataItem.YeuCauGoiDichVuId}}-{{dataItem.NhomDichVu}}-{{dataItem.Id}}\" type=\"checkbox\" [attr.name]=\"'ckbItem-' + dataItem.YeuCauGoiDichVuId\"\n        *ngIf=\"!(dataItem.SoLuongConLai <= 0 || !dataItem.IsActive)\" class=\"ckbItemInGroup-{{dataItem.YeuCauGoiDichVuId}}-{{dataItem.TenNhomDichVu}}\"\n        [(ngModel)]=\"dataItem.IsChecked\" (ngModelChange)=\"chonDichVu($event, dataItem)\">\n</ng-template>\n<ng-template #tongTienFooterTemplate>\n    <span>Tổng cộng:</span>\n</ng-template>\n<ng-template #nhomDichVuTemplate let-value=\"value\" let-dataItemParent=\"dataItemParent\">\n    <!-- <strong>{{value}}</strong> -->\n    <strong>\n        <input type=\"checkbox\" id=\"ckbGroup-{{dataItemParent.Id}}-{{value}}\" class=\"ckbGroup-{{dataItemParent.Id}} mr-2\"\n            (change)=\"chonTatCaDichVuTrongNhom($event, dataItemParent.Id, value)\" value=\"true\">\n        {{value}}\n    </strong>\n</ng-template>\n<ng-template #sttTemplate let-rowIndex=\"rowIndex\">\n    <strong>{{rowIndex + 1}}</strong>\n</ng-template> \n<ng-template #soLuongTemplate let-dataItem>\n    <app-textboxnumeric id=\"abc-{{dataItem.Id}}\" [disabled]=\"!dataItem.IsActive || !dataItem.IsChecked\" [(model)]=\"dataItem.SoLuongDungLanNay\"\n        class=\"no-label\" label=\" \" [min]=\"(!dataItem.IsActive || !dataItem.IsChecked) ? 0 : 1\" [max]=\"dataItem.TenNhomDichVu == 'DỊCH VỤ KHÁM BỆNH' ? 1 : (dataItem.SoLuongConLai)\"\n        (modelChange)=\"changeSoLuongDichVu($event, dataItem)\"> \n    </app-textboxnumeric>\n</ng-template>\n<ng-template #donGiaTemplate let-dataItem>\n    {{dataItem.DonGia | number:'0.2-2':'vi-VN'}}\n</ng-template>\n<ng-template #thanhTienTemplate let-dataItem>\n    {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/popup-tim-kiem-benh-nhan/popup-tim-kiem-benh-nhan.component.html": 
        /*!*********************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/popup-tim-kiem-benh-nhan/popup-tim-kiem-benh-nhan.component.html ***!
          \*********************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"m-0\">\n    <div>TÌM KIẾM NGƯỜI BỆNH</div>\n    <button type=\"button\" mat-icon-button (click)=\"close(null)\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\"\n        [useHeaderDefault]=\"false\" #gridTimKiem [useActionDefault]=\"false\" [checkboxAble]=\"false\" height=\"511\"\n        [allowSortDefault]=\"true\" [headerTemplate]=\"headerTemplate\" [urlGetData]=\"urlGetDataGrid\" [showStt]=\"true\"\n        [urlGetTotalPage]=\"urlGetTotalPageGrid\" [additionalSearchString]=\"addtionStringDefault\">\n    </app-grid>\n</mat-dialog-content>\n\n<ng-template #actionTemplate let-dataItem>\n    <button class=\"button-chon\" (click)=\"chonBenhNhan(dataItem)\" mat-menu-item>\n        Chọn\n    </button>\n</ng-template>\n\n<ng-template #headerTemplate>\n    <div style=\"padding: 10px;border-bottom: 1px solid #ccc;\">\n        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n            <app-textbox fxFlex=\"10%\" [(model)]=\"timKiemBenhNhanSearch.MaBN\" id=\"MaBenhNhan\" label=\"Mã NB\"\n                (keyup)=\"onKey($event)\">\n            </app-textbox>\n            <app-textbox fxFlex=\"12%\" [(model)]=\"timKiemBenhNhanSearch.BHYTMaSoThe\" id=\"MaBHYT\" label=\"Mã BHYT\"\n                (keyup)=\"onKey($event)\">\n            </app-textbox>\n            <app-textbox fxFlex=\"15%\" [(model)]=\"timKiemBenhNhanSearch.HoTen\" id=\"HoTen\" label=\"Họ và tên\"  [upperCase]=\"true\"\n                (keyup)=\"onKey($event)\">\n            </app-textbox>\n\n            <app-datepicker fxFlex=\"11%\" [(model)]=\"timKiemBenhNhanSearch.NgaySinhDisplay\" id=\"NgaySinhDisplay\"\n                label=\"Ngày sinh\" (keyup)=\"onKey($event)\">\n            </app-datepicker>\n\n            <app-textbox fxFlex=\"12%\" [(model)]=\"timKiemBenhNhanSearch.SoChungMinhThu\" id=\"CMND\" label=\"CMND\"\n                (keyup)=\"onKey($event)\">\n            </app-textbox>\n            <app-textboxmask fxFlex=\"10%\" [(model)]=\"timKiemBenhNhanSearch.SoDienThoai\" id=\"DienThoai\"\n                label=\"Điện thoại\" (keyup)=\"onKey($event)\" mask=\"000 000 0000\">\n            </app-textboxmask>\n            <app-textbox fxFlex=\"20%\" [(model)]=\"timKiemBenhNhanSearch.DiaChi\" id=\"DiaChi\" label=\"Địa chỉ\"\n                (keyup)=\"onKey($event)\">\n            </app-textbox>\n            <div fxFlex=\"5%\">\n                <button type=\"button\" color=\"primary\" (keyup)=\"onKey($event)\" (click)=\"TimKiem()\" mat-raised-button\n                    class=\"mt-5\">\n                    Tìm</button>\n            </div>\n\n        </div>\n    </div>\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-cho-quet/tiep-nhan-benh-nhan-cho-quet.component.html": 
        /*!*****************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-cho-quet/tiep-nhan-benh-nhan-cho-quet.component.html ***!
          \*****************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"px-6 py-4\" fxLayout=\"column\">\n\n    <div style=\"margin-top: 5px;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\">\n        <div fxFlex=\"100%\" style=\"padding-left: 7px; text-align: center;\">\n            Số thẻ BHYT: <span style=\"font-weight: bold;\">{{data.MaThe}}</span>\n        </div>\n        <div fxFlex=\"100%\" style=\"padding-left: 7px; text-align: center;\">\n            Họ và tên: <span style=\"font-weight: bold;\">{{data.TenBenhNhan}}</span>\n        </div>\n        <div fxFlex=\"100%\" style=\"padding-left: 7px; text-align: center;\">\n            Ngày sinh: <span style=\"font-weight: bold;\">{{data.NgaySinhDisplay}}</span>\n        </div>\n    </div>\n\n</div>\n\n<div style=\"text-align: center;\">\n    <h4>Hệ thống đang kiểm tra thông tin BHYT...</h4>\n    <button color=\"primary\" mat-raised-button type=\"button\">\n        <img src=\"/assets/img/loader.gif\" alt=\"Loading\" style=\"display: inline;\" />\n    </button>\n</div>\n\n\n<!-- <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <button type=\"menu\" (click)=\"close()\">Đóng</button>\n</div> -->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-error/tiep-nhan-benh-nhan-error.component.html": 
        /*!***********************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-error/tiep-nhan-benh-nhan-error.component.html ***!
          \***********************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>THÔNG BÁO</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <!-- <h3 class=\"sub-title\">Thông Tin Thẻ</h3> -->\n    <table width=\"100%\">\n        <tr>\n            <td>Số thẻ BHYT: <strong>{{data.BHYTMaSoThe}}</strong></td>\n        </tr>\n        <tr>\n            <td>Họ và tên: <strong>{{data.HoTen}}</strong></td>\n            <td>Năm sinh: <strong>{{data.NgayThangNamSinhDisplay}}</strong></td>\n            <td>Giới tính: <strong>{{data.GioiTinhDisplay}}</strong></td>\n        </tr>\n        <tr>\n            <td>Ngày có hiệu lực: <strong>{{data.NgayCoHieuLucDisplay}}</strong></td>\n            <td>Ngày hết hiệu lực: <strong [style.color] = \"data.isOutOfDate == true ? 'red' : 'black' \">{{data.NgayHetHieuLucDisplay}}</strong></td>\n        </tr>\n    </table>\n\n    <div style=\"margin-top: 30px\">\n        <!-- <h3 class=\"sub-title, sub-title-bottom\">Người bệnh này không tồn tại trên cổng BHYT</h3> -->\n        <h3 class=\"sub-title, sub-title-bottom err-mess-bhyt\">{{messageErrFromBHYT}}</h3>\n    </div>\n\n    <div class=\"div-title-bottom\">\n        <button type=\"button\" mat-button class=\"mr-1\" (click)=\"huy()\">Hủy</button>\n        <button type=\"button\" class=\"mr-1\" (click)=\"khamKhongBHYT()\" color=\"primary\" mat-raised-button>Khám không có thẻ BHYT</button>\n        <button type=\"button\" (click)=\"chapNhanBHYTNhapTay()\" color=\"primary\" mat-raised-button>Chấp nhận BHYT nhập tay</button>\n    </div>\n    \n</mat-dialog-content>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-lich-su/tiep-nhan-benh-nhan-lich-su.component.html": 
        /*!***************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-lich-su/tiep-nhan-benh-nhan-lich-su.component.html ***!
          \***************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>tiep-nhan-benh-nhan-lich-su works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-het-hieu-luc/tiep-nhan-benh-nhan-popup-het-hieu-luc.component.html": 
        /*!*************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-het-hieu-luc/tiep-nhan-benh-nhan-popup-het-hieu-luc.component.html ***!
          \*************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>THÔNG BÁO</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <!-- <h3 class=\"sub-title\">Thông Tin Thẻ</h3> -->\n    <table width=\"100%\">\n        <tr>\n            <td>Số thẻ BHYT: <strong>{{data.BHYTMaSoThe}}</strong></td>\n        </tr>\n        <tr>\n            <td>Họ và tên: <strong>{{data.HoTen}}</strong></td>\n            <td>Năm sinh: <strong>{{data.NgayThangNamSinhDisplay}}</strong></td>\n            <td>Giới tính: <strong>{{data.GioiTinhDisplay}}</strong></td>\n        </tr>\n        <tr>\n            <td>Ngày có hiệu lực: <strong>{{data.NgayCoHieuLucDisplay}}</strong></td>\n            <td>Ngày hết hiệu lực: <strong [style.color] = \"data.isOutOfDate == true ? 'red' : 'black' \">{{data.NgayHetHieuLucDisplay}}</strong></td>\n        </tr>\n    </table>\n\n    <div style=\"margin-top: 30px\">\n        <h3 class=\"sub-title, sub-title-bottom\">Bạn không thể sử dụng thẻ này vì thẻ đã hết hiệu lực</h3>\n    </div>\n\n    <div class=\"div-title-bottom\">\n        <button type=\"button\" mat-button class=\"mr-1\" (click)=\"huy()\">Hủy</button>\n        <button type=\"button\" class=\"mr-1\" (click)=\"khamKhongBHYT()\" color=\"primary\" mat-raised-button>Khám không có thẻ BHYT</button>\n        <button type=\"button\" (click)=\"chapNhanBHYTNhapTay()\" color=\"primary\" mat-raised-button>Chấp nhận BHYT nhập tay</button>\n    </div>\n    \n</mat-dialog-content>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc/tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc.component.html": 
        /*!***************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc/tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc.component.html ***!
          \***************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>THÔNG BÁO</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <!-- <h3 class=\"sub-title\">Thông Tin Thẻ</h3> -->\n    <table width=\"100%\">\n        <tr>\n            <td>Số thẻ BHYT: <strong>{{data.BHYTMaSoThe}}</strong></td>\n        </tr>\n        <tr>\n            <td>Họ và tên: <strong>{{data.HoTen}}</strong></td>\n            <td>Năm sinh: <strong>{{data.NgayThangNamSinhDisplay}}</strong></td>\n            <td>Giới tính: <strong>{{data.GioiTinhDisplay}}</strong></td>\n        </tr>\n    </table>\n\n    <div style=\"margin-top: 30px\">\n        <h3 class=\"sub-title, sub-title-bottom\">Không thể kiểm tra thẻ này trên cổng BHYT, bạn hãy thử lại lần nữa</h3>\n    </div>\n\n    <div class=\"div-title-bottom\">\n        <button class=\"div-margin-bottom\" type=\"button\" mat-button class=\"mr-1\" (click)=\"khamKhongBHYT()\">Hủy</button>\n        <button class=\"div-margin-bottom\" type=\"button\" (click)=\"khamKhongBHYT()\" color=\"primary\" mat-raised-button>Khám không có thẻ BHYT</button>\n        <!-- <button class=\"div-margin-bottom\" type=\"button\" (click)=\"chapNhanCoBHYT()\" color=\"primary\" mat-raised-button>Chấp nhận có BHYT</button> -->\n        <button type=\"button\" (click)=\"chapNhanBHYTNhapTay()\" class=\"div-margin-bottom\" color=\"primary\" mat-raised-button>Chấp nhận BHYT nhập tay</button>\n        <button type=\"button\" (click)=\"thuLai()\" color=\"primary\" mat-raised-button>Thử lại</button>\n    </div>\n    \n</mat-dialog-content>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-lich-su-kcb/tiep-nhan-benh-nhan-popup-lich-su-kcb.component.html": 
        /*!***********************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-lich-su-kcb/tiep-nhan-benh-nhan-popup-lich-su-kcb.component.html ***!
          \***********************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>LỊCH SỬ KCB</div>\n    <!-- <button type=\"button\" mat-icon-button (click)=\"close('No answer')\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button> -->\n</div>\n\n<mat-dialog-content>\n    <app-grid [gridColumns]=\"gridColumns\" [gridDataSource]=\"gridData\"\n    [documentType]=\"documentType\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" \n    [useHeaderDefault]=\"false\" #grid [useActionDefault]=\"false\"\n    [checkboxAble]=\"false\" height=\"300\">\n</app-grid>\n</mat-dialog-content>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt/tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt.component.html": 
        /*!***************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt/tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt.component.html ***!
          \***************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>LỊCH SỬ KIỂM TRA THẺ BHYT</div>\n    <!-- <button type=\"button\" mat-icon-button (click)=\"close('No answer')\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button> -->\n</div>\n\n<mat-dialog-content>\n    <app-grid [gridColumns]=\"gridColumns\" [gridDataSource]=\"gridData\"\n    [documentType]=\"documentType\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" \n    [useHeaderDefault]=\"false\" #grid [useActionDefault]=\"false\"\n    [checkboxAble]=\"false\" height=\"400\">\n    <!-- height=\"300\" -->\n</app-grid>\n</mat-dialog-content>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup/tiep-nhan-benh-nhan-popup.component.html": 
        /*!***********************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup/tiep-nhan-benh-nhan-popup.component.html ***!
          \***********************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>Thông Tin Bảo Hiểm Y Tế</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <h3 class=\"sub-title\">Thông Tin Thẻ</h3>\n    <table width=\"100%\">\n        <tr>\n            <td width=\"28%\">Ngày sinh: <strong>{{data.BenhNhan.NgayThangNamSinhDisplay}}</strong></td>\n            <td width=\"29%\">Giới tính: <strong>{{data.BenhNhan.GioiTinhDisplay}}</strong></td>\n            <td>Địa chỉ: <strong>{{data.DiaChiDisplay}}</strong></td>\n        </tr>\n        <tr>\n            <td>Mã ĐKBĐ: <strong>{{data.MaDKBD}}</strong></td>\n            <td>Nơi ĐKBH: <strong>{{data.BenhNhan.NoiDangKyBHYT}}</strong></td>\n            <td>Cơ quan BHXH: <strong>{{data.cqBHXH}}</strong></td>\n        </tr>\n        <tr>\n            <td>Ngày có hiệu lực: <strong>{{data.NgayCoHieuLucDisplay}}</strong></td>\n            <td>Ngày hết hiệu lực: <strong [style.color] = \"data.isOutOfDate == true ? 'red' : 'black' \">{{data.NgayHetHieuLucDisplay}}</strong></td>\n            <td>Ngày đủ 5 năm: <strong>{{data.NgayDu5NamDisplay}}</strong></td>\n        </tr>\n    </table>\n    <h3 class=\"sub-title\">Thông Tin Khám Chữa Bệnh</h3>\n</mat-dialog-content>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-tai-kham/tiep-nhan-benh-nhan-tai-kham.component.html": 
        /*!*****************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-tai-kham/tiep-nhan-benh-nhan-tai-kham.component.html ***!
          \*****************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-grid baseRoute=\"/them-yeu-cau-tiep-nhan\" [gridColumns]=\"gridColumns\"\n        [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n        [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" [urlGetData]=\"urlGetDataGrid\"\n        [urlGetTotalPage]=\"urlGetTotalPageGrid\" [additionalSearchString]=\"BenhNhan+''\" [autoHeight]=true> \n    </app-grid>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.component.html": 
        /*!***********************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.component.html ***!
          \***********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Tiếp Nhận Người Bệnh',Path:''}\n                    ,{Title:'Thêm Yêu Cầu Tiếp Nhận',Path:'',Active:true}\n                    ]\">\n            </vex-breadcrumbs>\n            <app-hot-key [keys]=\"[\n            {Key:'Ctrl + Q',Description:'Quét mã vạch'},\n            {Key:'Ctrl + F1',Description:'Di chuyển tới và check Có BHYT'},\n            {Key:'Ctrl + F2',Description:'Di chuyển tới và check NHẬP TAY'},\n            {Key:'Ctrl + F3',Description:'Di chuyển tới và check Có giấy chuyển viện'},\n            {Key:'Ctrl + F5',Description:'Di chuyển tới và check Có giấy miễn cùng chi trả'},\n            {Key:'Ctrl + F6',Description:'Di chuyển tới và check Có miễn giảm'},\n            {Key:'Ctrl + F7',Description:'Di chuyển tới và check CÓ BHTN'},\n            {Key:'Ctrl + F8',Description:'Di chuyển tới và mở tab Chỉ định dịch vụ'},\n            {Key:'Ctrl + F9',Description:'Di chuyển tới và mở tab Tài liệu đính kèm'},\n            {Key:'Ctrl + F10',Description:'Di chuyển tới và mở tab Người giám hộ'},\n            {Key:'Ctrl + F11',Description:'Di chuyển tới và mở tab Lịch hẹn'},\n            {Key:'Ctrl + F12',Description:'Di chuyển tới và mở tab Lịch sử khám bệnh'},\n            {Key:'Ctrl + S',Description:'Lưu'},\n            {Key:'Ctrl + Shift + S',Description:'Lưu và in phiếu chỉ định'},\n            {Key:'Esc',Description:'Hủy',End:true}\n            ]\"></app-hot-key>\n            <!-- <app-radio id=\"LoaiKham\" name=\"LoaiKham\" class=\"no-format-css rad-white\"\n                [(model)]=\"tiepNhanBenhNhan.LoaiKham\"\n                [items]=\"[{Value:1,Text:'Khám Có BHYT'},{Value:2,Text:'Khám Nhân Dân'},{Value:3,Text:'Khám Sức Khỏe Tổng Quát'}]\">\n            </app-radio> -->\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div @fadeInUp class=\"overflow-auto -mt-15\">\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n                    <div class=\"px-6 py-4\" fxLayout=\"column\">\n                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                fxLayoutGap.lt-sm=\"0\" fxFlex=\"100%\">\n                                <div fxFlex=\"15%\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\">\n                                    <h3 class=\"sub-title mt-0\">\n                                        Thông Tin Bảo Hiểm Y Tế\n                                        <!-- <button (click)=\"openPopupGoiDichVu()\">Test</button> -->\n                                    </h3>\n                                </div>\n                                <!-- &nbsp;&nbsp; -->\n                                <div fxFlex=\"12%\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" kendoTooltip>\n                                    <app-checkbox (modelChange)=\"coBHYTChange($event)\"\n                                        [(model)]=\"tiepNhanBenhNhan.CoBHYT\" id=\"CheckboxIsHaveBHYT\"\n                                        [disabled]=\"tiepNhanBenhNhan.TuNhap == true\" label=\"Có\"\n                                        title=\"Phím tắt: Ctrl + F1\"></app-checkbox>\n                                    &nbsp;&nbsp;&nbsp;&nbsp;\n                                    <app-checkbox (modelChange)=\"tuNhapChange($event)\"\n                                        [(model)]=\"tiepNhanBenhNhan.TuNhap\" id=\"TuNhap\"\n                                        [disabled]=\"tiepNhanBenhNhan.CoBHYT != true\" label=\"Nhập tay\"\n                                        title=\"Phím tắt: Ctrl + F2\"></app-checkbox>\n                                </div>\n\n                                <div fxFlex=\"53%\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" kendoTooltip>\n                                    <p style=\"color:red; font-weight:bold\">{{errMessageKhongChoPhepTaoMoiYCTN}}</p>\n                                </div>\n\n                                <div fxFlex=\"20%\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\">\n                                    <div fxFlex=\"0%\">\n\n                                    </div>\n                                    <div fxFlex=\"100%\" style=\"text-align: right;\">\n                                        <a style=\"text-decoration: underline; color: blue; font-style: italic;\"\n                                            (click)=\"lichSuKiemTraTheBHYT()\">Lịch\n                                            sử kiểm tra thẻ BHYT</a>\n                                        <a style=\"text-decoration: underline; color: blue; font-style: italic; margin-left: 10px;\"\n                                            (click)=\"lichSuKBC()\">\n                                            Lịch sử KCB\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                fxLayoutGap.lt-sm=\"0\" *ngIf=\"tiepNhanBenhNhan.CoBHYT == true\">\n                                <div fxFlex=\"20%\" fxFlex.sm=\"20%\" style=\"position: relative;\" kendoTooltip>\n                                    <app-textbox id=\"SoTheBHYT\" label=\"Số thẻ BHYT\"\n                                        [(model)]=\"tiepNhanBenhNhan.BHYTMaSoThe\" (keyup)=\"onKey($event, true, 1)\"\n                                        [isAutoFocus]=\"true\" (blurChange)=\"blur($event, true)\"\n                                        (modelChange)=\"ThongTinBenhNhanMaSoTHeChange($event)\" [required]=\"true\"\n                                        [validationerror]=\"'BHYTMaSoThe' | validationerror:validationErrors\">\n                                    </app-textbox>\n\n                                    <button (keyup)=\"onKeyScanner($event)\" (click)=\"QuetMaQRCodeClick()\" color=\"primary\"\n                                        class=\"image-barcode\" mat-mini-fab type=\"button\" kendoTooltip\n                                        title=\"Quét mã vạch thẻ BHYT\" title=\"Phím tắt: Ctrl + Q\">\n                                        <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                                    </button>\n                                </div>\n                                <app-textbox id=\"BHYTMaDKBD\" fxFlex=\"10%\" fxFlex.sm=\"10%\" label=\"Mã nơi ĐKBH\"\n                                    maxlength=\"200\" (blurChange)=\"blurMaNoiDKBD($event)\"\n                                    (keyup)=\"onKeyMaNoiDKBD($event)\" [(model)]=\"tiepNhanBenhNhan.BHYTMaDKBD\"\n                                    [required]=\"true\" [disabled]=\"tiepNhanBenhNhan.TuNhap != true\"\n                                    [validationerror]=\"'BHYTMaDKBD' | validationerror:validationErrors\">\n                                </app-textbox>\n\n                                <app-textbox id=\"NoiDangKyBHYT\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Nơi ĐKBH\"\n                                    maxlength=\"200\" [(model)]=\"tiepNhanBenhNhan.NoiDangKyBHYT\" [disabled]=\"true\">\n                                </app-textbox>\n\n                                <app-textboxnumeric [(model)]=\"tiepNhanBenhNhan.BHYTMucHuong\" id=\"BHYTMucHuong\"\n                                    fxFlex=\"10%\" fxFlex.sm=\"10%\" label=\"Mức hưởng (%)\" format=\"0\" [required]=\"true\"\n                                    [disabled]=\"tiepNhanBenhNhan.TuNhap != true\" (modelChange)=\"mucHuongChange($event)\"\n                                    min=\"1\" max=\"100\"\n                                    [validationerror]=\"'BHYTMucHuong' | validationerror:validationErrors\">\n                                </app-textboxnumeric>\n\n                                <app-textbox id=\"BHYTDiaChi\" fxFlex=\"40%\" fxFlex.sm=\"40%\" label=\"Địa chỉ\"\n                                    maxlength=\"200\"\n                                    placeHolder=\"Địa chỉ (Số nhà/đường phố, Phường/Xã, Quận/Huyện, Tỉnh/Thành phố)\"\n                                    [(model)]=\"tiepNhanBenhNhan.BHYTDiaChi\" [required]=\"true\"\n                                    [disabled]=\"tiepNhanBenhNhan.TuNhap != true\" (blurChange)=\"blurBHYTDiaChi($event)\"\n                                    (keyup)=\"onKeyBHYTDiaChi($event)\"\n                                    [validationerror]=\"'BHYTDiaChi' | validationerror:validationErrors\">\n                                </app-textbox>\n\n                                <app-radio id=\"LyDoVaoVien\" label=\"Tuyến khám\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                    [(model)]=\"tiepNhanBenhNhan.LyDoVaoVien\" (modelChange)=\"lyDoVaoVienChange($event)\"\n                                    [items]=\"[{Value:1,Text:'Đúng tuyến'},{Value:3,Text:'Trái tuyến'}]\">\n                                </app-radio>\n\n                                <app-datepicker id=\"BHYTNgayHieuLuc\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                    [disabled]=\"tiepNhanBenhNhan.TuNhap != true\"\n                                    (modelChange)=\"ngayCoHieuLucChange($event)\" (blur)=\"blurNgayCoHieuLuc($event)\"\n                                    (keyup)=\"onKeyNgayCotHieuLuc($event)\" label=\"Ngày có hiệu lực\"\n                                    [(model)]=\"tiepNhanBenhNhan.BHYTNgayHieuLuc\" [required]=\"true\"\n                                    [validationerror]=\"'BHYTNgayHieuLuc' | validationerror:validationErrors\">\n                                </app-datepicker>\n\n                                <app-datepicker id=\"BHYTNgayHetHan\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                    [disabled]=\"tiepNhanBenhNhan.TuNhap != true\" (blur)=\"blurNgayHetHieuLuc($event)\"\n                                    (keyup)=\"onKeyNgayHetHieuLuc($event)\" label=\"Ngày hết hiệu lực\"\n                                    [(model)]=\"tiepNhanBenhNhan.BHYTNgayHetHan\" [required]=\"true\"\n                                    [validationerror]=\"'BHYTNgayHetHan' | validationerror:validationErrors\">\n                                </app-datepicker>\n\n                                <app-datepicker id=\"BHYTNgayDu5Nam\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                    [disabled]=\"tiepNhanBenhNhan.TuNhap != true\" label=\"Ngày đủ 5 năm\"\n                                    [(model)]=\"tiepNhanBenhNhan.BHYTNgayDu5Nam\">\n                                </app-datepicker>\n\n                                <app-textbox\n                                    *ngIf=\"tiepNhanBenhNhan.IsCheckedBHYT == true && soPhanTramHuongBHYT != null && tiepNhanBenhNhan.IsCheckedBHYT != null\"\n                                    id=\"messageThanhCong\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Kiểm tra trên BHYT\"\n                                    maxlength=\"200\" [disabled]=\"true\" [(model)]=\"messageThanhCong\" class=\"green\">\n                                </app-textbox>\n\n                                <app-textbox\n                                    *ngIf=\"tiepNhanBenhNhan.IsCheckedBHYT == false && soPhanTramHuongBHYT != null && tiepNhanBenhNhan.IsCheckedBHYT != null\"\n                                    id=\"messageKhongThanhCong\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Kiểm tra trên BHYT\"\n                                    maxlength=\"200\" [disabled]=\"true\" [(model)]=\"messageKhongThanhCong\" class=\"red\">\n                                </app-textbox>\n\n                                <app-textbox *ngIf=\"tiepNhanBenhNhan.IsCheckedBHYT == null\" id=\"messageNULL\"\n                                    fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Kiểm tra trên BHYT\" maxlength=\"200\"\n                                    [disabled]=\"true\">\n                                </app-textbox>\n\n                                <!-- </div> -->\n\n                                <!-- <div fxFlex=\"80%\"> -->\n                                <!-- <div>\n                                        <ul class=\"inline\">\n                                            <li fxFlex=\"25%\" fxFlex.sm=\"25%\">Mã nơi ĐKBH: <strong\n                                                    *ngIf=\"tiepNhanBenhNhan != null\">{{tiepNhanBenhNhan.BHYTMaDKBD}}</strong>\n                                            </li>\n                                            <li fxFlex=\"25%\" fxFlex.sm=\"25%\">Nơi ĐKBH: <strong\n                                                    *ngIf=\"tiepNhanBenhNhan != null\">{{tiepNhanBenhNhan.NoiDangKyBHYT}}</strong>\n                                            </li>\n                                            <li fxFlex=\"25%\" fxFlex.sm=\"25%\">Ngày đủ 5 năm: <strong\n                                                    *ngIf=\"tiepNhanBenhNhan != null\">{{tiepNhanBenhNhan.NgayDu5NamDisplay}}</strong>\n                                            </li>\n                                            <li fxFlex=\"25%\" fxFlex.sm=\"25%\">Mức hưởng: <strong\n                                                    *ngIf=\"tiepNhanBenhNhan != null && tiepNhanBenhNhan.BHYTMucHuong != null\">{{tiepNhanBenhNhan.BHYTMucHuong}}%</strong>\n                                            </li>\n                                        </ul>\n                                    </div>\n\n                                    <div>\n                                        <ul class=\"inline\">\n                                            <li fxFlex=\"25%\" fxFlex.sm=\"25%\">Ngày có hiệu lực: <strong\n                                                    *ngIf=\"tiepNhanBenhNhan != null\">{{tiepNhanBenhNhan.NgayCoHieuLucDisplay}}</strong>\n                                            </li>\n\n                                            <li fxFlex=\"25%\" fxFlex.sm=\"25%\">Ngày hết hiệu lực: <strong\n                                                *ngIf=\"tiepNhanBenhNhan != null\">{{tiepNhanBenhNhan.NgayHetHieuLucDisplay}}</strong>\n                                        </li>\n                                        <li fxFlex=\"25%\" fxFlex.sm=\"25%\">\n\n                                        </li>\n                                        <li fxFlex=\"25%\" fxFlex.sm=\"25%\">\n\n                                        </li>\n                                        </ul>\n                                    </div>\n\n                                    <div>\n                                        <ul class=\"inline\">\n                                            <li fxFlex=\"50%\" fxFlex.sm=\"50%\">Địa chỉ: <strong\n                                                    *ngIf=\"tiepNhanBenhNhan != null\">{{tiepNhanBenhNhan.BHYTDiaChi}}</strong>\n                                            </li>\n                                            <li fxFlex=\"30%\" fxFlex.sm=\"30%\">Kiểm tra trên BHYT: <strong\n                                                    *ngIf=\"tiepNhanBenhNhan.IsCheckedBHYT == true && soPhanTramHuongBHYT != null\" style=\"color: green;\">Kiểm tra\n                                                    thành công</strong>\n                                                <strong *ngIf=\"tiepNhanBenhNhan.IsCheckedBHYT == false && soPhanTramHuongBHYT != null\" style=\"color: red;\">Kiểm\n                                                    tra không thành công</strong></li>\n                                            <li fxFlex=\"20%\" fxFlex.sm=\"20%\">\n                                                <a style=\"text-decoration: underline; color: blue; font-style: italic;\" (click)=\"lichSuKBC()\">Lịch sử KCB</a>\n                                            </li>\n                                        </ul>\n                                    </div> -->\n\n\n\n                                <!-- </div> -->\n\n\n                            </div>\n\n                        </div>\n\n                        <div style=\"height: 30px;\">\n\n                        </div>\n\n                        <div id=\"test\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                            fxLayoutGap.lt-sm=\"0\">\n                            <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông Tin Hành Chính\n                                <span class=\"thong-tin-tai-khoan-benh-nhan\"\n                                    *ngIf=\"thongTinTaiKhoanBenhNhan != null && thongTinTaiKhoanBenhNhan != undefined\">\n                                    Mã NB: <span\n                                        style=\"font-weight: bold;\">{{thongTinTaiKhoanBenhNhan.MaBenhNhan}}</span> - Tài\n                                    Khoản: <span\n                                        style=\"font-weight: bold; color:green\">{{thongTinTaiKhoanBenhNhan.SoDuTaiKhoan |\n                                        currency:'VND'}}</span>\n                                </span>\n                            </h3>\n                            <app-textbox class=\"text-transform-uppercase\" #HoVaTenTextbox\n                                (blurChange)=\"blur($event, false)\" id=\"HoTen\" fxFlex=\"15%\" fxFlex.sm=\"15%\"\n                                label=\"Họ và tên\" [(model)]=\"tiepNhanBenhNhan.HoTen\" maxlength=\"100\"\n                                [isAutoFocus]=\"true\" (keyup)=\"onKey($event, false, 2)\" [upperCase]=\"true\"\n                                (modelChange)=\"ThongTinBenhNhanHoTenChange($event)\" [required]=\"true\"\n                                [validationerror]=\"'HoTen' | validationerror:validationErrors\">\n                            </app-textbox>\n                            <div fxFlex=\"5%\" fxFlex.sm=\"5%\">\n                                <button (keyup)=\"onKeyLookBN($event)\" color=\"default\" mat-raised-button type=\"button\"\n                                    style=\"height: 100%;\" tabindex=\"-1\" (click)=\"timKiemBenhNhanPopup()\"\n                                    [ngStyle]=\"{'color':true == true?'green':'grey'}\">\n                                    <mat-icon [icIcon]=\"icFind\"></mat-icon>\n                                    <div style=\"line-height: 20px;\">{{totalBenhNhan}}</div>\n                                </button>\n                            </div>\n\n                            <app-datepicker #NgaySinhCoBHYT *ngIf=\"tiepNhanBenhNhan.CoBHYT == true\"\n                                (blur)=\"blur($event, false, 3)\" id=\"NgaySinh\" fxFlex=\"13%\" fxFlex.sm=\"13%\"\n                                label=\"Ngày sinh\" [(model)]=\"tiepNhanBenhNhan.NgayThangNamSinh\"\n                                (keyup)=\"onKey($event, false, 3)\" (modelChange)=\"ThongTinBenhNhanNgaySinhChange($event)\"\n                                [required]=\"true\"\n                                [validationerror]=\"'NgayThangNamSinh' | validationerror:validationErrors\">\n                            </app-datepicker>\n\n                            <app-datepicker #NgaySinhKhongCoBHYT *ngIf=\"tiepNhanBenhNhan.CoBHYT != true\"\n                                (blur)=\"blur($event, false, 3)\" id=\"NgaySinh\" fxFlex=\"13%\" fxFlex.sm=\"13%\"\n                                label=\"Ngày sinh\" [required]=\"true\" [(model)]=\"tiepNhanBenhNhan.NgayThangNamSinh\"\n                                (keyup)=\"onKey($event, false, 3)\" (modelChange)=\"ThongTinBenhNhanNgaySinhChange($event)\"\n                                [validationerror]=\"'NgayThangNamSinh' | validationerror:validationErrors\">\n                            </app-datepicker>\n\n                            <app-textboxnumeric [(model)]=\"tiepNhanBenhNhan.NamSinh\" id=\"Numerictextbox\" fxFlex=\"7%\"\n                                (blur)=\"blur($event, false, 3)\" (keyup)=\"onKey($event, false, 3)\" fxFlex.sm=\"7%\"\n                                label=\"Năm sinh\" format=\"0\" min=\"1\" max=\"9999\" (modelChange)=\"NamSinhChange($event)\"\n                                [disabled]=\"tiepNhanBenhNhan.NgayThangNamSinh!=null\"\n                                [validationerror]=\"'NamSinh' | validationerror:validationErrors\">\n                            </app-textboxnumeric>\n\n                            <!-- *ngIf=\"under6yearsold\" -->\n                            <app-textbox id=\"SoTuoi\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                label=\"Số tuổi\" [disabled]=\"true\" [(model)]=\"soTuoiDisplay\">\n                            </app-textbox>\n\n                            <app-textboxmask id=\"SoDienThoai\" onlynumber=\"true\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                label=\"Số điện thoại\" (keyup)=\"onKeyTimKiemBenhNhan($event)\" maxlength=\"10\"\n                                [(model)]=\"tiepNhanBenhNhan.SoDienThoai\" mask=\"000 000 0000\">\n                            </app-textboxmask>\n\n                            <app-dropdownlist id=\"Dropdownlist\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Giới tính\"\n                                url=\"TiepNhanBenhNhan/GetGioiTinh\" [(model)]=\"tiepNhanBenhNhan.GioiTinh\" bind=\"true\"\n                                [validationerror]=\"'DiaChi' | validationerror:validationErrors\">\n                            </app-dropdownlist>\n\n                            <app-combobox id=\"NgheNghiep\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Nghề Nghiệp\" bind=\"true\"\n                                url=\"TiepNhanBenhNhan/GetNgheNghiep\" [(model)]=\"tiepNhanBenhNhan.NgheNghiepId\">\n                            </app-combobox>\n\n                            <app-combobox id=\"GetQuocTich\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Quốc tịch\" bind=\"true\"\n                                url=\"TiepNhanBenhNhan/GetQuocTich\" [(model)]=\"tiepNhanBenhNhan.QuocTichId\"\n                                [required]=\"true\" [validationerror]=\"'QuocTichId' | validationerror:validationErrors\">\n                            </app-combobox>\n                            <!-- broadcastAfterLoaded=\"true\" -->\n                            <app-combobox id=\"TinhThanhPho\" fxFlex=\"20%\" fxFlex.sm=\"20%\" bind=\"true\"\n                                (modelChange)=\"TinhThanhPhoChange($event)\" label=\"Tỉnh/Thành Phố\"\n                                url=\"TiepNhanBenhNhan/GetTinhThanh/?quanHuyenId={{tiepNhanBenhNhan.QuanHuyenId}}\"\n                                hierarchyKeyToSend=\"tinhThanh\" [(model)]=\"tiepNhanBenhNhan.TinhThanhId\"\n                                class=\"item-no-padding\" [template]=\"tinhThanhTemplate\"\n                                [templateHeader]=\"tinhThanhTemplateHeader\"\n                                [required]=\"true\" [validationerror]=\"'TinhThanhId' | validationerror:validationErrors\">\n                                <ng-template #tinhThanhTemplateHeader let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <th width=\"20%\">Mã</th>\n                                            <th>Tên</th>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <ng-template #tinhThanhTemplate let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <td width=\"20%\">{{dataItem.Ma}}</td>\n                                            <td>{{dataItem.Ten}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                            </app-combobox>\n                            <!-- broadcastAfterLoaded=\"true\" -->\n                            <app-combobox id=\"QuanHuyen\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Quận/Huyện\"\n                                #comboboxQuanHuyen (modelChange)=\"QuanHuyenChange($event)\"\n                                url=\"TiepNhanBenhNhan/GetQuanHuyen/?phuongXaId={{tiepNhanBenhNhan.PhuongXaId}}\"\n                                hierarchyKeyToListen=\"tinhThanh\" hierarchyKeyToSend=\"quanHuyen\" bind=\"true\"\n                                [(model)]=\"tiepNhanBenhNhan.QuanHuyenId\" class=\"item-no-padding\"\n                                [template]=\"quanHuyenTemplate\" [templateHeader]=\"quanHuyenTemplateHeader\"\n                                [required]=\"true\" [validationerror]=\"'QuanHuyenId' | validationerror:validationErrors\">\n                                <ng-template #quanHuyenTemplateHeader let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <th width=\"20%\">Mã</th>\n                                            <th>Tên</th>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <ng-template #quanHuyenTemplate let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <td width=\"20%\">{{dataItem.Ma}}</td>\n                                            <td>{{dataItem.Ten}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                            </app-combobox>\n\n                            <!-- broadcastAfterLoaded=\"true\" -->\n                            <app-combobox id=\"PhuongXa\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Phường/Xã\"\n                                #comboboxPhuongXa url=\"TiepNhanBenhNhan/GetPhuongXa\" hierarchyKeyToListen=\"quanHuyen\"\n                                (modelChange)=\"PhuongXaChange($event)\" [(model)]=\"tiepNhanBenhNhan.PhuongXaId\"\n                                class=\"item-no-padding\" [template]=\"phuongXaTemplate\"\n                                [templateHeader]=\"phuongXaTemplateHeader\"\n                                [required]=\"true\" [validationerror]=\"'PhuongXaId' | validationerror:validationErrors\">\n                                <ng-template #phuongXaTemplateHeader let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <th width=\"20%\">Mã</th>\n                                            <th>Tên</th>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <ng-template #phuongXaTemplate let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <td width=\"20%\">{{dataItem.Ma}}</td>\n                                            <td>{{dataItem.Ten}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                            </app-combobox>\n\n                            <app-textbox class=\"text-transform-capitalize\" id=\"SoNhaDuongPho\" fxFlex=\"20%\"\n                                fxFlex.sm=\"20%\" maxlength=\"200\" (keyup)=\"onKeyTimKiemBenhNhan($event)\"\n                                label=\"Số nhà/Đường phố\" [(model)]=\"tiepNhanBenhNhan.DiaChi\"\n                                (modelChange)=\"soNhaDuongPhoChange($event)\">\n                            </app-textbox>\n\n                            <app-textbox id=\"SoCMND\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Số CMND\"\n                                [(model)]=\"tiepNhanBenhNhan.SoChungMinhThu\" maxlength=\"12\" onlynumber=\"true\"\n                                (keyup)=\"onKeyTimKiemBenhNhanForLogicNewCMNDVaSdt($event)\"\n                                [validationerror]=\"'SoChungMinhThu' | validationerror:validationErrors\">\n                            </app-textbox>\n\n                            <app-textbox id=\"Email\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Email\" maxlength=\"200\"\n                                [(model)]=\"tiepNhanBenhNhan.Email\"\n                                [validationerror]=\"'Email' | validationerror:validationErrors\">\n                            </app-textbox>\n\n                            <!-- <button (click)=\"click()\">CLICK</button> -->\n\n                            <app-textbox id=\"NoiLamViec\" fxFlex=\"20%\" fxFlex.sm=\"20%\" maxlength=\"200\"\n                                label=\"Nơi làm việc\" [(model)]=\"tiepNhanBenhNhan.NoiLamViec\"\n                                [required]=\"tiepNhanBenhNhan.CoBHYT == true\"\n                                [validationerror]=\"'NoiLamViec' | validationerror:validationErrors\">\n                            </app-textbox>\n\n                            <app-combobox bind=\"true\" id=\"DanToc\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Dân tộc\" [reloadForGrid]=\"true\"\n                                url=\"TiepNhanBenhNhan/GetDanToc\" [(model)]=\"tiepNhanBenhNhan.DanTocId\">\n                            </app-combobox>\n\n                            <div *ngIf=\"tiepNhanBenhNhan.CoBHYT == true\" style=\"width: 100%;\" fxLayout=\"row\"\n                                xFlex=\"100%\" fxFlex.sm=\"100%\">\n                                <div style=\"width: 100%;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                                    fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n                                    <!-- <div *ngIf=\"tiepNhanBenhNhan.BHYTDuocMienCungChiTra == true\n                                            && (tiepNhanBenhNhan.DuocChuyenVien == false || tiepNhanBenhNhan.DuocChuyenVien == null)\"\n                                        fxFlex=\"80%\" fxFlex.sm=\"80%\">\n\n                                    </div> -->\n\n                                    <app-checkbox [(model)]=\"tiepNhanBenhNhan.BHYTDuocMienCungChiTra\" fxFlex=\"20%\"\n                                        kendoTooltip fxFlex.sm=\"20%\" id=\"CheckboxAB\" label=\"Có giấy miễn cùng chi trả\"\n                                        title=\"Phím tắt: Ctrl + F5\">\n                                    </app-checkbox>\n\n                                    <app-upload *ngIf=\"tiepNhanBenhNhan.BHYTDuocMienCungChiTra == true\" fxFlex=\"60%\"\n                                        fxFlex.sm=\"60%\" id=\"Upload\" label=\"Giấy miễn cùng chi trả đính kèm\"\n                                        [model]=\"tiepNhanBenhNhan.BHYTGiayMienCungChiTra\"\n                                        (uploadFileDone)=\"uploadFileMienCungChiTraDone($event)\">\n                                    </app-upload>\n\n                                    <app-datepicker *ngIf=\"tiepNhanBenhNhan.BHYTDuocMienCungChiTra == true\"\n                                        id=\"BHYTNgayDuocMienCungChiTra\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                        label=\"Ngày bắt đầu miễn cùng chi trả\"\n                                        [(model)]=\"tiepNhanBenhNhan.BHYTNgayDuocMienCungChiTra\">\n                                    </app-datepicker>\n\n\n\n                                </div>\n                            </div>\n\n                            <!-- style=\"width: 100%;\" -->\n                            <div [fxFlex]=\"tiepNhanBenhNhan.DuocChuyenVien == true ? '100%' : '15%'\" [fxFlex.sm]=\"tiepNhanBenhNhan.DuocChuyenVien == true ? '100%' : '15%'\"\n                                fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                                fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\" kendoTooltip>\n                                <app-checkbox [(model)]=\"tiepNhanBenhNhan.DuocChuyenVien\" [fxFlex]=\"tiepNhanBenhNhan.DuocChuyenVien == true ? '20%' : '100%'\" [fxFlex.sm]=\"tiepNhanBenhNhan.DuocChuyenVien == true ? '20%' : '100%'\"\n                                    id=\"CheckboxA\" label=\"Có giấy chuyển viện\" title=\"Phím tắt: Ctrl + F3\">\n                                </app-checkbox>\n\n                                <app-datepicker *ngIf=\"tiepNhanBenhNhan.DuocChuyenVien == true\" id=\"ThoiGianChuyenVien\"\n                                    fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày chuyển tuyến\"\n                                    [(model)]=\"tiepNhanBenhNhan.ThoiGianChuyenVien\">\n                                </app-datepicker>\n\n                                <app-textbox *ngIf=\"tiepNhanBenhNhan.DuocChuyenVien == true\" id=\"SoChuyenTuyen\"\n                                    fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Số tuyến chuyển\" maxlength=\"20\"\n                                    [(model)]=\"tiepNhanBenhNhan.SoChuyenTuyen\">\n                                </app-textbox>\n\n                                <app-combobox *ngIf=\"tiepNhanBenhNhan.DuocChuyenVien == true\" id=\"NoiChuyenId\"\n                                    fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Tuyến chuyển\"\n                                    url=\"TiepNhanBenhNhan/GetTuyenChuyen\" [(model)]=\"tiepNhanBenhNhan.NoiChuyenId\">\n                                </app-combobox>\n\n                                <app-textbox *ngIf=\"tiepNhanBenhNhan.DuocChuyenVien == true\" id=\"LyDoChuyen\"\n                                    fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Lý do chuyển\" maxlength=\"200\"\n                                    [(model)]=\"tiepNhanBenhNhan.LyDoChuyen\">\n                                </app-textbox>\n\n                                <div *ngIf=\"tiepNhanBenhNhan.DuocChuyenVien == true\" fxFlex=\"20%\" fxFlex.sm=\"20%\">\n\n                                </div>\n\n                                <app-upload *ngIf=\"tiepNhanBenhNhan.DuocChuyenVien == true\" fxFlex=\"80%\" fxFlex.sm=\"80%\"\n                                    id=\"Upload\" label=\"Giấy chuyển viện đính kèm\"\n                                    [model]=\"tiepNhanBenhNhan.GiayChuyenVien\" (uploadFileDone)=\"uploadFileDone($event)\">\n                                </app-upload>\n                            </div>\n\n                            <div fxLayout=\"row wrap\" [fxFlex]=\"tiepNhanBenhNhan.DuocUuDai == true ? '100%' : '15%'\" [fxFlex.sm]=\"tiepNhanBenhNhan.DuocUuDai == true ? '100%' : '15%'\" fxLayout.lt-sm=\"column\"\n                                fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                                <app-checkbox [(model)]=\"tiepNhanBenhNhan.DuocUuDai\" id=\"CheckboxUuDai\"\n                                    (modelChange)=\"CoUuDaiChange($event)\" label=\"Có miễn giảm\" [fxFlex]=\"tiepNhanBenhNhan.DuocUuDai == true ? '10%' : '100%'\"\n                                    [fxFlex.sm]=\"tiepNhanBenhNhan.DuocUuDai == true ? '10%' : '100%'\" title=\"Phím tắt: Ctrl + F6\" kendoTooltip></app-checkbox>\n\n                                <div style=\"margin-top: 3px;\" *ngIf=\"tiepNhanBenhNhan.DuocUuDai == true\" fxFlex=\"90%\"\n                                    fxFlex.sm=\"90%\">\n                                    <!-- <div fxLayout=\"row\" fxFlex=\"100%\" fxFlex.sm=\"100%\" fxLayoutGap=\"16px grid\">\n\n                                                                </div> -->\n\n                                    <!-- <label fxFlex=\"10%\" fxFlex.sm=\"10%\" style=\"margin-right: 10px\">Loại miễn giảm:\n                                    </label> -->\n                                    <!-- <app-radio fxFlex=\"85%\" fxFlex.sm=\"85%\" id=\"LoaiMienGiam\" class=\"no-format-css\"\n                                        [(model)]=\"tiepNhanBenhNhan.LoaiMienGiam\"\n                                        [items]=\"[{Value:1,Text:'Đối tượng ưu đãi'},{Value:2,Text:'Voucher'}]\">\n                                    </app-radio> -->\n\n\n                                </div>\n\n                                <div *ngIf=\"tiepNhanBenhNhan.DuocUuDai == true\" fxFlex=\"100%\">\n                                    <div fxLayout=\"row wrap\" fxLayoutGap=\"16px grid\" fxLayout.lt-sm=\"column\"\n                                        style=\"width: 100%;\">\n                                        <app-combobox id=\"DoiTuongKhamChuaBenh\" fxFlex=\"30%\" required=\"true\"\n                                            fxFlex.sm=\"30%\" label=\"Đối tượng ưu đãi\" bind=\"true\"\n                                            url=\"TiepNhanBenhNhan/GetDoiTuongUuDai\"\n                                            [(model)]=\"tiepNhanBenhNhan.DoiTuongUuDaiId\"\n                                            [validationerror]=\"'DoiTuongUuDaiId' | validationerror:validationErrors\">\n                                        </app-combobox>\n\n                                        <app-combobox id=\"CongTyUuDai\" fxFlex=\"20%\" fxFlex.sm=\"20%\" required=\"true\"\n                                            bind=\"true\" url=\"TiepNhanBenhNhan/GetCongTyUuDai\"\n                                            [(model)]=\"tiepNhanBenhNhan.CongTyUuDaiId\" label=\"Công ty ưu đãi\"\n                                            [validationerror]=\"'CongTyUuDaiId' | validationerror:validationErrors\">\n                                        </app-combobox>\n\n                                        <div class=\"div-voucher\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                                            kendoTooltip fxFlex=\"50%\" fxFlex.sm=\"50%\">\n                                            <kendo-multiselect #multiselect data-placeholder=\"Mã voucher\"\n                                                [data]=\"listVoucherItem\" [(ngModel)]=\"value\" [clearButton]=\"false\"\n                                                (open)=\"open()\" [filterable]=\"true\" (removeTag)=\"removeTag($event)\"\n                                                (blur)=\"blurVoucher()\" (filterChange)=\"filterChange($event)\">\n                                            </kendo-multiselect>\n                                            <button (click)=\"QuetMaQRCodeClick()\" color=\"primary\" mat-mini-fab\n                                                type=\"button\" class=\"button-barcoe-in-search\" kendoTooltip\n                                                title=\"Quét mã vạch thẻ\" title=\"Phím tắt: Ctrl + Q\">\n                                                <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                                            </button>\n                                            <app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\"\n                                                style=\"display: none;\"></app-barcode>\n                                        </div>\n                                        <app-validationerrorother fxFlex=\"100%\" fxFlex.sm=\"100%\" id=\"LstMaVoucher\"\n                                            [validationerror]=\"'LstMaVoucher' | validationerror:validationErrors\">\n                                        </app-validationerrorother>\n\n                                    </div>\n\n                                </div>\n\n                                <!-- <div *ngIf=\"tiepNhanBenhNhan.DuocUuDai == true\"\n                                    fxFlex=\"100%\">\n                                    <div fxLayout=\"row wrap\" fxLayoutGap=\"16px grid\" fxLayout.lt-sm=\"column\"\n                                        style=\"width: 100%;\">\n                                        <div style=\"margin-top: -5px;\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                                            fxLayoutAlign=\"start center\" kendoTooltip style=\"width: 100%;\">\n                                            <kendo-multiselect  fxFlex=\"50%\" fxFlex.sm=\"50%\"  #multiselect\n                                                [data]=\"listVoucherItem\" [(ngModel)]=\"value\" [clearButton]=\"false\"\n                                                (open)=\"open()\" [filterable]=\"true\" (removeTag)=\"removeTag($event)\" (blur)=\"blurVoucher()\"\n                                                (filterChange)=\"filterChange($event)\">\n                                            </kendo-multiselect>\n                                            <button (click)=\"QuetMaQRCodeClick()\" color=\"primary\" mat-mini-fab\n                                                type=\"button\" class=\"button-barcoe-in-search\" kendoTooltip title=\"Quét mã vạch thẻ\"\n                                                title=\"Phím tắt: Ctrl + Q\">\n                                                <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                                            </button>\n                                            <app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\"\n                                                style=\"display: none;\"></app-barcode>\n                                        </div>\n                                        <app-validationerrorother fxFlex=\"100%\" fxFlex.sm=\"100%\" id=\"LstMaVoucher\" [validationerror]=\"'LstMaVoucher' | validationerror:validationErrors\">\n                                        </app-validationerrorother>\n                                    </div>\n                                </div> -->\n                            </div>\n\n                            <div fxLayout=\"row wrap\" fxFlex=\"15%\" fxFlex.sm=\"15%\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                                <app-checkbox [(model)]=\"tiepNhanBenhNhan.LaCapCuu\" fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"color-red\"\n                                    id=\"ckbCapCuu\" label=\"Cấp cứu\">\n                                </app-checkbox>\n                            </div>\n                        </div>\n\n                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                            <h3 style=\"margin-top:10px !important\" fxFlex=\"100%\" class=\"sub-title mt-0\">Thông Tin Bảo\n                                Hiểm Tư Nhân &nbsp; <app-checkbox id=\"CheckboxIsHaveBHTN\"\n                                    [(model)]=\"tiepNhanBenhNhan.CoBHTN\" label=\"Có\" title=\"Phím tắt: Ctrl + F7\"\n                                    kendoTooltip></app-checkbox>\n                            </h3>\n                            <div fxFlex=\"100%\">\n                                <div *ngIf=\"tiepNhanBenhNhan.CoBHTN == true\" fxLayout=\"row wrap\" fxLayoutGap=\"16px grid\"\n                                    fxLayout.lt-sm=\"column\" style=\"width: 100%;\">\n                                    <app-combobox id=\"CongTyBaoHiemTuNhanId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                        [(model)]=\"themBaoHiemTuNhanModel.CongTyBaoHiemTuNhanId\" label=\"Công ty\"\n                                        url=\"TiepNhanBenhNhan/GetCongTyBaoHiemTuNhan\" bind=\"true\"\n                                        (modelChange)=\"congTyBaoHiemChange($event)\" required=\"true\" [required]=\"true\"\n                                        [validationerror]=\"'CongTyBaoHiemTuNhanId' | validationerror:validationErrors\">\n                                    </app-combobox>\n\n                                    <app-textbox id=\"MaSoThe\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Số thẻ\"\n                                        [(model)]=\"themBaoHiemTuNhanModel.MaSoThe\" maxlength=\"30\">\n                                    </app-textbox>\n\n                                    <app-datepicker id=\"NgayHieuLuc\" fxFlex=\"10%\" fxFlex.sm=\"10%\" label=\"Từ ngày\"\n                                        [(model)]=\"themBaoHiemTuNhanModel.NgayHieuLuc\">\n                                    </app-datepicker>\n\n                                    <app-datepicker id=\"NgayHetHan\" fxFlex=\"10%\" fxFlex.sm=\"10%\" label=\"Đến ngày\"\n                                        [(model)]=\"themBaoHiemTuNhanModel.NgayHetHan\"\n                                        [validationerror]=\"'NgayHetHan' | validationerror:validationErrors\">\n                                    </app-datepicker>\n\n                                    <app-textboxmask id=\"SoDienThoai\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Điện thoại\"\n                                        readonly=\"true\" maxlength=\"100\" [(model)]=\"themBaoHiemTuNhanModel.SoDienThoai\">\n                                    </app-textboxmask>\n\n                                    <app-textbox id=\"DiaChi\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Địa chỉ\"\n                                        readonly=\"true\" maxlength=\"200\" [(model)]=\"themBaoHiemTuNhanModel.DiaChi\">\n                                    </app-textbox>\n\n                                    <div style=\"margin-bottom: 20px;\" fxLayoutAlign=\"end right\" fxFlex=\"100%\"\n                                        fxFlex.sm=\"100%\" class=\"mr-4\">\n                                        <button (click)=\"huyBHTN()\" mat-button class=\"mr-1 px-6 py-0\"><i\n                                                class=\"ft-arrow-left \"></i>Hủy</button>\n                                        <button *ngIf=\"isUpdateGrid == false\" (click)=\"ThemBHTN()\" color=\"primary\"\n                                            mat-raised-button class=\"mr-1 px-6 py-o\"><i\n                                                class=\"ft-save\"></i>Thêm</button>\n                                        <button *ngIf=\"isUpdateGrid == true\" (click)=\"SuaBHTN()\" color=\"primary\"\n                                            mat-raised-button class=\"mr-1 px-6 py-o\"><i class=\"ft-save\"></i>Cập\n                                            nhật</button>\n                                    </div>\n\n                                    <app-grid fxFlex=\"100%\" [gridDataSource]=\"gridDataSourceBHTN\"\n                                        [gridColumns]=\"gridColumns\" #gridBHTN [documentType]=\"documentType\"\n                                        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\"\n                                        [checkboxAble]=\"false\" pageSize=\"5\" [autoHeight]=\"true\" [pageable]=\"false\">\n                                    </app-grid>\n\n                                </div>\n                            </div>\n                        </div>\n\n                        <ng-template #actionTemplate let-dataItem>\n                            <button (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\"\n                                [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                                <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n                            </button>\n                            <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                                <ng-template let-customer=\"customer\" matMenuContent>\n                                    <button (click)=\"updateGridBHTN(dataItem)\" mat-menu-item>\n                                        <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                                        <span>Sửa</span>\n                                    </button>\n                                    <button (click)=\"removeGridBHTN(dataItem.CongTyBaoHiemTuNhanId)\" mat-menu-item>\n                                        <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                                        <span>Xóa</span>\n                                    </button>\n                                </ng-template>\n                            </mat-menu>\n                        </ng-template>\n\n                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\" *ngIf=\"showbuttonLuuVaInPhieuXetNghiem == true\">\n                            <h3 style=\"margin-top:10px !important\" fxFlex=\"100%\" class=\"sub-title mt-0\">Thông Tin SARS-CoV\n                            </h3>\n                            <div fxFlex=\"100%\">\n                                <app-textarea fxFlex=\"45%\" id=\"BieuHienLamSang\" [(model)]=\"tiepNhanBenhNhan.BieuHienLamSang\" label=\"Biểu hiện lâm sàng\"\n                                    minHeight=\"20\" style=\"margin-right: 5px;\">\n                                </app-textarea>\n                                <app-textarea id=\"DichTeSarsCoV2\" [(model)]=\"tiepNhanBenhNhan.DichTeSarsCoV2\" fxFlex=\"45%\" label=\"Dịch tễ SARS-CoV 2\"\n                                    minHeight=\"20\">\n                                </app-textarea>\n                            </div>\n                        </div>\n\n                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                            <h3 style=\"margin-top:20px !important\" fxFlex=\"100%\" class=\"sub-title mt-0\">Thông Tin Tiếp\n                                Nhận\n                            </h3>\n\n                            <!-- <app-radio id=\"LoaiTiepNhan\" label=\"Loại tiếp nhận\" fxFlex=\"40%\" fxFlex.sm=\"40%\"\n                                [(model)]=\"tiepNhanBenhNhan.LoaiYeuCauTiepNhan\"\n                                (modelChange)=\"loaiTiepNhanChange($event)\"\n                                [items]=\"[{Value:1,Text:'Khám bệnh'},{Value:2,Text:'Thực hiện dịch vụ kỹ thuật'},{Value:3,Text:'Thực hiện dịch vụ khác'}]\">\n                            </app-radio> -->\n\n                            <app-datetimepicker id=\"TiepNhanLuc\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Tiếp nhận lúc\"\n                                [(model)]=\"tiepNhanBenhNhan.ThoiGianTiepNhan\" [disabled]=\"true\"\n                                [validationerror]=\"'ThoiGianTiepNhan' | validationerror:validationErrors\">\n                            </app-datetimepicker>\n\n                            <app-combobox id=\"DoiTuongKhamChuaBenh\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                label=\"Đối tượng khám chữa bệnh ưu tiên\" [bind]=\"true\"\n                                url=\"TiepNhanBenhNhan/GetDoiTuongKhamChuaBenhUuTien\"\n                                [(model)]=\"tiepNhanBenhNhan.DoiTuongUuTienKhamChuaBenhId\">\n                            </app-combobox>\n\n                            <!-- <app-combobox id=\"LyDoTiepNhan\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Lý do tiếp nhận\" bind=\"true\"\n                                [(model)]=\"tiepNhanBenhNhan.LyDoTiepNhan\" url=\"TiepNhanBenhNhan/GetLyDoTiepNhan\" required=\"true\"\n                                [validationerror]=\"'LyDoTiepNhan' | validationerror:validationErrors\">\n                            </app-combobox> -->\n\n                            <app-combobox-tree id=\"LyDoTiepNhanId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Lý do tiếp nhận\"\n                                url=\"TiepNhanBenhNhan/GetLyDoTiepNhanTreeView\"\n                                [modelText]=\"tiepNhanBenhNhan.LyDoTiepNhanText\"\n                                [(model)]=\"tiepNhanBenhNhan.LyDoTiepNhanId\" bind=\"true\" required=\"true\"\n                                [validationerror]=\"'LyDoTiepNhanId' | validationerror:validationErrors\">\n                            </app-combobox-tree>\n\n                            <app-combobox id=\"HinhThucDen\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Hình thức đến\"\n                                bind=\"true\" (keyup)=\"onKeyHinhThucDen($event)\"\n                                [(model)]=\"tiepNhanBenhNhan.HinhThucDenId\" url=\"TiepNhanBenhNhan/GetHinhThucDen\"\n                                [validationerror]=\"'HinhThucDenId' | validationerror:validationErrors\">\n                            </app-combobox>\n\n                            <app-combobox id=\"NoiGioiThieu\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Nơi giới thiệu\"\n                                bind=\"true\" [(model)]=\"tiepNhanBenhNhan.NoiGioiThieuId\"\n                                url=\"TiepNhanBenhNhan/GetNoiGioiThieu\" *ngIf=\"tiepNhanBenhNhan.HinhThucDenId == 2\"\n                                [template]=\"noiGioiThieuTemplate\" [templateHeader]=\"noiGioiThieuTemplateHeader\"\n                                class=\"item-no-padding\"\n                                [validationerror]=\"'NoiGioiThieuId' | validationerror:validationErrors\">\n                                <ng-template #noiGioiThieuTemplateHeader let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <th width=\"60%\">Tên cộng tác viên</th>\n                                            <th>Đơn vị</th>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <ng-template #noiGioiThieuTemplate let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <td width=\"60%\">{{dataItem.Ten}}</td>\n                                            <td>{{dataItem.Ma}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                            </app-combobox>\n\n                            <!-- <app-combobox id=\"TrieuChungTiepNhan\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Triệu chứng khám\"\n                                                            [(model)]=\"tiepNhanBenhNhan.TrieuChungTiepNhan\" url=\"TiepNhanBenhNhan/GetLyDoKhamBenh\"\n\n                                                            [validationerror]=\"'TrieuChungTiepNhan' | validationerror:validationErrors\">\n                                                        </app-combobox> -->\n                            <app-autocomplete id=\"TrieuChungTiepNhan\" fxFlex=\"20%\" fxFlex.sm=\"20%\" maxlength=\"250\"\n                                [(model)]=\"tiepNhanBenhNhan.TrieuChungTiepNhan\" [dataList]=\"TrieuChungTiepNhanResource\"\n                                label=\"Lý do khám bệnh\"\n                                [validationerror]=\"'TrieuChungTiepNhan' | validationerror:validationErrors\">\n                            </app-autocomplete>\n\n                            <kendo-tabstrip #tabStrip fxFlex=\"100%\" class=\"content-has-border\"\n                                (tabSelect)=\"onTabSelect($event)\" (keyup)=\"tabscripChange($event)\">\n                                <kendo-tabstrip-tab [selected]=\"true\">\n                                    <ng-template kendoTabTitle>\n                                        <div kendoTooltip title=\"Phím tắt: Ctrl + F8\">\n                                            Chỉ định dịch vụ\n                                        </div>\n                                    </ng-template>\n\n                                    <ng-template kendoTabContent>\n\n\n\n                                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"0 grid\"\n                                            fxLayoutGap.lt-sm=\"0\" class=\"m-0\">\n                                            <!-- <app-radio fxFlex=\"100%\" fxFlex.sm=\"100%\" id=\"LoaiDichVuKhac\"\n                                                name=\"LoaiDichVuKhac\" class=\"no-format-css\"\n                                                [(model)]=\"themChiDinhDichVuModel.LoaiDichVuKhac\"\n                                                (modelChange)=\"LoaiDichVuKhacChange($event)\"\n                                                [items]=\"[{Value:1,Text:'Gói không có chiết khấu'},{Value:2,Text:'Gói có chiết khấu'}\n                                                                                            ,{Value:3,Text:'Dịch vụ khám bệnh'},{Value:4,Text:'Dịch vụ kỹ thuật'}\n                                                                                            ,{Value:5,Text:'Dịch vụ giường'}]\">\n                                            </app-radio> -->\n\n\n                                            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                                fxLayoutGap.lt-sm=\"0\" class=\"m-0 pb-0\" style=\"width: 100%;\">\n                                                <label style=\"margin-top: 36px;\" fxFlex=\"7%\" fxFlex.sm=\"7%\">\n                                                    Dịch vụ:\n                                                </label>\n                                                <app-combobox #dichVuCombobox hierarchyKeyToSend=\"khoaKham\" id=\"DichVu\"\n                                                    fxFlex=\"33%\" fxFlex.sm=\"23%\" label=\"Mã dịch vụ\"\n                                                    url=\"TiepNhanBenhNhan/GetDichVu\"\n                                                    [(model)]=\"themChiDinhDichVuModel.MaDichVuId\"\n                                                    (modelChange)=\"modelChangeDichVu($event)\" [required]=\"true\"\n                                                    (selectionChange)=\"MaDichVuSelectionChange($event)\"\n                                                    (openCombobox)=\"openCombobox($event)\"\n                                                    [validationerror]=\"'MaDichVuId' | validationerror:validationErrors\"\n                                                    [template]=\"dichVuTemplate\" [templateHeader]=\"dichVuTemplateHeader\"\n                                                    class=\"item-no-padding\"\n                                                    [popupSettings]=\"{width: 900,popupClass:'item-no-padding'}\"\n                                                    (keyup)=\"onKeyMaDichVu($event)\">\n                                                    <ng-template #dichVuTemplateHeader let-dataItem>\n                                                        <table width=\"100%\" class=\"table-combobox\">\n                                                            <tr>\n                                                                <th width=\"12%\">Mã</th>\n                                                                <th width=\"40%\">Tên</th>\n                                                                <th width=\"38%\">Tên TT43</th>\n                                                                <th width=\"10%\">Loại</th>\n                                                            </tr>\n                                                        </table>\n                                                    </ng-template>\n                                                    <ng-template #dichVuTemplate let-dataItem>\n                                                        <table width=\"100%\" class=\"table-combobox\">\n                                                            <tr>\n                                                                <td width=\"12%\">{{dataItem.Ma}}</td>\n                                                                <td width=\"40%\">{{dataItem.Ten}}</td>\n                                                                <td width=\"38%\">{{dataItem.TenTt43}}</td>\n                                                                <td width=\"10%\">{{dataItem.Loai}}</td>\n                                                            </tr>\n                                                        </table>\n                                                    </ng-template>\n                                                </app-combobox>\n\n                                                <!-- url=\"TiepNhanBenhNhan/GetLoaiGiaKhamBenh\" -->\n                                                <app-combobox id=\"LoaiGia\" fxFlex=\"10%\" fxFlex.sm=\"10%\" label=\"Loại giá\"\n                                                    (modelChange)=\"LoaiGiaChange($event)\" bind=\"true\"\n                                                    (keyup)=\"onKeyMaDichVu($event)\"\n                                                    (openCombobox)=\"openCombobox($event)\"\n                                                    url=\"KhamBenh/LoaiGiaHieuLucTheoDichVuKham\" *ngIf=\"loaiTiepNhan == 1\"\n                                                    [(model)]=\"themChiDinhDichVuModel.LoaiGiaId\" [required]=\"true\"\n                                                    popupSettings=\"null\"\n                                                    hierarchyKeyToListen=\"khoaKham\" [autoSelectFirstItem]=\"true\" [bind]=\"true\"\n                                                    [validationerror]=\"'LoaiGiaId' | validationerror:validationErrors\">\n                                                </app-combobox>\n\n                                                <app-textboxnumeric id=\"SoLuong\" fxFlex=\"5%\" fxFlex.sm=\"5%\" label=\"SL\"\n                                                    [(model)]=\"themChiDinhDichVuModel.SoLuong\"\n                                                    (keyup)=\"onKeyMaDichVu($event)\"\n                                                    (modelChange)=\"SoLuongChange($event)\" max=\"10000\" min=\"1\"\n                                                    [required]=\"true\"\n                                                    [disabled]=\"loaiTiepNhan == 1 || loaiTiepNhan == 3\"\n                                                    [validationerror]=\"'SoLuong' | validationerror:validationErrors\">\n                                                </app-textboxnumeric>\n                                                <!-- <app-textbox id=\"DonGia\" fxFlex=\"10%\" fxFlex.sm=\"10%\"\n                                                    (modelChange)=\"DonGiaChange($event)\" label=\"Đơn giá\"\n                                                    onlynumber=\"true\" [(model)]=\"themChiDinhDichVuModel.DonGia\"\n                                                    [validationerror]=\"'DiaChi' | validationerror:validationErrors\">\n                                                </app-textbox>\n                                                <app-textbox id=\"ThanhTien\" fxFlex=\"10%\" fxFlex.sm=\"10%\"\n                                                    label=\"Thành tiền\" onlynumber=\"true\"\n                                                    [validationerror]=\"'DiaChi' | validationerror:validationErrors\"\n                                                    [(model)]=\"themChiDinhDichVuModel.ThanhTien\">\n                                                </app-textbox> -->\n\n                                                <app-textboxnumeric id=\"DonGia\" fxFlex=\"10%\" fxFlex.sm=\"10%\" min=\"0\"\n                                                    [(model)]=\"themChiDinhDichVuModel.DonGia\" disabled=\"true\"\n                                                    format=\"n2\" decimals=\"2\" (modelChange)=\"DonGiaChange($event)\"\n                                                    label=\"Đơn giá\"\n                                                    [validationerror]=\"'DonGia' | validationerror:validationErrors\">\n                                                </app-textboxnumeric>\n\n                                                <app-textboxnumeric id=\"ThanhTien\" fxFlex=\"10%\" fxFlex.sm=\"10%\" min=\"0\"\n                                                    [(model)]=\"themChiDinhDichVuModel.ThanhTien\" label=\"Thành tiền\"\n                                                    disabled=\"true\"\n                                                    [validationerror]=\"'ThanhTien' | validationerror:validationErrors\">\n                                                </app-textboxnumeric>\n\n                                                <app-combobox hierarchyKeyToListen=\"khoaKham\" id=\"NoiThucHien1a\"\n                                                    *ngIf=\"loaiTiepNhan == 1\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                    label=\"Nơi thực hiện\" idWhere=\"1\" (keyup)=\"onKeyMaDichVu($event)\"\n                                                    (openCombobox)=\"openCombobox($event)\" autoSelectFirstItem=\"true\"\n                                                    url=\"TiepNhanBenhNhan/GetPhongKham\"\n                                                    [(model)]=\"themChiDinhDichVuModel.NoiThucHienId\" [required]=\"true\"\n                                                    [validationerror]=\"'NoiThucHienId' | validationerror:validationErrors\"\n                                                    [template]=\"phongKhamTemplate\"\n                                                    [templateHeader]=\"phongKhamTemplateHeader\" class=\"item-no-padding\"\n                                                    [popupSettings]=\"{width: 600,popupClass:'item-no-padding'}\">\n\n                                                    <ng-template #phongKhamTemplateHeader let-dataItem>\n                                                        <table width=\"100%\" class=\"table-combobox\">\n                                                            <tr>\n                                                                <th width=\"40%\">Phòng</th>\n                                                                <th width=\"40%\">Bác sĩ</th>\n                                                                <th width=\"10%\" kendoTooltip\n                                                                    title=\"SL người bệnh được đăng ký vào phòng trong ngày hôm nay ở trạng thái đang khám\">\n                                                                    Đ.khám</th>\n                                                                <th width=\"10%\" kendoTooltip\n                                                                    title=\"Tổng SL người bệnh được đăng ký vào phòng trong ngày hôm nay\">\n                                                                    Tổng</th>\n                                                            </tr>\n                                                        </table>\n                                                    </ng-template>\n                                                    <ng-template #phongKhamTemplate let-dataItem>\n                                                        <table width=\"100%\" class=\"table-combobox\">\n                                                            <tr [ngStyle]=\"{'color': dataItem.IsWarning==true?'orange':'black'}\"\n                                                                kendoTooltip\n                                                                title=\"{{dataItem.IsWarning==true?'Bác sĩ này đã khám nhiều hơn ' + dataItem.TongSoKhamGioiHan + ' người bệnh':''}}\">\n                                                                <td width=\"40%\">{{dataItem.TenPhong}}</td>\n                                                                <td width=\"40%\">{{dataItem.TenBacSi}}</td>\n                                                                <td width=\"10%\">{{dataItem.DangKham}}</td>\n                                                                <td width=\"10%\">{{dataItem.Tong}}</td>\n                                                            </tr>\n                                                        </table>\n                                                    </ng-template>\n\n                                                </app-combobox>\n\n                                                <app-combobox hierarchyKeyToListen=\"khoaKham\" id=\"NoiThucHien2a\"\n                                                    *ngIf=\"loaiTiepNhan == 2\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                    label=\"Nơi thực hiện\" (keyup)=\"onKeyMaDichVu($event)\"\n                                                    (openCombobox)=\"openCombobox($event)\" autoSelectFirstItem=\"true\"\n                                                    idWhere=\"1\" url=\"TiepNhanBenhNhan/GetPhongKhamKyThuat\"\n                                                    [(model)]=\"themChiDinhDichVuModel.NoiThucHienId\" [required]=\"true\"\n                                                    [validationerror]=\"'NoiThucHienId' | validationerror:validationErrors\"\n                                                    [template]=\"phongKhamTemplate\"\n                                                    [templateHeader]=\"phongKhamTemplateHeader\" class=\"item-no-padding\"\n                                                    [popupSettings]=\"{width: 500,popupClass:'item-no-padding'}\">\n\n                                                    <ng-template #phongKhamTemplateHeader let-dataItem>\n                                                        <table width=\"100%\" class=\"table-combobox\">\n                                                            <tr>\n                                                                <th width=\"20%\">Mã</th>\n                                                                <th width=\"60%\">Phòng</th>\n                                                                <th>SL ĐTH</th>\n                                                            </tr>\n                                                        </table>\n                                                    </ng-template>\n                                                    <ng-template #phongKhamTemplate let-dataItem>\n                                                        <table width=\"100%\" class=\"table-combobox\">\n                                                            <tr>\n                                                                <td width=\"20%\">{{dataItem.MaPhong}}</td>\n                                                                <td width=\"60%\">{{dataItem.TenPhong}}</td>\n                                                                <td>{{dataItem.Tong}}</td>\n                                                            </tr>\n                                                        </table>\n                                                    </ng-template>\n\n                                                </app-combobox>\n\n                                                <app-combobox hierarchyKeyToListen=\"khoaKham\" id=\"NoiThucHien3a\"\n                                                    *ngIf=\"loaiTiepNhan == 3\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                    label=\"Nơi thực hiện\" idWhere=\"1\" (keyup)=\"onKeyMaDichVu($event)\"\n                                                    (openCombobox)=\"openCombobox($event)\" autoSelectFirstItem=\"true\"\n                                                    url=\"TiepNhanBenhNhan/GetPhongKhamDichVuGiuong\"\n                                                    [(model)]=\"themChiDinhDichVuModel.NoiThucHienId\" [required]=\"true\"\n                                                    [validationerror]=\"'NoiThucHienId' | validationerror:validationErrors\"\n                                                    [template]=\"phongKhamTemplate\"\n                                                    [templateHeader]=\"phongKhamTemplateHeader\" class=\"item-no-padding\"\n                                                    [popupSettings]=\"{width: 500,popupClass:'item-no-padding'}\">\n\n                                                    <ng-template #phongKhamTemplateHeader let-dataItem>\n                                                        <table width=\"100%\" class=\"table-combobox\">\n                                                            <tr>\n                                                                <th width=\"20%\">Mã</th>\n                                                                <th width=\"60%\">Phòng</th>\n                                                                <th>SL ĐTH</th>\n                                                            </tr>\n                                                        </table>\n                                                    </ng-template>\n                                                    <ng-template #phongKhamTemplate let-dataItem>\n                                                        <table width=\"100%\" class=\"table-combobox\">\n                                                            <tr>\n                                                                <td width=\"20%\">{{dataItem.MaPhong}}</td>\n                                                                <td width=\"60%\">{{dataItem.TenPhong}}</td>\n                                                                <td>{{dataItem.Tong}}</td>\n                                                            </tr>\n                                                        </table>\n                                                    </ng-template>\n\n                                                </app-combobox>\n\n\n                                                <!-- [disabled]=\"duocHuongBHYT != true || !enableDuocHuongBHYT\" update 10/8/2020-->\n                                                <!-- <app-checkbox [(model)]=\"themChiDinhDichVuModel.DuocHuongBHYT\"\n                                                    id=\"CheckboxDuocHuongBHYT\" label=\"Được hưởng BHYT\"  *ngIf=\"loaiTiepNhan == 1\"\n                                                    [disabled]=\"true\"\n                                                    fxFlex=\"10%\" fxFlex.sm=\"10%\" class=\"mt-2\">\n                                                </app-checkbox> -->\n                                                <div fxFlex=\"5%\" fxFlex.sm=\"5%\">\n                                                    <button class=\"mt-5\" (click)=\"themChiDinhDichVuNew()\" title=\"Thêm\"\n                                                        color=\"primary\" mat-raised-button>Thêm\n                                                    </button>\n                                                </div>\n\n                                            </div>\n\n\n                                            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                                fxLayoutGap.lt-sm=\"0\" class=\"m-0 pb-0\" style=\"width: 100%;\">\n                                                <div fxFlex=\"90%\" fxFlex.sm=\"90%\">\n\n                                                    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                                                        fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\" class=\"m-0 pb-0\"\n                                                        style=\"width: 100%;\">\n\n                                                        <app-checkbox [(model)]=\"suDungGoiMarketingModelTemp\"\n                                                            id=\"suDungGoiMarketingModelTemp\"\n                                                            (modelChange)=\"suDungGoiMarketingChange($event)\"\n                                                            [disabled]=\"true\"\n                                                            label=\"Sử dụng gói marketing\"></app-checkbox>\n\n                                                            <!-- cập nhật BVHD-3246: chỉ hiện gói dịch vụ đã đăng ký -->\n                                                            <!-- [disabled]=\"disabledCheckboxMarketing\" -->\n\n                                                        <div class=\"div-danh-sach-goi\"\n                                                            *ngFor=\"let item of danhSachGoiDaChonTrongYCTN\">\n                                                            <a class=\"danh-sach-goi\"\n                                                                (click)=\"showPopupMarketingWithHyperlink(item)\">{{item.TenChuongTrinh}}\n                                                            </a>\n                                                            <!-- - {{item.TenGoiDichVu}} -->\n\n                                                            <button\n                                                                *ngIf=\"item.DaThanhToan != true && item.IsFromMarketing != true\"\n                                                                style=\"margin-left: 2px;\" (click)=\"removeGoi(item)\"\n                                                                color=\"primary\" type=\"button\">\n                                                                <span class=\"k-icon k-i-close\"></span>\n                                                            </button>\n                                                        </div>\n\n                                                        <!-- cập nhật BVHD-3246: chỉ hiện gói dịch vụ đã đăng ký -->\n                                                        <!-- <div *ngIf=\"danhSachGoiDaChonTrongYCTN.length > 0 \">\n                                                            <button (click)=\"openPopupGoiDichVu()\"\n                                                                class=\"mr-6 button-them-goi\" color=\"primary\"\n                                                                fxFlex=\"none\" mat-mini-fab kendoTooltip title=\"Thêm\"\n                                                                type=\"button\">\n                                                                <mat-icon class=\"mat-icon-them-goi\" [icIcon]=\"icAdd\">\n                                                                </mat-icon>\n                                                            </button>\n                                                        </div> -->\n                                                    </div>\n\n                                                </div>\n                                                <div fxFlex=\"auto\">\n                                                    <!-- cacDichVuKM -->\n                                                    <a *ngIf=\"coYeuCauGoiDichVu\" (click)=\"xemGoiDichVuKhuyenMai()\">\n                                                        <span\n                                                            style=\"color:blue; text-decoration: underline; font-weight: bold; bottom: 20px;\">\n                                                            Dịch vụ khuyến mại\n                                                        </span>\n                                                    </a>\n                                                </div>\n                                                <a (click)=\"xemNhomDichVuThuongDung()\"\n                                                    style=\"color:green; text-decoration: underline; font-weight: bold;\">\n                                                    Nhóm dịch vụ thường dùng\n                                                </a>\n                                            </div>\n\n                                            <!-- Dong dich vu giuong va goi kham vao 21/8/2020 -->\n\n                                            <!-- <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\" class=\"m-0 pb-0\"\n                                                style=\"width: 100%;\">\n                                                <label style=\"margin-top: 36px;\" fxFlex=\"7%\" fxFlex.sm=\"7%\">\n                                                    Gói dịch vụ:\n                                                </label>\n                                                <app-combobox id=\"MaDichVuGoiId\" fxFlex=\"33%\" fxFlex.sm=\"33%\"\n                                                    label=\"Gói khám\" url=\"TiepNhanBenhNhan/GetGoiKhamTongHop\"\n                                                    [(model)]=\"themChiDinhGoiModel.MaDichVuGoiId\" [required]=\"true\"\n                                                    [template]=\"goiTemplate\" (selectionChange)=\"MaDichVuGoiSelectionChange($event)\"\n                                                    [templateHeader]=\"goiTemplateHeader\" class=\"item-no-padding\"\n                                                    [validationerror]=\"'MaDichVuGoiId' | validationerror:validationErrors\">\n                                                    <ng-template #goiTemplateHeader let-dataItem>\n                                                        <table width=\"100%\" class=\"table-combobox\">\n                                                            <tr>\n                                                                <th width=\"70%\">Tên gói</th>\n                                                                <th>Chiết khấu </th>\n                                                            </tr>\n                                                        </table>\n                                                    </ng-template>\n                                                    <ng-template #goiTemplate let-dataItem>\n                                                        <table width=\"100%\" class=\"table-combobox\">\n                                                            <tr>\n                                                                <td width=\"70%\">{{dataItem.Ten}}</td>\n                                                                <td>{{dataItem.ChietKhau}}</td>\n                                                            </tr>\n                                                        </table>\n                                                    </ng-template>\n                                                </app-combobox>\n\n                                                <div fxFlex=\"10%\" fxFlex.sm=\"10%\">\n                                                    <button class=\"mt-5\" (click)=\"themChiDinhDichVuGoiNew()\"\n                                                        title=\"Thêm\" color=\"primary\" mat-raised-button>Thêm\n                                                    </button>\n                                                </div>\n\n                                            </div> -->\n\n\n\n\n                                            <div style=\"display: inline-block !important;\" fxFlex=\"100%\"\n                                                *ngIf=\"gridDataKhacCoChietKhauDisplay != null && gridDataKhacCoChietKhauDisplay.length != 0\">\n\n\n                                                <div fxFlex=\"100%\"\n                                                    *ngIf=\"gridDataKhacCoChietKhauArray != undefined && gridDataKhacCoChietKhauArray != null\">\n                                                    <div class=\"header-grid\">GÓI CÓ CHIẾT KHẤU</div>\n                                                    <div *ngFor=\"let item of gridDataKhacCoChietKhauArray; let i = index\"\n                                                        fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"0 grid\"\n                                                        fxLayoutGap.lt-sm=\"0\" style=\"width: 100%;\">\n                                                        <div fxFlex=\"100%\" style=\"background: #ebeced;\">\n                                                            <span class=\"header-span-grid\"\n                                                                style=\"padding: 13px 0 0 0;display: inline-block;\">\n                                                                {{item.data[0].items[0].TenGoiChietKhau}}\n                                                            </span>\n                                                            <span style=\"float:right;\">\n                                                                <button (click)=\"removeGridKhacCoChietKhau(item)\"\n                                                                    mat-icon-button>\n                                                                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                                                                </button>\n                                                            </span>\n                                                        </div>\n                                                        <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" #gridCoChietKhau\n                                                            masterName=\"{{item.data[0].items[0].GoiCoChietKhauId}}\"\n                                                            [gridColumns]=\"gridCoChietKhauColumns\"\n                                                            [gridDataSource]=\"item\" [documentType]=\"documentType\"\n                                                            [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                                                            [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                                                            [lazyLoadPage]=\"true\" maxHeight=\"500\" [pageable]=\"false\"\n                                                            [groups]=\"groupChietKhau\">\n                                                        </app-grid>\n                                                    </div>\n                                                </div>\n\n                                            </div>\n\n                                            <div fxFlex=\"100%\"\n                                                *ngIf=\"gridDataKhacDisplay != null && gridDataKhacDisplay.length != 0 && gridDataKhacDisplay.total != 0\">\n                                                <div *ngIf=\"gridDataKhacCoChietKhauDisplay != null && gridDataKhacCoChietKhauDisplay.length != 0\"\n                                                    class=\"header-grid\">DỊCH VỤ KHÁC</div>\n                                                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"0 grid\"\n                                                    fxLayoutGap.lt-sm=\"0\">\n                                                    <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" #gridKhongChietKhau\n                                                        [gridColumns]=\"gridKhongChietKhauColumns\"\n                                                        [gridDataSource]=\"gridDataKhacDisplay\" masterName=\"goiKhac\"\n                                                        [removeGroupFooterIfIsOnlyOne]=\"true\"\n                                                        [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                                                        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                                                        [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\"\n                                                        [pageable]=\"false\" [groups]=\"groupKhongChietKhau\">\n                                                    </app-grid>\n                                                </div>\n\n                                            </div>\n                                            <div fxFlex=\"100%\" fxFlex.sm=\"100%\"\n                                                *ngIf=\"this.tiepNhanBenhNhan.YeuCauKhacGrid != null\n                                                && this.tiepNhanBenhNhan.YeuCauKhacGrid != undefined\n                                                && this.tiepNhanBenhNhan.YeuCauKhacGrid.length > 0\n                                                && gridDataKhacCoChietKhauDisplay != null && gridDataKhacCoChietKhauDisplay.length != 0\">\n                                                <div class=\"styleTinhTong\">\n                                                    <ul class=\"inline\">\n                                                        <li>Tổng cộng: <strong\n                                                                style=\"color: blue;\">{{totalKhac('TongThanhTienGoi', 1)\n                                                                | currency:'VND'}}</strong>\n                                                        </li>\n                                                        <li>Tổng tiền NB thanh toán: <strong\n                                                                style=\"color:red;\">{{totalKhac('TongThanhTienBNTra', 1)\n                                                                | currency:'VND'}}</strong>\n                                                        </li>\n                                                    </ul>\n                                                </div>\n                                            </div>\n\n                                        </div>\n\n                                    </ng-template>\n                                </kendo-tabstrip-tab>\n                                <kendo-tabstrip-tab>\n                                    <ng-template kendoTabTitle>\n                                        <div kendoTooltip title=\"Phím tắt: Ctrl + F9\">\n                                            Tài liệu đính kèm\n                                        </div>\n                                    </ng-template>\n                                    <ng-template kendoTabContent>\n                                        <!-- grid -->\n                                        <app-grid [gridColumns]=\"gridTaiLieuDinhKemColumns\"\n                                            [gridDataSource]=\"gridDataTaiLieuDinhKem\" [documentType]=\"documentType\"\n                                            [useActionDefault]=\"false\" [lazyLoadPage]=\"true\"\n                                            [headerTemplate]=\"headerTaiLieuTemplate\" [useHeaderDefault]=\"false\"\n                                            #gridTaiLieuDinhKem [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                                            [autoHeight]=\"true\">\n                                        </app-grid>\n\n\n                                        <ng-template #headerTaiLieuTemplate>\n                                            <div style=\"padding: 16px;border-bottom: 1px solid #ccc;\">\n                                                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                                    fxLayoutGap.lt-sm=\"0\">\n\n                                                    <app-dropdownlist id=\"LoaiId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                        label=\"Loại\" url=\"TiepNhanBenhNhan/GetLoaiTaiLieuDinhKem\"\n                                                        [(model)]=\"themTaiLieu.LoaiId\" required=\"true\"\n                                                        [validationerror]=\"'LoaiId' | validationerror:validationErrors\">\n                                                    </app-dropdownlist>\n\n                                                    <app-upload fxFlex=\"50%\" fxFlex.sm=\"50%\" id=\"TaiLieu\"\n                                                        label=\"Tài liệu\" [model]=\"themTaiLieu.TaiLieu\"\n                                                        (uploadFileDone)=\"uploadTaiLieuDone($event)\" required=\"true\"\n                                                        [validationerror]=\"'TaiLieu' | validationerror:validationErrors\">\n                                                    </app-upload>\n\n                                                    <app-textbox id=\"MoTa\" fxFlex=\"20%\" fxFlex.sm=\"20%\" maxlength=\"100\"\n                                                        label=\"Mô tả\" [(model)]=\"themTaiLieu.MoTa\">\n                                                    </app-textbox>\n\n                                                    <div fxFlex=\"10%\" fxFlex.sm=\"10%\">\n                                                        <button class=\"mt-5\" (click)=\"themTaiLieuButton()\" type=\"button\"\n                                                            color=\"primary\" mat-raised-button>Thêm</button>\n                                                    </div>\n\n                                                </div>\n                                            </div>\n                                        </ng-template>\n\n                                    </ng-template>\n                                </kendo-tabstrip-tab>\n                                <kendo-tabstrip-tab>\n                                    <ng-template kendoTabTitle>\n                                        <div kendoTooltip title=\"Phím tắt: Ctrl + F10\">\n                                            Người giám hộ\n                                        </div>\n                                    </ng-template>\n\n                                    <ng-template kendoTabContent>\n                                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                            fxLayoutGap.lt-sm=\"0\" class=\"m-0\">\n\n                                            <app-textbox id=\"NguoiLienHeHoTen\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                maxlength=\"100\" label=\"Họ và tên\" [upperCase]=\"true\"\n                                                [(model)]=\"tiepNhanBenhNhan.NguoiLienHeHoTen\"\n                                                [validationerror]=\"'NguoiLienHeHoTen' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-combobox id=\"NguoiLienHeQuanHeNhanThan\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                label=\"Quan hệ\" url=\"TiepNhanBenhNhan/GetQuanHe\" bind=\"true\"\n                                                [(model)]=\"tiepNhanBenhNhan.NguoiLienHeQuanHeNhanThanId\"\n                                                [validationerror]=\"'NguoiLienHeQuanHeNhanThanId' | validationerror:validationErrors\">\n                                            </app-combobox>\n\n                                            <app-textboxmask id=\"NguoiLienHeSoDienThoai\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                label=\"Số điện thoại\" maxlength=\"10\"\n                                                [(model)]=\"tiepNhanBenhNhan.NguoiLienHeSoDienThoai\" mask=\"000 000 0000\"\n                                                [validationerror]=\"'NguoiLienHeSoDienThoai' | validationerror:validationErrors\">\n                                            </app-textboxmask>\n                                            <app-textbox id=\"NguoiLienHeEmail\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                label=\"Email\" maxlength=\"200\"\n                                                [(model)]=\"tiepNhanBenhNhan.NguoiLienHeEmail\"\n                                                [validationerror]=\"'NguoiLienHeEmail' | validationerror:validationErrors\">\n                                            </app-textbox>\n\n                                            <app-combobox id=\"NguoiLienHeTinhThanhId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                (modelChange)=\"TinhThanhPhoNguoiLienHeChange($event)\" bind=\"true\"\n                                                broadcastAfterLoaded=\"true\" label=\"Tỉnh/Thành Phố\"\n                                                url=\"TiepNhanBenhNhan/GetTinhThanh\" hierarchyKeyToSend=\"tinhThanhLienHe\"\n                                                [(model)]=\"tiepNhanBenhNhan.NguoiLienHeTinhThanhId\"\n                                                class=\"item-no-padding\" [template]=\"tinhThanhTemplate\"\n                                                [templateHeader]=\"tinhThanhTemplateHeader\">\n                                                <ng-template #tinhThanhTemplateHeader let-dataItem>\n                                                    <table width=\"100%\" class=\"table-combobox\">\n                                                        <tr>\n                                                            <th width=\"20%\">Mã</th>\n                                                            <th>Tên</th>\n                                                        </tr>\n                                                    </table>\n                                                </ng-template>\n                                                <ng-template #tinhThanhTemplate let-dataItem>\n                                                    <table width=\"100%\" class=\"table-combobox\">\n                                                        <tr>\n                                                            <td width=\"20%\">{{dataItem.Ma}}</td>\n                                                            <td>{{dataItem.Ten}}</td>\n                                                        </tr>\n                                                    </table>\n                                                </ng-template>\n                                            </app-combobox>\n\n                                            <app-combobox id=\"NguoiLienHeQuanHuyenId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                label=\"Quận/Huyện\" (modelChange)=\"QuanHuyenNguoiLienHeChange($event)\"\n                                                url=\"TiepNhanBenhNhan/GetQuanHuyen\" bind=\"true\"\n                                                broadcastAfterLoaded=\"true\" hierarchyKeyToListen=\"tinhThanhLienHe\"\n                                                hierarchyKeyToSend=\"quanHuyenLienHe\"\n                                                [(model)]=\"tiepNhanBenhNhan.NguoiLienHeQuanHuyenId\"\n                                                class=\"item-no-padding\" [template]=\"quanHuyenTemplate\"\n                                                [templateHeader]=\"quanHuyenTemplateHeader\"\n                                                [queryInfo]=\"queryInfoNguoiLienHeQuanHuyen\">\n                                                <ng-template #quanHuyenTemplateHeader let-dataItem>\n                                                    <table width=\"100%\" class=\"table-combobox\">\n                                                        <tr>\n                                                            <th width=\"20%\">Mã</th>\n                                                            <th>Tên</th>\n                                                        </tr>\n                                                    </table>\n                                                </ng-template>\n                                                <ng-template #quanHuyenTemplate let-dataItem>\n                                                    <table width=\"100%\" class=\"table-combobox\">\n                                                        <tr>\n                                                            <td width=\"20%\">{{dataItem.Ma}}</td>\n                                                            <td>{{dataItem.Ten}}</td>\n                                                        </tr>\n                                                    </table>\n                                                </ng-template>\n                                            </app-combobox>\n\n                                            <app-combobox id=\"NguoiLienHePhuongXaId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                label=\"Phường/Xã\" url=\"TiepNhanBenhNhan/GetPhuongXa\" bind=\"true\"\n                                                broadcastAfterLoaded=\"true\" hierarchyKeyToListen=\"quanHuyenLienHe\"\n                                                [(model)]=\"tiepNhanBenhNhan.NguoiLienHePhuongXaId\"\n                                                class=\"item-no-padding\" [template]=\"phuongXaTemplate\"\n                                                [templateHeader]=\"phuongXaTemplateHeader\"\n                                                [queryInfo]=\"queryInfoNguoiLienHePhuongXa\">\n                                                <ng-template #phuongXaTemplateHeader let-dataItem>\n                                                    <table width=\"100%\" class=\"table-combobox\">\n                                                        <tr>\n                                                            <th width=\"20%\">Mã</th>\n                                                            <th>Tên</th>\n                                                        </tr>\n                                                    </table>\n                                                </ng-template>\n                                                <ng-template #phuongXaTemplate let-dataItem>\n                                                    <table width=\"100%\" class=\"table-combobox\">\n                                                        <tr>\n                                                            <td width=\"20%\">{{dataItem.Ma}}</td>\n                                                            <td>{{dataItem.Ten}}</td>\n                                                        </tr>\n                                                    </table>\n                                                </ng-template>\n                                            </app-combobox>\n\n                                            <app-textbox id=\"SoNhaDuongPho\" fxFlex=\"20%\" fxFlex.sm=\"20%\" maxlength=\"200\"  class=\"text-transform-capitalize\"\n                                                label=\"Số nhà/Đường phố\"\n                                                [(model)]=\"tiepNhanBenhNhan.NguoiLienHeDiaChi\">\n                                            </app-textbox>\n                                        </div>\n                                    </ng-template>\n                                </kendo-tabstrip-tab>\n                                <kendo-tabstrip-tab>\n                                    <ng-template kendoTabTitle>\n                                        <div kendoTooltip title=\"Phím tắt: Ctrl + F11\">\n                                            Lịch Hẹn\n                                        </div>\n                                    </ng-template>\n                                    <ng-template kendoTabContent>\n                                        <app-tiep-nhan-benh-nhan-tai-kham [(BenhNhan)]=\"benhNhanId\">\n                                        </app-tiep-nhan-benh-nhan-tai-kham>\n                                    </ng-template>\n                                </kendo-tabstrip-tab>\n                                <kendo-tabstrip-tab>\n                                    <ng-template kendoTabTitle>\n                                        <div kendoTooltip title=\"Phím tắt: Ctrl + F12\">\n                                            Lịch Sử Khám Bệnh\n                                        </div>\n                                    </ng-template>\n                                    <ng-template kendoTabContent>\n                                        <app-kham-benh-lich-su-kham-list [(BenhNhan)]=\"benhNhanId\">\n                                        </app-kham-benh-lich-su-kham-list>\n                                        <!-- <app-tiep-nhan-benh-nhan-lich-su [(benhNhanId)]=\"benhNhanId\"></app-tiep-nhan-benh-nhan-lich-su> -->\n                                    </ng-template>\n                                </kendo-tabstrip-tab>\n                            </kendo-tabstrip>\n\n                            <ng-template #donGiaKhamBenhTemplate let-dataItem>\n                                {{dataItem.DonGia | currency:'VND'}}\n                            </ng-template>\n\n                            <ng-template #donGiaKhamBenhFooterTemplate let-dataItem>\n                                <span style=\"float:right\">Tổng cộng:</span>\n                            </ng-template>\n\n                            <ng-template #thanhTienKhamBenhTemplate let-dataItem>\n                                {{dataItem.ThanhTien | currency:'VND'}}\n                            </ng-template>\n\n                            <ng-template #thanhTienKhamBenhGroupFooterTemplate let-aggregates>\n                                {{aggregates.ThanhTien.sum | currency:'VND'}}\n                            </ng-template>\n\n                            <ng-template #thanhTienKhamBenhFooterTemplate let-dataItem>\n                                <div fxLayoutAlign=\"start center\" fxLayout=\"row\">\n                                    <div>\n                                        <span style=\"color:blue;\">{{totalKhamBenh('ThanhTien') | currency:'VND'}}</span>\n                                    </div>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #bhytThanhToanKhamBenhTemplate let-dataItem>\n                                {{dataItem.BHYTThanhToan | currency:'VND'}}\n                            </ng-template>\n\n                            <ng-template #bhytThanhToanKhamBenhFooterTemplate let-dataItem>\n                                <div fxLayoutAlign=\"start center\" fxLayout=\"row\">\n                                    <div>\n                                        <span>{{totalKhamBenh('BHYTThanhToan') | currency:'VND'}}</span>\n                                    </div>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #bhytThanhToanKhamBenhGroupFooterTemplate let-aggregates>\n                                {{aggregates.BHYTThanhToan.sum | currency:'VND'}}\n                            </ng-template>\n\n                            <ng-template #soTienMgKhamBenhTemplate let-dataItem>\n                                {{dataItem.SoTienMG | currency:'VND'}}\n                            </ng-template>\n\n                            <ng-template #soTienMgKhamBenhFooterTemplate>\n                                <div fxLayoutAlign=\"start center\" fxLayout=\"row\">\n                                    <div>\n                                        <span>{{totalKhamBenh('SoTienMG') | currency:'VND'}}</span>\n                                    </div>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #soTienMgKhamBenhGroupFooterTemplate let-aggregates>\n                                {{aggregates.SoTienMG.sum | currency:'VND'}}\n                            </ng-template>\n\n                            <ng-template #bnThanhToanKhamBenhTemplate let-dataItem>\n                                {{dataItem.BnThanhToan | currency:'VND'}}\n                            </ng-template>\n\n                            <ng-template #bnThanhToanKhamBenhGroupFooterTemplate let-aggregates>\n                                {{aggregates.BnThanhToan.sum | currency:'VND'}}\n                            </ng-template>\n\n                            <ng-template #bnThanhToanKhamBenhFooterTemplate let-dataItem>\n                                <div fxLayoutAlign=\"start center\" fxLayout=\"row\">\n                                    <div>\n                                        <span style=\"color:red;\">{{totalKhamBenh('BnThanhToan') |\n                                            currency:'VND'}}</span>\n                                    </div>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #actionKhamBenhTemplate let-dataItem>\n                                <button (click)=\"removeGridKhamBenh(dataItem)\" mat-menu-item>\n                                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                                </button>\n                            </ng-template>\n\n                            <ng-template #donGiaKyThuatTemplate let-dataItem>\n                                {{dataItem.DonGia | currency:'VND'}}\n                            </ng-template>\n\n                            <ng-template #donGiaKyThuatFooterTemplate let-dataItem>\n                                <span style=\"float:right\">Tổng cộng:</span>\n                            </ng-template>\n\n                            <ng-template #thanhTienKyThuatTemplate let-dataItem>\n                                {{dataItem.ThanhTien | currency:'VND'}}\n                            </ng-template>\n\n                            <ng-template #thanhTienKyThuatGroupFooterTemplate let-aggregates>\n                                {{aggregates.ThanhTien.sum | currency:'VND'}}\n                            </ng-template>\n\n                            <ng-template #thanhTienKyThuatFooterTemplate let-dataItem>\n                                <div fxLayoutAlign=\"start center\" fxLayout=\"row\">\n                                    <div>\n                                        <span style=\"color:blue;\">{{totalKyThuat('ThanhTien') | currency:'VND'}}</span>\n                                    </div>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #soTienMgKyThuatTemplate let-dataItem>\n                                {{dataItem.SoTienMG | currency:'VND'}}\n                            </ng-template>\n\n                            <ng-template #soTienMgKyThuatFooterTemplate>\n                                <div fxLayoutAlign=\"start center\" fxLayout=\"row\">\n                                    <div>\n                                        <span>{{totalKyThuat('SoTienMG') | currency:'VND'}}</span>\n                                    </div>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #soTienMgKyThuatGroupFooterTemplate let-aggregates>\n                                {{aggregates.SoTienMG.sum | currency:'VND'}}\n                            </ng-template>\n\n                            <ng-template #bnThanhToanKyThuatTemplate let-dataItem>\n                                {{dataItem.BnThanhToan | currency:'VND'}}\n                            </ng-template>\n\n                            <ng-template #bnThanhToanKyThuatFooterTemplate let-dataItem>\n                                <div fxLayoutAlign=\"start center\" fxLayout=\"row\">\n                                    <div>\n                                        <span style=\"color:red;\">{{totalKyThuat('BnThanhToan') | currency:'VND'}}</span>\n                                    </div>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #bnThanhToanKyThuatGroupFooterTemplate let-aggregates>\n                                {{aggregates.BnThanhToan.sum | currency:'VND'}}\n                            </ng-template>\n\n                            <ng-template #actionKyThuatTemplate let-dataItem>\n                                <button (click)=\"removeGridKyThuat(dataItem)\" mat-menu-item>\n                                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                                </button>\n                            </ng-template>\n\n                            <ng-template #donGiaKhongChietKhauTemplate let-dataItem>\n                                {{(dataItem.IsGoiCoChietKhau ? dataItem.DonGiaSauChietKhau : dataItem.DonGia) | currency:'VND'}}\n                            </ng-template>\n\n                            <ng-template #donGiaBHYTTemplate let-dataItem>\n                                {{dataItem.GiaBHYT | currency:'VND'}}\n                            </ng-template>\n\n                            <ng-template #donGiaKhongChietKhauFooterTemplate let-dataItem>\n                                <span style=\"float:right\">Tổng cộng:</span>\n                            </ng-template>\n\n                            <ng-template #tenDichVuKhongChietKhauFooterTemplate let-dataItem>\n                                <span style=\"float:right\">Cộng:</span>\n                            </ng-template>\n\n                            <ng-template #thanhTienKhongChietKhauTemplate let-dataItem>\n                                {{(dataItem.IsGoiCoChietKhau ? dataItem.ThanhTienSauChietKhau : dataItem.ThanhTien) | currency:'VND'}}\n                            </ng-template>\n\n                            <ng-template #thanhTienKhongChietKhauGroupFooterTemplate let-aggregates>\n                                {{aggregates.ThanhTien.sum | currency:'VND'}}\n                                <!-- {{tinhThanhTienDichVuBaoGomTrongGoiTheGroup(group, value) | currency:'VND'}} -->\n                            </ng-template>\n\n                            <ng-template #thanhTienKhongChietKhauFooterTemplate let-dataItem>\n                                <div fxLayoutAlign=\"start center\" fxLayout=\"row\">\n                                    <div>\n                                        <span style=\"color:blue;\">{{totalKhac('ThanhTien', 1) | currency:'VND'}}</span>\n                                    </div>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #bhytThanhToanKhongChietKhauTemplate let-dataItem>\n                                {{dataItem.BHYTThanhToan | currency:'VND'}}\n                            </ng-template>\n\n                            <ng-template #bhytThanhToanKhongChietKhauGroupFooterTemplate let-aggregates>\n                                {{aggregates.BHYTThanhToan.sum | currency:'VND'}}\n                            </ng-template>\n\n                            <ng-template #bhytThanhToanKhongChietKhauFooterTemplate let-dataItem>\n                                <div fxLayoutAlign=\"start center\" fxLayout=\"row\">\n                                    <div>\n                                        <span>{{totalKhac('BHYTThanhToan', 0) | currency:'VND'}}</span>\n                                    </div>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #soTienMgKhongChietKhauTemplate let-dataItem>\n                                {{dataItem.SoTienMG | currency:'VND'}}\n                            </ng-template>\n\n                            <ng-template #soTienMgKhongChietKhauGroupFooterTemplate let-aggregates>\n                                {{aggregates.SoTienMG.sum | currency:'VND'}}\n                            </ng-template>\n\n                            <ng-template #soTienMgKhongChietKhauFooterTemplate let-masterName>\n                                <span style=\"color:red;\">{{totalKhac('SoTienMG', masterName) | currency:'VND'}}</span>\n                            </ng-template>\n\n                            <ng-template #bnThanhToanKhongChietKhauTemplate let-dataItem>\n                                {{dataItem.BnThanhToan | currency:'VND'}}\n                            </ng-template>\n\n                            <ng-template #bnThanhToanKhongChietKhauGroupFooterTemplate let-aggregates>\n                                {{aggregates.BnThanhToan.sum | currency:'VND'}}\n                            </ng-template>\n\n                            <ng-template #bnThanhToanKhongChietKhauFooterTemplate let-masterName>\n                                <span style=\"color:red;\">{{totalKhac('BnThanhToan', masterName) |\n                                    currency:'VND'}}</span>\n                            </ng-template>\n\n                            <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n                                <strong>{{value}}</strong>\n                            </ng-template>\n\n                            <ng-template #duocHuongBHYTTemplate let-dataItem>\n                                <!-- [disabled]=\"dataItem.Nhom != 'DỊCH VỤ KHÁM BỆNH' || duocHuongBHYT != true || dataItem.GiaBHYT == 0 || dataItem.GiaBHYT == null\" update 10/8/2020 -->\n                                <app-checkbox [disabled]=\"true\"\n                                    (modelChange)=\"duocHuongBHYTChange($event, dataItem.MaDichVuId, dataItem.Nhom)\"\n                                    [(model)]=\"dataItem.DuocHuongBHYT\"\n                                    id=\"DuocHuongBHYT{{dataItem.MaDichVuId}}{{dataItem.Nhom}}\" label=\"Có\">\n                                </app-checkbox>\n                            </ng-template>\n\n                            <ng-template #loaiGiaTemplate let-dataItem>\n                                <!-- url=\"TiepNhanBenhNhan/GetLoaiGiaKhamBenh\" -->\n                                <app-combobox id=\"LoaiGiaGrid-{{dataItem.Id}}\" label=\"\" class=\"no-label\"\n                                    (modelChange)=\"loaiGiaGridChange($event, dataItem)\"\n                                    url=\"{{dataItem.Nhom == 'DỊCH VỤ KHÁM BỆNH' ? 'KhamBenh/LoaiGiaHieuLucTheoDichVuKham' : 'KhamBenh/LoaiGiaHieuLucTheoDichVuKyThuat'}}\"\n                                    [disabled]=\"dataItem.IsGoiCoChietKhau || (dataItem.YeuCauGoiDichVuKhuyenMaiId != null && dataItem.YeuCauGoiDichVuKhuyenMaiId != 0)\"\n                                    [(model)]=\"dataItem.LoaiGiaId\" popupSettings=\"null\" [bind]=\"true\" [reloadForGrid]=\"true\"\n                                    [queryInfo]=\"{ParameterDependencies:'{DichVuId:' +dataItem.MaDichVuId +'}', Take: 50}\">\n                                </app-combobox>\n                            </ng-template>\n\n                            <ng-template #sttKhongChietKhauTemplate let-rowIndex=\"rowIndex\">\n                                {{rowIndex + 1}}\n                            </ng-template>\n                            <ng-template #sttCoChietKhauTemplate let-rowIndex=\"rowIndex\">\n                                {{rowIndex + 1}}\n                            </ng-template>\n                            <!-- [max]=\"dataItem.IsGoiCoChietKhau ? dataItem.SoLuongConLai : 1000\" -->\n                            <ng-template #soLuongTemplate let-dataItem>\n                                <!-- {{test(dataItem)}} -->\n                                <app-textboxnumeric [disabled]=\"dataItem.Nhom == 'DỊCH VỤ KHÁM BỆNH' || (dataItem.YeuCauGoiDichVuKhuyenMaiId != null && dataItem.YeuCauGoiDichVuKhuyenMaiId != 0)\"\n                                    (modelChange)=\"soLuongGridChange($event, dataItem)\" min=1\n                                    [max]=\"dataItem.IsGoiCoChietKhau ? 99999 : 1000\" [(model)]=\"dataItem.SoLuong\"\n                                    id=\"NumerictextboxGrid\" label=\"\" format=\"0\" class=\"item-no-padding no-label\">\n                                </app-textboxnumeric>\n\n                            </ng-template>\n\n                            <ng-template #noiThucHienKhongChietKhauTemplate let-dataItem>\n                                <div *ngIf=\"dataItem.Nhom == 'DỊCH VỤ GIƯỜNG'\">\n                                    <app-combobox popupSettings=\"\" id=\"NoiThucHien43{{dataItem.MaDichVuId}}\" label=\"\"\n                                        autoSelectFirstItem=\"true\" reloadForGrid=\"true\" idWhere=\"1\"\n                                        url=\"TiepNhanBenhNhan/GetPhongKhamDichVuGiuongKhac/?id={{dataItem.MaDichVuId}}\"\n                                        [(model)]=\"dataItem.NoiThucHienId\" bind=true [required]=\"true\"\n                                        [template]=\"phongKhamTemplate\" [templateHeader]=\"phongKhamTemplateHeader\"\n                                        class=\"item-no-padding no-label\"\n                                        [popupSettings]=\"{width: 400,popupClass:'item-no-padding'}\">\n\n                                        <ng-template #phongKhamTemplateHeader let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <th width=\"20%\">Mã</th>\n                                                    <th width=\"20%\">Phòng</th>\n                                                    <th width=\"60%\">SL đang thực hiện</th>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                        <ng-template #phongKhamTemplate let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <td width=\"20%\">{{dataItem.MaPhong}}</td>\n                                                    <td width=\"60%\">{{dataItem.TenPhong}}</td>\n                                                    <td width=\"20%\">{{dataItem.Tong}}</td>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                    </app-combobox>\n                                </div>\n\n                                <div *ngIf=\"dataItem.Nhom == 'DỊCH VỤ KHÁM BỆNH'\">\n                                    <app-combobox id=\"NoiThucHienDVKBKCK{{dataItem.MaDichVuId}}\" reloadForGrid=\"true\"\n                                        autoSelectFirstItem=\"true\" idWhere=\"1\" label=\"\"\n                                        url=\"TiepNhanBenhNhan/GetPhongKhamKhac/?id={{dataItem.MaDichVuId}}\"\n                                        [(model)]=\"dataItem.NoiThucHienId\" bind=true [required]=\"true\"\n                                        [template]=\"phongKhamTemplate\" [templateHeader]=\"phongKhamTemplateHeader\"\n                                        class=\"item-no-padding no-label\"\n                                        [popupSettings]=\"{width: 600,popupClass:'item-no-padding'}\">\n\n                                        <ng-template #phongKhamTemplateHeader let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <th width=\"40%\">Phòng</th>\n                                                    <th width=\"40%\">Bác sĩ</th>\n                                                    <th width=\"10%\">Đ.khám</th>\n                                                    <th width=\"10%\">Tổng</th>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                        <ng-template #phongKhamTemplate let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <td width=\"40%\">{{dataItem.TenPhong}}</td>\n                                                    <td width=\"40%\">{{dataItem.TenBacSi}}</td>\n                                                    <td width=\"10%\">{{dataItem.DangKham}}</td>\n                                                    <td width=\"10%\">{{dataItem.Tong}}</td>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                    </app-combobox>\n                                </div>\n\n                                <div *ngIf=\"dataItem.Nhom == 'DỊCH VỤ KỸ THUẬT'\">\n                                    <app-combobox id=\"NoiThucHien23a{{dataItem.MaDichVuId}}\" label=\"\"\n                                        autoSelectFirstItem=\"true\" reloadForGrid=\"true\" idWhere=\"1\"\n                                        url=\"TiepNhanBenhNhan/GetPhongKhamKyThuatKhac/?id={{dataItem.MaDichVuId}}\"\n                                        [(model)]=\"dataItem.NoiThucHienId\" bind=true [required]=\"true\"\n                                        [template]=\"phongKhamTemplate\" [templateHeader]=\"phongKhamTemplateHeader\"\n                                        class=\"item-no-padding no-label\"\n                                        [popupSettings]=\"{width: 400,popupClass:'item-no-padding'}\">\n\n                                        <ng-template #phongKhamTemplateHeader let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <th width=\"20%\">Mã</th>\n                                                    <th width=\"60%\">Phòng</th>\n                                                    <th>SL ĐTH</th>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                        <ng-template #phongKhamTemplate let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <td width=\"20%\">{{dataItem.MaPhong}}</td>\n                                                    <td width=\"60%\">{{dataItem.TenPhong}}</td>\n                                                    <td>{{dataItem.Tong}}</td>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                    </app-combobox>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #actionKhongChietKhauTemplate let-dataItem>\n                                <button (click)=\"removeGridKhac(dataItem)\" mat-menu-item>\n                                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                                </button>\n                            </ng-template>\n\n                            <ng-template #donGiaChietKhauTemplate let-dataItem>\n                                {{dataItem.DonGia | currency:'VND'}}\n                            </ng-template>\n\n\n                            <ng-template #thanhTienChietKhauTemplate let-dataItem>\n                                {{dataItem.ThanhTien | currency:'VND'}}\n                            </ng-template>\n                            <ng-template #thanhTienTrongGoiChietKhauTemplate let-dataItem>\n                                {{dataItem.ThanhTienTrongGoi | currency:'VND'}}\n                            </ng-template>\n\n                            <ng-template #donGiaChietKhauFooterTemplate let-dataItem>\n                                <span style=\"float:right\">Giá trước CK:</span>\n                            </ng-template>\n\n                            <!-- <ng-template #thanhTienTrongGoiChietKhauGroupFooterTemplate let-aggregates>\n                                {{aggregates.ThanhTienTrongGoi.sum | currency:'VND'}}\n                            </ng-template> -->\n\n                            <ng-template #thanhTienTrongGoiChietKhauFooterTemplate let-masterName>\n                                <span style=\"color:red;\">{{totalKhac('ThanhTienTrongGoi', masterName) |\n                                    currency:'VND'}}</span>\n                            </ng-template>\n\n                            <!-- <ng-template #thanhTienChietKhauGroupFooterTemplate let-aggregates>\n                                {{aggregates.ThanhTien.sum | currency:'VND'}}\n                            </ng-template> -->\n\n                            <ng-template #thanhTienChietKhauFooterTemplate let-masterName>\n                                <span style=\"color:blue\">{{totalKhac('ThanhTienGoiChietKhau', masterName) |\n                                    currency:'VND'}}</span>\n                            </ng-template>\n\n                            <ng-template #thanhTienTrongGoiChietKhauTemplate let-dataItem>\n                                {{dataItem.ThanhTienTrongGoi | currency:'VND'}}\n                            </ng-template>\n\n                            <ng-template #tyLeChietKhauCoChietKhauTemplate let-dataItem>\n                                {{dataItem.TyLeChietKhauDisplay}}\n                            </ng-template>\n\n                            <ng-template #duocGiamTrongGoiCoChietKhauTemplate let-dataItem>\n                                {{dataItem.DuocGiamTrongGoi | currency:'VND'}}\n                            </ng-template>\n\n                            <ng-template #duocGiamTrongGoiCoChietKhauFooterTemplate let-dataItem>\n                                <div>\n                                    <span style=\"float:right\">Giá sau CK:</span>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #tenDvTemplate let-dataItem>\n                                <div *ngIf=\"dataItem.IsGoiCoChietKhau\" class=\"xac-nhan-ng-template\" kendoTooltip\n                                    #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\" position=\"top\"\n                                    [tooltipTemplate]=\"templateInfo\" filter=\"*\"\n                                    (mouseover)=\"setUpDataTooltip(dataItem)\">\n                                    <mat-icon [icIcon]=\"icInfo\" class=\"info\"></mat-icon>\n                                </div>\n\n                                <ng-template #templateInfo let-dataItem>\n                                    <span>Dịch vụ chọn từ gói: {{displayToolTipGrid}} </span>\n                                </ng-template>\n\n                                <div class=\"xac-nhan-ng-template\" kendoTooltip>\n                                    <p class=\"ten-dich-vu-label\" title={{dataItem.TenDichVu}}>\n                                        {{dataItem.TenDichVu}}</p>\n                                </div>\n\n                            </ng-template>\n\n                            <ng-template #noiThucHienChietKhauTemplate let-dataItem>\n                                <div *ngIf=\"dataItem.Nhom == 'DỊCH VỤ GIƯỜNG'\">\n                                    <app-combobox id=\"NoiThucHien{{dataItem.MaDichVuId}}\" fxFlex=\"100%\" fxFlex.sm=\"100%\"\n                                        label=\"\" autoSelectFirstItem=\"true\" reloadForGrid=\"true\" idWhere=\"1\"\n                                        url=\"TiepNhanBenhNhan/GetPhongKhamDichVuGiuongKhac/?id={{dataItem.MaDichVuId}}\"\n                                        [(model)]=\"dataItem.NoiThucHienId\" bind=true [required]=\"true\"\n                                        [template]=\"phongKhamTemplate\" [templateHeader]=\"phongKhamTemplateHeader\"\n                                        class=\"item-no-padding no-label\"\n                                        [popupSettings]=\"{width: 400,popupClass:'item-no-padding'}\">\n\n                                        <ng-template #phongKhamTemplateHeader let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <th width=\"20%\">Mã</th>\n                                                    <th width=\"60%\">Phòng</th>\n                                                    <th>SL ĐTH</th>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                        <ng-template #phongKhamTemplate let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <td width=\"20%\">{{dataItem.MaPhong}}</td>\n                                                    <td width=\"60%\">{{dataItem.TenPhong}}</td>\n                                                    <td>{{dataItem.Tong}}</td>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                    </app-combobox>\n                                </div>\n\n                                <div *ngIf=\"dataItem.Nhom == 'DỊCH VỤ KHÁM BỆNH'\">\n                                    <app-combobox id=\"NoiThucHienDVKB{{dataItem.MaDichVuId}}\" fxFlex=\"100%\"\n                                        fxFlex.sm=\"100%\" label=\"\" bind=true reloadForGrid=\"true\" idWhere=\"1\"\n                                        url=\"TiepNhanBenhNhan/GetPhongKhamKhac/?id={{dataItem.MaDichVuId}}\"\n                                        [(model)]=\"dataItem.NoiThucHienId\" [required]=\"true\" autoSelectFirstItem=\"true\"\n                                        [template]=\"phongKhamTemplate\" [templateHeader]=\"phongKhamTemplateHeader\"\n                                        class=\"item-no-padding no-label\"\n                                        [popupSettings]=\"{width: 600,popupClass:'item-no-padding'}\">\n\n                                        <ng-template #phongKhamTemplateHeader let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <th width=\"40%\">Phòng</th>\n                                                    <th width=\"40%\">Bác sĩ</th>\n                                                    <th width=\"10%\">Đ.khám</th>\n                                                    <th width=\"10%\">Tổng</th>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                        <ng-template #phongKhamTemplate let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <td width=\"40%\">\n                                                        {{dataItem.TenPhong}}</td>\n                                                    <td width=\"40%\">\n                                                        {{dataItem.TenBacSi}}</td>\n                                                    <td width=\"10%\">\n                                                        {{dataItem.DangKham}}</td>\n                                                    <td width=\"10%\">\n                                                        {{dataItem.Tong}}</td>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                    </app-combobox>\n                                </div>\n\n                                <div *ngIf=\"dataItem.Nhom == 'DỊCH VỤ KỸ THUẬT'\">\n                                    <app-combobox id=\"NoiThucHienDVKT{{dataItem.MaDichVuId}}\" fxFlex=\"100%\"\n                                        fxFlex.sm=\"100%\" label=\"\" idWhere=\"1\"\n                                        url=\"TiepNhanBenhNhan/GetPhongKhamKyThuatKhac/?id={{dataItem.MaDichVuId}}\"\n                                        [(model)]=\"dataItem.NoiThucHienId\" bind=true [required]=\"true\"\n                                        autoSelectFirstItem=\"true\" reloadForGrid=\"true\" [template]=\"phongKhamTemplate\"\n                                        [templateHeader]=\"phongKhamTemplateHeader\" class=\"item-no-padding no-label\"\n                                        [popupSettings]=\"{width: 400,popupClass:'item-no-padding'}\">\n\n                                        <ng-template #phongKhamTemplateHeader let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <th width=\"20%\">Mã</th>\n                                                    <th width=\"60%\">Phòng</th>\n                                                    <th>SL ĐTH</th>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                        <ng-template #phongKhamTemplate let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <td width=\"20%\">{{dataItem.MaPhong}}</td>\n                                                    <td width=\"60%\">{{dataItem.TenPhong}}</td>\n                                                    <td>{{dataItem.Tong}}</td>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                    </app-combobox>\n                                </div>\n                            </ng-template>\n\n\n                            <!-- template grid -->\n                            <ng-template #taiLieuTemplate let-dataItem>\n                                <a (click)=\"viewTaiLieu(dataItem)\">\n                                    {{dataItem.Ten}}\n                                </a>\n                            </ng-template>\n\n                            <ng-template #actionTaiLieuTemplate let-dataItem>\n                                <button (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\"\n                                    [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                                    <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n                                </button>\n                                <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                                    <ng-template let-customer=\"customer\" matMenuContent>\n                                        <button (click)=\"removeTaiLieu(dataItem)\" mat-menu-item>\n                                            <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                                            <span>Xóa</span>\n                                        </button>\n                                    </ng-template>\n                                </mat-menu>\n                            </ng-template>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <!-- </div> -->\n            <div class=\"form-footer-fixed\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"8px\" kendoTooltip>\n                <!-- <ul class=\"hot-keys float-left\">\n                    <li class=\"warn\">F1: Quét mã vạch</li>\n                </ul> -->\n                <button *ngIf=\"urlPageUpdateYCTN != null\" type=\"button\" mat-raised-button color=\"primary\"\n                    class=\"float-left\" title=\"Cập nhật YCTN\" (click)=\"chuyenVeTrangCapNhatYCTN()\">Cập nhật YCTN</button>\n\n                <button type=\"button\" mat-button class=\"mr-1\" (click)=\"huy()\" title=\"Phím tắt: Esc\">Hủy</button>\n                <button type=\"button\" *ngIf=\"!loading\" (click)=\"xuLyTaoYeuCauTiepNhan()\" color=\"primary\" title=\"Phím tắt: Ctrl + S\"\n                    [disabled]=\"errMessageKhongChoPhepTaoMoiYCTN != null && errMessageKhongChoPhepTaoMoiYCTN !=''\"\n                    mat-raised-button>Lưu</button>\n                <button type=\"button\" *ngIf=\"!loading\" (click)=\"xuLyTaoYeuCauTiepNhan(true)\" color=\"primary\"\n                    title=\"Phím tắt: Ctrl + Shift + S\"\n                    [disabled]=\"errMessageKhongChoPhepTaoMoiYCTN != null && errMessageKhongChoPhepTaoMoiYCTN !=''\" mat-raised-button>Lưu và in phiếu chỉ định</button>\n                    <!-- title=\"Phím tắt: Ctrl + Shift + S\" -->\n                <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img src=\"/assets/img/loader.gif\"\n                        alt=\"Loading\" /></button>\n            </div>\n            <app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\"></app-barcode>\n        </div>\n\n        <ng-template #dichVuTrongGoiTemplate let-dataItem let-rowIndex=\"rowIndex\">\n            <app-checkbox *ngIf=\"dataItem.TenGoiChietKhau\" id=\"dvGoiMarketing{{rowIndex}}\" label=\"\" [(model)]=\"dataItem.GoiCoChietKhauId\"\n                (modelChange)=\"changeDichVuTrongGoi($event, dataItem)\" [disabled]=\"dataItem.YeuCauGoiDichVuKhuyenMaiId\">\n            </app-checkbox>\n        </ng-template>\n\n        <ng-template #dichVuKhuyenMaiTemplate let-dataItem>\n            <app-checkbox *ngIf=\"dataItem.LaDichVuKhuyenMai\" id=\"dvKhuyenMaiGoiMarketing{{dataItem.Id}}\" label=\"\" [(model)]=\"dataItem.LaDichVuKhuyenMai\"\n                [disabled]=\"true\">\n            </app-checkbox>\n        </ng-template>\n    </vex-page-layout-content>\n</vex-page-layout>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/xem-truoc-bang-ke-chi-phi-poup/xem-truoc-bang-ke-chi-phi-poup.component.html": 
        /*!*********************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/xem-truoc-bang-ke-chi-phi-poup/xem-truoc-bang-ke-chi-phi-poup.component.html ***!
          \*********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\t<div style=\"text-transform: uppercase\">Kết quả phiếu ({{arrFileUrl.length}} file)</div>\n\t<button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n\t\t<mat-icon [icIcon]=\"icClose\" [mat-dialog-close]=\"null\"></mat-icon>\n\t</button>\n</div>\n<mat-dialog-content style=\"height: 550px\">\n\t<div class=\"container-iframe\">\n\t\t<ng-container [ngSwitch]=\"arrFileUrl.length == 1\">\n\t\t\t<div *ngSwitchCase=\"true\">\n\t\t\t\t<ng-container  *ngFor=\"let item of arrFileUrl, let i = index\">\n\t\t\t\t\t<iframe id=\"{{i}}\" width=\"100%\" height=\"1000px\" frameborder=\"0\" [src]=\"item | safe\"\n\t\t\t\t\t\ttype=\"application/pdf\" allowTransparency=\"true\" background=\"transparent\" style=\"display: none\"\n\t\t\t\t\t\tonload=\"this.style.display = 'block';\"></iframe>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\t\t\t<div *ngSwitchDefault>Không có dữ liệu</div>\n\t\t</ng-container>\n\n\t\t<ng-container [ngSwitch]=\"arrFileUrl.length > 1\">\n\t\t\t<div *ngSwitchCase=\"true\">\n\n\t\t\t\t<ng-container  *ngFor=\"let item of arrFileUrl, let i = index\">\n\t\t\t\t\t<iframe id=\"{{i}}\" width=\"100%\" height=\"450px\" frameborder=\"0\" [src]=\"item | safe\"\n\t\t\t\t\t\ttype=\"application/pdf\" allowTransparency=\"true\" background=\"transparent\" style=\"display: none\"\n\t\t\t\t\t\tonload=\"this.style.display = 'block';\"></iframe>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\t\t\t<div *ngSwitchDefault>Không có dữ liệu</div>\n\t\t</ng-container>\n\t</div>\n</mat-dialog-content>\n<mat-dialog-actions class=\"pb-5\">\n\t<button type=\"button\" style=\"margin-left: auto\" [mat-dialog-close]=\"null\" mat-button class=\"mr-1 mt-4\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n\t<button type=\"button\" *ngIf=\"arrFilePdf.length > 0\" (click)=\"downloadAllFile()\" mat-stroked-button color=\"primary\" class=\"mr-1 mt-4\">Tải tất cả</button>\n\t<button type=\"button\" mat-raised-button mat-button (click)=\"ketXuatBangKeChiPhiExcel()\" title=\"xuất excel\" color=\"primary\" class=\"mr-2\">Xuất Excel</button>\n</mat-dialog-actions>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/xn-covid-popup/xn-covid-popup.component.html": 
        /*!*************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/xn-covid-popup/xn-covid-popup.component.html ***!
          \*************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-1\">\n    <div></div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content style=\"overflow:hidden\">\n    <div class=\"container-iframe\">\n        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n            <div fxFlex=\"100%\" fxFlex.sm=\"100%\">\n                <span fxFlex=\"30%\">\n                     Biểu hiện lâm sàng:\n                </span>\n                <app-textarea fxFlex=\"70%\" id=\"BieuHienLamSang\" [(model)]=\"xetNghiemCovid.BieuHienLamSang\" \n                 minHeight=\"20\">\n                </app-textarea>\n            </div>\n            <div fxFlex=\"100%\" fxFlex.sm=\"100%\">\n                <span fxFlex=\"30%\">\n                     Dịch tễ SARS-CoV 2:\n                </span>\n                <app-textarea id=\"DichTeSarsCoV2\" [(model)]=\"xetNghiemCovid.DichTeSarsCoV2\" fxFlex=\"70%\"\n                 minHeight=\"20\">\n            </app-textarea>\n            </div>\n            <div fxFlex=\"100%\" fxFlex.sm=\"100%\">\n                <span >\n                     Loại bệnh án: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>{{xetNghiemCovid.LoaiBenhPham}}</b>\n                </span>\n            </div>\n        </div>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <button tabindex=\"-1\" type=\"button\" (click)=\"save()\" mat-raised-button mat-button color=\"primary\"\n        class=\"md-primary\">Lưu</button>\n</mat-dialog-actions> ");
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup/in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup.component.scss": 
        /*!*****************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup/in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup.component.scss ***!
          \*****************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2luLXBoaWV1LWRhbmcta3kta2hhbS10aWVwLW5oYW4tYmVuaC1uaGFuLXBvcHVwL2luLXBoaWV1LWRhbmcta3kta2hhbS10aWVwLW5oYW4tYmVuaC1uaGFuLXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup/in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup.component.ts": 
        /*!***************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup/in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup.component.ts ***!
          \***************************************************************************************************************************************************************/
        /*! exports provided: InPhieuDangKyKhamTiepNhanBenhNhanPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InPhieuDangKyKhamTiepNhanBenhNhanPopupComponent", function () { return InPhieuDangKyKhamTiepNhanBenhNhanPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__);
            var InPhieuDangKyKhamTiepNhanBenhNhanPopupComponent = /** @class */ (function () {
                function InPhieuDangKyKhamTiepNhanBenhNhanPopupComponent(data, sanitizer, apiService, dialog) {
                    this.data = data;
                    this.sanitizer = sanitizer;
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.phieuDangKyKham = [];
                    this.phieuDichVuKyThuatCLS = [];
                    this.phieuDichVuKhamCLS = [];
                    this.phieuDichVuKhacCLS = [];
                    this.phieuDichVuGiuongCLS = [];
                    this.phieuDichVuChiDinhXetNghiemTestCovid = [];
                    this.src = "";
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.loaiPhieu = 0;
                }
                InPhieuDangKyKhamTiepNhanBenhNhanPopupComponent.prototype.ngOnInit = function () {
                    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data.Model);
                    console.log("data:", this.data.Model);
                    this.modelPrint = this.data.Model;
                };
                InPhieuDangKyKhamTiepNhanBenhNhanPopupComponent.prototype.close = function () {
                    this.dialog.closeAll();
                };
                InPhieuDangKyKhamTiepNhanBenhNhanPopupComponent.prototype.InPhieu = function (loaiPhieu) {
                    this.loaiPhieu = loaiPhieu;
                    this.getSharedPrintForm();
                };
                InPhieuDangKyKhamTiepNhanBenhNhanPopupComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    var tmpPhieuKham = '<table id=\'showHeader\' style=\'width: 100%; height: 40px; background: #005dab;color:#fff;\'> <tr><th rowspan = \'3\' style = \'font-size: 20px;\'>PHIẾU ĐĂNG KÝ KHÁM</th></tr></table>';
                    var tmpPhieuCLS = '<table id=\'showHeader\' style=\'width: 100%; height: 40px; background: #005dab;color:#fff;\'> <tr><th rowspan = \'3\' style = \'font-size: 20px;\'>PHIẾU CHỈ ĐỊNH CẬN LÂM SÀNG</th></tr></table>';
                    var tmpPhieuXNCoVId = '<table id=\'showHeader\' style=\'width: 100%; height: 40px; background: #005dab;color:#fff;\'> <tr><th rowspan = \'3\' style = \'font-size: 20px;\'>PHIẾU CHỈ ĐỊNH XÉT NGHIỆM TEST NHANH KHÁNG NGUYÊN SARS-CoV-2 </th></tr></table>';
                    var data = this.modelPrint.replaceAll(tmpPhieuKham, '').replaceAll(tmpPhieuCLS, '').replaceAll(tmpPhieuXNCoVId, '');
                    // in 
                    var dataphieukeThuTienThuoc = data.split('<div class=\"pagebreak\"> </div>');
                    var dataphieu = data.split('<div class=\"pagebreak\"> </div>');
                    var pageBreak = '<div class=\"pagebreak\"> </div>';
                    dataphieu.forEach(function (element) {
                        if (element.indexOf('PHIẾU ĐĂNG KÝ KHÁM') > -1) {
                            var PhieuInPageBreak = element + pageBreak;
                            _this.phieuDangKyKham.push(PhieuInPageBreak);
                        }
                        else if (element.indexOf('DỊCH VỤ GIƯỜNG') > -1) {
                            var PhieuInPageBreak = element + pageBreak;
                            _this.phieuDichVuGiuongCLS.push(PhieuInPageBreak);
                        }
                        else if (element.indexOf('PHIẾU CHỈ ĐỊNH XÉT NGHIỆM') > -1) {
                            var PhieuInPageBreak = element + pageBreak;
                            _this.phieuDichVuChiDinhXetNghiemTestCovid.push(PhieuInPageBreak);
                        }
                        else {
                            var PhieuInPageBreak = element + pageBreak;
                            _this.phieuDichVuKyThuatCLS.push(PhieuInPageBreak);
                        }
                    });
                    if (this.loaiPhieu == 1) // dvkt
                     {
                        if (this.phieuDichVuKyThuatCLS.length == 0) {
                            var chuoiIn_1 = "Không có dịch vụ chỉ định cận lâm sàng.";
                            return new Promise(function (resolve) {
                                resolve(chuoiIn_1);
                                chuoiIn_1 = "";
                                _this.phieuDichVuKyThuatCLS = [];
                            });
                        }
                        else {
                            var chuoiIn_2 = "";
                            this.phieuDichVuKyThuatCLS.forEach(function (element) {
                                if (element != pageBreak) {
                                    chuoiIn_2 = chuoiIn_2 + element;
                                }
                            });
                            var viTricutPageBreak = chuoiIn_2.lastIndexOf(pageBreak);
                            chuoiIn_2 = chuoiIn_2.substr(0, viTricutPageBreak);
                            return new Promise(function (resolve) {
                                resolve(chuoiIn_2);
                                chuoiIn_2 = "";
                                _this.phieuDichVuKyThuatCLS = [];
                            });
                        }
                    }
                    if (this.loaiPhieu == 2) // dv kb
                     {
                        if (this.phieuDangKyKham.length == 0) {
                            var chuoiIn_3 = "Không có dịch vụ khám bệnh.";
                            return new Promise(function (resolve) {
                                resolve(chuoiIn_3);
                                chuoiIn_3 = "";
                                _this.phieuDichVuKyThuatCLS = [];
                            });
                        }
                        else {
                            var chuoiIn_4 = "";
                            this.phieuDangKyKham.forEach(function (element) {
                                chuoiIn_4 = chuoiIn_4 + element;
                            });
                            var viTricutPageBreak = chuoiIn_4.lastIndexOf(pageBreak);
                            chuoiIn_4 = chuoiIn_4.substr(0, viTricutPageBreak);
                            return new Promise(function (resolve) {
                                resolve(chuoiIn_4);
                                chuoiIn_4 = "";
                                _this.phieuDangKyKham = [];
                            });
                        }
                    }
                    if (this.loaiPhieu == 4) // dv giuong
                     {
                        if (this.phieuDangKyKham.length == 0) {
                            var chuoiIn_5 = "Không có dịch vụ khám bệnh.";
                            return new Promise(function (resolve) {
                                resolve(chuoiIn_5);
                                chuoiIn_5 = "";
                                _this.phieuDichVuKyThuatCLS = [];
                            });
                        }
                        else {
                            var chuoiIn_6 = "";
                            this.phieuDichVuGiuongCLS.forEach(function (element) {
                                chuoiIn_6 = chuoiIn_6 + element;
                            });
                            var viTricutPageBreak = chuoiIn_6.lastIndexOf(pageBreak);
                            chuoiIn_6 = chuoiIn_6.substr(0, viTricutPageBreak);
                            return new Promise(function (resolve) {
                                resolve(chuoiIn_6);
                                chuoiIn_6 = "";
                                _this.phieuDichVuGiuongCLS = [];
                            });
                        }
                    }
                    if (this.loaiPhieu == 3) // dv xn covid
                     {
                        if (this.phieuDichVuChiDinhXetNghiemTestCovid.length == 0) {
                            var chuoiIn_7 = "Không có phiếu chỉ định xét nghiệm.";
                            return new Promise(function (resolve) {
                                resolve(chuoiIn_7);
                                chuoiIn_7 = "";
                                _this.phieuDichVuKyThuatCLS = [];
                            });
                        }
                        else {
                            var chuoiIn_8 = "";
                            this.phieuDichVuChiDinhXetNghiemTestCovid.forEach(function (element) {
                                chuoiIn_8 = chuoiIn_8 + element;
                            });
                            var viTricutPageBreak = chuoiIn_8.lastIndexOf(pageBreak);
                            chuoiIn_8 = chuoiIn_8.substr(0, viTricutPageBreak);
                            return new Promise(function (resolve) {
                                resolve(chuoiIn_8);
                                chuoiIn_8 = "";
                                _this.phieuDichVuChiDinhXetNghiemTestCovid = [];
                            });
                        }
                    }
                };
                return InPhieuDangKyKhamTiepNhanBenhNhanPopupComponent;
            }());
            InPhieuDangKyKhamTiepNhanBenhNhanPopupComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
            ]; };
            InPhieuDangKyKhamTiepNhanBenhNhanPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup/in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup/in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], InPhieuDangKyKhamTiepNhanBenhNhanPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/in-phieu-xn-covid/in-phieu-xn-covid.component.scss": 
        /*!*****************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/in-phieu-xn-covid/in-phieu-xn-covid.component.scss ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vaW4tcGhpZXUteG4tY292aWQvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx0aWVwLW5oYW4tYmVuaC1uaGFuXFxpbi1waGlldS14bi1jb3ZpZFxcaW4tcGhpZXUteG4tY292aWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2luLXBoaWV1LXhuLWNvdmlkL2luLXBoaWV1LXhuLWNvdmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2luLXBoaWV1LXhuLWNvdmlkL2luLXBoaWV1LXhuLWNvdmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iLCIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/in-phieu-xn-covid/in-phieu-xn-covid.component.ts": 
        /*!***************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/in-phieu-xn-covid/in-phieu-xn-covid.component.ts ***!
          \***************************************************************************************************/
        /*! exports provided: InPhieuXnCovidComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InPhieuXnCovidComponent", function () { return InPhieuXnCovidComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
            var InPhieuXnCovidComponent = /** @class */ (function () {
                function InPhieuXnCovidComponent(data, sanitizer, dialog) {
                    this.data = data;
                    this.sanitizer = sanitizer;
                    this.dialog = dialog;
                    this.src = '';
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(this.data.Model);
                }
                InPhieuXnCovidComponent.prototype.ngOnInit = function () {
                    this.modelPrint = this.data.Model;
                };
                InPhieuXnCovidComponent.prototype.getSharedPrintForm = function () {
                    var tmpPhieuXNCoVId = '<table id=\'showHeader\' style=\'width: 100%; height: 40px; background: #005dab;color:#fff;\'> <tr><th rowspan = \'3\' style = \'font-size: 20px;\'>PHIẾU CHỈ ĐỊNH XÉT NGHIỆM TEST NHANH KHÁNG NGUYÊN SARS-CoV-2 </th></tr></table>';
                    var data = this.modelPrint.replaceAll(tmpPhieuXNCoVId, '');
                    return new Promise(function (resolve) {
                        resolve(data);
                    });
                };
                InPhieuXnCovidComponent.prototype.close = function () {
                    this.dialog.closeAll();
                };
                return InPhieuXnCovidComponent;
            }());
            InPhieuXnCovidComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
            ]; };
            InPhieuXnCovidComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-in-phieu-xn-covid',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./in-phieu-xn-covid.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/in-phieu-xn-covid/in-phieu-xn-covid.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./in-phieu-xn-covid.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/in-phieu-xn-covid/in-phieu-xn-covid.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], InPhieuXnCovidComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/popup-dich-vu-check-trung/popup-dich-vu-check-trung.component.scss": 
        /*!*********************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/popup-dich-vu-check-trung/popup-dich-vu-check-trung.component.scss ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL3BvcHVwLWRpY2gtdnUtY2hlY2stdHJ1bmcvcG9wdXAtZGljaC12dS1jaGVjay10cnVuZy5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/popup-dich-vu-check-trung/popup-dich-vu-check-trung.component.ts": 
        /*!*******************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/popup-dich-vu-check-trung/popup-dich-vu-check-trung.component.ts ***!
          \*******************************************************************************************************************/
        /*! exports provided: PopupDichVuCheckTrungComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupDichVuCheckTrungComponent", function () { return PopupDichVuCheckTrungComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__);
            var PopupDichVuCheckTrungComponent = /** @class */ (function () {
                function PopupDichVuCheckTrungComponent(dialog, data, dialogRef, apiService, notificationService) {
                    this.dialog = dialog;
                    this.data = data;
                    this.dialogRef = dialogRef;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default.a;
                }
                PopupDichVuCheckTrungComponent.prototype.ngOnInit = function () {
                };
                PopupDichVuCheckTrungComponent.prototype.Co = function () {
                    this.dialogRef.close(true);
                };
                PopupDichVuCheckTrungComponent.prototype.Khong = function () {
                    this.dialogRef.close(false);
                };
                return PopupDichVuCheckTrungComponent;
            }());
            PopupDichVuCheckTrungComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }
            ]; };
            PopupDichVuCheckTrungComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-popup-dich-vu-check-trung',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-dich-vu-check-trung.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/popup-dich-vu-check-trung/popup-dich-vu-check-trung.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-dich-vu-check-trung.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/popup-dich-vu-check-trung/popup-dich-vu-check-trung.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], PopupDichVuCheckTrungComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/popup-marketing-check-trung/popup-marketing-check-trung.component.scss": 
        /*!*************************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/popup-marketing-check-trung/popup-marketing-check-trung.component.scss ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".div-tag-content {\n  display: block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vcG9wdXAtbWFya2V0aW5nLWNoZWNrLXRydW5nL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcdGllcC1uaGFuLWJlbmgtbmhhblxccG9wdXAtbWFya2V0aW5nLWNoZWNrLXRydW5nXFxwb3B1cC1tYXJrZXRpbmctY2hlY2stdHJ1bmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL3BvcHVwLW1hcmtldGluZy1jaGVjay10cnVuZy9wb3B1cC1tYXJrZXRpbmctY2hlY2stdHJ1bmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vcG9wdXAtbWFya2V0aW5nLWNoZWNrLXRydW5nL3BvcHVwLW1hcmtldGluZy1jaGVjay10cnVuZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXYtdGFnLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufSIsIi5kaXYtdGFnLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/popup-marketing-check-trung/popup-marketing-check-trung.component.ts": 
        /*!***********************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/popup-marketing-check-trung/popup-marketing-check-trung.component.ts ***!
          \***********************************************************************************************************************/
        /*! exports provided: PopupMarketingCheckTrungComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupMarketingCheckTrungComponent", function () { return PopupMarketingCheckTrungComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            var PopupMarketingCheckTrungComponent = /** @class */ (function () {
                function PopupMarketingCheckTrungComponent(dialog, data, dialogRef, apiService, notificationService) {
                    this.dialog = dialog;
                    this.data = data;
                    this.dialogRef = dialogRef;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.danhSachGoiDaChonTrongLanPopup = new Array();
                    this.gridColumns = [];
                    this.danhSachGoiDaChonTrongLanPopup = this.data.data;
                    //console.log("PopupMarketingCheckTrungComponent = ", this.danhSachGoiDaChonTrongLanPopup);
                }
                PopupMarketingCheckTrungComponent.prototype.ngOnInit = function () {
                    this.gridColumns = [
                        { Field: "ThuocGoi", Title: "Chương Trình", Width: 180, Sortable: false },
                        { Field: "TenDichVu", Title: "Dịch Vụ", Width: 180, Sortable: true },
                        { Field: "ThuocGoi", Title: "Cảnh Báo", Width: 80, Sortable: true, Template: this.canhBaoTemplate },
                        { Field: "ThuocGoi", Title: "", Width: 100, Sortable: true, Template: this.actionTemplate },
                    ];
                };
                PopupMarketingCheckTrungComponent.prototype.Co = function () {
                    var item = this.danhSachGoiDaChonTrongLanPopup.filter(function (o) { return o.KhongThem; });
                    //console.log("Co = ", item);
                    this.dialogRef.close(item);
                };
                PopupMarketingCheckTrungComponent.prototype.Khong = function () {
                    this.dialogRef.close();
                };
                PopupMarketingCheckTrungComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                return PopupMarketingCheckTrungComponent;
            }());
            PopupMarketingCheckTrungComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], PopupMarketingCheckTrungComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canhBaoTemplate', { static: true })
            ], PopupMarketingCheckTrungComponent.prototype, "canhBaoTemplate", void 0);
            PopupMarketingCheckTrungComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-popup-marketing-check-trung',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-marketing-check-trung.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/popup-marketing-check-trung/popup-marketing-check-trung.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-marketing-check-trung.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/popup-marketing-check-trung/popup-marketing-check-trung.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], PopupMarketingCheckTrungComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/popup-marketing-tiep-nhan-benh-nhan/popup-marketing-tiep-nhan-benh-nhan.component.scss": 
        /*!*****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/popup-marketing-tiep-nhan-benh-nhan/popup-marketing-tiep-nhan-benh-nhan.component.scss ***!
          \*****************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("ul {\n  margin: 0;\n}\n\nul.dashed {\n  list-style-type: none;\n}\n\nul.dashed > li {\n  text-indent: -5px;\n  padding: 1px 0px 1px 0px;\n}\n\nul.dashed > li:before {\n  content: \"- \";\n  text-indent: -5px;\n}\n\n.title-grid-parent {\n  text-transform: uppercase;\n  font-weight: bold;\n}\n\ninput[type=checkbox] {\n  transform: scale(1.5);\n}\n\n.span-1-goi-marketing {\n  margin-left: 10px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 40%;\n  width: 40%;\n}\n\n.span-trang-thai {\n  width: 57%;\n  text-align: right;\n}\n\n.text-right-td {\n  text-align: right;\n}\n\n.text-left-td {\n  text-align: left;\n}\n\n.text-red {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vcG9wdXAtbWFya2V0aW5nLXRpZXAtbmhhbi1iZW5oLW5oYW4vQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx0aWVwLW5oYW4tYmVuaC1uaGFuXFxwb3B1cC1tYXJrZXRpbmctdGllcC1uaGFuLWJlbmgtbmhhblxccG9wdXAtbWFya2V0aW5nLXRpZXAtbmhhbi1iZW5oLW5oYW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL3BvcHVwLW1hcmtldGluZy10aWVwLW5oYW4tYmVuaC1uaGFuL3BvcHVwLW1hcmtldGluZy10aWVwLW5oYW4tYmVuaC1uaGFuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vdGllcC1uaGFuLWJlbmgtbmhhbi9wb3B1cC1tYXJrZXRpbmctdGllcC1uaGFuLWJlbmgtbmhhbi9wb3B1cC1tYXJrZXRpbmctdGllcC1uaGFuLWJlbmgtbmhhbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgbWFyZ2luOiAwO1xufVxuXG51bC5kYXNoZWQge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbnVsLmRhc2hlZCA+IGxpIHtcbiAgdGV4dC1pbmRlbnQ6IC01cHg7XG4gIHBhZGRpbmc6IDFweCAwcHggMXB4IDBweDtcbn1cblxudWwuZGFzaGVkID4gbGk6YmVmb3JlIHtcbiAgY29udGVudDogXCItIFwiO1xuICB0ZXh0LWluZGVudDogLTVweDtcbn1cblxuLnRpdGxlLWdyaWQtcGFyZW50IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xufVxuXG4uc3Bhbi0xLWdvaS1tYXJrZXRpbmcge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1heC13aWR0aDogNDAlO1xuICB3aWR0aDogNDAlO1xufVxuXG4uc3Bhbi10cmFuZy10aGFpIHtcbiAgd2lkdGg6IDU3JTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50ZXh0LXJpZ2h0LXRkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50ZXh0LWxlZnQtdGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udGV4dC1yZWQge1xuICBjb2xvcjogcmVkO1xufSIsInVsIHtcbiAgbWFyZ2luOiAwO1xufVxuXG51bC5kYXNoZWQge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbnVsLmRhc2hlZCA+IGxpIHtcbiAgdGV4dC1pbmRlbnQ6IC01cHg7XG4gIHBhZGRpbmc6IDFweCAwcHggMXB4IDBweDtcbn1cblxudWwuZGFzaGVkID4gbGk6YmVmb3JlIHtcbiAgY29udGVudDogXCItIFwiO1xuICB0ZXh0LWluZGVudDogLTVweDtcbn1cblxuLnRpdGxlLWdyaWQtcGFyZW50IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xufVxuXG4uc3Bhbi0xLWdvaS1tYXJrZXRpbmcge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1heC13aWR0aDogNDAlO1xuICB3aWR0aDogNDAlO1xufVxuXG4uc3Bhbi10cmFuZy10aGFpIHtcbiAgd2lkdGg6IDU3JTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50ZXh0LXJpZ2h0LXRkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50ZXh0LWxlZnQtdGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udGV4dC1yZWQge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/popup-marketing-tiep-nhan-benh-nhan/popup-marketing-tiep-nhan-benh-nhan.component.ts": 
        /*!***************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/popup-marketing-tiep-nhan-benh-nhan/popup-marketing-tiep-nhan-benh-nhan.component.ts ***!
          \***************************************************************************************************************************************/
        /*! exports provided: PopupMarketingTiepNhanBenhNhanComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupMarketingTiepNhanBenhNhanComponent", function () { return PopupMarketingTiepNhanBenhNhanComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7__);
            /* harmony import */ var _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tiep-nhan-benh-nhan.model */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _popup_marketing_check_trung_popup_marketing_check_trung_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../popup-marketing-check-trung/popup-marketing-check-trung.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/popup-marketing-check-trung/popup-marketing-check-trung.component.ts");
            /* harmony import */ var _danh_sach_cho_kham_danh_sach_cho_kham_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../danh-sach-cho-kham/danh-sach-cho-kham.model */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham.model.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            var PopupMarketingTiepNhanBenhNhanComponent = /** @class */ (function () {
                function PopupMarketingTiepNhanBenhNhanComponent(dialog, data, dialogRef, apiService, notificationService) {
                    this.dialog = dialog;
                    this.data = data;
                    this.dialogRef = dialogRef;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_6___default.a;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7___default.a;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"];
                    this.searchString = null;
                    this.gridColumns = [];
                    this.gridColumnsChild = [];
                    this.benhNhanId = null;
                    this.danhSachGoiDaChonTrongYCTN = new Array();
                    this.danhSachDichVuDaChonTrongLanPopup = new Array();
                    this.danhSachDichVuDaChonTrongLanPopupString = "";
                    this.danhSachDichVuDaChonTrongLanYCTNNay = new Array();
                    this.danhSachDichVuDaChonTrongLanYCTNNayString = "";
                    this.danhSachGoiDaChonTrongLanPopup = new Array();
                    this.danhSachDichVuDangCo = new Array();
                    this.urlGetDataGrid = "TiepNhanBenhNhan/GetDataThongTinGoiForGridAsync";
                    this.urlGetTotalPageGrid = "TiepNhanBenhNhan/GetTotalThongTinGoiPageForGridAsync";
                    this.searchStringDefault = null;
                    // lstDaChon: number[] = new Array<number>();
                    this.tongSoTienThem = null;
                    this.chuongTrinhGoiDichVuIdPopup = null;
                    this.yeuCauGoiDichVuIdPopup = null;
                    this.groups = [{ field: 'TenNhomDichVu' }];
                    this.arrGoiDangChon = new Array();
                    this.danhSachGoiDaChonTrongYCTN = this.data.data;
                    this.benhNhanId = this.data.benhNhanId;
                    if (this.data.itemPopup != undefined && this.data.itemPopup != null) {
                        // this.chuongTrinhGoiDichVuIdPopup = this.data.itemPopup.ChuongTrinhGoiDichVuId;
                        this.yeuCauGoiDichVuIdPopup = this.data.itemPopup.YeuCauGoiDichVuId;
                    }
                    // this.searchStringDefault = this.benhNhanId + "|" + this.chuongTrinhGoiDichVuIdPopup;
                    this.searchStringDefault = this.benhNhanId + "|" + this.yeuCauGoiDichVuIdPopup;
                    this.danhSachDichVuDaChonTrongLanYCTNNay = this.data.danhSachDichVuGoiDaChon;
                    if (this.danhSachDichVuDaChonTrongLanYCTNNay != undefined && this.danhSachDichVuDaChonTrongLanYCTNNay.length > 0) {
                        this.danhSachDichVuDaChonTrongLanYCTNNayString = JSON.stringify(this.danhSachDichVuDaChonTrongLanYCTNNay);
                    }
                    //console.log(this.danhSachGoiDaChonTrongYCTN, this.benhNhanId, this.danhSachDichVuDaChonTrongLanYCTNNay);
                    this.danhSachDichVuDangCo = this.data.danhSachDichVuDangCo;
                    //console.log("danhSachDichVuDangCo: ", this.danhSachDichVuDangCo, " /n danhSachDichVuDaChonTrongLanYCTNNay: ", this.danhSachDichVuDaChonTrongLanYCTNNay);
                }
                PopupMarketingTiepNhanBenhNhanComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].YeuCauTiepNhan;
                    this.gridColumns = [
                        { Field: "TenGoi", Title: "Tên Gói", Width: 600, Sortable: false, Template: this.tenGoiTemplate }
                    ];
                    this.gridColumnsChild = [
                        { Field: "CheckBox", Title: "", Width: 40, Sortable: false, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate },
                        // { Field: "STT", Title: "#", Width: 20 , Sortable: false, Template: this.sttTemplate },
                        { Field: "TenNhomDichVu", Title: "", Width: 20, TemplateGroupHeader: this.nhomDichVuTemplate, Hidden: true },
                        { Field: "Ma", Title: "Mã", Width: 80, Sortable: true },
                        { Field: "TenDichVu", Title: "Tên dịch vụ", MinWidth: 180, Sortable: true },
                        { Field: "LoaiGiaDisplay", Title: "Loại giá", Width: 100, Sortable: true },
                        { Field: "SoLuong", Title: "SL", Width: 40, Sortable: true },
                        { Field: "DonGia", Title: "Đơn giá", Width: 120, Sortable: true, Template: this.donGiaTemplate, TemplateFooter: this.tongTienFooterTemplate },
                        { Field: "ThanhTien", Title: "Thành tiền", Width: 120, Sortable: true, Template: this.thanhTienTemplate, TemplateFooter: this.tongCongFooterTemplate },
                        { Field: "SoLuongDaDung", Title: "SL đã dùng", Width: 100, Sortable: true },
                        { Field: "SoLuongDungLanNay", Title: "SL dùng lần này", Width: 120, Sortable: false, Template: this.soLuongTemplate } //, TemplateFooter: this.giaGoiFooterTemplate  }
                    ];
                    // if(this.chuongTrinhGoiDichVuIdPopup != null && this.chuongTrinhGoiDichVuIdPopup != undefined){
                    if (this.yeuCauGoiDichVuIdPopup != null && this.yeuCauGoiDichVuIdPopup != undefined) {
                        var self_1 = this;
                        setTimeout(function () {
                            self_1.gridChild.onExpandRowDetail(0);
                        }, 500);
                    }
                };
                PopupMarketingTiepNhanBenhNhanComponent.prototype.onKeyGrid = function (event) {
                    if (event.keyCode == 13) {
                        this.Timkiem();
                    }
                };
                PopupMarketingTiepNhanBenhNhanComponent.prototype.Timkiem = function () {
                    this.gridChild._additionalSearchString = this.searchStringDefault;
                    this.gridChild.searchString = this.searchString;
                    this.gridChild.search();
                };
                PopupMarketingTiepNhanBenhNhanComponent.prototype.clearSearch = function () {
                    if ((this.searchString == "" || this.searchString == null) && this.gridChild != undefined) {
                        this.gridChild.searchString = "";
                        this.gridChild.search();
                    }
                };
                PopupMarketingTiepNhanBenhNhanComponent.prototype.chonDichVu = function (event, dataItem) {
                    //console.log("chonDichVu = ", event, dataItem);
                    if (event == true) {
                        this.addDichVu(dataItem);
                    }
                    else {
                        this.removeDichVu(dataItem);
                    }
                };
                PopupMarketingTiepNhanBenhNhanComponent.prototype.setSoTienTTThem = function () {
                    return (this.danhSachGoiDaChonTrongLanPopup.filter(function (o) { return o.TrangThaiThanhToan != 2; })
                        .reduce(function (sum, item) { return sum + item.GiaSauChietKhau; }, 0));
                };
                PopupMarketingTiepNhanBenhNhanComponent.prototype.changeSoLuongDichVu = function (event, dataItem) {
                    var item = JSON.parse(JSON.stringify(this.danhSachDichVuDaChonTrongLanPopup.filter(function (o) { return o == dataItem; })));
                    //console.log("changeSoLuongDichVu = ", event, dataItem, item);
                    if (item != undefined && item.length > 0) {
                        item[0].SoLuongDungLanNay = event;
                        item[0].SoLuongConLai = item[0].SoLan - event;
                        this.danhSachDichVuDaChonTrongLanPopupString = JSON.stringify(item);
                    }
                };
                PopupMarketingTiepNhanBenhNhanComponent.prototype.addDichVu = function (data) {
                    var _this = this;
                    var dataTemp = this.cloneItemDichVuChonTronLanNay(data);
                    var indexTemp = -1;
                    this.danhSachDichVuDaChonTrongLanPopup.forEach(function (element, index) {
                        var elementTemp = _this.cloneItemDichVuChonTronLanNay(element);
                        if (JSON.stringify(dataTemp) == JSON.stringify(elementTemp)) {
                            indexTemp = index;
                        }
                    });
                    if (indexTemp == -1) {
                        this.danhSachDichVuDaChonTrongLanPopup.push(data);
                        this.capNhatThongTinGoiTuDanhSachDichVuDaChon();
                        this.danhSachDichVuDaChonTrongLanPopupString = JSON.stringify(this.danhSachDichVuDaChonTrongLanPopup);
                    }
                    // let item = this.danhSachDichVuDaChonTrongLanPopup.filter(o => o == data);
                    // //console.log("addDichVu = ", item, data);
                    // if(item == undefined || item.length == 0)
                    // {
                    //   this.danhSachDichVuDaChonTrongLanPopup.push(data);
                    //   this.capNhatThongTinGoiTuDanhSachDichVuDaChon();
                    //   //
                    //   // let goi = new DanhSachGoiChonTrongLanPopup();
                    //   // goi.ThuocGoi = data.ThuocGoi;
                    //   // goi.GiaSauChietKhau = data.GiaSauChietKhau;
                    //   // goi.TrangThaiThanhToan = data.TrangThaiThanhToan;
                    //   // goi.TrangThaiThanhToanDisplay = data.TrangThaiThanhToanDisplay;
                    //   // this.danhSachGoiDaChonTrongLanPopup.push(goi);
                    //   //
                    //   this.danhSachDichVuDaChonTrongLanPopupString = JSON.stringify(this.danhSachDichVuDaChonTrongLanPopup);
                    // }
                };
                PopupMarketingTiepNhanBenhNhanComponent.prototype.removeDichVu = function (data) {
                    var _this = this;
                    var dataTemp = this.cloneItemDichVuChonTronLanNay(data);
                    var indexTemp = -1;
                    this.danhSachDichVuDaChonTrongLanPopup.forEach(function (element, index) {
                        var elementTemp = _this.cloneItemDichVuChonTronLanNay(element);
                        if (JSON.stringify(dataTemp) == JSON.stringify(elementTemp)) {
                            indexTemp = index;
                        }
                    });
                    if (indexTemp != -1) {
                        this.danhSachDichVuDaChonTrongLanPopup.splice(indexTemp, 1);
                    }
                    //this.danhSachDichVuDaChonTrongLanPopup = this.danhSachDichVuDaChonTrongLanPopup.filter(o => o != data);
                    //
                    this.capNhatThongTinGoiTuDanhSachDichVuDaChon();
                    //
                    this.danhSachDichVuDaChonTrongLanPopupString = JSON.stringify(this.danhSachDichVuDaChonTrongLanPopup);
                    //console.log("removeDichVu = ", this.danhSachDichVuDaChonTrongLanPopup, this.danhSachDichVuDaChonTrongLanPopupString);
                };
                PopupMarketingTiepNhanBenhNhanComponent.prototype.cloneItemDichVuChonTronLanNay = function (data) {
                    var dataTemp = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_8__["DanhSachDichVuChonTrongLanPopup"]();
                    dataTemp.Id = data.Id;
                    dataTemp.TenNhomDichVu = data.TenNhomDichVu;
                    dataTemp.ChuongTrinhGoiDichVuId = data.ChuongTrinhGoiDichVuId;
                    dataTemp.YeuCauGoiDichVuId = data.YeuCauGoiDichVuId;
                    dataTemp.DichVuId = data.DichVuId;
                    return dataTemp;
                };
                PopupMarketingTiepNhanBenhNhanComponent.prototype.capNhatThongTinGoiTuDanhSachDichVuDaChon = function () {
                    var _this = this;
                    this.danhSachGoiDaChonTrongLanPopup = new Array();
                    this.danhSachDichVuDaChonTrongLanPopup.forEach(function (o) {
                        var item = _this.danhSachGoiDaChonTrongLanPopup.filter(function (m) { return m.ThuocGoi == o.ThuocGoi; });
                        if (item.length == 0) {
                            var goi = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_8__["DanhSachGoiChonTrongLanPopup"]();
                            goi.ThuocGoi = o.ThuocGoi;
                            goi.GiaSauChietKhau = o.GiaSauChietKhau;
                            goi.GiaSauChietKhauDisplay = o.GiaSauChietKhauDisplay;
                            goi.TrangThaiThanhToan = o.TrangThaiThanhToan;
                            goi.TrangThaiThanhToanDisplay = o.TrangThaiThanhToanDisplay;
                            _this.danhSachGoiDaChonTrongLanPopup.push(goi);
                        }
                    });
                    //console.log("capNhatThongTinGoiTuDanhSachDichVuDaChon = ", this.danhSachGoiDaChonTrongLanPopup);
                };
                // test(dataItemParent){
                //   console.log("dataItemParent = ", dataItemParent);
                // }
                PopupMarketingTiepNhanBenhNhanComponent.prototype.luuDichVuChiDinh = function () {
                    if (this.danhSachDichVuDaChonTrongLanPopup != undefined && this.danhSachDichVuDaChonTrongLanPopup.length > 0) {
                        //check trung
                        var danhSachDichVuTrung = new Array();
                        var _loop_1 = function (i) {
                            var daThem = false;
                            var item = this_1.danhSachDichVuDaChonTrongLanPopup[i];
                            var itemExist = this_1.danhSachDichVuDangCo.filter(function (o) { return o.MaDichVuId == item.DichVuId && o.Nhom == item.TenNhomDichVu; });
                            if (itemExist.length > 0) {
                                danhSachDichVuTrung.push(item);
                                daThem = true;
                            }
                            //
                            var itemPopupExist = this_1.danhSachDichVuDaChonTrongLanPopup.filter(function (o) { return o != item && o.DichVuId == item.DichVuId && o.TenNhomDichVu == item.TenNhomDichVu; });
                            if (itemPopupExist.length > 0 && !daThem) {
                                danhSachDichVuTrung.push(item);
                            }
                        };
                        var this_1 = this;
                        for (var i = 0; i < this.danhSachDichVuDaChonTrongLanPopup.length; i++) {
                            _loop_1(i);
                        }
                        //console.log("danhSachDichVuTrung = ", danhSachDichVuTrung);
                        //
                        if (danhSachDichVuTrung.length > 0) {
                            this.openPopup(danhSachDichVuTrung);
                        }
                        else {
                            //this.dialogRef.close(this.danhSachDichVuDaChonTrongLanPopup);
                            this.kiemTraCoDichVuKhongBaoLanh(this.danhSachDichVuDaChonTrongLanPopup);
                        }
                        //
                        //this.dialogRef.close(this.danhSachDichVuDaChonTrongLanPopup);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["TiepNhanBenhNhanMessage"].MessageErrorMustHaveOneDVGoi);
                    }
                };
                PopupMarketingTiepNhanBenhNhanComponent.prototype.openPopup = function (danhSachDichVuTrung) {
                    var _this = this;
                    var self = this;
                    self.dialog.open(_popup_marketing_check_trung_popup_marketing_check_trung_component__WEBPACK_IMPORTED_MODULE_11__["PopupMarketingCheckTrungComponent"], {
                        disableClose: false,
                        width: '950px',
                        data: {
                            data: danhSachDichVuTrung
                        }
                    }).afterClosed().subscribe(function (result) {
                        //console.log('danh sach khong chon = ', result);
                        if (result == undefined) {
                            //khong them gi
                            _this.dialogRef.close();
                        }
                        else {
                            var danhSach = new Array();
                            var _loop_2 = function (i) {
                                var itemThem = _this.danhSachDichVuDaChonTrongLanPopup[i];
                                var itemKhongThem = result.filter(function (o) { return o == itemThem; });
                                if (itemKhongThem.length == 0) {
                                    danhSach.push(itemThem);
                                }
                            };
                            for (var i = 0; i < _this.danhSachDichVuDaChonTrongLanPopup.length; i++) {
                                _loop_2(i);
                            }
                            //this.dialogRef.close(danhSach);
                            _this.kiemTraCoDichVuKhongBaoLanh(danhSach);
                        }
                        // if (result != undefined && result.length > 0) {
                        //   this.dialogRef.close(this.danhSachDichVuDaChonTrongLanPopup);
                        // }
                        // else{
                        //   this.notificationService.showError(TiepNhanBenhNhanMessage.MessageErrorMustHaveOneDVGoi);
                        // }
                        //this.dialogRef.close(this.danhSachDichVuDaChonTrongLanPopup);
                    });
                };
                PopupMarketingTiepNhanBenhNhanComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                // update gói marketing
                PopupMarketingTiepNhanBenhNhanComponent.prototype.xemChiTietGoiDichVu = function (event) {
                    var _this = this;
                    if (event.Data.length > 0) {
                        console.log('event.Data', event.Data);
                        event.Data.forEach(function (element) {
                            //xử lý thêm vào ds hiển thị dịch vụ đang chọn
                            var indexGoiDangChon = _this.arrGoiDangChon.findIndex(function (x) { return x.YeuCauGoiDichVuId == element.Id; });
                            if (indexGoiDangChon == -1) {
                                _this.arrGoiDangChon.push(new _danh_sach_cho_kham_danh_sach_cho_kham_model__WEBPACK_IMPORTED_MODULE_12__["GoiDichVuMarketingDangChonTiepNhan"](element.Id, 0, element.TenDisplay, element.ConLai, element.IsChecked, []));
                            }
                            else {
                                var goiDangChon = _this.arrGoiDangChon.find(function (x) { return x.YeuCauGoiDichVuId == element.Id; });
                                goiDangChon.TongTienConBaoLanhDuoc = element.ConLai;
                            }
                        });
                    }
                };
                PopupMarketingTiepNhanBenhNhanComponent.prototype.kiemTraGoiDichVuCoChonDichVu = function (yeuCauGoiDichVuId) {
                    var index = this.danhSachDichVuDaChonTrongLanPopup.findIndex(function (x) { return x.YeuCauGoiDichVuId == yeuCauGoiDichVuId; });
                    return index != -1;
                };
                PopupMarketingTiepNhanBenhNhanComponent.prototype.getArrayDichVuDaChonTheoGoi = function (yeuCauGoiDichVuId) {
                    return this.danhSachDichVuDaChonTrongLanPopup.filter(function (x) { return x.YeuCauGoiDichVuId == yeuCauGoiDichVuId; });
                };
                PopupMarketingTiepNhanBenhNhanComponent.prototype.tinhTongTienDichVuDangChon = function (yeuCauGoiDichVuId) {
                    var tongTien = 0;
                    this.danhSachDichVuDaChonTrongLanPopup.forEach(function (element) {
                        if (element.YeuCauGoiDichVuId == yeuCauGoiDichVuId) {
                            tongTien += element.SoLuongDungLanNay * element.DonGia;
                        }
                    });
                    return tongTien;
                };
                // cập nhật BVHD-3423
                PopupMarketingTiepNhanBenhNhanComponent.prototype.chonTatCaDichVuTrongGoi = function (event, yeuCauGoiDichVuId) {
                    if (event) {
                        var name = 'ckbItem-' + yeuCauGoiDichVuId;
                        var checkboxes = document.getElementsByName(name);
                        checkboxes.forEach(function (element) {
                            if (!element['checked']) {
                                document.getElementById(element['id']).click();
                            }
                        });
                        var nameGroup = 'ckbGroup-' + yeuCauGoiDichVuId;
                        var checkboxGroups = document.getElementsByClassName(nameGroup);
                        for (var index = 0; index < checkboxGroups.length; index++) {
                            var element = document.getElementById(checkboxGroups[index].id);
                            if (!element.checked) {
                                element.checked = true;
                            }
                        }
                    }
                    else {
                        var name = 'ckbItem-' + yeuCauGoiDichVuId;
                        var checkboxes = document.getElementsByName(name);
                        checkboxes.forEach(function (element) {
                            if (element['checked']) {
                                document.getElementById(element['id']).click();
                            }
                        });
                        var nameGroup = 'ckbGroup-' + yeuCauGoiDichVuId;
                        var checkboxGroups = document.getElementsByClassName(nameGroup);
                        for (var index = 0; index < checkboxGroups.length; index++) {
                            var element = document.getElementById(checkboxGroups[index].id);
                            if (element.checked) {
                                element.checked = false;
                            }
                        }
                    }
                };
                PopupMarketingTiepNhanBenhNhanComponent.prototype.chonTatCaDichVuTrongNhom = function (event, yeuCauGoiDichVuId, tenNhom) {
                    var classItemInGroup = 'ckbItemInGroup-' + yeuCauGoiDichVuId + '-' + tenNhom;
                    var checkboxItemGroups = document.getElementsByClassName(classItemInGroup);
                    for (var index = 0; index < checkboxItemGroups.length; index++) {
                        var element = document.getElementById(checkboxItemGroups[index].id);
                        if (event.target.checked) {
                            if (!element.checked) {
                                document.getElementById(element.id).click();
                            }
                        }
                        else {
                            if (element.checked) {
                                document.getElementById(element.id).click();
                            }
                        }
                    }
                };
                //BVHD-3804
                PopupMarketingTiepNhanBenhNhanComponent.prototype.kiemTraCoDichVuKhongBaoLanh = function (danhSach) {
                    if (danhSach === void 0) { danhSach = null; }
                    var self = this;
                    var name = 'lbl-khong-du-bao-lanh';
                    var lbls = document.getElementsByName(name);
                    if (lbls != undefined && lbls.length > 0) {
                        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "Thông báo", Message: "Số tiền tạm ứng gói của người bệnh chưa đủ để thực hiện dịch vụ này", IsDetail: true },
                        }).afterClosed().subscribe(function (result) {
                            self.dialogRef.close(danhSach);
                        });
                    }
                    else {
                        self.dialogRef.close(danhSach);
                    }
                };
                return PopupMarketingTiepNhanBenhNhanComponent;
            }());
            PopupMarketingTiepNhanBenhNhanComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('parentGrid', { static: true })
            ], PopupMarketingTiepNhanBenhNhanComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenGoiTemplate', { static: true })
            ], PopupMarketingTiepNhanBenhNhanComponent.prototype, "tenGoiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
            ], PopupMarketingTiepNhanBenhNhanComponent.prototype, "sttTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomDichVuTemplate', { static: true })
            ], PopupMarketingTiepNhanBenhNhanComponent.prototype, "nhomDichVuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongTemplate', { static: true })
            ], PopupMarketingTiepNhanBenhNhanComponent.prototype, "soLuongTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaTemplate', { static: true })
            ], PopupMarketingTiepNhanBenhNhanComponent.prototype, "donGiaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
            ], PopupMarketingTiepNhanBenhNhanComponent.prototype, "thanhTienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongTienFooterTemplate', { static: true })
            ], PopupMarketingTiepNhanBenhNhanComponent.prototype, "tongTienFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongCongFooterTemplate', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], static: true })
            ], PopupMarketingTiepNhanBenhNhanComponent.prototype, "tongCongFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chietKhauFooterTemplate', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], static: true })
            ], PopupMarketingTiepNhanBenhNhanComponent.prototype, "chietKhauFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giaGoiFooterTemplate', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], static: true })
            ], PopupMarketingTiepNhanBenhNhanComponent.prototype, "giaGoiFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkBoxHeaderTemplate', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], static: true })
            ], PopupMarketingTiepNhanBenhNhanComponent.prototype, "checkBoxHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkBoxTemplate', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], static: true })
            ], PopupMarketingTiepNhanBenhNhanComponent.prototype, "checkBoxTemplate", void 0);
            PopupMarketingTiepNhanBenhNhanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-popup-marketing-tiep-nhan-benh-nhan',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-marketing-tiep-nhan-benh-nhan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/popup-marketing-tiep-nhan-benh-nhan/popup-marketing-tiep-nhan-benh-nhan.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-marketing-tiep-nhan-benh-nhan.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/popup-marketing-tiep-nhan-benh-nhan/popup-marketing-tiep-nhan-benh-nhan.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], PopupMarketingTiepNhanBenhNhanComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/popup-tim-kiem-benh-nhan/popup-tim-kiem-benh-nhan.component.scss": 
        /*!*******************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/popup-tim-kiem-benh-nhan/popup-tim-kiem-benh-nhan.component.scss ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".button-chon {\n  color: white !important;\n  background-color: #005dab !important;\n  text-align: center !important;\n  border-radius: 3px !important;\n}\n\n.button-chon:hover {\n  background-color: #005dab;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vcG9wdXAtdGltLWtpZW0tYmVuaC1uaGFuL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcdGllcC1uaGFuLWJlbmgtbmhhblxccG9wdXAtdGltLWtpZW0tYmVuaC1uaGFuXFxwb3B1cC10aW0ta2llbS1iZW5oLW5oYW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL3BvcHVwLXRpbS1raWVtLWJlbmgtbmhhbi9wb3B1cC10aW0ta2llbS1iZW5oLW5oYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL3BvcHVwLXRpbS1raWVtLWJlbmgtbmhhbi9wb3B1cC10aW0ta2llbS1iZW5oLW5oYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWNob24ge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWRhYiAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24tY2hvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVkYWI7XG59IiwiLmJ1dHRvbi1jaG9uIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVkYWIgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLWNob246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZGFiO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/popup-tim-kiem-benh-nhan/popup-tim-kiem-benh-nhan.component.ts": 
        /*!*****************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/popup-tim-kiem-benh-nhan/popup-tim-kiem-benh-nhan.component.ts ***!
          \*****************************************************************************************************************/
        /*! exports provided: PopupTimKiemBenhNhanComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupTimKiemBenhNhanComponent", function () { return PopupTimKiemBenhNhanComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tiep-nhan-benh-nhan.model */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model.ts");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            var PopupTimKiemBenhNhanComponent = /** @class */ (function () {
                function PopupTimKiemBenhNhanComponent(data, dialogRef, apiService) {
                    this.data = data;
                    this.dialogRef = dialogRef;
                    this.apiService = apiService;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_6___default.a;
                    this.gridColumns = [];
                    this.timKiemBenhNhanSearch = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["TimKiemBenhNhanGridVo"]();
                    this.sort = [
                        {
                            field: "MaBN",
                            dir: "asc",
                        },
                    ];
                    this.addtionStringDefault = null;
                    this.urlGetDataGrid = "TiepNhanBenhNhan/GetDataForGridAsyncPopupTimKiem";
                    this.urlGetTotalPageGrid = "TiepNhanBenhNhan/GetTotalPageForGridAsyncPopupTimKiem";
                    //console.log("---: ", data); 
                    if (data == null || data == undefined) {
                        data = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["DataTimKiem"]();
                    }
                }
                PopupTimKiemBenhNhanComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].YeuCauTiepNhan;
                    this.gridColumns = [
                        { Field: "MaBN", Title: "Mã NB", Width: 80, Sortable: true },
                        { Field: "BHYTMaSoThe", Title: "Mã thẻ BHYT", Width: 150, Sortable: true },
                        { Field: "HoTen", Title: "Họ và tên", Width: 150, Sortable: true },
                        { Field: "NgaySinhDisplay", Title: "Ngày sinh", Width: 120, Sortable: false },
                        { Field: "GioiTinhDisplay", Title: "GT", Width: 60, Sortable: false },
                        { Field: "SoChungMinhThu", Title: "CMND", Width: 150, Sortable: false },
                        { Field: "SoDienThoaiDisplay", Title: "Điện thoại", Width: 120, Sortable: false },
                        { Field: "DiaChi", Title: "Địa chỉ", Width: 300, Sortable: false },
                        { Field: "Action", Title: "", Width: 60, Template: this.actionTemplate },
                    ];
                    this.timKiemBenhNhanSearch.MaBN = this.data.searchBenhNhan.MaBN;
                    this.timKiemBenhNhanSearch.BHYTMaSoThe = this.data.searchBenhNhan.MaBHYT;
                    this.timKiemBenhNhanSearch.HoTen = this.data.searchBenhNhan.HoTen;
                    this.timKiemBenhNhanSearch.NgaySinhDisplay = this.data.searchBenhNhan.NgaySinhDisplay;
                    this.timKiemBenhNhanSearch.ThangSinh = this.data.searchBenhNhan.ThangSinh;
                    this.timKiemBenhNhanSearch.NamSinh = this.data.searchBenhNhan.NamSinh;
                    this.timKiemBenhNhanSearch.SoChungMinhThu = this.data.searchBenhNhan.SoChungMinhThu;
                    this.timKiemBenhNhanSearch.SoDienThoai = this.data.searchBenhNhan.SoDienThoai;
                    this.timKiemBenhNhanSearch.DiaChi = this.data.searchBenhNhan.DiaChi;
                    if (this.timKiemBenhNhanSearch.NgaySinhDisplay != null) {
                        this.timKiemBenhNhanSearch.NgaySinhFormat = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].formatDateTime(new Date(this.timKiemBenhNhanSearch.NgaySinhDisplay), "dd/mm/yyyy");
                    }
                    this.addtionStringDefault = JSON.stringify(this.timKiemBenhNhanSearch);
                };
                PopupTimKiemBenhNhanComponent.prototype.close = function (answer) {
                    this.dialogRef.close(answer);
                };
                PopupTimKiemBenhNhanComponent.prototype.chonBenhNhan = function (item) {
                    var _this = this;
                    this.apiService.post("TiepNhanBenhNhan/GetBenhNhan/?benhNhanId=" + item.Id).subscribe(function (resultData) {
                        //console.log("chonBenhNhan = ", resultData);
                        _this.dialogRef.close(resultData);
                    }, function (err) {
                    });
                };
                PopupTimKiemBenhNhanComponent.prototype.onKey = function (event) {
                    if (event.keyCode === 13) {
                        this.TimKiem();
                    }
                };
                PopupTimKiemBenhNhanComponent.prototype.TimKiem = function () {
                    if (this.timKiemBenhNhanSearch.NgaySinhDisplay != null) {
                        this.timKiemBenhNhanSearch.NgaySinhFormat = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].formatDateTime(this.timKiemBenhNhanSearch.NgaySinhDisplay, "dd/mm/yyyy");
                    }
                    else {
                        this.timKiemBenhNhanSearch.NgaySinhFormat = null;
                    }
                    var queryString = JSON.stringify(this.timKiemBenhNhanSearch);
                    this.gridTimKiemTiepNhan._additionalSearchString = queryString;
                    this.gridTimKiemTiepNhan.search();
                };
                return PopupTimKiemBenhNhanComponent;
            }());
            PopupTimKiemBenhNhanComponent.ctorParameters = function () { return [
                { type: _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["DataTimKiem"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PopupTimKiemBenhNhanComponent.prototype, "sort", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"], { static: true })
            ], PopupTimKiemBenhNhanComponent.prototype, "gridTimKiemTiepNhan", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], PopupTimKiemBenhNhanComponent.prototype, "actionTemplate", void 0);
            PopupTimKiemBenhNhanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-popup-tim-kiem-benh-nhan',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-tim-kiem-benh-nhan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/popup-tim-kiem-benh-nhan/popup-tim-kiem-benh-nhan.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-tim-kiem-benh-nhan.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/popup-tim-kiem-benh-nhan/popup-tim-kiem-benh-nhan.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], PopupTimKiemBenhNhanComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-cho-quet/tiep-nhan-benh-nhan-cho-quet.component.scss": 
        /*!***************************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-cho-quet/tiep-nhan-benh-nhan-cho-quet.component.scss ***!
          \***************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL3RpZXAtbmhhbi1iZW5oLW5oYW4tY2hvLXF1ZXQvdGllcC1uaGFuLWJlbmgtbmhhbi1jaG8tcXVldC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-cho-quet/tiep-nhan-benh-nhan-cho-quet.component.ts": 
        /*!*************************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-cho-quet/tiep-nhan-benh-nhan-cho-quet.component.ts ***!
          \*************************************************************************************************************************/
        /*! exports provided: TiepNhanBenhNhanChoQuetComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanBenhNhanChoQuetComponent", function () { return TiepNhanBenhNhanChoQuetComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _danh_muc_bao_hiem_y_te_bao_hiem_y_te_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../danh-muc/bao-hiem-y-te/bao-hiem-y-te.model */ "./src/app/modules/main/danh-muc/bao-hiem-y-te/bao-hiem-y-te.model.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var TiepNhanBenhNhanChoQuetComponent = /** @class */ (function () {
                function TiepNhanBenhNhanChoQuetComponent(data, dialog, apiService, dialogRef) {
                    this.data = data;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.dialogRef = dialogRef;
                }
                TiepNhanBenhNhanChoQuetComponent.prototype.ngOnInit = function () {
                    this.quetThongTinBenhNhan(this.data);
                };
                TiepNhanBenhNhanChoQuetComponent.prototype.quetThongTinBenhNhan = function (model) {
                    var _this = this;
                    //console.log("quetThongTinBenhNhan = ", this.data);
                    this.apiService.post("BHYT/GetLichSuKhamChuaBenh", model).subscribe(function (resultData) {
                        if (resultData != undefined) {
                            //this.setValueBHYT(resultData);
                            //console.log("resultData === ", resultData);
                            _this.dialogRef.close(resultData);
                        }
                    }, function (err) {
                        //console.log("err = ", err);
                        var errBHYT = new _danh_muc_bao_hiem_y_te_bao_hiem_y_te_model__WEBPACK_IMPORTED_MODULE_2__["BaoHiemYTe"]();
                        if (err.Message != "Validation Failed" && err.Message != null && err.Message != '') {
                            errBHYT.ghiChu = err.Message;
                        }
                        else {
                            errBHYT = null;
                        }
                        _this.dialogRef.close(errBHYT);
                    });
                };
                return TiepNhanBenhNhanChoQuetComponent;
            }());
            TiepNhanBenhNhanChoQuetComponent.ctorParameters = function () { return [
                { type: _danh_muc_bao_hiem_y_te_bao_hiem_y_te_model__WEBPACK_IMPORTED_MODULE_2__["ThongTinBenhNhan"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
            ]; };
            TiepNhanBenhNhanChoQuetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tiep-nhan-benh-nhan-cho-quet',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tiep-nhan-benh-nhan-cho-quet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-cho-quet/tiep-nhan-benh-nhan-cho-quet.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tiep-nhan-benh-nhan-cho-quet.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-cho-quet/tiep-nhan-benh-nhan-cho-quet.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
            ], TiepNhanBenhNhanChoQuetComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-error/tiep-nhan-benh-nhan-error.component.scss": 
        /*!*********************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-error/tiep-nhan-benh-nhan-error.component.scss ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".sub-title-bottom {\n  text-align: center;\n  color: red;\n}\n\n.div-title-bottom {\n  margin-top: 30px;\n  text-align: right;\n}\n\n.err-mess-bhyt:first-letter {\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vdGllcC1uaGFuLWJlbmgtbmhhbi1lcnJvci9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHRpZXAtbmhhbi1iZW5oLW5oYW5cXHRpZXAtbmhhbi1iZW5oLW5oYW4tZXJyb3JcXHRpZXAtbmhhbi1iZW5oLW5oYW4tZXJyb3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL3RpZXAtbmhhbi1iZW5oLW5oYW4tZXJyb3IvdGllcC1uaGFuLWJlbmgtbmhhbi1lcnJvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL3RpZXAtbmhhbi1iZW5oLW5oYW4tZXJyb3IvdGllcC1uaGFuLWJlbmgtbmhhbi1lcnJvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWItdGl0bGUtYm90dG9tIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmVkO1xufVxuXG4uZGl2LXRpdGxlLWJvdHRvbSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZXJyLW1lc3MtYmh5dDpmaXJzdC1sZXR0ZXIge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSIsIi5zdWItdGl0bGUtYm90dG9tIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmVkO1xufVxuXG4uZGl2LXRpdGxlLWJvdHRvbSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZXJyLW1lc3MtYmh5dDpmaXJzdC1sZXR0ZXIge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-error/tiep-nhan-benh-nhan-error.component.ts": 
        /*!*******************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-error/tiep-nhan-benh-nhan-error.component.ts ***!
          \*******************************************************************************************************************/
        /*! exports provided: TiepNhanBenhNhanErrorComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanBenhNhanErrorComponent", function () { return TiepNhanBenhNhanErrorComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tiep-nhan-benh-nhan.model */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            var TiepNhanBenhNhanErrorComponent = /** @class */ (function () {
                function TiepNhanBenhNhanErrorComponent(data, dialog, dialogRef) {
                    this.data = data;
                    this.dialog = dialog;
                    this.dialogRef = dialogRef;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.messageErrFromBHYT = "";
                }
                TiepNhanBenhNhanErrorComponent.prototype.ngOnInit = function () {
                    this.errorMessage = src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_2__["TiepNhanBenhNhanMessage"].MessageSaiThongTinBenhNhan;
                    if (this.data != null) {
                        //console.log(this.data);
                        var dateFormat = new Date(this.data.NgayThangNamSinh);
                        this.data.NgayThangNamSinhDisplay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDate(dateFormat, "dd/mm/yyyy");
                        if (this.data.MessageErrFromBHYT != undefined && this.data.MessageErrFromBHYT != null && this.data.MessageErrFromBHYT != "") {
                            this.messageErrFromBHYT = this.data.MessageErrFromBHYT;
                        }
                        else {
                            this.messageErrFromBHYT = "Người bệnh này không tồn tại trên cổng BHYT";
                        }
                    }
                    else {
                        this.messageErrFromBHYT = "Người bệnh này không tồn tại trên cổng BHYT";
                    }
                };
                TiepNhanBenhNhanErrorComponent.prototype.close = function () {
                    this.dialog.closeAll();
                    //this.dialogRef.close(1);
                };
                TiepNhanBenhNhanErrorComponent.prototype.khamKhongBHYT = function () {
                    //this.dialog.closeAll();
                    this.dialogRef.close(1);
                };
                TiepNhanBenhNhanErrorComponent.prototype.huy = function () {
                    this.dialog.closeAll();
                    //this.dialogRef.close(1);
                };
                TiepNhanBenhNhanErrorComponent.prototype.chapNhanBHYTNhapTay = function () {
                    this.dialogRef.close(2);
                };
                return TiepNhanBenhNhanErrorComponent;
            }());
            TiepNhanBenhNhanErrorComponent.ctorParameters = function () { return [
                { type: _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_4__["TiepNhanBenhNhanViewModel"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
            ]; };
            TiepNhanBenhNhanErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tiep-nhan-benh-nhan-error',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tiep-nhan-benh-nhan-error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-error/tiep-nhan-benh-nhan-error.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tiep-nhan-benh-nhan-error.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-error/tiep-nhan-benh-nhan-error.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
            ], TiepNhanBenhNhanErrorComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-lich-su/tiep-nhan-benh-nhan-lich-su.component.scss": 
        /*!*************************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-lich-su/tiep-nhan-benh-nhan-lich-su.component.scss ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL3RpZXAtbmhhbi1iZW5oLW5oYW4tbGljaC1zdS90aWVwLW5oYW4tYmVuaC1uaGFuLWxpY2gtc3UuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-lich-su/tiep-nhan-benh-nhan-lich-su.component.ts": 
        /*!***********************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-lich-su/tiep-nhan-benh-nhan-lich-su.component.ts ***!
          \***********************************************************************************************************************/
        /*! exports provided: TiepNhanBenhNhanLichSuComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanBenhNhanLichSuComponent", function () { return TiepNhanBenhNhanLichSuComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            var TiepNhanBenhNhanLichSuComponent = /** @class */ (function () {
                function TiepNhanBenhNhanLichSuComponent() {
                    this.benhNhanId = null;
                    this.gridColumns = [];
                }
                TiepNhanBenhNhanLichSuComponent.prototype.ngOnInit = function () {
                    //console.log("lich su = ", this.benhNhanId)
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].YeuCauTiepNhan;
                    this.gridColumns = [
                        { Field: "ThoiDiemDangKyDisplay", Title: "Ngày khám", Width: 150, Sortable: true },
                        { Field: "BaSiKham", Title: "Bác sĩ khám", Width: 150, Sortable: true },
                        { Field: "Phong", Title: "Phòng khám", Width: 150, Sortable: true },
                        { Field: "LyDoKham", Title: "Lý do khám", Width: 150, Sortable: true },
                        { Field: "HoTen", Title: "Họ tên người bệnh", Width: 200, Sortable: true },
                        { Field: "TrieuChungLamSang", Title: "Triệu chuẩn LS", Width: 200, Sortable: true },
                        { Field: "ChuanDoanICD", Title: "Chẩn đoán ICD", Width: 250, Sortable: true }
                    ];
                };
                return TiepNhanBenhNhanLichSuComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TiepNhanBenhNhanLichSuComponent.prototype, "benhNhanId", void 0);
            TiepNhanBenhNhanLichSuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tiep-nhan-benh-nhan-lich-su',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tiep-nhan-benh-nhan-lich-su.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-lich-su/tiep-nhan-benh-nhan-lich-su.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tiep-nhan-benh-nhan-lich-su.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-lich-su/tiep-nhan-benh-nhan-lich-su.component.scss")).default]
                })
            ], TiepNhanBenhNhanLichSuComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-het-hieu-luc/tiep-nhan-benh-nhan-popup-het-hieu-luc.component.scss": 
        /*!***********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-het-hieu-luc/tiep-nhan-benh-nhan-popup-het-hieu-luc.component.scss ***!
          \***********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".sub-title-bottom {\n  text-align: center;\n  color: red;\n}\n\n.div-title-bottom {\n  margin-top: 30px;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vdGllcC1uaGFuLWJlbmgtbmhhbi1wb3B1cC1oZXQtaGlldS1sdWMvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx0aWVwLW5oYW4tYmVuaC1uaGFuXFx0aWVwLW5oYW4tYmVuaC1uaGFuLXBvcHVwLWhldC1oaWV1LWx1Y1xcdGllcC1uaGFuLWJlbmgtbmhhbi1wb3B1cC1oZXQtaGlldS1sdWMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL3RpZXAtbmhhbi1iZW5oLW5oYW4tcG9wdXAtaGV0LWhpZXUtbHVjL3RpZXAtbmhhbi1iZW5oLW5oYW4tcG9wdXAtaGV0LWhpZXUtbHVjLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vdGllcC1uaGFuLWJlbmgtbmhhbi90aWVwLW5oYW4tYmVuaC1uaGFuLXBvcHVwLWhldC1oaWV1LWx1Yy90aWVwLW5oYW4tYmVuaC1uaGFuLXBvcHVwLWhldC1oaWV1LWx1Yy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWItdGl0bGUtYm90dG9tIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmVkO1xufVxuXG4uZGl2LXRpdGxlLWJvdHRvbSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSIsIi5zdWItdGl0bGUtYm90dG9tIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmVkO1xufVxuXG4uZGl2LXRpdGxlLWJvdHRvbSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-het-hieu-luc/tiep-nhan-benh-nhan-popup-het-hieu-luc.component.ts": 
        /*!*********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-het-hieu-luc/tiep-nhan-benh-nhan-popup-het-hieu-luc.component.ts ***!
          \*********************************************************************************************************************************************/
        /*! exports provided: TiepNhanBenhNhanPopupHetHieuLucComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanBenhNhanPopupHetHieuLucComponent", function () { return TiepNhanBenhNhanPopupHetHieuLucComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tiep-nhan-benh-nhan.model */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
            var TiepNhanBenhNhanPopupHetHieuLucComponent = /** @class */ (function () {
                function TiepNhanBenhNhanPopupHetHieuLucComponent(data, dialog, dialogRef) {
                    this.data = data;
                    this.dialog = dialog;
                    this.dialogRef = dialogRef;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
                }
                TiepNhanBenhNhanPopupHetHieuLucComponent.prototype.ngOnInit = function () {
                    //console.log("TiepNhanBenhNhanPopupHetHieuLucComponent = ", this.data)
                };
                TiepNhanBenhNhanPopupHetHieuLucComponent.prototype.close = function () {
                    //this.dialog.closeAll();
                    this.dialogRef.close(1);
                };
                TiepNhanBenhNhanPopupHetHieuLucComponent.prototype.khamKhongBHYT = function () {
                    this.dialog.closeAll();
                };
                TiepNhanBenhNhanPopupHetHieuLucComponent.prototype.huy = function () {
                    this.dialogRef.close(1);
                };
                TiepNhanBenhNhanPopupHetHieuLucComponent.prototype.chapNhanBHYTNhapTay = function () {
                    this.dialogRef.close(2);
                };
                return TiepNhanBenhNhanPopupHetHieuLucComponent;
            }());
            TiepNhanBenhNhanPopupHetHieuLucComponent.ctorParameters = function () { return [
                { type: _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["TiepNhanBenhNhanViewModel"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
            ]; };
            TiepNhanBenhNhanPopupHetHieuLucComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tiep-nhan-benh-nhan-popup-het-hieu-luc',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tiep-nhan-benh-nhan-popup-het-hieu-luc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-het-hieu-luc/tiep-nhan-benh-nhan-popup-het-hieu-luc.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tiep-nhan-benh-nhan-popup-het-hieu-luc.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-het-hieu-luc/tiep-nhan-benh-nhan-popup-het-hieu-luc.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], TiepNhanBenhNhanPopupHetHieuLucComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc/tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc.component.scss": 
        /*!*************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc/tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc.component.scss ***!
          \*************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".sub-title-bottom {\n  text-align: center;\n  color: red;\n}\n\n.div-title-bottom {\n  margin-top: 30px;\n  text-align: right;\n}\n\n.div-margin-bottom {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vdGllcC1uaGFuLWJlbmgtbmhhbi1wb3B1cC1raG9uZy1raWVtLXRyYS1kdW9jL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcdGllcC1uaGFuLWJlbmgtbmhhblxcdGllcC1uaGFuLWJlbmgtbmhhbi1wb3B1cC1raG9uZy1raWVtLXRyYS1kdW9jXFx0aWVwLW5oYW4tYmVuaC1uaGFuLXBvcHVwLWtob25nLWtpZW0tdHJhLWR1b2MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL3RpZXAtbmhhbi1iZW5oLW5oYW4tcG9wdXAta2hvbmcta2llbS10cmEtZHVvYy90aWVwLW5oYW4tYmVuaC1uaGFuLXBvcHVwLWtob25nLWtpZW0tdHJhLWR1b2MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vdGllcC1uaGFuLWJlbmgtbmhhbi90aWVwLW5oYW4tYmVuaC1uaGFuLXBvcHVwLWtob25nLWtpZW0tdHJhLWR1b2MvdGllcC1uaGFuLWJlbmgtbmhhbi1wb3B1cC1raG9uZy1raWVtLXRyYS1kdW9jLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Yi10aXRsZS1ib3R0b20ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5kaXYtdGl0bGUtYm90dG9tIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5kaXYtbWFyZ2luLWJvdHRvbSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufSIsIi5zdWItdGl0bGUtYm90dG9tIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmVkO1xufVxuXG4uZGl2LXRpdGxlLWJvdHRvbSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZGl2LW1hcmdpbi1ib3R0b20ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc/tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc.component.ts": 
        /*!***********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc/tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc.component.ts ***!
          \***********************************************************************************************************************************************************/
        /*! exports provided: TiepNhanBenhNhanPopupKhongKiemTraDuocComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanBenhNhanPopupKhongKiemTraDuocComponent", function () { return TiepNhanBenhNhanPopupKhongKiemTraDuocComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tiep-nhan-benh-nhan.model */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _tiep_nhan_benh_nhan_cho_quet_tiep_nhan_benh_nhan_cho_quet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tiep-nhan-benh-nhan-cho-quet/tiep-nhan-benh-nhan-cho-quet.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-cho-quet/tiep-nhan-benh-nhan-cho-quet.component.ts");
            /* harmony import */ var _tiep_nhan_benh_nhan_error_tiep_nhan_benh_nhan_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tiep-nhan-benh-nhan-error/tiep-nhan-benh-nhan-error.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-error/tiep-nhan-benh-nhan-error.component.ts");
            /* harmony import */ var _danh_muc_bao_hiem_y_te_bao_hiem_y_te_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../danh-muc/bao-hiem-y-te/bao-hiem-y-te.model */ "./src/app/modules/main/danh-muc/bao-hiem-y-te/bao-hiem-y-te.model.ts");
            var TiepNhanBenhNhanPopupKhongKiemTraDuocComponent = /** @class */ (function () {
                function TiepNhanBenhNhanPopupKhongKiemTraDuocComponent(data, dialog, dialogRef, dialogRef2) {
                    this.data = data;
                    this.dialog = dialog;
                    this.dialogRef = dialogRef;
                    this.dialogRef2 = dialogRef2;
                    this.thongTinBenhNhan = new _danh_muc_bao_hiem_y_te_bao_hiem_y_te_model__WEBPACK_IMPORTED_MODULE_7__["ThongTinBenhNhan"]();
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
                }
                TiepNhanBenhNhanPopupKhongKiemTraDuocComponent.prototype.ngOnInit = function () {
                    //console.log("TiepNhanBenhNhanPopupKhongKiemTraDuocComponent = ", this.data);
                };
                TiepNhanBenhNhanPopupKhongKiemTraDuocComponent.prototype.khamKhongBHYT = function () {
                    this.dialogRef.close(false);
                    //this.dialogRef2.close();
                };
                TiepNhanBenhNhanPopupKhongKiemTraDuocComponent.prototype.chapNhanBHYTNhapTay = function () {
                    this.dialogRef.close(true);
                };
                // chapNhanCoBHYT(){
                //   this.dialogRef.close(true);
                //   //this.dialogRef2.close();
                // }
                TiepNhanBenhNhanPopupKhongKiemTraDuocComponent.prototype.close = function () {
                    this.dialogRef.close(false);
                };
                TiepNhanBenhNhanPopupKhongKiemTraDuocComponent.prototype.thuLai = function () {
                    var _this = this;
                    this.thongTinBenhNhan.MaThe = this.data.BHYTMaSoThe;
                    this.thongTinBenhNhan.TenBenhNhan = this.data.HoTen;
                    this.thongTinBenhNhan.NgaySinh = this.data.NgayThangNamSinh;
                    var dialogRef = this.dialog.open(_tiep_nhan_benh_nhan_cho_quet_tiep_nhan_benh_nhan_cho_quet_component__WEBPACK_IMPORTED_MODULE_5__["TiepNhanBenhNhanChoQuetComponent"], {
                        disableClose: true,
                        width: '500px',
                        height: '250px',
                        data: this.thongTinBenhNhan,
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        //console.log("close = ", result);
                        // if (result == null || (result != null && result.maKetQua == "050")) {
                        if (result == null || (result != null && result.maKetQua !== "000" && result.maKetQua !== "004")) {
                            //this.notificationService.showError(TiepNhanBenhNhanMessage.MessageSaiThongTinBenhNhan);
                            //
                            _this.thongTinBenhNhan.MessageErrFromBHYT = result != null ? result.ghiChu : null;
                            var dialogRef_1 = _this.dialog.open(_tiep_nhan_benh_nhan_error_tiep_nhan_benh_nhan_error_component__WEBPACK_IMPORTED_MODULE_6__["TiepNhanBenhNhanErrorComponent"], {
                                disableClose: false,
                                width: '400px',
                                height: '100px',
                                data: _this.thongTinBenhNhan
                            });
                            dialogRef_1.afterClosed().subscribe(function (result) {
                                //document.getElementById("SoTheBHYTisAutoFocus").focus();
                            });
                            //
                        }
                        else {
                            //console.log("thuLai = ", result);
                            _this.dialogRef.close(result);
                            //this.dialogRef2.close();
                        }
                    });
                };
                return TiepNhanBenhNhanPopupKhongKiemTraDuocComponent;
            }());
            TiepNhanBenhNhanPopupKhongKiemTraDuocComponent.ctorParameters = function () { return [
                { type: _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["TiepNhanBenhNhanViewModel"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
            ]; };
            TiepNhanBenhNhanPopupKhongKiemTraDuocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc/tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc/tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], TiepNhanBenhNhanPopupKhongKiemTraDuocComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-lich-su-kcb/tiep-nhan-benh-nhan-popup-lich-su-kcb.component.scss": 
        /*!*********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-lich-su-kcb/tiep-nhan-benh-nhan-popup-lich-su-kcb.component.scss ***!
          \*********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL3RpZXAtbmhhbi1iZW5oLW5oYW4tcG9wdXAtbGljaC1zdS1rY2IvdGllcC1uaGFuLWJlbmgtbmhhbi1wb3B1cC1saWNoLXN1LWtjYi5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-lich-su-kcb/tiep-nhan-benh-nhan-popup-lich-su-kcb.component.ts": 
        /*!*******************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-lich-su-kcb/tiep-nhan-benh-nhan-popup-lich-su-kcb.component.ts ***!
          \*******************************************************************************************************************************************/
        /*! exports provided: TiepNhanBenhNhanPopupLichSuKcbComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanBenhNhanPopupLichSuKcbComponent", function () { return TiepNhanBenhNhanPopupLichSuKcbComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
            var TiepNhanBenhNhanPopupLichSuKcbComponent = /** @class */ (function () {
                function TiepNhanBenhNhanPopupLichSuKcbComponent(data, dialog, dialogRef, dialogRef2) {
                    this.data = data;
                    this.dialog = dialog;
                    this.dialogRef = dialogRef;
                    this.dialogRef2 = dialogRef2;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.gridColumns = [];
                }
                TiepNhanBenhNhanPopupLichSuKcbComponent.prototype.ngOnInit = function () {
                    //console.log("TiepNhanBenhNhanPopupLichSuKcbComponent = ", this.data);
                    //documenttype
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].YeuCauTiepNhan;
                    this.gridColumns = [
                        { Field: "STT", Title: "STT", Width: 45, Sortable: false },
                        { Field: "MaTheBHYT", Title: "Mã thẻ BHYT", Width: 150, Sortable: false },
                        { Field: "HoVaTen", Title: "Họ và tên", Width: 150, Sortable: false },
                        { Field: "NgayVaoVien", Title: "Ngày vào viện", Width: 156, Sortable: false },
                        { Field: "NgayRaVien", Title: "Ngày ra viện", Width: 156, Sortable: false },
                        { Field: "", Title: "Khoa/Phòng", Width: 100, Sortable: false },
                        { Field: "CoSoKCB", Title: "Cơ sở KCB", Width: 180, Sortable: false },
                        { Field: "KetQuaDieuTri", Title: "Kết quả điều trị", Width: 100, Sortable: false },
                        { Field: "LyDoVaoVien", Title: "Lý do vào viện", Width: 100, Sortable: false },
                        { Field: "TinhTrangRaVien", Title: "Tình trạng ra viện", Width: 100, Sortable: false },
                    ];
                    this.setDataForGrid();
                };
                TiepNhanBenhNhanPopupLichSuKcbComponent.prototype.setDataForGrid = function () {
                    this.gridData = {
                        data: this.data,
                        total: this.data.length
                    };
                    if (this.grid != undefined) {
                        this.grid.setDataSource();
                    }
                };
                TiepNhanBenhNhanPopupLichSuKcbComponent.prototype.close = function (answer) {
                    this.dialogRef.close(answer);
                };
                return TiepNhanBenhNhanPopupLichSuKcbComponent;
            }());
            TiepNhanBenhNhanPopupLichSuKcbComponent.ctorParameters = function () { return [
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('grid', { static: false })
            ], TiepNhanBenhNhanPopupLichSuKcbComponent.prototype, "grid", void 0);
            TiepNhanBenhNhanPopupLichSuKcbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tiep-nhan-benh-nhan-popup-lich-su-kcb',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tiep-nhan-benh-nhan-popup-lich-su-kcb.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-lich-su-kcb/tiep-nhan-benh-nhan-popup-lich-su-kcb.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tiep-nhan-benh-nhan-popup-lich-su-kcb.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-lich-su-kcb/tiep-nhan-benh-nhan-popup-lich-su-kcb.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], TiepNhanBenhNhanPopupLichSuKcbComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt/tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt.component.scss": 
        /*!*************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt/tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt.component.scss ***!
          \*************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL3RpZXAtbmhhbi1iZW5oLW5oYW4tcG9wdXAtbGljaC1zdS1raWVtLXRyYS10aGUtYmh5dC90aWVwLW5oYW4tYmVuaC1uaGFuLXBvcHVwLWxpY2gtc3Uta2llbS10cmEtdGhlLWJoeXQuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt/tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt.component.ts": 
        /*!***********************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt/tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt.component.ts ***!
          \***********************************************************************************************************************************************************************/
        /*! exports provided: TiepNhanBenhNhanPopupLichSuKiemTraTheBhytComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanBenhNhanPopupLichSuKiemTraTheBhytComponent", function () { return TiepNhanBenhNhanPopupLichSuKiemTraTheBhytComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
            var TiepNhanBenhNhanPopupLichSuKiemTraTheBhytComponent = /** @class */ (function () {
                function TiepNhanBenhNhanPopupLichSuKiemTraTheBhytComponent(data, dialog, dialogRef) {
                    this.data = data;
                    this.dialog = dialog;
                    this.dialogRef = dialogRef;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.gridColumns = [];
                }
                TiepNhanBenhNhanPopupLichSuKiemTraTheBhytComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].YeuCauTiepNhan;
                    this.gridColumns = [
                        { Field: "STT", Title: "STT", Width: 45, Sortable: false },
                        { Field: "UserKiemTra", Title: "User kiểm tra", Width: 120, Sortable: false },
                        { Field: "TenCSKCB", Title: "Tên CSKCB", Width: 260, Sortable: false },
                        { Field: "ThoiGianKiemTra", Title: "Thời gian kiểm tra", Width: 155, Sortable: false },
                        { Field: "NoiDungThongBao", Title: "Nội dung thông báo", MinWidth: 300, Sortable: false },
                    ];
                    this.setDataForGrid();
                };
                TiepNhanBenhNhanPopupLichSuKiemTraTheBhytComponent.prototype.setDataForGrid = function () {
                    this.gridData = {
                        data: this.data,
                        total: this.data.length
                    };
                    if (this.grid != undefined) {
                        this.grid.setDataSource();
                    }
                };
                TiepNhanBenhNhanPopupLichSuKiemTraTheBhytComponent.prototype.close = function (answer) {
                    this.dialogRef.close(answer);
                };
                return TiepNhanBenhNhanPopupLichSuKiemTraTheBhytComponent;
            }());
            TiepNhanBenhNhanPopupLichSuKiemTraTheBhytComponent.ctorParameters = function () { return [
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('grid', { static: false })
            ], TiepNhanBenhNhanPopupLichSuKiemTraTheBhytComponent.prototype, "grid", void 0);
            TiepNhanBenhNhanPopupLichSuKiemTraTheBhytComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt/tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt/tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], TiepNhanBenhNhanPopupLichSuKiemTraTheBhytComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup/tiep-nhan-benh-nhan-popup.component.scss": 
        /*!*********************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup/tiep-nhan-benh-nhan-popup.component.scss ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".sub-title {\n  font-size: 15px;\n  border-bottom: 1px solid var(--foreground-divider);\n  padding-bottom: 0 !important;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: var(--text-color);\n  text-transform: uppercase;\n}\n\ntable tr {\n  border-bottom: 1px solid #ebeced;\n}\n\ntable tr td {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vdGllcC1uaGFuLWJlbmgtbmhhbi1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHRpZXAtbmhhbi1iZW5oLW5oYW5cXHRpZXAtbmhhbi1iZW5oLW5oYW4tcG9wdXBcXHRpZXAtbmhhbi1iZW5oLW5oYW4tcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL3RpZXAtbmhhbi1iZW5oLW5oYW4tcG9wdXAvdGllcC1uaGFuLWJlbmgtbmhhbi1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxrREFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vdGllcC1uaGFuLWJlbmgtbmhhbi90aWVwLW5oYW4tYmVuaC1uaGFuLXBvcHVwL3RpZXAtbmhhbi1iZW5oLW5oYW4tcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3ViLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG50YWJsZSB0ciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlY2VkO1xufVxuXG50YWJsZSB0ciB0ZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59IiwiLnN1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxudGFibGUgdHIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWNlZDtcbn1cblxudGFibGUgdHIgdGQge1xuICBwYWRkaW5nOiAxMHB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup/tiep-nhan-benh-nhan-popup.component.ts": 
        /*!*******************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup/tiep-nhan-benh-nhan-popup.component.ts ***!
          \*******************************************************************************************************************/
        /*! exports provided: TiepNhanBenhNhanPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanBenhNhanPopupComponent", function () { return TiepNhanBenhNhanPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tiep-nhan-benh-nhan.model */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__);
            var TiepNhanBenhNhanPopupComponent = /** @class */ (function () {
                function TiepNhanBenhNhanPopupComponent(data, dialog) {
                    this.data = data;
                    this.dialog = dialog;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default.a;
                }
                TiepNhanBenhNhanPopupComponent.prototype.ngOnInit = function () {
                    //console.log(this.data);
                };
                TiepNhanBenhNhanPopupComponent.prototype.close = function () {
                    this.dialog.closeAll();
                };
                return TiepNhanBenhNhanPopupComponent;
            }());
            TiepNhanBenhNhanPopupComponent.ctorParameters = function () { return [
                { type: _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["TiepNhanBenhNhanViewModel"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
            ]; };
            TiepNhanBenhNhanPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tiep-nhan-benh-nhan-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tiep-nhan-benh-nhan-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup/tiep-nhan-benh-nhan-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tiep-nhan-benh-nhan-popup.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup/tiep-nhan-benh-nhan-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], TiepNhanBenhNhanPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-routing.module.ts": 
        /*!****************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-routing.module.ts ***!
          \****************************************************************************************/
        /*! exports provided: TiepNhanBenhNhanRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanBenhNhanRoutingModule", function () { return TiepNhanBenhNhanRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _tiep_nhan_benh_nhan_tiep_nhan_benh_nhan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            var routes = [
                {
                    path: ':id',
                    component: _tiep_nhan_benh_nhan_tiep_nhan_benh_nhan_component__WEBPACK_IMPORTED_MODULE_4__["TiepNhanBenhNhanComponent"],
                    data: {
                        title: 'Tiếp Nhận Người Bệnh',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].YeuCauTiepNhan,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
                },
                {
                    path: '',
                    component: _tiep_nhan_benh_nhan_tiep_nhan_benh_nhan_component__WEBPACK_IMPORTED_MODULE_4__["TiepNhanBenhNhanComponent"],
                    data: {
                        title: 'Tiếp Nhận Người Bệnh',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].YeuCauTiepNhan,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
                },
            ];
            var TiepNhanBenhNhanRoutingModule = /** @class */ (function () {
                function TiepNhanBenhNhanRoutingModule() {
                }
                return TiepNhanBenhNhanRoutingModule;
            }());
            TiepNhanBenhNhanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], TiepNhanBenhNhanRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-tai-kham/tiep-nhan-benh-nhan-tai-kham.component.scss": 
        /*!***************************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-tai-kham/tiep-nhan-benh-nhan-tai-kham.component.scss ***!
          \***************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL3RpZXAtbmhhbi1iZW5oLW5oYW4tdGFpLWtoYW0vdGllcC1uaGFuLWJlbmgtbmhhbi10YWkta2hhbS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-tai-kham/tiep-nhan-benh-nhan-tai-kham.component.ts": 
        /*!*************************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-tai-kham/tiep-nhan-benh-nhan-tai-kham.component.ts ***!
          \*************************************************************************************************************************/
        /*! exports provided: TiepNhanBenhNhanTaiKhamComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanBenhNhanTaiKhamComponent", function () { return TiepNhanBenhNhanTaiKhamComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            var TiepNhanBenhNhanTaiKhamComponent = /** @class */ (function () {
                function TiepNhanBenhNhanTaiKhamComponent() {
                    this.gridColumns = [];
                    this.urlGetDataGrid = "TiepNhanBenhNhan/GetDataForGridAsyncTaiKham";
                    this.urlGetTotalPageGrid = "TiepNhanBenhNhan/GetTotalPageForGridAsyncTaiKham";
                    this.BenhNhan = null;
                }
                TiepNhanBenhNhanTaiKhamComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].YeuCauTiepNhan;
                    this.gridColumns = [
                        { Field: "TenDichVu", Title: "Tên dịch vụ", Width: 150, Sortable: false },
                        { Field: "BacSiThucHien", Title: "Bác sĩ thực hiện", Width: 150, Sortable: false },
                        { Field: "NgayTaiKhamDisplay", Title: "Ngày tái khám", Width: 150, Sortable: false },
                        { Field: "GhiChuTaiKham", Title: "Ghi chú tái khám", Width: 150, Sortable: false },
                    ];
                };
                return TiepNhanBenhNhanTaiKhamComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"], { static: true })
            ], TiepNhanBenhNhanTaiKhamComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TiepNhanBenhNhanTaiKhamComponent.prototype, "BenhNhan", void 0);
            TiepNhanBenhNhanTaiKhamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tiep-nhan-benh-nhan-tai-kham',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tiep-nhan-benh-nhan-tai-kham.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-tai-kham/tiep-nhan-benh-nhan-tai-kham.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tiep-nhan-benh-nhan-tai-kham.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-tai-kham/tiep-nhan-benh-nhan-tai-kham.component.scss")).default]
                })
            ], TiepNhanBenhNhanTaiKhamComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.module.ts": 
        /*!********************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.module.ts ***!
          \********************************************************************************/
        /*! exports provided: TiepNhanBenhNhanModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanBenhNhanModule", function () { return TiepNhanBenhNhanModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _tiep_nhan_benh_nhan_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tiep-nhan-benh-nhan-routing.module */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-routing.module.ts");
            /* harmony import */ var _tiep_nhan_benh_nhan_tiep_nhan_benh_nhan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _tiep_nhan_benh_nhan_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tiep-nhan-benh-nhan.service */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            /* harmony import */ var _tiep_nhan_benh_nhan_popup_tiep_nhan_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tiep-nhan-benh-nhan-popup/tiep-nhan-benh-nhan-popup.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup/tiep-nhan-benh-nhan-popup.component.ts");
            /* harmony import */ var _tiep_nhan_benh_nhan_cho_quet_tiep_nhan_benh_nhan_cho_quet_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tiep-nhan-benh-nhan-cho-quet/tiep-nhan-benh-nhan-cho-quet.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-cho-quet/tiep-nhan-benh-nhan-cho-quet.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _tiep_nhan_benh_nhan_error_tiep_nhan_benh_nhan_error_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./tiep-nhan-benh-nhan-error/tiep-nhan-benh-nhan-error.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-error/tiep-nhan-benh-nhan-error.component.ts");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _tiep_nhan_benh_nhan_popup_het_hieu_luc_tiep_nhan_benh_nhan_popup_het_hieu_luc_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./tiep-nhan-benh-nhan-popup-het-hieu-luc/tiep-nhan-benh-nhan-popup-het-hieu-luc.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-het-hieu-luc/tiep-nhan-benh-nhan-popup-het-hieu-luc.component.ts");
            /* harmony import */ var _tiep_nhan_benh_nhan_popup_khong_kiem_tra_duoc_tiep_nhan_benh_nhan_popup_khong_kiem_tra_duoc_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc/tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc/tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc.component.ts");
            /* harmony import */ var _tiep_nhan_benh_nhan_lich_su_tiep_nhan_benh_nhan_lich_su_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./tiep-nhan-benh-nhan-lich-su/tiep-nhan-benh-nhan-lich-su.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-lich-su/tiep-nhan-benh-nhan-lich-su.component.ts");
            /* harmony import */ var _kham_benh_kham_benh_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../kham-benh/kham-benh.module */ "./src/app/modules/main/kham-benh/kham-benh.module.ts");
            /* harmony import */ var _tiep_nhan_benh_nhan_popup_lich_su_kcb_tiep_nhan_benh_nhan_popup_lich_su_kcb_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./tiep-nhan-benh-nhan-popup-lich-su-kcb/tiep-nhan-benh-nhan-popup-lich-su-kcb.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-lich-su-kcb/tiep-nhan-benh-nhan-popup-lich-su-kcb.component.ts");
            /* harmony import */ var _popup_tim_kiem_benh_nhan_popup_tim_kiem_benh_nhan_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./popup-tim-kiem-benh-nhan/popup-tim-kiem-benh-nhan.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/popup-tim-kiem-benh-nhan/popup-tim-kiem-benh-nhan.component.ts");
            /* harmony import */ var _tiep_nhan_benh_nhan_popup_lich_su_kiem_tra_the_bhyt_tiep_nhan_benh_nhan_popup_lich_su_kiem_tra_the_bhyt_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt/tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt/tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt.component.ts");
            /* harmony import */ var _tiep_nhan_benh_nhan_tai_kham_tiep_nhan_benh_nhan_tai_kham_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./tiep-nhan-benh-nhan-tai-kham/tiep-nhan-benh-nhan-tai-kham.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-tai-kham/tiep-nhan-benh-nhan-tai-kham.component.ts");
            /* harmony import */ var _in_phieu_dang_ky_kham_tiep_nhan_benh_nhan_popup_in_phieu_dang_ky_kham_tiep_nhan_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup/in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup/in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup.component.ts");
            /* harmony import */ var _popup_marketing_tiep_nhan_benh_nhan_popup_marketing_tiep_nhan_benh_nhan_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./popup-marketing-tiep-nhan-benh-nhan/popup-marketing-tiep-nhan-benh-nhan.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/popup-marketing-tiep-nhan-benh-nhan/popup-marketing-tiep-nhan-benh-nhan.component.ts");
            /* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/dist/fesm2015/index.js");
            /* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/dist/fesm2015/index.js");
            /* harmony import */ var _popup_marketing_check_trung_popup_marketing_check_trung_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./popup-marketing-check-trung/popup-marketing-check-trung.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/popup-marketing-check-trung/popup-marketing-check-trung.component.ts");
            /* harmony import */ var _popup_dich_vu_check_trung_popup_dich_vu_check_trung_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./popup-dich-vu-check-trung/popup-dich-vu-check-trung.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/popup-dich-vu-check-trung/popup-dich-vu-check-trung.component.ts");
            /* harmony import */ var _dich_vu_khuyen_mai_dich_vu_khuyen_mai_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../dich-vu-khuyen-mai/dich-vu-khuyen-mai.module */ "./src/app/modules/main/dich-vu-khuyen-mai/dich-vu-khuyen-mai.module.ts");
            /* harmony import */ var _xem_truoc_bang_ke_chi_phi_poup_xem_truoc_bang_ke_chi_phi_poup_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./xem-truoc-bang-ke-chi-phi-poup/xem-truoc-bang-ke-chi-phi-poup.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/xem-truoc-bang-ke-chi-phi-poup/xem-truoc-bang-ke-chi-phi-poup.component.ts");
            /* harmony import */ var _in_phieu_xn_covid_in_phieu_xn_covid_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./in-phieu-xn-covid/in-phieu-xn-covid.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/in-phieu-xn-covid/in-phieu-xn-covid.component.ts");
            /* harmony import */ var _xn_covid_popup_xn_covid_popup_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./xn-covid-popup/xn-covid-popup.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/xn-covid-popup/xn-covid-popup.component.ts");
            var TiepNhanBenhNhanModule = /** @class */ (function () {
                function TiepNhanBenhNhanModule() {
                }
                return TiepNhanBenhNhanModule;
            }());
            TiepNhanBenhNhanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_tiep_nhan_benh_nhan_tiep_nhan_benh_nhan_component__WEBPACK_IMPORTED_MODULE_4__["TiepNhanBenhNhanComponent"],
                        _tiep_nhan_benh_nhan_popup_tiep_nhan_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_20__["TiepNhanBenhNhanPopupComponent"], _tiep_nhan_benh_nhan_cho_quet_tiep_nhan_benh_nhan_cho_quet_component__WEBPACK_IMPORTED_MODULE_21__["TiepNhanBenhNhanChoQuetComponent"],
                        _tiep_nhan_benh_nhan_error_tiep_nhan_benh_nhan_error_component__WEBPACK_IMPORTED_MODULE_23__["TiepNhanBenhNhanErrorComponent"], _tiep_nhan_benh_nhan_popup_het_hieu_luc_tiep_nhan_benh_nhan_popup_het_hieu_luc_component__WEBPACK_IMPORTED_MODULE_25__["TiepNhanBenhNhanPopupHetHieuLucComponent"],
                        _tiep_nhan_benh_nhan_popup_khong_kiem_tra_duoc_tiep_nhan_benh_nhan_popup_khong_kiem_tra_duoc_component__WEBPACK_IMPORTED_MODULE_26__["TiepNhanBenhNhanPopupKhongKiemTraDuocComponent"], _xem_truoc_bang_ke_chi_phi_poup_xem_truoc_bang_ke_chi_phi_poup_component__WEBPACK_IMPORTED_MODULE_40__["XemTruocBangKeChiPhiPopupComponent"],
                        _tiep_nhan_benh_nhan_lich_su_tiep_nhan_benh_nhan_lich_su_component__WEBPACK_IMPORTED_MODULE_27__["TiepNhanBenhNhanLichSuComponent"], _tiep_nhan_benh_nhan_popup_lich_su_kcb_tiep_nhan_benh_nhan_popup_lich_su_kcb_component__WEBPACK_IMPORTED_MODULE_29__["TiepNhanBenhNhanPopupLichSuKcbComponent"],
                        _popup_tim_kiem_benh_nhan_popup_tim_kiem_benh_nhan_component__WEBPACK_IMPORTED_MODULE_30__["PopupTimKiemBenhNhanComponent"], _tiep_nhan_benh_nhan_popup_lich_su_kiem_tra_the_bhyt_tiep_nhan_benh_nhan_popup_lich_su_kiem_tra_the_bhyt_component__WEBPACK_IMPORTED_MODULE_31__["TiepNhanBenhNhanPopupLichSuKiemTraTheBhytComponent"],
                        _tiep_nhan_benh_nhan_tai_kham_tiep_nhan_benh_nhan_tai_kham_component__WEBPACK_IMPORTED_MODULE_32__["TiepNhanBenhNhanTaiKhamComponent"], _in_phieu_dang_ky_kham_tiep_nhan_benh_nhan_popup_in_phieu_dang_ky_kham_tiep_nhan_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_33__["InPhieuDangKyKhamTiepNhanBenhNhanPopupComponent"], _popup_marketing_tiep_nhan_benh_nhan_popup_marketing_tiep_nhan_benh_nhan_component__WEBPACK_IMPORTED_MODULE_34__["PopupMarketingTiepNhanBenhNhanComponent"],
                        _popup_marketing_check_trung_popup_marketing_check_trung_component__WEBPACK_IMPORTED_MODULE_37__["PopupMarketingCheckTrungComponent"], _popup_dich_vu_check_trung_popup_dich_vu_check_trung_component__WEBPACK_IMPORTED_MODULE_38__["PopupDichVuCheckTrungComponent"], _in_phieu_xn_covid_in_phieu_xn_covid_component__WEBPACK_IMPORTED_MODULE_41__["InPhieuXnCovidComponent"], _xn_covid_popup_xn_covid_popup_component__WEBPACK_IMPORTED_MODULE_42__["XnCovidPopupComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_16__["IconModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                        _tiep_nhan_benh_nhan_routing_module__WEBPACK_IMPORTED_MODULE_3__["TiepNhanBenhNhanRoutingModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_19__["LayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_24__["GridModule"],
                        _kham_benh_kham_benh_module__WEBPACK_IMPORTED_MODULE_28__["KhamBenhModule"],
                        _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_35__["InputsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatOptionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
                        _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_36__["DropDownsModule"],
                        _dich_vu_khuyen_mai_dich_vu_khuyen_mai_module__WEBPACK_IMPORTED_MODULE_39__["DichVuKhuyenMaiModule"]
                    ],
                    providers: [
                        _tiep_nhan_benh_nhan_service__WEBPACK_IMPORTED_MODULE_17__["TiepNhanBenhNhanService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_18__["BaseService"], useClass: _tiep_nhan_benh_nhan_service__WEBPACK_IMPORTED_MODULE_17__["TiepNhanBenhNhanService"] },
                    ],
                    exports: [
                        _kham_benh_kham_benh_module__WEBPACK_IMPORTED_MODULE_28__["KhamBenhModule"]
                    ],
                    entryComponents: [
                        _tiep_nhan_benh_nhan_popup_tiep_nhan_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_20__["TiepNhanBenhNhanPopupComponent"],
                        _tiep_nhan_benh_nhan_cho_quet_tiep_nhan_benh_nhan_cho_quet_component__WEBPACK_IMPORTED_MODULE_21__["TiepNhanBenhNhanChoQuetComponent"],
                        _tiep_nhan_benh_nhan_error_tiep_nhan_benh_nhan_error_component__WEBPACK_IMPORTED_MODULE_23__["TiepNhanBenhNhanErrorComponent"],
                        _tiep_nhan_benh_nhan_popup_het_hieu_luc_tiep_nhan_benh_nhan_popup_het_hieu_luc_component__WEBPACK_IMPORTED_MODULE_25__["TiepNhanBenhNhanPopupHetHieuLucComponent"],
                        _tiep_nhan_benh_nhan_popup_khong_kiem_tra_duoc_tiep_nhan_benh_nhan_popup_khong_kiem_tra_duoc_component__WEBPACK_IMPORTED_MODULE_26__["TiepNhanBenhNhanPopupKhongKiemTraDuocComponent"],
                        _tiep_nhan_benh_nhan_popup_lich_su_kcb_tiep_nhan_benh_nhan_popup_lich_su_kcb_component__WEBPACK_IMPORTED_MODULE_29__["TiepNhanBenhNhanPopupLichSuKcbComponent"],
                        _popup_tim_kiem_benh_nhan_popup_tim_kiem_benh_nhan_component__WEBPACK_IMPORTED_MODULE_30__["PopupTimKiemBenhNhanComponent"],
                        _tiep_nhan_benh_nhan_popup_lich_su_kiem_tra_the_bhyt_tiep_nhan_benh_nhan_popup_lich_su_kiem_tra_the_bhyt_component__WEBPACK_IMPORTED_MODULE_31__["TiepNhanBenhNhanPopupLichSuKiemTraTheBhytComponent"],
                        _in_phieu_dang_ky_kham_tiep_nhan_benh_nhan_popup_in_phieu_dang_ky_kham_tiep_nhan_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_33__["InPhieuDangKyKhamTiepNhanBenhNhanPopupComponent"],
                        _popup_marketing_tiep_nhan_benh_nhan_popup_marketing_tiep_nhan_benh_nhan_component__WEBPACK_IMPORTED_MODULE_34__["PopupMarketingTiepNhanBenhNhanComponent"],
                        _popup_marketing_check_trung_popup_marketing_check_trung_component__WEBPACK_IMPORTED_MODULE_37__["PopupMarketingCheckTrungComponent"],
                        _popup_dich_vu_check_trung_popup_dich_vu_check_trung_component__WEBPACK_IMPORTED_MODULE_38__["PopupDichVuCheckTrungComponent"],
                        _xem_truoc_bang_ke_chi_phi_poup_xem_truoc_bang_ke_chi_phi_poup_component__WEBPACK_IMPORTED_MODULE_40__["XemTruocBangKeChiPhiPopupComponent"],
                        _xn_covid_popup_xn_covid_popup_component__WEBPACK_IMPORTED_MODULE_42__["XnCovidPopupComponent"],
                        _in_phieu_xn_covid_in_phieu_xn_covid_component__WEBPACK_IMPORTED_MODULE_41__["InPhieuXnCovidComponent"]
                    ],
                })
            ], TiepNhanBenhNhanModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.service.ts": 
        /*!*********************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.service.ts ***!
          \*********************************************************************************/
        /*! exports provided: TiepNhanBenhNhanService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanBenhNhanService", function () { return TiepNhanBenhNhanService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var TiepNhanBenhNhanService = /** @class */ (function (_super) {
                __extends(TiepNhanBenhNhanService, _super);
                function TiepNhanBenhNhanService(apiService) {
                    return _super.call(this, apiService) || this;
                }
                return TiepNhanBenhNhanService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            TiepNhanBenhNhanService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            TiepNhanBenhNhanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TiepNhanBenhNhanService);
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.component.scss": 
        /*!*********************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.component.scss ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("kendo-tabstrip {\n  margin-bottom: 5px;\n}\n\n.ten-dich-vu-label {\n  display: inline;\n  text-overflow: ellipsis;\n}\n\n.button-them-goi {\n  width: 20px;\n  height: 20px;\n  margin-top: 5px;\n}\n\n.mat-icon-them-goi {\n  margin-top: -20px;\n  margin-left: -2px;\n}\n\n.xac-nhan-ng-template {\n  display: inherit;\n  white-space: nowrap;\n}\n\n.danh-sach-goi {\n  color: orange;\n  text-decoration: underline;\n}\n\n.div-danh-sach-goi {\n  padding-top: 5px !important;\n}\n\n.info {\n  margin-bottom: -8px;\n  margin-top: 0px;\n}\n\n.header-grid {\n  width: 100%;\n  height: auto;\n  background: #ffe0b2;\n  padding: 10px 10px 10px 10px;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.header-span-grid {\n  width: 80%;\n  padding: 10px 10px 10px 10px;\n  font-weight: bold;\n  color: #005dab;\n  text-transform: uppercase;\n  display: inline-block;\n}\n\n.thong-tin-tai-khoan-benh-nhan {\n  float: right;\n  font-weight: normal;\n}\n\n.so-tuoi {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.styleTinhTong {\n  border: 1px solid #ccc;\n  padding: 15px;\n  background: #e3f2fd;\n  text-align: right;\n  margin: 10px -17px -17px -17px;\n}\n\n.image-barcode {\n  padding-right: 0px !important;\n  position: absolute;\n  right: 25px;\n  margin-top: 10px;\n}\n\n.so-nha {\n  text-transform: capitalize;\n}\n\n.div-voucher {\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vdGllcC1uaGFuLWJlbmgtbmhhbi9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHRpZXAtbmhhbi1iZW5oLW5oYW5cXHRpZXAtbmhhbi1iZW5oLW5oYW5cXHRpZXAtbmhhbi1iZW5oLW5oYW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL3RpZXAtbmhhbi1iZW5oLW5oYW4vdGllcC1uaGFuLWJlbmgtbmhhbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vdGllcC1uaGFuLWJlbmgtbmhhbi90aWVwLW5oYW4tYmVuaC1uaGFuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsia2VuZG8tdGFic3RyaXAge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi50ZW4tZGljaC12dS1sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5idXR0b24tdGhlbS1nb2kge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5tYXQtaWNvbi10aGVtLWdvaSB7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBtYXJnaW4tbGVmdDogLTJweDtcbn1cblxuLnhhYy1uaGFuLW5nLXRlbXBsYXRlIHtcbiAgZGlzcGxheTogaW5oZXJpdDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmRhbmgtc2FjaC1nb2kge1xuICBjb2xvcjogb3JhbmdlO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmRpdi1kYW5oLXNhY2gtZ29pIHtcbiAgcGFkZGluZy10b3A6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IC04cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLmhlYWRlci1ncmlkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogI2ZmZTBiMjtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5oZWFkZXItc3Bhbi1ncmlkIHtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50aG9uZy10aW4tdGFpLWtob2FuLWJlbmgtbmhhbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnNvLXR1b2kge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnN0eWxlVGluaFRvbmcge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZTNmMmZkO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luOiAxMHB4IC0xN3B4IC0xN3B4IC0xN3B4O1xufVxuXG4uaW1hZ2UtYmFyY29kZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc28tbmhhIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5kaXYtdm91Y2hlciB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn0iLCJrZW5kby10YWJzdHJpcCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnRlbi1kaWNoLXZ1LWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmJ1dHRvbi10aGVtLWdvaSB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm1hdC1pY29uLXRoZW0tZ29pIHtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMnB4O1xufVxuXG4ueGFjLW5oYW4tbmctdGVtcGxhdGUge1xuICBkaXNwbGF5OiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZGFuaC1zYWNoLWdvaSB7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uZGl2LWRhbmgtc2FjaC1nb2kge1xuICBwYWRkaW5nLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pbmZvIHtcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uaGVhZGVyLWdyaWQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZmZlMGIyO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmhlYWRlci1zcGFuLWdyaWQge1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDVkYWI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRob25nLXRpbi10YWkta2hvYW4tYmVuaC1uaGFuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uc28tdHVvaSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc3R5bGVUaW5oVG9uZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlM2YyZmQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW46IDEwcHggLTE3cHggLTE3cHggLTE3cHg7XG59XG5cbi5pbWFnZS1iYXJjb2RlIHtcbiAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zby1uaGEge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmRpdi12b3VjaGVyIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.component.ts": 
        /*!*******************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.component.ts ***!
          \*******************************************************************************************************/
        /*! exports provided: TiepNhanBenhNhanComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanBenhNhanComponent", function () { return TiepNhanBenhNhanComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _danh_muc_bao_hiem_y_te_bao_hiem_y_te_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../danh-muc/bao-hiem-y-te/bao-hiem-y-te.model */ "./src/app/modules/main/danh-muc/bao-hiem-y-te/bao-hiem-y-te.model.ts");
            /* harmony import */ var _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tiep-nhan-benh-nhan.model */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model.ts");
            /* harmony import */ var src_app_shared_enum_common_type_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/common-type.enums */ "./src/app/shared/enum/common-type.enums.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _tiep_nhan_benh_nhan_popup_tiep_nhan_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tiep-nhan-benh-nhan-popup/tiep-nhan-benh-nhan-popup.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup/tiep-nhan-benh-nhan-popup.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var _tiep_nhan_benh_nhan_cho_quet_tiep_nhan_benh_nhan_cho_quet_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../tiep-nhan-benh-nhan-cho-quet/tiep-nhan-benh-nhan-cho-quet.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-cho-quet/tiep-nhan-benh-nhan-cho-quet.component.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/baseline-info */ "./node_modules/@iconify/icons-ic/baseline-info.js");
            /* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_20__);
            /* harmony import */ var src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/enum/tinh-trang-the.enum */ "./src/app/shared/enum/tinh-trang-the.enum.ts");
            /* harmony import */ var _tiep_nhan_benh_nhan_error_tiep_nhan_benh_nhan_error_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../tiep-nhan-benh-nhan-error/tiep-nhan-benh-nhan-error.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-error/tiep-nhan-benh-nhan-error.component.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_23__);
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_24__);
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_25__);
            /* harmony import */ var _iconify_icons_ic_search__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @iconify/icons-ic/search */ "./node_modules/@iconify/icons-ic/search.js");
            /* harmony import */ var _iconify_icons_ic_search__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_search__WEBPACK_IMPORTED_MODULE_26__);
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_27__);
            /* harmony import */ var _tiep_nhan_benh_nhan_popup_het_hieu_luc_tiep_nhan_benh_nhan_popup_het_hieu_luc_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../tiep-nhan-benh-nhan-popup-het-hieu-luc/tiep-nhan-benh-nhan-popup-het-hieu-luc.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-het-hieu-luc/tiep-nhan-benh-nhan-popup-het-hieu-luc.component.ts");
            /* harmony import */ var _tiep_nhan_benh_nhan_popup_khong_kiem_tra_duoc_tiep_nhan_benh_nhan_popup_khong_kiem_tra_duoc_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc/tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc/tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _tiep_nhan_benh_nhan_popup_lich_su_kcb_tiep_nhan_benh_nhan_popup_lich_su_kcb_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../tiep-nhan-benh-nhan-popup-lich-su-kcb/tiep-nhan-benh-nhan-popup-lich-su-kcb.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-lich-su-kcb/tiep-nhan-benh-nhan-popup-lich-su-kcb.component.ts");
            /* harmony import */ var _popup_tim_kiem_benh_nhan_popup_tim_kiem_benh_nhan_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../popup-tim-kiem-benh-nhan/popup-tim-kiem-benh-nhan.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/popup-tim-kiem-benh-nhan/popup-tim-kiem-benh-nhan.component.ts");
            /* harmony import */ var src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! src/app/shared/models/common.model */ "./src/app/shared/models/common.model.ts");
            /* harmony import */ var _tiep_nhan_benh_nhan_popup_lich_su_kiem_tra_the_bhyt_tiep_nhan_benh_nhan_popup_lich_su_kiem_tra_the_bhyt_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt/tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt/tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt.component.ts");
            /* harmony import */ var _in_phieu_dang_ky_kham_tiep_nhan_benh_nhan_popup_in_phieu_dang_ky_kham_tiep_nhan_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup/in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup/in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup.component.ts");
            /* harmony import */ var _popup_marketing_tiep_nhan_benh_nhan_popup_marketing_tiep_nhan_benh_nhan_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../popup-marketing-tiep-nhan-benh-nhan/popup-marketing-tiep-nhan-benh-nhan.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/popup-marketing-tiep-nhan-benh-nhan/popup-marketing-tiep-nhan-benh-nhan.component.ts");
            /* harmony import */ var _popup_dich_vu_check_trung_popup_dich_vu_check_trung_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../popup-dich-vu-check-trung/popup-dich-vu-check-trung.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/popup-dich-vu-check-trung/popup-dich-vu-check-trung.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _dich_vu_khuyen_mai_dich_vu_khuyen_mai_popup_dich_vu_khuyen_mai_popup_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../dich-vu-khuyen-mai/dich-vu-khuyen-mai-popup/dich-vu-khuyen-mai-popup.component */ "./src/app/modules/main/dich-vu-khuyen-mai/dich-vu-khuyen-mai-popup/dich-vu-khuyen-mai-popup.component.ts");
            /* harmony import */ var _kham_benh_kham_benh_lan_kham_hien_tai_lan_kham_hien_tai_nhom_dich_vu_thuong_dung_popup_lan_kham_hien_tai_nhom_dich_vu_thuong_dung_popup_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../kham-benh/kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-nhom-dich-vu-thuong-dung-popup/lan-kham-hien-tai-nhom-dich-vu-thuong-dung-popup.component */ "./src/app/modules/main/kham-benh/kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-nhom-dich-vu-thuong-dung-popup/lan-kham-hien-tai-nhom-dich-vu-thuong-dung-popup.component.ts");
            /* harmony import */ var src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! src/app/shared/enum/kham-benh.enum */ "./src/app/shared/enum/kham-benh.enum.ts");
            /* harmony import */ var _kham_benh_kham_benh_lan_kham_hien_tai_lan_kham_hien_tai_nhom_dich_vu_loi_popup_lan_kham_hien_tai_nhom_dich_vu_loi_popup_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../kham-benh/kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-nhom-dich-vu-loi-popup/lan-kham-hien-tai-nhom-dich-vu-loi-popup.component */ "./src/app/modules/main/kham-benh/kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-nhom-dich-vu-loi-popup/lan-kham-hien-tai-nhom-dich-vu-loi-popup.component.ts");
            /* harmony import */ var _xn_covid_popup_xn_covid_popup_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../xn-covid-popup/xn-covid-popup.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/xn-covid-popup/xn-covid-popup.component.ts");
            /* harmony import */ var src_app_shared_enum_bo_phan_enum__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! src/app/shared/enum/bo-phan.enum */ "./src/app/shared/enum/bo-phan.enum.ts");
            var TiepNhanBenhNhanComponent = /** @class */ (function () {
                function TiepNhanBenhNhanComponent(apiService, dialog, authService, router, notificationService, route, renderer, cdRef) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.authService = authService;
                    this.router = router;
                    this.notificationService = notificationService;
                    this.route = route;
                    this.renderer = renderer;
                    this.cdRef = cdRef;
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_23___default.a;
                    this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_24___default.a;
                    this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_25___default.a;
                    this.icFind = _iconify_icons_ic_search__WEBPACK_IMPORTED_MODULE_26___default.a;
                    this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_27___default.a;
                    this.isSearchQRCodeEnable = true;
                    this.isDungTuyenDisplay = null;
                    this.isDungTuyen = false;
                    this.isOutOfDate = false;
                    this.validationErrors = [];
                    this.icInfo = _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_20___default.a;
                    this.soPhanTramHuongBHYT = null;
                    this.gridColumns = [];
                    this.gridKhamBenhColumns = [];
                    this.gridKyThuatColumns = [];
                    this.gridKhongChietKhauColumns = [];
                    this.gridCoChietKhauColumns = [];
                    this.gridTaiLieuDinhKemColumns = [];
                    this.themTaiLieu = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["ThemTaiLieuDinhKem"]();
                    this.themChiDinhDichVuModel = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["ThemChiDinhDichVu"]();
                    this.themChiDinhGoiModel = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["ThemChiDinhDichVu"]();
                    this.themBaoHiemTuNhanModel = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["ThemBaoHiemTuNhan"]();
                    this.lstBHTN = [];
                    this.isIdNeedUpdate = null;
                    this.isUpdateGrid = false;
                    this.gridDataKhacCoChietKhauArray = [];
                    this.soLuongGoiCoChietKhau = 0;
                    this.soLuongGoiKhongChietKhau = 0;
                    this.isSetValue = false;
                    this.isCheckedBHYT = false;
                    this.isActivePopup = false;
                    this.soTienBHYTSeThanhToan = 0;
                    this.benhNhanId = 0;
                    this.benhNhanIdPopup = 0;
                    this.coYeuCauGoiDichVu = false;
                    this.diaChiBHYT = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["DiaChiBHYT"]();
                    this.lichSuKCB = new Array();
                    this.lichSuKiemTraTheBHYTGrid = new Array();
                    //1 kham benh, 2 ky thuat, 3 giuong
                    this.loaiTiepNhan = null;
                    this.isGoiCoChietKhau = null;
                    //
                    this.duocHuongBHYT = false;
                    this.enableDuocHuongBHYT = false;
                    this.isScanF1 = false;
                    this.idYeuCauTiepNhan = 0;
                    //ngay thang nam sinh
                    this.under6yearsold = false;
                    // voucher
                    this.loaiVoucher = 0;
                    //Tim kiem benh nhan
                    this.lstBenhNhan = new Array();
                    this.modelTimKiemBenhNhan = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["TimKiemBenhNhanGridVo"]();
                    this.totalBenhNhan = 0;
                    this.queryInfoNguoiLienHeQuanHuyen = new src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_33__["LookupQueryInfo"]();
                    this.queryInfoNguoiLienHePhuongXa = new src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_33__["LookupQueryInfo"]();
                    //message kiem tra tren BHYT
                    this.messageThanhCong = "Kiểm tra thành công";
                    this.messageKhongThanhCong = "Kiểm tra không thành công";
                    //
                    this.isActiveAction = null;
                    //
                    this.maDichVuPrev = null;
                    //countCheck: number = 0;
                    this.maDichVuDisabled = false;
                    this.danhSachDichVuTrongGoiDaChonTrongYCTN = new Array();
                    this.danhSachGoiDaChonTrongYCTN = new Array();
                    this.danhSachDichVuGoiDaChon = new Array();
                    this.displayToolTipGrid = null;
                    this.suDungGoiMarketingModelTemp = false;
                    this.disabledCheckboxMarketing = false;
                    this.danhSachDichVuDaChonTrongLanPopup = new Array();
                    this.dichVuSarsCoVs = [];
                    this.loaiBenhPhamText = null;
                    this.loaiBenhPham = null;
                    this.showbuttonLuuVaInPhieuXetNghiem = false;
                    // group
                    this.groupKhamBenh = [
                        {
                            field: 'Nhom', aggregates: [
                                { field: 'ThanhTien', aggregate: 'sum' },
                                { field: 'BnThanhToan', aggregate: 'sum' },
                                { field: 'SoTienMG', aggregate: 'sum' },
                                { field: 'BHYTThanhToan', aggregate: 'sum' }
                            ]
                        }
                    ];
                    // group
                    this.groupKyThuat = [{
                            field: 'Nhom', aggregates: [
                                { field: 'ThanhTien', aggregate: 'sum' },
                                { field: 'SoTienMG', aggregate: 'sum' },
                                { field: 'BnThanhToan', aggregate: 'sum' }
                            ]
                        }];
                    // group
                    this.groupKhongChietKhau = [
                        {
                            field: 'Nhom', aggregates: [
                                { field: 'ThanhTien', aggregate: 'sum' },
                                { field: 'BHYTThanhToan', aggregate: 'sum' },
                                { field: 'SoTienMG', aggregate: 'sum' },
                                { field: 'BnThanhToan', aggregate: 'sum' }
                            ]
                        }
                    ];
                    // @ViewChild('comboboxNoiThucHien1', { static: true }) comboboxNoiThucHien1: ComboboxComponent;
                    // @ViewChild('comboboxNoiThucHien2', { static: true }) comboboxNoiThucHien2: ComboboxComponent;
                    // action
                    this.groupChietKhau = [
                        {
                            field: 'Nhom', aggregates: [
                                { field: 'ThanhTien', aggregate: 'sum' },
                                { field: 'ThanhTienTrongGoi', aggregate: 'sum' }
                            ]
                        }
                    ];
                    //end chiết khấu
                    this.thanhTienTongCong = 0;
                    this.bnThanhToanTongCong = 0;
                    this.thanhTienDichVuChiDinhBaoGomDichVuTrongGoi = 0;
                    // cập nhật điều kiện tạo mới yctn
                    this.urlPageUpdateYCTN = null;
                    this.errMessageKhongChoPhepTaoMoiYCTN = null;
                    this.changeMaTheBHYT = false;
                    this.loading = false;
                    this.postTimKiem = null;
                    this.timeOutTimKiem = null;
                    this.postTimKiemForEnter = null;
                    this.timeOutTimKiemForEnter = null;
                    this.aggregatesKhamBenh = [{ field: 'ThanhTien', aggregate: 'sum' },
                        { field: 'BHYTThanhToan', aggregate: 'sum' }, { field: 'SoTienMG', aggregate: 'sum' },
                        { field: 'BnThanhToan', aggregate: 'sum' }];
                    this.stateKhamBenh = {
                        skip: 0,
                        take: 200,
                        group: [{ field: 'Nhom', aggregates: this.aggregatesKhamBenh }]
                    };
                    this.aggregatesKyThuat = [{ field: 'ThanhTien', aggregate: 'sum' },
                        { field: 'SoTienMG', aggregate: 'sum' },
                        { field: 'BnThanhToan', aggregate: 'sum' }];
                    this.stateKyThuat = {
                        skip: 0,
                        take: 200,
                        group: [{ field: 'Nhom', aggregates: this.aggregatesKyThuat }]
                    };
                    //============================================================Xử lý thông tin voucher========================================//
                    this.listVoucherItem = [];
                    this.newBarcode = "";
                    this.value = [];
                }
                TiepNhanBenhNhanComponent.prototype.ngOnDestroy = function () {
                    //console.log("ngOnDestroy");
                    //this.cdRef.detectChanges();
                    //this.cdRef.markForCheck();
                    //console.log("ngOnDestroy");
                    this.dialog.ngOnDestroy();
                };
                TiepNhanBenhNhanComponent.prototype.ngOnInit = function () {
                    this.errMessageKhongChoPhepTaoMoiYCTN = null;
                    this.urlPageUpdateYCTN = null;
                    this.changeMaTheBHYT = false;
                    this.id = this.route.snapshot.params.id;
                    this.getListDichVuSarsCoVs();
                    if (this.id != undefined) {
                        this.getBenhNhan(this.id, true);
                    }
                    else {
                        this.getDefaultDataTNBN();
                    }
                    console.log("ngOnInit - Id = ", this.id);
                    if (window.location.protocol == "http:") {
                        this.hostingName = "http://" + window.location.host;
                    }
                    else {
                        this.hostingName = "https://" + window.location.host;
                    }
                    this.danhSachDichVuTrongGoiDaChonTrongYCTN = new Array();
                    this.danhSachGoiDaChonTrongYCTN = new Array();
                    this.danhSachDichVuGoiDaChon = new Array();
                    this.suDungGoiMarketingModelTemp = false;
                    this.disabledCheckboxMarketing = false;
                    this.danhSachDichVuDaChonTrongLanPopup = new Array();
                    this.getSoTienBHYTSeThanhToan();
                    this.getListTenTrieuChungKham();
                    this.setDefaultData();
                    this.thongTinBenhNhan = new _danh_muc_bao_hiem_y_te_bao_hiem_y_te_model__WEBPACK_IMPORTED_MODULE_2__["ThongTinBenhNhan"]();
                    this.lichSuKCB = new Array();
                    this.lichSuKiemTraTheBHYTGrid = new Array();
                    this.gridTaiLieuDinhKemColumns = [
                        { Field: "LoaiDisplay", Title: "Loại", Width: 200, Sortable: true },
                        { Field: "Ten", Title: "Tài liệu", MinWidth: 200, Sortable: true, Template: this.taiLieuTemplate },
                        { Field: "MoTa", Title: "Mô tả", Width: 200, Sortable: true },
                        { Field: "Action", Title: "", Width: 60, Template: this.actionTaiLieuTemplate },
                    ];
                    this.gridColumns = [
                        { Field: "STT", Title: "STT", Width: 50, Sortable: true },
                        { Field: "CongTyDisplay", Title: "Công ty", Width: 250, Sortable: true },
                        { Field: "MaSoThe", Title: "Số thẻ", Width: 150, Sortable: true },
                        { Field: "NgayHieuLucDisplay", Title: "Từ ngày", Width: 100, Sortable: true },
                        { Field: "NgayHetHanDisplay", Title: "Đến ngày", Width: 100, Sortable: true },
                        { Field: "SoDienThoai", Title: "Điện thoại", Width: 100, Sortable: true },
                        { Field: "DiaChi", Title: "Địa chỉ", MinWidth: 200, Sortable: true },
                        { Field: "Action", Title: "", Width: 60, Template: this.actionTemplate },
                    ];
                    this.gridKhamBenhColumns = [
                        { Field: "Ma", Title: "Mã", Width: 80, Sortable: true },
                        { Field: "Nhom", Title: "Nhóm", Width: 200, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        {
                            Field: "TenDichVu", Title: "Tên Dịch Vụ", MinWidth: 140, Sortable: true,
                            TemplateFooter: this.donGiaKhamBenhFooterTemplate
                        },
                        { Field: "LoaiGia", Title: "Loại Giá", Width: 80, Sortable: true },
                        { Field: "SoLuong", Title: "SL", Width: 30, Sortable: true },
                        {
                            Field: "DonGia", Title: "Đơn Giá", Width: 100, Sortable: true,
                            Template: this.donGiaKhamBenhTemplate
                        },
                        {
                            Field: "ThanhTien", Title: "Thành Tiền", Width: 100, Sortable: true,
                            Template: this.thanhTienKhamBenhTemplate,
                            TemplateFooter: this.thanhTienKhamBenhFooterTemplate,
                            TemplateGroupFooter: this.thanhTienKhamBenhGroupFooterTemplate
                        },
                        {
                            Field: "BHYTThanhToan", Title: "BHYT Thanh Toán", Width: 100, Sortable: true,
                            Template: this.bhytThanhToanKhamBenhTemplate,
                            TemplateFooter: this.bhytThanhToanKhamBenhFooterTemplate,
                            TemplateGroupFooter: this.bhytThanhToanKhamBenhGroupFooterTemplate
                        },
                        // { Field: "TLMGDisplay", Title: "TL MG", Width: 45, Sortable: true },
                        // {
                        //     Field: "SoTienMG", Title: "Số tiền MG", Width: 100, Sortable: true,
                        //     Template: this.soTienMgKhamBenhTemplate,
                        //     TemplateFooter: this.soTienMgKhamBenhFooterTemplate,
                        //     TemplateGroupFooter: this.soTienMgKhamBenhGroupFooterTemplate
                        // },
                        {
                            Field: "BnThanhToan", Title: "BN thanh toán", Width: 150, Sortable: true,
                            Template: this.bnThanhToanKhamBenhTemplate,
                            TemplateFooter: this.bnThanhToanKhamBenhFooterTemplate,
                            TemplateGroupFooter: this.bnThanhToanKhamBenhGroupFooterTemplate
                        },
                        {
                            Field: "NoiThucHienDisplay", Title: "Nơi thực hiện", Width: 230, Sortable: true
                        },
                        { Field: "ActionKhamBenh", Title: "", Width: 50, Template: this.actionKhamBenhTemplate }
                    ];
                    this.gridKyThuatColumns = [
                        { Field: "Nhom", Title: "Nhóm", Width: 200, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "Ma", Title: "Mã", Width: 80, Sortable: true },
                        { Field: "TenDichVu", Title: "Tên Dịch Vụ", MinWidth: 140, Sortable: true },
                        { Field: "LoaiGia", Title: "Loại Giá", Width: 80, Sortable: true },
                        { Field: "SoLuong", Title: "SL", Width: 30, Sortable: true },
                        {
                            Field: "DonGia", Title: "Đơn Giá", Width: 100, Sortable: true,
                            Template: this.donGiaKyThuatTemplate,
                            TemplateFooter: this.donGiaKyThuatFooterTemplate
                        },
                        {
                            Field: "ThanhTien", Title: "Thành Tiền", Width: 100, Sortable: true,
                            Template: this.thanhTienKyThuatTemplate,
                            TemplateFooter: this.thanhTienKyThuatFooterTemplate,
                            TemplateGroupFooter: this.thanhTienKyThuatGroupFooterTemplate
                        },
                        // { Field: "TLMGDisplay", Title: "TL MG", Width: 45, Sortable: true },
                        // {
                        //     Field: "SoTienMG", Title: "Số tiền MG", Width: 100, Sortable: true,
                        //     Template: this.soTienMgKyThuatTemplate,
                        //     TemplateFooter: this.soTienMgKyThuatFooterTemplate,
                        //     TemplateGroupFooter: this.soTienMgKyThuatGroupFooterTemplate
                        // },
                        {
                            Field: "BnThanhToan", Title: "BN thanh toán", Width: 100, Sortable: true,
                            Template: this.bnThanhToanKyThuatTemplate,
                            TemplateFooter: this.bnThanhToanKyThuatFooterTemplate,
                            TemplateGroupFooter: this.bnThanhToanKyThuatGroupFooterTemplate
                        },
                        {
                            Field: "NoiThucHienDisplay", Title: "Nơi thực hiện", Width: 230, Sortable: true
                        },
                        {
                            Field: "TenNhanVienChiDinh", Title: "Nhân viên chỉ định", Width: 230, Sortable: true
                        },
                        { Field: "ActionKyThuat", Title: "", Width: 50, Template: this.actionKyThuatTemplate }
                    ];
                    this.gridKhongChietKhauColumns = [
                        {
                            Field: "id", Title: "#", Width: 50, Sortable: true,
                            Template: this.sttKhongChietKhauTemplate
                        },
                        { Field: "Ma", Title: "Mã", Width: 90, Sortable: true },
                        { Field: "Nhom", Title: "Nhóm", Width: 200, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        {
                            Field: "TenDichVu", Title: "Tên Dịch Vụ",
                            MinWidth: 200, Sortable: true, ShowTooltip: true,
                            TemplateFooter: this.donGiaKhongChietKhauFooterTemplate,
                            TemplateGroupFooter: this.tenDichVuKhongChietKhauFooterTemplate,
                            Template: this.tenDvTemplate
                        },
                        { Field: "GoiCoChietKhauId", Title: "DV Trong Gói", Width: 60, Template: this.dichVuTrongGoiTemplate },
                        { Field: "YeuCauGoiDichVuKhuyenMaiId", Title: "DV Khuyến Mại", Width: 60, Template: this.dichVuKhuyenMaiTemplate },
                        {
                            Field: "LoaiGia", Title: "Loại Giá", Width: 100, Sortable: true,
                            Template: this.loaiGiaTemplate
                        },
                        {
                            Field: "SoLuong", Title: "SL", Width: 50, Sortable: true,
                            Template: this.soLuongTemplate
                        },
                        {
                            Field: "DonGia", Title: "Đơn Giá", Width: 100, Sortable: true,
                            Template: this.donGiaKhongChietKhauTemplate
                        },
                        {
                            Field: "ThanhTien", Title: "Thành Tiền", Width: 100, Sortable: true,
                            Template: this.thanhTienKhongChietKhauTemplate,
                            TemplateFooter: this.thanhTienKhongChietKhauFooterTemplate,
                            TemplateGroupFooter: this.thanhTienKhongChietKhauGroupFooterTemplate
                        },
                        {
                            Field: "GiaBHYT", Title: "ĐG BHYT", Width: 100, Sortable: true,
                            Template: this.donGiaBHYTTemplate
                        },
                        {
                            Field: "DuocHuongBHYT", Title: "ĐH BHYT", Width: 60, Sortable: false,
                            Template: this.duocHuongBHYTTemplate
                        },
                        // {
                        //     Field: "BHYTThanhToan", Title: "BHYT Thanh Toán", Width: 100, Sortable: true,
                        //     Template: this.bhytThanhToanKhongChietKhauTemplate,
                        //     TemplateFooter: this.bhytThanhToanKhongChietKhauFooterTemplate,
                        //     TemplateGroupFooter: this.bhytThanhToanKhongChietKhauGroupFooterTemplate
                        // },
                        // { Field: "TLMGDisplay", Title: "TL MG", Width: 60, Sortable: true },
                        // {
                        //     Field: "SoTienMG", Title: "Số tiền MG", Width: 100, Sortable: true,
                        //     Template: this.soTienMgKhongChietKhauTemplate,
                        //     TemplateFooter: this.soTienMgKhongChietKhauFooterTemplate,
                        //     TemplateGroupFooter: this.soTienMgKhongChietKhauGroupFooterTemplate
                        // },
                        // {
                        //     Field: "BnThanhToan", Title: "BN thanh toán", Width: 100, Sortable: true,
                        //     Template: this.bnThanhToanKhongChietKhauTemplate,
                        //     TemplateFooter: this.bnThanhToanKhongChietKhauFooterTemplate,
                        //     TemplateGroupFooter: this.bnThanhToanKhongChietKhauGroupFooterTemplate
                        // },
                        {
                            Field: "NoiThucHienDisplay", Title: "Nơi thực hiện", Width: 230, Sortable: true,
                            Template: this.noiThucHienKhongChietKhauTemplate
                        },
                        { Field: "ActionKhongChietKhau", Title: "", Width: 50, Template: this.actionKhongChietKhauTemplate }
                    ];
                    this.gridCoChietKhauColumns = [
                        {
                            Field: "id", Title: "#", Width: 90, Sortable: true,
                            Template: this.sttCoChietKhauTemplate
                        },
                        { Field: "Nhom", Title: "Nhóm", Width: 200, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "Ma", Title: "Mã", Width: 80, Sortable: true },
                        { Field: "TenDichVu", Title: "Tên Dịch Vụ", MinWidth: 200, Sortable: true, ShowTooltip: true },
                        { Field: "LoaiGia", Title: "Loại Giá", Width: 80, Sortable: true },
                        { Field: "SoLuong", Title: "SL", Width: 30, Sortable: true },
                        {
                            Field: "DonGia", Title: "Đơn Giá", Width: 100, Sortable: true,
                            Template: this.donGiaChietKhauTemplate,
                            TemplateFooter: this.donGiaChietKhauFooterTemplate
                        },
                        {
                            Field: "ThanhTien", Title: "Thành Tiền", Width: 100, Sortable: true,
                            Template: this.thanhTienChietKhauTemplate,
                            TemplateFooter: this.thanhTienChietKhauFooterTemplate,
                            TemplateGroupFooter: this.thanhTienChietKhauGroupFooterTemplate
                        },
                        {
                            Field: "TyLeChietKhauDisplay", Title: "TL CK", Width: 100, Sortable: true,
                            Template: this.tyLeChietKhauCoChietKhauTemplate,
                        },
                        {
                            Field: "DuocGiamTrongGoi", Title: "DG Trong Gói", Width: 100, Sortable: true,
                            Template: this.duocGiamTrongGoiCoChietKhauTemplate,
                            TemplateFooter: this.duocGiamTrongGoiCoChietKhauFooterTemplate
                        },
                        {
                            Field: "ThanhTienTrongGoi", Title: "TT Trong Gói", Width: 100, Sortable: true,
                            Template: this.thanhTienTrongGoiChietKhauTemplate,
                            TemplateFooter: this.thanhTienTrongGoiChietKhauFooterTemplate,
                            TemplateGroupFooter: this.thanhTienTrongGoiChietKhauGroupFooterTemplate
                        },
                        {
                            Field: "NoiThucHienDisplay", Title: "Nơi thực hiện", Width: 230, Sortable: true,
                            Template: this.noiThucHienChietKhauTemplate
                        }
                    ];
                    //documenttype
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__["DocumentType"].YeuCauTiepNhan;
                    this.tiepNhanBenhNhan = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["TiepNhanBenhNhanViewModel"];
                    this.tiepNhanBenhNhan.TinhThanhId = 1;
                    //set load first quan huyen combobox
                    //console.log("TNBN = ", this.comboboxQuanHuyen);
                    if (this.comboboxQuanHuyen != null && this.comboboxQuanHuyen != undefined) {
                        this.comboboxQuanHuyen.queryInfo.ParameterDependencies = "{tinhThanh:" + this.tiepNhanBenhNhan.TinhThanhId + "}";
                    }
                    this.tiepNhanBenhNhan.BenhNhan = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["BenhNhanTiepNhanBenhNhanViewModel"]();
                    this.tiepNhanBenhNhan.GridLichSuKCB = new Array();
                    this.tiepNhanBenhNhan.GridLichSuKiemTraTheBHYT = new Array();
                    this.lstBHTN = new Array();
                    this.setValueForGridBHTN();
                    this.huyBHTN();
                    this.setDataForDichVuKyThuat();
                    this.setDataForDichVuKhamBenh();
                    this.setDataForDichVuKhac();
                    this.setDataForTaiLieuDinhKem();
                    this.refreshGrid();
                    this.themChiDinhDichVuModel = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["ThemChiDinhDichVu"]();
                    this.themChiDinhGoiModel = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["ThemChiDinhDichVu"]();
                    this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
                    //this.themChiDinhDichVuModel.DoiTuongUuDaiId = this.tiepNhanBenhNhan.DoiTuongUuDaiId;
                    this.clearThongTinTaiKhoanBenhNhan();
                    this.clearThemTaiLieu();
                    this.queryInfoNguoiLienHeQuanHuyen.ParameterDependencies = "{tinhThanhLienHe:" + this.tiepNhanBenhNhan.NguoiLienHeTinhThanhId + "}";
                    this.queryInfoNguoiLienHePhuongXa.ParameterDependencies = "{quanHuyenLienHe:" + this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId + "}";
                    //console.log("isCheckedBHYT = ", this.isCheckedBHYT);
                    this.HoVaTenTextbox.focus();
                };
                TiepNhanBenhNhanComponent.prototype.setSoPhanTramHuongBHYTForThemChiDinh = function () {
                    this.themChiDinhDichVuModel.BHYTMucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
                    this.themChiDinhGoiModel.BHYTMucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
                };
                TiepNhanBenhNhanComponent.prototype.getBenhNhan = function (id, isCheckTheBHYT) {
                    var _this = this;
                    if (isCheckTheBHYT === void 0) { isCheckTheBHYT = false; }
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_38__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: "Đang tải dữ liệu..." }
                    });
                    this.apiService.post("TiepNhanBenhNhan/GetYeuCauKhamBenh?id=" + id).subscribe(function (resultData) {
                        if (resultData == null || resultData == undefined)
                            return;
                        _this.tiepNhanBenhNhan = resultData;
                        //console.log("getBenhNhan", this.tiepNhanBenhNhan);
                        console.log("ngOnInit - tiepNhanBenhNhan = ", _this.tiepNhanBenhNhan);
                        _this.tiepNhanBenhNhan.ThoiDiemTiepNhan = new Date();
                        _this.tiepNhanBenhNhan.ThoiGianTiepNhan = new Date();
                        _this.benhNhanId = _this.tiepNhanBenhNhan.BenhNhanId;
                        //
                        _this.getDanhSachGoiBenhNhan(_this.benhNhanId);
                        //
                        _this.setThongTinTaiKhoanBenhNhan(_this.tiepNhanBenhNhan.BenhNhanId);
                        if (_this.tiepNhanBenhNhan.TuNhap != true && _this.tiepNhanBenhNhan.CoBHYT) {
                            //this.isDisableNhapTayForUpdate = true;
                        }
                        _this.lichSuKCB = _this.tiepNhanBenhNhan.GridLichSuKCB;
                        _this.lichSuKiemTraTheBHYTGrid = _this.tiepNhanBenhNhan.GridLichSuKiemTraTheBHYT;
                        if (resultData.LoaiVoucher == null) {
                            _this.loaiVoucher = 0;
                        }
                        else {
                            _this.loaiVoucher = resultData.LoaiVoucher;
                        }
                        // thong tin BHYT
                        if (resultData.BHYTNgayHieuLuc != null && resultData.BHYTNgayHieuLuc != undefined) {
                            var ngayCoHieuLuc = new Date(resultData.BHYTNgayHieuLuc);
                            _this.tiepNhanBenhNhan.NgayCoHieuLucDisplay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].formatDate(ngayCoHieuLuc, "dd/mm/yyyy");
                            //console.log("getBenhNhan = ", ngayCoHieuLuc, this.tiepNhanBenhNhan.NgayCoHieuLucDisplay);
                        }
                        if (resultData.BHYTNgayHetHan != null && resultData.BHYTNgayHetHan != undefined) {
                            var ngayHetHan = new Date(resultData.BHYTNgayHetHan);
                            _this.tiepNhanBenhNhan.NgayHetHieuLucDisplay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].formatDate(ngayHetHan, "dd/mm/yyyy");
                        }
                        if (resultData.BHYTNgayDu5Nam != null && resultData.BHYTNgayDu5Nam != undefined) {
                            var ngayDu5Nam = new Date(resultData.BHYTNgayDu5Nam);
                            _this.tiepNhanBenhNhan.NgayDu5NamDisplay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].formatDate(ngayDu5Nam, "dd/mm/yyyy");
                        }
                        if (resultData.BHYTMaDKBD != null && resultData.BHYTMaDKBD != undefined) {
                            //this.setSoPhanTramHuongBHYT(resultData.BHYTMaSoThe)
                            //this.setTuyenKhamBenh(resultData.BHYTMaDKBD);
                            _this.setSoPhanTramHuongBHYTForThemChiDinh();
                            _this.apiService.post("TiepNhanBenhNhan/GetNoiDangKyBaoHiem?ma=" + resultData.BHYTMaDKBD).subscribe(function (resultData) {
                                _this.tiepNhanBenhNhan.NoiDangKyBHYT = resultData;
                            }, function () {
                                //return null;
                                //console.log("error")
                            });
                        }
                        // BHTN
                        //this.lstBHTN = resultData.BaoHiemTuNhans;
                        if (resultData.BaoHiemTuNhans != undefined && resultData.BaoHiemTuNhans != null) {
                            resultData.BaoHiemTuNhans.forEach(function (item) {
                                var model = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["ThemBaoHiemTuNhanGridVo"]();
                                model.Id = item.Id;
                                model.CongTyBaoHiemTuNhanId = item.BHTNCongTyBaoHiemId;
                                model.CongTyDisplay = item.CongTyDisplay;
                                model.DiaChi = item.BHTNDiaChi;
                                model.MaSoThe = item.BHTNMaSoThe;
                                model.SoDienThoai = item.BHTNSoDienThoai;
                                model.NgayHetHan = item.BHTNNgayHetHan;
                                if (item.BHTNNgayHetHan != null) {
                                    var dateNgayHetHan = new Date(model.NgayHetHan);
                                    model.NgayHetHanDisplay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].formatDate(dateNgayHetHan, "dd/mm/yyyy");
                                }
                                else {
                                    model.NgayHetHanDisplay = null;
                                }
                                model.NgayHieuLuc = item.BHTNNgayHieuLuc;
                                if (item.BHTNNgayHieuLuc != null) {
                                    var dateNgayHieuLuc = new Date(model.NgayHieuLuc);
                                    model.NgayHieuLucDisplay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].formatDate(dateNgayHieuLuc, "dd/mm/yyyy");
                                }
                                else {
                                    model.NgayHieuLucDisplay = null;
                                }
                                _this.lstBHTN.push(model);
                            });
                            _this.setValueForGridBHTN();
                        }
                        // BHTN
                        // this.isHaveBHYTUpdated = resultData.CoBHYT
                        //     //console.log("getBenhNhan", this.tiepNhanBenhNhan)
                        //     ;
                        _this.tiepNhanBenhNhan.BenhNhan.GioiTinhDisplay = resultData.BenhNhan.GioiTinh == 1 ? "Nam" : "Nữ";
                        //let ngayThangNamSinh = new Date();
                        //ngayThangNamSinh.setDate(resultData.BenhNhan.NgaySinh);
                        //ngayThangNamSinh.setMonth(resultData.BenhNhan.ThangSinh);
                        //ngayThangNamSinh.setFullYear(resultData.BenhNhan.NamSinh, resultData.BenhNhan.ThangSinh, resultData.BenhNhan.NgaySinh);
                        //this.tiepNhanBenhNhan.BenhNhan.NgayThangNamSinh = ngayThangNamSinh;
                        if (resultData.BenhNhan.NamSinh != null && resultData.BenhNhan.ThangSinh != null && resultData.BenhNhan.NgaySinh != null) {
                            var ngayThangNamSinh = new Date(resultData.BenhNhan.NgayThangNamSinh);
                            _this.getAge(ngayThangNamSinh, new Date);
                        }
                        //console.log("------------: ", this.tiepNhanBenhNhan)
                        if (_this.tiepNhanBenhNhan.BHYTMucHuong == null) {
                            _this.tiepNhanBenhNhan.IsCheckedBHYT = false;
                            //this.isHaveBHYTForTheFistLoad = false;
                        }
                        if (_this.tiepNhanBenhNhan.IsCheckedBHYT) {
                            var dateToCheck = new Date(_this.tiepNhanBenhNhan.BHYTNgayHetHan);
                            //console.log("dateToCheck ", this.tiepNhanBenhNhan.BHYTNgayHetHan, dateToCheck)
                            _this.checkOutOfDateBHYT(dateToCheck);
                        }
                        else {
                            _this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_21__["TinhTrangThe"].KhongXacDinh;
                        }
                        _this.tiepNhanBenhNhan.YeuCauKhacGrid = [];
                        //
                        _this.setDuocHuongBHYT(_this.tiepNhanBenhNhan.CoBHYT, _this.tiepNhanBenhNhan.LyDoVaoVien);
                        //Chi dinh dich vu
                        //this.setDataForDichVuKhac();
                        _this.setDataForTaiLieuDinhKem();
                        _this.refreshGrid();
                        _this.dialog.closeAll();
                        // if(this.tiepNhanBenhNhan.CoBHYT == true && this.tiepNhanBenhNhan.TuNhap != true && isCheckTheBHYT)
                        // {
                        //     this.kiemTraTheBHYTKhiTaoYCTNMoi();
                        // }
                        //Do quận huyện nó không bind do cơ chế chạy trước sau nên ta set lại cho comboxQuanHuyen này
                        //this.bindComboboxQuanHuyen(resultData);   
                        _this.xuLyKiemTraBenhNhanDuDieuKienTaoMoiYCTN();
                    }, function () {
                        _this.dialog.closeAll();
                        //console.log("error")
                    });
                };
                TiepNhanBenhNhanComponent.prototype.bindComboboxQuanHuyen = function (resultData) {
                    if (this.comboboxQuanHuyen != undefined && this.comboboxQuanHuyen != null) {
                        this.tiepNhanBenhNhan.TinhThanhId = resultData.TinhThanhId;
                        this.tiepNhanBenhNhan.QuanHuyenId = resultData.QuanHuyenId;
                        this.comboboxQuanHuyen.getDataForLookup();
                    }
                };
                TiepNhanBenhNhanComponent.prototype.keyEvent = function (event) {
                    //console.log("keyEvent = ", event);
                    if (event.keyCode == 81 && event.ctrlKey && this.isScanF1 != true) {
                        event.preventDefault();
                        this.QuetMaQRCodeClick();
                    }
                    else if (event.keyCode == 81 && event.ctrlKey && this.isScanF1 == true) {
                        event.preventDefault();
                    }
                    //f1 - CoBHYT
                    else if (event.keyCode == 112 && event.ctrlKey) {
                        //console.log("Ok");
                        this.coBHYTChange(true);
                        this.tiepNhanBenhNhan.CoBHYT = true;
                        event.preventDefault();
                    }
                    //f2 - TuNhap
                    else if (event.keyCode == 113 && event.ctrlKey) {
                        //console.log("Ok");
                        this.tuNhapChange(true);
                        this.tiepNhanBenhNhan.TuNhap = true;
                        event.preventDefault();
                    }
                    //f3 - Có giấy chuyển viện
                    else if (event.keyCode == 114 && event.ctrlKey) {
                        //console.log("Ok");
                        this.tiepNhanBenhNhan.DuocChuyenVien = true;
                        event.preventDefault();
                    }
                    //f5 - Có giấy miễn cùng chi trả
                    else if (event.keyCode == 116 && event.ctrlKey) {
                        //console.log("Ok");
                        this.tiepNhanBenhNhan.BHYTDuocMienCungChiTra = true;
                        event.preventDefault();
                    }
                    //f6 - Có miễn giảm
                    else if (event.keyCode == 117 && event.ctrlKey) {
                        //console.log("Ok");
                        this.CoUuDaiChange(true);
                        this.tiepNhanBenhNhan.DuocUuDai = true;
                        event.preventDefault();
                    }
                    //f7 - Có BHTN
                    else if (event.keyCode == 118 && event.ctrlKey) {
                        //console.log("Ok");
                        this.tiepNhanBenhNhan.CoBHTN = true;
                        event.preventDefault();
                    }
                    //f8 - Chỉ định dịch vụ
                    else if (event.keyCode == 119 && event.ctrlKey) {
                        this.tabStrip.selectTab(0);
                        this.onTabSelect(0);
                        event.preventDefault();
                    }
                    else if (event.keyCode == 120 && event.ctrlKey) {
                        this.tabStrip.selectTab(1);
                        this.onTabSelect(1);
                        event.preventDefault();
                    }
                    else if (event.keyCode == 121 && event.ctrlKey) {
                        this.tabStrip.selectTab(2);
                        this.onTabSelect(2);
                        event.preventDefault();
                    }
                    else if (event.keyCode == 122 && event.ctrlKey) {
                        this.tabStrip.selectTab(3);
                        this.onTabSelect(3);
                        event.preventDefault();
                    }
                    else if (event.keyCode == 123 && event.ctrlKey) {
                        this.tabStrip.selectTab(4);
                        this.onTabSelect(4);
                        event.preventDefault();
                    }
                    else if (event.keyCode == 83 && event.ctrlKey && !event.shiftKey) {
                        if (this.errMessageKhongChoPhepTaoMoiYCTN == null || this.errMessageKhongChoPhepTaoMoiYCTN == '') {
                            this.luuPhieu();
                        }
                        event.preventDefault();
                    }
                    else if (event.keyCode == 83 && event.ctrlKey && event.shiftKey) {
                        //console.log("-----Successfully---");
                        if (this.errMessageKhongChoPhepTaoMoiYCTN == null || this.errMessageKhongChoPhepTaoMoiYCTN == '') {
                            this.luuVaInPhieu();
                        }
                        event.preventDefault();
                    }
                    else if (event.keyCode == 27) {
                        this.huy();
                        event.preventDefault();
                    }
                };
                TiepNhanBenhNhanComponent.prototype.removeTaiLieu = function (data) {
                    //console.log("removeTaiLieu = ", data);
                    // this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans = this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans.filter(p => p.TenGuid != data.TenGuid
                    //     && p.Ten != data.Ten && p.LoaiHoSoYeuCauTiepNhanId != data.LoaiHoSoYeuCauTiepNhanId
                    //     && p.MoTa != data.MoTa);
                    this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans.splice(this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans.indexOf(data), 1);
                    this.setDataForTaiLieuDinhKem();
                };
                TiepNhanBenhNhanComponent.prototype.uploadTaiLieuDone = function ($event) {
                    this.themTaiLieu.TaiLieu = $event;
                    if (!this.cdRef.destroyed) {
                        this.cdRef.detectChanges();
                    }
                };
                TiepNhanBenhNhanComponent.prototype.clearThemTaiLieu = function () {
                    this.themTaiLieu = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["ThemTaiLieuDinhKem"]();
                };
                TiepNhanBenhNhanComponent.prototype.themTaiLieuButton = function () {
                    var _this = this;
                    // if(this.themTaiLieu.LoaiId != null && this.themTaiLieu.TaiLieu != null){
                    //     console.log(this.themTaiLieu);
                    this.validationErrors = null;
                    this.apiService.post("TiepNhanBenhNhan/GetNameLoaiTaiLieuDinhKem", this.themTaiLieu).subscribe(function (resultData) {
                        var taiLieuNew = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["HoSoYeuCauTiepNhanViewModel"]();
                        taiLieuNew.Ma = _this.themTaiLieu.TaiLieu.Ma;
                        taiLieuNew.Ten = _this.themTaiLieu.TaiLieu.Ten;
                        taiLieuNew.TenGuid = _this.themTaiLieu.TaiLieu.TenGuid;
                        taiLieuNew.MoTa = _this.themTaiLieu.MoTa;
                        taiLieuNew.DuongDan = _this.themTaiLieu.TaiLieu.DuongDan;
                        taiLieuNew.KichThuoc = _this.themTaiLieu.TaiLieu.KichThuoc;
                        taiLieuNew.LoaiHoSoYeuCauTiepNhanId = _this.themTaiLieu.LoaiId;
                        taiLieuNew.LoaiDisplay = resultData;
                        taiLieuNew.DuongDanTmp = _this.themTaiLieu.TaiLieu.DuongDanTmp;
                        taiLieuNew.AddNew = true;
                        _this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans.push(taiLieuNew);
                        _this.setDataForTaiLieuDinhKem();
                        _this.clearThemTaiLieu();
                    }, function (err) {
                        if (err != undefined && err.ValidationErrors != null) {
                            _this.validationErrors = err.ValidationErrors;
                        }
                        else if (err != undefined && err.Errors == null) {
                            //self.validationErrors.push({ "Message": err.Message });
                            _this.notificationService.showError(err.Message);
                        }
                    });
                    //}
                };
                TiepNhanBenhNhanComponent.prototype.viewTaiLieu = function (file) {
                    //console.log("viewTaiLieu = ", dataItem);
                    var duongDan = file.DuongDan;
                    if (file.AddNew) {
                        duongDan = file.DuongDanTmp;
                    }
                    var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpParams"]({
                        fromObject: {
                            tenGuid: file.TenGuid,
                            duongDan: duongDan,
                        }
                    });
                    // let response = await this.apiService.get<any>('TaiLieuDinhKem/GetTaiLieuUrl', params).toPromise();
                    this.apiService.get('TaiLieuDinhKem/GetTaiLieuUrl', params).subscribe(function (resp) {
                        if (resp) {
                            if (file.TenGuid.indexOf(".pdf") != -1 || file.TenGuid.indexOf(".PDF") != -1) {
                                var html = "<div class=\"showFile\">";
                                html += "<div class=\"overlay\"></div>";
                                html += "<div class=\"middle\">";
                                html += "<div class=\"inner\">";
                                html += "<span class=\"close\" onclick=\"$('.showFile').detach();\">X</span>";
                                html += "<iframe src='" + resp + "' style=\"width:770px; height:570px;\" frameborder=\"0\"></iframe>";
                                html += "</div>";
                                html += "</div>";
                                html += "</div>";
                                $(html).appendTo('app-main');
                            }
                            else {
                                var html = "<div class=\"showFile\">";
                                html += "<div class=\"overlay\"></div>";
                                html += "<div class=\"middle\">";
                                html += "<div class=\"inner\">";
                                html += "<span class=\"close\" onclick=\"$('.showFile').detach();\">X</span>";
                                html += "<img src='" + resp + "' alt='' style=\"max-width: 770px;max-height: 570px;\"/>";
                                html += "</div>";
                                html += "</div>";
                                html += "</div>";
                                $(html).appendTo('app-main');
                            }
                        }
                    });
                };
                TiepNhanBenhNhanComponent.prototype.setDataForTaiLieuDinhKem = function () {
                    //console.log("abc = ", this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans.length);
                    this.gridDataTaiLieuDinhKem = {
                        data: this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans,
                        total: this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans.length
                    };
                };
                TiepNhanBenhNhanComponent.prototype.clearThongTinTaiKhoanBenhNhan = function () {
                    this.thongTinTaiKhoanBenhNhan = null;
                };
                TiepNhanBenhNhanComponent.prototype.getSoTienBHYTSeThanhToan = function () {
                    var _this = this;
                    this.apiService.get("TiepNhanBenhNhan/GetSoTienBHYTSeThanhToan").subscribe(function (resultData) {
                        _this.soTienBHYTSeThanhToan = resultData;
                        //console.log("getSoTienBHYTSeThanhToan = ", this.soTienBHYTSeThanhToan);
                    });
                };
                TiepNhanBenhNhanComponent.prototype.CoUuDaiChange = function ($event) {
                    //console.log("CoUuDaiChange = ", $event)
                    if (this.tiepNhanBenhNhan.DoiTuongUuDaiId != null) {
                        if ($event == false) {
                            this.removeDoiTuongMienGiamForGirdChiDinhDichVu();
                        }
                        else {
                            this.addDoiTuongMienGiamForGridChiDinhDichVu();
                        }
                    }
                };
                TiepNhanBenhNhanComponent.prototype.addBHYTForGridChiDinhDichVu = function () {
                    //khac
                    for (var index = 0; index < this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
                        var item = this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
                        if (item.Nhom == "DỊCH VỤ KHÁM BỆNH" && item.GiaBHYT != 0) {
                            item.BHYTThanhToan = item.GiaBHYT;
                            item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
                            item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
                            item.DuocHuongBHYT = true;
                        }
                    }
                    this.setGiaBHYT();
                    this.setDataForDichVuKhac();
                    this.refreshGrid();
                };
                TiepNhanBenhNhanComponent.prototype.removeBHYTForGridChiDinhDichVu = function () {
                    //kham benh
                    // for (let index = 0; index < this.tiepNhanBenhNhan.YeuCauKhamBenhGrid.length; index++) {
                    //     const item = this.tiepNhanBenhNhan.YeuCauKhamBenhGrid[index];
                    //     if (item.DuocHuongBHYT == true && item.BHYTThanhToan != 0) {
                    //         item.BHYTThanhToan = 0;
                    //         item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
                    //         item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
                    //     }
                    // }
                    //dich vu ky thuat
                    //khac
                    for (var index = 0; index < this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
                        var item = this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
                        if (item.Nhom == "DỊCH VỤ KHÁM BỆNH" && item.BHYTThanhToan != 0) {
                            item.BHYTThanhToan = 0;
                            item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
                            item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
                            item.DuocHuongBHYT = false;
                        }
                    }
                    this.setDataForDichVuKhac();
                    this.setDataForDichVuKhamBenh();
                    this.refreshGrid();
                };
                TiepNhanBenhNhanComponent.prototype.removeDoiTuongMienGiamForGirdChiDinhDichVu = function () {
                    //kham benh
                    // for (let index = 0; index < this.tiepNhanBenhNhan.YeuCauKhamBenhGrid.length; index++) {
                    //     const item = this.tiepNhanBenhNhan.YeuCauKhamBenhGrid[index];
                    //     if (item.SoTienMG != 0 && item.TLMG != 0) {
                    //         item.TLMG = 0
                    //         item.SoTienMG = 0;
                    //         item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
                    //     }
                    // }
                    // //dich vu ky thuat
                    // for (let index = 0; index < this.tiepNhanBenhNhan.YeuCauKyThuatGrid.length; index++) {
                    //     const item = this.tiepNhanBenhNhan.YeuCauKyThuatGrid[index];
                    //     if (item.SoTienMG != 0 && item.TLMG != 0) {
                    //         item.TLMG = 0
                    //         item.SoTienMG = 0;
                    //         item.BnThanhToan = item.ThanhTien - item.SoTienMG;
                    //         //console.log(item.SoTienMG, item.BnThanhToan, item.BHYTThanhToan, item.ThanhTien );
                    //     }
                    // }
                    //khac
                    for (var index = 0; index < this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
                        var item = this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
                        if (item.SoTienMG != 0 && item.TLMG != 0 && item.IsGoiCoChietKhau != true) {
                            item.TLMG = 0;
                            item.TLMGDisplay = "0 %";
                            item.SoTienMG = 0;
                            item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
                        }
                    }
                    this.setDataForDichVuKhac();
                    //this.setDataForDichVuKhamBenh();
                    //this.setDataForDichVuKyThuat();
                    this.refreshGrid();
                };
                TiepNhanBenhNhanComponent.prototype.addDoiTuongMienGiamForGridChiDinhDichVu = function () {
                    var _this = this;
                    var _loop_3 = function (index) {
                        var item = this_2.tiepNhanBenhNhan.YeuCauKhacGrid[index];
                        if (item.IsGoiCoChietKhau != true) {
                            var url = void 0;
                            if (item.Nhom == 'DỊCH VỤ KHÁM BỆNH') {
                                url = "TiepNhanBenhNhan/GetTyLeMienGiamKhamBenh/";
                            }
                            else if (item.Nhom == 'DỊCH VỤ KỸ THUẬT') {
                                url = "TiepNhanBenhNhan/GetTyLeMienGiamKyThuat/";
                            }
                            if (url != undefined) {
                                this_2.apiService.post(url + "?doiTuongId="
                                    + this_2.tiepNhanBenhNhan.DoiTuongUuDaiId + "&maDichVuId=" + item.MaDichVuId).subscribe(function (resultData) {
                                    if (resultData != undefined && resultData != null && resultData != 0) {
                                        item.TLMG = resultData;
                                        item.TLMGDisplay = resultData + " %";
                                        item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * resultData / 100;
                                        item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
                                    }
                                    else {
                                        item.TLMG = 0;
                                        item.TLMGDisplay = "0 %";
                                        item.SoTienMG = 0;
                                        item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
                                    }
                                    _this.setDataForDichVuKhac();
                                    _this.refreshGrid();
                                }, function () {
                                });
                            }
                        }
                    };
                    var this_2 = this;
                    //khac
                    for (var index = 0; index < this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
                        _loop_3(index);
                    }
                };
                TiepNhanBenhNhanComponent.prototype.setDuocHuongBHYT = function (CoBHYT, LyDoVaoVien) {
                    if (CoBHYT === void 0) { CoBHYT = false; }
                    if (LyDoVaoVien === void 0) { LyDoVaoVien = 1; }
                    var dateNow = new Date((new Date()).toDateString());
                    // console.log("setDuocHuongBHYT = ", CoBHYT, LyDoVaoVien
                    // , this.tiepNhanBenhNhan.BHYTNgayHieuLuc, this.tiepNhanBenhNhan.BHYTNgayHieuLuc < dateNow, this.tiepNhanBenhNhan.BHYTNgayHetHan);
                    //console.log("setDuocHuongBHYT = ", this.tiepNhanBenhNhan.BHYTNgayHetHan >= dateNow, this.tiepNhanBe nhNhan.BHYTNgayHetHan, dateNow.getDate)
                    // dùng để kiểm tra hạn dùng của thẻ BHYT
                    var compareDate = false;
                    if (this.tiepNhanBenhNhan.BHYTNgayHetHan != undefined && this.tiepNhanBenhNhan.BHYTNgayHetHan != null) {
                        var now = new Date();
                        var ngay = now.getDate();
                        var thang = now.getMonth();
                        var nam = now.getFullYear();
                        var dateNowFormat = new Date(nam, thang, ngay);
                        var ngayDenHanTheBHYTTemp = this.tiepNhanBenhNhan.BHYTNgayHetHan;
                        var type = typeof ngayDenHanTheBHYTTemp;
                        if (type == "string") {
                            ngayDenHanTheBHYTTemp = new Date(this.tiepNhanBenhNhan.BHYTNgayHetHan);
                        }
                        var ngayDenHanTheBHYT = ngayDenHanTheBHYTTemp.getDate();
                        var thangDenHanTheBHYT = ngayDenHanTheBHYTTemp.getMonth();
                        var namDenHanTheBHYT = ngayDenHanTheBHYTTemp.getFullYear();
                        var ngayDenHanTheBHYTFormat = new Date(namDenHanTheBHYT, thangDenHanTheBHYT, ngayDenHanTheBHYT);
                        compareDate = ngayDenHanTheBHYTFormat >= dateNowFormat;
                    }
                    if (CoBHYT && LyDoVaoVien == 1 && compareDate) { //&& this.tiepNhanBenhNhan.BHYTNgayHetHan >= dateNow) 
                        this.themChiDinhDichVuModel.DuocHuongBHYT = true;
                        this.themChiDinhGoiModel.DuocHuongBHYT = true;
                        this.duocHuongBHYT = true;
                        this.themChiDinhDichVuModel.BHYTMucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
                        this.themChiDinhGoiModel.BHYTMucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
                        this.addBHYTForGridChiDinhDichVu();
                    }
                    else {
                        this.themChiDinhDichVuModel.DuocHuongBHYT = false;
                        this.themChiDinhGoiModel.DuocHuongBHYT = false;
                        this.duocHuongBHYT = false;
                        this.themChiDinhDichVuModel.BHYTMucHuong = null;
                        this.themChiDinhGoiModel.BHYTMucHuong = null;
                        this.removeBHYTForGridChiDinhDichVu();
                    }
                    if (!this.enableDuocHuongBHYT) {
                        this.themChiDinhDichVuModel.DuocHuongBHYT = false;
                        this.themChiDinhGoiModel.DuocHuongBHYT = false;
                    }
                    //console.log("setDuocHuongBHYT = ", this.duocHuongBHYT)
                };
                TiepNhanBenhNhanComponent.prototype.setDonGiaThanhTienGrid = function (item) {
                    item.ThanhTien = item.DonGia * item.SoLuong;
                    //Chi tinh trong truong hop khong co bhyt
                    item.BnThanhToan = item.ThanhTien;
                };
                TiepNhanBenhNhanComponent.prototype.setGiaBHYT = function () {
                    var _this = this;
                    //console.log("setGiaBHYT = ", this.tiepNhanBenhNhan.YeuCauKhacGrid);
                    //this.setGiaBHYTSoLanKham();
                    var soLanKham = 1;
                    var tyLeLan1 = 0;
                    var tyLeLan2 = 0;
                    var tyLeLan3 = 0;
                    var tyLeLan4 = 0;
                    var tyLeLan5 = 0;
                    ;
                    this.apiService.get("TiepNhanBenhNhan/GetTyLeSoLanHuongBHYTDichVu").subscribe(function (resultData) {
                        if (resultData != null && resultData != undefined) {
                            //console.log("setGiaBHYTSoLanKham = ", resultData, resultData[0],  resultData[1]);
                            tyLeLan1 = resultData[0];
                            tyLeLan2 = resultData[1];
                            tyLeLan3 = resultData[2];
                            tyLeLan4 = resultData[3];
                            tyLeLan5 = resultData[4];
                            //console.log("Trươc = ", this.tiepNhanBenhNhan.YeuCauKhacGrid);
                            if (_this.tiepNhanBenhNhan.YeuCauKhacGrid != null && _this.tiepNhanBenhNhan.YeuCauKhacGrid != undefined) {
                                for (var index = 0; index < _this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
                                    //console.log("Solan = ", soLanKham, " , TyLe = ",tyLeLan1, tyLeLan2, tyLeLan3, tyLeLan4, tyLeLan5);
                                    var item = _this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
                                    //console.log("index = ", item, soLanKham);
                                    _this.setDonGiaThanhTienGrid(item);
                                    //
                                    if (item.DuocHuongBHYT == true && item.GiaBHYT != 0) {
                                        if (soLanKham == 1) {
                                            item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100 * tyLeLan1 / 100;
                                            soLanKham = soLanKham + 1;
                                        }
                                        else if (soLanKham == 2) {
                                            item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100 * tyLeLan2 / 100;
                                            soLanKham = soLanKham + 1;
                                        }
                                        else if (soLanKham == 3) {
                                            item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100 * tyLeLan3 / 100;
                                            soLanKham = soLanKham + 1;
                                        }
                                        else if (soLanKham == 4) {
                                            item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100 * tyLeLan4 / 100;
                                            soLanKham = soLanKham + 1;
                                        }
                                        else if (soLanKham == 5) {
                                            item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100 * tyLeLan5 / 100;
                                            soLanKham = soLanKham + 1;
                                        }
                                        else {
                                            item.BHYTThanhToan = item.GiaBHYT * item.TiLeBaoHiemThanhToan / 100 * 0 / 100;
                                            soLanKham = soLanKham + 1;
                                        }
                                        item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
                                        item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
                                    }
                                }
                            }
                            //this.setDataForDichVuKhac();
                            //console.log("Sau = ", this.tiepNhanBenhNhan.YeuCauKhacGrid);
                        }
                        var bhytKhacKhamBenh = _this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(function (o) { return o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null; })
                            .reduce(function (sum, item) { return sum + item.BHYTThanhToan; }, 0);
                        if (bhytKhacKhamBenh != 0 && bhytKhacKhamBenh < _this.soTienBHYTSeThanhToan) {
                            for (var index = 0; index < _this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
                                var item = _this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
                                if (item.DuocHuongBHYT == true && item.BHYTThanhToan != 0 && _this.tiepNhanBenhNhan.BHYTMucHuong != null) {
                                    item.BHYTThanhToan = item.BHYTThanhToan;
                                    item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
                                    item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
                                }
                            }
                        }
                        else if (bhytKhacKhamBenh != 0 && bhytKhacKhamBenh >= _this.soTienBHYTSeThanhToan) {
                            for (var index = 0; index < _this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
                                var item = _this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
                                if (item.DuocHuongBHYT == true && item.BHYTThanhToan != 0 && _this.tiepNhanBenhNhan.BHYTMucHuong != null) {
                                    item.BHYTThanhToan = item.BHYTThanhToan * _this.tiepNhanBenhNhan.BHYTMucHuong / 100;
                                    item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
                                    item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
                                }
                            }
                        }
                        //console.log("tiepNhanBenhNhan.BHYTMucHuong = ", this.tiepNhanBenhNhan.BHYTMucHuong);
                        _this.setDataForDichVuKhac();
                        _this.refreshGrid();
                    });
                };
                TiepNhanBenhNhanComponent.prototype.setGiaBHYTSoLanKham = function () {
                };
                TiepNhanBenhNhanComponent.prototype.getListTenTrieuChungKham = function () {
                    var _this = this;
                    this.apiService.get("TiepNhanBenhNhan/GetListTenTrieuChungKhamAsync").subscribe(function (resultData) {
                        _this.TrieuChungTiepNhanResource = resultData;
                        //this.getDefaultDataForLyDoTiepNhan();
                    });
                };
                TiepNhanBenhNhanComponent.prototype.getDefaultDataForLyDoTiepNhan = function () {
                    var _this = this;
                    this.apiService.get('TiepNhanBenhNhan/GetLyDoTiepNhanDefaultData').subscribe(function (result) {
                        _this.tiepNhanBenhNhan.LyDoTiepNhanId = result.Result.Id;
                        _this.tiepNhanBenhNhan.LyDoTiepNhanText = result.Result.Ten;
                    });
                };
                TiepNhanBenhNhanComponent.prototype.getDefaultDataTNBN = function () {
                    var _this = this;
                    this.apiService.get('TiepNhanBenhNhan/GetDefaultDataTNBN').subscribe(function (result) {
                        if (result != undefined) {
                            if (result.DanTocId != 0 && result.DanTocId != null) {
                                _this.tiepNhanBenhNhan.DanTocId = result.DanTocId;
                            }
                            if (result.HinhThucDenId != 0 && result.HinhThucDenId != null) {
                                _this.tiepNhanBenhNhan.HinhThucDenId = result.HinhThucDenId;
                            }
                            if (result.LyDoTiepNhanId != 0 && result.LyDoTiepNhanId != null) {
                                _this.tiepNhanBenhNhan.LyDoTiepNhanId = result.LyDoTiepNhanId;
                            }
                            if (result.QuocTichId != 0 && result.QuocTichId != null) {
                                _this.tiepNhanBenhNhan.QuocTichId = result.QuocTichId;
                            }
                            if (result.TinhThanhPhoId != 0 && result.TinhThanhPhoId != null) {
                                _this.tiepNhanBenhNhan.TinhThanhId = result.TinhThanhPhoId;
                            }
                        }
                    });
                };
                // click(){
                //     this.tiepNhanBenhNhan.LyDoTiepNhanId = 27
                // }
                TiepNhanBenhNhanComponent.prototype.refreshGrid = function () {
                    if (!this.cdRef.destroyed) {
                        this.cdRef.detectChanges();
                    }
                    if (this.gridChildKhamBenh != undefined) {
                        this.gridChildKhamBenh.setDataSource();
                    }
                    if (this.gridChildBHTN != undefined) {
                        this.gridChildBHTN.setDataSource();
                    }
                    if (this.gridChildCoChietKhau != undefined) {
                        this.gridChildCoChietKhau.setDataSource();
                    }
                    //console.log("grid ko chiet khau ", this.gridChildKhongChietKhau)
                    if (this.gridChildKhongChietKhau != undefined) {
                        this.gridChildKhongChietKhau.setDataSource();
                    }
                    if (this.gridChildKyThuat != undefined) {
                        this.gridChildKyThuat.setDataSource();
                    }
                    if (this.gridTaiLieuDinhKem != undefined) {
                        this.gridTaiLieuDinhKem.setDataSource();
                    }
                };
                TiepNhanBenhNhanComponent.prototype.setDefaultData = function () {
                    this.isDungTuyenDisplay = null;
                    this.isDungTuyen = false;
                    this.isSearchQRCodeEnable = true;
                    this.soTuoiDisplay = null;
                    this.hoTenDaTimKiem = null;
                    this.maSoTheDaTimKiem = null;
                    this.ngaySinhDaTimKiem = null;
                    this.soPhanTramHuongBHYT = null;
                    this.totalBenhNhan = 0;
                    this.lstBenhNhan = new Array();
                    this.modelTimKiemBenhNhan = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["TimKiemBenhNhanGridVo"]();
                    this.isOutOfDate = false;
                };
                TiepNhanBenhNhanComponent.prototype.ngAfterContentInit = function () {
                    var self = this;
                };
                TiepNhanBenhNhanComponent.prototype.changeQR = function ($event) {
                    if ($event != null) {
                        this.modelQRCode = $event;
                        this.setValueBHYT(this.modelQRCode);
                    }
                    else {
                    }
                    this.isScanF1 = false;
                    //console.log("changeQR = ", $event);
                };
                TiepNhanBenhNhanComponent.prototype.checkOutOfDateBHYT = function (date) {
                    var _this = this;
                    //console.log("checkOutOfDateBHYT ");
                    var dateNow = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
                    if (date.getTime() < dateNow.getTime()) {
                        this.isActivePopup = true;
                        this.isOutOfDate = true;
                        this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_21__["TinhTrangThe"].HetHieuLuc;
                        //this.notificationService.showError("Thẻ bảo hiểm này đã hết hiệu lực, bạn phải chuyển qua khám nhân dân");
                        var dialogRef = this.dialog.open(_tiep_nhan_benh_nhan_popup_het_hieu_luc_tiep_nhan_benh_nhan_popup_het_hieu_luc_component__WEBPACK_IMPORTED_MODULE_28__["TiepNhanBenhNhanPopupHetHieuLucComponent"], {
                            disableClose: true,
                            width: '700px',
                            height: '300px',
                            data: this.tiepNhanBenhNhan,
                        });
                        dialogRef.afterClosed().subscribe(function (result) {
                            //console.log("close = ", result);
                            //this.clearData();
                            _this.isActivePopup = false;
                            if (result == 1) {
                                _this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_21__["TinhTrangThe"].HetHieuLuc;
                                _this.clearData();
                            }
                            else if (result == 2) {
                                _this.tiepNhanBenhNhan.IsCheckedBHYT = null;
                                _this.tiepNhanBenhNhan.CoBHYT = true;
                                _this.tiepNhanBenhNhan.TuNhap = true;
                            }
                            else {
                                _this.tiepNhanBenhNhan.CoBHYT = false;
                                _this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_21__["TinhTrangThe"].HetHieuLuc;
                            }
                        });
                    }
                    else {
                        this.isOutOfDate = false;
                        this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_21__["TinhTrangThe"].ConHieuLuc;
                    }
                    this.tiepNhanBenhNhan.isOutOfDate = this.isOutOfDate;
                    //console.log(date, dateNow);
                    //console.log("checkOutOfDateBHYT = ", date.getTime(), " ---- ",  dateNow.getTime(), " ---- ", this.isOutOfDate)
                };
                TiepNhanBenhNhanComponent.prototype.setDiaChiBHYTForModel = function (diaChi) {
                    var _this = this;
                    var self = this;
                    var coDiaChi = self.kiemTraDiaChiDaCo(); // BVHD-3768
                    var coDiaChiGiamHo = self.kiemTraDiaChiDaCo(true); // BVHD-3768
                    if ((diaChi == undefined || diaChi == null || diaChi == '')) // && !coDiaChi) {
                     {
                        if (!coDiaChi) {
                            this.tiepNhanBenhNhan.TinhThanhId = null;
                            this.tiepNhanBenhNhan.QuanHuyenId = null;
                            this.tiepNhanBenhNhan.PhuongXaId = null;
                            this.tiepNhanBenhNhan.DiaChi = null;
                        }
                        return;
                    }
                    var lstDiaChi = diaChi.split(",");
                    if ((lstDiaChi.length < 3)) // && !coDiaChi) {
                     {
                        if (!coDiaChi) {
                            this.tiepNhanBenhNhan.TinhThanhId = null;
                            this.tiepNhanBenhNhan.QuanHuyenId = null;
                            this.tiepNhanBenhNhan.PhuongXaId = null;
                            this.tiepNhanBenhNhan.DiaChi = null;
                        }
                        return;
                    }
                    var tinhThanhPho = lstDiaChi[lstDiaChi.length - 1].trim();
                    var quanHuyen = lstDiaChi[lstDiaChi.length - 2].trim();
                    var phuongXa = lstDiaChi[lstDiaChi.length - 3].trim();
                    var soNha = null;
                    if (lstDiaChi.length >= 4) {
                        var index = diaChi.indexOf(lstDiaChi[lstDiaChi.length - 3]);
                        soNha = diaChi.slice(0, index - 1);
                    }
                    var model = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["DiaChiBHYT"]();
                    model.TinhThanh = tinhThanhPho;
                    model.QuanHuyen = quanHuyen;
                    model.PhuongXa = phuongXa;
                    this.apiService.post("TiepNhanBenhNhan/GetDiaChiBHYT", model).subscribe(function (resultData) {
                        //console.log("DiaChiBHYT = ", resultData);
                        if (!coDiaChi) {
                            _this.tiepNhanBenhNhan.TinhThanhId = null;
                            _this.tiepNhanBenhNhan.QuanHuyenId = null;
                            _this.tiepNhanBenhNhan.PhuongXaId = null;
                            _this.tiepNhanBenhNhan.DiaChi = null;
                        }
                        var self = _this;
                        setTimeout(function () {
                            if (!coDiaChi) {
                                self.tiepNhanBenhNhan.TinhThanhId = resultData.TinhThanhId;
                                self.tiepNhanBenhNhan.QuanHuyenId = resultData.QuanHuyenId;
                                self.tiepNhanBenhNhan.PhuongXaId = resultData.PhuongXaId;
                                self.tiepNhanBenhNhan.DiaChi = soNha;
                            }
                            if (self.under6yearsold && !coDiaChiGiamHo) {
                                self.cloneDiaChiNguoiGiamHo();
                            }
                        }, 600);
                        //this.comboboxPhuongXa;
                        // if(this.comboboxPhuongXa != null && this.comboboxPhuongXa != undefined){
                        //     this.comboboxPhuongXa.queryInfo.ParameterDependencies = "{tinhThanh:"+ resultData.QuanHuyenId +"}";
                        // }
                        // if(this.comboboxQuanHuyen != null && this.comboboxQuanHuyen != undefined){
                        //     this.comboboxQuanHuyen.queryInfo.ParameterDependencies = "{quanHuyen:"+ resultData.TinhThanhId +"}";
                        // }
                        // this.comboboxPhuongXa.getDataForLookup();
                        // this.comboboxQuanHuyen.getDataForLookup();
                    }, function () {
                        //return null;
                        //console.log("error")
                    });
                };
                TiepNhanBenhNhanComponent.prototype.kiemTraDiaChiDaCo = function (laGiamHo) {
                    if (laGiamHo === void 0) { laGiamHo = false; }
                    if (laGiamHo) {
                        return this.tiepNhanBenhNhan.NguoiLienHeTinhThanhId || this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId || this.tiepNhanBenhNhan.NguoiLienHePhuongXaId || this.tiepNhanBenhNhan.NguoiLienHeDiaChi;
                    }
                    else {
                        return this.tiepNhanBenhNhan.TinhThanhId || this.tiepNhanBenhNhan.QuanHuyenId || this.tiepNhanBenhNhan.PhuongXaId || this.tiepNhanBenhNhan.DiaChi;
                    }
                };
                TiepNhanBenhNhanComponent.prototype.setValueBHYT = function (model) {
                    var _this = this;
                    //console.log("setValueBHYT = ", model, this.isSetValue);
                    if (model != null && model.maSoBHXH == null && this.isSetValue == false && model != undefined || this.isActivePopup == true)
                        return;
                    this.isSetValue = true;
                    var STT = 1;
                    this.lichSuKCB = new Array();
                    if (model.dsLichSuKCB2018 != null && model.dsLichSuKCB2018 != undefined) {
                        model.dsLichSuKCB2018.forEach(function (element) {
                            var childModel = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["GridLichSuKCB"]();
                            childModel.STT = STT;
                            childModel.MaTheBHYT = model.maThe;
                            childModel.HoVaTen = model.hoTen;
                            childModel.NgayVaoVien = element.ngayVaoDisplay;
                            childModel.NgayRaVien = element.ngayRaDisplay;
                            childModel.CoSoKCB = element.coSoKCB;
                            childModel.MaCoSoKCB = element.maCSKCB;
                            childModel.KetQuaDieuTri = element.kqDieuTriDisplay;
                            childModel.KetQuaDieuTriNumber = +element.kqDieuTri;
                            childModel.LyDoVaoVien = element.lyDoVVDisplay;
                            childModel.LyDoVaoVienNumber = +element.lyDoVV;
                            childModel.TinhTrangRaVien = element.tinhTrangDisplay;
                            childModel.TinhTrangRaVienNumber = +element.tinhTrang;
                            childModel.NgayVaoDateTime = element.ngayVaoDateTime;
                            childModel.NgayRaDateTime = element.ngayRaDateTime;
                            _this.lichSuKCB.push(childModel);
                            STT = STT + 1;
                        });
                        this.tiepNhanBenhNhan.GridLichSuKCB = this.lichSuKCB;
                    }
                    //
                    var STT2 = 1;
                    this.lichSuKiemTraTheBHYTGrid = new Array();
                    if (model.dsLichSuKT2018 != null && model.dsLichSuKT2018 != undefined) {
                        model.dsLichSuKT2018.forEach(function (element) {
                            var childModel = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["GridLichSuKiemTraTheBHYT"]();
                            childModel.STT = STT2;
                            childModel.UserKiemTra = element.userKT;
                            childModel.ThoiGianKiemTra = element.thoiGianKTDisplay;
                            childModel.thoiGianKTDateTime = element.thoiGianKTDateTime;
                            childModel.TenCSKCB = element.tenCSKCB;
                            childModel.MaCSKCB = element.maCSKCB;
                            childModel.NoiDungThongBao = element.thongBao;
                            _this.lichSuKiemTraTheBHYTGrid.push(childModel);
                            STT2 = STT2 + 1;
                        });
                        this.tiepNhanBenhNhan.GridLichSuKiemTraTheBHYT = this.lichSuKiemTraTheBHYTGrid;
                    }
                    //console.log("setValueBHYT = ", model)
                    this.tiepNhanBenhNhan.BHYTMaSoThe = model.maThe;
                    //set muc do huong quyen loi bao hiem
                    var maTheArray = model.maThe.split("");
                    if (maTheArray[2] == '1') {
                        this.soPhanTramHuongBHYT = 100;
                    }
                    else if (maTheArray[2] == '2') {
                        this.soPhanTramHuongBHYT = 100;
                    }
                    else if (maTheArray[2] == '3') {
                        this.soPhanTramHuongBHYT = 95;
                    }
                    else if (maTheArray[2] == '4') {
                        this.soPhanTramHuongBHYT = 80;
                    }
                    else {
                        this.soPhanTramHuongBHYT = 100;
                    }
                    this.tiepNhanBenhNhan.BHYTMucHuong = this.soPhanTramHuongBHYT;
                    this.themChiDinhDichVuModel.BHYTMucHuong = this.soPhanTramHuongBHYT;
                    this.themChiDinhGoiModel.BHYTMucHuong = this.soPhanTramHuongBHYT;
                    //
                    this.tiepNhanBenhNhan.HoTen = model.hoTen;
                    if (model.ngaySinh.indexOf("/") == -1) {
                        this.tiepNhanBenhNhan.NamSinh = +model.ngaySinh;
                    }
                    else {
                        var dateParts = model.ngaySinh.split("/");
                        if (dateParts.length == 3) {
                            this.tiepNhanBenhNhan.NgayThangNamSinh = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
                            this.tiepNhanBenhNhan.NamSinh = this.tiepNhanBenhNhan.NgayThangNamSinh.getFullYear();
                            this.tiepNhanBenhNhan.NgayThangNamSinhDisplay = model.ngaySinh;
                        }
                    }
                    this.tiepNhanBenhNhan.GioiTinh = model.gioiTinh == 'Nam' ? src_app_shared_enum_common_type_enums__WEBPACK_IMPORTED_MODULE_4__["GioiTinh"].Nam : src_app_shared_enum_common_type_enums__WEBPACK_IMPORTED_MODULE_4__["GioiTinh"].Nu;
                    this.tiepNhanBenhNhan.GioiTinhDisplay = model.gioiTinh;
                    //this.tiepNhanBenhNhan.NoiDangKyBHYT = this.getBenhVienByMa(model.maDKBD);
                    this.apiService.post("TiepNhanBenhNhan/GetNoiDangKyBaoHiem?ma=" + model.maDKBD).subscribe(function (resultData) {
                        _this.tiepNhanBenhNhan.NoiDangKyBHYT = resultData;
                    }, function () {
                        //return null;
                        //console.log("error")
                    });
                    // this.apiService.post<any>("TiepNhanBenhNhan/GetThongTinTaiKhoanBenhNhan?maSoBHYT=" + model.maThe).subscribe(
                    //     resultData => {
                    //         this.thongTinTaiKhoanBenhNhan = resultData;
                    //     },
                    //     () => {
                    //         //return null;
                    //         //console.log("error")
                    //     });
                    this.checkTNBNToDay(model.maThe);
                    this.apiService.post("TiepNhanBenhNhan/GetThongTinBenhNhan?maSoBHYT=" + model.maThe + "&benhNhanId=" + this.benhNhanId).subscribe(function (resultData) {
                        if (resultData != null) {
                            //this.tiepNhanBenhNhan.DiaChi = resultData.DiaChi; //BVHD-3768
                            _this.tiepNhanBenhNhan.SoDienThoai = resultData.SoDienThoai;
                            _this.tiepNhanBenhNhan.SoChungMinhThu = resultData.SoChungMinhThu;
                            _this.tiepNhanBenhNhan.Email = resultData.Email;
                            _this.tiepNhanBenhNhan.NgheNghiepId = resultData.NgheNghiepId;
                            _this.tiepNhanBenhNhan.SoDienThoai = resultData.SoDienThoai;
                            _this.tiepNhanBenhNhan.GioiTinh = resultData.GioiTinh;
                            _this.tiepNhanBenhNhan.NoiLamViec = resultData.NoiLamViec;
                            _this.tiepNhanBenhNhan.QuocTichId = resultData.QuocTichId;
                        }
                    }, function () {
                        //return null;
                        //console.log("error")
                    });
                    this.apiService.post("TiepNhanBenhNhan/GetIdBenhNhan?maSoBHYT=" + model.maThe + "&benhNhanId=" + this.benhNhanId).subscribe(function (resultData) {
                        if (resultData) {
                            _this.benhNhanId = resultData;
                            _this.getDanhSachGoiBenhNhan(_this.benhNhanId);
                        }
                    }, function () {
                        //return null;
                        //console.log("error")
                    });
                    this.tiepNhanBenhNhan.BHYTDiaChi = model.diaChi;
                    this.setDiaChiBHYTForModel(model.diaChi);
                    //popup
                    this.tiepNhanBenhNhan.MaDKBD = model.maDKBD;
                    this.tiepNhanBenhNhan.BHYTMaDKBD = model.maDKBD;
                    this.tiepNhanBenhNhan.NgayCoHieuLucDisplay = model.gtTheTu;
                    var dateParts2 = model.gtTheTu.split("/");
                    this.tiepNhanBenhNhan.BHYTNgayHieuLuc = new Date(+dateParts2[2], +dateParts2[1] - 1, +dateParts2[0]);
                    if (model.gtTheDen != undefined && model.gtTheDen != null) {
                        this.tiepNhanBenhNhan.NgayHetHieuLucDisplay = model.gtTheDen;
                        var dateParts3 = model.gtTheDen.split("/");
                        this.tiepNhanBenhNhan.BHYTNgayHetHan = new Date(+dateParts3[2], +dateParts3[1] - 1, +dateParts3[0]);
                    }
                    this.tiepNhanBenhNhan.NgayDu5NamDisplay = model.ngayDu5Nam;
                    this.tiepNhanBenhNhan.DiaChiDisplay = model.diaChi;
                    this.tiepNhanBenhNhan.cqBHXH = model.cqBHXH;
                    this.tiepNhanBenhNhan.BHYTCoQuanBHXH = model.cqBHXH;
                    if (model.ngayDu5Nam != null && model.ngayDu5Nam != undefined && model.ngayDu5Nam != "") {
                        var dateParts4 = model.ngayDu5Nam.split("/");
                        this.tiepNhanBenhNhan.BHYTNgayDu5Nam = new Date(+dateParts4[2], +dateParts4[1] - 1, +dateParts4[0]);
                    }
                    //
                    this.apiService.post("TiepNhanBenhNhan/IsDungTuyen?maBenhVien=" + model.maDKBD).subscribe(function (resultData) {
                        //console.log("IsDungTuyen",resultData)
                        if (resultData == true) {
                            _this.isDungTuyenDisplay = "Đúng tuyến";
                            _this.isDungTuyen = true;
                            _this.tiepNhanBenhNhan.LyDoVaoVien = 1;
                        }
                        else {
                            _this.isDungTuyenDisplay = "Đúng tuyến";
                            _this.isDungTuyen = true;
                            _this.tiepNhanBenhNhan.LyDoVaoVien = 1;
                        }
                        _this.setDuocHuongBHYT(_this.tiepNhanBenhNhan.CoBHYT, _this.tiepNhanBenhNhan.LyDoVaoVien);
                    }, function () {
                        //console.log("error")
                    });
                    //
                    //test
                    //model.isConnectSuccessfully = false;
                    //
                    if (model.isConnectSuccessfully == false) {
                        //console.log("model.isConnectSuccessfully");
                        this.tiepNhanBenhNhan.IsCheckedBHYT = false;
                        this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_21__["TinhTrangThe"].KhongXacDinh;
                        var dialogRef = this.dialog.open(_tiep_nhan_benh_nhan_popup_khong_kiem_tra_duoc_tiep_nhan_benh_nhan_popup_khong_kiem_tra_duoc_component__WEBPACK_IMPORTED_MODULE_29__["TiepNhanBenhNhanPopupKhongKiemTraDuocComponent"], {
                            disableClose: true,
                            width: '700px',
                            height: '300px',
                            data: this.tiepNhanBenhNhan,
                        });
                        dialogRef.afterClosed().subscribe(function (result) {
                            //console.log("TiepNhanBenhNhanPopupKhongKiemTraDuocComponent = ",result);
                            if (result == true) {
                                _this.tiepNhanBenhNhan.IsCheckedBHYT = null;
                                _this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_21__["TinhTrangThe"].KhongXacDinh;
                                _this.tiepNhanBenhNhan.CoBHYT = true;
                                _this.tiepNhanBenhNhan.TuNhap = true;
                            }
                            else if (result == false) {
                                _this.tiepNhanBenhNhan.CoBHYT = false;
                                _this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_21__["TinhTrangThe"].KhongXacDinh;
                                _this.tiepNhanBenhNhan.IsCheckedBHYT = false;
                            }
                            else if (result != undefined) {
                                //console.log("------- ", result);
                                _this.setValueBHYT(result);
                            }
                        });
                    }
                    else {
                        this.tiepNhanBenhNhan.IsCheckedBHYT = true;
                        this.checkOutOfDateBHYT(this.tiepNhanBenhNhan.BHYTNgayHetHan);
                    }
                    //Get tuoi
                    this.getAge(this.tiepNhanBenhNhan.NgayThangNamSinh, new Date);
                    //disable search qr code
                    this.isSearchQRCodeEnable = false;
                    //set value da tim kiem
                    this.hoTenDaTimKiem = model.hoTen;
                    this.maSoTheDaTimKiem = model.maThe;
                    this.ngaySinhDaTimKiem = this.tiepNhanBenhNhan.NgayThangNamSinh;
                    //
                    //console.log("setValueBHYT = ", this.tiepNhanBenhNhan)
                    this.isSetValue = false;
                };
                TiepNhanBenhNhanComponent.prototype.uploadFileDone = function (tapTin) {
                    //console.log(tapTin);
                    this.tiepNhanBenhNhan.GiayChuyenVien = tapTin;
                    if (!this.cdRef.destroyed) {
                        this.cdRef.detectChanges();
                    }
                    //console.log("aaaaa= ", this.tiepNhanBenhNhan)
                };
                TiepNhanBenhNhanComponent.prototype.uploadFileMienCungChiTraDone = function (tapTin) {
                    //console.log(tapTin);
                    this.tiepNhanBenhNhan.BHYTGiayMienCungChiTra = tapTin;
                    this.cdRef.detectChanges();
                    //console.log("aaaaa= ", this.tiepNhanBenhNhan)
                };
                TiepNhanBenhNhanComponent.prototype.luuVaInPhieu = function () {
                    var _this = this;
                    var self = this;
                    self.validationErrors = null;
                    var comfrim = "lưu và in phiếu khám bệnh cho người bệnh";
                    this.tiepNhanBenhNhan.NoiGioiThieu = null;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Add)) {
                        if (this.isActiveAction != null) {
                            this.dialog.closeAll();
                            this.isActiveAction = null;
                        }
                        this.isActiveAction = this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].MessLockTemplate, [comfrim, ""]) }
                        }).afterClosed().subscribe(function (result) {
                            if (result == "Yes") {
                                _this.tiepNhanBenhNhan.ThoiGianTiepNhan = new Date();
                                self.apiService.post("TiepNhanBenhNhan/LuuPhieuKham", _this.tiepNhanBenhNhan).subscribe(function (resultData) {
                                    self.loading = false;
                                    //console.log("result", resultData)
                                    //self.router.navigate(['tiep-nhan-trong-ngay/']);
                                    //this.getSharedPrintForm(resultData);
                                    var loaiDichVuKyThuat = 4;
                                    var loaiDichVuKhamBenh = 3;
                                    var kiemtraLoaiDichVuKhamBenh = _this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(function (x) { return x.LoaiDichVuKhac == loaiDichVuKhamBenh; }).length;
                                    var kiemtraLoaiDichVuKyThuat = _this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(function (x) { return x.LoaiDichVuKhac == loaiDichVuKyThuat; }).length;
                                    if (kiemtraLoaiDichVuKhamBenh > 0 && kiemtraLoaiDichVuKyThuat > 0) {
                                        _this.getSharePrintPopup(resultData);
                                    }
                                    else {
                                        _this.getSharedPrintForm(resultData);
                                    }
                                    _this.idYeuCauTiepNhan = resultData;
                                    //confirm
                                    _this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], {
                                        disableClose: false,
                                        width: '400px',
                                        data: { Title: "Xác nhận", Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["TiepNhanBenhNhanMessage"].MessageDangKyTiepTheo }
                                    }).afterClosed().subscribe(function (result) {
                                        if (result == "Yes") {
                                            //self.router.navigate(['tiep-nhan-trong-ngay/']);
                                            //kiểm tra dịch vu trong yêu cầu tiếp nhận đó sài gói marketing trong gói
                                            _this.kiemTraDichVuTrongGoi();
                                        }
                                        else {
                                            _this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () { return _this.router.navigate(['them-yeu-cau-tiep-nhan']); });
                                            self.ngOnInit();
                                        }
                                    });
                                }, function (err) {
                                    //console.log("err", err)
                                    // trường hợp bhyt chưa đóng là không cho tạo mới 
                                    self.loading = false;
                                    if (err != undefined && err.Status == 503) {
                                        _this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], {
                                            disableClose: false,
                                            width: '400px',
                                            data: { Title: "Xác nhận", Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["TiepNhanBenhNhanMessage"].MessageDaTaoYCTN }
                                        }).afterClosed().subscribe(function (result) {
                                            if (result == "Yes") {
                                                //self.router.navigate(['tiep-nhan-trong-ngay/']);
                                                //self.router.navigateByUrl('tiep-nhan-trong-ngay/chinh-sua/' + );
                                                _this.checkTNBNToDay(_this.tiepNhanBenhNhan.BHYTMaSoThe, _this.tiepNhanBenhNhan.BenhNhanId);
                                                _this.getDanhSachGoiBenhNhan(_this.tiepNhanBenhNhan.BenhNhanId);
                                            }
                                            else {
                                            }
                                        });
                                    }
                                    else {
                                        if (err != undefined && err.ValidationErrors != null) {
                                            var itemGiamHoValidate = err.ValidationErrors.find(function (p) { return p.Field == "NguoiLienHeHoTen"
                                                || p.Field == "NguoiLienHeQuanHeNhanThanId" || p.Field == "NguoiLienHeSoDienThoai"; });
                                            if (itemGiamHoValidate != null && itemGiamHoValidate != undefined) {
                                                self.tabStrip.selectTab(2);
                                                ;
                                            }
                                            self.validationErrors = err.ValidationErrors;
                                        }
                                        else if (err != undefined && err.Errors == null) {
                                            //self.validationErrors.push({ "Message": err.Message });
                                            self.notificationService.showError(err.Message);
                                        }
                                    }
                                });
                                //
                            }
                            else {
                                self.loading = false;
                            }
                        });
                    }
                    else {
                        self.loading = false;
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                TiepNhanBenhNhanComponent.prototype.kiemTraDichVuTrongGoi = function () {
                    var _this = this;
                    this.apiService.get("TiepNhanBenhNhan/KiemTraTatCaDichVuTrongGoi/" + this.idYeuCauTiepNhan).subscribe(function (resultData) {
                        if (resultData.Item1) {
                            _this.router.navigateByUrl('/danh-sach-thu-goi-marketing/chi-tiet-cho-quyet-toan-marketing/' + resultData.Item2);
                        }
                        else {
                            _this.router.navigateByUrl('danh-sach-thu-dich-vu/thong-tin-chi-tiet-cho-thu-tien/' + _this.idYeuCauTiepNhan + "?loaiThanhToan=" + 1 + "&yctn=true");
                        }
                    });
                };
                // testin(){
                //   console.log("testin");
                //   this.onPrintPDF(60);
                // }
                // getSharedPrintForm(id: any) {
                //   return new Promise(resolve => {
                //     this.apiService.get<any>("TiepNhanBenhNhan/InPhieuKhamBenh?id=" + id + "&hostingName=" + this.hostingName).subscribe(resultData => {
                //       resolve(resultData);
                //     });
                //   });
                // }
                TiepNhanBenhNhanComponent.prototype.getSharePrintPopup = function (id) {
                    var _this = this;
                    this.apiService.get("TiepNhanBenhNhan/InPhieuKhamBenh?id=" + id + "&hostingName=" + this.hostingName).subscribe(function (resultData) {
                        var dialogRef = _this.dialog.open(_in_phieu_dang_ky_kham_tiep_nhan_benh_nhan_popup_in_phieu_dang_ky_kham_tiep_nhan_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_35__["InPhieuDangKyKhamTiepNhanBenhNhanPopupComponent"], {
                            width: '1000px',
                            height: 'auto',
                            data: { Model: resultData }
                        }).afterClosed().subscribe(function (result) {
                        });
                    });
                };
                TiepNhanBenhNhanComponent.prototype.getSharedPrintForm = function (id) {
                    var _this = this;
                    this.apiService.get("TiepNhanBenhNhan/InPhieuKhamBenh?id=" + id + "&hostingName=" + this.hostingName).subscribe(function (resultData) {
                        //var self = this;
                        //console.log("onPrintPDF = ", resultData);
                        var tmpPhieuKham = '<table id=\'showHeader\' style=\'width: 100%; height: 40px; background: #005dab;color:#fff;\'> <tr><th rowspan = \'3\' style = \'font-size: 20px;\'>PHIẾU ĐĂNG KÝ KHÁM</th></tr></table>';
                        var tmpPhieuCLS = '<table id=\'showHeader\' style=\'width: 100%; height: 40px; background: #005dab;color:#fff;\'> <tr><th rowspan = \'3\' style = \'font-size: 20px;\'>PHIẾU CHỈ ĐỊNH CẬN LÂM SÀNG</th></tr></table>';
                        var tmpPhieuXNCoVId = '<table id=\'showHeader\' style=\'width: 100%; height: 40px; background: #005dab;color:#fff;\'> <tr><th rowspan = \'3\' style = \'font-size: 20px;\'>PHIẾU CHỈ ĐỊNH XÉT NGHIỆM TEST NHANH KHÁNG NGUYÊN SARS-CoV-2 </th></tr></table>';
                        resultData = resultData.replaceAll(tmpPhieuKham, '').replaceAll(tmpPhieuCLS, '').replaceAll(tmpPhieuXNCoVId, '');
                        var WindowPrt = window.open('', '', 'toolbar=0,scrollbars=0,status=0');
                        if (WindowPrt != null && WindowPrt != undefined) {
                            WindowPrt.focus();
                            WindowPrt.close();
                            WindowPrt.document.write(resultData);
                            WindowPrt.document.close();
                            var typeSize = "A5";
                            var typeLayout = "landscape";
                            var contents = WindowPrt.document.documentElement.innerHTML;
                            var frame1 = _this.renderer.createElement('iframe');
                            frame1.name = "frame1";
                            frame1.style.position = "absolute";
                            frame1.style.top = "-1000000px";
                            document.body.appendChild(frame1);
                            var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;
                            frameDoc.document.open();
                            frameDoc.document.write('<html><head><title>DIV Contents</title><style>*{ box-sizing: border-box;} @media print {@page{size:' + typeSize + ' ' + typeLayout + ' ;} .pagebreak {clear: both;page-break-after: always;}}</style><link href="https://fonts.googleapis.com/css?family=Libre Barcode 39" rel="stylesheet">');
                            frameDoc.document.write('</head><body>');
                            frameDoc.document.write(contents);
                            frameDoc.document.write('</body></html>');
                            frameDoc.document.close();
                            setTimeout(function () {
                                window.frames["frame1"].focus();
                                window.frames["frame1"].print();
                                document.body.removeChild(frame1);
                            }, 500);
                        }
                    });
                };
                TiepNhanBenhNhanComponent.prototype.luuPhieu = function () {
                    var _this = this;
                    var self = this;
                    self.validationErrors = null;
                    var comfrim = "lưu phiếu khám bệnh cho người bệnh";
                    if (self.tiepNhanBenhNhan.YeuCauKhacGrid == undefined || self.tiepNhanBenhNhan.YeuCauKhacGrid.length == 0) {
                        comfrim = "lưu thông tin cho người bệnh";
                    }
                    self.tiepNhanBenhNhan.NoiGioiThieu = null;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
                        if (this.isActiveAction != null) {
                            this.dialog.closeAll();
                            this.isActiveAction = null;
                        }
                        this.isActiveAction = this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].MessLockTemplate, [comfrim, ""]) }
                        }).afterClosed().subscribe(function (result) {
                            if (result == "Yes") {
                                self.tiepNhanBenhNhan.ThoiGianTiepNhan = new Date();
                                self.apiService.post("TiepNhanBenhNhan/LuuPhieuKham", _this.tiepNhanBenhNhan).subscribe(function (resultData) {
                                    self.loading = false;
                                    //console.log("result", resultData)
                                    //self.router.navigate(['tiep-nhan-trong-ngay/']);
                                    // if(){
                                    // }
                                    _this.idYeuCauTiepNhan = resultData;
                                    //confirm
                                    _this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], {
                                        disableClose: false,
                                        width: '400px',
                                        data: { Title: "Xác nhận", Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["TiepNhanBenhNhanMessage"].MessageDangKyTiepTheo }
                                    }).afterClosed().subscribe(function (result) {
                                        if (result == "Yes") {
                                            //self.router.navigate(['tiep-nhan-trong-ngay/']);
                                            // self.router.navigateByUrl('danh-sach-thu-dich-vu/thong-tin-chi-tiet-cho-thu-tien/' + this.idYeuCauTiepNhan + "?loaiThanhToan=" + 1 + "&yctn=true");
                                            _this.kiemTraDichVuTrongGoi();
                                        }
                                        else {
                                            _this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () { return _this.router.navigate(['them-yeu-cau-tiep-nhan']); });
                                            self.ngOnInit();
                                        }
                                    });
                                }, function (err) {
                                    self.loading = false;
                                    //console.log("err", err)
                                    // self.validationErrors = err.ValidationErrors;
                                    if (err != undefined && err.Status == 503) {
                                        _this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], {
                                            disableClose: false,
                                            width: '400px',
                                            data: { Title: "Xác nhận", Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["TiepNhanBenhNhanMessage"].MessageDaTaoYCTN }
                                        }).afterClosed().subscribe(function (result) {
                                            if (result == "Yes") {
                                                //self.router.navigate(['tiep-nhan-trong-ngay/']);
                                                //self.router.navigateByUrl('tiep-nhan-trong-ngay/chinh-sua/' + );
                                                _this.checkTNBNToDay(_this.tiepNhanBenhNhan.BHYTMaSoThe, _this.tiepNhanBenhNhan.BenhNhanId);
                                                _this.getDanhSachGoiBenhNhan(_this.tiepNhanBenhNhan.BenhNhanId);
                                            }
                                            else {
                                            }
                                        });
                                    }
                                    else {
                                        if (err != undefined && err.ValidationErrors != null) {
                                            var itemGiamHoValidate = err.ValidationErrors.find(function (p) { return p.Field == "NguoiLienHeHoTen"
                                                || p.Field == "NguoiLienHeQuanHeNhanThanId" || p.Field == "NguoiLienHeSoDienThoai"; });
                                            if (itemGiamHoValidate != null && itemGiamHoValidate != undefined) {
                                                self.tabStrip.selectTab(2);
                                                ;
                                            }
                                            self.validationErrors = err.ValidationErrors;
                                        }
                                        else if (err != undefined && err.Errors == null) {
                                            //self.validationErrors.push({ "Message": err.Message });
                                            self.notificationService.showError(err.Message);
                                        }
                                    }
                                });
                                //
                            }
                            else {
                                self.loading = false;
                            }
                        });
                    }
                    else {
                        self.loading = false;
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                TiepNhanBenhNhanComponent.prototype.xemThemThongTinBHYT = function () {
                    //console.log("xemThemThongTinBHYT")
                    var dialogRef = this.dialog.open(_tiep_nhan_benh_nhan_popup_tiep_nhan_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_7__["TiepNhanBenhNhanPopupComponent"], {
                        disableClose: false,
                        width: '800px',
                        height: '500px',
                        data: this.tiepNhanBenhNhan,
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                    });
                };
                TiepNhanBenhNhanComponent.prototype.huy = function () {
                    //this.router.navigate(['tiep-nhan-trong-ngay/']);
                    this.ngOnInit();
                };
                TiepNhanBenhNhanComponent.prototype.getBenhVienByMa = function (ma) {
                    ;
                    this.apiService.post("TiepNhanBenhNhan/GetNoiDangKyBaoHiem?ma=" + ma).subscribe(function (resultData) {
                        return resultData;
                    }, function () {
                        //return null;
                        //console.log("error")
                    });
                    return null;
                };
                TiepNhanBenhNhanComponent.prototype.inputQrCode = function (qrCode) {
                    var _this = this;
                    this.apiService.post("BHYT/GetInfoFromURL/?model=" + qrCode).subscribe(function (resultData) {
                        if (resultData != undefined) {
                            _this.modelQRCode = resultData;
                            _this.setValueBHYT(_this.modelQRCode);
                        }
                    }, function (err) {
                        //
                        var dialogRef = _this.dialog.open(_tiep_nhan_benh_nhan_error_tiep_nhan_benh_nhan_error_component__WEBPACK_IMPORTED_MODULE_22__["TiepNhanBenhNhanErrorComponent"], {
                            disableClose: false,
                            width: '700px',
                            height: '300px',
                            data: _this.tiepNhanBenhNhan,
                        });
                        dialogRef.afterClosed().subscribe(function (result) {
                            document.getElementById("SoTheBHYTisAutoFocus").focus();
                            if (result == 2) {
                                _this.tiepNhanBenhNhan.IsCheckedBHYT = null;
                                _this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_21__["TinhTrangThe"].KhongXacDinh;
                                _this.tiepNhanBenhNhan.CoBHYT = true;
                                _this.tiepNhanBenhNhan.TuNhap = true;
                            }
                            else if (result == 1) {
                                _this.tiepNhanBenhNhan.CoBHYT = false;
                                _this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_21__["TinhTrangThe"].KhongXacDinh;
                                _this.tiepNhanBenhNhan.IsCheckedBHYT = false;
                            }
                            else if (result != undefined) {
                                //console.log("------- ", result);
                                _this.setValueBHYT(result);
                            }
                        });
                        //
                    });
                };
                TiepNhanBenhNhanComponent.prototype.timKiemBenhNhan = function (model) {
                    var self = this;
                    if (self.timeOutTimKiem != null) {
                        clearTimeout(self.timeOutTimKiem);
                        self.timeOutTimKiem = null;
                    }
                    self.timeOutTimKiem = setTimeout(function () {
                        self.setModelTimKiemBenhNhan();
                        self.lstBenhNhan = new Array();
                        self.totalBenhNhan = 0;
                        if (self.postTimKiem != null) {
                            self.postTimKiem.unsubscribe();
                            self.postTimKiem = null;
                        }
                        self.postTimKiem = self.apiService.post("TiepNhanBenhNhan/GetBenhNhanTimKiem", model).subscribe(function (resultData) {
                            //console.log("timKiemBenhNhan = ", resultData);
                            self.lstBenhNhan = resultData;
                            if (resultData != undefined && resultData != null) {
                                self.totalBenhNhan = resultData.length;
                                var index_1 = 1;
                                self.lstBenhNhan.forEach(function (obj) {
                                    obj.STT = index_1;
                                    index_1 = index_1 + 1;
                                });
                            }
                            //console.log("timKiemBenhNhan = ", this.lstBenhNhan);
                        }, function (err) {
                        });
                    }, 500);
                };
                TiepNhanBenhNhanComponent.prototype.timKiemBenhNhanForEnter = function (model) {
                    var self = this;
                    if (self.timeOutTimKiemForEnter != null) {
                        clearTimeout(self.timeOutTimKiemForEnter);
                        self.timeOutTimKiemForEnter = null;
                    }
                    self.timeOutTimKiemForEnter = setTimeout(function () {
                        self.setModelTimKiemBenhNhan();
                        self.lstBenhNhan = new Array();
                        self.totalBenhNhan = 0;
                        if (self.postTimKiemForEnter != null) {
                            self.postTimKiemForEnter.unsubscribe();
                            self.postTimKiemForEnter = null;
                        }
                        self.postTimKiemForEnter = self.apiService.post("TiepNhanBenhNhan/GetBenhNhanTimKiem", model).subscribe(function (resultData) {
                            self.lstBenhNhan = resultData;
                            if (resultData != undefined && resultData != null) {
                                self.totalBenhNhan = resultData.length;
                                var index_2 = 1;
                                self.lstBenhNhan.forEach(function (obj) {
                                    obj.STT = index_2;
                                    index_2 = index_2 + 1;
                                });
                                //
                                if (resultData.length == 1) {
                                    // self.router.navigate(['tiep-nhan-trong-ngay/chinh-sua/' + resultData[0].Id]);
                                    self.checkTNBNToDay(resultData[0].MaBHYT, resultData[0].Id);
                                }
                                else if (resultData.length > 1) {
                                    self.timKiemBenhNhanPopup();
                                }
                            }
                            //console.log("timKiemBenhNhan = ", this.lstBenhNhan);
                        }, function (err) {
                        });
                    }, 500);
                };
                TiepNhanBenhNhanComponent.prototype.setModelTimKiemBenhNhan = function () {
                    this.modelTimKiemBenhNhan.MaBHYT = this.tiepNhanBenhNhan.BHYTMaSoThe;
                    this.modelTimKiemBenhNhan.HoTen = this.tiepNhanBenhNhan.HoTen;
                    this.modelTimKiemBenhNhan.NgaySinhDisplay = this.tiepNhanBenhNhan.NgayThangNamSinhDisplay;
                    this.modelTimKiemBenhNhan.NamSinh = this.tiepNhanBenhNhan.NamSinh;
                    //this.modelTimKiemBenhNhan.GioiTinh = this.tiepNhanBenhNhan.GioiTinh;
                    this.modelTimKiemBenhNhan.SoChungMinhThu = this.tiepNhanBenhNhan.SoChungMinhThu;
                    this.modelTimKiemBenhNhan.SoDienThoai = this.tiepNhanBenhNhan.SoDienThoai;
                    this.modelTimKiemBenhNhan.DiaChi = this.tiepNhanBenhNhan.DiaChi;
                };
                TiepNhanBenhNhanComponent.prototype.onKeyTimKiemBenhNhan = function ($event) {
                    if ($event.keyCode === 13) {
                        if (this.totalBenhNhan <= 0) {
                            return;
                        }
                        else {
                            this.timKiemBenhNhanPopup();
                        }
                    }
                    else {
                        this.timKiemBenhNhan(this.modelTimKiemBenhNhan);
                    }
                };
                TiepNhanBenhNhanComponent.prototype.onKeyTimKiemBenhNhanForLogicNewCMNDVaSdt = function ($event) {
                    //console.log("onKeyTimKiemBenhNhanForLogicNewCMNDVaSdt = ", $event.keyCode);
                    if ($event.keyCode === 13) {
                        this.timKiemBenhNhanForEnter(this.modelTimKiemBenhNhan);
                    }
                    else {
                        this.timKiemBenhNhan(this.modelTimKiemBenhNhan);
                    }
                };
                TiepNhanBenhNhanComponent.prototype.onKeySdt = function ($event) {
                    this.timKiemBenhNhan(this.modelTimKiemBenhNhan);
                };
                //cheat for tab on [BVHD-1506]
                TiepNhanBenhNhanComponent.prototype.onKeyScanner = function (event) {
                    //console.log("onKeyScanner = ", event);
                    if (event.keyCode === 9) {
                        //console.log(this.HoVaTenTextbox);
                        this.HoVaTenTextbox.focus();
                    }
                };
                TiepNhanBenhNhanComponent.prototype.onKeyLookBN = function (event) {
                    if (event.keyCode === 9) {
                        if (this.tiepNhanBenhNhan.CoBHYT == true) {
                            //console.log(this.NgaySinhCoBHYT);
                            //this.NgaySinhCoBHYT.focusManual();
                        }
                        else {
                            //console.log(this.NgaySinhKhongCoBHYT);
                            //this.NgaySinhKhongCoBHYT.focusManual();
                        }
                    }
                };
                TiepNhanBenhNhanComponent.prototype.onKeyHinhThucDen = function (event) {
                    // if (event.keyCode === 9) {
                    //     this.tabStrip.selectTab(0);
                    //     let self = this;
                    //     setTimeout(function () {
                    //         //console.log("setTimeout = ", self.dichVuCombobox);
                    //         if (self.dichVuCombobox != undefined) {
                    //             self.dichVuCombobox.focusManual();
                    //         }
                    //     }, 100);
                    // }
                };
                TiepNhanBenhNhanComponent.prototype.onKey = function (event, isSoTheBHYT, loai) {
                    var _this = this;
                    if (loai === void 0) { loai = 1; }
                    if (isSoTheBHYT == true) {
                        this.bindMucHuongFromSoTheBHYT(this.tiepNhanBenhNhan.BHYTMaSoThe);
                    }
                    //console.log("onKey = ", event);
                    // if(loai == 1){
                    //     this.modelTimKiemBenhNhan.MaBHYT = this.tiepNhanBenhNhan.BHYTMaSoThe;
                    // }
                    // else if(loai == 2){
                    //     this.modelTimKiemBenhNhan.HoTen = this.tiepNhanBenhNhan.HoTen;
                    // }
                    // else if(loai == 3){
                    //     this.modelTimKiemBenhNhan.NgaySinh = this.tiepNhanBenhNhan.NgayThangNamSinh;
                    //     //console.log("-------------: ",this.tiepNhanBenhNhan.NgayThangNamSinh);
                    // }
                    if (event.keyCode === 13) {
                        if (loai == 3 && this.tiepNhanBenhNhan.NgayThangNamSinh != null && this.tiepNhanBenhNhan.NgayThangNamSinh != undefined) {
                            this.getAge(this.tiepNhanBenhNhan.NgayThangNamSinh, new Date);
                        }
                        this.checkTNBNToDay(this.tiepNhanBenhNhan.BHYTMaSoThe);
                    }
                    this.timKiemBenhNhan(this.modelTimKiemBenhNhan);
                    //console.log("onKey = ", this.isCheckedBHYT);
                    if (this.isCheckedBHYT == true || this.tiepNhanBenhNhan.CoBHYT != true)
                        return;
                    if (this.tiepNhanBenhNhan.TuNhap == true && this.isScanF1 == false && !(this.tiepNhanBenhNhan.BHYTMaSoThe != null && this.tiepNhanBenhNhan.BHYTMaSoThe.includes("$")))
                        return;
                    this.isCheckedBHYT = true;
                    var isQrCodeScan = false;
                    if (isSoTheBHYT == true && this.tiepNhanBenhNhan.BHYTMaSoThe != null
                        && this.tiepNhanBenhNhan.BHYTMaSoThe != null && this.tiepNhanBenhNhan.BHYTMaSoThe.includes("$")) {
                        //console.log("successfully");
                        this.inputQrCode(this.tiepNhanBenhNhan.BHYTMaSoThe);
                        isQrCodeScan = true;
                    }
                    if (this.isSearchQRCodeEnable == true && isQrCodeScan == false) {
                        //console.log("enter submit");
                        if (event.keyCode === 13) {
                            this.thongTinBenhNhan.MaThe = this.tiepNhanBenhNhan.BHYTMaSoThe;
                            this.thongTinBenhNhan.TenBenhNhan = this.tiepNhanBenhNhan.HoTen;
                            this.thongTinBenhNhan.NgaySinh = this.tiepNhanBenhNhan.NgayThangNamSinh;
                            this.thongTinBenhNhan.NamSinh = this.tiepNhanBenhNhan.NamSinh;
                            var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_18__["DatePipe"]("en-US");
                            this.thongTinBenhNhan.NgaySinhDisplay = datePipe.transform(this.tiepNhanBenhNhan.NgayThangNamSinh, 'dd/MM/yyyy');
                            //console.log("---------: ", this.thongTinBenhNhan.MaThe == null, this.thongTinBenhNhan.MaThe == "" );
                            if (this.thongTinBenhNhan.MaThe != null && this.thongTinBenhNhan.MaThe != ""
                                && this.thongTinBenhNhan.TenBenhNhan != null && this.thongTinBenhNhan.TenBenhNhan != ""
                                && (this.thongTinBenhNhan.NgaySinh != null || this.thongTinBenhNhan.NamSinh != null)) {
                                var dialogRef = this.dialog.open(_tiep_nhan_benh_nhan_cho_quet_tiep_nhan_benh_nhan_cho_quet_component__WEBPACK_IMPORTED_MODULE_17__["TiepNhanBenhNhanChoQuetComponent"], {
                                    disableClose: true,
                                    width: '500px',
                                    height: '250px',
                                    data: this.thongTinBenhNhan,
                                });
                                dialogRef.afterClosed().subscribe(function (result) {
                                    //console.log("close = ", result);
                                    //console.log("close = ", this.tiepNhanBenhNhan);
                                    if (result === undefined) {
                                        //cheat vi khong hieu sao ra duoc
                                    }
                                    // else if (result == null || (result != null && result.maKetQua == "050")) {
                                    else if (result == null || (result != null && result.maKetQua !== "000" && result.maKetQua !== "004")) {
                                        //this.clearData();
                                        //this.notificationService.showError(TiepNhanBenhNhanMessage.MessageSaiThongTinBenhNhan);
                                        //
                                        //console.log("TiepNhanBenhNhanErrorComponent = ", this.tiepNhanBenhNhan);
                                        _this.tiepNhanBenhNhan.MessageErrFromBHYT = result != null ? result.ghiChu : null;
                                        var dialogRef_2 = _this.dialog.open(_tiep_nhan_benh_nhan_error_tiep_nhan_benh_nhan_error_component__WEBPACK_IMPORTED_MODULE_22__["TiepNhanBenhNhanErrorComponent"], {
                                            disableClose: false,
                                            width: '700px',
                                            height: '300px',
                                            data: _this.tiepNhanBenhNhan,
                                        });
                                        dialogRef_2.afterClosed().subscribe(function (result) {
                                            //document.getElementById("SoTheBHYTisAutoFocus").focus();
                                            _this.isCheckedBHYT = false;
                                            if (result == 2) {
                                                _this.tiepNhanBenhNhan.IsCheckedBHYT = null;
                                                _this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_21__["TinhTrangThe"].KhongXacDinh;
                                                _this.tiepNhanBenhNhan.CoBHYT = true;
                                                _this.tiepNhanBenhNhan.TuNhap = true;
                                            }
                                            else if (result == 1) {
                                                _this.tiepNhanBenhNhan.CoBHYT = false;
                                                _this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_21__["TinhTrangThe"].KhongXacDinh;
                                                _this.tiepNhanBenhNhan.IsCheckedBHYT = false;
                                            }
                                            else if (result != undefined) {
                                                //console.log("------- ", result);
                                                _this.setValueBHYT(result);
                                            }
                                        });
                                        //
                                    }
                                    else {
                                        //console.log("onkey = ",event, this.tiepNhanBenhNhan.BHYTMaSoThe)
                                        _this.isCheckedBHYT = false;
                                        _this.setValueBHYT(result);
                                    }
                                });
                            }
                            else {
                                this.isCheckedBHYT = false;
                            }
                            //console.log(this.tiepNhanBenhNhan.BHYTMaSoThe);
                        }
                        else {
                            this.isCheckedBHYT = false;
                        }
                    }
                    else {
                        this.isCheckedBHYT = false;
                    }
                };
                TiepNhanBenhNhanComponent.prototype.bindMucHuongFromSoTheBHYT = function (soTheBHYT) {
                    if (soTheBHYT != undefined && soTheBHYT != null && soTheBHYT.length >= 3) {
                        var maTheArray = soTheBHYT.split("");
                        if (maTheArray[2] == '1') {
                            this.tiepNhanBenhNhan.BHYTMucHuong = 100;
                        }
                        else if (maTheArray[2] == '2') {
                            this.tiepNhanBenhNhan.BHYTMucHuong = 100;
                        }
                        else if (maTheArray[2] == '3') {
                            this.tiepNhanBenhNhan.BHYTMucHuong = 95;
                        }
                        else if (maTheArray[2] == '4') {
                            this.tiepNhanBenhNhan.BHYTMucHuong = 80;
                        }
                        else {
                            this.tiepNhanBenhNhan.BHYTMucHuong = 100;
                        }
                    }
                };
                TiepNhanBenhNhanComponent.prototype.blur = function ($event, isSoTheBHYT, loai) {
                    var _this = this;
                    if (loai === void 0) { loai = 1; }
                    if (isSoTheBHYT == true && this.changeMaTheBHYT != true) {
                        return;
                    }
                    if (isSoTheBHYT == true) {
                        this.bindMucHuongFromSoTheBHYT(this.tiepNhanBenhNhan.BHYTMaSoThe);
                    }
                    this.checkTNBNToDay(this.tiepNhanBenhNhan.BHYTMaSoThe);
                    if (loai == 3 && this.tiepNhanBenhNhan.NgayThangNamSinh != null && this.tiepNhanBenhNhan.NgayThangNamSinh != undefined) {
                        this.getAge(this.tiepNhanBenhNhan.NgayThangNamSinh, new Date);
                    }
                    //console.log("blur = ", this.isCheckedBHYT);
                    if (this.isCheckedBHYT == true || this.tiepNhanBenhNhan.CoBHYT != true)
                        return;
                    if (this.tiepNhanBenhNhan.TuNhap == true && this.isScanF1 == false && !(this.tiepNhanBenhNhan.BHYTMaSoThe != null && this.tiepNhanBenhNhan.BHYTMaSoThe.includes("$")))
                        return;
                    this.isCheckedBHYT = true;
                    if (this.isSearchQRCodeEnable == true && !(this.tiepNhanBenhNhan.BHYTMaSoThe != null && this.tiepNhanBenhNhan.BHYTMaSoThe.includes("$"))) {
                        this.thongTinBenhNhan.MaThe = this.tiepNhanBenhNhan.BHYTMaSoThe;
                        this.thongTinBenhNhan.TenBenhNhan = this.tiepNhanBenhNhan.HoTen;
                        this.thongTinBenhNhan.NgaySinh = this.tiepNhanBenhNhan.NgayThangNamSinh;
                        this.thongTinBenhNhan.NamSinh = this.tiepNhanBenhNhan.NamSinh;
                        var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_18__["DatePipe"]("en-US");
                        this.thongTinBenhNhan.NgaySinhDisplay = datePipe.transform(this.tiepNhanBenhNhan.NgayThangNamSinh, 'dd/MM/yyyy');
                        if (this.thongTinBenhNhan.MaThe != null && this.thongTinBenhNhan.MaThe != ""
                            && this.thongTinBenhNhan.TenBenhNhan != null && this.thongTinBenhNhan.TenBenhNhan != ""
                            && (this.thongTinBenhNhan.NgaySinh != null || this.thongTinBenhNhan.NamSinh != null)) {
                            var dialogRef = this.dialog.open(_tiep_nhan_benh_nhan_cho_quet_tiep_nhan_benh_nhan_cho_quet_component__WEBPACK_IMPORTED_MODULE_17__["TiepNhanBenhNhanChoQuetComponent"], {
                                disableClose: true,
                                width: '500px',
                                height: '250px',
                                data: this.thongTinBenhNhan,
                            });
                            dialogRef.afterClosed().subscribe(function (result) {
                                //console.log("close = ", result, typeof(result));
                                if (result === undefined) {
                                    //console.log("undefined");
                                    //cheat vi khong hieu sao ra duoc
                                }
                                // else if (result == null || (result != null && result.maKetQua == "050")) {
                                else if (result == null || (result != null && result.maKetQua !== "000" && result.maKetQua !== "004")) {
                                    //this.clearData();
                                    //this.notificationService.showError(TiepNhanBenhNhanMessage.MessageSaiThongTinBenhNhan);
                                    //console.log("null");
                                    //
                                    //console.log("TiepNhanBenhNhanErrorComponent = ", this.tiepNhanBenhNhan);
                                    _this.tiepNhanBenhNhan.MessageErrFromBHYT = result != null ? result.ghiChu : null;
                                    var dialogRef_3 = _this.dialog.open(_tiep_nhan_benh_nhan_error_tiep_nhan_benh_nhan_error_component__WEBPACK_IMPORTED_MODULE_22__["TiepNhanBenhNhanErrorComponent"], {
                                        disableClose: false,
                                        width: '700px',
                                        height: '300px',
                                        data: _this.tiepNhanBenhNhan,
                                    });
                                    dialogRef_3.afterClosed().subscribe(function (result) {
                                        //document.getElementById("SoTheBHYTisAutoFocus").focus();
                                        _this.isCheckedBHYT = false;
                                        if (result == 2) {
                                            _this.tiepNhanBenhNhan.IsCheckedBHYT = null;
                                            _this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_21__["TinhTrangThe"].KhongXacDinh;
                                            _this.tiepNhanBenhNhan.CoBHYT = true;
                                            _this.tiepNhanBenhNhan.TuNhap = true;
                                        }
                                        else if (result == 1) {
                                            _this.tiepNhanBenhNhan.CoBHYT = false;
                                            _this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_21__["TinhTrangThe"].KhongXacDinh;
                                            _this.tiepNhanBenhNhan.IsCheckedBHYT = false;
                                        }
                                        else if (result != undefined) {
                                            //console.log("------- ", result);
                                            _this.setValueBHYT(result);
                                        }
                                    });
                                    //
                                }
                                else {
                                    _this.isCheckedBHYT = false;
                                    _this.setValueBHYT(result);
                                }
                            });
                        }
                        else {
                            this.isCheckedBHYT = false;
                        }
                    }
                    else {
                        this.isCheckedBHYT = false;
                    }
                };
                TiepNhanBenhNhanComponent.prototype.clearData = function () {
                    var soTheBHYT = this.tiepNhanBenhNhan.BHYTMaSoThe;
                    var hoVaTen = this.tiepNhanBenhNhan.HoTen;
                    var ngaySinh = this.tiepNhanBenhNhan.NgayThangNamSinh;
                    this.ngOnInit();
                    this.tiepNhanBenhNhan.BHYTMaSoThe = soTheBHYT;
                    this.tiepNhanBenhNhan.HoTen = hoVaTen;
                    this.tiepNhanBenhNhan.NgayThangNamSinh = ngaySinh;
                };
                TiepNhanBenhNhanComponent.prototype.TinhThanhPhoChange = function ($event) {
                    if ($event == undefined || $event == null) {
                        //this.tiepNhanBenhNhan.TinhThanhId = $event;
                        this.tiepNhanBenhNhan.QuanHuyenId = null;
                        this.tiepNhanBenhNhan.PhuongXaId = null;
                    }
                    // else {
                    // 	this.comboboxQuanHuyen.getDataForLookup();
                    // }
                    if (this.under6yearsold) {
                        this.cloneDiaChiNguoiGiamHo();
                    }
                    if (this.under6yearsold == false) {
                        this.cloneDiaChiNguoiGiamLonHon6Tuoi();
                    }
                };
                TiepNhanBenhNhanComponent.prototype.TinhThanhPhoNguoiLienHeChange = function ($event) {
                    //console.log("TinhThanhPhoNguoiLienHeChange = ", $event);
                    this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId = null;
                    this.tiepNhanBenhNhan.NguoiLienHePhuongXaId = null;
                };
                TiepNhanBenhNhanComponent.prototype.QuanHuyenChange = function ($event) {
                    //this.tiepNhanBenhNhan.QuanHuyenId = $event;
                    // if($event == null || $event == undefined){
                    //     this.tiepNhanBenhNhan.PhuongXaId = null;
                    // }
                    // else{
                    //     this.tiepNhanBenhNhan.ph
                    // }
                    if ($event == undefined || $event == null) {
                        this.tiepNhanBenhNhan.PhuongXaId = null;
                    }
                    if (this.under6yearsold) {
                        this.cloneDiaChiNguoiGiamHo();
                    }
                    if (this.under6yearsold == false) {
                        this.cloneDiaChiNguoiGiamLonHon6Tuoi();
                    }
                };
                TiepNhanBenhNhanComponent.prototype.PhuongXaChange = function ($event) {
                    var _this = this;
                    this.tiepNhanBenhNhan.PhuongXaId = $event;
                    if ($event != null && $event != undefined) {
                        this.apiService.post("TiepNhanBenhNhan/SetTinhThanhQuanHuyen?phuongXaId=" + $event).subscribe(function (resultData) {
                            _this.tiepNhanBenhNhan.TinhThanhId = resultData.TinhThanhId;
                            _this.tiepNhanBenhNhan.QuanHuyenId = resultData.QuanHuyenId;
                            _this.comboboxQuanHuyen.getDataForLookup();
                            if (_this.validationErrors != undefined && _this.validationErrors != null && _this.validationErrors.length > 0) {
                                if (_this.validationErrors && _this.validationErrors.some(function (x) { return x.Field.includes('QuanHuyenId') || x.Field.includes('TinhThanhId'); })) {
                                    for (var _i = 0, _a = _this.validationErrors.filter(function (x) { return x.Field.includes('QuanHuyenId') || x.Field.includes('TinhThanhId'); }); _i < _a.length; _i++) {
                                        var validationItem = _a[_i];
                                        _this.validationErrors.splice(_this.validationErrors.indexOf(validationItem), 1);
                                    }
                                }
                            }
                        }, function (err) {
                        });
                    }
                    else {
                        this.tiepNhanBenhNhan.TinhThanhId = null;
                        this.tiepNhanBenhNhan.QuanHuyenId = null;
                    }
                    if (this.under6yearsold) {
                        this.cloneDiaChiNguoiGiamHo();
                    }
                    if (this.under6yearsold == false) {
                        this.cloneDiaChiNguoiGiamLonHon6Tuoi();
                    }
                };
                TiepNhanBenhNhanComponent.prototype.QuanHuyenNguoiLienHeChange = function ($event) {
                    //console.log("QuanHuyenNguoiLienHeChange = ", $event);
                    this.tiepNhanBenhNhan.NguoiLienHePhuongXaId = null;
                };
                TiepNhanBenhNhanComponent.prototype.KhoaKhamChange = function ($event) {
                    var _this = this;
                    //this.tiepNhanBenhNhan.PhongKhamVaBacSiId = null;
                    this.apiService.post("TiepNhanBenhNhan/SetPhongKham?KhoaKhamId=" + $event).subscribe(function (resultData) {
                        _this.tiepNhanBenhNhan.PhongKhamVaBacSiId = resultData;
                    }, function (err) {
                    });
                };
                TiepNhanBenhNhanComponent.prototype.ThongTinBenhNhanHoTenChange = function ($event) {
                    //console.log("ThongTinBenhNhanHoTenChange = ", $event);
                    if ($event != null) {
                        //this.tiepNhanBenhNhan.HoTen = $event.toUpperCase();
                    }
                    if (this.hoTenDaTimKiem == $event && this.ngaySinhDaTimKiem == this.tiepNhanBenhNhan.NgayThangNamSinh
                        && this.maSoTheDaTimKiem == this.tiepNhanBenhNhan.BHYTMaSoThe) {
                        this.isSearchQRCodeEnable = false;
                    }
                    else {
                        this.isSearchQRCodeEnable = true;
                    }
                };
                TiepNhanBenhNhanComponent.prototype.ThongTinBenhNhanMaSoTHeChange = function ($event) {
                    this.changeMaTheBHYT = true;
                    if ($event != null) {
                        this.tiepNhanBenhNhan.BHYTMaSoThe = $event.toUpperCase();
                    }
                    if (this.maSoTheDaTimKiem == $event && this.ngaySinhDaTimKiem == this.tiepNhanBenhNhan.NgayThangNamSinh
                        && this.hoTenDaTimKiem == this.tiepNhanBenhNhan.HoTen) {
                        this.isSearchQRCodeEnable = false;
                    }
                    else {
                        this.isSearchQRCodeEnable = true;
                    }
                };
                TiepNhanBenhNhanComponent.prototype.ThongTinBenhNhanNgaySinhChange = function ($event) {
                    if (this.hoTenDaTimKiem == this.tiepNhanBenhNhan.HoTen && this.ngaySinhDaTimKiem == $event
                        && this.maSoTheDaTimKiem == this.tiepNhanBenhNhan.BHYTMaSoThe) {
                        this.isSearchQRCodeEnable = false;
                    }
                    else {
                        this.isSearchQRCodeEnable = true;
                    }
                    if (this.tiepNhanBenhNhan.NgayThangNamSinh != null) {
                        this.tiepNhanBenhNhan.NamSinh = this.tiepNhanBenhNhan.NgayThangNamSinh.getFullYear();
                        this.getAge(this.tiepNhanBenhNhan.NgayThangNamSinh, new Date);
                    }
                    if ($event == null || $event == undefined) {
                        this.under6yearsold = false;
                        if (this.under6yearsold == false) {
                            this.cloneDiaChiNguoiGiamLonHon6Tuoi();
                        }
                        // kiểm tra khi change ngày tháng năm sinh, nếu ko nhập vào data mà khi đó filed năm sinh đã có thì sẽ ko clear data năm sinh
                        if (this.tiepNhanBenhNhan.NamSinh == undefined || this.tiepNhanBenhNhan.NamSinh == null) {
                            this.tiepNhanBenhNhan.NamSinh = null;
                        }
                    }
                    //console.log("ThongTinBenhNhanNgaySinhChange = ", $event, "type of: ", typeof($event));
                };
                TiepNhanBenhNhanComponent.prototype.QuetMaQRCodeClick = function () {
                    var elementBarcode = document.getElementById('barcodeActive');
                    if (elementBarcode != undefined) {
                        elementBarcode.click();
                        this.isScanF1 = true;
                    }
                };
                TiepNhanBenhNhanComponent.prototype.test = function ($event) {
                    console.log("test = ", $event);
                };
                TiepNhanBenhNhanComponent.prototype.setUpDataTooltip = function (dataItem) {
                    this.displayToolTipGrid = dataItem.TenGoiChietKhau;
                };
                TiepNhanBenhNhanComponent.prototype.loaiTiepNhanChange = function ($event) {
                    if ($event == 1) {
                        this.tiepNhanBenhNhan.YeuCauKyThuatGrid = [];
                        this.tiepNhanBenhNhan.YeuCauKhacGrid = [];
                    }
                    else if ($event == 2) {
                        this.tiepNhanBenhNhan.YeuCauKhamBenhGrid = [];
                        this.tiepNhanBenhNhan.YeuCauKhacGrid = [];
                    }
                    else {
                        this.tiepNhanBenhNhan.YeuCauKhamBenhGrid = [];
                        this.tiepNhanBenhNhan.YeuCauKyThuatGrid = [];
                    }
                    this.setDataForDichVuKhac();
                    this.setDataForDichVuKyThuat();
                    this.setDataForDichVuKhamBenh();
                    this.refreshGrid();
                    this.removeThemDichVuValue();
                    this.removeThemGoiValue();
                };
                TiepNhanBenhNhanComponent.prototype.removeThemDichVuValue = function () {
                    //console.log("removeThemDichVuValue");
                    this.themChiDinhDichVuModel = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["ThemChiDinhDichVu"]();
                    //this.setDuocHuongBHYT();
                    this.themChiDinhDichVuModel.ThanhTien = null;
                    //this.themChiDinhDichVuModel.DoiTuongUuDaiId = this.tiepNhanBenhNhan.DoiTuongUuDaiId;
                    this.loaiTiepNhan = null;
                    this.isGoiCoChietKhau = null;
                    this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
                };
                TiepNhanBenhNhanComponent.prototype.removeThemGoiValue = function () {
                    //console.log("removeThemDichVuValue");
                    this.themChiDinhGoiModel = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["ThemChiDinhDichVu"]();
                    //this.setDuocHuongBHYT();
                    this.themChiDinhGoiModel.ThanhTien = null;
                    //this.themChiDinhGoiModel.DoiTuongUuDaiId = this.tiepNhanBenhNhan.DoiTuongUuDaiId;
                    this.loaiTiepNhan = null;
                    this.isGoiCoChietKhau = null;
                    this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
                };
                TiepNhanBenhNhanComponent.prototype.checkValidAddChiDinhDichVuKhac = function (id) {
                    var nhom = 'DỊCH VỤ KHÁM BỆNH';
                    if (this.loaiTiepNhan == 2) {
                        nhom = 'DỊCH VỤ KỸ THUẬT';
                    }
                    else if (this.loaiTiepNhan == 1) {
                        nhom = 'DỊCH VỤ KHÁM BỆNH';
                    }
                    else {
                        nhom = 'DỊCH VỤ GIƯỜNG';
                    }
                    //console.log("checkValidAddChiDinhDichVuKhac = ", this.tiepNhanBenhNhan.YeuCauKhacGrid, this.loaiTiepNhan, id);
                    var model = this.tiepNhanBenhNhan.YeuCauKhacGrid
                        //.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
                        .find(function (obj) { return obj.MaDichVuId == id && obj.Nhom == nhom; });
                    //console.log("checkValidAddChiDinhDichVuKhac = ", model, nhom);
                    if (model != undefined) {
                        return false;
                    }
                    return true;
                };
                TiepNhanBenhNhanComponent.prototype.checkValidAddGoiCoChietKhau = function (id) {
                    //console.log("checkValidAddChiDinhDichVuKhac = ", this.tiepNhanBenhNhan.YeuCauKhacGrid, this.loaiTiepNhan, id);
                    var model = this.tiepNhanBenhNhan.YeuCauKhacGrid
                        //.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
                        .find(function (obj) { return obj.GoiCoChietKhauId == id; });
                    //console.log("checkValidAddChiDinhDichVuKhac = ", model, nhom);
                    if (model != undefined) {
                        return false;
                    }
                    return true;
                };
                TiepNhanBenhNhanComponent.prototype.checkValidAddGoiKhongCoChietKhau = function (id, nhom) {
                    //console.log("checkValidAddChiDinhDichVuKhac = ", this.tiepNhanBenhNhan.YeuCauKhacGrid, nhom, id);
                    var model = this.tiepNhanBenhNhan.YeuCauKhacGrid
                        .filter(function (o) { return o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null; })
                        .find(function (obj) { return obj.MaDichVuId == id && obj.Nhom == nhom; });
                    //console.log("checkValidAddChiDinhDichVuKhac = ", model, nhom);
                    if (model != undefined) {
                        return false;
                    }
                    return true;
                };
                TiepNhanBenhNhanComponent.prototype.checkValidAddChiDinhDichVuKhamBenh = function (id) {
                    ;
                    var model = this.tiepNhanBenhNhan.YeuCauKhamBenhGrid.filter(function (o) { return o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null; }).find(function (obj) { return obj.MaDichVuId == id; });
                    if (model != undefined) {
                        return false;
                    }
                    return true;
                };
                TiepNhanBenhNhanComponent.prototype.checkValidAddChiDinhDichVuKyThuat = function (id) {
                    //console.log("checkValidAddChiDinhDichVuKhamBenh = ", this.tiepNhanBenhNhan.YeuCauKhamBenhGrid,id);
                    var model = this.tiepNhanBenhNhan.YeuCauKyThuatGrid.filter(function (o) { return o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null; }).find(function (obj) { return obj.MaDichVuId == id; });
                    //console.log("checkValidAddBHTN = ", index);
                    if (model != undefined) {
                        return false;
                    }
                    return true;
                };
                // themChiDinhDichVu() {
                //     var self = this;
                //     let isValid = this.checkValidAddChiDinhDichVuKhamBenh(this.themChiDinhDichVuModel.MaDichVuId);
                //     if (isValid == false) return;
                //     self.validationErrors = null;
                //     self.apiService.post<ChiDinhDichVuGridVo>("TiepNhanBenhNhan/ThemDichVu", this.themChiDinhDichVuModel).subscribe(
                //         resultData => {
                //             if (resultData != undefined && resultData != null) {
                //                 //console.log(resultData);
                //                 this.tiepNhanBenhNhan.YeuCauKhamBenhGrid.push(resultData);
                //                 this.setDataForDichVuKhamBenh();
                //                 this.setGiaBHYT();
                //                 this.refreshGrid();
                //                 this.removeThemDichVuValue();
                //             }
                //             else {
                //             }
                //         },
                //         (err: any) => {
                //             ;
                //             // self.validationErrors = err.ValidationErrors;
                //             //console.log(err);
                //             if (err != undefined && err.ValidationErrors != null) {
                //                 self.validationErrors = err.ValidationErrors;
                //             }
                //             else if (err != undefined && err.Errors == null) {
                //                 //self.validationErrors.push({ "Message": err.Message });
                //                 self.notificationService.showError(err.Message);
                //             }
                //         });
                // }
                TiepNhanBenhNhanComponent.prototype.themChiDinhDichVuGoiNew = function () {
                    if (this.isGoiCoChietKhau) {
                        this.themChiDinhDichVuKhacKhamBenh(2);
                    }
                    else if (this.isGoiCoChietKhau == false || this.isGoiCoChietKhau == null) {
                        this.themChiDinhDichVuKhacKhamBenh(1);
                    }
                };
                TiepNhanBenhNhanComponent.prototype.themChiDinhDichVuNew = function () {
                    var _this = this;
                    //console.log("themChiDinhDichVuNew = ", this.loaiTiepNhan, this.danhSachDichVuDaChonTrongLanPopup);
                    // if(this.tiepNhanBenhNhan.BenhNhanId != null && this.tiepNhanBenhNhan.BenhNhanId != 0){
                    // }
                    // else{
                    //     if (this.loaiTiepNhan == 1) {
                    //         this.themChiDinhDichVuKhacKhamBenh(3);
                    //     }
                    //     else if (this.loaiTiepNhan == 2) {
                    //         this.themChiDinhDichVuKhacKhamBenh(4);
                    //     }
                    //     else {
                    //         this.themChiDinhDichVuKhacKhamBenh(5);
                    //     }
                    // }
                    var model = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["CheckDuSoLuongTonTrongGoi"]();
                    model.DichVuThem = this.themChiDinhDichVuModel;
                    model.DichVuThem.benhNhanId = this.tiepNhanBenhNhan.BenhNhanId;
                    if (this.loaiTiepNhan == 1) {
                        //1: KB, 2: DVKT, 3: DVG
                        model.DichVuThem.TenNhomDichVu = 'DỊCH VỤ KHÁM BỆNH';
                    }
                    else if (this.loaiTiepNhan == 2) {
                        model.DichVuThem.TenNhomDichVu = 'DỊCH VỤ KỸ THUẬT';
                    }
                    else {
                        model.DichVuThem.TenNhomDichVu = 'DỊCH VỤ GIƯỜNG';
                    }
                    model.DanhSachDichVuChonTrongLanPopup = this.danhSachDichVuDaChonTrongLanPopup;
                    //check trung
                    var self = this;
                    var itemExist = this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(function (o) { return o.MaDichVuId == model.DichVuThem.MaDichVuId && o.Nhom == model.DichVuThem.TenNhomDichVu; });
                    if (itemExist.length > 0) {
                        self.dialog.open(_popup_dich_vu_check_trung_popup_dich_vu_check_trung_component__WEBPACK_IMPORTED_MODULE_37__["PopupDichVuCheckTrungComponent"], {
                            disableClose: false,
                            width: '400px',
                        }).afterClosed().subscribe(function (result) {
                            if (result == true) {
                                _this.themDichVu(model);
                            }
                            else {
                            }
                        });
                    }
                    else {
                        this.themDichVu(model);
                    }
                };
                TiepNhanBenhNhanComponent.prototype.themDichVu = function (model) {
                    var self = this;
                    var dataRes = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["DichVuTrongGoiKhiThem"]();
                    // cập nhật ngày 02/06/2021: ko kiểm tra dịch vụ có trong gói nữa
                    if (this.loaiTiepNhan == 1) {
                        this.themChiDinhDichVuKhacKhamBenh(3);
                    }
                    else if (this.loaiTiepNhan == 2) {
                        this.themChiDinhDichVuKhacKhamBenh(4);
                    }
                    else {
                        this.themChiDinhDichVuKhacKhamBenh(5);
                    }
                    // this.apiService.post<DichVuTrongGoiKhiThem>("TiepNhanBenhNhan/CheckDuSoLuongTonTrongGoiForCreate", model).subscribe(
                    //     resultData => {
                    //         if (resultData != undefined && resultData != null) {
                    //             //console.log("DichVuTrongGoiKhiThem = ", resultData);
                    //             dataRes = resultData;
                    //             this.dialog.open(ConfirmComponent, {
                    //                 disableClose: false,
                    //                 width: '400px',
                    //                 data: { Title: "Xác nhận", Message: CommonService.format(TiepNhanBenhNhanMessage.MessageConfirmThemVaoGoi, [resultData.TenDichVu, resultData.TenChuongTrinh, this.tiepNhanBenhNhan.HoTen]) }
                    //             }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
                    //                 if (result == "Yes") {
                    //                     //
                    //                     self.danhSachDichVuGoiDaChon = new Array<ThemChiDinhDichVu>();
                    //                     let item = new ThemChiDinhDichVu();
                    //                     item.LaGoi = true;
                    //                     item.TenNhomDichVu = model.DichVuThem.TenNhomDichVu;
                    //                     item.MaDichVuId = model.DichVuThem.MaDichVuId;
                    //                     item.SoLuong = model.DichVuThem.SoLuong;
                    //                     item.chuongTrinhGoiDichVuId = dataRes.ChuongTrinhGoiDichVuId;
                    //                     //cheat cho lẹ
                    //                     item.DuocHuongBHYT = model.DichVuThem.DuocHuongBHYT;
                    //                     item.YeuCauGoiDichVuId = dataRes.YeuCauGoiDichVuId;
                    //                     item.ThuocGoi = dataRes.TenChuongTrinh;
                    //                     self.danhSachDichVuGoiDaChon.push(item);
                    //                     self.themChiDinhDichVuKhacKhamBenh(6, self.danhSachDichVuGoiDaChon);
                    //                     self.addDanhSachTongCongFromDanhSachDaChon(self.danhSachDichVuGoiDaChon);
                    //                     //self.router.navigate(['tiep-nhan-trong-ngay/']);
                    //                     //self.router.navigateByUrl('danh-sach-thu-dich-vu/thong-tin-chi-tiet-cho-thu-tien/' + this.idYeuCauTiepNhan + "?loaiThanhToan=" + 1 + "&yctn=true");
                    //                 }
                    //                 else {
                    //                     //self.ngOnInit();
                    //                     if (this.loaiTiepNhan == 1) {
                    //                         this.themChiDinhDichVuKhacKhamBenh(3);
                    //                     }
                    //                     else if (this.loaiTiepNhan == 2) {
                    //                         this.themChiDinhDichVuKhacKhamBenh(4);
                    //                     }
                    //                     else {
                    //                         this.themChiDinhDichVuKhacKhamBenh(5);
                    //                     }
                    //                 }
                    //             });
                    //         }
                    //         else {
                    //             if (this.loaiTiepNhan == 1) {
                    //                 this.themChiDinhDichVuKhacKhamBenh(3);
                    //             }
                    //             else if (this.loaiTiepNhan == 2) {
                    //                 this.themChiDinhDichVuKhacKhamBenh(4);
                    //             }
                    //             else {
                    //                 this.themChiDinhDichVuKhacKhamBenh(5);
                    //             }
                    //         }
                    //     },
                    //     (err: any) => {
                    //         if (err != undefined && err.ValidationErrors != null) {
                    //             this.validationErrors = err.ValidationErrors;
                    //         }
                    //         else if (err != undefined && err.Errors == null) {
                    //             this.notificationService.showError(err.Message);
                    //         }
                    //     });
                };
                TiepNhanBenhNhanComponent.prototype.themChiDinhDichVuKhacKhamBenh = function (loaiDichVuKhac, lstDataGoi) {
                    var _this = this;
                    if (lstDataGoi === void 0) { lstDataGoi = null; }
                    //1: goi khong co chiet khau, 2: goi co chiet khau, 3: dich vu kham benh, 4: dich vu ky thuat, 5: dich vu giuong
                    //bỏ check trùng 29/10/2020 Tuan said: "e sửa lại ko cần check trùng luôn : 2:04PM"
                    // if (loaiDichVuKhac == 2) {
                    //     let isValid = this.checkValidAddGoiCoChietKhau(this.themChiDinhGoiModel.MaDichVuGoiId);
                    //     if (isValid == false) {
                    //         this.notificationService.showError(TiepNhanBenhNhanMessage.MessageGoiTonTai);
                    //         return;
                    //     };
                    // }
                    // else if(loaiDichVuKhac == 1){
                    //     //let isValid = this.checkValidAddChiDinhDichVuKhac(this.themChiDinhGoiModel.MaDichVuId);
                    //     //if (isValid == false) return;
                    // }
                    // else {
                    //     let isValid = this.checkValidAddChiDinhDichVuKhac(this.themChiDinhDichVuModel.MaDichVuId);
                    //     if (isValid == false && loaiDichVuKhac != 1 && loaiDichVuKhac != 2){
                    //         this.notificationService.showError(TiepNhanBenhNhanMessage.MessageDichVuTonTai);
                    //         return;
                    //     };
                    // }
                    this.showbuttonLuuVaInPhieuXetNghiem = this.dichVuSarsCoVs.includes(this.themChiDinhDichVuModel.MaDichVuId);
                    if (this.showbuttonLuuVaInPhieuXetNghiem == true) {
                        this.dialog
                            .open(_xn_covid_popup_xn_covid_popup_component__WEBPACK_IMPORTED_MODULE_43__["XnCovidPopupComponent"], {
                            width: "600px",
                            data: { LoaiMauXetNghiem: this.loaiBenhPham, LoaiMauXetNghiemText: this.loaiBenhPhamText }
                        })
                            .afterClosed()
                            .subscribe(function (result) {
                            if (result != undefined) {
                                _this.tiepNhanBenhNhan.BieuHienLamSang = result.BieuHienLamSang;
                                _this.tiepNhanBenhNhan.DichTeSarsCoV2 = result.DichTeSarsCoV2;
                            }
                        });
                    }
                    this.validationErrors = null;
                    var urlDefault = "TiepNhanBenhNhan/ThemDichVu";
                    if (loaiDichVuKhac == 4) {
                        urlDefault = "TiepNhanBenhNhan/ThemDichVuKyThuat";
                    }
                    else if (loaiDichVuKhac == 5) {
                        urlDefault = "TiepNhanBenhNhan/ThemDichVuGiuong";
                    }
                    //Goi new
                    else if (loaiDichVuKhac == 6) {
                        urlDefault = "TiepNhanBenhNhan/ThemDichVuTuGoi";
                    }
                    else if (loaiDichVuKhac == 1) {
                        urlDefault = "TiepNhanBenhNhan/ThemGoiKhongChietKhau";
                        this.themChiDinhDichVuModel.LaGoi = true;
                        this.themChiDinhGoiModel.LaGoi = true;
                        this.themChiDinhDichVuModel.MaDichVuId = this.themChiDinhDichVuModel.MaDichVuGoiId;
                        this.themChiDinhGoiModel.MaDichVuId = this.themChiDinhGoiModel.MaDichVuGoiId;
                    }
                    else if (loaiDichVuKhac == 2) {
                        urlDefault = "TiepNhanBenhNhan/ThemGoiCoChietKhau";
                        this.themChiDinhDichVuModel.LaGoi = true;
                        this.themChiDinhGoiModel.LaGoi = true;
                        this.themChiDinhDichVuModel.MaDichVuId = this.themChiDinhDichVuModel.MaDichVuGoiId;
                        this.themChiDinhGoiModel.MaDichVuId = this.themChiDinhGoiModel.MaDichVuGoiId;
                    }
                    if (loaiDichVuKhac == 6) {
                        this.apiService.postArray(urlDefault, lstDataGoi).subscribe(function (resultData) {
                            if (resultData != undefined && resultData != null) {
                                //console.log(resultData);
                                //
                                resultData.forEach(function (obj) {
                                    _this.tiepNhanBenhNhan.YeuCauKhacGrid.push(obj);
                                });
                                _this.setDataForDichVuKhac();
                                _this.setGiaBHYT();
                                //this.refreshGrid();
                                _this.removeThemDichVuValue();
                                _this.removeThemGoiValue();
                            }
                            else {
                            }
                        }, function (err) {
                            // self.validationErrors = err.ValidationErrors;
                            _this.themChiDinhDichVuModel.LaGoi = false;
                            _this.themChiDinhGoiModel.LaGoi = false;
                            if (err != undefined && err.ValidationErrors != null) {
                                _this.validationErrors = err.ValidationErrors;
                            }
                            else if (err != undefined && err.Errors == null) {
                                //self.validationErrors.push({ "Message": err.Message });
                                _this.notificationService.showError(err.Message);
                            }
                        });
                    }
                    else if (loaiDichVuKhac == 1 || loaiDichVuKhac == 2) {
                        this.apiService.post(urlDefault, this.themChiDinhGoiModel).subscribe(function (resultData) {
                            if (resultData != undefined && resultData != null) {
                                //console.log(resultData);
                                //check validate
                                var added_1 = true;
                                resultData.forEach(function (obj) {
                                    if (loaiDichVuKhac == 2) {
                                        var modelValid = _this.tiepNhanBenhNhan.YeuCauKhacGrid
                                            .find(function (o) { return o.MaDichVuId == obj.MaDichVuId && o.Nhom == obj.Nhom; });
                                        if (modelValid != null && modelValid != undefined) {
                                            added_1 = false;
                                        }
                                    }
                                });
                                if (!added_1) {
                                    _this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["TiepNhanBenhNhanMessage"].MessageDichVuTrongGoiTonTai);
                                    return;
                                }
                                ;
                                //
                                resultData.forEach(function (obj) {
                                    if (loaiDichVuKhac == 1) {
                                        var isValid = _this.checkValidAddGoiKhongCoChietKhau(obj.MaDichVuId, obj.Nhom);
                                        if (isValid != false) {
                                            obj.LoaiDichVuKhac = loaiDichVuKhac;
                                            _this.tiepNhanBenhNhan.YeuCauKhacGrid.push(obj);
                                        }
                                    }
                                    else {
                                        obj.LoaiDichVuKhac = loaiDichVuKhac;
                                        _this.tiepNhanBenhNhan.YeuCauKhacGrid.push(obj);
                                    }
                                });
                                _this.setDataForDichVuKhac();
                                _this.setGiaBHYT();
                                //this.refreshGrid();
                                _this.removeThemDichVuValue();
                                _this.removeThemGoiValue();
                            }
                            else {
                            }
                        }, function (err) {
                            // self.validationErrors = err.ValidationErrors;
                            _this.themChiDinhDichVuModel.LaGoi = false;
                            _this.themChiDinhGoiModel.LaGoi = false;
                            if (err != undefined && err.ValidationErrors != null) {
                                _this.validationErrors = err.ValidationErrors;
                            }
                            else if (err != undefined && err.Errors == null) {
                                //self.validationErrors.push({ "Message": err.Message });
                                _this.notificationService.showError(err.Message);
                            }
                        });
                    }
                    else {
                        this.apiService.post(urlDefault, this.themChiDinhDichVuModel).subscribe(function (resultData) {
                            if (resultData != undefined && resultData != null) {
                                resultData.LoaiDichVuKhac = loaiDichVuKhac;
                                _this.tiepNhanBenhNhan.YeuCauKhacGrid.push(resultData);
                                _this.setDataForDichVuKhac();
                                _this.setGiaBHYT();
                                _this.refreshGrid();
                                _this.removeThemDichVuValue();
                                _this.removeThemGoiValue();
                            }
                            else {
                            }
                        }, function (err) {
                            // self.validationErrors = err.ValidationErrors;
                            if (err != undefined && err.ValidationErrors != null) {
                                _this.validationErrors = err.ValidationErrors;
                            }
                            else if (err != undefined && err.Errors == null) {
                                //self.validationErrors.push({ "Message": err.Message });
                                _this.notificationService.showError(err.Message);
                            }
                        });
                    }
                };
                TiepNhanBenhNhanComponent.prototype.totalKhamBenh = function (field) {
                    switch (field) {
                        case 'ThanhTien':
                            return this.tiepNhanBenhNhan.YeuCauKhamBenhGrid.reduce(function (sum, item) { return sum + item.ThanhTien; }, 0);
                        case 'BHYTThanhToan':
                            return this.tiepNhanBenhNhan.YeuCauKhamBenhGrid.reduce(function (sum, item) { return sum + item.BHYTThanhToan; }, 0);
                        case 'SoTienMG':
                            return this.tiepNhanBenhNhan.YeuCauKhamBenhGrid.reduce(function (sum, item) { return sum + item.SoTienMG; }, 0);
                        case 'BnThanhToan':
                            return this.tiepNhanBenhNhan.YeuCauKhamBenhGrid.reduce(function (sum, item) { return sum + item.BnThanhToan; }, 0);
                    }
                };
                ;
                TiepNhanBenhNhanComponent.prototype.totalKhac = function (field, goiCoChietkhauId) {
                    if (goiCoChietkhauId === void 0) { goiCoChietkhauId = 0; }
                    //.filter(o => o.GoiCoChietKhauId == goiCoChietkhauId)
                    //console.log("totalKhac = ", goiCoChietkhauId);
                    switch (field) {
                        case 'TongThanhTien':
                            return (this.tiepNhanBenhNhan.YeuCauKhacGrid
                                //.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
                                .reduce(function (sum, item) { return sum + item.ThanhTien; }, 0)) + (this.tiepNhanBenhNhan.YeuCauKhacGrid
                                //.filter(o => o.IsGoiCoChietKhau == true)
                                .reduce(function (sum, item) { return sum + item.ThanhTien; }, 0));
                        case 'ThanhTien':
                            return this.tiepNhanBenhNhan.YeuCauKhacGrid
                                //.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
                                .reduce(function (sum, item) { return (sum + (item.GoiCoChietKhauId != null ? item.ThanhTienSauChietKhau : item.ThanhTien)); }, 0); //sum + item.ThanhTien, 0);
                        case 'ThanhTienGoiChietKhau':
                            return this.tiepNhanBenhNhan.YeuCauKhacGrid
                                //.filter(o => o.GoiCoChietKhauId == goiCoChietkhauId)
                                .reduce(function (sum, item) { return sum + item.ThanhTien; }, 0);
                        case 'TongThanhTienGoiChietKhau':
                            return this.tiepNhanBenhNhan.YeuCauKhacGrid
                                //.filter(o => o.IsGoiCoChietKhau == true)
                                .reduce(function (sum, item) { return sum + item.ThanhTien; }, 0);
                        case 'BHYTThanhToan':
                            return this.tiepNhanBenhNhan.YeuCauKhacGrid
                                //.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
                                .reduce(function (sum, item) { return sum + item.BHYTThanhToan; }, 0);
                        case 'SoTienMG':
                            return this.tiepNhanBenhNhan.YeuCauKhacGrid
                                //.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
                                .reduce(function (sum, item) { return sum + item.SoTienMG; }, 0);
                        case 'BnThanhToan':
                            return this.tiepNhanBenhNhan.YeuCauKhacGrid
                                //.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
                                .reduce(function (sum, item) { return sum + item.BnThanhToan; }, 0);
                        case 'TongBnThanhToan':
                            return (this.tiepNhanBenhNhan.YeuCauKhacGrid
                                //.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
                                .reduce(function (sum, item) { return sum + item.BnThanhToan; }, 0)) + (this.tiepNhanBenhNhan.YeuCauKhacGrid
                                //.filter(o => o.IsGoiCoChietKhau == true)
                                .reduce(function (sum, item) { return sum + item.ThanhTienTrongGoi; }, 0));
                        case 'ThanhTienTrongGoi':
                            return this.tiepNhanBenhNhan.YeuCauKhacGrid
                                //.filter(o => o.GoiCoChietKhauId == goiCoChietkhauId)
                                .reduce(function (sum, item) { return sum + item.ThanhTienTrongGoi; }, 0);
                        case 'TongThanhTienTrongGoi':
                            return this.tiepNhanBenhNhan.YeuCauKhacGrid
                                //.filter(o => o.IsGoiCoChietKhau == true)
                                .reduce(function (sum, item) { return sum + item.ThanhTienTrongGoi; }, 0);
                        case 'TongThanhTienGoi':
                            return this.tiepNhanBenhNhan.YeuCauKhacGrid
                                .reduce(function (sum, item) { return sum + item.ThanhTien; }, 0);
                        case 'TongThanhTienBNTra':
                            return (this.tiepNhanBenhNhan.YeuCauKhacGrid
                                //.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
                                .reduce(function (sum, item) { return sum + item.BnThanhToan; }, 0)) + this.tiepNhanBenhNhan.YeuCauKhacGrid
                                //.filter(o => o.IsGoiCoChietKhau == true)
                                .reduce(function (sum, item) { return sum + item.ThanhTienTrongGoi; }, 0);
                    }
                };
                ;
                TiepNhanBenhNhanComponent.prototype.totalKyThuat = function (field) {
                    switch (field) {
                        case 'ThanhTien':
                            return this.tiepNhanBenhNhan.YeuCauKyThuatGrid.reduce(function (sum, item) { return sum + item.ThanhTien; }, 0);
                        case 'SoTienMG':
                            return this.tiepNhanBenhNhan.YeuCauKyThuatGrid.reduce(function (sum, item) { return sum + item.SoTienMG; }, 0);
                        case 'BnThanhToan':
                            return this.tiepNhanBenhNhan.YeuCauKyThuatGrid.reduce(function (sum, item) { return sum + item.BnThanhToan; }, 0);
                    }
                };
                ;
                TiepNhanBenhNhanComponent.prototype.setDataForDichVuKyThuat = function () {
                    this.gridDataKyThuatDisplay = {
                        data: this.tiepNhanBenhNhan.YeuCauKyThuatGrid,
                        total: this.tiepNhanBenhNhan.YeuCauKyThuatGrid.length
                    };
                };
                TiepNhanBenhNhanComponent.prototype.setDataForDichVuKhamBenh = function () {
                    this.gridDataKhamBenhDisplay = {
                        data: this.tiepNhanBenhNhan.YeuCauKhamBenhGrid,
                        total: this.tiepNhanBenhNhan.YeuCauKhamBenhGrid.length
                    };
                };
                TiepNhanBenhNhanComponent.prototype.setDataForDichVuKhac = function () {
                    var _this = this;
                    if (this.tiepNhanBenhNhan.YeuCauKhacGrid != null) {
                        if (this.tiepNhanBenhNhan.YeuCauKhacGrid.length == 0) {
                            this.showbuttonLuuVaInPhieuXetNghiem = false;
                        }
                        else {
                            if (this.showbuttonLuuVaInPhieuXetNghiem == false) {
                                this.tiepNhanBenhNhan.YeuCauKhacGrid.forEach(function (element) {
                                    _this.showbuttonLuuVaInPhieuXetNghiem = _this.dichVuSarsCoVs.includes(element.MaDichVuId);
                                });
                            }
                        }
                    }
                    this.gridDataKhacCoChietKhauArray = [];
                    this.gridDataKhacDisplay = {
                        data: this.tiepNhanBenhNhan.YeuCauKhacGrid,
                        //.filter(obj => obj.IsGoiCoChietKhau == false || obj.IsGoiCoChietKhau == null),
                        total: this.tiepNhanBenhNhan.YeuCauKhacGrid,
                    };
                    //this.cdRef.detectChanges();
                    //console.log("setDataForDichVuKhac = ", this.tiepNhanBenhNhan.YeuCauKhacGrid);
                    // let arrayNhomGoiCoChietKhau: string[] = [];
                    // this.gridDataKhacCoChietKhauDisplay = this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(obj => obj.IsGoiCoChietKhau == true);
                    // this.gridDataKhacCoChietKhauDisplay.forEach(e => {
                    //     if (!arrayNhomGoiCoChietKhau.some(o => o == e.TenGoiChietKhau)) {
                    //         arrayNhomGoiCoChietKhau.push(e.TenGoiChietKhau);
                    //     }
                    // });
                    // arrayNhomGoiCoChietKhau.forEach(e => {
                    //     let resultArray: ChiDinhDichVuGridVo[] = [];
                    //     this.gridDataKhacCoChietKhauDisplay.forEach(o => {
                    //         //let result = new ChiDinhDichVuGridVo();
                    //         if (e == o.TenGoiChietKhau) {
                    //             //result = o;
                    //             resultArray.push(o);
                    //         }
                    //     });
                    //     this.gridDataKhacCoChietKhauArray.push(process(resultArray, this.stateKhamBenh));
                    // });
                    //console.log("setDataForDichVuKhac = ", this.gridDataKhacCoChietKhauArray);
                    this.setSoLuongChoGridKhac();
                };
                TiepNhanBenhNhanComponent.prototype.setSoLuongChoGridKhac = function () {
                    this.soLuongGoiCoChietKhau = this.gridDataKhacCoChietKhauArray.length - 1;
                };
                TiepNhanBenhNhanComponent.prototype.DonGiaChange = function ($event) {
                    if (this.themChiDinhDichVuModel.SoLuong != undefined && this.themChiDinhDichVuModel.SoLuong != null
                        && $event != undefined && $event != null) {
                        this.themChiDinhDichVuModel.ThanhTien = this.themChiDinhDichVuModel.SoLuong * $event;
                    }
                    else {
                        this.themChiDinhDichVuModel.ThanhTien = null;
                    }
                };
                TiepNhanBenhNhanComponent.prototype.SoLuongChange = function ($event) {
                    if (this.themChiDinhDichVuModel.DonGia != undefined && this.themChiDinhDichVuModel.DonGia != null
                        && $event != undefined && $event != null) {
                        this.themChiDinhDichVuModel.ThanhTien = this.themChiDinhDichVuModel.DonGia * $event;
                    }
                    else {
                        this.themChiDinhDichVuModel.ThanhTien = null;
                    }
                };
                TiepNhanBenhNhanComponent.prototype.setThanhTienForDichVuModel = function () {
                    if (this.themChiDinhDichVuModel.DonGia != undefined && this.themChiDinhDichVuModel.DonGia != null
                        && this.themChiDinhDichVuModel.SoLuong != undefined && this.themChiDinhDichVuModel.SoLuong != null) {
                        this.themChiDinhDichVuModel.ThanhTien = this.themChiDinhDichVuModel.DonGia * this.themChiDinhDichVuModel.SoLuong;
                    }
                    else {
                        this.themChiDinhDichVuModel.ThanhTien = null;
                    }
                };
                TiepNhanBenhNhanComponent.prototype.LoaiGiaChange = function ($event) {
                    var _this = this;
                    var model = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["GetDonGiaVo"]();
                    if ($event != undefined && $event != null
                        && this.themChiDinhDichVuModel.MaDichVuId != null && this.themChiDinhDichVuModel.MaDichVuId != undefined) {
                        //console.log($event);
                        model.NhomGiaDichVuKhamBenhBenhVienId = $event;
                        model.DichVuKhamBenhBenhVienId = this.themChiDinhDichVuModel.MaDichVuId;
                        this.apiService.post("TiepNhanBenhNhan/GetDonGia", model).subscribe(function (resultData) {
                            if (resultData != undefined && resultData != null) {
                                _this.themChiDinhDichVuModel.DonGia = resultData;
                                _this.setThanhTienForDichVuModel();
                            }
                            else {
                                _this.themChiDinhDichVuModel.DonGia = null;
                                _this.setThanhTienForDichVuModel();
                            }
                        }, function (err) {
                        });
                    }
                    else {
                        this.themChiDinhDichVuModel.DonGia = null;
                    }
                };
                // MaDichVuKyThuatChange($event: number) {
                //     let model = new GetDonGiaVo();
                //     if ($event != undefined && $event != null) {
                //         this.validationErrors = null;
                //         //console.log($event);
                //         model.DichVuKhamBenhBenhVienId = $event;
                //         //model.NhomGiaDichVuKhamBenhBenhVienId = this.themChiDinhDichVuModel.LoaiGiaId;
                //         this.apiService.post<any>("TiepNhanBenhNhan/GetDonGiaKyThuat", model).subscribe(
                //             resultData => {
                //                 if (resultData != undefined && resultData != null) {
                //                     this.themChiDinhDichVuKyThuatModel.DonGia = resultData;
                //                     this.setThanhTienForDichVuKyThuatModel();
                //                 }
                //                 else {
                //                     this.themChiDinhDichVuKyThuatModel.DonGia = null;
                //                     this.setThanhTienForDichVuKyThuatModel();
                //                 }
                //             },
                //             (err: any) => {
                //             });
                //     }
                //     else {
                //         this.themChiDinhDichVuKyThuatModel.DonGia = null;
                //     }
                // }
                TiepNhanBenhNhanComponent.prototype.MaDichVuGoiSelectionChange = function ($event) {
                    //console.log("abc = ", $event);
                    if ($event != null && $event != undefined) {
                        if ($event.IsCoChietKhau) {
                            this.isGoiCoChietKhau = true;
                        }
                        else {
                            this.isGoiCoChietKhau = false;
                        }
                    }
                    else {
                        this.isGoiCoChietKhau = null;
                    }
                };
                TiepNhanBenhNhanComponent.prototype.onKeyMaDichVu = function ($event) {
                    if ($event.keyCode == 13) {
                        if (this.maDichVuDisabled != true) {
                            this.themChiDinhDichVuNew();
                        }
                        else {
                            this.maDichVuDisabled = false;
                        }
                    }
                    //this.countCheck++;
                };
                TiepNhanBenhNhanComponent.prototype.modelChangeDichVu = function ($event) {
                    //console.log("modelChangeDichVu = ", $event);
                    // if(this.maDichVuDisabled && $event != null && $event != undefined){
                    //     this.maDichVuDisabled = false;
                    // }
                };
                TiepNhanBenhNhanComponent.prototype.openCombobox = function ($event) {
                    //console.log("openCombobox = ", $event);
                    //this.countCheck = 0;
                    if ($event) {
                        this.maDichVuDisabled = true;
                    }
                    else {
                        this.maDichVuDisabled = false;
                    }
                };
                TiepNhanBenhNhanComponent.prototype.MaDichVuSelectionChange = function ($event) {
                    //console.log("MaDichVuSelectionChange = ", $event);
                    //let self = this;
                    this.themChiDinhDichVuModel.NoiThucHienId = null;
                    this.themChiDinhDichVuModel.SoLuong = 1;
                    if ($event != undefined && $event != null) {
                        //this.maDichVuPrev = $event.KeyId;
                        //this.countCheck++;
                        //console.log("MaDichVuSelectionChange = ", $event);
                        if ($event.Loai == "DVKT") {
                            this.MaDichVuChange($event.KeyId, 4, true);
                            this.loaiTiepNhan = 2;
                            // setTimeout(() => {
                            //     console.log("self.comboboxNoiThucHien2 = ", self.comboboxNoiThucHien2);
                            //     self.comboboxNoiThucHien2.getDataForLookup();
                            //   }, 500);
                        }
                        else if ($event.Loai == "DV Giường") {
                            this.MaDichVuChange($event.KeyId, 5);
                            this.loaiTiepNhan = 3;
                        }
                        else {
                            this.MaDichVuChange($event.KeyId);
                            this.loaiTiepNhan = 1;
                            //this.comboboxNoiThucHien1.getDataForLookup();
                        }
                    }
                    else {
                        this.themChiDinhDichVuModel.DonGia = null;
                        this.themChiDinhDichVuModel.NoiThucHienId = null;
                        this.setThanhTienForDichVuModel();
                        this.loaiTiepNhan = 1;
                    }
                    //
                    if ($event != null && $event != undefined) {
                        this.SetEnableDuocHuongBHYT($event.KeyId, this.loaiTiepNhan);
                    }
                    //this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
                    this.cdRef.detectChanges();
                };
                TiepNhanBenhNhanComponent.prototype.SetEnableDuocHuongBHYT = function (dichVuId, loai) {
                    var _this = this;
                    this.apiService.post("TiepNhanBenhNhan/DuocHuongBHYT?dichVuId=" + dichVuId + "&loai=" + loai).subscribe(function (resultData) {
                        if (resultData != null && resultData != undefined) {
                            _this.enableDuocHuongBHYT = resultData;
                            // if(resultData == false){
                            //     this.themChiDinhDichVuModel.DuocHuongBHYT = false;
                            // }
                            // else{
                            //     //this.themChiDinhDichVuModel.DuocHuongBHYT = true;
                            // }
                            _this.setDuocHuongBHYT(_this.tiepNhanBenhNhan.CoBHYT, _this.tiepNhanBenhNhan.LyDoVaoVien);
                        }
                    }, function (err) {
                    });
                };
                TiepNhanBenhNhanComponent.prototype.MaDichVuChange = function ($event, loaiDichVu, isCheckValidDonGia) {
                    var _this = this;
                    if (loaiDichVu === void 0) { loaiDichVu = 0; }
                    if (isCheckValidDonGia === void 0) { isCheckValidDonGia = false; }
                    //console.log("MaDichVuChange = ", $event);
                    var urlDefault = "TiepNhanBenhNhan/GetDonGia";
                    if (loaiDichVu == 4) {
                        urlDefault = "TiepNhanBenhNhan/GetDonGiaKyThuat";
                        // this.themChiDinhDichVuModel.LoaiGiaId = 1;
                        this.themChiDinhDichVuModel.LoaiGiaId = null;
                    }
                    else if (loaiDichVu == 5) {
                        urlDefault = "TiepNhanBenhNhan/GetDonGiaGiuongBenh";
                        this.themChiDinhDichVuModel.LoaiGiaId = 1;
                    }
                    var model = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["GetDonGiaVo"]();
                    if ($event != undefined && $event != null
                        && (loaiDichVu == 4 || (this.themChiDinhDichVuModel.LoaiGiaId != null && this.themChiDinhDichVuModel.LoaiGiaId != undefined))) {
                        //console.log($event);
                        model.DichVuKhamBenhBenhVienId = $event;
                        model.NhomGiaDichVuKhamBenhBenhVienId = this.themChiDinhDichVuModel.LoaiGiaId;
                        model.IsCheckValidDonGia = isCheckValidDonGia;
                        this.apiService.post(urlDefault, model).subscribe(function (resultData) {
                            if (resultData != undefined && resultData != null) {
                                if (loaiDichVu == 4) {
                                    _this.themChiDinhDichVuModel.LoaiGiaId = resultData.NhomGiaDichVuKhamBenhBenhVienId;
                                    _this.themChiDinhDichVuModel.DonGia = resultData.DonGia;
                                }
                                else {
                                    _this.themChiDinhDichVuModel.DonGia = resultData;
                                }
                                _this.setThanhTienForDichVuModel();
                            }
                            else {
                                _this.themChiDinhDichVuModel.DonGia = null;
                                _this.setThanhTienForDichVuModel();
                            }
                        }, function (err) {
                            if (err.Message != "Validation Failed") {
                                _this.notificationService.showError(err.Message);
                            }
                        });
                    }
                    else {
                        this.themChiDinhDichVuModel.DonGia = null;
                        this.setThanhTienForDichVuModel();
                    }
                };
                TiepNhanBenhNhanComponent.prototype.congTyBaoHiemChange = function ($event) {
                    var _this = this;
                    this.validationErrors = null;
                    this.apiService.post("TiepNhanBenhNhan/GetThongTinBHTN/?congTyBaoHiemTuNhanId=" + $event).subscribe(function (resultData) {
                        if (resultData != undefined && resultData != null) {
                            _this.themBaoHiemTuNhanModel.DiaChi = resultData.DiaChi;
                            _this.themBaoHiemTuNhanModel.SoDienThoai = resultData.SoDienThoai;
                        }
                        else {
                            _this.themBaoHiemTuNhanModel.DiaChi = null;
                            _this.themBaoHiemTuNhanModel.SoDienThoai = null;
                        }
                    }, function (err) {
                        _this.themBaoHiemTuNhanModel.DiaChi = null;
                        _this.themBaoHiemTuNhanModel.SoDienThoai = null;
                    });
                };
                TiepNhanBenhNhanComponent.prototype.huyBHTN = function () {
                    this.isUpdateGrid = false;
                    this.clearThemBHTN();
                };
                TiepNhanBenhNhanComponent.prototype.ThemBHTN = function () {
                    var _this = this;
                    this.validationErrors = null;
                    var isValid = this.checkValidAddBHTN(this.themBaoHiemTuNhanModel.CongTyBaoHiemTuNhanId);
                    if (isValid == false) {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["TiepNhanBenhNhanMessage"].MessageThemBHTN);
                        return;
                    }
                    this.apiService.post("TiepNhanBenhNhan/ThemThongTinBHTN", this.themBaoHiemTuNhanModel).subscribe(function (resultData) {
                        if (resultData != undefined && resultData != null) {
                            _this.lstBHTN.push(resultData);
                            _this.setValueForGridBHTN();
                            _this.clearThemBHTN();
                        }
                        else {
                        }
                    }, function (err) {
                        // self.validationErrors = err.ValidationErrors;
                        if (err != undefined && err.ValidationErrors != null) {
                            _this.validationErrors = err.ValidationErrors;
                        }
                        else if (err != undefined && err.Errors == null) {
                            //self.validationErrors.push({ "Message": err.Message });
                            _this.notificationService.showError(err.Message);
                        }
                    });
                };
                TiepNhanBenhNhanComponent.prototype.setValueForGridBHTN = function () {
                    //console.log(this.lstBHTN);
                    var index = 1;
                    this.lstBHTN.forEach(function (obj) {
                        obj.STT = index;
                        index = index + 1;
                    });
                    this.updateBHTN();
                    this.gridDataSourceBHTN = {
                        data: this.lstBHTN,
                        total: this.lstBHTN.length
                    };
                };
                TiepNhanBenhNhanComponent.prototype.updateBHTN = function () {
                    var _this = this;
                    this.tiepNhanBenhNhan.BaoHiemTuNhans = new Array();
                    this.lstBHTN.forEach(function (obj) {
                        var model = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["BaoHiemTuNhanViewModel"]();
                        model.BHTNCongTyBaoHiemId = obj.CongTyBaoHiemTuNhanId;
                        model.BHTNDiaChi = obj.DiaChi;
                        model.BHTNMaSoThe = obj.MaSoThe;
                        model.BHTNNgayHetHan = obj.NgayHetHan;
                        model.BHTNNgayHieuLuc = obj.NgayHieuLuc;
                        model.BHTNSoDienThoai = obj.SoDienThoai;
                        _this.tiepNhanBenhNhan.BaoHiemTuNhans.push(model);
                    });
                    //console.log("updateBHTN = ", this.tiepNhanBenhNhan.BaoHiemTuNhans);
                };
                TiepNhanBenhNhanComponent.prototype.enableUpdateGird = function (id) {
                    this.isUpdateGrid = true;
                    this.isIdNeedUpdate = id;
                };
                TiepNhanBenhNhanComponent.prototype.disableUpdateGrid = function () {
                    this.isUpdateGrid = false;
                    this.isIdNeedUpdate = null;
                    this.clearThemBHTN();
                };
                TiepNhanBenhNhanComponent.prototype.clearThemBHTN = function () {
                    this.themBaoHiemTuNhanModel = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["ThemBaoHiemTuNhan"]();
                };
                TiepNhanBenhNhanComponent.prototype.removeGridBHTN = function (id) {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: 'Xác nhận', Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].MessConfirm, ['xóa']) }
                    }).afterClosed().subscribe(function (result) {
                        if (result == 'Yes') {
                            var index = _this.lstBHTN.find(function (obj) { return obj.CongTyBaoHiemTuNhanId == id; });
                            _this.lstBHTN.splice(_this.lstBHTN.indexOf(index), 1);
                            _this.gridDataSourceBHTN = {
                                data: _this.lstBHTN,
                                total: _this.lstBHTN.length
                            };
                            _this.updateBHTN();
                        }
                    });
                };
                TiepNhanBenhNhanComponent.prototype.checkValidAddBHTN = function (id) {
                    //console.log("checkValidAddBHTN = ", this.lstBHTN,id);
                    var model = this.lstBHTN.find(function (obj) { return obj.CongTyBaoHiemTuNhanId == id; });
                    //console.log("checkValidAddBHTN = ", index);
                    if (model != undefined) {
                        return false;
                    }
                    return true;
                };
                TiepNhanBenhNhanComponent.prototype.updateGridBHTN = function (dataItem) {
                    this.isUpdateGrid = true;
                    //set
                    this.themBaoHiemTuNhanModel.CongTyBaoHiemTuNhanId = dataItem.CongTyBaoHiemTuNhanId;
                    this.themBaoHiemTuNhanModel.DiaChi = dataItem.DiaChi;
                    this.themBaoHiemTuNhanModel.MaSoThe = dataItem.MaSoThe;
                    this.themBaoHiemTuNhanModel.NgayHetHan = dataItem.NgayHetHan;
                    this.themBaoHiemTuNhanModel.NgayHieuLuc = dataItem.NgayHieuLuc;
                    this.themBaoHiemTuNhanModel.SoDienThoai = dataItem.SoDienThoai;
                    //this.themBaoHiemTuNhanModel.STT = dataItem.STT;
                    this.enableUpdateGird(this.themBaoHiemTuNhanModel.CongTyBaoHiemTuNhanId);
                };
                TiepNhanBenhNhanComponent.prototype.SuaBHTN = function () {
                    var _this = this;
                    var index = this.lstBHTN.find(function (obj) { return obj.CongTyBaoHiemTuNhanId == _this.isIdNeedUpdate; });
                    // this.lstBHTN.splice(this.lstBHTN.indexOf(index), 1);
                    // let isValid = this.checkValidAddBHTN(this.themBaoHiemTuNhanModel.CongTyBaoHiemTuNhanId);
                    if (this.isIdNeedUpdate != this.themBaoHiemTuNhanModel.CongTyBaoHiemTuNhanId) {
                        var isValid = this.checkValidAddBHTN(this.themBaoHiemTuNhanModel.CongTyBaoHiemTuNhanId);
                        if (isValid == false) {
                            this.disableUpdateGrid();
                            return;
                        }
                        ;
                    }
                    this.validationErrors = null;
                    //
                    //this.lstBHTN[this.lstBHTN.indexOf(index)] = this.themBaoHiemTuNhanModel;
                    this.lstBHTN.splice(this.lstBHTN.indexOf(index), 1);
                    this.apiService.post("TiepNhanBenhNhan/ThemThongTinBHTN", this.themBaoHiemTuNhanModel).subscribe(function (resultData) {
                        if (resultData != undefined && resultData != null) {
                            _this.lstBHTN.push(resultData);
                            _this.setValueForGridBHTN();
                            _this.disableUpdateGrid();
                        }
                        else {
                        }
                    }, function (err) {
                        // self.validationErrors = err.ValidationErrors;
                        if (err != undefined && err.ValidationErrors != null) {
                            _this.validationErrors = err.ValidationErrors;
                        }
                        else if (err != undefined && err.Errors == null) {
                            //self.validationErrors.push({ "Message": err.Message });
                            _this.notificationService.showError(err.Message);
                        }
                    });
                };
                TiepNhanBenhNhanComponent.prototype.removeGridKhamBenh = function (dataItem) {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: 'Xác nhận', Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].MessConfirm, ['xóa']) }
                    }).afterClosed().subscribe(function (result) {
                        if (result == 'Yes') {
                            //console.log("removeGridKhamBenh = ", dataItem);
                            _this.tiepNhanBenhNhan.YeuCauKhamBenhGrid.splice(_this.tiepNhanBenhNhan.YeuCauKhamBenhGrid.indexOf(dataItem), 1);
                            _this.setDataForDichVuKhamBenh();
                            _this.setGiaBHYT();
                            _this.refreshGrid();
                        }
                    });
                };
                TiepNhanBenhNhanComponent.prototype.removeGridKyThuat = function (dataItem) {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: 'Xác nhận', Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].MessConfirm, ['xóa']) }
                    }).afterClosed().subscribe(function (result) {
                        if (result == 'Yes') {
                            //console.log("removeGridKhamBenh = ", dataItem);
                            _this.tiepNhanBenhNhan.YeuCauKyThuatGrid.splice(_this.tiepNhanBenhNhan.YeuCauKyThuatGrid.indexOf(dataItem), 1);
                            _this.setDataForDichVuKyThuat();
                            _this.refreshGrid();
                        }
                    });
                };
                TiepNhanBenhNhanComponent.prototype.removeGridKhac = function (dataItem) {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: 'Xác nhận', Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].MessConfirm, ['xóa']) }
                    }).afterClosed().subscribe(function (result) {
                        if (result == 'Yes') {
                            //console.log("removeGridKhac = ", dataItem);
                            //this.tiepNhanBenhNhan.YeuCauKhacGrid.splice(this.tiepNhanBenhNhan.YeuCauKhacGrid.indexOf(dataItem), 1);
                            _this.tiepNhanBenhNhan.YeuCauKhacGrid = _this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(function (obj) { return obj != dataItem; });
                            _this.setDataForDichVuKhac();
                            _this.setGiaBHYT();
                            _this.refreshGrid();
                            //console.log("removeGridKhac = ", this.tiepNhanBenhNhan.YeuCauKhacGrid);
                            //this.cdRef.detectChanges();
                            _this.removeDanhSachTongCongFromDanhSachDaChon(dataItem);
                            _this.notificationService.showSuccess(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["TiepNhanBenhNhanMessage"].MessageRemoveDichVuSuccessfully);
                        }
                    });
                };
                TiepNhanBenhNhanComponent.prototype.removeGridKhacCoChietKhau = function (item) {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: 'Xác nhận', Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].MessConfirm, ['xóa']) }
                    }).afterClosed().subscribe(function (result) {
                        if (result == 'Yes') {
                            var goiCoChietKhauId_1 = item.data[0].items[0].GoiCoChietKhauId;
                            //console.log("removeGridKhacCoChietKhau1 = ", goiCoChietKhauId);
                            _this.tiepNhanBenhNhan.YeuCauKhacGrid = _this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(function (obj) { return obj.GoiCoChietKhauId != goiCoChietKhauId_1; });
                            // let index = this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(obj => obj.GoiCoChietKhauId == goiCoChietKhauId);
                            // index.forEach(obj => {
                            //   this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(o => o.GoiCoChietKhauId == goiCoChietKhauId)
                            //         .splice(this.tiepNhanBenhNhan.YeuCauKhacGrid.indexOf(obj), 1);
                            // });
                            //console.log("removeGridKhacCoChietKhau = ", index);
                            _this.setDataForDichVuKhac();
                            _this.refreshGrid();
                        }
                    });
                };
                // noiThucHienGridChange($event, dataItem) {
                //     //console.log("noiThucHienGridChange = ", $event, dataItem);
                // }
                TiepNhanBenhNhanComponent.prototype.coBHYTChange = function ($event) {
                    //console.log("coBHYTChange = ", $event);
                    // if ($event == true && this.tiepNhanBenhNhan.LyDoVaoVien == 1) {
                    //     this.themChiDinhDichVuModel.DuocHuongBHYT = true;
                    //     this.themChiDinhDichVuModel.BHYTMucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
                    // }
                    // else {
                    //     this.themChiDinhDichVuModel.DuocHuongBHYT = false;
                    //     this.themChiDinhDichVuModel.BHYTMucHuong = null;
                    //     this.removeBHYTForGridChiDinhDichVu();
                    // }
                    if ($event != true) {
                        this.tiepNhanBenhNhan.TuNhap = false;
                        this.HoVaTenTextbox.focus();
                        this.tiepNhanBenhNhan.LyDoVaoVien = null;
                    }
                    else {
                        this.tiepNhanBenhNhan.LyDoVaoVien = 1;
                    }
                    this.xuLyKiemTraBenhNhanDuDieuKienTaoMoiYCTN($event);
                    this.setDuocHuongBHYT($event, this.tiepNhanBenhNhan.LyDoVaoVien);
                };
                TiepNhanBenhNhanComponent.prototype.tuNhapChange = function ($event) {
                    if ($event == true) {
                        this.tiepNhanBenhNhan.CoBHYT = true;
                        this.tiepNhanBenhNhan.IsCheckedBHYT = null;
                        this.tiepNhanBenhNhan.LyDoVaoVien = 1;
                    }
                    if ($event == false) {
                        this.tiepNhanBenhNhan.CoBHYT = false;
                        this.coBHYTChange(false);
                        this.tiepNhanBenhNhan.LyDoVaoVien = null;
                    }
                };
                TiepNhanBenhNhanComponent.prototype.mucHuongChange = function ($event) {
                    this.tiepNhanBenhNhan.BHYTMucHuong = $event;
                    this.setGiaBHYT();
                };
                TiepNhanBenhNhanComponent.prototype.blurNgayHetHieuLuc = function ($event) {
                    this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
                };
                TiepNhanBenhNhanComponent.prototype.onKeyNgayHetHieuLuc = function ($event) {
                    if ($event.keyCode === 13) {
                        this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
                    }
                };
                TiepNhanBenhNhanComponent.prototype.onKeyNgayCotHieuLuc = function ($event) {
                    if ($event.keyCode === 13) {
                        this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
                    }
                };
                TiepNhanBenhNhanComponent.prototype.blurNgayCoHieuLuc = function ($event) {
                    this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
                };
                TiepNhanBenhNhanComponent.prototype.blurBHYTDiaChi = function ($event) {
                    this.setDiaChiBHYTForModel(this.tiepNhanBenhNhan.BHYTDiaChi);
                };
                TiepNhanBenhNhanComponent.prototype.onKeyBHYTDiaChi = function ($event) {
                    if ($event.keyCode === 13) {
                        this.setDiaChiBHYTForModel(this.tiepNhanBenhNhan.BHYTDiaChi);
                    }
                };
                TiepNhanBenhNhanComponent.prototype.blurMaNoiDKBD = function ($event) {
                    this.setNoiDKBD(this.tiepNhanBenhNhan.BHYTMaDKBD);
                };
                TiepNhanBenhNhanComponent.prototype.onKeyMaNoiDKBD = function ($event) {
                    if ($event.keyCode === 13) {
                        this.setNoiDKBD(this.tiepNhanBenhNhan.BHYTMaDKBD);
                    }
                };
                TiepNhanBenhNhanComponent.prototype.setNoiDKBD = function (ma) {
                    var _this = this;
                    this.apiService.post("TiepNhanBenhNhan/GetNoiDangKyBaoHiem?ma=" + ma).subscribe(function (resultData) {
                        _this.tiepNhanBenhNhan.NoiDangKyBHYT = resultData;
                    }, function () {
                        //return null;
                        //console.log("error")
                    });
                };
                TiepNhanBenhNhanComponent.prototype.lyDoVaoVienChange = function ($event) {
                    //console.log("tuyenChuyenChange = ", $event);
                    // if ($event == 1 && this.tiepNhanBenhNhan.CoBHYT == true) {
                    //     this.themChiDinhDichVuModel.DuocHuongBHYT = true;
                    //     this.themChiDinhDichVuModel.BHYTMucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
                    //     this.addBHYTForGridChiDinhDichVu();
                    // }
                    // else {
                    //     this.themChiDinhDichVuModel.DuocHuongBHYT = false;
                    //     this.themChiDinhDichVuModel.BHYTMucHuong = null;
                    //     this.removeBHYTForGridChiDinhDichVu();
                    // }
                    this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, $event);
                };
                TiepNhanBenhNhanComponent.prototype.onTabSelect = function ($event) {
                    this.removeThemDichVuValue();
                    this.removeThemGoiValue();
                    //console.log("onTabSelect = ", $event);
                    if ($event != null && $event.index == 2 && this.under6yearsold) {
                        this.cloneDiaChiNguoiGiamHo();
                    }
                    if (this.under6yearsold == false) {
                        this.cloneDiaChiNguoiGiamLonHon6Tuoi();
                    }
                };
                TiepNhanBenhNhanComponent.prototype.lichSuKBC = function () {
                    var dialogRef = this.dialog.open(_tiep_nhan_benh_nhan_popup_lich_su_kcb_tiep_nhan_benh_nhan_popup_lich_su_kcb_component__WEBPACK_IMPORTED_MODULE_31__["TiepNhanBenhNhanPopupLichSuKcbComponent"], {
                        disableClose: false,
                        width: '1000px',
                        height: '409px',
                        data: this.lichSuKCB,
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                    });
                };
                TiepNhanBenhNhanComponent.prototype.lichSuKiemTraTheBHYT = function () {
                    var dialogRef = this.dialog.open(_tiep_nhan_benh_nhan_popup_lich_su_kiem_tra_the_bhyt_tiep_nhan_benh_nhan_popup_lich_su_kiem_tra_the_bhyt_component__WEBPACK_IMPORTED_MODULE_34__["TiepNhanBenhNhanPopupLichSuKiemTraTheBhytComponent"], {
                        disableClose: false,
                        width: '1200px',
                        height: '500px',
                        data: this.lichSuKiemTraTheBHYTGrid,
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                    });
                };
                TiepNhanBenhNhanComponent.prototype.duocHuongBHYTChange = function ($event, maDichVuId, nhom) {
                    var item = this.tiepNhanBenhNhan.YeuCauKhacGrid
                        .filter(function (o) { return o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null; })
                        .find(function (obj) { return obj.MaDichVuId == maDichVuId && obj.Nhom == nhom; });
                    //console.log("duocHuongBHYTChange = ", maDichVuId, nhom, $event, item);
                    item.DuocHuongBHYT = $event;
                    if ($event) {
                        item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100;
                        item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
                        item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
                    }
                    else {
                        item.BHYTThanhToan = 0;
                        item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
                        item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
                    }
                    this.setGiaBHYT();
                    //this.setDataForDichVuKhac();
                    //this.refreshGrid();
                };
                TiepNhanBenhNhanComponent.prototype.setThongTinTaiKhoanBenhNhan = function (id) {
                    var _this = this;
                    this.apiService.post("TiepNhanBenhNhan/GetThongTinTaiKhoanBenhNhan?idbenhNhan=" + id).subscribe(function (resultData) {
                        _this.thongTinTaiKhoanBenhNhan = resultData;
                    }, function () {
                        //return null;
                        //console.log("error")
                    });
                };
                TiepNhanBenhNhanComponent.prototype.timKiemBenhNhanPopup = function () {
                    var _this = this;
                    var dataTimKiem = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["DataTimKiem"]();
                    dataTimKiem.searchBenhNhan = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["TimKiemBenhNhanGridVo"]();
                    dataTimKiem.searchBenhNhan = this.modelTimKiemBenhNhan;
                    dataTimKiem.data = new Array();
                    dataTimKiem.data = this.lstBenhNhan;
                    var dialogRef = this.dialog.open(_popup_tim_kiem_benh_nhan_popup_tim_kiem_benh_nhan_component__WEBPACK_IMPORTED_MODULE_32__["PopupTimKiemBenhNhanComponent"], {
                        disableClose: false,
                        width: '1400px',
                        height: '600px',
                        data: dataTimKiem,
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        if (result != null && result != undefined) {
                            // console.log("data:", result)
                            _this.benhNhanIdPopup = result.Id;
                            _this.coYeuCauGoiDichVu = result.CoYeuCauGoiDichVu;
                            //this.checkTNBNToDay(result.BHYTMaSoThe, result.Id);
                            _this.checkTNBNToDay(result.BHYTMaSoThe, result.Id, true);
                            _this.validationErrors = null;
                            //this.setThongTinTaiKhoanBenhNhan(result.Id);
                            //console.log("timKiemBenhNhanPopup = ", result);
                            //this.cdRef.detectChanges();
                            //set bhtn
                            if (result.BaoHiemTuNhans.length > 0) {
                                _this.lstBHTN = new Array();
                                result.BaoHiemTuNhans.forEach(function (item) {
                                    var model = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["ThemBaoHiemTuNhanGridVo"]();
                                    model.CongTyBaoHiemTuNhanId = item.BHTNCongTyBaoHiemId;
                                    model.CongTyDisplay = item.CongTyDisplay;
                                    model.DiaChi = item.BHTNDiaChi;
                                    model.MaSoThe = item.BHTNMaSoThe;
                                    model.NgayHetHan = item.BHTNNgayHetHan;
                                    var dateNgayHetHan = new Date(model.NgayHetHan);
                                    model.NgayHetHanDisplay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].formatDate(dateNgayHetHan, "dd/mm/yyyy");
                                    model.NgayHieuLuc = item.BHTNNgayHieuLuc;
                                    var dateNgayHieuLuc = new Date(model.NgayHieuLuc);
                                    model.NgayHieuLucDisplay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].formatDate(dateNgayHieuLuc, "dd/mm/yyyy");
                                    model.SoDienThoai = item.BHTNSoDienThoai;
                                    _this.lstBHTN.push(model);
                                });
                                _this.setValueForGridBHTN();
                            }
                            //set benh nhan
                            _this.tiepNhanBenhNhan.BenhNhanId = result.Id;
                            _this.benhNhanId = result.Id;
                            //người giám hộ
                            _this.tiepNhanBenhNhan.NguoiLienHeHoTen = result.NguoiLienHeHoTen;
                            _this.tiepNhanBenhNhan.NguoiLienHeQuanHeNhanThanId = result.NguoiLienHeQuanHeNhanThanId;
                            _this.tiepNhanBenhNhan.NguoiLienHeSoDienThoai = result.NguoiLienHeSoDienThoai;
                            _this.tiepNhanBenhNhan.NguoiLienHeEmail = result.NguoiLienHeEmail;
                            _this.tiepNhanBenhNhan.NguoiLienHeTinhThanhId = result.NguoiLienHeTinhThanhId;
                            _this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId = result.NguoiLienHeQuanHuyenId;
                            _this.tiepNhanBenhNhan.NguoiLienHePhuongXaId = result.NguoiLienHePhuongXaId;
                            _this.tiepNhanBenhNhan.NguoiLienHeDiaChi = result.NguoiLienHeDiaChi;
                            //Nơi giới thiệu , hiển thị nơi giới thiệu              
                            _this.tiepNhanBenhNhan.HinhThucDenId = result.HinhThucDenId;
                            _this.tiepNhanBenhNhan.NoiGioiThieuId = result.NoiGioiThieuId;
                            //Do quận huyện nó không bind do cơ chế chạy trước sau nên ta set lại cho comboxQuanHuyen này
                            //this.bindComboboxQuanHuyen(result)
                            _this.getDanhSachGoiBenhNhan(_this.benhNhanId);
                            _this.setValueFromBenhNhanToYeuCauTiepNhan(result);
                            _this.timKiemBenhNhan(_this.modelTimKiemBenhNhan);
                            _this.xuLyKiemTraBenhNhanDuDieuKienTaoMoiYCTN();
                        }
                    });
                };
                TiepNhanBenhNhanComponent.prototype.checkTNBNToDay = function (maThe, id, khongDongPopup) {
                    if (id === void 0) { id = 0; }
                    if (khongDongPopup === void 0) { khongDongPopup = false; }
                    // Hàm này lúc dev cũ viết nhằm mục đích là tự động chuyển sang trang cập nhật YCTN nếu API trả về id YCTN, 
                    // Nhưng theo logic mới thì đã bỏ tự động chuyển trang, nếu muốn chuyển sang cập nhật YCTN phải chọn button ở góc dưới cùng bên trái
                    // var idOld = this.route.snapshot.params.id;
                    // if (idOld == null || idOld <= 0) {
                    //     this.apiService.post<any>("TiepNhanBenhNhan/GetYeuCauTiepNhanOfBenhNhan?maSoBHYT=" + maThe + "&id=" + id).subscribe(
                    //         resultData => {
                    //             if (resultData != null) {
                    //                 if(!khongDongPopup)
                    //                 {
                    //                     this.dialog.closeAll();
                    //                 }
                    //                 // cập nhật điều kiện tạo mới yctn
                    //                 //this.router.navigate(['danh-sach-tiep-nhan/chinh-sua/' + resultData]);
                    //                 // chuyển về xử lý chung ở function kiểm tra lỗi tạo mới YCTN
                    //                 //this.urlPageUpdateYCTN = 'danh-sach-tiep-nhan/chinh-sua/' + resultData;
                    //             }
                    //             else
                    //             {
                    //                 // cập nhật điều kiện tạo mới yctn
                    //                 //this.urlPageUpdateYCTN = null;
                    //             }
                    //         },
                    //         () => {
                    //             //return null;
                    //             //console.log("error")
                    //         });
                    // }
                };
                TiepNhanBenhNhanComponent.prototype.setValueFromBenhNhanToYeuCauTiepNhan = function (benhNhan) {
                    var _this = this;
                    this.tiepNhanBenhNhan.BHYTMaDKBD = benhNhan.BHYTMaDKBD;
                    this.tiepNhanBenhNhan.BHYTDiaChi = benhNhan.BHYTMaDKBD;
                    this.tiepNhanBenhNhan.BHYTMaSoThe = benhNhan.BHYTMaSoThe;
                    this.tiepNhanBenhNhan.BHYTNgayDu5Nam = benhNhan.BHYTNgayDu5Nam;
                    this.tiepNhanBenhNhan.BHYTDuocMienCungChiTra = benhNhan.BHYTDuocMienCungChiTra;
                    this.tiepNhanBenhNhan.BHYTNgayHieuLuc = benhNhan.BHYTNgayHieuLuc;
                    this.tiepNhanBenhNhan.BHYTNgayHetHan = benhNhan.BHYTNgayHetHan;
                    this.tiepNhanBenhNhan.BHYTCoQuanBHXH = benhNhan.BHYTCoQuanBHXH;
                    this.tiepNhanBenhNhan.CoBHTN = benhNhan.CoBHTN;
                    this.tiepNhanBenhNhan.CoBHYT = benhNhan.CoBHYT;
                    if (this.tiepNhanBenhNhan.CoBHYT == true) {
                        this.tiepNhanBenhNhan.LyDoVaoVien = 1;
                    }
                    else {
                        this.tiepNhanBenhNhan.LyDoVaoVien = null;
                    }
                    this.tiepNhanBenhNhan.NgaySinh = benhNhan.NgaySinh;
                    this.tiepNhanBenhNhan.NamSinh = benhNhan.NamSinh;
                    this.tiepNhanBenhNhan.ThangSinh = benhNhan.ThangSinh;
                    this.tiepNhanBenhNhan.NgayThangNamSinh = benhNhan.NgayThangNamSinh;
                    this.tiepNhanBenhNhan.HoTen = benhNhan.HoTen;
                    this.getAge(this.tiepNhanBenhNhan.NgayThangNamSinh, new Date);
                    this.tiepNhanBenhNhan.TinhThanhId = 0;
                    var self = this;
                    setTimeout(function () {
                        self.tiepNhanBenhNhan.TinhThanhId = benhNhan.TinhThanhId;
                        self.tiepNhanBenhNhan.QuanHuyenId = benhNhan.QuanHuyenId;
                        self.tiepNhanBenhNhan.PhuongXaId = benhNhan.PhuongXaId;
                    }, 1000);
                    this.tiepNhanBenhNhan.QuocTichId = benhNhan.QuocTichId;
                    //this.tiepNhanBenhNhan.DanTocId = benhNhan.DanTocId;
                    this.tiepNhanBenhNhan.DiaChi = benhNhan.DiaChi;
                    this.tiepNhanBenhNhan.SoDienThoai = benhNhan.SoDienThoai;
                    this.tiepNhanBenhNhan.SoChungMinhThu = benhNhan.SoChungMinhThu;
                    this.tiepNhanBenhNhan.Email = benhNhan.Email;
                    this.tiepNhanBenhNhan.NgheNghiepId = benhNhan.NgheNghiepId;
                    this.tiepNhanBenhNhan.GioiTinh = benhNhan.GioiTinh;
                    //this.tiepNhanBenhNhan.BHYTMaKhuVuc = benhNhan.BHYTMaKhuVuc;
                    this.tiepNhanBenhNhan.BHYTNgayDuocMienCungChiTra = benhNhan.BHYTNgayDuocMienCungChiTra;
                    this.tiepNhanBenhNhan.NoiLamViec = benhNhan.NoiLamViec;
                    //BHYT information
                    // this.tiepNhanBenhNhan.NgayThangNamSinhDisplay = benhNhan.NgayThangNamSinhDisplay;
                    // this.tiepNhanBenhNhan.NgayDu5NamDisplay = benhNhan.BHYTNgayDu5NamDisplay;
                    // this.apiService.post<string>("TiepNhanBenhNhan/GetNoiDangKyBaoHiem?ma=" + benhNhan.BHYTMaDKBD).subscribe(
                    //     resultData => {
                    //         this.tiepNhanBenhNhan.NoiDangKyBHYT = resultData;
                    //     },
                    //     () => {
                    //         //return null;
                    //         //console.log("error")
                    //     });
                    if (benhNhan.CoBHYT != true)
                        return;
                    //if (this.isCheckedBHYT == true) return;
                    this.isCheckedBHYT = true;
                    this.thongTinBenhNhan.MaThe = this.tiepNhanBenhNhan.BHYTMaSoThe;
                    this.thongTinBenhNhan.TenBenhNhan = this.tiepNhanBenhNhan.HoTen;
                    this.thongTinBenhNhan.NgaySinh = this.tiepNhanBenhNhan.NgayThangNamSinh;
                    this.thongTinBenhNhan.NamSinh = this.tiepNhanBenhNhan.NamSinh;
                    var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_18__["DatePipe"]("en-US");
                    this.thongTinBenhNhan.NgaySinhDisplay = datePipe.transform(this.tiepNhanBenhNhan.NgayThangNamSinh, 'dd/MM/yyyy');
                    if (this.thongTinBenhNhan.MaThe != null && this.thongTinBenhNhan.TenBenhNhan != null
                        && (this.thongTinBenhNhan.NgaySinh != null || this.thongTinBenhNhan.NamSinh != null)) {
                        //console.log("thongTinBenhNhan = ", this.thongTinBenhNhan);
                        var dialogRef = this.dialog.open(_tiep_nhan_benh_nhan_cho_quet_tiep_nhan_benh_nhan_cho_quet_component__WEBPACK_IMPORTED_MODULE_17__["TiepNhanBenhNhanChoQuetComponent"], {
                            disableClose: true,
                            width: '500px',
                            height: '250px',
                            data: this.thongTinBenhNhan,
                        });
                        dialogRef.afterClosed().subscribe(function (result) {
                            //console.log("close = ", result);
                            if (result === undefined) {
                                //cheat vi khong hieu sao ra duoc
                            }
                            // else if (result == null || (result != null && result.maKetQua == "050")) {
                            else if (result == null || (result != null && result.maKetQua !== "000" && result.maKetQua !== "004")) {
                                //this.clearData();
                                //this.notificationService.showError(TiepNhanBenhNhanMessage.MessageSaiThongTinBenhNhan);
                                //
                                _this.tiepNhanBenhNhan.MessageErrFromBHYT = result != null ? result.ghiChu : null;
                                var dialogRef_4 = _this.dialog.open(_tiep_nhan_benh_nhan_error_tiep_nhan_benh_nhan_error_component__WEBPACK_IMPORTED_MODULE_22__["TiepNhanBenhNhanErrorComponent"], {
                                    disableClose: false,
                                    width: '700px',
                                    height: '300px',
                                    data: _this.tiepNhanBenhNhan,
                                });
                                dialogRef_4.afterClosed().subscribe(function (result) {
                                    //document.getElementById("SoTheBHYTisAutoFocus").focus();
                                    _this.isCheckedBHYT = false;
                                    if (result == 2) {
                                        _this.tiepNhanBenhNhan.IsCheckedBHYT = null;
                                        _this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_21__["TinhTrangThe"].KhongXacDinh;
                                        _this.tiepNhanBenhNhan.CoBHYT = true;
                                        _this.tiepNhanBenhNhan.TuNhap = true;
                                    }
                                    else if (result == 1) {
                                        _this.tiepNhanBenhNhan.CoBHYT = false;
                                        _this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_21__["TinhTrangThe"].KhongXacDinh;
                                        _this.tiepNhanBenhNhan.IsCheckedBHYT = false;
                                    }
                                    else if (result != undefined) {
                                        //console.log("------- ", result);
                                        _this.setValueBHYT(result);
                                    }
                                });
                                //
                            }
                            else {
                                //console.log("onkey = ",event, this.tiepNhanBenhNhan.BHYTMaSoThe)
                                _this.isCheckedBHYT = false;
                                _this.setValueBHYT(result);
                            }
                        });
                    }
                    else {
                        this.isCheckedBHYT = false;
                    }
                    /////////////
                };
                TiepNhanBenhNhanComponent.prototype.onSelectChangeVoucher = function (voucherId) {
                    var _this = this;
                    var last = voucherId[voucherId.length - 1];
                    if (last == undefined)
                        this.loaiVoucher = 0;
                    this.apiService.post("ThuNgan/GetMaVoucher?loaiVoucher=" + this.loaiVoucher).subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.voucherLookupItemVo = resultData;
                            _this.voucherLookupItemVo.forEach(function (element) {
                                if (element.KeyId == last) {
                                    _this.loaiVoucher = element.LoaiVoucher;
                                }
                            });
                        }
                    });
                };
                TiepNhanBenhNhanComponent.prototype.getDanhSachGoiBenhNhan = function (benhNhanId) {
                    var _this = this;
                    this.apiService.post("TiepNhanBenhNhan/GetMarketingForBenhNhan?benhNhanId=" + benhNhanId).subscribe(function (resultData) {
                        _this.danhSachGoiDaChonTrongYCTN = resultData;
                        if (resultData !== null && resultData !== undefined && resultData.length > 0) {
                            _this.suDungGoiMarketingModelTemp = true;
                            _this.disabledCheckboxMarketing = true;
                        }
                        else {
                            _this.suDungGoiMarketingModelTemp = false;
                            _this.disabledCheckboxMarketing = false;
                        }
                    });
                };
                TiepNhanBenhNhanComponent.prototype.suDungGoiMarketingChange = function (event) {
                    //console.log("suDungGoiMarketingChange = ", event);
                    if (event) {
                        this.openPopupGoiDichVu();
                    }
                };
                TiepNhanBenhNhanComponent.prototype.showPopupMarketingWithHyperlink = function (item) {
                    //console.log("showPopupMarketingWithHyperlink = ", item);
                    this.openPopupGoiDichVu(item);
                };
                TiepNhanBenhNhanComponent.prototype.removeGoi = function (item) {
                    var _this = this;
                    //console.log("removeGoi = ", item, this.tiepNhanBenhNhan.YeuCauKhacGrid);
                    if (this.isActiveAction != null) {
                        this.dialog.closeAll();
                        this.isActiveAction = null;
                    }
                    this.isActiveAction = this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["TiepNhanBenhNhanMessage"].MessageConfirmRemoveGoi }
                    }).afterClosed().subscribe(function (result) {
                        if (result == "Yes") {
                            _this.removeGoiOnDichVu(item);
                        }
                        else {
                            _this.removeDichVuGoi(item);
                        }
                    });
                    this.removeGoiDaChon(item.ChuongTrinhGoiDichVuId);
                };
                TiepNhanBenhNhanComponent.prototype.removeGoiDaChon = function (id) {
                    this.danhSachGoiDaChonTrongYCTN = this.danhSachGoiDaChonTrongYCTN.filter(function (o) { return o.ChuongTrinhGoiDichVuId != id; });
                    this.danhSachDichVuDaChonTrongLanPopup = this.danhSachDichVuDaChonTrongLanPopup.filter(function (o) { return o.ChuongTrinhGoiDichVuId != id; });
                };
                TiepNhanBenhNhanComponent.prototype.removeDichVuGoi = function (item) {
                    console.log("removeDichVuGoi = ", item, this.tiepNhanBenhNhan.YeuCauKhacGrid);
                    this.tiepNhanBenhNhan.YeuCauKhacGrid = this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(function (o) { return o.GoiCoChietKhauId != item.ChuongTrinhGoiDichVuId; });
                    this.setDataForDichVuKhac();
                    this.refreshGrid();
                };
                TiepNhanBenhNhanComponent.prototype.removeGoiOnDichVu = function (item) {
                    // this.tiepNhanBenhNhan.YeuCauKhacGrid.forEach(o => {
                    //     if(item.ChuongTrinhGoiDichVuId == o.GoiCoChietKhauId){
                    //         o.
                    //     }
                    // });
                    for (var i = 0; i < this.tiepNhanBenhNhan.YeuCauKhacGrid.length; i++) {
                        var object = this.tiepNhanBenhNhan.YeuCauKhacGrid[i];
                        if (item.ChuongTrinhGoiDichVuId == object.GoiCoChietKhauId) {
                            object.GoiCoChietKhauId = null;
                            object.IsGoiCoChietKhau = false;
                        }
                    }
                    this.setDataForDichVuKhac();
                    this.refreshGrid();
                };
                TiepNhanBenhNhanComponent.prototype.openPopupGoiDichVu = function (danhSachGoiDaChon) {
                    var _this = this;
                    if (danhSachGoiDaChon === void 0) { danhSachGoiDaChon = null; }
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].View)) {
                        self.dialog.open(_popup_marketing_tiep_nhan_benh_nhan_popup_marketing_tiep_nhan_benh_nhan_component__WEBPACK_IMPORTED_MODULE_36__["PopupMarketingTiepNhanBenhNhanComponent"], {
                            disableClose: false,
                            width: '1800px',
                            data: {
                                data: this.danhSachGoiDaChonTrongYCTN, benhNhanId: this.tiepNhanBenhNhan.BenhNhanId,
                                danhSachDichVuGoiDaChon: this.danhSachDichVuDaChonTrongLanPopup, itemPopup: danhSachGoiDaChon,
                                danhSachDichVuDangCo: this.tiepNhanBenhNhan.YeuCauKhacGrid
                            }
                        }).afterClosed().subscribe(function (result) {
                            //console.log('openPopupGoiDichVu', result);
                            if (result != undefined && result.length > 0) {
                                _this.danhSachDichVuGoiDaChon = new Array();
                                result.forEach(function (e) {
                                    var item = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["ThemChiDinhDichVu"]();
                                    item.LaGoi = true;
                                    item.TenNhomDichVu = e.TenNhomDichVu;
                                    item.MaDichVuId = e.DichVuId;
                                    item.SoLuong = e.SoLuongDungLanNay;
                                    item.chuongTrinhGoiDichVuId = e.ChuongTrinhGoiDichVuId;
                                    item.YeuCauGoiDichVuId = e.YeuCauGoiDichVuId;
                                    //cheat cho lẹ
                                    item.DuocHuongBHYT = _this.themChiDinhDichVuModel.DuocHuongBHYT;
                                    _this.danhSachDichVuGoiDaChon.push(item);
                                });
                                _this.themChiDinhDichVuKhacKhamBenh(6, _this.danhSachDichVuGoiDaChon);
                                _this.copyDanhSachTongCong(result);
                                _this.updateDanhSachGoiChon(result);
                            }
                            if (result == undefined && _this.disabledCheckboxMarketing != true && _this.danhSachDichVuDaChonTrongLanPopup.length == 0) {
                                _this.suDungGoiMarketingModelTemp = false;
                            }
                            // if(yeuCauGoiMarketing != undefined && yeuCauGoiMarketing != null && yeuCauGoiMarketing != "")
                            // {
                            // }
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                TiepNhanBenhNhanComponent.prototype.addDanhSachTongCongFromDanhSachDaChon = function (data) {
                    var _this = this;
                    data.forEach(function (o) {
                        var item = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["DanhSachDichVuChonTrongLanPopup"]();
                        item.TenNhomDichVu = o.TenNhomDichVu;
                        item.DichVuId = o.MaDichVuId;
                        item.SoLuongDungLanNay = o.SoLuong;
                        item.ChuongTrinhGoiDichVuId = o.chuongTrinhGoiDichVuId;
                        item.BenhNhanId = _this.tiepNhanBenhNhan.BenhNhanId;
                        item.YeuCauGoiDichVuId = o.YeuCauGoiDichVuId;
                        item.ThuocGoi = o.ThuocGoi;
                        _this.danhSachDichVuDaChonTrongLanPopup.push(item);
                    });
                };
                TiepNhanBenhNhanComponent.prototype.removeDanhSachTongCongFromDanhSachDaChon = function (data) {
                    //console.log("removeDanhSachTongCongFromDanhSachDaChon = ", data, this.danhSachDichVuDaChonTrongLanPopup);
                    if (data.IsGoiCoChietKhau) {
                        var item_1 = this.danhSachDichVuDaChonTrongLanPopup.filter(function (e) { return e.YeuCauGoiDichVuId == data.GoiCoChietKhauIdTemp && e.DichVuId == data.MaDichVuId; })[0];
                        // this.danhSachDichVuDaChonTrongLanPopup 
                        // = this.danhSachDichVuDaChonTrongLanPopup.filter(e => e.ChuongTrinhGoiDichVuId != data.GoiCoChietKhauId && e.DichVuId != data.MaDichVuId);
                        this.danhSachDichVuDaChonTrongLanPopup
                            = this.danhSachDichVuDaChonTrongLanPopup.filter(function (e) { return e != item_1; });
                        //console.log("Co chiet khau, ", this.danhSachDichVuDaChonTrongLanPopup);
                    }
                    //let item = this.danhSachDichVuDaChonTrongLanPopup.filter(e => e.TenChuongTrinh == o.ThuocGoi);
                };
                TiepNhanBenhNhanComponent.prototype.copyDanhSachTongCong = function (data) {
                    var _this = this;
                    data.forEach(function (o) {
                        // let item = this.danhSachDichVuDaChonTrongLanPopup.filter(e => e == data);
                        // if(item == undefined || item.length == 0){
                        //     this.danhSachDichVuDaChonTrongLanPopup.push(data);
                        // }
                        //code tiep
                        _this.danhSachDichVuDaChonTrongLanPopup.push(o);
                    });
                };
                TiepNhanBenhNhanComponent.prototype.updateDanhSachGoiChon = function (data) {
                    var _this = this;
                    console.log("updateDanhSachGoiChon = ", data);
                    data.forEach(function (o) {
                        var item = _this.danhSachGoiDaChonTrongYCTN.filter(function (e) { return e.TenChuongTrinh == o.ThuocGoi; });
                        if (item == undefined || item.length == 0) {
                            var itemAdd = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["DanhSachGoiChon"]();
                            itemAdd.BenhNhanId = _this.tiepNhanBenhNhan.BenhNhanId;
                            itemAdd.ChuongTrinhGoiDichVuId = o.ChuongTrinhGoiDichVuId;
                            itemAdd.IsFromMarketing = o.IsFromMarketing;
                            itemAdd.TenChuongTrinh = o.ThuocGoi;
                            itemAdd.YeuCauGoiDichVuId = o.YeuCauGoiDichVuId;
                            itemAdd.DaThanhToan = o.DaThanhToan;
                            itemAdd.TenGoiDichVu = o.TenGoi;
                            _this.danhSachGoiDaChonTrongYCTN.push(itemAdd);
                        }
                    });
                };
                TiepNhanBenhNhanComponent.prototype.onOpenChange = function () {
                    this.voucherList.getDataForLookup();
                };
                TiepNhanBenhNhanComponent.prototype.soNhaDuongPhoChange = function (model) {
                    this.tiepNhanBenhNhan.DiaChi = model;
                    if (this.under6yearsold) {
                        this.cloneDiaChiNguoiGiamHo();
                    }
                    if (this.under6yearsold == false) {
                        this.cloneDiaChiNguoiGiamLonHon6Tuoi();
                    }
                    //console.log("change = ", model, model != null && model != undefined, model != "");
                    //console.log("soNhaDuongPhoChange123 = ", model);
                    // if(model != null && model != undefined && model != ""){
                    //     let arrayDiaChi = model.split(" ");
                    //     let resultString = "";
                    //     //console.log("soNhaDuongPhoChange = ", arrayDiaChi);
                    //     
                    //     arrayDiaChi.forEach(e => {
                    //         if(e != undefined && e != null && e != ""){
                    //             if(resultString == ""){
                    //                 resultString = e[0].toUpperCase() + e.slice(1);
                    //             }
                    //             else{
                    //                 resultString = resultString + " " +  e[0].toUpperCase() + e.slice(1);
                    //             }
                    //         }
                    //         else if(e == ""){
                    //             resultString = resultString + " ";
                    //         }
                    //     });
                    //     this.tiepNhanBenhNhan.DiaChi = resultString;
                    //     //this.tiepNhanBenhNhan.DiaChi = model[0].toUpperCase() + model.slice(1);
                    // }
                };
                // noiThucHienChange($event){
                //     if($event != null && $event != undefined && $event.length > 0)
                //     {
                //         this.themChiDinhDichVuModel.NoiThucHienId = $event[0].KeyId;
                //     }
                // }
                // noiThucHienGridChange($event, dataItem) {
                //     // let model = this.tiepNhanBenhNhan.YeuCauKhacGrid.find(obj => obj == dataItem);
                //     // ;
                //     // console.log("noiThucHienGridChange = ", $event, dataItem, model);
                //     // if ($event != null && $event != undefined && $event.length > 0) {
                //     //     //this.themChiDinhDichVuModel.NoiThucHienId = $event[0].KeyId;
                //     //     if (model != undefined  && model.NoiThucHienId === null) {
                //     //         model.NoiThucHienId = $event[0].KeyId;
                //     //     }
                //     // }
                //     // else {
                //     //     if (model != undefined && model.NoiThucHienId === null) {
                //     //         model.NoiThucHienId = $event[0].KeyId;
                //     //     }
                //     //     //this.themChiDinhDichVuModel.NoiThucHienId = null;
                //     // }
                // }
                TiepNhanBenhNhanComponent.prototype.NamSinhChange = function (event) {
                    //console.log("NamSinhChange = ", event);
                    var dateNow = new Date();
                    if (event >= dateNow.getFullYear() - 6) {
                        this.under6yearsold = true;
                        this.soTuoiDisplay = dateNow.getFullYear() - event + " Tuổi " + 0 + " Tháng " + 0 + " Ngày ";
                        this.cloneDiaChiNguoiGiamHo();
                    }
                    else {
                        this.under6yearsold = false;
                        this.soTuoiDisplay = dateNow.getFullYear() - event + " Tuổi";
                    }
                    // this.soTuoiDisplay = dateNow.getFullYear() - event + " Tuổi " + 0 + " Tháng " + 0 + " Ngày ";
                    if (this.under6yearsold == true) {
                        this.cloneDiaChiNguoiGiamHo();
                    }
                    if (this.under6yearsold == false) {
                        this.cloneDiaChiNguoiGiamLonHon6Tuoi();
                    }
                };
                TiepNhanBenhNhanComponent.prototype.getAge = function (date_1, date_2) {
                    if ((date_1 == undefined || date_1 == null) && this.tiepNhanBenhNhan.NamSinh != undefined && this.tiepNhanBenhNhan.NamSinh != null && this.tiepNhanBenhNhan.NamSinh != 0) {
                        date_1 = new Date(this.tiepNhanBenhNhan.NamSinh, 1, 1);
                    }
                    date_1 = new Date(date_1);
                    date_2 = new Date(date_2);
                    //convert to UTC
                    var date2_UTC = new Date(Date.UTC(date_2.getFullYear(), date_2.getMonth(), date_2.getDate()));
                    var date1_UTC = new Date(Date.UTC(date_1.getFullYear(), date_1.getMonth(), date_1.getDate()));
                    //console.log(date1_UTC, date2_UTC, date_1, date_2);
                    var yAppendix, mAppendix, dAppendix;
                    //--------------------------------------------------------------
                    var days = date2_UTC.getDate() - date1_UTC.getDate();
                    if (days < 0) {
                        date2_UTC.setMonth(date2_UTC.getMonth() - 1);
                        days += this.DaysInMonth(date2_UTC);
                    }
                    //--------------------------------------------------------------
                    var months = date2_UTC.getMonth() - date1_UTC.getMonth();
                    if (months < 0) {
                        date2_UTC.setFullYear(date2_UTC.getFullYear() - 1);
                        months += 12;
                    }
                    //--------------------------------------------------------------
                    var years = date2_UTC.getFullYear() - date1_UTC.getFullYear();
                    if (years > 1)
                        yAppendix = " years";
                    else
                        yAppendix = " year";
                    if (months > 1)
                        mAppendix = " months";
                    else
                        mAppendix = " month";
                    if (days > 1)
                        dAppendix = " days";
                    else
                        dAppendix = " day";
                    if ((years < 6 && years >= 0) || (years == 6 && months == 0 && days == 0)) {
                        this.under6yearsold = true;
                        this.soTuoiDisplay = years + " Tuổi " + months + " Tháng " + days + " Ngày ";
                        this.cloneDiaChiNguoiGiamHo();
                    }
                    else {
                        this.under6yearsold = false;
                        this.soTuoiDisplay = years + " Tuổi";
                        this.cloneDiaChiNguoiGiamLonHon6Tuoi();
                    }
                    //this.soTuoiDisplay = years + " Tuổi " + months + " Tháng " + days + " Ngày ";
                    //console.log(years + yAppendix + ", " + months + mAppendix + ", and " + days + dAppendix);
                };
                TiepNhanBenhNhanComponent.prototype.DaysInMonth = function (date2_UTC) {
                    var monthStart = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth(), 1);
                    var monthEnd = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth() + 1, 1);
                    var monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
                    return monthLength;
                };
                TiepNhanBenhNhanComponent.prototype.tabscripChange = function (event) {
                    //console.log("tabscripChange = ", event, event.path[0].id == "k-tabstrip-tab-0");
                    if (event.keyCode === 9 && (event.path != null && event.path[0].id == "k-tabstrip-tab-0")) {
                        this.tabStrip.selectTab(0);
                        var self_2 = this;
                        setTimeout(function () {
                            //console.log("setTimeout = ", self.dichVuCombobox);
                            if (self_2.dichVuCombobox != undefined) {
                                self_2.dichVuCombobox.focusManual();
                            }
                        }, 100);
                    }
                };
                TiepNhanBenhNhanComponent.prototype.cloneDiaChiNguoiGiamHo = function () {
                    this.tiepNhanBenhNhan.NguoiLienHeTinhThanhId = this.tiepNhanBenhNhan.TinhThanhId;
                    this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId = this.tiepNhanBenhNhan.QuanHuyenId;
                    this.tiepNhanBenhNhan.NguoiLienHePhuongXaId = this.tiepNhanBenhNhan.PhuongXaId;
                    this.tiepNhanBenhNhan.NguoiLienHeDiaChi = this.tiepNhanBenhNhan.DiaChi;
                };
                TiepNhanBenhNhanComponent.prototype.cloneDiaChiNguoiGiamLonHon6Tuoi = function () {
                    this.tiepNhanBenhNhan.NguoiLienHeTinhThanhId = null;
                    this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId = null;
                    this.tiepNhanBenhNhan.NguoiLienHePhuongXaId = null;
                    this.tiepNhanBenhNhan.NguoiLienHeDiaChi = null;
                };
                TiepNhanBenhNhanComponent.prototype.ngayCoHieuLucChange = function ($event) {
                    //console.log("ngayCoHieuLucChange, event = ", $event, " , ngaycohieuluc = ", this.tiepNhanBenhNhan.BHYTNgayHieuLuc, this.tiepNhanBenhNhan.BHYTNgayHetHan);
                    if ($event != null && $event != undefined) {
                        //let dateFormat = new Date($event);
                        //this.tiepNhanBenhNhan.BHYTNgayHetHan = new Date(dateFormat.getFullYear() + 1, dateFormat.getMonth(), dateFormat.getDate());
                        //BVHD-3518: mặc định là ngà 31/12 của năm hiện tại
                        var currentDate = new Date();
                        this.tiepNhanBenhNhan.BHYTNgayHetHan = new Date(currentDate.getFullYear(), 11, 31);
                    }
                };
                TiepNhanBenhNhanComponent.prototype.soLuongGridChange = function ($event, dataItem) {
                    var data = this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(function (o) { return o == dataItem; });
                    if ($event != null && $event != undefined && $event != 0) {
                        data[0].SoLuong = $event;
                        this.setGiaBHYT();
                    }
                    else {
                        data[0].SoLuong = 0;
                        this.setGiaBHYT();
                    }
                    this.updateSoLuongForDichVuGoi(data[0]);
                };
                TiepNhanBenhNhanComponent.prototype.updateSoLuongForDichVuGoi = function (data) {
                    //console.log("updateSoLuongForDichVuGoi = ", data, this.danhSachDichVuDaChonTrongLanPopup, this.tiepNhanBenhNhan.YeuCauKhacGrid);
                    if (data.IsGoiCoChietKhau) {
                        var item = this.danhSachDichVuDaChonTrongLanPopup.filter(function (o) { return o.DichVuId == data.MaDichVuId
                            && o.ThuocGoi == data.TenGoiChietKhau; });
                        if (item != undefined && item.length > 0) {
                            item[0].SoLuongDungLanNay = data.SoLuong;
                        }
                    }
                };
                TiepNhanBenhNhanComponent.prototype.loaiGiaGridChange = function ($event, dataItem) {
                    var _this = this;
                    //console.log($event, dataItem);
                    var data = this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(function (o) { return o == dataItem; });
                    if ($event != null && $event != undefined && dataItem != null && dataItem != undefined) {
                        var url_1 = "TiepNhanBenhNhan/GetDonGiaKyThuat";
                        if (dataItem.Nhom == "DỊCH VỤ KỸ THUẬT") {
                            url_1 = "TiepNhanBenhNhan/GetDonGiaKyThuat";
                        }
                        else if (dataItem.Nhom == "DỊCH VỤ GIƯỜNG") {
                            url_1 = "TiepNhanBenhNhan/GetDonGiaGiuongBenh";
                        }
                        else {
                            url_1 = "TiepNhanBenhNhan/GetDonGia";
                        }
                        var model = {};
                        model.NhomGiaDichVuKhamBenhBenhVienId = $event;
                        model.DichVuKhamBenhBenhVienId = data[0].MaDichVuId;
                        this.apiService.post(url_1, model).subscribe(function (resultData) {
                            if (resultData != undefined && resultData != null) {
                                //console.log("Gia = ", resultData);
                                if (url_1 == "TiepNhanBenhNhan/GetDonGiaKyThuat") {
                                    data[0].DonGia = resultData.DonGia;
                                }
                                else {
                                    data[0].DonGia = resultData;
                                }
                                _this.setGiaBHYT();
                            }
                            else {
                                //console.log("Gia = ", 0);
                                data[0].DonGia = 0;
                                _this.setGiaBHYT();
                            }
                        }, function (err) {
                        });
                    }
                    else {
                        //console.log("Gia = ", 0);
                        data[0].DonGia = 0;
                        this.setGiaBHYT();
                    }
                };
                TiepNhanBenhNhanComponent.prototype.QuetMaQRCodeVoucherClick = function () {
                    var elementBarcode = document.getElementById("barcodeActive");
                    if (elementBarcode != undefined) {
                        elementBarcode.click();
                    }
                };
                TiepNhanBenhNhanComponent.prototype.changeVoucherQR = function ($event) {
                    if ($event != null && typeof $event == "string" && $event.endsWith("@")) {
                        this.modelQRCodeVoucher = $event;
                        var maVoucher = $event.split("@");
                        if (maVoucher.length > 1) {
                            this.kiemTraThongTinMaVoucher(maVoucher[0]);
                        }
                        else {
                            this.notificationService.showError("Mã voucher không hợp lệ.");
                        }
                    }
                };
                TiepNhanBenhNhanComponent.prototype.kiemTraThongTinMaVoucher = function (maVoucher) {
                    var _this = this;
                    this.listVoucherItem = [];
                    this.apiService.post("TiepNhanBenhNhan/KiemTraVoucherHopLe?maVoucher=" + maVoucher)
                        .subscribe(function (resultData) {
                        if (resultData.Item1 === 0) {
                            _this.notificationService.showError(resultData.Item2);
                            _this.newBarcode = "";
                        }
                        else {
                            var kiemTraMaVoucher_1 = false;
                            if (_this.tiepNhanBenhNhan.LstMaVoucher.length > 0) {
                                _this.tiepNhanBenhNhan.LstMaVoucher.forEach(function (element) {
                                    var dataVoucher = element.split("|");
                                    if (dataVoucher[1] === maVoucher) {
                                        kiemTraMaVoucher_1 = true;
                                    }
                                });
                            }
                            if (!kiemTraMaVoucher_1) {
                                _this.notificationService.showSuccess(resultData.Item2);
                                //neu voucher thành công
                                _this.value.push(maVoucher);
                                _this.tiepNhanBenhNhan.LstMaVoucher.push(resultData.Item1 + "|" + maVoucher);
                                _this.listVoucherItem.push(resultData.Item1 + "|" + maVoucher);
                                _this.newBarcode = "";
                            }
                        }
                    });
                };
                TiepNhanBenhNhanComponent.prototype.open = function () {
                    this.multiselect.toggle(false);
                };
                TiepNhanBenhNhanComponent.prototype.removeTag = function (ev) {
                    var maVouchers = [];
                    if (this.tiepNhanBenhNhan.LstMaVoucher.length > 0) {
                        this.tiepNhanBenhNhan.LstMaVoucher.forEach(function (element) {
                            var dataVoucher = element.split("|");
                            if (dataVoucher[1] !== ev.dataItem) {
                                maVouchers.push(dataVoucher[0] + "|" + dataVoucher[1]);
                            }
                        });
                        this.listVoucherItem = maVouchers;
                        this.tiepNhanBenhNhan.LstMaVoucher = maVouchers;
                        this.newBarcode = "";
                        //this.listVoucherItem = this.value;
                    }
                };
                TiepNhanBenhNhanComponent.prototype.blurVoucher = function () {
                    if (this.newBarcode != "") {
                        this.kiemTraThongTinMaVoucher(this.newBarcode);
                    }
                    ;
                };
                TiepNhanBenhNhanComponent.prototype.onKeyBarCode = function (event) {
                    if (event.keyCode === 13) {
                        this.multiselect.blur();
                        this.multiselect.focus();
                    }
                };
                TiepNhanBenhNhanComponent.prototype.filterChange = function (filter) {
                    if (filter != null && filter != "") {
                        this.newBarcode = filter;
                    }
                };
                TiepNhanBenhNhanComponent.prototype.cacDichVuKM = function () {
                    this.dialog.open(_dich_vu_khuyen_mai_dich_vu_khuyen_mai_popup_dich_vu_khuyen_mai_popup_component__WEBPACK_IMPORTED_MODULE_39__["DichVuKhuyenMaiPopupComponent"], {
                        disableClose: false,
                        width: '1500px',
                        data: { BenhNhanId: this.benhNhanIdPopup, DocumentType: "YeuCauTiepNhan" }
                    }).afterClosed().subscribe(function () {
                    });
                };
                //===================================BVHD-3825==========================================
                TiepNhanBenhNhanComponent.prototype.xemGoiDichVuKhuyenMai = function () {
                    var _this = this;
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].View)) {
                        // self.dialog.open(LanKhamHienTaiSuDungGoiDichVuPopupComponent, {
                        var dichVuDangChons_1 = [];
                        this.tiepNhanBenhNhan.YeuCauKhacGrid.forEach(function (element) {
                            if (element.YeuCauGoiDichVuKhuyenMaiId != null && element.YeuCauGoiDichVuKhuyenMaiId != 0) {
                                var dichVu = {
                                    Id: 0,
                                    DichVuBenhVienId: element.MaDichVuId,
                                    NhomGiaId: element.LoaiGiaId,
                                    NhomId: element.NhomId,
                                    YeuCauGoiDichVuId: element.YeuCauGoiDichVuKhuyenMaiId,
                                    SoLuong: element.SoLuong
                                };
                                dichVuDangChons_1.push(dichVu);
                            }
                        });
                        self.dialog.open(_dich_vu_khuyen_mai_dich_vu_khuyen_mai_popup_dich_vu_khuyen_mai_popup_component__WEBPACK_IMPORTED_MODULE_39__["DichVuKhuyenMaiPopupComponent"], {
                            disableClose: false,
                            width: '1800px',
                            data: { DocumentType: self.documentType, BenhNhanId: self.benhNhanIdPopup, DichVuDangChons: dichVuDangChons_1 }
                        }).afterClosed().subscribe(function (yeuCauGoiMarketing) {
                            if (yeuCauGoiMarketing != undefined && yeuCauGoiMarketing != null && yeuCauGoiMarketing != "") {
                                var dateNow = new Date((new Date()).toDateString());
                                yeuCauGoiMarketing.YeuCauTiepNhanId = 0;
                                yeuCauGoiMarketing.DuocHuongBaoHiem = _this.tiepNhanBenhNhan.CoBHYT && _this.tiepNhanBenhNhan.LyDoVaoVien == 1 && _this.tiepNhanBenhNhan.BHYTNgayHetHan >= dateNow;
                                self.xuLyThemNhomDichVuKhuyenMai(yeuCauGoiMarketing);
                            }
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                TiepNhanBenhNhanComponent.prototype.xuLyThemNhomDichVuKhuyenMai = function (yeuCauGoiMarketing) {
                    var _this = this;
                    this.showPopupLoadingData(src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_41__["EnumTypeLoadingData"].Update);
                    //ThemYeuGoiDichVuThuongDungTaoMoiYCTN
                    this.apiService.post("TiepNhanBenhNhan/ThemChiDinhGoiDichVuKhuyenMaiKhiTaoYeuCauTiepNhan", yeuCauGoiMarketing).subscribe(function (result) {
                        if (result) {
                            result.DichVuKhamBenhs.forEach(function (element) {
                                element.LoaiDichVuKhac = 3;
                                _this.tiepNhanBenhNhan.YeuCauKhacGrid.push(element);
                            });
                            result.DichVuKyThuats.forEach(function (element) {
                                element.LoaiDichVuKhac = 4;
                                _this.tiepNhanBenhNhan.YeuCauKhacGrid.push(element);
                            });
                            _this.setDataForDichVuKhac();
                            _this.setGiaBHYT();
                            _this.refreshGrid();
                            _this.removeThemDichVuValue();
                            _this.removeThemGoiValue();
                            var mess = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].ActionSuccessfully, ["Thêm"]);
                            _this.notificationService.showSuccess(mess);
                        }
                        _this.closePopupLoadingData();
                    }, function (err) {
                        _this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                TiepNhanBenhNhanComponent.prototype.showPopupLoadingData = function (typeLoading) {
                    if (typeLoading === void 0) { typeLoading = src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_41__["EnumTypeLoadingData"].View; }
                    var mess = "";
                    switch (typeLoading) {
                        case src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_41__["EnumTypeLoadingData"].View:
                            mess = "Đang tải dữ liệu...";
                            break;
                        case src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_41__["EnumTypeLoadingData"].Update:
                            mess = "Đang lưu dữ liệu...";
                            break;
                        case src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_41__["EnumTypeLoadingData"].Delete:
                            mess = "Đang xóa dữ liệu...";
                            break;
                        case src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_41__["EnumTypeLoadingData"].Cancel:
                            mess = "Đang hủy dữ liệu...";
                            break;
                        default: mess = "Đang tải dữ liệu...";
                    }
                    this.loadingDataPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_38__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: mess }
                    });
                };
                TiepNhanBenhNhanComponent.prototype.closePopupLoadingData = function () {
                    if (this.loadingDataPopup) {
                        this.loadingDataPopup.close();
                    }
                };
                //======================================================================================
                // cap nhat goi marketing
                TiepNhanBenhNhanComponent.prototype.changeDichVuTrongGoi = function (event, dataItem) {
                    if (dataItem.IsDichVuTrongGoi) {
                        if (event) {
                            dataItem.IsGoiCoChietKhau = true;
                            dataItem.GoiCoChietKhauId = dataItem.GoiCoChietKhauIdTemp;
                        }
                        else {
                            dataItem.IsGoiCoChietKhau = false;
                            dataItem.GoiCoChietKhauId = null;
                        }
                    }
                };
                TiepNhanBenhNhanComponent.prototype.tinhThanhTienDichVuBaoGomTrongGoiTheGroup = function (group, value) {
                    console.log('tinhThanhTienDichVuBaoGomTrongGoiTheGroup', group, value);
                    console.log('tinhThanhTienDichVuBaoGomTrongGoi');
                    console.log('this.tiepNhanBenhNhan.YeuCauKhacGrid', this.tiepNhanBenhNhan.YeuCauKhacGrid);
                    return this.tiepNhanBenhNhan.YeuCauKhacGrid
                        .reduce(function (sum, item) { return (sum + (item.GoiCoChietKhauId != null ? item.ThanhTienSauChietKhau : item.ThanhTien)); }, 0);
                    // event.Data.forEach(element => {
                    //     let donGia = element.GoiCoChietKhauId != null ? element.DonGiaSauChietKhau : element.DonGia;
                    //     this.thanhTienDichVuChiDinhBaoGomDichVuTrongGoi += donGia * element.SoLuong;
                    // });
                };
                // nhóm dịch vụ thường dùng
                TiepNhanBenhNhanComponent.prototype.xemNhomDichVuThuongDung = function () {
                    var _this = this;
                    var self = this;
                    var boPhan = src_app_shared_enum_bo_phan_enum__WEBPACK_IMPORTED_MODULE_44__["BoPhan"].TiepNhanNgoaiTru;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].View)) {
                        self.dialog.open(_kham_benh_kham_benh_lan_kham_hien_tai_lan_kham_hien_tai_nhom_dich_vu_thuong_dung_popup_lan_kham_hien_tai_nhom_dich_vu_thuong_dung_popup_component__WEBPACK_IMPORTED_MODULE_40__["LanKhamHienTaiNhomDichVuThuongDungPopupComponent"], {
                            disableClose: false,
                            width: '1500px',
                            data: { DocumentType: self.documentType, boPhan: boPhan }
                        }).afterClosed().subscribe(function (yeuCauGoiThuongDung) {
                            if (yeuCauGoiThuongDung) {
                                yeuCauGoiThuongDung.DanhSachDichVuChons = self.tiepNhanBenhNhan.YeuCauKhacGrid;
                                self.apiService.post("TiepNhanBenhNhan/KiemTraDichVuTrongGoiDaCoTheoDichVuTrongGrid", yeuCauGoiThuongDung).subscribe(function (resultData) {
                                    if (resultData && resultData.length > 0) {
                                        self.dialog.open(_kham_benh_kham_benh_lan_kham_hien_tai_lan_kham_hien_tai_nhom_dich_vu_loi_popup_lan_kham_hien_tai_nhom_dich_vu_loi_popup_component__WEBPACK_IMPORTED_MODULE_42__["LanKhamHienTaiNhomDichVuLoiPopupComponent"], {
                                            disableClose: false,
                                            width: '1200px',
                                            data: { arrDichVuCanhBao: resultData, DocumentType: _this.documentType }
                                        }).afterClosed().subscribe(function (dichVuKhongThems) {
                                            if (dichVuKhongThems) {
                                                yeuCauGoiThuongDung.DichVuKhongThems = dichVuKhongThems;
                                                self.xuLyThemNhomDichVuThuongDung(yeuCauGoiThuongDung);
                                            }
                                        });
                                    }
                                    else {
                                        self.xuLyThemNhomDichVuThuongDung(yeuCauGoiThuongDung);
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
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                TiepNhanBenhNhanComponent.prototype.xuLyThemNhomDichVuThuongDung = function (yeuCauGoiThuongDung) {
                    var _this = this;
                    // code toàn cheat, giờ cũng phải cheat theo
                    var dateNow = new Date((new Date()).toDateString());
                    yeuCauGoiThuongDung.DuocHuongBaoHiem = this.tiepNhanBenhNhan.CoBHYT && this.tiepNhanBenhNhan.LyDoVaoVien == 1 && this.tiepNhanBenhNhan.BHYTNgayHetHan >= dateNow;
                    this.apiService.post("TiepNhanBenhNhan/ThemYeuGoiDichVuThuongDungTaoMoiYCTN", yeuCauGoiThuongDung).subscribe(function (result) {
                        if (result) {
                            result.DichVuKhamBenhs.forEach(function (element) {
                                element.LoaiDichVuKhac = 3;
                                _this.tiepNhanBenhNhan.YeuCauKhacGrid.push(element);
                            });
                            result.DichVuKyThuats.forEach(function (element) {
                                element.LoaiDichVuKhac = 4;
                                _this.tiepNhanBenhNhan.YeuCauKhacGrid.push(element);
                                // this.setDataForDichVuKhac();
                                // this.setGiaBHYT();
                                // this.refreshGrid();
                            });
                            _this.setDataForDichVuKhac();
                            _this.setGiaBHYT();
                            _this.refreshGrid();
                            _this.removeThemDichVuValue();
                            _this.removeThemGoiValue();
                            var mess = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].ActionSuccessfully, ["Thêm"]);
                            _this.notificationService.showSuccess(mess);
                        }
                    }, function (err) {
                        _this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                    });
                };
                // cập nhật điều kiện tạo mới yctn
                //================================================================================================
                TiepNhanBenhNhanComponent.prototype.chuyenVeTrangCapNhatYCTN = function () {
                    this.router.navigate([this.urlPageUpdateYCTN]);
                };
                TiepNhanBenhNhanComponent.prototype.xuLyKiemTraBenhNhanDuDieuKienTaoMoiYCTN = function (coTheBHYT) {
                    var _this = this;
                    if (coTheBHYT === void 0) { coTheBHYT = null; }
                    if (this.tiepNhanBenhNhan.BenhNhanId != undefined
                        && this.tiepNhanBenhNhan.BenhNhanId != null
                        && this.tiepNhanBenhNhan.BenhNhanId != 0) {
                        console.log('this.tiepNhanBenhNhan.CoBHYT', this.tiepNhanBenhNhan.CoBHYT);
                        var laKiemTraCungNgay = coTheBHYT == null ? this.tiepNhanBenhNhan.CoBHYT != true : coTheBHYT != true;
                        this.apiService.post("TiepNhanBenhNhan/KiemTraDieuKienTaoMoiYeuCauTiepNhan?benhNhanId=" + this.tiepNhanBenhNhan.BenhNhanId + "&laKiemTraCungNgay=" + laKiemTraCungNgay).subscribe(function (resultData) {
                            _this.errMessageKhongChoPhepTaoMoiYCTN = resultData.ErrorMessage;
                            if (resultData.YeuCauTiepNhanId != null) {
                                _this.urlPageUpdateYCTN = 'danh-sach-tiep-nhan/chinh-sua/' + resultData.YeuCauTiepNhanId;
                            }
                        }, function (err) {
                            if (err.Message != "Validation Failed") {
                                _this.notificationService.showError(err.Message);
                            }
                        });
                    }
                };
                TiepNhanBenhNhanComponent.prototype.kiemTraTheBHYTKhiTaoYCTNMoi = function () {
                    var _this = this;
                    this.isCheckedBHYT = true;
                    this.thongTinBenhNhan.MaThe = this.tiepNhanBenhNhan.BHYTMaSoThe;
                    this.thongTinBenhNhan.TenBenhNhan = this.tiepNhanBenhNhan.HoTen;
                    this.thongTinBenhNhan.NgaySinh = this.tiepNhanBenhNhan.NgayThangNamSinh;
                    this.thongTinBenhNhan.NamSinh = this.tiepNhanBenhNhan.NamSinh;
                    var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_18__["DatePipe"]("en-US");
                    this.thongTinBenhNhan.NgaySinhDisplay = datePipe.transform(this.tiepNhanBenhNhan.NgayThangNamSinh, 'dd/MM/yyyy');
                    if (this.thongTinBenhNhan.MaThe != null && this.thongTinBenhNhan.TenBenhNhan != null
                        && (this.thongTinBenhNhan.NgaySinh != null || this.thongTinBenhNhan.NamSinh != null)) {
                        this.dialog.open(_tiep_nhan_benh_nhan_cho_quet_tiep_nhan_benh_nhan_cho_quet_component__WEBPACK_IMPORTED_MODULE_17__["TiepNhanBenhNhanChoQuetComponent"], {
                            disableClose: true,
                            width: '500px',
                            height: '250px',
                            data: this.thongTinBenhNhan,
                        }).afterClosed().subscribe(function (result) {
                            if (result === undefined) {
                                //cheat vi khong hieu sao ra duoc
                            }
                            // else if (result == null || (result != null && result.maKetQua == "050")) {
                            else if (result == null || (result != null && result.maKetQua !== "000" && result.maKetQua !== "004")) {
                                _this.tiepNhanBenhNhan.MessageErrFromBHYT = result != null ? result.ghiChu : null;
                                _this.dialog.open(_tiep_nhan_benh_nhan_error_tiep_nhan_benh_nhan_error_component__WEBPACK_IMPORTED_MODULE_22__["TiepNhanBenhNhanErrorComponent"], {
                                    disableClose: false,
                                    width: '700px',
                                    height: '300px',
                                    data: _this.tiepNhanBenhNhan,
                                }).afterClosed().subscribe(function (resultData) {
                                    _this.isCheckedBHYT = false;
                                    if (resultData == 2) {
                                        _this.tiepNhanBenhNhan.IsCheckedBHYT = null;
                                        _this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_21__["TinhTrangThe"].KhongXacDinh;
                                        _this.tiepNhanBenhNhan.CoBHYT = true;
                                        _this.tiepNhanBenhNhan.TuNhap = true;
                                    }
                                    else if (resultData == 1) {
                                        _this.tiepNhanBenhNhan.CoBHYT = false;
                                        _this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_21__["TinhTrangThe"].KhongXacDinh;
                                        _this.tiepNhanBenhNhan.IsCheckedBHYT = false;
                                    }
                                    else if (resultData != undefined) {
                                        _this.setValueBHYT(result);
                                    }
                                });
                            }
                            else {
                                _this.isCheckedBHYT = false;
                                _this.setValueBHYT(result);
                            }
                        });
                    }
                    else {
                        this.isCheckedBHYT = false;
                    }
                };
                //================================================================================================
                // BVHD-3481
                //================================================================================================
                TiepNhanBenhNhanComponent.prototype.xuLyTaoYeuCauTiepNhan = function (coInPhieu) {
                    var _this = this;
                    if (coInPhieu === void 0) { coInPhieu = false; }
                    this.loading = true;
                    this.validationErrors = [];
                    if (this.tiepNhanBenhNhan.BenhNhanId == null || this.tiepNhanBenhNhan.BenhNhanId == 0) {
                        this.apiService.post("TiepNhanBenhNhan/KiemTraBenhNhanTrongHeThong", this.tiepNhanBenhNhan).subscribe(function (result) {
                            if (result != null) {
                                _this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], {
                                    disableClose: false,
                                    width: '400px',
                                    data: { Title: "Xác nhận", Message: result.Message }
                                }).afterClosed().subscribe(function (result) {
                                    if (result == "Yes") {
                                        if (coInPhieu) {
                                            _this.luuVaInPhieu();
                                        }
                                        else {
                                            _this.luuPhieu();
                                        }
                                    }
                                    else {
                                        _this.loading = false;
                                    }
                                });
                            }
                            else {
                                if (coInPhieu) {
                                    _this.luuVaInPhieu();
                                }
                                else {
                                    _this.luuPhieu();
                                }
                            }
                        }, function (err) {
                            var self = _this;
                            self.loading = false;
                            if (err != undefined && err.ValidationErrors != null) {
                                var itemGiamHoValidate = err.ValidationErrors.find(function (p) { return p.Field == "NguoiLienHeHoTen"
                                    || p.Field == "NguoiLienHeQuanHeNhanThanId" || p.Field == "NguoiLienHeSoDienThoai"; });
                                if (itemGiamHoValidate != null && itemGiamHoValidate != undefined) {
                                    self.tabStrip.selectTab(2);
                                    ;
                                }
                                self.validationErrors = err.ValidationErrors;
                            }
                            else if (err != undefined && err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                        });
                    }
                    else {
                        if (coInPhieu) {
                            this.luuVaInPhieu();
                        }
                        else {
                            this.luuPhieu();
                        }
                    }
                };
                //================================================================================================
                // BVHD-3761
                //================================================================================================
                TiepNhanBenhNhanComponent.prototype.getListDichVuSarsCoVs = function () {
                    var _this = this;
                    this.apiService.get("TiepNhanBenhNhan/GetSarsCoVs").subscribe(function (resultData) {
                        _this.dichVuSarsCoVs = [];
                        _this.dichVuSarsCoVs = resultData.Ids;
                        _this.loaiBenhPham = resultData.LoaiMauXetNghiem;
                        _this.loaiBenhPhamText = resultData.LoaiMauXetNghiemText;
                    });
                };
                return TiepNhanBenhNhanComponent;
            }());
            TiepNhanBenhNhanComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_19__["NotificationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridBHTN', { static: false })
            ], TiepNhanBenhNhanComponent.prototype, "gridChildBHTN", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridKhamBenh', { static: false })
            ], TiepNhanBenhNhanComponent.prototype, "gridChildKhamBenh", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridKyThuat', { static: false })
            ], TiepNhanBenhNhanComponent.prototype, "gridChildKyThuat", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridCoChietKhau', { static: false })
            ], TiepNhanBenhNhanComponent.prototype, "gridChildCoChietKhau", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridKhongChietKhau', { static: false })
            ], TiepNhanBenhNhanComponent.prototype, "gridChildKhongChietKhau", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridTaiLieuDinhKem', { static: false })
            ], TiepNhanBenhNhanComponent.prototype, "gridTaiLieuDinhKem", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaKhamBenhFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "donGiaKhamBenhFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaKhamBenhTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "donGiaKhamBenhTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienKhamBenhTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "thanhTienKhamBenhTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienKhamBenhFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "thanhTienKhamBenhFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienKhamBenhGroupFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "thanhTienKhamBenhGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bhytThanhToanKhamBenhTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "bhytThanhToanKhamBenhTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bhytThanhToanKhamBenhFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "bhytThanhToanKhamBenhFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bhytThanhToanKhamBenhGroupFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "bhytThanhToanKhamBenhGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soTienMgKhamBenhTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "soTienMgKhamBenhTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soTienMgKhamBenhFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "soTienMgKhamBenhFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soTienMgKhamBenhGroupFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "soTienMgKhamBenhGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanKhamBenhTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "bnThanhToanKhamBenhTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanKhamBenhFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "bnThanhToanKhamBenhFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanKhamBenhGroupFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "bnThanhToanKhamBenhGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionKhamBenhTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "actionKhamBenhTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("tabStrip", { static: false })
            ], TiepNhanBenhNhanComponent.prototype, "tabStrip", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaKyThuatFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "donGiaKyThuatFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaKyThuatTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "donGiaKyThuatTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienKyThuatTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "thanhTienKyThuatTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienKyThuatFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "thanhTienKyThuatFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienKyThuatGroupFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "thanhTienKyThuatGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soTienMgKyThuatTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "soTienMgKyThuatTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soTienMgKyThuatFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "soTienMgKyThuatFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soTienMgKyThuatGroupFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "soTienMgKyThuatGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanKyThuatTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "bnThanhToanKyThuatTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanKyThuatFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "bnThanhToanKyThuatFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanKyThuatGroupFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "bnThanhToanKyThuatGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionKyThuatTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "actionKyThuatTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaKhongChietKhauFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "donGiaKhongChietKhauFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaKhongChietKhauTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "donGiaKhongChietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaBHYTTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "donGiaBHYTTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenDichVuKhongChietKhauFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "tenDichVuKhongChietKhauFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienKhongChietKhauTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "thanhTienKhongChietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienKhongChietKhauFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "thanhTienKhongChietKhauFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienKhongChietKhauGroupFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "thanhTienKhongChietKhauGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bhytThanhToanKhongChietKhauTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "bhytThanhToanKhongChietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bhytThanhToanKhongChietKhauFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "bhytThanhToanKhongChietKhauFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bhytThanhToanKhongChietKhauGroupFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "bhytThanhToanKhongChietKhauGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soTienMgKhongChietKhauTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "soTienMgKhongChietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soTienMgKhongChietKhauFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "soTienMgKhongChietKhauFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soTienMgKhongChietKhauGroupFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "soTienMgKhongChietKhauGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanKhongChietKhauTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "bnThanhToanKhongChietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanKhongChietKhauFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "bnThanhToanKhongChietKhauFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanKhongChietKhauGroupFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "bnThanhToanKhongChietKhauGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('noiThucHienKhongChietKhauTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "noiThucHienKhongChietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhanVienChiDinhTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "nhanVienChiDinhTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('duocHuongBHYTTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "duocHuongBHYTTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiGiaTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "loaiGiaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttKhongChietKhauTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "sttKhongChietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttCoChietKhauTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "sttCoChietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "soLuongTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionKhongChietKhauTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "actionKhongChietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaChietKhauTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "donGiaChietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaChietKhauFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "donGiaChietKhauFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienChietKhauTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "thanhTienChietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienChietKhauFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "thanhTienChietKhauFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienChietKhauGroupFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "thanhTienChietKhauGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tyLeChietKhauCoChietKhauTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "tyLeChietKhauCoChietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('duocGiamTrongGoiCoChietKhauTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "duocGiamTrongGoiCoChietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('duocGiamTrongGoiCoChietKhauFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "duocGiamTrongGoiCoChietKhauFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTrongGoiChietKhauTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "thanhTienTrongGoiChietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTrongGoiChietKhauFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "thanhTienTrongGoiChietKhauFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTrongGoiChietKhauGroupFooterTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "thanhTienTrongGoiChietKhauGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('noiThucHienChietKhauTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "noiThucHienChietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('taiLieuTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "taiLieuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTaiLieuTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "actionTaiLieuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('HoVaTenTextbox', { static: false })
            ], TiepNhanBenhNhanComponent.prototype, "HoVaTenTextbox", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('NgaySinhCoBHYT', { static: false })
            ], TiepNhanBenhNhanComponent.prototype, "NgaySinhCoBHYT", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('NgaySinhKhongCoBHYT', { static: false })
            ], TiepNhanBenhNhanComponent.prototype, "NgaySinhKhongCoBHYT", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dichVuCombobox', { static: false })
            ], TiepNhanBenhNhanComponent.prototype, "dichVuCombobox", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('comboboxQuanHuyen', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "comboboxQuanHuyen", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('comboboxPhuongXa', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "comboboxPhuongXa", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenDvTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "tenDvTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dichVuTrongGoiTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "dichVuTrongGoiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dichVuKhuyenMaiTemplate', { static: true })
            ], TiepNhanBenhNhanComponent.prototype, "dichVuKhuyenMaiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('voucherList', { static: false })
            ], TiepNhanBenhNhanComponent.prototype, "voucherList", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("multiselect", { static: false })
            ], TiepNhanBenhNhanComponent.prototype, "multiselect", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])
            ], TiepNhanBenhNhanComponent.prototype, "keyEvent", null);
            TiepNhanBenhNhanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tiep-nhan-benh-nhan',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tiep-nhan-benh-nhan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_15__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_16__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tiep-nhan-benh-nhan.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.component.scss")).default]
                })
            ], TiepNhanBenhNhanComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/xem-truoc-bang-ke-chi-phi-poup/xem-truoc-bang-ke-chi-phi-poup.component.scss": 
        /*!*******************************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/xem-truoc-bang-ke-chi-phi-poup/xem-truoc-bang-ke-chi-phi-poup.component.scss ***!
          \*******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 550px;\n}\n\n.container-iframe iframe {\n  margin-bottom: 10px;\n  -webkit-backface-visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4veGVtLXRydW9jLWJhbmcta2UtY2hpLXBoaS1wb3VwL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcdGllcC1uaGFuLWJlbmgtbmhhblxceGVtLXRydW9jLWJhbmcta2UtY2hpLXBoaS1wb3VwXFx4ZW0tdHJ1b2MtYmFuZy1rZS1jaGktcGhpLXBvdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL3hlbS10cnVvYy1iYW5nLWtlLWNoaS1waGktcG91cC94ZW0tdHJ1b2MtYmFuZy1rZS1jaGktcGhpLXBvdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLG1DQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vdGllcC1uaGFuLWJlbmgtbmhhbi94ZW0tdHJ1b2MtYmFuZy1rZS1jaGktcGhpLXBvdXAveGVtLXRydW9jLWJhbmcta2UtY2hpLXBoaS1wb3VwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU1MHB4O1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn0iLCIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTUwcHg7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/xem-truoc-bang-ke-chi-phi-poup/xem-truoc-bang-ke-chi-phi-poup.component.ts": 
        /*!*****************************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/xem-truoc-bang-ke-chi-phi-poup/xem-truoc-bang-ke-chi-phi-poup.component.ts ***!
          \*****************************************************************************************************************************/
        /*! exports provided: XemTruocBangKeChiPhiPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XemTruocBangKeChiPhiPopupComponent", function () { return XemTruocBangKeChiPhiPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_fullscreen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-fullscreen */ "./node_modules/@iconify/icons-ic/twotone-fullscreen.js");
            /* harmony import */ var _iconify_icons_ic_twotone_fullscreen__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_fullscreen__WEBPACK_IMPORTED_MODULE_8__);
            /* harmony import */ var _iconify_icons_ic_twotone_fullscreen_exit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-fullscreen-exit */ "./node_modules/@iconify/icons-ic/twotone-fullscreen-exit.js");
            /* harmony import */ var _iconify_icons_ic_twotone_fullscreen_exit__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_fullscreen_exit__WEBPACK_IMPORTED_MODULE_9__);
            var XemTruocBangKeChiPhiPopupComponent = /** @class */ (function () {
                function XemTruocBangKeChiPhiPopupComponent(data, apiService, dialog, notificationService) {
                    this.data = data;
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.arrFilePdf = [];
                    this.arrFileUrl = [];
                    this.icFullscreen = _iconify_icons_ic_twotone_fullscreen__WEBPACK_IMPORTED_MODULE_8___default.a;
                    this.icFullscreenExit = _iconify_icons_ic_twotone_fullscreen_exit__WEBPACK_IMPORTED_MODULE_9___default.a;
                    this.isFullscreen = false;
                    this.Width = 800;
                    this.Height = 600;
                }
                XemTruocBangKeChiPhiPopupComponent.prototype.ngOnInit = function () {
                    this.getALlFilePDFFromHtml(this.data);
                    this.yeuCauTiepNhanId = this.data;
                    this.fullscreen();
                };
                XemTruocBangKeChiPhiPopupComponent.prototype.getALlFilePDFFromHtml = function (id) {
                    var _this = this;
                    this.showPopupLoadingData();
                    var hostingName = "http://" + "//" + window.location.host;
                    this.apiService.postExportPdf("ThuNgan/XemTruocBangKeChiPhi?yeuCauTiepNhanId=" + id + "&hostingName=" + hostingName).subscribe(function (file) {
                        var newBlob = new Blob([file], { type: "application/pdf" });
                        var datalocalURL = window.URL.createObjectURL(newBlob);
                        _this.arrFileUrl.push(datalocalURL);
                        _this.arrFilePdf.push(file);
                        _this.closePopupLoadingData();
                    }, function (err) {
                        _this.closePopupLoadingData();
                    });
                };
                XemTruocBangKeChiPhiPopupComponent.prototype.downloadAllFile = function () {
                    var dateTimeNow = new Date();
                    this.arrFilePdf.forEach(function (file) {
                        src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(file, "application/pdf", "PhieuThuNgan" + dateTimeNow.getFullYear() + ".pdf");
                    });
                };
                XemTruocBangKeChiPhiPopupComponent.prototype.showPopupLoadingData = function () {
                    if (this.popupLoadingData == undefined || this.popupLoadingData == null || this.popupLoadingData.openDialogs == undefined || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                            disableClose: true,
                            width: "200px",
                            height: "90px",
                            data: { Title: "Đang tải dữ liệu..." },
                        });
                    }
                };
                XemTruocBangKeChiPhiPopupComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                XemTruocBangKeChiPhiPopupComponent.prototype.ketXuatBangKeChiPhiExcel = function () {
                    var _this = this;
                    this.apiService.postExportExcel("ThuNgan/XuatBangKeNgoaiTruCoBHYTExcel?yeuCauTiepNhanId=" + this.yeuCauTiepNhanId)
                        .subscribe(function (res) {
                        _this.showLoadingPopup();
                        if (res.byteLength != 4) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "XuatBangKeNgoaiTruCoBHYT" + dateTimeNow.getFullYear() + ".xlsx");
                        }
                        _this.closeAllDialogs();
                    }, function (err) {
                        _this.notificationService.showError(err.Message);
                        _this.closeAllDialogs();
                    });
                    this.apiService.postExportExcel("ThuNgan/XuatBangKeNgoaiTruExcel?yeuCauTiepNhanId=" + this.yeuCauTiepNhanId)
                        .subscribe(function (res) {
                        _this.showLoadingPopup();
                        if (res.byteLength != 4) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "XuatBangKeNgoaiTru" + dateTimeNow.getFullYear() + ".xlsx");
                        }
                        _this.closeAllDialogs();
                    }, function (err) {
                        _this.notificationService.showError(err.Message);
                        _this.closeAllDialogs();
                    });
                    this.apiService.postExportExcel("ThuNgan/XuatBangKeNgoaiTruTrongGoiDv?yeuCauTiepNhanId=" + this.yeuCauTiepNhanId)
                        .subscribe(function (res) {
                        _this.showLoadingPopup();
                        if (res.byteLength != 4) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "XuatBangKeNgoaiTruTrongGoiDv" + dateTimeNow.getFullYear() + ".xlsx");
                        }
                        _this.closeAllDialogs();
                    }, function (err) {
                        _this.notificationService.showError(err.Message);
                        _this.closeAllDialogs();
                    });
                };
                XemTruocBangKeChiPhiPopupComponent.prototype.fullscreen = function () {
                    this.fullScreenDialog(this.isFullscreen, this.Height, this.Width, 200);
                    this.isFullscreen = !this.isFullscreen;
                };
                XemTruocBangKeChiPhiPopupComponent.prototype.fullScreenDialog = function (isFullscreen, Height, Width, heightHeaderFooter) {
                    if (isFullscreen) {
                        jQuery(".cdk-overlay-pane").css({ "height": (Height != null ? Height : "auto"), "width": Width, "max-width": Width });
                        jQuery(".mat-dialog-content").css({ "height": Height - (heightHeaderFooter != null ? heightHeaderFooter : 0), "max-height": Height - (heightHeaderFooter != null ? heightHeaderFooter : 0) });
                    }
                    else {
                        jQuery(".cdk-overlay-pane").css({ "height": "97%", "width": "100%", "max-width": "97%" });
                        jQuery(".mat-dialog-content").css({ "height": (jQuery(window).height() - (heightHeaderFooter != null ? heightHeaderFooter : 150)), "max-height": jQuery(window).height() - (heightHeaderFooter != null ? heightHeaderFooter : 150) });
                    }
                };
                XemTruocBangKeChiPhiPopupComponent.prototype.showLoadingPopup = function () {
                    if (!this.loadingPopup) {
                        this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang tải...' }
                        });
                    }
                };
                XemTruocBangKeChiPhiPopupComponent.prototype.showSavingPopup = function () {
                    if (!this.loadingPopup) {
                        this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang lưu...' }
                        });
                    }
                };
                XemTruocBangKeChiPhiPopupComponent.prototype.closeAllDialogs = function () {
                    if (this.loadingPopup) {
                        this.loadingPopup.close();
                        this.loadingPopup = null;
                    }
                };
                return XemTruocBangKeChiPhiPopupComponent;
            }());
            XemTruocBangKeChiPhiPopupComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
            ]; };
            XemTruocBangKeChiPhiPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-xem-truoc-bang-ke-chi-phi-poup",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xem-truoc-bang-ke-chi-phi-poup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/xem-truoc-bang-ke-chi-phi-poup/xem-truoc-bang-ke-chi-phi-poup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xem-truoc-bang-ke-chi-phi-poup.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/xem-truoc-bang-ke-chi-phi-poup/xem-truoc-bang-ke-chi-phi-poup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], XemTruocBangKeChiPhiPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/xn-covid-popup/xn-covid-popup.component.scss": 
        /*!***********************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/xn-covid-popup/xn-covid-popup.component.scss ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL3huLWNvdmlkLXBvcHVwL3huLWNvdmlkLXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/xn-covid-popup/xn-covid-popup.component.ts": 
        /*!*********************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/xn-covid-popup/xn-covid-popup.component.ts ***!
          \*********************************************************************************************/
        /*! exports provided: XnCovidPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XnCovidPopupComponent", function () { return XnCovidPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tiep-nhan-benh-nhan.model */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
            var XnCovidPopupComponent = /** @class */ (function () {
                function XnCovidPopupComponent(data, dialogRef) {
                    this.data = data;
                    this.dialogRef = dialogRef;
                    this.xetNghiemCovid = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["XetNghiemCovid"]();
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.loaiMauXetNghiemText = null;
                }
                XnCovidPopupComponent.prototype.ngOnInit = function () {
                    this.xetNghiemCovid.LoaiBenhPham = this.data.LoaiMauXetNghiemText;
                };
                XnCovidPopupComponent.prototype.save = function () {
                    this.dialogRef.close(this.xetNghiemCovid);
                };
                XnCovidPopupComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                return XnCovidPopupComponent;
            }());
            XnCovidPopupComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
            ]; };
            XnCovidPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-xn-covid-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xn-covid-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/xn-covid-popup/xn-covid-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xn-covid-popup.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/xn-covid-popup/xn-covid-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], XnCovidPopupComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=default~tiep-nhan-benh-nhan-danh-sach-cho-kham-danh-sach-cho-kham-module~tiep-nhan-benh-nhan-lich-su~2cabf56a-es2015.js.map
//# sourceMappingURL=default~tiep-nhan-benh-nhan-danh-sach-cho-kham-danh-sach-cho-kham-module~tiep-nhan-benh-nhan-lich-su~2cabf56a-es5.js.map
//# sourceMappingURL=default~tiep-nhan-benh-nhan-danh-sach-cho-kham-danh-sach-cho-kham-module~tiep-nhan-benh-nhan-lich-su~2cabf56a-es5.js.map