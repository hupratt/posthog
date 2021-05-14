(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["action~editFunnel~events~funnel~liveActions~people~person~trends"],{

/***/ "./frontend/src/lib/components/PropertyFilters/PropertyFilter.js":
/*!***********************************************************************!*\
  !*** ./frontend/src/lib/components/PropertyFilters/PropertyFilter.js ***!
  \***********************************************************************/
/*! exports provided: PropertyFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyFilter", function() { return PropertyFilter; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/utils */ "./frontend/src/lib/utils.js");
/* harmony import */ var _PropertyValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PropertyValue */ "./frontend/src/lib/components/PropertyFilters/PropertyValue.js");
/* harmony import */ var kea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! kea */ "./node_modules/kea/lib/index.esm.js");






var operatorOptions = Object.entries(lib_utils__WEBPACK_IMPORTED_MODULE_3__["operatorMap"]).map(function (_ref) {
  var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];

  return {
    label: value,
    value: key
  };
});
function PropertyFilter(_ref3) {
  var index = _ref3.index,
      endpoint = _ref3.endpoint,
      onComplete = _ref3.onComplete,
      logic = _ref3.logic;

  var _useValues = Object(kea__WEBPACK_IMPORTED_MODULE_5__["useValues"])(logic),
      properties = _useValues.properties,
      filters = _useValues.filters;

  var _useActions = Object(kea__WEBPACK_IMPORTED_MODULE_5__["useActions"])(logic),
      setFilter = _useActions.setFilter,
      remove = _useActions.remove;

  var item = filters[index];
  var key = Object.keys(item)[0] ? Object.keys(item)[0].split('__') : [];
  var value = Object.values(item)[0];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row",
    style: {
      margin: '0.5rem -15px',
      minWidth: key[0] ? 700 : 200
    }
  }, properties && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: key[0] ? 'col-4' : 'col'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
    options: properties,
    value: [{
      label: key[0],
      value: key[0]
    }],
    isLoading: !properties,
    placeholder: "Property key",
    onChange: function onChange(item) {
      return setFilter(index, item.value + (key[1] ? '__' + key[1] : ''), item.value !== key[0] ? '' : value);
    },
    styles: lib_utils__WEBPACK_IMPORTED_MODULE_3__["selectStyle"],
    autoFocus: !key[0],
    openMenuOnFocus: true
  })), key[0] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-3 pl-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
    options: operatorOptions,
    style: {
      width: 200
    },
    value: [{
      label: lib_utils__WEBPACK_IMPORTED_MODULE_3__["operatorMap"][key[1]] || '= equals',
      value: key[1]
    }],
    placeholder: "Property key",
    onChange: function onChange(operator) {
      return setFilter(index, key[0] + '__' + operator.value, value);
    },
    styles: lib_utils__WEBPACK_IMPORTED_MODULE_3__["selectStyle"]
  })), key[0] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-5 pl-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PropertyValue__WEBPACK_IMPORTED_MODULE_4__["PropertyValue"], {
    endpoint: endpoint,
    key: Object.keys(item)[0],
    propertyKey: Object.keys(item)[0],
    value: value,
    onSet: function onSet(key, value) {
      onComplete();
      setFilter(index, key, value);
    }
  }), (key[1] === 'gt' || key[1] === 'lt') && isNaN(value) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "text-danger"
  }, "Value needs to be a number. Try \"equals\" or \"contains\" instead.")));
}

/***/ }),

/***/ "./frontend/src/lib/components/PropertyFilters/PropertyFilters.js":
/*!************************************************************************!*\
  !*** ./frontend/src/lib/components/PropertyFilters/PropertyFilters.js ***!
  \************************************************************************/
/*! exports provided: PropertyFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyFilters", function() { return PropertyFilters; });
/* harmony import */ var antd_es_row_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/row/style/css */ "./node_modules/antd/es/row/style/css.js");
/* harmony import */ var antd_es_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/row */ "./node_modules/antd/es/row/index.js");
/* harmony import */ var antd_es_popover_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/popover/style/css */ "./node_modules/antd/es/popover/style/css.js");
/* harmony import */ var antd_es_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/popover */ "./node_modules/antd/es/popover/index.js");
/* harmony import */ var antd_es_button_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/button/style/css */ "./node_modules/antd/es/button/style/css.js");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/button */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _PropertyFilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PropertyFilter */ "./frontend/src/lib/components/PropertyFilters/PropertyFilter.js");
/* harmony import */ var kea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! kea */ "./node_modules/kea/lib/index.esm.js");
/* harmony import */ var _propertyFilterLogic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./propertyFilterLogic */ "./frontend/src/lib/components/PropertyFilters/propertyFilterLogic.js");
/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lib/utils */ "./frontend/src/lib/utils.js");













function FilterRow(_ref) {
  var endpoint = _ref.endpoint,
      item = _ref.item,
      index = _ref.index,
      filters = _ref.filters,
      logic = _ref.logic;

  var _useActions = Object(kea__WEBPACK_IMPORTED_MODULE_9__["useActions"])(logic),
      remove = _useActions.remove;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default()(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var handleVisibleChange = function handleVisibleChange(visible) {
    if (!visible && Object.keys(item).length >= 0 && !item[Object.keys(item)[0]]) {
      remove(index);
    }

    setOpen(visible);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_es_row__WEBPACK_IMPORTED_MODULE_1__["default"], {
    align: "middle",
    className: "mt-2 mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_es_popover__WEBPACK_IMPORTED_MODULE_3__["default"], {
    trigger: "click",
    onVisibleChange: handleVisibleChange,
    defaultVisible: false,
    visible: open,
    placement: "bottomLeft",
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PropertyFilter__WEBPACK_IMPORTED_MODULE_8__["PropertyFilter"], {
      key: index,
      index: index,
      endpoint: endpoint || 'event',
      onComplete: function onComplete() {
        return setOpen(false);
      },
      logic: logic
    })
  }, Object.keys(item).length !== 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "primary",
    shape: "round",
    style: {
      maxWidth: '85%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
    style: {
      width: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, Object(lib_utils__WEBPACK_IMPORTED_MODULE_11__["formatFilterName"])(Object.keys(item)[0]) + item[Object.keys(item)[0]])) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "default",
    shape: "round"
  }, 'New Filter')), index !== filters.length - 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(lib_utils__WEBPACK_IMPORTED_MODULE_11__["CloseButton"], {
    className: "ml-1",
    onClick: function onClick() {
      remove(index);
    },
    style: {
      cursor: 'pointer',
      "float": 'none'
    }
  }));
}

function PropertyFilters(_ref2) {
  var endpoint = _ref2.endpoint,
      propertyFilters = _ref2.propertyFilters,
      className = _ref2.className,
      style = _ref2.style,
      onChange = _ref2.onChange,
      pageKey = _ref2.pageKey;
  var logic = Object(_propertyFilterLogic__WEBPACK_IMPORTED_MODULE_10__["propertyFilterLogic"])({
    propertyFilters: propertyFilters,
    endpoint: endpoint,
    onChange: onChange,
    pageKey: pageKey
  });

  var _useValues = Object(kea__WEBPACK_IMPORTED_MODULE_9__["useValues"])(logic),
      filters = _useValues.filters;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: className || 'col-8',
    style: {
      padding: 0,
      marginBottom: '2rem',
      display: 'inline',
      style: style
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "column"
  }, filters && filters.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(FilterRow, {
      key: index === filters.length - 1 ? index : "".concat(index, "_").concat(Object.keys(item)[0]),
      logic: logic,
      item: item,
      index: index,
      filters: filters,
      endpoint: endpoint
    });
  })));
}

/***/ }),

/***/ "./frontend/src/lib/components/PropertyFilters/PropertyValue.js":
/*!**********************************************************************!*\
  !*** ./frontend/src/lib/components/PropertyFilters/PropertyValue.js ***!
  \**********************************************************************/
/*! exports provided: PropertyValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyValue", function() { return PropertyValue; });
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
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api */ "./frontend/src/lib/api.js");
/* harmony import */ var react_select_async_creatable_dist_react_select_esm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-select/async-creatable/dist/react-select.esm */ "./node_modules/react-select/async-creatable/dist/react-select.browser.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils */ "./frontend/src/lib/utils.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var PropertyValue = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(PropertyValue, _Component);

  var _super = _createSuper(PropertyValue);

  function PropertyValue(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PropertyValue);

    _this = _super.call(this, props);
    _this.state = {
      input: props.value
    };
    _this.loadPropertyValues = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["debounce"])(_this.loadPropertyValues.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this)), 250);
    _this.ref = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PropertyValue, [{
    key: "loadPropertyValues",
    value: function loadPropertyValues(value, callback) {
      var key = this.props.propertyKey.split('__')[0];
      _api__WEBPACK_IMPORTED_MODULE_7__["default"].get('api/' + this.props.endpoint + '/values/?key=' + key + (value ? '&value=' + value : '')).then(function (propValues) {
        return callback(propValues.map(function (property) {
          return {
            label: property.name ? property.name : '(empty)',
            value: property.name
          };
        }));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          propertyKey = _this$props.propertyKey,
          onSet = _this$props.onSet,
          value = _this$props.value;
      var _this$state = this.state,
          isEditing = _this$state.isEditing,
          input = _this$state.input;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        ref: this.ref,
        className: "property-value"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_select_async_creatable_dist_react_select_esm__WEBPACK_IMPORTED_MODULE_8__["default"], {
        loadOptions: this.loadPropertyValues,
        defaultOptions: true,
        cacheOptions: true,
        formatCreateLabel: function formatCreateLabel(inputValue) {
          return 'Specify: ' + inputValue;
        },
        allowCreateWhileLoading: true,
        createOptionPosition: "first",
        key: propertyKey // forces a reload of the component when the property changes
        ,
        placeholder: "Property value",
        style: {
          width: 200
        },
        value: {
          label: value,
          value: value
        },
        onChange: function onChange(out) {
          onSet(propertyKey, out.value);

          _this2.setState({
            input: out.value
          });

          _this2.select.blur();
        },
        autoFocus: !value,
        styles: _utils__WEBPACK_IMPORTED_MODULE_9__["selectStyle"],
        ref: function ref(_ref) {
          _this2.select = _ref;
        } // This is a series of hacks to make the text editable
        ,
        inputValue: isEditing ? this.state.input : '',
        onFocus: function onFocus() {
          return _this2.setState({
            isEditing: true
          });
        },
        onInputChange: function onInputChange(input, actionMeta) {
          if (actionMeta.action === 'input-change') {
            _this2.setState({
              input: input
            });

            return input;
          }

          return _this2.state.input;
        }
      }));
    }
  }]);

  return PropertyValue;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
PropertyValue.propTypes = {
  propertyKey: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any.isRequired,
  onSet: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired
};

/***/ }),

/***/ "./frontend/src/lib/components/PropertyFilters/propertyFilterLogic.js":
/*!****************************************************************************!*\
  !*** ./frontend/src/lib/components/PropertyFilters/propertyFilterLogic.js ***!
  \****************************************************************************/
/*! exports provided: propertyFilterLogic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propertyFilterLogic", function() { return propertyFilterLogic; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var kea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! kea */ "./node_modules/kea/lib/index.esm.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../lib/api */ "./frontend/src/lib/api.js");
/* harmony import */ var scenes_userLogic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! scenes/userLogic */ "./frontend/src/scenes/userLogic.js");
/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/utils */ "./frontend/src/lib/utils.js");
/* harmony import */ var kea_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! kea-router */ "./node_modules/kea-router/lib/index.js");
/* harmony import */ var kea_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(kea_router__WEBPACK_IMPORTED_MODULE_10__);






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var propertyFilterLogic = Object(kea__WEBPACK_IMPORTED_MODULE_6__["kea"])({
  key: function key(props) {
    return props.pageKey;
  },
  actions: function actions() {
    return {
      loadEventProperties: true,
      setProperties: function setProperties(properties) {
        return {
          properties: properties
        };
      },
      update: function update(filters) {
        return {
          filters: filters
        };
      },
      setFilter: function setFilter(index, key, value) {
        return {
          index: index,
          key: key,
          value: value
        };
      },
      setFilters: function setFilters(filters) {
        return {
          filters: filters
        };
      },
      newFilter: true,
      remove: function remove(index) {
        return {
          index: index
        };
      }
    };
  },
  loaders: function loaders() {
    return {
      properties: {
        loadPeopleProperties: function () {
          var _loadPeopleProperties = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _lib_api__WEBPACK_IMPORTED_MODULE_7__["default"].get('api/person/properties');

                  case 2:
                    return _context.abrupt("return", _context.sent.map(function (property) {
                      return {
                        label: property.name,
                        value: property.name
                      };
                    }));

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function loadPeopleProperties() {
            return _loadPeopleProperties.apply(this, arguments);
          }

          return loadPeopleProperties;
        }()
      }
    };
  },
  reducers: function reducers(_ref) {
    var _ref4, _ref11;

    var actions = _ref.actions,
        props = _ref.props;
    return {
      properties: [[], (_ref4 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_ref4, actions.loadPeoplePropertiesSuccess, function (_, _ref2) {
        var properties = _ref2.properties;
        return properties;
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_ref4, actions.setProperties, function (_, _ref3) {
        var properties = _ref3.properties;
        return properties;
      }), _ref4)],
      filters: [props.propertyFilters ? Object.entries(props.propertyFilters).map(function (_ref5) {
        var _ref6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_ref5, 2),
            key = _ref6[0],
            value = _ref6[1];

        return _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()({}, key, value);
      }) : [], (_ref11 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_ref11, actions.setFilter, function (state, _ref8) {
        var index = _ref8.index,
            key = _ref8.key,
            value = _ref8.value;

        var newFilters = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(state);

        newFilters[index] = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()({}, key, value);
        return newFilters;
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_ref11, actions.setFilters, function (_, _ref9) {
        var filters = _ref9.filters;
        return filters;
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_ref11, actions.newFilter, function (state) {
        return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(state), [{}]);
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_ref11, actions.remove, function (state, _ref10) {
        var index = _ref10.index;
        var newState = state.filter(function (_, i) {
          return i !== index;
        });

        if (newState.length === 0) {
          return [{}];
        }

        if (Object.keys(newState[newState.length - 1]).length !== 0) {
          return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(newState), [{}]);
        }

        return newState;
      }), _ref11)]
    };
  },
  listeners: function listeners(_ref12) {
    var _ref14;

    var actions = _ref12.actions,
        props = _ref12.props,
        values = _ref12.values;
    return _ref14 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_ref14, actions.setFilter, function (_ref13) {
      var value = _ref13.value;
      return value && actions.update();
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_ref14, actions.remove, function () {
      return actions.update();
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_ref14, actions.update, function () {
      if (props.onChange) {
        if (values.filters.length === 0) {
          actions.newFilter();
          return props.onChange({});
        }

        if (Object.keys(values.filters[values.filters.length - 1]).length !== 0) actions.newFilter();
        var dict = values.filters.reduce(function (result, item) {
          return _objectSpread(_objectSpread({}, result), item);
        });
        props.onChange(dict);
      } else {
        var filters = values.filters;

        var _router$values$search = kea_router__WEBPACK_IMPORTED_MODULE_10__["router"].values.searchParams,
            _ = _router$values$search.properties,
            searchParams = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_router$values$search, ["properties"]);

        var pathname = kea_router__WEBPACK_IMPORTED_MODULE_10__["router"].values.location.pathname;

        if (filters.filter(function (f) {
          return Object.keys(f).length > 0;
        }).length > 0) {
          searchParams.properties = filters.reduce(function (result, item) {
            return _objectSpread(_objectSpread({}, result), item);
          });
        }

        if (!Object(lib_utils__WEBPACK_IMPORTED_MODULE_9__["objectsEqual"])(kea_router__WEBPACK_IMPORTED_MODULE_10__["router"].values.searchParams, searchParams)) {
          kea_router__WEBPACK_IMPORTED_MODULE_10__["router"].actions.push(pathname, searchParams);
        }
      }
    }), _ref14;
  },
  urlToAction: function urlToAction(_ref15) {
    var actions = _ref15.actions,
        values = _ref15.values,
        props = _ref15.props;
    return {
      '*': function _(_2, _ref16) {
        var properties = _ref16.properties;

        if (props.onChange) {
          return;
        }

        var filters;

        try {
          filters = values.filters;
        } catch (error) {
          // since this is a catch-all route, this code might run during or after the logic was unmounted
          // if we have an error accessing the filter value, the logic is gone and we should return
          return;
        }

        if (!Object(lib_utils__WEBPACK_IMPORTED_MODULE_9__["objectsEqual"])(properties || {}, filters)) {
          var mappedFilters = Object.entries(properties || {}).map(function (_ref17) {
            var _ref18 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_ref17, 2),
                key = _ref18[0],
                value = _ref18[1];

            return _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()({}, key, value);
          });
          actions.setFilters([].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(mappedFilters), [{}]));
        }
      }
    };
  },
  events: function events(_ref20) {
    var actions = _ref20.actions,
        props = _ref20.props;
    return {
      afterMount: function afterMount() {
        actions.newFilter();

        if (props.endpoint === 'person') {
          actions.loadPeopleProperties();
        } else {
          actions.setProperties(scenes_userLogic__WEBPACK_IMPORTED_MODULE_8__["userLogic"].values.eventProperties);
        }
      }
    };
  },
  path: function path(key) {
    return ["lib", "components", "PropertyFilters", "propertyFilterLogic", key];
  }
});

/***/ }),

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvbGliL2NvbXBvbmVudHMvUHJvcGVydHlGaWx0ZXJzL1Byb3BlcnR5RmlsdGVyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9saWIvY29tcG9uZW50cy9Qcm9wZXJ0eUZpbHRlcnMvUHJvcGVydHlGaWx0ZXJzLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9saWIvY29tcG9uZW50cy9Qcm9wZXJ0eUZpbHRlcnMvUHJvcGVydHlWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvbGliL2NvbXBvbmVudHMvUHJvcGVydHlGaWx0ZXJzL3Byb3BlcnR5RmlsdGVyTG9naWMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2xpYi91dGlscy5qcyJdLCJuYW1lcyI6WyJvcGVyYXRvck9wdGlvbnMiLCJPYmplY3QiLCJlbnRyaWVzIiwib3BlcmF0b3JNYXAiLCJtYXAiLCJrZXkiLCJ2YWx1ZSIsImxhYmVsIiwiUHJvcGVydHlGaWx0ZXIiLCJpbmRleCIsImVuZHBvaW50Iiwib25Db21wbGV0ZSIsImxvZ2ljIiwidXNlVmFsdWVzIiwicHJvcGVydGllcyIsImZpbHRlcnMiLCJ1c2VBY3Rpb25zIiwic2V0RmlsdGVyIiwicmVtb3ZlIiwiaXRlbSIsImtleXMiLCJzcGxpdCIsInZhbHVlcyIsIm1hcmdpbiIsIm1pbldpZHRoIiwic2VsZWN0U3R5bGUiLCJ3aWR0aCIsIm9wZXJhdG9yIiwiaXNOYU4iLCJGaWx0ZXJSb3ciLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlVmlzaWJsZUNoYW5nZSIsInZpc2libGUiLCJsZW5ndGgiLCJtYXhXaWR0aCIsIm92ZXJmbG93IiwidGV4dE92ZXJmbG93IiwiZm9ybWF0RmlsdGVyTmFtZSIsImN1cnNvciIsIlByb3BlcnR5RmlsdGVycyIsInByb3BlcnR5RmlsdGVycyIsImNsYXNzTmFtZSIsInN0eWxlIiwib25DaGFuZ2UiLCJwYWdlS2V5IiwicHJvcGVydHlGaWx0ZXJMb2dpYyIsInBhZGRpbmciLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwiUHJvcGVydHlWYWx1ZSIsInByb3BzIiwic3RhdGUiLCJpbnB1dCIsImxvYWRQcm9wZXJ0eVZhbHVlcyIsImRlYm91bmNlIiwiYmluZCIsInJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiY2FsbGJhY2siLCJwcm9wZXJ0eUtleSIsImFwaSIsImdldCIsInRoZW4iLCJwcm9wVmFsdWVzIiwicHJvcGVydHkiLCJuYW1lIiwib25TZXQiLCJpc0VkaXRpbmciLCJpbnB1dFZhbHVlIiwib3V0Iiwic2V0U3RhdGUiLCJzZWxlY3QiLCJibHVyIiwiYWN0aW9uTWV0YSIsImFjdGlvbiIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJhbnkiLCJmdW5jIiwia2VhIiwiYWN0aW9ucyIsImxvYWRFdmVudFByb3BlcnRpZXMiLCJzZXRQcm9wZXJ0aWVzIiwidXBkYXRlIiwic2V0RmlsdGVycyIsIm5ld0ZpbHRlciIsImxvYWRlcnMiLCJsb2FkUGVvcGxlUHJvcGVydGllcyIsInJlZHVjZXJzIiwibG9hZFBlb3BsZVByb3BlcnRpZXNTdWNjZXNzIiwiXyIsIm5ld0ZpbHRlcnMiLCJuZXdTdGF0ZSIsImZpbHRlciIsImkiLCJsaXN0ZW5lcnMiLCJkaWN0IiwicmVkdWNlIiwicmVzdWx0Iiwicm91dGVyIiwic2VhcmNoUGFyYW1zIiwicGF0aG5hbWUiLCJsb2NhdGlvbiIsImYiLCJvYmplY3RzRXF1YWwiLCJwdXNoIiwidXJsVG9BY3Rpb24iLCJlcnJvciIsIm1hcHBlZEZpbHRlcnMiLCJldmVudHMiLCJhZnRlck1vdW50IiwidXNlckxvZ2ljIiwiZXZlbnRQcm9wZXJ0aWVzIiwidXVpZCIsInJlcGxhY2UiLCJjIiwiY3J5cHRvIiwiZ2V0UmFuZG9tVmFsdWVzIiwiVWludDhBcnJheSIsInRvU3RyaW5nIiwidG9QYXJhbXMiLCJvYmoiLCJoYW5kbGVWYWwiLCJ2YWwiLCJfaXNBTW9tZW50T2JqZWN0IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZm9ybWF0IiwiSlNPTiIsInN0cmluZ2lmeSIsImpvaW4iLCJmcm9tUGFyYW1zIiwid2luZG93Iiwic2VhcmNoIiwic2xpY2UiLCJhIiwiYiIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvbG9ycyIsInBlcmNlbnRhZ2UiLCJkaXZpc2lvbiIsInRvTG9jYWxlU3RyaW5nIiwidW5kZWZpbmVkIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiTG9hZGluZyIsIlRhYmxlUm93TG9hZGluZyIsImNvbFNwYW4iLCJhc092ZXJsYXkiLCJ0ZXh0QWxpZ24iLCJDbG9zZUJ1dHRvbiIsIkNhcmQiLCJ0aXRsZSIsImNoaWxkcmVuIiwiRGVsZXRlV2l0aFVuZG8iLCJkZWxldGVXaXRoVW5kbyIsInVuZG8iLCJvYmplY3QiLCJpZCIsImRlbGV0ZWQiLCJyZXNwb25zZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRvYXN0IiwidG9hc3RJZCIsInNoYXBlIiwibnVtYmVyIiwiY29udHJvbCIsImJhc2UiLCJoZWlnaHQiLCJtaW5IZWlnaHQiLCJpbmRpY2F0b3JzQ29udGFpbmVyIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJvcGFjaXR5IiwidmFsdWVDb250YWluZXIiLCJtYXJnaW5Ub3AiLCJvcHRpb24iLCJ3YWl0IiwiaW1tZWRpYXRlIiwidGltZW91dCIsImNvbnRleHQiLCJhcmdzIiwiYXJndW1lbnRzIiwibGF0ZXIiLCJhcHBseSIsImNhbGxOb3ciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJleGFjdCIsImlzX25vdCIsImljb250YWlucyIsIm5vdF9pY29udGFpbnMiLCJndCIsImx0Iiwib3BlcmF0b3JFbnRyaWVzIiwicmV2ZXJzZSIsInN0ciIsImluY2x1ZGVzIiwiZGVsZXRlUGVyc29uRGF0YSIsInBlcnNvbiIs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Q0FBZTJFLElBQWYsTUFBeUI1RSxJQUFJLENBQUNDLFNBQUwsQ0FBZTRFLElBQWYsQ0FBekM7QUFBQSxDQUFyQixDIiwiZmlsZSI6ImFjdGlvbn5lZGl0RnVubmVsfmV2ZW50c35mdW5uZWx+bGl2ZUFjdGlvbnN+cGVvcGxlfnBlcnNvbn50cmVuZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCdcbmltcG9ydCB7IHNlbGVjdFN0eWxlLCBvcGVyYXRvck1hcCB9IGZyb20gJ2xpYi91dGlscydcbmltcG9ydCB7IFByb3BlcnR5VmFsdWUgfSBmcm9tICcuL1Byb3BlcnR5VmFsdWUnXG5pbXBvcnQgeyB1c2VWYWx1ZXMsIHVzZUFjdGlvbnMgfSBmcm9tICdrZWEnXG5cbmNvbnN0IG9wZXJhdG9yT3B0aW9ucyA9IE9iamVjdC5lbnRyaWVzKG9wZXJhdG9yTWFwKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKHtcbiAgICBsYWJlbDogdmFsdWUsXG4gICAgdmFsdWU6IGtleSxcbn0pKVxuXG5leHBvcnQgZnVuY3Rpb24gUHJvcGVydHlGaWx0ZXIoeyBpbmRleCwgZW5kcG9pbnQsIG9uQ29tcGxldGUsIGxvZ2ljIH0pIHtcbiAgICBjb25zdCB7IHByb3BlcnRpZXMsIGZpbHRlcnMgfSA9IHVzZVZhbHVlcyhsb2dpYylcbiAgICBjb25zdCB7IHNldEZpbHRlciwgcmVtb3ZlIH0gPSB1c2VBY3Rpb25zKGxvZ2ljKVxuICAgIGxldCBpdGVtID0gZmlsdGVyc1tpbmRleF1cbiAgICBsZXQga2V5ID0gT2JqZWN0LmtleXMoaXRlbSlbMF0gPyBPYmplY3Qua2V5cyhpdGVtKVswXS5zcGxpdCgnX18nKSA6IFtdXG4gICAgbGV0IHZhbHVlID0gT2JqZWN0LnZhbHVlcyhpdGVtKVswXVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luOiAnMC41cmVtIC0xNXB4JywgbWluV2lkdGg6IGtleVswXSA/IDcwMCA6IDIwMCB9fT5cbiAgICAgICAgICAgIHtwcm9wZXJ0aWVzICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17a2V5WzBdID8gJ2NvbC00JyA6ICdjb2wnfT5cbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cHJvcGVydGllc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtbeyBsYWJlbDoga2V5WzBdLCB2YWx1ZToga2V5WzBdIH1dfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nPXshcHJvcGVydGllc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJvcGVydHkga2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtpdGVtID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZSArIChrZXlbMV0gPyAnX18nICsga2V5WzFdIDogJycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlICE9PSBrZXlbMF0gPyAnJyA6IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzZWxlY3RTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17IWtleVswXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5NZW51T25Gb2N1cz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHtrZXlbMF0gJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTMgcGwtMFwiPlxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtvcGVyYXRvck9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IG9wZXJhdG9yTWFwW2tleVsxXV0gfHwgJz0gZXF1YWxzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGtleVsxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJvcGVydHkga2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvcGVyYXRvciA9PiBzZXRGaWx0ZXIoaW5kZXgsIGtleVswXSArICdfXycgKyBvcGVyYXRvci52YWx1ZSwgdmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzZWxlY3RTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7a2V5WzBdICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC01IHBsLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPFByb3BlcnR5VmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZHBvaW50PXtlbmRwb2ludH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17T2JqZWN0LmtleXMoaXRlbSlbMF19XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleT17T2JqZWN0LmtleXMoaXRlbSlbMF19XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblNldD17KGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGaWx0ZXIoaW5kZXgsIGtleSwgdmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7KGtleVsxXSA9PT0gJ2d0JyB8fCBrZXlbMV0gPT09ICdsdCcpICYmIGlzTmFOKHZhbHVlKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlZhbHVlIG5lZWRzIHRvIGJlIGEgbnVtYmVyLiBUcnkgXCJlcXVhbHNcIiBvciBcImNvbnRhaW5zXCIgaW5zdGVhZC48L3A+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb3BlcnR5RmlsdGVyIH0gZnJvbSAnLi9Qcm9wZXJ0eUZpbHRlcidcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnXG5pbXBvcnQgeyB1c2VWYWx1ZXMsIHVzZUFjdGlvbnMgfSBmcm9tICdrZWEnXG5pbXBvcnQgeyBwcm9wZXJ0eUZpbHRlckxvZ2ljIH0gZnJvbSAnLi9wcm9wZXJ0eUZpbHRlckxvZ2ljJ1xuaW1wb3J0IHsgUG9wb3ZlciwgUm93IH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IENsb3NlQnV0dG9uLCBmb3JtYXRGaWx0ZXJOYW1lIH0gZnJvbSAnbGliL3V0aWxzJ1xuXG5mdW5jdGlvbiBGaWx0ZXJSb3coeyBlbmRwb2ludCwgaXRlbSwgaW5kZXgsIGZpbHRlcnMsIGxvZ2ljIH0pIHtcbiAgICBjb25zdCB7IHJlbW92ZSB9ID0gdXNlQWN0aW9ucyhsb2dpYylcbiAgICBsZXQgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBsZXQgaGFuZGxlVmlzaWJsZUNoYW5nZSA9IHZpc2libGUgPT4ge1xuICAgICAgICBpZiAoIXZpc2libGUgJiYgT2JqZWN0LmtleXMoaXRlbSkubGVuZ3RoID49IDAgJiYgIWl0ZW1bT2JqZWN0LmtleXMoaXRlbSlbMF1dKSB7XG4gICAgICAgICAgICByZW1vdmUoaW5kZXgpXG4gICAgICAgIH1cbiAgICAgICAgc2V0T3Blbih2aXNpYmxlKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxSb3cgYWxpZ249XCJtaWRkbGVcIiBjbGFzc05hbWU9XCJtdC0yIG1iLTJcIj5cbiAgICAgICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgICAgICAgdHJpZ2dlcj1cImNsaWNrXCJcbiAgICAgICAgICAgICAgICBvblZpc2libGVDaGFuZ2U9e2hhbmRsZVZpc2libGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgZGVmYXVsdFZpc2libGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIHZpc2libGU9e29wZW59XG4gICAgICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tTGVmdFwiXG4gICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgIDxQcm9wZXJ0eUZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZHBvaW50PXtlbmRwb2ludCB8fCAnZXZlbnQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZT17KCkgPT4gc2V0T3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dpYz17bG9naWN9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhpdGVtKS5sZW5ndGggIT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3sgbWF4V2lkdGg6ICc4NSUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdEZpbHRlck5hbWUoT2JqZWN0LmtleXMoaXRlbSlbMF0pICsgaXRlbVtPYmplY3Qua2V5cyhpdGVtKVswXV19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRlZmF1bHRcIiBzaGFwZT1cInJvdW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7J05ldyBGaWx0ZXInfVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAge2luZGV4ICE9PSBmaWx0ZXJzLmxlbmd0aCAtIDEgJiYgKFxuICAgICAgICAgICAgICAgIDxDbG9zZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0xXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlKGluZGV4KVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgZmxvYXQ6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L1Jvdz5cbiAgICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9wZXJ0eUZpbHRlcnMoeyBlbmRwb2ludCwgcHJvcGVydHlGaWx0ZXJzLCBjbGFzc05hbWUsIHN0eWxlLCBvbkNoYW5nZSwgcGFnZUtleSB9KSB7XG4gICAgY29uc3QgbG9naWMgPSBwcm9wZXJ0eUZpbHRlckxvZ2ljKHsgcHJvcGVydHlGaWx0ZXJzLCBlbmRwb2ludCwgb25DaGFuZ2UsIHBhZ2VLZXkgfSlcbiAgICBjb25zdCB7IGZpbHRlcnMgfSA9IHVzZVZhbHVlcyhsb2dpYylcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lIHx8ICdjb2wtOCd9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMnJlbScsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZScsXG4gICAgICAgICAgICAgICAgc3R5bGUsXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgIHtmaWx0ZXJzICYmXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcnMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlsdGVyUm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXggPT09IGZpbHRlcnMubGVuZ3RoIC0gMSA/IGluZGV4IDogYCR7aW5kZXh9XyR7T2JqZWN0LmtleXMoaXRlbSlbMF19YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9naWM9e2xvZ2ljfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnM9e2ZpbHRlcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHBvaW50PXtlbmRwb2ludH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uL2FwaSdcbmltcG9ydCBBc3luY0NyZWF0YWJsZVNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QvYXN5bmMtY3JlYXRhYmxlL2Rpc3QvcmVhY3Qtc2VsZWN0LmVzbSdcbmltcG9ydCB7IHNlbGVjdFN0eWxlLCBkZWJvdW5jZSB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5leHBvcnQgY2xhc3MgUHJvcGVydHlWYWx1ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGlucHV0OiBwcm9wcy52YWx1ZSB9XG4gICAgICAgIHRoaXMubG9hZFByb3BlcnR5VmFsdWVzID0gZGVib3VuY2UodGhpcy5sb2FkUHJvcGVydHlWYWx1ZXMuYmluZCh0aGlzKSwgMjUwKVxuICAgICAgICB0aGlzLnJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgfVxuICAgIGxvYWRQcm9wZXJ0eVZhbHVlcyh2YWx1ZSwgY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IGtleSA9IHRoaXMucHJvcHMucHJvcGVydHlLZXkuc3BsaXQoJ19fJylbMF1cbiAgICAgICAgYXBpLmdldCgnYXBpLycgKyB0aGlzLnByb3BzLmVuZHBvaW50ICsgJy92YWx1ZXMvP2tleT0nICsga2V5ICsgKHZhbHVlID8gJyZ2YWx1ZT0nICsgdmFsdWUgOiAnJykpLnRoZW4oXG4gICAgICAgICAgICBwcm9wVmFsdWVzID0+XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soXG4gICAgICAgICAgICAgICAgICAgIHByb3BWYWx1ZXMubWFwKHByb3BlcnR5ID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogcHJvcGVydHkubmFtZSA/IHByb3BlcnR5Lm5hbWUgOiAnKGVtcHR5KScsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcGVydHkubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgcHJvcGVydHlLZXksIG9uU2V0LCB2YWx1ZSB9ID0gdGhpcy5wcm9wc1xuICAgICAgICBsZXQgeyBpc0VkaXRpbmcsIGlucHV0IH0gPSB0aGlzLnN0YXRlXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3BhbiByZWY9e3RoaXMucmVmfSBjbGFzc05hbWU9XCJwcm9wZXJ0eS12YWx1ZVwiPlxuICAgICAgICAgICAgICAgIDxBc3luY0NyZWF0YWJsZVNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBsb2FkT3B0aW9ucz17dGhpcy5sb2FkUHJvcGVydHlWYWx1ZXN9XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBjYWNoZU9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0Q3JlYXRlTGFiZWw9e2lucHV0VmFsdWUgPT4gJ1NwZWNpZnk6ICcgKyBpbnB1dFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBhbGxvd0NyZWF0ZVdoaWxlTG9hZGluZz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlT3B0aW9uUG9zaXRpb249XCJmaXJzdFwiXG4gICAgICAgICAgICAgICAgICAgIGtleT17cHJvcGVydHlLZXl9IC8vIGZvcmNlcyBhIHJlbG9hZCBvZiB0aGUgY29tcG9uZW50IHdoZW4gdGhlIHByb3BlcnR5IGNoYW5nZXNcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcm9wZXJ0eSB2YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAyMDAgfX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3sgbGFiZWw6IHZhbHVlLCB2YWx1ZTogdmFsdWUgfX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e291dCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvblNldChwcm9wZXJ0eUtleSwgb3V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0OiBvdXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0LmJsdXIoKVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXM9eyF2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzZWxlY3RTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QgPSByZWZcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHNlcmllcyBvZiBoYWNrcyB0byBtYWtlIHRoZSB0ZXh0IGVkaXRhYmxlXG4gICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e2lzRWRpdGluZyA/IHRoaXMuc3RhdGUuaW5wdXQgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzRWRpdGluZzogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17KGlucHV0LCBhY3Rpb25NZXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aW9uTWV0YS5hY3Rpb24gPT09ICdpbnB1dC1jaGFuZ2UnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5pbnB1dFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIClcbiAgICB9XG59XG5Qcm9wZXJ0eVZhbHVlLnByb3BUeXBlcyA9IHtcbiAgICBwcm9wZXJ0eUtleTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgb25TZXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG4iLCJpbXBvcnQgeyBrZWEgfSBmcm9tICdrZWEnXG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uLy4uL2xpYi9hcGknXG5pbXBvcnQgeyB1c2VyTG9naWMgfSBmcm9tICdzY2VuZXMvdXNlckxvZ2ljJ1xuaW1wb3J0IHsgb2JqZWN0c0VxdWFsIH0gZnJvbSAnbGliL3V0aWxzJ1xuaW1wb3J0IHsgcm91dGVyIH0gZnJvbSAna2VhLXJvdXRlcidcblxuZXhwb3J0IGNvbnN0IHByb3BlcnR5RmlsdGVyTG9naWMgPSBrZWEoe1xuICAgIGtleTogcHJvcHMgPT4gcHJvcHMucGFnZUtleSxcblxuICAgIGFjdGlvbnM6ICgpID0+ICh7XG4gICAgICAgIGxvYWRFdmVudFByb3BlcnRpZXM6IHRydWUsXG4gICAgICAgIHNldFByb3BlcnRpZXM6IHByb3BlcnRpZXMgPT4gKHsgcHJvcGVydGllcyB9KSxcbiAgICAgICAgdXBkYXRlOiBmaWx0ZXJzID0+ICh7IGZpbHRlcnMgfSksXG4gICAgICAgIHNldEZpbHRlcjogKGluZGV4LCBrZXksIHZhbHVlKSA9PiAoeyBpbmRleCwga2V5LCB2YWx1ZSB9KSxcbiAgICAgICAgc2V0RmlsdGVyczogZmlsdGVycyA9PiAoeyBmaWx0ZXJzIH0pLFxuICAgICAgICBuZXdGaWx0ZXI6IHRydWUsXG4gICAgICAgIHJlbW92ZTogaW5kZXggPT4gKHsgaW5kZXggfSksXG4gICAgfSksXG5cbiAgICBsb2FkZXJzOiAoKSA9PiAoe1xuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICBsb2FkUGVvcGxlUHJvcGVydGllczogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoYXdhaXQgYXBpLmdldCgnYXBpL3BlcnNvbi9wcm9wZXJ0aWVzJykpLm1hcChwcm9wZXJ0eSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogcHJvcGVydHkubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BlcnR5Lm5hbWUsXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0pLFxuXG4gICAgcmVkdWNlcnM6ICh7IGFjdGlvbnMsIHByb3BzIH0pID0+ICh7XG4gICAgICAgIHByb3BlcnRpZXM6IFtcbiAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFthY3Rpb25zLmxvYWRQZW9wbGVQcm9wZXJ0aWVzU3VjY2Vzc106IChfLCB7IHByb3BlcnRpZXMgfSkgPT4gcHJvcGVydGllcyxcbiAgICAgICAgICAgICAgICBbYWN0aW9ucy5zZXRQcm9wZXJ0aWVzXTogKF8sIHsgcHJvcGVydGllcyB9KSA9PiBwcm9wZXJ0aWVzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgZmlsdGVyczogW1xuICAgICAgICAgICAgcHJvcHMucHJvcGVydHlGaWx0ZXJzXG4gICAgICAgICAgICAgICAgPyBPYmplY3QuZW50cmllcyhwcm9wcy5wcm9wZXJ0eUZpbHRlcnMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoeyBba2V5XTogdmFsdWUgfSkpXG4gICAgICAgICAgICAgICAgOiBbXSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBbYWN0aW9ucy5zZXRGaWx0ZXJdOiAoc3RhdGUsIHsgaW5kZXgsIGtleSwgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdGaWx0ZXJzID0gWy4uLnN0YXRlXVxuICAgICAgICAgICAgICAgICAgICBuZXdGaWx0ZXJzW2luZGV4XSA9IHsgW2tleV06IHZhbHVlIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld0ZpbHRlcnNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFthY3Rpb25zLnNldEZpbHRlcnNdOiAoXywgeyBmaWx0ZXJzIH0pID0+IGZpbHRlcnMsXG4gICAgICAgICAgICAgICAgW2FjdGlvbnMubmV3RmlsdGVyXTogc3RhdGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLCB7fV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFthY3Rpb25zLnJlbW92ZV06IChzdGF0ZSwgeyBpbmRleCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gc3RhdGUuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBpbmRleClcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1N0YXRlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt7fV1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMobmV3U3RhdGVbbmV3U3RhdGUubGVuZ3RoIC0gMV0pLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5uZXdTdGF0ZSwge31dXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSksXG5cbiAgICBsaXN0ZW5lcnM6ICh7IGFjdGlvbnMsIHByb3BzLCB2YWx1ZXMgfSkgPT4gKHtcbiAgICAgICAgLy8gT25seSBzZW5kIHVwZGF0ZSBpZiB2YWx1ZSBpcyBzZXQgdG8gc29tZXRoaW5nXG4gICAgICAgIFthY3Rpb25zLnNldEZpbHRlcl06ICh7IHZhbHVlIH0pID0+IHZhbHVlICYmIGFjdGlvbnMudXBkYXRlKCksXG4gICAgICAgIFthY3Rpb25zLnJlbW92ZV06ICgpID0+IGFjdGlvbnMudXBkYXRlKCksXG4gICAgICAgIFthY3Rpb25zLnVwZGF0ZV06ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMuZmlsdGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5uZXdGaWx0ZXIoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMub25DaGFuZ2Uoe30pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh2YWx1ZXMuZmlsdGVyc1t2YWx1ZXMuZmlsdGVycy5sZW5ndGggLSAxXSkubGVuZ3RoICE9PSAwKSBhY3Rpb25zLm5ld0ZpbHRlcigpXG4gICAgICAgICAgICAgICAgbGV0IGRpY3QgPSB2YWx1ZXMuZmlsdGVycy5yZWR1Y2UoKHJlc3VsdCwgaXRlbSkgPT4gKHsgLi4ucmVzdWx0LCAuLi5pdGVtIH0pKVxuICAgICAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKGRpY3QpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZmlsdGVycyB9ID0gdmFsdWVzXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwcm9wZXJ0aWVzOiBfLCAuLi5zZWFyY2hQYXJhbXMgfSA9IHJvdXRlci52YWx1ZXMuc2VhcmNoUGFyYW1zXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcm91dGVyLnZhbHVlcy5sb2NhdGlvblxuXG4gICAgICAgICAgICAgICAgaWYgKGZpbHRlcnMuZmlsdGVyKGYgPT4gT2JqZWN0LmtleXMoZikubGVuZ3RoID4gMCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzZWFyY2hQYXJhbXMucHJvcGVydGllcyA9IGZpbHRlcnMucmVkdWNlKChyZXN1bHQsIGl0ZW0pID0+ICh7IC4uLnJlc3VsdCwgLi4uaXRlbSB9KSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIW9iamVjdHNFcXVhbChyb3V0ZXIudmFsdWVzLnNlYXJjaFBhcmFtcywgc2VhcmNoUGFyYW1zKSkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZXIuYWN0aW9ucy5wdXNoKHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0pLFxuXG4gICAgdXJsVG9BY3Rpb246ICh7IGFjdGlvbnMsIHZhbHVlcywgcHJvcHMgfSkgPT4gKHtcbiAgICAgICAgJyonOiAoXywgeyBwcm9wZXJ0aWVzIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZmlsdGVyc1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJzID0gdmFsdWVzLmZpbHRlcnNcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gc2luY2UgdGhpcyBpcyBhIGNhdGNoLWFsbCByb3V0ZSwgdGhpcyBjb2RlIG1pZ2h0IHJ1biBkdXJpbmcgb3IgYWZ0ZXIgdGhlIGxvZ2ljIHdhcyB1bm1vdW50ZWRcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBoYXZlIGFuIGVycm9yIGFjY2Vzc2luZyB0aGUgZmlsdGVyIHZhbHVlLCB0aGUgbG9naWMgaXMgZ29uZSBhbmQgd2Ugc2hvdWxkIHJldHVyblxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIW9iamVjdHNFcXVhbChwcm9wZXJ0aWVzIHx8IHt9LCBmaWx0ZXJzKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hcHBlZEZpbHRlcnMgPSBPYmplY3QuZW50cmllcyhwcm9wZXJ0aWVzIHx8IHt9KS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKHsgW2tleV06IHZhbHVlIH0pKVxuICAgICAgICAgICAgICAgIGFjdGlvbnMuc2V0RmlsdGVycyhbLi4ubWFwcGVkRmlsdGVycywge31dKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0pLFxuXG4gICAgZXZlbnRzOiAoeyBhY3Rpb25zLCBwcm9wcyB9KSA9PiAoe1xuICAgICAgICBhZnRlck1vdW50OiAoKSA9PiB7XG4gICAgICAgICAgICBhY3Rpb25zLm5ld0ZpbHRlcigpXG4gICAgICAgICAgICBpZiAocHJvcHMuZW5kcG9pbnQgPT09ICdwZXJzb24nKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9ucy5sb2FkUGVvcGxlUHJvcGVydGllcygpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFjdGlvbnMuc2V0UHJvcGVydGllcyh1c2VyTG9naWMudmFsdWVzLmV2ZW50UHJvcGVydGllcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9KSxcbn0pXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgYXBpIGZyb20gJy4vYXBpJ1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFNwaW4gfSBmcm9tICdhbnRkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXVpZCgpIHtcbiAgICByZXR1cm4gKFsxZTddICsgLTFlMyArIC00ZTMgKyAtOGUzICsgLTFlMTEpLnJlcGxhY2UoL1swMThdL2csIGMgPT5cbiAgICAgICAgKGMgXiAoY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheSgxKSlbMF0gJiAoMTUgPj4gKGMgLyA0KSkpKS50b1N0cmluZygxNilcbiAgICApXG59XG5cbmV4cG9ydCBsZXQgdG9QYXJhbXMgPSBvYmogPT4ge1xuICAgIGxldCBoYW5kbGVWYWwgPSB2YWwgPT4ge1xuICAgICAgICBpZiAodmFsLl9pc0FNb21lbnRPYmplY3QpIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsLmZvcm1hdCgnWVlZWS1NTS1ERCcpKVxuICAgICAgICB2YWwgPSB0eXBlb2YgdmFsID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KHZhbCkgOiB2YWxcbiAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpXG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhvYmopXG4gICAgICAgIC5maWx0ZXIoKFtrZXksIHZhbF0pID0+IHZhbClcbiAgICAgICAgLm1hcCgoW2tleSwgdmFsXSkgPT4gYCR7a2V5fT0ke2hhbmRsZVZhbCh2YWwpfWApXG4gICAgICAgIC5qb2luKCcmJylcbn1cbmV4cG9ydCBsZXQgZnJvbVBhcmFtcyA9ICgpID0+XG4gICAgd2luZG93LmxvY2F0aW9uLnNlYXJjaCAhPSAnJ1xuICAgICAgICA/IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2hcbiAgICAgICAgICAgICAgLnNsaWNlKDEpXG4gICAgICAgICAgICAgIC5zcGxpdCgnJicpXG4gICAgICAgICAgICAgIC5yZWR1Y2UoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgIGIgPSBiLnNwbGl0KCc9JylcbiAgICAgICAgICAgICAgICAgIGFbYlswXV0gPSBkZWNvZGVVUklDb21wb25lbnQoYlsxXSlcbiAgICAgICAgICAgICAgICAgIHJldHVybiBhXG4gICAgICAgICAgICAgIH0sIHt9KVxuICAgICAgICA6IHt9XG5cbmV4cG9ydCBsZXQgY29sb3JzID0gWydzdWNjZXNzJywgJ3NlY29uZGFyeScsICd3YXJuaW5nJywgJ3ByaW1hcnknLCAnZGFuZ2VyJywgJ2luZm8nLCAnZGFyaycsICdsaWdodCddXG5leHBvcnQgbGV0IHBlcmNlbnRhZ2UgPSBkaXZpc2lvbiA9PlxuICAgIGRpdmlzaW9uXG4gICAgICAgID8gZGl2aXNpb24udG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XG4gICAgICAgICAgICAgIHN0eWxlOiAncGVyY2VudCcsXG4gICAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICAgICAgICB9KVxuICAgICAgICA6ICcnXG5cbmV4cG9ydCBsZXQgTG9hZGluZyA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctb3ZlcmxheVwiPlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICA8U3BpbiAvPlxuICAgIDwvZGl2PlxuKVxuXG5leHBvcnQgY29uc3QgVGFibGVSb3dMb2FkaW5nID0gKHsgY29sU3BhbiA9IDEsIGFzT3ZlcmxheSA9IGZhbHNlIH0pID0+IChcbiAgICA8dHIgY2xhc3NOYW1lPXthc092ZXJsYXkgPyAnbG9hZGluZy1vdmVybGF5IG92ZXItdGFibGUnIDogJyd9PlxuICAgICAgICA8dGQgY29sU3Bhbj17Y29sU3Bhbn0gc3R5bGU9e3sgcGFkZGluZzogNTAsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICA8U3BpbiAvPlxuICAgICAgICA8L3RkPlxuICAgIDwvdHI+XG4pXG5cbmV4cG9ydCBsZXQgQ2xvc2VCdXR0b24gPSBwcm9wcyA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNwYW4gey4uLnByb3BzfSBjbGFzc05hbWU9eydjbG9zZSBjdXJzb3ItcG9pbnRlciAnICsgcHJvcHMuY2xhc3NOYW1lfSBzdHlsZT17eyAuLi5wcm9wcy5zdHlsZSB9fT5cbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXJkKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiB7Li4ucHJvcHN9IGNsYXNzTmFtZT17J2NhcmQgJyArIHByb3BzLmNsYXNzTmFtZX0gc3R5bGU9e3Byb3BzLnN0eWxlfSB0aXRsZT1cIlwiPlxuICAgICAgICAgICAge3Byb3BzLnRpdGxlICYmIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj57cHJvcHMudGl0bGV9PC9kaXY+fVxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBsZXQgRGVsZXRlV2l0aFVuZG8gPSBwcm9wcyA9PiB7XG4gICAgbGV0IGRlbGV0ZVdpdGhVbmRvID0gdW5kbyA9PiB7XG4gICAgICAgIGFwaS51cGRhdGUoJ2FwaS8nICsgcHJvcHMuZW5kcG9pbnQgKyAnLycgKyBwcm9wcy5vYmplY3QuaWQsIHtcbiAgICAgICAgICAgIC4uLnByb3BzLm9iamVjdCxcbiAgICAgICAgICAgIGRlbGV0ZWQ6IHVuZG8gPyBmYWxzZSA6IHRydWUsXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcHJvcHMuY2FsbGJhY2soKVxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIHshdW5kbyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPHN0cm9uZz57cHJvcHMub2JqZWN0Lm5hbWV9PC9zdHJvbmc+XCIgZGVsZXRlZC57JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVdpdGhVbmRvKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbGljayBoZXJlIHRvIHVuZG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EZWxldGUgdW4tZG9uZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHRvYXN0KHJlc3BvbnNlLCB7IHRvYXN0SWQ6ICdkZWxldGUtaXRlbS0nICsgcHJvcHMub2JqZWN0LmlkIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIGRlbGV0ZVdpdGhVbmRvKClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIHN0eWxlPXtwcm9wcy5zdHlsZX1cbiAgICAgICAgPlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2E+XG4gICAgKVxufVxuRGVsZXRlV2l0aFVuZG8ucHJvcFR5cGVzID0ge1xuICAgIGVuZHBvaW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgb2JqZWN0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgfSkuaXNSZXF1aXJlZCxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG59XG5cbmV4cG9ydCBsZXQgc2VsZWN0U3R5bGUgPSB7XG4gICAgY29udHJvbDogYmFzZSA9PiAoe1xuICAgICAgICAuLi5iYXNlLFxuICAgICAgICBoZWlnaHQ6IDMxLFxuICAgICAgICBtaW5IZWlnaHQ6IDMxLFxuICAgIH0pLFxuICAgIGluZGljYXRvcnNDb250YWluZXI6IGJhc2UgPT4gKHtcbiAgICAgICAgLi4uYmFzZSxcbiAgICAgICAgaGVpZ2h0OiAzMSxcbiAgICB9KSxcbiAgICBpbnB1dDogYmFzZSA9PiAoe1xuICAgICAgICAuLi5iYXNlLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiAwLFxuICAgICAgICBwYWRkaW5nVG9wOiAwLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgfSksXG4gICAgdmFsdWVDb250YWluZXI6IGJhc2UgPT4gKHtcbiAgICAgICAgLi4uYmFzZSxcbiAgICAgICAgcGFkZGluZzogJzAgOHB4JyxcbiAgICAgICAgbWFyZ2luVG9wOiAtMixcbiAgICB9KSxcbiAgICBvcHRpb246IGJhc2UgPT4gKHtcbiAgICAgICAgLi4uYmFzZSxcbiAgICAgICAgcGFkZGluZzogJzJweCAxNXB4JyxcbiAgICB9KSxcbn1cblxuZXhwb3J0IGxldCBkZWJvdW5jZSA9IChmdW5jLCB3YWl0LCBpbW1lZGlhdGUpID0+IHtcbiAgICB2YXIgdGltZW91dFxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLFxuICAgICAgICAgICAgYXJncyA9IGFyZ3VtZW50c1xuICAgICAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsXG4gICAgICAgICAgICBpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICAgICAgICB9XG4gICAgICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdClcbiAgICAgICAgaWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSBzdHJpbmcgPT4ge1xuICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSlcbn1cblxuZXhwb3J0IGNvbnN0IG9wZXJhdG9yTWFwID0ge1xuICAgIGV4YWN0OiAnPSBlcXVhbHMnLFxuICAgIGlzX25vdDogXCLiiaAgZG9lc24ndCBlcXVhbFwiLFxuICAgIGljb250YWluczogJ+KIiyBjb250YWlucycsXG4gICAgbm90X2ljb250YWluczogXCLiiIwgZG9lc24ndCBjb250YWluXCIsXG4gICAgZ3Q6ICc+IGdyZWF0ZXIgdGhhbicsXG4gICAgbHQ6ICc8IGxvd2VyIHRoYW4nLFxufVxuXG5jb25zdCBvcGVyYXRvckVudHJpZXMgPSBPYmplY3QuZW50cmllcyhvcGVyYXRvck1hcCkucmV2ZXJzZSgpXG5cbmV4cG9ydCBjb25zdCBmb3JtYXRGaWx0ZXJOYW1lID0gc3RyID0+IHtcbiAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2Ygb3BlcmF0b3JFbnRyaWVzKSB7XG4gICAgICAgIGlmIChzdHIuaW5jbHVkZXMoa2V5KSkgcmV0dXJuIHN0ci5yZXBsYWNlKCdfXycgKyBrZXksICcnKSArIGAgJHt2YWx1ZS5zcGxpdCgnICcpWzBdfSBgXG4gICAgfVxuICAgIHJldHVybiBzdHIgKyBgICR7b3BlcmF0b3JNYXBbJ2V4YWN0J10uc3BsaXQoJyAnKVswXX0gYFxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlUGVyc29uRGF0YSA9IChwZXJzb24sIGNhbGxiYWNrKSA9PiB7XG4gICAgd2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB1c2VyPyBUaGlzIGNhbm5vdCBiZSB1bmRvbmUnKSAmJlxuICAgICAgICBhcGkuZGVsZXRlKCdhcGkvcGVyc29uLycgKyBwZXJzb24uaWQpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdG9hc3QoJ1BlcnNvbiBzdWNjZXNmdWxseSBkZWxldGVkLicpXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKClcbiAgICAgICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IG9iamVjdHNFcXVhbCA9IChvYmoxLCBvYmoyKSA9PiBKU09OLnN0cmluZ2lmeShvYmoxKSA9PT0gSlNPTi5zdHJpbmdpZnkob2JqMilcbiJdLCJzb3VyY2VSb290IjoiIn0=