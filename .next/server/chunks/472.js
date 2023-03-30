"use strict";
exports.id = 472;
exports.ids = [472];
exports.modules = {

/***/ 1472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ FileUploadComponent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@heroicons/react/24/outline"
var outline_ = __webpack_require__(2135);
// EXTERNAL MODULE: ./src/utils/functions.ts
var functions = __webpack_require__(2541);
;// CONCATENATED MODULE: ./src/utils/fileUtils.tsx
const values = {
    VALID_EXTENSIONS: {
        document: [
            ".png",
            ".jpg",
            ".jpeg",
            ".pdf",
            ".word",
            ".doc",
            ".docx",
            ".xml",
            "application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            ".xls",
            ".xlsx",
            ".xlsm",
            ".xlsb"
        ],
        pdf: [
            ".pdf"
        ],
        img: [
            ".png",
            ".jpg",
            ".jpeg"
        ],
        voucher: [
            ".pdf",
            ".png",
            ".jpg",
            ".jpeg"
        ],
        excel: [
            "xls",
            "xlsx",
            "xlsm",
            "xlsb"
        ]
    },
    IMAGE_EXTENSIONS: [
        "png",
        "jpg",
        "jpeg"
    ],
    PDF_EXTENSIONS: [
        "pdf"
    ],
    WORD_EXTENSIONS: [
        "word",
        "doc",
        "docx",
        "xml",
        "application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ],
    EXCEL_EXTENSIONS: [
        "xls",
        "xlsx",
        "xlsm",
        "xlsb"
    ]
};
function validateFile(oInput, file_kind, index) {
    if (oInput.type !== "file") return;
    if (oInput.value.length < 1) return;
    let isValid = false, validFileExtensions = values.VALID_EXTENSIONS[file_kind];
    for(let j = 0; j < validFileExtensions.length; j++){
        let sCurExtension = validFileExtensions[j];
        if (oInput?.files?.[index || 0]?.name.substr(oInput?.files?.[index || 0]?.name?.length - sCurExtension.length, sCurExtension.length).toLowerCase() === sCurExtension.toLowerCase()) {
            isValid = true;
            break;
        }
    }
    return isValid;
}
function checkFileType(fileName) {
    const splitted = fileName.split(".");
    const extension = splitted[splitted.length - 1];
    if (extension === "pdf") return "pdf";
    else if (values.IMAGE_EXTENSIONS.includes(extension)) return "image";
    else if (values.WORD_EXTENSIONS.includes(extension)) return "word";
    else if (values.EXCEL_EXTENSIONS.includes(extension)) return "excel";
    else return "other";
}

// EXTERNAL MODULE: ./src/utils/enums.tsx
var enums = __webpack_require__(5447);
// EXTERNAL MODULE: ./src/components/Toast.tsx
var Toast = __webpack_require__(553);
// EXTERNAL MODULE: ./src/components/LoadingSpinner.tsx
var LoadingSpinner = __webpack_require__(8506);
;// CONCATENATED MODULE: ./src/components/FileUpload/index.tsx








function FileUploadComponent({ label , generalApi , files , setFiles , folder , name , maxFiles  }) {
    const [imagePreview, setImagePreview] = (0,external_react_.useState)(null);
    const [uploadLoading, setUploadLoading] = (0,external_react_.useState)(false);
    const checkFile = async (event, index)=>{
        let isValid = validateFile(event.target, "document", index);
        if (!isValid || !event.target?.files) {
            setImagePreview(null);
            (0,Toast/* showErrorToast */.Eo)("Formato de documento no v\xe1lido.");
            return undefined;
        }
        if (event.target.files[index].size > 10000000) {
            setImagePreview(null);
            (0,Toast/* showErrorToast */.Eo)("Peso m\xe1ximo excedido.");
            return undefined;
        }
        if (checkFileType(event.target.files[index].name) === "image") {
            var reader = new FileReader();
            reader.onload = (e)=>{
                setImagePreview(e?.target?.result);
            };
            await reader.readAsDataURL(event.target.files[index]);
        }
        return event.target.files[index];
    };
    async function saveFile(event, index) {
        const file = await checkFile(event, index);
        if (!file) return;
        let fileData = new FormData();
        if (folder) fileData.append("folder", folder);
        if (name) fileData.append("name", name);
        fileData.append("upfile", file);
        setUploadLoading(true);
        const result = await generalApi.post(`/utils/file`, fileData);
        setUploadLoading(false);
        if (!result?.success) {
            (0,Toast/* showErrorToast */.Eo)(result?.message);
            return;
        }
        (0,Toast/* showSuccessToast */.XA)("Archivo guardado");
        setImagePreview(null);
        return result.data;
    }
    async function saveAllFiles(event) {
        const filesToUpload = event.target?.files;
        if (!filesToUpload) return;
        if (maxFiles && filesToUpload.length + files.length > maxFiles) {
            (0,Toast/* showErrorToast */.Eo)(`No se pueden subir más de ${maxFiles} archivos.`);
            return;
        }
        const newFiles = [];
        for(let i = 0; i < filesToUpload.length; i++){
            const reponse = await saveFile(event, i);
            if (reponse) newFiles.push(reponse);
        }
        setFiles([
            ...files,
            ...newFiles
        ]);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: "block mb-1 text-sm font-medium text-gray-700",
                children: label
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-4 flex flex-col gap-4",
                children: [
                    maxFiles && files.length >= maxFiles ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative max-h-32 min-w-fit flex-1 rounded-md border-2 border-dashed border-gray-300 px-2 py-4 text-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "No se pueden subir m\xe1s archivos"
                        })
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative max-h-32 min-w-fit flex-1 rounded-md border-2 border-dashed border-gray-300 px-2 py-4 text-center",
                        children: [
                            uploadLoading && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "absolute inset-0 z-10 flex items-center justify-center bg-black/5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(LoadingSpinner/* default */.Z, {
                                    color: enums/* SPINNER_COLORS.PRIMARY */.P.PRIMARY
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (0,functions/* classNames */.A)(uploadLoading ? "opacity-10" : "", "mb-4"),
                                children: "Elegir archivo"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (0,functions/* classNames */.A)(uploadLoading ? "opacity-10" : "", "flex flex-col items-center justify-evenly sm:flex-row sm:space-y-0"),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center space-x-2 text-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                className: "mx-auto h-12 w-12 text-gray-400",
                                                stroke: "currentColor",
                                                fill: "none",
                                                viewBox: "0 0 48 48",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
                                                    strokeWidth: 2,
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "text-sm text-gray-600",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                        htmlFor: "inp_document_file",
                                                        className: "relative mx-auto cursor-pointer rounded-md bg-white font-medium text-indigo-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "Escoger archivo"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                multiple: !maxFiles || maxFiles > 1,
                                                                disabled: maxFiles ? files.length >= maxFiles : false,
                                                                id: "inp_document_file",
                                                                name: "inp_document_file",
                                                                type: "file",
                                                                className: "sr-only",
                                                                onChange: saveAllFiles
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "max-w-[120px] text-xs text-gray-500",
                                                        children: "de hasta 10MB"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    imagePreview && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: imagePreview,
                                        className: "max-h-12 max-w-full rounded-lg border-2 border-indigo-400 sm:max-w-[50%]",
                                        alt: "Imagen del documento"
                                    })
                                ]
                            })
                        ]
                    }),
                    files.map((file)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-between max-h-24 max-w-sm gap-2 rounded-lg p-2 shadow-card",
                            children: [
                                checkFileType(file.name) === "image" ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "h-16 rounded-lg border-2 border-indigo-400",
                                    src: file.url,
                                    alt: ""
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(outline_.DocumentTextIcon, {
                                    className: "mx-auto mb-2 h-12 w-12 text-gray-400"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-col items-end justify-between gap-1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text-right",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-sm text-gray-600",
                                                children: file.name
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: file.url,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(outline_.ArrowDownTrayIcon, {
                                                        className: "h-5 w-5"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "w-auto",
                                                    onClick: ()=>{
                                                        setFiles(files.filter((f)=>f.url !== file.url));
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(outline_.TrashIcon, {
                                                        className: "h-5 w-5"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }, file.url))
                ]
            })
        ]
    });
}


/***/ })

};
;