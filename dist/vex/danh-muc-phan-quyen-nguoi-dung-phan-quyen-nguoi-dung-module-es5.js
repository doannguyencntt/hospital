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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["danh-muc-phan-quyen-nguoi-dung-phan-quyen-nguoi-dung-module"], {
        /***/ "./node_modules/@iconify/icons-ic/twotone-remove-red-eye.js": 
        /*!******************************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/twotone-remove-red-eye.js ***!
          \******************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path opacity=\".3\" d=\"M12 6.5A9.77 9.77 0 0 0 3.18 12c1.65 3.37 5.02 5.5 8.82 5.5s7.17-2.13 8.82-5.5A9.77 9.77 0 0 0 12 6.5zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7.5 12 7.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z\" fill=\"currentColor\"/><path d=\"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 13A9.77 9.77 0 0 1 3.18 12C4.83 8.63 8.21 6.5 12 6.5s7.17 2.13 8.82 5.5A9.77 9.77 0 0 1 12 17.5zm0-10c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zm0 7a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-create/phan-quyen-nguoi-dung-create.component.html": 
        /*!****************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-create/phan-quyen-nguoi-dung-create.component.html ***!
          \****************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n    {Title:'Danh Mục',Path:''}\n    ,{Title:'Phân Quyền Người Dùng',Path:'/danh-muc/phan-quyen-nguoi-dung',Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Thêm Phân Quyền Người Dùng</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-phan-quyen-nguoi-dung-shared>\n                </app-phan-quyen-nguoi-dung-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"create\" (created)=\"onCreated()\">\n                    </app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-list/phan-quyen-nguoi-dung-list.component.html": 
        /*!************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-list/phan-quyen-nguoi-dung-list.component.html ***!
          \************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                  {Title:'Danh Mục', Path:''}\n                  ,{Title:'Phân Quyền Người Dùng', Path:'/danh-muc/phan-quyen-nguoi-dung', Active:true}\n                  ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"/danh-muc/phan-quyen-nguoi-dung\" [gridColumns]=\"gridColumns\"\n                [documentType]=\"documentType\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                #gridPhanQuyenNguoiDung [showExportExcel]=\"true\" (extExportExcel)=\"exportExcel()\">\n            </app-grid>\n            <ng-template #trangThaiTemplate let-dataItem>\n                <span *ngIf=\"dataItem.Quyen == 1\">Phải</span>\n                <span *ngIf=\"dataItem.Quyen != 1\">Không</span>\n            </ng-template>\n            <ng-template #actionTemplate let-dataItem>\n                <button (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\"\n                    mat-icon-button type=\"button\">\n                    <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n                </button>\n                <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <ng-template let-customer=\"customer\" matMenuContent>\n                        <button (click)=\"edit(dataItem.Id)\" mat-menu-item>\n                            <mat-icon [icIcon]=\"icEdit\" *ngIf=\"dataItem.Quyen != 1\"></mat-icon>\n                            <mat-icon [icIcon]=\"icEye\" *ngIf=\"dataItem.Quyen == 1\"></mat-icon>\n                            <span>{{dataItem.Quyen != 1?\"Sửa\":\"Xem\"}}</span>\n                        </button>\n                        <button *ngIf=\"dataItem.Quyen != 1\" (click)=\"delete(dataItem.Id)\" mat-menu-item>\n                            <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                            <span>Xóa</span>\n                        </button>\n                    </ng-template>\n                </mat-menu>\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-shared/phan-quyen-nguoi-dung-shared.component.html": 
        /*!****************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-shared/phan-quyen-nguoi-dung-shared.component.html ***!
          \****************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <app-textbox id=\"name\" class=\"item-no-padding\" fxFlex=\"70%\" fxFlex.sm=\"70%\" label=\"Tên quyền\" [maxlength]=\"100\"\n        [(model)]=\"phanQuyenNguoiDung.Name\" [required]=\"true\" [disabled]=\"phanQuyenNguoiDung.IsDefault\"\n        [validationerror]=\"'Name' | validationerror:validationErrors\">\n    </app-textbox>\n\n    <app-dropdownlist id=\"user_type\" fxFlex=\"30%\" fxFlex.sm=\"30%\" label=\"Loại người dùng\" class=\"item-no-padding\"\n        url=\"PhanQuyenNguoiDung/GetListUserType\" [(model)]=\"phanQuyenNguoiDung.UserType\" [required]=\"true\"\n        [modelText]=\"phanQuyenNguoiDung.UserTypeDisplay\" [disabled]=\"phanQuyenNguoiDung.IsDefault\"\n        [validationerror]=\"'UserType' | validationerror:validationErrors\">\n    </app-dropdownlist>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">CHỨC NĂNG\n    </h3>\n\n    <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" [gridDataSource]=\"gridDataSource\" [useHeaderDefault]=\"false\"\n        [documentType]=\"documentType\" [gridColumns]=\"gridColumns\" [useActionDefault]=\"false\" [useAddDeault]=\"false\"\n        [checkboxAble]=\"false\" [headerTemplate]=\"permissionHeaderTemplate\" [pageable]=\"false\" [heightToolbar]=\"425\"\n        #gridPermission>\n    </app-grid>\n\n    <ng-template #permissionHeaderTemplate>\n        <div class=\"bg-app-bar px-6 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString\" [(ngModel)]=\"searchString\" (ngModelChange)=\"searchChanges($event)\"\n                    (keyup)=\"onKeySearchChanges($event)\" placeholder=\"Nhập từ khóa tìm kiếm\" />\n            </div>\n            <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n                <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n            </button>\n            <div fxFlex=\"70%\" fxFlex.sm=\"70%\"></div>\n            <app-checkbox fxFlex=\"6%\" fxFlex.sm=\"6%\" id=\"checkAll\" value=\"true\" [model]=\"isCheckAll\"\n                [disabled]=\"phanQuyenNguoiDung.IsDefault\" (modelChange)=\"CheckAll($event)\" label=\"Tất cả\">\n            </app-checkbox>\n        </div>\n    </ng-template>\n\n    <ng-template #nameTemplate let-dataItem>\n        <span *ngIf=\"dataItem.DocumentType != null\" [style.marginLeft.px]=\"dataItem.Level * 20\">{{dataItem.Name}}</span>\n\n        <button mat-button (click)=\"expandData(dataItem)\" class=\"pl-0\" [style.marginLeft.px]=\"dataItem.Level * 20\"\n            *ngIf=\"dataItem.DocumentType == null && dataItem.DocumentType == null && dataItem.IsCollapse\">\n            <mat-icon [icIcon]=\"icArrowDown\"></mat-icon>\n            {{dataItem.Name}}\n        </button>\n        <button mat-button (click)=\"collapseData(dataItem)\" class=\"pl-0\" color=\"primary\"\n            [style.marginLeft.px]=\"dataItem.Level * 20\"\n            *ngIf=\"dataItem.DocumentType == null && dataItem.DocumentType == null && !dataItem.IsCollapse\">\n            <mat-icon [icIcon]=\"icArrowUp\"></mat-icon>\n            {{dataItem.Name}}\n        </button>\n        <!-- <strong *ngIf=\"dataItem.DocumentType == null\"\n            [style.marginLeft.px]=\"dataItem.Level * 20\">{{dataItem.Name}}</strong> -->\n    </ng-template>\n\n    <ng-template #viewTemplate let-dataItem>\n        <app-checkbox *ngIf=\"dataItem.DocumentType != null\" value=\"true\" [model]=\"dataItem.IsView\" label=\"\"\n            [disabled]=\"phanQuyenNguoiDung.IsDefault\"\n            (modelChange)=\"OnChangeChildrenOnView($event, dataItem.IdParent, dataItem)\">\n        </app-checkbox>\n        <app-checkbox *ngIf=\"dataItem.DocumentType == null\" value=\"true\" [model]=\"dataItem.IsView\" label=\"\"\n            [disabled]=\"phanQuyenNguoiDung.IsDefault\"\n            (modelChange)=\"OnChangeParentOnView($event, dataItem.Id, dataItem)\">\n        </app-checkbox>\n    </ng-template>\n\n    <ng-template #insertTemplate let-dataItem>\n        <app-checkbox *ngIf=\"dataItem.DocumentType != null\" value=\"true\" [model]=\"dataItem.IsInsert\" label=\"\"\n            [disabled]=\"phanQuyenNguoiDung.IsDefault\"\n            (modelChange)=\"OnChangeChildrenOnInsert($event, dataItem.IdParent, dataItem)\">\n        </app-checkbox>\n        <app-checkbox *ngIf=\"dataItem.DocumentType == null\" value=\"true\" [model]=\"dataItem.IsInsert\" label=\"\"\n            [disabled]=\"phanQuyenNguoiDung.IsDefault\"\n            (modelChange)=\"OnChangeParentOnInsert($event, dataItem.Id, dataItem)\">\n        </app-checkbox>\n    </ng-template>\n\n    <ng-template #updateTemplate let-dataItem>\n        <app-checkbox *ngIf=\"dataItem.DocumentType != null\" value=\"true\" [model]=\"dataItem.IsUpdate\" label=\"\"\n            [disabled]=\"phanQuyenNguoiDung.IsDefault\"\n            (modelChange)=\"OnChangeChildrenOnUpdate($event, dataItem.IdParent, dataItem)\">\n        </app-checkbox>\n        <app-checkbox *ngIf=\"dataItem.DocumentType == null\" value=\"true\" [model]=\"dataItem.IsUpdate\" label=\"\"\n            [disabled]=\"phanQuyenNguoiDung.IsDefault\"\n            (modelChange)=\"OnChangeParentOnUpdate($event, dataItem.Id, dataItem)\">\n        </app-checkbox>\n    </ng-template>\n\n    <ng-template #deleteTemplate let-dataItem>\n        <app-checkbox *ngIf=\"dataItem.DocumentType != null\" value=\"true\" [model]=\"dataItem.IsDelete\" label=\"\"\n            [disabled]=\"phanQuyenNguoiDung.IsDefault\"\n            (modelChange)=\"OnChangeChildrenOnDelete($event, dataItem.IdParent, dataItem)\">\n        </app-checkbox>\n        <app-checkbox *ngIf=\"dataItem.DocumentType == null\" value=\"true\" [model]=\"dataItem.IsDelete\" label=\"\"\n            [disabled]=\"phanQuyenNguoiDung.IsDefault\"\n            (modelChange)=\"OnChangeParentOnDelete($event, dataItem.Id, dataItem)\">\n        </app-checkbox>\n    </ng-template>\n\n    <ng-template #processTemplate let-dataItem>\n        <app-checkbox *ngIf=\"dataItem.DocumentType != null\" value=\"true\" [model]=\"dataItem.IsProcess\" label=\"\"\n            [disabled]=\"phanQuyenNguoiDung.IsDefault\"\n            (modelChange)=\"OnChangeChildrenOnProcess($event, dataItem.IdParent, dataItem)\">\n        </app-checkbox>\n        <app-checkbox *ngIf=\"dataItem.DocumentType == null\" value=\"true\" [model]=\"dataItem.IsProcess\" label=\"\"\n            [disabled]=\"phanQuyenNguoiDung.IsDefault\"\n            (modelChange)=\"OnChangeParentOnProcess($event, dataItem.Id, dataItem)\">\n        </app-checkbox>\n    </ng-template>\n</div>\n<div *ngIf=\"!isCreate\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <app-formfooter [bodyComponent]=\"this\" type=\"update\" [read]=\"phanQuyenNguoiDung.IsDefault\" (updated)=\"onUpdated()\">\n    </app-formfooter>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-update/phan-quyen-nguoi-dung-update.component.html": 
        /*!****************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-update/phan-quyen-nguoi-dung-update.component.html ***!
          \****************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n    {Title:'Danh Mục',Path:''}\n    ,{Title:'Phân Quyền Người Dùng',Path:'/danh-muc/phan-quyen-nguoi-dung',Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chỉnh Sửa Phân Quyền Người Dùng</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-phan-quyen-nguoi-dung-shared>\n                </app-phan-quyen-nguoi-dung-shared>\n            </div>\n        </div>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-create/phan-quyen-nguoi-dung-create.component.scss": 
        /*!**************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-create/phan-quyen-nguoi-dung-create.component.scss ***!
          \**************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9waGFuLXF1eWVuLW5ndW9pLWR1bmcvcGhhbi1xdXllbi1uZ3VvaS1kdW5nLWNyZWF0ZS9waGFuLXF1eWVuLW5ndW9pLWR1bmctY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-create/phan-quyen-nguoi-dung-create.component.ts": 
        /*!************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-create/phan-quyen-nguoi-dung-create.component.ts ***!
          \************************************************************************************************************************************/
        /*! exports provided: PhanQuyenNguoiDungCreateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhanQuyenNguoiDungCreateComponent", function () { return PhanQuyenNguoiDungCreateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _phan_quyen_nguoi_dung_shared_phan_quyen_nguoi_dung_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../phan-quyen-nguoi-dung-shared/phan-quyen-nguoi-dung-shared.component */ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-shared/phan-quyen-nguoi-dung-shared.component.ts");
            var PhanQuyenNguoiDungCreateComponent = /** @class */ (function () {
                function PhanQuyenNguoiDungCreateComponent(router) {
                    this.router = router;
                }
                PhanQuyenNguoiDungCreateComponent.prototype.ngOnInit = function () {
                };
                PhanQuyenNguoiDungCreateComponent.prototype.onCreated = function () {
                    this.router.navigate(['/danh-muc/phan-quyen-nguoi-dung']);
                };
                return PhanQuyenNguoiDungCreateComponent;
            }());
            PhanQuyenNguoiDungCreateComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
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
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-list/phan-quyen-nguoi-dung-list.component.scss": 
        /*!**********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-list/phan-quyen-nguoi-dung-list.component.scss ***!
          \**********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9waGFuLXF1eWVuLW5ndW9pLWR1bmcvcGhhbi1xdXllbi1uZ3VvaS1kdW5nLWxpc3QvcGhhbi1xdXllbi1uZ3VvaS1kdW5nLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-list/phan-quyen-nguoi-dung-list.component.ts": 
        /*!********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-list/phan-quyen-nguoi-dung-list.component.ts ***!
          \********************************************************************************************************************************/
        /*! exports provided: PhanQuyenNguoiDungListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhanQuyenNguoiDungListComponent", function () { return PhanQuyenNguoiDungListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_8__);
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_10__);
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_remove_red_eye__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-remove-red-eye */ "./node_modules/@iconify/icons-ic/twotone-remove-red-eye.js");
            /* harmony import */ var _iconify_icons_ic_twotone_remove_red_eye__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_remove_red_eye__WEBPACK_IMPORTED_MODULE_12__);
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_14__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var PhanQuyenNguoiDungListComponent = /** @class */ (function () {
                function PhanQuyenNguoiDungListComponent(authService, dialog, notificationService, router, apiService, baseService) {
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
                PhanQuyenNguoiDungListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_13__["DocumentType"].Role;
                    this.gridColumns = [
                        { Field: 'Ten', Title: 'Tên', MinWidth: 200, Sortable: true, LinkDetail: true },
                        { Field: 'LoaiNguoiDung', Title: 'Loại người dùng', Width: 150, Sortable: true },
                        { Field: 'Quyen', Title: 'Quyền mặc định', Width: 150, Template: this.trangThaiTemplate },
                        { Field: '', Title: '', Width: 60, Template: this.actionTemplate }
                    ];
                    this.baseRoute = '/danh-muc/phan-quyen-nguoi-dung';
                };
                PhanQuyenNguoiDungListComponent.prototype.edit = function (id) {
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Update)) {
                        self.router.navigate([self.baseRoute + '/chinh-sua/' + id]);
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                PhanQuyenNguoiDungListComponent.prototype.delete = function (id) {
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Delete)) {
                        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: 'Xác nhận', Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].MessConfirm, ['xóa']) }
                        }).afterClosed().subscribe(function (result) {
                            if (result === 'Yes') {
                                self.baseService.deleteById(id)
                                    .subscribe(function () {
                                    if (self.gridPhanQuyenNguoiDung !== undefined) {
                                        self.gridPhanQuyenNguoiDung.mySelectionAfterDelete(id);
                                        self.gridPhanQuyenNguoiDung.search();
                                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].ActionSuccessfully, ['Xóa']));
                                    }
                                }, function (err) {
                                    self.notificationService.showError(err.Message);
                                });
                            }
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                PhanQuyenNguoiDungListComponent.prototype.exportExcel = function () {
                    var self = this;
                    self.showPopupLoadingData();
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Process)) {
                        self.apiService.postExportExcel('PhanQuyenNguoiDung/ExportPhanQuyenNguoiDung', self.gridPhanQuyenNguoiDung._gridQueryInfo).subscribe(function (resultData) {
                            self.closePopupLoadingData();
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'PhanQuyenNguoiDung' + dateTimeNow.getFullYear() + '.xlsx');
                        }, function (err) {
                            self.notificationService.showError(err.Message);
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                PhanQuyenNguoiDungListComponent.prototype.showPopupLoadingData = function () {
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                };
                PhanQuyenNguoiDungListComponent.prototype.closePopupLoadingData = function () {
                    this.dialog.closeAll();
                };
                return PhanQuyenNguoiDungListComponent;
            }());
            PhanQuyenNguoiDungListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_15__["ApiService"] },
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"] }
            ]; };
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
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-routing.module.ts": 
        /*!*****************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-routing.module.ts ***!
          \*****************************************************************************************************/
        /*! exports provided: PhanQuyenNguoiDungRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhanQuyenNguoiDungRoutingModule", function () { return PhanQuyenNguoiDungRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _phan_quyen_nguoi_dung_list_phan_quyen_nguoi_dung_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phan-quyen-nguoi-dung-list/phan-quyen-nguoi-dung-list.component */ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-list/phan-quyen-nguoi-dung-list.component.ts");
            /* harmony import */ var _phan_quyen_nguoi_dung_create_phan_quyen_nguoi_dung_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./phan-quyen-nguoi-dung-create/phan-quyen-nguoi-dung-create.component */ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-create/phan-quyen-nguoi-dung-create.component.ts");
            /* harmony import */ var _phan_quyen_nguoi_dung_update_phan_quyen_nguoi_dung_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./phan-quyen-nguoi-dung-update/phan-quyen-nguoi-dung-update.component */ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-update/phan-quyen-nguoi-dung-update.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            var routes = [
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
            var PhanQuyenNguoiDungRoutingModule = /** @class */ (function () {
                function PhanQuyenNguoiDungRoutingModule() {
                }
                return PhanQuyenNguoiDungRoutingModule;
            }());
            PhanQuyenNguoiDungRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], PhanQuyenNguoiDungRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-shared/phan-quyen-nguoi-dung-shared.component.scss": 
        /*!**************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-shared/phan-quyen-nguoi-dung-shared.component.scss ***!
          \**************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9waGFuLXF1eWVuLW5ndW9pLWR1bmcvcGhhbi1xdXllbi1uZ3VvaS1kdW5nLXNoYXJlZC9waGFuLXF1eWVuLW5ndW9pLWR1bmctc2hhcmVkLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-shared/phan-quyen-nguoi-dung-shared.component.ts": 
        /*!************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-shared/phan-quyen-nguoi-dung-shared.component.ts ***!
          \************************************************************************************************************************************/
        /*! exports provided: PhanQuyenNguoiDungSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhanQuyenNguoiDungSharedComponent", function () { return PhanQuyenNguoiDungSharedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_vex_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/services/navigation.service */ "./src/@vex/services/navigation.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5__);
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
            /* harmony import */ var _iconify_icons_ic_twotone_keyboard_arrow_down__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_keyboard_arrow_down__WEBPACK_IMPORTED_MODULE_17__);
            /* harmony import */ var _iconify_icons_ic_twotone_keyboard_arrow_up__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/twotone-keyboard-arrow-up */ "./node_modules/@iconify/icons-ic/twotone-keyboard-arrow-up.js");
            /* harmony import */ var _iconify_icons_ic_twotone_keyboard_arrow_up__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_keyboard_arrow_up__WEBPACK_IMPORTED_MODULE_18__);
            var PhanQuyenNguoiDungSharedComponent = /** @class */ (function () {
                function PhanQuyenNguoiDungSharedComponent(route, dialog, baseService, navigationService, authService, notificationService, apiService, router) {
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
                PhanQuyenNguoiDungSharedComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__["DocumentType"].Role;
                    var id = this.route.snapshot.params.id;
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
                };
                PhanQuyenNguoiDungSharedComponent.prototype.showPopupLoadingData = function () {
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang tải dữ liệu...' }
                    });
                };
                PhanQuyenNguoiDungSharedComponent.prototype.closePopupLoadingData = function () {
                    this.dialog.closeAll();
                };
                PhanQuyenNguoiDungSharedComponent.prototype.GetClassChildName = function (name, prevClass) {
                    var nameRemoveVn = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(name).replace(/ /gi, '_');
                    if (prevClass === '') {
                        return 'group_' + nameRemoveVn;
                    }
                    else {
                        return prevClass + '_' + nameRemoveVn;
                    }
                };
                PhanQuyenNguoiDungSharedComponent.prototype.GetDocumentTypeEnum = function (id) {
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View)) {
                        var responseDocumentType = self.apiService
                            .get('PhanQuyenNguoiDung/GetListDocumentType').toPromise();
                        responseDocumentType.then(function (resultDocument) {
                            self.GetData(id, resultDocument);
                        }).catch(function (err) {
                            self.notificationService.showError(err.Message);
                            self.closePopupLoadingData();
                            self.phanQuyenNguoiDung.IsDefault = true;
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                PhanQuyenNguoiDungSharedComponent.prototype.getDataSource = function (resultData) {
                    var self = this;
                    var dataSource = [];
                    var index = 1;
                    for (var _i = 0, _a = self.items.filter(function (x) { return x.type !== 'link'; }); _i < _a.length; _i++) {
                        var item0 = _a[_i];
                        var documentType = new _phan_quyen_nguoi_dung_model__WEBPACK_IMPORTED_MODULE_16__["DocumentTypeList"]();
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
                        var classChildName = self.GetClassChildName(item0.label, '');
                        index++;
                        if (item0.children != null && item0.children.length > 0) {
                            index = self.addDataSource(item0, dataSource, 0, index, classChildName, documentType, resultData);
                        }
                    }
                    self.phanQuyenNguoiDung.DocumentTypes = dataSource;
                    self.phanQuyenNguoiDung.DocumentTypesSearchFilter = self.phanQuyenNguoiDung.DocumentTypes; // ngay tu dau se tro chung vung nho
                    return dataSource.length;
                };
                PhanQuyenNguoiDungSharedComponent.prototype.addDataSource = function (item, dataSource, currentLevel, nextIndex, classChildName, documentTypeListParent, resultData) {
                    var self = this;
                    if (item.children != null && item.children.length > 0) {
                        for (var _i = 0, _a = item.children; _i < _a.length; _i++) {
                            var item1 = _a[_i];
                            var documentType = new _phan_quyen_nguoi_dung_model__WEBPACK_IMPORTED_MODULE_16__["DocumentTypeList"]();
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
                                var classSubChildName = this.GetClassChildName(item1.label, classChildName);
                                nextIndex = this.addDataSource(item1, dataSource, currentLevel + 1, nextIndex, classSubChildName, documentType, resultData);
                            }
                        }
                        var objIndex = dataSource.findIndex((function (obj) { return obj.Id === documentTypeListParent.Id; }));
                        dataSource[objIndex].IsDelete = this.getStatusSecurityOperationForParent(dataSource, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Delete, documentTypeListParent.Id);
                        dataSource[objIndex].IsInsert = this.getStatusSecurityOperationForParent(dataSource, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Add, documentTypeListParent.Id);
                        dataSource[objIndex].IsProcess = this.getStatusSecurityOperationForParent(dataSource, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Process, documentTypeListParent.Id);
                        dataSource[objIndex].IsUpdate = this.getStatusSecurityOperationForParent(dataSource, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update, documentTypeListParent.Id);
                        dataSource[objIndex].IsView = this.getStatusSecurityOperationForParent(dataSource, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View, documentTypeListParent.Id);
                    }
                    return nextIndex;
                };
                PhanQuyenNguoiDungSharedComponent.prototype.getStatusSecurityOperationForParent = function (documentTypeList, securityOperation, parentId) {
                    if (parentId > 0) {
                        var result = documentTypeList.filter(function (item) { return item.IdParent === parentId; });
                        if (result != null && result.length > 0) {
                            switch (securityOperation) {
                                case src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Add:
                                    return result.filter(function (item) { return item.IsInsert === true; }).length === result.length;
                                case src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update:
                                    return result.filter(function (item) { return item.IsUpdate === true; }).length === result.length;
                                case src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Delete:
                                    return result.filter(function (item) { return item.IsDelete === true; }).length === result.length;
                                case src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View:
                                    return result.filter(function (item) { return item.IsView === true; }).length === result.length;
                                case src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Process:
                                    return result.filter(function (item) { return item.IsProcess === true; }).length === result.length;
                                default:
                                    return false;
                            }
                        }
                    }
                    return false;
                };
                PhanQuyenNguoiDungSharedComponent.prototype.getStatusSecurityOperation = function (documentType, dataSourceFromServer, securityOperation) {
                    var result = dataSourceFromServer.DocumentTypes.filter(function (item) { return item.DocumentType === documentType; });
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
                };
                PhanQuyenNguoiDungSharedComponent.prototype.GetData = function (id, resultDocument) {
                    var self = this;
                    if (id !== undefined && id !== null) {
                        self.getById(id, resultDocument);
                        self.isCreate = false;
                    }
                    else {
                        var countQuyen = self.getDataSource(null);
                        self.otherDocumentTypes = self.GetOthers(resultDocument);
                        self.SetOthers(countQuyen, null);
                        self.SetGrid();
                        self.WillCheckAll();
                    }
                };
                PhanQuyenNguoiDungSharedComponent.prototype.SetOthers = function (countQuyen, resultData) {
                    var self = this;
                    countQuyen++;
                    var quyenChaId = countQuyen;
                    var documentTypeForOtherTitle = new _phan_quyen_nguoi_dung_model__WEBPACK_IMPORTED_MODULE_16__["DocumentTypeList"]();
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
                    var classParent = self.GetClassChildName('Khác', '');
                    self.phanQuyenNguoiDung.DocumentTypes.push(documentTypeForOtherTitle);
                    for (var _i = 0, _a = self.otherDocumentTypes; _i < _a.length; _i++) {
                        var khacItem = _a[_i];
                        countQuyen++;
                        var documentTypeForOthers = new _phan_quyen_nguoi_dung_model__WEBPACK_IMPORTED_MODULE_16__["DocumentTypeList"]();
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
                    var objIndex = self.phanQuyenNguoiDung.DocumentTypes.findIndex((function (obj) { return obj.Id === quyenChaId; }));
                    self.phanQuyenNguoiDung.DocumentTypes[objIndex].IsDelete = this.getStatusSecurityOperationForParent(self.phanQuyenNguoiDung.DocumentTypes, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Delete, quyenChaId);
                    self.phanQuyenNguoiDung.DocumentTypes[objIndex].IsInsert = this.getStatusSecurityOperationForParent(self.phanQuyenNguoiDung.DocumentTypes, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Add, quyenChaId);
                    self.phanQuyenNguoiDung.DocumentTypes[objIndex].IsProcess = this.getStatusSecurityOperationForParent(self.phanQuyenNguoiDung.DocumentTypes, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Process, quyenChaId);
                    self.phanQuyenNguoiDung.DocumentTypes[objIndex].IsUpdate = this.getStatusSecurityOperationForParent(self.phanQuyenNguoiDung.DocumentTypes, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update, quyenChaId);
                    self.phanQuyenNguoiDung.DocumentTypes[objIndex].IsView = this.getStatusSecurityOperationForParent(self.phanQuyenNguoiDung.DocumentTypes, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View, quyenChaId);
                };
                PhanQuyenNguoiDungSharedComponent.prototype.GetOthers = function (listDocumentTypeEnum) {
                    var isReceiveForOthers = true;
                    var otherDocumentTypes = [];
                    for (var _i = 0, listDocumentTypeEnum_1 = listDocumentTypeEnum; _i < listDocumentTypeEnum_1.length; _i++) {
                        var documentTypeEnumItem = listDocumentTypeEnum_1[_i];
                        for (var _a = 0, _b = this.documentTypeCurrents; _a < _b.length; _a++) {
                            var documentTypeCurrentItem = _b[_a];
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
                };
                PhanQuyenNguoiDungSharedComponent.prototype.SetGrid = function () {
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
                };
                PhanQuyenNguoiDungSharedComponent.prototype.getSharedData = function () {
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
                };
                PhanQuyenNguoiDungSharedComponent.prototype.getById = function (id, resultDocument) {
                    var self = this;
                    self.baseService.getById(id).subscribe(function (resultData) {
                        self.phanQuyenNguoiDung.Name = resultData.Name;
                        self.phanQuyenNguoiDung.UserType = resultData.UserType;
                        self.phanQuyenNguoiDung.UserTypeDisplay = resultData.UserTypeDisplay;
                        self.phanQuyenNguoiDung.IsDefault = resultData.IsDefault;
                        var countQuyen = self.getDataSource(resultData);
                        self.otherDocumentTypes = self.GetOthers(resultDocument);
                        self.SetOthers(countQuyen, resultData);
                        self.SetGrid();
                        self.WillCheckAll();
                    });
                };
                PhanQuyenNguoiDungSharedComponent.prototype.ProcessCheckParent = function () {
                    var _this = this;
                    var self = this;
                    self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.DocumentType === undefined; }).forEach(function (itemParent) {
                        itemParent.IsView = false;
                        itemParent.IsProcess = false;
                        itemParent.IsInsert = false;
                        itemParent.IsDelete = false;
                        itemParent.IsUpdate = false;
                        var countChildForThisParent = self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.IdParent === itemParent.Id; }).length;
                        if (_this.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.IdParent === itemParent.Id && x.IsView; }).length ===
                            countChildForThisParent) {
                            itemParent.IsView = true;
                        }
                        if (_this.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.IdParent === itemParent.Id && x.IsProcess; }).length ===
                            countChildForThisParent) {
                            itemParent.IsProcess = true;
                        }
                        if (_this.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.IdParent === itemParent.Id && x.IsInsert; }).length ===
                            countChildForThisParent) {
                            itemParent.IsInsert = true;
                        }
                        if (_this.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.IdParent === itemParent.Id && x.IsDelete; }).length ===
                            countChildForThisParent) {
                            itemParent.IsDelete = true;
                        }
                        if (_this.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.IdParent === itemParent.Id && x.IsUpdate; }).length ===
                            countChildForThisParent) {
                            itemParent.IsUpdate = true;
                        }
                    });
                };
                PhanQuyenNguoiDungSharedComponent.prototype.WillCheckAll = function () {
                    var self = this;
                    self.isCheckAll = false;
                    var numberParents = self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.IdParent === null; }).length;
                    if (numberParents === self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.IdParent === null &&
                        x.IsView && x.IsProcess && x.IsInsert && x.IsDelete && x.IsUpdate; }).length) {
                        self.isCheckAll = true;
                    }
                };
                PhanQuyenNguoiDungSharedComponent.prototype.onKeySearchChanges = function (key) {
                    var self = this;
                    if (key.which === 13) {
                        self.showPopupLoadingData();
                        if (self.searchTimeout != null) {
                            clearTimeout(self.searchTimeout);
                        }
                        // tslint:disable-next-line: only-arrow-functions
                        self.searchTimeout = setTimeout(function () {
                            self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.IsSearch; }).forEach(function (element) {
                                element.IsSearch = false;
                            });
                            if (self.searchString == null || self.searchString === '') {
                                self.ProcessCheckParent();
                                self.phanQuyenNguoiDung.DocumentTypesSearchFilter = self.phanQuyenNguoiDung.DocumentTypes;
                                self.SetGrid();
                            }
                            else {
                                self.searchString = self.searchString.trim();
                                var itemNavSearch = self.search();
                                self.phanQuyenNguoiDung.DocumentTypesSearchFilter = self.ChangeModelFromSearch(itemNavSearch);
                                var others = self.GetOthersFromAvailableDocumentType(self.phanQuyenNguoiDung.DocumentTypes);
                                self.FilterOtherFromSearch(others);
                                self.SetGrid();
                            }
                        }, 500);
                    }
                };
                PhanQuyenNguoiDungSharedComponent.prototype.GetOthersFromAvailableDocumentType = function (availableDocumentTypes) {
                    var self = this;
                    var result = availableDocumentTypes.filter(function (x) { return x.DocumentType === undefined &&
                        x.HighLightClass === null && x.IdParent === null; }).reverse();
                    var dataSource = [];
                    if (result != null && result.length > 0) {
                        dataSource = self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === result[0].Id || x.IdParent === result[0].Id; });
                    }
                    return dataSource;
                };
                PhanQuyenNguoiDungSharedComponent.prototype.FilterOtherFromSearch = function (others) {
                    var self = this;
                    var pushParent = false;
                    var _loop_1 = function (level1) {
                        if (src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(level1.Name).toLowerCase()
                            .indexOf(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(self.searchString).toLowerCase()) >= 0) {
                            others.forEach(function (item) {
                                self.phanQuyenNguoiDung.DocumentTypesSearchFilter.push(item);
                            });
                            return { value: void 0 };
                        }
                        else {
                            if (self.IsDataItemHasChildren(level1, 2)) {
                                for (var _i = 0, _a = others.filter(function (x) { return x.IdParent === level1.Id; }); _i < _a.length; _i++) {
                                    var itemlevel2 = _a[_i];
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
                            return { value: void 0 };
                        }
                    };
                    // self.searchString
                    for (var _i = 0, others_1 = others; _i < others_1.length; _i++) {
                        var level1 = others_1[_i];
                        var state_1 = _loop_1(level1);
                        if (typeof state_1 === "object")
                            return state_1.value;
                    }
                };
                PhanQuyenNguoiDungSharedComponent.prototype.searchChanges = function (dataEvent) {
                    var self = this;
                    if (dataEvent === '') {
                        self.showPopupLoadingData();
                        if (self.searchTimeout != null) {
                            clearTimeout(self.searchTimeout);
                        }
                        // tslint:disable-next-line: only-arrow-functions
                        self.searchTimeout = setTimeout(function () {
                            self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.IsSearch; }).forEach(function (element) {
                                element.IsSearch = false;
                            });
                            self.ProcessCheckParent();
                            self.phanQuyenNguoiDung.DocumentTypesSearchFilter = self.phanQuyenNguoiDung.DocumentTypes;
                            self.SetGrid();
                        }, 500);
                    }
                };
                PhanQuyenNguoiDungSharedComponent.prototype.search = function () {
                    var self = this;
                    var itemResults = [];
                    self.items.forEach(function (itemlevel1) {
                        var itemlevel1Copy = Object.assign({}, itemlevel1);
                        if (src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(itemlevel1.label).toLowerCase()
                            .indexOf(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(self.searchString).toLowerCase()) >= 0) {
                            itemResults.push(itemlevel1Copy);
                        }
                        else {
                            if (itemlevel1.children != null && itemlevel1.children.length > 0) {
                                itemlevel1Copy.children = [];
                                itemlevel1.children.forEach(function (itemlevel2) {
                                    if (src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(itemlevel2.label).toLowerCase()
                                        .indexOf(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(self.searchString).toLowerCase()) >= 0) {
                                        if (itemlevel1Copy.children.filter(function (obj) { return obj.label === itemlevel2.label
                                            && obj.type === itemlevel2.type && obj.canViewType === itemlevel2.canViewType; }).length <= 0) {
                                            itemlevel1Copy.children.push(itemlevel2);
                                        }
                                        if (itemResults.filter(function (obj) { return obj.label === itemlevel1Copy.label &&
                                            obj.type === itemlevel1Copy.type && obj.canViewType === itemlevel1Copy.canViewType; }).length <= 0) {
                                            itemResults.push(itemlevel1Copy);
                                        }
                                    }
                                    else {
                                        if (itemlevel2.children != null && itemlevel2.children.length > 0) {
                                            var itemlevel2Copy_1 = Object.assign({}, itemlevel2);
                                            itemlevel2Copy_1.children = [];
                                            itemlevel2.children.forEach(function (itemlevel3) {
                                                if (src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(itemlevel3.label).toLowerCase()
                                                    .indexOf(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(self.searchString).toLowerCase()) >= 0) {
                                                    if (itemlevel2Copy_1.children.filter(function (obj) { return obj.label === itemlevel3.label
                                                        && obj.type === itemlevel3.type && obj.canViewType === itemlevel3.canViewType; }).length <= 0) {
                                                        itemlevel2Copy_1.children.push(itemlevel3);
                                                    }
                                                    if (itemlevel1Copy.children.filter(function (obj) { return obj.label === itemlevel2Copy_1.label
                                                        && obj.type === itemlevel2Copy_1.type &&
                                                        obj.canViewType === itemlevel2Copy_1.canViewType; }).length <= 0) {
                                                        itemlevel1Copy.children.push(itemlevel2Copy_1);
                                                    }
                                                    if (itemResults.filter(function (obj) { return obj.label === itemlevel1Copy.label &&
                                                        obj.type === itemlevel1Copy.type &&
                                                        obj.canViewType === itemlevel1Copy.canViewType; }).length <= 0) {
                                                        itemResults.push(itemlevel1Copy);
                                                    }
                                                }
                                                else {
                                                    if (itemlevel3.children != null && itemlevel3.children.length > 0) {
                                                        var itemlevel3Copy_1 = Object.assign({}, itemlevel3);
                                                        itemlevel3Copy_1.children = [];
                                                        itemlevel3.children.forEach(function (itemlevel4) {
                                                            if (src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(itemlevel4.label)
                                                                .toLowerCase().indexOf(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].removeVietnamese(self.searchString).toLowerCase()) >= 0) {
                                                                if (itemlevel3Copy_1.children.filter(function (obj) { return obj.label === itemlevel4.label &&
                                                                    obj.type === itemlevel4.type &&
                                                                    obj.canViewType === itemlevel4.canViewType; }).length <= 0) {
                                                                    itemlevel3Copy_1.children.push(itemlevel4);
                                                                }
                                                                if (itemlevel2Copy_1.children.filter(function (obj) { return obj.label === itemlevel3Copy_1.label &&
                                                                    obj.type === itemlevel3Copy_1.type &&
                                                                    obj.canViewType === itemlevel3Copy_1.canViewType; }).length <= 0) {
                                                                    itemlevel2Copy_1.children.push(itemlevel3Copy_1);
                                                                }
                                                                if (itemlevel1Copy.children.filter(function (obj) { return obj.label === itemlevel2Copy_1.label &&
                                                                    obj.type === itemlevel2Copy_1.type &&
                                                                    obj.canViewType === itemlevel2Copy_1.canViewType; }).length <= 0) {
                                                                    itemlevel1Copy.children.push(itemlevel2Copy_1);
                                                                }
                                                                if (itemResults.filter(function (obj) { return obj.label === itemlevel1Copy.label &&
                                                                    obj.type === itemlevel1Copy.type &&
                                                                    obj.canViewType === itemlevel1Copy.canViewType; }).length <= 0) {
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
                };
                PhanQuyenNguoiDungSharedComponent.prototype.ChangeModelFromSearch = function (itemNavSearch) {
                    var self = this;
                    var dataSource = [];
                    var _loop_2 = function (item0) {
                        var documentType = new _phan_quyen_nguoi_dung_model__WEBPACK_IMPORTED_MODULE_16__["DocumentTypeList"]();
                        documentType = {
                            Id: self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Name === item0.label && x.Level === 0; })[0].Id,
                            IsDelete: self.getStatusSecurityOperation(item0.canViewType, self.phanQuyenNguoiDung, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Delete),
                            IsInsert: self.getStatusSecurityOperation(item0.canViewType, self.phanQuyenNguoiDung, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Add),
                            IsProcess: self.getStatusSecurityOperation(item0.canViewType, self.phanQuyenNguoiDung, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Process),
                            IsUpdate: self.getStatusSecurityOperation(item0.canViewType, self.phanQuyenNguoiDung, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update),
                            IsView: self.getStatusSecurityOperation(item0.canViewType, self.phanQuyenNguoiDung, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View),
                            DocumentType: item0.canViewType,
                            IdParent: self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Name === item0.label && x.Level === 0; })[0].IdParent,
                            IsCollapse: false,
                            Name: item0.label,
                            HighLightClass: null,
                            Level: 0,
                            IsSearch: false,
                            IsChange: false
                        };
                        dataSource.push(documentType);
                        var classChildName = self.GetClassChildName(item0.label, '');
                        if (item0.children != null && item0.children.length > 0) {
                            self.AddChildrenFromSearch(item0, dataSource, 0, classChildName, documentType);
                        }
                    };
                    for (var _i = 0, _a = itemNavSearch.filter(function (x) { return x.type !== 'link'; }); _i < _a.length; _i++) {
                        var item0 = _a[_i];
                        _loop_2(item0);
                    }
                    return dataSource;
                };
                PhanQuyenNguoiDungSharedComponent.prototype.AddChildrenFromSearch = function (item, dataSource, currentLevel, classChildName, documentTypeListParent) {
                    var self = this;
                    if (item.children != null && item.children.length > 0) {
                        var _loop_3 = function (item1) {
                            var documentType = new _phan_quyen_nguoi_dung_model__WEBPACK_IMPORTED_MODULE_16__["DocumentTypeList"]();
                            documentType = {
                                Id: self.phanQuyenNguoiDung.DocumentTypes.
                                    filter(function (x) { return x.Name === item1.label && x.HighLightClass === classChildName; })[0].Id,
                                IsDelete: self.getStatusSecurityOperation(item1.canViewType, self.phanQuyenNguoiDung, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Delete),
                                IsInsert: self.getStatusSecurityOperation(item1.canViewType, self.phanQuyenNguoiDung, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Add),
                                IsProcess: self.getStatusSecurityOperation(item1.canViewType, self.phanQuyenNguoiDung, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Process),
                                IsUpdate: self.getStatusSecurityOperation(item1.canViewType, self.phanQuyenNguoiDung, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update),
                                IsView: self.getStatusSecurityOperation(item1.canViewType, self.phanQuyenNguoiDung, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View),
                                DocumentType: item1.canViewType,
                                IdParent: self.phanQuyenNguoiDung.DocumentTypes.
                                    filter(function (x) { return x.Name === item1.label && x.HighLightClass === classChildName; })[0].IdParent,
                                IsCollapse: false,
                                Name: item1.label,
                                HighLightClass: classChildName,
                                Level: currentLevel + 1,
                                IsSearch: false,
                                IsChange: false
                            };
                            dataSource.push(documentType);
                            if (item1.children != null && item1.children.length > 0) {
                                var classSubChildName = self.GetClassChildName(item1.label, classChildName);
                                self.AddChildrenFromSearch(item1, dataSource, currentLevel + 1, classSubChildName, documentType);
                            }
                        };
                        for (var _i = 0, _a = item.children; _i < _a.length; _i++) {
                            var item1 = _a[_i];
                            _loop_3(item1);
                        }
                        var objIndex = dataSource.findIndex((function (obj) { return obj.Id === documentTypeListParent.Id; }));
                        dataSource[objIndex].IsDelete = self.getStatusSecurityOperationForParent(dataSource, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Delete, documentTypeListParent.Id);
                        dataSource[objIndex].IsInsert = self.getStatusSecurityOperationForParent(dataSource, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Add, documentTypeListParent.Id);
                        dataSource[objIndex].IsProcess = self.getStatusSecurityOperationForParent(dataSource, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Process, documentTypeListParent.Id);
                        dataSource[objIndex].IsUpdate = self.getStatusSecurityOperationForParent(dataSource, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update, documentTypeListParent.Id);
                        dataSource[objIndex].IsView = self.getStatusSecurityOperationForParent(dataSource, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View, documentTypeListParent.Id);
                    }
                };
                PhanQuyenNguoiDungSharedComponent.prototype.CheckAll = function (dataCheck) {
                    if (dataCheck) {
                        this.phanQuyenNguoiDung.DocumentTypes.forEach(function (element) {
                            element.IsDelete = true;
                            element.IsInsert = true;
                            element.IsProcess = true;
                            element.IsUpdate = true;
                            element.IsView = true;
                            element.IsChange = true;
                        });
                        this.phanQuyenNguoiDung.DocumentTypesSearchFilter.forEach(function (element) {
                            element.IsDelete = true;
                            element.IsInsert = true;
                            element.IsProcess = true;
                            element.IsUpdate = true;
                            element.IsView = true;
                            element.IsChange = true;
                        });
                    }
                    else {
                        this.phanQuyenNguoiDung.DocumentTypes.forEach(function (element) {
                            element.IsDelete = false;
                            element.IsInsert = false;
                            element.IsProcess = false;
                            element.IsUpdate = false;
                            element.IsView = false;
                            element.IsChange = true;
                        });
                        this.phanQuyenNguoiDung.DocumentTypesSearchFilter.forEach(function (element) {
                            element.IsDelete = false;
                            element.IsInsert = false;
                            element.IsProcess = false;
                            element.IsUpdate = false;
                            element.IsView = false;
                            element.IsChange = true;
                        });
                    }
                };
                PhanQuyenNguoiDungSharedComponent.prototype.OnChangeParentOnView = function (dataCheck, id, item) {
                    var self = this;
                    item.IsView = dataCheck;
                    item.IsChange = true;
                    var numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === item.IdParent; }).length;
                    if (dataCheck) {
                        var willCheckParent = false;
                        if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === item.IdParent && !x.IsView; }).length === 0) {
                            willCheckParent = true;
                            for (var _i = 0, _a = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.Id === item.IdParent; }); _i < _a.length; _i++) {
                                var documentTypeItem = _a[_i];
                                documentTypeItem.IsView = willCheckParent;
                                if (documentTypeItem.IdParent !== null) {
                                    self.OnCheckGrandParent(willCheckParent, documentTypeItem, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View);
                                }
                            }
                        }
                        self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === id; }).forEach(function (element) {
                            self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === element.Id; })[0].IsView = true;
                            self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === element.Id; })[0].IsChange = true;
                            element.IsView = true;
                            element.IsChange = true;
                            if (self.IsDataItemHasChildren(element, 1)) {
                                self.OnChangeParentOnView(true, element.Id, element);
                            }
                        });
                    }
                    else {
                        var willUncheckParent = true;
                        if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.
                            filter(function (x) { return x.IdParent === item.IdParent && x.IsView; }).length !== numChild) {
                            willUncheckParent = false;
                            for (var _b = 0, _c = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.Id === item.IdParent; }); _b < _c.length; _b++) {
                                var documentTypeItem = _c[_b];
                                documentTypeItem.IsView = willUncheckParent;
                                if (documentTypeItem.IdParent !== null) {
                                    self.OnCheckGrandParent(willUncheckParent, documentTypeItem, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View);
                                }
                            }
                        }
                        self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === id; }).forEach(function (element) {
                            self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === element.Id; })[0].IsView = false;
                            self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === element.Id; })[0].IsChange = true;
                            element.IsView = false;
                            element.IsChange = true;
                            if (self.IsDataItemHasChildren(element, 1)) {
                                self.OnChangeParentOnView(false, element.Id, element);
                            }
                        });
                    }
                    self.WillCheckAll();
                };
                PhanQuyenNguoiDungSharedComponent.prototype.OnCheckGrandParent = function (dataCheck, item, securityOperation) {
                    var self = this;
                    var numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === item.IdParent; }).length;
                    if (dataCheck) {
                        var willCheckParent = false;
                        if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === item.IdParent && !x.IsView; }).length === 0) {
                            willCheckParent = true;
                            for (var _i = 0, _a = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.Id === item.IdParent; }); _i < _a.length; _i++) {
                                var documentTypeItem = _a[_i];
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
                        var willUncheckParent = true;
                        if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent ===
                            item.IdParent && x.IsView; }).length !== numChild) {
                            willUncheckParent = false;
                            for (var _b = 0, _c = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.Id === item.IdParent; }); _b < _c.length; _b++) {
                                var documentTypeItem = _c[_b];
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
                };
                PhanQuyenNguoiDungSharedComponent.prototype.OnChangeParentOnInsert = function (dataCheck, id, item) {
                    var self = this;
                    item.IsInsert = dataCheck;
                    item.IsChange = true;
                    var numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === item.IdParent; }).length;
                    if (dataCheck) {
                        var willCheckParent = false;
                        if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === item.IdParent && !x.IsInsert; }).length === 0) {
                            willCheckParent = true;
                            for (var _i = 0, _a = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.Id === item.IdParent; }); _i < _a.length; _i++) {
                                var documentTypeItem = _a[_i];
                                documentTypeItem.IsInsert = willCheckParent;
                                if (documentTypeItem.IdParent !== null) {
                                    self.OnCheckGrandParent(willCheckParent, documentTypeItem, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Add);
                                }
                            }
                        }
                        self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === id; }).forEach(function (element) {
                            self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === element.Id; })[0].IsInsert = true;
                            self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === element.Id; })[0].IsChange = true;
                            element.IsInsert = true;
                            element.IsChange = true;
                            if (self.IsDataItemHasChildren(element, 1)) {
                                self.OnChangeParentOnInsert(true, element.Id, element);
                            }
                        });
                    }
                    else {
                        var willUncheckParent = true;
                        if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.
                            filter(function (x) { return x.IdParent === item.IdParent && x.IsInsert; }).length !== numChild) {
                            willUncheckParent = false;
                            for (var _b = 0, _c = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.Id === item.IdParent; }); _b < _c.length; _b++) {
                                var documentTypeItem = _c[_b];
                                documentTypeItem.IsInsert = willUncheckParent;
                                if (documentTypeItem.IdParent !== null) {
                                    self.OnCheckGrandParent(willUncheckParent, documentTypeItem, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Add);
                                }
                            }
                        }
                        self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === id; }).forEach(function (element) {
                            self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === element.Id; })[0].IsInsert = false;
                            self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === element.Id; })[0].IsChange = true;
                            element.IsInsert = false;
                            element.IsChange = true;
                            if (self.IsDataItemHasChildren(element, 1)) {
                                self.OnChangeParentOnInsert(false, element.Id, element);
                            }
                        });
                    }
                    self.WillCheckAll();
                };
                PhanQuyenNguoiDungSharedComponent.prototype.OnChangeParentOnUpdate = function (dataCheck, id, item) {
                    var self = this;
                    item.IsUpdate = dataCheck;
                    item.IsChange = true;
                    var numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === item.IdParent; }).length;
                    if (dataCheck) {
                        var willCheckParent = false;
                        if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === item.IdParent && !x.IsUpdate; }).length === 0) {
                            willCheckParent = true;
                            for (var _i = 0, _a = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.Id === item.IdParent; }); _i < _a.length; _i++) {
                                var documentTypeItem = _a[_i];
                                documentTypeItem.IsUpdate = willCheckParent;
                                if (documentTypeItem.IdParent !== null) {
                                    self.OnCheckGrandParent(willCheckParent, documentTypeItem, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update);
                                }
                            }
                        }
                        self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === id; }).forEach(function (element) {
                            self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === element.Id; })[0].IsUpdate = true;
                            self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === element.Id; })[0].IsChange = true;
                            element.IsUpdate = true;
                            element.IsChange = true;
                            if (self.IsDataItemHasChildren(element, 1)) {
                                self.OnChangeParentOnUpdate(true, element.Id, element);
                            }
                        });
                    }
                    else {
                        var willUncheckParent = true;
                        if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.
                            filter(function (x) { return x.IdParent === item.IdParent && x.IsUpdate; }).length !== numChild) {
                            willUncheckParent = false;
                            for (var _b = 0, _c = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.Id === item.IdParent; }); _b < _c.length; _b++) {
                                var documentTypeItem = _c[_b];
                                documentTypeItem.IsUpdate = willUncheckParent;
                                if (documentTypeItem.IdParent !== null) {
                                    self.OnCheckGrandParent(willUncheckParent, documentTypeItem, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update);
                                }
                            }
                        }
                        self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === id; }).forEach(function (element) {
                            self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === element.Id; })[0].IsUpdate = false;
                            self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === element.Id; })[0].IsChange = true;
                            element.IsUpdate = false;
                            element.IsChange = true;
                            if (self.IsDataItemHasChildren(element, 1)) {
                                self.OnChangeParentOnUpdate(false, element.Id, element);
                            }
                        });
                    }
                    self.WillCheckAll();
                };
                PhanQuyenNguoiDungSharedComponent.prototype.OnChangeParentOnDelete = function (dataCheck, id, item) {
                    var self = this;
                    item.IsDelete = dataCheck;
                    item.IsChange = true;
                    var numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === item.IdParent; }).length;
                    if (dataCheck) {
                        var willCheckParent = false;
                        if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === item.IdParent && !x.IsDelete; }).length === 0) {
                            willCheckParent = true;
                            for (var _i = 0, _a = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.Id === item.IdParent; }); _i < _a.length; _i++) {
                                var documentTypeItem = _a[_i];
                                documentTypeItem.IsDelete = willCheckParent;
                                if (documentTypeItem.IdParent !== null) {
                                    self.OnCheckGrandParent(willCheckParent, documentTypeItem, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View);
                                }
                            }
                        }
                        self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === id; }).forEach(function (element) {
                            self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === element.Id; })[0].IsDelete = true;
                            self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === element.Id; })[0].IsChange = true;
                            element.IsDelete = true;
                            element.IsChange = true;
                            if (self.IsDataItemHasChildren(element, 1)) {
                                self.OnChangeParentOnDelete(true, element.Id, element);
                            }
                        });
                    }
                    else {
                        var willUncheckParent = true;
                        if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.
                            filter(function (x) { return x.IdParent === item.IdParent && x.IsDelete; }).length !== numChild) {
                            willUncheckParent = false;
                            for (var _b = 0, _c = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.Id === item.IdParent; }); _b < _c.length; _b++) {
                                var documentTypeItem = _c[_b];
                                documentTypeItem.IsDelete = willUncheckParent;
                                if (documentTypeItem.IdParent !== null) {
                                    self.OnCheckGrandParent(willUncheckParent, documentTypeItem, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View);
                                }
                            }
                        }
                        self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === id; }).forEach(function (element) {
                            self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === element.Id; })[0].IsDelete = false;
                            self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === element.Id; })[0].IsChange = true;
                            element.IsDelete = false;
                            element.IsChange = true;
                            if (self.IsDataItemHasChildren(element, 1)) {
                                self.OnChangeParentOnDelete(false, element.Id, element);
                            }
                        });
                    }
                    self.WillCheckAll();
                };
                PhanQuyenNguoiDungSharedComponent.prototype.OnChangeParentOnProcess = function (dataCheck, id, item) {
                    var self = this;
                    item.IsProcess = dataCheck;
                    item.IsChange = true;
                    var numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === item.IdParent; }).length;
                    if (dataCheck) {
                        var willCheckParent = false;
                        if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === item.IdParent && !x.IsProcess; }).length === 0) {
                            willCheckParent = true;
                            for (var _i = 0, _a = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.Id === item.IdParent; }); _i < _a.length; _i++) {
                                var documentTypeItem = _a[_i];
                                documentTypeItem.IsProcess = willCheckParent;
                                if (documentTypeItem.IdParent !== null) {
                                    self.OnCheckGrandParent(willCheckParent, documentTypeItem, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View);
                                }
                            }
                        }
                        self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === id; }).forEach(function (element) {
                            self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === element.Id; })[0].IsProcess = true;
                            self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === element.Id; })[0].IsChange = true;
                            element.IsProcess = true;
                            element.IsChange = true;
                            if (self.IsDataItemHasChildren(element, 1)) {
                                self.OnChangeParentOnProcess(true, element.Id, element);
                            }
                        });
                    }
                    else {
                        var willUncheckParent = true;
                        if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.
                            filter(function (x) { return x.IdParent === item.IdParent && x.IsProcess; }).length !== numChild) {
                            willUncheckParent = false;
                            for (var _b = 0, _c = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.Id === item.IdParent; }); _b < _c.length; _b++) {
                                var documentTypeItem = _c[_b];
                                documentTypeItem.IsProcess = willUncheckParent;
                                if (documentTypeItem.IdParent !== null) {
                                    self.OnCheckGrandParent(willUncheckParent, documentTypeItem, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View);
                                }
                            }
                        }
                        self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === id; }).forEach(function (element) {
                            self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === element.Id; })[0].IsProcess = false;
                            self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === element.Id; })[0].IsChange = true;
                            element.IsProcess = false;
                            element.IsChange = true;
                            if (self.IsDataItemHasChildren(element, 1)) {
                                self.OnChangeParentOnProcess(false, element.Id, element);
                            }
                        });
                    }
                    self.WillCheckAll();
                };
                PhanQuyenNguoiDungSharedComponent.prototype.OnChangeChildrenOnView = function (dataCheck, idParent, item) {
                    item.IsView = dataCheck;
                    item.IsChange = true;
                    var self = this;
                    var numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === idParent; }).length;
                    if (dataCheck) {
                        var willCheckParent = false;
                        if (self.phanQuyenNguoiDung.DocumentTypes.length !== self.phanQuyenNguoiDung.DocumentTypesSearchFilter.length) {
                            // in search mode
                            if (item.DocumentType !== undefined) {
                                self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.DocumentType === item.DocumentType; })[0].IsView = dataCheck;
                                self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.DocumentType === item.DocumentType; })[0].IsChange = true;
                            }
                            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === idParent && !x.IsView; }).length === 0) {
                                willCheckParent = true;
                                var _loop_4 = function (documentTypeItem) {
                                    documentTypeItem.IsView = willCheckParent;
                                    if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter
                                        .filter(function (x) { return x.IdParent === documentTypeItem.IdParent && !x.IsView; }).length === 0) {
                                        self.OnChangeChildrenOnView(willCheckParent, documentTypeItem.IdParent, documentTypeItem);
                                    }
                                };
                                for (var _i = 0, _a = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.Id === idParent; }); _i < _a.length; _i++) {
                                    var documentTypeItem = _a[_i];
                                    _loop_4(documentTypeItem);
                                }
                            }
                        }
                        else {
                            if (self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.IdParent === idParent && !x.IsView; }).length === 0) {
                                willCheckParent = true;
                                var _loop_5 = function (documentTypeItem) {
                                    documentTypeItem.IsView = willCheckParent;
                                    if (self.phanQuyenNguoiDung.DocumentTypes
                                        .filter(function (x) { return x.IdParent === documentTypeItem.IdParent && !x.IsView; }).length === 0) {
                                        self.OnChangeChildrenOnView(willCheckParent, documentTypeItem.IdParent, documentTypeItem);
                                    }
                                };
                                for (var _b = 0, _c = self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === idParent; }); _b < _c.length; _b++) {
                                    var documentTypeItem = _c[_b];
                                    _loop_5(documentTypeItem);
                                }
                            }
                        }
                    }
                    else {
                        var willUncheckParent = true;
                        if (self.phanQuyenNguoiDung.DocumentTypes.length !== self.phanQuyenNguoiDung.DocumentTypesSearchFilter.length) {
                            // in search mode
                            if (item.DocumentType !== undefined) {
                                self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.DocumentType === item.DocumentType; })[0].IsView = dataCheck;
                                self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.DocumentType === item.DocumentType; })[0].IsChange = true;
                            }
                            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === idParent && x.IsView; }).length !== numChild) {
                                willUncheckParent = false;
                                var _loop_6 = function (documentTypeItem) {
                                    documentTypeItem.IsView = willUncheckParent;
                                    var numChildForThisParent = self.phanQuyenNguoiDung
                                        .DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === documentTypeItem.IdParent; }).length;
                                    if (self.phanQuyenNguoiDung
                                        .DocumentTypes.filter(function (x) { return x.IdParent === documentTypeItem.IdParent && x.IsView; }).length
                                        !== numChildForThisParent && documentTypeItem.IdParent !== null) {
                                        self.OnChangeChildrenOnView(willUncheckParent, documentTypeItem.IdParent, documentTypeItem);
                                    }
                                };
                                for (var _d = 0, _e = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.Id === idParent; }); _d < _e.length; _d++) {
                                    var documentTypeItem = _e[_d];
                                    _loop_6(documentTypeItem);
                                }
                            }
                        }
                        else {
                            if (self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.IdParent === idParent && x.IsView; }).length !== numChild) {
                                willUncheckParent = false;
                                var _loop_7 = function (documentTypeItem) {
                                    documentTypeItem.IsView = willUncheckParent;
                                    var numChildForThisParent = self.phanQuyenNguoiDung
                                        .DocumentTypes.filter(function (x) { return x.IdParent === documentTypeItem.IdParent; }).length;
                                    if (self.phanQuyenNguoiDung
                                        .DocumentTypes.filter(function (x) { return x.IdParent === documentTypeItem.IdParent && x.IsView; }).length
                                        !== numChildForThisParent && documentTypeItem.IdParent !== null) {
                                        self.OnChangeChildrenOnView(willUncheckParent, documentTypeItem.IdParent, documentTypeItem);
                                    }
                                };
                                for (var _f = 0, _g = self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === idParent; }); _f < _g.length; _f++) {
                                    var documentTypeItem = _g[_f];
                                    _loop_7(documentTypeItem);
                                }
                            }
                        }
                    }
                    self.WillCheckAll();
                };
                PhanQuyenNguoiDungSharedComponent.prototype.OnChangeChildrenOnInsert = function (dataCheck, idParent, item) {
                    item.IsInsert = dataCheck;
                    item.IsChange = true;
                    var self = this;
                    var numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === idParent; }).length;
                    if (dataCheck) {
                        var willCheckParent = false;
                        if (self.phanQuyenNguoiDung.DocumentTypes.length !== self.phanQuyenNguoiDung.DocumentTypesSearchFilter.length) {
                            // in search mode
                            if (item.DocumentType !== undefined) {
                                self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.DocumentType === item.DocumentType; })[0].IsInsert = dataCheck;
                                self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.DocumentType === item.DocumentType; })[0].IsChange = true;
                            }
                            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === idParent && !x.IsInsert; }).length === 0) {
                                willCheckParent = true;
                                var _loop_8 = function (documentTypeItem) {
                                    documentTypeItem.IsInsert = willCheckParent;
                                    if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter
                                        .filter(function (x) { return x.IdParent === documentTypeItem.IdParent && !x.IsInsert; }).length === 0) {
                                        self.OnChangeChildrenOnInsert(willCheckParent, documentTypeItem.IdParent, documentTypeItem);
                                    }
                                };
                                for (var _i = 0, _a = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.Id === idParent; }); _i < _a.length; _i++) {
                                    var documentTypeItem = _a[_i];
                                    _loop_8(documentTypeItem);
                                }
                            }
                        }
                        else {
                            if (self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.IdParent === idParent && !x.IsInsert; }).length === 0) {
                                willCheckParent = true;
                                var _loop_9 = function (documentTypeItem) {
                                    documentTypeItem.IsInsert = willCheckParent;
                                    if (self.phanQuyenNguoiDung.DocumentTypes
                                        .filter(function (x) { return x.IdParent === documentTypeItem.IdParent && !x.IsInsert; }).length === 0) {
                                        self.OnChangeChildrenOnInsert(willCheckParent, documentTypeItem.IdParent, documentTypeItem);
                                    }
                                };
                                for (var _b = 0, _c = self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === idParent; }); _b < _c.length; _b++) {
                                    var documentTypeItem = _c[_b];
                                    _loop_9(documentTypeItem);
                                }
                            }
                        }
                    }
                    else {
                        var willUncheckParent = true;
                        if (self.phanQuyenNguoiDung.DocumentTypes.length !== self.phanQuyenNguoiDung.DocumentTypesSearchFilter.length) {
                            // in search mode
                            if (item.DocumentType !== undefined) {
                                self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.DocumentType === item.DocumentType; })[0].IsInsert = dataCheck;
                                self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.DocumentType === item.DocumentType; })[0].IsChange = true;
                            }
                            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === idParent && x.IsInsert; }).length !== numChild) {
                                willUncheckParent = false;
                                var _loop_10 = function (documentTypeItem) {
                                    documentTypeItem.IsInsert = willUncheckParent;
                                    var numChildForThisParent = self.phanQuyenNguoiDung
                                        .DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === documentTypeItem.IdParent; }).length;
                                    if (self.phanQuyenNguoiDung
                                        .DocumentTypes.filter(function (x) { return x.IdParent === documentTypeItem.IdParent && x.IsInsert; }).length
                                        !== numChildForThisParent && documentTypeItem.IdParent !== null) {
                                        self.OnChangeChildrenOnInsert(willUncheckParent, documentTypeItem.IdParent, documentTypeItem);
                                    }
                                };
                                for (var _d = 0, _e = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.Id === idParent; }); _d < _e.length; _d++) {
                                    var documentTypeItem = _e[_d];
                                    _loop_10(documentTypeItem);
                                }
                            }
                        }
                        else {
                            if (self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.IdParent === idParent && x.IsInsert; }).length !== numChild) {
                                willUncheckParent = false;
                                var _loop_11 = function (documentTypeItem) {
                                    documentTypeItem.IsInsert = willUncheckParent;
                                    var numChildForThisParent = self.phanQuyenNguoiDung
                                        .DocumentTypes.filter(function (x) { return x.IdParent === documentTypeItem.IdParent; }).length;
                                    if (self.phanQuyenNguoiDung
                                        .DocumentTypes.filter(function (x) { return x.IdParent === documentTypeItem.IdParent &&
                                        x.IsInsert; }).length !== numChildForThisParent
                                        && documentTypeItem.IdParent !== null) {
                                        self.OnChangeChildrenOnInsert(willUncheckParent, documentTypeItem.IdParent, documentTypeItem);
                                    }
                                };
                                for (var _f = 0, _g = self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === idParent; }); _f < _g.length; _f++) {
                                    var documentTypeItem = _g[_f];
                                    _loop_11(documentTypeItem);
                                }
                            }
                        }
                    }
                    self.WillCheckAll();
                };
                PhanQuyenNguoiDungSharedComponent.prototype.OnChangeChildrenOnUpdate = function (dataCheck, idParent, item) {
                    item.IsUpdate = dataCheck;
                    item.IsChange = true;
                    var self = this;
                    var numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === idParent; }).length;
                    if (dataCheck) {
                        var willCheckParent = false;
                        if (self.phanQuyenNguoiDung.DocumentTypes.length !== self.phanQuyenNguoiDung.DocumentTypesSearchFilter.length) {
                            // in search mode
                            if (item.DocumentType !== undefined) {
                                self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.DocumentType === item.DocumentType; })[0].IsUpdate = dataCheck;
                                self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.DocumentType === item.DocumentType; })[0].IsChange = true;
                            }
                            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === idParent && !x.IsUpdate; }).length === 0) {
                                willCheckParent = true;
                                var _loop_12 = function (documentTypeItem) {
                                    documentTypeItem.IsUpdate = willCheckParent;
                                    if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter
                                        .filter(function (x) { return x.IdParent === documentTypeItem.IdParent && !x.IsUpdate; }).length === 0) {
                                        self.OnChangeChildrenOnUpdate(willCheckParent, documentTypeItem.IdParent, documentTypeItem);
                                    }
                                };
                                for (var _i = 0, _a = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.Id === idParent; }); _i < _a.length; _i++) {
                                    var documentTypeItem = _a[_i];
                                    _loop_12(documentTypeItem);
                                }
                            }
                        }
                        else {
                            if (self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.IdParent === idParent && !x.IsUpdate; }).length === 0) {
                                willCheckParent = true;
                                var _loop_13 = function (documentTypeItem) {
                                    documentTypeItem.IsUpdate = willCheckParent;
                                    if (self.phanQuyenNguoiDung.DocumentTypes
                                        .filter(function (x) { return x.IdParent === documentTypeItem.IdParent && !x.IsUpdate; }).length === 0) {
                                        self.OnChangeChildrenOnUpdate(willCheckParent, documentTypeItem.IdParent, documentTypeItem);
                                    }
                                };
                                for (var _b = 0, _c = self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === idParent; }); _b < _c.length; _b++) {
                                    var documentTypeItem = _c[_b];
                                    _loop_13(documentTypeItem);
                                }
                            }
                        }
                    }
                    else {
                        var willUncheckParent = true;
                        if (self.phanQuyenNguoiDung.DocumentTypes.length !== self.phanQuyenNguoiDung.DocumentTypesSearchFilter.length) {
                            // in search mode
                            if (item.DocumentType !== undefined) {
                                self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.DocumentType === item.DocumentType; })[0].IsUpdate = dataCheck;
                                self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.DocumentType === item.DocumentType; })[0].IsChange = true;
                            }
                            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === idParent && x.IsUpdate; }).length !== numChild) {
                                willUncheckParent = false;
                                var _loop_14 = function (documentTypeItem) {
                                    documentTypeItem.IsUpdate = willUncheckParent;
                                    var numChildForThisParent = self.phanQuyenNguoiDung
                                        .DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === documentTypeItem.IdParent; }).length;
                                    if (self.phanQuyenNguoiDung
                                        .DocumentTypes.filter(function (x) { return x.IdParent === documentTypeItem.IdParent && x.IsUpdate; }).length
                                        !== numChildForThisParent && documentTypeItem.IdParent !== null) {
                                        self.OnChangeChildrenOnUpdate(willUncheckParent, documentTypeItem.IdParent, documentTypeItem);
                                    }
                                };
                                for (var _d = 0, _e = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.Id === idParent; }); _d < _e.length; _d++) {
                                    var documentTypeItem = _e[_d];
                                    _loop_14(documentTypeItem);
                                }
                            }
                        }
                        else {
                            if (self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.IdParent === idParent && x.IsUpdate; }).length !== numChild) {
                                willUncheckParent = false;
                                var _loop_15 = function (documentTypeItem) {
                                    documentTypeItem.IsUpdate = willUncheckParent;
                                    var numChildForThisParent = self.phanQuyenNguoiDung
                                        .DocumentTypes.filter(function (x) { return x.IdParent === documentTypeItem.IdParent; }).length;
                                    if (self.phanQuyenNguoiDung
                                        .DocumentTypes.filter(function (x) { return x.IdParent === documentTypeItem.IdParent &&
                                        x.IsUpdate; }).length !== numChildForThisParent
                                        && documentTypeItem.IdParent !== null) {
                                        self.OnChangeChildrenOnUpdate(willUncheckParent, documentTypeItem.IdParent, documentTypeItem);
                                    }
                                };
                                for (var _f = 0, _g = self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === idParent; }); _f < _g.length; _f++) {
                                    var documentTypeItem = _g[_f];
                                    _loop_15(documentTypeItem);
                                }
                            }
                        }
                    }
                    self.WillCheckAll();
                };
                PhanQuyenNguoiDungSharedComponent.prototype.OnChangeChildrenOnDelete = function (dataCheck, idParent, item) {
                    item.IsDelete = dataCheck;
                    item.IsChange = true;
                    var self = this;
                    var numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === idParent; }).length;
                    if (dataCheck) {
                        var willCheckParent = false;
                        if (self.phanQuyenNguoiDung.DocumentTypes.length !== self.phanQuyenNguoiDung.DocumentTypesSearchFilter.length) {
                            // in search mode
                            if (item.DocumentType !== undefined) {
                                self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.DocumentType === item.DocumentType; })[0].IsDelete = dataCheck;
                                self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.DocumentType === item.DocumentType; })[0].IsChange = true;
                            }
                            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === idParent && !x.IsDelete; }).length === 0) {
                                willCheckParent = true;
                                var _loop_16 = function (documentTypeItem) {
                                    documentTypeItem.IsDelete = willCheckParent;
                                    if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter
                                        .filter(function (x) { return x.IdParent === documentTypeItem.IdParent && !x.IsDelete; }).length === 0) {
                                        self.OnChangeChildrenOnDelete(willCheckParent, documentTypeItem.IdParent, documentTypeItem);
                                    }
                                };
                                for (var _i = 0, _a = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.Id === idParent; }); _i < _a.length; _i++) {
                                    var documentTypeItem = _a[_i];
                                    _loop_16(documentTypeItem);
                                }
                            }
                        }
                        else {
                            if (self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.IdParent === idParent && !x.IsDelete; }).length === 0) {
                                willCheckParent = true;
                                var _loop_17 = function (documentTypeItem) {
                                    documentTypeItem.IsDelete = willCheckParent;
                                    if (self.phanQuyenNguoiDung.DocumentTypes
                                        .filter(function (x) { return x.IdParent === documentTypeItem.IdParent && !x.IsDelete; }).length === 0) {
                                        self.OnChangeChildrenOnDelete(willCheckParent, documentTypeItem.IdParent, documentTypeItem);
                                    }
                                };
                                for (var _b = 0, _c = self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === idParent; }); _b < _c.length; _b++) {
                                    var documentTypeItem = _c[_b];
                                    _loop_17(documentTypeItem);
                                }
                            }
                        }
                    }
                    else {
                        var willUncheckParent = true;
                        if (self.phanQuyenNguoiDung.DocumentTypes.length !== self.phanQuyenNguoiDung.DocumentTypesSearchFilter.length) {
                            // in search mode
                            if (item.DocumentType !== undefined) {
                                self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.DocumentType === item.DocumentType; })[0].IsDelete = dataCheck;
                                self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.DocumentType === item.DocumentType; })[0].IsChange = true;
                            }
                            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === idParent && x.IsDelete; }).length !== numChild) {
                                willUncheckParent = false;
                                var _loop_18 = function (documentTypeItem) {
                                    documentTypeItem.IsDelete = willUncheckParent;
                                    var numChildForThisParent = self.phanQuyenNguoiDung
                                        .DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === documentTypeItem.IdParent; }).length;
                                    if (self.phanQuyenNguoiDung
                                        .DocumentTypes.filter(function (x) { return x.IdParent === documentTypeItem.IdParent && x.IsDelete; }).length
                                        !== numChildForThisParent && documentTypeItem.IdParent !== null) {
                                        self.OnChangeChildrenOnDelete(willUncheckParent, documentTypeItem.IdParent, documentTypeItem);
                                    }
                                };
                                for (var _d = 0, _e = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.Id === idParent; }); _d < _e.length; _d++) {
                                    var documentTypeItem = _e[_d];
                                    _loop_18(documentTypeItem);
                                }
                            }
                        }
                        else {
                            if (self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.IdParent === idParent && x.IsDelete; }).length !== numChild) {
                                willUncheckParent = false;
                                var _loop_19 = function (documentTypeItem) {
                                    documentTypeItem.IsDelete = willUncheckParent;
                                    var numChildForThisParent = self.phanQuyenNguoiDung
                                        .DocumentTypes.filter(function (x) { return x.IdParent === documentTypeItem.IdParent; }).length;
                                    if (self.phanQuyenNguoiDung
                                        .DocumentTypes.filter(function (x) { return x.IdParent === documentTypeItem.IdParent &&
                                        x.IsDelete; }).length !== numChildForThisParent
                                        && documentTypeItem.IdParent !== null) {
                                        self.OnChangeChildrenOnDelete(willUncheckParent, documentTypeItem.IdParent, documentTypeItem);
                                    }
                                };
                                for (var _f = 0, _g = self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === idParent; }); _f < _g.length; _f++) {
                                    var documentTypeItem = _g[_f];
                                    _loop_19(documentTypeItem);
                                }
                            }
                        }
                    }
                    self.WillCheckAll();
                };
                PhanQuyenNguoiDungSharedComponent.prototype.OnChangeChildrenOnProcess = function (dataCheck, idParent, item) {
                    item.IsProcess = dataCheck;
                    item.IsChange = true;
                    var self = this;
                    var numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === idParent; }).length;
                    if (dataCheck) {
                        var willCheckParent = false;
                        if (self.phanQuyenNguoiDung.DocumentTypes.length !== self.phanQuyenNguoiDung.DocumentTypesSearchFilter.length) {
                            // in search mode
                            if (item.DocumentType !== undefined) {
                                self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.DocumentType === item.DocumentType; })[0].IsProcess = dataCheck;
                                self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.DocumentType === item.DocumentType; })[0].IsChange = true;
                            }
                            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === idParent && !x.IsProcess; }).length === 0) {
                                willCheckParent = true;
                                var _loop_20 = function (documentTypeItem) {
                                    documentTypeItem.IsProcess = willCheckParent;
                                    if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter
                                        .filter(function (x) { return x.IdParent === documentTypeItem.IdParent && !x.IsProcess; }).length === 0) {
                                        self.OnChangeChildrenOnProcess(willCheckParent, documentTypeItem.IdParent, documentTypeItem);
                                    }
                                };
                                for (var _i = 0, _a = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.Id === idParent; }); _i < _a.length; _i++) {
                                    var documentTypeItem = _a[_i];
                                    _loop_20(documentTypeItem);
                                }
                            }
                        }
                        else {
                            if (self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.IdParent === idParent && !x.IsProcess; }).length === 0) {
                                willCheckParent = true;
                                var _loop_21 = function (documentTypeItem) {
                                    documentTypeItem.IsProcess = willCheckParent;
                                    if (self.phanQuyenNguoiDung.DocumentTypes
                                        .filter(function (x) { return x.IdParent === documentTypeItem.IdParent && !x.IsProcess; }).length === 0) {
                                        self.OnChangeChildrenOnProcess(willCheckParent, documentTypeItem.IdParent, documentTypeItem);
                                    }
                                };
                                for (var _b = 0, _c = self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === idParent; }); _b < _c.length; _b++) {
                                    var documentTypeItem = _c[_b];
                                    _loop_21(documentTypeItem);
                                }
                            }
                        }
                    }
                    else {
                        var willUncheckParent = true;
                        if (self.phanQuyenNguoiDung.DocumentTypes.length !== self.phanQuyenNguoiDung.DocumentTypesSearchFilter.length) {
                            // in search mode
                            if (item.DocumentType !== undefined) {
                                self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.DocumentType === item.DocumentType; })[0].IsProcess = dataCheck;
                                self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.DocumentType === item.DocumentType; })[0].IsChange = true;
                            }
                            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === idParent && x.IsProcess; }).length !== numChild) {
                                willUncheckParent = false;
                                var _loop_22 = function (documentTypeItem) {
                                    documentTypeItem.IsProcess = willUncheckParent;
                                    var numChildForThisParent = self.phanQuyenNguoiDung
                                        .DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === documentTypeItem.IdParent; }).length;
                                    if (self.phanQuyenNguoiDung
                                        .DocumentTypes.filter(function (x) { return x.IdParent === documentTypeItem.IdParent && x.IsProcess; }).length
                                        !== numChildForThisParent && documentTypeItem.IdParent !== null) {
                                        self.OnChangeChildrenOnProcess(willUncheckParent, documentTypeItem.IdParent, documentTypeItem);
                                    }
                                };
                                for (var _d = 0, _e = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.Id === idParent; }); _d < _e.length; _d++) {
                                    var documentTypeItem = _e[_d];
                                    _loop_22(documentTypeItem);
                                }
                            }
                        }
                        else {
                            if (self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.IdParent === idParent && x.IsProcess; }).length !== numChild) {
                                willUncheckParent = false;
                                var _loop_23 = function (documentTypeItem) {
                                    documentTypeItem.IsProcess = willUncheckParent;
                                    var numChildForThisParent = self.phanQuyenNguoiDung
                                        .DocumentTypes.filter(function (x) { return x.IdParent === documentTypeItem.IdParent; }).length;
                                    if (self.phanQuyenNguoiDung
                                        .DocumentTypes.filter(function (x) { return x.IdParent === documentTypeItem.IdParent &&
                                        x.IsProcess; }).length !== numChildForThisParent
                                        && documentTypeItem.IdParent !== null) {
                                        self.OnChangeChildrenOnProcess(willUncheckParent, documentTypeItem.IdParent, documentTypeItem);
                                    }
                                };
                                for (var _f = 0, _g = self.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.Id === idParent; }); _f < _g.length; _f++) {
                                    var documentTypeItem = _g[_f];
                                    _loop_23(documentTypeItem);
                                }
                            }
                        }
                    }
                    self.WillCheckAll();
                };
                PhanQuyenNguoiDungSharedComponent.prototype.onUpdated = function () {
                    this.router.navigate(['/danh-muc/phan-quyen-nguoi-dung']);
                };
                PhanQuyenNguoiDungSharedComponent.prototype.collapseData = function (itemData) {
                    var _this = this;
                    var self = this;
                    var allLabelParents = [];
                    var idParent = itemData.IdParent;
                    if (itemData.Level !== 0) {
                        for (var i = 0; i < itemData.Level; i++) {
                            for (var _i = 0, _a = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.Id === idParent; }); _i < _a.length; _i++) {
                                var parentItem = _a[_i];
                                allLabelParents.push(parentItem.Name);
                                idParent = parentItem.IdParent;
                                break;
                            }
                        }
                    }
                    var childName = '';
                    if (allLabelParents.length !== 0) {
                        var parentItem_1 = '';
                        allLabelParents.reverse().forEach(function (parentLabel) {
                            if (parentItem_1 === '') {
                                childName = _this.GetClassChildName(parentLabel, '');
                            }
                            else {
                                childName = _this.GetClassChildName(parentLabel, childName);
                            }
                            parentItem_1 = parentLabel;
                        });
                    }
                    var childClassName = this.GetClassChildName(itemData.Name, childName);
                    jQuery('.' + childClassName).hide();
                    self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.HighLightClass === childClassName; }).forEach(function (parentItem) {
                        var _loop_24 = function (subParentItem) {
                            jQuery('.' + subParentItem.HighLightClass).hide();
                            if (self.IsDataItemHasChildren(subParentItem, 1)) {
                                for (var _i = 0, _a = self.phanQuyenNguoiDung
                                    .DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === subParentItem.Id; }); _i < _a.length; _i++) {
                                    var subSubParentItem = _a[_i];
                                    jQuery('.' + subSubParentItem.HighLightClass).hide();
                                    break;
                                }
                            }
                        };
                        for (var _i = 0, _a = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === parentItem.Id; }); _i < _a.length; _i++) {
                            var subParentItem = _a[_i];
                            _loop_24(subParentItem);
                        }
                    });
                    itemData.IsCollapse = !itemData.IsCollapse;
                };
                PhanQuyenNguoiDungSharedComponent.prototype.expandData = function (itemData) {
                    var _this = this;
                    var self = this;
                    var allLabelParents = [];
                    var idParent = itemData.IdParent;
                    if (itemData.Level !== 0) {
                        for (var i = 0; i < itemData.Level; i++) {
                            for (var _i = 0, _a = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.Id === idParent; }); _i < _a.length; _i++) {
                                var parentItem = _a[_i];
                                allLabelParents.push(parentItem.Name);
                                idParent = parentItem.IdParent;
                                break;
                            }
                        }
                    }
                    var childName = '';
                    if (allLabelParents.length !== 0) {
                        var parentItem_2 = '';
                        allLabelParents.reverse().forEach(function (parentLabel) {
                            if (parentItem_2 === '') {
                                childName = _this.GetClassChildName(parentLabel, '');
                            }
                            else {
                                childName = _this.GetClassChildName(parentLabel, childName);
                            }
                            parentItem_2 = parentLabel;
                        });
                    }
                    var childClassName = this.GetClassChildName(itemData.Name, childName);
                    jQuery('.' + childClassName).show();
                    self.CollapseChildrenShow(childClassName);
                    itemData.IsCollapse = !itemData.IsCollapse;
                };
                PhanQuyenNguoiDungSharedComponent.prototype.IsDataItemHasChildren = function (item, kind) {
                    // 1: filter
                    // others: full
                    switch (kind) {
                        case 1: {
                            return this.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.IdParent === item.Id; }).length !== 0;
                        }
                        default: {
                            return this.phanQuyenNguoiDung.DocumentTypes.filter(function (x) { return x.IdParent === item.Id; }).length !== 0;
                        }
                    }
                };
                PhanQuyenNguoiDungSharedComponent.prototype.CollapseChildrenShow = function (childClassName) {
                    this.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(function (x) { return x.HighLightClass === childClassName; }).forEach(function (childrenDocument) {
                        childrenDocument.IsCollapse = true;
                    });
                };
                return PhanQuyenNguoiDungSharedComponent;
            }());
            PhanQuyenNguoiDungSharedComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialog"] },
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] },
                { type: src_vex_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
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
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-update/phan-quyen-nguoi-dung-update.component.scss": 
        /*!**************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-update/phan-quyen-nguoi-dung-update.component.scss ***!
          \**************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9waGFuLXF1eWVuLW5ndW9pLWR1bmcvcGhhbi1xdXllbi1uZ3VvaS1kdW5nLXVwZGF0ZS9waGFuLXF1eWVuLW5ndW9pLWR1bmctdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-update/phan-quyen-nguoi-dung-update.component.ts": 
        /*!************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-update/phan-quyen-nguoi-dung-update.component.ts ***!
          \************************************************************************************************************************************/
        /*! exports provided: PhanQuyenNguoiDungUpdateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhanQuyenNguoiDungUpdateComponent", function () { return PhanQuyenNguoiDungUpdateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PhanQuyenNguoiDungUpdateComponent = /** @class */ (function () {
                function PhanQuyenNguoiDungUpdateComponent() {
                }
                PhanQuyenNguoiDungUpdateComponent.prototype.ngOnInit = function () {
                };
                return PhanQuyenNguoiDungUpdateComponent;
            }());
            PhanQuyenNguoiDungUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-phan-quyen-nguoi-dung-update',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phan-quyen-nguoi-dung-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-update/phan-quyen-nguoi-dung-update.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phan-quyen-nguoi-dung-update.component.scss */ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung-update/phan-quyen-nguoi-dung-update.component.scss")).default]
                })
            ], PhanQuyenNguoiDungUpdateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung.model.ts": 
        /*!********************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung.model.ts ***!
          \********************************************************************************************/
        /*! exports provided: PhanQuyenNguoiDung, DocumentTypeList */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhanQuyenNguoiDung", function () { return PhanQuyenNguoiDung; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentTypeList", function () { return DocumentTypeList; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var PhanQuyenNguoiDung = /** @class */ (function () {
                function PhanQuyenNguoiDung(Id, Name, 
                // tslint:disable-next-line: no-shadowed-variable
                UserType, UserTypeDisplay, IsDefault, DocumentTypes, DocumentTypesSearchFilter) {
                    if (Id === void 0) { Id = null; }
                    if (Name === void 0) { Name = null; }
                    if (UserType === void 0) { UserType = null; }
                    if (UserTypeDisplay === void 0) { UserTypeDisplay = null; }
                    if (IsDefault === void 0) { IsDefault = null; }
                    if (DocumentTypes === void 0) { DocumentTypes = []; }
                    if (DocumentTypesSearchFilter === void 0) { DocumentTypesSearchFilter = []; }
                    this.Id = Id;
                    this.Name = Name;
                    this.UserType = UserType;
                    this.UserTypeDisplay = UserTypeDisplay;
                    this.IsDefault = IsDefault;
                    this.DocumentTypes = DocumentTypes;
                    this.DocumentTypesSearchFilter = DocumentTypesSearchFilter;
                }
                return PhanQuyenNguoiDung;
            }());
            var DocumentTypeList = /** @class */ (function () {
                function DocumentTypeList(Id, Name, IsView, IsInsert, IsUpdate, IsDelete, IsProcess, IsSearch, IsChange, HighLightClass, IsCollapse, 
                // tslint:disable-next-line: no-shadowed-variable
                DocumentType, Level, IdParent) {
                    if (Id === void 0) { Id = null; }
                    if (Name === void 0) { Name = null; }
                    if (IsView === void 0) { IsView = null; }
                    if (IsInsert === void 0) { IsInsert = null; }
                    if (IsUpdate === void 0) { IsUpdate = null; }
                    if (IsDelete === void 0) { IsDelete = null; }
                    if (IsProcess === void 0) { IsProcess = null; }
                    if (IsSearch === void 0) { IsSearch = false; }
                    if (IsChange === void 0) { IsChange = false; }
                    if (HighLightClass === void 0) { HighLightClass = null; }
                    if (IsCollapse === void 0) { IsCollapse = false; }
                    if (DocumentType === void 0) { DocumentType = null; }
                    if (Level === void 0) { Level = null; }
                    if (IdParent === void 0) { IdParent = null; }
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
                return DocumentTypeList;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung.module.ts": 
        /*!*********************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung.module.ts ***!
          \*********************************************************************************************/
        /*! exports provided: PhanQuyenNguoiDungModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhanQuyenNguoiDungModule", function () { return PhanQuyenNguoiDungModule; });
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
            var PhanQuyenNguoiDungModule = /** @class */ (function () {
                function PhanQuyenNguoiDungModule() {
                }
                return PhanQuyenNguoiDungModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung.service.ts": 
        /*!**********************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung.service.ts ***!
          \**********************************************************************************************/
        /*! exports provided: PhanQuyenNguoiDungService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhanQuyenNguoiDungService", function () { return PhanQuyenNguoiDungService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var PhanQuyenNguoiDungService = /** @class */ (function (_super) {
                __extends(PhanQuyenNguoiDungService, _super);
                function PhanQuyenNguoiDungService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'PhanQuyenNguoiDung';
                    return _this;
                }
                return PhanQuyenNguoiDungService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            PhanQuyenNguoiDungService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            PhanQuyenNguoiDungService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], PhanQuyenNguoiDungService);
            /***/ 
        })
    }]);
//# sourceMappingURL=danh-muc-phan-quyen-nguoi-dung-phan-quyen-nguoi-dung-module-es2015.js.map
//# sourceMappingURL=danh-muc-phan-quyen-nguoi-dung-phan-quyen-nguoi-dung-module-es5.js.map
//# sourceMappingURL=danh-muc-phan-quyen-nguoi-dung-phan-quyen-nguoi-dung-module-es5.js.map