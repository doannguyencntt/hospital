(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-tong-hop-cong-no-chua-thanh-toan-bao-cao-tong-hop-cong-no-chua-thanh-toan-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tong-hop-cong-no-chua-thanh-toan/bao-cao-tong-hop-cong-no-chua-thanh-toan-list/bao-cao-tong-hop-cong-no-chua-thanh-toan-list.component.html": 
        /*!********************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tong-hop-cong-no-chua-thanh-toan/bao-cao-tong-hop-cong-no-chua-thanh-toan-list/bao-cao-tong-hop-cong-no-chua-thanh-toan-list.component.html ***!
          \********************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Thống Kê', Path:''},\n                    {Title:'Báo Cáo', Path:''},\n                    {Title:'Kinh Doanh', Path:''},\n                    {Title:'Tổng Hợp Công Nợ Chưa Thanh Toán', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n                <app-combobox id=\"hinhThucDen\" fxFlex=\"15%\" fxFlex.sm=\"15%\" class=\"mt-1 on-header\" label=\"Hình thức đến\" [reloadForGrid]=\"true\"\n                    url=\"BaoCao/GetHinhThucDenCoTatCa\" [(model)]=\"baoCaoSearch.HinhThucDenId\"  [autoSelectFirstItem]=\"true\"\n                    popupSettings=\"null\" hierarchyKeyToSend=\"HinhThucDenId\" (modelChange)=\"changeHinhThucDen($event)\">\n                </app-combobox>\n\n                <app-combobox id=\"KhoId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" class=\"mt-1 on-header\" label=\"Người giới thiệu\" [reloadForGrid]=\"true\"\n                    url=\"BaoCao/GetNoiGioiThieuDaCoNguoiBenhCoTatCa\" [(model)]=\"baoCaoSearch.NoiGioiThieuId\" [autoSelectFirstItem]=\"true\" \n                    [disabled]=\"baoCaoSearch.HinhThucDenId == undefined || baoCaoSearch.HinhThucDenId == 0\"\n                    [templateHeader]=\"noiGioiThieuTemplateHeader\" [template]=\"noiGioiThieuTemplate\" popupSettings=\"null\" hierarchyKeyToListen=\"HinhThucDenId\"\n                    (modelChange)=\"changeNguoiGioiThieu($event)\">\n                    <ng-template #noiGioiThieuTemplateHeader let-dataItem>\n                        <table width=\"100%\" class=\"table-combobox\">\n                            <tr>\n                                <th width=\"60%\">Tên</th>\n                                <th>Đơn vị</th>\n                            </tr>\n                        </table>\n                    </ng-template>\n                    <ng-template #noiGioiThieuTemplate let-dataItem>\n                        <table width=\"100%\" class=\"table-combobox\">\n                            <tr>\n                                <td width=\"60%\">{{dataItem.Ten}}</td>\n                                <td>{{dataItem.Ma}}</td>\n                            </tr>\n                        </table>\n                    </ng-template>\n                </app-combobox>\n\n                <app-combobox #cboTiepNhan id=\"yeuCauTiepNhan\" fxFlex=\"15%\" fxFlex.sm=\"15%\" class=\"mt-1 on-header\" label=\"Người bệnh\"\n                    url=\"BaoCao/GetMaYeuCauTiepNhanTheoHinhThucDenCoTatCa\" [(model)]=\"baoCaoSearch.MaYeuCauTiepNhan\"\n                    [queryInfo]=\"{ParameterDependencies:'{HinhThucDenId:' + (baoCaoSearch.HinhThucDenId == undefined ? null : baoCaoSearch.HinhThucDenId) +', NoiGioiThieuId:' + (baoCaoSearch.NoiGioiThieuId == undefined ? null : baoCaoSearch.NoiGioiThieuId) +' }', Take: 50}\"\n                    popupSettings=\"null\" [templateHeader]=\"tiepNhanTemplateHeader\" [template]=\"tiepNhanemplate\"\n                    (modelChange)=\"changeMaTiepNhan($event)\" [bind]=\"true\">\n                    <ng-template #tiepNhanTemplateHeader let-dataItem>\n                        <table width=\"100%\" class=\"table-combobox\">\n                            <tr>\n                                <th width=\"40%\">Mã TN</th>\n                                <th>Họ tên</th>\n                            </tr>\n                        </table>\n                    </ng-template>\n                    <ng-template #tiepNhanemplate let-dataItem>\n                        <table width=\"100%\" class=\"table-combobox\">\n                            <tr>\n                                <td width=\"40%\">{{dataItem.MaYeuCauTiepNhan}}</td>\n                                <td>{{dataItem.TenNguoiBenh}}</td>\n                            </tr>\n                        </table>\n                    </ng-template>\n                </app-combobox>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" #tiepnhantu id=\"TuNgayFormat\"\n                    [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" #tiepnhanden id=\"DenNgayFormat\"\n                    [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header\" label=\"Đến ngày\">\n                </app-datetimepicker>\n\n                <!-- <div class=\"h-15 mt-2\" fxFlex=\"30%\">\n                    <div class=\"bg-card rounded-full border\" fxFlex=\"100%\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\"\n                            name=\"searchString\" [(ngModel)]=\"baoCaoSearch.SearchString\" placeholder=\"Tìm kiếm Mã tiếp nhận, Họ tên, Mã người bệnh\" />\n                    </div>\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n                        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                    </button>\n                </div> -->\n\n                <div fxFlex=\"auto\" fxFlex.sm=\"auto\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"exportExcel()\">Xuất Excel</button>\n                </div>\n\n                <div fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"pb-0\">\n                    <app-grid [gridColumns]=\"gridColumns\" [useAddDeault]=\"false\"\n                        [checkboxAble]=\"false\" [autoHeight]=\"true\" [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\"\n                        [useActionDefault]=\"false\" [documentType]=\"documentType\" [pageable]=\"true\" [showStt]=\"true\"\n                        urlGetData=\"BaoCao/GetDataBaoCaoTongHopCongNoChuaThanhToanForGrid\" urlGetTotalPage=\"BaoCao/GetTotalPageBaoCaoTongHopCongNoChuaThanhToanForGrid\">\n                    </app-grid>\n                    <ng-template #tongTienTitleTemplate let-dataItem>\n                        <strong>\n                            Tổng TT:\n                        </strong>\n                    </ng-template>\n\n                    <ng-template #cLSTemplate let-dataItem>\n                        {{dataItem.ChiPhiCanLamSan | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #cLSNgoaiTruTemplate let-dataItem>\n                        {{dataItem.ChiPhiCanLamSanNgoaiTru | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #cLSNoiTruTemplate let-dataItem>\n                        {{dataItem.ChiPhiCanLamSanNoiTru | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #giuongTemplate let-dataItem>\n                        {{dataItem.ChiPhiGiuong | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #thuocVatTuTemplate let-dataItem>\n                        {{dataItem.ChiPhiThuocVTYT | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #thuocTemplate let-dataItem>\n                        {{dataItem.ChiPhiThuoc | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #vatTuTemplate let-dataItem>\n                        {{dataItem.ChiPhiVTYT | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #testCovidTemplate let-dataItem>\n                        {{dataItem.TestCovid | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #suatAnTemplate let-dataItem>\n                        {{dataItem.SuatAn | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #khachThanhToanTemplate let-dataItem>\n                        {{dataItem.NguoiBenhDaThanhToan | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #chiPhiTemplate let-dataItem>\n                        {{dataItem.ChiPhiCaPhauThuat | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #raVienTemplate let-dataItem>\n                        <app-checkbox id=\"raVien{{dataItem.YeucauTiepNhanId}}\" label=\"\" [(model)]=\"dataItem.RaVien\" [disabled]=\"true\">\n                        </app-checkbox>\n                    </ng-template>\n\n                    <ng-template #tongTienCLSTemplate >\n                        {{tongTienCLS | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #tongTienCLSNgoaiTruTemplate >\n                        {{tongTienCLSNgoaiTru | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #tongTienCLSNoiTruTemplate >\n                        {{tongTienCLSNoiTru | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #tongTienGiuongTemplate >\n                        {{tongTienGiuong | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #tongTienThuocVatTuTemplate >\n                        {{tongTienThuocVatTu | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #tongTienThuocTemplate >\n                        {{tongTienThuoc | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #tongTienVatTuTemplate >\n                        {{tongTienVatTu | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #tongTienTestCovidTemplate >\n                        {{tongTienTestCovid | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #tongTienSuatAnTemplate >\n                        {{tongTienSuatAn | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #tongTienKhachThanhToanTemplate >\n                        {{tongTienKhachThanhToan | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #tongChiPhiTemplate >\n                        {{tongChiPhi | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n                </div>\n            </div>\n\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-cong-no-chua-thanh-toan/bao-cao-tong-hop-cong-no-chua-thanh-toan-list/bao-cao-tong-hop-cong-no-chua-thanh-toan-list.component.scss": 
        /*!******************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tong-hop-cong-no-chua-thanh-toan/bao-cao-tong-hop-cong-no-chua-thanh-toan-list/bao-cao-tong-hop-cong-no-chua-thanh-toan-list.component.scss ***!
          \******************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tdG9uZy1ob3AtY29uZy1uby1jaHVhLXRoYW5oLXRvYW4vYmFvLWNhby10b25nLWhvcC1jb25nLW5vLWNodWEtdGhhbmgtdG9hbi1saXN0L2Jhby1jYW8tdG9uZy1ob3AtY29uZy1uby1jaHVhLXRoYW5oLXRvYW4tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-cong-no-chua-thanh-toan/bao-cao-tong-hop-cong-no-chua-thanh-toan-list/bao-cao-tong-hop-cong-no-chua-thanh-toan-list.component.ts": 
        /*!****************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tong-hop-cong-no-chua-thanh-toan/bao-cao-tong-hop-cong-no-chua-thanh-toan-list/bao-cao-tong-hop-cong-no-chua-thanh-toan-list.component.ts ***!
          \****************************************************************************************************************************************************************************************/
        /*! exports provided: BaoCaoTongHopCongNoChuaThanhToanListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTongHopCongNoChuaThanhToanListComponent", function () { return BaoCaoTongHopCongNoChuaThanhToanListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _bao_cao_tong_hop_cong_no_chua_thanh_toan_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../bao-cao-tong-hop-cong-no-chua-thanh-toan.model */ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-cong-no-chua-thanh-toan/bao-cao-tong-hop-cong-no-chua-thanh-toan.model.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_13__);
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_component_dropdowns_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/component/dropdowns/combobox/combobox.component */ "./src/app/shared/component/dropdowns/combobox/combobox.component.ts");
            var BaoCaoTongHopCongNoChuaThanhToanListComponent = /** @class */ (function () {
                function BaoCaoTongHopCongNoChuaThanhToanListComponent(apiService, dialog, authService, notificationService) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.baoCaoSearch = new _bao_cao_tong_hop_cong_no_chua_thanh_toan_model__WEBPACK_IMPORTED_MODULE_12__["BaoCaoTongHopCongNoChuaThanhToanTimKiemNangCao"]();
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_13___default.a;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControl"]();
                    this.additionalSearchString = "";
                    this.minDateDenNgay = null;
                    this.minDateTuNgay = null;
                    this.tongTienCLS = 0;
                    this.tongTienCLSNgoaiTru = 0;
                    this.tongTienCLSNoiTru = 0;
                    this.tongTienGiuong = 0;
                    this.tongTienThuocVatTu = 0;
                    this.tongTienThuoc = 0;
                    this.tongTienVatTu = 0;
                    this.tongTienTestCovid = 0;
                    this.tongTienSuatAn = 0;
                    this.tongTienKhachThanhToan = 0;
                    this.tongChiPhi = 0;
                }
                BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__["DocumentType"].BaoCaoTongHopCongNoChuaThanhToan;
                    this.gridColumns = [
                        // { Field: "STT", Title: "STT", Width: 30 },
                        { Field: "ThoiDiemTiepNhanDisplay", Title: "Ngày tiếp nhận", Width: 90, TemplateFooter: this.tongTienTitleTemplate },
                        // { Field: "NoiGioiThieuDisplay", Title: "Bác sỹ", Width: 180, },
                        { Field: "HinhThucDenDisplay", Title: "Hình thức đến", Width: 180, },
                        { Field: "MaBN", Title: "Mã y tế", Width: 100, },
                        { Field: "MaYeuCauTiepNhan", Title: "Mã tiếp nhận", Width: 100, },
                        { Field: "HoTen", Title: "Họ và tên", Width: 180, },
                        { Field: "PhongPhauThuat", Title: "Phòng PT", Width: 160, },
                        { Field: "NgayPhauThuatDisplay", Title: "Ngày PT", Width: 160, },
                        { Field: "DichVuKyThuat", Title: "Dịch vụ kỹ thuật", Width: 200, },
                        // { Field: "ChiPhiCanLamSan", Title: "Chi phí cls", Width: 120, TemplateFooter: this.tongTienCLSTemplate, Template: this.cLSTemplate },
                        { Field: "ChiPhiCanLamSanNgoaiTru", Title: "Chi phí cls ngoại trú", Width: 120, TemplateFooter: this.tongTienCLSNgoaiTruTemplate, Template: this.cLSNgoaiTruTemplate },
                        { Field: "ChiPhiCanLamSanNoiTru", Title: "Chi phí cls nội trú", Width: 120, TemplateFooter: this.tongTienCLSNoiTruTemplate, Template: this.cLSNoiTruTemplate },
                        { Field: "ChiPhiGiuong", Title: "Chi phí giường", Width: 120, TemplateFooter: this.tongTienGiuongTemplate, Template: this.giuongTemplate },
                        // { Field: "ChiPhiThuocVTYT", Title: "Chi phí thuốc, VTYT", Width: 120, TemplateFooter: this.tongTienThuocVatTuTemplate, Template: this.thuocVatTuTemplate },
                        { Field: "ChiPhiThuoc", Title: "Chi phí thuốc", Width: 120, TemplateFooter: this.tongTienThuocTemplate, Template: this.thuocTemplate },
                        { Field: "ChiPhiVTYT", Title: "Chi phí VTYT", Width: 120, TemplateFooter: this.tongTienVatTuTemplate, Template: this.vatTuTemplate },
                        { Field: "ChiPhiThuePhongMo", Title: "Chi phí thuê phòng mổ", Width: 120, },
                        { Field: "GiamDau", Title: "Giảm đau", Width: 120, },
                        { Field: "TestCovid", Title: "Test covid", Width: 120, TemplateFooter: this.tongTienTestCovidTemplate, Template: this.testCovidTemplate },
                        { Field: "SuatAn", Title: "Dịch vụ khác", Width: 120, TemplateFooter: this.tongTienSuatAnTemplate, Template: this.suatAnTemplate },
                        { Field: "NguoiBenhDaThanhToan", Title: "KH đã thanh toán", Width: 120, TemplateFooter: this.tongTienKhachThanhToanTemplate, Template: this.khachThanhToanTemplate },
                        { Field: "CongNoChuaThanhToan", Title: "Tổng công nợ chưa thanh toán", Width: 120, },
                        { Field: "ChiPhiCaPhauThuat", Title: "Tổng chi phí ca PT", Width: 120, TemplateFooter: this.tongChiPhiTemplate, Template: this.chiPhiTemplate },
                        { Field: "ThoiGianGayMeDisplay", Title: "TGGM", Width: 100, },
                        { Field: "ThoiGianBanGiaoDisplay", Title: "TGTM", Width: 100, },
                        { Field: "RaVien", Title: "Ra viện", Width: 80, Template: this.raVienTemplate },
                    ];
                    this.ganThoiGianTimKiemMacDinh();
                };
                BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype.exportExcel = function () {
                    var _this = this;
                    if ((this.baoCaoSearch.MaYeuCauTiepNhan == undefined || this.baoCaoSearch.MaYeuCauTiepNhan == null)
                        && (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null)) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        this.gridChild._isLoading = false;
                        this.gridChild._isLoadingTotalPage = false;
                        return;
                    }
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
                        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang xuất excel...' }
                        });
                        var tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
                        var denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
                        this.baoCaoSearch.FromDate = tuNgay;
                        this.baoCaoSearch.ToDate = denNgay;
                        this.gridChild._gridQueryInfo.additionalSearchString = JSON.stringify(this.baoCaoSearch);
                        this.apiService.postExportExcel("BaoCao/ExportBaoCaoTongHopCongNoChuaThanhToan", this.gridChild._gridQueryInfo)
                            .subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoTongHopCongNoChuaThanhToan" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype.XemBaoCao = function () {
                    if ((this.baoCaoSearch.MaYeuCauTiepNhan == undefined || this.baoCaoSearch.MaYeuCauTiepNhan == null)
                        && (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null)) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        this.gridChild._isLoading = false;
                        this.gridChild._isLoadingTotalPage = false;
                        return;
                    }
                    var tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
                    var denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
                    this.baoCaoSearch.FromDate = tuNgay;
                    this.baoCaoSearch.ToDate = denNgay;
                    this.gridChild._additionalSearchString = JSON.stringify(this.baoCaoSearch);
                    this.gridChild._skip = 0;
                    this.gridChild.search();
                    this.getTongCong(this.gridChild._gridQueryInfo);
                };
                BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype.getTongCong = function (queryInfo) {
                    var _this = this;
                    this.apiService.post("BaoCao/GetTongCongCongNoChuaThanhToan", queryInfo).subscribe(function (resultData) {
                        _this.tongTienCLS = resultData.ChiPhiCanLamSan;
                        _this.tongTienCLSNgoaiTru = resultData.ChiPhiCanLamSanNgoaiTru;
                        _this.tongTienCLSNoiTru = resultData.ChiPhiCanLamSanNoiTru;
                        _this.tongTienGiuong = resultData.ChiPhiGiuong;
                        _this.tongTienThuocVatTu = resultData.ChiPhiThuocVTYT;
                        _this.tongTienThuoc = resultData.ChiPhiThuoc;
                        _this.tongTienVatTu = resultData.ChiPhiVTYT;
                        _this.tongTienTestCovid = resultData.TestCovid;
                        _this.tongTienSuatAn = resultData.SuatAn;
                        _this.tongTienKhachThanhToan = resultData.NguoiBenhDaThanhToan;
                        _this.tongChiPhi = resultData.ChiPhiCaPhauThuat;
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                    });
                };
                BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype.changeHinhThucDen = function (event) {
                    this.cboTiepNhan.getDataForLookup();
                };
                BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype.changeNguoiGioiThieu = function (event) {
                    this.cboTiepNhan.getDataForLookup();
                };
                BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype.changeMaTiepNhan = function (event) {
                    if (event != undefined && event != null && event !== "0") {
                        this.ganThoiGianTimKiemMacDinh(true);
                    }
                    else {
                        this.ganThoiGianTimKiemMacDinh();
                    }
                };
                BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype.ganThoiGianTimKiemMacDinh = function (xoaThoiGianMacDinh) {
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
                return BaoCaoTongHopCongNoChuaThanhToanListComponent;
            }());
            BaoCaoTongHopCongNoChuaThanhToanListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_8__["GridComponent"], { static: true })
            ], BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongTienTitleTemplate', { static: true })
            ], BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype, "tongTienTitleTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongTienCLSTemplate', { static: true })
            ], BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype, "tongTienCLSTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongTienCLSNgoaiTruTemplate', { static: true })
            ], BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype, "tongTienCLSNgoaiTruTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongTienCLSNoiTruTemplate', { static: true })
            ], BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype, "tongTienCLSNoiTruTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongTienGiuongTemplate', { static: true })
            ], BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype, "tongTienGiuongTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongTienThuocVatTuTemplate', { static: true })
            ], BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype, "tongTienThuocVatTuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongTienThuocTemplate', { static: true })
            ], BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype, "tongTienThuocTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongTienVatTuTemplate', { static: true })
            ], BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype, "tongTienVatTuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongTienTestCovidTemplate', { static: true })
            ], BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype, "tongTienTestCovidTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongTienSuatAnTemplate', { static: true })
            ], BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype, "tongTienSuatAnTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongTienKhachThanhToanTemplate', { static: true })
            ], BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype, "tongTienKhachThanhToanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongChiPhiTemplate', { static: true })
            ], BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype, "tongChiPhiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_dropdowns_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_15__["ComboboxComponent"], { static: true })
            ], BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype, "cboTiepNhan", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cLSTemplate', { static: true })
            ], BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype, "cLSTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cLSNgoaiTruTemplate', { static: true })
            ], BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype, "cLSNgoaiTruTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cLSNoiTruTemplate', { static: true })
            ], BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype, "cLSNoiTruTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giuongTemplate', { static: true })
            ], BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype, "giuongTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thuocVatTuTemplate', { static: true })
            ], BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype, "thuocVatTuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thuocTemplate', { static: true })
            ], BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype, "thuocTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('vatTuTemplate', { static: true })
            ], BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype, "vatTuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('testCovidTemplate', { static: true })
            ], BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype, "testCovidTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('suatAnTemplate', { static: true })
            ], BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype, "suatAnTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('khachThanhToanTemplate', { static: true })
            ], BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype, "khachThanhToanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chiPhiTemplate', { static: true })
            ], BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype, "chiPhiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('raVienTemplate', { static: true })
            ], BaoCaoTongHopCongNoChuaThanhToanListComponent.prototype, "raVienTemplate", void 0);
            BaoCaoTongHopCongNoChuaThanhToanListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bao-cao-tong-hop-cong-no-chua-thanh-toan-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-tong-hop-cong-no-chua-thanh-toan-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tong-hop-cong-no-chua-thanh-toan/bao-cao-tong-hop-cong-no-chua-thanh-toan-list/bao-cao-tong-hop-cong-no-chua-thanh-toan-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-tong-hop-cong-no-chua-thanh-toan-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-cong-no-chua-thanh-toan/bao-cao-tong-hop-cong-no-chua-thanh-toan-list/bao-cao-tong-hop-cong-no-chua-thanh-toan-list.component.scss")).default]
                })
            ], BaoCaoTongHopCongNoChuaThanhToanListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-cong-no-chua-thanh-toan/bao-cao-tong-hop-cong-no-chua-thanh-toan-routing.module.ts": 
        /*!******************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tong-hop-cong-no-chua-thanh-toan/bao-cao-tong-hop-cong-no-chua-thanh-toan-routing.module.ts ***!
          \******************************************************************************************************************************************/
        /*! exports provided: BaoCaoTongHopCongNoChuaThanhToanRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTongHopCongNoChuaThanhToanRoutingModule", function () { return BaoCaoTongHopCongNoChuaThanhToanRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _bao_cao_tong_hop_cong_no_chua_thanh_toan_list_bao_cao_tong_hop_cong_no_chua_thanh_toan_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-tong-hop-cong-no-chua-thanh-toan-list/bao-cao-tong-hop-cong-no-chua-thanh-toan-list.component */ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-cong-no-chua-thanh-toan/bao-cao-tong-hop-cong-no-chua-thanh-toan-list/bao-cao-tong-hop-cong-no-chua-thanh-toan-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _bao_cao_tong_hop_cong_no_chua_thanh_toan_list_bao_cao_tong_hop_cong_no_chua_thanh_toan_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoTongHopCongNoChuaThanhToanListComponent"],
                    data: {
                        title: 'Báo cáo tổng hợp công nợ chưa thanh toán',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoTongHopCongNoChuaThanhToan,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                }
            ];
            var BaoCaoTongHopCongNoChuaThanhToanRoutingModule = /** @class */ (function () {
                function BaoCaoTongHopCongNoChuaThanhToanRoutingModule() {
                }
                return BaoCaoTongHopCongNoChuaThanhToanRoutingModule;
            }());
            BaoCaoTongHopCongNoChuaThanhToanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BaoCaoTongHopCongNoChuaThanhToanRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-cong-no-chua-thanh-toan/bao-cao-tong-hop-cong-no-chua-thanh-toan.model.ts": 
        /*!*********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tong-hop-cong-no-chua-thanh-toan/bao-cao-tong-hop-cong-no-chua-thanh-toan.model.ts ***!
          \*********************************************************************************************************************************/
        /*! exports provided: BaoCaoTongHopCongNoChuaThanhToanTimKiemNangCao */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTongHopCongNoChuaThanhToanTimKiemNangCao", function () { return BaoCaoTongHopCongNoChuaThanhToanTimKiemNangCao; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var BaoCaoTongHopCongNoChuaThanhToanTimKiemNangCao = /** @class */ (function () {
                function BaoCaoTongHopCongNoChuaThanhToanTimKiemNangCao(HinhThucDenId, NoiGioiThieuId, MaYeuCauTiepNhan, SearchString, FromDate, ToDate, TuNgayFormat, DenNgayFormat) {
                    if (HinhThucDenId === void 0) { HinhThucDenId = null; }
                    if (NoiGioiThieuId === void 0) { NoiGioiThieuId = null; }
                    if (MaYeuCauTiepNhan === void 0) { MaYeuCauTiepNhan = "0"; }
                    if (SearchString === void 0) { SearchString = ""; }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    if (TuNgayFormat === void 0) { TuNgayFormat = null; }
                    if (DenNgayFormat === void 0) { DenNgayFormat = null; }
                    this.HinhThucDenId = HinhThucDenId;
                    this.NoiGioiThieuId = NoiGioiThieuId;
                    this.MaYeuCauTiepNhan = MaYeuCauTiepNhan;
                    this.SearchString = SearchString;
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                    this.TuNgayFormat = TuNgayFormat;
                    this.DenNgayFormat = DenNgayFormat;
                }
                return BaoCaoTongHopCongNoChuaThanhToanTimKiemNangCao;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-cong-no-chua-thanh-toan/bao-cao-tong-hop-cong-no-chua-thanh-toan.module.ts": 
        /*!**********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tong-hop-cong-no-chua-thanh-toan/bao-cao-tong-hop-cong-no-chua-thanh-toan.module.ts ***!
          \**********************************************************************************************************************************/
        /*! exports provided: BaoCaoTongHopCongNoChuaThanhToanModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTongHopCongNoChuaThanhToanModule", function () { return BaoCaoTongHopCongNoChuaThanhToanModule; });
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
            /* harmony import */ var _bao_cao_tong_hop_cong_no_chua_thanh_toan_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bao-cao-tong-hop-cong-no-chua-thanh-toan-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-cong-no-chua-thanh-toan/bao-cao-tong-hop-cong-no-chua-thanh-toan-routing.module.ts");
            /* harmony import */ var _bao_cao_tong_hop_cong_no_chua_thanh_toan_list_bao_cao_tong_hop_cong_no_chua_thanh_toan_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bao-cao-tong-hop-cong-no-chua-thanh-toan-list/bao-cao-tong-hop-cong-no-chua-thanh-toan-list.component */ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-cong-no-chua-thanh-toan/bao-cao-tong-hop-cong-no-chua-thanh-toan-list/bao-cao-tong-hop-cong-no-chua-thanh-toan-list.component.ts");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            var BaoCaoTongHopCongNoChuaThanhToanModule = /** @class */ (function () {
                function BaoCaoTongHopCongNoChuaThanhToanModule() {
                }
                return BaoCaoTongHopCongNoChuaThanhToanModule;
            }());
            BaoCaoTongHopCongNoChuaThanhToanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_bao_cao_tong_hop_cong_no_chua_thanh_toan_list_bao_cao_tong_hop_cong_no_chua_thanh_toan_list_component__WEBPACK_IMPORTED_MODULE_15__["BaoCaoTongHopCongNoChuaThanhToanListComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _bao_cao_tong_hop_cong_no_chua_thanh_toan_routing_module__WEBPACK_IMPORTED_MODULE_14__["BaoCaoTongHopCongNoChuaThanhToanRoutingModule"],
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
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_16__["LayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_13__["GridModule"],
                        _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_11__["IntlModule"],
                        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_12__["PdfViewerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"]
                    ]
                })
            ], BaoCaoTongHopCongNoChuaThanhToanModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-bao-cao-tong-hop-cong-no-chua-thanh-toan-bao-cao-tong-hop-cong-no-chua-thanh-toan-module-es2015.js.map
//# sourceMappingURL=bao-cao-bao-cao-tong-hop-cong-no-chua-thanh-toan-bao-cao-tong-hop-cong-no-chua-thanh-toan-module-es5.js.map
//# sourceMappingURL=bao-cao-bao-cao-tong-hop-cong-no-chua-thanh-toan-bao-cao-tong-hop-cong-no-chua-thanh-toan-module-es5.js.map