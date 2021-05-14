(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["funnels"],{

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

/***/ "./frontend/src/scenes/funnels/Funnels.js":
/*!************************************************!*\
  !*** ./frontend/src/scenes/funnels/Funnels.js ***!
  \************************************************/
/*! exports provided: Funnels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Funnels", function() { return Funnels; });
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
/* harmony import */ var lib_components_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/components/Link */ "./frontend/src/lib/components/Link.js");
/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/api */ "./frontend/src/lib/api.js");
/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/utils */ "./frontend/src/lib/utils.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var Funnels = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Funnels, _Component);

  var _super = _createSuper(Funnels);

  function Funnels(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Funnels);

    _this = _super.call(this, props);
    _this.state = {
      loading: true,
      funnels: []
    };
    _this.fetchFunnels = _this.fetchFunnels.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));

    _this.fetchFunnels();

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Funnels, [{
    key: "fetchFunnels",
    value: function fetchFunnels() {
      var _this2 = this;

      lib_api__WEBPACK_IMPORTED_MODULE_8__["default"].get('api/funnel').then(function (funnels) {
        _this2.setState({
          funnels: funnels.results,
          loading: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(lib_components_Link__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        to: "/funnel/new",
        className: "btn btn-outline-success float-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "fi flaticon-add"
      }), "\xA0\xA0New funnel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", null, "Funnels"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        style: {
          maxWidth: 600
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", null, "If you need your users to carry out a series of actions in a row, funnels are a way of working out where users are dropping off.", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "https://github.com/PostHog/posthog/wiki/Funnels",
        target: "_blank"
      }, "See documentation"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("table", {
        className: "table"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", null, "Funnel name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tbody", null, this.state.loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(lib_utils__WEBPACK_IMPORTED_MODULE_9__["TableRowLoading"], {
        colSpan: 2,
        asOverlay: this.state.funnels.length > 0
      }), this.state.funnels && this.state.funnels.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        colSpan: "6"
      }, "You haven't created any funnels yet.", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(lib_components_Link__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        to: "/funnel/new"
      }, "Click here to create one!"))), this.state.funnels && this.state.funnels.map(function (funnel) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
          key: funnel.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(lib_components_Link__WEBPACK_IMPORTED_MODULE_7__["Link"], {
          to: "/funnel/".concat(funnel.id)
        }, funnel.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
          style: {
            fontSize: 16
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(lib_components_Link__WEBPACK_IMPORTED_MODULE_7__["Link"], {
          to: "/funnel/".concat(funnel.id)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
          className: "fi flaticon-edit"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(lib_utils__WEBPACK_IMPORTED_MODULE_9__["DeleteWithUndo"], {
          endpoint: "funnel",
          object: funnel,
          className: "text-danger",
          style: {
            marginLeft: 8
          },
          callback: _this3.fetchFunnels
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
          className: "fi flaticon-basket"
        }))));
      }))));
    }
  }]);

  return Funnels;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9zY2VuZXMvZnVubmVscy9GdW5uZWxzLmpzIl0sIm5hbWVzIjpbInV1aWQiLCJyZXBsYWNlIiwiYyIsImNyeXB0byIsImdldFJhbmRvbVZhbHVlcyIsIlVpbnQ4QXJyYXkiLCJ0b1N0cmluZyIsInRvUGFyYW1zIiwib2JqIiwiaGFuZGxlVmFsIiwidmFsIiwiX2lzQU1vbWVudE9iamVjdCIsImVuY29kZVVSSUNvbXBvbmVudCIsImZvcm1hdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJPYmplY3QiLCJlbnRyaWVzIiwiZmlsdGVyIiwia2V5IiwibWFwIiwiam9pbiIsImZyb21QYXJhbXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInNsaWNlIiwic3BsaXQiLCJyZWR1Y2UiLCJhIiwiYiIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvbG9ycyIsInBlcmNlbnRhZ2UiLCJkaXZpc2lvbiIsInRvTG9jYWxlU3RyaW5nIiwidW5kZWZpbmVkIiwic3R5bGUiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJMb2FkaW5nIiwiVGFibGVSb3dMb2FkaW5nIiwiY29sU3BhbiIsImFzT3ZlcmxheSIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJDbG9zZUJ1dHRvbiIsInByb3BzIiwiY2xhc3NOYW1lIiwiQ2FyZCIsInRpdGxlIiwiY2hpbGRyZW4iLCJEZWxldGVXaXRoVW5kbyIsImRlbGV0ZVdpdGhVbmRvIiwidW5kbyIsImFwaSIsInVwZGF0ZSIsImVuZHBvaW50Iiwib2JqZWN0IiwiaWQiLCJkZWxldGVkIiwidGhlbiIsImNhbGxiYWNrIiwicmVzcG9uc2UiLCJuYW1lIiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9hc3QiLCJ0b2FzdElkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInNoYXBlIiwibnVtYmVyIiwic2VsZWN0U3R5bGUiLCJjb250cm9sIiwiYmFzZSIsImhlaWdodCIsIm1pbkhlaWdodCIsImluZGljYXRvcnNDb250YWluZXIiLCJpbnB1dCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nVG9wIiwibWFyZ2luIiwib3BhY2l0eSIsInZhbHVlQ29udGFpbmVyIiwibWFyZ2luVG9wIiwib3B0aW9uIiwiZGVib3VuY2UiLCJmdW5jIiwid2FpdCIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJjb250ZXh0IiwiYXJncyIsImFyZ3VtZW50cyIsImxhdGVyIiwiYXBwbHkiLCJjYWxsTm93IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNhcGl0YWxpemVGaXJzdExldHRlciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwib3BlcmF0b3JNYXAiLCJleGFjdCIsImlzX25vdCIsImljb250YWlucyIsIm5vdF9pY29udGFpbnMiLCJndCIsImx0Iiwib3BlcmF0b3JFbnRyaWVzIiwicmV2ZXJzZSIsImZvcm1hdEZpbHRlck5hbWUiLCJzdHIiLCJ2YWx1ZSIsImluY2x1ZGVzIiwiZGVsZXRlUGVyc29uRGF0YSIsInBlcnNvbiIsImNvbmZpcm0iLCJvYmplY3RzRXF1YWwiLCJvYmoxIiwib2JqMiIsIkZ1bm5lbHMiLCJzdGF0ZSIsImxvYWRpbmciLCJmdW5uZWxzIiwiZmV0Y2hGdW5uZWxzIiwiYmluZCIsImdldCIsInNldFN0YXRlIiwicmVzdWx0cyIsIm1heFdpZHRoIiwibGVuZ3RoIiwiZnVubmVsIiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHTyxTQUFTQSxJQUFULEdBQWdCO0FBQ25CLFNBQU8sQ0FBQyxDQUFDLEdBQUQsSUFBUSxDQUFDLEdBQVQsR0FBZSxDQUFDLEdBQWhCLEdBQXNCLENBQUMsR0FBdkIsR0FB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d0RBQUQ7QUFBTSxZQUFFLG9CQUFhNEUsTUFBTSxDQUFDNUUsRUFBcEI7QUFBUixXQUFtQzRFLE1BQU0sQ0FBQ3ZFLElBQTFDLENBREosQ0FESixlQUlJO0FBQUksZUFBSyxFQUFFO0FBQUV3RSxvQkFBUSxFQUFFO0FBQVo7QUFBWCx3QkFDSSwyREFBQyx3REFBRDtBQUFNLFlBQUUsb0JBQWFELE1BQU0sQ0FBQzVFLEVBQXBCO0FBQVIsd0JBQ0k7QUFBRyxtQkFBUyxFQUFDO0FBQWIsVUFESixDQURKLGVBSUksMkRBQUMsd0RBQUQ7QUFDSSxrQkFBUSxFQUFDLFFBRGI7QUFFSSxnQkFBTSxFQUFFNEUsTUFGWjtBQUdJLG1CQUFTLEVBQUMsYUFIZDtBQUlJLGVBQUssRUFBRTtBQUFFRSxzQkFBVSxFQUFFO0FBQWQsV0FKWDtBQUtJLGtCQUFRLEVBQUUsTUFBSSxDQUFDVDtBQUxuQix3QkFPSTtBQUFHLG1CQUFTLEVBQUM7QUFBYixVQVBKLENBSkosQ0FKSixDQUR5QjtBQUFBLE9BQTdCLENBYlIsQ0FQSixDQWZKLENBREo7QUE2REg7QUEzRUw7O0FBQUE7QUFBQSxFQUE2QlUsK0NBQTdCLEUiLCJmaWxlIjoiZnVubmVscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBhcGkgZnJvbSAnLi9hcGknXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgU3BpbiB9IGZyb20gJ2FudGQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1dWlkKCkge1xuICAgIHJldHVybiAoWzFlN10gKyAtMWUzICsgLTRlMyArIC04ZTMgKyAtMWUxMSkucmVwbGFjZSgvWzAxOF0vZywgYyA9PlxuICAgICAgICAoYyBeIChjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDEpKVswXSAmICgxNSA+PiAoYyAvIDQpKSkpLnRvU3RyaW5nKDE2KVxuICAgIClcbn1cblxuZXhwb3J0IGxldCB0b1BhcmFtcyA9IG9iaiA9PiB7XG4gICAgbGV0IGhhbmRsZVZhbCA9IHZhbCA9PiB7XG4gICAgICAgIGlmICh2YWwuX2lzQU1vbWVudE9iamVjdCkgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwuZm9ybWF0KCdZWVlZLU1NLUREJykpXG4gICAgICAgIHZhbCA9IHR5cGVvZiB2YWwgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkodmFsKSA6IHZhbFxuICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbClcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKG9iailcbiAgICAgICAgLmZpbHRlcigoW2tleSwgdmFsXSkgPT4gdmFsKVxuICAgICAgICAubWFwKChba2V5LCB2YWxdKSA9PiBgJHtrZXl9PSR7aGFuZGxlVmFsKHZhbCl9YClcbiAgICAgICAgLmpvaW4oJyYnKVxufVxuZXhwb3J0IGxldCBmcm9tUGFyYW1zID0gKCkgPT5cbiAgICB3aW5kb3cubG9jYXRpb24uc2VhcmNoICE9ICcnXG4gICAgICAgID8gd2luZG93LmxvY2F0aW9uLnNlYXJjaFxuICAgICAgICAgICAgICAuc2xpY2UoMSlcbiAgICAgICAgICAgICAgLnNwbGl0KCcmJylcbiAgICAgICAgICAgICAgLnJlZHVjZSgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgYiA9IGIuc3BsaXQoJz0nKVxuICAgICAgICAgICAgICAgICAgYVtiWzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudChiWzFdKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGFcbiAgICAgICAgICAgICAgfSwge30pXG4gICAgICAgIDoge31cblxuZXhwb3J0IGxldCBjb2xvcnMgPSBbJ3N1Y2Nlc3MnLCAnc2Vjb25kYXJ5JywgJ3dhcm5pbmcnLCAncHJpbWFyeScsICdkYW5nZXInLCAnaW5mbycsICdkYXJrJywgJ2xpZ2h0J11cbmV4cG9ydCBsZXQgcGVyY2VudGFnZSA9IGRpdmlzaW9uID0+XG4gICAgZGl2aXNpb25cbiAgICAgICAgPyBkaXZpc2lvbi50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHtcbiAgICAgICAgICAgICAgc3R5bGU6ICdwZXJjZW50JyxcbiAgICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgICAgIH0pXG4gICAgICAgIDogJydcblxuZXhwb3J0IGxldCBMb2FkaW5nID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1vdmVybGF5XCI+XG4gICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgIDxTcGluIC8+XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBjb25zdCBUYWJsZVJvd0xvYWRpbmcgPSAoeyBjb2xTcGFuID0gMSwgYXNPdmVybGF5ID0gZmFsc2UgfSkgPT4gKFxuICAgIDx0ciBjbGFzc05hbWU9e2FzT3ZlcmxheSA/ICdsb2FkaW5nLW92ZXJsYXkgb3Zlci10YWJsZScgOiAnJ30+XG4gICAgICAgIDx0ZCBjb2xTcGFuPXtjb2xTcGFufSBzdHlsZT17eyBwYWRkaW5nOiA1MCwgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgIDxTcGluIC8+XG4gICAgICAgIDwvdGQ+XG4gICAgPC90cj5cbilcblxuZXhwb3J0IGxldCBDbG9zZUJ1dHRvbiA9IHByb3BzID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3BhbiB7Li4ucHJvcHN9IGNsYXNzTmFtZT17J2Nsb3NlIGN1cnNvci1wb2ludGVyICcgKyBwcm9wcy5jbGFzc05hbWV9IHN0eWxlPXt7IC4uLnByb3BzLnN0eWxlIH19PlxuICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhcmQocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHsuLi5wcm9wc30gY2xhc3NOYW1lPXsnY2FyZCAnICsgcHJvcHMuY2xhc3NOYW1lfSBzdHlsZT17cHJvcHMuc3R5bGV9IHRpdGxlPVwiXCI+XG4gICAgICAgICAgICB7cHJvcHMudGl0bGUgJiYgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPntwcm9wcy50aXRsZX08L2Rpdj59XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGxldCBEZWxldGVXaXRoVW5kbyA9IHByb3BzID0+IHtcbiAgICBsZXQgZGVsZXRlV2l0aFVuZG8gPSB1bmRvID0+IHtcbiAgICAgICAgYXBpLnVwZGF0ZSgnYXBpLycgKyBwcm9wcy5lbmRwb2ludCArICcvJyArIHByb3BzLm9iamVjdC5pZCwge1xuICAgICAgICAgICAgLi4ucHJvcHMub2JqZWN0LFxuICAgICAgICAgICAgZGVsZXRlZDogdW5kbyA/IGZhbHNlIDogdHJ1ZSxcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBwcm9wcy5jYWxsYmFjaygpXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgeyF1bmRvID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8c3Ryb25nPntwcm9wcy5vYmplY3QubmFtZX08L3N0cm9uZz5cIiBkZWxldGVkLnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlV2l0aFVuZG8odHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsaWNrIGhlcmUgdG8gdW5kb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRlbGV0ZSB1bi1kb25lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgdG9hc3QocmVzcG9uc2UsIHsgdG9hc3RJZDogJ2RlbGV0ZS1pdGVtLScgKyBwcm9wcy5vYmplY3QuaWQgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgZGVsZXRlV2l0aFVuZG8oKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgc3R5bGU9e3Byb3BzLnN0eWxlfVxuICAgICAgICA+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvYT5cbiAgICApXG59XG5EZWxldGVXaXRoVW5kby5wcm9wVHlwZXMgPSB7XG4gICAgZW5kcG9pbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBvYmplY3Q6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB9KS5pc1JlcXVpcmVkLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbn1cblxuZXhwb3J0IGxldCBzZWxlY3RTdHlsZSA9IHtcbiAgICBjb250cm9sOiBiYXNlID0+ICh7XG4gICAgICAgIC4uLmJhc2UsXG4gICAgICAgIGhlaWdodDogMzEsXG4gICAgICAgIG1pbkhlaWdodDogMzEsXG4gICAgfSksXG4gICAgaW5kaWNhdG9yc0NvbnRhaW5lcjogYmFzZSA9PiAoe1xuICAgICAgICAuLi5iYXNlLFxuICAgICAgICBoZWlnaHQ6IDMxLFxuICAgIH0pLFxuICAgIGlucHV0OiBiYXNlID0+ICh7XG4gICAgICAgIC4uLmJhc2UsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IDAsXG4gICAgICAgIHBhZGRpbmdUb3A6IDAsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICB9KSxcbiAgICB2YWx1ZUNvbnRhaW5lcjogYmFzZSA9PiAoe1xuICAgICAgICAuLi5iYXNlLFxuICAgICAgICBwYWRkaW5nOiAnMCA4cHgnLFxuICAgICAgICBtYXJnaW5Ub3A6IC0yLFxuICAgIH0pLFxuICAgIG9wdGlvbjogYmFzZSA9PiAoe1xuICAgICAgICAuLi5iYXNlLFxuICAgICAgICBwYWRkaW5nOiAnMnB4IDE1cHgnLFxuICAgIH0pLFxufVxuXG5leHBvcnQgbGV0IGRlYm91bmNlID0gKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkgPT4ge1xuICAgIHZhciB0aW1lb3V0XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMsXG4gICAgICAgICAgICBhcmdzID0gYXJndW1lbnRzXG4gICAgICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGltZW91dCA9IG51bGxcbiAgICAgICAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXRcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KVxuICAgICAgICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNhcGl0YWxpemVGaXJzdExldHRlciA9IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKVxufVxuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JNYXAgPSB7XG4gICAgZXhhY3Q6ICc9IGVxdWFscycsXG4gICAgaXNfbm90OiBcIuKJoCBkb2Vzbid0IGVxdWFsXCIsXG4gICAgaWNvbnRhaW5zOiAn4oiLIGNvbnRhaW5zJyxcbiAgICBub3RfaWNvbnRhaW5zOiBcIuKIjCBkb2Vzbid0IGNvbnRhaW5cIixcbiAgICBndDogJz4gZ3JlYXRlciB0aGFuJyxcbiAgICBsdDogJzwgbG93ZXIgdGhhbicsXG59XG5cbmNvbnN0IG9wZXJhdG9yRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKG9wZXJhdG9yTWFwKS5yZXZlcnNlKClcblxuZXhwb3J0IGNvbnN0IGZvcm1hdEZpbHRlck5hbWUgPSBzdHIgPT4ge1xuICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBvcGVyYXRvckVudHJpZXMpIHtcbiAgICAgICAgaWYgKHN0ci5pbmNsdWRlcyhrZXkpKSByZXR1cm4gc3RyLnJlcGxhY2UoJ19fJyArIGtleSwgJycpICsgYCAke3ZhbHVlLnNwbGl0KCcgJylbMF19IGBcbiAgICB9XG4gICAgcmV0dXJuIHN0ciArIGAgJHtvcGVyYXRvck1hcFsnZXhhY3QnXS5zcGxpdCgnICcpWzBdfSBgXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVQZXJzb25EYXRhID0gKHBlcnNvbiwgY2FsbGJhY2spID0+IHtcbiAgICB3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHVzZXI/IFRoaXMgY2Fubm90IGJlIHVuZG9uZScpICYmXG4gICAgICAgIGFwaS5kZWxldGUoJ2FwaS9wZXJzb24vJyArIHBlcnNvbi5pZCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0b2FzdCgnUGVyc29uIHN1Y2Nlc2Z1bGx5IGRlbGV0ZWQuJylcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKVxuICAgICAgICB9KVxufVxuXG5leHBvcnQgY29uc3Qgb2JqZWN0c0VxdWFsID0gKG9iajEsIG9iajIpID0+IEpTT04uc3RyaW5naWZ5KG9iajEpID09PSBKU09OLnN0cmluZ2lmeShvYmoyKVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ2xpYi9jb21wb25lbnRzL0xpbmsnXG5pbXBvcnQgYXBpIGZyb20gJ2xpYi9hcGknXG5pbXBvcnQgeyBEZWxldGVXaXRoVW5kbywgVGFibGVSb3dMb2FkaW5nIH0gZnJvbSAnbGliL3V0aWxzJ1xuXG5leHBvcnQgY2xhc3MgRnVubmVscyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgbG9hZGluZzogdHJ1ZSwgZnVubmVsczogW10gfVxuICAgICAgICB0aGlzLmZldGNoRnVubmVscyA9IHRoaXMuZmV0Y2hGdW5uZWxzLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5mZXRjaEZ1bm5lbHMoKVxuICAgIH1cbiAgICBmZXRjaEZ1bm5lbHMoKSB7XG4gICAgICAgIGFwaS5nZXQoJ2FwaS9mdW5uZWwnKS50aGVuKGZ1bm5lbHMgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZ1bm5lbHM6IGZ1bm5lbHMucmVzdWx0cywgbG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9mdW5uZWwvbmV3XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgZmxvYXQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmkgZmxhdGljb24tYWRkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7TmV3IGZ1bm5lbFxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8aDE+RnVubmVsczwvaDE+XG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWF4V2lkdGg6IDYwMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGk+XG4gICAgICAgICAgICAgICAgICAgICAgICBJZiB5b3UgbmVlZCB5b3VyIHVzZXJzIHRvIGNhcnJ5IG91dCBhIHNlcmllcyBvZiBhY3Rpb25zIGluIGEgcm93LCBmdW5uZWxzIGFyZSBhIHdheSBvZiB3b3JraW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXQgd2hlcmUgdXNlcnMgYXJlIGRyb3BwaW5nIG9mZi57JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Qb3N0SG9nL3Bvc3Rob2cvd2lraS9GdW5uZWxzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VlIGRvY3VtZW50YXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5GdW5uZWwgbmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjdGlvbnM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93TG9hZGluZyBjb2xTcGFuPXsyfSBhc092ZXJsYXk9e3RoaXMuc3RhdGUuZnVubmVscy5sZW5ndGggPiAwfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZ1bm5lbHMgJiYgdGhpcy5zdGF0ZS5mdW5uZWxzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBoYXZlbid0IGNyZWF0ZWQgYW55IGZ1bm5lbHMgeWV0LnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9mdW5uZWwvbmV3XCI+Q2xpY2sgaGVyZSB0byBjcmVhdGUgb25lITwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZ1bm5lbHMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZ1bm5lbHMubWFwKGZ1bm5lbCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2Z1bm5lbC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvZnVubmVsLyR7ZnVubmVsLmlkfWB9PntmdW5uZWwubmFtZX08L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGZvbnRTaXplOiAxNiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YC9mdW5uZWwvJHtmdW5uZWwuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZpIGZsYXRpY29uLWVkaXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlV2l0aFVuZG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ9XCJmdW5uZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3Q9e2Z1bm5lbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrPXt0aGlzLmZldGNoRnVubmVsc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZpIGZsYXRpY29uLWJhc2tldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EZWxldGVXaXRoVW5kbz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==