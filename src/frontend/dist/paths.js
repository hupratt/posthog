(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paths"],{

/***/ "./frontend/src/lib/utils.js":
/*!***********************************!*\
  !*** ./frontend/src/lib/utils.js ***!
  \***********************************/
/*! exports provided: uuid, toParams, fromParams, colors, percentage, Loading, TableRowLoading, CloseButton, Card, DeleteWithUndo, selectStyle, debounce, capitalizeFirstLetter, operatorMap, formatFilterName, deletePersonData, objectsEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return uuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toParams", function() { return toParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromParams", function() { return fromParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percentage", function() { return percentage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRowLoading", function() { return TableRowLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseButton", function() { return CloseButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteWithUndo", function() { return DeleteWithUndo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectStyle", function() { return selectStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() { return capitalizeFirstLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operatorMap", function() { return operatorMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatFilterName", function() { return formatFilterName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePersonData", function() { return deletePersonData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectsEqual", function() { return objectsEqual; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_es_spin_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/spin/style/css */ "./node_modules/antd/es/spin/style/css.js");
/* harmony import */ var antd_es_spin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/spin */ "./node_modules/antd/es/spin/index.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api */ "./frontend/src/lib/api.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);







function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function uuid() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
    return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
  });
}
var toParams = function toParams(obj) {
  var handleVal = function handleVal(val) {
    if (val._isAMomentObject) return encodeURIComponent(val.format('YYYY-MM-DD'));
    val = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5___default()(val) === 'object' ? JSON.stringify(val) : val;
    return encodeURIComponent(val);
  };

  return Object.entries(obj).filter(function (_ref) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default()(_ref, 2),
        key = _ref2[0],
        val = _ref2[1];

    return val;
  }).map(function (_ref3) {
    var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default()(_ref3, 2),
        key = _ref4[0],
        val = _ref4[1];

    return "".concat(key, "=").concat(handleVal(val));
  }).join('&');
};
var fromParams = function fromParams() {
  return window.location.search != '' ? window.location.search.slice(1).split('&').reduce(function (a, b) {
    b = b.split('=');
    a[b[0]] = decodeURIComponent(b[1]);
    return a;
  }, {}) : {};
};
var colors = ['success', 'secondary', 'warning', 'primary', 'danger', 'info', 'dark', 'light'];
var percentage = function percentage(division) {
  return division ? division.toLocaleString(undefined, {
    style: 'percent',
    maximumFractionDigits: 2
  }) : '';
};
var Loading = function Loading() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "loading-overlay"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_spin__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
var TableRowLoading = function TableRowLoading(_ref5) {
  var _ref5$colSpan = _ref5.colSpan,
      colSpan = _ref5$colSpan === void 0 ? 1 : _ref5$colSpan,
      _ref5$asOverlay = _ref5.asOverlay,
      asOverlay = _ref5$asOverlay === void 0 ? false : _ref5$asOverlay;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
    className: asOverlay ? 'loading-overlay over-table' : ''
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
    colSpan: colSpan,
    style: {
      padding: 50,
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_spin__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
};
var CloseButton = function CloseButton(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    className: 'close cursor-pointer ' + props.className,
    style: _objectSpread({}, props.style)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"));
};
function Card(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    className: 'card ' + props.className,
    style: props.style,
    title: ""
  }), props.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "card-header"
  }, props.title), props.children);
}
var DeleteWithUndo = function DeleteWithUndo(props) {
  var deleteWithUndo = function deleteWithUndo(undo) {
    _api__WEBPACK_IMPORTED_MODULE_7__["default"].update('api/' + props.endpoint + '/' + props.object.id, _objectSpread(_objectSpread({}, props.object), {}, {
      deleted: undo ? false : true
    })).then(function () {
      props.callback();
      var response = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, !undo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, "\"", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", null, props.object.name), "\" deleted.", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#",
        onClick: function onClick(e) {
          e.preventDefault();
          deleteWithUndo(true);
        }
      }, "Click here to undo")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, "Delete un-done"));
      Object(react_toastify__WEBPACK_IMPORTED_MODULE_8__["toast"])(response, {
        toastId: 'delete-item-' + props.object.id
      });
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      deleteWithUndo();
    },
    className: props.className,
    style: props.style
  }, props.children);
};
DeleteWithUndo.propTypes = {
  endpoint: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,
  object: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,
    id: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number.isRequired
  }).isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object
};
var selectStyle = {
  control: function control(base) {
    return _objectSpread(_objectSpread({}, base), {}, {
      height: 31,
      minHeight: 31
    });
  },
  indicatorsContainer: function indicatorsContainer(base) {
    return _objectSpread(_objectSpread({}, base), {}, {
      height: 31
    });
  },
  input: function input(base) {
    return _objectSpread(_objectSpread({}, base), {}, {
      paddingBottom: 0,
      paddingTop: 0,
      margin: 0,
      opacity: 1
    });
  },
  valueContainer: function valueContainer(base) {
    return _objectSpread(_objectSpread({}, base), {}, {
      padding: '0 8px',
      marginTop: -2
    });
  },
  option: function option(base) {
    return _objectSpread(_objectSpread({}, base), {}, {
      padding: '2px 15px'
    });
  }
};
var debounce = function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
var capitalizeFirstLetter = function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
var operatorMap = {
  exact: '= equals',
  is_not: "≠ doesn't equal",
  icontains: '∋ contains',
  not_icontains: "∌ doesn't contain",
  gt: '> greater than',
  lt: '< lower than'
};
var operatorEntries = Object.entries(operatorMap).reverse();
var formatFilterName = function formatFilterName(str) {
  var _iterator = _createForOfIteratorHelper(operatorEntries),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default()(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      if (str.includes(key)) return str.replace('__' + key, '') + " ".concat(value.split(' ')[0], " ");
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return str + " ".concat(operatorMap['exact'].split(' ')[0], " ");
};
var deletePersonData = function deletePersonData(person, callback) {
  window.confirm('Are you sure you want to delete this user? This cannot be undone') && _api__WEBPACK_IMPORTED_MODULE_7__["default"]["delete"]('api/person/' + person.id).then(function () {
    Object(react_toastify__WEBPACK_IMPORTED_MODULE_8__["toast"])('Person succesfully deleted.');
    if (callback) callback();
  });
};
var objectsEqual = function objectsEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

/***/ }),

/***/ "./frontend/src/scenes/paths/Paths.js":
/*!********************************************!*\
  !*** ./frontend/src/scenes/paths/Paths.js ***!
  \********************************************/
/*! exports provided: Paths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paths", function() { return Paths; });
/* harmony import */ var antd_es_spin_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/spin/style/css */ "./node_modules/antd/es/spin/style/css.js");
/* harmony import */ var antd_es_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/spin */ "./node_modules/antd/es/spin/index.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lib/api */ "./frontend/src/lib/api.js");
/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lib/utils */ "./frontend/src/lib/utils.js");
/* harmony import */ var lib_components_DateFilter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lib/components/DateFilter */ "./frontend/src/lib/components/DateFilter.js");











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var stripHTTP = function stripHTTP(url) {
  return url.replace(/(^[0-9]+_\w+:|^)\/\//, '');
};

function rounded_rect(x, y, w, h, r, tl, tr, bl, br) {
  var retval;
  retval = 'M' + (x + r) + ',' + y;
  retval += 'h' + (w - 2 * r);

  if (tr) {
    retval += 'a' + r + ',' + r + ' 0 0 1 ' + r + ',' + r;
  } else {
    retval += 'h' + r;
    retval += 'v' + r;
  }

  retval += 'v' + (h - 2 * r);

  if (br) {
    retval += 'a' + r + ',' + r + ' 0 0 1 ' + -r + ',' + r;
  } else {
    retval += 'v' + r;
    retval += 'h' + -r;
  }

  retval += 'h' + (2 * r - w);

  if (bl) {
    retval += 'a' + r + ',' + r + ' 0 0 1 ' + -r + ',' + -r;
  } else {
    retval += 'h' + -r;
    retval += 'v' + -r;
  }

  retval += 'v' + (2 * r - h);

  if (tl) {
    retval += 'a' + r + ',' + r + ' 0 0 1 ' + r + ',' + -r;
  } else {
    retval += 'v' + -r;
    retval += 'h' + r;
  }

  retval += 'z';
  return retval;
}

function NoData() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    style: {
      padding: '1rem'
    }
  }, "We don't have enough data to show anything here. You might need to send us some frontend (JS) events, as we use the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("pre", {
    style: {
      display: 'inline'
    }
  }, "$current_url"), " property to calculate paths.");
}

var Paths = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Paths, _Component);

  var _super = _createSuper(Paths);

  function Paths(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Paths);

    _this = _super.call(this, props);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "renderPaths", function () {
      var paths = _this.state.paths;

      if (!_this.state.d3Loaded || !_this.state.sankeyLoaded) {
        return;
      }

      var elements = document.querySelectorAll('.paths svg');
      elements.forEach(function (node) {
        return node.parentNode.removeChild(node);
      });

      if (!paths || paths.nodes.length === 0) {
        _this.setState({
          rendered: true
        });

        return;
      }

      _this.setState({
        rendered: true
      });

      var width = _this.canvas.current.offsetWidth;
      var height = _this.canvas.current.offsetHeight;

      var svg = _this.d3.select(_this.canvas.current).append('svg').style('background', '#fff').style('width', width).style('height', height);

      var sankey = new _this.sankey.sankey().nodeId(function (d) {
        return d.name;
      }).nodeAlign(_this.sankey.sankeyLeft).nodeSort(null).nodeWidth(15) // .nodePadding()
      .size([width, height]);

      var color = function color(name) {
        return _this.d3.scaleOrdinal(_this.d3.interpolateBlues())(name.replace(/ .*/, ''));
      };

      var _sankey = sankey({
        nodes: paths.nodes.map(function (d) {
          return Object.assign({}, d);
        }),
        links: paths.links.map(function (d) {
          return Object.assign({}, d);
        })
      }),
          nodes = _sankey.nodes,
          links = _sankey.links;

      svg.append('g').selectAll('rect').data(nodes).join('rect').attr('x', function (d) {
        return d.x0 + 1;
      }).attr('y', function (d) {
        return d.y0;
      }).attr('height', function (d) {
        return d.y1 - d.y0;
      }).attr('width', function (d) {
        return d.x1 - d.x0 - 2;
      }).attr('fill', function (d) {
        var c;

        var _iterator = _createForOfIteratorHelper(d.sourceLinks),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _link2 = _step.value;
            if (c === undefined) c = _link2.color;else if (c !== _link2.color) c = null;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        if (c === undefined) {
          var _iterator2 = _createForOfIteratorHelper(d.targetLinks),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _link = _step2.value;
              if (c === undefined) c = _link.color;else if (c !== _link.color) c = null;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }

        return (_this.d3.color(c) || _this.d3.color('#dddddd')).darker(0.5);
      }) // .attr("fill", d =>  'var(--blue)')
      .attr('opacity', 0.5).append('title').text(function (d) {
        return "".concat(stripHTTP(d.name), "\n").concat(d.value.toLocaleString());
      });
      var dropOffGradient = svg.append('defs').append('linearGradient').attr('id', 'dropoff-gradient').attr('gradientTransform', 'rotate(90)');
      dropOffGradient.append('stop').attr('offset', '0%').attr('stop-color', 'rgba(220,53,69,0.7)');
      dropOffGradient.append('stop').attr('offset', '100%').attr('stop-color', '#ffffff');
      var link = svg.append('g').attr('fill', 'none').selectAll('g').data(links).join('g').attr('stroke', function (d) {
        return 'var(--blue)';
      }).attr('opacity', 0.3).style('mix-blend-mode', 'multiply');
      link.append('path').attr('d', _this.sankey.sankeyLinkHorizontal()).attr('stroke-width', function (d) {
        return Math.max(1, d.width);
      });
      link.append('g').append('path').attr('d', function (data, b, c) {
        if (data.source.layer == 0) return;
        var height = data.source.y1 - data.source.y0 - data.source.sourceLinks.reduce(function (prev, curr) {
          return prev + curr.width;
        }, 0);
        return rounded_rect(0, 0, 30, height, Math.min(25, height), false, true, false, false);
      }).attr('fill', 'url(#dropoff-gradient)').attr('stroke-width', 0).attr('transform', function (data) {
        return 'translate(' + Math.round(data.source.x1) + ',' + Math.round(data.source.y0 + data.source.sourceLinks.reduce(function (prev, curr) {
          return prev + curr.width;
        }, 0)) + ')';
      }).append('tspan').text(function (d) {
        return d.value - d.source.sourceLinks.reduce(function (prev, curr) {
          return prev + curr.value;
        }, 0);
      });
      link.append('title').text(function (d) {
        return "".concat(d.source.name, " \u2192 ").concat(d.target.name, "\n").concat(d.value.toLocaleString());
      });
      var textSelection = svg.append('g').style('font-size', '12px').selectAll('text').data(nodes).join('text').attr('x', function (d) {
        return d.x0 < width / 2 ? d.x1 + 6 : d.x0 - 6;
      }).attr('y', function (d) {
        return (d.y1 + d.y0) / 2;
      }).attr('dy', '0.35em').attr('text-anchor', function (d) {
        return d.x0 < width / 2 ? 'start' : 'end';
      }).attr('display', function (d) {
        return d.value > 0 ? 'inherit' : 'none';
      }).text(function (d) {
        return d.name.length > 35 ? stripHTTP(d.name).substring(0, 6) + '...' + stripHTTP(d.name).slice(-15) : stripHTTP(d.name);
      });
      textSelection.append('tspan').attr('fill-opacity', 0.7).text(function (d) {
        return " ".concat(d.value.toLocaleString());
      });
      textSelection.append('title').text(function (d) {
        return stripHTTP(d.name);
      });
      return textSelection.node();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "fetchPaths", function () {
      var params = Object(lib_utils__WEBPACK_IMPORTED_MODULE_12__["toParams"])(_this.state.filter);
      lib_api__WEBPACK_IMPORTED_MODULE_11__["default"].get("api/paths".concat(params ? "/?".concat(params) : '')).then(function (paths) {
        _this.setState({
          paths: {
            nodes: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(paths.map(function (path) {
              return {
                name: path.source
              };
            })), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(paths.map(function (path) {
              return {
                name: path.target
              };
            }))),
            links: paths
          },
          dataLoaded: true
        }, _this.renderPaths);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "updateFilter", function (changes) {
      _this.setState({
        filter: _objectSpread(_objectSpread({}, _this.state.filter), changes),
        rendered: false,
        dataLoaded: false
      }, _this.fetchPaths);
    });

    _this.state = {
      filter: {
        dateFrom: null,
        dateTo: null
      },
      paths: {
        nodes: [],
        links: []
      },
      d3Loaded: false,
      sankeyLoaded: false
    };
    _this.fetchPaths = _this.fetchPaths.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.canvas = react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef();

    _this.fetchPaths();

    Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! d3 */ "./node_modules/d3/index.js")).then(function (d3) {
      _this.d3 = d3;

      _this.setState({
        d3Loaded: true
      });
    });
    Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! d3-sankey */ "./node_modules/d3-sankey/src/index.js")).then(function (sankey) {
      _this.sankey = sankey;

      _this.setState({
        sankeyLoaded: true
      });
    });
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Paths, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          paths = _this$state.paths,
          filter = _this$state.filter,
          dataLoaded = _this$state.dataLoaded;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", null, "Paths"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(lib_utils__WEBPACK_IMPORTED_MODULE_12__["Card"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "float-right"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(lib_components_DateFilter__WEBPACK_IMPORTED_MODULE_13__["DateFilter"], {
          onChange: function onChange(date_from, date_to) {
            return _this2.updateFilter({
              date_from: date_from,
              date_to: date_to
            });
          },
          dateFrom: filter.date_from,
          dateTo: filter.date_to
        })))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        ref: this.canvas,
        className: "paths",
        style: {
          height: '90vh'
        }
      }, dataLoaded && paths && paths.nodes.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(NoData, null) : !dataLoaded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          paddingTop: '14rem',
          textAlign: 'center'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_spin__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "(This might take a while)"))));
    }
  }]);

  return Paths;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9zY2VuZXMvcGF0aHMvUGF0aHMuanMiXSwibmFtZXMiOlsidXVpZCIsInJlcGxhY2UiLCJjIiwiY3J5cHRvIiwiZ2V0UmFuZG9tVmFsdWVzIiwiVWludDhBcnJheSIsInRvU3RyaW5nIiwidG9QYXJhbXMiLCJvYmoiLCJoYW5kbGVWYWwiLCJ2YWwiLCJfaXNBTW9tZW50T2JqZWN0IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZm9ybWF0IiwiSlNPTiIsInN0cmluZ2lmeSIsIk9iamVjdCIsImVudHJpZXMiLCJmaWx0ZXIiLCJrZXkiLCJtYXAiLCJqb2luIiwiZnJvbVBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic2xpY2UiLCJzcGxpdCIsInJlZHVjZSIsImEiLCJiIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY29sb3JzIiwicGVyY2VudGFnZSIsImRpdmlzaW9uIiwidG9Mb2NhbGVTdHJpbmciLCJ1bmRlZmluZWQiLCJzdHlsZSIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsIkxvYWRpbmciLCJUYWJsZVJvd0xvYWRpbmciLCJjb2xTcGFuIiwiYXNPdmVybGF5IiwicGFkZGluZyIsInRleHRBbGlnbiIsIkNsb3NlQnV0dG9uIiwicHJvcHMiLCJjbGFzc05hbWUiLCJDYXJkIiwidGl0bGUiLCJjaGlsZHJlbiIsIkRlbGV0ZVdpdGhVbmRvIiwiZGVsZXRlV2l0aFVuZG8iLCJ1bmRvIiwiYXBpIiwidXBkYXRlIiwiZW5kcG9pbnQiLCJvYmplY3QiLCJpZCIsImRlbGV0ZWQiLCJ0aGVuIiwiY2FsbGJhY2siLCJyZXNwb25zZSIsIm5hbWUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0b2FzdCIsInRvYXN0SWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwic2hhcGUiLCJudW1iZXIiLCJzZWxlY3RTdHlsZSIsImNvbnRyb2wiLCJiYXNlIiwiaGVpZ2h0IiwibWluSGVpZ2h0IiwiaW5kaWNhdG9yc0NvbnRhaW5lciIsImlucHV0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJtYXJnaW4iLCJvcGFjaXR5IiwidmFsdWVDb250YWluZXIiLCJtYXJnaW5Ub3AiLCJvcHRpb24iLCJkZWJvdW5jZSIsImZ1bmMiLCJ3YWl0IiwiaW1tZWRpYXRlIiwidGltZW91dCIsImNvbnRleHQiLCJhcmdzIiwiYXJndW1lbnRzIiwibGF0ZXIiLCJhcHBseSIsImNhbGxOb3ciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJvcGVyYXRvck1hcCIsImV4YWN0IiwiaXNfbm90IiwiaWNvbnRhaW5zIiwibm90X2ljb250YWlucyIsImd0IiwibHQiLCJvcGVyYXRvckVudHJpZXMiLCJyZXZlcnNlIiwiZm9ybWF0RmlsdGVyTmFtZSIsInN0ciIsInZhbHVlIiwiaW5jbHVkZXMiLCJkZWxldGVQZXJzb25EYXRhIiwicGVyc29uIiwiY29uZmlybSIsIm9iamVjdHNFcXVhbCIsIm9iajEiLCJvYmoyIiwic3RyaXBIVFRQIiwidXJsIiwicm91bmRlZF9yZWN0IiwieCIsInkiLCJ3IiwiaCIsInIiLCJ0bCIsInRyIiwiYmwiLCJiciIsInJldHZhbCIsIk5vRGF0YSIsImRpc3BsYXkiLCJQYXRocyIsInBhdGhzIiwic3RhdGUiLCJkM0xvYWRlZCIsInNhbmtleUxvYWRlZCIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIm5vZGUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJub2RlcyIsImxlbmd0aCIsInNldFN0YXRlIiwicmVuZGVyZWQiLCJ3aWR0aCIsImNhbnZhcyIsImN1cnJlbnQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwic2Fua2V5Iiwibm9kZUlkIiwiZCIsIm5vZGVBbGlnbiIsInNhbmtleUxlZnQiLCJub2RlU29ydCIsIm5vZGVXaWR0aCIsInNpemUiLCJjb2xvciIsInNjYWxlT3JkaW5hbCIsImludGVycG9sYXRlQmx1ZXMiLCJhc3NpZ24iLCJsaW5rcyIsInNlbGVjdEFsbCIsImRhdGEiLCJhdHRyIiwieDAiLCJ5MCIsInkxIiwieDEiLCJzb3VyY2VMaW5rcyIsImxpbmsiLCJ0YXJnZXRMaW5rcyIsImRhcmtlciIsInRleHQiLCJkcm9wT2ZmR3JhZGllbnQiLCJzYW5rZXlMaW5rSG9yaXpvbnRhbCIsIk1hdGgiLCJtYXgiLCJzb3VyY2UiLCJsYXllciIsInByZXYiLCJjdXJyIiwibWluIiwicm91bmQiLCJ0YXJnZXQiLCJ0ZXh0U2VsZWN0aW9uIiwic3Vic3RyaW5nIiwicGFyYW1zIiwiZ2V0IiwicGF0aCIsImRhdGFMb2FkZWQiLCJyZW5kZXJQYXRocyIsImNoYW5nZXMiLCJmZXRjaFBhdGhzIiwiZGF0ZUZyb20iLCJkYXRlVG8iLCJiaW5kIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJkYXRlX2Zyb20iLCJkYXRlX3RvIiwidXBkYXRlRmlsdGVyIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHTyxTQUFTQSxJQUFULEdBQWdCO0FBQ25CLFNBQU8sQ0FBQyxDQUFDLEdBQUQsSUFBUSxDQUFDLEdBQVQsR0FBZSxDQUFDLEdBQWhCLEdBQXNCLENBQUMsR0FBdkIsR0FBNkIsQ0FBQyxJQUEvQixFQUFxQ0MsT0FBckMsQ0FBNkMsUUFBN0MsRUFBdUQsVUFBQUMsQ0FBQztBQUFBLFdBQzNELENBQUNBLENBQUMsR0FBSUMsTUFBTSxDQUFDQyxlQUFQLENBQXVCLElBQUlDLFVBQUosQ0FBZSxDQUFmLENBQXZCLEVBQTBDLENBQTFDLElBQWdELE1BQU9ILENB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ZUFJSSx1RUFKSiw4QkFMWixDQWxCSixDQUZKLENBREo7QUF1Q0g7QUExUEw7O0FBQUE7QUFBQSxFQUEyQjRLLGdEQUEzQixFIiwiZmlsZSI6InBhdGhzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGFwaSBmcm9tICcuL2FwaSdcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBTcGluIH0gZnJvbSAnYW50ZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHV1aWQoKSB7XG4gICAgcmV0dXJuIChbMWU3XSArIC0xZTMgKyAtNGUzICsgLThlMyArIC0xZTExKS5yZXBsYWNlKC9bMDE4XS9nLCBjID0+XG4gICAgICAgIChjIF4gKGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMSkpWzBdICYgKDE1ID4+IChjIC8gNCkpKSkudG9TdHJpbmcoMTYpXG4gICAgKVxufVxuXG5leHBvcnQgbGV0IHRvUGFyYW1zID0gb2JqID0+IHtcbiAgICBsZXQgaGFuZGxlVmFsID0gdmFsID0+IHtcbiAgICAgICAgaWYgKHZhbC5faXNBTW9tZW50T2JqZWN0KSByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbC5mb3JtYXQoJ1lZWVktTU0tREQnKSlcbiAgICAgICAgdmFsID0gdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeSh2YWwpIDogdmFsXG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKVxuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMob2JqKVxuICAgICAgICAuZmlsdGVyKChba2V5LCB2YWxdKSA9PiB2YWwpXG4gICAgICAgIC5tYXAoKFtrZXksIHZhbF0pID0+IGAke2tleX09JHtoYW5kbGVWYWwodmFsKX1gKVxuICAgICAgICAuam9pbignJicpXG59XG5leHBvcnQgbGV0IGZyb21QYXJhbXMgPSAoKSA9PlxuICAgIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggIT0gJydcbiAgICAgICAgPyB3aW5kb3cubG9jYXRpb24uc2VhcmNoXG4gICAgICAgICAgICAgIC5zbGljZSgxKVxuICAgICAgICAgICAgICAuc3BsaXQoJyYnKVxuICAgICAgICAgICAgICAucmVkdWNlKChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICBiID0gYi5zcGxpdCgnPScpXG4gICAgICAgICAgICAgICAgICBhW2JbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KGJbMV0pXG4gICAgICAgICAgICAgICAgICByZXR1cm4gYVxuICAgICAgICAgICAgICB9LCB7fSlcbiAgICAgICAgOiB7fVxuXG5leHBvcnQgbGV0IGNvbG9ycyA9IFsnc3VjY2VzcycsICdzZWNvbmRhcnknLCAnd2FybmluZycsICdwcmltYXJ5JywgJ2RhbmdlcicsICdpbmZvJywgJ2RhcmsnLCAnbGlnaHQnXVxuZXhwb3J0IGxldCBwZXJjZW50YWdlID0gZGl2aXNpb24gPT5cbiAgICBkaXZpc2lvblxuICAgICAgICA/IGRpdmlzaW9uLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgICBzdHlsZTogJ3BlcmNlbnQnLFxuICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgICAgICAgfSlcbiAgICAgICAgOiAnJ1xuXG5leHBvcnQgbGV0IExvYWRpbmcgPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLW92ZXJsYXlcIj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPFNwaW4gLz5cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGNvbnN0IFRhYmxlUm93TG9hZGluZyA9ICh7IGNvbFNwYW4gPSAxLCBhc092ZXJsYXkgPSBmYWxzZSB9KSA9PiAoXG4gICAgPHRyIGNsYXNzTmFtZT17YXNPdmVybGF5ID8gJ2xvYWRpbmctb3ZlcmxheSBvdmVyLXRhYmxlJyA6ICcnfT5cbiAgICAgICAgPHRkIGNvbFNwYW49e2NvbFNwYW59IHN0eWxlPXt7IHBhZGRpbmc6IDUwLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgPFNwaW4gLz5cbiAgICAgICAgPC90ZD5cbiAgICA8L3RyPlxuKVxuXG5leHBvcnQgbGV0IENsb3NlQnV0dG9uID0gcHJvcHMgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzcGFuIHsuLi5wcm9wc30gY2xhc3NOYW1lPXsnY2xvc2UgY3Vyc29yLXBvaW50ZXIgJyArIHByb3BzLmNsYXNzTmFtZX0gc3R5bGU9e3sgLi4ucHJvcHMuc3R5bGUgfX0+XG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2FyZChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgey4uLnByb3BzfSBjbGFzc05hbWU9eydjYXJkICcgKyBwcm9wcy5jbGFzc05hbWV9IHN0eWxlPXtwcm9wcy5zdHlsZX0gdGl0bGU9XCJcIj5cbiAgICAgICAgICAgIHtwcm9wcy50aXRsZSAmJiA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+e3Byb3BzLnRpdGxlfTwvZGl2Pn1cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgbGV0IERlbGV0ZVdpdGhVbmRvID0gcHJvcHMgPT4ge1xuICAgIGxldCBkZWxldGVXaXRoVW5kbyA9IHVuZG8gPT4ge1xuICAgICAgICBhcGkudXBkYXRlKCdhcGkvJyArIHByb3BzLmVuZHBvaW50ICsgJy8nICsgcHJvcHMub2JqZWN0LmlkLCB7XG4gICAgICAgICAgICAuLi5wcm9wcy5vYmplY3QsXG4gICAgICAgICAgICBkZWxldGVkOiB1bmRvID8gZmFsc2UgOiB0cnVlLFxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHByb3BzLmNhbGxiYWNrKClcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7IXVuZG8gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjxzdHJvbmc+e3Byb3BzLm9iamVjdC5uYW1lfTwvc3Ryb25nPlwiIGRlbGV0ZWQueycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVXaXRoVW5kbyh0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xpY2sgaGVyZSB0byB1bmRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGVsZXRlIHVuLWRvbmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICB0b2FzdChyZXNwb25zZSwgeyB0b2FzdElkOiAnZGVsZXRlLWl0ZW0tJyArIHByb3BzLm9iamVjdC5pZCB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICBkZWxldGVXaXRoVW5kbygpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17cHJvcHMuc3R5bGV9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9hPlxuICAgIClcbn1cbkRlbGV0ZVdpdGhVbmRvLnByb3BUeXBlcyA9IHtcbiAgICBlbmRwb2ludDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG9iamVjdDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxufVxuXG5leHBvcnQgbGV0IHNlbGVjdFN0eWxlID0ge1xuICAgIGNvbnRyb2w6IGJhc2UgPT4gKHtcbiAgICAgICAgLi4uYmFzZSxcbiAgICAgICAgaGVpZ2h0OiAzMSxcbiAgICAgICAgbWluSGVpZ2h0OiAzMSxcbiAgICB9KSxcbiAgICBpbmRpY2F0b3JzQ29udGFpbmVyOiBiYXNlID0+ICh7XG4gICAgICAgIC4uLmJhc2UsXG4gICAgICAgIGhlaWdodDogMzEsXG4gICAgfSksXG4gICAgaW5wdXQ6IGJhc2UgPT4gKHtcbiAgICAgICAgLi4uYmFzZSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogMCxcbiAgICAgICAgcGFkZGluZ1RvcDogMCxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgIH0pLFxuICAgIHZhbHVlQ29udGFpbmVyOiBiYXNlID0+ICh7XG4gICAgICAgIC4uLmJhc2UsXG4gICAgICAgIHBhZGRpbmc6ICcwIDhweCcsXG4gICAgICAgIG1hcmdpblRvcDogLTIsXG4gICAgfSksXG4gICAgb3B0aW9uOiBiYXNlID0+ICh7XG4gICAgICAgIC4uLmJhc2UsXG4gICAgICAgIHBhZGRpbmc6ICcycHggMTVweCcsXG4gICAgfSksXG59XG5cbmV4cG9ydCBsZXQgZGVib3VuY2UgPSAoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSA9PiB7XG4gICAgdmFyIHRpbWVvdXRcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcyxcbiAgICAgICAgICAgIGFyZ3MgPSBhcmd1bWVudHNcbiAgICAgICAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aW1lb3V0ID0gbnVsbFxuICAgICAgICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dFxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpXG4gICAgICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyID0gc3RyaW5nID0+IHtcbiAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpXG59XG5cbmV4cG9ydCBjb25zdCBvcGVyYXRvck1hcCA9IHtcbiAgICBleGFjdDogJz0gZXF1YWxzJyxcbiAgICBpc19ub3Q6IFwi4omgIGRvZXNuJ3QgZXF1YWxcIixcbiAgICBpY29udGFpbnM6ICfiiIsgY29udGFpbnMnLFxuICAgIG5vdF9pY29udGFpbnM6IFwi4oiMIGRvZXNuJ3QgY29udGFpblwiLFxuICAgIGd0OiAnPiBncmVhdGVyIHRoYW4nLFxuICAgIGx0OiAnPCBsb3dlciB0aGFuJyxcbn1cblxuY29uc3Qgb3BlcmF0b3JFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMob3BlcmF0b3JNYXApLnJldmVyc2UoKVxuXG5leHBvcnQgY29uc3QgZm9ybWF0RmlsdGVyTmFtZSA9IHN0ciA9PiB7XG4gICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIG9wZXJhdG9yRW50cmllcykge1xuICAgICAgICBpZiAoc3RyLmluY2x1ZGVzKGtleSkpIHJldHVybiBzdHIucmVwbGFjZSgnX18nICsga2V5LCAnJykgKyBgICR7dmFsdWUuc3BsaXQoJyAnKVswXX0gYFxuICAgIH1cbiAgICByZXR1cm4gc3RyICsgYCAke29wZXJhdG9yTWFwWydleGFjdCddLnNwbGl0KCcgJylbMF19IGBcbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcnNvbkRhdGEgPSAocGVyc29uLCBjYWxsYmFjaykgPT4ge1xuICAgIHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdXNlcj8gVGhpcyBjYW5ub3QgYmUgdW5kb25lJykgJiZcbiAgICAgICAgYXBpLmRlbGV0ZSgnYXBpL3BlcnNvbi8nICsgcGVyc29uLmlkKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRvYXN0KCdQZXJzb24gc3VjY2VzZnVsbHkgZGVsZXRlZC4nKVxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpXG4gICAgICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCBvYmplY3RzRXF1YWwgPSAob2JqMSwgb2JqMikgPT4gSlNPTi5zdHJpbmdpZnkob2JqMSkgPT09IEpTT04uc3RyaW5naWZ5KG9iajIpXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXBpIGZyb20gJ2xpYi9hcGknXG5pbXBvcnQgeyB0b1BhcmFtcywgQ2FyZCB9IGZyb20gJ2xpYi91dGlscydcbmltcG9ydCB7IERhdGVGaWx0ZXIgfSBmcm9tICdsaWIvY29tcG9uZW50cy9EYXRlRmlsdGVyJ1xuaW1wb3J0IHsgU3BpbiB9IGZyb20gJ2FudGQnXG5cbmxldCBzdHJpcEhUVFAgPSB1cmwgPT4gdXJsLnJlcGxhY2UoLyheWzAtOV0rX1xcdys6fF4pXFwvXFwvLywgJycpXG5cbmZ1bmN0aW9uIHJvdW5kZWRfcmVjdCh4LCB5LCB3LCBoLCByLCB0bCwgdHIsIGJsLCBicikge1xuICAgIHZhciByZXR2YWxcbiAgICByZXR2YWwgPSAnTScgKyAoeCArIHIpICsgJywnICsgeVxuICAgIHJldHZhbCArPSAnaCcgKyAodyAtIDIgKiByKVxuICAgIGlmICh0cikge1xuICAgICAgICByZXR2YWwgKz0gJ2EnICsgciArICcsJyArIHIgKyAnIDAgMCAxICcgKyByICsgJywnICsgclxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHZhbCArPSAnaCcgKyByXG4gICAgICAgIHJldHZhbCArPSAndicgKyByXG4gICAgfVxuICAgIHJldHZhbCArPSAndicgKyAoaCAtIDIgKiByKVxuICAgIGlmIChicikge1xuICAgICAgICByZXR2YWwgKz0gJ2EnICsgciArICcsJyArIHIgKyAnIDAgMCAxICcgKyAtciArICcsJyArIHJcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR2YWwgKz0gJ3YnICsgclxuICAgICAgICByZXR2YWwgKz0gJ2gnICsgLXJcbiAgICB9XG4gICAgcmV0dmFsICs9ICdoJyArICgyICogciAtIHcpXG4gICAgaWYgKGJsKSB7XG4gICAgICAgIHJldHZhbCArPSAnYScgKyByICsgJywnICsgciArICcgMCAwIDEgJyArIC1yICsgJywnICsgLXJcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR2YWwgKz0gJ2gnICsgLXJcbiAgICAgICAgcmV0dmFsICs9ICd2JyArIC1yXG4gICAgfVxuICAgIHJldHZhbCArPSAndicgKyAoMiAqIHIgLSBoKVxuICAgIGlmICh0bCkge1xuICAgICAgICByZXR2YWwgKz0gJ2EnICsgciArICcsJyArIHIgKyAnIDAgMCAxICcgKyByICsgJywnICsgLXJcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR2YWwgKz0gJ3YnICsgLXJcbiAgICAgICAgcmV0dmFsICs9ICdoJyArIHJcbiAgICB9XG4gICAgcmV0dmFsICs9ICd6J1xuICAgIHJldHVybiByZXR2YWxcbn1cblxuZnVuY3Rpb24gTm9EYXRhKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzFyZW0nIH19PlxuICAgICAgICAgICAgV2UgZG9uJ3QgaGF2ZSBlbm91Z2ggZGF0YSB0byBzaG93IGFueXRoaW5nIGhlcmUuIFlvdSBtaWdodCBuZWVkIHRvIHNlbmQgdXMgc29tZSBmcm9udGVuZCAoSlMpIGV2ZW50cywgYXMgd2VcbiAgICAgICAgICAgIHVzZSB0aGUgPHByZSBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lJyB9fT4kY3VycmVudF91cmw8L3ByZT4gcHJvcGVydHkgdG8gY2FsY3VsYXRlIHBhdGhzLlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBjbGFzcyBQYXRocyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICBkYXRlRnJvbTogbnVsbCxcbiAgICAgICAgICAgICAgICBkYXRlVG86IG51bGwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF0aHM6IHtcbiAgICAgICAgICAgICAgICBub2RlczogW10sXG4gICAgICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGQzTG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIHNhbmtleUxvYWRlZDogZmFsc2UsXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mZXRjaFBhdGhzID0gdGhpcy5mZXRjaFBhdGhzLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5jYW52YXMgPSBSZWFjdC5jcmVhdGVSZWYoKVxuXG4gICAgICAgIHRoaXMuZmV0Y2hQYXRocygpXG4gICAgICAgIGltcG9ydCgnZDMnKS50aGVuKGQzID0+IHtcbiAgICAgICAgICAgIHRoaXMuZDMgPSBkM1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGQzTG9hZGVkOiB0cnVlIH0pXG4gICAgICAgIH0pXG4gICAgICAgIGltcG9ydCgnZDMtc2Fua2V5JykudGhlbihzYW5rZXkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zYW5rZXkgPSBzYW5rZXlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzYW5rZXlMb2FkZWQ6IHRydWUgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXJQYXRocyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBwYXRocyB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5kM0xvYWRlZCB8fCAhdGhpcy5zdGF0ZS5zYW5rZXlMb2FkZWQpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGF0aHMgc3ZnJylcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChub2RlID0+IG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKSlcblxuICAgICAgICBpZiAoIXBhdGhzIHx8IHBhdGhzLm5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlbmRlcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZW5kZXJlZDogdHJ1ZSB9KVxuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLmNhbnZhcy5jdXJyZW50Lm9mZnNldFdpZHRoXG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLmNhbnZhcy5jdXJyZW50Lm9mZnNldEhlaWdodFxuXG4gICAgICAgIGxldCBzdmcgPSB0aGlzLmQzXG4gICAgICAgICAgICAuc2VsZWN0KHRoaXMuY2FudmFzLmN1cnJlbnQpXG4gICAgICAgICAgICAuYXBwZW5kKCdzdmcnKVxuICAgICAgICAgICAgLnN0eWxlKCdiYWNrZ3JvdW5kJywgJyNmZmYnKVxuICAgICAgICAgICAgLnN0eWxlKCd3aWR0aCcsIHdpZHRoKVxuICAgICAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgICAgIGxldCBzYW5rZXkgPSBuZXcgdGhpcy5zYW5rZXkuc2Fua2V5KClcbiAgICAgICAgICAgIC5ub2RlSWQoZCA9PiBkLm5hbWUpXG4gICAgICAgICAgICAubm9kZUFsaWduKHRoaXMuc2Fua2V5LnNhbmtleUxlZnQpXG4gICAgICAgICAgICAubm9kZVNvcnQobnVsbClcbiAgICAgICAgICAgIC5ub2RlV2lkdGgoMTUpXG4gICAgICAgICAgICAvLyAubm9kZVBhZGRpbmcoKVxuICAgICAgICAgICAgLnNpemUoW3dpZHRoLCBoZWlnaHRdKVxuICAgICAgICBsZXQgY29sb3IgPSBuYW1lID0+IHRoaXMuZDMuc2NhbGVPcmRpbmFsKHRoaXMuZDMuaW50ZXJwb2xhdGVCbHVlcygpKShuYW1lLnJlcGxhY2UoLyAuKi8sICcnKSlcblxuICAgICAgICBjb25zdCB7IG5vZGVzLCBsaW5rcyB9ID0gc2Fua2V5KHtcbiAgICAgICAgICAgIG5vZGVzOiBwYXRocy5ub2Rlcy5tYXAoZCA9PiBPYmplY3QuYXNzaWduKHt9LCBkKSksXG4gICAgICAgICAgICBsaW5rczogcGF0aHMubGlua3MubWFwKGQgPT4gT2JqZWN0LmFzc2lnbih7fSwgZCkpLFxuICAgICAgICB9KVxuXG4gICAgICAgIHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgLnNlbGVjdEFsbCgncmVjdCcpXG4gICAgICAgICAgICAuZGF0YShub2RlcylcbiAgICAgICAgICAgIC5qb2luKCdyZWN0JylcbiAgICAgICAgICAgIC5hdHRyKCd4JywgZCA9PiBkLngwICsgMSlcbiAgICAgICAgICAgIC5hdHRyKCd5JywgZCA9PiBkLnkwKVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGQgPT4gZC55MSAtIGQueTApXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBkID0+IGQueDEgLSBkLngwIC0gMilcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGxpbmsgb2YgZC5zb3VyY2VMaW5rcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYyA9PT0gdW5kZWZpbmVkKSBjID0gbGluay5jb2xvclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjICE9PSBsaW5rLmNvbG9yKSBjID0gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGxpbmsgb2YgZC50YXJnZXRMaW5rcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMgPT09IHVuZGVmaW5lZCkgYyA9IGxpbmsuY29sb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGMgIT09IGxpbmsuY29sb3IpIGMgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMuZDMuY29sb3IoYykgfHwgdGhpcy5kMy5jb2xvcignI2RkZGRkZCcpKS5kYXJrZXIoMC41KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIC5hdHRyKFwiZmlsbFwiLCBkID0+ICAndmFyKC0tYmx1ZSknKVxuICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAwLjUpXG4gICAgICAgICAgICAuYXBwZW5kKCd0aXRsZScpXG4gICAgICAgICAgICAudGV4dChkID0+IGAke3N0cmlwSFRUUChkLm5hbWUpfVxcbiR7ZC52YWx1ZS50b0xvY2FsZVN0cmluZygpfWApXG5cbiAgICAgICAgY29uc3QgZHJvcE9mZkdyYWRpZW50ID0gc3ZnXG4gICAgICAgICAgICAuYXBwZW5kKCdkZWZzJylcbiAgICAgICAgICAgIC5hcHBlbmQoJ2xpbmVhckdyYWRpZW50JylcbiAgICAgICAgICAgIC5hdHRyKCdpZCcsICdkcm9wb2ZmLWdyYWRpZW50JylcbiAgICAgICAgICAgIC5hdHRyKCdncmFkaWVudFRyYW5zZm9ybScsICdyb3RhdGUoOTApJylcblxuICAgICAgICBkcm9wT2ZmR3JhZGllbnRcbiAgICAgICAgICAgIC5hcHBlbmQoJ3N0b3AnKVxuICAgICAgICAgICAgLmF0dHIoJ29mZnNldCcsICcwJScpXG4gICAgICAgICAgICAuYXR0cignc3RvcC1jb2xvcicsICdyZ2JhKDIyMCw1Myw2OSwwLjcpJylcblxuICAgICAgICBkcm9wT2ZmR3JhZGllbnRcbiAgICAgICAgICAgIC5hcHBlbmQoJ3N0b3AnKVxuICAgICAgICAgICAgLmF0dHIoJ29mZnNldCcsICcxMDAlJylcbiAgICAgICAgICAgIC5hdHRyKCdzdG9wLWNvbG9yJywgJyNmZmZmZmYnKVxuXG4gICAgICAgIGNvbnN0IGxpbmsgPSBzdmdcbiAgICAgICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnbm9uZScpXG4gICAgICAgICAgICAuc2VsZWN0QWxsKCdnJylcbiAgICAgICAgICAgIC5kYXRhKGxpbmtzKVxuICAgICAgICAgICAgLmpvaW4oJ2cnKVxuICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZScsIGQgPT4gJ3ZhcigtLWJsdWUpJylcbiAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgMC4zKVxuICAgICAgICAgICAgLnN0eWxlKCdtaXgtYmxlbmQtbW9kZScsICdtdWx0aXBseScpXG5cbiAgICAgICAgbGluay5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAgICAgLmF0dHIoJ2QnLCB0aGlzLnNhbmtleS5zYW5rZXlMaW5rSG9yaXpvbnRhbCgpKVxuICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIGQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgxLCBkLndpZHRoKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICBsaW5rLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgICAgIC5hdHRyKCdkJywgKGRhdGEsIGIsIGMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5zb3VyY2UubGF5ZXIgPT0gMCkgcmV0dXJuXG4gICAgICAgICAgICAgICAgbGV0IGhlaWdodCA9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc291cmNlLnkxIC1cbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zb3VyY2UueTAgLVxuICAgICAgICAgICAgICAgICAgICBkYXRhLnNvdXJjZS5zb3VyY2VMaW5rcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYgKyBjdXJyLndpZHRoLCAwKVxuICAgICAgICAgICAgICAgIHJldHVybiByb3VuZGVkX3JlY3QoMCwgMCwgMzAsIGhlaWdodCwgTWF0aC5taW4oMjUsIGhlaWdodCksIGZhbHNlLCB0cnVlLCBmYWxzZSwgZmFsc2UpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAndXJsKCNkcm9wb2ZmLWdyYWRpZW50KScpXG4gICAgICAgICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgMClcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAndHJhbnNsYXRlKCcgK1xuICAgICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKGRhdGEuc291cmNlLngxKSArXG4gICAgICAgICAgICAgICAgICAgICcsJyArXG4gICAgICAgICAgICAgICAgICAgIE1hdGgucm91bmQoZGF0YS5zb3VyY2UueTAgKyBkYXRhLnNvdXJjZS5zb3VyY2VMaW5rcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYgKyBjdXJyLndpZHRoLCAwKSkgK1xuICAgICAgICAgICAgICAgICAgICAnKSdcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFwcGVuZCgndHNwYW4nKVxuICAgICAgICAgICAgLnRleHQoZCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQudmFsdWUgLSBkLnNvdXJjZS5zb3VyY2VMaW5rcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYgKyBjdXJyLnZhbHVlLCAwKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICBsaW5rLmFwcGVuZCgndGl0bGUnKS50ZXh0KGQgPT4gYCR7ZC5zb3VyY2UubmFtZX0g4oaSICR7ZC50YXJnZXQubmFtZX1cXG4ke2QudmFsdWUudG9Mb2NhbGVTdHJpbmcoKX1gKVxuXG4gICAgICAgIHZhciB0ZXh0U2VsZWN0aW9uID0gc3ZnXG4gICAgICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzEycHgnKVxuICAgICAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgICAgICAuZGF0YShub2RlcylcbiAgICAgICAgICAgIC5qb2luKCd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRyKCd4JywgZCA9PiAoZC54MCA8IHdpZHRoIC8gMiA/IGQueDEgKyA2IDogZC54MCAtIDYpKVxuICAgICAgICAgICAgLmF0dHIoJ3knLCBkID0+IChkLnkxICsgZC55MCkgLyAyKVxuICAgICAgICAgICAgLmF0dHIoJ2R5JywgJzAuMzVlbScpXG4gICAgICAgICAgICAuYXR0cigndGV4dC1hbmNob3InLCBkID0+IChkLngwIDwgd2lkdGggLyAyID8gJ3N0YXJ0JyA6ICdlbmQnKSlcbiAgICAgICAgICAgIC5hdHRyKCdkaXNwbGF5JywgZCA9PiAoZC52YWx1ZSA+IDAgPyAnaW5oZXJpdCcgOiAnbm9uZScpKVxuICAgICAgICAgICAgLnRleHQoZCA9PlxuICAgICAgICAgICAgICAgIGQubmFtZS5sZW5ndGggPiAzNVxuICAgICAgICAgICAgICAgICAgICA/IHN0cmlwSFRUUChkLm5hbWUpLnN1YnN0cmluZygwLCA2KSArICcuLi4nICsgc3RyaXBIVFRQKGQubmFtZSkuc2xpY2UoLTE1KVxuICAgICAgICAgICAgICAgICAgICA6IHN0cmlwSFRUUChkLm5hbWUpXG4gICAgICAgICAgICApXG5cbiAgICAgICAgdGV4dFNlbGVjdGlvblxuICAgICAgICAgICAgLmFwcGVuZCgndHNwYW4nKVxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwtb3BhY2l0eScsIDAuNylcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gYCAke2QudmFsdWUudG9Mb2NhbGVTdHJpbmcoKX1gKVxuXG4gICAgICAgIHRleHRTZWxlY3Rpb24uYXBwZW5kKCd0aXRsZScpLnRleHQoZCA9PiBzdHJpcEhUVFAoZC5uYW1lKSlcblxuICAgICAgICByZXR1cm4gdGV4dFNlbGVjdGlvbi5ub2RlKClcbiAgICB9XG5cbiAgICBmZXRjaFBhdGhzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB0b1BhcmFtcyh0aGlzLnN0YXRlLmZpbHRlcilcblxuICAgICAgICBhcGkuZ2V0KGBhcGkvcGF0aHMke3BhcmFtcyA/IGAvPyR7cGFyYW1zfWAgOiAnJ31gKS50aGVuKHBhdGhzID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXRoczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wYXRocy5tYXAocGF0aCA9PiAoeyBuYW1lOiBwYXRoLnNvdXJjZSB9KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucGF0aHMubWFwKHBhdGggPT4gKHsgbmFtZTogcGF0aC50YXJnZXQgfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtzOiBwYXRocyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YUxvYWRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUGF0aHNcbiAgICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1cGRhdGVGaWx0ZXIgPSBjaGFuZ2VzID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHsgZmlsdGVyOiB7IC4uLnRoaXMuc3RhdGUuZmlsdGVyLCAuLi5jaGFuZ2VzIH0sIHJlbmRlcmVkOiBmYWxzZSwgZGF0YUxvYWRlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hQYXRoc1xuICAgICAgICApXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyBwYXRocywgZmlsdGVyLCBkYXRhTG9hZGVkIH0gPSB0aGlzLnN0YXRlXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPlBhdGhzPC9oMT5cbiAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZUZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlX2Zyb20sIGRhdGVfdG8pID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaWx0ZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlX2Zyb20sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVfdG8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVGcm9tPXtmaWx0ZXIuZGF0ZV9mcm9tfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVRvPXtmaWx0ZXIuZGF0ZV90b31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXt0aGlzLmNhbnZhc30gY2xhc3NOYW1lPVwicGF0aHNcIiBzdHlsZT17eyBoZWlnaHQ6ICc5MHZoJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhTG9hZGVkICYmIHBhdGhzICYmIHBhdGhzLm5vZGVzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Tm9EYXRhIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFkYXRhTG9hZGVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nVG9wOiAnMTRyZW0nLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwaW4gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoVGhpcyBtaWdodCB0YWtlIGEgd2hpbGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==