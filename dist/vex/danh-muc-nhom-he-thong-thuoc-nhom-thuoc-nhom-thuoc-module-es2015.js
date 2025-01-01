(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["danh-muc-nhom-he-thong-thuoc-nhom-thuoc-nhom-thuoc-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/nhom-thuoc/nhom-thuoc-list/nhom-thuoc-list.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/nhom-thuoc/nhom-thuoc-list/nhom-thuoc-list.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Danh Mục',Path:''}\n                    ,{Title:'Nhóm Hệ Thống',Path:''}\n                    ,{Title:'Thuốc ',Path:''}\n                    ,{Title:'Nhóm Thuốc',Path:'/danh-muc/nhom-he-thong/thuoc/nhom-thuoc',Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n     <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <div class=\"bg-app-bar px-6 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                    fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                    <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                    <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                        placeholder=\"{{searchPlaceHolder}}\" type=\"search\" name=\"searchString\" [(ngModel)]=\"searchString\"\n                        (keyup)=\"onKey($event)\" (ngModelChange) = \"searchChange()\" />\n                </div>\n                <span fxFlex></span>\n            </div>\n            <div class=\"p-4\">\n                \n            <kendo-treeview [nodes]=data textField=\"field\" kendoTreeViewExpandable kendoTreeViewHierarchyBinding\n            childrenField=\"NhomDichVuKyThuatChildren\">\n\n            <ng-template kendoTreeViewNodeTemplate let-dataItem>\n                <span [ngClass]=\"iconClass(dataItem)\"></span>\n                {{dataItem.Ten}}\n            </ng-template>\n\n        </kendo-treeview>\n            </div>\n        </div>\n        \n\n    </vex-page-layout-content>\n</vex-page-layout>\n");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/nhom-thuoc/nhom-thuoc-list/nhom-thuoc-list.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/nhom-thuoc/nhom-thuoc-list/nhom-thuoc-list.component.scss ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL3RodW9jL25ob20tdGh1b2MvbmhvbS10aHVvYy1saXN0L25ob20tdGh1b2MtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/nhom-thuoc/nhom-thuoc-list/nhom-thuoc-list.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/nhom-thuoc/nhom-thuoc-list/nhom-thuoc-list.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: NhomThuocListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhomThuocListComponent", function() { return NhomThuocListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");











const is = (fileName, ext) => new RegExp(`.${ext}\$`).test(fileName);
let NhomThuocListComponent = class NhomThuocListComponent {
    constructor(baseService, apiService) {
        this.baseService = baseService;
        this.apiService = apiService;
        this.nhomThuoc = {};
        this.expression = false;
        this.data = [];
        this.field = { dataSource: this.data, id: 'id', field: 'Ten', hasChildren: 'NhomThuocChildren' };
        this._isLoading = false;
        this._skip = 0;
        this._pageSize = 10;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.searchPlaceHolder = "Nhập từ khóa...";
        this.searchString = null;
        this.lazyLoadPage = false;
        this.useAddDeault = true;
        this.sort = null;
        this.extOnSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    iconClass({ text, NhomThuocChildren }) {
        return {
            'k-i-folder': NhomThuocChildren !== undefined,
            'k-icon': true
        };
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhMucNhomThuoc;
        this._gridDataSource = this.gridDataSource;
        this._isLoading = true;
        this.baseService.getDataForGrid(this._gridQueryInfo, "NhomThuoc/GetDataTreeView").subscribe((resultData) => {
            this.data = resultData;
        });
    }
    search() {
        this._skip = 0;
        if (this.gridDataSource == null) {
            var searchText = this.searchString != undefined ? this.searchString : "";
            searchText = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].convertSpecialXML(searchText);
            searchText = "<SearchTerms>" + searchText + "</SearchTerms>";
            searchText = btoa(unescape(encodeURIComponent('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>')));
            this._isLoading = true;
            //this._additionalSearchString.toString();
            this._gridQueryInfo = { skip: this._skip, take: this._take, pageSize: this._pageSize, searchString: searchText, additionalSearchString: this._additionalSearchString, sort: this.sort, lazyLoadPage: this.lazyLoadPage };
            this.baseService.getDataForGrid(this._gridQueryInfo, "NhomThuoc/GetDataTreeView")
                .subscribe((resultData) => {
                this.data = resultData;
            });
        }
        else {
            this.extOnSearch.emit(this.searchString);
        }
    }
    onKey(event) {
        if (event.key == "Enter") {
            this.search();
        }
    }
    searchChange() {
        if (this.searchString == null || this.searchString == "") {
            this.search();
        }
    }
};
NhomThuocListComponent.ctorParameters = () => [
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NhomThuocListComponent.prototype, "searchPlaceHolder", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NhomThuocListComponent.prototype, "gridDataSource", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NhomThuocListComponent.prototype, "searchString", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NhomThuocListComponent.prototype, "lazyLoadPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NhomThuocListComponent.prototype, "useAddDeault", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NhomThuocListComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NhomThuocListComponent.prototype, "extOnSearch", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"], { static: false })
], NhomThuocListComponent.prototype, "gridChild", void 0);
NhomThuocListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nhom-thuoc-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nhom-thuoc-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/nhom-thuoc/nhom-thuoc-list/nhom-thuoc-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nhom-thuoc-list.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/nhom-thuoc/nhom-thuoc-list/nhom-thuoc-list.component.scss")).default]
    })
], NhomThuocListComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/nhom-thuoc/nhom-thuoc-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/nhom-thuoc/nhom-thuoc-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: NhomThuocRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhomThuocRoutingModule", function() { return NhomThuocRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _nhom_thuoc_list_nhom_thuoc_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nhom-thuoc-list/nhom-thuoc-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/nhom-thuoc/nhom-thuoc-list/nhom-thuoc-list.component.ts");







const routes = [
    {
        path: '',
        component: _nhom_thuoc_list_nhom_thuoc_list_component__WEBPACK_IMPORTED_MODULE_6__["NhomThuocListComponent"],
        data: {
            title: 'Danh mục nhóm thuốc',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhMucNhomThuoc,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    }
];
let NhomThuocRoutingModule = class NhomThuocRoutingModule {
};
NhomThuocRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], NhomThuocRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/nhom-thuoc/nhom-thuoc.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/nhom-thuoc/nhom-thuoc.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: NhomThuocModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhomThuocModule", function() { return NhomThuocModule; });
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
/* harmony import */ var _progress_kendo_angular_treeview__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @progress/kendo-angular-treeview */ "./node_modules/@progress/kendo-angular-treeview/dist/fesm2015/index.js");
/* harmony import */ var _nhom_thuoc_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./nhom-thuoc.service */ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/nhom-thuoc/nhom-thuoc.service.ts");
/* harmony import */ var _nhom_thuoc_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./nhom-thuoc-routing.module */ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/nhom-thuoc/nhom-thuoc-routing.module.ts");
/* harmony import */ var _nhom_thuoc_list_nhom_thuoc_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./nhom-thuoc-list/nhom-thuoc-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/nhom-thuoc/nhom-thuoc-list/nhom-thuoc-list.component.ts");




















let NhomThuocModule = class NhomThuocModule {
};
NhomThuocModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_nhom_thuoc_list_nhom_thuoc_list_component__WEBPACK_IMPORTED_MODULE_19__["NhomThuocListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__["PageLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _progress_kendo_angular_treeview__WEBPACK_IMPORTED_MODULE_16__["TreeViewModule"],
            _nhom_thuoc_routing_module__WEBPACK_IMPORTED_MODULE_18__["NhomThuocRoutingModule"]
        ],
        providers: [
            _nhom_thuoc_service__WEBPACK_IMPORTED_MODULE_17__["NhomThuocService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_11__["BaseService"], useClass: _nhom_thuoc_service__WEBPACK_IMPORTED_MODULE_17__["NhomThuocService"] },
        ]
    })
], NhomThuocModule);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/nhom-thuoc/nhom-thuoc.service.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/nhom-thuoc/nhom-thuoc.service.ts ***!
  \********************************************************************************************/
/*! exports provided: NhomThuocService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhomThuocService", function() { return NhomThuocService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");




let NhomThuocService = class NhomThuocService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'NhomThuoc';
    }
};
NhomThuocService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
NhomThuocService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NhomThuocService);



/***/ })

}]);
//# sourceMappingURL=danh-muc-nhom-he-thong-thuoc-nhom-thuoc-nhom-thuoc-module-es2015.js.map