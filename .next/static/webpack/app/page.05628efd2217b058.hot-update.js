"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/NavbarSignOut.tsx":
/*!**************************************!*\
  !*** ./components/NavbarSignOut.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n // Import signOut\nconst NavbarSignOut = ()=>{\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    // Función modificada para cerrar sesión y redirigir a la página principal\n    const handleSignOut = ()=>{\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)({\n            redirect: true,\n            callbackUrl: \"/\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full absolute z-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    href: \"/dashboard\",\n                    className: \"flex justify-center items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: \"/atomo.svg\",\n                            alt: \"atomo\",\n                            width: 50,\n                            height: 18,\n                            className: \"object-contain\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\healthSync\\\\components\\\\NavbarSignOut.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 21\n                        }, undefined),\n                        \" \\xa0\\xa0\\xa0 \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: \"HealthSync\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\healthSync\\\\components\\\\NavbarSignOut.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 43\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\healthSync\\\\components\\\\NavbarSignOut.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ml-auto flex space-x-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-black text-center\",\n                            children: session && session.user && session.user.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\healthSync\\\\components\\\\NavbarSignOut.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>{\n                                (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)();\n                            },\n                            className: \"text-white rounded-full bg-pink-400 min-w-[150px] min-h-[48px] font-semibold\",\n                            children: \"Cerrar Sesi\\xf3n\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\healthSync\\\\components\\\\NavbarSignOut.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\healthSync\\\\components\\\\NavbarSignOut.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\xampp\\\\htdocs\\\\healthSync\\\\components\\\\NavbarSignOut.tsx\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\healthSync\\\\components\\\\NavbarSignOut.tsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, undefined);\n};\n_s(NavbarSignOut, \"xGqsfA9Yc4bug2CeORcyTsHwvXY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = NavbarSignOut;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavbarSignOut);\nvar _c;\n$RefreshReg$(_c, \"NavbarSignOut\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTmF2YmFyU2lnbk91dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDNkI7QUFDRTtBQUN1QixDQUFDLGlCQUFpQjtBQUl4RSxNQUFNSSxnQkFBZ0I7O0lBQ2xCLE1BQU0sRUFBRUMsTUFBTUMsT0FBTyxFQUFFLEdBQVFKLDJEQUFVQTtJQUN6QywwRUFBMEU7SUFDMUUsTUFBTUssZ0JBQWdCO1FBQ2xCSix3REFBT0EsQ0FBQztZQUFFSyxVQUFVO1lBQU1DLGFBQWE7UUFBSTtJQUMvQztJQUVBLHFCQUNJLDhEQUFDQztRQUFPQyxXQUFVO2tCQUNkLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDWCw4REFBQ1gsaURBQUlBO29CQUFDYSxNQUFLO29CQUFhRixXQUFVOztzQ0FDOUIsOERBQUNWLGtEQUFLQTs0QkFDRmEsS0FBSTs0QkFDSkMsS0FBSTs0QkFDSkMsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUk4sV0FBVTs7Ozs7O3dCQUNaO3NDQUFvQiw4REFBQ087c0NBQU87Ozs7Ozs7Ozs7Ozs4QkFHbEMsOERBQUNDO29CQUFJUixXQUFVOztzQ0FDWCw4REFBQ1E7NEJBQUlSLFdBQVU7c0NBQ2RMLFdBQVdBLFFBQVFjLElBQUksSUFBSWQsUUFBUWMsSUFBSSxDQUFDQyxJQUFJOzs7Ozs7c0NBRTdDLDhEQUFDQzs0QkFBT0MsU0FBUztnQ0FBT3BCLHdEQUFPQTs0QkFBRzs0QkFDOUJRLFdBQVU7c0NBQStFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFqSDtHQWpDTVA7O1FBQzZCRix1REFBVUE7OztLQUR2Q0U7QUFtQ04sK0RBQWVBLGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXJTaWduT3V0LnRzeD82MWJjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbk91dCB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7IC8vIEltcG9ydCBzaWduT3V0XHJcblxyXG5pbXBvcnQgQ3VzdG9tQnV0dG9uIGZyb20gJy4vQ3VzdG9tQnV0dG9uJztcclxuXHJcbmNvbnN0IE5hdmJhclNpZ25PdXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfTogYW55ID0gdXNlU2Vzc2lvbigpO1xyXG4gICAgLy8gRnVuY2nDs24gbW9kaWZpY2FkYSBwYXJhIGNlcnJhciBzZXNpw7NuIHkgcmVkaXJpZ2lyIGEgbGEgcMOhZ2luYSBwcmluY2lwYWxcclxuICAgIGNvbnN0IGhhbmRsZVNpZ25PdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2lnbk91dCh7IHJlZGlyZWN0OiB0cnVlLCBjYWxsYmFja1VybDogJy8nIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJ3LWZ1bGwgYWJzb2x1dGUgei0xMFwiPiBcclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtYXgtdy1bMTQ0MHB4XSBteC1hdXRvIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBzbTpweC0xNiBweC02IHB5LTRcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCIgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2F0b21vLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImF0b21vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezE4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY29udGFpblwiIFxyXG4gICAgICAgICAgICAgICAgICAgIC8+ICZuYnNwOyZuYnNwOyZuYnNwOyA8c3Ryb25nPkhlYWx0aFN5bmM8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLWF1dG8gZmxleCBzcGFjZS14LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1ibGFjayB0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAge3Nlc3Npb24gJiYgc2Vzc2lvbi51c2VyICYmIHNlc3Npb24udXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge3NpZ25PdXQoKTt9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgYmctcGluay00MDAgbWluLXctWzE1MHB4XSBtaW4taC1bNDhweF0gZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDZXJyYXIgU2VzacOzblxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJTaWduT3V0XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJ1c2VTZXNzaW9uIiwic2lnbk91dCIsIk5hdmJhclNpZ25PdXQiLCJkYXRhIiwic2Vzc2lvbiIsImhhbmRsZVNpZ25PdXQiLCJyZWRpcmVjdCIsImNhbGxiYWNrVXJsIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwibmF2IiwiaHJlZiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwic3Ryb25nIiwiZGl2IiwidXNlciIsIm5hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/NavbarSignOut.tsx\n"));

/***/ })

});