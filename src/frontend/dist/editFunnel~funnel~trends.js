(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editFunnel~funnel~trends"],{

/***/ "./frontend/src/lib/components/ActionSelectBox.js":
/*!********************************************************!*\
  !*** ./frontend/src/lib/components/ActionSelectBox.js ***!
  \********************************************************/
/*! exports provided: ActionSelectTabs, ActionSelectPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSelectTabs", function() { return ActionSelectTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSelectPanel", function() { return ActionSelectPanel; });
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var scenes_trends_ActionSelectInfo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! scenes/trends/ActionSelectInfo */ "./frontend/src/scenes/trends/ActionSelectInfo.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils */ "./frontend/src/lib/utils.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ActionSelectTab__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ActionSelectTab */ "./frontend/src/lib/components/ActionSelectTab.js");
/* harmony import */ var lib_components_Link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lib/components/Link */ "./frontend/src/lib/components/Link.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }









var determineActiveTab = function determineActiveTab(props) {
  if (props.selected) {
    return props.selected;
  } else {
    return Array.isArray(props.children) ? props.children[0].props.title : props.children.props.title;
  }
};

function ActionSelectTabs(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(determineActiveTab(props)),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7___default()(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(Array.isArray(props.children) ? props.children.map(function (child) {
    return child.props.title;
  }) : [props.children.props.title]),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7___default()(_useState3, 1),
      labels = _useState4[0];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "select-box",
    style: {
      padding: 0
    }
  }, labels.length > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ActionSelectTab__WEBPACK_IMPORTED_MODULE_13__["default"], {
    entityType: activeTab,
    allTypes: labels,
    chooseEntityType: setActiveTab
  }), Array.isArray(props.children) ? props.children.map(function (child) {
    if (child.props.title !== activeTab) return undefined;
    return child;
  }) : props.children);
}
var ActionSelectPanel = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ActionSelectPanel, _Component);

  var _super = _createSuper(ActionSelectPanel);

  function ActionSelectPanel() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ActionSelectPanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "state", {
      infoOpen: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "Option", function (props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        onMouseOver: function onMouseOver(e) {
          return _this.setState({
            infoOpen: true,
            infoBoundingRect: e.target.getBoundingClientRect(),
            infoActionId: props.value
          });
        },
        onMouseOut: function onMouseOut(e) {
          _this.setState({
            infoOpen: false
          });
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_9__["components"].Option, props));
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ActionSelectPanel, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          padding: '1rem',
          height: '90%',
          width: '100%'
        }
      }, this.props.redirect, this.state.infoOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(scenes_trends_ActionSelectInfo__WEBPACK_IMPORTED_MODULE_10__["ActionSelectInfo"], {
        isOpen: this.state.infoOpen,
        boundingRect: this.state.infoBoundingRect,
        entity: this.props.onHover(this.state.infoActionId)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onBlur: function onBlur(e) {
          if (e.relatedTarget && e.relatedTarget.tagName == 'A') return;

          _this2.setState({
            infoOpen: false
          });
        },
        onChange: this.props.onSelect,
        defaultMenuIsOpen: this.props.defaultMenuIsOpen,
        autoFocus: true,
        value: this.props.active,
        className: "select-box-select",
        styles: _utils__WEBPACK_IMPORTED_MODULE_11__["selectStyle"],
        components: {
          Option: this.Option
        },
        options: this.props.options
      }), this.props.message);
    }
  }]);

  return ActionSelectPanel;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
ActionSelectPanel.propTypes = {
  options: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.array.isRequired,
  defaultMenuIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool.isRequired,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string.isRequired,
  onHover: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func.isRequired
};

/***/ }),

/***/ "./frontend/src/lib/components/ActionSelectTab.js":
/*!********************************************************!*\
  !*** ./frontend/src/lib/components/ActionSelectTab.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActionSelectTab; });
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
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/lib/utils */ "./frontend/src/lib/utils.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var ActionSelectTab = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ActionSelectTab, _Component);

  var _super = _createSuper(ActionSelectTab);

  function ActionSelectTab() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ActionSelectTab);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ActionSelectTab, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          entityType = _this$props.entityType,
          chooseEntityType = _this$props.chooseEntityType,
          allTypes = _this$props.allTypes;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'row',
          height: '25px',
          borderBottom: '1px solid #cccccc'
        }
      }, allTypes.map(function (type, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: index,
          style: {
            backgroundColor: entityType == type ? '#eeeeee' : 'white',
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            borderTopLeftRadius: index == 0 ? '5px' : '0px',
            borderTopRightRadius: index == allTypes.length - 1 ? '5px' : '0px',
            cursor: 'pointer'
          },
          onClick: function onClick() {
            return chooseEntityType(type);
          }
        }, Object(_lib_utils__WEBPACK_IMPORTED_MODULE_6__["capitalizeFirstLetter"])(type));
      }));
    }
  }]);

  return ActionSelectTab;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./frontend/src/scenes/trends/ActionFilter/ActionFilter.js":
/*!*****************************************************************!*\
  !*** ./frontend/src/scenes/trends/ActionFilter/ActionFilter.js ***!
  \*****************************************************************/
/*! exports provided: ActionFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionFilter", function() { return ActionFilter; });
/* harmony import */ var antd_es_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/button/style/css */ "./node_modules/antd/es/button/style/css.js");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/button */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var kea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kea */ "./node_modules/kea/lib/index.esm.js");
/* harmony import */ var _entityFilterLogic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entityFilterLogic */ "./frontend/src/scenes/trends/ActionFilter/entityFilterLogic.js");
/* harmony import */ var _ActionFilterRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ActionFilterRow */ "./frontend/src/scenes/trends/ActionFilter/ActionFilterRow.js");






function ActionFilter(_ref) {
  var setFilters = _ref.setFilters,
      filters = _ref.filters,
      typeKey = _ref.typeKey;
  var logic = Object(_entityFilterLogic__WEBPACK_IMPORTED_MODULE_4__["entityFilterLogic"])({
    setFilters: setFilters,
    filters: filters,
    typeKey: typeKey
  });

  var _useValues = Object(kea__WEBPACK_IMPORTED_MODULE_3__["useValues"])(logic),
      localFilters = _useValues.localFilters;

  var _useActions = Object(kea__WEBPACK_IMPORTED_MODULE_3__["useActions"])(logic),
      addFilter = _useActions.addFilter,
      setLocalFilters = _useActions.setLocalFilters; // No way around this. Somehow the ordering of the logic calling each other causes stale "localFilters"
  // to be shown on the /funnels page, even if we try to use a selector with props to hydrate it


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setLocalFilters(filters);
  }, [filters]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, localFilters && localFilters.map(function (filter, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ActionFilterRow__WEBPACK_IMPORTED_MODULE_5__["ActionFilterRow"], {
      logic: logic,
      filter: filter,
      index: index,
      key: index
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "primary",
    onClick: function onClick() {
      return addFilter();
    },
    style: {
      marginTop: '0.5rem'
    }
  }, "Add action/event"));
}

/***/ }),

/***/ "./frontend/src/scenes/trends/ActionFilter/ActionFilterDropdown.js":
/*!*************************************************************************!*\
  !*** ./frontend/src/scenes/trends/ActionFilter/ActionFilterDropdown.js ***!
  \*************************************************************************/
/*! exports provided: ActionFilterDropdown, ActionPanelContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionFilterDropdown", function() { return ActionFilterDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionPanelContainer", function() { return ActionPanelContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var kea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kea */ "./node_modules/kea/lib/index.esm.js");
/* harmony import */ var _trendsLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trendsLogic */ "./frontend/src/scenes/trends/trendsLogic.js");
/* harmony import */ var _lib_components_ActionSelectBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/lib/components/ActionSelectBox */ "./frontend/src/lib/components/ActionSelectBox.js");
/* harmony import */ var lib_components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/components/Link */ "./frontend/src/lib/components/Link.js");
/* harmony import */ var scenes_userLogic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! scenes/userLogic */ "./frontend/src/scenes/userLogic.js");
/* harmony import */ var _models_actionsModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/models/actionsModel */ "./frontend/src/models/actionsModel.js");







function ActionFilterDropdown(_ref) {
  var onClickOutside = _ref.onClickOutside,
      logic = _ref.logic;
  var dropdownRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useValues = Object(kea__WEBPACK_IMPORTED_MODULE_1__["useValues"])(logic),
      selectedFilter = _useValues.selectedFilter;

  var _useValues2 = Object(kea__WEBPACK_IMPORTED_MODULE_1__["useValues"])(scenes_userLogic__WEBPACK_IMPORTED_MODULE_5__["userLogic"]),
      eventNamesGrouped = _useValues2.eventNamesGrouped;

  var _useValues3 = Object(kea__WEBPACK_IMPORTED_MODULE_1__["useValues"])(_models_actionsModel__WEBPACK_IMPORTED_MODULE_6__["actionsModel"]),
      actionsGrouped = _useValues3.actionsGrouped;

  var deselect = function deselect(e) {
    if (dropdownRef.current.contains(e.target)) {
      return;
    }

    onClickOutside && onClickOutside(e);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.addEventListener('mousedown', deselect);
    return function () {
      document.removeEventListener('mousedown', deselect);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: dropdownRef,
    className: "action-filter-dropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_components_ActionSelectBox__WEBPACK_IMPORTED_MODULE_3__["ActionSelectTabs"], {
    selected: selectedFilter.type && selectedFilter.type !== _trendsLogic__WEBPACK_IMPORTED_MODULE_2__["EntityTypes"].NEW_ENTITY ? selectedFilter.type : null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ActionPanelContainer, {
    title: "actions",
    entityType: _trendsLogic__WEBPACK_IMPORTED_MODULE_2__["EntityTypes"].ACTIONS,
    options: actionsGrouped,
    panelIndex: 0,
    logic: logic
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ActionPanelContainer, {
    title: "events",
    entityType: _trendsLogic__WEBPACK_IMPORTED_MODULE_2__["EntityTypes"].EVENTS,
    options: eventNamesGrouped,
    panelIndex: 1,
    logic: logic
  })));
}
function ActionPanelContainer(_ref2) {
  var entityType = _ref2.entityType,
      panelIndex = _ref2.panelIndex,
      options = _ref2.options,
      logic = _ref2.logic;

  var _useValues4 = Object(kea__WEBPACK_IMPORTED_MODULE_1__["useValues"])(logic),
      entities = _useValues4.entities,
      selectedFilter = _useValues4.selectedFilter,
      filters = _useValues4.filters;

  var _useActions = Object(kea__WEBPACK_IMPORTED_MODULE_1__["useActions"])(logic),
      updateFilter = _useActions.updateFilter;

  var dropDownOnSelect = function dropDownOnSelect(item) {
    return updateFilter({
      type: entityType,
      value: item.value,
      index: selectedFilter.index
    });
  };

  var dropDownOnHover = function dropDownOnHover(value) {
    return entities[entityType].filter(function (a) {
      return a.id === value;
    })[0];
  };

  var redirect = function redirect() {
    if (selectedFilter && selectedFilter.type === _trendsLogic__WEBPACK_IMPORTED_MODULE_2__["EntityTypes"].ACTIONS && entityType === _trendsLogic__WEBPACK_IMPORTED_MODULE_2__["EntityTypes"].ACTIONS) {
      var action = entities[selectedFilter.type].filter(function (a) {
        return a.id === selectedFilter.filter.id;
      })[0];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: '/action/' + selectedFilter.filter.id,
        target: "_blank"
      }, "Edit \"", action.name, "\" ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fi flaticon-export"
      }));
    } else {
      return null;
    }
  };

  var message = function message() {
    if (entityType === _trendsLogic__WEBPACK_IMPORTED_MODULE_2__["EntityTypes"].ACTIONS && !filters[_trendsLogic__WEBPACK_IMPORTED_MODULE_2__["EntityTypes"].ACTIONS]) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You don't have any actions defined yet. "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(lib_components_Link__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        to: "/action"
      }, "Click here to define an action."));
    } else {
      return null;
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_components_ActionSelectBox__WEBPACK_IMPORTED_MODULE_3__["ActionSelectPanel"], {
    key: panelIndex,
    title: entityType,
    options: options,
    defaultMenuIsOpen: true,
    onSelect: dropDownOnSelect,
    onHover: dropDownOnHover,
    active: null,
    redirect: redirect(),
    message: message()
  });
}

/***/ }),

/***/ "./frontend/src/scenes/trends/ActionFilter/ActionFilterRow.js":
/*!********************************************************************!*\
  !*** ./frontend/src/scenes/trends/ActionFilter/ActionFilterRow.js ***!
  \********************************************************************/
/*! exports provided: ActionFilterRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionFilterRow", function() { return ActionFilterRow; });
/* harmony import */ var antd_es_tooltip_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/tooltip/style/css */ "./node_modules/antd/es/tooltip/style/css.js");
/* harmony import */ var antd_es_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/tooltip */ "./node_modules/antd/es/tooltip/index.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var kea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! kea */ "./node_modules/kea/lib/index.esm.js");
/* harmony import */ var _trendsLogic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../trendsLogic */ "./frontend/src/scenes/trends/trendsLogic.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/lib/utils */ "./frontend/src/lib/utils.js");
/* harmony import */ var _lib_components_Dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/lib/components/Dropdown */ "./frontend/src/lib/components/Dropdown.js");
/* harmony import */ var _ActionFilterDropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ActionFilterDropdown */ "./frontend/src/scenes/trends/ActionFilter/ActionFilterDropdown.js");
/* harmony import */ var lib_components_PropertyFilters_PropertyFilters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/components/PropertyFilters/PropertyFilters */ "./frontend/src/lib/components/PropertyFilters/PropertyFilters.js");
/* harmony import */ var scenes_userLogic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! scenes/userLogic */ "./frontend/src/scenes/userLogic.js");












var determineFilterLabel = function determineFilterLabel(visible, filter) {
  if (visible) return 'Hide Filters';

  if (filter.properties && Object.keys(filter.properties).length > 0) {
    return Object.keys(filter.properties).length + ' Filter' + (Object.keys(filter.properties).length === 1 ? '' : 's');
  }

  return 'Add Filters';
};

function ActionFilterRow(_ref) {
  var logic = _ref.logic,
      filter = _ref.filter,
      index = _ref.index;
  var node = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  var _useValues = Object(kea__WEBPACK_IMPORTED_MODULE_4__["useValues"])(logic),
      selectedFilter = _useValues.selectedFilter,
      entities = _useValues.entities;

  var _useActions = Object(kea__WEBPACK_IMPORTED_MODULE_4__["useActions"])(logic),
      selectFilter = _useActions.selectFilter,
      updateFilterMath = _useActions.updateFilterMath,
      removeLocalFilter = _useActions.removeLocalFilter,
      updateFilterProperty = _useActions.updateFilterProperty;

  var _useValues2 = Object(kea__WEBPACK_IMPORTED_MODULE_4__["useValues"])(scenes_userLogic__WEBPACK_IMPORTED_MODULE_10__["userLogic"]),
      eventProperties = _useValues2.eventProperties;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      entityFilterVisible = _useState2[0],
      setEntityFilterVisible = _useState2[1];

  var entity, name, value;
  var math = filter.math;

  var onClose = function onClose() {
    removeLocalFilter({
      value: filter.id,
      type: filter.type,
      index: index
    });
  };

  var onMathSelect = function onMathSelect(_, math) {
    updateFilterMath({
      math: math,
      value: filter.id,
      type: filter.type,
      index: index
    });
  };

  var dropDownCondition = function dropDownCondition() {
    return selectedFilter && selectedFilter.type === filter.type && selectedFilter.index === index;
  };

  var onClick = function onClick() {
    if (selectedFilter && selectedFilter.type === filter.type && selectedFilter.index === index) selectFilter(null);else selectFilter({
      filter: filter,
      type: filter.type,
      index: index
    });
  };

  if (filter.type === _trendsLogic__WEBPACK_IMPORTED_MODULE_5__["EntityTypes"].NEW_ENTITY) {
    name = null;
    value = null;
  } else {
    entity = entities[filter.type].filter(function (action) {
      return action.id === filter.id;
    })[0] || {};
    name = entity.name || filter.name;
    value = entity.id || filter.id;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    ref: node,
    className: "filter-action",
    type: "button",
    onClick: onClick,
    style: {
      border: 0,
      padding: 0,
      fontWeight: 500,
      borderBottom: '1.5px dotted var(--blue)'
    }
  }, name || 'Select action'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(MathSelector, {
    math: math,
    index: index,
    onMathSelect: onMathSelect
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "btn btn-sm btn-light",
    onClick: function onClick() {
      return setEntityFilterVisible(!entityFilterVisible);
    }
  }, determineFilterLabel(entityFilterVisible, filter)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_lib_utils__WEBPACK_IMPORTED_MODULE_6__["CloseButton"], {
    onClick: onClose,
    style: {
      "float": 'none',
      marginLeft: 8,
      position: 'absolute',
      marginTop: 3
    }
  }), entityFilterVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "ml-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(lib_components_PropertyFilters_PropertyFilters__WEBPACK_IMPORTED_MODULE_9__["PropertyFilters"], {
    pageKey: "".concat(index, "-").concat(value, "-filter"),
    properties: eventProperties,
    propertyFilters: filter.properties,
    onChange: function onChange(properties) {
      return updateFilterProperty({
        properties: properties,
        index: index
      });
    },
    style: {
      marginBottom: 0
    }
  })), dropDownCondition() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ActionFilterDropdown__WEBPACK_IMPORTED_MODULE_8__["ActionFilterDropdown"], {
    logic: logic,
    onClickOutside: function onClickOutside(e) {
      if (node.current.contains(e.target)) {
        return;
      }

      selectFilter(null);
    }
  }));
}

function MathSelector(props) {
  var items = ['Total', 'DAU'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_lib_components_Dropdown__WEBPACK_IMPORTED_MODULE_7__["Dropdown"], {
    title: items[items.map(function (i) {
      return i.toLowerCase();
    }).indexOf(props.math)] || 'Total',
    buttonClassName: "btn btn-sm btn-light",
    style: {
      marginLeft: 32,
      marginRight: 16
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_es_tooltip__WEBPACK_IMPORTED_MODULE_1__["default"], {
    placement: "right",
    title: "Total shows total event volume. If a user performs an event 3 times on one day it counts as 3."
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: "#",
    className: "dropdown-item",
    onClick: function onClick() {
      return props.onMathSelect(props.index, 'total');
    }
  }, "Total")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_es_tooltip__WEBPACK_IMPORTED_MODULE_1__["default"], {
    placement: "right",
    title: "Daily Active Users. Selecting DAU will mean a user performing an event 3 times on one day counts as 1."
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: "#",
    className: "dropdown-item",
    onClick: function onClick() {
      return props.onMathSelect(props.index, 'dau');
    }
  }, "DAU")));
}

/***/ }),

/***/ "./frontend/src/scenes/trends/ActionFilter/entityFilterLogic.js":
/*!**********************************************************************!*\
  !*** ./frontend/src/scenes/trends/ActionFilter/entityFilterLogic.js ***!
  \**********************************************************************/
/*! exports provided: entityFilterLogic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entityFilterLogic", function() { return entityFilterLogic; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var kea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kea */ "./node_modules/kea/lib/index.esm.js");
/* harmony import */ var _models_actionsModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/models/actionsModel */ "./frontend/src/models/actionsModel.js");
/* harmony import */ var _trendsLogic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../trendsLogic */ "./frontend/src/scenes/trends/trendsLogic.js");
/* harmony import */ var scenes_userLogic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! scenes/userLogic */ "./frontend/src/scenes/userLogic.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function toLocalFilters(filters) {
  return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(filters[_trendsLogic__WEBPACK_IMPORTED_MODULE_4__["EntityTypes"].ACTIONS] || []), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(filters[_trendsLogic__WEBPACK_IMPORTED_MODULE_4__["EntityTypes"].EVENTS] || []), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(filters[_trendsLogic__WEBPACK_IMPORTED_MODULE_4__["EntityTypes"].NEW_ENTITY] || [])).sort(function (a, b) {
    return a.order - b.order;
  }).map(function (filter, order) {
    return _objectSpread(_objectSpread({}, filter), {}, {
      order: order
    });
  });
}

function toFilters(localFilters) {
  var _ref;

  var filters = localFilters.map(function (filter, index) {
    return _objectSpread(_objectSpread({}, filter), {}, {
      order: index
    });
  });
  return _ref = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, _trendsLogic__WEBPACK_IMPORTED_MODULE_4__["EntityTypes"].ACTIONS, filters.filter(function (filter) {
    return filter.type === _trendsLogic__WEBPACK_IMPORTED_MODULE_4__["EntityTypes"].ACTIONS;
  })), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, _trendsLogic__WEBPACK_IMPORTED_MODULE_4__["EntityTypes"].EVENTS, filters.filter(function (filter) {
    return filter.type === _trendsLogic__WEBPACK_IMPORTED_MODULE_4__["EntityTypes"].EVENTS;
  })), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, _trendsLogic__WEBPACK_IMPORTED_MODULE_4__["EntityTypes"].NEW_ENTITY, filters.filter(function (filter) {
    return filter.type === _trendsLogic__WEBPACK_IMPORTED_MODULE_4__["EntityTypes"].NEW_ENTITY;
  })), _ref;
} // required props:
// - filters
// - setFilters
// - typeKey


var entityFilterLogic = Object(kea__WEBPACK_IMPORTED_MODULE_2__["kea"])({
  key: function key(props) {
    return props.typeKey;
  },
  connect: {
    values: [scenes_userLogic__WEBPACK_IMPORTED_MODULE_5__["userLogic"], ['eventNames'], _models_actionsModel__WEBPACK_IMPORTED_MODULE_3__["actionsModel"], ['actions']]
  },
  actions: function actions() {
    return {
      selectFilter: function selectFilter(filter) {
        return {
          filter: filter
        };
      },
      updateFilterMath: function updateFilterMath(filter) {
        return {
          type: filter.type,
          value: filter.value,
          math: filter.math,
          index: filter.index
        };
      },
      updateFilter: function updateFilter(filter) {
        return {
          type: filter.type,
          index: filter.index,
          value: filter.value
        };
      },
      removeLocalFilter: function removeLocalFilter(filter) {
        return {
          value: filter.value,
          type: filter.type,
          index: filter.index
        };
      },
      addFilter: true,
      updateFilterProperty: function updateFilterProperty(filter) {
        return {
          properties: filter.properties,
          index: filter.index
        };
      },
      setFilters: function setFilters(filters) {
        return {
          filters: filters
        };
      },
      setLocalFilters: function setLocalFilters(filters) {
        return {
          filters: filters
        };
      }
    };
  },
  reducers: function reducers(_ref2) {
    var props = _ref2.props;
    return {
      selectedFilter: [null, {
        selectFilter: function selectFilter(state, _ref3) {
          var filter = _ref3.filter;
          return filter;
        }
      }],
      localFilters: [toLocalFilters(props.filters), {
        setLocalFilters: function setLocalFilters(_, _ref4) {
          var filters = _ref4.filters;
          return toLocalFilters(filters);
        }
      }]
    };
  },
  selectors: function selectors(_ref5) {
    var _selectors = _ref5.selectors;
    return {
      entities: [function () {
        return [_selectors.eventNames, _selectors.actions];
      }, function (events, actions) {
        var _ref6;

        return _ref6 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref6, _trendsLogic__WEBPACK_IMPORTED_MODULE_4__["EntityTypes"].ACTIONS, actions), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref6, _trendsLogic__WEBPACK_IMPORTED_MODULE_4__["EntityTypes"].EVENTS, events.map(function (event) {
          return {
            id: event,
            name: event
          };
        })), _ref6;
      }],
      filters: [function () {
        return [_selectors.localFilters];
      }, function (localFilters) {
        return toFilters(localFilters);
      }]
    };
  },
  listeners: function listeners(_ref7) {
    var actions = _ref7.actions,
        values = _ref7.values,
        props = _ref7.props;
    return {
      updateFilter: function updateFilter(_ref8) {
        var type = _ref8.type,
            index = _ref8.index,
            value = _ref8.value;
        actions.setFilters(values.localFilters.map(function (filter, i) {
          return i === index ? _objectSpread(_objectSpread({}, filter), {}, {
            id: value,
            type: type
          }) : filter;
        }));
        actions.selectFilter(null);
      },
      updateFilterProperty: function updateFilterProperty(_ref9) {
        var properties = _ref9.properties,
            index = _ref9.index;
        actions.setFilters(values.localFilters.map(function (filter, i) {
          return i === index ? _objectSpread(_objectSpread({}, filter), {}, {
            properties: properties
          }) : filter;
        }));
      },
      updateFilterMath: function updateFilterMath(_ref10) {
        var math = _ref10.math,
            index = _ref10.index;
        actions.setFilters(values.localFilters.map(function (filter, i) {
          return i === index ? _objectSpread(_objectSpread({}, filter), {}, {
            math: math
          }) : filter;
        }));
      },
      removeLocalFilter: function removeLocalFilter(_ref11) {
        var index = _ref11.index;
        actions.setFilters(values.localFilters.filter(function (_, i) {
          return i !== index;
        }));
      },
      addFilter: function addFilter() {
        actions.setFilters([].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(values.localFilters), [{
          id: null,
          type: _trendsLogic__WEBPACK_IMPORTED_MODULE_4__["EntityTypes"].NEW_ENTITY,
          order: values.localFilters.length
        }]));
      },
      setFilters: function setFilters(_ref12) {
        var filters = _ref12.filters;
        props.setFilters(toFilters(filters));
      }
    };
  },
  path: function path(key) {
    return ["scenes", "trends", "ActionFilter", "entityFilterLogic", key];
  }
});

/***/ }),

/***/ "./frontend/src/scenes/trends/ActionSelectInfo.js":
/*!********************************************************!*\
  !*** ./frontend/src/scenes/trends/ActionSelectInfo.js ***!
  \********************************************************/
/*! exports provided: ActionSelectInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSelectInfo", function() { return ActionSelectInfo; });
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/utils */ "./frontend/src/lib/utils.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var ActionSelectInfo = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ActionSelectInfo, _Component);

  var _super = _createSuper(ActionSelectInfo);

  function ActionSelectInfo() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ActionSelectInfo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "infoDiv", react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef());

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ActionSelectInfo, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps) {
      if (!this.infoDiv.current) return;
      var rect = this.props.boundingRect;
      this.infoDiv.current.style.top = rect.top - rect.height / 2 + 'px';
      this.infoDiv.current.style.left = rect.left + rect.width + 'px';
      this.infoDiv.current.style.opacity = 1;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.componentDidMount();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          entity = _this$props.entity,
          isOpen = _this$props.isOpen;
      if (!entity) return null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "select-box-info",
        ref: this.infoDiv,
        style: {
          opacity: isOpen ? 1 : 0
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          marginBottom: '0.5rem'
        }
      }, entity.name), entity.steps && entity.steps.map(function (step, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          key: step.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_lib_utils__WEBPACK_IMPORTED_MODULE_8__["Card"], {
          key: step.id,
          style: {
            marginBottom: 0
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "card-body"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", null, step.event && step.event[0] == '$' ? step.event[1].toUpperCase() + step.event.slice(2) : step.event), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
          style: {
            listStyle: 'none'
          }
        }, step.selector && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, "CSS selector matches", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("pre", null, step.selector)), step.tag_name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, "Tag name matches ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("pre", null, step.tag_name)), step.text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, "Text matches ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("pre", null, step.text)), step.href && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, "Link HREF matches ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("pre", null, step.href)), step.url && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, "URL ", step.url_matching == 'contains' ? 'contains' : 'matches', ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("pre", null, step.url))))), index < entity.steps.length - 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "secondary",
          style: {
            textAlign: 'center',
            margin: '1rem'
          }
        }, "OR"));
      }));
    }
  }]);

  return ActionSelectInfo;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvbGliL2NvbXBvbmVudHMvQWN0aW9uU2VsZWN0Qm94LmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9saWIvY29tcG9uZW50cy9BY3Rpb25TZWxlY3RUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL3NjZW5lcy90cmVuZHMvQWN0aW9uRmlsdGVyL0FjdGlvbkZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvc2NlbmVzL3RyZW5kcy9BY3Rpb25GaWx0ZXIvQWN0aW9uRmlsdGVyRHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL3NjZW5lcy90cmVuZHMvQWN0aW9uRmlsdGVyL0FjdGlvbkZpbHRlclJvdy5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvc2NlbmVzL3RyZW5kcy9BY3Rpb25GaWx0ZXIvZW50aXR5RmlsdGVyTG9naWMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL3NjZW5lcy90cmVuZHMvQWN0aW9uU2VsZWN0SW5mby5qcyJdLCJuYW1lcyI6WyJkZXRlcm1pbmVBY3RpdmVUYWIiLCJwcm9wcyIsInNlbGVjdGVkIiwiQXJyYXkiLCJpc0FycmF5IiwiY2hpbGRyZW4iLCJ0aXRsZSIsIkFjdGlvblNlbGVjdFRhYnMiLCJ1c2VTdGF0ZSIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsIm1hcCIsImNoaWxkIiwibGFiZWxzIiwicGFkZGluZyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIkFjdGlvblNlbGVjdFBhbmVsIiwiaW5mb09wZW4iLCJlIiwic2V0U3RhdGUiLCJpbmZvQm91bmRpbmdSZWN0IiwidGFyZ2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaW5mb0FjdGlvbklkIiwidmFsdWUiLCJoZWlnaHQiLCJ3aWR0aCIsInJlZGlyZWN0Iiwic3RhdGUiLCJvbkhvdmVyIiwicmVsYXRlZFRhcmdldCIsInRhZ05hbWUiLCJvblNlbGVjdCIsImRlZmF1bHRNZW51SXNPcGVuIiwiYWN0aXZlIiwic2VsZWN0U3R5bGUiLCJPcHRpb24iLCJvcHRpb25zIiwibWVzc2FnZSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsImJvb2wiLCJmdW5jIiwic3RyaW5nIiwiQWN0aW9uU2VsZWN0VGFiIiwiZW50aXR5VHlwZSIsImNob29zZUVudGl0eVR5cGUiLCJhbGxUeXBlcyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYm9yZGVyQm90dG9tIiwidHlwZSIsImluZGV4IiwiYmFja2dyb3VuZENvbG9yIiwiZmxleCIsImp1c3RpZnlDb250ZW50IiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiY3Vyc29yIiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwiQWN0aW9uRmlsdGVyIiwic2V0RmlsdGVycyIsImZpbHRlcnMiLCJ0eXBlS2V5IiwibG9naWMiLCJlbnRpdHlGaWx0ZXJMb2dpYyIsInVzZVZhbHVlcyIsImxvY2FsRmlsdGVycyIsInVzZUFjdGlvbnMiLCJhZGRGaWx0ZXIiLCJzZXRMb2NhbEZpbHRlcnMiLCJ1c2VFZmZlY3QiLCJmaWx0ZXIiLCJtYXJnaW5Ub3AiLCJBY3Rpb25GaWx0ZXJEcm9wZG93biIsIm9uQ2xpY2tPdXRzaWRlIiwiZHJvcGRvd25SZWYiLCJ1c2VSZWYiLCJzZWxlY3RlZEZpbHRlciIsInVzZXJMb2dpYyIsImV2ZW50TmFtZXNHcm91cGVkIiwiYWN0aW9uc01vZGVsIiwiYWN0aW9uc0dyb3VwZWQiLCJkZXNlbGVjdCIsImN1cnJlbnQiLCJjb250YWlucyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJFbnRpdHlUeXBlcyIsIk5FV19FTlRJVFkiLCJBQ1RJT05TIiwiRVZFTlRTIiwiQWN0aW9uUGFuZWxDb250YWluZXIiLCJwYW5lbEluZGV4IiwiZW50aXRpZXMiLCJ1cGRhdGVGaWx0ZXIiLCJkcm9wRG93bk9uU2VsZWN0IiwiaXRlbSIsImRyb3BEb3duT25Ib3ZlciIsImEiLCJpZCIsImFjdGlvbiIsIm5hbWUiLCJhbGlnbkl0ZW1zIiwiZGV0ZXJtaW5lRmlsdGVyTGFiZWwiLCJ2aXNpYmxlIiwicHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJBY3Rpb25GaWx0ZXJSb3ciLCJub2RlIiwic2VsZWN0RmlsdGVyIiwidXBkYXRlRmlsdGVyTWF0aCIsInJlbW92ZUxvY2FsRmlsdGVyIiwidXBkYXRlRmlsdGVyUHJvcGVydHkiLCJldmVudFByb3BlcnRpZXMiLCJlbnRpdHlGaWx0ZXJWaXNpYmxlIiwic2V0RW50aXR5RmlsdGVyVmlzaWJsZSIsImVudGl0eSIsIm1hdGgiLCJvbkNsb3NlIiwib25NYXRoU2VsZWN0IiwiXyIsImRyb3BEb3duQ29uZGl0aW9uIiwib25DbGljayIsImJvcmRlciIsImZvbnRXZWlnaHQiLCJtYXJnaW5MZWZ0IiwicG9zaXRpb24iLCJtYXJnaW5Cb3R0b20iLCJNYXRoU2VsZWN0b3IiLCJpdGVtcyIsImkiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJtYXJnaW5SaWdodCIsInRvTG9jYWxGaWx0ZXJzIiwic29ydCIsImIiLCJvcmRlciIsInRvRmlsdGVycyIsImtlYSIsImtleSIsImNvbm5lY3QiLCJ2YWx1ZXMiLCJhY3Rpb25zIiwicmVkdWNlcnMiLCJzZWxlY3RvcnMiLCJldmVudE5hbWVzIiwiZXZlbnRzIiwiZXZlbnQiLCJsaXN0ZW5lcnMiLCJBY3Rpb25TZWxlY3RJbmZvIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJwcmV2UHJvcHMiLCJpbmZvRGl2IiwicmVjdCIsImJvdW5kaW5nUmVjdCIsInN0eWxlIiwidG9wIiwibGVmdCIsIm9wYWNpdHkiLCJjb21wb25lbnREaWRNb3VudCIsImlzT3BlbiIsInN0ZXBzIiwic3RlcCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJsaXN0U3R5bGUiLCJzZWxlY3RvciIsInRhZ19uYW1lIiwidGV4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UCxJQUFJLENBQUNPLElBQVgsQ0FEdEIsQ0FsQlIsRUFzQktQLElBQUksQ0FBQ1EsR0FBTCxpQkFDRywrRUFDU1IsSUFBSSxDQUFDUyxZQUFMLElBQXFCLFVBQXJCLEdBQWtDLFVBQWxDLEdBQStDLFNBRHhELEVBQ21FLEdBRG5FLGVBRUksd0VBQU1ULElBQUksQ0FBQ1EsR0FBWCxDQUZKLENBdkJSLENBTkosQ0FESixDQURKLEVBdUNLM0gsS0FBSyxHQUFHbUUsTUFBTSxDQUFDK0MsS0FBUCxDQUFhM0osTUFBYixHQUFzQixDQUE5QixpQkFDRztBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUEyQixlQUFLLEVBQUU7QUFBRXNLLHFCQUFTLEVBQUUsUUFBYjtBQUF1QkMsa0JBQU0sRUFBRTtBQUEvQjtBQUFsQyxnQkF4Q1IsQ0FEYTtBQUFBLE9BQWpCLENBSFIsQ0FESjtBQXFESDtBQXBFTDs7QUFBQTtBQUFBLEVBQXNDOUksK0NBQXRDLEUiLCJmaWxlIjoiZWRpdEZ1bm5lbH5mdW5uZWx+dHJlbmRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTZWxlY3QsIHsgY29tcG9uZW50cyB9IGZyb20gJ3JlYWN0LXNlbGVjdCdcbmltcG9ydCB7IEFjdGlvblNlbGVjdEluZm8gfSBmcm9tICdzY2VuZXMvdHJlbmRzL0FjdGlvblNlbGVjdEluZm8nXG5pbXBvcnQgeyBzZWxlY3RTdHlsZSB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEFjdGlvblNlbGVjdFRhYiBmcm9tICcuL0FjdGlvblNlbGVjdFRhYidcbmltcG9ydCB7IExpbmsgfSBmcm9tICdsaWIvY29tcG9uZW50cy9MaW5rJ1xuXG5jb25zdCBkZXRlcm1pbmVBY3RpdmVUYWIgPSBwcm9wcyA9PiB7XG4gICAgaWYgKHByb3BzLnNlbGVjdGVkKSB7XG4gICAgICAgIHJldHVybiBwcm9wcy5zZWxlY3RlZFxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHByb3BzLmNoaWxkcmVuKSA/IHByb3BzLmNoaWxkcmVuWzBdLnByb3BzLnRpdGxlIDogcHJvcHMuY2hpbGRyZW4ucHJvcHMudGl0bGVcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBY3Rpb25TZWxlY3RUYWJzKHByb3BzKSB7XG4gICAgbGV0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZShkZXRlcm1pbmVBY3RpdmVUYWIocHJvcHMpKVxuICAgIGxldCBbbGFiZWxzXSA9IHVzZVN0YXRlKFxuICAgICAgICBBcnJheS5pc0FycmF5KHByb3BzLmNoaWxkcmVuKSA/IHByb3BzLmNoaWxkcmVuLm1hcChjaGlsZCA9PiBjaGlsZC5wcm9wcy50aXRsZSkgOiBbcHJvcHMuY2hpbGRyZW4ucHJvcHMudGl0bGVdXG4gICAgKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LWJveFwiIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0+XG4gICAgICAgICAgICB7bGFiZWxzLmxlbmd0aCA+IDEgJiYgKFxuICAgICAgICAgICAgICAgIDxBY3Rpb25TZWxlY3RUYWJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5VHlwZT17YWN0aXZlVGFifVxuICAgICAgICAgICAgICAgICAgICBhbGxUeXBlcz17bGFiZWxzfVxuICAgICAgICAgICAgICAgICAgICBjaG9vc2VFbnRpdHlUeXBlPXtzZXRBY3RpdmVUYWJ9XG4gICAgICAgICAgICAgICAgPjwvQWN0aW9uU2VsZWN0VGFiPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtBcnJheS5pc0FycmF5KHByb3BzLmNoaWxkcmVuKVxuICAgICAgICAgICAgICAgID8gcHJvcHMuY2hpbGRyZW4ubWFwKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQucHJvcHMudGl0bGUgIT09IGFjdGl2ZVRhYikgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IHByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBjbGFzcyBBY3Rpb25TZWxlY3RQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGluZm9PcGVuOiBmYWxzZSxcbiAgICB9XG5cbiAgICBPcHRpb24gPSBwcm9wcyA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9e2UgPT5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZvT3BlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm9Cb3VuZGluZ1JlY3Q6IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mb0FjdGlvbklkOiBwcm9wcy52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25Nb3VzZU91dD17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbmZvT3BlbjogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxjb21wb25lbnRzLk9wdGlvbiB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzFyZW0nLCBoZWlnaHQ6ICc5MCUnLCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnJlZGlyZWN0fVxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmluZm9PcGVuICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEFjdGlvblNlbGVjdEluZm9cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5pbmZvT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdW5kaW5nUmVjdD17dGhpcy5zdGF0ZS5pbmZvQm91bmRpbmdSZWN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5PXt0aGlzLnByb3BzLm9uSG92ZXIodGhpcy5zdGF0ZS5pbmZvQWN0aW9uSWQpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUucmVsYXRlZFRhcmdldCAmJiBlLnJlbGF0ZWRUYXJnZXQudGFnTmFtZSA9PSAnQScpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGluZm9PcGVuOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vblNlbGVjdH1cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1lbnVJc09wZW49e3RoaXMucHJvcHMuZGVmYXVsdE1lbnVJc09wZW59XG4gICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuYWN0aXZlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3QtYm94LXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcz17c2VsZWN0U3R5bGV9XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e3sgT3B0aW9uOiB0aGlzLk9wdGlvbiB9fVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnByb3BzLm9wdGlvbnN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5tZXNzYWdlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbkFjdGlvblNlbGVjdFBhbmVsLnByb3BUeXBlcyA9IHtcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICBkZWZhdWx0TWVudUlzT3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG9uSG92ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgfSBmcm9tICd+L2xpYi91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uU2VsZWN0VGFiIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7IGVudGl0eVR5cGUsIGNob29zZUVudGl0eVR5cGUsIGFsbFR5cGVzIH0gPSB0aGlzLnByb3BzXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGhlaWdodDogJzI1cHgnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI2NjY2NjYycgfX0+XG4gICAgICAgICAgICAgICAge2FsbFR5cGVzLm1hcCgodHlwZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBlbnRpdHlUeXBlID09IHR5cGUgPyAnI2VlZWVlZScgOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBpbmRleCA9PSAwID8gJzVweCcgOiAnMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogaW5kZXggPT0gYWxsVHlwZXMubGVuZ3RoIC0gMSA/ICc1cHgnIDogJzBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hvb3NlRW50aXR5VHlwZSh0eXBlKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NhcGl0YWxpemVGaXJzdExldHRlcih0eXBlKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUFjdGlvbnMsIHVzZVZhbHVlcyB9IGZyb20gJ2tlYSdcbmltcG9ydCB7IGVudGl0eUZpbHRlckxvZ2ljIH0gZnJvbSAnLi9lbnRpdHlGaWx0ZXJMb2dpYydcbmltcG9ydCB7IEFjdGlvbkZpbHRlclJvdyB9IGZyb20gJy4vQWN0aW9uRmlsdGVyUm93J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCdcblxuZXhwb3J0IGZ1bmN0aW9uIEFjdGlvbkZpbHRlcih7IHNldEZpbHRlcnMsIGZpbHRlcnMsIHR5cGVLZXkgfSkge1xuICAgIGNvbnN0IGxvZ2ljID0gZW50aXR5RmlsdGVyTG9naWMoeyBzZXRGaWx0ZXJzLCBmaWx0ZXJzLCB0eXBlS2V5IH0pXG5cbiAgICBjb25zdCB7IGxvY2FsRmlsdGVycyB9ID0gdXNlVmFsdWVzKGxvZ2ljKVxuICAgIGNvbnN0IHsgYWRkRmlsdGVyLCBzZXRMb2NhbEZpbHRlcnMgfSA9IHVzZUFjdGlvbnMobG9naWMpXG5cbiAgICAvLyBObyB3YXkgYXJvdW5kIHRoaXMuIFNvbWVob3cgdGhlIG9yZGVyaW5nIG9mIHRoZSBsb2dpYyBjYWxsaW5nIGVhY2ggb3RoZXIgY2F1c2VzIHN0YWxlIFwibG9jYWxGaWx0ZXJzXCJcbiAgICAvLyB0byBiZSBzaG93biBvbiB0aGUgL2Z1bm5lbHMgcGFnZSwgZXZlbiBpZiB3ZSB0cnkgdG8gdXNlIGEgc2VsZWN0b3Igd2l0aCBwcm9wcyB0byBoeWRyYXRlIGl0XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0TG9jYWxGaWx0ZXJzKGZpbHRlcnMpXG4gICAgfSwgW2ZpbHRlcnNdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtsb2NhbEZpbHRlcnMgJiZcbiAgICAgICAgICAgICAgICBsb2NhbEZpbHRlcnMubWFwKChmaWx0ZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxBY3Rpb25GaWx0ZXJSb3cgbG9naWM9e2xvZ2ljfSBmaWx0ZXI9e2ZpbHRlcn0gaW5kZXg9e2luZGV4fSBrZXk9e2luZGV4fSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IGFkZEZpbHRlcigpfSBzdHlsZT17eyBtYXJnaW5Ub3A6ICcwLjVyZW0nIH19PlxuICAgICAgICAgICAgICAgIEFkZCBhY3Rpb24vZXZlbnRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUFjdGlvbnMsIHVzZVZhbHVlcyB9IGZyb20gJ2tlYSdcbmltcG9ydCB7IEVudGl0eVR5cGVzIH0gZnJvbSAnLi4vdHJlbmRzTG9naWMnXG5pbXBvcnQgeyBBY3Rpb25TZWxlY3RQYW5lbCwgQWN0aW9uU2VsZWN0VGFicyB9IGZyb20gJ34vbGliL2NvbXBvbmVudHMvQWN0aW9uU2VsZWN0Qm94J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ2xpYi9jb21wb25lbnRzL0xpbmsnXG5pbXBvcnQgeyB1c2VyTG9naWMgfSBmcm9tICdzY2VuZXMvdXNlckxvZ2ljJ1xuaW1wb3J0IHsgYWN0aW9uc01vZGVsIH0gZnJvbSAnfi9tb2RlbHMvYWN0aW9uc01vZGVsJ1xuXG5leHBvcnQgZnVuY3Rpb24gQWN0aW9uRmlsdGVyRHJvcGRvd24oeyBvbkNsaWNrT3V0c2lkZSwgbG9naWMgfSkge1xuICAgIGNvbnN0IGRyb3Bkb3duUmVmID0gdXNlUmVmKClcbiAgICBjb25zdCB7IHNlbGVjdGVkRmlsdGVyIH0gPSB1c2VWYWx1ZXMobG9naWMpXG4gICAgY29uc3QgeyBldmVudE5hbWVzR3JvdXBlZCB9ID0gdXNlVmFsdWVzKHVzZXJMb2dpYylcbiAgICBjb25zdCB7IGFjdGlvbnNHcm91cGVkIH0gPSB1c2VWYWx1ZXMoYWN0aW9uc01vZGVsKVxuXG4gICAgY29uc3QgZGVzZWxlY3QgPSBlID0+IHtcbiAgICAgICAgaWYgKGRyb3Bkb3duUmVmLmN1cnJlbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBvbkNsaWNrT3V0c2lkZSAmJiBvbkNsaWNrT3V0c2lkZShlKVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGRlc2VsZWN0KVxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZGVzZWxlY3QpXG4gICAgICAgIH1cbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgcmVmPXtkcm9wZG93blJlZn0gY2xhc3NOYW1lPVwiYWN0aW9uLWZpbHRlci1kcm9wZG93blwiPlxuICAgICAgICAgICAgPEFjdGlvblNlbGVjdFRhYnNcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRmlsdGVyLnR5cGUgJiYgc2VsZWN0ZWRGaWx0ZXIudHlwZSAhPT0gRW50aXR5VHlwZXMuTkVXX0VOVElUWSA/IHNlbGVjdGVkRmlsdGVyLnR5cGUgOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxBY3Rpb25QYW5lbENvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImFjdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICBlbnRpdHlUeXBlPXtFbnRpdHlUeXBlcy5BQ1RJT05TfVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXthY3Rpb25zR3JvdXBlZH1cbiAgICAgICAgICAgICAgICAgICAgcGFuZWxJbmRleD17MH1cbiAgICAgICAgICAgICAgICAgICAgbG9naWM9e2xvZ2ljfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEFjdGlvblBhbmVsQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiZXZlbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5VHlwZT17RW50aXR5VHlwZXMuRVZFTlRTfVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtldmVudE5hbWVzR3JvdXBlZH1cbiAgICAgICAgICAgICAgICAgICAgcGFuZWxJbmRleD17MX1cbiAgICAgICAgICAgICAgICAgICAgbG9naWM9e2xvZ2ljfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0FjdGlvblNlbGVjdFRhYnM+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEFjdGlvblBhbmVsQ29udGFpbmVyKHsgZW50aXR5VHlwZSwgcGFuZWxJbmRleCwgb3B0aW9ucywgbG9naWMgfSkge1xuICAgIGNvbnN0IHsgZW50aXRpZXMsIHNlbGVjdGVkRmlsdGVyLCBmaWx0ZXJzIH0gPSB1c2VWYWx1ZXMobG9naWMpXG4gICAgY29uc3QgeyB1cGRhdGVGaWx0ZXIgfSA9IHVzZUFjdGlvbnMobG9naWMpXG5cbiAgICBjb25zdCBkcm9wRG93bk9uU2VsZWN0ID0gaXRlbSA9PiB1cGRhdGVGaWx0ZXIoeyB0eXBlOiBlbnRpdHlUeXBlLCB2YWx1ZTogaXRlbS52YWx1ZSwgaW5kZXg6IHNlbGVjdGVkRmlsdGVyLmluZGV4IH0pXG4gICAgY29uc3QgZHJvcERvd25PbkhvdmVyID0gdmFsdWUgPT4gZW50aXRpZXNbZW50aXR5VHlwZV0uZmlsdGVyKGEgPT4gYS5pZCA9PT0gdmFsdWUpWzBdXG5cbiAgICBjb25zdCByZWRpcmVjdCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkRmlsdGVyICYmIHNlbGVjdGVkRmlsdGVyLnR5cGUgPT09IEVudGl0eVR5cGVzLkFDVElPTlMgJiYgZW50aXR5VHlwZSA9PT0gRW50aXR5VHlwZXMuQUNUSU9OUykge1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gZW50aXRpZXNbc2VsZWN0ZWRGaWx0ZXIudHlwZV0uZmlsdGVyKGEgPT4gYS5pZCA9PT0gc2VsZWN0ZWRGaWx0ZXIuZmlsdGVyLmlkKVswXVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8YSBocmVmPXsnL2FjdGlvbi8nICsgc2VsZWN0ZWRGaWx0ZXIuZmlsdGVyLmlkfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgRWRpdCBcInthY3Rpb24ubmFtZX1cIiA8aSBjbGFzc05hbWU9XCJmaSBmbGF0aWNvbi1leHBvcnRcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlID0gKCkgPT4ge1xuICAgICAgICBpZiAoZW50aXR5VHlwZSA9PT0gRW50aXR5VHlwZXMuQUNUSU9OUyAmJiAhZmlsdGVyc1tFbnRpdHlUeXBlcy5BQ1RJT05TXSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cD5Zb3UgZG9uJ3QgaGF2ZSBhbnkgYWN0aW9ucyBkZWZpbmVkIHlldC4gPC9wPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9hY3Rpb25cIj5DbGljayBoZXJlIHRvIGRlZmluZSBhbiBhY3Rpb24uPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBY3Rpb25TZWxlY3RQYW5lbFxuICAgICAgICAgICAga2V5PXtwYW5lbEluZGV4fVxuICAgICAgICAgICAgdGl0bGU9e2VudGl0eVR5cGV9XG4gICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgICAgZGVmYXVsdE1lbnVJc09wZW49e3RydWV9XG4gICAgICAgICAgICBvblNlbGVjdD17ZHJvcERvd25PblNlbGVjdH1cbiAgICAgICAgICAgIG9uSG92ZXI9e2Ryb3BEb3duT25Ib3Zlcn1cbiAgICAgICAgICAgIGFjdGl2ZT17bnVsbH1cbiAgICAgICAgICAgIHJlZGlyZWN0PXtyZWRpcmVjdCgpfVxuICAgICAgICAgICAgbWVzc2FnZT17bWVzc2FnZSgpfVxuICAgICAgICAvPlxuICAgIClcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VBY3Rpb25zLCB1c2VWYWx1ZXMgfSBmcm9tICdrZWEnXG5pbXBvcnQgeyBFbnRpdHlUeXBlcyB9IGZyb20gJy4uL3RyZW5kc0xvZ2ljJ1xuaW1wb3J0IHsgQ2xvc2VCdXR0b24gfSBmcm9tICd+L2xpYi91dGlscydcbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSAnfi9saWIvY29tcG9uZW50cy9Ecm9wZG93bidcbmltcG9ydCB7IEFjdGlvbkZpbHRlckRyb3Bkb3duIH0gZnJvbSAnLi9BY3Rpb25GaWx0ZXJEcm9wZG93bidcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgUHJvcGVydHlGaWx0ZXJzIH0gZnJvbSAnbGliL2NvbXBvbmVudHMvUHJvcGVydHlGaWx0ZXJzL1Byb3BlcnR5RmlsdGVycydcbmltcG9ydCB7IHVzZXJMb2dpYyB9IGZyb20gJ3NjZW5lcy91c2VyTG9naWMnXG5cbmNvbnN0IGRldGVybWluZUZpbHRlckxhYmVsID0gKHZpc2libGUsIGZpbHRlcikgPT4ge1xuICAgIGlmICh2aXNpYmxlKSByZXR1cm4gJ0hpZGUgRmlsdGVycydcblxuICAgIGlmIChmaWx0ZXIucHJvcGVydGllcyAmJiBPYmplY3Qua2V5cyhmaWx0ZXIucHJvcGVydGllcykubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZmlsdGVyLnByb3BlcnRpZXMpLmxlbmd0aCArICcgRmlsdGVyJyArIChPYmplY3Qua2V5cyhmaWx0ZXIucHJvcGVydGllcykubGVuZ3RoID09PSAxID8gJycgOiAncycpXG4gICAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuICdBZGQgRmlsdGVycydcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEFjdGlvbkZpbHRlclJvdyh7IGxvZ2ljLCBmaWx0ZXIsIGluZGV4IH0pIHtcbiAgICBjb25zdCBub2RlID0gdXNlUmVmKClcbiAgICBjb25zdCB7IHNlbGVjdGVkRmlsdGVyLCBlbnRpdGllcyB9ID0gdXNlVmFsdWVzKGxvZ2ljKVxuICAgIGNvbnN0IHsgc2VsZWN0RmlsdGVyLCB1cGRhdGVGaWx0ZXJNYXRoLCByZW1vdmVMb2NhbEZpbHRlciwgdXBkYXRlRmlsdGVyUHJvcGVydHkgfSA9IHVzZUFjdGlvbnMobG9naWMpXG4gICAgY29uc3QgeyBldmVudFByb3BlcnRpZXMgfSA9IHVzZVZhbHVlcyh1c2VyTG9naWMpXG4gICAgY29uc3QgW2VudGl0eUZpbHRlclZpc2libGUsIHNldEVudGl0eUZpbHRlclZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBsZXQgZW50aXR5LCBuYW1lLCB2YWx1ZVxuICAgIGxldCBtYXRoID0gZmlsdGVyLm1hdGhcbiAgICBjb25zdCBvbkNsb3NlID0gKCkgPT4ge1xuICAgICAgICByZW1vdmVMb2NhbEZpbHRlcih7IHZhbHVlOiBmaWx0ZXIuaWQsIHR5cGU6IGZpbHRlci50eXBlLCBpbmRleCB9KVxuICAgIH1cbiAgICBjb25zdCBvbk1hdGhTZWxlY3QgPSAoXywgbWF0aCkgPT4ge1xuICAgICAgICB1cGRhdGVGaWx0ZXJNYXRoKHsgbWF0aCwgdmFsdWU6IGZpbHRlci5pZCwgdHlwZTogZmlsdGVyLnR5cGUsIGluZGV4OiBpbmRleCB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRyb3BEb3duQ29uZGl0aW9uID0gKCkgPT5cbiAgICAgICAgc2VsZWN0ZWRGaWx0ZXIgJiYgc2VsZWN0ZWRGaWx0ZXIudHlwZSA9PT0gZmlsdGVyLnR5cGUgJiYgc2VsZWN0ZWRGaWx0ZXIuaW5kZXggPT09IGluZGV4XG5cbiAgICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRGaWx0ZXIgJiYgc2VsZWN0ZWRGaWx0ZXIudHlwZSA9PT0gZmlsdGVyLnR5cGUgJiYgc2VsZWN0ZWRGaWx0ZXIuaW5kZXggPT09IGluZGV4KSBzZWxlY3RGaWx0ZXIobnVsbClcbiAgICAgICAgZWxzZSBzZWxlY3RGaWx0ZXIoeyBmaWx0ZXIsIHR5cGU6IGZpbHRlci50eXBlLCBpbmRleCB9KVxuICAgIH1cblxuICAgIGlmIChmaWx0ZXIudHlwZSA9PT0gRW50aXR5VHlwZXMuTkVXX0VOVElUWSkge1xuICAgICAgICBuYW1lID0gbnVsbFxuICAgICAgICB2YWx1ZSA9IG51bGxcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbnRpdHkgPSBlbnRpdGllc1tmaWx0ZXIudHlwZV0uZmlsdGVyKGFjdGlvbiA9PiBhY3Rpb24uaWQgPT09IGZpbHRlci5pZClbMF0gfHwge31cbiAgICAgICAgbmFtZSA9IGVudGl0eS5uYW1lIHx8IGZpbHRlci5uYW1lXG4gICAgICAgIHZhbHVlID0gZW50aXR5LmlkIHx8IGZpbHRlci5pZFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHJlZj17bm9kZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXItYWN0aW9uXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206ICcxLjVweCBkb3R0ZWQgdmFyKC0tYmx1ZSknLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge25hbWUgfHwgJ1NlbGVjdCBhY3Rpb24nfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8TWF0aFNlbGVjdG9yIG1hdGg9e21hdGh9IGluZGV4PXtpbmRleH0gb25NYXRoU2VsZWN0PXtvbk1hdGhTZWxlY3R9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLWxpZ2h0XCIgb25DbGljaz17KCkgPT4gc2V0RW50aXR5RmlsdGVyVmlzaWJsZSghZW50aXR5RmlsdGVyVmlzaWJsZSl9PlxuICAgICAgICAgICAgICAgIHtkZXRlcm1pbmVGaWx0ZXJMYWJlbChlbnRpdHlGaWx0ZXJWaXNpYmxlLCBmaWx0ZXIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q2xvc2VCdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDgsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDMsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZW50aXR5RmlsdGVyVmlzaWJsZSAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxQcm9wZXJ0eUZpbHRlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VLZXk9e2Ake2luZGV4fS0ke3ZhbHVlfS1maWx0ZXJgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcz17ZXZlbnRQcm9wZXJ0aWVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlGaWx0ZXJzPXtmaWx0ZXIucHJvcGVydGllc31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wZXJ0aWVzID0+IHVwZGF0ZUZpbHRlclByb3BlcnR5KHsgcHJvcGVydGllcywgaW5kZXggfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7ZHJvcERvd25Db25kaXRpb24oKSAmJiAoXG4gICAgICAgICAgICAgICAgPEFjdGlvbkZpbHRlckRyb3Bkb3duXG4gICAgICAgICAgICAgICAgICAgIGxvZ2ljPXtsb2dpY31cbiAgICAgICAgICAgICAgICAgICAgb25DbGlja091dHNpZGU9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuY3VycmVudC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdEZpbHRlcihudWxsKVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIE1hdGhTZWxlY3Rvcihwcm9wcykge1xuICAgIGxldCBpdGVtcyA9IFsnVG90YWwnLCAnREFVJ11cbiAgICByZXR1cm4gKFxuICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICAgIHRpdGxlPXtpdGVtc1tpdGVtcy5tYXAoaSA9PiBpLnRvTG93ZXJDYXNlKCkpLmluZGV4T2YocHJvcHMubWF0aCldIHx8ICdUb3RhbCd9XG4gICAgICAgICAgICBidXR0b25DbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1saWdodFwiXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAzMiwgbWFyZ2luUmlnaHQ6IDE2IH19XG4gICAgICAgID5cbiAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwiVG90YWwgc2hvd3MgdG90YWwgZXZlbnQgdm9sdW1lLiBJZiBhIHVzZXIgcGVyZm9ybXMgYW4gZXZlbnQgMyB0aW1lcyBvbiBvbmUgZGF5IGl0IGNvdW50cyBhcyAzLlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgb25DbGljaz17KCkgPT4gcHJvcHMub25NYXRoU2VsZWN0KHByb3BzLmluZGV4LCAndG90YWwnKX0+XG4gICAgICAgICAgICAgICAgICAgIFRvdGFsXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9Ub29sdGlwPlxuXG4gICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkRhaWx5IEFjdGl2ZSBVc2Vycy4gU2VsZWN0aW5nIERBVSB3aWxsIG1lYW4gYSB1c2VyIHBlcmZvcm1pbmcgYW4gZXZlbnQgMyB0aW1lcyBvbiBvbmUgZGF5IGNvdW50cyBhcyAxLlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgb25DbGljaz17KCkgPT4gcHJvcHMub25NYXRoU2VsZWN0KHByb3BzLmluZGV4LCAnZGF1Jyl9PlxuICAgICAgICAgICAgICAgICAgICBEQVVcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgIDwvRHJvcGRvd24+XG4gICAgKVxufVxuIiwiaW1wb3J0IHsga2VhIH0gZnJvbSAna2VhJ1xuaW1wb3J0IHsgYWN0aW9uc01vZGVsIH0gZnJvbSAnfi9tb2RlbHMvYWN0aW9uc01vZGVsJ1xuaW1wb3J0IHsgRW50aXR5VHlwZXMgfSBmcm9tICcuLi90cmVuZHNMb2dpYydcbmltcG9ydCB7IHVzZXJMb2dpYyB9IGZyb20gJ3NjZW5lcy91c2VyTG9naWMnXG5cbmZ1bmN0aW9uIHRvTG9jYWxGaWx0ZXJzKGZpbHRlcnMpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICAuLi4oZmlsdGVyc1tFbnRpdHlUeXBlcy5BQ1RJT05TXSB8fCBbXSksXG4gICAgICAgIC4uLihmaWx0ZXJzW0VudGl0eVR5cGVzLkVWRU5UU10gfHwgW10pLFxuICAgICAgICAuLi4oZmlsdGVyc1tFbnRpdHlUeXBlcy5ORVdfRU5USVRZXSB8fCBbXSksXG4gICAgXVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpXG4gICAgICAgIC5tYXAoKGZpbHRlciwgb3JkZXIpID0+ICh7IC4uLmZpbHRlciwgb3JkZXIgfSkpXG59XG5cbmZ1bmN0aW9uIHRvRmlsdGVycyhsb2NhbEZpbHRlcnMpIHtcbiAgICBjb25zdCBmaWx0ZXJzID0gbG9jYWxGaWx0ZXJzLm1hcCgoZmlsdGVyLCBpbmRleCkgPT4gKHtcbiAgICAgICAgLi4uZmlsdGVyLFxuICAgICAgICBvcmRlcjogaW5kZXgsXG4gICAgfSkpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBbRW50aXR5VHlwZXMuQUNUSU9OU106IGZpbHRlcnMuZmlsdGVyKGZpbHRlciA9PiBmaWx0ZXIudHlwZSA9PT0gRW50aXR5VHlwZXMuQUNUSU9OUyksXG4gICAgICAgIFtFbnRpdHlUeXBlcy5FVkVOVFNdOiBmaWx0ZXJzLmZpbHRlcihmaWx0ZXIgPT4gZmlsdGVyLnR5cGUgPT09IEVudGl0eVR5cGVzLkVWRU5UUyksXG4gICAgICAgIFtFbnRpdHlUeXBlcy5ORVdfRU5USVRZXTogZmlsdGVycy5maWx0ZXIoZmlsdGVyID0+IGZpbHRlci50eXBlID09PSBFbnRpdHlUeXBlcy5ORVdfRU5USVRZKSxcbiAgICB9XG59XG5cbi8vIHJlcXVpcmVkIHByb3BzOlxuLy8gLSBmaWx0ZXJzXG4vLyAtIHNldEZpbHRlcnNcbi8vIC0gdHlwZUtleVxuZXhwb3J0IGNvbnN0IGVudGl0eUZpbHRlckxvZ2ljID0ga2VhKHtcbiAgICBrZXk6IHByb3BzID0+IHByb3BzLnR5cGVLZXksXG4gICAgY29ubmVjdDoge1xuICAgICAgICB2YWx1ZXM6IFt1c2VyTG9naWMsIFsnZXZlbnROYW1lcyddLCBhY3Rpb25zTW9kZWwsIFsnYWN0aW9ucyddXSxcbiAgICB9LFxuICAgIGFjdGlvbnM6ICgpID0+ICh7XG4gICAgICAgIHNlbGVjdEZpbHRlcjogZmlsdGVyID0+ICh7IGZpbHRlciB9KSxcbiAgICAgICAgdXBkYXRlRmlsdGVyTWF0aDogZmlsdGVyID0+ICh7XG4gICAgICAgICAgICB0eXBlOiBmaWx0ZXIudHlwZSxcbiAgICAgICAgICAgIHZhbHVlOiBmaWx0ZXIudmFsdWUsXG4gICAgICAgICAgICBtYXRoOiBmaWx0ZXIubWF0aCxcbiAgICAgICAgICAgIGluZGV4OiBmaWx0ZXIuaW5kZXgsXG4gICAgICAgIH0pLFxuICAgICAgICB1cGRhdGVGaWx0ZXI6IGZpbHRlciA9PiAoeyB0eXBlOiBmaWx0ZXIudHlwZSwgaW5kZXg6IGZpbHRlci5pbmRleCwgdmFsdWU6IGZpbHRlci52YWx1ZSB9KSxcbiAgICAgICAgcmVtb3ZlTG9jYWxGaWx0ZXI6IGZpbHRlciA9PiAoeyB2YWx1ZTogZmlsdGVyLnZhbHVlLCB0eXBlOiBmaWx0ZXIudHlwZSwgaW5kZXg6IGZpbHRlci5pbmRleCB9KSxcbiAgICAgICAgYWRkRmlsdGVyOiB0cnVlLFxuICAgICAgICB1cGRhdGVGaWx0ZXJQcm9wZXJ0eTogZmlsdGVyID0+ICh7IHByb3BlcnRpZXM6IGZpbHRlci5wcm9wZXJ0aWVzLCBpbmRleDogZmlsdGVyLmluZGV4IH0pLFxuICAgICAgICBzZXRGaWx0ZXJzOiBmaWx0ZXJzID0+ICh7IGZpbHRlcnMgfSksXG4gICAgICAgIHNldExvY2FsRmlsdGVyczogZmlsdGVycyA9PiAoeyBmaWx0ZXJzIH0pLFxuICAgIH0pLFxuXG4gICAgcmVkdWNlcnM6ICh7IHByb3BzIH0pID0+ICh7XG4gICAgICAgIHNlbGVjdGVkRmlsdGVyOiBbXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdEZpbHRlcjogKHN0YXRlLCB7IGZpbHRlciB9KSA9PiBmaWx0ZXIsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBsb2NhbEZpbHRlcnM6IFtcbiAgICAgICAgICAgIHRvTG9jYWxGaWx0ZXJzKHByb3BzLmZpbHRlcnMpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNldExvY2FsRmlsdGVyczogKF8sIHsgZmlsdGVycyB9KSA9PiB0b0xvY2FsRmlsdGVycyhmaWx0ZXJzKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSksXG5cbiAgICBzZWxlY3RvcnM6ICh7IHNlbGVjdG9ycyB9KSA9PiAoe1xuICAgICAgICBlbnRpdGllczogW1xuICAgICAgICAgICAgKCkgPT4gW3NlbGVjdG9ycy5ldmVudE5hbWVzLCBzZWxlY3RvcnMuYWN0aW9uc10sXG4gICAgICAgICAgICAoZXZlbnRzLCBhY3Rpb25zKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgW0VudGl0eVR5cGVzLkFDVElPTlNdOiBhY3Rpb25zLFxuICAgICAgICAgICAgICAgICAgICBbRW50aXR5VHlwZXMuRVZFTlRTXTogZXZlbnRzLm1hcChldmVudCA9PiAoeyBpZDogZXZlbnQsIG5hbWU6IGV2ZW50IH0pKSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBmaWx0ZXJzOiBbKCkgPT4gW3NlbGVjdG9ycy5sb2NhbEZpbHRlcnNdLCBsb2NhbEZpbHRlcnMgPT4gdG9GaWx0ZXJzKGxvY2FsRmlsdGVycyldLFxuICAgIH0pLFxuXG4gICAgbGlzdGVuZXJzOiAoeyBhY3Rpb25zLCB2YWx1ZXMsIHByb3BzIH0pID0+ICh7XG4gICAgICAgIHVwZGF0ZUZpbHRlcjogKHsgdHlwZSwgaW5kZXgsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgIGFjdGlvbnMuc2V0RmlsdGVycyhcbiAgICAgICAgICAgICAgICB2YWx1ZXMubG9jYWxGaWx0ZXJzLm1hcCgoZmlsdGVyLCBpKSA9PiAoaSA9PT0gaW5kZXggPyB7IC4uLmZpbHRlciwgaWQ6IHZhbHVlLCB0eXBlIH0gOiBmaWx0ZXIpKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgYWN0aW9ucy5zZWxlY3RGaWx0ZXIobnVsbClcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlRmlsdGVyUHJvcGVydHk6ICh7IHByb3BlcnRpZXMsIGluZGV4IH0pID0+IHtcbiAgICAgICAgICAgIGFjdGlvbnMuc2V0RmlsdGVycyhcbiAgICAgICAgICAgICAgICB2YWx1ZXMubG9jYWxGaWx0ZXJzLm1hcCgoZmlsdGVyLCBpKSA9PiAoaSA9PT0gaW5kZXggPyB7IC4uLmZpbHRlciwgcHJvcGVydGllcyB9IDogZmlsdGVyKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlRmlsdGVyTWF0aDogKHsgbWF0aCwgaW5kZXggfSkgPT4ge1xuICAgICAgICAgICAgYWN0aW9ucy5zZXRGaWx0ZXJzKHZhbHVlcy5sb2NhbEZpbHRlcnMubWFwKChmaWx0ZXIsIGkpID0+IChpID09PSBpbmRleCA/IHsgLi4uZmlsdGVyLCBtYXRoIH0gOiBmaWx0ZXIpKSlcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlTG9jYWxGaWx0ZXI6ICh7IGluZGV4IH0pID0+IHtcbiAgICAgICAgICAgIGFjdGlvbnMuc2V0RmlsdGVycyh2YWx1ZXMubG9jYWxGaWx0ZXJzLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaW5kZXgpKVxuICAgICAgICB9LFxuICAgICAgICBhZGRGaWx0ZXI6ICgpID0+IHtcbiAgICAgICAgICAgIGFjdGlvbnMuc2V0RmlsdGVycyhbXG4gICAgICAgICAgICAgICAgLi4udmFsdWVzLmxvY2FsRmlsdGVycyxcbiAgICAgICAgICAgICAgICB7IGlkOiBudWxsLCB0eXBlOiBFbnRpdHlUeXBlcy5ORVdfRU5USVRZLCBvcmRlcjogdmFsdWVzLmxvY2FsRmlsdGVycy5sZW5ndGggfSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgIH0sXG4gICAgICAgIHNldEZpbHRlcnM6ICh7IGZpbHRlcnMgfSkgPT4ge1xuICAgICAgICAgICAgcHJvcHMuc2V0RmlsdGVycyh0b0ZpbHRlcnMoZmlsdGVycykpXG4gICAgICAgIH0sXG4gICAgfSksXG59KVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uL2xpYi91dGlscydcblxuZXhwb3J0IGNsYXNzIEFjdGlvblNlbGVjdEluZm8gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGluZm9EaXYgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICAgIGNvbXBvbmVudERpZE1vdW50KHByZXZQcm9wcykge1xuICAgICAgICBpZiAoIXRoaXMuaW5mb0Rpdi5jdXJyZW50KSByZXR1cm5cbiAgICAgICAgbGV0IHJlY3QgPSB0aGlzLnByb3BzLmJvdW5kaW5nUmVjdFxuICAgICAgICB0aGlzLmluZm9EaXYuY3VycmVudC5zdHlsZS50b3AgPSByZWN0LnRvcCAtIHJlY3QuaGVpZ2h0IC8gMiArICdweCdcbiAgICAgICAgdGhpcy5pbmZvRGl2LmN1cnJlbnQuc3R5bGUubGVmdCA9IHJlY3QubGVmdCArIHJlY3Qud2lkdGggKyAncHgnXG4gICAgICAgIHRoaXMuaW5mb0Rpdi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAxXG4gICAgfVxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnREaWRNb3VudCgpXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgZW50aXR5LCBpc09wZW4gfSA9IHRoaXMucHJvcHNcbiAgICAgICAgaWYgKCFlbnRpdHkpIHJldHVybiBudWxsXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1ib3gtaW5mb1wiIHJlZj17dGhpcy5pbmZvRGl2fSBzdHlsZT17eyBvcGFjaXR5OiBpc09wZW4gPyAxIDogMCB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzAuNXJlbScgfX0+e2VudGl0eS5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgIHtlbnRpdHkuc3RlcHMgJiZcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5LnN0ZXBzLm1hcCgoc3RlcCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtzdGVwLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBrZXk9e3N0ZXAuaWR9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0ZXAuZXZlbnQgJiYgc3RlcC5ldmVudFswXSA9PSAnJCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzdGVwLmV2ZW50WzFdLnRvVXBwZXJDYXNlKCkgKyBzdGVwLmV2ZW50LnNsaWNlKDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc3RlcC5ldmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGxpc3RTdHlsZTogJ25vbmUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGVwLnNlbGVjdG9yICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1NTIHNlbGVjdG9yIG1hdGNoZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwcmU+e3N0ZXAuc2VsZWN0b3J9PC9wcmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RlcC50YWdfbmFtZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRhZyBuYW1lIG1hdGNoZXMgPHByZT57c3RlcC50YWdfbmFtZX08L3ByZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGVwLnRleHQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0IG1hdGNoZXMgPHByZT57c3RlcC50ZXh0fTwvcHJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0ZXAuaHJlZiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpbmsgSFJFRiBtYXRjaGVzIDxwcmU+e3N0ZXAuaHJlZn08L3ByZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGVwLnVybCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVSTCB7c3RlcC51cmxfbWF0Y2hpbmcgPT0gJ2NvbnRhaW5zJyA/ICdjb250YWlucycgOiAnbWF0Y2hlcyd9eycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwcmU+e3N0ZXAudXJsfTwvcHJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4IDwgZW50aXR5LnN0ZXBzLmxlbmd0aCAtIDEgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY29uZGFyeVwiIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbjogJzFyZW0nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT1JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==