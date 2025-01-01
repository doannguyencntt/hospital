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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-doanh-thu-nha-thuoc-doanh-thu-nha-thuoc-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/doanh-thu-nha-thuoc/doanh-thu-nha-thuoc-list/doanh-thu-nha-thuoc-list.component.html": 
        /*!*****************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/doanh-thu-nha-thuoc/doanh-thu-nha-thuoc-list/doanh-thu-nha-thuoc-list.component.html ***!
          \*****************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                {Title:'Thống Kê', Path:''},\n                {Title:'Báo Cáo', Path:''},\n                {Title:'Dược', Path:''},\n                {Title:'Doanh Thu Nhà Thuốc',Path:'',Active:true}\n                  ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid [baseRoute]=\"baseRoute\" [gridColumns]=\"gridColumns\" [useAddDeault]=\"false\" [showStt]=\"true\" [checkboxAble]=\"false\" \n              [autoHeight]=\"true\" [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\" [useActionDefault]=\"false\"\n              [documentType]=\"documentType\" (extOnDataBound)=\"GetListAsync($event)\" [sort]=\"sort\"\n              urlGetData=\"BaoCaoDoanhThuNhaThuoc/GetDataForGrid\" urlGetTotalPage=\"BaoCaoDoanhThuNhaThuoc/GetTotalPageForGrid\"></app-grid>\n        </div>\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar px-0 h-15 border-b sticky left-0\">\n                <div fxFlex=\"80%\" fxFlex.sm=\"80%\">\n                    <!-- <app-daterangepicker id=\"tuNgayDenNgay\" fxFlex=\"300px\" fxFlex.sm=\"auto\" class=\"mt-1 ml-2 on-header\" \n                      [(model)]=\"timKiemNangCaoObj.TuNgayDenNgay\" label=\"Từ ngày - đến ngày\">\n                    </app-daterangepicker> -->\n\n                    <app-datetimepicker id=\"NgayVaoVien\" fxFlex=\"15%\" fxFlex.sm=\"15%\" \n                        [(model)]=\"timKiemNangCaoObj.TuNgayDenNgay.startDate\"\n                        label=\"Từ ngày\" class=\"mt-1 ml-2 on-header\"  [maxDate]=\"timKiemNangCaoObj.TuNgayDenNgay.endDate\">\n                    </app-datetimepicker>\n                    <app-datetimepicker id=\"NgayRaVien\" fxFlex=\"15%\" fxFlex.sm=\"15%\" \n                        label=\"Đến ngày\" class=\"mt-1 ml-2 on-header\" \n                        [(model)]=\"timKiemNangCaoObj.TuNgayDenNgay.endDate\" [minDate]=\"timKiemNangCaoObj.TuNgayDenNgay.startDate\">\n                    </app-datetimepicker>\n\n                    <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 5px;\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-3 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\" name=\"searchString\" \n                          [(ngModel)]=\"timKiemNangCaoObj.SearchString\" (keyup)=\"onKey($event)\" placeholder=\"Tìm kiếm...\" (ngModelChange)=\"searchChange($event)\" />\n                    </div>\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                      <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                  </button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"ml-1 mt-1 mb-1\"\n                        (click)=\"timKiemNangCao()\">Xem Báo Cáo</button>\n                </div>\n                <div fxFlex=\"20%\" fxFlex.sm=\"20%\" class=\"text-right\" style=\"margin: 5px;\">\n                  <!-- [disabled]=\"!coData\" -->\n                  <button  (click)=\"exportExcel()\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                      class=\"mr-2\">Xuất Excel</button>\n                  <!-- <button type=\"button\" color=\"primary\" mat-raised-button mat-button\n                        (click)=\"InBaoCao()\" style=\"float: right;\">In Báo cáo</button> -->\n                </div>\n            </div>\n        </ng-template>\n        <ng-template #ngayHetHanTemplate let-dataItem>\n            <span style=\"color: orange;\" class=\"badge badge-pill\">{{dataItem.NgayHetHanDisplay}}\n      </span>\n        </ng-template>\n    </vex-page-layout-content>\n</vex-page-layout>\n\n<ng-template #ngayTemplate let-dataItem>\n    <span>\n    {{dataItem.NgayDisplay}}\n  </span>\n</ng-template>\n\n<ng-template #thanhTienTemplate let-dataItem>\n    <span>\n    {{dataItem.ThanhTien | number:'0.2'}}\n  </span>\n</ng-template>\n\n<ng-template #tienMatTemplate let-dataItem>\n    <span>\n    {{dataItem.TienMat | number:'0.2'}}\n  </span>\n</ng-template>\n\n<ng-template #chuyenTemplate let-dataItem>\n    <span>\n    {{dataItem.ChuyenKhoan | number:'0.2'}}\n  </span>\n</ng-template>\n\n<ng-template #posTemplate let-dataItem>\n    <span>\n    {{dataItem.Pos | number:'0.2'}}\n  </span>\n</ng-template>\n\n<ng-template #congNoTemplate let-dataItem>\n    <span>\n    {{dataItem.CongNo | number:'0.2'}}\n  </span>\n</ng-template>\n\n<ng-template #soChungTuFooterTemplate let-dataItem>\n    <strong>\n    Tổng tiền:\n  </strong>\n</ng-template>\n\n<ng-template #thanhTienFooterTemplate let-dataItem>\n    <strong>\n    {{totalThanhTienKhoLe('ThanhTien') | number:'0.2'}}\n  </strong>\n</ng-template>\n\n<ng-template #tienMatFooterTemplate let-dataItem>\n    <strong>\n    {{totalThanhTienKhoLe('TienMat') | number:'0.2'}}\n  </strong>\n</ng-template>\n\n<ng-template #chuyenFooterTemplate let-dataItem>\n    <strong>\n    {{totalThanhTienKhoLe('ChuyenKhoan') | number:'0.2'}}\n  </strong>\n</ng-template>\n\n<ng-template #posFooterTemplate let-dataItem>\n    <strong>\n    {{totalThanhTienKhoLe('Pos') | number:'0.2'}}\n  </strong>\n</ng-template>\n\n<ng-template #congNoFooterTemplate let-dataItem>\n    <strong>\n    {{totalThanhTienKhoLe('CongNo') | number:'0.2'}}\n  </strong>\n</ng-template>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/doanh-thu-nha-thuoc/doanh-thu-nha-thuoc-list/doanh-thu-nha-thuoc-list.component.scss": 
        /*!***************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/doanh-thu-nha-thuoc/doanh-thu-nha-thuoc-list/doanh-thu-nha-thuoc-list.component.scss ***!
          \***************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2RvYW5oLXRodS1uaGEtdGh1b2MvZG9hbmgtdGh1LW5oYS10aHVvYy1saXN0L2RvYW5oLXRodS1uaGEtdGh1b2MtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/doanh-thu-nha-thuoc/doanh-thu-nha-thuoc-list/doanh-thu-nha-thuoc-list.component.ts": 
        /*!*************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/doanh-thu-nha-thuoc/doanh-thu-nha-thuoc-list/doanh-thu-nha-thuoc-list.component.ts ***!
          \*************************************************************************************************************************/
        /*! exports provided: DoanhThuNhaThuocListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoanhThuNhaThuocListComponent", function () { return DoanhThuNhaThuocListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _doanh_thu_nha_thuoc_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../doanh-thu-nha-thuoc.model */ "./src/app/modules/main/bao-cao/doanh-thu-nha-thuoc/doanh-thu-nha-thuoc.model.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11__);
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var DoanhThuNhaThuocListComponent = /** @class */ (function () {
                function DoanhThuNhaThuocListComponent(notificationService, authService, location, dialog, apiService, route) {
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.location = location;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.route = route;
                    this.gridColumns = [];
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11___default.a;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
                    this.baseRoute = '/bao-cao/doanh-thu-nha-thuoc';
                    this.dataDoanhThuNhaThuoc = [];
                    this.coData = false;
                    this.timKiemNangCaoObj = new _doanh_thu_nha_thuoc_model__WEBPACK_IMPORTED_MODULE_4__["Search"]();
                    this.strAdditionalSearchString = "";
                    this.sort = [{
                            field: 'Ngay',
                            dir: 'asc'
                        }];
                }
                DoanhThuNhaThuocListComponent.prototype.totalThanhTienKhoLe = function (field) {
                    switch (field) {
                        case 'ThanhTien':
                            return this.dataDoanhThuNhaThuoc.reduce(function (sum, item) { return sum + item.ThanhTien; }, 0);
                        case 'TienMat':
                            return this.dataDoanhThuNhaThuoc.reduce(function (sum, item) { return sum + item.TienMat; }, 0);
                        case 'ChuyenKhoan':
                            return this.dataDoanhThuNhaThuoc.reduce(function (sum, item) { return sum + item.ChuyenKhoan; }, 0);
                        case 'Pos':
                            return this.dataDoanhThuNhaThuoc.reduce(function (sum, item) { return sum + item.Pos; }, 0);
                        case 'CongNo':
                            return this.dataDoanhThuNhaThuoc.reduce(function (sum, item) { return sum + item.CongNo; }, 0);
                    }
                };
                DoanhThuNhaThuocListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].BaoCaoDoanhThuNhaThuoc;
                    this.gridColumns = [
                        { Field: 'SoChungTu', Title: 'Số Chứng Từ', Width: 127, Sortable: true, TemplateFooter: this.soChungTuFooterTemplate },
                        { Field: 'Ngay', Title: 'Ngày', Width: 120, Sortable: true, Template: this.ngayTemplate },
                        { Field: 'MaYTe', Title: 'Mã Y Tế', Width: 95, Sortable: true },
                        { Field: 'BenhNhan', Title: 'Tên Người Bệnh', Width: 130, Sortable: true },
                        { Field: 'NgayThangnamSinh', Title: 'Năm Sinh', Width: 88, Sortable: true },
                        { Field: 'GioiTinh', Title: 'Giới Tính', Width: 70, Sortable: true },
                        { Field: 'ThanhTien', Title: 'Thành Tiền', Width: 130, Sortable: true, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterTemplate },
                        { Field: 'TienMat', Title: 'Tiền Mặt', Width: 130, Sortable: true, Template: this.tienMatTemplate, TemplateFooter: this.tienMatFooterTemplate },
                        { Field: 'ChuyenKhoan', Title: 'Chuyển khoản', Width: 130, Sortable: true, Template: this.chuyenTemplate, TemplateFooter: this.chuyenFooterTemplate },
                        { Field: 'Pos', Title: 'Pos', Width: 130, Sortable: true, Template: this.posTemplate, TemplateFooter: this.posFooterTemplate },
                        { Field: 'CongNo', Title: 'Công Nợ', Width: 130, Sortable: true, Template: this.congNoTemplate, TemplateFooter: this.congNoFooterTemplate },
                        { Field: 'NguoiBan', Title: 'Người Bán', Width: 120, Sortable: true },
                        { Field: 'GhiChu', Title: 'Ghi Chú', Width: 100, Sortable: true },
                        { Field: 'ChiTietCongNo', Title: 'Chi tiết công nợ', Width: 120, Sortable: true },
                        { Field: 'SoHoaDon', Title: 'Số hóa đơn', Width: 100, Sortable: true },
                        { Field: 'LyDoHuyBanThuoc', Title: 'Lý do hủy bán thuốc', Width: 100, Sortable: true }
                    ];
                    var minDateTuNgay = new Date();
                    minDateTuNgay.setHours(0, 0, 0, 0);
                    var hasLocalSearchString = false;
                    if (this.route.snapshot.queryParams.holdQuery != undefined) {
                        var holdQuery = this.route.snapshot.queryParams.holdQuery;
                        if (holdQuery != null && holdQuery) {
                            var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].getItem("additionalSearchStringBaoCaoDoanhThuNhaThuocList");
                            if (additionalSearchString != null) {
                                this.timKiemNangCaoObj = JSON.parse(additionalSearchString);
                                if (this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != '') {
                                    this.timKiemNangCaoObj.TuNgayDenNgay.startDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgay.startDate);
                                }
                                if (this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != '') {
                                    this.timKiemNangCaoObj.TuNgayDenNgay.endDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgay.endDate);
                                }
                                this.gridChild.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
                                hasLocalSearchString = true;
                            }
                        }
                    }
                    if (!hasLocalSearchString) {
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].removeItem("additionalSearchStringBaoCaoDoanhThuNhaThuocList");
                        this.timKiemNangCaoObj.TuNgayDenNgay.startDate = minDateTuNgay;
                        this.timKiemNangCaoObj.TuNgayDenNgay.endDate = new Date();
                        this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.startDate, "mm/dd/yyyy HH:mm");
                        this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.endDate, "mm/dd/yyyy HH:mm");
                        var queryString = JSON.stringify(this.timKiemNangCaoObj);
                        this.gridChild.additionalSearchString = this.strAdditionalSearchString = queryString;
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].setItem('additionalSearchStringBaoCaoDoanhThuNhaThuocList', queryString);
                        //this.timKiemNangCao();
                    }
                };
                DoanhThuNhaThuocListComponent.prototype.timKiemNangCao = function () {
                    if (this.timKiemNangCaoObj.TuNgayDenNgay.endDate == null || this.timKiemNangCaoObj.TuNgayDenNgay.startDate == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        return;
                    }
                    this.location.replaceState(this.baseRoute + '?holdQuery=true');
                    if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.startDate != null) {
                        this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.startDate, "mm/dd/yyyy HH:mm");
                    }
                    else {
                        this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = null;
                    }
                    if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.endDate != null) {
                        this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.endDate, "mm/dd/yyyy HH:mm");
                    }
                    else {
                        this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = null;
                    }
                    var queryString = JSON.stringify(this.timKiemNangCaoObj);
                    this.gridChild._additionalSearchString = this.strAdditionalSearchString = queryString;
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].setItem('additionalSearchStringBaoCaoDoanhThuNhaThuocList', queryString);
                    this.gridChild.search();
                };
                DoanhThuNhaThuocListComponent.prototype.onKey = function (event) {
                    if (event.key === 'Enter') {
                        this.timKiemNangCao();
                    }
                };
                DoanhThuNhaThuocListComponent.prototype.searchChange = function (event) {
                    if (event != undefined && (event == null || event == "")) {
                        this.timKiemNangCao();
                    }
                };
                DoanhThuNhaThuocListComponent.prototype.clearSearch = function () {
                    this.timKiemNangCaoObj.SearchString = null;
                    this.timKiemNangCao();
                };
                DoanhThuNhaThuocListComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        _this.apiService.post('BaoCaoDoanhThuNhaThuoc/InDanhMucDaHetHan', _this.timKiemNangCaoObj).subscribe(function (resultData) {
                            resolve(resultData);
                        });
                    });
                };
                DoanhThuNhaThuocListComponent.prototype.exportExcel = function () {
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Process)) {
                        if (this.timKiemNangCaoObj.TuNgayDenNgay.endDate == null || this.timKiemNangCaoObj.TuNgayDenNgay.startDate == null) {
                            this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                            return;
                        }
                        self.showPopupLoadingData();
                        this.timKiemNangCaoObj.HostingName = window.location.protocol + "//" + window.location.host;
                        if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.startDate != null) {
                            this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.startDate, "mm/dd/yyyy HH:mm");
                        }
                        else {
                            this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = null;
                        }
                        if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.endDate != null) {
                            this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.endDate, "mm/dd/yyyy HH:mm");
                        }
                        else {
                            this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = null;
                        }
                        this.timKiemNangCao();
                        var query = self.gridChild._gridQueryInfo;
                        query.additionalSearchString = JSON.stringify(this.timKiemNangCaoObj);
                        self.apiService.postExportExcel('BaoCaoDoanhThuNhaThuoc/ExportBaoCaoDoanhThuNhaThuoc', self.gridChild._gridQueryInfo).subscribe(function (resultData) {
                            self.closePopupLoadingData();
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'BaoCaoDoanhThuNhaThuoc' + dateTimeNow.getFullYear() + '.xlsx');
                        }, function (err) {
                            self.notificationService.showError(err.Message);
                            self.closePopupLoadingData();
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DoanhThuNhaThuocListComponent.prototype.showPopupLoadingData = function () {
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                };
                DoanhThuNhaThuocListComponent.prototype.closePopupLoadingData = function () {
                    this.dialog.closeAll();
                };
                DoanhThuNhaThuocListComponent.prototype.GetListAsync = function (eventList) {
                    console.log('eventList', eventList);
                    this.dataDoanhThuNhaThuoc = eventList.Data.slice();
                    if (eventList && eventList.Data.length > 0) {
                        this.coData = true;
                    }
                    else {
                        this.coData = false;
                    }
                };
                DoanhThuNhaThuocListComponent.prototype.InBaoCao = function () {
                };
                return DoanhThuNhaThuocListComponent;
            }());
            DoanhThuNhaThuocListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_17__["Location"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DoanhThuNhaThuocListComponent.prototype, "bodyComponent", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"], { static: true })
            ], DoanhThuNhaThuocListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayTemplate', { static: true })
            ], DoanhThuNhaThuocListComponent.prototype, "ngayTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
            ], DoanhThuNhaThuocListComponent.prototype, "thanhTienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienFooterTemplate', { static: true })
            ], DoanhThuNhaThuocListComponent.prototype, "thanhTienFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tienMatTemplate', { static: true })
            ], DoanhThuNhaThuocListComponent.prototype, "tienMatTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tienMatFooterTemplate', { static: true })
            ], DoanhThuNhaThuocListComponent.prototype, "tienMatFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chuyenTemplate', { static: true })
            ], DoanhThuNhaThuocListComponent.prototype, "chuyenTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chuyenFooterTemplate', { static: true })
            ], DoanhThuNhaThuocListComponent.prototype, "chuyenFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('posTemplate', { static: true })
            ], DoanhThuNhaThuocListComponent.prototype, "posTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('posFooterTemplate', { static: true })
            ], DoanhThuNhaThuocListComponent.prototype, "posFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('congNoTemplate', { static: true })
            ], DoanhThuNhaThuocListComponent.prototype, "congNoTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soChungTuFooterTemplate', { static: true })
            ], DoanhThuNhaThuocListComponent.prototype, "soChungTuFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('congNoFooterTemplate', { static: true })
            ], DoanhThuNhaThuocListComponent.prototype, "congNoFooterTemplate", void 0);
            DoanhThuNhaThuocListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-doanh-thu-nha-thuoc-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./doanh-thu-nha-thuoc-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/doanh-thu-nha-thuoc/doanh-thu-nha-thuoc-list/doanh-thu-nha-thuoc-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./doanh-thu-nha-thuoc-list.component.scss */ "./src/app/modules/main/bao-cao/doanh-thu-nha-thuoc/doanh-thu-nha-thuoc-list/doanh-thu-nha-thuoc-list.component.scss")).default]
                })
            ], DoanhThuNhaThuocListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/doanh-thu-nha-thuoc/doanh-thu-nha-thuoc-routing.module.ts": 
        /*!************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/doanh-thu-nha-thuoc/doanh-thu-nha-thuoc-routing.module.ts ***!
          \************************************************************************************************/
        /*! exports provided: DoanhThuNhaThuocRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoanhThuNhaThuocRoutingModule", function () { return DoanhThuNhaThuocRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _doanh_thu_nha_thuoc_list_doanh_thu_nha_thuoc_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./doanh-thu-nha-thuoc-list/doanh-thu-nha-thuoc-list.component */ "./src/app/modules/main/bao-cao/doanh-thu-nha-thuoc/doanh-thu-nha-thuoc-list/doanh-thu-nha-thuoc-list.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            var routes = [
                {
                    path: '',
                    component: _doanh_thu_nha_thuoc_list_doanh_thu_nha_thuoc_list_component__WEBPACK_IMPORTED_MODULE_4__["DoanhThuNhaThuocListComponent"],
                    data: {
                        title: 'Báo Cáo Doanh Thu Nhà Thuốc',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].BaoCaoDoanhThuNhaThuoc,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    }
                }
            ];
            var DoanhThuNhaThuocRoutingModule = /** @class */ (function () {
                function DoanhThuNhaThuocRoutingModule() {
                }
                return DoanhThuNhaThuocRoutingModule;
            }());
            DoanhThuNhaThuocRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], DoanhThuNhaThuocRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/doanh-thu-nha-thuoc/doanh-thu-nha-thuoc.model.ts": 
        /*!***************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/doanh-thu-nha-thuoc/doanh-thu-nha-thuoc.model.ts ***!
          \***************************************************************************************/
        /*! exports provided: Search, SearchDateRange, DoanhThuNhaThuocVo */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function () { return Search; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDateRange", function () { return SearchDateRange; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoanhThuNhaThuocVo", function () { return DoanhThuNhaThuocVo; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Search = /** @class */ (function () {
                function Search(TuNgayDenNgay, SearchString, HostingName) {
                    if (TuNgayDenNgay === void 0) { TuNgayDenNgay = new SearchDateRange(); }
                    if (SearchString === void 0) { SearchString = null; }
                    if (HostingName === void 0) { HostingName = null; }
                    this.TuNgayDenNgay = TuNgayDenNgay;
                    this.SearchString = SearchString;
                    this.HostingName = HostingName;
                }
                return Search;
            }());
            var SearchDateRange = /** @class */ (function () {
                function SearchDateRange(startDate, endDate, TuNgay, DenNgay) {
                    if (startDate === void 0) { startDate = null; }
                    if (endDate === void 0) { endDate = null; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    this.startDate = startDate;
                    this.endDate = endDate;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                }
                return SearchDateRange;
            }());
            var DoanhThuNhaThuocVo = /** @class */ (function () {
                function DoanhThuNhaThuocVo(Id, ThanhTien, TienMat, ChuyenKhoan, Pos, CongNo) {
                    if (Id === void 0) { Id = null; }
                    if (ThanhTien === void 0) { ThanhTien = null; }
                    if (TienMat === void 0) { TienMat = null; }
                    if (ChuyenKhoan === void 0) { ChuyenKhoan = null; }
                    if (Pos === void 0) { Pos = null; }
                    if (CongNo === void 0) { CongNo = null; }
                    this.Id = Id;
                    this.ThanhTien = ThanhTien;
                    this.TienMat = TienMat;
                    this.ChuyenKhoan = ChuyenKhoan;
                    this.Pos = Pos;
                    this.CongNo = CongNo;
                }
                return DoanhThuNhaThuocVo;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/doanh-thu-nha-thuoc/doanh-thu-nha-thuoc.module.ts": 
        /*!****************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/doanh-thu-nha-thuoc/doanh-thu-nha-thuoc.module.ts ***!
          \****************************************************************************************/
        /*! exports provided: DoanhThuNhaThuocModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoanhThuNhaThuocModule", function () { return DoanhThuNhaThuocModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _doanh_thu_nha_thuoc_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doanh-thu-nha-thuoc-routing.module */ "./src/app/modules/main/bao-cao/doanh-thu-nha-thuoc/doanh-thu-nha-thuoc-routing.module.ts");
            /* harmony import */ var _doanh_thu_nha_thuoc_list_doanh_thu_nha_thuoc_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./doanh-thu-nha-thuoc-list/doanh-thu-nha-thuoc-list.component */ "./src/app/modules/main/bao-cao/doanh-thu-nha-thuoc/doanh-thu-nha-thuoc-list/doanh-thu-nha-thuoc-list.component.ts");
            /* harmony import */ var _doanh_thu_nha_thuoc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./doanh-thu-nha-thuoc.service */ "./src/app/modules/main/bao-cao/doanh-thu-nha-thuoc/doanh-thu-nha-thuoc.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            var DoanhThuNhaThuocModule = /** @class */ (function () {
                function DoanhThuNhaThuocModule() {
                }
                return DoanhThuNhaThuocModule;
            }());
            DoanhThuNhaThuocModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _doanh_thu_nha_thuoc_list_doanh_thu_nha_thuoc_list_component__WEBPACK_IMPORTED_MODULE_4__["DoanhThuNhaThuocListComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_16__["BreadcrumbsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_17__["SharedModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_20__["LayoutModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_8__["GridModule"],
                        _doanh_thu_nha_thuoc_routing_module__WEBPACK_IMPORTED_MODULE_3__["DoanhThuNhaThuocRoutingModule"]
                    ],
                    entryComponents: [],
                    providers: [
                        _doanh_thu_nha_thuoc_service__WEBPACK_IMPORTED_MODULE_5__["DoanhThuNhaThuocService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"], useClass: _doanh_thu_nha_thuoc_service__WEBPACK_IMPORTED_MODULE_5__["DoanhThuNhaThuocService"] },
                    ]
                })
            ], DoanhThuNhaThuocModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/doanh-thu-nha-thuoc/doanh-thu-nha-thuoc.service.ts": 
        /*!*****************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/doanh-thu-nha-thuoc/doanh-thu-nha-thuoc.service.ts ***!
          \*****************************************************************************************/
        /*! exports provided: DoanhThuNhaThuocService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoanhThuNhaThuocService", function () { return DoanhThuNhaThuocService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var DoanhThuNhaThuocService = /** @class */ (function (_super) {
                __extends(DoanhThuNhaThuocService, _super);
                function DoanhThuNhaThuocService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'BaoCaoDoanhThuNhaThuoc';
                    return _this;
                }
                return DoanhThuNhaThuocService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            DoanhThuNhaThuocService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            DoanhThuNhaThuocService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], DoanhThuNhaThuocService);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-doanh-thu-nha-thuoc-doanh-thu-nha-thuoc-module-es2015.js.map
//# sourceMappingURL=bao-cao-doanh-thu-nha-thuoc-doanh-thu-nha-thuoc-module-es5.js.map
//# sourceMappingURL=bao-cao-doanh-thu-nha-thuoc-doanh-thu-nha-thuoc-module-es5.js.map