(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["liveActions"],{

/***/ "./frontend/src/scenes/actions/LiveActions.js":
/*!****************************************************!*\
  !*** ./frontend/src/scenes/actions/LiveActions.js ***!
  \****************************************************/
/*! exports provided: logic, LiveActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logic", function() { return logic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveActions", function() { return LiveActions; });
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
/* harmony import */ var _LiveActionsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LiveActionsTable */ "./frontend/src/scenes/actions/LiveActionsTable.js");
/* harmony import */ var scenes_events_eventsTableLogic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! scenes/events/eventsTableLogic */ "./frontend/src/scenes/events/eventsTableLogic.js");
/* harmony import */ var kea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! kea */ "./node_modules/kea/lib/index.esm.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var logic = Object(kea__WEBPACK_IMPORTED_MODULE_8__["connect"])(function () {
  return [Object(scenes_events_eventsTableLogic__WEBPACK_IMPORTED_MODULE_7__["eventsTableLogic"])({
    fixedFilters: undefined,
    apiUrl: 'api/event/actions/',
    live: true
  })];
});
var LiveActions = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(LiveActions, _Component);

  var _super = _createSuper(LiveActions);

  function LiveActions() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LiveActions);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LiveActions, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_LiveActionsTable__WEBPACK_IMPORTED_MODULE_6__["LiveActionsTable"], this.props);
    }
  }]);

  return LiveActions;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/***/ }),

/***/ "./frontend/src/scenes/actions/LiveActionsTable.js":
/*!*********************************************************!*\
  !*** ./frontend/src/scenes/actions/LiveActionsTable.js ***!
  \*********************************************************/
/*! exports provided: LiveActionsTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveActionsTable", function() { return LiveActionsTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/utils */ "./frontend/src/lib/utils.js");
/* harmony import */ var lib_components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/components/Link */ "./frontend/src/lib/components/Link.js");
/* harmony import */ var lib_components_PropertyFilters_PropertyFilters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/components/PropertyFilters/PropertyFilters */ "./frontend/src/lib/components/PropertyFilters/PropertyFilters.js");
/* harmony import */ var lib_components_FilterPropertyLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/components/FilterPropertyLink */ "./frontend/src/lib/components/FilterPropertyLink.js");
/* harmony import */ var scenes_events_EventDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! scenes/events/EventDetails */ "./frontend/src/scenes/events/EventDetails.js");
/* harmony import */ var scenes_events_eventsTableLogic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! scenes/events/eventsTableLogic */ "./frontend/src/scenes/events/eventsTableLogic.js");
/* harmony import */ var kea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! kea */ "./node_modules/kea/lib/index.esm.js");









function LiveActionsTable(_ref) {
  var fixedFilters = _ref.fixedFilters;
  var logic = Object(scenes_events_eventsTableLogic__WEBPACK_IMPORTED_MODULE_7__["eventsTableLogic"])({
    fixedFilters: fixedFilters,
    apiUrl: 'api/event/actions/',
    live: true
  });

  var _useValues = Object(kea__WEBPACK_IMPORTED_MODULE_8__["useValues"])(logic),
      properties = _useValues.properties,
      events = _useValues.events,
      isLoading = _useValues.isLoading,
      selectedEvent = _useValues.selectedEvent,
      highlightEvents = _useValues.highlightEvents;

  var _useActions = Object(kea__WEBPACK_IMPORTED_MODULE_8__["useActions"])(logic),
      setSelectedEvent = _useActions.setSelectedEvent;

  var params = ['$current_url'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "events"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(lib_components_PropertyFilters_PropertyFilters__WEBPACK_IMPORTED_MODULE_4__["PropertyFilters"], {
    pageKey: "LiveActionsTable",
    propertyFilters: properties
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "Action ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "User"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "Path"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "Browser")), isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(lib_utils__WEBPACK_IMPORTED_MODULE_2__["TableRowLoading"], {
    colSpan: 5,
    asOverlay: events.length > 0
  }), events && events.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    colSpan: "5"
  }, "We didn't find any events matching any actions. You can either", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(lib_components_Link__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/actions"
  }, "set up some actions"), " or", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(lib_components_Link__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/setup"
  }, "integrate PostHog in your app"), ".")), events && events.map(function (action, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: action.id
    }, index > 0 && !moment__WEBPACK_IMPORTED_MODULE_1___default()(action.event.timestamp).isSame(events[index - 1].event.timestamp, 'day') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      colSpan: "5",
      className: "event-day-separator"
    }, moment__WEBPACK_IMPORTED_MODULE_1___default()(action.event.timestamp).format('LL'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      className: 'cursor-pointer event-row' + (highlightEvents[action.id] ? ' event-row-new' : ''),
      onClick: function onClick() {
        return setSelectedEvent(selectedEvent === action.id ? null : action.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, action.action.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(lib_components_Link__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/person/".concat(action.event.distinct_id)
    }, action.event.person)), params.map(function (param) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        key: param,
        title: action.event.properties[param]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(lib_components_FilterPropertyLink__WEBPACK_IMPORTED_MODULE_5__["FilterPropertyLink"], {
        property: param,
        value: action.event.properties[param],
        filters: {
          properties: properties
        }
      }));
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, moment__WEBPACK_IMPORTED_MODULE_1___default()(action.event.timestamp).fromNow()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, action.event.properties.$browser, " ", action.event.properties.$browser_version, " -", ' ', action.event.properties.$os)), selectedEvent === action.id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      colSpan: "4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(scenes_events_EventDetails__WEBPACK_IMPORTED_MODULE_6__["EventDetails"], {
      event: action.event
    }))));
  }))));
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvc2NlbmVzL2FjdGlvbnMvTGl2ZUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL3NjZW5lcy9hY3Rpb25zL0xpdmVBY3Rpb25zVGFibGUuanMiXSwibmFtZXMiOlsibG9naWMiLCJjb25uZWN0IiwiZXZlbnRzVGFibGVMb2dpYyIsImZpeGVkRmlsdGVycyIsInVuZGVmaW5lZCIsImFwaVVybCIsImxpdmUiLCJMaXZlQWN0aW9ucyIsInByb3BzIiwiQ29tcG9uZW50IiwiTGl2ZUFjdGlvbnNUYWJsZSIsInVzZVZhbHVlcyIsInByb3BlcnRpZXMiLCJldmVudHMiLCJpc0xvYWRpbmciLCJzZWxlY3RlZEV2ZW50IiwiaGlnaGxpZ2h0RXZlbnRzIiwidXNlQWN0aW9ucyIsInNldFNlbGVjdGVkRXZlbnQiLCJwYXJhbXMiLCJwb3NpdGlvbiIsImxlbmd0aCIsIm1hcCIsImFjdGlvbiIsImluZGV4IiwiaWQiLCJtb21lbnQiLCJldmVudCIsInRpbWVzdGFtcCIsImlzU2FtZSIsImZvcm1hdCIsIm5hbWUiLCJkaXN0aW5jdF9pZCIsInBlcnNvbiIsInBhcmFtIiwiZnJvbU5vdyIsIiRicm93c2VyIiwiJGJyb3dzZXJfdmVyc2lvbiIsIiRvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLEtBQUssR0FBR0MsbURBQU8sQ0FBQztBQUFBLFNBQU0sQ0FDL0JDLHVGQUFnQixDQUFDO0FBQUVDLGdCQUFZLEVBQUVDLFNBQWhCO0FBQTJCQyxVQUFNLEVBQUUsb0JBQW5DO0FBQXlEQyxRQUFJLEVBQUU7QUFBL0QsR0FBRCxDQURlLENBQU47QUFBQSxDQUFELENBQXJCO0FBSUEsSUFBTUMsV0FBYjtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsV0FDSSxrQkFBUztB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QixpQkFDRyxvRkFDSTtBQUFJLGFBQU8sRUFBQztBQUFaLG9CQUNJLDJEQUFDLHVFQUFEO0FBQWMsV0FBSyxFQUFFRixNQUFNLENBQUNJO0FBQTVCLE1BREosQ0FESixDQXZDUixDQURPO0FBQUEsR0FBWCxDQW5CUixDQURKLENBRkosQ0FESjtBQTJFSCxDIiwiZmlsZSI6ImxpdmVBY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBMaXZlQWN0aW9uc1RhYmxlIH0gZnJvbSAnLi9MaXZlQWN0aW9uc1RhYmxlJ1xuaW1wb3J0IHsgZXZlbnRzVGFibGVMb2dpYyB9IGZyb20gJ3NjZW5lcy9ldmVudHMvZXZlbnRzVGFibGVMb2dpYydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdrZWEnXG5cbmV4cG9ydCBjb25zdCBsb2dpYyA9IGNvbm5lY3QoKCkgPT4gW1xuICAgIGV2ZW50c1RhYmxlTG9naWMoeyBmaXhlZEZpbHRlcnM6IHVuZGVmaW5lZCwgYXBpVXJsOiAnYXBpL2V2ZW50L2FjdGlvbnMvJywgbGl2ZTogdHJ1ZSB9KSxcbl0pXG5cbmV4cG9ydCBjbGFzcyBMaXZlQWN0aW9ucyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPExpdmVBY3Rpb25zVGFibGUgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcblxuaW1wb3J0IHsgVGFibGVSb3dMb2FkaW5nIH0gZnJvbSAnbGliL3V0aWxzJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ2xpYi9jb21wb25lbnRzL0xpbmsnXG5pbXBvcnQgeyBQcm9wZXJ0eUZpbHRlcnMgfSBmcm9tICdsaWIvY29tcG9uZW50cy9Qcm9wZXJ0eUZpbHRlcnMvUHJvcGVydHlGaWx0ZXJzJ1xuaW1wb3J0IHsgRmlsdGVyUHJvcGVydHlMaW5rIH0gZnJvbSAnbGliL2NvbXBvbmVudHMvRmlsdGVyUHJvcGVydHlMaW5rJ1xuXG5pbXBvcnQgeyBFdmVudERldGFpbHMgfSBmcm9tICdzY2VuZXMvZXZlbnRzL0V2ZW50RGV0YWlscydcbmltcG9ydCB7IGV2ZW50c1RhYmxlTG9naWMgfSBmcm9tICdzY2VuZXMvZXZlbnRzL2V2ZW50c1RhYmxlTG9naWMnXG5pbXBvcnQgeyB1c2VBY3Rpb25zLCB1c2VWYWx1ZXMgfSBmcm9tICdrZWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBMaXZlQWN0aW9uc1RhYmxlKHsgZml4ZWRGaWx0ZXJzIH0pIHtcbiAgICBjb25zdCBsb2dpYyA9IGV2ZW50c1RhYmxlTG9naWMoeyBmaXhlZEZpbHRlcnMsIGFwaVVybDogJ2FwaS9ldmVudC9hY3Rpb25zLycsIGxpdmU6IHRydWUgfSlcbiAgICBjb25zdCB7IHByb3BlcnRpZXMsIGV2ZW50cywgaXNMb2FkaW5nLCBzZWxlY3RlZEV2ZW50LCBoaWdobGlnaHRFdmVudHMgfSA9IHVzZVZhbHVlcyhsb2dpYylcbiAgICBjb25zdCB7IHNldFNlbGVjdGVkRXZlbnQgfSA9IHVzZUFjdGlvbnMobG9naWMpXG5cbiAgICBsZXQgcGFyYW1zID0gWyckY3VycmVudF91cmwnXVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRzXCI+XG4gICAgICAgICAgICA8UHJvcGVydHlGaWx0ZXJzIHBhZ2VLZXk9XCJMaXZlQWN0aW9uc1RhYmxlXCIgcHJvcGVydHlGaWx0ZXJzPXtwcm9wZXJ0aWVzfSAvPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCIgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5BY3Rpb24gSUQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+VXNlcjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5QYXRoPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkRhdGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+QnJvd3NlcjwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIHtpc0xvYWRpbmcgJiYgPFRhYmxlUm93TG9hZGluZyBjb2xTcGFuPXs1fSBhc092ZXJsYXk9e2V2ZW50cy5sZW5ndGggPiAwfSAvPn1cbiAgICAgICAgICAgICAgICAgICAge2V2ZW50cyAmJiBldmVudHMubGVuZ3RoID09PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgZGlkbid0IGZpbmQgYW55IGV2ZW50cyBtYXRjaGluZyBhbnkgYWN0aW9ucy4gWW91IGNhbiBlaXRoZXJ7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9hY3Rpb25zXCI+c2V0IHVwIHNvbWUgYWN0aW9uczwvTGluaz4gb3J7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9zZXR1cFwiPmludGVncmF0ZSBQb3N0SG9nIGluIHlvdXIgYXBwPC9MaW5rPi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAge2V2ZW50cyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzLm1hcCgoYWN0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2FjdGlvbi5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFtb21lbnQoYWN0aW9uLmV2ZW50LnRpbWVzdGFtcCkuaXNTYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50c1tpbmRleCAtIDFdLmV2ZW50LnRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjVcIiBjbGFzc05hbWU9XCJldmVudC1kYXktc2VwYXJhdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9tZW50KGFjdGlvbi5ldmVudC50aW1lc3RhbXApLmZvcm1hdCgnTEwnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjdXJzb3ItcG9pbnRlciBldmVudC1yb3cnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaGlnaGxpZ2h0RXZlbnRzW2FjdGlvbi5pZF0gPyAnIGV2ZW50LXJvdy1uZXcnIDogJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZEV2ZW50KHNlbGVjdGVkRXZlbnQgPT09IGFjdGlvbi5pZCA/IG51bGwgOiBhY3Rpb24uaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2FjdGlvbi5hY3Rpb24ubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL3BlcnNvbi8ke2FjdGlvbi5ldmVudC5kaXN0aW5jdF9pZH1gfT57YWN0aW9uLmV2ZW50LnBlcnNvbn08L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhcmFtcy5tYXAocGFyYW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e3BhcmFtfSB0aXRsZT17YWN0aW9uLmV2ZW50LnByb3BlcnRpZXNbcGFyYW1dfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbHRlclByb3BlcnR5TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk9e3BhcmFtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FjdGlvbi5ldmVudC5wcm9wZXJ0aWVzW3BhcmFtXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnM9e3sgcHJvcGVydGllcyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bW9tZW50KGFjdGlvbi5ldmVudC50aW1lc3RhbXApLmZyb21Ob3coKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpb24uZXZlbnQucHJvcGVydGllcy4kYnJvd3Nlcn0ge2FjdGlvbi5ldmVudC5wcm9wZXJ0aWVzLiRicm93c2VyX3ZlcnNpb259IC17JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpb24uZXZlbnQucHJvcGVydGllcy4kb3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRFdmVudCA9PT0gYWN0aW9uLmlkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV2ZW50RGV0YWlscyBldmVudD17YWN0aW9uLmV2ZW50fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==