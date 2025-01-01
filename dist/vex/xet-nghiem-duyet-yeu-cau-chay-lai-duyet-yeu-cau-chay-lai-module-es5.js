(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["xet-nghiem-duyet-yeu-cau-chay-lai-duyet-yeu-cau-chay-lai-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-duyet/duyet-yeu-cau-chay-lai-duyet.component.html": 
        /*!*******************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-duyet/duyet-yeu-cau-chay-lai-duyet.component.html ***!
          \*******************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n        {Title:'Xét nghiệm',Path:''},\n        {Title:'DS Duyệt Yêu Cầu Chạy Lại Xét Nghiệm',Path:'/xet-nghiem/duyet-yeu-cau-chay-lai', queryParams: {holdQuery : true}},\n        {Title:'Chi tiết Duyệt Yêu Cầu Chạy Lại Xét Nghiệm',Path:'', Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chi tiết duyệt yêu cầu chạy lại xét nghiệm</h2>\n                <b *ngIf=\"thongTinHanhChinhXN.TrangThai === true\" class=\"status-yeu-cau-linh ycl-cho-duyet\">Chờ\n                    xử lý</b>\n                <b *ngIf=\"thongTinHanhChinhXN.TrangThai === false\" class=\"status-yeu-cau-linh ycl-da-duyet\">Đã\n                    xử lý</b>\n\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <div class=\"row mb-2\">\n                    <!-- style=\"background: #e1f5fe;\" -->\n                    <fieldset class=\"{{(thongTinHanhChinhXN != null && thongTinHanhChinhXN.LaCapCuu == true) ? 'bg-tthc-lightpink' : 'bg-tthc-lightblue'}}\">\n                        <legend>Thông tin hành chính</legend>\n                        <div fxFlex=\"100%\">\n                            <ul class=\"inline\">\n                                <li>Barcode:\n                                    <strong>{{thongTinHanhChinhXN.MaBarCode}}</strong>\n                                </li>\n                                <li>Mã NB:\n                                    <strong>{{thongTinHanhChinhXN.MaBN}}</strong>\n                                </li>\n                                <li>Mã TN:\n                                    <strong>{{thongTinHanhChinhXN.MaTN}}</strong>\n                                </li>\n                                <li>Họ tên:\n                                    <strong>{{thongTinHanhChinhXN.HoTen}}</strong>\n                                </li>\n                                <li>Tuổi:\n                                    <strong>{{thongTinHanhChinhXN.Tuoi}}</strong>\n                                </li>\n                                <li>\n                                    Giới tính:\n                                    <strong>{{thongTinHanhChinhXN.GioiTinh}}</strong>\n                                </li>\n                                <li>\n                                    Mã số thẻ: <strong>{{thongTinHanhChinhXN.MaBhyt}}</strong>\n                                </li>\n                                <li>\n                                    Tuyến: <strong style=\"color: green;\">{{thongTinHanhChinhXN.DungTuyen}}</strong>\n                                </li>\n                                <li>\n                                    Mức hưởng: <strong style=\"color: blue;\">{{thongTinHanhChinhXN.MucHuong}}%</strong>\n                                </li>\n                                <li>Dân tộc:\n                                    <strong>{{thongTinHanhChinhXN.DanToc}}</strong>\n                                </li>\n                                <li>\n                                    Địa chỉ:\n                                    <strong>{{thongTinHanhChinhXN.DiaChi}}</strong>\n                                </li>\n                                <li>\n                                    Nghề nghiệp:\n                                    <strong>{{thongTinHanhChinhXN.NgheNghiep}}</strong>\n                                </li>\n\n                                <li>\n                                    Chẩn đoán: <strong>{{thongTinHanhChinhXN.ChuanDoan}}</strong>\n                                </li>\n                                <li>\n                                    Khoa chỉ định: <strong>{{thongTinHanhChinhXN.KhoaChiDinh}}</strong>\n                                </li>\n                                <li>\n                                    Phòng: <strong>{{thongTinHanhChinhXN.PhongKham}}</strong>\n                                </li>\n                            </ul>\n                        </div>\n                    </fieldset>\n\n                    <fieldset class=\"mt-2\">\n                        <legend>Chi tiết kết quả xét nghiệm</legend>\n                        <div fxFlex=\"100%\">\n                            <!-- <div class=\"mb-3\">\n                                <div fxFlex=\"60%\"></div>\n                                <div fxFlex=\"40%\" class=\"order-color\">\n                                    <div class=\"set-color black\"></div>\n                                    <p>Bình thường</p>\n                                    <div class=\"set-color blue\"></div>\n                                    <p>Bất thường</p>\n                                    <div class=\"set-color red\"></div>\n                                    <p>Nguy hiểm</p>\n                                </div>\n                            </div> -->\n                            <app-grid #gridDuyetYeuCauChayLaiXN [gridColumns]=\"gridNhomXetNghiemColumns\" [documentType]=\"documentType\"\n                                [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [headerTemplate]=\"headerTemplate\"\n                                [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" [allowSortDefault]=\"false\"\n                                [autoHeight]=\"true\" [pageable]=\"true\" [checkboxAble]=\"true\"\n                                (extOnDataBound)=\"onDataBound($event)\" [detailTemplate]=\"dichVuTemplate\"\n                                [showStt]=\"true\" [additionalSearchString]=\"phienXetNghiemId\"\n                                [urlGetData]=\"urlGetDataGridParentAsync\" [urlGetTotalPage]=\"urlGetTotalPageParentAsync\">\n                            </app-grid>\n\n                            <ng-template #headerTemplate>\n                                <div class=\"div-header bg-app-bar px-6 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                                        fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                                        <!-- [(ngModel)]=\"searchString\" -->\n                                        <input type=\"search\" name=\"searchString\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" placeholder=\"Nhập từ khóa tìm kiếm\"\n                                            [formControl]=\"searchCtrl\"\n                                            (ngModelChange)=\"searchChanges($event)\"\n                                            (keyup)=\"onKeySearchChanges($event)\"/>\n                                    </div>\n                                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n                                        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                                    </button>\n                    \n                                    <div fxFlex=\"50%\" class=\"order-color\">\n                                        <div class=\"set-color black\"></div>\n                                        <p>Bình thường</p>\n                                        <div class=\"set-color blue\"></div>\n                                        <p>Bất thường</p>\n                                        <div class=\"set-color red\"></div>\n                                        <p>Nguy hiểm</p>\n                                    </div>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #trangThaiTemplate let-dataItem>\n                                <div style=\"position: relative;\">\n                                    <span [ngClass]=\"{'orangeText': dataItem.TrangThai == 1,\n                                                'greenText': dataItem.TrangThai == 2,\n                                                'redText': dataItem.TrangThai == 3}\">\n                                        {{dataItem.TenTrangThai}}\n                                    </span>\n                                </div>\n                            </ng-template>\n                            <ng-template #dichVuTemplate let-dataItem>\n                                <div style=\"overflow: auto;\">\n                                    <table style=\"width: 1600px;\"\n                                        class=\"table table-hover table-bordered table-responsive-xl table-wrapper-scroll-x\" style=\"background-color: transparent !important;\">\n                                        <thead>\n                                            <th resizable class=\"w-350\"> TÊN </th>\n                                            <th resizable style=\"width: 100px;\"> KQ CŨ</th>\n                                            <th resizable style=\"width: 100px;\"> KQ TỪ MÁY </th>\n                                            <th resizable style=\"width: 100px;\"> KQ nhập tay </th>\n                                            <th resizable style=\"width: 100px;\"> KQ duyệt</th>\n                                            <th resizable style=\"width: 100px;\"> Đậm KQ </th>\n                                            <th resizable style=\"width: 100px;\"> CSBT </th>\n                                            <th resizable style=\"width: 100px;\"> ĐVT</th>\n                                            <th resizable style=\"width: 200px;\"> Giờ tiếp nhận mẫu </th>\n                                            <th resizable style=\"width: 200px;\"> Giờ nhận KQ </th>\n                                            <th resizable style=\"width: 100px;\"> Máy XN</th>\n                                            <th resizable style=\"width: 100px;\"> Người duyệt </th>\n                                            <th resizable style=\"width: 200px;\"> Ngày duyệt </th>\n                                        </thead>\n\n                                        <tbody>\n                                            <ng-container *ngFor=\"let data of dataItem.datas\">\n                                                <tr [class]=\"data.ThoiDiemDuyetKetQua == null ? 'bg-light-red' : ''\">\n                                                    <td [class]=\"!data.IsParent ? 'pl-5' : ''\"\n                                                        [style.font-weight]=\"data.Items !== null && data.Items.length > 0 ? 'bold' : ''\">\n                                                        <ng-container *ngIf=\"data.IsParent\">\n                                                            <span style=\"cursor: pointer;\"\n                                                                (click)=\"data.expanded = !data.expanded\">\n                                                                {{!data.expanded ? '+' : '&ndash;'}}\n                                                            </span>\n                                                        </ng-container>\n                                                        {{data.Ten}}\n                                                    </td>\n                                                    <ng-container *ngIf=\"data.IsRoot\">\n                                                        <td colspan=\"12\"></td>\n                                                    </ng-container>\n                                                    <ng-container *ngIf=\"!data.IsRoot\">\n                                                        <td> {{data.GiaTriCu}} </td>\n                                                        <td> {{data.GiaTriTuMay}} </td>\n                                                        <td> {{data.GiaTriNhapTay}} </td>\n                                                        <td> {{data.GiaTriDuyet}} </td>\n                                                        <td>\n                                                            <app-checkbox id=\"damKetQua{{data.Id}}\" label=\"\"\n                                                                [disabled]=\"true\" [(model)]=\"data.ToDamGiaTri\">\n                                                            </app-checkbox>\n                                                        </td>\n                                                        <td> {{data.CSBT}} </td>\n                                                        <td> {{data.DonVi}} </td>\n                                                        <td> {{data.ThoiDiemGuiYeuCauDisplay}} </td>\n                                                        <td> {{data.ThoiDiemNhanKetQuaDisplay}} </td>\n                                                        <td> {{data.TenMayXetNghiem}} </td>\n                                                        <td> {{data.NguoiDuyet}} </td>\n                                                        <td> {{data.ThoiDiemDuyetKetQuaDisplay}} </td>\n                                                    </ng-container>\n                                                </tr>\n\n                                                <ng-container *ngIf=\"data.expanded\">\n                                                    <ng-container *ngFor=\"let detail of data.Items\">\n                                                        <tr\n                                                            [class]=\"detail.ThoiDiemDuyetKetQua == null ? 'bg-light-red' : ''\">\n                                                            <td [class]=\"!detail.IsParent ? 'pl-12' : 'pl-12'\"\n                                                                [style.font-weight]=\"detail.Items != null && detail.Items.length > 0 ? 'bold' : ''\">\n                                                                <ng-container *ngIf=\"detail.IsParent\">\n                                                                    <span style=\"cursor: pointer;\"\n                                                                        (click)=\"detail.expanded = !detail.expanded\">\n                                                                        {{!detail.expanded ? '+' : '&ndash;'}}\n                                                                    </span>\n                                                                </ng-container>\n                                                                {{detail.Ten}}\n                                                            </td>\n                                                            <td> {{detail.GiaTriCu}} </td>\n                                                            <td\n                                                                [ngStyle]=\"{'color': (detail.LoaiKetQuaTuMay == 1 ? 'black' : (detail.LoaiKetQuaTuMay == 2 ? 'blue' : 'red') )}\">\n                                                                {{detail.GiaTriTuMay}} </td>\n                                                            <td> {{detail.GiaTriNhapTay}} </td>\n                                                            <td> {{detail.GiaTriDuyet}} </td>\n                                                            <td>\n                                                                <app-checkbox id=\"damKetQua{{detail.Id}}\" label=\"\"\n                                                                    [disabled]=\"true\" [(model)]=\"detail.ToDamGiaTri\">\n                                                                </app-checkbox>\n                                                            </td>\n                                                            <td> {{detail.CSBT}} </td>\n                                                            <td> {{detail.DonVi}} </td>\n                                                            <td> {{detail.ThoiDiemGuiYeuCauDisplay}} </td>\n                                                            <td> {{detail.ThoiDiemNhanKetQuaDisplay}} </td>\n                                                            <td> {{detail.TenMayXetNghiem}} </td>\n                                                            <td> {{detail.NguoiDuyet}} </td>\n                                                            <td> {{detail.ThoiDiemDuyetKetQuaDisplay}} </td>\n                                                        </tr>\n\n                                                        <ng-container *ngIf=\"detail.expanded\">\n                                                            <ng-container *ngFor=\"let detail of detail.Items\">\n                                                                <tr\n                                                                    [class]=\"detail.ThoiDiemDuyetKetQua == null ? 'bg-light-red' : ''\">\n                                                                    <td [class]=\"!detail.IsParent ? 'pl-12' : 'pl-12'\">\n                                                                        {{detail.Ten}}</td>\n                                                                    <td> {{detail.GiaTriCu}} </td>\n                                                                    <td> {{detail.GiaTriTuMay}} </td>\n                                                                    <td> {{detail.GiaTriNhapTay}} </td>\n                                                                    <td> {{detail.GiaTriDuyet}} </td>\n                                                                    <td>\n                                                                        <app-checkbox id=\"damKetQua{{detail.Id}}\"\n                                                                            [disabled]=\"true\" label=\"\"\n                                                                            [(model)]=\"detail.ToDamGiaTri\">\n                                                                        </app-checkbox>\n                                                                    </td>\n                                                                    <td> {{detail.CSBT}} </td>\n                                                                    <td> {{detail.DonVi}} </td>\n                                                                    <td> {{detail.ThoiDiemGuiYeuCauDisplay}} </td>\n                                                                    <td> {{detail.ThoiDiemNhanKetQuaDisplay}} </td>\n                                                                    <td> {{detail.TenMayXetNghiem}} </td>\n                                                                    <td> {{detail.NguoiDuyet}} </td>\n                                                                    <td> {{detail.ThoiDiemDuyetKetQuaDisplay}} </td>\n                                                                </tr>\n                                                            </ng-container>\n                                                        </ng-container>\n                                                    </ng-container>\n                                                </ng-container>\n                                            </ng-container>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </ng-template>\n                            <ng-template #sttTemplate let-rowIndex=\"rowIndex\">\n                                {{rowIndex + 1}}\n                            </ng-template>\n                            <ng-template #damKetQuaTemplate let-dataItem>\n                                <app-checkbox id=\"damKetQua{{dataItem.Id}}\" label=\"\" [(model)]=\"dataItem.DamKetQua\"\n                                    disabled=\"{{true}}\">\n                                </app-checkbox>\n                            </ng-template>\n                        </div>\n                    </fieldset>\n\n                    <div fxLayoutAlign=\"start end\">\n                        <button type=\"button\" mat-button class=\"mr-1 mt-4\" (click)=\"quayLai()\"><i\n                                class=\"ft-arrow-left\"></i> Quay\n                            lại</button>\n                        <button *ngIf=\"thongTinHanhChinhXN.TrangThai === true\" type=\"button\"\n                            style=\"background-color: red; color: white; margin-left: auto;\" mat-raised-button\n                            (click)=\"xuLyTuChoi()\"> Từ chối</button>\n                        <button *ngIf=\"thongTinHanhChinhXN.TrangThai === true\" type=\"button\" class=\"ml-2\"\n                            color=\"primary\" mat-raised-button (click)=\"xuLyDuyet()\">\n                            Duyệt</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-list/duyet-yeu-cau-chay-lai-list.component.html": 
        /*!*****************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-list/duyet-yeu-cau-chay-lai-list.component.html ***!
          \*****************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"\n                    [\n                        {Title:'Xét Nghiệm',Path:''},\n                        {Title:'DS Duyệt Yêu Cầu Chạy Lại Xét Nghiệm',Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid #gridParent [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [checkboxAble]=\"false\" [allowSortDefault]=\"true\"\n                [headerTemplate]=\"headerTemplate\" [searchString]=\"timKiemNangCaoObj.SearchString\"\n                [sort] = \"sortDaGoi\"\n                [urlGetData]=\"urlGetDataGridParentAsync\" [urlGetTotalPage]=\"urlGetTotalPageParentAsync\"\n                [detailTemplate]=\"nhomXetNghiemTemplate\" [showStt]=\"true\">\n            </app-grid>\n            <ng-template #nhomXetNghiemTemplate let-dataItem>\n                <app-grid [gridColumns]=\"gridNhomXetNghiemColumns\" [showStt]=\"true\" [documentType]=\"documentType\"\n                    [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                    [lazyLoadPage]=\"true\" [allowSortDefault]=\"false\" searchString=\"{{dataItem.PhienXetNghiemId}}\"\n                    [autoHeight]=\"true\" [pageable]=\"true\" [urlGetData]=\"urlGetDataGridChildAsync\"\n                    [urlGetTotalPage]=\"urlGetTotalPageGridChild\">\n                </app-grid>\n            </ng-template>\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar px-6 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <app-checkbox [(model)]=\"timKiemNangCaoObj.DangChoDuyet\" id=\"choLayMau\" label=\"Chờ xử lý\"\n                        (modelChange)=\"timKiemNangCao()\">\n                    </app-checkbox>\n                    <app-checkbox [(model)]=\"timKiemNangCaoObj.DaDuyet\" id=\"choGuiMau\" label=\"Đã duyệt\" class=\"ml-2\"\n                        (modelChange)=\"timKiemNangCao()\">\n                    </app-checkbox>\n\n                    <div class=\"bg-card rounded-full border px-4 ml-2\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"timKiemNangCaoObj.SearchString\"\n                            (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\"\n                            placeholder=\"Tìm kiếm theo Mã NB, Mã TN, Họ tên, Barcode\" />\n                        <button (click)=\"QuetMaQRCodeClick()\" color=\"primary\" mat-mini-fab type=\"button\"\n                            class=\"button-barcoe-in-search\" kendoTooltip title=\"Phím tắt: Ctrl + Q\">\n                            <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                        </button>\n                        <app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\" style=\"display: none;\">\n                        </app-barcode>\n                    </div>\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\"\n                        (click)=\"clearSearch()\">\n                        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                    </button>\n\n                    <app-daterangepicker id=\"tuNgayDenNgay\" fxFlex=\"300px\" fxFlex.sm=\"auto\" class=\"mt-1 ml-2 on-header\"\n                        [(model)]=\"timKiemNangCaoObj.TuNgayDenNgay\" label=\"Từ ngày - đến ngày\"\n                        (modelChange)=\"timKiemNangCao()\">\n                    </app-daterangepicker>\n\n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"ml-auto\" fxFlex=\"none\" mat-icon-button\n                        kendoTooltip title=\"Lọc cột\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                    </button>\n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of _gridColumnsFilter\">\n                            <button class=\"checkbox-item mat-menu-item\" *ngIf=\"!column.HideFilter\">\n                                <mat-checkbox [disabled]=\"!column.HasFilter\" [(ngModel)]=\"_isCheckColumnFilter\"\n                                    color=\"primary\">\n                                    {{ column.Title }}\n                                </mat-checkbox>\n                            </button>\n                        </div>\n                    </mat-menu>\n\n                    <button class=\"ml-3\" fxFlex=\"none\" (click)=\"exportExcel()\" mat-icon-button kendoTooltip\n                        title=\"Xuất Excel\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                    </button>\n                </div>\n            </ng-template>\n\n            <ng-template #barcodeTemplate let-dataItem>\n                <a (click)=\"xemChiTiet(dataItem)\">\n                    <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.MaBarCode}}\">{{dataItem.MaBarCode}}</p>\n                </a>\n            </ng-template>\n            <ng-template #soDienThoaiTemplate let-dataItem>\n                {{dataItem.SoDienThoaiDisplay}}\n            </ng-template>\n\n            <ng-template #trangThaiNhomTemplate let-dataItem>\n                <div style=\"position: relative;\">\n                    <span [ngClass]=\"{'orangeText': dataItem.TrangThai == 1,\n                                      'greenText': dataItem.TrangThai == 2}\">\n                        {{dataItem.TenTrangThai}}\n                    </span>\n                </div>\n            </ng-template>\n\n            <ng-template #tinhTrangTemplate let-dataItem>\n                <div style=\"position: relative;\">\n                    <span [ngClass]=\"{'orangeText': dataItem.TrangThai == 1,\n                                'greenText': dataItem.TrangThai == 2,\n                                'redText': dataItem.TrangThai == 3}\">\n                        {{dataItem.TenTrangThai}}\n                    </span>\n                </div>\n            </ng-template>\n\n            <ng-template #ngayDuyetKetQuaTemplate let-dataItem>\n                {{dataItem.NgayDuyetKetQuaDisplay}}\n            </ng-template>\n            <ng-template #ngayYeuCauTemplate let-dataItem>\n                {{dataItem.NgayYeuCauDisplay}}\n            </ng-template>\n            <ng-template #ngayNgayDuyetTemplate let-dataItem>\n                {{dataItem.NgayDuyetDisplay}}\n            </ng-template>\n\n            <ng-template #actionTemplate let-dataItem>\n                <div class=\"text-center\" kendoTooltip *ngIf=\"dataItem.TrangThai != 2\">\n                    <button type=\"button\" style=\"background-color: red; color: white;\" mat-raised-button\n                        (click)=\"xuLyTuChoi(dataItem)\">\n                        <i class=\"ft-edit\"></i> Từ chối</button>\n                    <button type=\"button\" class=\"ml-2\" color=\"primary\" mat-raised-button (click)=\"xuLyDuyet(dataItem)\">\n                        <i class=\"ft-edit\"></i> Duyệt</button>\n                </div>\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-tu-choi-popup/duyet-yeu-cau-chay-lai-tu-choi-popup.component.html": 
        /*!***********************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-tu-choi-popup/duyet-yeu-cau-chay-lai-tu-choi-popup.component.html ***!
          \***********************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>{{Title}}</div>\n    <button type=\"button\" mat-icon-button (click)=\"close(null)\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <div fxFlex=\"100\" fxFlex.sm=\"100\" [innerHtml]=\"Message\"></div>\n    \n        <app-textarea id=\"lyDo\" [(model)]=\"lyDo\" fxFlex=\"100\" fxFlex.sm=\"100\" maxlength=\"1000\" label=\"Lý do\"\n            minHeight=\"40\" [required]=\"true\">\n        </app-textarea>\n    </div>\n</mat-dialog-content>\n\n\n<mat-dialog-actions align=\"end\" class=\"mt-3\">\n    <button mat-button (click)=\"close(null)\">Không</button>\n    <button mat-button color=\"primary\" [disabled]=\"!lyDo\" (click)=\"close('ok')\">Có</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/directives/resizable/resizable/resizable.component.html": 
        /*!**********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/directives/resizable/resizable/resizable.component.html ***!
          \**********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n\t<div class=\"content\">\n\t\t<ng-content></ng-content>\n\t</div>\n\t<div class=\"bar\" (resizable)=\"onResize($event)\"></div>\n</div>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-duyet/duyet-yeu-cau-chay-lai-duyet.component.scss": 
        /*!*****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-duyet/duyet-yeu-cau-chay-lai-duyet.component.scss ***!
          \*****************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("fieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em;\n  padding-bottom: 0.625em;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline !important;\n}\n\n.order-color {\n  display: flex;\n  flex-direction: row;\n  gap: 15px;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.order-color .set-color {\n  padding: 10px 40px;\n}\n\n.order-color .set-color.black {\n  background-color: black;\n}\n\n.order-color .set-color.red {\n  background-color: red;\n}\n\n.order-color .set-color.blue {\n  background-color: blue;\n}\n\ntable {\n  width: 100%;\n  background-color: white;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\ntable th {\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\ntable th.w-350 {\n  width: 350px;\n}\n\ntable tr.bg-light-red {\n  background-color: #eaa3a3;\n}\n\n.yellowText {\n  color: yellowgreen;\n}\n\n.redText {\n  color: red;\n}\n\n.greenText {\n  color: green;\n}\n\n.orangeText {\n  color: orange;\n}\n\n.blueText {\n  color: blue;\n}\n\n.blackText {\n  color: black;\n}\n\n.div-header {\n  justify-content: space-between !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0vZHV5ZXQteWV1LWNhdS1jaGF5LWxhaS9kdXlldC15ZXUtY2F1LWNoYXktbGFpLWR1eWV0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxceGV0LW5naGllbVxcZHV5ZXQteWV1LWNhdS1jaGF5LWxhaVxcZHV5ZXQteWV1LWNhdS1jaGF5LWxhaS1kdXlldFxcZHV5ZXQteWV1LWNhdS1jaGF5LWxhaS1kdXlldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0vZHV5ZXQteWV1LWNhdS1jaGF5LWxhaS9kdXlldC15ZXUtY2F1LWNoYXktbGFpLWR1eWV0L2R1eWV0LXlldS1jYXUtY2hheS1sYWktZHV5ZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsMEJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLHlDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4veGV0LW5naGllbS9kdXlldC15ZXUtY2F1LWNoYXktbGFpL2R1eWV0LXlldS1jYXUtY2hheS1sYWktZHV5ZXQvZHV5ZXQteWV1LWNhdS1jaGF5LWxhaS1kdXlldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbTtcbiAgYm9yZGVyOiAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xufVxuXG5maWVsZHNldCAuaXRlbV9yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuZmllbGRzZXQgdWwgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuZmllbGRzZXQgdWwuaW5saW5lID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbn1cblxuLm9yZGVyLWNvbG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiAxNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ub3JkZXItY29sb3IgLnNldC1jb2xvciB7XG4gIHBhZGRpbmc6IDEwcHggNDBweDtcbn1cblxuLm9yZGVyLWNvbG9yIC5zZXQtY29sb3IuYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLm9yZGVyLWNvbG9yIC5zZXQtY29sb3IucmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4ub3JkZXItY29sb3IgLnNldC1jb2xvci5ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG50YWJsZSB0aCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG50YWJsZSB0aC53LTM1MCB7XG4gIHdpZHRoOiAzNTBweDtcbn1cblxudGFibGUgdHIuYmctbGlnaHQtcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhYTNhMztcbn1cblxuLnllbGxvd1RleHQge1xuICBjb2xvcjogeWVsbG93Z3JlZW47XG59XG5cbi5yZWRUZXh0IHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmdyZWVuVGV4dCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLm9yYW5nZVRleHQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uYmx1ZVRleHQge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLmJsYWNrVGV4dCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmRpdi1oZWFkZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbn0iLCJmaWVsZHNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgcGFkZGluZy10b3A6IDAuMzVlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW07XG4gIHBhZGRpbmctbGVmdDogMC43NWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1ZW07XG4gIGJvcmRlcjogMXB4ICNlMGUwZTA7XG4gIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcbn1cblxuZmllbGRzZXQgLml0ZW1fcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmZpZWxkc2V0IHVsID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmZpZWxkc2V0IHVsLmlubGluZSA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG59XG5cbi5vcmRlci1jb2xvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGdhcDogMTVweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm9yZGVyLWNvbG9yIC5zZXQtY29sb3Ige1xuICBwYWRkaW5nOiAxMHB4IDQwcHg7XG59XG5cbi5vcmRlci1jb2xvciAuc2V0LWNvbG9yLmJsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5vcmRlci1jb2xvciAuc2V0LWNvbG9yLnJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLm9yZGVyLWNvbG9yIC5zZXQtY29sb3IuYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxudGFibGUgdGgge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxudGFibGUgdGgudy0zNTAge1xuICB3aWR0aDogMzUwcHg7XG59XG5cbnRhYmxlIHRyLmJnLWxpZ2h0LXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWEzYTM7XG59XG5cbi55ZWxsb3dUZXh0IHtcbiAgY29sb3I6IHllbGxvd2dyZWVuO1xufVxuXG4ucmVkVGV4dCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5ncmVlblRleHQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5vcmFuZ2VUZXh0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmJsdWVUZXh0IHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbi5ibGFja1RleHQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5kaXYtaGVhZGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-duyet/duyet-yeu-cau-chay-lai-duyet.component.ts": 
        /*!***************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-duyet/duyet-yeu-cau-chay-lai-duyet.component.ts ***!
          \***************************************************************************************************************************************/
        /*! exports provided: DuyetYeuCauChayLaiDuyetComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetYeuCauChayLaiDuyetComponent", function () { return DuyetYeuCauChayLaiDuyetComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _duyet_yeu_cau_chay_lai_tu_choi_popup_duyet_yeu_cau_chay_lai_tu_choi_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../duyet-yeu-cau-chay-lai-tu-choi-popup/duyet-yeu-cau-chay-lai-tu-choi-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-tu-choi-popup/duyet-yeu-cau-chay-lai-tu-choi-popup.component.ts");
            /* harmony import */ var _duyet_yeu_cau_chay_lai_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../duyet-yeu-cau-chay-lai.model */ "./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai.model.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_14__);
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var DuyetYeuCauChayLaiDuyetComponent = /** @class */ (function () {
                function DuyetYeuCauChayLaiDuyetComponent(router, authService, route, notificationService, dialog, apiService) {
                    this.router = router;
                    this.authService = authService;
                    this.route = route;
                    this.notificationService = notificationService;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.baseRoute = "xet-nghiem/duyet-yeu-cau-chay-lai";
                    this.gridNhomXetNghiemColumns = [];
                    this.gridDichVuColumns = [];
                    this.id = 0;
                    this.phienXetNghiemId = 0;
                    this.thongTinHanhChinhXN = {};
                    this.danhSachGoiXetNghiemLai = {};
                    this.urlGetDataGridParentAsync = "XetNghiem/GetDanhSachKQChiTietXetNghiemForGrid";
                    this.urlGetTotalPageParentAsync = "XetNghiem/GetTotalDanhSachKQChiTietXetNghiemForGrid";
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_14___default.a;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"];
                    this.searchString = null;
                    this.gridDataXNChayLaiSource = {
                        Data: [],
                        TotalRowCount: 0
                    };
                    this.danhSachChoDuyetlais = [];
                    this.data = null;
                }
                DuyetYeuCauChayLaiDuyetComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__["DocumentType"].DuyetYeuCauChayLaiXetNghiem;
                    this.id = this.route.snapshot.params.id;
                    this.phienXetNghiemId = this.route.snapshot.params.phienXetNghiemId;
                    if (this.phienXetNghiemId != undefined && this.phienXetNghiemId != null) {
                        this.getThongTinHanhChinhXN(this.phienXetNghiemId);
                    }
                    this.gridNhomXetNghiemColumns = [
                        { Field: "TenNhomDichVuBenhVien", Title: "Nhóm XN", Width: 160, Sortable: true },
                        { Field: "Barcode", Title: "Mã Barcode", Width: 120, Sortable: true },
                        { Field: "NguoiYeuCau", Title: "Người yêu cầu", Width: 120, Sortable: true },
                        { Field: "NgayYeuCauDisplay", Title: "Ngày yêu cầu", Width: 80, Sortable: true },
                        { Field: "LyDoYeuCau", Title: "Lý do yêu cầu", Width: 120, Sortable: true },
                        { Field: "TinhTrang", Title: "Tình Trạng", Width: 120, Sortable: true, Template: this.trangThaiTemplate },
                        { Field: "NguoiDuyet", Title: "Người duyệt", Width: 120, Sortable: true },
                        { Field: "NgayDuyetDisplay", Title: "Ngày duyệt", Width: 80, Sortable: true },
                        { Field: "LyDo", Title: "Lý do", Width: 120, Sortable: true }
                    ];
                    // gán màu cho row trong api get datasource, thêm properties HighLightClass
                    this.gridDichVuColumns = [
                        { Field: "STT", Title: "#", Width: 30, Sortable: false, Template: this.sttTemplate },
                        { Field: "TenDichVu", Title: "Tên", Width: 160, Sortable: true },
                        { Field: "KetQuaCu", Title: "KQ cũ", Width: 80, Sortable: true },
                        { Field: "KetQuaTuMay", Title: "KQ từ máy", Width: 100, Sortable: true },
                        { Field: "KetQuaNhapTay", Title: "KQ nhập tay", Width: 100, Sortable: true },
                        { Field: "KetQuaDuyet", Title: "KQ duyệt", Width: 100, Sortable: true },
                        { Field: "DamKetQua", Title: "Đậm KQ", Width: 50, Sortable: true, Template: this.damKetQuaTemplate },
                        { Field: "ChiSoBinhThuong", Title: "CSBT", Width: 80, Sortable: true },
                        { Field: "DVT", Title: "DVT", Width: 60, Sortable: true },
                        { Field: "GioTiepNhanMau", Title: "Giờ tiếp nhận mẫu", Width: 100, Sortable: true },
                        { Field: "GioNhanKetQua", Title: "Giờ nhận KQ", Width: 100, Sortable: true },
                        { Field: "MayXetNghiem", Title: "Máy XN", Width: 100, Sortable: true },
                        { Field: "NguoiDuyet", Title: "Người duyệt", Width: 120, Sortable: true },
                        { Field: "NgayDuyet", Title: "Ngày duyệt", Width: 80, Sortable: true }
                    ];
                };
                DuyetYeuCauChayLaiDuyetComponent.prototype.getThongTinHanhChinhXN = function (id) {
                    var _this = this;
                    this.apiService.get("XetNghiem/ThongTinHanhChinhXN/" + id)
                        .subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.thongTinHanhChinhXN = resultData;
                        }
                    });
                };
                DuyetYeuCauChayLaiDuyetComponent.prototype.xuLyTuChoi = function () {
                    var _this = this;
                    this.dialog.open(_duyet_yeu_cau_chay_lai_tu_choi_popup_duyet_yeu_cau_chay_lai_tu_choi_popup_component__WEBPACK_IMPORTED_MODULE_12__["DuyetYeuCauChayLaiTuChoiPopupComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: "Bạn có chắc muốn từ chối yêu cầu chạy lại xét nghiệm này không?" }
                    }).afterClosed().subscribe(function (result) {
                        if (result !== null) {
                            var tuChoiYeuCauGoiLaiXetNghiem = new _duyet_yeu_cau_chay_lai_model__WEBPACK_IMPORTED_MODULE_13__["TuChoiYeuCauGoiLaiXetNghiem"]();
                            tuChoiYeuCauGoiLaiXetNghiem.PhienXetNghiemId = _this.phienXetNghiemId;
                            tuChoiYeuCauGoiLaiXetNghiem.LyDoTuChoi = result;
                            _this.apiService.post("XetNghiem/TuChoiXetNghiemLai", tuChoiYeuCauGoiLaiXetNghiem)
                                .subscribe(function (resultData) {
                                _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].ActionSuccessfully, ["Từ chối"]));
                                _this.quayLai();
                            }, function (err) {
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                            });
                        }
                    });
                };
                DuyetYeuCauChayLaiDuyetComponent.prototype.onDataBound = function (event) {
                    if (event != undefined && event.Data.length > 0) {
                        this.danhSachChoDuyetlais = event.Data.slice();
                        this.data = JSON.stringify(event.Data);
                    }
                };
                DuyetYeuCauChayLaiDuyetComponent.prototype.xuLyDuyet = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
                        var self = this;
                        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn duyệt yêu cầu chạy lại xét nghiệm này không?" }
                        }).afterClosed().subscribe(function (result) {
                            if (result == "Yes") {
                                _this.danhSachGoiXetNghiemLai.DuyetYeuCauGoiLaiXetNghiems = [];
                                _this.danhSachChoDuyetlais.forEach(function (element) {
                                    var duyet = new _duyet_yeu_cau_chay_lai_model__WEBPACK_IMPORTED_MODULE_13__["DuyetYeuCauGoiLaiXetNghiem"]();
                                    duyet.Id = element.Id,
                                        duyet.NhanVienYeuCauId = element.NhanVienYeuCauId,
                                        _this.danhSachGoiXetNghiemLai.DuyetYeuCauGoiLaiXetNghiems.push(duyet);
                                });
                                self.apiService.post("XetNghiem/DuyetXetNghiemLai", _this.danhSachGoiXetNghiemLai).subscribe(function (resultData) {
                                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].ActionSuccessfully, ["Duyệt"]));
                                    _this.quayLai();
                                }, function (err) {
                                    if (err.Message != "Validation Failed") {
                                        self.notificationService.showError(err.Message);
                                    }
                                });
                            }
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DuyetYeuCauChayLaiDuyetComponent.prototype.quayLai = function () {
                    this.router.navigate([this.baseRoute], { queryParams: { holdQuery: true } });
                };
                DuyetYeuCauChayLaiDuyetComponent.prototype.searchChanges = function (event) {
                    this.searchString = event;
                    if (!event) {
                        this.gridDuyetYeuCauChayLaiXN.searchString = this.searchString;
                        this.gridDuyetYeuCauChayLaiXN.search();
                    }
                };
                DuyetYeuCauChayLaiDuyetComponent.prototype.onKeySearchChanges = function (event) {
                    if (event.keyCode == 13) {
                        this.gridDuyetYeuCauChayLaiXN.searchString = this.searchString;
                        this.gridDuyetYeuCauChayLaiXN.search();
                    }
                };
                return DuyetYeuCauChayLaiDuyetComponent;
            }());
            DuyetYeuCauChayLaiDuyetComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
            ], DuyetYeuCauChayLaiDuyetComponent.prototype, "sttTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('damKetQuaTemplate', { static: true })
            ], DuyetYeuCauChayLaiDuyetComponent.prototype, "damKetQuaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
            ], DuyetYeuCauChayLaiDuyetComponent.prototype, "trangThaiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDuyetYeuCauChayLaiXN', { static: false })
            ], DuyetYeuCauChayLaiDuyetComponent.prototype, "gridDuyetYeuCauChayLaiXN", void 0);
            DuyetYeuCauChayLaiDuyetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duyet-yeu-cau-chay-lai-duyet',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-yeu-cau-chay-lai-duyet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-duyet/duyet-yeu-cau-chay-lai-duyet.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-yeu-cau-chay-lai-duyet.component.scss */ "./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-duyet/duyet-yeu-cau-chay-lai-duyet.component.scss")).default]
                })
            ], DuyetYeuCauChayLaiDuyetComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-list/duyet-yeu-cau-chay-lai-list.component.scss": 
        /*!***************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-list/duyet-yeu-cau-chay-lai-list.component.scss ***!
          \***************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".yellowText {\n  color: yellowgreen;\n}\n\n.redText {\n  color: red;\n}\n\n.greenText {\n  color: green;\n}\n\n.orangeText {\n  color: orange;\n}\n\n.blueText {\n  color: blue;\n}\n\n.blackText {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0vZHV5ZXQteWV1LWNhdS1jaGF5LWxhaS9kdXlldC15ZXUtY2F1LWNoYXktbGFpLWxpc3QvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx4ZXQtbmdoaWVtXFxkdXlldC15ZXUtY2F1LWNoYXktbGFpXFxkdXlldC15ZXUtY2F1LWNoYXktbGFpLWxpc3RcXGR1eWV0LXlldS1jYXUtY2hheS1sYWktbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0vZHV5ZXQteWV1LWNhdS1jaGF5LWxhaS9kdXlldC15ZXUtY2F1LWNoYXktbGFpLWxpc3QvZHV5ZXQteWV1LWNhdS1jaGF5LWxhaS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi94ZXQtbmdoaWVtL2R1eWV0LXlldS1jYXUtY2hheS1sYWkvZHV5ZXQteWV1LWNhdS1jaGF5LWxhaS1saXN0L2R1eWV0LXlldS1jYXUtY2hheS1sYWktbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi55ZWxsb3dUZXh0IHtcbiAgY29sb3I6IHllbGxvd2dyZWVuO1xufVxuXG4ucmVkVGV4dCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5ncmVlblRleHQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5vcmFuZ2VUZXh0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmJsdWVUZXh0IHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbi5ibGFja1RleHQge1xuICBjb2xvcjogYmxhY2s7XG59IiwiLnllbGxvd1RleHQge1xuICBjb2xvcjogeWVsbG93Z3JlZW47XG59XG5cbi5yZWRUZXh0IHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmdyZWVuVGV4dCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLm9yYW5nZVRleHQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uYmx1ZVRleHQge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLmJsYWNrVGV4dCB7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-list/duyet-yeu-cau-chay-lai-list.component.ts": 
        /*!*************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-list/duyet-yeu-cau-chay-lai-list.component.ts ***!
          \*************************************************************************************************************************************/
        /*! exports provided: DuyetYeuCauChayLaiListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetYeuCauChayLaiListComponent", function () { return DuyetYeuCauChayLaiListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_9__);
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_10__);
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_11__);
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12__);
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var _duyet_yeu_cau_chay_lai_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../duyet-yeu-cau-chay-lai.model */ "./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai.model.ts");
            /* harmony import */ var _duyet_yeu_cau_chay_lai_tu_choi_popup_duyet_yeu_cau_chay_lai_tu_choi_popup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../duyet-yeu-cau-chay-lai-tu-choi-popup/duyet-yeu-cau-chay-lai-tu-choi-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-tu-choi-popup/duyet-yeu-cau-chay-lai-tu-choi-popup.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            var DuyetYeuCauChayLaiListComponent = /** @class */ (function () {
                function DuyetYeuCauChayLaiListComponent(authService, notificationService, router, route, location, dialog, apiService) {
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.router = router;
                    this.route = route;
                    this.location = location;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_9___default.a;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_10___default.a;
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_11___default.a;
                    this.gridColumns = [];
                    this.gridNhomXetNghiemColumns = [];
                    this.gridDichVuColumns = [];
                    this.isScanF1 = false;
                    this._gridColumnsFilter = [];
                    this._isCheckColumnFilter = true;
                    this.danhSachGoiXetNghiemLai = {};
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
                    this.timKiemNangCaoObj = new _duyet_yeu_cau_chay_lai_model__WEBPACK_IMPORTED_MODULE_14__["DuyetYeuCauChayLaiXetNghiemTimKiem"]();
                    this.baseRoute = "/xet-nghiem/duyet-yeu-cau-chay-lai";
                    this.urlGetDataGridParentAsync = "XetNghiem/GetDanhSachYeuCauChayLaiXetNghiemForGrid";
                    this.urlGetTotalPageParentAsync = "XetNghiem/GetTotalDanhSachYeuCauChayLaiXetNghiemForGrid";
                    this.urlGetDataGridChildAsync = "XetNghiem/GetDanhSachYeuCauChayLaiXetNghiemChiTietForGrid";
                    this.urlGetTotalPageGridChild = "XetNghiem/GetTotalDanhSachYeuCauChayLaiXetNghiemChiTietForGrid";
                    this.sortDaGoi = [{
                            field: "TrangThai",
                            dir: "asc"
                        }];
                }
                DuyetYeuCauChayLaiListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__["DocumentType"].DuyetYeuCauChayLaiXetNghiem;
                    var hasLocalSearchString = false;
                    if (this.route.snapshot.queryParams.holdQuery != undefined) {
                        var holdQuery = this.route.snapshot.queryParams.holdQuery;
                        if (holdQuery != null && holdQuery) {
                            var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_7__["LocalStorageHelper"].getItem("additionalSearchStringDanhSachDuyetYeuCauChayKaiXetNghiem");
                            if (additionalSearchString != null) {
                                this.timKiemNangCaoObj = JSON.parse(additionalSearchString);
                                // if (this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != '') {
                                //   this.timKiemNangCaoObj.TuNgayDenNgay.startDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgay.startDate);
                                // }
                                // if (this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != '') {
                                //   this.timKiemNangCaoObj.TuNgayDenNgay.endDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgay.endDate);
                                // }
                                this.convertDateTimeToUTC();
                                // this.gridChild.additionalSearchString = additionalSearchString;
                                this.gridChild.additionalSearchString = JSON.stringify(this.timKiemNangCaoObj);
                                this.reverseDateTime();
                                hasLocalSearchString = true;
                            }
                        }
                    }
                    if (!hasLocalSearchString) {
                        this.gridChild.additionalSearchString = "";
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_7__["LocalStorageHelper"].removeItem("additionalSearchStringDanhSachDuyetYeuCauChayKaiXetNghiem");
                    }
                    this.gridColumns = [
                        { Field: "MaBarCode", Title: "Barcode", Width: 80, Sortable: true, Template: this.barcodeTemplate },
                        { Field: "MaTN", Title: "Mã TN", Width: 80, Sortable: true },
                        { Field: "MaBN", Title: "Mã NB", Width: 80, Sortable: true },
                        { Field: "HoTen", Title: "Họ tên", Width: 100, Sortable: true },
                        { Field: "GioiTinh", Title: "Giới tính", Width: 80, Sortable: true },
                        { Field: "NamSinh", Title: "Năm sinh", Width: 80, Sortable: true },
                        { Field: "DiaChi", Title: "Địa chỉ", Width: 80, Sortable: true },
                        { Field: "TrangThai", Title: "Trạng thái", Width: 100, Template: this.trangThaiNhomTemplate },
                        { Field: "NguoiDuyetKetQua", Title: "Người duyệt KQ", Width: 100, Sortable: true },
                        { Field: "NgayDuyetKetQua", Title: "Ngày duyệt KQ", Width: 100, Sortable: true, Template: this.ngayDuyetKetQuaTemplate },
                        { Field: "Action", Title: "", Width: 110, Sortable: false, Template: this.actionTemplate }
                    ];
                    this.gridNhomXetNghiemColumns = [
                        { Field: "NhomXetNghiem", Title: "Nhóm XN", Width: 160, Sortable: false },
                        { Field: "NguoiYeuCau", Title: "Người yêu cầu", Width: 100, Sortable: false },
                        { Field: "NgayYeuCau", Title: "Ngày yêu cầu", Width: 100, Sortable: false, Template: this.ngayYeuCauTemplate },
                        { Field: "LyDoYeuCau", Title: "Lý do yêu cầu", Width: 120, Sortable: false },
                        { Field: "TinhTrang", Title: "Tình trạng", Width: 80, Sortable: false, Template: this.tinhTrangTemplate },
                        { Field: "NguoiDuyet", Title: "Người duyệt", Width: 120, Sortable: false },
                        { Field: "NgayDuyet", Title: "Ngày duyệt", Width: 100, Sortable: false, Template: this.ngayNgayDuyetTemplate },
                        { Field: "LyDoTuChoi", Title: "Lý do", Width: 120, Sortable: false }
                    ];
                    this._gridColumnsFilter = this.gridColumns.filter(function (p) { return p.Title != ''; });
                };
                DuyetYeuCauChayLaiListComponent.prototype.searchChanges = function (event) {
                    var self = this;
                    if (event != null && typeof event == "string" && event.endsWith("@")) {
                        self.timeoutSearchChange = setTimeout(function () {
                            self.modelQRCode = event;
                            self.changeQR(self.modelQRCode);
                        }, 10);
                    }
                    else if (event == null || event == "") {
                        this.modelQRCode = null;
                        this.timKiemNangCao();
                    }
                };
                DuyetYeuCauChayLaiListComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.timKiemNangCao();
                    }
                };
                DuyetYeuCauChayLaiListComponent.prototype.clearSearch = function () {
                    this.timKiemNangCaoObj.SearchString = null;
                    this.gridChild.searchString = null;
                    this.timKiemNangCao();
                };
                DuyetYeuCauChayLaiListComponent.prototype.timKiemNangCao = function () {
                    this.location.replaceState(this.baseRoute + '?holdQuery=true');
                    // if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.startDate != null) {
                    //   this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.startDate, "mm/dd/yyyy");
                    // }
                    // else {
                    //   this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = null;
                    // }
                    // if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.endDate != null) {
                    //   this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.endDate, "mm/dd/yyyy");
                    // }
                    // else {
                    //   this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = null;
                    // }
                    // var queryString = JSON.stringify(this.timKiemNangCaoObj);
                    // this.gridChild._additionalSearchString = queryString;
                    // LocalStorageHelper.setItem("additionalSearchStringDanhSachDuyetYeuCauChayKaiXetNghiem", queryString);
                    // this.gridChild.search();
                    this.convertDateTimeToUTC();
                    var query = JSON.stringify(this.timKiemNangCaoObj);
                    this.gridChild._additionalSearchString = query;
                    this.gridChild.searchString = this.timKiemNangCaoObj.SearchString;
                    this.gridChild.search();
                    this.reverseDateTime();
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_7__["LocalStorageHelper"].setItem("additionalSearchStringDanhSachDuyetYeuCauChayKaiXetNghiem", JSON.stringify(this.timKiemNangCaoObj));
                };
                DuyetYeuCauChayLaiListComponent.prototype.QuetMaQRCodeClick = function () {
                    var elementBarcode = document.getElementById("barcodeActive");
                    if (elementBarcode != undefined) {
                        elementBarcode.click();
                    }
                };
                DuyetYeuCauChayLaiListComponent.prototype.changeQR = function (event) {
                    if (event != null && typeof event == "string" && event.endsWith("@")) {
                        var dataTimKiem = event.split("|");
                        if (dataTimKiem.length > 1) {
                            this.timKiemNangCaoObj.SearchString = dataTimKiem[0];
                        }
                        else {
                            this.timKiemNangCaoObj.SearchString = event.slice(0, -1);
                        }
                        this.timKiemNangCao();
                    }
                    else {
                        this.notificationService.showError("Không tìm thấy thông tin cần tìm.");
                    }
                    this.isScanF1 = false;
                };
                DuyetYeuCauChayLaiListComponent.prototype.keyEvent = function (event) {
                    if (event.keyCode == 81 && event.ctrlKey && this.isScanF1 != true) {
                        this.isScanF1 = true;
                        event.preventDefault();
                        this.QuetMaQRCodeClick();
                    }
                };
                DuyetYeuCauChayLaiListComponent.prototype.xemChiTiet = function (dataItem) {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Update)) {
                        this.router.navigate(["/xet-nghiem/duyet-yeu-cau-chay-lai/chi-tiet/" + dataItem.Id + "/" + dataItem.PhienXetNghiemId]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DuyetYeuCauChayLaiListComponent.prototype.xuLyTuChoi = function (dataItem) {
                    var _this = this;
                    this.dialog.open(_duyet_yeu_cau_chay_lai_tu_choi_popup_duyet_yeu_cau_chay_lai_tu_choi_popup_component__WEBPACK_IMPORTED_MODULE_15__["DuyetYeuCauChayLaiTuChoiPopupComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: "Bạn có chắc muốn từ chối yêu cầu chạy lại xét nghiệm này không?" }
                    }).afterClosed().subscribe(function (result) {
                        if (result !== null && result !== undefined && result !== "") {
                            var tuChoiYeuCauGoiLaiXetNghiem = new _duyet_yeu_cau_chay_lai_model__WEBPACK_IMPORTED_MODULE_14__["TuChoiYeuCauGoiLaiXetNghiem"]();
                            tuChoiYeuCauGoiLaiXetNghiem.PhienXetNghiemId = dataItem.PhienXetNghiemId;
                            tuChoiYeuCauGoiLaiXetNghiem.LyDoTuChoi = result;
                            _this.apiService.post("XetNghiem/TuChoiXetNghiemLai", tuChoiYeuCauGoiLaiXetNghiem)
                                .subscribe(function (resultData) {
                                _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].ActionSuccessfully, ["Từ chối"]));
                                _this.gridChild.search();
                            }, function (err) {
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                            });
                        }
                    });
                };
                DuyetYeuCauChayLaiListComponent.prototype.xuLyDuyet = function (dataItem) {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Update)) {
                        var self = this;
                        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn duyệt yêu cầu chạy lại xét nghiệm này không?" }
                        }).afterClosed().subscribe(function (result) {
                            if (result == "Yes") {
                                self.danhSachGoiXetNghiemLai.DuyetYeuCauGoiLaiXetNghiems = [];
                                dataItem.DanhSachPhienXetNghiemIds.forEach(function (element) {
                                    var duyet = new _duyet_yeu_cau_chay_lai_model__WEBPACK_IMPORTED_MODULE_14__["DuyetYeuCauGoiLaiXetNghiem"]();
                                    duyet.Id = element;
                                    duyet.NhanVienYeuCauId = dataItem.NhanVienYeuCauId;
                                    self.danhSachGoiXetNghiemLai.DuyetYeuCauGoiLaiXetNghiems.push(duyet);
                                });
                                self.apiService.post("XetNghiem/DuyetXetNghiemLai", self.danhSachGoiXetNghiemLai).subscribe(function (resultData) {
                                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].ActionSuccessfully, ["Duyệt"]));
                                    _this.gridChild.search();
                                }, function (err) {
                                    if (err.Message != "Validation Failed") {
                                        self.notificationService.showError(err.Message);
                                    }
                                });
                            }
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DuyetYeuCauChayLaiListComponent.prototype.exportExcel = function () {
                    var self = this;
                    self.showPopupLoadingData();
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Process)) {
                        self.apiService.postExportExcel('XetNghiem/ExportYeuCauXetNghiemChayLai', self.gridChild._gridQueryInfo).subscribe(function (resultData) {
                            self.closePopupLoadingData();
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'YeuCauXetNghiemChayLai' + dateTimeNow.getFullYear() + '.xlsx');
                        }, function (err) {
                            self.notificationService.showError(err.Message);
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DuyetYeuCauChayLaiListComponent.prototype.showPopupLoadingData = function () {
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_21__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                };
                DuyetYeuCauChayLaiListComponent.prototype.closePopupLoadingData = function () {
                    this.dialog.closeAll();
                };
                DuyetYeuCauChayLaiListComponent.prototype.convertDateTimeToUTC = function () {
                    if (this.timKiemNangCaoObj.TuNgayDenNgay.startDate) {
                        this.duyetYeuCauChayLaiTuNgay = new Date(this.timKiemNangCaoObj.TuNgayDenNgay.startDate);
                        this.timKiemNangCaoObj.TuNgayDenNgay.startDate = new Date(Date.UTC(this.duyetYeuCauChayLaiTuNgay.getFullYear(), this.duyetYeuCauChayLaiTuNgay.getMonth(), this.duyetYeuCauChayLaiTuNgay.getDate(), this.duyetYeuCauChayLaiTuNgay.getHours(), this.duyetYeuCauChayLaiTuNgay.getMinutes()));
                    }
                    if (this.timKiemNangCaoObj.TuNgayDenNgay.endDate) {
                        this.duyetYeuCauChayLaiDenNgay = new Date(this.timKiemNangCaoObj.TuNgayDenNgay.endDate);
                        this.timKiemNangCaoObj.TuNgayDenNgay.endDate = new Date(Date.UTC(this.duyetYeuCauChayLaiDenNgay.getFullYear(), this.duyetYeuCauChayLaiDenNgay.getMonth(), this.duyetYeuCauChayLaiDenNgay.getDate(), this.duyetYeuCauChayLaiDenNgay.getHours(), this.duyetYeuCauChayLaiDenNgay.getMinutes()));
                    }
                };
                DuyetYeuCauChayLaiListComponent.prototype.reverseDateTime = function () {
                    if (this.timKiemNangCaoObj.TuNgayDenNgay.startDate) {
                        this.timKiemNangCaoObj.TuNgayDenNgay.startDate = new Date(this.duyetYeuCauChayLaiTuNgay.getFullYear(), this.duyetYeuCauChayLaiTuNgay.getMonth(), this.duyetYeuCauChayLaiTuNgay.getDate(), this.duyetYeuCauChayLaiTuNgay.getHours(), this.duyetYeuCauChayLaiTuNgay.getMinutes());
                    }
                    if (this.timKiemNangCaoObj.TuNgayDenNgay.endDate) {
                        this.timKiemNangCaoObj.TuNgayDenNgay.endDate = new Date(this.duyetYeuCauChayLaiDenNgay.getFullYear(), this.duyetYeuCauChayLaiDenNgay.getMonth(), this.duyetYeuCauChayLaiDenNgay.getDate(), this.duyetYeuCauChayLaiDenNgay.getHours(), this.duyetYeuCauChayLaiDenNgay.getMinutes());
                    }
                };
                return DuyetYeuCauChayLaiListComponent;
            }());
            DuyetYeuCauChayLaiListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_20__["ApiService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('sttTemplate', { static: true })
            ], DuyetYeuCauChayLaiListComponent.prototype, "sttTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('barcodeTemplate', { static: true })
            ], DuyetYeuCauChayLaiListComponent.prototype, "barcodeTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('trangThaiNhomTemplate', { static: true })
            ], DuyetYeuCauChayLaiListComponent.prototype, "trangThaiNhomTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('ngayDuyetKetQuaTemplate', { static: true })
            ], DuyetYeuCauChayLaiListComponent.prototype, "ngayDuyetKetQuaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('ngayYeuCauTemplate', { static: true })
            ], DuyetYeuCauChayLaiListComponent.prototype, "ngayYeuCauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('ngayNgayDuyetTemplate', { static: true })
            ], DuyetYeuCauChayLaiListComponent.prototype, "ngayNgayDuyetTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tinhTrangTemplate', { static: true })
            ], DuyetYeuCauChayLaiListComponent.prototype, "tinhTrangTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('actionTemplate', { static: true })
            ], DuyetYeuCauChayLaiListComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('gridParent', { static: true })
            ], DuyetYeuCauChayLaiListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])("document:keydown", ["$event"])
            ], DuyetYeuCauChayLaiListComponent.prototype, "keyEvent", null);
            DuyetYeuCauChayLaiListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-duyet-yeu-cau-chay-lai-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-yeu-cau-chay-lai-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-list/duyet-yeu-cau-chay-lai-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-yeu-cau-chay-lai-list.component.scss */ "./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-list/duyet-yeu-cau-chay-lai-list.component.scss")).default]
                })
            ], DuyetYeuCauChayLaiListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-routing.module.ts": 
        /*!*********************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-routing.module.ts ***!
          \*********************************************************************************************************/
        /*! exports provided: DuyetYeuCauChayLaiRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetYeuCauChayLaiRoutingModule", function () { return DuyetYeuCauChayLaiRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _duyet_yeu_cau_chay_lai_duyet_duyet_yeu_cau_chay_lai_duyet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./duyet-yeu-cau-chay-lai-duyet/duyet-yeu-cau-chay-lai-duyet.component */ "./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-duyet/duyet-yeu-cau-chay-lai-duyet.component.ts");
            /* harmony import */ var _duyet_yeu_cau_chay_lai_list_duyet_yeu_cau_chay_lai_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./duyet-yeu-cau-chay-lai-list/duyet-yeu-cau-chay-lai-list.component */ "./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-list/duyet-yeu-cau-chay-lai-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _duyet_yeu_cau_chay_lai_list_duyet_yeu_cau_chay_lai_list_component__WEBPACK_IMPORTED_MODULE_7__["DuyetYeuCauChayLaiListComponent"],
                    data: {
                        title: 'Danh sách duyệt yêu cầu chạy lại xét nghiệm',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DuyetYeuCauChayLaiXetNghiem,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                },
                {
                    path: 'chi-tiet/:id/:phienXetNghiemId',
                    component: _duyet_yeu_cau_chay_lai_duyet_duyet_yeu_cau_chay_lai_duyet_component__WEBPACK_IMPORTED_MODULE_6__["DuyetYeuCauChayLaiDuyetComponent"],
                    data: {
                        title: 'Chi tiết duyệt yêu cầu chạy lại xét nghiệm',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DuyetYeuCauChayLaiXetNghiem,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                },
            ];
            var DuyetYeuCauChayLaiRoutingModule = /** @class */ (function () {
                function DuyetYeuCauChayLaiRoutingModule() {
                }
                return DuyetYeuCauChayLaiRoutingModule;
            }());
            DuyetYeuCauChayLaiRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], DuyetYeuCauChayLaiRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-tu-choi-popup/duyet-yeu-cau-chay-lai-tu-choi-popup.component.scss": 
        /*!*********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-tu-choi-popup/duyet-yeu-cau-chay-lai-tu-choi-popup.component.scss ***!
          \*********************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi94ZXQtbmdoaWVtL2R1eWV0LXlldS1jYXUtY2hheS1sYWkvZHV5ZXQteWV1LWNhdS1jaGF5LWxhaS10dS1jaG9pLXBvcHVwL2R1eWV0LXlldS1jYXUtY2hheS1sYWktdHUtY2hvaS1wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-tu-choi-popup/duyet-yeu-cau-chay-lai-tu-choi-popup.component.ts": 
        /*!*******************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-tu-choi-popup/duyet-yeu-cau-chay-lai-tu-choi-popup.component.ts ***!
          \*******************************************************************************************************************************************************/
        /*! exports provided: DuyetYeuCauChayLaiTuChoiPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetYeuCauChayLaiTuChoiPopupComponent", function () { return DuyetYeuCauChayLaiTuChoiPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            var DuyetYeuCauChayLaiTuChoiPopupComponent = /** @class */ (function () {
                function DuyetYeuCauChayLaiTuChoiPopupComponent(dialogRef, data) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.Title = null;
                    this.Message = null;
                    this.lyDo = null;
                }
                DuyetYeuCauChayLaiTuChoiPopupComponent.prototype.ngOnInit = function () {
                    this.Title = this.data.Title;
                    this.Message = this.data.Message;
                };
                DuyetYeuCauChayLaiTuChoiPopupComponent.prototype.close = function (data) {
                    if (data == 'ok') {
                        this.dialogRef.close(this.lyDo);
                    }
                    else {
                        this.dialogRef.close(null);
                    }
                };
                return DuyetYeuCauChayLaiTuChoiPopupComponent;
            }());
            DuyetYeuCauChayLaiTuChoiPopupComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            DuyetYeuCauChayLaiTuChoiPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duyet-yeu-cau-chay-lai-tu-choi-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-yeu-cau-chay-lai-tu-choi-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-tu-choi-popup/duyet-yeu-cau-chay-lai-tu-choi-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-yeu-cau-chay-lai-tu-choi-popup.component.scss */ "./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-tu-choi-popup/duyet-yeu-cau-chay-lai-tu-choi-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], DuyetYeuCauChayLaiTuChoiPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai.model.ts": 
        /*!************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai.model.ts ***!
          \************************************************************************************************/
        /*! exports provided: DuyetYeuCauChayLaiXetNghiemTimKiem, DuyetYeuCauChayLaiXetNghiemTimKiemDateRange, TuChoiYeuCauGoiLaiXetNghiem, DanhSachGoiXetNghiemLai, DuyetYeuCauGoiLaiXetNghiem, ThongTinHanhChinhXN */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetYeuCauChayLaiXetNghiemTimKiem", function () { return DuyetYeuCauChayLaiXetNghiemTimKiem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetYeuCauChayLaiXetNghiemTimKiemDateRange", function () { return DuyetYeuCauChayLaiXetNghiemTimKiemDateRange; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuChoiYeuCauGoiLaiXetNghiem", function () { return TuChoiYeuCauGoiLaiXetNghiem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachGoiXetNghiemLai", function () { return DanhSachGoiXetNghiemLai; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetYeuCauGoiLaiXetNghiem", function () { return DuyetYeuCauGoiLaiXetNghiem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinHanhChinhXN", function () { return ThongTinHanhChinhXN; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var DuyetYeuCauChayLaiXetNghiemTimKiem = /** @class */ (function () {
                function DuyetYeuCauChayLaiXetNghiemTimKiem(SearchString, DangChoDuyet, DaDuyet, TuChoiDuyet, TuNgayDenNgay) {
                    if (SearchString === void 0) { SearchString = null; }
                    if (DangChoDuyet === void 0) { DangChoDuyet = true; }
                    if (DaDuyet === void 0) { DaDuyet = false; }
                    if (TuChoiDuyet === void 0) { TuChoiDuyet = false; }
                    if (TuNgayDenNgay === void 0) { TuNgayDenNgay = new DuyetYeuCauChayLaiXetNghiemTimKiemDateRange(); }
                    this.SearchString = SearchString;
                    this.DangChoDuyet = DangChoDuyet;
                    this.DaDuyet = DaDuyet;
                    this.TuChoiDuyet = TuChoiDuyet;
                    this.TuNgayDenNgay = TuNgayDenNgay;
                }
                return DuyetYeuCauChayLaiXetNghiemTimKiem;
            }());
            var DuyetYeuCauChayLaiXetNghiemTimKiemDateRange = /** @class */ (function () {
                function DuyetYeuCauChayLaiXetNghiemTimKiemDateRange(startDate, endDate, TuNgay, DenNgay) {
                    if (startDate === void 0) { startDate = null; }
                    if (endDate === void 0) { endDate = null; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    this.startDate = startDate;
                    this.endDate = endDate;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                }
                return DuyetYeuCauChayLaiXetNghiemTimKiemDateRange;
            }());
            var TuChoiYeuCauGoiLaiXetNghiem = /** @class */ (function () {
                function TuChoiYeuCauGoiLaiXetNghiem(LyDoTuChoi, PhienXetNghiemId) {
                    if (LyDoTuChoi === void 0) { LyDoTuChoi = null; }
                    if (PhienXetNghiemId === void 0) { PhienXetNghiemId = null; }
                    this.LyDoTuChoi = LyDoTuChoi;
                    this.PhienXetNghiemId = PhienXetNghiemId;
                }
                return TuChoiYeuCauGoiLaiXetNghiem;
            }());
            var DanhSachGoiXetNghiemLai = /** @class */ (function () {
                function DanhSachGoiXetNghiemLai(DuyetYeuCauGoiLaiXetNghiems) {
                    if (DuyetYeuCauGoiLaiXetNghiems === void 0) { DuyetYeuCauGoiLaiXetNghiems = []; }
                    this.DuyetYeuCauGoiLaiXetNghiems = DuyetYeuCauGoiLaiXetNghiems;
                }
                return DanhSachGoiXetNghiemLai;
            }());
            var DuyetYeuCauGoiLaiXetNghiem = /** @class */ (function () {
                function DuyetYeuCauGoiLaiXetNghiem(Id, NhanVienYeuCauId) {
                    if (Id === void 0) { Id = null; }
                    if (NhanVienYeuCauId === void 0) { NhanVienYeuCauId = null; }
                    this.Id = Id;
                    this.NhanVienYeuCauId = NhanVienYeuCauId;
                }
                return DuyetYeuCauGoiLaiXetNghiem;
            }());
            var ThongTinHanhChinhXN = /** @class */ (function () {
                function ThongTinHanhChinhXN(MaBarCode, MaBN, MaTN, HoTen, Tuoi, GioiTinh, DungTuyen, NgheNghiep, MucHuong, DanToc, DiaChi, ChuanDoan, KhoaChiDinh, PhongKham, TrangThai, MaBhyt, 
                //BVHD-3800
                LaCapCuu) {
                    if (MaBarCode === void 0) { MaBarCode = null; }
                    if (MaBN === void 0) { MaBN = null; }
                    if (MaTN === void 0) { MaTN = null; }
                    if (HoTen === void 0) { HoTen = null; }
                    if (Tuoi === void 0) { Tuoi = null; }
                    if (GioiTinh === void 0) { GioiTinh = null; }
                    if (DungTuyen === void 0) { DungTuyen = null; }
                    if (NgheNghiep === void 0) { NgheNghiep = null; }
                    if (MucHuong === void 0) { MucHuong = null; }
                    if (DanToc === void 0) { DanToc = null; }
                    if (DiaChi === void 0) { DiaChi = null; }
                    if (ChuanDoan === void 0) { ChuanDoan = null; }
                    if (KhoaChiDinh === void 0) { KhoaChiDinh = null; }
                    if (PhongKham === void 0) { PhongKham = null; }
                    if (TrangThai === void 0) { TrangThai = null; }
                    if (MaBhyt === void 0) { MaBhyt = null; }
                    if (LaCapCuu === void 0) { LaCapCuu = null; }
                    this.MaBarCode = MaBarCode;
                    this.MaBN = MaBN;
                    this.MaTN = MaTN;
                    this.HoTen = HoTen;
                    this.Tuoi = Tuoi;
                    this.GioiTinh = GioiTinh;
                    this.DungTuyen = DungTuyen;
                    this.NgheNghiep = NgheNghiep;
                    this.MucHuong = MucHuong;
                    this.DanToc = DanToc;
                    this.DiaChi = DiaChi;
                    this.ChuanDoan = ChuanDoan;
                    this.KhoaChiDinh = KhoaChiDinh;
                    this.PhongKham = PhongKham;
                    this.TrangThai = TrangThai;
                    this.MaBhyt = MaBhyt;
                    this.LaCapCuu = LaCapCuu;
                }
                return ThongTinHanhChinhXN;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai.module.ts": 
        /*!*************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai.module.ts ***!
          \*************************************************************************************************/
        /*! exports provided: DuyetYeuCauChayLaiModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetYeuCauChayLaiModule", function () { return DuyetYeuCauChayLaiModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _duyet_yeu_cau_chay_lai_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./duyet-yeu-cau-chay-lai-routing.module */ "./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-routing.module.ts");
            /* harmony import */ var _duyet_yeu_cau_chay_lai_list_duyet_yeu_cau_chay_lai_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./duyet-yeu-cau-chay-lai-list/duyet-yeu-cau-chay-lai-list.component */ "./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-list/duyet-yeu-cau-chay-lai-list.component.ts");
            /* harmony import */ var _duyet_yeu_cau_chay_lai_duyet_duyet_yeu_cau_chay_lai_duyet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./duyet-yeu-cau-chay-lai-duyet/duyet-yeu-cau-chay-lai-duyet.component */ "./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-duyet/duyet-yeu-cau-chay-lai-duyet.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-intl */ "./node_modules/@progress/kendo-angular-intl/dist/fesm2015/index.js");
            /* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            /* harmony import */ var _duyet_yeu_cau_chay_lai_tu_choi_popup_duyet_yeu_cau_chay_lai_tu_choi_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./duyet-yeu-cau-chay-lai-tu-choi-popup/duyet-yeu-cau-chay-lai-tu-choi-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai-tu-choi-popup/duyet-yeu-cau-chay-lai-tu-choi-popup.component.ts");
            /* harmony import */ var src_app_shared_directives_resizable_resizable_resizable_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/directives/resizable/resizable/resizable.module */ "./src/app/shared/directives/resizable/resizable/resizable.module.ts");
            var DuyetYeuCauChayLaiModule = /** @class */ (function () {
                function DuyetYeuCauChayLaiModule() {
                }
                return DuyetYeuCauChayLaiModule;
            }());
            DuyetYeuCauChayLaiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _duyet_yeu_cau_chay_lai_list_duyet_yeu_cau_chay_lai_list_component__WEBPACK_IMPORTED_MODULE_4__["DuyetYeuCauChayLaiListComponent"],
                        _duyet_yeu_cau_chay_lai_duyet_duyet_yeu_cau_chay_lai_duyet_component__WEBPACK_IMPORTED_MODULE_5__["DuyetYeuCauChayLaiDuyetComponent"],
                        _duyet_yeu_cau_chay_lai_tu_choi_popup_duyet_yeu_cau_chay_lai_tu_choi_popup_component__WEBPACK_IMPORTED_MODULE_18__["DuyetYeuCauChayLaiTuChoiPopupComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _duyet_yeu_cau_chay_lai_routing_module__WEBPACK_IMPORTED_MODULE_3__["DuyetYeuCauChayLaiRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__["PageLayoutModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__["GridModule"],
                        _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_14__["IntlModule"],
                        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_15__["PdfViewerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                        src_app_shared_directives_resizable_resizable_resizable_module__WEBPACK_IMPORTED_MODULE_19__["ResizableModule"]
                    ],
                    entryComponents: [
                        _duyet_yeu_cau_chay_lai_tu_choi_popup_duyet_yeu_cau_chay_lai_tu_choi_popup_component__WEBPACK_IMPORTED_MODULE_18__["DuyetYeuCauChayLaiTuChoiPopupComponent"]
                    ]
                })
            ], DuyetYeuCauChayLaiModule);
            /***/ 
        }),
        /***/ "./src/app/shared/directives/resizable/resizable/resizable.component.scss": 
        /*!********************************************************************************!*\
          !*** ./src/app/shared/directives/resizable/resizable/resizable.component.scss ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host:last-child .bar {\n  display: none;\n}\n\n.wrapper {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.content {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-right: auto;\n}\n\n.bar {\n  position: absolute;\n  height: 30px;\n  border: 1px solid gray;\n  margin: 0 -16px 0 16px;\n  background-clip: content-box;\n  cursor: ew-resize;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n\n.bar:hover, .bar:active {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RpcmVjdGl2ZXMvcmVzaXphYmxlL3Jlc2l6YWJsZS9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXHNoYXJlZFxcZGlyZWN0aXZlc1xccmVzaXphYmxlXFxyZXNpemFibGVcXHJlc2l6YWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2RpcmVjdGl2ZXMvcmVzaXphYmxlL3Jlc2l6YWJsZS9yZXNpemFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2RpcmVjdGl2ZXMvcmVzaXphYmxlL3Jlc2l6YWJsZS9yZXNpemFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdDpsYXN0LWNoaWxkIC5iYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5jb250ZW50IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBtYXJnaW46IDAgLTE2cHggMCAxNnB4O1xuICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xuICBjdXJzb3I6IGV3LXJlc2l6ZTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xufVxuXG4uYmFyOmhvdmVyLCAuYmFyOmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59IiwiOmhvc3Q6bGFzdC1jaGlsZCAuYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uY29udGVudCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgbWFyZ2luOiAwIC0xNnB4IDAgMTZweDtcbiAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcbiAgY3Vyc29yOiBldy1yZXNpemU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcbn1cblxuLmJhcjpob3ZlciwgLmJhcjphY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/shared/directives/resizable/resizable/resizable.component.ts": 
        /*!******************************************************************************!*\
          !*** ./src/app/shared/directives/resizable/resizable/resizable.component.ts ***!
          \******************************************************************************/
        /*! exports provided: ResizableComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizableComponent", function () { return ResizableComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ResizableComponent = /** @class */ (function () {
                function ResizableComponent() {
                    this.width = null;
                }
                ResizableComponent.prototype.onResize = function (width) {
                    this.width = width;
                };
                return ResizableComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("style.width.px")
            ], ResizableComponent.prototype, "width", void 0);
            ResizableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'th[resizable]',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resizable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/directives/resizable/resizable/resizable.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resizable.component.scss */ "./src/app/shared/directives/resizable/resizable/resizable.component.scss")).default]
                })
            ], ResizableComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/directives/resizable/resizable/resizable.directive.ts": 
        /*!******************************************************************************!*\
          !*** ./src/app/shared/directives/resizable/resizable/resizable.directive.ts ***!
          \******************************************************************************/
        /*! exports provided: ResizableDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizableDirective", function () { return ResizableDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var ResizableDirective = /** @class */ (function () {
                function ResizableDirective(documentRef, elementRef) {
                    var _this = this;
                    this.documentRef = documentRef;
                    this.elementRef = elementRef;
                    this.resizable = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.elementRef.nativeElement, "mousedown").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (e) { return e.preventDefault(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
                        var _a = _this.elementRef.nativeElement
                            .closest("th")
                            .getBoundingClientRect(), width = _a.width, right = _a.right;
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(_this.documentRef, "mousemove").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                            var clientX = _a.clientX;
                            return width + clientX - right;
                        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(_this.documentRef, "mouseup")));
                    }));
                }
                return ResizableDirective;
            }());
            ResizableDirective.ctorParameters = function () { return [
                { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],] }] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
            ], ResizableDirective.prototype, "resizable", void 0);
            ResizableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
                    selector: "[resizable]"
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]))
            ], ResizableDirective);
            /***/ 
        }),
        /***/ "./src/app/shared/directives/resizable/resizable/resizable.module.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/shared/directives/resizable/resizable/resizable.module.ts ***!
          \***************************************************************************/
        /*! exports provided: ResizableModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizableModule", function () { return ResizableModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _resizable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resizable.component */ "./src/app/shared/directives/resizable/resizable/resizable.component.ts");
            /* harmony import */ var _resizable_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resizable.directive */ "./src/app/shared/directives/resizable/resizable/resizable.directive.ts");
            var ResizableModule = /** @class */ (function () {
                function ResizableModule() {
                }
                return ResizableModule;
            }());
            ResizableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _resizable_component__WEBPACK_IMPORTED_MODULE_2__["ResizableComponent"],
                        _resizable_directive__WEBPACK_IMPORTED_MODULE_3__["ResizableDirective"]
                    ],
                    exports: [_resizable_component__WEBPACK_IMPORTED_MODULE_2__["ResizableComponent"]]
                })
            ], ResizableModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=xet-nghiem-duyet-yeu-cau-chay-lai-duyet-yeu-cau-chay-lai-module-es2015.js.map
//# sourceMappingURL=xet-nghiem-duyet-yeu-cau-chay-lai-duyet-yeu-cau-chay-lai-module-es5.js.map
//# sourceMappingURL=xet-nghiem-duyet-yeu-cau-chay-lai-duyet-yeu-cau-chay-lai-module-es5.js.map