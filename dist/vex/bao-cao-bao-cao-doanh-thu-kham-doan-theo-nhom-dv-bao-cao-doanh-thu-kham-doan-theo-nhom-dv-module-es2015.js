(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-doanh-thu-kham-doan-theo-nhom-dv-bao-cao-doanh-thu-kham-doan-theo-nhom-dv-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-doanh-thu-kham-doan-theo-nhom-dv/bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list/bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list.component.html":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-doanh-thu-kham-doan-theo-nhom-dv/bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list/bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list.component.html ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Thống Kê', Path:''},\n                    {Title:'Báo Cáo', Path:''},\n                    {Title:'Kế Toán', Path:''},\n                    {Title:'Doanh Thu Khám Đoàn Theo Nhóm Dịch Vụ', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" #tiepnhantu id=\"TuNgayFormat\"\n                    [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" #tiepnhanden id=\"DenNgayFormat\"\n                    [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header\" label=\"Đến ngày\">\n                </app-datetimepicker>\n\n                <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"exportExcel()\">Xuất Excel</button>\n                    <!-- <button [disabled]=\"!IsData\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                        class=\"mr-1 mt-2\" (click)=\"InBaoCao()\" style=\"float: right;\">In Báo cáo</button> -->\n                </div>\n\n                <div fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"pb-0\">\n                    <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n                        [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\"\n                        [checkboxAble]=\"false\" pageSize=\"50\"\n                        [groups]=\"groups\" [showStt]=\"true\"\n                        urlGetData=\"BaoCao/GetDataBaoCaoDoanhThuKhamDoanTheoNhomDVForGridAsync\"\n                        urlGetTotalPage=\"BaoCao/GetDataTotalPageBaoCaoDoanhThuKhamDoanTheoNhomDVForGridAsync\">\n                    </app-grid>\n                    <ng-template #tongCongTitleTemplate let-dataItem>\n                        <strong>\n                            Tổng cộng:\n                        </strong>\n                    </ng-template>\n\n                    <ng-template #khamBenhTemplate let-dataItem>\n                            {{dataItem.KhamBenh | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #sumKhamBenhFooterTemplate let-dataItem>\n                        <strong>\n                            {{sumKhamBenh | number:'0.2-2':'vi-VN'}}\n                        </strong>\n                    </ng-template>\n\n                    <ng-template #xetNghiemTemplate let-dataItem>\n                            {{dataItem.XetNghiem | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #sumXetNghiemFooterTemplate let-dataItem>\n                        <strong>\n                            {{sumXetNghiem | number:'0.2-2':'vi-VN'}}\n                        </strong>\n                    </ng-template>\n\n                    <ng-template #noiSoiTemplate let-dataItem>\n                            {{dataItem.NoiSoi | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #sumNoiSoiFooterTemplate let-dataItem>\n                        <strong>\n                            {{sumNoiSoi | number:'0.2-2':'vi-VN'}}\n                        </strong>\n                    </ng-template>\n\n                    <ng-template #noiSoiTMHTemplate let-dataItem>\n                            {{dataItem.NoiSoiTMH | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #sumNoiSoiTMHFooterTemplate let-dataItem>\n                        <strong>\n                            {{sumNoiSoiTMH | number:'0.2-2':'vi-VN'}}\n                        </strong>\n                    </ng-template>\n\n                    <ng-template #sieuAmTemplate let-dataItem>\n                            {{dataItem.SieuAm | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #sumSieuAmFooterTemplate let-dataItem>\n                        <strong>\n                            {{sumSieuAm | number:'0.2-2':'vi-VN'}}\n                        </strong>\n                    </ng-template>\n\n                    <ng-template #xQuangTemplate let-dataItem>\n                            {{dataItem.XQuang | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #sumXQuangFooterTemplate let-dataItem>\n                        <strong>\n                            {{sumXQuang | number:'0.2-2':'vi-VN'}}\n                        </strong>\n                    </ng-template>\n\n                    <ng-template #cTScanTemplate let-dataItem>\n                            {{dataItem.CTScan | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #sumCTScanFooterTemplate let-dataItem>\n                        <strong>\n                            {{sumCTScan | number:'0.2-2':'vi-VN'}}\n                        </strong>\n                    </ng-template>\n\n                    <ng-template #mRITemplate let-dataItem>\n                            {{dataItem.MRI | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #sumMRIFooterTemplate let-dataItem>\n                        <strong>\n                            {{sumMRI | number:'0.2-2':'vi-VN'}}\n                        </strong>\n                    </ng-template>\n\n                    <ng-template #dienTimDienNaoTemplate let-dataItem>\n                            {{dataItem.DienTimDienNao | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #sumDienTimDienNaoFooterTemplate let-dataItem>\n                        <strong>\n                            {{sumDienTimDienNao | number:'0.2-2':'vi-VN'}}\n                        </strong>\n                    </ng-template>\n\n                    <ng-template #doLoangXuongTemplate let-dataItem>\n                            {{dataItem.TDCNDoLoangXuong | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #sumDoLoangXuongFooterTemplate let-dataItem>\n                        <strong>\n                            {{sumDoLoangXuong | number:'0.2-2':'vi-VN'}}\n                        </strong>\n                    </ng-template>\n\n                    <ng-template #dVKhacTemplate let-dataItem>\n                            {{dataItem.DVKhac | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #sumDVKhacFooterTemplate let-dataItem>\n                        <strong>\n                            {{sumDVKhac | number:'0.2-2':'vi-VN'}}\n                        </strong>\n                    </ng-template>\n\n                    <ng-template #tongTienTemplate let-dataItem>\n                            {{dataItem.TongDoanhThuTheoNhomDichVu | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <ng-template #sumTongTienFooterTemplate let-dataItem>\n                        <strong>\n                            {{sumTongTien | number:'0.2-2':'vi-VN'}}\n                        </strong>\n                    </ng-template>\n\n                    <ng-template #tenCongTyTemplate let-value=\"value\">\n                        <strong>{{value}}</strong>\n                    </ng-template>\n                </div>\n            </div>\n\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu-kham-doan-theo-nhom-dv/bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list/bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list.component.scss":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-doanh-thu-kham-doan-theo-nhom-dv/bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list/bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list.component.scss ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tZG9hbmgtdGh1LWtoYW0tZG9hbi10aGVvLW5ob20tZHYvYmFvLWNhby1kb2FuaC10aHUta2hhbS1kb2FuLXRoZW8tbmhvbS1kdi1saXN0L2Jhby1jYW8tZG9hbmgtdGh1LWtoYW0tZG9hbi10aGVvLW5ob20tZHYtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu-kham-doan-theo-nhom-dv/bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list/bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list.component.ts":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-doanh-thu-kham-doan-theo-nhom-dv/bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list/bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list.component.ts ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent", function() { return BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent; });
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
/* harmony import */ var _bao_cao_doanh_thu_kham_doan_theo_nhom_dv_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../bao-cao-doanh-thu-kham-doan-theo-nhom-dv.model */ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu-kham-doan-theo-nhom-dv/bao-cao-doanh-thu-kham-doan-theo-nhom-dv.model.ts");













let BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent = class BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent {
    constructor(apiService, dialog, authService, notificationService) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.authService = authService;
        this.notificationService = notificationService;
        this.baoCaoSearch = new _bao_cao_doanh_thu_kham_doan_theo_nhom_dv_model__WEBPACK_IMPORTED_MODULE_12__["BaoCaoDoanhThuKhamDoanTheoNhomDVSearch"]();
        this.inBaoCaoDoanhThuKhamDoanTheoNhomDV = new _bao_cao_doanh_thu_kham_doan_theo_nhom_dv_model__WEBPACK_IMPORTED_MODULE_12__["InBaoCaoDoanhThuKhamDoanTheoNhomDV"]();
        this.minDateDenNgay = null;
        this.minDateTuNgay = null;
        this.sumKhamBenh = null;
        this.sumXetNghiem = null;
        this.sumNoiSoi = null;
        this.sumNoiSoiTMH = null;
        this.sumSieuAm = null;
        this.sumXQuang = null;
        this.sumCTScan = null;
        this.sumMRI = null;
        this.sumDienTimDienNao = null;
        this.sumDoLoangXuong = null;
        this.sumDVKhac = null;
        this.sumTongTien = null;
        this.pageSize = 50;
        this.skip = 0;
        this.dataSource = {
            data: [],
            total: 0
        };
        this.gridDataSource = {
            data: [],
            total: 0
        };
        this.ishowView = false;
        this.IsData = false;
        this.groups = [{ field: "TenCongTy" }];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].BaoCaoDoanhThuKhamDoanTheoNhomDV;
        this.skip = 0;
        this.take = (this.pageSize * this.skip) + this.pageSize;
        this.gridColumns = [
            // { Field: "STT", Title: "STT", Width: 20, Template: this.sttTemplate },
            {
                Field: 'TenCongTy',
                Title: '',
                Width: 150,
                Sortable: true,
                Hidden: true,
                HideFilter: true,
                TemplateGroupHeader: this.tenCongTyTemplate
            },
            { Field: "MaTN", Title: "Mã TN", Width: 100, },
            { Field: "HoTen", Title: "Họ tên", Width: 160, TemplateFooter: this.tongCongTitleTemplate },
            { Field: "NamSinh", Title: "Năm sinh", Width: 90, },
            { Field: "GioiTinh", Title: "Giới tính", Width: 90, },
            { Field: "KhamBenh", Title: "Khám bệnh", Width: 120, TemplateFooter: this.sumKhamBenhFooterTemplate, Template: this.khamBenhTemplate },
            { Field: "XetNghiem", Title: "Xét nghiệm", Width: 120, TemplateFooter: this.sumXetNghiemFooterTemplate, Template: this.xetNghiemTemplate },
            { Field: "NoiSoi", Title: "Nội soi", Width: 120, TemplateFooter: this.sumNoiSoiFooterTemplate, Template: this.noiSoiTemplate },
            { Field: "NoiSoiTMH", Title: "Nội soi TMH", Width: 120, TemplateFooter: this.sumNoiSoiTMHFooterTemplate, Template: this.noiSoiTMHTemplate },
            { Field: "SieuAm", Title: "Siêu âm", Width: 120, TemplateFooter: this.sumSieuAmFooterTemplate, Template: this.sieuAmTemplate },
            { Field: "XQuang", Title: "X-Quang", Width: 120, TemplateFooter: this.sumXQuangFooterTemplate, Template: this.xQuangTemplate },
            { Field: "CTScan", Title: "CT Scan", Width: 120, TemplateFooter: this.sumCTScanFooterTemplate, Template: this.cTScanTemplate },
            { Field: "MRI", Title: "MRI", Width: 120, TemplateFooter: this.sumMRIFooterTemplate, Template: this.mRITemplate },
            { Field: "DienTimDienNao", Title: "Điện tim + điện não", Width: 120, TemplateFooter: this.sumDienTimDienNaoFooterTemplate, Template: this.dienTimDienNaoTemplate },
            { Field: "TDCNDoLoangXuong", Title: "Đo loãng xương, Đo hô hấp", Width: 120, TemplateFooter: this.sumDoLoangXuongFooterTemplate, Template: this.doLoangXuongTemplate },
            { Field: "DVKhac", Title: "DV khác", Width: 120, TemplateFooter: this.sumDVKhacFooterTemplate, Template: this.dVKhacTemplate },
            { Field: "TongDoanhThuTheoNhomDichVu", Title: "Tổng cộng", Width: 120, TemplateFooter: this.sumTongTienFooterTemplate, Template: this.tongTienTemplate },
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
    }
    exportExcel() {
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
            // let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
            // let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
            // this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
            // this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
            // this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay + ";" + this.inBaoCaoDoanhThuKhamDoanTheoNhomDV.HostingName;
            let tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
            let denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
            this.baoCaoSearch.FromDate = tuNgay;
            this.baoCaoSearch.ToDate = denNgay;
            this.gridChild._gridQueryInfo.additionalSearchString = JSON.stringify(this.baoCaoSearch);
            this.apiService.postExportExcel("BaoCao/ExportBaoCaoDoanhThuKhamDoanTheoNhomDV", this.gridChild._gridQueryInfo)
                .subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoDoanhThuKhamDoanTheoNhomDV" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    XemBaoCao() {
        // this.gridChild._isLoading = true;
        // this.gridChild._isLoadingTotalPage = true;
        if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
            this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
            this.gridChild._isLoading = false;
            this.gridChild._isLoadingTotalPage = false;
            return;
        }
        let tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
        let denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
        this.baoCaoSearch.FromDate = tuNgay;
        this.baoCaoSearch.ToDate = denNgay;
        this.gridChild._additionalSearchString = JSON.stringify(this.baoCaoSearch);
        this.gridChild.search();
        this.getTongCong(this.gridChild._gridQueryInfo);
        // if (this.baoCaoSearch.TuNgayFormat == null) {
        //   this.minDateTuNgay = new Date();
        //   this.minDateTuNgay.setHours(0, 0, 0, 0);
        //   this.baoCaoSearch.FromDate = CommonService.formatDateTime(this.minDateTuNgay, "dd/mm/yyyy");
        // }
        // if (this.baoCaoSearch.DenNgayFormat == null) {
        //   this.minDateTuNgay = new Date();
        //   this.baoCaoSearch.ToDate = CommonService.formatDateTime(this.minDateTuNgay, "dd/mm/yyyy");
        // }
        // let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
        // let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
        // this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
        // this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
        // this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay;
        // this.apiService.post<any>("BaoCao/GetDataBaoCaoDoanhThuKhamDoanTheoNhomDVForGridAsync", this.baoCaoSearch).subscribe(resultData => {
        //   if (resultData !== undefined && resultData != null) {
        //     this.dataSource = {
        //       data: resultData.Data,
        //       total: resultData.TotalRowCount
        //     };
        //     var takeTo = +this.skip + +this.pageSize;
        //     let gridData = this.dataSource.data.slice(this.skip, takeTo);
        //     this.gridDataSource = {
        //       data: gridData,
        //       total: resultData.TotalRowCount
        //     };
        //     //move func
        //     this.sumKhamBenh = resultData.Data.reduce((sum: number, item: { KhamBenh: number; }) => sum + item.KhamBenh, 0);
        //     this.sumXetNghiem = resultData.Data.reduce((sum: number, item: { XetNghiem: number; }) => sum + item.XetNghiem, 0);
        //     this.sumNoiSoi = resultData.Data.reduce((sum: number, item: { NoiSoi: number; }) => sum + item.NoiSoi, 0);
        //     this.sumNoiSoiTMH = resultData.Data.reduce((sum: number, item: { NoiSoiTMH: number; }) => sum + item.NoiSoiTMH, 0);
        //     this.sumSieuAm = resultData.Data.reduce((sum: number, item: { SieuAm: number; }) => sum + item.SieuAm, 0);
        //     this.sumXQuang = resultData.Data.reduce((sum: number, item: { XQuang: number; }) => sum + item.XQuang, 0);
        //     this.sumCTScan = resultData.Data.reduce((sum: number, item: { CTScan: number; }) => sum + item.CTScan, 0);
        //     this.sumMRI = resultData.Data.reduce((sum: number, item: { MRI: number; }) => sum + item.MRI, 0);
        //     this.sumDienTimDienNao = resultData.Data.reduce((sum: number, item: { DienTimDienNao: number; }) => sum + item.DienTimDienNao, 0);
        //     this.sumDoLoangXuong = resultData.Data.reduce((sum: number, item: { TDCNDoLoangXuong: number; }) => sum + item.TDCNDoLoangXuong, 0);
        //     this.sumDVKhac = resultData.Data.reduce((sum: number, item: { DVKhac: number; }) => sum + item.DVKhac, 0);
        //     this.sumTongTien = this.sumKhamBenh + this.sumXetNghiem + this.sumNoiSoi
        //       + this.sumNoiSoiTMH + this.sumSieuAm + this.sumXQuang + this.sumCTScan
        //       + this.sumMRI + this.sumDienTimDienNao + this.sumDoLoangXuong + this.sumDVKhac;
        //     // if (this.dataSource.total != 0) {
        //     //   this.ishowView = true;
        //     // } else {
        //     //   this.ishowView = false;
        //     // }
        //     this.gridChild._isLoading = false;
        //     this.gridChild._isLoadingTotalPage = false;
        //   }
        // });
    }
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
    //   this.inBaoCaoXuatNhapTon.FromDate = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
    //   this.inBaoCaoXuatNhapTon.ToDate = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
    //   this.dialog.open(BaoCaoXuatNhapTonPopupComponent, {
    //     disableClose: false,
    //     width: '1200px',
    //     data: this.inBaoCaoXuatNhapTon,
    //   }
    //   ).afterClosed().subscribe(() => {
    //   });
    // }
    getTongCong(queryInfo) {
        this.apiService.post("BaoCao/GetTongCongDoanhThuKhamDoanTheoNhomDichVu", queryInfo).subscribe(resultData => {
            this.sumKhamBenh = resultData.KhamBenh;
            this.sumXetNghiem = resultData.XetNghiem;
            this.sumNoiSoi = resultData.NoiSoi;
            this.sumNoiSoiTMH = resultData.NoiSoiTMH;
            this.sumSieuAm = resultData.SieuAm;
            this.sumXQuang = resultData.XQuang;
            this.sumCTScan = resultData.CTScan;
            this.sumMRI = resultData.MRI;
            this.sumDienTimDienNao = resultData.DienTimDienNao;
            this.sumDoLoangXuong = resultData.TDCNDoLoangXuong;
            this.sumDVKhac = resultData.DVKhac;
            this.sumTongTien = resultData.Total;
        }, (err) => {
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
        });
    }
};
BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"], { static: true })
], BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tongCongTitleTemplate', { static: true })
], BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent.prototype, "tongCongTitleTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('sumKhamBenhFooterTemplate', { static: true })
], BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent.prototype, "sumKhamBenhFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('sumXetNghiemFooterTemplate', { static: true })
], BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent.prototype, "sumXetNghiemFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('sumNoiSoiFooterTemplate', { static: true })
], BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent.prototype, "sumNoiSoiFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('sumNoiSoiTMHFooterTemplate', { static: true })
], BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent.prototype, "sumNoiSoiTMHFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('sumSieuAmFooterTemplate', { static: true })
], BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent.prototype, "sumSieuAmFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('sumXQuangFooterTemplate', { static: true })
], BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent.prototype, "sumXQuangFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('sumCTScanFooterTemplate', { static: true })
], BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent.prototype, "sumCTScanFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('sumMRIFooterTemplate', { static: true })
], BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent.prototype, "sumMRIFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('sumDienTimDienNaoFooterTemplate', { static: true })
], BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent.prototype, "sumDienTimDienNaoFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('sumDoLoangXuongFooterTemplate', { static: true })
], BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent.prototype, "sumDoLoangXuongFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('sumDVKhacFooterTemplate', { static: true })
], BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent.prototype, "sumDVKhacFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('sumTongTienFooterTemplate', { static: true })
], BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent.prototype, "sumTongTienFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tenCongTyTemplate', { static: true })
], BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent.prototype, "tenCongTyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('khamBenhTemplate', { static: true })
], BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent.prototype, "khamBenhTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('xetNghiemTemplate', { static: true })
], BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent.prototype, "xetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('noiSoiTemplate', { static: true })
], BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent.prototype, "noiSoiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('noiSoiTMHTemplate', { static: true })
], BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent.prototype, "noiSoiTMHTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('sieuAmTemplate', { static: true })
], BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent.prototype, "sieuAmTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('xQuangTemplate', { static: true })
], BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent.prototype, "xQuangTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('cTScanTemplate', { static: true })
], BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent.prototype, "cTScanTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('mRITemplate', { static: true })
], BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent.prototype, "mRITemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('dienTimDienNaoTemplate', { static: true })
], BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent.prototype, "dienTimDienNaoTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('doLoangXuongTemplate', { static: true })
], BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent.prototype, "doLoangXuongTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('dVKhacTemplate', { static: true })
], BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent.prototype, "dVKhacTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tongTienTemplate', { static: true })
], BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent.prototype, "tongTienTemplate", void 0);
BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-doanh-thu-kham-doan-theo-nhom-dv/bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list/bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu-kham-doan-theo-nhom-dv/bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list/bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list.component.scss")).default]
    })
], BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu-kham-doan-theo-nhom-dv/bao-cao-doanh-thu-kham-doan-theo-nhom-dv-routing.module.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-doanh-thu-kham-doan-theo-nhom-dv/bao-cao-doanh-thu-kham-doan-theo-nhom-dv-routing.module.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: BaoCaoDoanhThuKhamDoanTheoNhomDvRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDoanhThuKhamDoanTheoNhomDvRoutingModule", function() { return BaoCaoDoanhThuKhamDoanTheoNhomDvRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _bao_cao_doanh_thu_kham_doan_theo_nhom_dv_list_bao_cao_doanh_thu_kham_doan_theo_nhom_dv_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list/bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list.component */ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu-kham-doan-theo-nhom-dv/bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list/bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list.component.ts");







const routes = [
    {
        path: '',
        component: _bao_cao_doanh_thu_kham_doan_theo_nhom_dv_list_bao_cao_doanh_thu_kham_doan_theo_nhom_dv_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent"],
        data: {
            title: 'Báo cáo doanh thu khám đoàn theo nhóm dịch vụ',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoDoanhThuKhamDoanTheoNhomDV,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    }
];
let BaoCaoDoanhThuKhamDoanTheoNhomDvRoutingModule = class BaoCaoDoanhThuKhamDoanTheoNhomDvRoutingModule {
};
BaoCaoDoanhThuKhamDoanTheoNhomDvRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BaoCaoDoanhThuKhamDoanTheoNhomDvRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu-kham-doan-theo-nhom-dv/bao-cao-doanh-thu-kham-doan-theo-nhom-dv.model.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-doanh-thu-kham-doan-theo-nhom-dv/bao-cao-doanh-thu-kham-doan-theo-nhom-dv.model.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: BaoCaoDoanhThuKhamDoanTheoNhomDVSearch, DoanhThuKhamDoanTheoNhomDV, InBaoCaoDoanhThuKhamDoanTheoNhomDV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDoanhThuKhamDoanTheoNhomDVSearch", function() { return BaoCaoDoanhThuKhamDoanTheoNhomDVSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoanhThuKhamDoanTheoNhomDV", function() { return DoanhThuKhamDoanTheoNhomDV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBaoCaoDoanhThuKhamDoanTheoNhomDV", function() { return InBaoCaoDoanhThuKhamDoanTheoNhomDV; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BaoCaoDoanhThuKhamDoanTheoNhomDVSearch {
    constructor(FromDate = null, ToDate = null, TuNgayFormat = null, DenNgayFormat = null, SearchString = "", Hosting = null) {
        this.FromDate = FromDate;
        this.ToDate = ToDate;
        this.TuNgayFormat = TuNgayFormat;
        this.DenNgayFormat = DenNgayFormat;
        this.SearchString = SearchString;
        this.Hosting = Hosting;
    }
}
class DoanhThuKhamDoanTheoNhomDV {
    constructor(STT = null, Ten = null, DVT = null, SLTonDauKy = 0, ThanhTienTonDauKy = 0, SLNhapTrongKy = 0, ThanhTienNhapTrongKy = 0, SLXuatTrongKy = 0, ThanhTienXuatTrongKy = 0, SLTonCuoiKy = 0, Gia = 0, ThanhTien = 0) {
        this.STT = STT;
        this.Ten = Ten;
        this.DVT = DVT;
        this.SLTonDauKy = SLTonDauKy;
        this.ThanhTienTonDauKy = ThanhTienTonDauKy;
        this.SLNhapTrongKy = SLNhapTrongKy;
        this.ThanhTienNhapTrongKy = ThanhTienNhapTrongKy;
        this.SLXuatTrongKy = SLXuatTrongKy;
        this.ThanhTienXuatTrongKy = ThanhTienXuatTrongKy;
        this.SLTonCuoiKy = SLTonCuoiKy;
        this.Gia = Gia;
        this.ThanhTien = ThanhTien;
    }
}
class InBaoCaoDoanhThuKhamDoanTheoNhomDV {
    constructor(KhoId = 0, HostingName = null, FromDate = null, ToDate = null) {
        this.KhoId = KhoId;
        this.HostingName = HostingName;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu-kham-doan-theo-nhom-dv/bao-cao-doanh-thu-kham-doan-theo-nhom-dv.module.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-doanh-thu-kham-doan-theo-nhom-dv/bao-cao-doanh-thu-kham-doan-theo-nhom-dv.module.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: BaoCaoDoanhThuKhamDoanTheoNhomDvModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDoanhThuKhamDoanTheoNhomDvModule", function() { return BaoCaoDoanhThuKhamDoanTheoNhomDvModule; });
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
/* harmony import */ var _bao_cao_doanh_thu_kham_doan_theo_nhom_dv_list_bao_cao_doanh_thu_kham_doan_theo_nhom_dv_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list/bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list.component */ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu-kham-doan-theo-nhom-dv/bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list/bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list.component.ts");
/* harmony import */ var _bao_cao_doanh_thu_kham_doan_theo_nhom_dv_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bao-cao-doanh-thu-kham-doan-theo-nhom-dv-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu-kham-doan-theo-nhom-dv/bao-cao-doanh-thu-kham-doan-theo-nhom-dv-routing.module.ts");
/* harmony import */ var _bao_cao_doanh_thu_kham_doan_theo_nhom_dv_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bao-cao-doanh-thu-kham-doan-theo-nhom-dv.service */ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu-kham-doan-theo-nhom-dv/bao-cao-doanh-thu-kham-doan-theo-nhom-dv.service.ts");





















let BaoCaoDoanhThuKhamDoanTheoNhomDvModule = class BaoCaoDoanhThuKhamDoanTheoNhomDvModule {
};
BaoCaoDoanhThuKhamDoanTheoNhomDvModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bao_cao_doanh_thu_kham_doan_theo_nhom_dv_list_bao_cao_doanh_thu_kham_doan_theo_nhom_dv_list_component__WEBPACK_IMPORTED_MODULE_18__["BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _bao_cao_doanh_thu_kham_doan_theo_nhom_dv_routing_module__WEBPACK_IMPORTED_MODULE_19__["BaoCaoDoanhThuKhamDoanTheoNhomDvRoutingModule"],
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
            _bao_cao_doanh_thu_kham_doan_theo_nhom_dv_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoDoanhThuKhamDoanTheoNhomDvService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"], useClass: _bao_cao_doanh_thu_kham_doan_theo_nhom_dv_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoDoanhThuKhamDoanTheoNhomDvService"] },
        ]
    })
], BaoCaoDoanhThuKhamDoanTheoNhomDvModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu-kham-doan-theo-nhom-dv/bao-cao-doanh-thu-kham-doan-theo-nhom-dv.service.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-doanh-thu-kham-doan-theo-nhom-dv/bao-cao-doanh-thu-kham-doan-theo-nhom-dv.service.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: BaoCaoDoanhThuKhamDoanTheoNhomDvService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDoanhThuKhamDoanTheoNhomDvService", function() { return BaoCaoDoanhThuKhamDoanTheoNhomDvService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");




let BaoCaoDoanhThuKhamDoanTheoNhomDvService = class BaoCaoDoanhThuKhamDoanTheoNhomDvService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'BaoCao';
    }
};
BaoCaoDoanhThuKhamDoanTheoNhomDvService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
BaoCaoDoanhThuKhamDoanTheoNhomDvService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BaoCaoDoanhThuKhamDoanTheoNhomDvService);



/***/ })

}]);
//# sourceMappingURL=bao-cao-bao-cao-doanh-thu-kham-doan-theo-nhom-dv-bao-cao-doanh-thu-kham-doan-theo-nhom-dv-module-es2015.js.map