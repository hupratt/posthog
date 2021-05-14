(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setup"],{

/***/ "./frontend/src/lib/hooks/useAnchor.js":
/*!*********************************************!*\
  !*** ./frontend/src/lib/hooks/useAnchor.js ***!
  \*********************************************/
/*! exports provided: useAnchor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAnchor", function() { return useAnchor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useAnchor(hash) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (hash && document.getElementById(hash.substr(1))) {
      // Check if there is a hash and if an element with that id exists
      document.getElementById(hash.substr(1)).scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, [hash]); // Fires every time hash changes
}

/***/ }),

/***/ "./frontend/src/scenes/setup/ChangePassword.js":
/*!*****************************************************!*\
  !*** ./frontend/src/scenes/setup/ChangePassword.js ***!
  \*****************************************************/
/*! exports provided: ChangePassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePassword", function() { return ChangePassword; });
/* harmony import */ var antd_es_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/button/style/css */ "./node_modules/antd/es/button/style/css.js");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/button */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var antd_es_input_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/input/style/css */ "./node_modules/antd/es/input/style/css.js");
/* harmony import */ var antd_es_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/input */ "./node_modules/antd/es/input/index.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../lib/api */ "./frontend/src/lib/api.js");














function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var ChangePassword = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(ChangePassword, _Component);

  var _super = _createSuper(ChangePassword);

  function ChangePassword(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, ChangePassword);

    _this = _super.call(this, props);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "handleChange", function (event) {
      _this.setState(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11___default()({}, event.target.name, event.target.value));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "save", /*#__PURE__*/function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_12___default.a.mark(function _callee(event) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_12___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _context.prev = 1;
                _context.next = 4;
                return _lib_api__WEBPACK_IMPORTED_MODULE_15__["default"].update('api/user/change_password', {
                  oldPassword: _this.state.oldPassword,
                  newPassword: _this.state.newPassword
                });

              case 4:
                react_toastify__WEBPACK_IMPORTED_MODULE_14__["toast"].success('Password changed');
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);
                react_toastify__WEBPACK_IMPORTED_MODULE_14__["toast"].error(_context.t0.error);

              case 10:
                _context.prev = 10;

                _this.setState({
                  oldPassword: '',
                  newPassword: ''
                });

                return _context.finish(10);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 7, 10, 13]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _this.state = {
      oldPassword: '',
      newPassword: ''
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(ChangePassword, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("label", null, "Old Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_3__["default"].Password, {
        name: "oldPassword",
        required: true,
        onChange: this.handleChange,
        value: this.state.oldPassword,
        style: {
          maxWidth: 400
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("label", null, "New Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_3__["default"].Password, {
        name: "newPassword",
        required: true,
        onChange: this.handleChange,
        value: this.state.newPassword,
        style: {
          maxWidth: 400
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        type: "primary",
        onClick: function onClick(e) {
          e.preventDefault();

          _this2.save();
        }
      }, "Change Password"));
    }
  }]);

  return ChangePassword;
}(react__WEBPACK_IMPORTED_MODULE_13__["Component"]);

/***/ }),

/***/ "./frontend/src/scenes/setup/DeleteDemoData.js":
/*!*****************************************************!*\
  !*** ./frontend/src/scenes/setup/DeleteDemoData.js ***!
  \*****************************************************/
/*! exports provided: DeleteDemoData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDemoData", function() { return DeleteDemoData; });
/* harmony import */ var antd_es_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/button/style/css */ "./node_modules/antd/es/button/style/css.js");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/button */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var kea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! kea */ "./node_modules/kea/lib/index.esm.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/api */ "./frontend/src/lib/api.js");








var deleteDemoDataLogic = Object(kea__WEBPACK_IMPORTED_MODULE_6__["kea"])({
  actions: function actions() {
    return {
      deleteDemoData: true,
      demoDataDeleted: true
    };
  },
  reducers: function reducers(_ref) {
    var actions = _ref.actions;
    return {
      isDeleted: [false, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()({}, actions.demoDataDeleted, function () {
        return true;
      })]
    };
  },
  listeners: function listeners(_ref3) {
    var actions = _ref3.actions,
        values = _ref3.values;
    return _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()({}, actions.deleteDemoData, _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee() {
      var user;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _lib_api__WEBPACK_IMPORTED_MODULE_7__["default"].get('delete_demo_data');

            case 3:
              user = _context.sent;
              actions.demoDataDeleted();
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              throw _context.t0;

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    })));
  },
  path: function path() {
    return ["scenes", "setup", "DeleteDemoData"];
  }
});
var deleteAllDataLogic = Object(kea__WEBPACK_IMPORTED_MODULE_6__["kea"])({
  actions: function actions() {
    return {
      deleteDemoData: true,
      demoDataDeleted: true
    };
  },
  reducers: function reducers(_ref6) {
    var actions = _ref6.actions;
    return {
      isDeleted: [false, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()({}, actions.demoDataDeleted, function () {
        return true;
      })]
    };
  },
  listeners: function listeners(_ref8) {
    var actions = _ref8.actions,
        values = _ref8.values;
    return _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()({}, actions.deleteDemoData, _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee2() {
      var user;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _lib_api__WEBPACK_IMPORTED_MODULE_7__["default"].get('delete_all_data');

            case 3:
              user = _context2.sent;
              actions.demoDataDeleted();
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              throw _context2.t0;

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    })));
  },
  path: function path() {
    return ["scenes", "setup", "DeleteDemoData/2"];
  }
});
function DeleteDemoData() {
  var _useValues = Object(kea__WEBPACK_IMPORTED_MODULE_6__["useValues"])(deleteDemoDataLogic),
      isDeleted = _useValues.isDeleted;

  var _useActions = Object(kea__WEBPACK_IMPORTED_MODULE_6__["useActions"])(deleteDemoDataLogic),
      deleteDemoData = _useActions.deleteDemoData;

  var _useValues2 = Object(kea__WEBPACK_IMPORTED_MODULE_6__["useValues"])(deleteAllDataLogic),
      isDeletedAll = _useValues2.isDeletedAll;

  var _useActions2 = Object(kea__WEBPACK_IMPORTED_MODULE_6__["useActions"])(deleteAllDataLogic),
      deleteAllData = _useActions2.deleteAllData;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "primary",
    danger: true,
    onClick: deleteDemoData
  }, "Delete demo data"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "primary",
    danger: true,
    onClick: deleteAllData
  }, "Delete all data"), isDeleted && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "text-success"
  }, "Demo data deleted!"), isDeletedAll && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "text-success"
  }, "All data deleted!"));
}

/***/ }),

/***/ "./frontend/src/scenes/setup/OptOutCapture.js":
/*!****************************************************!*\
  !*** ./frontend/src/scenes/setup/OptOutCapture.js ***!
  \****************************************************/
/*! exports provided: OptOutCapture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptOutCapture", function() { return OptOutCapture; });
/* harmony import */ var antd_es_switch_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/switch/style/css */ "./node_modules/antd/es/switch/style/css.js");
/* harmony import */ var antd_es_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/switch */ "./node_modules/antd/es/switch/index.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var kea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! kea */ "./node_modules/kea/lib/index.esm.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/api */ "./frontend/src/lib/api.js");
/* harmony import */ var _userLogic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../userLogic */ "./frontend/src/scenes/userLogic.js");







function OptOutCapture() {
  var _useValues = Object(kea__WEBPACK_IMPORTED_MODULE_4__["useValues"])(_userLogic__WEBPACK_IMPORTED_MODULE_6__["userLogic"]),
      user = _useValues.user;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      saved = _useState2[0],
      setSaved = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, "PostHog uses PostHog (unsurprisingly!) to capture information about how people are using the product. We believe that product analytics are the best way to make PostHog more useful for everyone.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), "We also understand there are many reasons why people don't want to or aren't allowed to send this usage data. Just tick the box below to opt out of this.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_es_switch__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onChange: function onChange(checked) {
      _lib_api__WEBPACK_IMPORTED_MODULE_5__["default"].update('api/user', {
        team: {
          opt_out_capture: checked
        }
      }).then(function () {
        return setSaved(true);
      });
    },
    defaultChecked: user.team.opt_out_capture
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    style: {
      marginLeft: '10px'
    }
  }, "Opt-out of sending usage data to PostHog."), saved && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "text-success"
  }, "Preference saved. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: "/setup"
  }, "Refresh the page for the change to take effect.")));
}

/***/ }),

/***/ "./frontend/src/scenes/setup/Setup.js":
/*!********************************************!*\
  !*** ./frontend/src/scenes/setup/Setup.js ***!
  \********************************************/
/*! exports provided: Setup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Setup", function() { return Setup; });
/* harmony import */ var antd_es_divider_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/divider/style/css */ "./node_modules/antd/es/divider/style/css.js");
/* harmony import */ var antd_es_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/divider */ "./node_modules/antd/es/divider/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var kea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kea */ "./node_modules/kea/lib/index.esm.js");
/* harmony import */ var _lib_components_JSSnippet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/components/JSSnippet */ "./frontend/src/lib/components/JSSnippet.js");
/* harmony import */ var _lib_components_InviteTeam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/components/InviteTeam */ "./frontend/src/lib/components/InviteTeam.js");
/* harmony import */ var _OptOutCapture__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OptOutCapture */ "./frontend/src/scenes/setup/OptOutCapture.js");
/* harmony import */ var _UpdateEmailPreferences__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UpdateEmailPreferences */ "./frontend/src/scenes/setup/UpdateEmailPreferences.js");
/* harmony import */ var _SetupAppUrls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SetupAppUrls */ "./frontend/src/scenes/setup/SetupAppUrls.js");
/* harmony import */ var _userLogic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../userLogic */ "./frontend/src/scenes/userLogic.js");
/* harmony import */ var _DeleteDemoData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DeleteDemoData */ "./frontend/src/scenes/setup/DeleteDemoData.js");
/* harmony import */ var scenes_setup_SlackIntegration__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! scenes/setup/SlackIntegration */ "./frontend/src/scenes/setup/SlackIntegration.js");
/* harmony import */ var _ChangePassword__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ChangePassword */ "./frontend/src/scenes/setup/ChangePassword.js");
/* harmony import */ var lib_hooks_useAnchor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lib/hooks/useAnchor */ "./frontend/src/lib/hooks/useAnchor.js");
/* harmony import */ var kea_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! kea-router */ "./node_modules/kea-router/lib/index.js");
/* harmony import */ var kea_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(kea_router__WEBPACK_IMPORTED_MODULE_14__);















function Setup() {
  var _useValues = Object(kea__WEBPACK_IMPORTED_MODULE_3__["useValues"])(_userLogic__WEBPACK_IMPORTED_MODULE_9__["userLogic"]),
      user = _useValues.user;

  var _useValues2 = Object(kea__WEBPACK_IMPORTED_MODULE_3__["useValues"])(kea_router__WEBPACK_IMPORTED_MODULE_14__["router"]),
      location = _useValues2.location;

  Object(lib_hooks_useAnchor__WEBPACK_IMPORTED_MODULE_13__["useAnchor"])(location.hash);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    id: "urls"
  }, "Setup your PostHog account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SetupAppUrls__WEBPACK_IMPORTED_MODULE_8__["SetupAppUrls"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_divider__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    id: "snippet"
  }, "Integrate PostHog"), "To integrate PostHog, copy + paste the following snippet to your website. Ideally, put it just above the", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("pre", {
    style: {
      display: 'inline'
    }
  }, "</head>"), " tag.", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://docs.posthog.com/#/integrations/js-integration"
  }, "See docs for instructions on how to identify users."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lib_components_JSSnippet__WEBPACK_IMPORTED_MODULE_4__["JSSnippet"], {
    user: user
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://docs.posthog.com/#/integrations"
  }, "Using Python/Ruby/Node/Go/PHP instead?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_divider__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    id: "apikey"
  }, "API key"), "You can use this api key in any of our", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://docs.posthog.com/#/integrations"
  }, " libraries"), ".", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("pre", {
    className: "code"
  }, user.team.api_token), "This key is write-only, in that it can only create new events. It can't read any events or any of your other data stored on PostHog.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_divider__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    id: "slack"
  }, "Slack Integration"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(scenes_setup_SlackIntegration__WEBPACK_IMPORTED_MODULE_11__["SlackIntegration"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_divider__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    id: "invite"
  }, "Invite your team"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-lg-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lib_components_InviteTeam__WEBPACK_IMPORTED_MODULE_5__["InviteTeam"], {
    user: user
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_divider__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    id: "demodata"
  }, "Delete HogFlix demo data"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_DeleteDemoData__WEBPACK_IMPORTED_MODULE_10__["DeleteDemoData"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_divider__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    id: "password"
  }, "Change Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ChangePassword__WEBPACK_IMPORTED_MODULE_12__["ChangePassword"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_divider__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    id: "optout"
  }, "Opt out of capturing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_OptOutCapture__WEBPACK_IMPORTED_MODULE_6__["OptOutCapture"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_divider__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, "Security and feature updates"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_UpdateEmailPreferences__WEBPACK_IMPORTED_MODULE_7__["UpdateEmailPreferences"], null));
}

/***/ }),

/***/ "./frontend/src/scenes/setup/SetupAppUrls.js":
/*!***************************************************!*\
  !*** ./frontend/src/scenes/setup/SetupAppUrls.js ***!
  \***************************************************/
/*! exports provided: SetupAppUrls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupAppUrls", function() { return SetupAppUrls; });
/* harmony import */ var antd_es_input_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/input/style/css */ "./node_modules/antd/es/input/style/css.js");
/* harmony import */ var antd_es_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/input */ "./node_modules/antd/es/input/index.js");
/* harmony import */ var antd_es_tooltip_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/tooltip/style/css */ "./node_modules/antd/es/tooltip/style/css.js");
/* harmony import */ var antd_es_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/tooltip */ "./node_modules/antd/es/tooltip/index.js");
/* harmony import */ var antd_es_button_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/button/style/css */ "./node_modules/antd/es/button/style/css.js");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/button */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var kea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! kea */ "./node_modules/kea/lib/index.esm.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _userLogic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../userLogic */ "./frontend/src/scenes/userLogic.js");












var defaultValue = 'https://';
var appUrlsLogic = Object(kea__WEBPACK_IMPORTED_MODULE_9__["kea"])({
  actions: function actions() {
    return {
      addUrl: true,
      removeUrl: function removeUrl(index) {
        return {
          index: index
        };
      },
      updateUrl: function updateUrl(index, value) {
        return {
          index: index,
          value: value
        };
      },
      saveAppUrls: true
    };
  },
  defaults: function defaults() {
    return {
      appUrls: function appUrls(state) {
        return _userLogic__WEBPACK_IMPORTED_MODULE_11__["userLogic"].selectors.user(state).team.app_urls || [defaultValue];
      }
    };
  },
  reducers: function reducers(_ref) {
    var _ref4, _ref6;

    var actions = _ref.actions;
    return {
      appUrls: [[defaultValue], (_ref4 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_ref4, actions.addUrl, function (state) {
        return state.concat([defaultValue]);
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_ref4, actions.updateUrl, function (state, _ref2) {
        var index = _ref2.index,
            value = _ref2.value;
        return Object.assign(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(state), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()({}, index, value));
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_ref4, actions.removeUrl, function (state, _ref3) {
        var index = _ref3.index;

        var newAppUrls = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(state);

        newAppUrls.splice(index, 1);
        return newAppUrls;
      }), _ref4)],
      isSaved: [false, (_ref6 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_ref6, actions.addUrl, function () {
        return false;
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_ref6, actions.removeUrl, function () {
        return false;
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_ref6, actions.updateUrl, function () {
        return false;
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_ref6, _userLogic__WEBPACK_IMPORTED_MODULE_11__["userLogic"].actions.userUpdateSuccess, function (state, _ref5) {
        var updateKey = _ref5.updateKey;
        return updateKey === 'SetupAppUrls' || state;
      }), _ref6)]
    };
  },
  listeners: function listeners(_ref7) {
    var actions = _ref7.actions,
        values = _ref7.values;
    return _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()({}, actions.saveAppUrls, function () {
      _userLogic__WEBPACK_IMPORTED_MODULE_11__["userLogic"].actions.userUpdateRequest({
        team: {
          app_urls: values.appUrls
        }
      }, 'SetupAppUrls');
    });
  },
  path: function path() {
    return ["scenes", "setup", "SetupAppUrls"];
  }
});
function SetupAppUrls() {
  var _useValues = Object(kea__WEBPACK_IMPORTED_MODULE_9__["useValues"])(appUrlsLogic),
      appUrls = _useValues.appUrls,
      isSaved = _useValues.isSaved;

  var _useActions = Object(kea__WEBPACK_IMPORTED_MODULE_9__["useActions"])(appUrlsLogic),
      addUrl = _useActions.addUrl,
      removeUrl = _useActions.removeUrl,
      updateUrl = _useActions.updateUrl,
      saveAppUrls = _useActions.saveAppUrls;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", null, "What URLs will you be using PostHog on?"), appUrls.map(function (url, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: url,
      onChange: function onChange(e) {
        return updateUrl(index, e.target.value);
      },
      autoFocus: appUrls.count === 1 && appUrls[0] === defaultValue,
      type: "url",
      placeholder: defaultValue,
      style: {
        width: '400px'
      },
      suffix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_tooltip__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Delete"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onClick: function onClick() {
          return removeUrl(index);
        },
        type: "link",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["DeleteOutlined"], null)
      }))
    }));
  }), appUrls.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
    className: "btn btn-link",
    type: "button",
    onClick: addUrl,
    style: {
      padding: '5px 0',
      margin: '5px 0',
      textDecoration: 'none'
    }
  }, "+ Add Another URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "primary",
    onClick: function onClick(e) {
      e.preventDefault();
      saveAppUrls();
    }
  }, "Save URLs"), isSaved && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    className: "text-success",
    style: {
      marginLeft: 10
    }
  }, "URLs saved."));
}

/***/ }),

/***/ "./frontend/src/scenes/setup/SlackIntegration.js":
/*!*******************************************************!*\
  !*** ./frontend/src/scenes/setup/SlackIntegration.js ***!
  \*******************************************************/
/*! exports provided: SlackIntegration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlackIntegration", function() { return SlackIntegration; });
/* harmony import */ var antd_es_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/button/style/css */ "./node_modules/antd/es/button/style/css.js");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/button */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var antd_es_input_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/input/style/css */ "./node_modules/antd/es/input/style/css.js");
/* harmony import */ var antd_es_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/input */ "./node_modules/antd/es/input/index.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var kea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! kea */ "./node_modules/kea/lib/index.esm.js");
/* harmony import */ var _userLogic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../userLogic */ "./frontend/src/scenes/userLogic.js");
/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lib/api */ "./frontend/src/lib/api.js");











var logic = Object(kea__WEBPACK_IMPORTED_MODULE_8__["kea"])({
  actions: function actions() {
    return {
      setEditedWebhook: function setEditedWebhook(webhook) {
        return {
          webhook: webhook
        };
      },
      saveWebhook: true,
      testAndSaveWebhook: true,
      setError: function setError(error) {
        return {
          error: error
        };
      }
    };
  },
  reducers: function reducers(_ref) {
    var _ref6, _ref8, _ref10;

    var actions = _ref.actions;
    return {
      editedWebhook: [function (state) {
        var _userLogic$selectors$, _userLogic$selectors$2;

        return (_userLogic$selectors$ = _userLogic__WEBPACK_IMPORTED_MODULE_9__["userLogic"].selectors.user(state)) === null || _userLogic$selectors$ === void 0 ? void 0 : (_userLogic$selectors$2 = _userLogic$selectors$.team) === null || _userLogic$selectors$2 === void 0 ? void 0 : _userLogic$selectors$2.slack_incoming_webhook;
      }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()({}, actions.setEditedWebhook, function (_, _ref2) {
        var webhook = _ref2.webhook;
        return webhook;
      })],
      isSaving: [false, (_ref6 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_ref6, actions.saveWebhook, function () {
        return true;
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_ref6, actions.testAndSaveWebhook, function () {
        return true;
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_ref6, actions.setError, function () {
        return false;
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_ref6, _userLogic__WEBPACK_IMPORTED_MODULE_9__["userLogic"].actions.userUpdateSuccess, function (state, _ref4) {
        var updateKey = _ref4.updateKey;
        return updateKey === 'slack' ? false : state;
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_ref6, _userLogic__WEBPACK_IMPORTED_MODULE_9__["userLogic"].actions.userUpdateFailure, function (state, _ref5) {
        var updateKey = _ref5.updateKey;
        return updateKey === 'slack' ? false : state;
      }), _ref6)],
      isSaved: [false, (_ref8 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_ref8, actions.saveWebhook, function () {
        return false;
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_ref8, actions.testAndSaveWebhook, function () {
        return false;
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_ref8, _userLogic__WEBPACK_IMPORTED_MODULE_9__["userLogic"].actions.userUpdateSuccess, function (state, _ref7) {
        var updateKey = _ref7.updateKey;
        return updateKey === 'slack' ? true : state;
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_ref8, actions.setEditedWebhook, function () {
        return false;
      }), _ref8)],
      error: [null, (_ref10 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_ref10, actions.saveWebhook, function () {
        return null;
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_ref10, actions.testAndSaveWebhook, function () {
        return null;
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_ref10, actions.setError, function (_, _ref9) {
        var error = _ref9.error;
        return error;
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_ref10, actions.setEditedWebhook, function () {
        return null;
      }), _ref10)]
    };
  },
  listeners: function listeners(_ref11) {
    var _ref14;

    var actions = _ref11.actions,
        values = _ref11.values;
    return _ref14 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_ref14, actions.testAndSaveWebhook, _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee() {
      var editedWebhook, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              editedWebhook = values.editedWebhook;

              if (!editedWebhook) {
                _context.next = 14;
                break;
              }

              _context.prev = 2;
              _context.next = 5;
              return lib_api__WEBPACK_IMPORTED_MODULE_10__["default"].create('api/user/test_slack_webhook', {
                webhook: editedWebhook
              });

            case 5:
              response = _context.sent;

              if (response.success) {
                actions.saveWebhook(editedWebhook);
              } else {
                actions.setError(response.error);
              }

              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);
              actions.setError(_context.t0.message);

            case 12:
              _context.next = 15;
              break;

            case 14:
              actions.saveWebhook(editedWebhook);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 9]]);
    }))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_ref14, actions.saveWebhook, _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _userLogic__WEBPACK_IMPORTED_MODULE_9__["userLogic"].actions.userUpdateRequest({
                team: {
                  slack_incoming_webhook: values.editedWebhook
                }
              }, 'slack');

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))), _ref14;
  },
  path: function path() {
    return ["scenes", "setup", "SlackIntegration"];
  }
});
function SlackIntegration() {
  var _useValues = Object(kea__WEBPACK_IMPORTED_MODULE_8__["useValues"])(logic),
      isSaved = _useValues.isSaved,
      isSaving = _useValues.isSaving,
      error = _useValues.error,
      editedWebhook = _useValues.editedWebhook;

  var _useActions = Object(kea__WEBPACK_IMPORTED_MODULE_8__["useActions"])(logic),
      testAndSaveWebhook = _useActions.testAndSaveWebhook,
      setEditedWebhook = _useActions.setEditedWebhook;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", null, "Enter your Slack webhook URL here.", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
    href: "https://docs.posthog.com/#/integrations/slack"
  }, "Read the docs to find out how to get this URL.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    style: {
      marginBottom: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: editedWebhook,
    size: "large",
    onChange: function onChange(e) {
      return setEditedWebhook(e.target.value);
    },
    style: {
      width: 500
    },
    type: "url"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "primary",
    onClick: function onClick(e) {
      e.preventDefault();
      testAndSaveWebhook();
    }
  }, isSaving ? '...' : editedWebhook ? 'Test & Save' : 'Save'), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
    className: "text-danger",
    style: {
      marginLeft: 10
    }
  }, "Error: ", error), isSaved && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
    className: "text-success",
    style: {
      marginLeft: 10
    }
  }, editedWebhook ? 'All good! You should see a message on Slack!' : 'Slack integration removed!'));
}

/***/ }),

/***/ "./frontend/src/scenes/setup/UpdateEmailPreferences.js":
/*!*************************************************************!*\
  !*** ./frontend/src/scenes/setup/UpdateEmailPreferences.js ***!
  \*************************************************************/
/*! exports provided: UpdateEmailPreferences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateEmailPreferences", function() { return UpdateEmailPreferences; });
/* harmony import */ var antd_es_switch_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/switch/style/css */ "./node_modules/antd/es/switch/style/css.js");
/* harmony import */ var antd_es_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/switch */ "./node_modules/antd/es/switch/index.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var kea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! kea */ "./node_modules/kea/lib/index.esm.js");
/* harmony import */ var _userLogic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../userLogic */ "./frontend/src/scenes/userLogic.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/api */ "./frontend/src/lib/api.js");







function UpdateEmailPreferences() {
  var _useValues = Object(kea__WEBPACK_IMPORTED_MODULE_4__["useValues"])(_userLogic__WEBPACK_IMPORTED_MODULE_5__["userLogic"]),
      user = _useValues.user;

  var _useActions = Object(kea__WEBPACK_IMPORTED_MODULE_4__["useActions"])(_userLogic__WEBPACK_IMPORTED_MODULE_5__["userLogic"]),
      userUpdateRequest = _useActions.userUpdateRequest;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      saved = _useState2[0],
      setSaved = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_es_switch__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onChange: function onChange(checked) {
      userUpdateRequest({
        user: {
          email_opt_in: !user.email_opt_in
        }
      });
      setSaved(true);
    },
    defaultChecked: user.email_opt_in
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    style: {
      marginLeft: '10px'
    }
  }, "Receive security and feature updates via email. You can easily unsubscribe at any time."), saved && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "text-success"
  }, "Preference saved."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null));
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvbGliL2hvb2tzL3VzZUFuY2hvci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvc2NlbmVzL3NldHVwL0NoYW5nZVBhc3N3b3JkLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9zY2VuZXMvc2V0dXAvRGVsZXRlRGVtb0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL3NjZW5lcy9zZXR1cC9PcHRPdXRDYXB0dXJlLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9zY2VuZXMvc2V0dXAvU2V0dXAuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL3NjZW5lcy9zZXR1cC9TZXR1cEFwcFVybHMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL3NjZW5lcy9zZXR1cC9TbGFja0ludGVncmF0aW9uLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9zY2VuZXMvc2V0dXAvVXBkYXRlRW1haWxQcmVmZXJlbmNlcy5qcyJdLCJuYW1lcyI6WyJ1c2VBbmNob3IiLCJoYXNoIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN1YnN0ciIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJDaGFuZ2VQYXNzd29yZCIsInByb3BzIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiYXBpIiwidXBkYXRlIiwib2xkUGFzc3dvcmQiLCJzdGF0ZSIsIm5ld1Bhc3N3b3JkIiwidG9hc3QiLCJzdWNjZXNzIiwiZXJyb3IiLCJoYW5kbGVDaGFuZ2UiLCJtYXhXaWR0aCIsImUiLCJzYXZlIiwiQ29tcG9uZW50IiwiZGVsZXRlRGVtb0RhdGFMb2dpYyIsImtlYSIsImFjdGlvbnMiLCJkZWxldGVEZW1vRGF0YSIsImRlbW9EYXRhRGVsZXRlZCIsInJlZHVjZXJzIiwiaXNEZWxldGVkIiwibGlzdGVuZXJzIiwidmFsdWVzIiwiZ2V0IiwidXNlciIsImRlbGV0ZUFsbERhdGFMb2dpYyIsIkRlbGV0ZURlbW9EYXRhIiwidXNlVmFsdWVzIiwidXNlQWN0aW9ucyIsImlzRGVsZXRlZEFsbCIsImRlbGV0ZUFsbERhdGEiLCJPcHRPdXRDYXB0dXJlIiwidXNlckxvZ2ljIiwidXNlU3RhdGUiLCJzYXZlZCIsInNldFNhdmVkIiwiY2hlY2tlZCIsInRlYW0iLCJvcHRfb3V0X2NhcHR1cmUiLCJ0aGVuIiwibWFyZ2luTGVmdCIsIlNldHVwIiwicm91dGVyIiwibG9jYXRpb24iLCJkaXNwbGF5IiwiYXBpX3Rva2VuIiwiZGVmYXVsdFZhbHVlIiwiYXBwVXJsc0xvZ2ljIiwiYWRkVXJsIiwicmVtb3ZlVXJsIiwiaW5kZXgiLCJ1cGRhdGVVcmwiLCJzYXZlQXBwVXJscyIsImRlZmF1bHRzIiwiYXBwVXJscyIsInNlbGVjdG9ycyIsImFwcF91cmxzIiwiY29uY2F0IiwiT2JqZWN0IiwiYXNzaWduIiwibmV3QXBwVXJscyIsInNwbGljZSIsImlzU2F2ZWQiLCJ1c2VyVXBkYXRlU3VjY2VzcyIsInVwZGF0ZUtleSIsInVzZXJVcGRhdGVSZXF1ZXN0IiwiU2V0dXBBcHBVcmxzIiwibWFwIiwidXJsIiwiY291bnQiLCJ3aWR0aCIsImxlbmd0aCIsInBhZGRpbmciLCJtYXJnaW4iLCJ0ZXh0RGVjb3JhdGlvbiIsImxvZ2ljIiwic2V0RWRpdGVkV2ViaG9vayIsIndlYmhvb2siLCJzYXZlV2ViaG9vayIsInRlc3RBbmRTYXZlV2ViaG9vayIsInNldEVycm9yIiwiZWRpdGVkV2ViaG9vayIsInNsYWNrX2luY29taW5nX3dlYmhvb2siLCJfIiwiaXNTYXZpbmciLCJ1c2VyVXBkYXRlRmFpbHVyZSIsImNyZWF0ZSIsInJlc3BvbnNlIiwibWVzc2FnZSIsIlNsYWNrSW50ZWdyYXRpb24iLCJtYXJnaW5Cb3R0b20iLCJVcGRhdGVFbWFpbFByZWZlcmVuY2VzIiwiZW1haWxfb3B0X2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLFNBQVNBLFNBQVQsQ0FBbUJDLElBQW5CLEVBQXlCO0FBQzVCQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJRCxJQUFJLElBQUlFLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QkgsSUFBSSxDQUFDSSxNQUFMLENBQVksQ0FBWixDQUF4QixDQUFaLEVBQXFEO0FBQ2pEO0FBQ0FGLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QkgsSUFBSSxDQUFDSSxNQUFMLENBQVksQ0FBWixDQUF4QixFQUF3Q0MsY0FBeEMsQ0FBdUQ7QUFBRUMsZ0JBQVEsRUFBRTtBQUFaLE9BQXZEO0FBQ0g7QUFDSixHQUxRLEVBS04sQ0FBQ04sSUFBRCxDQUxNLENBQVQsQ0FENEIsQ0FNakI7QUFDZCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEQ7QUFDQTtBQUNBO0FBR08sSUFBTU8sY0FBYjtBQUFBOztBQUFBOztBQUNJLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsOExBUUosVUFBQUMsS0FBSyxFQUFJO0FBQ3BCLFlBQUtDLFFBQUwsbUZBQ0tELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxJQURsQixFQUN5QkgsS0FBSyxDQUFDRSxNQUFOLENBQWFFLEtBRHRDO0FBR0gsS0Faa0I7O0FBQUE7QUFBQSxzTEFjWixpQkFBTUosS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0hBLHFCQUFLLENBQUNLLGNBQU47QUFERztBQUFBO0FBQUEsdUJBR09DLGlEQUFHLENBQUNDLE1BQUosQ0FBVywwQkFBWCxFQUF1QztBQUN6Q0MsNkJBQVcsRUFBRSxNQUFLQyxLQUFMLENBQVdELFdBRGlCO0FBRXpDRSw2QkFBVyxFQUFFLE1BQUtELEtBQUwsQ0FBV0M7QUFGaUIsaUJBQXZDLENBSFA7O0FBQUE7QUFPQ0MscUVBQUssQ0FBQ0MsT0FBTixDQUFjLGtCQUFkO0FBUEQ7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFTQ0QscUVBQUssQ0FBQ0UsS0FBTixDQUFZLFlBQVNBLEtBQXJCOztBQVREO0FBQUE7O0FBV0Msc0JBQUtaLFFBQUwsQ0FBYztBQUNWTyw2QkFBVyxFQUFFLEVBREg7QUFFVkUsNkJBQVcsRUFBRTtBQUZILGlCQUFkOztBQVhEOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BZFk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRWYsVUFBS0QsS0FBTCxHQUFhO0FBQ1RELGlCQUFXLEVBQUUsRUFESjtBQUVURSxpQkFBVyxFQUFFO0FBRkosS0FBYjtBQUZlO0FBTWxCOztBQVBMO0FBQUE7QUFBQSxXQWlDSSxrQkFBUztBQUFBOztBQUNMLDBCQUNJLHNGQUNJLDBGQURKLGVBRUksdUVBRkosZUFHSSxrSEFBTyxRQUFQO0FBQ0ksWUFBSSxFQUFDLGFBRFQ7QUFFSSxnQkFBUSxNQUZaO0FBR0ksZ0JBQVEsRUFBRSxLQUFLSSxZQUhuQjtBQUlJLGFBQUssRUFBRSxLQUFLTCxLQUFMLENBQVdELFdBSnRCO0FBS0ksYUFBSyxFQUFFO0FBQUVPLGtCQUFRLEVBQUU7QUFBWjtBQUxYLFFBSEosZUFVSSx1RUFWSixlQVdJLDBGQVhKLGVBWUksdUVBWkosZUFhSSxrSEFBTyxRQUFQO0FBQ0ksWUFBSSxFQUFDLGFBRFQ7QUFFSSxnQkFBUSxNQUZaO0FBR0ksZ0JBQVEsRUFBRSxLQUFLRCxZQUhuQjtBQUlJLGFBQUssRUFBRSxLQUFLTCxLQUFMLENBQVdDLFdBSnRCO0FBS0ksYUFBSyxFQUFFO0FBQUVLLGtCQUFRLEVBQUU7QUFBWjtBQUxYLFFBYkosZUFvQkksdUVBcEJKLGVBcUJJLHVFQXJCSixlQXNCSTtBQUNJLFlBQUksRUFBQyxTQURUO0FBRUksZUFBTyxFQUFFLGlCQUFBQyxDQUFDLEVBQUk7QUFDVkEsV0FBQyxDQUFDWCxjQUFGOztBQUNBLGdCQUFJLENBQUNZLElBQUw7QUFDSDtBQUxMLDJCQXRCSixDQURKO0FBa0NIO0FBcEVMOztBQUFBO0FBQUEsRUFBb0NDLGdEQUFwQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBR0EsSUFBTUMsbUJBQW1CLEdBQUdDLCtDQUFHLENBQUM7QUFDNUJDLFNBQU8sRUFBRTtBQUFBLFdBQU87QUFDWkMsb0JBQWMsRUFBRSxJQURKO0FBRVpDLHFCQUFlLEVBQUU7QUFGTCxLQUFQO0FBQUEsR0FEbUI7QUFLNUJDLFVBQVEsRUFBRTtBQUFBLFFBQUdILE9BQUgsUUFBR0EsT0FBSDtBQUFBLFdBQWtCO0FBQ3hCSSxlQUFTLEVBQUUsQ0FDUCxLQURPLG1GQUdGSixPQUFPLENBQUNFLGVBSE4sRUFHd0I7QUFBQSxlQUFNLElBQU47QUFBQSxPQUh4QjtBQURhLEtBQWxCO0FBQUEsR0FMa0I7QUFhNUJHLFdBQVMsRUFBRTtBQUFBLFFBQUdMLE9BQUgsU0FBR0EsT0FBSDtBQUFBLFFBQVlNLE1BQVosU0FBWUEsTUFBWjtBQUFBLDRGQUNOTixPQUFPLENBQUNDLGNBREYsc0tBQ21CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFQ2hCLGdEQUFHLENBQUNzQixHQUFKLENBQVEsa0JBQVIsQ0FGRDs7QUFBQTtBQUVaQyxrQkFGWTtBQUdsQlIscUJBQU8sQ0FBQ0UsZUFBUjtBQUhrQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRG5CO0FBQUEsR0FiaUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFELENBQS9CO0FBd0JBLElBQU1PLGtCQUFrQixHQUFHViwrQ0FBRyxDQUFDO0FBQzNCQyxTQUFPLEVBQUU7QUFBQSxXQUFPO0FBQ1pDLG9CQUFjLEVBQUUsSUFESjtBQUVaQyxxQkFBZSxFQUFFO0FBRkwsS0FBUDtBQUFBLEdBRGtCO0FBSzNCQyxVQUFRLEVBQUU7QUFBQSxRQUFHSCxPQUFILFNBQUdBLE9BQUg7QUFBQSxXQUFrQjtBQUN4QkksZUFBUyxFQUFFLENBQ1AsS0FETyxtRkFHRkosT0FBTyxDQUFDRSxlQUhOLEVBR3dCO0FBQUEsZUFBTSxJQUFOO0FBQUEsT0FIeEI7QUFEYSxLQUFsQjtBQUFBLEdBTGlCO0FBYTNCRyxXQUFTLEVBQUU7QUFBQSxRQUFHTCxPQUFILFNBQUdBLE9BQUg7QUFBQSxRQUFZTSxNQUFaLFNBQVlBLE1BQVo7QUFBQSw0RkFDTk4sT0FBTyxDQUFDQyxjQURGLHNLQUNtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRUNoQixnREFBRyxDQUFDc0IsR0FBSixDQUFRLGlCQUFSLENBRkQ7O0FBQUE7QUFFWkMsa0JBRlk7QUFHbEJSLHFCQUFPLENBQUNFLGVBQVI7QUFIa0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURuQjtBQUFBLEdBYmdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBRCxDQUE5QjtBQXlCTyxTQUFTUSxjQUFULEdBQTBCO0FBQzdCLG1CQUFzQkMscURBQVMsQ0FBQ2IsbUJBQUQsQ0FBL0I7QUFBQSxNQUFRTSxTQUFSLGNBQVFBLFNBQVI7O0FBQ0Esb0JBQTJCUSxzREFBVSxDQUFDZCxtQkFBRCxDQUFyQztBQUFBLE1BQVFHLGNBQVIsZUFBUUEsY0FBUjs7QUFDQSxvQkFBeUJVLHFEQUFTLENBQUNGLGtCQUFELENBQWxDO0FBQUEsTUFBUUksWUFBUixlQUFRQSxZQUFSOztBQUNBLHFCQUEwQkQsc0RBQVUsQ0FBQ0gsa0JBQUQsQ0FBcEM7QUFBQSxNQUFRSyxhQUFSLGdCQUFRQSxhQUFSOztBQUNBLHNCQUNJLHFGQUNJO0FBQVEsUUFBSSxFQUFDLFNBQWI7QUFBdUIsVUFBTSxNQUE3QjtBQUE4QixXQUFPLEVBQUViO0FBQXZDLHdCQURKLGVBSUk7QUFBUSxRQUFJLEVBQUMsU0FBYjtBQUF1QixVQUFNLE1BQTdCO0FBQThCLFdBQU8sRUFBRWE7QUFBdkMsdUJBSkosRUFPS1YsU0FBUyxpQkFBSTtBQUFHLGFBQVMsRUFBQztBQUFiLDBCQVBsQixFQVFLUyxZQUFZLGlCQUFJO0FBQUcsYUFBUyxFQUFDO0FBQWIseUJBUnJCLENBREo7QUFZSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFRDtBQUNBO0FBQ0E7QUFDQTtBQUdPLFNBQVNFLGFBQVQsR0FBeUI7QUFDNUIsbUJBQWlCSixxREFBUyxDQUFDSyxvREFBRCxDQUExQjtBQUFBLE1BQVFSLElBQVIsY0FBUUEsSUFBUjs7QUFDQSxrQkFBMEJTLHNEQUFRLENBQUMsS0FBRCxDQUFsQztBQUFBO0FBQUEsTUFBT0MsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBRUEsc0JBQ0ksMlJBR0ksc0VBSEosZUFJSSxzRUFKSiw0S0FPSSxzRUFQSixlQVFJLHNFQVJKLGVBU0k7QUFDSSxZQUFRLEVBQUUsa0JBQUFDLE9BQU8sRUFBSTtBQUNqQm5DLHNEQUFHLENBQUNDLE1BQUosQ0FBVyxVQUFYLEVBQXVCO0FBQ25CbUMsWUFBSSxFQUFFO0FBQUVDLHlCQUFlLEVBQUVGO0FBQW5CO0FBRGEsT0FBdkIsRUFFR0csSUFGSCxDQUVRO0FBQUEsZUFBTUosUUFBUSxDQUFDLElBQUQsQ0FBZDtBQUFBLE9BRlI7QUFHSCxLQUxMO0FBTUksa0JBQWMsRUFBRVgsSUFBSSxDQUFDYSxJQUFMLENBQVVDO0FBTjlCLElBVEosZUFpQkk7QUFDSSxTQUFLLEVBQUU7QUFDSEUsZ0JBQVUsRUFBRTtBQURUO0FBRFgsaURBakJKLEVBd0JLTixLQUFLLGlCQUNGO0FBQUcsYUFBUyxFQUFDO0FBQWIsd0NBQ3NCO0FBQUcsUUFBSSxFQUFDO0FBQVIsdURBRHRCLENBekJSLENBREo7QUFnQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNEO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU08sS0FBVCxHQUFpQjtBQUNwQixtQkFBaUJkLHFEQUFTLENBQUNLLG9EQUFELENBQTFCO0FBQUEsTUFBUVIsSUFBUixjQUFRQSxJQUFSOztBQUNBLG9CQUFxQkcscURBQVMsQ0FBQ2Usa0RBQUQsQ0FBOUI7QUFBQSxNQUFRQyxRQUFSLGVBQVFBLFFBQVI7O0FBRUExRCx3RUFBUyxDQUFDMEQsUUFBUSxDQUFDekQsSUFBVixDQUFUO0FBRUEsc0JBQ0kscUZBQ0k7QUFBSSxNQUFFLEVBQUM7QUFBUCxrQ0FESixlQUVJLDJEQUFDLDBEQUFELE9BRkosZUFHSSx5SEFISixlQUlJO0FBQUksTUFBRSxFQUFDO0FBQVAseUJBSkosOEdBSzZHLEdBTDdHLGVBTUk7QUFBSyxTQUFLLEVBQUU7QUFBRTBELGFBQU8sRUFBRTtBQUFYO0FBQVosZUFOSixXQU1nRSxHQU5oRSxlQU9JO0FBQUcsUUFBSSxFQUFDO0FBQVIsMkRBUEosZUFVSSwyREFBQyxtRUFBRDtBQUFXLFFBQUksRUFBRXBCO0FBQWpCLElBVkosZUFXSTtBQUFHLFFBQUksRUFBQztBQUFSLDhDQVhKLGVBWUkseUhBWkosZUFhSTtBQUFJLE1BQUUsRUFBQztBQUFQLGVBYkoseURBZUk7QUFBRyxRQUFJLEVBQUM7QUFBUixrQkFmSixvQkFnQkk7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUF1QkEsSUFBSSxDQUFDYSxJQUFMLENBQVVRLFNBQWpDLENBaEJKLHVKQW1CSSx5SEFuQkosZUFvQkk7QUFBSSxNQUFFLEVBQUM7QUFBUCx5QkFwQkosZUFxQkksMkRBQUMsK0VBQUQsT0FyQkosZUFzQkkseUhBdEJKLGVBdUJJO0FBQUksTUFBRSxFQUFDO0FBQVAsd0JBdkJKLGVBd0JJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSSwyREFBQyxxRUFBRDtBQUFZLFFBQUksRUFBRXJCO0FBQWxCLElBREosQ0FESixDQXhCSixlQTZCSSx5SEE3QkosZUE4Qkk7QUFBSSxNQUFFLEVBQUM7QUFBUCxnQ0E5QkosZUErQkksMkRBQUMsK0RBQUQsT0EvQkosZUFnQ0kseUhBaENKLGVBaUNJO0FBQUksTUFBRSxFQUFDO0FBQVAsdUJBakNKLGVBa0NJLDJEQUFDLCtEQUFELE9BbENKLGVBbUNJLHlIQW5DSixlQW9DSTtBQUFJLE1BQUUsRUFBQztBQUFQLDRCQXBDSixlQXFDSSwyREFBQyw0REFBRCxPQXJDSixlQXNDSSx5SEF0Q0osZUF1Q0ksc0dBdkNKLGVBd0NJLDJEQUFDLDhFQUFELE9BeENKLENBREo7QUE0Q0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFRDtBQUNBO0FBRUE7QUFFQTtBQUVBLElBQU1zQixZQUFZLEdBQUcsVUFBckI7QUFFQSxJQUFNQyxZQUFZLEdBQUdoQywrQ0FBRyxDQUFDO0FBQ3JCQyxTQUFPLEVBQUU7QUFBQSxXQUFPO0FBQ1pnQyxZQUFNLEVBQUUsSUFESTtBQUVaQyxlQUFTLEVBQUUsbUJBQUFDLEtBQUs7QUFBQSxlQUFLO0FBQUVBLGVBQUssRUFBTEE7QUFBRixTQUFMO0FBQUEsT0FGSjtBQUdaQyxlQUFTLEVBQUUsbUJBQUNELEtBQUQsRUFBUW5ELEtBQVI7QUFBQSxlQUFtQjtBQUFFbUQsZUFBSyxFQUFMQSxLQUFGO0FBQVNuRCxlQUFLLEVBQUxBO0FBQVQsU0FBbkI7QUFBQSxPQUhDO0FBSVpxRCxpQkFBVyxFQUFFO0FBSkQsS0FBUDtBQUFBLEdBRFk7QUFRckJDLFVBQVEsRUFBRTtBQUFBLFdBQU87QUFDYkMsYUFBTyxFQUFFLGlCQUFBbEQsS0FBSztBQUFBLGVBQUk0QixxREFBUyxDQUFDdUIsU0FBVixDQUFvQi9CLElBQXBCLENBQXlCcEIsS0FBekIsRUFBZ0NpQyxJQUFoQyxDQUFxQ21CLFFBQXJDLElBQWlELENBQUNWLFlBQUQsQ0FBckQ7QUFBQTtBQURELEtBQVA7QUFBQSxHQVJXO0FBWXJCM0IsVUFBUSxFQUFFO0FBQUE7O0FBQUEsUUFBR0gsT0FBSCxRQUFHQSxPQUFIO0FBQUEsV0FBa0I7QUFDeEJzQyxhQUFPLEVBQUUsQ0FDTCxDQUFDUixZQUFELENBREssbUdBR0E5QixPQUFPLENBQUNnQyxNQUhSLEVBR2lCLFVBQUE1QyxLQUFLO0FBQUEsZUFBSUEsS0FBSyxDQUFDcUQsTUFBTixDQUFhLENBQUNYLFlBQUQsQ0FBYixDQUFKO0FBQUEsT0FIdEIsdUZBSUE5QixPQUFPLENBQUNtQyxTQUpSLEVBSW9CLFVBQUMvQyxLQUFEO0FBQUEsWUFBVThDLEtBQVYsU0FBVUEsS0FBVjtBQUFBLFlBQWlCbkQsS0FBakIsU0FBaUJBLEtBQWpCO0FBQUEsZUFBNkIyRCxNQUFNLENBQUNDLE1BQVAsaUZBQWtCdkQsS0FBbEIsb0ZBQTZCOEMsS0FBN0IsRUFBcUNuRCxLQUFyQyxFQUE3QjtBQUFBLE9BSnBCLHVGQUtBaUIsT0FBTyxDQUFDaUMsU0FMUixFQUtvQixVQUFDN0MsS0FBRCxTQUFzQjtBQUFBLFlBQVo4QyxLQUFZLFNBQVpBLEtBQVk7O0FBQ3ZDLFlBQU1VLFVBQVUsR0FBRyxnRkFBSXhELEtBQVAsQ0FBaEI7O0FBQ0F3RCxrQkFBVSxDQUFDQyxNQUFYLENBQWtCWCxLQUFsQixFQUF5QixDQUF6QjtBQUNBLGVBQU9VLFVBQVA7QUFDSCxPQVRBLFVBRGU7QUFheEJFLGFBQU8sRUFBRSxDQUNMLEtBREssbUdBR0E5QyxPQUFPLENBQUNnQyxNQUhSLEVBR2lCO0FBQUEsZUFBTSxLQUFOO0FBQUEsT0FIakIsdUZBSUFoQyxPQUFPLENBQUNpQyxTQUpSLEVBSW9CO0FBQUEsZUFBTSxLQUFOO0FBQUEsT0FKcEIsdUZBS0FqQyxPQUFPLENBQUNtQyxTQUxSLEVBS29CO0FBQUEsZUFBTSxLQUFOO0FBQUEsT0FMcEIsdUZBTUFuQixxREFBUyxDQUFDaEIsT0FBVixDQUFrQitDLGlCQU5sQixFQU1zQyxVQUFDM0QsS0FBRDtBQUFBLFlBQVU0RCxTQUFWLFNBQVVBLFNBQVY7QUFBQSxlQUEwQkEsU0FBUyxLQUFLLGNBQWQsSUFBZ0M1RCxLQUExRDtBQUFBLE9BTnRDO0FBYmUsS0FBbEI7QUFBQSxHQVpXO0FBb0NyQmlCLFdBQVMsRUFBRTtBQUFBLFFBQUdMLE9BQUgsU0FBR0EsT0FBSDtBQUFBLFFBQVlNLE1BQVosU0FBWUEsTUFBWjtBQUFBLDRGQUNOTixPQUFPLENBQUNvQyxXQURGLEVBQ2dCLFlBQU07QUFDekJwQiwyREFBUyxDQUFDaEIsT0FBVixDQUFrQmlELGlCQUFsQixDQUFvQztBQUFFNUIsWUFBSSxFQUFFO0FBQUVtQixrQkFBUSxFQUFFbEMsTUFBTSxDQUFDZ0M7QUFBbkI7QUFBUixPQUFwQyxFQUE0RSxjQUE1RTtBQUNILEtBSE07QUFBQSxHQXBDVTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQUQsQ0FBeEI7QUEyQ08sU0FBU1ksWUFBVCxHQUF3QjtBQUMzQixtQkFBNkJ2QyxxREFBUyxDQUFDb0IsWUFBRCxDQUF0QztBQUFBLE1BQVFPLE9BQVIsY0FBUUEsT0FBUjtBQUFBLE1BQWlCUSxPQUFqQixjQUFpQkEsT0FBakI7O0FBQ0Esb0JBQXNEbEMsc0RBQVUsQ0FBQ21CLFlBQUQsQ0FBaEU7QUFBQSxNQUFRQyxNQUFSLGVBQVFBLE1BQVI7QUFBQSxNQUFnQkMsU0FBaEIsZUFBZ0JBLFNBQWhCO0FBQUEsTUFBMkJFLFNBQTNCLGVBQTJCQSxTQUEzQjtBQUFBLE1BQXNDQyxXQUF0QyxlQUFzQ0EsV0FBdEM7O0FBRUEsc0JBQ0kscUZBQ0ksb0hBREosRUFFS0UsT0FBTyxDQUFDYSxHQUFSLENBQVksVUFBQ0MsR0FBRCxFQUFNbEIsS0FBTjtBQUFBLHdCQUNUO0FBQUssU0FBRyxFQUFFQTtBQUFWLG9CQUNJO0FBQ0ksV0FBSyxFQUFFa0IsR0FEWDtBQUVJLGNBQVEsRUFBRSxrQkFBQXpELENBQUM7QUFBQSxlQUFJd0MsU0FBUyxDQUFDRCxLQUFELEVBQVF2QyxDQUFDLENBQUNkLE1BQUYsQ0FBU0UsS0FBakIsQ0FBYjtBQUFBLE9BRmY7QUFHSSxlQUFTLEVBQUV1RCxPQUFPLENBQUNlLEtBQVIsS0FBa0IsQ0FBbEIsSUFBdUJmLE9BQU8sQ0FBQyxDQUFELENBQVAsS0FBZVIsWUFIckQ7QUFJSSxVQUFJLEVBQUMsS0FKVDtBQUtJLGlCQUFXLEVBQUVBLFlBTGpCO0FBTUksV0FBSyxFQUFFO0FBQUV3QixhQUFLLEVBQUU7QUFBVCxPQU5YO0FBT0ksWUFBTSxlQUNGO0FBQVMsYUFBSyxFQUFDO0FBQWYsc0JBQ0k7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBTXJCLFNBQVMsQ0FBQ0MsS0FBRCxDQUFmO0FBQUEsU0FBakI7QUFBeUMsWUFBSSxFQUFDLE1BQTlDO0FBQXFELFlBQUksZUFBRSwyREFBQyxpRUFBRDtBQUEzRCxRQURKO0FBUlIsTUFESixDQURTO0FBQUEsR0FBWixDQUZMLEVBbUJLSSxPQUFPLENBQUNpQixNQUFSLEtBQW1CLENBQW5CLGlCQUF3QixzRUFuQjdCLGVBb0JJO0FBQ0ksYUFBUyxFQUFDLGNBRGQ7QUFFSSxRQUFJLEVBQUMsUUFGVDtBQUdJLFdBQU8sRUFBRXZCLE1BSGI7QUFJSSxTQUFLLEVBQUU7QUFBRXdCLGFBQU8sRUFBRSxPQUFYO0FBQW9CQyxZQUFNLEVBQUUsT0FBNUI7QUFBcUNDLG9CQUFjLEVBQUU7QUFBckQ7QUFKWCx5QkFwQkosZUE0Qkksc0VBNUJKLGVBOEJJO0FBQ0ksUUFBSSxFQUFDLFNBRFQ7QUFFSSxXQUFPLEVBQUUsaUJBQUEvRCxDQUFDLEVBQUk7QUFDVkEsT0FBQyxDQUFDWCxjQUFGO0FBQ0FvRCxpQkFBVztBQUNkO0FBTEwsaUJBOUJKLEVBdUNLVSxPQUFPLGlCQUNKO0FBQU0sYUFBUyxFQUFDLGNBQWhCO0FBQStCLFNBQUssRUFBRTtBQUFFdEIsZ0JBQVUsRUFBRTtBQUFkO0FBQXRDLG1CQXhDUixDQURKO0FBK0NILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHRDtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1tQyxLQUFLLEdBQUc1RCwrQ0FBRyxDQUFDO0FBQ2RDLFNBQU8sRUFBRTtBQUFBLFdBQU87QUFDWjRELHNCQUFnQixFQUFFLDBCQUFBQyxPQUFPO0FBQUEsZUFBSztBQUFFQSxpQkFBTyxFQUFQQTtBQUFGLFNBQUw7QUFBQSxPQURiO0FBRVpDLGlCQUFXLEVBQUUsSUFGRDtBQUdaQyx3QkFBa0IsRUFBRSxJQUhSO0FBSVpDLGNBQVEsRUFBRSxrQkFBQXhFLEtBQUs7QUFBQSxlQUFLO0FBQUVBLGVBQUssRUFBTEE7QUFBRixTQUFMO0FBQUE7QUFKSCxLQUFQO0FBQUEsR0FESztBQVFkVyxVQUFRLEVBQUU7QUFBQTs7QUFBQSxRQUFHSCxPQUFILFFBQUdBLE9BQUg7QUFBQSxXQUFrQjtBQUN4QmlFLG1CQUFhLEVBQUUsQ0FDWCxVQUFBN0UsS0FBSztBQUFBOztBQUFBLHdDQUFJNEIsb0RBQVMsQ0FBQ3VCLFNBQVYsQ0FBb0IvQixJQUFwQixDQUF5QnBCLEtBQXpCLENBQUosb0ZBQUksc0JBQWlDaUMsSUFBckMsMkRBQUksdUJBQXVDNkMsc0JBQTNDO0FBQUEsT0FETSxtRkFHTmxFLE9BQU8sQ0FBQzRELGdCQUhGLEVBR3FCLFVBQUNPLENBQUQ7QUFBQSxZQUFNTixPQUFOLFNBQU1BLE9BQU47QUFBQSxlQUFvQkEsT0FBcEI7QUFBQSxPQUhyQixFQURTO0FBT3hCTyxjQUFRLEVBQUUsQ0FDTixLQURNLG1HQUdEcEUsT0FBTyxDQUFDOEQsV0FIUCxFQUdxQjtBQUFBLGVBQU0sSUFBTjtBQUFBLE9BSHJCLHVGQUlEOUQsT0FBTyxDQUFDK0Qsa0JBSlAsRUFJNEI7QUFBQSxlQUFNLElBQU47QUFBQSxPQUo1Qix1RkFLRC9ELE9BQU8sQ0FBQ2dFLFFBTFAsRUFLa0I7QUFBQSxlQUFNLEtBQU47QUFBQSxPQUxsQix1RkFNRGhELG9EQUFTLENBQUNoQixPQUFWLENBQWtCK0MsaUJBTmpCLEVBTXFDLFVBQUMzRCxLQUFEO0FBQUEsWUFBVTRELFNBQVYsU0FBVUEsU0FBVjtBQUFBLGVBQ25DQSxTQUFTLEtBQUssT0FBZCxHQUF3QixLQUF4QixHQUFnQzVELEtBREc7QUFBQSxPQU5yQyx1RkFRRDRCLG9EQUFTLENBQUNoQixPQUFWLENBQWtCcUUsaUJBUmpCLEVBUXFDLFVBQUNqRixLQUFEO0FBQUEsWUFBVTRELFNBQVYsU0FBVUEsU0FBVjtBQUFBLGVBQ25DQSxTQUFTLEtBQUssT0FBZCxHQUF3QixLQUF4QixHQUFnQzVELEtBREc7QUFBQSxPQVJyQyxVQVBjO0FBbUJ4QjBELGFBQU8sRUFBRSxDQUNMLEtBREssbUdBR0E5QyxPQUFPLENBQUM4RCxXQUhSLEVBR3NCO0FBQUEsZUFBTSxLQUFOO0FBQUEsT0FIdEIsdUZBSUE5RCxPQUFPLENBQUMrRCxrQkFKUixFQUk2QjtBQUFBLGVBQU0sS0FBTjtBQUFBLE9BSjdCLHVGQUtBL0Msb0RBQVMsQ0FBQ2hCLE9BQVYsQ0FBa0IrQyxpQkFMbEIsRUFLc0MsVUFBQzNELEtBQUQ7QUFBQSxZQUFVNEQsU0FBVixTQUFVQSxTQUFWO0FBQUEsZUFBMkJBLFNBQVMsS0FBSyxPQUFkLEdBQXdCLElBQXhCLEdBQStCNUQsS0FBMUQ7QUFBQSxPQUx0Qyx1RkFNQVksT0FBTyxDQUFDNEQsZ0JBTlIsRUFNMkI7QUFBQSxlQUFNLEtBQU47QUFBQSxPQU4zQixVQW5CZTtBQTRCeEJwRSxXQUFLLEVBQUUsQ0FDSCxJQURHLHFHQUdFUSxPQUFPLENBQUM4RCxXQUhWLEVBR3dCO0FBQUEsZUFBTSxJQUFOO0FBQUEsT0FIeEIsd0ZBSUU5RCxPQUFPLENBQUMrRCxrQkFKVixFQUkrQjtBQUFBLGVBQU0sSUFBTjtBQUFBLE9BSi9CLHdGQUtFL0QsT0FBTyxDQUFDZ0UsUUFMVixFQUtxQixVQUFDRyxDQUFEO0FBQUEsWUFBTTNFLEtBQU4sU0FBTUEsS0FBTjtBQUFBLGVBQWtCQSxLQUFsQjtBQUFBLE9BTHJCLHdGQU1FUSxPQUFPLENBQUM0RCxnQkFOVixFQU02QjtBQUFBLGVBQU0sSUFBTjtBQUFBLE9BTjdCO0FBNUJpQixLQUFsQjtBQUFBLEdBUkk7QUErQ2R2RCxXQUFTLEVBQUU7QUFBQTs7QUFBQSxRQUFHTCxPQUFILFVBQUdBLE9BQUg7QUFBQSxRQUFZTSxNQUFaLFVBQVlBLE1BQVo7QUFBQSw2R0FDTk4sT0FBTyxDQUFDK0Qsa0JBREYsc0tBQ3VCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNsQkUsMkJBRGtCLEdBQ0EzRCxNQURBLENBQ2xCMkQsYUFEa0I7O0FBQUEsbUJBRXRCQSxhQUZzQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEscUJBSUtoRixnREFBRyxDQUFDcUYsTUFBSixDQUFXLDZCQUFYLEVBQTBDO0FBQUVULHVCQUFPLEVBQUVJO0FBQVgsZUFBMUMsQ0FKTDs7QUFBQTtBQUlaTSxzQkFKWTs7QUFNbEIsa0JBQUlBLFFBQVEsQ0FBQ2hGLE9BQWIsRUFBc0I7QUFDbEJTLHVCQUFPLENBQUM4RCxXQUFSLENBQW9CRyxhQUFwQjtBQUNILGVBRkQsTUFFTztBQUNIakUsdUJBQU8sQ0FBQ2dFLFFBQVIsQ0FBaUJPLFFBQVEsQ0FBQy9FLEtBQTFCO0FBQ0g7O0FBVmlCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBWWxCUSxxQkFBTyxDQUFDZ0UsUUFBUixDQUFpQixZQUFNUSxPQUF2Qjs7QUFaa0I7QUFBQTtBQUFBOztBQUFBO0FBZXRCeEUscUJBQU8sQ0FBQzhELFdBQVIsQ0FBb0JHLGFBQXBCOztBQWZzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUR2QiwwRkFtQk5qRSxPQUFPLENBQUM4RCxXQW5CRixzS0FtQmdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkI5QyxrRUFBUyxDQUFDaEIsT0FBVixDQUFrQmlELGlCQUFsQixDQUFvQztBQUFFNUIsb0JBQUksRUFBRTtBQUFFNkMsd0NBQXNCLEVBQUU1RCxNQUFNLENBQUMyRDtBQUFqQztBQUFSLGVBQXBDLEVBQWdHLE9BQWhHOztBQURtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQW5CaEI7QUFBQSxHQS9DRztBQUFBO0FBQUE7QUFBQTtBQUFBLENBQUQsQ0FBakI7QUF3RU8sU0FBU1EsZ0JBQVQsR0FBNEI7QUFDL0IsbUJBQW9EOUQscURBQVMsQ0FBQ2dELEtBQUQsQ0FBN0Q7QUFBQSxNQUFRYixPQUFSLGNBQVFBLE9BQVI7QUFBQSxNQUFpQnNCLFFBQWpCLGNBQWlCQSxRQUFqQjtBQUFBLE1BQTJCNUUsS0FBM0IsY0FBMkJBLEtBQTNCO0FBQUEsTUFBa0N5RSxhQUFsQyxjQUFrQ0EsYUFBbEM7O0FBQ0Esb0JBQWlEckQsc0RBQVUsQ0FBQytDLEtBQUQsQ0FBM0Q7QUFBQSxNQUFRSSxrQkFBUixlQUFRQSxrQkFBUjtBQUFBLE1BQTRCSCxnQkFBNUIsZUFBNEJBLGdCQUE1Qjs7QUFFQSxzQkFDSSxxRkFDSSxnSEFDdUMsR0FEdkMsZUFFSTtBQUFHLFFBQUksRUFBQztBQUFSLHNEQUZKLENBREosZUFPSTtBQUFLLFNBQUssRUFBRTtBQUFFYyxrQkFBWSxFQUFFO0FBQWhCO0FBQVosa0JBQ0k7QUFDSSxTQUFLLEVBQUVULGFBRFg7QUFFSSxRQUFJLEVBQUMsT0FGVDtBQUdJLFlBQVEsRUFBRSxrQkFBQXRFLENBQUM7QUFBQSxhQUFJaUUsZ0JBQWdCLENBQUNqRSxDQUFDLENBQUNkLE1BQUYsQ0FBU0UsS0FBVixDQUFwQjtBQUFBLEtBSGY7QUFJSSxTQUFLLEVBQUU7QUFBRXVFLFdBQUssRUFBRTtBQUFULEtBSlg7QUFLSSxRQUFJLEVBQUM7QUFMVCxJQURKLENBUEosZUFpQkk7QUFDSSxRQUFJLEVBQUMsU0FEVDtBQUVJLFdBQU8sRUFBRSxpQkFBQTNELENBQUMsRUFBSTtBQUNWQSxPQUFDLENBQUNYLGNBQUY7QUFDQStFLHdCQUFrQjtBQUNyQjtBQUxMLEtBT0tLLFFBQVEsR0FBRyxLQUFILEdBQVdILGFBQWEsR0FBRyxhQUFILEdBQW1CLE1BUHhELENBakJKLEVBMkJLekUsS0FBSyxpQkFDRjtBQUFNLGFBQVMsRUFBQyxhQUFoQjtBQUE4QixTQUFLLEVBQUU7QUFBRWdDLGdCQUFVLEVBQUU7QUFBZDtBQUFyQyxnQkFDWWhDLEtBRFosQ0E1QlIsRUFpQ0tzRCxPQUFPLGlCQUNKO0FBQU0sYUFBUyxFQUFDLGNBQWhCO0FBQStCLFNBQUssRUFBRTtBQUFFdEIsZ0JBQVUsRUFBRTtBQUFkO0FBQXRDLEtBQ0t5QyxhQUFhLEdBQUcsOENBQUgsR0FBb0QsNEJBRHRFLENBbENSLENBREo7QUF5Q0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSEQ7QUFDQTtBQUNBO0FBQ0E7QUFHTyxTQUFTVSxzQkFBVCxHQUFrQztBQUNyQyxtQkFBaUJoRSxxREFBUyxDQUFDSyxvREFBRCxDQUExQjtBQUFBLE1BQVFSLElBQVIsY0FBUUEsSUFBUjs7QUFDQSxvQkFBOEJJLHNEQUFVLENBQUNJLG9EQUFELENBQXhDO0FBQUEsTUFBUWlDLGlCQUFSLGVBQVFBLGlCQUFSOztBQUNBLGtCQUEwQmhDLHNEQUFRLENBQUMsS0FBRCxDQUFsQztBQUFBO0FBQUEsTUFBT0MsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBRUEsc0JBQ0kscUZBQ0k7QUFDSSxZQUFRLEVBQUUsa0JBQUFDLE9BQU8sRUFBSTtBQUNqQjZCLHVCQUFpQixDQUFDO0FBQUV6QyxZQUFJLEVBQUU7QUFBRW9FLHNCQUFZLEVBQUUsQ0FBQ3BFLElBQUksQ0FBQ29FO0FBQXRCO0FBQVIsT0FBRCxDQUFqQjtBQUNBekQsY0FBUSxDQUFDLElBQUQsQ0FBUjtBQUNILEtBSkw7QUFLSSxrQkFBYyxFQUFFWCxJQUFJLENBQUNvRTtBQUx6QixJQURKLGVBUUk7QUFDSSxTQUFLLEVBQUU7QUFDSHBELGdCQUFVLEVBQUU7QUFEVDtBQURYLCtGQVJKLEVBZUtOLEtBQUssaUJBQUk7QUFBRyxhQUFTLEVBQUM7QUFBYix5QkFmZCxlQWdCSSxzRUFoQkosZUFpQkksc0VBakJKLENBREo7QUFxQkgsQyIsImZpbGUiOiJzZXR1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQW5jaG9yKGhhc2gpIHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaGFzaCAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoLnN1YnN0cigxKSkpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgaGFzaCBhbmQgaWYgYW4gZWxlbWVudCB3aXRoIHRoYXQgaWQgZXhpc3RzXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoLnN1YnN0cigxKSkuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgfVxuICAgIH0sIFtoYXNoXSkgLy8gRmlyZXMgZXZlcnkgdGltZSBoYXNoIGNoYW5nZXNcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uL2xpYi9hcGknXG5pbXBvcnQgeyBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCdcblxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9sZFBhc3N3b3JkOiAnJyxcbiAgICAgICAgICAgIG5ld1Bhc3N3b3JkOiAnJyxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2F2ZSA9IGFzeW5jIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgYXBpLnVwZGF0ZSgnYXBpL3VzZXIvY2hhbmdlX3Bhc3N3b3JkJywge1xuICAgICAgICAgICAgICAgIG9sZFBhc3N3b3JkOiB0aGlzLnN0YXRlLm9sZFBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIG5ld1Bhc3N3b3JkOiB0aGlzLnN0YXRlLm5ld1Bhc3N3b3JkLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ1Bhc3N3b3JkIGNoYW5nZWQnKVxuICAgICAgICB9IGNhdGNoIChyZXNwb25zZSkge1xuICAgICAgICAgICAgdG9hc3QuZXJyb3IocmVzcG9uc2UuZXJyb3IpXG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBvbGRQYXNzd29yZDogJycsXG4gICAgICAgICAgICAgICAgbmV3UGFzc3dvcmQ6ICcnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsPk9sZCBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPElucHV0LlBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJvbGRQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUub2xkUGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiA0MDAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5OZXcgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmV3UGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5ld1Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogNDAwIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZSgpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBDaGFuZ2UgUGFzc3dvcmRcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsga2VhLCB1c2VBY3Rpb25zLCB1c2VWYWx1ZXMgfSBmcm9tICdrZWEnXG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uL2xpYi9hcGknXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJ1xuXG5jb25zdCBkZWxldGVEZW1vRGF0YUxvZ2ljID0ga2VhKHtcbiAgICBhY3Rpb25zOiAoKSA9PiAoe1xuICAgICAgICBkZWxldGVEZW1vRGF0YTogdHJ1ZSxcbiAgICAgICAgZGVtb0RhdGFEZWxldGVkOiB0cnVlLFxuICAgIH0pLFxuICAgIHJlZHVjZXJzOiAoeyBhY3Rpb25zIH0pID0+ICh7XG4gICAgICAgIGlzRGVsZXRlZDogW1xuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgW2FjdGlvbnMuZGVtb0RhdGFEZWxldGVkXTogKCkgPT4gdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSksXG4gICAgbGlzdGVuZXJzOiAoeyBhY3Rpb25zLCB2YWx1ZXMgfSkgPT4gKHtcbiAgICAgICAgW2FjdGlvbnMuZGVsZXRlRGVtb0RhdGFdOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhcGkuZ2V0KCdkZWxldGVfZGVtb19kYXRhJylcbiAgICAgICAgICAgICAgICBhY3Rpb25zLmRlbW9EYXRhRGVsZXRlZCgpXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSksXG59KVxuY29uc3QgZGVsZXRlQWxsRGF0YUxvZ2ljID0ga2VhKHtcbiAgICBhY3Rpb25zOiAoKSA9PiAoe1xuICAgICAgICBkZWxldGVEZW1vRGF0YTogdHJ1ZSxcbiAgICAgICAgZGVtb0RhdGFEZWxldGVkOiB0cnVlLFxuICAgIH0pLFxuICAgIHJlZHVjZXJzOiAoeyBhY3Rpb25zIH0pID0+ICh7XG4gICAgICAgIGlzRGVsZXRlZDogW1xuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgW2FjdGlvbnMuZGVtb0RhdGFEZWxldGVkXTogKCkgPT4gdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSksXG4gICAgbGlzdGVuZXJzOiAoeyBhY3Rpb25zLCB2YWx1ZXMgfSkgPT4gKHtcbiAgICAgICAgW2FjdGlvbnMuZGVsZXRlRGVtb0RhdGFdOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhcGkuZ2V0KCdkZWxldGVfYWxsX2RhdGEnKVxuICAgICAgICAgICAgICAgIGFjdGlvbnMuZGVtb0RhdGFEZWxldGVkKClcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9KSxcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBEZWxldGVEZW1vRGF0YSgpIHtcbiAgICBjb25zdCB7IGlzRGVsZXRlZCB9ID0gdXNlVmFsdWVzKGRlbGV0ZURlbW9EYXRhTG9naWMpXG4gICAgY29uc3QgeyBkZWxldGVEZW1vRGF0YSB9ID0gdXNlQWN0aW9ucyhkZWxldGVEZW1vRGF0YUxvZ2ljKVxuICAgIGNvbnN0IHsgaXNEZWxldGVkQWxsIH0gPSB1c2VWYWx1ZXMoZGVsZXRlQWxsRGF0YUxvZ2ljKVxuICAgIGNvbnN0IHsgZGVsZXRlQWxsRGF0YSB9ID0gdXNlQWN0aW9ucyhkZWxldGVBbGxEYXRhTG9naWMpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBkYW5nZXIgb25DbGljaz17ZGVsZXRlRGVtb0RhdGF9PlxuICAgICAgICAgICAgICAgIERlbGV0ZSBkZW1vIGRhdGFcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGRhbmdlciBvbkNsaWNrPXtkZWxldGVBbGxEYXRhfT5cbiAgICAgICAgICAgICAgICBEZWxldGUgYWxsIGRhdGFcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAge2lzRGVsZXRlZCAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN1Y2Nlc3NcIj5EZW1vIGRhdGEgZGVsZXRlZCE8L3A+fVxuICAgICAgICAgICAge2lzRGVsZXRlZEFsbCAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN1Y2Nlc3NcIj5BbGwgZGF0YSBkZWxldGVkITwvcD59XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVmFsdWVzIH0gZnJvbSAna2VhJ1xuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9saWIvYXBpJ1xuaW1wb3J0IHsgdXNlckxvZ2ljIH0gZnJvbSAnLi4vdXNlckxvZ2ljJ1xuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSAnYW50ZCdcblxuZXhwb3J0IGZ1bmN0aW9uIE9wdE91dENhcHR1cmUoKSB7XG4gICAgY29uc3QgeyB1c2VyIH0gPSB1c2VWYWx1ZXModXNlckxvZ2ljKVxuICAgIGNvbnN0IFtzYXZlZCwgc2V0U2F2ZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgUG9zdEhvZyB1c2VzIFBvc3RIb2cgKHVuc3VycHJpc2luZ2x5ISkgdG8gY2FwdHVyZSBpbmZvcm1hdGlvbiBhYm91dCBob3cgcGVvcGxlIGFyZSB1c2luZyB0aGUgcHJvZHVjdC4gV2VcbiAgICAgICAgICAgIGJlbGlldmUgdGhhdCBwcm9kdWN0IGFuYWx5dGljcyBhcmUgdGhlIGJlc3Qgd2F5IHRvIG1ha2UgUG9zdEhvZyBtb3JlIHVzZWZ1bCBmb3IgZXZlcnlvbmUuXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgV2UgYWxzbyB1bmRlcnN0YW5kIHRoZXJlIGFyZSBtYW55IHJlYXNvbnMgd2h5IHBlb3BsZSBkb24ndCB3YW50IHRvIG9yIGFyZW4ndCBhbGxvd2VkIHRvIHNlbmQgdGhpcyB1c2FnZVxuICAgICAgICAgICAgZGF0YS4gSnVzdCB0aWNrIHRoZSBib3ggYmVsb3cgdG8gb3B0IG91dCBvZiB0aGlzLlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hlY2tlZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFwaS51cGRhdGUoJ2FwaS91c2VyJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbTogeyBvcHRfb3V0X2NhcHR1cmU6IGNoZWNrZWQgfSxcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiBzZXRTYXZlZCh0cnVlKSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXt1c2VyLnRlYW0ub3B0X291dF9jYXB0dXJlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE9wdC1vdXQgb2Ygc2VuZGluZyB1c2FnZSBkYXRhIHRvIFBvc3RIb2cuXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAge3NhdmVkICYmIChcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgUHJlZmVyZW5jZSBzYXZlZC4gPGEgaHJlZj1cIi9zZXR1cFwiPlJlZnJlc2ggdGhlIHBhZ2UgZm9yIHRoZSBjaGFuZ2UgdG8gdGFrZSBlZmZlY3QuPC9hPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVZhbHVlcyB9IGZyb20gJ2tlYSdcbmltcG9ydCB7IERpdmlkZXIgfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgSlNTbmlwcGV0IH0gZnJvbSAnLi4vLi4vbGliL2NvbXBvbmVudHMvSlNTbmlwcGV0J1xuaW1wb3J0IHsgSW52aXRlVGVhbSB9IGZyb20gJy4uLy4uL2xpYi9jb21wb25lbnRzL0ludml0ZVRlYW0nXG5pbXBvcnQgeyBPcHRPdXRDYXB0dXJlIH0gZnJvbSAnLi9PcHRPdXRDYXB0dXJlJ1xuaW1wb3J0IHsgVXBkYXRlRW1haWxQcmVmZXJlbmNlcyB9IGZyb20gJy4vVXBkYXRlRW1haWxQcmVmZXJlbmNlcydcbmltcG9ydCB7IFNldHVwQXBwVXJscyB9IGZyb20gJy4vU2V0dXBBcHBVcmxzJ1xuXG5pbXBvcnQgeyB1c2VyTG9naWMgfSBmcm9tICcuLi91c2VyTG9naWMnXG5pbXBvcnQgeyBEZWxldGVEZW1vRGF0YSB9IGZyb20gJy4vRGVsZXRlRGVtb0RhdGEnXG5pbXBvcnQgeyBTbGFja0ludGVncmF0aW9uIH0gZnJvbSAnc2NlbmVzL3NldHVwL1NsYWNrSW50ZWdyYXRpb24nXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZCB9IGZyb20gJy4vQ2hhbmdlUGFzc3dvcmQnXG5pbXBvcnQgeyB1c2VBbmNob3IgfSBmcm9tICdsaWIvaG9va3MvdXNlQW5jaG9yJ1xuaW1wb3J0IHsgcm91dGVyIH0gZnJvbSAna2VhLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIFNldHVwKCkge1xuICAgIGNvbnN0IHsgdXNlciB9ID0gdXNlVmFsdWVzKHVzZXJMb2dpYylcbiAgICBjb25zdCB7IGxvY2F0aW9uIH0gPSB1c2VWYWx1ZXMocm91dGVyKVxuXG4gICAgdXNlQW5jaG9yKGxvY2F0aW9uLmhhc2gpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxIGlkPVwidXJsc1wiPlNldHVwIHlvdXIgUG9zdEhvZyBhY2NvdW50PC9oMT5cbiAgICAgICAgICAgIDxTZXR1cEFwcFVybHMgLz5cbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICA8aDIgaWQ9XCJzbmlwcGV0XCI+SW50ZWdyYXRlIFBvc3RIb2c8L2gyPlxuICAgICAgICAgICAgVG8gaW50ZWdyYXRlIFBvc3RIb2csIGNvcHkgKyBwYXN0ZSB0aGUgZm9sbG93aW5nIHNuaXBwZXQgdG8geW91ciB3ZWJzaXRlLiBJZGVhbGx5LCBwdXQgaXQganVzdCBhYm92ZSB0aGV7JyAnfVxuICAgICAgICAgICAgPHByZSBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lJyB9fT4mbHQ7L2hlYWQmZ3Q7PC9wcmU+IHRhZy57JyAnfVxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZG9jcy5wb3N0aG9nLmNvbS8jL2ludGVncmF0aW9ucy9qcy1pbnRlZ3JhdGlvblwiPlxuICAgICAgICAgICAgICAgIFNlZSBkb2NzIGZvciBpbnN0cnVjdGlvbnMgb24gaG93IHRvIGlkZW50aWZ5IHVzZXJzLlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPEpTU25pcHBldCB1c2VyPXt1c2VyfSAvPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZG9jcy5wb3N0aG9nLmNvbS8jL2ludGVncmF0aW9uc1wiPlVzaW5nIFB5dGhvbi9SdWJ5L05vZGUvR28vUEhQIGluc3RlYWQ/PC9hPlxuICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgIDxoMiBpZD1cImFwaWtleVwiPkFQSSBrZXk8L2gyPlxuICAgICAgICAgICAgWW91IGNhbiB1c2UgdGhpcyBhcGkga2V5IGluIGFueSBvZiBvdXJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2RvY3MucG9zdGhvZy5jb20vIy9pbnRlZ3JhdGlvbnNcIj4gbGlicmFyaWVzPC9hPi5cbiAgICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPVwiY29kZVwiPnt1c2VyLnRlYW0uYXBpX3Rva2VufTwvcHJlPlxuICAgICAgICAgICAgVGhpcyBrZXkgaXMgd3JpdGUtb25seSwgaW4gdGhhdCBpdCBjYW4gb25seSBjcmVhdGUgbmV3IGV2ZW50cy4gSXQgY2FuJ3QgcmVhZCBhbnkgZXZlbnRzIG9yIGFueSBvZiB5b3VyIG90aGVyXG4gICAgICAgICAgICBkYXRhIHN0b3JlZCBvbiBQb3N0SG9nLlxuICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgIDxoMiBpZD1cInNsYWNrXCI+U2xhY2sgSW50ZWdyYXRpb248L2gyPlxuICAgICAgICAgICAgPFNsYWNrSW50ZWdyYXRpb24gLz5cbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICA8aDIgaWQ9XCJpbnZpdGVcIj5JbnZpdGUgeW91ciB0ZWFtPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxuICAgICAgICAgICAgICAgICAgICA8SW52aXRlVGVhbSB1c2VyPXt1c2VyfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgPGgyIGlkPVwiZGVtb2RhdGFcIj5EZWxldGUgSG9nRmxpeCBkZW1vIGRhdGE8L2gyPlxuICAgICAgICAgICAgPERlbGV0ZURlbW9EYXRhIC8+XG4gICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgPGgyIGlkPVwicGFzc3dvcmRcIj5DaGFuZ2UgUGFzc3dvcmQ8L2gyPlxuICAgICAgICAgICAgPENoYW5nZVBhc3N3b3JkIC8+XG4gICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgPGgyIGlkPVwib3B0b3V0XCI+T3B0IG91dCBvZiBjYXB0dXJpbmc8L2gyPlxuICAgICAgICAgICAgPE9wdE91dENhcHR1cmUgLz5cbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICA8aDI+U2VjdXJpdHkgYW5kIGZlYXR1cmUgdXBkYXRlczwvaDI+XG4gICAgICAgICAgICA8VXBkYXRlRW1haWxQcmVmZXJlbmNlcyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBrZWEsIHVzZUFjdGlvbnMsIHVzZVZhbHVlcyB9IGZyb20gJ2tlYSdcbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQsIFRvb2x0aXAgfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgUGx1c091dGxpbmVkLCBEZWxldGVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJ1xuXG5pbXBvcnQgeyB1c2VyTG9naWMgfSBmcm9tICcuLi91c2VyTG9naWMnXG5cbmNvbnN0IGRlZmF1bHRWYWx1ZSA9ICdodHRwczovLydcblxuY29uc3QgYXBwVXJsc0xvZ2ljID0ga2VhKHtcbiAgICBhY3Rpb25zOiAoKSA9PiAoe1xuICAgICAgICBhZGRVcmw6IHRydWUsXG4gICAgICAgIHJlbW92ZVVybDogaW5kZXggPT4gKHsgaW5kZXggfSksXG4gICAgICAgIHVwZGF0ZVVybDogKGluZGV4LCB2YWx1ZSkgPT4gKHsgaW5kZXgsIHZhbHVlIH0pLFxuICAgICAgICBzYXZlQXBwVXJsczogdHJ1ZSxcbiAgICB9KSxcblxuICAgIGRlZmF1bHRzOiAoKSA9PiAoe1xuICAgICAgICBhcHBVcmxzOiBzdGF0ZSA9PiB1c2VyTG9naWMuc2VsZWN0b3JzLnVzZXIoc3RhdGUpLnRlYW0uYXBwX3VybHMgfHwgW2RlZmF1bHRWYWx1ZV0sXG4gICAgfSksXG5cbiAgICByZWR1Y2VyczogKHsgYWN0aW9ucyB9KSA9PiAoe1xuICAgICAgICBhcHBVcmxzOiBbXG4gICAgICAgICAgICBbZGVmYXVsdFZhbHVlXSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBbYWN0aW9ucy5hZGRVcmxdOiBzdGF0ZSA9PiBzdGF0ZS5jb25jYXQoW2RlZmF1bHRWYWx1ZV0pLFxuICAgICAgICAgICAgICAgIFthY3Rpb25zLnVwZGF0ZVVybF06IChzdGF0ZSwgeyBpbmRleCwgdmFsdWUgfSkgPT4gT2JqZWN0LmFzc2lnbihbLi4uc3RhdGVdLCB7IFtpbmRleF06IHZhbHVlIH0pLFxuICAgICAgICAgICAgICAgIFthY3Rpb25zLnJlbW92ZVVybF06IChzdGF0ZSwgeyBpbmRleCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0FwcFVybHMgPSBbLi4uc3RhdGVdXG4gICAgICAgICAgICAgICAgICAgIG5ld0FwcFVybHMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3QXBwVXJsc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBpc1NhdmVkOiBbXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBbYWN0aW9ucy5hZGRVcmxdOiAoKSA9PiBmYWxzZSxcbiAgICAgICAgICAgICAgICBbYWN0aW9ucy5yZW1vdmVVcmxdOiAoKSA9PiBmYWxzZSxcbiAgICAgICAgICAgICAgICBbYWN0aW9ucy51cGRhdGVVcmxdOiAoKSA9PiBmYWxzZSxcbiAgICAgICAgICAgICAgICBbdXNlckxvZ2ljLmFjdGlvbnMudXNlclVwZGF0ZVN1Y2Nlc3NdOiAoc3RhdGUsIHsgdXBkYXRlS2V5IH0pID0+IHVwZGF0ZUtleSA9PT0gJ1NldHVwQXBwVXJscycgfHwgc3RhdGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0pLFxuXG4gICAgbGlzdGVuZXJzOiAoeyBhY3Rpb25zLCB2YWx1ZXMgfSkgPT4gKHtcbiAgICAgICAgW2FjdGlvbnMuc2F2ZUFwcFVybHNdOiAoKSA9PiB7XG4gICAgICAgICAgICB1c2VyTG9naWMuYWN0aW9ucy51c2VyVXBkYXRlUmVxdWVzdCh7IHRlYW06IHsgYXBwX3VybHM6IHZhbHVlcy5hcHBVcmxzIH0gfSwgJ1NldHVwQXBwVXJscycpXG4gICAgICAgIH0sXG4gICAgfSksXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gU2V0dXBBcHBVcmxzKCkge1xuICAgIGNvbnN0IHsgYXBwVXJscywgaXNTYXZlZCB9ID0gdXNlVmFsdWVzKGFwcFVybHNMb2dpYylcbiAgICBjb25zdCB7IGFkZFVybCwgcmVtb3ZlVXJsLCB1cGRhdGVVcmwsIHNhdmVBcHBVcmxzIH0gPSB1c2VBY3Rpb25zKGFwcFVybHNMb2dpYylcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWw+V2hhdCBVUkxzIHdpbGwgeW91IGJlIHVzaW5nIFBvc3RIb2cgb24/PC9sYWJlbD5cbiAgICAgICAgICAgIHthcHBVcmxzLm1hcCgodXJsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHVwZGF0ZVVybChpbmRleCwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzPXthcHBVcmxzLmNvdW50ID09PSAxICYmIGFwcFVybHNbMF0gPT09IGRlZmF1bHRWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ1cmxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnNDAwcHgnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWZmaXg9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiRGVsZXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gcmVtb3ZlVXJsKGluZGV4KX0gdHlwZT1cImxpbmtcIiBpY29uPXs8RGVsZXRlT3V0bGluZWQgLz59IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICB7YXBwVXJscy5sZW5ndGggPT09IDAgJiYgPGJyIC8+fVxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGlua1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17YWRkVXJsfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHggMCcsIG1hcmdpbjogJzVweCAwJywgdGV4dERlY29yYXRpb246ICdub25lJyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICsgQWRkIEFub3RoZXIgVVJMXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgc2F2ZUFwcFVybHMoKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU2F2ZSBVUkxzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIHtpc1NhdmVkICYmIChcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXN1Y2Nlc3NcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAxMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgVVJMcyBzYXZlZC5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBrZWEsIHVzZUFjdGlvbnMsIHVzZVZhbHVlcyB9IGZyb20gJ2tlYSdcbmltcG9ydCB7IHVzZXJMb2dpYyB9IGZyb20gJy4uL3VzZXJMb2dpYydcbmltcG9ydCBhcGkgZnJvbSAnbGliL2FwaSdcbmltcG9ydCB7IElucHV0LCBCdXR0b24gfSBmcm9tICdhbnRkJ1xuXG5jb25zdCBsb2dpYyA9IGtlYSh7XG4gICAgYWN0aW9uczogKCkgPT4gKHtcbiAgICAgICAgc2V0RWRpdGVkV2ViaG9vazogd2ViaG9vayA9PiAoeyB3ZWJob29rIH0pLFxuICAgICAgICBzYXZlV2ViaG9vazogdHJ1ZSxcbiAgICAgICAgdGVzdEFuZFNhdmVXZWJob29rOiB0cnVlLFxuICAgICAgICBzZXRFcnJvcjogZXJyb3IgPT4gKHsgZXJyb3IgfSksXG4gICAgfSksXG5cbiAgICByZWR1Y2VyczogKHsgYWN0aW9ucyB9KSA9PiAoe1xuICAgICAgICBlZGl0ZWRXZWJob29rOiBbXG4gICAgICAgICAgICBzdGF0ZSA9PiB1c2VyTG9naWMuc2VsZWN0b3JzLnVzZXIoc3RhdGUpPy50ZWFtPy5zbGFja19pbmNvbWluZ193ZWJob29rLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFthY3Rpb25zLnNldEVkaXRlZFdlYmhvb2tdOiAoXywgeyB3ZWJob29rIH0pID0+IHdlYmhvb2ssXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBpc1NhdmluZzogW1xuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgW2FjdGlvbnMuc2F2ZVdlYmhvb2tdOiAoKSA9PiB0cnVlLFxuICAgICAgICAgICAgICAgIFthY3Rpb25zLnRlc3RBbmRTYXZlV2ViaG9va106ICgpID0+IHRydWUsXG4gICAgICAgICAgICAgICAgW2FjdGlvbnMuc2V0RXJyb3JdOiAoKSA9PiBmYWxzZSxcbiAgICAgICAgICAgICAgICBbdXNlckxvZ2ljLmFjdGlvbnMudXNlclVwZGF0ZVN1Y2Nlc3NdOiAoc3RhdGUsIHsgdXBkYXRlS2V5IH0pID0+XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUtleSA9PT0gJ3NsYWNrJyA/IGZhbHNlIDogc3RhdGUsXG4gICAgICAgICAgICAgICAgW3VzZXJMb2dpYy5hY3Rpb25zLnVzZXJVcGRhdGVGYWlsdXJlXTogKHN0YXRlLCB7IHVwZGF0ZUtleSB9KSA9PlxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVLZXkgPT09ICdzbGFjaycgPyBmYWxzZSA6IHN0YXRlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgaXNTYXZlZDogW1xuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgW2FjdGlvbnMuc2F2ZVdlYmhvb2tdOiAoKSA9PiBmYWxzZSxcbiAgICAgICAgICAgICAgICBbYWN0aW9ucy50ZXN0QW5kU2F2ZVdlYmhvb2tdOiAoKSA9PiBmYWxzZSxcbiAgICAgICAgICAgICAgICBbdXNlckxvZ2ljLmFjdGlvbnMudXNlclVwZGF0ZVN1Y2Nlc3NdOiAoc3RhdGUsIHsgdXBkYXRlS2V5IH0pID0+ICh1cGRhdGVLZXkgPT09ICdzbGFjaycgPyB0cnVlIDogc3RhdGUpLFxuICAgICAgICAgICAgICAgIFthY3Rpb25zLnNldEVkaXRlZFdlYmhvb2tdOiAoKSA9PiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGVycm9yOiBbXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFthY3Rpb25zLnNhdmVXZWJob29rXTogKCkgPT4gbnVsbCxcbiAgICAgICAgICAgICAgICBbYWN0aW9ucy50ZXN0QW5kU2F2ZVdlYmhvb2tdOiAoKSA9PiBudWxsLFxuICAgICAgICAgICAgICAgIFthY3Rpb25zLnNldEVycm9yXTogKF8sIHsgZXJyb3IgfSkgPT4gZXJyb3IsXG4gICAgICAgICAgICAgICAgW2FjdGlvbnMuc2V0RWRpdGVkV2ViaG9va106ICgpID0+IG51bGwsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0pLFxuXG4gICAgbGlzdGVuZXJzOiAoeyBhY3Rpb25zLCB2YWx1ZXMgfSkgPT4gKHtcbiAgICAgICAgW2FjdGlvbnMudGVzdEFuZFNhdmVXZWJob29rXTogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBlZGl0ZWRXZWJob29rIH0gPSB2YWx1ZXNcbiAgICAgICAgICAgIGlmIChlZGl0ZWRXZWJob29rKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuY3JlYXRlKCdhcGkvdXNlci90ZXN0X3NsYWNrX3dlYmhvb2snLCB7IHdlYmhvb2s6IGVkaXRlZFdlYmhvb2sgfSlcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5zYXZlV2ViaG9vayhlZGl0ZWRXZWJob29rKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRFcnJvcihyZXNwb25zZS5lcnJvcilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnMuc2V0RXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFjdGlvbnMuc2F2ZVdlYmhvb2soZWRpdGVkV2ViaG9vaylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW2FjdGlvbnMuc2F2ZVdlYmhvb2tdOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB1c2VyTG9naWMuYWN0aW9ucy51c2VyVXBkYXRlUmVxdWVzdCh7IHRlYW06IHsgc2xhY2tfaW5jb21pbmdfd2ViaG9vazogdmFsdWVzLmVkaXRlZFdlYmhvb2sgfSB9LCAnc2xhY2snKVxuICAgICAgICB9LFxuICAgIH0pLFxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIFNsYWNrSW50ZWdyYXRpb24oKSB7XG4gICAgY29uc3QgeyBpc1NhdmVkLCBpc1NhdmluZywgZXJyb3IsIGVkaXRlZFdlYmhvb2sgfSA9IHVzZVZhbHVlcyhsb2dpYylcbiAgICBjb25zdCB7IHRlc3RBbmRTYXZlV2ViaG9vaywgc2V0RWRpdGVkV2ViaG9vayB9ID0gdXNlQWN0aW9ucyhsb2dpYylcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgRW50ZXIgeW91ciBTbGFjayB3ZWJob29rIFVSTCBoZXJlLnsnICd9XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZG9jcy5wb3N0aG9nLmNvbS8jL2ludGVncmF0aW9ucy9zbGFja1wiPlxuICAgICAgICAgICAgICAgICAgICBSZWFkIHRoZSBkb2NzIHRvIGZpbmQgb3V0IGhvdyB0byBnZXQgdGhpcyBVUkwuXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA1IH19PlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZWRpdGVkV2ViaG9va31cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RWRpdGVkV2ViaG9vayhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiA1MDAgfX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInVybFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgdGVzdEFuZFNhdmVXZWJob29rKClcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpc1NhdmluZyA/ICcuLi4nIDogZWRpdGVkV2ViaG9vayA/ICdUZXN0ICYgU2F2ZScgOiAnU2F2ZSd9XG4gICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAge2Vycm9yICYmIChcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDEwIH19PlxuICAgICAgICAgICAgICAgICAgICBFcnJvcjoge2Vycm9yfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHtpc1NhdmVkICYmIChcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXN1Y2Nlc3NcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAxMCB9fT5cbiAgICAgICAgICAgICAgICAgICAge2VkaXRlZFdlYmhvb2sgPyAnQWxsIGdvb2QhIFlvdSBzaG91bGQgc2VlIGEgbWVzc2FnZSBvbiBTbGFjayEnIDogJ1NsYWNrIGludGVncmF0aW9uIHJlbW92ZWQhJ31cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVZhbHVlcywgdXNlQWN0aW9ucyB9IGZyb20gJ2tlYSdcbmltcG9ydCB7IHVzZXJMb2dpYyB9IGZyb20gJy4uL3VzZXJMb2dpYydcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vbGliL2FwaSdcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gJ2FudGQnXG5cbmV4cG9ydCBmdW5jdGlvbiBVcGRhdGVFbWFpbFByZWZlcmVuY2VzKCkge1xuICAgIGNvbnN0IHsgdXNlciB9ID0gdXNlVmFsdWVzKHVzZXJMb2dpYylcbiAgICBjb25zdCB7IHVzZXJVcGRhdGVSZXF1ZXN0IH0gPSB1c2VBY3Rpb25zKHVzZXJMb2dpYylcbiAgICBjb25zdCBbc2F2ZWQsIHNldFNhdmVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hlY2tlZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJVcGRhdGVSZXF1ZXN0KHsgdXNlcjogeyBlbWFpbF9vcHRfaW46ICF1c2VyLmVtYWlsX29wdF9pbiB9IH0pXG4gICAgICAgICAgICAgICAgICAgIHNldFNhdmVkKHRydWUpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17dXNlci5lbWFpbF9vcHRfaW59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzEwcHgnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUmVjZWl2ZSBzZWN1cml0eSBhbmQgZmVhdHVyZSB1cGRhdGVzIHZpYSBlbWFpbC4gWW91IGNhbiBlYXNpbHkgdW5zdWJzY3JpYmUgYXQgYW55IHRpbWUuXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAge3NhdmVkICYmIDxwIGNsYXNzTmFtZT1cInRleHQtc3VjY2Vzc1wiPlByZWZlcmVuY2Ugc2F2ZWQuPC9wPn1cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=