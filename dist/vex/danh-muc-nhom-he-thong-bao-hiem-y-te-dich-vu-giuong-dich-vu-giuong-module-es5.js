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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["danh-muc-nhom-he-thong-bao-hiem-y-te-dich-vu-giuong-dich-vu-giuong-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-giuong/dich-vu-giuong-list/dich-vu-giuong-list.component.html": 
        /*!*******************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-giuong/dich-vu-giuong-list/dich-vu-giuong-list.component.html ***!
          \*******************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[{Title:'Danh Mục',Path:''},{Title:'Nhóm Hệ Thống',Path:''},{Title:'Bảo Hiểm Y Tế',Path:''},\n          {Title:'Dịch Vụ Giường',Path:'/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-giuong', Active: true}]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-giuong\" [gridColumns]=\"gridColumns\"\n                [documentType]=\"documentType\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [useAddDeault]=\"false\"\n                [showExportExcel]=\"true\" (extExportExcel)=\"exportExcel()\"\n                [checkboxAble]=\"false\" [detailTemplate]=\"detailTemplate\"></app-grid>\n        </div>\n        <ng-template #detailTemplate let-dataItem>\n            <app-grid baseRoute=\"danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-giuong\" [gridColumns]=\"gridChildColumns\"\n                [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                [urlGetData]=\"urlGetDataGridChild\" [urlGetTotalPage]=\"urlGetTotalPageGridChild\"\n                searchString=\"{{dataItem.Id}}\" [autoHeight]=\"true\" [pageable]=\"false\">\n            </app-grid>\n        </ng-template>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-giuong/dich-vu-giuong-list/dich-vu-giuong-list.component.scss": 
        /*!*****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-giuong/dich-vu-giuong-list/dich-vu-giuong-list.component.scss ***!
          \*****************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jhby1oaWVtLXktdGUvZGljaC12dS1naXVvbmcvZGljaC12dS1naXVvbmctbGlzdC9kaWNoLXZ1LWdpdW9uZy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-giuong/dich-vu-giuong-list/dich-vu-giuong-list.component.ts": 
        /*!***************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-giuong/dich-vu-giuong-list/dich-vu-giuong-list.component.ts ***!
          \***************************************************************************************************************************************/
        /*! exports provided: DichVuGiuongListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuGiuongListComponent", function () { return DichVuGiuongListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _dich_vu_giuong_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dich-vu-giuong.model */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-giuong/dich-vu-giuong.model.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var DichVuGiuongListComponent = /** @class */ (function () {
                function DichVuGiuongListComponent(route, apiService, dialog, notificationService) {
                    this.route = route;
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.expression = false;
                    this.gridColumns = [];
                    this.gridChildColumns = [];
                    this.urlGetDataGridChild = "DichVuGiuong/GetDataForGridChildAsync";
                    this.urlGetTotalPageGridChild = "DichVuGiuong/GetTotalPageForGridChildAsync";
                }
                DichVuGiuongListComponent.prototype.ngOnInit = function () {
                    this.thongTinGiaGiuong = new _dich_vu_giuong_model__WEBPACK_IMPORTED_MODULE_6__["DichVuGiuongThongTinGia"]();
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhMucDichVuGiuong;
                    this.gridColumns = [
                        { Field: "Ma", Title: "Mã", Width: 150, Sortable: true },
                        { Field: "MaTT37", Title: "Mã TT37", Width: 150, Sortable: true },
                        { Field: "Ten", Title: "Tên", MinWidth: 250, Sortable: true },
                        { Field: "Khoa", Title: "Khoa", Width: 180, Sortable: true },
                        { Field: "HangBenhVienDisplay", Title: "Hạng Bệnh Viện", Width: 180, Sortable: true },
                        { Field: "MoTa", Title: "Mô tả", Width: 300 },
                    ];
                    this.gridChildColumns = [
                        { Field: "GiaDisplay", Title: "Giá", Width: 150, Sortable: true },
                        { Field: "TuNgayDisplay", Title: "Từ ngày", Width: 130, Sortable: true },
                        { Field: "DenNgayDisplay", Title: "Đến ngày", Width: 130, Sortable: true },
                        { Field: "MoTa", Title: "Mô tả", MinWidth: 200, Sortable: true },
                        { Field: "HieuLucDisplay", Title: "Hiệu lực", Width: 150, Sortable: true }
                    ];
                };
                DichVuGiuongListComponent.prototype.exportExcel = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    this.apiService.postExportExcel("DichVuGiuong/ExportDichVuGiuong", this.gridChild._gridQueryInfo).subscribe(function (res) {
                        var dateTimeNow = new Date();
                        src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "DichVuGiuong" + dateTimeNow.getFullYear() + ".xlsx");
                        _this.dialog.closeAll();
                    }, function (err) {
                        _this.notificationService.showError(err.Message);
                        _this.dialog.closeAll();
                    });
                };
                return DichVuGiuongListComponent;
            }());
            DichVuGiuongListComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"], { static: false })
            ], DichVuGiuongListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hieuLucTemplate', { static: true })
            ], DichVuGiuongListComponent.prototype, "hieuLucTemplate", void 0);
            DichVuGiuongListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dich-vu-giuong-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dich-vu-giuong-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-giuong/dich-vu-giuong-list/dich-vu-giuong-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dich-vu-giuong-list.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-giuong/dich-vu-giuong-list/dich-vu-giuong-list.component.scss")).default]
                })
            ], DichVuGiuongListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-giuong/dich-vu-giuong-routing.module.ts": 
        /*!*******************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-giuong/dich-vu-giuong-routing.module.ts ***!
          \*******************************************************************************************************************/
        /*! exports provided: DichVuGiuongRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuGiuongRoutingModule", function () { return DichVuGiuongRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _dich_vu_giuong_list_dich_vu_giuong_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dich-vu-giuong-list/dich-vu-giuong-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-giuong/dich-vu-giuong-list/dich-vu-giuong-list.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            var routes = [
                {
                    path: '',
                    component: _dich_vu_giuong_list_dich_vu_giuong_list_component__WEBPACK_IMPORTED_MODULE_3__["DichVuGiuongListComponent"],
                    data: {
                        title: 'Danh mục dịch vụ giường',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhMucDichVuGiuong,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
                },
            ];
            var DichVuGiuongRoutingModule = /** @class */ (function () {
                function DichVuGiuongRoutingModule() {
                }
                return DichVuGiuongRoutingModule;
            }());
            DichVuGiuongRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], DichVuGiuongRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-giuong/dich-vu-giuong.module.ts": 
        /*!***********************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-giuong/dich-vu-giuong.module.ts ***!
          \***********************************************************************************************************/
        /*! exports provided: DichVuGiuongModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuGiuongModule", function () { return DichVuGiuongModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _dich_vu_giuong_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dich-vu-giuong-routing.module */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-giuong/dich-vu-giuong-routing.module.ts");
            /* harmony import */ var _dich_vu_giuong_list_dich_vu_giuong_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dich-vu-giuong-list/dich-vu-giuong-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-giuong/dich-vu-giuong-list/dich-vu-giuong-list.component.ts");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _dich_vu_giuong_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dich-vu-giuong.service */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-giuong/dich-vu-giuong.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            var DichVuGiuongModule = /** @class */ (function () {
                function DichVuGiuongModule() {
                }
                return DichVuGiuongModule;
            }());
            DichVuGiuongModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_dich_vu_giuong_list_dich_vu_giuong_list_component__WEBPACK_IMPORTED_MODULE_4__["DichVuGiuongListComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                        _dich_vu_giuong_routing_module__WEBPACK_IMPORTED_MODULE_3__["DichVuGiuongRoutingModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__["GridModule"]
                    ],
                    providers: [
                        _dich_vu_giuong_service__WEBPACK_IMPORTED_MODULE_15__["DichVuGiuongService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"], useClass: _dich_vu_giuong_service__WEBPACK_IMPORTED_MODULE_15__["DichVuGiuongService"] },
                    ]
                })
            ], DichVuGiuongModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-giuong/dich-vu-giuong.service.ts": 
        /*!************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-giuong/dich-vu-giuong.service.ts ***!
          \************************************************************************************************************/
        /*! exports provided: DichVuGiuongService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuGiuongService", function () { return DichVuGiuongService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var DichVuGiuongService = /** @class */ (function (_super) {
                __extends(DichVuGiuongService, _super);
                function DichVuGiuongService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'DichVuGiuong';
                    return _this;
                }
                return DichVuGiuongService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            DichVuGiuongService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            DichVuGiuongService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DichVuGiuongService);
            /***/ 
        })
    }]);
//# sourceMappingURL=danh-muc-nhom-he-thong-bao-hiem-y-te-dich-vu-giuong-dich-vu-giuong-module-es2015.js.map
//# sourceMappingURL=danh-muc-nhom-he-thong-bao-hiem-y-te-dich-vu-giuong-dich-vu-giuong-module-es5.js.map
//# sourceMappingURL=danh-muc-nhom-he-thong-bao-hiem-y-te-dich-vu-giuong-dich-vu-giuong-module-es5.js.map