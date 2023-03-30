"use strict";
exports.id = 68;
exports.ids = [68];
exports.modules = {

/***/ 9211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* binding */ Input)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/InputErrorMessage.tsx

function InputErrorMessage({ error  }) {
    return error ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
        className: "mt-1 text-sm text-red-600",
        children: error.message || "Este campo es obligatorio"
    }) : null;
}

// EXTERNAL MODULE: ./src/utils/functions.ts
var functions = __webpack_require__(2541);
;// CONCATENATED MODULE: ./src/components/Input.tsx



function Input({ label , placeholder ="" , type ="text" , name ="input" , rules ={} , errors ={} , register , ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            label && /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: `${name}_input`,
                className: "mb-1 block text-sm font-medium text-gray-700",
                children: label
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                id: `${name}_input`,
                type: type,
                placeholder: placeholder,
                ...register(name, rules),
                ...props,
                className: (0,functions/* classNames */.A)(errors[name] ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "border-gray-200 focus:border-indigo-500 focus:ring-indigo-500", "block w-full appearance-none rounded-md border-2 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none sm:text-sm")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(InputErrorMessage, {
                error: errors[name]
            })
        ]
    });
}


/***/ }),

/***/ 8506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LoadingSpinner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5447);
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2541);



const colorClasses = {
    [_utils_enums__WEBPACK_IMPORTED_MODULE_1__/* .SPINNER_COLORS.PRIMARY */ .P.PRIMARY]: "text-indigo-700",
    [_utils_enums__WEBPACK_IMPORTED_MODULE_1__/* .SPINNER_COLORS.WHITE */ .P.WHITE]: "text-white"
};
function LoadingSpinner({ content ="Cargando" , color =_utils_enums__WEBPACK_IMPORTED_MODULE_1__/* .SPINNER_COLORS.WHITE */ .P.WHITE  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center",
        children: [
            content,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                className: (0,_utils_functions__WEBPACK_IMPORTED_MODULE_2__/* .classNames */ .A)(colorClasses[color], "-mr-1 ml-3 h-5 w-5 animate-spin"),
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                        className: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Eo": () => (/* binding */ showErrorToast),
/* harmony export */   "XA": () => (/* binding */ showSuccessToast)
/* harmony export */ });
/* unused harmony export showInfoToast */
/* harmony import */ var _utils_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5447);

const constants = {
    TOAST_MESSAGES: {
        success: "Action finished",
        error: "Unexpected error",
        info: "Info"
    },
    TOAST_COLORS: {
        success: "border-teal-500",
        error: "border-red-500",
        info: "border-blue-800"
    },
    TOAST_ICONS: {
        success: `<svg class="h-6 w-6 stroke-2 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>`,
        error: `<svg class="h-6 w-6 stroke-2 text-red-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>`,
        info: `<svg class="h-6 w-6 stroke-2 text-blue-800" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>`
    }
};
function showSuccessToast(msg, options) {
    showToast(_utils_enums__WEBPACK_IMPORTED_MODULE_0__/* .TOAST_KIND.SUCCESS */ .o.SUCCESS, msg, options || {});
}
function showErrorToast(msg, options) {
    showToast(_utils_enums__WEBPACK_IMPORTED_MODULE_0__/* .TOAST_KIND.ERROR */ .o.ERROR, msg, options || {});
}
function showInfoToast(msg, options) {
    showToast(TOAST_KIND.INFO, msg, options || {});
}
function buildToast(id, kind, msg) {
    let toast = document.createElement("div");
    toast.innerHTML = `<div
      id="toast_${id}"
      key="${id}"
      class='sm:mt-2 p-4 flex max-w-md sm:max-w-sm w-auto bg-white shadow-lg ring-1 ring-black ring-opacity-5 sm:rounded-lg border-l-2 ${constants.TOAST_COLORS[kind]} pointer-events-auto hover:bg-gray-50 transition-transform animate-toast-in-right'
    >
      <!--button onClick={() => deleteToast(toastProperties.id)}>X</button-->
      <div class="overflow-hidden flex-1">
        <div>
          <div class="flex items-start">
            <div class="flex-shrink-0">
              ${constants.TOAST_ICONS[kind]}
            </div>
            <div class="ml-3 flex-1 pt-1">
              <p class="toast-text text-sm leading-5 font-medium text-gray-900">
                ${msg || constants.TOAST_MESSAGES[kind]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    return toast;
}
function showToast(kind, msg, options) {
    const id = Math.floor(Math.random() * 101 + 1);
    let toast = buildToast(id, kind, msg);
    const toastTexts = document.getElementsByClassName("toast-text");
    for(let i = 0; i < toastTexts.length; i++){
        if (toastTexts[i].innerHTML.trim() === "Ocurri\xf3 un error" && msg === "Ocurri\xf3 un error") return;
    }
    const rootElement = document.getElementById("toast-container");
    if (!rootElement) return;
    rootElement.insertBefore(toast, rootElement.firstChild);
    setTimeout(function() {
        toast?.parentNode?.removeChild(toast);
    }, options.duration || 8000);
}


/***/ }),

/***/ 5447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ SPINNER_COLORS),
/* harmony export */   "o": () => (/* binding */ TOAST_KIND)
/* harmony export */ });
var TOAST_KIND;
(function(TOAST_KIND) {
    TOAST_KIND["SUCCESS"] = "success";
    TOAST_KIND["ERROR"] = "error";
    TOAST_KIND["INFO"] = "info";
})(TOAST_KIND || (TOAST_KIND = {}));
var SPINNER_COLORS;
(function(SPINNER_COLORS) {
    SPINNER_COLORS["PRIMARY"] = "primary";
    SPINNER_COLORS["WHITE"] = "white";
})(SPINNER_COLORS || (SPINNER_COLORS = {}));


/***/ })

};
;