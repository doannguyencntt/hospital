(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kham-doan-kham-doan-goi-chung-suc-khoe-kham-doan-goi-kham-chung-suc-khoe-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-chon-file-popup/kham-doan-goi-kham-chung-suc-khoe-chon-file-popup.component.html":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-chon-file-popup/kham-doan-goi-kham-chung-suc-khoe-chon-file-popup.component.html ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">Nhập danh sách gói khám từ excel</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close [mat-dialog-close]=\"null\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"height: 80px;\">\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <app-upload id=\"upload\" #fileChuKy fxFlex=\"100%\" fxFlex.sm=\"100%\"\n            [allowedExtensions]=\"allowedExtensions\" [invalidFileExtensionMess]=\"invalidFileExtensionMess\" \n            label=\"Chọn đường dẫn\" [(model)]=\"file\" [template]=\"template\" (uploadFileDone)=\"uploadFileDone($event)\"\n            [required]=\"true\"\n            [validationerror]=\"'file' | validationerror:validationErrors\">\n        </app-upload>\n    \n    <ng-template #template let-files>\n        <table width=\"100%\" class=\"table-combobox\">\n            <tr>\n                <td>\n                    <a *ngIf=\"files[0].error\" title=\"{{'Tải file bị lỗi: '+files[0].error}}\"\n                        (click)=\"fileChuKy.viewFile(files[0])\"\n                        class=\"custom-name red\">{{files[0].name}}</a>\n                    <a *ngIf=\"!files[0].error\" title=\"{{files[0].name}}\"\n                        (click)=\"fileChuKy.viewFile(files[0])\" class=\"green\"\n                        class=\"custom-name green\">{{files[0].name}}</a>\n                </td>\n                <td style=\"width:25px\">\n                    <a type=\"button\" (click)=\"fileChuKy.remove(files[0].uid)\" mat-icon-button>\n                        <mat-icon [icIcon]=\"icClear\"></mat-icon>\n                    </a>\n                </td>\n            </tr>\n        </table>\n    </ng-template>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions class=\"mt-4 pb-5\">\n    <button style=\"margin-left: auto;\" type=\"button\" mat-stroked-button color=\"primary\"[mat-dialog-close]=\"null\">Hủy</button>\n    <button mat-raised-button mat-button color=\"primary\">Ok</button>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-detail-popup/kham-doan-goi-kham-chung-suc-khoe-detail-popup.component.html":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-detail-popup/kham-doan-goi-kham-chung-suc-khoe-detail-popup.component.html ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <app-header-form\n        *ngIf=\"dataKhamDoan==null || (dataKhamDoan != undefined && dataKhamDoan!=null&&dataKhamDoan.LaHopDongKhamSucKhoe!=true)\"\n        [crumbs]=\"[ {Title:'Khám Đoàn',Path:''} \n        ,{Title:'DS Gói Khám Sức Khỏe', Path: '/kham-doan/goi-kham', queryParams: {holdQuery : true}}\n        ,{Title: header,Path:'',Active:true}\n    ]\" [isicMoreVert]=\"false\">\n    </app-header-form>\n    <div class=\"p-gutter\" vexContainer>\n        <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n            <div class=\"card\" fxFlex=\"auto\">\n                <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                    *ngIf=\"dataKhamDoan==null || (dataKhamDoan != undefined && dataKhamDoan!=null&&dataKhamDoan.LaHopDongKhamSucKhoe!=true)\">\n                    <h2 class=\"title m-0\">{{title}}</h2>\n                </div>\n\n                <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                    <div class=\"border-b\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                        fxLayoutGap.lt-sm=\"0\">\n\n                        <app-textbox id=\"maGoiKham\" fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"Mã gói khám\" [required]=\"true\"\n                            [maxlength]=\"50\" [disabled]=\"khamSucKhoeDoan.IsKetThucHopDong \"\n                            [(model)]=\"khamSucKhoeDoan.Ma\" [validationerror]=\"'Ma' | validationerror:validationErrors\">\n                        </app-textbox>\n\n                        <app-textbox id=\"tenGoiKham\" fxFlex=\"40%\" fxFlex.sm=\"40%\" label=\"Tên gói khám\" [required]=\"true\"\n                            [maxlength]=\"250\" [disabled]=\"khamSucKhoeDoan.IsKetThucHopDong\"\n                            [(model)]=\"khamSucKhoeDoan.Ten\"\n                            [validationerror]=\"'Ten' | validationerror:validationErrors\">\n                        </app-textbox>\n\n                        <div fxFlex=\"25%\" fxFlex.sm=\"25%\">\n                            <div class=\"container-custom no-label\">\n                                <label>&nbsp;</label>\n                                <div fxLayout=\"row\" fxLayoutGap=\"16px\">\n                                    <app-checkbox fxFlex=\"100%\" id=\"GoiChung\" [(model)]=\"khamSucKhoeDoan.GoiChung\"\n                                        (modelChange)=\"checkGoiChung($event)\"\n                                        [disabled]=\"disabled\" label=\"Dịch vụ chung trong gói\" value=\"true\"></app-checkbox>\n                                </div>\n                                <div fxLayout=\"row\" fxLayoutGap=\"16px\">\n                                    <app-checkbox fxFlex=\"100%\" id=\"GoiDichVuPhatSinh\"\n                                        [(model)]=\"khamSucKhoeDoan.GoiDichVuPhatSinh\" [disabled]=\"disabled\"\n                                        (modelChange)=\"checkGoiDichVuPhatSinh($event)\"\n                                        label=\"Dịch vụ ngoài gói\" value=\"true\"></app-checkbox>\n                                </div>\n                            </div>\n                        </div>\n\n                        <h3 style=\"display: flex;\" fxFlex=\"100%\" class=\"sub-title\">\n                            Danh Sách Dịch Vụ\n                        </h3>\n\n                        <ng-container>\n                            <app-combobox #comboBoxDichVu id=\"dichVu\" fxFlex=\"50%\" fxFlex.sm=\"50%\" label=\"Dịch vụ\"\n                                [required]=\"true\" url=\"KhamDoan/GetDichVuKhamBenhBenhVienVaDichVuKyThuatBenhVienTaoGoiKSKs\"\n                                (selectionChange)=\"loaiGiaChange($event, 'dichvu')\" [disabled]=\"isUpdate\"\n                                [queryInfo]=\"{ParameterDependencies:'{CoGoiPhatSinh:' + khamSucKhoeDoan.GoiDichVuPhatSinh +'}', Take: 50}\"\n                                [(model)]=\"dichVuKhamSucKhoeDoan.DichVuKyThuatBenhVienId\" [reloadForGrid]=\"true\"\n                                (openCombobox)=\"openCombobox($event)\" (keyup)=\"onKey($event)\"\n                                [template]=\"dichVuTemplate\" [templateHeader]=\"dichVuTemplateHeader\" popupSettings=\"null\"\n                                [validationerror]=\"'DichVuKyThuatBenhVienId' | validationerror:validationErrors\">\n                                <ng-template #dichVuTemplateHeader let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <th width=\"30%\">Mã</th>\n                                            <th>Tên</th>\n                                            <th width=\"20%\">Loại</th>\n\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <ng-template #dichVuTemplate let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <td width=\"30%\">{{dataItem.Ma}}</td>\n                                            <td>{{dataItem.Ten}}</td>\n                                            <td width=\"20%\">{{dataItem.LoaiDisplay}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                            </app-combobox>\n                            <app-dropdownlist *ngIf=\"laDichVuKham == false\" id=\"LoaiGia\"\n                                [fxFlex]=\"laDichVuKham == false ? '10%' : '15%'\" label=\"Loại giá\"\n                                url=\"KhamDoan/GetLoaiGiaDichVuKyThuat\" [autoSelectFirstItem]=\"true\" [bind]=\"true\"\n                                [(model)]=\"dichVuKhamSucKhoeDoan.NhomGiaDichVuKyThuatBenhVienId\" [popupSettings]=\"null\"\n                                (modelChange)=\"loaiGiaChange($event, 'gia')\" (keyup)=\"onKey($event)\"\n                                (openDropDownList)=\"openCombobox($event)\">\n                            </app-dropdownlist>\n\n                            <app-dropdownlist *ngIf=\"laDichVuKham == true || laDichVuKham == null\" id=\"LoaiGia\"\n                                [fxFlex]=\"laDichVuKham == false ? '10%' : '15%'\" label=\"Loại giá\"\n                                url=\"KhamDoan/GetLoaiGiaDichVuKhamBenh\" [autoSelectFirstItem]=\"true\" [bind]=\"true\"\n                                [(model)]=\"dichVuKhamSucKhoeDoan.NhomGiaDichVuKyThuatBenhVienId\" [popupSettings]=\"null\"\n                                (modelChange)=\"loaiGiaChange($event, 'gia')\" (keyup)=\"onKey($event)\"\n                                (openDropDownList)=\"openCombobox($event)\">\n                            </app-dropdownlist>\n\n                            <app-textboxnumeric *ngIf=\"laDichVuKham == false\" id=\"soLan\" fxFlex=\"5%\" fxFlex.sm=\"5%\"\n                                [max]=\"9999\" [(model)]=\"dichVuKhamSucKhoeDoan.SoLan\" label=\"SL\" [required]=\"true\"\n                                [min]=\"1\" [validationerror]=\"'SoLan' | validationerror:validationErrors\">\n                            </app-textboxnumeric>\n\n                            <app-textboxnumeric id=\"donGiaBenhVien\" [fxFlex]=\"laDichVuKham == false ? '10%' : '15%'\"\n                                fxFlex.sm=\"10%\" [max]=\"99999999999999999\"\n                                [(model)]=\"dichVuKhamSucKhoeDoan.DonGiaBenhVien\" label=\"ĐG BV\" [decimals]=\"0\"\n                                [disabled]=\"true\" [required]=\"true\"\n                                [validationerror]=\"'DonGiaBenhVien' | validationerror:validationErrors\">\n                            </app-textboxnumeric>\n\n                            <app-textboxnumeric id=\"donGiaUuDai\" [fxFlex]=\"laDichVuKham == false ? '15%' : '10%'\"\n                                [max]=\"99999999999999999\" [(model)]=\"dichVuKhamSucKhoeDoan.DonGiaUuDai\"\n                                label=\"ĐG Ưu đãi\" [required]=\"true\" (keyup)=\"onKey($event)\" [isFormatCurrenly]=\"true\"\n                                [spinners]=\"false\" [step]=\"100\"\n                                [validationerror]=\"'DonGiaUuDai' | validationerror:validationErrors\">\n                            </app-textboxnumeric>\n\n                            <!-- [validationerror]=\"'DonGiaChuaUuDai' | validationerror:validationErrors\" -->\n                            <!-- [required]=\"true\" -->\n                            <app-textboxnumeric id=\"donGiaChuaUu\" fxFlex=\"10%\" [max]=\"99999999999999999\"\n                                [(model)]=\"dichVuKhamSucKhoeDoan.DonGiaChuaUuDai\" label=\"ĐG Chưa ưu đãi\"\n                                (keyup)=\"onKey($event)\" [isFormatCurrenly]=\"true\" [spinners]=\"false\" [step]=\"100\">\n                            </app-textboxnumeric>\n\n                            <app-radio fxFlex=\"20%\" fxFlex.sm=\"20%\" id=\"loaiNoiThucHien\"\n                                [items]=\"[{Value:1,Text:'Nội viện'},{Value:2,Text:'Ngoại viện'}]\"\n                                (modelChange)=\"changeHinhThucKhamBenh()\" label=\"Loại nơi thực hiện\"\n                                [(model)]=\"dichVuKhamSucKhoeDoan.HinhThucKhamBenh\" (keyup)=\"onKey($event)\">\n                            </app-radio>\n\n                            <!------------------------ NỘI VIỆN -->\n                            <app-multiselect #multiselectNoiThucHien *ngIf=\"dichVuKhamSucKhoeDoan.HinhThucKhamBenh == 1\"\n                                id=\"PhongBenhVienId\" idWhere=\"{{id}}\" fxFlex=\"80%\"\n                                [(model)]=\"dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHienIds\" [modelText]=\"\"\n                                label=\"Nơi thực hiện\" class=\"item-no-padding\"\n                                url=\"KhamDoan/GetKhoaPhongGoiKhams?selectedItems={{dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHienIds}}&isMulti=true\"\n                                required=\"true\" popupSettings=\"null\" [template]=\"khoaPhongTemplate\"\n                                [templateHeader]=\"khoaPhongTemplateHeader\" (keyup)=\"onKey($event)\"\n                                [queryInfo]=\"{ParameterDependencies:'{LaDichVuKham:' + laDichVuKham +', HinhThucKhamBenh: ' + dichVuKhamSucKhoeDoan.HinhThucKhamBenh +', DichVuStringId:' + dichVuStringId +'}', Take: 50}\"\n                                [validationerror]=\"'GoiKhamSucKhoeChungNoiThucHienIds' | validationerror:validationErrors\">\n\n                                <ng-template #khoaPhongTemplateHeader let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <th width=\"30%\">Mã</th>\n                                            <th>Tên</th>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <ng-template #khoaPhongTemplate let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <td width=\"30%\">{{dataItem.Ma}}</td>\n                                            <td>{{dataItem.Ten}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                            </app-multiselect>\n\n                            <!------------------------ NGOẠI VIỆN -->\n                            <app-multiselect #multiselectNoiThucHien *ngIf=\"dichVuKhamSucKhoeDoan.HinhThucKhamBenh == 2\"\n                                id=\"PhongBenhVienId\" fxFlex=\"80%\"\n                                [(model)]=\"dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHienIds\" [modelText]=\"\"\n                                label=\"Nơi thực hiện\" class=\"item-no-padding\" \n                                url=\"KhamDoan/GetKhoaPhongGoiKhams?selectedItems={{dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHienIds}}&isMulti=true\"\n                                required=\"true\" popupSettings=\"null\" [template]=\"khoaPhongTemplate\"\n                                [templateHeader]=\"khoaPhongTemplateHeader\" (keyup)=\"onKey($event)\"\n                                [queryInfo]=\"{ParameterDependencies:'{LaDichVuKham: '+laDichVuKham+',HinhThucKhamBenh: ' + dichVuKhamSucKhoeDoan.HinhThucKhamBenh +', DichVuStringId:' + dichVuStringId+'}', Take: 50}\"\n                                [validationerror]=\"'GoiKhamSucKhoeChungNoiThucHienIds' | validationerror:validationErrors\">\n\n                                <ng-template #khoaPhongTemplateHeader let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <th width=\"30%\">Mã</th>\n                                            <th>Tên</th>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <ng-template #khoaPhongTemplate let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <td width=\"30%\">{{dataItem.Ma}}</td>\n                                            <td>{{dataItem.Ten}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                            </app-multiselect>\n\n                            <div fxFlex=\"100%\">\n                                <fieldset>\n                                    <legend>Thông tin yêu cầu</legend>\n                                    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                        fxLayoutGap.lt-sm=\"0\">\n\n                                        <div fxFlex=\"25%\" fxFlex.sm=\"25%\">\n                                            <div class=\"container-custom no-label\">\n                                                <label>Giới tính</label>\n                                                <div fxLayout=\"row\">\n                                                    <app-checkbox id=\"gioiTinhNam\" label=\"Nam\" class=\"mb-1\"\n                                                        [(model)]=\"dichVuKhamSucKhoeDoan.GioiTinhNam\"\n                                                        (keyup)=\"onKey($event)\" style=\"margin-top: 1px;\">\n                                                    </app-checkbox>\n\n                                                    <app-checkbox id=\"gioiTinhNu\" label=\"Nữ\" class=\"ml-4 mb-1\"\n                                                        [(model)]=\"dichVuKhamSucKhoeDoan.GioiTinhNu\"\n                                                        (keyup)=\"onKey($event)\" (modelChange)=\"gioiTinhNuChange($event)\"\n                                                        style=\"margin-top: 1px;\">\n                                                    </app-checkbox>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div fxFlex=\"25%\" fxFlex.sm=\"25%\">\n                                            <div class=\"container-custom no-label\">\n                                                <label>Mang thai</label>\n                                                <div fxLayout=\"row\">\n                                                    <app-checkbox id=\"coMangThai\" label=\"Có\" class=\"mb-1\"\n                                                        [(model)]=\"dichVuKhamSucKhoeDoan.CoMangThai\"\n                                                        (keyup)=\"onKey($event)\"\n                                                        [disabled]=\"!dichVuKhamSucKhoeDoan.GioiTinhNu\"\n                                                        (modelChange)=\"mangThaiChange($event,'Co')\"\n                                                        style=\"margin-top: 1px;\">\n                                                    </app-checkbox>\n\n                                                    <app-checkbox id=\"khongMangThai\" label=\"Không\" class=\"ml-4 mb-1\"\n                                                        [(model)]=\"dichVuKhamSucKhoeDoan.KhongMangThai\"\n                                                        (keyup)=\"onKey($event)\"\n                                                        [disabled]=\"!dichVuKhamSucKhoeDoan.GioiTinhNu\"\n                                                        (modelChange)=\"mangThaiChange($event,'Khong')\"\n                                                        style=\"margin-top: 1px;\">\n                                                    </app-checkbox>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div fxFlex=\"25%\" fxFlex.sm=\"25%\">\n                                            <div class=\"container-custom no-label\">\n                                                <label>Tình trạng hôn nhân</label>\n                                                <div fxLayout=\"row\">\n                                                    <app-checkbox id=\"chuaLapGD\" label=\"Chưa lập gia đình\" class=\"mb-1\"\n                                                        [(model)]=\"dichVuKhamSucKhoeDoan.ChuaLapGiaDinh\"\n                                                        (keyup)=\"onKey($event)\"\n                                                        (modelChange)=\"lapGDChange($event,'Khong')\"\n                                                        style=\"margin-top: 1px;\">\n                                                    </app-checkbox>\n\n                                                    <app-checkbox id=\"daLapGD\" label=\"Đã lập gia đình\" class=\"ml-4 mb-1\"\n                                                        [(model)]=\"dichVuKhamSucKhoeDoan.DaLapGiaDinh\"\n                                                        (keyup)=\"onKey($event)\" (modelChange)=\"lapGDChange($event,'Co')\"\n                                                        style=\"margin-top: 1px;\">\n                                                    </app-checkbox>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <app-textboxnumeric id=\"soTuoiTu\" fxFlex=\"13%\" fxFlex.sm=\"13%\" [min]=\"0\"\n                                            [max]=\"999\" (keyup)=\"onKey($event)\"\n                                            [(model)]=\"dichVuKhamSucKhoeDoan.SoTuoiTu\" label=\"Số tuổi: Từ\">\n                                        </app-textboxnumeric>\n                                        <app-textboxnumeric id=\"soTuoiDen\" fxFlex=\"12%\" fxFlex.sm=\"12%\" [min]=\"0\"\n                                            [max]=\"999\" (keyup)=\"onKey($event)\"\n                                            [(model)]=\"dichVuKhamSucKhoeDoan.SoTuoiDen\" label=\"Số tuổi: Đến\"\n                                            [validationerror]=\"'SoTuoiDen' | validationerror:validationErrors\">\n                                        </app-textboxnumeric>\n\n                                    </div>\n                                </fieldset>\n                            </div>\n                            <div fxFlex=\"100%\" fxLayoutAlign=\"end center\" kendoTooltip>\n                                <button type=\"button\" color=\"primary\" mat-stroked-button mat-button\n                                    (click)=\"huyDichVu()\" class=\"mr-1\">Hủy</button>\n                                <button *ngIf=\"!isUpdate\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                                    (click)=\"themDichVu()\" class=\"mr-1\">Thêm</button>\n                                <button *ngIf=\"isUpdate\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                                    (click)=\"capNhatDichVu()\" class=\"mr-1\">Cập nhật</button>\n                            </div>\n                        </ng-container>\n\n                        <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridDataSource]=\"gridDataSource\"\n                            #gridDichVu [gridColumns]=\"gridColumns\" [allowSortDefault]=\"true\"\n                            [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                            [useActionDefault]=\"false\" [showStt]=\"true\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                            [groups]=\"groups\" maxHeight=\"500\" [pageable]=\"false\">\n                        </app-grid>\n\n                        <ng-template #tenDichVuTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                            <a *ngIf=\"!khamSucKhoeDoan.IsKetThucHopDong\" (click)=\"getDichVuGrid(dataItem)\">\n                                <p kendoTooltip class=\"reverse-ellipsis l\"\n                                    title=\"{{dataItem.TenDichVuKyThuatBenhVien}}\">\n                                    {{dataItem.TenDichVuKyThuatBenhVien}}</p>\n                            </a>\n                            <label *ngIf=\"khamSucKhoeDoan.IsKetThucHopDong\">\n                                {{dataItem.TenDichVuKyThuatBenhVien}}\n                            </label>\n                        </ng-template>\n\n                        <ng-template #donGiaBenhVienTemplate let-dataItem>\n                            {{dataItem.DonGiaBenhVien | number:'0.2-2':'vi-VN'}}\n                        </ng-template>\n                        <ng-template #donGiaUuDaiTemplate let-dataItem>\n                            {{dataItem.DonGiaUuDai | number:'0.2-2':'vi-VN'}}\n                        </ng-template>\n                        <ng-template #donGiaChuaUuDaiTemplate let-dataItem>\n                            {{dataItem.DonGiaChuaUuDai | number:'0.2-2':'vi-VN'}}\n                        </ng-template>\n\n                        <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n                            <strong>{{value}}</strong>\n                        </ng-template>\n\n                        <ng-template #soLanTemplate let-dataItem>\n                            <label *ngIf=\"!dataItem.LaDichVuKham\">\n                                {{dataItem.SoLan}}\n                            </label>\n                        </ng-template>\n\n                        <ng-template #actionTemplate let-dataItem>\n                            <div *ngIf=\"khamSucKhoeDoan.IsKetThucHopDong != true && !isUpdate\" class=\"text-center\"\n                                kendoTooltip>\n                                <button style=\"color: red;\" mat-icon-button kendoTooltip title=\"Xóa\"\n                                    (click)=\"xoaDichVu(dataItem)\" type=\"button\">\n                                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                                </button>\n                            </div>\n                        </ng-template>\n                    </div>\n                    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"form-footer mt-6\">\n                        <button style=\"margin-left: auto;\" type=\"button\" mat-stroked-button color=\"primary\"\n                            (click)=\"quayLai()\">Hủy</button>\n                        <button *ngIf=\"khamSucKhoeDoan.IsKetThucHopDong != true\" mat-raised-button mat-button\n                            color=\"primary\" (click)=\"Luu()\">Lưu</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-list/kham-doan-goi-kham-chung-suc-khoe-list.component.html":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-list/kham-doan-goi-kham-chung-suc-khoe-list.component.html ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"\n                    [\n                        {Title:'Khám Đoàn',Path:''},\n                        {Title:'DS Gói Khám Chung Sức Khỏe',Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">           \n            <app-grid #grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [checkboxAble]=\"false\" [allowSortDefault]=\"false\"\n                [headerTemplate]=\"headerTemplate\" [showStt]=\"true\"\n                urlGetData=\"KhamDoan/GetDataForGridAsyncDanhSachKhamChungSucKhoeDoan\"\n                urlGetTotalPage=\"KhamDoan/GetTotalPageForGridAsyncDanhSachKhamChungSucKhoeDoan\">\n            </app-grid>\n\n\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar px-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <div class=\"bg-card rounded-full border px-4 ml-2\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"timKiemObj.SearchString\"\n                            (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\"\n                            placeholder=\"Nhập từ khóa...\" />\n                    </div>\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\"\n                        (click)=\"clearSearch()\">\n                        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                    </button>\n\n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"ml-auto\" fxFlex=\"none\" mat-icon-button\n                        kendoTooltip title=\"Lọc cột\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                    </button>\n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of _gridColumnsFilter\">\n                            <button class=\"checkbox-item mat-menu-item\" *ngIf=\"!column.HideFilter\">\n                                <mat-checkbox [disabled]=\"!column.HasFilter\" [(ngModel)]=\"_isCheckColumnFilter\"\n                                    color=\"primary\">\n                                    {{ column.Title }}\n                                </mat-checkbox>\n                            </button>\n                        </div>\n                    </mat-menu>\n\n                    <button class=\"ml-3\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Xuất Excel\" type=\"button\"\n                        (click)=\"xuLyXuatExcel()\">\n                        <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                    </button>\n\n                    <button (click)=\"showPopupChiTiet()\" class=\"ml-3 mr-6\" color=\"primary\" fxFlex=\"none\" mat-mini-fab\n                        kendoTooltip title=\"Thêm\" type=\"button\">\n                        <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                    </button>\n                </div>\n            </ng-template>\n\n            <ng-template #maGoiKhamChungTemplate let-dataItem>\n                <a (click)=\"showPopupChiTiet(dataItem.Id)\">\n                    <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.MaGoiKham}}\">{{dataItem.MaGoiKham}}</p>\n                </a>\n            </ng-template>\n                       \n            <ng-template #actionTemplate let-dataItem>\n                <div class=\"text-center\" kendoTooltip>\n                    <button color=\"primary\" mat-icon-button kendoTooltip title=\"Sao chép\" type=\"button\"\n                        (click)=\"showPopupChiTiet(dataItem.Id, true)\">\n                        <mat-icon [icIcon]=\"icCopy\"></mat-icon>\n                    </button>\n                    <button style=\"color: red;\" mat-icon-button kendoTooltip title=\"Xóa\" type=\"button\"\n                        (click)=\"xoa(dataItem.Id)\">\n                        <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                    </button>\n                </div>\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-chon-file-popup/kham-doan-goi-kham-chung-suc-khoe-chon-file-popup.component.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-chon-file-popup/kham-doan-goi-kham-chung-suc-khoe-chon-file-popup.component.scss ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWdvaS1jaHVuZy1zdWMta2hvZS9raGFtLWRvYW4tZ29pLWtoYW0tY2h1bmctc3VjLWtob2UtY2hvbi1maWxlLXBvcHVwL2toYW0tZG9hbi1nb2kta2hhbS1jaHVuZy1zdWMta2hvZS1jaG9uLWZpbGUtcG9wdXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-chon-file-popup/kham-doan-goi-kham-chung-suc-khoe-chon-file-popup.component.ts":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-chon-file-popup/kham-doan-goi-kham-chung-suc-khoe-chon-file-popup.component.ts ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: KhamDoanGoiKhamChungSucKhoeChonFilePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanGoiKhamChungSucKhoeChonFilePopupComponent", function() { return KhamDoanGoiKhamChungSucKhoeChonFilePopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-clear */ "./node_modules/@iconify/icons-ic/twotone-clear.js");
/* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _kham_doan_goi_kham_chung_suc_khoe_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../kham-doan-goi-kham-chung-suc-khoe.model */ "./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe.model.ts");









let KhamDoanGoiKhamChungSucKhoeChonFilePopupComponent = class KhamDoanGoiKhamChungSucKhoeChonFilePopupComponent {
    constructor(dialog, dialogRef, cdRef) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.cdRef = cdRef;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icClear = _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.validationErrors = [];
        this.allowedExtensions = ['.xlsx', '.xls'];
        this.invalidFileExtensionMess = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_4__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_5__["SystemMessage"].InvalidFileExtension, [this.allowedExtensions.toString()]);
        this.file = new _kham_doan_goi_kham_chung_suc_khoe_model__WEBPACK_IMPORTED_MODULE_8__["FileExcelDichVu"]();
        this.fileExcel = null;
    }
    ngOnInit() {
    }
    showPopupLoadingData() {
        if (this.popupLoadingData == undefined
            || this.popupLoadingData == null
            || this.popupLoadingData.openDialogs == undefined
            || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
            this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                disableClose: true,
                width: "200px",
                height: "90px",
                data: { Title: "Đang tải dữ liệu..." },
            });
        }
    }
    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    uploadFileDone(event) {
        this.fileExcel = event;
        this.cdRef.detectChanges();
    }
    close(result = null) {
        this.dialogRef.close(result);
    }
};
KhamDoanGoiKhamChungSucKhoeChonFilePopupComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
KhamDoanGoiKhamChungSucKhoeChonFilePopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kham-doan-goi-kham-chung-suc-khoe-chon-file-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-goi-kham-chung-suc-khoe-chon-file-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-chon-file-popup/kham-doan-goi-kham-chung-suc-khoe-chon-file-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-goi-kham-chung-suc-khoe-chon-file-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-chon-file-popup/kham-doan-goi-kham-chung-suc-khoe-chon-file-popup.component.scss")).default]
    })
], KhamDoanGoiKhamChungSucKhoeChonFilePopupComponent);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-detail-popup/kham-doan-goi-kham-chung-suc-khoe-detail-popup.component.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-detail-popup/kham-doan-goi-kham-chung-suc-khoe-detail-popup.component.scss ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("fieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em;\n  padding-bottom: 5px;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\n.po-h-tn {\n  margin-left: auto;\n  color: #005dab;\n  position: relative;\n  left: 5px;\n}\n\n.po-h-tn mat-icon {\n  display: contents;\n  font-size: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4tZ29pLWNodW5nLXN1Yy1raG9lL2toYW0tZG9hbi1nb2kta2hhbS1jaHVuZy1zdWMta2hvZS1kZXRhaWwtcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxraGFtLWRvYW5cXGtoYW0tZG9hbi1nb2ktY2h1bmctc3VjLWtob2VcXGtoYW0tZG9hbi1nb2kta2hhbS1jaHVuZy1zdWMta2hvZS1kZXRhaWwtcG9wdXBcXGtoYW0tZG9hbi1nb2kta2hhbS1jaHVuZy1zdWMta2hvZS1kZXRhaWwtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWdvaS1jaHVuZy1zdWMta2hvZS9raGFtLWRvYW4tZ29pLWtoYW0tY2h1bmctc3VjLWtob2UtZGV0YWlsLXBvcHVwL2toYW0tZG9hbi1nb2kta2hhbS1jaHVuZy1zdWMta2hvZS1kZXRhaWwtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWdvaS1jaHVuZy1zdWMta2hvZS9raGFtLWRvYW4tZ29pLWtoYW0tY2h1bmctc3VjLWtob2UtZGV0YWlsLXBvcHVwL2toYW0tZG9hbi1nb2kta2hhbS1jaHVuZy1zdWMta2hvZS1kZXRhaWwtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmaWVsZHNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgcGFkZGluZy10b3A6IDAuMzVlbTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbTtcbiAgYm9yZGVyOiAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xufVxuXG4ucG8taC10biB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBjb2xvcjogIzAwNWRhYjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1cHg7XG59XG5cbi5wby1oLXRuIG1hdC1pY29uIHtcbiAgZGlzcGxheTogY29udGVudHM7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn0iLCJmaWVsZHNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgcGFkZGluZy10b3A6IDAuMzVlbTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbTtcbiAgYm9yZGVyOiAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xufVxuXG4ucG8taC10biB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBjb2xvcjogIzAwNWRhYjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1cHg7XG59XG5cbi5wby1oLXRuIG1hdC1pY29uIHtcbiAgZGlzcGxheTogY29udGVudHM7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-detail-popup/kham-doan-goi-kham-chung-suc-khoe-detail-popup.component.ts":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-detail-popup/kham-doan-goi-kham-chung-suc-khoe-detail-popup.component.ts ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: KhamDoanGoiKhamChungSucKhoeDetailPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanGoiKhamChungSucKhoeDetailPopupComponent", function() { return KhamDoanGoiKhamChungSucKhoeDetailPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _kham_doan_goi_kham_chung_suc_khoe_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../kham-doan-goi-kham-chung-suc-khoe.model */ "./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe.model.ts");
/* harmony import */ var src_app_shared_component_dropdowns_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/component/dropdowns/multiselect/multiselect.component */ "./src/app/shared/component/dropdowns/multiselect/multiselect.component.ts");
/* harmony import */ var src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/models/common.model */ "./src/app/shared/models/common.model.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dropdowns_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/component/dropdowns/combobox/combobox.component */ "./src/app/shared/component/dropdowns/combobox/combobox.component.ts");
/* harmony import */ var _kham_doan_goi_kham_suc_khoe_kham_doan_goi_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe.model */ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe.model.ts");





















let KhamDoanGoiKhamChungSucKhoeDetailPopupComponent = class KhamDoanGoiKhamChungSucKhoeDetailPopupComponent {
    constructor(authService, dialog, notificationService, apiService, location, ref, router, route) {
        this.authService = authService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.location = location;
        this.ref = ref;
        this.router = router;
        this.route = route;
        this.afterChangedFromHopDongKham = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.khamSucKhoeDoan = new _kham_doan_goi_kham_chung_suc_khoe_model__WEBPACK_IMPORTED_MODULE_14__["KhamSucKhoeDoanChungViewModel"]();
        this.dichVuKhamSucKhoeDoan = new _kham_doan_goi_kham_chung_suc_khoe_model__WEBPACK_IMPORTED_MODULE_14__["DichVuKhamSucKhoeDoanChungViewModel"]();
        this.lstDichVuKhamSucKhoeDoanGrid = [];
        this.keyIdStringGoiDichVuKhamSucKhoeVo = new _kham_doan_goi_kham_suc_khoe_kham_doan_goi_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_20__["KeyIdStringGoiDichVuKhamSucKhoeVo"]();
        this.dichVuStringId = null;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.isSelectDuocPham = false;
        this.isUpdate = false;
        this.rowIndex = null;
        this.dataEdit = null;
        this.dichVuKhamBenhBvId = null;
        this.nhomGiaDichVuKhamBenhBenhVienId = null;
        this.tenDichVu = null;
        this.gridDataSource = {
            data: [],
            total: 0
        };
        this.validationErrors = [];
        this.format = 'n2';
        this.laDichVuKham = null;
        this.gridColumns = [];
        this.isCreate = false;
        this.title = "";
        this.header = "";
        this.IsHopDongKham = false;
        this.IsCopy = false;
        this.IsKetThucHopDong = false;
        this.disabled = false;
        this.groups = [{ field: 'TenNhom', dir: null }];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].KhamDoanGoiKhamSucKhoe;
        this.dichVuStringId = JSON.stringify(this.keyIdStringGoiDichVuKhamSucKhoeVo);
        this.route.queryParams.subscribe(param => {
            // console.log('param', param);
            this.id = param['Id'];
            this.HopDongKhamId = param['HopDongKhamId'];
            this.IsHopDongKham = this.HopDongKhamId != undefined && this.HopDongKhamId != null;
            this.IsCopy = param['IsCopy'] == 'true';
            this.khamSucKhoeDoan.IsCopy = this.IsCopy;
        });
        this.id = (this.id === undefined || this.id === null) ? 0 : this.id;
        if (this.id == 0) {
            this.isCreate = true;
            this.title = "Thêm gói khám chung  sức khỏe";
            this.header = "Thêm Gói Khám chung sức Khỏe";
        }
        else {
            this.title = "Chi tiết gói khám chung sức khỏe";
            this.header = "Chi Tiết gói khám chung Sức Khỏe";
            this.getById(this.id);
        }
        this.IsHopDongKham = false; // this.data.IsHopDongKham == true;
        this.IsKetThucHopDong = false; // cần cập nhật lại: sẽ get từ api
        this.dichVuKhamSucKhoeDoan.HinhThucKhamBenh = 1;
        //==============================hợp đồng khám qua bên gói khám======================================================      
        if (this.dataKhamDoan != undefined && this.dataKhamDoan != null && this.dataKhamDoan.LaHopDongKhamSucKhoe) {
            this.id = this.dataKhamDoan.GoiKhamChungId;
            if (this.dataKhamDoan.IsCreatedHopDongKhamSucKhoe) {
                this.isCreate = true;
                this.title = "Thêm gói khám sức khỏe";
                this.header = "Thêm Gói Khám Sức Khỏe";
            }
            else {
                this.title = "Chi tiết gói khám sức khỏe";
                this.header = "Chi Tiết Gói Khám Sức Khỏe";
                this.getById(this.dataKhamDoan.GoiKhamChungId);
            }
        }
        this.gridColumns = [
            { Field: "TenNhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "TenDichVuKyThuatBenhVien", Title: "Tên dịch vụ", Width: 120, Template: this.tenDichVuTemplate },
            { Field: "NoiThucHienString", Title: "Nơi thực hiện", Width: 70, ShowTooltip: true },
            { Field: "LoaiGia", Title: "Loại giá", Width: 50 },
            { Field: "SoLan", Title: "SL", Width: 30, Template: this.soLanTemplate },
            { Field: "DonGiaBenhVien", Title: "Đơn giá BV", Width: 90, Template: this.donGiaBenhVienTemplate },
            { Field: "DonGiaUuDai", Title: "ĐG Ưu đãi", Width: 90, Template: this.donGiaUuDaiTemplate },
            { Field: "DonGiaChuaUuDai", Title: "ĐG Chưa ưu đãi", Width: 90, Template: this.donGiaChuaUuDaiTemplate },
            { Field: "GioiTinh", Title: "Giới tính", Width: 60 },
            { Field: "MangThai", Title: "Mang thai", Width: 60 },
            { Field: "TinhTrangHonNhan", Title: "Tình trạng hôn nhân", Width: 100 },
            { Field: "SoTuoiDisplay", Title: "Số tuổi", Width: 60 },
            { Field: "Action", Title: "", Width: 40, Template: this.actionTemplate }
        ];
    }
    showPopupLoadingData() {
        if (this.popupLoadingData == undefined
            || this.popupLoadingData == null
            || this.popupLoadingData.openDialogs == undefined
            || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
            this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                disableClose: true,
                width: "200px",
                height: "90px",
                data: { Title: "Đang tải dữ liệu..." },
            });
        }
    }
    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    showPopupSavingData() {
        this.popupSavingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang lưu dữ liệu..." },
        });
    }
    closePopupSavingData() {
        if (this.popupSavingData != undefined && this.popupSavingData != null) {
            this.popupSavingData.close();
        }
    }
    gioiTinhNuChange(event) {
        if (event == false) {
            this.dichVuKhamSucKhoeDoan.CoMangThai = null;
            this.dichVuKhamSucKhoeDoan.KhongMangThai = null;
        }
    }
    mangThaiChange(event, text) {
        if (text == 'Co') {
            if (event == true) {
                this.dichVuKhamSucKhoeDoan.KhongMangThai = null;
            }
        }
        else {
            if (event == true) {
                this.dichVuKhamSucKhoeDoan.CoMangThai = null;
            }
        }
    }
    lapGDChange(event, text) {
        if (text == 'Co') {
            if (event == true) {
                this.dichVuKhamSucKhoeDoan.ChuaLapGiaDinh = null;
            }
        }
        else {
            if (event == true) {
                this.dichVuKhamSucKhoeDoan.DaLapGiaDinh = null;
            }
        }
    }
    loaiGiaChange(event, text) {
        this.dichVuStringId = null;
        if (text == 'dichvu') {
            this.validationErrors = [];
            if (event != undefined && event != null) {
                //Update 29/11/2021
                let KeyIdString = JSON.parse(event.KeyId);
                this.dichVuKhamBenhBvId = KeyIdString.DichVuId;
                if (KeyIdString.Loai == 1) {
                    this.laDichVuKham = true;
                }
                else {
                    this.laDichVuKham = false;
                    this.dichVuKhamSucKhoeDoan.SoLan = 1;
                }
                this.keyIdStringGoiDichVuKhamSucKhoeVo.DichVuId = KeyIdString.DichVuId;
                this.keyIdStringGoiDichVuKhamSucKhoeVo.Loai = KeyIdString.Loai;
                this.dichVuStringId = JSON.stringify(this.keyIdStringGoiDichVuKhamSucKhoeVo);
                // end
                this.dichVuKhamSucKhoeDoan.MaNhomDichVuBenhVienCha = event.MaNhomDichVuBenhVienCha;
                this.dichVuKhamSucKhoeDoan.MaNhomDichVuBenhVien = event.MaNhomDichVuBenhVien;
                this.dichVuKhamSucKhoeDoan.TenDichVuKyThuatBenhVien = event.Ten;
                this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHienIds = [];
                this.dichVuKhamSucKhoeDoan.ChuyenKhoaKhamSucKhoe = event.ChuyenKhoaKhamSucKhoe;
            }
            else {
                this.dichVuKhamBenhBvId = null;
                this.dichVuKhamSucKhoeDoan.DonGiaBenhVien = null;
                this.dichVuKhamSucKhoeDoan.TenDichVuKyThuatBenhVien = null;
                this.dichVuKhamSucKhoeDoan.MaNhomDichVuBenhVien = null;
                this.dichVuKhamSucKhoeDoan.MaNhomDichVuBenhVienCha = null;
                this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHienIds = [];
                this.laDichVuKham = null;
                //Update 29/11/2021
                this.keyIdStringGoiDichVuKhamSucKhoeVo.DichVuId = 0;
                this.keyIdStringGoiDichVuKhamSucKhoeVo.Loai = 1;
                this.dichVuStringId = JSON.stringify(this.keyIdStringGoiDichVuKhamSucKhoeVo);
            }
        }
        if (text == 'gia') {
            if (event != undefined && event != null) {
                this.nhomGiaDichVuKhamBenhBenhVienId = event;
            }
            else {
                this.nhomGiaDichVuKhamBenhBenhVienId = null;
            }
        }
        if (this.dichVuKhamBenhBvId != null && this.nhomGiaDichVuKhamBenhBenhVienId != null) {
            let obj = {
                DichVuKhamBenhHoacKyThuatBenhVienId: this.dichVuKhamBenhBvId,
                NhomGiaDichVuKhamBenhHoacKyThuatBenhVienId: this.nhomGiaDichVuKhamBenhBenhVienId,
                LaDichVuKham: this.laDichVuKham
            };
            this.apiService.post("KhamDoan/GetDonGiaBenhVien", obj).subscribe(resultData => {
                if (resultData != undefined && resultData != null) {
                    this.dichVuKhamSucKhoeDoan.DonGiaBenhVien = resultData;
                }
            }, (err) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
            });
        }
    }
    onKey(event) {
        if (event.key == "Enter") {
            if (this.isSelectDuocPham != true) {
                this.themDichVu();
            }
            else {
                this.isSelectDuocPham = false;
            }
        }
    }
    changeHinhThucKhamBenh() {
        this.validationErrors = [];
        this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHienIds = [];
    }
    openCombobox(event) {
        if (event) {
            this.isSelectDuocPham = true;
        }
        else {
            this.isSelectDuocPham = false;
        }
    }
    getById(id) {
        //IsCopy
        var self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].View)) {
            self.showPopupLoadingData();
            self.apiService.get("KhamDoan/GetGoiKhamSucKhoeDoanChung?id=" + id).subscribe(resultData => {
                if (resultData != undefined && resultData != null) {
                    resultData.GoiKhamChungSucKhoeDichVuDichVuKyThuats = [];
                    resultData.GoiKhamChungSucKhoeDichVuKhamBenhs = [];
                    self.khamSucKhoeDoan = resultData;
                    if (self.IsCopy == true) {
                        self.khamSucKhoeDoan.CoSuDungGoiChung = false;
                        self.disabled = false;
                    }
                    else {
                        if (self.khamSucKhoeDoan.CoSuDungGoiChung == true) {
                            self.disabled = true;
                        }
                        else {
                            self.disabled = false;
                        }
                    }
                    self.closePopupLoadingData();
                    console.log("data: ", resultData);
                    this.lstDichVuKhamSucKhoeDoanGrid = [];
                    resultData.DichVuKhamSucKhoeDoans.forEach(element => {
                        this.lstDichVuKhamSucKhoeDoanGrid.push(element);
                    });
                    this.setValueForGridDichVu();
                }
            }, (err) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
                self.closePopupLoadingData();
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    huyDichVu() {
        this.validationErrors = [];
        this.ref.detectChanges();
        // this.dichVuKhamSucKhoeDoan = new DichVuKhamSucKhoeDoanChungViewModel();
        this.dichVuKhamSucKhoeDoan.Nhom = null;
        this.dichVuKhamSucKhoeDoan.MaNhomDichVuBenhVien = null;
        this.dichVuKhamSucKhoeDoan.MaNhomDichVuBenhVienCha = null;
        this.dichVuKhamSucKhoeDoan.TenNhom = null;
        this.dichVuKhamSucKhoeDoan.DichVuKyThuatBenhVienId = null;
        this.dichVuKhamSucKhoeDoan.TenDichVuKyThuatBenhVien = null;
        this.dichVuKhamSucKhoeDoan.DonGiaBenhVien = null;
        this.dichVuKhamSucKhoeDoan.DonGiaUuDai = 0;
        this.dichVuKhamSucKhoeDoan.DonGiaChuaUuDai = 0;
        this.dichVuKhamSucKhoeDoan.HinhThucKhamBenh = 1;
        this.dichVuKhamSucKhoeDoan.GioiTinhNam = null;
        this.dichVuKhamSucKhoeDoan.GioiTinhNu = null;
        this.dichVuKhamSucKhoeDoan.CoMangThai = null;
        this.dichVuKhamSucKhoeDoan.KhongMangThai = null;
        this.dichVuKhamSucKhoeDoan.DaLapGiaDinh = null;
        this.dichVuKhamSucKhoeDoan.ChuaLapGiaDinh = null;
        this.dichVuKhamSucKhoeDoan.SoTuoiTu = null;
        this.dichVuKhamSucKhoeDoan.SoTuoiDen = null;
        this.dichVuKhamSucKhoeDoan.SoLan = 1;
        this.dichVuKhamSucKhoeDoan.NhomGiaDichVuKyThuatBenhVienId = 1;
        this.dichVuKhamSucKhoeDoan.SoTuoiDisplay = null;
        this.dichVuKhamSucKhoeDoan.ChuyenKhoaKhamSucKhoe = null;
        this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHienIds = [];
        this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHiens = new Array();
        this.nhomGiaDichVuKhamBenhBenhVienId = this.dichVuKhamSucKhoeDoan.NhomGiaDichVuKyThuatBenhVienId;
        this.laDichVuKham = null;
        this.dichVuKhamBenhBvId = null;
        this.isUpdate = false;
        this.rowIndex = null;
        this.dataEdit = null;
        this.laDichVuKham = null;
    }
    // dichVuKhamBenhVaKyThuatIds() {
    //   this.dichVuKhamSucKhoeDoan.DichVuKhamBenhVaKyThuatIds = new Array<number>();
    //   this.lstDichVuKhamSucKhoeDoanGrid.forEach(element => {
    //     this.dichVuKhamSucKhoeDoan.DichVuKhamBenhVaKyThuatIds.push(element.DichVuKyThuatBenhVienId);
    //   });
    // }
    setValueForGridDichVu() {
        this.gridDataSource = {
            data: this.lstDichVuKhamSucKhoeDoanGrid,
            total: this.lstDichVuKhamSucKhoeDoanGrid.length
        };
        // this.dichVuKhamBenhVaKyThuatIds();
        this.gridDichVu.gridDataSource = this.gridDataSource;
        this.gridDichVu.setDataSource();
        this.pushDataDichVu();
    }
    pushDataDichVu() {
        this.khamSucKhoeDoan.DichVuKhamSucKhoeDoans = new Array();
        this.khamSucKhoeDoan.DichVuKhamSucKhoeDoans.forEach(element => {
            element.GoiKhamSucKhoeChungNoiThucHienIds = new Array();
            element.GoiKhamSucKhoeChungNoiThucHiens = new Array();
        });
        this.lstDichVuKhamSucKhoeDoanGrid.forEach(obj => {
            let model = new _kham_doan_goi_kham_chung_suc_khoe_model__WEBPACK_IMPORTED_MODULE_14__["DichVuKhamSucKhoeDoanChungViewModel"]();
            model.Id = obj.Id;
            model.DichVuKyThuatBenhVienId = obj.DichVuKyThuatBenhVienId;
            model.TenDichVuKyThuatBenhVien = obj.TenDichVuKyThuatBenhVien;
            model.GoiKhamSucKhoeChungNoiThucHienIds = obj.GoiKhamSucKhoeChungNoiThucHienIds;
            model.NhomGiaDichVuKyThuatBenhVienId = obj.NhomGiaDichVuKyThuatBenhVienId;
            model.DonGiaBenhVien = obj.DonGiaBenhVien;
            model.DonGiaUuDai = obj.DonGiaUuDai;
            model.DonGiaChuaUuDai = obj.DonGiaChuaUuDai;
            model.HinhThucKhamBenh = obj.HinhThucKhamBenh;
            model.GioiTinhNam = obj.GioiTinhNam;
            model.GioiTinhNu = obj.GioiTinhNu;
            model.CoMangThai = obj.CoMangThai;
            model.KhongMangThai = obj.KhongMangThai;
            model.DaLapGiaDinh = obj.DaLapGiaDinh;
            model.ChuaLapGiaDinh = obj.ChuaLapGiaDinh;
            model.SoTuoiTu = obj.SoTuoiTu;
            model.SoTuoiDen = obj.SoTuoiDen;
            model.Loai = obj.Loai;
            model.SoLan = obj.SoLan;
            model.LaDichVuKham = obj.LaDichVuKham;
            model.Nhom = obj.Nhom;
            model.ChuyenKhoaKhamSucKhoe = obj.ChuyenKhoaKhamSucKhoe;
            model.GoiKhamSucKhoeChungNoiThucHienIds.forEach(element => {
                let GoiKhamChung = new _kham_doan_goi_kham_chung_suc_khoe_model__WEBPACK_IMPORTED_MODULE_14__["GoiKhamSucKhoeNoiThucHienChungViewModel"]();
                GoiKhamChung.PhongBenhVienId = element;
                model.GoiKhamSucKhoeChungNoiThucHiens.push(GoiKhamChung);
            });
            this.khamSucKhoeDoan.DichVuKhamSucKhoeDoans.push(model);
            this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHiens = new Array();
            //console.log("this.khamSucKhoeDoan.DichVuKhamSucKhoeDoans: ", this.khamSucKhoeDoan.DichVuKhamSucKhoeDoans)
        });
        // console.log("data luu: ", this.khamSucKhoeDoan)
    }
    themDichVu() {
        // console.log("dichVuKhamSucKhoeDoan.GoiKhamChungSucKhoeNoiThucHienIds: ", this.dichVuKhamSucKhoeDoan.GoiKhamChungSucKhoeNoiThucHienIds)
        var self = this;
        self.validationErrors = [];
        self.ref.detectChanges();
        if (self.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHiens != []) {
            self.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHiens = new Array();
        }
        self.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHienIds.forEach(element => {
            let GoiKhamChung = new _kham_doan_goi_kham_chung_suc_khoe_model__WEBPACK_IMPORTED_MODULE_14__["GoiKhamSucKhoeNoiThucHienChungViewModel"]();
            GoiKhamChung.PhongBenhVienId = element;
            self.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHiens.push(GoiKhamChung);
        });
        if (self.laDichVuKham == null) {
            self.laDichVuKham = false;
        }
        let KeyIdString = JSON.parse(self.dichVuKhamSucKhoeDoan.DichVuKyThuatBenhVienId != null ? self.dichVuKhamSucKhoeDoan.DichVuKyThuatBenhVienId.toString() : null);
        self.dichVuKhamSucKhoeDoan.DichVuKyThuatBenhVienId = KeyIdString != null ? KeyIdString.DichVuId : null;
        self.dichVuKhamSucKhoeDoan.LaDichVuKham = self.laDichVuKham;
        // if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
        self.apiService.post("KhamDoan/ThemDichVuKhamDoanChung", self.dichVuKhamSucKhoeDoan).subscribe(resultData => {
            if (resultData != undefined && resultData != null) {
                self.lstDichVuKhamSucKhoeDoanGrid.push(resultData);
                //Update 29/11/2021
                if (self.dichVuKhamSucKhoeDoan.DichVuKhamBenhIds.findIndex(id => id == Number(resultData.DichVuKyThuatBenhVienId)) == -1
                    && self.dichVuKhamSucKhoeDoan.LaDichVuKham) {
                    self.dichVuKhamSucKhoeDoan.DichVuKhamBenhIds.push(Number(resultData.DichVuKyThuatBenhVienId));
                }
                if (self.dichVuKhamSucKhoeDoan.DichVuKyThuatIds.findIndex(id => id == Number(resultData.DichVuKyThuatBenhVienId)) == -1
                    && !self.dichVuKhamSucKhoeDoan.LaDichVuKham) {
                    self.dichVuKhamSucKhoeDoan.DichVuKyThuatIds.push(Number(resultData.DichVuKyThuatBenhVienId));
                }
                self.setValueForGridDichVu();
                self.huyDichVu();
            }
        }, (err) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
            }
        });
        // }
        // else {
        //   self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        // }
    }
    getDichVuGrid(dataItem) {
        this.dichVuStringId = null;
        this.huyDichVu();
        this.dataEdit = dataItem;
        this.validationErrors = [];
        this.ref.detectChanges();
        this.isUpdate = true;
        this.laDichVuKham = dataItem.LaDichVuKham;
        this.dichVuKhamBenhBvId = dataItem.DichVuKyThuatBenhVienId;
        this.dichVuKhamSucKhoeDoan.DichVuKyThuatBenhVienId = dataItem.DichVuKyThuatBenhVienId;
        this.dichVuKhamSucKhoeDoan.TenDichVuKyThuatBenhVien = dataItem.TenDichVuKyThuatBenhVien;
        this.dichVuKhamSucKhoeDoan.NhomGiaDichVuKyThuatBenhVienId = dataItem.NhomGiaDichVuKyThuatBenhVienId;
        this.dichVuKhamSucKhoeDoan.DonGiaBenhVien = dataItem.DonGiaBenhVien;
        this.dichVuKhamSucKhoeDoan.DonGiaUuDai = dataItem.DonGiaUuDai;
        this.dichVuKhamSucKhoeDoan.DonGiaChuaUuDai = dataItem.DonGiaChuaUuDai;
        this.dichVuKhamSucKhoeDoan.HinhThucKhamBenh = dataItem.HinhThucKhamBenh;
        this.dichVuKhamSucKhoeDoan.SoLan = dataItem.SoLan;
        if (this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHienIds != []) {
            this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHienIds = [];
        }
        dataItem.GoiKhamSucKhoeChungNoiThucHienIds.forEach(element => {
            this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHienIds.push(element);
        });
        this.dichVuKhamSucKhoeDoan.GioiTinhNam = dataItem.GioiTinhNam;
        this.dichVuKhamSucKhoeDoan.GioiTinhNu = dataItem.GioiTinhNu;
        this.dichVuKhamSucKhoeDoan.CoMangThai = dataItem.CoMangThai;
        this.dichVuKhamSucKhoeDoan.KhongMangThai = dataItem.KhongMangThai;
        this.dichVuKhamSucKhoeDoan.DaLapGiaDinh = dataItem.DaLapGiaDinh;
        this.dichVuKhamSucKhoeDoan.ChuaLapGiaDinh = dataItem.ChuaLapGiaDinh;
        this.dichVuKhamSucKhoeDoan.SoTuoiTu = dataItem.SoTuoiTu;
        this.dichVuKhamSucKhoeDoan.SoTuoiDen = dataItem.SoTuoiDen;
        // console.log("this.dichVuKhamSucKhoeDoan: ", this.dichVuKhamSucKhoeDoan);
        // Update 29/11/2021
        this.keyIdStringGoiDichVuKhamSucKhoeVo.DichVuId = dataItem.DichVuKyThuatBenhVienId;
        this.keyIdStringGoiDichVuKhamSucKhoeVo.Loai = this.laDichVuKham == true ? 1 : 2;
        this.dichVuStringId = JSON.stringify(this.keyIdStringGoiDichVuKhamSucKhoeVo);
        this.dichVuKhamSucKhoeDoan.DichVuKyThuatBenhVienId = this.dichVuStringId;
        if (this.multiselectNoiThucHien != undefined) {
            this.multiselectNoiThucHien.queryInfo = new src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_16__["MultiselectQueryInfo"]();
            if (this.dichVuKhamSucKhoeDoan.HinhThucKhamBenh == 1) {
                this.multiselectNoiThucHien.queryInfo.ParameterDependencies =
                    "{LaDichVuKham:" + this.laDichVuKham + ",HinhThucKhamBenh: " + 1 + ", DichVuStringId:"
                        + this.dichVuStringId + ", Take: 50}";
                this.multiselectNoiThucHien.getDataForLookup();
            }
            else {
                this.multiselectNoiThucHien.queryInfo.ParameterDependencies =
                    "{LaDichVuKham:" + this.laDichVuKham + ",HinhThucKhamBenh: " + 2 + ", DichVuStringId:"
                        + this.dichVuStringId + ", HopDongKhamSucKhoeId:" + ", Take: 50}";
                this.multiselectNoiThucHien.getDataForLookup();
            }
        }
    }
    capNhatDichVu() {
        var self = this;
        self.validationErrors = [];
        self.ref.detectChanges();
        self.dichVuStringId = null;
        self.rowIndex = self.lstDichVuKhamSucKhoeDoanGrid.findIndex((x) => x == self.dataEdit);
        let dataUpdate = self.lstDichVuKhamSucKhoeDoanGrid[self.rowIndex];
        dataUpdate.NhomGiaDichVuKyThuatBenhVienId = self.dichVuKhamSucKhoeDoan.NhomGiaDichVuKyThuatBenhVienId;
        dataUpdate.DonGiaBenhVien = self.dichVuKhamSucKhoeDoan.DonGiaBenhVien;
        dataUpdate.DonGiaUuDai = self.dichVuKhamSucKhoeDoan.DonGiaUuDai;
        dataUpdate.DonGiaChuaUuDai = self.dichVuKhamSucKhoeDoan.DonGiaChuaUuDai;
        dataUpdate.HinhThucKhamBenh = self.dichVuKhamSucKhoeDoan.HinhThucKhamBenh;
        dataUpdate.GioiTinhNam = self.dichVuKhamSucKhoeDoan.GioiTinhNam;
        dataUpdate.GioiTinhNu = self.dichVuKhamSucKhoeDoan.GioiTinhNu;
        dataUpdate.CoMangThai = self.dichVuKhamSucKhoeDoan.CoMangThai;
        dataUpdate.KhongMangThai = self.dichVuKhamSucKhoeDoan.KhongMangThai;
        dataUpdate.DaLapGiaDinh = self.dichVuKhamSucKhoeDoan.DaLapGiaDinh;
        dataUpdate.ChuaLapGiaDinh = self.dichVuKhamSucKhoeDoan.ChuaLapGiaDinh;
        dataUpdate.SoTuoiTu = self.dichVuKhamSucKhoeDoan.SoTuoiTu;
        dataUpdate.SoTuoiDen = self.dichVuKhamSucKhoeDoan.SoTuoiDen;
        dataUpdate.SoLan = self.dichVuKhamSucKhoeDoan.SoLan;
        dataUpdate.NoiThucHienString = null;
        if (dataUpdate.GoiKhamSucKhoeChungNoiThucHienIds != []) {
            dataUpdate.GoiKhamSucKhoeChungNoiThucHienIds = [];
        }
        self.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHienIds.forEach(element => {
            dataUpdate.GoiKhamSucKhoeChungNoiThucHienIds.push(element);
            let GoiKhamChung = new _kham_doan_goi_kham_chung_suc_khoe_model__WEBPACK_IMPORTED_MODULE_14__["GoiKhamSucKhoeNoiThucHienChungViewModel"]();
            GoiKhamChung.PhongBenhVienId = element;
            self.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHiens.push(GoiKhamChung);
            dataUpdate.GoiKhamSucKhoeChungNoiThucHiens = self.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeChungNoiThucHiens;
        });
        this.keyIdStringGoiDichVuKhamSucKhoeVo.DichVuId = Number(dataUpdate.DichVuKyThuatBenhVienId);
        this.keyIdStringGoiDichVuKhamSucKhoeVo.Loai = this.laDichVuKham == true ? 1 : 2;
        this.dichVuStringId = JSON.stringify(this.keyIdStringGoiDichVuKhamSucKhoeVo);
        this.dichVuKhamSucKhoeDoan.DichVuKyThuatBenhVienId = this.dichVuStringId;
        if (self.multiselectNoiThucHien != undefined) {
            self.multiselectNoiThucHien.queryInfo = new src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_16__["MultiselectQueryInfo"]();
            if (self.dichVuKhamSucKhoeDoan.HinhThucKhamBenh == 1) {
                self.multiselectNoiThucHien.queryInfo.ParameterDependencies =
                    "{LaDichVuKham:" + self.laDichVuKham + ",HinhThucKhamBenh: " + 1 + ", DichVuStringId:"
                        + this.dichVuStringId + ", Take: 50}";
                self.multiselectNoiThucHien.getDataForLookup();
            }
            else {
                self.multiselectNoiThucHien.queryInfo.ParameterDependencies =
                    "{LaDichVuKham:" + self.laDichVuKham + ",HinhThucKhamBenh: " + 2 + ", DichVuStringId:"
                        + this.dichVuStringId + ", Take: 50}";
                self.multiselectNoiThucHien.getDataForLookup();
            }
        }
        self.apiService.post("KhamDoan/CapNhatDichVuKhamDoanChung", dataUpdate).subscribe(resultData => {
            if (resultData != undefined && resultData != null) {
                self.lstDichVuKhamSucKhoeDoanGrid[self.rowIndex] = resultData;
                self.setValueForGridDichVu();
                self.huyDichVu();
            }
        }, (err) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
            }
        });
    }
    xoaDichVu(dataItem) {
        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmComponent"], {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_18__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].MessConfirm, ["xóa"]) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_18__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].ActionSuccessfully, ["Xóa"]));
                if (dataItem.Loai == 1) {
                    this.dichVuKhamSucKhoeDoan.DichVuKhamBenhIds.splice(this.dichVuKhamSucKhoeDoan.DichVuKhamBenhIds.findIndex((x) => x == dataItem.DichVuKyThuatBenhVienId), 1);
                }
                else {
                    this.dichVuKhamSucKhoeDoan.DichVuKyThuatIds.splice(this.dichVuKhamSucKhoeDoan.DichVuKhamBenhIds.findIndex((x) => x == dataItem.DichVuKyThuatBenhVienId), 1);
                }
                this.lstDichVuKhamSucKhoeDoanGrid.splice(this.lstDichVuKhamSucKhoeDoanGrid.findIndex((x) => x == dataItem), 1);
                this.validationErrors = [];
                this.setValueForGridDichVu();
            }
        });
    }
    Luu() {
        var self = this;
        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmComponent"], {
            disableClose: false,
            width: "500px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn lưu gói khám sức khỏe đoàn này không ?",
            },
        }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
                self.validationErrors = [];
                self.ref.detectChanges();
                if (this.id != null && this.id != 0 && !this.IsCopy) {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Update)) {
                        self.showPopupSavingData();
                        self.khamSucKhoeDoan.GoiKhamSucKhoeChungDichVuKhamBenhs = [];
                        self.khamSucKhoeDoan.GoiKhamSucKhoeChungDichVuDichVuKyThuats = [];
                        self.apiService.post("KhamDoan/CapNhatGoiKhamSucKhoeDoanChung", self.khamSucKhoeDoan).subscribe(() => {
                            if (this.dataKhamDoan != undefined && this.dataKhamDoan != null) {
                                this.afterChangedFromHopDongKham.emit(true);
                            }
                            else {
                                self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_18__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                this.router.navigate(['/kham-doan/goi-kham']);
                                // this.location.back();
                            }
                            self.closePopupSavingData();
                        }, (err) => {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                            self.closePopupSavingData();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
                    }
                }
                else {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Add)) {
                        self.showPopupSavingData();
                        if (this.IsCopy) {
                            self.khamSucKhoeDoan.Id = 0;
                            self.khamSucKhoeDoan.GoiKhamSucKhoeChungDichVuKhamBenhs = [];
                            self.khamSucKhoeDoan.GoiKhamSucKhoeChungDichVuDichVuKyThuats = [];
                        }
                        self.apiService.post("KhamDoan/ThemGoiKhamSucKhoeDoanChung", self.khamSucKhoeDoan).subscribe(() => {
                            if (this.dataKhamDoan != undefined && this.dataKhamDoan != null) {
                                this.afterChangedFromHopDongKham.emit(true);
                            }
                            else {
                                self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_18__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                this.router.navigate(['/kham-doan/goi-kham']);
                            }
                            self.closePopupSavingData();
                        }, (err) => {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                            self.closePopupSavingData();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
                    }
                }
            }
        });
    }
    checkGoiChung(event) {
        this.khamSucKhoeDoan.GoiDichVuPhatSinh = false;
        this.khamSucKhoeDoan.GoiChung = event;
    }
    checkGoiDichVuPhatSinh(event) {
        this.khamSucKhoeDoan.GoiChung = false;
        this.khamSucKhoeDoan.GoiDichVuPhatSinh = event;
    }
    quayLai() {
        if (this.dataKhamDoan != undefined && this.dataKhamDoan != null) {
            this.dialog.closeAll();
        }
        else {
            this.location.back();
        }
    }
};
KhamDoanGoiKhamChungSucKhoeDetailPopupComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], KhamDoanGoiKhamChungSucKhoeDetailPopupComponent.prototype, "dataKhamDoan", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], KhamDoanGoiKhamChungSucKhoeDetailPopupComponent.prototype, "afterChangedFromHopDongKham", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], KhamDoanGoiKhamChungSucKhoeDetailPopupComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDichVu', { static: true })
], KhamDoanGoiKhamChungSucKhoeDetailPopupComponent.prototype, "gridDichVu", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('multiselectNoiThucHien', { read: src_app_shared_component_dropdowns_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_15__["MultiselectComponent"], static: false })
], KhamDoanGoiKhamChungSucKhoeDetailPopupComponent.prototype, "multiselectNoiThucHien", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('comboBoxDichVu', { read: src_app_shared_component_dropdowns_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_19__["ComboboxComponent"], static: false })
], KhamDoanGoiKhamChungSucKhoeDetailPopupComponent.prototype, "comboBoxDichVu", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('STTTemplate', { static: true })
], KhamDoanGoiKhamChungSucKhoeDetailPopupComponent.prototype, "STTTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenDichVuTemplate', { static: true })
], KhamDoanGoiKhamChungSucKhoeDetailPopupComponent.prototype, "tenDichVuTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLanTemplate', { static: true })
], KhamDoanGoiKhamChungSucKhoeDetailPopupComponent.prototype, "soLanTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaBenhVienTemplate', { static: true })
], KhamDoanGoiKhamChungSucKhoeDetailPopupComponent.prototype, "donGiaBenhVienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaUuDaiTemplate', { static: true })
], KhamDoanGoiKhamChungSucKhoeDetailPopupComponent.prototype, "donGiaUuDaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaChuaUuDaiTemplate', { static: true })
], KhamDoanGoiKhamChungSucKhoeDetailPopupComponent.prototype, "donGiaChuaUuDaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soTuoiTemplate', { static: true })
], KhamDoanGoiKhamChungSucKhoeDetailPopupComponent.prototype, "soTuoiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dvKhamKetLuanTemplate', { static: true })
], KhamDoanGoiKhamChungSucKhoeDetailPopupComponent.prototype, "dvKhamKetLuanTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], KhamDoanGoiKhamChungSucKhoeDetailPopupComponent.prototype, "actionTemplate", void 0);
KhamDoanGoiKhamChungSucKhoeDetailPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kham-doan-goi-kham-chung-suc-khoe-detail-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-goi-kham-chung-suc-khoe-detail-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-detail-popup/kham-doan-goi-kham-chung-suc-khoe-detail-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-goi-kham-chung-suc-khoe-detail-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-detail-popup/kham-doan-goi-kham-chung-suc-khoe-detail-popup.component.scss")).default]
    })
], KhamDoanGoiKhamChungSucKhoeDetailPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-list/kham-doan-goi-kham-chung-suc-khoe-list.component.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-list/kham-doan-goi-kham-chung-suc-khoe-list.component.scss ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWdvaS1jaHVuZy1zdWMta2hvZS9raGFtLWRvYW4tZ29pLWtoYW0tY2h1bmctc3VjLWtob2UtbGlzdC9raGFtLWRvYW4tZ29pLWtoYW0tY2h1bmctc3VjLWtob2UtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-list/kham-doan-goi-kham-chung-suc-khoe-list.component.ts":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-list/kham-doan-goi-kham-chung-suc-khoe-list.component.ts ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: KhamDoanGoiKhamChungSucKhoeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanGoiKhamChungSucKhoeListComponent", function() { return KhamDoanGoiKhamChungSucKhoeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_ic_outline_content_copy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/outline-content-copy */ "./node_modules/@iconify/icons-ic/outline-content-copy.js");
/* harmony import */ var _iconify_icons_ic_outline_content_copy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_outline_content_copy__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _kham_doan_goi_kham_chung_suc_khoe_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../kham-doan-goi-kham-chung-suc-khoe.model */ "./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe.model.ts");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");























let KhamDoanGoiKhamChungSucKhoeListComponent = class KhamDoanGoiKhamChungSucKhoeListComponent {
    constructor(authService, notificationService, route, location, dialog, apiService, router) {
        this.authService = authService;
        this.notificationService = notificationService;
        this.route = route;
        this.location = location;
        this.dialog = dialog;
        this.apiService = apiService;
        this.router = router;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icCopy = _iconify_icons_ic_outline_content_copy__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.baseRoute = "/kham-doan/goi-kham";
        this.gridColumns = [];
        this._gridColumnsFilter = [];
        this._isCheckColumnFilter = true;
        this.strAdditionalSearchString = "";
        this.timKiemObj = new _kham_doan_goi_kham_chung_suc_khoe_model__WEBPACK_IMPORTED_MODULE_16__["KhamDoanGoiKhamSucKhoeTimKiem"]();
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].KhamDoanGoiKhamSucKhoe;
        let hasLocalSearchString = false;
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
            let holdQuery = this.route.snapshot.queryParams.holdQuery;
            if (holdQuery != null && holdQuery) {
                var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_17__["LocalStorageHelper"].getItem("additionalSearchStringKhamDoanDanhSachGoiKhamChung");
                if (additionalSearchString != null) {
                    this.timKiemObj = JSON.parse(additionalSearchString);
                    this.grid.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
                    hasLocalSearchString = true;
                }
            }
        }
        if (!hasLocalSearchString) {
            this.grid.additionalSearchString = null;
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_17__["LocalStorageHelper"].removeItem("additionalSearchStringKhamDoanDanhSachGoiKhamChung");
        }
        this.gridColumns = [
            { Field: "MaGoiKham", Title: "Mã gói khám", Width: 100, Sortable: true, Template: this.maGoiKhamChungTemplate },
            { Field: "TenGoiKham", Title: "Tên gói khám", Width: 160, Sortable: true },
            { Field: "Action", Title: "", Width: 40, Sortable: false, Template: this.actionTemplate }
        ];
        this._gridColumnsFilter = this.gridColumns.filter(p => p.Title != '');
    }
    searchChanges(event) {
        if ((event == null || event == "") && this.strAdditionalSearchString != "") {
            this.timKiemNangCao();
        }
    }
    onKey(event) {
        if (event.key == "Enter") {
            this.timKiemNangCao();
        }
    }
    clearSearch() {
        this.timKiemObj.SearchString = null;
        this.grid.searchString = null;
        this.timKiemNangCao();
    }
    timKiemNangCao() {
        this.location.replaceState(this.baseRoute + '?holdQuery=true');
        var queryString = JSON.stringify(this.timKiemObj);
        this.grid._additionalSearchString = this.strAdditionalSearchString = queryString;
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_17__["LocalStorageHelper"].setItem("additionalSearchStringKhamDoanDanhSachGoiKhamChung", queryString);
        this.grid.search();
    }
    xuLyXuatExcel() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Process)) {
            this.apiService.postExportExcel("KhamDoan/ExportDanhSachKhamSucKhoeDoanChung", this.grid._gridQueryInfo).subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_20__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "DSKhamSucKhoeDoan" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    showPopupChiTiet(id = null, isCopy = false) {
        let securityOperation = src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Add;
        let url = '/them';
        if (id != null) {
            securityOperation = src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Update;
            url = '/chi-tiet';
        }
        if (this.authService.hasPermission(this.documentType, securityOperation)) {
            // this.router.navigate([this.baseRoute + url + (id == null ? '' : id)]);
            this.router.navigate([this.baseRoute + url], { queryParams: { Id: id, IsCopy: isCopy } });
            // this.dialog.open(KhamDoanGoiKhamChungSucKhoeDetailPopupComponent, {
            //   disableClose: false,
            //   width: '1600px',
            //   data: { Id: id, IsCopy: isCopy }
            // }).afterClosed().subscribe(result => {
            //   this.grid.search();
            // });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xoa(Id) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Delete)) {
            this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmComponent"], {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_20__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__["SystemMessage"].MessConfirm, ["xóa"]) }
            }).afterClosed().subscribe(result => {
                if (result == "Yes") {
                    this.apiService.post("KhamDoan/XoaGoiKhamSucKhoeDoanChung?id=" + Id).subscribe(() => {
                        this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_20__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__["SystemMessage"].ActionSuccessfully, ["Xóa"]));
                        this.grid.search();
                    }, err => {
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                    });
                }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__["SystemMessage"].UnAuthorizedMessage);
        }
    }
};
KhamDoanGoiKhamChungSucKhoeListComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_15__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maGoiKhamChungTemplate', { static: true })
], KhamDoanGoiKhamChungSucKhoeListComponent.prototype, "maGoiKhamChungTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayHieuLucTemplate', { static: true })
], KhamDoanGoiKhamChungSucKhoeListComponent.prototype, "ngayHieuLucTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayKetThucTemplate', { static: true })
], KhamDoanGoiKhamChungSucKhoeListComponent.prototype, "ngayKetThucTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], KhamDoanGoiKhamChungSucKhoeListComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('grid', { static: true })
], KhamDoanGoiKhamChungSucKhoeListComponent.prototype, "grid", void 0);
KhamDoanGoiKhamChungSucKhoeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kham-doan-goi-kham-chung-suc-khoe-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-goi-kham-chung-suc-khoe-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-list/kham-doan-goi-kham-chung-suc-khoe-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-goi-kham-chung-suc-khoe-list.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-list/kham-doan-goi-kham-chung-suc-khoe-list.component.scss")).default]
    })
], KhamDoanGoiKhamChungSucKhoeListComponent);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-routing.module.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-routing.module.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: KhamDoanGoiChungKhamSucKhoeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanGoiChungKhamSucKhoeRoutingModule", function() { return KhamDoanGoiChungKhamSucKhoeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _kham_doan_goi_kham_chung_suc_khoe_detail_popup_kham_doan_goi_kham_chung_suc_khoe_detail_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kham-doan-goi-kham-chung-suc-khoe-detail-popup/kham-doan-goi-kham-chung-suc-khoe-detail-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-detail-popup/kham-doan-goi-kham-chung-suc-khoe-detail-popup.component.ts");
/* harmony import */ var _kham_doan_goi_kham_chung_suc_khoe_list_kham_doan_goi_kham_chung_suc_khoe_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kham-doan-goi-kham-chung-suc-khoe-list/kham-doan-goi-kham-chung-suc-khoe-list.component */ "./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-list/kham-doan-goi-kham-chung-suc-khoe-list.component.ts");








const routes = [
    {
        path: '',
        component: _kham_doan_goi_kham_chung_suc_khoe_list_kham_doan_goi_kham_chung_suc_khoe_list_component__WEBPACK_IMPORTED_MODULE_7__["KhamDoanGoiKhamChungSucKhoeListComponent"],
        data: {
            title: "Gói khám chung sức khỏe",
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanGoiKhamSucKhoe,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
    {
        path: 'them',
        component: _kham_doan_goi_kham_chung_suc_khoe_detail_popup_kham_doan_goi_kham_chung_suc_khoe_detail_popup_component__WEBPACK_IMPORTED_MODULE_6__["KhamDoanGoiKhamChungSucKhoeDetailPopupComponent"],
        data: {
            title: 'Thêm gói khám chung sức khỏe',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanGoiKhamSucKhoe,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
    {
        path: 'chi-tiet',
        component: _kham_doan_goi_kham_chung_suc_khoe_detail_popup_kham_doan_goi_kham_chung_suc_khoe_detail_popup_component__WEBPACK_IMPORTED_MODULE_6__["KhamDoanGoiKhamChungSucKhoeDetailPopupComponent"],
        data: {
            title: 'Chi tiết gói khám chung sức khỏe',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanGoiKhamSucKhoe,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    }
];
let KhamDoanGoiChungKhamSucKhoeRoutingModule = class KhamDoanGoiChungKhamSucKhoeRoutingModule {
};
KhamDoanGoiChungKhamSucKhoeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], KhamDoanGoiChungKhamSucKhoeRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe.model.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe.model.ts ***!
  \****************************************************************************************************************/
/*! exports provided: KhamDoanGoiKhamSucKhoeTimKiem, FileExcelDichVu, KhamSucKhoeDoanChungViewModel, DichVuKhamSucKhoeDoanChungViewModel, GoiKhamSucKhoeNoiThucHienChungViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanGoiKhamSucKhoeTimKiem", function() { return KhamDoanGoiKhamSucKhoeTimKiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileExcelDichVu", function() { return FileExcelDichVu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamSucKhoeDoanChungViewModel", function() { return KhamSucKhoeDoanChungViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuKhamSucKhoeDoanChungViewModel", function() { return DichVuKhamSucKhoeDoanChungViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoiKhamSucKhoeNoiThucHienChungViewModel", function() { return GoiKhamSucKhoeNoiThucHienChungViewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class KhamDoanGoiKhamSucKhoeTimKiem {
    constructor(SearchString = null) {
        this.SearchString = SearchString;
    }
}
class FileExcelDichVu {
    constructor(Id = 0, Ma = null, Ten = null, TenGuid = null, DuongDan = null, MoTa = null, KichThuoc = 0, LoaiTapTin = null) {
        this.Id = Id;
        this.Ma = Ma;
        this.Ten = Ten;
        this.TenGuid = TenGuid;
        this.DuongDan = DuongDan;
        this.MoTa = MoTa;
        this.KichThuoc = KichThuoc;
        this.LoaiTapTin = LoaiTapTin;
    }
}
class KhamSucKhoeDoanChungViewModel {
    constructor(Id = 0, Ma = null, Ten = null, GoiChung = null, CoSuDungGoiChung = null, GoiDichVuPhatSinh = null, IsKetThucHopDong = null, IsCopy = null, DichVuKhamSucKhoeDoans = [], GoiKhamSucKhoeChungDichVuKhamBenhs = [], GoiKhamSucKhoeChungDichVuDichVuKyThuats = []) {
        this.Id = Id;
        this.Ma = Ma;
        this.Ten = Ten;
        this.GoiChung = GoiChung;
        this.CoSuDungGoiChung = CoSuDungGoiChung;
        this.GoiDichVuPhatSinh = GoiDichVuPhatSinh;
        this.IsKetThucHopDong = IsKetThucHopDong;
        this.IsCopy = IsCopy;
        this.DichVuKhamSucKhoeDoans = DichVuKhamSucKhoeDoans;
        this.GoiKhamSucKhoeChungDichVuKhamBenhs = GoiKhamSucKhoeChungDichVuKhamBenhs;
        this.GoiKhamSucKhoeChungDichVuDichVuKyThuats = GoiKhamSucKhoeChungDichVuDichVuKyThuats;
    }
}
class DichVuKhamSucKhoeDoanChungViewModel {
    constructor(Id = 0, Nhom = null, MaNhomDichVuBenhVien = null, MaNhomDichVuBenhVienCha = null, TenNhom = null, 
    // public DichVuKyThuatBenhVienId: number = null,
    DichVuKyThuatBenhVienId = null, ChuyenKhoaKhamSucKhoe = null, TenDichVuKyThuatBenhVien = null, NhomGiaDichVuKyThuatBenhVienId = null, DonGiaBenhVien = null, DonGiaUuDai = 0, DonGiaChuaUuDai = 0, HinhThucKhamBenh = null, GioiTinhNam = null, GioiTinhNu = null, CoMangThai = null, KhongMangThai = null, DaLapGiaDinh = null, ChuaLapGiaDinh = null, SoTuoiTu = null, SoTuoiDen = null, SoTuoiDisplay = null, NoiThucHienString = null, Loai = null, SoLan = null, LaDichVuKham = false, GoiKhamSucKhoeChungNoiThucHienIds = [], GoiKhamSucKhoeChungNoiThucHiens = [], DichVuKhamBenhIds = [], DichVuKyThuatIds = []) {
        this.Id = Id;
        this.Nhom = Nhom;
        this.MaNhomDichVuBenhVien = MaNhomDichVuBenhVien;
        this.MaNhomDichVuBenhVienCha = MaNhomDichVuBenhVienCha;
        this.TenNhom = TenNhom;
        this.DichVuKyThuatBenhVienId = DichVuKyThuatBenhVienId;
        this.ChuyenKhoaKhamSucKhoe = ChuyenKhoaKhamSucKhoe;
        this.TenDichVuKyThuatBenhVien = TenDichVuKyThuatBenhVien;
        this.NhomGiaDichVuKyThuatBenhVienId = NhomGiaDichVuKyThuatBenhVienId;
        this.DonGiaBenhVien = DonGiaBenhVien;
        this.DonGiaUuDai = DonGiaUuDai;
        this.DonGiaChuaUuDai = DonGiaChuaUuDai;
        this.HinhThucKhamBenh = HinhThucKhamBenh;
        this.GioiTinhNam = GioiTinhNam;
        this.GioiTinhNu = GioiTinhNu;
        this.CoMangThai = CoMangThai;
        this.KhongMangThai = KhongMangThai;
        this.DaLapGiaDinh = DaLapGiaDinh;
        this.ChuaLapGiaDinh = ChuaLapGiaDinh;
        this.SoTuoiTu = SoTuoiTu;
        this.SoTuoiDen = SoTuoiDen;
        this.SoTuoiDisplay = SoTuoiDisplay;
        this.NoiThucHienString = NoiThucHienString;
        this.Loai = Loai;
        this.SoLan = SoLan;
        this.LaDichVuKham = LaDichVuKham;
        this.GoiKhamSucKhoeChungNoiThucHienIds = GoiKhamSucKhoeChungNoiThucHienIds;
        this.GoiKhamSucKhoeChungNoiThucHiens = GoiKhamSucKhoeChungNoiThucHiens;
        this.DichVuKhamBenhIds = DichVuKhamBenhIds;
        this.DichVuKyThuatIds = DichVuKyThuatIds;
    }
}
class GoiKhamSucKhoeNoiThucHienChungViewModel {
    constructor(GoiKhamSucKhoeDichVuKhamBenhId = null, GoiKhamSucKhoeDichVuDichVuKyThuatId = null, PhongBenhVienId = null) {
        this.GoiKhamSucKhoeDichVuKhamBenhId = GoiKhamSucKhoeDichVuKhamBenhId;
        this.GoiKhamSucKhoeDichVuDichVuKyThuatId = GoiKhamSucKhoeDichVuDichVuKyThuatId;
        this.PhongBenhVienId = PhongBenhVienId;
    }
}


/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe.module.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe.module.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: KhamDoanGoiKhamChungSucKhoeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanGoiKhamChungSucKhoeModule", function() { return KhamDoanGoiKhamChungSucKhoeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kham_doan_goi_kham_chung_suc_khoe_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kham-doan-goi-kham-chung-suc-khoe-routing.module */ "./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-routing.module.ts");
/* harmony import */ var _kham_doan_goi_kham_chung_suc_khoe_list_kham_doan_goi_kham_chung_suc_khoe_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kham-doan-goi-kham-chung-suc-khoe-list/kham-doan-goi-kham-chung-suc-khoe-list.component */ "./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-list/kham-doan-goi-kham-chung-suc-khoe-list.component.ts");
/* harmony import */ var _kham_doan_goi_kham_chung_suc_khoe_detail_popup_kham_doan_goi_kham_chung_suc_khoe_detail_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kham-doan-goi-kham-chung-suc-khoe-detail-popup/kham-doan-goi-kham-chung-suc-khoe-detail-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-detail-popup/kham-doan-goi-kham-chung-suc-khoe-detail-popup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-intl */ "./node_modules/@progress/kendo-angular-intl/dist/fesm2015/index.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var _kham_doan_goi_kham_chung_suc_khoe_chon_file_popup_kham_doan_goi_kham_chung_suc_khoe_chon_file_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./kham-doan-goi-kham-chung-suc-khoe-chon-file-popup/kham-doan-goi-kham-chung-suc-khoe-chon-file-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe-chon-file-popup/kham-doan-goi-kham-chung-suc-khoe-chon-file-popup.component.ts");



















// import { GoiKhamViewPopupComponent } from './kham-doan-goi-kham-popup/kham-doan-goi-kham-chung-popup.component';
let KhamDoanGoiKhamChungSucKhoeModule = class KhamDoanGoiKhamChungSucKhoeModule {
};
KhamDoanGoiKhamChungSucKhoeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _kham_doan_goi_kham_chung_suc_khoe_list_kham_doan_goi_kham_chung_suc_khoe_list_component__WEBPACK_IMPORTED_MODULE_4__["KhamDoanGoiKhamChungSucKhoeListComponent"],
            _kham_doan_goi_kham_chung_suc_khoe_detail_popup_kham_doan_goi_kham_chung_suc_khoe_detail_popup_component__WEBPACK_IMPORTED_MODULE_5__["KhamDoanGoiKhamChungSucKhoeDetailPopupComponent"],
            _kham_doan_goi_kham_chung_suc_khoe_chon_file_popup_kham_doan_goi_kham_chung_suc_khoe_chon_file_popup_component__WEBPACK_IMPORTED_MODULE_18__["KhamDoanGoiKhamChungSucKhoeChonFilePopupComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _kham_doan_goi_kham_chung_suc_khoe_routing_module__WEBPACK_IMPORTED_MODULE_3__["KhamDoanGoiChungKhamSucKhoeRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__["PageLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__["GridModule"],
            _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_14__["IntlModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_15__["PdfViewerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"]
        ],
        entryComponents: [
            _kham_doan_goi_kham_chung_suc_khoe_detail_popup_kham_doan_goi_kham_chung_suc_khoe_detail_popup_component__WEBPACK_IMPORTED_MODULE_5__["KhamDoanGoiKhamChungSucKhoeDetailPopupComponent"],
            _kham_doan_goi_kham_chung_suc_khoe_chon_file_popup_kham_doan_goi_kham_chung_suc_khoe_chon_file_popup_component__WEBPACK_IMPORTED_MODULE_18__["KhamDoanGoiKhamChungSucKhoeChonFilePopupComponent"]
        ]
    })
], KhamDoanGoiKhamChungSucKhoeModule);



/***/ })

}]);
//# sourceMappingURL=kham-doan-kham-doan-goi-chung-suc-khoe-kham-doan-goi-kham-chung-suc-khoe-module-es2015.js.map