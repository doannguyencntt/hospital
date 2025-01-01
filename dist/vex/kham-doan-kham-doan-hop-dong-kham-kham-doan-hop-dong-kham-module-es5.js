(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kham-doan-kham-doan-hop-dong-kham-kham-doan-hop-dong-kham-module"], {
        /***/ "./node_modules/@iconify/icons-ic/add-circle.js": 
        /*!******************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/add-circle.js ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/@iconify/icons-ic/baseline-info.js": 
        /*!*********************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/baseline-info.js ***!
          \*********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/@iconify/icons-ic/person-add.js": 
        /*!******************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/person-add.js ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-popup/kham-doan-goi-kham-popup.component.html": 
        /*!***************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-popup/kham-doan-goi-kham-popup.component.html ***!
          \***************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">Thông tin gói khám</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close [mat-dialog-close]=\"null\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content style=\"padding: 0;\">  \n    <!-- Radiobuton sử dụng gói khám chung và riêng(luồng củ) -->\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <app-radio fxFlex=\"100%\" fxFlex.sm=\"100%\" id=\"goikham\" *ngIf=\"isCreatedHopDongKhamSucKhoe===true\"\n            [items]=\"[{Value:true,Text:'Gói khám chung'},{Value:false,Text:'Tạo gói khám'}]\" label=\"Thông tin gói khám\"\n            [(model)]=\"chonGoiKham\">\n        </app-radio>\n\n        <app-kham-doan-goi-kham-suc-chung *ngIf=\"isCreatedHopDongKhamSucKhoe===true && chonGoiKham===true\" fxFlex=\"100%\"\n            fxFlex.sm=\"100%\" [dataKhamDoan]=\"dataKhamDoan\">\n        </app-kham-doan-goi-kham-suc-chung>\n\n        <app-kham-doan-goi-kham-suc-khoe-detail-popup *ngIf=\"chonGoiKham===false\"\n            [dataKhamDoan]=\"dataKhamDoan\" fxFlex=\"100%\" fxFlex.sm=\"100%\"\n            (afterChangedFromHopDongKham)=\"afterChangedFromHopDongKham($event)\">\n        </app-kham-doan-goi-kham-suc-khoe-detail-popup>\n    </div>\n\n</mat-dialog-content>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-chung/kham-doan-goi-kham-suc-chung.component.html": 
        /*!***********************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-chung/kham-doan-goi-kham-suc-chung.component.html ***!
          \***********************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <div class=\"p-gutter\" vexContainer>\n        <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n            <div class=\"card\" fxFlex=\"auto\">\n                <div fxLayout=\"column\">\n                    <div class=\"border-b\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"0px grid\"\n                        fxLayoutGap.lt-sm=\"0\">\n                        <ng-container>\n                            <app-combobox id=\"goikham\" fxFlex=\"50%\" fxFlex.sm=\"50%\" label=\"Gói khám chung\"\n                                [required]=\"true\" url=\"KhamDoan/GetGoiKhamChungs\" \n                                [(model)]=\"goiKhamChungViewModel.KeyId\" [modelText]=\"goiKhamChungViewModel.DisplayName\"\n                                (modelChange)=\"goiKhamChungChange($event)\" [template]=\"congTyTemplate\"\n                                [templateHeader]=\"congTyTemplateHeader\" popupSettings=\"null\"\n                                [validationerror]=\"'Ten' | validationerror:validationErrors\">\n                                <ng-template #congTyTemplateHeader let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <th width=\"30%\">Mã</th>\n                                            <th>Tên</th>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <ng-template #congTyTemplate let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <td width=\"30%\">{{dataItem.Ma}}</td>\n                                            <td>{{dataItem.DisplayName}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                            </app-combobox>\n                        </ng-container>\n\n                        <h3 style=\"display: flex;\" fxFlex=\"100%\" class=\"sub-title\">\n                            Danh Sách Dịch Vụ\n                        </h3>\n\n                        <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridDataSource]=\"gridDataSource\"\n                            #gridDichVu [gridColumns]=\"gridColumns\" [allowSortDefault]=\"true\"\n                            [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                            [useActionDefault]=\"false\" [showStt]=\"true\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                            [groups]=\"groups\" maxHeight=\"500\" [pageable]=\"false\">\n                        </app-grid>\n\n                        <ng-template #tenDichVuTemplate let-dataItem let-rowIndex=\"rowIndex\">                          \n                            <label>\n                                {{dataItem.TenDichVuKyThuatBenhVien}}\n                            </label>\n                        </ng-template>\n\n                        <ng-template #donGiaBenhVienTemplate let-dataItem>\n                            {{dataItem.DonGiaBenhVien | number:'0.2-2':'vi-VN'}}\n                        </ng-template>\n                        <ng-template #donGiaUuDaiTemplate let-dataItem>\n                            {{dataItem.DonGiaUuDai | number:'0.2-2':'vi-VN'}}\n                        </ng-template>\n                        <ng-template #donGiaChuaUuDaiTemplate let-dataItem>\n                            {{dataItem.DonGiaChuaUuDai | number:'0.2-2':'vi-VN'}}\n                        </ng-template>\n\n                        <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n                            <strong>{{value}}</strong>\n                        </ng-template>\n\n                        <ng-template #soLanTemplate let-dataItem>\n                            <label *ngIf=\"!dataItem.LaDichVuKham\">\n                                {{dataItem.SoLan}}\n                            </label>\n                        </ng-template>\n                    </div>\n                    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"form-footer mt-6\">\n                        <button style=\"margin-left: auto;\" type=\"button\" mat-stroked-button color=\"primary\"\n                            (click)=\"quayLai()\">Hủy</button>\n                        <button mat-raised-button mat-button color=\"primary\" *ngIf=\"gridDataSource != undefined && gridDataSource != null && gridDataSource.data.length > 0\"\n                        (click)=\"Luu()\">Lưu</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-chon-file-popup/kham-doan-goi-kham-suc-khoe-chon-file-popup.component.html": 
        /*!*****************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-chon-file-popup/kham-doan-goi-kham-suc-khoe-chon-file-popup.component.html ***!
          \*****************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">Nhập danh sách gói khám từ excel</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close [mat-dialog-close]=\"null\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"height: 80px;\">\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <app-upload id=\"upload\" #fileChuKy fxFlex=\"100%\" fxFlex.sm=\"100%\"\n            [allowedExtensions]=\"allowedExtensions\" [invalidFileExtensionMess]=\"invalidFileExtensionMess\" \n            label=\"Chọn đường dẫn\" [(model)]=\"file\" [template]=\"template\" (uploadFileDone)=\"uploadFileDone($event)\"\n            [required]=\"true\"\n            [validationerror]=\"'file' | validationerror:validationErrors\">\n        </app-upload>\n    \n    <ng-template #template let-files>\n        <table width=\"100%\" class=\"table-combobox\">\n            <tr>\n                <td>\n                    <a *ngIf=\"files[0].error\" title=\"{{'Tải file bị lỗi: '+files[0].error}}\"\n                        (click)=\"fileChuKy.viewFile(files[0])\"\n                        class=\"custom-name red\">{{files[0].name}}</a>\n                    <a *ngIf=\"!files[0].error\" title=\"{{files[0].name}}\"\n                        (click)=\"fileChuKy.viewFile(files[0])\" class=\"green\"\n                        class=\"custom-name green\">{{files[0].name}}</a>\n                </td>\n                <td style=\"width:25px\">\n                    <a type=\"button\" (click)=\"fileChuKy.remove(files[0].uid)\" mat-icon-button>\n                        <mat-icon [icIcon]=\"icClear\"></mat-icon>\n                    </a>\n                </td>\n            </tr>\n        </table>\n    </ng-template>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions class=\"mt-4 pb-5\">\n    <button style=\"margin-left: auto;\" type=\"button\" mat-stroked-button color=\"primary\"[mat-dialog-close]=\"null\">Hủy</button>\n    <button mat-raised-button mat-button color=\"primary\">Ok</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-detail-popup/kham-doan-goi-kham-suc-khoe-detail-popup.component.html": 
        /*!***********************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-detail-popup/kham-doan-goi-kham-suc-khoe-detail-popup.component.html ***!
          \***********************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <app-header-form\n        *ngIf=\"dataKhamDoan==null || (dataKhamDoan != undefined && dataKhamDoan!=null&&dataKhamDoan.LaHopDongKhamSucKhoe!=true)\"\n        [crumbs]=\"[ {Title:'Khám Đoàn',Path:''} \n        ,{Title:'DS Gói Khám Sức Khỏe', Path: '/kham-doan/goi-kham', queryParams: {holdQuery : true}}\n        ,{Title: header,Path:'',Active:true}\n    ]\" [isicMoreVert]=\"false\">\n    </app-header-form>\n    <div class=\"p-gutter\" vexContainer\n        [ngStyle]=\"{'padding': (dataKhamDoan==null || (dataKhamDoan != undefined && dataKhamDoan!=null&&dataKhamDoan.LaHopDongKhamSucKhoe!=true))?'1.5rem':'0'}\">\n        <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n            <div class=\"card\" fxFlex=\"auto\">\n                <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                    *ngIf=\"dataKhamDoan==null || (dataKhamDoan != undefined && dataKhamDoan!=null&&dataKhamDoan.LaHopDongKhamSucKhoe!=true)\">\n                    <h2 class=\"title m-0\">{{title}}</h2>\n                </div>\n\n                <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                    <div class=\"border-b\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                        fxLayoutGap.lt-sm=\"0\">\n                        <ng-container *ngIf=\"!(IsHopDongKham == true && id != 0)\">\n                            <app-combobox id=\"congTy\" fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"Tên công ty\" [required]=\"true\"\n                                [disabled]=\"khamSucKhoeDoan.IsKetThucHopDong || (dataKhamDoan != undefined && dataKhamDoan != null &&  dataKhamDoan.HopDongKhamSucKhoeId != undefined && dataKhamDoan.HopDongKhamSucKhoeId != null && dataKhamDoan.HopDongKhamSucKhoeId !=0)\"\n                                url=\"KhamDoan/GetCongTys\" (openCombobox)=\"openCombobox($event)\"\n                                [(model)]=\"khamSucKhoeDoan.CongTyKhamSucKhoeId\" [modelText]=\"khamSucKhoeDoan.TenCongTy\"\n                                (modelChange)=\"congTyChange($event)\" [template]=\"congTyTemplate\"\n                                [templateHeader]=\"congTyTemplateHeader\" popupSettings=\"null\"\n                                [validationerror]=\"'CongTyKhamSucKhoeId' | validationerror:validationErrors\">\n                                <ng-template #congTyTemplateHeader let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <th width=\"30%\">Mã</th>\n                                            <th width=\"70%\">Tên</th>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <ng-template #congTyTemplate let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <td width=\"30%\">{{dataItem.Ma}}</td>\n                                            <td width=\"70%\">{{dataItem.Ten}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                            </app-combobox>\n\n                            <app-combobox id=\"hopDong\" fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"Số hợp đồng\"\n                                [required]=\"true\"\n                                [disabled]=\"khamSucKhoeDoan.IsKetThucHopDong || (dataKhamDoan != undefined && dataKhamDoan != null && dataKhamDoan.HopDongKhamSucKhoeId != undefined && dataKhamDoan.HopDongKhamSucKhoeId != null && dataKhamDoan.HopDongKhamSucKhoeId !=0)\"\n                                url=\"KhamDoan/GetHopDongKhamSucKhoes\" (openCombobox)=\"openCombobox($event)\"\n                                [(model)]=\"khamSucKhoeDoan.HopDongKhamSucKhoeId\" [modelText]=\"khamSucKhoeDoan.SoHopDong\"\n                                [template]=\"hopDongTemplate\" [templateHeader]=\"hopDongTemplateHeader\"\n                                popupSettings=\"null\" (selectionChange)=\"hopDongChange($event)\"\n                                [queryInfo]=\"{ParameterDependencies:'{CongTyId:' + khamSucKhoeDoan.CongTyKhamSucKhoeId + '}', Take: 50}\"\n                                [validationerror]=\"'HopDongKhamSucKhoeId' | validationerror:validationErrors\">\n                                <ng-template #hopDongTemplateHeader let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <th width=\"30%\">Số hợp đồng</th>\n                                            <th width=\"35%\">Ngày hiệu lực</th>\n                                            <th width=\"35%\">Ngày kết thúc</th>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <ng-template #hopDongTemplate let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <td width=\"30%\">{{dataItem.SoHopDong}}</td>\n                                            <td width=\"35%\">{{dataItem.NgayHieuLucDisplay}}</td>\n                                            <td width=\"35%\">{{dataItem.NgayKetThucDisplay}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                            </app-combobox>\n\n\n                            <app-datepicker id=\"NgayHieuLuc\" fxFlex=\"20%\" fxFlex.sm=\"25%\" label=\"Ngày hiệu lực\"\n                                [(model)]=\"khamSucKhoeDoan.NgayHieuLuc\" [disabled]=\"true\">\n                            </app-datepicker>\n                            <app-datepicker id=\"NgayKetThuc\" fxFlex=\"20%\" fxFlex.sm=\"25%\" label=\"Ngày kết thúc\"\n                                [(model)]=\"khamSucKhoeDoan.NgayKetThuc\" [disabled]=\"true\">\n                            </app-datepicker>\n                        </ng-container>\n\n                        <div fxFlex=\"10%\" fxFlex.sm=\"10%\">\n                            <div class=\"container-custom no-label\">\n                                <label>&nbsp;</label>\n                                <div fxLayout=\"row\" fxLayoutGap=\"16px\">\n                                    <app-checkbox fxFlex=\"100%\" id=\"GoiChung\" [(model)]=\"khamSucKhoeDoan.GoiChung\"\n                                        (modelChange)=\"checkGoiChung($event)\" [disabled]=\"disabled\"\n                                        label=\"Dịch vụ chung trong gói\" value=\"true\"></app-checkbox>\n                                </div>\n                                <div fxLayout=\"row\" fxLayoutGap=\"16px\">\n                                    <app-checkbox fxFlex=\"100%\" id=\"GoiDichVuPhatSinh\"\n                                        [(model)]=\"khamSucKhoeDoan.GoiDichVuPhatSinh\" [disabled]=\"disabled\"\n                                        (modelChange)=\"checkGoiDichVuPhatSinh($event)\" label=\"Dịch vụ ngoài gói\"\n                                        value=\"true\"></app-checkbox>\n                                </div>\n                            </div>\n                        </div>\n\n                        <app-textbox id=\"maGoiKham\" fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"Mã gói khám\" [required]=\"true\"\n                            [maxlength]=\"50\" [disabled]=\"khamSucKhoeDoan.IsKetThucHopDong \"\n                            [(model)]=\"khamSucKhoeDoan.Ma\" [validationerror]=\"'Ma' | validationerror:validationErrors\">\n                        </app-textbox>\n\n                        <app-textbox id=\"tenGoiKham\" fxFlex=\"75%\" fxFlex.sm=\"75%\" label=\"Tên gói khám\" [required]=\"true\"\n                            [maxlength]=\"250\" [disabled]=\"khamSucKhoeDoan.IsKetThucHopDong\"\n                            [(model)]=\"khamSucKhoeDoan.Ten\"\n                            [validationerror]=\"'Ten' | validationerror:validationErrors\">\n                        </app-textbox>\n\n\n\n                        <h3 style=\"display: flex;\" fxFlex=\"100%\" class=\"sub-title\">\n                            Danh Sách Dịch Vụ\n                        </h3>\n                        <ng-container\n                            *ngIf=\"khamSucKhoeDoan.IsKetThucHopDong != true && khamSucKhoeDoan.CongTyKhamSucKhoeId != undefined && khamSucKhoeDoan.HopDongKhamSucKhoeId != undefined \">\n                            <app-combobox #comboBoxDichVu id=\"dichVu\" fxFlex=\"50%\" fxFlex.sm=\"50%\" label=\"Dịch vụ\"\n                                [required]=\"true\"\n                                url=\"KhamDoan/GetDichVuKhamBenhBenhVienVaDichVuKyThuatBenhVienTaoGoiKSKs\"\n                                [queryInfo]=\"{ParameterDependencies:'{CoGoiPhatSinh:' + khamSucKhoeDoan.GoiDichVuPhatSinh +'}', Take: 50}\"\n                                (selectionChange)=\"loaiGiaChange($event, 'dichvu')\" [disabled]=\"isUpdate\"\n                                [(model)]=\"dichVuKhamSucKhoeDoan.DichVuKyThuatBenhVienId\" [reloadForGrid]=\"true\"\n                                (openCombobox)=\"openCombobox($event)\" (keyup)=\"onKey($event)\"\n                                [template]=\"dichVuTemplate\" [templateHeader]=\"dichVuTemplateHeader\" popupSettings=\"null\"\n                                [validationerror]=\"'DichVuKyThuatBenhVienId' | validationerror:validationErrors\">\n                                <ng-template #dichVuTemplateHeader let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <th width=\"30%\">Mã</th>\n                                            <th width=\"50%\">Tên</th>\n                                            <th width=\"20%\">Loại</th>\n\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <ng-template #dichVuTemplate let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <td width=\"30%\">{{dataItem.Ma}}</td>\n                                            <td width=\"50%\">{{dataItem.Ten}}</td>\n                                            <td width=\"20%\">{{dataItem.LoaiDisplay}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                            </app-combobox>\n                            <app-dropdownlist *ngIf=\"laDichVuKham == false\" id=\"LoaiGia\"\n                                [fxFlex]=\"laDichVuKham == false ? '10%' : '15%'\" label=\"Loại giá\"\n                                url=\"KhamDoan/GetLoaiGiaDichVuKyThuat\" [autoSelectFirstItem]=\"true\" [bind]=\"true\"\n                                [(model)]=\"dichVuKhamSucKhoeDoan.NhomGiaDichVuKyThuatBenhVienId\" [popupSettings]=\"null\"\n                                (modelChange)=\"loaiGiaChange($event, 'gia')\" (keyup)=\"onKey($event)\"\n                                (openDropDownList)=\"openCombobox($event)\">\n                            </app-dropdownlist>\n\n                            <app-dropdownlist *ngIf=\"laDichVuKham == true || laDichVuKham == null\" id=\"LoaiGia\"\n                                [fxFlex]=\"laDichVuKham == false ? '10%' : '15%'\" label=\"Loại giá\"\n                                url=\"KhamDoan/GetLoaiGiaDichVuKhamBenh\" [autoSelectFirstItem]=\"true\" [bind]=\"true\"\n                                [(model)]=\"dichVuKhamSucKhoeDoan.NhomGiaDichVuKyThuatBenhVienId\" [popupSettings]=\"null\"\n                                (modelChange)=\"loaiGiaChange($event, 'gia')\" (keyup)=\"onKey($event)\"\n                                (openDropDownList)=\"openCombobox($event)\">\n                            </app-dropdownlist>\n\n                            <app-textboxnumeric *ngIf=\"laDichVuKham == false\" id=\"soLan\" fxFlex=\"5%\" fxFlex.sm=\"5%\"\n                                [max]=\"9999\" [(model)]=\"dichVuKhamSucKhoeDoan.SoLan\" label=\"SL\" [required]=\"true\"\n                                [min]=\"1\" [validationerror]=\"'SoLan' | validationerror:validationErrors\">\n                            </app-textboxnumeric>\n\n                            <app-textboxnumeric id=\"donGiaBenhVien\" [fxFlex]=\"laDichVuKham == false ? '10%' : '15%'\"\n                                fxFlex.sm=\"10%\" [max]=\"99999999999999999\"\n                                [(model)]=\"dichVuKhamSucKhoeDoan.DonGiaBenhVien\" label=\"ĐG BV\" [decimals]=\"0\"\n                                [disabled]=\"true\" [required]=\"true\"\n                                [validationerror]=\"'DonGiaBenhVien' | validationerror:validationErrors\">\n                            </app-textboxnumeric>\n\n                            <app-textboxnumeric id=\"donGiaUuDai\" [fxFlex]=\"laDichVuKham == false ? '15%' : '10%'\"\n                                [max]=\"99999999999999999\" [(model)]=\"dichVuKhamSucKhoeDoan.DonGiaUuDai\"\n                                label=\"ĐG Ưu đãi\" [required]=\"true\" (keyup)=\"onKey($event)\" [isFormatCurrenly]=\"true\"\n                                [spinners]=\"false\" [step]=\"100\"\n                                [validationerror]=\"'DonGiaUuDai' | validationerror:validationErrors\">\n                            </app-textboxnumeric>\n\n                            <!-- [validationerror]=\"'DonGiaChuaUuDai' | validationerror:validationErrors\" -->\n                            <!-- [required]=\"true\" -->\n                            <app-textboxnumeric id=\"donGiaChuaUu\" fxFlex=\"10%\" [max]=\"99999999999999999\"\n                                [(model)]=\"dichVuKhamSucKhoeDoan.DonGiaChuaUuDai\" label=\"ĐG Chưa ưu đãi\"\n                                (keyup)=\"onKey($event)\" [isFormatCurrenly]=\"true\" [spinners]=\"false\" [step]=\"100\">\n                            </app-textboxnumeric>\n\n                            <app-radio fxFlex=\"20%\" fxFlex.sm=\"20%\" id=\"loaiNoiThucHien\"\n                                [items]=\"[{Value:1,Text:'Nội viện'},{Value:2,Text:'Ngoại viện'}]\"\n                                (modelChange)=\"changeHinhThucKhamBenh()\" label=\"Loại nơi thực hiện\"\n                                [(model)]=\"dichVuKhamSucKhoeDoan.HinhThucKhamBenh\" (keyup)=\"onKey($event)\">\n                            </app-radio>\n\n                            <!------------------------ NỘI VIỆN -->\n                            <app-multiselect #multiselectNoiThucHien *ngIf=\"dichVuKhamSucKhoeDoan.HinhThucKhamBenh == 1\"\n                                id=\"PhongBenhVienId\" idWhere=\"{{id}}\" fxFlex=\"80%\"\n                                [(model)]=\"dichVuKhamSucKhoeDoan.GoiKhamSucKhoeNoiThucHienIds\" [modelText]=\"\"\n                                label=\"Nơi thực hiện\" class=\"item-no-padding\"\n                                url=\"KhamDoan/GetKhoaPhongGoiKhams?selectedItems={{dichVuKhamSucKhoeDoan.GoiKhamSucKhoeNoiThucHienIds}}&isMulti=true\"\n                                required=\"true\" popupSettings=\"null\" [template]=\"khoaPhongTemplate\"\n                                [templateHeader]=\"khoaPhongTemplateHeader\" (keyup)=\"onKey($event)\"\n                                [queryInfo]=\"{ParameterDependencies:'{LaDichVuKham:' + laDichVuKham +', HinhThucKhamBenh: ' + dichVuKhamSucKhoeDoan.HinhThucKhamBenh +', DichVuStringId:' + dichVuStringId +'}', Take: 50}\"\n                                [validationerror]=\"'GoiKhamSucKhoeNoiThucHienIds' | validationerror:validationErrors\">\n\n                                <ng-template #khoaPhongTemplateHeader let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <th width=\"30%\">Mã</th>\n                                            <th width=\"70%\">Tên</th>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <ng-template #khoaPhongTemplate let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <td width=\"30%\">{{dataItem.Ma}}</td>\n                                            <td width=\"70%\">{{dataItem.Ten}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                            </app-multiselect>\n\n                            <!------------------------ NGOẠI VIỆN -->\n                            <app-multiselect #multiselectNoiThucHien *ngIf=\"dichVuKhamSucKhoeDoan.HinhThucKhamBenh == 2\"\n                                id=\"PhongBenhVienId\" fxFlex=\"80%\"\n                                [(model)]=\"dichVuKhamSucKhoeDoan.GoiKhamSucKhoeNoiThucHienIds\" [modelText]=\"\"\n                                label=\"Nơi thực hiện\" class=\"item-no-padding\" \n                                url=\"KhamDoan/GetKhoaPhongGoiKhams?selectedItems={{dichVuKhamSucKhoeDoan.GoiKhamSucKhoeNoiThucHienIds}}&isMulti=true\"\n                                required=\"true\" popupSettings=\"null\" [template]=\"khoaPhongTemplate\"\n                                [templateHeader]=\"khoaPhongTemplateHeader\" (keyup)=\"onKey($event)\"\n                                [queryInfo]=\"{ParameterDependencies:'{LaDichVuKham: '+laDichVuKham+',HinhThucKhamBenh: ' + dichVuKhamSucKhoeDoan.HinhThucKhamBenh +', HopDongKhamSucKhoeId:'+khamSucKhoeDoan.HopDongKhamSucKhoeId +', DichVuStringId:' + dichVuStringId +'}', Take: 50}\"\n                                [validationerror]=\"'GoiKhamSucKhoeNoiThucHienIds' | validationerror:validationErrors\">\n\n                                <ng-template #khoaPhongTemplateHeader let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <th width=\"30%\">Mã</th>\n                                            <th width=\"70%\">Tên</th>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <ng-template #khoaPhongTemplate let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <td width=\"30%\">{{dataItem.Ma}}</td>\n                                            <td width=\"70%\">{{dataItem.Ten}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                            </app-multiselect>\n\n                            <div fxFlex=\"100%\">\n                                <fieldset>\n                                    <legend>Thông tin yêu cầu</legend>\n                                    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                        fxLayoutGap.lt-sm=\"0\">\n\n                                        <div fxFlex=\"25%\" fxFlex.sm=\"25%\">\n                                            <div class=\"container-custom no-label\">\n                                                <label>Giới tính</label>\n                                                <div fxLayout=\"row\">\n                                                    <app-checkbox id=\"gioiTinhNam\" label=\"Nam\" class=\"mb-1\"\n                                                        [(model)]=\"dichVuKhamSucKhoeDoan.GioiTinhNam\"\n                                                        (keyup)=\"onKey($event)\" style=\"margin-top: 1px;\">\n                                                    </app-checkbox>\n\n                                                    <app-checkbox id=\"gioiTinhNu\" label=\"Nữ\" class=\"ml-4 mb-1\"\n                                                        [(model)]=\"dichVuKhamSucKhoeDoan.GioiTinhNu\"\n                                                        (keyup)=\"onKey($event)\" (modelChange)=\"gioiTinhNuChange($event)\"\n                                                        style=\"margin-top: 1px;\">\n                                                    </app-checkbox>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div fxFlex=\"25%\" fxFlex.sm=\"25%\">\n                                            <div class=\"container-custom no-label\">\n                                                <label>Mang thai</label>\n                                                <div fxLayout=\"row\">\n                                                    <app-checkbox id=\"coMangThai\" label=\"Có\" class=\"mb-1\"\n                                                        [(model)]=\"dichVuKhamSucKhoeDoan.CoMangThai\"\n                                                        (keyup)=\"onKey($event)\"\n                                                        [disabled]=\"!dichVuKhamSucKhoeDoan.GioiTinhNu\"\n                                                        (modelChange)=\"mangThaiChange($event,'Co')\"\n                                                        style=\"margin-top: 1px;\">\n                                                    </app-checkbox>\n\n                                                    <app-checkbox id=\"khongMangThai\" label=\"Không\" class=\"ml-4 mb-1\"\n                                                        [(model)]=\"dichVuKhamSucKhoeDoan.KhongMangThai\"\n                                                        (keyup)=\"onKey($event)\"\n                                                        [disabled]=\"!dichVuKhamSucKhoeDoan.GioiTinhNu\"\n                                                        (modelChange)=\"mangThaiChange($event,'Khong')\"\n                                                        style=\"margin-top: 1px;\">\n                                                    </app-checkbox>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div fxFlex=\"25%\" fxFlex.sm=\"25%\">\n                                            <div class=\"container-custom no-label\">\n                                                <label>Tình trạng hôn nhân</label>\n                                                <div fxLayout=\"row\">\n                                                    <app-checkbox id=\"chuaLapGD\" label=\"Chưa lập gia đình\" class=\"mb-1\"\n                                                        [(model)]=\"dichVuKhamSucKhoeDoan.ChuaLapGiaDinh\"\n                                                        (keyup)=\"onKey($event)\"\n                                                        (modelChange)=\"lapGDChange($event,'Khong')\"\n                                                        style=\"margin-top: 1px;\">\n                                                    </app-checkbox>\n\n                                                    <app-checkbox id=\"daLapGD\" label=\"Đã lập gia đình\" class=\"ml-4 mb-1\"\n                                                        [(model)]=\"dichVuKhamSucKhoeDoan.DaLapGiaDinh\"\n                                                        (keyup)=\"onKey($event)\" (modelChange)=\"lapGDChange($event,'Co')\"\n                                                        style=\"margin-top: 1px;\">\n                                                    </app-checkbox>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <app-textboxnumeric id=\"soTuoiTu\" fxFlex=\"13%\" fxFlex.sm=\"13%\" [min]=\"0\"\n                                            [max]=\"999\" (keyup)=\"onKey($event)\"\n                                            [(model)]=\"dichVuKhamSucKhoeDoan.SoTuoiTu\" label=\"Số tuổi: Từ\">\n                                        </app-textboxnumeric>\n                                        <app-textboxnumeric id=\"soTuoiDen\" fxFlex=\"12%\" fxFlex.sm=\"12%\" [min]=\"0\"\n                                            [max]=\"999\" (keyup)=\"onKey($event)\"\n                                            [(model)]=\"dichVuKhamSucKhoeDoan.SoTuoiDen\" label=\"Số tuổi: Đến\"\n                                            [validationerror]=\"'SoTuoiDen' | validationerror:validationErrors\">\n                                        </app-textboxnumeric>\n\n                                    </div>\n                                </fieldset>\n                            </div>\n                            <div fxFlex=\"100%\" fxLayoutAlign=\"end center\" kendoTooltip>\n                                <button type=\"button\" color=\"primary\" mat-stroked-button mat-button\n                                    (click)=\"huyDichVu()\" class=\"mr-1\">Hủy</button>\n                                <button *ngIf=\"!isUpdate\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                                    (click)=\"themDichVu()\" class=\"mr-1\">Thêm</button>\n                                <button *ngIf=\"isUpdate\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                                    (click)=\"capNhatDichVu()\" class=\"mr-1\">Cập nhật</button>\n                            </div>\n                        </ng-container>\n\n                        <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridDataSource]=\"gridDataSource\"\n                            #gridDichVu masterName=\"gridDichVu\" [gridColumns]=\"gridColumns\" [allowSortDefault]=\"true\"\n                            [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                            [useActionDefault]=\"false\" [showStt]=\"true\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                            [groups]=\"groups\" maxHeight=\"500\" [pageable]=\"false\">\n                        </app-grid>\n\n                        <ng-template #tenDichVuTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                            <a *ngIf=\"!khamSucKhoeDoan.IsKetThucHopDong\" (click)=\"getDichVuGrid(dataItem)\">\n                                <p kendoTooltip title=\"{{dataItem.TenDichVuKyThuatBenhVien}}\">\n                                    {{dataItem.TenDichVuKyThuatBenhVien}}</p>\n                            </a>\n                            <label *ngIf=\"khamSucKhoeDoan.IsKetThucHopDong\">\n                                {{dataItem.TenDichVuKyThuatBenhVien}}\n                            </label>\n                        </ng-template>\n\n                        <ng-template #donGiaBenhVienTemplate let-dataItem>\n                            {{dataItem.DonGiaBenhVien | number:'0.2-2':'vi-VN'}}\n                        </ng-template>\n                        <ng-template #donGiaUuDaiTemplate let-dataItem>\n                            {{dataItem.DonGiaUuDai | number:'0.2-2':'vi-VN'}}\n                        </ng-template>\n                        <ng-template #donGiaChuaUuDaiTemplate let-dataItem>\n                            {{dataItem.DonGiaChuaUuDai | number:'0.2-2':'vi-VN'}}\n                        </ng-template>\n\n                        <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n                            <strong>{{value}}</strong>\n                        </ng-template>\n\n                        <ng-template #soLanTemplate let-dataItem>\n                            <label *ngIf=\"!dataItem.LaDichVuKham\">\n                                {{dataItem.SoLan}}\n                            </label>\n                        </ng-template>\n\n                        <ng-template #actionTemplate let-dataItem>\n                            <div *ngIf=\"khamSucKhoeDoan.IsKetThucHopDong != true && !isUpdate\" class=\"text-center\"\n                                kendoTooltip>\n                                <button style=\"color: red;\" mat-icon-button kendoTooltip title=\"Xóa\"\n                                    (click)=\"xoaDichVu(dataItem)\" type=\"button\">\n                                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                                </button>\n                            </div>\n                        </ng-template>\n                    </div>\n                    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"form-footer mt-6\">\n                        <button style=\"margin-left: auto;\" type=\"button\" mat-stroked-button color=\"primary\"\n                            (click)=\"quayLai()\">Hủy</button>\n                        <button *ngIf=\"khamSucKhoeDoan.IsKetThucHopDong != true\" mat-raised-button mat-button\n                            color=\"primary\" (click)=\"Luu()\">Lưu</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-list/kham-doan-goi-kham-suc-khoe-list.component.html": 
        /*!*******************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-list/kham-doan-goi-kham-suc-khoe-list.component.html ***!
          \*******************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"\n                    [\n                        {Title:'Khám Đoàn',Path:''},\n                        {Title:'DS Gói Khám Sức Khỏe',Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <!-- [searchString]=\"timKiemObj.SearchString\" -->\n            <app-grid #grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [checkboxAble]=\"false\" [allowSortDefault]=\"false\"\n                [headerTemplate]=\"headerTemplate\" [showStt]=\"true\"\n                urlGetData=\"KhamDoan/GetDataForGridAsyncDanhSachKhamSucKhoeDoan\"\n                urlGetTotalPage=\"KhamDoan/GetTotalPageForGridAsyncDanhSachKhamSucKhoeDoan\">\n            </app-grid>\n\n\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar px-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <div class=\"bg-card rounded-full border px-4 ml-2\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"timKiemObj.SearchString\"\n                            (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\"\n                            placeholder=\"Nhập từ khóa...\" />\n                    </div>\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\"\n                        (click)=\"clearSearch()\">\n                        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                    </button>\n\n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"ml-auto\" fxFlex=\"none\" mat-icon-button\n                        kendoTooltip title=\"Lọc cột\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                    </button>\n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of _gridColumnsFilter\">\n                            <button class=\"checkbox-item mat-menu-item\" *ngIf=\"!column.HideFilter\">\n                                <mat-checkbox [disabled]=\"!column.HasFilter\" [(ngModel)]=\"_isCheckColumnFilter\"\n                                    color=\"primary\">\n                                    {{ column.Title }}\n                                </mat-checkbox>\n                            </button>\n                        </div>\n                    </mat-menu>\n\n                    <button class=\"ml-3\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Xuất Excel\" type=\"button\"\n                        (click)=\"xuLyXuatExcel()\">\n                        <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                    </button>\n\n                    <button (click)=\"showPopupChiTiet()\" class=\"ml-3 mr-6\" color=\"primary\" fxFlex=\"none\" mat-mini-fab\n                        kendoTooltip title=\"Thêm\" type=\"button\">\n                        <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                    </button>\n                </div>\n            </ng-template>\n\n            <ng-template #maGoiKhamTemplate let-dataItem>\n                <a (click)=\"showPopupChiTiet(dataItem.Id)\">\n                    <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.MaGoiKham}}\">{{dataItem.MaGoiKham}}</p>\n                </a>\n            </ng-template>\n\n            <ng-template #ngayHieuLucTemplate let-dataItem>\n                {{dataItem.NgayHieuLucDisplay}}\n            </ng-template>\n            <ng-template #ngayKetThucTemplate let-dataItem>\n                {{dataItem.NgayKetThucDisplay}}\n            </ng-template>\n\n            <ng-template #actionTemplate let-dataItem>\n                <div class=\"text-center\" kendoTooltip>\n                    <button color=\"primary\" mat-icon-button kendoTooltip title=\"Sao chép\" type=\"button\"\n                        (click)=\"showPopupChiTiet(dataItem.Id, true)\">\n                        <mat-icon [icIcon]=\"icCopy\"></mat-icon>\n                    </button>\n                    <button style=\"color: red;\" mat-icon-button kendoTooltip title=\"Xóa\" type=\"button\"\n                        (click)=\"xoa(dataItem.Id)\">\n                        <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                    </button>\n                </div>\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/danh-sach-phong-kham-cong-ty-popup/danh-sach-phong-kham-cong-ty-popup.component.html": 
        /*!*******************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/danh-sach-phong-kham-cong-ty-popup/danh-sach-phong-kham-cong-ty-popup.component.html ***!
          \*******************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">{{Title}}</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close [mat-dialog-close]=\"null\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"height: 300px;\">\n    <div width=\"100%\" fxLayout=\"row\">\n        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\" fxFlex=\"100%\">\n            <app-textbox maxlength=\"50\" [(model)]=\"danhSachPhongTaiCongTy.Ma\" class=\"mt-2\" fxFlex=\"50%\" fxFlex.sm=\"20%\"\n                required=\"true\" label=\"Mã phòng\" [validationerror]=\"'Ma' | validationerror:validationErrors\">\n            </app-textbox>\n            <app-textbox maxlength=\"250\" [(model)]=\"danhSachPhongTaiCongTy.Ten\" class=\"mt-2\" fxFlex=\"50%\"\n                fxFlex.sm=\"20%\" required=\"true\" label=\"Tên phòng\"\n                [validationerror]=\"'Ten' | validationerror:validationErrors\">\n            </app-textbox>\n            <app-textbox maxlength=\"20\" [(model)]=\"danhSachPhongTaiCongTy.Tang\" class=\"mt-2\" fxFlex=\"100%\"\n                fxFlex.sm=\"100%\" label=\"Ghi chú\" required=\"true\"\n                [validationerror]=\"'Tang' | validationerror:validationErrors\">\n            </app-textbox>\n            <app-multiselect id=\"dvkt\" fxFlex=\"auto\" popupSettings=\"null\" hierarchyKeyToListen=\"NhomDichVuBenhVienId\"\n                [modelText]=\"\" label=\"Danh sách nhân sự\" class=\"item-no-padding\"               \n                url=\"KhamDoan/GetListDanhSachNhanSuMultiSelect?hopDongKhamSucKhoeId={{hopDongKhamSucKhoeId}}\"\n                [(model)]=\"danhSachPhongTaiCongTy.DanhSachNhanSu\"\n                (modelChange)=\"changeMultiDanhSachNhanSu($event)\" [autoClose]=\"false\"\n                (closeChange)=\"closeChangeDanhSachNhanSu($event)\"\n                [validationerror]=\"'DichVuKyThuatBenhVienChiDinhs' | validationerror:validationErrors\">               \n            </app-multiselect>\n        </div>\n    </div>\n</mat-dialog-content>\n\n<mat-dialog-actions class=\"mt-4 pb-5\">\n    <button style=\"margin-left: auto;\" type=\"button\" mat-stroked-button color=\"primary\"\n        [mat-dialog-close]=\"null\">Hủy</button>\n    <button (click)=\"createOrUpdate()\" mat-raised-button mat-button color=\"primary\">Ok</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/goi-kham-suc-khoe-chon-file-popup/goi-kham-suc-khoe-chon-file-popup.component.html": 
        /*!*****************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/goi-kham-suc-khoe-chon-file-popup/goi-kham-suc-khoe-chon-file-popup.component.html ***!
          \*****************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">Nhập danh sách gói khám từ excel</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close [mat-dialog-close]=\"null\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"height: 80px;\">\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <app-upload id=\"upload\" #fileChuKy fxFlex=\"100%\" fxFlex.sm=\"100%\" [allowedExtensions]=\"allowedExtensions\"\n            [invalidFileExtensionMess]=\"invalidFileExtensionMess\" label=\"Chọn đường dẫn\" [(model)]=\"file\"\n            (uploadFileDone)=\"uploadFileDone($event)\" [required]=\"true\"\n            [validationerror]=\"'file' | validationerror:validationErrors\">\n        </app-upload>       \n    </div>\n</mat-dialog-content>\n<mat-dialog-actions class=\"mt-4 pb-5\">\n    <div class=\"sticky-button-action py-3 text-right\" kendoTooltip>\n        <div style=\"float: left;\">\n            <button (click)=\"TaiFileMau()\" type=\"button\" mat-button class=\"mr-2\">Tải file mẫu</button>\n        </div>\n    </div>\n    <button style=\"margin-left: auto;\" type=\"button\" mat-stroked-button color=\"primary\"\n        [mat-dialog-close]=\"null\">Hủy</button>\n    <button (click)=\"xuLyFile()\" mat-raised-button mat-button color=\"primary\">Ok</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-dv-goi-kham-popup/kham-doan-dv-goi-kham-popup.component.html": 
        /*!*****************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-dv-goi-kham-popup/kham-doan-dv-goi-kham-popup.component.html ***!
          \*****************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>{{title}}</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n    <app-grid *ngIf=\"laDichVuTrongGoi\" #gridDichVuChiTietTrongGoi masterName=\"gridDichVuChiTietTrongGoi\" fxFlex=\"100%\"\n        fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridColumns]=\"gridDichVuKhamDoanColumns\" [allowSortDefault]=\"false\"\n        [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n        [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" [groups]=\"groups\" maxHeight=\"500\" [pageable]=\"false\"\n        [additionalSearchString]=\"additionalSearchString\" [sort]=\"sort\" [showStt]=\"true\"\n        [removeGroupFooterIfIsOnlyOne]=\"true\" (extOnDataBound)=\"onDataBoundChild($event)\"\n        urlGetData=\"KhamDoan/GetDataForGridAsyncBangKeDichVuKhamDoanChiTiet\"\n        urlGetTotalPage=\"KhamDoan/GetTotalPageForGridAsyncBangKeDichVuKhamDoanChiTiet\">\n    </app-grid>\n\n    <app-grid *ngIf=\"!laDichVuTrongGoi\" #gridDichVuChiTietNgoaiGoi masterName=\"gridDichVuChiTietNgoaiGoi\" fxFlex=\"100%\"\n        fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridColumns]=\"gridDichVuKhamDoanColumns\" [allowSortDefault]=\"false\"\n        [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n        [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" [groups]=\"groups\" maxHeight=\"500\" [pageable]=\"false\"\n        [additionalSearchString]=\"additionalSearchString\" [sort]=\"sort\" [showStt]=\"true\"\n        [removeGroupFooterIfIsOnlyOne]=\"true\" (extOnDataBound)=\"onDataBoundChild($event)\"\n        urlGetData=\"KhamDoan/GetDataForGridAsyncBangKeDichVuKhamDoanChiTiet\"\n        urlGetTotalPage=\"KhamDoan/GetTotalPageForGridAsyncBangKeDichVuKhamDoanChiTiet\">\n    </app-grid>\n\n    <ng-template #donGiaTemplate let-dataItem>\n        {{dataItem.DonGiaUuDai | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n    <ng-template #thanhTienTemplate let-dataItem>\n        {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n    <ng-template #thanhTienFooterTemplate let-dataItem>\n        <p style=\"color: blue; font-weight: bold;\">\n            <span>{{totalThanhTien('ThanhTien') | number:'0.2-2':'vi-VN'}}</span>\n    </ng-template>\n    <ng-template #donGiaFooterTemplate>\n        <span style=\"float:right\">Tổng: </span>\n    </ng-template>\n    <ng-template #thanhTienGroupFooterTemplate let-aggregates>\n        {{aggregates.ThanhTien.sum | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n\n    <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n        <strong>{{value}}</strong>\n    </ng-template>\n\n    <ng-template #trangThaiTemplate let-dataItem>\n        <span *ngIf=\"dataItem.TrangThaiYeuCauKhamBenh != null && dataItem.LaDichVuKham\"\n            [ngStyle]=\"{'color': dataItem.TrangThaiYeuCauKhamBenh == 6 ? 'red' : (dataItem.TrangThaiYeuCauKhamBenh == 5 ? 'green' : (dataItem.TrangThaiYeuCauKhamBenh == 2 ? 'orange' : '')) }\">\n            {{dataItem.TrangThaiYeuCauKhamBenhDisplay}}</span>\n\n        <span *ngIf=\"dataItem.TrangThaiYeuCauDichVuKyThuat != null && !dataItem.LaDichVuKham\"\n            [ngStyle]=\"{'color': dataItem.TrangThaiYeuCauDichVuKyThuat == 4 ? 'red' : (dataItem.TrangThaiYeuCauDichVuKyThuat == 3 ? 'green' : (dataItem.TrangThaiYeuCauDichVuKyThuat == 2 ? 'orange' : '')) }\">\n            {{dataItem.TrangThaiYeuCauDichVuKyThuatDisplay}}</span>\n    </ng-template>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-dv-thong-ke-popup/kham-doan-dv-thong-ke-popup.component.html": 
        /*!*****************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-dv-thong-ke-popup/kham-doan-dv-thong-ke-popup.component.html ***!
          \*****************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n\n    <div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        <div>BẢNG KÊ DỊCH VỤ CỦA KHÁCH HÀNG KHÁM ĐOÀN</div>\n        <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n            <mat-icon [icIcon]=\"icClose\"></mat-icon>\n        </button>\n    </div>\n    <mat-dialog-content>\n        <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n                <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                <app-grid #gridDichVuKhamDoan masterName=\"gridDichVuKhamDoan\" fxFlex=\"100%\" style=\"width: 1px;\"\n                    [gridColumns]=\"gridDichVuKhamDoanColumns\" [documentType]=\"documentType\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [removeGroupFooterIfIsOnlyOne]=\"true\"\n                    (extOnDataBound)=\"onDataBoundChild($event)\" [checkboxAble]=\"false\" class=\"k-grid-border\"\n                    [additionalSearchString]=\"hopDongKhamSucKhoeId\" [sort]=\"sort\" [showStt]=\"true\" [lazyLoadPage]=\"true\"\n                    [pageable]=\"true\" heightToolbar=\"400\" urlGetData=\"KhamDoan/GetDataForGridAsyncBangKeDichVuKhamDoan\"\n                    urlGetTotalPage=\"KhamDoan/GetTotalPageForGridAsyncBangKeDichVuKhamDoan\">\n                </app-grid>\n\n                <ng-template #tongChiFooterTemplate>\n                    <span style=\"float:right\">Tổng :</span>\n                </ng-template>\n                <ng-template #tongChiTrongGoiTemplate let-dataItem>\n                    <div kendoTooltip>\n                        <a (click)=\"chiTietTrongGoi(dataItem.GoiKhamSucKhoeIds, dataItem.YeuCauTiepNhanId, dataItem.BenhNhanId)\">\n                            <p kendoTooltip>\n                                {{dataItem.TongChiPhiTrongGoi | number:'0.2-2':'vi-VN'}}\n                            </p>\n                        </a>\n                    </div>\n                </ng-template>\n\n                <ng-template #tongChiNgoaiGoiTemplate let-dataItem>\n                    <div kendoTooltip>\n                        <a *ngIf=\"dataItem.TongChiPhiNgoaiGoi != 0\"\n                            (click)=\"chiTietNgoaiGoi(dataItem.YeuCauTiepNhanId, dataItem.BenhNhanId)\">\n                            <p kendoTooltip>\n                                {{dataItem.TongChiPhiNgoaiGoi | number:'0.2-2':'vi-VN'}}\n                            </p>\n                        </a>\n                        <p *ngIf=\"dataItem.TongChiPhiNgoaiGoi == 0\">{{dataItem.TongChiPhiNgoaiGoi |\n                            number:'0.2-2':'vi-VN'}}\n                        </p>\n                    </div>\n                </ng-template>\n\n                <ng-template #tongChiTrongGoiFooterTemplate let-dataItem>\n                    <p style=\"color: blue; font-weight: bold;\">\n                        <span>{{totalTongChiPhi('TongChiPhiTrongGoi') | number:'0.2-2':'vi-VN'}}</span>\n                </ng-template>\n                <ng-template #tongChiTrongGoiGroupFooterTemplate let-aggregates>\n                    {{aggregates.TongChiPhiTrongGoi.sum | number:'0.2-2':'vi-VN'}}\n                </ng-template>\n\n                <ng-template #tongChiNgoaiGoiFooterTemplate let-dataItem>\n                    <p style=\"color: red; font-weight: bold;\">\n                        <span>{{totalTongChiPhi('TongChiPhiNgoaiGoi') | number:'0.2-2':'vi-VN'}}</span>\n                </ng-template>\n                <ng-template #tongChiNgoaiGoiGroupFooterTemplate let-aggregates>\n                    {{aggregates.TongChiPhiNgoaiGoi.sum | number:'0.2-2':'vi-VN'}}\n                </ng-template>\n            </div>\n        </vex-page-layout-content>\n    </mat-dialog-content>\n\n    <mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n        <button tabindex=\"-1\" type=\"button\" class=\"mr-2\" color=\"primary\" mat-raised-button\n            (click)=\"xuatExcel(true)\">Xuất\n            file excel trong gói</button>\n\n        <button [disabled]=\"!disabled\" tabindex=\"-1\" type=\"button\" class=\"mr-2\" color=\"primary\" mat-raised-button\n            (click)=\"xuatExcel(false)\">Xuất\n            file excel ngoài gói</button>\n    </mat-dialog-actions>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-chon-file-popup/kham-doan-hop-dong-kham-chon-file-popup.component.html": 
        /*!*****************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-chon-file-popup/kham-doan-hop-dong-kham-chon-file-popup.component.html ***!
          \*****************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">Nhập danh sách nhân viên từ excel</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close [mat-dialog-close]=\"null\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"height: 80px;\">\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <app-upload id=\"upload\" #fileChuKy fxFlex=\"100%\" fxFlex.sm=\"100%\"\n            [allowedExtensions]=\"allowedExtensions\" [invalidFileExtensionMess]=\"invalidFileExtensionMess\" \n            label=\"Chọn đường dẫn\" [(model)]=\"file\" [template]=\"template\" (uploadFileDone)=\"uploadFileDone($event)\"\n            [required]=\"true\"\n            [validationerror]=\"'file' | validationerror:validationErrors\">\n        </app-upload>\n    \n    <ng-template #template let-files>\n        <table width=\"100%\" class=\"table-combobox\">\n            <tr>\n                <td>\n                    <a *ngIf=\"files[0].error\" title=\"{{'Tải file bị lỗi: '+files[0].error}}\"\n                        (click)=\"fileChuKy.viewFile(files[0])\"\n                        class=\"custom-name red\">{{files[0].name}}</a>\n                    <a *ngIf=\"!files[0].error\" title=\"{{files[0].name}}\"\n                        (click)=\"fileChuKy.viewFile(files[0])\" class=\"green\"\n                        class=\"custom-name green\">{{files[0].name}}</a>\n                </td>\n                <td style=\"width:25px\">\n                    <a type=\"button\" (click)=\"fileChuKy.remove(files[0].uid)\" mat-icon-button>\n                        <mat-icon [icIcon]=\"icClear\"></mat-icon>\n                    </a>\n                </td>\n            </tr>\n        </table>\n    </ng-template>\n    </div>\n</mat-dialog-content>\n\n<mat-dialog-actions class=\"mt-4 pb-5\">\n    <div class=\"sticky-button-action py-3 text-right\" kendoTooltip>\n        <div style=\"float: left;\">\n            <button (click)=\"TaiFileMau()\" type=\"button\" mat-button class=\"mr-2\">Tải file mẫu</button>\n        </div>\n    </div>\n    <button style=\"margin-left: auto;\" type=\"button\" mat-stroked-button color=\"primary\"\n        [mat-dialog-close]=\"null\">Hủy</button>\n    <button (click)=\"xuLyFile()\" mat-raised-button mat-button color=\"primary\">Ok</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-detail-popup/kham-doan-hop-dong-kham-detail-popup.component.html": 
        /*!***********************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-detail-popup/kham-doan-hop-dong-kham-detail-popup.component.html ***!
          \***********************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[ {Title:'Khám Đoàn',Path:''}\n        ,{Title:'DS Hợp Đồng Khám Sức Khỏe', Path: '/kham-doan/hop-dong-kham', queryParams: {holdQuery : true}}\n        ,{Title: header,Path:'',Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContaine>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">{{title}}</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n                    [ngClass]=\"{'disableDiv': khamDoanHopDongKham.TrangThaiHopDongKham == 2}\">\n                    <app-combobox id=\"congTy\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Tên công ty\" [required]=\"true\"\n                        url=\"KhamDoan/GetCongTys\" [(model)]=\"khamDoanHopDongKham.CongTyKhamSucKhoeId\"\n                        [disabled]=\"id != 0\" [modelText]=\"khamDoanHopDongKham.TenCongTy\"\n                        [validationerror]=\"'CongTyKhamSucKhoeId' | validationerror:validationErrors\">\n                    </app-combobox>\n                    <app-textbox id=\"hopDong\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Số hợp đồng\" [required]=\"true\"\n                        [(model)]=\"khamDoanHopDongKham.SoHopDong\"\n                        [validationerror]=\"'SoHopDong' | validationerror:validationErrors\">\n                    </app-textbox>\n                    <app-datepicker id=\"NgayHopDong\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày hợp đồng\"\n                        [(model)]=\"khamDoanHopDongKham.NgayHopDong\" [required]=\"true\"\n                        [validationerror]=\"'NgayHopDong' | validationerror:validationErrors\">\n                    </app-datepicker>\n                    <app-dropdownlist id=\"loaiHopDong\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Loại hợp đồng\"\n                        url=\"KhamDoan/GetLoaiHopDongs\" [required]=\"true\" [(model)]=\"khamDoanHopDongKham.LoaiHopDong\"\n                        [modelText]=\"khamDoanHopDongKham.TenLoaiHopDong\" [bind]=\"true\"\n                        [validationerror]=\"'LoaiHopDong' | validationerror:validationErrors\">\n                    </app-dropdownlist>\n                    <app-dropdownlist [disabled]=\"true\" id=\"trangThai\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Trạng thái\"\n                        url=\"KhamDoan/GetTrangThaiHopDongs\" [required]=\"true\" [disabled]=\"id != 0\"\n                        [(model)]=\"khamDoanHopDongKham.TrangThaiHopDongKham\"\n                        [modelText]=\"khamDoanHopDongKham.TenTrangThaiHopDongKham\"\n                        [validationerror]=\"'TrangThaiHopDongKham' | validationerror:validationErrors\">\n                    </app-dropdownlist>\n                    <!-- [validationerror]=\"'SoNguoiKham' | validationerror:validationErrors\" -->\n                    <app-textboxnumeric id=\"soBenhNhan\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [max]=\"999999999\"\n                        label=\"Số người bệnh\" [disabled]=\"true\" [decimals]=\"0\" format=\"n0\"\n                        [(model)]=\"khamDoanHopDongKham.SoNguoiKham\">\n                    </app-textboxnumeric>\n                    <app-textboxnumeric id=\"giaTriHopDong\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [max]=\"999999999999\"\n                        label=\"Giá trị hợp đồng\" [decimals]=\"0\" [format]=\"format\" [required]=\"true\"\n                        [(model)]=\"khamDoanHopDongKham.GiaTriHopDong\"\n                        [validationerror]=\"'GiaTriHopDong' | validationerror:validationErrors\">\n                    </app-textboxnumeric>\n                    <app-textboxnumeric id=\"thanhToanPhatSinh\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [max]=\"999999999999\"\n                        [(model)]=\"khamDoanHopDongKham.ThanhToanPhatSinh\" label=\"Thanh toán phát sinh\" [decimals]=\"0\"\n                        [format]=\"format\">\n                    </app-textboxnumeric>\n                    <app-textboxnumeric id=\"chietKhau\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [max]=\"100\" label=\"Chiết khấu %\"\n                        [decimals]=\"0\" [format]=\"format\" [(model)]=\"khamDoanHopDongKham.TiLeChietKhau\">\n                    </app-textboxnumeric>\n                    <app-textboxnumeric id=\"soTienTamUng\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [max]=\"999999999999\"\n                        label=\"Số tiền tạm ứng\" [decimals]=\"0\" [format]=\"format\"\n                        [(model)]=\"khamDoanHopDongKham.SoTienTamUng\">\n                    </app-textboxnumeric>\n                    <app-textboxnumeric id=\"tienChietKhau\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [max]=\"999999999999\"\n                        label=\"Tiền chiết khấu\" [decimals]=\"0\" [format]=\"format\"\n                        [(model)]=\"khamDoanHopDongKham.SoTienChietKhau\">\n                    </app-textboxnumeric>\n                    <app-textboxnumeric id=\"soTienPhatSinhThucTe\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [max]=\"999999999999\"\n                        label=\"Số tiền phát sinh thực tế\" [decimals]=\"0\" [format]=\"format\"\n                        [(model)]=\"khamDoanHopDongKham.SoTienPhatSinhThucTe\">\n                    </app-textboxnumeric>\n                    <app-textboxnumeric id=\"tienChiChoNhanVien\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [max]=\"999999999999\"\n                        label=\"Tiền chi cho nhân viên\" [decimals]=\"0\" [format]=\"format\"\n                        [(model)]=\"khamDoanHopDongKham.SoTienChiChoNhanVien\">\n                    </app-textboxnumeric>\n                    <app-datepicker id=\"NgayHieuLuc\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày hiệu lực\"\n                        [(model)]=\"khamDoanHopDongKham.NgayHieuLuc\" [required]=\"true\"\n                        [validationerror]=\"'NgayHieuLuc' | validationerror:validationErrors\">\n                    </app-datepicker>\n                    <app-datepicker id=\"NgayKetThuc\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày kết thúc\"\n                        [(model)]=\"khamDoanHopDongKham.NgayKetThuc\" [required]=\"true\"\n                        [validationerror]=\"'NgayKetThuc' | validationerror:validationErrors\">\n                    </app-datepicker>\n                    <app-textbox id=\"tenNguoiKyHopDong\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Người ký hợp đồng\"\n                        [(model)]=\"khamDoanHopDongKham.NguoiKyHopDong\" [maxlength]=\"50\"\n                        [validationerror]=\"'NguoiKyHopDong' | validationerror:validationErrors\">\n                    </app-textbox>\n                    <app-textbox id=\"nguoiGioiThieu\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Người giới thiệu\"\n                        [(model)]=\"khamDoanHopDongKham.NguoiGioiThieu\" [maxlength]=\"50\">\n                    </app-textbox>\n                    <app-autocomplete id=\"chucDanhNguoiKy\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Chức danh người ký\"\n                        [(model)]=\"khamDoanHopDongKham.ChucDanhNguoiKy\" url=\"KhamDoan/GetChucDanhs\"\n                        label=\"Chức danh người ký\" [maxlength]=\"50\"\n                        [validationerror]=\"'ChucDanhNguoiKy' | validationerror:validationErrors\">\n                    </app-autocomplete>\n                    <app-textbox id=\"dienGiai\" fxFlex=\"40%\" fxFlex.sm=\"40%\" label=\"Diễn giải\" [maxlength]=\"50\"\n                        [(model)]=\"khamDoanHopDongKham.DienGiai\">\n                    </app-textbox>\n                    <!-- Danh sách địa điểm khám -->\n                    <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" masterName=\"diaDiemKham\"\n                        [gridColumns]=\"gridDiaDiemKhamColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                        class=\"k-grid-border\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                        [checkboxAble]=\"false\" [maxHeight]=\"200\" [lazyLoadPage]=\"true\"\n                        [gridDataSource]=\"dataSachDiaDiemKham\" style=\"width: 1px;\" [pageable]=\"false\">\n                    </app-grid>\n                    <ng-template #diaDiemKhamTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        <app-autocomplete id=\"diaDiem{{rowIndex}}\" [popupSettings]=\"null\" [required]=\"true\"\n                            [(model)]=\"dataItem.DiaDiem\" url=\"KhamDoan/GetDiaDiemKhamCongTyTonTais\"\n                            [queryInfo]=\"{ParameterDependencies:'{Id:' + khamDoanHopDongKham.CongTyKhamSucKhoeId +'}', Take: 50}\"\n                            [validationerror]=\"'HopDongKhamSucKhoeDiaDiems['+rowIndex+'].DiaDiem' | validationerror:validationErrors\"\n                            class=\"no-label item-no-padding\" label=\" \">\n                        </app-autocomplete>\n                    </ng-template>\n                    <ng-template #congViecKhamTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        <app-dropdownlist id=\"congViec{{rowIndex}}\" [popupSettings]=\"null\"\n                            url=\"KhamDoan/GetCongViecKhamDoans\" [required]=\"true\" [(model)]=\"dataItem.CongViecId\"\n                            [modelText]=\"dataItem.CongViec\" (selectionChange)=\"onChangeSetTenCongViec($event, rowIndex)\"\n                            [validationerror]=\"'HopDongKhamSucKhoeDiaDiems['+rowIndex+'].CongViecId' | validationerror:validationErrors\"\n                            class=\"no-label item-no-padding\" label=\" \">\n                        </app-dropdownlist>\n                    </ng-template>\n                    <ng-template #ngayKhamTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        <app-datepicker id=\"ngayKham{{rowIndex}}\" label=\" \" class=\"no-label\" [(model)]=\"dataItem.Ngay\"\n                            [required]=\"true\"\n                            [validationerror]=\"'HopDongKhamSucKhoeDiaDiems['+rowIndex+'].Ngay' | validationerror:validationErrors\">\n                        </app-datepicker>\n                    </ng-template>\n                    <ng-template #ghiChuKhamTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        <app-textarea id=\"ghiChu{{rowIndex}}\" maxlength=\"1000\" minHeight=\"21\" class=\"no-label\"\n                            [(model)]=\"dataItem.GhiChu\">\n                        </app-textarea>\n                    </ng-template>\n                    <ng-template #actionKhamTemplate let-dataItem>\n                        <div class=\"text-center\" kendoTooltip>\n                            <button style=\"color: red;\" (click)=\"xoaDiaDiemDanhSachKham(dataItem)\" mat-icon-button\n                                kendoTooltip title=\"Xóa\" type=\"button\">\n                                <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                            </button>\n                        </div>\n                    </ng-template>\n                    <ng-template #footerTemplate>\n                        <div class=\"text-right\" kendoTooltip>\n                            <button color=\"primary\" mat-mini-fab kendoTooltip title=\"Thêm\" type=\"button\"\n                                (click)=\"themDiaDiemDanhSachKham()\">\n                                <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                            </button>\n                        </div>\n                    </ng-template>\n                    <!-- Danh sách phòng khám tại công ty -->\n                    <ng-container *ngIf=\"this.id != undefined && this.id != 0\">\n                        <h3 style=\"display: flex;\" fxFlex=\"100%\" class=\"sub-title\">\n                            <div style=\"padding-top: 10px;\">Danh Sách Phòng Khám Công Ty</div>\n                            <button class=\"po-h\" color=\"primary\" kendoTooltip\n                                (click)=\"showPopupDanhSachPhongKhamCongTy(0)\"\n                                title=\"Thêm dánh sách phòng khám công ty\">\n                                <mat-icon [icIcon]=\"icAddCircle\"></mat-icon>\n                            </button>\n                        </h3>\n                        <app-grid #gridDanhSachNhanSuGrid fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\"\n                            [gridColumns]=\"gridDanhSachPhongKhamCongTyColumns\" [allowSortDefault]=\"true\"\n                            [documentType]=\"documentType\" [useAddDeault]=\"false\" [showStt]=\"true\"\n                            [useHeaderDefault]=\"false\" urlGetData=\"KhamDoan/GetDataDanhSachPhongKhamForGridAsync\"\n                            urlGetTotalPage=\"KhamDoan/GetTotalDanhSachPhongKhamPageForGridAsync\"\n                            [additionalSearchString]=\"id\" [showStt]=\"true\" [useActionDefault]=\"false\"\n                            [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\" [pageable]=\"false\">\n                        </app-grid>\n                    </ng-container>\n                    <ng-template #maPhongKhamTemplate let-dataItem>\n                        <a>\n                            <p kendoTooltip class=\"reverse-ellipsis l\"\n                                (click)=\"showPopupDanhSachPhongKhamCongTy(dataItem)\" title=\"{{dataItem.Ma}}\">\n                                {{dataItem.MaPhong}}</p>\n                        </a>\n                    </ng-template>\n                    <ng-template #actionKhamPhongKhamTemplate let-dataItem>\n                        <div class=\"text-center\" kendoTooltip>\n                            <button (click)=\"xoaPhongKhamTaiCongTy(dataItem.Id)\" style=\"color: red;\" mat-icon-button\n                                kendoTooltip title=\"Xóa\" type=\"button\">\n                                <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                            </button>\n                        </div>\n                    </ng-template>\n                    <!-- Trường hợp thêm xong chuyển qua edit cập nhật thêm thông tin -->\n                    <ng-container *ngIf=\"this.id != undefined && this.id != 0\">\n                        <h3 style=\"display: flex;\" fxFlex=\"100%\" class=\"sub-title\">\n                            <div style=\"padding-top: 10px;\">Danh Sách Gói Khám</div>\n                            <button class=\"po-h\" color=\"primary\" (click)=\"showPopupChiTietGoiKham(0)\" kendoTooltip\n                                title=\"Thêm gói khám\">\n                                <mat-icon [icIcon]=\"icAddCircle\"></mat-icon>\n                            </button>\n                            <button mat-raised-button mat-button class=\"po-h-tn\" (click)=\"NhapGoiKhamTuFileExcel()\">Nhập\n                                từ excel</button>\n                        </h3>\n\n                        <app-grid #gridGoiKhamSucKhoe fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\"\n                            [gridColumns]=\"gridGoiKhamColumns\" [allowSortDefault]=\"true\" [documentType]=\"documentType\"\n                            [useAddDeault]=\"false\" [showStt]=\"true\" [useHeaderDefault]=\"false\"\n                            urlGetData=\"KhamDoan/GetDataForGridAsyncDanhSachKhamSucKhoeDoan\"\n                            [additionalSearchString]=\"additiongStringDefault\"\n                            urlGetTotalPage=\"KhamDoan/GetTotalPageForGridAsyncDanhSachKhamSucKhoeDoan\"\n                            [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\"\n                            [pageable]=\"false\">\n                        </app-grid>\n\n                        <h3 style=\"display: flex;\" fxFlex=\"100%\" class=\"sub-title\">\n                            <div style=\"padding-top: 10px;\">Danh sách nhân viên</div>\n                            <button class=\"po-h\" color=\"primary\" (click)=\"showPopupThemNhanVien()\" kendoTooltip\n                                title=\"Thêm nhân viên\">\n                                <mat-icon [icIcon]=\"icAddCircle\"></mat-icon>\n                            </button>\n                            <button mat-raised-button mat-button class=\"po-h-tn\" (click)=\"NhapTuFileExcel()\">Nhập từ\n                                excel</button>\n                        </h3>\n                        <app-grid #nhanVienGrid fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\"\n                            [gridColumns]=\"gridNhanVienColumns\" [allowSortDefault]=\"true\" [documentType]=\"documentType\"\n                            [useAddDeault]=\"false\"  [useHeaderDefault]=\"true\" [useActionDefault]=\"false\"\n                            [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\" [pageable]=\"true\"\n                            [additionalSearchString]=\"id\" [sort]=\"sortNhanVien\"                    \n                            urlGetData=\"KhamDoan/GetDataDanhSachNhanVienCTyForGridAsync\"\n                            urlGetTotalPage=\"KhamDoan/GetTotalDanhSachNhanVienCTyPageForGridAsync\">\n                        </app-grid>\n                    </ng-container>\n                    <ng-template #maGoiKhamTemplate let-dataItem>\n                        <a (click)=\"showPopupChiTietGoiKham(dataItem.Id)\">\n                            <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.MaGoiKham}}\">\n                                {{dataItem.MaGoiKham}}</p>\n                        </a>\n                    </ng-template>\n\n                    <ng-template #actionGoiKhamTemplate let-dataItem>\n                        <div class=\"text-center\" kendoTooltip>\n                            <button (click)=\"xoaGoiKham(dataItem.Id)\" style=\"color: red;\" mat-icon-button kendoTooltip\n                                title=\"Xóa\" type=\"button\">\n                                <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                            </button>\n                        </div>\n                    </ng-template>\n                    <ng-template #hoTenTemplate let-dataItem>\n                        <a>\n                            <p kendoTooltip (click)=\"viewEditHopDongNVSK(dataItem.Id)\" title=\"{{dataItem.HoTen}}\">\n                                {{dataItem.HoTen}}</p>\n                        </a>\n                    </ng-template>\n                    <ng-template #actionNhanVienTemplate let-dataItem>\n                        <div class=\"text-center\" kendoTooltip>\n                            <button class=\"ml-2\" style=\"color: red;\" mat-icon-button kendoTooltip title=\"Xóa\"\n                                (click)=\"xoaHopDongKhamSucKhoeNhanVien(dataItem.Id)\" type=\"button\">\n                                <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                            </button>\n                        </div>\n                    </ng-template>\n\n                    <ng-template #maCongTyTemplate let-dataItem>\n                        <a>\n                            <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.MaCongTy}}\">\n                                {{dataItem.MaCongTy}}</p>\n                        </a>\n                    </ng-template>\n\n                    <ng-template #ngayHieuLucTemplate let-dataItem>\n                        {{dataItem.NgayHieuLucDisplay}}\n                    </ng-template>\n                    <ng-template #ngayKetThucTemplate let-dataItem>\n                        {{dataItem.NgayKetThucDisplay}}\n                    </ng-template>\n\n                    <ng-template #actionTemplate let-dataItem>\n                        <div class=\"text-center\" kendoTooltip>\n                            <button style=\"color: red;\" mat-icon-button kendoTooltip title=\"Xóa\" type=\"button\">\n                                <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                            </button>\n                        </div>\n                    </ng-template>\n\n                </div>\n                <div style=\"width: 100%; padding: 16px 0px 16px 0px; display: flex;\">\n                    <button\n                        *ngIf=\"this.id != undefined && this.id != 0 && khamDoanHopDongKham.TrangThaiHopDongKham == 1\"\n                        mat-raised-button mat-button (click)=\"ketThucHopDong()\"\n                        style=\"background-color: red; color: white\">Kết thúc hợp\n                        đồng</button>\n                    <button\n                        *ngIf=\"this.id != undefined && this.id != 0 && khamDoanHopDongKham.TrangThaiHopDongKham == 2\"\n                        mat-raised-button mat-button (click)=\"moLaiThucHopDong()\"\n                        style=\"background-color: red; color: white\">Mở lại hợp đồng</button>\n                    <button style=\"margin-left: 7px;\" *ngIf=\"this.id != undefined && this.id != 0\"\n                        [disabled]=\"!isDisabled\" color=\"primary\" mat-raised-button mat-button (click)=\"thongKe()\">Thống\n                        kê</button>\n                    <button style=\"margin-left: auto;\" type=\"button\" mat-stroked-button color=\"primary\"\n                        (click)=\"quayLai()\">Hủy</button>\n                    <button style=\"margin-left: 7px;\" *ngIf=\"khamDoanHopDongKham.TrangThaiHopDongKham == 1\"\n                        mat-raised-button mat-button color=\"primary\" (click)=\"xuLyLuu()\">Lưu</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-list-nhan-vien-popup/kham-doan-hop-dong-kham-list-nhan-vien-popup.component.html": 
        /*!***************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-list-nhan-vien-popup/kham-doan-hop-dong-kham-list-nhan-vien-popup.component.html ***!
          \***************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\" *ngIf=\"hopDongNhanVienKhamSucKhoeId == 0\">Thêm nhân viên công ty</div>\n    <div style=\"text-transform: uppercase;\" *ngIf=\"hopDongNhanVienKhamSucKhoeId != 0\">Cập nhật nhân viên công ty</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close [mat-dialog-close]=\"null\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <div fxFlex=\"grow\">\n            <button type=\"button\" mat-stroked-button color=\"primary\" (click)=\"showPopupTimNhanVien()\" tabindex=\"-1\">\n                <mat-icon [icIcon]=\"icSearch\"></mat-icon> Tìm\n            </button>\n        </div>\n        <app-textbox id=\"maBenhNhan\" fxFlex=\"10%\" fxFlex.sm=\"10%\" label=\"Mã NB\" [(model)]=\"danhSachNhanVienCongTy.MaBN\"\n            [maxlength]=\"20\" [disabled]=\"true\" [validationerror]=\"'MaBN' | validationerror:validationErrors\">\n        </app-textbox>\n\n        <app-textboxnumeric id=\"STTNhanVien\" fxFlex=\"10%\" fxFlex.sm=\"10%\" label=\"STT\" format=\"0\" min=\"1\" max=\"9999\"        \n            [(model)]=\"danhSachNhanVienCongTy.STTNhanVien\" [required]=\"true\"\n            [validationerror]=\"'STTNhanVien' | validationerror:validationErrors\">\n        </app-textboxnumeric>       \n\n        <app-textbox id=\"maNhanVien\" fxFlex=\"10%\" fxFlex.sm=\"10%\" label=\"Mã NV\"\n            [(model)]=\"danhSachNhanVienCongTy.MaNhanVien\" [maxlength]=\"20\"\n            [validationerror]=\"'MaNhanVien' | validationerror:validationErrors\">\n        </app-textbox>\n        <app-textbox [upperCase]=\"true\" id=\"hoTen\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Họ tên\"\n            [(model)]=\"danhSachNhanVienCongTy.HoTen\" [maxlength]=\"100\" [required]=\"true\"\n            [validationerror]=\"'HoTen' | validationerror:validationErrors\">\n        </app-textbox>\n        <app-textbox id=\"hoTenKhac\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Họ tên khác\"\n            [(model)]=\"danhSachNhanVienCongTy.HoTenKhac\" [maxlength]=\"100\">\n        </app-textbox>\n        <app-datepicker id=\"NgaySinh\" fxFlex=\"10%\" fxFlex.sm=\"10%\" label=\"Ngày sinh\" [required]=\"true\"\n            [(model)]=\"danhSachNhanVienCongTy.NgayThangNamSinh\" (modelChange)=\"ThongTinBenhNhanNgaySinhChange($event)\"\n            [validationerror]=\"'NgayThangNamSinh' | validationerror:validationErrors\">\n        </app-datepicker>\n        <app-textboxnumeric id=\"namSinh\" fxFlex=\"10%\" fxFlex.sm=\"10%\" label=\"Năm sinh\" format=\"0\" min=\"1\" max=\"9999\"\n            (modelChange)=\"ThongTinBenhNhanNamSinhChange($event)\"\n            [disabled]=\"danhSachNhanVienCongTy.NgayThangNamSinh!=null\" [(model)]=\"danhSachNhanVienCongTy.NamSinh\"\n            [validationerror]=\"'NamSinh' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n        <app-textboxnumeric id=\"tuoi\" fxFlex=\"10%\" fxFlex.sm=\"10%\" [max]=\"999\" label=\"Tuổi\" format=\"0\" min=\"1\" max=\"999\"\n            [disabled]=\"true\" [(model)]=\"danhSachNhanVienCongTy.Tuoi\">\n        </app-textboxnumeric>\n        <app-textboxmask id=\"NguoiLienHeSoDienThoai\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Số điện thoại\"\n            [(model)]=\"danhSachNhanVienCongTy.SoDienThoai\" mask=\"000 000 0000\" maxlength=\"12\">\n        </app-textboxmask>\n        <app-radio fxFlex=\"20%\" fxFlex.sm=\"20%\" id=\"gioiTinh\" [items]=\"[{Value:1,Text:'Nam'},{Value:2,Text:'Nữ'}]\"\n            [disabled]=\"danhSachNhanVienCongTy.CoMangThai\" label=\"Giới Tính\" [(model)]=\"danhSachNhanVienCongTy.GioiTinh\"\n            [required]=\"true\" [validationerror]=\"'GioiTinh' | validationerror:validationErrors\">\n        </app-radio>\n        <app-combobox id=\"ngheNghiep\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Nghề nghiệp\" bind=\"true\"\n            url=\"TiepNhanBenhNhan/GetNgheNghiep\" [(model)]=\"danhSachNhanVienCongTy.NgheNghiepId\">\n        </app-combobox>\n        <app-combobox id=\"quocTinh\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Quốc tịch\" bind=\"true\"\n            url=\"TiepNhanBenhNhan/GetQuocTich\" [(model)]=\"danhSachNhanVienCongTy.QuocTichId\">\n        </app-combobox>\n        <app-combobox id=\"danToc\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Dân tộc\" bind=\"true\"\n            url=\"TiepNhanBenhNhan/GetDanToc\" [(model)]=\"danhSachNhanVienCongTy.DanTocId\">\n        </app-combobox>\n\n        <app-textbox id=\"soCMTHC\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"số CMT/HC\" [required]=\"true\" [maxlength]=\"12\"\n            [(model)]=\"danhSachNhanVienCongTy.SoChungMinhThu\"\n            [validationerror]=\"'SoChungMinhThu' | validationerror:validationErrors\">\n        </app-textbox>\n        <app-datepicker id=\"NgayCapChungMinhThu\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày cấp\"\n            [(model)]=\"danhSachNhanVienCongTy.NgayCapChungMinhThu\"\n            [validationerror]=\"'NgayCapChungMinhThu' | validationerror:validationErrors\">\n        </app-datepicker>\n        <app-textbox id=\"NoiCapChungMinhThu\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Cấp tại\" [maxlength]=\"12\"\n            [(model)]=\"danhSachNhanVienCongTy.NoiCapChungMinhThu\"\n            [validationerror]=\"'NoiCapChungMinhThu' | validationerror:validationErrors\">\n        </app-textbox>\n        <app-textbox id=\"email\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Email\" [maxlength]=\"200\"\n            [(model)]=\"danhSachNhanVienCongTy.Email\">\n        </app-textbox>\n\n        <div fxFlex=\"100%\">\n            <div class=\"mt-1\">\n                <fieldset>\n                    <legend>Hộ khẩu thường trú</legend>\n                    <div fxFlex=\"100%\">\n                        <div class=\"mt-1\">\n                            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                fxLayoutGap.lt-sm=\"0\">\n                                <app-combobox id=\"HoKhauTinhThanh\" fxFlex=\"20%\" fxFlex.sm=\"100%\" bind=\"true\"\n                                    popupSettings=\"null\" label=\"Tỉnh/Thành Phố\" class=\"item-no-padding\"\n                                    [template]=\"tinhThanhTemplate\" [templateHeader]=\"tinhThanhHKTemplateHeader\"\n                                    [(model)]=\"danhSachNhanVienCongTy.HoKhauTinhThanhId\"\n                                    url=\"TiepNhanBenhNhan/GetTinhThanh/?quanHuyenId={{danhSachNhanVienCongTy.HoKhauQuanHuyenId}}\"\n                                    hierarchyKeyToSend=\"tinhThanhHoKhau\"\n                                    (modelChange)=\"TinhThanhPhoHoKhauChange($event)\">\n                                    <ng-template #tinhThanhHKTemplateHeader let-dataItem>\n                                        <table width=\"100%\" class=\"table-combobox\">\n                                            <tr>\n                                                <th width=\"20%\">Mã</th>\n                                                <th>Tên</th>\n                                            </tr>\n                                        </table>\n                                    </ng-template>\n                                    <ng-template #tinhThanhTemplate let-dataItem>\n                                        <table width=\"100%\" class=\"table-combobox\">\n                                            <tr>\n                                                <td width=\"20%\">{{dataItem.Ma}}</td>\n                                                <td>{{dataItem.Ten}}</td>\n                                            </tr>\n                                        </table>\n                                    </ng-template>\n                                </app-combobox>\n                                <app-combobox #comboboxQuanHuyenHoKhau id=\"HoKhauQuanHuyen\" fxFlex=\"20%\"\n                                    fxFlex.sm=\"100%\" label=\"Quận/Huyện\" bind=\"true\" popupSettings=\"null\"\n                                    class=\"item-no-padding\" [template]=\"quanHuyenTemplate\"\n                                    [templateHeader]=\"quanHuyenHKTemplateHeader\"\n                                    [(model)]=\"danhSachNhanVienCongTy.HoKhauQuanHuyenId\"\n                                    (modelChange)=\"QuanHuyenHoKhauChange($event)\"\n                                    url=\"TiepNhanBenhNhan/GetQuanHuyen/?phuongXaId={{danhSachNhanVienCongTy.HoKhauPhuongXaId}}\"\n                                    hierarchyKeyToListen=\"tinhThanhHoKhau\" hierarchyKeyToSend=\"quanHuyenHoKhau\">\n                                    <ng-template #quanHuyenHKTemplateHeader let-dataItem>\n                                        <table width=\"100%\" class=\"table-combobox\">\n                                            <tr>\n                                                <th width=\"20%\">Mã</th>\n                                                <th>Tên</th>\n                                            </tr>\n                                        </table>\n                                    </ng-template>\n                                    <ng-template #quanHuyenTemplate let-dataItem>\n                                        <table width=\"100%\" class=\"table-combobox\">\n                                            <tr>\n                                                <td width=\"20%\">{{dataItem.Ma}}</td>\n                                                <td>{{dataItem.Ten}}</td>\n                                            </tr>\n                                        </table>\n                                    </ng-template>\n                                </app-combobox>\n                                <app-combobox id=\"HoKhauPhuongXa\" fxFlex=\"20%\" fxFlex.sm=\"100%\" label=\"Phường/Xã\"\n                                    class=\"item-no-padding\" popupSettings=\"null\" #comboboxPhuongXaHoKhau\n                                    url=\"TiepNhanBenhNhan/GetPhuongXa\" hierarchyKeyToListen=\"quanHuyenHoKhau\"\n                                    [template]=\"phuongXaTemplate\" [templateHeader]=\"phuongXaHKTemplateHeader\"\n                                    [(model)]=\"danhSachNhanVienCongTy.HoKhauPhuongXaId\"\n                                    (modelChange)=\"PhuongXaHoKhauChange($event)\">\n                                    <ng-template #phuongXaHKTemplateHeader let-dataItem>\n                                        <table width=\"100%\" class=\"table-combobox\">\n                                            <tr>\n                                                <th width=\"20%\">Mã</th>\n                                                <th>Tên</th>\n                                            </tr>\n                                        </table>\n                                    </ng-template>\n                                    <ng-template #phuongXaTemplate let-dataItem>\n                                        <table width=\"100%\" class=\"table-combobox\">\n                                            <tr>\n                                                <td width=\"20%\">{{dataItem.Ma}}</td>\n                                                <td>{{dataItem.Ten}}</td>\n                                            </tr>\n                                        </table>\n                                    </ng-template>\n                                </app-combobox>\n                                <app-textbox id=\"soNha\" fxFlex=\"40%\" fxFlex.sm=\"100%\" label=\"Số nhà\" [maxlength]=\"200\"\n                                    [(model)]=\"danhSachNhanVienCongTy.HoKhauDiaChi\">\n                                </app-textbox>\n                            </div>\n                        </div>\n                    </div>\n                </fieldset>\n            </div>\n        </div>\n\n        <div fxFlex=\"100%\">\n            <div class=\"mt-1\">\n                <fieldset>\n                    <legend>Chỗ ở hiện tại</legend>\n                    <div fxFlex=\"100%\">\n                        <div class=\"mt-1\">\n                            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                fxLayoutGap.lt-sm=\"0\">\n                                <app-combobox id=\"TinhThanhPho\" fxFlex=\"20%\" fxFlex.sm=\"100%\" bind=\"true\"\n                                    popupSettings=\"null\" label=\"Tỉnh/Thành Phố\" class=\"item-no-padding\"\n                                    [template]=\"tinhThanhTemplate\" [templateHeader]=\"tinhThanhTemplateHeader\"\n                                    [(model)]=\"danhSachNhanVienCongTy.TinhThanhId\"\n                                    url=\"TiepNhanBenhNhan/GetTinhThanh/?quanHuyenId={{danhSachNhanVienCongTy.QuanHuyenId}}\"\n                                    hierarchyKeyToSend=\"tinhThanh\" (modelChange)=\"TinhThanhPhoChange($event)\">\n                                    <ng-template #tinhThanhTemplateHeader let-dataItem>\n                                        <table width=\"100%\" class=\"table-combobox\">\n                                            <tr>\n                                                <th width=\"20%\">Mã</th>\n                                                <th>Tên</th>\n                                            </tr>\n                                        </table>\n                                    </ng-template>\n                                    <ng-template #tinhThanhTemplate let-dataItem>\n                                        <table width=\"100%\" class=\"table-combobox\">\n                                            <tr>\n                                                <td width=\"20%\">{{dataItem.Ma}}</td>\n                                                <td>{{dataItem.Ten}}</td>\n                                            </tr>\n                                        </table>\n                                    </ng-template>\n                                </app-combobox>\n                                <app-combobox #comboboxQuanHuyen id=\"QuanHuyen\" fxFlex=\"20%\" fxFlex.sm=\"100%\"\n                                    label=\"Quận/Huyện\" bind=\"true\" popupSettings=\"null\" class=\"item-no-padding\"\n                                    [template]=\"quanHuyenTemplate\" [templateHeader]=\"quanHuyenTemplateHeader\"\n                                    [(model)]=\"danhSachNhanVienCongTy.QuanHuyenId\"\n                                    (modelChange)=\"QuanHuyenChange($event)\"\n                                    url=\"TiepNhanBenhNhan/GetQuanHuyen/?phuongXaId={{danhSachNhanVienCongTy.PhuongXaId}}\"\n                                    hierarchyKeyToListen=\"tinhThanh\" hierarchyKeyToSend=\"quanHuyen\">\n                                    <ng-template #quanHuyenTemplateHeader let-dataItem>\n                                        <table width=\"100%\" class=\"table-combobox\">\n                                            <tr>\n                                                <th width=\"20%\">Mã</th>\n                                                <th>Tên</th>\n                                            </tr>\n                                        </table>\n                                    </ng-template>\n                                    <ng-template #quanHuyenTemplate let-dataItem>\n                                        <table width=\"100%\" class=\"table-combobox\">\n                                            <tr>\n                                                <td width=\"20%\">{{dataItem.Ma}}</td>\n                                                <td>{{dataItem.Ten}}</td>\n                                            </tr>\n                                        </table>\n                                    </ng-template>\n                                </app-combobox>\n                                <app-combobox id=\"PhuongXa\" fxFlex=\"20%\" fxFlex.sm=\"100%\" label=\"Phường/Xã\"\n                                    class=\"item-no-padding\" popupSettings=\"null\" #comboboxPhuongXa\n                                    url=\"TiepNhanBenhNhan/GetPhuongXa\" hierarchyKeyToListen=\"quanHuyen\"\n                                    [template]=\"phuongXaTemplate\" [templateHeader]=\"phuongXaTemplateHeader\"\n                                    [(model)]=\"danhSachNhanVienCongTy.PhuongXaId\"\n                                    (modelChange)=\"PhuongXaChange($event)\">\n                                    <ng-template #phuongXaTemplateHeader let-dataItem>\n                                        <table width=\"100%\" class=\"table-combobox\">\n                                            <tr>\n                                                <th width=\"20%\">Mã</th>\n                                                <th>Tên</th>\n                                            </tr>\n                                        </table>\n                                    </ng-template>\n                                    <ng-template #phuongXaTemplate let-dataItem>\n                                        <table width=\"100%\" class=\"table-combobox\">\n                                            <tr>\n                                                <td width=\"20%\">{{dataItem.Ma}}</td>\n                                                <td>{{dataItem.Ten}}</td>\n                                            </tr>\n                                        </table>\n                                    </ng-template>\n                                </app-combobox>\n                                <app-textbox id=\"soNha\" fxFlex=\"40%\" fxFlex.sm=\"100%\" label=\"Số nhà\" [maxlength]=\"200\"\n                                    [(model)]=\"danhSachNhanVienCongTy.DiaChi\">\n                                </app-textbox>\n                            </div>\n                        </div>\n                    </div>\n                </fieldset>\n            </div>\n        </div>\n\n        <app-textbox id=\"tenDonViBP\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Tên đơn vị/BP\" [maxlength]=\"300\"\n            [(model)]=\"danhSachNhanVienCongTy.TenDonViHoacBoPhan\">\n        </app-textbox>\n        <app-datepicker id=\"NgayBatDauLamViec\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày bắt đầu làm việc\"\n            [(model)]=\"danhSachNhanVienCongTy.NgayBatDauLamViec\"\n            [validationerror]=\"'NgayBatDauLamViec' | validationerror:validationErrors\">\n        </app-datepicker>\n        <app-combobox id=\"nhomMau\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Nhóm máu\" url=\"NhapKhoMau/GetListNhomMau\"\n            [(model)]=\"danhSachNhanVienCongTy.NhomMau\" [(modelText)]=\"danhSachNhanVienCongTy.TenNhomMau\">\n        </app-combobox>\n        <app-combobox id=\"rh\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"RH\" url=\"NhapKhoMau/GetListYeuToRh\"\n            popupSettings=\"null\" [(model)]=\"danhSachNhanVienCongTy.YeuToRh\"\n            [(modelText)]=\"danhSachNhanVienCongTy.TenNhomMau\">\n        </app-combobox>\n        <app-dropdownlist id=\"honNhan\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Hôn nhân\" url=\"KhamDoan/GetTinhTrangHonNhans\"\n            popupSettings=\"null\" [(model)]=\"danhSachNhanVienCongTy.TinhTrangHonNhan\"\n            [(modelText)]=\"danhSachNhanVienCongTy.TenTinhTrangHonNhan\">\n        </app-dropdownlist>\n\n        <div fxFlex=\"20%\" fxFlex.sm=\"20%\">\n            <div class=\"container-custom no-label\">\n                <label>&nbsp;</label>\n                <div fxLayout=\"row\" fxLayoutGap=\"16px\">\n                    <app-checkbox fxFlex=\"100%\" value=\"true\" id=\"MangThai\" label=\"Mang thai\"\n                        (modelChange)=\"mangThai($event)\" [disabled]=\"danhSachNhanVienCongTy.GioiTinh == 1\"\n                        [(model)]=\"danhSachNhanVienCongTy.CoMangThai\"></app-checkbox>\n                </div>\n            </div>\n        </div>\n        <app-autocomplete id=\"nhomDTKSK\" fxFlex=\"20%\" fxFlex.sm=\"20%\" popupSettings=\"null\"\n            [(model)]=\"danhSachNhanVienCongTy.NhomDoiTuongKhamSucKhoe\" url=\"KhamDoan/GetListNhomDoiTuongKhamSucKhoe\"\n            label=\"Nhóm ĐT KSK\" maxlength=\"100\" [(modelText)]=\"danhSachNhanVienCongTy.NhomDoiTuongKhamSucKhoe\">\n        </app-autocomplete>\n        <app-combobox id=\"tenGoiKham\" popupSettings=\"null\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Tên gói khám\"\n            [required]=\"true\" [queryInfo]=\"{ParameterDependencies:'{Id:' + hopDongKhamSucKhoeId +'}', Take: 50}\"\n            [(model)]=\"danhSachNhanVienCongTy.GoiKhamSucKhoeId\" url=\"KhamDoan/GetGoiKhamTheoHopDongs\"\n            [(modelText)]=\"danhSachNhanVienCongTy.TenGoiKhamSucKhoe\" [disabled]=\"danhSachNhanVienCongTy.TinhTrangKham\"\n            [validationerror]=\"'GoiKhamSucKhoeId' | validationerror:validationErrors\">\n        </app-combobox>\n        <div fxFlex=\"100%\">\n            <div class=\"mt-1\">\n                <fieldset>\n                    <legend>Nghề, công việc trước đây (liệt kê các công việc đã làm trong vòng 10 năm gần đây, tính từ\n                        thời điểm gần nhất)</legend>\n                    <div fxFlex=\"100%\">\n                        <div class=\"mt-1\">\n                            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                fxLayoutGap.lt-sm=\"0\">\n                                <app-grid fxFlex=\"100%\" HideCheckAll=\"true\" [gridColumns]=\"gridCongViecColumns\"\n                                    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\"\n                                    [checkboxAble]=\"false\" [pageable]=\"false\" height=\"auto\"\n                                    [gridDataSource]=\"dataSourceCongViec\"></app-grid>\n                            </div>\n                            <ng-template #congViecTemplate let-dataItem>\n                                <app-textbox id=\"congviec\" [required]=\"true\" [maxlength]=\"4000\"\n                                    [(model)]=\"dataItem.CongViec\">\n                                </app-textbox>\n                            </ng-template>\n                            <ng-template #tuNgayTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <app-datepicker id=\"tungay\" [required]=\"true\" [(model)]=\"dataItem.TuNgay\"\n                                    [validationerror]=\"'NgheCongViecTruocDays['+rowIndex+'].TuNgay' | validationerror:validationErrors\">\n                                </app-datepicker>\n                            </ng-template>\n                            <ng-template #denNgayTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <app-datepicker id=\"denngay\" [required]=\"true\" [(model)]=\"dataItem.DenNgay\"\n                                    [validationerror]=\"'NgheCongViecTruocDays['+rowIndex+'].DenNgay' | validationerror:validationErrors\">\n                                </app-datepicker>\n                            </ng-template>\n                            <ng-template #actionTemplate let-dataItem>\n                                <div class=\"text-center\" kendoTooltip>\n                                    <button style=\"color: red;\" (click)=\"xoaCongViecTruocDo(dataItem)\" mat-icon-button\n                                        kendoTooltip title=\"Xóa\" type=\"button\">\n                                        <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                                    </button>\n                                </div>\n                            </ng-template>\n                            <ng-template #footerTemplate>\n                                <div class=\"text-right\" kendoTooltip>\n                                    <button color=\"primary\" mat-mini-fab kendoTooltip\n                                        title=\"Thêm nghề, công việc trước đây\" (click)=\"ThemCongViecTruocDo()\"\n                                        type=\"button\">\n                                        <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                                    </button>\n                                </div>\n                            </ng-template>\n                        </div>\n                    </div>\n                </fieldset>\n            </div>\n        </div>\n        <div fxFlex=\"100%\">\n            <div class=\"mt-1\">\n                <fieldset>\n                    <legend>Tiền sử bệnh</legend>\n                    <div fxFlex=\"100%\">\n                        <div class=\"mt-1\">\n                            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                fxLayoutGap.lt-sm=\"0\">\n                                <app-grid fxFlex=\"100%\" HideCheckAll=\"true\" [gridColumns]=\"gridTienSuBenhColumns\"\n                                    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\"\n                                    [checkboxAble]=\"false\" [pageable]=\"false\" height=\"auto\"\n                                    [gridDataSource]=\"dataSourceTienSuBenh\"></app-grid>\n                            </div>\n                            <ng-template #loaiTienSuBenhTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <app-combobox id=\"loaiTienSu\" popupSettings=\"null\" url=\"BenhNhan/GetLoaiTienSuBenh\"\n                                    [(model)]=\"dataItem.LoaiTienSuId\"\n                                    (selectionChange)=\"loaiTienSuBenhChange($event, rowIndex)\"\n                                    [modelText]=\"dataItem.LoaiTienSu\">\n                                </app-combobox>\n                            </ng-template>\n                            <ng-template #benhNgheNghiepTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <app-checkbox id=\"check-{{dataItem.Id}}\" (modelChange)=\"benhNgheNghiepChange(dataItem)\"\n                                    [(model)]=\"dataItem.BenhNgheNghiep\"></app-checkbox>\n                            </ng-template>\n                            <ng-template #tenBenhTemplate let-dataItem>\n                                <app-textbox *ngIf=\"!dataItem.BenhNgheNghiep\" id=\"tenBenh\" [required]=\"true\"\n                                    [maxlength]=\"50\" [(model)]=\"dataItem.TenBenh\">\n                                </app-textbox>\n                                <app-autocomplete *ngIf=\"dataItem.BenhNgheNghiep\" id=\"autoTenBenh\" popupSettings=\"null\"\n                                    [(model)]=\"dataItem.TenBenh\" url=\"KhamDoan/GetBenhNgheNghieps\" maxlength=\"100\">\n                                </app-autocomplete>\n                            </ng-template>\n\n                            <ng-template #phatHienNamTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <app-datepicker id=\"phathiennam\" [required]=\"true\" [(model)]=\"dataItem.PhatHienNam\"\n                                    [validationerror]=\"'TienSuBenhs['+rowIndex+'].PhatHienNam' | validationerror:validationErrors\">\n                                </app-datepicker>\n                            </ng-template>\n\n                            <ng-template #actionTienSuBenhTemplate let-dataItem>\n                                <div class=\"text-center\" kendoTooltip>\n                                    <button style=\"color: red;\" (click)=\"xoaTienSuBenh(dataItem)\" mat-icon-button\n                                        kendoTooltip title=\"Xóa\" type=\"button\">\n                                        <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                                    </button>\n                                </div>\n                            </ng-template>\n                            <ng-template #footerTienSuBenhTemplate>\n                                <div class=\"text-right\" kendoTooltip>\n                                    <button color=\"primary\" mat-mini-fab kendoTooltip title=\"Thêm tiền sử bệnh\"\n                                        (click)=\"ThemTienSuBenh()\" type=\"button\">\n                                        <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                                    </button>\n                                </div>\n                            </ng-template>\n                        </div>\n                    </div>\n                </fieldset>\n            </div>\n        </div>\n        <app-textbox id=\"GhiChuDiUngThuoc\" fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Tiền sử dị ứng\" [maxlength]=\"300\"\n            [(model)]=\"danhSachNhanVienCongTy.GhiChuDiUngThuoc\">\n        </app-textbox>\n    </div>\n</mat-dialog-content>\n\n<mat-dialog-actions class=\"mt-4 pb-5\">\n    <button style=\"margin-left: auto;\" type=\"button\" mat-stroked-button color=\"primary\"\n        [mat-dialog-close]=\"null\">Hủy</button>\n    <button mat-raised-button mat-button color=\"primary\" *ngIf=\"hopDongNhanVienKhamSucKhoeId== 0\"\n        (click)=\"xuLyLuuNhanVienCongTy()\">Thêm</button>\n    <button mat-raised-button mat-button color=\"primary\" *ngIf=\"hopDongNhanVienKhamSucKhoeId != 0\"\n        (click)=\"xuLyLuuNhanVienCongTy()\">Lưu</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-list/kham-doan-hop-dong-kham-list.component.html": 
        /*!*******************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-list/kham-doan-hop-dong-kham-list.component.html ***!
          \*******************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"\n                    [\n                        {Title:'Khám Đoàn',Path:''},\n                        {Title:'DS Hợp Đồng Khám Sức Khỏe',Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n                <app-grid #gridParent [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                    [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [checkboxAble]=\"false\" [allowSortDefault]=\"false\" \n                    urlGetData=\"KhamDoan/GetDataDanhSachHopDongKhamForGridAsync\"\n                    [sort]=\"sortHopDongKham\"\n                    urlGetTotalPage=\"KhamDoan/GetTotalDanhSachHopDongKhamPageForGridAsync\"\n                    [headerTemplate]=\"headerTemplate\" [searchString]=\"timKiemObj.SearchString\" [showStt]=\"true\">\n                </app-grid>              \n                <ng-template #headerTemplate>\n                    <div class=\"bg-app-bar px-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <div class=\"bg-card rounded-full border px-4 ml-2\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                            fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                            <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                            <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\"\n                                name=\"searchString\" [(ngModel)]=\"timKiemObj.SearchString\" (keyup)=\"onKey($event)\"\n                                (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n                        </div>\n                        <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                            <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                        </button>\n\n                        <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"ml-auto\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Lọc cột\" type=\"button\">\n                            <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                        </button>\n                        <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                            <div *ngFor=\"let column of _gridColumnsFilter\">\n                                <button class=\"checkbox-item mat-menu-item\" *ngIf=\"!column.HideFilter\">\n                                    <mat-checkbox [disabled]=\"!column.HasFilter\" [(ngModel)]=\"_isCheckColumnFilter\" color=\"primary\">\n                                        {{ column.Title }}\n                                    </mat-checkbox>\n                                </button>\n                            </div>\n                        </mat-menu>\n\n                        <button class=\"ml-3\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Xuất Excel\" type=\"button\" \n                            (click)=\"xuLyXuatExcel()\">\n                            <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                        </button>\n\n                        <button (click)=\"showPopupChiTiet()\" class=\"ml-3 mr-6\" color=\"primary\" fxFlex=\"none\" mat-mini-fab kendoTooltip title=\"Thêm\" type=\"button\">\n                            <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                        </button>\n                    </div>\n                </ng-template>\n        \n                <ng-template #maHopDongTemplate let-dataItem>\n                    <a (click)=\"showPopupChiTiet(dataItem.Id)\"><p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.MaHopDong}}\">{{dataItem.SoHopDong}}</p></a>\n                </ng-template>\n\n                <ng-template #ngayHopDongTemplate let-dataItem>\n                    {{dataItem.NgayHopDongDisplay}}\n                </ng-template>\n                <ng-template #trangThaiTemplate let-dataItem>\n                    <div style=\"position: relative;\">\n                        <span [ngClass]=\"{'orangeText': dataItem.TrangThai === 2,\n                                'greenText': dataItem.TrangThai === 1}\">\n                            {{dataItem.TenTrangThai}}\n                        </span>\n                    </div>\n                </ng-template>\n\n                <ng-template #actionTemplate let-dataItem>\n                    <div class=\"text-center\" kendoTooltip >                    \n                        <button class=\"ml-2\" style=\"color: red;\" mat-icon-button kendoTooltip title=\"Xóa\" type=\"button\" (click)=\"xoa(dataItem.Id)\">\n                            <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                        </button>\n                    </div>\n                </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-tim-nhan-vien-popup/kham-doan-hop-dong-kham-tim-nhan-vien-popup.component.html": 
        /*!*************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-tim-nhan-vien-popup/kham-doan-hop-dong-kham-tim-nhan-vien-popup.component.html ***!
          \*************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"m-0\">\n    <div>TÌM KIẾM NGƯỜI BỆNH</div>\n    <button type=\"button\" mat-icon-button (click)=\"close(null)\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\"\n        [useHeaderDefault]=\"false\" #grid [useActionDefault]=\"false\" [checkboxAble]=\"false\" height=\"511\"\n        [sort]=\"sort\"\n        [headerTemplate]=\"headerTemplate\" [urlGetData]=\"urlGetDataGrid\" [urlGetTotalPage]=\"urlGetTotalPageGrid\"\n        [additionalSearchString]=\"queryStrings\">\n    </app-grid>\n</mat-dialog-content>\n\n<ng-template #actionTemplate let-dataItem>\n    <button class=\"button-chon\" (click)=\"chonBenhNhan(dataItem)\" color=\"primary\" mat-raised-button>\n        Chọn\n    </button>\n</ng-template>\n\n<ng-template #headerTemplate>\n    <div style=\"padding: 10px;border-bottom: 1px solid #ccc;\">\n        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n            <app-textbox fxFlex=\"10%\" [(model)]=\"timKiemBenhNhanSearch.MaBenhNhan\" id=\"MaBenhNhan\" label=\"Mã NB\"\n                (keyup)=\"onKey($event)\">\n            </app-textbox>\n            <app-textbox fxFlex=\"12%\" [(model)]=\"timKiemBenhNhanSearch.MaBHYT\" id=\"MaBHYT\" label=\"Mã BHYT\"\n                (keyup)=\"onKey($event)\">\n            </app-textbox>\n            <app-textbox fxFlex=\"15%\" [(model)]=\"timKiemBenhNhanSearch.HoTen\" id=\"HoTen\" label=\"Họ và tên\"  [upperCase]=\"true\"\n                (keyup)=\"onKey($event)\">\n            </app-textbox>\n            <app-datepicker fxFlex=\"11%\" [(model)]=\"timKiemBenhNhanSearch.NgaySinhFormat\" id=\"NgaySinhFormat\"\n                label=\"Ngày sinh\" (keyup)=\"onKey($event)\">\n            </app-datepicker>\n            <app-textbox fxFlex=\"12%\" [(model)]=\"timKiemBenhNhanSearch.CMND\" id=\"CMND\" label=\"CMND\"\n                (keyup)=\"onKey($event)\">\n            </app-textbox>\n            <app-textboxmask fxFlex=\"10%\" [(model)]=\"timKiemBenhNhanSearch.DienThoai\" id=\"DienThoai\" label=\"Điện thoại\"\n                (keyup)=\"onKey($event)\" mask=\"000 000 0000\">\n            </app-textboxmask>\n            <app-textbox fxFlex=\"20%\" [(model)]=\"timKiemBenhNhanSearch.DiaChi\" id=\"DiaChi\" label=\"Địa chỉ\"\n                (keyup)=\"onKey($event)\">\n            </app-textbox>\n            <div fxFlex=\"5%\">\n                <button type=\"button\" color=\"primary\" (keyup)=\"onKey($event)\" (click)=\"TimKiem()\" mat-raised-button\n                    class=\"mt-5\">\n                    Tìm</button>\n            </div>\n        </div>\n    </div>\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/mo-lai-hop-dong-kham-popup/mo-lai-hop-dong-kham-popup.component.html": 
        /*!***************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/mo-lai-hop-dong-kham-popup/mo-lai-hop-dong-kham-popup.component.html ***!
          \***************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>{{Title}}</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content style=\"overflow:unset !important\">\n    <div [innerHtml]=\"Message\"></div>\n    <app-textarea class=\"mt-3\" id=\"lyDo\" label=\"Lý do mở lại hợp đồng\" \n        [(model)]=\"lyDoMoLaiHopDong\" maxlength=\"1000\"\n        minHeight=\"60\">\n    </app-textarea>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\" class=\"mt-3\">\n    <button mat-button (click)=\"close('No')\">{{ButtonNo}}</button>\n    <button *ngIf=\"lyDoMoLaiHopDong !== undefined && lyDoMoLaiHopDong !== null && lyDoMoLaiHopDong !== ''\" mat-raised-button color=\"primary\" (click)=\"close('Yes')\">{{ButtonYes}}</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/thong-tin-goi-kham-popup/thong-tin-goi-kham-popup.component.html": 
        /*!***********************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/thong-tin-goi-kham-popup/thong-tin-goi-kham-popup.component.html ***!
          \***********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">Thông tin gói khám</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close [mat-dialog-close]=\"null\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content [ngClass]=\"ThongTinGoiKhamError[0].Error == null ? 'thanhcong' :'thatbai'\">\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"0 grid\" fxLayoutGap.lt-sm=\"0\">\n        <fieldset fxFlex=\"100%\" class=\"mb-3\">\n            <legend>Thông tin gói khám nhập đúng </legend>\n             Bạn thêm được: <strong style=\"color: green;\">{{total}} gói khám thành công</strong>\n        </fieldset>\n        <fieldset *ngIf=\"ThongTinGoiKhamError[0].Error != null\">\n            <legend>Thông tin gói khám nhập sai </legend>\n            <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" HideCheckAll=\"true\"\n                [gridColumns]=\"gridDanhSachNhanVienErrorColumns\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                [lazyLoadPage]=\"true\" [checkboxAble]=\"false\" [pageable]=\"false\" height=\"auto\"\n                [gridDataSource]=\"dataSourceDanhSachGoiKham\">\n            </app-grid>\n        </fieldset>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions class=\"mt-4 pb-5\">    \n    <button style=\"margin-left: auto;\" type=\"button\" mat-stroked-button color=\"primary\"\n        [mat-dialog-close]=\"null\">Hủy</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/thong-tin-ket-thuc-hop-popup/thong-tin-ket-thuc-hop-popup.component.html": 
        /*!*******************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/thong-tin-ket-thuc-hop-popup/thong-tin-ket-thuc-hop-popup.component.html ***!
          \*******************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">Xác Nhận</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close [mat-dialog-close]=\"null\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"0 grid\" fxLayoutGap.lt-sm=\"0\">\n        <fieldset *ngIf=\"KiemTraHopDongNhanVienChuaKham.length === 0\" style=\"padding: 0px;width: 100%;\">\n            <strong>Không có nhân viên trong hợp đồng này</strong>\n        </fieldset>\n\n        <fieldset *ngIf=\"KiemTraHopDongNhanVienChuaKham != null && dataChuaKham != null && dataChuaKham.length != 0\"\n            style=\"padding: 0px;width: 100%;\">\n            <legend>*Hiện tại còn {{dataChuaKham.length}} nhân viên chưa khám:*</legend>\n            <div class=\"mt-2\" *ngFor=\"let item of dataChuaKham\">\n                <ul class=\"inline\">\n                    <li>\n                        + Tên nhân viên:\n                        <strong>{{item.TenNhanVien}}</strong>\n                    </li>\n                    <li>\n                        Mã NV:\n                        <strong>{{item.MaNhanVien}}</strong>\n                    </li>\n                    <li>\n                        Ngày sinh:\n                        <strong>{{item.NgaySinh}}</strong>\n                    </li>\n                    <li>\n                        Giới tính:\n                        <strong>{{item.GioiTinh}}</strong>\n                    </li>\n                </ul>\n            </div>\n        </fieldset>\n\n        <div *ngIf=\"KiemTraHopDongNhanVienChuaKham != null && dataChuaKham != null && dataChuaKham.length != 0\"\n            style=\"margin-top: 10px;font-size: 16px;\">\n            <strong>Nếu kết thúc thì sẽ hủy khám những nhân viên này. Bạn có chắc chắn muốn kết thúc không?</strong>\n        </div>\n\n        <fieldset *ngIf=\"KiemTraHopDongNhanVienChuaKham != null && dataDaKham != null && dataDaKham.length != 0\"\n            style=\"padding: 0px;width: 100%;\">\n            <legend>*Hiện tại còn {{dataDaKham.length}} nhân viên đang khám:*</legend>\n            <div class=\"mt-2\" *ngFor=\"let item of dataDaKham\">\n                <ul class=\"inline\">\n                    <li>\n                        + Tên nhân viên:\n                        <strong>{{item.TenNhanVien}}</strong>\n                    </li>\n                    <li>\n                        Mã NV:\n                        <strong>{{item.MaNhanVien}}</strong>\n                    </li>\n                    <li>\n                        Ngày sinh:\n                        <strong>{{item.NgaySinh}}</strong>\n                    </li>\n                    <li>\n                        Giới tính:\n                        <strong>{{item.GioiTinh}}</strong>\n                    </li>\n                </ul>\n            </div>\n        </fieldset>\n\n        <div *ngIf=\"KiemTraHopDongNhanVienChuaKham != null && dataDaKham != null && dataDaKham.length != 0\"\n            style=\"margin-top: 10px;font-size: 16px;\">\n            <strong>Những nhân viên còn đang khám phải hoàn thành thì mới được kết thúc hợp đồng.</strong>\n        </div>\n\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n\t<button *ngIf=\"dataDaKham != undefined && dataDaKham != null && dataDaKham.length === 0\" mat-button mat-dialog-close>Không</button> \n    <button  type=\"button\" mat-stroked-button color=\"primary\" (click)=\"KetThucHopDongKham()\">Có</button>  \n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/thong-tin-nhan-vien-popup/thong-tin-nhan-vien-popup.component.html": 
        /*!*************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/thong-tin-nhan-vien-popup/thong-tin-nhan-vien-popup.component.html ***!
          \*************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">Thông tin nhân viên</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close [mat-dialog-close]=\"null\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content [ngClass]=\"ThongTinNhanVienError[0].Error == null ? 'thanhcong' :'thatbai'\">\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"0 grid\" fxLayoutGap.lt-sm=\"0\">\n        <fieldset fxFlex=\"100%\" class=\"mb-3\">\n            <legend>Thông tin nhân viên nhập đúng </legend>\n             Bạn thêm được: <strong style=\"color: green;\">{{total}} nhân viên thành công</strong>\n        </fieldset>\n        <fieldset *ngIf=\"ThongTinNhanVienError[0].Error != null\">\n            <legend>Thông tin nhân viên nhập sai </legend>\n            <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" HideCheckAll=\"true\"\n                [gridColumns]=\"gridDanhSachNhanVienErrorColumns\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                [lazyLoadPage]=\"true\" [checkboxAble]=\"false\" [pageable]=\"false\" height=\"auto\"\n                [gridDataSource]=\"dataSourceDanhSachNhanVien\">\n            </app-grid>\n        </fieldset>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions class=\"mt-4 pb-5\">    \n    <button style=\"margin-left: auto;\" type=\"button\" mat-stroked-button color=\"primary\"\n        [mat-dialog-close]=\"null\">Hủy</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-popup/kham-doan-goi-kham-popup.component.scss": 
        /*!*************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-popup/kham-doan-goi-kham-popup.component.scss ***!
          \*************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWdvaS1raGFtLXN1Yy1raG9lL2toYW0tZG9hbi1nb2kta2hhbS1wb3B1cC9raGFtLWRvYW4tZ29pLWtoYW0tcG9wdXAuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-popup/kham-doan-goi-kham-popup.component.ts": 
        /*!***********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-popup/kham-doan-goi-kham-popup.component.ts ***!
          \***********************************************************************************************************************************/
        /*! exports provided: GoiKhamViewPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoiKhamViewPopupComponent", function () { return GoiKhamViewPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-clear */ "./node_modules/@iconify/icons-ic/twotone-clear.js");
            /* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4__);
            var GoiKhamViewPopupComponent = /** @class */ (function () {
                function GoiKhamViewPopupComponent(data, dialogRef) {
                    this.data = data;
                    this.dialogRef = dialogRef;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.icClear = _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.chonGoiKham = true;
                    this.isCreatedHopDongKhamSucKhoe = true;
                }
                GoiKhamViewPopupComponent.prototype.ngOnInit = function () {
                    if (this.data.khamDoanHopDongKham !== undefined && this.data.khamDoanHopDongKham != null) {
                        this.isCreatedHopDongKhamSucKhoe = this.data.khamDoanHopDongKham.IsCreatedHopDongKhamSucKhoe;
                        if (this.isCreatedHopDongKhamSucKhoe === false) {
                            this.chonGoiKham = false;
                        }
                        this.dataKhamDoan = {
                            CongTyKhamSucKhoeId: this.data.khamDoanHopDongKham.CongTyKhamSucKhoeId,
                            HopDongKhamSucKhoeId: this.data.khamDoanHopDongKham.HopDongKhamSucKhoeId,
                            TenCongTyKhamSucKhoe: this.data.khamDoanHopDongKham.TenCongTyKhamSucKhoe,
                            TenHopDongKhamSucKhoe: this.data.khamDoanHopDongKham.TenHopDongKhamSucKhoe,
                            NgayHieuLuc: this.data.khamDoanHopDongKham.NgayHieuLuc,
                            NgayKetThuc: this.data.khamDoanHopDongKham.NgayKetThuc,
                            GoiKhamId: this.data.khamDoanHopDongKham.GoiKhamId,
                            LaHopDongKhamSucKhoe: this.data.khamDoanHopDongKham.LaHopDongKhamSucKhoe,
                            IsCreatedHopDongKhamSucKhoe: this.data.khamDoanHopDongKham.IsCreatedHopDongKhamSucKhoe,
                        };
                    }
                };
                GoiKhamViewPopupComponent.prototype.afterChangedFromHopDongKham = function (ev) {
                    this.dialogRef.close("Yes");
                };
                return GoiKhamViewPopupComponent;
            }());
            GoiKhamViewPopupComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
            ]; };
            GoiKhamViewPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'kham-doan-goi-kham-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-goi-kham-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-popup/kham-doan-goi-kham-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-goi-kham-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-popup/kham-doan-goi-kham-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], GoiKhamViewPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-chung/kham-doan-goi-kham-suc-chung.component.scss": 
        /*!*********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-chung/kham-doan-goi-kham-suc-chung.component.scss ***!
          \*********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWdvaS1raGFtLXN1Yy1raG9lL2toYW0tZG9hbi1nb2kta2hhbS1zdWMtY2h1bmcva2hhbS1kb2FuLWdvaS1raGFtLXN1Yy1jaHVuZy5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-chung/kham-doan-goi-kham-suc-chung.component.ts": 
        /*!*******************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-chung/kham-doan-goi-kham-suc-chung.component.ts ***!
          \*******************************************************************************************************************************************/
        /*! exports provided: KhamDoanGoiKhamSucKhoeChungComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanGoiKhamSucKhoeChungComponent", function () { return KhamDoanGoiKhamSucKhoeChungComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11__);
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _kham_doan_goi_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../kham-doan-goi-kham-suc-khoe.model */ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe.model.ts");
            /* harmony import */ var src_app_shared_component_dropdowns_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/component/dropdowns/multiselect/multiselect.component */ "./src/app/shared/component/dropdowns/multiselect/multiselect.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dropdowns_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/component/dropdowns/combobox/combobox.component */ "./src/app/shared/component/dropdowns/combobox/combobox.component.ts");
            var KhamDoanGoiKhamSucKhoeChungComponent = /** @class */ (function () {
                function KhamDoanGoiKhamSucKhoeChungComponent(authService, dialog, notificationService, apiService, location, ref, router, route) {
                    this.authService = authService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.location = location;
                    this.ref = ref;
                    this.router = router;
                    this.route = route;
                    this.afterChangedFromHopDongKham = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.khamSucKhoeDoan = new _kham_doan_goi_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_14__["KhamSucKhoeDoanChungViewModel"]();
                    this.dichVuKhamSucKhoeDoan = new _kham_doan_goi_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_14__["DichVuKhamSucKhoeDoanViewModel"]();
                    this.goiKhamChungViewModel = new _kham_doan_goi_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_14__["GoiKhamChungViewModel"]();
                    this.keyIdStringGoiDichVuKhamSucKhoeVo = new _kham_doan_goi_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_14__["KeyIdStringGoiDichVuKhamSucKhoeVo"]();
                    this.lstDichVuKhamSucKhoeDoanGrid = [];
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
                KhamDoanGoiKhamSucKhoeChungComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].KhamDoanGoiKhamSucKhoe;
                    this.id = (this.id === undefined || this.id === null) ? 0 : this.id;
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
                };
                KhamDoanGoiKhamSucKhoeChungComponent.prototype.showPopupLoadingData = function () {
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
                };
                KhamDoanGoiKhamSucKhoeChungComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                KhamDoanGoiKhamSucKhoeChungComponent.prototype.showPopupSavingData = function () {
                    this.popupSavingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang lưu dữ liệu..." },
                    });
                };
                KhamDoanGoiKhamSucKhoeChungComponent.prototype.closePopupSavingData = function () {
                    if (this.popupSavingData != undefined && this.popupSavingData != null) {
                        this.popupSavingData.close();
                    }
                };
                KhamDoanGoiKhamSucKhoeChungComponent.prototype.goiKhamChungChange = function (event) {
                    if (event != undefined && event != null) {
                        this.chonGoiKhamChung(event);
                    }
                };
                KhamDoanGoiKhamSucKhoeChungComponent.prototype.chonGoiKhamChung = function (id) {
                    var _this = this;
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].View)) {
                        // self.showPopupLoadingData();
                        self.apiService.get("KhamDoan/GetGoiKhamSucKhoeDoanChung?id=" + id).subscribe(function (resultData) {
                            if (resultData != undefined && resultData != null) {
                                resultData.GoiKhamSucKhoeDichVuDichVuKyThuats = [];
                                resultData.GoiKhamSucKhoeDichVuKhamBenhs = [];
                                self.khamSucKhoeDoan = resultData;
                                _this.lstDichVuKhamSucKhoeDoanGrid = [];
                                resultData.DichVuKhamSucKhoeDoans.forEach(function (element) {
                                    _this.lstDichVuKhamSucKhoeDoanGrid.push(element);
                                });
                                _this.setValueForGridDichVu();
                                // self.closePopupLoadingData();
                            }
                        }, function (err) {
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
                };
                // dichVuKhamBenhVaKyThuatIds() {
                //   this.dichVuKhamSucKhoeDoan.DichVuKhamBenhVaKyThuatIds = new Array<number>();
                //   this.lstDichVuKhamSucKhoeDoanGrid.forEach(element => {
                //     this.dichVuKhamSucKhoeDoan.DichVuKhamBenhVaKyThuatIds.push(element.DichVuKyThuatBenhVienId);
                //   });
                // }
                KhamDoanGoiKhamSucKhoeChungComponent.prototype.setValueForGridDichVu = function () {
                    this.gridDataSource = {
                        data: this.lstDichVuKhamSucKhoeDoanGrid,
                        total: this.lstDichVuKhamSucKhoeDoanGrid.length
                    };
                    // this.dichVuKhamBenhVaKyThuatIds();
                    this.gridDichVu.gridDataSource = this.gridDataSource;
                    this.gridDichVu.setDataSource();
                    this.pushDataDichVu();
                };
                KhamDoanGoiKhamSucKhoeChungComponent.prototype.pushDataDichVu = function () {
                    var _this = this;
                    this.khamSucKhoeDoan.DichVuKhamSucKhoeDoans = new Array();
                    this.khamSucKhoeDoan.DichVuKhamSucKhoeDoans.forEach(function (element) {
                        element.GoiKhamSucKhoeNoiThucHienIds = new Array();
                        element.GoiKhamSucKhoeNoiThucHiens = new Array();
                    });
                    this.lstDichVuKhamSucKhoeDoanGrid.forEach(function (obj) {
                        var model = new _kham_doan_goi_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_14__["DichVuKhamSucKhoeDoanViewModel"]();
                        model.Id = obj.Id;
                        model.DichVuKyThuatBenhVienId = obj.DichVuKyThuatBenhVienId;
                        model.TenDichVuKyThuatBenhVien = obj.TenDichVuKyThuatBenhVien;
                        model.GoiKhamSucKhoeNoiThucHienIds = obj.GoiKhamSucKhoeChungNoiThucHienIds;
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
                        model.GoiKhamSucKhoeNoiThucHienIds.forEach(function (element) {
                            var goiKham = new _kham_doan_goi_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_14__["GoiKhamSucKhoeNoiThucHienViewModel"]();
                            goiKham.PhongBenhVienId = element;
                            model.GoiKhamSucKhoeNoiThucHiens.push(goiKham);
                        });
                        _this.khamSucKhoeDoan.DichVuKhamSucKhoeDoans.push(model);
                        _this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeNoiThucHiens = new Array();
                        //console.log("this.khamSucKhoeDoan.DichVuKhamSucKhoeDoans: ", this.khamSucKhoeDoan.DichVuKhamSucKhoeDoans)
                    });
                };
                KhamDoanGoiKhamSucKhoeChungComponent.prototype.getDichVuGrid = function (dataItem) {
                    var _this = this;
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
                    if (this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeNoiThucHienIds != []) {
                        this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeNoiThucHienIds = [];
                    }
                    dataItem.GoiKhamSucKhoeNoiThucHiens.forEach(function (element) {
                        _this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeNoiThucHienIds.push(element.PhongBenhVienId);
                    });
                    this.dichVuKhamSucKhoeDoan.GioiTinhNam = dataItem.GioiTinhNam;
                    this.dichVuKhamSucKhoeDoan.GioiTinhNu = dataItem.GioiTinhNu;
                    this.dichVuKhamSucKhoeDoan.CoMangThai = dataItem.CoMangThai;
                    this.dichVuKhamSucKhoeDoan.KhongMangThai = dataItem.KhongMangThai;
                    this.dichVuKhamSucKhoeDoan.DaLapGiaDinh = dataItem.DaLapGiaDinh;
                    this.dichVuKhamSucKhoeDoan.ChuaLapGiaDinh = dataItem.ChuaLapGiaDinh;
                    this.dichVuKhamSucKhoeDoan.SoTuoiTu = dataItem.SoTuoiTu;
                    this.dichVuKhamSucKhoeDoan.SoTuoiDen = dataItem.SoTuoiDen;
                };
                KhamDoanGoiKhamSucKhoeChungComponent.prototype.Luu = function () {
                    var _this = this;
                    var self = this;
                    //câp nn nhập thông lưu gói khám
                    self.khamSucKhoeDoan.CongTyKhamSucKhoeId = this.dataKhamDoan.CongTyKhamSucKhoeId;
                    self.khamSucKhoeDoan.TenCongTy = this.dataKhamDoan.TenCongTyKhamSucKhoe;
                    self.khamSucKhoeDoan.HopDongKhamSucKhoeId = this.dataKhamDoan.HopDongKhamSucKhoeId;
                    self.khamSucKhoeDoan.SoHopDong = this.dataKhamDoan.TenHopDongKhamSucKhoe;
                    self.khamSucKhoeDoan.NgayHieuLuc = this.dataKhamDoan.NgayHieuLuc;
                    self.khamSucKhoeDoan.NgayKetThuc = this.dataKhamDoan.NgayKetThuc;
                    self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
                        disableClose: false,
                        width: "500px",
                        data: {
                            Title: "Xác nhận",
                            Message: "Bạn lưu gói khám sức khỏe đoàn này không ?",
                        },
                    }).afterClosed().subscribe(function (res) {
                        if (res == "Yes") {
                            self.validationErrors = [];
                            self.ref.detectChanges();
                            if (_this.id != null && _this.id != 0 && !_this.IsCopy) {
                                if (_this.authService.hasPermission(_this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Update)) {
                                    self.showPopupSavingData();
                                    self.apiService.post("KhamDoan/CapNhatGoiKhamSucKhoeDoan", self.khamSucKhoeDoan).subscribe(function () {
                                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                        if (_this.dataKhamDoan != undefined && _this.dataKhamDoan != null) {
                                            _this.afterChangedFromHopDongKham.emit(true);
                                        }
                                        else {
                                            _this.router.navigate(['/kham-doan/goi-kham']);
                                            // this.location.back();
                                        }
                                        self.closePopupSavingData();
                                    }, function (err) {
                                        self.validationErrors = err.ValidationErrors;
                                        if (err.Message != "Validation Failed") {
                                            self.notificationService.showError(err.Message);
                                        }
                                        self.closePopupSavingData();
                                    });
                                }
                                else {
                                    _this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
                                }
                            }
                            else {
                                if (_this.authService.hasPermission(_this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Add)) {
                                    self.showPopupSavingData();
                                    if (_this.IsCopy) {
                                        self.khamSucKhoeDoan.Id = 0;
                                    }
                                    self.khamSucKhoeDoan.Id = 0;
                                    self.apiService.post("KhamDoan/ThemGoiKhamSucKhoeDoan", self.khamSucKhoeDoan).subscribe(function () {
                                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                        if (_this.dataKhamDoan != undefined && _this.dataKhamDoan != null) {
                                            _this.afterChangedFromHopDongKham.emit(true);
                                        }
                                        else {
                                            _this.router.navigate(['/kham-doan/goi-kham']);
                                        }
                                        self.closePopupSavingData();
                                    }, function (err) {
                                        self.validationErrors = err.ValidationErrors;
                                        if (err.Message != "Validation Failed") {
                                            self.notificationService.showError(err.Message);
                                        }
                                        self.closePopupSavingData();
                                    });
                                }
                                else {
                                    _this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
                                }
                            }
                        }
                    });
                };
                KhamDoanGoiKhamSucKhoeChungComponent.prototype.quayLai = function () {
                    if (this.dataKhamDoan != undefined && this.dataKhamDoan != null) {
                        this.dialog.closeAll();
                    }
                    else {
                        this.location.back();
                    }
                };
                return KhamDoanGoiKhamSucKhoeChungComponent;
            }());
            KhamDoanGoiKhamSucKhoeChungComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], KhamDoanGoiKhamSucKhoeChungComponent.prototype, "dataKhamDoan", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], KhamDoanGoiKhamSucKhoeChungComponent.prototype, "afterChangedFromHopDongKham", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], KhamDoanGoiKhamSucKhoeChungComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDichVu', { static: true })
            ], KhamDoanGoiKhamSucKhoeChungComponent.prototype, "gridDichVu", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('multiselectNoiThucHien', { read: src_app_shared_component_dropdowns_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_15__["MultiselectComponent"], static: false })
            ], KhamDoanGoiKhamSucKhoeChungComponent.prototype, "multiselectNoiThucHien", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('comboBoxDichVu', { read: src_app_shared_component_dropdowns_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_18__["ComboboxComponent"], static: false })
            ], KhamDoanGoiKhamSucKhoeChungComponent.prototype, "comboBoxDichVu", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('STTTemplate', { static: true })
            ], KhamDoanGoiKhamSucKhoeChungComponent.prototype, "STTTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenDichVuTemplate', { static: true })
            ], KhamDoanGoiKhamSucKhoeChungComponent.prototype, "tenDichVuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLanTemplate', { static: true })
            ], KhamDoanGoiKhamSucKhoeChungComponent.prototype, "soLanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaBenhVienTemplate', { static: true })
            ], KhamDoanGoiKhamSucKhoeChungComponent.prototype, "donGiaBenhVienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaUuDaiTemplate', { static: true })
            ], KhamDoanGoiKhamSucKhoeChungComponent.prototype, "donGiaUuDaiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaChuaUuDaiTemplate', { static: true })
            ], KhamDoanGoiKhamSucKhoeChungComponent.prototype, "donGiaChuaUuDaiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soTuoiTemplate', { static: true })
            ], KhamDoanGoiKhamSucKhoeChungComponent.prototype, "soTuoiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dvKhamKetLuanTemplate', { static: true })
            ], KhamDoanGoiKhamSucKhoeChungComponent.prototype, "dvKhamKetLuanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], KhamDoanGoiKhamSucKhoeChungComponent.prototype, "actionTemplate", void 0);
            KhamDoanGoiKhamSucKhoeChungComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-kham-doan-goi-kham-suc-chung.',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-goi-kham-suc-chung.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-chung/kham-doan-goi-kham-suc-chung.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-goi-kham-suc-chung.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-chung/kham-doan-goi-kham-suc-chung.component.scss")).default]
                })
            ], KhamDoanGoiKhamSucKhoeChungComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-chon-file-popup/kham-doan-goi-kham-suc-khoe-chon-file-popup.component.scss": 
        /*!***************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-chon-file-popup/kham-doan-goi-kham-suc-khoe-chon-file-popup.component.scss ***!
          \***************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWdvaS1raGFtLXN1Yy1raG9lL2toYW0tZG9hbi1nb2kta2hhbS1zdWMta2hvZS1jaG9uLWZpbGUtcG9wdXAva2hhbS1kb2FuLWdvaS1raGFtLXN1Yy1raG9lLWNob24tZmlsZS1wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-chon-file-popup/kham-doan-goi-kham-suc-khoe-chon-file-popup.component.ts": 
        /*!*************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-chon-file-popup/kham-doan-goi-kham-suc-khoe-chon-file-popup.component.ts ***!
          \*************************************************************************************************************************************************************************/
        /*! exports provided: KhamDoanGoiKhamSucKhoeChonFilePopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanGoiKhamSucKhoeChonFilePopupComponent", function () { return KhamDoanGoiKhamSucKhoeChonFilePopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-clear */ "./node_modules/@iconify/icons-ic/twotone-clear.js");
            /* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _kham_doan_goi_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../kham-doan-goi-kham-suc-khoe.model */ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe.model.ts");
            var KhamDoanGoiKhamSucKhoeChonFilePopupComponent = /** @class */ (function () {
                function KhamDoanGoiKhamSucKhoeChonFilePopupComponent(dialog, dialogRef, cdRef) {
                    this.dialog = dialog;
                    this.dialogRef = dialogRef;
                    this.cdRef = cdRef;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
                    this.icClear = _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.validationErrors = [];
                    this.allowedExtensions = ['.xlsx', '.xls'];
                    this.invalidFileExtensionMess = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_4__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_5__["SystemMessage"].InvalidFileExtension, [this.allowedExtensions.toString()]);
                    this.file = new _kham_doan_goi_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_8__["FileExcelDichVu"]();
                    this.fileExcel = null;
                }
                KhamDoanGoiKhamSucKhoeChonFilePopupComponent.prototype.ngOnInit = function () {
                };
                KhamDoanGoiKhamSucKhoeChonFilePopupComponent.prototype.showPopupLoadingData = function () {
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
                };
                KhamDoanGoiKhamSucKhoeChonFilePopupComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                KhamDoanGoiKhamSucKhoeChonFilePopupComponent.prototype.uploadFileDone = function (event) {
                    this.fileExcel = event;
                    this.cdRef.detectChanges();
                };
                KhamDoanGoiKhamSucKhoeChonFilePopupComponent.prototype.close = function (result) {
                    if (result === void 0) { result = null; }
                    this.dialogRef.close(result);
                };
                return KhamDoanGoiKhamSucKhoeChonFilePopupComponent;
            }());
            KhamDoanGoiKhamSucKhoeChonFilePopupComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            KhamDoanGoiKhamSucKhoeChonFilePopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-kham-doan-goi-kham-suc-khoe-chon-file-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-goi-kham-suc-khoe-chon-file-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-chon-file-popup/kham-doan-goi-kham-suc-khoe-chon-file-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-goi-kham-suc-khoe-chon-file-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-chon-file-popup/kham-doan-goi-kham-suc-khoe-chon-file-popup.component.scss")).default]
                })
            ], KhamDoanGoiKhamSucKhoeChonFilePopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-detail-popup/kham-doan-goi-kham-suc-khoe-detail-popup.component.scss": 
        /*!*********************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-detail-popup/kham-doan-goi-kham-suc-khoe-detail-popup.component.scss ***!
          \*********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("fieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em;\n  padding-bottom: 5px;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\n.po-h-tn {\n  margin-left: auto;\n  color: #005dab;\n  position: relative;\n  left: 5px;\n}\n\n.po-h-tn mat-icon {\n  display: contents;\n  font-size: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4tZ29pLWtoYW0tc3VjLWtob2Uva2hhbS1kb2FuLWdvaS1raGFtLXN1Yy1raG9lLWRldGFpbC1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGtoYW0tZG9hblxca2hhbS1kb2FuLWdvaS1raGFtLXN1Yy1raG9lXFxraGFtLWRvYW4tZ29pLWtoYW0tc3VjLWtob2UtZGV0YWlsLXBvcHVwXFxraGFtLWRvYW4tZ29pLWtoYW0tc3VjLWtob2UtZGV0YWlsLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4va2hhbS1kb2FuL2toYW0tZG9hbi1nb2kta2hhbS1zdWMta2hvZS9raGFtLWRvYW4tZ29pLWtoYW0tc3VjLWtob2UtZGV0YWlsLXBvcHVwL2toYW0tZG9hbi1nb2kta2hhbS1zdWMta2hvZS1kZXRhaWwtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWdvaS1raGFtLXN1Yy1raG9lL2toYW0tZG9hbi1nb2kta2hhbS1zdWMta2hvZS1kZXRhaWwtcG9wdXAva2hhbS1kb2FuLWdvaS1raGFtLXN1Yy1raG9lLWRldGFpbC1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtO1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG59XG5cbi5wby1oLXRuIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDVweDtcbn1cblxuLnBvLWgtdG4gbWF0LWljb24ge1xuICBkaXNwbGF5OiBjb250ZW50cztcbiAgZm9udC1zaXplOiAzNXB4O1xufSIsImZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtO1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG59XG5cbi5wby1oLXRuIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDVweDtcbn1cblxuLnBvLWgtdG4gbWF0LWljb24ge1xuICBkaXNwbGF5OiBjb250ZW50cztcbiAgZm9udC1zaXplOiAzNXB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-detail-popup/kham-doan-goi-kham-suc-khoe-detail-popup.component.ts": 
        /*!*******************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-detail-popup/kham-doan-goi-kham-suc-khoe-detail-popup.component.ts ***!
          \*******************************************************************************************************************************************************************/
        /*! exports provided: KhamDoanGoiKhamSucKhoeDetailPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanGoiKhamSucKhoeDetailPopupComponent", function () { return KhamDoanGoiKhamSucKhoeDetailPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11__);
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _kham_doan_goi_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../kham-doan-goi-kham-suc-khoe.model */ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe.model.ts");
            /* harmony import */ var src_app_shared_component_dropdowns_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/component/dropdowns/multiselect/multiselect.component */ "./src/app/shared/component/dropdowns/multiselect/multiselect.component.ts");
            /* harmony import */ var src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/models/common.model */ "./src/app/shared/models/common.model.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dropdowns_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/component/dropdowns/combobox/combobox.component */ "./src/app/shared/component/dropdowns/combobox/combobox.component.ts");
            var KhamDoanGoiKhamSucKhoeDetailPopupComponent = /** @class */ (function () {
                function KhamDoanGoiKhamSucKhoeDetailPopupComponent(authService, dialog, notificationService, apiService, location, ref, router, route) {
                    this.authService = authService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.location = location;
                    this.ref = ref;
                    this.router = router;
                    this.route = route;
                    this.afterChangedFromHopDongKham = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.khamSucKhoeDoan = new _kham_doan_goi_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_14__["KhamSucKhoeDoanViewModel"]();
                    this.dichVuKhamSucKhoeDoan = new _kham_doan_goi_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_14__["DichVuKhamSucKhoeDoanViewModel"]();
                    this.lstDichVuKhamSucKhoeDoanGrid = [];
                    this.keyIdStringGoiDichVuKhamSucKhoeVo = new _kham_doan_goi_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_14__["KeyIdStringGoiDichVuKhamSucKhoeVo"]();
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
                KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].KhamDoanGoiKhamSucKhoe;
                    this.dichVuStringId = JSON.stringify(this.keyIdStringGoiDichVuKhamSucKhoeVo);
                    this.route.queryParams.subscribe(function (param) {
                        // console.log('param', param);
                        _this.id = param['Id'];
                        _this.HopDongKhamId = param['HopDongKhamId'];
                        _this.IsHopDongKham = _this.HopDongKhamId != undefined && _this.HopDongKhamId != null;
                        _this.IsCopy = param['IsCopy'] == 'true';
                        _this.khamSucKhoeDoan.IsCopy = _this.IsCopy;
                    });
                    this.id = (this.id === undefined || this.id === null) ? 0 : this.id;
                    if (this.id == 0) {
                        this.isCreate = true;
                        this.title = "Thêm gói khám sức khỏe";
                        this.header = "Thêm Gói Khám Sức Khỏe";
                    }
                    else {
                        this.title = "Chi tiết gói khám sức khỏe";
                        this.header = "Chi Tiết Gói Khám Sức Khỏe";
                        this.getById(this.id);
                    }
                    this.IsHopDongKham = false; // this.data.IsHopDongKham == true;
                    this.IsKetThucHopDong = false; // cần cập nhật lại: sẽ get từ api
                    this.dichVuKhamSucKhoeDoan.HinhThucKhamBenh = 1;
                    //==============================hợp đồng khám qua bên gói khám======================================================      
                    if (this.dataKhamDoan != undefined && this.dataKhamDoan != null && this.dataKhamDoan.LaHopDongKhamSucKhoe) {
                        this.khamSucKhoeDoan.CongTyKhamSucKhoeId = this.dataKhamDoan.CongTyKhamSucKhoeId;
                        this.khamSucKhoeDoan.HopDongKhamSucKhoeId = this.dataKhamDoan.HopDongKhamSucKhoeId;
                        this.khamSucKhoeDoan.TenCongTy = this.dataKhamDoan.TenCongTyKhamSucKhoe;
                        this.khamSucKhoeDoan.SoHopDong = this.dataKhamDoan.TenHopDongKhamSucKhoe;
                        this.khamSucKhoeDoan.NgayHieuLuc = this.dataKhamDoan.NgayHieuLuc;
                        this.khamSucKhoeDoan.NgayKetThuc = this.dataKhamDoan.NgayKetThuc;
                        this.id = this.dataKhamDoan.GoiKhamId;
                        if (this.dataKhamDoan.IsCreatedHopDongKhamSucKhoe) {
                            this.isCreate = true;
                            this.title = "Thêm gói khám sức khỏe";
                            this.header = "Thêm Gói Khám Sức Khỏe";
                        }
                        else {
                            this.title = "Chi tiết gói khám sức khỏe";
                            this.header = "Chi Tiết Gói Khám Sức Khỏe";
                            this.getById(this.dataKhamDoan.GoiKhamId);
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
                };
                KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype.showPopupLoadingData = function () {
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
                };
                KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype.showPopupSavingData = function () {
                    this.popupSavingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang lưu dữ liệu..." },
                    });
                };
                KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype.closePopupSavingData = function () {
                    if (this.popupSavingData != undefined && this.popupSavingData != null) {
                        this.popupSavingData.close();
                    }
                };
                KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype.gioiTinhNuChange = function (event) {
                    if (event == false) {
                        this.dichVuKhamSucKhoeDoan.CoMangThai = null;
                        this.dichVuKhamSucKhoeDoan.KhongMangThai = null;
                    }
                };
                KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype.mangThaiChange = function (event, text) {
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
                };
                KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype.lapGDChange = function (event, text) {
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
                };
                KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype.loaiGiaChange = function (event, text) {
                    var _this = this;
                    this.dichVuStringId = null;
                    if (text == 'dichvu') {
                        this.validationErrors = [];
                        if (event != undefined && event != null) {
                            var KeyIdString = JSON.parse(event.KeyId);
                            this.dichVuKhamBenhBvId = KeyIdString.DichVuId;
                            if (KeyIdString.Loai == 1) {
                                this.laDichVuKham = true;
                            }
                            else {
                                this.laDichVuKham = false;
                                this.dichVuKhamSucKhoeDoan.SoLan = 1;
                            }
                            //Update 29/11/2021
                            this.keyIdStringGoiDichVuKhamSucKhoeVo.DichVuId = KeyIdString.DichVuId;
                            this.keyIdStringGoiDichVuKhamSucKhoeVo.Loai = KeyIdString.Loai;
                            this.dichVuStringId = JSON.stringify(this.keyIdStringGoiDichVuKhamSucKhoeVo);
                            // end
                            this.dichVuKhamSucKhoeDoan.DichVuKyThuatBenhVienId = KeyIdString.DichVuId;
                            this.dichVuKhamSucKhoeDoan.MaNhomDichVuBenhVienCha = event.MaNhomDichVuBenhVienCha;
                            this.dichVuKhamSucKhoeDoan.MaNhomDichVuBenhVien = event.MaNhomDichVuBenhVien;
                            this.dichVuKhamSucKhoeDoan.TenDichVuKyThuatBenhVien = event.Ten;
                            this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeNoiThucHienIds = [];
                            this.dichVuKhamSucKhoeDoan.ChuyenKhoaKhamSucKhoe = event.ChuyenKhoaKhamSucKhoe;
                        }
                        else {
                            this.dichVuKhamSucKhoeDoan.DichVuKyThuatBenhVienId = null;
                            this.keyIdStringGoiDichVuKhamSucKhoeVo.DichVuId = 0;
                            this.keyIdStringGoiDichVuKhamSucKhoeVo.Loai = 1;
                            this.dichVuStringId = JSON.stringify(this.keyIdStringGoiDichVuKhamSucKhoeVo);
                            this.dichVuKhamBenhBvId = null;
                            this.dichVuKhamSucKhoeDoan.DonGiaBenhVien = null;
                            this.dichVuKhamSucKhoeDoan.TenDichVuKyThuatBenhVien = null;
                            this.dichVuKhamSucKhoeDoan.MaNhomDichVuBenhVien = null;
                            this.dichVuKhamSucKhoeDoan.MaNhomDichVuBenhVienCha = null;
                            this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeNoiThucHienIds = [];
                            this.laDichVuKham = null;
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
                        var obj = {
                            DichVuKhamBenhHoacKyThuatBenhVienId: this.dichVuKhamBenhBvId,
                            NhomGiaDichVuKhamBenhHoacKyThuatBenhVienId: this.nhomGiaDichVuKhamBenhBenhVienId,
                            LaDichVuKham: this.laDichVuKham
                        };
                        this.apiService.post("KhamDoan/GetDonGiaBenhVien", obj).subscribe(function (resultData) {
                            if (resultData != undefined && resultData != null) {
                                _this.dichVuKhamSucKhoeDoan.DonGiaBenhVien = resultData;
                            }
                        }, function (err) {
                            _this.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                _this.notificationService.showError(err.Message);
                            }
                        });
                    }
                };
                KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        if (this.isSelectDuocPham != true) {
                            this.themDichVu();
                        }
                        else {
                            this.isSelectDuocPham = false;
                        }
                    }
                };
                KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype.changeHinhThucKhamBenh = function () {
                    this.validationErrors = [];
                    this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeNoiThucHienIds = [];
                };
                KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype.openCombobox = function (event) {
                    if (event) {
                        this.isSelectDuocPham = true;
                    }
                    else {
                        this.isSelectDuocPham = false;
                    }
                };
                KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype.congTyChange = function (event) {
                    this.khamSucKhoeDoan.HopDongKhamSucKhoeId = null;
                    this.khamSucKhoeDoan.NgayHieuLuc = null;
                    this.khamSucKhoeDoan.NgayKetThuc = null;
                };
                KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype.hopDongChange = function (event) {
                    if (event != undefined && event != null) {
                        this.khamSucKhoeDoan.NgayHieuLuc = event.NgayHieuLuc;
                        this.khamSucKhoeDoan.NgayKetThuc = event.NgayKetThuc;
                    }
                    else {
                        this.khamSucKhoeDoan.NgayHieuLuc = null;
                        this.khamSucKhoeDoan.NgayKetThuc = null;
                        this.huyDichVu();
                    }
                };
                KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype.getById = function (id) {
                    var _this = this;
                    //IsCopy
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].View)) {
                        self.showPopupLoadingData();
                        self.apiService.get("KhamDoan/GetGoiKhamSucKhoeDoan?id=" + id).subscribe(function (resultData) {
                            if (resultData != undefined && resultData != null) {
                                resultData.GoiKhamSucKhoeDichVuDichVuKyThuats = [];
                                resultData.GoiKhamSucKhoeDichVuKhamBenhs = [];
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
                                // console.log("data: ", resultData)
                                _this.lstDichVuKhamSucKhoeDoanGrid = [];
                                resultData.DichVuKhamSucKhoeDoans.forEach(function (element) {
                                    _this.lstDichVuKhamSucKhoeDoanGrid.push(element);
                                });
                                _this.setValueForGridDichVu();
                            }
                        }, function (err) {
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
                };
                KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype.huyDichVu = function () {
                    this.validationErrors = [];
                    this.ref.detectChanges();
                    // this.dichVuKhamSucKhoeDoan = new DichVuKhamSucKhoeDoanViewModel();
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
                    this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeNoiThucHienIds = [];
                    this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeNoiThucHiens = new Array();
                    this.nhomGiaDichVuKhamBenhBenhVienId = this.dichVuKhamSucKhoeDoan.NhomGiaDichVuKyThuatBenhVienId;
                    this.laDichVuKham = null;
                    this.dichVuKhamBenhBvId = null;
                    this.isUpdate = false;
                    this.rowIndex = null;
                    this.dataEdit = null;
                    this.laDichVuKham = null;
                };
                // dichVuKhamBenhVaKyThuatIds() {
                //   this.dichVuKhamSucKhoeDoan.DichVuKhamBenhIds = new Array<number>();
                //   this.dichVuKhamSucKhoeDoan.DichVuKyThuatIds = new Array<number>();
                //   this.lstDichVuKhamSucKhoeDoanGrid.filter(z => z.Loai == 1).forEach(element => {
                //     this.dichVuKhamSucKhoeDoan.DichVuKhamBenhIds.push(element.DichVuKyThuatBenhVienId);
                //   });
                //   this.lstDichVuKhamSucKhoeDoanGrid.filter(z => z.Loai == 2).forEach(element => {
                //     this.dichVuKhamSucKhoeDoan.DichVuKyThuatIds.push(element.DichVuKyThuatBenhVienId);
                //   });
                // }
                KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype.setValueForGridDichVu = function () {
                    this.gridDataSource = {
                        data: this.lstDichVuKhamSucKhoeDoanGrid,
                        total: this.lstDichVuKhamSucKhoeDoanGrid.length
                    };
                    // this.dichVuKhamBenhVaKyThuatIds();
                    this.gridDichVu.gridDataSource = this.gridDataSource;
                    this.gridDichVu.setDataSource();
                    this.pushDataDichVu();
                };
                KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype.pushDataDichVu = function () {
                    var _this = this;
                    this.khamSucKhoeDoan.DichVuKhamSucKhoeDoans = new Array();
                    this.khamSucKhoeDoan.DichVuKhamSucKhoeDoans.forEach(function (element) {
                        element.GoiKhamSucKhoeNoiThucHienIds = new Array();
                        element.GoiKhamSucKhoeNoiThucHiens = new Array();
                    });
                    this.lstDichVuKhamSucKhoeDoanGrid.forEach(function (obj) {
                        var model = new _kham_doan_goi_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_14__["DichVuKhamSucKhoeDoanViewModel"]();
                        model.Id = obj.Id;
                        model.DichVuKyThuatBenhVienId = obj.DichVuKyThuatBenhVienId;
                        model.TenDichVuKyThuatBenhVien = obj.TenDichVuKyThuatBenhVien;
                        model.GoiKhamSucKhoeNoiThucHienIds = obj.GoiKhamSucKhoeNoiThucHienIds;
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
                        model.GoiKhamSucKhoeNoiThucHienIds.forEach(function (element) {
                            var goiKham = new _kham_doan_goi_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_14__["GoiKhamSucKhoeNoiThucHienViewModel"]();
                            goiKham.PhongBenhVienId = element;
                            model.GoiKhamSucKhoeNoiThucHiens.push(goiKham);
                        });
                        _this.khamSucKhoeDoan.DichVuKhamSucKhoeDoans.push(model);
                        _this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeNoiThucHiens = new Array();
                        //console.log("this.khamSucKhoeDoan.DichVuKhamSucKhoeDoans: ", this.khamSucKhoeDoan.DichVuKhamSucKhoeDoans)
                    });
                    // console.log("data luu: ", this.khamSucKhoeDoan)
                };
                // dichVuKhamBenhVaKyThuatIds() {
                //   this.dichVuKhamSucKhoeDoan.DichVuKhamBenhIds = new Array<number>();
                //   this.dichVuKhamSucKhoeDoan.DichVuKyThuatIds = new Array<number>();
                //   this.lstDichVuKhamSucKhoeDoanGrid.filter(z => z.Loai == 1).forEach(element => {
                //     this.dichVuKhamSucKhoeDoan.DichVuKhamBenhIds.push(element.DichVuKyThuatBenhVienId);
                //   });
                //   this.lstDichVuKhamSucKhoeDoanGrid.filter(z => z.Loai == 2).forEach(element => {
                //     this.dichVuKhamSucKhoeDoan.DichVuKyThuatIds.push(element.DichVuKyThuatBenhVienId);
                //   });
                // }
                KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype.themDichVu = function () {
                    // console.log("dichVuKhamSucKhoeDoan.GoiKhamSucKhoeNoiThucHienIds: ", this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeNoiThucHienIds)
                    var self = this;
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    if (self.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeNoiThucHiens != []) {
                        self.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeNoiThucHiens = new Array();
                    }
                    self.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeNoiThucHienIds.forEach(function (element) {
                        var goikham = new _kham_doan_goi_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_14__["GoiKhamSucKhoeNoiThucHienViewModel"]();
                        goikham.PhongBenhVienId = element;
                        self.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeNoiThucHiens.push(goikham);
                    });
                    if (self.laDichVuKham == null) {
                        self.laDichVuKham = false;
                    }
                    var KeyIdString = JSON.parse(self.dichVuKhamSucKhoeDoan.DichVuKyThuatBenhVienId != null ? self.dichVuKhamSucKhoeDoan.DichVuKyThuatBenhVienId.toString() : null);
                    self.dichVuKhamSucKhoeDoan.DichVuKyThuatBenhVienId = KeyIdString != null ? KeyIdString.DichVuId : null;
                    self.dichVuKhamSucKhoeDoan.LaDichVuKham = self.laDichVuKham;
                    // if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
                    self.apiService.post("KhamDoan/ThemDichVuKhamDoan", self.dichVuKhamSucKhoeDoan).subscribe(function (resultData) {
                        if (resultData != undefined && resultData != null) {
                            self.lstDichVuKhamSucKhoeDoanGrid.push(resultData);
                            //Update 29/11/2021
                            if (self.dichVuKhamSucKhoeDoan.DichVuKhamBenhIds.findIndex(function (id) { return id == Number(resultData.DichVuKyThuatBenhVienId); }) == -1
                                && self.dichVuKhamSucKhoeDoan.LaDichVuKham) {
                                self.dichVuKhamSucKhoeDoan.DichVuKhamBenhIds.push(Number(resultData.DichVuKyThuatBenhVienId));
                            }
                            if (self.dichVuKhamSucKhoeDoan.DichVuKyThuatIds.findIndex(function (id) { return id == Number(resultData.DichVuKyThuatBenhVienId); }) == -1
                                && !self.dichVuKhamSucKhoeDoan.LaDichVuKham) {
                                self.dichVuKhamSucKhoeDoan.DichVuKyThuatIds.push(Number(resultData.DichVuKyThuatBenhVienId));
                            }
                            self.setValueForGridDichVu();
                            self.huyDichVu();
                        }
                    }, function (err) {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                    });
                    // }
                    // else {
                    //   self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
                    // }
                };
                KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype.getDichVuGrid = function (dataItem) {
                    var _this = this;
                    this.dichVuStringId = null;
                    this.huyDichVu();
                    this.dataEdit = dataItem;
                    this.validationErrors = [];
                    this.ref.detectChanges();
                    if (this.khamSucKhoeDoan.CongTyKhamSucKhoeId != undefined && this.khamSucKhoeDoan.HopDongKhamSucKhoeId != undefined) {
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
                        if (this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeNoiThucHienIds != []) {
                            this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeNoiThucHienIds = [];
                        }
                        dataItem.GoiKhamSucKhoeNoiThucHiens.forEach(function (element) {
                            _this.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeNoiThucHienIds.push(element.PhongBenhVienId);
                        });
                        this.dichVuKhamSucKhoeDoan.GioiTinhNam = dataItem.GioiTinhNam;
                        this.dichVuKhamSucKhoeDoan.GioiTinhNu = dataItem.GioiTinhNu;
                        this.dichVuKhamSucKhoeDoan.CoMangThai = dataItem.CoMangThai;
                        this.dichVuKhamSucKhoeDoan.KhongMangThai = dataItem.KhongMangThai;
                        this.dichVuKhamSucKhoeDoan.DaLapGiaDinh = dataItem.DaLapGiaDinh;
                        this.dichVuKhamSucKhoeDoan.ChuaLapGiaDinh = dataItem.ChuaLapGiaDinh;
                        this.dichVuKhamSucKhoeDoan.SoTuoiTu = dataItem.SoTuoiTu;
                        this.dichVuKhamSucKhoeDoan.SoTuoiDen = dataItem.SoTuoiDen;
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
                                        + this.dichVuStringId + ", HopDongKhamSucKhoeId:"
                                        + this.khamSucKhoeDoan.HopDongKhamSucKhoeId + ", Take: 50}";
                                this.multiselectNoiThucHien.getDataForLookup();
                            }
                        }
                    }
                };
                KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype.capNhatDichVu = function () {
                    var self = this;
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    self.dichVuStringId = null;
                    self.rowIndex = self.lstDichVuKhamSucKhoeDoanGrid.findIndex(function (x) { return x == self.dataEdit; });
                    var dataUpdate = self.lstDichVuKhamSucKhoeDoanGrid[self.rowIndex];
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
                    if (dataUpdate.GoiKhamSucKhoeNoiThucHienIds != []) {
                        dataUpdate.GoiKhamSucKhoeNoiThucHienIds = [];
                    }
                    self.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeNoiThucHienIds.forEach(function (element) {
                        dataUpdate.GoiKhamSucKhoeNoiThucHienIds.push(element);
                        var goiKham = new _kham_doan_goi_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_14__["GoiKhamSucKhoeNoiThucHienViewModel"]();
                        goiKham.PhongBenhVienId = element;
                        self.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeNoiThucHiens.push(goiKham);
                        dataUpdate.GoiKhamSucKhoeNoiThucHiens = self.dichVuKhamSucKhoeDoan.GoiKhamSucKhoeNoiThucHiens;
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
                                    + this.dichVuStringId + ", HopDongKhamSucKhoeId:"
                                    + self.khamSucKhoeDoan.HopDongKhamSucKhoeId + ", Take: 50}";
                            self.multiselectNoiThucHien.getDataForLookup();
                        }
                    }
                    self.apiService.post("KhamDoan/CapNhatDichVuKhamDoan", dataUpdate).subscribe(function (resultData) {
                        if (resultData != undefined && resultData != null) {
                            self.lstDichVuKhamSucKhoeDoanGrid[self.rowIndex] = resultData;
                            self.setValueForGridDichVu();
                            self.huyDichVu();
                        }
                    }, function (err) {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                    });
                };
                KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype.xoaDichVu = function (dataItem) {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_18__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].MessConfirm, ["xóa"]) }
                    }).afterClosed().subscribe(function (result) {
                        if (result === 'Yes') {
                            // kiểm tra nhân viên có sài gói khám đó không . Nếu sài rùi không cho nó xóa     
                            _this.apiService.post("KhamDoan/KiemTraNhanVienSuDungGoiKham?id=" + _this.id).subscribe(function (res) {
                                if (res.Item1) {
                                    _this.notificationService.showError(res.Item2);
                                }
                                else {
                                    _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_18__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].ActionSuccessfully, ["Xóa"]));
                                    if (dataItem.Loai == 1) {
                                        _this.dichVuKhamSucKhoeDoan.DichVuKhamBenhIds.splice(_this.dichVuKhamSucKhoeDoan.DichVuKhamBenhIds.findIndex(function (x) { return x == dataItem.DichVuKyThuatBenhVienId; }), 1);
                                    }
                                    else {
                                        _this.dichVuKhamSucKhoeDoan.DichVuKyThuatIds.splice(_this.dichVuKhamSucKhoeDoan.DichVuKhamBenhIds.findIndex(function (x) { return x == dataItem.DichVuKyThuatBenhVienId; }), 1);
                                    }
                                    _this.lstDichVuKhamSucKhoeDoanGrid.splice(_this.lstDichVuKhamSucKhoeDoanGrid.findIndex(function (x) { return x == dataItem; }), 1);
                                    _this.validationErrors = [];
                                    _this.setValueForGridDichVu();
                                }
                            }, function (err) {
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                            });
                        }
                    });
                };
                KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype.Luu = function () {
                    var _this = this;
                    var self = this;
                    self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmComponent"], {
                        disableClose: false,
                        width: "500px",
                        data: {
                            Title: "Xác nhận",
                            Message: "Bạn lưu gói khám sức khỏe đoàn này không ?",
                        },
                    }).afterClosed().subscribe(function (res) {
                        if (res == "Yes") {
                            self.validationErrors = [];
                            self.ref.detectChanges();
                            if (_this.id != null && _this.id != 0 && !_this.IsCopy) {
                                if (_this.authService.hasPermission(_this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Update)) {
                                    self.showPopupSavingData();
                                    self.apiService.post("KhamDoan/CapNhatGoiKhamSucKhoeDoan", self.khamSucKhoeDoan).subscribe(function () {
                                        if (_this.dataKhamDoan != undefined && _this.dataKhamDoan != null) {
                                            _this.afterChangedFromHopDongKham.emit(true);
                                        }
                                        else {
                                            self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_18__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                            _this.router.navigate(['/kham-doan/goi-kham']);
                                            // this.location.back();
                                        }
                                        self.closePopupSavingData();
                                    }, function (err) {
                                        self.validationErrors = err.ValidationErrors;
                                        if (err.Message != "Validation Failed") {
                                            self.notificationService.showError(err.Message);
                                        }
                                        self.closePopupSavingData();
                                    });
                                }
                                else {
                                    _this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
                                }
                            }
                            else {
                                if (_this.authService.hasPermission(_this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Add)) {
                                    self.showPopupSavingData();
                                    if (_this.IsCopy) {
                                        self.khamSucKhoeDoan.Id = 0;
                                    }
                                    self.apiService.post("KhamDoan/ThemGoiKhamSucKhoeDoan", self.khamSucKhoeDoan).subscribe(function () {
                                        if (_this.dataKhamDoan != undefined && _this.dataKhamDoan != null) {
                                            _this.afterChangedFromHopDongKham.emit(true);
                                        }
                                        else {
                                            self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_18__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                            _this.router.navigate(['/kham-doan/goi-kham']);
                                        }
                                        self.closePopupSavingData();
                                    }, function (err) {
                                        self.validationErrors = err.ValidationErrors;
                                        if (err.Message != "Validation Failed") {
                                            self.notificationService.showError(err.Message);
                                        }
                                        self.closePopupSavingData();
                                    });
                                }
                                else {
                                    _this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
                                }
                            }
                        }
                    });
                };
                KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype.checkGoiChung = function (event) {
                    this.khamSucKhoeDoan.GoiDichVuPhatSinh = false;
                    this.khamSucKhoeDoan.GoiChung = event;
                };
                KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype.checkGoiDichVuPhatSinh = function (event) {
                    this.khamSucKhoeDoan.GoiChung = false;
                    this.khamSucKhoeDoan.GoiDichVuPhatSinh = event;
                };
                KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype.quayLai = function () {
                    if (this.dataKhamDoan != undefined && this.dataKhamDoan != null) {
                        this.dialog.closeAll();
                    }
                    else {
                        this.location.back();
                    }
                };
                return KhamDoanGoiKhamSucKhoeDetailPopupComponent;
            }());
            KhamDoanGoiKhamSucKhoeDetailPopupComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype, "dataKhamDoan", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype, "afterChangedFromHopDongKham", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDichVu', { static: true })
            ], KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype, "gridDichVu", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('multiselectNoiThucHien', { read: src_app_shared_component_dropdowns_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_15__["MultiselectComponent"], static: false })
            ], KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype, "multiselectNoiThucHien", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('comboBoxDichVu', { read: src_app_shared_component_dropdowns_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_19__["ComboboxComponent"], static: false })
            ], KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype, "comboBoxDichVu", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('STTTemplate', { static: true })
            ], KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype, "STTTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenDichVuTemplate', { static: true })
            ], KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype, "tenDichVuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLanTemplate', { static: true })
            ], KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype, "soLanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaBenhVienTemplate', { static: true })
            ], KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype, "donGiaBenhVienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaUuDaiTemplate', { static: true })
            ], KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype, "donGiaUuDaiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaChuaUuDaiTemplate', { static: true })
            ], KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype, "donGiaChuaUuDaiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soTuoiTemplate', { static: true })
            ], KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype, "soTuoiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dvKhamKetLuanTemplate', { static: true })
            ], KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype, "dvKhamKetLuanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], KhamDoanGoiKhamSucKhoeDetailPopupComponent.prototype, "actionTemplate", void 0);
            KhamDoanGoiKhamSucKhoeDetailPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-kham-doan-goi-kham-suc-khoe-detail-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-goi-kham-suc-khoe-detail-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-detail-popup/kham-doan-goi-kham-suc-khoe-detail-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-goi-kham-suc-khoe-detail-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-detail-popup/kham-doan-goi-kham-suc-khoe-detail-popup.component.scss")).default]
                })
            ], KhamDoanGoiKhamSucKhoeDetailPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-list/kham-doan-goi-kham-suc-khoe-list.component.scss": 
        /*!*****************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-list/kham-doan-goi-kham-suc-khoe-list.component.scss ***!
          \*****************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWdvaS1raGFtLXN1Yy1raG9lL2toYW0tZG9hbi1nb2kta2hhbS1zdWMta2hvZS1saXN0L2toYW0tZG9hbi1nb2kta2hhbS1zdWMta2hvZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-list/kham-doan-goi-kham-suc-khoe-list.component.ts": 
        /*!***************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-list/kham-doan-goi-kham-suc-khoe-list.component.ts ***!
          \***************************************************************************************************************************************************/
        /*! exports provided: KhamDoanGoiKhamSucKhoeListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanGoiKhamSucKhoeListComponent", function () { return KhamDoanGoiKhamSucKhoeListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _iconify_icons_ic_outline_content_copy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/outline-content-copy */ "./node_modules/@iconify/icons-ic/outline-content-copy.js");
            /* harmony import */ var _iconify_icons_ic_outline_content_copy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_outline_content_copy__WEBPACK_IMPORTED_MODULE_7__);
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _kham_doan_goi_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../kham-doan-goi-kham-suc-khoe.model */ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe.model.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            var KhamDoanGoiKhamSucKhoeListComponent = /** @class */ (function () {
                function KhamDoanGoiKhamSucKhoeListComponent(authService, notificationService, route, location, dialog, apiService, router) {
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
                    this.timKiemObj = new _kham_doan_goi_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_16__["KhamDoanGoiKhamSucKhoeTimKiem"]();
                }
                KhamDoanGoiKhamSucKhoeListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].KhamDoanGoiKhamSucKhoe;
                    var hasLocalSearchString = false;
                    if (this.route.snapshot.queryParams.holdQuery != undefined) {
                        var holdQuery = this.route.snapshot.queryParams.holdQuery;
                        if (holdQuery != null && holdQuery) {
                            var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_17__["LocalStorageHelper"].getItem("additionalSearchStringKhamDoanDanhSachGoiKham");
                            if (additionalSearchString != null) {
                                this.timKiemObj = JSON.parse(additionalSearchString);
                                this.grid.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
                                hasLocalSearchString = true;
                            }
                        }
                    }
                    if (!hasLocalSearchString) {
                        this.grid.additionalSearchString = null;
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_17__["LocalStorageHelper"].removeItem("additionalSearchStringKhamDoanDanhSachGoiKham");
                    }
                    this.gridColumns = [
                        { Field: "MaGoiKham", Title: "Mã gói khám", Width: 100, Sortable: true, Template: this.maGoiKhamTemplate },
                        { Field: "TenGoiKham", Title: "Tên gói khám", Width: 160, Sortable: true },
                        { Field: "TenCongTy", Title: "Tên công ty", Width: 240, Sortable: true },
                        { Field: "SoHopDong", Title: "SHĐ", Width: 100, Sortable: true },
                        { Field: "NgayHieuLuc", Title: "Ngày hiệu lực", Width: 100, Sortable: true, Template: this.ngayHieuLucTemplate },
                        { Field: "NgayKetThuc", Title: "Ngày kết thúc", Width: 100, Sortable: true, Template: this.ngayKetThucTemplate },
                        { Field: "Action", Title: "", Width: 40, Sortable: false, Template: this.actionTemplate }
                    ];
                    this._gridColumnsFilter = this.gridColumns.filter(function (p) { return p.Title != ''; });
                };
                KhamDoanGoiKhamSucKhoeListComponent.prototype.searchChanges = function (event) {
                    if ((event == null || event == "") && this.strAdditionalSearchString != "") {
                        this.timKiemNangCao();
                    }
                };
                KhamDoanGoiKhamSucKhoeListComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.timKiemNangCao();
                    }
                };
                KhamDoanGoiKhamSucKhoeListComponent.prototype.clearSearch = function () {
                    this.timKiemObj.SearchString = null;
                    this.grid.searchString = null;
                    this.timKiemNangCao();
                };
                KhamDoanGoiKhamSucKhoeListComponent.prototype.timKiemNangCao = function () {
                    this.location.replaceState(this.baseRoute + '?holdQuery=true');
                    var queryString = JSON.stringify(this.timKiemObj);
                    this.grid._additionalSearchString = this.strAdditionalSearchString = queryString;
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_17__["LocalStorageHelper"].setItem("additionalSearchStringKhamDoanDanhSachGoiKham", queryString);
                    this.grid.search();
                };
                KhamDoanGoiKhamSucKhoeListComponent.prototype.xuLyXuatExcel = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Process)) {
                        this.apiService.postExportExcel("KhamDoan/ExportDanhSachKhamSucKhoeDoan", this.grid._gridQueryInfo).subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_20__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "DSKhamSucKhoeDoan" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanGoiKhamSucKhoeListComponent.prototype.showPopupChiTiet = function (id, isCopy) {
                    if (id === void 0) { id = null; }
                    if (isCopy === void 0) { isCopy = false; }
                    var securityOperation = src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Add;
                    var url = '/them';
                    if (id != null) {
                        securityOperation = src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Update;
                        url = '/chi-tiet';
                    }
                    if (this.authService.hasPermission(this.documentType, securityOperation)) {
                        // this.router.navigate([this.baseRoute + url + (id == null ? '' : id)]);
                        this.router.navigate([this.baseRoute + url], { queryParams: { Id: id, IsCopy: isCopy } });
                        // this.dialog.open(KhamDoanGoiKhamSucKhoeDetailPopupComponent, {
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
                };
                KhamDoanGoiKhamSucKhoeListComponent.prototype.xoa = function (Id) {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Delete)) {
                        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_20__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__["SystemMessage"].MessConfirm, ["xóa"]) }
                        }).afterClosed().subscribe(function (result) {
                            if (result == "Yes") {
                                _this.apiService.post("KhamDoan/XoaGoiKhamSucKhoeDoan?id=" + Id).subscribe(function () {
                                    _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_20__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__["SystemMessage"].ActionSuccessfully, ["Xóa"]));
                                    _this.grid.search();
                                }, function (err) {
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                return KhamDoanGoiKhamSucKhoeListComponent;
            }());
            KhamDoanGoiKhamSucKhoeListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_15__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maGoiKhamTemplate', { static: true })
            ], KhamDoanGoiKhamSucKhoeListComponent.prototype, "maGoiKhamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayHieuLucTemplate', { static: true })
            ], KhamDoanGoiKhamSucKhoeListComponent.prototype, "ngayHieuLucTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayKetThucTemplate', { static: true })
            ], KhamDoanGoiKhamSucKhoeListComponent.prototype, "ngayKetThucTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], KhamDoanGoiKhamSucKhoeListComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('grid', { static: true })
            ], KhamDoanGoiKhamSucKhoeListComponent.prototype, "grid", void 0);
            KhamDoanGoiKhamSucKhoeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-kham-doan-goi-kham-suc-khoe-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-goi-kham-suc-khoe-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-list/kham-doan-goi-kham-suc-khoe-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-goi-kham-suc-khoe-list.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-list/kham-doan-goi-kham-suc-khoe-list.component.scss")).default]
                })
            ], KhamDoanGoiKhamSucKhoeListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-routing.module.ts": 
        /*!******************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-routing.module.ts ***!
          \******************************************************************************************************************/
        /*! exports provided: KhamDoanGoiKhamSucKhoeRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanGoiKhamSucKhoeRoutingModule", function () { return KhamDoanGoiKhamSucKhoeRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _kham_doan_goi_kham_suc_khoe_detail_popup_kham_doan_goi_kham_suc_khoe_detail_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kham-doan-goi-kham-suc-khoe-detail-popup/kham-doan-goi-kham-suc-khoe-detail-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-detail-popup/kham-doan-goi-kham-suc-khoe-detail-popup.component.ts");
            /* harmony import */ var _kham_doan_goi_kham_suc_khoe_list_kham_doan_goi_kham_suc_khoe_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kham-doan-goi-kham-suc-khoe-list/kham-doan-goi-kham-suc-khoe-list.component */ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-list/kham-doan-goi-kham-suc-khoe-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _kham_doan_goi_kham_suc_khoe_list_kham_doan_goi_kham_suc_khoe_list_component__WEBPACK_IMPORTED_MODULE_7__["KhamDoanGoiKhamSucKhoeListComponent"],
                    data: {
                        title: "Gói khám sức khỏe",
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanGoiKhamSucKhoe,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                },
                {
                    path: 'them',
                    component: _kham_doan_goi_kham_suc_khoe_detail_popup_kham_doan_goi_kham_suc_khoe_detail_popup_component__WEBPACK_IMPORTED_MODULE_6__["KhamDoanGoiKhamSucKhoeDetailPopupComponent"],
                    data: {
                        title: 'Thêm gói khám sức khỏe',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanGoiKhamSucKhoe,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                },
                {
                    path: 'chi-tiet',
                    component: _kham_doan_goi_kham_suc_khoe_detail_popup_kham_doan_goi_kham_suc_khoe_detail_popup_component__WEBPACK_IMPORTED_MODULE_6__["KhamDoanGoiKhamSucKhoeDetailPopupComponent"],
                    data: {
                        title: 'Chi tiết gói khám sức khỏe',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanGoiKhamSucKhoe,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                }
            ];
            var KhamDoanGoiKhamSucKhoeRoutingModule = /** @class */ (function () {
                function KhamDoanGoiKhamSucKhoeRoutingModule() {
                }
                return KhamDoanGoiKhamSucKhoeRoutingModule;
            }());
            KhamDoanGoiKhamSucKhoeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], KhamDoanGoiKhamSucKhoeRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe.module.ts": 
        /*!**********************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe.module.ts ***!
          \**********************************************************************************************************/
        /*! exports provided: KhamDoanGoiKhamSucKhoeModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanGoiKhamSucKhoeModule", function () { return KhamDoanGoiKhamSucKhoeModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _kham_doan_goi_kham_suc_khoe_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kham-doan-goi-kham-suc-khoe-routing.module */ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-routing.module.ts");
            /* harmony import */ var _kham_doan_goi_kham_suc_khoe_list_kham_doan_goi_kham_suc_khoe_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kham-doan-goi-kham-suc-khoe-list/kham-doan-goi-kham-suc-khoe-list.component */ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-list/kham-doan-goi-kham-suc-khoe-list.component.ts");
            /* harmony import */ var _kham_doan_goi_kham_suc_khoe_detail_popup_kham_doan_goi_kham_suc_khoe_detail_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kham-doan-goi-kham-suc-khoe-detail-popup/kham-doan-goi-kham-suc-khoe-detail-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-detail-popup/kham-doan-goi-kham-suc-khoe-detail-popup.component.ts");
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
            /* harmony import */ var _kham_doan_goi_kham_suc_khoe_chon_file_popup_kham_doan_goi_kham_suc_khoe_chon_file_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./kham-doan-goi-kham-suc-khoe-chon-file-popup/kham-doan-goi-kham-suc-khoe-chon-file-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-chon-file-popup/kham-doan-goi-kham-suc-khoe-chon-file-popup.component.ts");
            /* harmony import */ var _kham_doan_goi_kham_popup_kham_doan_goi_kham_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./kham-doan-goi-kham-popup/kham-doan-goi-kham-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-popup/kham-doan-goi-kham-popup.component.ts");
            /* harmony import */ var _kham_doan_goi_kham_suc_chung_kham_doan_goi_kham_suc_chung_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./kham-doan-goi-kham-suc-chung/kham-doan-goi-kham-suc-chung.component */ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-chung/kham-doan-goi-kham-suc-chung.component.ts");
            var KhamDoanGoiKhamSucKhoeModule = /** @class */ (function () {
                function KhamDoanGoiKhamSucKhoeModule() {
                }
                return KhamDoanGoiKhamSucKhoeModule;
            }());
            KhamDoanGoiKhamSucKhoeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _kham_doan_goi_kham_suc_khoe_list_kham_doan_goi_kham_suc_khoe_list_component__WEBPACK_IMPORTED_MODULE_4__["KhamDoanGoiKhamSucKhoeListComponent"],
                        _kham_doan_goi_kham_suc_khoe_detail_popup_kham_doan_goi_kham_suc_khoe_detail_popup_component__WEBPACK_IMPORTED_MODULE_5__["KhamDoanGoiKhamSucKhoeDetailPopupComponent"],
                        _kham_doan_goi_kham_suc_khoe_chon_file_popup_kham_doan_goi_kham_suc_khoe_chon_file_popup_component__WEBPACK_IMPORTED_MODULE_18__["KhamDoanGoiKhamSucKhoeChonFilePopupComponent"],
                        _kham_doan_goi_kham_popup_kham_doan_goi_kham_popup_component__WEBPACK_IMPORTED_MODULE_19__["GoiKhamViewPopupComponent"],
                        _kham_doan_goi_kham_suc_chung_kham_doan_goi_kham_suc_chung_component__WEBPACK_IMPORTED_MODULE_20__["KhamDoanGoiKhamSucKhoeChungComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _kham_doan_goi_kham_suc_khoe_routing_module__WEBPACK_IMPORTED_MODULE_3__["KhamDoanGoiKhamSucKhoeRoutingModule"],
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
                        _kham_doan_goi_kham_suc_khoe_detail_popup_kham_doan_goi_kham_suc_khoe_detail_popup_component__WEBPACK_IMPORTED_MODULE_5__["KhamDoanGoiKhamSucKhoeDetailPopupComponent"],
                        _kham_doan_goi_kham_suc_khoe_chon_file_popup_kham_doan_goi_kham_suc_khoe_chon_file_popup_component__WEBPACK_IMPORTED_MODULE_18__["KhamDoanGoiKhamSucKhoeChonFilePopupComponent"],
                        _kham_doan_goi_kham_popup_kham_doan_goi_kham_popup_component__WEBPACK_IMPORTED_MODULE_19__["GoiKhamViewPopupComponent"]
                    ]
                })
            ], KhamDoanGoiKhamSucKhoeModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/danh-sach-phong-kham-cong-ty-popup/danh-sach-phong-kham-cong-ty-popup.component.scss": 
        /*!*****************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/danh-sach-phong-kham-cong-ty-popup/danh-sach-phong-kham-cong-ty-popup.component.scss ***!
          \*****************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWhvcC1kb25nLWtoYW0vZGFuaC1zYWNoLXBob25nLWtoYW0tY29uZy10eS1wb3B1cC9kYW5oLXNhY2gtcGhvbmcta2hhbS1jb25nLXR5LXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/danh-sach-phong-kham-cong-ty-popup/danh-sach-phong-kham-cong-ty-popup.component.ts": 
        /*!***************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/danh-sach-phong-kham-cong-ty-popup/danh-sach-phong-kham-cong-ty-popup.component.ts ***!
          \***************************************************************************************************************************************************/
        /*! exports provided: DanhSachPhongKhamCongTyComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachPhongKhamCongTyComponent", function () { return DanhSachPhongKhamCongTyComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-clear */ "./node_modules/@iconify/icons-ic/twotone-clear.js");
            /* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _kham_doan_hop_dong_kham_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../kham-doan-hop-dong-kham.model */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham.model.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            var DanhSachPhongKhamCongTyComponent = /** @class */ (function () {
                function DanhSachPhongKhamCongTyComponent(dialog, dialogRef, cdRef, authService, cd, notificationService, data, apiService, router, route) {
                    this.dialog = dialog;
                    this.dialogRef = dialogRef;
                    this.cdRef = cdRef;
                    this.authService = authService;
                    this.cd = cd;
                    this.notificationService = notificationService;
                    this.data = data;
                    this.apiService = apiService;
                    this.router = router;
                    this.route = route;
                    this.danhSachPhongTaiCongTy = new _kham_doan_hop_dong_kham_model__WEBPACK_IMPORTED_MODULE_12__["DanhSachPhongTaiCongTy"]();
                    this.Title = "Thêm phòng";
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
                    this.icClear = _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.validationErrors = [];
                }
                DanhSachPhongKhamCongTyComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_15__["DocumentType"].KhamDoanHopDongKham;
                    this.hopDongKhamSucKhoeId = this.data.hopDongKhamSucKhoeId;
                    this.id = this.data.dataDSCongTy.Id;
                    if (this.id != 0) {
                        this.danhSachPhongTaiCongTy.Ma = this.data.dataDSCongTy.MaPhong;
                        this.danhSachPhongTaiCongTy.Ten = this.data.dataDSCongTy.TenPhong;
                        this.danhSachPhongTaiCongTy.Tang = this.data.dataDSCongTy.GhiChu;
                        this.danhSachPhongTaiCongTy.DanhSachNhanSu = this.data.dataDSCongTy.DanhSachNhanSu;
                    }
                };
                DanhSachPhongKhamCongTyComponent.prototype.showPopupLoadingData = function () {
                    if (this.popupLoadingData == undefined
                        || this.popupLoadingData == null
                        || this.popupLoadingData.openDialogs == undefined
                        || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"], {
                            disableClose: true,
                            width: "200px",
                            height: "90px",
                            data: { Title: "Đang tải dữ liệu..." },
                        });
                    }
                };
                DanhSachPhongKhamCongTyComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                DanhSachPhongKhamCongTyComponent.prototype.createOrUpdate = function () {
                    var _this = this;
                    var mess = "Bạn có chắc chắn muốn tạo phòng khám công ty này không?";
                    if (this.id != 0) {
                        mess = "Bạn có chắc chắn muốn sửa phòng khám công ty này không?";
                        this.danhSachPhongTaiCongTy.Id = this.id;
                    }
                    var securityOperation = src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Add;
                    this.danhSachPhongTaiCongTy.HopDongKhamSucKhoeId = this.hopDongKhamSucKhoeId;
                    if (this.authService.hasPermission(this.documentType, securityOperation)) {
                        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "Xác nhận", Message: mess }
                        }).afterClosed().subscribe(function (result) {
                            if (result == "Yes") {
                                _this.showPopupLoadingData();
                                _this.apiService.post("KhamDoan/ThemHoacSuaDanhSachPhongKhamTaiCongTy", _this.danhSachPhongTaiCongTy).subscribe(function (res) {
                                    if (res != 0) {
                                        _this.dialogRef.close("Yes");
                                        _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                        _this.closePopupLoadingData();
                                    }
                                }, function (err) {
                                    _this.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                    _this.closePopupLoadingData();
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DanhSachPhongKhamCongTyComponent.prototype.changeMultiDanhSachNhanSu = function (ev) {
                };
                DanhSachPhongKhamCongTyComponent.prototype.closeChangeDanhSachNhanSu = function (ev) {
                };
                DanhSachPhongKhamCongTyComponent.prototype.close = function (result) {
                    if (result === void 0) { result = null; }
                };
                return DanhSachPhongKhamCongTyComponent;
            }());
            DanhSachPhongKhamCongTyComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
            ]; };
            DanhSachPhongKhamCongTyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'danh-sach-phong-kham-cong-ty-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./danh-sach-phong-kham-cong-ty-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/danh-sach-phong-kham-cong-ty-popup/danh-sach-phong-kham-cong-ty-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./danh-sach-phong-kham-cong-ty-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/danh-sach-phong-kham-cong-ty-popup/danh-sach-phong-kham-cong-ty-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
            ], DanhSachPhongKhamCongTyComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/goi-kham-suc-khoe-chon-file-popup/goi-kham-suc-khoe-chon-file-popup.component.scss": 
        /*!***************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/goi-kham-suc-khoe-chon-file-popup/goi-kham-suc-khoe-chon-file-popup.component.scss ***!
          \***************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWhvcC1kb25nLWtoYW0vZ29pLWtoYW0tc3VjLWtob2UtY2hvbi1maWxlLXBvcHVwL2dvaS1raGFtLXN1Yy1raG9lLWNob24tZmlsZS1wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/goi-kham-suc-khoe-chon-file-popup/goi-kham-suc-khoe-chon-file-popup.component.ts": 
        /*!*************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/goi-kham-suc-khoe-chon-file-popup/goi-kham-suc-khoe-chon-file-popup.component.ts ***!
          \*************************************************************************************************************************************************/
        /*! exports provided: HopDongKhamChonGoiKhamFilePopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HopDongKhamChonGoiKhamFilePopupComponent", function () { return HopDongKhamChonGoiKhamFilePopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-clear */ "./node_modules/@iconify/icons-ic/twotone-clear.js");
            /* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var _kham_doan_goi_kham_suc_khoe_kham_doan_goi_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe.model */ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe.model.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            var HopDongKhamChonGoiKhamFilePopupComponent = /** @class */ (function () {
                function HopDongKhamChonGoiKhamFilePopupComponent(dialog, dialogRef, cdRef, authService, cd, notificationService, data, apiService, router, route) {
                    this.dialog = dialog;
                    this.dialogRef = dialogRef;
                    this.cdRef = cdRef;
                    this.authService = authService;
                    this.cd = cd;
                    this.notificationService = notificationService;
                    this.data = data;
                    this.apiService = apiService;
                    this.router = router;
                    this.route = route;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
                    this.icClear = _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.validationErrors = [];
                    this.allowedExtensions = ['.xlsx', '.xls'];
                    this.invalidFileExtensionMess = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].InvalidFileExtension, [this.allowedExtensions.toString()]);
                    this.file = new _kham_doan_goi_kham_suc_khoe_kham_doan_goi_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_7__["FileExcelDichVu"]();
                    this.fileExcel = null;
                }
                HopDongKhamChonGoiKhamFilePopupComponent.prototype.ngOnInit = function () {
                    this.hopDongKhamSucKhoeId = this.data.hopDongKhamSucKhoeId;
                };
                HopDongKhamChonGoiKhamFilePopupComponent.prototype.showPopupLoadingData = function () {
                    if (this.popupLoadingData == undefined
                        || this.popupLoadingData == null
                        || this.popupLoadingData.openDialogs == undefined
                        || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
                            disableClose: true,
                            width: "200px",
                            height: "90px",
                            data: { Title: "Đang tải dữ liệu..." },
                        });
                    }
                };
                HopDongKhamChonGoiKhamFilePopupComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                HopDongKhamChonGoiKhamFilePopupComponent.prototype.uploadFileDone = function (event) {
                    this.fileExcel = event;
                    this.cdRef.detectChanges();
                };
                HopDongKhamChonGoiKhamFilePopupComponent.prototype.xuLyFile = function () {
                    var _this = this;
                    var self = this;
                    if (this.fileExcel != undefined && this.fileExcel != null) {
                        this.showLoadingPopup();
                        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpParams"]({
                            fromObject: {
                                tenGuid: this.fileExcel.TenGuid,
                                duongDan: "hapu.tmp",
                                hopDongKhamSucKhoeId: this.hopDongKhamSucKhoeId,
                            },
                        });
                        self.apiService.get("KhamDoan/ImportGoiKham", params).subscribe(function (resp) {
                            if (resp) {
                                self.notificationService.showSuccess("Thêm gói khám thành công");
                                _this.closeAllDialogs();
                                _this.dialogRef.close(resp);
                            }
                        }, function (err) {
                            self.notificationService.showError(err.Message);
                            _this.closeAllDialogs();
                        });
                    }
                };
                HopDongKhamChonGoiKhamFilePopupComponent.prototype.TaiFileMau = function () {
                    var self = this;
                    self.apiService.postExportExcel('KhamDoan/DownloadTemplateGoiKham').subscribe(function (resultData) {
                        src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'TemplateGoiKham.xlsx');
                    }, function (err) {
                        self.notificationService.showError(err.Message);
                    });
                };
                HopDongKhamChonGoiKhamFilePopupComponent.prototype.close = function (result) {
                    if (result === void 0) { result = null; }
                    this.dialogRef.close(result);
                };
                HopDongKhamChonGoiKhamFilePopupComponent.prototype.showLoadingPopup = function () {
                    if (!this.loadingPopup) {
                        this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang tải...' }
                        });
                    }
                };
                HopDongKhamChonGoiKhamFilePopupComponent.prototype.showSavingPopup = function () {
                    if (!this.loadingPopup) {
                        this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang lưu...' }
                        });
                    }
                };
                HopDongKhamChonGoiKhamFilePopupComponent.prototype.closeAllDialogs = function () {
                    if (this.loadingPopup) {
                        this.loadingPopup.close();
                        this.loadingPopup = null;
                    }
                };
                return HopDongKhamChonGoiKhamFilePopupComponent;
            }());
            HopDongKhamChonGoiKhamFilePopupComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
            ]; };
            HopDongKhamChonGoiKhamFilePopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'goi-kham-suc-khoe-chon-file-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./goi-kham-suc-khoe-chon-file-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/goi-kham-suc-khoe-chon-file-popup/goi-kham-suc-khoe-chon-file-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./goi-kham-suc-khoe-chon-file-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/goi-kham-suc-khoe-chon-file-popup/goi-kham-suc-khoe-chon-file-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
            ], HopDongKhamChonGoiKhamFilePopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-dv-goi-kham-popup/kham-doan-dv-goi-kham-popup.component.scss": 
        /*!***************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-dv-goi-kham-popup/kham-doan-dv-goi-kham-popup.component.scss ***!
          \***************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWhvcC1kb25nLWtoYW0va2hhbS1kb2FuLWR2LWdvaS1raGFtLXBvcHVwL2toYW0tZG9hbi1kdi1nb2kta2hhbS1wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-dv-goi-kham-popup/kham-doan-dv-goi-kham-popup.component.ts": 
        /*!*************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-dv-goi-kham-popup/kham-doan-dv-goi-kham-popup.component.ts ***!
          \*************************************************************************************************************************************/
        /*! exports provided: KhamDoanDvGoiKhamPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanDvGoiKhamPopupComponent", function () { return KhamDoanDvGoiKhamPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _kham_doan_hop_dong_kham_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../kham-doan-hop-dong-kham.model */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham.model.ts");
            var KhamDoanDvGoiKhamPopupComponent = /** @class */ (function () {
                function KhamDoanDvGoiKhamPopupComponent(data, dialogRef) {
                    this.data = data;
                    this.dialogRef = dialogRef;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanHopDongKham;
                    this.dichVuKhamDoanChiTiet = new _kham_doan_hop_dong_kham_model__WEBPACK_IMPORTED_MODULE_5__["DichVuKhamDoanChiTiet"]();
                    this.gridDichVuKhamDoanColumns = [];
                    this.dataToSumThanhTien = [];
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
                    this.title = null;
                    this.laDichVuTrongGoi = false;
                    this.goiKhamSucKhoeId = null;
                    this.yeuCauTiepNhanId = null;
                    this.benhNhanId = 0;
                    this.additionalSearchString = null;
                    this.sort = [
                        {
                            field: "Nhom",
                            dir: "desc"
                        }
                    ];
                    this.groups = [{ field: 'Nhom', aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }] }];
                }
                KhamDoanDvGoiKhamPopupComponent.prototype.totalThanhTien = function (field) {
                    switch (field) {
                        case 'ThanhTien':
                            return this.dataToSumThanhTien.reduce(function (sum, item) { return sum + item.ThanhTien; }, 0);
                    }
                };
                ;
                KhamDoanDvGoiKhamPopupComponent.prototype.ngOnInit = function () {
                    this.title = this.data.Title;
                    // if (this.data.LaDichVuTrongGoi) {
                    //   this.dichVuKhamDoanChiTiet.LaDichVuTrongGoi = this.data.LaDichVuTrongGoi;
                    //   this.dichVuKhamDoanChiTiet.GoiKhamSucKhoeIds = this.data.GoiKhamSucKhoeIds;
                    //   this.dichVuKhamDoanChiTiet.YeuCauTiepNhanId = this.data.YeuCauTiepNhanId;
                    //   this.dichVuKhamDoanChiTiet.BenhNhanId = this.data.BenhNhanId;
                    //   // this.laDichVuTrongGoi = this.data.LaDichVuTrongGoi;
                    //   // this.goiKhamSucKhoeId = this.data.GoiKhamSucKhoeId;
                    //   // this.yeuCauTiepNhanId = this.data.YeuCauTiepNhanId;
                    //   // this.benhNhanId = this.data.BenhNhanId;
                    //   // this.additionalSearchString = this.goiKhamSucKhoeId + ";" + this.laDichVuTrongGoi + ";" + this.yeuCauTiepNhanId + ";" + this.benhNhanId + ";";
                    // } else {
                    //   this.laDichVuTrongGoi = this.data.LaDichVuTrongGoi;
                    //   this.yeuCauTiepNhanId = this.data.YeuCauTiepNhanId;
                    //   this.benhNhanId = this.data.BenhNhanId;
                    // }
                    // this.additionalSearchString = this.goiKhamSucKhoeId + ";" + this.laDichVuTrongGoi + ";" + this.yeuCauTiepNhanId + ";" + this.benhNhanId + ";";
                    this.dichVuKhamDoanChiTiet.LaDichVuTrongGoi = this.data.LaDichVuTrongGoi;
                    if (this.data.LaDichVuTrongGoi) {
                        this.dichVuKhamDoanChiTiet.GoiKhamSucKhoeIds = this.data.GoiKhamSucKhoeIds;
                    }
                    this.dichVuKhamDoanChiTiet.YeuCauTiepNhanId = this.data.YeuCauTiepNhanId;
                    this.dichVuKhamDoanChiTiet.BenhNhanId = this.data.BenhNhanId;
                    this.additionalSearchString = JSON.stringify(this.dichVuKhamDoanChiTiet);
                    this.gridDichVuKhamDoanColumns = [
                        { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "MaDichVu", Title: "Mã DV", Width: 50, Sortable: false, ShowTooltip: true },
                        { Field: "TenDichVu", Title: "Tên DV", Width: 100, Sortable: false, ShowTooltip: true },
                        { Field: "LoaiGia", Title: "Loại giá", Width: 50, Sortable: false },
                        { Field: "SoLuong", Title: "SL", Width: 50, Sortable: false },
                        { Field: "DonGiaUuDai", Title: "Đơn giá", Width: 70, Sortable: false, TemplateFooter: this.donGiaFooterTemplate, Template: this.donGiaTemplate, },
                        { Field: "ThanhTien", Title: "Thành tiền", Width: 80, Sortable: false, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterTemplate, TemplateGroupFooter: this.thanhTienGroupFooterTemplate },
                        { Field: "NoiThucHien", Title: "Nơi thực hiện", Width: 80, Sortable: false, ShowTooltip: true },
                        { Field: "TrangThaiYeuCauKhamBenh", Title: "Tình trạng", Width: 80, Sortable: false, Template: this.trangThaiTemplate },
                    ];
                };
                KhamDoanDvGoiKhamPopupComponent.prototype.onDataBoundChild = function (data) {
                    this.dataToSumThanhTien = data.Data;
                };
                return KhamDoanDvGoiKhamPopupComponent;
            }());
            KhamDoanDvGoiKhamPopupComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaTemplate', { static: true })
            ], KhamDoanDvGoiKhamPopupComponent.prototype, "donGiaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaFooterTemplate', { static: true })
            ], KhamDoanDvGoiKhamPopupComponent.prototype, "donGiaFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
            ], KhamDoanDvGoiKhamPopupComponent.prototype, "thanhTienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienGroupFooterTemplate', { static: true })
            ], KhamDoanDvGoiKhamPopupComponent.prototype, "thanhTienGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienFooterTemplate', { static: true })
            ], KhamDoanDvGoiKhamPopupComponent.prototype, "thanhTienFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
            ], KhamDoanDvGoiKhamPopupComponent.prototype, "trangThaiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], KhamDoanDvGoiKhamPopupComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            KhamDoanDvGoiKhamPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-kham-doan-dv-goi-kham-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-dv-goi-kham-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-dv-goi-kham-popup/kham-doan-dv-goi-kham-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-dv-goi-kham-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-dv-goi-kham-popup/kham-doan-dv-goi-kham-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
            ], KhamDoanDvGoiKhamPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-dv-thong-ke-popup/kham-doan-dv-thong-ke-popup.component.scss": 
        /*!***************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-dv-thong-ke-popup/kham-doan-dv-thong-ke-popup.component.scss ***!
          \***************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWhvcC1kb25nLWtoYW0va2hhbS1kb2FuLWR2LXRob25nLWtlLXBvcHVwL2toYW0tZG9hbi1kdi10aG9uZy1rZS1wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-dv-thong-ke-popup/kham-doan-dv-thong-ke-popup.component.ts": 
        /*!*************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-dv-thong-ke-popup/kham-doan-dv-thong-ke-popup.component.ts ***!
          \*************************************************************************************************************************************/
        /*! exports provided: KhamDoanDvThongKePopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanDvThongKePopupComponent", function () { return KhamDoanDvThongKePopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _kham_doan_dv_goi_kham_popup_kham_doan_dv_goi_kham_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../kham-doan-dv-goi-kham-popup/kham-doan-dv-goi-kham-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-dv-goi-kham-popup/kham-doan-dv-goi-kham-popup.component.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _kham_doan_hop_dong_kham_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../kham-doan-hop-dong-kham.model */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham.model.ts");
            var KhamDoanDvThongKePopupComponent = /** @class */ (function () {
                function KhamDoanDvThongKePopupComponent(apiService, authService, notificationService, dialog, data, dialogRef) {
                    this.apiService = apiService;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.dialog = dialog;
                    this.data = data;
                    this.dialogRef = dialogRef;
                    this.xuatFileExcelTrongGoiHoacNgoaiGoi = new _kham_doan_hop_dong_kham_model__WEBPACK_IMPORTED_MODULE_13__["XuatFileExcelTrongGoiHoacNgoaiGoi"]();
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
                    this.disabled = null;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].KhamDoanHopDongKham;
                    this.gridDichVuKhamDoanColumns = [];
                    this.dataToSumChiPhi = [];
                    this.sort = [
                        {
                            field: "Id",
                            dir: "asc"
                        }
                    ];
                }
                KhamDoanDvThongKePopupComponent.prototype.totalTongChiPhi = function (field) {
                    switch (field) {
                        case 'TongChiPhiTrongGoi':
                            return this.dataToSumChiPhi.reduce(function (sum, item) { return sum + item.TongChiPhiTrongGoi; }, 0);
                        case 'TongChiPhiNgoaiGoi':
                            return this.dataToSumChiPhi.reduce(function (sum, item) { return sum + item.TongChiPhiNgoaiGoi; }, 0);
                    }
                };
                ;
                KhamDoanDvThongKePopupComponent.prototype.ngOnInit = function () {
                    this.loadingPage();
                    this.hopDongKhamSucKhoeId = parseInt(this.data.HopDongKhamSucKhoeId);
                    this.gridDichVuKhamDoanColumns = [
                        { Field: "MaBN", Title: "Mã NB", Width: 50, Sortable: false, ShowTooltip: true },
                        { Field: "HoTen", Title: "Họ Tên", Width: 100, Sortable: false, ShowTooltip: true },
                        { Field: "GioiTinh", Title: "Giới tính", Width: 50, Sortable: false },
                        { Field: "NamSinh", Title: "Năm sinh", Width: 50, Sortable: false },
                        { Field: "CMND", Title: "CMND", Width: 70, Sortable: false, TemplateFooter: this.tongChiFooterTemplate },
                        { Field: "TongChiPhiTrongGoi", Title: "Tổng chi phí trong gói", Width: 80, Sortable: false, Template: this.tongChiTrongGoiTemplate, TemplateFooter: this.tongChiTrongGoiFooterTemplate, TemplateGroupFooter: this.tongChiTrongGoiGroupFooterTemplate },
                        { Field: "TongChiPhiNgoaiGoi", Title: "Tổng chi phí ngoài gói", Width: 80, Sortable: false, Template: this.tongChiNgoaiGoiTemplate, TemplateFooter: this.tongChiNgoaiGoiFooterTemplate, TemplateGroupFooter: this.tongChiNgoaiGoiGroupFooterTemplate },
                    ];
                };
                KhamDoanDvThongKePopupComponent.prototype.chiTietTrongGoi = function (goiKhamSucKhoeIds, yeuCauTiepNhanId, benhNhanId) {
                    this.dialog.open(_kham_doan_dv_goi_kham_popup_kham_doan_dv_goi_kham_popup_component__WEBPACK_IMPORTED_MODULE_10__["KhamDoanDvGoiKhamPopupComponent"], {
                        width: "1400px",
                        disableClose: true,
                        data: { GoiKhamSucKhoeIds: goiKhamSucKhoeIds, YeuCauTiepNhanId: yeuCauTiepNhanId, BenhNhanId: benhNhanId, Title: "TỔNG CHI PHÍ TRONG GÓI", LaDichVuTrongGoi: true }
                    }).afterClosed().subscribe(function () {
                    });
                };
                KhamDoanDvThongKePopupComponent.prototype.chiTietNgoaiGoi = function (yeuCauTiepNhanId, benhNhanId) {
                    this.dialog.open(_kham_doan_dv_goi_kham_popup_kham_doan_dv_goi_kham_popup_component__WEBPACK_IMPORTED_MODULE_10__["KhamDoanDvGoiKhamPopupComponent"], {
                        width: "1400px",
                        disableClose: true,
                        data: { YeuCauTiepNhanId: yeuCauTiepNhanId, BenhNhanId: benhNhanId, Title: "TỔNG CHI PHÍ NGOÀI GÓI", LaDichVuTrongGoi: false }
                    }).afterClosed().subscribe(function () {
                    });
                };
                KhamDoanDvThongKePopupComponent.prototype.onDataBoundChild = function (data) {
                    this.closePopupLoadingData();
                    this.dataToSumChiPhi = data.Data;
                    if (data.Data.some(function (item) { return item.TongChiPhiNgoaiGoi != 0; })) {
                        this.disabled = true;
                    }
                    else {
                        this.disabled = false;
                    }
                };
                KhamDoanDvThongKePopupComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang tải dữ liệu..." },
                    });
                };
                KhamDoanDvThongKePopupComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                KhamDoanDvThongKePopupComponent.prototype.xuatExcel = function (laDichVuTrongGoi) {
                    var _this = this;
                    var dia = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Process)) {
                        if (laDichVuTrongGoi) {
                            this.xuatFileExcelTrongGoiHoacNgoaiGoi.HopDongKhamSucKhoeId = this.hopDongKhamSucKhoeId;
                            this.xuatFileExcelTrongGoiHoacNgoaiGoi.LaDichVuTrongGoi = laDichVuTrongGoi;
                        }
                        else {
                            this.xuatFileExcelTrongGoiHoacNgoaiGoi.HopDongKhamSucKhoeId = this.hopDongKhamSucKhoeId;
                            this.xuatFileExcelTrongGoiHoacNgoaiGoi.LaDichVuTrongGoi = laDichVuTrongGoi;
                        }
                        this.apiService.postExportExcel("KhamDoan/XuatFileExcelTrongGoi", this.xuatFileExcelTrongGoiHoacNgoaiGoi).subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "TongHopChiPhiKetQuaKSKTheoHopDong" + dateTimeNow.getFullYear() + ".xlsx");
                            dia.close();
                            // this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            // this.dialog.closeAll();
                            dia.close();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                return KhamDoanDvThongKePopupComponent;
            }());
            KhamDoanDvThongKePopupComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongChiFooterTemplate', { static: true })
            ], KhamDoanDvThongKePopupComponent.prototype, "tongChiFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongChiTrongGoiTemplate', { static: true })
            ], KhamDoanDvThongKePopupComponent.prototype, "tongChiTrongGoiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongChiNgoaiGoiTemplate', { static: true })
            ], KhamDoanDvThongKePopupComponent.prototype, "tongChiNgoaiGoiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongChiTrongGoiGroupFooterTemplate', { static: true })
            ], KhamDoanDvThongKePopupComponent.prototype, "tongChiTrongGoiGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongChiNgoaiGoiGroupFooterTemplate', { static: true })
            ], KhamDoanDvThongKePopupComponent.prototype, "tongChiNgoaiGoiGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongChiTrongGoiFooterTemplate', { static: true })
            ], KhamDoanDvThongKePopupComponent.prototype, "tongChiTrongGoiFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongChiNgoaiGoiFooterTemplate', { static: true })
            ], KhamDoanDvThongKePopupComponent.prototype, "tongChiNgoaiGoiFooterTemplate", void 0);
            KhamDoanDvThongKePopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-kham-doan-dv-thong-ke-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-dv-thong-ke-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-dv-thong-ke-popup/kham-doan-dv-thong-ke-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-dv-thong-ke-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-dv-thong-ke-popup/kham-doan-dv-thong-ke-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
            ], KhamDoanDvThongKePopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-chon-file-popup/kham-doan-hop-dong-kham-chon-file-popup.component.scss": 
        /*!***************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-chon-file-popup/kham-doan-hop-dong-kham-chon-file-popup.component.scss ***!
          \***************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWhvcC1kb25nLWtoYW0va2hhbS1kb2FuLWhvcC1kb25nLWtoYW0tY2hvbi1maWxlLXBvcHVwL2toYW0tZG9hbi1ob3AtZG9uZy1raGFtLWNob24tZmlsZS1wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-chon-file-popup/kham-doan-hop-dong-kham-chon-file-popup.component.ts": 
        /*!*************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-chon-file-popup/kham-doan-hop-dong-kham-chon-file-popup.component.ts ***!
          \*************************************************************************************************************************************************************/
        /*! exports provided: KhamDoanHopDongKhamChonFilePopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanHopDongKhamChonFilePopupComponent", function () { return KhamDoanHopDongKhamChonFilePopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-clear */ "./node_modules/@iconify/icons-ic/twotone-clear.js");
            /* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _kham_doan_hop_dong_kham_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../kham-doan-hop-dong-kham.model */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham.model.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var KhamDoanHopDongKhamChonFilePopupComponent = /** @class */ (function () {
                function KhamDoanHopDongKhamChonFilePopupComponent(dialog, dialogRef, cdRef, data, notificationService, apiService, router, route) {
                    this.dialog = dialog;
                    this.dialogRef = dialogRef;
                    this.cdRef = cdRef;
                    this.data = data;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.router = router;
                    this.route = route;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.icClear = _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.validationErrors = [];
                    this.allowedExtensions = ['.xlsx', '.xls'];
                    this.invalidFileExtensionMess = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].InvalidFileExtension, [this.allowedExtensions.toString()]);
                    this.file = new _kham_doan_hop_dong_kham_model__WEBPACK_IMPORTED_MODULE_6__["FileExcelNhanVien"]();
                    this.fileExcel = null;
                }
                KhamDoanHopDongKhamChonFilePopupComponent.prototype.ngOnInit = function () {
                    this.hopDongKhamSucKhoeId = this.data.hopDongKhamSucKhoeId;
                };
                KhamDoanHopDongKhamChonFilePopupComponent.prototype.showPopupLoadingData = function () {
                    if (this.popupLoadingData == undefined
                        || this.popupLoadingData == null
                        || this.popupLoadingData.openDialogs == undefined
                        || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], {
                            disableClose: true,
                            width: "200px",
                            height: "90px",
                            data: { Title: "Đang tải dữ liệu..." },
                        });
                    }
                };
                KhamDoanHopDongKhamChonFilePopupComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                KhamDoanHopDongKhamChonFilePopupComponent.prototype.uploadFileDone = function (event) {
                    this.fileExcel = event;
                    this.cdRef.detectChanges();
                };
                KhamDoanHopDongKhamChonFilePopupComponent.prototype.TaiFileMau = function () {
                    var self = this;
                    self.apiService.postExportExcel('KhamDoan/DownloadTemplateNhanVienKSK').subscribe(function (resultData) {
                        src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'NhanVienKhamSucKhoe.xlsx');
                    }, function (err) {
                        self.notificationService.showError(err.Message);
                    });
                };
                KhamDoanHopDongKhamChonFilePopupComponent.prototype.close = function (result) {
                    if (result === void 0) { result = null; }
                    this.dialogRef.close(result);
                };
                KhamDoanHopDongKhamChonFilePopupComponent.prototype.xuLyFile = function () {
                    var _this = this;
                    var self = this;
                    if (this.fileExcel != undefined && this.fileExcel != null) {
                        this.showLoadingPopup();
                        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpParams"]({
                            fromObject: {
                                tenGuid: this.fileExcel.TenGuid,
                                duongDan: "hapu.tmp",
                                hopDongKhamSucKhoeId: this.hopDongKhamSucKhoeId,
                            },
                        });
                        self.apiService.get("KhamDoan/ImportNhanVien", params).subscribe(function (resp) {
                            if (resp) {
                                self.notificationService.showSuccess("Thêm nhân viên thành công");
                                _this.closeAllDialogs();
                                _this.dialogRef.close(resp);
                            }
                        }, function (err) {
                            self.notificationService.showError(err.Message);
                            _this.closeAllDialogs();
                        });
                    }
                };
                KhamDoanHopDongKhamChonFilePopupComponent.prototype.showLoadingPopup = function () {
                    if (!this.loadingPopup) {
                        this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang tải...' }
                        });
                    }
                };
                KhamDoanHopDongKhamChonFilePopupComponent.prototype.showSavingPopup = function () {
                    if (!this.loadingPopup) {
                        this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang lưu...' }
                        });
                    }
                };
                KhamDoanHopDongKhamChonFilePopupComponent.prototype.closeAllDialogs = function () {
                    if (this.loadingPopup) {
                        this.loadingPopup.close();
                        this.loadingPopup = null;
                    }
                };
                return KhamDoanHopDongKhamChonFilePopupComponent;
            }());
            KhamDoanHopDongKhamChonFilePopupComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }
            ]; };
            KhamDoanHopDongKhamChonFilePopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-kham-doan-hop-dong-kham-chon-file-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-hop-dong-kham-chon-file-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-chon-file-popup/kham-doan-hop-dong-kham-chon-file-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-hop-dong-kham-chon-file-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-chon-file-popup/kham-doan-hop-dong-kham-chon-file-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], KhamDoanHopDongKhamChonFilePopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-detail-popup/kham-doan-hop-dong-kham-detail-popup.component.scss": 
        /*!*********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-detail-popup/kham-doan-hop-dong-kham-detail-popup.component.scss ***!
          \*********************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".po-h {\n  color: #005dab;\n  position: relative;\n  top: 5px;\n  left: 5px;\n}\n\n.po-h mat-icon {\n  display: contents;\n}\n\n.po-h-tn {\n  margin-left: auto;\n  color: #005dab;\n  position: relative;\n  left: 5px;\n}\n\n.po-h-tn mat-icon {\n  display: contents;\n  font-size: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4taG9wLWRvbmcta2hhbS9raGFtLWRvYW4taG9wLWRvbmcta2hhbS1kZXRhaWwtcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxraGFtLWRvYW5cXGtoYW0tZG9hbi1ob3AtZG9uZy1raGFtXFxraGFtLWRvYW4taG9wLWRvbmcta2hhbS1kZXRhaWwtcG9wdXBcXGtoYW0tZG9hbi1ob3AtZG9uZy1raGFtLWRldGFpbC1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4taG9wLWRvbmcta2hhbS9raGFtLWRvYW4taG9wLWRvbmcta2hhbS1kZXRhaWwtcG9wdXAva2hhbS1kb2FuLWhvcC1kb25nLWtoYW0tZGV0YWlsLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4taG9wLWRvbmcta2hhbS9raGFtLWRvYW4taG9wLWRvbmcta2hhbS1kZXRhaWwtcG9wdXAva2hhbS1kb2FuLWhvcC1kb25nLWtoYW0tZGV0YWlsLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvLWgge1xuICBjb2xvcjogIzAwNWRhYjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDVweDtcbiAgbGVmdDogNXB4O1xufVxuXG4ucG8taCBtYXQtaWNvbiB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuXG4ucG8taC10biB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBjb2xvcjogIzAwNWRhYjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1cHg7XG59XG5cbi5wby1oLXRuIG1hdC1pY29uIHtcbiAgZGlzcGxheTogY29udGVudHM7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn0iLCIucG8taCB7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiA1cHg7XG59XG5cbi5wby1oIG1hdC1pY29uIHtcbiAgZGlzcGxheTogY29udGVudHM7XG59XG5cbi5wby1oLXRuIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDVweDtcbn1cblxuLnBvLWgtdG4gbWF0LWljb24ge1xuICBkaXNwbGF5OiBjb250ZW50cztcbiAgZm9udC1zaXplOiAzNXB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-detail-popup/kham-doan-hop-dong-kham-detail-popup.component.ts": 
        /*!*******************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-detail-popup/kham-doan-hop-dong-kham-detail-popup.component.ts ***!
          \*******************************************************************************************************************************************************/
        /*! exports provided: KhamDoanHopDongKhamDetailPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanHopDongKhamDetailPopupComponent", function () { return KhamDoanHopDongKhamDetailPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _iconify_icons_ic_add_circle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/add-circle */ "./node_modules/@iconify/icons-ic/add-circle.js");
            /* harmony import */ var _iconify_icons_ic_add_circle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_add_circle__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _kham_doan_hop_dong_kham_chon_file_popup_kham_doan_hop_dong_kham_chon_file_popup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../kham-doan-hop-dong-kham-chon-file-popup/kham-doan-hop-dong-kham-chon-file-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-chon-file-popup/kham-doan-hop-dong-kham-chon-file-popup.component.ts");
            /* harmony import */ var _kham_doan_hop_dong_kham_list_nhan_vien_popup_kham_doan_hop_dong_kham_list_nhan_vien_popup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../kham-doan-hop-dong-kham-list-nhan-vien-popup/kham-doan-hop-dong-kham-list-nhan-vien-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-list-nhan-vien-popup/kham-doan-hop-dong-kham-list-nhan-vien-popup.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _kham_doan_hop_dong_kham_model__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../kham-doan-hop-dong-kham.model */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham.model.ts");
            /* harmony import */ var _goi_kham_suc_khoe_chon_file_popup_goi_kham_suc_khoe_chon_file_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../goi-kham-suc-khoe-chon-file-popup/goi-kham-suc-khoe-chon-file-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/goi-kham-suc-khoe-chon-file-popup/goi-kham-suc-khoe-chon-file-popup.component.ts");
            /* harmony import */ var _kham_doan_goi_kham_suc_khoe_kham_doan_goi_kham_popup_kham_doan_goi_kham_popup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-popup/kham-doan-goi-kham-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-popup/kham-doan-goi-kham-popup.component.ts");
            /* harmony import */ var _danh_sach_phong_kham_cong_ty_popup_danh_sach_phong_kham_cong_ty_popup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../danh-sach-phong-kham-cong-ty-popup/danh-sach-phong-kham-cong-ty-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/danh-sach-phong-kham-cong-ty-popup/danh-sach-phong-kham-cong-ty-popup.component.ts");
            /* harmony import */ var _thong_tin_nhan_vien_popup_thong_tin_nhan_vien_popup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../thong-tin-nhan-vien-popup/thong-tin-nhan-vien-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/thong-tin-nhan-vien-popup/thong-tin-nhan-vien-popup.component.ts");
            /* harmony import */ var _thong_tin_goi_kham_popup_thong_tin_goi_kham_popup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../thong-tin-goi-kham-popup/thong-tin-goi-kham-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/thong-tin-goi-kham-popup/thong-tin-goi-kham-popup.component.ts");
            /* harmony import */ var _thong_tin_ket_thuc_hop_popup_thong_tin_ket_thuc_hop_popup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../thong-tin-ket-thuc-hop-popup/thong-tin-ket-thuc-hop-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/thong-tin-ket-thuc-hop-popup/thong-tin-ket-thuc-hop-popup.component.ts");
            /* harmony import */ var _kham_doan_dv_thong_ke_popup_kham_doan_dv_thong_ke_popup_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../kham-doan-dv-thong-ke-popup/kham-doan-dv-thong-ke-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-dv-thong-ke-popup/kham-doan-dv-thong-ke-popup.component.ts");
            /* harmony import */ var _mo_lai_hop_dong_kham_popup_mo_lai_hop_dong_kham_popup_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../mo-lai-hop-dong-kham-popup/mo-lai-hop-dong-kham-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/mo-lai-hop-dong-kham-popup/mo-lai-hop-dong-kham-popup.component.ts");
            var KhamDoanHopDongKhamDetailPopupComponent = /** @class */ (function () {
                function KhamDoanHopDongKhamDetailPopupComponent(authService, dialog, notificationService, apiService, location, route, cdRef, router) {
                    this.authService = authService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.location = location;
                    this.route = route;
                    this.cdRef = cdRef;
                    this.router = router;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.icAddCircle = _iconify_icons_ic_add_circle__WEBPACK_IMPORTED_MODULE_6___default.a;
                    this.khamDoanHopDongKham = new _kham_doan_hop_dong_kham_model__WEBPACK_IMPORTED_MODULE_20__["KhamDoanHopDongKham"]();
                    this.gridNhanVienColumns = [];
                    this.gridDiaDiemKhamColumns = [];
                    this.gridGoiKhamColumns = [];
                    this.gridDanhSachPhongKhamCongTyColumns = [];
                    this.validationErrors = [];
                    this.validationKhamErrors = [];
                    this.validationDichVuErrors = [];
                    this.dataSachDiaDiemKham = { data: [], total: 0 };
                    this.isDisabled = null;
                    this.additiongStringDefault = null;
                    this.baseRoute = "/kham-doan/hop-dong-kham";
                    this.title = "";
                    this.header = "";
                    this.format = 'n2';
                    this.sortNhanVien = [
                        {
                            field: "Id",
                            dir: "asc"
                        }
                    ];
                }
                KhamDoanHopDongKhamDetailPopupComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_12__["DocumentType"].KhamDoanHopDongKham;
                    this.id = this.route.snapshot.params.id;
                    this.id = (this.id === undefined || this.id === null) ? 0 : this.id;
                    this.khamDoanHopDongKham.TenTrangThaiHopDongKham = "Đang thực hiện";
                    if (this.id != 0) {
                        this.title = "Chi tiết hợp đồng khám sức khỏe";
                        this.header = "Chi Tiết Hợp Đồng Khám Sức Khỏe";
                        this.getDataHopDongKham(this.id);
                        var stringJSON = {
                            HopDongKhamSucKhoeId: this.id,
                            IsHopDongKhamSucKhoe: true
                        };
                        this.additiongStringDefault = JSON.stringify(stringJSON);
                    }
                    else {
                        this.title = "Thêm hợp đồng khám sức khỏe";
                        this.header = "Thêm Hợp Đồng Khám Sức Khỏe";
                    }
                    this.gridDiaDiemKhamColumns = [
                        { Field: "DiaDiemKham", Title: "Địa điểm khám", Width: 220, Template: this.diaDiemKhamTemplate },
                        { Field: "CongViec", Title: "Công việc", Width: 120, Template: this.congViecKhamTemplate, TemplateFooter: this.footerTemplate },
                        { Field: "Ngay", Title: "Ngày", Width: 100, Template: this.ngayKhamTemplate },
                        { Field: "GhiChu", Title: "Ghi chú", Width: 150, Template: this.ghiChuKhamTemplate },
                        { Field: "Action", Title: "", Width: 40, Template: this.actionKhamTemplate }
                    ];
                    this.gridGoiKhamColumns = [
                        { Field: "MaGoiKham", Title: "Mã gói khám", Width: 100, Sortable: true, Template: this.maGoiKhamTemplate },
                        { Field: "TenGoiKham", Title: "Tên gói khám", Width: 160, Sortable: true },
                        { Field: "TenCongTy", Title: "Tên công ty", Width: 240, Sortable: true },
                        { Field: "SoHopDong", Title: "SHĐ", Width: 100, Sortable: true },
                        { Field: "NgayHieuLuc", Title: "Ngày hiệu lực", Width: 100, Sortable: true, Template: this.ngayHieuLucTemplate },
                        { Field: "NgayKetThuc", Title: "Ngày kết thúc", Width: 100, Sortable: true, Template: this.ngayKetThucTemplate },
                        { Field: "Action", Title: "", Width: 40, Sortable: false, Template: this.actionGoiKhamTemplate }
                    ];
                    this.gridDanhSachPhongKhamCongTyColumns = [
                        { Field: "MaPhong", Title: "Mã Phòng", Width: 120, Template: this.maPhongKhamTemplate },
                        { Field: "TenPhong", Title: "Tên Phòng", Width: 100, Template: this.tenPhongTemplate },
                        { Field: "GhiChu", Title: "Ghi chú", Width: 150, Template: this.ghiChuPhongKhamKhamTemplate },
                        { Field: "Action", Title: "", Width: 40, Template: this.actionKhamPhongKhamTemplate }
                    ];
                    this.gridNhanVienColumns = [
                        { Field: "STTNhanVien", Title: "STT", Width: 60 },
                        { Field: "MaBN", Title: "Mã NB", Width: 60 },
                        { Field: "MaNhanVien", Title: "Mã NV", Width: 60 },
                        { Field: "HoTen", Title: "Tên NV", Width: 120, Template: this.hoTenTemplate },
                        { Field: "TenDonVi", Title: "ĐV/BP", Width: 80 },
                        { Field: "GioiTinh", Title: "Giới tính", Width: 80 },
                        { Field: "NamSinh", Title: "Năm sinh", Width: 80 },
                        { Field: "SoDienThoai", Title: "SĐT", Width: 80 },
                        { Field: "Email", Title: "Email", Width: 80 },
                        { Field: "CMTSHC", Title: "CMT/SHC", Width: 80 },
                        { Field: "DanToc", Title: "Dân tộc", Width: 80 },
                        { Field: "TinhThanhPho", Title: "Tỉnh/TP", Width: 80 },
                        { Field: "NhomKham", Title: "Nhóm khám", Width: 80 },
                        { Field: "Action", Title: "", Width: 50, Template: this.actionNhanVienTemplate }
                    ];
                    this.getTotalDanhSachNhanVienCongTyTheoHopDongKham();
                };
                KhamDoanHopDongKhamDetailPopupComponent.prototype.showPopupLoadingData = function () {
                    if (this.popupLoadingData == undefined
                        || this.popupLoadingData == null
                        || this.popupLoadingData.openDialogs == undefined
                        || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"], {
                            disableClose: true,
                            width: "200px",
                            height: "90px",
                            data: { Title: "Đang tải dữ liệu..." },
                        });
                    }
                };
                KhamDoanHopDongKhamDetailPopupComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                KhamDoanHopDongKhamDetailPopupComponent.prototype.getDataHopDongKham = function (id) {
                    var _this = this;
                    this.showPopupLoadingData();
                    this.apiService.get("KhamDoan/GetThongTinHopDongKham?hopDongKhamId=" + id).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            _this.khamDoanHopDongKham = resultData;
                            _this.dataSachDiaDiemKham.data = resultData.HopDongKhamSucKhoeDiaDiems != null ? resultData.HopDongKhamSucKhoeDiaDiems : [];
                            _this.closePopupLoadingData();
                        }
                    }, function (err) {
                        _this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                KhamDoanHopDongKhamDetailPopupComponent.prototype.xoaHopDongKhamSucKhoeNhanVien = function (id) {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Update)) {
                        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].MessConfirm, ["xóa"]) }
                        }).afterClosed().subscribe(function (result) {
                            if (result === 'Yes') {
                                _this.apiService.post("KhamDoan/XoaHopDongKhamSucKhoeNhanVien?nhanVienHDKhamId=" + id).subscribe(function (resultData) {
                                    if (resultData !== undefined && resultData != null) {
                                        _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Xóa"]));
                                        _this.nhanVienGrid.search();
                                        //Cập nhật lại sô lương nhân viên khám trong hop đồng
                                        _this.capNhanSoLuongNhanVienKhamTrongHopDong(_this.id);
                                        _this.getTotalDanhSachNhanVienCongTyTheoHopDongKham();
                                        _this.closePopupLoadingData();
                                    }
                                }, function (err) {
                                    _this.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                    _this.closePopupLoadingData();
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanHopDongKhamDetailPopupComponent.prototype.showPopupChiTietGoiKham = function (id) {
                    var _this = this;
                    if (id === void 0) { id = null; }
                    var securityOperation = src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Add;
                    var url = '/them';
                    if (id != null) {
                        securityOperation = src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Update;
                        url = '/chi-tiet';
                    }
                    if (this.authService.hasPermission(this.documentType, securityOperation)) {
                        var dataKhamDoan = {
                            CongTyKhamSucKhoeId: this.khamDoanHopDongKham.CongTyKhamSucKhoeId,
                            HopDongKhamSucKhoeId: this.khamDoanHopDongKham.Id,
                            TenCongTyKhamSucKhoe: this.khamDoanHopDongKham.TenCongTy,
                            TenHopDongKhamSucKhoe: this.khamDoanHopDongKham.SoHopDong,
                            NgayHieuLuc: this.khamDoanHopDongKham.NgayHieuLuc,
                            NgayKetThuc: this.khamDoanHopDongKham.NgayKetThuc,
                            GoiKhamId: id,
                            LaHopDongKhamSucKhoe: true,
                            IsCreatedHopDongKhamSucKhoe: id == 0 ? true : false,
                        };
                        this.dialog.open(_kham_doan_goi_kham_suc_khoe_kham_doan_goi_kham_popup_kham_doan_goi_kham_popup_component__WEBPACK_IMPORTED_MODULE_22__["GoiKhamViewPopupComponent"], {
                            width: "1400px",
                            disableClose: true,
                            data: { khamDoanHopDongKham: dataKhamDoan }
                        }).afterClosed().subscribe(function (result) {
                            _this.gridGoiKhamSucKhoe.search();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanHopDongKhamDetailPopupComponent.prototype.showPopupThemNhanVien = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Update)) {
                        var id = this.id;
                        this.dialog.open(_kham_doan_hop_dong_kham_list_nhan_vien_popup_kham_doan_hop_dong_kham_list_nhan_vien_popup_component__WEBPACK_IMPORTED_MODULE_15__["KhamDoanHopDongKhamListNhanVienPopupComponent"], {
                            disableClose: false,
                            width: '1600px',
                            data: { Id: 0, hopDongKhamSucKhoeId: id }
                        }).afterClosed().subscribe(function (result) {
                            if (result != undefined && result != null && result != "") {
                                _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["thêm nhân viên"]));
                                _this.nhanVienGrid.search();
                                //Cập nhật lại sô lương nhân viên khám trong hop đồng
                                _this.capNhanSoLuongNhanVienKhamTrongHopDong(_this.id);
                                _this.getTotalDanhSachNhanVienCongTyTheoHopDongKham();
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanHopDongKhamDetailPopupComponent.prototype.capNhanSoLuongNhanVienKhamTrongHopDong = function (id) {
                    var _this = this;
                    this.apiService.post("KhamDoan/CapNhatSoLuongNhanVienKhamTrongHopDong?hopDongKhamId=" + id).subscribe(function (resultData) {
                    }, function (err) {
                        _this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                    });
                };
                KhamDoanHopDongKhamDetailPopupComponent.prototype.viewEditHopDongNVSK = function (hopDongNhanVienKhamSKId) {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Update)) {
                        var id = this.id;
                        this.dialog.open(_kham_doan_hop_dong_kham_list_nhan_vien_popup_kham_doan_hop_dong_kham_list_nhan_vien_popup_component__WEBPACK_IMPORTED_MODULE_15__["KhamDoanHopDongKhamListNhanVienPopupComponent"], {
                            disableClose: false,
                            width: '1600px',
                            data: { Id: hopDongNhanVienKhamSKId, hopDongKhamSucKhoeId: id }
                        }).afterClosed().subscribe(function (result) {
                            if (result != undefined && result != null && result != "") {
                                _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["sữa nhân viên"]));
                                _this.nhanVienGrid.search();
                                //Cập nhật lại sô lương nhân viên khám trong hop đồng
                                _this.capNhanSoLuongNhanVienKhamTrongHopDong(_this.id);
                                _this.getTotalDanhSachNhanVienCongTyTheoHopDongKham();
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanHopDongKhamDetailPopupComponent.prototype.NhapTuFileExcel = function () {
                    var _this = this;
                    this.showLoadingPopup();
                    this.dialog.open(_kham_doan_hop_dong_kham_chon_file_popup_kham_doan_hop_dong_kham_chon_file_popup_component__WEBPACK_IMPORTED_MODULE_14__["KhamDoanHopDongKhamChonFilePopupComponent"], {
                        disableClose: false,
                        width: '800px',
                        data: { hopDongKhamSucKhoeId: this.id }
                    }).afterClosed().subscribe(function (result) {
                        if (result != undefined && result != null && result.length > 0) {
                            _this.dialog.open(_thong_tin_nhan_vien_popup_thong_tin_nhan_vien_popup_component__WEBPACK_IMPORTED_MODULE_24__["ThongTinNhanVienPopupComponent"], {
                                disableClose: false,
                                width: '800px',
                                data: { thongTinNhanViens: result }
                            }).afterClosed().subscribe(function (result) {
                                _this.closeAllDialogs();
                            });
                        }
                        if (result) {
                            _this.nhanVienGrid.search();
                            //Cập nhật lại sô lương nhân viên khám trong hop đồng
                            _this.capNhanSoLuongNhanVienKhamTrongHopDong(_this.id);
                            _this.getTotalDanhSachNhanVienCongTyTheoHopDongKham();
                        }
                        _this.closeAllDialogs();
                    });
                };
                KhamDoanHopDongKhamDetailPopupComponent.prototype.NhapGoiKhamTuFileExcel = function () {
                    var _this = this;
                    this.dialog.open(_goi_kham_suc_khoe_chon_file_popup_goi_kham_suc_khoe_chon_file_popup_component__WEBPACK_IMPORTED_MODULE_21__["HopDongKhamChonGoiKhamFilePopupComponent"], {
                        disableClose: false,
                        width: '800px',
                        data: { hopDongKhamSucKhoeId: this.id }
                    }).afterClosed().subscribe(function (result) {
                        if (result) {
                            if (result.length > 0) {
                                _this.dialog.open(_thong_tin_goi_kham_popup_thong_tin_goi_kham_popup_component__WEBPACK_IMPORTED_MODULE_25__["ThongTinGoiKhamPopupComponent"], {
                                    disableClose: false,
                                    width: '800px',
                                    data: { thongTinGoiKhams: result }
                                }).afterClosed().subscribe(function (result) {
                                });
                            }
                            _this.gridGoiKhamSucKhoe.search();
                        }
                    });
                };
                KhamDoanHopDongKhamDetailPopupComponent.prototype.showPopupDanhSachPhongKhamCongTy = function (data) {
                    var _this = this;
                    this.dialog.open(_danh_sach_phong_kham_cong_ty_popup_danh_sach_phong_kham_cong_ty_popup_component__WEBPACK_IMPORTED_MODULE_23__["DanhSachPhongKhamCongTyComponent"], {
                        disableClose: false,
                        width: '800px',
                        data: { hopDongKhamSucKhoeId: this.id, dataDSCongTy: data }
                    }).afterClosed().subscribe(function (result) {
                        if (result) {
                            _this.gridDanhSachNhanSuGrid.search();
                        }
                    });
                };
                KhamDoanHopDongKhamDetailPopupComponent.prototype.xoaPhongKhamTaiCongTy = function (id) {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Delete)) {
                        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].MessConfirm, ["xóa"]) }
                        }).afterClosed().subscribe(function (result) {
                            if (result == "Yes") {
                                _this.apiService.post("KhamDoan/XoaPhongKhamTaiCongTy?id=" + id).subscribe(function () {
                                    _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Xóa"]));
                                    _this.gridDanhSachNhanSuGrid.search();
                                }, function (err) {
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanHopDongKhamDetailPopupComponent.prototype.themDiaDiemDanhSachKham = function () {
                    this.dataSachDiaDiemKham.data.push(new _kham_doan_hop_dong_kham_model__WEBPACK_IMPORTED_MODULE_20__["HopDongSucKhoeDiaDiem"]());
                };
                KhamDoanHopDongKhamDetailPopupComponent.prototype.xoaDiaDiemDanhSachKham = function (item) {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].MessConfirm, ["xóa"]) }
                    }).afterClosed().subscribe(function (result) {
                        if (result == "Yes") {
                            _this.dataSachDiaDiemKham.data.splice(_this.dataSachDiaDiemKham.data.findIndex(function (x) { return x == item; }), 1);
                        }
                    });
                };
                KhamDoanHopDongKhamDetailPopupComponent.prototype.onChangeSetTenCongViec = function (dataItem, rowIndex) {
                    if (dataItem != undefined && dataItem != null && rowIndex != undefined && rowIndex != null) {
                        this.dataSachDiaDiemKham.data[rowIndex].CongViec = dataItem.DisplayName;
                    }
                    else {
                        this.dataSachDiaDiemKham.data[rowIndex].CongViec = null;
                    }
                };
                KhamDoanHopDongKhamDetailPopupComponent.prototype.xuLyLuu = function () {
                    var _this = this;
                    this.validationErrors = [];
                    this.cdRef.detectChanges();
                    var mess = "Bạn có chắc chắn muốn tạo hợp đồng này?";
                    var securityOperation = src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Add;
                    if (this.id != 0) {
                        this.khamDoanHopDongKham.Id = this.id;
                        securityOperation = src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Update;
                        mess = "Bạn có chắc chắn muốn lưu hợp đồng này?";
                    }
                    if (this.authService.hasPermission(this.documentType, securityOperation)) {
                        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "Xác nhận", Message: mess }
                        }).afterClosed().subscribe(function (result) {
                            if (result == "Yes") {
                                //===========================================Data mẫu ======================================       
                                if (_this.dataSachDiaDiemKham.data.length > 0) {
                                    _this.khamDoanHopDongKham.HopDongKhamSucKhoeDiaDiems = _this.dataSachDiaDiemKham.data;
                                }
                                _this.apiService.post("KhamDoan/ThemHoacCapNhatHopDongKham", _this.khamDoanHopDongKham).subscribe(function (res) {
                                    if (res != 0) {
                                        _this.id = res;
                                        _this.router.navigate([_this.baseRoute + '/chi-tiet/' + res]);
                                        _this.getDataHopDongKham(_this.id);
                                        _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                    }
                                    else {
                                        _this.quayLai();
                                    }
                                }, function (err) {
                                    _this.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanHopDongKhamDetailPopupComponent.prototype.getTotalDanhSachNhanVienCongTyTheoHopDongKham = function () {
                    var _this = this;
                    this.apiService.get("KhamDoan/GetTotalDanhSachNhanVienCongTyTheoHopDongKham?hopDongKhamId=" + this.id)
                        .subscribe(function (totalNhanVien) {
                        _this.khamDoanHopDongKham.SoNguoiKham = totalNhanVien;
                        if (totalNhanVien > 0) {
                            _this.isDisabled = true;
                        }
                        else {
                            _this.isDisabled = false;
                        }
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                    });
                };
                KhamDoanHopDongKhamDetailPopupComponent.prototype.xoaGoiKham = function (Id) {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Delete)) {
                        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].MessConfirm, ["xóa"]) }
                        }).afterClosed().subscribe(function (result) {
                            if (result == "Yes") {
                                _this.apiService.post("KhamDoan/XoaGoiKhamSucKhoeDoan?id=" + Id).subscribe(function () {
                                    _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Xóa"]));
                                    _this.gridGoiKhamSucKhoe.search();
                                }, function (err) {
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanHopDongKhamDetailPopupComponent.prototype.quayLai = function () {
                    this.location.back();
                };
                KhamDoanHopDongKhamDetailPopupComponent.prototype.thongKe = function () {
                    this.dialog.open(_kham_doan_dv_thong_ke_popup_kham_doan_dv_thong_ke_popup_component__WEBPACK_IMPORTED_MODULE_27__["KhamDoanDvThongKePopupComponent"], {
                        disableClose: false,
                        width: '1500px',
                        data: { HopDongKhamSucKhoeId: this.id }
                    }).afterClosed().subscribe(function () {
                    });
                };
                KhamDoanHopDongKhamDetailPopupComponent.prototype.ketThucHopDong = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: "Bạn chắc chắn muốn kết thúc hợp đồng này không ?" }
                    }).afterClosed().subscribe(function (result) {
                        if (result == "Yes") {
                            _this.apiService.get("KhamDoan/KiemTraHopDongNhanVienChuaKham?hopDongKhamId=" + _this.id).subscribe(function (resultData) {
                                if (resultData !== undefined && resultData != null) {
                                    if (resultData[0].NhanVienKhamXong) {
                                        _this.apiService.post("KhamDoan/KetThucHopDongKham?hopDongKhamId=" + _this.id).subscribe(function (resultData) {
                                            _this.router.navigateByUrl("/kham-doan/hop-dong-kham");
                                            _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["kết thúc hợp đồng"]));
                                        }, function (err) {
                                            _this.validationErrors = err.ValidationErrors;
                                            if (err.Message != "Validation Failed") {
                                                _this.notificationService.showError(err.Message);
                                            }
                                        });
                                    }
                                    else {
                                        _this.dialog.open(_thong_tin_ket_thuc_hop_popup_thong_tin_ket_thuc_hop_popup_component__WEBPACK_IMPORTED_MODULE_26__["ThongTinKetThucHopDongPopupComponent"], {
                                            disableClose: false,
                                            width: '900px',
                                            data: { hopDongKhamSucKhoeId: _this.id }
                                        }).afterClosed().subscribe(function (result) {
                                        });
                                    }
                                }
                            }, function (err) {
                                _this.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                            });
                        }
                    });
                };
                KhamDoanHopDongKhamDetailPopupComponent.prototype.moLaiThucHopDong = function () {
                    var _this = this;
                    this.dialog.open(_mo_lai_hop_dong_kham_popup_mo_lai_hop_dong_kham_popup_component__WEBPACK_IMPORTED_MODULE_28__["MoLaiHopDongKhamComponent"], {
                        disableClose: false,
                        width: '600px',
                        data: { Title: "Xác nhận", Message: "Bạn chắc chắn muốn mở lại hợp đồng này không ?" }
                    }).afterClosed().subscribe(function (result) {
                        if (result !== null && result != "") {
                            var moLaiHopDong = new _kham_doan_hop_dong_kham_model__WEBPACK_IMPORTED_MODULE_20__["MoLaiHopDong"]();
                            moLaiHopDong.HopDongKhamSucKhoeId = _this.id;
                            moLaiHopDong.LyDoMoLaiHopDong = result;
                            _this.apiService.post("KhamDoan/MoLaiHopDongKham", moLaiHopDong).subscribe(function (resultData) {
                                _this.router.navigateByUrl("/kham-doan/hop-dong-kham");
                                _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Mở lại hợp đồng"]));
                            }, function (err) {
                                _this.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                            });
                        }
                    });
                };
                KhamDoanHopDongKhamDetailPopupComponent.prototype.showLoadingPopup = function () {
                    if (!this.loadingPopup) {
                        this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang tải...' }
                        });
                    }
                };
                KhamDoanHopDongKhamDetailPopupComponent.prototype.showSavingPopup = function () {
                    if (!this.loadingPopup) {
                        this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang lưu...' }
                        });
                    }
                };
                KhamDoanHopDongKhamDetailPopupComponent.prototype.closeAllDialogs = function () {
                    if (this.loadingPopup) {
                        this.loadingPopup.close();
                        this.loadingPopup = null;
                    }
                };
                return KhamDoanHopDongKhamDetailPopupComponent;
            }());
            KhamDoanHopDongKhamDetailPopupComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_18__["Location"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_19__["ActivatedRoute"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
            ], KhamDoanHopDongKhamDetailPopupComponent.prototype, "sttTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maPhongKhamTemplate', { static: true })
            ], KhamDoanHopDongKhamDetailPopupComponent.prototype, "maPhongKhamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenPhongTemplate', { static: true })
            ], KhamDoanHopDongKhamDetailPopupComponent.prototype, "tenPhongTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ghiChuPhongKhamKhamTemplate', { static: true })
            ], KhamDoanHopDongKhamDetailPopupComponent.prototype, "ghiChuPhongKhamKhamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionKhamPhongKhamTemplate', { static: true })
            ], KhamDoanHopDongKhamDetailPopupComponent.prototype, "actionKhamPhongKhamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('diaDiemKhamTemplate', { static: true })
            ], KhamDoanHopDongKhamDetailPopupComponent.prototype, "diaDiemKhamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('congViecKhamTemplate', { static: true })
            ], KhamDoanHopDongKhamDetailPopupComponent.prototype, "congViecKhamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayKhamTemplate', { static: true })
            ], KhamDoanHopDongKhamDetailPopupComponent.prototype, "ngayKhamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ghiChuKhamTemplate', { static: true })
            ], KhamDoanHopDongKhamDetailPopupComponent.prototype, "ghiChuKhamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionKhamTemplate', { static: true })
            ], KhamDoanHopDongKhamDetailPopupComponent.prototype, "actionKhamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('footerTemplate', { static: true })
            ], KhamDoanHopDongKhamDetailPopupComponent.prototype, "footerTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maGoiKhamTemplate', { static: true })
            ], KhamDoanHopDongKhamDetailPopupComponent.prototype, "maGoiKhamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayHieuLucGoiKhamTemplate', { static: true })
            ], KhamDoanHopDongKhamDetailPopupComponent.prototype, "ngayHieuLucGoiKhamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayKetThucGoiKhamTemplate', { static: true })
            ], KhamDoanHopDongKhamDetailPopupComponent.prototype, "ngayKetThucGoiKhamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionGoiKhamTemplate', { static: true })
            ], KhamDoanHopDongKhamDetailPopupComponent.prototype, "actionGoiKhamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridGoiKhamSucKhoe', { static: false })
            ], KhamDoanHopDongKhamDetailPopupComponent.prototype, "gridGoiKhamSucKhoe", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hoTenTemplate', { static: true })
            ], KhamDoanHopDongKhamDetailPopupComponent.prototype, "hoTenTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionNhanVienTemplate', { static: true })
            ], KhamDoanHopDongKhamDetailPopupComponent.prototype, "actionNhanVienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhanVienGrid', { static: false })
            ], KhamDoanHopDongKhamDetailPopupComponent.prototype, "nhanVienGrid", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayHieuLucTemplate', { static: true })
            ], KhamDoanHopDongKhamDetailPopupComponent.prototype, "ngayHieuLucTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayKetThucTemplate', { static: true })
            ], KhamDoanHopDongKhamDetailPopupComponent.prototype, "ngayKetThucTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], KhamDoanHopDongKhamDetailPopupComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDanhSachNhanSuGrid', { static: false })
            ], KhamDoanHopDongKhamDetailPopupComponent.prototype, "gridDanhSachNhanSuGrid", void 0);
            KhamDoanHopDongKhamDetailPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-kham-doan-hop-dong-kham-detail-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-hop-dong-kham-detail-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-detail-popup/kham-doan-hop-dong-kham-detail-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-hop-dong-kham-detail-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-detail-popup/kham-doan-hop-dong-kham-detail-popup.component.scss")).default]
                })
            ], KhamDoanHopDongKhamDetailPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-list-nhan-vien-popup/kham-doan-hop-dong-kham-list-nhan-vien-popup.component.scss": 
        /*!*************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-list-nhan-vien-popup/kham-doan-hop-dong-kham-list-nhan-vien-popup.component.scss ***!
          \*************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("fieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em !important;\n  padding-bottom: 0.625em !important;\n  padding-left: 0.75em !important;\n  padding-right: 0.75em !important;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset legend {\n  margin-left: 15px;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4taG9wLWRvbmcta2hhbS9raGFtLWRvYW4taG9wLWRvbmcta2hhbS1saXN0LW5oYW4tdmllbi1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGtoYW0tZG9hblxca2hhbS1kb2FuLWhvcC1kb25nLWtoYW1cXGtoYW0tZG9hbi1ob3AtZG9uZy1raGFtLWxpc3Qtbmhhbi12aWVuLXBvcHVwXFxraGFtLWRvYW4taG9wLWRvbmcta2hhbS1saXN0LW5oYW4tdmllbi1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4taG9wLWRvbmcta2hhbS9raGFtLWRvYW4taG9wLWRvbmcta2hhbS1saXN0LW5oYW4tdmllbi1wb3B1cC9raGFtLWRvYW4taG9wLWRvbmcta2hhbS1saXN0LW5oYW4tdmllbi1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4va2hhbS1kb2FuL2toYW0tZG9hbi1ob3AtZG9uZy1raGFtL2toYW0tZG9hbi1ob3AtZG9uZy1raGFtLWxpc3Qtbmhhbi12aWVuLXBvcHVwL2toYW0tZG9hbi1ob3AtZG9uZy1raGFtLWxpc3Qtbmhhbi12aWVuLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZmllbGRzZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAwLjM1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4ICNlMGUwZTA7XG4gIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcbn1cblxuZmllbGRzZXQgbGVnZW5kIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufSIsImZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMC43NWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG59XG5cbmZpZWxkc2V0IGxlZ2VuZCB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5maWVsZHNldCAuaXRlbV9yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-list-nhan-vien-popup/kham-doan-hop-dong-kham-list-nhan-vien-popup.component.ts": 
        /*!***********************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-list-nhan-vien-popup/kham-doan-hop-dong-kham-list-nhan-vien-popup.component.ts ***!
          \***********************************************************************************************************************************************************************/
        /*! exports provided: KhamDoanHopDongKhamListNhanVienPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanHopDongKhamListNhanVienPopupComponent", function () { return KhamDoanHopDongKhamListNhanVienPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _kham_doan_hop_dong_kham_chon_file_popup_kham_doan_hop_dong_kham_chon_file_popup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../kham-doan-hop-dong-kham-chon-file-popup/kham-doan-hop-dong-kham-chon-file-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-chon-file-popup/kham-doan-hop-dong-kham-chon-file-popup.component.ts");
            /* harmony import */ var _kham_doan_hop_dong_kham_tim_nhan_vien_popup_kham_doan_hop_dong_kham_tim_nhan_vien_popup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../kham-doan-hop-dong-kham-tim-nhan-vien-popup/kham-doan-hop-dong-kham-tim-nhan-vien-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-tim-nhan-vien-popup/kham-doan-hop-dong-kham-tim-nhan-vien-popup.component.ts");
            /* harmony import */ var _kham_doan_hop_dong_kham_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../kham-doan-hop-dong-kham.model */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham.model.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_17__);
            /* harmony import */ var src_app_shared_enum_common_type_enums__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/enum/common-type.enums */ "./src/app/shared/enum/common-type.enums.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            var KhamDoanHopDongKhamListNhanVienPopupComponent = /** @class */ (function () {
                function KhamDoanHopDongKhamListNhanVienPopupComponent(authService, dialog, route, cdRef, notificationService, apiService, data, dialogRef) {
                    this.authService = authService;
                    this.dialog = dialog;
                    this.route = route;
                    this.cdRef = cdRef;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.data = data;
                    this.dialogRef = dialogRef;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6___default.a;
                    this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_17___default.a;
                    this.validationErrors = [];
                    this.validationDichVuErrors = [];
                    this.hopDongKhamSucKhoeId = 0;
                    this.hopDongNhanVienKhamSucKhoeId = 0;
                    this.gridCongViecColumns = [];
                    this.dataSourceCongViec = {
                        data: [],
                        total: 0
                    };
                    this.gridTienSuBenhColumns = [];
                    this.dataSourceTienSuBenh = {
                        data: [],
                        total: 0
                    };
                    this.benhNhanId = 0;
                    this.format = 'n2';
                    this.danhSachNhanVienCongTy = new _kham_doan_hop_dong_kham_model__WEBPACK_IMPORTED_MODULE_16__["HopDongKhamSucKhoeNhanVien"]();
                }
                KhamDoanHopDongKhamListNhanVienPopupComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_12__["DocumentType"].KhamDoanHopDongKham;
                    this.hopDongNhanVienKhamSucKhoeId = this.data.Id;
                    this.hopDongKhamSucKhoeId = this.data.hopDongKhamSucKhoeId;
                    if (this.hopDongNhanVienKhamSucKhoeId != 0) {
                        this.getDataHopDongKhamSucKhoeNhanVien(this.hopDongNhanVienKhamSucKhoeId);
                    }
                    this.gridCongViecColumns = [
                        { Field: "CongViec", Title: "Công việc", Width: 100, Sortable: true, Template: this.congViecTemplate },
                        { Field: "TuNgay", Title: "Từ ngày", Width: 100, Sortable: true, Template: this.tuNgayTemplate, TemplateFooter: this.footerTemplate },
                        { Field: "DenNgay", Title: "Đến ngày", Width: 100, Sortable: true, Template: this.denNgayTemplate },
                        { Field: "", Title: "", Width: 100, Sortable: true, Template: this.actionTemplate }
                    ];
                    this.gridTienSuBenhColumns = [
                        { Field: "LoaiTienSuBenh", Title: "Loại tiền sử bệnh", Width: 100, Sortable: true, Template: this.loaiTienSuBenhTemplate },
                        { Field: "BenhNgheNghiep", Title: "Bệnh nghề nghiệp", Width: 100, Sortable: true, Template: this.benhNgheNghiepTemplate },
                        { Field: "TenBenh", Title: "Tên bệnh", Width: 100, Sortable: true, Template: this.tenBenhTemplate, TemplateFooter: this.footerTienSuBenhTemplate },
                        { Field: "PhatHienNam", Title: "Phát hiện năm", Width: 100, Sortable: true, Template: this.phatHienNamTemplate },
                        { Field: "", Title: "", Width: 100, Sortable: true, Template: this.actionTienSuBenhTemplate }
                    ];
                };
                KhamDoanHopDongKhamListNhanVienPopupComponent.prototype.showPopupLoadingData = function () {
                    if (this.popupLoadingData == undefined
                        || this.popupLoadingData == null || this.popupLoadingData.openDialogs == undefined
                        || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"], {
                            disableClose: true,
                            width: "200px",
                            height: "90px",
                            data: { Title: "Đang tải dữ liệu..." },
                        });
                    }
                };
                KhamDoanHopDongKhamListNhanVienPopupComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                KhamDoanHopDongKhamListNhanVienPopupComponent.prototype.loaiTienSuBenhChange = function (dataItem, rowIndex) {
                    if (dataItem != undefined && dataItem != null && rowIndex != undefined && rowIndex != null) {
                        this.dataSourceTienSuBenh.data[rowIndex].LoaiTienSuId = dataItem.KeyId;
                        this.dataSourceTienSuBenh.data[rowIndex].LoaiTienSu = dataItem.DisplayName;
                    }
                    else {
                        this.dataSourceTienSuBenh.data[rowIndex].LoaiTienSuId = null;
                        this.dataSourceTienSuBenh.data[rowIndex].LoaiTienSu = null;
                    }
                };
                KhamDoanHopDongKhamListNhanVienPopupComponent.prototype.xuLyLuuNhanVienCongTy = function () {
                    var _this = this;
                    this.validationErrors = [];
                    this.cdRef.detectChanges();
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Add)) {
                        this.danhSachNhanVienCongTy.HopDongKhamSucKhoeId = this.hopDongKhamSucKhoeId;
                        if (this.dataSourceCongViec.data.length > 0) {
                            this.danhSachNhanVienCongTy.NgheCongViecTruocDays = this.dataSourceCongViec.data;
                        }
                        if (this.dataSourceTienSuBenh.data.length > 0) {
                            this.danhSachNhanVienCongTy.TienSuBenhs = this.dataSourceTienSuBenh.data;
                        }
                        if (this.benhNhanId != 0) {
                            this.danhSachNhanVienCongTy.BenhNhanId = this.benhNhanId;
                        }
                        this.apiService.post("KhamDoan/ThemHoacCapNhatHopDongKhamSucKhoeNhanVien", this.danhSachNhanVienCongTy).subscribe(function (res) {
                            if (res != 0) {
                                _this.dialogRef.close("Yes");
                            }
                        }, function (err) {
                            _this.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                _this.notificationService.showError(err.Message);
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanHopDongKhamListNhanVienPopupComponent.prototype.NhapTuFileExcel = function () {
                    var _this = this;
                    this.showLoadingPopup();
                    this.dialog.open(_kham_doan_hop_dong_kham_chon_file_popup_kham_doan_hop_dong_kham_chon_file_popup_component__WEBPACK_IMPORTED_MODULE_14__["KhamDoanHopDongKhamChonFilePopupComponent"], {
                        disableClose: false,
                        width: '800px'
                    }).afterClosed().subscribe(function (result) {
                        _this.closeAllDialogs();
                    });
                };
                KhamDoanHopDongKhamListNhanVienPopupComponent.prototype.benhNgheNghiepChange = function (dataItem) {
                    if (dataItem != undefined && dataItem != null) {
                        //this.dataSourceCongViec.data[rowIndex].TenBenh = dataItem.DisplayName;  
                    }
                    else {
                        //this.dataSourceCongViec.data[rowIndex].TenBenh = null;     
                    }
                };
                KhamDoanHopDongKhamListNhanVienPopupComponent.prototype.ThemCongViecTruocDo = function () {
                    this.dataSourceCongViec.data.push(new _kham_doan_hop_dong_kham_model__WEBPACK_IMPORTED_MODULE_16__["NgheCongViecTruocDay"]());
                };
                KhamDoanHopDongKhamListNhanVienPopupComponent.prototype.xoaCongViecTruocDo = function (item) {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_20__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].MessConfirm, ["xóa"]) }
                    }).afterClosed().subscribe(function (result) {
                        if (result === 'Yes') {
                            _this.dataSourceCongViec.data.splice(_this.dataSourceCongViec.data.findIndex(function (x) { return x == item; }), 1);
                        }
                    });
                };
                KhamDoanHopDongKhamListNhanVienPopupComponent.prototype.ThemTienSuBenh = function () {
                    var model = new _kham_doan_hop_dong_kham_model__WEBPACK_IMPORTED_MODULE_16__["TienSuBenh"]();
                    model.Id = this.dataSourceTienSuBenh.data.length + 1;
                    this.dataSourceTienSuBenh.data.push(model);
                };
                KhamDoanHopDongKhamListNhanVienPopupComponent.prototype.xoaTienSuBenh = function (item) {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_20__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].MessConfirm, ["xóa"]) }
                    }).afterClosed().subscribe(function (result) {
                        if (result === 'Yes') {
                            _this.dataSourceTienSuBenh.data.splice(_this.dataSourceTienSuBenh.data.findIndex(function (x) { return x == item; }), 1);
                        }
                    });
                };
                KhamDoanHopDongKhamListNhanVienPopupComponent.prototype.mangThai = function (mangThai) {
                    if (mangThai) {
                        this.danhSachNhanVienCongTy.GioiTinh = src_app_shared_enum_common_type_enums__WEBPACK_IMPORTED_MODULE_18__["GioiTinh"].Nu;
                    }
                    else {
                        this.danhSachNhanVienCongTy.GioiTinh = null;
                    }
                };
                KhamDoanHopDongKhamListNhanVienPopupComponent.prototype.showPopupTimNhanVien = function () {
                    var _this = this;
                    this.dialog.open(_kham_doan_hop_dong_kham_tim_nhan_vien_popup_kham_doan_hop_dong_kham_tim_nhan_vien_popup_component__WEBPACK_IMPORTED_MODULE_15__["KhamDoanHopDongKhamTimNhanVienPopupComponent"], {
                        disableClose: false,
                        width: '1600px'
                    }).afterClosed().subscribe(function (result) {
                        if (result !== undefined && result !== null) {
                            _this.danhSachNhanVienCongTy = null;
                            _this.danhSachNhanVienCongTy = result;
                            _this.benhNhanId = result.Id;
                            var nam = new Date(result.NgayThangNamSinh);
                            _this.danhSachNhanVienCongTy.Id = 0;
                            if (result.NgayThangNamSinh != null) {
                                _this.danhSachNhanVienCongTy.NamSinh = nam.getFullYear();
                                _this.danhSachNhanVienCongTy.Tuoi = new Date().getFullYear() - nam.getFullYear();
                            }
                            if (result.NamSinh != null) {
                                _this.danhSachNhanVienCongTy.Tuoi = new Date().getFullYear() - result.NamSinh;
                            }
                            _this.danhSachNhanVienCongTy.GioiTinh = result.GioiTinh == 1 ? src_app_shared_enum_common_type_enums__WEBPACK_IMPORTED_MODULE_18__["GioiTinh"].Nam : src_app_shared_enum_common_type_enums__WEBPACK_IMPORTED_MODULE_18__["GioiTinh"].Nu;
                            _this.danhSachNhanVienCongTy.BenhNhanId = result.Id;
                            _this.danhSachNhanVienCongTy.MaBN = result.MaBN;
                        }
                    });
                };
                KhamDoanHopDongKhamListNhanVienPopupComponent.prototype.TinhThanhPhoChange = function (event) {
                    if (event == undefined || event == null) {
                        this.danhSachNhanVienCongTy.QuanHuyenId = null;
                        this.danhSachNhanVienCongTy.PhuongXaId = null;
                    }
                };
                KhamDoanHopDongKhamListNhanVienPopupComponent.prototype.QuanHuyenChange = function (event) {
                    if (event == undefined || event == null) {
                        this.danhSachNhanVienCongTy.PhuongXaId = null;
                    }
                };
                KhamDoanHopDongKhamListNhanVienPopupComponent.prototype.PhuongXaChange = function (event) {
                    var _this = this;
                    this.danhSachNhanVienCongTy.PhuongXaId = event;
                    if (event != null && event != undefined) {
                        this.apiService.post("TiepNhanBenhNhan/SetTinhThanhQuanHuyen?phuongXaId=" + event).subscribe(function (resultData) {
                            _this.danhSachNhanVienCongTy.TinhThanhId = resultData.TinhThanhId;
                            _this.danhSachNhanVienCongTy.QuanHuyenId = resultData.QuanHuyenId;
                            _this.comboboxQuanHuyen.getDataForLookup();
                        }, function (err) {
                        });
                    }
                    else {
                        this.danhSachNhanVienCongTy.TinhThanhId = null;
                        this.danhSachNhanVienCongTy.QuanHuyenId = null;
                    }
                };
                KhamDoanHopDongKhamListNhanVienPopupComponent.prototype.TinhThanhPhoHoKhauChange = function (event) {
                    if (event == undefined || event == null) {
                        this.danhSachNhanVienCongTy.HoKhauQuanHuyenId = null;
                        this.danhSachNhanVienCongTy.HoKhauPhuongXaId = null;
                    }
                };
                KhamDoanHopDongKhamListNhanVienPopupComponent.prototype.QuanHuyenHoKhauChange = function (event) {
                    if (event == undefined || event == null) {
                        this.danhSachNhanVienCongTy.HoKhauPhuongXaId = null;
                    }
                };
                KhamDoanHopDongKhamListNhanVienPopupComponent.prototype.PhuongXaHoKhauChange = function (event) {
                    var _this = this;
                    this.danhSachNhanVienCongTy.HoKhauPhuongXaId = event;
                    if (event != null && event != undefined) {
                        this.apiService.post("TiepNhanBenhNhan/SetTinhThanhQuanHuyen?phuongXaId=" + event).subscribe(function (resultData) {
                            _this.danhSachNhanVienCongTy.HoKhauTinhThanhId = resultData.TinhThanhId;
                            _this.danhSachNhanVienCongTy.HoKhauQuanHuyenId = resultData.QuanHuyenId;
                            _this.comboboxQuanHuyenHoKhau.getDataForLookup();
                        }, function (err) {
                        });
                    }
                    else {
                        this.danhSachNhanVienCongTy.HoKhauTinhThanhId = null;
                        this.danhSachNhanVienCongTy.HoKhauQuanHuyenId = null;
                    }
                };
                KhamDoanHopDongKhamListNhanVienPopupComponent.prototype.ThongTinBenhNhanNgaySinhChange = function (event) {
                    if (this.danhSachNhanVienCongTy.NgayThangNamSinh != null) {
                        this.danhSachNhanVienCongTy.NamSinh = this.danhSachNhanVienCongTy.NgayThangNamSinh.getFullYear();
                        this.danhSachNhanVienCongTy.Tuoi = new Date().getFullYear() - this.danhSachNhanVienCongTy.NamSinh;
                    }
                    else {
                        this.danhSachNhanVienCongTy.NgayThangNamSinh = null;
                    }
                };
                KhamDoanHopDongKhamListNhanVienPopupComponent.prototype.ThongTinBenhNhanNamSinhChange = function (event) {
                    this.danhSachNhanVienCongTy.Tuoi = new Date().getFullYear() - event;
                };
                KhamDoanHopDongKhamListNhanVienPopupComponent.prototype.getDataHopDongKhamSucKhoeNhanVien = function (id) {
                    var _this = this;
                    this.showPopupLoadingData();
                    this.apiService.get("KhamDoan/GetThongTinHopDongKhamSucKhoeNhanVien?hopDongKhamSucKhoeNhanVienId=" + id).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            _this.danhSachNhanVienCongTy = resultData;
                            _this.dataSourceCongViec.data = resultData.NgheCongViecTruocDays != null ? resultData.NgheCongViecTruocDays : [];
                            _this.dataSourceTienSuBenh.data = resultData.TienSuBenhs != null ? resultData.TienSuBenhs : [];
                            _this.closePopupLoadingData();
                        }
                    }, function (err) {
                        _this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                KhamDoanHopDongKhamListNhanVienPopupComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                KhamDoanHopDongKhamListNhanVienPopupComponent.prototype.showLoadingPopup = function () {
                    if (!this.loadingPopup) {
                        this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang tải...' }
                        });
                    }
                };
                KhamDoanHopDongKhamListNhanVienPopupComponent.prototype.showSavingPopup = function () {
                    if (!this.loadingPopup) {
                        this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang lưu...' }
                        });
                    }
                };
                KhamDoanHopDongKhamListNhanVienPopupComponent.prototype.closeAllDialogs = function () {
                    if (this.loadingPopup) {
                        this.loadingPopup.close();
                        this.loadingPopup = null;
                    }
                };
                return KhamDoanHopDongKhamListNhanVienPopupComponent;
            }());
            KhamDoanHopDongKhamListNhanVienPopupComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('congViecTemplate', { static: true })
            ], KhamDoanHopDongKhamListNhanVienPopupComponent.prototype, "congViecTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tuNgayTemplate', { static: true })
            ], KhamDoanHopDongKhamListNhanVienPopupComponent.prototype, "tuNgayTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('denNgayTemplate', { static: true })
            ], KhamDoanHopDongKhamListNhanVienPopupComponent.prototype, "denNgayTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], KhamDoanHopDongKhamListNhanVienPopupComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('footerTemplate', { static: true })
            ], KhamDoanHopDongKhamListNhanVienPopupComponent.prototype, "footerTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiTienSuBenhTemplate', { static: true })
            ], KhamDoanHopDongKhamListNhanVienPopupComponent.prototype, "loaiTienSuBenhTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('benhNgheNghiepTemplate', { static: true })
            ], KhamDoanHopDongKhamListNhanVienPopupComponent.prototype, "benhNgheNghiepTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenBenhTemplate', { static: true })
            ], KhamDoanHopDongKhamListNhanVienPopupComponent.prototype, "tenBenhTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('phatHienNamTemplate', { static: true })
            ], KhamDoanHopDongKhamListNhanVienPopupComponent.prototype, "phatHienNamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTienSuBenhTemplate', { static: true })
            ], KhamDoanHopDongKhamListNhanVienPopupComponent.prototype, "actionTienSuBenhTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('footerTienSuBenhTemplate', { static: true })
            ], KhamDoanHopDongKhamListNhanVienPopupComponent.prototype, "footerTienSuBenhTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('comboboxQuanHuyen', { static: true })
            ], KhamDoanHopDongKhamListNhanVienPopupComponent.prototype, "comboboxQuanHuyen", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('comboboxPhuongXa', { static: true })
            ], KhamDoanHopDongKhamListNhanVienPopupComponent.prototype, "comboboxPhuongXa", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('comboboxQuanHuyenHoKhau', { static: true })
            ], KhamDoanHopDongKhamListNhanVienPopupComponent.prototype, "comboboxQuanHuyenHoKhau", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('comboboxPhuongXaHoKhau', { static: true })
            ], KhamDoanHopDongKhamListNhanVienPopupComponent.prototype, "comboboxPhuongXaHoKhau", void 0);
            KhamDoanHopDongKhamListNhanVienPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-kham-doan-hop-dong-kham-list-nhan-vien-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-hop-dong-kham-list-nhan-vien-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-list-nhan-vien-popup/kham-doan-hop-dong-kham-list-nhan-vien-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-hop-dong-kham-list-nhan-vien-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-list-nhan-vien-popup/kham-doan-hop-dong-kham-list-nhan-vien-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], KhamDoanHopDongKhamListNhanVienPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-list/kham-doan-hop-dong-kham-list.component.scss": 
        /*!*****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-list/kham-doan-hop-dong-kham-list.component.scss ***!
          \*****************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".greenText {\n  color: green;\n}\n\n.orangeText {\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4taG9wLWRvbmcta2hhbS9raGFtLWRvYW4taG9wLWRvbmcta2hhbS1saXN0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxca2hhbS1kb2FuXFxraGFtLWRvYW4taG9wLWRvbmcta2hhbVxca2hhbS1kb2FuLWhvcC1kb25nLWtoYW0tbGlzdFxca2hhbS1kb2FuLWhvcC1kb25nLWtoYW0tbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4taG9wLWRvbmcta2hhbS9raGFtLWRvYW4taG9wLWRvbmcta2hhbS1saXN0L2toYW0tZG9hbi1ob3AtZG9uZy1raGFtLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4va2hhbS1kb2FuL2toYW0tZG9hbi1ob3AtZG9uZy1raGFtL2toYW0tZG9hbi1ob3AtZG9uZy1raGFtLWxpc3Qva2hhbS1kb2FuLWhvcC1kb25nLWtoYW0tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmVlblRleHQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5vcmFuZ2VUZXh0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn0iLCIuZ3JlZW5UZXh0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ub3JhbmdlVGV4dCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-list/kham-doan-hop-dong-kham-list.component.ts": 
        /*!***************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-list/kham-doan-hop-dong-kham-list.component.ts ***!
          \***************************************************************************************************************************************/
        /*! exports provided: KhamDoanHopDongKhamListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanHopDongKhamListComponent", function () { return KhamDoanHopDongKhamListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _iconify_icons_ic_person_add__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/person-add */ "./node_modules/@iconify/icons-ic/person-add.js");
            /* harmony import */ var _iconify_icons_ic_person_add__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_person_add__WEBPACK_IMPORTED_MODULE_7__);
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _kham_doan_hop_dong_kham_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../kham-doan-hop-dong-kham.model */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham.model.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var _kham_doan_hop_dong_kham_list_nhan_vien_popup_kham_doan_hop_dong_kham_list_nhan_vien_popup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../kham-doan-hop-dong-kham-list-nhan-vien-popup/kham-doan-hop-dong-kham-list-nhan-vien-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-list-nhan-vien-popup/kham-doan-hop-dong-kham-list-nhan-vien-popup.component.ts");
            var KhamDoanHopDongKhamListComponent = /** @class */ (function () {
                function KhamDoanHopDongKhamListComponent(authService, notificationService, route, location, dialog, apiService, router) {
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
                    this.icPersonAdd = _iconify_icons_ic_person_add__WEBPACK_IMPORTED_MODULE_7___default.a;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
                    this.baseRoute = "/kham-doan/hop-dong-kham";
                    this.dataSachDiaDiemKham = { data: [], total: 0 };
                    this.gridColumns = [];
                    this._gridColumnsFilter = [];
                    this._isCheckColumnFilter = true;
                    this.strAdditionalSearchString = "";
                    this.timKiemObj = new _kham_doan_hop_dong_kham_model__WEBPACK_IMPORTED_MODULE_9__["KhamDoanHopDongKhamTimKiem"]();
                    this.sortHopDongKham = [{ field: "TrangThai", dir: "asc" }, { field: "Id", dir: "desc" }];
                }
                KhamDoanHopDongKhamListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_16__["DocumentType"].KhamDoanHopDongKham;
                    var hasLocalSearchString = false;
                    if (this.route.snapshot.queryParams.holdQuery != undefined) {
                        var holdQuery = this.route.snapshot.queryParams.holdQuery;
                        if (holdQuery != null && holdQuery) {
                            var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_17__["LocalStorageHelper"].getItem("additionalSearchStringKhamDoanDanhSachHopDongKham");
                            if (additionalSearchString != null) {
                                this.timKiemObj = JSON.parse(additionalSearchString);
                                this.gridChild.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
                                hasLocalSearchString = true;
                            }
                        }
                    }
                    if (!hasLocalSearchString) {
                        this.gridChild.additionalSearchString = null;
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_17__["LocalStorageHelper"].removeItem("additionalSearchStringKhamDoanDanhSachHopDongKham");
                    }
                    this.gridColumns = [
                        { Field: "SoHopDong", Title: "SHĐ", Width: 100, Sortable: true, Template: this.maHopDongTemplate },
                        { Field: "TenCongTy", Title: "Tên công ty", Width: 240, Sortable: true },
                        { Field: "NgayHopDong", Title: "Ngày hợp đồng", Width: 100, Sortable: true, Template: this.ngayHopDongTemplate },
                        { Field: "DiaChiKham", Title: "Địa điểm khám", Width: 120, Sortable: true },
                        { Field: "LoaiHopDongDisplay", Title: "Loại hợp đồng", Width: 120, Sortable: true },
                        { Field: "NgayKham", Title: "Ngày khám", Width: 100, Sortable: true, Template: this.ngayKhamTemplate },
                        { Field: "TrangThai", Title: "Trạng thái", Width: 100, Sortable: true, Template: this.trangThaiTemplate },
                        { Field: "Action", Title: "", Width: 50, Sortable: false, Template: this.actionTemplate }
                    ];
                    this._gridColumnsFilter = this.gridColumns.filter(function (p) { return p.Title != ''; });
                };
                KhamDoanHopDongKhamListComponent.prototype.searchChanges = function (event) {
                    if ((event == null || event == "") && this.strAdditionalSearchString != "") {
                        this.timKiemNangCao();
                    }
                };
                KhamDoanHopDongKhamListComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.timKiemNangCao();
                    }
                };
                KhamDoanHopDongKhamListComponent.prototype.clearSearch = function () {
                    this.timKiemObj.SearchString = null;
                    this.gridChild.searchString = null;
                    this.timKiemNangCao();
                };
                KhamDoanHopDongKhamListComponent.prototype.timKiemNangCao = function () {
                    this.location.replaceState(this.baseRoute + '?holdQuery=true');
                    var queryString = JSON.stringify(this.timKiemObj);
                    this.gridChild._additionalSearchString = this.strAdditionalSearchString = queryString;
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_17__["LocalStorageHelper"].setItem("additionalSearchStringKhamDoanDanhSachHopDongKham", queryString);
                    this.gridChild.search();
                };
                KhamDoanHopDongKhamListComponent.prototype.xuLyXuatExcel = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Process)) {
                        this.apiService.postExportExcel("KhamDoan/ExportDanhSachHopDongKham", this.gridChild._gridQueryInfo).subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_20__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "HopDongKham" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanHopDongKhamListComponent.prototype.showPopupChiTiet = function (id) {
                    if (id === void 0) { id = null; }
                    var securityOperation = src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Add;
                    var url = '/them';
                    if (id != null) {
                        securityOperation = src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Update;
                        url = '/chi-tiet/';
                    }
                    if (this.authService.hasPermission(this.documentType, securityOperation)) {
                        this.router.navigate([this.baseRoute + url + (id == null ? '' : id)]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanHopDongKhamListComponent.prototype.showPopupNhanVien = function (id) {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Update)) {
                        this.dialog.open(_kham_doan_hop_dong_kham_list_nhan_vien_popup_kham_doan_hop_dong_kham_list_nhan_vien_popup_component__WEBPACK_IMPORTED_MODULE_23__["KhamDoanHopDongKhamListNhanVienPopupComponent"], {
                            disableClose: false,
                            width: '1600px',
                            data: { Id: id }
                        }).afterClosed().subscribe(function (result) {
                            _this.gridChild.search();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanHopDongKhamListComponent.prototype.xoa = function (Id) {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Delete)) {
                        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_20__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__["SystemMessage"].MessConfirm, ["xóa"]) }
                        }).afterClosed().subscribe(function (result) {
                            if (result == "Yes") {
                                _this.apiService.delete("KhamDoan/XuLyXoaHopDongKham?id=" + Id).subscribe(function (res) {
                                    if (res.Item1) {
                                        _this.notificationService.showError(res.Item2);
                                    }
                                    else {
                                        _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_20__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__["SystemMessage"].ActionSuccessfully, ["Xóa"]));
                                        _this.gridChild.search();
                                    }
                                }, function (err) {
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                return KhamDoanHopDongKhamListComponent;
            }());
            KhamDoanHopDongKhamListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_15__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maHopDongTemplate', { static: true })
            ], KhamDoanHopDongKhamListComponent.prototype, "maHopDongTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayHopDongTemplate', { static: true })
            ], KhamDoanHopDongKhamListComponent.prototype, "ngayHopDongTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayKhamTemplate', { static: true })
            ], KhamDoanHopDongKhamListComponent.prototype, "ngayKhamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
            ], KhamDoanHopDongKhamListComponent.prototype, "trangThaiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], KhamDoanHopDongKhamListComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridParent', { static: true })
            ], KhamDoanHopDongKhamListComponent.prototype, "gridChild", void 0);
            KhamDoanHopDongKhamListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-kham-doan-hop-dong-kham-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-hop-dong-kham-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-list/kham-doan-hop-dong-kham-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-hop-dong-kham-list.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-list/kham-doan-hop-dong-kham-list.component.scss")).default]
                })
            ], KhamDoanHopDongKhamListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-routing.module.ts": 
        /*!**********************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-routing.module.ts ***!
          \**********************************************************************************************************/
        /*! exports provided: KhamDoanHopDongKhamRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanHopDongKhamRoutingModule", function () { return KhamDoanHopDongKhamRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _kham_doan_hop_dong_kham_detail_popup_kham_doan_hop_dong_kham_detail_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kham-doan-hop-dong-kham-detail-popup/kham-doan-hop-dong-kham-detail-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-detail-popup/kham-doan-hop-dong-kham-detail-popup.component.ts");
            /* harmony import */ var _kham_doan_hop_dong_kham_list_kham_doan_hop_dong_kham_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kham-doan-hop-dong-kham-list/kham-doan-hop-dong-kham-list.component */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-list/kham-doan-hop-dong-kham-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _kham_doan_hop_dong_kham_list_kham_doan_hop_dong_kham_list_component__WEBPACK_IMPORTED_MODULE_7__["KhamDoanHopDongKhamListComponent"],
                    data: {
                        title: "Hợp đồng khám sức khỏe",
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanHopDongKham,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                },
                {
                    path: 'them',
                    component: _kham_doan_hop_dong_kham_detail_popup_kham_doan_hop_dong_kham_detail_popup_component__WEBPACK_IMPORTED_MODULE_6__["KhamDoanHopDongKhamDetailPopupComponent"],
                    data: {
                        title: 'Thêm hợp đồng khám sức khỏe',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanHopDongKham,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                },
                {
                    path: 'chi-tiet/:id',
                    component: _kham_doan_hop_dong_kham_detail_popup_kham_doan_hop_dong_kham_detail_popup_component__WEBPACK_IMPORTED_MODULE_6__["KhamDoanHopDongKhamDetailPopupComponent"],
                    data: {
                        title: 'Chi tiết hợp đồng khám sức khỏe',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanHopDongKham,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                }
            ];
            var KhamDoanHopDongKhamRoutingModule = /** @class */ (function () {
                function KhamDoanHopDongKhamRoutingModule() {
                }
                return KhamDoanHopDongKhamRoutingModule;
            }());
            KhamDoanHopDongKhamRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], KhamDoanHopDongKhamRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-tim-nhan-vien-popup/kham-doan-hop-dong-kham-tim-nhan-vien-popup.component.scss": 
        /*!***********************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-tim-nhan-vien-popup/kham-doan-hop-dong-kham-tim-nhan-vien-popup.component.scss ***!
          \***********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWhvcC1kb25nLWtoYW0va2hhbS1kb2FuLWhvcC1kb25nLWtoYW0tdGltLW5oYW4tdmllbi1wb3B1cC9raGFtLWRvYW4taG9wLWRvbmcta2hhbS10aW0tbmhhbi12aWVuLXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-tim-nhan-vien-popup/kham-doan-hop-dong-kham-tim-nhan-vien-popup.component.ts": 
        /*!*********************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-tim-nhan-vien-popup/kham-doan-hop-dong-kham-tim-nhan-vien-popup.component.ts ***!
          \*********************************************************************************************************************************************************************/
        /*! exports provided: KhamDoanHopDongKhamTimNhanVienPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanHopDongKhamTimNhanVienPopupComponent", function () { return KhamDoanHopDongKhamTimNhanVienPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _tiep_nhan_benh_nhan_tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model.ts");
            var KhamDoanHopDongKhamTimNhanVienPopupComponent = /** @class */ (function () {
                function KhamDoanHopDongKhamTimNhanVienPopupComponent(data, dialog, dialogRef, apiService) {
                    this.data = data;
                    this.dialog = dialog;
                    this.dialogRef = dialogRef;
                    this.apiService = apiService;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.gridColumns = [];
                    this.timKiemBenhNhanSearch = new _tiep_nhan_benh_nhan_tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_5__["TimKiemBenhNhanSearch"]();
                    this.sort = [
                        {
                            field: "MaBN",
                            dir: "asc",
                        },
                    ];
                    this.urlGetDataGrid = "TiepNhanBenhNhan/GetDataForGridAsyncPopupTimKiem";
                    this.urlGetTotalPageGrid = "TiepNhanBenhNhan/GetTotalPageForGridAsyncPopupTimKiem";
                    if (data == null || data == undefined) {
                        data = new _tiep_nhan_benh_nhan_tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_5__["DataTimKiem"]();
                    }
                }
                KhamDoanHopDongKhamTimNhanVienPopupComponent.prototype.ngOnInit = function () {
                    this.gridColumns = [
                        { Field: "MaBN", Title: "Mã NB", Width: 80, Sortable: false },
                        { Field: "BHYTMaSoThe", Title: "Mã thẻ BHYT", Width: 150, Sortable: false },
                        { Field: "HoTen", Title: "Họ và tên", Width: 150, Sortable: false },
                        { Field: "NgaySinhDisplay", Title: "Ngày sinh", Width: 120, Sortable: false },
                        { Field: "GioiTinhDisplay", Title: "GT", Width: 60, Sortable: false },
                        { Field: "SoChungMinhThu", Title: "CMND", Width: 150, Sortable: false },
                        { Field: "SoDienThoaiDisplay", Title: "Điện thoại", Width: 120, Sortable: false },
                        { Field: "DiaChi", Title: "Địa chỉ", Width: 300, Sortable: false },
                        { Field: "Action", Title: "", Width: 60, Template: this.actionTemplate },
                    ];
                    this.TimKiem();
                };
                KhamDoanHopDongKhamTimNhanVienPopupComponent.prototype.close = function (answer) {
                    this.dialogRef.close(answer);
                };
                KhamDoanHopDongKhamTimNhanVienPopupComponent.prototype.chonBenhNhan = function (item) {
                    var _this = this;
                    this.apiService.post("TiepNhanBenhNhan/GetBenhNhan/?benhNhanId=" + item.Id).subscribe(function (resultData) {
                        _this.dialogRef.close(resultData);
                    }, function (err) {
                    });
                };
                KhamDoanHopDongKhamTimNhanVienPopupComponent.prototype.onKey = function (event) {
                    if (event.keyCode === 13) {
                        this.TimKiem();
                    }
                };
                KhamDoanHopDongKhamTimNhanVienPopupComponent.prototype.TimKiem = function () {
                    this.searchData();
                };
                KhamDoanHopDongKhamTimNhanVienPopupComponent.prototype.searchData = function () {
                    var stringClone = JSON.parse(JSON.stringify(this.timKiemBenhNhanSearch));
                    if (this.timKiemBenhNhanSearch.NgaySinhFormat != null) {
                        stringClone.NgaySinhFormat = this.removeTimeZone(new Date(this.timKiemBenhNhanSearch.NgaySinhFormat)).replace('Z', '');
                    }
                    this.queryStrings = JSON.stringify(stringClone);
                    if (this.grid != undefined) {
                        this.grid._additionalSearchString = this.queryStrings;
                        this.grid.search();
                    }
                };
                KhamDoanHopDongKhamTimNhanVienPopupComponent.prototype.removeTimeZone = function (date) {
                    var UTCDate = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes()) - date.getTimezoneOffset();
                    return new Date(UTCDate).toISOString();
                };
                return KhamDoanHopDongKhamTimNhanVienPopupComponent;
            }());
            KhamDoanHopDongKhamTimNhanVienPopupComponent.ctorParameters = function () { return [
                { type: _tiep_nhan_benh_nhan_tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_5__["DataTimKiem"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('grid', { static: true })
            ], KhamDoanHopDongKhamTimNhanVienPopupComponent.prototype, "grid", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], KhamDoanHopDongKhamTimNhanVienPopupComponent.prototype, "actionTemplate", void 0);
            KhamDoanHopDongKhamTimNhanVienPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-kham-doan-hop-dong-kham-tim-nhan-vien-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-hop-dong-kham-tim-nhan-vien-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-tim-nhan-vien-popup/kham-doan-hop-dong-kham-tim-nhan-vien-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-hop-dong-kham-tim-nhan-vien-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-tim-nhan-vien-popup/kham-doan-hop-dong-kham-tim-nhan-vien-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], KhamDoanHopDongKhamTimNhanVienPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham.module.ts": 
        /*!**************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham.module.ts ***!
          \**************************************************************************************************/
        /*! exports provided: KhamDoanHopDongKhamModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanHopDongKhamModule", function () { return KhamDoanHopDongKhamModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _kham_doan_hop_dong_kham_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kham-doan-hop-dong-kham-routing.module */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-routing.module.ts");
            /* harmony import */ var _kham_doan_hop_dong_kham_list_kham_doan_hop_dong_kham_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kham-doan-hop-dong-kham-list/kham-doan-hop-dong-kham-list.component */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-list/kham-doan-hop-dong-kham-list.component.ts");
            /* harmony import */ var _kham_doan_hop_dong_kham_detail_popup_kham_doan_hop_dong_kham_detail_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kham-doan-hop-dong-kham-detail-popup/kham-doan-hop-dong-kham-detail-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-detail-popup/kham-doan-hop-dong-kham-detail-popup.component.ts");
            /* harmony import */ var _kham_doan_hop_dong_kham_list_nhan_vien_popup_kham_doan_hop_dong_kham_list_nhan_vien_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kham-doan-hop-dong-kham-list-nhan-vien-popup/kham-doan-hop-dong-kham-list-nhan-vien-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-list-nhan-vien-popup/kham-doan-hop-dong-kham-list-nhan-vien-popup.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-intl */ "./node_modules/@progress/kendo-angular-intl/dist/fesm2015/index.js");
            /* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            /* harmony import */ var _kham_doan_hop_dong_kham_chon_file_popup_kham_doan_hop_dong_kham_chon_file_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./kham-doan-hop-dong-kham-chon-file-popup/kham-doan-hop-dong-kham-chon-file-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-chon-file-popup/kham-doan-hop-dong-kham-chon-file-popup.component.ts");
            /* harmony import */ var _kham_doan_goi_kham_suc_khoe_kham_doan_goi_kham_suc_khoe_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe.module */ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe.module.ts");
            /* harmony import */ var _kham_doan_hop_dong_kham_tim_nhan_vien_popup_kham_doan_hop_dong_kham_tim_nhan_vien_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./kham-doan-hop-dong-kham-tim-nhan-vien-popup/kham-doan-hop-dong-kham-tim-nhan-vien-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham-tim-nhan-vien-popup/kham-doan-hop-dong-kham-tim-nhan-vien-popup.component.ts");
            /* harmony import */ var _goi_kham_suc_khoe_chon_file_popup_goi_kham_suc_khoe_chon_file_popup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./goi-kham-suc-khoe-chon-file-popup/goi-kham-suc-khoe-chon-file-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/goi-kham-suc-khoe-chon-file-popup/goi-kham-suc-khoe-chon-file-popup.component.ts");
            /* harmony import */ var _danh_sach_phong_kham_cong_ty_popup_danh_sach_phong_kham_cong_ty_popup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./danh-sach-phong-kham-cong-ty-popup/danh-sach-phong-kham-cong-ty-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/danh-sach-phong-kham-cong-ty-popup/danh-sach-phong-kham-cong-ty-popup.component.ts");
            /* harmony import */ var _thong_tin_nhan_vien_popup_thong_tin_nhan_vien_popup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./thong-tin-nhan-vien-popup/thong-tin-nhan-vien-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/thong-tin-nhan-vien-popup/thong-tin-nhan-vien-popup.component.ts");
            /* harmony import */ var _thong_tin_goi_kham_popup_thong_tin_goi_kham_popup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./thong-tin-goi-kham-popup/thong-tin-goi-kham-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/thong-tin-goi-kham-popup/thong-tin-goi-kham-popup.component.ts");
            /* harmony import */ var _thong_tin_ket_thuc_hop_popup_thong_tin_ket_thuc_hop_popup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./thong-tin-ket-thuc-hop-popup/thong-tin-ket-thuc-hop-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/thong-tin-ket-thuc-hop-popup/thong-tin-ket-thuc-hop-popup.component.ts");
            /* harmony import */ var _kham_doan_dv_thong_ke_popup_kham_doan_dv_thong_ke_popup_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./kham-doan-dv-thong-ke-popup/kham-doan-dv-thong-ke-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-dv-thong-ke-popup/kham-doan-dv-thong-ke-popup.component.ts");
            /* harmony import */ var _kham_doan_dv_goi_kham_popup_kham_doan_dv_goi_kham_popup_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./kham-doan-dv-goi-kham-popup/kham-doan-dv-goi-kham-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-dv-goi-kham-popup/kham-doan-dv-goi-kham-popup.component.ts");
            /* harmony import */ var _mo_lai_hop_dong_kham_popup_mo_lai_hop_dong_kham_popup_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./mo-lai-hop-dong-kham-popup/mo-lai-hop-dong-kham-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/mo-lai-hop-dong-kham-popup/mo-lai-hop-dong-kham-popup.component.ts");
            var KhamDoanHopDongKhamModule = /** @class */ (function () {
                function KhamDoanHopDongKhamModule() {
                }
                return KhamDoanHopDongKhamModule;
            }());
            KhamDoanHopDongKhamModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _kham_doan_hop_dong_kham_list_kham_doan_hop_dong_kham_list_component__WEBPACK_IMPORTED_MODULE_4__["KhamDoanHopDongKhamListComponent"],
                        _kham_doan_hop_dong_kham_detail_popup_kham_doan_hop_dong_kham_detail_popup_component__WEBPACK_IMPORTED_MODULE_5__["KhamDoanHopDongKhamDetailPopupComponent"],
                        _kham_doan_hop_dong_kham_list_nhan_vien_popup_kham_doan_hop_dong_kham_list_nhan_vien_popup_component__WEBPACK_IMPORTED_MODULE_6__["KhamDoanHopDongKhamListNhanVienPopupComponent"],
                        _kham_doan_hop_dong_kham_chon_file_popup_kham_doan_hop_dong_kham_chon_file_popup_component__WEBPACK_IMPORTED_MODULE_19__["KhamDoanHopDongKhamChonFilePopupComponent"],
                        _kham_doan_hop_dong_kham_tim_nhan_vien_popup_kham_doan_hop_dong_kham_tim_nhan_vien_popup_component__WEBPACK_IMPORTED_MODULE_21__["KhamDoanHopDongKhamTimNhanVienPopupComponent"],
                        _goi_kham_suc_khoe_chon_file_popup_goi_kham_suc_khoe_chon_file_popup_component__WEBPACK_IMPORTED_MODULE_22__["HopDongKhamChonGoiKhamFilePopupComponent"],
                        _thong_tin_nhan_vien_popup_thong_tin_nhan_vien_popup_component__WEBPACK_IMPORTED_MODULE_24__["ThongTinNhanVienPopupComponent"],
                        _thong_tin_goi_kham_popup_thong_tin_goi_kham_popup_component__WEBPACK_IMPORTED_MODULE_25__["ThongTinGoiKhamPopupComponent"],
                        _danh_sach_phong_kham_cong_ty_popup_danh_sach_phong_kham_cong_ty_popup_component__WEBPACK_IMPORTED_MODULE_23__["DanhSachPhongKhamCongTyComponent"],
                        _thong_tin_ket_thuc_hop_popup_thong_tin_ket_thuc_hop_popup_component__WEBPACK_IMPORTED_MODULE_26__["ThongTinKetThucHopDongPopupComponent"],
                        _kham_doan_dv_thong_ke_popup_kham_doan_dv_thong_ke_popup_component__WEBPACK_IMPORTED_MODULE_27__["KhamDoanDvThongKePopupComponent"],
                        _kham_doan_dv_goi_kham_popup_kham_doan_dv_goi_kham_popup_component__WEBPACK_IMPORTED_MODULE_28__["KhamDoanDvGoiKhamPopupComponent"],
                        _mo_lai_hop_dong_kham_popup_mo_lai_hop_dong_kham_popup_component__WEBPACK_IMPORTED_MODULE_29__["MoLaiHopDongKhamComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _kham_doan_hop_dong_kham_routing_module__WEBPACK_IMPORTED_MODULE_3__["KhamDoanHopDongKhamRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_9__["PageLayoutModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_12__["TooltipModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_18__["LayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__["GridModule"],
                        _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_15__["IntlModule"],
                        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_16__["PdfViewerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                        _kham_doan_goi_kham_suc_khoe_kham_doan_goi_kham_suc_khoe_module__WEBPACK_IMPORTED_MODULE_20__["KhamDoanGoiKhamSucKhoeModule"]
                    ],
                    entryComponents: [
                        _kham_doan_hop_dong_kham_detail_popup_kham_doan_hop_dong_kham_detail_popup_component__WEBPACK_IMPORTED_MODULE_5__["KhamDoanHopDongKhamDetailPopupComponent"],
                        _kham_doan_hop_dong_kham_list_nhan_vien_popup_kham_doan_hop_dong_kham_list_nhan_vien_popup_component__WEBPACK_IMPORTED_MODULE_6__["KhamDoanHopDongKhamListNhanVienPopupComponent"],
                        _kham_doan_hop_dong_kham_chon_file_popup_kham_doan_hop_dong_kham_chon_file_popup_component__WEBPACK_IMPORTED_MODULE_19__["KhamDoanHopDongKhamChonFilePopupComponent"],
                        _kham_doan_hop_dong_kham_tim_nhan_vien_popup_kham_doan_hop_dong_kham_tim_nhan_vien_popup_component__WEBPACK_IMPORTED_MODULE_21__["KhamDoanHopDongKhamTimNhanVienPopupComponent"],
                        _goi_kham_suc_khoe_chon_file_popup_goi_kham_suc_khoe_chon_file_popup_component__WEBPACK_IMPORTED_MODULE_22__["HopDongKhamChonGoiKhamFilePopupComponent"],
                        _thong_tin_nhan_vien_popup_thong_tin_nhan_vien_popup_component__WEBPACK_IMPORTED_MODULE_24__["ThongTinNhanVienPopupComponent"],
                        _thong_tin_goi_kham_popup_thong_tin_goi_kham_popup_component__WEBPACK_IMPORTED_MODULE_25__["ThongTinGoiKhamPopupComponent"],
                        _danh_sach_phong_kham_cong_ty_popup_danh_sach_phong_kham_cong_ty_popup_component__WEBPACK_IMPORTED_MODULE_23__["DanhSachPhongKhamCongTyComponent"],
                        _thong_tin_ket_thuc_hop_popup_thong_tin_ket_thuc_hop_popup_component__WEBPACK_IMPORTED_MODULE_26__["ThongTinKetThucHopDongPopupComponent"],
                        _kham_doan_dv_thong_ke_popup_kham_doan_dv_thong_ke_popup_component__WEBPACK_IMPORTED_MODULE_27__["KhamDoanDvThongKePopupComponent"],
                        _kham_doan_dv_goi_kham_popup_kham_doan_dv_goi_kham_popup_component__WEBPACK_IMPORTED_MODULE_28__["KhamDoanDvGoiKhamPopupComponent"],
                        _mo_lai_hop_dong_kham_popup_mo_lai_hop_dong_kham_popup_component__WEBPACK_IMPORTED_MODULE_29__["MoLaiHopDongKhamComponent"]
                    ]
                })
            ], KhamDoanHopDongKhamModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/mo-lai-hop-dong-kham-popup/mo-lai-hop-dong-kham-popup.component.scss": 
        /*!*************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/mo-lai-hop-dong-kham-popup/mo-lai-hop-dong-kham-popup.component.scss ***!
          \*************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-bottom: 100%;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\nheight_table {\n  height: 60px !important;\n}\n\n.xet_nghiem {\n  font-size: 17px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4taG9wLWRvbmcta2hhbS9tby1sYWktaG9wLWRvbmcta2hhbS1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGtoYW0tZG9hblxca2hhbS1kb2FuLWhvcC1kb25nLWtoYW1cXG1vLWxhaS1ob3AtZG9uZy1raGFtLXBvcHVwXFxtby1sYWktaG9wLWRvbmcta2hhbS1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4taG9wLWRvbmcta2hhbS9tby1sYWktaG9wLWRvbmcta2hhbS1wb3B1cC9tby1sYWktaG9wLWRvbmcta2hhbS1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWhvcC1kb25nLWtoYW0vbW8tbGFpLWhvcC1kb25nLWtoYW0tcG9wdXAvbW8tbGFpLWhvcC1kb25nLWtoYW0tcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5oZWlnaHRfdGFibGUge1xuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbn1cblxuLnhldF9uZ2hpZW0ge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59IiwiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaGVpZ2h0X3RhYmxlIHtcbiAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi54ZXRfbmdoaWVtIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/mo-lai-hop-dong-kham-popup/mo-lai-hop-dong-kham-popup.component.ts": 
        /*!***********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/mo-lai-hop-dong-kham-popup/mo-lai-hop-dong-kham-popup.component.ts ***!
          \***********************************************************************************************************************************/
        /*! exports provided: MoLaiHopDongKhamComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoLaiHopDongKhamComponent", function () { return MoLaiHopDongKhamComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/baseline-info */ "./node_modules/@iconify/icons-ic/baseline-info.js");
            /* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_4__);
            var MoLaiHopDongKhamComponent = /** @class */ (function () {
                function MoLaiHopDongKhamComponent(cdRef, dialogRef, data) {
                    this.cdRef = cdRef;
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.Title = null;
                    this.Message = null;
                    this.ButtonYes = "Có";
                    this.ButtonNo = "Không";
                    this.gridColumns = [];
                    this.icInfo = _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.lyDoMoLaiHopDong = "";
                    this.validationErrors = [];
                }
                MoLaiHopDongKhamComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    setInterval(function () {
                        console.log(_this.data);
                    }, 5000);
                    this.Title = this.data.Title;
                    this.Message = this.data.Message;
                };
                MoLaiHopDongKhamComponent.prototype.close = function (result) {
                    if (result === "Yes") {
                        this.dialogRef.close(this.lyDoMoLaiHopDong);
                    }
                    else {
                        this.dialogRef.close(null);
                    }
                };
                return MoLaiHopDongKhamComponent;
            }());
            MoLaiHopDongKhamComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("actionTemplate", { static: true })
            ], MoLaiHopDongKhamComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("actionTooltipTemplate", { static: true })
            ], MoLaiHopDongKhamComponent.prototype, "actionTooltipTemplate", void 0);
            MoLaiHopDongKhamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-mo-lai-hop-dong-kham-popup",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mo-lai-hop-dong-kham-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/mo-lai-hop-dong-kham-popup/mo-lai-hop-dong-kham-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mo-lai-hop-dong-kham-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/mo-lai-hop-dong-kham-popup/mo-lai-hop-dong-kham-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], MoLaiHopDongKhamComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/thong-tin-goi-kham-popup/thong-tin-goi-kham-popup.component.scss": 
        /*!*********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/thong-tin-goi-kham-popup/thong-tin-goi-kham-popup.component.scss ***!
          \*********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".menu-form-wrapper .mat-menu-content {\n  padding: 8px;\n}\n\n.color-red {\n  color: red;\n}\n\n.padding-thu-tien {\n  padding: 5px 16px 28px 13px !important;\n}\n\n.po-right {\n  text-align: right;\n  flex-grow: 1;\n}\n\n.color-green {\n  color: green;\n}\n\n.padding-left80px {\n  padding-left: 80px !important;\n}\n\n.d-unset {\n  display: unset !important;\n}\n\nkendo-splitter {\n  border-width: 0px !important;\n  margin-bottom: 10px;\n}\n\nkendo-splitter ul > li.right-0 {\n  margin-right: 0px;\n  padding-right: 15px;\n}\n\nfieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em !important;\n  padding-bottom: 0.625em !important;\n  padding-left: 0.75em !important;\n  padding-right: 0.75em !important;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset legend {\n  margin-left: 15px;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline-block !important;\n}\n\nkendo-panelbar-item ul.inline > li {\n  padding-right: 10px !important;\n  padding-bottom: 0.625em;\n  display: inline-block !important;\n}\n\nkendo-panelbar-item .inline_b {\n  display: inline-block !important;\n  margin-right: 10px;\n  padding-right: 15px;\n}\n\nkendo-panelbar-item .panelbar-row {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\nkendo-panelbar-item .panelbar-row:hover {\n  background: rgba(227, 242, 253, 0.5);\n}\n\nkendo-panelbar-item .panelbar-group-b {\n  border-top: 1px rgba(0, 0, 0, 0.08) outset;\n}\n\n.sticky-list {\n  top: 64px;\n  position: sticky !important;\n  position: -webkit-sticky !important;\n  z-index: 9999;\n}\n\n.sticky-tab {\n  top: 64px;\n  position: sticky !important;\n  position: -webkit-sticky !important;\n  z-index: 9999;\n  background: #f5f7fa;\n  overflow-x: auto;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.sticky-tab ul {\n  margin: 0;\n  padding-top: 10px;\n  padding-bottom: 0;\n  border-bottom: 1px solid #ccc;\n}\n\n.sticky-tab ul li {\n  display: inline-block;\n  list-style-type: none;\n  margin-right: 25px;\n  font-size: 15px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n  color: #2e384d;\n  cursor: pointer;\n  transition: all 300ms linear;\n  border-bottom: 3px solid #f5f7fa;\n}\n\n.sticky-tab ul li.active {\n  font-size: 15px;\n  font-weight: bold;\n  color: #005dab;\n  border-bottom: 4px solid #005dab;\n}\n\n.sticky-tab ul li:hover {\n  border-bottom: 3px solid #005dab;\n}\n\n.sticky-tab ul li.resolved {\n  color: #005dab;\n}\n\n.sticky-tab ul li.processing {\n  color: #ff9800;\n}\n\n.sticky-tab ul li.unfulfilled {\n  color: #9e9e9e;\n}\n\n.sticky-tab .ps-scrollbar-x-rail {\n  bottom: 0 !important;\n  height: 5px !important;\n}\n\n.sticky-tab .ps-scrollbar-x-rail .ps-scrollbar-x {\n  height: 5px !important;\n}\n\nlegend {\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.thanhcong {\n  height: 200px;\n}\n\n.thatbai {\n  height: 400px;\n}\n\n.sticky-panelbar {\n  position: sticky;\n  position: -webkit-sticky;\n  top: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4taG9wLWRvbmcta2hhbS90aG9uZy10aW4tZ29pLWtoYW0tcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxraGFtLWRvYW5cXGtoYW0tZG9hbi1ob3AtZG9uZy1raGFtXFx0aG9uZy10aW4tZ29pLWtoYW0tcG9wdXBcXHRob25nLXRpbi1nb2kta2hhbS1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4taG9wLWRvbmcta2hhbS90aG9uZy10aW4tZ29pLWtoYW0tcG9wdXAvdGhvbmctdGluLWdvaS1raGFtLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0Usc0NBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsNENBQUE7QUNDRjs7QURFQTtFQUNFLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQ0FBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFLQSw0QkFBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLFNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWhvcC1kb25nLWtoYW0vdGhvbmctdGluLWdvaS1raGFtLXBvcHVwL3Rob25nLXRpbi1nb2kta2hhbS1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWZvcm0td3JhcHBlciAubWF0LW1lbnUtY29udGVudCB7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmNvbG9yLXJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5wYWRkaW5nLXRodS10aWVuIHtcbiAgcGFkZGluZzogNXB4IDE2cHggMjhweCAxM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5wby1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5jb2xvci1ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnBhZGRpbmctbGVmdDgwcHgge1xuICBwYWRkaW5nLWxlZnQ6IDgwcHggIWltcG9ydGFudDtcbn1cblxuLmQtdW5zZXQge1xuICBkaXNwbGF5OiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG5rZW5kby1zcGxpdHRlciB7XG4gIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmtlbmRvLXNwbGl0dGVyIHVsID4gbGkucmlnaHQtMCB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG5maWVsZHNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgcGFkZGluZy10b3A6IDAuMzVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1ZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xufVxuXG5maWVsZHNldCBsZWdlbmQge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuZmllbGRzZXQgLml0ZW1fcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmZpZWxkc2V0IHVsID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmZpZWxkc2V0IHVsLmlubGluZSA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gdWwuaW5saW5lID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAuaW5saW5lX2Ige1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIC5wYW5lbGJhci1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjcsIDI0MiwgMjUzLCAwLjUpO1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIC5wYW5lbGJhci1ncm91cC1iIHtcbiAgYm9yZGVyLXRvcDogMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCkgb3V0c2V0O1xufVxuXG4uc3RpY2t5LWxpc3Qge1xuICB0b3A6IDY0cHg7XG4gIHBvc2l0aW9uOiBzdGlja3kgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi5zdGlja3ktdGFiIHtcbiAgdG9wOiA2NHB4O1xuICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5O1xuICBiYWNrZ3JvdW5kOiAjZjVmN2ZhO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnN0aWNreS10YWIgdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICMyZTM4NGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2Y1ZjdmYTtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkuYWN0aXZlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDVkYWI7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMDA1ZGFiO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaTpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDA1ZGFiO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS5yZXNvbHZlZCB7XG4gIGNvbG9yOiAjMDA1ZGFiO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS5wcm9jZXNzaW5nIHtcbiAgY29sb3I6ICNmZjk4MDA7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLnVuZnVsZmlsbGVkIHtcbiAgY29sb3I6ICM5ZTllOWU7XG59XG5cbi5zdGlja3ktdGFiIC5wcy1zY3JvbGxiYXIteC1yYWlsIHtcbiAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zdGlja3ktdGFiIC5wcy1zY3JvbGxiYXIteC1yYWlsIC5wcy1zY3JvbGxiYXIteCB7XG4gIGhlaWdodDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmxlZ2VuZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4udGhhbmhjb25nIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLnRoYXRiYWkge1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuXG4uc3RpY2t5LXBhbmVsYmFyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICB0b3A6IDY0cHg7XG59IiwiLm1lbnUtZm9ybS13cmFwcGVyIC5tYXQtbWVudS1jb250ZW50IHtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uY29sb3ItcmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnBhZGRpbmctdGh1LXRpZW4ge1xuICBwYWRkaW5nOiA1cHggMTZweCAyOHB4IDEzcHggIWltcG9ydGFudDtcbn1cblxuLnBvLXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmNvbG9yLWdyZWVuIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ucGFkZGluZy1sZWZ0ODBweCB7XG4gIHBhZGRpbmctbGVmdDogODBweCAhaW1wb3J0YW50O1xufVxuXG4uZC11bnNldCB7XG4gIGRpc3BsYXk6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbmtlbmRvLXNwbGl0dGVyIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxua2VuZG8tc3BsaXR0ZXIgdWwgPiBsaS5yaWdodC0wIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbmZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMC43NWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG59XG5cbmZpZWxkc2V0IGxlZ2VuZCB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5maWVsZHNldCAuaXRlbV9yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuZmllbGRzZXQgdWwgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuZmllbGRzZXQgdWwuaW5saW5lID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSB1bC5pbmxpbmUgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIC5pbmxpbmVfYiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLnBhbmVsYmFyLXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIC5wYW5lbGJhci1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIyNywgMjQyLCAyNTMsIDAuNSk7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLnBhbmVsYmFyLWdyb3VwLWIge1xuICBib3JkZXItdG9wOiAxcHggcmdiYSgwLCAwLCAwLCAwLjA4KSBvdXRzZXQ7XG59XG5cbi5zdGlja3ktbGlzdCB7XG4gIHRvcDogNjRweDtcbiAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLnN0aWNreS10YWIge1xuICB0b3A6IDY0cHg7XG4gIHBvc2l0aW9uOiBzdGlja3kgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGJhY2tncm91bmQ6ICNmNWY3ZmE7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uc3RpY2t5LXRhYiB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cblxuLnN0aWNreS10YWIgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzJlMzg0ZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZjVmN2ZhO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS5hY3RpdmUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwNWRhYjtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMwMDVkYWI7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMDVkYWI7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLnJlc29sdmVkIHtcbiAgY29sb3I6ICMwMDVkYWI7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLnByb2Nlc3Npbmcge1xuICBjb2xvcjogI2ZmOTgwMDtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkudW5mdWxmaWxsZWQge1xuICBjb2xvcjogIzllOWU5ZTtcbn1cblxuLnN0aWNreS10YWIgLnBzLXNjcm9sbGJhci14LXJhaWwge1xuICBib3R0b206IDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLnN0aWNreS10YWIgLnBzLXNjcm9sbGJhci14LXJhaWwgLnBzLXNjcm9sbGJhci14IHtcbiAgaGVpZ2h0OiA1cHggIWltcG9ydGFudDtcbn1cblxubGVnZW5kIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi50aGFuaGNvbmcge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4udGhhdGJhaSB7XG4gIGhlaWdodDogNDAwcHg7XG59XG5cbi5zdGlja3ktcGFuZWxiYXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHRvcDogNjRweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/thong-tin-goi-kham-popup/thong-tin-goi-kham-popup.component.ts": 
        /*!*******************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/thong-tin-goi-kham-popup/thong-tin-goi-kham-popup.component.ts ***!
          \*******************************************************************************************************************************/
        /*! exports provided: ThongTinGoiKhamPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinGoiKhamPopupComponent", function () { return ThongTinGoiKhamPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-clear */ "./node_modules/@iconify/icons-ic/twotone-clear.js");
            /* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            var ThongTinGoiKhamPopupComponent = /** @class */ (function () {
                function ThongTinGoiKhamPopupComponent(dialog, cdRef, data, notificationService, apiService, router, route) {
                    this.dialog = dialog;
                    this.cdRef = cdRef;
                    this.data = data;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.router = router;
                    this.route = route;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.icClear = _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.ThongTinGoiKhamError = [];
                    this.dataSourceDanhSachGoiKham = {
                        data: [],
                        total: 0
                    };
                }
                ThongTinGoiKhamPopupComponent.prototype.ngOnInit = function () {
                    this.ThongTinGoiKhamError = this.data.thongTinGoiKhams;
                    this.dataSourceDanhSachGoiKham.data = this.ThongTinGoiKhamError;
                    this.total = this.ThongTinGoiKhamError[0].TotalThanhCong;
                    this.gridDanhSachNhanVienErrorColumns = [
                        { Field: "MaGoi", Title: "Mã gói", Width: 60 },
                        { Field: "Error", Title: "Thông tin lỗi", Width: 150 }
                    ];
                };
                return ThongTinGoiKhamPopupComponent;
            }());
            ThongTinGoiKhamPopupComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
            ]; };
            ThongTinGoiKhamPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'thong-tin-goi-kham-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./thong-tin-goi-kham-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/thong-tin-goi-kham-popup/thong-tin-goi-kham-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./thong-tin-goi-kham-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/thong-tin-goi-kham-popup/thong-tin-goi-kham-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], ThongTinGoiKhamPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/thong-tin-ket-thuc-hop-popup/thong-tin-ket-thuc-hop-popup.component.scss": 
        /*!*****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/thong-tin-ket-thuc-hop-popup/thong-tin-ket-thuc-hop-popup.component.scss ***!
          \*****************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".menu-form-wrapper .mat-menu-content {\n  padding: 8px;\n}\n\n.color-red {\n  color: red;\n}\n\n.padding-thu-tien {\n  padding: 5px 16px 28px 13px !important;\n}\n\n.po-right {\n  text-align: right;\n  flex-grow: 1;\n}\n\n.color-green {\n  color: green;\n}\n\n.padding-left80px {\n  padding-left: 80px !important;\n}\n\n.d-unset {\n  display: unset !important;\n}\n\nkendo-splitter {\n  border-width: 0px !important;\n  margin-bottom: 10px;\n}\n\nkendo-splitter ul > li.right-0 {\n  margin-right: 0px;\n  padding-right: 15px;\n}\n\nfieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em !important;\n  padding-bottom: 0.625em !important;\n  padding-left: 0.75em !important;\n  padding-right: 0.75em !important;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset legend {\n  margin-left: 15px;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline-block !important;\n}\n\nkendo-panelbar-item ul.inline > li {\n  padding-right: 10px !important;\n  padding-bottom: 0.625em;\n  display: inline-block !important;\n}\n\nkendo-panelbar-item .inline_b {\n  display: inline-block !important;\n  margin-right: 10px;\n  padding-right: 15px;\n}\n\nkendo-panelbar-item .panelbar-row {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\nkendo-panelbar-item .panelbar-row:hover {\n  background: rgba(227, 242, 253, 0.5);\n}\n\nkendo-panelbar-item .panelbar-group-b {\n  border-top: 1px rgba(0, 0, 0, 0.08) outset;\n}\n\n.sticky-list {\n  top: 64px;\n  position: sticky !important;\n  position: -webkit-sticky !important;\n  z-index: 9999;\n}\n\n.sticky-tab {\n  top: 64px;\n  position: sticky !important;\n  position: -webkit-sticky !important;\n  z-index: 9999;\n  background: #f5f7fa;\n  overflow-x: auto;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.sticky-tab ul {\n  margin: 0;\n  padding-top: 10px;\n  padding-bottom: 0;\n  border-bottom: 1px solid #ccc;\n}\n\n.sticky-tab ul li {\n  display: inline-block;\n  list-style-type: none;\n  margin-right: 25px;\n  font-size: 15px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n  color: #2e384d;\n  cursor: pointer;\n  transition: all 300ms linear;\n  border-bottom: 3px solid #f5f7fa;\n}\n\n.sticky-tab ul li.active {\n  font-size: 15px;\n  font-weight: bold;\n  color: #005dab;\n  border-bottom: 4px solid #005dab;\n}\n\n.sticky-tab ul li:hover {\n  border-bottom: 3px solid #005dab;\n}\n\n.sticky-tab ul li.resolved {\n  color: #005dab;\n}\n\n.sticky-tab ul li.processing {\n  color: #ff9800;\n}\n\n.sticky-tab ul li.unfulfilled {\n  color: #9e9e9e;\n}\n\n.sticky-tab .ps-scrollbar-x-rail {\n  bottom: 0 !important;\n  height: 5px !important;\n}\n\n.sticky-tab .ps-scrollbar-x-rail .ps-scrollbar-x {\n  height: 5px !important;\n}\n\nlegend {\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.thanhcong {\n  height: 200px;\n}\n\n.thatbai {\n  height: 400px;\n}\n\n.sticky-panelbar {\n  position: sticky;\n  position: -webkit-sticky;\n  top: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4taG9wLWRvbmcta2hhbS90aG9uZy10aW4ta2V0LXRodWMtaG9wLXBvcHVwL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxca2hhbS1kb2FuXFxraGFtLWRvYW4taG9wLWRvbmcta2hhbVxcdGhvbmctdGluLWtldC10aHVjLWhvcC1wb3B1cFxcdGhvbmctdGluLWtldC10aHVjLWhvcC1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4taG9wLWRvbmcta2hhbS90aG9uZy10aW4ta2V0LXRodWMtaG9wLXBvcHVwL3Rob25nLXRpbi1rZXQtdGh1Yy1ob3AtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQ0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSw0Q0FBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7QUNDRjs7QURFQTtFQUNFLDBDQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUtBLDRCQUFBO0VBQ0EsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsU0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4taG9wLWRvbmcta2hhbS90aG9uZy10aW4ta2V0LXRodWMtaG9wLXBvcHVwL3Rob25nLXRpbi1rZXQtdGh1Yy1ob3AtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1mb3JtLXdyYXBwZXIgLm1hdC1tZW51LWNvbnRlbnQge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5jb2xvci1yZWQge1xuICBjb2xvcjogcmVkO1xufVxuXG4ucGFkZGluZy10aHUtdGllbiB7XG4gIHBhZGRpbmc6IDVweCAxNnB4IDI4cHggMTNweCAhaW1wb3J0YW50O1xufVxuXG4ucG8tcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uY29sb3ItZ3JlZW4ge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5wYWRkaW5nLWxlZnQ4MHB4IHtcbiAgcGFkZGluZy1sZWZ0OiA4MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kLXVuc2V0IHtcbiAgZGlzcGxheTogdW5zZXQgIWltcG9ydGFudDtcbn1cblxua2VuZG8tc3BsaXR0ZXIge1xuICBib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5rZW5kby1zcGxpdHRlciB1bCA+IGxpLnJpZ2h0LTAge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuZmllbGRzZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAwLjM1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4ICNlMGUwZTA7XG4gIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcbn1cblxuZmllbGRzZXQgbGVnZW5kIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIHVsLmlubGluZSA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLmlubGluZV9iIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLnBhbmVsYmFyLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjI3LCAyNDIsIDI1MywgMC41KTtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItZ3JvdXAtYiB7XG4gIGJvcmRlci10b3A6IDFweCByZ2JhKDAsIDAsIDAsIDAuMDgpIG91dHNldDtcbn1cblxuLnN0aWNreS1saXN0IHtcbiAgdG9wOiA2NHB4O1xuICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4uc3RpY2t5LXRhYiB7XG4gIHRvcDogNjRweDtcbiAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OTtcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zdGlja3ktdGFiIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMmUzODRkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmNWY3ZmE7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLmFjdGl2ZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGk6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkucmVzb2x2ZWQge1xuICBjb2xvcjogIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkucHJvY2Vzc2luZyB7XG4gIGNvbG9yOiAjZmY5ODAwO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS51bmZ1bGZpbGxlZCB7XG4gIGNvbG9yOiAjOWU5ZTllO1xufVxuXG4uc3RpY2t5LXRhYiAucHMtc2Nyb2xsYmFyLXgtcmFpbCB7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uc3RpY2t5LXRhYiAucHMtc2Nyb2xsYmFyLXgtcmFpbCAucHMtc2Nyb2xsYmFyLXgge1xuICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG5sZWdlbmQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnRoYW5oY29uZyB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi50aGF0YmFpIHtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLnN0aWNreS1wYW5lbGJhciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgdG9wOiA2NHB4O1xufSIsIi5tZW51LWZvcm0td3JhcHBlciAubWF0LW1lbnUtY29udGVudCB7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmNvbG9yLXJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5wYWRkaW5nLXRodS10aWVuIHtcbiAgcGFkZGluZzogNXB4IDE2cHggMjhweCAxM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5wby1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5jb2xvci1ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnBhZGRpbmctbGVmdDgwcHgge1xuICBwYWRkaW5nLWxlZnQ6IDgwcHggIWltcG9ydGFudDtcbn1cblxuLmQtdW5zZXQge1xuICBkaXNwbGF5OiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG5rZW5kby1zcGxpdHRlciB7XG4gIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmtlbmRvLXNwbGl0dGVyIHVsID4gbGkucmlnaHQtMCB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG5maWVsZHNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgcGFkZGluZy10b3A6IDAuMzVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1ZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xufVxuXG5maWVsZHNldCBsZWdlbmQge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuZmllbGRzZXQgLml0ZW1fcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmZpZWxkc2V0IHVsID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmZpZWxkc2V0IHVsLmlubGluZSA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gdWwuaW5saW5lID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAuaW5saW5lX2Ige1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIC5wYW5lbGJhci1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjcsIDI0MiwgMjUzLCAwLjUpO1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIC5wYW5lbGJhci1ncm91cC1iIHtcbiAgYm9yZGVyLXRvcDogMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCkgb3V0c2V0O1xufVxuXG4uc3RpY2t5LWxpc3Qge1xuICB0b3A6IDY0cHg7XG4gIHBvc2l0aW9uOiBzdGlja3kgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi5zdGlja3ktdGFiIHtcbiAgdG9wOiA2NHB4O1xuICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5O1xuICBiYWNrZ3JvdW5kOiAjZjVmN2ZhO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnN0aWNreS10YWIgdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICMyZTM4NGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2Y1ZjdmYTtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkuYWN0aXZlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDVkYWI7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMDA1ZGFiO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaTpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDA1ZGFiO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS5yZXNvbHZlZCB7XG4gIGNvbG9yOiAjMDA1ZGFiO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS5wcm9jZXNzaW5nIHtcbiAgY29sb3I6ICNmZjk4MDA7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLnVuZnVsZmlsbGVkIHtcbiAgY29sb3I6ICM5ZTllOWU7XG59XG5cbi5zdGlja3ktdGFiIC5wcy1zY3JvbGxiYXIteC1yYWlsIHtcbiAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zdGlja3ktdGFiIC5wcy1zY3JvbGxiYXIteC1yYWlsIC5wcy1zY3JvbGxiYXIteCB7XG4gIGhlaWdodDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmxlZ2VuZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4udGhhbmhjb25nIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLnRoYXRiYWkge1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuXG4uc3RpY2t5LXBhbmVsYmFyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICB0b3A6IDY0cHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/thong-tin-ket-thuc-hop-popup/thong-tin-ket-thuc-hop-popup.component.ts": 
        /*!***************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/thong-tin-ket-thuc-hop-popup/thong-tin-ket-thuc-hop-popup.component.ts ***!
          \***************************************************************************************************************************************/
        /*! exports provided: ThongTinKetThucHopDongPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinKetThucHopDongPopupComponent", function () { return ThongTinKetThucHopDongPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-clear */ "./node_modules/@iconify/icons-ic/twotone-clear.js");
            /* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            var ThongTinKetThucHopDongPopupComponent = /** @class */ (function () {
                function ThongTinKetThucHopDongPopupComponent(data, notificationService, dialogRef, dialog, router, apiService) {
                    this.data = data;
                    this.notificationService = notificationService;
                    this.dialogRef = dialogRef;
                    this.dialog = dialog;
                    this.router = router;
                    this.apiService = apiService;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.icClear = _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.KiemTraHopDongNhanVienChuaKham = [];
                    this.validationErrors = [];
                    this.dataChuaKham = [];
                    this.dataDaKham = [];
                    this.ThongTinNhanVienError = [];
                    this.dataSourceDanhSachNhanVien = {
                        data: [],
                        total: 0
                    };
                }
                ThongTinKetThucHopDongPopupComponent.prototype.ngOnInit = function () {
                    this.hopDongKhamSucKhoeId = this.data.hopDongKhamSucKhoeId;
                    if (this.hopDongKhamSucKhoeId != 0) {
                        this.getDataHopDongKhamSucKhoeNhanVien(this.hopDongKhamSucKhoeId);
                    }
                };
                ThongTinKetThucHopDongPopupComponent.prototype.getDataHopDongKhamSucKhoeNhanVien = function (id) {
                    var _this = this;
                    this.apiService.get("KhamDoan/KiemTraHopDongNhanVienChuaKham?hopDongKhamId=" + id).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            _this.KiemTraHopDongNhanVienChuaKham = resultData;
                            _this.dataDaKham = _this.KiemTraHopDongNhanVienChuaKham.filter(function (c) { return c.TrangThai == 1; });
                            _this.dataChuaKham = _this.KiemTraHopDongNhanVienChuaKham.filter(function (c) { return c.TrangThai == 2; });
                        }
                    }, function (err) {
                        _this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                    });
                };
                ThongTinKetThucHopDongPopupComponent.prototype.khong = function () {
                    this.dialog.closeAll();
                };
                ThongTinKetThucHopDongPopupComponent.prototype.KetThucHopDongKham = function () {
                    var _this = this;
                    if (this.dataDaKham.length > 0) {
                        this.dialogRef.close(null);
                    }
                    else {
                        this.apiService.post("KhamDoan/KetThucHopDongKham?hopDongKhamId=" + this.hopDongKhamSucKhoeId).subscribe(function (resultData) {
                            _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].ActionSuccessfully, ["kết thúc hợp đồng"]));
                            _this.dialogRef.close(null);
                            _this.router.navigateByUrl("/kham-doan/hop-dong-kham");
                        }, function (err) {
                            _this.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                _this.notificationService.showError(err.Message);
                            }
                        });
                    }
                };
                return ThongTinKetThucHopDongPopupComponent;
            }());
            ThongTinKetThucHopDongPopupComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }
            ]; };
            ThongTinKetThucHopDongPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'thong-tin-ket-thuc-hop-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./thong-tin-ket-thuc-hop-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/thong-tin-ket-thuc-hop-popup/thong-tin-ket-thuc-hop-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./thong-tin-ket-thuc-hop-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/thong-tin-ket-thuc-hop-popup/thong-tin-ket-thuc-hop-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], ThongTinKetThucHopDongPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/thong-tin-nhan-vien-popup/thong-tin-nhan-vien-popup.component.scss": 
        /*!***********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/thong-tin-nhan-vien-popup/thong-tin-nhan-vien-popup.component.scss ***!
          \***********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".menu-form-wrapper .mat-menu-content {\n  padding: 8px;\n}\n\n.color-red {\n  color: red;\n}\n\n.padding-thu-tien {\n  padding: 5px 16px 28px 13px !important;\n}\n\n.po-right {\n  text-align: right;\n  flex-grow: 1;\n}\n\n.color-green {\n  color: green;\n}\n\n.padding-left80px {\n  padding-left: 80px !important;\n}\n\n.d-unset {\n  display: unset !important;\n}\n\nkendo-splitter {\n  border-width: 0px !important;\n  margin-bottom: 10px;\n}\n\nkendo-splitter ul > li.right-0 {\n  margin-right: 0px;\n  padding-right: 15px;\n}\n\nfieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em !important;\n  padding-bottom: 0.625em !important;\n  padding-left: 0.75em !important;\n  padding-right: 0.75em !important;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset legend {\n  margin-left: 15px;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline-block !important;\n}\n\nkendo-panelbar-item ul.inline > li {\n  padding-right: 10px !important;\n  padding-bottom: 0.625em;\n  display: inline-block !important;\n}\n\nkendo-panelbar-item .inline_b {\n  display: inline-block !important;\n  margin-right: 10px;\n  padding-right: 15px;\n}\n\nkendo-panelbar-item .panelbar-row {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\nkendo-panelbar-item .panelbar-row:hover {\n  background: rgba(227, 242, 253, 0.5);\n}\n\nkendo-panelbar-item .panelbar-group-b {\n  border-top: 1px rgba(0, 0, 0, 0.08) outset;\n}\n\n.sticky-list {\n  top: 64px;\n  position: sticky !important;\n  position: -webkit-sticky !important;\n  z-index: 9999;\n}\n\n.sticky-tab {\n  top: 64px;\n  position: sticky !important;\n  position: -webkit-sticky !important;\n  z-index: 9999;\n  background: #f5f7fa;\n  overflow-x: auto;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.sticky-tab ul {\n  margin: 0;\n  padding-top: 10px;\n  padding-bottom: 0;\n  border-bottom: 1px solid #ccc;\n}\n\n.sticky-tab ul li {\n  display: inline-block;\n  list-style-type: none;\n  margin-right: 25px;\n  font-size: 15px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n  color: #2e384d;\n  cursor: pointer;\n  transition: all 300ms linear;\n  border-bottom: 3px solid #f5f7fa;\n}\n\n.sticky-tab ul li.active {\n  font-size: 15px;\n  font-weight: bold;\n  color: #005dab;\n  border-bottom: 4px solid #005dab;\n}\n\n.sticky-tab ul li:hover {\n  border-bottom: 3px solid #005dab;\n}\n\n.sticky-tab ul li.resolved {\n  color: #005dab;\n}\n\n.sticky-tab ul li.processing {\n  color: #ff9800;\n}\n\n.sticky-tab ul li.unfulfilled {\n  color: #9e9e9e;\n}\n\n.sticky-tab .ps-scrollbar-x-rail {\n  bottom: 0 !important;\n  height: 5px !important;\n}\n\n.sticky-tab .ps-scrollbar-x-rail .ps-scrollbar-x {\n  height: 5px !important;\n}\n\nlegend {\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.thanhcong {\n  height: 200px;\n}\n\n.thatbai {\n  height: 400px;\n}\n\n.sticky-panelbar {\n  position: sticky;\n  position: -webkit-sticky;\n  top: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4taG9wLWRvbmcta2hhbS90aG9uZy10aW4tbmhhbi12aWVuLXBvcHVwL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxca2hhbS1kb2FuXFxraGFtLWRvYW4taG9wLWRvbmcta2hhbVxcdGhvbmctdGluLW5oYW4tdmllbi1wb3B1cFxcdGhvbmctdGluLW5oYW4tdmllbi1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4taG9wLWRvbmcta2hhbS90aG9uZy10aW4tbmhhbi12aWVuLXBvcHVwL3Rob25nLXRpbi1uaGFuLXZpZW4tcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQ0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSw0Q0FBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7QUNDRjs7QURFQTtFQUNFLDBDQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUtBLDRCQUFBO0VBQ0EsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsU0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4taG9wLWRvbmcta2hhbS90aG9uZy10aW4tbmhhbi12aWVuLXBvcHVwL3Rob25nLXRpbi1uaGFuLXZpZW4tcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1mb3JtLXdyYXBwZXIgLm1hdC1tZW51LWNvbnRlbnQge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5jb2xvci1yZWQge1xuICBjb2xvcjogcmVkO1xufVxuXG4ucGFkZGluZy10aHUtdGllbiB7XG4gIHBhZGRpbmc6IDVweCAxNnB4IDI4cHggMTNweCAhaW1wb3J0YW50O1xufVxuXG4ucG8tcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uY29sb3ItZ3JlZW4ge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5wYWRkaW5nLWxlZnQ4MHB4IHtcbiAgcGFkZGluZy1sZWZ0OiA4MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kLXVuc2V0IHtcbiAgZGlzcGxheTogdW5zZXQgIWltcG9ydGFudDtcbn1cblxua2VuZG8tc3BsaXR0ZXIge1xuICBib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5rZW5kby1zcGxpdHRlciB1bCA+IGxpLnJpZ2h0LTAge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuZmllbGRzZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAwLjM1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4ICNlMGUwZTA7XG4gIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcbn1cblxuZmllbGRzZXQgbGVnZW5kIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIHVsLmlubGluZSA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLmlubGluZV9iIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLnBhbmVsYmFyLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjI3LCAyNDIsIDI1MywgMC41KTtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItZ3JvdXAtYiB7XG4gIGJvcmRlci10b3A6IDFweCByZ2JhKDAsIDAsIDAsIDAuMDgpIG91dHNldDtcbn1cblxuLnN0aWNreS1saXN0IHtcbiAgdG9wOiA2NHB4O1xuICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4uc3RpY2t5LXRhYiB7XG4gIHRvcDogNjRweDtcbiAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OTtcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zdGlja3ktdGFiIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMmUzODRkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmNWY3ZmE7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLmFjdGl2ZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGk6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkucmVzb2x2ZWQge1xuICBjb2xvcjogIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkucHJvY2Vzc2luZyB7XG4gIGNvbG9yOiAjZmY5ODAwO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS51bmZ1bGZpbGxlZCB7XG4gIGNvbG9yOiAjOWU5ZTllO1xufVxuXG4uc3RpY2t5LXRhYiAucHMtc2Nyb2xsYmFyLXgtcmFpbCB7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uc3RpY2t5LXRhYiAucHMtc2Nyb2xsYmFyLXgtcmFpbCAucHMtc2Nyb2xsYmFyLXgge1xuICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG5sZWdlbmQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnRoYW5oY29uZyB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi50aGF0YmFpIHtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLnN0aWNreS1wYW5lbGJhciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgdG9wOiA2NHB4O1xufSIsIi5tZW51LWZvcm0td3JhcHBlciAubWF0LW1lbnUtY29udGVudCB7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmNvbG9yLXJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5wYWRkaW5nLXRodS10aWVuIHtcbiAgcGFkZGluZzogNXB4IDE2cHggMjhweCAxM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5wby1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5jb2xvci1ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnBhZGRpbmctbGVmdDgwcHgge1xuICBwYWRkaW5nLWxlZnQ6IDgwcHggIWltcG9ydGFudDtcbn1cblxuLmQtdW5zZXQge1xuICBkaXNwbGF5OiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG5rZW5kby1zcGxpdHRlciB7XG4gIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmtlbmRvLXNwbGl0dGVyIHVsID4gbGkucmlnaHQtMCB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG5maWVsZHNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgcGFkZGluZy10b3A6IDAuMzVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1ZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xufVxuXG5maWVsZHNldCBsZWdlbmQge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuZmllbGRzZXQgLml0ZW1fcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmZpZWxkc2V0IHVsID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmZpZWxkc2V0IHVsLmlubGluZSA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gdWwuaW5saW5lID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAuaW5saW5lX2Ige1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIC5wYW5lbGJhci1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjcsIDI0MiwgMjUzLCAwLjUpO1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIC5wYW5lbGJhci1ncm91cC1iIHtcbiAgYm9yZGVyLXRvcDogMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCkgb3V0c2V0O1xufVxuXG4uc3RpY2t5LWxpc3Qge1xuICB0b3A6IDY0cHg7XG4gIHBvc2l0aW9uOiBzdGlja3kgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi5zdGlja3ktdGFiIHtcbiAgdG9wOiA2NHB4O1xuICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5O1xuICBiYWNrZ3JvdW5kOiAjZjVmN2ZhO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnN0aWNreS10YWIgdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICMyZTM4NGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2Y1ZjdmYTtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkuYWN0aXZlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDVkYWI7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMDA1ZGFiO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaTpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDA1ZGFiO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS5yZXNvbHZlZCB7XG4gIGNvbG9yOiAjMDA1ZGFiO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS5wcm9jZXNzaW5nIHtcbiAgY29sb3I6ICNmZjk4MDA7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLnVuZnVsZmlsbGVkIHtcbiAgY29sb3I6ICM5ZTllOWU7XG59XG5cbi5zdGlja3ktdGFiIC5wcy1zY3JvbGxiYXIteC1yYWlsIHtcbiAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zdGlja3ktdGFiIC5wcy1zY3JvbGxiYXIteC1yYWlsIC5wcy1zY3JvbGxiYXIteCB7XG4gIGhlaWdodDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmxlZ2VuZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4udGhhbmhjb25nIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLnRoYXRiYWkge1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuXG4uc3RpY2t5LXBhbmVsYmFyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICB0b3A6IDY0cHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/thong-tin-nhan-vien-popup/thong-tin-nhan-vien-popup.component.ts": 
        /*!*********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/thong-tin-nhan-vien-popup/thong-tin-nhan-vien-popup.component.ts ***!
          \*********************************************************************************************************************************/
        /*! exports provided: ThongTinNhanVienPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinNhanVienPopupComponent", function () { return ThongTinNhanVienPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-clear */ "./node_modules/@iconify/icons-ic/twotone-clear.js");
            /* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            var ThongTinNhanVienPopupComponent = /** @class */ (function () {
                function ThongTinNhanVienPopupComponent(dialog, cdRef, data, notificationService, apiService, router, route) {
                    this.dialog = dialog;
                    this.cdRef = cdRef;
                    this.data = data;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.router = router;
                    this.route = route;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.icClear = _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.ThongTinNhanVienError = [];
                    this.dataSourceDanhSachNhanVien = {
                        data: [],
                        total: 0
                    };
                }
                ThongTinNhanVienPopupComponent.prototype.ngOnInit = function () {
                    this.ThongTinNhanVienError = this.data.thongTinNhanViens;
                    this.dataSourceDanhSachNhanVien.data = this.ThongTinNhanVienError;
                    this.total = this.ThongTinNhanVienError[0].TotalThanhCong;
                    this.gridDanhSachNhanVienErrorColumns = [
                        { Field: "TenNhanVien", Title: "Tên nhân viên", Width: 60 },
                        { Field: "Error", Title: "Thông tin lỗi", Width: 150 }
                    ];
                };
                return ThongTinNhanVienPopupComponent;
            }());
            ThongTinNhanVienPopupComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
            ]; };
            ThongTinNhanVienPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'thong-tin-nhan-vien-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./thong-tin-nhan-vien-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/thong-tin-nhan-vien-popup/thong-tin-nhan-vien-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./thong-tin-nhan-vien-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/thong-tin-nhan-vien-popup/thong-tin-nhan-vien-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], ThongTinNhanVienPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/enum/common-type.enums.ts": 
        /*!**************************************************!*\
          !*** ./src/app/shared/enum/common-type.enums.ts ***!
          \**************************************************/
        /*! exports provided: GioiTinh, CapHanhChinh, VungDiaLy, LoaiTapTin */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GioiTinh", function () { return GioiTinh; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapHanhChinh", function () { return CapHanhChinh; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VungDiaLy", function () { return VungDiaLy; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiTapTin", function () { return LoaiTapTin; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var GioiTinh;
            (function (GioiTinh) {
                GioiTinh[GioiTinh["Nam"] = 1] = "Nam";
                GioiTinh[GioiTinh["Nu"] = 2] = "Nu";
            })(GioiTinh || (GioiTinh = {}));
            var CapHanhChinh;
            (function (CapHanhChinh) {
                CapHanhChinh[CapHanhChinh["TinhThanhPho"] = 1] = "TinhThanhPho";
                CapHanhChinh[CapHanhChinh["QuanHuyen"] = 2] = "QuanHuyen";
                CapHanhChinh[CapHanhChinh["PhuongXa"] = 3] = "PhuongXa";
            })(CapHanhChinh || (CapHanhChinh = {}));
            var VungDiaLy;
            (function (VungDiaLy) {
                VungDiaLy[VungDiaLy["TayBacBo"] = 1] = "TayBacBo";
                VungDiaLy[VungDiaLy["DongBacBo"] = 2] = "DongBacBo";
                VungDiaLy[VungDiaLy["DongBangSongHong"] = 3] = "DongBangSongHong";
                VungDiaLy[VungDiaLy["BacTrungBo"] = 4] = "BacTrungBo";
                VungDiaLy[VungDiaLy["NamTrungBo"] = 5] = "NamTrungBo";
                VungDiaLy[VungDiaLy["TayNguyen"] = 6] = "TayNguyen";
                VungDiaLy[VungDiaLy["DongNamBo"] = 7] = "DongNamBo";
                VungDiaLy[VungDiaLy["DongBangSongCuuLong"] = 8] = "DongBangSongCuuLong";
            })(VungDiaLy || (VungDiaLy = {}));
            var LoaiTapTin;
            (function (LoaiTapTin) {
                LoaiTapTin[LoaiTapTin["Image"] = 1] = "Image";
                LoaiTapTin[LoaiTapTin["Pdf"] = 2] = "Pdf";
                LoaiTapTin[LoaiTapTin["Khac"] = 10] = "Khac";
            })(LoaiTapTin || (LoaiTapTin = {}));
            /***/ 
        })
    }]);
//# sourceMappingURL=kham-doan-kham-doan-hop-dong-kham-kham-doan-hop-dong-kham-module-es2015.js.map
//# sourceMappingURL=kham-doan-kham-doan-hop-dong-kham-kham-doan-hop-dong-kham-module-es5.js.map
//# sourceMappingURL=kham-doan-kham-doan-hop-dong-kham-kham-doan-hop-dong-kham-module-es5.js.map