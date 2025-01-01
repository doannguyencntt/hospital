(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bang-ke-chi-tiet-theo-nguoi-benh-bang-ke-chi-tiet-theo-nguoi-benh-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bang-ke-chi-tiet-theo-nguoi-benh/bang-ke-chi-tiet-theo-nguoi-benh-list/bang-ke-chi-tiet-theo-nguoi-benh-list.component.html":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bang-ke-chi-tiet-theo-nguoi-benh/bang-ke-chi-tiet-theo-nguoi-benh-list/bang-ke-chi-tiet-theo-nguoi-benh-list.component.html ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Thống Kê', Path:''},\n                    {Title:'Báo Cáo', Path:''},\n                    {Title:'Kinh Doanh', Path:''},\n                    {Title:'Bảng Kê Chi Tiết Theo Người Bệnh', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n                <!-- <app-combobox id=\"NguoiGioiThieuId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" class=\"mt-1 on-header\" label=\"Người giới thiệu\" [reloadForGrid]=\"true\"\n                    url=\"BaoCao/GetNoiGioiThieuDaCoNguoiBenhCoTatCa\" [(model)]=\"baoCaoSearch.NoiGioiThieuId\"  [autoSelectFirstItem]=\"true\"\n                    [templateHeader]=\"noiGioiThieuTemplateHeader\" [template]=\"noiGioiThieuTemplate\" popupSettings=\"null\"\n                    hierarchyKeyToSend=\"NoiGioiThieuId\">\n                    <ng-template #noiGioiThieuTemplateHeader let-dataItem>\n                        <table width=\"100%\" class=\"table-combobox\">\n                            <tr>\n                                <th width=\"60%\">Tên</th>\n                                <th>Đơn vị</th>\n                            </tr>\n                        </table>\n                    </ng-template>\n                    <ng-template #noiGioiThieuTemplate let-dataItem>\n                        <table width=\"100%\" class=\"table-combobox\">\n                            <tr>\n                                <td width=\"60%\">{{dataItem.Ten}}</td>\n                                <td>{{dataItem.Ma}}</td>\n                            </tr>\n                        </table>\n                    </ng-template>\n                </app-combobox>\n\n                <app-combobox id=\"nguoiBenhId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" class=\"mt-1 on-header\" label=\"Người bệnh\" [reloadForGrid]=\"true\"\n                    url=\"BaoCao/GetNguoiBenhTheoNoiGioiThieu\" [(model)]=\"baoCaoSearch.NguoiBenhId\" \n                    [templateHeader]=\"noiGioiThieuTemplateHeader\" [template]=\"noiGioiThieuTemplate\" popupSettings=\"null\"\n                    hierarchyKeyToListen=\"NoiGioiThieuId\">\n                    <ng-template #noiGioiThieuTemplateHeader let-dataItem>\n                        <table width=\"100%\" class=\"table-combobox\">\n                            <tr>\n                                <th width=\"40%\">Mã</th>\n                                <th>Họ tên</th>\n                            </tr>\n                        </table>\n                    </ng-template>\n                    <ng-template #noiGioiThieuTemplate let-dataItem>\n                        <table width=\"100%\" class=\"table-combobox\">\n                            <tr>\n                                <td width=\"40%\">{{dataItem.Ma}}</td>\n                                <td>{{dataItem.Ten}}</td>\n                            </tr>\n                        </table>\n                    </ng-template>\n                </app-combobox> -->\n\n                <!-- <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" #tiepnhantu id=\"TuNgayFormat\"\n                    [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" #tiepnhanden id=\"DenNgayFormat\"\n                    [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header\" label=\"Đến ngày\">\n                </app-datetimepicker> -->\n\n                <app-combobox id=\"hinhThucDen\" fxFlex=\"15%\" fxFlex.sm=\"15%\" class=\"mt-1 on-header\" label=\"Hình thức đến\" [reloadForGrid]=\"true\"\n                    url=\"BaoCao/GetHinhThucDenCoTatCa\" [(model)]=\"baoCaoSearch.HinhThucDenId\"  [autoSelectFirstItem]=\"true\"\n                    popupSettings=\"null\" hierarchyKeyToSend=\"HinhThucDenId\" (modelChange)=\"changeHinhThucDen($event)\">\n                </app-combobox>\n\n                <app-combobox id=\"KhoId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" class=\"mt-1 on-header\" label=\"Người giới thiệu\" [reloadForGrid]=\"true\"\n                    url=\"BaoCao/GetNoiGioiThieuDaCoNguoiBenhCoTatCa\" [(model)]=\"baoCaoSearch.NoiGioiThieuId\" [autoSelectFirstItem]=\"true\" \n                    [disabled]=\"baoCaoSearch.HinhThucDenId == undefined || baoCaoSearch.HinhThucDenId == 0\"\n                    [templateHeader]=\"noiGioiThieuTemplateHeader\" [template]=\"noiGioiThieuTemplate\" popupSettings=\"null\" hierarchyKeyToListen=\"HinhThucDenId\"\n                    (modelChange)=\"changeNguoiGioiThieu($event)\">\n                    <ng-template #noiGioiThieuTemplateHeader let-dataItem>\n                        <table width=\"100%\" class=\"table-combobox\">\n                            <tr>\n                                <th width=\"60%\">Tên</th>\n                                <th>Đơn vị</th>\n                            </tr>\n                        </table>\n                    </ng-template>\n                    <ng-template #noiGioiThieuTemplate let-dataItem>\n                        <table width=\"100%\" class=\"table-combobox\">\n                            <tr>\n                                <td width=\"60%\">{{dataItem.Ten}}</td>\n                                <td>{{dataItem.Ma}}</td>\n                            </tr>\n                        </table>\n                    </ng-template>\n                </app-combobox>\n\n                <app-combobox #cboTiepNhan id=\"yeuCauTiepNhan\" fxFlex=\"15%\" fxFlex.sm=\"15%\" class=\"mt-1 on-header\" label=\"Người bệnh\"\n                    url=\"BaoCao/GetMaYeuCauTiepNhanTheoHinhThucDen\" [(model)]=\"baoCaoSearch.MaYeuCauTiepNhan\"\n                    [queryInfo]=\"{ParameterDependencies:'{HinhThucDenId:' + (baoCaoSearch.HinhThucDenId == undefined ? null : baoCaoSearch.HinhThucDenId) +', NoiGioiThieuId:' + (baoCaoSearch.NoiGioiThieuId == undefined ? null : baoCaoSearch.NoiGioiThieuId) +' }', Take: 50}\"\n                    popupSettings=\"null\" [templateHeader]=\"tiepNhanTemplateHeader\" [template]=\"tiepNhanemplate\"\n                    (modelChange)=\"changeMaTiepNhan($event)\" [bind]=\"true\">\n                    <ng-template #tiepNhanTemplateHeader let-dataItem>\n                        <table width=\"100%\" class=\"table-combobox\">\n                            <tr>\n                                <th width=\"40%\">Mã TN</th>\n                                <th>Họ tên</th>\n                            </tr>\n                        </table>\n                    </ng-template>\n                    <ng-template #tiepNhanemplate let-dataItem>\n                        <table width=\"100%\" class=\"table-combobox\">\n                            <tr>\n                                <td width=\"40%\">{{dataItem.MaYeuCauTiepNhan}}</td>\n                                <td>{{dataItem.TenNguoiBenh}}</td>\n                            </tr>\n                        </table>\n                    </ng-template>\n                </app-combobox>\n\n                <div fxFlex=\"30%\" fxFlex.sm=\"60%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button\n                        class=\"mr-1 mt-2\" (click)=\"exportExcel()\">Xuất Excel</button>\n                </div>\n\n                <div fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"pb-0\">\n                    <app-grid [gridColumns]=\"gridColumns\" [useAddDeault]=\"false\" [groups]=\"groups\"\n                        [checkboxAble]=\"false\" [autoHeight]=\"true\" [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\"\n                        [useActionDefault]=\"false\" [documentType]=\"documentType\" [pageable]=\"true\"\n                        urlGetData=\"BaoCao/GetDataBaoCaoBangKeChiTietTheoNguoiBenhForGrid\" urlGetTotalPage=\"BaoCao/GetTotalPageBaoCaoBangKeChiTietTheoNguoiBenhForGrid\">\n                    </app-grid>\n                    <ng-template #tongTienTitleTemplate kendoGridGroupFooterTemplate>\n                        <strong>\n                            Tổng Cộng:\n                        </strong>\n                    </ng-template>\n\n                    <ng-template #thanhTienTitleGroupFooterTemplate kendoGridGroupFooterTemplate>\n                        <strong>\n                            Tổng Cộng:\n                        </strong>\n                    </ng-template>\n                    <ng-template #thanhTienGroupFooterTemplate kendoGridGroupFooterTemplate let-aggregates>\n                        <strong>{{aggregates.ThanhTien.sum | number:'0.2-2':'vi-VN'}}</strong>\n                    </ng-template>\n\n                    <ng-template #tenNhomGroupTemplate let-value=\"value\">\n                        <strong>{{value}}</strong>\n                    </ng-template>\n\n                    <ng-template #soLuongTemplate let-dataItem>\n                        {{dataItem.SoLuong | number}}\n                    </ng-template>\n\n                    <ng-template #giaNiemYetTemplate let-dataItem>\n                        {{dataItem.GiaNiemYet | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #giaUuDaiTemplate let-dataItem>\n                        {{dataItem.GiaUuDai | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #thanhTienTemplate let-dataItem>\n                        {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #nguoiBenhDaThanhToanTemplate let-dataItem>\n                        {{dataItem.NguoiBenhDaThanhToan | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #congNoConPhaiThanhToanTemplate let-dataItem>\n                        {{dataItem.CongNoConPhaiThanhToan | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #tongChiPhiTemplate>\n                        {{tongThanhTien | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #tongCongGiaTonKhoTemplate let-dataItem>\n                        {{dataItem.TongCongGiaTonKho | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n                    <ng-template #tongCongGiaTonKhoGroupFooterTemplate kendoGridGroupFooterTemplate let-aggregates>\n                        <strong>{{aggregates.TongCongGiaTonKho.sum | number:'0.2-2':'vi-VN'}}</strong>\n                    </ng-template>\n                    <ng-template #tongCongGiaTonKhoFooterTemplate>\n                        {{tongCongGiaTonKho | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n                </div>\n            </div>\n\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bang-ke-chi-tiet-theo-nguoi-benh/bang-ke-chi-tiet-theo-nguoi-benh-list/bang-ke-chi-tiet-theo-nguoi-benh-list.component.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bang-ke-chi-tiet-theo-nguoi-benh/bang-ke-chi-tiet-theo-nguoi-benh-list/bang-ke-chi-tiet-theo-nguoi-benh-list.component.scss ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhbmcta2UtY2hpLXRpZXQtdGhlby1uZ3VvaS1iZW5oL2Jhbmcta2UtY2hpLXRpZXQtdGhlby1uZ3VvaS1iZW5oLWxpc3QvYmFuZy1rZS1jaGktdGlldC10aGVvLW5ndW9pLWJlbmgtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bang-ke-chi-tiet-theo-nguoi-benh/bang-ke-chi-tiet-theo-nguoi-benh-list/bang-ke-chi-tiet-theo-nguoi-benh-list.component.ts":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bang-ke-chi-tiet-theo-nguoi-benh/bang-ke-chi-tiet-theo-nguoi-benh-list/bang-ke-chi-tiet-theo-nguoi-benh-list.component.ts ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: BangKeChiTietTheoNguoiBenhListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BangKeChiTietTheoNguoiBenhListComponent", function() { return BangKeChiTietTheoNguoiBenhListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _bang_ke_chi_tiet_theo_nguoi_benh_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bang-ke-chi-tiet-theo-nguoi-benh.model */ "./src/app/modules/main/bao-cao/bang-ke-chi-tiet-theo-nguoi-benh/bang-ke-chi-tiet-theo-nguoi-benh.model.ts");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_component_dropdowns_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/component/dropdowns/combobox/combobox.component */ "./src/app/shared/component/dropdowns/combobox/combobox.component.ts");
















let BangKeChiTietTheoNguoiBenhListComponent = class BangKeChiTietTheoNguoiBenhListComponent {
    constructor(apiService, dialog, authService, notificationService) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.authService = authService;
        this.notificationService = notificationService;
        this.baoCaoSearch = new _bang_ke_chi_tiet_theo_nguoi_benh_model__WEBPACK_IMPORTED_MODULE_3__["BangKeChiTietTheoNguoiBenhTimKiemNangCao"]();
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.additionalSearchString = "";
        this.minDateDenNgay = null;
        this.minDateTuNgay = null;
        this.groups = [{
                field: 'TenNhom', dir: null, aggregates: [
                    { field: 'ThanhTien', aggregate: 'sum' },
                    { field: 'TongCongGiaTonKho', aggregate: 'sum' }
                ]
            }];
        this.tongThanhTien = 0;
        this.tongCongGiaTonKho = 0;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__["DocumentType"].BaoCaoBangKeChiTietTheoNguoiBenh;
        this.gridColumns = [
            { Field: "STT", Title: "STT", Width: 30 },
            { Field: "TenNhom", Title: "Nhóm", Width: 180, Hidden: true, TemplateGroupHeader: this.tenNhomGroupTemplate },
            { Field: "NoiDung", Title: "Nội dung", Width: 180 },
            { Field: "DonViTinh", Title: "ĐVT", Width: 80, },
            { Field: "SoLuong", Title: "Số lượng", Width: 80, Template: this.soLuongTemplate },
            { Field: "GiaNiemYet", Title: "Giá niêm yết", Width: 100, Template: this.giaNiemYetTemplate },
            { Field: "GiaUuDai", Title: "Giá ưu đãi", Width: 100, Template: this.giaUuDaiTemplate, TemplateFooter: this.thanhTienTitleGroupFooterTemplate },
            { Field: "ThanhTien", Title: "Thành tiền", Width: 120, Template: this.thanhTienTemplate, TemplateGroupFooter: this.thanhTienGroupFooterTemplate, TemplateFooter: this.tongChiPhiTemplate },
            { Field: "NguoiBenhDaThanhToan", Title: "NB đã thanh toán", Width: 100, Template: this.nguoiBenhDaThanhToanTemplate },
            { Field: "CongNoConPhaiThanhToan", Title: "Công nợ còn phải thanh toán", Width: 100, Template: this.congNoConPhaiThanhToanTemplate },
            { Field: "TongCongGiaTonKho", Title: "Giá tồn kho", Width: 120, Template: this.tongCongGiaTonKhoTemplate, TemplateGroupFooter: this.tongCongGiaTonKhoGroupFooterTemplate, TemplateFooter: this.tongCongGiaTonKhoFooterTemplate },
        ];
        // this.minDateTuNgay = new Date();
        // this.minDateTuNgay.setHours(0, 0, 0, 0);
        // this.minDateTuNgay.setMonth((new Date()).getMonth() - 1);
        // if (this.baoCaoSearch.TuNgayFormat == null) {
        //   this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
        // }
        // if (this.baoCaoSearch.DenNgayFormat == null) {
        //   this.baoCaoSearch.DenNgayFormat = new Date();
        //   this.baoCaoSearch.DenNgayFormat.setHours(23, 59, 59);
        // }
        this.ganThoiGianTimKiemMacDinh();
    }
    exportExcel() {
        // if (this.baoCaoSearch.NguoiBenhId == null || this.baoCaoSearch.NguoiBenhId == 0) {
        if (this.baoCaoSearch.MaYeuCauTiepNhan == undefined || this.baoCaoSearch.MaYeuCauTiepNhan == null) {
            this.notificationService.showError("Người bệnh yêu cầu nhập");
            return;
        }
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
            this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xuất excel...' }
            });
            let tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
            let denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
            this.baoCaoSearch.FromDate = tuNgay;
            this.baoCaoSearch.ToDate = denNgay;
            this.gridChild._gridQueryInfo.additionalSearchString = JSON.stringify(this.baoCaoSearch);
            this.apiService.postExportExcel("BaoCao/ExportBaoCaoBangKeChiTietTheoNguoiBenh", this.gridChild._gridQueryInfo)
                .subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoBangKeChiTietTheoNguoiBenh" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    XemBaoCao() {
        // if (this.baoCaoSearch.NguoiBenhId == null || this.baoCaoSearch.NguoiBenhId == 0) {
        if (this.baoCaoSearch.MaYeuCauTiepNhan == undefined || this.baoCaoSearch.MaYeuCauTiepNhan == null) {
            this.notificationService.showError("Người bệnh yêu cầu nhập");
            return;
        }
        let tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
        let denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
        this.baoCaoSearch.FromDate = tuNgay;
        this.baoCaoSearch.ToDate = denNgay;
        this.gridChild._additionalSearchString = JSON.stringify(this.baoCaoSearch);
        this.gridChild._skip = 0;
        this.gridChild.search();
        this.getTongCong(this.gridChild._gridQueryInfo);
    }
    getTongCong(queryInfo) {
        this.apiService.post("BaoCao/GetTongCongBangKeChiTietTheoNguoiBenh", queryInfo).subscribe(resultData => {
            this.tongThanhTien = resultData.TongCongChiPhi;
            this.tongCongGiaTonKho = resultData.TongChiPhiGiaTonKho;
        }, (err) => {
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
        });
    }
    changeHinhThucDen(event) {
        this.cboTiepNhan.getDataForLookup();
    }
    changeNguoiGioiThieu(event) {
        this.cboTiepNhan.getDataForLookup();
    }
    changeMaTiepNhan(event) {
        if (event != undefined && event != null && event !== "0") {
            this.ganThoiGianTimKiemMacDinh(true);
        }
        else {
            this.ganThoiGianTimKiemMacDinh();
        }
    }
    ganThoiGianTimKiemMacDinh(xoaThoiGianMacDinh = false) {
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
    }
};
BangKeChiTietTheoNguoiBenhListComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__["GridComponent"], { static: true })
], BangKeChiTietTheoNguoiBenhListComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongTienTitleTemplate', { static: true })
], BangKeChiTietTheoNguoiBenhListComponent.prototype, "tongTienTitleTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongChiPhiTemplate', { static: true })
], BangKeChiTietTheoNguoiBenhListComponent.prototype, "tongChiPhiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongTemplate', { static: true })
], BangKeChiTietTheoNguoiBenhListComponent.prototype, "soLuongTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giaNiemYetTemplate', { static: true })
], BangKeChiTietTheoNguoiBenhListComponent.prototype, "giaNiemYetTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giaUuDaiTemplate', { static: true })
], BangKeChiTietTheoNguoiBenhListComponent.prototype, "giaUuDaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
], BangKeChiTietTheoNguoiBenhListComponent.prototype, "thanhTienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTitleGroupFooterTemplate', { static: true })
], BangKeChiTietTheoNguoiBenhListComponent.prototype, "thanhTienTitleGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienGroupFooterTemplate', { static: true })
], BangKeChiTietTheoNguoiBenhListComponent.prototype, "thanhTienGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nguoiBenhDaThanhToanTemplate', { static: true })
], BangKeChiTietTheoNguoiBenhListComponent.prototype, "nguoiBenhDaThanhToanTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('congNoConPhaiThanhToanTemplate', { static: true })
], BangKeChiTietTheoNguoiBenhListComponent.prototype, "congNoConPhaiThanhToanTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhomGroupTemplate', { static: true })
], BangKeChiTietTheoNguoiBenhListComponent.prototype, "tenNhomGroupTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_dropdowns_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_15__["ComboboxComponent"], { static: true })
], BangKeChiTietTheoNguoiBenhListComponent.prototype, "cboTiepNhan", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongCongGiaTonKhoTemplate', { static: true })
], BangKeChiTietTheoNguoiBenhListComponent.prototype, "tongCongGiaTonKhoTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongCongGiaTonKhoGroupFooterTemplate', { static: true })
], BangKeChiTietTheoNguoiBenhListComponent.prototype, "tongCongGiaTonKhoGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongCongGiaTonKhoFooterTemplate', { static: true })
], BangKeChiTietTheoNguoiBenhListComponent.prototype, "tongCongGiaTonKhoFooterTemplate", void 0);
BangKeChiTietTheoNguoiBenhListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bang-ke-chi-tiet-theo-nguoi-benh-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bang-ke-chi-tiet-theo-nguoi-benh-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bang-ke-chi-tiet-theo-nguoi-benh/bang-ke-chi-tiet-theo-nguoi-benh-list/bang-ke-chi-tiet-theo-nguoi-benh-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bang-ke-chi-tiet-theo-nguoi-benh-list.component.scss */ "./src/app/modules/main/bao-cao/bang-ke-chi-tiet-theo-nguoi-benh/bang-ke-chi-tiet-theo-nguoi-benh-list/bang-ke-chi-tiet-theo-nguoi-benh-list.component.scss")).default]
    })
], BangKeChiTietTheoNguoiBenhListComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bang-ke-chi-tiet-theo-nguoi-benh/bang-ke-chi-tiet-theo-nguoi-benh-routing.module.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bang-ke-chi-tiet-theo-nguoi-benh/bang-ke-chi-tiet-theo-nguoi-benh-routing.module.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: BangKeChiTietTheoNguoiBenhRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BangKeChiTietTheoNguoiBenhRoutingModule", function() { return BangKeChiTietTheoNguoiBenhRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _bang_ke_chi_tiet_theo_nguoi_benh_list_bang_ke_chi_tiet_theo_nguoi_benh_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bang-ke-chi-tiet-theo-nguoi-benh-list/bang-ke-chi-tiet-theo-nguoi-benh-list.component */ "./src/app/modules/main/bao-cao/bang-ke-chi-tiet-theo-nguoi-benh/bang-ke-chi-tiet-theo-nguoi-benh-list/bang-ke-chi-tiet-theo-nguoi-benh-list.component.ts");







const routes = [
    {
        path: '',
        component: _bang_ke_chi_tiet_theo_nguoi_benh_list_bang_ke_chi_tiet_theo_nguoi_benh_list_component__WEBPACK_IMPORTED_MODULE_6__["BangKeChiTietTheoNguoiBenhListComponent"],
        data: {
            title: 'Bảng kê chi tiết theo người bệnh',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoTongHopCongNoChuaThanhToan,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    }
];
let BangKeChiTietTheoNguoiBenhRoutingModule = class BangKeChiTietTheoNguoiBenhRoutingModule {
};
BangKeChiTietTheoNguoiBenhRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BangKeChiTietTheoNguoiBenhRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bang-ke-chi-tiet-theo-nguoi-benh/bang-ke-chi-tiet-theo-nguoi-benh.model.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bang-ke-chi-tiet-theo-nguoi-benh/bang-ke-chi-tiet-theo-nguoi-benh.model.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: BangKeChiTietTheoNguoiBenhTimKiemNangCao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BangKeChiTietTheoNguoiBenhTimKiemNangCao", function() { return BangKeChiTietTheoNguoiBenhTimKiemNangCao; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BangKeChiTietTheoNguoiBenhTimKiemNangCao {
    constructor(HinhThucDenId = null, NoiGioiThieuId = null, MaYeuCauTiepNhan = null, SearchString = "", FromDate = null, ToDate = null, TuNgayFormat = null, DenNgayFormat = null) {
        this.HinhThucDenId = HinhThucDenId;
        this.NoiGioiThieuId = NoiGioiThieuId;
        this.MaYeuCauTiepNhan = MaYeuCauTiepNhan;
        this.SearchString = SearchString;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
        this.TuNgayFormat = TuNgayFormat;
        this.DenNgayFormat = DenNgayFormat;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/bang-ke-chi-tiet-theo-nguoi-benh/bang-ke-chi-tiet-theo-nguoi-benh.module.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bang-ke-chi-tiet-theo-nguoi-benh/bang-ke-chi-tiet-theo-nguoi-benh.module.ts ***!
  \******************************************************************************************************************/
/*! exports provided: BangKeChiTietTheoNguoiBenhModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BangKeChiTietTheoNguoiBenhModule", function() { return BangKeChiTietTheoNguoiBenhModule; });
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
/* harmony import */ var _bang_ke_chi_tiet_theo_nguoi_benh_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bang-ke-chi-tiet-theo-nguoi-benh-routing.module */ "./src/app/modules/main/bao-cao/bang-ke-chi-tiet-theo-nguoi-benh/bang-ke-chi-tiet-theo-nguoi-benh-routing.module.ts");
/* harmony import */ var _bang_ke_chi_tiet_theo_nguoi_benh_list_bang_ke_chi_tiet_theo_nguoi_benh_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bang-ke-chi-tiet-theo-nguoi-benh-list/bang-ke-chi-tiet-theo-nguoi-benh-list.component */ "./src/app/modules/main/bao-cao/bang-ke-chi-tiet-theo-nguoi-benh/bang-ke-chi-tiet-theo-nguoi-benh-list/bang-ke-chi-tiet-theo-nguoi-benh-list.component.ts");

















let BangKeChiTietTheoNguoiBenhModule = class BangKeChiTietTheoNguoiBenhModule {
};
BangKeChiTietTheoNguoiBenhModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bang_ke_chi_tiet_theo_nguoi_benh_list_bang_ke_chi_tiet_theo_nguoi_benh_list_component__WEBPACK_IMPORTED_MODULE_16__["BangKeChiTietTheoNguoiBenhListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _bang_ke_chi_tiet_theo_nguoi_benh_routing_module__WEBPACK_IMPORTED_MODULE_15__["BangKeChiTietTheoNguoiBenhRoutingModule"],
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
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"]
        ]
    })
], BangKeChiTietTheoNguoiBenhModule);



/***/ })

}]);
//# sourceMappingURL=bao-cao-bang-ke-chi-tiet-theo-nguoi-benh-bang-ke-chi-tiet-theo-nguoi-benh-module-es2015.js.map