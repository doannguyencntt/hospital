(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nhap-xuat-kiem-soat-nhiem-khuan-yeu-cau-linh-ksnk-danh-sach-ksnk-can-bu-danh-sach-ksnk-can-bu-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/danh-sach-ksnk-can-bu/danh-sach-ksnk-can-bu.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/danh-sach-ksnk-can-bu/danh-sach-ksnk-can-bu.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs  [crumbs]=\"[\n            {Title:'Nhập xuất',Path:''}\n            ,{Title:'KSNK',Path:''}\n            ,{Title:'Dự trù lĩnh',Path:''}\n            ,{Title:'Yêu cầu lĩnh KSNK',Path:'/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk'}\n            ,{Title:'KSNK cần bù',Path:'',Active:true}\n            ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"\" #grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                [lazyLoadPage]=\"false\" [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\" heightToolbar=\"150\"\n                [checkboxAble]=\"false\" [pageable]=\"false\"  [detailTemplate]=\"detailTemplate\" [groups]=\"groups\"\n                [urlGetData]=\"urlGetDataGrid\" [additionalSearchString]=\"additionalSearchString\" (extOnDataBound)=\"extOnDataBound($event)\">\n            </app-grid>\n      \n            <ng-template #detailTemplate let-dataItem>                \n                <app-grid #gridChildLevel1 [gridColumns]=\"gridChildLevel1Columns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" pageSize=\"5\" [groups]=\"groupChilds\"\n                    [urlGetData]=\"urlGetDataGridChildLevel1\" [urlGetTotalPage]=\"urlGetTotalPageGridChildLevel1\"\n                    additionalSearchString=\"{'KhoLinhId':{{dataItem.KhoLinhId}},'KhoBuId':{{dataItem.KhoBuId}}}\" [lazyLoadPage]=\"true\" [autoHeight]=\"true\" [detailTemplate]=\"detailChildTemplate\">\n                </app-grid>\n            </ng-template>\n            <ng-template #detailChildTemplate let-dataItem1>\n                <app-grid [gridColumns]=\"gridChildLevel2Columns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" pageSize=\"5\"\n                    [urlGetData]=\"urlGetDataGridChildLevel2\" [urlGetTotalPage]=\"urlGetTotalPageGridChildLevel2\"\n                    additionalSearchString=\"{'KhoLinhId':{{dataItem1.KhoLinhId}},'KhoBuId':{{dataItem1.KhoBuId}},'VatTuBenhVienId':{{dataItem1.VatTuBenhVienId}},'LaBHYT':{{dataItem1.LaBHYT}},'LoaiDuocPhamHayVatTu':{{dataItem1.LoaiDuocPhamHayVatTu}}}\" [lazyLoadPage]=\"true\" [autoHeight]=\"true\">\n                </app-grid>\n            </ng-template>\n        <ng-template #headerTemplate>\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">            \n               \n                <app-combobox id=\"linhTuKho\" fxFlex=\"15%\" fxFlex.sm=\"25%\" url=\"YeuCauLinhKSNK/GetTatCakhoLinhTuCuaNhanVienLoginLinhBu\"\n                    [(model)]=\"kSNKCanBuSearch.KhoLinhId\" label=\"Lĩnh từ kho\" class=\"mt-1 on-header\"\n                    (modelChange)=\"search($event)\">\n                </app-combobox>\n                <app-combobox id=\"linhVeKho\" fxFlex=\"15%\" fxFlex.sm=\"25%\"  class=\"mt-1 on-header\"\n                    [(model)]=\"kSNKCanBuSearch.KhoBuId\" url=\"YeuCauLinhKSNK/GetTatCaKhoLinhVeCuaNhanVienLoginLinhBu\" label=\"Lĩnh về kho\"\n                    (modelChange)=\"search($event)\">\n                </app-combobox>\n                \n                <!-- <button (click)=\"exportExcel()\" style=\"margin-left: auto;\" mat-icon-button\n                    kendoTooltip title=\"Xuất Excel\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                </button>       -->\n            </div>\n        </ng-template>   \n        \n        <ng-template #actionTemplate  let-dataItem>\n            <button *ngIf=\"dataItem.KhoLinhId>0\" (click)=\"taoPhieuLinh(dataItem)\" color=\"primary\"  mat-raised-button  type=\"button\">\n                    Tạo phiếu lĩnh\n                </button> \n        </ng-template> \n\n        <ng-template #actionChildTemplate  let-dataItem>\n            <button *ngIf=\"dataItem.KhongLinhBu!=true\" (click)=\"khongBu(dataItem)\" color=\"primary\"  mat-raised-button  type=\"button\">\n                    Không bù\n                </button> \n        </ng-template> \n        \n        <ng-template #STTTemplate let-rowIndex=\"rowIndex\">\n            {{rowIndex + 1}}\n        </ng-template>\n        \n    <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n        <strong>{{value}}</strong>\n    </ng-template>\n    \n    <ng-template #slYeuCauTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <app-textbox fxFlex=\"80%\" [(model)]=\"dataItem.SoLuongTon\" class=\"no-label\" [disabled]=\"true\">\n        </app-textbox>\n    </ng-template>\n    <ng-template #loaiTemplate  let-dataItem>\n        <span *ngIf=\"dataItem.LoaiDuocPhamHayVatTu == true\">Dược phẩm</span>\n        <span *ngIf=\"dataItem.LoaiDuocPhamHayVatTu == false\">Vật tư</span>\n    </ng-template> \n    </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/danh-sach-ksnk-can-bu/danh-sach-ksnk-can-bu-routing.module.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/danh-sach-ksnk-can-bu/danh-sach-ksnk-can-bu-routing.module.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: DanhSachKSNKCanBuRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachKSNKCanBuRoutingModule", function() { return DanhSachKSNKCanBuRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _danh_sach_ksnk_can_bu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./danh-sach-ksnk-can-bu.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/danh-sach-ksnk-can-bu/danh-sach-ksnk-can-bu.component.ts");







const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _danh_sach_ksnk_can_bu_component__WEBPACK_IMPORTED_MODULE_6__["DanhSachKSNKCanBuComponent"],
        data: {
            title: 'Danh Sách KSNK Cần Bù',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].TaoYeuCauLinhBuKSNK,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    }
];
let DanhSachKSNKCanBuRoutingModule = class DanhSachKSNKCanBuRoutingModule {
};
DanhSachKSNKCanBuRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DanhSachKSNKCanBuRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/danh-sach-ksnk-can-bu/danh-sach-ksnk-can-bu.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/danh-sach-ksnk-can-bu/danh-sach-ksnk-can-bu.component.scss ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL3lldS1jYXUtbGluaC1rc25rL2Rhbmgtc2FjaC1rc25rLWNhbi1idS9kYW5oLXNhY2gta3Nuay1jYW4tYnUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/danh-sach-ksnk-can-bu/danh-sach-ksnk-can-bu.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/danh-sach-ksnk-can-bu/danh-sach-ksnk-can-bu.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: DanhSachKSNKCanBuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachKSNKCanBuComponent", function() { return DanhSachKSNKCanBuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../yeu-cau-linh-ksnk.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/yeu-cau-linh-ksnk.model.ts");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
















let DanhSachKSNKCanBuComponent = class DanhSachKSNKCanBuComponent {
    constructor(dialog, router, apiService, authService, notificationService, cd) {
        this.dialog = dialog;
        this.router = router;
        this.apiService = apiService;
        this.authService = authService;
        this.notificationService = notificationService;
        this.cd = cd;
        this.gridColumns = [];
        this.gridChildLevel1Columns = [];
        this.gridChildLevel2Columns = [];
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.popupLoadingData = null;
        this.validationErrors = null;
        this.additionalSearchString = "";
        this.urlGetDataGrid = "YeuCauLinhKSNK/GetDanhSachKSNKCanBuForGrid";
        this.urlGetDataGridChildLevel1 = "YeuCauLinhKSNK/GetDanhSachChiTietKSNKCanBuForGrid";
        this.urlGetDataGridChildLevel2 = "YeuCauLinhKSNK/GetDanhSachChiTietYeuCauTheoKSNKCanBuForGrid";
        this.urlGetTotalPageGridChildLevel1 = "YeuCauLinhKSNK/GetTotalPageDanhSachChiTietKSNKCanBuForGrid";
        this.urlGetTotalPageGridChildLevel2 = "YeuCauLinhKSNK/GetTotalPageDanhSachChiTietYeuCauTheoKSNKCanBuForGrid";
        this.groups = [{ field: 'KhoLinh' }];
        this.groupChilds = [{ field: 'Nhom' }];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].TaoYeuCauLinhBuKSNK;
        this.gridColumns = [
            { Field: "STT", Title: "#", Width: 50, Template: this.STTTemplate },
            { Field: "KhoLinh", Title: "Kho lĩnh", Width: 200, Hidden: true },
            { Field: "KhoBu", Title: "Kho bù", MinWidth: 120 },
            { Field: "Action", Title: "", Width: 120, Template: this.actionTemplate }
        ];
        this.gridChildLevel1Columns = [
            { Field: "STT", Title: "#", Width: 25, Template: this.STTTemplate },
            { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "LoaiDuocPhamHayVatTu", Title: "Loại", Width: 180, ShowTooltip: true, Template: this.loaiTemplate },
            { Field: "TenVatTu", Title: "Tên vật tư", Width: 180, ShowTooltip: true },
            { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
            { Field: "HangSanXuat", Title: "Hãng SX", Width: 180 },
            { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
            { Field: "SoLuongTon", Title: "SL Tồn", Width: 100 },
            { Field: "SoLuongDaLinhBu", Title: "SL đã bù", Width: 100 },
            { Field: "SoLuongCanBu", Title: "SL cần bù", Width: 100 },
            { Field: "Action", Title: "", Width: 100, Template: this.actionChildTemplate },
        ];
        this.gridChildLevel2Columns = [
            { Field: "STT", Title: "#", Width: 25 },
            { Field: "MaTN", Title: "Mã TN", Width: 120, Sortable: true },
            { Field: "MaBN", Title: "Mã NB", Width: 120 },
            { Field: "HoTen", Title: "Họ tên", Width: 180 },
            { Field: "DVKham", Title: "DV Khám", Width: 180 },
            { Field: "BSKeToa", Title: "BS kê toa", Width: 150 },
            { Field: "NgayKe", Title: "Ngày kê", Width: 170 },
            { Field: "SLDaBu", Title: "SL đã bù", Width: 100 },
            { Field: "SL", Title: "SL cần bù", Width: 160 },
        ];
        this.kSNKCanBuSearch = new _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_10__["KSNKCanBuSearch"]();
        this.additionalSearchString = "{'KhoLinhId':" + (this.kSNKCanBuSearch.KhoLinhId != undefined ? this.kSNKCanBuSearch.KhoLinhId : null) + ",'KhoBuId':" + (this.kSNKCanBuSearch.KhoBuId != undefined ? this.kSNKCanBuSearch.KhoBuId : null) + "}";
    }
    search($event) {
        this.additionalSearchString = "{'KhoLinhId':" + (this.kSNKCanBuSearch.KhoLinhId != undefined ? this.kSNKCanBuSearch.KhoLinhId : null) + ",'KhoBuId':" + (this.kSNKCanBuSearch.KhoBuId != undefined ? this.kSNKCanBuSearch.KhoBuId : null) + "}";
        this.grid._additionalSearchString = this.additionalSearchString;
        this.grid.setDataSource();
    }
    extOnDataBound(dataSource) {
    }
    taoPhieuLinh(dataItem) {
        this.router.navigate(['/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/tao-phieu-linh-ksnk-bu'], { queryParams: { KhoLinhId: dataItem.KhoLinhId, KhoBuId: dataItem.KhoBuId } });
    }
    loadingPage() {
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang lưu dữ liệu..." },
        });
    }
    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    khongBu(dataItem) {
        //console.log(dataItem)
        var self = this;
        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmComponent"], {
            disableClose: false,
            width: "500px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có chắc chắn muốn không  bù cho KSNK này không ?",
            },
        }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Update)) {
                    self.loadingPage();
                    let queryStringSearch = JSON.stringify(dataItem.YeuCauLinhVatTuInFos);
                    self.apiService.post("YeuCauLinhKSNK/KhongBuKSNK?yeuCauLinhVatTuIdstring=" + queryStringSearch).subscribe(() => {
                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                        dataItem.KhongLinhBu = true;
                        self.gridChildLevel1.search();
                        self.closePopupLoadingData();
                    }, (err) => {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                        self.closePopupLoadingData();
                    });
                }
                else {
                    self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].UnAuthorizedMessage);
                }
            }
        });
    }
};
DanhSachKSNKCanBuComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('STTTemplate', { static: true })
], DanhSachKSNKCanBuComponent.prototype, "STTTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], DanhSachKSNKCanBuComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], DanhSachKSNKCanBuComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__["GridComponent"], { static: false })
], DanhSachKSNKCanBuComponent.prototype, "gridChildLevel1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionChildTemplate', { static: true })
], DanhSachKSNKCanBuComponent.prototype, "actionChildTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiTemplate', { static: true })
], DanhSachKSNKCanBuComponent.prototype, "loaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('grid', { static: true })
], DanhSachKSNKCanBuComponent.prototype, "grid", void 0);
DanhSachKSNKCanBuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-danh-sach-ksnk-can-bu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./danh-sach-ksnk-can-bu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/danh-sach-ksnk-can-bu/danh-sach-ksnk-can-bu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./danh-sach-ksnk-can-bu.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/danh-sach-ksnk-can-bu/danh-sach-ksnk-can-bu.component.scss")).default]
    })
], DanhSachKSNKCanBuComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/danh-sach-ksnk-can-bu/danh-sach-ksnk-can-bu.module.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/danh-sach-ksnk-can-bu/danh-sach-ksnk-can-bu.module.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: DanhSachKSNKCanBuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachKSNKCanBuModule", function() { return DanhSachKSNKCanBuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _danh_sach_ksnk_can_bu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./danh-sach-ksnk-can-bu.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/danh-sach-ksnk-can-bu/danh-sach-ksnk-can-bu.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _danh_sach_ksnk_can_bu_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./danh-sach-ksnk-can-bu-routing.module */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/danh-sach-ksnk-can-bu/danh-sach-ksnk-can-bu-routing.module.ts");














let DanhSachKSNKCanBuModule = class DanhSachKSNKCanBuModule {
};
DanhSachKSNKCanBuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _danh_sach_ksnk_can_bu_component__WEBPACK_IMPORTED_MODULE_11__["DanhSachKSNKCanBuComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
            _danh_sach_ksnk_can_bu_routing_module__WEBPACK_IMPORTED_MODULE_13__["DanhSachKSNKCanBuRoutingModule"]
        ],
        entryComponents: [
            src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmComponent"]
        ]
    })
], DanhSachKSNKCanBuModule);



/***/ })

}]);
//# sourceMappingURL=nhap-xuat-kiem-soat-nhiem-khuan-yeu-cau-linh-ksnk-danh-sach-ksnk-can-bu-danh-sach-ksnk-can-bu-module-es2015.js.map