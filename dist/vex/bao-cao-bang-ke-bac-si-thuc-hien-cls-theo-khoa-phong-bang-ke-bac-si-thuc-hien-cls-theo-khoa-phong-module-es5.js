(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list.component.html": 
        /*!********************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list.component.html ***!
          \********************************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Thống Kê', Path:''},\n                    {Title:'Báo Cáo', Path:''},\n                    {Title:'KHTH', Path:''},\n                    {Title:'Hoạt Động Khám Bệnh Theo Khoa Phòng', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n                <app-checkbox [(model)]=\"baoCaoSearch.DangKham\" id=\"dangKham\" label=\"Đang khám\" class=\"ml-2 mt-2\">\n                </app-checkbox>\n                <app-checkbox [(model)]=\"baoCaoSearch.DaHoanThanh\" id=\"daHoanThanh\" label=\"Đã hoàn thành\" class=\"ml-2 mr-2 mt-2\">\n                </app-checkbox>\n            \n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" #tiepnhantu id=\"TuNgayFormat\"\n                    [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n            \n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" #tiepnhanden id=\"DenNgayFormat\"\n                    [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header\" label=\"Đến ngày\">\n                </app-datetimepicker>\n            \n                <div fxFlex=\"auto\" fxFlex.sm=\"auto\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\" (click)=\"XemBaoCao()\">Xem\n                        Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"exportExcel()\">Xuất Excel</button>\n                </div>\n            \n                <div fxFlex=\"100%\" fxFlex.sm=\"100%\" [ngStyle]=\"{'min-height': height+'px'}\" class=\"pb-0\">\n                    <kendo-grid [data]=\"gridDataSource\" class=\"k-grid1 grid-bao-cao\" [pageable]=\"false\" [resizable]=\"true\"\n                        [height]=\"height\" id=\"baoCaoGrid\" #baoCaoGrid>\n            \n                        <kendo-grid-column field=\"{{getFieldColumn(0)}}\" title=\"{{getTitleColumn(0)}}\" width=\"{{getWidthColumn(0)}}\"\n                            [headerStyle]=\"{'text-align': 'left','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div [style.fontWeight]=\"dataItem.InDamNoiDung ? 'bold' : ''\" style=\"text-align: left;\">{{ dataItem.STT}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n            \n                        <kendo-grid-column field=\"{{getFieldColumn(1)}}\" title=\"{{getTitleColumn(1)}}\" width=\"{{getWidthColumn(1)}}\"\n                            [headerStyle]=\"{'text-align': 'left','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div [style.fontWeight]=\"dataItem.InDamNoiDung ? 'bold' : ''\" style=\"text-align: left;\">{{ dataItem.NoiDung}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n            \n                        <kendo-grid-column field=\"{{getFieldColumn(2)}}\" title=\"{{getTitleColumn(2)}}\" width=\"{{getWidthColumn(2)}}\"\n                            [headerStyle]=\"{'text-align': 'left','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div *ngIf=\"!dataItem.LaItemTieuDe\" [style.fontWeight]=\"dataItem.InDamNoiDung ? 'bold' : ''\" style=\"text-align: left;\">{{ dataItem.TongSo| number}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n            \n                        <ng-container *ngFor=\"let khoaPhong of this.gridColumnsKhoaPhong, let i = index\">\n                            <kendo-grid-column field=\"{{getFieldColumn(i, false)}}\" title=\"{{getTitleColumn(i, false)}}\"\n                                width=\"{{getWidthColumn(i, false)}}\" [headerStyle]=\"{'text-align': 'left'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div *ngIf=\"!dataItem.LaItemTieuDe\" [style.fontWeight]=\"dataItem.InDamNoiDung ? 'bold' : ''\" style=\"text-align: left;\"> {{ getDataSoLuongTheoKhoaPhong(khoaPhong.Field, dataItem) | number}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                        </ng-container>\n            \n            \n                        <kendo-grid-messages noRecords=\"Không có dữ liệu.\" pagerOf=\"trong số\" pagerItems=\"dòng\"\n                            detailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\">\n                        </kendo-grid-messages>\n            \n                        <!-- <ng-template kendoPagerTemplate let-totalPages=\"totalPages\" let-currentPage=\"currentPage\">\n                            <div style=\"justify-content: center;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                                fxLayoutAlign=\"space-between\" fxFlex=\"100%\" *ngIf=\"_showDefaultPagerTemplate\">\n                                <kendo-pager-prev-buttons></kendo-pager-prev-buttons>\n                                <kendo-pager-numeric-buttons [buttonCount]=\"5\" class=\"d-none d-sm-none d-md-block\">\n                                </kendo-pager-numeric-buttons>\n                                <button *ngIf=\"_isLoadingTotalPage\" kendoButton\n                                    class=\"btn btn-raised btn-default btn-min-width mb-0\">\n                                    <img src=\"/assets/img/loader_circle.gif\" alt=\"Đang tính...\" style=\"height: 20px;\" />\n                                </button>\n                                <kendo-pager-next-buttons></kendo-pager-next-buttons>\n                                <kendo-pager-info></kendo-pager-info>\n                                <div kendoTooltip class=\"k-icon k-i-refresh\" style=\"order: 10;cursor: pointer; align-self: center;\"\n                                    title=\"Làm mới\" (click)=\"XemBaoCao()\"></div>\n                                <div *ngIf=\"_isLoading\" class=\"grid-loading k-i-loading\"></div>\n                            </div>\n                        </ng-template> -->\n                    </kendo-grid>\n                </div>\n            \n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list.component.scss": 
        /*!******************************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list.component.scss ***!
          \******************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhbmcta2UtYmFjLXNpLXRodWMtaGllbi1jbHMtdGhlby1raG9hLXBob25nL2Jhbmcta2UtYmFjLXNpLXRodWMtaGllbi1jbHMtdGhlby1raG9hLXBob25nLWxpc3QvYmFuZy1rZS1iYWMtc2ktdGh1Yy1oaWVuLWNscy10aGVvLWtob2EtcGhvbmctbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list.component.ts": 
        /*!****************************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list.component.ts ***!
          \****************************************************************************************************************************************************************************************************/
        /*! exports provided: BangKeBacSiThucHienClsTheoKhoaPhongListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BangKeBacSiThucHienClsTheoKhoaPhongListComponent", function () { return BangKeBacSiThucHienClsTheoKhoaPhongListComponent; });
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
            /* harmony import */ var _bang_ke_bac_si_thuc_hien_cls_theo_khoa_phong_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong.model */ "./src/app/modules/main/bao-cao/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong.model.ts");
            var BangKeBacSiThucHienClsTheoKhoaPhongListComponent = /** @class */ (function () {
                // @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
                function BangKeBacSiThucHienClsTheoKhoaPhongListComponent(apiService, dialog, authService, notificationService) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.baoCaoSearch = new _bang_ke_bac_si_thuc_hien_cls_theo_khoa_phong_model__WEBPACK_IMPORTED_MODULE_11__["BangKeBacSiThucHienClsTheoKhoaPhongTimKiemNangCao"]();
                    this.additionalSearchString = "";
                    this.minDateDenNgay = null;
                    this.minDateTuNgay = null;
                    this.dataSource = {
                        data: [],
                        total: 0
                    };
                    this.gridDataSource = {
                        data: [],
                        total: 0
                    };
                    this.pageSize = 50;
                    this.skip = 0;
                    this._isLoading = false;
                    this._isLoadingTotalPage = false;
                    this.showDefaultPagerTemplate = true;
                }
                BangKeBacSiThucHienClsTheoKhoaPhongListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].BaoCaoHoatDongKhamBenhTheoKhoaPhong;
                    this.skip = 0;
                    this.take = (this.pageSize * this.skip) + this.pageSize;
                    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
                    this.gridColumnsDefault = [
                        { Field: "STT", Title: "STT", Width: 30 },
                        { Field: "NoiDung", Title: "", Width: 250 },
                        { Field: "TongSo", Title: "Tổng số", Width: 80 }
                    ];
                    this.ganThoiGianTimKiemMacDinh();
                };
                BangKeBacSiThucHienClsTheoKhoaPhongListComponent.prototype.exportExcel = function () {
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
                        var tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
                        var denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
                        this.baoCaoSearch.FromDate = tuNgay;
                        this.baoCaoSearch.ToDate = denNgay;
                        //this.gridChild._gridQueryInfo.additionalSearchString = JSON.stringify(this.baoCaoSearch);
                        var searchText = this.getSearchText();
                        this.queryInfo = { skip: this.skip, take: this.pageSize, pageSize: this.pageSize, searchString: searchText, additionalSearchString: JSON.stringify(this.baoCaoSearch), sort: null, lazyLoadPage: false };
                        this.apiService.postExportExcel("BaoCao/ExportBaoCaoHoatDongKhamBenhTheoKhoaPhong", this.queryInfo)
                            .subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoHoatDongKhamBenhTheoKhoaPhong" + dateTimeNow.getFullYear() + ".xlsx");
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
                BangKeBacSiThucHienClsTheoKhoaPhongListComponent.prototype.XemBaoCao = function () {
                    var _this = this;
                    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        return;
                    }
                    this.showPopupLoadingData();
                    var tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
                    var denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
                    this.baoCaoSearch.FromDate = tuNgay;
                    this.baoCaoSearch.ToDate = denNgay;
                    //this.gridChild._additionalSearchString = JSON.stringify(this.baoCaoSearch);
                    var searchText = this.getSearchText();
                    this.queryInfo = { skip: this.skip, take: this.pageSize, pageSize: this.pageSize, searchString: searchText, additionalSearchString: JSON.stringify(this.baoCaoSearch), sort: null, lazyLoadPage: false };
                    this.apiService.post("BaoCao/GetDataBaoCaoHoatDongKhamBenhTheoKhoaPhongForGrid", this.queryInfo).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            _this.gridColumnsKhoaPhong = [];
                            _this.dataSource = {
                                data: resultData.Data,
                                total: resultData.TotalRowCount
                            };
                            // xử lý khoa phòng
                            if (_this.dataSource.data.length > 0) {
                                var gridColumnsKhoaPhongTemp_1 = [];
                                _this.dataSource.data.forEach(function (noiDung) {
                                    noiDung.ThongTinKhamTheoPhongs.forEach(function (element) {
                                        var index = gridColumnsKhoaPhongTemp_1.findIndex(function (x) { return x.Field == element.PhongBenhVienId; });
                                        if (index == -1) {
                                            gridColumnsKhoaPhongTemp_1.push({ Field: element.PhongBenhVienId, Title: element.TenPhongBenhVien, Width: 100 });
                                        }
                                    });
                                });
                                _this.gridColumnsKhoaPhong = gridColumnsKhoaPhongTemp_1.sort(function (a, b) {
                                    return a.Title.localeCompare(b.Title);
                                });
                            }
                            var gridData = _this.dataSource.data.slice(0, 50);
                            _this.gridDataSource = {
                                data: gridData,
                                total: resultData.TotalRowCount
                            };
                            _this._isLoading = false;
                            _this._isLoadingTotalPage = false;
                        }
                        _this.closePopupLoadingData();
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                BangKeBacSiThucHienClsTheoKhoaPhongListComponent.prototype.ganThoiGianTimKiemMacDinh = function (xoaThoiGianMacDinh) {
                    if (xoaThoiGianMacDinh === void 0) { xoaThoiGianMacDinh = false; }
                    if (xoaThoiGianMacDinh) {
                        this.baoCaoSearch.TuNgayFormat = null;
                        this.baoCaoSearch.DenNgayFormat = null;
                    }
                    else {
                        this.minDateTuNgay = new Date();
                        this.minDateTuNgay.setHours(0, 0, 0, 0);
                        this.minDateTuNgay.setDate(1);
                        if (this.baoCaoSearch.TuNgayFormat == null) {
                            this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
                        }
                        if (this.baoCaoSearch.DenNgayFormat == null) {
                            this.baoCaoSearch.DenNgayFormat = new Date();
                        }
                    }
                };
                BangKeBacSiThucHienClsTheoKhoaPhongListComponent.prototype.getFieldColumn = function (index, laGridColumnsDefault) {
                    if (laGridColumnsDefault === void 0) { laGridColumnsDefault = true; }
                    if (laGridColumnsDefault) {
                        return this.gridColumnsDefault[index].Field;
                    }
                    return this.gridColumnsKhoaPhong[index].Field;
                };
                BangKeBacSiThucHienClsTheoKhoaPhongListComponent.prototype.getTitleColumn = function (index, laGridColumnsDefault) {
                    if (laGridColumnsDefault === void 0) { laGridColumnsDefault = true; }
                    if (laGridColumnsDefault) {
                        return this.gridColumnsDefault[index].Title;
                    }
                    return this.gridColumnsKhoaPhong[index].Title;
                };
                // nếu có dùng minWidth thì bổ sung thêm function xử lý minWith
                BangKeBacSiThucHienClsTheoKhoaPhongListComponent.prototype.getWidthColumn = function (index, laGridColumnsDefault) {
                    if (laGridColumnsDefault === void 0) { laGridColumnsDefault = true; }
                    if (laGridColumnsDefault) {
                        return this.gridColumnsDefault[index].Width;
                    }
                    return this.gridColumnsKhoaPhong[index].Width;
                };
                BangKeBacSiThucHienClsTheoKhoaPhongListComponent.prototype.getDataSoLuongTheoKhoaPhong = function (khoaPhongId, dataItem) {
                    var khoaPhongChiTiets = dataItem.ThongTinKhamTheoPhongs.filter(function (x) { return x.PhongBenhVienId == khoaPhongId; });
                    if (khoaPhongChiTiets.length == 0) {
                        return 0;
                    }
                    return khoaPhongChiTiets.reduce(function (sum, item) { return sum + item.SoLuong; }, 0);
                };
                BangKeBacSiThucHienClsTheoKhoaPhongListComponent.prototype.getSearchText = function () {
                    var searchText = this.baoCaoSearch.SearchString != undefined ? this.baoCaoSearch.SearchString : '';
                    searchText = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].convertSpecialXML(searchText);
                    searchText = '<SearchTerms>' + searchText + '</SearchTerms>';
                    searchText = btoa(unescape(encodeURIComponent('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>')));
                    return searchText;
                };
                BangKeBacSiThucHienClsTheoKhoaPhongListComponent.prototype.showPopupLoadingData = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: "Đang tải dữ liệu..." }
                    });
                };
                BangKeBacSiThucHienClsTheoKhoaPhongListComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                return BangKeBacSiThucHienClsTheoKhoaPhongListComponent;
            }());
            BangKeBacSiThucHienClsTheoKhoaPhongListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
            ]; };
            BangKeBacSiThucHienClsTheoKhoaPhongListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list.component.scss */ "./src/app/modules/main/bao-cao/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list.component.scss")).default]
                })
            ], BangKeBacSiThucHienClsTheoKhoaPhongListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-routing.module.ts": 
        /*!**************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-routing.module.ts ***!
          \**************************************************************************************************************************************************/
        /*! exports provided: BangKeBacSiThucHienClsTheoKhoaPhongRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BangKeBacSiThucHienClsTheoKhoaPhongRoutingModule", function () { return BangKeBacSiThucHienClsTheoKhoaPhongRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _bang_ke_bac_si_thuc_hien_cls_theo_khoa_phong_list_bang_ke_bac_si_thuc_hien_cls_theo_khoa_phong_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list.component */ "./src/app/modules/main/bao-cao/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _bang_ke_bac_si_thuc_hien_cls_theo_khoa_phong_list_bang_ke_bac_si_thuc_hien_cls_theo_khoa_phong_list_component__WEBPACK_IMPORTED_MODULE_6__["BangKeBacSiThucHienClsTheoKhoaPhongListComponent"],
                    data: {
                        title: 'Báo cáo hoạt động khám bệnh theo khoa phòng',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoHoatDongKhamBenhTheoKhoaPhong,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                }
            ];
            var BangKeBacSiThucHienClsTheoKhoaPhongRoutingModule = /** @class */ (function () {
                function BangKeBacSiThucHienClsTheoKhoaPhongRoutingModule() {
                }
                return BangKeBacSiThucHienClsTheoKhoaPhongRoutingModule;
            }());
            BangKeBacSiThucHienClsTheoKhoaPhongRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BangKeBacSiThucHienClsTheoKhoaPhongRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong.model.ts": 
        /*!*****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong.model.ts ***!
          \*****************************************************************************************************************************************/
        /*! exports provided: BangKeBacSiThucHienClsTheoKhoaPhongTimKiemNangCao */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BangKeBacSiThucHienClsTheoKhoaPhongTimKiemNangCao", function () { return BangKeBacSiThucHienClsTheoKhoaPhongTimKiemNangCao; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var BangKeBacSiThucHienClsTheoKhoaPhongTimKiemNangCao = /** @class */ (function () {
                function BangKeBacSiThucHienClsTheoKhoaPhongTimKiemNangCao(DangKham, DaHoanThanh, FromDate, ToDate, TuNgayFormat, DenNgayFormat, SearchString) {
                    if (DangKham === void 0) { DangKham = true; }
                    if (DaHoanThanh === void 0) { DaHoanThanh = true; }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    if (TuNgayFormat === void 0) { TuNgayFormat = null; }
                    if (DenNgayFormat === void 0) { DenNgayFormat = null; }
                    if (SearchString === void 0) { SearchString = null; }
                    this.DangKham = DangKham;
                    this.DaHoanThanh = DaHoanThanh;
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                    this.TuNgayFormat = TuNgayFormat;
                    this.DenNgayFormat = DenNgayFormat;
                    this.SearchString = SearchString;
                }
                return BangKeBacSiThucHienClsTheoKhoaPhongTimKiemNangCao;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong.module.ts": 
        /*!******************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong.module.ts ***!
          \******************************************************************************************************************************************/
        /*! exports provided: BangKeBacSiThucHienClsTheoKhoaPhongModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BangKeBacSiThucHienClsTheoKhoaPhongModule", function () { return BangKeBacSiThucHienClsTheoKhoaPhongModule; });
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
            /* harmony import */ var _bang_ke_bac_si_thuc_hien_cls_theo_khoa_phong_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-routing.module */ "./src/app/modules/main/bao-cao/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-routing.module.ts");
            /* harmony import */ var _bang_ke_bac_si_thuc_hien_cls_theo_khoa_phong_list_bang_ke_bac_si_thuc_hien_cls_theo_khoa_phong_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list.component */ "./src/app/modules/main/bao-cao/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list.component.ts");
            var BangKeBacSiThucHienClsTheoKhoaPhongModule = /** @class */ (function () {
                function BangKeBacSiThucHienClsTheoKhoaPhongModule() {
                }
                return BangKeBacSiThucHienClsTheoKhoaPhongModule;
            }());
            BangKeBacSiThucHienClsTheoKhoaPhongModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_bang_ke_bac_si_thuc_hien_cls_theo_khoa_phong_list_bang_ke_bac_si_thuc_hien_cls_theo_khoa_phong_list_component__WEBPACK_IMPORTED_MODULE_16__["BangKeBacSiThucHienClsTheoKhoaPhongListComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _bang_ke_bac_si_thuc_hien_cls_theo_khoa_phong_routing_module__WEBPACK_IMPORTED_MODULE_15__["BangKeBacSiThucHienClsTheoKhoaPhongRoutingModule"],
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
            ], BangKeBacSiThucHienClsTheoKhoaPhongModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-module-es2015.js.map
//# sourceMappingURL=bao-cao-bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-module-es5.js.map
//# sourceMappingURL=bao-cao-bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-module-es5.js.map