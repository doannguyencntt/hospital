(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~bao-hiem-y-te-danh-sach-bao-hiem-y-te-ds-bao-hiem-y-te-module~bao-hiem-y-te-lich-su-bao-hiem~87a8c80c"], {
        /***/ "./node_modules/@iconify/icons-ic/arrow-downward.js": 
        /*!**********************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/arrow-downward.js ***!
          \**********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/@iconify/icons-ic/warning.js": 
        /*!***************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/warning.js ***!
          \***************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/ds-bao-hiem-y-te/ds-bao-hiem-y-te.component.html": 
        /*!***********************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/ds-bao-hiem-y-te/ds-bao-hiem-y-te.component.html ***!
          \***********************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"\n                    [\n                        {Title:'Gửi H.Sơ Giám Định BHYT'},\n                        {Title:'DS Gửi', Active:true}           \n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <!-- [additionalSearchString]=\"queryStrings\" -->\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"/bao-hiem-y-te\" urlGetData=\"BHYT/GetDataForGridAsync\"\n                urlGetTotalPage=\"BHYT/GetTotalPageForGridAsync\" [gridColumns]=\"gridDanhSachBHYTColumns\"\n                [useActionDefault]=\"false\" [lazyLoadPage]=\"false\" [useHeaderDefault]=\"false\"\n                [headerTemplate]=\"headerTemplate\" [documentType]=\"documentType\" [pageSize]=\"20\"\n                [searchString]=\"timKiemDSBaoHiemYTe.SearchString\" [triggerSelectAll]=\"true\"\n                (extCheckboxSelection)=\"extCheckboxSelection($event)\" [checkboxAble]=\"true\" [sort]=\"sort\">\n            </app-grid>\n            <ng-template #actionTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                <div class=\"text-center\">\n                    <a (click)=\"view(dataItem.Id)\">\n                        <p class=\"reverse-ellipsis l\" title=\"{{dataItem.MaTN}}\">{{dataItem.MaTN}}</p>\n                    </a>\n                </div>\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n    <ng-template #headerTemplate>\n        <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString\" [(ngModel)]=\"timKiemDSBaoHiemYTe.SearchString\"\n                    (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n            </div>\n            <app-datetimepicker fxFlex=\"225px\" [(model)]=\"timKiemDSBaoHiemYTe.TuNgay\" #tiepnhantu\n                id=\"ThoiDiemTiepNhanTuFormat\" label=\"Từ ngày\" class=\"ml-2 on-header\" (keyup)=\"onKey($event)\">\n            </app-datetimepicker>\n            <app-datetimepicker fxFlex=\"225px\" [(model)]=\"timKiemDSBaoHiemYTe.DenNgay\" #tiepnhanden\n                id=\"ThoiDiemTiepNhanDenFormat\" label=\"Đến ngày\" class=\"ml-2 on-header\" (keyup)=\"onKey($event)\">\n            </app-datetimepicker>\n            <button type=\"button\" color=\"primary\" (click)=\"timKiemNangCao()\" class=\"ml-2\" mat-raised-button>Tìm</button>\n            <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n            </button>\n            <div fxFlex=\"61%\" fxFlex.sm=\"40%\"></div>\n            <h2 class=\"title my-0 ltr:pr-8 rtl:pl-8 ltr:mr-8 rtl:ml-8 ltr:border-r rtl:border-l right-0\" fxFlex=\"none\"\n                fxHide.xs *ngIf=\"mySelection.length!=null && mySelection.length>0\">\n                <span>{{ mySelection.length }} dòng được chọn</span>\n            </h2>\n            <button (click)=\"DownloadThongTinTongHopXMLNguoiBenh()\" *ngIf=\"mySelection.length!=null && mySelection.length>0\" class=\"ml-8\"\n                fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Xuất xml\" type=\"button\">\n                <mat-icon [icIcon]=\"icArrowDownward\"></mat-icon>\n            </button>\n            \n            <!-- <button (click)=\"GuiTongHopHoSoGiamDinh()\" *ngIf=\"mySelection.length!=null && mySelection.length>0\"\n                fxFlex=\"20%\" fxFlex.sm=\"20%\" class=\"ml-8\" fxFlex=\"none\" mat-icon-button kendoTooltip\n                title=\"Gửi thông tin bhyt\" type=\"button\">\n                <mat-icon [icIcon]=\"icSend\"></mat-icon>\n            </button> -->\n\n            <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"mr-4\" fxFlex=\"0%\" fxFlex.sm=\"0%\" mat-icon-button\n                kendoTooltip title=\"Lọc cột\" type=\"button\">\n                <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n            </button>\n            <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                <div *ngFor=\"let column of gridDanhSachBHYTColumns\">\n                    <button\n                        class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                        <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                            {{ column.Title }}\n                        </mat-checkbox>\n                    </button>\n                </div>\n            </mat-menu>\n\n            <button (click)=\"DownloadFileExcels()\" class=\"ml-8\" fxFlex=\"none\" mat-icon-button kendoTooltip\n                title=\"Xuất excel\" type=\"button\">\n                <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n            </button>\n        </div>\n    </ng-template>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/thong-tin-chi-tiet-goi-bao-hiem-y-te/thong-tin-chi-tiet-goi-bao-hiem-y-te.component.html": 
        /*!***************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/thong-tin-chi-tiet-goi-bao-hiem-y-te/thong-tin-chi-tiet-goi-bao-hiem-y-te.component.html ***!
          \***************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-16\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[{Title:'Gửi H.Sơ Giám Định BHYT'},\n                                        {Title:'Gửi Trong Ngày',Path:'/danh-sach-goi', queryParams: {holdQuery : true}},\n                                        {Title:'Thông tin chi tiết',Active:true}]\">\n            </vex-breadcrumbs>\n            <app-hot-key [keys]=\"[\n                                {Key:'Ctrl + D', Description:'Tải file'},\n                                {Key:'Ctrl + G',Description:'Gửi file'},\n                                {Key:'Esc',Description:'Quay lại',End:true}\n                        ]\">\n            </app-hot-key>\n\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"-mt-16\">\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                    <div class=\"card\" fxFlex=\"auto\">\n                        <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <h2 class=\"title m-0\">Thông tin người bệnh (XML1)</h2>\n                        </div>\n                        <div class=\"px-6 py-4\" fxLayout=\"column\">\n                            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                fxLayoutGap.lt-sm=\"0\">\n                                <app-textbox id=\"MaLienKet\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                    maxlength=\"100\" [(model)]=\"thongtinbenhnhan.MaLienKet \" label=\"Mã liên kết\"\n                                    [disabled]=\"true\"\n                                    [validationerror]=\"'MaLienKet' | validationerror:validationErrors\">\n                                </app-textbox>\n                                <app-textbox id=\"MaBenhNhan\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                    [disabled]=\"true\" [(model)]=\"thongtinbenhnhan.MaBenhNhan \" label=\"Mã người bệnh\"\n                                    maxlength=\"100\" [validationerror]=\"'MaBenhNhan' | validationerror:validationErrors\">\n                                </app-textbox>\n                                <app-textbox id=\"HoTen\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                    [upperCase]=\"true\" [disabled]=\"readonly\" [(model)]=\"thongtinbenhnhan.HoTen\"\n                                    label=\"Họ và tên\" maxlength=\"255\"\n                                    [validationerror]=\"'HoTen' | validationerror:validationErrors\">\n                                </app-textbox>\n                                <app-datepicker id=\"NgaySinh\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [disabled]=\"readonly\"\n                                    [(model)]=\"thongtinbenhnhan.NgaySinh\" [required]=\"true\" label=\"Ngày sinh\"\n                                    [validationerror]=\"'NgaySinh' | validationerror:validationErrors\">\n                                </app-datepicker>\n                                <app-combobox id=\"GioiTinh\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Giới tính\"\n                                    [disabled]=\"readonly\" [required]=\"true\" [data]=\"DataGoiTinh\"\n                                    [(model)]=\"thongtinbenhnhan.GioiTinh\"\n                                    [validationerror]=\"'GioiTinh' | validationerror:validationErrors\"\n                                    class=\"item-no-padding\" [template]=\"khoaKhamTemplate\"\n                                    [templateHeader]=\"khoaKhamTemplateHeader\">\n                                    <ng-template #khoaKhamTemplateHeader let-dataItem>\n                                        <table width=\"100%\" class=\"table-combobox\">\n                                            <tr>\n                                                <th width=\"20%\">Mã</th>\n                                                <th>Tên</th>\n                                            </tr>\n                                        </table>\n                                    </ng-template>\n                                    <ng-template #khoaKhamTemplate let-dataItem>\n                                        <table width=\"100%\" class=\"table-combobox\">\n                                            <tr>\n                                                <td width=\"20%\">{{dataItem.KeyId}}</td>\n                                                <td>{{dataItem.DisplayName}}</td>\n                                            </tr>\n                                        </table>\n                                    </ng-template>\n                                </app-combobox>\n                                <app-textbox id=\"DiaChi\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                    [disabled]=\"readonly\" [(model)]=\"thongtinbenhnhan.DiaChi\" label=\"Địa chỉ\"\n                                    maxlength=\"1024\" [validationerror]=\"'DiaChi' | validationerror:validationErrors\">\n                                </app-textbox>\n                                <app-textbox id=\"MaThe\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                    [(model)]=\"thongtinbenhnhan.MaThe\" [disabled]=\"readonly\" label=\"Mã thẻ\"\n                                    maxlength=\"255\" [validationerror]=\"'MaThe' | validationerror:validationErrors\">\n                                </app-textbox>\n                                <app-textbox id=\"MaCoSoKCBBanDau\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                    maxlength=\"255\" [(model)]=\"thongtinbenhnhan.MaCoSoKCBBanDau\" [disabled]=\"readonly\"\n                                    label=\"Mã CSKCB ban đầu\"\n                                    [validationerror]=\"'MaCoSoKCBBanDau' | validationerror:validationErrors\">\n                                </app-textbox>\n                                <app-datepicker id=\"GiaTriTheTu\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [disabled]=\"readonly\"\n                                    [(model)]=\"thongtinbenhnhan.GiaTriTheTu\" [required]=\"true\" label=\"Giá trị thẻ từ\"\n                                    [validationerror]=\"'GiaTriTheTu' | validationerror:validationErrors\">\n                                </app-datepicker>\n                                <app-datepicker id=\"GiaTriTheDen\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [disabled]=\"readonly\"\n                                    [(model)]=\"thongtinbenhnhan.GiaTriTheDen\" [required]=\"true\" label=\"Giá trị thẻ đến\"\n                                    [validationerror]=\"'GiaTriTheDen' | validationerror:validationErrors\">\n                                </app-datepicker>\n                                <app-datepicker id=\"MienCungChiTra\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [disabled]=\"readonly\"\n                                    [(model)]=\"thongtinbenhnhan.MienCungChiTra\" label=\"Miễn cùng chi trả\"\n                                    [validationerror]=\"'MienCungChiTra' | validationerror:validationErrors\">\n                                </app-datepicker>\n\n                                <div fxFlex=\"20%\" fxFlex.sm=\"20%\">\n                                    <div fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"d-flex flex-row-reverse\">\n                                        <button class=\"ml-1 mt-2 mr-2\" color=\"primary\" mat-mini-fab kendoTooltip\n                                            title=\"Thêm mã bệnh khác\" type=\"button\" (click)=\"showPopupTimTenBenhKhac()\"\n                                            style=\"padding: 0px !important;\" fxFlex=\"none\">\n                                            <mat-icon style=\"color: white;\" [icIcon]=\"icEdit\"></mat-icon>\n                                        </button>\n                                        <app-textarea id=\"TenBenh\" fxFlex=\"100%\" fxFlex.sm=\"100%\" [required]=\"true\"\n                                            [disabled]=\"readonly\" [(model)]=\"thongtinbenhnhan.TenBenh\" label=\"Tên bệnh\"\n                                            maxlength=\"2000\"\n                                            [validationerror]=\"'TenBenh' | validationerror:validationErrors\">\n                                        </app-textarea>\n                                    </div>\n                                </div>\n\n\n                                <app-textbox id=\"MaBenh\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                    [disabled]=\"readonly\" [(model)]=\"thongtinbenhnhan.MaBenh\" label=\"Mã bệnh\"\n                                    maxlength=\"8\" [validationerror]=\"'MaBenh' | validationerror:validationErrors\">\n                                </app-textbox>\n\n                                <div fxFlex=\"20%\" fxFlex.sm=\"20%\">\n                                    <div fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"d-flex flex-row-reverse\">\n                                        <button class=\"ml-1 mt-2 mr-2\" color=\"primary\" mat-mini-fab kendoTooltip\n                                            title=\"Thêm mã bệnh khác\" type=\"button\" (click)=\"showPopupTimMaBenhKhac()\"\n                                            style=\"padding: 0px !important;\" fxFlex=\"none\">\n                                            <mat-icon style=\"color: white;\" [icIcon]=\"icEdit\"></mat-icon>\n                                        </button>\n                                        <app-textbox id=\"MaBenhKhac\" fxFlex=\"100%\" fxFlex.sm=\"100%\" maxlength=\"255\"\n                                            [(model)]=\"thongtinbenhnhan.MaBenhKhac\" label=\"Mã bệnh khác\"\n                                            [disabled]=\"readonly\"\n                                            [validationerror]=\"'MaBenhKhac' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                    </div>\n                                </div>\n\n                                <app-combobox id=\"LyDoVaoVien\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Lý do vào viện\"\n                                    [disabled]=\"readonly\" [required]=\"true\" [data]=\"LyDoRaVien\"\n                                    [(model)]=\"thongtinbenhnhan.LyDoVaoVien\"\n                                    [validationerror]=\"'LyDoVaoVien' | validationerror:validationErrors\"\n                                    class=\"item-no-padding\" [template]=\"khoaKhamTemplate\"\n                                    [templateHeader]=\"khoaKhamTemplateHeader\">\n                                    <ng-template #khoaKhamTemplateHeader let-dataItem>\n                                        <table width=\"100%\" class=\"table-combobox\">\n                                            <tr>\n                                                <th width=\"20%\">Mã</th>\n                                                <th>Tên</th>\n                                            </tr>\n                                        </table>\n                                    </ng-template>\n                                    <ng-template #khoaKhamTemplate let-dataItem>\n                                        <table width=\"100%\" class=\"table-combobox\">\n                                            <tr>\n                                                <td width=\"20%\">{{dataItem.KeyId}}</td>\n                                                <td>{{dataItem.DisplayName}}</td>\n                                            </tr>\n                                        </table>\n                                    </ng-template>\n                                </app-combobox>\n                                <app-textbox id=\"MaNoiChuyen\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [disabled]=\"readonly\"\n                                    [(model)]=\"thongtinbenhnhan.MaNoiChuyen\" label=\"Mã nội chuyển\" maxlength=\"5\"\n                                    [validationerror]=\"'MaNoiChuyen' | validationerror:validationErrors\">\n                                </app-textbox>\n                                <app-combobox id=\"MaTaiNan\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Mã tai nạn\"\n                                    [(model)]=\"thongtinbenhnhan.MaTaiNan\" [data]=\"MaTaiNan\" [disabled]=\"readonly\"\n                                    [validationerror]=\"'MaTaiNan' | validationerror:validationErrors\"\n                                    class=\"item-no-padding\" [template]=\"khoaKhamTemplate\"\n                                    [templateHeader]=\"khoaKhamTemplateHeader\">\n                                    <ng-template #khoaKhamTemplateHeader let-dataItem>\n                                        <table width=\"100%\" class=\"table-combobox\">\n                                            <tr>\n                                                <th width=\"20%\">Mã</th>\n                                                <th>Tên</th>\n                                            </tr>\n                                        </table>\n                                    </ng-template>\n                                    <ng-template #khoaKhamTemplate let-dataItem>\n                                        <table width=\"100%\" class=\"table-combobox\">\n                                            <tr>\n                                                <td width=\"20%\">{{dataItem.KeyId}}</td>\n                                                <td>{{dataItem.DisplayName}}</td>\n                                            </tr>\n                                        </table>\n                                    </ng-template>\n                                </app-combobox>\n                                <app-datetimepicker id=\"NgayVao\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [disabled]=\"readonly\"\n                                    [(model)]=\"thongtinbenhnhan.NgayVao\" [required]=\"true\" label=\"Ngày vào\"\n                                    [validationerror]=\"'NgayVao' | validationerror:validationErrors\">\n                                </app-datetimepicker>\n                                <app-datetimepicker id=\"NgayRa\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [disabled]=\"readonly\"\n                                    [(model)]=\"thongtinbenhnhan.NgayRa\" [required]=\"true\" label=\"Ngày ra\"\n                                    [validationerror]=\"'NgayRa' | validationerror:validationErrors\">\n                                </app-datetimepicker>\n                                <app-textboxnumeric id=\"SoNgayDieuTri\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                    min=\"1\" max=\"366\" [(model)]=\"thongtinbenhnhan.SoNgayDieuTri\"\n                                    label=\"Số ngày điều trị\" [disabled]=\"readonly\"\n                                    [validationerror]=\"'SoNgayDieuTri' | validationerror:validationErrors\">\n                                </app-textboxnumeric>\n                                <app-combobox id=\"KetQuaDieuTri\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Kết quả điều trị\"\n                                    [(model)]=\"thongtinbenhnhan.KetQuaDieuTri\" [data]=\"KetQuaDieuTri\"\n                                    [disabled]=\"readonly\"\n                                    [validationerror]=\"'KetQuaDieuTri' | validationerror:validationErrors\"\n                                    class=\"item-no-padding\" [template]=\"khoaKhamTemplate\"\n                                    [templateHeader]=\"khoaKhamTemplateHeader\">\n                                    <ng-template #khoaKhamTemplateHeader let-dataItem>\n                                        <table width=\"100%\" class=\"table-combobox\">\n                                            <tr>\n                                                <th width=\"20%\">Mã</th>\n                                                <th>Tên</th>\n                                            </tr>\n                                        </table>\n                                    </ng-template>\n                                    <ng-template #khoaKhamTemplate let-dataItem>\n                                        <table width=\"100%\" class=\"table-combobox\">\n                                            <tr>\n                                                <td width=\"20%\">{{dataItem.KeyId}}</td>\n                                                <td>{{dataItem.DisplayName}}</td>\n                                            </tr>\n                                        </table>\n                                    </ng-template>\n                                </app-combobox>\n                                <app-combobox id=\"TinhTrangRaVien\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                    label=\"Tình trạng ra viện\" [data]=\"TinhTrangRaVien\"\n                                    [(model)]=\"thongtinbenhnhan.TinhTrangRaVien\" [disabled]=\"readonly\"\n                                    [validationerror]=\"'TinhTrangRaVien' | validationerror:validationErrors\"\n                                    class=\"item-no-padding\" [template]=\"khoaKhamTemplate\"\n                                    [templateHeader]=\"khoaKhamTemplateHeader\">\n                                    <ng-template #khoaKhamTemplateHeader let-dataItem>\n                                        <table width=\"100%\" class=\"table-combobox\">\n                                            <tr>\n                                                <th width=\"20%\">Mã</th>\n                                                <th>Tên</th>\n                                            </tr>\n                                        </table>\n                                    </ng-template>\n                                    <ng-template #khoaKhamTemplate let-dataItem>\n                                        <table width=\"100%\" class=\"table-combobox\">\n                                            <tr>\n                                                <td width=\"20%\">{{dataItem.KeyId}}</td>\n                                                <td>{{dataItem.DisplayName}}</td>\n                                            </tr>\n                                        </table>\n                                    </ng-template>\n                                </app-combobox>\n                                <app-datetimepicker id=\"NgayThanhToan\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                    [disabled]=\"readonly\" [(model)]=\"thongtinbenhnhan.NgayThanhToan\"\n                                    label=\"Ngày thanh toán\"\n                                    [validationerror]=\"'NgayThanhToan' | validationerror:validationErrors\">\n                                </app-datetimepicker>\n                                <app-textboxnumeric id=\"TienThuoc\" fxFlex=\"20%\" fxFlex.sm=\"40%\" min=\"0\"\n                                    [disabled]=\"true\" [(model)]=\"thongtinbenhnhan.TienThuoc\" label=\"Tiền thuốc\"\n                                    [decimals]=\"2\" format=\"n2\"\n                                    [validationerror]=\"'TienThuoc' | validationerror:validationErrors\">\n                                </app-textboxnumeric>\n                                <app-textboxnumeric id=\"TienVatTuYTe\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                    [(model)]=\"thongtinbenhnhan.TienVatTuYTe\" [disabled]=\"true\" label=\"Tiền Vật tư Y tế\"\n                                    [decimals]=\"2\" format=\"n2\" min=\"0\"\n                                    [validationerror]=\"'TienVatTuYTe' | validationerror:validationErrors\">\n                                </app-textboxnumeric>\n                                <app-textboxnumeric id=\"TienTongChi\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                    [decimals]=\"2\" format=\"n2\" min=\"0\" [(model)]=\"thongtinbenhnhan.TienTongChi\"\n                                    label=\"Tiền tổng chi\" [disabled]=\"true\"\n                                    [validationerror]=\"'TienTongChi' | validationerror:validationErrors\">\n                                </app-textboxnumeric>\n                                <app-textboxnumeric id=\"TienBenhNhanTuTra\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                    [(model)]=\"thongtinbenhnhan.TienBenhNhanTuTra\" label=\"Tiền người bệnh thanh toán\"\n                                    [decimals]=\"2\" format=\"n2\" min=\"0\" [disabled]=\"readonly\"\n                                    [validationerror]=\"'TienBenhNhanTuTra' | validationerror:validationErrors\">\n                                </app-textboxnumeric>\n                                <app-textboxnumeric id=\"TienBenhNhanCungChiTra\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                    [decimals]=\"2\" format=\"n2\" min=\"0\"\n                                    [(model)]=\"thongtinbenhnhan.TienBenhNhanCungChiTra\"\n                                    label=\"Tiền người bệnh cùng chi trả\" [decimals]=\"2\" [disabled]=\"true\"\n                                    [validationerror]=\"'TienBenhNhanCungChiTra' | validationerror:validationErrors\">\n                                </app-textboxnumeric>\n                                <app-textboxnumeric id=\"TienBaoHiemThanhToan\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                    [required]=\"true\" [decimals]=\"2\" format=\"n2\" min=\"0\" [disabled]=\"true\"\n                                    [(model)]=\"thongtinbenhnhan.TienBaoHiemThanhToan\" label=\"Tiền bảo hiểm thanh toán\"\n                                    [validationerror]=\"'TienBaoHiemThanhToan' | validationerror:validationErrors\">\n                                </app-textboxnumeric>\n                                <app-textboxnumeric id=\"TienNguonKhac\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                    [(model)]=\"thongtinbenhnhan.TienNguonKhac\" label=\"Tiền nguồn khác\" [decimals]=\"2\"\n                                    format=\"n2\" min=\"0\" [disabled]=\"true\"\n                                    [validationerror]=\"'TienNguonKhac' | validationerror:validationErrors\">\n                                </app-textboxnumeric>\n                                <app-textboxnumeric id=\"TienNgoaiDanhSach\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                    [(model)]=\"thongtinbenhnhan.TienNgoaiDinhSuat\" label=\"Tiền ngoài danh sách\"\n                                    [decimals]=\"2\" format=\"n2\" min=\"0\" [disabled]=\"true\"\n                                    [validationerror]=\"'TienNgoaiDanhSach' | validationerror:validationErrors\">\n                                </app-textboxnumeric>\n                                <app-textboxnumeric id=\"NamQuyetToan\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                    min=\"1900\" max=\"2090\" [(model)]=\"thongtinbenhnhan.NamQuyetToan\"\n                                    label=\"Năm quyết toán\" type=\"number\" format=\"#\" [disabled]=\"readonly\"\n                                    [validationerror]=\"'NamQuyetToan' | validationerror:validationErrors\">\n                                </app-textboxnumeric>\n                                <app-textboxnumeric id=\"ThangQuyetToan\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                    min=\"1\" max=\"12\" [(model)]=\"thongtinbenhnhan.ThangQuyetToan\"\n                                    label=\"Tháng quyết toán\" type=\"number\" format=\"#\" [disabled]=\"readonly\"\n                                    [validationerror]=\"'ThangQuyetToan' | validationerror:validationErrors\">\n                                </app-textboxnumeric>\n                                <app-combobox id=\"MaLoaiKCB\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Mã loại KCB\"\n                                    [required]=\"true\" [(model)]=\"thongtinbenhnhan.MaLoaiKCB\" [data]=\"MaLoaiKCB\"\n                                    [validationerror]=\"'MaLoaiKCB' | validationerror:validationErrors\"\n                                    [disabled]=\"readonly\" class=\"item-no-padding\" [template]=\"khoaKhamTemplate\"\n                                    [templateHeader]=\"khoaKhamTemplateHeader\">\n                                    <ng-template #khoaKhamTemplateHeader let-dataItem>\n                                        <table width=\"100%\" class=\"table-combobox\">\n                                            <tr>\n                                                <th width=\"20%\">Mã</th>\n                                                <th>Tên</th>\n                                            </tr>\n                                        </table>\n                                    </ng-template>\n                                    <ng-template #khoaKhamTemplate let-dataItem>\n                                        <table width=\"100%\" class=\"table-combobox\">\n                                            <tr>\n                                                <td width=\"20%\">{{dataItem.KeyId}}</td>\n                                                <td>{{dataItem.DisplayName}}</td>\n                                            </tr>\n                                        </table>\n                                    </ng-template>\n                                </app-combobox>\n                                <app-textbox id=\"MaKhoa\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                    [(model)]=\"thongtinbenhnhan.MaKhoa\" [disabled]=\"readonly\" label=\"Mã khoa\"\n                                    maxlength=\"15\" [validationerror]=\"'MaKhoa' | validationerror:validationErrors\">\n                                </app-textbox>\n                                <app-textbox id=\"MaCSKCB\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                    [(model)]=\"thongtinbenhnhan.MaCSKCB\" [disabled]=\"readonly\" label=\"Mã CSKCB\"\n                                    maxlength=\"5\" [validationerror]=\"'MaCSKCB' | validationerror:validationErrors\">\n                                </app-textbox>\n                                <app-textbox id=\"MaKhuVuc\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                    [(model)]=\"thongtinbenhnhan.MaKhuVuc\" [disabled]=\"readonly\" label=\"Mã Khu vực\"\n                                    [validationerror]=\"'MaKhuVuc' | validationerror:validationErrors\">\n                                </app-textbox>\n                                <app-textbox id=\"MaPhauThuatQuocTe\" fxFlex=\"20%\" fxFlex.sm=\"40%\" maxlength=\"255\"\n                                    [(model)]=\"thongtinbenhnhan.MaPhauThuatQuocTe\" [disabled]=\"readonly\" label=\"Mã PTQT\"\n                                    [validationerror]=\"'MaPhauThuatQuocTe' | validationerror:validationErrors\">\n                                </app-textbox>\n                                <app-textboxnumeric id=\"CanNang\" fxFlex=\"20%\" fxFlex.sm=\"40%\" min=\"1\" max=\"200\"\n                                    [(model)]=\"thongtinbenhnhan.CanNang\" label=\"Cân nặng\" [decimals]=\"2\" format=\"#.##\"\n                                    [validationerror]=\"'CanNang' | validationerror:validationErrors\">\n                                </app-textboxnumeric>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card\" fxFlex=\"auto\">\n                        <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <h2 class=\"title m-0\">Hồ sơ thuốc (XML2)</h2>\n\n                            <a (click)=\"clickShowPopupTimMaBS()\"\n                                style=\"color: blue; font-size: 21px;margin-left: 22px;\">Chọn mã bác sĩ</a>\n                            <button class=\"ml-1 mt-1 mr-2\" color=\"primary\" mat-mini-fab kendoTooltip\n                                title=\"Chọn mã bác sĩ\" type=\"button\" (click)=\"clickShowPopupTimMaBS()\"\n                                style=\"padding: 0px !important;\" fxFlex=\"none\">\n                                <mat-icon style=\"color: white;\" [icIcon]=\"icEdit\"></mat-icon>\n                            </button>\n\n                            <a (click)=\"AddNewThuoc()\" style=\"position: absolute; right: 68px; color:blue\"><i\n                                    class=\"k-icon k-i-plus-outline\"></i>Thêm</a>\n                        </div>\n                        <div class=\"px-6 py-4\" fxLayout=\"column\">\n                            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px\" fxLayoutGap.lt-sm=\"0\"\n                                *ngFor=\"let item of thongtinbenhnhan.HoSoChiTietThuoc; let i = index\">\n                                <div class=\"card\" fxFlex=\"column\" style=\"padding:22px;\" fxFlex=\"100%\">\n                                    <button class=\"k-icon k-i-delete\"\n                                        style=\"margin-bottom: 5px;color:red;float: right;display: block;position: relative;\"\n                                        (click)=\"DeleteVitri(i)\"></button>\n                                    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                        fxLayoutGap.lt-sm=\"0\">\n                                        <app-textbox id=\"MaThuoc\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                            [(model)]=\"item.MaThuoc \" maxlength=\"255\" label=\"Mã thuốc\"\n                                            [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoSoChiTietThuoc['+i+'].MaThuoc' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-combobox id=\"MaNhom\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Mã nhóm\"\n                                            [required]=\"true\" [(model)]=\"item.MaNhom\" [data]=\"MaNhom\"\n                                            [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoSoChiTietThuoc['+i+'].MaNhom' | validationerror:validationErrors\"\n                                            class=\"item-no-padding\" [template]=\"khoaKhamTemplate\"\n                                            [templateHeader]=\"khoaKhamTemplateHeader\">\n                                            <ng-template #khoaKhamTemplateHeader let-dataItem>\n                                                <table width=\"100%\" class=\"table-combobox\">\n                                                    <tr>\n                                                        <th width=\"20%\">Mã</th>\n                                                        <th>Tên</th>\n                                                    </tr>\n                                                </table>\n                                            </ng-template>\n                                            <ng-template #khoaKhamTemplate let-dataItem>\n                                                <table width=\"100%\" class=\"table-combobox\">\n                                                    <tr>\n                                                        <td width=\"20%\">{{dataItem.KeyId}}</td>\n                                                        <td>{{dataItem.DisplayName}}</td>\n                                                    </tr>\n                                                </table>\n                                            </ng-template>\n                                        </app-combobox>\n\n                                        <app-textbox id=\"TenThuoc\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                            [(model)]=\"item.TenThuoc\" maxlength=\"1024\" label=\"Tên thuốc\"\n                                            [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoSoChiTietThuoc['+i+'].TenThuoc' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-textbox id=\"DonViTinh\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                            maxlength=\"50\" [(model)]=\"item.DonViTinh\" label=\"Đơn vị tính\"\n                                            [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoSoChiTietThuoc['+i+'].DonViTinh' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-textbox id=\"HamLuong\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [disabled]=\"readonly\"\n                                            [(model)]=\"item.HamLuong\" maxlength=\"1024\" label=\"Hàm lượng\"\n                                            [validationerror]=\"'HamLuong' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-textbox id=\"DuongDung\" fxFlex=\"20%\" fxFlex.sm=\"40%\" maxlength=\"4\"\n                                            [(model)]=\"item.DuongDung\" label=\"Đường Dùng\" [disabled]=\"readonly\"\n                                            [validationerror]=\"'DuongDung' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-textbox id=\"LieuDung\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [disabled]=\"readonly\"\n                                            [(model)]=\"item.LieuDung\" maxlength=\"255\" label=\"Liều dùng\"\n                                            [validationerror]=\"'LieuDung' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-textbox id=\"SoDangKy\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [disabled]=\"readonly\"\n                                            [(model)]=\"item.SoDangKy\" maxlength=\"255\" label=\"Số đăng ký\"\n                                            [validationerror]=\"'HoSoChiTietThuoc['+i+'].SoDangKy' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-textboxnumeric id=\"SoLuong\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                            max=\"999999999999999\" [(model)]=\"item.SoLuong\" label=\"Số lượng\"\n                                            type=\"number\" format=\"#.###\" [disabled]=\"readonly\"\n                                            (modelChange)=\"ChangeSoLuongDichVuKyThuat($event, item)\" [decimals]=\"2\"\n                                            [validationerror]=\"'HoSoChiTietThuoc['+i+'].SoLuong' | validationerror:validationErrors\">\n                                        </app-textboxnumeric>\n                                        <app-textboxnumeric id=\"DonGia\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                            [decimals]=\"2\" min=\"1\" max=\"999999999999999\" [disabled]=\"readonly\"\n                                            [(model)]=\"item.DonGia\" label=\"Đơn giá\" type=\"number\" format=\"#.###\"\n                                            (modelChange)=\"ChangeDonGiaDichVuKyThuat($event, item)\"\n                                            [validationerror]=\"'HoSoChiTietThuoc['+i+'].DonGia' | validationerror:validationErrors\">\n                                        </app-textboxnumeric>\n                                        <app-textboxnumeric id=\"TyLeThanhToan\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                            [disabled]=\"readonly\" [required]=\"true\" min=\"0\" max=\"100\"\n                                            [(model)]=\"item.TyLeThanhToan\" label=\"Tỷ lệ thanh toán\" type=\"number\"\n                                            format=\"#\" (modelChange)=\"ChangeTyLeThanhToanDichVuKyThuat($event, item)\"\n                                            [validationerror]=\"'HoSoChiTietThuoc['+i+'].TyLeThanhToan' | validationerror:validationErrors\">\n                                        </app-textboxnumeric>\n                                        <app-textboxnumeric id=\"ThanhTien\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                            [disabled]=\"true\" [required]=\"true\"\n                                            (modelChange)=\"congThucTienBaoHiemThanhToanXML2(item)\"\n                                            [(model)]=\"item.ThanhTien\" label=\"Thành tiền\" type=\"number\" [decimals]=\"2\"\n                                            format=\"n2\" min=\"0\"\n                                            [validationerror]=\"'HoSoChiTietThuoc['+i+'].ThanhTien' | validationerror:validationErrors\">\n                                        </app-textboxnumeric>\n                                        <app-textbox id=\"MaKhoa\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                            [(model)]=\"item.MaKhoa\" maxlength=\"15\" label=\"Mã Khoa\" [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoSoChiTietThuoc['+i+'].MaKhoa' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-textbox id=\"MaBacSi\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                            [(model)]=\"item.MaBacSi\" maxlength=\"255\" label=\"Mã bác sĩ\"\n                                            [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoSoChiTietThuoc['+i+'].MaBacSi' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-textbox id=\"MaBenh\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                            [(model)]=\"item.MaBenh\" maxlength=\"255\" label=\"Mã bệnh\"\n                                            [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoSoChiTietThuoc['+i+'].MaBenh' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-datetimepicker id=\"NgayYLenh\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                            [(model)]=\"item.NgayYLenh\" [required]=\"true\" label=\"Ngày Y lệnh\"\n                                            [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoSoChiTietThuoc['+i+'].NgayYLenh' | validationerror:validationErrors\">\n                                        </app-datetimepicker>\n                                        <app-textbox id=\"ThongTinThau\" fxFlex=\"20%\" fxFlex.sm=\"40%\" maxlength=\"255\"\n                                            [(model)]=\"item.ThongTinThau\" label=\"Thông tin thầu\" [disabled]=\"readonly\"\n                                            [validationerror]=\"'ThongTinThau' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-textboxnumeric id=\"PhamVi\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                            min=\"1\" max=\"2\" [(model)]=\"item.PhamVi\" label=\"Phạm vi\" type=\"number\"\n                                            format=\"#\" [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoSoChiTietThuoc['+i+'].PhamVi' | validationerror:validationErrors\">\n                                        </app-textboxnumeric>\n                                        <app-textboxnumeric id=\"MucHuong\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                            min=\"0\" max=\"100\" [(model)]=\"item.MucHuong\" label=\"Mức hưởng\" type=\"number\"\n                                            format=\"#\" [disabled]=\"readonly\"\n                                            (modelChange)=\"congThucTienBaoHiemThanhToanXML2(item)\"\n                                            [validationerror]=\"'HoSoChiTietThuoc['+i+'].MucHuong' | validationerror:validationErrors\">\n                                        </app-textboxnumeric>\n                                        <app-textboxnumeric id=\"TienBenhNhanTuTra\" fxFlex=\"20%\" fxFlex.sm=\"40%\" min=\"0\"\n                                            [decimals]=\"2\" [(model)]=\"item.TienBenhNhanTuTra\"\n                                            label=\"Tiền người bệnh thanh toán\" type=\"number\" format=\"#.##\"\n                                            [disabled]=\"readonly\" (modelChange)=\"congThucTienBaoHiemThanhToanXML2(item)\"\n                                            [validationerror]=\"'HoSoChiTietThuoc['+i+'].TienBenhNhanTuTra' | validationerror:validationErrors\">\n                                        </app-textboxnumeric>\n                                        <app-textboxnumeric id=\"TienNguonKhac\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                            [decimals]=\"2\" [(model)]=\"item.TienNguonKhac\" label=\"Tiền nguồn khác\"\n                                            type=\"number\" format=\"#.##\" [disabled]=\"readonly\"\n                                            (modelChange)=\"congThucTienBaoHiemThanhToanXML2(item)\"\n                                            [validationerror]=\"'HoSoChiTietThuoc['+i+'].TienNguonKhac' | validationerror:validationErrors\">\n                                        </app-textboxnumeric>\n                                        <app-textboxnumeric id=\"TienBaoHiemThanhToan\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                            [required]=\"true\" [(model)]=\"item.TienBaoHiemThanhToan\"\n                                            label=\"Tiền bảo hiểm thanh toán\" [decimals]=\"2\" format=\"n2\"\n                                            [disabled]=\"true\"\n                                            [validationerror]=\"'HoSoChiTietThuoc['+i+'].TienBaoHiemThanhToan' | validationerror:validationErrors\">\n                                        </app-textboxnumeric>\n                                        <app-textboxnumeric id=\"TienBenhNhanCungChiTra\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                            [(model)]=\"item.TienBenhNhanCungChiTra\" label=\"Tiền NB cùng chi trả\"\n                                            [decimals]=\"2\" format=\"n2\" [disabled]=\"true\"\n                                            [validationerror]=\"'HoSoChiTietThuoc['+i+'].TienBenhNhanCungChiTra' | validationerror:validationErrors\">\n                                        </app-textboxnumeric>\n                                        <app-textboxnumeric id=\"TienNgoaiDanhSach\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                            [decimals]=\"2\" [(model)]=\"item.TienNgoaiDinhSuat\"\n                                            (modelChange)=\"totalTienNguoiBenhXML1()\" label=\"Tiền ngoài danh sách\"\n                                            type=\"number\" format=\"#.##\" [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoSoChiTietThuoc['+i+'].TienNgoaiDanhSach' | validationerror:validationErrors\">\n                                        </app-textboxnumeric>\n                                        <app-combobox id=\"MaPhuongThucThanhToan\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                            label=\"Mã Phương thức thanh toán\" [required]=\"true\" [disabled]=\"readonly\"\n                                            [data]=\"MaPhuongThucThanhToan\" [(model)]=\"item.MaPhuongThucThanhToan\"\n                                            [validationerror]=\"'HoSoChiTietThuoc['+i+'].MaPhuongThucThanhToan' | validationerror:validationErrors\"\n                                            class=\"item-no-padding\" [template]=\"khoaKhamTemplate\"\n                                            [templateHeader]=\"khoaKhamTemplateHeader\">\n                                            <ng-template #khoaKhamTemplateHeader let-dataItem>\n                                                <table width=\"100%\" class=\"table-combobox\">\n                                                    <tr>\n                                                        <th width=\"20%\">Mã</th>\n                                                        <th>Tên</th>\n                                                    </tr>\n                                                </table>\n                                            </ng-template>\n                                            <ng-template #khoaKhamTemplate let-dataItem>\n                                                <table width=\"100%\" class=\"table-combobox\">\n                                                    <tr>\n                                                        <td width=\"20%\">{{dataItem.KeyId}}</td>\n                                                        <td>{{dataItem.DisplayName}}</td>\n                                                    </tr>\n                                                </table>\n                                            </ng-template>\n                                        </app-combobox>\n                                        <br />\n                                    </div>\n                                </div>\n                                <div style=\"padding-top: 10px;\"></div>\n                                <div></div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card\" fxFlex=\"auto\">\n                        <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <h2 class=\"title m-0\">Dịch vụ kỹ thuật (XML3)</h2>\n                            <a (click)=\"AddDichVuKyThuat()\" style=\"position: absolute; right: 68px; color:blue\"><i\n                                    class=\"k-icon k-i-plus-outline\"></i>Thêm</a>\n                        </div>\n                        <div class=\"px-6 py-4\" fxLayout=\"column\">\n                            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px\" fxLayoutGap.lt-sm=\"0\"\n                                *ngFor=\"let item of thongtinbenhnhan.HoSoChiTietDVKT; let i = index\">\n                                <div class=\"card\" fxFlex=\"column\" style=\"padding:22px;\" fxFlex=\"100%\">\n                                    <button class=\"k-icon k-i-delete\"\n                                        style=\"margin-bottom: 5px;color:red;float: right;display: block;position: relative;\"\n                                        (click)=\"DeleteVitriDVKT(i)\"></button>\n                                    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                        fxLayoutGap.lt-sm=\"0\">\n                                        <app-textbox id=\"MaDichVu\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                            [(model)]=\"item.MaDichVu \" maxlength=\"255\" label=\"Mã dịch vụ\"\n                                            [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoSoChiTietDVKT['+i+'].MaDichVu' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-textbox id=\"MaVatTu\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [(model)]=\"item.MaVatTu\"\n                                            maxlength=\"255\" label=\"Mã vật tư\" [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoSoChiTietDVKT['+i+'].MaVatTu' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-combobox id=\"MaNhom\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Mã nhóm\"\n                                            [required]=\"true\" [data]=\"MaNhomDVKT\" [(model)]=\"item.MaNhom\"\n                                            [modelText]=\"item.MaNhomText\" [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoSoChiTietDVKT['+i+'].MaNhom' | validationerror:validationErrors\"\n                                            class=\"item-no-padding\" [template]=\"khoaKhamTemplate\"\n                                            [templateHeader]=\"khoaKhamTemplateHeader\"\n                                            (modelChange)=\"modelChangeMaNhomDVKT($event)\">\n                                            <ng-template #khoaKhamTemplateHeader let-dataItem>\n                                                <table width=\"100%\" class=\"table-combobox\">\n                                                    <tr>\n                                                        <th width=\"20%\">Mã</th>\n                                                        <th>Tên</th>\n                                                    </tr>\n                                                </table>\n                                            </ng-template>\n                                            <ng-template #khoaKhamTemplate let-dataItem>\n                                                <table width=\"100%\" class=\"table-combobox\">\n                                                    <tr>\n                                                        <td width=\"20%\">{{dataItem.KeyId}}</td>\n                                                        <td>{{dataItem.DisplayName}}</td>\n                                                    </tr>\n                                                </table>\n                                            </ng-template>\n                                        </app-combobox>\n                                        <app-textbox id=\"GoiVatTuYTe\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                            [(model)]=\"item.GoiVatTuYTe\" label=\"Gói vật tư\" [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoSoChiTietDVKT['+i+'].GoiVatTuYTe' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-textbox id=\"TenVatTu\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                            [(model)]=\"item.TenVatTu\" maxlength=\"1024\" label=\"Tên vật tư\"\n                                            [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoSoChiTietDVKT['+i+'].TenVatTu' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-textbox id=\"TenDichVu\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                            [(model)]=\"item.TenDichVu\" label=\"Tên dịch vụ\" maxlength=\"1024\"\n                                            [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoSoChiTietDVKT['+i+'].TenDichVu' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-textbox id=\"DonViTinh\" fxFlex=\"20%\" fxFlex.sm=\"40%\" maxlength=\"50\"\n                                            [(model)]=\"item.DonViTinh\" label=\"Đơn vị tính\" [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoSoChiTietDVKT['+i+'].DonViTinh' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-textboxnumeric id=\"PhamVi\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                            min=\"1\" max=\"2\" [(model)]=\"item.PhamVi\" label=\"Phạm vi\" type=\"number\"\n                                            format=\"#\" [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoSoChiTietDVKT['+i+'].PhamVi' | validationerror:validationErrors\">\n                                        </app-textboxnumeric>\n                                        <app-textboxnumeric id=\"SoLuong\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                            max=\"999999999999999\" [(model)]=\"item.SoLuong\" label=\"Số lượng\"\n                                            type=\"number\" format=\"#.###\" [decimals]=\"2\" [disabled]=\"readonly\"\n                                            (modelChange)=\"ChangeSoLuongHoSoThuoc($event, item)\"\n                                            [validationerror]=\"'HoSoChiTietDVKT['+i+'].SoLuong' | validationerror:validationErrors\">\n                                        </app-textboxnumeric>\n                                        <app-textboxnumeric id=\"DonGia\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                            min=\"1\" max=\"999999999999999\" [(model)]=\"item.DonGia\" label=\"Đơn giá\"\n                                            type=\"number\" format=\"#.###\" [decimals]=\"2\" [disabled]=\"readonly\"\n                                            (modelChange)=\"ChangeDonGiaHoSoThuoc($event, item)\"\n                                            [validationerror]=\"'HoSoChiTietDVKT['+i+'].DonGia' | validationerror:validationErrors\">\n                                        </app-textboxnumeric>\n                                        <app-textbox id=\"ThongTinThau\" fxFlex=\"20%\" fxFlex.sm=\"40%\" maxlength=\"255\"\n                                            [(model)]=\"item.ThongTinThau\" label=\"Thông tin thầu\" [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoSoChiTietDVKT['+i+'].ThongTinThau' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-textboxnumeric id=\"TyLeThanhToan\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                            [required]=\"true\" min=\"0\" max=\"100\" [(model)]=\"item.TyLeThanhToan\"\n                                            label=\"Tỷ lệ thanh toán\" type=\"number\" format=\"#\" [disabled]=\"readonly\"\n                                            (modelChange)=\"ChangeTyLeThanhToanHoSoThuoc($event, item)\"\n                                            [validationerror]=\"'HoSoChiTietDVKT['+i+'].TyLeThanhToan' | validationerror:validationErrors\">\n                                        </app-textboxnumeric>\n                                        <app-textboxnumeric id=\"ThanhTien\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                            [required]=\"true\" min=\"0\" [(model)]=\"item.ThanhTien\" label=\"Thành tiền\"\n                                            type=\"number\" format=\"n2\" [decimals]=\"2\" [disabled]=\"true\"\n                                            (modelChange)=\"congThucTienBaoHiemThanhToanXML3(item)\"\n                                            [validationerror]=\"'HoSoChiTietDVKT['+i+'].ThanhTien' | validationerror:validationErrors\">\n                                        </app-textboxnumeric>\n                                        <app-textboxnumeric id=\"TienThanhToanToiDa\" fxFlex=\"20%\" fxFlex.sm=\"40%\" min=\"0\"\n                                            [(model)]=\"item.TienThanhToanToiDa\" label=\"Mức thanh toán tối đa\"\n                                            type=\"number\" format=\"#.##\" [decimals]=\"2\" [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoSoChiTietDVKT['+i+'].TienThanhToanToiDa' | validationerror:validationErrors\">\n                                        </app-textboxnumeric>\n                                        <app-textboxnumeric id=\"MucHuong\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                            min=\"0\" max=\"100\" [(model)]=\"item.MucHuong\" label=\"Mức hưởng\" type=\"number\"\n                                            format=\"#\" [disabled]=\"readonly\"\n                                            (modelChange)=\"congThucTienBaoHiemThanhToanXML3(item)\"\n                                            [validationerror]=\"'HoSoChiTietDVKT['+i+'].MucHuong' | validationerror:validationErrors\">\n                                        </app-textboxnumeric>\n                                        <app-textboxnumeric id=\"TienNguonKhac\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                            [(model)]=\"item.TienNguonKhac\" label=\"Tiền nguồn khác\" type=\"number\"\n                                            format=\"#.##\" [decimals]=\"2\" [disabled]=\"readonly\"\n                                            (modelChange)=\"congThucTienBaoHiemThanhToanXML3(item)\"\n                                            [validationerror]=\"'HoSoChiTietDVKT['+i+'].TienNguonKhac' | validationerror:validationErrors\">\n                                        </app-textboxnumeric>\n                                        <app-textboxnumeric id=\"TienBenhNhanTuTra\" fxFlex=\"20%\" fxFlex.sm=\"40%\" min=\"0\"\n                                            [(model)]=\"item.TienBenhNhanTuTra\" label=\"Tiền người bệnh thanh toán\"\n                                            type=\"number\" format=\"#.##\" [decimals]=\"2\" [disabled]=\"readonly\"\n                                            (modelChange)=\"congThucTienBaoHiemThanhToanXML3(item)\"\n                                            [validationerror]=\"'HoSoChiTietDVKT['+i+'].TienBenhNhanTuTra' | validationerror:validationErrors\">\n                                        </app-textboxnumeric>\n                                        <app-textboxnumeric id=\"TienBaoHiemThanhToan\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                            [required]=\"true\" [(model)]=\"item.TienBaoHiemThanhToan\"\n                                            label=\"Tiền bảo hiểm thanh toán\" type=\"number\" [decimals]=\"2\" format=\"n2\"\n                                            [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoSoChiTietDVKT['+i+'].TienBaoHiemThanhToan' | validationerror:validationErrors\">\n                                        </app-textboxnumeric>\n                                        <app-textboxnumeric id=\"TienBenhNhanCungChiTra\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                            [(model)]=\"item.TienBenhNhanCungChiTra\" label=\"Tiền NB cùng chi trả\"\n                                            type=\"number\" [decimals]=\"2\" format=\"n2\" [disabled]=\"true\"\n                                            [validationerror]=\"'HoSoChiTietDVKT['+i+'].TienBenhNhanCungChiTra' | validationerror:validationErrors\">\n                                        </app-textboxnumeric>\n                                        <app-textboxnumeric id=\"TienNgoaiDanhSach\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                            [(model)]=\"item.TienNgoaiDinhSuat\" label=\"Tiền ngoài danh sách\"\n                                            type=\"number\" format=\"#.##\" [disabled]=\"readonly\"\n                                            (modelChange)=\"totalTienNguoiBenhXML1()\"\n                                            [validationerror]=\"'HoSoChiTietDVKT['+i+'].TienNgoaiDanhSach' | validationerror:validationErrors\">\n                                        </app-textboxnumeric>\n                                        <app-textbox id=\"MaKhoa\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                            [(model)]=\"item.MaKhoa\" maxlength=\"15\" label=\"Mã khoa\" [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoSoChiTietDVKT['+i+'].MaKhoa' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-textbox id=\"MaGiuong\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                            [(model)]=\"item.MaGiuong\" maxlength=\"14\" label=\"Mã Giường\"\n                                            [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoSoChiTietDVKT['+i+'].MaGiuong' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-textbox id=\"MaBacSi\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                            [(model)]=\"item.MaBacSi\" maxlength=\"255\" label=\"Mã bác sĩ\"\n                                            [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoSoChiTietDVKT['+i+'].MaBacSi' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-textbox id=\"MaBenh\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                            [(model)]=\"item.MaBenh\" maxlength=\"255\" label=\"Mã bệnh\"\n                                            [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoSoChiTietDVKT['+i+'].MaBenh' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-datetimepicker id=\"NgayYLenh\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                            [(model)]=\"item.NgayYLenh\" [required]=\"true\" label=\"Ngày Y lệnh\"\n                                            [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoSoChiTietDVKT['+i+'].NgayYLenh' | validationerror:validationErrors\">\n                                        </app-datetimepicker>\n                                        <app-datetimepicker id=\"NgayKetQua\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                            [(model)]=\"item.NgayKetQua\" label=\"Ngày kết quả\"\n                                            [validationerror]=\"'HoSoChiTietDVKT['+i+'].NgayKetQua' | validationerror:validationErrors\">\n                                        </app-datetimepicker>\n                                        <app-combobox id=\"MaPhuongThucThanhToan\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                            label=\"Mã Phương thức thanh toán\" [required]=\"true\"\n                                            [data]=\"MaPhuongThucThanhToan\" [(model)]=\"item.MaPhuongThucThanhToan\"\n                                            [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoSoChiTietDVKT['+i+'].MaPhuongThucThanhToan' | validationerror:validationErrors\"\n                                            class=\"item-no-padding\" [template]=\"khoaKhamTemplate\"\n                                            [templateHeader]=\"khoaKhamTemplateHeader\">\n                                            <ng-template #khoaKhamTemplateHeader let-dataItem>\n                                                <table width=\"100%\" class=\"table-combobox\">\n                                                    <tr>\n                                                        <th width=\"20%\">Mã</th>\n                                                        <th>Tên</th>\n                                                    </tr>\n                                                </table>\n                                            </ng-template>\n                                            <ng-template #khoaKhamTemplate let-dataItem>\n                                                <table width=\"100%\" class=\"table-combobox\">\n                                                    <tr>\n                                                        <td width=\"20%\">{{dataItem.KeyId}}</td>\n                                                        <td>{{dataItem.DisplayName}}</td>\n                                                    </tr>\n                                                </table>\n                                            </ng-template>\n                                        </app-combobox>\n                                        <br />\n                                    </div>\n                                </div>\n                                <div style=\"padding-top: 10px;\"></div>\n                                <div></div>\n\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card\" fxFlex=\"auto\">\n                        <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <h2 class=\"title m-0\">Dịch vụ kỹ thuật cận lâm sàng (XML4)</h2>\n                            <a (click)=\"AddDichVuKyThuatCanLamSang()\"\n                                style=\"position: absolute; right: 68px; color:blue\"><i\n                                    class=\"k-icon k-i-plus-outline\"></i>Thêm</a>\n                        </div>\n                        <div class=\"px-6 py-4\" fxLayout=\"column\">\n                            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px\" fxLayoutGap.lt-sm=\"0\"\n                                *ngFor=\"let item of thongtinbenhnhan.HoSoCanLamSang; let i = index\">\n                                <div class=\"card\" fxFlex=\"column\" style=\"padding:22px;\" fxFlex=\"100%\">\n                                    <button class=\"k-icon k-i-delete\"\n                                        style=\"margin-bottom: 5px;color:red;float: right;display: block;position: relative;\"\n                                        (click)=\"DeleteVitrilamsang(i)\"></button>\n                                    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                        fxLayoutGap.lt-sm=\"0\">\n                                        <app-textbox id=\"MaDichVu\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                            [(model)]=\"item.MaDichVu \" maxlength=\"50\" label=\"Mã dịch vụ\"\n                                            [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoSoCanLamSang['+i+'].MaDichVu' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-textbox id=\"MaChiSo\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [(model)]=\"item.MaChiSo\"\n                                            maxlength=\"50\" label=\"Mã chỉ số\" [disabled]=\"readonly\"\n                                            [validationerror]=\"'MaChiSo' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-textbox id=\"TenChiSo\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                            [(model)]=\"item.TenChiSo\" maxlength=\"255\" label=\"Tên chỉ số\"\n                                            [disabled]=\"readonly\"\n                                            [validationerror]=\"'TenChiSo' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-textbox id=\"GiaTri\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [(model)]=\"item.GiaTri\"\n                                            maxlength=\"255\" label=\"Giá trị\" [disabled]=\"readonly\"\n                                            [validationerror]=\"'GiaTri' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-textbox id=\"MaMay\" fxFlex=\"20%\" fxFlex.sm=\"40%\" maxlength=\"50\"\n                                            [(model)]=\"item.MaMay\" label=\"Mã máy\" [disabled]=\"readonly\"\n                                            [validationerror]=\"'MaMay' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-textbox id=\"MoTa\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [(model)]=\"item.MoTa\"\n                                            maxlength=\"4000\" label=\"Mô tả\" [disabled]=\"readonly\"\n                                            [validationerror]=\"'MoTa' | validationerror:validationErrors\">\n                                        </app-textbox>\n\n                                        <app-textbox id=\"KetLuan\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [(model)]=\"item.KetLuan\"\n                                            maxlength=\"4000\" label=\"Kêt luận\" [disabled]=\"readonly\"\n                                            [validationerror]=\"'KetLuan' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-datetimepicker id=\"NgayKQ\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                            [(model)]=\"item.NgayKQ\" label=\"Ngày kết quả\" [required]=\"true\"\n                                            [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoSoCanLamSang['+i+'].NgayKQ' | validationerror:validationErrors\">\n                                        </app-datetimepicker>\n                                        <br />\n                                    </div>\n                                </div>\n                                <div style=\"padding-top: 10px;\"></div>\n                                <div></div>\n\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card\" fxFlex=\"auto\">\n                        <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <h2 class=\"title m-0\">Hồ sơ chi tiết diễn biến bệnh (XML5)</h2>\n                            <a (click)=\"AddDienBienBenh()\" style=\"position: absolute; right: 68px; color:blue\"><i\n                                    class=\"k-icon k-i-plus-outline\"></i>Thêm</a>\n                        </div>\n                        <div class=\"px-6 py-4\" fxLayout=\"column\">\n                            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px\" fxLayoutGap.lt-sm=\"0\"\n                                *ngFor=\"let item of thongtinbenhnhan.HoSoChiTietDienBienBenh; let i = index\">\n                                <div class=\"card\" fxFlex=\"column\" style=\"padding:22px;\" fxFlex=\"100%\">\n                                    <button class=\"k-icon k-i-delete\"\n                                        style=\"margin-bottom: 5px;color:red;float: right;display: block;position: relative;\"\n                                        (click)=\"DeleteVitriDienBien(i)\"></button>\n                                    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                        fxLayoutGap.lt-sm=\"0\">\n                                        <app-textbox id=\"DienBien\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                            [(model)]=\"item.DienBien \" maxlength=\"4000\" label=\"Diễn biến\"\n                                            [disabled]=\"readonly\" [required]=\"true\"\n                                            [validationerror]=\"'HoSoChiTietDienBienBenh['+i+'].DienBien' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-textbox id=\"HoiChuan\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                            [(model)]=\"item.HoiChuan\" maxlength=\"4000\" label=\"Hội chẩn\"\n                                            [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoiChuan' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-textbox id=\"PhauThuat\" fxFlex=\"20%\" fxFlex.sm=\"40%\" maxlength=\"4000\"\n                                            [(model)]=\"item.PhauThuat\" label=\"Phẫu thuật\" [disabled]=\"readonly\"\n                                            [validationerror]=\"'PhauThuat' | validationerror:validationErrors\">\n                                        </app-textbox>\n                                        <app-datetimepicker id=\"NgayYLenh\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                            [(model)]=\"item.NgayYLenh\" label=\"Ngày Y lệnh\" [disabled]=\"readonly\"\n                                            [validationerror]=\"'HoSoChiTietDienBienBenh['+i+'].NgayYLenh' | validationerror:validationErrors\">\n                                        </app-datetimepicker>\n                                        <br />\n                                    </div>\n                                </div>\n                                <div style=\"padding-top: 10px;\"></div>\n                                <div></div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"sticky-button-action py-3 text-right\" kendoTooltip>\n                        <mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" fxFlex=\"100%\"\n                            style=\"padding: 25px !important\">\n                            <ng-container>\n                                <ng-template #templateInfo>\n                                    <table width=\"100%\" style=\"margin: 0px;padding: 0px;\"\n                                    *ngIf=\"showWarningMessages != undefined && showWarningMessages != null && showWarningMessages.length > 0\">\n                                        <tr *ngFor=\"let messages of showWarningMessages\">\n                                            <td>\n                                                <span class=\"info\"> {{messages}}</span>\n                                            </td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n\n                                <span class=\"template\" kendoTooltip #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\"\n                                    position=\"top\" [tooltipTemplate]=\"templateInfo\" filter=\"*\">\n\n                                    <mat-icon class=\"icon-war-status-grid\" style=\"color: orange;\"\n                                        *ngIf=\"thongtinbenhnhan.WarningMessage !== undefined && thongtinbenhnhan.WarningMessage !== null && thongtinbenhnhan.WarningMessage !==''\"\n                                        fxFlex=\"2%\" [icIcon]=\"icWarning\">\n                                    </mat-icon>\n                                </span>\n\n\n                                <button type=\"button\" mat-raised-button (click)=\"backToList()\" title=\"Phím tắt: ESC\">\n                                    Hủy\n                                </button>\n                                <button type=\"button\" style=\"background-color: rgb(14, 216, 172); color: white;\"\n                                    mat-button class=\"mr-1\" mat-raised-button (click)=\"downloadThongTinXMLNguoiBenh()\"\n                                    title=\"Phím tắt: Ctrl + D\"><i class=\"ft-save\"></i><i class=\"k-icon k-i-download\"\n                                        style=\"margin-right: 5px;margin-bottom: 3px;\"></i> Xuất XML </button>\n                                <button type=\"button\" (click)=\"goiHoSoGiamDinhNguoiBenh()\" color=\"primary\"\n                                    title=\"Phím tắt: Ctrl + S\" mat-raised-button><i class=\"ft-save\"></i>\n                                    Gửi trực tiếp lên Bộ Y Tế</button>\n                            </ng-container>\n                        </mat-dialog-actions>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/tim-kiem-ma-bac-si-popup/tim-kiem-ma-bac-si-popup.component.html": 
        /*!***************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/tim-kiem-ma-bac-si-popup/tim-kiem-ma-bac-si-popup.component.html ***!
          \***************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\t<div style=\"font: 500 18px/26px var(--font)\">TÌM KIẾM THÔNG TIN BÁC SĨ</div>\n\t<button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n\t\t<mat-icon [icIcon]=\"icClose\"></mat-icon>\n\t</button>\n</div>\n<mat-dialog-content>\n\t<div width=\"100%\" fxLayout=\"row\">\n\t\t<table class=\"table table-border\" width=\"100%\">\n\t\t\t<tr>\n\t\t\t\t<td width=\"100%\">\n\t\t\t\t\t<app-combobox id=\"ma-bac-si\" fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Danh Sách Bác Sĩ\"\n\t\t\t\t\t\tclass=\"item-no-padding\" [required]=\"true\" [popupSettings]=\"null\" url=\"NhanVien/GetListMaBacSi\"\n\t\t\t\t\t\t(modelChange)=\"modelChangeMaBacSi($event)\">\n\t\t\t\t\t</app-combobox>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<app-textarea fxFlex=\"100%\" class=\"no-label\" [(model)]=\"strMaBS\">\n\t\t\t\t</app-textarea>\n\t\t\t</tr>\n\t\t</table>\n\t</div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n\t<button mat-button mat-dialog-close (click)=\"huy()\">Hủy</button>\n\t<button *ngIf=\"strMaBS !== undefined && strMaBS !== null && strMaBS !=='' \" mat-raised-button mat-button\n\t\tcolor=\"primary\" (click)=\"btApDungMaBacSi()\" cdkFocusInitial>Áp dụng</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/tim-kiem-ma-benh-khac-popup/tim-kiem-ma-benh-khac-popup.component.html": 
        /*!*********************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/tim-kiem-ma-benh-khac-popup/tim-kiem-ma-benh-khac-popup.component.html ***!
          \*********************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\t<div style=\"font: 500 18px/26px var(--font)\">TÌM KIẾM THÔNG TIN BỆNH</div>\n\t<button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n\t\t<mat-icon [icIcon]=\"icClose\"></mat-icon>\n\t</button>\n</div>\n<mat-dialog-content>\n\t<div width=\"100%\" fxLayout=\"row\">\n\t\t<table class=\"table table-border\" width=\"100%\">\n\t\t\t<tr>\n\t\t\t\t<td width=\"100%\">\n\t\t\t\t\t<app-multiselect *ngIf=\"layMaBenhOrTenBenh === true\" id=\"ChuanDoanLienKetICD\" fxFlex=\"100%\"\n\t\t\t\t\t\tfxFlex.sm=\"100%\" label=\"Danh Sách Chuẩn Đoán Bệnh \" class=\"item-no-padding\" [required]=\"true\"\n\t\t\t\t\t\t[popupSettings]=\"null\" url=\"ChuanDoan/GetListChuanDoanTheoMaBenh\"\n\t\t\t\t\t\t(modelChange)=\"modelChangeMaBenhKhac($event)\">\n\t\t\t\t\t</app-multiselect>\n\t\t\t\t\t<app-multiselect *ngIf=\"layMaBenhOrTenBenh === false\" id=\"ChuanDoanLienKetICD\" fxFlex=\"100%\"\n\t\t\t\t\t\tfxFlex.sm=\"100%\" label=\"Danh Sách Chuẩn Đoán Bệnh \" class=\"item-no-padding\" [required]=\"true\"\n\t\t\t\t\t\t[popupSettings]=\"null\" url=\"ChuanDoan/GetListChuanDoanTheoTenBenh\"\n\t\t\t\t\t\t(modelChange)=\"modelChangeMaBenhKhac($event)\">\n\t\t\t\t\t</app-multiselect>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<app-textarea fxFlex=\"100%\" class=\"no-label\" [readonly]=\"true\" [(model)]=\"strMaBenhOrTenBenhKhac\">\n\t\t\t\t</app-textarea>\n\t\t\t</tr>\n\t\t</table>\n\t</div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n\t<button mat-button mat-dialog-close (click)=\"huy()\">Hủy</button>\n\t<button\n\t\t*ngIf=\"strMaBenhOrTenBenhKhac !== undefined && strMaBenhOrTenBenhKhac !== null && strMaBenhOrTenBenhKhac !=='' \"\n\t\tmat-raised-button mat-button color=\"primary\" (click)=\"btThemMaBenhKhac()\" cdkFocusInitial>Thêm</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/bao-hiem-y-te.ts": 
        /*!*************************************************************************************!*\
          !*** ./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/bao-hiem-y-te.ts ***!
          \*************************************************************************************/
        /*! exports provided: DsBaoHiemYTe, ThongTinBenhNhanViewModels, XMLThongTinBenhNhan, HoSoChiTietThuoc, HoSoChiTietDVKT, HoSoCanLamSang, HoSoChiTietDienBienBenh, TimKiemDSBaoHiemYTe, GoiDanhSachThongTinBenhNhanCoBHYT, TagItem, DanhSachYeuCauTiepNhanIds, EnumTypeLoadingData */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsBaoHiemYTe", function () { return DsBaoHiemYTe; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinBenhNhanViewModels", function () { return ThongTinBenhNhanViewModels; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XMLThongTinBenhNhan", function () { return XMLThongTinBenhNhan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoChiTietThuoc", function () { return HoSoChiTietThuoc; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoChiTietDVKT", function () { return HoSoChiTietDVKT; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoCanLamSang", function () { return HoSoCanLamSang; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoChiTietDienBienBenh", function () { return HoSoChiTietDienBienBenh; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimKiemDSBaoHiemYTe", function () { return TimKiemDSBaoHiemYTe; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoiDanhSachThongTinBenhNhanCoBHYT", function () { return GoiDanhSachThongTinBenhNhanCoBHYT; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagItem", function () { return TagItem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachYeuCauTiepNhanIds", function () { return DanhSachYeuCauTiepNhanIds; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumTypeLoadingData", function () { return EnumTypeLoadingData; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var DsBaoHiemYTe = /** @class */ (function () {
                function DsBaoHiemYTe(MaTN, MaBN, HoTen, GioiTinh, DiaChi, MucHuong, SoTienBHYTDuyet, SearchString) {
                    if (MaTN === void 0) { MaTN = null; }
                    if (MaBN === void 0) { MaBN = null; }
                    if (HoTen === void 0) { HoTen = null; }
                    if (GioiTinh === void 0) { GioiTinh = null; }
                    if (DiaChi === void 0) { DiaChi = null; }
                    if (MucHuong === void 0) { MucHuong = null; }
                    if (SoTienBHYTDuyet === void 0) { SoTienBHYTDuyet = null; }
                    if (SearchString === void 0) { SearchString = null; }
                    this.MaTN = MaTN;
                    this.MaBN = MaBN;
                    this.HoTen = HoTen;
                    this.GioiTinh = GioiTinh;
                    this.DiaChi = DiaChi;
                    this.MucHuong = MucHuong;
                    this.SoTienBHYTDuyet = SoTienBHYTDuyet;
                    this.SearchString = SearchString;
                }
                return DsBaoHiemYTe;
            }());
            var ThongTinBenhNhanViewModels = /** @class */ (function () {
                function ThongTinBenhNhanViewModels() {
                    this.ThongTinBenhNhanVMs = [];
                }
                return ThongTinBenhNhanViewModels;
            }());
            var XMLThongTinBenhNhan = /** @class */ (function () {
                function XMLThongTinBenhNhan(MaLienKet, STT, MaBenhNhan, HoTen, NgaySinh, GioiTinh, DiaChi, MaThe, MaCoSoKCBBanDau, GiaTriTheTu, GiaTriTheDen, MienCungChiTra, TenBenh, MaBenh, MaBenhKhac, LyDoVaoVien, MaNoiChuyen, MaTaiNan, NgayVao, NgayRa, SoNgayDieuTri, KetQuaDieuTri, TinhTrangRaVien, TinhTrangRaVienText, NgayThanhToan, MucHuong, TienThuoc, TienVatTuYTe, DataJson, TienTongChi, TienBenhNhanTuTra, TienBenhNhanCungChiTra, TienBaoHiemThanhToan, TienNguonKhac, TienNgoaiDinhSuat, NamQuyetToan, ThangQuyetToan, MaLoaiKCB, MaKhoa, MaCSKCB, MaKhuVuc, MaPhauThuatQuocTe, CanNang, IsDownLoad, Version, WarningMessage, HoSoChiTietThuoc, HoSoChiTietDVKT, HoSoCanLamSang, HoSoChiTietDienBienBenh) {
                    if (MaLienKet === void 0) { MaLienKet = null; }
                    if (STT === void 0) { STT = null; }
                    if (MaBenhNhan === void 0) { MaBenhNhan = null; }
                    if (HoTen === void 0) { HoTen = null; }
                    if (NgaySinh === void 0) { NgaySinh = null; }
                    if (GioiTinh === void 0) { GioiTinh = null; }
                    if (DiaChi === void 0) { DiaChi = null; }
                    if (MaThe === void 0) { MaThe = null; }
                    if (MaCoSoKCBBanDau === void 0) { MaCoSoKCBBanDau = null; }
                    if (GiaTriTheTu === void 0) { GiaTriTheTu = null; }
                    if (GiaTriTheDen === void 0) { GiaTriTheDen = null; }
                    if (MienCungChiTra === void 0) { MienCungChiTra = null; }
                    if (TenBenh === void 0) { TenBenh = null; }
                    if (MaBenh === void 0) { MaBenh = null; }
                    if (MaBenhKhac === void 0) { MaBenhKhac = null; }
                    if (LyDoVaoVien === void 0) { LyDoVaoVien = null; }
                    if (MaNoiChuyen === void 0) { MaNoiChuyen = null; }
                    if (MaTaiNan === void 0) { MaTaiNan = null; }
                    if (NgayVao === void 0) { NgayVao = null; }
                    if (NgayRa === void 0) { NgayRa = null; }
                    if (SoNgayDieuTri === void 0) { SoNgayDieuTri = null; }
                    if (KetQuaDieuTri === void 0) { KetQuaDieuTri = null; }
                    if (TinhTrangRaVien === void 0) { TinhTrangRaVien = null; }
                    if (TinhTrangRaVienText === void 0) { TinhTrangRaVienText = null; }
                    if (NgayThanhToan === void 0) { NgayThanhToan = null; }
                    if (MucHuong === void 0) { MucHuong = null; }
                    if (TienThuoc === void 0) { TienThuoc = null; }
                    if (TienVatTuYTe === void 0) { TienVatTuYTe = null; }
                    if (DataJson === void 0) { DataJson = null; }
                    if (TienTongChi === void 0) { TienTongChi = null; }
                    if (TienBenhNhanTuTra === void 0) { TienBenhNhanTuTra = null; }
                    if (TienBenhNhanCungChiTra === void 0) { TienBenhNhanCungChiTra = null; }
                    if (TienBaoHiemThanhToan === void 0) { TienBaoHiemThanhToan = null; }
                    if (TienNguonKhac === void 0) { TienNguonKhac = null; }
                    if (TienNgoaiDinhSuat === void 0) { TienNgoaiDinhSuat = null; }
                    if (NamQuyetToan === void 0) { NamQuyetToan = null; }
                    if (ThangQuyetToan === void 0) { ThangQuyetToan = null; }
                    if (MaLoaiKCB === void 0) { MaLoaiKCB = null; }
                    if (MaKhoa === void 0) { MaKhoa = null; }
                    if (MaCSKCB === void 0) { MaCSKCB = null; }
                    if (MaKhuVuc === void 0) { MaKhuVuc = null; }
                    if (MaPhauThuatQuocTe === void 0) { MaPhauThuatQuocTe = null; }
                    if (CanNang === void 0) { CanNang = null; }
                    if (IsDownLoad === void 0) { IsDownLoad = false; }
                    if (Version === void 0) { Version = null; }
                    if (WarningMessage === void 0) { WarningMessage = null; }
                    if (HoSoChiTietThuoc === void 0) { HoSoChiTietThuoc = []; }
                    if (HoSoChiTietDVKT === void 0) { HoSoChiTietDVKT = []; }
                    if (HoSoCanLamSang === void 0) { HoSoCanLamSang = []; }
                    if (HoSoChiTietDienBienBenh === void 0) { HoSoChiTietDienBienBenh = []; }
                    this.MaLienKet = MaLienKet;
                    this.STT = STT;
                    this.MaBenhNhan = MaBenhNhan;
                    this.HoTen = HoTen;
                    this.NgaySinh = NgaySinh;
                    this.GioiTinh = GioiTinh;
                    this.DiaChi = DiaChi;
                    this.MaThe = MaThe;
                    this.MaCoSoKCBBanDau = MaCoSoKCBBanDau;
                    this.GiaTriTheTu = GiaTriTheTu;
                    this.GiaTriTheDen = GiaTriTheDen;
                    this.MienCungChiTra = MienCungChiTra;
                    this.TenBenh = TenBenh;
                    this.MaBenh = MaBenh;
                    this.MaBenhKhac = MaBenhKhac;
                    this.LyDoVaoVien = LyDoVaoVien;
                    this.MaNoiChuyen = MaNoiChuyen;
                    this.MaTaiNan = MaTaiNan;
                    this.NgayVao = NgayVao;
                    this.NgayRa = NgayRa;
                    this.SoNgayDieuTri = SoNgayDieuTri;
                    this.KetQuaDieuTri = KetQuaDieuTri;
                    this.TinhTrangRaVien = TinhTrangRaVien;
                    this.TinhTrangRaVienText = TinhTrangRaVienText;
                    this.NgayThanhToan = NgayThanhToan;
                    this.MucHuong = MucHuong;
                    this.TienThuoc = TienThuoc;
                    this.TienVatTuYTe = TienVatTuYTe;
                    this.DataJson = DataJson;
                    this.TienTongChi = TienTongChi;
                    this.TienBenhNhanTuTra = TienBenhNhanTuTra;
                    this.TienBenhNhanCungChiTra = TienBenhNhanCungChiTra;
                    this.TienBaoHiemThanhToan = TienBaoHiemThanhToan;
                    this.TienNguonKhac = TienNguonKhac;
                    this.TienNgoaiDinhSuat = TienNgoaiDinhSuat;
                    this.NamQuyetToan = NamQuyetToan;
                    this.ThangQuyetToan = ThangQuyetToan;
                    this.MaLoaiKCB = MaLoaiKCB;
                    this.MaKhoa = MaKhoa;
                    this.MaCSKCB = MaCSKCB;
                    this.MaKhuVuc = MaKhuVuc;
                    this.MaPhauThuatQuocTe = MaPhauThuatQuocTe;
                    this.CanNang = CanNang;
                    this.IsDownLoad = IsDownLoad;
                    this.Version = Version;
                    this.WarningMessage = WarningMessage;
                    this.HoSoChiTietThuoc = HoSoChiTietThuoc;
                    this.HoSoChiTietDVKT = HoSoChiTietDVKT;
                    this.HoSoCanLamSang = HoSoCanLamSang;
                    this.HoSoChiTietDienBienBenh = HoSoChiTietDienBienBenh;
                }
                return XMLThongTinBenhNhan;
            }());
            var HoSoChiTietThuoc = /** @class */ (function () {
                function HoSoChiTietThuoc(MaLienKet, STT, MaThuoc, MaNhom, MaNhomChiPhi, MaNhomText, TenThuoc, DonViTinh, HamLuong, DuongDung, LieuDung, SoDangKy, SoLuong, DonGia, TyLeThanhToan, ThanhTien, MaKhoa, MaBacSi, MaBenh, NgayYLenh, ThongTinThau, PhamVi, MucHuong, TienBenhNhanTuTra, TienNguonKhac, TienBaoHiemThanhToan, TienBenhNhanCungChiTra, TienNgoaiDinhSuat, MaPhuongThucThanhToan) {
                    if (MaLienKet === void 0) { MaLienKet = null; }
                    if (STT === void 0) { STT = null; }
                    if (MaThuoc === void 0) { MaThuoc = null; }
                    if (MaNhom === void 0) { MaNhom = null; }
                    if (MaNhomChiPhi === void 0) { MaNhomChiPhi = null; }
                    if (MaNhomText === void 0) { MaNhomText = null; }
                    if (TenThuoc === void 0) { TenThuoc = null; }
                    if (DonViTinh === void 0) { DonViTinh = null; }
                    if (HamLuong === void 0) { HamLuong = null; }
                    if (DuongDung === void 0) { DuongDung = null; }
                    if (LieuDung === void 0) { LieuDung = null; }
                    if (SoDangKy === void 0) { SoDangKy = null; }
                    if (SoLuong === void 0) { SoLuong = null; }
                    if (DonGia === void 0) { DonGia = null; }
                    if (TyLeThanhToan === void 0) { TyLeThanhToan = null; }
                    if (ThanhTien === void 0) { ThanhTien = null; }
                    if (MaKhoa === void 0) { MaKhoa = null; }
                    if (MaBacSi === void 0) { MaBacSi = null; }
                    if (MaBenh === void 0) { MaBenh = null; }
                    if (NgayYLenh === void 0) { NgayYLenh = null; }
                    if (ThongTinThau === void 0) { ThongTinThau = null; }
                    if (PhamVi === void 0) { PhamVi = null; }
                    if (MucHuong === void 0) { MucHuong = null; }
                    if (TienBenhNhanTuTra === void 0) { TienBenhNhanTuTra = 0; }
                    if (TienNguonKhac === void 0) { TienNguonKhac = 0; }
                    if (TienBaoHiemThanhToan === void 0) { TienBaoHiemThanhToan = 0; }
                    if (TienBenhNhanCungChiTra === void 0) { TienBenhNhanCungChiTra = 0; }
                    if (TienNgoaiDinhSuat === void 0) { TienNgoaiDinhSuat = 0; }
                    if (MaPhuongThucThanhToan === void 0) { MaPhuongThucThanhToan = null; }
                    this.MaLienKet = MaLienKet;
                    this.STT = STT;
                    this.MaThuoc = MaThuoc;
                    this.MaNhom = MaNhom;
                    this.MaNhomChiPhi = MaNhomChiPhi;
                    this.MaNhomText = MaNhomText;
                    this.TenThuoc = TenThuoc;
                    this.DonViTinh = DonViTinh;
                    this.HamLuong = HamLuong;
                    this.DuongDung = DuongDung;
                    this.LieuDung = LieuDung;
                    this.SoDangKy = SoDangKy;
                    this.SoLuong = SoLuong;
                    this.DonGia = DonGia;
                    this.TyLeThanhToan = TyLeThanhToan;
                    this.ThanhTien = ThanhTien;
                    this.MaKhoa = MaKhoa;
                    this.MaBacSi = MaBacSi;
                    this.MaBenh = MaBenh;
                    this.NgayYLenh = NgayYLenh;
                    this.ThongTinThau = ThongTinThau;
                    this.PhamVi = PhamVi;
                    this.MucHuong = MucHuong;
                    this.TienBenhNhanTuTra = TienBenhNhanTuTra;
                    this.TienNguonKhac = TienNguonKhac;
                    this.TienBaoHiemThanhToan = TienBaoHiemThanhToan;
                    this.TienBenhNhanCungChiTra = TienBenhNhanCungChiTra;
                    this.TienNgoaiDinhSuat = TienNgoaiDinhSuat;
                    this.MaPhuongThucThanhToan = MaPhuongThucThanhToan;
                }
                return HoSoChiTietThuoc;
            }());
            var HoSoChiTietDVKT = /** @class */ (function () {
                function HoSoChiTietDVKT(MaDichVu, STT, MaVatTu, GoiVatTuYTe, TenVatTu, ThongTinThau, PhamVi, TienThanhToanToiDa, MucHuong, TienNguonKhac, TienBenhNhanTuTra, TienBaoHiemThanhToan, TienBenhNhanCungChiTra, TienNgoaiDinhSuat, MaGiuong, MaNhom, MaNhomText, TenDichVu, DonViTinh, SoLuong, DonGia, TyLeThanhToan, ThanhTien, MaKhoa, MaBacSi, MaBenh, NgayYLenh, NgayKetQua, MaPhuongThucThanhToan, MaLienKet) {
                    if (MaDichVu === void 0) { MaDichVu = null; }
                    if (STT === void 0) { STT = null; }
                    if (MaVatTu === void 0) { MaVatTu = null; }
                    if (GoiVatTuYTe === void 0) { GoiVatTuYTe = null; }
                    if (TenVatTu === void 0) { TenVatTu = null; }
                    if (ThongTinThau === void 0) { ThongTinThau = null; }
                    if (PhamVi === void 0) { PhamVi = null; }
                    if (TienThanhToanToiDa === void 0) { TienThanhToanToiDa = null; }
                    if (MucHuong === void 0) { MucHuong = null; }
                    if (TienNguonKhac === void 0) { TienNguonKhac = null; }
                    if (TienBenhNhanTuTra === void 0) { TienBenhNhanTuTra = null; }
                    if (TienBaoHiemThanhToan === void 0) { TienBaoHiemThanhToan = null; }
                    if (TienBenhNhanCungChiTra === void 0) { TienBenhNhanCungChiTra = null; }
                    if (TienNgoaiDinhSuat === void 0) { TienNgoaiDinhSuat = null; }
                    if (MaGiuong === void 0) { MaGiuong = null; }
                    if (MaNhom === void 0) { MaNhom = null; }
                    if (MaNhomText === void 0) { MaNhomText = null; }
                    if (TenDichVu === void 0) { TenDichVu = null; }
                    if (DonViTinh === void 0) { DonViTinh = null; }
                    if (SoLuong === void 0) { SoLuong = null; }
                    if (DonGia === void 0) { DonGia = null; }
                    if (TyLeThanhToan === void 0) { TyLeThanhToan = null; }
                    if (ThanhTien === void 0) { ThanhTien = null; }
                    if (MaKhoa === void 0) { MaKhoa = null; }
                    if (MaBacSi === void 0) { MaBacSi = null; }
                    if (MaBenh === void 0) { MaBenh = null; }
                    if (NgayYLenh === void 0) { NgayYLenh = null; }
                    if (NgayKetQua === void 0) { NgayKetQua = null; }
                    if (MaPhuongThucThanhToan === void 0) { MaPhuongThucThanhToan = null; }
                    if (MaLienKet === void 0) { MaLienKet = null; }
                    this.MaDichVu = MaDichVu;
                    this.STT = STT;
                    this.MaVatTu = MaVatTu;
                    this.GoiVatTuYTe = GoiVatTuYTe;
                    this.TenVatTu = TenVatTu;
                    this.ThongTinThau = ThongTinThau;
                    this.PhamVi = PhamVi;
                    this.TienThanhToanToiDa = TienThanhToanToiDa;
                    this.MucHuong = MucHuong;
                    this.TienNguonKhac = TienNguonKhac;
                    this.TienBenhNhanTuTra = TienBenhNhanTuTra;
                    this.TienBaoHiemThanhToan = TienBaoHiemThanhToan;
                    this.TienBenhNhanCungChiTra = TienBenhNhanCungChiTra;
                    this.TienNgoaiDinhSuat = TienNgoaiDinhSuat;
                    this.MaGiuong = MaGiuong;
                    this.MaNhom = MaNhom;
                    this.MaNhomText = MaNhomText;
                    this.TenDichVu = TenDichVu;
                    this.DonViTinh = DonViTinh;
                    this.SoLuong = SoLuong;
                    this.DonGia = DonGia;
                    this.TyLeThanhToan = TyLeThanhToan;
                    this.ThanhTien = ThanhTien;
                    this.MaKhoa = MaKhoa;
                    this.MaBacSi = MaBacSi;
                    this.MaBenh = MaBenh;
                    this.NgayYLenh = NgayYLenh;
                    this.NgayKetQua = NgayKetQua;
                    this.MaPhuongThucThanhToan = MaPhuongThucThanhToan;
                    this.MaLienKet = MaLienKet;
                }
                return HoSoChiTietDVKT;
            }());
            var HoSoCanLamSang = /** @class */ (function () {
                function HoSoCanLamSang(MaLienKet, STT, MaDichVu, MaChiSo, TenChiSo, GiaTri, MaMayXetNghiem, MaMay, MoTa, KetLuan, NgayKQ) {
                    if (MaLienKet === void 0) { MaLienKet = null; }
                    if (STT === void 0) { STT = null; }
                    if (MaDichVu === void 0) { MaDichVu = null; }
                    if (MaChiSo === void 0) { MaChiSo = null; }
                    if (TenChiSo === void 0) { TenChiSo = null; }
                    if (GiaTri === void 0) { GiaTri = null; }
                    if (MaMayXetNghiem === void 0) { MaMayXetNghiem = null; }
                    if (MaMay === void 0) { MaMay = null; }
                    if (MoTa === void 0) { MoTa = null; }
                    if (KetLuan === void 0) { KetLuan = null; }
                    if (NgayKQ === void 0) { NgayKQ = null; }
                    this.MaLienKet = MaLienKet;
                    this.STT = STT;
                    this.MaDichVu = MaDichVu;
                    this.MaChiSo = MaChiSo;
                    this.TenChiSo = TenChiSo;
                    this.GiaTri = GiaTri;
                    this.MaMayXetNghiem = MaMayXetNghiem;
                    this.MaMay = MaMay;
                    this.MoTa = MoTa;
                    this.KetLuan = KetLuan;
                    this.NgayKQ = NgayKQ;
                }
                return HoSoCanLamSang;
            }());
            var HoSoChiTietDienBienBenh = /** @class */ (function () {
                function HoSoChiTietDienBienBenh(STT, DienBien, HoiChuan, PhauThuat, NgayYLenh, MaLienKet) {
                    if (STT === void 0) { STT = null; }
                    if (DienBien === void 0) { DienBien = null; }
                    if (HoiChuan === void 0) { HoiChuan = null; }
                    if (PhauThuat === void 0) { PhauThuat = null; }
                    if (NgayYLenh === void 0) { NgayYLenh = null; }
                    if (MaLienKet === void 0) { MaLienKet = null; }
                    this.STT = STT;
                    this.DienBien = DienBien;
                    this.HoiChuan = HoiChuan;
                    this.PhauThuat = PhauThuat;
                    this.NgayYLenh = NgayYLenh;
                    this.MaLienKet = MaLienKet;
                }
                return HoSoChiTietDienBienBenh;
            }());
            var TimKiemDSBaoHiemYTe = /** @class */ (function () {
                function TimKiemDSBaoHiemYTe(TuNgay, DenNgay, TimKiem, FromDate, ToDate, ThoiDiemTiepNhanTuFormat, ThoiDiemTiepNhanDenFormat, SearchString) {
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    if (TimKiem === void 0) { TimKiem = null; }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    if (ThoiDiemTiepNhanTuFormat === void 0) { ThoiDiemTiepNhanTuFormat = null; }
                    if (ThoiDiemTiepNhanDenFormat === void 0) { ThoiDiemTiepNhanDenFormat = null; }
                    if (SearchString === void 0) { SearchString = null; }
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                    this.TimKiem = TimKiem;
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                    this.ThoiDiemTiepNhanTuFormat = ThoiDiemTiepNhanTuFormat;
                    this.ThoiDiemTiepNhanDenFormat = ThoiDiemTiepNhanDenFormat;
                    this.SearchString = SearchString;
                }
                return TimKiemDSBaoHiemYTe;
            }());
            var GoiDanhSachThongTinBenhNhanCoBHYT = /** @class */ (function () {
                function GoiDanhSachThongTinBenhNhanCoBHYT(YeuCauTiepNhanIds) {
                    this.YeuCauTiepNhanIds = YeuCauTiepNhanIds;
                }
                return GoiDanhSachThongTinBenhNhanCoBHYT;
            }());
            var TagItem = /** @class */ (function () {
                function TagItem(Key, Value, ValueDisplay, Title) {
                    if (Key === void 0) { Key = null; }
                    if (Value === void 0) { Value = null; }
                    if (ValueDisplay === void 0) { ValueDisplay = null; }
                    if (Title === void 0) { Title = null; }
                    this.Key = Key;
                    this.Value = Value;
                    this.ValueDisplay = ValueDisplay;
                    this.Title = Title;
                }
                return TagItem;
            }());
            var DanhSachYeuCauTiepNhanIds = /** @class */ (function () {
                function DanhSachYeuCauTiepNhanIds(Id) {
                    if (Id === void 0) { Id = []; }
                    this.Id = Id;
                }
                return DanhSachYeuCauTiepNhanIds;
            }());
            var EnumTypeLoadingData;
            (function (EnumTypeLoadingData) {
                EnumTypeLoadingData[EnumTypeLoadingData["View"] = 1] = "View";
                EnumTypeLoadingData[EnumTypeLoadingData["Update"] = 2] = "Update";
                EnumTypeLoadingData[EnumTypeLoadingData["Delete"] = 3] = "Delete";
                EnumTypeLoadingData[EnumTypeLoadingData["Cancel"] = 4] = "Cancel";
                EnumTypeLoadingData[EnumTypeLoadingData["Add"] = 5] = "Add";
                EnumTypeLoadingData[EnumTypeLoadingData["DangGuiHoSo"] = 6] = "DangGuiHoSo";
                EnumTypeLoadingData[EnumTypeLoadingData["LoadingExcel"] = 7] = "LoadingExcel";
                EnumTypeLoadingData[EnumTypeLoadingData["LoadingTaiFile"] = 8] = "LoadingTaiFile";
            })(EnumTypeLoadingData || (EnumTypeLoadingData = {}));
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/ds-bao-hiem-y-te-routing.module.ts": 
        /*!*******************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/ds-bao-hiem-y-te-routing.module.ts ***!
          \*******************************************************************************************************/
        /*! exports provided: DsBaoHiemYTeRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsBaoHiemYTeRoutingModule", function () { return DsBaoHiemYTeRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ds_bao_hiem_y_te_ds_bao_hiem_y_te_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ds-bao-hiem-y-te/ds-bao-hiem-y-te.component */ "./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/ds-bao-hiem-y-te/ds-bao-hiem-y-te.component.ts");
            /* harmony import */ var _thong_tin_chi_tiet_goi_bao_hiem_y_te_thong_tin_chi_tiet_goi_bao_hiem_y_te_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./thong-tin-chi-tiet-goi-bao-hiem-y-te/thong-tin-chi-tiet-goi-bao-hiem-y-te.component */ "./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/thong-tin-chi-tiet-goi-bao-hiem-y-te/thong-tin-chi-tiet-goi-bao-hiem-y-te.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            var routes = [
                {
                    path: "",
                    component: _ds_bao_hiem_y_te_ds_bao_hiem_y_te_component__WEBPACK_IMPORTED_MODULE_3__["DsBaoHiemYTeComponent"],
                    data: {
                        title: "Gửi bảo hiểm y tế trong ngày",
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].GuiBaoHiemYTe,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_7__["PermisssionGuard"]]
                },
                {
                    path: "thong-tin-chi-tiet-goi-bhyt/:id",
                    component: _thong_tin_chi_tiet_goi_bao_hiem_y_te_thong_tin_chi_tiet_goi_bao_hiem_y_te_component__WEBPACK_IMPORTED_MODULE_4__["ThongTinChiTietGoiBaoHiemYTeComponent"],
                    data: {
                        title: "Thông tin chi tiết gửi bảo hiểm y tế",
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].GuiBaoHiemYTe,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_7__["PermisssionGuard"]]
                },
            ];
            var DsBaoHiemYTeRoutingModule = /** @class */ (function () {
                function DsBaoHiemYTeRoutingModule() {
                }
                return DsBaoHiemYTeRoutingModule;
            }());
            DsBaoHiemYTeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], DsBaoHiemYTeRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/ds-bao-hiem-y-te.module.ts": 
        /*!***********************************************************************************************!*\
          !*** ./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/ds-bao-hiem-y-te.module.ts ***!
          \***********************************************************************************************/
        /*! exports provided: DsBaoHiemYTeModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsBaoHiemYTeModule", function () { return DsBaoHiemYTeModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            /* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
            /* harmony import */ var _ds_bao_hiem_y_te_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ds-bao-hiem-y-te-routing.module */ "./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/ds-bao-hiem-y-te-routing.module.ts");
            /* harmony import */ var _ds_bao_hiem_y_te_ds_bao_hiem_y_te_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ds-bao-hiem-y-te/ds-bao-hiem-y-te.component */ "./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/ds-bao-hiem-y-te/ds-bao-hiem-y-te.component.ts");
            /* harmony import */ var _thong_tin_chi_tiet_goi_bao_hiem_y_te_thong_tin_chi_tiet_goi_bao_hiem_y_te_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./thong-tin-chi-tiet-goi-bao-hiem-y-te/thong-tin-chi-tiet-goi-bao-hiem-y-te.component */ "./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/thong-tin-chi-tiet-goi-bao-hiem-y-te/thong-tin-chi-tiet-goi-bao-hiem-y-te.component.ts");
            /* harmony import */ var _tim_kiem_ma_benh_khac_popup_tim_kiem_ma_benh_khac_popup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tim-kiem-ma-benh-khac-popup/tim-kiem-ma-benh-khac-popup.component */ "./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/tim-kiem-ma-benh-khac-popup/tim-kiem-ma-benh-khac-popup.component.ts");
            /* harmony import */ var _tim_kiem_ma_bac_si_popup_tim_kiem_ma_bac_si_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tim-kiem-ma-bac-si-popup/tim-kiem-ma-bac-si-popup.component */ "./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/tim-kiem-ma-bac-si-popup/tim-kiem-ma-bac-si-popup.component.ts");
            var DsBaoHiemYTeModule = /** @class */ (function () {
                function DsBaoHiemYTeModule() {
                }
                return DsBaoHiemYTeModule;
            }());
            DsBaoHiemYTeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_ds_bao_hiem_y_te_ds_bao_hiem_y_te_component__WEBPACK_IMPORTED_MODULE_14__["DsBaoHiemYTeComponent"], _thong_tin_chi_tiet_goi_bao_hiem_y_te_thong_tin_chi_tiet_goi_bao_hiem_y_te_component__WEBPACK_IMPORTED_MODULE_15__["ThongTinChiTietGoiBaoHiemYTeComponent"], _tim_kiem_ma_benh_khac_popup_tim_kiem_ma_benh_khac_popup_component__WEBPACK_IMPORTED_MODULE_16__["ThemMaBenhKhacComponent"], _tim_kiem_ma_bac_si_popup_tim_kiem_ma_bac_si_popup_component__WEBPACK_IMPORTED_MODULE_17__["ThemMaBacSiComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _ds_bao_hiem_y_te_routing_module__WEBPACK_IMPORTED_MODULE_13__["DsBaoHiemYTeRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__["PageLayoutModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                        _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"]
                    ],
                    entryComponents: [_tim_kiem_ma_benh_khac_popup_tim_kiem_ma_benh_khac_popup_component__WEBPACK_IMPORTED_MODULE_16__["ThemMaBenhKhacComponent"], _tim_kiem_ma_bac_si_popup_tim_kiem_ma_bac_si_popup_component__WEBPACK_IMPORTED_MODULE_17__["ThemMaBacSiComponent"]]
                })
            ], DsBaoHiemYTeModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/ds-bao-hiem-y-te/ds-bao-hiem-y-te.component.scss": 
        /*!*********************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/ds-bao-hiem-y-te/ds-bao-hiem-y-te.component.scss ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8taGllbS15LXRlL2Rhbmgtc2FjaC1iYW8taGllbS15LXRlL2RzLWJhby1oaWVtLXktdGUvZHMtYmFvLWhpZW0teS10ZS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/ds-bao-hiem-y-te/ds-bao-hiem-y-te.component.ts": 
        /*!*******************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/ds-bao-hiem-y-te/ds-bao-hiem-y-te.component.ts ***!
          \*******************************************************************************************************************/
        /*! exports provided: DsBaoHiemYTeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsBaoHiemYTeComponent", function () { return DsBaoHiemYTeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bao-hiem-y-te */ "./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/bao-hiem-y-te.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_10__);
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _iconify_icons_ic_send__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/send */ "./node_modules/@iconify/icons-ic/send.js");
            /* harmony import */ var _iconify_icons_ic_send__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_send__WEBPACK_IMPORTED_MODULE_15__);
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _iconify_icons_ic_arrow_downward__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/arrow-downward */ "./node_modules/@iconify/icons-ic/arrow-downward.js");
            /* harmony import */ var _iconify_icons_ic_arrow_downward__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_arrow_downward__WEBPACK_IMPORTED_MODULE_17__);
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_22__);
            var DsBaoHiemYTeComponent = /** @class */ (function () {
                function DsBaoHiemYTeComponent(route, router, dialog, apiService, authService, location, notificationService) {
                    this.route = route;
                    this.router = router;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.authService = authService;
                    this.location = location;
                    this.notificationService = notificationService;
                    this.timKiemDSBaoHiemYTe = new _bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_4__["TimKiemDSBaoHiemYTe"]();
                    this.sort = [{ field: 'ThoiGianTiepNhanStr', dir: 'desc' }];
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
                    this.mySelection = [];
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_22___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_10___default.a;
                    this.icArrowDownward = _iconify_icons_ic_arrow_downward__WEBPACK_IMPORTED_MODULE_17___default.a;
                    this.icSend = _iconify_icons_ic_send__WEBPACK_IMPORTED_MODULE_15___default.a;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.baseRoute = "/danh-sach-goi";
                    this.holdQuery = null;
                    this.query = null;
                    this.additionalSearchString = null;
                    this.danhSachYeuCauTiepNhanIds = {};
                }
                DsBaoHiemYTeComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].GuiBaoHiemYTe;
                    var dateNow = new Date();
                    this.timKiemDSBaoHiemYTe.TuNgay = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
                    this.timKiemDSBaoHiemYTe.DenNgay = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
                    if (this.timKiemDSBaoHiemYTe.TuNgay != null) {
                        this.timKiemDSBaoHiemYTe.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.timKiemDSBaoHiemYTe.TuNgay, "dd/mm/yyyy");
                    }
                    else {
                        this.timKiemDSBaoHiemYTe.FromDate = null;
                    }
                    if (this.timKiemDSBaoHiemYTe.DenNgay != null) {
                        this.timKiemDSBaoHiemYTe.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.timKiemDSBaoHiemYTe.DenNgay, "dd/mm/yyyy");
                    }
                    else {
                        this.timKiemDSBaoHiemYTe.ToDate = null;
                    }
                    this.backWithSearch();
                    this.gridDanhSachBHYTColumns = [
                        { Field: "MaTN", Title: "Mã TN", Width: 100, Sortable: true, Template: this.actionTemplate, LinkDetail: true },
                        { Field: "MaBN", Title: "Mã NB", Width: 100, Sortable: true },
                        { Field: "HoTen", Title: "Tên Người Bệnh", Width: 200, Sortable: true },
                        { Field: "NamSinh", Title: "Năm Sinh", Width: 100, Sortable: true },
                        { Field: "GioiTinh", Title: "Giới tính", Width: 100, Sortable: true },
                        { Field: "DiaChi", Title: "Địa Chỉ", MinWidth: 200, Sortable: true },
                        { Field: "ThoiGianTiepNhanStr", Title: "Tiếp nhận lúc", Width: 150, Sortable: true },
                        { Field: "MucHuong", Title: "Mức Hưởng", Width: 150, Sortable: true },
                    ];
                    var queryString = JSON.stringify(this.timKiemDSBaoHiemYTe);
                    this.gridChild.additionalSearchString = queryString;
                };
                DsBaoHiemYTeComponent.prototype.backWithSearch = function () {
                    if (this.route.snapshot.queryParams.holdQuery != undefined) {
                        this.holdQuery = this.route.snapshot.queryParams.holdQuery;
                    }
                    if (this.holdQuery != null && src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_20__["LocalStorageHelper"].getItem('additionalSearchStringBHYT') != null) {
                        this.additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_20__["LocalStorageHelper"].getItem('additionalSearchStringBHYT');
                        if (this.additionalSearchString != null) {
                            this.timKiemDSBaoHiemYTe = JSON.parse(this.additionalSearchString);
                            if (this.timKiemDSBaoHiemYTe.TuNgay != undefined && this.timKiemDSBaoHiemYTe.TuNgay != null && this.timKiemDSBaoHiemYTe.TuNgay != "") {
                                this.timKiemDSBaoHiemYTe.TuNgay = new Date(this.timKiemDSBaoHiemYTe.TuNgay);
                            }
                            if (this.timKiemDSBaoHiemYTe.DenNgay != undefined && this.timKiemDSBaoHiemYTe.DenNgay != null && this.timKiemDSBaoHiemYTe.DenNgay != "") {
                                this.timKiemDSBaoHiemYTe.DenNgay = new Date(this.timKiemDSBaoHiemYTe.DenNgay);
                            }
                            this.gridChild.additionalSearchString = this.additionalSearchString;
                        }
                    }
                    else {
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_20__["LocalStorageHelper"].setItem('additionalSearchStringBHYT', null);
                        this.additionalSearchString = JSON.stringify(this.timKiemDSBaoHiemYTe);
                    }
                };
                DsBaoHiemYTeComponent.prototype.view = function (id) {
                    var _this = this;
                    this.apiService.post("BHYT/KiemTraYeuCauTiepNhanGoiBHYT/" + id).subscribe(function (resultData) {
                        if (resultData != null && resultData != "") {
                            _this.notificationService.showError(resultData);
                        }
                        else {
                            _this.router.navigateByUrl("/danh-sach-goi/thong-tin-chi-tiet-goi-bhyt/" + id + "?holdQuery=true");
                        }
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                            _this.closeAllDialogs();
                        }
                    });
                };
                DsBaoHiemYTeComponent.prototype.timKiemNangCao = function () {
                    this.location.replaceState(this.baseRoute + '?holdQuery=true');
                    if (this.timKiemDSBaoHiemYTe.TuNgay != null) {
                        this.timKiemDSBaoHiemYTe.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.timKiemDSBaoHiemYTe.TuNgay, "dd/mm/yyyy");
                    }
                    else {
                        this.timKiemDSBaoHiemYTe.FromDate = null;
                    }
                    if (this.timKiemDSBaoHiemYTe.DenNgay != null) {
                        this.timKiemDSBaoHiemYTe.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.timKiemDSBaoHiemYTe.DenNgay, "dd/mm/yyyy");
                    }
                    else {
                        this.timKiemDSBaoHiemYTe.ToDate = null;
                    }
                    if (this.searchString != null) {
                        this.timKiemDSBaoHiemYTe.TimKiem = this.searchString;
                    }
                    //this.timKiemDSBaoHiemYTe.SearchString = this.searchString;
                    var queryString = JSON.stringify(this.timKiemDSBaoHiemYTe);
                    //this.gridChild.searchString = this.searchString;
                    this.gridChild._additionalSearchString = queryString;
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_20__["LocalStorageHelper"].setItem("additionalSearchStringBHYT", queryString);
                    this.gridChild.clearCheckBox();
                    this.gridChild.search();
                };
                DsBaoHiemYTeComponent.prototype.searchChanges = function (event) {
                    var self = this;
                    if (event != undefined && (event == null || event == "")) {
                        self.gridChild.searchString = null;
                        self.timKiemNangCao();
                    }
                };
                DsBaoHiemYTeComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.timKiemNangCao();
                    }
                };
                DsBaoHiemYTeComponent.prototype.clearSearch = function () {
                    if (this.timKiemDSBaoHiemYTe.SearchString == "" || this.timKiemDSBaoHiemYTe.SearchString == null) {
                        this.gridChild.searchString = "";
                        var dsBaoHiemYTe = JSON.parse(JSON.stringify(this.timKiemDSBaoHiemYTe));
                        var queryForHole = JSON.parse(JSON.stringify(dsBaoHiemYTe));
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_20__["LocalStorageHelper"].setItem('additionalSearchStringBHYT', JSON.stringify(queryForHole));
                        this.gridChild.search();
                    }
                };
                DsBaoHiemYTeComponent.prototype.extCheckboxSelection = function (data) {
                    this.mySelection = [];
                    this.mySelection = data;
                };
                DsBaoHiemYTeComponent.prototype.DownloadThongTinTongHopXMLNguoiBenh = function () {
                    var _this = this;
                    var self = this;
                    self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmComponent"], {
                        disableClose: false,
                        width: "400px",
                        data: {
                            Title: "Xác nhận",
                            Message: "B\u1EA1n c\u00F3 ch\u1EAFc ch\u1EAFn mu\u1ED1n t\u1EA3i t\u1ED5ng h\u1EE3p th\u00F4ng tin ng\u01B0\u1EDDi b\u1EC7nh n\u00E0y kh\u00F4ng?",
                        },
                    }).afterClosed().subscribe(function (result) {
                        if (result == "Yes") {
                            self.showPopupLoadingData(_bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_4__["EnumTypeLoadingData"].LoadingTaiFile);
                            _this.danhSachYeuCauTiepNhanIds.Id = _this.mySelection;
                            _this.apiService.post("BHYT/DownloadHoSoGiamDinhXMLs", _this.danhSachYeuCauTiepNhanIds).subscribe(function (resultData) {
                                if (resultData != null) {
                                    if (typeof resultData == "string" && resultData !== "") {
                                        _this.notificationService.showError(resultData);
                                        _this.dialog.closeAll();
                                    }
                                    else if (resultData.NameFileDown !== "") {
                                        _this.apiService.postExportXML("BHYT/DownloadHoSoGiamDinhXML?NameFileDown=" + resultData.NameFileDown)
                                            .subscribe(function (res) {
                                            var dateTimeNow = new Date();
                                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/xml", "TongHop" + dateTimeNow.getFullYear() + ".xml");
                                            self.closeAllDialogs();
                                        }, function (err) {
                                            _this.notificationService.showError(err.Message);
                                            self.closeAllDialogs();
                                        });
                                    }
                                }
                                _this.dialog.closeAll();
                            }, function (err) {
                                if (err.Message != "Validation Failed") {
                                    self.notificationService.showError(err.Message);
                                    self.closeAllDialogs();
                                }
                            });
                        }
                    });
                };
                DsBaoHiemYTeComponent.prototype.GuiTongHopHoSoGiamDinh = function () {
                    var self = this;
                    self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmComponent"], {
                        disableClose: false,
                        width: "400px",
                        data: {
                            Title: "Xác nhận",
                            Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].MessConfirm, ["gửi lên bảo hiểm y tế",]),
                        },
                    }).afterClosed().subscribe(function (result) {
                        if (result == "Yes") {
                            self.showPopupLoadingData(_bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_4__["EnumTypeLoadingData"].DangGuiHoSo);
                            self.danhSachYeuCauTiepNhanIds.Id = self.mySelection;
                            self.apiService.post("BHYT/GuiHoSoGiamDinhs", self.danhSachYeuCauTiepNhanIds).subscribe(function (resultData) {
                                if (resultData != undefined && resultData != null) {
                                    if (typeof resultData == "string" && resultData !== "") {
                                        self.notificationService.showError(resultData);
                                        self.closeAllDialogs();
                                    }
                                    else {
                                        if (resultData.XMLError != undefined) {
                                            self.notificationService.showSuccess("Đã xảy ra lỗi vui lòng liên hệ admin");
                                            self.closeAllDialogs();
                                        }
                                        else if (resultData.APIError != undefined) {
                                            self.notificationService.showSuccess("Đã xảy ra lỗi API trả về vui lòng liên hệ admin");
                                            self.closeAllDialogs();
                                        }
                                        else {
                                            self.notificationService.showSuccess("Gửi hồ sơ giám định thành công.");
                                            self.timKiemNangCao();
                                            self.closeAllDialogs();
                                        }
                                    }
                                }
                            }, function (err) {
                                if (err.Message != "Validation Failed") {
                                    self.notificationService.showError(err.Message);
                                    self.closeAllDialogs();
                                }
                            });
                        }
                    });
                };
                DsBaoHiemYTeComponent.prototype.DownloadFileExcels = function () {
                    var _this = this;
                    var self = this;
                    self.showPopupLoadingData(_bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_4__["EnumTypeLoadingData"].LoadingExcel);
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Process)) {
                        self.apiService.postExportExcel("BHYT/ExportBaoHiemYTe", this.gridChild._gridQueryInfo).subscribe(function (resultData) {
                            self.closeAllDialogs();
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(resultData, "application/vnd.ms-excel", "GiamDinhBHYT" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.timKiemNangCao();
                        }, function (err) {
                            self.notificationService.showError(err.Message);
                            self.closeAllDialogs();
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DsBaoHiemYTeComponent.prototype.showPopupLoadingData = function (typeLoading) {
                    if (typeLoading === void 0) { typeLoading = _bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_4__["EnumTypeLoadingData"].View; }
                    var mess = "";
                    switch (typeLoading) {
                        case _bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_4__["EnumTypeLoadingData"].View:
                            mess = "Đang tải dữ liệu...";
                            break;
                        case _bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_4__["EnumTypeLoadingData"].Update:
                            mess = "Đang lưu dữ liệu...";
                            break;
                        case _bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_4__["EnumTypeLoadingData"].Delete:
                            mess = "Đang xóa dữ liệu...";
                            break;
                        case _bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_4__["EnumTypeLoadingData"].DangGuiHoSo:
                            mess = "Đang gửi hồ sơ giám định...";
                            break;
                        case _bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_4__["EnumTypeLoadingData"].LoadingExcel:
                            mess = "Đang tải excel...";
                            break;
                        case _bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_4__["EnumTypeLoadingData"].LoadingTaiFile:
                            mess = "Đang tải hồ sơ giám định...";
                            break;
                        default: mess = "Đang tải dữ liệu...";
                    }
                    if (!this.loadingPopup) {
                        this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: mess }
                        });
                    }
                };
                DsBaoHiemYTeComponent.prototype.closeAllDialogs = function () {
                    if (this.loadingPopup) {
                        this.loadingPopup.close();
                        this.loadingPopup = null;
                    }
                };
                return DsBaoHiemYTeComponent;
            }());
            DsBaoHiemYTeComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_21__["Location"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_14__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("actionTemplate", { static: true })
            ], DsBaoHiemYTeComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], { static: false })
            ], DsBaoHiemYTeComponent.prototype, "trigger", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__["GridComponent"], { static: true })
            ], DsBaoHiemYTeComponent.prototype, "gridChild", void 0);
            DsBaoHiemYTeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-ds-bao-hiem-y-te",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ds-bao-hiem-y-te.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/ds-bao-hiem-y-te/ds-bao-hiem-y-te.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ds-bao-hiem-y-te.component.scss */ "./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/ds-bao-hiem-y-te/ds-bao-hiem-y-te.component.scss")).default]
                })
            ], DsBaoHiemYTeComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/thong-tin-chi-tiet-goi-bao-hiem-y-te/thong-tin-chi-tiet-goi-bao-hiem-y-te.component.scss": 
        /*!*************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/thong-tin-chi-tiet-goi-bao-hiem-y-te/thong-tin-chi-tiet-goi-bao-hiem-y-te.component.scss ***!
          \*************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".red-text {\n  color: red;\n}\n\n.green-text {\n  color: green;\n}\n\n.green-yellow {\n  color: orangered;\n}\n\n.sticky-button-action {\n  position: sticky;\n  position: -webkit-sticky;\n  bottom: 0px;\n  background-color: white;\n  border-top: 1px solid #ccc;\n  overflow: hidden;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1oaWVtLXktdGUvZGFuaC1zYWNoLWJhby1oaWVtLXktdGUvdGhvbmctdGluLWNoaS10aWV0LWdvaS1iYW8taGllbS15LXRlL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcYmFvLWhpZW0teS10ZVxcZGFuaC1zYWNoLWJhby1oaWVtLXktdGVcXHRob25nLXRpbi1jaGktdGlldC1nb2ktYmFvLWhpZW0teS10ZVxcdGhvbmctdGluLWNoaS10aWV0LWdvaS1iYW8taGllbS15LXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWhpZW0teS10ZS9kYW5oLXNhY2gtYmFvLWhpZW0teS10ZS90aG9uZy10aW4tY2hpLXRpZXQtZ29pLWJhby1oaWVtLXktdGUvdGhvbmctdGluLWNoaS10aWV0LWdvaS1iYW8taGllbS15LXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1oaWVtLXktdGUvZGFuaC1zYWNoLWJhby1oaWVtLXktdGUvdGhvbmctdGluLWNoaS10aWV0LWdvaS1iYW8taGllbS15LXRlL3Rob25nLXRpbi1jaGktdGlldC1nb2ktYmFvLWhpZW0teS10ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWQtdGV4dCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5ncmVlbi10ZXh0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uZ3JlZW4teWVsbG93IHtcbiAgY29sb3I6IG9yYW5nZXJlZDtcbn1cblxuLnN0aWNreS1idXR0b24tYWN0aW9uIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBib3R0b206IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAxMDtcbn0iLCIucmVkLXRleHQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZ3JlZW4tdGV4dCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmdyZWVuLXllbGxvdyB7XG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XG59XG5cbi5zdGlja3ktYnV0dG9uLWFjdGlvbiB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgYm90dG9tOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMTA7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/thong-tin-chi-tiet-goi-bao-hiem-y-te/thong-tin-chi-tiet-goi-bao-hiem-y-te.component.ts": 
        /*!***********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/thong-tin-chi-tiet-goi-bao-hiem-y-te/thong-tin-chi-tiet-goi-bao-hiem-y-te.component.ts ***!
          \***********************************************************************************************************************************************************/
        /*! exports provided: ThongTinChiTietGoiBaoHiemYTeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinChiTietGoiBaoHiemYTeComponent", function () { return ThongTinChiTietGoiBaoHiemYTeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bao-hiem-y-te */ "./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/bao-hiem-y-te.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_11__);
            /* harmony import */ var _tim_kiem_ma_benh_khac_popup_tim_kiem_ma_benh_khac_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../tim-kiem-ma-benh-khac-popup/tim-kiem-ma-benh-khac-popup.component */ "./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/tim-kiem-ma-benh-khac-popup/tim-kiem-ma-benh-khac-popup.component.ts");
            /* harmony import */ var _tim_kiem_ma_bac_si_popup_tim_kiem_ma_bac_si_popup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tim-kiem-ma-bac-si-popup/tim-kiem-ma-bac-si-popup.component */ "./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/tim-kiem-ma-bac-si-popup/tim-kiem-ma-bac-si-popup.component.ts");
            /* harmony import */ var _iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/warning */ "./node_modules/@iconify/icons-ic/warning.js");
            /* harmony import */ var _iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_14__);
            var ThongTinChiTietGoiBaoHiemYTeComponent = /** @class */ (function () {
                function ThongTinChiTietGoiBaoHiemYTeComponent(cdRef, dialog, route, apiService, router, notificationService) {
                    this.cdRef = cdRef;
                    this.dialog = dialog;
                    this.route = route;
                    this.apiService = apiService;
                    this.router = router;
                    this.notificationService = notificationService;
                    this.readonly = false;
                    this.thongTinBenhNhanViewModels = {};
                    this.goiDanhSachThongTinBenhNhanCoBHYT = {};
                    this.danhSachYeuCauTiepNhanIds = {};
                    this.confrim = null;
                    this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_11___default.a;
                    this.icWarning = _iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_14___default.a;
                    this.showWarningMessages = Array();
                    this.showHTMLWarningMessagesPopup = Array();
                }
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.ngOnInit = function () {
                    this.thongtinbenhnhan = new _bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_2__["XMLThongTinBenhNhan"]();
                    this.idYeuCauTiepNhan = this.route.snapshot.params.id;
                    this.loadDataEmun();
                    this.getThongBenhNhanTheoYeuCauTiepNhan(this.idYeuCauTiepNhan);
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.loadDataEmun = function () {
                    var _this = this;
                    this.apiService.post("BHYT/GetMaNhom").subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.MaNhom = resultData;
                        }
                    });
                    this.apiService.post("BHYT/GetMaNhomDVKT").subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.MaNhomDVKT = resultData;
                        }
                    });
                    this.apiService.post("BHYT/GetEnumMatainan").subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.MaTaiNan = resultData;
                        }
                    });
                    this.apiService.post("BHYT/GetEnumLyDoVaoVien").subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.LyDoRaVien = resultData;
                        }
                    });
                    this.apiService.post("BHYT/GetEnumKetQuaDieuTri").subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.KetQuaDieuTri = resultData;
                        }
                    });
                    this.apiService.post("BHYT/GetEnumTinhTrangRaVien").subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.TinhTrangRaVien = resultData;
                        }
                    });
                    this.apiService.post("BHYT/GetEnumMaLoaiKCB").subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.MaLoaiKCB = resultData;
                        }
                    });
                    this.apiService.post("BHYT/GetEnumMaPhuongThucThanhToan").subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.MaPhuongThucThanhToan = resultData;
                        }
                    });
                    this.apiService.post("BHYT/GetEnumGioiTinh").subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.DataGoiTinh = resultData;
                        }
                    });
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.getThongBenhNhanTheoYeuCauTiepNhan = function (id) {
                    var _this = this;
                    var self = this;
                    self.showPopupLoadingData(_bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_2__["EnumTypeLoadingData"].View);
                    self.danhSachYeuCauTiepNhanIds.Id = [];
                    self.danhSachYeuCauTiepNhanIds.Id.push(id);
                    self.apiService.post("BHYT/GetThongTinHoSoGiamDinhs", self.danhSachYeuCauTiepNhanIds).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData !== null) {
                            if (resultData[0].ErrorMessage !== null) {
                                self.notificationService.showError(resultData[0].ErrorMessage);
                            }
                            else {
                                self.thongtinbenhnhan = resultData[0];
                                self.loadDataEmun();
                            }
                            var lstWarningMessage = _this.thongtinbenhnhan.WarningMessage != undefined && _this.thongtinbenhnhan.WarningMessage != null &&
                                _this.thongtinbenhnhan.WarningMessage != '' ? _this.thongtinbenhnhan.WarningMessage.split('|') : null;
                            if (lstWarningMessage != undefined && lstWarningMessage != null && lstWarningMessage.length > 0) {
                                lstWarningMessage.forEach(function (itemDichVu) {
                                    _this.showWarningMessages.push(itemDichVu);
                                    _this.showHTMLWarningMessagesPopup.push("<span class=\"green-yellow\">" + itemDichVu.bold() + " </span>");
                                });
                            }
                            self.closeAllDialogs();
                        }
                    }, function (err) {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                            self.closeAllDialogs();
                        }
                    });
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.AddNewThuoc = function () {
                    var viTriNew = new _bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_2__["HoSoChiTietThuoc"]();
                    viTriNew.MaLienKet = this.thongtinbenhnhan.MaLienKet;
                    viTriNew.STT = this.thongtinbenhnhan.STT;
                    this.thongtinbenhnhan.HoSoChiTietThuoc.push(viTriNew);
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.AddDichVuKyThuat = function () {
                    var viTriNew = new _bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_2__["HoSoChiTietDVKT"]();
                    viTriNew.MaLienKet = this.thongtinbenhnhan.MaLienKet;
                    viTriNew.STT = this.thongtinbenhnhan.STT;
                    this.thongtinbenhnhan.HoSoChiTietDVKT.push(viTriNew);
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.AddDichVuKyThuatCanLamSang = function () {
                    var viTriNew = new _bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_2__["HoSoCanLamSang"]();
                    viTriNew.MaLienKet = this.thongtinbenhnhan.MaLienKet;
                    viTriNew.STT = this.thongtinbenhnhan.STT;
                    this.thongtinbenhnhan.HoSoCanLamSang.push(viTriNew);
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.AddDienBienBenh = function () {
                    var viTriNew = new _bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_2__["HoSoChiTietDienBienBenh"]();
                    viTriNew.MaLienKet = this.thongtinbenhnhan.MaLienKet;
                    viTriNew.STT = this.thongtinbenhnhan.STT;
                    this.thongtinbenhnhan.HoSoChiTietDienBienBenh.push(viTriNew);
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.DeleteVitri = function (position) {
                    var _this = this;
                    this.dialog
                        .open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmComponent"], {
                        disableClose: false,
                        width: "400px",
                        data: {
                            Title: "Xác nhận",
                            Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_6__["SystemMessage"].MessConfirm, [
                                "xóa dòng",
                            ]),
                        },
                    })
                        .afterClosed()
                        .subscribe(function (result) {
                        /* result is a string:Yes,No,No answer*/
                        if (result == "Yes") {
                            _this.thongtinbenhnhan.HoSoChiTietThuoc.splice(position, 1);
                            _this.totalTienNguoiBenhXML1();
                        }
                    });
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.DeleteVitriDVKT = function (position) {
                    var _this = this;
                    this.dialog
                        .open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmComponent"], {
                        disableClose: false,
                        width: "400px",
                        data: {
                            Title: "Xác nhận",
                            Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_6__["SystemMessage"].MessConfirm, [
                                "xóa dòng",
                            ]),
                        },
                    })
                        .afterClosed()
                        .subscribe(function (result) {
                        /* result is a string:Yes,No,No answer*/
                        if (result == "Yes") {
                            _this.thongtinbenhnhan.HoSoChiTietDVKT.splice(position, 1);
                            _this.totalTienNguoiBenhXML1();
                        }
                    });
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.DeleteVitrilamsang = function (position) {
                    var _this = this;
                    this.dialog
                        .open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmComponent"], {
                        disableClose: false,
                        width: "400px",
                        data: {
                            Title: "Xác nhận",
                            Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_6__["SystemMessage"].MessConfirm, [
                                "xóa dòng",
                            ]),
                        },
                    })
                        .afterClosed()
                        .subscribe(function (result) {
                        /* result is a string:Yes,No,No answer*/
                        if (result == "Yes") {
                            _this.thongtinbenhnhan.HoSoCanLamSang.splice(position, 1);
                        }
                    });
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.DeleteVitriDienBien = function (position) {
                    var _this = this;
                    this.dialog
                        .open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmComponent"], {
                        disableClose: false,
                        width: "400px",
                        data: {
                            Title: "Xác nhận",
                            Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_6__["SystemMessage"].MessConfirm, [
                                "xóa dòng",
                            ]),
                        },
                    })
                        .afterClosed()
                        .subscribe(function (result) {
                        /* result is a string:Yes,No,No answer*/
                        if (result == "Yes") {
                            _this.thongtinbenhnhan.HoSoChiTietDienBienBenh.splice(position, 1);
                        }
                    });
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.downloadThongTinXMLNguoiBenh = function () {
                    var self = this;
                    self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmComponent"], {
                        disableClose: false,
                        width: "400px",
                        data: {
                            Title: "Xác nhận",
                            Message: "B\u1EA1n ch\u1EAFc ch\u1EAFn mu\u1ED1n t\u1EA3i th\u00F4ng tin ng\u01B0\u1EDDi b\u1EC7nh <span class=\"green-text\">" + self.thongtinbenhnhan.HoTen.toUpperCase().bold() + " </span> hay kh\u00F4ng?"
                        },
                    }).afterClosed().subscribe(function (result) {
                        if (result == "Yes") {
                            self.showPopupLoadingData(_bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_2__["EnumTypeLoadingData"].LoadingTaiFile);
                            self.kiemTraThongTinNguoiBenh();
                            if (self.validationErrors.length > 0) {
                                self.closeAllDialogs();
                                return true;
                            }
                            if (self.thongtinbenhnhan != undefined) {
                                self.thongtinbenhnhan.DataJson = JSON.stringify(self.thongtinbenhnhan);
                            }
                            self.thongtinbenhnhan.IsDownLoad = true;
                            self.thongtinbenhnhan.SoNgayDieuTri = Math.round(self.thongtinbenhnhan.SoNgayDieuTri);
                            self.apiService.post("BHYT/DownloadTungHoSoGiamDinhNguoiBenh", self.thongtinbenhnhan).subscribe(function (resultData) {
                                if (resultData.XMLError != undefined) {
                                    self.notificationService.showSuccess("\u0110\u00E3 x\u1EA3y ra l\u1ED7i vui l\u00F2ng li\u00EAn h\u1EC7 admin");
                                    self.closeAllDialogs();
                                }
                                else if (resultData.APIError != undefined) {
                                    self.notificationService.showSuccess("\u0110\u00E3 x\u1EA3y ra l\u1ED7i API tr\u1EA3 v\u1EC1 vui l\u00F2ng li\u00EAn h\u1EC7 admin");
                                    self.closeAllDialogs();
                                }
                                else {
                                    self.apiService.postExportXML("BHYT/DownloadHoSoGiamDinhXML?NameFileDown=" + resultData.NameFileDown).subscribe(function (res) {
                                        var dateTimeNow = new Date();
                                        src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].downLoadFile(res, "application/xml", "TongHop" + self.thongtinbenhnhan.MaBenh + " " + dateTimeNow.getFullYear() + ".xml");
                                        self.closeAllDialogs();
                                    }, function (err) {
                                        self.notificationService.showError(err.Message);
                                        self.closeAllDialogs();
                                    });
                                }
                            }, function (err) {
                                self.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    self.notificationService.showError(err.Message);
                                    self.closeAllDialogs();
                                }
                            });
                        }
                    });
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.goiHoSoGiamDinhNguoiBenh = function () {
                    var self = this;
                    var message = self.thongtinbenhnhan.WarningMessage !== undefined && self.thongtinbenhnhan.WarningMessage !== null && self.thongtinbenhnhan.WarningMessage !== '' ?
                        self.showHTMLWarningMessagesPopup.join("<br/>").bold() + " <br/>\n        B\u1EA1n ch\u1EAFc ch\u1EAFn mu\u1ED1n g\u1EEDi th\u00F4ng tin ng\u01B0\u1EDDi b\u1EC7nh <span class=\"green-text\">" + self.thongtinbenhnhan.HoTen.toUpperCase().bold() + " </span> tr\u1EF1c ti\u1EBFp l\u00EAn b\u1ED9 y t\u1EBF hay kh\u00F4ng?" :
                        " B\u1EA1n ch\u1EAFc ch\u1EAFn mu\u1ED1n g\u1EEDi th\u00F4ng tin ng\u01B0\u1EDDi b\u1EC7nh <span class=\"green-text\">" + self.thongtinbenhnhan.HoTen.toUpperCase().bold() + " </span> tr\u1EF1c ti\u1EBFp l\u00EAn b\u1ED9 y t\u1EBF hay kh\u00F4ng?";
                    self.confrim = self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmComponent"], {
                        disableClose: false,
                        width: "400px",
                        data: {
                            Title: "Xác nhận",
                            Message: message
                        },
                    }).afterClosed().subscribe(function (result) {
                        /* result is a string:Yes,No,No answer*/
                        if (result == "Yes") {
                            self.showPopupLoadingData(_bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_2__["EnumTypeLoadingData"].DangGuiHoSo);
                            self.kiemTraThongTinNguoiBenh();
                            if (self.validationErrors.length > 0) {
                                self.closeAllDialogs();
                                return true;
                            }
                            if (self.thongtinbenhnhan != undefined) {
                                self.thongtinbenhnhan.DataJson = JSON.stringify(self.thongtinbenhnhan);
                            }
                            self.thongtinbenhnhan.IsDownLoad = true;
                            self.apiService.post("BHYT/GuiChiTietTungHoSoGiamDinhNguoiBenhs", self.thongtinbenhnhan).subscribe(function (resultData) {
                                if (resultData.APIError != undefined && resultData.APIError != null) {
                                    self.notificationService.showError(resultData.APIError);
                                    self.closeAllDialogs();
                                }
                                else {
                                    self.notificationService.showSuccess("G\u1EEDi h\u1ED3 s\u01A1 gi\u00E1m \u0111\u1ECBnh th\u00E0nh c\u00F4ng.");
                                    self.closeAllDialogs();
                                    self.backToList();
                                }
                            }, function (err) {
                                self.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    self.notificationService.showError(err.Message);
                                    self.closeAllDialogs();
                                }
                            });
                        }
                    });
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.kiemTraThongTinNguoiBenh = function () {
                    var self = this;
                    self.validationErrors = [];
                    self.cdRef.detectChanges();
                    if (self.thongtinbenhnhan != undefined && self.thongtinbenhnhan != null) {
                        self.ktThongTinBenhNhanXML1();
                        self.ktHoSoChiTietThuocXML2();
                        self.ktHoSoChiTietDVKTXML3();
                        self.ktHoSoCanLamSangXML4();
                        self.ktHoSoChiTietDienBienBenhXML5();
                    }
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.ktThongTinBenhNhanXML1 = function () {
                    var self = this;
                    if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.MaLienKet)) {
                        self.validationErrors.push({ Message: "Vui lòng nhập mã liên kết.", Field: "MaLienKet" });
                    }
                    if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoTen)) {
                        self.validationErrors.push({ Message: "Vui lòng nhập họ tên.", Field: "HoTen" });
                    }
                    if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.GioiTinh)) {
                        self.validationErrors.push({ Message: "Vui lòng chọn giới tính.", Field: "GioiTinh" });
                    }
                    if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.DiaChi)) {
                        self.validationErrors.push({ Message: "Vui lòng nhập địa chỉ.", Field: "DiaChi" });
                    }
                    if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.MaThe)) {
                        self.validationErrors.push({ Message: "Vui lòng nhập mã thẻ.", Field: "MaThe" });
                    }
                    if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.GiaTriTheTu)) {
                        self.validationErrors.push({ Message: "Vui lòng chọn giá trị thẻ từ.", Field: "GiaTriTheTu" });
                    }
                    if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.GiaTriTheDen)) {
                        self.validationErrors.push({ Message: "Vui lòng chọn giá trị thẻ đến.", Field: "GiaTriTheDen" });
                    }
                    if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.MaBenh)) {
                        self.validationErrors.push({ Message: "Vui lòng chọn mã bệnh.", Field: "MaBenh" });
                    }
                    if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.TenBenh)) {
                        self.validationErrors.push({ Message: "Vui lòng nhập tên bệnh.", Field: "TenBenh" });
                    }
                    if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.LyDoVaoVien)) {
                        self.validationErrors.push({ Message: "Vui lòng chọn lý do vào viện.", Field: "LyDoVaoVien" });
                    }
                    if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.MaLoaiKCB)) {
                        self.validationErrors.push({ Message: "Vui lòng nhập mã loại KCB.", Field: "MaLoaiKCB" });
                    }
                    // if (self.thongtinbenhnhan.MienCungChiTra === undefined || self.thongtinbenhnhan.MienCungChiTra === null) {
                    //   self.validationErrors.push({ Message: "Miễm cùng chi trả yêu cầu nhập.", Field: "MienCungChiTra" });
                    // }
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.ktHoSoChiTietThuocXML2 = function () {
                    var self = this;
                    if (self.thongtinbenhnhan.HoSoChiTietThuoc !== undefined && self.thongtinbenhnhan.HoSoChiTietThuoc !== null && self.thongtinbenhnhan.HoSoChiTietThuoc.length > 0) {
                        for (var index = 0; index < self.thongtinbenhnhan.HoSoChiTietThuoc.length; index++) {
                            if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietThuoc[index].MaNhom)) {
                                self.validationErrors.push({ Message: "Vui lòng chọn mã nhóm.", Field: "HoSoChiTietThuoc[" + index + "].MaNhom" });
                            }
                            if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietThuoc[index].SoLuong)) {
                                self.validationErrors.push({ Message: "Vui lòng nhập số lượng.", Field: "HoSoChiTietThuoc[" + index + "].SoLuong" });
                            }
                            if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietThuoc[index].DonGia)) {
                                self.validationErrors.push({ Message: "Vui lòng nhập đơn giá thuốc.", Field: "HoSoChiTietThuoc[" + index + "].DonGia" });
                            }
                            if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietThuoc[index].TyLeThanhToan)) {
                                self.validationErrors.push({ Message: "Vui lòng nhập tỷ lệ thanh toán.", Field: "HoSoChiTietThuoc[" + index + "].TyLeThanhToan" });
                            }
                            if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietThuoc[index].PhamVi)) {
                                self.validationErrors.push({ Message: "Vui lòng nhập phạm vi.", Field: "HoSoChiTietThuoc[" + index + "].PhamVi" });
                            }
                            if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietThuoc[index].MucHuong)) {
                                self.validationErrors.push({ Message: "Vui lòng nhập mức hưởng.", Field: "HoSoChiTietThuoc[" + index + "].MucHuong" });
                            }
                            if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietThuoc[index].MaPhuongThucThanhToan)) {
                                self.validationErrors.push({ Message: "Vui lòng nhập mã phương thức thanh toán.", Field: "HoSoChiTietThuoc[" + index + "].MaPhuongThucThanhToan" });
                            }
                            if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietThuoc[index].TenThuoc)) {
                                self.validationErrors.push({ Message: "Vui lòng nhập tên thuốc.", Field: "HoSoChiTietThuoc[" + index + "].TenThuoc" });
                            }
                            if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietThuoc[index].DonViTinh)) {
                                self.validationErrors.push({ Message: "Vui lòng nhập đơn vị tính.", Field: "HoSoChiTietThuoc[" + index + "].DonViTinh" });
                            }
                            if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietThuoc[index].NgayYLenh)) {
                                self.validationErrors.push({ Message: "Vui lòng nhập ngày y lệnh.", Field: "HoSoChiTietThuoc[" + index + "].NgayYLenh" });
                            }
                            if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietThuoc[index].MaBenh)) {
                                self.validationErrors.push({ Message: "Vui lòng nhập mã bệnh.", Field: "HoSoChiTietThuoc[" + index + "].MaBenh" });
                            }
                            if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietThuoc[index].MaThuoc)) {
                                self.validationErrors.push({ Message: "Vui lòng nhập mã thuốc.", Field: "HoSoChiTietThuoc[" + index + "].MaThuoc" });
                            }
                            if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietThuoc[index].MaKhoa)) {
                                self.validationErrors.push({ Message: "Vui lòng nhập mã khoa.", Field: "HoSoChiTietThuoc[" + index + "].MaKhoa" });
                            }
                            if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietThuoc[index].MaBacSi)) {
                                self.validationErrors.push({ Message: "Vui lòng nhập mã bác sĩ.", Field: "HoSoChiTietThuoc[" + index + "].MaBacSi" });
                            }
                        }
                    }
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.ktHoSoChiTietDVKTXML3 = function () {
                    var self = this;
                    if (self.thongtinbenhnhan.HoSoChiTietDVKT != undefined && self.thongtinbenhnhan.HoSoChiTietDVKT != null && self.thongtinbenhnhan.HoSoChiTietDVKT.length > 0) {
                        for (var index = 0; index < self.thongtinbenhnhan.HoSoChiTietDVKT.length; index++) {
                            if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietDVKT[index].MaNhom)) {
                                self.validationErrors.push({ Message: "Vui lòng chọn mã nhóm.", Field: "HoSoChiTietDVKT[" + index + "].MaNhom" });
                            }
                            if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietDVKT[index].SoLuong)) {
                                self.validationErrors.push({ Message: "Vui lòng nhập số lượng.", Field: "HoSoChiTietDVKT[" + index + "].SoLuong" });
                            }
                            if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietDVKT[index].DonGia)) {
                                self.validationErrors.push({ Message: "Vui lòng nhập đơn giá.", Field: "HoSoChiTietDVKT[" + index + "].DonGia" });
                            }
                            if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietDVKT[index].TyLeThanhToan)) {
                                self.validationErrors.push({ Message: "Vui lòng nhập tỷ lệ thanh toán.", Field: "HoSoChiTietDVKT[" + index + "].TyLeThanhToan" });
                            }
                            if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietDVKT[index].PhamVi)) {
                                self.validationErrors.push({ Message: "Vui lòng nhập phạm vi.", Field: "HoSoChiTietDVKT[" + index + "].PhamVi" });
                            }
                            if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietDVKT[index].MucHuong)) {
                                self.validationErrors.push({ Message: "Vui lòng nhập mức hưởng.", Field: "HoSoChiTietDVKT[" + index + "].MucHuong" });
                            }
                            if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietDVKT[index].MaPhuongThucThanhToan)) {
                                self.validationErrors.push({ Message: "Vui lòng nhập mã phương thức thanh toán.", Field: "HoSoChiTietDVKT[" + index + "].MaPhuongThucThanhToan" });
                            }
                            if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietDVKT[index].NgayYLenh)) {
                                self.validationErrors.push({ Message: "Vui lòng nhập ngày y lệnh.", Field: "HoSoChiTietDVKT[" + index + "].NgayYLenh" });
                            }
                            if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietDVKT[index].MaKhoa)) {
                                self.validationErrors.push({ Message: "Vui lòng nhập mã khoa.", Field: "HoSoChiTietDVKT[" + index + "].MaKhoa" });
                            }
                            if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietDVKT[index].MaBenh)) {
                                self.validationErrors.push({ Message: "Vui lòng nhập mã bệnh.", Field: "HoSoChiTietDVKT[" + index + "].MaBenh" });
                            }
                            if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietDVKT[index].TienBaoHiemThanhToan)) {
                                self.validationErrors.push({ Message: "Vui lòng nhập tiền bảo hiểm thanh toán.", Field: "HoSoChiTietDVKT[" + index + "].TienBaoHiemThanhToan" });
                            }
                            if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietDVKT[index].MaBacSi)) {
                                self.validationErrors.push({ Message: "Vui lòng nhập mã bác sĩ.", Field: "HoSoChiTietDVKT[" + index + "].MaBacSi" });
                            }
                        }
                    }
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.ktHoSoCanLamSangXML4 = function () {
                    var self = this;
                    if (self.thongtinbenhnhan.HoSoCanLamSang != undefined && self.thongtinbenhnhan.HoSoCanLamSang != null && self.thongtinbenhnhan.HoSoCanLamSang.length > 0) {
                        for (var index = 0; index < self.thongtinbenhnhan.HoSoCanLamSang.length; index++) {
                            if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoCanLamSang[index].MaDichVu)) {
                                self.validationErrors.push({ Message: "Vui lòng nhập mã dịch vụ kỹ thuật CLS.", Field: "HoSoCanLamSang[" + index + "].MaDichVu" });
                            }
                            if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoCanLamSang[index].NgayKQ)) {
                                self.validationErrors.push({ Message: "Vui lòng nhập ngày có kết quả.", Field: "HoSoCanLamSang[" + index + "].NgayKQ" });
                            }
                        }
                    }
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.ktHoSoChiTietDienBienBenhXML5 = function () {
                    var self = this;
                    if (self.thongtinbenhnhan.HoSoChiTietDienBienBenh != undefined && self.thongtinbenhnhan.HoSoChiTietDienBienBenh != null && self.thongtinbenhnhan.HoSoChiTietDienBienBenh.length > 0) {
                        for (var index = 0; index < self.thongtinbenhnhan.HoSoChiTietDienBienBenh.length; index++) {
                            if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietDienBienBenh[index].NgayYLenh)) {
                                self.validationErrors.push({ Message: "Vui lòng nhập ngày y lệnh.", Field: "HoSoChiTietDienBienBenh[" + index + "].NgayYLenh" });
                            }
                            if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietDienBienBenh[index].DienBien)) {
                                self.validationErrors.push({ Message: "Vui lòng nhập diễn biến bệnh trong lần khám.", Field: "HoSoChiTietDienBienBenh[" + index + "].DienBien" });
                            }
                        }
                    }
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.isUndefinedOrNullOrEmpty = function (value) {
                    return value == undefined || value == null || value === "";
                };
                // Begin Công thức Hồ sơ thuốc (XML2)
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.ChangeSoLuongHoSoThuoc = function (ev, item) {
                    item.ThanhTien = item.DonGia * ev * item.TyLeThanhToan / 100;
                    this.congThucTienBaoHiemThanhToanXML2(item);
                    this.totalTienNguoiBenhXML1();
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.ChangeDonGiaHoSoThuoc = function (ev, item) {
                    item.ThanhTien = item.SoLuong * ev * item.TyLeThanhToan / 100;
                    this.congThucTienBaoHiemThanhToanXML2(item);
                    this.totalTienNguoiBenhXML1();
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.ChangeTyLeThanhToanHoSoThuoc = function (ev, item) {
                    item.ThanhTien = item.SoLuong * item.DonGia * ev / 100;
                    this.congThucTienBaoHiemThanhToanXML2(item);
                    this.totalTienNguoiBenhXML1();
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.congThucTienBaoHiemThanhToanXML2 = function (item) {
                    item.TienBaoHiemThanhToan =
                        ((item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac) * item.MucHuong / 100) != undefined &&
                            ((item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac) * item.MucHuong / 100) != null &&
                            ((item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac) * item.MucHuong / 100) >= 0 ?
                            ((item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac) * item.MucHuong / 100) : 0;
                    this.congThucTienBenhNhanCungChiTraXML2(item);
                    this.totalTienNguoiBenhXML1();
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.congThucTienBenhNhanCungChiTraXML2 = function (item) {
                    item.TienBenhNhanCungChiTra =
                        (item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac - item.TienBaoHiemThanhToan) != undefined &&
                            (item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac - item.TienBaoHiemThanhToan) != null &&
                            (item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac - item.TienBaoHiemThanhToan) >= 0 ?
                            (item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac - item.TienBaoHiemThanhToan) : 0;
                };
                // Begin Công thức Dịch vụ kỹ thuật (XML3)
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.modelChangeMaNhomDVKT = function ($event) {
                    this.totalTienNguoiBenhXML1();
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.ChangeSoLuongDichVuKyThuat = function (ev, item) {
                    item.ThanhTien = item.DonGia * ev * item.TyLeThanhToan / 100;
                    this.congThucTienBaoHiemThanhToanXML3(item);
                    this.totalTienNguoiBenhXML1();
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.ChangeDonGiaDichVuKyThuat = function (ev, item) {
                    item.ThanhTien = item.SoLuong * ev * item.TyLeThanhToan / 100;
                    this.congThucTienBaoHiemThanhToanXML3(item);
                    this.totalTienNguoiBenhXML1();
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.ChangeTyLeThanhToanDichVuKyThuat = function (ev, item) {
                    item.ThanhTien = item.SoLuong * item.DonGia * ev / 100;
                    this.congThucTienBaoHiemThanhToanXML3(item);
                    this.totalTienNguoiBenhXML1();
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.congThucTienBaoHiemThanhToanXML3 = function (item) {
                    item.TienBaoHiemThanhToan =
                        ((item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac) * item.MucHuong / 100) != undefined &&
                            ((item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac) * item.MucHuong / 100) != null &&
                            (item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac - item.TienBaoHiemThanhToan) >= 0 ?
                            ((item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac) * item.MucHuong / 100) : 0;
                    this.congThucTienBenhNhanCungChiTraXML3(item);
                    this.totalTienNguoiBenhXML1();
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.congThucTienBenhNhanCungChiTraXML3 = function (item) {
                    item.TienBenhNhanCungChiTra = (item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac - item.TienBaoHiemThanhToan) != undefined &&
                        (item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac - item.TienBaoHiemThanhToan) != null &&
                        (item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac - item.TienBaoHiemThanhToan) >= 0 ?
                        (item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac - item.TienBaoHiemThanhToan) : 0;
                };
                /* Công thức Thông tin người bệnh (XML1) */
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.totalTienNguoiBenhXML1 = function () {
                    this.thongtinbenhnhan.TienThuoc = this.thongtinbenhnhan.HoSoChiTietThuoc.reduce(function (sum, item) { return sum + item.ThanhTien; }, 0);
                    this.thongtinbenhnhan.TienVatTuYTe = this.thongtinbenhnhan.HoSoChiTietDVKT.filter(function (x) { return x.MaNhom === 10 || x.MaNhom === 11; }).reduce(function (sum, item) { return sum + item.ThanhTien; }, 0);
                    this.thongtinbenhnhan.TienTongChi = this.thongtinbenhnhan.HoSoChiTietThuoc.reduce(function (sum, item) { return sum + item.ThanhTien; }, 0)
                        + this.thongtinbenhnhan.HoSoChiTietDVKT.reduce(function (sum, item) { return sum + item.ThanhTien; }, 0);
                    this.thongtinbenhnhan.TienBenhNhanCungChiTra = this.thongtinbenhnhan.HoSoChiTietThuoc.reduce(function (sum, item) { return sum + item.TienBenhNhanCungChiTra; }, 0)
                        + this.thongtinbenhnhan.HoSoChiTietDVKT.reduce(function (sum, item) { return sum + item.TienBenhNhanCungChiTra; }, 0);
                    this.thongtinbenhnhan.TienBaoHiemThanhToan = this.thongtinbenhnhan.HoSoChiTietThuoc.reduce(function (sum, item) { return sum + item.TienBaoHiemThanhToan; }, 0)
                        + this.thongtinbenhnhan.HoSoChiTietDVKT.reduce(function (sum, item) { return sum + item.TienBaoHiemThanhToan; }, 0);
                    this.thongtinbenhnhan.TienNguonKhac = this.thongtinbenhnhan.HoSoChiTietThuoc.reduce(function (sum, item) { return sum + item.TienNguonKhac; }, 0)
                        + this.thongtinbenhnhan.HoSoChiTietDVKT.reduce(function (sum, item) { return sum + item.TienNguonKhac; }, 0);
                    this.thongtinbenhnhan.TienNgoaiDinhSuat = this.thongtinbenhnhan.HoSoChiTietThuoc.reduce(function (sum, item) { return sum + item.TienNgoaiDinhSuat; }, 0)
                        + this.thongtinbenhnhan.HoSoChiTietDVKT.reduce(function (sum, item) { return sum + item.TienNgoaiDinhSuat; }, 0);
                };
                /* Công thức Thông tin người bệnh (XML1) */
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.showPopupTimMaBenhKhac = function () {
                    var _this = this;
                    this.dialog.open(_tim_kiem_ma_benh_khac_popup_tim_kiem_ma_benh_khac_popup_component__WEBPACK_IMPORTED_MODULE_12__["ThemMaBenhKhacComponent"], {
                        disableClose: true,
                        width: '800px',
                        data: { layMaBenhOrTenBenh: true }
                    }).afterClosed().subscribe(function (result) {
                        if (result !== undefined && result != null) {
                            _this.thongtinbenhnhan.MaBenhKhac = result;
                            _this.notificationService.showSuccess("Th\u00EAm m\u00E3 b\u1EC7nh kh\u00E1c th\u00E0nh c\u00F4ng");
                        }
                    });
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.showPopupTimTenBenhKhac = function () {
                    var _this = this;
                    this.dialog.open(_tim_kiem_ma_benh_khac_popup_tim_kiem_ma_benh_khac_popup_component__WEBPACK_IMPORTED_MODULE_12__["ThemMaBenhKhacComponent"], {
                        disableClose: true,
                        width: '800px',
                        data: { layMaBenhOrTenBenh: false }
                    }).afterClosed().subscribe(function (result) {
                        if (result !== undefined && result != null) {
                            _this.thongtinbenhnhan.TenBenh = result;
                            _this.notificationService.showSuccess("Th\u00EAm t\u00EAn b\u1EC7nh th\u00E0nh c\u00F4ng");
                        }
                    });
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.clickShowPopupTimMaBS = function () {
                    var _this = this;
                    this.dialog.open(_tim_kiem_ma_bac_si_popup_tim_kiem_ma_bac_si_popup_component__WEBPACK_IMPORTED_MODULE_13__["ThemMaBacSiComponent"], {
                        disableClose: true,
                        width: '800px',
                        data: {}
                    }).afterClosed().subscribe(function (lstMaChungChiHanhNgheBacSi) {
                        if (lstMaChungChiHanhNgheBacSi !== undefined && lstMaChungChiHanhNgheBacSi != null) {
                            var showSuccess = new Array();
                            if (_this.setFieldBacSiForXML2(lstMaChungChiHanhNgheBacSi) !== "")
                                showSuccess.push(_this.setFieldBacSiForXML2(lstMaChungChiHanhNgheBacSi));
                            if (_this.setFieldBacSiForXML3(lstMaChungChiHanhNgheBacSi) !== "")
                                showSuccess.push(_this.setFieldBacSiForXML3(lstMaChungChiHanhNgheBacSi));
                            _this.notificationService.showSuccess("M\u00E3 b\u00E1c s\u0129 th\u00EAm cho " + showSuccess.join(",") + " th\u00E0nh c\u00F4ng");
                        }
                    });
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.setFieldBacSiForXML2 = function (MaBacSi) {
                    var infoXML2 = "";
                    if (this.thongtinbenhnhan.HoSoChiTietThuoc != undefined &&
                        this.thongtinbenhnhan.HoSoChiTietThuoc != null &&
                        this.thongtinbenhnhan.HoSoChiTietThuoc.length > 0) {
                        infoXML2 = ("xml2").toUpperCase();
                        this.thongtinbenhnhan.HoSoChiTietThuoc.forEach(function (item) {
                            item.MaBacSi = MaBacSi;
                        });
                    }
                    return infoXML2;
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.setFieldBacSiForXML3 = function (MaBacSi) {
                    var infoXML3 = "";
                    if (this.thongtinbenhnhan.HoSoChiTietDVKT != undefined &&
                        this.thongtinbenhnhan.HoSoChiTietDVKT != null &&
                        this.thongtinbenhnhan.HoSoChiTietDVKT.length > 0) {
                        infoXML3 = ("xml3").toUpperCase();
                        this.thongtinbenhnhan.HoSoChiTietDVKT.forEach(function (item) {
                            item.MaBacSi = MaBacSi;
                        });
                    }
                    return infoXML3;
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.showPopupLoadingData = function (typeLoading) {
                    if (typeLoading === void 0) { typeLoading = _bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_2__["EnumTypeLoadingData"].View; }
                    var mess = "";
                    switch (typeLoading) {
                        case _bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_2__["EnumTypeLoadingData"].View:
                            mess = "Đang tải dữ liệu...";
                            break;
                        case _bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_2__["EnumTypeLoadingData"].Update:
                            mess = "Đang lưu dữ liệu...";
                            break;
                        case _bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_2__["EnumTypeLoadingData"].Delete:
                            mess = "Đang xóa dữ liệu...";
                            break;
                        case _bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_2__["EnumTypeLoadingData"].DangGuiHoSo:
                            mess = "Đang gửi hồ sơ giám định...";
                            break;
                        case _bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_2__["EnumTypeLoadingData"].LoadingExcel:
                            mess = "Đang tải excel...";
                            break;
                        case _bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_2__["EnumTypeLoadingData"].LoadingTaiFile:
                            mess = "Đang tải hồ sơ giám định...";
                            break;
                        default: mess = "Đang tải dữ liệu...";
                    }
                    if (!this.loadingPopup) {
                        this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: mess }
                        });
                    }
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.closeAllDialogs = function () {
                    if (this.loadingPopup) {
                        this.loadingPopup.close();
                        this.loadingPopup = null;
                    }
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.keyEvent = function (event) {
                    if (event.keyCode == 68 && event.ctrlKey) {
                        this.downloadThongTinXMLNguoiBenh();
                        event.preventDefault();
                    }
                    if (event.keyCode == 71 && event.ctrlKey) {
                        this.goiHoSoGiamDinhNguoiBenh();
                        event.preventDefault();
                    }
                    if (event.keyCode == 27 && !event.ctrlKey) {
                        //esc
                        this.backToList();
                        event.preventDefault();
                    }
                };
                ThongTinChiTietGoiBaoHiemYTeComponent.prototype.backToList = function () {
                    this.router.navigate(["/danh-sach-goi"], { queryParamsHandling: "preserve" });
                };
                return ThongTinChiTietGoiBaoHiemYTeComponent;
            }());
            ThongTinChiTietGoiBaoHiemYTeComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
            ], ThongTinChiTietGoiBaoHiemYTeComponent.prototype, "keyEvent", null);
            ThongTinChiTietGoiBaoHiemYTeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-thong-tin-chi-tiet-goi-bao-hiem-y-te",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./thong-tin-chi-tiet-goi-bao-hiem-y-te.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/thong-tin-chi-tiet-goi-bao-hiem-y-te/thong-tin-chi-tiet-goi-bao-hiem-y-te.component.html")).default,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./thong-tin-chi-tiet-goi-bao-hiem-y-te.component.scss */ "./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/thong-tin-chi-tiet-goi-bao-hiem-y-te/thong-tin-chi-tiet-goi-bao-hiem-y-te.component.scss")).default]
                })
            ], ThongTinChiTietGoiBaoHiemYTeComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/tim-kiem-ma-bac-si-popup/tim-kiem-ma-bac-si-popup.component.scss": 
        /*!*************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/tim-kiem-ma-bac-si-popup/tim-kiem-ma-bac-si-popup.component.scss ***!
          \*************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-bottom: 100%;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1oaWVtLXktdGUvZGFuaC1zYWNoLWJhby1oaWVtLXktdGUvdGltLWtpZW0tbWEtYmFjLXNpLXBvcHVwL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcYmFvLWhpZW0teS10ZVxcZGFuaC1zYWNoLWJhby1oaWVtLXktdGVcXHRpbS1raWVtLW1hLWJhYy1zaS1wb3B1cFxcdGltLWtpZW0tbWEtYmFjLXNpLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWhpZW0teS10ZS9kYW5oLXNhY2gtYmFvLWhpZW0teS10ZS90aW0ta2llbS1tYS1iYWMtc2ktcG9wdXAvdGltLWtpZW0tbWEtYmFjLXNpLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1oaWVtLXktdGUvZGFuaC1zYWNoLWJhby1oaWVtLXktdGUvdGltLWtpZW0tbWEtYmFjLXNpLXBvcHVwL3RpbS1raWVtLW1hLWJhYy1zaS1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59IiwiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/tim-kiem-ma-bac-si-popup/tim-kiem-ma-bac-si-popup.component.ts": 
        /*!***********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/tim-kiem-ma-bac-si-popup/tim-kiem-ma-bac-si-popup.component.ts ***!
          \***********************************************************************************************************************************/
        /*! exports provided: ThemMaBacSiComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemMaBacSiComponent", function () { return ThemMaBacSiComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5__);
            var ThemMaBacSiComponent = /** @class */ (function () {
                function ThemMaBacSiComponent(data, sanitizer, dialogRef) {
                    this.data = data;
                    this.sanitizer = sanitizer;
                    this.dialogRef = dialogRef;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.strMaBS = "";
                }
                ThemMaBacSiComponent.prototype.ngOnInit = function () { };
                ThemMaBacSiComponent.prototype.huy = function () {
                    this.dialogRef.close(null);
                };
                ThemMaBacSiComponent.prototype.btApDungMaBacSi = function () {
                    this.dialogRef.close(this.strMaBS);
                };
                ThemMaBacSiComponent.prototype.close = function () {
                    this.dialogRef.close(null);
                };
                ThemMaBacSiComponent.prototype.modelChangeMaBacSi = function (event) {
                    this.strMaBS = "";
                    if (event != undefined && event != null && event.length > 0) {
                        this.strMaBS = event;
                    }
                };
                return ThemMaBacSiComponent;
            }());
            ThemMaBacSiComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
            ]; };
            ThemMaBacSiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-tim-kiem-ma-bac-si-popup",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tim-kiem-ma-bac-si-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/tim-kiem-ma-bac-si-popup/tim-kiem-ma-bac-si-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tim-kiem-ma-bac-si-popup.component.scss */ "./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/tim-kiem-ma-bac-si-popup/tim-kiem-ma-bac-si-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], ThemMaBacSiComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/tim-kiem-ma-benh-khac-popup/tim-kiem-ma-benh-khac-popup.component.scss": 
        /*!*******************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/tim-kiem-ma-benh-khac-popup/tim-kiem-ma-benh-khac-popup.component.scss ***!
          \*******************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-bottom: 100%;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1oaWVtLXktdGUvZGFuaC1zYWNoLWJhby1oaWVtLXktdGUvdGltLWtpZW0tbWEtYmVuaC1raGFjLXBvcHVwL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcYmFvLWhpZW0teS10ZVxcZGFuaC1zYWNoLWJhby1oaWVtLXktdGVcXHRpbS1raWVtLW1hLWJlbmgta2hhYy1wb3B1cFxcdGltLWtpZW0tbWEtYmVuaC1raGFjLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWhpZW0teS10ZS9kYW5oLXNhY2gtYmFvLWhpZW0teS10ZS90aW0ta2llbS1tYS1iZW5oLWtoYWMtcG9wdXAvdGltLWtpZW0tbWEtYmVuaC1raGFjLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1oaWVtLXktdGUvZGFuaC1zYWNoLWJhby1oaWVtLXktdGUvdGltLWtpZW0tbWEtYmVuaC1raGFjLXBvcHVwL3RpbS1raWVtLW1hLWJlbmgta2hhYy1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59IiwiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/tim-kiem-ma-benh-khac-popup/tim-kiem-ma-benh-khac-popup.component.ts": 
        /*!*****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/tim-kiem-ma-benh-khac-popup/tim-kiem-ma-benh-khac-popup.component.ts ***!
          \*****************************************************************************************************************************************/
        /*! exports provided: ThemMaBenhKhacComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemMaBenhKhacComponent", function () { return ThemMaBenhKhacComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5__);
            var ThemMaBenhKhacComponent = /** @class */ (function () {
                function ThemMaBenhKhacComponent(data, sanitizer, dialogRef) {
                    this.data = data;
                    this.sanitizer = sanitizer;
                    this.dialogRef = dialogRef;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.layMaBenhOrTenBenh = true;
                    this.strMaBenhOrTenBenhKhac = "";
                }
                ThemMaBenhKhacComponent.prototype.ngOnInit = function () { this.layMaBenhOrTenBenh = this.data.layMaBenhOrTenBenh; };
                ThemMaBenhKhacComponent.prototype.huy = function () {
                    this.dialogRef.close(null);
                };
                ThemMaBenhKhacComponent.prototype.btThemMaBenhKhac = function () {
                    this.dialogRef.close(this.strMaBenhOrTenBenhKhac);
                };
                ThemMaBenhKhacComponent.prototype.close = function () {
                    this.dialogRef.close(null);
                };
                ThemMaBenhKhacComponent.prototype.modelChangeMaBenhKhac = function (event) {
                    this.strMaBenhOrTenBenhKhac = "";
                    if (event != undefined && event != null && event.length > 0) {
                        this.strMaBenhOrTenBenhKhac = event.join(";");
                    }
                };
                return ThemMaBenhKhacComponent;
            }());
            ThemMaBenhKhacComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
            ]; };
            ThemMaBenhKhacComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-tim-kiem-ma-benh-khac-popup",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tim-kiem-ma-benh-khac-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/tim-kiem-ma-benh-khac-popup/tim-kiem-ma-benh-khac-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tim-kiem-ma-benh-khac-popup.component.scss */ "./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/tim-kiem-ma-benh-khac-popup/tim-kiem-ma-benh-khac-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], ThemMaBenhKhacComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=default~bao-hiem-y-te-danh-sach-bao-hiem-y-te-ds-bao-hiem-y-te-module~bao-hiem-y-te-lich-su-bao-hiem~87a8c80c-es2015.js.map
//# sourceMappingURL=default~bao-hiem-y-te-danh-sach-bao-hiem-y-te-ds-bao-hiem-y-te-module~bao-hiem-y-te-lich-su-bao-hiem~87a8c80c-es5.js.map
//# sourceMappingURL=default~bao-hiem-y-te-danh-sach-bao-hiem-y-te-ds-bao-hiem-y-te-module~bao-hiem-y-te-lich-su-bao-hiem~87a8c80c-es5.js.map