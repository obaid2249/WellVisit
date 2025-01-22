"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/lib/redux/features/appointmentSlice.ts":
/*!****************************************************!*\
  !*** ./src/lib/redux/features/appointmentSlice.ts ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   bookAppointment: () => (/* binding */ bookAppointment),\n/* harmony export */   cancelAppointment: () => (/* binding */ cancelAppointment),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   setAppointments: () => (/* binding */ setAppointments),\n/* harmony export */   updateAppointment: () => (/* binding */ updateAppointment)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    list: []\n};\nconst appointmentSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"appointments\",\n    initialState,\n    reducers: {\n        setAppointments: (state, action)=>{\n            state.list = action.payload;\n        },\n        bookAppointment: (state, action)=>{\n            state.list.push(action.payload);\n        },\n        updateAppointment: (state, action)=>{\n            const index = state.list.findIndex((a)=>a.id === action.payload.id);\n            if (index !== -1) {\n                state.list[index] = action.payload;\n            }\n        },\n        cancelAppointment: (state, action)=>{\n            const index = state.list.findIndex((a)=>a.id === action.payload);\n            if (index !== -1) {\n                state.list[index].status = \"cancelled\";\n            }\n        }\n    }\n});\nconst { setAppointments, bookAppointment, updateAppointment, cancelAppointment } = appointmentSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appointmentSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvcmVkdXgvZmVhdHVyZXMvYXBwb2ludG1lbnRTbGljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUU7QUFnQm5FLE1BQU1DLGVBQWlDO0lBQ3JDQyxNQUFNLEVBQUU7QUFDVjtBQUVBLE1BQU1DLG1CQUFtQkgsNkRBQVdBLENBQUM7SUFDbkNJLE1BQU07SUFDTkg7SUFDQUksVUFBVTtRQUNSQyxpQkFBaUIsQ0FBQ0MsT0FBT0M7WUFDdkJELE1BQU1MLElBQUksR0FBR00sT0FBT0MsT0FBTztRQUM3QjtRQUNBQyxpQkFBaUIsQ0FBQ0gsT0FBT0M7WUFDdkJELE1BQU1MLElBQUksQ0FBQ1MsSUFBSSxDQUFDSCxPQUFPQyxPQUFPO1FBQ2hDO1FBQ0FHLG1CQUFtQixDQUFDTCxPQUFPQztZQUN6QixNQUFNSyxRQUFRTixNQUFNTCxJQUFJLENBQUNZLFNBQVMsQ0FBQyxDQUFDQyxJQUFNQSxFQUFFQyxFQUFFLEtBQUtSLE9BQU9DLE9BQU8sQ0FBQ08sRUFBRTtZQUNwRSxJQUFJSCxVQUFVLENBQUMsR0FBRztnQkFDaEJOLE1BQU1MLElBQUksQ0FBQ1csTUFBTSxHQUFHTCxPQUFPQyxPQUFPO1lBQ3BDO1FBQ0Y7UUFDQVEsbUJBQW1CLENBQUNWLE9BQU9DO1lBQ3pCLE1BQU1LLFFBQVFOLE1BQU1MLElBQUksQ0FBQ1ksU0FBUyxDQUFDLENBQUNDLElBQU1BLEVBQUVDLEVBQUUsS0FBS1IsT0FBT0MsT0FBTztZQUNqRSxJQUFJSSxVQUFVLENBQUMsR0FBRztnQkFDaEJOLE1BQU1MLElBQUksQ0FBQ1csTUFBTSxDQUFDSyxNQUFNLEdBQUc7WUFDN0I7UUFDRjtJQUNGO0FBQ0Y7QUFFTyxNQUFNLEVBQ1haLGVBQWUsRUFDZkksZUFBZSxFQUNmRSxpQkFBaUIsRUFDakJLLGlCQUFpQixFQUNsQixHQUFHZCxpQkFBaUJnQixPQUFPLENBQUM7QUFDN0IsaUVBQWVoQixpQkFBaUJpQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIi9ob21lL2Fub255bW91cy9OaWhhbC9XZWJEZXYvUHJvamVjdHMvTWFqb3IvbWFqb3Ivc3JjL2xpYi9yZWR1eC9mZWF0dXJlcy9hcHBvaW50bWVudFNsaWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCB0eXBlIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5pbnRlcmZhY2UgQXBwb2ludG1lbnQge1xuICBpZDogc3RyaW5nO1xuICBkb2N0b3JJZDogc3RyaW5nO1xuICBwYXRpZW50SWQ6IHN0cmluZztcbiAgZGF0ZTogc3RyaW5nO1xuICBkb2N0b3JOYW1lOiBzdHJpbmc7XG4gIHBhdGllbnROYW1lOiBzdHJpbmc7XG4gIHN0YXR1czogXCJ1cGNvbWluZ1wiIHwgXCJjb21wbGV0ZWRcIiB8IFwiY2FuY2VsbGVkXCI7XG59XG5cbmludGVyZmFjZSBBcHBvaW50bWVudFN0YXRlIHtcbiAgbGlzdDogQXBwb2ludG1lbnRbXTtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBBcHBvaW50bWVudFN0YXRlID0ge1xuICBsaXN0OiBbXSxcbn07XG5cbmNvbnN0IGFwcG9pbnRtZW50U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiYXBwb2ludG1lbnRzXCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRBcHBvaW50bWVudHM6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPEFwcG9pbnRtZW50W10+KSA9PiB7XG4gICAgICBzdGF0ZS5saXN0ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSxcbiAgICBib29rQXBwb2ludG1lbnQ6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPEFwcG9pbnRtZW50PikgPT4ge1xuICAgICAgc3RhdGUubGlzdC5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcbiAgICB9LFxuICAgIHVwZGF0ZUFwcG9pbnRtZW50OiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxBcHBvaW50bWVudD4pID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUubGlzdC5maW5kSW5kZXgoKGEpID0+IGEuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKTtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgc3RhdGUubGlzdFtpbmRleF0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNhbmNlbEFwcG9pbnRtZW50OiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLmxpc3QuZmluZEluZGV4KChhKSA9PiBhLmlkID09PSBhY3Rpb24ucGF5bG9hZCk7XG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHN0YXRlLmxpc3RbaW5kZXhdLnN0YXR1cyA9IFwiY2FuY2VsbGVkXCI7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3Qge1xuICBzZXRBcHBvaW50bWVudHMsXG4gIGJvb2tBcHBvaW50bWVudCxcbiAgdXBkYXRlQXBwb2ludG1lbnQsXG4gIGNhbmNlbEFwcG9pbnRtZW50LFxufSA9IGFwcG9pbnRtZW50U2xpY2UuYWN0aW9ucztcbmV4cG9ydCBkZWZhdWx0IGFwcG9pbnRtZW50U2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImxpc3QiLCJhcHBvaW50bWVudFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0QXBwb2ludG1lbnRzIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYm9va0FwcG9pbnRtZW50IiwicHVzaCIsInVwZGF0ZUFwcG9pbnRtZW50IiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJhIiwiaWQiLCJjYW5jZWxBcHBvaW50bWVudCIsInN0YXR1cyIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/redux/features/appointmentSlice.ts\n"));

/***/ })

});