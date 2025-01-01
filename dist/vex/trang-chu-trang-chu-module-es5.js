(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trang-chu-trang-chu-module"], {
        /***/ "./node_modules/@iconify/icons-ic/sharp-child-friendly.js": 
        /*!****************************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/sharp-child-friendly.js ***!
          \****************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M13 2v8h8c0-4.42-3.58-8-8-8zm6.32 13.89A7.948 7.948 0 0 0 21 11H6.44l-.95-2H2v2h2.22s1.89 4.07 2.12 4.42c-1.1.59-1.84 1.75-1.84 3.08C4.5 20.43 6.07 22 8 22c1.76 0 3.22-1.3 3.46-3h2.08c.24 1.7 1.7 3 3.46 3 1.93 0 3.5-1.57 3.5-3.5 0-1.04-.46-1.97-1.18-2.61zM8 20c-.83 0-1.5-.67-1.5-1.5S7.17 17 8 17s1.5.67 1.5 1.5S8.83 20 8 20zm9 0c-.83 0-1.5-.67-1.5-1.5S16.17 17 17 17s1.5.67 1.5 1.5S17.83 20 17 20z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/trang-chu/trang-chu.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/trang-chu/trang-chu.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n  <vex-secondary-toolbar>\n    <vex-breadcrumbs [crumbs]=\"[{Title:'Trang Chủ',Path:'', Active:true}]\" fxFlex=\"auto\"></vex-breadcrumbs>\n    <button class=\"ml-2\" color=\"primary\" mat-icon-button type=\"button\">\n      <mat-icon [icIcon]=\"icMoreVert\"></mat-icon>\n    </button>\n  </vex-secondary-toolbar>\n\n  <vex-page-layout-content vexContainer>\n    <div class=\"card p-gutter relative\">\n      <app-datetimepicker id=\"tu-ngay\" [(model)]=\"thongKeKhamBenhSearch.TuNgay\" class=\"mr-2\" fxFlex=\"15%\"\n        fxFlex.sm=\"100%\" label=\"Từ ngày\" (keyup)=\"onKey($event)\">\n      </app-datetimepicker>\n      <app-datetimepicker id=\"den-ngay\" [(model)]=\"thongKeKhamBenhSearch.DenNgay\" class=\"mr-2\" fxFlex=\"15%\"\n        fxFlex.sm=\"100%\" label=\"Đến ngày\" (keyup)=\"onKey($event)\">\n      </app-datetimepicker>\n      <ng-container>\n        <div style=\"float: right; padding-top: 10px;\">\n          <button tabindex=\"-1\" type=\"button\" (click)=\"lamMoi()\" mat-raised-button mat-button color=\"primary\"\n            class=\"md-primary mr-1 mt-2\">Làm mới</button>\n        </div>\n      </ng-container>\n    </div>\n\n    <!-- THỐNG KÊ TIẾP NHẬN , KHÁM BỆNH , GIƯỜNG BỆNH, NỘI TRÚ -->\n    <div class=\"card p-gutter relative\" style=\"margin-top: -40px;\">\n      <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <div class=\"card-body\">\n          <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n            <div fxFlex=\"20%\" fxFlex.sm=\"100%\">\n              <div class=\"small-box bg-info\" style=\"height: 131px;\">\n                <div class=\"inner\">\n                  <h3 class=\"mb-3\">TIẾP NHẬN: {{thongKeBenhVien.ThongKeTiepNhan.TongSoTiepNhan}}</h3>\n                  <table width=\"100%\">\n                    <tr>\n                      <td width=\"35%\">BHYT:</td>\n                      <td width=\"15%\"><b>{{thongKeBenhVien.ThongKeTiepNhan.TongSoBHYT}}</b></td>\n                      <td width=\"35%\">DỊCH VỤ:</td>\n                      <td width=\"15%\"><b>{{thongKeBenhVien.ThongKeTiepNhan.TongSoDichVu}}</b></td>\n                    </tr>\n                    <tr>\n                      <td>VIỆN PHÍ:</td>\n                      <td><b>{{thongKeBenhVien.ThongKeTiepNhan.TongSoVienPhi}}</b></td>\n                      <td>KHÁM SỨC KHỎE:</td>\n                      <td><b>{{thongKeBenhVien.ThongKeTiepNhan.TongSoKSK}}</b></td>\n                    </tr>\n                  </table>\n                </div>\n                <div class=\"icon\">\n                  <i>\n                    <mat-icon [icIcon]=\"icPersonAdd\"></mat-icon>\n                  </i>\n                </div>\n              </div>\n            </div>\n            <div fxFlex=\"20%\" fxFlex.sm=\"100%\">\n              <div class=\"small-box bg-orange\" style=\"height: 131px;\">\n                <div class=\"inner\">\n                  <h3 class=\"mb-3\">KHÁM BỆNH: {{thongKeBenhVien.ThongKeKhamBenh.TongSoNguoiKhamBenh}}</h3>\n                  <table width=\"100%\">\n                    <tr>\n                      <td width=\"50%\">CHỜ KHÁM:</td>\n                      <td><b>{{thongKeBenhVien.ThongKeKhamBenh.TongSoChoKham}}</b></td>\n                    </tr>\n                    <tr>\n                      <td>ĐANG KHÁM:</td>\n                      <td><b>{{thongKeBenhVien.ThongKeKhamBenh.TongSoDangKham}}</b></td>\n                    </tr>\n                    <tr>\n                      <td>HOÀN THÀNH:</td>\n                      <td><b>{{thongKeBenhVien.ThongKeKhamBenh.TongSoHoanThanh}}</b></td>\n                    </tr>\n                  </table>\n                </div>\n                <div class=\"icon\">\n                  <i>\n                    <mat-icon [icIcon]=\"medkit\"></mat-icon>\n                  </i>\n                </div>\n              </div>\n            </div>\n            <div fxFlex=\"20%\" fxFlex.sm=\"100%\">\n              <div class=\"small-box bg-green\" style=\"height: 131px;\">\n                <div class=\"inner\">\n                  <h3 class=\"mb-3\">GIƯỜNG BỆNH: {{thongKeBenhVien.ThongKeGiuongBenh.TongSoGiuongBenh}}</h3>\n                  <table width=\"100%\">\n                    <tr>\n                      <td width=\"50%\">GIƯỜNG ĐÃ DÙNG:</td>\n                      <td><b>{{thongKeBenhVien.ThongKeGiuongBenh.TongSoDaDung}}</b></td>\n                    </tr>\n                    <tr>\n                      <td>GIƯỜNG TRỐNG:</td>\n                      <td><b>{{thongKeBenhVien.ThongKeGiuongBenh.TongSoTrong}}</b></td>\n                    </tr>\n                  </table>\n                </div>\n                <div class=\"icon\">\n                  <i>\n                    <mat-icon [icIcon]=\"icHotel\"></mat-icon>\n                  </i>\n                </div>\n              </div>\n            </div>\n            <div fxFlex=\"20%\" fxFlex.sm=\"100%\">\n              <div class=\"small-box bg-yellow\" style=\"height: 131px;\">\n                <div class=\"inner\">\n                  <h3 class=\"mb-3\">NỘI TRÚ</h3>\n                  <table width=\"100%\">\n                    <tr>\n                      <td width=\"35%\">NHẬP VIỆN:</td>\n                      <td width=\"15%\"><b>{{thongKeBenhVien.ThongKeNoiTru.TongSoNhapVien}}</b></td>\n                      <td width=\"35%\">CHUYỂN VIỆN:</td>\n                      <td width=\"15%\"><b>{{thongKeBenhVien.ThongKeNoiTru.TongChuyenVien}}</b></td>\n                    </tr>\n                    <tr>\n                      <td>ĐANG ĐIỀU TRỊ:</td>\n                      <td><b>{{thongKeBenhVien.ThongKeNoiTru.TongSoDieuTri}}</b></td>\n                      <td>TỬ VONG:</td>\n                      <td><b>{{thongKeBenhVien.ThongKeNoiTru.TongSoTuVong}}</b></td>\n                    </tr>\n                    <tr>\n                      <td>RA VIỆN:</td>\n                      <td><b>{{thongKeBenhVien.ThongKeNoiTru.TongSoRaVien}}</b></td>\n                      <td></td>\n                      <td><b></b></td>\n                    </tr>\n                  </table>\n                </div>\n                <div class=\"icon\">\n                  <i>\n                    <mat-icon [icIcon]=\"wareHouse\"></mat-icon>\n                  </i>\n                </div>\n              </div>\n            </div>\n            <div fxFlex=\"20%\" fxFlex.sm=\"100%\">\n              <div class=\"small-box bg-blue\" style=\"height: 131px;\">\n                <div class=\"inner\">\n                  <h3 class=\"mb-3\">SƠ SINH</h3>\n                  <table width=\"100%\">\n                    <tr>\n                      <td width=\"35%\">SS THƯỜNG:</td>\n                      <td width=\"15%\"><b>{{thongKeBenhVien.ThongKeSoSinh.TongSoSSThuong}}</b></td>\n                      <td width=\"35%\">CHUYỂN VIỆN:</td>\n                      <td width=\"15%\"><b>{{thongKeBenhVien.ThongKeSoSinh.TongSoChuyenVien}}</b></td>\n                    </tr>\n                    <tr>\n                      <td>SS BỆNH:</td>\n                      <td><b>{{thongKeBenhVien.ThongKeSoSinh.TongSoSSBenh}}</b></td>\n                      <td>TỬ VONG:</td>\n                      <td><b>{{thongKeBenhVien.ThongKeSoSinh.TongSoTuVong}}</b></td>\n                    </tr>\n                    <tr>\n                      <td>RA VIỆN:</td>\n                      <td><b>{{thongKeBenhVien.ThongKeSoSinh.TongSoRaVien}}</b></td>\n                      <td></td>\n                      <td><b></b></td>\n                    </tr>\n                  </table>\n                </div>\n                <div class=\"icon\">\n                  <i>\n                    <mat-icon [icIcon]=\"icChildFriendly\"></mat-icon>\n                  </i>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- THỐNG KÊ TIẾP NHẬN , KHÁM BỆNH , GIƯỜNG BỆNH, NỘI TRÚ -->\n\n    <!-- CHART TÌNH TRẠNG KHÁM   -->\n    <div class=\"card p-gutter relative\">\n      <kendo-chart [categoryAxis]=\"{ labels: { rotation: 'auto' } }\">\n        <kendo-chart-title text=\"TÌNH TRẠNG KHÁM\" font=\"bold 20px Arial, sans-serif\">\n        </kendo-chart-title>\n        <kendo-chart-legend position=\"top\"></kendo-chart-legend>\n        <kendo-chart-value-axis>\n          <kendo-chart-value-axis-item *ngFor=\"let item of valueAxes\" [name]=\"item.name\" [title]=\"{ text: item.title }\"\n            [min]=\"item.min\" [max]=\"item.max\" [color]=\"item.color\">\n          </kendo-chart-value-axis-item>\n        </kendo-chart-value-axis>\n        <kendo-chart-value-axis>\n          <kendo-chart-value-axis-item [title]=\"{ text: 'Số người bệnh' }\" font=\"bold 14px sans-serif\">\n          </kendo-chart-value-axis-item>\n        </kendo-chart-value-axis>\n        <kendo-chart-category-axis>\n          <kendo-chart-category-axis-item [categories]=\"khoaKhams\" [axisCrossingValue]=\"cVKhoaKham\">\n            <kendo-chart-series-item-labels position=\"outsideEnd\" background=\"none\" font=\"15px sans-serif\">\n            </kendo-chart-series-item-labels>\n          </kendo-chart-category-axis-item>\n        </kendo-chart-category-axis>\n        <kendo-chart-series>\n          <kendo-chart-series-item visible=\"true\" *ngFor=\"let item of tinhTrangKhoaKhams\" [name]=\"item.name | uppercase\"\n            [data]=\"item.data\" [type]=\"item.type\" [stack]=\"item.stack\" [color]=\"item.color\" [axis]=\"item.axis\">\n            <kendo-chart-series-item-labels position=\"center\" background=\"none\" font=\"bold 14px sans-serif\">\n            </kendo-chart-series-item-labels>\n            <kendo-chart-series-item-tooltip background=\"{{item.color}}\">\n              <ng-template let-value=\"value\">\n                {{ item.name }} : {{value}}\n              </ng-template>\n            </kendo-chart-series-item-tooltip>\n          </kendo-chart-series-item>\n        </kendo-chart-series>\n      </kendo-chart>\n    </div>\n    <!-- CHART TÌNH TRẠNG KHÁM   -->\n\n    <!-- CHART GIƯỜNG BỆNH VIỆN   -->\n    <div class=\"card p-gutter relative\">\n      <kendo-chart>\n        <kendo-chart-tooltip> </kendo-chart-tooltip>\n        <kendo-chart-title text=\"TÌNH TRẠNG SỬ DỤNG GIƯỜNG\" font=\"bold 20px Arial, sans-serif\"></kendo-chart-title>\n        <kendo-chart-legend position=\"top\"></kendo-chart-legend>\n        <kendo-chart-value-axis>\n          <kendo-chart-value-axis-item *ngFor=\"let item of valueAxes\" [name]=\"item.name\" [title]=\"{ text: item.title }\"\n            [min]=\"item.min\" [max]=\"item.max\" [color]=\"item.color\" font=\"bold 14px sans-serif\">\n          </kendo-chart-value-axis-item>\n        </kendo-chart-value-axis>\n\n        <kendo-chart-category-axis>\n          <kendo-chart-category-axis-item [categories]=\"giuongTheokhoaKhams\" [axisCrossingValue]=\"cVGiuong\">\n            <kendo-chart-series-item-labels position=\"outsideEnd\" background=\"none\" font=\"15px sans-serif\">\n            </kendo-chart-series-item-labels>\n          </kendo-chart-category-axis-item>\n        </kendo-chart-category-axis>\n\n        <kendo-chart-series>\n          <kendo-chart-series-item *ngFor=\"let item of giuongKhoaKhams\" [name]=\"item.name\" [data]=\"item.data\"\n            [type]=\"item.type\" [color]=\"item.color\" [width]=\"4\">\n            <kendo-chart-series-item-labels position=\"outsideEnd\" background=\"none\" font=\"bold 14px sans-serif\">\n            </kendo-chart-series-item-labels>\n            <kendo-chart-series-item-tooltip background=\"{{item.color}}\">\n              <ng-template let-value=\"value\">\n                {{ item.name }} : {{value}}\n              </ng-template>\n            </kendo-chart-series-item-tooltip>\n          </kendo-chart-series-item>\n        </kendo-chart-series>\n      </kendo-chart>\n    </div>\n    <!-- CHART GIƯỜNG BỆNH VIỆN   -->\n\n    <!-- CHART ĐIỀU TRỊ NỘI TRÚ   -->\n    <div class=\"card p-gutter relative\">\n      <kendo-chart>\n        <kendo-chart-tooltip> </kendo-chart-tooltip>\n        <kendo-chart-title text=\"TRẠNG THÁI ĐIỀU TRỊ NỘI TRÚ\" font=\"bold 20px Arial, sans-serif\"></kendo-chart-title>\n        <kendo-chart-legend position=\"top\"></kendo-chart-legend>\n        <kendo-chart-value-axis>\n          <kendo-chart-value-axis-item *ngFor=\"let item of valueAxesNoiTru\" [name]=\"item.name\"\n            [title]=\"{ text: item.title }\" [min]=\"item.min\" [max]=\"item.max\" [color]=\"item.color\">\n          </kendo-chart-value-axis-item>\n        </kendo-chart-value-axis>\n        <kendo-chart-value-axis>\n          <kendo-chart-value-axis-item [title]=\"{ text: 'Số người bệnh' }\" font=\"bold 14px sans-serif\">\n          </kendo-chart-value-axis-item>\n        </kendo-chart-value-axis>\n        <kendo-chart-category-axis>\n          <kendo-chart-category-axis-item [categories]=\"khoaNoiTru\">\n            <kendo-chart-series-item-labels position=\"outsideEnd\" background=\"none\" font=\"15px sans-serif\">\n            </kendo-chart-series-item-labels>\n          </kendo-chart-category-axis-item>\n        </kendo-chart-category-axis>\n        <kendo-chart-series>\n          <kendo-chart-series-item visible=\"true\" *ngFor=\"let item of dataNoiTrus\" [name]=\"item.name\" [data]=\"item.data\"\n            [type]=\"item.type\" [color]=\"item.color\">\n            <kendo-chart-series-item-labels position=\"outsideEnd\" background=\"none\" font=\"bold 14px sans-serif\">\n            </kendo-chart-series-item-labels>\n            <kendo-chart-series-item-tooltip background=\"{{item.color}}\">\n              <ng-template let-value=\"value\">\n                {{ item.name }} : {{value}}\n              </ng-template>\n            </kendo-chart-series-item-tooltip>\n          </kendo-chart-series-item>\n        </kendo-chart-series>\n      </kendo-chart>\n    </div>\n    <!-- CHART TÌNH TRẠNG KHÁM   -->\n\n  </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/trang-chu/thong-ke.model.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/modules/main/trang-chu/thong-ke.model.ts ***!
          \**********************************************************/
        /*! exports provided: ThongKeKhamBenhSearch, ThongKeBenhVien, ThongKeTiepNhan, ThongKeKhamBenh, ThongKeGiuongBenh, ThongKeNoiTru, ThongKeSoSinh */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongKeKhamBenhSearch", function () { return ThongKeKhamBenhSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongKeBenhVien", function () { return ThongKeBenhVien; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongKeTiepNhan", function () { return ThongKeTiepNhan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongKeKhamBenh", function () { return ThongKeKhamBenh; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongKeGiuongBenh", function () { return ThongKeGiuongBenh; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongKeNoiTru", function () { return ThongKeNoiTru; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongKeSoSinh", function () { return ThongKeSoSinh; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var ThongKeKhamBenhSearch = /** @class */ (function () {
                function ThongKeKhamBenhSearch(TuNgay, DenNgay, FromDate, ToDate) {
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                }
                return ThongKeKhamBenhSearch;
            }());
            var ThongKeBenhVien = /** @class */ (function () {
                function ThongKeBenhVien(ThongKeTiepNhan, ThongKeKhamBenh, ThongKeGiuongBenh, ThongKeNoiTru, ThongKeSoSinh) {
                    if (ThongKeTiepNhan === void 0) { ThongKeTiepNhan = null; }
                    if (ThongKeKhamBenh === void 0) { ThongKeKhamBenh = null; }
                    if (ThongKeGiuongBenh === void 0) { ThongKeGiuongBenh = null; }
                    if (ThongKeNoiTru === void 0) { ThongKeNoiTru = null; }
                    if (ThongKeSoSinh === void 0) { ThongKeSoSinh = null; }
                    this.ThongKeTiepNhan = ThongKeTiepNhan;
                    this.ThongKeKhamBenh = ThongKeKhamBenh;
                    this.ThongKeGiuongBenh = ThongKeGiuongBenh;
                    this.ThongKeNoiTru = ThongKeNoiTru;
                    this.ThongKeSoSinh = ThongKeSoSinh;
                }
                return ThongKeBenhVien;
            }());
            var ThongKeTiepNhan = /** @class */ (function () {
                function ThongKeTiepNhan(TongSoTiepNhan, TongSoBHYT, TongSoDichVu, TongSoVienPhi, TongSoKSK) {
                    if (TongSoTiepNhan === void 0) { TongSoTiepNhan = null; }
                    if (TongSoBHYT === void 0) { TongSoBHYT = null; }
                    if (TongSoDichVu === void 0) { TongSoDichVu = null; }
                    if (TongSoVienPhi === void 0) { TongSoVienPhi = null; }
                    if (TongSoKSK === void 0) { TongSoKSK = null; }
                    this.TongSoTiepNhan = TongSoTiepNhan;
                    this.TongSoBHYT = TongSoBHYT;
                    this.TongSoDichVu = TongSoDichVu;
                    this.TongSoVienPhi = TongSoVienPhi;
                    this.TongSoKSK = TongSoKSK;
                }
                return ThongKeTiepNhan;
            }());
            var ThongKeKhamBenh = /** @class */ (function () {
                function ThongKeKhamBenh(TongSoNguoiKhamBenh, TongSoChoKham, TongSoDangKham, TongSoHoanThanh) {
                    if (TongSoNguoiKhamBenh === void 0) { TongSoNguoiKhamBenh = null; }
                    if (TongSoChoKham === void 0) { TongSoChoKham = null; }
                    if (TongSoDangKham === void 0) { TongSoDangKham = null; }
                    if (TongSoHoanThanh === void 0) { TongSoHoanThanh = null; }
                    this.TongSoNguoiKhamBenh = TongSoNguoiKhamBenh;
                    this.TongSoChoKham = TongSoChoKham;
                    this.TongSoDangKham = TongSoDangKham;
                    this.TongSoHoanThanh = TongSoHoanThanh;
                }
                return ThongKeKhamBenh;
            }());
            var ThongKeGiuongBenh = /** @class */ (function () {
                function ThongKeGiuongBenh(TongSoGiuongBenh, TongSoDaDung, TongSoTrong) {
                    if (TongSoGiuongBenh === void 0) { TongSoGiuongBenh = null; }
                    if (TongSoDaDung === void 0) { TongSoDaDung = null; }
                    if (TongSoTrong === void 0) { TongSoTrong = null; }
                    this.TongSoGiuongBenh = TongSoGiuongBenh;
                    this.TongSoDaDung = TongSoDaDung;
                    this.TongSoTrong = TongSoTrong;
                }
                return ThongKeGiuongBenh;
            }());
            var ThongKeNoiTru = /** @class */ (function () {
                function ThongKeNoiTru(TongSoNhapVien, TongChuyenVien, TongSoDieuTri, TongSoTuVong, TongSoRaVien) {
                    if (TongSoNhapVien === void 0) { TongSoNhapVien = null; }
                    if (TongChuyenVien === void 0) { TongChuyenVien = null; }
                    if (TongSoDieuTri === void 0) { TongSoDieuTri = null; }
                    if (TongSoTuVong === void 0) { TongSoTuVong = null; }
                    if (TongSoRaVien === void 0) { TongSoRaVien = null; }
                    this.TongSoNhapVien = TongSoNhapVien;
                    this.TongChuyenVien = TongChuyenVien;
                    this.TongSoDieuTri = TongSoDieuTri;
                    this.TongSoTuVong = TongSoTuVong;
                    this.TongSoRaVien = TongSoRaVien;
                }
                return ThongKeNoiTru;
            }());
            var ThongKeSoSinh = /** @class */ (function () {
                function ThongKeSoSinh(TongSoSSThuong, TongSoSSBenh, TongSoRaVien, TongSoChuyenVien, TongSoTuVong) {
                    if (TongSoSSThuong === void 0) { TongSoSSThuong = null; }
                    if (TongSoSSBenh === void 0) { TongSoSSBenh = null; }
                    if (TongSoRaVien === void 0) { TongSoRaVien = null; }
                    if (TongSoChuyenVien === void 0) { TongSoChuyenVien = null; }
                    if (TongSoTuVong === void 0) { TongSoTuVong = null; }
                    this.TongSoSSThuong = TongSoSSThuong;
                    this.TongSoSSBenh = TongSoSSBenh;
                    this.TongSoRaVien = TongSoRaVien;
                    this.TongSoChuyenVien = TongSoChuyenVien;
                    this.TongSoTuVong = TongSoTuVong;
                }
                return ThongKeSoSinh;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/trang-chu/trang-chu-routing.module.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/modules/main/trang-chu/trang-chu-routing.module.ts ***!
          \********************************************************************/
        /*! exports provided: TrangChuRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangChuRoutingModule", function () { return TrangChuRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _trang_chu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trang-chu.component */ "./src/app/modules/main/trang-chu/trang-chu.component.ts");
            var routes = [
                {
                    path: '',
                    component: _trang_chu_component__WEBPACK_IMPORTED_MODULE_3__["TrangChuComponent"],
                    data: {
                        title: 'Trang Chủ'
                    }
                }
            ];
            var TrangChuRoutingModule = /** @class */ (function () {
                function TrangChuRoutingModule() {
                }
                return TrangChuRoutingModule;
            }());
            TrangChuRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], TrangChuRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/trang-chu/trang-chu.component.scss": 
        /*!*****************************************************************!*\
          !*** ./src/app/modules/main/trang-chu/trang-chu.component.scss ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".card-body {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 1.25rem;\n}\n\n.small-box {\n  border-radius: 0.25rem;\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.13), 0 1px 3px rgba(0, 0, 0, 0.2);\n  display: block;\n  margin-bottom: 20px;\n  position: relative;\n}\n\n.small-box > .inner {\n  padding: 10px;\n}\n\n.small-box .icon {\n  color: rgba(0, 0, 0, 0.15);\n  z-index: 0;\n}\n\n.bg-info {\n  background-color: #9fc5f8 !important;\n}\n\n.small-box .mat-icon {\n  font-size: 90px;\n  position: absolute;\n  right: 3px;\n  top: -7px;\n  transition: all 0.3s linear;\n}\n\n.small-box:hover .mat-icon {\n  font-size: 70px;\n  top: 20px;\n}\n\n.bg-orange {\n  background-color: #ff9900 !important;\n}\n\n.bg-green {\n  background-color: #93c47d !important;\n}\n\n.bg-yellow {\n  background-color: yellow !important;\n}\n\n.bg-blue {\n  background-color: #3ac1de !important;\n}\n\nh3 {\n  font-size: 20px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RyYW5nLWNodS9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHRyYW5nLWNodVxcdHJhbmctY2h1LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vdHJhbmctY2h1L3RyYW5nLWNodS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EscUVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsMEJBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0UsbUNBQUE7QUNDRjs7QURFQTtFQUNFLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90cmFuZy1jaHUvdHJhbmctY2h1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtYm9keSB7XG4gIC1tcy1mbGV4OiAxIDEgYXV0bztcbiAgZmxleDogMSAxIGF1dG87XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgcGFkZGluZzogMS4yNXJlbTtcbn1cblxuLnNtYWxsLWJveCB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjEzKSwgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNtYWxsLWJveCA+IC5pbm5lciB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zbWFsbC1ib3ggLmljb24ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgei1pbmRleDogMDtcbn1cblxuLmJnLWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWZjNWY4ICFpbXBvcnRhbnQ7XG59XG5cbi5zbWFsbC1ib3ggLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiA5MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzcHg7XG4gIHRvcDogLTdweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xufVxuXG4uc21hbGwtYm94OmhvdmVyIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNzBweDtcbiAgdG9wOiAyMHB4O1xufVxuXG4uYmctb3JhbmdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTkwMCAhaW1wb3J0YW50O1xufVxuXG4uYmctZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNjNDdkICFpbXBvcnRhbnQ7XG59XG5cbi5iZy15ZWxsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3cgIWltcG9ydGFudDtcbn1cblxuLmJnLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2FjMWRlICFpbXBvcnRhbnQ7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iLCIuY2FyZC1ib2R5IHtcbiAgLW1zLWZsZXg6IDEgMSBhdXRvO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgbWluLWhlaWdodDogMXB4O1xuICBwYWRkaW5nOiAxLjI1cmVtO1xufVxuXG4uc21hbGwtYm94IHtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMTMpLCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc21hbGwtYm94ID4gLmlubmVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnNtYWxsLWJveCAuaWNvbiB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB6LWluZGV4OiAwO1xufVxuXG4uYmctaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZmM1ZjggIWltcG9ydGFudDtcbn1cblxuLnNtYWxsLWJveCAubWF0LWljb24ge1xuICBmb250LXNpemU6IDkwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDNweDtcbiAgdG9wOiAtN3B4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XG59XG5cbi5zbWFsbC1ib3g6aG92ZXIgLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiA3MHB4O1xuICB0b3A6IDIwcHg7XG59XG5cbi5iZy1vcmFuZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5OTAwICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5M2M0N2QgIWltcG9ydGFudDtcbn1cblxuLmJnLXllbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdyAhaW1wb3J0YW50O1xufVxuXG4uYmctYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYWMxZGUgIWltcG9ydGFudDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/trang-chu/trang-chu.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/modules/main/trang-chu/trang-chu.component.ts ***!
          \***************************************************************/
        /*! exports provided: TrangChuComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangChuComponent", function () { return TrangChuComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-vert */ "./node_modules/@iconify/icons-ic/twotone-more-vert.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-person-add */ "./node_modules/@iconify/icons-ic/twotone-person-add.js");
            /* harmony import */ var _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _iconify_icons_ic_sharp_child_friendly__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/sharp-child-friendly */ "./node_modules/@iconify/icons-ic/sharp-child-friendly.js");
            /* harmony import */ var _iconify_icons_ic_sharp_child_friendly__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_sharp_child_friendly__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _iconify_icons_fa_solid_medkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-fa-solid/medkit */ "./node_modules/@iconify/icons-fa-solid/medkit.js");
            /* harmony import */ var _iconify_icons_fa_solid_medkit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_medkit__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _iconify_icons_ic_baseline_hotel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/baseline-hotel */ "./node_modules/@iconify/icons-ic/baseline-hotel.js");
            /* harmony import */ var _iconify_icons_ic_baseline_hotel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_baseline_hotel__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _iconify_icons_fa_solid_warehouse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-fa-solid/warehouse */ "./node_modules/@iconify/icons-fa-solid/warehouse.js");
            /* harmony import */ var _iconify_icons_fa_solid_warehouse__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_warehouse__WEBPACK_IMPORTED_MODULE_7__);
            /* harmony import */ var _thong_ke_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./thong-ke.model */ "./src/app/modules/main/trang-chu/thong-ke.model.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            var TrangChuComponent = /** @class */ (function () {
                // CHART  ĐIỀU TRỊ NỘI TRÚ 
                function TrangChuComponent(apiService, dialog) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.icPersonAdd = _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.medkit = _iconify_icons_fa_solid_medkit__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.icHotel = _iconify_icons_ic_baseline_hotel__WEBPACK_IMPORTED_MODULE_6___default.a;
                    this.wareHouse = _iconify_icons_fa_solid_warehouse__WEBPACK_IMPORTED_MODULE_7___default.a;
                    this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_2___default.a;
                    this.icChildFriendly = _iconify_icons_ic_sharp_child_friendly__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.thongKeKhamBenhSearch = new _thong_ke_model__WEBPACK_IMPORTED_MODULE_8__["ThongKeKhamBenhSearch"]();
                    this.thongKeBenhVien = new _thong_ke_model__WEBPACK_IMPORTED_MODULE_8__["ThongKeBenhVien"]();
                    // CHART TÌNH TRẠNG KHÁM  
                    this.khoaKhams = [];
                    this.tinhTrangKhoaKhams = [];
                    this.cVKhoaKham = [0, 20];
                    this.valueAxesTTKhoaKham = [
                        {
                            title: 'Chưa khám',
                            name: 'Chưa khám',
                            color: '#eb1e2c'
                        },
                        {
                            title: 'Đang khám',
                            name: 'Đang khám',
                            color: '#f9d23c'
                        },
                        {
                            title: 'Hoàn thành',
                            name: 'Hoàn thành',
                            color: '#59a14f'
                        }
                    ];
                    // CHART TÌNH TRẠNG KHÁM
                    // CHART TÌNH GIƯỜNG BỆNH VIỆN  
                    this.giuongTheokhoaKhams = [];
                    this.giuongKhoaKhams = [];
                    this.cVGiuong = [0, 100];
                    this.valueAxes = [
                        {
                            name: 'G.Trống',
                            title: 'G.Trống',
                            color: '#eb1e2c'
                        }, {
                            name: 'G.Đã có NB',
                            title: 'G.Đã có NB',
                            color: '#59a14f'
                        }
                    ];
                    // CHART TÌNH GIƯỜNG BỆNH VIỆN
                    // CHART  ĐIỀU TRỊ NỘI TRÚ  
                    this.khoaNoiTru = [];
                    this.dataNoiTrus = [];
                    this.cVNoiTru = [0, 0, 10, 10];
                    this.valueAxesNoiTru = [
                        {
                            title: 'Nhập viện',
                            name: 'Nhập viện',
                            color: '#91dcea'
                        },
                        {
                            title: 'Đang điều trị',
                            name: 'Đang điều trị',
                            color: '#f28e2b'
                        },
                        {
                            title: 'Đã ra viện',
                            name: 'Đã ra viện',
                            color: '#5fbb68'
                        },
                        {
                            title: 'Chuyển viện',
                            name: 'Chuyển viện',
                            color: '#f9d23c'
                        },
                        {
                            title: 'Tử vong',
                            name: 'Tử vong',
                            color: '#eb1e2c'
                        }
                    ];
                }
                TrangChuComponent.prototype.ngOnInit = function () {
                    this.thongKeBenhVien = new _thong_ke_model__WEBPACK_IMPORTED_MODULE_8__["ThongKeBenhVien"]();
                    this.thongKeBenhVien.ThongKeTiepNhan = new _thong_ke_model__WEBPACK_IMPORTED_MODULE_8__["ThongKeTiepNhan"]();
                    this.thongKeBenhVien.ThongKeKhamBenh = new _thong_ke_model__WEBPACK_IMPORTED_MODULE_8__["ThongKeKhamBenh"]();
                    this.thongKeBenhVien.ThongKeNoiTru = new _thong_ke_model__WEBPACK_IMPORTED_MODULE_8__["ThongKeNoiTru"]();
                    this.thongKeBenhVien.ThongKeGiuongBenh = new _thong_ke_model__WEBPACK_IMPORTED_MODULE_8__["ThongKeGiuongBenh"]();
                    this.thongKeBenhVien.ThongKeSoSinh = new _thong_ke_model__WEBPACK_IMPORTED_MODULE_8__["ThongKeSoSinh"]();
                    var dateNow = new Date();
                    this.thongKeKhamBenhSearch.TuNgay = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
                    this.thongKeKhamBenhSearch.DenNgay = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
                    if (this.thongKeKhamBenhSearch.TuNgay != null) {
                        this.thongKeKhamBenhSearch.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].formatDateTime(this.thongKeKhamBenhSearch.TuNgay, "dd/mm/yyyy");
                    }
                    else {
                        this.thongKeKhamBenhSearch.FromDate = null;
                    }
                    if (this.thongKeKhamBenhSearch.DenNgay != null) {
                        this.thongKeKhamBenhSearch.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].formatDateTime(this.thongKeKhamBenhSearch.DenNgay, "dd/mm/yyyy");
                    }
                    else {
                        this.thongKeKhamBenhSearch.ToDate = null;
                    }
                    this.lamMoi();
                };
                TrangChuComponent.prototype.lamMoi = function () {
                    var _this = this;
                    var dialog = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang tải dữ liệu...' }
                    });
                    this.apiService.post("Home/ThongKeBenhVien", this.thongKeKhamBenhSearch).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            //THỐNG KÊ THEO NGÀY TIẾP  NHÂN , KHÁM BỆNH , GIƯỜNG , NỘI TRÚ
                            _this.thongKeBenhVien = resultData;
                            //CHART TÌNH TRẠNG KHÁM BỆNH
                            if (resultData.ChartTinhTrangKhams !== undefined && resultData.ChartTinhTrangKhams != null) {
                                _this.handleChartTinhTrangKham(resultData.ChartTinhTrangKhams);
                            }
                            //CHART GIƯỜNG BỆNH VIỆN     
                            if (resultData.ChartTinhTrangSuDungGiuongs !== undefined && resultData.ChartTinhTrangSuDungGiuongs != null) {
                                _this.handleChartGiuongBenhVien(resultData.ChartTinhTrangSuDungGiuongs);
                            }
                            //CHART NỘI TRÚ
                            if (resultData.ChartTinhTrangDieuTriNoiTrus !== undefined && resultData.ChartTinhTrangDieuTriNoiTrus != null) {
                                _this.handleChartDieuTriNoiTru(resultData.ChartTinhTrangDieuTriNoiTrus);
                            }
                        }
                        dialog.close();
                    });
                };
                TrangChuComponent.prototype.handleChartTinhTrangKham = function (dataTinhtrangKhamBenhs) {
                    var _this = this;
                    this.khoaKhams = [];
                    this.setDefaultChartTinhTrangKhoaKham();
                    var danhSachChuaKhamTheoKhoas = [];
                    var danhSachDangKhamTheoKhoas = [];
                    var danhSachHoanThanhTheoKhoas = [];
                    dataTinhtrangKhamBenhs.forEach(function (itemKhoaKham) {
                        if (itemKhoaKham.TongSoNguoiChuaKham > 0 ||
                            itemKhoaKham.TongSoNguoiDangKham > 0 ||
                            itemKhoaKham.TongSoNguoiHoanThanh > 0) {
                            _this.khoaKhams.push(itemKhoaKham.KhoaKham);
                        }
                        if (itemKhoaKham.TongSoNguoiChuaKham > 0) {
                            danhSachChuaKhamTheoKhoas.push(itemKhoaKham.TongSoNguoiChuaKham);
                        }
                        else {
                            danhSachChuaKhamTheoKhoas.push(null);
                        }
                        if (itemKhoaKham.TongSoNguoiDangKham > 0) {
                            danhSachDangKhamTheoKhoas.push(itemKhoaKham.TongSoNguoiDangKham);
                        }
                        else {
                            danhSachDangKhamTheoKhoas.push(null);
                        }
                        if (itemKhoaKham.TongSoNguoiHoanThanh > 0) {
                            danhSachHoanThanhTheoKhoas.push(itemKhoaKham.TongSoNguoiHoanThanh);
                        }
                        else {
                            danhSachHoanThanhTheoKhoas.push(null);
                        }
                    });
                    this.tinhTrangKhoaKhams = [];
                    this.tinhTrangKhoaKhams.push({
                        type: 'column',
                        data: danhSachChuaKhamTheoKhoas,
                        stack: true,
                        name: 'Chưa khám',
                        color: '#eb1e2c'
                    }, {
                        type: 'column',
                        data: danhSachDangKhamTheoKhoas,
                        stack: true,
                        name: 'Đang khám',
                        color: '#f9d23c'
                    }, {
                        type: 'column',
                        data: danhSachHoanThanhTheoKhoas,
                        stack: true,
                        name: 'Hoàn thành',
                        color: '#59a14f'
                    });
                };
                TrangChuComponent.prototype.setDefaultChartTinhTrangKhoaKham = function () {
                    this.tinhTrangKhoaKhams = [];
                    this.tinhTrangKhoaKhams.push({
                        data: [],
                        stack: true,
                        color: '#eb1e2c'
                    }, {
                        type: 'column',
                        data: [],
                        stack: true,
                        color: '#f9d23c'
                    }, {
                        type: 'column',
                        data: [],
                        stack: true,
                        color: '#59a14f'
                    });
                };
                TrangChuComponent.prototype.handleChartGiuongBenhVien = function (dataGiuongBenhViens) {
                    var _this = this;
                    this.giuongTheokhoaKhams = [];
                    this.setDefaultChartGiuongBenhVien();
                    var dsGiuongtrongs = [];
                    var dsGiuongDaSuDungs = [];
                    dataGiuongBenhViens.forEach(function (itemKhoaKham) {
                        _this.giuongTheokhoaKhams.push(itemKhoaKham.KhoaKham);
                        dsGiuongtrongs.push(itemKhoaKham.TongSoGiuongTrong);
                        dsGiuongDaSuDungs.push(itemKhoaKham.TongSoGiuongDaSuDung);
                    });
                    this.giuongKhoaKhams.push({
                        type: 'line',
                        data: dsGiuongtrongs,
                        name: 'G.Trống',
                        color: '#FF0000'
                    }, {
                        type: 'line',
                        data: dsGiuongDaSuDungs,
                        name: 'G.Đã có NB',
                        color: '#00FF00'
                    });
                };
                TrangChuComponent.prototype.setDefaultChartGiuongBenhVien = function () {
                    this.giuongKhoaKhams = [];
                    this.giuongKhoaKhams.push({
                        type: 'line',
                        data: []
                    }, {
                        type: 'line',
                        data: []
                    });
                };
                TrangChuComponent.prototype.handleChartDieuTriNoiTru = function (dataDieuTriNoiTrus) {
                    var _this = this;
                    this.khoaNoiTru = [];
                    this.setDefaultChartDieuTriNoiTru();
                    var nhapViens = [];
                    var dangDieuTris = [];
                    var daRaViens = [];
                    var chuyenViens = [];
                    var tuVongs = [];
                    dataDieuTriNoiTrus.forEach(function (itemKhoaKham) {
                        if (itemKhoaKham.TongSoNhapVien > 0 ||
                            itemKhoaKham.TongSoDangDieuTri > 0 ||
                            itemKhoaKham.TongSoDaRaVien > 0 ||
                            itemKhoaKham.TongSoChuyenVien > 0 ||
                            itemKhoaKham.TongSoTuVong > 0) {
                            _this.khoaNoiTru.push(itemKhoaKham.KhoaKham);
                        }
                        if (itemKhoaKham.TongSoNhapVien > 0) {
                            nhapViens.push(itemKhoaKham.TongSoNhapVien);
                        }
                        else {
                            nhapViens.push(null);
                        }
                        if (itemKhoaKham.TongSoDangDieuTri > 0) {
                            dangDieuTris.push(itemKhoaKham.TongSoDangDieuTri);
                        }
                        else {
                            dangDieuTris.push(null);
                        }
                        if (itemKhoaKham.TongSoDaRaVien > 0) {
                            daRaViens.push(itemKhoaKham.TongSoDaRaVien);
                        }
                        else {
                            daRaViens.push(null);
                        }
                        if (itemKhoaKham.TongSoChuyenVien > 0) {
                            chuyenViens.push(itemKhoaKham.TongSoChuyenVien);
                        }
                        else {
                            chuyenViens.push(null);
                        }
                        if (itemKhoaKham.TongSoTuVong > 0) {
                            tuVongs.push(itemKhoaKham.TongSoTuVong);
                        }
                        else {
                            tuVongs.push(null);
                        }
                    });
                    this.dataNoiTrus = [];
                    this.dataNoiTrus.push({
                        type: 'column',
                        data: nhapViens,
                        name: 'Nhập viện',
                        color: '#91dcea'
                    }, {
                        type: 'column',
                        data: dangDieuTris,
                        name: 'Đang Điều trị',
                        color: '#f28e2b'
                    }, {
                        type: 'column',
                        data: daRaViens,
                        name: 'Đã ra viện',
                        color: '#5fbb68'
                    }, {
                        type: 'column',
                        data: chuyenViens,
                        name: 'Chuyển viện',
                        color: '#f9d23c'
                    }, {
                        type: 'column',
                        data: tuVongs,
                        name: 'Tử vong',
                        color: '#eb1e2c'
                    });
                };
                TrangChuComponent.prototype.setDefaultChartDieuTriNoiTru = function () {
                    this.dataNoiTrus = [];
                    this.dataNoiTrus.push({
                        type: 'column',
                        data: []
                    }, {
                        type: 'column',
                        data: []
                    }, {
                        type: 'column',
                        data: []
                    }, {
                        type: 'column',
                        data: []
                    }, {
                        type: 'column',
                        data: []
                    });
                };
                TrangChuComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.lamMoi();
                    }
                };
                return TrangChuComponent;
            }());
            TrangChuComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] }
            ]; };
            TrangChuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'vex-trang-chu',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trang-chu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/trang-chu/trang-chu.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trang-chu.component.scss */ "./src/app/modules/main/trang-chu/trang-chu.component.scss")).default]
                })
            ], TrangChuComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/trang-chu/trang-chu.module.ts": 
        /*!************************************************************!*\
          !*** ./src/app/modules/main/trang-chu/trang-chu.module.ts ***!
          \************************************************************/
        /*! exports provided: TrangChuModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangChuModule", function () { return TrangChuModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _trang_chu_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trang-chu-routing.module */ "./src/app/modules/main/trang-chu/trang-chu-routing.module.ts");
            /* harmony import */ var _trang_chu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trang-chu.component */ "./src/app/modules/main/trang-chu/trang-chu.component.ts");
            /* harmony import */ var src_vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/directives/container/container.module */ "./src/@vex/directives/container/container.module.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var src_vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/@vex/components/secondary-toolbar/secondary-toolbar.module */ "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ "./node_modules/@progress/kendo-angular-dateinputs/dist/fesm2015/index.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-charts */ "./node_modules/@progress/kendo-angular-charts/dist/fesm2015/index.js");
            var TrangChuModule = /** @class */ (function () {
                function TrangChuModule() {
                }
                return TrangChuModule;
            }());
            TrangChuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_trang_chu_component__WEBPACK_IMPORTED_MODULE_4__["TrangChuComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _trang_chu_routing_module__WEBPACK_IMPORTED_MODULE_3__["TrangChuRoutingModule"],
                        src_vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_11__["SecondaryToolbarModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbsModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_9__["PageLayoutModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                        src_vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_5__["ContainerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                        _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_13__["DateInputsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                        _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_15__["ChartsModule"]
                    ]
                })
            ], TrangChuModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=trang-chu-trang-chu-module-es2015.js.map
//# sourceMappingURL=trang-chu-trang-chu-module-es5.js.map
//# sourceMappingURL=trang-chu-trang-chu-module-es5.js.map