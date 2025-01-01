(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module~bao-cao~779cbbf2"], {
        /***/ "./node_modules/@iconify/icons-ic/content-copy.js": 
        /*!********************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/content-copy.js ***!
          \********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/@iconify/icons-ic/sharp-edit.js": 
        /*!******************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/sharp-edit.js ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM21.41 6.34l-3.75-3.75-2.53 2.54 3.75 3.75 2.53-2.54z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/@iconify/icons-ic/twotone-done.js": 
        /*!********************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/twotone-done.js ***!
          \********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/danh-sach-nhom-dich-vu-thuong-dung/danh-sach-nhom-dich-vu-thuong-dung.component.html": 
        /*!*******************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/danh-sach-nhom-dich-vu-thuong-dung/danh-sach-nhom-dich-vu-thuong-dung.component.html ***!
          \*******************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Danh Mục',Path:''}\n                    ,{Title:'Nhóm Hệ Thống',Path:''}\n                    ,{Title:'Bệnh Viện',Path:''}\n                    ,{Title:'Nhóm Dịch Vụ Thường Dùng',Path:'/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung',Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung\" [gridColumns]=\"gridColumns\"\n                [documentType]=\"documentType\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [checkboxAble]=\"false\"\n                [urlGetData]=\"urlGetDataGridChild\" [urlGetTotalPage]=\"urlGetTotalPageGridChild\"\n                [showExportExcel]=\"true\" (extExportExcel)=\"exportExcel()\" #gridGoiDv></app-grid>\n            <ng-template #trangThaiTemplate let-dataItem>\n                <button *ngIf=\"dataItem.TrangThai === true\"\n                    mat-menu-item (click)=\"updateDichVu(dataItem.Id,dataItem.TrangThai)\">\n                    <mat-icon [icIcon]=\"icClose\" color=\"warn\"></mat-icon><span>Ngừng sử dụng</span>\n                </button>\n                <button *ngIf=\"dataItem.TrangThai === false\" \n                    mat-menu-item (click)=\"updateDichVu(dataItem.Id,dataItem.TrangThai)\">\n                    <mat-icon [icIcon]=\"icicdone\" color=\"primary\"></mat-icon><span>Đang sử dụng</span>\n                </button>\n            </ng-template>\n            <ng-template #actionTemplate let-dataItem>\n                <button (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                    <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n                </button>\n                <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <ng-template let-customer=\"customer\" matMenuContent>\n                        <button (click)=\"copy(dataItem.Id)\" mat-menu-item>        \n                            <mat-icon [icIcon]=\"icEdit\"></mat-icon>                   \n                            <span>Copy</span>\n                        </button>\n                        <button (click)=\"delete(dataItem.Id)\" mat-menu-item>\n                            <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                            <span>Xóa</span>\n                        </button>\n                    </ng-template>\n                </mat-menu>\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-create-popup/nhom-dich-vu-thuong-dung-create-popup.component.html": 
        /*!*************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-create-popup/nhom-dich-vu-thuong-dung-create-popup.component.html ***!
          \*************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>TẠO NHÓM DỊCH VỤ</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\" (click)=\"closed()\" ></mat-icon>\n    </button>\n</div>\n<app-nhom-dich-vu-thuong-dung-shared [disableBoPhan]=\"true\" [boPhan]=\"boPhan\" [isCreate]=\"true\"></app-nhom-dich-vu-thuong-dung-shared>\n<div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <app-formfooter [bodyComponent]=\"shared\" #footer type=\"create\" (created)=\"onCreated()\" \n        (closePageLocationBack)=\"true\"\n        (validateClient)=\"onValidateClient($event)\">\n    </app-formfooter>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-create/nhom-dich-vu-thuong-dung-create.component.html": 
        /*!*************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-create/nhom-dich-vu-thuong-dung-create.component.html ***!
          \*************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n    {Title:'Danh Mục',Path:''}\n    ,{Title:'Nhóm Hệ Thống',Path:''}\n    ,{Title:'Bệnh Viện',Path:''}\n    ,{Title:'Nhóm Dịch Vụ Thường Dùng',Path:'/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung', Active: true}\n]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">TẠO NHÓM DỊCH VỤ</h2>\n            </div>            \n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-nhom-dich-vu-thuong-dung-shared [isCreate]=\"true\"></app-nhom-dich-vu-thuong-dung-shared>\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" #footer type=\"create\" (created)=\"onCreated()\" (validateClient)=\"onValidateClient($event)\">\n                    </app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-shared/nhom-dich-vu-thuong-dung-shared.component.html": 
        /*!*************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-shared/nhom-dich-vu-thuong-dung-shared.component.html ***!
          \*************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n    fxLayoutAlign=\"space-between\">\n\n    <app-combobox id=\"ten-bophan\" fxFlex=\"30%\" fxFlex.sm=\"100%\" label=\"Tên Bộ phận\"\n        url=\"NhomDichVuThuongDung/GetBoPhan\" [(model)]=\"goiDichVu.BoPhanId\" \n        [(modelText)]=\"goiDichVu.TenBoPhan\" [bind]=\"true\" [disabled]=\"disableBoPhan\"\n        (selectionChange)=\"onChangeBoPhan($event)\">       \n    </app-combobox>\n\n    <app-textbox id=\"ten-goi\" fxFlex=\"40%\" fxFlex.sm=\"100%\" maxlength=\"200\" [required]=\"true\"\n        [(model)]=\"goiDichVu.TenGoiDv\" label=\"Tên nhóm\"\n        [validationerror]=\"'TenGoiDv' | validationerror:validationErrors\">\n    </app-textbox>\n\n    <app-radio id=\"su-dung\" fxFlex=\"30%\" fxFlex.sm=\"50%\" id=\"IsDisabled\" name=\"IsDisabled\" [required]=\"true\"\n        [items]=\"[{Value:false,Text:'Có'},{Value:true,Text:'Không'}]\" [(model)]=\"goiDichVu.IsDisabled\" label=\"Sử dụng\"\n        [validationerror]=\"'IsDisabled' | validationerror:validationErrors\">\n    </app-radio>\n    <app-textarea id=\"mo-ta\" fxFlex=\"100%\" fxFlex.sm=\"100%\" minHeight=\"20\" maxlength=\"2000\" [(model)]=\"goiDichVu.MoTa\"\n        label=\"Mô Tả\" [validationerror]=\"'MoTa' | validationerror:validationErrors\">\n    </app-textarea>\n\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">\n        THÊM DỊCH VỤ\n    </h3>\n    <div fxFlex=\"100%\" class=\"po-h-radio\">\n        <!-- ,{Value:3,Text:'Dịch vụ giường'} -->\n        <!-- <app-radio id=\"chon-loai-dv\" name=\"select\" class=\"no-format-css pl-4 temp\" [(model)]=\"luaChonGoiDichVu\"\n            (click)=\"chonDichVu($event)\" [items]=\"[{Value:1,Text:'Dịch vụ khám'},{Value:2,Text:'Dịch vụ kỹ thuật'}]\">\n        </app-radio> -->\n        <app-radio id=\"chon-loai-dv\" name=\"select\" class=\"no-format-css pl-4 temp\" (modelChange)=\"chonDichVu($event)\"\n            [(model)]=\"luaChonGoiDichVu\" [items]=\"[{Value:1,Text:'Dịch vụ khám'},{Value:2,Text:'Dịch vụ kỹ thuật'}]\">\n        </app-radio>\n    </div>\n    <ng-container>\n        <app-combobox *ngIf=\"luaChonGoiDichVu===1\" id=\"ten-dv\" fxFlex=\"30%\" fxFlex.sm=\"100%\" label=\"Tên Dịch Vụ\"\n            url=\"KhamBenh/GetDichVuKhamBenh\" [(model)]=\"dvTrongGois.DvId\" class=\"item-no-padding\" bind=\"true\"\n            [template]=\"dichVuKhamBenhTemplate\" [templateHeader]=\"dichVuKhamBenhTemplateHeader\" [required]=\"true\"\n            [validationerror]=\"'DvId' | validationerror:validationErrors\" (selectionChange)=\"onChangeDichVu($event)\"\n            (keyup)=\"onKeyAddDv($event)\">\n            <ng-template #dichVuKhamBenhTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"30%\">Mã</th>\n                        <th>Tên</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #dichVuKhamBenhTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"30%\">{{dataItem.Ma}}</td>\n                        <td>{{dataItem.Ten}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n        <app-combobox *ngIf=\"luaChonGoiDichVu===2\" id=\"dich-vu-kt-bv\" fxFlex=\"30%\" fxFlex.sm=\"100%\" label=\"Tên Dịch Vụ\"\n            url=\"GoiDichVu/GetListDichVuKyThuat\" [(model)]=\"dvTrongGois.DvId\" bind=\"true\" class=\"item-no-padding\"\n            [template]=\"dichVuKyThuatTemplate\" [templateHeader]=\"dichVuKyThuatTemplateHeader\" [required]=\"true\"\n            [validationerror]=\"'DvId' | validationerror:validationErrors\" (selectionChange)=\"onChangeDichVu($event)\"\n            (keyup)=\"onKeyAddDv($event)\">\n            <ng-template #dichVuKyThuatTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"30%\">Mã</th>\n                        <th>Tên</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #dichVuKyThuatTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"30%\">{{dataItem.Ma}}</td>\n                        <td>{{dataItem.Ten}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n        <app-combobox *ngIf=\"luaChonGoiDichVu===3\" id=\"dich-vu-giuong-bv\" fxFlex=\"30%\" fxFlex.sm=\"100%\"\n            label=\"Tên Dịch Vụ\" url=\"GoiDichVu/GetListDichVuGiuong\" [(model)]=\"dvTrongGois.DvId\" bind=\"true\"\n            class=\"item-no-padding\" [template]=\"dichVuGiuongTemplate\" [templateHeader]=\"dichVuGiuongTemplateHeader\"\n            [required]=\"true\" [validationerror]=\"'DvId' | validationerror:validationErrors\"\n            (selectionChange)=\"onChangeDichVu($event)\" (keyup)=\"onKeyAddDv($event)\">\n            <ng-template #dichVuGiuongTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"30%\">Mã</th>\n                        <th>Tên</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #dichVuGiuongTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"30%\">{{dataItem.Ma}}</td>\n                        <td>{{dataItem.Ten}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n        <!-- url=\"KhamBenh/LoaiGia\" -->\n        <app-dropdownlist *ngIf=\"luaChonGoiDichVu===1\" id=\"loai-gia\" fxFlex=\"20%\" fxFlex.sm=\"50%\" label=\"Loại giá\"\n            [(model)]=\"dvTrongGois.LoaiGia\" class=\"item-no-padding\" bind=\"true\" [required]=\"true\"\n            [data]=\"danhSachLoaiGia\" [validationerror]=\"'LoaiGiaThemDV' | validationerror:validationErrors\"\n            (selectionChange)=\"onChangeLoaiGia($event)\" (keyup)=\"onKeyAddDv($event)\">\n        </app-dropdownlist>\n        <!-- url=\"GoiDichVu/LoaiGiaNhomGiaDichVuKyThuatBenhVien\" -->\n        <app-dropdownlist *ngIf=\"luaChonGoiDichVu===2\" id=\"loai-gia\" fxFlex=\"20%\" fxFlex.sm=\"50%\" label=\"Loại giá\"\n            [(model)]=\"dvTrongGois.LoaiGia\" class=\"item-no-padding\" [data]=\"danhSachLoaiGia\" bind=\"true\"\n            [required]=\"true\" [validationerror]=\"'LoaiGiaThemDV' | validationerror:validationErrors\"\n            (selectionChange)=\"onChangeLoaiGia($event)\" (keyup)=\"onKeyAddDv($event)\">\n        </app-dropdownlist>\n\n        <app-textboxnumeric id=\"so-luong\" fxFlex=\"10%\" fxFlex.sm=\"50%\" [disabled]=\"luaChonGoiDichVu===1\"\n            [(model)]=\"dvTrongGois.SoLuong\" (modelChange)=\"ChangeSoLuong($event)\" label=\"Số Lượng\" [min]=\"1\"\n            [max]=\"10000\" [validationerror]=\"'SoLuong' | validationerror:validationErrors\" [required]=\"true\"\n            (keyup)=\"onKeyAddDv($event)\">\n        </app-textboxnumeric>\n        <app-textboxnumeric id=\"don-gia\" (keyup)=\"onKeyAddDv($event)\" fxFlex=\"20%\" fxFlex.sm=\"50%\"\n            [(model)]=\"dvTrongGois.DonGia\" [spinners]=\"false\" label=\"Đơn Giá\" [disabled]=\"true\"\n            [validationerror]=\"'DonGia' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n        <app-textboxnumeric id=\"thanh-tien\" fxFlex=\"20%\" fxFlex.sm=\"50%\" [(model)]=\"dvTrongGois.ThanhTien\"\n            [spinners]=\"false\" label=\"Thành Tiền\" [disabled]=\"true\">\n        </app-textboxnumeric>\n        <app-textarea id=\"ghi-chu\" fxFlex=\"100%\" maxlength=\"1000\" minHeight=\"20\" [(model)]=\"dvTrongGois.GhiChu\"\n            label=\"Ghi Chú\" [validationerror]=\"'GhiChu' | validationerror:validationErrors\"\n            (keyup)=\"onKeyAddDv($event)\">\n        </app-textarea>\n    </ng-container>\n    <div fxFlex=\"100%\">\n        <div class=\"form-footer\" style=\"float: right;\">\n            <button type=\"button\" (click)=\"Reset()\" mat-raised-button>Hủy</button>\n            <button color=\"primary\" class=\"btn btn-raised btn-raised btn-primary mb-0\" (click)=\"Add()\" color=\"primary\"\n                mat-raised-button>Thêm</button>\n        </div>\n    </div>\n\n\n    <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" [gridColumns]=\"gridColumns\" [gridDataSource]=\"gridDataSource\"\n        [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n        [checkboxAble]=\"false\" [autoHeight]=\"true\" [pageable]=\"false\" [groups]=\"groups\" masterName=\"coChietKhau\"\n        #gridDvTrongGoi>\n    </app-grid>\n\n    <ng-template #trangThaiTemplate let-dataItem>\n        <button (click)=\"ConfirmDelete(dataItem)\" style=\"color: red;\">\n            <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n        </button>\n    </ng-template>\n    <ng-template #loaiGiaTemplate let-dataItem>\n        <app-dropdownlist *ngIf=\"dataItem.Nhom==1\" id=\"loai-gia-grid\" popupSettings=\"\" label=\" \" class=\"no-label\"\n            url=\"GoiDichVu/LoaiGiaDichVuKhamBenhGrid?idDichVuKhamBenhId={{dataItem.DvId}}\" [(model)]=\"dataItem.LoaiGia\"\n            bind=\"true\" [validationerror]=\"'LoaiGia' | validationerror:validationErrors\"\n            (selectionChange)=\"onChangeLoaiGiaTheoDataItem($event, dataItem)\">\n        </app-dropdownlist>\n        <app-dropdownlist *ngIf=\"dataItem.Nhom==2\" id=\"loai-gia-grid\" popupSettings=\"\" label=\" \" class=\"no-label\"\n            url=\"GoiDichVu/LoaiGiaNhomGiaDichVuKyThuatBenhVienGrid?dichVuKyThuatId={{dataItem.DvId}}\"\n            [(model)]=\"dataItem.LoaiGia\" bind=\"true\" [validationerror]=\"'LoaiGia' | validationerror:validationErrors\"\n            (selectionChange)=\"onChangeLoaiGiaTheoDataItem($event, dataItem)\">\n        </app-dropdownlist>\n    </ng-template>\n    <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n        <strong>{{value}}</strong>\n    </ng-template>\n    <ng-template #soLuongTemplate let-dataItem>\n        <app-textboxnumeric id=\"so-luong-grid\" [disabled]=\"dataItem.Nhom==1\" [(model)]=\"dataItem.SoLuong\"\n            (modelChange)=\"ChangeSoLuongDataItem($event, dataItem)\" class=\"no-label\" label=\" \" [min]=\"1\" [max]=\"10000\"\n            [validationerror]=\"'dataItem[' + goiDichVu.DvTrongGois.indexOf(dataItem) + '].SoLuong' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n    </ng-template>\n\n    <ng-template #donGiaTemplate let-dataItem>\n        <span style=\"display: block;\">{{dataItem.DonGia | number:'0.2-2':'vi-VN'}}</span>\n        <label class=\"red\"\n            [innerHTML]=\"'dataItem[' + goiDichVu.DvTrongGois.indexOf(dataItem) + '].DonGia' | validationerror:validationErrors\"></label>\n    </ng-template>\n    <ng-template #ghiChuTemplate let-dataItem>\n        <app-textarea id=\"ghi-chu-grid\" fxFlex=\"100%\" maxlength=\"1000\" minHeight=\"20\" class=\"no-label\"\n            [(model)]=\"dataItem.GhiChu\" label=\" \">\n        </app-textarea>\n    </ng-template>\n    <ng-template #donGiaFooterTemplate let-dataItem>\n        <span style=\"float:right\">Tổng cộng:</span>\n    </ng-template>\n    <ng-template #thanhTienTemplate let-dataItem>\n        {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n    <ng-template #sttTemplate let-i=\"rowIndex\">\n        {{i + 1}}\n    </ng-template>\n    <ng-template #thanhTienFooterTemplate let-dataItem>\n        <div fxLayoutAlign=\"start center\" fxLayout=\"row\">\n            <div>\n                <span style=\"color:blue;\">{{totalDV('ThanhTien') | number:'0.2-2':'vi-VN'}}</span>\n            </div>\n        </div>\n    </ng-template>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-update/nhom-dich-vu-thuong-dung-update.component.html": 
        /*!*************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-update/nhom-dich-vu-thuong-dung-update.component.html ***!
          \*************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n    {Title:'Danh Mục',Path:''}\n    ,{Title:'Nhóm Hệ Thống',Path:''}\n    ,{Title:'Bệnh Viện',Path:''}\n    ,{Title:'Nhóm Dịch Vụ Thường Dùng',Path:'/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung', Active: true}\n]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chỉnh sửa nhóm dịch vụ</h2>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-nhom-dich-vu-thuong-dung-shared></app-nhom-dich-vu-thuong-dung-shared>\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"update\" #footer (updated)=\"onUpdated()\" (validateClient)=\"onValidateClient($event)\"></app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/danh-sach-nhom-dich-vu-thuong-dung/danh-sach-nhom-dich-vu-thuong-dung.component.scss": 
        /*!*****************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/danh-sach-nhom-dich-vu-thuong-dung/danh-sach-nhom-dich-vu-thuong-dung.component.scss ***!
          \*****************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9uaG9tLWRpY2gtdnUtdGh1b25nLWR1bmcvZGFuaC1zYWNoLW5ob20tZGljaC12dS10aHVvbmctZHVuZy9kYW5oLXNhY2gtbmhvbS1kaWNoLXZ1LXRodW9uZy1kdW5nLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/danh-sach-nhom-dich-vu-thuong-dung/danh-sach-nhom-dich-vu-thuong-dung.component.ts": 
        /*!***************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/danh-sach-nhom-dich-vu-thuong-dung/danh-sach-nhom-dich-vu-thuong-dung.component.ts ***!
          \***************************************************************************************************************************************************************************/
        /*! exports provided: DanhSachNhomDichVuThuongDungComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachNhomDichVuThuongDungComponent", function () { return DanhSachNhomDichVuThuongDungComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-done */ "./node_modules/@iconify/icons-ic/twotone-done.js");
            /* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_12__);
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_13__);
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_15__);
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_16__);
            /* harmony import */ var _iconify_icons_ic_content_copy__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/content-copy */ "./node_modules/@iconify/icons-ic/content-copy.js");
            /* harmony import */ var _iconify_icons_ic_content_copy__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_content_copy__WEBPACK_IMPORTED_MODULE_17__);
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var DanhSachNhomDichVuThuongDungComponent = /** @class */ (function () {
                function DanhSachNhomDichVuThuongDungComponent(authService, dialog, router, notificationService, apiService) {
                    this.authService = authService;
                    this.dialog = dialog;
                    this.router = router;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.sort = [{
                            field: 'Id',
                            dir: 'desc'
                        }];
                    this.icicdone = _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_12___default.a;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_13___default.a;
                    this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_16___default.a;
                    this.icEdit = _iconify_icons_ic_content_copy__WEBPACK_IMPORTED_MODULE_17___default.a;
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_15___default.a;
                    this.baseRoute = '/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung';
                    this.gridColumns = [];
                    this.urlGetDataGridChild = "NhomDichVuThuongDung/GetDataForGridAsync";
                    this.urlGetTotalPageGridChild = "NhomDichVuThuongDung/GetTotalPageForGridAsync";
                }
                DanhSachNhomDichVuThuongDungComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].GoiDichVuNhomThuongDung;
                    this.gridColumns = [
                        { Field: "TenNhom", Title: "Tên Nhóm", Width: 200, Sortable: true, LinkDetail: true },
                        { Field: "MoTa", Title: "Mô Tả", MinWidth: 400, Sortable: true },
                        { Field: "TinhTrang", Title: "Trạng thái", Width: 150, Template: this.trangThaiTemplate },
                        { Field: "", Title: "", Width: 150, Template: this.actionTemplate, HideFilter: true }
                    ];
                };
                DanhSachNhomDichVuThuongDungComponent.prototype.copy = function (id) {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_8__["SecurityOperation"].Add)) {
                        this.router.navigate([this.baseRoute + '/them/' + id]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DanhSachNhomDichVuThuongDungComponent.prototype.delete = function (id) {
                    this.gridGoiDv.delete(id);
                };
                DanhSachNhomDichVuThuongDungComponent.prototype.updateDichVu = function (id, isDisabled) {
                    var confirm = 'ngừng sử dụng';
                    if (isDisabled) {
                        confirm = 'sử dụng';
                    }
                    if (!isDisabled) {
                        confirm = 'ngừng sử dụng';
                    }
                    var self = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_8__["SecurityOperation"].Update)) {
                        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: 'Xác nhận', Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].MessLockTemplate, [confirm, 'nhóm dịch vụ']) }
                        }).afterClosed().subscribe(function (result) {
                            if (result === 'Yes') {
                                self.apiService.post('NhomDichVuThuongDung/KichHoatNhomDichVu?id=' + id).subscribe(function () {
                                    self.gridChild.search();
                                    if (isDisabled) {
                                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ['Sử dụng']));
                                    }
                                    else {
                                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ['Ngừng sử dụng']));
                                    }
                                }, function (err) {
                                    self.notificationService.showError(err.Message);
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DanhSachNhomDichVuThuongDungComponent.prototype.exportExcel = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_8__["SecurityOperation"].Process)) {
                        this.apiService.postExportExcel('NhomDichVuThuongDung/ExportGoiDichVu', this.gridChild._gridQueryInfo).subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].downLoadFile(res, 'application/vnd.ms-excel', 'GoiDvNhomThuongDung' + dateTimeNow.getFullYear() + '.xlsx');
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                return DanhSachNhomDichVuThuongDungComponent;
            }());
            DanhSachNhomDichVuThuongDungComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"], { static: true })
            ], DanhSachNhomDichVuThuongDungComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
            ], DanhSachNhomDichVuThuongDungComponent.prototype, "trangThaiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], DanhSachNhomDichVuThuongDungComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridGoiDv', { static: false })
            ], DanhSachNhomDichVuThuongDungComponent.prototype, "gridGoiDv", void 0);
            DanhSachNhomDichVuThuongDungComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-danh-sach-nhom-dich-vu-thuong-dung',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./danh-sach-nhom-dich-vu-thuong-dung.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/danh-sach-nhom-dich-vu-thuong-dung/danh-sach-nhom-dich-vu-thuong-dung.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./danh-sach-nhom-dich-vu-thuong-dung.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/danh-sach-nhom-dich-vu-thuong-dung/danh-sach-nhom-dich-vu-thuong-dung.component.scss")).default]
                })
            ], DanhSachNhomDichVuThuongDungComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-create-popup/nhom-dich-vu-thuong-dung-create-popup.component.scss": 
        /*!***********************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-create-popup/nhom-dich-vu-thuong-dung-create-popup.component.scss ***!
          \***********************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9uaG9tLWRpY2gtdnUtdGh1b25nLWR1bmcvbmhvbS1kaWNoLXZ1LXRodW9uZy1kdW5nLWNyZWF0ZS1wb3B1cC9uaG9tLWRpY2gtdnUtdGh1b25nLWR1bmctY3JlYXRlLXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-create-popup/nhom-dich-vu-thuong-dung-create-popup.component.ts": 
        /*!*********************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-create-popup/nhom-dich-vu-thuong-dung-create-popup.component.ts ***!
          \*********************************************************************************************************************************************************************************/
        /*! exports provided: NhomDichVuThuongDungCreatePopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhomDichVuThuongDungCreatePopupComponent", function () { return NhomDichVuThuongDungCreatePopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _nhom_dich_vu_thuong_dung_shared_nhom_dich_vu_thuong_dung_shared_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nhom-dich-vu-thuong-dung-shared/nhom-dich-vu-thuong-dung-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-shared/nhom-dich-vu-thuong-dung-shared.component.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__);
            var NhomDichVuThuongDungCreatePopupComponent = /** @class */ (function () {
                function NhomDichVuThuongDungCreatePopupComponent(router, data, dialogRef) {
                    this.router = router;
                    this.data = data;
                    this.dialogRef = dialogRef;
                    this.boPhan = null;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default.a;
                }
                NhomDichVuThuongDungCreatePopupComponent.prototype.ngOnInit = function () {
                    this.boPhan = this.data.BoPhan;
                };
                NhomDichVuThuongDungCreatePopupComponent.prototype.onCreated = function () {
                    this.dialogRef.close("Yes");
                };
                NhomDichVuThuongDungCreatePopupComponent.prototype.closed = function () {
                    this.dialogRef.close();
                };
                NhomDichVuThuongDungCreatePopupComponent.prototype.onValidateClient = function (isValidate) {
                    if (isValidate) {
                        this.shared.OnValidate();
                    }
                };
                NhomDichVuThuongDungCreatePopupComponent.prototype.keyEvent = function (event) {
                    if (event.keyCode === 83 && event.ctrlKey) {
                        // ctrl + s
                        this.footer.create();
                        event.preventDefault();
                    }
                    if (event.keyCode === 27 && !event.ctrlKey) {
                        // esc
                        this.footer.cancel();
                        event.preventDefault();
                    }
                };
                return NhomDichVuThuongDungCreatePopupComponent;
            }());
            NhomDichVuThuongDungCreatePopupComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('footer', { static: false })
            ], NhomDichVuThuongDungCreatePopupComponent.prototype, "footer", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_nhom_dich_vu_thuong_dung_shared_nhom_dich_vu_thuong_dung_shared_component__WEBPACK_IMPORTED_MODULE_4__["NhomDichVuThuongDungSharedComponent"], { static: true })
            ], NhomDichVuThuongDungCreatePopupComponent.prototype, "shared", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])
            ], NhomDichVuThuongDungCreatePopupComponent.prototype, "keyEvent", null);
            NhomDichVuThuongDungCreatePopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nhom-dich-vu-thuong-dung-create-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nhom-dich-vu-thuong-dung-create-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-create-popup/nhom-dich-vu-thuong-dung-create-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nhom-dich-vu-thuong-dung-create-popup.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-create-popup/nhom-dich-vu-thuong-dung-create-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], NhomDichVuThuongDungCreatePopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-create/nhom-dich-vu-thuong-dung-create.component.scss": 
        /*!***********************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-create/nhom-dich-vu-thuong-dung-create.component.scss ***!
          \***********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9uaG9tLWRpY2gtdnUtdGh1b25nLWR1bmcvbmhvbS1kaWNoLXZ1LXRodW9uZy1kdW5nLWNyZWF0ZS9uaG9tLWRpY2gtdnUtdGh1b25nLWR1bmctY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-create/nhom-dich-vu-thuong-dung-create.component.ts": 
        /*!*********************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-create/nhom-dich-vu-thuong-dung-create.component.ts ***!
          \*********************************************************************************************************************************************************************/
        /*! exports provided: NhomDichVuThuongDungCreateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhomDichVuThuongDungCreateComponent", function () { return NhomDichVuThuongDungCreateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _nhom_dich_vu_thuong_dung_shared_nhom_dich_vu_thuong_dung_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nhom-dich-vu-thuong-dung-shared/nhom-dich-vu-thuong-dung-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-shared/nhom-dich-vu-thuong-dung-shared.component.ts");
            var NhomDichVuThuongDungCreateComponent = /** @class */ (function () {
                function NhomDichVuThuongDungCreateComponent(router) {
                    this.router = router;
                }
                NhomDichVuThuongDungCreateComponent.prototype.ngOnInit = function () {
                };
                NhomDichVuThuongDungCreateComponent.prototype.onCreated = function () {
                    this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung']);
                };
                NhomDichVuThuongDungCreateComponent.prototype.onValidateClient = function (isValidate) {
                    if (isValidate) {
                        this.shared.OnValidate();
                    }
                };
                NhomDichVuThuongDungCreateComponent.prototype.keyEvent = function (event) {
                    if (event.keyCode === 83 && event.ctrlKey) {
                        // ctrl + s
                        this.footer.create();
                        event.preventDefault();
                    }
                    if (event.keyCode === 27 && !event.ctrlKey) {
                        // esc
                        this.footer.cancel();
                        event.preventDefault();
                    }
                };
                return NhomDichVuThuongDungCreateComponent;
            }());
            NhomDichVuThuongDungCreateComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('footer', { static: false })
            ], NhomDichVuThuongDungCreateComponent.prototype, "footer", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_nhom_dich_vu_thuong_dung_shared_nhom_dich_vu_thuong_dung_shared_component__WEBPACK_IMPORTED_MODULE_3__["NhomDichVuThuongDungSharedComponent"], { static: true })
            ], NhomDichVuThuongDungCreateComponent.prototype, "shared", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])
            ], NhomDichVuThuongDungCreateComponent.prototype, "keyEvent", null);
            NhomDichVuThuongDungCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nhom-dich-vu-thuong-dung-create',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nhom-dich-vu-thuong-dung-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-create/nhom-dich-vu-thuong-dung-create.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nhom-dich-vu-thuong-dung-create.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-create/nhom-dich-vu-thuong-dung-create.component.scss")).default]
                })
            ], NhomDichVuThuongDungCreateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-routing.module.ts": 
        /*!***********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-routing.module.ts ***!
          \***********************************************************************************************************************************/
        /*! exports provided: NhomDichVuThuongDungRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhomDichVuThuongDungRoutingModule", function () { return NhomDichVuThuongDungRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _danh_sach_nhom_dich_vu_thuong_dung_danh_sach_nhom_dich_vu_thuong_dung_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./danh-sach-nhom-dich-vu-thuong-dung/danh-sach-nhom-dich-vu-thuong-dung.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/danh-sach-nhom-dich-vu-thuong-dung/danh-sach-nhom-dich-vu-thuong-dung.component.ts");
            /* harmony import */ var _nhom_dich_vu_thuong_dung_create_nhom_dich_vu_thuong_dung_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nhom-dich-vu-thuong-dung-create/nhom-dich-vu-thuong-dung-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-create/nhom-dich-vu-thuong-dung-create.component.ts");
            /* harmony import */ var _nhom_dich_vu_thuong_dung_update_nhom_dich_vu_thuong_dung_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nhom-dich-vu-thuong-dung-update/nhom-dich-vu-thuong-dung-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-update/nhom-dich-vu-thuong-dung-update.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            var routes = [{
                    path: '',
                    component: _danh_sach_nhom_dich_vu_thuong_dung_danh_sach_nhom_dich_vu_thuong_dung_component__WEBPACK_IMPORTED_MODULE_3__["DanhSachNhomDichVuThuongDungComponent"],
                    data: {
                        title: 'Danh mục nhóm dịch vụ thường dùng',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__["DocumentType"].GoiDichVuNhomThuongDung,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
                },
                {
                    path: 'chinh-sua/:id',
                    component: _nhom_dich_vu_thuong_dung_update_nhom_dich_vu_thuong_dung_update_component__WEBPACK_IMPORTED_MODULE_5__["NhomDichVuThuongDungUpdateComponent"],
                    data: {
                        title: 'Chỉnh sửa nhóm dịch vụ thường dùng',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__["DocumentType"].GoiDichVuNhomThuongDung,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
                },
                {
                    path: 'them',
                    component: _nhom_dich_vu_thuong_dung_create_nhom_dich_vu_thuong_dung_create_component__WEBPACK_IMPORTED_MODULE_4__["NhomDichVuThuongDungCreateComponent"],
                    data: {
                        title: 'Thêm toa nhóm dịch vụ thường dùng',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__["DocumentType"].GoiDichVuNhomThuongDung,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Add
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
                },
                {
                    path: 'them/:id',
                    component: _nhom_dich_vu_thuong_dung_create_nhom_dich_vu_thuong_dung_create_component__WEBPACK_IMPORTED_MODULE_4__["NhomDichVuThuongDungCreateComponent"],
                    data: {
                        title: 'Thêm toa nhóm dịch vụ thường dùng',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__["DocumentType"].GoiDichVuNhomThuongDung,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Add
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
                },
            ];
            var NhomDichVuThuongDungRoutingModule = /** @class */ (function () {
                function NhomDichVuThuongDungRoutingModule() {
                }
                return NhomDichVuThuongDungRoutingModule;
            }());
            NhomDichVuThuongDungRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], NhomDichVuThuongDungRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-shared/nhom-dich-vu-thuong-dung-shared.component.scss": 
        /*!***********************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-shared/nhom-dich-vu-thuong-dung-shared.component.scss ***!
          \***********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9uaG9tLWRpY2gtdnUtdGh1b25nLWR1bmcvbmhvbS1kaWNoLXZ1LXRodW9uZy1kdW5nLXNoYXJlZC9uaG9tLWRpY2gtdnUtdGh1b25nLWR1bmctc2hhcmVkLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-shared/nhom-dich-vu-thuong-dung-shared.component.ts": 
        /*!*********************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-shared/nhom-dich-vu-thuong-dung-shared.component.ts ***!
          \*********************************************************************************************************************************************************************/
        /*! exports provided: NhomDichVuThuongDungSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhomDichVuThuongDungSharedComponent", function () { return NhomDichVuThuongDungSharedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/sharp-edit */ "./node_modules/@iconify/icons-ic/sharp-edit.js");
            /* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_7__);
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var _nhom_dich_vu_thuong_dung__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../nhom-dich-vu-thuong-dung */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            var NhomDichVuThuongDungSharedComponent = /** @class */ (function () {
                function NhomDichVuThuongDungSharedComponent(route, apiService, authService, baseService, dialog, cdRef, notificationService) {
                    this.route = route;
                    this.apiService = apiService;
                    this.authService = authService;
                    this.baseService = baseService;
                    this.dialog = dialog;
                    this.cdRef = cdRef;
                    this.notificationService = notificationService;
                    this.listDVG = [];
                    this.loaiGiaKhamBenhDisabled = false;
                    this.isCreate = false;
                    this.boPhan = null;
                    this.disableBoPhan = false;
                    this.isUpdateKhamBenh = false;
                    this.tongGoiKhamBenh = 0;
                    this.listDVKB = [];
                    //#endregion
                    //#region khai báo những cái liên quan đến chi tiết dược phẩm
                    this.gridColumnsChiTietDuocPham = [];
                    this.listDP = [];
                    this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.icEdit = _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_6___default.a;
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_7___default.a;
                    this.luaChonGoiDichVu = 1;
                    this.gridColumns = [];
                    this.gridDataSource = {
                        data: [],
                        total: 0
                    };
                    this.id = this.route.snapshot.params.id;
                    this.goiDichVu = new _nhom_dich_vu_thuong_dung__WEBPACK_IMPORTED_MODULE_14__["GoiDichVu"]();
                    this.dvTrongGois = new _nhom_dich_vu_thuong_dung__WEBPACK_IMPORTED_MODULE_14__["DvTrongGoi"]();
                    //#endregion
                    //#region khai báo không chiết khấu
                    this.groups = [
                        {
                            field: 'NhomDisplay', aggregates: [
                                { field: 'DonGia', aggregate: 'sum' },
                                { field: 'ThanhTien', aggregate: 'sum' }
                            ]
                        }
                    ];
                    this.baseService.controllerName = "NhomDichVuThuongDung";
                }
                NhomDichVuThuongDungSharedComponent.prototype.totalNotChietKhau = function (field) {
                    switch (field) {
                        case 'ThanhTien': {
                        }
                    }
                };
                NhomDichVuThuongDungSharedComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].GoiDichVuNhomThuongDung;
                    var id = this.route.snapshot.params.id;
                    if (this.boPhan != undefined && this.boPhan != null) {
                        this.goiDichVu.BoPhanId = this.boPhan;
                    }
                    this.gridColumns = [
                        { Field: 'STT', Title: '#', Width: 35, Template: this.sttTemplate },
                        { Field: 'MaDv', Title: 'Mã', Width: 120 },
                        {
                            Field: 'NhomDisplay', Title: 'Nhóm', Width: 200, Hidden: true,
                            TemplateGroupHeader: this.nhomGroupHeaderTemplate
                        },
                        {
                            Field: 'TenDv', Title: 'Tên Dịch Vụ', MinWidth: 200,
                            TemplateGroupFooter: this.tenDichVuGroupFooterTemplate
                        },
                        { Field: 'LoaiGiaDisplay', Title: 'Loại Giá', Width: 120, Template: this.loaiGiaTemplate },
                        { Field: 'SoLuong', Title: 'Số Lượng', Width: 120, Template: this.soLuongTemplate },
                        {
                            Field: 'DonGia', Title: 'Đơn Giá', Width: 120,
                            Template: this.donGiaTemplate, TemplateFooter: this.donGiaFooterTemplate
                        },
                        {
                            Field: 'ThanhTien', Title: 'Thành Tiền', Width: 120,
                            Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterTemplate
                        },
                        {
                            Field: 'GhiChu', Title: 'Ghi Chú', Width: 474,
                            Template: this.ghiChuTemplate
                        },
                        { Field: 'Action', Title: '', Width: 66, Template: this.trangThaiTemplate }
                    ];
                    this.getLoaiGiaDefault();
                    if (id) {
                        this.getById(id);
                    }
                };
                NhomDichVuThuongDungSharedComponent.prototype.onChangeBoPhan = function (dataItem) {
                    if (dataItem != undefined && dataItem != null) {
                        this.goiDichVu.BoPhanId = dataItem.KeyId;
                    }
                    else {
                        this.goiDichVu.BoPhanId = null;
                    }
                };
                //#region triển khai những pt common
                NhomDichVuThuongDungSharedComponent.prototype.getById = function (id) {
                    var _this = this;
                    this.baseService.getById(id).subscribe(function (resultData) {
                        if (resultData) {
                            if (_this.isCreate) {
                                _this.goiDichVu = Object.assign({}, resultData);
                                _this.goiDichVu.Id = 0;
                                _this.goiDichVu.DvTrongGois.forEach(function (x) {
                                    x.IdDatabase = 0;
                                    x.GoiDichVuId = 0;
                                });
                                _this.setDataGridView();
                                _this.gridDvTrongGoi.gridDataSource = Object.assign({}, _this.gridDataSource);
                                _this.gridDvTrongGoi.setDataSource();
                                return;
                            }
                            _this.goiDichVu = Object.assign({}, resultData);
                            _this.setDataGridView();
                            _this.gridDvTrongGoi.gridDataSource = Object.assign({}, _this.gridDataSource);
                            _this.gridDvTrongGoi.setDataSource();
                        }
                    });
                };
                NhomDichVuThuongDungSharedComponent.prototype.totalDV = function (field) {
                    switch (field) {
                        case 'ThanhTien': {
                            return this.goiDichVu.DvTrongGois.reduce(function (sum, item) { return sum + item.ThanhTien; }, 0);
                        }
                    }
                };
                NhomDichVuThuongDungSharedComponent.prototype.getLoaiGiaDefault = function () {
                    var _this = this;
                    var defaultParams = {
                        Id: 0,
                        ParameterDependencies: null,
                        Query: null,
                        Take: 50
                    };
                    this.apiService.post('KhamBenh/LoaiGia', defaultParams).subscribe(function (resultData) {
                        _this.dvTrongGois.LoaiGiaDisplay = resultData != null ? resultData[0].DisplayName : null;
                    });
                };
                NhomDichVuThuongDungSharedComponent.prototype.ChangeSoLuongDataItem = function (soLuong, data) {
                    data.SoLuong = soLuong;
                    data.ThanhTien = data.DonGia != null ?
                        data.DonGia * soLuong : null;
                };
                NhomDichVuThuongDungSharedComponent.prototype.getSharedData = function () {
                    if (this.isCreate) {
                        this.goiDichVu.Id = 0;
                    }
                    else {
                        this.goiDichVu.Id = this.id ? this.id : 0;
                    }
                    return this.goiDichVu;
                };
                NhomDichVuThuongDungSharedComponent.prototype.chonDichVu = function (evt) {
                    if (evt == 3 || evt == 2 || evt == 1) {
                        this.danhSachLoaiGia = null;
                        this.dvTrongGois.LoaiGia = null;
                    }
                    this.validationErrors = [];
                    this.Reset();
                };
                NhomDichVuThuongDungSharedComponent.prototype.onChangeDichVu = function (data) {
                    var _this = this;
                    this.validationErrors = [];
                    if (data) {
                        this.dvTrongGois.TenDv = data.DisplayName;
                        this.dvTrongGois.DvId = data.KeyId;
                        this.dvTrongGois.MaDv = data.Ma;
                        switch (this.luaChonGoiDichVu) {
                            case 1: {
                                this.dvTrongGois.SoLuong = 1;
                                this.danhSachLoaiGia = null;
                                this.dvTrongGois.LoaiGia = null;
                                // this.apiService.post('GoiDichVu/GetChiPhiHienTaiDichVuKhamBenh?dichVuKhamBenhBenhVienId=' + this.dvTrongGois.DvId +
                                //     '&nhomGiaDichVuKhamBenhBenhVienId=' + this.dvTrongGois.LoaiGia).subscribe(
                                //         (resultData: any) => {
                                //             this.dvTrongGois.DonGia = resultData;
                                //             this.dvTrongGois.ThanhTien = this.dvTrongGois.SoLuong != null ?
                                //                 resultData * this.dvTrongGois.SoLuong : resultData;
                                //         });
                                this.apiService.post('GoiDichVu/LoaiGiaDichVuKhamBenh?idDichVuKhamBenhId=' + this.dvTrongGois.DvId).subscribe(function (resultData) {
                                    _this.danhSachLoaiGia = resultData;
                                    if (_this.danhSachLoaiGia != undefined && _this.danhSachLoaiGia != null
                                        && _this.danhSachLoaiGia[0] != undefined && _this.danhSachLoaiGia[0] != null) {
                                        //Khách hàng yêu cầu mạc đinh load giá thường.
                                        _this.onChangeLoaiGia(_this.danhSachLoaiGia[0]);
                                    }
                                });
                                break;
                            }
                            case 2: {
                                this.danhSachLoaiGia = null;
                                this.dvTrongGois.LoaiGia = null;
                                this.apiService.post('GoiDichVu/LoaiGiaNhomGiaDichVuKyThuatBenhVien?dichVuKyThuatId=' + this.dvTrongGois.DvId).subscribe(function (resultData) {
                                    if (resultData != undefined && resultData != null) {
                                        _this.danhSachLoaiGia = resultData;
                                        if (_this.danhSachLoaiGia != undefined && _this.danhSachLoaiGia != null
                                            && _this.danhSachLoaiGia[0] != undefined && _this.danhSachLoaiGia[0] != null) {
                                            //Khách hàng yêu cầu mạc đinh load giá thường.
                                            _this.onChangeLoaiGia(_this.danhSachLoaiGia[0]);
                                        }
                                        else {
                                            _this.notificationService.showError("Giá dịch vụ này hết hạn.");
                                        }
                                    }
                                    else {
                                    }
                                });
                                // this.dvTrongGois.SoLuong = null;
                                // this.apiService.post('GoiDichVu/GetChiPhiHienTaiDichVuKyThuat?dichVuKyThuatBenhVienId=' + this.dvTrongGois.DvId +
                                //     '&nhomGiaDichVuKyThuatBenhVienId=' + this.dvTrongGois.LoaiGia).subscribe(
                                //         (resultData: any) => {
                                //             this.dvTrongGois.DonGia = resultData;
                                //             this.dvTrongGois.ThanhTien = this.dvTrongGois.SoLuong != null ?
                                //                 resultData * this.dvTrongGois.SoLuong : resultData;
                                //         });
                                break;
                            }
                            case 3: {
                                this.danhSachLoaiGia = null;
                                this.dvTrongGois.LoaiGia = null;
                                this.apiService.post('GoiDichVu/LoaiGiaNhomGiaGiuongBenhVien?dichVuGiuongBenhVienId=' + this.dvTrongGois.DvId).subscribe(function (resultData) {
                                    _this.danhSachLoaiGia = resultData;
                                    if (_this.danhSachLoaiGia != undefined && _this.danhSachLoaiGia != null
                                        && _this.danhSachLoaiGia[0] != undefined && _this.danhSachLoaiGia[0] != null) {
                                        //Khách hàng yêu cầu mạc đinh load giá thường.
                                        _this.onChangeLoaiGia(_this.danhSachLoaiGia[0]);
                                    }
                                });
                                // this.apiService.post('GoiDichVu/GetChiPhiHienTaiDichVuKyThuat?dichVuKyThuatBenhVienId=' + this.dvTrongGois.DvId +
                                //     '&nhomGiaDichVuKyThuatBenhVienId=' + this.dvTrongGois.LoaiGia).subscribe(
                                //         (resultData: any) => {
                                //             this.dvTrongGois.DonGia = resultData;
                                //             this.dvTrongGois.ThanhTien = this.dvTrongGois.SoLuong != null ?
                                //                 resultData * this.dvTrongGois.SoLuong : resultData;
                                //         });
                                break;
                            }
                        }
                        return;
                    }
                    else {
                        this.danhSachLoaiGia = null;
                        this.dvTrongGois.LoaiGia = null;
                    }
                    this.dvTrongGois.DonGia = null;
                    this.dvTrongGois.ThanhTien = null;
                };
                NhomDichVuThuongDungSharedComponent.prototype.ChangeSoLuong = function (soluong) {
                    this.dvTrongGois.SoLuong = soluong;
                    this.dvTrongGois.ThanhTien = this.dvTrongGois.DonGia != null ?
                        this.dvTrongGois.DonGia * soluong : null;
                };
                NhomDichVuThuongDungSharedComponent.prototype.onChangeLoaiGia = function (loaiGia) {
                    var _this = this;
                    this.dvTrongGois.LoaiGia = loaiGia.KeyId;
                    this.dvTrongGois.LoaiGiaDisplay = loaiGia.DisplayName;
                    if (this.validationErrors && this.validationErrors.some(function (x) { return x.Field.includes('DonGia'); })) {
                        for (var _i = 0, _a = this.validationErrors.filter(function (x) { return x.Field.includes('DonGia'); }); _i < _a.length; _i++) {
                            var validationItem = _a[_i];
                            this.validationErrors.splice(this.validationErrors.indexOf(validationItem), 1);
                        }
                    }
                    if (this.dvTrongGois.DvId) {
                        switch (this.luaChonGoiDichVu) {
                            case 1: {
                                this.apiService.post('GoiDichVu/GetChiPhiHienTaiDichVuKhamBenh?dichVuKhamBenhBenhVienId=' + this.dvTrongGois.DvId +
                                    '&nhomGiaDichVuKhamBenhBenhVienId=' + this.dvTrongGois.LoaiGia).subscribe(function (resultData) {
                                    _this.dvTrongGois.DonGia = resultData;
                                    _this.dvTrongGois.ThanhTien = _this.dvTrongGois.SoLuong != null ?
                                        resultData * _this.dvTrongGois.SoLuong : resultData;
                                });
                                break;
                            }
                            case 2: {
                                this.apiService.post('GoiDichVu/GetChiPhiHienTaiDichVuKyThuat?dichVuKyThuatBenhVienId=' + this.dvTrongGois.DvId +
                                    '&nhomGiaDichVuKyThuatBenhVienId=' + this.dvTrongGois.LoaiGia).subscribe(function (resultData) {
                                    _this.dvTrongGois.DonGia = resultData;
                                    //BVHD-3801 khách hàng chọn dịch vụ kỹ thuật số lượng 1
                                    if (_this.dvTrongGois.SoLuong === null)
                                        _this.dvTrongGois.SoLuong = 1;
                                    _this.dvTrongGois.ThanhTien = _this.dvTrongGois.SoLuong != null ?
                                        resultData * _this.dvTrongGois.SoLuong : resultData;
                                });
                                break;
                            }
                            case 3: {
                                this.apiService.post('GoiDichVu/GetChiPhiChoDichVuGiuong?dichVuGiuongBenhVienId=' + this.dvTrongGois.DvId +
                                    '&nhomGiaId=' + this.dvTrongGois.LoaiGia).subscribe(function (resultData) {
                                    _this.dvTrongGois.DonGia = resultData;
                                    _this.dvTrongGois.ThanhTien = _this.dvTrongGois.SoLuong != null ?
                                        resultData * _this.dvTrongGois.SoLuong : resultData;
                                });
                                break;
                            }
                        }
                        return;
                    }
                    this.dvTrongGois.DonGia = null;
                    this.dvTrongGois.ThanhTien = null;
                };
                NhomDichVuThuongDungSharedComponent.prototype.onChangeLoaiGiaTheoDataItem = function (loaiGia, data) {
                    var _this = this;
                    data.LoaiGia = loaiGia.KeyId;
                    data.LoaiGiaDisplay = loaiGia.DisplayName;
                    if (this.validationErrors &&
                        this.validationErrors
                            .some(function (x) { return x.Field.includes('dataItem[' + _this.goiDichVu.DvTrongGois.indexOf(data) + '].DonGia'); })) {
                        for (var _i = 0, _a = this.validationErrors.filter(function (x) { return x.Field.includes('dataItem[' + _this.goiDichVu.DvTrongGois.indexOf(data) + '].DonGia'); }); _i < _a.length; _i++) {
                            var validateItem = _a[_i];
                            this.validationErrors.splice(this.validationErrors.indexOf(validateItem), 1);
                        }
                    }
                    if (data.DvId) {
                        switch (data.Nhom) {
                            case 1: {
                                this.apiService.post('GoiDichVu/GetChiPhiHienTaiDichVuKhamBenh?dichVuKhamBenhBenhVienId=' + data.DvId +
                                    '&nhomGiaDichVuKhamBenhBenhVienId=' + data.LoaiGia).subscribe(function (resultData) {
                                    data.DonGia = resultData;
                                    data.ThanhTien = data.SoLuong != null ?
                                        resultData * data.SoLuong : resultData;
                                });
                                break;
                            }
                            case 2: {
                                this.apiService.post('GoiDichVu/GetChiPhiHienTaiDichVuKyThuat?dichVuKyThuatBenhVienId=' + data.DvId +
                                    '&nhomGiaDichVuKyThuatBenhVienId=' + data.LoaiGia).subscribe(function (resultData) {
                                    data.DonGia = resultData;
                                    data.ThanhTien = data.SoLuong != null ?
                                        resultData * data.SoLuong : resultData;
                                });
                                break;
                            }
                            case 3: {
                                this.apiService.post('GoiDichVu/GetChiPhiChoDichVuGiuong?dichVuGiuongBenhVienId=' + data.DvId +
                                    '&nhomGiaId=' + data.LoaiGia).subscribe(function (resultData) {
                                    data.DonGia = resultData;
                                    data.ThanhTien = data.SoLuong != null ?
                                        resultData * data.SoLuong : resultData;
                                });
                                break;
                            }
                        }
                        return;
                    }
                    data.DonGia = null;
                    data.ThanhTien = null;
                };
                NhomDichVuThuongDungSharedComponent.prototype.Reset = function () {
                    this.dvTrongGois.DonGia = null;
                    this.dvTrongGois.ThanhTien = null;
                    this.dvTrongGois.MaDv = null;
                    this.dvTrongGois.TenDv = null;
                    this.dvTrongGois.Id = null;
                    this.dvTrongGois.DvId = null;
                    this.dvTrongGois.LoaiGia = 1;
                    this.dvTrongGois.SoLuong = null;
                    this.dvTrongGois.IdDatabase = null;
                    this.dvTrongGois.GhiChu = null;
                    this.dvTrongGois.Nhom = null;
                    this.dvTrongGois.NhomDisplay = null;
                    this.getLoaiGiaDefault();
                };
                NhomDichVuThuongDungSharedComponent.prototype.Add = function () {
                    switch (this.luaChonGoiDichVu) {
                        case 1: {
                            this.validationFormClientForKhamBenh(this.dvTrongGois);
                            this.AddingAfterValidation(1);
                            break;
                        }
                        case 2: {
                            this.validationFormClientForKyThuat(this.dvTrongGois);
                            this.AddingAfterValidation(2);
                            break;
                        }
                        case 3: {
                            this.validationFormClientForGiuong(this.dvTrongGois);
                            this.AddingAfterValidation(3);
                            break;
                        }
                    }
                };
                NhomDichVuThuongDungSharedComponent.prototype.AddingAfterValidation = function (loaiNhom) {
                    var _this = this;
                    if (this.validationErrors && !this.validationErrors.some(function (x) { return x; })) {
                        this.dvTrongGois.Nhom = loaiNhom;
                        this.apiService.get('GoiDichVuMarketing/GetResultEnumDichVuTongHop?enumTongHop=' + this.dvTrongGois.Nhom).subscribe(function (resultData) {
                            _this.idDichVuKhamBenhComponent = _this.goiDichVu.DvTrongGois.length + 1;
                            var goiDichVuModel = new _nhom_dich_vu_thuong_dung__WEBPACK_IMPORTED_MODULE_14__["DvTrongGoi"]();
                            goiDichVuModel = Object.assign({}, _this.dvTrongGois);
                            goiDichVuModel.IdDatabase = 0;
                            goiDichVuModel.Id = _this.idDichVuKhamBenhComponent;
                            goiDichVuModel.NhomDisplay = resultData;
                            goiDichVuModel.GoiDichVuId = _this.id ? _this.id : 0;
                            _this.goiDichVu.DvTrongGois.push(goiDichVuModel);
                            _this.setDataGridView();
                            _this.gridDvTrongGoi.gridDataSource = Object.assign({}, _this.gridDataSource);
                            _this.gridDvTrongGoi.setDataSource();
                            _this.Reset();
                        });
                    }
                };
                NhomDichVuThuongDungSharedComponent.prototype.setDataGridView = function () {
                    this.gridDataSource = {
                        data: this.goiDichVu.DvTrongGois.slice(),
                        total: this.goiDichVu.DvTrongGois.length
                    };
                };
                NhomDichVuThuongDungSharedComponent.prototype.validationFormClientForKhamBenh = function (dataval) {
                    this.validationErrors = [];
                    var array = [];
                    if (dataval) {
                        if (dataval.DvId === 0 || dataval.DvId == null) {
                            array.push({ Field: 'DvId', Message: 'Yêu cầu chọn dịch vụ khám bệnh' });
                        }
                        if (dataval.LoaiGia === 0 || dataval.LoaiGia == null) {
                            array.push({ Field: 'LoaiGiaThemDV', Message: 'Yêu cầu chọn loại giá' });
                        }
                        if (dataval.SoLuong === 0 || dataval.SoLuong == null) {
                            array.push({ Field: 'SoLuong', Message: 'Yêu cầu chọn số lượng' });
                        }
                        // if (dataval.DonGia === 0) {
                        //     array.push({ Field: 'DonGia', Message: 'Không có đơn giá. Chọn lại dịch vụ hoặc loại giá' });
                        // }
                    }
                    if (this.checkExist(dataval.DvId, 1)) {
                        array.push({ Field: 'DvId', Message: 'Dịch vụ khám bệnh này đã có trong danh sách' });
                    }
                    if (array.length > 0) {
                        this.validationErrors = array.slice();
                    }
                };
                NhomDichVuThuongDungSharedComponent.prototype.validationFormClientForKyThuat = function (dataval) {
                    this.validationErrors = [];
                    var array = [];
                    if (dataval) {
                        if (dataval.DvId === 0 || dataval.DvId == null) {
                            array.push({ Field: 'DvId', Message: 'Yêu cầu chọn dịch vụ kỹ thuật' });
                        }
                        if (dataval.LoaiGia === 0 || dataval.LoaiGia == null) {
                            array.push({ Field: 'LoaiGiaThemDV', Message: 'Yêu cầu chọn loại giá' });
                        }
                        if (dataval.SoLuong === 0 || dataval.SoLuong == null) {
                            array.push({ Field: 'SoLuong', Message: 'Yêu cầu chọn số lượng' });
                        }
                        // if (dataval.DonGia === 0) {
                        //     array.push({ Field: 'DonGia', Message: 'Không có đơn giá. Chọn lại dịch vụ hoặc loại giá' });
                        // }
                    }
                    // check lai kỹ thuat
                    if (this.checkExist(dataval.DvId, 2)) {
                        array.push({ Field: 'DvId', Message: 'Dịch vụ kỹ thuật này đã có trong danh sách' });
                    }
                    if (array.length > 0) {
                        this.validationErrors = array.slice();
                    }
                };
                NhomDichVuThuongDungSharedComponent.prototype.validationFormClientForGiuong = function (dataval) {
                    this.validationErrors = [];
                    var array = [];
                    if (dataval) {
                        if (dataval.DvId === 0 || dataval.DvId == null) {
                            array.push({ Field: 'DvId', Message: 'Yêu cầu chọn dịch vụ giường' });
                        }
                        if (dataval.LoaiGia === 0 || dataval.LoaiGia == null) {
                            array.push({ Field: 'LoaiGiaThemDV', Message: 'Yêu cầu chọn loại giá' });
                        }
                        if (dataval.SoLuong === 0 || dataval.SoLuong == null) {
                            array.push({ Field: 'SoLuong', Message: 'Yêu cầu chọn số lượng' });
                        }
                    }
                    // check lai giuong benh
                    if (this.checkExist(dataval.DvId, 3)) {
                        array.push({ Field: 'DvId', Message: 'Dịch vụ giường này đã có trong danh sách' });
                    }
                    if (array.length > 0) {
                        this.validationErrors = array.slice();
                    }
                };
                NhomDichVuThuongDungSharedComponent.prototype.checkExistOnKhamBenh = function (dichVuKhamBenhBenhVienId) {
                    var len = this.goiDichVu.DvTrongGois.filter(function (x) { return x.Nhom === 1; }).length;
                    for (var i = 0; i < len; i++) {
                        if (this.goiDichVu.DvTrongGois[i].DvId === dichVuKhamBenhBenhVienId) {
                            return true;
                        }
                    }
                    return false;
                };
                NhomDichVuThuongDungSharedComponent.prototype.checkExistOnAmendationForKhamBenh = function (dichVuKhamBenhBenhVienId, position) {
                    var len = this.listDVKB.length;
                    for (var i = 0; i < len; i++) {
                        if (i === position) {
                            continue;
                        }
                        if (this.listDVKB[i].DichVuKhamBenhBenhVienId === dichVuKhamBenhBenhVienId) {
                            return true;
                        }
                    }
                    return false;
                };
                NhomDichVuThuongDungSharedComponent.prototype.checkExist = function (dichVuKhamBenhBenhVienId, loaiNhom) {
                    return this.goiDichVu.DvTrongGois.some(function (x) { return x.Nhom === loaiNhom && x.DvId === dichVuKhamBenhBenhVienId; });
                };
                NhomDichVuThuongDungSharedComponent.prototype.ConfirmDelete = function (data) {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: 'Xác nhận', Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].MessConfirm, ['xóa']) }
                    }).afterClosed().subscribe(function (result) {
                        if (result === 'Yes') {
                            _this.Delete(data);
                        }
                    });
                };
                NhomDichVuThuongDungSharedComponent.prototype.Delete = function (data) {
                    this.goiDichVu.DvTrongGois.splice(this.goiDichVu.DvTrongGois.indexOf(data), 1);
                    this.setDataGridView();
                    this.gridDvTrongGoi.gridDataSource = Object.assign({}, this.gridDataSource);
                    this.gridDvTrongGoi.setDataSource();
                };
                NhomDichVuThuongDungSharedComponent.prototype.ngAfterViewInit = function () {
                    this.cdRef.detectChanges();
                };
                NhomDichVuThuongDungSharedComponent.prototype.OnValidate = function () {
                    this.validationErrors = [];
                    if (this.goiDichVu.TenGoiDv == null || this.goiDichVu.TenGoiDv == "") {
                        var validate = {
                            Field: 'TenGoiDv',
                            Message: "Tên nhóm yêu cầu nhập"
                        };
                        this.validationErrors.push(validate);
                    }
                    if (this.goiDichVu.IsDisabled == null) {
                        var validate = {
                            Field: 'IsDisabled',
                            Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["GoiDv"].SuDungNotNull
                        };
                        this.validationErrors.push(validate);
                    }
                    if (this.validationErrors && !this.validationErrors.some(function (x) { return x; })) {
                        if (this.goiDichVu.DvTrongGois && !this.goiDichVu.DvTrongGois.some(function (x) { return x; })) {
                            var validate = {
                                Field: 'dvTrongGoi',
                                Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["GoiDv"].SoLuongNotNull
                            };
                            this.validationErrors.push(validate);
                            this.notificationService.showError("Dịch vụ trong nhóm yêu cầu có ít nhất 1 dịch vụ");
                        }
                        if (this.goiDichVu.DvTrongGois.some(function (x) { return x.SoLuong == null || x.DonGia === 0; })) {
                            for (var _i = 0, _a = this.goiDichVu.DvTrongGois.filter(function (x) { return x.SoLuong == null; }); _i < _a.length; _i++) {
                                var dvTrongGoi = _a[_i];
                                var validate = {
                                    Field: 'dataItem[' + this.goiDichVu.DvTrongGois.indexOf(dvTrongGoi) + '].SoLuong',
                                    Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["GoiDv"].SoLuongNotNull
                                };
                                this.validationErrors.push(validate);
                                this.goiDichVu.DvTrongGois.indexOf(dvTrongGoi);
                            }
                            // for (const dvTrongGoi of this.goiDichVu.DvTrongGois.filter(x => x.DonGia === 0)) {
                            //     const validate = {
                            //         Field: 'dataItem[' + this.goiDichVu.DvTrongGois.indexOf(dvTrongGoi) + '].DonGia',
                            //         Message: 'Không có đơn giá. Chọn lại loại giá'
                            //     };
                            //     this.validationErrors.push(validate);
                            //     this.goiDichVu.DvTrongGois.indexOf(dvTrongGoi);
                            // }
                        }
                    }
                };
                NhomDichVuThuongDungSharedComponent.prototype.onKeyAddDv = function (keyInput) {
                    if (keyInput.keyCode === 13) {
                        this.Add();
                    }
                };
                NhomDichVuThuongDungSharedComponent.prototype.ResetValidateFormForGrid = function () {
                    if (this.validationErrors && this.validationErrors.some(function (x) { return x.Field.includes('DvId')
                        || x.Field.includes('LoaiGia') || x.Field.includes('SoLuong') || x.Field.includes('DonGia'); })) {
                        for (var _i = 0, _a = this.validationErrors.filter(function (x) { return x.Field.includes('DvId')
                            || x.Field.includes('LoaiGia') || x.Field.includes('SoLuong') || x.Field.includes('DonGia'); }); _i < _a.length; _i++) {
                            var validationItem = _a[_i];
                            this.validationErrors.splice(this.validationErrors.indexOf(validationItem), 1);
                        }
                    }
                };
                NhomDichVuThuongDungSharedComponent.prototype.openComboboxLoaiGiaKhamBenh = function (isOpen) {
                    this.loaiGiaKhamBenhDisabled = isOpen;
                };
                return NhomDichVuThuongDungSharedComponent;
            }());
            NhomDichVuThuongDungSharedComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"] },
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_16__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], NhomDichVuThuongDungSharedComponent.prototype, "isCreate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], NhomDichVuThuongDungSharedComponent.prototype, "boPhan", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], NhomDichVuThuongDungSharedComponent.prototype, "disableBoPhan", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_13__["GridComponent"], { static: false })
            ], NhomDichVuThuongDungSharedComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiChiTietDichVuGiuongTemplate', { static: true })
            ], NhomDichVuThuongDungSharedComponent.prototype, "trangThaiChiTietDichVuGiuongTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongCongFooterGiuongTemplate', { static: true })
            ], NhomDichVuThuongDungSharedComponent.prototype, "tongCongFooterGiuongTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienFooterGiuongTemplate', { static: true })
            ], NhomDichVuThuongDungSharedComponent.prototype, "thanhTienFooterGiuongTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDvTrongGoi', { static: false })
            ], NhomDichVuThuongDungSharedComponent.prototype, "gridDvTrongGoi", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienFooterTemplate', { static: true })
            ], NhomDichVuThuongDungSharedComponent.prototype, "thanhTienFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienFooterDuocPhamTemplate', { static: true })
            ], NhomDichVuThuongDungSharedComponent.prototype, "thanhTienFooterDuocPhamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
            ], NhomDichVuThuongDungSharedComponent.prototype, "trangThaiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenDichVuGroupFooterTemplate', { static: true })
            ], NhomDichVuThuongDungSharedComponent.prototype, "tenDichVuGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaTemplate', { static: true })
            ], NhomDichVuThuongDungSharedComponent.prototype, "donGiaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiGiaTemplate', { static: true })
            ], NhomDichVuThuongDungSharedComponent.prototype, "loaiGiaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaFooterTemplate', { static: true })
            ], NhomDichVuThuongDungSharedComponent.prototype, "donGiaFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenDichVuKhongChietKhauFooterTemplate', { static: true })
            ], NhomDichVuThuongDungSharedComponent.prototype, "tenDichVuKhongChietKhauFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaGroupFooterTemplate', { static: true })
            ], NhomDichVuThuongDungSharedComponent.prototype, "donGiaGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
            ], NhomDichVuThuongDungSharedComponent.prototype, "thanhTienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ghiChuTemplate', { static: true })
            ], NhomDichVuThuongDungSharedComponent.prototype, "ghiChuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienGroupFooterTemplate', { static: true })
            ], NhomDichVuThuongDungSharedComponent.prototype, "thanhTienGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dichVuFooterTemplate', { static: true })
            ], NhomDichVuThuongDungSharedComponent.prototype, "dichVuFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], NhomDichVuThuongDungSharedComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongTemplate', { static: true })
            ], NhomDichVuThuongDungSharedComponent.prototype, "soLuongTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridCoChietKhau', { static: false })
            ], NhomDichVuThuongDungSharedComponent.prototype, "gridCoChietKhau", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridKhongChietKhau', { static: false })
            ], NhomDichVuThuongDungSharedComponent.prototype, "gridKhongChietKhau", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
            ], NhomDichVuThuongDungSharedComponent.prototype, "sttTemplate", void 0);
            NhomDichVuThuongDungSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nhom-dich-vu-thuong-dung-shared',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nhom-dich-vu-thuong-dung-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-shared/nhom-dich-vu-thuong-dung-shared.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nhom-dich-vu-thuong-dung-shared.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-shared/nhom-dich-vu-thuong-dung-shared.component.scss")).default]
                })
            ], NhomDichVuThuongDungSharedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-update/nhom-dich-vu-thuong-dung-update.component.scss": 
        /*!***********************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-update/nhom-dich-vu-thuong-dung-update.component.scss ***!
          \***********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9uaG9tLWRpY2gtdnUtdGh1b25nLWR1bmcvbmhvbS1kaWNoLXZ1LXRodW9uZy1kdW5nLXVwZGF0ZS9uaG9tLWRpY2gtdnUtdGh1b25nLWR1bmctdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-update/nhom-dich-vu-thuong-dung-update.component.ts": 
        /*!*********************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-update/nhom-dich-vu-thuong-dung-update.component.ts ***!
          \*********************************************************************************************************************************************************************/
        /*! exports provided: NhomDichVuThuongDungUpdateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhomDichVuThuongDungUpdateComponent", function () { return NhomDichVuThuongDungUpdateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _nhom_dich_vu_thuong_dung_shared_nhom_dich_vu_thuong_dung_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nhom-dich-vu-thuong-dung-shared/nhom-dich-vu-thuong-dung-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-shared/nhom-dich-vu-thuong-dung-shared.component.ts");
            var NhomDichVuThuongDungUpdateComponent = /** @class */ (function () {
                function NhomDichVuThuongDungUpdateComponent(router) {
                    this.router = router;
                }
                NhomDichVuThuongDungUpdateComponent.prototype.ngOnInit = function () {
                };
                NhomDichVuThuongDungUpdateComponent.prototype.onUpdated = function () {
                    this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung']);
                };
                NhomDichVuThuongDungUpdateComponent.prototype.onValidateClient = function (isValidate) {
                    if (isValidate) {
                        this.shared.OnValidate();
                    }
                };
                NhomDichVuThuongDungUpdateComponent.prototype.keyEvent = function (event) {
                    if (event.keyCode === 83 && event.ctrlKey) {
                        // ctrl + s
                        this.footer.update();
                        event.preventDefault();
                    }
                    if (event.keyCode === 27 && !event.ctrlKey) {
                        // esc
                        this.footer.cancel();
                        event.preventDefault();
                    }
                };
                return NhomDichVuThuongDungUpdateComponent;
            }());
            NhomDichVuThuongDungUpdateComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('footer', { static: false })
            ], NhomDichVuThuongDungUpdateComponent.prototype, "footer", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_nhom_dich_vu_thuong_dung_shared_nhom_dich_vu_thuong_dung_shared_component__WEBPACK_IMPORTED_MODULE_3__["NhomDichVuThuongDungSharedComponent"], { static: true })
            ], NhomDichVuThuongDungUpdateComponent.prototype, "shared", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])
            ], NhomDichVuThuongDungUpdateComponent.prototype, "keyEvent", null);
            NhomDichVuThuongDungUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nhom-dich-vu-thuong-dung-update',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nhom-dich-vu-thuong-dung-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-update/nhom-dich-vu-thuong-dung-update.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nhom-dich-vu-thuong-dung-update.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-update/nhom-dich-vu-thuong-dung-update.component.scss")).default]
                })
            ], NhomDichVuThuongDungUpdateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung.module.ts": 
        /*!***************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung.module.ts ***!
          \***************************************************************************************************************************/
        /*! exports provided: NhomDichVuThuongDungModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhomDichVuThuongDungModule", function () { return NhomDichVuThuongDungModule; });
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
            /* harmony import */ var _nhom_dich_vu_thuong_dung_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./nhom-dich-vu-thuong-dung-routing.module */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-routing.module.ts");
            /* harmony import */ var _danh_sach_nhom_dich_vu_thuong_dung_danh_sach_nhom_dich_vu_thuong_dung_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./danh-sach-nhom-dich-vu-thuong-dung/danh-sach-nhom-dich-vu-thuong-dung.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/danh-sach-nhom-dich-vu-thuong-dung/danh-sach-nhom-dich-vu-thuong-dung.component.ts");
            /* harmony import */ var _nhom_dich_vu_thuong_dung_create_nhom_dich_vu_thuong_dung_create_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./nhom-dich-vu-thuong-dung-create/nhom-dich-vu-thuong-dung-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-create/nhom-dich-vu-thuong-dung-create.component.ts");
            /* harmony import */ var _nhom_dich_vu_thuong_dung_update_nhom_dich_vu_thuong_dung_update_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./nhom-dich-vu-thuong-dung-update/nhom-dich-vu-thuong-dung-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-update/nhom-dich-vu-thuong-dung-update.component.ts");
            /* harmony import */ var _nhom_dich_vu_thuong_dung_shared_nhom_dich_vu_thuong_dung_shared_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./nhom-dich-vu-thuong-dung-shared/nhom-dich-vu-thuong-dung-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-shared/nhom-dich-vu-thuong-dung-shared.component.ts");
            /* harmony import */ var _nhom_dich_vu_thuong_dung_create_popup_nhom_dich_vu_thuong_dung_create_popup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./nhom-dich-vu-thuong-dung-create-popup/nhom-dich-vu-thuong-dung-create-popup.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-create-popup/nhom-dich-vu-thuong-dung-create-popup.component.ts");
            var NhomDichVuThuongDungModule = /** @class */ (function () {
                function NhomDichVuThuongDungModule() {
                }
                return NhomDichVuThuongDungModule;
            }());
            NhomDichVuThuongDungModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_danh_sach_nhom_dich_vu_thuong_dung_danh_sach_nhom_dich_vu_thuong_dung_component__WEBPACK_IMPORTED_MODULE_16__["DanhSachNhomDichVuThuongDungComponent"], _nhom_dich_vu_thuong_dung_create_nhom_dich_vu_thuong_dung_create_component__WEBPACK_IMPORTED_MODULE_17__["NhomDichVuThuongDungCreateComponent"], _nhom_dich_vu_thuong_dung_update_nhom_dich_vu_thuong_dung_update_component__WEBPACK_IMPORTED_MODULE_18__["NhomDichVuThuongDungUpdateComponent"], _nhom_dich_vu_thuong_dung_shared_nhom_dich_vu_thuong_dung_shared_component__WEBPACK_IMPORTED_MODULE_19__["NhomDichVuThuongDungSharedComponent"], _nhom_dich_vu_thuong_dung_create_popup_nhom_dich_vu_thuong_dung_create_popup_component__WEBPACK_IMPORTED_MODULE_20__["NhomDichVuThuongDungCreatePopupComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                        _nhom_dich_vu_thuong_dung_routing_module__WEBPACK_IMPORTED_MODULE_15__["NhomDichVuThuongDungRoutingModule"],
                    ],
                    entryComponents: [
                        _nhom_dich_vu_thuong_dung_create_popup_nhom_dich_vu_thuong_dung_create_popup_component__WEBPACK_IMPORTED_MODULE_20__["NhomDichVuThuongDungCreatePopupComponent"]
                    ]
                })
            ], NhomDichVuThuongDungModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung.ts": 
        /*!********************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung.ts ***!
          \********************************************************************************************************************/
        /*! exports provided: GoiDichVu, DvTrongGoi, LoaiGiaGiuongBenhVien */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoiDichVu", function () { return GoiDichVu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DvTrongGoi", function () { return DvTrongGoi; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiGiaGiuongBenhVien", function () { return LoaiGiaGiuongBenhVien; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var GoiDichVu = /** @class */ (function () {
                function GoiDichVu(Id, TenGoiDv, IsDisabled, MoTa, LoaiGoiDichVu, BoPhanId, TenBoPhan, DvTrongGois) {
                    if (Id === void 0) { Id = 0; }
                    if (TenGoiDv === void 0) { TenGoiDv = null; }
                    if (IsDisabled === void 0) { IsDisabled = false; }
                    if (MoTa === void 0) { MoTa = null; }
                    if (LoaiGoiDichVu === void 0) { LoaiGoiDichVu = 2; }
                    if (BoPhanId === void 0) { BoPhanId = null; }
                    if (TenBoPhan === void 0) { TenBoPhan = null; }
                    if (DvTrongGois === void 0) { DvTrongGois = []; }
                    this.Id = Id;
                    this.TenGoiDv = TenGoiDv;
                    this.IsDisabled = IsDisabled;
                    this.MoTa = MoTa;
                    this.LoaiGoiDichVu = LoaiGoiDichVu;
                    this.BoPhanId = BoPhanId;
                    this.TenBoPhan = TenBoPhan;
                    this.DvTrongGois = DvTrongGois;
                }
                return GoiDichVu;
            }());
            var DvTrongGoi = /** @class */ (function () {
                function DvTrongGoi(Id, MaDv, TenDv, DvId, LoaiGia, GoiDichVuId, LoaiGiaDisplay, SoLuong, IdDatabase, DonGia, ThanhTien, GhiChu, Nhom, // 1 là khám bệnh, 2 là kỹ thuật, 3 là giường bệnh
                NhomDisplay) {
                    if (Id === void 0) { Id = null; }
                    if (MaDv === void 0) { MaDv = null; }
                    if (TenDv === void 0) { TenDv = null; }
                    if (DvId === void 0) { DvId = null; }
                    if (LoaiGia === void 0) { LoaiGia = 1; }
                    if (GoiDichVuId === void 0) { GoiDichVuId = null; }
                    if (LoaiGiaDisplay === void 0) { LoaiGiaDisplay = null; }
                    if (SoLuong === void 0) { SoLuong = null; }
                    if (IdDatabase === void 0) { IdDatabase = null; }
                    if (DonGia === void 0) { DonGia = null; }
                    if (ThanhTien === void 0) { ThanhTien = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (Nhom === void 0) { Nhom = null; }
                    if (NhomDisplay === void 0) { NhomDisplay = null; }
                    this.Id = Id;
                    this.MaDv = MaDv;
                    this.TenDv = TenDv;
                    this.DvId = DvId;
                    this.LoaiGia = LoaiGia;
                    this.GoiDichVuId = GoiDichVuId;
                    this.LoaiGiaDisplay = LoaiGiaDisplay;
                    this.SoLuong = SoLuong;
                    this.IdDatabase = IdDatabase;
                    this.DonGia = DonGia;
                    this.ThanhTien = ThanhTien;
                    this.GhiChu = GhiChu;
                    this.Nhom = Nhom;
                    this.NhomDisplay = NhomDisplay;
                }
                return DvTrongGoi;
            }());
            var LoaiGiaGiuongBenhVien = /** @class */ (function () {
                function LoaiGiaGiuongBenhVien(KeyId, DisplayName) {
                    if (DisplayName === void 0) { DisplayName = ""; }
                    this.KeyId = KeyId;
                    this.DisplayName = DisplayName;
                }
                return LoaiGiaGiuongBenhVien;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=default~bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module~bao-cao~779cbbf2-es2015.js.map
//# sourceMappingURL=default~bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module~bao-cao~779cbbf2-es5.js.map
//# sourceMappingURL=default~bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module~bao-cao~779cbbf2-es5.js.map