(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["people"],{

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

/***/ "./frontend/src/scenes/users/Cohort.js":
/*!*********************************************!*\
  !*** ./frontend/src/scenes/users/Cohort.js ***!
  \*********************************************/
/*! exports provided: _Cohort, Cohort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Cohort", function() { return _Cohort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cohort", function() { return Cohort; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/utils */ "./frontend/src/lib/utils.js");
/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/api */ "./frontend/src/lib/api.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _CohortGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CohortGroup */ "./frontend/src/scenes/users/CohortGroup.js");
/* harmony import */ var kea_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! kea-router */ "./node_modules/kea-router/lib/index.js");
/* harmony import */ var kea_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(kea_router__WEBPACK_IMPORTED_MODULE_12__);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var _Cohort = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(_Cohort, _Component);

  var _super = _createSuper(_Cohort);

  function _Cohort(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, _Cohort);

    _this = _super.call(this, props);
    _this.state = {
      groups: window.location.search.indexOf('new_cohort') > -1 ? [{}] : [],
      id: Object(lib_utils__WEBPACK_IMPORTED_MODULE_8__["fromParams"])()['cohort'],
      name: ''
    };

    _this.fetchProperties.call(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));

    _this.fetchActions.call(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));

    _this.onSave = _this.onSave.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    if (_this.state.id) _this.fetchCohort.call(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(_Cohort, [{
    key: "fetchCohort",
    value: function fetchCohort() {
      var _this2 = this;

      lib_api__WEBPACK_IMPORTED_MODULE_9__["default"].get('api/cohort/' + this.state.id).then(function (cohort) {
        return _this2.setState(cohort);
      });
    }
  }, {
    key: "onSave",
    value: function onSave(e) {
      var _this3 = this;

      e.preventDefault();
      var cohort = {
        id: this.state.id,
        name: this.state.name,
        groups: this.state.groups
      };

      var onResponse = function onResponse(cohort) {
        _this3.props.onChange(cohort.id);

        _this3.setState({
          id: cohort.id
        });

        Object(react_toastify__WEBPACK_IMPORTED_MODULE_10__["toast"])('Cohort saved.');

        _this3.actions.push(_this3.props.location.pathname, {
          cohort: cohort.id
        });
      };

      if (this.state.id) {
        return lib_api__WEBPACK_IMPORTED_MODULE_9__["default"].update('api/cohort/' + this.state.id, cohort).then(onResponse);
      }

      lib_api__WEBPACK_IMPORTED_MODULE_9__["default"].create('api/cohort', cohort).then(onResponse);
    }
  }, {
    key: "fetchProperties",
    value: function fetchProperties() {
      var _this4 = this;

      lib_api__WEBPACK_IMPORTED_MODULE_9__["default"].get('api/person/properties').then(function (properties) {
        _this4.setState({
          properties: properties.map(function (property) {
            return {
              label: property.name,
              value: property.name
            };
          })
        });
      });
    }
  }, {
    key: "fetchActions",
    value: function fetchActions() {
      var _this5 = this;

      lib_api__WEBPACK_IMPORTED_MODULE_9__["default"].get('api/action').then(function (actions) {
        _this5.setState({
          actions: actions.results.map(function (action) {
            return {
              label: action.name,
              value: action.id
            };
          })
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var _this$state = this.state,
          groups = _this$state.groups,
          properties = _this$state.properties,
          actions = _this$state.actions,
          name = _this$state.name;
      return groups.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "btn btn-sm btn-outline-success float-right",
        style: {
          marginBottom: '1rem',
          marginLeft: 12
        },
        onClick: function onClick() {
          return _this6.setState({
            groups: [{}]
          });
        }
      }, "+ new cohort") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          maxWidth: 750
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(lib_utils__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(lib_utils__WEBPACK_IMPORTED_MODULE_8__["CloseButton"], {
          className: "float-right",
          onClick: function onClick() {
            _this6.setState({
              groups: [],
              id: false
            });

            _this6.props.onChange();

            _this6.actions.push("".concat(_this6.props.location.pathname));
          }
        }), name || 'New cohort')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        className: "card-body",
        onSubmit: this.onSave
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        style: {
          marginBottom: '1rem'
        },
        required: true,
        className: "form-control",
        autoFocus: true,
        placeholder: "Cohort name...",
        value: name,
        onChange: function onChange(e) {
          return _this6.setState({
            name: e.target.value
          });
        }
      }), groups.map(function (group, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_CohortGroup__WEBPACK_IMPORTED_MODULE_11__["CohortGroup"], {
          key: index,
          group: group,
          properties: properties,
          actions: actions,
          index: index,
          onRemove: function onRemove() {
            groups.splice(index, 1);

            _this6.setState({
              groups: groups
            });
          },
          onChange: function onChange(group) {
            groups[index] = group;

            _this6.setState({
              groups: groups
            });
          }
        });
      }).reduce(function (prev, curr) {
        return [prev, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "secondary",
          style: {
            textAlign: 'center',
            margin: 8
          }
        }, ' ', "OR", ' '), curr];
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "btn btn-outline-success btn-sm",
        style: {
          marginTop: '1rem'
        },
        type: "button",
        onClick: function onClick() {
          return _this6.setState({
            groups: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(groups), [{}])
          });
        }
      }, "New group"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "btn btn-success btn-sm float-right",
        style: {
          marginTop: '1rem'
        }
      }, "Save cohort"))));
    }
  }]);

  return _Cohort;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);
var Cohort = Object(kea_router__WEBPACK_IMPORTED_MODULE_12__["router"])(_Cohort);

/***/ }),

/***/ "./frontend/src/scenes/users/CohortGroup.js":
/*!**************************************************!*\
  !*** ./frontend/src/scenes/users/CohortGroup.js ***!
  \**************************************************/
/*! exports provided: CohortGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CohortGroup", function() { return CohortGroup; });
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
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/utils */ "./frontend/src/lib/utils.js");
/* harmony import */ var _lib_components_PropertyFilters_PropertyFilters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/components/PropertyFilters/PropertyFilters */ "./frontend/src/lib/components/PropertyFilters/PropertyFilters.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var CohortGroup = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(CohortGroup, _Component);

  var _super = _createSuper(CohortGroup);

  function CohortGroup(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CohortGroup);

    _this = _super.call(this, props);
    _this.state = {
      days: 1,
      selected: props.group.action_id && 'action' || props.group.properties && 'property'
    };
    _this.DayChoice = _this.DayChoice.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CohortGroup, [{
    key: "DayChoice",
    value: function DayChoice(props) {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.props.onChange({
            action_id: _this2.props.group.action_id,
            days: props.days
          });
        },
        type: "button",
        className: 'btn btn-sm ' + (this.props.group.days == props.days ? 'btn-secondary' : 'btn-light')
      }, props.name);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          group = _this$props.group,
          index = _this$props.index,
          properties = _this$props.properties,
          actions = _this$props.actions,
          _onChange = _this$props.onChange,
          onRemove = _this$props.onRemove;
      var selected = this.state.selected;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_lib_utils__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        title: false,
        style: {
          margin: 0
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card-body"
      }, index > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_lib_utils__WEBPACK_IMPORTED_MODULE_7__["CloseButton"], {
        className: "float-right",
        onClick: onRemove
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          height: 32
        }
      }, "User has", selected == 'action' && ' done ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "btn-group",
        style: {
          margin: '0 8px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: function onClick() {
          return _this3.setState({
            selected: 'action'
          });
        },
        type: "button",
        className: 'btn btn-sm ' + (selected == 'action' ? 'btn-secondary' : 'btn-light')
      }, "action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: function onClick() {
          return _this3.setState({
            selected: 'property'
          });
        },
        type: "button",
        className: 'btn btn-sm ' + (selected == 'property' ? 'btn-secondary' : 'btn-light')
      }, "property")), selected == 'action' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, "in the last", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "btn-group",
        style: {
          margin: '0 8px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(this.DayChoice, {
        days: 1,
        name: "day"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(this.DayChoice, {
        days: 7,
        name: "7 days"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(this.DayChoice, {
        days: 30,
        name: "month"
      })))), selected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          marginLeft: '2rem',
          minHeight: 38
        }
      }, selected == 'property' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_lib_components_PropertyFilters_PropertyFilters__WEBPACK_IMPORTED_MODULE_8__["PropertyFilters"], {
        endpoint: "person",
        pageKey: "cohort",
        className: " ",
        onChange: function onChange(properties) {
          return _onChange({
            properties: properties,
            days: group.days
          });
        },
        propertyFilters: group.properties || {},
        style: {
          margin: '1rem 0 0'
        }
      }), selected == 'action' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          marginTop: '1rem',
          width: 350
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_9__["default"], {
        options: actions,
        placeholder: "Select action...",
        onChange: function onChange(item) {
          return _onChange({
            action_id: item.value
          });
        },
        value: actions && actions.filter(function (action) {
          return action.value == group.action_id;
        })
      })))));
    }
  }]);

  return CohortGroup;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ }),

/***/ "./frontend/src/scenes/users/People.js":
/*!*********************************************!*\
  !*** ./frontend/src/scenes/users/People.js ***!
  \*********************************************/
/*! exports provided: People */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "People", function() { return People; });
/* harmony import */ var antd_es_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/button/style/css */ "./node_modules/antd/es/button/style/css.js");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/button */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/api */ "./frontend/src/lib/api.js");
/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/utils */ "./frontend/src/lib/utils.js");
/* harmony import */ var _Cohort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Cohort */ "./frontend/src/scenes/users/Cohort.js");
/* harmony import */ var _PeopleTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PeopleTable */ "./frontend/src/scenes/users/PeopleTable.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");









function People() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      people = _useState4[0],
      setPeople = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState5, 2),
      search = _useState6[0],
      setSearch = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(Object(lib_utils__WEBPACK_IMPORTED_MODULE_5__["fromParams"])()['cohort']),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState7, 2),
      cohortId = _useState8[0],
      setCohortId = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState9, 2),
      pagination = _useState10[0],
      setPagination = _useState10[1];

  function fetchPeople(_ref) {
    var url = _ref.url,
        scrollTop = _ref.scrollTop,
        search = _ref.search;
    setLoading(true);
    if (scrollTop) document.querySelector('section.ant-layout > .content').parentNode.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    lib_api__WEBPACK_IMPORTED_MODULE_4__["default"].get(url ? url : "api/person/?".concat(!!search ? 'search=' + search : '').concat(cohortId ? '&cohort=' + cohortId : '')).then(function (data) {
      setPeople(data.results);
      setLoading(false);
      setPagination({
        next: data.next,
        previous: data.previous
      });
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    fetchPeople({});
  }, [cohortId]);
  var exampleEmail = people && people.map(function (person) {
    return person.properties.email;
  }).filter(function (d) {
    return d;
  })[0] || 'example@gmail.com';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", null, "Users"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Cohort__WEBPACK_IMPORTED_MODULE_6__["Cohort"], {
    onChange: setCohortId
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "float-right",
    type: "default",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["ExportOutlined"], null),
    href: '/api/person.csv' + (cohortId ? '?cohort=' + cohortId : '')
  }, "Export"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    className: "form-control",
    name: "search",
    autoFocus: true,
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      return e.keyCode === 13 && fetchPeople({
        search: search
      });
    },
    placeholder: people && 'Try ' + exampleEmail + ' or has:email',
    style: {
      maxWidth: 400
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_PeopleTable__WEBPACK_IMPORTED_MODULE_7__["PeopleTable"], {
    people: people,
    loading: loading,
    actions: true,
    onChange: function onChange() {
      return fetchPeople({
        search: search
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      margin: '3rem auto 10rem',
      width: 200
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "link",
    disabled: !pagination.previous,
    onClick: function onClick() {
      return fetchPeople({
        url: pagination.previous,
        scrollTop: true
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["LeftOutlined"], {
    style: {
      verticalAlign: 'initial'
    }
  }), " Previous"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "link",
    disabled: !pagination.next,
    onClick: function onClick() {
      return fetchPeople({
        url: pagination.next,
        scrollTop: true
      });
    }
  }, "Next ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["RightOutlined"], {
    style: {
      verticalAlign: 'initial'
    }
  }))));
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

/***/ }),

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

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvbGliL2NvbXBvbmVudHMvUHJvcGVydGllc1RhYmxlLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9zY2VuZXMvdXNlcnMvQ29ob3J0LmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9zY2VuZXMvdXNlcnMvQ29ob3J0R3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL3NjZW5lcy91c2Vycy9QZW9wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL3NjZW5lcy91c2Vycy9QZW9wbGVUYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyJdLCJuYW1lcyI6WyJQcm9wZXJ0aWVzVGFibGUiLCJwcm9wZXJ0aWVzIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiaXRlbSIsImluZGV4IiwiT2JqZWN0Iiwia2V5cyIsInNvcnQiLCJrZXkiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJpc1JlcXVpcmVkIiwiX0NvaG9ydCIsInByb3BzIiwic3RhdGUiLCJncm91cHMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsImluZGV4T2YiLCJpZCIsImZyb21QYXJhbXMiLCJuYW1lIiwiZmV0Y2hQcm9wZXJ0aWVzIiwiY2FsbCIsImZldGNoQWN0aW9ucyIsIm9uU2F2ZSIsImJpbmQiLCJmZXRjaENvaG9ydCIsImFwaSIsImdldCIsInRoZW4iLCJjb2hvcnQiLCJzZXRTdGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9uUmVzcG9uc2UiLCJvbkNoYW5nZSIsInRvYXN0IiwiYWN0aW9ucyIsInB1c2giLCJwYXRobmFtZSIsInVwZGF0ZSIsImNyZWF0ZSIsInByb3BlcnR5IiwibGFiZWwiLCJ2YWx1ZSIsInJlc3VsdHMiLCJhY3Rpb24iLCJsZW5ndGgiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MZWZ0IiwibWF4V2lkdGgiLCJ0YXJnZXQiLCJncm91cCIsInNwbGljZSIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwidGV4dEFsaWduIiwibWFyZ2luIiwibWFyZ2luVG9wIiwiQ29tcG9uZW50IiwiQ29ob3J0Iiwicm91dGVyIiwiQ29ob3J0R3JvdXAiLCJkYXlzIiwic2VsZWN0ZWQiLCJhY3Rpb25faWQiLCJEYXlDaG9pY2UiLCJvblJlbW92ZSIsImhlaWdodCIsIm1pbkhlaWdodCIsIndpZHRoIiwiZmlsdGVyIiwiUGVvcGxlIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInBlb3BsZSIsInNldFBlb3BsZSIsInNldFNlYXJjaCIsImNvaG9ydElkIiwic2V0Q29ob3J0SWQiLCJwYWdpbmF0aW9uIiwic2V0UGFnaW5hdGlvbiIsImZldGNoUGVvcGxlIiwidXJsIiwic2Nyb2xsVG9wIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50Tm9kZSIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJkYXRhIiwibmV4dCIsInByZXZpb3VzIiwidXNlRWZmZWN0IiwiZXhhbXBsZUVtYWlsIiwicGVyc29uIiwiZW1haWwiLCJkIiwia2V5Q29kZSIsInZlcnRpY2FsQWxpZ24iLCJQZW9wbGVUYWJsZSIsImNvbHVtbnMiLCJ0aXRsZSIsImRhdGFJbmRleCIsInJlbmRlciIsIl8iLCJlbmNvZGVVUklDb21wb25lbnQiLCJkaXN0aW5jdF9pZHMiLCJkZWxldGVQZXJzb25EYXRhIiwicGFnZVNpemUiLCJoaWRlT25TaW5nbGVQYWdlIiwiZXhwYW5kZWRSb3dSZW5kZXIiLCJyb3dFeHBhbmRhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLFNBQVNBLGVBQVQsT0FBeUM7QUFBQSxNQUFkQyxVQUFjLFFBQWRBLFVBQWM7QUFDNUMsTUFBSUMsS0FBSyxDQUFDQyxPQUFOLENBQWNGLFVBQWQsQ0FBSixFQUNJLG9CQUNJLHdFQUNLQSxVQUFVLENBQUNHLEdBQVgsQ0FBZSxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSx3QkFDWjtBQUFNLFNBQUcsRUFBRUE7QUFBWCxvQkFDSSwyREFBQyxlQUFEO0FBQWlCLGdCQUFVLEVBQUVEO0FBQTdCLE1BREosZUFFSSxzRUFGSixDQURZO0FBQUEsR0FBZixDQURMLENBREo7QUFVSixNQUFJSixVQUFVLFlBQVlNLE1BQTFCLEVBQ0ksb0JBQ0k7QUFBTyxhQUFTLEVBQUM7QUFBakIsa0JBQ0ksMEVBQ0tBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUCxVQUFaLEVBQ0lRLElBREosR0FFSUwsR0FGSixDQUVRLFVBQUFNLEdBQUc7QUFBQSx3QkFDSjtBQUFJLFNBQUcsRUFBRUE7QUFBVCxvQkFDSSx1RUFBS0EsR0FBTCxDQURKLGVBRUksb0ZBQ0ksMkRBQUMsZUFBRDtBQUFpQixnQkFBVSxFQUFFVCxVQUFVLENBQUNTLEdBQUQ7QUFBdkMsTUFESixDQUZKLENBREk7QUFBQSxHQUZYLENBREwsQ0FESixDQURKO0FBZ0JKLE1BQUlULFVBQVUsS0FBSyxJQUFuQixFQUF5QixPQUFPLE1BQVA7QUFDekIsTUFBSUEsVUFBVSxLQUFLLEtBQW5CLEVBQTBCLE9BQU8sT0FBUDtBQUMxQixTQUFPQSxVQUFVLEdBQUdBLFVBQUgsR0FBZ0IsSUFBakM7QUFDSDtBQUNERCxlQUFlLENBQUNXLFNBQWhCLEdBQTRCO0FBQ3hCVixZ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QUMsNEdBQWlDOztBQUUxRSx3QkFBd0IsbUJBQU8sQ0FBQywwRkFBd0I7O0FBRXhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZFOzs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJwZW9wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9wZXJ0aWVzVGFibGUoeyBwcm9wZXJ0aWVzIH0pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzKSlcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3Byb3BlcnRpZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9wZXJ0aWVzVGFibGUgcHJvcGVydGllcz17aXRlbX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIGlmIChwcm9wZXJ0aWVzIGluc3RhbmNlb2YgT2JqZWN0KVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMocHJvcGVydGllcylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zb3J0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoa2V5ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+e2tleX08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvcGVydGllc1RhYmxlIHByb3BlcnRpZXM9e3Byb3BlcnRpZXNba2V5XX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIClcbiAgICBpZiAocHJvcGVydGllcyA9PT0gdHJ1ZSkgcmV0dXJuICd0cnVlJ1xuICAgIGlmIChwcm9wZXJ0aWVzID09PSBmYWxzZSkgcmV0dXJuICdmYWxzZSdcbiAgICByZXR1cm4gcHJvcGVydGllcyA/IHByb3BlcnRpZXMgOiBudWxsXG59XG5Qcm9wZXJ0aWVzVGFibGUucHJvcFR5cGVzID0ge1xuICAgIHByb3BlcnRpZXM6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENhcmQsIENsb3NlQnV0dG9uLCBmcm9tUGFyYW1zIH0gZnJvbSAnbGliL3V0aWxzJ1xuaW1wb3J0IGFwaSBmcm9tICdsaWIvYXBpJ1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcbmltcG9ydCB7IENvaG9ydEdyb3VwIH0gZnJvbSAnLi9Db2hvcnRHcm91cCdcbmltcG9ydCB7IHJvdXRlciB9IGZyb20gJ2tlYS1yb3V0ZXInXG5cbmV4cG9ydCBjbGFzcyBfQ29ob3J0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGdyb3Vwczogd2luZG93LmxvY2F0aW9uLnNlYXJjaC5pbmRleE9mKCduZXdfY29ob3J0JykgPiAtMSA/IFt7fV0gOiBbXSxcbiAgICAgICAgICAgIGlkOiBmcm9tUGFyYW1zKClbJ2NvaG9ydCddLFxuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mZXRjaFByb3BlcnRpZXMuY2FsbCh0aGlzKVxuICAgICAgICB0aGlzLmZldGNoQWN0aW9ucy5jYWxsKHRoaXMpXG4gICAgICAgIHRoaXMub25TYXZlID0gdGhpcy5vblNhdmUuYmluZCh0aGlzKVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pZCkgdGhpcy5mZXRjaENvaG9ydC5jYWxsKHRoaXMpXG4gICAgfVxuICAgIGZldGNoQ29ob3J0KCkge1xuICAgICAgICBhcGkuZ2V0KCdhcGkvY29ob3J0LycgKyB0aGlzLnN0YXRlLmlkKS50aGVuKGNvaG9ydCA9PiB0aGlzLnNldFN0YXRlKGNvaG9ydCkpXG4gICAgfVxuICAgIG9uU2F2ZShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBsZXQgY29ob3J0ID0ge1xuICAgICAgICAgICAgaWQ6IHRoaXMuc3RhdGUuaWQsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLnN0YXRlLm5hbWUsXG4gICAgICAgICAgICBncm91cHM6IHRoaXMuc3RhdGUuZ3JvdXBzLFxuICAgICAgICB9XG4gICAgICAgIGxldCBvblJlc3BvbnNlID0gY29ob3J0ID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoY29ob3J0LmlkKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlkOiBjb2hvcnQuaWQgfSlcbiAgICAgICAgICAgIHRvYXN0KCdDb2hvcnQgc2F2ZWQuJylcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5wdXNoKHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUsIHsgY29ob3J0OiBjb2hvcnQuaWQgfSlcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIGFwaS51cGRhdGUoJ2FwaS9jb2hvcnQvJyArIHRoaXMuc3RhdGUuaWQsIGNvaG9ydCkudGhlbihvblJlc3BvbnNlKVxuICAgICAgICB9XG4gICAgICAgIGFwaS5jcmVhdGUoJ2FwaS9jb2hvcnQnLCBjb2hvcnQpLnRoZW4ob25SZXNwb25zZSlcbiAgICB9XG4gICAgZmV0Y2hQcm9wZXJ0aWVzKCkge1xuICAgICAgICBhcGkuZ2V0KCdhcGkvcGVyc29uL3Byb3BlcnRpZXMnKS50aGVuKHByb3BlcnRpZXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcHJvcGVydGllczogcHJvcGVydGllcy5tYXAocHJvcGVydHkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHByb3BlcnR5Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wZXJ0eS5uYW1lLFxuICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZldGNoQWN0aW9ucygpIHtcbiAgICAgICAgYXBpLmdldCgnYXBpL2FjdGlvbicpLnRoZW4oYWN0aW9ucyA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zOiBhY3Rpb25zLnJlc3VsdHMubWFwKGFjdGlvbiA9PiAoe1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogYWN0aW9uLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhY3Rpb24uaWQsXG4gICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyBncm91cHMsIHByb3BlcnRpZXMsIGFjdGlvbnMsIG5hbWUgfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgcmV0dXJuIGdyb3Vwcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1zdWNjZXNzIGZsb2F0LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxcmVtJywgbWFyZ2luTGVmdDogMTIgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZ3JvdXBzOiBbe31dIH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICsgbmV3IGNvaG9ydFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiA3NTAgfX0+XG4gICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdyb3VwczogW10sIGlkOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbnMucHVzaChgJHt0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZSB8fCAnTmV3IGNvaG9ydCd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIG9uU3VibWl0PXt0aGlzLm9uU2F2ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxcmVtJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvaG9ydCBuYW1lLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2dyb3Vwc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGdyb3VwLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29ob3J0R3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cD17Z3JvdXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzPXtwcm9wZXJ0aWVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17YWN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZ3JvdXBzIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2dyb3VwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cHNbaW5kZXhdID0gZ3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZ3JvdXBzIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgocHJldiwgY3VycikgPT4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY29uZGFyeVwiIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbjogOCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPUnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBidG4tc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogJzFyZW0nIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGdyb3VwczogWy4uLmdyb3Vwcywge31dIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ldyBncm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBidG4tc20gZmxvYXQtcmlnaHRcIiBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxcmVtJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTYXZlIGNvaG9ydFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IENvaG9ydCA9IHJvdXRlcihfQ29ob3J0KVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2FyZCwgQ2xvc2VCdXR0b24gfSBmcm9tICcuLi8uLi9saWIvdXRpbHMnXG5pbXBvcnQgeyBQcm9wZXJ0eUZpbHRlcnMgfSBmcm9tICcuLi8uLi9saWIvY29tcG9uZW50cy9Qcm9wZXJ0eUZpbHRlcnMvUHJvcGVydHlGaWx0ZXJzJ1xuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnXG5cbmV4cG9ydCBjbGFzcyBDb2hvcnRHcm91cCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkYXlzOiAxLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IChwcm9wcy5ncm91cC5hY3Rpb25faWQgJiYgJ2FjdGlvbicpIHx8IChwcm9wcy5ncm91cC5wcm9wZXJ0aWVzICYmICdwcm9wZXJ0eScpLFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuRGF5Q2hvaWNlID0gdGhpcy5EYXlDaG9pY2UuYmluZCh0aGlzKVxuICAgIH1cbiAgICBEYXlDaG9pY2UocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbl9pZDogdGhpcy5wcm9wcy5ncm91cC5hY3Rpb25faWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlzOiBwcm9wcy5kYXlzLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydidG4gYnRuLXNtICcgKyAodGhpcy5wcm9wcy5ncm91cC5kYXlzID09IHByb3BzLmRheXMgPyAnYnRuLXNlY29uZGFyeScgOiAnYnRuLWxpZ2h0Jyl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3Byb3BzLm5hbWV9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7IGdyb3VwLCBpbmRleCwgcHJvcGVydGllcywgYWN0aW9ucywgb25DaGFuZ2UsIG9uUmVtb3ZlIH0gPSB0aGlzLnByb3BzXG4gICAgICAgIGxldCB7IHNlbGVjdGVkIH0gPSB0aGlzLnN0YXRlXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q2FyZCB0aXRsZT17ZmFsc2V9IHN0eWxlPXt7IG1hcmdpbjogMCB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICB7aW5kZXggPiAwICYmIDxDbG9zZUJ1dHRvbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiIG9uQ2xpY2s9e29uUmVtb3ZlfSAvPn1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDMyIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlciBoYXNcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZCA9PSAnYWN0aW9uJyAmJiAnIGRvbmUgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwXCIgc3R5bGU9e3sgbWFyZ2luOiAnMCA4cHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkOiAnYWN0aW9uJyB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2J0biBidG4tc20gJyArIChzZWxlY3RlZCA9PSAnYWN0aW9uJyA/ICdidG4tc2Vjb25kYXJ5JyA6ICdidG4tbGlnaHQnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkOiAncHJvcGVydHknIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnYnRuIGJ0bi1zbSAnICsgKHNlbGVjdGVkID09ICdwcm9wZXJ0eScgPyAnYnRuLXNlY29uZGFyeScgOiAnYnRuLWxpZ2h0Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWQgPT0gJ2FjdGlvbicgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbiB0aGUgbGFzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cFwiIHN0eWxlPXt7IG1hcmdpbjogJzAgOHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGlzLkRheUNob2ljZSBkYXlzPXsxfSBuYW1lPVwiZGF5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGlzLkRheUNob2ljZSBkYXlzPXs3fSBuYW1lPVwiNyBkYXlzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGlzLkRheUNob2ljZSBkYXlzPXszMH0gbmFtZT1cIm1vbnRoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcycmVtJywgbWluSGVpZ2h0OiAzOCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWQgPT0gJ3Byb3BlcnR5JyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9wZXJ0eUZpbHRlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHBvaW50PVwicGVyc29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VLZXk9XCJjb2hvcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcGVydGllcyA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczogcHJvcGVydGllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5czogZ3JvdXAuZGF5cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlGaWx0ZXJzPXtncm91cC5wcm9wZXJ0aWVzIHx8IHt9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAnMXJlbSAwIDAnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWQgPT0gJ2FjdGlvbicgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzFyZW0nLCB3aWR0aDogMzUwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2FjdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgYWN0aW9uLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aXRlbSA9PiBvbkNoYW5nZSh7IGFjdGlvbl9pZDogaXRlbS52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWN0aW9ucyAmJiBhY3Rpb25zLmZpbHRlcihhY3Rpb24gPT4gYWN0aW9uLnZhbHVlID09IGdyb3VwLmFjdGlvbl9pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIClcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGFwaSBmcm9tICdsaWIvYXBpJ1xuaW1wb3J0IHsgZnJvbVBhcmFtcyB9IGZyb20gJ2xpYi91dGlscydcbmltcG9ydCB7IENvaG9ydCB9IGZyb20gJy4vQ29ob3J0J1xuaW1wb3J0IHsgUGVvcGxlVGFibGUgfSBmcm9tICcuL1Blb3BsZVRhYmxlJ1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgRXhwb3J0T3V0bGluZWQsIExlZnRPdXRsaW5lZCwgUmlnaHRPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJ1xuXG5leHBvcnQgZnVuY3Rpb24gUGVvcGxlKCkge1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW3Blb3BsZSwgc2V0UGVvcGxlXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtjb2hvcnRJZCwgc2V0Q29ob3J0SWRdID0gdXNlU3RhdGUoZnJvbVBhcmFtcygpWydjb2hvcnQnXSlcbiAgICBjb25zdCBbcGFnaW5hdGlvbiwgc2V0UGFnaW5hdGlvbl0gPSB1c2VTdGF0ZSh7fSlcblxuICAgIGZ1bmN0aW9uIGZldGNoUGVvcGxlKHsgdXJsLCBzY3JvbGxUb3AsIHNlYXJjaCB9KSB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgaWYgKHNjcm9sbFRvcClcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24uYW50LWxheW91dCA+IC5jb250ZW50JykucGFyZW50Tm9kZS5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gICAgICAgIGFwaS5nZXQoXG4gICAgICAgICAgICB1cmwgPyB1cmwgOiBgYXBpL3BlcnNvbi8/JHshIXNlYXJjaCA/ICdzZWFyY2g9JyArIHNlYXJjaCA6ICcnfSR7Y29ob3J0SWQgPyAnJmNvaG9ydD0nICsgY29ob3J0SWQgOiAnJ31gXG4gICAgICAgICkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIHNldFBlb3BsZShkYXRhLnJlc3VsdHMpXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgc2V0UGFnaW5hdGlvbih7IG5leHQ6IGRhdGEubmV4dCwgcHJldmlvdXM6IGRhdGEucHJldmlvdXMgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaFBlb3BsZSh7fSlcbiAgICB9LCBbY29ob3J0SWRdKVxuXG4gICAgY29uc3QgZXhhbXBsZUVtYWlsID1cbiAgICAgICAgKHBlb3BsZSAmJiBwZW9wbGUubWFwKHBlcnNvbiA9PiBwZXJzb24ucHJvcGVydGllcy5lbWFpbCkuZmlsdGVyKGQgPT4gZClbMF0pIHx8ICdleGFtcGxlQGdtYWlsLmNvbSdcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+VXNlcnM8L2gxPlxuICAgICAgICAgICAgPENvaG9ydCBvbkNoYW5nZT17c2V0Q29ob3J0SWR9IC8+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICBpY29uPXs8RXhwb3J0T3V0bGluZWQgLz59XG4gICAgICAgICAgICAgICAgaHJlZj17Jy9hcGkvcGVyc29uLmNzdicgKyAoY29ob3J0SWQgPyAnP2NvaG9ydD0nICsgY29ob3J0SWQgOiAnJyl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRXhwb3J0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiBlLmtleUNvZGUgPT09IDEzICYmIGZldGNoUGVvcGxlKHsgc2VhcmNoIH0pfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwZW9wbGUgJiYgJ1RyeSAnICsgZXhhbXBsZUVtYWlsICsgJyBvciBoYXM6ZW1haWwnfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiA0MDAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxQZW9wbGVUYWJsZSBwZW9wbGU9e3Blb3BsZX0gbG9hZGluZz17bG9hZGluZ30gYWN0aW9ucz17dHJ1ZX0gb25DaGFuZ2U9eygpID0+IGZldGNoUGVvcGxlKHsgc2VhcmNoIH0pfSAvPlxuXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzNyZW0gYXV0byAxMHJlbScsIHdpZHRoOiAyMDAgfX0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshcGFnaW5hdGlvbi5wcmV2aW91c31cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZmV0Y2hQZW9wbGUoeyB1cmw6IHBhZ2luYXRpb24ucHJldmlvdXMsIHNjcm9sbFRvcDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxMZWZ0T3V0bGluZWQgc3R5bGU9e3sgdmVydGljYWxBbGlnbjogJ2luaXRpYWwnIH19IC8+IFByZXZpb3VzXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshcGFnaW5hdGlvbi5uZXh0fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBmZXRjaFBlb3BsZSh7IHVybDogcGFnaW5hdGlvbi5uZXh0LCBzY3JvbGxUb3A6IHRydWUgfSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBOZXh0IDxSaWdodE91dGxpbmVkIHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246ICdpbml0aWFsJyB9fSAvPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJ1dHRvbiwgVGFibGUgfSBmcm9tICdhbnRkJ1xuaW1wb3J0IGFwaSBmcm9tICdsaWIvYXBpJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ2xpYi9jb21wb25lbnRzL0xpbmsnXG5pbXBvcnQgeyBQcm9wZXJ0aWVzVGFibGUgfSBmcm9tICdsaWIvY29tcG9uZW50cy9Qcm9wZXJ0aWVzVGFibGUnXG5pbXBvcnQgeyBEZWxldGVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJ1xuaW1wb3J0IHsgZGVsZXRlUGVyc29uRGF0YSB9IGZyb20gJ2xpYi91dGlscydcblxuZXhwb3J0IGZ1bmN0aW9uIFBlb3BsZVRhYmxlKHsgcGVvcGxlLCBsb2FkaW5nLCBhY3Rpb25zLCBvbkNoYW5nZSB9KSB7XG4gICAgbGV0IGNvbHVtbnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnUGVyc29uJyxcbiAgICAgICAgICAgIGRhdGFJbmRleDogJ25hbWUnLFxuICAgICAgICAgICAga2V5OiAnbmFtZScsXG4gICAgICAgICAgICByZW5kZXI6IChfLCBwZXJzb24pID0+IChcbiAgICAgICAgICAgICAgICA8TGluayB0bz17Jy9wZXJzb24vJyArIGVuY29kZVVSSUNvbXBvbmVudChwZXJzb24uZGlzdGluY3RfaWRzWzBdKX0gY2xhc3NOYW1lPVwicGgtbm8tY2FwdHVyZVwiPlxuICAgICAgICAgICAgICAgICAgICB7cGVyc29uLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSxcbiAgICAgICAgfSxcbiAgICBdXG4gICAgaWYgKGFjdGlvbnMpXG4gICAgICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICAgICAgICB0aXRsZTogJ0FjdGlvbnMnLFxuICAgICAgICAgICAgcmVuZGVyOiBwZXJzb24gPT4gKFxuICAgICAgICAgICAgICAgIDxCdXR0b24gZGFuZ2VyIHR5cGU9XCJsaW5rXCIgb25DbGljaz17KCkgPT4gZGVsZXRlUGVyc29uRGF0YShwZXJzb24sIG9uQ2hhbmdlKX0+XG4gICAgICAgICAgICAgICAgICAgIDxEZWxldGVPdXRsaW5lZCAvPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgKSxcbiAgICAgICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxUYWJsZVxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgcm93S2V5PXtwZXJzb24gPT4gcGVyc29uLmlkfVxuICAgICAgICAgICAgcGFnaW5hdGlvbj17eyBwYWdlU2l6ZTogMTAwLCBoaWRlT25TaW5nbGVQYWdlOiB0cnVlIH19XG4gICAgICAgICAgICBleHBhbmRhYmxlPXt7XG4gICAgICAgICAgICAgICAgZXhwYW5kZWRSb3dSZW5kZXI6ICh7IHByb3BlcnRpZXMgfSkgPT4gPFByb3BlcnRpZXNUYWJsZSBwcm9wZXJ0aWVzPXtwcm9wZXJ0aWVzfSAvPixcbiAgICAgICAgICAgICAgICByb3dFeHBhbmRhYmxlOiAoeyBwcm9wZXJ0aWVzIH0pID0+IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLmxlbmd0aCA+IDAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgZGF0YVNvdXJjZT17cGVvcGxlfVxuICAgICAgICAvPlxuICAgIClcbn1cbiIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==