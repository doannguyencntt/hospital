(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["danh-muc-phan-quyen-nguoi-dung-phan-quyen-nguoi-dung-module"],{

/***/ "./node_modules/@iconify/icons-ic/twotone-remove-red-eye.js":
/*!******************************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-remove-red-eye.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path opacity=\".3\" d=\"M12 6.5A9.77 9.77 0 0 0 3.18 12c1.65 3.37 5.02 5.5 8.82 5.5s7.17-2.13 8.82-5.5A9.77 9.77 0 0 0 12 6.5zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7.5 12 7.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z\" fill=\"currentColor\"/><path d=\"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 13A9.77 9.77 0 0 1 3.18 12C4.83 8.63 8.21 6.5 12 6.5s7.17 2.13 8.82 5.5A9.77 9.77 0 0 1 12 17.5zm0-10c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zm0 7a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-create/phan-quyen-nguoi-dung-create.component.html":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-create/phan-quyen-nguoi-dung-create.component.html ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n    {Title:'Danh Mục',Path:''}\n    ,{Title:'Phân Quyền Người Dùng',Path:'/danh-muc/phan-quyen-nguoi-dung',Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Thêm Phân Quyền Người Dùng</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-phan-quyen-nguoi-dung-shared>\n                </app-phan-quyen-nguoi-dung-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"create\" (created)=\"onCreated()\">\n                    </app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-list/phan-quyen-nguoi-dung-list.component.html":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-list/phan-quyen-nguoi-dung-list.component.html ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                  {Title:'Danh Mục', Path:''}\n                  ,{Title:'Phân Quyền Người Dùng', Path:'/danh-muc/phan-quyen-nguoi-dung', Active:true}\n                  ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"/danh-muc/phan-quyen-nguoi-dung\" [gridColumns]=\"gridColumns\"\n                [documentType]=\"documentType\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                #gridPhanQuyenNguoiDung [showExportExcel]=\"true\" (extExportExcel)=\"exportExcel()\">\n            </app-grid>\n            <ng-template #trangThaiTemplate let-dataItem>\n                <span *ngIf=\"dataItem.Quyen == 1\">Phải</span>\n                <span *ngIf=\"dataItem.Quyen != 1\">Không</span>\n            </ng-template>\n            <ng-template #actionTemplate let-dataItem>\n                <button (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\"\n                    mat-icon-button type=\"button\">\n                    <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n                </button>\n                <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <ng-template let-customer=\"customer\" matMenuContent>\n                        <button (click)=\"edit(dataItem.Id)\" mat-menu-item>\n                            <mat-icon [icIcon]=\"icEdit\" *ngIf=\"dataItem.Quyen != 1\"></mat-icon>\n                            <mat-icon [icIcon]=\"icEye\" *ngIf=\"dataItem.Quyen == 1\"></mat-icon>\n                            <span>{{dataItem.Quyen != 1?\"Sửa\":\"Xem\"}}</span>\n                        </button>\n                        <button *ngIf=\"dataItem.Quyen != 1\" (click)=\"delete(dataItem.Id)\" mat-menu-item>\n                            <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                            <span>Xóa</span>\n                        </button>\n                    </ng-template>\n                </mat-menu>\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-shared/phan-quyen-nguoi-dung-shared.component.html":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-shared/phan-quyen-nguoi-dung-shared.component.html ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <app-textbox id=\"name\" class=\"item-no-padding\" fxFlex=\"70%\" fxFlex.sm=\"70%\" label=\"Tên quyền\" [maxlength]=\"100\"\n        [(model)]=\"phanQuyenNguoiDung.Name\" [required]=\"true\" [disabled]=\"phanQuyenNguoiDung.IsDefault\"\n        [validationerror]=\"'Name' | validationerror:validationErrors\">\n    </app-textbox>\n\n    <app-dropdownlist id=\"user_type\" fxFlex=\"30%\" fxFlex.sm=\"30%\" label=\"Loại người dùng\" class=\"item-no-padding\"\n        url=\"PhanQuyenNguoiDung/GetListUserType\" [(model)]=\"phanQuyenNguoiDung.UserType\" [required]=\"true\"\n        [modelText]=\"phanQuyenNguoiDung.UserTypeDisplay\" [disabled]=\"phanQuyenNguoiDung.IsDefault\"\n        [validationerror]=\"'UserType' | validationerror:validationErrors\">\n    </app-dropdownlist>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">CHỨC NĂNG\n    </h3>\n\n    <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" [gridDataSource]=\"gridDataSource\" [useHeaderDefault]=\"false\"\n        [documentType]=\"documentType\" [gridColumns]=\"gridColumns\" [useActionDefault]=\"false\" [useAddDeault]=\"false\"\n        [checkboxAble]=\"false\" [headerTemplate]=\"permissionHeaderTemplate\" [pageable]=\"false\" [heightToolbar]=\"425\"\n        #gridPermission>\n    </app-grid>\n\n    <ng-template #permissionHeaderTemplate>\n        <div class=\"bg-app-bar px-6 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString\" [(ngModel)]=\"searchString\" (ngModelChange)=\"searchChanges($event)\"\n                    (keyup)=\"onKeySearchChanges($event)\" placeholder=\"Nhập từ khóa tìm kiếm\" />\n            </div>\n            <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n                <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n            </button>\n            <div fxFlex=\"70%\" fxFlex.sm=\"70%\"></div>\n            <app-checkbox fxFlex=\"6%\" fxFlex.sm=\"6%\" id=\"checkAll\" value=\"true\" [model]=\"isCheckAll\"\n                [disabled]=\"phanQuyenNguoiDung.IsDefault\" (modelChange)=\"CheckAll($event)\" label=\"Tất cả\">\n            </app-checkbox>\n        </div>\n    </ng-template>\n\n    <ng-template #nameTemplate let-dataItem>\n        <span *ngIf=\"dataItem.DocumentType != null\" [style.marginLeft.px]=\"dataItem.Level * 20\">{{dataItem.Name}}</span>\n\n        <button mat-button (click)=\"expandData(dataItem)\" class=\"pl-0\" [style.marginLeft.px]=\"dataItem.Level * 20\"\n            *ngIf=\"dataItem.DocumentType == null && dataItem.DocumentType == null && dataItem.IsCollapse\">\n            <mat-icon [icIcon]=\"icArrowDown\"></mat-icon>\n            {{dataItem.Name}}\n        </button>\n        <button mat-button (click)=\"collapseData(dataItem)\" class=\"pl-0\" color=\"primary\"\n            [style.marginLeft.px]=\"dataItem.Level * 20\"\n            *ngIf=\"dataItem.DocumentType == null && dataItem.DocumentType == null && !dataItem.IsCollapse\">\n            <mat-icon [icIcon]=\"icArrowUp\"></mat-icon>\n            {{dataItem.Name}}\n        </button>\n        <!-- <strong *ngIf=\"dataItem.DocumentType == null\"\n            [style.marginLeft.px]=\"dataItem.Level * 20\">{{dataItem.Name}}</strong> -->\n    </ng-template>\n\n    <ng-template #viewTemplate let-dataItem>\n        <app-checkbox *ngIf=\"dataItem.DocumentType != null\" value=\"true\" [model]=\"dataItem.IsView\" label=\"\"\n            [disabled]=\"phanQuyenNguoiDung.IsDefault\"\n            (modelChange)=\"OnChangeChildrenOnView($event, dataItem.IdParent, dataItem)\">\n        </app-checkbox>\n        <app-checkbox *ngIf=\"dataItem.DocumentType == null\" value=\"true\" [model]=\"dataItem.IsView\" label=\"\"\n            [disabled]=\"phanQuyenNguoiDung.IsDefault\"\n            (modelChange)=\"OnChangeParentOnView($event, dataItem.Id, dataItem)\">\n        </app-checkbox>\n    </ng-template>\n\n    <ng-template #insertTemplate let-dataItem>\n        <app-checkbox *ngIf=\"dataItem.DocumentType != null\" value=\"true\" [model]=\"dataItem.IsInsert\" label=\"\"\n            [disabled]=\"phanQuyenNguoiDung.IsDefault\"\n            (modelChange)=\"OnChangeChildrenOnInsert($event, dataItem.IdParent, dataItem)\">\n        </app-checkbox>\n        <app-checkbox *ngIf=\"dataItem.DocumentType == null\" value=\"true\" [model]=\"dataItem.IsInsert\" label=\"\"\n            [disabled]=\"phanQuyenNguoiDung.IsDefault\"\n            (modelChange)=\"OnChangeParentOnInsert($event, dataItem.Id, dataItem)\">\n        </app-checkbox>\n    </ng-template>\n\n    <ng-template #updateTemplate let-dataItem>\n        <app-checkbox *ngIf=\"dataItem.DocumentType != null\" value=\"true\" [model]=\"dataItem.IsUpdate\" label=\"\"\n            [disabled]=\"phanQuyenNguoiDung.IsDefault\"\n            (modelChange)=\"OnChangeChildrenOnUpdate($event, dataItem.IdParent, dataItem)\">\n        </app-checkbox>\n        <app-checkbox *ngIf=\"dataItem.DocumentType == null\" value=\"true\" [model]=\"dataItem.IsUpdate\" label=\"\"\n            [disabled]=\"phanQuyenNguoiDung.IsDefault\"\n            (modelChange)=\"OnChangeParentOnUpdate($event, dataItem.Id, dataItem)\">\n        </app-checkbox>\n    </ng-template>\n\n    <ng-template #deleteTemplate let-dataItem>\n        <app-checkbox *ngIf=\"dataItem.DocumentType != null\" value=\"true\" [model]=\"dataItem.IsDelete\" label=\"\"\n            [disabled]=\"phanQuyenNguoiDung.IsDefault\"\n            (modelChange)=\"OnChangeChildrenOnDelete($event, dataItem.IdParent, dataItem)\">\n        </app-checkbox>\n        <app-checkbox *ngIf=\"dataItem.DocumentType == null\" value=\"true\" [model]=\"dataItem.IsDelete\" label=\"\"\n            [disabled]=\"phanQuyenNguoiDung.IsDefault\"\n            (modelChange)=\"OnChangeParentOnDelete($event, dataItem.Id, dataItem)\">\n        </app-checkbox>\n    </ng-template>\n\n    <ng-template #processTemplate let-dataItem>\n        <app-checkbox *ngIf=\"dataItem.DocumentType != null\" value=\"true\" [model]=\"dataItem.IsProcess\" label=\"\"\n            [disabled]=\"phanQuyenNguoiDung.IsDefault\"\n            (modelChange)=\"OnChangeChildrenOnProcess($event, dataItem.IdParent, dataItem)\">\n        </app-checkbox>\n        <app-checkbox *ngIf=\"dataItem.DocumentType == null\" value=\"true\" [model]=\"dataItem.IsProcess\" label=\"\"\n            [disabled]=\"phanQuyenNguoiDung.IsDefault\"\n            (modelChange)=\"OnChangeParentOnProcess($event, dataItem.Id, dataItem)\">\n        </app-checkbox>\n    </ng-template>\n</div>\n<div *ngIf=\"!isCreate\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <app-formfooter [bodyComponent]=\"this\" type=\"update\" [read]=\"phanQuyenNguoiDung.IsDefault\" (updated)=\"onUpdated()\">\n    </app-formfooter>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-update/phan-quyen-nguoi-dung-update.component.html":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-update/phan-quyen-nguoi-dung-update.component.html ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n    {Title:'Danh Mục',Path:''}\n    ,{Title:'Phân Quyền Người Dùng',Path:'/danh-muc/phan-quyen-nguoi-dung',Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chỉnh Sửa Phân Quyền Người Dùng</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-phan-quyen-nguoi-dung-shared>\n                </app-phan-quyen-nguoi-dung-shared>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-create/phan-quyen-nguoi-dung-create.component.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-create/phan-quyen-nguoi-dung-create.component.scss ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9waGFuLXF1eWVuLW5ndW9pLWR1bmcvcGhhbi1xdXllbi1uZ3VvaS1kdW5nLWNyZWF0ZS9waGFuLXF1eWVuLW5ndW9pLWR1bmctY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-create/phan-quyen-nguoi-dung-create.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-create/phan-quyen-nguoi-dung-create.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: PhanQuyenNguoiDungCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhanQuyenNguoiDungCreateComponent", function() { return PhanQuyenNguoiDungCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _phan_quyen_nguoi_dung_shared_phan_quyen_nguoi_dung_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../phan-quyen-nguoi-dung-shared/phan-quyen-nguoi-dung-shared.component */ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-shared/phan-quyen-nguoi-dung-shared.component.ts");




let PhanQuyenNguoiDungCreateComponent = class PhanQuyenNguoiDungCreateComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onCreated() {
        this.router.navigate(['/danh-muc/phan-quyen-nguoi-dung']);
    }
};
PhanQuyenNguoiDungCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_phan_quyen_nguoi_dung_shared_phan_quyen_nguoi_dung_shared_component__WEBPACK_IMPORTED_MODULE_3__["PhanQuyenNguoiDungSharedComponent"], { static: true })
], PhanQuyenNguoiDungCreateComponent.prototype, "shared", void 0);
PhanQuyenNguoiDungCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-phan-quyen-nguoi-dung-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phan-quyen-nguoi-dung-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-create/phan-quyen-nguoi-dung-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phan-quyen-nguoi-dung-create.component.scss */ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-create/phan-quyen-nguoi-dung-create.component.scss")).default]
    })
], PhanQuyenNguoiDungCreateComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-list/phan-quyen-nguoi-dung-list.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-list/phan-quyen-nguoi-dung-list.component.scss ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9waGFuLXF1eWVuLW5ndW9pLWR1bmcvcGhhbi1xdXllbi1uZ3VvaS1kdW5nLWxpc3QvcGhhbi1xdXllbi1uZ3VvaS1kdW5nLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-list/phan-quyen-nguoi-dung-list.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-list/phan-quyen-nguoi-dung-list.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: PhanQuyenNguoiDungListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhanQuyenNguoiDungListComponent", function() { return PhanQuyenNguoiDungListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _iconify_icons_ic_twotone_remove_red_eye__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-remove-red-eye */ "./node_modules/@iconify/icons-ic/twotone-remove-red-eye.js");
/* harmony import */ var _iconify_icons_ic_twotone_remove_red_eye__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_remove_red_eye__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");


















let PhanQuyenNguoiDungListComponent = class PhanQuyenNguoiDungListComponent {
    constructor(authService, dialog, notificationService, router, apiService, baseService) {
        this.authService = authService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.router = router;
        this.apiService = apiService;
        this.baseService = baseService;
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_10___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_14___default.a;
        this.icEye = _iconify_icons_ic_twotone_remove_red_eye__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.gridColumns = [];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_13__["DocumentType"].Role;
        this.gridColumns = [
            { Field: 'Ten', Title: 'Tên', MinWidth: 200, Sortable: true, LinkDetail: true },
            { Field: 'LoaiNguoiDung', Title: 'Loại người dùng', Width: 150, Sortable: true },
            { Field: 'Quyen', Title: 'Quyền mặc định', Width: 150, Template: this.trangThaiTemplate },
            { Field: '', Title: '', Width: 60, Template: this.actionTemplate }
        ];
        this.baseRoute = '/danh-muc/phan-quyen-nguoi-dung';
    }
    edit(id) {
        const self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Update)) {
            self.router.navigate([self.baseRoute + '/chinh-sua/' + id]);
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    delete(id) {
        const self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Delete)) {
            this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmComponent"], {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].MessConfirm, ['xóa']) }
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    self.baseService.deleteById(id)
                        .subscribe(() => {
                        if (self.gridPhanQuyenNguoiDung !== undefined) {
                            self.gridPhanQuyenNguoiDung.mySelectionAfterDelete(id);
                            self.gridPhanQuyenNguoiDung.search();
                            self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].ActionSuccessfully, ['Xóa']));
                        }
                    }, (err) => {
                        self.notificationService.showError(err.Message);
                    });
                }
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Process)) {
            self.apiService.postExportExcel('PhanQuyenNguoiDung/ExportPhanQuyenNguoiDung', self.gridPhanQuyenNguoiDung._gridQueryInfo).subscribe(resultData => {
                self.closePopupLoadingData();
                const dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'PhanQuyenNguoiDung' + dateTimeNow.getFullYear() + '.xlsx');
            }, (err) => {
                self.notificationService.showError(err.Message);
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    showPopupLoadingData() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
    }
    closePopupLoadingData() {
        this.dialog.closeAll();
    }
};
PhanQuyenNguoiDungListComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_15__["ApiService"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
], PhanQuyenNguoiDungListComponent.prototype, "trangThaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], PhanQuyenNguoiDungListComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridPhanQuyenNguoiDung', { static: false })
], PhanQuyenNguoiDungListComponent.prototype, "gridPhanQuyenNguoiDung", void 0);
PhanQuyenNguoiDungListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-phan-quyen-nguoi-dung-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phan-quyen-nguoi-dung-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-list/phan-quyen-nguoi-dung-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phan-quyen-nguoi-dung-list.component.scss */ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-list/phan-quyen-nguoi-dung-list.component.scss")).default]
    })
], PhanQuyenNguoiDungListComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-routing.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-routing.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PhanQuyenNguoiDungRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhanQuyenNguoiDungRoutingModule", function() { return PhanQuyenNguoiDungRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _phan_quyen_nguoi_dung_list_phan_quyen_nguoi_dung_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phan-quyen-nguoi-dung-list/phan-quyen-nguoi-dung-list.component */ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-list/phan-quyen-nguoi-dung-list.component.ts");
/* harmony import */ var _phan_quyen_nguoi_dung_create_phan_quyen_nguoi_dung_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./phan-quyen-nguoi-dung-create/phan-quyen-nguoi-dung-create.component */ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-create/phan-quyen-nguoi-dung-create.component.ts");
/* harmony import */ var _phan_quyen_nguoi_dung_update_phan_quyen_nguoi_dung_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./phan-quyen-nguoi-dung-update/phan-quyen-nguoi-dung-update.component */ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-update/phan-quyen-nguoi-dung-update.component.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");









const routes = [
    {
        path: '',
        component: _phan_quyen_nguoi_dung_list_phan_quyen_nguoi_dung_list_component__WEBPACK_IMPORTED_MODULE_3__["PhanQuyenNguoiDungListComponent"],
        data: {
            title: 'Danh mục phân quyền người dùng',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].Role,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
    },
    {
        path: 'them',
        component: _phan_quyen_nguoi_dung_create_phan_quyen_nguoi_dung_create_component__WEBPACK_IMPORTED_MODULE_4__["PhanQuyenNguoiDungCreateComponent"],
        data: {
            title: 'Thêm phân quyền người dùng',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].Role,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Add
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
    },
    {
        path: 'chinh-sua/:id',
        component: _phan_quyen_nguoi_dung_update_phan_quyen_nguoi_dung_update_component__WEBPACK_IMPORTED_MODULE_5__["PhanQuyenNguoiDungUpdateComponent"],
        data: {
            title: 'Chỉnh sửa phân quyền người dùng',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].Role,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
    }
];
let PhanQuyenNguoiDungRoutingModule = class PhanQuyenNguoiDungRoutingModule {
};
PhanQuyenNguoiDungRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PhanQuyenNguoiDungRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-shared/phan-quyen-nguoi-dung-shared.component.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-shared/phan-quyen-nguoi-dung-shared.component.scss ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9waGFuLXF1eWVuLW5ndW9pLWR1bmcvcGhhbi1xdXllbi1uZ3VvaS1kdW5nLXNoYXJlZC9waGFuLXF1eWVuLW5ndW9pLWR1bmctc2hhcmVkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-shared/phan-quyen-nguoi-dung-shared.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-shared/phan-quyen-nguoi-dung-shared.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: PhanQuyenNguoiDungSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhanQuyenNguoiDungSharedComponent", function() { return PhanQuyenNguoiDungSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_vex_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/services/navigation.service */ "./src/@vex/services/navigation.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _phan_quyen_nguoi_dung_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../phan-quyen-nguoi-dung.model */ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung.model.ts");
/* harmony import */ var _iconify_icons_ic_twotone_keyboard_arrow_down__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-keyboard-arrow-down */ "./node_modules/@iconify/icons-ic/twotone-keyboard-arrow-down.js");
/* harmony import */ var _iconify_icons_ic_twotone_keyboard_arrow_down__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_keyboard_arrow_down__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _iconify_icons_ic_twotone_keyboard_arrow_up__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/twotone-keyboard-arrow-up */ "./node_modules/@iconify/icons-ic/twotone-keyboard-arrow-up.js");
/* harmony import */ var _iconify_icons_ic_twotone_keyboard_arrow_up__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_keyboard_arrow_up__WEBPACK_IMPORTED_MODULE_18__);



















let PhanQuyenNguoiDungSharedComponent = class PhanQuyenNguoiDungSharedComponent {
    constructor(route, dialog, baseService, navigationService, authService, notificationService, apiService, router) {
        this.route = route;
        this.dialog = dialog;
        this.baseService = baseService;
        this.navigationService = navigationService;
        this.authService = authService;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.router = router;
        this.gridDataSource = {
            data: [],
            total: 0
        };
        this.icArrowDown = _iconify_icons_ic_twotone_keyboard_arrow_down__WEBPACK_IMPORTED_MODULE_17___default.a;
        this.icArrowUp = _iconify_icons_ic_twotone_keyboard_arrow_up__WEBPACK_IMPORTED_MODULE_18___default.a;
        this.gridColumns = [];
        this.phanQuyenNguoiDung = {};
        this.items = this.navigationService.items;
        this.otherDocumentTypes = [];
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"]();
        this.isCreate = true;
        this.isCheckAll = false;
        this.searchTimeout = null;
        this.documentTypeCurrents = [];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__["DocumentType"].Role;
        const id = this.route.snapshot.params.id;
        this.phanQuyenNguoiDung = new _phan_quyen_nguoi_dung_model__WEBPACK_IMPORTED_MODULE_16__["PhanQuyenNguoiDung"]();
        this.gridColumns = [
            { Field: 'Name', Title: 'Chức năng', Width: 200, Template: this.nameTemplate },
            { Field: 'IsView', Title: 'Xem', Width: 100, Template: this.viewTemplate },
            { Field: 'IsInsert', Title: 'Thêm', Width: 100, Template: this.insertTemplate },
            { Field: 'IsUpdate', Title: 'Sửa', Width: 100, Template: this.updateTemplate },
            { Field: 'IsDelete', Title: 'Xóa', Width: 100, Template: this.deleteTemplate },
            { Field: 'IsProcess', Title: 'Xử lý khác', Width: 100, Template: this.processTemplate }
        ];
        this.showPopupLoadingData();
        this.GetDocumentTypeEnum(id);
    }
    showPopupLoadingData() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang tải dữ liệu...' }
        });
    }
    closePopupLoadingData() {
        this.dialog.closeAll();
    }
    GetClassChildName(name, prevClass) {
        const nameRemoveVn = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(name).replace(/ /gi, '_');
        if (prevClass === '') {
            return 'group_' + nameRemoveVn;
        }
        else {
            return prevClass + '_' + nameRemoveVn;
        }
    }
    GetDocumentTypeEnum(id) {
        const self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View)) {
            const responseDocumentType = self.apiService
                .get('PhanQuyenNguoiDung/GetListDocumentType').toPromise();
            responseDocumentType.then(resultDocument => {
                self.GetData(id, resultDocument);
            }).catch(err => {
                self.notificationService.showError(err.Message);
                self.closePopupLoadingData();
                self.phanQuyenNguoiDung.IsDefault = true;
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    getDataSource(resultData) {
        const self = this;
        const dataSource = [];
        let index = 1;
        for (const item0 of self.items.filter(x => x.type !== 'link')) {
            let documentType = new _phan_quyen_nguoi_dung_model__WEBPACK_IMPORTED_MODULE_16__["DocumentTypeList"]();
            documentType = {
                Id: index,
                IsDelete: resultData != null ? self.getStatusSecurityOperation(item0.canViewType, resultData, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Delete) : false,
                IsInsert: resultData != null ? self.getStatusSecurityOperation(item0.canViewType, resultData, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Add) : false,
                IsProcess: resultData != null ? self.getStatusSecurityOperation(item0.canViewType, resultData, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Process) : false,
                IsUpdate: resultData != null ? self.getStatusSecurityOperation(item0.canViewType, resultData, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update) : false,
                IsView: resultData != null ? self.getStatusSecurityOperation(item0.canViewType, resultData, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View) : false,
                DocumentType: item0.canViewType,
                IdParent: null,
                IsCollapse: false,
                Name: item0.label,
                HighLightClass: null,
                Level: 0,
                IsSearch: false,
                IsChange: false
            };
            if (item0.canViewType !== undefined) {
                self.documentTypeCurrents.push(item0.canViewType);
            }
            dataSource.push(documentType);
            const classChildName = self.GetClassChildName(item0.label, '');
            index++;
            if (item0.children != null && item0.children.length > 0) {
                index = self.addDataSource(item0, dataSource, 0, index, classChildName, documentType, resultData);
            }
        }
        self.phanQuyenNguoiDung.DocumentTypes = dataSource;
        self.phanQuyenNguoiDung.DocumentTypesSearchFilter = self.phanQuyenNguoiDung.DocumentTypes; // ngay tu dau se tro chung vung nho
        return dataSource.length;
    }
    addDataSource(item, dataSource, currentLevel, nextIndex, classChildName, documentTypeListParent, resultData) {
        const self = this;
        if (item.children != null && item.children.length > 0) {
            for (const item1 of item.children) {
                let documentType = new _phan_quyen_nguoi_dung_model__WEBPACK_IMPORTED_MODULE_16__["DocumentTypeList"]();
                documentType = {
                    Id: nextIndex,
                    IsDelete: resultData != null ? self.getStatusSecurityOperation(item1.canViewType, resultData, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Delete) : false,
                    IsInsert: resultData != null ? self.getStatusSecurityOperation(item1.canViewType, resultData, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Add) : false,
                    IsProcess: resultData != null ? self.getStatusSecurityOperation(item1.canViewType, resultData, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Process) : false,
                    IsUpdate: resultData != null ? self.getStatusSecurityOperation(item1.canViewType, resultData, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update) : false,
                    IsView: resultData != null ? self.getStatusSecurityOperation(item1.canViewType, resultData, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View) : false,
                    DocumentType: item1.canViewType,
                    IdParent: documentTypeListParent.Id,
                    IsCollapse: false,
                    Name: item1.label,
                    HighLightClass: classChildName,
                    Level: currentLevel + 1,
                    IsSearch: false,
                    IsChange: false
                };
                if (item1.canViewType !== undefined) {
                    this.documentTypeCurrents.push(item1.canViewType);
                }
                dataSource.push(documentType);
                nextIndex++;
                if (item1.children != null && item1.children.length > 0) {
                    const classSubChildName = this.GetClassChildName(item1.label, classChildName);
                    nextIndex = this.addDataSource(item1, dataSource, currentLevel + 1, nextIndex, classSubChildName, documentType, resultData);
                }
            }
            const objIndex = dataSource.findIndex((obj => obj.Id === documentTypeListParent.Id));
            dataSource[objIndex].IsDelete = this.getStatusSecurityOperationForParent(dataSource, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Delete, documentTypeListParent.Id);
            dataSource[objIndex].IsInsert = this.getStatusSecurityOperationForParent(dataSource, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Add, documentTypeListParent.Id);
            dataSource[objIndex].IsProcess = this.getStatusSecurityOperationForParent(dataSource, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Process, documentTypeListParent.Id);
            dataSource[objIndex].IsUpdate = this.getStatusSecurityOperationForParent(dataSource, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update, documentTypeListParent.Id);
            dataSource[objIndex].IsView = this.getStatusSecurityOperationForParent(dataSource, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View, documentTypeListParent.Id);
        }
        return nextIndex;
    }
    getStatusSecurityOperationForParent(documentTypeList, securityOperation, parentId) {
        if (parentId > 0) {
            const result = documentTypeList.filter(item => item.IdParent === parentId);
            if (result != null && result.length > 0) {
                switch (securityOperation) {
                    case src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Add:
                        return result.filter(item => item.IsInsert === true).length === result.length;
                    case src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update:
                        return result.filter(item => item.IsUpdate === true).length === result.length;
                    case src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Delete:
                        return result.filter(item => item.IsDelete === true).length === result.length;
                    case src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View:
                        return result.filter(item => item.IsView === true).length === result.length;
                    case src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Process:
                        return result.filter(item => item.IsProcess === true).length === result.length;
                    default:
                        return false;
                }
            }
        }
        return false;
    }
    getStatusSecurityOperation(documentType, dataSourceFromServer, securityOperation) {
        const result = dataSourceFromServer.DocumentTypes.filter(item => item.DocumentType === documentType);
        if (result != null && result.length > 0) {
            switch (securityOperation) {
                case src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Add:
                    return result[0].IsInsert;
                case src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update:
                    return result[0].IsUpdate;
                case src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Delete:
                    return result[0].IsDelete;
                case src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View:
                    return result[0].IsView;
                case src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Process:
                    return result[0].IsProcess;
                default:
                    return false;
            }
        }
        return false;
    }
    GetData(id, resultDocument) {
        const self = this;
        if (id !== undefined && id !== null) {
            self.getById(id, resultDocument);
            self.isCreate = false;
        }
        else {
            const countQuyen = self.getDataSource(null);
            self.otherDocumentTypes = self.GetOthers(resultDocument);
            self.SetOthers(countQuyen, null);
            self.SetGrid();
            self.WillCheckAll();
        }
    }
    SetOthers(countQuyen, resultData) {
        const self = this;
        countQuyen++;
        const quyenChaId = countQuyen;
        let documentTypeForOtherTitle = new _phan_quyen_nguoi_dung_model__WEBPACK_IMPORTED_MODULE_16__["DocumentTypeList"]();
        documentTypeForOtherTitle = {
            Id: quyenChaId,
            IsDelete: false,
            IsInsert: false,
            IsProcess: false,
            IsUpdate: false,
            IsView: false,
            IsCollapse: false,
            DocumentType: undefined,
            IdParent: null,
            HighLightClass: null,
            Level: 0,
            Name: 'Khác',
            IsSearch: false,
            IsChange: false
        };
        const classParent = self.GetClassChildName('Khác', '');
        self.phanQuyenNguoiDung.DocumentTypes.push(documentTypeForOtherTitle);
        for (const khacItem of self.otherDocumentTypes) {
            countQuyen++;
            let documentTypeForOthers = new _phan_quyen_nguoi_dung_model__WEBPACK_IMPORTED_MODULE_16__["DocumentTypeList"]();
            documentTypeForOthers = {
                Id: countQuyen,
                IsDelete: resultData != null ? self.getStatusSecurityOperation(khacItem.KeyId, resultData, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Delete) : false,
                IsInsert: resultData != null ? self.getStatusSecurityOperation(khacItem.KeyId, resultData, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Add) : false,
                IsProcess: resultData != null ? self.getStatusSecurityOperation(khacItem.KeyId, resultData, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Process) : false,
                IsUpdate: resultData != null ? self.getStatusSecurityOperation(khacItem.KeyId, resultData, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update) : false,
                IsView: resultData != null ? self.getStatusSecurityOperation(khacItem.KeyId, resultData, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View) : false,
                HighLightClass: classParent,
                IsCollapse: false,
                Level: 1,
                DocumentType: khacItem.KeyId,
                IdParent: quyenChaId,
                Name: khacItem.DisplayName,
                IsSearch: false,
                IsChange: false
            };
            self.phanQuyenNguoiDung.DocumentTypes.push(documentTypeForOthers);
        }
        const objIndex = self.phanQuyenNguoiDung.DocumentTypes.findIndex((obj => obj.Id === quyenChaId));
        self.phanQuyenNguoiDung.DocumentTypes[objIndex].IsDelete = this.getStatusSecurityOperationForParent(self.phanQuyenNguoiDung.DocumentTypes, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Delete, quyenChaId);
        self.phanQuyenNguoiDung.DocumentTypes[objIndex].IsInsert = this.getStatusSecurityOperationForParent(self.phanQuyenNguoiDung.DocumentTypes, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Add, quyenChaId);
        self.phanQuyenNguoiDung.DocumentTypes[objIndex].IsProcess = this.getStatusSecurityOperationForParent(self.phanQuyenNguoiDung.DocumentTypes, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Process, quyenChaId);
        self.phanQuyenNguoiDung.DocumentTypes[objIndex].IsUpdate = this.getStatusSecurityOperationForParent(self.phanQuyenNguoiDung.DocumentTypes, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update, quyenChaId);
        self.phanQuyenNguoiDung.DocumentTypes[objIndex].IsView = this.getStatusSecurityOperationForParent(self.phanQuyenNguoiDung.DocumentTypes, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View, quyenChaId);
    }
    GetOthers(listDocumentTypeEnum) {
        let isReceiveForOthers = true;
        const otherDocumentTypes = [];
        for (const documentTypeEnumItem of listDocumentTypeEnum) {
            for (const documentTypeCurrentItem of this.documentTypeCurrents) {
                if (documentTypeEnumItem.KeyId === documentTypeCurrentItem) {
                    isReceiveForOthers = false;
                    break;
                }
            }
            if (isReceiveForOthers) {
                otherDocumentTypes.push(documentTypeEnumItem);
            }
            isReceiveForOthers = true;
        }
        return otherDocumentTypes;
    }
    SetGrid() {
        this.gridDataSource = {
            data: this.phanQuyenNguoiDung.DocumentTypesSearchFilter,
            total: this.phanQuyenNguoiDung.DocumentTypesSearchFilter.length
        };
        if (this.gridPermission !== undefined) {
            this.gridPermission.gridDataSource = this.gridDataSource;
            this.gridPermission.setDataSource();
            if (this.gridDataSource.data.length !== 0 || this.phanQuyenNguoiDung.DocumentTypes.length !== 0) {
                this.closePopupLoadingData();
            }
        }
    }
    getSharedData() {
        if (this.isCreate) {
            this.phanQuyenNguoiDung.Id = 0;
            this.phanQuyenNguoiDung.IsDefault = false;
        }
        else {
            if (this.phanQuyenNguoiDung.Id === null) {
                this.phanQuyenNguoiDung.Id = this.route.snapshot.params.id;
            }
        }
        return this.phanQuyenNguoiDung;
    }
    getById(id, resultDocument) {
        const self = this;
        self.baseService.getById(id).subscribe(resultData => {
            self.phanQuyenNguoiDung.Name = resultData.Name;
            self.phanQuyenNguoiDung.UserType = resultData.UserType;
            self.phanQuyenNguoiDung.UserTypeDisplay = resultData.UserTypeDisplay;
            self.phanQuyenNguoiDung.IsDefault = resultData.IsDefault;
            const countQuyen = self.getDataSource(resultData);
            self.otherDocumentTypes = self.GetOthers(resultDocument);
            self.SetOthers(countQuyen, resultData);
            self.SetGrid();
            self.WillCheckAll();
        });
    }
    ProcessCheckParent() {
        const self = this;
        self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === undefined).forEach(itemParent => {
            itemParent.IsView = false;
            itemParent.IsProcess = false;
            itemParent.IsInsert = false;
            itemParent.IsDelete = false;
            itemParent.IsUpdate = false;
            const countChildForThisParent = self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === itemParent.Id).length;
            if (this.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === itemParent.Id && x.IsView).length ===
                countChildForThisParent) {
                itemParent.IsView = true;
            }
            if (this.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === itemParent.Id && x.IsProcess).length ===
                countChildForThisParent) {
                itemParent.IsProcess = true;
            }
            if (this.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === itemParent.Id && x.IsInsert).length ===
                countChildForThisParent) {
                itemParent.IsInsert = true;
            }
            if (this.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === itemParent.Id && x.IsDelete).length ===
                countChildForThisParent) {
                itemParent.IsDelete = true;
            }
            if (this.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === itemParent.Id && x.IsUpdate).length ===
                countChildForThisParent) {
                itemParent.IsUpdate = true;
            }
        });
    }
    WillCheckAll() {
        const self = this;
        self.isCheckAll = false;
        const numberParents = self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === null).length;
        if (numberParents === self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === null &&
            x.IsView && x.IsProcess && x.IsInsert && x.IsDelete && x.IsUpdate).length) {
            self.isCheckAll = true;
        }
    }
    onKeySearchChanges(key) {
        const self = this;
        if (key.which === 13) {
            self.showPopupLoadingData();
            if (self.searchTimeout != null) {
                clearTimeout(self.searchTimeout);
            }
            // tslint:disable-next-line: only-arrow-functions
            self.searchTimeout = setTimeout(function () {
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IsSearch).forEach(element => {
                    element.IsSearch = false;
                });
                if (self.searchString == null || self.searchString === '') {
                    self.ProcessCheckParent();
                    self.phanQuyenNguoiDung.DocumentTypesSearchFilter = self.phanQuyenNguoiDung.DocumentTypes;
                    self.SetGrid();
                }
                else {
                    self.searchString = self.searchString.trim();
                    const itemNavSearch = self.search();
                    self.phanQuyenNguoiDung.DocumentTypesSearchFilter = self.ChangeModelFromSearch(itemNavSearch);
                    const others = self.GetOthersFromAvailableDocumentType(self.phanQuyenNguoiDung.DocumentTypes);
                    self.FilterOtherFromSearch(others);
                    self.SetGrid();
                }
            }, 500);
        }
    }
    GetOthersFromAvailableDocumentType(availableDocumentTypes) {
        const self = this;
        const result = availableDocumentTypes.filter(x => x.DocumentType === undefined &&
            x.HighLightClass === null && x.IdParent === null).reverse();
        let dataSource = [];
        if (result != null && result.length > 0) {
            dataSource = self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === result[0].Id || x.IdParent === result[0].Id);
        }
        return dataSource;
    }
    FilterOtherFromSearch(others) {
        const self = this;
        let pushParent = false;
        // self.searchString
        for (const level1 of others) {
            if (src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(level1.Name).toLowerCase()
                .indexOf(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(self.searchString).toLowerCase()) >= 0) {
                others.forEach(item => {
                    self.phanQuyenNguoiDung.DocumentTypesSearchFilter.push(item);
                });
                return;
            }
            else {
                if (self.IsDataItemHasChildren(level1, 2)) {
                    for (const itemlevel2 of others.filter(x => x.IdParent === level1.Id)) {
                        if (src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(itemlevel2.Name).toLowerCase()
                            .indexOf(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(self.searchString).toLowerCase()) >= 0) {
                            if (pushParent === false) {
                                self.phanQuyenNguoiDung.DocumentTypesSearchFilter.push(level1);
                                pushParent = true;
                            }
                            self.phanQuyenNguoiDung.DocumentTypesSearchFilter.push(itemlevel2);
                        }
                    }
                }
                return;
            }
        }
    }
    searchChanges(dataEvent) {
        const self = this;
        if (dataEvent === '') {
            self.showPopupLoadingData();
            if (self.searchTimeout != null) {
                clearTimeout(self.searchTimeout);
            }
            // tslint:disable-next-line: only-arrow-functions
            self.searchTimeout = setTimeout(function () {
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IsSearch).forEach(element => {
                    element.IsSearch = false;
                });
                self.ProcessCheckParent();
                self.phanQuyenNguoiDung.DocumentTypesSearchFilter = self.phanQuyenNguoiDung.DocumentTypes;
                self.SetGrid();
            }, 500);
        }
    }
    search() {
        const self = this;
        const itemResults = [];
        self.items.forEach(itemlevel1 => {
            const itemlevel1Copy = Object.assign({}, itemlevel1);
            if (src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(itemlevel1.label).toLowerCase()
                .indexOf(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(self.searchString).toLowerCase()) >= 0) {
                itemResults.push(itemlevel1Copy);
            }
            else {
                if (itemlevel1.children != null && itemlevel1.children.length > 0) {
                    itemlevel1Copy.children = [];
                    itemlevel1.children.forEach(itemlevel2 => {
                        if (src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(itemlevel2.label).toLowerCase()
                            .indexOf(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(self.searchString).toLowerCase()) >= 0) {
                            if (itemlevel1Copy.children.filter(obj => obj.label === itemlevel2.label
                                && obj.type === itemlevel2.type && obj.canViewType === itemlevel2.canViewType).length <= 0) {
                                itemlevel1Copy.children.push(itemlevel2);
                            }
                            if (itemResults.filter(obj => obj.label === itemlevel1Copy.label &&
                                obj.type === itemlevel1Copy.type && obj.canViewType === itemlevel1Copy.canViewType).length <= 0) {
                                itemResults.push(itemlevel1Copy);
                            }
                        }
                        else {
                            if (itemlevel2.children != null && itemlevel2.children.length > 0) {
                                const itemlevel2Copy = Object.assign({}, itemlevel2);
                                itemlevel2Copy.children = [];
                                itemlevel2.children.forEach(itemlevel3 => {
                                    if (src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(itemlevel3.label).toLowerCase()
                                        .indexOf(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(self.searchString).toLowerCase()) >= 0) {
                                        if (itemlevel2Copy.children.filter(obj => obj.label === itemlevel3.label
                                            && obj.type === itemlevel3.type && obj.canViewType === itemlevel3.canViewType).length <= 0) {
                                            itemlevel2Copy.children.push(itemlevel3);
                                        }
                                        if (itemlevel1Copy.children.filter(obj => obj.label === itemlevel2Copy.label
                                            && obj.type === itemlevel2Copy.type &&
                                            obj.canViewType === itemlevel2Copy.canViewType).length <= 0) {
                                            itemlevel1Copy.children.push(itemlevel2Copy);
                                        }
                                        if (itemResults.filter(obj => obj.label === itemlevel1Copy.label &&
                                            obj.type === itemlevel1Copy.type &&
                                            obj.canViewType === itemlevel1Copy.canViewType).length <= 0) {
                                            itemResults.push(itemlevel1Copy);
                                        }
                                    }
                                    else {
                                        if (itemlevel3.children != null && itemlevel3.children.length > 0) {
                                            const itemlevel3Copy = Object.assign({}, itemlevel3);
                                            itemlevel3Copy.children = [];
                                            itemlevel3.children.forEach(itemlevel4 => {
                                                if (src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(itemlevel4.label)
                                                    .toLowerCase().indexOf(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(self.searchString).toLowerCase()) >= 0) {
                                                    if (itemlevel3Copy.children.filter(obj => obj.label === itemlevel4.label &&
                                                        obj.type === itemlevel4.type &&
                                                        obj.canViewType === itemlevel4.canViewType).length <= 0) {
                                                        itemlevel3Copy.children.push(itemlevel4);
                                                    }
                                                    if (itemlevel2Copy.children.filter(obj => obj.label === itemlevel3Copy.label &&
                                                        obj.type === itemlevel3Copy.type &&
                                                        obj.canViewType === itemlevel3Copy.canViewType).length <= 0) {
                                                        itemlevel2Copy.children.push(itemlevel3Copy);
                                                    }
                                                    if (itemlevel1Copy.children.filter(obj => obj.label === itemlevel2Copy.label &&
                                                        obj.type === itemlevel2Copy.type &&
                                                        obj.canViewType === itemlevel2Copy.canViewType).length <= 0) {
                                                        itemlevel1Copy.children.push(itemlevel2Copy);
                                                    }
                                                    if (itemResults.filter(obj => obj.label === itemlevel1Copy.label &&
                                                        obj.type === itemlevel1Copy.type &&
                                                        obj.canViewType === itemlevel1Copy.canViewType).length <= 0) {
                                                        itemResults.push(itemlevel1Copy);
                                                    }
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                        }
                    });
                }
            }
        });
        return itemResults;
    }
    ChangeModelFromSearch(itemNavSearch) {
        const self = this;
        const dataSource = [];
        for (const item0 of itemNavSearch.filter(x => x.type !== 'link')) {
            let documentType = new _phan_quyen_nguoi_dung_model__WEBPACK_IMPORTED_MODULE_16__["DocumentTypeList"]();
            documentType = {
                Id: self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Name === item0.label && x.Level === 0)[0].Id,
                IsDelete: self.getStatusSecurityOperation(item0.canViewType, self.phanQuyenNguoiDung, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Delete),
                IsInsert: self.getStatusSecurityOperation(item0.canViewType, self.phanQuyenNguoiDung, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Add),
                IsProcess: self.getStatusSecurityOperation(item0.canViewType, self.phanQuyenNguoiDung, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Process),
                IsUpdate: self.getStatusSecurityOperation(item0.canViewType, self.phanQuyenNguoiDung, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update),
                IsView: self.getStatusSecurityOperation(item0.canViewType, self.phanQuyenNguoiDung, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View),
                DocumentType: item0.canViewType,
                IdParent: self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Name === item0.label && x.Level === 0)[0].IdParent,
                IsCollapse: false,
                Name: item0.label,
                HighLightClass: null,
                Level: 0,
                IsSearch: false,
                IsChange: false
            };
            dataSource.push(documentType);
            const classChildName = self.GetClassChildName(item0.label, '');
            if (item0.children != null && item0.children.length > 0) {
                self.AddChildrenFromSearch(item0, dataSource, 0, classChildName, documentType);
            }
        }
        return dataSource;
    }
    AddChildrenFromSearch(item, dataSource, currentLevel, classChildName, documentTypeListParent) {
        const self = this;
        if (item.children != null && item.children.length > 0) {
            for (const item1 of item.children) {
                let documentType = new _phan_quyen_nguoi_dung_model__WEBPACK_IMPORTED_MODULE_16__["DocumentTypeList"]();
                documentType = {
                    Id: self.phanQuyenNguoiDung.DocumentTypes.
                        filter(x => x.Name === item1.label && x.HighLightClass === classChildName)[0].Id,
                    IsDelete: self.getStatusSecurityOperation(item1.canViewType, self.phanQuyenNguoiDung, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Delete),
                    IsInsert: self.getStatusSecurityOperation(item1.canViewType, self.phanQuyenNguoiDung, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Add),
                    IsProcess: self.getStatusSecurityOperation(item1.canViewType, self.phanQuyenNguoiDung, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Process),
                    IsUpdate: self.getStatusSecurityOperation(item1.canViewType, self.phanQuyenNguoiDung, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update),
                    IsView: self.getStatusSecurityOperation(item1.canViewType, self.phanQuyenNguoiDung, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View),
                    DocumentType: item1.canViewType,
                    IdParent: self.phanQuyenNguoiDung.DocumentTypes.
                        filter(x => x.Name === item1.label && x.HighLightClass === classChildName)[0].IdParent,
                    IsCollapse: false,
                    Name: item1.label,
                    HighLightClass: classChildName,
                    Level: currentLevel + 1,
                    IsSearch: false,
                    IsChange: false
                };
                dataSource.push(documentType);
                if (item1.children != null && item1.children.length > 0) {
                    const classSubChildName = self.GetClassChildName(item1.label, classChildName);
                    self.AddChildrenFromSearch(item1, dataSource, currentLevel + 1, classSubChildName, documentType);
                }
            }
            const objIndex = dataSource.findIndex((obj => obj.Id === documentTypeListParent.Id));
            dataSource[objIndex].IsDelete = self.getStatusSecurityOperationForParent(dataSource, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Delete, documentTypeListParent.Id);
            dataSource[objIndex].IsInsert = self.getStatusSecurityOperationForParent(dataSource, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Add, documentTypeListParent.Id);
            dataSource[objIndex].IsProcess = self.getStatusSecurityOperationForParent(dataSource, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Process, documentTypeListParent.Id);
            dataSource[objIndex].IsUpdate = self.getStatusSecurityOperationForParent(dataSource, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update, documentTypeListParent.Id);
            dataSource[objIndex].IsView = self.getStatusSecurityOperationForParent(dataSource, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View, documentTypeListParent.Id);
        }
    }
    CheckAll(dataCheck) {
        if (dataCheck) {
            this.phanQuyenNguoiDung.DocumentTypes.forEach(element => {
                element.IsDelete = true;
                element.IsInsert = true;
                element.IsProcess = true;
                element.IsUpdate = true;
                element.IsView = true;
                element.IsChange = true;
            });
            this.phanQuyenNguoiDung.DocumentTypesSearchFilter.forEach(element => {
                element.IsDelete = true;
                element.IsInsert = true;
                element.IsProcess = true;
                element.IsUpdate = true;
                element.IsView = true;
                element.IsChange = true;
            });
        }
        else {
            this.phanQuyenNguoiDung.DocumentTypes.forEach(element => {
                element.IsDelete = false;
                element.IsInsert = false;
                element.IsProcess = false;
                element.IsUpdate = false;
                element.IsView = false;
                element.IsChange = true;
            });
            this.phanQuyenNguoiDung.DocumentTypesSearchFilter.forEach(element => {
                element.IsDelete = false;
                element.IsInsert = false;
                element.IsProcess = false;
                element.IsUpdate = false;
                element.IsView = false;
                element.IsChange = true;
            });
        }
    }
    OnChangeParentOnView(dataCheck, id, item) {
        const self = this;
        item.IsView = dataCheck;
        item.IsChange = true;
        const numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === item.IdParent).length;
        if (dataCheck) {
            let willCheckParent = false;
            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === item.IdParent && !x.IsView).length === 0) {
                willCheckParent = true;
                for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === item.IdParent)) {
                    documentTypeItem.IsView = willCheckParent;
                    if (documentTypeItem.IdParent !== null) {
                        self.OnCheckGrandParent(willCheckParent, documentTypeItem, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View);
                    }
                }
            }
            self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === id).forEach(element => {
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsView = true;
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsChange = true;
                element.IsView = true;
                element.IsChange = true;
                if (self.IsDataItemHasChildren(element, 1)) {
                    self.OnChangeParentOnView(true, element.Id, element);
                }
            });
        }
        else {
            let willUncheckParent = true;
            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.
                filter(x => x.IdParent === item.IdParent && x.IsView).length !== numChild) {
                willUncheckParent = false;
                for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === item.IdParent)) {
                    documentTypeItem.IsView = willUncheckParent;
                    if (documentTypeItem.IdParent !== null) {
                        self.OnCheckGrandParent(willUncheckParent, documentTypeItem, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View);
                    }
                }
            }
            self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === id).forEach(element => {
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsView = false;
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsChange = true;
                element.IsView = false;
                element.IsChange = true;
                if (self.IsDataItemHasChildren(element, 1)) {
                    self.OnChangeParentOnView(false, element.Id, element);
                }
            });
        }
        self.WillCheckAll();
    }
    OnCheckGrandParent(dataCheck, item, securityOperation) {
        const self = this;
        const numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === item.IdParent).length;
        if (dataCheck) {
            let willCheckParent = false;
            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === item.IdParent && !x.IsView).length === 0) {
                willCheckParent = true;
                for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === item.IdParent)) {
                    switch (securityOperation) {
                        case src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View: {
                            documentTypeItem.IsView = willCheckParent;
                            if (documentTypeItem.IdParent !== null) {
                                self.OnCheckGrandParent(willCheckParent, documentTypeItem, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View);
                            }
                            break;
                        }
                        case src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update: {
                            documentTypeItem.IsUpdate = willCheckParent;
                            if (documentTypeItem.IdParent !== null) {
                                self.OnCheckGrandParent(willCheckParent, documentTypeItem, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update);
                            }
                            break;
                        }
                        case src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Delete: {
                            documentTypeItem.IsDelete = willCheckParent;
                            if (documentTypeItem.IdParent !== null) {
                                self.OnCheckGrandParent(willCheckParent, documentTypeItem, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Delete);
                            }
                            break;
                        }
                        case src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Add: {
                            documentTypeItem.IsInsert = willCheckParent;
                            if (documentTypeItem.IdParent !== null) {
                                self.OnCheckGrandParent(willCheckParent, documentTypeItem, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Add);
                            }
                            break;
                        }
                        default: {
                            documentTypeItem.IsProcess = willCheckParent;
                            if (documentTypeItem.IdParent !== null) {
                                self.OnCheckGrandParent(willCheckParent, documentTypeItem, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Process);
                            }
                            break;
                        }
                    }
                }
            }
        }
        else {
            let willUncheckParent = true;
            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent ===
                item.IdParent && x.IsView).length !== numChild) {
                willUncheckParent = false;
                for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === item.IdParent)) {
                    switch (securityOperation) {
                        case src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View: {
                            documentTypeItem.IsView = willUncheckParent;
                            if (documentTypeItem.IdParent !== null) {
                                self.OnCheckGrandParent(willUncheckParent, documentTypeItem, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View);
                            }
                            break;
                        }
                        case src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Delete: {
                            documentTypeItem.IsDelete = willUncheckParent;
                            if (documentTypeItem.IdParent !== null) {
                                self.OnCheckGrandParent(willUncheckParent, documentTypeItem, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Delete);
                            }
                            break;
                        }
                        case src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update: {
                            documentTypeItem.IsUpdate = willUncheckParent;
                            if (documentTypeItem.IdParent !== null) {
                                self.OnCheckGrandParent(willUncheckParent, documentTypeItem, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update);
                            }
                            break;
                        }
                        case src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Add: {
                            documentTypeItem.IsInsert = willUncheckParent;
                            if (documentTypeItem.IdParent !== null) {
                                self.OnCheckGrandParent(willUncheckParent, documentTypeItem, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Add);
                            }
                            break;
                        }
                        default: {
                            documentTypeItem.IsProcess = willUncheckParent;
                            if (documentTypeItem.IdParent !== null) {
                                self.OnCheckGrandParent(willUncheckParent, documentTypeItem, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Process);
                            }
                            break;
                        }
                    }
                }
            }
        }
    }
    OnChangeParentOnInsert(dataCheck, id, item) {
        const self = this;
        item.IsInsert = dataCheck;
        item.IsChange = true;
        const numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === item.IdParent).length;
        if (dataCheck) {
            let willCheckParent = false;
            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === item.IdParent && !x.IsInsert).length === 0) {
                willCheckParent = true;
                for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === item.IdParent)) {
                    documentTypeItem.IsInsert = willCheckParent;
                    if (documentTypeItem.IdParent !== null) {
                        self.OnCheckGrandParent(willCheckParent, documentTypeItem, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Add);
                    }
                }
            }
            self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === id).forEach(element => {
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsInsert = true;
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsChange = true;
                element.IsInsert = true;
                element.IsChange = true;
                if (self.IsDataItemHasChildren(element, 1)) {
                    self.OnChangeParentOnInsert(true, element.Id, element);
                }
            });
        }
        else {
            let willUncheckParent = true;
            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.
                filter(x => x.IdParent === item.IdParent && x.IsInsert).length !== numChild) {
                willUncheckParent = false;
                for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === item.IdParent)) {
                    documentTypeItem.IsInsert = willUncheckParent;
                    if (documentTypeItem.IdParent !== null) {
                        self.OnCheckGrandParent(willUncheckParent, documentTypeItem, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Add);
                    }
                }
            }
            self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === id).forEach(element => {
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsInsert = false;
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsChange = true;
                element.IsInsert = false;
                element.IsChange = true;
                if (self.IsDataItemHasChildren(element, 1)) {
                    self.OnChangeParentOnInsert(false, element.Id, element);
                }
            });
        }
        self.WillCheckAll();
    }
    OnChangeParentOnUpdate(dataCheck, id, item) {
        const self = this;
        item.IsUpdate = dataCheck;
        item.IsChange = true;
        const numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === item.IdParent).length;
        if (dataCheck) {
            let willCheckParent = false;
            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === item.IdParent && !x.IsUpdate).length === 0) {
                willCheckParent = true;
                for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === item.IdParent)) {
                    documentTypeItem.IsUpdate = willCheckParent;
                    if (documentTypeItem.IdParent !== null) {
                        self.OnCheckGrandParent(willCheckParent, documentTypeItem, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update);
                    }
                }
            }
            self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === id).forEach(element => {
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsUpdate = true;
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsChange = true;
                element.IsUpdate = true;
                element.IsChange = true;
                if (self.IsDataItemHasChildren(element, 1)) {
                    self.OnChangeParentOnUpdate(true, element.Id, element);
                }
            });
        }
        else {
            let willUncheckParent = true;
            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.
                filter(x => x.IdParent === item.IdParent && x.IsUpdate).length !== numChild) {
                willUncheckParent = false;
                for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === item.IdParent)) {
                    documentTypeItem.IsUpdate = willUncheckParent;
                    if (documentTypeItem.IdParent !== null) {
                        self.OnCheckGrandParent(willUncheckParent, documentTypeItem, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update);
                    }
                }
            }
            self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === id).forEach(element => {
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsUpdate = false;
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsChange = true;
                element.IsUpdate = false;
                element.IsChange = true;
                if (self.IsDataItemHasChildren(element, 1)) {
                    self.OnChangeParentOnUpdate(false, element.Id, element);
                }
            });
        }
        self.WillCheckAll();
    }
    OnChangeParentOnDelete(dataCheck, id, item) {
        const self = this;
        item.IsDelete = dataCheck;
        item.IsChange = true;
        const numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === item.IdParent).length;
        if (dataCheck) {
            let willCheckParent = false;
            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === item.IdParent && !x.IsDelete).length === 0) {
                willCheckParent = true;
                for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === item.IdParent)) {
                    documentTypeItem.IsDelete = willCheckParent;
                    if (documentTypeItem.IdParent !== null) {
                        self.OnCheckGrandParent(willCheckParent, documentTypeItem, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View);
                    }
                }
            }
            self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === id).forEach(element => {
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsDelete = true;
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsChange = true;
                element.IsDelete = true;
                element.IsChange = true;
                if (self.IsDataItemHasChildren(element, 1)) {
                    self.OnChangeParentOnDelete(true, element.Id, element);
                }
            });
        }
        else {
            let willUncheckParent = true;
            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.
                filter(x => x.IdParent === item.IdParent && x.IsDelete).length !== numChild) {
                willUncheckParent = false;
                for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === item.IdParent)) {
                    documentTypeItem.IsDelete = willUncheckParent;
                    if (documentTypeItem.IdParent !== null) {
                        self.OnCheckGrandParent(willUncheckParent, documentTypeItem, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View);
                    }
                }
            }
            self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === id).forEach(element => {
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsDelete = false;
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsChange = true;
                element.IsDelete = false;
                element.IsChange = true;
                if (self.IsDataItemHasChildren(element, 1)) {
                    self.OnChangeParentOnDelete(false, element.Id, element);
                }
            });
        }
        self.WillCheckAll();
    }
    OnChangeParentOnProcess(dataCheck, id, item) {
        const self = this;
        item.IsProcess = dataCheck;
        item.IsChange = true;
        const numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === item.IdParent).length;
        if (dataCheck) {
            let willCheckParent = false;
            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === item.IdParent && !x.IsProcess).length === 0) {
                willCheckParent = true;
                for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === item.IdParent)) {
                    documentTypeItem.IsProcess = willCheckParent;
                    if (documentTypeItem.IdParent !== null) {
                        self.OnCheckGrandParent(willCheckParent, documentTypeItem, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View);
                    }
                }
            }
            self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === id).forEach(element => {
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsProcess = true;
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsChange = true;
                element.IsProcess = true;
                element.IsChange = true;
                if (self.IsDataItemHasChildren(element, 1)) {
                    self.OnChangeParentOnProcess(true, element.Id, element);
                }
            });
        }
        else {
            let willUncheckParent = true;
            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.
                filter(x => x.IdParent === item.IdParent && x.IsProcess).length !== numChild) {
                willUncheckParent = false;
                for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === item.IdParent)) {
                    documentTypeItem.IsProcess = willUncheckParent;
                    if (documentTypeItem.IdParent !== null) {
                        self.OnCheckGrandParent(willUncheckParent, documentTypeItem, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View);
                    }
                }
            }
            self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === id).forEach(element => {
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsProcess = false;
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsChange = true;
                element.IsProcess = false;
                element.IsChange = true;
                if (self.IsDataItemHasChildren(element, 1)) {
                    self.OnChangeParentOnProcess(false, element.Id, element);
                }
            });
        }
        self.WillCheckAll();
    }
    OnChangeChildrenOnView(dataCheck, idParent, item) {
        item.IsView = dataCheck;
        item.IsChange = true;
        const self = this;
        const numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === idParent).length;
        if (dataCheck) {
            let willCheckParent = false;
            if (self.phanQuyenNguoiDung.DocumentTypes.length !== self.phanQuyenNguoiDung.DocumentTypesSearchFilter.length) {
                // in search mode
                if (item.DocumentType !== undefined) {
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsView = dataCheck;
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsChange = true;
                }
                if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === idParent && !x.IsView).length === 0) {
                    willCheckParent = true;
                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsView = willCheckParent;
                        if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter
                            .filter(x => x.IdParent === documentTypeItem.IdParent && !x.IsView).length === 0) {
                            self.OnChangeChildrenOnView(willCheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            }
            else {
                if (self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === idParent && !x.IsView).length === 0) {
                    willCheckParent = true;
                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsView = willCheckParent;
                        if (self.phanQuyenNguoiDung.DocumentTypes
                            .filter(x => x.IdParent === documentTypeItem.IdParent && !x.IsView).length === 0) {
                            self.OnChangeChildrenOnView(willCheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            }
        }
        else {
            let willUncheckParent = true;
            if (self.phanQuyenNguoiDung.DocumentTypes.length !== self.phanQuyenNguoiDung.DocumentTypesSearchFilter.length) {
                // in search mode
                if (item.DocumentType !== undefined) {
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsView = dataCheck;
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsChange = true;
                }
                if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === idParent && x.IsView).length !== numChild) {
                    willUncheckParent = false;
                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsView = willUncheckParent;
                        const numChildForThisParent = self.phanQuyenNguoiDung
                            .DocumentTypesSearchFilter.filter(x => x.IdParent === documentTypeItem.IdParent).length;
                        if (self.phanQuyenNguoiDung
                            .DocumentTypes.filter(x => x.IdParent === documentTypeItem.IdParent && x.IsView).length
                            !== numChildForThisParent && documentTypeItem.IdParent !== null) {
                            self.OnChangeChildrenOnView(willUncheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            }
            else {
                if (self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === idParent && x.IsView).length !== numChild) {
                    willUncheckParent = false;
                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsView = willUncheckParent;
                        const numChildForThisParent = self.phanQuyenNguoiDung
                            .DocumentTypes.filter(x => x.IdParent === documentTypeItem.IdParent).length;
                        if (self.phanQuyenNguoiDung
                            .DocumentTypes.filter(x => x.IdParent === documentTypeItem.IdParent && x.IsView).length
                            !== numChildForThisParent && documentTypeItem.IdParent !== null) {
                            self.OnChangeChildrenOnView(willUncheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            }
        }
        self.WillCheckAll();
    }
    OnChangeChildrenOnInsert(dataCheck, idParent, item) {
        item.IsInsert = dataCheck;
        item.IsChange = true;
        const self = this;
        const numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === idParent).length;
        if (dataCheck) {
            let willCheckParent = false;
            if (self.phanQuyenNguoiDung.DocumentTypes.length !== self.phanQuyenNguoiDung.DocumentTypesSearchFilter.length) {
                // in search mode
                if (item.DocumentType !== undefined) {
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsInsert = dataCheck;
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsChange = true;
                }
                if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === idParent && !x.IsInsert).length === 0) {
                    willCheckParent = true;
                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsInsert = willCheckParent;
                        if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter
                            .filter(x => x.IdParent === documentTypeItem.IdParent && !x.IsInsert).length === 0) {
                            self.OnChangeChildrenOnInsert(willCheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            }
            else {
                if (self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === idParent && !x.IsInsert).length === 0) {
                    willCheckParent = true;
                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsInsert = willCheckParent;
                        if (self.phanQuyenNguoiDung.DocumentTypes
                            .filter(x => x.IdParent === documentTypeItem.IdParent && !x.IsInsert).length === 0) {
                            self.OnChangeChildrenOnInsert(willCheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            }
        }
        else {
            let willUncheckParent = true;
            if (self.phanQuyenNguoiDung.DocumentTypes.length !== self.phanQuyenNguoiDung.DocumentTypesSearchFilter.length) {
                // in search mode
                if (item.DocumentType !== undefined) {
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsInsert = dataCheck;
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsChange = true;
                }
                if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === idParent && x.IsInsert).length !== numChild) {
                    willUncheckParent = false;
                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsInsert = willUncheckParent;
                        const numChildForThisParent = self.phanQuyenNguoiDung
                            .DocumentTypesSearchFilter.filter(x => x.IdParent === documentTypeItem.IdParent).length;
                        if (self.phanQuyenNguoiDung
                            .DocumentTypes.filter(x => x.IdParent === documentTypeItem.IdParent && x.IsInsert).length
                            !== numChildForThisParent && documentTypeItem.IdParent !== null) {
                            self.OnChangeChildrenOnInsert(willUncheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            }
            else {
                if (self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === idParent && x.IsInsert).length !== numChild) {
                    willUncheckParent = false;
                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsInsert = willUncheckParent;
                        const numChildForThisParent = self.phanQuyenNguoiDung
                            .DocumentTypes.filter(x => x.IdParent === documentTypeItem.IdParent).length;
                        if (self.phanQuyenNguoiDung
                            .DocumentTypes.filter(x => x.IdParent === documentTypeItem.IdParent &&
                            x.IsInsert).length !== numChildForThisParent
                            && documentTypeItem.IdParent !== null) {
                            self.OnChangeChildrenOnInsert(willUncheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            }
        }
        self.WillCheckAll();
    }
    OnChangeChildrenOnUpdate(dataCheck, idParent, item) {
        item.IsUpdate = dataCheck;
        item.IsChange = true;
        const self = this;
        const numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === idParent).length;
        if (dataCheck) {
            let willCheckParent = false;
            if (self.phanQuyenNguoiDung.DocumentTypes.length !== self.phanQuyenNguoiDung.DocumentTypesSearchFilter.length) {
                // in search mode
                if (item.DocumentType !== undefined) {
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsUpdate = dataCheck;
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsChange = true;
                }
                if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === idParent && !x.IsUpdate).length === 0) {
                    willCheckParent = true;
                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsUpdate = willCheckParent;
                        if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter
                            .filter(x => x.IdParent === documentTypeItem.IdParent && !x.IsUpdate).length === 0) {
                            self.OnChangeChildrenOnUpdate(willCheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            }
            else {
                if (self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === idParent && !x.IsUpdate).length === 0) {
                    willCheckParent = true;
                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsUpdate = willCheckParent;
                        if (self.phanQuyenNguoiDung.DocumentTypes
                            .filter(x => x.IdParent === documentTypeItem.IdParent && !x.IsUpdate).length === 0) {
                            self.OnChangeChildrenOnUpdate(willCheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            }
        }
        else {
            let willUncheckParent = true;
            if (self.phanQuyenNguoiDung.DocumentTypes.length !== self.phanQuyenNguoiDung.DocumentTypesSearchFilter.length) {
                // in search mode
                if (item.DocumentType !== undefined) {
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsUpdate = dataCheck;
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsChange = true;
                }
                if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === idParent && x.IsUpdate).length !== numChild) {
                    willUncheckParent = false;
                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsUpdate = willUncheckParent;
                        const numChildForThisParent = self.phanQuyenNguoiDung
                            .DocumentTypesSearchFilter.filter(x => x.IdParent === documentTypeItem.IdParent).length;
                        if (self.phanQuyenNguoiDung
                            .DocumentTypes.filter(x => x.IdParent === documentTypeItem.IdParent && x.IsUpdate).length
                            !== numChildForThisParent && documentTypeItem.IdParent !== null) {
                            self.OnChangeChildrenOnUpdate(willUncheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            }
            else {
                if (self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === idParent && x.IsUpdate).length !== numChild) {
                    willUncheckParent = false;
                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsUpdate = willUncheckParent;
                        const numChildForThisParent = self.phanQuyenNguoiDung
                            .DocumentTypes.filter(x => x.IdParent === documentTypeItem.IdParent).length;
                        if (self.phanQuyenNguoiDung
                            .DocumentTypes.filter(x => x.IdParent === documentTypeItem.IdParent &&
                            x.IsUpdate).length !== numChildForThisParent
                            && documentTypeItem.IdParent !== null) {
                            self.OnChangeChildrenOnUpdate(willUncheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            }
        }
        self.WillCheckAll();
    }
    OnChangeChildrenOnDelete(dataCheck, idParent, item) {
        item.IsDelete = dataCheck;
        item.IsChange = true;
        const self = this;
        const numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === idParent).length;
        if (dataCheck) {
            let willCheckParent = false;
            if (self.phanQuyenNguoiDung.DocumentTypes.length !== self.phanQuyenNguoiDung.DocumentTypesSearchFilter.length) {
                // in search mode
                if (item.DocumentType !== undefined) {
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsDelete = dataCheck;
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsChange = true;
                }
                if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === idParent && !x.IsDelete).length === 0) {
                    willCheckParent = true;
                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsDelete = willCheckParent;
                        if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter
                            .filter(x => x.IdParent === documentTypeItem.IdParent && !x.IsDelete).length === 0) {
                            self.OnChangeChildrenOnDelete(willCheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            }
            else {
                if (self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === idParent && !x.IsDelete).length === 0) {
                    willCheckParent = true;
                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsDelete = willCheckParent;
                        if (self.phanQuyenNguoiDung.DocumentTypes
                            .filter(x => x.IdParent === documentTypeItem.IdParent && !x.IsDelete).length === 0) {
                            self.OnChangeChildrenOnDelete(willCheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            }
        }
        else {
            let willUncheckParent = true;
            if (self.phanQuyenNguoiDung.DocumentTypes.length !== self.phanQuyenNguoiDung.DocumentTypesSearchFilter.length) {
                // in search mode
                if (item.DocumentType !== undefined) {
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsDelete = dataCheck;
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsChange = true;
                }
                if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === idParent && x.IsDelete).length !== numChild) {
                    willUncheckParent = false;
                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsDelete = willUncheckParent;
                        const numChildForThisParent = self.phanQuyenNguoiDung
                            .DocumentTypesSearchFilter.filter(x => x.IdParent === documentTypeItem.IdParent).length;
                        if (self.phanQuyenNguoiDung
                            .DocumentTypes.filter(x => x.IdParent === documentTypeItem.IdParent && x.IsDelete).length
                            !== numChildForThisParent && documentTypeItem.IdParent !== null) {
                            self.OnChangeChildrenOnDelete(willUncheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            }
            else {
                if (self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === idParent && x.IsDelete).length !== numChild) {
                    willUncheckParent = false;
                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsDelete = willUncheckParent;
                        const numChildForThisParent = self.phanQuyenNguoiDung
                            .DocumentTypes.filter(x => x.IdParent === documentTypeItem.IdParent).length;
                        if (self.phanQuyenNguoiDung
                            .DocumentTypes.filter(x => x.IdParent === documentTypeItem.IdParent &&
                            x.IsDelete).length !== numChildForThisParent
                            && documentTypeItem.IdParent !== null) {
                            self.OnChangeChildrenOnDelete(willUncheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            }
        }
        self.WillCheckAll();
    }
    OnChangeChildrenOnProcess(dataCheck, idParent, item) {
        item.IsProcess = dataCheck;
        item.IsChange = true;
        const self = this;
        const numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === idParent).length;
        if (dataCheck) {
            let willCheckParent = false;
            if (self.phanQuyenNguoiDung.DocumentTypes.length !== self.phanQuyenNguoiDung.DocumentTypesSearchFilter.length) {
                // in search mode
                if (item.DocumentType !== undefined) {
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsProcess = dataCheck;
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsChange = true;
                }
                if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === idParent && !x.IsProcess).length === 0) {
                    willCheckParent = true;
                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsProcess = willCheckParent;
                        if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter
                            .filter(x => x.IdParent === documentTypeItem.IdParent && !x.IsProcess).length === 0) {
                            self.OnChangeChildrenOnProcess(willCheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            }
            else {
                if (self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === idParent && !x.IsProcess).length === 0) {
                    willCheckParent = true;
                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsProcess = willCheckParent;
                        if (self.phanQuyenNguoiDung.DocumentTypes
                            .filter(x => x.IdParent === documentTypeItem.IdParent && !x.IsProcess).length === 0) {
                            self.OnChangeChildrenOnProcess(willCheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            }
        }
        else {
            let willUncheckParent = true;
            if (self.phanQuyenNguoiDung.DocumentTypes.length !== self.phanQuyenNguoiDung.DocumentTypesSearchFilter.length) {
                // in search mode
                if (item.DocumentType !== undefined) {
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsProcess = dataCheck;
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsChange = true;
                }
                if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === idParent && x.IsProcess).length !== numChild) {
                    willUncheckParent = false;
                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsProcess = willUncheckParent;
                        const numChildForThisParent = self.phanQuyenNguoiDung
                            .DocumentTypesSearchFilter.filter(x => x.IdParent === documentTypeItem.IdParent).length;
                        if (self.phanQuyenNguoiDung
                            .DocumentTypes.filter(x => x.IdParent === documentTypeItem.IdParent && x.IsProcess).length
                            !== numChildForThisParent && documentTypeItem.IdParent !== null) {
                            self.OnChangeChildrenOnProcess(willUncheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            }
            else {
                if (self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === idParent && x.IsProcess).length !== numChild) {
                    willUncheckParent = false;
                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsProcess = willUncheckParent;
                        const numChildForThisParent = self.phanQuyenNguoiDung
                            .DocumentTypes.filter(x => x.IdParent === documentTypeItem.IdParent).length;
                        if (self.phanQuyenNguoiDung
                            .DocumentTypes.filter(x => x.IdParent === documentTypeItem.IdParent &&
                            x.IsProcess).length !== numChildForThisParent
                            && documentTypeItem.IdParent !== null) {
                            self.OnChangeChildrenOnProcess(willUncheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            }
        }
        self.WillCheckAll();
    }
    onUpdated() {
        this.router.navigate(['/danh-muc/phan-quyen-nguoi-dung']);
    }
    collapseData(itemData) {
        const self = this;
        const allLabelParents = [];
        let idParent = itemData.IdParent;
        if (itemData.Level !== 0) {
            for (let i = 0; i < itemData.Level; i++) {
                for (const parentItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === idParent)) {
                    allLabelParents.push(parentItem.Name);
                    idParent = parentItem.IdParent;
                    break;
                }
            }
        }
        let childName = '';
        if (allLabelParents.length !== 0) {
            let parentItem = '';
            allLabelParents.reverse().forEach(parentLabel => {
                if (parentItem === '') {
                    childName = this.GetClassChildName(parentLabel, '');
                }
                else {
                    childName = this.GetClassChildName(parentLabel, childName);
                }
                parentItem = parentLabel;
            });
        }
        const childClassName = this.GetClassChildName(itemData.Name, childName);
        jQuery('.' + childClassName).hide();
        self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.HighLightClass === childClassName).forEach(parentItem => {
            for (const subParentItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === parentItem.Id)) {
                jQuery('.' + subParentItem.HighLightClass).hide();
                if (self.IsDataItemHasChildren(subParentItem, 1)) {
                    for (const subSubParentItem of self.phanQuyenNguoiDung
                        .DocumentTypesSearchFilter.filter(x => x.IdParent === subParentItem.Id)) {
                        jQuery('.' + subSubParentItem.HighLightClass).hide();
                        break;
                    }
                }
            }
        });
        itemData.IsCollapse = !itemData.IsCollapse;
    }
    expandData(itemData) {
        const self = this;
        const allLabelParents = [];
        let idParent = itemData.IdParent;
        if (itemData.Level !== 0) {
            for (let i = 0; i < itemData.Level; i++) {
                for (const parentItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === idParent)) {
                    allLabelParents.push(parentItem.Name);
                    idParent = parentItem.IdParent;
                    break;
                }
            }
        }
        let childName = '';
        if (allLabelParents.length !== 0) {
            let parentItem = '';
            allLabelParents.reverse().forEach(parentLabel => {
                if (parentItem === '') {
                    childName = this.GetClassChildName(parentLabel, '');
                }
                else {
                    childName = this.GetClassChildName(parentLabel, childName);
                }
                parentItem = parentLabel;
            });
        }
        const childClassName = this.GetClassChildName(itemData.Name, childName);
        jQuery('.' + childClassName).show();
        self.CollapseChildrenShow(childClassName);
        itemData.IsCollapse = !itemData.IsCollapse;
    }
    IsDataItemHasChildren(item, kind) {
        // 1: filter
        // others: full
        switch (kind) {
            case 1: {
                return this.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === item.Id).length !== 0;
            }
            default: {
                return this.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === item.Id).length !== 0;
            }
        }
    }
    CollapseChildrenShow(childClassName) {
        this.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.HighLightClass === childClassName).forEach(childrenDocument => {
            childrenDocument.IsCollapse = true;
        });
    }
};
PhanQuyenNguoiDungSharedComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialog"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] },
    { type: src_vex_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nameTemplate', { static: true })
], PhanQuyenNguoiDungSharedComponent.prototype, "nameTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('viewTemplate', { static: true })
], PhanQuyenNguoiDungSharedComponent.prototype, "viewTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('insertTemplate', { static: true })
], PhanQuyenNguoiDungSharedComponent.prototype, "insertTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('updateTemplate', { static: true })
], PhanQuyenNguoiDungSharedComponent.prototype, "updateTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteTemplate', { static: true })
], PhanQuyenNguoiDungSharedComponent.prototype, "deleteTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridPermission', { static: false })
], PhanQuyenNguoiDungSharedComponent.prototype, "gridPermission", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('processTemplate', { static: true })
], PhanQuyenNguoiDungSharedComponent.prototype, "processTemplate", void 0);
PhanQuyenNguoiDungSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-phan-quyen-nguoi-dung-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phan-quyen-nguoi-dung-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-shared/phan-quyen-nguoi-dung-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phan-quyen-nguoi-dung-shared.component.scss */ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-shared/phan-quyen-nguoi-dung-shared.component.scss")).default]
    })
], PhanQuyenNguoiDungSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-update/phan-quyen-nguoi-dung-update.component.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-update/phan-quyen-nguoi-dung-update.component.scss ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9waGFuLXF1eWVuLW5ndW9pLWR1bmcvcGhhbi1xdXllbi1uZ3VvaS1kdW5nLXVwZGF0ZS9waGFuLXF1eWVuLW5ndW9pLWR1bmctdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-update/phan-quyen-nguoi-dung-update.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-update/phan-quyen-nguoi-dung-update.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: PhanQuyenNguoiDungUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhanQuyenNguoiDungUpdateComponent", function() { return PhanQuyenNguoiDungUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PhanQuyenNguoiDungUpdateComponent = class PhanQuyenNguoiDungUpdateComponent {
    constructor() { }
    ngOnInit() {
    }
};
PhanQuyenNguoiDungUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-phan-quyen-nguoi-dung-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phan-quyen-nguoi-dung-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-update/phan-quyen-nguoi-dung-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phan-quyen-nguoi-dung-update.component.scss */ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-update/phan-quyen-nguoi-dung-update.component.scss")).default]
    })
], PhanQuyenNguoiDungUpdateComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung.model.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung.model.ts ***!
  \********************************************************************************************/
/*! exports provided: PhanQuyenNguoiDung, DocumentTypeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhanQuyenNguoiDung", function() { return PhanQuyenNguoiDung; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentTypeList", function() { return DocumentTypeList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class PhanQuyenNguoiDung {
    constructor(Id = null, Name = null, 
    // tslint:disable-next-line: no-shadowed-variable
    UserType = null, UserTypeDisplay = null, IsDefault = null, DocumentTypes = [], DocumentTypesSearchFilter = []) {
        this.Id = Id;
        this.Name = Name;
        this.UserType = UserType;
        this.UserTypeDisplay = UserTypeDisplay;
        this.IsDefault = IsDefault;
        this.DocumentTypes = DocumentTypes;
        this.DocumentTypesSearchFilter = DocumentTypesSearchFilter;
    }
}
class DocumentTypeList {
    constructor(Id = null, Name = null, IsView = null, IsInsert = null, IsUpdate = null, IsDelete = null, IsProcess = null, IsSearch = false, IsChange = false, HighLightClass = null, IsCollapse = false, 
    // tslint:disable-next-line: no-shadowed-variable
    DocumentType = null, Level = null, IdParent = null) {
        this.Id = Id;
        this.Name = Name;
        this.IsView = IsView;
        this.IsInsert = IsInsert;
        this.IsUpdate = IsUpdate;
        this.IsDelete = IsDelete;
        this.IsProcess = IsProcess;
        this.IsSearch = IsSearch;
        this.IsChange = IsChange;
        this.HighLightClass = HighLightClass;
        this.IsCollapse = IsCollapse;
        this.DocumentType = DocumentType;
        this.Level = Level;
        this.IdParent = IdParent;
    }
}


/***/ }),

/***/ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: PhanQuyenNguoiDungModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhanQuyenNguoiDungModule", function() { return PhanQuyenNguoiDungModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var _phan_quyen_nguoi_dung_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./phan-quyen-nguoi-dung.service */ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _phan_quyen_nguoi_dung_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./phan-quyen-nguoi-dung-routing.module */ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-routing.module.ts");
/* harmony import */ var _phan_quyen_nguoi_dung_list_phan_quyen_nguoi_dung_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./phan-quyen-nguoi-dung-list/phan-quyen-nguoi-dung-list.component */ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-list/phan-quyen-nguoi-dung-list.component.ts");
/* harmony import */ var _phan_quyen_nguoi_dung_create_phan_quyen_nguoi_dung_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./phan-quyen-nguoi-dung-create/phan-quyen-nguoi-dung-create.component */ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-create/phan-quyen-nguoi-dung-create.component.ts");
/* harmony import */ var _phan_quyen_nguoi_dung_update_phan_quyen_nguoi_dung_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./phan-quyen-nguoi-dung-update/phan-quyen-nguoi-dung-update.component */ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-update/phan-quyen-nguoi-dung-update.component.ts");
/* harmony import */ var _phan_quyen_nguoi_dung_shared_phan_quyen_nguoi_dung_shared_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./phan-quyen-nguoi-dung-shared/phan-quyen-nguoi-dung-shared.component */ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-shared/phan-quyen-nguoi-dung-shared.component.ts");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
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


























let PhanQuyenNguoiDungModule = class PhanQuyenNguoiDungModule {
};
PhanQuyenNguoiDungModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _phan_quyen_nguoi_dung_list_phan_quyen_nguoi_dung_list_component__WEBPACK_IMPORTED_MODULE_9__["PhanQuyenNguoiDungListComponent"],
            _phan_quyen_nguoi_dung_create_phan_quyen_nguoi_dung_create_component__WEBPACK_IMPORTED_MODULE_10__["PhanQuyenNguoiDungCreateComponent"],
            _phan_quyen_nguoi_dung_update_phan_quyen_nguoi_dung_update_component__WEBPACK_IMPORTED_MODULE_11__["PhanQuyenNguoiDungUpdateComponent"],
            _phan_quyen_nguoi_dung_shared_phan_quyen_nguoi_dung_shared_component__WEBPACK_IMPORTED_MODULE_12__["PhanQuyenNguoiDungSharedComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
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
            _phan_quyen_nguoi_dung_routing_module__WEBPACK_IMPORTED_MODULE_8__["PhanQuyenNguoiDungRoutingModule"]
        ],
        providers: [
            _phan_quyen_nguoi_dung_service__WEBPACK_IMPORTED_MODULE_5__["PhanQuyenNguoiDungService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"], useClass: _phan_quyen_nguoi_dung_service__WEBPACK_IMPORTED_MODULE_5__["PhanQuyenNguoiDungService"] },
        ]
    })
], PhanQuyenNguoiDungModule);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung.service.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: PhanQuyenNguoiDungService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhanQuyenNguoiDungService", function() { return PhanQuyenNguoiDungService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");




let PhanQuyenNguoiDungService = class PhanQuyenNguoiDungService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'PhanQuyenNguoiDung';
    }
};
PhanQuyenNguoiDungService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
PhanQuyenNguoiDungService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PhanQuyenNguoiDungService);



/***/ })

}]);
//# sourceMappingURL=danh-muc-phan-quyen-nguoi-dung-phan-quyen-nguoi-dung-module-es2015.js.map