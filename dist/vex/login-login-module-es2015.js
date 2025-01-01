(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/@auth0/angular-jwt/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@auth0/angular-jwt/index.js ***!
  \**************************************************/
/*! exports provided: JwtModule, JwtInterceptor, JwtHelperService, JWT_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtModule", function() { return JwtModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _src_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/jwt.interceptor */ "./node_modules/@auth0/angular-jwt/src/jwt.interceptor.js");
/* harmony import */ var _src_jwthelper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/jwthelper.service */ "./node_modules/@auth0/angular-jwt/src/jwthelper.service.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _src_jwtoptions_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/jwtoptions.token */ "./node_modules/@auth0/angular-jwt/src/jwtoptions.token.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _src_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtHelperService", function() { return _src_jwthelper_service__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JWT_OPTIONS", function() { return _src_jwtoptions_token__WEBPACK_IMPORTED_MODULE_4__["JWT_OPTIONS"]; });









var JwtModule = /** @class */ (function () {
    function JwtModule(parentModule) {
        if (parentModule) {
            throw new Error('JwtModule is already loaded. It should only be imported in your application\'s main module.');
        }
    }
    JwtModule.forRoot = function (options) {
        return {
            ngModule: JwtModule,
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _src_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"],
                    multi: true
                },
                options.jwtOptionsProvider ||
                    {
                        provide: _src_jwtoptions_token__WEBPACK_IMPORTED_MODULE_4__["JWT_OPTIONS"],
                        useValue: options.config
                    },
                _src_jwthelper_service__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]
            ]
        };
    };
    JwtModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"] },
    ];
    /** @nocollapse */
    JwtModule.ctorParameters = function () { return [
        { type: JwtModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] },] },
    ]; };
    return JwtModule;
}());



/***/ }),

/***/ "./node_modules/@auth0/angular-jwt/src/jwt.interceptor.js":
/*!****************************************************************!*\
  !*** ./node_modules/@auth0/angular-jwt/src/jwt.interceptor.js ***!
  \****************************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _jwthelper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwthelper.service */ "./node_modules/@auth0/angular-jwt/src/jwthelper.service.js");
/* harmony import */ var _jwtoptions_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwtoptions.token */ "./node_modules/@auth0/angular-jwt/src/jwtoptions.token.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_5__);






var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(config, jwtHelper) {
        this.jwtHelper = jwtHelper;
        this.tokenGetter = config.tokenGetter;
        this.headerName = config.headerName || 'Authorization';
        this.authScheme =
            config.authScheme || config.authScheme === ''
                ? config.authScheme
                : 'Bearer ';
        this.whitelistedDomains = config.whitelistedDomains || [];
        this.blacklistedRoutes = config.blacklistedRoutes || [];
        this.throwNoTokenError = config.throwNoTokenError || false;
        this.skipWhenExpired = config.skipWhenExpired;
    }
    JwtInterceptor.prototype.isWhitelistedDomain = function (request) {
        var requestUrl = Object(url__WEBPACK_IMPORTED_MODULE_5__["parse"])(request.url, false, true);
        return (requestUrl.host === null ||
            this.whitelistedDomains.findIndex(function (domain) {
                return typeof domain === 'string'
                    ? domain === requestUrl.host
                    : domain instanceof RegExp
                        ? domain.test(requestUrl.host)
                        : false;
            }) > -1);
    };
    JwtInterceptor.prototype.isBlacklistedRoute = function (request) {
        var url = request.url;
        return (this.blacklistedRoutes.findIndex(function (route) {
            return typeof route === 'string'
                ? route === url
                : route instanceof RegExp
                    ? route.test(url)
                    : false;
        }) > -1);
    };
    JwtInterceptor.prototype.handleInterception = function (token, request, next) {
        var tokenIsExpired = false;
        if (!token && this.throwNoTokenError) {
            throw new Error('Could not get token from tokenGetter function.');
        }
        if (this.skipWhenExpired) {
            tokenIsExpired = token ? this.jwtHelper.isTokenExpired(token) : true;
        }
        if (token && tokenIsExpired && this.skipWhenExpired) {
            request = request.clone();
        }
        else if (token) {
            request = request.clone({
                setHeaders: (_a = {},
                    _a[this.headerName] = "" + this.authScheme + token,
                    _a)
            });
        }
        return next.handle(request);
        var _a;
    };
    JwtInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        if (!this.isWhitelistedDomain(request) ||
            this.isBlacklistedRoute(request)) {
            return next.handle(request);
        }
        var token = this.tokenGetter();
        if (token instanceof Promise) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (asyncToken) {
                return _this.handleInterception(asyncToken, request, next);
            }));
        }
        else {
            return this.handleInterception(token, request, next);
        }
    };
    JwtInterceptor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    JwtInterceptor.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_jwtoptions_token__WEBPACK_IMPORTED_MODULE_2__["JWT_OPTIONS"],] },] },
        { type: _jwthelper_service__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"], },
    ]; };
    return JwtInterceptor;
}());



/***/ }),

/***/ "./node_modules/@auth0/angular-jwt/src/jwthelper.service.js":
/*!******************************************************************!*\
  !*** ./node_modules/@auth0/angular-jwt/src/jwthelper.service.js ***!
  \******************************************************************/
/*! exports provided: JwtHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtHelperService", function() { return JwtHelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _jwtoptions_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwtoptions.token */ "./node_modules/@auth0/angular-jwt/src/jwtoptions.token.js");
// tslint:disable:no-bitwise


var JwtHelperService = /** @class */ (function () {
    function JwtHelperService(config) {
        if (config === void 0) { config = null; }
        this.tokenGetter = config && config.tokenGetter || function () { };
    }
    JwtHelperService.prototype.urlBase64Decode = function (str) {
        var output = str.replace(/-/g, '+').replace(/_/g, '/');
        switch (output.length % 4) {
            case 0: {
                break;
            }
            case 2: {
                output += '==';
                break;
            }
            case 3: {
                output += '=';
                break;
            }
            default: {
                throw 'Illegal base64url string!';
            }
        }
        return this.b64DecodeUnicode(output);
    };
    // credits for decoder goes to https://github.com/atk
    // credits for decoder goes to https://github.com/atk
    JwtHelperService.prototype.b64decode = 
    // credits for decoder goes to https://github.com/atk
    function (str) {
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        var output = '';
        str = String(str).replace(/=+$/, '');
        if (str.length % 4 === 1) {
            throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
        }
        for (
        // initialize result and counters
        var bc = 0, bs = void 0, buffer = void 0, idx = 0; 
        // get next character
        (buffer = str.charAt(idx++)); 
        // character found in table? initialize bit storage and add its ascii value;
        ~buffer &&
            ((bs = bc % 4 ? bs * 64 + buffer : buffer),
                // and if not first of each 4 characters,
                // convert the first 8 bits to one ascii character
                bc++ % 4)
            ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
            : 0) {
            // try to find character in table (0-63, not found => -1)
            buffer = chars.indexOf(buffer);
        }
        return output;
    };
    JwtHelperService.prototype.b64DecodeUnicode = function (str) {
        return decodeURIComponent(Array.prototype.map
            .call(this.b64decode(str), function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
            .join(''));
    };
    JwtHelperService.prototype.decodeToken = function (token) {
        if (token === void 0) { token = this.tokenGetter(); }
        if (!token || token === '') {
            return null;
        }
        var parts = token.split('.');
        if (parts.length !== 3) {
            throw new Error('The inspected token doesn\'t appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.');
        }
        var decoded = this.urlBase64Decode(parts[1]);
        if (!decoded) {
            throw new Error('Cannot decode the token.');
        }
        return JSON.parse(decoded);
    };
    JwtHelperService.prototype.getTokenExpirationDate = function (token) {
        if (token === void 0) { token = this.tokenGetter(); }
        var decoded;
        decoded = this.decodeToken(token);
        if (!decoded || !decoded.hasOwnProperty('exp')) {
            return null;
        }
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    JwtHelperService.prototype.isTokenExpired = function (token, offsetSeconds) {
        if (token === void 0) { token = this.tokenGetter(); }
        if (!token || token === '') {
            return true;
        }
        var date = this.getTokenExpirationDate(token);
        offsetSeconds = offsetSeconds || 0;
        if (date === null) {
            return false;
        }
        return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
    };
    JwtHelperService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    JwtHelperService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_jwtoptions_token__WEBPACK_IMPORTED_MODULE_1__["JWT_OPTIONS"],] },] },
    ]; };
    return JwtHelperService;
}());



/***/ }),

/***/ "./node_modules/@auth0/angular-jwt/src/jwtoptions.token.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@auth0/angular-jwt/src/jwtoptions.token.js ***!
  \*****************************************************************/
/*! exports provided: JWT_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWT_OPTIONS", function() { return JWT_OPTIONS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

var JWT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('JWT_OPTIONS');


/***/ }),

/***/ "./node_modules/punycode/punycode.js":
/*!*******************************************!*\
  !*** ./node_modules/punycode/punycode.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/login/login.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/login/login.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-full h-full bg-pattern\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <!-- max-w-sm -->\n    <div @fadeInUp class=\"card overflow-hidden w-full max-w-21r\">\n        <div class=\"p-6 pb-0\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <div class=\"fill-current text-center\">\n                <img class=\"w-16\" src=\"assets/img/logo.png\">\n            </div>\n        </div>\n\n        <div class=\"text-center mt-4\">\n            <h2 class=\"title m-0\">BỆNH VIỆN ĐA KHOA QUỐC TẾ BẮC HÀ</h2>\n            <h4 class=\"body-2 text-secondary m-0\">{{titleLoaiDangNhap}}</h4>\n        </div>\n\n        <div class=\"p-6\" fxLayout=\"column\" fxLayoutGap=\"16px\">\n            <ng-container *ngIf=\"isNhanVienTrongPhongBan && !isLoginKhamDoanNgoaiVien\">\n                <app-textbox id=\"UserName\" fxFlex=\"grow\" label=\"SỐ ĐIỆN THOẠI/EMAIL\" (keyup)=\"onKeyDangNhap($event)\"\n                    maxlength=\"200\" [type]=\"'email'\" [required]=\"true\" [(model)]=\"login.userName\"\n                    [isWhiteBackground]=\"true\" [validationerror]=\"'UserName' | validationerror:validationErrors\">\n                </app-textbox>\n                <app-textbox id=\"Password\" fxFlex=\"grow\" label=\"MẬT KHẨU\" maxlength=\"200\"\n                    (keyup)=\"onKeyDangNhap($event)\" [type]=\"'password'\" [eyesDisplay]=\"true\" [required]=\"true\"\n                    [(model)]=\"login.password\" [isWhiteBackground]=\"true\"\n                    [validationerror]=\"'Password' | validationerror:validationErrors\">\n                </app-textbox>\n                <app-radio fxFlex=\"grow\" id=\"dangNhapVao\" name=\"dangNhapVao\" [(model)]=\"loaiLogIn\"\n                    (modelChange)=\"changeLoaiLogin($event)\"\n                    [items]=\"[{Value:loginNoiVien,Text:'Nội viện'},{Value:loginNgoaiVien,Text:'Khám đoàn ngoại viện'}]\"\n                    label=\"ĐĂNG NHẬP VÀO\">\n                </app-radio>\n            </ng-container>\n\n            <!-- CHỌN KHOA VÀ PHÒNG BAN -->\n            <ng-container *ngIf=\"!isLoginKhamDoanNgoaiVien && !isNhanVienTrongPhongBan\">\n                <app-dropdownlist popupSettings=\"null\" id=\"Khoa\" fxFlex=\"grow\" label=\"CHỌN KHOA\"\n                    [isWhiteBackground]=\"true\" url=\"PhongBenhVien/GetKhoaNoiBos\" \n                    [(model)]=\"khoa.KeyId\" [modelText]=\"khoa.DisplayName\" [bind]=\"true\"\n                    (modelChange)=\"changeKhoa($event)\">\n                </app-dropdownlist>\n                <app-dropdownlist popupSettings=\"null\" id=\"Phong\" fxFlex=\"grow\" label=\"CHỌN PHÒNG\" [required]=\"true\"\n                    [bind]=\"true\" [isWhiteBackground]=\"true\" (selectionChange)=\"onSelectionChange($event)\"\n                    url=\"PhongBenhVien/GetPhongNoiBos?khoaPhongId={{selectedKhoa}}\" [data]=\"danhSachPhong\"\n                    (modelChange)=\"changePhong($event)\" [validationerror]=\"'Phong' | validationerror:validationErrors\">\n                </app-dropdownlist>\n            </ng-container>\n\n            <!-- CHỌN CÔNG TY -->\n            <ng-container *ngIf=\"isLoginKhamDoanNgoaiVien\">\n                <app-dropdownlist popupSettings=\"null\" id=\"congTy\" fxFlex=\"grow\" label=\"CÔNG TY\" [required]=\"true\"\n                    [isWhiteBackground]=\"true\" [(model)]=\"hopDongKhamSucKhoeId\"\n                    url=\"KhamDoan/TimKiemHopDongConHieuLucNhanVien?userName={{login.userName}}\"\n                    (modelChange)=\"changeHopDong($event)\" [bind]=\"true\"\n                    (selectionChange)=\"selectionChangeHopDong($event)\"\n                    [validationerror]=\"'CongTyId' | validationerror:validationErrors\">\n                </app-dropdownlist>\n                <app-dropdownlist popupSettings=\"null\" id=\"phong\" fxFlex=\"grow\" label=\"PHÒNG\" [required]=\"true\"\n                    [bind]=\"true\" [isWhiteBackground]=\"true\" [(model)]=\"phongId\" [data]=\"danhSachPhong\"\n                    url=\"PhongBenhVien/GetPhongNgoaiViens?hopDongKhamId={{selectedHopDongKham}}\"\n                    [disabled]=\"hopDongKhamSucKhoeId == undefined || hopDongKhamSucKhoeId == null\" (modelChange)=\"changePhong($event)\"\n                    [validationerror]=\"'Phong' | validationerror:validationErrors\">\n                </app-dropdownlist>\n            </ng-container>\n\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" *ngIf=\"isNhanVienTrongPhongBan\">\n                <app-checkbox name=\"dang-thanh-toan\" fxFlex.lt-md=\"auto\" label=\"Nhớ tôi\" [(model)]=\"login.rememberMe\"\n                    (modelChange)=\"toggleRememberMe($event)\">\n                </app-checkbox>\n\n                <a [routerLink]=\"['/khoi-phuc-mat-khau']\" class=\"caption\">Quên mật khẩu?</a>\n            </div>\n\n            <button *ngIf=\"(isHienDangNhap ) && !loading\" (click)=\"onSubmit()\"\n                color=\"primary\" mat-raised-button type=\"button\">\n                ĐĂNG NHẬP\n            </button>\n\n            <ng-container *ngIf=\"(!isNhanVienTrongPhongBan || isLoginKhamDoanNgoaiVien) && !loading\">\n                <button (click)=\"saveHoatDongNhanVien()\" color=\"primary\" mat-raised-button type=\"button\">\n                    CHỌN TIẾP\n                </button>\n                <div fxLayout=\"row\" style=\"text-align: center;text-align: center;\" fxLayoutAlign=\"center\">\n                    <a (click)=\"BackToLogin()\" class=\"caption\">Quay lại</a>\n                </div>\n            </ng-container>\n\n            <button *ngIf=\"loading\" color=\"primary\" mat-raised-button type=\"button\">\n                <img src=\"/assets/img/loader.gif\" alt=\"Loading\" style=\"display: inline;\" />\n            </button>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/url/url.js":
/*!*********************************!*\
  !*** ./node_modules/url/url.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(/*! punycode */ "./node_modules/punycode/punycode.js");
var util = __webpack_require__(/*! ./util */ "./node_modules/url/util.js");

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),

/***/ "./node_modules/url/util.js":
/*!**********************************!*\
  !*** ./node_modules/url/util.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


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

/***/ "./src/app/modules/auth/login/login-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/auth/login/login-routing.module.ts ***!
  \************************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/modules/auth/login/login.component.ts");




const routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        data: {
            title: 'Đăng nhập'
        },
    }
];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginRoutingModule);



/***/ }),

/***/ "./src/app/modules/auth/login/login.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/modules/auth/login/login.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  font-size: 15px;\n}\n\n.max-w-21r {\n  max-width: 21rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoL2xvZ2luL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcYXV0aFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ubWF4LXctMjFyIHtcbiAgbWF4LXdpZHRoOiAyMXJlbTtcbn0iLCIudGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5tYXgtdy0yMXIge1xuICBtYXgtd2lkdGg6IDIxcmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/auth/login/login.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/auth/login/login.component.ts ***!
  \*******************************************************/
/*! exports provided: LoginComponent, Khoa, Phong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Khoa", function() { return Khoa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phong", function() { return Phong; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var src_vex_services_navigation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/@vex/services/navigation.service */ "./src/@vex/services/navigation.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/kham-doan.enum */ "./src/app/shared/enum/kham-doan.enum.ts");








//import { MessagingService } from "src/app/core/services/messaging.service";






let LoginComponent = class LoginComponent {
    constructor(router, fb, authService, 
    //private messagingService: MessagingService,
    cdRef, navigationService, notificationService, apiService) {
        this.router = router;
        this.fb = fb;
        this.authService = authService;
        this.cdRef = cdRef;
        this.navigationService = navigationService;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.login = {};
        this.LookupQueryInfo = {};
        this.loading = false;
        this.validationErrors = [];
        this.step = 1;
        this.preStep = [];
        this.totalExpiredSecond = 0;
        this.intervalCountDown = null;
        this.showExpired = false;
        this.isNhanVienTrongPhongBan = true;
        this.isHienDangNhap = true;
        this.selectedKhoa = 0;
        this.hoatDongNhanVien = {};
        // khi cập nhật thêm luồng xử lý ngoại viện, lưu ý tham khảo luồng xử lý nội bộ hiện tại, tránh thiếu case
        this.titleLoaiDangNhap = "Đăng nhập nội bộ";
        this.selectedHopDongKham = 0;
        this.hopDongKhamSucKhoeId = null;
        this.congTyKhamSucKhoeId = null;
        this.phongId = null;
        this.isLoginKhamDoanNgoaiVien = false;
        this.khoa = { DisplayName: null, KeyId: 0, };
        this.loaiLogIn = src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_13__["HinhThucKhamBenh"].NoiVien;
        this.loginNoiVien = src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_13__["HinhThucKhamBenh"].NoiVien;
        this.loginNgoaiVien = src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_13__["HinhThucKhamBenh"].KhamDoanNgoaiVien;
        const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__["JwtHelperService"]();
        let currentAccessUser = authService.getAccessUser();
        if (currentAccessUser != null &&
            currentAccessUser.AccessToken != null &&
            currentAccessUser.AccessToken.Token != null) {
            const isExpired = helper.isTokenExpired(currentAccessUser.AccessToken.Token);
            if (!isExpired && currentAccessUser.PhongBenhVienId != 0) {
                router.navigate(["trang-chu"]);
            }
        }
    }
    ngOnInit() {
        // this.getPhongs = null;   
        let rememberMe = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_6__["LocalStorageHelper"].getRememberMe();
        if (rememberMe !== undefined && rememberMe != null) {
            this.login = rememberMe;
            //this.login.rememberMe = true;
            if (!this.login.rememberMe) {
                this.login.userName = "";
                this.login.password = "";
            }
        }
        this.login.region = 2;
        if (this.login != null) {
            this.loaiLogIn = this.loginNoiVien;
        }
        else {
            this.loaiLogIn = this.login.HinhThucKhamBenh;
        }
        //nếu lấy data mà phòng bệnh viện mà undefined        
        var phongBenhVienId = this.authService.getPhongLamViecId();
        if (phongBenhVienId === null) {
            this.authService.removePhongLamViecId();
        }
    }
    eventHandler(event, index) {
        setTimeout(function () {
            jQuery("#passCode" + index).focus();
        }, 100);
    }
    toggleRememberMe(value) {
        if (value !== null && value !== undefined) {
            this.login.rememberMe = value;
        }
    }
    onKeyDangNhap(keyInput) {
        if (keyInput.keyCode === 13) {
            this.onSubmit();
        }
    }
    // On submit button click
    onSubmit() {
        //this.loginForm.reset();
        if (this.loading == true) {
            return;
        }
        this.validationErrors = [];
        this.cdRef.detectChanges();
        this.loading = true;
        this.cdRef.markForCheck();
        //this.login.fcmToken = this.messagingService.getFcmToken();
        this.login.HinhThucKhamBenh = this.loaiLogIn;
        var loginInfoCopy = Object.assign({}, this.login);
        this.ProcessUsernameCharacter(loginInfoCopy);
        this.authService.login(loginInfoCopy).subscribe(() => {
            //this.messagingService.receiveMessage();
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_6__["LocalStorageHelper"].setRememberMe(this.login);
            this.navigationService.items = this.authService.getAccessRoute();
            var auth = this.authService.getAccessUser();
            if (this.login.HinhThucKhamBenh == src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_13__["HinhThucKhamBenh"].NoiVien) {
                this.authService.removeCongTyKhamSucKhoeVaHopDongKhamSK();
                if (auth.PhongBenhVienId != 0) {
                    this.authService.setPhongLamViecId(auth.PhongBenhVienId);
                    this.luuHoatDongPhongNhanVien();
                    this.router.navigate(["trang-chu"]);
                }
                else {
                    this.router.navigate(["dang-nhap"]);
                    this.LookupQueryInfo.Take = 50;
                    this.isNhanVienTrongPhongBan = false;
                    this.isHienDangNhap = false;
                    this.khoa.KeyId = null;
                    this.khoa.DisplayName = null;
                    this.selectedPhong = null;
                    this.cdRef.detectChanges();
                    // this.authService.GetListKhoa(this.LookupQueryInfo)
                    //     .subscribe((data) => {
                    //         this.danhSachKhoa = data;
                    //     });
                }
            }
            else if (this.login.HinhThucKhamBenh == src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_13__["HinhThucKhamBenh"].KhamDoanNgoaiVien) {
                this.isNhanVienTrongPhongBan = false;
                this.isLoginKhamDoanNgoaiVien = true;
                this.isHienDangNhap = false;
                this.luuHoatDongPhongNhanVien();
            }
            this.loading = false;
            this.cdRef.markForCheck();
            this.clearCountDown();
        }, (err) => {
            err.ValidationErrors === null || err.ValidationErrors.length == 0
                ? this.notificationService.showError(err.Message)
                : (this.validationErrors = err.ValidationErrors);
            this.cdRef.markForCheck();
            this.loading = false;
        });
    }
    ProcessUsernameCharacter(loginInfo) {
        if (!loginInfo.userName.includes('@') && /[a-zA-Z]/g.test(loginInfo.userName)) {
            loginInfo.userName += '@benhvienbacha.vn';
        }
    }
    onSelectionChange(event) {
        if (event !== null && event !== undefined) {
            this.apiService
                .get("PhongBenhVien/GetKhoaByPhong?phongId=" + event.KeyId)
                .subscribe((resultData) => {
                if (resultData !== null && resultData !== undefined) {
                    this.khoa.KeyId = resultData.KeyId;
                    this.khoa.DisplayName = resultData.DisplayName;
                    this.cdRef.detectChanges();
                }
            });
        }
    }
    changeKhoa(value) {
        if (value !== null && value !== undefined) {
            this.selectedKhoa = value;
            this.LookupQueryInfo.Id = value;
            this.authService.GetListPhong(this.LookupQueryInfo).subscribe((data) => {
                this.danhSachPhong = data;
                this.cdRef.detectChanges();
            });
        }
    }
    selectionChangeHopDong(event) {
        if (event !== undefined && event !== null) {
            this.hopDongKhamSucKhoeId = event.KeyId;
            this.congTyKhamSucKhoeId = event.CongTyKhamSucKhoeId;
        }
    }
    changeHopDong(value) {
        if (value !== undefined && value !== null) {
            this.selectedHopDongKham = value;
            this.LookupQueryInfo.Id = value;
            this.authService.GetPhongNgoaiViens(this.LookupQueryInfo).subscribe((data) => {
                this.danhSachPhong = data;
                this.cdRef.detectChanges();
            });
        }
    }
    changePhong(value) {
        if (value !== undefined && value !== null) {
            this.hoatDongNhanVien.PhongKhamBenhId = value;
            this.selectedPhong = value;
        }
    }
    //save hoat động nhân viên
    luuHoatDongPhongNhanVien() {
        var auth = this.authService.getAccessUser();
        this.hoatDongNhanVien.PhongKhamBenhId = auth.PhongBenhVienId;
        this.authService.HoatDongNhanVien(this.hoatDongNhanVien)
            .subscribe((data) => {
            this.authService.setPhongLamViecId(this.hoatDongNhanVien.PhongKhamBenhId);
        });
    }
    saveHoatDongNhanVien() {
        this.validationErrors = [];
        if (this.login.HinhThucKhamBenh == src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_13__["HinhThucKhamBenh"].NoiVien) {
            if (this.selectedKhoa === null || this.selectedKhoa === undefined) {
                this.validationErrors.push({
                    Field: "Khoa",
                    Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].ObjectRequirement, [
                        "Khoa",
                    ]),
                });
            }
            if (this.selectedPhong === null || this.selectedPhong === undefined) {
                this.validationErrors.push({
                    Field: "Phong",
                    Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].ObjectRequirement, [
                        "Phòng",
                    ]),
                });
            }
            if (this.validationErrors.length > 0) {
                return;
            }
            if (this.hoatDongNhanVien !== null &&
                this.hoatDongNhanVien.PhongKhamBenhId !== undefined &&
                this.hoatDongNhanVien.PhongKhamBenhId !== null &&
                this.login.userName !== "" &&
                this.login.userName !== undefined &&
                this.login.password !== "" &&
                this.login.password !== undefined) {
                this.authService
                    .HoatDongNhanVien(this.hoatDongNhanVien)
                    .subscribe((data) => {
                    // this.onSubmit();
                    this.authService.setPhongLamViecId(this.hoatDongNhanVien.PhongKhamBenhId);
                    this.authService.removeCongTyKhamSucKhoeVaHopDongKhamSK();
                    this.router.navigate(["trang-chu"]);
                });
            }
            else {
                this.cdRef.markForCheck();
                //this.login.fcmToken = this.messagingService.getFcmToken();
                this.router.navigate(["dang-nhap"]);
                this.authService.logout();
            }
        }
        else {
            if (this.hopDongKhamSucKhoeId === null || this.hopDongKhamSucKhoeId === undefined) {
                this.validationErrors.push({
                    Field: "CongTyId",
                    Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].ObjectRequirement, [
                        "Công ty",
                    ]),
                });
            }
            if (this.phongId === null || this.phongId === undefined) {
                this.validationErrors.push({
                    Field: "Phong",
                    Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].ObjectRequirement, [
                        "Phòng",
                    ]),
                });
            }
            if (this.validationErrors.length > 0) {
                return;
            }
            if (this.hoatDongNhanVien !== null &&
                this.hoatDongNhanVien.PhongKhamBenhId !== undefined &&
                this.hoatDongNhanVien.PhongKhamBenhId !== null &&
                this.login.userName !== "" &&
                this.login.userName !== undefined &&
                this.login.password !== "" &&
                this.login.password !== undefined) {
                this.authService
                    .HoatDongNhanVien(this.hoatDongNhanVien)
                    .subscribe((data) => {
                    // this.onSubmit();                  
                    this.authService.setCongTyKhamSucKhoeVaHopDongKhamSK(this.hopDongKhamSucKhoeId, this.congTyKhamSucKhoeId);
                    this.authService.setPhongLamViecId(this.hoatDongNhanVien.PhongKhamBenhId);
                    this.router.navigate(["trang-chu"]);
                });
            }
            else {
                this.cdRef.markForCheck();
                //this.login.fcmToken = this.messagingService.getFcmToken();
                this.router.navigate(["dang-nhap"]);
                this.authService.logout();
            }
        }
    }
    BackToLogin() {
        this.router.navigate(["dang-nhap"]);
        this.isNhanVienTrongPhongBan = true;
        this.isLoginKhamDoanNgoaiVien = false;
        this.isHienDangNhap = true;
    }
    verifyUsername() {
        if (this.loading == true) {
            return;
        }
        this.clearPassCode();
        this.validationErrors = [];
        this.cdRef.detectChanges();
        if (this.login.userName === "" || this.login.userName === undefined) {
            this.validationErrors.push({
                Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].ObjectRequirement, [
                    "Số điện thoại",
                ]),
                Field: "UserName",
            });
            return;
        }
        // return;
        this.loading = true;
        this.authService.verifyUsername(this.login).subscribe((res) => {
            if (res != undefined && res != null && res != "") {
                this.setPreStep();
                this.step = 2;
                setTimeout(function () {
                    jQuery("#passCode1").focus();
                }, 100);
                this.countDown(res);
            }
            else {
                this.setPreStep();
                this.step = 4;
                setTimeout(function () {
                    jQuery("#Password input").focus();
                }, 100);
                this.clearCountDown();
            }
            this.loading = false;
        }, (err) => {
            this.validationErrors.push({ Message: err.Message, Field: "UserName" });
            //this.notificationService.showError(err.Message);
            this.loading = false;
        });
    }
    // On Forgot password link click
    forgetPassword() {
        if (this.loading == true) {
            return;
        }
        this.clearPassCode();
        //this.router.navigate(['khoi-phuc-mat-khau']);
        this.validationErrors = [];
        this.cdRef.detectChanges();
        if (this.login.userName === "" || this.login.userName === undefined) {
            this.validationErrors.push({
                Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].ObjectRequirement, [
                    "Số điện thoại",
                ]),
                Field: "Password",
            });
            return;
        }
        // return;
        this.loading = true;
        this.authService.forgetPassword(this.login).subscribe((res) => {
            if (res != undefined && res != null && res != "") {
                this.setPreStep();
                this.step = 2;
                setTimeout(function () {
                    jQuery("#passCode1").focus();
                }, 100);
                this.countDown(res);
            }
            this.loading = false;
        }, (err) => {
            this.validationErrors.push({ Message: err.Message, Field: "Password" });
            //this.notificationService.showError(err.Message);
            this.loading = false;
        });
    }
    verifyPassCode() {
        if (this.loading == true) {
            return;
        }
        this.login.passCode =
            (this.login.passCode1 != null && this.login.passCode1 != undefined
                ? this.login.passCode1
                : "") +
                (this.login.passCode2 != null && this.login.passCode2 != undefined
                    ? this.login.passCode2
                    : "") +
                (this.login.passCode3 != null && this.login.passCode3 != undefined
                    ? this.login.passCode3
                    : "") +
                (this.login.passCode4 != null && this.login.passCode4 != undefined
                    ? this.login.passCode4
                    : "") +
                (this.login.passCode5 != null && this.login.passCode5 != undefined
                    ? this.login.passCode5
                    : "") +
                (this.login.passCode6 != null && this.login.passCode6 != undefined
                    ? this.login.passCode6
                    : "");
        this.validationErrors = [];
        this.cdRef.detectChanges();
        if (this.login.passCode === "" || this.login.passCode === undefined) {
            this.validationErrors.push({
                Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].ObjectRequirement, [
                    "Mã code",
                ]),
                Field: "PassCode",
            });
        }
        if (this.login.passCode != "" &&
            this.login.passCode != undefined &&
            this.login.passCode.length < 6) {
            this.validationErrors.push({
                Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].InvalidPassCode, []),
                Field: "PassCode",
            });
        }
        if (this.validationErrors.length > 0) {
            return;
        }
        // return;
        this.loading = true;
        this.authService.verifyPassCode(this.login).subscribe((tokenRes) => {
            if (tokenRes == true) {
                this.setPreStep();
                this.step = 3;
                setTimeout(function () {
                    jQuery("#Password input").focus();
                }, 100);
            }
            this.loading = false;
            this.clearCountDown();
        }, (err) => {
            this.validationErrors.push({ Message: err.Message, Field: "PassCode" });
            //this.notificationService.showError(err.Message);
            this.loading = false;
        });
    }
    setPassword() {
        if (this.loading == true) {
            return;
        }
        this.validationErrors = [];
        this.cdRef.detectChanges();
        if (this.login.password === "" || this.login.password === undefined) {
            this.validationErrors.push({
                Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].ObjectRequirement, [
                    "Mật khảu",
                ]),
                Field: "Password",
            });
        }
        if (this.login.confirmPassword === "" ||
            this.login.confirmPassword === undefined) {
            this.validationErrors.push({
                Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].ObjectRequirement, [
                    "Nhập lại mật khẩu",
                ]),
                Field: "ConfirmPassword",
            });
        }
        if (this.login.password != "" &&
            this.login.confirmPassword != "" &&
            this.login.password !== this.login.confirmPassword) {
            this.validationErrors.push({
                Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].ObjectNotMacth, [
                    "Nhập lại mật khẩu",
                ]),
                Field: "ConfirmPassword",
            });
        }
        if (this.validationErrors.length > 0) {
            return;
        }
        // return;
        this.loading = true;
        //this.login.fcmToken = this.messagingService.getFcmToken();
        this.authService.setPassword(this.login).subscribe(() => {
            //this.messagingService.receiveMessage();
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_6__["LocalStorageHelper"].setRememberMe(this.login);
            this.router.navigate(["trang-chu"]);
            this.loading = false;
            this.clearCountDown();
        }, (err) => {
            this.validationErrors.push({
                Message: err.Message,
                Field: "ConfirmPassword",
            });
            //this.notificationService.showError(err.Message);
            this.loading = false;
        });
    }
    // On Forgot password link click
    resendPassCode() {
        if (this.loading == true) {
            return;
        }
        this.clearPassCode();
        //this.router.navigate(['khoi-phuc-mat-khau']);
        this.validationErrors = [];
        this.cdRef.detectChanges();
        if (this.login.userName === "" || this.login.userName === undefined) {
            this.validationErrors.push({
                Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].ObjectRequirement, [
                    "Số điện thoại",
                ]),
                Field: "PassCode",
            });
            return;
        }
        // return;
        this.loading = true;
        this.authService.sendPassCode(this.login).subscribe((res) => {
            if (res != undefined && res != null && res != "") {
                setTimeout(function () {
                    jQuery("#passCode1").focus();
                }, 100);
                this.countDown(res);
            }
            this.loading = false;
        }, (err) => {
            this.validationErrors.push({ Message: err.Message, Field: "PassCode" });
            //this.notificationService.showError(err.Message);
            this.loading = false;
        });
    }
    setPreStep() {
        if (this.preStep.length > 0) {
            if (this.preStep[this.preStep.length - 1] != this.step) {
                this.preStep.push(this.step);
            }
        }
        else {
            this.preStep.push(this.step);
        }
    }
    clearValidateErrorOtherCallback(event) {
        src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].clearValidateErrorOtherCallback(this, event);
    }
    countDown(res) {
        this.totalExpiredSecond = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].subtract(new Date(), new Date(res), "second");
        this.showExpired = true;
        this.intervalCountDown = setInterval(() => {
            this.totalExpiredSecond = this.totalExpiredSecond - 1;
            if (this.totalExpiredSecond == 0 && this.intervalCountDown != null) {
                clearInterval(this.intervalCountDown);
                this.showExpired = false;
            }
        }, 1000);
    }
    continue() {
        switch (this.step) {
            case 1:
                this.verifyUsername();
                break;
            case 2:
                this.verifyPassCode();
                break;
            case 3:
                this.setPassword();
                break;
            case 4:
                this.onSubmit();
                break;
            case 5:
                this.onSubmit();
                break;
        }
    }
    back() {
        this.step =
            this.preStep.length > 0 ? this.preStep[this.preStep.length - 1] : 1;
        if (this.preStep.length > 0) {
            this.preStep.splice(this.preStep.length - 1, 1);
        }
        if (this.totalExpiredSecond > 0) {
            this.showExpired = false;
        }
        switch (this.step) {
            case 1:
                this.clearPassCode();
                this.login.password = "";
                this.login.confirmPassword = "";
                break;
            case 2:
                this.clearPassCode();
                this.login.password = "";
                this.login.confirmPassword = "";
                if (this.totalExpiredSecond > 0) {
                    this.showExpired = true;
                }
                break;
            case 3:
                this.login.password = "";
                this.login.confirmPassword = "";
                break;
        }
    }
    clearPassCode() {
        this.login.passCode1 = "";
        this.login.passCode2 = "";
        this.login.passCode3 = "";
        this.login.passCode4 = "";
        this.login.passCode5 = "";
        this.login.passCode6 = "";
        this.login.passCode = "";
    }
    clearCountDown() {
        if (this.intervalCountDown != null) {
            //clearInterval(this.intervalCountDown);
            this.showExpired = false;
        }
    }
    send() {
        this.router.navigate(["/"]);
    }
    changeLoaiLogin(event) {
        if (event == src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_13__["HinhThucKhamBenh"].NoiVien) {
            this.titleLoaiDangNhap = "Đăng nhập nội bộ";
        }
        else {
            this.titleLoaiDangNhap = "Khám đoàn ngoại viện";
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_vex_services_navigation_service__WEBPACK_IMPORTED_MODULE_10__["NavigationService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("f", { static: false })
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/login/login.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        animations: [src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_9__["fadeInUp400ms"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/modules/auth/login/login.component.scss")).default]
    })
], LoginComponent);

class Khoa {
    constructor(KeyId, DisplayName = "") {
        this.KeyId = KeyId;
        this.DisplayName = DisplayName;
    }
}
class Phong {
    constructor(KeyId, DisplayName = "") {
        this.KeyId = KeyId;
        this.DisplayName = DisplayName;
    }
}


/***/ }),

/***/ "./src/app/modules/auth/login/login.module.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/auth/login/login.module.ts ***!
  \****************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/modules/auth/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "./src/app/modules/auth/login/login.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");

















let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
        ],
        declarations: [
            _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
        ]
    })
], LoginModule);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map