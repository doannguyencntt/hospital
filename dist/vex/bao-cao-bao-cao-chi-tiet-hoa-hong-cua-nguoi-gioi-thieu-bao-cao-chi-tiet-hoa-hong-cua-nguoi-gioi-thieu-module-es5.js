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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list.component.html": 
        /*!**************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list.component.html ***!
          \**************************************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Thống Kê', Path:''},\n                    {Title:'Báo Cáo', Path:''},\n                    {Title:'Kế Toán', Path:''},\n                    {Title:'Chi Tiết Hoa Hồng Của Người Giới Thiệu', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n                <!-- <app-combobox id=\"KhoId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" class=\"mt-1 on-header\" label=\"Người giới thiệu\" [reloadForGrid]=\"true\"\n                    url=\"BaoCao/GetNoiGioiThieuDaCoNguoiBenh\" [(model)]=\"baoCaoSearch.NoiGioiThieuId\"  [autoSelectFirstItem]=\"true\"\n                    [templateHeader]=\"noiGioiThieuTemplateHeader\" [template]=\"noiGioiThieuTemplate\" popupSettings=\"null\">\n                    <ng-template #noiGioiThieuTemplateHeader let-dataItem>\n                        <table width=\"100%\" class=\"table-combobox\">\n                            <tr>\n                                <th width=\"60%\">Tên</th>\n                                <th>Đơn vị</th>\n                            </tr>\n                        </table>\n                    </ng-template>\n                    <ng-template #noiGioiThieuTemplate let-dataItem>\n                        <table width=\"100%\" class=\"table-combobox\">\n                            <tr>\n                                <td width=\"60%\">{{dataItem.Ten}}</td>\n                                <td>{{dataItem.Ma}}</td>\n                            </tr>\n                        </table>\n                    </ng-template>\n                </app-combobox> -->\n\n                <app-combobox id=\"hinhThucDen\" fxFlex=\"15%\" fxFlex.sm=\"15%\" class=\"mt-1 on-header\" label=\"Hình thức đến\" [reloadForGrid]=\"true\"\n                    url=\"BaoCao/GetHinhThucDenCoTatCa\" [(model)]=\"baoCaoSearch.HinhThucDenId\"  [autoSelectFirstItem]=\"true\"\n                    popupSettings=\"null\" hierarchyKeyToSend=\"HinhThucDenId\" (modelChange)=\"changeHinhThucDen($event)\">\n                </app-combobox>\n\n                <app-combobox id=\"KhoId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" class=\"mt-1 on-header\" label=\"Người giới thiệu\" [reloadForGrid]=\"true\"\n                    url=\"BaoCao/GetNoiGioiThieuDaCoNguoiBenhCoTatCa\" [(model)]=\"baoCaoSearch.NoiGioiThieuId\" [autoSelectFirstItem]=\"true\" \n                    [disabled]=\"baoCaoSearch.HinhThucDenId == undefined || baoCaoSearch.HinhThucDenId == 0\"\n                    [templateHeader]=\"noiGioiThieuTemplateHeader\" [template]=\"noiGioiThieuTemplate\" popupSettings=\"null\" hierarchyKeyToListen=\"HinhThucDenId\"\n                    (modelChange)=\"changeNguoiGioiThieu($event)\">\n                    <ng-template #noiGioiThieuTemplateHeader let-dataItem>\n                        <table width=\"100%\" class=\"table-combobox\">\n                            <tr>\n                                <th width=\"60%\">Tên</th>\n                                <th>Đơn vị</th>\n                            </tr>\n                        </table>\n                    </ng-template>\n                    <ng-template #noiGioiThieuTemplate let-dataItem>\n                        <table width=\"100%\" class=\"table-combobox\">\n                            <tr>\n                                <td width=\"60%\">{{dataItem.Ten}}</td>\n                                <td>{{dataItem.Ma}}</td>\n                            </tr>\n                        </table>\n                    </ng-template>\n                </app-combobox>\n\n                <app-combobox #cboTiepNhan id=\"yeuCauTiepNhan\" fxFlex=\"15%\" fxFlex.sm=\"15%\" class=\"mt-1 on-header\" label=\"Người bệnh\"\n                    url=\"BaoCao/GetMaYeuCauTiepNhanTheoHinhThucDenCoTatCa\" [(model)]=\"baoCaoSearch.MaYeuCauTiepNhan\"\n                    [queryInfo]=\"{ParameterDependencies:'{HinhThucDenId:' + (baoCaoSearch.HinhThucDenId == undefined ? null : baoCaoSearch.HinhThucDenId) +', NoiGioiThieuId:' + (baoCaoSearch.NoiGioiThieuId == undefined ? null : baoCaoSearch.NoiGioiThieuId) +' }', Take: 50}\"\n                    popupSettings=\"null\" [templateHeader]=\"tiepNhanTemplateHeader\" [template]=\"tiepNhanemplate\" [bind]=\"true\">\n                    <ng-template #tiepNhanTemplateHeader let-dataItem>\n                        <table width=\"100%\" class=\"table-combobox\">\n                            <tr>\n                                <th width=\"40%\">Mã TN</th>\n                                <th>Họ tên</th>\n                            </tr>\n                        </table>\n                    </ng-template>\n                    <ng-template #tiepNhanemplate let-dataItem>\n                        <table width=\"100%\" class=\"table-combobox\">\n                            <tr>\n                                <td width=\"40%\">{{dataItem.MaYeuCauTiepNhan}}</td>\n                                <td>{{dataItem.TenNguoiBenh}}</td>\n                            </tr>\n                        </table>\n                    </ng-template>\n                </app-combobox>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" #tiepnhantu id=\"TuNgayFormat\"\n                    [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" #tiepnhanden id=\"DenNgayFormat\"\n                    [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header\" label=\"Đến ngày\">\n                </app-datetimepicker>\n\n                <div fxFlex=\"auto\" fxFlex.sm=\"auto\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"exportExcel()\">Xuất Excel</button>\n                    <!-- <button [disabled]=\"!IsData\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                        class=\"mr-1 mt-2\" (click)=\"InBaoCao()\" style=\"float: right;\">In Báo cáo</button> -->\n                </div>\n\n                <div fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"pb-0\">\n                    <app-grid [gridColumns]=\"gridColumns\" [useAddDeault]=\"false\"\n                        [checkboxAble]=\"false\" [autoHeight]=\"true\" [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\"\n                        [useActionDefault]=\"false\" [documentType]=\"documentType\" [pageable]=\"true\"\n                        urlGetData=\"BaoCao/GetDataBaoCaoChiTietHoaHongCuaNguoiGioiThieuForGridAsync\" urlGetTotalPage=\"BaoCao/GetDataTotalPageBaoCaoChiTietHoaHongCuaNguoiGioiThieuForGridAsync\">\n                    </app-grid>\n                    <ng-template #tongTienTitleTemplate let-dataItem>\n                        <strong>\n                            Tổng cộng:\n                        </strong>\n                    </ng-template>\n\n                    <ng-template #soTongTienFooterTemplate let-dataItem>\n                        <strong>\n                            {{tongSoTienDV | number:'0.2-2':'vi-VN'}}\n                        </strong>\n                    </ng-template>\n\n                    <ng-template #tienDVTemplate let-dataItem>\n                        {{dataItem.SoTienDV | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #tinhTrangThanhToanTemplate let-dataItem>\n                        <app-checkbox id=\"tinhTranhThanhToan{{dataItem.YeucauTiepNhanId}}\" label=\"\" [(model)]=\"dataItem.TinhTrangThanhToan\" [disabled]=\"true\">\n                        </app-checkbox>\n                    </ng-template>\n                </div>\n            </div>\n\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list.component.scss": 
        /*!************************************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list.component.scss ***!
          \************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tY2hpLXRpZXQtaG9hLWhvbmctY3VhLW5ndW9pLWdpb2ktdGhpZXUvYmFvLWNhby1jaGktdGlldC1ob2EtaG9uZy1jdWEtbmd1b2ktZ2lvaS10aGlldS1saXN0L2Jhby1jYW8tY2hpLXRpZXQtaG9hLWhvbmctY3VhLW5ndW9pLWdpb2ktdGhpZXUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list.component.ts": 
        /*!**********************************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list.component.ts ***!
          \**********************************************************************************************************************************************************************************************************/
        /*! exports provided: BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent", function () { return BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _bao_cao_chi_tiet_hoa_hong_cua_nguoi_gioi_thieu_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu.model */ "./src/app/modules/main/bao-cao/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu.model.ts");
            /* harmony import */ var src_app_shared_component_dropdowns_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dropdowns/combobox/combobox.component */ "./src/app/shared/component/dropdowns/combobox/combobox.component.ts");
            var BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent = /** @class */ (function () {
                function BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent(apiService, dialog, authService, notificationService) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.baoCaoSearch = new _bao_cao_chi_tiet_hoa_hong_cua_nguoi_gioi_thieu_model__WEBPACK_IMPORTED_MODULE_12__["BaoCaoChiTietHoaHongCuaNguoiGioiThieuSearch"]();
                    this.inBaoCaoXuatNhapTon = new _bao_cao_chi_tiet_hoa_hong_cua_nguoi_gioi_thieu_model__WEBPACK_IMPORTED_MODULE_12__["InBaoCaoChiTietHoaHongCuaNguoiGioiThieu"]();
                    // public pageSize = 50;
                    // public skip = 0;
                    // take: number;
                    this.additionalSearchString = "";
                    this.minDateDenNgay = null;
                    this.minDateTuNgay = null;
                    this.dataSource = {
                        data: [],
                        total: 0
                    };
                    this.tongSoTienDV = 0;
                    this.ishowView = false;
                    this.IsData = false;
                    this.dataHoaHongNguoiGioiThieu = [];
                }
                BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].BaoCaoChiTietHoaHongCuaNguoiGT;
                    this.gridColumns = [
                        { Field: "STT", Title: "STT", Width: 50 },
                        { Field: "HinhThucDenDisplay", Title: "Hình thức đến", Width: 120, },
                        { Field: "NgayKhamDisplay", Title: "Ngày khám", Width: 100, TemplateFooter: this.tongTienTitleTemplate },
                        { Field: "MaNguoiBenh", Title: "Mã NB", Width: 100, },
                        { Field: "MaTN", Title: "Mã TN", Width: 100, },
                        { Field: "SoBienLaiThuTien", Title: "Số biên lai thu tiền", Width: 100, },
                        { Field: "TenBN", Title: "Tên BN", Width: 150, },
                        { Field: "NamSinh", Title: "Năm sinh", Width: 70, },
                        { Field: "DiaChi", Title: "Địa chỉ", Width: 180, },
                        { Field: "BSKham", Title: "BS khám", Width: 120, },
                        { Field: "TenDV", Title: "Tên DV", Width: 220, },
                        { Field: "NhomDV", Title: "Nhóm DV", Width: 100, },
                        { Field: "SoTienDV", Title: "Số tiền DV", Width: 100, Template: this.tienDVTemplate, TemplateFooter: this.soTongTienFooterTemplate },
                        { Field: "HoaHong", Title: "(%) Hoa hồng", Width: 100, },
                        { Field: "ThanhTienHoaHong", Title: "Thành tiền hoa hồng", Width: 100, },
                        { Field: "TinhTrangThanhToan", Title: "Tình trạng thanh toán", Width: 100, Template: this.tinhTrangThanhToanTemplate },
                    ];
                    // this.minDateTuNgay = new Date();
                    // this.minDateTuNgay.setHours(0, 0, 0, 0);
                    // this.minDateTuNgay.setMonth((new Date()).getMonth() - 1);
                    // if (this.baoCaoSearch.TuNgayFormat == null) {
                    //   this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
                    // }
                    // if (this.baoCaoSearch.DenNgayFormat == null) {
                    //   this.baoCaoSearch.DenNgayFormat = new Date();
                    // }
                    this.ganThoiGianTimKiemMacDinh();
                };
                BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent.prototype.exportExcel = function () {
                    var _this = this;
                    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        return;
                    }
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Process)) {
                        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang xuất excel...' }
                        });
                        var tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
                        var denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
                        // this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
                        // this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
                        // this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay + ";" + this.inBaoCaoXuatNhapTon.HostingName;
                        this.baoCaoSearch.FromDate = tuNgay;
                        this.baoCaoSearch.ToDate = denNgay;
                        this.gridChild._gridQueryInfo.additionalSearchString = JSON.stringify(this.baoCaoSearch);
                        this.apiService.postExportExcel("BaoCao/ExportBaoCaoChiTietHoaHongCuaNguoiGioiThieu", this.gridChild._gridQueryInfo)
                            .subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoChiTietHoaHongCuaNguoiGioiThieu" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent.prototype.XemBaoCao = function () {
                    this.gridChild._isLoading = true;
                    this.gridChild._isLoadingTotalPage = true;
                    // if (this.baoCaoSearch.NoiGioiThieuId == undefined || this.baoCaoSearch.NoiGioiThieuId == null) {
                    //   this.notificationService.showError("Nơi giới thiệu yêu cầu nhập");
                    //   this.gridChild._isLoading = false;
                    //   this.gridChild._isLoadingTotalPage = false;
                    //   return;
                    // }
                    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        this.gridChild._isLoading = false;
                        this.gridChild._isLoadingTotalPage = false;
                        return;
                    }
                    if (this.baoCaoSearch.TuNgayFormat == null) {
                        this.minDateTuNgay = new Date();
                        this.minDateTuNgay.setHours(0, 0, 0, 0);
                        this.baoCaoSearch.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.minDateTuNgay, "mm/dd/yyyy");
                    }
                    if (this.baoCaoSearch.DenNgayFormat == null) {
                        this.minDateTuNgay = new Date();
                        this.baoCaoSearch.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.minDateTuNgay, "mm/dd/yyyy");
                    }
                    var tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
                    var denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
                    // this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
                    // this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
                    // this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay;
                    this.baoCaoSearch.FromDate = tuNgay;
                    this.baoCaoSearch.ToDate = denNgay;
                    this.gridChild._additionalSearchString = JSON.stringify(this.baoCaoSearch);
                    this.gridChild._skip = 0;
                    this.gridChild.search();
                    this.getTongCong(this.gridChild._gridQueryInfo);
                    // this.apiService.post<any>("BaoCao/GetDataBaoCaoChiTietHoaHongCuaNguoiGioiThieuForGridAsync", this.gridChild._gridQueryInfo).subscribe(resultData => {
                    //   if (resultData !== undefined && resultData != null) {
                    //     this.IsData = true;
                    //     this.dataSource = {
                    //       data: resultData.Data,
                    //       total: resultData.TotalRowCount
                    //     };
                    //     this.tongSoTienDV = resultData.Data.reduce((sum: number, item: { SoTienDV: number; }) => sum + item.SoTienDV, 0);
                    //     this.gridChild._isLoading = false;
                    //     this.gridChild._isLoadingTotalPage = false;
                    //   }
                    // });
                };
                // InBaoCao() {
                //   if(this.baoCaoSearch.TuNgayFormat==null || this.baoCaoSearch.DenNgayFormat==null)
                //   {
                //       this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                //       return;
                //   }
                //   let khoId = 0;
                //   if (this.baoCaoSearch.KhoaId != null) {
                //     khoId = this.baoCaoSearch.KhoaId;
                //   }
                //   this.inBaoCaoXuatNhapTon.KhoId = khoId;
                //   this.inBaoCaoXuatNhapTon.FromDate = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
                //   this.inBaoCaoXuatNhapTon.ToDate = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
                //   this.dialog.open(BaoCaoXuatNhapTonPopupComponent, {
                //     disableClose: false,
                //     width: '1200px',
                //     data: this.inBaoCaoXuatNhapTon,
                //   }
                //   ).afterClosed().subscribe(() => {
                //   });
                // }
                BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent.prototype.getTongCong = function (queryInfo) {
                    var _this = this;
                    this.apiService.post("BaoCao/GetTonGcongHoaHongCuaNguoiGioiThieu", queryInfo).subscribe(function (resultData) {
                        _this.tongSoTienDV = resultData.SoTienDV;
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                    });
                };
                BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent.prototype.changeHinhThucDen = function (event) {
                    this.cboTiepNhan.getDataForLookup();
                };
                BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent.prototype.changeNguoiGioiThieu = function (event) {
                    this.cboTiepNhan.getDataForLookup();
                };
                BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent.prototype.ganThoiGianTimKiemMacDinh = function (xoaThoiGianMacDinh) {
                    if (xoaThoiGianMacDinh === void 0) { xoaThoiGianMacDinh = false; }
                    if (xoaThoiGianMacDinh) {
                        this.baoCaoSearch.TuNgayFormat = null;
                        this.baoCaoSearch.DenNgayFormat = null;
                    }
                    else {
                        this.minDateTuNgay = new Date();
                        this.minDateTuNgay.setHours(0, 0, 0, 0);
                        // this.minDateTuNgay.setMonth((new Date()).getMonth() - 1);
                        this.minDateTuNgay.setDate(1);
                        if (this.baoCaoSearch.TuNgayFormat == null) {
                            this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
                        }
                        if (this.baoCaoSearch.DenNgayFormat == null) {
                            this.baoCaoSearch.DenNgayFormat = new Date();
                            //this.baoCaoSearch.DenNgayFormat.setHours(23, 59, 59);
                        }
                    }
                };
                return BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent;
            }());
            BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"], { static: true })
            ], BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('baoCaoGrid', { static: true })
            ], BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent.prototype, "baoCaoGrid", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tienDVTemplate', { static: true })
            ], BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent.prototype, "tienDVTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tongTienTitleTemplate', { static: true })
            ], BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent.prototype, "tongTienTitleTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('soTongTienFooterTemplate', { static: true })
            ], BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent.prototype, "soTongTienFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tinhTrangThanhToanTemplate', { static: true })
            ], BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent.prototype, "tinhTrangThanhToanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(src_app_shared_component_dropdowns_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_13__["ComboboxComponent"], { static: true })
            ], BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent.prototype, "cboTiepNhan", void 0);
            BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list.component.scss")).default]
                })
            ], BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-routing.module.ts": 
        /*!******************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-routing.module.ts ***!
          \******************************************************************************************************************************************************/
        /*! exports provided: BaoCaoChiTietHoaHongCuaNguoiGioiThieuRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoChiTietHoaHongCuaNguoiGioiThieuRoutingModule", function () { return BaoCaoChiTietHoaHongCuaNguoiGioiThieuRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _bao_cao_chi_tiet_hoa_hong_cua_nguoi_gioi_thieu_list_bao_cao_chi_tiet_hoa_hong_cua_nguoi_gioi_thieu_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list.component */ "./src/app/modules/main/bao-cao/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            var routes = [
                {
                    path: '',
                    component: _bao_cao_chi_tiet_hoa_hong_cua_nguoi_gioi_thieu_list_bao_cao_chi_tiet_hoa_hong_cua_nguoi_gioi_thieu_list_component__WEBPACK_IMPORTED_MODULE_4__["BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent"],
                    data: {
                        title: 'Báo cáo chi tiết hoa hồng của người giới thiệu',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].BaoCaoChiTietHoaHongCuaNguoiGT,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
                }
            ];
            var BaoCaoChiTietHoaHongCuaNguoiGioiThieuRoutingModule = /** @class */ (function () {
                function BaoCaoChiTietHoaHongCuaNguoiGioiThieuRoutingModule() {
                }
                return BaoCaoChiTietHoaHongCuaNguoiGioiThieuRoutingModule;
            }());
            BaoCaoChiTietHoaHongCuaNguoiGioiThieuRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
                })
            ], BaoCaoChiTietHoaHongCuaNguoiGioiThieuRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu.model.ts": 
        /*!*********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu.model.ts ***!
          \*********************************************************************************************************************************************/
        /*! exports provided: BaoCaoChiTietHoaHongCuaNguoiGioiThieuSearch, ChiTietHoaHongCuaNguoiGioiThieu, DoanhThuNhaThuocVo, InBaoCaoChiTietHoaHongCuaNguoiGioiThieu */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoChiTietHoaHongCuaNguoiGioiThieuSearch", function () { return BaoCaoChiTietHoaHongCuaNguoiGioiThieuSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiTietHoaHongCuaNguoiGioiThieu", function () { return ChiTietHoaHongCuaNguoiGioiThieu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoanhThuNhaThuocVo", function () { return DoanhThuNhaThuocVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBaoCaoChiTietHoaHongCuaNguoiGioiThieu", function () { return InBaoCaoChiTietHoaHongCuaNguoiGioiThieu; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var BaoCaoChiTietHoaHongCuaNguoiGioiThieuSearch = /** @class */ (function () {
                function BaoCaoChiTietHoaHongCuaNguoiGioiThieuSearch(HinhThucDenId, NoiGioiThieuId, MaYeuCauTiepNhan, FromDate, ToDate, TuNgayFormat, DenNgayFormat, Skip, Take, PageSize, SearchString, AdditionalSearchString, Sort) {
                    if (HinhThucDenId === void 0) { HinhThucDenId = null; }
                    if (NoiGioiThieuId === void 0) { NoiGioiThieuId = null; }
                    if (MaYeuCauTiepNhan === void 0) { MaYeuCauTiepNhan = "0"; }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    if (TuNgayFormat === void 0) { TuNgayFormat = null; }
                    if (DenNgayFormat === void 0) { DenNgayFormat = null; }
                    if (Skip === void 0) { Skip = 0; }
                    if (Take === void 0) { Take = 50; }
                    if (PageSize === void 0) { PageSize = 50; }
                    if (SearchString === void 0) { SearchString = ""; }
                    if (AdditionalSearchString === void 0) { AdditionalSearchString = ""; }
                    if (Sort === void 0) { Sort = []; }
                    this.HinhThucDenId = HinhThucDenId;
                    this.NoiGioiThieuId = NoiGioiThieuId;
                    this.MaYeuCauTiepNhan = MaYeuCauTiepNhan;
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                    this.TuNgayFormat = TuNgayFormat;
                    this.DenNgayFormat = DenNgayFormat;
                    this.Skip = Skip;
                    this.Take = Take;
                    this.PageSize = PageSize;
                    this.SearchString = SearchString;
                    this.AdditionalSearchString = AdditionalSearchString;
                    this.Sort = Sort;
                }
                return BaoCaoChiTietHoaHongCuaNguoiGioiThieuSearch;
            }());
            var ChiTietHoaHongCuaNguoiGioiThieu = /** @class */ (function () {
                function ChiTietHoaHongCuaNguoiGioiThieu(SoTienDV) {
                    if (SoTienDV === void 0) { SoTienDV = null; }
                    this.SoTienDV = SoTienDV;
                }
                return ChiTietHoaHongCuaNguoiGioiThieu;
            }());
            var DoanhThuNhaThuocVo = /** @class */ (function () {
                function DoanhThuNhaThuocVo(Id, ThanhTien, TienMat, Chuyen, Pos, CongNo) {
                    if (Id === void 0) { Id = null; }
                    if (ThanhTien === void 0) { ThanhTien = null; }
                    if (TienMat === void 0) { TienMat = null; }
                    if (Chuyen === void 0) { Chuyen = null; }
                    if (Pos === void 0) { Pos = null; }
                    if (CongNo === void 0) { CongNo = null; }
                    this.Id = Id;
                    this.ThanhTien = ThanhTien;
                    this.TienMat = TienMat;
                    this.Chuyen = Chuyen;
                    this.Pos = Pos;
                    this.CongNo = CongNo;
                }
                return DoanhThuNhaThuocVo;
            }());
            var InBaoCaoChiTietHoaHongCuaNguoiGioiThieu = /** @class */ (function () {
                function InBaoCaoChiTietHoaHongCuaNguoiGioiThieu(KhoId, HostingName, FromDate, ToDate) {
                    if (KhoId === void 0) { KhoId = 0; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    this.KhoId = KhoId;
                    this.HostingName = HostingName;
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                }
                return InBaoCaoChiTietHoaHongCuaNguoiGioiThieu;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu.module.ts": 
        /*!**********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu.module.ts ***!
          \**********************************************************************************************************************************************/
        /*! exports provided: BaoCaoChiTietHoaHongCuaNguoiGioiThieuModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoChiTietHoaHongCuaNguoiGioiThieuModule", function () { return BaoCaoChiTietHoaHongCuaNguoiGioiThieuModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _bao_cao_chi_tiet_hoa_hong_cua_nguoi_gioi_thieu_list_bao_cao_chi_tiet_hoa_hong_cua_nguoi_gioi_thieu_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list.component */ "./src/app/modules/main/bao-cao/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list.component.ts");
            /* harmony import */ var _bao_cao_chi_tiet_hoa_hong_cua_nguoi_gioi_thieu_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-routing.module.ts");
            /* harmony import */ var _bao_cao_chi_tiet_hoa_hong_cua_nguoi_gioi_thieu_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu.service */ "./src/app/modules/main/bao-cao/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu.service.ts");
            var BaoCaoChiTietHoaHongCuaNguoiGioiThieuModule = /** @class */ (function () {
                function BaoCaoChiTietHoaHongCuaNguoiGioiThieuModule() {
                }
                return BaoCaoChiTietHoaHongCuaNguoiGioiThieuModule;
            }());
            BaoCaoChiTietHoaHongCuaNguoiGioiThieuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_bao_cao_chi_tiet_hoa_hong_cua_nguoi_gioi_thieu_list_bao_cao_chi_tiet_hoa_hong_cua_nguoi_gioi_thieu_list_component__WEBPACK_IMPORTED_MODULE_18__["BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _bao_cao_chi_tiet_hoa_hong_cua_nguoi_gioi_thieu_routing_module__WEBPACK_IMPORTED_MODULE_19__["BaoCaoChiTietHoaHongCuaNguoiGioiThieuRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_15__["GridModule"],
                    ],
                    providers: [
                        _bao_cao_chi_tiet_hoa_hong_cua_nguoi_gioi_thieu_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoChiTietHoaHongCuaNguoiGioiThieuService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"], useClass: _bao_cao_chi_tiet_hoa_hong_cua_nguoi_gioi_thieu_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoChiTietHoaHongCuaNguoiGioiThieuService"] },
                    ]
                })
            ], BaoCaoChiTietHoaHongCuaNguoiGioiThieuModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu.service.ts": 
        /*!***********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu.service.ts ***!
          \***********************************************************************************************************************************************/
        /*! exports provided: BaoCaoChiTietHoaHongCuaNguoiGioiThieuService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoChiTietHoaHongCuaNguoiGioiThieuService", function () { return BaoCaoChiTietHoaHongCuaNguoiGioiThieuService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            var BaoCaoChiTietHoaHongCuaNguoiGioiThieuService = /** @class */ (function (_super) {
                __extends(BaoCaoChiTietHoaHongCuaNguoiGioiThieuService, _super);
                function BaoCaoChiTietHoaHongCuaNguoiGioiThieuService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'BaoCao';
                    return _this;
                }
                return BaoCaoChiTietHoaHongCuaNguoiGioiThieuService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));
            BaoCaoChiTietHoaHongCuaNguoiGioiThieuService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
            ]; };
            BaoCaoChiTietHoaHongCuaNguoiGioiThieuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BaoCaoChiTietHoaHongCuaNguoiGioiThieuService);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-module-es2015.js.map
//# sourceMappingURL=bao-cao-bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-module-es5.js.map
//# sourceMappingURL=bao-cao-bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-module-es5.js.map