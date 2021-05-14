(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard~editFunnel~funnel~trends"],{

/***/ "./frontend/src/models/actionsModel.js":
/*!*********************************************!*\
  !*** ./frontend/src/models/actionsModel.js ***!
  \*********************************************/
/*! exports provided: actionsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionsModel", function() { return actionsModel; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var kea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kea */ "./node_modules/kea/lib/index.esm.js");
/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/api */ "./frontend/src/lib/api.js");





var actionContains = function actionContains(action, event) {
  return action.steps.filter(function (step) {
    return step.event == event;
  }).length > 0;
};

var actionsModel = Object(kea__WEBPACK_IMPORTED_MODULE_2__["kea"])({
  loaders: function loaders() {
    return {
      actions: {
        __default: [],
        loadActions: function () {
          var _loadActions = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
            var response;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return lib_api__WEBPACK_IMPORTED_MODULE_3__["default"].get('api/action');

                  case 2:
                    response = _context.sent;
                    return _context.abrupt("return", response.results);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function loadActions() {
            return _loadActions.apply(this, arguments);
          }

          return loadActions;
        }()
      }
    };
  },
  selectors: function selectors(_ref) {
    var _selectors = _ref.selectors;
    return {
      actionsGrouped: [function () {
        return [_selectors.actions];
      }, function (actions) {
        var data = [{
          label: 'Autocapture',
          options: []
        }, {
          label: 'Event',
          options: []
        }, {
          label: 'Pageview',
          options: []
        }];
        actions.forEach(function (action) {
          var format = {
            label: action.name,
            value: action.id
          };
          if (actionContains(action, '$autocapture')) data[0].options.push(format);
          if (actionContains(action, '$pageview')) data[2].options.push(format);
          if (!actionContains(action, '$autocapture') && !actionContains(action, '$pageview')) data[1].options.push(format);
        });
        return data;
      }]
    };
  },
  events: function events(_ref2) {
    var actions = _ref2.actions;
    return {
      afterMount: actions.loadActions
    };
  },
  path: function path() {
    return ["models", "actionsModel"];
  }
});

/***/ }),

/***/ "./frontend/src/scenes/trends/trendsLogic.js":
/*!***************************************************!*\
  !*** ./frontend/src/scenes/trends/trendsLogic.js ***!
  \***************************************************/
/*! exports provided: EntityTypes, disableMinuteFor, disableHourFor, ViewType, trendsLogic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityTypes", function() { return EntityTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableMinuteFor", function() { return disableMinuteFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableHourFor", function() { return disableHourFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewType", function() { return ViewType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trendsLogic", function() { return trendsLogic; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var kea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! kea */ "./node_modules/kea/lib/index.esm.js");
/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/api */ "./frontend/src/lib/api.js");
/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/utils */ "./frontend/src/lib/utils.js");
/* harmony import */ var _models_actionsModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/models/actionsModel */ "./frontend/src/models/actionsModel.js");
/* harmony import */ var scenes_userLogic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! scenes/userLogic */ "./frontend/src/scenes/userLogic.js");
/* harmony import */ var kea_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! kea-router */ "./node_modules/kea-router/lib/index.js");
/* harmony import */ var kea_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(kea_router__WEBPACK_IMPORTED_MODULE_9__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var EntityTypes = {
  ACTIONS: 'actions',
  EVENTS: 'events',
  NEW_ENTITY: 'new_entity'
};
var disableMinuteFor = {
  dStart: false,
  '-1d': false,
  '-7d': true,
  '-14d': true,
  '-30d': true,
  '-90d': true,
  mStart: true,
  '-1mStart': true,
  yStart: true,
  all: true
};
var disableHourFor = {
  dStart: false,
  '-1d': false,
  '-7d': false,
  '-14d': false,
  '-30d': false,
  '-90d': true,
  mStart: false,
  '-1mStart': false,
  yStart: true,
  all: true
};
var ViewType = {
  FILTERS: 'FILTERS',
  SESSIONS: 'SESSIONS'
};

function cleanFilters(filters) {
  return _objectSpread(_objectSpread({}, filters), {}, {
    interval: autocorrectInterval(filters),
    display: filters.session && filters.session === 'dist' ? 'ActionsTable' : filters.display,
    actions: Array.isArray(filters.actions) ? filters.actions : undefined,
    events: Array.isArray(filters.events) ? filters.events : undefined,
    properties: filters.properties || {}
  });
}

function filterClientSideParams(filters) {
  var _skip_this_one = filters.people_day,
      _skip_this_too = filters.people_action,
      __and_this = filters.stickiness_days,
      newFilters = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(filters, ["people_day", "people_action", "stickiness_days"]);

  return newFilters;
}

function autocorrectInterval(_ref) {
  var date_from = _ref.date_from,
      interval = _ref.interval;
  if (!interval) return 'day'; // undefined/uninitialized

  var minute_disabled = disableMinuteFor[date_from] && interval === 'minute';
  var hour_disabled = disableHourFor[date_from] && interval === 'hour';

  if (minute_disabled) {
    return 'hour';
  } else if (hour_disabled) {
    return 'day';
  } else {
    return interval;
  }
} // props:
// - dashboardItemId
// - filters


var trendsLogic = Object(kea__WEBPACK_IMPORTED_MODULE_4__["kea"])({
  key: function key(props) {
    return props.dashboardItemId || 'all_trends';
  },
  connect: {
    values: [scenes_userLogic__WEBPACK_IMPORTED_MODULE_8__["userLogic"], ['eventNames'], _models_actionsModel__WEBPACK_IMPORTED_MODULE_7__["actionsModel"], ['actions']]
  },
  loaders: function loaders(_ref2) {
    var values = _ref2.values;
    return {
      results: {
        loadResults: function () {
          var _loadResults = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(values.activeView === ViewType.SESSIONS)) {
                      _context.next = 4;
                      break;
                    }

                    _context.next = 3;
                    return lib_api__WEBPACK_IMPORTED_MODULE_5__["default"].get('api/event/sessions/?' + Object(lib_utils__WEBPACK_IMPORTED_MODULE_6__["toParams"])(filterClientSideParams(values.filters)));

                  case 3:
                    return _context.abrupt("return", _context.sent);

                  case 4:
                    _context.next = 6;
                    return lib_api__WEBPACK_IMPORTED_MODULE_5__["default"].get('api/action/trends/?' + Object(lib_utils__WEBPACK_IMPORTED_MODULE_6__["toParams"])(filterClientSideParams(values.filters)));

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function loadResults() {
            return _loadResults.apply(this, arguments);
          }

          return loadResults;
        }()
      }
    };
  },
  actions: function actions() {
    return {
      setFilters: function setFilters(filters) {
        var mergeFilters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var fromUrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        return {
          filters: filters,
          mergeFilters: mergeFilters,
          fromUrl: fromUrl
        };
      },
      setDisplay: function setDisplay(display) {
        return {
          display: display
        };
      },
      loadPeople: function loadPeople(action, day, breakdown_value) {
        return {
          action: action,
          day: day,
          breakdown_value: breakdown_value
        };
      },
      setShowingPeople: function setShowingPeople(isShowing) {
        return {
          isShowing: isShowing
        };
      },
      setPeople: function setPeople(people, count, action, day, breakdown_value) {
        return {
          people: people,
          count: count,
          action: action,
          day: day,
          breakdown_value: breakdown_value
        };
      },
      setActiveView: function setActiveView(type) {
        return {
          type: type
        };
      },
      setCachedUrl: function setCachedUrl(type, url) {
        return {
          type: type,
          url: url
        };
      }
    };
  },
  reducers: function reducers(_ref3) {
    var _ref6, _ref10;

    var actions = _ref3.actions,
        props = _ref3.props;
    return {
      filters: [props.dashboardItemId ? props.filters : function (state) {
        return cleanFilters(kea_router__WEBPACK_IMPORTED_MODULE_9__["router"].selectors.searchParams(state));
      }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, actions.setFilters, function (state, _ref4) {
        var filters = _ref4.filters,
            mergeFilters = _ref4.mergeFilters;
        return cleanFilters(_objectSpread(_objectSpread({}, mergeFilters ? state : {}), filters));
      })],
      people: [null, (_ref6 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_ref6, actions.setFilters, function () {
        return null;
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_ref6, actions.setPeople, function (_, people) {
        return people;
      }), _ref6)],
      cachedUrls: [{}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, actions.setCachedUrl, function (state, _ref7) {
        var type = _ref7.type,
            url = _ref7.url;
        return _objectSpread(_objectSpread({}, state), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, type, url));
      })],
      showingPeople: [false, (_ref10 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_ref10, actions.loadPeople, function () {
        return true;
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_ref10, actions.setShowingPeople, function (_, _ref9) {
        var isShowing = _ref9.isShowing;
        return isShowing;
      }), _ref10)]
    };
  },
  selectors: function selectors(_ref11) {
    var _selectors = _ref11.selectors;
    return {
      activeView: [function () {
        return [_selectors.filters];
      }, function (filters) {
        return filters.session ? ViewType.SESSIONS : ViewType.FILTERS;
      }],
      peopleAction: [function () {
        return [_selectors.filters, _selectors.actions];
      }, function (filters, actions) {
        return filters.people_action ? actions.find(function (a) {
          return a.id === parseInt(filters.people_action);
        }) : null;
      }],
      peopleDay: [function () {
        return [_selectors.filters];
      }, function (filters) {
        return filters.people_day;
      }]
    };
  },
  listeners: function listeners(_ref12) {
    var _ref17;

    var actions = _ref12.actions,
        values = _ref12.values;
    return _ref17 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_ref17, actions.setDisplay, function () {
      var _ref14 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(_ref13) {
        var display;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                display = _ref13.display;
                actions.setFilters({
                  display: display
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref14.apply(this, arguments);
      };
    }()), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_ref17, actions.loadPeople, function () {
      var _ref16 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3(_ref15, breakpoint) {
        var _people$, _people$2;

        var action, day, breakdown_value, params, filterParams, people;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                action = _ref15.action, day = _ref15.day, breakdown_value = _ref15.breakdown_value;
                params = filterClientSideParams(_objectSpread(_objectSpread({}, values.filters), {}, {
                  entityId: action.id,
                  type: action.type
                }));

                if (values.filters.shown_as === 'Stickiness') {
                  params.stickiness_days = day;
                } else {
                  params.date_from = day;
                  params.date_to = day;
                }

                if (breakdown_value) {
                  params.properties = _objectSpread(_objectSpread({}, params.properties), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, params.breakdown, breakdown_value));
                }

                filterParams = Object(lib_utils__WEBPACK_IMPORTED_MODULE_6__["toParams"])(params);
                actions.setPeople(null, null, action, day, breakdown_value);
                _context3.next = 8;
                return lib_api__WEBPACK_IMPORTED_MODULE_5__["default"].get("api/action/people/?include_last_event=1&".concat(filterParams));

              case 8:
                people = _context3.sent;
                breakpoint();
                actions.setPeople((_people$ = people[0]) === null || _people$ === void 0 ? void 0 : _people$.people, (_people$2 = people[0]) === null || _people$2 === void 0 ? void 0 : _people$2.count, action, day, breakdown_value);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x2, _x3) {
        return _ref16.apply(this, arguments);
      };
    }()), _ref17;
  },
  actionToUrl: function actionToUrl(_ref18) {
    var _ref21;

    var actions = _ref18.actions,
        values = _ref18.values,
        props = _ref18.props;
    return _ref21 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_ref21, actions.setFilters, function (_ref19) {
      var fromUrl = _ref19.fromUrl;

      if (props.dashboardItemId) {
        return; // don't use the URL if on the dashboard
      }

      if (!fromUrl) {
        return ['/trends', values.filters];
      }
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_ref21, actions.setActiveView, function (_ref20) {
      var type = _ref20.type;

      if (props.dashboardItemId) {
        return; // don't use the URL if on the dashboard
      }

      actions.setCachedUrl(values.activeView, window.location.pathname + window.location.search);
      var cachedUrl = values.cachedUrls[type];

      if (cachedUrl) {
        return cachedUrl;
      }

      return ['/trends', type === ViewType.SESSIONS ? {
        session: 'avg'
      } : {}];
    }), _ref21;
  },
  urlToAction: function urlToAction(_ref22) {
    var actions = _ref22.actions,
        values = _ref22.values,
        props = _ref22.props;
    return {
      '/trends': function trends(_, searchParams) {
        if (props.dashboardItemId) {
          return; // don't use the URL if on the dashboard
        }

        var cleanSearchParams = cleanFilters(searchParams); // opening /trends without any params, just open $pageview, $screen or the first random event

        if (Object.keys(searchParams).length === 0 && values.eventNames && values.eventNames[0]) {
          var event = values.eventNames.includes('$pageview') ? '$pageview' : values.eventNames.includes('$screen') ? '$screen' : values.eventNames[0];
          cleanSearchParams[EntityTypes.EVENTS] = [{
            id: event,
            name: event,
            type: EntityTypes.EVENTS,
            order: 0
          }];
        }

        if (!Object(lib_utils__WEBPACK_IMPORTED_MODULE_6__["objectsEqual"])(cleanSearchParams, values.filters)) {
          actions.setFilters(cleanSearchParams, false, true);
        }
      }
    };
  },
  path: function path(key) {
    return ["scenes", "trends", "trendsLogic", key];
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvbW9kZWxzL2FjdGlvbnNNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvc2NlbmVzL3RyZW5kcy90cmVuZHNMb2dpYy5qcyJdLCJuYW1lcyI6WyJhY3Rpb25Db250YWlucyIsImFjdGlvbiIsImV2ZW50Iiwic3RlcHMiLCJmaWx0ZXIiLCJzdGVwIiwibGVuZ3RoIiwiYWN0aW9uc01vZGVsIiwia2VhIiwibG9hZGVycyIsImFjdGlvbnMiLCJfX2RlZmF1bHQiLCJsb2FkQWN0aW9ucyIsImFwaSIsImdldCIsInJlc3BvbnNlIiwicmVzdWx0cyIsInNlbGVjdG9ycyIsImFjdGlvbnNHcm91cGVkIiwiZGF0YSIsImxhYmVsIiwib3B0aW9ucyIsImZvckVhY2giLCJmb3JtYXQiLCJuYW1lIiwidmFsdWUiLCJpZCIsInB1c2giLCJldmVudHMiLCJhZnRlck1vdW50IiwiRW50aXR5VHlwZXMiLCJBQ1RJT05TIiwiRVZFTlRTIiwiTkVXX0VOVElUWSIsImRpc2FibGVNaW51dGVGb3IiLCJkU3RhcnQiLCJtU3RhcnQiLCJ5U3RhcnQiLCJhbGwiLCJkaXNhYmxlSG91ckZvciIsIlZpZXdUeXBlIiwiRklMVEVSUyIsIlNFU1NJT05TIiwiY2xlYW5GaWx0ZXJzIiwiZmlsdGVycyIsImludGVydmFsIiwiYXV0b2NvcnJlY3RJbnRlcnZhbCIsImRpc3BsYXkiLCJzZXNzaW9uIiwiQXJyYXkiLCJpc0FycmF5IiwidW5kZWZpbmVkIiwicHJvcGVydGllcyIsImZpbHRlckNsaWVudFNpZGVQYXJhbXMiLCJfc2tpcF90aGlzX29uZSIsInBlb3BsZV9kYXkiLCJfc2tpcF90aGlzX3RvbyIsInBlb3BsZV9hY3Rpb24iLCJfX2FuZF90aGlzIiwic3RpY2tpbmVzc19kYXlzIiwibmV3RmlsdGVycyIsImRhdGVfZnJvbSIsIm1pbnV0ZV9kaXNhYmxlZCIsImhvdXJfZGlzYWJsZWQiLCJ0cmVuZHNMb2dpYyIsImtleSIsInByb3BzIiwiZGFzaGJvYXJkSXRlbUlkIiwiY29ubmVjdCIsInZhbHVlcyIsInVzZXJMb2dpYyIsImxvYWRSZXN1bHRzIiwiYWN0aXZlVmlldyIsInRvQVBJUGFyYW1zIiwic2V0RmlsdGVycyIsIm1lcmdlRmlsdGVycyIsImZyb21VcmwiLCJzZXREaXNwbGF5IiwibG9hZFBlb3BsZSIsImRheSIsImJyZWFrZG93bl92YWx1ZSIsInNldFNob3dpbmdQZW9wbGUiLCJpc1Nob3dpbmciLCJzZXRQZW9wbGUiLCJwZW9wbGUiLCJjb3VudCIsInNldEFjdGl2ZVZpZXciLCJ0eXBlIiwic2V0Q2FjaGVkVXJsIiwidXJsIiwicmVkdWNlcnMiLCJzdGF0ZSIsInJvdXRlciIsInNlYXJjaFBhcmFtcyIsIl8iLCJjYWNoZWRVcmxzIiwic2hvd2luZ1Blb3BsZSIsInBlb3BsZUFjdGlvbiIsImZpbmQiLCJhIiwicGFyc2VJbnQiLCJwZW9wbGVEYXkiLCJsaXN0ZW5lcnMiLCJicmVha3BvaW50IiwicGFyYW1zIiwiZW50aXR5SWQiLCJzaG93bl9hcyIsImRhdGVfdG8iLCJicmVha2Rvd24iLCJmaWx0ZXJQYXJhbXMiLCJhY3Rpb25Ub1VybCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzZWFyY2giLCJjYWNoZWRVcmwiLCJ1cmxUb0FjdGlvbiIsImNsZWFuU2VhcmNoUGFyYW1zIiwiT2JqZWN0Iiwia2V5cyIsImV2ZW50TmFtZXMiLCJpbmNsdWRlcyIsIm9yZGVyIiwib2JqZWN0c0VxdWFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxNQUFELEVBQVNDLEtBQVQsRUFBbUI7QUFDdEMsU0FBT0QsTUFBTSxDQUFDRSxLQUFQLENBQWFDLE1BQWIsQ0FBb0IsVUFBQUMsSUFBSTtBQUFBLFdBQUlBLElBQUksQ0FBQ0gsS0FBTCxJQUFjQSxLQUFsQjtBQUFBLEdBQXhCLEVBQWlESSxNQUFqRCxHQUEwRCxD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SyxDQUFDQyxlQUFWLEVBQTJCO0FBQ3ZCLGlCQUR1QixDQUNoQjtBQUNWOztBQUVELFlBQU1rRCxpQkFBaUIsR0FBRzFFLFlBQVksQ0FBQ2tELFlBQUQsQ0FBdEMsQ0FMNEIsQ0FPNUI7O0FBQ0EsWUFBSXlCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZMUIsWUFBWixFQUEwQnZGLE1BQTFCLEtBQXFDLENBQXJDLElBQTBDK0QsTUFBTSxDQUFDbUQsVUFBakQsSUFBK0RuRCxNQUFNLENBQUNtRCxVQUFQLENBQWtCLENBQWxCLENBQW5FLEVBQXlGO0FBQ3JGLGNBQU10SCxLQUFLLEdBQUdtRSxNQUFNLENBQUNtRCxVQUFQLENBQWtCQyxRQUFsQixDQUEyQixXQUEzQixJQUNSLFdBRFEsR0FFUnBELE1BQU0sQ0FBQ21ELFVBQVAsQ0FBa0JDLFFBQWxCLENBQTJCLFNBQTNCLElBQ0EsU0FEQSxHQUVBcEQsTUFBTSxDQUFDbUQsVUFBUCxDQUFrQixDQUFsQixDQUpOO0FBTUFILDJCQUFpQixDQUFDdkYsV0FBVyxDQUFDRSxNQUFiLENBQWpCLEdBQXdDLENBQ3BDO0FBQ0lOLGNBQUUsRUFBRXhCLEtBRFI7QUFFSXNCLGdCQUFJLEVBQUV0QixLQUZWO0FBR0lxRixnQkFBSSxFQUFFekQsV0FBVyxDQUFDRSxNQUh0QjtBQUlJMEYsaUJBQUssRUFBRTtBQUpYLFdBRG9DLENBQXhDO0FBUUg7O0FBRUQsWUFBSSxDQUFDQyw4REFBWSxDQUFDTixpQkFBRCxFQUFvQmhELE1BQU0sQ0FBQ3pCLE9BQTNCLENBQWpCLEVBQXNEO0FBQ2xEbEMsaUJBQU8sQ0FBQ2dFLFVBQVIsQ0FBbUIyQyxpQkFBbkIsRUFBc0MsS0FBdEMsRUFBNkMsSUFBN0M7QUFDSDtBQUNKO0FBN0J5QyxLQUFqQztBQUFBLEdBNUhjO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBRCxDQUF2QixDIiwiZmlsZSI6ImRhc2hib2FyZH5lZGl0RnVubmVsfmZ1bm5lbH50cmVuZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBrZWEgfSBmcm9tICdrZWEnXG5pbXBvcnQgYXBpIGZyb20gJ2xpYi9hcGknXG5cbmNvbnN0IGFjdGlvbkNvbnRhaW5zID0gKGFjdGlvbiwgZXZlbnQpID0+IHtcbiAgICByZXR1cm4gYWN0aW9uLnN0ZXBzLmZpbHRlcihzdGVwID0+IHN0ZXAuZXZlbnQgPT0gZXZlbnQpLmxlbmd0aCA+IDBcbn1cblxuZXhwb3J0IGNvbnN0IGFjdGlvbnNNb2RlbCA9IGtlYSh7XG4gICAgbG9hZGVyczogKCkgPT4gKHtcbiAgICAgICAgYWN0aW9uczoge1xuICAgICAgICAgICAgX19kZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIGxvYWRBY3Rpb25zOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KCdhcGkvYWN0aW9uJylcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UucmVzdWx0c1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICBzZWxlY3RvcnM6ICh7IHNlbGVjdG9ycyB9KSA9PiAoe1xuICAgICAgICBhY3Rpb25zR3JvdXBlZDogW1xuICAgICAgICAgICAgKCkgPT4gW3NlbGVjdG9ycy5hY3Rpb25zXSxcbiAgICAgICAgICAgIGFjdGlvbnMgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gW1xuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnQXV0b2NhcHR1cmUnLCBvcHRpb25zOiBbXSB9LFxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnRXZlbnQnLCBvcHRpb25zOiBbXSB9LFxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnUGFnZXZpZXcnLCBvcHRpb25zOiBbXSB9LFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBhY3Rpb25zLmZvckVhY2goYWN0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1hdCA9IHsgbGFiZWw6IGFjdGlvbi5uYW1lLCB2YWx1ZTogYWN0aW9uLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbkNvbnRhaW5zKGFjdGlvbiwgJyRhdXRvY2FwdHVyZScpKSBkYXRhWzBdLm9wdGlvbnMucHVzaChmb3JtYXQpXG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb25Db250YWlucyhhY3Rpb24sICckcGFnZXZpZXcnKSkgZGF0YVsyXS5vcHRpb25zLnB1c2goZm9ybWF0KVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbkNvbnRhaW5zKGFjdGlvbiwgJyRhdXRvY2FwdHVyZScpICYmICFhY3Rpb25Db250YWlucyhhY3Rpb24sICckcGFnZXZpZXcnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbMV0ub3B0aW9ucy5wdXNoKGZvcm1hdClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0pLFxuXG4gICAgZXZlbnRzOiAoeyBhY3Rpb25zIH0pID0+ICh7XG4gICAgICAgIGFmdGVyTW91bnQ6IGFjdGlvbnMubG9hZEFjdGlvbnMsXG4gICAgfSksXG59KVxuIiwiaW1wb3J0IHsga2VhIH0gZnJvbSAna2VhJ1xuXG5pbXBvcnQgYXBpIGZyb20gJ2xpYi9hcGknXG5pbXBvcnQgeyBvYmplY3RzRXF1YWwsIHRvUGFyYW1zIGFzIHRvQVBJUGFyYW1zIH0gZnJvbSAnbGliL3V0aWxzJ1xuaW1wb3J0IHsgYWN0aW9uc01vZGVsIH0gZnJvbSAnfi9tb2RlbHMvYWN0aW9uc01vZGVsJ1xuaW1wb3J0IHsgdXNlckxvZ2ljIH0gZnJvbSAnc2NlbmVzL3VzZXJMb2dpYydcbmltcG9ydCB7IHJvdXRlciB9IGZyb20gJ2tlYS1yb3V0ZXInXG5cbmV4cG9ydCBjb25zdCBFbnRpdHlUeXBlcyA9IHtcbiAgICBBQ1RJT05TOiAnYWN0aW9ucycsXG4gICAgRVZFTlRTOiAnZXZlbnRzJyxcbiAgICBORVdfRU5USVRZOiAnbmV3X2VudGl0eScsXG59XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlTWludXRlRm9yID0ge1xuICAgIGRTdGFydDogZmFsc2UsXG4gICAgJy0xZCc6IGZhbHNlLFxuICAgICctN2QnOiB0cnVlLFxuICAgICctMTRkJzogdHJ1ZSxcbiAgICAnLTMwZCc6IHRydWUsXG4gICAgJy05MGQnOiB0cnVlLFxuICAgIG1TdGFydDogdHJ1ZSxcbiAgICAnLTFtU3RhcnQnOiB0cnVlLFxuICAgIHlTdGFydDogdHJ1ZSxcbiAgICBhbGw6IHRydWUsXG59XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlSG91ckZvciA9IHtcbiAgICBkU3RhcnQ6IGZhbHNlLFxuICAgICctMWQnOiBmYWxzZSxcbiAgICAnLTdkJzogZmFsc2UsXG4gICAgJy0xNGQnOiBmYWxzZSxcbiAgICAnLTMwZCc6IGZhbHNlLFxuICAgICctOTBkJzogdHJ1ZSxcbiAgICBtU3RhcnQ6IGZhbHNlLFxuICAgICctMW1TdGFydCc6IGZhbHNlLFxuICAgIHlTdGFydDogdHJ1ZSxcbiAgICBhbGw6IHRydWUsXG59XG5cbmV4cG9ydCBjb25zdCBWaWV3VHlwZSA9IHtcbiAgICBGSUxURVJTOiAnRklMVEVSUycsXG4gICAgU0VTU0lPTlM6ICdTRVNTSU9OUycsXG59XG5cbmZ1bmN0aW9uIGNsZWFuRmlsdGVycyhmaWx0ZXJzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZmlsdGVycyxcbiAgICAgICAgaW50ZXJ2YWw6IGF1dG9jb3JyZWN0SW50ZXJ2YWwoZmlsdGVycyksXG4gICAgICAgIGRpc3BsYXk6IGZpbHRlcnMuc2Vzc2lvbiAmJiBmaWx0ZXJzLnNlc3Npb24gPT09ICdkaXN0JyA/ICdBY3Rpb25zVGFibGUnIDogZmlsdGVycy5kaXNwbGF5LFxuICAgICAgICBhY3Rpb25zOiBBcnJheS5pc0FycmF5KGZpbHRlcnMuYWN0aW9ucykgPyBmaWx0ZXJzLmFjdGlvbnMgOiB1bmRlZmluZWQsXG4gICAgICAgIGV2ZW50czogQXJyYXkuaXNBcnJheShmaWx0ZXJzLmV2ZW50cykgPyBmaWx0ZXJzLmV2ZW50cyA6IHVuZGVmaW5lZCxcbiAgICAgICAgcHJvcGVydGllczogZmlsdGVycy5wcm9wZXJ0aWVzIHx8IHt9LFxuICAgIH1cbn1cblxuZnVuY3Rpb24gZmlsdGVyQ2xpZW50U2lkZVBhcmFtcyhmaWx0ZXJzKSB7XG4gICAgY29uc3Qge1xuICAgICAgICBwZW9wbGVfZGF5OiBfc2tpcF90aGlzX29uZSxcbiAgICAgICAgcGVvcGxlX2FjdGlvbjogX3NraXBfdGhpc190b28sXG4gICAgICAgIHN0aWNraW5lc3NfZGF5czogX19hbmRfdGhpcyxcbiAgICAgICAgLi4ubmV3RmlsdGVyc1xuICAgIH0gPSBmaWx0ZXJzXG5cbiAgICByZXR1cm4gbmV3RmlsdGVyc1xufVxuXG5mdW5jdGlvbiBhdXRvY29ycmVjdEludGVydmFsKHsgZGF0ZV9mcm9tLCBpbnRlcnZhbCB9KSB7XG4gICAgaWYgKCFpbnRlcnZhbCkgcmV0dXJuICdkYXknIC8vIHVuZGVmaW5lZC91bmluaXRpYWxpemVkXG5cbiAgICBjb25zdCBtaW51dGVfZGlzYWJsZWQgPSBkaXNhYmxlTWludXRlRm9yW2RhdGVfZnJvbV0gJiYgaW50ZXJ2YWwgPT09ICdtaW51dGUnXG4gICAgY29uc3QgaG91cl9kaXNhYmxlZCA9IGRpc2FibGVIb3VyRm9yW2RhdGVfZnJvbV0gJiYgaW50ZXJ2YWwgPT09ICdob3VyJ1xuXG4gICAgaWYgKG1pbnV0ZV9kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm4gJ2hvdXInXG4gICAgfSBlbHNlIGlmIChob3VyX2Rpc2FibGVkKSB7XG4gICAgICAgIHJldHVybiAnZGF5J1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbnRlcnZhbFxuICAgIH1cbn1cblxuLy8gcHJvcHM6XG4vLyAtIGRhc2hib2FyZEl0ZW1JZFxuLy8gLSBmaWx0ZXJzXG5leHBvcnQgY29uc3QgdHJlbmRzTG9naWMgPSBrZWEoe1xuICAgIGtleTogcHJvcHMgPT4gcHJvcHMuZGFzaGJvYXJkSXRlbUlkIHx8ICdhbGxfdHJlbmRzJyxcblxuICAgIGNvbm5lY3Q6IHtcbiAgICAgICAgdmFsdWVzOiBbdXNlckxvZ2ljLCBbJ2V2ZW50TmFtZXMnXSwgYWN0aW9uc01vZGVsLCBbJ2FjdGlvbnMnXV0sXG4gICAgfSxcblxuICAgIGxvYWRlcnM6ICh7IHZhbHVlcyB9KSA9PiAoe1xuICAgICAgICByZXN1bHRzOiB7XG4gICAgICAgICAgICBsb2FkUmVzdWx0czogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMuYWN0aXZlVmlldyA9PT0gVmlld1R5cGUuU0VTU0lPTlMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGFwaS5nZXQoJ2FwaS9ldmVudC9zZXNzaW9ucy8/JyArIHRvQVBJUGFyYW1zKGZpbHRlckNsaWVudFNpZGVQYXJhbXModmFsdWVzLmZpbHRlcnMpKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGFwaS5nZXQoJ2FwaS9hY3Rpb24vdHJlbmRzLz8nICsgdG9BUElQYXJhbXMoZmlsdGVyQ2xpZW50U2lkZVBhcmFtcyh2YWx1ZXMuZmlsdGVycykpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KSxcblxuICAgIGFjdGlvbnM6ICgpID0+ICh7XG4gICAgICAgIHNldEZpbHRlcnM6IChmaWx0ZXJzLCBtZXJnZUZpbHRlcnMgPSB0cnVlLCBmcm9tVXJsID0gZmFsc2UpID0+ICh7IGZpbHRlcnMsIG1lcmdlRmlsdGVycywgZnJvbVVybCB9KSxcbiAgICAgICAgc2V0RGlzcGxheTogZGlzcGxheSA9PiAoeyBkaXNwbGF5IH0pLFxuXG4gICAgICAgIGxvYWRQZW9wbGU6IChhY3Rpb24sIGRheSwgYnJlYWtkb3duX3ZhbHVlKSA9PiAoeyBhY3Rpb24sIGRheSwgYnJlYWtkb3duX3ZhbHVlIH0pLFxuICAgICAgICBzZXRTaG93aW5nUGVvcGxlOiBpc1Nob3dpbmcgPT4gKHsgaXNTaG93aW5nIH0pLFxuICAgICAgICBzZXRQZW9wbGU6IChwZW9wbGUsIGNvdW50LCBhY3Rpb24sIGRheSwgYnJlYWtkb3duX3ZhbHVlKSA9PiAoeyBwZW9wbGUsIGNvdW50LCBhY3Rpb24sIGRheSwgYnJlYWtkb3duX3ZhbHVlIH0pLFxuICAgICAgICBzZXRBY3RpdmVWaWV3OiB0eXBlID0+ICh7IHR5cGUgfSksXG4gICAgICAgIHNldENhY2hlZFVybDogKHR5cGUsIHVybCkgPT4gKHsgdHlwZSwgdXJsIH0pLFxuICAgIH0pLFxuXG4gICAgcmVkdWNlcnM6ICh7IGFjdGlvbnMsIHByb3BzIH0pID0+ICh7XG4gICAgICAgIGZpbHRlcnM6IFtcbiAgICAgICAgICAgIHByb3BzLmRhc2hib2FyZEl0ZW1JZCA/IHByb3BzLmZpbHRlcnMgOiBzdGF0ZSA9PiBjbGVhbkZpbHRlcnMocm91dGVyLnNlbGVjdG9ycy5zZWFyY2hQYXJhbXMoc3RhdGUpKSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBbYWN0aW9ucy5zZXRGaWx0ZXJzXTogKHN0YXRlLCB7IGZpbHRlcnMsIG1lcmdlRmlsdGVycyB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbGVhbkZpbHRlcnMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKG1lcmdlRmlsdGVycyA/IHN0YXRlIDoge30pLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZmlsdGVycyxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgcGVvcGxlOiBbXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFthY3Rpb25zLnNldEZpbHRlcnNdOiAoKSA9PiBudWxsLFxuICAgICAgICAgICAgICAgIFthY3Rpb25zLnNldFBlb3BsZV06IChfLCBwZW9wbGUpID0+IHBlb3BsZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGNhY2hlZFVybHM6IFtcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFthY3Rpb25zLnNldENhY2hlZFVybF06IChzdGF0ZSwgeyB0eXBlLCB1cmwgfSkgPT4gKHsgLi4uc3RhdGUsIFt0eXBlXTogdXJsIH0pLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc2hvd2luZ1Blb3BsZTogW1xuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgW2FjdGlvbnMubG9hZFBlb3BsZV06ICgpID0+IHRydWUsXG4gICAgICAgICAgICAgICAgW2FjdGlvbnMuc2V0U2hvd2luZ1Blb3BsZV06IChfLCB7IGlzU2hvd2luZyB9KSA9PiBpc1Nob3dpbmcsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0pLFxuXG4gICAgc2VsZWN0b3JzOiAoeyBzZWxlY3RvcnMgfSkgPT4gKHtcbiAgICAgICAgYWN0aXZlVmlldzogWygpID0+IFtzZWxlY3RvcnMuZmlsdGVyc10sIGZpbHRlcnMgPT4gKGZpbHRlcnMuc2Vzc2lvbiA/IFZpZXdUeXBlLlNFU1NJT05TIDogVmlld1R5cGUuRklMVEVSUyldLFxuICAgICAgICBwZW9wbGVBY3Rpb246IFtcbiAgICAgICAgICAgICgpID0+IFtzZWxlY3RvcnMuZmlsdGVycywgc2VsZWN0b3JzLmFjdGlvbnNdLFxuICAgICAgICAgICAgKGZpbHRlcnMsIGFjdGlvbnMpID0+XG4gICAgICAgICAgICAgICAgZmlsdGVycy5wZW9wbGVfYWN0aW9uID8gYWN0aW9ucy5maW5kKGEgPT4gYS5pZCA9PT0gcGFyc2VJbnQoZmlsdGVycy5wZW9wbGVfYWN0aW9uKSkgOiBudWxsLFxuICAgICAgICBdLFxuICAgICAgICBwZW9wbGVEYXk6IFsoKSA9PiBbc2VsZWN0b3JzLmZpbHRlcnNdLCBmaWx0ZXJzID0+IGZpbHRlcnMucGVvcGxlX2RheV0sXG4gICAgfSksXG5cbiAgICBsaXN0ZW5lcnM6ICh7IGFjdGlvbnMsIHZhbHVlcyB9KSA9PiAoe1xuICAgICAgICBbYWN0aW9ucy5zZXREaXNwbGF5XTogYXN5bmMgKHsgZGlzcGxheSB9KSA9PiB7XG4gICAgICAgICAgICBhY3Rpb25zLnNldEZpbHRlcnMoeyBkaXNwbGF5IH0pXG4gICAgICAgIH0sXG4gICAgICAgIFthY3Rpb25zLmxvYWRQZW9wbGVdOiBhc3luYyAoeyBhY3Rpb24sIGRheSwgYnJlYWtkb3duX3ZhbHVlIH0sIGJyZWFrcG9pbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IGZpbHRlckNsaWVudFNpZGVQYXJhbXMoe1xuICAgICAgICAgICAgICAgIC4uLnZhbHVlcy5maWx0ZXJzLFxuICAgICAgICAgICAgICAgIGVudGl0eUlkOiBhY3Rpb24uaWQsXG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9uLnR5cGUsXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZiAodmFsdWVzLmZpbHRlcnMuc2hvd25fYXMgPT09ICdTdGlja2luZXNzJykge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5zdGlja2luZXNzX2RheXMgPSBkYXlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLmRhdGVfZnJvbSA9IGRheVxuICAgICAgICAgICAgICAgIHBhcmFtcy5kYXRlX3RvID0gZGF5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYnJlYWtkb3duX3ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLnByb3BlcnRpZXMgPSB7IC4uLnBhcmFtcy5wcm9wZXJ0aWVzLCBbcGFyYW1zLmJyZWFrZG93bl06IGJyZWFrZG93bl92YWx1ZSB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGZpbHRlclBhcmFtcyA9IHRvQVBJUGFyYW1zKHBhcmFtcylcbiAgICAgICAgICAgIGFjdGlvbnMuc2V0UGVvcGxlKG51bGwsIG51bGwsIGFjdGlvbiwgZGF5LCBicmVha2Rvd25fdmFsdWUpXG4gICAgICAgICAgICBjb25zdCBwZW9wbGUgPSBhd2FpdCBhcGkuZ2V0KGBhcGkvYWN0aW9uL3Blb3BsZS8/aW5jbHVkZV9sYXN0X2V2ZW50PTEmJHtmaWx0ZXJQYXJhbXN9YClcbiAgICAgICAgICAgIGJyZWFrcG9pbnQoKVxuICAgICAgICAgICAgYWN0aW9ucy5zZXRQZW9wbGUocGVvcGxlWzBdPy5wZW9wbGUsIHBlb3BsZVswXT8uY291bnQsIGFjdGlvbiwgZGF5LCBicmVha2Rvd25fdmFsdWUpXG4gICAgICAgIH0sXG4gICAgfSksXG5cbiAgICBhY3Rpb25Ub1VybDogKHsgYWN0aW9ucywgdmFsdWVzLCBwcm9wcyB9KSA9PiAoe1xuICAgICAgICBbYWN0aW9ucy5zZXRGaWx0ZXJzXTogKHsgZnJvbVVybCB9KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvcHMuZGFzaGJvYXJkSXRlbUlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC8vIGRvbid0IHVzZSB0aGUgVVJMIGlmIG9uIHRoZSBkYXNoYm9hcmRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZnJvbVVybCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbJy90cmVuZHMnLCB2YWx1ZXMuZmlsdGVyc11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW2FjdGlvbnMuc2V0QWN0aXZlVmlld106ICh7IHR5cGUgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb3BzLmRhc2hib2FyZEl0ZW1JZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAvLyBkb24ndCB1c2UgdGhlIFVSTCBpZiBvbiB0aGUgZGFzaGJvYXJkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhY3Rpb25zLnNldENhY2hlZFVybCh2YWx1ZXMuYWN0aXZlVmlldywgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZFVybCA9IHZhbHVlcy5jYWNoZWRVcmxzW3R5cGVdXG4gICAgICAgICAgICBpZiAoY2FjaGVkVXJsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFVybFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFsnL3RyZW5kcycsIHR5cGUgPT09IFZpZXdUeXBlLlNFU1NJT05TID8geyBzZXNzaW9uOiAnYXZnJyB9IDoge31dXG4gICAgICAgIH0sXG4gICAgfSksXG5cbiAgICB1cmxUb0FjdGlvbjogKHsgYWN0aW9ucywgdmFsdWVzLCBwcm9wcyB9KSA9PiAoe1xuICAgICAgICAnL3RyZW5kcyc6IChfLCBzZWFyY2hQYXJhbXMpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5kYXNoYm9hcmRJdGVtSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLy8gZG9uJ3QgdXNlIHRoZSBVUkwgaWYgb24gdGhlIGRhc2hib2FyZFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjbGVhblNlYXJjaFBhcmFtcyA9IGNsZWFuRmlsdGVycyhzZWFyY2hQYXJhbXMpXG5cbiAgICAgICAgICAgIC8vIG9wZW5pbmcgL3RyZW5kcyB3aXRob3V0IGFueSBwYXJhbXMsIGp1c3Qgb3BlbiAkcGFnZXZpZXcsICRzY3JlZW4gb3IgdGhlIGZpcnN0IHJhbmRvbSBldmVudFxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHNlYXJjaFBhcmFtcykubGVuZ3RoID09PSAwICYmIHZhbHVlcy5ldmVudE5hbWVzICYmIHZhbHVlcy5ldmVudE5hbWVzWzBdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSB2YWx1ZXMuZXZlbnROYW1lcy5pbmNsdWRlcygnJHBhZ2V2aWV3JylcbiAgICAgICAgICAgICAgICAgICAgPyAnJHBhZ2V2aWV3J1xuICAgICAgICAgICAgICAgICAgICA6IHZhbHVlcy5ldmVudE5hbWVzLmluY2x1ZGVzKCckc2NyZWVuJylcbiAgICAgICAgICAgICAgICAgICAgPyAnJHNjcmVlbidcbiAgICAgICAgICAgICAgICAgICAgOiB2YWx1ZXMuZXZlbnROYW1lc1swXVxuXG4gICAgICAgICAgICAgICAgY2xlYW5TZWFyY2hQYXJhbXNbRW50aXR5VHlwZXMuRVZFTlRTXSA9IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBFbnRpdHlUeXBlcy5FVkVOVFMsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghb2JqZWN0c0VxdWFsKGNsZWFuU2VhcmNoUGFyYW1zLCB2YWx1ZXMuZmlsdGVycykpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zLnNldEZpbHRlcnMoY2xlYW5TZWFyY2hQYXJhbXMsIGZhbHNlLCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0pLFxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=