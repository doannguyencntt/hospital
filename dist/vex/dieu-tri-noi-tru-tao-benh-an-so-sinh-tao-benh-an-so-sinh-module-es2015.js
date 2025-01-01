(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dieu-tri-noi-tru-tao-benh-an-so-sinh-tao-benh-an-so-sinh-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tao-benh-an-so-sinh/tao-benh-an-so-sinh.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tao-benh-an-so-sinh/tao-benh-an-so-sinh.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n{Title:'Nội Trú',Path:''}\n,{Title:'Tạo Bệnh Án Sơ Sinh',Path:'',Active:true}\n]\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n\t<div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n\t\t<div class=\"card\" fxFlex=\"100%\">\n\t\t\t<div class=\"px-6 py-4\" fxLayout=\"column\" style=\"position: relative\">\n\t\t\t\t<div class=\"mt-1\" fxFlex=\"100%\" fxFlex.sm=\"100%\">\n\t\t\t\t\t<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n\t\t\t\t\t\tfxFlex=\"100%\">\n\t\t\t\t\t\t<app-combobox id=\"chon-benh-an-me\" fxFlex=\"40%\" fxFlex.sm=\"100%\" label=\"Chọn Bệnh Án Mẹ\"\n\t\t\t\t\t\t\turl=\"DieuTriNoiTru/ChonBenhAnMe\" [(model)]=\"thongTinBenhAnMe.KeyId\"\n\t\t\t\t\t\t\t[modelText]=\"thongTinBenhAnMe.DisplayName\" #comboboxChonBA\n\t\t\t\t\t\t\t(selectionChange)=\"selectionChangeBenhAnMe($event)\" [template]=\"benhAnMeTemplate\"\n\t\t\t\t\t\t\t[templateHeader]=\"benhAnMeTemplateHeader\"\n\t\t\t\t\t\t\t[popupSettings]=\"{width: 600,popupClass:'item-no-padding'}\" \n\t\t\t\t\t\t\t[validationerror]=\"'YeuCauTiepNhanMeId' | validationerror:validationErrors\">\n\t\t\t\t\t\t\t<ng-template #benhAnMeTemplateHeader let-dataItem>\n\t\t\t\t\t\t\t\t<table width=\"100%\" class=\"table-combobox\">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th width=\"25%\">Mã BA</th>\n\t\t\t\t\t\t\t\t\t\t<th width=\"25%\">Mã TN</th>\n\t\t\t\t\t\t\t\t\t\t<th width=\"25%\">Mã BN</th>\n\t\t\t\t\t\t\t\t\t\t<th width=\"25%\">Họ Tên</th>\n\t\t\t\t\t\t\t\t\t\t<th width=\"25%\">Năm Sinh</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t<ng-template #benhAnMeTemplate let-dataItem>\n\t\t\t\t\t\t\t\t<table width=\"100%\" class=\"table-combobox\">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td width=\"25%\">{{dataItem.MaBA}}</td>\n\t\t\t\t\t\t\t\t\t\t<td width=\"25%\">{{dataItem.MaTN}}</td>\n\t\t\t\t\t\t\t\t\t\t<td width=\"25%\">{{dataItem.MaBN}}</td>\n\t\t\t\t\t\t\t\t\t\t<td width=\"25%\">{{dataItem.HoTen}}</td>\n\t\t\t\t\t\t\t\t\t\t<td width=\"25%\">{{dataItem.NamSinh}}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</app-combobox>\n\t\t\t\t\t\t<app-combobox id=\"KhoaChuyenVe\" fxFlex=\"20%\" fxFlex.sm=\"100%\"\n\t\t\t\t\t\t\t[(model)]=\"tiepNhanBenhNhan.KhoaChuyenBenhAnSoSinhVeId\" [autoSelectFirstItem]=\"true\"\n\t\t\t\t\t\t\t[bind]=\"true\" [modelText]=\"currentKhoaPhongChuyenVe.DisplayName\"\n\t\t\t\t\t\t\t[data]=\"dataKhoaPhongChuyenVe\" required=\"true\" label=\"Khoa Chuyển bệnh án sơ sinh về\"\n\t\t\t\t\t\t\t(selectionChange)=\"selectionChangeKhoaPhongChuyenVe($event)\"\n\t\t\t\t\t\t\t[validationerror]=\"'BenhAnSoSinhChiTietViewModel.KhoaChuyenBenhAnSoSinhVeId' | validationerror:validationErrors\">\n\t\t\t\t\t\t</app-combobox>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\t\t\t\t\t<div fxFlex=\"100%\" class=\"mt-4\">\n\t\t\t\t\t\t<!-- style=\"background: #e1f5fe;\"  -->\n\t\t\t\t\t\t<fieldset fxFlex=\"auto\" class=\"{{(dieuTriNoiTru != null && dieuTriNoiTru.LaCapCuu == true) ? 'bg-tthc-lightpink' : 'bg-tthc-lightblue'}}\">\n\t\t\t\t\t\t\t<legend>Thông tin bệnh án mẹ</legend>\n\t\t\t\t\t\t\t<div fxFlex=\"100%\">\n\t\t\t\t\t\t\t\t<ul class=\"inline\">\n\t\t\t\t\t\t\t\t\t<li>Mã TN:\n\t\t\t\t\t\t\t\t\t\t<strong>{{dieuTriNoiTru.MaYeuCauTiepNhan}}</strong>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>Mã BN:\n\t\t\t\t\t\t\t\t\t\t<strong>{{dieuTriNoiTru.MaBenhNhan}}</strong>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>Họ tên:\n\t\t\t\t\t\t\t\t\t\t<strong>{{dieuTriNoiTru.HoTen}}\n\t\t\t\t\t\t\t\t\t\t\t<ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"dieuTriNoiTru.BenhAnCons!=null &&dieuTriNoiTru.BenhAnCons.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a *ngFor=\"let benhAnCon of dieuTriNoiTru.BenhAnCons\" kendoTooltip\n\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Xem BA Con: {{benhAnCon.SoBenhAn}}\"><img\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"assets/img/baby.png\" alt=\"Con\" width=\"21\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"display:inline;margin-right:5px;\" /></a>\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t<a *ngIf=\"dieuTriNoiTru.BenhAnMe!=null\" kendoTooltip\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Xem BA Mẹ: {{dieuTriNoiTru.BenhAnMe.SoBenhAn}}\"><img\n\t\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"assets/img/mom.png\" alt=\"Mẹ\" width=\"20\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"display:inline;margin-right:5px;\" /></a>\n\t\t\t\t\t\t\t\t\t\t\t<a *ngIf=\"dieuTriNoiTru.CoBHYT==true\" kendoTooltip title=\"Có BHYT\"><img\n\t\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"assets/img/logoBHXH.png\" alt=\"BHYT\" width=\"20\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"display:inline;\" /></a>\n\t\t\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>Tuổi:\n\t\t\t\t\t\t\t\t\t\t<strong>{{dieuTriNoiTru.Tuoi}}</strong>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\tGiới tính:\n\t\t\t\t\t\t\t\t\t\t<strong>{{dieuTriNoiTru.GioiTinh}}</strong>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\tĐịa chỉ: <strong>{{dieuTriNoiTru.DiaChi}}</strong>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\tNghề nghiệp: <strong>{{dieuTriNoiTru.NgheNghiep}}</strong>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>Số BA:\n\t\t\t\t\t\t\t\t\t\t<strong class=\"color-blue\">{{dieuTriNoiTru.SoBenhAn}}</strong>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\tLoại BA:\n\t\t\t\t\t\t\t\t\t\t<strong>{{dieuTriNoiTru.LoaiBenhAn}}</strong>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\tKhoa: <strong>{{dieuTriNoiTru.Khoa}}</strong>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\tBS điều trị: <strong>{{dieuTriNoiTru.BacSiDieuTri}}</strong>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\tPhòng: <strong>{{dieuTriNoiTru.Phong}}</strong>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\tGiường: <strong>{{dieuTriNoiTru.Giuong}}</strong>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\tĐối tượng: <strong class=\"color-blue\">{{dieuTriNoiTru.DoiTuong}}</strong>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\t\t\t\t\t<div fxFlex=\"100%\" class=\"mt-4\">\n\t\t\t\t\t\t<fieldset fxFlex=\"auto\">\n\t\t\t\t\t\t\t<legend>Đặc điểm sơ sinh </legend>\n\t\t\t\t\t\t\t<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n\t\t\t\t\t\t\t\tfxLayoutGap.lt-sm=\"0\" fxFlex=\"100%\">\n\t\t\t\t\t\t\t\t<app-datetimepicker id=\"ngay\" [(model)]=\"dacDiemTreSoSinh.DeLuc\" fxFlex=\"15%\"\n\t\t\t\t\t\t\t\t\tfxFlex.sm=\"100%\" label=\"Đẻ lúc\" (modelChange)=\"modelChangeDeLuc($event)\">\n\t\t\t\t\t\t\t\t</app-datetimepicker>\n\t\t\t\t\t\t\t\t<app-combobox id=\"gioi-tinh\" [(model)]=\"dacDiemTreSoSinh.GioiTinhId\"\n\t\t\t\t\t\t\t\t\t[popupSettings]=\"null\" url=\"DieuTriNoiTru/GetGioiTinh\" fxFlex=\"10%\" fxFlex.sm=\"100%\"\n\t\t\t\t\t\t\t\t\t[modelText]=\"dacDiemTreSoSinh.GioiTinh\" label=\"Giới tính\"\n\t\t\t\t\t\t\t\t\t(modelChange)=\"modelChangeGioiTinh($event)\">\n\t\t\t\t\t\t\t\t</app-combobox>\n\t\t\t\t\t\t\t\t<app-combobox id=\"trang-thai\" [(model)]=\"dacDiemTreSoSinh.TinhTrangId\"\n\t\t\t\t\t\t\t\t\t[popupSettings]=\"null\" url=\"DieuTriNoiTru/GetTrangThai\" fxFlex=\"10%\"\n\t\t\t\t\t\t\t\t\tfxFlex.sm=\"100%\" [modelText]=\"dacDiemTreSoSinh.TenTinhTrang\" label=\"Tình trạng\">\n\t\t\t\t\t\t\t\t</app-combobox>\n\t\t\t\t\t\t\t\t<app-textbox [(model)]=\"dacDiemTreSoSinh.DiTat\" label=\"Dị tật\" maxlength=\"500\"\n\t\t\t\t\t\t\t\t\tfxFlex=\"20%\" fxFlex.sm=\"100%\">\n\t\t\t\t\t\t\t\t</app-textbox>\n\t\t\t\t\t\t\t\t<app-textboxnumeric [(model)]=\"dacDiemTreSoSinh.CanNang\" label=\"Cân nặng\" min=\"1\"\n\t\t\t\t\t\t\t\t\tfxFlex=\"10%\" fxFlex.sm=\"100%\" max=\"999999\" format=\"n2\" decimals=\"2\">\n\t\t\t\t\t\t\t\t</app-textboxnumeric>\n\n\t\t\t\t\t\t\t\t<app-textboxnumeric [(model)]=\"dacDiemTreSoSinh.Cao\" label=\"Chiều Cao\" fxFlex=\"10%\"\n\t\t\t\t\t\t\t\t\tfxFlex.sm=\"100%\" max=\"999999\" format=\"n2\" decimals=\"2\">\n\t\t\t\t\t\t\t\t</app-textboxnumeric>\n\t\t\t\t\t\t\t\t<app-textboxnumeric [(model)]=\"dacDiemTreSoSinh.VongDau\" label=\"Vòng đầu\" fxFlex=\"10%\"\n\t\t\t\t\t\t\t\t\tfxFlex.sm=\"100%\" max=\"999\">\n\t\t\t\t\t\t\t\t</app-textboxnumeric>\n\n\t\t\t\t\t\t\t\t<app-checkbox [(model)]=\"dacDiemTreSoSinh.CoHauMon\" class=\"mt-4\" label=\"Có hậu môn\"\n\t\t\t\t\t\t\t\t\tfxFlex=\"15%\" fxFlex.sm=\"100%\">\n\t\t\t\t\t\t\t\t</app-checkbox>\n\n\n\t\t\t\t\t\t\t\t<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxFlex=\"100%\"\n\t\t\t\t\t\t\t\t\tfxLayoutGap.lt-sm=\"0\">\n\t\t\t\t\t\t\t\t\t<div fxFlex=\"55%\">\n\t\t\t\t\t\t\t\t\t\t<fieldset fxFlex=\"auto\">\n\t\t\t\t\t\t\t\t\t\t\t<legend>ApGar</legend>\n\t\t\t\t\t\t\t\t\t\t\t<app-dropdownlist fxFlex=\"25%\" fxFlex.sm=\"100%\" class=\"mr-2\"\n\t\t\t\t\t\t\t\t\t\t\t\t[(model)]=\"dacDiemTreSoSinh.ApGar\" [data]=\"apGarSelectItems\"\n\t\t\t\t\t\t\t\t\t\t\t\t[popupSettings]=\"null\">\n\t\t\t\t\t\t\t\t\t\t\t</app-dropdownlist>\n\t\t\t\t\t\t\t\t\t\t\t<app-textboxnumeric min=\"1\" max=\"999999\" class=\"mr-2\"\n\t\t\t\t\t\t\t\t\t\t\t\t[(model)]=\"dacDiemTreSoSinh.ChiSoApGar\" label=\"\" fxFlex=\"25%\"\n\t\t\t\t\t\t\t\t\t\t\t\tfxFlex.sm=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t</app-textboxnumeric>\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- 5 phút -->\n\t\t\t\t\t\t\t\t\t\t\t<app-dropdownlist fxFlex=\"25%\" fxFlex.sm=\"100%\" class=\"mr-2\"\n\t\t\t\t\t\t\t\t\t\t\t\t[(model)]=\"dacDiemTreSoSinh.ApGar5\" [data]=\"apGarSelectItems\"\n\t\t\t\t\t\t\t\t\t\t\t\t[popupSettings]=\"null\">\n\t\t\t\t\t\t\t\t\t\t\t</app-dropdownlist>\n\t\t\t\t\t\t\t\t\t\t\t<app-textboxnumeric min=\"1\" max=\"999999\" class=\"mr-2\"\n\t\t\t\t\t\t\t\t\t\t\t\t[(model)]=\"dacDiemTreSoSinh.ChiSoApGar5\" label=\"\" fxFlex=\"25%\"\n\t\t\t\t\t\t\t\t\t\t\t\tfxFlex.sm=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t</app-textboxnumeric>\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- 10 phút -->\n\t\t\t\t\t\t\t\t\t\t\t<app-dropdownlist fxFlex=\"25%\" fxFlex.sm=\"100%\" class=\"mr-2\"\n\t\t\t\t\t\t\t\t\t\t\t\t[(model)]=\"dacDiemTreSoSinh.ApGar10\" [data]=\"apGarSelectItems\"\n\t\t\t\t\t\t\t\t\t\t\t\t[popupSettings]=\"null\">\n\t\t\t\t\t\t\t\t\t\t\t</app-dropdownlist>\n\t\t\t\t\t\t\t\t\t\t\t<app-textboxnumeric min=\"1\" max=\"999999\" class=\"mr-2\"\n\t\t\t\t\t\t\t\t\t\t\t\t[(model)]=\"dacDiemTreSoSinh.ChiSoApGar10\" label=\"\" fxFlex=\"25%\"\n\t\t\t\t\t\t\t\t\t\t\t\tfxFlex.sm=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t</app-textboxnumeric>\n\t\t\t\t\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<app-textarea [(model)]=\"dacDiemTreSoSinh.TinhTrang\" fxFlex=\"20%\" fxFlex.sm=\"100%\"\n\t\t\t\t\t\t\t\t\t\tlabel=\"Tình trạng\" maxlength=\"1000\">\n\t\t\t\t\t\t\t\t\t</app-textarea>\n\t\t\t\t\t\t\t\t\t<app-textarea [(model)]=\"dacDiemTreSoSinh.KetQuaXuLy\" fxFlex=\"25%\" fxFlex.sm=\"100%\"\n\t\t\t\t\t\t\t\t\t\tlabel=\"Kết quả xử lý\" maxlength=\"1000\">\n\t\t\t\t\t\t\t\t\t</app-textarea>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\t\t\t\t\t<h3 fxFlex=\"100%\" class=\"mt-3 text-transform-uppercase\">Thông tin hành chính</h3>\n\t\t\t\t\t<app-textbox class=\"text-transform\" #HoVaTenTextbox id=\"HoTen\" fxFlex=\"20%\"\n\t\t\t\t\t\tfxFlex.sm=\"20%\" label=\"Tên ban đầu\" maxlength=\"100\" [required]=\"true\" [isAutoFocus]=\"true\"\n\t\t\t\t\t\t[(model)]=\"tiepNhanBenhNhan.TenBanDau\" [upperCase]=\"true\"\n\t\t\t\t\t\t[validationerror]=\"'BenhAnSoSinhChiTietViewModel.TenBanDau' | validationerror:validationErrors\">\n\t\t\t\t\t</app-textbox>\n\t\t\t\t\t<app-datetimepicker id=\"NgaySinh\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày giờ sinh\"\n\t\t\t\t\t\t[required]=\"true\" [(model)]=\"tiepNhanBenhNhan.NgayThangNamSinh\"\n\t\t\t\t\t\t(modelChange)=\"modelChangeNgaySinh($event)\"\n\t\t\t\t\t\t[validationerror]=\"'BenhAnSoSinhChiTietViewModel.NgayThangNamSinh' | validationerror:validationErrors\">\n\t\t\t\t\t</app-datetimepicker>\n\t\t\t\t\t<app-textboxmask id=\"SoDienThoai\" onlynumber=\"true\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n\t\t\t\t\t\tlabel=\"Số điện thoại\" maxlength=\"10\" [(model)]=\"tiepNhanBenhNhan.SoDienThoai\"\n\t\t\t\t\t\tmask=\"000 000 0000\" [required]=\"true\"\n\t\t\t\t\t\t[validationerror]=\"'BenhAnSoSinhChiTietViewModel.SoDienThoai' | validationerror:validationErrors\">\n\t\t\t\t\t</app-textboxmask>\n\t\t\t\t\t<app-dropdownlist id=\"gioiTinh\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Giới tính\" [required]=\"true\"\n\t\t\t\t\t\turl=\"TiepNhanBenhNhan/GetGioiTinh\" [(model)]=\"tiepNhanBenhNhan.GioiTinh\" [bind]=\"true\"\n\t\t\t\t\t\t(modelChange)=\"modelChangeGioiTinhTiepNhan($event)\"\n\t\t\t\t\t\t[validationerror]=\"'BenhAnSoSinhChiTietViewModel.GioiTinh' | validationerror:validationErrors\">\n\t\t\t\t\t</app-dropdownlist>\n\t\t\t\t\t<app-combobox id=\"NgheNghiep\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Nghề Nghiệp\" [bind]=\"true\"\n\t\t\t\t\t\turl=\"TiepNhanBenhNhan/GetNgheNghiep\" popupSettings=\"null\"\n\t\t\t\t\t\t[(model)]=\"tiepNhanBenhNhan.NgheNghiepId\">\n\t\t\t\t\t</app-combobox>\n\n\t\t\t\t\t<app-combobox id=\"GetQuocTich\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Quốc tịch\" bind=\"true\"\n\t\t\t\t\t\tpopupSettings=\"null\" url=\"TiepNhanBenhNhan/GetQuocTich\" [(model)]=\"tiepNhanBenhNhan.QuocTichId\">\n\t\t\t\t\t</app-combobox>\n\t\t\t\t\t<app-combobox id=\"TinhThanhPho\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [bind]=\"true\" popupSettings=\"null\"\n\t\t\t\t\t\tlabel=\"Tỉnh/Thành Phố\" class=\"item-no-padding\" [template]=\"tinhThanhTemplate\"\n\t\t\t\t\t\t[templateHeader]=\"tinhThanhTemplateHeader\" [(model)]=\"tiepNhanBenhNhan.TinhThanhId\"\n\t\t\t\t\t\turl=\"TiepNhanBenhNhan/GetTinhThanh/?quanHuyenId={{tiepNhanBenhNhan.QuanHuyenId}}\"\n\t\t\t\t\t\thierarchyKeyToSend=\"tinhThanh\" (modelChange)=\"TinhThanhPhoChange($event)\">\n\t\t\t\t\t\t<ng-template #tinhThanhTemplateHeader let-dataItem>\n\t\t\t\t\t\t\t<table width=\"100%\" class=\"table-combobox\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th width=\"20%\">Mã</th>\n\t\t\t\t\t\t\t\t\t<th>Tên</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t<ng-template #tinhThanhTemplate let-dataItem>\n\t\t\t\t\t\t\t<table width=\"100%\" class=\"table-combobox\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width=\"20%\">{{dataItem.Ma}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{dataItem.Ten}}</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</app-combobox>\n\t\t\t\t\t<app-combobox #comboboxQuanHuyen id=\"QuanHuyen\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Quận/Huyện\"\n\t\t\t\t\t\t[bind]=\"true\" popupSettings=\"null\" class=\"item-no-padding\" [template]=\"quanHuyenTemplate\"\n\t\t\t\t\t\t[templateHeader]=\"quanHuyenTemplateHeader\" [(model)]=\"tiepNhanBenhNhan.QuanHuyenId\"\n\t\t\t\t\t\t(modelChange)=\"QuanHuyenChange($event)\"\n\t\t\t\t\t\turl=\"TiepNhanBenhNhan/GetQuanHuyen/?phuongXaId={{tiepNhanBenhNhan.PhuongXaId}}\"\n\t\t\t\t\t\thierarchyKeyToListen=\"tinhThanh\" hierarchyKeyToSend=\"quanHuyen\">\n\t\t\t\t\t\t<ng-template #quanHuyenTemplateHeader let-dataItem>\n\t\t\t\t\t\t\t<table width=\"100%\" class=\"table-combobox\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th width=\"20%\">Mã</th>\n\t\t\t\t\t\t\t\t\t<th>Tên</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t<ng-template #quanHuyenTemplate let-dataItem>\n\t\t\t\t\t\t\t<table width=\"100%\" class=\"table-combobox\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width=\"20%\">{{dataItem.Ma}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{dataItem.Ten}}</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</app-combobox>\n\t\t\t\t\t<app-combobox id=\"PhuongXa\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Phường/Xã\" class=\"item-no-padding\"\n\t\t\t\t\t\tpopupSettings=\"null\" #comboboxPhuongXa url=\"TiepNhanBenhNhan/GetPhuongXa\"\n\t\t\t\t\t\thierarchyKeyToListen=\"quanHuyen\" [bind]=\"true\" [template]=\"phuongXaTemplate\"\n\t\t\t\t\t\t[templateHeader]=\"phuongXaTemplateHeader\" [(model)]=\"tiepNhanBenhNhan.PhuongXaId\"\n\t\t\t\t\t\t(modelChange)=\"PhuongXaChange($event)\">\n\t\t\t\t\t\t<ng-template #phuongXaTemplateHeader let-dataItem>\n\t\t\t\t\t\t\t<table width=\"100%\" class=\"table-combobox\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th width=\"20%\">Mã</th>\n\t\t\t\t\t\t\t\t\t<th>Tên</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t<ng-template #phuongXaTemplate let-dataItem>\n\t\t\t\t\t\t\t<table width=\"100%\" class=\"table-combobox\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width=\"20%\">{{dataItem.Ma}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{dataItem.Ten}}</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</app-combobox>\n\t\t\t\t\t<app-textbox class=\"text-transform-capitalize\" id=\"SoNhaDuongPho\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n\t\t\t\t\t\tmaxlength=\"200\" label=\"Số nhà/Đường phố\" [(model)]=\"tiepNhanBenhNhan.DiaChi\">\n\t\t\t\t\t</app-textbox>\n\n\t\t\t\t\t<app-textbox id=\"tenKhaiSinh\" fxFlex=\"20%\" fxFlex.sm=\"20%\" maxlength=\"300\" label=\"Tên khai sinh\"\n\t\t\t\t\t\t[upperCase]=\"true\" [(model)]=\"tiepNhanBenhNhan.TenKhaiSinh\">\n\t\t\t\t\t</app-textbox>\n\t\t\t\t\t<app-combobox fxFlex=\"20%\" label=\"Dân tộc\" id=\"danToc\" url=\"TiepNhanBenhNhan/GetDanToc\"\n\t\t\t\t\t\tpopupSettings=\"null\" [bind]=\"true\" [(model)]=\"tiepNhanBenhNhan.DanTocId\">\n\t\t\t\t\t</app-combobox>\n\t\t\t\t\t<app-textbox id=\"maBenhAnMe\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Mã BA mẹ\" [disabled]=\"true\"\n\t\t\t\t\t\t[(model)]=\"tiepNhanBenhNhan.MaBenhAnMe\">\n\t\t\t\t\t</app-textbox>\n\t\t\t\t\t<app-textbox id=\"Email\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Email\" maxlength=\"200\"\n\t\t\t\t\t\t[(model)]=\"tiepNhanBenhNhan.Email\">\n\t\t\t\t\t</app-textbox>\n\t\t\t\t\t<app-textbox id=\"NoiLamViec\" fxFlex=\"20%\" fxFlex.sm=\"20%\" maxlength=\"300\" label=\"Nơi làm việc\"\n\t\t\t\t\t\t[(model)]=\"tiepNhanBenhNhan.NoiLamViec\">\n\t\t\t\t\t</app-textbox>\n\n\t\t\t\t\t<app-combobox fxFlex=\"20%\" label=\"Gói dịch vụ\" id=\"yeuCauGoiDichVuId\"\n\t\t\t\t\t\turl=\"DieuTriNoiTru/GetYeuCauGoiDichVuSoSinhCuaMe\" popupSettings=\"null\" [bind]=\"true\"\n\t\t\t\t\t\t[(model)]=\"tiepNhanBenhNhan.YeuCauGoiDichVuId\"\n\t\t\t\t\t\t[queryInfo]=\"{ParameterDependencies:'{YeuCauTiepNhanMeId:' + thongTinBenhAnMe.KeyId +'}', Take: 50}\"\n\t\t\t\t\t\t[validationerror]=\"'YeuCauGoiDichVuId' | validationerror:validationErrors\">\n\t\t\t\t\t</app-combobox>\n\n\t\t\t\t\t<!-- thông tin người giám hộ -->\n\t\t\t\t\t<h3 fxFlex=\"100%\" class=\"mt-0 text-transform-uppercase\">Thông tin người giám hộ/đi cùng</h3>\n\t\t\t\t\t<app-textbox id=\"hoTenNguoiGiamHo\" fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"Họ và tên\" maxlength=\"100\"\n\t\t\t\t\t\t[upperCase]=\"true\" [(model)]=\"tiepNhanBenhNhan.NguoiLienHeHoTen\">\n\t\t\t\t\t</app-textbox>\n\t\t\t\t\t<app-combobox fxFlex=\"25%\" label=\"Quan hệ\" id=\"quanHe\" url=\"TiepNhanBenhNhan/GetQuanHe\"\n\t\t\t\t\t\tpopupSettings=\"null\" [bind]=\"true\" [(model)]=\"tiepNhanBenhNhan.NguoiLienHeQuanHeNhanThanId\">\n\t\t\t\t\t</app-combobox>\n\t\t\t\t\t<app-textboxmask id=\"NguoiLienHeSoDienThoai\" fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"Điện thoại\"\n\t\t\t\t\t\tmaxlength=\"10\" [(model)]=\"tiepNhanBenhNhan.NguoiLienHeSoDienThoai\" mask=\"000 000 0000\">\n\t\t\t\t\t</app-textboxmask>\n\t\t\t\t\t<app-textbox id=\"EmailNguoiGiamHo\" fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"Email\" maxlength=\"200\"\n\t\t\t\t\t\t[(model)]=\"tiepNhanBenhNhan.NguoiLienHeEmail\">\n\t\t\t\t\t</app-textbox>\n\n\t\t\t\t\t<app-combobox id=\"TinhThanhPhoNguoiLienHe\" fxFlex=\"25%\" fxFlex.sm=\"25%\" popupSettings=\"null\"\n\t\t\t\t\t\t[bind]=\"true\" label=\"Tỉnh/Thành Phố\" class=\"item-no-padding\" [template]=\"tinhThanhTemplate\"\n\t\t\t\t\t\t[templateHeader]=\"tinhThanhTemplateHeader\" [(model)]=\"tiepNhanBenhNhan.NguoiLienHeTinhThanhId\"\n\t\t\t\t\t\thierarchyKeyToSend=\"tinhThanhLienHe\"\n\t\t\t\t\t\turl=\"TiepNhanBenhNhan/GetTinhThanh?quanHuyenId={{tiepNhanBenhNhan.NguoiLienHeQuanHuyenId}}\"\n\t\t\t\t\t\t(modelChange)=\"TinhThanhPhoNguoiLienHeChange($event)\">\n\t\t\t\t\t\t<ng-template #tinhThanhTemplateHeader let-dataItem>\n\t\t\t\t\t\t\t<table width=\"100%\" class=\"table-combobox\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th width=\"20%\">Mã</th>\n\t\t\t\t\t\t\t\t\t<th>Tên</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t<ng-template #tinhThanhTemplate let-dataItem>\n\t\t\t\t\t\t\t<table width=\"100%\" class=\"table-combobox\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width=\"20%\">{{dataItem.Ma}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{dataItem.Ten}}</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</app-combobox>\n\n\t\t\t\t\t<app-combobox #cboQuanHuyenNguoiLienHe id=\"QuanHuyenNguoiLienHe\" fxFlex=\"25%\" fxFlex.sm=\"25%\"\n\t\t\t\t\t\tlabel=\"Quận/Huyện\" popupSettings=\"null\" class=\"item-no-padding\" [template]=\"quanHuyenTemplate\"\n\t\t\t\t\t\t[templateHeader]=\"quanHuyenTemplateHeader\" [(model)]=\"tiepNhanBenhNhan.NguoiLienHeQuanHuyenId\"\n\t\t\t\t\t\t(modelChange)=\"QuanHuyenNguoiLienHeChange($event)\"\n\t\t\t\t\t\turl=\"TiepNhanBenhNhan/GetQuanHuyen?phuongXaId={{tiepNhanBenhNhan.NguoiLienHePhuongXaId}}\"\n\t\t\t\t\t\thierarchyKeyToListen=\"tinhThanhLienHe\" hierarchyKeyToSend=\"quanHuyenLienHe\">\n\t\t\t\t\t\t<ng-template #quanHuyenTemplateHeader let-dataItem>\n\t\t\t\t\t\t\t<table width=\"100%\" class=\"table-combobox\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th width=\"20%\">Mã</th>\n\t\t\t\t\t\t\t\t\t<th>Tên</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t<ng-template #quanHuyenTemplate let-dataItem>\n\t\t\t\t\t\t\t<table width=\"100%\" class=\"table-combobox\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width=\"20%\">{{dataItem.Ma}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{dataItem.Ten}}</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</app-combobox>\n\n\t\t\t\t\t<app-combobox id=\"PhuongXaNguoiLienHe\" fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"Phường/Xã\"\n\t\t\t\t\t\tclass=\"item-no-padding\" [template]=\"phuongXaTemplate\" [templateHeader]=\"phuongXaTemplateHeader\"\n\t\t\t\t\t\tpopupSettings=\"null\" [(model)]=\"tiepNhanBenhNhan.NguoiLienHePhuongXaId\"\n\t\t\t\t\t\turl=\"TiepNhanBenhNhan/GetPhuongXa\" hierarchyKeyToListen=\"quanHuyenLienHe\"\n\t\t\t\t\t\t(modelChange)=\"PhuongXaNguoiLienHeChange($event)\">\n\t\t\t\t\t\t<ng-template #phuongXaTemplateHeader let-dataItem>\n\t\t\t\t\t\t\t<table width=\"100%\" class=\"table-combobox\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th width=\"20%\">Mã</th>\n\t\t\t\t\t\t\t\t\t<th>Tên</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t<ng-template #phuongXaTemplate let-dataItem>\n\t\t\t\t\t\t\t<table width=\"100%\" class=\"table-combobox\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width=\"20%\">{{dataItem.Ma}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{dataItem.Ten}}</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</app-combobox>\n\t\t\t\t\t<app-textbox class=\"text-transform-capitalize\" id=\"SoNhaDuongPhoNguoiGiamHo\" fxFlex=\"25%\"\n\t\t\t\t\t\tfxFlex.sm=\"25%\" maxlength=\"200\" label=\"Số nhà/Đường phố\"\n\t\t\t\t\t\t[(model)]=\"tiepNhanBenhNhan.NguoiLienHeDiaChi\">\n\t\t\t\t\t</app-textbox>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"sticky-button-action py-3 text-right\" kendoTooltip>\n\t\t<button style=\"margin-left: auto;\" type=\"button\" mat-stroked-button color=\"primary\" (click)=\"huy()\">Hủy</button>\n\t\t<button mat-raised-button mat-button color=\"primary\" (click)=\"xuLyTaoBenhAnSoSinh()\">Lưu và tạo bệnh án sơ\n\t\t\tsinh</button>\n\t</div>\n\n</div>");

/***/ }),

/***/ "./src/app/modules/main/dieu-tri-noi-tru/tao-benh-an-so-sinh/tao-benh-an-so-sinh-routing.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/main/dieu-tri-noi-tru/tao-benh-an-so-sinh/tao-benh-an-so-sinh-routing.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: TaoBenhAnSoSinhRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaoBenhAnSoSinhRoutingModule", function() { return TaoBenhAnSoSinhRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _tao_benh_an_so_sinh_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tao-benh-an-so-sinh.component */ "./src/app/modules/main/dieu-tri-noi-tru/tao-benh-an-so-sinh/tao-benh-an-so-sinh.component.ts");






const routes = [
    {
        path: '',
        component: _tao_benh_an_so_sinh_component__WEBPACK_IMPORTED_MODULE_5__["TaoBenhAnSoSinhComponent"],
        data: {
            title: "Tao bệnh án sơ sinh",
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].TaoBenhAnSoSinh,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
        }
    },
];
let TaoBenhAnSoSinhRoutingModule = class TaoBenhAnSoSinhRoutingModule {
};
TaoBenhAnSoSinhRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TaoBenhAnSoSinhRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/dieu-tri-noi-tru/tao-benh-an-so-sinh/tao-benh-an-so-sinh.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/main/dieu-tri-noi-tru/tao-benh-an-so-sinh/tao-benh-an-so-sinh.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu-form-wrapper .mat-menu-content {\n  padding: 8px;\n}\n\n.color-red {\n  color: red;\n}\n\n.padding-thu-tien {\n  padding: 5px 16px 28px 13px !important;\n}\n\n.red-text {\n  color: red;\n}\n\n.po-right {\n  text-align: right;\n  flex-grow: 1;\n}\n\n.color-green {\n  color: green;\n}\n\n.padding-left80px {\n  padding-left: 80px !important;\n}\n\n.d-unset {\n  display: unset !important;\n}\n\nkendo-splitter {\n  border-width: 0px !important;\n  margin-bottom: 10px;\n}\n\nkendo-splitter ul > li.right-0 {\n  margin-right: 0px;\n  padding-right: 15px;\n}\n\nfieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em !important;\n  padding-bottom: 0.625em !important;\n  padding-left: 0.75em !important;\n  padding-right: 0.75em !important;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset legend {\n  margin-left: 15px;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline-block !important;\n}\n\nkendo-panelbar-item ul.inline > li {\n  padding-right: 10px !important;\n  padding-bottom: 0.625em;\n  display: inline-block !important;\n}\n\nkendo-panelbar-item .inline_b {\n  display: inline-block !important;\n  margin-right: 10px;\n  padding-right: 15px;\n}\n\nkendo-panelbar-item .panelbar-row {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\nkendo-panelbar-item .panelbar-row:hover {\n  background: rgba(227, 242, 253, 0.5);\n}\n\nkendo-panelbar-item .panelbar-group-b {\n  border-top: 1px rgba(0, 0, 0, 0.08) outset;\n}\n\n.sticky-list {\n  top: 64px;\n  position: sticky !important;\n  position: -webkit-sticky !important;\n  z-index: 9999;\n}\n\n.sticky-tab {\n  top: 64px;\n  position: sticky !important;\n  position: -webkit-sticky !important;\n  z-index: 9999;\n  background: #f5f7fa;\n  overflow-x: auto;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.sticky-tab ul {\n  margin: 0;\n  padding-top: 10px;\n  padding-bottom: 0;\n  border-bottom: 1px solid #ccc;\n}\n\n.sticky-tab ul li {\n  display: inline-block;\n  list-style-type: none;\n  margin-right: 25px;\n  font-size: 15px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n  color: #2e384d;\n  cursor: pointer;\n  transition: all 300ms linear;\n  border-bottom: 3px solid #f5f7fa;\n}\n\n.sticky-tab ul li.active {\n  font-size: 15px;\n  font-weight: bold;\n  color: #005dab;\n  border-bottom: 4px solid #005dab;\n}\n\n.sticky-tab ul li:hover {\n  border-bottom: 3px solid #005dab;\n}\n\n.sticky-tab ul li.resolved {\n  color: #005dab;\n}\n\n.sticky-tab ul li.processing {\n  color: #ff9800;\n}\n\n.sticky-tab ul li.unfulfilled {\n  color: #9e9e9e;\n}\n\n.sticky-tab .ps-scrollbar-x-rail {\n  bottom: 0 !important;\n  height: 5px !important;\n}\n\n.sticky-tab .ps-scrollbar-x-rail .ps-scrollbar-x {\n  height: 5px !important;\n}\n\nlegend {\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.sticky-panelbar {\n  position: sticky;\n  position: -webkit-sticky;\n  top: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2RpZXUtdHJpLW5vaS10cnUvdGFvLWJlbmgtYW4tc28tc2luaC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGRpZXUtdHJpLW5vaS10cnVcXHRhby1iZW5oLWFuLXNvLXNpbmhcXHRhby1iZW5oLWFuLXNvLXNpbmguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9kaWV1LXRyaS1ub2ktdHJ1L3Rhby1iZW5oLWFuLXNvLXNpbmgvdGFvLWJlbmgtYW4tc28tc2luaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLHNDQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLDRDQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0UsMENBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBS0EsNEJBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxTQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vZGlldS10cmktbm9pLXRydS90YW8tYmVuaC1hbi1zby1zaW5oL3Rhby1iZW5oLWFuLXNvLXNpbmguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1mb3JtLXdyYXBwZXIgLm1hdC1tZW51LWNvbnRlbnQge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5jb2xvci1yZWQge1xuICBjb2xvcjogcmVkO1xufVxuXG4ucGFkZGluZy10aHUtdGllbiB7XG4gIHBhZGRpbmc6IDVweCAxNnB4IDI4cHggMTNweCAhaW1wb3J0YW50O1xufVxuXG4ucmVkLXRleHQge1xuICBjb2xvcjogcmVkO1xufVxuXG4ucG8tcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uY29sb3ItZ3JlZW4ge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5wYWRkaW5nLWxlZnQ4MHB4IHtcbiAgcGFkZGluZy1sZWZ0OiA4MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kLXVuc2V0IHtcbiAgZGlzcGxheTogdW5zZXQgIWltcG9ydGFudDtcbn1cblxua2VuZG8tc3BsaXR0ZXIge1xuICBib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5rZW5kby1zcGxpdHRlciB1bCA+IGxpLnJpZ2h0LTAge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuZmllbGRzZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAwLjM1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4ICNlMGUwZTA7XG4gIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcbn1cblxuZmllbGRzZXQgbGVnZW5kIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIHVsLmlubGluZSA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLmlubGluZV9iIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLnBhbmVsYmFyLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjI3LCAyNDIsIDI1MywgMC41KTtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItZ3JvdXAtYiB7XG4gIGJvcmRlci10b3A6IDFweCByZ2JhKDAsIDAsIDAsIDAuMDgpIG91dHNldDtcbn1cblxuLnN0aWNreS1saXN0IHtcbiAgdG9wOiA2NHB4O1xuICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4uc3RpY2t5LXRhYiB7XG4gIHRvcDogNjRweDtcbiAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OTtcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zdGlja3ktdGFiIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMmUzODRkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmNWY3ZmE7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLmFjdGl2ZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGk6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkucmVzb2x2ZWQge1xuICBjb2xvcjogIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkucHJvY2Vzc2luZyB7XG4gIGNvbG9yOiAjZmY5ODAwO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS51bmZ1bGZpbGxlZCB7XG4gIGNvbG9yOiAjOWU5ZTllO1xufVxuXG4uc3RpY2t5LXRhYiAucHMtc2Nyb2xsYmFyLXgtcmFpbCB7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uc3RpY2t5LXRhYiAucHMtc2Nyb2xsYmFyLXgtcmFpbCAucHMtc2Nyb2xsYmFyLXgge1xuICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG5sZWdlbmQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnN0aWNreS1wYW5lbGJhciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgdG9wOiA2NHB4O1xufSIsIi5tZW51LWZvcm0td3JhcHBlciAubWF0LW1lbnUtY29udGVudCB7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmNvbG9yLXJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5wYWRkaW5nLXRodS10aWVuIHtcbiAgcGFkZGluZzogNXB4IDE2cHggMjhweCAxM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5yZWQtdGV4dCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5wby1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5jb2xvci1ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnBhZGRpbmctbGVmdDgwcHgge1xuICBwYWRkaW5nLWxlZnQ6IDgwcHggIWltcG9ydGFudDtcbn1cblxuLmQtdW5zZXQge1xuICBkaXNwbGF5OiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG5rZW5kby1zcGxpdHRlciB7XG4gIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmtlbmRvLXNwbGl0dGVyIHVsID4gbGkucmlnaHQtMCB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG5maWVsZHNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgcGFkZGluZy10b3A6IDAuMzVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1ZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xufVxuXG5maWVsZHNldCBsZWdlbmQge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuZmllbGRzZXQgLml0ZW1fcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmZpZWxkc2V0IHVsID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmZpZWxkc2V0IHVsLmlubGluZSA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gdWwuaW5saW5lID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAuaW5saW5lX2Ige1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIC5wYW5lbGJhci1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjcsIDI0MiwgMjUzLCAwLjUpO1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIC5wYW5lbGJhci1ncm91cC1iIHtcbiAgYm9yZGVyLXRvcDogMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCkgb3V0c2V0O1xufVxuXG4uc3RpY2t5LWxpc3Qge1xuICB0b3A6IDY0cHg7XG4gIHBvc2l0aW9uOiBzdGlja3kgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi5zdGlja3ktdGFiIHtcbiAgdG9wOiA2NHB4O1xuICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5O1xuICBiYWNrZ3JvdW5kOiAjZjVmN2ZhO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnN0aWNreS10YWIgdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICMyZTM4NGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2Y1ZjdmYTtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkuYWN0aXZlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDVkYWI7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMDA1ZGFiO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaTpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDA1ZGFiO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS5yZXNvbHZlZCB7XG4gIGNvbG9yOiAjMDA1ZGFiO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS5wcm9jZXNzaW5nIHtcbiAgY29sb3I6ICNmZjk4MDA7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLnVuZnVsZmlsbGVkIHtcbiAgY29sb3I6ICM5ZTllOWU7XG59XG5cbi5zdGlja3ktdGFiIC5wcy1zY3JvbGxiYXIteC1yYWlsIHtcbiAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zdGlja3ktdGFiIC5wcy1zY3JvbGxiYXIteC1yYWlsIC5wcy1zY3JvbGxiYXIteCB7XG4gIGhlaWdodDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmxlZ2VuZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uc3RpY2t5LXBhbmVsYmFyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICB0b3A6IDY0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/dieu-tri-noi-tru/tao-benh-an-so-sinh/tao-benh-an-so-sinh.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/main/dieu-tri-noi-tru/tao-benh-an-so-sinh/tao-benh-an-so-sinh.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: TaoBenhAnSoSinhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaoBenhAnSoSinhComponent", function() { return TaoBenhAnSoSinhComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _tao_benh_an_so_sinh_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tao-benh-an-so-sinh.model */ "./src/app/modules/main/dieu-tri-noi-tru/tao-benh-an-so-sinh/tao-benh-an-so-sinh.model.ts");
/* harmony import */ var _dieu_tri_noi_tru_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dieu-tri-noi-tru.model */ "./src/app/modules/main/dieu-tri-noi-tru/dieu-tri-noi-tru.model.ts");
/* harmony import */ var _tiep_nhan_noi_tru_tiep_nhan_noi_tru_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tiep-nhan-noi-tru/tiep-nhan-noi-tru.model */ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru.model.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _tiep_nhan_noi_tru_tiep_nhan_noi_tru_chi_dinh_popup_tiep_nhan_noi_tru_chi_dinh_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../tiep-nhan-noi-tru/tiep-nhan-noi-tru-chi-dinh-popup/tiep-nhan-noi-tru-chi-dinh-popup.component */ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-chi-dinh-popup/tiep-nhan-noi-tru-chi-dinh-popup.component.ts");


















let TaoBenhAnSoSinhComponent = class TaoBenhAnSoSinhComponent {
    constructor(route, authService, notificationService, baseService, apiService, dialog, cdRef) {
        this.route = route;
        this.authService = authService;
        this.notificationService = notificationService;
        this.baseService = baseService;
        this.apiService = apiService;
        this.dialog = dialog;
        this.cdRef = cdRef;
        this.tiepNhanBenhNhan = new _tiep_nhan_noi_tru_tiep_nhan_noi_tru_model__WEBPACK_IMPORTED_MODULE_8__["ThongTinDoiTuongSoSinhTiepNhan"]();
        this.currentKhoaPhongChuyenVe = new _tao_benh_an_so_sinh_model__WEBPACK_IMPORTED_MODULE_6__["LookupItemChuyenKhoaVo"]();
        this.thongTinBenhAnMe = new _tao_benh_an_so_sinh_model__WEBPACK_IMPORTED_MODULE_6__["ThongTinBenhAnMe"]();
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__["DocumentType"].TaoBenhAnSoSinh;
        this.dieuTriNoiTru = new _dieu_tri_noi_tru_model__WEBPACK_IMPORTED_MODULE_7__["ChiTietDieuTriNoiTruViewModel"]();
        this.dacDiemTreSoSinh = new _dieu_tri_noi_tru_model__WEBPACK_IMPORTED_MODULE_7__["DacDiemTreSoSinh"]();
        this.apGarSelectItems = [
            { KeyId: 1, DisplayName: "1 phút" },
            { KeyId: 2, DisplayName: "5 phút" },
            { KeyId: 3, DisplayName: "10 phút" },
        ];
        this.dataSource = {
            data: [],
            total: 0
        };
        this.thongTinTheoDoiSoSinhDuocChon = new _dieu_tri_noi_tru_model__WEBPACK_IMPORTED_MODULE_7__["ThongTinTheoDoiSoSinhDuocChon"]();
    }
    ngOnInit() {
        this.getKhoaPhongChuyenVe();
        this.tiepNhanBenhNhan.NgayThangNamSinh = this.dacDiemTreSoSinh.DeLuc;
    }
    getThongTinBenhAnMe(yeuCauTiepNhanId) {
        this.showPopupLoadingData();
        this.apiService
            .get("DieuTriNoiTru/GetThongTinTiepNhanBenhAnMe?yeuCauTiepNhanId=" + yeuCauTiepNhanId)
            .subscribe((resultData) => {
            this.tiepNhanBenhNhan = resultData;
            this.tiepNhanBenhNhan.NgayThangNamSinh = this.dacDiemTreSoSinh.DeLuc;
            this.getKhoaPhongChuyenVe();
            this.closePopupLoadingData();
        }, (err) => {
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
        });
    }
    getChonBenhAnMe() {
        this.apiService.post("DieuTriNoiTru/ChonBenhAnMe").subscribe((resultData) => {
            if (resultData !== null && resultData !== undefined) {
                this.dataThongTinBenhAnMe = resultData;
                //this.comboboxChonBA.getDataForLookup();
            }
        });
    }
    getKhoaPhongChuyenVe() {
        this.apiService.post("DieuTriNoiTru/KhoaChuyenBenhAnSoSinhVe").subscribe((resultData) => {
            if (resultData !== null && resultData !== undefined) {
                this.dataKhoaPhongChuyenVe = resultData;
                this.tiepNhanBenhNhan.KhoaChuyenBenhAnSoSinhVeId = resultData[0].KeyId;
                this.currentKhoaPhongChuyenVe.KeyId = resultData[0].KeyId;
                this.currentKhoaPhongChuyenVe.DisplayName = resultData[0].DisplayName;
            }
        });
    }
    getThongTinHanhChinh(id) {
        this.apiService.get("DieuTriNoiTru/" + id).subscribe(resultData => {
            if (resultData !== null && resultData !== undefined) {
                this.dieuTriNoiTru = resultData;
                this.getThongTinBenhAnMe(id);
            }
        });
    }
    selectionChangeBenhAnMe(dateItem) {
        if (dateItem != undefined && dateItem != null) {
            this.thongTinBenhAnMe.KeyId = dateItem.KeyId;
            this.thongTinBenhAnMe.DisplayName = dateItem.DisplayName;
            this.getThongTinHanhChinh(dateItem.Id);
        }
    }
    TinhThanhPhoChange(event) {
        if (event == undefined || event == null) {
            this.tiepNhanBenhNhan.QuanHuyenId = null;
            this.tiepNhanBenhNhan.PhuongXaId = null;
        }
        else {
            this.comboboxQuanHuyen.getDataForLookup();
        }
    }
    QuanHuyenChange(event) {
        if (event == undefined || event == null) {
            // this.tiepNhanBenhNhan.QuanHuyenId = event;
            this.tiepNhanBenhNhan.PhuongXaId = null;
        }
    }
    PhuongXaChange($event) {
        this.tiepNhanBenhNhan.PhuongXaId = $event;
        if ($event != null && $event != undefined) {
            this.apiService.post("TiepNhanBenhNhan/SetTinhThanhQuanHuyen?phuongXaId=" + $event).subscribe(resultData => {
                this.tiepNhanBenhNhan.TinhThanhId = resultData.TinhThanhId;
                this.tiepNhanBenhNhan.QuanHuyenId = resultData.QuanHuyenId;
                this.comboboxQuanHuyen.getDataForLookup();
            }, (err) => {
            });
        }
        else {
            this.tiepNhanBenhNhan.TinhThanhId = null;
            this.tiepNhanBenhNhan.QuanHuyenId = null;
        }
    }
    TinhThanhPhoNguoiLienHeChange(event) {
        if (event == undefined || event == null) {
            this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId = null;
            this.tiepNhanBenhNhan.NguoiLienHePhuongXaId = null;
        }
        else {
            this.cboQuanHuyenNguoiLienHe.getDataForLookup();
        }
    }
    QuanHuyenNguoiLienHeChange(event) {
        if (event == undefined || event == null) {
            this.tiepNhanBenhNhan.NguoiLienHePhuongXaId = null;
        }
    }
    PhuongXaNguoiLienHeChange(event) {
        if (event != null && event != undefined) {
            this.apiService.post("TiepNhanBenhNhan/SetTinhThanhQuanHuyen?phuongXaId=" + event).subscribe(resultData => {
                this.tiepNhanBenhNhan.NguoiLienHeTinhThanhId = resultData.TinhThanhId;
                this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId = resultData.QuanHuyenId;
                this.cboQuanHuyenNguoiLienHe.getDataForLookup();
            }, (err) => {
            });
        }
    }
    showPopupLoadingData() {
        if (this.popupLoadingData == undefined
            || this.popupLoadingData == null
            || this.popupLoadingData.openDialogs == undefined
            || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
            this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"], {
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
    xuLyTaoBenhAnSoSinh() {
        this.validationErrors = [];
        this.cdRef.detectChanges();
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Add)) {
            if (this.thongTinBenhAnMe.KeyId == undefined && this.thongTinBenhAnMe.KeyId == null) {
                this.validationErrors.push({
                    Message: "Vui lòng chọn bệnh án mẹ",
                    Field: "YeuCauTiepNhanMeId",
                });
                return;
            }
            if (this.tiepNhanBenhNhan.TenBanDau == undefined && this.tiepNhanBenhNhan.TenBanDau == null) {
                this.taoBenhAnSoSinh("Bạn có chắc chắn muốn tạo bệnh án sơ sinh không?");
            }
            else {
                if (this.thongTinBenhAnMe.KeyId != undefined && this.thongTinBenhAnMe.KeyId != null) {
                    this.apiService.get("DieuTriNoiTru/BenhAnMeCoConTrungTen?yeuCauTiepNhanBenhAnMeId=" + this.thongTinBenhAnMe.KeyId + "&hoTen=" + this.tiepNhanBenhNhan.TenBanDau).subscribe((resultData) => {
                        if (resultData) {
                            this.taoBenhAnSoSinh(`<span class="red-text">Đã tạo BA con có tên ${this.tiepNhanBenhNhan.TenBanDau.toUpperCase().bold()} .Bạn có chắc muốn tạo tiếp BA này không?</span>`);
                        }
                        else {
                            this.taoBenhAnSoSinh("Bạn có chắc chắn muốn tạo bệnh án sơ sinh không?");
                        }
                    });
                }
            }
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    taoBenhAnSoSinh(message) {
        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmComponent"], {
            disableClose: false,
            width: "400px",
            data: {
                Title: "Xác nhận",
                Message: message
            },
        })
            .afterClosed()
            .subscribe((result) => {
            if (result == "Yes") {
                this.showPopupLoadingData();
                this.validationErrors = [];
                //lưu đăc điểm sơ sinh thành công tạo bệnh án sơ sinh
                if (this.dieuTriNoiTru != undefined && this.dieuTriNoiTru != null) {
                    this.LuuDacDiemSoSinhCuaChoBenhAnMeKhacKhoa(this.thongTinBenhAnMe.KeyId);
                }
            }
        });
    }
    LuuDacDiemSoSinhCuaChoBenhAnMeKhacKhoa(yeuCauTiepNhanMeId) {
        let taoBenhAnSoSinhKhacKhoa = new _dieu_tri_noi_tru_model__WEBPACK_IMPORTED_MODULE_7__["TaoBenhAnSoSinhKhacKhoa"]();
        this.tiepNhanBenhNhan.YeuCauTiepNhanId = this.thongTinBenhAnMe.KeyId;
        taoBenhAnSoSinhKhacKhoa.BenhAnSoSinhChiTietViewModel = this.tiepNhanBenhNhan;
        taoBenhAnSoSinhKhacKhoa.DacDiemTreSoSinh = this.dacDiemTreSoSinh;
        this.apiService.post("DieuTriNoiTru/XuLyTaoBenhAnSoSinhKhacKhoa", taoBenhAnSoSinhKhacKhoa)
            .subscribe((result) => {
            this.closePopupLoadingData();
            this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].ActionSuccessfully, ["Tạo bệnh án"]));
            this.xuLyChiDinhEkipVaDichVuGiuong(result.BenhAnSoSinhChiTietViewModel);
            if (result.ResultYeuCauTiepNhanId != undefined && result.ResultYeuCauTiepNhanId != null) {
                this.luuThongTinSoSinhDuocChon(this.thongTinBenhAnMe.YeuCauTiepNhanMeId, result.ResultYeuCauTiepNhanId);
            }
        }, (err) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
        });
    }
    luuThongTinSoSinhDuocChon(yeuCauTiepNhanMeId, yeuCauTiepNhanConId) {
        this.thongTinTheoDoiSoSinhDuocChon.YeuCauTiepNhanMeId = yeuCauTiepNhanMeId;
        this.thongTinTheoDoiSoSinhDuocChon.YeuCauTiepNhanConId = yeuCauTiepNhanConId;
        this.thongTinTheoDoiSoSinhDuocChon.DacDiemTreSoSinhs.push(this.dacDiemTreSoSinh);
        this.apiService
            .post("DieuTriNoiTru/LuuThongTinSoSinhDuocChon", this.thongTinTheoDoiSoSinhDuocChon)
            .subscribe((resultData) => {
        }, (err) => {
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
        });
    }
    selectionChangeKhoaPhongChuyenVe(dataItem) {
        if (dataItem != undefined && dataItem != null) {
            this.currentKhoaPhongChuyenVe.KeyId = dataItem.KeyId;
            this.tiepNhanBenhNhan.KhoaChuyenBenhAnSoSinhVeId = dataItem.KeyId;
            this.currentKhoaPhongChuyenVe.DisplayName = dataItem.DisplayName;
        }
    }
    xuLyChiDinhEkipVaDichVuGiuong(yeuCauTiepNhan) {
        this.dialog.open(_tiep_nhan_noi_tru_tiep_nhan_noi_tru_chi_dinh_popup_tiep_nhan_noi_tru_chi_dinh_popup_component__WEBPACK_IMPORTED_MODULE_17__["TiepNhanNoiTruChiDinhPopupComponent"], {
            disableClose: false,
            width: '1300px',
            data: {
                KhoaId: this.currentKhoaPhongChuyenVe.KeyId,
                TenKhoa: this.currentKhoaPhongChuyenVe.DisplayName,
                // KhoaId: yeuCauTiepNhan.ResultKhoaNhapVienId,
                // TenKhoa: yeuCauTiepNhan.ResultTenKhoaNhapVien,
                YeuCauTiepNhanId: yeuCauTiepNhan.ResultYeuCauTiepNhanId,
                ThoiDiemNhapVien: yeuCauTiepNhan.NgayThangNamSinh,
                KhongCanChiDinhGiuong: yeuCauTiepNhan.ResultKhongCanChiDinhGiuong,
                BenhNhanId: yeuCauTiepNhan.ResultBenhNhanId
            }
        }).afterClosed().subscribe(result => {
            this.huy();
        });
    }
    modelChangeGioiTinh(event) {
        if (event === 1) {
            this.tiepNhanBenhNhan.GioiTinh = event;
            this.tiepNhanBenhNhan.GioiTinhDisplay = "Nam";
        }
        if (event === 2) {
            this.tiepNhanBenhNhan.GioiTinh = event;
            this.tiepNhanBenhNhan.GioiTinhDisplay = "Nữ";
        }
    }
    modelChangeGioiTinhTiepNhan(event) {
        if (event === 1) {
            this.dacDiemTreSoSinh.GioiTinhId = event;
            this.dacDiemTreSoSinh.GioiTinh = "Trai";
        }
        if (event === 2) {
            this.dacDiemTreSoSinh.GioiTinhId = event;
            this.dacDiemTreSoSinh.GioiTinh = "Gái";
        }
    }
    modelChangeNgaySinh(event) {
        this.dacDiemTreSoSinh.DeLuc = event;
    }
    modelChangeDeLuc(event) {
        this.tiepNhanBenhNhan.NgayThangNamSinh = event;
    }
    huy() {
        this.getKhoaPhongChuyenVe();
        this.tiepNhanBenhNhan = new _tiep_nhan_noi_tru_tiep_nhan_noi_tru_model__WEBPACK_IMPORTED_MODULE_8__["ThongTinDoiTuongSoSinhTiepNhan"]();
        this.dacDiemTreSoSinh = new _dieu_tri_noi_tru_model__WEBPACK_IMPORTED_MODULE_7__["DacDiemTreSoSinh"]();
        this.dieuTriNoiTru = new _dieu_tri_noi_tru_model__WEBPACK_IMPORTED_MODULE_7__["ChiTietDieuTriNoiTruViewModel"]();
        this.thongTinBenhAnMe.KeyId = null;
        this.thongTinBenhAnMe.DisplayName = null;
    }
};
TaoBenhAnSoSinhComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_15__["NotificationService"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('comboboxQuanHuyen', { static: true })
], TaoBenhAnSoSinhComponent.prototype, "comboboxQuanHuyen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('comboboxKhoaChuyenBenhAnSoSinhVe', { static: true })
], TaoBenhAnSoSinhComponent.prototype, "comboboxKhoaChuyenBenhAnSoSinhVe", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('comboboxChonBA', { static: true })
], TaoBenhAnSoSinhComponent.prototype, "comboboxChonBA", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cboQuanHuyenNguoiLienHe', { static: true })
], TaoBenhAnSoSinhComponent.prototype, "cboQuanHuyenNguoiLienHe", void 0);
TaoBenhAnSoSinhComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-tao-benh-an-so-sinh",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tao-benh-an-so-sinh.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tao-benh-an-so-sinh/tao-benh-an-so-sinh.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tao-benh-an-so-sinh.component.scss */ "./src/app/modules/main/dieu-tri-noi-tru/tao-benh-an-so-sinh/tao-benh-an-so-sinh.component.scss")).default]
    })
], TaoBenhAnSoSinhComponent);



/***/ }),

/***/ "./src/app/modules/main/dieu-tri-noi-tru/tao-benh-an-so-sinh/tao-benh-an-so-sinh.model.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/main/dieu-tri-noi-tru/tao-benh-an-so-sinh/tao-benh-an-so-sinh.model.ts ***!
  \************************************************************************************************/
/*! exports provided: ThongTinBenhAnMe, LookupItemChuyenKhoaVo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinBenhAnMe", function() { return ThongTinBenhAnMe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupItemChuyenKhoaVo", function() { return LookupItemChuyenKhoaVo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ThongTinBenhAnMe {
    constructor(KeyId = null, DisplayName = null, YeuCauTiepNhanMeId = null, MaBA = null, MaTN = null, MaBN = null, HoTen = null, NamSinh = null) {
        this.KeyId = KeyId;
        this.DisplayName = DisplayName;
        this.YeuCauTiepNhanMeId = YeuCauTiepNhanMeId;
        this.MaBA = MaBA;
        this.MaTN = MaTN;
        this.MaBN = MaBN;
        this.HoTen = HoTen;
        this.NamSinh = NamSinh;
    }
}
class LookupItemChuyenKhoaVo {
    constructor(KeyId = null, DisplayName = null) {
        this.KeyId = KeyId;
        this.DisplayName = DisplayName;
    }
}


/***/ }),

/***/ "./src/app/modules/main/dieu-tri-noi-tru/tao-benh-an-so-sinh/tao-benh-an-so-sinh.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/main/dieu-tri-noi-tru/tao-benh-an-so-sinh/tao-benh-an-so-sinh.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: TaoBenhAnSoSinhModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaoBenhAnSoSinhModule", function() { return TaoBenhAnSoSinhModule; });
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
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ "./node_modules/@progress/kendo-angular-dateinputs/dist/fesm2015/index.js");
/* harmony import */ var _tao_benh_an_so_sinh_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tao-benh-an-so-sinh-routing.module */ "./src/app/modules/main/dieu-tri-noi-tru/tao-benh-an-so-sinh/tao-benh-an-so-sinh-routing.module.ts");
/* harmony import */ var _tao_benh_an_so_sinh_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tao-benh-an-so-sinh.component */ "./src/app/modules/main/dieu-tri-noi-tru/tao-benh-an-so-sinh/tao-benh-an-so-sinh.component.ts");
/* harmony import */ var _tiep_nhan_noi_tru_tiep_nhan_noi_tru_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../tiep-nhan-noi-tru/tiep-nhan-noi-tru.module */ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru.module.ts");



















let TaoBenhAnSoSinhModule = class TaoBenhAnSoSinhModule {
};
TaoBenhAnSoSinhModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [],
        declarations: [
            _tao_benh_an_so_sinh_component__WEBPACK_IMPORTED_MODULE_17__["TaoBenhAnSoSinhComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _tao_benh_an_so_sinh_routing_module__WEBPACK_IMPORTED_MODULE_16__["TaoBenhAnSoSinhRoutingModule"],
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
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
            _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_15__["DateInputsModule"],
            _tiep_nhan_noi_tru_tiep_nhan_noi_tru_module__WEBPACK_IMPORTED_MODULE_18__["TiepNhanNoiTruModule"]
        ],
        entryComponents: []
    })
], TaoBenhAnSoSinhModule);



/***/ })

}]);
//# sourceMappingURL=dieu-tri-noi-tru-tao-benh-an-so-sinh-tao-benh-an-so-sinh-module-es2015.js.map