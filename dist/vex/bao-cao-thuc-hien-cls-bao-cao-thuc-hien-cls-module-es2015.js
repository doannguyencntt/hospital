(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-thuc-hien-cls-bao-cao-thuc-hien-cls-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/thuc-hien-cls/bao-cao-thuc-hien-cls-list/bao-cao-thuc-hien-cls-list.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/thuc-hien-cls/bao-cao-thuc-hien-cls-list/bao-cao-thuc-hien-cls-list.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                {Title:'Báo Cáo',Path:''}\n                , {Title:'Thực Hiện Cận Lâm Sàng',Path:'/bao-cao/thuc-hien-cls',Active:true}\n                ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n\n                <!-- <app-daterangepicker id=\"tuNgayDenNgay\" fxFlex=\"300px\" fxFlex.sm=\"auto\" class=\"mt-1 ml-2 on-header\"\n                    [(model)]=\"baoCaoClsBacSi.RangeFromDate\" label=\"Từ ngày - đến ngày\">\n                </app-daterangepicker> -->\n\n                <app-datetimepicker fxFlex=\"245px\" [(model)]=\"baoCaoClsBacSi.ThoiDiemTiepNhanTuFormat\" #tiepnhantu\n                    id=\"ThoiDiemTiepNhanTuFormat\" label=\"Từ ngày\" class=\"mt-1 ml-2 on-header\">\n                </app-datetimepicker>\n                <app-datetimepicker fxFlex=\"245px\" [(model)]=\"baoCaoClsBacSi.ThoiDiemTiepNhanDenFormat\" #tiepnhanden\n                    id=\"ThoiDiemTiepNhanDenFormat\" label=\"Đến ngày\" class=\"mt-1 ml-2 on-header\">\n                </app-datetimepicker>\n\n                <app-combobox id=\"khoaphong\" fxFlex=\"15%\" fxFlex.sm=\"25%\" [(model)]=\"baoCaoClsBacSi.KhoaId\" label=\"Khoa\"\n                    url=\"BaoCaoThucHienCls/KhoaPhongs\" popupSettings=\"\" style=\"margin-left: 5px;\"\n                    class=\"mt-1 ml-2 on-header\">\n                </app-combobox>\n\n                <app-combobox fxFlex=\"15%\" fxFlex.sm=\"14%\" id=\"NguoiNhapId\" label=\"Bác sĩ kết luận\"\n                    class=\"mt-1 ml-2 on-header\" url=\"NhanVien/GetListLookupNhanVien\"\n                    [(model)]=\"baoCaoClsBacSi.BacSiKetLuanId\">\n                </app-combobox>\n\n                <div fxFlex=\"35%\" fxFlex.sm=\"70%\" class=\"pb-0\">\n                    <!-- <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button> -->\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XuatBaoCao()\">Xuất Excel</button>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <!-- <div class=\"card overflow-auto -mt-15\">\n            <app-grid fxFlex=\"100%\" class=\"k-grid-border\" [gridColumns]=\"gridColumns\" [useAddDeault]=\"false\"\n                [urlGetData]=\"urlGetData\" [urlGetTotalPage]=\"urlGetTotalData\" [HideHeader]=\"true\" \n                [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                [documentType]=\"documentType\" [lazyLoadPage]=\"true\" [autoHeight]=\"true\"\n                [headerTemplate]=\"headerTemplate\" [detailTemplate]=\"detailTemplate\" [pageable]=\"false\">\n            </app-grid>\n\n            <ng-template #detailTemplate let-dataItem>\n                <app-grid class=\"k-grid-border\" [gridColumns]=\"gridColumnsDetail\" [useAddDeault]=\"false\"\n                    [useActionDefault]=\"false\" [useHeaderDefault]=\"false\"\n                    [documentType]=\"documentType\" [showStt]=\"true\" [urlGetData]=\"urlGetDataChild\"\n                    [urlGetTotalPage]=\"urlGetTotalDataChild\" searchString=\"{{dataItem.BacSiKetLuanId}}\"\n                    [checkboxAble]=\"false\" [groups]=\"groups\" [lazyLoadPage]=\"true\" [autoHeight]=\"true\"\n                    style=\"width: 1px;\" [pageable]=\"false\">\n                </app-grid>\n            </ng-template>\n        </div>\n\n        <ng-template #tenGoiTemplate let-dataItem>\n            <strong>{{dataItem.TenBacSiKetLuan}}</strong>\n        </ng-template>\n\n        <ng-template #soBSTemplate let-dataItem>\n            <div style=\"text-align:right\">\n                <strong>{{dataItem.SoBacSiKetLuan}}</strong>\n            </div>\n\n        </ng-template>\n\n        <ng-template #nhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n            <strong>{{value}}</strong>\n        </ng-template>\n\n        <ng-template #ngayThucHienTemplate let-dataItem>\n            {{dataItem.NgayThucHienDisplay}}\n        </ng-template>\n\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar px-0 h-15 border-b sticky left-0\">\n                <div fxFlex=\"80%\" fxFlex.sm=\"80%\">\n                    <app-daterangepicker id=\"tuNgayDenNgay\" fxFFlex=\"300px\" fxFlex.sm=\"auto\" class=\"mt-1 ml-2 on-header\"\n                        [(model)]=\"searchQuery.FromToDate\" label=\"Từ ngày - đến ngày\" (modelChange)=\"onAdvanceSearch()\">\n                    </app-daterangepicker>\n\n                    <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 5px;\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-3 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"searchQuery.Searchterm\"\n                            (keyup)=\"onKey($event)\" placeholder=\"Tìm kiếm...\" (ngModelChange)=\"searchChange()\" />\n                    </div>\n                </div>\n                <div fxFlex=\"20%\" fxFlex.sm=\"20%\" class=\"text-right\" style=\"margin: 5px;\">\n                    <button (click)=\"XuatBaoCao()\" type=\"button\" color=\"primary\" mat-raised-button mat-button>Xuất\n                        Excel</button>\n                    <app-print-form textPrint=\"In Báo Cáo\" type=\"PDF\" [bodyComponent]=\"this\" [showInMenuItem]=\"false\"\n                        [showIconPrint]=\"false\">\n                    </app-print-form>\n                </div>\n            </div>\n        </ng-template>\n        <ng-template #ngayHetHanTemplate let-dataItem>\n            <span style=\"color: orange;\" class=\"badge badge-pill\">{{dataItem.NgayHetHanDisplay}}\n            </span>\n        </ng-template> -->\n    </vex-page-layout-content>\n</vex-page-layout>\n\n\n<ng-template #thoiGianChiDinhTemplate let-dataItem>\n    <span>\n        {{dataItem.ThoiGianChiDinhDisplay}}\n    </span>\n</ng-template>\n\n<ng-template #ngaySinhTemplate let-dataItem>\n    <span>\n        {{dataItem.NgaySinhDisplay}}\n    </span>\n</ng-template>\n\n<ng-template #gioiTinhTemplate let-dataItem>\n    <span>\n        {{dataItem.GioiTinh == null ? \"\" : (dataItem.GioiTinh == 1 ? \"Nam\" : \"Nữ\")}}\n    </span>\n</ng-template>\n\n<ng-template #thoiGianCoKqTemplate let-dataItem>\n    <span>\n        {{dataItem.ThoiGianCoKqDisplay}}\n    </span>\n</ng-template>\n\n<ng-template #nhomDvHeaderTemplate let-value=\"value\" let-field let-aggregates let-groups>\n    <strong>{{RenderGroupHeader(value, aggregates)}}</strong>\n</ng-template>");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/thuc-hien-cls/bao-cao-thuc-hien-cls-list/bao-cao-thuc-hien-cls-list.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/thuc-hien-cls/bao-cao-thuc-hien-cls-list/bao-cao-thuc-hien-cls-list.component.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL3RodWMtaGllbi1jbHMvYmFvLWNhby10aHVjLWhpZW4tY2xzLWxpc3QvYmFvLWNhby10aHVjLWhpZW4tY2xzLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/thuc-hien-cls/bao-cao-thuc-hien-cls-list/bao-cao-thuc-hien-cls-list.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/thuc-hien-cls/bao-cao-thuc-hien-cls-list/bao-cao-thuc-hien-cls-list.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: BaoCaoThucHienClsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoThucHienClsListComponent", function() { return BaoCaoThucHienClsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _bao_cao_thuc_hien_cls_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bao-cao-thuc-hien-cls.model */ "./src/app/modules/main/bao-cao/thuc-hien-cls/bao-cao-thuc-hien-cls.model.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");


















let BaoCaoThucHienClsListComponent = class BaoCaoThucHienClsListComponent {
    constructor(notificationService, authService, location, dialog, apiService) {
        this.notificationService = notificationService;
        this.authService = authService;
        this.location = location;
        this.dialog = dialog;
        this.apiService = apiService;
        this.baoCaoSearch = new _bao_cao_thuc_hien_cls_model__WEBPACK_IMPORTED_MODULE_4__["BaoCaoClsBacSiSearch"]();
        //inBaoCaoTinhHinhNhapTuNCCKT: InBaoCaoTinhHinhNhapTuNCCKT = new InBaoCaoTinhHinhNhapTuNCCKT();
        this.additionalSearchString = "";
        this.minDateDenNgay = null;
        this.minDateTuNgay = null;
        this.searchQuery = new _bao_cao_thuc_hien_cls_model__WEBPACK_IMPORTED_MODULE_4__["Search"]();
        this.baoCaoClsBacSi = new _bao_cao_thuc_hien_cls_model__WEBPACK_IMPORTED_MODULE_4__["BaoCaoClsBacSi"]();
        this.urlGetData = 'BaoCaoThucHienCls/GetDataForGridAsync';
        this.urlGetTotalData = 'BaoCaoThucHienCls/GetTotalPageForGridAsync';
        this.urlGetDataChild = 'BaoCaoThucHienCls/GetDataForGridAsyncChild';
        this.urlGetTotalDataChild = 'BaoCaoThucHienCls/GetTotalPageForGridAsyncChild';
        this.gridColumns = [];
        this.gridColumnsDetail = [];
        this.ishowView = false;
        this.IsData = false;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.baseRoute = '/bao-cao/bao-cao-bac-si-thuc-hien-cls';
        this.dataBaoCaoThucHienCls = [];
        this.groups = [{ field: 'Ten' }];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].BaoCaoThucHienCls;
        this.gridColumns = [
            { Field: "TenBacSiKetLuan", Title: "Bác sĩ", Width: 600, Sortable: false, Template: this.tenGoiTemplate },
            { Field: "SoBacSiKetLuan", Title: "TÌnh Trạng", Width: 200, Sortable: true, Template: this.soBSTemplate },
        ];
        this.gridColumnsDetail = [
            { Field: "Ten", Title: "Nhóm", Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "NgayThucHien", Title: "Ngày", Width: 50, Sortable: true, ShowTooltip: true, Template: this.ngayThucHienTemplate },
            { Field: "MaTN", Title: "Mã TN", Width: 70, Sortable: false, ShowTooltip: true },
            { Field: "SoBA", Title: "Số BA", Width: 50, Sortable: false, Hidden: true },
            { Field: "HoTen", Title: "Họ và tên", Width: 50, Sortable: false },
            { Field: "NamSinh", Title: "Năm sinh", Width: 30, Sortable: false },
            { Field: "DiaChi", Title: "Địa CHỉ", Width: 80, Sortable: false },
            { Field: "TenBacSiChiDinh", Title: "Bs.Chỉ Định", Width: 80, Sortable: false },
            { Field: "KTVDieuDuong", Title: "KTV I", Width: 100, Sortable: false },
            { Field: "KetLuan", Title: "Kết Luận", Width: 100, Sortable: false },
        ];
        // this.gridColumns = [
        //     { Field: "NgayThucHien", Title: "Ngày khám", Width: 100 },
        //     { Field: "MaTN", Title: "Mã TN", Width: 100, },
        //     { Field: "SoBA", Title: "Tên BN", Width: 100, },
        //     { Field: "HoTen", Title: "Năm sinh", Width: 250, },
        //     { Field: "NamSinh", Title: "Địa chỉ", Width: 100, },
        //     { Field: "DiaChi", Title: "BS khám", Width: 250, },
        //     { Field: "TenBacSiChiDinh", Title: "Tên DV", Width: 250, },
        //     { Field: "KTV", Title: "Nhóm DV", Width: 250, },
        //     { Field: "KetLuan", Title: "Số tiền DV", Width: 250},
        //     {
        //         Field: 'Nhom',
        //         Title: '',
        //         Width: 150,
        //         Sortable: true,
        //         Hidden: true,
        //         HideFilter: true,
        //         TemplateGroupHeader: this.teNhomGroupTemplate
        //       }
        //   ];
    }
    onAdvanceSearch() {
        // this.location.replaceState(this.baseRoute + '?holdQuery=true');
        // if (this.searchQuery.FromToDate != null && this.searchQuery.FromToDate.startDate != null) {
        //     this.searchQuery.FromToDate.TuNgay = CommonService.formatDateTime(this.searchQuery.FromToDate.startDate, 'mm/dd/yyyy');
        // } else {
        //     this.searchQuery.FromToDate.TuNgay = null;
        // }
        // if (this.searchQuery.FromToDate != null && this.searchQuery.FromToDate.endDate != null) {
        //     this.searchQuery.FromToDate.DenNgay = CommonService.formatDateTime(this.searchQuery.FromToDate.endDate, 'mm/dd/yyyy');
        // } else {
        //     this.searchQuery.FromToDate.DenNgay = null;
        // }
        // const queryString = JSON.stringify(this.searchQuery);
        // this.gridChild._additionalSearchString = queryString;
        // LocalStorageHelper.setItem('cacheBaoCaoDoanhThu', queryString);
        // this.gridChild.search();
    }
    RenderGroupHeader(titleGroup, aggregates) {
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }
        const numberOfPatiences = aggregates.items.map(x => x.BenhNhanId).filter(onlyUnique).length;
        return `${titleGroup}: ${numberOfPatiences}/${aggregates.items.length}`;
    }
    onKey(event) {
        if (event.key === 'Enter') {
            this.onAdvanceSearch();
        }
    }
    searchChange() {
        if (this.searchQuery.Searchterm == null || this.searchQuery.Searchterm === '') {
            this.onAdvanceSearch();
        }
    }
    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Process)) {
            self.apiService.postExportExcel('BaoCaoThucHienCls/ExportBaoCaoThucHienCls', self.gridChild._gridQueryInfo).subscribe(resultData => {
                self.closePopupLoadingData();
                const dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'BaoCaoThucHienCls' + dateTimeNow.getFullYear() + '.xlsx');
            }, (err) => {
                self.notificationService.showError(err.Message);
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    XemBaoCao() {
        // if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
        //     this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
        //     return;
        // }
        // if (this.baoCaoSearch.TuNgayFormat == null) {
        //     this.minDateTuNgay = new Date();
        //     this.minDateTuNgay.setHours(0, 0, 0, 0);
        //     this.baoCaoSearch.FromDate = CommonService.formatDateTime(this.minDateTuNgay, "dd/mm/yyyy");
        // }
        // if (this.baoCaoSearch.DenNgayFormat == null) {
        //     this.minDateTuNgay = new Date();
        //     this.baoCaoSearch.ToDate = CommonService.formatDateTime(this.minDateTuNgay, "dd/mm/yyyy");
        // }
        // let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
        // let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
        // this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
        // this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
        // this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay;
        this.apiService.post("BaoCao/GetBaoCaoBangKeBacSiCLSForGridAsync", this.gridChild._gridQueryInfo).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                //this.IsData = true;
                this.gridView = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_17__["process"])(resultData.Data, { group: this.groups });
                if (resultData.TotalRowCount != 0) {
                    this.ishowView = true;
                }
                else {
                    this.ishowView = false;
                }
            }
        });
    }
    XuatBaoCao() {
        const self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Process)) {
            self.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xuất excel...' }
            });
            if (this.baoCaoClsBacSi.ThoiDiemTiepNhanTuFormat != null) {
                this.baoCaoClsBacSi.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].formatDateTime(this.baoCaoClsBacSi.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
            }
            else {
                this.baoCaoClsBacSi.FromDate = null;
            }
            if (this.baoCaoClsBacSi.ThoiDiemTiepNhanDenFormat != null) {
                this.baoCaoClsBacSi.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].formatDateTime(this.baoCaoClsBacSi.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
            }
            else {
                this.baoCaoClsBacSi.ToDate = null;
            }
            self.apiService.postExportExcel('BaoCaoThucHienCls/ExportBaoCaoBangKeBacSiCLS', this.baoCaoClsBacSi).subscribe(resultData => {
                self.dialog.closeAll();
                const dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'BaoCaoThucHienCls' + dateTimeNow.getFullYear() + '.xlsx');
            }, (err) => {
                self.notificationService.showError(err.Message);
                self.dialog.closeAll();
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    showPopupLoadingData() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
    }
    closePopupLoadingData() {
        this.dialog.closeAll();
    }
    GetListAsync(eventList) {
        this.dataBaoCaoThucHienCls = [...eventList.Data];
    }
};
BaoCaoThucHienClsListComponent.ctorParameters = () => [
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__["Location"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BaoCaoThucHienClsListComponent.prototype, "bodyComponent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"], { static: true })
], BaoCaoThucHienClsListComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayThucHienTemplate', { static: true })
], BaoCaoThucHienClsListComponent.prototype, "ngayThucHienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], BaoCaoThucHienClsListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenGoiTemplate', { static: true })
], BaoCaoThucHienClsListComponent.prototype, "tenGoiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soBSTemplate', { static: true })
], BaoCaoThucHienClsListComponent.prototype, "soBSTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('teNhomGroupTemplate', { static: true })
], BaoCaoThucHienClsListComponent.prototype, "teNhomGroupTemplate", void 0);
BaoCaoThucHienClsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-bao-cao-thuc-hien-cls-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-thuc-hien-cls-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/thuc-hien-cls/bao-cao-thuc-hien-cls-list/bao-cao-thuc-hien-cls-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-thuc-hien-cls-list.component.scss */ "./src/app/modules/main/bao-cao/thuc-hien-cls/bao-cao-thuc-hien-cls-list/bao-cao-thuc-hien-cls-list.component.scss")).default]
    })
], BaoCaoThucHienClsListComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/thuc-hien-cls/bao-cao-thuc-hien-cls-routing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/thuc-hien-cls/bao-cao-thuc-hien-cls-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: BaoCaoThucHienClsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoThucHienClsRoutingModule", function() { return BaoCaoThucHienClsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _bao_cao_thuc_hien_cls_list_bao_cao_thuc_hien_cls_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bao-cao-thuc-hien-cls-list/bao-cao-thuc-hien-cls-list.component */ "./src/app/modules/main/bao-cao/thuc-hien-cls/bao-cao-thuc-hien-cls-list/bao-cao-thuc-hien-cls-list.component.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");






const routes = [
    {
        path: '',
        component: _bao_cao_thuc_hien_cls_list_bao_cao_thuc_hien_cls_list_component__WEBPACK_IMPORTED_MODULE_4__["BaoCaoThucHienClsListComponent"],
        data: {
            title: 'Báo Cáo Thực Hiện Cận Lâm Sàng',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].BaoCaoThucHienCls,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        }
    }
];
let BaoCaoThucHienClsRoutingModule = class BaoCaoThucHienClsRoutingModule {
};
BaoCaoThucHienClsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BaoCaoThucHienClsRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/thuc-hien-cls/bao-cao-thuc-hien-cls.model.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/thuc-hien-cls/bao-cao-thuc-hien-cls.model.ts ***!
  \***********************************************************************************/
/*! exports provided: Search, BaoCaoClsBacSi, BaoCaoClsBacSiSearch, SearchDateRange, BaoCaoThucHienClsVo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoClsBacSi", function() { return BaoCaoClsBacSi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoClsBacSiSearch", function() { return BaoCaoClsBacSiSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDateRange", function() { return SearchDateRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoThucHienClsVo", function() { return BaoCaoThucHienClsVo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Search {
    constructor(
    // tslint:disable-next-line: no-use-before-declare
    FromToDate = new SearchDateRange(), 
    // tslint:disable-next-line: no-use-before-declare
    Searchterm = null, KhoaChoice = null) {
        this.FromToDate = FromToDate;
        this.Searchterm = Searchterm;
        this.KhoaChoice = KhoaChoice;
    }
}
class BaoCaoClsBacSi {
    constructor(KhoaId = null, BacSiKetLuanId = null, 
    // public RangeFromDate: RangeDate = new RangeDate(),
    FromDate = null, ToDate = null, ThoiDiemTiepNhanTuFormat = null, ThoiDiemTiepNhanDenFormat = null) {
        this.KhoaId = KhoaId;
        this.BacSiKetLuanId = BacSiKetLuanId;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
        this.ThoiDiemTiepNhanTuFormat = ThoiDiemTiepNhanTuFormat;
        this.ThoiDiemTiepNhanDenFormat = ThoiDiemTiepNhanDenFormat;
    }
}
class BaoCaoClsBacSiSearch {
    constructor(FromDate = null, ToDate = null, TuNgayFormat = null, DenNgayFormat = null, Skip = 0, Take = 50, PageSize = 50, SearchString = "", AdditionalSearchString = "", Sort = []) {
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
}
class SearchDateRange {
    constructor(startDate = null, endDate = null, TuNgay = null, DenNgay = null) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
    }
}
class BaoCaoThucHienClsVo {
    constructor(Id = null, NhomDv = null, ThoiGianChiDinh = null, ThoiGianChiDinhDisplay = null, MaTn = null, HoTenBn = null, BenhNhanId = null, NgaySinh = null, NgaySinhDisplay = null, GioiTinh = null, KhoaChiDinh = null, MaDv = null, DichVu = null, PhongThucHien = null, BsKetLuan = null, ThoiGianCoKq = null, ThoiGianCoKqDisplay = null) {
        this.Id = Id;
        this.NhomDv = NhomDv;
        this.ThoiGianChiDinh = ThoiGianChiDinh;
        this.ThoiGianChiDinhDisplay = ThoiGianChiDinhDisplay;
        this.MaTn = MaTn;
        this.HoTenBn = HoTenBn;
        this.BenhNhanId = BenhNhanId;
        this.NgaySinh = NgaySinh;
        this.NgaySinhDisplay = NgaySinhDisplay;
        this.GioiTinh = GioiTinh;
        this.KhoaChiDinh = KhoaChiDinh;
        this.MaDv = MaDv;
        this.DichVu = DichVu;
        this.PhongThucHien = PhongThucHien;
        this.BsKetLuan = BsKetLuan;
        this.ThoiGianCoKq = ThoiGianCoKq;
        this.ThoiGianCoKqDisplay = ThoiGianCoKqDisplay;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/thuc-hien-cls/bao-cao-thuc-hien-cls.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/thuc-hien-cls/bao-cao-thuc-hien-cls.module.ts ***!
  \************************************************************************************/
/*! exports provided: BaoCaoThucHienClsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoThucHienClsModule", function() { return BaoCaoThucHienClsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _bao_cao_thuc_hien_cls_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bao-cao-thuc-hien-cls-routing.module */ "./src/app/modules/main/bao-cao/thuc-hien-cls/bao-cao-thuc-hien-cls-routing.module.ts");
/* harmony import */ var _bao_cao_thuc_hien_cls_list_bao_cao_thuc_hien_cls_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bao-cao-thuc-hien-cls-list/bao-cao-thuc-hien-cls-list.component */ "./src/app/modules/main/bao-cao/thuc-hien-cls/bao-cao-thuc-hien-cls-list/bao-cao-thuc-hien-cls-list.component.ts");
/* harmony import */ var _bao_cao_thuc_hien_cls_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bao-cao-thuc-hien-cls.service */ "./src/app/modules/main/bao-cao/thuc-hien-cls/bao-cao-thuc-hien-cls.service.ts");
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





















let BaoCaoThucHienClsModule = class BaoCaoThucHienClsModule {
};
BaoCaoThucHienClsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _bao_cao_thuc_hien_cls_list_bao_cao_thuc_hien_cls_list_component__WEBPACK_IMPORTED_MODULE_4__["BaoCaoThucHienClsListComponent"]
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
            _bao_cao_thuc_hien_cls_routing_module__WEBPACK_IMPORTED_MODULE_3__["BaoCaoThucHienClsRoutingModule"]
        ],
        entryComponents: [],
        providers: [
            _bao_cao_thuc_hien_cls_service__WEBPACK_IMPORTED_MODULE_5__["BaoCaoThucHienClsService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"], useClass: _bao_cao_thuc_hien_cls_service__WEBPACK_IMPORTED_MODULE_5__["BaoCaoThucHienClsService"] },
        ]
    })
], BaoCaoThucHienClsModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/thuc-hien-cls/bao-cao-thuc-hien-cls.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/thuc-hien-cls/bao-cao-thuc-hien-cls.service.ts ***!
  \*************************************************************************************/
/*! exports provided: BaoCaoThucHienClsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoThucHienClsService", function() { return BaoCaoThucHienClsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");




let BaoCaoThucHienClsService = class BaoCaoThucHienClsService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'BaoCaoThucHienCls';
    }
};
BaoCaoThucHienClsService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
BaoCaoThucHienClsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BaoCaoThucHienClsService);



/***/ })

}]);
//# sourceMappingURL=bao-cao-thuc-hien-cls-bao-cao-thuc-hien-cls-module-es2015.js.map