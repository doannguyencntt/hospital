(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/register/register.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/register/register.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--Registration Page Starts-->\n<section id=\"regestration\">\n  <div class=\"container\">\n      <div class=\"row full-height-vh\">\n          <div class=\"col-12 d-flex align-items-center justify-content-center\">\n              <div class=\"card\">\n                  <div class=\"card-body\">\n                      <div class=\"row d-flex\">\n                          <div class=\"col-12 col-sm-12 col-md-6 gradient-deep-orange-orange\">\n                              <div class=\"card-block\">\n                                  <div class=\"card-img overlap\">  \n                                      <img alt=\"Card image cap\" src=\"assets/img/elements/13.png\" width=\"350\" class=\"mx-auto d-block\">\n                                  </div>\n                                  <h2 class=\"card-title font-large-1 text-center white mt-3\">Registration</h2>\n                              </div>\n                          </div>\n                          <div class=\"col-12 col-sm-12 col-md-6 d-flex align-items-center\">\n                              <div class=\"card-block mx-auto\">\n                                  <form   (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n                                      <div class=\"input-group mb-3\">\n                                          <div class=\"input-group-prepend\">\n                                              <span class=\"input-group-text\">\n                                                  <i class=\"icon-user\"></i>\n                                              </span>\n                                          </div>\n                                          <input type=\"text\" class=\"form-control\" name=\"fname\" id=\"fname\" placeholder=\"Name\" ngModel required >\n                                      </div>\n                                      <div class=\"input-group mb-3\">\n                                          <div class=\"input-group-prepend\">\n                                              <span class=\"input-group-text\">\n                                                  <i class=\"ft-mail\"></i>\n                                              </span>\n                                          </div>\n                                          <input type=\"email\" class=\"form-control\" name=\"inputEmail\" id=\"inputEmail\" placeholder=\"Email\" ngModel required email >\n                                      </div>\n                                      <div class=\"input-group mb-3\">\n                                          <div class=\"input-group-prepend\">\n                                              <span class=\"input-group-text\">\n                                                  <i class=\"ft-lock\"></i>\n                                              </span>\n                                          </div>\n                                          <input type=\"password\" class=\"form-control\" name=\"inputPass\" id=\"inputPass\" placeholder=\"Password\" ngModel required >\n                                      </div>\n                                      <div class=\"form-group col-sm-offset-1\">\n                                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                                              <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"terms\">\n                                              <label class=\"custom-control-label pl-2\" for=\"terms\">I agree <a>terms and conditions</a></label>\n                                          </div>\n                                      </div>\n                                      <div class=\"form-group text-center\">\n                                          <button type=\"button\" class=\"btn btn-warning btn-raised\" [disabled]=\"!f.valid\">Get Started</button>\n                                      </div>\n                                  </form>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</section>\n<!--Registration Page Ends-->");
            /***/ 
        }),
        /***/ "./src/app/modules/auth/register/register-routing.module.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/modules/auth/register/register-routing.module.ts ***!
          \******************************************************************/
        /*! exports provided: RegisterRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRoutingModule", function () { return RegisterRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.component */ "./src/app/modules/auth/register/register.component.ts");
            var routes = [
                {
                    path: '',
                    component: _register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
                    data: {
                        title: 'Đăng ký'
                    },
                }
            ];
            var RegisterRoutingModule = /** @class */ (function () {
                function RegisterRoutingModule() {
                }
                return RegisterRoutingModule;
            }());
            RegisterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], RegisterRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/auth/register/register.component.scss": 
        /*!***************************************************************!*\
          !*** ./src/app/modules/auth/register/register.component.scss ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("form {\n  padding-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoL3JlZ2lzdGVyL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcYXV0aFxccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufSIsImZvcm0ge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/auth/register/register.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/modules/auth/register/register.component.ts ***!
          \*************************************************************/
        /*! exports provided: RegisterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return RegisterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var RegisterComponent = /** @class */ (function () {
                function RegisterComponent() {
                }
                RegisterComponent.prototype.ngOnInit = function () {
                };
                //  On submit click, reset field value
                RegisterComponent.prototype.onSubmit = function () {
                    this.registerForm.reset();
                };
                return RegisterComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false })
            ], RegisterComponent.prototype, "registerForm", void 0);
            RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-register',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/register/register.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/modules/auth/register/register.component.scss")).default]
                })
            ], RegisterComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/auth/register/register.module.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/modules/auth/register/register.module.ts ***!
          \**********************************************************/
        /*! exports provided: RegisterModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function () { return RegisterModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/modules/auth/register/register-routing.module.ts");
            /* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register.component */ "./src/app/modules/auth/register/register.component.ts");
            var RegisterModule = /** @class */ (function () {
                function RegisterModule() {
                }
                return RegisterModule;
            }());
            RegisterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _register_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegisterRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                    ],
                    declarations: [
                        _register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
                    ]
                })
            ], RegisterModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=register-register-module-es2015.js.map
//# sourceMappingURL=register-register-module-es5.js.map
//# sourceMappingURL=register-register-module-es5.js.map