(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events"],{

/***/ "./frontend/src/scenes/events/EventRow.js":
/*!************************************************!*\
  !*** ./frontend/src/scenes/events/EventRow.js ***!
  \************************************************/
/*! exports provided: EventRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRow", function() { return EventRow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_components_FilterPropertyLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/components/FilterPropertyLink */ "./frontend/src/lib/components/FilterPropertyLink.js");
/* harmony import */ var lib_components_Property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/components/Property */ "./frontend/src/lib/components/Property.js");
/* harmony import */ var lib_components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/components/Link */ "./frontend/src/lib/components/Link.js");






var eventNameMap = function eventNameMap(event) {
  if (event.properties.$event_type === 'click') return 'clicked ';
  if (event.properties.$event_type === 'change') return 'typed something into ';
  if (event.properties.$event_type === 'submit') return 'submitted ';
  return event.event;
};

function EventRow(_ref) {
  var event = _ref.event,
      highlightEvents = _ref.highlightEvents,
      selectedEvent = _ref.selectedEvent,
      properties = _ref.properties,
      search = _ref.search,
      setSelectedEvent = _ref.setSelectedEvent,
      filtersEnabled = _ref.filtersEnabled,
      showLinkToPerson = _ref.showLinkToPerson;
  var params = ['$current_url', '$lib'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: 'cursor-pointer event-row ' + (highlightEvents[event.id] && 'event-row-new'),
    onClick: function onClick() {
      return setSelectedEvent(selectedEvent !== event.id ? event.id : false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, eventNameMap(event), event.elements.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", {
    style: {
      marginBottom: 0,
      display: 'inline'
    }
  }, "<", event.elements[0].tag_name, ">"), event.elements.length > 0 && event.elements[0].text && ' with text "' + event.elements[0].text + '"'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, showLinkToPerson ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(lib_components_Link__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/person/".concat(encodeURIComponent(event.distinct_id)).concat(search),
    className: "ph-no-capture"
  }, event.person) : event.person), params.map(function (paramRequest) {
    var param = paramRequest;
    var value = event.properties[param];

    if (param === '$current_url' && !value) {
      param = '$screen';
      value = event.properties[param];
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      key: param,
      title: value
    }, filtersEnabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(lib_components_FilterPropertyLink__WEBPACK_IMPORTED_MODULE_2__["FilterPropertyLink"], {
      property: param,
      value: event.properties[param],
      filters: {
        properties: properties
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(lib_components_Property__WEBPACK_IMPORTED_MODULE_3__["Property"], {
      value: event.properties[param]
    }));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, moment__WEBPACK_IMPORTED_MODULE_1___default()(event.timestamp).fromNow()));
}

/***/ }),

/***/ "./frontend/src/scenes/events/Events.js":
/*!**********************************************!*\
  !*** ./frontend/src/scenes/events/Events.js ***!
  \**********************************************/
/*! exports provided: logic, Events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logic", function() { return logic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EventsTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventsTable */ "./frontend/src/scenes/events/EventsTable.js");
/* harmony import */ var scenes_events_eventsTableLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scenes/events/eventsTableLogic */ "./frontend/src/scenes/events/eventsTableLogic.js");



var logic = scenes_events_eventsTableLogic__WEBPACK_IMPORTED_MODULE_2__["eventsTableLogic"];
function Events(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EventsTable__WEBPACK_IMPORTED_MODULE_1__["EventsTable"], props);
}

/***/ }),

/***/ "./frontend/src/scenes/events/EventsTable.js":
/*!***************************************************!*\
  !*** ./frontend/src/scenes/events/EventsTable.js ***!
  \***************************************************/
/*! exports provided: EventsTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsTable", function() { return EventsTable; });
/* harmony import */ var antd_es_spin_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/spin/style/css */ "./node_modules/antd/es/spin/style/css.js");
/* harmony import */ var antd_es_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/spin */ "./node_modules/antd/es/spin/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var kea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kea */ "./node_modules/kea/lib/index.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/utils */ "./frontend/src/lib/utils.js");
/* harmony import */ var lib_components_PropertyFilters_PropertyFilters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/components/PropertyFilters/PropertyFilters */ "./frontend/src/lib/components/PropertyFilters/PropertyFilters.js");
/* harmony import */ var scenes_events_EventDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! scenes/events/EventDetails */ "./frontend/src/scenes/events/EventDetails.js");
/* harmony import */ var scenes_events_EventRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! scenes/events/EventRow */ "./frontend/src/scenes/events/EventRow.js");
/* harmony import */ var scenes_events_NoItems__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! scenes/events/NoItems */ "./frontend/src/scenes/events/NoItems.js");
/* harmony import */ var scenes_events_eventsTableLogic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! scenes/events/eventsTableLogic */ "./frontend/src/scenes/events/eventsTableLogic.js");
/* harmony import */ var kea_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! kea-router */ "./node_modules/kea-router/lib/index.js");
/* harmony import */ var kea_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(kea_router__WEBPACK_IMPORTED_MODULE_11__);












function EventsTable(_ref) {
  var fixedFilters = _ref.fixedFilters,
      _ref$filtersEnabled = _ref.filtersEnabled,
      filtersEnabled = _ref$filtersEnabled === void 0 ? true : _ref$filtersEnabled;
  var logic = Object(scenes_events_eventsTableLogic__WEBPACK_IMPORTED_MODULE_10__["eventsTableLogic"])({
    fixedFilters: fixedFilters
  });

  var _useValues = Object(kea__WEBPACK_IMPORTED_MODULE_3__["useValues"])(logic),
      properties = _useValues.properties,
      events = _useValues.events,
      isLoading = _useValues.isLoading,
      hasNext = _useValues.hasNext,
      isLoadingNext = _useValues.isLoadingNext,
      selectedEvent = _useValues.selectedEvent,
      newEvents = _useValues.newEvents,
      highlightEvents = _useValues.highlightEvents;

  var _useActions = Object(kea__WEBPACK_IMPORTED_MODULE_3__["useActions"])(logic),
      updateProperty = _useActions.updateProperty,
      setSelectedEvent = _useActions.setSelectedEvent,
      fetchNextEvents = _useActions.fetchNextEvents,
      flipSort = _useActions.flipSort,
      prependNewEvents = _useActions.prependNewEvents;

  var _useValues2 = Object(kea__WEBPACK_IMPORTED_MODULE_3__["useValues"])(kea_router__WEBPACK_IMPORTED_MODULE_11__["router"]),
      search = _useValues2.location.search;

  var showLinkToPerson = !(fixedFilters !== null && fixedFilters !== void 0 && fixedFilters.person_id);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "events"
  }, filtersEnabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(lib_components_PropertyFilters_PropertyFilters__WEBPACK_IMPORTED_MODULE_6__["PropertyFilters"], {
    pageKey: "EventsTable"
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("table", {
    className: "table",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", null, "Event"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", null, "Person"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", null, "Path / Screen"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", null, "Source"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    onClick: flipSort
  }, "When ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "fi flaticon-sort"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tbody", null, isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(lib_utils__WEBPACK_IMPORTED_MODULE_5__["TableRowLoading"], {
    colSpan: 5,
    asOverlay: events.length > 0
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    className: 'event-new-events ' + (newEvents.length > 0 ? 'show' : 'hide'),
    onClick: function onClick() {
      return prependNewEvents(newEvents);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
    colSpan: "5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "There are ", newEvents.length, " new events. Click here to load them."))), !events || events.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(scenes_events_NoItems__WEBPACK_IMPORTED_MODULE_9__["NoItems"], null) : null, events && events.map(function (event, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
      key: event.id
    }, index > 0 && !moment__WEBPACK_IMPORTED_MODULE_4___default()(event.timestamp).isSame(events[index - 1].timestamp, 'day') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      colSpan: "5",
      className: "event-day-separator"
    }, moment__WEBPACK_IMPORTED_MODULE_4___default()(event.timestamp).format('LL'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(scenes_events_EventRow__WEBPACK_IMPORTED_MODULE_8__["EventRow"], {
      event: event,
      search: search,
      highlightEvents: highlightEvents,
      selectedEvent: selectedEvent,
      properties: properties,
      setSelectedEvent: setSelectedEvent,
      setFilter: updateProperty,
      filtersEnabled: filtersEnabled,
      showLinkToPerson: showLinkToPerson
    }), selectedEvent === event.id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      colSpan: "5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(scenes_events_EventDetails__WEBPACK_IMPORTED_MODULE_7__["EventDetails"], {
      event: event
    }))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      visibility: hasNext || isLoadingNext ? 'visible' : 'hidden',
      margin: '2rem auto 5rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "btn btn-primary",
    onClick: fetchNextEvents
  }, isLoadingNext ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_spin__WEBPACK_IMPORTED_MODULE_1__["default"], null) : 'Load more events')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      marginTop: '5rem'
    }
  }));
}

/***/ }),

/***/ "./frontend/src/scenes/events/NoItems.js":
/*!***********************************************!*\
  !*** ./frontend/src/scenes/events/NoItems.js ***!
  \***********************************************/
/*! exports provided: NoItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoItems", function() { return NoItems; });
/* harmony import */ var lib_components_Link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/components/Link */ "./frontend/src/lib/components/Link.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function NoItems() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    colSpan: 4
  }, "You don't have any items here. If you haven't integrated PostHog yet,", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(lib_components_Link__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    to: "/setup"
  }, "click here to set PostHog up on your app")));
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvc2NlbmVzL2V2ZW50cy9FdmVudFJvdy5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvc2NlbmVzL2V2ZW50cy9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL3NjZW5lcy9ldmVudHMvRXZlbnRzVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL3NjZW5lcy9ldmVudHMvTm9JdGVtcy5qcyJdLCJuYW1lcyI6WyJldmVudE5hbWVNYXAiLCJldmVudCIsInByb3BlcnRpZXMiLCIkZXZlbnRfdHlwZSIsIkV2ZW50Um93IiwiaGlnaGxpZ2h0RXZlbnRzIiwic2VsZWN0ZWRFdmVudCIsInNlYXJjaCIsInNldFNlbGVjdGVkRXZlbnQiLCJmaWx0ZXJzRW5hYmxlZCIsInNob3dMaW5rVG9QZXJzb24iLCJwYXJhbXMiLCJpZCIsImVsZW1lbnRzIiwibGVuZ3RoIiwibWFyZ2luQm90dG9tIiwiZGlzcGxheSIsInRhZ19uYW1lIiwidGV4dCIsImVuY29kZVVSSUNvbXBvbmVudCIsImRpc3RpbmN0X2lkIiwicGVyc29uIiwibWFwIiwicGFyYW1SZXF1ZXN0IiwicGFyYW0iLCJ2YWx1ZSIsIm1vbWVudCIsInRpbWVzdGFtcCIsImZyb21Ob3ciLCJsb2dpYyIsImV2ZW50c1RhYmxlTG9naWMiLCJFdmVudHMiLCJwcm9wcyIsIkV2ZW50c1RhYmxlIiwiZml4ZWRGaWx0ZXJzIiwidXNlVmFsdWVzIiwiZXZlbnRzIiwiaXNMb2FkaW5nIiwiaGFzTmV4dCIsImlzTG9hZGluZ05leHQiLCJuZXdFdmVudHMiLCJ1c2VBY3Rpb25zIiwidXBkYXRlUHJvcGVydHkiLCJmZXRjaE5leHRFdmVudHMiLCJmbGlwU29ydCIsInByZXBlbmROZXdFdmVudHMiLCJyb3V0ZXIiLCJsb2NhdGlvbiIsInBlcnNvbl9pZCIsInBvc2l0aW9uIiwiaW5kZXgiLCJpc1NhbWUiLCJmb3JtYXQiLCJ2aXNpYmlsaXR5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O0FBU0ksc0JBQWdCLEVBQUVDO0FBVHRCLE1BUkosRUFtQktKLGFBQWEsS0FBS0wsS0FBSyxDQUFDVyxFQUF4QixpQkFDRyxvRkFDSTtBQUFJLGFBQU8sRUFBQztBQUFaLG9CQUNJLDJEQUFDLHVFQUFEO0FBQWMsV0FBSyxFQUFFWDtBQUFyQixNQURKLENBREosQ0FwQlIsQ0FETztBQUFBLEdBQVgsQ0FaUixDQVpKLENBRkosZUF5REk7QUFDSSxTQUFLLEVBQUU7QUFDSG9ELGdCQUFVLEVBQUVmLE9BQU8sSUFBSUMsYUFBWCxHQUEyQixTQUEzQixHQUF1QyxRQURoRDtBQUVIZSxZQUFNLEVBQUUsZ0JBRkw7QUFHSEMsZUFBUyxFQUFFO0FBSFI7QUFEWCxrQkFPSTtBQUFRLGFBQVMsRUFBQyxpQkFBbEI7QUFBb0MsV0FBTyxFQUFFWjtBQUE3QyxLQUNLSixhQUFhLGdCQUFHLHNIQUFILEdBQWMsa0JBRGhDLENBUEosQ0F6REosZUFvRUk7QUFBSyxTQUFLLEVBQUU7QUFBRWlCLGVBQVMsRUFBRTtBQUFiO0FBQVosSUFwRUosQ0FESjtBQXdFSCxDOzs7Ozs7Ozs7Ozs7QUN6R0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxTQUFTQyxPQUFULEdBQW1CO0FBQ3RCLHNCQUNJLG9GQUNJO0FBQUksV0FBTyxFQUFFO0FBQWIsOEVBQzBFLEdBRDFFLGVBRUksMkRBQUMsd0RBQUQ7QUFBTSxNQUFFLEVBQUM7QUFBVCxnREFGSixDQURKLENBREo7QUFRSCxDIiwiZmlsZSI6ImV2ZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHsgRmlsdGVyUHJvcGVydHlMaW5rIH0gZnJvbSAnbGliL2NvbXBvbmVudHMvRmlsdGVyUHJvcGVydHlMaW5rJ1xuaW1wb3J0IHsgUHJvcGVydHkgfSBmcm9tICdsaWIvY29tcG9uZW50cy9Qcm9wZXJ0eSdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdsaWIvY29tcG9uZW50cy9MaW5rJ1xuXG5jb25zdCBldmVudE5hbWVNYXAgPSBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LnByb3BlcnRpZXMuJGV2ZW50X3R5cGUgPT09ICdjbGljaycpIHJldHVybiAnY2xpY2tlZCAnXG4gICAgaWYgKGV2ZW50LnByb3BlcnRpZXMuJGV2ZW50X3R5cGUgPT09ICdjaGFuZ2UnKSByZXR1cm4gJ3R5cGVkIHNvbWV0aGluZyBpbnRvICdcbiAgICBpZiAoZXZlbnQucHJvcGVydGllcy4kZXZlbnRfdHlwZSA9PT0gJ3N1Ym1pdCcpIHJldHVybiAnc3VibWl0dGVkICdcbiAgICByZXR1cm4gZXZlbnQuZXZlbnRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEV2ZW50Um93KHtcbiAgICBldmVudCxcbiAgICBoaWdobGlnaHRFdmVudHMsXG4gICAgc2VsZWN0ZWRFdmVudCxcbiAgICBwcm9wZXJ0aWVzLFxuICAgIHNlYXJjaCxcbiAgICBzZXRTZWxlY3RlZEV2ZW50LFxuICAgIGZpbHRlcnNFbmFibGVkLFxuICAgIHNob3dMaW5rVG9QZXJzb24sXG59KSB7XG4gICAgbGV0IHBhcmFtcyA9IFsnJGN1cnJlbnRfdXJsJywgJyRsaWInXVxuICAgIHJldHVybiAoXG4gICAgICAgIDx0clxuICAgICAgICAgICAgY2xhc3NOYW1lPXsnY3Vyc29yLXBvaW50ZXIgZXZlbnQtcm93ICcgKyAoaGlnaGxpZ2h0RXZlbnRzW2V2ZW50LmlkXSAmJiAnZXZlbnQtcm93LW5ldycpfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRFdmVudChzZWxlY3RlZEV2ZW50ICE9PSBldmVudC5pZCA/IGV2ZW50LmlkIDogZmFsc2UpfVxuICAgICAgICA+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAge2V2ZW50TmFtZU1hcChldmVudCl9XG4gICAgICAgICAgICAgICAge2V2ZW50LmVsZW1lbnRzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8cHJlIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMCwgZGlzcGxheTogJ2lubGluZScgfX0+Jmx0O3tldmVudC5lbGVtZW50c1swXS50YWdfbmFtZX0mZ3Q7PC9wcmU+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7ZXZlbnQuZWxlbWVudHMubGVuZ3RoID4gMCAmJiBldmVudC5lbGVtZW50c1swXS50ZXh0ICYmICcgd2l0aCB0ZXh0IFwiJyArIGV2ZW50LmVsZW1lbnRzWzBdLnRleHQgKyAnXCInfVxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICB7c2hvd0xpbmtUb1BlcnNvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvcGVyc29uLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGV2ZW50LmRpc3RpbmN0X2lkKX0ke3NlYXJjaH1gfSBjbGFzc05hbWU9XCJwaC1uby1jYXB0dXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXZlbnQucGVyc29ufVxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucGVyc29uXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICB7cGFyYW1zLm1hcChwYXJhbVJlcXVlc3QgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwYXJhbSA9IHBhcmFtUmVxdWVzdFxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGV2ZW50LnByb3BlcnRpZXNbcGFyYW1dXG5cbiAgICAgICAgICAgICAgICBpZiAocGFyYW0gPT09ICckY3VycmVudF91cmwnICYmICF2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbSA9ICckc2NyZWVuJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGV2ZW50LnByb3BlcnRpZXNbcGFyYW1dXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17cGFyYW19IHRpdGxlPXt2YWx1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVyc0VuYWJsZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbHRlclByb3BlcnR5TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eT17cGFyYW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtldmVudC5wcm9wZXJ0aWVzW3BhcmFtXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVycz17eyBwcm9wZXJ0aWVzIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb3BlcnR5IHZhbHVlPXtldmVudC5wcm9wZXJ0aWVzW3BhcmFtXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8dGQ+e21vbWVudChldmVudC50aW1lc3RhbXApLmZyb21Ob3coKX08L3RkPlxuICAgICAgICA8L3RyPlxuICAgIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEV2ZW50c1RhYmxlIH0gZnJvbSAnLi9FdmVudHNUYWJsZSdcbmltcG9ydCB7IGV2ZW50c1RhYmxlTG9naWMgfSBmcm9tICdzY2VuZXMvZXZlbnRzL2V2ZW50c1RhYmxlTG9naWMnXG5cbmV4cG9ydCBjb25zdCBsb2dpYyA9IGV2ZW50c1RhYmxlTG9naWNcblxuZXhwb3J0IGZ1bmN0aW9uIEV2ZW50cyhwcm9wcykge1xuICAgIHJldHVybiA8RXZlbnRzVGFibGUgey4uLnByb3BzfSAvPlxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlQWN0aW9ucywgdXNlVmFsdWVzIH0gZnJvbSAna2VhJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5cbmltcG9ydCB7IFRhYmxlUm93TG9hZGluZyB9IGZyb20gJ2xpYi91dGlscydcbmltcG9ydCB7IFByb3BlcnR5RmlsdGVycyB9IGZyb20gJ2xpYi9jb21wb25lbnRzL1Byb3BlcnR5RmlsdGVycy9Qcm9wZXJ0eUZpbHRlcnMnXG5cbmltcG9ydCB7IEV2ZW50RGV0YWlscyB9IGZyb20gJ3NjZW5lcy9ldmVudHMvRXZlbnREZXRhaWxzJ1xuaW1wb3J0IHsgRXZlbnRSb3cgfSBmcm9tICdzY2VuZXMvZXZlbnRzL0V2ZW50Um93J1xuaW1wb3J0IHsgTm9JdGVtcyB9IGZyb20gJ3NjZW5lcy9ldmVudHMvTm9JdGVtcydcbmltcG9ydCB7IGV2ZW50c1RhYmxlTG9naWMgfSBmcm9tICdzY2VuZXMvZXZlbnRzL2V2ZW50c1RhYmxlTG9naWMnXG5pbXBvcnQgeyBTcGluIH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IHJvdXRlciB9IGZyb20gJ2tlYS1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiBFdmVudHNUYWJsZSh7IGZpeGVkRmlsdGVycywgZmlsdGVyc0VuYWJsZWQgPSB0cnVlIH0pIHtcbiAgICBjb25zdCBsb2dpYyA9IGV2ZW50c1RhYmxlTG9naWMoeyBmaXhlZEZpbHRlcnMgfSlcbiAgICBjb25zdCB7XG4gICAgICAgIHByb3BlcnRpZXMsXG4gICAgICAgIGV2ZW50cyxcbiAgICAgICAgaXNMb2FkaW5nLFxuICAgICAgICBoYXNOZXh0LFxuICAgICAgICBpc0xvYWRpbmdOZXh0LFxuICAgICAgICBzZWxlY3RlZEV2ZW50LFxuICAgICAgICBuZXdFdmVudHMsXG4gICAgICAgIGhpZ2hsaWdodEV2ZW50cyxcbiAgICB9ID0gdXNlVmFsdWVzKGxvZ2ljKVxuICAgIGNvbnN0IHsgdXBkYXRlUHJvcGVydHksIHNldFNlbGVjdGVkRXZlbnQsIGZldGNoTmV4dEV2ZW50cywgZmxpcFNvcnQsIHByZXBlbmROZXdFdmVudHMgfSA9IHVzZUFjdGlvbnMobG9naWMpXG4gICAgY29uc3Qge1xuICAgICAgICBsb2NhdGlvbjogeyBzZWFyY2ggfSxcbiAgICB9ID0gdXNlVmFsdWVzKHJvdXRlcilcblxuICAgIGNvbnN0IHNob3dMaW5rVG9QZXJzb24gPSAhZml4ZWRGaWx0ZXJzPy5wZXJzb25faWRcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRzXCI+XG4gICAgICAgICAgICB7ZmlsdGVyc0VuYWJsZWQgPyA8UHJvcGVydHlGaWx0ZXJzIHBhZ2VLZXk9XCJFdmVudHNUYWJsZVwiIC8+IDogbnVsbH1cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkV2ZW50PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QZXJzb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBhdGggLyBTY3JlZW48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlNvdXJjZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggb25DbGljaz17ZmxpcFNvcnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoZW4gPGkgY2xhc3NOYW1lPVwiZmkgZmxhdGljb24tc29ydFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7aXNMb2FkaW5nICYmIDxUYWJsZVJvd0xvYWRpbmcgY29sU3Bhbj17NX0gYXNPdmVybGF5PXtldmVudHMubGVuZ3RoID4gMH0gLz59XG4gICAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnZXZlbnQtbmV3LWV2ZW50cyAnICsgKG5ld0V2ZW50cy5sZW5ndGggPiAwID8gJ3Nob3cnIDogJ2hpZGUnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByZXBlbmROZXdFdmVudHMobmV3RXZlbnRzKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCI1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5UaGVyZSBhcmUge25ld0V2ZW50cy5sZW5ndGh9IG5ldyBldmVudHMuIENsaWNrIGhlcmUgdG8gbG9hZCB0aGVtLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgeyFldmVudHMgfHwgZXZlbnRzLmxlbmd0aCA9PT0gMCA/IDxOb0l0ZW1zIC8+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAge2V2ZW50cyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzLm1hcCgoZXZlbnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17ZXZlbnQuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggPiAwICYmICFtb21lbnQoZXZlbnQudGltZXN0YW1wKS5pc1NhbWUoZXZlbnRzW2luZGV4IC0gMV0udGltZXN0YW1wLCAnZGF5JykgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiNVwiIGNsYXNzTmFtZT1cImV2ZW50LWRheS1zZXBhcmF0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21vbWVudChldmVudC50aW1lc3RhbXApLmZvcm1hdCgnTEwnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV2ZW50Um93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudD17ZXZlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2g9e3NlYXJjaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodEV2ZW50cz17aGlnaGxpZ2h0RXZlbnRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRFdmVudD17c2VsZWN0ZWRFdmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM9e3Byb3BlcnRpZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZEV2ZW50PXtzZXRTZWxlY3RlZEV2ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RmlsdGVyPXt1cGRhdGVQcm9wZXJ0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnNFbmFibGVkPXtmaWx0ZXJzRW5hYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dMaW5rVG9QZXJzb249e3Nob3dMaW5rVG9QZXJzb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEV2ZW50ID09PSBldmVudC5pZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCI1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFdmVudERldGFpbHMgZXZlbnQ9e2V2ZW50fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoYXNOZXh0IHx8IGlzTG9hZGluZ05leHQgPyAndmlzaWJsZScgOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMnJlbSBhdXRvIDVyZW0nLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtmZXRjaE5leHRFdmVudHN9PlxuICAgICAgICAgICAgICAgICAgICB7aXNMb2FkaW5nTmV4dCA/IDxTcGluIC8+IDogJ0xvYWQgbW9yZSBldmVudHMnfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzVyZW0nIH19IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsImltcG9ydCB7IExpbmsgfSBmcm9tICdsaWIvY29tcG9uZW50cy9MaW5rJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZnVuY3Rpb24gTm9JdGVtcygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQgY29sU3Bhbj17NH0+XG4gICAgICAgICAgICAgICAgWW91IGRvbid0IGhhdmUgYW55IGl0ZW1zIGhlcmUuIElmIHlvdSBoYXZlbid0IGludGVncmF0ZWQgUG9zdEhvZyB5ZXQseycgJ31cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9zZXR1cFwiPmNsaWNrIGhlcmUgdG8gc2V0IFBvc3RIb2cgdXAgb24geW91ciBhcHA8L0xpbms+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=