(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard~trends"],{

/***/ "./frontend/src/scenes/trends/ActionsLineGraph.js":
/*!********************************************************!*\
  !*** ./frontend/src/scenes/trends/ActionsLineGraph.js ***!
  \********************************************************/
/*! exports provided: ActionsLineGraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsLineGraph", function() { return ActionsLineGraph; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/utils */ "./frontend/src/lib/utils.js");
/* harmony import */ var _LineGraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LineGraph */ "./frontend/src/scenes/trends/LineGraph.js");
/* harmony import */ var kea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! kea */ "./node_modules/kea/lib/index.esm.js");
/* harmony import */ var scenes_trends_trendsLogic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! scenes/trends/trendsLogic */ "./frontend/src/scenes/trends/trendsLogic.js");






function ActionsLineGraph(_ref) {
  var _ref$dashboardItemId = _ref.dashboardItemId,
      dashboardItemId = _ref$dashboardItemId === void 0 ? null : _ref$dashboardItemId,
      filtersParam = _ref.filters;

  var _useValues = Object(kea__WEBPACK_IMPORTED_MODULE_4__["useValues"])(Object(scenes_trends_trendsLogic__WEBPACK_IMPORTED_MODULE_5__["trendsLogic"])({
    dashboardItemId: dashboardItemId,
    filters: filtersParam
  })),
      filters = _useValues.filters,
      results = _useValues.results;

  var _useActions = Object(kea__WEBPACK_IMPORTED_MODULE_4__["useActions"])(Object(scenes_trends_trendsLogic__WEBPACK_IMPORTED_MODULE_5__["trendsLogic"])({
    dashboardItemId: dashboardItemId,
    filters: filtersParam
  })),
      loadResults = _useActions.loadResults,
      loadPeople = _useActions.loadPeople;

  var people_action = filters.people_action,
      people_day = filters.people_day,
      otherFilters = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(filters, ["people_action", "people_day"]);

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    loadResults();
  }, [Object(_lib_utils__WEBPACK_IMPORTED_MODULE_2__["toParams"])(otherFilters)]);
  return results ? filters.session || results.reduce(function (total, item) {
    return total + item.count;
  }, 0) > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LineGraph__WEBPACK_IMPORTED_MODULE_3__["LineGraph"], {
    type: "line",
    datasets: results,
    labels: results[0].labels,
    onClick: dashboardItemId ? null : function (point) {
      var dataset = point.dataset,
          day = point.day;
      loadPeople(dataset.action || 'session', day, dataset.breakdown_value);
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      textAlign: 'center',
      paddingTop: '4rem'
    }
  }, "We couldn't find any matching events. Try changing dates or pick another action or event.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib_utils__WEBPACK_IMPORTED_MODULE_2__["Loading"], null);
}

/***/ }),

/***/ "./frontend/src/scenes/trends/ActionsPie.js":
/*!**************************************************!*\
  !*** ./frontend/src/scenes/trends/ActionsPie.js ***!
  \**************************************************/
/*! exports provided: ActionsPie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsPie", function() { return ActionsPie; });
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
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/api */ "./frontend/src/lib/api.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/utils */ "./frontend/src/lib/utils.js");
/* harmony import */ var _LineGraph__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LineGraph */ "./frontend/src/scenes/trends/LineGraph.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var colors = ['blue', 'yellow', 'green', 'red', 'purple', 'gray', 'indigo', 'pink', 'orange', 'teal', 'cyan', 'gray-dark'];

var getColorVar = function getColorVar(variable) {
  return getComputedStyle(document.body).getPropertyValue('--' + variable);
};

var ActionsPie = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ActionsPie, _Component);

  var _super = _createSuper(ActionsPie);

  function ActionsPie(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ActionsPie);

    _this = _super.call(this, props);
    _this.state = {};
    _this.fetchGraph = _this.fetchGraph.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));

    _this.fetchGraph();

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ActionsPie, [{
    key: "fetchGraph",
    value: function fetchGraph() {
      var _this2 = this;

      _lib_api__WEBPACK_IMPORTED_MODULE_7__["default"].get('api/action/trends/?' + Object(_lib_utils__WEBPACK_IMPORTED_MODULE_8__["toParams"])(this.props.filters)).then(function (data) {
        data = data.sort(function (a, b) {
          return b.count - a.count;
        });
        var color_list = colors.map(function (color) {
          return getColorVar(color);
        });

        _this2.setState({
          data: [{
            labels: data.map(function (item) {
              return item.label;
            }),
            data: data.map(function (item) {
              return item.data && item.data.reduce(function (prev, d) {
                return prev + d;
              }, 0);
            }),
            backgroundColor: color_list,
            hoverBackgroundColor: color_list,
            hoverBorderColor: color_list,
            borderColor: color_list,
            hoverBorderWidth: 10,
            borderWidth: 1
          }],
          total: data.reduce(function (prev, item) {
            return prev + item.count;
          }, 0)
        });

        _this2.props.onData && _this2.props.onData(data);
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.filters !== this.props.filters) this.fetchGraph();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          data = _this$state.data,
          total = _this$state.total;
      return data ? data[0] && data[0].labels ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          position: 'absolute',
          width: '100%',
          height: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        style: {
          position: 'absolute',
          margin: '0 auto',
          left: '50%',
          top: '50%',
          fontSize: '3rem'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          marginLeft: '-50%',
          marginTop: -30
        }
      }, total)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_LineGraph__WEBPACK_IMPORTED_MODULE_9__["LineGraph"], {
        type: "doughnut",
        datasets: data,
        labels: data[0].labels
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        style: {
          textAlign: 'center',
          marginTop: '4rem'
        }
      }, "We couldn't find any matching actions.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_lib_utils__WEBPACK_IMPORTED_MODULE_8__["Loading"], null);
    }
  }]);

  return ActionsPie;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ }),

/***/ "./frontend/src/scenes/trends/ActionsTable.js":
/*!****************************************************!*\
  !*** ./frontend/src/scenes/trends/ActionsTable.js ***!
  \****************************************************/
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
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/api */ "./frontend/src/lib/api.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/utils */ "./frontend/src/lib/utils.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var ActionsTable = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ActionsTable, _Component);

  var _super = _createSuper(ActionsTable);

  function ActionsTable(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ActionsTable);

    _this = _super.call(this, props);
    _this.state = {};
    _this.fetchGraph = _this.fetchGraph.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));

    _this.fetchGraph();

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ActionsTable, [{
    key: "fetchGraph",
    value: function fetchGraph() {
      var _this2 = this;

      var url = 'api/action/trends/?';
      if (this.props.filters.session) url = 'api/event/sessions/?';
      _lib_api__WEBPACK_IMPORTED_MODULE_7__["default"].get(url + Object(_lib_utils__WEBPACK_IMPORTED_MODULE_8__["toParams"])(this.props.filters)).then(function (data) {
        if (!_this2.props.filters.session) data = data.sort(function (a, b) {
          return b.count - a.count;
        });

        _this2.setState({
          data: data
        });

        _this2.props.onData && _this2.props.onData(data);
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.filters !== this.props.filters) {
        this.fetchGraph();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.state.data;
      var filters = this.props.filters;
      return data ? data[0] && (filters.session || data[0].labels) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("table", {
        className: "table"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        style: {
          width: 100
        }
      }, filters.session ? 'Session Attribute' : 'Action'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        style: {
          width: 50
        }
      }, filters.session ? 'Value' : 'Count')), data.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
          key: item.label
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, item.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, item.count));
      }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        style: {
          textAlign: 'center',
          marginTop: '4rem'
        }
      }, "We couldn't find any matching actions.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_lib_utils__WEBPACK_IMPORTED_MODULE_8__["Loading"], null);
    }
  }]);

  return ActionsTable;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
ActionsTable.propTypes = {
  filters: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object.isRequired,
  onData: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func
};

/***/ }),

/***/ "./frontend/src/scenes/trends/LineGraph.js":
/*!*************************************************!*\
  !*** ./frontend/src/scenes/trends/LineGraph.js ***!
  \*************************************************/
/*! exports provided: LineGraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineGraph", function() { return LineGraph; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/lib/utils */ "./frontend/src/lib/utils.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





 //--Chart Style Options--//
// Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"

chart_js__WEBPACK_IMPORTED_MODULE_10___default.a.defaults.global.legend.display = false; //--Chart Style Options--//

var LineGraph = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(LineGraph, _Component);

  var _super = _createSuper(LineGraph);

  function LineGraph() {
    var _this2;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, LineGraph);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super.call.apply(_super, [this].concat(args));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this2), "chartRef", react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this2), "processDataset", function (dataset, index) {
      var colors = ['blue', 'orange', 'green', 'red', 'purple', 'gray'];

      var getVar = function getVar(variable) {
        return getComputedStyle(document.body).getPropertyValue('--' + variable);
      };

      return _objectSpread({
        borderColor: getVar(colors[index]),
        backgroundColor: (_this2.props.type == 'bar' || _this2.props.type == 'doughnut') && getVar(colors[index]),
        fill: false,
        borderWidth: 1,
        pointHitRadius: 8
      }, dataset);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this2), "buildChart", function () {
      var myChartRef = _this2.chartRef.current.getContext('2d');

      var _this2$props = _this2.props,
          datasets = _this2$props.datasets,
          labels = _this2$props.labels,
          options = _this2$props.options;
      if (typeof _this2.myLineChart !== 'undefined') _this2.myLineChart.destroy();

      var _this = _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this2); // if chart is line graph, make duplicate lines and overlay to show dotted lines


      datasets = !_this2.props.type || _this2.props.type == 'line' ? [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(datasets.map(function (dataset, index) {
        var datasetCopy = Object.assign({}, dataset);

        var data = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(dataset.data);

        var labels = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(dataset.labels);

        var days = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(dataset.days);

        data.pop();
        labels.pop();
        days.pop();
        datasetCopy.data = data;
        datasetCopy.labels = labels;
        datasetCopy.days = days;
        return _this2.processDataset(datasetCopy, index);
      })), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(datasets.map(function (dataset, index) {
        var datasetCopy = Object.assign({}, dataset);
        var datasetLength = datasetCopy.data.length;
        datasetCopy.dotted = true;
        datasetCopy.borderDash = [10, 10];
        datasetCopy.data = datasetCopy.data.length > 2 ? datasetCopy.data.map(function (datum, index) {
          return index == datasetLength - 1 || index == datasetLength - 2 ? datum : null;
        }) : datasetCopy.data;
        return _this2.processDataset(datasetCopy, index);
      }))) : datasets.map(function (dataset, index) {
        return _this2.processDataset(dataset, index);
      });
      _this2.myLineChart = new chart_js__WEBPACK_IMPORTED_MODULE_10___default.a(myChartRef, {
        type: _this2.props.type || 'line',
        data: {
          //Bring in data
          labels: labels,
          datasets: datasets
        },
        options: _this2.props.type !== 'doughnut' ? {
          responsive: true,
          maintainAspectRatio: false,
          scaleShowHorizontalLines: false,
          tooltips: {
            enabled: true,
            intersect: false,
            mode: 'nearest',
            bodySpacing: 5,
            yPadding: 10,
            xPadding: 10,
            caretPadding: 0,
            displayColors: false,
            backgroundColor: '#1dc9b7',
            titleFontColor: '#ffffff',
            labelFontSize: 23,
            cornerRadius: 4,
            fontSize: 16,
            footerSpacing: 0,
            titleSpacing: 0,
            callbacks: {
              label: function label(tooltipItem, data) {
                var entityData = data.datasets[tooltipItem.datasetIndex];
                if (entityData.dotted && !(tooltipItem.index == entityData.data.length - 1)) return null;
                var label = entityData.chartLabel || entityData.label || '';

                if (entityData.action.properties && !lodash__WEBPACK_IMPORTED_MODULE_13___default.a.isEmpty(entityData.action.properties)) {
                  label += ' (';
                  Object.entries(entityData.action.properties).forEach(function (_ref, index) {
                    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
                        key = _ref2[0],
                        val = _ref2[1];

                    if (index > 0) label += ', ';
                    label += Object(_lib_utils__WEBPACK_IMPORTED_MODULE_12__["formatFilterName"])(key).split(' ')[1] + ' ' + val;
                  });
                  label += ')';
                }

                return label + ' - ' + tooltipItem.yLabel.toLocaleString();
              }
            }
          },
          hover: {
            mode: 'nearest',
            onHover: function onHover(e) {
              if (_this.props.onClick) {
                var point = this.getElementAtEvent(e);
                if (point.length) e.target.style.cursor = 'pointer';else e.target.style.cursor = 'default';
              }
            }
          },
          scales: {
            xAxes: [{
              display: true,
              gridLines: {
                lineWidth: 0
              },
              ticks: {
                autoSkip: true,
                beginAtZero: true,
                min: 0
              }
            }],
            yAxes: [{
              display: true,
              ticks: {
                autoSkip: true,
                beginAtZero: true,
                min: 0
              }
            }]
          },
          onClick: function onClick(event, _ref3) {
            var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref3, 1),
                point = _ref4[0];

            if (point && _this2.props.onClick) {
              var dataset = datasets[point._datasetIndex];

              _this2.props.onClick({
                point: point,
                dataset: dataset,
                index: point._index,
                label: typeof point._index !== 'undefined' && dataset.labels ? dataset.labels[point._index] : undefined,
                day: typeof point._index !== 'undefined' && dataset.days ? dataset.days[point._index] : undefined,
                value: typeof point._index !== 'undefined' && dataset.data ? dataset.data[point._index] : undefined
              });
            }
          }
        } : {
          responsive: true,
          maintainAspectRatio: false,
          hover: {
            mode: 'index'
          }
        }
      });
    });

    return _this2;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(LineGraph, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.buildChart();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.datasets !== this.props.datasets) {
        this.buildChart();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "graph-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("canvas", {
        ref: this.chartRef
      }));
    }
  }]);

  return LineGraph;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);
LineGraph.propTypes = {
  datasets: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.shape({
    label: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
    count: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number
  })).isRequired,
  labels: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.array.isRequired,
  options: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object,
  type: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvc2NlbmVzL3RyZW5kcy9BY3Rpb25zTGluZUdyYXBoLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9zY2VuZXMvdHJlbmRzL0FjdGlvbnNQaWUuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL3NjZW5lcy90cmVuZHMvQWN0aW9uc1RhYmxlLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9zY2VuZXMvdHJlbmRzL0xpbmVHcmFwaC5qcyJdLCJuYW1lcyI6WyJBY3Rpb25zTGluZUdyYXBoIiwiZGFzaGJvYXJkSXRlbUlkIiwiZmlsdGVyc1BhcmFtIiwiZmlsdGVycyIsInVzZVZhbHVlcyIsInRyZW5kc0xvZ2ljIiwicmVzdWx0cyIsInVzZUFjdGlvbnMiLCJsb2FkUmVzdWx0cyIsImxvYWRQZW9wbGUiLCJwZW9wbGVfYWN0aW9uIiwicGVvcGxlX2RheSIsIm90aGVyRmlsdGVycyIsInVzZUVmZmVjdCIsInRvUGFyYW1zIiwic2Vzc2lvbiIsInJlZHVjZSIsInRvdGFsIiwiaXRlbSIsImNvdW50IiwibGFiZWxzIiwicG9pbnQiLCJkYXRhc2V0IiwiZGF5IiwiYWN0aW9uIiwiYnJlYWtkb3duX3ZhbHVlIiwidGV4dEFsaWduIiwicGFkZGluZ1RvcCIsImNvbG9ycyIsImdldENvbG9yVmFyIiwidmFyaWFibGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiZG9jdW1lbnQiLCJib2R5IiwiZ2V0UHJvcGVydHlWYWx1ZSIsIkFjdGlvbnNQaWUiLCJwcm9wcyIsInN0YXRlIiwiZmV0Y2hHcmFwaCIsImJpbmQiLCJhcGkiLCJnZXQiLCJ0aGVuIiwiZGF0YSIsInNvcnQiLCJhIiwiYiIsImNvbG9yX2xpc3QiLCJtYXAiLCJjb2xvciIsInNldFN0YXRlIiwibGFiZWwiLCJwcmV2IiwiZCIsImJhY2tncm91bmRDb2xvciIsImhvdmVyQmFja2dyb3VuZENvbG9yIiwiaG92ZXJCb3JkZXJDb2xvciIsImJvcmRlckNvbG9yIiwiaG92ZXJCb3JkZXJXaWR0aCIsImJvcmRlcldpZHRoIiwib25EYXRhIiwicHJldlByb3BzIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsImxlZnQiLCJ0b3AiLCJmb250U2l6ZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJDb21wb25lbnQiLCJBY3Rpb25zVGFibGUiLCJ1cmwiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsIkNoYXJ0IiwiZGVmYXVsdHMiLCJnbG9iYWwiLCJsZWdlbmQiLCJkaXNwbGF5IiwiTGluZUdyYXBoIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJpbmRleCIsImdldFZhciIsInR5cGUiLCJmaWxsIiwicG9pbnRIaXRSYWRpdXMiLCJteUNoYXJ0UmVmIiwiY2hhcnRSZWYiLCJjdXJyZW50IiwiZ2V0Q29udGV4dCIsImRhdGFzZXRzIiwib3B0aW9ucyIsIm15TGluZUNoYXJ0IiwiZGVzdHJveSIsIl90aGlzIiwiZGF0YXNldENvcHkiLCJPYmplY3QiLCJhc3NpZ24iLCJkYXlzIiwicG9wIiwicHJvY2Vzc0RhdGFzZXQiLCJkYXRhc2V0TGVuZ3RoIiwibGVuZ3RoIiwiZG90dGVkIiwiYm9yZGVyRGFzaCIsImRhdHVtIiwicmVzcG9uc2l2ZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJzY2FsZVNob3dIb3Jpem9udGFsTGluZXMiLCJ0b29sdGlwcyIsImVuYWJsZWQiLCJpbnRlcnNlY3QiLCJtb2RlIiwiYm9keVNwYWNpbmciLCJ5UGFkZGluZyIsInhQYWRkaW5nIiwiY2FyZXRQYWRkaW5nIiwiZGlzcGxheUNvbG9ycyIsInRpdGxlRm9udENvbG9yIiwibGFiZWxGb250U2l6ZSIsImNvcm5lclJhZGl1cyIsImZvb3RlclNwYWNpbmciLCJ0aXRsZVNwYWNpbmciLCJjYWxsYmFja3MiLCJ0b29sdGlwSXRlbSIsImVudGl0eURhdGEiLCJkYXRhc2V0SW5kZXgiLCJjaGFydExhYmVsIiwicHJvcGVydGllcyIsIl8iLCJpc0VtcHR5IiwiZW50cmllcyIsImZvckVhY2giLCJrZXkiLCJ2YWwiLCJmb3JtYXRGaWx0ZXJOYW1lIiwic3BsaXQiLCJ5TGFiZWwiLCJ0b0xvY2FsZVN0cmluZyIsImhvdmVyIiwib25Ib3ZlciIsImUiLCJvbkNsaWNrIiwiZ2V0RWxlbWVudEF0RXZlbnQiLCJ0YXJnZXQiLCJzdHlsZSIsImN1cnNvciIsInNjYWxlcyIsInhBeGVzIiwiZ3JpZExpbmVzIiwibGluZVdpZHRoIiwidGlja3MiLCJhdXRvU2tpcCIsImJlZ2luQXRaZXJvIiwibWluIiwieUF4ZXMiLCJldmVudCIsIl9kYXRhc2V0SW5kZXgiLCJfaW5kZXgiLCJ1bmRlZmluZWQiLCJ2YWx1ZSIsImJ1aWxkQ2hhcnQiLCJhcnJheU9mIiwic2hhcGUiLCJzdHJpbmciLCJudW1iZXIiLCJhcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLGdCQUFULE9BQTZFO0FBQUEsa0NBQWpEQyxlQUFpRDtBQUFBLE1BQWpEQSxlQUFpRCxxQ0FBL0IsSUFBK0I7QUFBQSxNQUFoQkMsWUFBZ0IsUUFBekJDLE9BQXlCOztBQUNoRixtQkFBNkJDLHFEQUFTLENBQUNDLDZFQUFXLENBQUM7QUFBRUosbUJBQWUsRUFBZkEsZUFBRjtBQUFtQkUsV0FBTyxFQUFFRDtBQUE1QixHQUFELENBQVosQ0FBdEM7QUFBQSxNQUFRQyxPQUFSLGNBQVFBLE9BQVI7QUFBQSxNQUFpQkcsT0FBakIsY0FBaUJBLE9BQWpCOztBQUNBLG9CQUFvQ0Msc0RBQVUsQ0FBQ0YsNkVBQVcsQ0FBQztBQUFFSixtQkFBZSxFQUFmQSxlQUFGO0FBQW1CRSxXQUFPLEVBQUVEO0FBQTVCLEdBQUQsQ0FBWixDQUE5QztBQUFBLE1BQVFNLFdBQVIsZUFBUUEsV0FBUjtBQUFBLE1BQXFCQyxVQUFyQixlQUFxQkEsVUFBckI7O0FBRUEsTUFBUUMsYUFBUixHQUF1RFAsT0FBdkQsQ0FBUU8sYUFB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RUFBRXpFLGtEQUFTLENBQUNHO0FBTEQsQ0FBdEIsQyIsImZpbGUiOiJkYXNoYm9hcmR+dHJlbmRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTG9hZGluZywgdG9QYXJhbXMgfSBmcm9tICcuLi8uLi9saWIvdXRpbHMnXG5pbXBvcnQgeyBMaW5lR3JhcGggfSBmcm9tICcuL0xpbmVHcmFwaCdcbmltcG9ydCB7IHVzZUFjdGlvbnMsIHVzZVZhbHVlcyB9IGZyb20gJ2tlYSdcbmltcG9ydCB7IHRyZW5kc0xvZ2ljIH0gZnJvbSAnc2NlbmVzL3RyZW5kcy90cmVuZHNMb2dpYydcblxuZXhwb3J0IGZ1bmN0aW9uIEFjdGlvbnNMaW5lR3JhcGgoeyBkYXNoYm9hcmRJdGVtSWQgPSBudWxsLCBmaWx0ZXJzOiBmaWx0ZXJzUGFyYW0gfSkge1xuICAgIGNvbnN0IHsgZmlsdGVycywgcmVzdWx0cyB9ID0gdXNlVmFsdWVzKHRyZW5kc0xvZ2ljKHsgZGFzaGJvYXJkSXRlbUlkLCBmaWx0ZXJzOiBmaWx0ZXJzUGFyYW0gfSkpXG4gICAgY29uc3QgeyBsb2FkUmVzdWx0cywgbG9hZFBlb3BsZSB9ID0gdXNlQWN0aW9ucyh0cmVuZHNMb2dpYyh7IGRhc2hib2FyZEl0ZW1JZCwgZmlsdGVyczogZmlsdGVyc1BhcmFtIH0pKVxuXG4gICAgY29uc3QgeyBwZW9wbGVfYWN0aW9uLCBwZW9wbGVfZGF5LCAuLi5vdGhlckZpbHRlcnMgfSA9IGZpbHRlcnNcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxvYWRSZXN1bHRzKClcbiAgICB9LCBbdG9QYXJhbXMob3RoZXJGaWx0ZXJzKV0pXG5cbiAgICByZXR1cm4gcmVzdWx0cyA/IChcbiAgICAgICAgZmlsdGVycy5zZXNzaW9uIHx8IHJlc3VsdHMucmVkdWNlKCh0b3RhbCwgaXRlbSkgPT4gdG90YWwgKyBpdGVtLmNvdW50LCAwKSA+IDAgPyAoXG4gICAgICAgICAgICA8TGluZUdyYXBoXG4gICAgICAgICAgICAgICAgdHlwZT1cImxpbmVcIlxuICAgICAgICAgICAgICAgIGRhdGFzZXRzPXtyZXN1bHRzfVxuICAgICAgICAgICAgICAgIGxhYmVscz17cmVzdWx0c1swXS5sYWJlbHN9XG4gICAgICAgICAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgIGRhc2hib2FyZEl0ZW1JZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHBvaW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YXNldCwgZGF5IH0gPSBwb2ludFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZFBlb3BsZShkYXRhc2V0LmFjdGlvbiB8fCAnc2Vzc2lvbicsIGRheSwgZGF0YXNldC5icmVha2Rvd25fdmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgcGFkZGluZ1RvcDogJzRyZW0nIH19PlxuICAgICAgICAgICAgICAgIFdlIGNvdWxkbid0IGZpbmQgYW55IG1hdGNoaW5nIGV2ZW50cy4gVHJ5IGNoYW5naW5nIGRhdGVzIG9yIHBpY2sgYW5vdGhlciBhY3Rpb24gb3IgZXZlbnQuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIClcbiAgICApIDogKFxuICAgICAgICA8TG9hZGluZyAvPlxuICAgIClcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vbGliL2FwaSdcbmltcG9ydCB7IExvYWRpbmcsIHRvUGFyYW1zIH0gZnJvbSAnLi4vLi4vbGliL3V0aWxzJ1xuaW1wb3J0IHsgTGluZUdyYXBoIH0gZnJvbSAnLi9MaW5lR3JhcGgnXG5cbmxldCBjb2xvcnMgPSBbXG4gICAgJ2JsdWUnLFxuICAgICd5ZWxsb3cnLFxuICAgICdncmVlbicsXG4gICAgJ3JlZCcsXG4gICAgJ3B1cnBsZScsXG4gICAgJ2dyYXknLFxuICAgICdpbmRpZ28nLFxuICAgICdwaW5rJyxcbiAgICAnb3JhbmdlJyxcbiAgICAndGVhbCcsXG4gICAgJ2N5YW4nLFxuICAgICdncmF5LWRhcmsnLFxuXVxubGV0IGdldENvbG9yVmFyID0gdmFyaWFibGUgPT5cbiAgICBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJy0tJyArIHZhcmlhYmxlKVxuZXhwb3J0IGNsYXNzIEFjdGlvbnNQaWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge31cbiAgICAgICAgdGhpcy5mZXRjaEdyYXBoID0gdGhpcy5mZXRjaEdyYXBoLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5mZXRjaEdyYXBoKClcbiAgICB9XG4gICAgZmV0Y2hHcmFwaCgpIHtcbiAgICAgICAgYXBpLmdldCgnYXBpL2FjdGlvbi90cmVuZHMvPycgKyB0b1BhcmFtcyh0aGlzLnByb3BzLmZpbHRlcnMpKS50aGVuKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IGRhdGEuc29ydCgoYSwgYikgPT4gYi5jb3VudCAtIGEuY291bnQpXG4gICAgICAgICAgICAgICAgbGV0IGNvbG9yX2xpc3QgPSBjb2xvcnMubWFwKGNvbG9yID0+IGdldENvbG9yVmFyKGNvbG9yKSlcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsczogZGF0YS5tYXAoaXRlbSA9PiBpdGVtLmxhYmVsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5kYXRhICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmRhdGEucmVkdWNlKChwcmV2LCBkKSA9PiBwcmV2ICsgZCwgMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JfbGlzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmRDb2xvcjogY29sb3JfbGlzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlckJvcmRlckNvbG9yOiBjb2xvcl9saXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvcl9saXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyQm9yZGVyV2lkdGg6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IGRhdGEucmVkdWNlKChwcmV2LCBpdGVtKSA9PiBwcmV2ICsgaXRlbS5jb3VudCwgMCksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uRGF0YSAmJiB0aGlzLnByb3BzLm9uRGF0YShkYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgaWYgKHByZXZQcm9wcy5maWx0ZXJzICE9PSB0aGlzLnByb3BzLmZpbHRlcnMpIHRoaXMuZmV0Y2hHcmFwaCgpXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgZGF0YSwgdG90YWwgfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgcmV0dXJuIGRhdGEgPyAoXG4gICAgICAgICAgICBkYXRhWzBdICYmIGRhdGFbMF0ubGFiZWxzID8gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGgxXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzNyZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnLTUwJScsIG1hcmdpblRvcDogLTMwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b3RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8TGluZUdyYXBoXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZG91Z2hudXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHM9e2RhdGFbMF0ubGFiZWxzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Ub3A6ICc0cmVtJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgV2UgY291bGRuJ3QgZmluZCBhbnkgbWF0Y2hpbmcgYWN0aW9ucy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICApXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgICApXG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9saWIvYXBpJ1xuaW1wb3J0IHsgTG9hZGluZywgdG9QYXJhbXMgfSBmcm9tICcuLi8uLi9saWIvdXRpbHMnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmV4cG9ydCBjbGFzcyBBY3Rpb25zVGFibGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fVxuICAgICAgICB0aGlzLmZldGNoR3JhcGggPSB0aGlzLmZldGNoR3JhcGguYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmZldGNoR3JhcGgoKVxuICAgIH1cbiAgICBmZXRjaEdyYXBoKCkge1xuICAgICAgICBsZXQgdXJsID0gJ2FwaS9hY3Rpb24vdHJlbmRzLz8nXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZpbHRlcnMuc2Vzc2lvbikgdXJsID0gJ2FwaS9ldmVudC9zZXNzaW9ucy8/J1xuICAgICAgICBhcGkuZ2V0KHVybCArIHRvUGFyYW1zKHRoaXMucHJvcHMuZmlsdGVycykpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvcHMuZmlsdGVycy5zZXNzaW9uKSBkYXRhID0gZGF0YS5zb3J0KChhLCBiKSA9PiBiLmNvdW50IC0gYS5jb3VudClcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhIH0pXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uRGF0YSAmJiB0aGlzLnByb3BzLm9uRGF0YShkYXRhKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIGlmIChwcmV2UHJvcHMuZmlsdGVycyAhPT0gdGhpcy5wcm9wcy5maWx0ZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmZldGNoR3JhcGgoKVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZVxuICAgICAgICBsZXQgeyBmaWx0ZXJzIH0gPSB0aGlzLnByb3BzXG4gICAgICAgIHJldHVybiBkYXRhID8gKFxuICAgICAgICAgICAgZGF0YVswXSAmJiAoZmlsdGVycy5zZXNzaW9uIHx8IGRhdGFbMF0ubGFiZWxzKSA/IChcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogMTAwIH19PntmaWx0ZXJzLnNlc3Npb24gPyAnU2Vzc2lvbiBBdHRyaWJ1dGUnIDogJ0FjdGlvbid9PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6IDUwIH19PntmaWx0ZXJzLnNlc3Npb24gPyAnVmFsdWUnIDogJ0NvdW50J308L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cblxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l0ZW0ubGFiZWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ubGFiZWx9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLmNvdW50fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpblRvcDogJzRyZW0nIH19PldlIGNvdWxkbid0IGZpbmQgYW55IG1hdGNoaW5nIGFjdGlvbnMuPC9wPlxuICAgICAgICAgICAgKVxuICAgICAgICApIDogKFxuICAgICAgICAgICAgPExvYWRpbmcgLz5cbiAgICAgICAgKVxuICAgIH1cbn1cbkFjdGlvbnNUYWJsZS5wcm9wVHlwZXMgPSB7XG4gICAgZmlsdGVyczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIG9uRGF0YTogUHJvcFR5cGVzLmZ1bmMsXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBmb3JtYXRGaWx0ZXJOYW1lIH0gZnJvbSAnfi9saWIvdXRpbHMnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbi8vLS1DaGFydCBTdHlsZSBPcHRpb25zLS0vL1xuLy8gQ2hhcnQuZGVmYXVsdHMuZ2xvYmFsLmRlZmF1bHRGb250RmFtaWx5ID0gXCInUFQgU2FucycsIHNhbnMtc2VyaWZcIlxuQ2hhcnQuZGVmYXVsdHMuZ2xvYmFsLmxlZ2VuZC5kaXNwbGF5ID0gZmFsc2Vcbi8vLS1DaGFydCBTdHlsZSBPcHRpb25zLS0vL1xuXG5leHBvcnQgY2xhc3MgTGluZUdyYXBoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjaGFydFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpXG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5idWlsZENoYXJ0KClcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIGlmIChwcmV2UHJvcHMuZGF0YXNldHMgIT09IHRoaXMucHJvcHMuZGF0YXNldHMpIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRDaGFydCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9jZXNzRGF0YXNldCA9IChkYXRhc2V0LCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgY29sb3JzID0gWydibHVlJywgJ29yYW5nZScsICdncmVlbicsICdyZWQnLCAncHVycGxlJywgJ2dyYXknXVxuICAgICAgICBsZXQgZ2V0VmFyID0gdmFyaWFibGUgPT4gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKCctLScgKyB2YXJpYWJsZSlcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBnZXRWYXIoY29sb3JzW2luZGV4XSksXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGlzLnByb3BzLnR5cGUgPT0gJ2JhcicgfHwgdGhpcy5wcm9wcy50eXBlID09ICdkb3VnaG51dCcpICYmIGdldFZhcihjb2xvcnNbaW5kZXhdKSxcbiAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgICAgICBwb2ludEhpdFJhZGl1czogOCxcbiAgICAgICAgICAgIC4uLmRhdGFzZXQsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBidWlsZENoYXJ0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBteUNoYXJ0UmVmID0gdGhpcy5jaGFydFJlZi5jdXJyZW50LmdldENvbnRleHQoJzJkJylcbiAgICAgICAgbGV0IHsgZGF0YXNldHMsIGxhYmVscywgb3B0aW9ucyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5teUxpbmVDaGFydCAhPT0gJ3VuZGVmaW5lZCcpIHRoaXMubXlMaW5lQ2hhcnQuZGVzdHJveSgpXG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpc1xuICAgICAgICAvLyBpZiBjaGFydCBpcyBsaW5lIGdyYXBoLCBtYWtlIGR1cGxpY2F0ZSBsaW5lcyBhbmQgb3ZlcmxheSB0byBzaG93IGRvdHRlZCBsaW5lc1xuICAgICAgICBkYXRhc2V0cyA9XG4gICAgICAgICAgICAhdGhpcy5wcm9wcy50eXBlIHx8IHRoaXMucHJvcHMudHlwZSA9PSAnbGluZSdcbiAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5kYXRhc2V0cy5tYXAoKGRhdGFzZXQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhc2V0Q29weSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGFzZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gWy4uLmRhdGFzZXQuZGF0YV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVscyA9IFsuLi5kYXRhc2V0LmxhYmVsc11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRheXMgPSBbLi4uZGF0YXNldC5kYXlzXVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnBvcCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVscy5wb3AoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlzLnBvcCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXRDb3B5LmRhdGEgPSBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXRDb3B5LmxhYmVscyA9IGxhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0Q29weS5kYXlzID0gZGF5c1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzRGF0YXNldChkYXRhc2V0Q29weSwgaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgLi4uZGF0YXNldHMubWFwKChkYXRhc2V0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YXNldENvcHkgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhc2V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YXNldExlbmd0aCA9IGRhdGFzZXRDb3B5LmRhdGEubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXRDb3B5LmRvdHRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXNldENvcHkuYm9yZGVyRGFzaCA9IFsxMCwgMTBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXRDb3B5LmRhdGEgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXNldENvcHkuZGF0YS5sZW5ndGggPiAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBkYXRhc2V0Q29weS5kYXRhLm1hcCgoZGF0dW0sIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID09IGRhdGFzZXRMZW5ndGggLSAxIHx8IGluZGV4ID09IGRhdGFzZXRMZW5ndGggLSAyID8gZGF0dW0gOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBkYXRhc2V0Q29weS5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NEYXRhc2V0KGRhdGFzZXRDb3B5LCBpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICA6IGRhdGFzZXRzLm1hcCgoZGF0YXNldCwgaW5kZXgpID0+IHRoaXMucHJvY2Vzc0RhdGFzZXQoZGF0YXNldCwgaW5kZXgpKVxuXG4gICAgICAgIHRoaXMubXlMaW5lQ2hhcnQgPSBuZXcgQ2hhcnQobXlDaGFydFJlZiwge1xuICAgICAgICAgICAgdHlwZTogdGhpcy5wcm9wcy50eXBlIHx8ICdsaW5lJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAvL0JyaW5nIGluIGRhdGFcbiAgICAgICAgICAgICAgICBsYWJlbHM6IGxhYmVscyxcbiAgICAgICAgICAgICAgICBkYXRhc2V0czogZGF0YXNldHMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uczpcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnR5cGUgIT09ICdkb3VnaG51dCdcbiAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZVNob3dIb3Jpem9udGFsTGluZXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVyc2VjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiAnbmVhcmVzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5U3BhY2luZzogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlQYWRkaW5nOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhQYWRkaW5nOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0UGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlDb2xvcnM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzFkYzliNycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUZvbnRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxGb250U2l6ZTogMjMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JuZXJSYWRpdXM6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb290ZXJTcGFjaW5nOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVTcGFjaW5nOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGZ1bmN0aW9uKHRvb2x0aXBJdGVtLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbnRpdHlEYXRhID0gZGF0YS5kYXRhc2V0c1t0b29sdGlwSXRlbS5kYXRhc2V0SW5kZXhdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbnRpdHlEYXRhLmRvdHRlZCAmJiAhKHRvb2x0aXBJdGVtLmluZGV4ID09IGVudGl0eURhdGEuZGF0YS5sZW5ndGggLSAxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYWJlbCA9IGVudGl0eURhdGEuY2hhcnRMYWJlbCB8fCBlbnRpdHlEYXRhLmxhYmVsIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbnRpdHlEYXRhLmFjdGlvbi5wcm9wZXJ0aWVzICYmICFfLmlzRW1wdHkoZW50aXR5RGF0YS5hY3Rpb24ucHJvcGVydGllcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsICs9ICcgKCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGVudGl0eURhdGEuYWN0aW9uLnByb3BlcnRpZXMpLmZvckVhY2goKFtrZXksIHZhbF0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gMCkgbGFiZWwgKz0gJywgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsICs9IGZvcm1hdEZpbHRlck5hbWUoa2V5KS5zcGxpdCgnICcpWzFdICsgJyAnICsgdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgKz0gJyknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGFiZWwgKyAnIC0gJyArIHRvb2x0aXBJdGVtLnlMYWJlbC50b0xvY2FsZVN0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiAnbmVhcmVzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkhvdmVyKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMub25DbGljaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb2ludCA9IHRoaXMuZ2V0RWxlbWVudEF0RXZlbnQoZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvaW50Lmxlbmd0aCkgZS50YXJnZXQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgZS50YXJnZXQuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4QXhlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7IGxpbmVXaWR0aDogMCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrczogeyBhdXRvU2tpcDogdHJ1ZSwgYmVnaW5BdFplcm86IHRydWUsIG1pbjogMCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeUF4ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvU2tpcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoZXZlbnQsIFtwb2ludF0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb2ludCAmJiB0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhc2V0ID0gZGF0YXNldHNbcG9pbnQuX2RhdGFzZXRJbmRleF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHBvaW50Ll9pbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgcG9pbnQuX2luZGV4ICE9PSAndW5kZWZpbmVkJyAmJiBkYXRhc2V0LmxhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZGF0YXNldC5sYWJlbHNbcG9pbnQuX2luZGV4XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgcG9pbnQuX2luZGV4ICE9PSAndW5kZWZpbmVkJyAmJiBkYXRhc2V0LmRheXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRhdGFzZXQuZGF5c1twb2ludC5faW5kZXhdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHBvaW50Ll9pbmRleCAhPT0gJ3VuZGVmaW5lZCcgJiYgZGF0YXNldC5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBkYXRhc2V0LmRhdGFbcG9pbnQuX2luZGV4XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOiB7IG1vZGU6ICdpbmRleCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JhcGgtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGNhbnZhcyByZWY9e3RoaXMuY2hhcnRSZWZ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbkxpbmVHcmFwaC5wcm9wVHlwZXMgPSB7XG4gICAgZGF0YXNldHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7IGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLCBjb3VudDogUHJvcFR5cGVzLm51bWJlciB9KSkuaXNSZXF1aXJlZCxcbiAgICBsYWJlbHM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=