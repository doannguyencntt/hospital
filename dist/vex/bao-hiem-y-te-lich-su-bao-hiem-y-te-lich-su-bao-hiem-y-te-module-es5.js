(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-hiem-y-te-lich-su-bao-hiem-y-te-lich-su-bao-hiem-y-te-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-hiem-y-te/lich-su-bao-hiem-y-te/chi-tiet-lich-su-bao-hiem-y-te/chi-tiet-lich-su-bao-hiem-y-te.component.html": 
        /*!*************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-hiem-y-te/lich-su-bao-hiem-y-te/chi-tiet-lich-su-bao-hiem-y-te/chi-tiet-lich-su-bao-hiem-y-te.component.html ***!
          \*************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-16\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[{Title:'Gửi H.Sơ Giám Định BHYT'},\n                {Title:'Gửi Trong Ngày',Path:'/lich-su-bao-hiem-y-te',queryParams: {holdQuery : true}},\n                {Title:'Thông tin chi tiết',Active:true}]\">\n            </vex-breadcrumbs>\n            <app-hot-key [keys]=\"[\n            {Key:'Ctrl + D', Description:'Tải file'},\n            {Key:'Ctrl + S',Description:'Cập nhật hồ sơ'},\n            {Key:'Esc',Description:'Quay lại',End:true}\n            ]\"></app-hot-key>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"-mt-16\">\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div class=\"card\" fxFlex=\"auto\">\n                    <div class=\"px-6 py-4\" fxLayout=\"column\">\n                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                            <app-combobox id=\"ChonVersion\" fxFlex=\"17%\" fxFlex.sm=\"17%\"\n                                [(model)]=\"thongtinbenhnhan.Version\" #comboboxLanGoiBHYT\n                                url=\"BHYT/GetThongTinGoiBHYTVersion/{{thongtinbenhnhan.YeuCauTiepNhanId}}\"\n                                label=\"Thông tin gửi\" class=\"item-no-padding\" [reloadForGrid]=\"true\"\n                                (modelChange)=\"chonLanGuiHoSoGiamDinh($event)\">\n                            </app-combobox>\n                        </div>\n                    </div>\n                    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                        <div class=\"card\" fxFlex=\"auto\">\n                            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                <h2 class=\"title m-0\">Thông tin người bệnh (XML1)</h2>\n                            </div>\n                            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                    fxLayoutGap.lt-sm=\"0\">\n                                    <app-textbox id=\"MaLienKet\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                        maxlength=\"100\" [(model)]=\"thongtinbenhnhan.MaLienKet \" label=\"Mã liên kết\"\n                                        [disabled]=\"true\"\n                                        [validationerror]=\"'MaLienKet' | validationerror:validationErrors\">\n                                    </app-textbox>\n                                    <app-textbox id=\"MaBenhNhan\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                        [disabled]=\"true\" [(model)]=\"thongtinbenhnhan.MaBenhNhan \" label=\"Mã người bệnh\"\n                                        maxlength=\"100\"\n                                        [validationerror]=\"'MaBenhNhan' | validationerror:validationErrors\">\n                                    </app-textbox>\n                                    <app-textbox id=\"HoTen\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                        [upperCase]=\"true\" [disabled]=\"readonly\" [(model)]=\"thongtinbenhnhan.HoTen\"\n                                        label=\"Họ và tên\" maxlength=\"255\"\n                                        [validationerror]=\"'HoTen' | validationerror:validationErrors\">\n                                    </app-textbox>\n                                    <app-datepicker id=\"NgaySinh\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [disabled]=\"readonly\"\n                                        [(model)]=\"thongtinbenhnhan.NgaySinh\" [required]=\"true\" label=\"Ngày sinh\"\n                                        [validationerror]=\"'NgaySinh' | validationerror:validationErrors\">\n                                    </app-datepicker>\n                                    <app-combobox id=\"GioiTinh\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Giới tính\"\n                                        [disabled]=\"readonly\" [required]=\"true\" [data]=\"DataGoiTinh\"\n                                        [(model)]=\"thongtinbenhnhan.GioiTinh\"\n                                        [validationerror]=\"'GioiTinh' | validationerror:validationErrors\"\n                                        class=\"item-no-padding\" [template]=\"khoaKhamTemplate\"\n                                        [templateHeader]=\"khoaKhamTemplateHeader\">\n                                        <ng-template #khoaKhamTemplateHeader let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <th width=\"20%\">Mã</th>\n                                                    <th>Tên</th>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                        <ng-template #khoaKhamTemplate let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <td width=\"20%\">{{dataItem.KeyId}}</td>\n                                                    <td>{{dataItem.DisplayName}}</td>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                    </app-combobox>\n                                    <app-textbox id=\"DiaChi\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                        [disabled]=\"readonly\" [(model)]=\"thongtinbenhnhan.DiaChi\" label=\"Địa chỉ\"\n                                        maxlength=\"1024\"\n                                        [validationerror]=\"'DiaChi' | validationerror:validationErrors\">\n                                    </app-textbox>\n                                    <app-textbox id=\"MaThe\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                        [(model)]=\"thongtinbenhnhan.MaThe\" [disabled]=\"readonly\" label=\"Mã thẻ\"\n                                        maxlength=\"255\" [validationerror]=\"'MaThe' | validationerror:validationErrors\">\n                                    </app-textbox>\n                                    <app-textbox id=\"MaCoSoKCBBanDau\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                        maxlength=\"255\" [(model)]=\"thongtinbenhnhan.MaCoSoKCBBanDau\"\n                                        [disabled]=\"readonly\" label=\"Mã CSKCB ban đầu\"\n                                        [validationerror]=\"'MaCoSoKCBBanDau' | validationerror:validationErrors\">\n                                    </app-textbox>\n                                    <app-datepicker id=\"GiaTriTheTu\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [disabled]=\"readonly\"\n                                        [(model)]=\"thongtinbenhnhan.GiaTriTheTu\" [required]=\"true\"\n                                        label=\"Giá trị thẻ từ\"\n                                        [validationerror]=\"'GiaTriTheTu' | validationerror:validationErrors\">\n                                    </app-datepicker>\n                                    <app-datepicker id=\"GiaTriTheDen\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [disabled]=\"readonly\"\n                                        [(model)]=\"thongtinbenhnhan.GiaTriTheDen\" [required]=\"true\"\n                                        label=\"Giá trị thẻ đến\"\n                                        [validationerror]=\"'GiaTriTheDen' | validationerror:validationErrors\">\n                                    </app-datepicker>\n                                    <app-datepicker id=\"MienCungChiTra\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                        [disabled]=\"readonly\" [(model)]=\"thongtinbenhnhan.MienCungChiTra\"\n                                        label=\"Miễn cùng chi trả\"\n                                        [validationerror]=\"'MienCungChiTra' | validationerror:validationErrors\">\n                                    </app-datepicker>\n                                    <div fxFlex=\"20%\" fxFlex.sm=\"20%\">\n                                        <div fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"d-flex flex-row-reverse\">\n                                            <button class=\"ml-1 mt-2 mr-2\" color=\"primary\" mat-mini-fab kendoTooltip\n                                                title=\"Thêm mã bệnh khác\" type=\"button\"\n                                                (click)=\"showPopupTimTenBenhKhac()\" style=\"padding: 0px !important;\"\n                                                fxFlex=\"none\">\n                                                <mat-icon style=\"color: white;\" [icIcon]=\"icEdit\"></mat-icon>\n                                            </button>\n                                            <app-textarea id=\"TenBenh\" fxFlex=\"100%\" fxFlex.sm=\"100%\" [required]=\"true\"\n                                                [disabled]=\"readonly\" [(model)]=\"thongtinbenhnhan.TenBenh\"\n                                                label=\"Tên bệnh\" maxlength=\"2000\"\n                                                [validationerror]=\"'TenBenh' | validationerror:validationErrors\">\n                                            </app-textarea>\n                                        </div>\n                                    </div>\n                                    <app-textbox id=\"MaBenh\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                        [disabled]=\"readonly\" [(model)]=\"thongtinbenhnhan.MaBenh\" label=\"Mã bệnh\"\n                                        maxlength=\"8\" [validationerror]=\"'MaBenh' | validationerror:validationErrors\">\n                                    </app-textbox>\n                                    <div fxFlex=\"20%\" fxFlex.sm=\"20%\">\n                                        <div fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"d-flex flex-row-reverse\">\n                                            <button class=\"ml-1 mt-2 mr-2\" color=\"primary\" mat-mini-fab kendoTooltip\n                                                title=\"Thêm mã bệnh khác\" type=\"button\"\n                                                (click)=\"showPopupTimMaBenhKhac()\" style=\"padding: 0px !important;\"\n                                                fxFlex=\"none\">\n                                                <mat-icon style=\"color: white;\" [icIcon]=\"icEdit\"></mat-icon>\n                                            </button>\n                                            <app-textbox id=\"MaBenhKhac\" fxFlex=\"100%\" fxFlex.sm=\"100%\" maxlength=\"255\"\n                                                [(model)]=\"thongtinbenhnhan.MaBenhKhac\" label=\"Mã bệnh khác\"\n                                                [disabled]=\"readonly\"\n                                                [validationerror]=\"'MaBenhKhac' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                        </div>\n                                    </div>\n                                    <app-combobox id=\"LyDoVaoVien\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Lý do vào viện\"\n                                        [disabled]=\"readonly\" [required]=\"true\" [data]=\"LyDoRaVien\"\n                                        [(model)]=\"thongtinbenhnhan.LyDoVaoVien\"\n                                        [validationerror]=\"'LyDoVaoVien' | validationerror:validationErrors\"\n                                        class=\"item-no-padding\" [template]=\"khoaKhamTemplate\"\n                                        [templateHeader]=\"khoaKhamTemplateHeader\">\n                                        <ng-template #khoaKhamTemplateHeader let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <th width=\"20%\">Mã</th>\n                                                    <th>Tên</th>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                        <ng-template #khoaKhamTemplate let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <td width=\"20%\">{{dataItem.KeyId}}</td>\n                                                    <td>{{dataItem.DisplayName}}</td>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                    </app-combobox>\n                                    <app-textbox id=\"MaNoiChuyen\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [disabled]=\"readonly\"\n                                        [(model)]=\"thongtinbenhnhan.MaNoiChuyen\" label=\"Mã nội chuyển\" maxlength=\"5\"\n                                        [validationerror]=\"'MaNoiChuyen' | validationerror:validationErrors\">\n                                    </app-textbox>\n                                    <app-combobox id=\"MaTaiNan\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Mã tai nạn\"\n                                        [(model)]=\"thongtinbenhnhan.MaTaiNan\" [data]=\"MaTaiNan\" [disabled]=\"readonly\"\n                                        [validationerror]=\"'MaTaiNan' | validationerror:validationErrors\"\n                                        class=\"item-no-padding\" [template]=\"khoaKhamTemplate\"\n                                        [templateHeader]=\"khoaKhamTemplateHeader\">\n                                        <ng-template #khoaKhamTemplateHeader let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <th width=\"20%\">Mã</th>\n                                                    <th>Tên</th>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                        <ng-template #khoaKhamTemplate let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <td width=\"20%\">{{dataItem.KeyId}}</td>\n                                                    <td>{{dataItem.DisplayName}}</td>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                    </app-combobox>\n                                    <app-datetimepicker id=\"NgayVao\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [disabled]=\"readonly\"\n                                        [(model)]=\"thongtinbenhnhan.NgayVao\" [required]=\"true\" label=\"Ngày vào\"\n                                        [validationerror]=\"'NgayVao' | validationerror:validationErrors\">\n                                    </app-datetimepicker>\n                                    <app-datetimepicker id=\"NgayRa\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [disabled]=\"readonly\"\n                                        [(model)]=\"thongtinbenhnhan.NgayRa\" [required]=\"true\" label=\"Ngày ra\"\n                                        [validationerror]=\"'NgayRa' | validationerror:validationErrors\">\n                                    </app-datetimepicker>\n                                    <app-textboxnumeric id=\"SoNgayDieuTri\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                        [required]=\"true\" min=\"1\" max=\"366\" [(model)]=\"thongtinbenhnhan.SoNgayDieuTri\"\n                                        label=\"Số ngày điều trị\" [disabled]=\"readonly\"\n                                        [validationerror]=\"'SoNgayDieuTri' | validationerror:validationErrors\">\n                                    </app-textboxnumeric>\n                                    <app-combobox id=\"KetQuaDieuTri\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                        label=\"Kết quả điều trị\" [(model)]=\"thongtinbenhnhan.KetQuaDieuTri\"\n                                        [data]=\"KetQuaDieuTri\" [disabled]=\"readonly\"\n                                        [validationerror]=\"'KetQuaDieuTri' | validationerror:validationErrors\"\n                                        class=\"item-no-padding\" [template]=\"khoaKhamTemplate\"\n                                        [templateHeader]=\"khoaKhamTemplateHeader\">\n                                        <ng-template #khoaKhamTemplateHeader let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <th width=\"20%\">Mã</th>\n                                                    <th>Tên</th>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                        <ng-template #khoaKhamTemplate let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <td width=\"20%\">{{dataItem.KeyId}}</td>\n                                                    <td>{{dataItem.DisplayName}}</td>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                    </app-combobox>\n                                    <app-combobox id=\"TinhTrangRaVien\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                        label=\"Tình trạng ra viện\" [data]=\"TinhTrangRaVien\"\n                                        [(model)]=\"thongtinbenhnhan.TinhTrangRaVien\" [disabled]=\"readonly\"\n                                        [validationerror]=\"'TinhTrangRaVien' | validationerror:validationErrors\"\n                                        class=\"item-no-padding\" [template]=\"khoaKhamTemplate\"\n                                        [templateHeader]=\"khoaKhamTemplateHeader\">\n                                        <ng-template #khoaKhamTemplateHeader let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <th width=\"20%\">Mã</th>\n                                                    <th>Tên</th>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                        <ng-template #khoaKhamTemplate let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <td width=\"20%\">{{dataItem.KeyId}}</td>\n                                                    <td>{{dataItem.DisplayName}}</td>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                    </app-combobox>\n                                    <app-datetimepicker id=\"NgayThanhToan\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                        [disabled]=\"readonly\" [(model)]=\"thongtinbenhnhan.NgayThanhToan\"\n                                        label=\"Ngày thanh toán\"\n                                        [validationerror]=\"'NgayThanhToan' | validationerror:validationErrors\">\n                                    </app-datetimepicker>\n                                    <app-textboxnumeric id=\"TienThuoc\" fxFlex=\"20%\" fxFlex.sm=\"40%\" min=\"0\"\n                                        [disabled]=\"true\" [(model)]=\"thongtinbenhnhan.TienThuoc\" label=\"Tiền thuốc\"\n                                        [decimals]=\"2\" format=\"n2\"\n                                        [validationerror]=\"'TienThuoc' | validationerror:validationErrors\">\n                                    </app-textboxnumeric>\n                                    <app-textboxnumeric id=\"TienVatTuYTe\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                        [(model)]=\"thongtinbenhnhan.TienVatTuYTe\" [disabled]=\"true\"\n                                        label=\"Tiền Vật tư Y tế\" [decimals]=\"2\" format=\"n2\" min=\"0\"\n                                        [validationerror]=\"'TienVatTuYTe' | validationerror:validationErrors\">\n                                    </app-textboxnumeric>\n                                    <app-textboxnumeric id=\"TienTongChi\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                        [decimals]=\"2\" format=\"n2\" min=\"0\" [(model)]=\"thongtinbenhnhan.TienTongChi\"\n                                        label=\"Tiền tổng chi\" [disabled]=\"true\"\n                                        [validationerror]=\"'TienTongChi' | validationerror:validationErrors\">\n                                    </app-textboxnumeric>\n                                    <app-textboxnumeric id=\"TienBenhNhanTuTra\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                        [(model)]=\"thongtinbenhnhan.TienBenhNhanTuTra\"\n                                        label=\"Tiền người bệnh thanh toán\" [decimals]=\"2\" format=\"n2\" min=\"0\"\n                                        [disabled]=\"readonly\"\n                                        [validationerror]=\"'TienBenhNhanTuTra' | validationerror:validationErrors\">\n                                    </app-textboxnumeric>\n                                    <app-textboxnumeric id=\"TienBenhNhanCungChiTra\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                        [decimals]=\"2\" format=\"n2\" min=\"0\"\n                                        [(model)]=\"thongtinbenhnhan.TienBenhNhanCungChiTra\"\n                                        label=\"Tiền người bệnh cùng chi trả\" [decimals]=\"2\" [disabled]=\"true\"\n                                        [validationerror]=\"'TienBenhNhanCungChiTra' | validationerror:validationErrors\">\n                                    </app-textboxnumeric>\n                                    <app-textboxnumeric id=\"TienBaoHiemThanhToan\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                        [required]=\"true\" [decimals]=\"2\" format=\"n2\" min=\"0\" [disabled]=\"true\"\n                                        [(model)]=\"thongtinbenhnhan.TienBaoHiemThanhToan\"\n                                        label=\"Tiền bảo hiểm thanh toán\"\n                                        [validationerror]=\"'TienBaoHiemThanhToan' | validationerror:validationErrors\">\n                                    </app-textboxnumeric>\n                                    <app-textboxnumeric id=\"TienNguonKhac\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                        [(model)]=\"thongtinbenhnhan.TienNguonKhac\" label=\"Tiền nguồn khác\"\n                                        [decimals]=\"2\" format=\"n2\" min=\"0\" [disabled]=\"true\"\n                                        [validationerror]=\"'TienNguonKhac' | validationerror:validationErrors\">\n                                    </app-textboxnumeric>\n                                    <app-textboxnumeric id=\"TienNgoaiDanhSach\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                        [(model)]=\"thongtinbenhnhan.TienNgoaiDinhSuat\" label=\"Tiền ngoài danh sách\"\n                                        [decimals]=\"2\" format=\"n2\" min=\"0\" [disabled]=\"true\"\n                                        [validationerror]=\"'TienNgoaiDanhSach' | validationerror:validationErrors\">\n                                    </app-textboxnumeric>\n                                    <app-textboxnumeric id=\"NamQuyetToan\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                        min=\"1900\" max=\"2090\" [(model)]=\"thongtinbenhnhan.NamQuyetToan\"\n                                        label=\"Năm quyết toán\" type=\"number\" format=\"#\" [disabled]=\"readonly\"\n                                        [validationerror]=\"'NamQuyetToan' | validationerror:validationErrors\">\n                                    </app-textboxnumeric>\n                                    <app-textboxnumeric id=\"ThangQuyetToan\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                        [required]=\"true\" min=\"1\" max=\"12\" [(model)]=\"thongtinbenhnhan.ThangQuyetToan\"\n                                        label=\"Tháng quyết toán\" type=\"number\" format=\"#\" [disabled]=\"readonly\"\n                                        [validationerror]=\"'ThangQuyetToan' | validationerror:validationErrors\">\n                                    </app-textboxnumeric>\n                                    <app-combobox id=\"MaLoaiKCB\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Mã loại KCB\"\n                                        [required]=\"true\" [(model)]=\"thongtinbenhnhan.MaLoaiKCB\" [data]=\"MaLoaiKCB\"\n                                        [validationerror]=\"'MaLoaiKCB' | validationerror:validationErrors\"\n                                        [disabled]=\"readonly\" class=\"item-no-padding\" [template]=\"khoaKhamTemplate\"\n                                        [templateHeader]=\"khoaKhamTemplateHeader\">\n                                        <ng-template #khoaKhamTemplateHeader let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <th width=\"20%\">Mã</th>\n                                                    <th>Tên</th>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                        <ng-template #khoaKhamTemplate let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <td width=\"20%\">{{dataItem.KeyId}}</td>\n                                                    <td>{{dataItem.DisplayName}}</td>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                    </app-combobox>\n                                    <app-textbox id=\"MaKhoa\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                        [(model)]=\"thongtinbenhnhan.MaKhoa\" [disabled]=\"readonly\" label=\"Mã khoa\"\n                                        maxlength=\"15\" [validationerror]=\"'MaKhoa' | validationerror:validationErrors\">\n                                    </app-textbox>\n                                    <app-textbox id=\"MaCSKCB\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                        [(model)]=\"thongtinbenhnhan.MaCSKCB\" [disabled]=\"readonly\" label=\"Mã CSKCB\"\n                                        maxlength=\"5\" [validationerror]=\"'MaCSKCB' | validationerror:validationErrors\">\n                                    </app-textbox>\n                                    <app-textbox id=\"MaKhuVuc\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                        [(model)]=\"thongtinbenhnhan.MaKhuVuc\" [disabled]=\"readonly\" label=\"Mã Khu vực\"\n                                        [validationerror]=\"'MaKhuVuc' | validationerror:validationErrors\">\n                                    </app-textbox>\n                                    <app-textbox id=\"MaPhauThuatQuocTe\" fxFlex=\"20%\" fxFlex.sm=\"40%\" maxlength=\"255\"\n                                        [(model)]=\"thongtinbenhnhan.MaPhauThuatQuocTe\" [disabled]=\"readonly\"\n                                        label=\"Mã PTQT\"\n                                        [validationerror]=\"'MaPhauThuatQuocTe' | validationerror:validationErrors\">\n                                    </app-textbox>\n                                    <app-textboxnumeric id=\"CanNang\" fxFlex=\"20%\" fxFlex.sm=\"40%\" min=\"1\" max=\"200\"\n                                        [(model)]=\"thongtinbenhnhan.CanNang\" label=\"Cân nặng\" [decimals]=\"2\"\n                                        format=\"#.##\" [validationerror]=\"'CanNang' | validationerror:validationErrors\">\n                                    </app-textboxnumeric>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"card\" fxFlex=\"auto\">\n                            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                <h2 class=\"title m-0\">Hồ sơ thuốc (XML2)</h2>\n\n                                <a (click)=\"clickShowPopupTimMaBS()\"\n                                    style=\"color: blue; font-size: 21px;margin-left: 22px;\">Chọn mã bác sĩ</a>\n                                <button class=\"ml-1 mt-1 mr-2\" color=\"primary\" mat-mini-fab kendoTooltip\n                                    title=\"Chọn mã bác sĩ\" type=\"button\" (click)=\"clickShowPopupTimMaBS()\"\n                                    style=\"padding: 0px !important;\" fxFlex=\"none\">\n                                    <mat-icon style=\"color: white;\" [icIcon]=\"icEdit\"></mat-icon>\n                                </button>\n\n                                <a (click)=\"AddNewThuoc()\" style=\"position: absolute; right: 68px; color:blue\"><i\n                                        class=\"k-icon k-i-plus-outline\"></i>Thêm</a>\n                            </div>\n                            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px\"\n                                    fxLayoutGap.lt-sm=\"0\"\n                                    *ngFor=\"let item of thongtinbenhnhan.HoSoChiTietThuoc; let i = index\">\n                                    <div class=\"card\" fxFlex=\"column\" style=\"padding:22px;\" fxFlex=\"100%\">\n                                        <button class=\"k-icon k-i-delete\"\n                                            style=\"margin-bottom: 5px;color:red;float: right;display: block;position: relative;\"\n                                            (click)=\"DeleteVitri(i)\"></button>\n                                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                            fxLayoutGap.lt-sm=\"0\">\n                                            <app-textbox id=\"MaThuoc\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                                [(model)]=\"item.MaThuoc \" maxlength=\"255\" label=\"Mã thuốc\"\n                                                [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoSoChiTietThuoc['+i+'].MaThuoc' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-combobox id=\"MaNhom\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Mã nhóm\"\n                                                [required]=\"true\" [(model)]=\"item.MaNhom\" [data]=\"MaNhom\"\n                                                [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoSoChiTietThuoc['+i+'].MaNhom' | validationerror:validationErrors\"\n                                                class=\"item-no-padding\" [template]=\"khoaKhamTemplate\"\n                                                [templateHeader]=\"khoaKhamTemplateHeader\">\n                                                <ng-template #khoaKhamTemplateHeader let-dataItem>\n                                                    <table width=\"100%\" class=\"table-combobox\">\n                                                        <tr>\n                                                            <th width=\"20%\">Mã</th>\n                                                            <th>Tên</th>\n                                                        </tr>\n                                                    </table>\n                                                </ng-template>\n                                                <ng-template #khoaKhamTemplate let-dataItem>\n                                                    <table width=\"100%\" class=\"table-combobox\">\n                                                        <tr>\n                                                            <td width=\"20%\">{{dataItem.KeyId}}</td>\n                                                            <td>{{dataItem.DisplayName}}</td>\n                                                        </tr>\n                                                    </table>\n                                                </ng-template>\n                                            </app-combobox>\n\n                                            <app-textbox id=\"TenThuoc\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                                [(model)]=\"item.TenThuoc\" maxlength=\"1024\" label=\"Tên thuốc\"\n                                                [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoSoChiTietThuoc['+i+'].TenThuoc' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-textbox id=\"DonViTinh\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                                maxlength=\"50\" [(model)]=\"item.DonViTinh\" label=\"Đơn vị tính\"\n                                                [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoSoChiTietThuoc['+i+'].DonViTinh' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-textbox id=\"HamLuong\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [disabled]=\"readonly\" [(model)]=\"item.HamLuong\" maxlength=\"1024\"\n                                                label=\"Hàm lượng\"\n                                                [validationerror]=\"'HamLuong' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-textbox id=\"DuongDung\" fxFlex=\"20%\" fxFlex.sm=\"40%\" maxlength=\"4\"\n                                                [(model)]=\"item.DuongDung\" label=\"Đường Dùng\" [disabled]=\"readonly\"\n                                                [validationerror]=\"'DuongDung' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-textbox id=\"LieuDung\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [disabled]=\"readonly\" [(model)]=\"item.LieuDung\" maxlength=\"255\"\n                                                label=\"Liều dùng\"\n                                                [validationerror]=\"'LieuDung' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-textbox id=\"SoDangKy\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [disabled]=\"readonly\" [(model)]=\"item.SoDangKy\" maxlength=\"255\"\n                                                label=\"Số đăng ký\"\n                                                [validationerror]=\"'HoSoChiTietThuoc['+i+'].SoDangKy' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-textboxnumeric id=\"SoLuong\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [required]=\"true\" max=\"999999999999999\" [(model)]=\"item.SoLuong\"\n                                                label=\"Số lượng\" type=\"number\" format=\"#.###\" [disabled]=\"readonly\"\n                                                (modelChange)=\"ChangeSoLuongDichVuKyThuat($event, item)\" [decimals]=\"2\"\n                                                [validationerror]=\"'HoSoChiTietThuoc['+i+'].SoLuong' | validationerror:validationErrors\">\n                                            </app-textboxnumeric>\n                                            <app-textboxnumeric id=\"DonGia\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [required]=\"true\" [decimals]=\"2\" min=\"1\" max=\"999999999999999\"\n                                                [disabled]=\"readonly\" [(model)]=\"item.DonGia\" label=\"Đơn giá\"\n                                                type=\"number\" format=\"#.###\"\n                                                (modelChange)=\"ChangeDonGiaDichVuKyThuat($event, item)\"\n                                                [validationerror]=\"'HoSoChiTietThuoc['+i+'].DonGia' | validationerror:validationErrors\">\n                                            </app-textboxnumeric>\n                                            <app-textboxnumeric id=\"TyLeThanhToan\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [disabled]=\"readonly\" [required]=\"true\" min=\"0\" max=\"100\"\n                                                [(model)]=\"item.TyLeThanhToan\" label=\"Tỷ lệ thanh toán\" type=\"number\"\n                                                format=\"#\" (modelChange)=\"ChangeTyLeThanhToanDichVuKyThuat($event, item)\"\n                                                [validationerror]=\"'HoSoChiTietThuoc['+i+'].TyLeThanhToan' | validationerror:validationErrors\">\n                                            </app-textboxnumeric>\n                                            <app-textboxnumeric id=\"ThanhTien\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [disabled]=\"true\" [required]=\"true\"\n                                                (modelChange)=\"congThucTienBaoHiemThanhToanXML2(item)\"\n                                                [(model)]=\"item.ThanhTien\" label=\"Thành tiền\" type=\"number\"\n                                                [decimals]=\"2\" format=\"n2\" min=\"0\"\n                                                [validationerror]=\"'HoSoChiTietThuoc['+i+'].ThanhTien' | validationerror:validationErrors\">\n                                            </app-textboxnumeric>\n                                            <app-textbox id=\"MaKhoa\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                                [(model)]=\"item.MaKhoa\" maxlength=\"15\" label=\"Mã Khoa\"\n                                                [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoSoChiTietThuoc['+i+'].MaKhoa' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-textbox id=\"MaBacSi\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                                [(model)]=\"item.MaBacSi\" maxlength=\"255\" label=\"Mã bác sĩ\"\n                                                [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoSoChiTietThuoc['+i+'].MaBacSi' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-textbox id=\"MaBenh\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                                [(model)]=\"item.MaBenh\" maxlength=\"255\" label=\"Mã bệnh\"\n                                                [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoSoChiTietThuoc['+i+'].MaBenh' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-datetimepicker id=\"NgayYLenh\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [(model)]=\"item.NgayYLenh\" [required]=\"true\" label=\"Ngày Y lệnh\"\n                                                [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoSoChiTietThuoc['+i+'].NgayYLenh' | validationerror:validationErrors\">\n                                            </app-datetimepicker>\n                                            <app-textbox id=\"ThongTinThau\" fxFlex=\"20%\" fxFlex.sm=\"40%\" maxlength=\"255\"\n                                                [(model)]=\"item.ThongTinThau\" label=\"Thông tin thầu\"\n                                                [disabled]=\"readonly\"\n                                                [validationerror]=\"'ThongTinThau' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-textboxnumeric id=\"PhamVi\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [required]=\"true\" min=\"1\" max=\"2\" [(model)]=\"item.PhamVi\"\n                                                label=\"Phạm vi\" type=\"number\" format=\"#\" [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoSoChiTietThuoc['+i+'].PhamVi' | validationerror:validationErrors\">\n                                            </app-textboxnumeric>\n                                            <app-textboxnumeric id=\"MucHuong\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [required]=\"true\" min=\"0\" max=\"100\" [(model)]=\"item.MucHuong\"\n                                                label=\"Mức hưởng\" type=\"number\" format=\"#\" [disabled]=\"readonly\"\n                                                (modelChange)=\"congThucTienBaoHiemThanhToanXML2(item)\"\n                                                [validationerror]=\"'HoSoChiTietThuoc['+i+'].MucHuong' | validationerror:validationErrors\">\n                                            </app-textboxnumeric>\n                                            <app-textboxnumeric id=\"TienBenhNhanTuTra\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                min=\"0\" [decimals]=\"2\" [(model)]=\"item.TienBenhNhanTuTra\"\n                                                label=\"Tiền người bệnh thanh toán\" type=\"number\" format=\"#.##\"\n                                                [disabled]=\"readonly\"\n                                                (modelChange)=\"congThucTienBaoHiemThanhToanXML2(item)\"\n                                                [validationerror]=\"'HoSoChiTietThuoc['+i+'].TienBenhNhanTuTra' | validationerror:validationErrors\">\n                                            </app-textboxnumeric>\n                                            <app-textboxnumeric id=\"TienNguonKhac\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [decimals]=\"2\" [(model)]=\"item.TienNguonKhac\" label=\"Tiền nguồn khác\"\n                                                type=\"number\" format=\"#.##\" [disabled]=\"readonly\"\n                                                (modelChange)=\"congThucTienBaoHiemThanhToanXML2(item)\"\n                                                [validationerror]=\"'HoSoChiTietThuoc['+i+'].TienNguonKhac' | validationerror:validationErrors\">\n                                            </app-textboxnumeric>\n                                            <app-textboxnumeric id=\"TienBaoHiemThanhToan\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [required]=\"true\" [(model)]=\"item.TienBaoHiemThanhToan\"\n                                                label=\"Tiền bảo hiểm thanh toán\" [decimals]=\"2\" format=\"n2\"\n                                                [disabled]=\"true\"\n                                                [validationerror]=\"'HoSoChiTietThuoc['+i+'].TienBaoHiemThanhToan' | validationerror:validationErrors\">\n                                            </app-textboxnumeric>\n                                            <app-textboxnumeric id=\"TienBenhNhanCungChiTra\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [(model)]=\"item.TienBenhNhanCungChiTra\" label=\"Tiền NB cùng chi trả\"\n                                                [decimals]=\"2\" format=\"n2\" [disabled]=\"true\"\n                                                [validationerror]=\"'HoSoChiTietThuoc['+i+'].TienBenhNhanCungChiTra' | validationerror:validationErrors\">\n                                            </app-textboxnumeric>\n                                            <app-textboxnumeric id=\"TienNgoaiDanhSach\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [decimals]=\"2\" [(model)]=\"item.TienNgoaiDinhSuat\"\n                                                (modelChange)=\"totalTienNguoiBenhXML1()\" label=\"Tiền ngoài danh sách\"\n                                                type=\"number\" format=\"#.##\" [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoSoChiTietThuoc['+i+'].TienNgoaiDanhSach' | validationerror:validationErrors\">\n                                            </app-textboxnumeric>\n                                            <app-combobox id=\"MaPhuongThucThanhToan\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                label=\"Mã Phương thức thanh toán\" [required]=\"true\"\n                                                [disabled]=\"readonly\" [data]=\"MaPhuongThucThanhToan\"\n                                                [(model)]=\"item.MaPhuongThucThanhToan\"\n                                                [validationerror]=\"'HoSoChiTietThuoc['+i+'].MaPhuongThucThanhToan' | validationerror:validationErrors\"\n                                                class=\"item-no-padding\" [template]=\"khoaKhamTemplate\"\n                                                [templateHeader]=\"khoaKhamTemplateHeader\">\n                                                <ng-template #khoaKhamTemplateHeader let-dataItem>\n                                                    <table width=\"100%\" class=\"table-combobox\">\n                                                        <tr>\n                                                            <th width=\"20%\">Mã</th>\n                                                            <th>Tên</th>\n                                                        </tr>\n                                                    </table>\n                                                </ng-template>\n                                                <ng-template #khoaKhamTemplate let-dataItem>\n                                                    <table width=\"100%\" class=\"table-combobox\">\n                                                        <tr>\n                                                            <td width=\"20%\">{{dataItem.KeyId}}</td>\n                                                            <td>{{dataItem.DisplayName}}</td>\n                                                        </tr>\n                                                    </table>\n                                                </ng-template>\n                                            </app-combobox>\n                                            <br />\n                                        </div>\n                                    </div>\n                                    <div style=\"padding-top: 10px;\"></div>\n                                    <div></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"card\" fxFlex=\"auto\">\n                            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                <h2 class=\"title m-0\">Dịch vụ kỹ thuật (XML3)</h2>\n                                <a (click)=\"AddDichVuKyThuat()\" style=\"position: absolute; right: 68px; color:blue\"><i\n                                        class=\"k-icon k-i-plus-outline\"></i>Thêm</a>\n                            </div>\n                            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px\"\n                                    fxLayoutGap.lt-sm=\"0\"\n                                    *ngFor=\"let item of thongtinbenhnhan.HoSoChiTietDVKT; let i = index\">\n                                    <div class=\"card\" fxFlex=\"column\" style=\"padding:22px;\" fxFlex=\"100%\">\n                                        <button class=\"k-icon k-i-delete\"\n                                            style=\"margin-bottom: 5px;color:red;float: right;display: block;position: relative;\"\n                                            (click)=\"DeleteVitriDVKT(i)\"></button>\n                                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                            fxLayoutGap.lt-sm=\"0\">\n                                            <app-textbox id=\"MaDichVu\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [(model)]=\"item.MaDichVu \" maxlength=\"255\" label=\"Mã dịch vụ\"\n                                                [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoSoChiTietDVKT['+i+'].MaDichVu' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-textbox id=\"MaVatTu\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [(model)]=\"item.MaVatTu\" maxlength=\"255\" label=\"Mã vật tư\"\n                                                [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoSoChiTietDVKT['+i+'].MaVatTu' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-combobox id=\"MaNhom\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Mã nhóm\"\n                                                [required]=\"true\" [data]=\"MaNhomDVKT\" [(model)]=\"item.MaNhom\"\n                                                [modelText]=\"item.MaNhomText\" [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoSoChiTietDVKT['+i+'].MaNhom' | validationerror:validationErrors\"\n                                                class=\"item-no-padding\" [template]=\"khoaKhamTemplate\"\n                                                [templateHeader]=\"khoaKhamTemplateHeader\"\n                                                (modelChange)=\"modelChangeMaNhomDVKT($event)\">\n                                                <ng-template #khoaKhamTemplateHeader let-dataItem>\n                                                    <table width=\"100%\" class=\"table-combobox\">\n                                                        <tr>\n                                                            <th width=\"20%\">Mã</th>\n                                                            <th>Tên</th>\n                                                        </tr>\n                                                    </table>\n                                                </ng-template>\n                                                <ng-template #khoaKhamTemplate let-dataItem>\n                                                    <table width=\"100%\" class=\"table-combobox\">\n                                                        <tr>\n                                                            <td width=\"20%\">{{dataItem.KeyId}}</td>\n                                                            <td>{{dataItem.DisplayName}}</td>\n                                                        </tr>\n                                                    </table>\n                                                </ng-template>\n                                            </app-combobox>\n                                            <app-textbox id=\"GoiVatTuYTe\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [(model)]=\"item.GoiVatTuYTe\" label=\"Gói vật tư\" [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoSoChiTietDVKT['+i+'].GoiVatTuYTe' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-textbox id=\"TenVatTu\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [(model)]=\"item.TenVatTu\" maxlength=\"1024\" label=\"Tên vật tư\"\n                                                [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoSoChiTietDVKT['+i+'].TenVatTu' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-textbox id=\"TenDichVu\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [(model)]=\"item.TenDichVu\" label=\"Tên dịch vụ\" maxlength=\"1024\"\n                                                [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoSoChiTietDVKT['+i+'].TenDichVu' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-textbox id=\"DonViTinh\" fxFlex=\"20%\" fxFlex.sm=\"40%\" maxlength=\"50\"\n                                                [(model)]=\"item.DonViTinh\" label=\"Đơn vị tính\" [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoSoChiTietDVKT['+i+'].DonViTinh' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-textboxnumeric id=\"PhamVi\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [required]=\"true\" min=\"1\" max=\"2\" [(model)]=\"item.PhamVi\"\n                                                label=\"Phạm vi\" type=\"number\" format=\"#\" [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoSoChiTietDVKT['+i+'].PhamVi' | validationerror:validationErrors\">\n                                            </app-textboxnumeric>\n                                            <app-textboxnumeric id=\"SoLuong\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [required]=\"true\" max=\"999999999999999\" [(model)]=\"item.SoLuong\"\n                                                label=\"Số lượng\" type=\"number\" format=\"#.###\" [decimals]=\"2\"\n                                                [disabled]=\"readonly\"\n                                                (modelChange)=\"ChangeSoLuongHoSoThuoc($event, item)\"\n                                                [validationerror]=\"'HoSoChiTietDVKT['+i+'].SoLuong' | validationerror:validationErrors\">\n                                            </app-textboxnumeric>\n                                            <app-textboxnumeric id=\"DonGia\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [required]=\"true\" min=\"1\" max=\"999999999999999\" [(model)]=\"item.DonGia\"\n                                                label=\"Đơn giá\" type=\"number\" format=\"#.###\" [decimals]=\"2\"\n                                                [disabled]=\"readonly\"\n                                                (modelChange)=\"ChangeDonGiaHoSoThuoc($event, item)\"\n                                                [validationerror]=\"'HoSoChiTietDVKT['+i+'].DonGia' | validationerror:validationErrors\">\n                                            </app-textboxnumeric>\n                                            <app-textbox id=\"ThongTinThau\" fxFlex=\"20%\" fxFlex.sm=\"40%\" maxlength=\"255\"\n                                                [(model)]=\"item.ThongTinThau\" label=\"Thông tin thầu\"\n                                                [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoSoChiTietDVKT['+i+'].ThongTinThau' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-textboxnumeric id=\"TyLeThanhToan\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [required]=\"true\" min=\"0\" max=\"100\" [(model)]=\"item.TyLeThanhToan\"\n                                                label=\"Tỷ lệ thanh toán\" type=\"number\" format=\"#\" [disabled]=\"readonly\"\n                                                (modelChange)=\"ChangeTyLeThanhToanHoSoThuoc($event, item)\"\n                                                [validationerror]=\"'HoSoChiTietDVKT['+i+'].TyLeThanhToan' | validationerror:validationErrors\">\n                                            </app-textboxnumeric>\n                                            <app-textboxnumeric id=\"ThanhTien\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [required]=\"true\" min=\"0\" [(model)]=\"item.ThanhTien\" label=\"Thành tiền\"\n                                                type=\"number\" format=\"n2\" [decimals]=\"2\" [disabled]=\"true\"\n                                                (modelChange)=\"congThucTienBaoHiemThanhToanXML3(item)\"\n                                                [validationerror]=\"'HoSoChiTietDVKT['+i+'].ThanhTien' | validationerror:validationErrors\">\n                                            </app-textboxnumeric>\n                                            <app-textboxnumeric id=\"TienThanhToanToiDa\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                min=\"0\" [(model)]=\"item.TienThanhToanToiDa\"\n                                                label=\"Mức thanh toán tối đa\" type=\"number\" format=\"#.##\" [decimals]=\"2\"\n                                                [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoSoChiTietDVKT['+i+'].TienThanhToanToiDa' | validationerror:validationErrors\">\n                                            </app-textboxnumeric>\n                                            <app-textboxnumeric id=\"MucHuong\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [required]=\"true\" min=\"0\" max=\"100\" [(model)]=\"item.MucHuong\"\n                                                label=\"Mức hưởng\" type=\"number\" format=\"#\" [disabled]=\"readonly\"\n                                                (modelChange)=\"congThucTienBaoHiemThanhToanXML3(item)\"\n                                                [validationerror]=\"'HoSoChiTietDVKT['+i+'].MucHuong' | validationerror:validationErrors\">\n                                            </app-textboxnumeric>\n                                            <app-textboxnumeric id=\"TienNguonKhac\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [(model)]=\"item.TienNguonKhac\" label=\"Tiền nguồn khác\" type=\"number\"\n                                                format=\"#.##\" [decimals]=\"2\" [disabled]=\"readonly\"\n                                                (modelChange)=\"congThucTienBaoHiemThanhToanXML3(item)\"\n                                                [validationerror]=\"'HoSoChiTietDVKT['+i+'].TienNguonKhac' | validationerror:validationErrors\">\n                                            </app-textboxnumeric>\n                                            <app-textboxnumeric id=\"TienBenhNhanTuTra\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                min=\"0\" [(model)]=\"item.TienBenhNhanTuTra\"\n                                                label=\"Tiền người bệnh thanh toán\" type=\"number\" format=\"#.##\"\n                                                [decimals]=\"2\" [disabled]=\"readonly\"\n                                                (modelChange)=\"congThucTienBaoHiemThanhToanXML3(item)\"\n                                                [validationerror]=\"'HoSoChiTietDVKT['+i+'].TienBenhNhanTuTra' | validationerror:validationErrors\">\n                                            </app-textboxnumeric>\n                                            <app-textboxnumeric id=\"TienBaoHiemThanhToan\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [required]=\"true\" [(model)]=\"item.TienBaoHiemThanhToan\"\n                                                label=\"Tiền bảo hiểm thanh toán\" type=\"number\" [decimals]=\"2\"\n                                                format=\"n2\" [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoSoChiTietDVKT['+i+'].TienBaoHiemThanhToan' | validationerror:validationErrors\">\n                                            </app-textboxnumeric>\n                                            <app-textboxnumeric id=\"TienBenhNhanCungChiTra\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [(model)]=\"item.TienBenhNhanCungChiTra\" label=\"Tiền NB cùng chi trả\"\n                                                type=\"number\" [decimals]=\"2\" format=\"n2\" [disabled]=\"true\"\n                                                [validationerror]=\"'HoSoChiTietDVKT['+i+'].TienBenhNhanCungChiTra' | validationerror:validationErrors\">\n                                            </app-textboxnumeric>\n                                            <app-textboxnumeric id=\"TienNgoaiDanhSach\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [(model)]=\"item.TienNgoaiDinhSuat\" label=\"Tiền ngoài danh sách\"\n                                                type=\"number\" format=\"#.##\" [disabled]=\"readonly\"\n                                                (modelChange)=\"totalTienNguoiBenhXML1()\"\n                                                [validationerror]=\"'HoSoChiTietDVKT['+i+'].TienNgoaiDanhSach' | validationerror:validationErrors\">\n                                            </app-textboxnumeric>\n                                            <app-textbox id=\"MaKhoa\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                                [(model)]=\"item.MaKhoa\" maxlength=\"15\" label=\"Mã khoa\"\n                                                [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoSoChiTietDVKT['+i+'].MaKhoa' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-textbox id=\"MaGiuong\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [(model)]=\"item.MaGiuong\" maxlength=\"14\" label=\"Mã Giường\"\n                                                [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoSoChiTietDVKT['+i+'].MaGiuong' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-textbox id=\"MaBacSi\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                                [(model)]=\"item.MaBacSi\" maxlength=\"255\" label=\"Mã bác sĩ\"\n                                                [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoSoChiTietDVKT['+i+'].MaBacSi' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-textbox id=\"MaBenh\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                                [(model)]=\"item.MaBenh\" maxlength=\"255\" label=\"Mã bệnh\"\n                                                [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoSoChiTietDVKT['+i+'].MaBenh' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-datetimepicker id=\"NgayYLenh\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [(model)]=\"item.NgayYLenh\" [required]=\"true\" label=\"Ngày Y lệnh\"\n                                                [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoSoChiTietDVKT['+i+'].NgayYLenh' | validationerror:validationErrors\">\n                                            </app-datetimepicker>\n                                            <app-datetimepicker id=\"NgayKetQua\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [(model)]=\"item.NgayKetQua\" label=\"Ngày kết quả\"\n                                                [validationerror]=\"'HoSoChiTietDVKT['+i+'].NgayKetQua' | validationerror:validationErrors\">\n                                            </app-datetimepicker>\n                                            <app-combobox id=\"MaPhuongThucThanhToan\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                label=\"Mã Phương thức thanh toán\" [required]=\"true\"\n                                                [data]=\"MaPhuongThucThanhToan\" [(model)]=\"item.MaPhuongThucThanhToan\"\n                                                [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoSoChiTietDVKT['+i+'].MaPhuongThucThanhToan' | validationerror:validationErrors\"\n                                                class=\"item-no-padding\" [template]=\"khoaKhamTemplate\"\n                                                [templateHeader]=\"khoaKhamTemplateHeader\">\n                                                <ng-template #khoaKhamTemplateHeader let-dataItem>\n                                                    <table width=\"100%\" class=\"table-combobox\">\n                                                        <tr>\n                                                            <th width=\"20%\">Mã</th>\n                                                            <th>Tên</th>\n                                                        </tr>\n                                                    </table>\n                                                </ng-template>\n                                                <ng-template #khoaKhamTemplate let-dataItem>\n                                                    <table width=\"100%\" class=\"table-combobox\">\n                                                        <tr>\n                                                            <td width=\"20%\">{{dataItem.KeyId}}</td>\n                                                            <td>{{dataItem.DisplayName}}</td>\n                                                        </tr>\n                                                    </table>\n                                                </ng-template>\n                                            </app-combobox>\n                                            <br />\n                                        </div>\n                                    </div>\n                                    <div style=\"padding-top: 10px;\"></div>\n                                    <div></div>\n\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"card\" fxFlex=\"auto\">\n                            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                <h2 class=\"title m-0\">Dịch vụ kỹ thuật cận lâm sàng (XML4)</h2>\n                                <a (click)=\"AddDichVuKyThuatCanLamSang()\"\n                                    style=\"position: absolute; right: 68px; color:blue\"><i\n                                        class=\"k-icon k-i-plus-outline\"></i>Thêm</a>\n                            </div>\n                            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px\"\n                                    fxLayoutGap.lt-sm=\"0\"\n                                    *ngFor=\"let item of thongtinbenhnhan.HoSoCanLamSang; let i = index\">\n                                    <div class=\"card\" fxFlex=\"column\" style=\"padding:22px;\" fxFlex=\"100%\">\n                                        <button class=\"k-icon k-i-delete\"\n                                            style=\"margin-bottom: 5px;color:red;float: right;display: block;position: relative;\"\n                                            (click)=\"DeleteVitrilamsang(i)\"></button>\n                                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                            fxLayoutGap.lt-sm=\"0\">\n                                            <app-textbox id=\"MaDichVu\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                                [(model)]=\"item.MaDichVu \" maxlength=\"50\" label=\"Mã dịch vụ\"\n                                                [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoSoCanLamSang['+i+'].MaDichVu' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-textbox id=\"MaChiSo\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [(model)]=\"item.MaChiSo\" maxlength=\"50\" label=\"Mã chỉ số\"\n                                                [disabled]=\"readonly\"\n                                                [validationerror]=\"'MaChiSo' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-textbox id=\"TenChiSo\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [(model)]=\"item.TenChiSo\" maxlength=\"255\" label=\"Tên chỉ số\"\n                                                [disabled]=\"readonly\"\n                                                [validationerror]=\"'TenChiSo' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-textbox id=\"GiaTri\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [(model)]=\"item.GiaTri\" maxlength=\"255\" label=\"Giá trị\"\n                                                [disabled]=\"readonly\"\n                                                [validationerror]=\"'GiaTri' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-textbox id=\"MaMay\" fxFlex=\"20%\" fxFlex.sm=\"40%\" maxlength=\"50\"\n                                                [(model)]=\"item.MaMay\" label=\"Mã máy\" [disabled]=\"readonly\"\n                                                [validationerror]=\"'MaMay' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-textbox id=\"MoTa\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [(model)]=\"item.MoTa\"\n                                                maxlength=\"4000\" label=\"Mô tả\" [disabled]=\"readonly\"\n                                                [validationerror]=\"'MoTa' | validationerror:validationErrors\">\n                                            </app-textbox>\n\n                                            <app-textbox id=\"KetLuan\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [(model)]=\"item.KetLuan\" maxlength=\"4000\" label=\"Kêt luận\"\n                                                [disabled]=\"readonly\"\n                                                [validationerror]=\"'KetLuan' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-datetimepicker id=\"NgayKQ\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [(model)]=\"item.NgayKQ\" label=\"Ngày kết quả\" [required]=\"true\"\n                                                [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoSoCanLamSang['+i+'].NgayKQ' | validationerror:validationErrors\">\n                                            </app-datetimepicker>\n                                            <br />\n                                        </div>\n                                    </div>\n                                    <div style=\"padding-top: 10px;\"></div>\n                                    <div></div>\n\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"card\" fxFlex=\"auto\">\n                            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                <h2 class=\"title m-0\">Hồ sơ chi tiết diễn biến bệnh (XML5)</h2>\n                                <a (click)=\"AddDienBienBenh()\" style=\"position: absolute; right: 68px; color:blue\"><i\n                                        class=\"k-icon k-i-plus-outline\"></i>Thêm</a>\n                            </div>\n                            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px\"\n                                    fxLayoutGap.lt-sm=\"0\"\n                                    *ngFor=\"let item of thongtinbenhnhan.HoSoChiTietDienBienBenh; let i = index\">\n                                    <div class=\"card\" fxFlex=\"column\" style=\"padding:22px;\" fxFlex=\"100%\">\n                                        <button class=\"k-icon k-i-delete\"\n                                            style=\"margin-bottom: 5px;color:red;float: right;display: block;position: relative;\"\n                                            (click)=\"DeleteVitriDienBien(i)\"></button>\n                                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                            fxLayoutGap.lt-sm=\"0\">\n                                            <app-textbox id=\"DienBien\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [(model)]=\"item.DienBien \" maxlength=\"4000\" label=\"Diễn biến\"\n                                                [disabled]=\"readonly\" [required]=\"true\"\n                                                [validationerror]=\"'HoSoChiTietDienBienBenh['+i+'].DienBien' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-textbox id=\"HoiChuan\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [(model)]=\"item.HoiChuan\" maxlength=\"4000\" label=\"Hội chẩn\"\n                                                [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoiChuan' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-textbox id=\"PhauThuat\" fxFlex=\"20%\" fxFlex.sm=\"40%\" maxlength=\"4000\"\n                                                [(model)]=\"item.PhauThuat\" label=\"Phẫu thuật\" [disabled]=\"readonly\"\n                                                [validationerror]=\"'PhauThuat' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-datetimepicker id=\"NgayYLenh\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                                [(model)]=\"item.NgayYLenh\" label=\"Ngày Y lệnh\" [disabled]=\"readonly\"\n                                                [validationerror]=\"'HoSoChiTietDienBienBenh['+i+'].NgayYLenh' | validationerror:validationErrors\">\n                                            </app-datetimepicker>\n                                            <br />\n                                        </div>\n                                    </div>\n                                    <div style=\"padding-top: 10px;\"></div>\n                                    <div></div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"sticky-button-action py-3 text-right\" kendoTooltip>\n                            <mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" fxFlex=\"100%\"\n                                style=\"padding: 25px !important\">\n                                <ng-container>\n                                    <button type=\"button\" mat-raised-button (click)=\"backToList()\" title=\"Phím tắt: ESC\">\n                                        Hủy\n                                    </button>\n                                    <button type=\"button\" style=\"background-color: rgb(14, 216, 172); color: white;\"\n                                            mat-button class=\"mr-1\" mat-raised-button\n                                            (click)=\"downloadThongTinXMLNguoiBenh()\" title=\"Phím tắt: Ctrl + D\"><i\n                                                class=\"ft-save\"></i><i class=\"k-icon k-i-download\"\n                                                style=\"margin-right: 5px;margin-bottom: 3px;\"></i>Xuất XML</button>\n                                        <button style=\"margin-right: 5px;margin-bottom: 3px;\" type=\"button\"\n                                            (click)=\"capNhatThongTinHoSoGiamDinh()\" color=\"primary\" mat-raised-button\n                                            title=\"Phím tắt: Ctrl + S\"><i class=\"ft-save\"></i>\n                                            Cập nhật thông tin</button>\n                                        <button style=\"margin-right: 5px;margin-bottom: 3px;\" type=\"button\"\n                                            (click)=\"goiHoSoGiamDinhNguoiBenh()\" color=\"primary\"\n                                            title=\"Phím tắt: Ctrl + S\" mat-raised-button><i class=\"ft-save\"></i>\n                                            Gửi trực tiếp lên Bộ Y Tế</button>\n                                </ng-container>\n                            </mat-dialog-actions>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-hiem-y-te/lich-su-bao-hiem-y-te/ds-lich-su-bao-hiem-y-te/ds-lich-su-bao-hiem-y-te.component.html": 
        /*!*************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-hiem-y-te/lich-su-bao-hiem-y-te/ds-lich-su-bao-hiem-y-te/ds-lich-su-bao-hiem-y-te.component.html ***!
          \*************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"\n                    [\n                        {Title:'Gửi H.Sơ Giám Định BHYT',Path:''},\n                        {Title:'Lịch Sử H.Sơ Giám Định BHYT', Active:true}           \n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"/lich-su-bao-hiem-y-te\" urlGetData=\"BHYT/GetDanhSachLichSuBHYTForGridAsync\"\n                urlGetTotalPage=\"BHYT/GetDanhSachLichSuBHYTTotalPageForGridAsync\"\n                [gridColumns]=\"gridDanhSachBHYTColumns\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\"\n                [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\" [documentType]=\"documentType\"\n                [searchString]=\"timKiemDSBaoHiemYTe.SearchString\" [checkboxAble]=\"false\" [sort]=\"sort\">\n            </app-grid>\n            <ng-template #actionTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                <div class=\"text-center\">\n                    <a (click)=\"view(dataItem.Id)\">\n                        <p class=\"reverse-ellipsis l\" title=\"{{dataItem.MaTN}}\">{{dataItem.MaTN}}</p>\n                    </a>\n                </div>\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n    <ng-template #headerTemplate>\n        <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"onKey($event)\"\n                    (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n            </div>\n            <app-datetimepicker fxFlex=\"225px\" [(model)]=\"timKiemDSBaoHiemYTe.TuNgay\" #tiepnhantu\n                id=\"ThoiDiemTiepNhanTuFormat\" label=\"Từ ngày\" class=\"ml-2 on-header\" (keyup)=\"onKey($event)\">\n            </app-datetimepicker>\n            <app-datetimepicker fxFlex=\"225px\" [(model)]=\"timKiemDSBaoHiemYTe.DenNgay\" #tiepnhanden\n                id=\"ThoiDiemTiepNhanDenFormat\" label=\"Đến ngày\" class=\"ml-2 on-header\" (keyup)=\"onKey($event)\">\n            </app-datetimepicker>\n            <button type=\"button\" color=\"primary\" (click)=\"timKiemNangCao()\" class=\"ml-2\" mat-raised-button>Tìm</button>\n            <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n            </button>\n\n            <div fxFlex=\"61%\" fxFlex.sm=\"40%\"></div>\n            <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"mr-4\" fxFlex=\"0%\" fxFlex.sm=\"0%\" mat-icon-button\n                kendoTooltip title=\"Lọc cột\" type=\"button\">\n                <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n            </button>\n            <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                <div *ngFor=\"let column of gridDanhSachBHYTColumns\">\n                    <button\n                        class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                        <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                            {{ column.Title }}\n                        </mat-checkbox>\n                    </button>\n                </div>\n            </mat-menu>\n            <button (click)=\"DownloadFileExcels()\" class=\"ml-8\" fxFlex=\"none\" mat-icon-button kendoTooltip\n                title=\"Xuất excel\" type=\"button\">\n                <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n            </button>\n        </div>\n    </ng-template>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-hiem-y-te/lich-su-bao-hiem-y-te/chi-tiet-lich-su-bao-hiem-y-te/chi-tiet-lich-su-bao-hiem-y-te.component.scss": 
        /*!***********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-hiem-y-te/lich-su-bao-hiem-y-te/chi-tiet-lich-su-bao-hiem-y-te/chi-tiet-lich-su-bao-hiem-y-te.component.scss ***!
          \***********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".red-text {\n  color: red;\n}\n\n.green-text {\n  color: green;\n}\n\n.sticky-button-action {\n  position: sticky;\n  position: -webkit-sticky;\n  bottom: 0px;\n  background-color: white;\n  border-top: 1px solid #ccc;\n  overflow: hidden;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1oaWVtLXktdGUvbGljaC1zdS1iYW8taGllbS15LXRlL2NoaS10aWV0LWxpY2gtc3UtYmFvLWhpZW0teS10ZS9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGJhby1oaWVtLXktdGVcXGxpY2gtc3UtYmFvLWhpZW0teS10ZVxcY2hpLXRpZXQtbGljaC1zdS1iYW8taGllbS15LXRlXFxjaGktdGlldC1saWNoLXN1LWJhby1oaWVtLXktdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8taGllbS15LXRlL2xpY2gtc3UtYmFvLWhpZW0teS10ZS9jaGktdGlldC1saWNoLXN1LWJhby1oaWVtLXktdGUvY2hpLXRpZXQtbGljaC1zdS1iYW8taGllbS15LXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWhpZW0teS10ZS9saWNoLXN1LWJhby1oaWVtLXktdGUvY2hpLXRpZXQtbGljaC1zdS1iYW8taGllbS15LXRlL2NoaS10aWV0LWxpY2gtc3UtYmFvLWhpZW0teS10ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWQtdGV4dCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5ncmVlbi10ZXh0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uc3RpY2t5LWJ1dHRvbi1hY3Rpb24ge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIGJvdHRvbTogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDEwO1xufSIsIi5yZWQtdGV4dCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5ncmVlbi10ZXh0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uc3RpY2t5LWJ1dHRvbi1hY3Rpb24ge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIGJvdHRvbTogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDEwO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-hiem-y-te/lich-su-bao-hiem-y-te/chi-tiet-lich-su-bao-hiem-y-te/chi-tiet-lich-su-bao-hiem-y-te.component.ts": 
        /*!*********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-hiem-y-te/lich-su-bao-hiem-y-te/chi-tiet-lich-su-bao-hiem-y-te/chi-tiet-lich-su-bao-hiem-y-te.component.ts ***!
          \*********************************************************************************************************************************************/
        /*! exports provided: ChiTietLichSuBaoHiemYTeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiTietLichSuBaoHiemYTeComponent", function () { return ChiTietLichSuBaoHiemYTeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _lich_su_bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lich-su-bao-hiem-y-te */ "./src/app/modules/main/bao-hiem-y-te/lich-su-bao-hiem-y-te/lich-su-bao-hiem-y-te.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _danh_sach_bao_hiem_y_te_bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../danh-sach-bao-hiem-y-te/bao-hiem-y-te */ "./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/bao-hiem-y-te.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_12__);
            /* harmony import */ var _danh_sach_bao_hiem_y_te_tim_kiem_ma_benh_khac_popup_tim_kiem_ma_benh_khac_popup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../danh-sach-bao-hiem-y-te/tim-kiem-ma-benh-khac-popup/tim-kiem-ma-benh-khac-popup.component */ "./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/tim-kiem-ma-benh-khac-popup/tim-kiem-ma-benh-khac-popup.component.ts");
            /* harmony import */ var _danh_sach_bao_hiem_y_te_tim_kiem_ma_bac_si_popup_tim_kiem_ma_bac_si_popup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../danh-sach-bao-hiem-y-te/tim-kiem-ma-bac-si-popup/tim-kiem-ma-bac-si-popup.component */ "./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/tim-kiem-ma-bac-si-popup/tim-kiem-ma-bac-si-popup.component.ts");
            var ChiTietLichSuBaoHiemYTeComponent = /** @class */ (function () {
                function ChiTietLichSuBaoHiemYTeComponent(cdRef, dialog, route, apiService, router, notificationService) {
                    this.cdRef = cdRef;
                    this.dialog = dialog;
                    this.route = route;
                    this.apiService = apiService;
                    this.router = router;
                    this.notificationService = notificationService;
                    this.readonly = false;
                    this.goiDanhSachThongTinBenhNhanCoBHYT = {};
                    this.confrim = null;
                    this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_12___default.a;
                }
                ChiTietLichSuBaoHiemYTeComponent.prototype.ngOnInit = function () {
                    this.thongtinbenhnhan = new _lich_su_bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_2__["XMLThongTinBenhNhan"]();
                    this.idYeuCauTiepNhan = this.route.snapshot.params.id;
                    if (this.idYeuCauTiepNhan !== undefined && this.idYeuCauTiepNhan !== null) {
                        var versionFirst = 0;
                        this.getThongBenhNhanTheoYeuCauTiepNhan(this.idYeuCauTiepNhan, versionFirst);
                    }
                };
                ChiTietLichSuBaoHiemYTeComponent.prototype.loadDataEmun = function () {
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
                ChiTietLichSuBaoHiemYTeComponent.prototype.getThongBenhNhanTheoYeuCauTiepNhan = function (id, version) {
                    var self = this;
                    self.showPopupLoadingData(_danh_sach_bao_hiem_y_te_bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_11__["EnumTypeLoadingData"].View);
                    self.goiDanhSachThongTinBenhNhanCoBHYT.YeuCauTiepNhanIds = [];
                    self.goiDanhSachThongTinBenhNhanCoBHYT.YeuCauTiepNhanIds.push(id);
                    self.goiDanhSachThongTinBenhNhanCoBHYT.Version = version;
                    self.apiService.post("BHYT/GetThongTinChiTietBaoHiemYTe", self.goiDanhSachThongTinBenhNhanCoBHYT).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData !== null) {
                            self.thongtinbenhnhan = resultData;
                            self.loadDataEmun();
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
                ChiTietLichSuBaoHiemYTeComponent.prototype.downloadThongTinXMLNguoiBenh = function () {
                    var self = this;
                    self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmComponent"], {
                        disableClose: false,
                        width: "400px",
                        data: {
                            Title: "Xác nhận",
                            Message: "B\u1EA1n ch\u1EAFc ch\u1EAFn mu\u1ED1n t\u1EA3i th\u00F4ng tin ng\u01B0\u1EDDi b\u1EC7nh <span class=\"green-text\">" + self.thongtinbenhnhan.HoTen.toUpperCase().bold() + " </span> hay kh\u00F4ng?"
                        },
                    }).afterClosed().subscribe(function (result) {
                        if (result == "Yes") {
                            self.showPopupLoadingData(_danh_sach_bao_hiem_y_te_bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_11__["EnumTypeLoadingData"].LoadingTaiFile);
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
                                        src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].downLoadFile(res, "application/xml", "TongHop" + self.thongtinbenhnhan.MaBenh + " " + dateTimeNow.getFullYear() + ".xml");
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
                ChiTietLichSuBaoHiemYTeComponent.prototype.AddNewThuoc = function () {
                    var viTriNew = new _lich_su_bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_2__["HoSoChiTietThuoc"]();
                    viTriNew.NgayYLenh = new Date();
                    this.thongtinbenhnhan.HoSoChiTietThuoc.push(viTriNew);
                };
                ChiTietLichSuBaoHiemYTeComponent.prototype.AddDichVuKyThuat = function () {
                    var viTriNew = new _lich_su_bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_2__["HoSoChiTietDVKT"]();
                    viTriNew.NgayYLenh = new Date();
                    viTriNew.NgayKetQua = new Date();
                    this.thongtinbenhnhan.HoSoChiTietDVKT.push(viTriNew);
                };
                ChiTietLichSuBaoHiemYTeComponent.prototype.AddDichVuKyThuatCanLamSang = function () {
                    var viTriNew = new _lich_su_bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_2__["HoSoCanLamSang"]();
                    viTriNew.NgayKQ = new Date();
                    this.thongtinbenhnhan.HoSoCanLamSang.push(viTriNew);
                };
                ChiTietLichSuBaoHiemYTeComponent.prototype.AddDienBienBenh = function () {
                    var viTriNew = new _lich_su_bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_2__["HoSoChiTietDienBienBenh"]();
                    viTriNew.NgayYLenh = new Date();
                    this.thongtinbenhnhan.HoSoChiTietDienBienBenh.push(viTriNew);
                };
                ChiTietLichSuBaoHiemYTeComponent.prototype.capNhatThongTinHoSoGiamDinh = function () {
                    var self = this;
                    if (self.thongtinbenhnhan.Version === null) {
                        self.notificationService.showError("Vui l\u00F2ng ch\u1ECDn l\u1EA7n g\u1EEDi \u0111\u1EC3 c\u1EADp nh\u1EADt");
                        return true;
                    }
                    self.confrim = self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmComponent"], {
                        disableClose: false,
                        width: "400px",
                        data: {
                            Title: "Xác nhận",
                            Message: "B\u1EA1n ch\u1EAFc ch\u1EAFn mu\u1ED1n c\u1EADp nh\u1EADt th\u00F4ng tin ng\u01B0\u1EDDi b\u1EC7nh <span class=\"green-text\">" + self.thongtinbenhnhan.HoTen.toUpperCase().bold() + " </span> tr\u1EF1c ti\u1EBFp l\u00EAn b\u1ED9 y t\u1EBF hay kh\u00F4ng?"
                        },
                    }).afterClosed().subscribe(function (result) {
                        if (result == "Yes") {
                            self.showPopupLoadingData(_danh_sach_bao_hiem_y_te_bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_11__["EnumTypeLoadingData"].DangGuiHoSo);
                            self.kiemTraThongTinNguoiBenh();
                            if (self.validationErrors.length > 0) {
                                self.closeAllDialogs();
                                return true;
                            }
                            if (self.thongtinbenhnhan != undefined) {
                                self.thongtinbenhnhan.DataJson = JSON.stringify(self.thongtinbenhnhan);
                            }
                            self.thongtinbenhnhan.IsDownLoad = true;
                            self.apiService.post("BHYT/CapNhatDownloadHoSoGiamDinhXMLLichSuBHYT", self.thongtinbenhnhan).subscribe(function (version) {
                                self.notificationService.showSuccess("C\u1EADp nh\u1EADt h\u1ED3 s\u01A1 gi\u00E1m \u0111\u1ECBnh th\u00E0nh c\u00F4ng.");
                                self.getThongBenhNhanTheoYeuCauTiepNhan(self.idYeuCauTiepNhan, version);
                                self.closeAllDialogs();
                            }, function (err) {
                                if (err.Message != "Validation Failed") {
                                    self.notificationService.showError(err.Message);
                                    self.closeAllDialogs();
                                }
                            });
                        }
                    });
                };
                ChiTietLichSuBaoHiemYTeComponent.prototype.chonLanGuiHoSoGiamDinh = function (ev) {
                    if (ev != undefined && ev !== null) {
                        this.getThongBenhNhanTheoYeuCauTiepNhan(this.idYeuCauTiepNhan, ev);
                    }
                    else {
                        this.thongtinbenhnhan = new _lich_su_bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_2__["XMLThongTinBenhNhan"]();
                        this.thongtinbenhnhan.YeuCauTiepNhanId = this.idYeuCauTiepNhan;
                    }
                };
                ChiTietLichSuBaoHiemYTeComponent.prototype.DeleteVitri = function (position) {
                    var _this = this;
                    this.dialog
                        .open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmComponent"], {
                        disableClose: false,
                        width: "400px",
                        data: {
                            Title: "Xác nhận",
                            Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].MessConfirm, [
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
                ChiTietLichSuBaoHiemYTeComponent.prototype.DeleteVitriDVKT = function (position) {
                    var _this = this;
                    this.dialog
                        .open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmComponent"], {
                        disableClose: false,
                        width: "400px",
                        data: {
                            Title: "Xác nhận",
                            Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].MessConfirm, [
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
                ChiTietLichSuBaoHiemYTeComponent.prototype.DeleteVitrilamsang = function (position) {
                    var _this = this;
                    this.dialog
                        .open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmComponent"], {
                        disableClose: false,
                        width: "400px",
                        data: {
                            Title: "Xác nhận",
                            Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].MessConfirm, [
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
                ChiTietLichSuBaoHiemYTeComponent.prototype.DeleteVitriDienBien = function (position) {
                    var _this = this;
                    this.dialog
                        .open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmComponent"], {
                        disableClose: false,
                        width: "400px",
                        data: {
                            Title: "Xác nhận",
                            Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].MessConfirm, [
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
                ChiTietLichSuBaoHiemYTeComponent.prototype.goiHoSoGiamDinhNguoiBenh = function () {
                    var self = this;
                    self.confrim = self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmComponent"], {
                        disableClose: false,
                        width: "400px",
                        data: {
                            Title: "Xác nhận",
                            Message: "B\u1EA1n ch\u1EAFc ch\u1EAFn mu\u1ED1n g\u1EEDi th\u00F4ng tin ng\u01B0\u1EDDi b\u1EC7nh <span class=\"green-text\">" + self.thongtinbenhnhan.HoTen.toUpperCase().bold() + " </span> tr\u1EF1c ti\u1EBFp l\u00EAn b\u1ED9 y t\u1EBF hay kh\u00F4ng?"
                        },
                    }).afterClosed().subscribe(function (result) {
                        /* result is a string:Yes,No,No answer*/
                        if (result == "Yes") {
                            self.showPopupLoadingData(_danh_sach_bao_hiem_y_te_bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_11__["EnumTypeLoadingData"].DangGuiHoSo);
                            self.kiemTraThongTinNguoiBenh();
                            if (self.validationErrors.length > 0) {
                                self.closeAllDialogs();
                                return true;
                            }
                            if (self.thongtinbenhnhan != undefined) {
                                self.thongtinbenhnhan.DataJson = JSON.stringify(self.thongtinbenhnhan);
                            }
                            self.thongtinbenhnhan.IsDownLoad = true;
                            self.apiService.post("BHYT/GuiChiTietTungHoSoGiamDinhNguoiBenhLichSuBHYT", self.thongtinbenhnhan).subscribe(function (resultData) {
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
                ChiTietLichSuBaoHiemYTeComponent.prototype.keyEvent = function (event) {
                    if (event.keyCode == 68 && event.ctrlKey) {
                        this.downloadThongTinXMLNguoiBenh();
                        event.preventDefault();
                    }
                    if (event.keyCode == 83 && event.ctrlKey) {
                        this.capNhatThongTinHoSoGiamDinh();
                        event.preventDefault();
                    }
                    if (event.keyCode == 27 && !event.ctrlKey) {
                        //esc
                        this.backToList();
                        event.preventDefault();
                    }
                };
                ChiTietLichSuBaoHiemYTeComponent.prototype.kiemTraThongTinNguoiBenh = function () {
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
                ChiTietLichSuBaoHiemYTeComponent.prototype.ktThongTinBenhNhanXML1 = function () {
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
                ChiTietLichSuBaoHiemYTeComponent.prototype.ktHoSoChiTietThuocXML2 = function () {
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
                ChiTietLichSuBaoHiemYTeComponent.prototype.ktHoSoChiTietDVKTXML3 = function () {
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
                ChiTietLichSuBaoHiemYTeComponent.prototype.ktHoSoCanLamSangXML4 = function () {
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
                ChiTietLichSuBaoHiemYTeComponent.prototype.ktHoSoChiTietDienBienBenhXML5 = function () {
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
                ChiTietLichSuBaoHiemYTeComponent.prototype.isUndefinedOrNullOrEmpty = function (value) {
                    return value == undefined || value == null || value === "";
                };
                // Begin Công thức Hồ sơ thuốc (XML2)
                ChiTietLichSuBaoHiemYTeComponent.prototype.ChangeSoLuongHoSoThuoc = function (ev, item) {
                    item.ThanhTien = item.DonGia * ev * item.TyLeThanhToan / 100;
                    this.congThucTienBaoHiemThanhToanXML2(item);
                    this.totalTienNguoiBenhXML1();
                };
                ChiTietLichSuBaoHiemYTeComponent.prototype.ChangeDonGiaHoSoThuoc = function (ev, item) {
                    item.ThanhTien = item.SoLuong * ev * item.TyLeThanhToan / 100;
                    this.congThucTienBaoHiemThanhToanXML2(item);
                    this.totalTienNguoiBenhXML1();
                };
                ChiTietLichSuBaoHiemYTeComponent.prototype.ChangeTyLeThanhToanHoSoThuoc = function (ev, item) {
                    item.ThanhTien = item.SoLuong * item.DonGia * ev / 100;
                    this.congThucTienBaoHiemThanhToanXML2(item);
                    this.totalTienNguoiBenhXML1();
                };
                ChiTietLichSuBaoHiemYTeComponent.prototype.congThucTienBaoHiemThanhToanXML2 = function (item) {
                    item.TienBaoHiemThanhToan =
                        ((item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac) * item.MucHuong / 100) != undefined &&
                            ((item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac) * item.MucHuong / 100) != null &&
                            ((item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac) * item.MucHuong / 100) >= 0 ?
                            ((item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac) * item.MucHuong / 100) : 0;
                    this.congThucTienBenhNhanCungChiTraXML2(item);
                    this.totalTienNguoiBenhXML1();
                };
                ChiTietLichSuBaoHiemYTeComponent.prototype.congThucTienBenhNhanCungChiTraXML2 = function (item) {
                    item.TienBenhNhanCungChiTra =
                        (item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac - item.TienBaoHiemThanhToan) != undefined &&
                            (item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac - item.TienBaoHiemThanhToan) != null &&
                            (item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac - item.TienBaoHiemThanhToan) >= 0 ?
                            (item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac - item.TienBaoHiemThanhToan) : 0;
                };
                // Begin Công thức Dịch vụ kỹ thuật (XML3)
                ChiTietLichSuBaoHiemYTeComponent.prototype.modelChangeMaNhomDVKT = function ($event) {
                    this.totalTienNguoiBenhXML1();
                };
                ChiTietLichSuBaoHiemYTeComponent.prototype.ChangeSoLuongDichVuKyThuat = function (ev, item) {
                    item.ThanhTien = item.DonGia * ev * item.TyLeThanhToan / 100;
                    this.congThucTienBaoHiemThanhToanXML3(item);
                    this.totalTienNguoiBenhXML1();
                };
                ChiTietLichSuBaoHiemYTeComponent.prototype.ChangeDonGiaDichVuKyThuat = function (ev, item) {
                    item.ThanhTien = item.SoLuong * ev * item.TyLeThanhToan / 100;
                    this.congThucTienBaoHiemThanhToanXML3(item);
                    this.totalTienNguoiBenhXML1();
                };
                ChiTietLichSuBaoHiemYTeComponent.prototype.ChangeTyLeThanhToanDichVuKyThuat = function (ev, item) {
                    item.ThanhTien = item.SoLuong * item.DonGia * ev / 100;
                    this.congThucTienBaoHiemThanhToanXML3(item);
                    this.totalTienNguoiBenhXML1();
                };
                ChiTietLichSuBaoHiemYTeComponent.prototype.congThucTienBaoHiemThanhToanXML3 = function (item) {
                    item.TienBaoHiemThanhToan =
                        ((item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac) * item.MucHuong / 100) != undefined &&
                            ((item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac) * item.MucHuong / 100) != null &&
                            (item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac - item.TienBaoHiemThanhToan) >= 0 ?
                            ((item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac) * item.MucHuong / 100) : 0;
                    this.congThucTienBenhNhanCungChiTraXML3(item);
                    this.totalTienNguoiBenhXML1();
                };
                ChiTietLichSuBaoHiemYTeComponent.prototype.congThucTienBenhNhanCungChiTraXML3 = function (item) {
                    item.TienBenhNhanCungChiTra = (item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac - item.TienBaoHiemThanhToan) != undefined &&
                        (item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac - item.TienBaoHiemThanhToan) != null &&
                        (item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac - item.TienBaoHiemThanhToan) >= 0 ?
                        (item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac - item.TienBaoHiemThanhToan) : 0;
                };
                /* Công thức Thông tin người bệnh (XML1) */
                ChiTietLichSuBaoHiemYTeComponent.prototype.totalTienNguoiBenhXML1 = function () {
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
                ChiTietLichSuBaoHiemYTeComponent.prototype.showPopupTimMaBenhKhac = function () {
                    var _this = this;
                    this.dialog.open(_danh_sach_bao_hiem_y_te_tim_kiem_ma_benh_khac_popup_tim_kiem_ma_benh_khac_popup_component__WEBPACK_IMPORTED_MODULE_13__["ThemMaBenhKhacComponent"], {
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
                ChiTietLichSuBaoHiemYTeComponent.prototype.showPopupTimTenBenhKhac = function () {
                    var _this = this;
                    this.dialog.open(_danh_sach_bao_hiem_y_te_tim_kiem_ma_benh_khac_popup_tim_kiem_ma_benh_khac_popup_component__WEBPACK_IMPORTED_MODULE_13__["ThemMaBenhKhacComponent"], {
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
                ChiTietLichSuBaoHiemYTeComponent.prototype.clickShowPopupTimMaBS = function () {
                    var _this = this;
                    this.dialog.open(_danh_sach_bao_hiem_y_te_tim_kiem_ma_bac_si_popup_tim_kiem_ma_bac_si_popup_component__WEBPACK_IMPORTED_MODULE_14__["ThemMaBacSiComponent"], {
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
                ChiTietLichSuBaoHiemYTeComponent.prototype.setFieldBacSiForXML2 = function (MaBacSi) {
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
                ChiTietLichSuBaoHiemYTeComponent.prototype.setFieldBacSiForXML3 = function (MaBacSi) {
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
                ChiTietLichSuBaoHiemYTeComponent.prototype.backToList = function () {
                    this.router.navigate(["/lich-su-bao-hiem-y-te"], { queryParamsHandling: "preserve" });
                };
                ChiTietLichSuBaoHiemYTeComponent.prototype.showPopupLoadingData = function (typeLoading) {
                    if (typeLoading === void 0) { typeLoading = _danh_sach_bao_hiem_y_te_bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_11__["EnumTypeLoadingData"].View; }
                    var mess = "";
                    switch (typeLoading) {
                        case _danh_sach_bao_hiem_y_te_bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_11__["EnumTypeLoadingData"].View:
                            mess = "Đang tải dữ liệu...";
                            break;
                        case _danh_sach_bao_hiem_y_te_bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_11__["EnumTypeLoadingData"].Update:
                            mess = "Đang lưu dữ liệu...";
                            break;
                        case _danh_sach_bao_hiem_y_te_bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_11__["EnumTypeLoadingData"].Delete:
                            mess = "Đang xóa dữ liệu...";
                            break;
                        case _danh_sach_bao_hiem_y_te_bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_11__["EnumTypeLoadingData"].DangGuiHoSo:
                            mess = "Đang gửi hồ sơ giám định...";
                            break;
                        case _danh_sach_bao_hiem_y_te_bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_11__["EnumTypeLoadingData"].LoadingExcel:
                            mess = "Đang tải excel...";
                            break;
                        case _danh_sach_bao_hiem_y_te_bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_11__["EnumTypeLoadingData"].LoadingTaiFile:
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
                ChiTietLichSuBaoHiemYTeComponent.prototype.closeAllDialogs = function () {
                    if (this.loadingPopup) {
                        this.loadingPopup.close();
                        this.loadingPopup = null;
                    }
                };
                return ChiTietLichSuBaoHiemYTeComponent;
            }());
            ChiTietLichSuBaoHiemYTeComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
            ], ChiTietLichSuBaoHiemYTeComponent.prototype, "keyEvent", null);
            ChiTietLichSuBaoHiemYTeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-chi-tiet-lich-su-bao-hiem-y-te",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chi-tiet-lich-su-bao-hiem-y-te.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-hiem-y-te/lich-su-bao-hiem-y-te/chi-tiet-lich-su-bao-hiem-y-te/chi-tiet-lich-su-bao-hiem-y-te.component.html")).default,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chi-tiet-lich-su-bao-hiem-y-te.component.scss */ "./src/app/modules/main/bao-hiem-y-te/lich-su-bao-hiem-y-te/chi-tiet-lich-su-bao-hiem-y-te/chi-tiet-lich-su-bao-hiem-y-te.component.scss")).default]
                })
            ], ChiTietLichSuBaoHiemYTeComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-hiem-y-te/lich-su-bao-hiem-y-te/ds-lich-su-bao-hiem-y-te/ds-lich-su-bao-hiem-y-te.component.scss": 
        /*!***********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-hiem-y-te/lich-su-bao-hiem-y-te/ds-lich-su-bao-hiem-y-te/ds-lich-su-bao-hiem-y-te.component.scss ***!
          \***********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8taGllbS15LXRlL2xpY2gtc3UtYmFvLWhpZW0teS10ZS9kcy1saWNoLXN1LWJhby1oaWVtLXktdGUvZHMtbGljaC1zdS1iYW8taGllbS15LXRlLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-hiem-y-te/lich-su-bao-hiem-y-te/ds-lich-su-bao-hiem-y-te/ds-lich-su-bao-hiem-y-te.component.ts": 
        /*!*********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-hiem-y-te/lich-su-bao-hiem-y-te/ds-lich-su-bao-hiem-y-te/ds-lich-su-bao-hiem-y-te.component.ts ***!
          \*********************************************************************************************************************************/
        /*! exports provided: DsLichSuBaoHiemYTeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsLichSuBaoHiemYTeComponent", function () { return DsLichSuBaoHiemYTeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _lich_su_bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lich-su-bao-hiem-y-te */ "./src/app/modules/main/bao-hiem-y-te/lich-su-bao-hiem-y-te/lich-su-bao-hiem-y-te.ts");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_10__);
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_19__);
            var DsLichSuBaoHiemYTeComponent = /** @class */ (function () {
                function DsLichSuBaoHiemYTeComponent(router, authService, notificationService, dialog, location, route, apiService) {
                    this.router = router;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.dialog = dialog;
                    this.location = location;
                    this.route = route;
                    this.apiService = apiService;
                    this.dsBaoHiemYTe = {};
                    this.timKiemDSBaoHiemYTe = new _lich_su_bao_hiem_y_te__WEBPACK_IMPORTED_MODULE_5__["TimKiemLichSuBaoHiemYTe"]();
                    this.showCancelSearch = false;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_10___default.a;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_19___default.a;
                    this.holdQuery = null;
                    this.query = null;
                    this.additionalSearchString = null;
                    this.baseRoute = "/lich-su-bao-hiem-y-te";
                    this.sort = [{
                            field: 'ThoiGianTiepNhanStr',
                            dir: 'desc'
                        }];
                }
                DsLichSuBaoHiemYTeComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].GuiBaoHiemYTe;
                    var dateNow = new Date();
                    this.timKiemDSBaoHiemYTe.TuNgay = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
                    this.timKiemDSBaoHiemYTe.DenNgay = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
                    if (this.timKiemDSBaoHiemYTe.TuNgay != null) {
                        this.timKiemDSBaoHiemYTe.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].formatDateTime(this.timKiemDSBaoHiemYTe.TuNgay, "dd/mm/yyyy");
                    }
                    else {
                        this.timKiemDSBaoHiemYTe.FromDate = null;
                    }
                    if (this.timKiemDSBaoHiemYTe.DenNgay != null) {
                        this.timKiemDSBaoHiemYTe.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].formatDateTime(this.timKiemDSBaoHiemYTe.DenNgay, "dd/mm/yyyy");
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
                DsLichSuBaoHiemYTeComponent.prototype.view = function (id) {
                    this.router.navigateByUrl("/lich-su-bao-hiem-y-te/thong-tin-chi-tiet-lich-su-bhyt/" + id + "?holdQuery=true");
                };
                DsLichSuBaoHiemYTeComponent.prototype.backWithSearch = function () {
                    if (this.route.snapshot.queryParams.holdQuery != undefined) {
                        this.holdQuery = this.route.snapshot.queryParams.holdQuery;
                    }
                    if (this.holdQuery != null && src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_17__["LocalStorageHelper"].getItem('additionalSearchStringLichSuBHYT') != null) {
                        this.additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_17__["LocalStorageHelper"].getItem('additionalSearchStringLichSuBHYT');
                        if (this.additionalSearchString != null) {
                            this.timKiemDSBaoHiemYTe = JSON.parse(this.additionalSearchString);
                            this.searchString = this.timKiemDSBaoHiemYTe.SearchString;
                            this.timKiemDSBaoHiemYTe.TimKiem = this.timKiemDSBaoHiemYTe.SearchString;
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
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_17__["LocalStorageHelper"].setItem('additionalSearchStringBHYT', null);
                        this.additionalSearchString = JSON.stringify(this.timKiemDSBaoHiemYTe);
                    }
                };
                DsLichSuBaoHiemYTeComponent.prototype.closeMenu = function () {
                    this.trigger.closeMenu();
                };
                DsLichSuBaoHiemYTeComponent.prototype.timKiemNangCao = function () {
                    this.location.replaceState(this.baseRoute + '?holdQuery=true');
                    if (this.timKiemDSBaoHiemYTe.TuNgay != null) {
                        this.timKiemDSBaoHiemYTe.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].formatDateTime(this.timKiemDSBaoHiemYTe.TuNgay, "dd/mm/yyyy");
                    }
                    else {
                        this.timKiemDSBaoHiemYTe.FromDate = null;
                    }
                    if (this.timKiemDSBaoHiemYTe.DenNgay != null) {
                        this.timKiemDSBaoHiemYTe.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].formatDateTime(this.timKiemDSBaoHiemYTe.DenNgay, "dd/mm/yyyy");
                    }
                    else {
                        this.timKiemDSBaoHiemYTe.ToDate = null;
                    }
                    if (this.searchString != null) {
                        this.timKiemDSBaoHiemYTe.TimKiem = this.searchString;
                    }
                    this.timKiemDSBaoHiemYTe.SearchString = this.searchString;
                    var queryString = JSON.stringify(this.timKiemDSBaoHiemYTe);
                    this.gridChild.searchString = this.searchString;
                    this.gridChild._additionalSearchString = queryString;
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_17__["LocalStorageHelper"].setItem("additionalSearchStringLichSuBHYT", queryString);
                    this.gridChild.search();
                    this.showCancelSearch = this.listTagShowOnHeader != undefined && this.listTagShowOnHeader.length > 0;
                };
                DsLichSuBaoHiemYTeComponent.prototype.searchChanges = function (event) {
                    var self = this;
                    if (event != undefined && (event == null || event == "")) {
                        self.gridChild.searchString = null;
                        self.timKiemNangCao();
                    }
                };
                DsLichSuBaoHiemYTeComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.timKiemNangCao();
                    }
                };
                DsLichSuBaoHiemYTeComponent.prototype.clearSearch = function () {
                    if (this.timKiemDSBaoHiemYTe.SearchString == "" || this.timKiemDSBaoHiemYTe.SearchString == null) {
                        this.gridChild.searchString = "";
                        var xuatKhoClone = JSON.parse(JSON.stringify(this.timKiemDSBaoHiemYTe));
                        var queryForHole = JSON.parse(JSON.stringify(xuatKhoClone));
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_17__["LocalStorageHelper"].setItem('additionalSearchStringLichSuBHYT', JSON.stringify(queryForHole));
                        this.gridChild.search();
                    }
                };
                DsLichSuBaoHiemYTeComponent.prototype.Timkiem = function () {
                    var QueryString = null;
                    this.gridChild._additionalSearchString = null;
                    if (this.searchString != null) {
                        QueryString = this.searchString;
                    }
                    this.gridChild.searchString = QueryString;
                    this.gridChild.search();
                };
                DsLichSuBaoHiemYTeComponent.prototype.DownloadFileExcels = function () {
                    var self = this;
                    self.showPopupLoadingData();
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Process)) {
                        self.apiService.postExportExcel("BHYT/ExportLichSuBaoHiemYTe", this.gridChild._gridQueryInfo).subscribe(function (resultData) {
                            self.closePopupLoadingData();
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].downLoadFile(resultData, "application/vnd.ms-excel", "LichSuGiamDinhBHYT" + dateTimeNow.getFullYear() + ".xlsx");
                        }, function (err) {
                            self.notificationService.showError(err.Message);
                            self.closePopupLoadingData();
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DsLichSuBaoHiemYTeComponent.prototype.showPopupLoadingData = function () {
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang xuất excel..." },
                    });
                };
                DsLichSuBaoHiemYTeComponent.prototype.closePopupLoadingData = function () {
                    this.dialog.closeAll();
                };
                return DsLichSuBaoHiemYTeComponent;
            }());
            DsLichSuBaoHiemYTeComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_14__["NotificationService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_18__["Location"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("actionTemplate", { static: true })
            ], DsLichSuBaoHiemYTeComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], { static: true })
            ], DsLichSuBaoHiemYTeComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], { static: false })
            ], DsLichSuBaoHiemYTeComponent.prototype, "trigger", void 0);
            DsLichSuBaoHiemYTeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-ds-lich-su-bao-hiem-y-te',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ds-lich-su-bao-hiem-y-te.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-hiem-y-te/lich-su-bao-hiem-y-te/ds-lich-su-bao-hiem-y-te/ds-lich-su-bao-hiem-y-te.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ds-lich-su-bao-hiem-y-te.component.scss */ "./src/app/modules/main/bao-hiem-y-te/lich-su-bao-hiem-y-te/ds-lich-su-bao-hiem-y-te/ds-lich-su-bao-hiem-y-te.component.scss")).default]
                })
            ], DsLichSuBaoHiemYTeComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-hiem-y-te/lich-su-bao-hiem-y-te/lich-su-bao-hiem-y-te-routing.module.ts": 
        /*!**********************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-hiem-y-te/lich-su-bao-hiem-y-te/lich-su-bao-hiem-y-te-routing.module.ts ***!
          \**********************************************************************************************************/
        /*! exports provided: LichSuBaoHiemYTeRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuBaoHiemYTeRoutingModule", function () { return LichSuBaoHiemYTeRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _ds_lich_su_bao_hiem_y_te_ds_lich_su_bao_hiem_y_te_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ds-lich-su-bao-hiem-y-te/ds-lich-su-bao-hiem-y-te.component */ "./src/app/modules/main/bao-hiem-y-te/lich-su-bao-hiem-y-te/ds-lich-su-bao-hiem-y-te/ds-lich-su-bao-hiem-y-te.component.ts");
            /* harmony import */ var _chi_tiet_lich_su_bao_hiem_y_te_chi_tiet_lich_su_bao_hiem_y_te_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chi-tiet-lich-su-bao-hiem-y-te/chi-tiet-lich-su-bao-hiem-y-te.component */ "./src/app/modules/main/bao-hiem-y-te/lich-su-bao-hiem-y-te/chi-tiet-lich-su-bao-hiem-y-te/chi-tiet-lich-su-bao-hiem-y-te.component.ts");
            var routes = [
                {
                    path: "",
                    component: _ds_lich_su_bao_hiem_y_te_ds_lich_su_bao_hiem_y_te_component__WEBPACK_IMPORTED_MODULE_6__["DsLichSuBaoHiemYTeComponent"],
                    data: {
                        title: "Danh sách lịch sử bhyt",
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].LichSuGuiBHYT,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View,
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]],
                },
                {
                    path: "thong-tin-chi-tiet-lich-su-bhyt/:id",
                    component: _chi_tiet_lich_su_bao_hiem_y_te_chi_tiet_lich_su_bao_hiem_y_te_component__WEBPACK_IMPORTED_MODULE_7__["ChiTietLichSuBaoHiemYTeComponent"],
                    data: {
                        title: "Thông tin chi tiết lịch sử bảo hiểm y tế",
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].LichSuGuiBHYT,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
            ];
            var LichSuBaoHiemYTeRoutingModule = /** @class */ (function () {
                function LichSuBaoHiemYTeRoutingModule() {
                }
                return LichSuBaoHiemYTeRoutingModule;
            }());
            LichSuBaoHiemYTeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], LichSuBaoHiemYTeRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-hiem-y-te/lich-su-bao-hiem-y-te/lich-su-bao-hiem-y-te.module.ts": 
        /*!**************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-hiem-y-te/lich-su-bao-hiem-y-te/lich-su-bao-hiem-y-te.module.ts ***!
          \**************************************************************************************************/
        /*! exports provided: LichSuBaoHiemYTeModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuBaoHiemYTeModule", function () { return LichSuBaoHiemYTeModule; });
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
            /* harmony import */ var _lich_su_bao_hiem_y_te_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lich-su-bao-hiem-y-te-routing.module */ "./src/app/modules/main/bao-hiem-y-te/lich-su-bao-hiem-y-te/lich-su-bao-hiem-y-te-routing.module.ts");
            /* harmony import */ var _ds_lich_su_bao_hiem_y_te_ds_lich_su_bao_hiem_y_te_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ds-lich-su-bao-hiem-y-te/ds-lich-su-bao-hiem-y-te.component */ "./src/app/modules/main/bao-hiem-y-te/lich-su-bao-hiem-y-te/ds-lich-su-bao-hiem-y-te/ds-lich-su-bao-hiem-y-te.component.ts");
            /* harmony import */ var _chi_tiet_lich_su_bao_hiem_y_te_chi_tiet_lich_su_bao_hiem_y_te_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./chi-tiet-lich-su-bao-hiem-y-te/chi-tiet-lich-su-bao-hiem-y-te.component */ "./src/app/modules/main/bao-hiem-y-te/lich-su-bao-hiem-y-te/chi-tiet-lich-su-bao-hiem-y-te/chi-tiet-lich-su-bao-hiem-y-te.component.ts");
            /* harmony import */ var _danh_sach_bao_hiem_y_te_ds_bao_hiem_y_te_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../danh-sach-bao-hiem-y-te/ds-bao-hiem-y-te.module */ "./src/app/modules/main/bao-hiem-y-te/danh-sach-bao-hiem-y-te/ds-bao-hiem-y-te.module.ts");
            var LichSuBaoHiemYTeModule = /** @class */ (function () {
                function LichSuBaoHiemYTeModule() {
                }
                return LichSuBaoHiemYTeModule;
            }());
            LichSuBaoHiemYTeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_ds_lich_su_bao_hiem_y_te_ds_lich_su_bao_hiem_y_te_component__WEBPACK_IMPORTED_MODULE_14__["DsLichSuBaoHiemYTeComponent"], _chi_tiet_lich_su_bao_hiem_y_te_chi_tiet_lich_su_bao_hiem_y_te_component__WEBPACK_IMPORTED_MODULE_15__["ChiTietLichSuBaoHiemYTeComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _lich_su_bao_hiem_y_te_routing_module__WEBPACK_IMPORTED_MODULE_13__["LichSuBaoHiemYTeRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
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
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                        _danh_sach_bao_hiem_y_te_ds_bao_hiem_y_te_module__WEBPACK_IMPORTED_MODULE_16__["DsBaoHiemYTeModule"]
                    ]
                })
            ], LichSuBaoHiemYTeModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-hiem-y-te/lich-su-bao-hiem-y-te/lich-su-bao-hiem-y-te.ts": 
        /*!*******************************************************************************************!*\
          !*** ./src/app/modules/main/bao-hiem-y-te/lich-su-bao-hiem-y-te/lich-su-bao-hiem-y-te.ts ***!
          \*******************************************************************************************/
        /*! exports provided: TimKiemLichSuBaoHiemYTe, TagItem, DsLSBaoHiemYTe, XMLThongTinBenhNhan, HoSoChiTietThuoc, HoSoChiTietDVKT, HoSoCanLamSang, HoSoChiTietDienBienBenh, GoiDanhSachThongTinBenhNhanCoBHYT */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimKiemLichSuBaoHiemYTe", function () { return TimKiemLichSuBaoHiemYTe; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagItem", function () { return TagItem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsLSBaoHiemYTe", function () { return DsLSBaoHiemYTe; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XMLThongTinBenhNhan", function () { return XMLThongTinBenhNhan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoChiTietThuoc", function () { return HoSoChiTietThuoc; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoChiTietDVKT", function () { return HoSoChiTietDVKT; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoCanLamSang", function () { return HoSoCanLamSang; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoChiTietDienBienBenh", function () { return HoSoChiTietDienBienBenh; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoiDanhSachThongTinBenhNhanCoBHYT", function () { return GoiDanhSachThongTinBenhNhanCoBHYT; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var TimKiemLichSuBaoHiemYTe = /** @class */ (function () {
                function TimKiemLichSuBaoHiemYTe(TuNgay, DenNgay, TimKiem, FromDate, ToDate, ThoiDiemTiepNhanTuFormat, ThoiDiemTiepNhanDenFormat, SearchString) {
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
                return TimKiemLichSuBaoHiemYTe;
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
            var DsLSBaoHiemYTe = /** @class */ (function () {
                function DsLSBaoHiemYTe(MaTN, MaBN, HoTen, GioiTinh, DiaChi, MucHuong, SoTienBHYTDuyet) {
                    if (MaTN === void 0) { MaTN = null; }
                    if (MaBN === void 0) { MaBN = null; }
                    if (HoTen === void 0) { HoTen = null; }
                    if (GioiTinh === void 0) { GioiTinh = null; }
                    if (DiaChi === void 0) { DiaChi = null; }
                    if (MucHuong === void 0) { MucHuong = null; }
                    if (SoTienBHYTDuyet === void 0) { SoTienBHYTDuyet = null; }
                    this.MaTN = MaTN;
                    this.MaBN = MaBN;
                    this.HoTen = HoTen;
                    this.GioiTinh = GioiTinh;
                    this.DiaChi = DiaChi;
                    this.MucHuong = MucHuong;
                    this.SoTienBHYTDuyet = SoTienBHYTDuyet;
                }
                return DsLSBaoHiemYTe;
            }());
            var XMLThongTinBenhNhan = /** @class */ (function () {
                function XMLThongTinBenhNhan(MaLienKet, STT, MaBenhNhan, HoTen, NgaySinh, GioiTinh, DiaChi, MaThe, MaCoSoKCBBanDau, GiaTriTheTu, GiaTriTheDen, MienCungChiTra, TenBenh, MaBenh, MaBenhKhac, LyDoVaoVien, MaNoiChuyen, MaTaiNan, NgayVao, NgayRa, SoNgayDieuTri, KetQuaDieuTri, TinhTrangRaVien, TinhTrangRaVienText, NgayThanhToan, MucHuong, TienThuoc, TienVatTuYTe, DataJson, TienTongChi, TienBenhNhanTuTra, TienBenhNhanCungChiTra, TienBaoHiemThanhToan, TienNguonKhac, TienNgoaiDinhSuat, NamQuyetToan, ThangQuyetToan, MaLoaiKCB, MaKhoa, MaCSKCB, MaKhuVuc, MaPhauThuatQuocTe, CanNang, IsDownLoad, Version, YeuCauTiepNhanId, HoSoChiTietThuoc, HoSoChiTietDVKT, HoSoCanLamSang, HoSoChiTietDienBienBenh) {
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
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
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
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
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
                function HoSoChiTietDVKT(MaDichVu, STT, MaVatTu, GoiVatTuYTe, TenVatTu, ThongTinThau, PhamVi, TienThanhToanToiDa, MucHuong, TienNguonKhac, TienBenhNhanTuTra, TienBaoHiemThanhToan, TienBenhNhanCungChiTra, TienNgoaiDinhSuat, MaGiuong, MaNhom, MaNhomText, TenDichVu, DonViTinh, SoLuong, DonGia, TyLeThanhToan, ThanhTien, MaKhoa, MaBacSi, MaBenh, NgayYLenh, NgayKetQua, MaPhuongThucThanhToan) {
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
                function HoSoChiTietDienBienBenh(STT, DienBien, HoiChuan, PhauThuat, NgayYLenh) {
                    if (STT === void 0) { STT = null; }
                    if (DienBien === void 0) { DienBien = null; }
                    if (HoiChuan === void 0) { HoiChuan = null; }
                    if (PhauThuat === void 0) { PhauThuat = null; }
                    if (NgayYLenh === void 0) { NgayYLenh = null; }
                    this.STT = STT;
                    this.DienBien = DienBien;
                    this.HoiChuan = HoiChuan;
                    this.PhauThuat = PhauThuat;
                    this.NgayYLenh = NgayYLenh;
                }
                return HoSoChiTietDienBienBenh;
            }());
            var GoiDanhSachThongTinBenhNhanCoBHYT = /** @class */ (function () {
                function GoiDanhSachThongTinBenhNhanCoBHYT(YeuCauTiepNhanIds, Version) {
                    if (Version === void 0) { Version = 0; }
                    this.YeuCauTiepNhanIds = YeuCauTiepNhanIds;
                    this.Version = Version;
                }
                return GoiDanhSachThongTinBenhNhanCoBHYT;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-hiem-y-te-lich-su-bao-hiem-y-te-lich-su-bao-hiem-y-te-module-es2015.js.map
//# sourceMappingURL=bao-hiem-y-te-lich-su-bao-hiem-y-te-lich-su-bao-hiem-y-te-module-es5.js.map
//# sourceMappingURL=bao-hiem-y-te-lich-su-bao-hiem-y-te-lich-su-bao-hiem-y-te-module-es5.js.map