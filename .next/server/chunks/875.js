"use strict";
exports.id = 875;
exports.ids = [875];
exports.modules = {

/***/ 5144:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ ProvideAuth),
/* harmony export */   "a": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9915);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7912);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3155);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_3__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    isAuthenticated: false,
    user: undefined,
    signin: ()=>{},
    signout: ()=>{}
});
function ProvideAuth({ children  }) {
    const auth = useProvideAuth();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: auth,
        children: children
    });
}
function useAuth() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);
}
function useProvideAuth() {
    const [isAuthenticated, setIsAuthenticated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!!js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("token"));
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setUser(_utils_storage__WEBPACK_IMPORTED_MODULE_4__/* ["default"].get */ .Z.get("user"));
    }, [
        isAuthenticated
    ]);
    const signin = async (username, password)=>{
        try {
            const result = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].post(`${_utils_constants__WEBPACK_IMPORTED_MODULE_5__/* .API_URL */ .T}/user/login`, {
                username,
                password
            });
            js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].set("token", result.data.token);
            js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].set("refreshToken", result.data.refreshToken);
            _utils_storage__WEBPACK_IMPORTED_MODULE_4__/* ["default"].set */ .Z.set("user", result.data.user);
            setUser(result.data.user);
            setIsAuthenticated(true);
            return {
                success: true,
                message: "Inicio de sesi\xf3n exitoso",
                data: result.data
            };
        } catch (error) {
            js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].remove("token");
            js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].remove("refreshToken");
            _utils_storage__WEBPACK_IMPORTED_MODULE_4__/* ["default"].set */ .Z.set("user", null);
            setIsAuthenticated(false);
            setUser(undefined);
            return {
                success: false,
                message: error.response.data != null ? error.response.data.message : "Error inesperado"
            };
        }
    };
    const signout = (callback)=>{
        js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].remove("token");
        js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].remove("refreshToken");
        _utils_storage__WEBPACK_IMPORTED_MODULE_4__/* ["default"].set */ .Z.set("user", null);
        setIsAuthenticated(false);
        setUser(undefined);
        callback();
    };
    return {
        isAuthenticated,
        user,
        signin,
        signout
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ API_URL)
/* harmony export */ });
const API_URL = "https://api.crisandal.com" || 0;


/***/ }),

/***/ 2541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ classNames),
/* harmony export */   "l": () => (/* binding */ slugify)
/* harmony export */ });
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const slugify = (str)=>{
    return str.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
};


/***/ }),

/***/ 3155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ StorageService)
/* harmony export */ });
class StorageService {
    static set(key, data) {
        return localStorage.setItem(key, JSON.stringify(data));
    }
    static get(key) {
        return JSON.parse(localStorage.getItem(key) || "{}");
    }
    static remove(key) {
        return localStorage.removeItem(key);
    }
}


/***/ })

};
;