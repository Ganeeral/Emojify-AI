"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-use";
exports.ids = ["vendor-chunks/react-use"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-use/esm/misc/util.js":
/*!*************************************************!*\
  !*** ./node_modules/react-use/esm/misc/util.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isBrowser: () => (/* binding */ isBrowser),\n/* harmony export */   isNavigator: () => (/* binding */ isNavigator),\n/* harmony export */   noop: () => (/* binding */ noop),\n/* harmony export */   off: () => (/* binding */ off),\n/* harmony export */   on: () => (/* binding */ on)\n/* harmony export */ });\nvar noop = function() {};\nfunction on(obj) {\n    var args = [];\n    for(var _i = 1; _i < arguments.length; _i++){\n        args[_i - 1] = arguments[_i];\n    }\n    if (obj && obj.addEventListener) {\n        obj.addEventListener.apply(obj, args);\n    }\n}\nfunction off(obj) {\n    var args = [];\n    for(var _i = 1; _i < arguments.length; _i++){\n        args[_i - 1] = arguments[_i];\n    }\n    if (obj && obj.removeEventListener) {\n        obj.removeEventListener.apply(obj, args);\n    }\n}\nvar isBrowser = \"undefined\" !== 'undefined';\nvar isNavigator = typeof navigator !== 'undefined';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS9taXNjL3V0aWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBTyxJQUFJQSxPQUFPLFlBQWMsRUFBRTtBQUMzQixTQUFTQyxHQUFHQyxHQUFHO0lBQ2xCLElBQUlDLE9BQU8sRUFBRTtJQUNiLElBQUssSUFBSUMsS0FBSyxHQUFHQSxLQUFLQyxVQUFVQyxNQUFNLEVBQUVGLEtBQU07UUFDMUNELElBQUksQ0FBQ0MsS0FBSyxFQUFFLEdBQUdDLFNBQVMsQ0FBQ0QsR0FBRztJQUNoQztJQUNBLElBQUlGLE9BQU9BLElBQUlLLGdCQUFnQixFQUFFO1FBQzdCTCxJQUFJSyxnQkFBZ0IsQ0FBQ0MsS0FBSyxDQUFDTixLQUFLQztJQUNwQztBQUNKO0FBQ08sU0FBU00sSUFBSVAsR0FBRztJQUNuQixJQUFJQyxPQUFPLEVBQUU7SUFDYixJQUFLLElBQUlDLEtBQUssR0FBR0EsS0FBS0MsVUFBVUMsTUFBTSxFQUFFRixLQUFNO1FBQzFDRCxJQUFJLENBQUNDLEtBQUssRUFBRSxHQUFHQyxTQUFTLENBQUNELEdBQUc7SUFDaEM7SUFDQSxJQUFJRixPQUFPQSxJQUFJUSxtQkFBbUIsRUFBRTtRQUNoQ1IsSUFBSVEsbUJBQW1CLENBQUNGLEtBQUssQ0FBQ04sS0FBS0M7SUFDdkM7QUFDSjtBQUNPLElBQUlRLFlBQVksZ0JBQWtCLFlBQVk7QUFDOUMsSUFBSUMsY0FBYyxPQUFPQyxjQUFjLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS9taXNjL3V0aWwuanM/NmIyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7IH07XG5leHBvcnQgZnVuY3Rpb24gb24ob2JqKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBhcmdzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICBpZiAob2JqICYmIG9iai5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIG9iai5hZGRFdmVudExpc3RlbmVyLmFwcGx5KG9iaiwgYXJncyk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG9mZihvYmopIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGFyZ3NbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIGlmIChvYmogJiYgb2JqLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgb2JqLnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkob2JqLCBhcmdzKTtcbiAgICB9XG59XG5leHBvcnQgdmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuZXhwb3J0IHZhciBpc05hdmlnYXRvciA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnO1xuIl0sIm5hbWVzIjpbIm5vb3AiLCJvbiIsIm9iaiIsImFyZ3MiLCJfaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHBseSIsIm9mZiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpc0Jyb3dzZXIiLCJpc05hdmlnYXRvciIsIm5hdmlnYXRvciJdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-use/esm/misc/util.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-use/esm/useClickAway.js":
/*!****************************************************!*\
  !*** ./node_modules/react-use/esm/useClickAway.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ \"(ssr)/./node_modules/react-use/esm/misc/util.js\");\n\n\nvar defaultEvents = [\n    'mousedown',\n    'touchstart'\n];\nvar useClickAway = function(ref, onClickAway, events) {\n    if (events === void 0) {\n        events = defaultEvents;\n    }\n    var savedCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onClickAway);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        savedCallback.current = onClickAway;\n    }, [\n        onClickAway\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        var handler = function(event) {\n            var el = ref.current;\n            el && !el.contains(event.target) && savedCallback.current(event);\n        };\n        for(var _i = 0, events_1 = events; _i < events_1.length; _i++){\n            var eventName = events_1[_i];\n            (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__.on)(document, eventName, handler);\n        }\n        return function() {\n            for(var _i = 0, events_2 = events; _i < events_2.length; _i++){\n                var eventName = events_2[_i];\n                (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__.off)(document, eventName, handler);\n            }\n        };\n    }, [\n        events,\n        ref\n    ]);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useClickAway);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VDbGlja0F3YXkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQztBQUNKO0FBQ3RDLElBQUlJLGdCQUFnQjtJQUFDO0lBQWE7Q0FBYTtBQUMvQyxJQUFJQyxlQUFlLFNBQVVDLEdBQUcsRUFBRUMsV0FBVyxFQUFFQyxNQUFNO0lBQ2pELElBQUlBLFdBQVcsS0FBSyxHQUFHO1FBQUVBLFNBQVNKO0lBQWU7SUFDakQsSUFBSUssZ0JBQWdCUiw2Q0FBTUEsQ0FBQ007SUFDM0JQLGdEQUFTQSxDQUFDO1FBQ05TLGNBQWNDLE9BQU8sR0FBR0g7SUFDNUIsR0FBRztRQUFDQTtLQUFZO0lBQ2hCUCxnREFBU0EsQ0FBQztRQUNOLElBQUlXLFVBQVUsU0FBVUMsS0FBSztZQUN6QixJQUFJQyxLQUFLUCxJQUFJSSxPQUFPO1lBQ3BCRyxNQUFNLENBQUNBLEdBQUdDLFFBQVEsQ0FBQ0YsTUFBTUcsTUFBTSxLQUFLTixjQUFjQyxPQUFPLENBQUNFO1FBQzlEO1FBQ0EsSUFBSyxJQUFJSSxLQUFLLEdBQUdDLFdBQVdULFFBQVFRLEtBQUtDLFNBQVNDLE1BQU0sRUFBRUYsS0FBTTtZQUM1RCxJQUFJRyxZQUFZRixRQUFRLENBQUNELEdBQUc7WUFDNUJiLDhDQUFFQSxDQUFDaUIsVUFBVUQsV0FBV1I7UUFDNUI7UUFDQSxPQUFPO1lBQ0gsSUFBSyxJQUFJSyxLQUFLLEdBQUdLLFdBQVdiLFFBQVFRLEtBQUtLLFNBQVNILE1BQU0sRUFBRUYsS0FBTTtnQkFDNUQsSUFBSUcsWUFBWUUsUUFBUSxDQUFDTCxHQUFHO2dCQUM1QmQsK0NBQUdBLENBQUNrQixVQUFVRCxXQUFXUjtZQUM3QjtRQUNKO0lBQ0osR0FBRztRQUFDSDtRQUFRRjtLQUFJO0FBQ3BCO0FBQ0EsaUVBQWVELFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VDbGlja0F3YXkuanM/ODNkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG9mZiwgb24gfSBmcm9tICcuL21pc2MvdXRpbCc7XG52YXIgZGVmYXVsdEV2ZW50cyA9IFsnbW91c2Vkb3duJywgJ3RvdWNoc3RhcnQnXTtcbnZhciB1c2VDbGlja0F3YXkgPSBmdW5jdGlvbiAocmVmLCBvbkNsaWNrQXdheSwgZXZlbnRzKSB7XG4gICAgaWYgKGV2ZW50cyA9PT0gdm9pZCAwKSB7IGV2ZW50cyA9IGRlZmF1bHRFdmVudHM7IH1cbiAgICB2YXIgc2F2ZWRDYWxsYmFjayA9IHVzZVJlZihvbkNsaWNrQXdheSk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2F2ZWRDYWxsYmFjay5jdXJyZW50ID0gb25DbGlja0F3YXk7XG4gICAgfSwgW29uQ2xpY2tBd2F5XSk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBlbCA9IHJlZi5jdXJyZW50O1xuICAgICAgICAgICAgZWwgJiYgIWVsLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgc2F2ZWRDYWxsYmFjay5jdXJyZW50KGV2ZW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBldmVudHNfMSA9IGV2ZW50czsgX2kgPCBldmVudHNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBldmVudE5hbWUgPSBldmVudHNfMVtfaV07XG4gICAgICAgICAgICBvbihkb2N1bWVudCwgZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBldmVudHNfMiA9IGV2ZW50czsgX2kgPCBldmVudHNfMi5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnROYW1lID0gZXZlbnRzXzJbX2ldO1xuICAgICAgICAgICAgICAgIG9mZihkb2N1bWVudCwgZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LCBbZXZlbnRzLCByZWZdKTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VDbGlja0F3YXk7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwib2ZmIiwib24iLCJkZWZhdWx0RXZlbnRzIiwidXNlQ2xpY2tBd2F5IiwicmVmIiwib25DbGlja0F3YXkiLCJldmVudHMiLCJzYXZlZENhbGxiYWNrIiwiY3VycmVudCIsImhhbmRsZXIiLCJldmVudCIsImVsIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJfaSIsImV2ZW50c18xIiwibGVuZ3RoIiwiZXZlbnROYW1lIiwiZG9jdW1lbnQiLCJldmVudHNfMiJdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-use/esm/useClickAway.js\n");

/***/ })

};
;