(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-hieu-qua-cong-viec-bao-cao-hieu-qua-cong-viec-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-hieu-qua-cong-viec/bao-cao-hieu-qua-cong-viec-list/bao-cao-hieu-qua-cong-viec-list.component.html": 
        /*!**************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-hieu-qua-cong-viec/bao-cao-hieu-qua-cong-viec-list/bao-cao-hieu-qua-cong-viec-list.component.html ***!
          \**************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[                   \n                {Title:'Thống Kê', Path:''},\n                {Title:'Báo Cáo', Path:''},\n                {Title:'Hiệu Quả Công Việc', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid\n                [gridColumns]=\"gridColumns\" [gridDataSource]=\"gridDataSource\"\n                [documentType]=\"documentType\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" \n                [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\" [checkboxAble]=\"false\"\n                [showStt]=\"true\" (extOnPageChange)=\"pageChange($event)\" (extOnSearch)=\"seachChange($event)\" >\n            </app-grid>\n<!-- \n            <kendo-grid [hideHeader]=\"HideHeader\" id=\"{{masterName}}\" [data]=\"_gridDataSource\" #grid [height]=\"_height\"\n            [pageSize]=\"_pageSize\" [skip]=\"_skip\" [pageable]=\"_pageable\" (pageChange)=\"pageChange($event)\"\n            [sortable]=\"{ allowUnsort: true,mode:'single'}\" [sort]=\"sort\" [resizable]=\"true\"\n            (sortChange)=\"sortChange($event)\" [filter]=\"_filter\" [filterable]=\"filterable\"\n            (filterChange)=\"filterChange($event)\" [selectable]=\"{enabled: checkboxAble, checkboxOnly: true }\"\n            [kendoGridSelectBy]=\"keySelectBy\" [selectedKeys]=\"mySelection\"\n            (selectedKeysChange)=\"onSelectedKeysChange($event)\" [group]=\"groups\" [navigable]=\"true\"\n            (cellClick)=\"cellClick($event)\" (dblclick)=\"onDblClick($event)\" (detailExpand)=\"detailExpand($event)\"\n            (detailCollapse)=\"detailCollapse($event)\" (groupExpand)=\"groupExpand($event)\" [rowClass]=\"rowCallback\"> -->\n\n            <ng-template #tongCongTemplateFooter let-dataItem>\n                <span style=\"font-weight: bold;color:#000;text-align: left;\">Tổng Cộng :</span>\n                <hr class=\"border-line\">\n                <span style=\"font-weight: bold;color:#000;text-align: left;\">Tỷ lệ :</span>\n            </ng-template>\n\n            <ng-template #yeuCauTemplateFooter let-aggregates>\n                <span style=\"color:#000;text-align: left;\">{{totalYeuCau()}}</span>\n                <hr class=\"border-line\">\n                <span style=\"color:#000;text-align: left;\">&nbsp;</span>\n            </ng-template>\n            <ng-template #daHoanThanhTemplateFooter let-aggregates>\n                <span style=\"color:#000;text-align: left;\">{{totalDaHoanThanh()}}</span>\n                <hr class=\"border-line\">\n                <span style=\"color:#000;text-align: left;\">{{percentDaHoanThanh() | number:'0.2-2':'vi-VN'}} %</span>\n            </ng-template>\n            <ng-template #dangThucHienTemplateFooter let-aggregates>\n                <span style=\"color:#000;text-align: left;\">{{totalDangThucHien()}}</span>\n                <hr class=\"border-line\">\n                <span style=\"color:#000;text-align: left;\">{{percentDangThucHien() | number:'0.2-2':'vi-VN'}} %</span>\n            </ng-template>\n        </div>\n\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                        (click)=\"exportExcel()\">Xuất Excel</button>\n                    <!-- <button [disabled]=\"!IsData\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                        class=\"mr-1 mt-2\" (click)=\"InBaoCao()\" style=\"float: right;\">In Báo cáo</button> -->\n                </div>\n\n                <span fxFlex></span>\n\n                <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button kendoTooltip\n                    title=\"Lọc cột\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                </button>\n\n                <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <div *ngFor=\"let column of gridColumns\">\n                        <button *ngIf=\"column.Title != ''\"\n                            class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                            <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                {{ column.Title }}\n                            </mat-checkbox>\n                        </button>\n                    </div>\n                </mat-menu>\n            </div>\n        </ng-template>\n        <ng-template #sttTemplate let-rowIndex=\"rowIndex\">\n            {{rowIndex + 1}}\n        </ng-template>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-hieu-qua-cong-viec/bao-cao-hieu-qua-cong-viec-list/bao-cao-hieu-qua-cong-viec-list.component.scss": 
        /*!************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-hieu-qua-cong-viec/bao-cao-hieu-qua-cong-viec-list/bao-cao-hieu-qua-cong-viec-list.component.scss ***!
          \************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".border-line {\n  height: 1px;\n  width: calc(100% + 15px);\n  margin-left: -8px;\n  border-color: rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1oaWV1LXF1YS1jb25nLXZpZWMvYmFvLWNhby1oaWV1LXF1YS1jb25nLXZpZWMtbGlzdC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGJhby1jYW9cXGJhby1jYW8taGlldS1xdWEtY29uZy12aWVjXFxiYW8tY2FvLWhpZXUtcXVhLWNvbmctdmllYy1saXN0XFxiYW8tY2FvLWhpZXUtcXVhLWNvbmctdmllYy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9iYW8tY2FvLWhpZXUtcXVhLWNvbmctdmllYy9iYW8tY2FvLWhpZXUtcXVhLWNvbmctdmllYy1saXN0L2Jhby1jYW8taGlldS1xdWEtY29uZy12aWVjLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9iYW8tY2FvLWhpZXUtcXVhLWNvbmctdmllYy9iYW8tY2FvLWhpZXUtcXVhLWNvbmctdmllYy1saXN0L2Jhby1jYW8taGlldS1xdWEtY29uZy12aWVjLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9yZGVyLWxpbmUge1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDE1cHgpO1xuICBtYXJnaW4tbGVmdDogLThweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufSIsIi5ib3JkZXItbGluZSB7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogY2FsYygxMDAlICsgMTVweCk7XG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-hieu-qua-cong-viec/bao-cao-hieu-qua-cong-viec-list/bao-cao-hieu-qua-cong-viec-list.component.ts": 
        /*!**********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-hieu-qua-cong-viec/bao-cao-hieu-qua-cong-viec-list/bao-cao-hieu-qua-cong-viec-list.component.ts ***!
          \**********************************************************************************************************************************************/
        /*! exports provided: BaoCaoHieuQuaCongViecListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoHieuQuaCongViecListComponent", function () { return BaoCaoHieuQuaCongViecListComponent; });
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
            /* harmony import */ var _bao_cao_hieu_qua_cong_viec_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../bao-cao-hieu-qua-cong-viec.model */ "./src/app/modules/main/bao-cao/bao-cao-hieu-qua-cong-viec/bao-cao-hieu-qua-cong-viec.model.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12__);
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            var BaoCaoHieuQuaCongViecListComponent = /** @class */ (function () {
                function BaoCaoHieuQuaCongViecListComponent(authService, apiService, notificationService, dialog) {
                    this.authService = authService;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.dialog = dialog;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12___default.a;
                    this.baoCaoSearch = new _bao_cao_hieu_qua_cong_viec_model__WEBPACK_IMPORTED_MODULE_11__["BaoCaoHieuQuaCongViecSearch"]();
                    this.inBaoCaoHoatDongKhoaKhamBenh = new _bao_cao_hieu_qua_cong_viec_model__WEBPACK_IMPORTED_MODULE_11__["InBaoCaoHieuQuaCongViec"]();
                    this.gridColumns = [];
                    this.gridDataSource = {
                        data: [],
                        total: 0
                    };
                    this.pageSize = 2;
                    this.skip = 0;
                    this.showGrid = false;
                    this.showPrintExport = false;
                }
                BaoCaoHieuQuaCongViecListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].BaoCaoHieuQuaCongViec;
                    this.gridColumns = [
                        { Field: "Khoa", Title: "Khoa", Width: 100, TemplateFooter: this.tongCongTemplateFooter },
                        { Field: "YeuCau", Title: "Yêu Cầu", Width: 100, TemplateFooter: this.yeuCauTemplateFooter },
                        { Field: "DaHoanThanh", Title: "Đã hoàn thành", Width: 100, TemplateFooter: this.daHoanThanhTemplateFooter },
                        { Field: "DangThucHien", Title: "Đang thực hiện", Width: 100, TemplateFooter: this.dangThucHienTemplateFooter },
                    ];
                };
                BaoCaoHieuQuaCongViecListComponent.prototype.totalYeuCau = function () {
                    if (this.gridDataSource.data != undefined) {
                        this.sumYeuCau = this.gridDataSource.data.reduce(function (sum, item) { return sum + item.YeuCau; }, 0);
                        return this.sumYeuCau;
                    }
                };
                BaoCaoHieuQuaCongViecListComponent.prototype.totalDaHoanThanh = function () {
                    if (this.gridDataSource.data != undefined) {
                        this.sumDaHoanThanh = this.gridDataSource.data.reduce(function (sum, item) { return sum + item.DaHoanThanh; }, 0);
                        return this.sumDaHoanThanh;
                    }
                };
                BaoCaoHieuQuaCongViecListComponent.prototype.totalDangThucHien = function () {
                    if (this.gridDataSource.data != undefined) {
                        this.sumDangThucHien = this.gridDataSource.data.reduce(function (sum, item) { return sum + item.DangThucHien; }, 0);
                        return this.sumDangThucHien;
                    }
                };
                BaoCaoHieuQuaCongViecListComponent.prototype.percentDaHoanThanh = function () {
                    if (this.gridDataSource.data != undefined) {
                        return this.sumDaHoanThanh / this.sumYeuCau * 100;
                    }
                };
                BaoCaoHieuQuaCongViecListComponent.prototype.percentDangThucHien = function () {
                    if (this.gridDataSource.data != undefined) {
                        return this.sumDangThucHien / this.sumYeuCau * 100;
                    }
                };
                // getFieldColumn(index: number) {
                //   return this.gridColumns[index].Field;
                // }
                // getTitleColumn(index: number) {
                //   // console.log(this.gridColumns[index])
                //   return this.gridColumns[index].Title;
                // }
                // getWidthColumn(index: number) {
                //   return this.gridColumns[index].Width != null ? this.gridColumns[index].Width : this.getMinWidthColumn(this.gridColumns[index].MinWidth != null ? this.gridColumns[index].MinWidth : 100);
                // }
                // getMinWidthColumn(minWidth: number) {
                //   var widthParent = jQuery("#baoCaoCongNoCongTyBhtn").parent().width();
                //   var widthScreen = (widthParent != undefined ? Math.round(widthParent) : jQuery(window).width()) - 120;
                //   var totalWidth = this.gridColumns.filter((item) => {
                //     return item.Width != null;
                //   }).reduce((sum, item) => sum + item.Width, 0);
                //   if ((widthScreen < totalWidth + minWidth + 100)) {
                //     return minWidth;
                //   }
                //   else {
                //     return widthScreen - (totalWidth + minWidth + 100) > minWidth ? widthScreen - (totalWidth + minWidth + 100) : minWidth;
                //   }
                // }
                BaoCaoHieuQuaCongViecListComponent.prototype.pageChange = function (event) {
                    this.skip = event;
                    this.XemBaoCao();
                    // var takeTo = +this.skip + +this.pageSize;
                    // this.gridView.data = this.gridDataSource.data.slice(this.skip, takeTo);
                    // this.gridView.total = this.gridDataSource.total;
                };
                BaoCaoHieuQuaCongViecListComponent.prototype.seachChange = function (event) {
                    this.skip = 0;
                    this.XemBaoCao();
                };
                BaoCaoHieuQuaCongViecListComponent.prototype.XemBaoCao = function () {
                    var _this = this;
                    this.gridChild._isLoadingTotalPage = true;
                    this.gridChild._isLoading = true;
                    this.apiService.post("BaoCao/GetDataBaoCaoHieuQuaCongViec", this.baoCaoSearch).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            if (resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0) {
                                _this.showPrintExport = true;
                            }
                            _this.showGrid = true;
                            _this.gridDataSource.data = resultData.Data.slice();
                            _this.gridDataSource.total = _this.gridDataSource.data.length;
                            // this.gridChild.setDataSource();
                            var takeTo = +_this.skip + +_this.pageSize;
                            _this.gridDataSource.data = _this.gridDataSource.data.slice(_this.skip, takeTo);
                            _this.gridChild._isLoadingTotalPage = false;
                            _this.gridChild._isLoading = false;
                        }
                    });
                };
                BaoCaoHieuQuaCongViecListComponent.prototype.exportExcel = function () {
                    var _this = this;
                    // if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
                    //   this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                    //   return;
                    // }
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Process)) {
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
                        // this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay + ";" + this.inBaoCaoHoatDongKhoaKhamBenh.HostingName;
                        this.apiService.postExportExcel("BaoCao/ExportBaoCaoHieuQuaCongViec", this.baoCaoSearch)
                            .subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoHieuQuaCongViec" + dateTimeNow.getFullYear() + ".xlsx");
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
                return BaoCaoHieuQuaCongViecListComponent;
            }());
            BaoCaoHieuQuaCongViecListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_13__["GridComponent"], { static: true })
            ], BaoCaoHieuQuaCongViecListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongCongTemplateFooter', { static: true })
            ], BaoCaoHieuQuaCongViecListComponent.prototype, "tongCongTemplateFooter", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('yeuCauTemplateFooter', { static: true })
            ], BaoCaoHieuQuaCongViecListComponent.prototype, "yeuCauTemplateFooter", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('daHoanThanhTemplateFooter', { static: true })
            ], BaoCaoHieuQuaCongViecListComponent.prototype, "daHoanThanhTemplateFooter", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dangThucHienTemplateFooter', { static: true })
            ], BaoCaoHieuQuaCongViecListComponent.prototype, "dangThucHienTemplateFooter", void 0);
            BaoCaoHieuQuaCongViecListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bao-cao-hieu-qua-cong-viec-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-hieu-qua-cong-viec-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-hieu-qua-cong-viec/bao-cao-hieu-qua-cong-viec-list/bao-cao-hieu-qua-cong-viec-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-hieu-qua-cong-viec-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-hieu-qua-cong-viec/bao-cao-hieu-qua-cong-viec-list/bao-cao-hieu-qua-cong-viec-list.component.scss")).default]
                })
            ], BaoCaoHieuQuaCongViecListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-hieu-qua-cong-viec/bao-cao-hieu-qua-cong-viec-routing.module.ts": 
        /*!**************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-hieu-qua-cong-viec/bao-cao-hieu-qua-cong-viec-routing.module.ts ***!
          \**************************************************************************************************************/
        /*! exports provided: BaoCaoHieuQuaCongViecRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoHieuQuaCongViecRoutingModule", function () { return BaoCaoHieuQuaCongViecRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _bao_cao_hieu_qua_cong_viec_list_bao_cao_hieu_qua_cong_viec_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-hieu-qua-cong-viec-list/bao-cao-hieu-qua-cong-viec-list.component */ "./src/app/modules/main/bao-cao/bao-cao-hieu-qua-cong-viec/bao-cao-hieu-qua-cong-viec-list/bao-cao-hieu-qua-cong-viec-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _bao_cao_hieu_qua_cong_viec_list_bao_cao_hieu_qua_cong_viec_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoHieuQuaCongViecListComponent"],
                    data: {
                        title: 'Báo cáo hiệu quả công việc',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].BaoCaoHieuQuaCongViec,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                }
            ];
            var BaoCaoHieuQuaCongViecRoutingModule = /** @class */ (function () {
                function BaoCaoHieuQuaCongViecRoutingModule() {
                }
                return BaoCaoHieuQuaCongViecRoutingModule;
            }());
            BaoCaoHieuQuaCongViecRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BaoCaoHieuQuaCongViecRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-hieu-qua-cong-viec/bao-cao-hieu-qua-cong-viec.model.ts": 
        /*!*****************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-hieu-qua-cong-viec/bao-cao-hieu-qua-cong-viec.model.ts ***!
          \*****************************************************************************************************/
        /*! exports provided: BaoCaoHieuQuaCongViecSearch, InBaoCaoHieuQuaCongViec */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoHieuQuaCongViecSearch", function () { return BaoCaoHieuQuaCongViecSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBaoCaoHieuQuaCongViec", function () { return InBaoCaoHieuQuaCongViec; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var BaoCaoHieuQuaCongViecSearch = /** @class */ (function () {
                function BaoCaoHieuQuaCongViecSearch(FromDate, ToDate, TuNgayFormat, DenNgayFormat, Skip, Take, PageSize, SearchString, AdditionalSearchString, Sort) {
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
                return BaoCaoHieuQuaCongViecSearch;
            }());
            var InBaoCaoHieuQuaCongViec = /** @class */ (function () {
                function InBaoCaoHieuQuaCongViec(HostingName, FromDate, ToDate) {
                    if (HostingName === void 0) { HostingName = null; }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    this.HostingName = HostingName;
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                }
                return InBaoCaoHieuQuaCongViec;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-hieu-qua-cong-viec/bao-cao-hieu-qua-cong-viec.module.ts": 
        /*!******************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-hieu-qua-cong-viec/bao-cao-hieu-qua-cong-viec.module.ts ***!
          \******************************************************************************************************/
        /*! exports provided: BaoCaoHieuQuaCongViecModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoHieuQuaCongViecModule", function () { return BaoCaoHieuQuaCongViecModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _bao_cao_hieu_qua_cong_viec_list_bao_cao_hieu_qua_cong_viec_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bao-cao-hieu-qua-cong-viec-list/bao-cao-hieu-qua-cong-viec-list.component */ "./src/app/modules/main/bao-cao/bao-cao-hieu-qua-cong-viec/bao-cao-hieu-qua-cong-viec-list/bao-cao-hieu-qua-cong-viec-list.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _bao_cao_hieu_qua_cong_viec_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bao-cao-hieu-qua-cong-viec-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-hieu-qua-cong-viec/bao-cao-hieu-qua-cong-viec-routing.module.ts");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            var BaoCaoHieuQuaCongViecModule = /** @class */ (function () {
                function BaoCaoHieuQuaCongViecModule() {
                }
                return BaoCaoHieuQuaCongViecModule;
            }());
            BaoCaoHieuQuaCongViecModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_bao_cao_hieu_qua_cong_viec_list_bao_cao_hieu_qua_cong_viec_list_component__WEBPACK_IMPORTED_MODULE_3__["BaoCaoHieuQuaCongViecListComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                        _bao_cao_hieu_qua_cong_viec_routing_module__WEBPACK_IMPORTED_MODULE_10__["BaoCaoHieuQuaCongViecRoutingModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                    ]
                })
            ], BaoCaoHieuQuaCongViecModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-bao-cao-hieu-qua-cong-viec-bao-cao-hieu-qua-cong-viec-module-es2015.js.map
//# sourceMappingURL=bao-cao-bao-cao-hieu-qua-cong-viec-bao-cao-hieu-qua-cong-viec-module-es5.js.map
//# sourceMappingURL=bao-cao-bao-cao-hieu-qua-cong-viec-bao-cao-hieu-qua-cong-viec-module-es5.js.map