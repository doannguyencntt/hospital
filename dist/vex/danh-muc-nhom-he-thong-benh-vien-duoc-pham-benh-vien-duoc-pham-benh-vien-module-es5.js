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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["danh-muc-nhom-he-thong-benh-vien-duoc-pham-benh-vien-duoc-pham-benh-vien-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-create/duoc-pham-benh-vien-create.component.html": 
        /*!**********************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-create/duoc-pham-benh-vien-create.component.html ***!
          \**********************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form current=\"\" [crumbs]=\"[\n{Title:'Danh Mục',Path:''}\n,{Title:'Nhóm Hệ Thống',Path:''}\n,{Title:'Bệnh Viện ',Path:''}\n,{Title:'Dược Phẩm Bệnh Viện',Path:'/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien',Active:true}\n]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Thêm Dược Phẩm Bệnh Viện</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-duoc-pham-benh-vien-shared>\n                </app-duoc-pham-benh-vien-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <!-- <app-formfooter [bodyComponent]=\"shared\" type=\"create\" (created)=\"onCreated()\">\n                    </app-formfooter> -->\n                    <div class=\"form-footer\">\n                        <button type=\"button\" (click)=\"cancel()\" mat-button class=\"mr-1\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n                        <button type=\"button\" *ngIf=\"!loading\" (click)=\"create()\" color=\"primary\" mat-raised-button><i\n                                class=\"ft-save\"></i>Thêm</button>\n                        <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img src=\"/assets/img/loader.gif\"\n                                alt=\"Loading\" /></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-list/duoc-pham-benh-vien-list.component.html": 
        /*!******************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-list/duoc-pham-benh-vien-list.component.html ***!
          \******************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Danh Mục',Path:''}\n                    ,{Title:'Nhóm Hệ Thống',Path:''}\n                    ,{Title:'Bệnh Viện ',Path:''}\n                    ,{Title:'Dược Phẩm Bệnh Viện',Path:'/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien',Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien\" [gridColumns]=\"gridColumns\"\n                [documentType]=\"documentType\" [useActionDefault]=\"true\" [lazyLoadPage]=\"true\" [checkboxAble]=\"false\"\n                [showStt]=\"true\" [showExportExcel]=\"true\" (extExportExcel)=\"exportExcel()\" #gridDuocPhamBenhVien\n                (extOnDataBound)=\"extOnDataBound($event)\">\n            </app-grid>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-shared/duoc-pham-benh-vien-shared.component.html": 
        /*!**********************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-shared/duoc-pham-benh-vien-shared.component.html ***!
          \**********************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <app-textbox fxFlex=\"25%\" fxFlex.sm=\"25%\" id=\"MaDuocPhamBenhVien\" label=\"Mã dược phẩm bệnh viện\" maxlength=\"50\"\n        [(model)]=\"duocPhamBenhVien.MaDuocPhamBenhVien\" [required]=\"true\"\n        [validationerror]=\"'MaDuocPhamBenhVien' | validationerror:validationErrors\">\n    </app-textbox>\n\n    <app-textbox id=\"Ten\" fxFlex=\"25\" fxFlex.sm=\"25\" [required]=\"true\" maxlength=\"250\" [(model)]=\"duocPhamBenhVien.Ten\"\n        label=\"Tên dược phẩm\" [validationerror]=\"'Ten' | validationerror:validationErrors\"\n        (modelChange)=\"changeTenDuocPham($event)\">\n    </app-textbox>\n\n    <app-textbox fxFlex=\"25\" id=\"HamLuong\" label=\"Hàm lượng\" maxlength=\"500\" [(model)]=\"duocPhamBenhVien.HamLuong\">\n    </app-textbox>\n\n    <app-combobox id=\"DonViTinhId\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [(model)]=\"duocPhamBenhVien.DonViTinhId\" maxlength=\"500\"\n        [required]=\"true\" [modelText]=\"duocPhamBenhVien.TenDonViTinh\" label=\"Đơn vị tính (Đơn vị sơ cấp)\"\n        class=\"item-no-padding\" [template]=\"donViTinhTemplate\" [templateHeader]=\"donViTinhTemplateHeader\"\n        url=\"DonViTinh/GetDanhSachDonViTinh\" [validationerror]=\"'DonViTinhId' | validationerror:validationErrors\">\n        <ng-template #donViTinhTemplateHeader let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <th width=\"20%\">Mã</th>\n                    <th>Tên</th>\n                </tr>\n            </table>\n        </ng-template>\n        <ng-template #donViTinhTemplate let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <td width=\"20%\">{{dataItem.Ma}}</td>\n                    <td>{{dataItem.Ten}}</td>\n                </tr>\n            </table>\n        </ng-template>\n    </app-combobox>\n\n    <app-textbox id=\"QuyCach\" fxFlex=\"25\" fxFlex.sm=\"25\" maxlength=\"250\" [(model)]=\"duocPhamBenhVien.QuyCach\"\n        label=\"Quy cách đóng gói(Đơn vị thứ cấp)\">\n    </app-textbox>\n\n    <app-textboxnumeric fxFlex=\"25\" id=\"HeSoDinhMucDonViTinh\" label=\"Hệ số định mức\"\n        [(model)]=\"duocPhamBenhVien.HeSoDinhMucDonViTinh\">\n    </app-textboxnumeric>\n\n    <app-autocomplete #hoatChatAutoComplete fxFlex=\"25\" id=\"HoatChat\" label=\"Hoạt chất\" fxFlex.sm=\"25\" maxlength=\"550\"\n        class=\"item-no-padding\" [(model)]=\"duocPhamBenhVien.HoatChat\" valueField=\"HoatChat\"\n        (onValueChange)=\"valueChangeHoatChat($event)\" url=\"ThuocHoacHoatChat/LookupThuocHoacHoatChat\"\n        [validationerror]=\"'HoatChat' | validationerror:validationErrors\" [templateHeader]=\"headerHoatChatTemplate\"\n        [template]=\"HoatChatTemplate\">\n        <ng-template #headerHoatChatTemplate let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <th width=\"20%\">Mã</th>\n                    <th>Hoạt Chất</th>\n                    <th width=\"20%\">ĐD</th>\n                </tr>\n            </table>\n        </ng-template>\n        <ng-template #HoatChatTemplate let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <td width=\"20%\">{{dataItem.MaHoatChat}}</td>\n                    <td>{{dataItem.HoatChat}}</td>\n                    <td width=\"20%\">{{dataItem.DuongDung}}</td>\n                </tr>\n            </table>\n        </ng-template>\n    </app-autocomplete>\n\n\n    <app-combobox id=\"DuocPhamBenhVienPhanNhomChaId\" fxFlex=\"25\" fxFlex.sm=\"25\"\n        [(model)]=\"duocPhamBenhVien.DuocPhamBenhVienPhanNhomChaId\" url=\"DuocPhamBenhVien/DuocPhamBenhVienChaPhanNhoms\"\n        [modelText]=\"duocPhamBenhVien.TenDuocPhamBenhVienPhanNhomCha\" label=\"Loại thuốc hoặc hoạt chất\" required=\"true\"\n        [autoSelectFirstItem]=\"true\" bind=\"true\" (modelChange)=\"nhomChaChange($event)\"\n        [validationerror]=\"'DuocPhamBenhVienPhanNhomChaId' | validationerror:validationErrors\">\n    </app-combobox>\n\n    <app-combobox-tree fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"Phân loại theo tác dụng Dược lý\"\n        [(model)]=\"duocPhamBenhVien.DuocPhamBenhVienPhanNhomConId\" id=\"DuocPhamBenhVienPhanNhomConId\"\n        [disabled]=\"duocPhamBenhVien.DuocPhamBenhVienPhanNhomChaId == undefined ||  duocPhamBenhVien.DuocPhamBenhVienPhanNhomChaId == null\"\n        [popupSettings]=\"{width: 1000,popupClass:'item-no-padding'}\"\n        [queryInfo]=\"{ParameterDependencies:'{DuocPhamBenhVienPhanNhomChaId:' + duocPhamBenhVien.DuocPhamBenhVienPhanNhomChaId + '}', Take: 50}\"\n        [modelText]=\"duocPhamBenhVien.TenDuocPhamBenhVienPhanNhomCon\"\n        url=\"DuocPhamBenhVien/DichVuBenhVienPhanNhomsLv2VaLv3\" (modelChange)=\"nhomConChange($event)\">\n    </app-combobox-tree>\n\n    <app-combobox id=\"DuongDungId\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [(model)]=\"duocPhamBenhVien.DuongDungId\"\n        [required]=\"true\" [modelText]=\"duocPhamBenhVien.TenDuongDung\" label=\"Đường dùng\" class=\"item-no-padding\"\n        [template]=\"duongDungTemplate\" [templateHeader]=\"duongDungTemplateHeader\" url=\"DuocPham/GetDanhSachDuongDung\"\n        [validationerror]=\"'DuongDungId' | validationerror:validationErrors\">\n        <ng-template #duongDungTemplateHeader let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <th width=\"20%\">Mã</th>\n                    <th>Tên</th>\n                </tr>\n            </table>\n        </ng-template>\n        <ng-template #duongDungTemplate let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <td width=\"20%\">{{dataItem.Ma}}</td>\n                    <td>{{dataItem.Ten}}</td>\n                </tr>\n            </table>\n        </ng-template>\n    </app-combobox>\n\n    <app-combobox id=\"LoaiThuocTheoQuanLy\" fxFlex=\"25\" fxFlex.sm=\"25\" [(model)]=\"duocPhamBenhVien.LoaiThuocTheoQuanLy\"\n        url=\"DuocPhamBenhVien/PhanLoaiThuocTheoQuanLys\" [modelText]=\"duocPhamBenhVien.TenPhanLoaiThuocTheoQuanLy\"\n        label=\"Phân loại theo Quản lý\">\n    </app-combobox>\n\n    <app-textboxnumeric fxFlex=\"25\" id=\"STTHoaChat\" label=\"STT hoạt chất\" [(model)]=\"duocPhamBenhVien.STTHoatChat\"\n        [validationerror]=\"'STTHoatChat' | validationerror:validationErrors\">\n    </app-textboxnumeric>\n\n    <app-autocomplete #maHoatChatAutoComplete id=\"MaHoaChat\" label=\"Mã hoạt chất\" fxFlex=\"25\" fxFlex.sm=\"25\"\n        maxlength=\"100\" class=\"item-no-padding\" [(model)]=\"duocPhamBenhVien.MaHoatChat\" valueField=\"MaHoatChat\"\n        (onValueChange)=\"valueChangeMaHoatChat($event)\" url=\"ThuocHoacHoatChat/LookupThuocHoacHoatChat\"\n        [validationerror]=\"'MaHoatChat' | validationerror:validationErrors\" [templateHeader]=\"headerMaHoatChatTemplate\"\n        [template]=\"MaHoatChatTemplate\">\n        <ng-template #headerMaHoatChatTemplate let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <th width=\"20%\">Mã</th>\n                    <th>Hoạt Chất</th>\n                    <th width=\"20%\">ĐD</th>\n                </tr>\n            </table>\n        </ng-template>\n        <ng-template #MaHoatChatTemplate let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <td width=\"20%\">{{dataItem.MaHoatChat}}</td>\n                    <td>{{dataItem.HoatChat}}</td>\n                    <td width=\"20%\">{{dataItem.DuongDung}}</td>\n                </tr>\n            </table>\n        </ng-template>\n    </app-autocomplete>\n\n    <app-textbox id=\"MaATC\" fxFlex=\"25\" fxFlex.sm=\"25\" maxlength=\"100\" [(model)]=\"duocPhamBenhVien.MaATC\"\n        label=\"Mã ATC\">\n    </app-textbox>\n\n    <app-textbox id=\"SoDangKy\" fxFlex=\"25\" fxFlex.sm=\"25\" maxlength=\"100\" [(model)]=\"duocPhamBenhVien.SoDangKy\"\n        label=\"Số đăng ký\" [validationerror]=\"'SoDangKy' | validationerror:validationErrors\">\n    </app-textbox>\n\n    <app-autocomplete id=\"NhaSanXuat\" fxFlex=\"25\" fxFlex.sm=\"25\" maxlength=\"250\" [(model)]=\"duocPhamBenhVien.NhaSanXuat\"\n        [dataList]=\"nhaSanXuatDataSource\" label=\"Nhà sản xuất\">\n    </app-autocomplete>\n\n    <app-autocomplete id=\"NuocSanXuat\" fxFlex=\"25\" fxFlex.sm=\"25\" maxlength=\"250\"\n        [(model)]=\"duocPhamBenhVien.NuocSanXuat\" [dataList]=\"nuocSanXuatDataSource\" label=\"Nước sản xuất\">\n    </app-autocomplete>\n    <app-textbox id=\"DangBaoChe\" fxFlex=\"25\" fxFlex.sm=\"25\" maxlength=\"250\" [(model)]=\"duocPhamBenhVien.DangBaoChe\"\n        label=\"Bào chế\" [validationerror]=\"'DangBaoChe' | validationerror:validationErrors\">\n    </app-textbox>\n\n    <app-textboxnumeric id=\"the-tich\" [(model)]=\"duocPhamBenhVien.TheTich\" fxFlex=\"25\" fxFlex.sm=\"100\" label=\"Thể tích\"\n        type=\"number\" format=\"#.###\">\n    </app-textboxnumeric>\n\n    <app-radio id=\"HieuLuc\" fxFlex=\"25\" fxFlex.sm=\"25\" [(model)]=\"duocPhamBenhVien.HieuLuc\"\n        [items]=\"[{Value:true,Text:'Có'},{Value:false,Text:'Không'}]\" label=\"Hiệu lực\">\n    </app-radio>\n\n    <app-textarea id=\"HuongDan\" fxFlex=\"25\" fxFlex.sm=\"25\" maxlength=\"4000\" [(model)]=\"duocPhamBenhVien.HuongDan\"\n        label=\"Hướng dẫn\" minHeight=\"20\" [validationerror]=\"'HuongDan' | validationerror:validationErrors\">\n    </app-textarea>\n    <app-textarea fxFlex=\"25\" id=\"MoTa\" label=\"Mô tả\" maxlength=\"4000\" [(model)]=\"duocPhamBenhVien.MoTa\" minHeight=\"20\"\n        [validationerror]=\"'MoTa' | validationerror:validationErrors\">\n    </app-textarea>\n\n    <app-textarea id=\"ChiDinh\" fxFlex=\"25\" fxFlex.sm=\"25\" maxlength=\"4000\" [(model)]=\"duocPhamBenhVien.ChiDinh\"\n        label=\"Chỉ định\" minHeight=\"20\" [validationerror]=\"'ChiDinh' | validationerror:validationErrors\">\n    </app-textarea>\n\n    <app-textarea id=\"ChongChiDinh\" fxFlex=\"25\" fxFlex.sm=\"25\" maxlength=\"1000\"\n        [(model)]=\"duocPhamBenhVien.ChongChiDinh\" label=\"Chống chỉ định\" minHeight=\"20\"\n        [validationerror]=\"'ChongChiDinh' | validationerror:validationErrors\">\n    </app-textarea>\n\n    <app-textarea id=\"LieuLuongCachDung\" fxFlex=\"25\" fxFlex.sm=\"25\" maxlength=\"4000\"\n        [(model)]=\"duocPhamBenhVien.LieuLuongCachDung\" label=\"Liều lượng và cách dùng\" minHeight=\"20\"\n        [validationerror]=\"'LieuLuongCachDung' | validationerror:validationErrors\">\n    </app-textarea>\n\n    <app-textarea fxFlex=\"25\" fxFlex.sm=\"25\" id=\"TacDungPhu\" label=\"Tác dụng phụ\" maxlength=\"4000\" minHeight=\"20\"\n        [(model)]=\"duocPhamBenhVien.TacDungPhu\">\n    </app-textarea>\n\n    <app-textarea id=\"ChuYDePhong\" fxFlex=\"25\" fxFlex.sm=\"100\" maxlength=\"4000\" [(model)]=\"duocPhamBenhVien.ChuYDePhong\"\n        minHeight=\"20\" label=\"Chú ý đề phòng\">\n    </app-textarea>\n\n    <app-textarea id=\"DieuKienBaoHiemThanhToan\" fxFlex=\"25\" fxFlex.sm=\"100\" maxlength=\"4000\"\n        [(model)]=\"duocPhamBenhVien.DieuKienBaoHiemThanhToan\" minHeight=\"20\" label=\"Điều kiện bảo hiểm thanh toán\">\n    </app-textarea>\n\n    <div fxFlex=\"25%\" fxFlex.sm=\"25%\">\n        <div class=\"container-custom no-label\">\n            <label>&nbsp;</label>\n            <div fxLayout=\"row\" fxLayoutGap=\"16px\">\n                <app-checkbox fxFlex=\"100%\" id=\"LaThucPhamChucNang\" [(model)]=\"duocPhamBenhVien.LaThucPhamChucNang\"\n                    label=\"Là thực phẩm chức năng\" value=\"true\"></app-checkbox>\n            </div>\n        </div>\n    </div>\n\n    <div fxFlex=\"25%\" fxFlex.sm=\"25%\">\n        <div class=\"container-custom no-label\">\n            <label>&nbsp;</label>\n            <div fxLayout=\"row\" fxLayoutGap=\"16px\">\n                <app-checkbox fxFlex=\"100%\" id=\"LaThuocHuongThanGayNghien\"\n                    [(model)]=\"duocPhamBenhVien.LaThuocHuongThanGayNghien\" label=\"Là thuốc hướng thần, gây nghiện\"\n                    value=\"true\">\n                </app-checkbox>\n            </div>\n        </div>\n    </div>\n\n    <app-textbox fxFlex=\"25\" id=\"TenTiengAnh\" label=\"Tên tiếng anh\" maxlength=\"250\"\n        [(model)]=\"duocPhamBenhVien.TenTiengAnh\" [validationerror]=\"'TenTiengAnh' | validationerror:validationErrors\">\n    </app-textbox>\n\n    <app-textbox id=\"TieuChuan\" fxFlex=\"25\" fxFlex.sm=\"25\" maxlength=\"50\" [(model)]=\"duocPhamBenhVien.TieuChuan\"\n        label=\"Tiêu chuẩn\" [validationerror]=\"'TieuChuan' | validationerror:validationErrors\">\n    </app-textbox>\n    <div fxFlex=\"25%\" fxFlex.sm=\"25%\">\n        <div class=\"container-custom no-label\">\n            <label>&nbsp;</label>\n            <div fxLayout=\"row\" fxLayoutGap=\"16px\">\n                <app-checkbox fxFlex=\"100%\" id=\"DuocPhamCoDau\" [(model)]=\"duocPhamBenhVien.DuocPhamCoDau\"\n                    label=\"Dược phẩm có dấu *\" value=\"true\">\n                </app-checkbox>\n            </div>\n        </div>\n    </div>\n\n    <app-multiselect fxFlex=\"25%\" [(model)]=\"duocPhamBenhVien.MayXetNghiemIds\" [modelText]=\"\" label=\"Sử dụng cho máy XN\"\n        [popupSettings]=\"null\" [autoClose]=\"false\" url=\"DuocPhamBenhVien/GetAllMayXetNghiem\">\n    </app-multiselect>\n\n    <app-combobox id=\"LoaiDieuKienBaoQuanDuocPhamId\" fxFlex=\"25%\" fxFlex.sm=\"25%\"\n        [(model)]=\"duocPhamBenhVien.LoaiDieuKienBaoQuanDuocPham\"\n        url=\"DuocPhamBenhVien/GetAllLoaiDieuKienBaoQuanDuocPham\" [reloadForGrid]=\"true\"\n        (modelChange)=\"modelChangeLoaiDieuKienBaoQuanDuocPham($event)\"\n        [modelText]=\"duocPhamBenhVien.TenPhanLoaiThuocTheoQuanLy\" label=\"Điều kiện bảo quản\">\n    </app-combobox>\n\n    <app-textbox *ngIf=\"isAllowInputInfor\" fxFlex=\"25%\" id=\"ThongTinDieuKienBaoQuanDuocPham\"\n        label=\"Thông tin điều kiện bảo quản\" maxlength=\"250\"\n        [(model)]=\"duocPhamBenhVien.ThongTinDieuKienBaoQuanDuocPham\">\n    </app-textbox>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-update/duoc-pham-benh-vien-update.component.html": 
        /*!**********************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-update/duoc-pham-benh-vien-update.component.html ***!
          \**********************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form current=\"\" [crumbs]=\"[\n    {Title:'Danh Mục',Path:''}\n    ,{Title:'Nhóm Hệ Thống',Path:''}\n    ,{Title:'Bệnh Viện',Path:''}\n    ,{Title:'Dược Phẩm Bệnh Viện',Path:'/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien',Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n<div class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chỉnh Sửa Dược Phẩm Bệnh Viện</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-duoc-pham-benh-vien-shared>\n                </app-duoc-pham-benh-vien-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"update\" (updated)=\"onUpdated()\"\n                    (canceled)=\"canceled()\"></app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-create/duoc-pham-benh-vien-create.component.scss": 
        /*!********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-create/duoc-pham-benh-vien-create.component.scss ***!
          \********************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9kdW9jLXBoYW0tYmVuaC12aWVuL2R1b2MtcGhhbS1iZW5oLXZpZW4tY3JlYXRlL2R1b2MtcGhhbS1iZW5oLXZpZW4tY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-create/duoc-pham-benh-vien-create.component.ts": 
        /*!******************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-create/duoc-pham-benh-vien-create.component.ts ***!
          \******************************************************************************************************************************************************/
        /*! exports provided: DuocPhamBenhVienCreateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamBenhVienCreateComponent", function () { return DuocPhamBenhVienCreateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _duoc_pham_benh_vien_shared_duoc_pham_benh_vien_shared_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../duoc-pham-benh-vien-shared/duoc-pham-benh-vien-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-shared/duoc-pham-benh-vien-shared.component.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var DuocPhamBenhVienCreateComponent = /** @class */ (function () {
                function DuocPhamBenhVienCreateComponent(router, location, notificationService, authService, dialog, ref, apiService) {
                    this.router = router;
                    this.location = location;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.dialog = dialog;
                    this.ref = ref;
                    this.apiService = apiService;
                    this.loading = false;
                    this.confirm = null;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_11__["DocumentType"].DanhMucDuocPhamBenhVien;
                }
                DuocPhamBenhVienCreateComponent.prototype.ngOnInit = function () {
                };
                DuocPhamBenhVienCreateComponent.prototype.onCreated = function () {
                    this.router.navigate(["/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien"], { queryParams: { holdQuery: true } });
                };
                DuocPhamBenhVienCreateComponent.prototype.create = function () {
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].View)) {
                        self.shared.validationErrors = null;
                        self.ref.detectChanges();
                        if (self.confirm != null) {
                            self.dialog.closeAll();
                            self.confirm = null;
                        }
                        self.confirm = self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].MessConfirm, ["thêm"]) }
                        }).afterClosed().subscribe(function (result) {
                            if (result == "Yes") {
                                self.xuLyKiemTraTrungDuocPham();
                            }
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DuocPhamBenhVienCreateComponent.prototype.xuLyKiemTraTrungDuocPham = function () {
                    var self = this;
                    self.loading = true;
                    if (self.shared.validationErrors != null && self.shared.validationErrors.some(function (x) { return x; })) {
                        self.loading = false;
                        return;
                    }
                    self.apiService.post("DuocPhamBenhVien/KiemTraTrungDuocPhamBenhVien", self.shared.getSharedData()).subscribe(function (resultData) {
                        if (resultData) {
                            self.confirm = self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmComponent"], {
                                disableClose: false,
                                width: '400px',
                                data: { Title: "Xác nhận", Message: "Dược phẩm này đã được thêm trước đó, bạn có muốn thêm mới?" }
                            }).afterClosed().subscribe(function (result) {
                                if (result == "Yes") {
                                    self.xuLyThemDuocPham();
                                }
                                else {
                                    self.loading = false;
                                }
                            });
                        }
                        else {
                            self.xuLyThemDuocPham();
                        }
                    }, function (err) {
                        self.shared.validationErrors = err.ValidationErrors;
                        self.loading = false;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                    });
                };
                DuocPhamBenhVienCreateComponent.prototype.xuLyThemDuocPham = function () {
                    var self = this;
                    self.loading = true;
                    if (self.shared.validationErrors != null && self.shared.validationErrors.some(function (x) { return x; })) {
                        self.loading = false;
                        return;
                    }
                    self.apiService.post("DuocPhamBenhVien", self.shared.getSharedData()).subscribe(function (resultData) {
                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].ActionSuccessfully, ["Thêm"]));
                        self.loading = false;
                        self.cancel();
                    }, function (err) {
                        self.shared.validationErrors = err.ValidationErrors;
                        self.loading = false;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                    });
                };
                DuocPhamBenhVienCreateComponent.prototype.cancel = function () {
                    this.location.back();
                };
                return DuocPhamBenhVienCreateComponent;
            }());
            DuocPhamBenhVienCreateComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_duoc_pham_benh_vien_shared_duoc_pham_benh_vien_shared_component__WEBPACK_IMPORTED_MODULE_6__["DuocPhamBenhVienSharedComponent"], { static: true })
            ], DuocPhamBenhVienCreateComponent.prototype, "shared", void 0);
            DuocPhamBenhVienCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duoc-pham-benh-vien-create',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duoc-pham-benh-vien-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-create/duoc-pham-benh-vien-create.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duoc-pham-benh-vien-create.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-create/duoc-pham-benh-vien-create.component.scss")).default]
                })
            ], DuocPhamBenhVienCreateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-list/duoc-pham-benh-vien-list.component.scss": 
        /*!****************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-list/duoc-pham-benh-vien-list.component.scss ***!
          \****************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9kdW9jLXBoYW0tYmVuaC12aWVuL2R1b2MtcGhhbS1iZW5oLXZpZW4tbGlzdC9kdW9jLXBoYW0tYmVuaC12aWVuLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-list/duoc-pham-benh-vien-list.component.ts": 
        /*!**************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-list/duoc-pham-benh-vien-list.component.ts ***!
          \**************************************************************************************************************************************************/
        /*! exports provided: DuocPhamBenhVienListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamBenhVienListComponent", function () { return DuocPhamBenhVienListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12__);
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var DuocPhamBenhVienListComponent = /** @class */ (function () {
                function DuocPhamBenhVienListComponent(dialog, route, location, authService, apiService, notificationService) {
                    this.dialog = dialog;
                    this.route = route;
                    this.location = location;
                    this.authService = authService;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControl"]();
                    this.expression = false;
                    this.gridColumns = [];
                    this.baseRoute = "/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien";
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12___default.a;
                }
                DuocPhamBenhVienListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhMucDuocPhamBenhVien;
                    var hasLocalSearchString = false;
                    if (this.route.snapshot.queryParams.holdQuery != undefined) {
                        var holdQuery = this.route.snapshot.queryParams.holdQuery;
                        if (holdQuery != null && holdQuery) {
                            var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].getItem("additionalSearchStringDanhSachDuocPhamBV");
                            if (additionalSearchString != null) {
                                this.gridChild.searchString = additionalSearchString;
                                hasLocalSearchString = true;
                            }
                        }
                    }
                    if (!hasLocalSearchString) {
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].removeItem("additionalSearchStringDanhSachDuocPhamBV");
                    }
                    this.gridColumns = [
                        { Field: "Ma", Title: "Mã", Width: 78, Sortable: true, LinkDetail: true },
                        { Field: "Ten", Title: "Tên", MinWidth: 150, Sortable: true, LinkDetail: true },
                        { Field: "HamLuong", Title: "Hàm lượng", Width: 100, Sortable: true },
                        { Field: "HoatChat", Title: "Hoạt Chất", Width: 100, Sortable: true },
                        { Field: "TenDonViTinh", Title: "ĐVT", Width: 80, Sortable: true },
                        { Field: "TenDuongDung", Title: "Đường dùng", Width: 100, Sortable: true },
                        { Field: "QuyCach", Title: "Quy cách", Width: 120, Sortable: true },
                        { Field: "PhanNhom", Title: "Phân nhóm", Width: 242, Sortable: true },
                        { Field: "SoDangKy", Title: "Số đăng kí", Width: 100, Sortable: true },
                        { Field: "MaHoatChat", Title: "Mã hoạt chất", Width: 128, Sortable: true },
                    ];
                };
                DuocPhamBenhVienListComponent.prototype.exportExcel = function () {
                    var self = this;
                    self.showPopupLoadingData();
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Process)) {
                        self.apiService.postExportExcel('DuocPhamBenhVien/ExportDuocPhamBenhVien', self.gridDuocPhamBenhVien._gridQueryInfo).subscribe(function (resultData) {
                            self.closePopupLoadingData();
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'DuocPhamBenhVien' + dateTimeNow.getFullYear() + '.xlsx');
                        }, function (err) {
                            self.notificationService.showError(err.Message);
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DuocPhamBenhVienListComponent.prototype.extOnDataBound = function (queryString) {
                    this.location.replaceState(this.baseRoute + '?holdQuery=true');
                    queryString = this.gridChild.searchString;
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].setItem("additionalSearchStringDanhSachDuocPhamBV", queryString);
                };
                DuocPhamBenhVienListComponent.prototype.showPopupLoadingData = function () {
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                };
                DuocPhamBenhVienListComponent.prototype.closePopupLoadingData = function () {
                    this.dialog.closeAll();
                };
                return DuocPhamBenhVienListComponent;
            }());
            DuocPhamBenhVienListComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_14__["Location"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDuocPhamBenhVien', { static: false })
            ], DuocPhamBenhVienListComponent.prototype, "gridDuocPhamBenhVien", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"], { static: true })
            ], DuocPhamBenhVienListComponent.prototype, "gridChild", void 0);
            DuocPhamBenhVienListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duoc-pham-benh-vien-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duoc-pham-benh-vien-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-list/duoc-pham-benh-vien-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duoc-pham-benh-vien-list.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-list/duoc-pham-benh-vien-list.component.scss")).default]
                })
            ], DuocPhamBenhVienListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-routing.module.ts": 
        /*!*************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-routing.module.ts ***!
          \*************************************************************************************************************************/
        /*! exports provided: DuocPhamBenhVienRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamBenhVienRoutingModule", function () { return DuocPhamBenhVienRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _duoc_pham_benh_vien_list_duoc_pham_benh_vien_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./duoc-pham-benh-vien-list/duoc-pham-benh-vien-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-list/duoc-pham-benh-vien-list.component.ts");
            /* harmony import */ var _duoc_pham_benh_vien_create_duoc_pham_benh_vien_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./duoc-pham-benh-vien-create/duoc-pham-benh-vien-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-create/duoc-pham-benh-vien-create.component.ts");
            /* harmony import */ var _duoc_pham_benh_vien_update_duoc_pham_benh_vien_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./duoc-pham-benh-vien-update/duoc-pham-benh-vien-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-update/duoc-pham-benh-vien-update.component.ts");
            var routes = [
                {
                    path: '',
                    component: _duoc_pham_benh_vien_list_duoc_pham_benh_vien_list_component__WEBPACK_IMPORTED_MODULE_6__["DuocPhamBenhVienListComponent"],
                    data: {
                        title: 'Danh mục dược phẩm bệnh viện',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhMucDuocPhamBenhVien,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
                {
                    path: 'them',
                    component: _duoc_pham_benh_vien_create_duoc_pham_benh_vien_create_component__WEBPACK_IMPORTED_MODULE_7__["DuocPhamBenhVienCreateComponent"],
                    data: {
                        title: 'Thêm dược phẩm bệnh viện',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhMucDuocPhamBenhVien,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].Add
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
                {
                    path: 'chinh-sua/:id',
                    component: _duoc_pham_benh_vien_update_duoc_pham_benh_vien_update_component__WEBPACK_IMPORTED_MODULE_8__["DuocPhamBenhVienUpdateComponent"],
                    data: {
                        title: 'Chỉnh sửa dược phẩm bệnh viện',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhMucDuocPhamBenhVien,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                }
            ];
            var DuocPhamBenhVienRoutingModule = /** @class */ (function () {
                function DuocPhamBenhVienRoutingModule() {
                }
                return DuocPhamBenhVienRoutingModule;
            }());
            DuocPhamBenhVienRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], DuocPhamBenhVienRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-shared/duoc-pham-benh-vien-shared.component.scss": 
        /*!********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-shared/duoc-pham-benh-vien-shared.component.scss ***!
          \********************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9kdW9jLXBoYW0tYmVuaC12aWVuL2R1b2MtcGhhbS1iZW5oLXZpZW4tc2hhcmVkL2R1b2MtcGhhbS1iZW5oLXZpZW4tc2hhcmVkLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-shared/duoc-pham-benh-vien-shared.component.ts": 
        /*!******************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-shared/duoc-pham-benh-vien-shared.component.ts ***!
          \******************************************************************************************************************************************************/
        /*! exports provided: DuocPhamBenhVienSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamBenhVienSharedComponent", function () { return DuocPhamBenhVienSharedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _duoc_pham_benh_vien_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../duoc-pham-benh-vien.model */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien.model.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            var DuocPhamBenhVienSharedComponent = /** @class */ (function () {
                function DuocPhamBenhVienSharedComponent(route, baseService, apiService, notificationService) {
                    this.route = route;
                    this.baseService = baseService;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.duocPhamBenhVien = new _duoc_pham_benh_vien_model__WEBPACK_IMPORTED_MODULE_2__["DuocPhamBenhVien"]();
                    this.isCreate = true;
                    this.isAllowInputInfor = false;
                    //===================================================================================================================
                    ///BVHD-3454
                    this.timeout = null;
                }
                DuocPhamBenhVienSharedComponent.prototype.ngOnInit = function () {
                    this.duocPhamBenhVien = new _duoc_pham_benh_vien_model__WEBPACK_IMPORTED_MODULE_2__["DuocPhamBenhVien"]();
                    var id = this.route.snapshot.params.id;
                    if (id !== undefined && id !== null) {
                        this.getById(id);
                        this.isCreate = false;
                    }
                    this.getListTenNhaSanXuat();
                    this.getListTenNuocSanXuat();
                };
                DuocPhamBenhVienSharedComponent.prototype.nhomChaChange = function (duocPhamBenhVienPhanNhomChaId) {
                    this.duocPhamBenhVien.DuocPhamBenhVienPhanNhomConId = null;
                    this.duocPhamBenhVien.TenDuocPhamBenhVienPhanNhomCon = null;
                    if (duocPhamBenhVienPhanNhomChaId != undefined && duocPhamBenhVienPhanNhomChaId != null) {
                        this.duocPhamBenhVien.DuocPhamBenhVienPhanNhomId = duocPhamBenhVienPhanNhomChaId;
                    }
                    else {
                        this.duocPhamBenhVien.DuocPhamBenhVienPhanNhomId = null;
                    }
                    this.getMaTaoMoiDuocPham(null, this.duocPhamBenhVien.DuocPhamBenhVienPhanNhomId);
                };
                DuocPhamBenhVienSharedComponent.prototype.nhomConChange = function (duocPhamBenhVienPhanNhomConId) {
                    if (duocPhamBenhVienPhanNhomConId != undefined && duocPhamBenhVienPhanNhomConId != null) {
                        this.duocPhamBenhVien.DuocPhamBenhVienPhanNhomId = duocPhamBenhVienPhanNhomConId;
                    }
                    else {
                        this.duocPhamBenhVien.DuocPhamBenhVienPhanNhomId = this.duocPhamBenhVien.DuocPhamBenhVienPhanNhomChaId;
                    }
                    this.getMaTaoMoiDuocPham(null, this.duocPhamBenhVien.DuocPhamBenhVienPhanNhomId);
                };
                DuocPhamBenhVienSharedComponent.prototype.modelChangeLoaiDieuKienBaoQuanDuocPham = function (event) {
                    this.duocPhamBenhVien.ThongTinDieuKienBaoQuanDuocPham = null;
                    this.isAllowInputInfor = false;
                    if (event === 4) { // chọn khác emun 4
                        this.isAllowInputInfor = true;
                    }
                };
                DuocPhamBenhVienSharedComponent.prototype.getSharedData = function () {
                    return this.duocPhamBenhVien;
                };
                DuocPhamBenhVienSharedComponent.prototype.getById = function (id) {
                    var _this = this;
                    this.baseService.getById(id).subscribe(function (resultData) {
                        _this.duocPhamBenhVien = resultData;
                        _this.isAllowInputInfor = _this.duocPhamBenhVien.LoaiDieuKienBaoQuanDuocPham === 4 ? true : false;
                    });
                };
                DuocPhamBenhVienSharedComponent.prototype.valueChangeMaHoatChat = function (event) {
                    if (event != null && event != "") {
                        var item = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].findObjectByKey(this.maHoatChatAutoComplete._data, "MaHoatChat", event);
                        if (item != null) {
                            this.duocPhamBenhVien.HoatChat = item.HoatChat;
                        }
                    }
                };
                DuocPhamBenhVienSharedComponent.prototype.valueChangeHoatChat = function (event) {
                    if (event != null && event != "") {
                        var item = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].findObjectByKey(this.hoatChatAutoComplete._data, "HoatChat", event);
                        if (item != null) {
                            this.duocPhamBenhVien.MaHoatChat = item.MaHoatChat;
                        }
                    }
                };
                DuocPhamBenhVienSharedComponent.prototype.getListTenNhaSanXuat = function () {
                    var _this = this;
                    this.apiService.get("DuocPham/GetListTenNhaSanXuatAsync").subscribe(function (resultData) {
                        _this.nhaSanXuatDataSource = resultData;
                    });
                };
                DuocPhamBenhVienSharedComponent.prototype.getListTenNuocSanXuat = function () {
                    var _this = this;
                    this.apiService.get("DuocPham/GetListTenNuocSanXuatAsync").subscribe(function (resultData) {
                        _this.nuocSanXuatDataSource = resultData;
                    });
                };
                DuocPhamBenhVienSharedComponent.prototype.changeTenDuocPham = function (event) {
                    if (event) {
                        var self = this;
                        clearTimeout(self.timeout);
                        self.timeout = setTimeout(function () {
                            self.getMaTaoMoiDuocPham(event);
                        }, 500);
                    }
                };
                DuocPhamBenhVienSharedComponent.prototype.getMaTaoMoiDuocPham = function (tenDuocPham, phanNhomId) {
                    var _this = this;
                    if (tenDuocPham === void 0) { tenDuocPham = null; }
                    if (phanNhomId === void 0) { phanNhomId = null; }
                    if (this.duocPhamBenhVien.Id == null || this.duocPhamBenhVien.Id == 0) {
                        var tenDuocPhamTemp = tenDuocPham == null ? this.duocPhamBenhVien.Ten : tenDuocPham;
                        var phanNhomIdTemp = phanNhomId == null ? this.duocPhamBenhVien.DuocPhamBenhVienPhanNhomId : phanNhomId;
                        if (tenDuocPhamTemp != null && phanNhomIdTemp != null) {
                            var obj = {
                                TenDuocPham: tenDuocPhamTemp,
                                PhanNhomId: phanNhomIdTemp
                            };
                            this.apiService.post("DuocPhamBenhVien/GetMaTaoMoiDuocPham", obj).subscribe(function (resultData) {
                                if (resultData) {
                                    _this.duocPhamBenhVien.MaDuocPhamBenhVien = resultData;
                                }
                            }, function (err) {
                                _this.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                            });
                        }
                    }
                };
                return DuocPhamBenhVienSharedComponent;
            }());
            DuocPhamBenhVienSharedComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("maHoatChatAutoComplete", { static: true })
            ], DuocPhamBenhVienSharedComponent.prototype, "maHoatChatAutoComplete", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("hoatChatAutoComplete", { static: true })
            ], DuocPhamBenhVienSharedComponent.prototype, "hoatChatAutoComplete", void 0);
            DuocPhamBenhVienSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duoc-pham-benh-vien-shared',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duoc-pham-benh-vien-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-shared/duoc-pham-benh-vien-shared.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duoc-pham-benh-vien-shared.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-shared/duoc-pham-benh-vien-shared.component.scss")).default]
                })
            ], DuocPhamBenhVienSharedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-update/duoc-pham-benh-vien-update.component.scss": 
        /*!********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-update/duoc-pham-benh-vien-update.component.scss ***!
          \********************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9kdW9jLXBoYW0tYmVuaC12aWVuL2R1b2MtcGhhbS1iZW5oLXZpZW4tdXBkYXRlL2R1b2MtcGhhbS1iZW5oLXZpZW4tdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-update/duoc-pham-benh-vien-update.component.ts": 
        /*!******************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-update/duoc-pham-benh-vien-update.component.ts ***!
          \******************************************************************************************************************************************************/
        /*! exports provided: DuocPhamBenhVienUpdateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamBenhVienUpdateComponent", function () { return DuocPhamBenhVienUpdateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _duoc_pham_benh_vien_shared_duoc_pham_benh_vien_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../duoc-pham-benh-vien-shared/duoc-pham-benh-vien-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-shared/duoc-pham-benh-vien-shared.component.ts");
            var DuocPhamBenhVienUpdateComponent = /** @class */ (function () {
                function DuocPhamBenhVienUpdateComponent(router, route) {
                    this.router = router;
                    this.route = route;
                }
                DuocPhamBenhVienUpdateComponent.prototype.ngOnInit = function () {
                };
                DuocPhamBenhVienUpdateComponent.prototype.onUpdated = function () {
                    this.router.navigate(["/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien"], { queryParams: { holdQuery: true } });
                };
                DuocPhamBenhVienUpdateComponent.prototype.canceled = function () {
                    this.router.navigate(["/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien"], { queryParams: { holdQuery: true } });
                };
                return DuocPhamBenhVienUpdateComponent;
            }());
            DuocPhamBenhVienUpdateComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_duoc_pham_benh_vien_shared_duoc_pham_benh_vien_shared_component__WEBPACK_IMPORTED_MODULE_3__["DuocPhamBenhVienSharedComponent"], { static: true })
            ], DuocPhamBenhVienUpdateComponent.prototype, "shared", void 0);
            DuocPhamBenhVienUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duoc-pham-benh-vien-update',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duoc-pham-benh-vien-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-update/duoc-pham-benh-vien-update.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duoc-pham-benh-vien-update.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-update/duoc-pham-benh-vien-update.component.scss")).default]
                })
            ], DuocPhamBenhVienUpdateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien.model.ts": 
        /*!****************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien.model.ts ***!
          \****************************************************************************************************************/
        /*! exports provided: DuocPhamBenhVien, DuocPhamBenhVienGiaBaoHiem */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamBenhVien", function () { return DuocPhamBenhVien; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamBenhVienGiaBaoHiem", function () { return DuocPhamBenhVienGiaBaoHiem; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var DuocPhamBenhVien = /** @class */ (function () {
                function DuocPhamBenhVien(Id, MaThuocBenhVien, Ten, TenTiengAnh, SoDangKy, STTHoatChat, MaHoatChat, HoatChat, NhaSanXuat, NuocSanXuat, DuongDungId, TenDuongDung, HamLuong, QuyCach, TieuChuan, DangBaoChe, DonViTinhId, TenDonViTinh, HanSuDung, HieuLuc, IsDisabled, HuongDan, MieuTa, MoTa, LoaiThuocHoacHoatChat, TenLoaiThuocHoacHoatChat, ChiDinh, ChongChiDinh, LieuLuongCachDung, TacDungPhu, ChuYDePhong, LaThucPhamChucNang, MaDuocPhamBenhVien, DieuKienBaoHiemThanhToan, DuocPhamBenhVienPhanNhomId, DuocPhamBenhVienPhanNhomConId, TenDuocPhamBenhVienPhanNhomCon, DuocPhamBenhVienPhanNhomChaId, TenDuocPhamBenhVienPhanNhomCha, TheTich, HeSoDinhMucDonViTinh, LaThuocHuongThanGayNghien, LoaiThuocTheoQuanLy, TenPhanLoaiThuocTheoQuanLy, MaATC, DuocPhamCoDau, MayXetNghiemIds, LoaiDieuKienBaoQuanDuocPham, ThongTinDieuKienBaoQuanDuocPham) {
                    if (Id === void 0) { Id = 0; }
                    if (MaThuocBenhVien === void 0) { MaThuocBenhVien = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (TenTiengAnh === void 0) { TenTiengAnh = null; }
                    if (SoDangKy === void 0) { SoDangKy = null; }
                    if (STTHoatChat === void 0) { STTHoatChat = null; }
                    if (MaHoatChat === void 0) { MaHoatChat = null; }
                    if (HoatChat === void 0) { HoatChat = null; }
                    if (NhaSanXuat === void 0) { NhaSanXuat = null; }
                    if (NuocSanXuat === void 0) { NuocSanXuat = null; }
                    if (DuongDungId === void 0) { DuongDungId = null; }
                    if (TenDuongDung === void 0) { TenDuongDung = null; }
                    if (HamLuong === void 0) { HamLuong = null; }
                    if (QuyCach === void 0) { QuyCach = null; }
                    if (TieuChuan === void 0) { TieuChuan = null; }
                    if (DangBaoChe === void 0) { DangBaoChe = null; }
                    if (DonViTinhId === void 0) { DonViTinhId = null; }
                    if (TenDonViTinh === void 0) { TenDonViTinh = null; }
                    if (HanSuDung === void 0) { HanSuDung = null; }
                    if (HieuLuc === void 0) { HieuLuc = true; }
                    if (IsDisabled === void 0) { IsDisabled = false; }
                    if (HuongDan === void 0) { HuongDan = null; }
                    if (MieuTa === void 0) { MieuTa = null; }
                    if (MoTa === void 0) { MoTa = null; }
                    if (LoaiThuocHoacHoatChat === void 0) { LoaiThuocHoacHoatChat = null; }
                    if (TenLoaiThuocHoacHoatChat === void 0) { TenLoaiThuocHoacHoatChat = null; }
                    if (ChiDinh === void 0) { ChiDinh = null; }
                    if (ChongChiDinh === void 0) { ChongChiDinh = null; }
                    if (LieuLuongCachDung === void 0) { LieuLuongCachDung = null; }
                    if (TacDungPhu === void 0) { TacDungPhu = null; }
                    if (ChuYDePhong === void 0) { ChuYDePhong = null; }
                    if (LaThucPhamChucNang === void 0) { LaThucPhamChucNang = null; }
                    if (MaDuocPhamBenhVien === void 0) { MaDuocPhamBenhVien = null; }
                    if (DieuKienBaoHiemThanhToan === void 0) { DieuKienBaoHiemThanhToan = null; }
                    if (DuocPhamBenhVienPhanNhomId === void 0) { DuocPhamBenhVienPhanNhomId = null; }
                    if (DuocPhamBenhVienPhanNhomConId === void 0) { DuocPhamBenhVienPhanNhomConId = null; }
                    if (TenDuocPhamBenhVienPhanNhomCon === void 0) { TenDuocPhamBenhVienPhanNhomCon = null; }
                    if (DuocPhamBenhVienPhanNhomChaId === void 0) { DuocPhamBenhVienPhanNhomChaId = null; }
                    if (TenDuocPhamBenhVienPhanNhomCha === void 0) { TenDuocPhamBenhVienPhanNhomCha = null; }
                    if (TheTich === void 0) { TheTich = null; }
                    if (HeSoDinhMucDonViTinh === void 0) { HeSoDinhMucDonViTinh = null; }
                    if (LaThuocHuongThanGayNghien === void 0) { LaThuocHuongThanGayNghien = null; }
                    if (LoaiThuocTheoQuanLy === void 0) { LoaiThuocTheoQuanLy = null; }
                    if (TenPhanLoaiThuocTheoQuanLy === void 0) { TenPhanLoaiThuocTheoQuanLy = null; }
                    if (MaATC === void 0) { MaATC = null; }
                    if (DuocPhamCoDau === void 0) { DuocPhamCoDau = null; }
                    if (MayXetNghiemIds === void 0) { MayXetNghiemIds = null; }
                    if (LoaiDieuKienBaoQuanDuocPham === void 0) { LoaiDieuKienBaoQuanDuocPham = null; }
                    if (ThongTinDieuKienBaoQuanDuocPham === void 0) { ThongTinDieuKienBaoQuanDuocPham = null; }
                    this.Id = Id;
                    this.MaThuocBenhVien = MaThuocBenhVien;
                    this.Ten = Ten;
                    this.TenTiengAnh = TenTiengAnh;
                    this.SoDangKy = SoDangKy;
                    this.STTHoatChat = STTHoatChat;
                    this.MaHoatChat = MaHoatChat;
                    this.HoatChat = HoatChat;
                    this.NhaSanXuat = NhaSanXuat;
                    this.NuocSanXuat = NuocSanXuat;
                    this.DuongDungId = DuongDungId;
                    this.TenDuongDung = TenDuongDung;
                    this.HamLuong = HamLuong;
                    this.QuyCach = QuyCach;
                    this.TieuChuan = TieuChuan;
                    this.DangBaoChe = DangBaoChe;
                    this.DonViTinhId = DonViTinhId;
                    this.TenDonViTinh = TenDonViTinh;
                    this.HanSuDung = HanSuDung;
                    this.HieuLuc = HieuLuc;
                    this.IsDisabled = IsDisabled;
                    this.HuongDan = HuongDan;
                    this.MieuTa = MieuTa;
                    this.MoTa = MoTa;
                    this.LoaiThuocHoacHoatChat = LoaiThuocHoacHoatChat;
                    this.TenLoaiThuocHoacHoatChat = TenLoaiThuocHoacHoatChat;
                    this.ChiDinh = ChiDinh;
                    this.ChongChiDinh = ChongChiDinh;
                    this.LieuLuongCachDung = LieuLuongCachDung;
                    this.TacDungPhu = TacDungPhu;
                    this.ChuYDePhong = ChuYDePhong;
                    this.LaThucPhamChucNang = LaThucPhamChucNang;
                    this.MaDuocPhamBenhVien = MaDuocPhamBenhVien;
                    this.DieuKienBaoHiemThanhToan = DieuKienBaoHiemThanhToan;
                    this.DuocPhamBenhVienPhanNhomId = DuocPhamBenhVienPhanNhomId;
                    this.DuocPhamBenhVienPhanNhomConId = DuocPhamBenhVienPhanNhomConId;
                    this.TenDuocPhamBenhVienPhanNhomCon = TenDuocPhamBenhVienPhanNhomCon;
                    this.DuocPhamBenhVienPhanNhomChaId = DuocPhamBenhVienPhanNhomChaId;
                    this.TenDuocPhamBenhVienPhanNhomCha = TenDuocPhamBenhVienPhanNhomCha;
                    this.TheTich = TheTich;
                    this.HeSoDinhMucDonViTinh = HeSoDinhMucDonViTinh;
                    this.LaThuocHuongThanGayNghien = LaThuocHuongThanGayNghien;
                    this.LoaiThuocTheoQuanLy = LoaiThuocTheoQuanLy;
                    this.TenPhanLoaiThuocTheoQuanLy = TenPhanLoaiThuocTheoQuanLy;
                    this.MaATC = MaATC;
                    this.DuocPhamCoDau = DuocPhamCoDau;
                    this.MayXetNghiemIds = MayXetNghiemIds;
                    this.LoaiDieuKienBaoQuanDuocPham = LoaiDieuKienBaoQuanDuocPham;
                    this.ThongTinDieuKienBaoQuanDuocPham = ThongTinDieuKienBaoQuanDuocPham;
                }
                return DuocPhamBenhVien;
            }());
            var DuocPhamBenhVienGiaBaoHiem = /** @class */ (function () {
                function DuocPhamBenhVienGiaBaoHiem(DuocPhamBenhVienId, Gia, TuNgay, DenNgay, TiLeBaoHiemThanhToan) {
                    if (DuocPhamBenhVienId === void 0) { DuocPhamBenhVienId = 0; }
                    if (Gia === void 0) { Gia = null; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    if (TiLeBaoHiemThanhToan === void 0) { TiLeBaoHiemThanhToan = null; }
                    this.DuocPhamBenhVienId = DuocPhamBenhVienId;
                    this.Gia = Gia;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                    this.TiLeBaoHiemThanhToan = TiLeBaoHiemThanhToan;
                }
                return DuocPhamBenhVienGiaBaoHiem;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien.module.ts": 
        /*!*****************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien.module.ts ***!
          \*****************************************************************************************************************/
        /*! exports provided: DuocPhamBenhVienModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamBenhVienModule", function () { return DuocPhamBenhVienModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _duoc_pham_benh_vien_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./duoc-pham-benh-vien.service */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien.service.ts");
            /* harmony import */ var _duoc_pham_benh_vien_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./duoc-pham-benh-vien-routing.module */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-routing.module.ts");
            /* harmony import */ var _duoc_pham_benh_vien_list_duoc_pham_benh_vien_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./duoc-pham-benh-vien-list/duoc-pham-benh-vien-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-list/duoc-pham-benh-vien-list.component.ts");
            /* harmony import */ var _duoc_pham_benh_vien_create_duoc_pham_benh_vien_create_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./duoc-pham-benh-vien-create/duoc-pham-benh-vien-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-create/duoc-pham-benh-vien-create.component.ts");
            /* harmony import */ var _duoc_pham_benh_vien_shared_duoc_pham_benh_vien_shared_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./duoc-pham-benh-vien-shared/duoc-pham-benh-vien-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-shared/duoc-pham-benh-vien-shared.component.ts");
            /* harmony import */ var _duoc_pham_benh_vien_update_duoc_pham_benh_vien_update_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./duoc-pham-benh-vien-update/duoc-pham-benh-vien-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien-update/duoc-pham-benh-vien-update.component.ts");
            var DuocPhamBenhVienModule = /** @class */ (function () {
                function DuocPhamBenhVienModule() {
                }
                return DuocPhamBenhVienModule;
            }());
            DuocPhamBenhVienModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_duoc_pham_benh_vien_list_duoc_pham_benh_vien_list_component__WEBPACK_IMPORTED_MODULE_18__["DuocPhamBenhVienListComponent"], _duoc_pham_benh_vien_create_duoc_pham_benh_vien_create_component__WEBPACK_IMPORTED_MODULE_19__["DuocPhamBenhVienCreateComponent"], _duoc_pham_benh_vien_shared_duoc_pham_benh_vien_shared_component__WEBPACK_IMPORTED_MODULE_20__["DuocPhamBenhVienSharedComponent"], _duoc_pham_benh_vien_update_duoc_pham_benh_vien_update_component__WEBPACK_IMPORTED_MODULE_21__["DuocPhamBenhVienUpdateComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _duoc_pham_benh_vien_routing_module__WEBPACK_IMPORTED_MODULE_17__["DuocPhamBenhVienRoutingModule"]
                    ],
                    providers: [
                        _duoc_pham_benh_vien_service__WEBPACK_IMPORTED_MODULE_16__["DuocPhamBenhVienService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_11__["BaseService"], useClass: _duoc_pham_benh_vien_service__WEBPACK_IMPORTED_MODULE_16__["DuocPhamBenhVienService"] },
                    ]
                })
            ], DuocPhamBenhVienModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien.service.ts": 
        /*!******************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien.service.ts ***!
          \******************************************************************************************************************/
        /*! exports provided: DuocPhamBenhVienService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamBenhVienService", function () { return DuocPhamBenhVienService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var DuocPhamBenhVienService = /** @class */ (function (_super) {
                __extends(DuocPhamBenhVienService, _super);
                function DuocPhamBenhVienService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'DuocPhamBenhVien';
                    return _this;
                }
                return DuocPhamBenhVienService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            DuocPhamBenhVienService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            DuocPhamBenhVienService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DuocPhamBenhVienService);
            /***/ 
        })
    }]);
//# sourceMappingURL=danh-muc-nhom-he-thong-benh-vien-duoc-pham-benh-vien-duoc-pham-benh-vien-module-es2015.js.map
//# sourceMappingURL=danh-muc-nhom-he-thong-benh-vien-duoc-pham-benh-vien-duoc-pham-benh-vien-module-es5.js.map
//# sourceMappingURL=danh-muc-nhom-he-thong-benh-vien-duoc-pham-benh-vien-duoc-pham-benh-vien-module-es5.js.map