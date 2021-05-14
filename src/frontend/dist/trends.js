(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trends"],{

/***/ "./frontend/src/lib/components/ChartFilter.js":
/*!****************************************************!*\
  !*** ./frontend/src/lib/components/ChartFilter.js ***!
  \****************************************************/
/*! exports provided: ChartFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartFilter", function() { return ChartFilter; });
/* harmony import */ var antd_es_select_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/select/style/css */ "./node_modules/antd/es/select/style/css.js");
/* harmony import */ var antd_es_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/select */ "./node_modules/antd/es/select/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function ChartFilter(props) {
  var filters = props.filters,
      displayMap = props.displayMap,
      onChange = props.onChange;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_1__["default"], {
    defaultValue: displayMap[filters.display || 'ActionsLineGraph'],
    value: displayMap[filters.display || 'ActionsLineGraph'],
    onChange: onChange,
    bordered: false,
    dropdownMatchSelectWidth: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_1__["default"].Option, {
    value: "ActionsLineGraph",
    disabled: filters.session && filters.session == 'dist'
  }, "Line chart"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_1__["default"].Option, {
    value: "ActionsTable"
  }, "Table"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_1__["default"].Option, {
    value: "ActionsPie",
    disabled: filters.session
  }, "Pie"));
}

/***/ }),

/***/ "./frontend/src/lib/components/IntervalFilter.js":
/*!*******************************************************!*\
  !*** ./frontend/src/lib/components/IntervalFilter.js ***!
  \*******************************************************/
/*! exports provided: IntervalFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntervalFilter", function() { return IntervalFilter; });
/* harmony import */ var antd_es_select_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/select/style/css */ "./node_modules/antd/es/select/style/css.js");
/* harmony import */ var antd_es_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/select */ "./node_modules/antd/es/select/index.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scenes_trends_trendsLogic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../scenes/trends/trendsLogic */ "./frontend/src/scenes/trends/trendsLogic.js");





var intervalMapping = {
  minute: 'Minute',
  hour: 'Hourly',
  day: 'Daily',
  week: 'Weekly',
  month: 'Monthly'
};
function IntervalFilter(_ref) {
  var filters = _ref.filters,
      setFilters = _ref.setFilters,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  var interval = filters.interval,
      date_from = filters.date_from;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_1__["default"], {
    bordered: false,
    disabled: disabled,
    defaultValue: intervalMapping[interval],
    value: intervalMapping[interval],
    dropdownMatchSelectWidth: false,
    onChange: function onChange(key) {
      var minute_disabled = key === 'minute' && _scenes_trends_trendsLogic__WEBPACK_IMPORTED_MODULE_4__["disableMinuteFor"][date_from];
      var hour_disabled = key === 'hour' && _scenes_trends_trendsLogic__WEBPACK_IMPORTED_MODULE_4__["disableHourFor"][date_from];

      if (minute_disabled || hour_disabled) {
        return false;
      }

      setFilters({
        interval: key
      });
    }
  }, Object.entries(intervalMapping).map(function (_ref2) {
    var _ref3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_ref2, 2),
        key = _ref3[0],
        value = _ref3[1];

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_1__["default"].Option, {
      key: key,
      value: key
    }, value);
  }));
}

/***/ }),

/***/ "./frontend/src/lib/components/PropertiesTable.js":
/*!********************************************************!*\
  !*** ./frontend/src/lib/components/PropertiesTable.js ***!
  \********************************************************/
/*! exports provided: PropertiesTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesTable", function() { return PropertiesTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


function PropertiesTable(_ref) {
  var properties = _ref.properties;
  if (Array.isArray(properties)) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, properties.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PropertiesTable, {
      properties: item
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
  }));
  if (properties instanceof Object) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, Object.keys(properties).sort().map(function (key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, key), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PropertiesTable, {
      properties: properties[key]
    })));
  })));
  if (properties === true) return 'true';
  if (properties === false) return 'false';
  return properties ? properties : null;
}
PropertiesTable.propTypes = {
  properties: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired
};

/***/ }),

/***/ "./frontend/src/lib/components/SaveToDashboard.js":
/*!********************************************************!*\
  !*** ./frontend/src/lib/components/SaveToDashboard.js ***!
  \********************************************************/
/*! exports provided: SaveToDashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveToDashboard", function() { return SaveToDashboard; });
/* harmony import */ var antd_es_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/button/style/css */ "./node_modules/antd/es/button/style/css.js");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/button */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../api */ "./frontend/src/lib/api.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Modal */ "./frontend/src/lib/components/Modal.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var lib_components_Link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lib/components/Link */ "./frontend/src/lib/components/Link.js");










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







function momentToString(date) {
  if (date && date._isAMomentObject) return date.format('YYYY-MM-DD');
  return date;
}

var SaveToDashboard = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(SaveToDashboard, _Component);

  var _super = _createSuper(SaveToDashboard);

  function SaveToDashboard(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, SaveToDashboard);

    _this = _super.call(this, props);
    _this.state = {};
    _this.Modal = _this.Modal.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.save = _this.save.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(SaveToDashboard, [{
    key: "Toast",
    value: function Toast(_ref) {
      var closeToast = _ref.closeToast;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, "Panel added to dashboard.\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(lib_components_Link__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        to: "/dashboard"
      }, "Click here to see it."));
    }
  }, {
    key: "save",
    value: function save(event) {
      var _this2 = this;

      var filters = this.props.filters;
      event.preventDefault();
      _api__WEBPACK_IMPORTED_MODULE_10__["default"].create('api/dashboard', {
        filters: _objectSpread(_objectSpread({}, filters), {}, {
          date_from: momentToString(filters.date_from),
          date_to: momentToString(filters.date_to)
        }),
        type: this.props.type,
        name: event.target.name.value
      }).then(function () {
        Object(react_toastify__WEBPACK_IMPORTED_MODULE_12__["toast"])(_this2.Toast);

        _this2.setState({
          openModal: false
        });
      });
    }
  }, {
    key: "Modal",
    value: function Modal() {
      var _this3 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_11__["Modal"], {
        title: "Add graph to dashboard",
        onDismiss: function onDismiss() {
          return _this3.setState({
            openModal: false
          });
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("form", {
        onSubmit: this.save
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", null, "Panel name on dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        name: "name",
        autoFocus: true,
        required: true,
        type: "text",
        className: "form-control",
        placeholder: "Users who did x",
        defaultValue: this.props.name
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-success"
      }, "Add panel to dashboard")));
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "save-to-dashboard"
      }, this.state.openModal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(this.Modal, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onClick: function onClick() {
          return _this4.setState({
            openModal: true
          });
        },
        type: "primary"
      }, "Add to dashboard"));
    }
  }]);

  return SaveToDashboard;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/***/ }),

/***/ "./frontend/src/lib/components/SessionsFilter.js":
/*!*******************************************************!*\
  !*** ./frontend/src/lib/components/SessionsFilter.js ***!
  \*******************************************************/
/*! exports provided: SessionFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionFilter", function() { return SessionFilter; });
/* harmony import */ var antd_es_select_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/select/style/css */ "./node_modules/antd/es/select/style/css.js");
/* harmony import */ var antd_es_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/select */ "./node_modules/antd/es/select/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function SessionFilter(props) {
  var onChange = props.onChange,
      value = props.value;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      maxWidth: '100%'
    },
    defaultValue: value,
    value: value,
    dropdownMatchSelectWidth: false,
    onChange: onChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_1__["default"].Option, {
    value: "avg"
  }, "Average Session Length"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_1__["default"].Option, {
    value: "dist"
  }, "Distribution of Session Lengths"));
}

/***/ }),

/***/ "./frontend/src/lib/hooks/useWindowSize.js":
/*!*************************************************!*\
  !*** ./frontend/src/lib/hooks/useWindowSize.js ***!
  \*************************************************/
/*! exports provided: useWindowSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWindowSize", function() { return useWindowSize; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function useWindowSize() {
  var isClient = (typeof window === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(window)) === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(getSize),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      windowSize = _useState2[0],
      setWindowSize = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return function () {
      return window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

/***/ }),

/***/ "./frontend/src/scenes/trends/BreakdownFilter.js":
/*!*******************************************************!*\
  !*** ./frontend/src/scenes/trends/BreakdownFilter.js ***!
  \*******************************************************/
/*! exports provided: BreakdownFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakdownFilter", function() { return BreakdownFilter; });
/* harmony import */ var antd_es_select_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/select/style/css */ "./node_modules/antd/es/select/style/css.js");
/* harmony import */ var antd_es_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/select */ "./node_modules/antd/es/select/index.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/utils */ "./frontend/src/lib/utils.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var BreakdownFilter = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(BreakdownFilter, _Component);

  var _super = _createSuper(BreakdownFilter);

  function BreakdownFilter() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, BreakdownFilter);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(BreakdownFilter, [{
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_1__["default"], {
        style: {
          width: '80%',
          maxWidth: 200
        },
        placeholder: 'Break down by',
        value: this.props.breakdown ? this.props.breakdown : undefined,
        onChange: function onChange(value) {
          return _this.props.onChange(value);
        },
        styles: _lib_utils__WEBPACK_IMPORTED_MODULE_9__["selectStyle"]
      }, Object.entries(this.props.properties).map(function (_ref) {
        var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_ref, 2),
            key = _ref2[0],
            item = _ref2[1];

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_1__["default"].Option, {
          key: key,
          value: item.value
        }, item.label);
      }));
    }
  }]);

  return BreakdownFilter;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/***/ }),

/***/ "./frontend/src/scenes/trends/PeopleModal.js":
/*!***************************************************!*\
  !*** ./frontend/src/scenes/trends/PeopleModal.js ***!
  \***************************************************/
/*! exports provided: PeopleModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleModal", function() { return PeopleModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var kea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kea */ "./node_modules/kea/lib/index.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var scenes_trends_trendsLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! scenes/trends/trendsLogic */ "./frontend/src/scenes/trends/trendsLogic.js");
/* harmony import */ var lib_components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/components/Modal */ "./frontend/src/lib/components/Modal.js");
/* harmony import */ var scenes_users_PeopleTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! scenes/users/PeopleTable */ "./frontend/src/scenes/users/PeopleTable.js");






function PeopleModal() {
  var _useValues = Object(kea__WEBPACK_IMPORTED_MODULE_1__["useValues"])(Object(scenes_trends_trendsLogic__WEBPACK_IMPORTED_MODULE_3__["trendsLogic"])({
    id: null
  })),
      people = _useValues.people,
      filters = _useValues.filters;

  var _useActions = Object(kea__WEBPACK_IMPORTED_MODULE_1__["useActions"])(Object(scenes_trends_trendsLogic__WEBPACK_IMPORTED_MODULE_3__["trendsLogic"])({
    dashboardItemId: null
  })),
      setShowingPeople = _useActions.setShowingPeople;

  var name = people ? people.action.name + (people.breakdown_value ? ' - ' + people.breakdown_value : '') : '...';
  var title = filters.shown_as === 'Stickiness' ? "\"".concat(name, "\" stickiness ").concat(people === null || people === void 0 ? void 0 : people.day, " day").concat((people === null || people === void 0 ? void 0 : people.day) === 1 ? '' : 's') : "\"".concat(name, "\" on ").concat(people !== null && people !== void 0 && people.day ? moment__WEBPACK_IMPORTED_MODULE_2___default()(people.day).format('ll') : '...');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(lib_components_Modal__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    title: title,
    onDismiss: function onDismiss() {
      return setShowingPeople(false);
    }
  }, people ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Found ", people.count, " ", people.count === 1 ? 'user' : 'users', people.count > 100 ? '. Showing the first 100 below.' : '') : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Loading users..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(scenes_users_PeopleTable__WEBPACK_IMPORTED_MODULE_5__["PeopleTable"], {
    loading: !(people !== null && people !== void 0 && people.people),
    people: people === null || people === void 0 ? void 0 : people.people
  }));
}

/***/ }),

/***/ "./frontend/src/scenes/trends/ShownAsFilter.js":
/*!*****************************************************!*\
  !*** ./frontend/src/scenes/trends/ShownAsFilter.js ***!
  \*****************************************************/
/*! exports provided: ShownAsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShownAsFilter", function() { return ShownAsFilter; });
/* harmony import */ var antd_es_row_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/row/style/css */ "./node_modules/antd/es/row/style/css.js");
/* harmony import */ var antd_es_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/row */ "./node_modules/antd/es/row/index.js");
/* harmony import */ var antd_es_select_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/select/style/css */ "./node_modules/antd/es/select/style/css.js");
/* harmony import */ var antd_es_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/select */ "./node_modules/antd/es/select/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





function ShownAsFilter(_ref) {
  var shown_as = _ref.shown_as,
      _onChange = _ref.onChange;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_row__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
    defaultValue: shown_as,
    value: shown_as || 'Volume',
    onChange: function onChange(value) {
      return _onChange(value);
    },
    style: {
      width: 200
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_3__["default"].Option, {
    value: 'Volume'
  }, 'Volume'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_3__["default"].Option, {
    value: 'Stickiness'
  }, 'Stickiness'))));
}

/***/ }),

/***/ "./frontend/src/scenes/trends/Trends.js":
/*!**********************************************!*\
  !*** ./frontend/src/scenes/trends/Trends.js ***!
  \**********************************************/
/*! exports provided: Trends */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trends", function() { return Trends; });
/* harmony import */ var antd_es_col_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/col/style/css */ "./node_modules/antd/es/col/style/css.js");
/* harmony import */ var antd_es_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/col */ "./node_modules/antd/es/col/index.js");
/* harmony import */ var antd_es_row_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/row/style/css */ "./node_modules/antd/es/row/style/css.js");
/* harmony import */ var antd_es_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/row */ "./node_modules/antd/es/row/index.js");
/* harmony import */ var antd_es_tooltip_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/tooltip/style/css */ "./node_modules/antd/es/tooltip/style/css.js");
/* harmony import */ var antd_es_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/tooltip */ "./node_modules/antd/es/tooltip/index.js");
/* harmony import */ var antd_es_tabs_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/es/tabs/style/css */ "./node_modules/antd/es/tabs/style/css.js");
/* harmony import */ var antd_es_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/es/tabs */ "./node_modules/antd/es/tabs/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var kea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! kea */ "./node_modules/kea/lib/index.esm.js");
/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lib/utils */ "./frontend/src/lib/utils.js");
/* harmony import */ var lib_components_SaveToDashboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lib/components/SaveToDashboard */ "./frontend/src/lib/components/SaveToDashboard.js");
/* harmony import */ var lib_components_PropertyFilters_PropertyFilters__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lib/components/PropertyFilters/PropertyFilters */ "./frontend/src/lib/components/PropertyFilters/PropertyFilters.js");
/* harmony import */ var lib_components_DateFilter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lib/components/DateFilter */ "./frontend/src/lib/components/DateFilter.js");
/* harmony import */ var lib_components_IntervalFilter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lib/components/IntervalFilter */ "./frontend/src/lib/components/IntervalFilter.js");
/* harmony import */ var _ActionFilter_ActionFilter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ActionFilter/ActionFilter */ "./frontend/src/scenes/trends/ActionFilter/ActionFilter.js");
/* harmony import */ var _ActionsPie__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ActionsPie */ "./frontend/src/scenes/trends/ActionsPie.js");
/* harmony import */ var _BreakdownFilter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./BreakdownFilter */ "./frontend/src/scenes/trends/BreakdownFilter.js");
/* harmony import */ var _ActionsTable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ActionsTable */ "./frontend/src/scenes/trends/ActionsTable.js");
/* harmony import */ var _ActionsLineGraph__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ActionsLineGraph */ "./frontend/src/scenes/trends/ActionsLineGraph.js");
/* harmony import */ var _ShownAsFilter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ShownAsFilter */ "./frontend/src/scenes/trends/ShownAsFilter.js");
/* harmony import */ var _PeopleModal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./PeopleModal */ "./frontend/src/scenes/trends/PeopleModal.js");
/* harmony import */ var _trendsLogic__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./trendsLogic */ "./frontend/src/scenes/trends/trendsLogic.js");
/* harmony import */ var lib_components_ChartFilter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! lib/components/ChartFilter */ "./frontend/src/lib/components/ChartFilter.js");
/* harmony import */ var scenes_userLogic__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! scenes/userLogic */ "./frontend/src/scenes/userLogic.js");
/* harmony import */ var lib_components_SessionsFilter__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! lib/components/SessionsFilter */ "./frontend/src/lib/components/SessionsFilter.js");
/* harmony import */ var lib_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! lib/hooks/useWindowSize */ "./frontend/src/lib/hooks/useWindowSize.js");



























var TabPane = antd_es_tabs__WEBPACK_IMPORTED_MODULE_7__["default"].TabPane;
var displayMap = {
  ActionsLineGraph: 'Line chart',
  ActionsTable: 'Table',
  ActionsPie: 'Pie'
};
function Trends() {
  var _useValues = Object(kea__WEBPACK_IMPORTED_MODULE_9__["useValues"])(Object(_trendsLogic__WEBPACK_IMPORTED_MODULE_22__["trendsLogic"])({
    dashboardItemId: null
  })),
      filters = _useValues.filters,
      resultsLoading = _useValues.resultsLoading,
      showingPeople = _useValues.showingPeople,
      activeView = _useValues.activeView;

  var _useActions = Object(kea__WEBPACK_IMPORTED_MODULE_9__["useActions"])(Object(_trendsLogic__WEBPACK_IMPORTED_MODULE_22__["trendsLogic"])({
    dashboardItemId: null
  })),
      setFilters = _useActions.setFilters,
      setDisplay = _useActions.setDisplay,
      setActiveView = _useActions.setActiveView;

  var _useValues2 = Object(kea__WEBPACK_IMPORTED_MODULE_9__["useValues"])(scenes_userLogic__WEBPACK_IMPORTED_MODULE_24__["userLogic"]),
      eventProperties = _useValues2.eventProperties;

  var size = Object(lib_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_26__["useWindowSize"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "actions-graph"
  }, showingPeople ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_PeopleModal__WEBPACK_IMPORTED_MODULE_21__["PeopleModal"], null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", null, "Trends"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_row__WEBPACK_IMPORTED_MODULE_3__["default"], {
    gutter: 16
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_col__WEBPACK_IMPORTED_MODULE_1__["default"], {
    xs: 24,
    xl: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(lib_utils__WEBPACK_IMPORTED_MODULE_10__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "card-body px-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_tabs__WEBPACK_IMPORTED_MODULE_7__["default"], {
    activeKey: activeView,
    style: {
      overflow: 'visible'
    },
    onChange: function onChange(key) {
      return setActiveView(key);
    },
    animated: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TabPane, {
    tab: 'Actions & Events',
    key: _trendsLogic__WEBPACK_IMPORTED_MODULE_22__["ViewType"].FILTERS
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ActionFilter_ActionFilter__WEBPACK_IMPORTED_MODULE_15__["ActionFilter"], {
    filters: filters,
    setFilters: setFilters,
    typeKey: "trends"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
    className: "secondary"
  }, "Filters"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(lib_components_PropertyFilters_PropertyFilters__WEBPACK_IMPORTED_MODULE_12__["PropertyFilters"], {
    pageKey: "trends-filters",
    style: {
      marginBottom: 0
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
    className: "secondary"
  }, "Break down by", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], {
    placement: "right",
    title: "Use breakdown to see the volume of events for each variation of that property. For example, breaking down by $current_url will give you the event volume for each url your users have visited."
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("small", {
    className: "info"
  }, "info"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_row__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_BreakdownFilter__WEBPACK_IMPORTED_MODULE_17__["BreakdownFilter"], {
    properties: eventProperties,
    breakdown: filters.breakdown,
    onChange: function onChange(breakdown) {
      return setFilters({
        breakdown: breakdown
      });
    }
  }), filters.breakdown && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(lib_utils__WEBPACK_IMPORTED_MODULE_10__["CloseButton"], {
    onClick: function onClick() {
      return setFilters({
        breakdown: false
      });
    },
    style: {
      marginTop: 1,
      marginLeft: 10
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
    className: "secondary"
  }, "Shown as", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], {
    placement: "right",
    title: " Stickiness shows you how many days users performed an action within the timeframe. If a user performed an action on Monday and again on Friday, it would be shown  as \"2 days\"."
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("small", {
    className: "info"
  }, "info"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ShownAsFilter__WEBPACK_IMPORTED_MODULE_20__["ShownAsFilter"], {
    shown_as: filters.shown_as,
    onChange: function onChange(shown_as) {
      return setFilters({
        shown_as: shown_as
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TabPane, {
    tab: "Sessions",
    key: _trendsLogic__WEBPACK_IMPORTED_MODULE_22__["ViewType"].SESSIONS
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(lib_components_SessionsFilter__WEBPACK_IMPORTED_MODULE_25__["SessionFilter"], {
    value: filters.session,
    onChange: function onChange(v) {
      return setFilters({
        session: v
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
    className: "secondary"
  }, "Filters"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(lib_components_PropertyFilters_PropertyFilters__WEBPACK_IMPORTED_MODULE_12__["PropertyFilters"], {
    pageKey: "trends-sessions",
    style: {
      marginBottom: 0
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_col__WEBPACK_IMPORTED_MODULE_1__["default"], {
    xs: 24,
    xl: 18
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(lib_utils__WEBPACK_IMPORTED_MODULE_10__["Card"], {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
      className: "float-right pt-1 pb-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(lib_components_IntervalFilter__WEBPACK_IMPORTED_MODULE_14__["IntervalFilter"], {
      setFilters: setFilters,
      filters: filters,
      disabled: filters.session
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(lib_components_ChartFilter__WEBPACK_IMPORTED_MODULE_23__["ChartFilter"], {
      displayMap: displayMap,
      filters: filters,
      onChange: setDisplay
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(lib_components_DateFilter__WEBPACK_IMPORTED_MODULE_13__["DateFilter"], {
      onChange: function onChange(date_from, date_to) {
        return setFilters({
          date_from: date_from,
          date_to: date_to && date_to
        });
      },
      dateFrom: filters.date_from,
      dateTo: filters.date_to
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(lib_components_SaveToDashboard__WEBPACK_IMPORTED_MODULE_11__["SaveToDashboard"], {
      filters: filters,
      type: filters.display || 'ActionsLineGraph'
    }))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "card-body card-body-graph"
  }, (filters.actions || filters.events || filters.session) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    style: {
      minHeight: '70vh',
      position: 'relative'
    }
  }, resultsLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(lib_utils__WEBPACK_IMPORTED_MODULE_10__["Loading"], null), (!filters.display || filters.display === 'ActionsLineGraph') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ActionsLineGraph__WEBPACK_IMPORTED_MODULE_19__["ActionsLineGraph"], null), filters.display === 'ActionsTable' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ActionsTable__WEBPACK_IMPORTED_MODULE_18__["ActionsTable"], {
    filters: filters
  }), filters.display === 'ActionsPie' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ActionsPie__WEBPACK_IMPORTED_MODULE_16__["ActionsPie"], {
    filters: filters
  })))))));
}

/***/ }),

/***/ "./frontend/src/scenes/users/PeopleTable.js":
/*!**************************************************!*\
  !*** ./frontend/src/scenes/users/PeopleTable.js ***!
  \**************************************************/
/*! exports provided: PeopleTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleTable", function() { return PeopleTable; });
/* harmony import */ var antd_es_table_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/table/style/css */ "./node_modules/antd/es/table/style/css.js");
/* harmony import */ var antd_es_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/table */ "./node_modules/antd/es/table/index.js");
/* harmony import */ var antd_es_button_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/button/style/css */ "./node_modules/antd/es/button/style/css.js");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/button */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/api */ "./frontend/src/lib/api.js");
/* harmony import */ var lib_components_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/components/Link */ "./frontend/src/lib/components/Link.js");
/* harmony import */ var lib_components_PropertiesTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/components/PropertiesTable */ "./frontend/src/lib/components/PropertiesTable.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/utils */ "./frontend/src/lib/utils.js");










function PeopleTable(_ref) {
  var people = _ref.people,
      loading = _ref.loading,
      actions = _ref.actions,
      onChange = _ref.onChange;
  var columns = [{
    title: 'Person',
    dataIndex: 'name',
    key: 'name',
    render: function render(_, person) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(lib_components_Link__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: '/person/' + encodeURIComponent(person.distinct_ids[0]),
        className: "ph-no-capture"
      }, person.name);
    }
  }];
  if (actions) columns.push({
    title: 'Actions',
    render: function render(person) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        danger: true,
        type: "link",
        onClick: function onClick() {
          return Object(lib_utils__WEBPACK_IMPORTED_MODULE_9__["deletePersonData"])(person, onChange);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["DeleteOutlined"], null));
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_table__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "small",
    columns: columns,
    loading: loading,
    rowKey: function rowKey(person) {
      return person.id;
    },
    pagination: {
      pageSize: 100,
      hideOnSinglePage: true
    },
    expandable: {
      expandedRowRender: function expandedRowRender(_ref2) {
        var properties = _ref2.properties;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(lib_components_PropertiesTable__WEBPACK_IMPORTED_MODULE_7__["PropertiesTable"], {
          properties: properties
        });
      },
      rowExpandable: function rowExpandable(_ref3) {
        var properties = _ref3.properties;
        return Object.keys(properties).length > 0;
      }
    },
    dataSource: people
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvbGliL2NvbXBvbmVudHMvQ2hhcnRGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2xpYi9jb21wb25lbnRzL0ludGVydmFsRmlsdGVyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9saWIvY29tcG9uZW50cy9Qcm9wZXJ0aWVzVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2xpYi9jb21wb25lbnRzL1NhdmVUb0Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvbGliL2NvbXBvbmVudHMvU2Vzc2lvbnNGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2xpYi9ob29rcy91c2VXaW5kb3dTaXplLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9zY2VuZXMvdHJlbmRzL0JyZWFrZG93bkZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvc2NlbmVzL3RyZW5kcy9QZW9wbGVNb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvc2NlbmVzL3RyZW5kcy9TaG93bkFzRmlsdGVyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9zY2VuZXMvdHJlbmRzL1RyZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvc2NlbmVzL3VzZXJzL1Blb3BsZVRhYmxlLmpzIl0sIm5hbWVzIjpbIkNoYXJ0RmlsdGVyIiwicHJvcHMiLCJmaWx0ZXJzIiwiZGlzcGxheU1hcCIsIm9uQ2hhbmdlIiwiZGlzcGxheSIsInNlc3Npb24iLCJpbnRlcnZhbE1hcHBpbmciLCJtaW51dGUiLCJob3VyIiwiZGF5Iiwid2VlayIsIm1vbnRoIiwiSW50ZXJ2YWxGaWx0ZXIiLCJzZXRGaWx0ZXJzIiwiZGlzYWJsZWQiLCJpbnRlcnZhbCIsImRhdGVfZnJvbSIsImtleSIsIm1pbnV0ZV9kaXNhYmxlZCIsImRpc2FibGVNaW51dGVGb3IiLCJob3VyX2Rpc2FibGVkIiwiZGlzYWJsZUhvdXJGb3IiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwidmFsdWUiLCJQcm9wZXJ0aWVzVGFibGUiLCJwcm9wZXJ0aWVzIiwiQXJyYXkiLCJpc0FycmF5IiwiaXRlbSIsImluZGV4Iiwia2V5cyIsInNvcnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJpc1JlcXVpcmVkIiwibW9tZW50VG9TdHJpbmciLCJkYXRlIiwiX2lzQU1vbWVudE9iamVjdCIsImZvcm1hdCIsIlNhdmVUb0Rhc2hib2FyZCIsInN0YXRlIiwiTW9kYWwiLCJiaW5kIiwic2F2ZSIsImNsb3NlVG9hc3QiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYXBpIiwiY3JlYXRlIiwiZGF0ZV90byIsInR5cGUiLCJuYW1lIiwidGFyZ2V0IiwidGhlbiIsInRvYXN0IiwiVG9hc3QiLCJzZXRTdGF0ZSIsIm9wZW5Nb2RhbCIsIkNvbXBvbmVudCIsIlNlc3Npb25GaWx0ZXIiLCJtYXhXaWR0aCIsInVzZVdpbmRvd1NpemUiLCJpc0NsaWVudCIsIndpbmRvdyIsImdldFNpemUiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJ1bmRlZmluZWQiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInVzZVN0YXRlIiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkJyZWFrZG93bkZpbHRlciIsImJyZWFrZG93biIsInNlbGVjdFN0eWxlIiwibGFiZWwiLCJQZW9wbGVNb2RhbCIsInVzZVZhbHVlcyIsInRyZW5kc0xvZ2ljIiwiaWQiLCJwZW9wbGUiLCJ1c2VBY3Rpb25zIiwiZGFzaGJvYXJkSXRlbUlkIiwic2V0U2hvd2luZ1Blb3BsZSIsImFjdGlvbiIsImJyZWFrZG93bl92YWx1ZSIsInRpdGxlIiwic2hvd25fYXMiLCJtb21lbnQiLCJjb3VudCIsIlNob3duQXNGaWx0ZXIiLCJUYWJQYW5lIiwiQWN0aW9uc0xpbmVHcmFwaCIsIkFjdGlvbnNUYWJsZSIsIkFjdGlvbnNQaWUiLCJUcmVuZHMiLCJyZXN1bHRzTG9hZGluZyIsInNob3dpbmdQZW9wbGUiLCJhY3RpdmVWaWV3Iiwic2V0RGlzcGxheSIsInNldEFjdGl2ZVZpZXciLCJ1c2VyTG9naWMiLCJldmVudFByb3BlcnRpZXMiLCJzaXplIiwib3ZlcmZsb3ciLCJWaWV3VHlwZSIsIkZJTFRFUlMiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwiU0VTU0lPTlMiLCJ2IiwiYWN0aW9ucyIsImV2ZW50cyIsIm1pbkhlaWdodCIsInBvc2l0aW9uIiwiUGVvcGxlVGFibGUiLCJsb2FkaW5nIiwiY29sdW1ucyIsImRhdGFJbmRleCIsInJlbmRlciIsIl8iLCJwZXJzb24iLCJlbmNvZGVVUklDb21wb25lbnQiLCJkaXN0aW5jdF9pZHMiLCJwdXNoIiwiZGVsZXRlUGVyc29uRGF0YSIsInBhZ2VTaXplIiwiaGlkZU9uU2luZ2xlUGFnZSIsImV4cGFuZGVkUm93UmVuZGVyIiwicm93RXhwYW5kYWJsZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHTyxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUMvQixNQUFNQyxPQUFOLEdBQXdDRCxLQUF4QyxDQUFNQyxPQUFOO0FBQUEsTUFBZUMsVUFBZixHQUF3Q0YsS0FBeEMsQ0FBZUUsVUFBZjtBQUFBLE1BQTJCQyxRQUEzQixHQUF3Q0gsS0FBeEMsQ0FBMkJHLFFBQTNCO0FBQ0Esc0JBQ0k7QUFDSSxnQkFBWSxFQUFFRCxVQUFVLENBQUNELE9BQU8sQ0FBQ0csT0FBUixJQUFtQixrQkFBcEIsQ0FENUI7QUFFSSxTQUFLLEVBQUVGLFVBQVUsQ0FBQ0QsT0FBTyxDQUFDRyxPQUFSLElBQW1CLGtCQUFwQixDQUZyQjtBQUdJLFlBQVEsRUFBRUQsUUFIZDtBQUlJLFlBQVEsRUFBRSxL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LENBREk7QUFBQTtBQUpaLEdBRFUsQ0FBZDtBQVlBLE1BQUlrRSxPQUFKLEVBQ0lNLE9BQU8sQ0FBQ08sSUFBUixDQUFhO0FBQ1R2QyxTQUFLLEVBQUUsU0FERTtBQUVUa0MsVUFBTSxFQUFFLGdCQUFBRSxNQUFNO0FBQUEsMEJBQ1Y7QUFBUSxjQUFNLE1BQWQ7QUFBZSxZQUFJLEVBQUMsTUFBcEI7QUFBMkIsZUFBTyxFQUFFO0FBQUEsaUJBQU1JLGtFQUFnQixDQUFDSixNQUFELEVBQVMvSCxRQUFULENBQXRCO0FBQUE7QUFBcEMsc0JBQ0ksMkRBQUMsZ0VBQUQsT0FESixDQURVO0FBQUE7QUFGTCxHQUFiO0FBU0osc0JBQ0k7QUFDSSxRQUFJLEVBQUMsT0FEVDtBQUVJLFdBQU8sRUFBRTJILE9BRmI7QUFHSSxXQUFPLEVBQUVELE9BSGI7QUFJSSxVQUFNLEVBQUUsZ0JBQUFLLE1BQU07QUFBQSxhQUFJQSxNQUFNLENBQUMzQyxFQUFYO0FBQUEsS0FKbEI7QUFLSSxjQUFVLEVBQUU7QUFBRWdELGNBQVEsRUFBRSxHQUFaO0FBQWlCQyxzQkFBZ0IsRUFBRTtBQUFuQyxLQUxoQjtBQU1JLGNBQVUsRUFBRTtBQUNSQyx1QkFBaUIsRUFBRTtBQUFBLFlBQUc5RyxVQUFILFNBQUdBLFVBQUg7QUFBQSw0QkFBb0IsMkRBQUMsOEVBQUQ7QUFBaUIsb0JBQVUsRUFBRUE7QUFBN0IsVUFBcEI7QUFBQSxPQURYO0FBRVIrRyxtQkFBYSxFQUFFO0FBQUEsWUFBRy9HLFVBQUgsU0FBR0EsVUFBSDtBQUFBLGVBQW9CTCxNQUFNLENBQUNVLElBQVAsQ0FBWUwsVUFBWixFQUF3QmdILE1BQXhCLEdBQWlDLENBQXJEO0FBQUE7QUFGUCxLQU5oQjtBQVVJLGNBQVUsRUFBRW5EO0FBVmhCLElBREo7QUFjSCxDIiwiZmlsZSI6InRyZW5kcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ2FudGQnXG5cbmV4cG9ydCBmdW5jdGlvbiBDaGFydEZpbHRlcihwcm9wcykge1xuICAgIGxldCB7IGZpbHRlcnMsIGRpc3BsYXlNYXAsIG9uQ2hhbmdlIH0gPSBwcm9wc1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGlzcGxheU1hcFtmaWx0ZXJzLmRpc3BsYXkgfHwgJ0FjdGlvbnNMaW5lR3JhcGgnXX1cbiAgICAgICAgICAgIHZhbHVlPXtkaXNwbGF5TWFwW2ZpbHRlcnMuZGlzcGxheSB8fCAnQWN0aW9uc0xpbmVHcmFwaCddfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgYm9yZGVyZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoPXtmYWxzZX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJBY3Rpb25zTGluZUdyYXBoXCIgZGlzYWJsZWQ9e2ZpbHRlcnMuc2Vzc2lvbiAmJiBmaWx0ZXJzLnNlc3Npb24gPT0gJ2Rpc3QnfT5cbiAgICAgICAgICAgICAgICBMaW5lIGNoYXJ0XG4gICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIkFjdGlvbnNUYWJsZVwiPlRhYmxlPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJBY3Rpb25zUGllXCIgZGlzYWJsZWQ9e2ZpbHRlcnMuc2Vzc2lvbn0+XG4gICAgICAgICAgICAgICAgUGllXG4gICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgIDwvU2VsZWN0PlxuICAgIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGRpc2FibGVNaW51dGVGb3IsIGRpc2FibGVIb3VyRm9yIH0gZnJvbSAnLi4vLi4vc2NlbmVzL3RyZW5kcy90cmVuZHNMb2dpYydcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ2FudGQnXG5cbmxldCBpbnRlcnZhbE1hcHBpbmcgPSB7XG4gICAgbWludXRlOiAnTWludXRlJyxcbiAgICBob3VyOiAnSG91cmx5JyxcbiAgICBkYXk6ICdEYWlseScsXG4gICAgd2VlazogJ1dlZWtseScsXG4gICAgbW9udGg6ICdNb250aGx5Jyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEludGVydmFsRmlsdGVyKHsgZmlsdGVycywgc2V0RmlsdGVycywgZGlzYWJsZWQgPSBmYWxzZSB9KSB7XG4gICAgY29uc3QgeyBpbnRlcnZhbCwgZGF0ZV9mcm9tIH0gPSBmaWx0ZXJzXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgYm9yZGVyZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpbnRlcnZhbE1hcHBpbmdbaW50ZXJ2YWxdfVxuICAgICAgICAgICAgdmFsdWU9e2ludGVydmFsTWFwcGluZ1tpbnRlcnZhbF19XG4gICAgICAgICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg9e2ZhbHNlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2tleSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWludXRlX2Rpc2FibGVkID0ga2V5ID09PSAnbWludXRlJyAmJiBkaXNhYmxlTWludXRlRm9yW2RhdGVfZnJvbV1cbiAgICAgICAgICAgICAgICBjb25zdCBob3VyX2Rpc2FibGVkID0ga2V5ID09PSAnaG91cicgJiYgZGlzYWJsZUhvdXJGb3JbZGF0ZV9mcm9tXVxuICAgICAgICAgICAgICAgIGlmIChtaW51dGVfZGlzYWJsZWQgfHwgaG91cl9kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0RmlsdGVycyh7IGludGVydmFsOiBrZXkgfSlcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhpbnRlcnZhbE1hcHBpbmcpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24ga2V5PXtrZXl9IHZhbHVlPXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvU2VsZWN0PlxuICAgIClcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuZXhwb3J0IGZ1bmN0aW9uIFByb3BlcnRpZXNUYWJsZSh7IHByb3BlcnRpZXMgfSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMpKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7cHJvcGVydGllcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb3BlcnRpZXNUYWJsZSBwcm9wZXJ0aWVzPXtpdGVtfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgaWYgKHByb3BlcnRpZXMgaW5zdGFuY2VvZiBPYmplY3QpXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNvcnQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChrZXkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57a2V5fTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9wZXJ0aWVzVGFibGUgcHJvcGVydGllcz17cHJvcGVydGllc1trZXldfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgKVxuICAgIGlmIChwcm9wZXJ0aWVzID09PSB0cnVlKSByZXR1cm4gJ3RydWUnXG4gICAgaWYgKHByb3BlcnRpZXMgPT09IGZhbHNlKSByZXR1cm4gJ2ZhbHNlJ1xuICAgIHJldHVybiBwcm9wZXJ0aWVzID8gcHJvcGVydGllcyA6IG51bGxcbn1cblByb3BlcnRpZXNUYWJsZS5wcm9wVHlwZXMgPSB7XG4gICAgcHJvcGVydGllczogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGFwaSBmcm9tICcuLi9hcGknXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4vTW9kYWwnXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ2xpYi9jb21wb25lbnRzL0xpbmsnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJ1xuXG5mdW5jdGlvbiBtb21lbnRUb1N0cmluZyhkYXRlKSB7XG4gICAgaWYgKGRhdGUgJiYgZGF0ZS5faXNBTW9tZW50T2JqZWN0KSByZXR1cm4gZGF0ZS5mb3JtYXQoJ1lZWVktTU0tREQnKVxuICAgIHJldHVybiBkYXRlXG59XG5cbmV4cG9ydCBjbGFzcyBTYXZlVG9EYXNoYm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fVxuICAgICAgICB0aGlzLk1vZGFsID0gdGhpcy5Nb2RhbC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuc2F2ZSA9IHRoaXMuc2F2ZS5iaW5kKHRoaXMpXG4gICAgfVxuICAgIFRvYXN0KHsgY2xvc2VUb2FzdCB9KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIFBhbmVsIGFkZGVkIHRvIGRhc2hib2FyZC4mbmJzcDtcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9kYXNoYm9hcmRcIj5DbGljayBoZXJlIHRvIHNlZSBpdC48L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbiAgICBzYXZlKGV2ZW50KSB7XG4gICAgICAgIGxldCB7IGZpbHRlcnMgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBhcGkuY3JlYXRlKCdhcGkvZGFzaGJvYXJkJywge1xuICAgICAgICAgICAgZmlsdGVyczoge1xuICAgICAgICAgICAgICAgIC4uLmZpbHRlcnMsXG4gICAgICAgICAgICAgICAgZGF0ZV9mcm9tOiBtb21lbnRUb1N0cmluZyhmaWx0ZXJzLmRhdGVfZnJvbSksXG4gICAgICAgICAgICAgICAgZGF0ZV90bzogbW9tZW50VG9TdHJpbmcoZmlsdGVycy5kYXRlX3RvKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiB0aGlzLnByb3BzLnR5cGUsXG4gICAgICAgICAgICBuYW1lOiBldmVudC50YXJnZXQubmFtZS52YWx1ZSxcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0b2FzdCh0aGlzLlRvYXN0KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5Nb2RhbDogZmFsc2UgfSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgTW9kYWwoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TW9kYWwgdGl0bGU9XCJBZGQgZ3JhcGggdG8gZGFzaGJvYXJkXCIgb25EaXNtaXNzPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3Blbk1vZGFsOiBmYWxzZSB9KX0+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc2F2ZX0+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QYW5lbCBuYW1lIG9uIGRhc2hib2FyZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcnMgd2hvIGRpZCB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgcGFuZWwgdG8gZGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIClcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2F2ZS10by1kYXNoYm9hcmRcIj5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5vcGVuTW9kYWwgJiYgPHRoaXMuTW9kYWwgLz59XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3Blbk1vZGFsOiB0cnVlIH0pfSB0eXBlPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICBBZGQgdG8gZGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIClcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTZWxlY3QsIFJvdyB9IGZyb20gJ2FudGQnXG5cbmV4cG9ydCBmdW5jdGlvbiBTZXNzaW9uRmlsdGVyKHByb3BzKSB7XG4gICAgbGV0IHsgb25DaGFuZ2UsIHZhbHVlIH0gPSBwcm9wc1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dmFsdWV9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg9e2ZhbHNlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICA+XG4gICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImF2Z1wiPkF2ZXJhZ2UgU2Vzc2lvbiBMZW5ndGg8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImRpc3RcIj5EaXN0cmlidXRpb24gb2YgU2Vzc2lvbiBMZW5ndGhzPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICA8L1NlbGVjdD5cbiAgICApXG59XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VXaW5kb3dTaXplKCkge1xuICAgIGNvbnN0IGlzQ2xpZW50ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCdcblxuICAgIGZ1bmN0aW9uIGdldFNpemUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aDogaXNDbGllbnQgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGhlaWdodDogaXNDbGllbnQgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiB1bmRlZmluZWQsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBbd2luZG93U2l6ZSwgc2V0V2luZG93U2l6ZV0gPSB1c2VTdGF0ZShnZXRTaXplKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFpc0NsaWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XG4gICAgICAgICAgICBzZXRXaW5kb3dTaXplKGdldFNpemUoKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpXG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKVxuICAgIH0sIFtdKSAvLyBFbXB0eSBhcnJheSBlbnN1cmVzIHRoYXQgZWZmZWN0IGlzIG9ubHkgcnVuIG9uIG1vdW50IGFuZCB1bm1vdW50XG5cbiAgICByZXR1cm4gd2luZG93U2l6ZVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgc2VsZWN0U3R5bGUgfSBmcm9tICcuLi8uLi9saWIvdXRpbHMnXG5pbXBvcnQgeyBTZWxlY3QsIFJvdyB9IGZyb20gJ2FudGQnXG5cbmV4cG9ydCBjbGFzcyBCcmVha2Rvd25GaWx0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzgwJScsIG1heFdpZHRoOiAyMDAgfX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17J0JyZWFrIGRvd24gYnknfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmJyZWFrZG93biA/IHRoaXMucHJvcHMuYnJlYWtkb3duIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKX1cbiAgICAgICAgICAgICAgICBzdHlsZXM9e3NlbGVjdFN0eWxlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLnByb3BlcnRpZXMpLm1hcCgoW2tleSwgaXRlbV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIGtleT17a2V5fSB2YWx1ZT17aXRlbS52YWx1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICApXG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlQWN0aW9ucywgdXNlVmFsdWVzIH0gZnJvbSAna2VhJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgeyB0cmVuZHNMb2dpYyB9IGZyb20gJ3NjZW5lcy90cmVuZHMvdHJlbmRzTG9naWMnXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ2xpYi9jb21wb25lbnRzL01vZGFsJ1xuaW1wb3J0IHsgUGVvcGxlVGFibGUgfSBmcm9tICdzY2VuZXMvdXNlcnMvUGVvcGxlVGFibGUnXG5cbmV4cG9ydCBmdW5jdGlvbiBQZW9wbGVNb2RhbCgpIHtcbiAgICBjb25zdCB7IHBlb3BsZSwgZmlsdGVycyB9ID0gdXNlVmFsdWVzKHRyZW5kc0xvZ2ljKHsgaWQ6IG51bGwgfSkpXG4gICAgY29uc3QgeyBzZXRTaG93aW5nUGVvcGxlIH0gPSB1c2VBY3Rpb25zKHRyZW5kc0xvZ2ljKHsgZGFzaGJvYXJkSXRlbUlkOiBudWxsIH0pKVxuXG4gICAgY29uc3QgbmFtZSA9IHBlb3BsZSA/IHBlb3BsZS5hY3Rpb24ubmFtZSArIChwZW9wbGUuYnJlYWtkb3duX3ZhbHVlID8gJyAtICcgKyBwZW9wbGUuYnJlYWtkb3duX3ZhbHVlIDogJycpIDogJy4uLidcbiAgICBjb25zdCB0aXRsZSA9XG4gICAgICAgIGZpbHRlcnMuc2hvd25fYXMgPT09ICdTdGlja2luZXNzJ1xuICAgICAgICAgICAgPyBgXCIke25hbWV9XCIgc3RpY2tpbmVzcyAke3Blb3BsZT8uZGF5fSBkYXkke3Blb3BsZT8uZGF5ID09PSAxID8gJycgOiAncyd9YFxuICAgICAgICAgICAgOiBgXCIke25hbWV9XCIgb24gJHtwZW9wbGU/LmRheSA/IG1vbWVudChwZW9wbGUuZGF5KS5mb3JtYXQoJ2xsJykgOiAnLi4uJ31gXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TW9kYWwgdGl0bGU9e3RpdGxlfSBvbkRpc21pc3M9eygpID0+IHNldFNob3dpbmdQZW9wbGUoZmFsc2UpfT5cbiAgICAgICAgICAgIHtwZW9wbGUgPyAoXG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIEZvdW5kIHtwZW9wbGUuY291bnR9IHtwZW9wbGUuY291bnQgPT09IDEgPyAndXNlcicgOiAndXNlcnMnfVxuICAgICAgICAgICAgICAgICAgICB7cGVvcGxlLmNvdW50ID4gMTAwID8gJy4gU2hvd2luZyB0aGUgZmlyc3QgMTAwIGJlbG93LicgOiAnJ31cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxwPkxvYWRpbmcgdXNlcnMuLi48L3A+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8UGVvcGxlVGFibGUgbG9hZGluZz17IXBlb3BsZT8ucGVvcGxlfSBwZW9wbGU9e3Blb3BsZT8ucGVvcGxlfSAvPlxuICAgICAgICA8L01vZGFsPlxuICAgIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNlbGVjdCwgUm93IH0gZnJvbSAnYW50ZCdcblxuZXhwb3J0IGZ1bmN0aW9uIFNob3duQXNGaWx0ZXIoeyBzaG93bl9hcywgb25DaGFuZ2UgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzaG93bl9hc31cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Nob3duX2FzIHx8ICdWb2x1bWUnfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gb25DaGFuZ2UodmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjAwIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT17J1ZvbHVtZSd9PnsnVm9sdW1lJ308L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPXsnU3RpY2tpbmVzcyd9PnsnU3RpY2tpbmVzcyd9PC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUFjdGlvbnMsIHVzZVZhbHVlcyB9IGZyb20gJ2tlYSdcblxuaW1wb3J0IHsgQ2FyZCwgQ2xvc2VCdXR0b24sIExvYWRpbmcgfSBmcm9tICdsaWIvdXRpbHMnXG5pbXBvcnQgeyBTYXZlVG9EYXNoYm9hcmQgfSBmcm9tICdsaWIvY29tcG9uZW50cy9TYXZlVG9EYXNoYm9hcmQnXG5pbXBvcnQgeyBQcm9wZXJ0eUZpbHRlcnMgfSBmcm9tICdsaWIvY29tcG9uZW50cy9Qcm9wZXJ0eUZpbHRlcnMvUHJvcGVydHlGaWx0ZXJzJ1xuaW1wb3J0IHsgRGF0ZUZpbHRlciB9IGZyb20gJ2xpYi9jb21wb25lbnRzL0RhdGVGaWx0ZXInXG5pbXBvcnQgeyBJbnRlcnZhbEZpbHRlciB9IGZyb20gJ2xpYi9jb21wb25lbnRzL0ludGVydmFsRmlsdGVyJ1xuXG5pbXBvcnQgeyBBY3Rpb25GaWx0ZXIgfSBmcm9tICcuL0FjdGlvbkZpbHRlci9BY3Rpb25GaWx0ZXInXG5pbXBvcnQgeyBBY3Rpb25zUGllIH0gZnJvbSAnLi9BY3Rpb25zUGllJ1xuaW1wb3J0IHsgQnJlYWtkb3duRmlsdGVyIH0gZnJvbSAnLi9CcmVha2Rvd25GaWx0ZXInXG5pbXBvcnQgeyBBY3Rpb25zVGFibGUgfSBmcm9tICcuL0FjdGlvbnNUYWJsZSdcbmltcG9ydCB7IEFjdGlvbnNMaW5lR3JhcGggfSBmcm9tICcuL0FjdGlvbnNMaW5lR3JhcGgnXG5pbXBvcnQgeyBTaG93bkFzRmlsdGVyIH0gZnJvbSAnLi9TaG93bkFzRmlsdGVyJ1xuaW1wb3J0IHsgUGVvcGxlTW9kYWwgfSBmcm9tICcuL1Blb3BsZU1vZGFsJ1xuaW1wb3J0IHsgdHJlbmRzTG9naWMsIFZpZXdUeXBlIH0gZnJvbSAnLi90cmVuZHNMb2dpYydcbmltcG9ydCB7IENoYXJ0RmlsdGVyIH0gZnJvbSAnbGliL2NvbXBvbmVudHMvQ2hhcnRGaWx0ZXInXG5pbXBvcnQgeyB1c2VyTG9naWMgfSBmcm9tICdzY2VuZXMvdXNlckxvZ2ljJ1xuaW1wb3J0IHsgVGFicywgUm93LCBDb2wsIFRvb2x0aXAgfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgU2Vzc2lvbkZpbHRlciB9IGZyb20gJ2xpYi9jb21wb25lbnRzL1Nlc3Npb25zRmlsdGVyJ1xuaW1wb3J0IHsgdXNlV2luZG93U2l6ZSB9IGZyb20gJ2xpYi9ob29rcy91c2VXaW5kb3dTaXplJ1xuXG5jb25zdCB7IFRhYlBhbmUgfSA9IFRhYnNcblxuY29uc3QgZGlzcGxheU1hcCA9IHtcbiAgICBBY3Rpb25zTGluZUdyYXBoOiAnTGluZSBjaGFydCcsXG4gICAgQWN0aW9uc1RhYmxlOiAnVGFibGUnLFxuICAgIEFjdGlvbnNQaWU6ICdQaWUnLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gVHJlbmRzKCkge1xuICAgIGNvbnN0IHsgZmlsdGVycywgcmVzdWx0c0xvYWRpbmcsIHNob3dpbmdQZW9wbGUsIGFjdGl2ZVZpZXcgfSA9IHVzZVZhbHVlcyh0cmVuZHNMb2dpYyh7IGRhc2hib2FyZEl0ZW1JZDogbnVsbCB9KSlcbiAgICBjb25zdCB7IHNldEZpbHRlcnMsIHNldERpc3BsYXksIHNldEFjdGl2ZVZpZXcgfSA9IHVzZUFjdGlvbnModHJlbmRzTG9naWMoeyBkYXNoYm9hcmRJdGVtSWQ6IG51bGwgfSkpXG4gICAgY29uc3QgeyBldmVudFByb3BlcnRpZXMgfSA9IHVzZVZhbHVlcyh1c2VyTG9naWMpXG4gICAgY29uc3Qgc2l6ZSA9IHVzZVdpbmRvd1NpemUoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zLWdyYXBoXCI+XG4gICAgICAgICAgICB7c2hvd2luZ1Blb3BsZSA/IDxQZW9wbGVNb2RhbCAvPiA6IG51bGx9XG4gICAgICAgICAgICA8aDE+VHJlbmRzPC9oMT5cbiAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXsxNn0+XG4gICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IHhsPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBweC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlS2V5PXthY3RpdmVWaWV3fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2tleSA9PiBzZXRBY3RpdmVWaWV3KGtleSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lIHRhYj17J0FjdGlvbnMgJiBFdmVudHMnfSBrZXk9e1ZpZXdUeXBlLkZJTFRFUlN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjdGlvbkZpbHRlciBmaWx0ZXJzPXtmaWx0ZXJzfSBzZXRGaWx0ZXJzPXtzZXRGaWx0ZXJzfSB0eXBlS2V5PVwidHJlbmRzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInNlY29uZGFyeVwiPkZpbHRlcnM8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb3BlcnR5RmlsdGVycyBwYWdlS2V5PVwidHJlbmRzLWZpbHRlcnNcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyZWFrIGRvd24gYnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVXNlIGJyZWFrZG93biB0byBzZWUgdGhlIHZvbHVtZSBvZiBldmVudHMgZm9yIGVhY2ggdmFyaWF0aW9uIG9mIHRoYXQgcHJvcGVydHkuIEZvciBleGFtcGxlLCBicmVha2luZyBkb3duIGJ5ICRjdXJyZW50X3VybCB3aWxsIGdpdmUgeW91IHRoZSBldmVudCB2b2x1bWUgZm9yIGVhY2ggdXJsIHlvdXIgdXNlcnMgaGF2ZSB2aXNpdGVkLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiaW5mb1wiPmluZm88L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVha2Rvd25GaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcz17ZXZlbnRQcm9wZXJ0aWVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha2Rvd249e2ZpbHRlcnMuYnJlYWtkb3dufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17YnJlYWtkb3duID0+IHNldEZpbHRlcnMoeyBicmVha2Rvd24gfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVycy5icmVha2Rvd24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZpbHRlcnMoeyBicmVha2Rvd246IGZhbHNlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAxLCBtYXJnaW5MZWZ0OiAxMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob3duIGFzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0aWNraW5lc3Mgc2hvd3MgeW91IGhvdyBtYW55IGRheXMgdXNlcnMgcGVyZm9ybWVkIGFuIGFjdGlvbiB3aXRoaW4gdGhlIHRpbWVmcmFtZS4gSWYgYSB1c2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmZvcm1lZCBhbiBhY3Rpb24gb24gTW9uZGF5IGFuZCBhZ2FpbiBvbiBGcmlkYXksIGl0IHdvdWxkIGJlIHNob3duIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcyBcIjIgZGF5c1wiLidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJpbmZvXCI+aW5mbzwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG93bkFzRmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd25fYXM9e2ZpbHRlcnMuc2hvd25fYXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Nob3duX2FzID0+IHNldEZpbHRlcnMoeyBzaG93bl9hcyB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmUgdGFiPVwiU2Vzc2lvbnNcIiBrZXk9e1ZpZXdUeXBlLlNFU1NJT05TfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZXNzaW9uRmlsdGVyIHZhbHVlPXtmaWx0ZXJzLnNlc3Npb259IG9uQ2hhbmdlPXt2ID0+IHNldEZpbHRlcnMoeyBzZXNzaW9uOiB2IH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwic2Vjb25kYXJ5XCI+RmlsdGVyczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvcGVydHlGaWx0ZXJzIHBhZ2VLZXk9XCJ0cmVuZHMtc2Vzc2lvbnNcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IHhsPXsxOH0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCBwdC0xIHBiLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEludGVydmFsRmlsdGVyIHNldEZpbHRlcnM9e3NldEZpbHRlcnN9IGZpbHRlcnM9e2ZpbHRlcnN9IGRpc2FibGVkPXtmaWx0ZXJzLnNlc3Npb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFydEZpbHRlciBkaXNwbGF5TWFwPXtkaXNwbGF5TWFwfSBmaWx0ZXJzPXtmaWx0ZXJzfSBvbkNoYW5nZT17c2V0RGlzcGxheX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVGaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZV9mcm9tLCBkYXRlX3RvKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpbHRlcnMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlX2Zyb206IGRhdGVfZnJvbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZV90bzogZGF0ZV90byAmJiBkYXRlX3RvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlRnJvbT17ZmlsdGVycy5kYXRlX2Zyb219XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlVG89e2ZpbHRlcnMuZGF0ZV90b31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNhdmVUb0Rhc2hib2FyZCBmaWx0ZXJzPXtmaWx0ZXJzfSB0eXBlPXtmaWx0ZXJzLmRpc3BsYXkgfHwgJ0FjdGlvbnNMaW5lR3JhcGgnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBjYXJkLWJvZHktZ3JhcGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGZpbHRlcnMuYWN0aW9ucyB8fCBmaWx0ZXJzLmV2ZW50cyB8fCBmaWx0ZXJzLnNlc3Npb24pICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICc3MHZoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXN1bHRzTG9hZGluZyAmJiA8TG9hZGluZyAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoIWZpbHRlcnMuZGlzcGxheSB8fCBmaWx0ZXJzLmRpc3BsYXkgPT09ICdBY3Rpb25zTGluZUdyYXBoJykgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY3Rpb25zTGluZUdyYXBoIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpbHRlcnMuZGlzcGxheSA9PT0gJ0FjdGlvbnNUYWJsZScgJiYgPEFjdGlvbnNUYWJsZSBmaWx0ZXJzPXtmaWx0ZXJzfSAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJzLmRpc3BsYXkgPT09ICdBY3Rpb25zUGllJyAmJiA8QWN0aW9uc1BpZSBmaWx0ZXJzPXtmaWx0ZXJzfSAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uLCBUYWJsZSB9IGZyb20gJ2FudGQnXG5pbXBvcnQgYXBpIGZyb20gJ2xpYi9hcGknXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnbGliL2NvbXBvbmVudHMvTGluaydcbmltcG9ydCB7IFByb3BlcnRpZXNUYWJsZSB9IGZyb20gJ2xpYi9jb21wb25lbnRzL1Byb3BlcnRpZXNUYWJsZSdcbmltcG9ydCB7IERlbGV0ZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXG5pbXBvcnQgeyBkZWxldGVQZXJzb25EYXRhIH0gZnJvbSAnbGliL3V0aWxzJ1xuXG5leHBvcnQgZnVuY3Rpb24gUGVvcGxlVGFibGUoeyBwZW9wbGUsIGxvYWRpbmcsIGFjdGlvbnMsIG9uQ2hhbmdlIH0pIHtcbiAgICBsZXQgY29sdW1ucyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQZXJzb24nLFxuICAgICAgICAgICAgZGF0YUluZGV4OiAnbmFtZScsXG4gICAgICAgICAgICBrZXk6ICduYW1lJyxcbiAgICAgICAgICAgIHJlbmRlcjogKF8sIHBlcnNvbikgPT4gKFxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnL3BlcnNvbi8nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBlcnNvbi5kaXN0aW5jdF9pZHNbMF0pfSBjbGFzc05hbWU9XCJwaC1uby1jYXB0dXJlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwZXJzb24ubmFtZX1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApLFxuICAgICAgICB9LFxuICAgIF1cbiAgICBpZiAoYWN0aW9ucylcbiAgICAgICAgY29sdW1ucy5wdXNoKHtcbiAgICAgICAgICAgIHRpdGxlOiAnQWN0aW9ucycsXG4gICAgICAgICAgICByZW5kZXI6IHBlcnNvbiA9PiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBkYW5nZXIgdHlwZT1cImxpbmtcIiBvbkNsaWNrPXsoKSA9PiBkZWxldGVQZXJzb25EYXRhKHBlcnNvbiwgb25DaGFuZ2UpfT5cbiAgICAgICAgICAgICAgICAgICAgPERlbGV0ZU91dGxpbmVkIC8+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApLFxuICAgICAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRhYmxlXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgICByb3dLZXk9e3BlcnNvbiA9PiBwZXJzb24uaWR9XG4gICAgICAgICAgICBwYWdpbmF0aW9uPXt7IHBhZ2VTaXplOiAxMDAsIGhpZGVPblNpbmdsZVBhZ2U6IHRydWUgfX1cbiAgICAgICAgICAgIGV4cGFuZGFibGU9e3tcbiAgICAgICAgICAgICAgICBleHBhbmRlZFJvd1JlbmRlcjogKHsgcHJvcGVydGllcyB9KSA9PiA8UHJvcGVydGllc1RhYmxlIHByb3BlcnRpZXM9e3Byb3BlcnRpZXN9IC8+LFxuICAgICAgICAgICAgICAgIHJvd0V4cGFuZGFibGU6ICh7IHByb3BlcnRpZXMgfSkgPT4gT2JqZWN0LmtleXMocHJvcGVydGllcykubGVuZ3RoID4gMCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBkYXRhU291cmNlPXtwZW9wbGV9XG4gICAgICAgIC8+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==