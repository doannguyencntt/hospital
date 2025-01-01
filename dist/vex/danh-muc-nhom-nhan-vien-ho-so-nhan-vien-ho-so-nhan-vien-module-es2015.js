(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["danh-muc-nhom-nhan-vien-ho-so-nhan-vien-ho-so-nhan-vien-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-create/ho-so-nhan-vien-create.component.html":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-create/ho-so-nhan-vien-create.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Danh Mục',Path:''}\n                ,{Title:'Nhóm Nhân Viên',Path:''}\n                ,{Title:'Hồ Sơ Nhân Viên',Path:'/danh-muc/nhom-nhan-vien/ho-so-nhan-vien',Active:true}\n                ]\">\n</app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Thêm Hồ Sơ Nhân Viên</h2>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-ho-so-nhan-vien-share></app-ho-so-nhan-vien-share>\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter #createNhanVien [bodyComponent]=\"shared\" type=\"create\" (created)=\"onCreated()\">\n                    </app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-list/ho-so-nhan-vien-list.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-list/ho-so-nhan-vien-list.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <!-- <h1 class=\"title mt-0 mb-1\">Danh Mục Hồ Sơ Nhân Viên</h1> -->\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Danh Mục',Path:''}\n                    ,{Title:'Nhóm Nhân Viên',Path:''}\n                    ,{Title:'Hồ Sơ Nhân Viên',Path:'/danh-muc/nhom-nhan-vien/ho-so-nhan-vien',Active:true}\n                ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"/danh-muc/nhom-nhan-vien/ho-so-nhan-vien\" [gridColumns]=\"gridColumns\"\n                [documentType]=\"documentType\" [useActionDefault]=\"true\" [showExportExcel]=\"true\" (extExportExcel)=\"exportExcel()\" [lazyLoadPage]=\"true\"></app-grid>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-share/ho-so-nhan-vien-share.component.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-share/ho-so-nhan-vien-share.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <p class=\"title m-0\" fxFlex=\"100%\" fxFlex.sm=\"100%\">Thông tin đăng nhập</p>\n\n    <app-textbox id=\"SoDienThoai\" fxFlex=\"30%\" fxFlex.sm=\"30%\" [required]=\"true\"  [(model)]=\"modelFE.SoDienThoai\" label=\"Số điện thoại\" maxlength=\"20\"\n        [validationerror]=\"'SoDienThoai' | validationerror:validationErrors\">\n    </app-textbox>\n\n    <app-textbox id=\"Email\" fxFlex=\"30%\" fxFlex.sm=\"30%\" [required]=\"true\" [(model)]=\"modelFE.Email\" label=\"Email\" maxlength=\"200\"\n        [validationerror]=\"'Email' | validationerror:validationErrors\">\n    </app-textbox>\n\n\n    <app-combobox id=\"QuyenHan\" fxFlex=\"40%\" fxFlex.sm=\"40%\" [(model)]=\"modelFE.LoaimodelFEId\" [modelText]=\"modelFE.TenLoaimodelFE\" label=\"Quyền hạn\"\n        url=\"modelFE/GetListLoaimodelFE\" [validationerror]=\"'QuyenHan' | validationerror:validationErrors\">\n    </app-combobox>\n\n</div> -->\n\n<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <fieldset fxFlex=\"100%\" class=\"mb-3\">\n            <legend>Thông tin cá nhân</legend>\n            <div fxLayout=\"column\">\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                    <div fxFlex=\"20%\" fxFlex.sm=\"20%\">\n                        <div class=\"avt\">\n                            <p>Ảnh đại diện:</p>\n                            <div class=\"content mt-3\">\n                                <div class=\"avatar-hsct\" *ngIf=\"modelFE.Avatar\">\n                                    <img [src]=\"modelFE.Avatar\" alt=\"\" (click)=\"ViewImage(modelFE)\" />\n                                </div>\n                                <div class=\"avatar-hsct\" *ngIf=\"!modelFE.Avatar\">\n                                    <img src=\"assets/img/default_avatar.png\" />\n                                </div>\n                                <input type=\"file\" name=\"imageUpload\" id=\"imageUpload\" class=\"hide\" (change)=\"fileProgress($event)\" />\n                                <label class=\"mat-button mat-raised-button mat-button-base mat-primary _mat-animation-noopable mt-3\" for=\"imageUpload\">Chọn ảnh</label>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div fxFlex=\"80%\" fxFlex.sm=\"80%\">\n                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                            <app-textbox id=\"HoTen\" fxFlex=\"20%\" fxFlex.sm=\"30%\" [required]=\"true\" [(model)]=\"modelFE.HoTen\" label=\"Họ tên\" maxlength=\"100\" [validationerror]=\"'HoTen' | validationerror:validationErrors\">\n                            </app-textbox>\n\n                            <app-datepicker id=\"NgaySinh\" fxFlex=\"20%\" fxFlex.sm=\"30%\" [required]=\"true\" [(model)]=\"modelFE.NgaySinh\" label=\"Ngày sinh\" [validationerror]=\"'NgaySinh' | validationerror:validationErrors\">\n                            </app-datepicker>\n\n                            <app-radio fxFlex=\"20%\" fxFlex.sm=\"40%\" id=\"GioiTinh\" name=\"GioiTinh\" [required]=\"true\" [items]=\"[{Value:1,Text:'Nam'},{Value:2,Text:'Nữ'}]\" [(model)]=\"modelFE.GioiTinh\" label=\"Giới tính\" [validationerror]=\"'GioiTinh' | validationerror:validationErrors\">\n                            </app-radio>\n\n                            <!-- <app-textbox id=\"SoDienThoai\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\"\n                                [(model)]=\"modelFE.SoDienThoai\" label=\"Số điện thoại\" maxlength=\"20\" onlynumber=\"true\"\n                                [validationerror]=\"'SoDienThoai' | validationerror:validationErrors\">\n                            </app-textbox> -->\n\n                            <app-textboxmask id=\"SoDienThoai\" [required]=\"true\" fxFlex=\"20%\" fxFlex.sm=\"40%\" label=\"Điện thoại\" maxlength=\"20\" [(model)]=\"modelFE.SoDienThoai\" mask=\"000 000 0000\" onlynumber=\"true\" [validationerror]=\"'SoDienThoai' | validationerror:validationErrors\">\n                            </app-textboxmask>\n\n                            <app-textbox id=\"Email\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [required]=\"true\" [(model)]=\"modelFE.Email\" label=\"Email\" maxlength=\"200\" [validationerror]=\"'Email' | validationerror:validationErrors\">\n                            </app-textbox>\n\n                            <app-textbox id=\"SoCMT\" fxFlex=\"20%\" fxFlex.sm=\"30%\" [(model)]=\"modelFE.SoCMT\" label=\"Chứng minh thư \" maxlength=\"12\" onlynumber=\"true\" [validationerror]=\"'SoCMT' | validationerror:validationErrors\">\n                            </app-textbox>\n\n                            <app-textbox id=\"DiaChi\" fxFlex=\"20%\" fxFlex.sm=\"30%\" [(model)]=\"modelFE.DiaChi\" label=\"Địa chỉ\" maxlength=\"200\" [validationerror]=\"'DiaChi' | validationerror:validationErrors\">\n                            </app-textbox>\n\n                            <app-combobox id=\"PhamViHanhNgheId\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [(model)]=\"modelFE.PhamViHanhNgheId\" [modelText]=\"modelFE.TextTenPhamViHanhNghe\" label=\"Phạm vi hành nghề\" class=\"item-no-padding\" [template]=\"PhamViHanhNgheTemplate\" [templateHeader]=\"PhamViHanhNgheTemplateHeader\"\n                                url=\"PhamViHanhNghe/GetListPhamViHanhNghe\" [validationerror]=\"'TextTenPhamViHanhNghe' | validationerror:validationErrors\">\n                                <ng-template #PhamViHanhNgheTemplateHeader let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <th width=\"20%\">Mã</th>\n                                            <th>Tên</th>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <ng-template #PhamViHanhNgheTemplate let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <td width=\"20%\">{{dataItem.Ma}}</td>\n                                            <td>{{dataItem.Ten}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                            </app-combobox>\n\n                            <app-textbox id=\"MaChungChiHanhNghe\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [(model)]=\"modelFE.MaChungChiHanhNghe\" label=\"Mã chứng chỉ\" maxlength=\"50\" [validationerror]=\"'MaChungChiHanhNghe' | validationerror:validationErrors\">\n                            </app-textbox>\n\n                            <app-textbox id=\"NoiCapChungChiHanhNghe\" fxFlex=\"20%\" fxFlex.sm=\"30%\" [(model)]=\"modelFE.NoiCapChungChiHanhNghe\" label=\"Nơi cấp chứng chỉ\" maxlength=\"200\" [validationerror]=\"'NoiCapChungChiHanhNghe' | validationerror:validationErrors\">\n                            </app-textbox>\n\n                            <app-datepicker id=\"NgayCapChungChiHanhNghe\" fxFlex=\"20%\" fxFlex.sm=\"30%\" [(model)]=\"modelFE.NgayCapChungChiHanhNghe\" label=\"Ngày cấp chứng chỉ\" [validationerror]=\"'NgayCapChungChiHanhNghe' | validationerror:validationErrors\">\n                            </app-datepicker>\n\n\n                            <app-datepicker id=\"NgayKyHopDong\" fxFlex=\"20%\" fxFlex.sm=\"30%\" [(model)]=\"modelFE.NgayKyHopDong\" label=\"Ngày ký hợp đồng\" [validationerror]=\"'NgayKyHopDong' | validationerror:validationErrors\">\n                            </app-datepicker>\n\n                            <app-datepicker id=\"NgayHetHopDong\" fxFlex=\"20%\" fxFlex.sm=\"30%\" [(model)]=\"modelFE.NgayHetHopDong\" label=\"Ngày hết hạn\" [validationerror]=\"'NgayHetHopDong' | validationerror:validationErrors\">\n                            </app-datepicker>\n\n                            <app-combobox id=\"VanBangChuyenMon\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [(model)]=\"modelFE.VanBangChuyenMonId\" [modelText]=\"modelFE.TextTenVanBangChuyenMon\" label=\"Văn bằng chuyên môn\" url=\"VanBangChuyenMon/GetListVanBangChuyenMon\" [template]=\"vbcmTemplateData\"\n                                [templateHeader]=\"vbcmTemplateHeader\" class=\"item-no-padding\" [validationerror]=\"'TextTenVanBangChuyenMon' | validationerror:validationErrors\">\n                                <ng-template #vbcmTemplateHeader let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <th width=\"40%\">Mã</th>\n                                            <th>Tên</th>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <ng-template #vbcmTemplateData let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <td width=\"40%\">{{dataItem.Ma}}</td>\n                                            <td>{{dataItem.Ten}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                            </app-combobox>\n\n                            <app-combobox id=\"HocViHocHam\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [(model)]=\"modelFE.HocHamHocViId\" [modelText]=\"modelFE.TextTenHocHamHocVi\" label=\"Học hàm học vị\" url=\"HocViHocHam/GetListHocViHocHam\" [template]=\"hvhhTemplateData\" [templateHeader]=\"hvhhTemplateHeader\"\n                                class=\"item-no-padding\" [validationerror]=\"'TextTenHocHamHocVi' | validationerror:validationErrors\">\n                                <ng-template #hvhhTemplateHeader let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <th width=\"30%\">Mã</th>\n                                            <th>Tên</th>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <ng-template #hvhhTemplateData let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <td width=\"30%\">{{dataItem.Ma}}</td>\n                                            <td>{{dataItem.Ten}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                            </app-combobox>\n\n                            <app-combobox id=\"ChucDanh\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [(model)]=\"modelFE.ChucDanhId\" [modelText]=\"modelFE.TextTenChucDanh\" label=\"Chức danh\" [template]=\"cdTemplateData\" [templateHeader]=\"cdTemplateHeader\" class=\"item-no-padding\" url=\"ChucDanh/GetListChucDanh\"\n                                [validationerror]=\"'TextTenChucDanh' | validationerror:validationErrors\">\n                                <ng-template #cdTemplateHeader let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <th width=\"20%\">Mã</th>\n                                            <th>Tên</th>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <ng-template #cdTemplateData let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <td width=\"20%\">{{dataItem.Ma}}</td>\n                                            <td>{{dataItem.Ten}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                            </app-combobox>\n                            \n                            <!-- <app-multiselect id=\"KhoaPhongNhanVienId\" fxFlex=\"40%\" fxFlex.sm=\"40%\"\n                                [(model)]=\"modelFE.KhoaPhongIds\" label=\"Khoa Phòng\"\n                                (modelChange)=\"onSelectChangeKhoaPhong($event)\"\n                                url=\"NhanVien/GetListKhoaPhongByHoSoNhanVien\" [required]=\"true\"\n                                [validationerror]=\"'KhoaPhongIds' | validationerror:validationErrors\">\n                            </app-multiselect>\n                            <app-multiselect id=\"PhongNhanVienId\" fxFlex=\"40%\" fxFlex.sm=\"40%\"\n                                [disabled]=\"isChonKhoaPhong\" [(model)]=\"modelFE.PhongBenhVienIds\"\n                                (openChange)=\"OnOpen($event)\"  #lstPtttCmb\n                                [data]=\"phongKhamHienTais\" label=\"Chọn Phòng\">\n                            </app-multiselect> -->\n                            <app-textbox id=\"GhiChu\" fxFlex=\"80%\" fxFlex.sm=\"80%\" [(model)]=\"modelFE.GhiChu\" label=\"Ghi chú\" maxlength=\"2000\" [validationerror]=\"'GhiChu' | validationerror:validationErrors\">\n                            </app-textbox>\n                            <app-multiselect fxFlex=\"20%\" [(model)]=\"modelFE.ChucVuIds\" [modelText]=\"\" label=\"Chức vụ bệnh viện\"\n                              [popupSettings]=\"null\" [autoClose]=\"false\"\n                                url=\"NhanVien/GetListChucVu\">\n                            </app-multiselect>\n                            <app-upload id=\"Upload\" #uploadHoSoGiayNVDieuTri [allowedExtensions]=\"allowedExtensions\" fxFlex=\"80%\"\n                                [(model)]=\"modelFE.HoSoNhanVienFileDinhKems\" [multiple]=\"true\" label=\"Upload hồ sơ\"\n                                [template]=\"templateFileHoSoGiayNVInfo\">\n                            </app-upload>\n                            <ng-template #templateFileHoSoGiayNVInfo let-files>\n                                <table width=\"100%\">\n                                    <tr>\n                                        <td>\n                                            <a *ngIf=\"files[0].error\" title=\"{{'Tải file bị lỗi: '+files[0].error}}\"\n                                                (click)=\"uploadHoSoGiayNVDieuTri.viewFile(files[0])\" class=\"custom-name red\">{{files[0].name}}</a>\n                                            <a *ngIf=\"!files[0].error\" title=\"{{files[0].name}}\" (click)=\"uploadHoSoGiayNVDieuTri.viewFile(files[0])\"\n                                                class=\"green\" class=\"custom-name green\">{{files[0].name}}</a>\n                                        </td>\n                                        <td style=\"width:25px\">\n                                            <a type=\"button\" (click)=\"uploadHoSoGiayNVDieuTri.remove(files[0].uid)\" mat-icon-button>\n                                                <mat-icon [icIcon]=\"icClear\"></mat-icon>\n                                            </a>\n                                        </td>\n                                    </tr>\n                                </table>\n                            </ng-template>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </fieldset>\n    </div>\n</div>\n\n<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <fieldset fxFlex=\"100%\" class=\"mb-3 mt-3\">\n        <legend>\n            <app-checkbox class=\"check-box-tao-tai-khoan\" [(model)]=\"modelFE.TaoTaiKhoan\" id=\"TaoTaiKhoan\">\n            </app-checkbox>\n            Thông tin tài khoản\n        </legend>\n\n        <div fxLayout=\"column\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                <!-- <app-textbox id=\"SoDienThoai\" fxFlex=\"20%\" fxFlex.sm=\"40%\" disabled=\"true\"\n                    [(model)]=\"modelFE.SoDienThoai\" label=\"Số điện thoại\" maxlength=\"12\" onlynumber=\"true\">\n                </app-textbox> -->\n                <app-textboxmask disabled=\"true\" id=\"SoDienThoai1\" fxFlex=\"20%\" fxFlex.sm=\"40%\" maxlength=\"12\" mask=\"000 000 0000\" [(model)]=\"modelFE.SoDienThoai\" label=\"Số điện thoại\" maxlength=\"12\" onlynumber=\"true\">\n                </app-textboxmask>\n\n                <app-textbox id=\"Email\" fxFlex=\"20%\" fxFlex.sm=\"40%\" disabled=\"true\" [(model)]=\"modelFE.Email\" label=\"Email\" maxlength=\"200\">\n                </app-textbox>\n\n                <app-textbox *ngIf=\"id == null || id == undefined\" [eyesDisplay]=\"true\" id=\"MatKhauQuanLyTaiKhoan\" type=\"password\" fxFlex=\"20%\" fxFlex.sm=\"40%\" label=\"Mật khẩu\" [(model)]=\"modelFE.Password\" required=\"true\" [validationerror]=\"'Password' | validationerror:validationErrors\">\n                </app-textbox>\n\n                <app-textbox *ngIf=\"id == null || id == undefined\" [eyesDisplay]=\"true\" id=\"ConfirmMatKhauQuanLyTaiKhoan\" type=\"password\" fxFlex=\"20%\" fxFlex.sm=\"40%\" label=\"Nhắc lại mật khẩu\" [(model)]=\"modelFE.PasswordConfirm\" required=\"true\" [validationerror]=\"'PasswordConfirm' | validationerror:validationErrors\">\n                </app-textbox>\n\n                <app-textbox *ngIf=\"id != null && id != undefined\" [eyesDisplay]=\"true\" id=\"PasswordNew\" type=\"password\" fxFlex=\"20%\" fxFlex.sm=\"40%\" label=\"Mật khẩu mới\" [(model)]=\"modelFE.PasswordNew\" [validationerror]=\"'PasswordNew' | validationerror:validationErrors\">\n                </app-textbox>\n\n                <app-textbox *ngIf=\"id != null && id != undefined\" [eyesDisplay]=\"true\" id=\"PasswordNewConfirm\" type=\"password\" fxFlex=\"20%\" fxFlex.sm=\"40%\" label=\"Nhắc lại mật khẩu mới\" [(model)]=\"modelFE.PasswordNewConfirm\" [validationerror]=\"'PasswordNewConfirm' | validationerror:validationErrors\">\n                </app-textbox>\n\n                <app-multiselect fxFlex=\"20%\" fxFlex.sm=\"40%\" label=\"Quyền hạn\" [(model)]=\"modelFE.LstRole\" url=\"QuanLyTaiKhoan/GetLstRole?nhanVienId=0\" required=\"true\" [validationerror]=\"'LstRole' | validationerror:validationErrors\">\n                </app-multiselect>\n\n            </div>\n        </div>\n\n    </fieldset>\n</div>\n\n<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <fieldset fxFlex=\"50%\" class=\"mb-3 mt-3\">\n        <legend>\n            Thông tin khoa phòng\n        </legend>\n        <div fxLayout=\"column\">\n            <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" [useHeaderDefault]=\"false\" [urlGetData]=\"urlGetDataGridKhoaPhongAsync\" [gridColumns]=\"gridKhoaPhongsColumn\" [useActionDefault]=\"false\" [useAddDeault]=\"false\" [groups]=\"groups\" [checkboxAble]=\"false\" [headerTemplate]=\"permissionHeaderTemplate\"\n                [pageable]=\"false\" [heightToolbar]=\"300\" (extOnDataBound)=\"GetDataKhoaPhong($event)\" #gridKhoaPhong [additionalSearchString]=\"userId\">\n            </app-grid>\n            <ng-template #nhomGroupHeaderTemplate let-value=\"value\" let-dataItem let-aggregates>\n                <app-checkbox id=\"check_{{dataItem.items[0].NhomKhoaId}}\" label=\"\" (modelChange)=\"OnChangeParent($event, dataItem ,aggregates )\" [(model)]=\"aggregates.items[0].IsCheckedParent\"></app-checkbox>\n                <strong><span style=\"margin: 3px;\"> </span> {{value}}</strong>\n            </ng-template>\n            <ng-template #maPhongTemplate let-dataItem>\n                <app-checkbox  id=\"check_{{dataItem.Id}}_khoaphong\" label=\"\" [model]=\"dataItem.IsChecked\" (modelChange)=\"OnChangeChildren($event, dataItem)\">\n                </app-checkbox>\n            </ng-template>\n            <ng-template #maPhongTemplateHeader>\n                <app-checkbox fxFlex=\"14%\" fxFlex.md=\"14%\" id=\"checkAll\" value=\"true\" [(model)]=\"isCheckAll\" (modelChange)=\"onSelectAll($event)\">\n                </app-checkbox>\n            </ng-template>\n            <ng-template #phongChinhTemplate let-dataItem>\n                <input type=\"radio\" id=\"phongChinh{{dataItem.Id}}\" name=\"chonphong\" value=\"true\" (click)=\"ChonPhongChinh(dataItem.Id)\" (model)=\"dataItem.PhongChinh\" [disabled]=\"!dataItem.IsChecked\" />\n            </ng-template>\n            <ng-template #permissionHeaderTemplate>\n                <div class=\"bg-app-bar px-6 h-15 border-b sticky left-0 render-header\" fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"justify-content: space-between;\">\n                    <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\" name=\"searchString\" (ngModelChange)=\"searchChanges($event)\" [(ngModel)]=\"searchString\" placeholder=\"Nhập từ khóa tìm kiếm\" />\n                    </div>\n                    <app-validationerrorother id=\"PhongBenhVienIds\" [validationerror]=\"'PhongBenhVienIds' | validationerror:validationErrors\">\n                    </app-validationerrorother>\n                </div>\n            </ng-template>\n        </div>\n    </fieldset>\n    <fieldset fxFlex=\"50%\" class=\"mb-3 mt-3\">\n        <legend>\n            Thông tin kho\n        </legend>\n        <div fxLayout=\"column\">\n            <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" [useHeaderDefault]=\"false\" [urlGetData]=\"urlGetDataGridPhongBenhVienAsync\" [gridColumns]=\"gridKhoColumn\" [useActionDefault]=\"false\" [useAddDeault]=\"false\" [checkboxAble]=\"true\" [headerTemplate]=\"permissionHeaderTemplate1\"\n                [pageable]=\"false\" [heightToolbar]=\"300\" #gridKho (extOnDataBound)=\"GetDataKho($event)\" (extCheckboxSelection)=\"SelectionKho($event)\">\n            </app-grid>\n            <ng-template #permissionHeaderTemplate1>\n                <div class=\"bg-app-bar px-6 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\" name=\"searchStringKho\" (ngModelChange)=\"searchKhoChanges($event)\" [(ngModel)]=\"searchStringKho\" placeholder=\"Nhập từ khóa tìm kiếm\" />\n                    </div>\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n                        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                    </button>\n                    <div fxFlex=\"70%\" fxFlex.sm=\"70%\"></div>\n                </div>\n            </ng-template>\n        </div>\n    </fieldset>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-update/ho-so-nhan-vien-update.component.html":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-update/ho-so-nhan-vien-update.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                 {Title:'Danh Mục',Path:''}\n                 ,{Title:'Nhóm Nhân Viên',Path:''}\n                 ,{Title:'Hồ sơ nhân viên',Path:'/danh-muc/nhom-nhan-vien/ho-so-nhan-vien',Active:true}\n                ]\">\n</app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chỉnh Sửa Hồ Sơ Nhân Viên</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-ho-so-nhan-vien-share></app-ho-so-nhan-vien-share>\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter #updateNhanVien [bodyComponent]=\"shared\" type=\"update\" (updated)=\"onUpdated()\">\n                    </app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./src/@vex/animations/fade-in-up.animation.ts":
/*!*****************************************************!*\
  !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
  \*****************************************************/
/*! exports provided: fadeInUpAnimation, fadeInUp400ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUpAnimation", function() { return fadeInUpAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUp400ms", function() { return fadeInUp400ms; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


function fadeInUpAnimation(duration) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'translateY(20px)',
                opacity: 0
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'translateY(0)',
                opacity: 1
            }))
        ])
    ]);
}
const fadeInUp400ms = fadeInUpAnimation(400);


/***/ }),

/***/ "./src/@vex/animations/stagger.animation.ts":
/*!**************************************************!*\
  !*** ./src/@vex/animations/stagger.animation.ts ***!
  \**************************************************/
/*! exports provided: staggerAnimation, stagger80ms, stagger60ms, stagger40ms, stagger20ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staggerAnimation", function() { return staggerAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger80ms", function() { return stagger80ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger60ms", function() { return stagger60ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger40ms", function() { return stagger40ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger20ms", function() { return stagger20ms; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


function staggerAnimation(timing) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('stagger', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@fadeInUp, @fadeInRight, @scaleIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()), { optional: true }),
        ])
    ]);
}
const stagger80ms = staggerAnimation(80);
const stagger60ms = staggerAnimation(60);
const stagger40ms = staggerAnimation(40);
const stagger20ms = staggerAnimation(20);


/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-create/ho-so-nhan-vien-create.component.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-create/ho-so-nhan-vien-create.component.scss ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLW5oYW4tdmllbi9oby1zby1uaGFuLXZpZW4vaG8tc28tbmhhbi12aWVuLWNyZWF0ZS9oby1zby1uaGFuLXZpZW4tY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-create/ho-so-nhan-vien-create.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-create/ho-so-nhan-vien-create.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: HoSoNhanVienCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoNhanVienCreateComponent", function() { return HoSoNhanVienCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var _ho_so_nhan_vien_share_ho_so_nhan_vien_share_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ho-so-nhan-vien-share/ho-so-nhan-vien-share.component */ "./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-share/ho-so-nhan-vien-share.component.ts");






let HoSoNhanVienCreateComponent = class HoSoNhanVienCreateComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onCreated() { this.router.navigate(['/danh-muc/nhom-nhan-vien/ho-so-nhan-vien']); }
    keyEvent(event) {
        if (event.keyCode == 83 && event.ctrlKey) {
            this.createNhanVien.create();
            event.preventDefault();
        }
        if (event.keyCode == 27 && !event.ctrlKey) {
            this.router.navigate(['/danh-muc/nhom-nhan-vien/ho-so-nhan-vien']);
            event.preventDefault();
        }
    }
};
HoSoNhanVienCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ho_so_nhan_vien_share_ho_so_nhan_vien_share_component__WEBPACK_IMPORTED_MODULE_5__["HoSoNhanVienShareComponent"], { static: true })
], HoSoNhanVienCreateComponent.prototype, "shared", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("createNhanVien", { static: false })
], HoSoNhanVienCreateComponent.prototype, "createNhanVien", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
], HoSoNhanVienCreateComponent.prototype, "keyEvent", null);
HoSoNhanVienCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ho-so-nhan-vien-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ho-so-nhan-vien-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-create/ho-so-nhan-vien-create.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ho-so-nhan-vien-create.component.scss */ "./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-create/ho-so-nhan-vien-create.component.scss")).default]
    })
], HoSoNhanVienCreateComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-list/ho-so-nhan-vien-list.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-list/ho-so-nhan-vien-list.component.scss ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLW5oYW4tdmllbi9oby1zby1uaGFuLXZpZW4vaG8tc28tbmhhbi12aWVuLWxpc3QvaG8tc28tbmhhbi12aWVuLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-list/ho-so-nhan-vien-list.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-list/ho-so-nhan-vien-list.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: HoSoNhanVienListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoNhanVienListComponent", function() { return HoSoNhanVienListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/dist/fesm2015/index.js");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");













let HoSoNhanVienListComponent = class HoSoNhanVienListComponent {
    constructor(dialog, notificationService, apiService, authService) {
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.authService = authService;
        this.sort = [{
                field: 'Id',
                dir: 'desc'
            }];
        this.gridColumns = [];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhMucNhanVien;
        this.gridColumns = [
            { Field: "HoTen", Title: "Họ Tên", Width: 200, Sortable: true, LinkDetail: true },
            { Field: "SoChungMinhThu", Title: "Số CMT", Width: 150, Sortable: true },
            // { Field: "NgaySinh", Title: "Ngày Sinh", Width: 150, Sortable: true },
            { Field: "SoDienThoaiDisplay", Title: "Số Điện Thoại", Width: 150, Sortable: true },
            { Field: "Email", Title: "Email", Width: 200, Sortable: true },
            { Field: "DiaChi", Title: "Địa Chỉ", MinWidth: 200, Sortable: true }
        ];
    }
    exportExcel() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Process)) {
            this.apiService.postExportExcel("NhanVien/ExportHoSoNhanVien", this.gridChild._gridQueryInfo).subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "ExportHoSoNhanVien" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
        }
    }
};
HoSoNhanVienListComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], { static: false })
], HoSoNhanVienListComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_2__["WindowComponent"], { static: false })
], HoSoNhanVienListComponent.prototype, "windowChild", void 0);
HoSoNhanVienListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ho-so-nhan-vien-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ho-so-nhan-vien-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-list/ho-so-nhan-vien-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ho-so-nhan-vien-list.component.scss */ "./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-list/ho-so-nhan-vien-list.component.scss")).default]
    })
], HoSoNhanVienListComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-routing.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-routing.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: HoSoNhanVienRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoNhanVienRoutingModule", function() { return HoSoNhanVienRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _ho_so_nhan_vien_list_ho_so_nhan_vien_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ho-so-nhan-vien-list/ho-so-nhan-vien-list.component */ "./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-list/ho-so-nhan-vien-list.component.ts");
/* harmony import */ var _ho_so_nhan_vien_create_ho_so_nhan_vien_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ho-so-nhan-vien-create/ho-so-nhan-vien-create.component */ "./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-create/ho-so-nhan-vien-create.component.ts");
/* harmony import */ var _ho_so_nhan_vien_update_ho_so_nhan_vien_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ho-so-nhan-vien-update/ho-so-nhan-vien-update.component */ "./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-update/ho-so-nhan-vien-update.component.ts");









const routes = [
    {
        path: '',
        component: _ho_so_nhan_vien_list_ho_so_nhan_vien_list_component__WEBPACK_IMPORTED_MODULE_6__["HoSoNhanVienListComponent"],
        data: {
            title: 'Danh sách hồ sơ nhân viên',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhMucNhanVien,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
    {
        path: 'them',
        component: _ho_so_nhan_vien_create_ho_so_nhan_vien_create_component__WEBPACK_IMPORTED_MODULE_7__["HoSoNhanVienCreateComponent"],
        data: {
            title: 'Thêm nhân viên',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhMucNhanVien,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].Add
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
    {
        path: 'chinh-sua/:id',
        component: _ho_so_nhan_vien_update_ho_so_nhan_vien_update_component__WEBPACK_IMPORTED_MODULE_8__["HoSoNhanVienUpdateComponent"],
        data: {
            title: 'Chỉnh sửa nhân viên',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhMucNhanVien,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
];
let HoSoNhanVienRoutingModule = class HoSoNhanVienRoutingModule {
};
HoSoNhanVienRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HoSoNhanVienRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-share/ho-so-nhan-vien-share.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-share/ho-so-nhan-vien-share.component.scss ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("fieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em !important;\n  padding-bottom: 0.625em !important;\n  padding-left: 0.75em !important;\n  padding-right: 0.75em !important;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset legend {\n  margin-left: 15px;\n  display: flex;\n  align-items: flex-end;\n  text-transform: uppercase;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline-block !important;\n}\n\nfieldset .render-header {\n  justify-content: space-between !important;\n}\n\n.hide {\n  display: none;\n}\n\n.check-box-tao-tai-khoan {\n  margin-right: 10px;\n}\n\n.avt {\n  display: table;\n  background: rgba(0, 0, 0, 0.04);\n  padding: 16px 16px 44px 16px;\n  width: 100%;\n  border-bottom: 1px solid rgba(82, 63, 105, 0.42);\n  border-radius: 4px 4px 0 0;\n}\n\n.avt:hover {\n  border-bottom: 2px solid #005dab;\n}\n\n.avt .content {\n  text-align: center;\n  height: 198px;\n  max-width: 168px;\n  margin: 0 auto;\n}\n\n.avt .content .avatar-hsct {\n  border: 1px solid #ccc;\n  border-radius: 9999px;\n  width: 100%;\n  height: 168px;\n  cursor: pointer;\n}\n\n.avt .content .avatar-hsct:hover {\n  border: 1px solid #005dab;\n}\n\n.avt .content .avatar-hsct img {\n  width: 100%;\n  height: 168px;\n  border-radius: 9999px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2RhbmgtbXVjL25ob20tbmhhbi12aWVuL2hvLXNvLW5oYW4tdmllbi9oby1zby1uaGFuLXZpZW4tc2hhcmUvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxkYW5oLW11Y1xcbmhvbS1uaGFuLXZpZW5cXGhvLXNvLW5oYW4tdmllblxcaG8tc28tbmhhbi12aWVuLXNoYXJlXFxoby1zby1uaGFuLXZpZW4tc2hhcmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLW5oYW4tdmllbi9oby1zby1uaGFuLXZpZW4vaG8tc28tbmhhbi12aWVuLXNoYXJlL2hvLXNvLW5oYW4tdmllbi1zaGFyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UseUNBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxnREFBQTtFQUNBLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2RhbmgtbXVjL25ob20tbmhhbi12aWVuL2hvLXNvLW5oYW4tdmllbi9oby1zby1uaGFuLXZpZW4tc2hhcmUvaG8tc28tbmhhbi12aWVuLXNoYXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZmllbGRzZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAwLjM1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4ICNlMGUwZTA7XG4gIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcbn1cblxuZmllbGRzZXQgbGVnZW5kIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuZmllbGRzZXQgLml0ZW1fcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmZpZWxkc2V0IHVsID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmZpZWxkc2V0IHVsLmlubGluZSA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbmZpZWxkc2V0IC5yZW5kZXItaGVhZGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNoZWNrLWJveC10YW8tdGFpLWtob2FuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uYXZ0IHtcbiAgZGlzcGxheTogdGFibGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gIHBhZGRpbmc6IDE2cHggMTZweCA0NHB4IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg4MiwgNjMsIDEwNSwgMC40Mik7XG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xufVxuXG4uYXZ0OmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDVkYWI7XG59XG5cbi5hdnQgLmNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTk4cHg7XG4gIG1heC13aWR0aDogMTY4cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYXZ0IC5jb250ZW50IC5hdmF0YXItaHNjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTY4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmF2dCAuY29udGVudCAuYXZhdGFyLWhzY3Q6aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA1ZGFiO1xufVxuXG4uYXZ0IC5jb250ZW50IC5hdmF0YXItaHNjdCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNjhweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xufSIsImZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMC43NWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG59XG5cbmZpZWxkc2V0IGxlZ2VuZCB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCAucmVuZGVyLWhlYWRlciB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jaGVjay1ib3gtdGFvLXRhaS1raG9hbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmF2dCB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICBwYWRkaW5nOiAxNnB4IDE2cHggNDRweCAxNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoODIsIDYzLCAxMDUsIDAuNDIpO1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcbn1cblxuLmF2dDpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDA1ZGFiO1xufVxuXG4uYXZ0IC5jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDE5OHB4O1xuICBtYXgtd2lkdGg6IDE2OHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmF2dCAuY29udGVudCAuYXZhdGFyLWhzY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE2OHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hdnQgLmNvbnRlbnQgLmF2YXRhci1oc2N0OmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwNWRhYjtcbn1cblxuLmF2dCAuY29udGVudCAuYXZhdGFyLWhzY3QgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTY4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-share/ho-so-nhan-vien-share.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-share/ho-so-nhan-vien-share.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: HoSoNhanVienShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoNhanVienShareComponent", function() { return HoSoNhanVienShareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ho_so_nhan_vien_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ho-so-nhan-vien.model */ "./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_view_image_pdf_view_image_pdf_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component */ "./src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-clear */ "./node_modules/@iconify/icons-ic/twotone-clear.js");
/* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_11__);












let HoSoNhanVienShareComponent = class HoSoNhanVienShareComponent {
    constructor(route, baseService, dialog, apiService) {
        this.route = route;
        this.baseService = baseService;
        this.dialog = dialog;
        this.apiService = apiService;
        this.modelFE = {};
        this.khoaPhongIdViewModel = {};
        this.sreachKhoaPhong = new _ho_so_nhan_vien_model__WEBPACK_IMPORTED_MODULE_2__["SreachKhoaPhong"](0, [], []);
        this.sreachKhoaPhongJson = null;
        this.khoaPhongIds = '';
        this.fileData = null;
        this.userId = 0;
        this.isChonKhoaPhong = true;
        this.allKhoaPhong = true;
        this.gridKhoaPhongsColumn = [];
        this.gridKhoColumn = [];
        this.dataSourceKhoaPhong = {
            data: [],
            total: 0
        };
        this.gridDataKhoSource = {
            data: [],
            total: 0
        };
        this.khoaPhongViewModel = [];
        this.tmpdataSourceKhoaPhongViewModel = [];
        this.tmp1dataSourceKhoaPhongViewModel = [];
        this.khoViewModel = [];
        this.tmpdataSourceKhoViewModel = [];
        this.tmp1dataSourceKhoViewModel = [];
        this.gridDataKhoSourceTam = {
            data: [],
            total: 0
        };
        this.gridDataSource = {
            data: [],
            total: 0
        };
        this.groups = [{
                field: 'NhomKhoa', aggregates: [
                    { field: 'PhongChinh', aggregate: 'sum' }
                ]
            }];
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
        this.nhomKhoaPhongs = [];
        this.isCheckAll = false;
        this.urlGetDataGridKhoaPhongAsync = 'NhanVien/GetListKhoaPhongDataForGridAsync';
        this.urlGetDataGridPhongBenhVienAsync = 'NhanVien/GetListKhoTheoPhongDataForGridAsync';
        this.allowedExtensions = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
        this.icClear = _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_11___default.a;
    }
    ngOnInit() {
        this.gridKhoaPhongsColumn = [
            {
                Field: 'NhomKhoa', Title: 'Nhóm', Width: 0, Sortable: true,
                Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate
            },
            { Field: '', Title: '', Width: 50, Sortable: true, TemplateHeader: this.maPhongTemplateHeader, Template: this.maPhongTemplate },
            { Field: 'MaPhong', Title: 'Mã', Width: 100, Sortable: true },
            { Field: 'TenPhong', Title: 'Tên', Width: 386, Sortable: true },
            { Field: 'PhongChinh', Title: 'Phòng chính', Width: 255, Sortable: true, Template: this.phongChinhTemplate }
        ];
        this.gridKhoColumn = [
            { Field: 'TenKho', Title: 'Tên', Width: 200, Sortable: true },
            { Field: 'TenKhoa', Title: 'Khoa', Width: 100, Sortable: true },
            { Field: 'TenPhong', Title: 'Phòng', Width: 100, Sortable: true },
        ];
        this.modelFE.GioiTinh = 1;
        this.modelFE.TaoTaiKhoan = true;
        this.id = this.route.snapshot.params.id;
        if (this.id !== undefined && this.id !== null) {
            this.getById(this.id);
            this.userId = this.id;
        }
        this.modelFE.KhoaPhongIds = [];
        this.modelFE.PhongBenhVienIds = [];
    }
    onSelectAll(isCheck) {
        if (isCheck) {
            // đang check
            this.dataSourceKhoaPhong.data.forEach(khoaPhong => {
                khoaPhong.IsChecked = true;
                if (!this.sreachKhoaPhong.PhongBenhVienIds.some(x => x === khoaPhong.Id)) {
                    this.sreachKhoaPhong.PhongBenhVienIds.push(khoaPhong.Id);
                    this.modelFE.PhongBenhVienIds.push(khoaPhong.Id);
                }
            });
            this.nhomKhoaPhongs.forEach(nhomKhoaPhong => {
                const id = '#check_' + nhomKhoaPhong.Id;
                if (!$(id).hasClass('mat-checkbox-checked')) {
                    $(id).addClass('mat-checkbox-checked');
                    $(id).attr('ng-reflect-model', 'true');
                }
                if (!this.sreachKhoaPhong.KhoaPhongIds.some(x => x === nhomKhoaPhong.Id)) {
                    this.sreachKhoaPhong.KhoaPhongIds.push(nhomKhoaPhong.Id);
                    this.modelFE.KhoaPhongIds.push(nhomKhoaPhong.Id);
                }
            });
        }
        else {
            // uncheck
            this.dataSourceKhoaPhong.data.forEach(khoaPhong => {
                khoaPhong.IsChecked = false;
                if (this.sreachKhoaPhong.PhongBenhVienIds.some(x => x === khoaPhong.Id)) {
                    const pos = this.sreachKhoaPhong.PhongBenhVienIds.indexOf(khoaPhong.Id);
                    if (pos > -1) {
                        this.sreachKhoaPhong.PhongBenhVienIds.splice(pos, 1);
                    }
                    const posDb = this.modelFE.PhongBenhVienIds.indexOf(khoaPhong.Id);
                    if (posDb > -1) {
                        this.modelFE.PhongBenhVienIds.splice(posDb, 1);
                    }
                }
            });
            this.nhomKhoaPhongs.forEach(nhomKhoaPhong => {
                const id = '#check_' + nhomKhoaPhong.Id;
                if ($(id).hasClass('mat-checkbox-checked')) {
                    $(id).removeClass('mat-checkbox-checked');
                    $(id).attr('ng-reflect-model', 'false');
                }
                if (this.sreachKhoaPhong.KhoaPhongIds.some(x => x === nhomKhoaPhong.Id)) {
                    const pos = this.sreachKhoaPhong.KhoaPhongIds.indexOf(nhomKhoaPhong.Id);
                    if (pos > -1) {
                        this.sreachKhoaPhong.KhoaPhongIds.splice(pos, 1);
                    }
                    const posDb = this.modelFE.KhoaPhongIds.indexOf(nhomKhoaPhong.Id);
                    if (posDb > -1) {
                        this.modelFE.KhoaPhongIds.splice(posDb, 1);
                    }
                }
            });
        }
        this.gridKho.gridDataSource = null;
        this.sreachKhoaPhongJson = JSON.stringify(this.sreachKhoaPhong);
        this.gridKho._additionalSearchString = this.sreachKhoaPhongJson;
        this.gridKho._masterName = 'khonhanvien';
        this.gridKho.setDataSource();
    }
    OnChangeParent(isChecked, data, aggregates) {
        aggregates.items.forEach(item => {
            item.IsCheckedParent = true;
            if (item.IsChecked === false) {
                item.IsCheckedParent = false;
            }
        });
        const id = '#check_' + data.items[0].NhomKhoaId;
        isChecked = !$(id).hasClass('mat-checkbox-checked');
        if (isChecked) {
            data.items.forEach(children => {
                children.IsChecked = true;
                if (!this.sreachKhoaPhong.PhongBenhVienIds.some(x => x === children.Id)) {
                    this.sreachKhoaPhong.PhongBenhVienIds.push(children.Id);
                    this.modelFE.PhongBenhVienIds.push(children.Id);
                }
            });
            if (!$(id).hasClass('mat-checkbox-checked')) {
                setTimeout(() => {
                    $(id).addClass('mat-checkbox-checked');
                }, 100);
            }
            this.WillCheckAll();
            this.sreachKhoaPhong.KhoaPhongIds.push(data.items[0].NhomKhoaId);
            this.modelFE.KhoaPhongIds.push(data.items[0].NhomKhoaId);
        }
        else {
            data.items.forEach(children => {
                children.IsChecked = false;
                if (this.sreachKhoaPhong.PhongBenhVienIds.some(x => x === children.Id)) {
                    const pos = this.sreachKhoaPhong.PhongBenhVienIds.indexOf(children.Id);
                    if (pos > -1) {
                        this.sreachKhoaPhong.PhongBenhVienIds.splice(pos, 1);
                    }
                    const posDb = this.modelFE.PhongBenhVienIds.indexOf(children.Id);
                    if (posDb > -1) {
                        this.modelFE.PhongBenhVienIds.splice(posDb, 1);
                    }
                }
            });
            if ($(id).hasClass('mat-checkbox-checked')) {
                setTimeout(() => {
                    $(id).removeClass('mat-checkbox-checked');
                }, 100);
            }
            if (this.sreachKhoaPhong.KhoaPhongIds.some(x => x === data.items[0].NhomKhoaId)) {
                const pos = this.sreachKhoaPhong.KhoaPhongIds.indexOf(data.items[0].NhomKhoaId);
                if (pos > -1) {
                    this.sreachKhoaPhong.KhoaPhongIds.splice(pos, 1);
                }
                const posDb = this.modelFE.KhoaPhongIds.indexOf(data.items[0].NhomKhoaId);
                if (posDb > -1) {
                    this.modelFE.KhoaPhongIds.splice(posDb, 1);
                }
            }
            if (this.isCheckAll) {
                this.isCheckAll = false;
            }
        }
        this.gridKho.gridDataSource = null;
        this.sreachKhoaPhongJson = JSON.stringify(this.sreachKhoaPhong);
        this.gridKho._additionalSearchString = this.sreachKhoaPhongJson;
        this.gridKho._masterName = 'khonhanvien';
        this.gridKho.setDataSource();
    }
    OnChangeChildren(isChecked, kpNv) {
        kpNv.IsChecked = isChecked;
        const id = '#check_' + kpNv.NhomKhoaId;
        if (!this.dataSourceKhoaPhong.data.some(x => x.NhomKhoaId === kpNv.NhomKhoaId && !x.IsChecked)) {
            if (!$(id).hasClass('mat-checkbox-checked')) {
                $(id).addClass('mat-checkbox-checked');
                $(id).attr('ng-reflect-model', 'true');
            }
        }
        else {
            if ($(id).hasClass('mat-checkbox-checked')) {
                $(id).removeClass('mat-checkbox-checked');
                $(id).attr('ng-reflect-model', 'false');
            }
        }
        if (isChecked) {
            this.sreachKhoaPhong.PhongBenhVienIds.push(kpNv.Id);
            this.modelFE.PhongBenhVienIds.push(kpNv.Id);
            if (!this.dataSourceKhoaPhong.data.some(x => x.NhomKhoaId === kpNv.NhomKhoaId && !x.IsChecked)) {
                this.sreachKhoaPhong.KhoaPhongIds.push(kpNv.NhomKhoaId);
                this.modelFE.KhoaPhongIds.push(kpNv.NhomKhoaId);
            }
            this.WillCheckAll();
        }
        else {
            if (this.sreachKhoaPhong.PhongBenhVienIds.some(x => x === kpNv.Id)) {
                const pos = this.sreachKhoaPhong.PhongBenhVienIds.indexOf(kpNv.Id);
                if (pos > -1) {
                    this.sreachKhoaPhong.PhongBenhVienIds.splice(pos, 1);
                }
                const posDb = this.modelFE.PhongBenhVienIds.indexOf(kpNv.Id);
                if (posDb > -1) {
                    this.modelFE.PhongBenhVienIds.splice(posDb, 1);
                }
            }
            if (this.dataSourceKhoaPhong.data.some(x => x.NhomKhoaId === kpNv.NhomKhoaId && !x.IsChecked)) {
                if (this.sreachKhoaPhong.KhoaPhongIds.some(x => x === kpNv.NhomKhoaId)) {
                    const pos = this.sreachKhoaPhong.KhoaPhongIds.indexOf(kpNv.NhomKhoaId);
                    if (pos > -1) {
                        this.sreachKhoaPhong.KhoaPhongIds.splice(pos, 1);
                    }
                    const posDb = this.modelFE.KhoaPhongIds.indexOf(kpNv.NhomKhoaId);
                    if (posDb > -1) {
                        this.modelFE.KhoaPhongIds.splice(posDb, 1);
                    }
                }
            }
            if (this.isCheckAll) {
                this.isCheckAll = false;
            }
        }
        this.gridKho.gridDataSource = null;
        this.sreachKhoaPhongJson = JSON.stringify(this.sreachKhoaPhong);
        this.gridKho._additionalSearchString = this.sreachKhoaPhongJson;
        this.gridKho.setDataSource();
    }
    GetDataKhoaPhong(result) {
        this.khoaPhongViewModel = result.Data;
        this.tmp1dataSourceKhoaPhongViewModel = result.Data;
        this.dataSourceKhoaPhong.data = [...result.Data];
        this.dataSourceKhoaPhong.total = result.TotalRowCount;
        const nhomKhoaIds = [...this.dataSourceKhoaPhong.data.map(x => x.NhomKhoaId).filter((value, index, self) => {
                return self.indexOf(value) === index;
            })];
        nhomKhoaIds.forEach(x => {
            this.nhomKhoaPhongs.push({
                Id: x,
                Visit: false
            });
        });
        this.WillCheckAll();
        if (this.userId !== 0) {
            this.bindCheckEditUserKho(result.Data);
        }
        setTimeout(() => {
            result.Data.forEach(x => {
                if (x.PhongChinh === true) {
                    $('#phongChinh' + x.Id).prop('checked', true);
                    this.modelFE.PhongChinhId = x.Id;
                }
                else {
                    $('#phongChinh' + x.Id).prop('checked', false);
                }
            });
        }, 100);
    }
    WillCheckAll() {
        if (this.dataSourceKhoaPhong.data.length === 0)
            return;
        if (this.dataSourceKhoaPhong.data.length === this.dataSourceKhoaPhong.data.filter(x => x.IsChecked).length) {
            if (!this.isCheckAll) {
                this.isCheckAll = true;
            }
        }
    }
    getById(id) {
        this.baseService.getById(id).subscribe((resultData) => {
            if (resultData !== null && resultData !== undefined) {
                this.modelFE = resultData;
                this.modelFE.IsUpdateView = true;
                if (this.modelFE.KhoaPhongIds.length > 0) {
                    this.isChonKhoaPhong = false;
                }
                this.khoaPhongIds = JSON.stringify(this.modelFE.KhoaPhongIds);
                this.loadPhongKhamHienTaiByNhanVien(id, this.khoaPhongIds);
                // this.modelFE.Password = SystemDefaultPassword.DefaultPassword;
                // this.modelFE.PasswordConfirm = this.modelFE.Password;
            }
        });
    }
    searchChanges(dataEvent) {
        if (dataEvent != "" && dataEvent != undefined) {
            let searchStr = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].removeVietnamese(dataEvent.toLowerCase().trim());
            let data = this.filtreText(this.khoaPhongViewModel, searchStr);
            this.tmpdataSourceKhoaPhongViewModel = data;
            this.tmp1dataSourceKhoaPhongViewModel = this.tmp1dataSourceKhoaPhongViewModel[this.tmp1dataSourceKhoaPhongViewModel.indexOf(this.tmpdataSourceKhoaPhongViewModel)] = this.tmpdataSourceKhoaPhongViewModel;
            this.dataSourceKhoaPhong.data = this.tmp1dataSourceKhoaPhongViewModel;
            this.gridKhoaPhong.gridDataSource = this.dataSourceKhoaPhong;
            this.gridKhoaPhong.groups = this.groups;
            this.gridKhoaPhong.setDataSource();
        }
        else {
            // this.tmp1dataSourceKhoaPhongViewModel[this.tmp1dataSourceKhoaPhongViewModel.indexOf(this.tmpdataSourceKhoaPhongViewModel)] = this.tmpdataSourceKhoaPhongViewModel;         
            this.dataSourceKhoaPhong.data = this.khoaPhongViewModel;
            this.gridKhoaPhong.groups = this.groups;
            this.gridKhoaPhong.gridDataSource = this.dataSourceKhoaPhong;
            this.gridKhoaPhong.setDataSource();
        }
        setTimeout(() => {
            $('#phongChinh' + this.modelFE.PhongChinhId).prop('checked', true);
            // this.dataSourceKhoaPhong.data.forEach(x => {
            //     if (x.PhongChinh === true) {
            //         $('#phongChinh' + this.modelFE.PhongChinhId).prop('checked', true);
            //         this.modelFE.PhongChinhId = x.Id;
            //     } else {
            //         $('#phongChinh' + x.Id).prop('checked', false);
            //     }
            // });
        }, 100);
    }
    searchKhoChanges(dataEvent) {
        if (dataEvent != "" && dataEvent != undefined) {
            let searchStr = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].removeVietnamese(dataEvent).toLowerCase().trim();
            let data = this.filtreTextKho(this.khoViewModel, searchStr);
            this.tmpdataSourceKhoViewModel = data;
            this.tmp1dataSourceKhoViewModel = this.tmp1dataSourceKhoViewModel[this.tmp1dataSourceKhoViewModel.indexOf(this.tmp1dataSourceKhoViewModel)] = this.tmpdataSourceKhoViewModel;
            this.gridDataKhoSource.data = this.tmp1dataSourceKhoViewModel;
            this.gridKho.gridDataSource = this.gridDataKhoSource;
            this.gridKho._gridDataSource = this.gridDataKhoSource.data;
            this.gridKho._gridDataSource.data = this.gridDataKhoSource.data;
            //this.gridKho.setDataSource();
        }
        else {
            // this.tmp1dataSourceKhoaPhongViewModel[this.tmp1dataSourceKhoaPhongViewModel.indexOf(this.tmpdataSourceKhoaPhongViewModel)] = this.tmpdataSourceKhoaPhongViewModel;         
            this.gridDataKhoSource.data = this.khoViewModel;
            this.gridKho._gridDataSource = this.gridDataKhoSource.data;
            //this.gridKho.setDataSource();        
        }
    }
    filtreText(arr, searchStr) {
        return arr.filter(function (el) {
            return src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].removeVietnamese(el.TenPhong).toLowerCase().indexOf(searchStr) !== -1 || src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].removeVietnamese(el.NhomKhoa).toLowerCase().indexOf(searchStr) !== -1 || src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].removeVietnamese(el.MaPhong).toLowerCase().indexOf(searchStr) !== -1;
        });
    }
    filtreTextKho(arr, searchStr) {
        return arr.filter(function (el) {
            if (el.TenPhong !== null)
                return src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].removeVietnamese(el.TenKho).toLowerCase().indexOf(searchStr) !== -1 || src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].removeVietnamese(el.TenKhoa).toLowerCase().indexOf(searchStr) !== -1 || src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].removeVietnamese(el.TenPhong).toLowerCase().toLowerCase().indexOf(searchStr) !== -1;
            else
                return src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].removeVietnamese(el.TenKho).toLowerCase().indexOf(searchStr) !== -1 || src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].removeVietnamese(el.TenKhoa).toLowerCase().indexOf(searchStr) !== -1;
        });
    }
    bindCheckEditUserKho(data) {
        data.filter(x => x.IsChecked).forEach(item => {
            this.sreachKhoaPhong.PhongBenhVienIds.push(item.Id);
            if (item.IsCheckedParent) {
                this.nhomKhoaPhongs.filter(x => x.Visit === false && x.Id === item.NhomKhoaId).forEach(nhomKhoa => {
                    nhomKhoa.Visit = true;
                    this.sreachKhoaPhong.KhoaPhongIds.push(nhomKhoa.Id);
                });
            }
        });
        // sreach kho theo phong kho đã có sẳn
        this.sreachKhoaPhong.NhanVienId = this.userId;
        this.sreachKhoaPhongJson = JSON.stringify(this.sreachKhoaPhong);
        this.gridKho._additionalSearchString = this.sreachKhoaPhongJson;
        this.gridKho._masterName = 'khonhanvien';
        this.gridKho.setDataSource();
    }
    getSharedData() {
        // this.checkPasswordChange();
        return this.modelFE;
    }
    fileProgress(fileInput) {
        this.fileData = fileInput.target.files[0];
        this.preview();
    }
    preview() {
        if (this.fileData !== undefined) {
            const mimeType = this.fileData.type;
            if (mimeType.match(/image\/*/) == null) {
                return;
            }
            const reader = new FileReader();
            reader.readAsDataURL(this.fileData);
            reader.onload = (_event) => {
                this.modelFE.Avatar = reader.result;
            };
        }
    }
    ViewImage(thongTinAnh) {
        if (thongTinAnh.Avatar === undefined) {
            thongTinAnh.Avatar = null;
        }
        this.dialog.open(src_app_shared_component_dialogs_view_image_pdf_view_image_pdf_component__WEBPACK_IMPORTED_MODULE_6__["ViewImagePdfComponent"], {
            disableClose: false,
            width: '1000px',
            height: '600px',
            data: {
                Type: 'Image',
                Title: 'Xem ảnh',
                Description: '',
                Src: thongTinAnh.Avatar,
            },
        });
    }
    onSelectChangeKhoaPhong(ev) {
        if (ev.length === 0) {
            this.isChonKhoaPhong = true;
            this.modelFE.PhongBenhVienIds = [];
        }
        else {
            this.khoaPhongIds = JSON.stringify(this.modelFE.KhoaPhongIds);
            // this.loadPhongKhamHienTaiByNhanVien(this.userId, this.khoaPhongIds);
            this.isChonKhoaPhong = false;
        }
    }
    OnOpen(isOpen) {
        if (isOpen) {
            const url = 'NhanVien/GetListPhongByKhoas?nhanVienId=' + this.userId + '&khoaphongIds=' + this.khoaPhongIds;
            this.lstPtttCmb.url = url;
            this.lstPtttCmb.data = null;
            this.lstPtttCmb.queryInfo.Query = null;
            return;
        }
        this.lstPtttCmb.url = '';
    }
    loadPhongKhamHienTaiByNhanVien(userId, khoaPhongs) {
        this.apiService
            .get('NhanVien/GetListPhongByKhoa?nhanVienId=' +
            userId +
            '&khoaphongIds=' +
            khoaPhongs)
            .subscribe((resultData) => {
            if (resultData !== null && resultData !== undefined) {
                this.phongKhamHienTais = resultData;
                const phongKhams = [];
                this.phongKhamHienTais.forEach((element) => {
                    phongKhams.push(element.KeyId);
                });
                if (this.modelFE.PhongBenhVienIds !== undefined &&
                    this.modelFE.PhongBenhVienIds.length > 0 &&
                    phongKhams.length > 0) {
                    const removePhongKhongChonKhoas = this.differenceOf2Arrays(this.modelFE.PhongBenhVienIds, phongKhams);
                    this.modelFE.PhongBenhVienIds = removePhongKhongChonKhoas;
                }
            }
        });
    }
    ChonPhongChinh(phongChinh) {
        this.modelFE.PhongChinhId = phongChinh;
    }
    SelectionKho(khoIds) {
        this.modelFE.KhoNhanVienQuanLyIds = [];
        khoIds.forEach((element) => {
            this.modelFE.KhoNhanVienQuanLyIds.push(element);
        });
    }
    GetDataKho(data) {
        this.modelFE.KhoNhanVienQuanLyIds = [];
        this.gridDataKhoSource = data.Data;
        this.khoViewModel = data.Data;
        this.tmp1dataSourceKhoViewModel = data.Data;
        const self = this;
        setTimeout(() => {
            data.Data.forEach((element) => {
                if (element.DaChon) {
                    if (!$('#' + 'khonhanvienselectCheckboxId' + element.Id).prop('checked')) {
                        $('#' + 'khonhanvienselectCheckboxId' + element.Id).trigger('click');
                    }
                    //reset lại                   
                    this.modelFE.KhoNhanVienQuanLyIds.push(element.Id);
                }
            });
        }, 100);
    }
    differenceOf2Arrays(arr1, arr2) {
        const temp = [];
        arr1 = arr1.toString().split(',').map(Number);
        arr2 = arr2.toString().split(',').map(Number);
        // tslint:disable-next-line: forin
        for (const i in arr2) {
            for (const j in arr1) {
                if (arr2[i] === arr1[j]) {
                    temp.push(arr1[j]);
                }
            }
        }
        return temp;
    }
};
HoSoNhanVienShareComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridKhoaPhong', { static: false })
], HoSoNhanVienShareComponent.prototype, "gridKhoaPhong", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridKho', { static: false })
], HoSoNhanVienShareComponent.prototype, "gridKho", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lstPtttCmb', { static: false })
], HoSoNhanVienShareComponent.prototype, "lstPtttCmb", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], HoSoNhanVienShareComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maPhongTemplate', { static: true })
], HoSoNhanVienShareComponent.prototype, "maPhongTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maPhongTemplateHeader', { static: true })
], HoSoNhanVienShareComponent.prototype, "maPhongTemplateHeader", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('phongChinhTemplate', { static: true })
], HoSoNhanVienShareComponent.prototype, "phongChinhTemplate", void 0);
HoSoNhanVienShareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-ho-so-nhan-vien-share',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ho-so-nhan-vien-share.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-share/ho-so-nhan-vien-share.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ho-so-nhan-vien-share.component.scss */ "./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-share/ho-so-nhan-vien-share.component.scss")).default]
    })
], HoSoNhanVienShareComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-update/ho-so-nhan-vien-update.component.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-update/ho-so-nhan-vien-update.component.scss ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLW5oYW4tdmllbi9oby1zby1uaGFuLXZpZW4vaG8tc28tbmhhbi12aWVuLXVwZGF0ZS9oby1zby1uaGFuLXZpZW4tdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-update/ho-so-nhan-vien-update.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-update/ho-so-nhan-vien-update.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: HoSoNhanVienUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoNhanVienUpdateComponent", function() { return HoSoNhanVienUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var _ho_so_nhan_vien_share_ho_so_nhan_vien_share_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ho-so-nhan-vien-share/ho-so-nhan-vien-share.component */ "./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-share/ho-so-nhan-vien-share.component.ts");






let HoSoNhanVienUpdateComponent = class HoSoNhanVienUpdateComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onUpdated() { this.router.navigate(['/danh-muc/nhom-nhan-vien/ho-so-nhan-vien']); }
    keyEvent(event) {
        if (event.keyCode == 83 && event.ctrlKey) {
            this.updateNhanVien.update();
            event.preventDefault();
        }
        if (event.keyCode == 27 && !event.ctrlKey) {
            this.router.navigate(['/danh-muc/nhom-nhan-vien/ho-so-nhan-vien']);
            event.preventDefault();
        }
    }
};
HoSoNhanVienUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ho_so_nhan_vien_share_ho_so_nhan_vien_share_component__WEBPACK_IMPORTED_MODULE_5__["HoSoNhanVienShareComponent"], { static: true })
], HoSoNhanVienUpdateComponent.prototype, "shared", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("updateNhanVien", { static: false })
], HoSoNhanVienUpdateComponent.prototype, "updateNhanVien", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
], HoSoNhanVienUpdateComponent.prototype, "keyEvent", null);
HoSoNhanVienUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ho-so-nhan-vien-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ho-so-nhan-vien-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-update/ho-so-nhan-vien-update.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ho-so-nhan-vien-update.component.scss */ "./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-update/ho-so-nhan-vien-update.component.scss")).default]
    })
], HoSoNhanVienUpdateComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien.model.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien.model.ts ***!
  \***********************************************************************************************/
/*! exports provided: KhoaPhongNhanViens, KhoNhanVienQuanLys, KhoaPhongIdViewModel, SreachKhoaPhong, ThongTinKhoaPhong, ThongTinKho, GridThongTinKhoaPhongModel, GridThongTinKhoModel, NhomKhoaPhongModel, FileDinhKemModel, LoaiTapTin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhoaPhongNhanViens", function() { return KhoaPhongNhanViens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhoNhanVienQuanLys", function() { return KhoNhanVienQuanLys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhoaPhongIdViewModel", function() { return KhoaPhongIdViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SreachKhoaPhong", function() { return SreachKhoaPhong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinKhoaPhong", function() { return ThongTinKhoaPhong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinKho", function() { return ThongTinKho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridThongTinKhoaPhongModel", function() { return GridThongTinKhoaPhongModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridThongTinKhoModel", function() { return GridThongTinKhoModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhomKhoaPhongModel", function() { return NhomKhoaPhongModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDinhKemModel", function() { return FileDinhKemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiTapTin", function() { return LoaiTapTin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class KhoaPhongNhanViens {
    constructor(KhoaPhongId, NhanVienId) {
        this.KhoaPhongId = KhoaPhongId;
        this.NhanVienId = NhanVienId;
    }
}
class KhoNhanVienQuanLys {
    constructor(KhoId, NhanVienId) {
        this.KhoId = KhoId;
        this.NhanVienId = NhanVienId;
    }
}
class KhoaPhongIdViewModel {
    constructor(NhanVienId, KhoaPhongIds) {
        this.NhanVienId = NhanVienId;
        this.KhoaPhongIds = KhoaPhongIds;
    }
}
class SreachKhoaPhong {
    constructor(NhanVienId, KhoaPhongIds, PhongBenhVienIds) {
        this.NhanVienId = NhanVienId;
        this.KhoaPhongIds = KhoaPhongIds;
        this.PhongBenhVienIds = PhongBenhVienIds;
    }
}
class ThongTinKhoaPhong {
    constructor(NhomKhoa = null, NhomKhoaId = null, MaPhong = null, TenPhong = null, PhongChinh = null, IsChecked = null, IsCheckedParent = null, Id = null) {
        this.NhomKhoa = NhomKhoa;
        this.NhomKhoaId = NhomKhoaId;
        this.MaPhong = MaPhong;
        this.TenPhong = TenPhong;
        this.PhongChinh = PhongChinh;
        this.IsChecked = IsChecked;
        this.IsCheckedParent = IsCheckedParent;
        this.Id = Id;
    }
}
class ThongTinKho {
    constructor(TenKhoa = null, TenKho = null, TenPhong = null) {
        this.TenKhoa = TenKhoa;
        this.TenKho = TenKho;
        this.TenPhong = TenPhong;
    }
}
class GridThongTinKhoaPhongModel {
    constructor(data = [], total = 0) {
        this.data = data;
        this.total = total;
    }
}
class GridThongTinKhoModel {
    constructor(data = [], total = 0) {
        this.data = data;
        this.total = total;
    }
}
class NhomKhoaPhongModel {
    constructor(Id = null, Visit = false) {
        this.Id = Id;
        this.Visit = Visit;
    }
}
class FileDinhKemModel {
    constructor(Id = 1, Ma = null, Ten = null, TenGuid = null, KichVatTu = null, DuongDan = null, MoTa = null, LoaiTapTin = null, DuongDanTmp = null) {
        this.Id = Id;
        this.Ma = Ma;
        this.Ten = Ten;
        this.TenGuid = TenGuid;
        this.KichVatTu = KichVatTu;
        this.DuongDan = DuongDan;
        this.MoTa = MoTa;
        this.LoaiTapTin = LoaiTapTin;
        this.DuongDanTmp = DuongDanTmp;
    }
}
var LoaiTapTin;
(function (LoaiTapTin) {
    LoaiTapTin[LoaiTapTin["Image"] = 1] = "Image";
    LoaiTapTin[LoaiTapTin["Pdf"] = 2] = "Pdf";
    LoaiTapTin[LoaiTapTin["Khac"] = 10] = "Khac";
})(LoaiTapTin || (LoaiTapTin = {}));


/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien.module.ts ***!
  \************************************************************************************************/
/*! exports provided: HoSoNhanVienModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoNhanVienModule", function() { return HoSoNhanVienModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _ho_so_nhan_vien_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ho-so-nhan-vien-routing.module */ "./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-routing.module.ts");
/* harmony import */ var _ho_so_nhan_vien_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ho-so-nhan-vien.service */ "./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien.service.ts");
/* harmony import */ var _ho_so_nhan_vien_list_ho_so_nhan_vien_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ho-so-nhan-vien-list/ho-so-nhan-vien-list.component */ "./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-list/ho-so-nhan-vien-list.component.ts");
/* harmony import */ var _ho_so_nhan_vien_share_ho_so_nhan_vien_share_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ho-so-nhan-vien-share/ho-so-nhan-vien-share.component */ "./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-share/ho-so-nhan-vien-share.component.ts");
/* harmony import */ var _ho_so_nhan_vien_create_ho_so_nhan_vien_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ho-so-nhan-vien-create/ho-so-nhan-vien-create.component */ "./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-create/ho-so-nhan-vien-create.component.ts");
/* harmony import */ var _ho_so_nhan_vien_update_ho_so_nhan_vien_update_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ho-so-nhan-vien-update/ho-so-nhan-vien-update.component */ "./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien-update/ho-so-nhan-vien-update.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/dist/fesm2015/index.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");


























let HoSoNhanVienModule = class HoSoNhanVienModule {
};
HoSoNhanVienModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ho_so_nhan_vien_list_ho_so_nhan_vien_list_component__WEBPACK_IMPORTED_MODULE_12__["HoSoNhanVienListComponent"],
            _ho_so_nhan_vien_share_ho_so_nhan_vien_share_component__WEBPACK_IMPORTED_MODULE_13__["HoSoNhanVienShareComponent"],
            _ho_so_nhan_vien_create_ho_so_nhan_vien_create_component__WEBPACK_IMPORTED_MODULE_14__["HoSoNhanVienCreateComponent"],
            _ho_so_nhan_vien_update_ho_so_nhan_vien_update_component__WEBPACK_IMPORTED_MODULE_15__["HoSoNhanVienUpdateComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_9__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_9__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__["IconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
            _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_24__["InputsModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
            _ho_so_nhan_vien_routing_module__WEBPACK_IMPORTED_MODULE_10__["HoSoNhanVienRoutingModule"]
        ],
        providers: [
            _ho_so_nhan_vien_service__WEBPACK_IMPORTED_MODULE_11__["HoSoNhanVienService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"], useClass: _ho_so_nhan_vien_service__WEBPACK_IMPORTED_MODULE_11__["HoSoNhanVienService"] },
        ]
    })
], HoSoNhanVienModule);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien.service.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien.service.ts ***!
  \*************************************************************************************************/
/*! exports provided: HoSoNhanVienService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoNhanVienService", function() { return HoSoNhanVienService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");




let HoSoNhanVienService = class HoSoNhanVienService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'NhanVien';
    }
};
HoSoNhanVienService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
HoSoNhanVienService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HoSoNhanVienService);



/***/ })

}]);
//# sourceMappingURL=danh-muc-nhom-nhan-vien-ho-so-nhan-vien-ho-so-nhan-vien-module-es2015.js.map