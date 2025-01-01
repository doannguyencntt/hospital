(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kham-benh-kham-doan-tat-ca-phong-kham-doan-tat-ca-phong-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/kham-doan-tat-ca-phong/kham-doan-tat-ca-phong-detail/kham-doan-tat-ca-phong-detail.component.html": 
        /*!********************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/kham-doan-tat-ca-phong/kham-doan-tat-ca-phong-detail/kham-doan-tat-ca-phong-detail.component.html ***!
          \********************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-16\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Khám Bệnh',Path:''},\n                    {Title:'Khám Đoàn Tất Cả Phòng',Path:'', Active:true}\n                    ]\">\n            </vex-breadcrumbs>\n            <app-hot-key [keys]=\"[\n                {Key:'Ctrl + F1',Description:'Di chuyển tới và mở tab Khám bệnh'},\n                {Key:'Ctrl + F2',Description:'Di chuyển tới và mở tab Lịch sử khám'},\n                {Key:'Ctrl + F3',Description:'Di chuyển tới và mở tab Chỉ định'},\n                {Key:'Ctrl + F5',Description:'Di chuyển tới và mở tab Kết quả CLS'},\n                {Key:'Ctrl + F6',Description:'Di chuyển tới và mở tab Tư vấn thuốc'},\n\n                {Key:'Ctrl + H',Description:'Hoàn thành khám'},\n                {Key:'Ctrl + P',Description:'In chỉ định'},\n                {Key:'Ctrl + S',Description:'Lưu form khám bệnh'},\n                {Key:'Esc',Description:'Hủy', End:true}\n            ]\"></app-hot-key>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div @fadeInUp class=\"-mt-16\">\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div class=\"card\" fxFlex=\"100%\">\n                    <div class=\"px-6 pt-4\" fxLayout=\"column\" style=\"position: relative;\">\n                        <kendo-tabstrip fxFlex=\"100%\" class=\"tab-no-padding-content field-set-p kendotab-button-right\" (tabSelect)=\"onParentTabSelect($event)\">\n\n                            <!-- tab khám bệnh -->\n                            <!-- [title]=\"'Khám bệnh'\"  -->\n                            <kendo-tabstrip-tab [selected]=\"true\">\n                                <ng-template kendoTabTitle>\n                                    Khám đoàn\n                                </ng-template>\n                                <ng-template kendoTabContent>\n                                    <kendo-splitter>\n                                        <kendo-splitter-pane [collapsible]=\"true\" size=\"25%\" style=\"max-height: 800px;overflow-x: hidden;\" class=\"sticky-panelbar\">\n                                            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"  fxLayoutGap=\"10px grid\" fxLayoutGap.lt-sm=\"0\" class=\"mt-2\">\n                                                <app-combobox id=\"congTy\" fxFlex=\"70%\" fxFlex.sm=\"100%\" label=\"Tên công ty\"\n                                                    url=\"KhamDoan/GetCongTys\" [(model)]=\"timKiemObj.CongTyId\" (modelChange)=\"refreshHangDoiHienTai()\"\n                                                    [reloadForGrid]=\"true\" [broadcastAfterLoaded]=\"true\" [popupSettings]=\"{width: 400}\" hierarchyKeyToSend=\"CongTyId\">\n                                                </app-combobox>\n                                                <app-combobox id=\"hopDong\" fxFlex=\"30%\" fxFlex.sm=\"100%\" label=\"Số HĐ\" url=\"KhamDoan/GetHopDongKhamSucKhoes\"\n                                                    [(model)]=\"timKiemObj.HopDongId\" (modelChange)=\"refreshHangDoiHienTai()\"\n                                                    [bind]=\"true\" [popupSettings]=\"null\" [autoSelectFirstItem]=\"true\"\n                                                    hierarchyKeyToListen=\"CongTyId\">\n                                                </app-combobox>\n                                                <!-- [queryInfo]=\"{ParameterDependencies:'{CongTyId:' + timKiemObj.CongTyId +'}', Take: 50}\" -->\n                                            </div>\n                                            <div fxLayoutAlign=\"start center\" fxLayout=\"row\" class=\"px-2 py-3\" style=\"background: #ebeced;\">\n                                                <div>\n                                                    <h3 class=\"title m-0\">HÀNG ĐỢI</h3>\n                                                </div>\n                                                <div class=\"po-right d-unset\">\n                                                    <div class=\"bg-card rounded-full border px-2\" fxFlex=\"260px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px; float: right;\">\n                                                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                                                        <input class=\"px-1 py-2 border-0 outline-none w-full bg-transparent\" [(ngModel)]=\"timKiemObj.SearchString\" \n                                                            placeholder=\"Tìm kiếm mã TN/BN\" type=\"search\" name=\"searchString\" \n                                                            (keyup)=\"timKiemBenhNhan($event)\" (ngModelChange)=\"searchChange($event)\" />\n                                                        <button (click)=\"QuetMaQRCodeClick()\" color=\"primary\" mat-mini-fab type=\"button\"\n                                                            class=\"button-barcoe-in-search\" kendoTooltip title=\"Phím tắt: Ctrl + Q\">\n                                                            <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                                                        </button>\n                                                    </div>\n                                                    <app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\" style=\"display: none;\"></app-barcode>\n                                                </div>\n                                            </div>\n                                            <div class=\"\">\n                                                <app-grid fxFlex=\"100%\" masterName=\"ChuanBiKham\" [allowSortDefault]=\"false\" [autoRefreshDataSource]=\"true\"\n                                                    [gridColumns]=\"gridChuanBiKhamColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                                                    class=\"k-grid-border cursor-pointer\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                                                    [checkboxAble]=\"false\" [gridDataSource]=\"dataSourceChuanBiKham\" [lazyLoadPage]=\"true\"\n                                                    style=\"width: 1px;\" [pageable]=\"true\" [pageSize]=\"20\" [widthColumnSTT]=\"15\" titleColumnSTT=\"#\"\n                                                    keyCode=\"Enter\" (extEnterChangePage)=\"batDauKham($event)\"\n                                                    (extDoubleClick)=\"batDauKham($event)\" [showStt]=\"true\" heightToolbar=\"340\">\n                                                </app-grid>\n                                            </div>\n                                        </kendo-splitter-pane>\n\n                                        <kendo-splitter-pane style=\"overflow:initial;\">\n                                            <div style=\"display: flow-root;\" class=\"ml-4 py-3 border-b\">\n                                                <h3 class=\"title blue\" style=\"float: left;\">NGƯỜI BỆNH ĐANG KHÁM</h3>\n                                                <h3 *ngIf=\"benhNhanHienTai.Id != 0 && benhNhanHienTai.YeuCauKhamBenh.LaThamVan\" class=\"title red\" style=\"float: right;\">DỊCH VỤ KHÁM THAM VẤN</h3>\n                                            </div>\n                                            <ng-container *ngIf=\"benhNhanHienTai.Id == 0\">\n                                                <p class=\"ml-4 mt-2\">Chưa chọn người bệnh</p>\n                                            </ng-container>\n                                            <ng-container *ngIf=\"benhNhanHienTai.Id != 0\">\n                                                <div class=\"row ml-1 mb-2 sticky-div\">\n                                                    <fieldset fxFlex=\"100%\" style=\"background: #e1f5fe;\">\n                                                        <legend>Thông tin hành chính</legend>\n                                                        <div fxFlex=\"100%\" *ngIf=\"benhNhanHienTai.YeuCauTiepNhan != null\">\n                                                            <ul class=\"inline\">\n                                                                <li>Mã TN:\n                                                                    <strong>{{benhNhanHienTai.YeuCauTiepNhan.MaYeuCauTiepNhan}}</strong>\n                                                                </li>\n                                                                <li>Mã NB:\n                                                                    <strong>{{benhNhanHienTai.YeuCauTiepNhan.BenhNhan.MaBN}}</strong>\n                                                                </li>\n                                                                <li>Họ tên:\n                                                                    <strong>{{benhNhanHienTai.YeuCauTiepNhan.HoTen}}</strong>\n                                                                </li>\n                                                                <li>Giới tính:\n                                                                    <strong>{{benhNhanHienTai.YeuCauTiepNhan.TenGioiTinh}}</strong>\n                                                                </li>\n                                                                <li>Năm sinh:\n                                                                    <strong>{{benhNhanHienTai.YeuCauTiepNhan.NamSinh}}</strong>\n                                                                </li>\n\n                                                                <li>SĐT:\n                                                                    <strong>{{benhNhanHienTai.YeuCauTiepNhan.SoDienThoaiDisplay}}</strong>\n                                                                </li>\n                                                                <li>Dân tộc:\n                                                                    <strong>{{benhNhanHienTai.YeuCauTiepNhan.DanToc == null ? null : benhNhanHienTai.YeuCauTiepNhan.DanToc.Ten}}</strong>\n                                                                </li>\n                                                                <li>Địa chỉ:\n                                                                    <strong>{{benhNhanHienTai.YeuCauTiepNhan.DiaChiDisplay}}</strong>\n                                                                </li>\n                                                                <li>Nghề nghiệp:\n                                                                    <strong>{{benhNhanHienTai.YeuCauTiepNhan.NgheNghiep == null ? null : benhNhanHienTai.YeuCauTiepNhan.NgheNghiep.Ten}}</strong>\n                                                                </li>\n                                                                <li>Công ty:\n                                                                    <strong style=\"color: red;\">{{benhNhanHienTai.YeuCauTiepNhan.TenCongTy}}</strong>\n                                                                </li>\n                                                            </ul>\n                                                        </div>\n                                                    </fieldset>\n                                                </div>\n                                                <div class=\"row ml-1 temp d-inline\">\n                                                    <kendo-tabstrip fxFlex=\"100%\" id=\"card\" class=\"content-has-border tabstrip-pad sticky-kendotab-kham-doan-item\" (tabSelect)=\"chuyenDen('card', $event, isKhamDoan)\">\n                                                        <kendo-tabstrip-tab [selected]=\"lstStatusSelectTabKhambenh.selectedTabKhamBenh\">\n                                                            <ng-template kendoTabTitle>\n                                                                <div kendoTooltip title=\"Phím tắt: Ctrl + F1\">\n                                                                    KHÁM BỆNH\n                                                                </div>\n                                                            </ng-template>\n                                                            <ng-template kendoTabContent>\n                                                                <div class=\"p-2\">\n                                                                    <app-lan-kham-hien-tai-kham-benh [data]=\"benhNhanHienTai\" \n                                                                        [phongKhamId]=\"phongKhamHienTai.KeyId\" [templateKhamCacCoQuanObj]=\"benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj\"\n                                                                        [isKhamDoan]=\"isKhamDoan\" [isKhamDoanTatCa]=\"isKhamDoanTatCa\"\n                                                                        [templateDichVuKhamSucKhoes]=\"benhNhanHienTai.YeuCauKhamBenh.TemplateDichVuKhamSucKhoes\"\n                                                                        [documentType]=\"documentType\"\n                                                                        [timeSaveChangeDataChuyenKhoaKSK]=\"timeSaveChangeDataChuyenKhoaKSK\"\n                                                                        (chonShowKetQuaMauKhamBenh)=\"xuLySaveDataChoKetQuaMauChuyenKhoaKSK($event)\"\n                                                                        [isReadOnly]=\"isReadOnly\">\n                                                                    </app-lan-kham-hien-tai-kham-benh>\n\n\n                                                                    <div *ngIf=\"!isReadOnly\" class=\"sticky-button-action py-3 text-right\" kendoTooltip>\n                                                                        <button type=\"button\" mat-button class=\"mr-2\" *ngIf=\"benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh\" (click)=\"cancelChangeData()\" title=\"Phím tắt: Esc\">Hủy</button>\n                                                                        <button type=\"button\" class=\"mr-2\" color=\"primary\" mat-raised-button *ngIf=\"benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh\" (click)=\"saveChangeData()\" title=\"Phím tắt: Ctrl + S\">Lưu</button>\n                                                                        <button type=\"button\" class=\"mr-2\" color=\"primary\" mat-raised-button *ngIf=\"isKhamDoanTatCa\" (click)=\"kiemTraDichVuChuaThucHienKhiHoanThanhKham()\" title=\"Phím tắt: Ctrl + H\">Lưu hoàn thành khám</button>\n                                                                    \n                                                                        <button type=\"button\" class=\"mr-2\" mat-button *ngIf=\"isKhamDoanTatCa\" color=\"primary\" mat-stroked-button mat-button \n                                                                            class=\"float-left\" (click)=\"xuLyIn(1)\">In Sổ KSK định kỳ</button>\n                                                                        <button type=\"button\" mat-button *ngIf=\"isKhamDoanTatCa\" color=\"primary\" mat-stroked-button mat-button \n                                                                            class=\"float-left\" (click)=\"xuLyIn(2)\">In kết quả KSK</button>\n                                                                    </div>\n                                                                </div>\n\n                                                            </ng-template>\n                                                        </kendo-tabstrip-tab>\n                                                        <kendo-tabstrip-tab [selected]=\"lstStatusSelectTabKhambenh.selectedTabLichSuKham\">\n                                                            <ng-template kendoTabTitle>\n                                                                <div kendoTooltip title=\"Phím tắt: Ctrl + F2\">\n                                                                    LỊCH SỬ KHÁM \n                                                                </div>\n                                                            </ng-template>\n                                                            \n                                                            <ng-template kendoTabContent>\n                                                                <app-kham-benh-lich-su-kham-list [BenhNhan]=\"benhNhanHienTai.YeuCauTiepNhan.BenhNhanId\"\n                                                                    [YeuCauTiepNhanId]=\"benhNhanHienTai.YeuCauTiepNhanId\" [documentType]=\"documentType\">\n                                                                </app-kham-benh-lich-su-kham-list>\n                                                            </ng-template>\n                                                        </kendo-tabstrip-tab>\n\n                                                        <!-- tab chỉ định -->\n                                                        <kendo-tabstrip-tab [selected]=\"lstStatusSelectTabKhambenh.selectedTabChiDinh\">\n                                                            <ng-template kendoTabTitle>\n                                                                <div kendoTooltip title=\"Phím tắt: Ctrl + F3\">\n                                                                    CHỈ ĐỊNH\n                                                                </div>\n                                                            </ng-template>\n                                                            <ng-template kendoTabContent>\n                                                                <div class=\"m-2\">\n                                                                    <app-lan-kham-hien-tai-kham-benh-chi-dinh [data]=\"benhNhanHienTai\"\n                                                                        [isKhamDoan]=\"isKhamDoan\" [hinhThucKhamBenh]=\"hinhThucKham\" [documentType]=\"documentType\"\n                                                                        [isKhamDoanTatCa]=\"isKhamDoanTatCa\" [isReadOnly]=\"isReadOnly\">\n                                                                    </app-lan-kham-hien-tai-kham-benh-chi-dinh>\n                                                                </div>\n                                                            </ng-template>\n                                                        </kendo-tabstrip-tab>\n\n                                                        <!-- tab kết quả cls -->\n                                                        <kendo-tabstrip-tab [selected]=\"lstStatusSelectTabKhambenh.selectedTabKetQuaCLS\">\n                                                            <ng-template kendoTabTitle>\n                                                                <div kendoTooltip title=\"Phím tắt: Ctrl + F5\">\n                                                                    KQ CLS\n                                                                </div>\n                                                            </ng-template>\n                                                            <ng-template kendoTabContent>\n                                                                <div class=\"mt-2 ml-2 mr-2\">\n                                                                    <app-lan-kham-hien-tai-ket-qua-cls  [YeuCauTiepNhanId]=\"benhNhanHienTai.YeuCauTiepNhanId\"\n                                                                        [documentType]=\"documentType\" [isReadOnly]=\"isReadOnly\">\n                                                                    </app-lan-kham-hien-tai-ket-qua-cls>\n                                                                </div>\n                                                            </ng-template>\n                                                        </kendo-tabstrip-tab>\n\n                                                        <!-- tab kết luận khám đoàn -->\n                                                        <kendo-tabstrip-tab [selected]=\"lstStatusSelectTabKhambenh.selectedTabTuVanThuocKhamDoan\">\n                                                            <ng-template kendoTabTitle>\n                                                                <div kendoTooltip title=\"Phím tắt: Ctrl + F6\">\n                                                                    TƯ VẤN THUỐC\n                                                                </div>\n                                                            </ng-template>\n                                                            <ng-template kendoTabContent>\n                                                                <div class=\"p-2\">\n                                                                    <app-lan-kham-hien-tai-tu-van-thuoc-kham-doan [YeuCauTiepNhanId]=\"benhNhanHienTai.YeuCauTiepNhanId\"\n                                                                        [YeuCauKhamBenhId]=\"benhNhanHienTai.YeuCauKhamBenhId\" [documentType]=\"documentType\"\n                                                                        [isKhamDoanTatCa]=\"isKhamDoanTatCa\" [isReadOnly]=\"isReadOnly\">\n                                                                    </app-lan-kham-hien-tai-tu-van-thuoc-kham-doan>\n                                                                </div>\n                                                            </ng-template>\n                                                        </kendo-tabstrip-tab>\n                                                        <!-- số dư tạm ứng -->\n                                                        <kendo-tabstrip-tab [disabled]=\"true\" cssClass=\"tab-right-po\">\n                                                            <ng-template kendoTabTitle>\n                                                                Tạm ứng:\n                                                                <b>{{benhNhanHienTai.YeuCauKhamBenh.SoDuTaiKhoanDisplay}}</b>\n                                                                -\n                                                                Còn lại: <b>{{benhNhanHienTai.YeuCauKhamBenh.SoDuTaiKhoanConLaiDisplay}}</b>\n                                                            </ng-template>\n                                                            <ng-template kendoTabContent>\n                                                            </ng-template>\n                                                        </kendo-tabstrip-tab>\n                                                    </kendo-tabstrip>\n                                                </div>\n                                            </ng-container>\n                                        </kendo-splitter-pane>\n                                    </kendo-splitter>\n                                </ng-template>\n                            </kendo-tabstrip-tab>\n\n                            <!-- tab danh sách đã khám bệnh -->\n                            <kendo-tabstrip-tab [title]=\"'Danh sách hoàn thành khám'\">\n                                <ng-template kendoTabContent>\n                                    <app-danh-sach-da-kham-list [phongKham]=\"phongKhamHienTai.KeyId\" [documentType]=\"documentType\"\n                                        [isKhamDoan]=\"isKhamDoan\" [isKhamDoanTatCa]=\"isKhamDoanTatCa\" [isReadOnly]=\"isReadOnly\">\n                                    </app-danh-sach-da-kham-list>\n                                </ng-template>\n                            </kendo-tabstrip-tab>\n\n                            <!-- tab hiện button chuyển loại khám -->\n                            <kendo-tabstrip-tab *ngIf=\"hinhThucKham == loginNoiVien && !isReadOnly\" cssClass=\"tab-right-po\">\n                                <ng-template kendoTabTitle>\n                                    <button *ngIf=\"!isLoadingKhamDoan\" type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1\" (click)=\"chuyenLoaiKham()\">\n                                        Chuyển Khám bệnh\n                                    </button>\n                                    <button *ngIf=\"isLoadingKhamDoan\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img src=\"/assets/img/loader.gif\"\n                                        alt=\"Loading\" /></button>\n                                </ng-template>\n                                <ng-template kendoTabContent>\n                                </ng-template>\n                            </kendo-tabstrip-tab>\n                        </kendo-tabstrip>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n\n<ng-template #maTNTemplate let-dataItem>\n    <a (click)=\"batDauKham(dataItem)\">\n        <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.MaYeuCauTiepNhan}}\">{{dataItem.MaYeuCauTiepNhan}}\n        </p>\n    </a>\n</ng-template>\n<ng-template #hoTenTemplate let-dataItem>\n    <p (click)=\"batDauKham(dataItem)\" style=\"position: relative;\">{{dataItem.HoTen}}<img *ngIf=\"dataItem.CoBaoHiem\" src=\"assets/img/logoBHXH.png\" class=\"icon-bhyt\" /></p>\n</ng-template>\n<ng-template #tienTrinhTemplate let-dataItem>\n    <p kendoTooltip title=\"{{dataItem.TienTrinhKhamSucKhoe}}\" class=\"reverse-ellipsis r\">\n        <label [style.color]=\"dataItem.IsKhamDuDichVuKhamSucKhoe ? 'green' : 'orange'\">{{dataItem.DichVuKhamDaThucHien}}</label>/{{dataItem.TongDichVuKham}}\n    </p>\n</ng-template>\n\n<ng-template #ngayKhamBenhGroupHeaderTemplate let-value=\"value\">\n    <strong>{{value | date:'dd/MM/yyyy'}}</strong>\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/kham-doan-tat-ca-phong/kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup/kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup.component.html": 
        /*!******************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/kham-doan-tat-ca-phong/kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup/kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup.component.html ***!
          \******************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>XÁC NHẬN</div>\n    <button type=\"button\" mat-icon-button (click)=\"close('No')\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"min-height: 120px;\">\n    <div class=\"row\">\n        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"8px grid\" fxLayoutGap.lt-sm=\"0\">\n            <div fxFlex=\"100%\">\n                <b>Hiện tại có {{soDichVuChuaKham}} dịch vụ chưa khám/ chưa thực hiện: </b>\n            </div>\n            <ng-container *ngIf=\"data.DichVuKhamBenhs.length > 0\">\n                <div>\n                    <p style=\"color: blue;\">Các dịch vụ khám bệnh:</p>\n                </div>\n                <div fxFlex=\"100%\" *ngFor=\"let item of data.DichVuKhamBenhs\">\n                    &nbsp;&nbsp;+ {{item}}.\n                </div>\n            </ng-container>\n\n            <ng-container *ngIf=\"data.DichVuKyThuats.length > 0\">\n                <div>\n                    <p style=\"color: blue;\"> Các dịch vụ kỹ thuật:</p>\n                </div>\n                <div fxFlex=\"100%\" *ngFor=\"let item of data.DichVuKyThuats\">\n                    &nbsp;&nbsp;+ {{item}}.\n                </div>\n            </ng-container>\n\n            <div fxFlex=\"100%\" style=\"padding-top: 40px;\">\n                Nếu hoàn thành khám thì sẽ hủy những dịch vụ chưa khám/ chưa thực hiện. Bạn chắc chắn muốn hoàn thành\n                khám không?\n            </div>\n\n        </div>\n    </div>\n\n</mat-dialog-content>\n\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <button tabindex=\"-1\" type=\"button\" (click)=\"close('No')\" mat-stroked-button>Không</button>\n    <button tabindex=\"-1\" type=\"button\" (click)=\"close('Yes')\" mat-raised-button mat-button color=\"primary\"\n        class=\"md-primary\">Có</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-benh/kham-doan-tat-ca-phong/kham-doan-tat-ca-phong-detail/kham-doan-tat-ca-phong-detail.component.scss": 
        /*!******************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-benh/kham-doan-tat-ca-phong/kham-doan-tat-ca-phong-detail/kham-doan-tat-ca-phong-detail.component.scss ***!
          \******************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".menu-form-wrapper .mat-menu-content {\n  padding: 8px;\n}\n\n.po-right {\n  text-align: right;\n  flex-grow: 1;\n}\n\n.d-unset {\n  display: unset !important;\n}\n\nkendo-splitter {\n  border-width: 0px !important;\n  min-height: 100px;\n}\n\nkendo-splitter ul > li.right-0 {\n  margin-right: 0px;\n  padding-right: 15px;\n}\n\nfieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em;\n  padding-bottom: 0.625em;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline !important;\n}\n\nkendo-panelbar-item ul.inline > li {\n  padding-right: 10px !important;\n  padding-bottom: 0.625em;\n  display: inline-block !important;\n}\n\nkendo-panelbar-item .inline_b {\n  display: inline-block !important;\n  margin-right: 10px;\n  padding-right: 15px;\n}\n\nkendo-panelbar-item .panelbar-row {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\nkendo-panelbar-item .panelbar-row:hover {\n  background: rgba(227, 242, 253, 0.5);\n}\n\nkendo-panelbar-item .panelbar-group-b {\n  border-top: 1px rgba(0, 0, 0, 0.08) outset;\n}\n\n.sticky-list {\n  top: 64px;\n  position: sticky !important;\n  position: -webkit-sticky !important;\n  z-index: 9999;\n}\n\n.sticky-tab {\n  top: 64px;\n  position: sticky !important;\n  position: -webkit-sticky !important;\n  z-index: 9999;\n  background: #f5f7fa;\n  overflow-x: auto;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.sticky-tab ul {\n  margin: 0;\n  padding-top: 10px;\n  padding-bottom: 0;\n  border-bottom: 1px solid #ccc;\n}\n\n.sticky-tab ul li {\n  display: inline-block;\n  list-style-type: none;\n  margin-right: 25px;\n  font-size: 15px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n  color: #2e384d;\n  cursor: pointer;\n  transition: all 300ms linear;\n  border-bottom: 3px solid #f5f7fa;\n}\n\n.sticky-tab ul li.active {\n  font-size: 15px;\n  font-weight: bold;\n  color: #005dab;\n  border-bottom: 4px solid #005dab;\n}\n\n.sticky-tab ul li:hover {\n  border-bottom: 3px solid #005dab;\n}\n\n.sticky-tab ul li.resolved {\n  color: #005dab;\n}\n\n.sticky-tab ul li.processing {\n  color: #ff9800;\n}\n\n.sticky-tab ul li.unfulfilled {\n  color: #9e9e9e;\n}\n\n.sticky-tab .ps-scrollbar-x-rail {\n  bottom: 0 !important;\n  height: 5px !important;\n}\n\n.sticky-tab .ps-scrollbar-x-rail .ps-scrollbar-x {\n  height: 5px !important;\n}\n\nlegend {\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.sticky-panelbar {\n  position: sticky;\n  position: -webkit-sticky;\n  top: 64px;\n}\n\n.sticky-button-action {\n  position: sticky;\n  position: -webkit-sticky;\n  bottom: 0px;\n  background-color: white;\n  border-top: 1px solid #ccc;\n  overflow: hidden;\n  z-index: 10;\n}\n\n.icon-bhyt {\n  height: 15px;\n  top: 2px;\n  position: absolute;\n  right: 0;\n}\n\n.sticky-div {\n  position: sticky;\n  position: -webkit-sticky;\n  top: 50px;\n  border-bottom: 1px solid #ccc;\n  z-index: 999;\n  background-color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tYmVuaC9raGFtLWRvYW4tdGF0LWNhLXBob25nL2toYW0tZG9hbi10YXQtY2EtcGhvbmctZGV0YWlsL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxca2hhbS1iZW5oXFxraGFtLWRvYW4tdGF0LWNhLXBob25nXFxraGFtLWRvYW4tdGF0LWNhLXBob25nLWRldGFpbFxca2hhbS1kb2FuLXRhdC1jYS1waG9uZy1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWJlbmgva2hhbS1kb2FuLXRhdC1jYS1waG9uZy9raGFtLWRvYW4tdGF0LWNhLXBob25nLWRldGFpbC9raGFtLWRvYW4tdGF0LWNhLXBob25nLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLDRDQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0UsMENBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBS0EsNEJBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4va2hhbS1iZW5oL2toYW0tZG9hbi10YXQtY2EtcGhvbmcva2hhbS1kb2FuLXRhdC1jYS1waG9uZy1kZXRhaWwva2hhbS1kb2FuLXRhdC1jYS1waG9uZy1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1mb3JtLXdyYXBwZXIgLm1hdC1tZW51LWNvbnRlbnQge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5wby1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5kLXVuc2V0IHtcbiAgZGlzcGxheTogdW5zZXQgIWltcG9ydGFudDtcbn1cblxua2VuZG8tc3BsaXR0ZXIge1xuICBib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbn1cblxua2VuZG8tc3BsaXR0ZXIgdWwgPiBsaS5yaWdodC0wIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbmZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbTtcbiAgYm9yZGVyOiAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xufVxuXG5maWVsZHNldCAuaXRlbV9yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuZmllbGRzZXQgdWwgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuZmllbGRzZXQgdWwuaW5saW5lID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSB1bC5pbmxpbmUgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIC5pbmxpbmVfYiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLnBhbmVsYmFyLXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIC5wYW5lbGJhci1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIyNywgMjQyLCAyNTMsIDAuNSk7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLnBhbmVsYmFyLWdyb3VwLWIge1xuICBib3JkZXItdG9wOiAxcHggcmdiYSgwLCAwLCAwLCAwLjA4KSBvdXRzZXQ7XG59XG5cbi5zdGlja3ktbGlzdCB7XG4gIHRvcDogNjRweDtcbiAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLnN0aWNreS10YWIge1xuICB0b3A6IDY0cHg7XG4gIHBvc2l0aW9uOiBzdGlja3kgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGJhY2tncm91bmQ6ICNmNWY3ZmE7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uc3RpY2t5LXRhYiB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cblxuLnN0aWNreS10YWIgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzJlMzg0ZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZjVmN2ZhO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS5hY3RpdmUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwNWRhYjtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMwMDVkYWI7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMDVkYWI7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLnJlc29sdmVkIHtcbiAgY29sb3I6ICMwMDVkYWI7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLnByb2Nlc3Npbmcge1xuICBjb2xvcjogI2ZmOTgwMDtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkudW5mdWxmaWxsZWQge1xuICBjb2xvcjogIzllOWU5ZTtcbn1cblxuLnN0aWNreS10YWIgLnBzLXNjcm9sbGJhci14LXJhaWwge1xuICBib3R0b206IDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLnN0aWNreS10YWIgLnBzLXNjcm9sbGJhci14LXJhaWwgLnBzLXNjcm9sbGJhci14IHtcbiAgaGVpZ2h0OiA1cHggIWltcG9ydGFudDtcbn1cblxubGVnZW5kIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zdGlja3ktcGFuZWxiYXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHRvcDogNjRweDtcbn1cblxuLnN0aWNreS1idXR0b24tYWN0aW9uIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBib3R0b206IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmljb24tYmh5dCB7XG4gIGhlaWdodDogMTVweDtcbiAgdG9wOiAycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG59XG5cbi5zdGlja3ktZGl2IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICB0b3A6IDUwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICB6LWluZGV4OiA5OTk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59IiwiLm1lbnUtZm9ybS13cmFwcGVyIC5tYXQtbWVudS1jb250ZW50IHtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4ucG8tcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uZC11bnNldCB7XG4gIGRpc3BsYXk6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbmtlbmRvLXNwbGl0dGVyIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMTAwcHg7XG59XG5cbmtlbmRvLXNwbGl0dGVyIHVsID4gbGkucmlnaHQtMCB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG5maWVsZHNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgcGFkZGluZy10b3A6IDAuMzVlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW07XG4gIHBhZGRpbmctbGVmdDogMC43NWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1ZW07XG4gIGJvcmRlcjogMXB4ICNlMGUwZTA7XG4gIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcbn1cblxuZmllbGRzZXQgLml0ZW1fcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmZpZWxkc2V0IHVsID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmZpZWxkc2V0IHVsLmlubGluZSA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gdWwuaW5saW5lID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAuaW5saW5lX2Ige1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIC5wYW5lbGJhci1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjcsIDI0MiwgMjUzLCAwLjUpO1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIC5wYW5lbGJhci1ncm91cC1iIHtcbiAgYm9yZGVyLXRvcDogMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCkgb3V0c2V0O1xufVxuXG4uc3RpY2t5LWxpc3Qge1xuICB0b3A6IDY0cHg7XG4gIHBvc2l0aW9uOiBzdGlja3kgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi5zdGlja3ktdGFiIHtcbiAgdG9wOiA2NHB4O1xuICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5O1xuICBiYWNrZ3JvdW5kOiAjZjVmN2ZhO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnN0aWNreS10YWIgdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICMyZTM4NGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2Y1ZjdmYTtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkuYWN0aXZlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDVkYWI7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMDA1ZGFiO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaTpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDA1ZGFiO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS5yZXNvbHZlZCB7XG4gIGNvbG9yOiAjMDA1ZGFiO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS5wcm9jZXNzaW5nIHtcbiAgY29sb3I6ICNmZjk4MDA7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLnVuZnVsZmlsbGVkIHtcbiAgY29sb3I6ICM5ZTllOWU7XG59XG5cbi5zdGlja3ktdGFiIC5wcy1zY3JvbGxiYXIteC1yYWlsIHtcbiAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zdGlja3ktdGFiIC5wcy1zY3JvbGxiYXIteC1yYWlsIC5wcy1zY3JvbGxiYXIteCB7XG4gIGhlaWdodDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmxlZ2VuZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uc3RpY2t5LXBhbmVsYmFyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICB0b3A6IDY0cHg7XG59XG5cbi5zdGlja3ktYnV0dG9uLWFjdGlvbiB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgYm90dG9tOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMTA7XG59XG5cbi5pY29uLWJoeXQge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHRvcDogMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xufVxuXG4uc3RpY2t5LWRpdiB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgdG9wOiA1MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgei1pbmRleDogOTk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-benh/kham-doan-tat-ca-phong/kham-doan-tat-ca-phong-detail/kham-doan-tat-ca-phong-detail.component.ts": 
        /*!****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-benh/kham-doan-tat-ca-phong/kham-doan-tat-ca-phong-detail/kham-doan-tat-ca-phong-detail.component.ts ***!
          \****************************************************************************************************************************************/
        /*! exports provided: KhamDoanTatCaPhongDetailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanTatCaPhongDetailComponent", function () { return KhamDoanTatCaPhongDetailComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/kham-doan.enum */ "./src/app/shared/enum/kham-doan.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _kham_benh_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../kham-benh.model */ "./src/app/modules/main/kham-benh/kham-benh.model.ts");
            /* harmony import */ var _kham_doan_tat_ca_phong_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../kham-doan-tat-ca-phong.model */ "./src/app/modules/main/kham-benh/kham-doan-tat-ca-phong/kham-doan-tat-ca-phong.model.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_15__);
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _kham_doan_kham_doan_ket_luan_cls_ksk_ket_qua_mau_popup_ket_qua_mau_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../kham-doan/kham-doan-ket-luan-cls-ksk/ket-qua-mau-popup/ket-qua-mau-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/ket-qua-mau-popup/ket-qua-mau-popup.component.ts");
            /* harmony import */ var _kham_doan_kham_doan_tiep_nhan_so_kham_suc_khoe_dinh_ky_popup_so_kham_suc_khoe_dinh_ky_popup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../kham-doan/kham-doan-tiep-nhan/so-kham-suc-khoe-dinh-ky-popup/so-kham-suc-khoe-dinh-ky-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/so-kham-suc-khoe-dinh-ky-popup/so-kham-suc-khoe-dinh-ky-popup.component.ts");
            /* harmony import */ var _kham_doan_kham_doan_ket_luan_popup_ket_qua_ksk_edit_popup_ket_qua_ksk_edit_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-edit/popup-ket-qua-ksk-edit.component */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-edit/popup-ket-qua-ksk-edit.component.ts");
            /* harmony import */ var src_app_core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/core/services/broadcast.service */ "./src/app/core/services/broadcast.service.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var _kham_doan_tat_ca_phong_dv_chua_thuc_hien_popup_kham_doan_tat_ca_phong_dv_chua_thuc_hien_popup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup/kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup.component */ "./src/app/modules/main/kham-benh/kham-doan-tat-ca-phong/kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup/kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup.component.ts");
            var KhamDoanTatCaPhongDetailComponent = /** @class */ (function () {
                function KhamDoanTatCaPhongDetailComponent(dialog, apiService, authService, notificationService, ref, route, router, location, broadcastService) {
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.ref = ref;
                    this.route = route;
                    this.router = router;
                    this.location = location;
                    this.broadcastService = broadcastService;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_15___default.a;
                    this.tabActive = "card0";
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__["DocumentType"].KhamDoanKhamBenhTatCaPhong;
                    this.baseRoute = "/kham-doan/kham-doan-tat-ca-phong";
                    this.phongBenhVienId = 0;
                    this.isDuoi6Tuoi = false;
                    this.Duoi6TuoiDisplay = "";
                    this.lstStatusSelectTabKhambenh = new _kham_benh_model__WEBPACK_IMPORTED_MODULE_13__["ListStatusSelectTabKhamBenh"]();
                    this.isSelectedParentTabKhamBenh = true;
                    this.gridChuanBiKhamColumns = [];
                    this.dataSourceChuanBiKham = {
                        data: [],
                        total: 0,
                    };
                    this.isScanF1 = false;
                    this.slHangDoi = 0;
                    this.timKiemObj = new _kham_doan_tat_ca_phong_model__WEBPACK_IMPORTED_MODULE_14__["KhamDoanTatCaPhongTimKiemNangCao"]();
                    this.phongKhamHienTai = {
                        DisplayName: null,
                        KeyId: Number(this.authService.getPhongLamViecId()),
                    };
                    this.isKhamDoan = true;
                    this.isKhamDoanTatCa = true;
                    this.loginNoiVien = src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_11__["HinhThucKhamBenh"].NoiVien;
                    this.hinhThucKham = src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_11__["HinhThucKhamBenh"].NoiVien;
                    this.isLoadingKhamDoan = false;
                    this.timeSaveChangeDataChuyenKhoaKSK = null;
                    this.isUpdateTimeSaveChuyenKhoaKSK = false;
                    // cập nhật thêm tính năng chỉ xem ở màn hình khám đoàn tất cả
                    this.isReadOnly = false;
                }
                KhamDoanTatCaPhongDetailComponent.prototype.ngOnInit = function () {
                    this.benhNhanHienTai = new _kham_benh_model__WEBPACK_IMPORTED_MODULE_13__["BenhVienHangDoi"]();
                    this.phongBenhVienId = this.benhNhanHienTai.PhongBenhVienId;
                    var menuInfo = this.authService.getAccessUser();
                    this.hinhThucKham = menuInfo.HinhThucKhamBenh;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].View)
                        && !this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Add)
                        && !this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Update)
                        && !this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Delete)) {
                        this.isReadOnly = true;
                    }
                    // xử lý load lại hàng đợi the query param
                    var hasLocalSearchString = false;
                    if (this.route.snapshot.queryParams.holdQuery != undefined) {
                        var holdQuery = this.route.snapshot.queryParams.holdQuery;
                        if (holdQuery != null && holdQuery) {
                            var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_19__["LocalStorageHelper"].getItem("additionalSearchStringDanhSachHangChoKhamDoanTatCa");
                            console.log('additionalSearchString', additionalSearchString);
                            if (additionalSearchString != null) {
                                this.timKiemObj = JSON.parse(additionalSearchString);
                                hasLocalSearchString = true;
                            }
                        }
                    }
                    if (!hasLocalSearchString) {
                        var menuInfo_1 = this.authService.getAccessUser();
                        var queryString = null;
                        if (menuInfo_1.HinhThucKhamBenh != src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_11__["HinhThucKhamBenh"].KhamDoanNgoaiVien) {
                            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_19__["LocalStorageHelper"].removeItem("additionalSearchStringDanhSachHangChoKhamDoanTatCa");
                            queryString = JSON.stringify(this.timKiemObj);
                        }
                        else {
                            this.timKiemObj.CongTyId = this.authService.getCongTyKhamSucKhoeId();
                            this.timKiemObj.HopDongId = this.authService.getHopDongKhamSucKhoeId();
                            queryString = JSON.stringify(this.timKiemObj);
                            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_19__["LocalStorageHelper"].setItem("additionalSearchStringDanhSachHangChoKhamDoanTatCa", queryString);
                            hasLocalSearchString = true;
                        }
                    }
                    this.refreshHangDoiHienTai();
                    this.gridChuanBiKhamColumns = [
                        { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 60, Sortable: false, Template: this.maTNTemplate },
                        { Field: "HoTen", Title: "Họ tên", MinWidth: 100, Sortable: false, ShowTooltip: true, Template: this.hoTenTemplate },
                        { Field: "TenGioiTinh", Title: "GT", Width: 35, Sortable: false },
                        // { Field: "Tuoi", Title: "Tuổi", Width: 30, Sortable: true },
                        { Field: "NamSinh", Title: "Năm sinh", Width: 35, Sortable: false },
                    ];
                };
                KhamDoanTatCaPhongDetailComponent.prototype.showPopupLoadingData = function () {
                    console.log('this.popupLoadingData.openDialogs', this.popupLoadingData);
                    if (this.popupLoadingData == undefined
                        || this.popupLoadingData == null
                        || this.popupLoadingData.openDialogs == undefined
                        || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], {
                            disableClose: true,
                            width: "200px",
                            height: "90px",
                            data: { Title: "Đang tải dữ liệu..." },
                        });
                    }
                };
                KhamDoanTatCaPhongDetailComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                KhamDoanTatCaPhongDetailComponent.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    this.subscription = this.broadcastService.on("ChuyenPhong", function (event) {
                        if (event.message) {
                            console.log('event.message', event.message);
                            _this.ChuyenPhongNoiBo(event.message);
                        }
                    });
                };
                KhamDoanTatCaPhongDetailComponent.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe();
                };
                KhamDoanTatCaPhongDetailComponent.prototype.ChuyenPhongNoiBo = function (item) {
                    console.log('ChuyenPhongNoiBo', item);
                    var phongBenhVienId = this.authService.getPhongLamViecId();
                    if (phongBenhVienId !== item.KeyId) {
                        if (this.benhNhanHienTai.Id != 0 && this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh) {
                            this.saveChangeData(null, null, null, item);
                        }
                        else {
                            this.xuLyChuyenPhongKham(item);
                        }
                    }
                    else {
                        this.closePopupLoadingData();
                        this.broadcastService.broadcast({
                            name: "ChuyenPhongThanhCong",
                            message: true,
                        });
                    }
                };
                KhamDoanTatCaPhongDetailComponent.prototype.xuLyChuyenPhongKham = function (item) {
                    this.phongKhamHienTai.KeyId = item.KeyId;
                    this.LuuHoatDongNhanVien();
                    // //chọn phòng khám nào load data phần đó
                    // if (item) {
                    //   this.refreshHangDoiHienTai();
                    // }
                    // this.broadcastService.broadcast({
                    //   name: "ChuyenPhongThanhCong",
                    //   message: true,
                    // });
                    // this.closePopupLoadingData();
                };
                KhamDoanTatCaPhongDetailComponent.prototype.LuuHoatDongNhanVien = function () {
                    var _this = this;
                    this.authService.setPhongLamViecId(this.phongKhamHienTai.KeyId);
                    this.phongKhamBenh = {};
                    this.phongKhamBenh.PhongKhamBenhId = this.phongKhamHienTai.KeyId;
                    this.apiService
                        .post("HoatDongNhanVien/LuuHoatDongNhanVien", this.phongKhamBenh)
                        .subscribe(function (resultData) {
                        _this.closePopupLoadingData();
                        _this.broadcastService.broadcast({
                            name: "ChuyenPhongThanhCong",
                            message: true,
                        });
                        _this.refreshPage();
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                KhamDoanTatCaPhongDetailComponent.prototype.refreshPage = function () {
                    var _this = this;
                    var currentUrl = this.router.url.lastIndexOf("?") >= 0 ? this.router.url.substr(0, this.router.url.lastIndexOf("?")) : this.router.url;
                    var queryParams = null;
                    this.route.queryParams
                        .subscribe(function (params) {
                        queryParams = params;
                    });
                    this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () { return _this.router.navigate([currentUrl], { queryParams: queryParams }); });
                };
                KhamDoanTatCaPhongDetailComponent.prototype.loadThongTinKhamDoanKhamBenh = function () {
                    this.refreshHangDoiHienTai();
                    this.getBenhNhanDangKham(this.benhNhanHienTai.Id);
                };
                KhamDoanTatCaPhongDetailComponent.prototype.refreshHangDoiHienTai = function (showPopupLoading) {
                    var _this = this;
                    if (showPopupLoading === void 0) { showPopupLoading = false; }
                    if (this.timKiemObj.CongTyId == null) {
                        this.clearHangDoi();
                    }
                    else {
                        if (showPopupLoading) {
                            this.showPopupLoadingData();
                        }
                        this.location.replaceState(this.baseRoute + '?holdQuery=true');
                        this.timKiemObj.HopDongKhamNhanVienId = this.benhNhanHienTai.Id != 0 ? this.benhNhanHienTai.YeuCauTiepNhan.HopDongKhamSucKhoeNhanVienId : null;
                        var queryString = JSON.stringify(this.timKiemObj);
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_19__["LocalStorageHelper"].setItem("additionalSearchStringDanhSachHangChoKhamDoanTatCa", queryString);
                        this.apiService.post("KhamBenh/GetDanhSachHangDoiKhamDoanTatCa", this.timKiemObj)
                            .subscribe(function (resultData) {
                            if (resultData !== undefined && resultData != null) {
                                _this.dataSourceChuanBiKham = {
                                    data: resultData,
                                    total: resultData.length,
                                };
                                if (_this.dataSourceChuanBiKham.data.length != _this.slHangDoi) {
                                    _this.slHangDoi = _this.dataSourceChuanBiKham.data.length;
                                }
                            }
                            else {
                                _this.clearHangDoi();
                            }
                            _this.closePopupLoadingData();
                        }, function (err) {
                            if (err.Message != "Validation Failed") {
                                _this.notificationService.showError(err.Message);
                            }
                            _this.closePopupLoadingData();
                        });
                    }
                };
                KhamDoanTatCaPhongDetailComponent.prototype.clearHangDoi = function () {
                    this.dataSourceChuanBiKham = {
                        data: [],
                        total: 0,
                    };
                    this.slHangDoi = 0;
                };
                KhamDoanTatCaPhongDetailComponent.prototype.getBenhNhanDangKham = function (hangDoiId, isLoading) {
                    var _this = this;
                    if (isLoading === void 0) { isLoading = true; }
                    this.closePopupLoadingData();
                    this.benhNhanHienTai = new _kham_benh_model__WEBPACK_IMPORTED_MODULE_13__["BenhVienHangDoi"]();
                    this.benhNhanHienTai.isShowPanelItemKhamBenh = false;
                    this.benhNhanHienTai.isShowPanelItemKetLuan = false;
                    if (isLoading) {
                        this.showPopupLoadingData();
                    }
                    this.apiService.get("KhamBenh/GetYeuCauKhamBenhDangKhamTheoHopDongKhamDoan?hangDoiId=" + hangDoiId)
                        .subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            _this.benhNhanHienTai = resultData;
                            _this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj = JSON.parse(_this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplate);
                            _this.refreshHangDoiHienTai();
                            _this.bindDataDynamicComponent();
                            _this.benhNhanHienTai.YeuCauKhamBenh.IsKhamDoan = true;
                            _this.benhNhanHienTai.YeuCauKhamBenh.TemplateDichVuKhamSucKhoes.forEach(function (element) {
                                element.TemplateKhamCacCoQuanObj = JSON.parse(element.ThongTinKhamTheoDichVuTemplate);
                                _this.bindDataDynamicComponent(element.TemplateKhamCacCoQuanObj, element.ThongTinKhamTheoDichVuData);
                            });
                            _this.ganThongTinKhamTamThoi();
                            _this.unSelectedTab();
                            _this.lstStatusSelectTabKhambenh.selectedTabKhamBenh = true;
                            _this.isSelectedParentTabKhamBenh = true;
                            if (_this.benhNhanHienTai.YeuCauTiepNhan.NamSinh != null &&
                                _this.benhNhanHienTai.YeuCauTiepNhan.ThangSinh != null &&
                                _this.benhNhanHienTai.YeuCauTiepNhan.NgaySinh != null) {
                                var ngaySinh = new Date(_this.benhNhanHienTai.YeuCauTiepNhan.ThangSinh +
                                    "/" +
                                    _this.benhNhanHienTai.YeuCauTiepNhan.NgaySinh +
                                    "/" +
                                    _this.benhNhanHienTai.YeuCauTiepNhan.NamSinh +
                                    "/");
                                _this.getAge(ngaySinh, new Date());
                            }
                            _this.closePopupLoadingData();
                        }
                        else {
                            _this.benhNhanHienTai = new _kham_benh_model__WEBPACK_IMPORTED_MODULE_13__["BenhVienHangDoi"]();
                            _this.closePopupLoadingData();
                        }
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                KhamDoanTatCaPhongDetailComponent.prototype.timKiemBenhNhan = function (event) {
                    if (event.key == "Enter") {
                        this.refreshHangDoiHienTai();
                    }
                };
                KhamDoanTatCaPhongDetailComponent.prototype.QuetMaQRCodeClick = function () {
                    var elementBarcode = document.getElementById("barcodeActive");
                    if (elementBarcode != undefined) {
                        elementBarcode.click();
                    }
                };
                KhamDoanTatCaPhongDetailComponent.prototype.changeQR = function (event) {
                    if (event != null && typeof event == "string" && event.endsWith("@")) {
                        var dataTimKiem = event.split("|");
                        if (dataTimKiem.length > 1) {
                            this.timKiemObj.SearchString = dataTimKiem[0];
                        }
                        else {
                            this.timKiemObj.SearchString = event.slice(0, -1);
                        }
                        this.refreshHangDoiHienTai();
                    }
                    else {
                        this.notificationService.showError("Không tìm thấy thông tin cần tìm.");
                    }
                    this.isScanF1 = false;
                };
                KhamDoanTatCaPhongDetailComponent.prototype.searchChange = function (event) {
                    var self = this;
                    if (event != null && typeof event == "string" && event.endsWith("@")) {
                        self.timeoutSearchChange = setTimeout(function () {
                            self.modelQRCode = event;
                            self.changeQR(self.modelQRCode);
                        }, 10);
                    }
                    else if (event == null || event == "") {
                        this.modelQRCode = null;
                        this.refreshHangDoiHienTai();
                    }
                };
                KhamDoanTatCaPhongDetailComponent.prototype.batDauKham = function (hangDoi) {
                    if (hangDoi == undefined || hangDoi == null || hangDoi.Id == this.benhNhanHienTai.Id) {
                        return;
                    }
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Update)
                        || (this.isReadOnly && (this.benhNhanHienTai.Id == 0 || !this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh))) {
                        this.showPopupLoadingData();
                        if (this.benhNhanHienTai.Id != 0) {
                            if (this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh) {
                                this.saveChangeData(hangDoi.Id, null, null, null, false);
                            }
                            else {
                                this.getBenhNhanDangKham(hangDoi.Id);
                            }
                        }
                        else {
                            this.getBenhNhanDangKham(hangDoi.Id);
                        }
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanTatCaPhongDetailComponent.prototype.processDynamicComponent = function (thongTinTempLateObj) {
                    if (thongTinTempLateObj === void 0) { thongTinTempLateObj = null; }
                    var dataKhamTheoTemplate;
                    var lstDataKhamTheoTemplate = [];
                    var tempplate = this.benhNhanHienTai.YeuCauKhamBenh.TemplateDichVuKhamSucKhoes.find(function (x) { return x.IsDungChuyenKhoaLogin; });
                    if (tempplate != null) {
                        this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj
                            = tempplate.TemplateKhamCacCoQuanObj != null && tempplate.TemplateKhamCacCoQuanObj != "" ? Object.assign({}, tempplate.TemplateKhamCacCoQuanObj) : null;
                    }
                    var thongTinKhamTheoDichVuTemplateObj = thongTinTempLateObj == null ? this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj : thongTinTempLateObj;
                    if (thongTinKhamTheoDichVuTemplateObj !== null) {
                        thongTinKhamTheoDichVuTemplateObj.ComponentDynamics.forEach(function (item) {
                            if (item.groupItems != undefined &&
                                item.groupItems != null &&
                                item.groupItems.length > 0) {
                                item.groupItems.forEach(function (element) {
                                    if (element.Value != undefined && element.Value !== null) {
                                        dataKhamTheoTemplate = {
                                            Id: element.Id,
                                            Value: element.Value,
                                        };
                                        lstDataKhamTheoTemplate.push(dataKhamTheoTemplate);
                                    }
                                });
                            }
                            else if (item.Value != undefined && item.Value !== null) {
                                dataKhamTheoTemplate = {
                                    Id: item.Id,
                                    Value: item.Value,
                                };
                                lstDataKhamTheoTemplate.push(dataKhamTheoTemplate);
                            }
                        });
                        var strLstDataKhamTheoTemplate = JSON.stringify(lstDataKhamTheoTemplate);
                        var saveTemplate = '{"DataKhamTheoTemplate": ' + strLstDataKhamTheoTemplate + "}";
                        return saveTemplate;
                    }
                    return null;
                };
                KhamDoanTatCaPhongDetailComponent.prototype.bindDataDynamicComponent = function (thongTinTempLateObj, thongTinDataObj) {
                    if (thongTinTempLateObj === void 0) { thongTinTempLateObj = null; }
                    if (thongTinDataObj === void 0) { thongTinDataObj = null; }
                    var tempplate = this.benhNhanHienTai.YeuCauKhamBenh.TemplateDichVuKhamSucKhoes.find(function (x) { return x.IsDungChuyenKhoaLogin; });
                    if (tempplate != null) {
                        this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj
                            = tempplate.TemplateKhamCacCoQuanObj != null && tempplate.TemplateKhamCacCoQuanObj != "" ? Object.assign({}, tempplate.TemplateKhamCacCoQuanObj) : null;
                        this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuData = tempplate.ThongTinKhamTheoDichVuData;
                    }
                    var strData = thongTinDataObj == null ? this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuData : thongTinDataObj;
                    var thongTinKhamTheoDichVuTemplateObj = thongTinTempLateObj == null ? this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj : thongTinTempLateObj;
                    if (strData != undefined && strData != null) {
                        var dataObj_1 = JSON.parse(strData);
                        var itemTemp_1 = null;
                        if (thongTinKhamTheoDichVuTemplateObj !== null) {
                            thongTinKhamTheoDichVuTemplateObj.ComponentDynamics.forEach(function (item) {
                                if (item.groupItems != undefined &&
                                    item.groupItems != null &&
                                    item.groupItems.length > 0) {
                                    item.groupItems.forEach(function (element) {
                                        itemTemp_1 = dataObj_1.DataKhamTheoTemplate.find(function (x) { return x.Id == element.Id; });
                                        if (itemTemp_1 != null) {
                                            element.Value = itemTemp_1.Value;
                                        }
                                    });
                                }
                                else {
                                    itemTemp_1 = dataObj_1.DataKhamTheoTemplate.find(function (x) { return x.Id == item.Id; });
                                    if (itemTemp_1 != null) {
                                        item.Value = itemTemp_1.Value;
                                    }
                                }
                            });
                        }
                    }
                };
                KhamDoanTatCaPhongDetailComponent.prototype.ganThongTinKhamTamThoi = function () {
                    var yeuCauKhamBenhKhamBoPhanKhacs = this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs.slice();
                    var yeuCauKhamBenhChanDoanPhanBiets = this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets.slice();
                    //trường hợp sửa data đã lưu trực tiếp trên grid
                    var ketQuaSinhHieus = [];
                    this.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus.forEach(function (val) { return ketQuaSinhHieus.push(Object.assign({}, val)); });
                    var khamBenhBenhNhanDiUngThuocs = this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs.slice();
                    var khamBenhBenhNhanTienSuBenhs = this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs.slice();
                    var yeuCauKhamBenhBoPhanTonThuongs = this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhBoPhanTonThuongs.slice();
                    var ThongTinKhamTheoDichVuTemplateObj = JSON.stringify(this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj);
                    // cập nhật chọn/bỏ chọn khám dịch ở khám đoàn tất cả
                    var isCheckDichVuKhamSucKhoeTatCas = [];
                    var isChangeDichVuKhamSucKhoeTatCas = [];
                    var templateDichVuKhamSucKhoeTatCas = [];
                    this.benhNhanHienTai.YeuCauKhamBenh.TemplateDichVuKhamSucKhoes.forEach(function (element) {
                        templateDichVuKhamSucKhoeTatCas.push(JSON.stringify(element.TemplateKhamCacCoQuanObj));
                        // cập nhật chọn/bỏ chọn khám dịch ở khám đoàn tất cả
                        isCheckDichVuKhamSucKhoeTatCas.push(element.IsCheckedDichVu);
                        isChangeDichVuKhamSucKhoeTatCas.push(element.IsChangeData);
                    });
                    ketQuaSinhHieus.forEach(function (element) {
                        if (element.IsUpdate) {
                            element.IsUpdate = false;
                        }
                    });
                    this.thongTinKhamTemp = new _kham_benh_model__WEBPACK_IMPORTED_MODULE_13__["ThongTinKhamPrevious"](
                    //BVHD-3706
                    // this.benhNhanHienTai.YeuCauTiepNhan.TrieuChungTiepNhan,
                    this.benhNhanHienTai.YeuCauKhamBenh.TrieuChungTiepNhan, this.benhNhanHienTai.YeuCauKhamBenh.BenhSu, this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanCuaNoiGioiThieu, this.benhNhanHienTai.YeuCauKhamBenh.KhamToanThan, this.benhNhanHienTai.YeuCauKhamBenh.TuanHoan, this.benhNhanHienTai.YeuCauKhamBenh.HoHap, this.benhNhanHienTai.YeuCauKhamBenh.TieuHoa, this.benhNhanHienTai.YeuCauKhamBenh.ThanTietNieuSinhDuc, this.benhNhanHienTai.YeuCauKhamBenh.ThanKinh, this.benhNhanHienTai.YeuCauKhamBenh.CoXuongKhop, this.benhNhanHienTai.YeuCauKhamBenh.TaiMuiHong, this.benhNhanHienTai.YeuCauKhamBenh.RangHamMat, this.benhNhanHienTai.YeuCauKhamBenh.NoiTietDinhDuong, this.benhNhanHienTai.YeuCauKhamBenh.SanPhuKhoa, this.benhNhanHienTai.YeuCauKhamBenh.DaLieu, this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanSoBoICDId, this.benhNhanHienTai.YeuCauKhamBenh.TenChanDoanSoBoICD, this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanSoBoGhiChu, ThongTinKhamTheoDichVuTemplateObj, yeuCauKhamBenhKhamBoPhanKhacs, yeuCauKhamBenhChanDoanPhanBiets, ketQuaSinhHieus, khamBenhBenhNhanDiUngThuocs, khamBenhBenhNhanTienSuBenhs, yeuCauKhamBenhBoPhanTonThuongs, null, templateDichVuKhamSucKhoeTatCas);
                    this.thongTinKetLuanKhamDoanPrevious = new _kham_benh_model__WEBPACK_IMPORTED_MODULE_13__["ThongTinKetLuanKhamDoanPrevious"](this.benhNhanHienTai.YeuCauTiepNhan.KSKKetQuaCanLamSang, this.benhNhanHienTai.YeuCauTiepNhan.KSKDanhGiaCanLamSang, this.benhNhanHienTai.YeuCauTiepNhan.PhanLoaiSucKhoeId, this.benhNhanHienTai.YeuCauTiepNhan.KSKKetLuanGhiChu, this.benhNhanHienTai.YeuCauTiepNhan.KSKKetLuanCacBenhTat);
                    // cập nhật chọn/bỏ chọn khám dịch ở khám đoàn tất cả
                    this.thongTinChangeDichVuKhamDoanTatCaPrevious = new _kham_benh_model__WEBPACK_IMPORTED_MODULE_13__["ThongTinChangeDichVuKhamDoanTatCaPrevious"](isCheckDichVuKhamSucKhoeTatCas, isChangeDichVuKhamSucKhoeTatCas);
                };
                KhamDoanTatCaPhongDetailComponent.prototype.getAge = function (date_1, date_2) {
                    var yAppendix, mAppendix, dAppendix;
                    // let days = date_2.getDate() - date_1.getDate() + 1;
                    var days = date_2.getDate() - date_1.getDate(); //Thach edit
                    if (days < 0) {
                        date_2.setMonth(date_2.getMonth() - 1);
                        days += this.DaysInMonth(date_2);
                    }
                    var months = date_2.getMonth() - date_1.getMonth();
                    if (months < 0) {
                        date_2.setFullYear(date_2.getFullYear() - 1);
                        months += 12;
                    }
                    var years = date_2.getFullYear() - date_1.getFullYear();
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
                        this.isDuoi6Tuoi = true;
                    }
                    else {
                        this.isDuoi6Tuoi = false;
                    }
                    this.Duoi6TuoiDisplay =
                        years + " Tuổi " + months + " Tháng " + days + " Ngày ";
                };
                KhamDoanTatCaPhongDetailComponent.prototype.DaysInMonth = function (date2_UTC) {
                    var monthStart = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth(), 1);
                    var monthEnd = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth() + 1, 1);
                    var monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
                    return monthLength;
                };
                KhamDoanTatCaPhongDetailComponent.prototype.onParentTabSelect = function (event) {
                    if (event.index == 0 || event.title == 'Khám bệnh') {
                        // dùng để ràng buộc hot key
                        this.isSelectedParentTabKhamBenh = true;
                        // reload hàng chờ
                        this.refreshHangDoiHienTai();
                    }
                    else {
                        this.isSelectedParentTabKhamBenh = false;
                    }
                };
                KhamDoanTatCaPhongDetailComponent.prototype.unSelectedTab = function () {
                    this.lstStatusSelectTabKhambenh.selectedTabKhamBenh = false;
                    this.lstStatusSelectTabKhambenh.selectedTabLichSuKham = false;
                    this.lstStatusSelectTabKhambenh.selectedTabChiDinh = false;
                    this.lstStatusSelectTabKhambenh.selectedTabKetQuaCLS = false;
                    this.lstStatusSelectTabKhambenh.selectedTabChanDoan = false;
                    this.lstStatusSelectTabKhambenh.selectedTabTuongTrinhPttt = false;
                    this.lstStatusSelectTabKhambenh.selectedTabTuVanThuocKhamDoan = false;
                };
                KhamDoanTatCaPhongDetailComponent.prototype.scrollTo = function (element) {
                    jQuery(".sidenav-content").animate({
                        scrollTop: jQuery("#" + element).position().top + 60,
                    });
                    this.tabActive = element;
                };
                KhamDoanTatCaPhongDetailComponent.prototype.chuyenDen = function (element, event, isKhamDoan) {
                    if (isKhamDoan === void 0) { isKhamDoan = false; }
                    var self = this;
                    // setTimeout(function () {
                    //   self.scrollTo(element);
                    // }, 100);
                    if (!(self.isKhamDoan && event.index == 0)) {
                        setTimeout(function () {
                            self.scrollTo(element);
                        }, 100);
                    }
                    if (event.index == 0 || event.title == "KHÁM BỆNH") {
                        self.unSelectedTab();
                        self.lstStatusSelectTabKhambenh.selectedTabKhamBenh = true;
                    }
                    if (event.index == 1 || event.title == "LỊCH SỬ KHÁM") {
                        self.unSelectedTab();
                        self.lstStatusSelectTabKhambenh.selectedTabLichSuKham = true;
                    }
                    if (event.index == 2 || event.title == "CHỈ ĐỊNH") {
                        self.unSelectedTab();
                        self.lstStatusSelectTabKhambenh.selectedTabChiDinh = true;
                    }
                    if (event.index == 3 || event.title == "KQ CLS") {
                        self.unSelectedTab();
                        self.lstStatusSelectTabKhambenh.selectedTabKetQuaCLS = true;
                    }
                    if (event.index == 5 || event.title == "TƯỜNG TRÌNH PT/TT") {
                        self.unSelectedTab();
                        self.lstStatusSelectTabKhambenh.selectedTabTuongTrinhPttt = true;
                        self.validationKetLuanErrors = [];
                    }
                    if (!isKhamDoan) {
                        if (event.index == 4 || event.title == "CHẨN ĐOÁN") {
                            self.unSelectedTab();
                            self.lstStatusSelectTabKhambenh.selectedTabChanDoan = true;
                            self.validationKetLuanErrors = [];
                        }
                    }
                    else {
                        if (event.index == 4 || event.title == "TƯ VẤN THUỐC") {
                            self.unSelectedTab();
                            self.lstStatusSelectTabKhambenh.selectedTabTuVanThuocKhamDoan = true;
                            self.validationKetLuanErrors = [];
                        }
                    }
                };
                KhamDoanTatCaPhongDetailComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang lưu dữ liệu..." },
                    });
                };
                KhamDoanTatCaPhongDetailComponent.prototype.cancelChangeData = function () {
                    var _this = this;
                    this.benhNhanHienTai.validationErrors = null;
                    this.ref.detectChanges();
                    //BVHD-3706
                    ///this.benhNhanHienTai.YeuCauTiepNhan.TrieuChungTiepNhan = this.thongTinKhamTemp.TrieuChungTiepNhan;
                    this.benhNhanHienTai.YeuCauKhamBenh.TrieuChungTiepNhan = this.thongTinKhamTemp.TrieuChungTiepNhan;
                    this.benhNhanHienTai.YeuCauKhamBenh.BenhSu = this.thongTinKhamTemp.BenhSu;
                    this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanCuaNoiGioiThieu = this.thongTinKhamTemp.ChanDoanCuaNoiGioiThieu;
                    this.benhNhanHienTai.YeuCauKhamBenh.KhamToanThan = this.thongTinKhamTemp.KhamToanThan;
                    this.benhNhanHienTai.YeuCauKhamBenh.TuanHoan = this.thongTinKhamTemp.TuanHoan;
                    this.benhNhanHienTai.YeuCauKhamBenh.HoHap = this.thongTinKhamTemp.HoHap;
                    this.benhNhanHienTai.YeuCauKhamBenh.TieuHoa = this.thongTinKhamTemp.TieuHoa;
                    this.benhNhanHienTai.YeuCauKhamBenh.ThanTietNieuSinhDuc = this.thongTinKhamTemp.ThanTietNieuSinhDuc;
                    this.benhNhanHienTai.YeuCauKhamBenh.ThanKinh = this.thongTinKhamTemp.ThanKinh;
                    this.benhNhanHienTai.YeuCauKhamBenh.CoXuongKhop = this.thongTinKhamTemp.CoXuongKhop;
                    this.benhNhanHienTai.YeuCauKhamBenh.TaiMuiHong = this.thongTinKhamTemp.TaiMuiHong;
                    this.benhNhanHienTai.YeuCauKhamBenh.RangHamMat = this.thongTinKhamTemp.RangHamMat;
                    this.benhNhanHienTai.YeuCauKhamBenh.NoiTietDinhDuong = this.thongTinKhamTemp.NoiTietDinhDuong;
                    this.benhNhanHienTai.YeuCauKhamBenh.SanPhuKhoa = this.thongTinKhamTemp.SanPhuKhoa;
                    this.benhNhanHienTai.YeuCauKhamBenh.DaLieu = this.thongTinKhamTemp.DaLieu;
                    this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanSoBoICDId = this.thongTinKhamTemp.ChanDoanSoBoICDId;
                    this.benhNhanHienTai.YeuCauKhamBenh.TenChanDoanSoBoICD = this.thongTinKhamTemp.TenChanDoanSoBoICD;
                    this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanSoBoGhiChu = this.thongTinKhamTemp.ChanDoanSoBoGhiChu;
                    this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj = JSON.parse(this.thongTinKhamTemp.ThongTinKhamTheoDichVuTemplateObj);
                    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs = this.thongTinKhamTemp.YeuCauKhamBenhKhamBoPhanKhacs.slice();
                    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets = this.thongTinKhamTemp.YeuCauKhamBenhChanDoanPhanBiets.slice();
                    //this.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus = this.thongTinKhamTemp.KetQuaSinhHieus.slice();
                    // trường hợp sửa data đã lưu trực tiếp trên grid
                    var ketQuaSinhHieus = [];
                    this.thongTinKhamTemp.KetQuaSinhHieus.forEach(function (val) { return ketQuaSinhHieus.push(Object.assign({}, val)); });
                    this.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus = ketQuaSinhHieus;
                    this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs = this.thongTinKhamTemp.KhamBenhBenhNhanDiUngThuocs.slice();
                    this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs = this.thongTinKhamTemp.KhamBenhBenhNhanTienSuBenhs.slice();
                    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhBoPhanTonThuongs = this.thongTinKhamTemp.YeuCauKhamBenhBoPhanTonThuongs.slice();
                    this.benhNhanHienTai.YeuCauKhamBenh.TemplateDichVuKhamSucKhoes.forEach(function (element, index) {
                        element.TemplateKhamCacCoQuanObj = JSON.parse(_this.thongTinKhamTemp.TemplateDichVuKhamSucKhoeTatCas[index]);
                        // cập nhật chọn/bỏ chọn khám dịch ở khám đoàn tất cả
                        element.IsCheckedDichVu = _this.thongTinChangeDichVuKhamDoanTatCaPrevious.IsCheckDichVuKhamSucKhoeTatCas[index];
                        element.IsChangeData = false;
                    });
                    // gán lại thông tin kết luận khám đoàn
                    this.benhNhanHienTai.YeuCauTiepNhan.KSKKetQuaCanLamSang = this.thongTinKetLuanKhamDoanPrevious.KSKKetQuaCanLamSang;
                    this.benhNhanHienTai.YeuCauTiepNhan.KSKDanhGiaCanLamSang = this.thongTinKetLuanKhamDoanPrevious.KSKDanhGiaCanLamSang;
                    this.benhNhanHienTai.YeuCauTiepNhan.PhanLoaiSucKhoeId = this.thongTinKetLuanKhamDoanPrevious.PhanLoaiSucKhoeId;
                    this.benhNhanHienTai.YeuCauTiepNhan.KSKKetLuanGhiChu = this.thongTinKetLuanKhamDoanPrevious.KSKKetLuanGhiChu;
                    this.benhNhanHienTai.YeuCauTiepNhan.KSKKetLuanCacBenhTat = this.thongTinKetLuanKhamDoanPrevious.KSKKetLuanCacBenhTat;
                    this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh = false;
                };
                KhamDoanTatCaPhongDetailComponent.prototype.saveChangeData = function (hangDoiId, luaChonHoanThanhKham, phieuIn, chuyenPhong, isLoading) {
                    var _this = this;
                    if (hangDoiId === void 0) { hangDoiId = null; }
                    if (luaChonHoanThanhKham === void 0) { luaChonHoanThanhKham = null; }
                    if (phieuIn === void 0) { phieuIn = null; }
                    if (chuyenPhong === void 0) { chuyenPhong = null; }
                    if (isLoading === void 0) { isLoading = true; }
                    //this.closePopupLoadingData();
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Update)) {
                        this.benhNhanHienTai.validationErrors = null;
                        this.ref.detectChanges();
                        if (isLoading) {
                            this.loadingPage();
                        }
                        this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuData = this.processDynamicComponent();
                        this.benhNhanHienTai.YeuCauKhamBenh.TemplateDichVuKhamSucKhoes.forEach(function (element) {
                            element.ThongTinKhamTheoDichVuData = _this.processDynamicComponent(element.TemplateKhamCacCoQuanObj);
                        });
                        this.benhNhanHienTai.YeuCauTiepNhan.IsKhamDoanTatCa = true;
                        this.benhNhanHienTai.YeuCauKhamBenh.IsHoanThanhKham = luaChonHoanThanhKham != null;
                        this.apiService
                            .post("KhamBenh/LuuThongTinKhamBenhKhamDoan", this.benhNhanHienTai)
                            .subscribe(function (resultData) {
                            if (!_this.isUpdateTimeSaveChuyenKhoaKSK) {
                                var mess = _this.benhNhanHienTai.YeuCauKhamBenh.IsHoanThanhKham ? "Hoàn thành khám" : "Lưu";
                                _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].ActionSuccessfully, [mess]));
                            }
                            if (luaChonHoanThanhKham == null) {
                                _this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh = false;
                                _this.benhNhanHienTai.isShowPanelItemKhamBenh = false;
                                _this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs =
                                    resultData.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs;
                                _this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs =
                                    resultData.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs;
                                _this.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus =
                                    resultData.YeuCauTiepNhan.KetQuaSinhHieus;
                                if (_this.benhNhanHienTai.YeuCauTiepNhan.IsDuChuyenKhoaKhamSucKhoeChinh != true) {
                                    _this.benhNhanHienTai.YeuCauTiepNhan.PhanLoaiSucKhoeId = null;
                                    _this.benhNhanHienTai.YeuCauTiepNhan.KSKKetLuanPhanLoaiSucKhoe = null;
                                    //BVHD-3349
                                    // this.benhNhanHienTai.YeuCauTiepNhan.KSKKetLuanGhiChu = null;
                                    // this.benhNhanHienTai.YeuCauTiepNhan.KSKKetLuanCacBenhTat = null;
                                }
                                _this.ganThongTinKhamTamThoi();
                                if (hangDoiId != null) {
                                    _this.getBenhNhanDangKham(hangDoiId, isLoading);
                                }
                                else {
                                    _this.closePopupLoadingData();
                                    if (phieuIn) {
                                        if (phieuIn == 1) // In Sổ KSK định kỳ
                                         {
                                            _this.inSoKSK();
                                        }
                                        else if (phieuIn == 2) // In kết quả KSK
                                         {
                                            _this.inKetQuaKSK();
                                        }
                                    }
                                    else if (_this.isUpdateTimeSaveChuyenKhoaKSK) {
                                        _this.timeSaveChangeDataChuyenKhoaKSK = new Date();
                                        _this.isUpdateTimeSaveChuyenKhoaKSK = false;
                                    }
                                    else if (chuyenPhong != null) {
                                        _this.xuLyChuyenPhongKham(chuyenPhong);
                                    }
                                }
                            }
                            else {
                                if (luaChonHoanThanhKham == "tuChon") {
                                    _this.benhNhanHienTai = new _kham_benh_model__WEBPACK_IMPORTED_MODULE_13__["BenhVienHangDoi"]();
                                    _this.refreshHangDoiHienTai();
                                }
                                else if (luaChonHoanThanhKham > 0) {
                                    // result là id hàng đợi tiếp theo
                                    _this.getBenhNhanDangKham(luaChonHoanThanhKham);
                                }
                            }
                        }, function (err) {
                            _this.benhNhanHienTai.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                _this.notificationService.showError(err.Message);
                            }
                            _this.closePopupLoadingData();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanTatCaPhongDetailComponent.prototype.hoanThanhKham = function () {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Update)) {
                        this.timKiemObj.HopDongKhamNhanVienId = this.benhNhanHienTai.Id != 0 ? this.benhNhanHienTai.YeuCauTiepNhan.HopDongKhamSucKhoeNhanVienId : null;
                        // 22/11/2021: cập nhật KSK ko mặc định tự chọn người bệnh khi hoàn thành khám
                        this.saveChangeData(null, "tuChon");
                        // let dialogRefTiepTheo = this.dialog.open(LanKhamHienTaiBenhNhanTiepTheoPopupComponent, {
                        //   disableClose: false,
                        //   width: "600px",
                        //   data: {
                        //     "IsKhamDoanTatCa": true,
                        //     "QueryInfo": this.timKiemObj
                        //   },
                        // })
                        //   .afterClosed()
                        //   .subscribe((result) => {
                        //     if (
                        //       result == "boQua" ||
                        //       result == null ||
                        //       result == 0
                        //     ) {
                        //       // giữ nguyên màn hình hiện tại 
                        //     }
                        //     else {
                        //       this.saveChangeData(null, result);
                        //     }
                        //   });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanTatCaPhongDetailComponent.prototype.kiemTraDichVuChuaThucHienKhiHoanThanhKham = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Update)) {
                        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_25__["ConfirmComponent"], {
                            disableClose: false,
                            width: "500px",
                            data: {
                                Title: "Xác nhận",
                                Message: "Bạn có chắn chắn muốn lưu và hoàn thành khám không?",
                            },
                        }).afterClosed().subscribe(function (res) {
                            if (res == "Yes") {
                                // xử lý kiểm tra dịch vụ chưa thực hiện
                                var arrayYCKBDangChonId_1 = [];
                                _this.benhNhanHienTai.YeuCauKhamBenh.TemplateDichVuKhamSucKhoes.forEach(function (element) {
                                    if (element.IsCheckedDichVu) {
                                        arrayYCKBDangChonId_1.push(element.YeuCauKhamBenhId);
                                    }
                                });
                                var kiemTraVo = {
                                    YeuCauTiepNhanId: _this.benhNhanHienTai.YeuCauTiepNhanId,
                                    YeuCauKhamBenhDangChonThucHienIds: arrayYCKBDangChonId_1
                                };
                                _this.apiService.put("KhamBenh/KiemTraDichVuKhamDoanChuaThucHien", kiemTraVo).subscribe(function (resultData) {
                                    // BVHD-3668: xử lý kiểm tra nhóm DV Khám chưa thực hiện đã cập nhật ở API chung với nhóm DVKT
                                    // let arrayTenDichVuKhamKhongThucHien = [];
                                    // this.benhNhanHienTai.YeuCauKhamBenh.TemplateDichVuKhamSucKhoes.forEach(element => {
                                    //   if (!element.IsCheckedDichVu) {
                                    //     arrayTenDichVuKhamKhongThucHien.push(element.TenChuyenKhoa);
                                    //   }
                                    // });
                                    // resultData.DichVuKhamBenhs = arrayTenDichVuKhamKhongThucHien;
                                    if (resultData && (resultData.DichVuKhamBenhs.length > 0 || resultData.DichVuKyThuats.length > 0)) {
                                        _this.dialog.open(_kham_doan_tat_ca_phong_dv_chua_thuc_hien_popup_kham_doan_tat_ca_phong_dv_chua_thuc_hien_popup_component__WEBPACK_IMPORTED_MODULE_26__["KhamDoanTatCaPhongDvChuaThucHienPopupComponent"], {
                                            disableClose: false,
                                            width: '750px',
                                            data: resultData,
                                        }).afterClosed().subscribe(function (result) {
                                            if (result === 'Yes') {
                                                _this.hoanThanhKham();
                                            }
                                        });
                                    }
                                    else {
                                        _this.hoanThanhKham();
                                    }
                                }, function (err) {
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanTatCaPhongDetailComponent.prototype.ketQuaMau = function () {
                    var _this = this;
                    this.dialog.open(_kham_doan_kham_doan_ket_luan_cls_ksk_ket_qua_mau_popup_ket_qua_mau_popup_component__WEBPACK_IMPORTED_MODULE_21__["KetQuaMauPopupComponent"], {
                        width: "400px",
                        data: { Model: null }
                    })
                        .afterClosed()
                        .subscribe(function (result) {
                        if (result.Model != undefined) {
                            result.Model.Data.forEach(function (element) {
                                if (element.isCheck == true) {
                                    _this.benhNhanHienTai.YeuCauTiepNhan.KSKKetQuaCanLamSang += element.NoiDung + ',';
                                }
                            });
                        }
                    });
                };
                KhamDoanTatCaPhongDetailComponent.prototype.xuLyIn = function (phieuIn) {
                    if (this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh) {
                        this.saveChangeData(null, null, phieuIn);
                    }
                    else {
                        if (phieuIn == 1) {
                            this.inSoKSK();
                        }
                        else if (phieuIn == 2) {
                            this.inKetQuaKSK();
                        }
                    }
                };
                KhamDoanTatCaPhongDetailComponent.prototype.inSoKSK = function () {
                    this.dialog.open(_kham_doan_kham_doan_tiep_nhan_so_kham_suc_khoe_dinh_ky_popup_so_kham_suc_khoe_dinh_ky_popup_component__WEBPACK_IMPORTED_MODULE_22__["SoKhamSucKhoeDinhKyPopupComponent"], {
                        disableClose: false,
                        width: '1000px',
                        data: this.benhNhanHienTai.YeuCauTiepNhan.HopDongKhamSucKhoeNhanVienId
                    });
                };
                KhamDoanTatCaPhongDetailComponent.prototype.inKetQuaKSK = function () {
                    var _this = this;
                    this.apiService.post("KhamDoan/GetDataKetQuaKSKDoanEdit?hopDongKhamSucKhoeId=" + this.benhNhanHienTai.YeuCauTiepNhan.HopDongKhamSucKhoeNhanVienId).subscribe(function (resData) {
                        if (resData != undefined && resData != null) {
                            var dialogRef = _this.dialog.open(_kham_doan_kham_doan_ket_luan_popup_ket_qua_ksk_edit_popup_ket_qua_ksk_edit_component__WEBPACK_IMPORTED_MODULE_23__["PopupKetQuaKskEditComponent"], {
                                disableClose: false,
                                width: '1500px',
                                height: 'auto',
                                data: {
                                    Model: resData,
                                    hopDongKhamSucKhoeId: _this.benhNhanHienTai.YeuCauTiepNhan.HopDongKhamSucKhoeNhanVienId,
                                    YeuCauTiepNhanId: _this.benhNhanHienTai.YeuCauTiepNhanId
                                }
                            });
                            dialogRef.afterClosed().subscribe(function (result) {
                            });
                        }
                    }, function (err) {
                        _this.benhNhanHienTai.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                KhamDoanTatCaPhongDetailComponent.prototype.xuLySaveDataChoKetQuaMauChuyenKhoaKSK = function (event) {
                    console.log('xuLySaveDataChoKetQuaMauChuyenKhoaKSK', event);
                    this.isUpdateTimeSaveChuyenKhoaKSK = true;
                    this.saveChangeData();
                };
                KhamDoanTatCaPhongDetailComponent.prototype.keyEvent = function (event) {
                    var self = this;
                    if (self.benhNhanHienTai.Id != 0) {
                        // kiểm tra lưu // ctr + s
                        if (event.ctrlKey && event.keyCode == 83) {
                            if (self.lstStatusSelectTabKhambenh.selectedTabKhamBenh) {
                                if (this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh && !this.isReadOnly) {
                                    event.preventDefault();
                                    if (this.dialog.openDialogs.length > 0) {
                                        return;
                                    }
                                    this.saveChangeData();
                                }
                                else if (!this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh) {
                                    event.preventDefault();
                                }
                                else {
                                    event.preventDefault();
                                }
                            }
                        }
                        // esc
                        if (self.lstStatusSelectTabKhambenh.selectedTabKhamBenh) {
                            // kiểm tra hủy
                            if (event.keyCode == 27 &&
                                this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh
                                && !this.isReadOnly) {
                                event.preventDefault();
                                this.cancelChangeData();
                            }
                            else if (event.keyCode == 27 &&
                                !this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh) {
                                event.preventDefault();
                            }
                        }
                        // ctrl + f1
                        var kendoTab_1 = "card";
                        if (event.ctrlKey && event.keyCode == 112) {
                            event.preventDefault();
                            setTimeout(function () {
                                self.unSelectedTab();
                                self.lstStatusSelectTabKhambenh.selectedTabKhamBenh = true;
                                self.scrollTo(kendoTab_1);
                            }, 100);
                        }
                        // ctrl + f2
                        if (event.ctrlKey && event.keyCode == 113) {
                            event.preventDefault();
                            setTimeout(function () {
                                self.unSelectedTab();
                                self.lstStatusSelectTabKhambenh.selectedTabLichSuKham = true;
                                self.scrollTo(kendoTab_1);
                            }, 100);
                        }
                        // ctrl + f3
                        if (event.ctrlKey && event.keyCode == 114) {
                            event.preventDefault();
                            setTimeout(function () {
                                self.unSelectedTab();
                                self.lstStatusSelectTabKhambenh.selectedTabChiDinh = true;
                                self.scrollTo(kendoTab_1);
                            }, 100);
                        }
                        // ctrl + f5
                        if (event.ctrlKey && event.keyCode == 116) {
                            event.preventDefault();
                            setTimeout(function () {
                                self.unSelectedTab();
                                self.lstStatusSelectTabKhambenh.selectedTabKetQuaCLS = true;
                                self.scrollTo(kendoTab_1);
                            }, 100);
                        }
                        // ctrl + f6
                        if (event.ctrlKey && event.keyCode == 117) {
                            event.preventDefault();
                            setTimeout(function () {
                                self.unSelectedTab();
                                self.lstStatusSelectTabKhambenh.selectedTabTuVanThuocKhamDoan = true;
                                self.scrollTo(kendoTab_1);
                            }, 100);
                        }
                        // ctrl + p
                        if (event.ctrlKey && event.keyCode == 80) {
                            event.preventDefault();
                        }
                        // ctrl + H
                        if (event.ctrlKey && event.keyCode == 72) {
                            if (self.lstStatusSelectTabKhambenh.selectedTabKhamBenh && !this.isReadOnly) {
                                event.preventDefault();
                                if (this.dialog.openDialogs.length > 0) {
                                    return;
                                }
                                //self.saveChangeData(null, true);
                                self.kiemTraDichVuChuaThucHienKhiHoanThanhKham();
                            }
                            else {
                                event.preventDefault();
                            }
                        }
                    }
                    else {
                        if (event.ctrlKey &&
                            (event.keyCode == 83 ||
                                event.keyCode == 27 ||
                                event.keyCode == 112 ||
                                event.keyCode == 113 ||
                                event.keyCode == 114 ||
                                event.keyCode == 115 ||
                                event.keyCode == 116 ||
                                event.keyCode == 117 ||
                                event.keyCode == 39 ||
                                event.keyCode == 80 ||
                                event.keyCode == 72)) {
                            event.preventDefault();
                        }
                    }
                };
                KhamDoanTatCaPhongDetailComponent.prototype.chuyenLoaiKham = function () {
                    // cần xử lý lưu data trước khi chuyển
                    this.isLoadingKhamDoan = true;
                    var url = "/kham-benh";
                    this.router.navigate([url], { queryParams: { IsKhamDoanTatCa: true } });
                };
                return KhamDoanTatCaPhongDetailComponent;
            }());
            KhamDoanTatCaPhongDetailComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_20__["Location"] },
                { type: src_app_core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_24__["BroadcastService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("maTNTemplate", { static: true })
            ], KhamDoanTatCaPhongDetailComponent.prototype, "maTNTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("hoTenTemplate", { static: true })
            ], KhamDoanTatCaPhongDetailComponent.prototype, "hoTenTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("tienTrinhTemplate", { static: true })
            ], KhamDoanTatCaPhongDetailComponent.prototype, "tienTrinhTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridTatCa', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_18__["GridComponent"], static: true })
            ], KhamDoanTatCaPhongDetailComponent.prototype, "gridTatCa", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
            ], KhamDoanTatCaPhongDetailComponent.prototype, "keyEvent", null);
            KhamDoanTatCaPhongDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-kham-doan-tat-ca-phong-detail',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-tat-ca-phong-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/kham-doan-tat-ca-phong/kham-doan-tat-ca-phong-detail/kham-doan-tat-ca-phong-detail.component.html")).default,
                    animations: [src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_16__["stagger60ms"], src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_17__["fadeInUp400ms"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-tat-ca-phong-detail.component.scss */ "./src/app/modules/main/kham-benh/kham-doan-tat-ca-phong/kham-doan-tat-ca-phong-detail/kham-doan-tat-ca-phong-detail.component.scss")).default]
                })
            ], KhamDoanTatCaPhongDetailComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-benh/kham-doan-tat-ca-phong/kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup/kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup.component.scss": 
        /*!****************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-benh/kham-doan-tat-ca-phong/kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup/kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup.component.scss ***!
          \****************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWJlbmgva2hhbS1kb2FuLXRhdC1jYS1waG9uZy9raGFtLWRvYW4tdGF0LWNhLXBob25nLWR2LWNodWEtdGh1Yy1oaWVuLXBvcHVwL2toYW0tZG9hbi10YXQtY2EtcGhvbmctZHYtY2h1YS10aHVjLWhpZW4tcG9wdXAuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-benh/kham-doan-tat-ca-phong/kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup/kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup.component.ts": 
        /*!**************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-benh/kham-doan-tat-ca-phong/kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup/kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup.component.ts ***!
          \**************************************************************************************************************************************************************************/
        /*! exports provided: KhamDoanTatCaPhongDvChuaThucHienPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanTatCaPhongDvChuaThucHienPopupComponent", function () { return KhamDoanTatCaPhongDvChuaThucHienPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            var KhamDoanTatCaPhongDvChuaThucHienPopupComponent = /** @class */ (function () {
                function KhamDoanTatCaPhongDvChuaThucHienPopupComponent(data, dialogRef) {
                    this.data = data;
                    this.dialogRef = dialogRef;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.soDichVuChuaKham = null;
                }
                KhamDoanTatCaPhongDvChuaThucHienPopupComponent.prototype.ngOnInit = function () {
                    this.soDichVuChuaKham = this.data.DichVuKhamBenhs.length + this.data.DichVuKyThuats.length;
                };
                KhamDoanTatCaPhongDvChuaThucHienPopupComponent.prototype.close = function (result) {
                    this.dialogRef.close(result);
                };
                return KhamDoanTatCaPhongDvChuaThucHienPopupComponent;
            }());
            KhamDoanTatCaPhongDvChuaThucHienPopupComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
            ]; };
            KhamDoanTatCaPhongDvChuaThucHienPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/kham-doan-tat-ca-phong/kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup/kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup.component.scss */ "./src/app/modules/main/kham-benh/kham-doan-tat-ca-phong/kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup/kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], KhamDoanTatCaPhongDvChuaThucHienPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-benh/kham-doan-tat-ca-phong/kham-doan-tat-ca-phong-routing.module.ts": 
        /*!********************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-benh/kham-doan-tat-ca-phong/kham-doan-tat-ca-phong-routing.module.ts ***!
          \********************************************************************************************************/
        /*! exports provided: KhamDoanTatCaPhongRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanTatCaPhongRoutingModule", function () { return KhamDoanTatCaPhongRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _kham_doan_tat_ca_phong_detail_kham_doan_tat_ca_phong_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kham-doan-tat-ca-phong-detail/kham-doan-tat-ca-phong-detail.component */ "./src/app/modules/main/kham-benh/kham-doan-tat-ca-phong/kham-doan-tat-ca-phong-detail/kham-doan-tat-ca-phong-detail.component.ts");
            var routes = [
                {
                    path: '',
                    component: _kham_doan_tat_ca_phong_detail_kham_doan_tat_ca_phong_detail_component__WEBPACK_IMPORTED_MODULE_5__["KhamDoanTatCaPhongDetailComponent"],
                    data: {
                        title: "Khám bệnh",
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].KhamDoanKhamBenhTatCaPhong,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
                    }
                },
            ];
            var KhamDoanTatCaPhongRoutingModule = /** @class */ (function () {
                function KhamDoanTatCaPhongRoutingModule() {
                }
                return KhamDoanTatCaPhongRoutingModule;
            }());
            KhamDoanTatCaPhongRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], KhamDoanTatCaPhongRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-benh/kham-doan-tat-ca-phong/kham-doan-tat-ca-phong.model.ts": 
        /*!***********************************************************************************************!*\
          !*** ./src/app/modules/main/kham-benh/kham-doan-tat-ca-phong/kham-doan-tat-ca-phong.model.ts ***!
          \***********************************************************************************************/
        /*! exports provided: KhamDoanTatCaPhongTimKiemNangCao */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanTatCaPhongTimKiemNangCao", function () { return KhamDoanTatCaPhongTimKiemNangCao; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var KhamDoanTatCaPhongTimKiemNangCao = /** @class */ (function () {
                function KhamDoanTatCaPhongTimKiemNangCao(CongTyId, HopDongId, SearchString, HopDongKhamNhanVienId) {
                    if (CongTyId === void 0) { CongTyId = null; }
                    if (HopDongId === void 0) { HopDongId = null; }
                    if (SearchString === void 0) { SearchString = null; }
                    if (HopDongKhamNhanVienId === void 0) { HopDongKhamNhanVienId = null; }
                    this.CongTyId = CongTyId;
                    this.HopDongId = HopDongId;
                    this.SearchString = SearchString;
                    this.HopDongKhamNhanVienId = HopDongKhamNhanVienId;
                }
                return KhamDoanTatCaPhongTimKiemNangCao;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-benh/kham-doan-tat-ca-phong/kham-doan-tat-ca-phong.module.ts": 
        /*!************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-benh/kham-doan-tat-ca-phong/kham-doan-tat-ca-phong.module.ts ***!
          \************************************************************************************************/
        /*! exports provided: KhamDoanTatCaPhongModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanTatCaPhongModule", function () { return KhamDoanTatCaPhongModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _kham_doan_tat_ca_phong_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kham-doan-tat-ca-phong-routing.module */ "./src/app/modules/main/kham-benh/kham-doan-tat-ca-phong/kham-doan-tat-ca-phong-routing.module.ts");
            /* harmony import */ var _kham_doan_tat_ca_phong_detail_kham_doan_tat_ca_phong_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kham-doan-tat-ca-phong-detail/kham-doan-tat-ca-phong-detail.component */ "./src/app/modules/main/kham-benh/kham-doan-tat-ca-phong/kham-doan-tat-ca-phong-detail/kham-doan-tat-ca-phong-detail.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-intl */ "./node_modules/@progress/kendo-angular-intl/dist/fesm2015/index.js");
            /* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");
            /* harmony import */ var ngx_image_drawing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-image-drawing */ "./node_modules/ngx-image-drawing/fesm2015/ngx-image-drawing.js");
            /* harmony import */ var _kham_benh_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../kham-benh.module */ "./src/app/modules/main/kham-benh/kham-benh.module.ts");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            /* harmony import */ var _kham_doan_kham_doan_ket_luan_cls_ksk_kham_doan_ket_luan_cls_ksk_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk.module */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk.module.ts");
            /* harmony import */ var _kham_doan_tat_ca_phong_dv_chua_thuc_hien_popup_kham_doan_tat_ca_phong_dv_chua_thuc_hien_popup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup/kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup.component */ "./src/app/modules/main/kham-benh/kham-doan-tat-ca-phong/kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup/kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup.component.ts");
            var KhamDoanTatCaPhongModule = /** @class */ (function () {
                function KhamDoanTatCaPhongModule() {
                }
                return KhamDoanTatCaPhongModule;
            }());
            KhamDoanTatCaPhongModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_kham_doan_tat_ca_phong_detail_kham_doan_tat_ca_phong_detail_component__WEBPACK_IMPORTED_MODULE_4__["KhamDoanTatCaPhongDetailComponent"], _kham_doan_tat_ca_phong_dv_chua_thuc_hien_popup_kham_doan_tat_ca_phong_dv_chua_thuc_hien_popup_component__WEBPACK_IMPORTED_MODULE_20__["KhamDoanTatCaPhongDvChuaThucHienPopupComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _kham_doan_tat_ca_phong_routing_module__WEBPACK_IMPORTED_MODULE_3__["KhamDoanTatCaPhongRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_18__["LayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__["GridModule"],
                        _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_13__["IntlModule"],
                        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_14__["PdfViewerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                        ngx_image_drawing__WEBPACK_IMPORTED_MODULE_15__["ImageDrawingModule"],
                        _kham_benh_module__WEBPACK_IMPORTED_MODULE_16__["KhamBenhModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                        // KhamDoanKetLuanModule,
                        _kham_doan_kham_doan_ket_luan_cls_ksk_kham_doan_ket_luan_cls_ksk_module__WEBPACK_IMPORTED_MODULE_19__["KhamDoanKetLuanClsKskModule"]
                    ],
                    entryComponents: [
                        _kham_doan_tat_ca_phong_dv_chua_thuc_hien_popup_kham_doan_tat_ca_phong_dv_chua_thuc_hien_popup_component__WEBPACK_IMPORTED_MODULE_20__["KhamDoanTatCaPhongDvChuaThucHienPopupComponent"]
                    ]
                })
            ], KhamDoanTatCaPhongModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=kham-benh-kham-doan-tat-ca-phong-kham-doan-tat-ca-phong-module-es2015.js.map
//# sourceMappingURL=kham-benh-kham-doan-tat-ca-phong-kham-doan-tat-ca-phong-module-es5.js.map
//# sourceMappingURL=kham-benh-kham-doan-tat-ca-phong-kham-doan-tat-ca-phong-module-es5.js.map