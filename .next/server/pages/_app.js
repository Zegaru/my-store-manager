(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9752);
/* harmony import */ var _src_contexts_Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5144);
/* harmony import */ var _src_components_layouts_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(405);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _src_contexts_Auth__WEBPACK_IMPORTED_MODULE_2__, _src_components_layouts_Layout__WEBPACK_IMPORTED_MODULE_3__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _src_contexts_Auth__WEBPACK_IMPORTED_MODULE_2__, _src_components_layouts_Layout__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient();
function App({ Component , pageProps  }) {
    const getLayout = Component.getLayout ?? ((page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_layouts_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            children: page
        }));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClientProvider, {
        client: queryClient,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_contexts_Auth__WEBPACK_IMPORTED_MODULE_2__/* .ProvideAuth */ .Y, {
                children: getLayout(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                }))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "toast-container",
                className: "fixed bottom-0 left-0 right-0 z-50 sm:bottom-auto sm:left-auto sm:top-20 sm:right-4"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 405:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2135);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2541);
/* harmony import */ var _contexts_Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5144);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_3__, _contexts_Auth__WEBPACK_IMPORTED_MODULE_5__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_3__, _contexts_Auth__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const sidebarNavigation = [
    {
        name: "Productos",
        href: "/",
        icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.HomeIcon,
        current: false
    },
    {
        name: "Colores",
        href: "/colores",
        icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.SwatchIcon,
        current: false
    },
    {
        name: "Categor\xedas",
        href: "/categorias",
        icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.TagIcon,
        current: false
    },
    {
        name: "Filtros",
        href: "/filtros",
        icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.FunnelIcon,
        current: false
    },
    {
        name: "Informaci\xf3n",
        href: "/informacion",
        icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.InformationCircleIcon,
        current: false
    }
];
function Layout({ children  }) {
    const location = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const auth = (0,_contexts_Auth__WEBPACK_IMPORTED_MODULE_5__/* .useAuth */ .a)();
    const [mobileMenuOpen, setMobileMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!auth.isAuthenticated) location.replace("/login");
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex h-full",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "hidden w-28 overflow-y-auto bg-indigo-700 md:block",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex w-full flex-col items-center py-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-shrink-0 items-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "h-8 w-auto",
                                    src: "https://tailwindui.com/img/logos/mark.svg?color=white",
                                    alt: "Your Company"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mt-6 w-full flex-1 space-y-1 px-2",
                                children: sidebarNavigation.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: item.href,
                                        className: (0,_utils_functions__WEBPACK_IMPORTED_MODULE_6__/* .classNames */ .A)(item.current ? "bg-indigo-800 text-white" : "text-indigo-100 hover:bg-indigo-800 hover:text-white", "group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium"),
                                        "aria-current": item.current ? "page" : undefined,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(item.icon, {
                                                className: (0,_utils_functions__WEBPACK_IMPORTED_MODULE_6__/* .classNames */ .A)(item.current ? "text-white" : "text-indigo-300 group-hover:text-white", "h-6 w-6"),
                                                "aria-hidden": "true"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "mt-2",
                                                children: item.name
                                            })
                                        ]
                                    }, item.name))
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition.Root, {
                    show: mobileMenuOpen,
                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog, {
                        as: "div",
                        className: "relative z-20 md:hidden",
                        onClose: setMobileMenuOpen,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition.Child, {
                                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                enter: "transition-opacity ease-linear duration-300",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "transition-opacity ease-linear duration-300",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "fixed inset-0 bg-gray-600 bg-opacity-75"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "fixed inset-0 z-40 flex",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition.Child, {
                                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                        enter: "transition ease-in-out duration-300 transform",
                                        enterFrom: "-translate-x-full",
                                        enterTo: "translate-x-0",
                                        leave: "transition ease-in-out duration-300 transform",
                                        leaveFrom: "translate-x-0",
                                        leaveTo: "-translate-x-full",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog.Panel, {
                                            className: "relative flex w-full max-w-xs flex-1 flex-col bg-indigo-700 pt-5 pb-4",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition.Child, {
                                                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                                    enter: "ease-in-out duration-300",
                                                    enterFrom: "opacity-0",
                                                    enterTo: "opacity-100",
                                                    leave: "ease-in-out duration-300",
                                                    leaveFrom: "opacity-100",
                                                    leaveTo: "opacity-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "absolute top-1 right-0 -mr-14 p-1",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                            type: "button",
                                                            className: "flex h-12 w-12 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-white",
                                                            onClick: ()=>setMobileMenuOpen(false),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.XMarkIcon, {
                                                                    className: "h-6 w-6 text-white",
                                                                    "aria-hidden": "true"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "sr-only",
                                                                    children: "Close sidebar"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex flex-shrink-0 items-center px-4",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "h-8 w-auto",
                                                        src: "https://tailwindui.com/img/logos/mark.svg?color=white",
                                                        alt: "Your Company"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mt-5 h-0 flex-1 overflow-y-auto px-2",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                                        className: "flex h-full flex-col",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "space-y-1",
                                                            children: sidebarNavigation.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    href: item.href,
                                                                    className: (0,_utils_functions__WEBPACK_IMPORTED_MODULE_6__/* .classNames */ .A)(item.current ? "bg-indigo-800 text-white" : "text-indigo-100 hover:bg-indigo-800 hover:text-white", "group py-2 px-3 rounded-md flex items-center text-sm font-medium"),
                                                                    "aria-current": item.current ? "page" : undefined,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(item.icon, {
                                                                            className: (0,_utils_functions__WEBPACK_IMPORTED_MODULE_6__/* .classNames */ .A)(item.current ? "text-white" : "text-indigo-300 group-hover:text-white", "mr-3 h-6 w-6"),
                                                                            "aria-hidden": "true"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: item.name
                                                                        })
                                                                    ]
                                                                }, item.name))
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-14 flex-shrink-0",
                                        "aria-hidden": "true"
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-1 flex-col overflow-hidden",
                    children: children
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 2135:
/***/ ((module) => {

"use strict";
module.exports = require("@heroicons/react/24/outline");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = import("@headlessui/react");;

/***/ }),

/***/ 9752:
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [875], () => (__webpack_exec__(3847)));
module.exports = __webpack_exports__;

})();