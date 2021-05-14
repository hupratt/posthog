(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editFunnel~funnel"],{

/***/ "./frontend/src/scenes/funnels/EditFunnel.js":
/*!***************************************************!*\
  !*** ./frontend/src/scenes/funnels/EditFunnel.js ***!
  \***************************************************/
/*! exports provided: EditFunnel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFunnel", function() { return EditFunnel; });
/* harmony import */ var antd_es_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/button/style/css */ "./node_modules/antd/es/button/style/css.js");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/button */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/utils */ "./frontend/src/lib/utils.js");
/* harmony import */ var lib_components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/components/Link */ "./frontend/src/lib/components/Link.js");
/* harmony import */ var _models_actionsModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/models/actionsModel */ "./frontend/src/models/actionsModel.js");
/* harmony import */ var kea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! kea */ "./node_modules/kea/lib/index.esm.js");
/* harmony import */ var _funnelLogic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./funnelLogic */ "./frontend/src/scenes/funnels/funnelLogic.js");
/* harmony import */ var scenes_trends_ActionFilter_ActionFilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! scenes/trends/ActionFilter/ActionFilter */ "./frontend/src/scenes/trends/ActionFilter/ActionFilter.js");
/* harmony import */ var lib_components_PropertyFilters_PropertyFilters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/components/PropertyFilters/PropertyFilters */ "./frontend/src/lib/components/PropertyFilters/PropertyFilters.js");
/* harmony import */ var scenes_userLogic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! scenes/userLogic */ "./frontend/src/scenes/userLogic.js");











function EditFunnel(_ref) {
  var funnelId = _ref.funnelId;

  var _useValues = Object(kea__WEBPACK_IMPORTED_MODULE_6__["useValues"])(Object(_funnelLogic__WEBPACK_IMPORTED_MODULE_7__["funnelLogic"])({
    id: funnelId
  })),
      funnel = _useValues.funnel,
      isStepsEmpty = _useValues.isStepsEmpty;

  var _useActions = Object(kea__WEBPACK_IMPORTED_MODULE_6__["useActions"])(Object(_funnelLogic__WEBPACK_IMPORTED_MODULE_7__["funnelLogic"])({
    id: funnelId
  })),
      setFunnel = _useActions.setFunnel,
      updateFunnel = _useActions.updateFunnel,
      createFunnel = _useActions.createFunnel;

  var _useValues2 = Object(kea__WEBPACK_IMPORTED_MODULE_6__["useValues"])(Object(_models_actionsModel__WEBPACK_IMPORTED_MODULE_5__["actionsModel"])()),
      actions = _useValues2.actions,
      actionsLoading = _useValues2.actionsLoading;

  var _useValues3 = Object(kea__WEBPACK_IMPORTED_MODULE_6__["useValues"])(scenes_userLogic__WEBPACK_IMPORTED_MODULE_10__["userLogic"]),
      eventProperties = _useValues3.eventProperties;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();

      if (!funnel.id) {
        createFunnel(funnel);
      } else {
        updateFunnel(funnel);
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(lib_utils__WEBPACK_IMPORTED_MODULE_3__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    required: true,
    placeholder: "User drop off through signup",
    type: "text",
    autoFocus: true,
    onChange: function onChange(e) {
      return setFunnel({
        name: e.target.value
      });
    },
    value: funnel.name || '',
    className: "form-control"
  }), !actionsLoading && actions.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "alert alert-warning",
    style: {
      marginTop: '1rem'
    }
  }, "You don't have any actions set up. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(lib_components_Link__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/actions"
  }, "Click here to set up an action")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(scenes_trends_ActionFilter_ActionFilter__WEBPACK_IMPORTED_MODULE_8__["ActionFilter"], {
    filters: funnel.filters,
    setFilters: function setFilters(filters) {
      return setFunnel({
        filters: filters
      }, false);
    },
    typeKey: "EditFunnel-".concat(funnel.id || 'new')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
    className: "secondary mt-3"
  }, "Filters"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(lib_components_PropertyFilters_PropertyFilters__WEBPACK_IMPORTED_MODULE_9__["PropertyFilters"], {
    pageKey: "EditFunnel-".concat(funnel.id || 'new'),
    properties: eventProperties,
    propertyFilters: funnel.filters.properties || [],
    onChange: function onChange(properties) {
      return setFunnel({
        filters: {
          properties: properties
        }
      });
    },
    style: {
      marginBottom: 0
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "primary mt-3",
    htmlType: "submit",
    disabled: isStepsEmpty
  }, "Save funnel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), isStepsEmpty && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", null, "Add some actions/events to save the funnel"))));
}

/***/ }),

/***/ "./frontend/src/scenes/funnels/funnelLogic.js":
/*!****************************************************!*\
  !*** ./frontend/src/scenes/funnels/funnelLogic.js ***!
  \****************************************************/
/*! exports provided: funnelLogic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "funnelLogic", function() { return funnelLogic; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var kea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! kea */ "./node_modules/kea/lib/index.esm.js");
/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/api */ "./frontend/src/lib/api.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var funnelLogic = Object(kea__WEBPACK_IMPORTED_MODULE_4__["kea"])({
  key: function key(props) {
    return props.id || 'new';
  },
  actions: function actions() {
    return {
      setFunnel: function setFunnel(funnel, update) {
        return {
          funnel: funnel,
          update: update
        };
      }
    };
  },
  loaders: function loaders(_ref) {
    var props = _ref.props;
    return {
      funnel: [{
        filters: {}
      }, {
        loadFunnel: function () {
          var _loadFunnel = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
            var id,
                _args = arguments;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    id = _args.length > 0 && _args[0] !== undefined ? _args[0] : props.id;
                    _context.next = 3;
                    return lib_api__WEBPACK_IMPORTED_MODULE_5__["default"].get('api/funnel/' + id + '/?exclude_count=1');

                  case 3:
                    return _context.abrupt("return", _context.sent);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function loadFunnel() {
            return _loadFunnel.apply(this, arguments);
          }

          return loadFunnel;
        }(),
        updateFunnel: function () {
          var _updateFunnel = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(funnel) {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return lib_api__WEBPACK_IMPORTED_MODULE_5__["default"].update('api/funnel/' + funnel.id, funnel);

                  case 2:
                    return _context2.abrupt("return", _context2.sent);

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          function updateFunnel(_x) {
            return _updateFunnel.apply(this, arguments);
          }

          return updateFunnel;
        }(),
        createFunnel: function () {
          var _createFunnel = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3(funnel) {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return lib_api__WEBPACK_IMPORTED_MODULE_5__["default"].create('api/funnel', funnel);

                  case 2:
                    return _context3.abrupt("return", _context3.sent);

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          function createFunnel(_x2) {
            return _createFunnel.apply(this, arguments);
          }

          return createFunnel;
        }()
      }],
      stepsWithCount: {
        loadStepsWithCount: function () {
          var _loadStepsWithCount = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee4() {
            var id,
                _args4 = arguments;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    id = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : props.id;
                    _context4.next = 3;
                    return lib_api__WEBPACK_IMPORTED_MODULE_5__["default"].get('api/funnel/' + id);

                  case 3:
                    return _context4.abrupt("return", _context4.sent.steps);

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          function loadStepsWithCount() {
            return _loadStepsWithCount.apply(this, arguments);
          }

          return loadStepsWithCount;
        }()
      },
      people: {
        loadPeople: function () {
          var _loadPeople = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee5(steps) {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return lib_api__WEBPACK_IMPORTED_MODULE_5__["default"].get('api/person/?id=' + steps[0].people.join(','));

                  case 2:
                    return _context5.abrupt("return", _context5.sent.results);

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }));

          function loadPeople(_x3) {
            return _loadPeople.apply(this, arguments);
          }

          return loadPeople;
        }()
      }
    };
  },
  reducers: function reducers() {
    return {
      funnel: {
        setFunnel: function setFunnel(state, _ref2) {
          var funnel = _ref2.funnel;
          return _objectSpread(_objectSpread(_objectSpread({}, state), funnel), {}, {
            filters: _objectSpread(_objectSpread({}, state.filters), funnel.filters)
          });
        }
      }
    };
  },
  selectors: function selectors(_ref3) {
    var _selectors = _ref3.selectors;
    return {
      peopleSorted: [function () {
        return [_selectors.stepsWithCount, _selectors.people];
      }, function (steps, people) {
        if (!people) return null;

        var score = function score(person) {
          return steps.reduce(function (val, step) {
            return step.people.indexOf(person.id) > -1 ? val + 1 : val;
          }, 0);
        };

        return people.sort(function (a, b) {
          return score(b) - score(a);
        });
      }],
      isStepsEmpty: [function () {
        return [_selectors.funnel];
      }, function (funnel) {
        return funnel && [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(funnel.filters.actions || []), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(funnel.filters.events || [])).length === 0;
      }]
    };
  },
  listeners: function listeners(_ref4) {
    var actions = _ref4.actions,
        values = _ref4.values;
    return {
      loadStepsWithCountSuccess: function () {
        var _loadStepsWithCountSuccess = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee6() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  actions.loadPeople(values.stepsWithCount);

                case 1:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        function loadStepsWithCountSuccess() {
          return _loadStepsWithCountSuccess.apply(this, arguments);
        }

        return loadStepsWithCountSuccess;
      }(),
      setFunnel: function setFunnel(_ref5) {
        var update = _ref5.update;
        if (update) actions.updateFunnel(values.funnel);
      },
      updateFunnelSuccess: function () {
        var _updateFunnelSuccess = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee7(_ref6) {
          var funnel;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  funnel = _ref6.funnel;
                  actions.loadStepsWithCount(funnel.id);
                  Object(react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"])('Funnel saved!');

                case 3:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        function updateFunnelSuccess(_x4) {
          return _updateFunnelSuccess.apply(this, arguments);
        }

        return updateFunnelSuccess;
      }(),
      createFunnelSuccess: function createFunnelSuccess(_ref7) {
        var funnel = _ref7.funnel;
        actions.loadStepsWithCount(funnel.id);
        Object(react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"])('Funnel saved!');
      }
    };
  },
  actionToUrl: function actionToUrl() {
    return {
      createFunnelSuccess: function createFunnelSuccess(_ref8) {
        var funnel = _ref8.funnel;
        return "/funnel/".concat(funnel.id);
      }
    };
  },
  events: function events(_ref9) {
    var actions = _ref9.actions,
        key = _ref9.key;
    return {
      afterMount: function afterMount() {
        if (key === 'new') {
          return;
        }

        actions.loadFunnel();
        actions.loadStepsWithCount();
      }
    };
  },
  path: function path(key) {
    return ["scenes", "funnels", "funnelLogic", key];
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvc2NlbmVzL2Z1bm5lbHMvRWRpdEZ1bm5lbC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvc2NlbmVzL2Z1bm5lbHMvZnVubmVsTG9naWMuanMiXSwibmFtZXMiOlsiRWRpdEZ1bm5lbCIsImZ1bm5lbElkIiwidXNlVmFsdWVzIiwiZnVubmVsTG9naWMiLCJpZCIsImZ1bm5lbCIsImlzU3RlcHNFbXB0eSIsInVzZUFjdGlvbnMiLCJzZXRGdW5uZWwiLCJ1cGRhdGVGdW5uZWwiLCJjcmVhdGVGdW5uZWwiLCJhY3Rpb25zTW9kZWwiLCJhY3Rpb25zIiwiYWN0aW9uc0xvYWRpbmciLCJ1c2VyTG9naWMiLCJldmVudFByb3BlcnRpZXMiLCJlIiwicHJldmVudERlZmF1bHQiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiLCJtYXJnaW5Ub3AiLCJmaWx0ZXJzIiwicHJvcGVydGllcyIsIm1hcmdpbkJvdHRvbSIsImtlYSIsImtleSIsInByb3BzIiwidXBkYXRlIiwibG9hZGVycyIsImxvYWRGdW5uZWwiLCJhcGkiLCJnZXQiLCJjcmVhdGUiLCJzdGVwc1dpdGhDb3VudCIsImxvYWRTdGVwc1dpdGhDb3VudCIsInN0ZXBzIiwicGVvcGxlIiwibG9hZFBlb3BsZSIsImpvaW4iLCJyZXN1bHRzIiwicmVkdWNlcnMiLCJzdGF0ZSIsInNlbGVjdG9ycyIsInBlb3BsZVNvcnRlZCIsInNjb3JlIiwicGVyc29uIiwicmVkdWNlIiwidmFsIiwic3RlcCIsImluZGV4T2YiLCJzb3J0IiwiYSIsImIiLCJldmVudHMiLCJsaXN0ZW5lcnMiLCJ2YWx1ZXMiLCJsb2FkU3RlcHNXaXRoQ291bnRTdWNjZXNzIiwidXBkYXRlRnVubmVsU3VjY2VzcyIsInRvYXN0IiwiY3JlYXRlRnVubmVsU3VjY2VzcyIsImFjdGlvblRvVXJsIiwiYWZ0ZXJNb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QTs7QUFBQTtBQUFBLFNBUGM7QUFXakNDLHlCQUFtQixFQUFFLG9DQUFnQjtBQUFBLFlBQWJ4RCxNQUFhLFNBQWJBLE1BQWE7QUFDakNPLGVBQU8sQ0FBQ3dCLGtCQUFSLENBQTJCL0IsTUFBTSxDQUFDRCxFQUFsQztBQUNBd0Qsb0VBQUssQ0FBQyxlQUFELENBQUw7QUFDSDtBQWRnQyxLQUExQjtBQUFBLEdBL0RnQjtBQWdGM0JFLGFBQVcsRUFBRTtBQUFBLFdBQU87QUFDaEJELHlCQUFtQixFQUFFO0FBQUEsWUFBR3hELE1BQUgsU0FBR0EsTUFBSDtBQUFBLGlDQUEyQkEsTUFBTSxDQUFDRCxFQUFsQztBQUFBO0FBREwsS0FBUDtBQUFBLEdBaEZjO0FBb0YzQm1ELFFBQU0sRUFBRTtBQUFBLFFBQUczQyxPQUFILFNBQUdBLE9BQUg7QUFBQSxRQUFZZSxHQUFaLFNBQVlBLEdBQVo7QUFBQSxXQUF1QjtBQUMzQm9DLGdCQUFVLEVBQUUsc0JBQU07QUFDZCxZQUFJcEMsR0FBRyxLQUFLLEtBQVosRUFBbUI7QUFDZjtBQUNIOztBQUNEZixlQUFPLENBQUNtQixVQUFSO0FBQ0FuQixlQUFPLENBQUN3QixrQkFBUjtBQUNIO0FBUDBCLEtBQXZCO0FBQUEsR0FwRm1CO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBRCxDQUF2QixDIiwiZmlsZSI6ImVkaXRGdW5uZWx+ZnVubmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ2xpYi91dGlscydcbmltcG9ydCB7IExpbmsgfSBmcm9tICdsaWIvY29tcG9uZW50cy9MaW5rJ1xuaW1wb3J0IHsgYWN0aW9uc01vZGVsIH0gZnJvbSAnfi9tb2RlbHMvYWN0aW9uc01vZGVsJ1xuaW1wb3J0IHsgdXNlVmFsdWVzLCB1c2VBY3Rpb25zIH0gZnJvbSAna2VhJ1xuaW1wb3J0IHsgZnVubmVsTG9naWMgfSBmcm9tICcuL2Z1bm5lbExvZ2ljJ1xuaW1wb3J0IHsgQWN0aW9uRmlsdGVyIH0gZnJvbSAnc2NlbmVzL3RyZW5kcy9BY3Rpb25GaWx0ZXIvQWN0aW9uRmlsdGVyJ1xuaW1wb3J0IHsgUHJvcGVydHlGaWx0ZXJzIH0gZnJvbSAnbGliL2NvbXBvbmVudHMvUHJvcGVydHlGaWx0ZXJzL1Byb3BlcnR5RmlsdGVycydcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnXG5pbXBvcnQgeyB1c2VyTG9naWMgfSBmcm9tICdzY2VuZXMvdXNlckxvZ2ljJ1xuXG5leHBvcnQgZnVuY3Rpb24gRWRpdEZ1bm5lbCh7IGZ1bm5lbElkIH0pIHtcbiAgICBjb25zdCB7IGZ1bm5lbCwgaXNTdGVwc0VtcHR5IH0gPSB1c2VWYWx1ZXMoZnVubmVsTG9naWMoeyBpZDogZnVubmVsSWQgfSkpXG4gICAgY29uc3QgeyBzZXRGdW5uZWwsIHVwZGF0ZUZ1bm5lbCwgY3JlYXRlRnVubmVsIH0gPSB1c2VBY3Rpb25zKGZ1bm5lbExvZ2ljKHsgaWQ6IGZ1bm5lbElkIH0pKVxuICAgIGNvbnN0IHsgYWN0aW9ucywgYWN0aW9uc0xvYWRpbmcgfSA9IHVzZVZhbHVlcyhhY3Rpb25zTW9kZWwoKSlcbiAgICBjb25zdCB7IGV2ZW50UHJvcGVydGllcyB9ID0gdXNlVmFsdWVzKHVzZXJMb2dpYylcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtXG4gICAgICAgICAgICBvblN1Ym1pdD17ZSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgaWYgKCFmdW5uZWwuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlRnVubmVsKGZ1bm5lbClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVGdW5uZWwoZnVubmVsKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlciBkcm9wIG9mZiB0aHJvdWdoIHNpZ251cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEZ1bm5lbCh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Z1bm5lbC5uYW1lIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgeyFhY3Rpb25zTG9hZGluZyAmJiBhY3Rpb25zLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIiBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxcmVtJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3UgZG9uJ3QgaGF2ZSBhbnkgYWN0aW9ucyBzZXQgdXAuIDxMaW5rIHRvPVwiL2FjdGlvbnNcIj5DbGljayBoZXJlIHRvIHNldCB1cCBhbiBhY3Rpb248L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxBY3Rpb25GaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnM9e2Z1bm5lbC5maWx0ZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RmlsdGVycz17ZmlsdGVycyA9PiBzZXRGdW5uZWwoeyBmaWx0ZXJzIH0sIGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVLZXk9e2BFZGl0RnVubmVsLSR7ZnVubmVsLmlkIHx8ICduZXcnfWB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInNlY29uZGFyeSBtdC0zXCI+RmlsdGVyczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxQcm9wZXJ0eUZpbHRlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VLZXk9e2BFZGl0RnVubmVsLSR7ZnVubmVsLmlkIHx8ICduZXcnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzPXtldmVudFByb3BlcnRpZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eUZpbHRlcnM9e2Z1bm5lbC5maWx0ZXJzLnByb3BlcnRpZXMgfHwgW119XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcGVydGllcyA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZ1bm5lbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMCB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeSBtdC0zXCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17aXNTdGVwc0VtcHR5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNhdmUgZnVubmVsXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAge2lzU3RlcHNFbXB0eSAmJiA8c21hbGw+QWRkIHNvbWUgYWN0aW9ucy9ldmVudHMgdG8gc2F2ZSB0aGUgZnVubmVsPC9zbWFsbD59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvZm9ybT5cbiAgICApXG59XG4iLCJpbXBvcnQgeyBrZWEgfSBmcm9tICdrZWEnXG5pbXBvcnQgYXBpIGZyb20gJ2xpYi9hcGknXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuXG5leHBvcnQgY29uc3QgZnVubmVsTG9naWMgPSBrZWEoe1xuICAgIGtleTogcHJvcHMgPT4gcHJvcHMuaWQgfHwgJ25ldycsXG5cbiAgICBhY3Rpb25zOiAoKSA9PiAoe1xuICAgICAgICBzZXRGdW5uZWw6IChmdW5uZWwsIHVwZGF0ZSkgPT4gKHsgZnVubmVsLCB1cGRhdGUgfSksXG4gICAgfSksXG5cbiAgICBsb2FkZXJzOiAoeyBwcm9wcyB9KSA9PiAoe1xuICAgICAgICBmdW5uZWw6IFtcbiAgICAgICAgICAgIHsgZmlsdGVyczoge30gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsb2FkRnVubmVsOiBhc3luYyAoaWQgPSBwcm9wcy5pZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgYXBpLmdldCgnYXBpL2Z1bm5lbC8nICsgaWQgKyAnLz9leGNsdWRlX2NvdW50PTEnKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlRnVubmVsOiBhc3luYyBmdW5uZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgYXBpLnVwZGF0ZSgnYXBpL2Z1bm5lbC8nICsgZnVubmVsLmlkLCBmdW5uZWwpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjcmVhdGVGdW5uZWw6IGFzeW5jIGZ1bm5lbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBhcGkuY3JlYXRlKCdhcGkvZnVubmVsJywgZnVubmVsKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBzdGVwc1dpdGhDb3VudDoge1xuICAgICAgICAgICAgbG9hZFN0ZXBzV2l0aENvdW50OiBhc3luYyAoaWQgPSBwcm9wcy5pZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoYXdhaXQgYXBpLmdldCgnYXBpL2Z1bm5lbC8nICsgaWQpKS5zdGVwc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcGVvcGxlOiB7XG4gICAgICAgICAgICBsb2FkUGVvcGxlOiBhc3luYyBzdGVwcyA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChhd2FpdCBhcGkuZ2V0KCdhcGkvcGVyc29uLz9pZD0nICsgc3RlcHNbMF0ucGVvcGxlLmpvaW4oJywnKSkpLnJlc3VsdHNcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSksXG5cbiAgICByZWR1Y2VyczogKCkgPT4gKHtcbiAgICAgICAgZnVubmVsOiB7XG4gICAgICAgICAgICBzZXRGdW5uZWw6IChzdGF0ZSwgeyBmdW5uZWwgfSkgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAuLi5mdW5uZWwsXG4gICAgICAgICAgICAgICAgZmlsdGVyczogeyAuLi5zdGF0ZS5maWx0ZXJzLCAuLi5mdW5uZWwuZmlsdGVycyB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0sXG4gICAgfSksXG5cbiAgICBzZWxlY3RvcnM6ICh7IHNlbGVjdG9ycyB9KSA9PiAoe1xuICAgICAgICBwZW9wbGVTb3J0ZWQ6IFtcbiAgICAgICAgICAgICgpID0+IFtzZWxlY3RvcnMuc3RlcHNXaXRoQ291bnQsIHNlbGVjdG9ycy5wZW9wbGVdLFxuICAgICAgICAgICAgKHN0ZXBzLCBwZW9wbGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXBlb3BsZSkgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICBjb25zdCBzY29yZSA9IHBlcnNvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGVwcy5yZWR1Y2UoKHZhbCwgc3RlcCkgPT4gKHN0ZXAucGVvcGxlLmluZGV4T2YocGVyc29uLmlkKSA+IC0xID8gdmFsICsgMSA6IHZhbCksIDApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwZW9wbGUuc29ydCgoYSwgYikgPT4gc2NvcmUoYikgLSBzY29yZShhKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGlzU3RlcHNFbXB0eTogW1xuICAgICAgICAgICAgKCkgPT4gW3NlbGVjdG9ycy5mdW5uZWxdLFxuICAgICAgICAgICAgZnVubmVsID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVubmVsICYmIFsuLi4oZnVubmVsLmZpbHRlcnMuYWN0aW9ucyB8fCBbXSksIC4uLihmdW5uZWwuZmlsdGVycy5ldmVudHMgfHwgW10pXS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSksXG5cbiAgICBsaXN0ZW5lcnM6ICh7IGFjdGlvbnMsIHZhbHVlcyB9KSA9PiAoe1xuICAgICAgICBsb2FkU3RlcHNXaXRoQ291bnRTdWNjZXNzOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBhY3Rpb25zLmxvYWRQZW9wbGUodmFsdWVzLnN0ZXBzV2l0aENvdW50KVxuICAgICAgICB9LFxuICAgICAgICBzZXRGdW5uZWw6ICh7IHVwZGF0ZSB9KSA9PiB7XG4gICAgICAgICAgICBpZiAodXBkYXRlKSBhY3Rpb25zLnVwZGF0ZUZ1bm5lbCh2YWx1ZXMuZnVubmVsKVxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVGdW5uZWxTdWNjZXNzOiBhc3luYyAoeyBmdW5uZWwgfSkgPT4ge1xuICAgICAgICAgICAgYWN0aW9ucy5sb2FkU3RlcHNXaXRoQ291bnQoZnVubmVsLmlkKVxuICAgICAgICAgICAgdG9hc3QoJ0Z1bm5lbCBzYXZlZCEnKVxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVGdW5uZWxTdWNjZXNzOiAoeyBmdW5uZWwgfSkgPT4ge1xuICAgICAgICAgICAgYWN0aW9ucy5sb2FkU3RlcHNXaXRoQ291bnQoZnVubmVsLmlkKVxuICAgICAgICAgICAgdG9hc3QoJ0Z1bm5lbCBzYXZlZCEnKVxuICAgICAgICB9LFxuICAgIH0pLFxuXG4gICAgYWN0aW9uVG9Vcmw6ICgpID0+ICh7XG4gICAgICAgIGNyZWF0ZUZ1bm5lbFN1Y2Nlc3M6ICh7IGZ1bm5lbCB9KSA9PiBgL2Z1bm5lbC8ke2Z1bm5lbC5pZH1gLFxuICAgIH0pLFxuXG4gICAgZXZlbnRzOiAoeyBhY3Rpb25zLCBrZXkgfSkgPT4gKHtcbiAgICAgICAgYWZ0ZXJNb3VudDogKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ25ldycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjdGlvbnMubG9hZEZ1bm5lbCgpXG4gICAgICAgICAgICBhY3Rpb25zLmxvYWRTdGVwc1dpdGhDb3VudCgpXG4gICAgICAgIH0sXG4gICAgfSksXG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==