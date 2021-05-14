(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["actions"],{

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

/***/ "./frontend/src/scenes/actions/Actions.js":
/*!************************************************!*\
  !*** ./frontend/src/scenes/actions/Actions.js ***!
  \************************************************/
/*! exports provided: Actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actions", function() { return Actions; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ActionsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ActionsTable */ "./frontend/src/scenes/actions/ActionsTable.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var Actions = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Actions, _Component);

  var _super = _createSuper(Actions);

  function Actions(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Actions);

    return _super.call(this, props);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Actions, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ActionsTable__WEBPACK_IMPORTED_MODULE_6__["ActionsTable"], this.props);
    }
  }]);

  return Actions;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/***/ }),

/***/ "./frontend/src/scenes/actions/ActionsTable.js":
/*!*****************************************************!*\
  !*** ./frontend/src/scenes/actions/ActionsTable.js ***!
  \*****************************************************/
/*! exports provided: ActionsTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsTable", function() { return ActionsTable; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/api */ "./frontend/src/lib/api.js");
/* harmony import */ var lib_components_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/components/Link */ "./frontend/src/lib/components/Link.js");
/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/utils */ "./frontend/src/lib/utils.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var ActionsTable = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ActionsTable, _Component);

  var _super = _createSuper(ActionsTable);

  function ActionsTable(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ActionsTable);

    _this = _super.call(this, props);
    _this.state = {
      actions: [],
      newEvents: [],
      loading: true
    };
    _this.fetchActions = _this.fetchActions.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));

    _this.fetchActions();

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ActionsTable, [{
    key: "fetchActions",
    value: function fetchActions() {
      var _this2 = this;

      clearTimeout(this.poller);
      if (!this.state.loading) this.setState({
        loading: true
      });
      lib_api__WEBPACK_IMPORTED_MODULE_7__["default"].get('api/action/?include_count=1').then(function (actions) {
        _this2.setState({
          actions: actions.results,
          loading: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          actions = _this$state.actions,
          loading = _this$state.loading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "btn-group float-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(lib_components_Link__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        to: "/action",
        className: "btn btn-success"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "fi flaticon-add"
      }), "\xA0 New action")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", null, "Actions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        style: {
          maxWidth: 600
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", null, "Actions are PostHog\u2019s way of easily cleaning up a large amount of Event data. Actions consist of one or more events that you have decided to put into a manually-labelled bucket. They're used in Funnels, Live actions and Trends.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "https://github.com/PostHog/posthog/wiki/Actions",
        target: "_blank"
      }, "See documentation"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("table", {
        className: "table",
        style: {
          position: 'relative'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        scope: "col"
      }, "Action ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        scope: "col"
      }, "Volume"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        scope: "col"
      }, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tbody", null, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(lib_utils__WEBPACK_IMPORTED_MODULE_9__["TableRowLoading"], {
        colSpan: 4,
        asOverlay: actions.length > 0
      }), actions && actions.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, "You don't have any actions yet.")), actions && actions.map(function (action) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
          key: action.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(lib_components_Link__WEBPACK_IMPORTED_MODULE_8__["Link"], {
          to: '/action/' + action.id
        }, action.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, action.count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, action.steps.map(function (step) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            key: step.id
          }, function () {
            switch (step.event) {
              case '$autocapture':
                return 'Autocapture';

              case '$pageview':
                return 'URL matches ' + step.url;

              default:
                return 'Event: ' + step.event;
            }
          }());
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
          style: {
            fontSize: 16
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(lib_components_Link__WEBPACK_IMPORTED_MODULE_8__["Link"], {
          to: '/action/' + action.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
          className: "fi flaticon-edit"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(lib_utils__WEBPACK_IMPORTED_MODULE_9__["DeleteWithUndo"], {
          endpoint: "action",
          object: action,
          className: "text-danger",
          style: {
            marginLeft: 8
          },
          callback: _this3.fetchActions
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
          className: "fi flaticon-basket"
        }))));
      }))));
    }
  }]);

  return ActionsTable;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9zY2VuZXMvYWN0aW9ucy9BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9zY2VuZXMvYWN0aW9ucy9BY3Rpb25zVGFibGUuanMiXSwibmFtZXMiOlsidXVpZCIsInJlcGxhY2UiLCJjIiwiY3J5cHRvIiwiZ2V0UmFuZG9tVmFsdWVzIiwiVWludDhBcnJheSIsInRvU3RyaW5nIiwidG9QYXJhbXMiLCJvYmoiLCJoYW5kbGVWYWwiLCJ2YWwiLCJfaXNBTW9tZW50T2JqZWN0IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZm9ybWF0IiwiSlNPTiIsInN0cmluZ2lmeSIsIk9iamVjdCIsImVudHJpZXMiLCJmaWx0ZXIiLCJrZXkiLCJtYXAiLCJqb2luIiwiZnJvbVBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic2xpY2UiLCJzcGxpdCIsInJlZHVjZSIsImEiLCJiIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY29sb3JzIiwicGVyY2VudGFnZSIsImRpdmlzaW9uIiwidG9Mb2NhbGVTdHJpbmciLCJ1bmRlZmluZWQiLCJzdHlsZSIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsIkxvYWRpbmciLCJUYWJsZVJvd0xvYWRpbmciLCJjb2xTcGFuIiwiYXNPdmVybGF5IiwicGFkZGluZyIsInRleHRBbGlnbiIsIkNsb3NlQnV0dG9uIiwicHJvcHMiLCJjbGFzc05hbWUiLCJDYXJkIiwidGl0bGUiLCJjaGlsZHJlbiIsIkRlbGV0ZVdpdGhVbmRvIiwiZGVsZXRlV2l0aFVuZG8iLCJ1bmRvIiwiYXBpIiwidXBkYXRlIiwiZW5kcG9pbnQiLCJvYmplY3QiLCJpZCIsImRlbGV0ZWQiLCJ0aGVuIiwiY2FsbGJhY2siLCJyZXNwb25zZSIsIm5hbWUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0b2FzdCIsInRvYXN0SWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwic2hhcGUiLCJudW1iZXIiLCJzZWxlY3RTdHlsZSIsImNvbnRyb2wiLCJiYXNlIiwiaGVpZ2h0IiwibWluSGVpZ2h0IiwiaW5kaWNhdG9yc0NvbnRhaW5lciIsImlucHV0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJtYXJnaW4iLCJvcGFjaXR5IiwidmFsdWVDb250YWluZXIiLCJtYXJnaW5Ub3AiLCJvcHRpb24iLCJkZWJvdW5jZSIsImZ1bmMiLCJ3YWl0IiwiaW1tZWRpYXRlIiwidGltZW91dCIsImNvbnRleHQiLCJhcmdzIiwiYXJndW1lbnRzIiwibGF0ZXIiLCJhcHBseSIsImNhbGxOb3ciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJvcGVyYXRvck1hcCIsImV4YWN0IiwiaXNfbm90IiwiaWNvbnRhaW5zIiwibm90X2ljb250YWlucyIsImd0IiwibHQiLCJvcGVyYXRvckVudHJpZXMiLCJyZXZlcnNlIiwiZm9ybWF0RmlsdGVyTmFtZSIsInN0ciIsInZhbHVlIiwiaW5jbHVkZXMiLCJkZWxldGVQZXJzb25EYXRhIiwicGVyc29uIiwiY29uZmlybSIsIm9iamVjdHNFcXVhbCIsIm9iajEiLCJvYmoyIiwiQWN0aW9ucyIsIkNvbXBvbmVudCIsIkFjdGlvbnNUYWJsZSIsInN0YXRlIiwiYWN0aW9ucyIsIm5ld0V2ZW50cyIsImxvYWRpbmciLCJmZXRjaEFjdGlvbnMiLCJiaW5kIiwicG9sbGVyIiwic2V0U3RhdGUiLCJnZXQiLCJyZXN1bHRzIiwibWF4V2lkdGgiLCJwb3NpdGlvbiIsImxlbmd0aCIsImFjdGlvbiIsImNvdW50Iiwic3RlcHMiLCJzdGVwIiwiZXZlbnQiLCJ1cmwiLCJmb250U2l6ZSIsIm1hcmdpbkxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFDSSx1QkFBTyxpQkFBaUJELElBQUksQ0FBQ0UsR0FBN0I7O0FBQ0o7QUFDSSx1QkFBTyxZQUFZRixJQUFJLENBQUNDLEtBQXhCO0FBTlI7QUFRSCxXQVRBLEVBREwsQ0FEa0I7QUFBQSxTQUFyQixDQURMLENBTEosZUFxQkk7QUFBSSxlQUFLLEVBQUU7QUFBRUUsb0JBQVEsRUFBRTtBQUFaO0FBQVgsd0JBQ0ksMkRBQUMsd0RBQUQ7QUFBTSxZQUFFLEVBQUUsYUFBYU4sTUFBTSxDQUFDakY7QUFBOUIsd0JBQ0k7QUFBRyxtQkFBUyxFQUFDO0FBQWIsVUFESixDQURKLGVBSUksMkRBQUMsd0RBQUQ7QUFDSSxrQkFBUSxFQUFDLFFBRGI7QUFFSSxnQkFBTSxFQUFFaUYsTUFGWjtBQUdJLG1CQUFTLEVBQUMsYUFIZDtBQUlJLGVBQUssRUFBRTtBQUFFTyxzQkFBVSxFQUFFO0FBQWQsV0FKWDtBQUtJLGtCQUFRLEVBQUUsTUFBSSxDQUFDaEI7QUFMbkIsd0JBT0k7QUFBRyxtQkFBUyxFQUFDO0FBQWIsVUFQSixDQUpKLENBckJKLENBRGM7QUFBQSxPQUFsQixDQVJSLENBVEosQ0FyQkosQ0FESjtBQWlGSDtBQXZHTDs7QUFBQTtBQUFBLEVBQWtDTiwrQ0FBbEMsRSIsImZpbGUiOiJhY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGFwaSBmcm9tICcuL2FwaSdcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBTcGluIH0gZnJvbSAnYW50ZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHV1aWQoKSB7XG4gICAgcmV0dXJuIChbMWU3XSArIC0xZTMgKyAtNGUzICsgLThlMyArIC0xZTExKS5yZXBsYWNlKC9bMDE4XS9nLCBjID0+XG4gICAgICAgIChjIF4gKGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMSkpWzBdICYgKDE1ID4+IChjIC8gNCkpKSkudG9TdHJpbmcoMTYpXG4gICAgKVxufVxuXG5leHBvcnQgbGV0IHRvUGFyYW1zID0gb2JqID0+IHtcbiAgICBsZXQgaGFuZGxlVmFsID0gdmFsID0+IHtcbiAgICAgICAgaWYgKHZhbC5faXNBTW9tZW50T2JqZWN0KSByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbC5mb3JtYXQoJ1lZWVktTU0tREQnKSlcbiAgICAgICAgdmFsID0gdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeSh2YWwpIDogdmFsXG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKVxuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMob2JqKVxuICAgICAgICAuZmlsdGVyKChba2V5LCB2YWxdKSA9PiB2YWwpXG4gICAgICAgIC5tYXAoKFtrZXksIHZhbF0pID0+IGAke2tleX09JHtoYW5kbGVWYWwodmFsKX1gKVxuICAgICAgICAuam9pbignJicpXG59XG5leHBvcnQgbGV0IGZyb21QYXJhbXMgPSAoKSA9PlxuICAgIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggIT0gJydcbiAgICAgICAgPyB3aW5kb3cubG9jYXRpb24uc2VhcmNoXG4gICAgICAgICAgICAgIC5zbGljZSgxKVxuICAgICAgICAgICAgICAuc3BsaXQoJyYnKVxuICAgICAgICAgICAgICAucmVkdWNlKChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICBiID0gYi5zcGxpdCgnPScpXG4gICAgICAgICAgICAgICAgICBhW2JbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KGJbMV0pXG4gICAgICAgICAgICAgICAgICByZXR1cm4gYVxuICAgICAgICAgICAgICB9LCB7fSlcbiAgICAgICAgOiB7fVxuXG5leHBvcnQgbGV0IGNvbG9ycyA9IFsnc3VjY2VzcycsICdzZWNvbmRhcnknLCAnd2FybmluZycsICdwcmltYXJ5JywgJ2RhbmdlcicsICdpbmZvJywgJ2RhcmsnLCAnbGlnaHQnXVxuZXhwb3J0IGxldCBwZXJjZW50YWdlID0gZGl2aXNpb24gPT5cbiAgICBkaXZpc2lvblxuICAgICAgICA/IGRpdmlzaW9uLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgICBzdHlsZTogJ3BlcmNlbnQnLFxuICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgICAgICAgfSlcbiAgICAgICAgOiAnJ1xuXG5leHBvcnQgbGV0IExvYWRpbmcgPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLW92ZXJsYXlcIj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPFNwaW4gLz5cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGNvbnN0IFRhYmxlUm93TG9hZGluZyA9ICh7IGNvbFNwYW4gPSAxLCBhc092ZXJsYXkgPSBmYWxzZSB9KSA9PiAoXG4gICAgPHRyIGNsYXNzTmFtZT17YXNPdmVybGF5ID8gJ2xvYWRpbmctb3ZlcmxheSBvdmVyLXRhYmxlJyA6ICcnfT5cbiAgICAgICAgPHRkIGNvbFNwYW49e2NvbFNwYW59IHN0eWxlPXt7IHBhZGRpbmc6IDUwLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgPFNwaW4gLz5cbiAgICAgICAgPC90ZD5cbiAgICA8L3RyPlxuKVxuXG5leHBvcnQgbGV0IENsb3NlQnV0dG9uID0gcHJvcHMgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzcGFuIHsuLi5wcm9wc30gY2xhc3NOYW1lPXsnY2xvc2UgY3Vyc29yLXBvaW50ZXIgJyArIHByb3BzLmNsYXNzTmFtZX0gc3R5bGU9e3sgLi4ucHJvcHMuc3R5bGUgfX0+XG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2FyZChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgey4uLnByb3BzfSBjbGFzc05hbWU9eydjYXJkICcgKyBwcm9wcy5jbGFzc05hbWV9IHN0eWxlPXtwcm9wcy5zdHlsZX0gdGl0bGU9XCJcIj5cbiAgICAgICAgICAgIHtwcm9wcy50aXRsZSAmJiA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+e3Byb3BzLnRpdGxlfTwvZGl2Pn1cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgbGV0IERlbGV0ZVdpdGhVbmRvID0gcHJvcHMgPT4ge1xuICAgIGxldCBkZWxldGVXaXRoVW5kbyA9IHVuZG8gPT4ge1xuICAgICAgICBhcGkudXBkYXRlKCdhcGkvJyArIHByb3BzLmVuZHBvaW50ICsgJy8nICsgcHJvcHMub2JqZWN0LmlkLCB7XG4gICAgICAgICAgICAuLi5wcm9wcy5vYmplY3QsXG4gICAgICAgICAgICBkZWxldGVkOiB1bmRvID8gZmFsc2UgOiB0cnVlLFxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHByb3BzLmNhbGxiYWNrKClcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7IXVuZG8gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjxzdHJvbmc+e3Byb3BzLm9iamVjdC5uYW1lfTwvc3Ryb25nPlwiIGRlbGV0ZWQueycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVXaXRoVW5kbyh0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xpY2sgaGVyZSB0byB1bmRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGVsZXRlIHVuLWRvbmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICB0b2FzdChyZXNwb25zZSwgeyB0b2FzdElkOiAnZGVsZXRlLWl0ZW0tJyArIHByb3BzLm9iamVjdC5pZCB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICBkZWxldGVXaXRoVW5kbygpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17cHJvcHMuc3R5bGV9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9hPlxuICAgIClcbn1cbkRlbGV0ZVdpdGhVbmRvLnByb3BUeXBlcyA9IHtcbiAgICBlbmRwb2ludDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG9iamVjdDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxufVxuXG5leHBvcnQgbGV0IHNlbGVjdFN0eWxlID0ge1xuICAgIGNvbnRyb2w6IGJhc2UgPT4gKHtcbiAgICAgICAgLi4uYmFzZSxcbiAgICAgICAgaGVpZ2h0OiAzMSxcbiAgICAgICAgbWluSGVpZ2h0OiAzMSxcbiAgICB9KSxcbiAgICBpbmRpY2F0b3JzQ29udGFpbmVyOiBiYXNlID0+ICh7XG4gICAgICAgIC4uLmJhc2UsXG4gICAgICAgIGhlaWdodDogMzEsXG4gICAgfSksXG4gICAgaW5wdXQ6IGJhc2UgPT4gKHtcbiAgICAgICAgLi4uYmFzZSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogMCxcbiAgICAgICAgcGFkZGluZ1RvcDogMCxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgIH0pLFxuICAgIHZhbHVlQ29udGFpbmVyOiBiYXNlID0+ICh7XG4gICAgICAgIC4uLmJhc2UsXG4gICAgICAgIHBhZGRpbmc6ICcwIDhweCcsXG4gICAgICAgIG1hcmdpblRvcDogLTIsXG4gICAgfSksXG4gICAgb3B0aW9uOiBiYXNlID0+ICh7XG4gICAgICAgIC4uLmJhc2UsXG4gICAgICAgIHBhZGRpbmc6ICcycHggMTVweCcsXG4gICAgfSksXG59XG5cbmV4cG9ydCBsZXQgZGVib3VuY2UgPSAoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSA9PiB7XG4gICAgdmFyIHRpbWVvdXRcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcyxcbiAgICAgICAgICAgIGFyZ3MgPSBhcmd1bWVudHNcbiAgICAgICAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aW1lb3V0ID0gbnVsbFxuICAgICAgICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dFxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpXG4gICAgICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyID0gc3RyaW5nID0+IHtcbiAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpXG59XG5cbmV4cG9ydCBjb25zdCBvcGVyYXRvck1hcCA9IHtcbiAgICBleGFjdDogJz0gZXF1YWxzJyxcbiAgICBpc19ub3Q6IFwi4omgIGRvZXNuJ3QgZXF1YWxcIixcbiAgICBpY29udGFpbnM6ICfiiIsgY29udGFpbnMnLFxuICAgIG5vdF9pY29udGFpbnM6IFwi4oiMIGRvZXNuJ3QgY29udGFpblwiLFxuICAgIGd0OiAnPiBncmVhdGVyIHRoYW4nLFxuICAgIGx0OiAnPCBsb3dlciB0aGFuJyxcbn1cblxuY29uc3Qgb3BlcmF0b3JFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMob3BlcmF0b3JNYXApLnJldmVyc2UoKVxuXG5leHBvcnQgY29uc3QgZm9ybWF0RmlsdGVyTmFtZSA9IHN0ciA9PiB7XG4gICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIG9wZXJhdG9yRW50cmllcykge1xuICAgICAgICBpZiAoc3RyLmluY2x1ZGVzKGtleSkpIHJldHVybiBzdHIucmVwbGFjZSgnX18nICsga2V5LCAnJykgKyBgICR7dmFsdWUuc3BsaXQoJyAnKVswXX0gYFxuICAgIH1cbiAgICByZXR1cm4gc3RyICsgYCAke29wZXJhdG9yTWFwWydleGFjdCddLnNwbGl0KCcgJylbMF19IGBcbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcnNvbkRhdGEgPSAocGVyc29uLCBjYWxsYmFjaykgPT4ge1xuICAgIHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdXNlcj8gVGhpcyBjYW5ub3QgYmUgdW5kb25lJykgJiZcbiAgICAgICAgYXBpLmRlbGV0ZSgnYXBpL3BlcnNvbi8nICsgcGVyc29uLmlkKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRvYXN0KCdQZXJzb24gc3VjY2VzZnVsbHkgZGVsZXRlZC4nKVxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpXG4gICAgICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCBvYmplY3RzRXF1YWwgPSAob2JqMSwgb2JqMikgPT4gSlNPTi5zdHJpbmdpZnkob2JqMSkgPT09IEpTT04uc3RyaW5naWZ5KG9iajIpXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBY3Rpb25zVGFibGUgfSBmcm9tICcuL0FjdGlvbnNUYWJsZSdcblxuZXhwb3J0IGNsYXNzIEFjdGlvbnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8QWN0aW9uc1RhYmxlIHsuLi50aGlzLnByb3BzfSAvPlxuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBhcGkgZnJvbSAnbGliL2FwaSdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdsaWIvY29tcG9uZW50cy9MaW5rJ1xuaW1wb3J0IHsgRGVsZXRlV2l0aFVuZG8sIFRhYmxlUm93TG9hZGluZyB9IGZyb20gJ2xpYi91dGlscydcblxuZXhwb3J0IGNsYXNzIEFjdGlvbnNUYWJsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGlvbnM6IFtdLFxuICAgICAgICAgICAgbmV3RXZlbnRzOiBbXSxcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mZXRjaEFjdGlvbnMgPSB0aGlzLmZldGNoQWN0aW9ucy5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuZmV0Y2hBY3Rpb25zKClcbiAgICB9XG4gICAgZmV0Y2hBY3Rpb25zKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5wb2xsZXIpXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5sb2FkaW5nKSB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxuICAgICAgICBhcGkuZ2V0KCdhcGkvYWN0aW9uLz9pbmNsdWRlX2NvdW50PTEnKS50aGVuKGFjdGlvbnMgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGlvbnM6IGFjdGlvbnMucmVzdWx0cywgbG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7IGFjdGlvbnMsIGxvYWRpbmcgfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXAgZmxvYXQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvYWN0aW9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmaSBmbGF0aWNvbi1hZGRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7IE5ldyBhY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5BY3Rpb25zPC9oMT5cbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXhXaWR0aDogNjAwIH19PlxuICAgICAgICAgICAgICAgICAgICA8aT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFjdGlvbnMgYXJlIFBvc3RIb2figJlzIHdheSBvZiBlYXNpbHkgY2xlYW5pbmcgdXAgYSBsYXJnZSBhbW91bnQgb2YgRXZlbnQgZGF0YS4gQWN0aW9ucyBjb25zaXN0IG9mXG4gICAgICAgICAgICAgICAgICAgICAgICBvbmUgb3IgbW9yZSBldmVudHMgdGhhdCB5b3UgaGF2ZSBkZWNpZGVkIHRvIHB1dCBpbnRvIGEgbWFudWFsbHktbGFiZWxsZWQgYnVja2V0LiBUaGV5J3JlIHVzZWQgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIEZ1bm5lbHMsIExpdmUgYWN0aW9ucyBhbmQgVHJlbmRzLlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vUG9zdEhvZy9wb3N0aG9nL3dpa2kvQWN0aW9uc1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlZSBkb2N1bWVudGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkFjdGlvbiBJRDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Vm9sdW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5UeXBlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nICYmIDxUYWJsZVJvd0xvYWRpbmcgY29sU3Bhbj17NH0gYXNPdmVybGF5PXthY3Rpb25zLmxlbmd0aCA+IDB9IC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGlvbnMgJiYgYWN0aW9ucy5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPllvdSBkb24ndCBoYXZlIGFueSBhY3Rpb25zIHlldC48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGlvbnMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLm1hcChhY3Rpb24gPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXthY3Rpb24uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnL2FjdGlvbi8nICsgYWN0aW9uLmlkfT57YWN0aW9uLm5hbWV9PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57YWN0aW9uLmNvdW50fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGlvbi5zdGVwcy5tYXAoc3RlcCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtzdGVwLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoc3RlcC5ldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICckYXV0b2NhcHR1cmUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdBdXRvY2FwdHVyZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnJHBhZ2V2aWV3JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnVVJMIG1hdGNoZXMgJyArIHN0ZXAudXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0V2ZW50OiAnICsgc3RlcC5ldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBmb250U2l6ZTogMTYgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eycvYWN0aW9uLycgKyBhY3Rpb24uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmaSBmbGF0aWNvbi1lZGl0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZVdpdGhVbmRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHBvaW50PVwiYWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0PXthY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogOCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaz17dGhpcy5mZXRjaEFjdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmaSBmbGF0aWNvbi1iYXNrZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGVsZXRlV2l0aFVuZG8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=