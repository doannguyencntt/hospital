(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thu-chi-ds-xn-bhyt-noi-tru-ngoai-tru-ds-xn-bhyt-noi-tru-ngoai-tru-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/ds-xn-bhyt-noi-tru-ngoai-tru/ds-xn-bhyt-noi-tru-ngoai-tru-list/ds-xn-bhyt-noi-tru-ngoai-tru-list.component.html":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/ds-xn-bhyt-noi-tru-ngoai-tru/ds-xn-bhyt-noi-tru-ngoai-tru-list/ds-xn-bhyt-noi-tru-ngoai-tru-list.component.html ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"\n            [             \n                {Title:'Xác Nhận BHYT',Path:''},\n                {Title:'DS Xác Nhận BHYT đã hoàn thành',Path:'', Active:true}\n            ]\">\n            </vex-breadcrumbs>\n\n            <app-hot-key [keys]=\"[\n            {Key:'Ctrl + Q', Description:'Quét mã vạch',End:true}\n            ]\"></app-hot-key>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid *ngIf=\"kiemTraDanhSachThanhToan\" baseRoute=\"/xac-nhan-bhyt/noi-tru/danh-sach-cho-xac-nhan-bhyt\"\n                #gridListXacNhan [gridColumns]=\"gridChoNhanBhytColumns\" [sort]=\"sortConfig\" [useActionDefault]=\"false\"\n                [pageSize]=\"20\" [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\"\n                [searchString]=\"xacNhanBhyt.SearchString\" [checkboxAble]=\"false\" [showStt]=\"true\"\n                [additionalSearchString]=\"additionalSearchString\" [documentType]=\"documentType\"              \n                [urlGetData]=\"urlListBhytNoiTru\">\n            </app-grid>\n        </div>\n    </vex-page-layout-content>\n    <!-- action chuẩn bị khám -->\n    <ng-template #headerTemplate>\n        <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <app-checkbox id=\"dang-thanh-toan\" name=\"dang-thanh-toan\" (modelChange)=\"checkTrangThai($event,1)\"\n                fxFlex=\"127px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                [(model)]=\"xacNhanBhyt.NgoaiTru\" value=\"dangthanhtoan\" label=\"Ngoại Trú\">\n            </app-checkbox>\n\n            <app-checkbox id=\"da-thanh-toan\" name=\"da-thanh-toan\" (modelChange)=\"checkTrangThai($event,2)\"\n                [(model)]=\"xacNhanBhyt.NoiTru\" value=\"dathanhtoan\" fxFlex=\"127px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Nội Trú\">\n            </app-checkbox>\n\n            <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\" kendoTooltip>\n                <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString\" [(ngModel)]=\"xacNhanBhyt.SearchString\" (keyup)=\"onKey($event)\"\n                    placeholder=\"Nhập từ khóa(Mã NB,Tên NB,Năm sinh,Địa chỉ)...\" />\n                <button (click)=\"QuetMaQRCodeClick()\" color=\"primary\" mat-mini-fab type=\"button\"\n                    class=\"button-barcoe-in-search\" title=\"Phím tắt: Ctrl + Q\">\n                    <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                </button>\n            </div>\n            <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n            </button>\n            <app-datetimepicker fxFlex=\"205px\" [(model)]=\"xacNhanBhyt.ThoiDiemTiepNhanTu\" #tiepnhantu id=\"tiep-nhan-tu\"\n                (keyup)=\"onKey($event)\" label=\"Thời điểm duyệt từ\" class=\"ml-2 on-header\">\n            </app-datetimepicker>\n            <app-datetimepicker fxFlex=\"205px\" [(model)]=\"xacNhanBhyt.ThoiDiemTiepNhanDen\" #tiepnhanden\n                id=\"tiep-nhan-den\" (keyup)=\"onKey($event)\" label=\"Thời điểm duyệt đến\" class=\"ml-2 on-header\">\n            </app-datetimepicker>\n            <div fxFlex=\"65%\" fxFlex.sm=\"40%\"></div>\n            <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"ml-3\" fxFlex=\"none\" mat-icon-button kendoTooltip\n                title=\"Lọc cột\" type=\"button\">\n                <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n            </button>\n\n            <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                <div *ngFor=\"let column of gridChoNhanBhytColumns\">\n                    <button class=\"checkbox-item mat-menu-item\" *ngIf=\"!column.HideFilter\">\n                        <mat-checkbox (click)=\"toggleColumnVisibility(column, $event)\" [disabled]=\"!column.HasFilter\"\n                            [(ngModel)]=\"column.Visible\" color=\"primary\">\n                            {{ column.Title }}\n                        </mat-checkbox>\n                    </button>\n                </div>\n            </mat-menu>\n            <button (click)=\"exportExcel()\" class=\"ml-3\" fxFlex=\"1%\" fxFlex.sm=\"1%\" mat-icon-button kendoTooltip\n                title=\"Xuất Excel\" type=\"button\">\n                <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n            </button>\n        </div>\n    </ng-template>\n\n    <ng-template #statusTemplate let-dataItem>\n        <strong *ngIf=\"dataItem.ChuaXacNhan\" class=\"text-color\">\n            Chờ xác nhận</strong>\n        <strong class=\"blue-color\" *ngIf=\"!dataItem.ChuaXacNhan\">Đã xác nhận</strong>\n    </ng-template>\n\n    <ng-template #maTNTemplate let-dataItem>\n        {{dataItem.MaTN}}\n    </ng-template>\n</vex-page-layout>\n\n<ng-template #orderTemplate let-i=\"rowIndex\"><span>{{i+1}}</span></ng-template>\n\n<ng-template #soTienDaXacNhanTemplate let-dataItem>\n    <strong style=\"color:blue\">{{dataItem.SoTienDaXacNhan | number:'0.2-2':'vi-VN'}}</strong>\n</ng-template>\n\n<ng-template #thoiDiemTiepNhanDisplay let-dataItem>\n    <span> {{dataItem.ThoiDiemTiepNhanDisplay}} </span>\n</ng-template>\n\n<app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\" style=\"display: none;\"></app-barcode>");

/***/ }),

/***/ "./src/app/modules/main/thu-chi/ds-xn-bhyt-noi-tru-ngoai-tru/ds-xn-bhyt-noi-tru-ngoai-tru-list-routing.module.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/ds-xn-bhyt-noi-tru-ngoai-tru/ds-xn-bhyt-noi-tru-ngoai-tru-list-routing.module.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: DanhSachNoiTruVaNgoaiTruRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachNoiTruVaNgoaiTruRoutingModule", function() { return DanhSachNoiTruVaNgoaiTruRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _ds_xn_bhyt_noi_tru_ngoai_tru_list_ds_xn_bhyt_noi_tru_ngoai_tru_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ds-xn-bhyt-noi-tru-ngoai-tru-list/ds-xn-bhyt-noi-tru-ngoai-tru-list.component */ "./src/app/modules/main/thu-chi/ds-xn-bhyt-noi-tru-ngoai-tru/ds-xn-bhyt-noi-tru-ngoai-tru-list/ds-xn-bhyt-noi-tru-ngoai-tru-list.component.ts");







const routes = [
    {
        path: '',
        component: _ds_xn_bhyt_noi_tru_ngoai_tru_list_ds_xn_bhyt_noi_tru_ngoai_tru_list_component__WEBPACK_IMPORTED_MODULE_6__["DanhSachNoiTruVaNgoaiTruListComponent"],
        data: {
            title: 'Danh sách xác nhận bhyt đã hoàn thành',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DSXNNgoaiTruVaNoiTruBHYT,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
];
let DanhSachNoiTruVaNgoaiTruRoutingModule = class DanhSachNoiTruVaNgoaiTruRoutingModule {
};
DanhSachNoiTruVaNgoaiTruRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DanhSachNoiTruVaNgoaiTruRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/thu-chi/ds-xn-bhyt-noi-tru-ngoai-tru/ds-xn-bhyt-noi-tru-ngoai-tru-list.model.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/ds-xn-bhyt-noi-tru-ngoai-tru/ds-xn-bhyt-noi-tru-ngoai-tru-list.model.ts ***!
  \**************************************************************************************************************/
/*! exports provided: XacNhanBhyt, ThongTinHanhChinh, ThongTinBaoHiemXaHoi, DanhSachLichSuXacNhan, TagItem, TimKiemThongTinBenhNhan, GridXacNhanBhyt, IcdKemTheoModel, GridBhytModel, DesignateCoincidentServiceModel, InsuranceModelRequest, ListLoaiPhanTramPttt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XacNhanBhyt", function() { return XacNhanBhyt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinHanhChinh", function() { return ThongTinHanhChinh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinBaoHiemXaHoi", function() { return ThongTinBaoHiemXaHoi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachLichSuXacNhan", function() { return DanhSachLichSuXacNhan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagItem", function() { return TagItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimKiemThongTinBenhNhan", function() { return TimKiemThongTinBenhNhan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridXacNhanBhyt", function() { return GridXacNhanBhyt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IcdKemTheoModel", function() { return IcdKemTheoModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridBhytModel", function() { return GridBhytModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignateCoincidentServiceModel", function() { return DesignateCoincidentServiceModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceModelRequest", function() { return InsuranceModelRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListLoaiPhanTramPttt", function() { return ListLoaiPhanTramPttt; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class XacNhanBhyt {
    constructor(Id = 0, MaTN = null, MaBN = null, HoTen = null, NamSinh = null, TenGioiTinh = null, DiaChi = null, SoDienThoai = null, SoTienDaXacNhan = 0, SoTienChoXacNhan = 0, NoiTru = true, NgoaiTru = true, SearchString = null, ThoiDiemTiepNhanTu = null, ThoiDiemTiepNhanDen = null, FromDate = null, ToDate = null) {
        this.Id = Id;
        this.MaTN = MaTN;
        this.MaBN = MaBN;
        this.HoTen = HoTen;
        this.NamSinh = NamSinh;
        this.TenGioiTinh = TenGioiTinh;
        this.DiaChi = DiaChi;
        this.SoDienThoai = SoDienThoai;
        this.SoTienDaXacNhan = SoTienDaXacNhan;
        this.SoTienChoXacNhan = SoTienChoXacNhan;
        this.NoiTru = NoiTru;
        this.NgoaiTru = NgoaiTru;
        this.SearchString = SearchString;
        this.ThoiDiemTiepNhanTu = ThoiDiemTiepNhanTu;
        this.ThoiDiemTiepNhanDen = ThoiDiemTiepNhanDen;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
    }
}
class ThongTinHanhChinh {
    constructor(MaYeuCauTiepNhan = null, MaBn = null, HoTen = null, NamSinh = null, GioiTinh = null, DiaChi = null, SoDienThoai = null, Email = null, DoiTuongUuDai = null, CongTyUuDai = null, LyDoVaoVien = null, GiayChuyenVien = null, GiayChuyenVienId = null, Id = null) {
        this.MaYeuCauTiepNhan = MaYeuCauTiepNhan;
        this.MaBn = MaBn;
        this.HoTen = HoTen;
        this.NamSinh = NamSinh;
        this.GioiTinh = GioiTinh;
        this.DiaChi = DiaChi;
        this.SoDienThoai = SoDienThoai;
        this.Email = Email;
        this.DoiTuongUuDai = DoiTuongUuDai;
        this.CongTyUuDai = CongTyUuDai;
        this.LyDoVaoVien = LyDoVaoVien;
        this.GiayChuyenVien = GiayChuyenVien;
        this.GiayChuyenVienId = GiayChuyenVienId;
        this.Id = Id;
    }
}
class ThongTinBaoHiemXaHoi {
    constructor(BhytMaSoThe = null, BhytNgayHieuLucStr = null, BhytNgayHetHanStr = null, Dkbd = null, GiayMienCungChiTra = null, GiayMienCungChiTraId = null, BhytMucHuong = 0, Id = null) {
        this.BhytMaSoThe = BhytMaSoThe;
        this.BhytNgayHieuLucStr = BhytNgayHieuLucStr;
        this.BhytNgayHetHanStr = BhytNgayHetHanStr;
        this.Dkbd = Dkbd;
        this.GiayMienCungChiTra = GiayMienCungChiTra;
        this.GiayMienCungChiTraId = GiayMienCungChiTraId;
        this.BhytMucHuong = BhytMucHuong;
        this.Id = Id;
    }
}
class DanhSachLichSuXacNhan {
    constructor(DgBHYTChiTra = null, NgayCapNhatStr = null, NgươiCapNhat = null, DgBh = null, DgBhChiTra = null, MucHuong = null, SoLuong = null, Order = null, NgayDuyet = null, TenNhanVien = null, TiLeDv = null, TtBh = null, TtBhChiTra = null) {
        this.DgBHYTChiTra = DgBHYTChiTra;
        this.NgayCapNhatStr = NgayCapNhatStr;
        this.NgươiCapNhat = NgươiCapNhat;
        this.DgBh = DgBh;
        this.DgBhChiTra = DgBhChiTra;
        this.MucHuong = MucHuong;
        this.SoLuong = SoLuong;
        this.Order = Order;
        this.NgayDuyet = NgayDuyet;
        this.TenNhanVien = TenNhanVien;
        this.TiLeDv = TiLeDv;
        this.TtBh = TtBh;
        this.TtBhChiTra = TtBhChiTra;
    }
}
class TagItem {
    constructor(Key = null, Value = null, ValueDisplay = null, Title = null) {
        this.Key = Key;
        this.Value = Value;
        this.ValueDisplay = ValueDisplay;
        this.Title = Title;
    }
}
class TimKiemThongTinBenhNhan {
    constructor(TimKiemMaBNVaMaTN = null) {
        this.TimKiemMaBNVaMaTN = TimKiemMaBNVaMaTN;
    }
}
class GridXacNhanBhyt {
    constructor(CheckedDefault = null, HuongBhyt = null, TrangThaiThanhToan = null, DichVuId = null, TenDichVu = null, Id = null, SoLuong = null, DonGiaBenhVien = null, ThanhTienBenhVien = null, DGBHYTThamKhao = null, ThanhTienBHYTThamKhao = null, TiLeTheoDichVu = null, LoaiPhanTram = null, LoaiPhanTramText = null, TiLeDv = null, IsPttt = null, MucHuong = null, DGBHYTChiTra = null, TTBHYTChiTra = null, TTBHYTChiTraGiaSu = null, BNThanhToan = null, IsDaXacNhan = null, HighLightClass = null, GroupType = null, IsWarning = null, NhanVienChiDinh = null, NoiChiDinh = null, IcdChinh = null, MucHuongSystem = null, GhiChuIcdChinh = null, TheBHYTId = null, MaSoTheBHYT = null, CanModify = null, MucHuongDaDuyet = null, showInfoChangeMucHuongDuyet = false, YeuCauKhamBenhId = null, IcdKemTheos = []) {
        this.CheckedDefault = CheckedDefault;
        this.HuongBhyt = HuongBhyt;
        this.TrangThaiThanhToan = TrangThaiThanhToan;
        this.DichVuId = DichVuId;
        this.TenDichVu = TenDichVu;
        this.Id = Id;
        this.SoLuong = SoLuong;
        this.DonGiaBenhVien = DonGiaBenhVien;
        this.ThanhTienBenhVien = ThanhTienBenhVien;
        this.DGBHYTThamKhao = DGBHYTThamKhao;
        this.ThanhTienBHYTThamKhao = ThanhTienBHYTThamKhao;
        this.TiLeTheoDichVu = TiLeTheoDichVu;
        this.LoaiPhanTram = LoaiPhanTram;
        this.LoaiPhanTramText = LoaiPhanTramText;
        this.TiLeDv = TiLeDv;
        this.IsPttt = IsPttt;
        this.MucHuong = MucHuong;
        this.DGBHYTChiTra = DGBHYTChiTra;
        this.TTBHYTChiTra = TTBHYTChiTra;
        this.TTBHYTChiTraGiaSu = TTBHYTChiTraGiaSu;
        this.BNThanhToan = BNThanhToan;
        this.IsDaXacNhan = IsDaXacNhan;
        this.HighLightClass = HighLightClass;
        this.GroupType = GroupType;
        this.IsWarning = IsWarning;
        this.NhanVienChiDinh = NhanVienChiDinh;
        this.NoiChiDinh = NoiChiDinh;
        this.IcdChinh = IcdChinh;
        this.MucHuongSystem = MucHuongSystem;
        this.GhiChuIcdChinh = GhiChuIcdChinh;
        this.TheBHYTId = TheBHYTId;
        this.MaSoTheBHYT = MaSoTheBHYT;
        this.CanModify = CanModify;
        this.MucHuongDaDuyet = MucHuongDaDuyet;
        this.showInfoChangeMucHuongDuyet = showInfoChangeMucHuongDuyet;
        this.YeuCauKhamBenhId = YeuCauKhamBenhId;
        this.IcdKemTheos = IcdKemTheos;
    }
}
class IcdKemTheoModel {
    constructor(Icd = null, GhiChu = null) {
        this.Icd = Icd;
        this.GhiChu = GhiChu;
    }
}
class GridBhytModel {
    constructor(data = [], total = 0) {
        this.data = data;
        this.total = total;
    }
}
class DesignateCoincidentServiceModel {
    constructor(Id = null, ServiceId = null, ServiceGroup = null, PhongBenhVienChiDinh = null, BacSyChiDinh = null) {
        this.Id = Id;
        this.ServiceId = ServiceId;
        this.ServiceGroup = ServiceGroup;
        this.PhongBenhVienChiDinh = PhongBenhVienChiDinh;
        this.BacSyChiDinh = BacSyChiDinh;
    }
}
class InsuranceModelRequest {
    constructor(BenefitInsurance = [], NonBenefitInsurance = [], IdYeuCauTiepNhan = null) {
        this.BenefitInsurance = BenefitInsurance;
        this.NonBenefitInsurance = NonBenefitInsurance;
        this.IdYeuCauTiepNhan = IdYeuCauTiepNhan;
    }
}
class ListLoaiPhanTramPttt {
    constructor(DisplayName = null, KeyId = null) {
        this.DisplayName = DisplayName;
        this.KeyId = KeyId;
    }
}


/***/ }),

/***/ "./src/app/modules/main/thu-chi/ds-xn-bhyt-noi-tru-ngoai-tru/ds-xn-bhyt-noi-tru-ngoai-tru-list.module.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/ds-xn-bhyt-noi-tru-ngoai-tru/ds-xn-bhyt-noi-tru-ngoai-tru-list.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: XacNhanBHYTNoiTruVaNgoaiTruHoanThanhServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XacNhanBHYTNoiTruVaNgoaiTruHoanThanhServiceModule", function() { return XacNhanBHYTNoiTruVaNgoaiTruHoanThanhServiceModule; });
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
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _ds_xn_bhyt_noi_tru_ngoai_tru_list_ds_xn_bhyt_noi_tru_ngoai_tru_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ds-xn-bhyt-noi-tru-ngoai-tru-list/ds-xn-bhyt-noi-tru-ngoai-tru-list.component */ "./src/app/modules/main/thu-chi/ds-xn-bhyt-noi-tru-ngoai-tru/ds-xn-bhyt-noi-tru-ngoai-tru-list/ds-xn-bhyt-noi-tru-ngoai-tru-list.component.ts");
/* harmony import */ var _ds_xn_bhyt_noi_tru_ngoai_tru_list_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ds-xn-bhyt-noi-tru-ngoai-tru-list-routing.module */ "./src/app/modules/main/thu-chi/ds-xn-bhyt-noi-tru-ngoai-tru/ds-xn-bhyt-noi-tru-ngoai-tru-list-routing.module.ts");
/* harmony import */ var _ds_xn_bhyt_noi_tru_ngoai_tru_list_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ds-xn-bhyt-noi-tru-ngoai-tru-list.service */ "./src/app/modules/main/thu-chi/ds-xn-bhyt-noi-tru-ngoai-tru/ds-xn-bhyt-noi-tru-ngoai-tru-list.service.ts");


















let XacNhanBHYTNoiTruVaNgoaiTruHoanThanhServiceModule = class XacNhanBHYTNoiTruVaNgoaiTruHoanThanhServiceModule {
};
XacNhanBHYTNoiTruVaNgoaiTruHoanThanhServiceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ds_xn_bhyt_noi_tru_ngoai_tru_list_ds_xn_bhyt_noi_tru_ngoai_tru_list_component__WEBPACK_IMPORTED_MODULE_14__["DanhSachNoiTruVaNgoaiTruListComponent"]
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            _ds_xn_bhyt_noi_tru_ngoai_tru_list_routing_module__WEBPACK_IMPORTED_MODULE_15__["DanhSachNoiTruVaNgoaiTruRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"]
        ],
        providers: [
            _ds_xn_bhyt_noi_tru_ngoai_tru_list_service__WEBPACK_IMPORTED_MODULE_16__["XacNhanBHYTNoiTruVaNgoaiTruHoanThanhService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_12__["BaseService"], useClass: _ds_xn_bhyt_noi_tru_ngoai_tru_list_service__WEBPACK_IMPORTED_MODULE_16__["XacNhanBHYTNoiTruVaNgoaiTruHoanThanhService"] },
        ],
        entryComponents: []
    })
], XacNhanBHYTNoiTruVaNgoaiTruHoanThanhServiceModule);



/***/ }),

/***/ "./src/app/modules/main/thu-chi/ds-xn-bhyt-noi-tru-ngoai-tru/ds-xn-bhyt-noi-tru-ngoai-tru-list.service.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/ds-xn-bhyt-noi-tru-ngoai-tru/ds-xn-bhyt-noi-tru-ngoai-tru-list.service.ts ***!
  \****************************************************************************************************************/
/*! exports provided: XacNhanBHYTNoiTruVaNgoaiTruHoanThanhService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XacNhanBHYTNoiTruVaNgoaiTruHoanThanhService", function() { return XacNhanBHYTNoiTruVaNgoaiTruHoanThanhService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");




let XacNhanBHYTNoiTruVaNgoaiTruHoanThanhService = class XacNhanBHYTNoiTruVaNgoaiTruHoanThanhService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'XacNhanBHYTNoiTruVaNgoaiTruHoanThanh';
    }
};
XacNhanBHYTNoiTruVaNgoaiTruHoanThanhService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
XacNhanBHYTNoiTruVaNgoaiTruHoanThanhService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], XacNhanBHYTNoiTruVaNgoaiTruHoanThanhService);



/***/ }),

/***/ "./src/app/modules/main/thu-chi/ds-xn-bhyt-noi-tru-ngoai-tru/ds-xn-bhyt-noi-tru-ngoai-tru-list/ds-xn-bhyt-noi-tru-ngoai-tru-list.component.scss":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/ds-xn-bhyt-noi-tru-ngoai-tru/ds-xn-bhyt-noi-tru-ngoai-tru-list/ds-xn-bhyt-noi-tru-ngoai-tru-list.component.scss ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aHUtY2hpL2RzLXhuLWJoeXQtbm9pLXRydS1uZ29haS10cnUvZHMteG4tYmh5dC1ub2ktdHJ1LW5nb2FpLXRydS1saXN0L2RzLXhuLWJoeXQtbm9pLXRydS1uZ29haS10cnUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/thu-chi/ds-xn-bhyt-noi-tru-ngoai-tru/ds-xn-bhyt-noi-tru-ngoai-tru-list/ds-xn-bhyt-noi-tru-ngoai-tru-list.component.ts":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/ds-xn-bhyt-noi-tru-ngoai-tru/ds-xn-bhyt-noi-tru-ngoai-tru-list/ds-xn-bhyt-noi-tru-ngoai-tru-list.component.ts ***!
  \****************************************************************************************************************************************************/
/*! exports provided: DanhSachNoiTruVaNgoaiTruListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachNoiTruVaNgoaiTruListComponent", function() { return DanhSachNoiTruVaNgoaiTruListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _ds_xn_bhyt_noi_tru_ngoai_tru_list_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../ds-xn-bhyt-noi-tru-ngoai-tru-list.model */ "./src/app/modules/main/thu-chi/ds-xn-bhyt-noi-tru-ngoai-tru/ds-xn-bhyt-noi-tru-ngoai-tru-list.model.ts");




















let DanhSachNoiTruVaNgoaiTruListComponent = class DanhSachNoiTruVaNgoaiTruListComponent {
    constructor(router, authService, route, apiService, notificationService, dialog) {
        this.router = router;
        this.authService = authService;
        this.route = route;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.gridChoNhanBhytColumns = [];
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.xacNhanBhyt = new _ds_xn_bhyt_noi_tru_ngoai_tru_list_model__WEBPACK_IMPORTED_MODULE_18__["XacNhanBhyt"]();
        this.xacNhanBhytDefault = new _ds_xn_bhyt_noi_tru_ngoai_tru_list_model__WEBPACK_IMPORTED_MODULE_18__["XacNhanBhyt"]();
        this.showCancelSearch = false;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.additionalSearchString = null;
        this.kiemTraDanhSachThanhToan = true;
        this.timKiemThongTinBenhNhan = {};
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_15___default.a;
        this.isScanF1 = false;
        this.holdQuery = null;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_17___default.a;
        this.sortConfig = [
            {
                field: 'ChuaXacNhan',
                dir: 'desc',
            },
            {
                field: 'ThoiDiemTiepNhan',
                dir: 'desc'
            },
            {
                field: 'Id',
                dir: 'asc',
            },
        ];
        this.minDateTuNgay = null;
        this.urlListBhytNoiTru = 'XacNhanBHYT/GetDataForGridXacNhanNoiTruVaNgoaiTruBHYTAsync';
        this.urlBhytNoiTruTotalPage = 'XacNhanBHYT/GetTotalPageForGridXacNhanNoiTruVaNgoaiTruBHYTAsync';
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__["DocumentType"].DSXNNgoaiTruVaNoiTruBHYT;
        if (this.route.snapshot.queryParams.holdQuery != null) {
            this.holdQuery = this.route.snapshot.queryParams.holdQuery;
        }
        if (this.holdQuery != null &&
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].getItem('additionalSearchStringXacNhanBHYT') != null) {
            this.additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].getItem('additionalSearchStringXacNhanBHYT');
            this.xacNhanBhyt = new _ds_xn_bhyt_noi_tru_ngoai_tru_list_model__WEBPACK_IMPORTED_MODULE_18__["XacNhanBhyt"]();
            this.xacNhanBhyt = JSON.parse(this.additionalSearchString);
            if (this.xacNhanBhyt.ThoiDiemTiepNhanTu != null && this.xacNhanBhyt.ThoiDiemTiepNhanTu !== '') {
                this.xacNhanBhyt.ThoiDiemTiepNhanTu = new Date(this.xacNhanBhyt.ThoiDiemTiepNhanTu);
            }
            else {
                this.xacNhanBhyt.ThoiDiemTiepNhanTu = null;
            }
            if (this.xacNhanBhyt.ThoiDiemTiepNhanDen != null && this.xacNhanBhyt.ThoiDiemTiepNhanDen !== '') {
                this.xacNhanBhyt.ThoiDiemTiepNhanDen = new Date(this.xacNhanBhyt.ThoiDiemTiepNhanDen);
            }
            else {
                this.xacNhanBhyt.ThoiDiemTiepNhanDen = null;
            }
        }
        else {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].setItem('additionalSearchStringXacNhanBHYT', null);
        }
        this.gridChoNhanBhytColumns = [
            {
                Field: 'ThoiDiemTiepNhanDisplay',
                Title: 'Thời gian TN',
                Width: 100,
                Sortable: true,
            },
            // { Field: 'MaXacNhan', Title: 'Mã XN', Width: 75, Sortable: true },
            { Field: 'MaTiepNhan', Title: 'Mã TN', Width: 100, Sortable: true },
            { Field: 'MaBenhNhan', Title: 'Mã NB', Width: 90, Sortable: true },
            { Field: 'HoTen', Title: 'HỌ TÊN', Width: 90, Sortable: true },
            { Field: 'NamSinh', Title: 'NĂM SINH', Width: 100, Sortable: true },
            { Field: 'GioiTinh', Title: 'GIỚI TÍNH', Width: 100, Sortable: true },
            { Field: 'DiaChi', Title: 'ĐỊA CHỈ', Width: 100, Sortable: true },
            { Field: 'SoDienThoai', Title: 'SỐ ĐIỆN THOẠI', Width: 100, Sortable: true },
            { Field: 'SoTienDaXacNhan', Title: 'SỐ TIỀN ĐÃ XN', Width: 100, Sortable: true, Template: this.soTienDaXacNhanTemplate },
            { Field: 'ThoiDiemDuyetDisplay', Title: 'THỜI ĐIỂM DUYỆT', Width: 100, Sortable: true },
            { Field: 'LoaiDieuTri', Title: 'LOẠI ĐIỀU TRỊ', Width: 100, Sortable: true },
            { Field: 'NguoiDuyet', Title: 'NGƯỜI DUYỆT', Width: 100, Sortable: true },
        ];
        this.listTagSearch = new Array();
        this.minDateTuNgay = new Date();
        this.minDateTuNgay.setHours(0, 0, 0, 0);
        var firstDayOfMonth = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1);
        if (this.xacNhanBhyt.ThoiDiemTiepNhanTu == null) {
            this.xacNhanBhyt.ThoiDiemTiepNhanTu = firstDayOfMonth;
            this.xacNhanBhyt.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].formatDateTime(this.xacNhanBhyt.ThoiDiemTiepNhanTu, 'dd/mm/yyyy');
        }
        if (this.xacNhanBhyt.ThoiDiemTiepNhanDen == null) {
            this.xacNhanBhyt.ThoiDiemTiepNhanDen = new Date();
            this.xacNhanBhyt.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].formatDateTime(this.xacNhanBhyt.ThoiDiemTiepNhanDen, 'dd/mm/yyyy');
        }
        const queryString = JSON.stringify(this.xacNhanBhyt);
        this.additionalSearchString = queryString;
    }
    checkTrangThai(event, type) {
        if (type === 1) {
            this.xacNhanBhyt.NgoaiTru = event;
        }
        if (type === 2) {
            this.xacNhanBhyt.NoiTru = event;
        }
        this.TimkiemNangCao();
    }
    TimkiemNangCao() {
        if (this.xacNhanBhyt.NamSinh != null) {
            this.xacNhanBhyt.NamSinh = Math.round(this.xacNhanBhyt.NamSinh);
        }
        if (this.xacNhanBhyt.ThoiDiemTiepNhanTu != null) {
            this.xacNhanBhyt.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].formatDateTime(this.xacNhanBhyt.ThoiDiemTiepNhanTu, 'dd/mm/yyyy');
        }
        else {
            this.xacNhanBhyt.FromDate = null;
        }
        if (this.xacNhanBhyt.ThoiDiemTiepNhanDen != null) {
            this.xacNhanBhyt.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].formatDateTime(this.xacNhanBhyt.ThoiDiemTiepNhanDen, 'dd/mm/yyyy');
        }
        else {
            this.xacNhanBhyt.ToDate = null;
        }
        this.listTagShowOnHeader = JSON.parse(JSON.stringify(this.listTagSearch));
        const queryString = JSON.stringify(this.xacNhanBhyt);
        if (this.gridListXacNhan != null) {
            this.gridListXacNhan.searchString = this.xacNhanBhyt.SearchString;
            this.gridListXacNhan._additionalSearchString = queryString;
            this.gridListXacNhan.search();
        }
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].setItem('additionalSearchStringXacNhanBHYT', queryString);
        this.showCancelSearch =
            this.listTagShowOnHeader != null &&
                this.listTagShowOnHeader.length > 0;
    }
    searchChanges(event) {
        const self = this;
        if (self.timeoutSearchChange != null) {
            clearTimeout(self.timeoutSearchChange);
            self.timeoutSearchChange = null;
        }
        self.timeoutSearchChange = setTimeout(() => {
            if (event != null && event.endsWith('@')) {
                const dataTimKiem = event.split('|');
                if (dataTimKiem.length > 1) {
                    self.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = dataTimKiem[0];
                }
                else {
                    self.xacNhanBhyt.SearchString = event.slice(0, -1);
                    self.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = event.slice(0, -1);
                }
                self.getThongTinYeuCauBenhNhan(self.timKiemThongTinBenhNhan);
            }
            if (self.xacNhanBhyt.SearchString == null || self.xacNhanBhyt.SearchString === '') {
                if (self.gridListXacNhan != null) {
                    self.gridListXacNhan.searchString = '';
                    self.gridListXacNhan.search();
                }
            }
        }, 100);
    }
    clearSearch() {
        this.xacNhanBhyt.SearchString = '';
        if (this.gridListXacNhan != null) {
            this.gridListXacNhan.search();
        }
    }
    Timkiem() {
        let QueryString = null;
        if (this.xacNhanBhyt.SearchString != null) {
            QueryString = this.xacNhanBhyt.SearchString;
        }
        if (this.xacNhanBhyt.NamSinh != null) {
            this.xacNhanBhyt.NamSinh = Math.round(this.xacNhanBhyt.NamSinh);
        }
        if (this.xacNhanBhyt.ThoiDiemTiepNhanTu != null) {
            this.xacNhanBhyt.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].formatDateTime(this.xacNhanBhyt.ThoiDiemTiepNhanTu, 'dd/mm/yyyy');
        }
        else {
            this.xacNhanBhyt.FromDate = null;
        }
        if (this.xacNhanBhyt.ThoiDiemTiepNhanDen != null) {
            this.xacNhanBhyt.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].formatDateTime(this.xacNhanBhyt.ThoiDiemTiepNhanDen, 'dd/mm/yyyy');
        }
        else {
            this.xacNhanBhyt.ToDate = null;
        }
        const queryString = JSON.stringify(this.xacNhanBhyt);
        if (this.gridListXacNhan != null) {
            this.gridListXacNhan.searchString = QueryString;
            this.gridListXacNhan._additionalSearchString = queryString;
            this.gridListXacNhan.search();
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].setItem('additionalSearchStringXacNhanBHYT', queryString);
        }
    }
    xacNhan(data) {
        const self = this;
        self.dialog
            .open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmComponent"], {
            disableClose: false,
            width: '400px',
            data: {
                Title: 'Xác nhận',
                Message: 'Bạn có chắc chắn duyệt những bảo hiểm này không?',
            },
        })
            .afterClosed()
            .subscribe((result) => {
            if (result === 'Yes') {
                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Update)) {
                    self.apiService.get('XacNhanBHYT/DuyetBaoHiemChoXnAsync?yeuCauTiepNhanId=' + data.Id).subscribe(() => {
                        self.notificationService.showSuccess(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["DuyetBhytMessage"].MessageXnThanhCong);
                        self.gridListXacNhan.setDataSource();
                    }, err => {
                        self.notificationService.showError(err.Message);
                    });
                }
                else {
                    self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                }
            }
        });
    }
    QuetMaQRCodeClick() {
        const elementBarcode = document.getElementById('barcodeActive');
        if (elementBarcode != null) {
            elementBarcode.click();
        }
    }
    changeQR($event) {
        if ($event != null && typeof $event === 'string' && $event.endsWith('@')) {
            this.modelQRCode = $event;
            const dataTimKiem = $event.split('|');
            if (dataTimKiem.length > 1) {
                this.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = dataTimKiem[0];
            }
            else {
                this.xacNhanBhyt.SearchString = $event.slice(0, -1);
                this.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = $event.slice(0, -1);
            }
            this.getThongTinYeuCauBenhNhan(this.timKiemThongTinBenhNhan);
        }
        else {
            this.notificationService.showError('Không tìm thấy thông tin cần tìm.');
        }
        this.isScanF1 = false;
    }
    getThongTinYeuCauBenhNhan(timKiemThongTinBenhNhan) {
        this.apiService
            .post('XacNhanBHYT/GetXacNhanBHYTByMaBNVaMaTT/', timKiemThongTinBenhNhan)
            .subscribe((resultData) => {
            if (resultData.length > 0 && resultData !== undefined) {
                //this.thongTinChiTiet(resultData[0]);
            }
            else {
                this.notificationService.showError('Thông tìm thấy thông tin cần tìm.');
            }
        });
    }
    keyEvent(event) {
        // tslint:disable-next-line: deprecation
        if (event.keyCode === 81 && event.ctrlKey && this.isScanF1 !== true) {
            event.preventDefault();
            this.QuetMaQRCodeClick();
        }
    }
    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Process)) {
            self.apiService.postExportExcel('XacNhanBHYT/ExportNoiTruVaNgoaiTruBHYTHoanThanh', self.gridListXacNhan._gridQueryInfo).subscribe(resultData => {
                self.closePopupLoadingData();
                const dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'DSXacNhanBHYT' + dateTimeNow.getFullYear() + '.xlsx');
            }, (err) => {
                self.notificationService.showError(err.Message);
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    showPopupLoadingData() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
    }
    closePopupLoadingData() {
        this.dialog.closeAll();
    }
    onKey(event) {
        if (event.key === 'Enter') {
            this.TimkiemNangCao();
        }
    }
    toggleColumnVisibility(column, event) {
        this.gridListXacNhan.toggleColumnVisibility(column, event);
    }
};
DanhSachNoiTruVaNgoaiTruListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridListXacNhan', { static: false })
], DanhSachNoiTruVaNgoaiTruListComponent.prototype, "gridListXacNhan", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], { static: false })
], DanhSachNoiTruVaNgoaiTruListComponent.prototype, "trigger", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('templateTextSoTienDaXacNhan', { static: true })
], DanhSachNoiTruVaNgoaiTruListComponent.prototype, "templateTextSoTienDaXacNhan", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('templateTextSoTienChoXacNhan', { static: true })
], DanhSachNoiTruVaNgoaiTruListComponent.prototype, "templateTextSoTienChoXacNhan", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('statusTemplate', { static: true })
], DanhSachNoiTruVaNgoaiTruListComponent.prototype, "statusTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thoiDiemTiepNhanDisplay', { static: true })
], DanhSachNoiTruVaNgoaiTruListComponent.prototype, "thoiDiemTiepNhanDisplay", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('templateTextSoTienDaXacNhanDaXacNhan', { static: true })
], DanhSachNoiTruVaNgoaiTruListComponent.prototype, "templateTextSoTienDaXacNhanDaXacNhan", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maTNTemplate', { static: true })
], DanhSachNoiTruVaNgoaiTruListComponent.prototype, "maTNTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soTienDaXacNhanTemplate', { static: true })
], DanhSachNoiTruVaNgoaiTruListComponent.prototype, "soTienDaXacNhanTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])
], DanhSachNoiTruVaNgoaiTruListComponent.prototype, "keyEvent", null);
DanhSachNoiTruVaNgoaiTruListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ds-xn-bhyt-noi-tru-ngoai-tru-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ds-xn-bhyt-noi-tru-ngoai-tru-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/ds-xn-bhyt-noi-tru-ngoai-tru/ds-xn-bhyt-noi-tru-ngoai-tru-list/ds-xn-bhyt-noi-tru-ngoai-tru-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ds-xn-bhyt-noi-tru-ngoai-tru-list.component.scss */ "./src/app/modules/main/thu-chi/ds-xn-bhyt-noi-tru-ngoai-tru/ds-xn-bhyt-noi-tru-ngoai-tru-list/ds-xn-bhyt-noi-tru-ngoai-tru-list.component.scss")).default]
    })
], DanhSachNoiTruVaNgoaiTruListComponent);



/***/ })

}]);
//# sourceMappingURL=thu-chi-ds-xn-bhyt-noi-tru-ngoai-tru-ds-xn-bhyt-noi-tru-ngoai-tru-list-module-es2015.js.map