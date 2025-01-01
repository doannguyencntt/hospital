(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list.component.html": 
        /*!*****************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list.component.html ***!
          \*****************************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                {Title:'Thống Kê', Path:''},\n                {Title:'Báo Cáo', Path:''},\n                {Title:'Kế Toán', Path:''},\n                {Title:'Tổng Hợp Doanh Thu Thai Sản Đã Sinh', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid [gridColumns]=\"gridColumns\" [gridDataSource]=\"gridView\" [documentType]=\"documentType\"\n                [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\"\n                [headerTemplate]=\"headerTemplate\" [checkboxAble]=\"false\" [showStt]=\"true\"\n                (extOnPageChange)=\"pageChange($event)\" (extOnSearch)=\"seachChange($event)\">\n            </app-grid>\n\n            <ng-template #tongTienSauChietKhauTemplate let-dataItem>\n                {{dataItem.TongTienSauChietKhau | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n\n            <ng-template #tongTienDichVuNgoaiGoiTemplate let-dataItem>\n                {{dataItem.TongTienDichVuNgoaiGoi | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n\n            <ng-template #tongSoTienChuaTruBHYTTemplate let-dataItem>\n                {{dataItem.TongSoTienChuaTruBHYT | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n\n            <ng-template #tongTienBHYTChiTraTemplate let-dataItem>\n                {{dataItem.TongTienBHYTChiTra | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n\n            <ng-template #thanhTienTemplate let-dataItem>\n                {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n\n            <ng-template #soTienDaThanhToanTemplate let-dataItem>\n                {{dataItem.SoTienDaThanhToan | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n\n            <ng-template #soTienConThieuTemplate let-dataItem>\n                {{dataItem.SoTienConThieu | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n\n            <ng-template #tongCongTemplateFooter let-dataItem>\n                <strong>\n                    Tổng cộng:\n                </strong>\n            </ng-template>\n\n            <ng-template #tongTienSauChietKhauSumTemplateFooter let-aggregates>\n                {{totalTongTienSauChietKhau() | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n\n            <ng-template #tongTienDichVuNgoaiGoiSumTemplateFooter let-aggregates>\n                {{totalTongTienDichVuNgoaiGoi() | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n\n            <ng-template #tongSoTienChuaTruBHYTSumTemplateFooter let-aggregates>\n                {{totalTongSoTienChuaTruBHYT() | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n\n            <ng-template #soTienDaThanhToanSumTemplateFooter let-aggregates>\n                {{totalSoTienDaThanhToan() | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n\n            <ng-template #soTienConThieuSumTemplateFooter let-aggregates>\n                {{totalSoTienConThieu() | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n        </div>\n\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n              <div class=\"h-15 mt-0\" fxFlex=\"25%\" style=\"padding: 3px !important\" >\n                <div class=\"bg-card rounded-full border\" fxFlex=\"100%\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                    fxLayoutAlign=\"start center\" style=\"margin-top: 0px\">\n                    <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                    <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                        type=\"search\" name=\"searchString\" [(ngModel)]=\"baoCaoSearch.StrQuery\"\n                        placeholder=\"Tìm kiếm Mã TN, Họ tên, Mã NB\" />\n                </div>\n                <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n                    <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                </button>\n              </div>\n              <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" id=\"TuNgayFormat\"\n                    [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\" class=\"mt-1 on-header mr-1\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" id=\"DenNgayFormat\"\n                    [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header mr-1\" label=\"Đến ngày\">\n                </app-datetimepicker>\n\n                <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                        (click)=\"exportExcel()\">Xuất Excel</button>\n                    <!-- <button [disabled]=\"!IsData\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                        class=\"mr-1 mt-2\" (click)=\"InBaoCao()\" style=\"float: right;\">In Báo cáo</button> -->\n                </div>\n\n                <span fxFlex></span>\n\n                <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button kendoTooltip\n                    title=\"Lọc cột\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                </button>\n\n                <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <div *ngFor=\"let column of gridColumns\">\n                        <button *ngIf=\"column.Title != ''\"\n                            class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                            <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                {{ column.Title }}\n                            </mat-checkbox>\n                        </button>\n                    </div>\n                </mat-menu>\n            </div>\n        </ng-template>\n    </vex-page-layout-content>\n</vex-page-layout>\n");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh/bao-cao-chi-tiet-mien-phi-tron-vien-routing.module.ts": 
        /*!****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh/bao-cao-chi-tiet-mien-phi-tron-vien-routing.module.ts ***!
          \****************************************************************************************************************************************/
        /*! exports provided: BaoCaoTongHopDoanhThuThaiSanDaSinhRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTongHopDoanhThuThaiSanDaSinhRoutingModule", function () { return BaoCaoTongHopDoanhThuThaiSanDaSinhRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _bao_cao_tong_hop_doanh_thu_thai_san_da_sinh_list_bao_cao_tong_hop_doanh_thu_thai_san_da_sinh_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list.component */ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _bao_cao_tong_hop_doanh_thu_thai_san_da_sinh_list_bao_cao_tong_hop_doanh_thu_thai_san_da_sinh_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent"],
                    data: {
                        title: 'Báo cáo tổng hợp doanh thu thai sản đã sinh',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoTongHopDoanhThuThaiSanDaSinh,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                }
            ];
            var BaoCaoTongHopDoanhThuThaiSanDaSinhRoutingModule = /** @class */ (function () {
                function BaoCaoTongHopDoanhThuThaiSanDaSinhRoutingModule() {
                }
                return BaoCaoTongHopDoanhThuThaiSanDaSinhRoutingModule;
            }());
            BaoCaoTongHopDoanhThuThaiSanDaSinhRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BaoCaoTongHopDoanhThuThaiSanDaSinhRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list.component.scss": 
        /*!***************************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list.component.scss ***!
          \***************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tdG9uZy1ob3AtZG9hbmgtdGh1LXRoYWktc2FuLWRhLXNpbmgvYmFvLWNhby10b25nLWhvcC1kb2FuaC10aHUtdGhhaS1zYW4tZGEtc2luaC1saXN0L2Jhby1jYW8tdG9uZy1ob3AtZG9hbmgtdGh1LXRoYWktc2FuLWRhLXNpbmgtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list.component.ts": 
        /*!*************************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list.component.ts ***!
          \*************************************************************************************************************************************************************************************************/
        /*! exports provided: BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent", function () { return BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _bao_cao_tong_hop_doanh_thu_thai_san_da_sinh_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../bao-cao-tong-hop-doanh-thu-thai-san-da-sinh.model */ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh.model.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12__);
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_13__);
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            var BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent = /** @class */ (function () {
                function BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent(apiService, dialog, notificationService, authService) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.baoCaoSearch = new _bao_cao_tong_hop_doanh_thu_thai_san_da_sinh_model__WEBPACK_IMPORTED_MODULE_11__["BaoCaoTongHopDoanhThuThaiSanDaSinhSearch"]();
                    this.inBaoCaoTongHopDoanhThuThaiSanDaSinh = new _bao_cao_tong_hop_doanh_thu_thai_san_da_sinh_model__WEBPACK_IMPORTED_MODULE_11__["InBaoCaoTongHopDoanhThuThaiSanDaSinh"]();
                    this.gridColumns = [];
                    this.gridDataSource = {
                        data: [],
                        total: 0
                    };
                    this.gridView = {
                        data: [],
                        total: 0
                    };
                    this.pageSize = 50;
                    this.skip = 0;
                    this.showGrid = false;
                    this.showPrintExport = false;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12___default.a;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_13___default.a;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControl"]();
                    this.SearchString = "";
                }
                BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].BaoCaoTongHopDoanhThuThaiSanDaSinh;
                    if (window.location.protocol == "http:") {
                        this.inBaoCaoTongHopDoanhThuThaiSanDaSinh.HostingName = "http://" + window.location.host;
                    }
                    else {
                        this.inBaoCaoTongHopDoanhThuThaiSanDaSinh.HostingName = "https://" + window.location.host;
                    }
                    this.gridColumns = [
                        { Field: "MaBN", Title: "Mã NB", Width: 100 },
                        { Field: "MaTN", Title: "Mã TN", Width: 100 },
                        { Field: "TenBN", Title: "Tên BN", Width: 200 },
                        { Field: "NgaySinhStr", Title: "Ngày sinh", Width: 100 },
                        { Field: "DiaChi", Title: "Địa chỉ", Width: 200 },
                        { Field: "NgayVaoVienStr", Title: "Ngày vào viện", Width: 140 },
                        { Field: "NgayRaVienStr", Title: "Ngày ra viện", Width: 140 },
                        { Field: "CachThucDe", Title: "Cách thức đẻ", Width: 140, TemplateFooter: this.tongCongTemplateFooter },
                        { Field: "TongTienSauChietKhau", Title: "Số tiền gói đăng ký", Width: 180, Template: this.tongTienSauChietKhauTemplate, TemplateFooter: this.tongTienSauChietKhauSumTemplateFooter },
                        { Field: "TongTienDichVuNgoaiGoi", Title: "Số tiền phát sinh ngoài gói", Width: 210, Template: this.tongTienDichVuNgoaiGoiTemplate, TemplateFooter: this.tongTienDichVuNgoaiGoiSumTemplateFooter },
                        { Field: "TongSoTienChuaTruBHYT", Title: "Tổng số tiền phải thanh toán", Width: 220, Template: this.tongSoTienChuaTruBHYTTemplate, TemplateFooter: this.tongSoTienChuaTruBHYTSumTemplateFooter },
                        { Field: "TongTienBHYTChiTra", Title: "Thành tiền BHYT chi trả", Width: 200, Template: this.tongTienBHYTChiTraTemplate },
                        { Field: "ThanhTien", Title: "Thành tiền BN phải trả", Width: 180, Template: this.thanhTienTemplate },
                        { Field: "SoTienDaThanhToan", Title: "Số tiền BN đã thanh toán", Width: 200, Template: this.soTienDaThanhToanTemplate, TemplateFooter: this.soTienDaThanhToanSumTemplateFooter },
                        { Field: "SoTienConThieu", Title: "Số tiền BN còn phải thanh toán", Width: 250, Template: this.soTienConThieuTemplate, TemplateFooter: this.soTienConThieuSumTemplateFooter },
                    ];
                    this.minDateTuNgay = new Date();
                    this.minDateTuNgay.setHours(0, 0, 0, 0);
                    var firstDayOfMonth = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1);
                    if (this.baoCaoSearch.TuNgayFormat == null) {
                        this.baoCaoSearch.TuNgayFormat = firstDayOfMonth;
                    }
                    if (this.baoCaoSearch.DenNgayFormat == null) {
                        this.baoCaoSearch.DenNgayFormat = new Date();
                        this.baoCaoSearch.DenNgayFormat.setHours(23, 59, 59);
                    }
                };
                BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent.prototype.totalTongTienSauChietKhau = function () {
                    if (this.gridDataSource.data != undefined) {
                        return this.gridDataSource.data.reduce(function (sum, item) { return sum + item.TongTienSauChietKhau; }, 0);
                    }
                };
                BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent.prototype.totalTongTienDichVuNgoaiGoi = function () {
                    if (this.gridDataSource.data != undefined) {
                        return this.gridDataSource.data.reduce(function (sum, item) { return sum + item.TongTienDichVuNgoaiGoi; }, 0);
                    }
                };
                BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent.prototype.totalTongSoTienChuaTruBHYT = function () {
                    if (this.gridDataSource.data != undefined) {
                        return this.gridDataSource.data.reduce(function (sum, item) { return sum + item.TongSoTienChuaTruBHYT; }, 0);
                    }
                };
                BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent.prototype.totalSoTienDaThanhToan = function () {
                    if (this.gridDataSource.data != undefined) {
                        return this.gridDataSource.data.reduce(function (sum, item) { return sum + item.SoTienDaThanhToan; }, 0);
                    }
                };
                BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent.prototype.totalSoTienConThieu = function () {
                    if (this.gridDataSource.data != undefined) {
                        return this.gridDataSource.data.reduce(function (sum, item) { return sum + item.SoTienConThieu; }, 0);
                    }
                };
                BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent.prototype.pageChange = function (event) {
                    this.skip = event;
                    // this.XemBaoCao();
                    var takeTo = +this.skip + +this.pageSize;
                    this.gridView.data = this.gridDataSource.data.slice(this.skip, takeTo);
                    this.gridView.total = this.gridDataSource.total;
                };
                BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent.prototype.seachChange = function (event) {
                    this.skip = 0;
                    this.XemBaoCao();
                };
                BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent.prototype.XemBaoCao = function () {
                    var _this = this;
                    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        return;
                    }
                    this.gridChild._isLoadingTotalPage = true;
                    this.gridChild._isLoading = true;
                    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
                    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
                    this.apiService.post("BaoCao/GetDataBaoCaoTongHopDoanhThuThaiSanDaSinhForGridAsync", this.baoCaoSearch).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            if (resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0) {
                                _this.showPrintExport = true;
                            }
                            _this.showGrid = true;
                            _this.gridDataSource.data = resultData.Data.slice();
                            _this.gridDataSource.total = _this.gridDataSource.data.length;
                            var takeTo = +_this.skip + +_this.pageSize;
                            _this.gridView.data = _this.gridDataSource.data.slice(_this.skip, takeTo);
                            _this.gridView.total = _this.gridDataSource.total;
                            _this.gridChild._isLoadingTotalPage = false;
                            _this.gridChild._isLoading = false;
                        }
                    });
                };
                BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent.prototype.exportExcel = function () {
                    var _this = this;
                    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        return;
                    }
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Process)) {
                        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang xuất excel...' }
                        });
                        this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
                        this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
                        this.apiService.postExportExcel("BaoCao/ExportBaoCaoTongHopDoanhThuThaiSanDaSinh", this.baoCaoSearch)
                            .subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoTongHopDoanhThuThaiSanDaSinh" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                return BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent;
            }());
            BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_15__["GridComponent"], { static: true })
            ], BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("tongTienSauChietKhauTemplate", { static: true })
            ], BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent.prototype, "tongTienSauChietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("tongTienDichVuNgoaiGoiTemplate", { static: true })
            ], BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent.prototype, "tongTienDichVuNgoaiGoiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("tongSoTienChuaTruBHYTTemplate", { static: true })
            ], BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent.prototype, "tongSoTienChuaTruBHYTTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("tongTienBHYTChiTraTemplate", { static: true })
            ], BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent.prototype, "tongTienBHYTChiTraTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienTemplate", { static: true })
            ], BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent.prototype, "thanhTienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("soTienDaThanhToanTemplate", { static: true })
            ], BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent.prototype, "soTienDaThanhToanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("soTienConThieuTemplate", { static: true })
            ], BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent.prototype, "soTienConThieuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("tongTienSauChietKhauSumTemplateFooter", { static: true })
            ], BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent.prototype, "tongTienSauChietKhauSumTemplateFooter", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("tongTienDichVuNgoaiGoiSumTemplateFooter", { static: true })
            ], BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent.prototype, "tongTienDichVuNgoaiGoiSumTemplateFooter", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("tongSoTienChuaTruBHYTSumTemplateFooter", { static: true })
            ], BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent.prototype, "tongSoTienChuaTruBHYTSumTemplateFooter", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("soTienDaThanhToanSumTemplateFooter", { static: true })
            ], BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent.prototype, "soTienDaThanhToanSumTemplateFooter", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("soTienConThieuSumTemplateFooter", { static: true })
            ], BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent.prototype, "soTienConThieuSumTemplateFooter", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("tongCongTemplateFooter", { static: true })
            ], BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent.prototype, "tongCongTemplateFooter", void 0);
            BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list.component.scss")).default]
                })
            ], BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh.model.ts": 
        /*!***************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh.model.ts ***!
          \***************************************************************************************************************************************/
        /*! exports provided: BaoCaoTongHopDoanhThuThaiSanDaSinhSearch, InBaoCaoTongHopDoanhThuThaiSanDaSinh */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTongHopDoanhThuThaiSanDaSinhSearch", function () { return BaoCaoTongHopDoanhThuThaiSanDaSinhSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBaoCaoTongHopDoanhThuThaiSanDaSinh", function () { return InBaoCaoTongHopDoanhThuThaiSanDaSinh; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var BaoCaoTongHopDoanhThuThaiSanDaSinhSearch = /** @class */ (function () {
                function BaoCaoTongHopDoanhThuThaiSanDaSinhSearch(FromDate, ToDate, TuNgayFormat, DenNgayFormat, StrQuery, Skip, Take, PageSize, SearchString, AdditionalSearchString, Sort) {
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    if (TuNgayFormat === void 0) { TuNgayFormat = null; }
                    if (DenNgayFormat === void 0) { DenNgayFormat = null; }
                    if (StrQuery === void 0) { StrQuery = ""; }
                    if (Skip === void 0) { Skip = 0; }
                    if (Take === void 0) { Take = 50; }
                    if (PageSize === void 0) { PageSize = 50; }
                    if (SearchString === void 0) { SearchString = ""; }
                    if (AdditionalSearchString === void 0) { AdditionalSearchString = ""; }
                    if (Sort === void 0) { Sort = []; }
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                    this.TuNgayFormat = TuNgayFormat;
                    this.DenNgayFormat = DenNgayFormat;
                    this.StrQuery = StrQuery;
                    this.Skip = Skip;
                    this.Take = Take;
                    this.PageSize = PageSize;
                    this.SearchString = SearchString;
                    this.AdditionalSearchString = AdditionalSearchString;
                    this.Sort = Sort;
                }
                return BaoCaoTongHopDoanhThuThaiSanDaSinhSearch;
            }());
            var InBaoCaoTongHopDoanhThuThaiSanDaSinh = /** @class */ (function () {
                function InBaoCaoTongHopDoanhThuThaiSanDaSinh(HostingName, FromDate, ToDate) {
                    if (HostingName === void 0) { HostingName = null; }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    this.HostingName = HostingName;
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                }
                return InBaoCaoTongHopDoanhThuThaiSanDaSinh;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh.module.ts": 
        /*!****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh.module.ts ***!
          \****************************************************************************************************************************************/
        /*! exports provided: BaoCaoTongHopDoanhThuThaiSanDaSinhModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTongHopDoanhThuThaiSanDaSinhModule", function () { return BaoCaoTongHopDoanhThuThaiSanDaSinhModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _bao_cao_tong_hop_doanh_thu_thai_san_da_sinh_list_bao_cao_tong_hop_doanh_thu_thai_san_da_sinh_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list.component */ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _bao_cao_chi_tiet_mien_phi_tron_vien_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bao-cao-chi-tiet-mien-phi-tron-vien-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh/bao-cao-chi-tiet-mien-phi-tron-vien-routing.module.ts");
            var BaoCaoTongHopDoanhThuThaiSanDaSinhModule = /** @class */ (function () {
                function BaoCaoTongHopDoanhThuThaiSanDaSinhModule() {
                }
                return BaoCaoTongHopDoanhThuThaiSanDaSinhModule;
            }());
            BaoCaoTongHopDoanhThuThaiSanDaSinhModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_bao_cao_tong_hop_doanh_thu_thai_san_da_sinh_list_bao_cao_tong_hop_doanh_thu_thai_san_da_sinh_list_component__WEBPACK_IMPORTED_MODULE_3__["BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_12__["GridModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                        _bao_cao_chi_tiet_mien_phi_tron_vien_routing_module__WEBPACK_IMPORTED_MODULE_13__["BaoCaoTongHopDoanhThuThaiSanDaSinhRoutingModule"]
                    ]
                })
            ], BaoCaoTongHopDoanhThuThaiSanDaSinhModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-module-es2015.js.map
//# sourceMappingURL=bao-cao-bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-module-es5.js.map
//# sourceMappingURL=bao-cao-bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-module-es5.js.map