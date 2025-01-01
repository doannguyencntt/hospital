(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-tong-hop-kq-ksk-bao-cao-tong-hop-kq-ksk-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tong-hop-kq-ksk/bao-cao-tong-hop-kq-ksk-list/bao-cao-tong-hop-kq-ksk-list.component.html":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tong-hop-kq-ksk/bao-cao-tong-hop-kq-ksk-list/bao-cao-tong-hop-kq-ksk-list.component.html ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[                   \n                {Title:'Thống Kê', Path:''},\n                {Title:'Báo Cáo', Path:''},\n                {Title:'Khám Đoàn', Path:''},\n                {Title:'Tổng Hợp Kết Quả KSK', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card -mt-15\" >\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\"> \n                <app-combobox id=\"CongTyId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Tên công ty\" [required]=\"true\"\n                    url=\"BaoCao/GetCongTys\" [(model)]=\"baoCaoSearch.CongTyId\" class=\"mt-1 on-header\"\n                    (modelChange)=\"changeCongTy($event)\"\n                    style=\"padding-left: 10px;\">\n                </app-combobox>\n\n                <app-combobox id=\"HopDongId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Số hợp đồng\" [required]=\"true\"\n                    url=\"BaoCao/GetHopDongKhamSucKhoes\" [(model)]=\"baoCaoSearch.HopDongId\" class=\"mt-1 on-header\"\n                    [reloadForGrid]=\"true\" [bind]=\"true\" (dataForLookupChange)=\"changeLookupHopDong($event)\"\n                    [queryInfo]=\"{ParameterDependencies:'{CongTyKhamSucKhoeId:' + baoCaoSearch.CongTyId + '}', Take: 50}\">\n                </app-combobox>\n               \n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.ToDate\" #tiepnhantu id=\"TuNgay\" \n                [maxDate]=\"baoCaoSearch.FromDate\" label=\"Từ ngày\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.FromDate\" #tiepnhanden id=\"DenNgay\" \n                    [minDate]=\"baoCaoSearch.ToDate\" class=\"mt-1 on-header\" label=\"Đến ngày\">\n                </app-datetimepicker>\n                <div fxFlex=\"30%\" fxFlex.sm=\"30%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                    (click)=\"xem()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button \n                        (click)=\"exportExcel()\">Xuất Excel</button>\n                </div>\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\" style=\"overflow:auto;\">\n                    <div fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"pb-0\">\n                        <div [innerHTML]=\"html\" style=\"overflow:auto;\" id=\"content\"></div>\n                    </div>\n                </div>\n                \n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-kq-ksk/bao-cao-tong-hop-kq-ksk-list/bao-cao-tong-hop-kq-ksk-list.component.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-tong-hop-kq-ksk/bao-cao-tong-hop-kq-ksk-list/bao-cao-tong-hop-kq-ksk-list.component.scss ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  table-layout: fixed;\n  width: 100%;\n  border-collapse: collapse;\n  border: 1px solid #dddddd;\n}\n\ntable th.stt {\n  width: 50px;\n}\n\ntable th.namsinh {\n  width: 80px;\n}\n\ntable th.gioiTinh {\n  width: 80px;\n}\n\ntable th.chieucao {\n  width: 80px;\n}\n\ntable th.cannang {\n  width: 80px;\n}\n\ntable th.huyetap {\n  width: 80px;\n}\n\ntable th.dichvu {\n  width: 200px;\n}\n\ntable th.phanloai {\n  width: 200px;\n}\n\ntable th.ketluan {\n  width: 200px;\n}\n\ntable th.denghi {\n  width: 200px;\n}\n\ntable th, table td {\n  width: 150px;\n  text-align: left;\n  padding: 3px;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n\ntr:hover {\n  background-color: #f5f5f5;\n}\n\nul.inline > li {\n  padding-right: 10px !important;\n  padding-bottom: 0.625em;\n  display: inline-block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby10b25nLWhvcC1rcS1rc2svYmFvLWNhby10b25nLWhvcC1rcS1rc2stbGlzdC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGJhby1jYW9cXGJhby1jYW8tdG9uZy1ob3Ata3Eta3NrXFxiYW8tY2FvLXRvbmctaG9wLWtxLWtzay1saXN0XFxiYW8tY2FvLXRvbmctaG9wLWtxLWtzay1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9iYW8tY2FvLXRvbmctaG9wLWtxLWtzay9iYW8tY2FvLXRvbmctaG9wLWtxLWtzay1saXN0L2Jhby1jYW8tdG9uZy1ob3Ata3Eta3NrLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby10b25nLWhvcC1rcS1rc2svYmFvLWNhby10b25nLWhvcC1rcS1rc2stbGlzdC9iYW8tY2FvLXRvbmctaG9wLWtxLWtzay1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbn1cblxudGFibGUgdGguc3R0IHtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbnRhYmxlIHRoLm5hbXNpbmgge1xuICB3aWR0aDogODBweDtcbn1cblxudGFibGUgdGguZ2lvaVRpbmgge1xuICB3aWR0aDogODBweDtcbn1cblxudGFibGUgdGguY2hpZXVjYW8ge1xuICB3aWR0aDogODBweDtcbn1cblxudGFibGUgdGguY2FubmFuZyB7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG50YWJsZSB0aC5odXlldGFwIHtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbnRhYmxlIHRoLmRpY2h2dSB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxudGFibGUgdGgucGhhbmxvYWkge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbnRhYmxlIHRoLmtldGx1YW4ge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbnRhYmxlIHRoLmRlbmdoaSB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxudGFibGUgdGgsIHRhYmxlIHRkIHtcbiAgd2lkdGg6IDE1MHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbnRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG59XG5cbnRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxudWwuaW5saW5lID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn0iLCJ0YWJsZSB7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xufVxuXG50YWJsZSB0aC5zdHQge1xuICB3aWR0aDogNTBweDtcbn1cblxudGFibGUgdGgubmFtc2luaCB7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG50YWJsZSB0aC5naW9pVGluaCB7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG50YWJsZSB0aC5jaGlldWNhbyB7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG50YWJsZSB0aC5jYW5uYW5nIHtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbnRhYmxlIHRoLmh1eWV0YXAge1xuICB3aWR0aDogODBweDtcbn1cblxudGFibGUgdGguZGljaHZ1IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG50YWJsZSB0aC5waGFubG9haSB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxudGFibGUgdGgua2V0bHVhbiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxudGFibGUgdGguZGVuZ2hpIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG50YWJsZSB0aCwgdGFibGUgdGQge1xuICB3aWR0aDogMTUwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcbn1cblxudHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuXG51bC5pbmxpbmUgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-kq-ksk/bao-cao-tong-hop-kq-ksk-list/bao-cao-tong-hop-kq-ksk-list.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-tong-hop-kq-ksk/bao-cao-tong-hop-kq-ksk-list/bao-cao-tong-hop-kq-ksk-list.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: BaoCaoTongHopKqKskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTongHopKqKskListComponent", function() { return BaoCaoTongHopKqKskListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _bao_cao_tong_hop_kq_ksk_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../bao-cao-tong-hop-kq-ksk.model */ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-kq-ksk/bao-cao-tong-hop-kq-ksk.model.ts");












let BaoCaoTongHopKqKskListComponent = class BaoCaoTongHopKqKskListComponent {
    constructor(apiService, dialog, authService, notificationService) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.authService = authService;
        this.notificationService = notificationService;
        this.baoCaoSearch = new _bao_cao_tong_hop_kq_ksk_model__WEBPACK_IMPORTED_MODULE_11__["BaoCaoTongHopKetQuaKSK"]();
        // inBaoCaoXuatNhapTon: InBaoCaoXuatNhapTonVT  = new InBaoCaoXuatNhapTonVT ();
        this.disableXemXuatExcel = false;
        this.pageSize = 50;
        this.skip = 0;
        this.html = null;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].BaoCaoTongHopKetQuaKSK;
        jQuery("#content").css({ "height": jQuery(window).height() - 187 });
    }
    exportExcel() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_8__["SecurityOperation"].Process)) {
            if (this.baoCaoSearch.CongTyId == null || this.baoCaoSearch.HopDongId == null) {
                this.notificationService.showError("Yêu cầu nhập công ty và hợp đồng");
                return;
            }
            this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xuất excel...' }
            });
            this.apiService.postExportExcel("BaoCao/ExportBaoCaoTongHopKetQuaKSK", this.baoCaoSearch)
                .subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_4__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoTongHopKetQuaKSK" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xem() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_8__["SecurityOperation"].Process)) {
            if (this.baoCaoSearch.CongTyId == null || this.baoCaoSearch.HopDongId == null) {
                this.notificationService.showError("Yêu cầu nhập công ty và hợp đồng");
                return;
            }
            this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang loading ...' }
            });
            this.apiService.post("BaoCao/GetHTMLBaoCaoTongHopKetQuaKSK", this.baoCaoSearch).subscribe(resultData => {
                if (resultData !== undefined && resultData != null && resultData != "") {
                    this.html = resultData;
                    this.dialog.closeAll();
                }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    changeLookupHopDong(event) {
        if (event && event.length > 0 && this.baoCaoSearch.CongTyId && !this.baoCaoSearch.HopDongId) {
            this.baoCaoSearch.HopDongId = event[0].KeyId;
        }
    }
    changeCongTy(event) {
        this.baoCaoSearch.CongTyId = event;
        this.baoCaoSearch.HopDongId = null;
    }
};
BaoCaoTongHopKqKskListComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] }
];
BaoCaoTongHopKqKskListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bao-cao-tong-hop-kq-ksk-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-tong-hop-kq-ksk-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tong-hop-kq-ksk/bao-cao-tong-hop-kq-ksk-list/bao-cao-tong-hop-kq-ksk-list.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-tong-hop-kq-ksk-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-kq-ksk/bao-cao-tong-hop-kq-ksk-list/bao-cao-tong-hop-kq-ksk-list.component.scss")).default]
    })
], BaoCaoTongHopKqKskListComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-kq-ksk/bao-cao-tong-hop-kq-ksk-routing.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-tong-hop-kq-ksk/bao-cao-tong-hop-kq-ksk-routing.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: BaoCaoTongHopKqKskRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTongHopKqKskRoutingModule", function() { return BaoCaoTongHopKqKskRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _bao_cao_tong_hop_kq_ksk_list_bao_cao_tong_hop_kq_ksk_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-tong-hop-kq-ksk-list/bao-cao-tong-hop-kq-ksk-list.component */ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-kq-ksk/bao-cao-tong-hop-kq-ksk-list/bao-cao-tong-hop-kq-ksk-list.component.ts");







const routes = [
    {
        path: '',
        component: _bao_cao_tong_hop_kq_ksk_list_bao_cao_tong_hop_kq_ksk_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoTongHopKqKskListComponent"],
        data: {
            title: 'Báo cáo tổng hợp kết quả khám sức khỏe',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoTongHopKetQuaKSK,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    }
];
let BaoCaoTongHopKqKskRoutingModule = class BaoCaoTongHopKqKskRoutingModule {
};
BaoCaoTongHopKqKskRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BaoCaoTongHopKqKskRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-kq-ksk/bao-cao-tong-hop-kq-ksk.model.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-tong-hop-kq-ksk/bao-cao-tong-hop-kq-ksk.model.ts ***!
  \***********************************************************************************************/
/*! exports provided: BaoCaoTongHopKetQuaKSK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTongHopKetQuaKSK", function() { return BaoCaoTongHopKetQuaKSK; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BaoCaoTongHopKetQuaKSK {
    constructor(FromDate = null, ToDate = null, CongTyId = null, HopDongId = null, Skip = 0, Take = 50, PageSize = 50, SearchString = "", AdditionalSearchString = "", Sort = []) {
        this.FromDate = FromDate;
        this.ToDate = ToDate;
        this.CongTyId = CongTyId;
        this.HopDongId = HopDongId;
        this.Skip = Skip;
        this.Take = Take;
        this.PageSize = PageSize;
        this.SearchString = SearchString;
        this.AdditionalSearchString = AdditionalSearchString;
        this.Sort = Sort;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-kq-ksk/bao-cao-tong-hop-kq-ksk.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-tong-hop-kq-ksk/bao-cao-tong-hop-kq-ksk.module.ts ***!
  \************************************************************************************************/
/*! exports provided: BaoCaoTongHopKqKskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTongHopKqKskModule", function() { return BaoCaoTongHopKqKskModule; });
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
/* harmony import */ var _bao_cao_tong_hop_kq_ksk_list_bao_cao_tong_hop_kq_ksk_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bao-cao-tong-hop-kq-ksk-list/bao-cao-tong-hop-kq-ksk-list.component */ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-kq-ksk/bao-cao-tong-hop-kq-ksk-list/bao-cao-tong-hop-kq-ksk-list.component.ts");
/* harmony import */ var _bao_cao_tong_hop_kq_ksk_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bao-cao-tong-hop-kq-ksk-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-kq-ksk/bao-cao-tong-hop-kq-ksk-routing.module.ts");
/* harmony import */ var _bao_cao_tong_hop_kq_ksk_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bao-cao-tong-hop-kq-ksk.service */ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-kq-ksk/bao-cao-tong-hop-kq-ksk.service.ts");





















let BaoCaoTongHopKqKskModule = class BaoCaoTongHopKqKskModule {
};
BaoCaoTongHopKqKskModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bao_cao_tong_hop_kq_ksk_list_bao_cao_tong_hop_kq_ksk_list_component__WEBPACK_IMPORTED_MODULE_18__["BaoCaoTongHopKqKskListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _bao_cao_tong_hop_kq_ksk_routing_module__WEBPACK_IMPORTED_MODULE_19__["BaoCaoTongHopKqKskRoutingModule"],
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
            _bao_cao_tong_hop_kq_ksk_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoTongHopKqKskService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"], useClass: _bao_cao_tong_hop_kq_ksk_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoTongHopKqKskService"] },
        ]
    })
], BaoCaoTongHopKqKskModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-kq-ksk/bao-cao-tong-hop-kq-ksk.service.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-tong-hop-kq-ksk/bao-cao-tong-hop-kq-ksk.service.ts ***!
  \*************************************************************************************************/
/*! exports provided: BaoCaoTongHopKqKskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTongHopKqKskService", function() { return BaoCaoTongHopKqKskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");




let BaoCaoTongHopKqKskService = class BaoCaoTongHopKqKskService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'BaoCao';
    }
};
BaoCaoTongHopKqKskService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
BaoCaoTongHopKqKskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BaoCaoTongHopKqKskService);



/***/ })

}]);
//# sourceMappingURL=bao-cao-bao-cao-tong-hop-kq-ksk-bao-cao-tong-hop-kq-ksk-module-es2015.js.map