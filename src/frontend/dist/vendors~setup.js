(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~setup"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/antd/es/divider/index.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/es/divider/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/es/config-provider/index.js");



var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





var Divider = function Divider(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_config_provider__WEBPACK_IMPORTED_MODULE_4__["ConfigConsumer"], null, function (_ref) {
    var _classNames;

    var getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;

    var customizePrefixCls = props.prefixCls,
        _props$type = props.type,
        type = _props$type === void 0 ? 'horizontal' : _props$type,
        _props$orientation = props.orientation,
        orientation = _props$orientation === void 0 ? 'center' : _props$orientation,
        className = props.className,
        children = props.children,
        dashed = props.dashed,
        plain = props.plain,
        restProps = __rest(props, ["prefixCls", "type", "orientation", "className", "children", "dashed", "plain"]);

    var prefixCls = getPrefixCls('divider', customizePrefixCls);
    var orientationPrefix = orientation.length > 0 ? "-".concat(orientation) : orientation;
    var hasChildren = !!children;
    var classString = classnames__WEBPACK_IMPORTED_MODULE_3___default()(prefixCls, "".concat(prefixCls, "-").concat(type), (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-with-text"), hasChildren), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-with-text").concat(orientationPrefix), hasChildren), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-dashed"), !!dashed), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-plain"), !!plain), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: classString
    }, restProps, {
      role: "separator"
    }), children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
      className: "".concat(prefixCls, "-inner-text")
    }, children));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Divider);

/***/ }),

/***/ "./node_modules/antd/es/divider/style/css.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/es/divider/style/css.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./node_modules/antd/es/divider/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./node_modules/antd/es/divider/style/index.css":
/*!******************************************************!*\
  !*** ./node_modules/antd/es/divider/style/index.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/antd/es/switch/index.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/es/switch/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-switch */ "./node_modules/rc-switch/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons_es_icons_LoadingOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons/es/icons/LoadingOutlined */ "./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js");
/* harmony import */ var _util_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_util/wave */ "./node_modules/antd/es/_util/wave.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/es/config-provider/index.js");
/* harmony import */ var _config_provider_SizeContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config-provider/SizeContext */ "./node_modules/antd/es/config-provider/SizeContext.js");
/* harmony import */ var _util_devWarning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/es/_util/devWarning.js");



var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};









var Switch = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function (_a, ref) {
  var _classNames;

  var customizePrefixCls = _a.prefixCls,
      customizeSize = _a.size,
      loading = _a.loading,
      _a$className = _a.className,
      className = _a$className === void 0 ? '' : _a$className,
      disabled = _a.disabled,
      props = __rest(_a, ["prefixCls", "size", "loading", "className", "disabled"]);

  Object(_util_devWarning__WEBPACK_IMPORTED_MODULE_9__["default"])('checked' in props || !('value' in props), 'Switch', '`value` is not a valid prop, do you mean `checked`?');

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_config_provider__WEBPACK_IMPORTED_MODULE_7__["ConfigContext"]),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var size = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_config_provider_SizeContext__WEBPACK_IMPORTED_MODULE_8__["default"]);
  var prefixCls = getPrefixCls('switch', customizePrefixCls);
  var loadingIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: "".concat(prefixCls, "-handle")
  }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ant_design_icons_es_icons_LoadingOutlined__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "".concat(prefixCls, "-loading-icon")
  }));
  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-small"), (customizeSize || size) === 'small'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-loading"), loading), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_util_wave__WEBPACK_IMPORTED_MODULE_6__["default"], {
    insertExtraNode: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](rc_switch__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    prefixCls: prefixCls,
    className: classes,
    disabled: disabled || loading,
    ref: ref,
    loadingIcon: loadingIcon
  })));
});
Switch.__ANT_SWITCH = true;
Switch.displayName = 'Switch';
/* harmony default export */ __webpack_exports__["default"] = (Switch);

/***/ }),

/***/ "./node_modules/antd/es/switch/style/css.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/es/switch/style/css.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./node_modules/antd/es/switch/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./node_modules/antd/es/switch/style/index.css":
/*!*****************************************************!*\
  !*** ./node_modules/antd/es/switch/style/index.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/rc-switch/es/index.js":
/*!********************************************!*\
  !*** ./node_modules/rc-switch/es/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-util/es/hooks/useMergedState */ "./node_modules/rc-util/es/hooks/useMergedState.js");
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");







var Switch = react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function (_ref, ref) {
  var _classNames;

  var _ref$prefixCls = _ref.prefixCls,
      prefixCls = _ref$prefixCls === void 0 ? 'rc-switch' : _ref$prefixCls,
      className = _ref.className,
      checked = _ref.checked,
      defaultChecked = _ref.defaultChecked,
      disabled = _ref.disabled,
      loadingIcon = _ref.loadingIcon,
      checkedChildren = _ref.checkedChildren,
      unCheckedChildren = _ref.unCheckedChildren,
      onClick = _ref.onClick,
      onChange = _ref.onChange,
      onKeyDown = _ref.onKeyDown,
      restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["prefixCls", "className", "checked", "defaultChecked", "disabled", "loadingIcon", "checkedChildren", "unCheckedChildren", "onClick", "onChange", "onKeyDown"]);

  var _useMergedState = Object(rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_5__["default"])(false, {
    value: checked,
    defaultValue: defaultChecked
  }),
      _useMergedState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMergedState, 2),
      innerChecked = _useMergedState2[0],
      setInnerChecked = _useMergedState2[1];

  function triggerChange(newChecked, event) {
    var mergedChecked = innerChecked;

    if (!disabled) {
      mergedChecked = newChecked;
      setInnerChecked(mergedChecked);
      onChange === null || onChange === void 0 ? void 0 : onChange(mergedChecked, event);
    }

    return mergedChecked;
  }

  function onInternalKeyDown(e) {
    if (e.which === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__["default"].LEFT) {
      triggerChange(false, e);
    } else if (e.which === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__["default"].RIGHT) {
      triggerChange(true, e);
    }

    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
  }

  function onInternalClick(e) {
    var ret = triggerChange(!innerChecked, e); // [Legacy] trigger onClick with value

    onClick === null || onClick === void 0 ? void 0 : onClick(ret, e);
  }

  var switchClassName = classnames__WEBPACK_IMPORTED_MODULE_4___default()(prefixCls, className, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-checked"), innerChecked), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
  return react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("button", Object.assign({}, restProps, {
    type: "button",
    role: "switch",
    "aria-checked": innerChecked,
    disabled: disabled,
    className: switchClassName,
    ref: ref,
    onKeyDown: onInternalKeyDown,
    onClick: onInternalClick
  }), loadingIcon, react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", {
    className: "".concat(prefixCls, "-inner")
  }, innerChecked ? checkedChildren : unCheckedChildren));
});
Switch.displayName = 'Switch';
/* harmony default export */ __webpack_exports__["default"] = (Switch);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvZGl2aWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9kaXZpZGVyL3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9kaXZpZGVyL3N0eWxlL2luZGV4LmNzcz9mODBiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3N3aXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9zd2l0Y2gvc3R5bGUvY3NzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3N3aXRjaC9zdHlsZS9pbmRleC5jc3M/ZmVjMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtc3dpdGNoL2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVCQUF1QixtQkFBTyxDQUFDLHdGQUF1Qjs7QUFFdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkU7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkU7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkU7Ozs7Ozs7Ozs7O0FDTEEsd0JBQXdC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QUFLLHNCQUFzQiwwREFBTztBQUNsQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEM7O0FBRTlDO0FBQ0E7O0FBRUEsd0JBQXdCLGlEQUFVLHdDQUF3QyxFQUFFLHlGQUFlLCtEQUErRCx5RkFBZTtBQUN6SyxTQUFTLG1EQUFtQiwyQkFBMkI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsZ0JBQWdCLG1EQUFtQjtBQUN0QztBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDZSxxRUFBTSxFIiwiZmlsZSI6InZlbmRvcnN+c2V0dXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcblxudmFyIF9fcmVzdCA9IHRoaXMgJiYgdGhpcy5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgQ29uZmlnQ29uc3VtZXIgfSBmcm9tICcuLi9jb25maWctcHJvdmlkZXInO1xuXG52YXIgRGl2aWRlciA9IGZ1bmN0aW9uIERpdmlkZXIocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbmZpZ0NvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgIHZhciBnZXRQcmVmaXhDbHMgPSBfcmVmLmdldFByZWZpeENscyxcbiAgICAgICAgZGlyZWN0aW9uID0gX3JlZi5kaXJlY3Rpb247XG5cbiAgICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICBfcHJvcHMkdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICAgIHR5cGUgPSBfcHJvcHMkdHlwZSA9PT0gdm9pZCAwID8gJ2hvcml6b250YWwnIDogX3Byb3BzJHR5cGUsXG4gICAgICAgIF9wcm9wcyRvcmllbnRhdGlvbiA9IHByb3BzLm9yaWVudGF0aW9uLFxuICAgICAgICBvcmllbnRhdGlvbiA9IF9wcm9wcyRvcmllbnRhdGlvbiA9PT0gdm9pZCAwID8gJ2NlbnRlcicgOiBfcHJvcHMkb3JpZW50YXRpb24sXG4gICAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgZGFzaGVkID0gcHJvcHMuZGFzaGVkLFxuICAgICAgICBwbGFpbiA9IHByb3BzLnBsYWluLFxuICAgICAgICByZXN0UHJvcHMgPSBfX3Jlc3QocHJvcHMsIFtcInByZWZpeENsc1wiLCBcInR5cGVcIiwgXCJvcmllbnRhdGlvblwiLCBcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCIsIFwiZGFzaGVkXCIsIFwicGxhaW5cIl0pO1xuXG4gICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnZGl2aWRlcicsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgdmFyIG9yaWVudGF0aW9uUHJlZml4ID0gb3JpZW50YXRpb24ubGVuZ3RoID4gMCA/IFwiLVwiLmNvbmNhdChvcmllbnRhdGlvbikgOiBvcmllbnRhdGlvbjtcbiAgICB2YXIgaGFzQ2hpbGRyZW4gPSAhIWNoaWxkcmVuO1xuICAgIHZhciBjbGFzc1N0cmluZyA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQodHlwZSksIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItd2l0aC10ZXh0XCIpLCBoYXNDaGlsZHJlbiksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi13aXRoLXRleHRcIikuY29uY2F0KG9yaWVudGF0aW9uUHJlZml4KSwgaGFzQ2hpbGRyZW4pLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZGFzaGVkXCIpLCAhIWRhc2hlZCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wbGFpblwiKSwgISFwbGFpbiksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCBfY2xhc3NOYW1lcyksIGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NTdHJpbmdcbiAgICB9LCByZXN0UHJvcHMsIHtcbiAgICAgIHJvbGU6IFwic2VwYXJhdG9yXCJcbiAgICB9KSwgY2hpbGRyZW4gJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pbm5lci10ZXh0XCIpXG4gICAgfSwgY2hpbGRyZW4pKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaXZpZGVyOyIsImltcG9ydCAnLi4vLi4vc3R5bGUvaW5kZXguY3NzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcblxudmFyIF9fcmVzdCA9IHRoaXMgJiYgdGhpcy5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSY1N3aXRjaCBmcm9tICdyYy1zd2l0Y2gnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgTG9hZGluZ091dGxpbmVkIGZyb20gXCJAYW50LWRlc2lnbi9pY29ucy9lcy9pY29ucy9Mb2FkaW5nT3V0bGluZWRcIjtcbmltcG9ydCBXYXZlIGZyb20gJy4uL191dGlsL3dhdmUnO1xuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gJy4uL2NvbmZpZy1wcm92aWRlcic7XG5pbXBvcnQgU2l6ZUNvbnRleHQgZnJvbSAnLi4vY29uZmlnLXByb3ZpZGVyL1NpemVDb250ZXh0JztcbmltcG9ydCBkZXZXYXJuaW5nIGZyb20gJy4uL191dGlsL2Rldldhcm5pbmcnO1xudmFyIFN3aXRjaCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfYSwgcmVmKSB7XG4gIHZhciBfY2xhc3NOYW1lcztcblxuICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgY3VzdG9taXplU2l6ZSA9IF9hLnNpemUsXG4gICAgICBsb2FkaW5nID0gX2EubG9hZGluZyxcbiAgICAgIF9hJGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSA9IF9hJGNsYXNzTmFtZSA9PT0gdm9pZCAwID8gJycgOiBfYSRjbGFzc05hbWUsXG4gICAgICBkaXNhYmxlZCA9IF9hLmRpc2FibGVkLFxuICAgICAgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcInByZWZpeENsc1wiLCBcInNpemVcIiwgXCJsb2FkaW5nXCIsIFwiY2xhc3NOYW1lXCIsIFwiZGlzYWJsZWRcIl0pO1xuXG4gIGRldldhcm5pbmcoJ2NoZWNrZWQnIGluIHByb3BzIHx8ICEoJ3ZhbHVlJyBpbiBwcm9wcyksICdTd2l0Y2gnLCAnYHZhbHVlYCBpcyBub3QgYSB2YWxpZCBwcm9wLCBkbyB5b3UgbWVhbiBgY2hlY2tlZGA/Jyk7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChDb25maWdDb250ZXh0KSxcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscyxcbiAgICAgIGRpcmVjdGlvbiA9IF9SZWFjdCR1c2VDb250ZXh0LmRpcmVjdGlvbjtcblxuICB2YXIgc2l6ZSA9IFJlYWN0LnVzZUNvbnRleHQoU2l6ZUNvbnRleHQpO1xuICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdzd2l0Y2gnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICB2YXIgbG9hZGluZ0ljb24gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWhhbmRsZVwiKVxuICB9LCBsb2FkaW5nICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExvYWRpbmdPdXRsaW5lZCwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1sb2FkaW5nLWljb25cIilcbiAgfSkpO1xuICB2YXIgY2xhc3NlcyA9IGNsYXNzTmFtZXMoKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zbWFsbFwiKSwgKGN1c3RvbWl6ZVNpemUgfHwgc2l6ZSkgPT09ICdzbWFsbCcpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbG9hZGluZ1wiKSwgbG9hZGluZyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCBfY2xhc3NOYW1lcyksIGNsYXNzTmFtZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChXYXZlLCB7XG4gICAgaW5zZXJ0RXh0cmFOb2RlOiB0cnVlXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJjU3dpdGNoLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkIHx8IGxvYWRpbmcsXG4gICAgcmVmOiByZWYsXG4gICAgbG9hZGluZ0ljb246IGxvYWRpbmdJY29uXG4gIH0pKSk7XG59KTtcblN3aXRjaC5fX0FOVF9TV0lUQ0ggPSB0cnVlO1xuU3dpdGNoLmRpc3BsYXlOYW1lID0gJ1N3aXRjaCc7XG5leHBvcnQgZGVmYXVsdCBTd2l0Y2g7IiwiaW1wb3J0ICcuLi8uLi9zdHlsZS9pbmRleC5jc3MnO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHVzZU1lcmdlZFN0YXRlIGZyb20gXCJyYy11dGlsL2VzL2hvb2tzL3VzZU1lcmdlZFN0YXRlXCI7XG5pbXBvcnQgS2V5Q29kZSBmcm9tIFwicmMtdXRpbC9lcy9LZXlDb2RlXCI7XG52YXIgU3dpdGNoID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciBfY2xhc3NOYW1lcztcblxuICB2YXIgX3JlZiRwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgIHByZWZpeENscyA9IF9yZWYkcHJlZml4Q2xzID09PSB2b2lkIDAgPyAncmMtc3dpdGNoJyA6IF9yZWYkcHJlZml4Q2xzLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBjaGVja2VkID0gX3JlZi5jaGVja2VkLFxuICAgICAgZGVmYXVsdENoZWNrZWQgPSBfcmVmLmRlZmF1bHRDaGVja2VkLFxuICAgICAgZGlzYWJsZWQgPSBfcmVmLmRpc2FibGVkLFxuICAgICAgbG9hZGluZ0ljb24gPSBfcmVmLmxvYWRpbmdJY29uLFxuICAgICAgY2hlY2tlZENoaWxkcmVuID0gX3JlZi5jaGVja2VkQ2hpbGRyZW4sXG4gICAgICB1bkNoZWNrZWRDaGlsZHJlbiA9IF9yZWYudW5DaGVja2VkQ2hpbGRyZW4sXG4gICAgICBvbkNsaWNrID0gX3JlZi5vbkNsaWNrLFxuICAgICAgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlLFxuICAgICAgb25LZXlEb3duID0gX3JlZi5vbktleURvd24sXG4gICAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wicHJlZml4Q2xzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY2hlY2tlZFwiLCBcImRlZmF1bHRDaGVja2VkXCIsIFwiZGlzYWJsZWRcIiwgXCJsb2FkaW5nSWNvblwiLCBcImNoZWNrZWRDaGlsZHJlblwiLCBcInVuQ2hlY2tlZENoaWxkcmVuXCIsIFwib25DbGlja1wiLCBcIm9uQ2hhbmdlXCIsIFwib25LZXlEb3duXCJdKTtcblxuICB2YXIgX3VzZU1lcmdlZFN0YXRlID0gdXNlTWVyZ2VkU3RhdGUoZmFsc2UsIHtcbiAgICB2YWx1ZTogY2hlY2tlZCxcbiAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRDaGVja2VkXG4gIH0pLFxuICAgICAgX3VzZU1lcmdlZFN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VNZXJnZWRTdGF0ZSwgMiksXG4gICAgICBpbm5lckNoZWNrZWQgPSBfdXNlTWVyZ2VkU3RhdGUyWzBdLFxuICAgICAgc2V0SW5uZXJDaGVja2VkID0gX3VzZU1lcmdlZFN0YXRlMlsxXTtcblxuICBmdW5jdGlvbiB0cmlnZ2VyQ2hhbmdlKG5ld0NoZWNrZWQsIGV2ZW50KSB7XG4gICAgdmFyIG1lcmdlZENoZWNrZWQgPSBpbm5lckNoZWNrZWQ7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBtZXJnZWRDaGVja2VkID0gbmV3Q2hlY2tlZDtcbiAgICAgIHNldElubmVyQ2hlY2tlZChtZXJnZWRDaGVja2VkKTtcbiAgICAgIG9uQ2hhbmdlID09PSBudWxsIHx8IG9uQ2hhbmdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkNoYW5nZShtZXJnZWRDaGVja2VkLCBldmVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlZENoZWNrZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBvbkludGVybmFsS2V5RG93bihlKSB7XG4gICAgaWYgKGUud2hpY2ggPT09IEtleUNvZGUuTEVGVCkge1xuICAgICAgdHJpZ2dlckNoYW5nZShmYWxzZSwgZSk7XG4gICAgfSBlbHNlIGlmIChlLndoaWNoID09PSBLZXlDb2RlLlJJR0hUKSB7XG4gICAgICB0cmlnZ2VyQ2hhbmdlKHRydWUsIGUpO1xuICAgIH1cblxuICAgIG9uS2V5RG93biA9PT0gbnVsbCB8fCBvbktleURvd24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uS2V5RG93bihlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uSW50ZXJuYWxDbGljayhlKSB7XG4gICAgdmFyIHJldCA9IHRyaWdnZXJDaGFuZ2UoIWlubmVyQ2hlY2tlZCwgZSk7IC8vIFtMZWdhY3ldIHRyaWdnZXIgb25DbGljayB3aXRoIHZhbHVlXG5cbiAgICBvbkNsaWNrID09PSBudWxsIHx8IG9uQ2xpY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ2xpY2socmV0LCBlKTtcbiAgfVxuXG4gIHZhciBzd2l0Y2hDbGFzc05hbWUgPSBjbGFzc05hbWVzKHByZWZpeENscywgY2xhc3NOYW1lLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNoZWNrZWRcIiksIGlubmVyQ2hlY2tlZCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kaXNhYmxlZFwiKSwgZGlzYWJsZWQpLCBfY2xhc3NOYW1lcykpO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBPYmplY3QuYXNzaWduKHt9LCByZXN0UHJvcHMsIHtcbiAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgIHJvbGU6IFwic3dpdGNoXCIsXG4gICAgXCJhcmlhLWNoZWNrZWRcIjogaW5uZXJDaGVja2VkLFxuICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICBjbGFzc05hbWU6IHN3aXRjaENsYXNzTmFtZSxcbiAgICByZWY6IHJlZixcbiAgICBvbktleURvd246IG9uSW50ZXJuYWxLZXlEb3duLFxuICAgIG9uQ2xpY2s6IG9uSW50ZXJuYWxDbGlja1xuICB9KSwgbG9hZGluZ0ljb24sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaW5uZXJcIilcbiAgfSwgaW5uZXJDaGVja2VkID8gY2hlY2tlZENoaWxkcmVuIDogdW5DaGVja2VkQ2hpbGRyZW4pKTtcbn0pO1xuU3dpdGNoLmRpc3BsYXlOYW1lID0gJ1N3aXRjaCc7XG5leHBvcnQgZGVmYXVsdCBTd2l0Y2g7Il0sInNvdXJjZVJvb3QiOiIifQ==