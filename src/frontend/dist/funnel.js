(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["funnel"],{

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

/***/ "./frontend/src/scenes/funnels/Funnel.js":
/*!***********************************************!*\
  !*** ./frontend/src/scenes/funnels/Funnel.js ***!
  \***********************************************/
/*! exports provided: Funnel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Funnel", function() { return Funnel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/utils */ "./frontend/src/lib/utils.js");
/* harmony import */ var _lib_components_SaveToDashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/components/SaveToDashboard */ "./frontend/src/lib/components/SaveToDashboard.js");
/* harmony import */ var _lib_components_DateFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/components/DateFilter */ "./frontend/src/lib/components/DateFilter.js");
/* harmony import */ var _EditFunnel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EditFunnel */ "./frontend/src/scenes/funnels/EditFunnel.js");
/* harmony import */ var _FunnelViz__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FunnelViz */ "./frontend/src/scenes/funnels/FunnelViz.js");
/* harmony import */ var _People__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./People */ "./frontend/src/scenes/funnels/People.js");
/* harmony import */ var _funnelLogic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./funnelLogic */ "./frontend/src/scenes/funnels/funnelLogic.js");
/* harmony import */ var kea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! kea */ "./node_modules/kea/lib/index.esm.js");









function Funnel(_ref) {
  var id = _ref.id;

  var _useValues = Object(kea__WEBPACK_IMPORTED_MODULE_8__["useValues"])(Object(_funnelLogic__WEBPACK_IMPORTED_MODULE_7__["funnelLogic"])({
    id: id
  })),
      funnel = _useValues.funnel,
      funnelLoading = _useValues.funnelLoading,
      stepsWithCount = _useValues.stepsWithCount,
      stepsWithCountLoading = _useValues.stepsWithCountLoading;

  var _useActions = Object(kea__WEBPACK_IMPORTED_MODULE_8__["useActions"])(Object(_funnelLogic__WEBPACK_IMPORTED_MODULE_7__["funnelLogic"])({
    id: id
  })),
      setFunnel = _useActions.setFunnel;

  if (!funnel && funnelLoading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["Loading"], null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "funnel"
  }, funnel.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Funnel: ", funnel.name) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "New funnel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditFunnel__WEBPACK_IMPORTED_MODULE_4__["EditFunnel"], {
    funnelId: id
  }), funnel.id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "float-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_components_DateFilter__WEBPACK_IMPORTED_MODULE_3__["DateFilter"], {
      onChange: function onChange(date_from, date_to) {
        return setFunnel({
          filters: {
            date_from: date_from,
            date_to: date_to
          }
        }, true);
      },
      dateFrom: funnel.filters.date_from,
      dateTo: funnel.filters.date_to
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_components_SaveToDashboard__WEBPACK_IMPORTED_MODULE_2__["SaveToDashboard"], {
      filters: {
        funnel_id: funnel.id
      },
      type: "FunnelViz",
      name: funnel.name
    })), "Graph")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: 300
    }
  }, stepsWithCountLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["Loading"], null), stepsWithCount && stepsWithCount[0] && stepsWithCount[0].count > -1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FunnelViz__WEBPACK_IMPORTED_MODULE_5__["FunnelViz"], {
    funnel: {
      steps: stepsWithCount
    }
  }))), funnel.id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_People__WEBPACK_IMPORTED_MODULE_6__["People"], {
    id: id
  }));
}

/***/ }),

/***/ "./frontend/src/scenes/funnels/FunnelViz.js":
/*!**************************************************!*\
  !*** ./frontend/src/scenes/funnels/FunnelViz.js ***!
  \**************************************************/
/*! exports provided: FunnelViz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunnelViz", function() { return FunnelViz; });
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
/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/api */ "./frontend/src/lib/api.js");
/* harmony import */ var funnel_graph_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! funnel-graph-js */ "./node_modules/funnel-graph-js/index.js");
/* harmony import */ var funnel_graph_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(funnel_graph_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lib_components_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lib/components/Link */ "./frontend/src/lib/components/Link.js");
/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lib/utils */ "./frontend/src/lib/utils.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var FunnelViz = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(FunnelViz, _Component);

  var _super = _createSuper(FunnelViz);

  function FunnelViz(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FunnelViz);

    _this = _super.call(this, props);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "container", react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "graphContainer", react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef());

    _this.state = {
      funnel: props.funnel
    };
    _this.buildChart = _this.buildChart.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    if (!props.funnel) _this.fetchFunnel.call(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FunnelViz, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.funnel) this.buildChart();
      window.addEventListener('resize', this.buildChart);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.buildChart);
    }
  }, {
    key: "fetchFunnel",
    value: function fetchFunnel() {
      var _this2 = this;

      lib_api__WEBPACK_IMPORTED_MODULE_8__["default"].get('api/funnel/' + this.props.filters.funnel_id).then(function (funnel) {
        return _this2.setState({
          funnel: funnel
        }, _this2.buildChart);
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.funnel !== this.props.funnel && this.state.funnel) {
        this.setState({
          funnel: this.props.funnel
        }, this.buildChart);
      }
    }
  }, {
    key: "buildChart",
    value: function buildChart() {
      if (!this.state.funnel || this.state.funnel.steps.length == 0) return;
      if (this.container.current) this.container.current.innerHTML = '';
      var graph = new funnel_graph_js__WEBPACK_IMPORTED_MODULE_9___default.a({
        container: '.funnel-graph',
        data: {
          labels: this.state.funnel.steps.map(function (step) {
            return "".concat(step.name, " (").concat(step.count, ")");
          }),
          values: this.state.funnel.steps.map(function (step) {
            return step.count;
          }),
          colors: ['#66b0ff', 'var(--blue)']
        },
        displayPercent: true
      });

      graph.createContainer = function () {};

      graph.container = this.container.current;
      graph.graphContainer = document.createElement('div');
      graph.graphContainer.classList.add('svg-funnel-js__container');
      graph.container.appendChild(graph.graphContainer);
      graph.draw();
    }
  }, {
    key: "render",
    value: function render() {
      var funnel = this.state.funnel;
      return funnel ? funnel.steps.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        ref: this.container,
        className: "svg-funnel-js",
        style: {
          height: '100%',
          width: '100%'
        }
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        style: {
          margin: '1rem'
        }
      }, "This funnel doesn't have any steps.", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(lib_components_Link__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        to: '/funnel/' + funnel.id
      }, "Click here to add some steps.")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(lib_utils__WEBPACK_IMPORTED_MODULE_11__["Loading"], null);
    }
  }]);

  return FunnelViz;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);
FunnelViz.propTypes = {
  funnel: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object,
  filters: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.shape({
    funnel_id: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number
  })
};

/***/ }),

/***/ "./frontend/src/scenes/funnels/People.js":
/*!***********************************************!*\
  !*** ./frontend/src/scenes/funnels/People.js ***!
  \***********************************************/
/*! exports provided: People */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "People", function() { return People; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var kea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kea */ "./node_modules/kea/lib/index.esm.js");
/* harmony import */ var _funnelLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./funnelLogic */ "./frontend/src/scenes/funnels/funnelLogic.js");
/* harmony import */ var lib_components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/components/Link */ "./frontend/src/lib/components/Link.js");
/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/utils */ "./frontend/src/lib/utils.js");
/* harmony import */ var scenes_trends_trendsLogic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! scenes/trends/trendsLogic */ "./frontend/src/scenes/trends/trendsLogic.js");






function People(_ref) {
  var id = _ref.id;

  var _useValues = Object(kea__WEBPACK_IMPORTED_MODULE_1__["useValues"])(Object(_funnelLogic__WEBPACK_IMPORTED_MODULE_2__["funnelLogic"])({
    id: id
  })),
      stepsWithCount = _useValues.stepsWithCount,
      peopleSorted = _useValues.peopleSorted,
      peopleLoading = _useValues.peopleLoading;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(lib_utils__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    title: "Per user"
  }, peopleLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(lib_utils__WEBPACK_IMPORTED_MODULE_4__["Loading"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-bordered table-fixed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), stepsWithCount && stepsWithCount.map(function (step, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      key: index
    }, step.type === scenes_trends_trendsLogic__WEBPACK_IMPORTED_MODULE_5__["EntityTypes"].ACTIONS ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(lib_components_Link__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: '/action/' + step.action_id
    }, step.name) : step.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null), stepsWithCount && stepsWithCount.map(function (step, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      key: index
    }, step.count, "\xA0 (", Object(lib_utils__WEBPACK_IMPORTED_MODULE_4__["percentage"])(step.count / stepsWithCount[0].count), ")");
  })), peopleSorted && peopleSorted.map(function (person) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: person.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-overflow"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(lib_components_Link__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/person_by_id/".concat(person.id)
    }, person.name)), stepsWithCount.map(function (step, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        key: index,
        className: step.people.indexOf(person.id) > -1 ? 'funnel-success' : 'funnel-dropped'
      });
    }));
  }))));
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvbGliL2NvbXBvbmVudHMvU2F2ZVRvRGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9zY2VuZXMvZnVubmVscy9GdW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL3NjZW5lcy9mdW5uZWxzL0Z1bm5lbFZpei5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvc2NlbmVzL2Z1bm5lbHMvUGVvcGxlLmpzIl0sIm5hbWVzIjpbIm1vbWVudFRvU3RyaW5nIiwiZGF0ZSIsIl9pc0FNb21lbnRPYmplY3QiLCJmb3JtYXQiLCJTYXZlVG9EYXNoYm9hcmQiLCJwcm9wcyIsInN0YXRlIiwiTW9kYWwiLCJiaW5kIiwic2F2ZSIsImNsb3NlVG9hc3QiLCJldmVudCIsImZpbHRlcnMiLCJwcmV2ZW50RGVmYXVsdCIsImFwaSIsImNyZWF0ZSIsImRhdGVfZnJvbSIsImRhdGVfdG8iLCJ0eXBlIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwidGhlbiIsInRvYXN0IiwiVG9hc3QiLCJzZXRTdGF0ZSIsIm9wZW5Nb2RhbCIsIkNvbXBvbmVudCIsIkZ1bm5lbCIsImlkIiwidXNlVmFsdWVzIiwiZnVubmVsTG9naWMiLCJmdW5uZWwiLCJmdW5uZWxMb2FkaW5nIiwic3RlcHNXaXRoQ291bnQiLCJzdGVwc1dpdGhDb3VudExvYWRpbmciLCJ1c2VBY3Rpb25zIiwic2V0RnVubmVsIiwiZnVubmVsX2lkIiwiaGVpZ2h0IiwiY291bnQiLCJzdGVwcyIsIkZ1bm5lbFZpeiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiYnVpbGRDaGFydCIsImZldGNoRnVubmVsIiwiY2FsbCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0IiwicHJldlByb3BzIiwibGVuZ3RoIiwiY29udGFpbmVyIiwiY3VycmVudCIsImlubmVySFRNTCIsImdyYXBoIiwiRnVubmVsR3JhcGgiLCJkYXRhIiwibGFiZWxzIiwibWFwIiwic3RlcCIsInZhbHVlcyIsImNvbG9ycyIsImRpc3BsYXlQZXJjZW50IiwiY3JlYXRlQ29udGFpbmVyIiwiZ3JhcGhDb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImRyYXciLCJ3aWR0aCIsIm1hcmdpbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsInNoYXBlIiwibnVtYmVyIiwiUGVvcGxlIiwicGVvcGxlU29ydGVkIiwicGVvcGxlTG9hZGluZyIsImluZGV4IiwiRW50aXR5VHlwZXMiLCJBQ1RJT05TIiwiYWN0aW9uX2lkIiwicGVyY2VudGFnZSIsInBlcnNvbiIsInBlb3BsZSIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLGNBQVQsQ0FBd0JDLElBQXhCLEVBQThCO0FBQzFCLE1BQUlBLElBQUksSUFBSUEsSUFBSSxDQUFDQyxnQkFBakIsRUFBbUMsT0FBT0QsSUFBSSxDQUFDRSxNQUFMLENBQVksWUFBWixDQUFQO0FBQ25DLFNBQU9GLElBQVA7QUFDSDs7QUFFTSxJQUFNRyxlQUFiO0FBQUE7O0FBQUE7O0FBQ0ksMkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsVUFBS0MsS0FBTCxHQUFhLE1BQUtBLEtBQUwsQ0FBV0MsSUFBWCw0RkFBYjtBQUNBLFVBQUtDLElBQUwsR0FBWSxNQUFLQSxJQUFMLENBQVVELElBQVYsNEZBQVo7QUFMZTtBQU1sQjs7QUFQTDtBQUFBO0FBQUEsV0FRSSxxQkFBc0I7QUFBQSxVQUFkRSxVQUFjLFFBQWRBLFVBQWM7QUFDbEIsMEJBQ0ksc0hBRUksMkRBQUMseURBQUQ7QUFB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R0FBZixDQUFtQixVQUFDQyxJQUFELEVBQU9zQixLQUFQO0FBQUEsd0JBQ2Y7QUFBSSxTQUFHLEVBQUVBO0FBQVQsT0FDS3RCLElBQUksQ0FBQ3RCLEtBRFYsWUFDeUJnRCw0REFBVSxDQUFDMUIsSUFBSSxDQUFDdEIsS0FBTCxHQUFhTixjQUFjLENBQUMsQ0FBRCxDQUFkLENBQWtCTSxLQUFoQyxDQURuQyxNQURlO0FBQUEsR0FBbkIsQ0FIUixDQWRKLEVBdUJLMEMsWUFBWSxJQUNUQSxZQUFZLENBQUNyQixHQUFiLENBQWlCLFVBQUE0QixNQUFNO0FBQUEsd0JBQ25CO0FBQUksU0FBRyxFQUFFQSxNQUFNLENBQUM1RDtBQUFoQixvQkFDSTtBQUFJLGVBQVMsRUFBQztBQUFkLG9CQUNJLDJEQUFDLHdEQUFEO0FBQU0sUUFBRSwwQkFBbUI0RCxNQUFNLENBQUM1RCxFQUExQjtBQUFSLE9BQXlDNEQsTUFBTSxDQUFDdEUsSUFBaEQsQ0FESixDQURKLEVBSUtlLGNBQWMsQ0FBQzJCLEdBQWYsQ0FBbUIsVUFBQ0MsSUFBRCxFQUFPc0IsS0FBUDtBQUFBLDBCQUNoQjtBQUNJLFdBQUcsRUFBRUEsS0FEVDtBQUVJLGlCQUFTLEVBQ0x0QixJQUFJLENBQUM0QixNQUFMLENBQVlDLE9BQVosQ0FBb0JGLE1BQU0sQ0FBQzVELEVBQTNCLElBQWlDLENBQUMsQ0FBbEMsR0FBc0MsZ0JBQXRDLEdBQXlEO0FBSGpFLFFBRGdCO0FBQUEsS0FBbkIsQ0FKTCxDQURtQjtBQUFBLEdBQXZCLENBeEJSLENBREosQ0FGSixDQURKO0FBK0NILEMiLCJmaWxlIjoiZnVubmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGFwaSBmcm9tICcuLi9hcGknXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4vTW9kYWwnXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ2xpYi9jb21wb25lbnRzL0xpbmsnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJ1xuXG5mdW5jdGlvbiBtb21lbnRUb1N0cmluZyhkYXRlKSB7XG4gICAgaWYgKGRhdGUgJiYgZGF0ZS5faXNBTW9tZW50T2JqZWN0KSByZXR1cm4gZGF0ZS5mb3JtYXQoJ1lZWVktTU0tREQnKVxuICAgIHJldHVybiBkYXRlXG59XG5cbmV4cG9ydCBjbGFzcyBTYXZlVG9EYXNoYm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fVxuICAgICAgICB0aGlzLk1vZGFsID0gdGhpcy5Nb2RhbC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuc2F2ZSA9IHRoaXMuc2F2ZS5iaW5kKHRoaXMpXG4gICAgfVxuICAgIFRvYXN0KHsgY2xvc2VUb2FzdCB9KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIFBhbmVsIGFkZGVkIHRvIGRhc2hib2FyZC4mbmJzcDtcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9kYXNoYm9hcmRcIj5DbGljayBoZXJlIHRvIHNlZSBpdC48L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbiAgICBzYXZlKGV2ZW50KSB7XG4gICAgICAgIGxldCB7IGZpbHRlcnMgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBhcGkuY3JlYXRlKCdhcGkvZGFzaGJvYXJkJywge1xuICAgICAgICAgICAgZmlsdGVyczoge1xuICAgICAgICAgICAgICAgIC4uLmZpbHRlcnMsXG4gICAgICAgICAgICAgICAgZGF0ZV9mcm9tOiBtb21lbnRUb1N0cmluZyhmaWx0ZXJzLmRhdGVfZnJvbSksXG4gICAgICAgICAgICAgICAgZGF0ZV90bzogbW9tZW50VG9TdHJpbmcoZmlsdGVycy5kYXRlX3RvKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiB0aGlzLnByb3BzLnR5cGUsXG4gICAgICAgICAgICBuYW1lOiBldmVudC50YXJnZXQubmFtZS52YWx1ZSxcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0b2FzdCh0aGlzLlRvYXN0KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5Nb2RhbDogZmFsc2UgfSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgTW9kYWwoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TW9kYWwgdGl0bGU9XCJBZGQgZ3JhcGggdG8gZGFzaGJvYXJkXCIgb25EaXNtaXNzPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3Blbk1vZGFsOiBmYWxzZSB9KX0+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc2F2ZX0+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QYW5lbCBuYW1lIG9uIGRhc2hib2FyZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcnMgd2hvIGRpZCB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgcGFuZWwgdG8gZGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIClcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2F2ZS10by1kYXNoYm9hcmRcIj5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5vcGVuTW9kYWwgJiYgPHRoaXMuTW9kYWwgLz59XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3Blbk1vZGFsOiB0cnVlIH0pfSB0eXBlPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICBBZGQgdG8gZGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIClcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDYXJkLCBMb2FkaW5nIH0gZnJvbSAnLi4vLi4vbGliL3V0aWxzJ1xuaW1wb3J0IHsgU2F2ZVRvRGFzaGJvYXJkIH0gZnJvbSAnLi4vLi4vbGliL2NvbXBvbmVudHMvU2F2ZVRvRGFzaGJvYXJkJ1xuaW1wb3J0IHsgRGF0ZUZpbHRlciB9IGZyb20gJy4uLy4uL2xpYi9jb21wb25lbnRzL0RhdGVGaWx0ZXInXG5pbXBvcnQgeyBFZGl0RnVubmVsIH0gZnJvbSAnLi9FZGl0RnVubmVsJ1xuaW1wb3J0IHsgRnVubmVsVml6IH0gZnJvbSAnLi9GdW5uZWxWaXonXG5pbXBvcnQgeyBQZW9wbGUgfSBmcm9tICcuL1Blb3BsZSdcbmltcG9ydCB7IGZ1bm5lbExvZ2ljIH0gZnJvbSAnLi9mdW5uZWxMb2dpYydcbmltcG9ydCB7IHVzZVZhbHVlcywgdXNlQWN0aW9ucyB9IGZyb20gJ2tlYSdcblxuZXhwb3J0IGZ1bmN0aW9uIEZ1bm5lbCh7IGlkIH0pIHtcbiAgICBjb25zdCB7IGZ1bm5lbCwgZnVubmVsTG9hZGluZywgc3RlcHNXaXRoQ291bnQsIHN0ZXBzV2l0aENvdW50TG9hZGluZyB9ID0gdXNlVmFsdWVzKGZ1bm5lbExvZ2ljKHsgaWQgfSkpXG4gICAgY29uc3QgeyBzZXRGdW5uZWwgfSA9IHVzZUFjdGlvbnMoZnVubmVsTG9naWMoeyBpZCB9KSlcbiAgICBpZiAoIWZ1bm5lbCAmJiBmdW5uZWxMb2FkaW5nKSByZXR1cm4gPExvYWRpbmcgLz5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bm5lbFwiPlxuICAgICAgICAgICAge2Z1bm5lbC5pZCA/IDxoMT5GdW5uZWw6IHtmdW5uZWwubmFtZX08L2gxPiA6IDxoMT5OZXcgZnVubmVsPC9oMT59XG4gICAgICAgICAgICA8RWRpdEZ1bm5lbCBmdW5uZWxJZD17aWR9IC8+XG5cbiAgICAgICAgICAgIHtmdW5uZWwuaWQgJiYgKFxuICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlRmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGVfZnJvbSwgZGF0ZV90bykgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGdW5uZWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlX2Zyb20sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZV90byxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlRnJvbT17ZnVubmVsLmZpbHRlcnMuZGF0ZV9mcm9tfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVRvPXtmdW5uZWwuZmlsdGVycy5kYXRlX3RvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2F2ZVRvRGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzPXt7IGZ1bm5lbF9pZDogZnVubmVsLmlkIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiRnVubmVsVml6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2Z1bm5lbC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHcmFwaFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogMzAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge3N0ZXBzV2l0aENvdW50TG9hZGluZyAmJiA8TG9hZGluZyAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGVwc1dpdGhDb3VudCAmJiBzdGVwc1dpdGhDb3VudFswXSAmJiBzdGVwc1dpdGhDb3VudFswXS5jb3VudCA+IC0xICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RnVubmVsVml6IGZ1bm5lbD17eyBzdGVwczogc3RlcHNXaXRoQ291bnQgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7ZnVubmVsLmlkICYmIDxQZW9wbGUgaWQ9e2lkfSAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGFwaSBmcm9tICdsaWIvYXBpJ1xuaW1wb3J0IEZ1bm5lbEdyYXBoIGZyb20gJ2Z1bm5lbC1ncmFwaC1qcydcbmltcG9ydCB7IExpbmsgfSBmcm9tICdsaWIvY29tcG9uZW50cy9MaW5rJ1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJ2xpYi91dGlscydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuZXhwb3J0IGNsYXNzIEZ1bm5lbFZpeiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29udGFpbmVyID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgICBncmFwaENvbnRhaW5lciA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZ1bm5lbDogcHJvcHMuZnVubmVsLFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYnVpbGRDaGFydCA9IHRoaXMuYnVpbGRDaGFydC5iaW5kKHRoaXMpXG4gICAgICAgIGlmICghcHJvcHMuZnVubmVsKSB0aGlzLmZldGNoRnVubmVsLmNhbGwodGhpcylcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZ1bm5lbCkgdGhpcy5idWlsZENoYXJ0KClcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuYnVpbGRDaGFydClcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmJ1aWxkQ2hhcnQpXG4gICAgfVxuICAgIGZldGNoRnVubmVsKCkge1xuICAgICAgICBhcGkuZ2V0KCdhcGkvZnVubmVsLycgKyB0aGlzLnByb3BzLmZpbHRlcnMuZnVubmVsX2lkKS50aGVuKGZ1bm5lbCA9PiB0aGlzLnNldFN0YXRlKHsgZnVubmVsIH0sIHRoaXMuYnVpbGRDaGFydCkpXG4gICAgfVxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgaWYgKHByZXZQcm9wcy5mdW5uZWwgIT09IHRoaXMucHJvcHMuZnVubmVsICYmIHRoaXMuc3RhdGUuZnVubmVsKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZnVubmVsOiB0aGlzLnByb3BzLmZ1bm5lbCB9LCB0aGlzLmJ1aWxkQ2hhcnQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgYnVpbGRDaGFydCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmZ1bm5lbCB8fCB0aGlzLnN0YXRlLmZ1bm5lbC5zdGVwcy5sZW5ndGggPT0gMCkgcmV0dXJuXG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5lci5jdXJyZW50KSB0aGlzLmNvbnRhaW5lci5jdXJyZW50LmlubmVySFRNTCA9ICcnXG4gICAgICAgIGxldCBncmFwaCA9IG5ldyBGdW5uZWxHcmFwaCh7XG4gICAgICAgICAgICBjb250YWluZXI6ICcuZnVubmVsLWdyYXBoJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHRoaXMuc3RhdGUuZnVubmVsLnN0ZXBzLm1hcChzdGVwID0+IGAke3N0ZXAubmFtZX0gKCR7c3RlcC5jb3VudH0pYCksXG4gICAgICAgICAgICAgICAgdmFsdWVzOiB0aGlzLnN0YXRlLmZ1bm5lbC5zdGVwcy5tYXAoc3RlcCA9PiBzdGVwLmNvdW50KSxcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFsnIzY2YjBmZicsICd2YXIoLS1ibHVlKSddLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpc3BsYXlQZXJjZW50OiB0cnVlLFxuICAgICAgICB9KVxuICAgICAgICBncmFwaC5jcmVhdGVDb250YWluZXIgPSAoKSA9PiB7fVxuICAgICAgICBncmFwaC5jb250YWluZXIgPSB0aGlzLmNvbnRhaW5lci5jdXJyZW50XG4gICAgICAgIGdyYXBoLmdyYXBoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZ3JhcGguZ3JhcGhDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3ZnLWZ1bm5lbC1qc19fY29udGFpbmVyJylcbiAgICAgICAgZ3JhcGguY29udGFpbmVyLmFwcGVuZENoaWxkKGdyYXBoLmdyYXBoQ29udGFpbmVyKVxuXG4gICAgICAgIGdyYXBoLmRyYXcoKVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7IGZ1bm5lbCB9ID0gdGhpcy5zdGF0ZVxuICAgICAgICByZXR1cm4gZnVubmVsID8gKFxuICAgICAgICAgICAgZnVubmVsLnN0ZXBzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e3RoaXMuY29udGFpbmVyfSBjbGFzc05hbWU9XCJzdmctZnVubmVsLWpzXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnMTAwJScgfX0+PC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogJzFyZW0nIH19PlxuICAgICAgICAgICAgICAgICAgICBUaGlzIGZ1bm5lbCBkb2Vzbid0IGhhdmUgYW55IHN0ZXBzLnsnICd9XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnL2Z1bm5lbC8nICsgZnVubmVsLmlkfT5DbGljayBoZXJlIHRvIGFkZCBzb21lIHN0ZXBzLjwvTGluaz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICApXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgICApXG4gICAgfVxufVxuRnVubmVsVml6LnByb3BUeXBlcyA9IHtcbiAgICBmdW5uZWw6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZmlsdGVyczogUHJvcFR5cGVzLnNoYXBlKHsgZnVubmVsX2lkOiBQcm9wVHlwZXMubnVtYmVyIH0pLFxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVmFsdWVzIH0gZnJvbSAna2VhJ1xuaW1wb3J0IHsgZnVubmVsTG9naWMgfSBmcm9tICcuL2Z1bm5lbExvZ2ljJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ2xpYi9jb21wb25lbnRzL0xpbmsnXG5pbXBvcnQgeyBDYXJkLCBwZXJjZW50YWdlLCBMb2FkaW5nIH0gZnJvbSAnbGliL3V0aWxzJ1xuaW1wb3J0IHsgRW50aXR5VHlwZXMgfSBmcm9tICdzY2VuZXMvdHJlbmRzL3RyZW5kc0xvZ2ljJ1xuXG5leHBvcnQgZnVuY3Rpb24gUGVvcGxlKHsgaWQgfSkge1xuICAgIGNvbnN0IHsgc3RlcHNXaXRoQ291bnQsIHBlb3BsZVNvcnRlZCwgcGVvcGxlTG9hZGluZyB9ID0gdXNlVmFsdWVzKGZ1bm5lbExvZ2ljKHsgaWQgfSkpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2FyZCB0aXRsZT1cIlBlciB1c2VyXCI+XG4gICAgICAgICAgICB7cGVvcGxlTG9hZGluZyAmJiA8TG9hZGluZyAvPn1cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1maXhlZFwiPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RlcHNXaXRoQ291bnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwc1dpdGhDb3VudC5tYXAoKHN0ZXAsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGVwLnR5cGUgPT09IEVudGl0eVR5cGVzLkFDVElPTlMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eycvYWN0aW9uLycgKyBzdGVwLmFjdGlvbl9pZH0+e3N0ZXAubmFtZX08L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXAubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RlcHNXaXRoQ291bnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwc1dpdGhDb3VudC5tYXAoKHN0ZXAsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGVwLmNvdW50fSZuYnNwOyAoe3BlcmNlbnRhZ2Uoc3RlcC5jb3VudCAvIHN0ZXBzV2l0aENvdW50WzBdLmNvdW50KX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIHtwZW9wbGVTb3J0ZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlb3BsZVNvcnRlZC5tYXAocGVyc29uID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtwZXJzb24uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvcGVyc29uX2J5X2lkLyR7cGVyc29uLmlkfWB9PntwZXJzb24ubmFtZX08L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGVwc1dpdGhDb3VudC5tYXAoKHN0ZXAsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXAucGVvcGxlLmluZGV4T2YocGVyc29uLmlkKSA+IC0xID8gJ2Z1bm5lbC1zdWNjZXNzJyA6ICdmdW5uZWwtZHJvcHBlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvQ2FyZD5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9