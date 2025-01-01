(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unknown-error-unknown-error-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/unknown-error/unknown-error.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/unknown-error/unknown-error.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h3 class=\"red p-3 mt-3 text-center\">Có lỗi xảy ra trong quá trình gửi yêu cầu lên server. Bạn hãy thử làm lại lần nữa. Cảm ơn.</h3>\n<p style=\"text-align: center;\">\n    <a color=\"primary\" mat-raised-button href=\"/trang-chu\">Quay lại trang chủ</a>\n</p>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/unknown-error/unknown-error-routing.module.ts": 
        /*!****************************************************************************!*\
          !*** ./src/app/modules/main/unknown-error/unknown-error-routing.module.ts ***!
          \****************************************************************************/
        /*! exports provided: UnknownErrorRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnknownErrorRoutingModule", function () { return UnknownErrorRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _unknown_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unknown-error.component */ "./src/app/modules/main/unknown-error/unknown-error.component.ts");
            var routes = [
                { path: '', component: _unknown_error_component__WEBPACK_IMPORTED_MODULE_3__["UnknownErrorComponent"], data: { title: 'Unknown Error' }, }
            ];
            var UnknownErrorRoutingModule = /** @class */ (function () {
                function UnknownErrorRoutingModule() {
                }
                return UnknownErrorRoutingModule;
            }());
            UnknownErrorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], UnknownErrorRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/unknown-error/unknown-error.component.scss": 
        /*!*************************************************************************!*\
          !*** ./src/app/modules/main/unknown-error/unknown-error.component.scss ***!
          \*************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi91bmtub3duLWVycm9yL3Vua25vd24tZXJyb3IuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/unknown-error/unknown-error.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/modules/main/unknown-error/unknown-error.component.ts ***!
          \***********************************************************************/
        /*! exports provided: UnknownErrorComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnknownErrorComponent", function () { return UnknownErrorComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var UnknownErrorComponent = /** @class */ (function () {
                function UnknownErrorComponent() {
                }
                UnknownErrorComponent.prototype.ngOnInit = function () {
                };
                return UnknownErrorComponent;
            }());
            UnknownErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-unknown-error',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./unknown-error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/unknown-error/unknown-error.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./unknown-error.component.scss */ "./src/app/modules/main/unknown-error/unknown-error.component.scss")).default]
                })
            ], UnknownErrorComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/unknown-error/unknown-error.module.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/modules/main/unknown-error/unknown-error.module.ts ***!
          \********************************************************************/
        /*! exports provided: UnknownErrorModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnknownErrorModule", function () { return UnknownErrorModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _unknown_error_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unknown-error-routing.module */ "./src/app/modules/main/unknown-error/unknown-error-routing.module.ts");
            /* harmony import */ var _unknown_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unknown-error.component */ "./src/app/modules/main/unknown-error/unknown-error.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var UnknownErrorModule = /** @class */ (function () {
                function UnknownErrorModule() {
                }
                return UnknownErrorModule;
            }());
            UnknownErrorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_unknown_error_component__WEBPACK_IMPORTED_MODULE_4__["UnknownErrorComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _unknown_error_routing_module__WEBPACK_IMPORTED_MODULE_3__["UnknownErrorRoutingModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]
                    ]
                })
            ], UnknownErrorModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=unknown-error-unknown-error-module-es2015.js.map
//# sourceMappingURL=unknown-error-unknown-error-module-es5.js.map
//# sourceMappingURL=unknown-error-unknown-error-module-es5.js.map