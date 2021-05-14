(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["person"],{

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

/***/ }),

/***/ "./frontend/src/scenes/users/Person.js":
/*!*********************************************!*\
  !*** ./frontend/src/scenes/users/Person.js ***!
  \*********************************************/
/*! exports provided: Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
/* harmony import */ var antd_es_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/button/style/css */ "./node_modules/antd/es/button/style/css.js");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/button */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _events_EventsTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events/EventsTable */ "./frontend/src/scenes/events/EventsTable.js");
/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/api */ "./frontend/src/lib/api.js");
/* harmony import */ var lib_components_PropertiesTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/components/PropertiesTable */ "./frontend/src/lib/components/PropertiesTable.js");
/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/utils */ "./frontend/src/lib/utils.js");








function Person(_ref) {
  var distinctId = _ref.distinctId,
      id = _ref.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      person = _useState2[0],
      setPerson = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var url = '';

    if (distinctId) {
      url = "api/person/by_distinct_id/?distinct_id=".concat(distinctId);
    } else {
      url = "api/person/".concat(id);
    }

    lib_api__WEBPACK_IMPORTED_MODULE_5__["default"].get(url).then(setPerson);
  }, [distinctId, id]);
  return person ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "float-right",
    danger: true,
    onClick: function onClick() {
      return Object(lib_utils__WEBPACK_IMPORTED_MODULE_7__["deletePersonData"])(person, function () {
        return history.push('/people');
      });
    }
  }, "Delete all data on this person"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", null, person.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      maxWidth: 750
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(lib_components_PropertiesTable__WEBPACK_IMPORTED_MODULE_6__["PropertiesTable"], {
    properties: person.properties
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("table", {
    className: "table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null, "Distinct IDs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null, person.distinct_ids.map(function (distinct_id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("pre", {
      style: {
        margin: 0
      },
      key: distinct_id
    }, distinct_id);
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_events_EventsTable__WEBPACK_IMPORTED_MODULE_4__["EventsTable"], {
    fixedFilters: {
      person_id: person.id
    }
  })) : null;
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvc2NlbmVzL2V2ZW50cy9FdmVudFJvdy5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvc2NlbmVzL2V2ZW50cy9FdmVudHNUYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvc2NlbmVzL2V2ZW50cy9Ob0l0ZW1zLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9zY2VuZXMvdXNlcnMvUGVyc29uLmpzIl0sIm5hbWVzIjpbImV2ZW50TmFtZU1hcCIsImV2ZW50IiwicHJvcGVydGllcyIsIiRldmVudF90eXBlIiwiRXZlbnRSb3ciLCJoaWdobGlnaHRFdmVudHMiLCJzZWxlY3RlZEV2ZW50Iiwic2VhcmNoIiwic2V0U2VsZWN0ZWRFdmVudCIsImZpbHRlcnNFbmFibGVkIiwic2hvd0xpbmtUb1BlcnNvbiIsInBhcmFtcyIsImlkIiwiZWxlbWVudHMiLCJsZW5ndGgiLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwidGFnX25hbWUiLCJ0ZXh0IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZGlzdGluY3RfaWQiLCJwZXJzb24iLCJtYXAiLCJwYXJhbVJlcXVlc3QiLCJwYXJhbSIsInZhbHVlIiwibW9tZW50IiwidGltZXN0YW1wIiwiZnJvbU5vdyIsIkV2ZW50c1RhYmxlIiwiZml4ZWRGaWx0ZXJzIiwibG9naWMiLCJldmVudHNUYWJsZUxvZ2ljIiwidXNlVmFsdWVzIiwiZXZlbnRzIiwiaXNMb2FkaW5nIiwiaGFzTmV4dCIsImlzTG9hZGluZ05leHQiLCJuZXdFdmVudHMiLCJ1c2VBY3Rpb25zIiwidXBkYXRlUHJvcGVydHkiLCJmZXRjaE5leHRFdmVudHMiLCJmbGlwU29ydCIsInByZXBlbmROZXdFdmVudHMiLCJyb3V0ZXIiLCJsb2NhdGlvbiIsInBlcnNvbl9pZCIsInBvc2l0aW9uIiwiaW5kZXgiLCJpc1NhbWUiLCJmb3JtYXQiLCJ2aXNpYmlsaXR5IiwibWFyZ2luIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwiTm9JdGVtcyIsIlBlcnNvbiIsImRpc3RpbmN0SWQiLCJ1c2VTdGF0ZSIsInNldFBlcnNvbiIsInVzZUVmZmVjdCIsInVybCIsImFwaSIsImdldCIsInRoZW4iLCJkZWxldGVQZXJzb25EYXRhIiwiaGlzdG9yeSIsInB1c2giLCJuYW1lIiwibWF4V2lkdGgiLCJkaXN0aW5jdF9pZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLEtBQUssRUFBSTtBQUMxQixNQUFJQSxLQUFLLENBQUNDLFVBQU4sQ0FBaUJDLFdBQWpCLEtBQWlDLE9BQXJDLEVBQThDLE9BQU8sVUFBUDtBQUM5QyxNQUFJRixLQUFLLENBQUNDLFVBQU4sQ0FBaUJDLFdBQWpCLEtBQWlDLFFBQXJDLEVBQStDLE9BQU8sdUJBQVA7QUFDL0MsTUFBSUYsS0FBSyxDQUFDQyxVQUFOLENBQWlCQyxXQUFqQixLQUFpQyxRQUFyQyxFQUErQyxPQUFPLFlBQVA7QUFDL0MsU0FBT0YsS0FBSyxDQUFDQSxLQUFiO0FBQ0gsQ0FMRDs7QUFPTyxTQUFTRyxRQUFULE9BU0o7QUFBQSxNQVJDSCxLQVFELFFBUkNBLEtBUUQ7QUFBQSxNQVBDSSxlQU9ELFFBUENBLGVBT0Q7QUFBQSxNQU5DQyxhQU1ELFFBTkNBLGFBTUQ7QUFBQSxNQUxDSixVQUtELFFBTENBLFVBS0Q7QUFBQSxNQUpDSyxNQUlELFFBSkNBLE1BSUQ7QUFBQSxNQUhDQyxnQkFHRCxRQUhDQSxnQkFHRDtBQUFBLE1BRkNDLGNBRUQsUUFGQ0EsY0FFRDtBQUFBLE1BRENDLGdCQUNELFFBRENBLGdCQUNEO0FBQ0MsTUFBSUMsTUFBTSxHQUFHLENBQUMsY0FBRCxFQUFpQixNQUFqQixDQUFiO0FBQ0Esc0JBQ0k7QUFDSSxhQUFTLEVBQUUsK0JBQStCTixlQUFlLENBQUNKLEtBQUssQ0FBQ1csRUFBUCxDQUFmLElBQTZCLGVBQTVELENBRGY7QUFFSSxXQUFPLEVBQUU7QUFBQSxhQUFNSixnQkFBZ0IsQ0FBQ0YsYUFBYSxLQUFLTCxLQUFLLENBQUNXLEVBQXhCLEdBQTZCWCxLQUFLLENBQUNXLEVBQW5DLEdBQXdDLEtBQXpDLENBQXRCO0FBQUE7QUFGYixrQkFJSSx1RUFDS1osWUFBWSxDQUFDQyxLQUFELENBRGpCLEVBRUtBLEtBQUssQ0FBQ1ksUUFBTixDQUFlQyxNQUFmLEdBQXdCLENBQXhCLGlCQUNHO0FBQUssU0FBSyxFQUFFO0FBQUVDLGtCQUFZLEVBQUUsQ0FBaEI7QUFBbUJDLGFBQU8sRUFBRTtBQUE1QjtBQUFaLFVBQXlEZixLQUFLLENBQUNZLFFBQU4sQ0FBZSxDQUFmLEVBQWtCSSxRQUEzRSxNQUhSLEVBS0toQixLQUFLLENBQUNZLFFBQU4sQ0FBZUMsTUFBZixHQUF3QixDQUF4QixJQUE2QmIsS0FBSyxDQUFDWSxRQUFOLENBQWUsQ0FBZixFQUFrQkssSUFBL0MsSUFBdUQsaUJBQWlCakIsS0FBSyxDQUFDWSxRQUFOLENBQWUsQ0FBZixFQUFrQkssSUFBbkMsR0FBMEMsR0FMdEcsQ0FKSixlQVdJLHVFQUNLUixnQkFBZ0IsZ0JBQ2IsMkRBQUMsd0RBQUQ7QUFBTSxNQUFFLG9CQUFhUyxrQkFBa0IsQ0FBQ2xCLEtBQUssQ0FBQ21CLFdBQVAsQ0FBL0IsU0FBcURiLE1BQXJELENBQVI7QUFBdUUsYUFBUyxFQUFDO0FBQWpGLEtBQ0tOLEtBQUssQ0FBQ29CLE1BRFgsQ0FEYSxHQUticEIsS0FBSyxDQUFDb0IsTUFOZCxDQVhKLEVBb0JLVixNQUFNLENBQUNXLEdBQVAsQ0FBVyxVQUFBQyxZQUFZLEVBQUk7QUFDeEIsUUFBSUMsS0FBSyxHQUFHRCxZQUFaO0FBQ0EsUUFBSUUsS0FBSyxHQUFHeEIsS0FBSyxDQUFDQyxVQUFOLENBQWlCc0IsS0FBakIsQ0FBWjs7QUFFQSxRQUFJQSxLQUFLLEtBQUssY0FBVixJQUE0QixDQUFDQyxLQUFqQyxFQUF3QztBQUNwQ0QsV0FBSyxHQUFHLFNBQVI7QUFDQUMsV0FBSyxHQUFHeEIsS0FBSyxDQUFDQyxVQUFOLENBQWlCc0IsS0FBakIsQ0FBUjtBQUNIOztBQUVELHdCQUNJO0FBQUksU0FBRyxFQUFFQSxLQUFUO0FBQWdCLFdBQUssRUFBRUM7QUFBdkIsT0FDS2hCLGNBQWMsZ0JBQ1gsMkRBQUMsb0ZBQUQ7QUFDSSxjQUFRLEVBQUVlLEtBRGQ7QUFFSSxXQUFLLEVBQUV2QixLQUFLLENBQUNDLFVBQU4sQ0FBaUJzQixLQUFqQixDQUZYO0FBR0ksYUFBTyxFQUFFO0FBQUV0QixrQkFBVSxFQUFWQTtBQUFGO0FBSGIsTUFEVyxnQkFPWCwyREFBQyxnRUFBRDtBQUFVLFdBQUssRUFBRUQsS0FBSyxDQUFDQyxVQUFOLENBQWlCc0IsS0FBakI7QUFBakIsTUFSUixDQURKO0FBYUgsR0F0QkEsQ0FwQkwsZUEyQ0ksdUVBQUtFLDZDQUFNLENBQUN6QixLQUFLLENBQUMwQixTQUFQLENBQU4sQ0FBd0JDLE9BQXhCLEVBQUwsQ0EzQ0osQ0FESjtBQStDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkVEO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRU8sU0FBU0MsV0FBVCxPQUE4RDtBQUFBLE1BQXZDQyxZQUF1QyxRQUF2Q0EsWUFBdUM7QUFBQSxpQ0FBekJyQixjQUF5QjtBQUFBLE1BQXpCQSxjQUF5QixvQ0FBUixJQUFRO0FBQ2pFLE1BQU1zQixLQUFLLEdBQUdDLHdGQUFnQixDQUFDO0FBQUVGLGdCQUFZLEVBQVpBO0FBQUYsR0FBRCxDQUE5Qjs7QUFDQSxtQkFTSUcscURBQVMsQ0FBQ0YsS0FBRCxDQVRiO0FBQUEsTUFDSTdCLFVBREosY0FDSUEsVUFESjtBQUFBLE1BRUlnQyxNQUZKLGNBRUlBLE1BRko7QUFBQSxNQUdJQyxTQUhKLGNBR0lBLFNBSEo7QUFBQSxNQUlJQyxPQUpKLGNBSUlBLE9BSko7QUFBQSxNQUtJQyxhQUxKLGNBS0lBLGFBTEo7QUFBQSxNQU1JL0IsYUFOSixjQU1JQSxhQU5KO0FBQUEsTUFPSWdDLFNBUEosY0FPSUEsU0FQSjtBQUFBLE1BUUlqQyxlQVJKLGNBUUlBLGVBUko7O0FBVUEsb0JBQTBGa0Msc0RBQVUsQ0FBQ1IsS0FBRCxDQUFwRztBQUFBLE1BQVFTLGNBQVIsZUFBUUEsY0FBUjtBQUFBLE1BQXdCaEMsZ0JBQXhCLGVBQXdCQSxnQkFBeEI7QUFBQSxNQUEwQ2lDLGVBQTFDLGVBQTBDQSxlQUExQztBQUFBLE1BQTJEQyxRQUEzRCxlQUEyREEsUUFBM0Q7QUFBQSxNQUFxRUMsZ0JBQXJFLGVBQXFFQSxnQkFBckU7O0FBQ0Esb0JBRUlWLHFEQUFTLENBQUNXLGtEQUFELENBRmI7QUFBQSxNQUNnQnJDLE1BRGhCLGVBQ0lzQyxRQURKLENBQ2dCdEMsTUFEaEI7O0FBSUEsTUFBTUcsZ0JBQWdCLEdBQUcsRUFBQ29CLFlBQUQsYUFBQ0EsWUFBRCxlQUFDQSxZQUFZLENBQUVnQixTQUFmLENBQXpCO0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNLckMsY0FBYyxnQkFBRywyREFBQyw4RkFBRDtBQUFpQixXQUFPLEVBQUM7QUFBekIsSUFBSCxHQUErQyxJQURsRSxlQUVJO0FBQU8sYUFBUyxFQUFDLE9BQWpCO0FBQXlCLFNBQUssRUFBRTtBQUFFc0MsY0FBUSxFQUFFO0FBQVo7QUFBaEMsa0JBQ0ksdUZBQ0ksb0ZBQ0ksK0VBREosZUFFSSxnRkFGSixlQUdJLHVGQUhKLGVBSUksZ0ZBSkosZUFLSTtBQUFJLFdBQU8sRUFBRUw7QUFBYiwyQkFDUztBQUFHLGFBQVMsRUFBQztBQUFiLElBRFQsQ0FMSixDQURKLENBREosZUFZSSwwRUFDS1AsU0FBUyxpQkFBSSwyREFBQyx5REFBRDtBQUFpQixXQUFPLEVBQUUsQ0FBMUI7QUFBNkIsYUFBUyxFQUFFRCxNQUFNLENBQUNwQixNQUFQLEdBQWdCO0FBQXhELElBRGxCLGVBRUk7QUFDSSxhQUFTLEVBQUUsdUJBQXVCd0IsU0FBUyxDQUFDeEIsTUFBVixHQUFtQixDQUFuQixHQUF1QixNQUF2QixHQUFnQyxNQUF2RCxDQURmO0FBRUksV0FBTyxFQUFFO0FBQUEsYUFBTTZCLGdCQUFnQixDQUFDTCxTQUFELENBQXRCO0FBQUE7QUFGYixrQkFJSTtBQUFJLFdBQU8sRUFBQztBQUFaLGtCQUNJLHNGQUFnQkEsU0FBUyxDQUFDeEIsTUFBMUIsMENBREosQ0FKSixDQUZKLEVBVUssQ0FBQ29CLE1BQUQsSUFBV0EsTUFBTSxDQUFDcEIsTUFBUCxLQUFrQixDQUE3QixnQkFBaUMsMkRBQUMsNkRBQUQsT0FBakMsR0FBK0MsSUFWcEQsRUFXS29CLE1BQU0sSUFDSEEsTUFBTSxDQUFDWixHQUFQLENBQVcsVUFBQ3JCLEtBQUQsRUFBUStDLEtBQVI7QUFBQSx3QkFDUCwyREFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBZ0IsU0FBRyxFQUFFL0MsS0FBSyxDQUFDVztBQUEzQixPQUNLb0MsS0FBSyxHQUFHLENBQVIsSUFBYSxDQUFDdEIsNkNBQU0sQ0FBQ3pCLEtBQUssQ0FBQzBCLFNBQVAsQ0FBTixDQUF3QnNCLE1BQXhCLENBQStCZixNQUFNLENBQUNjLEtBQUssR0FBRyxDQUFULENBQU4sQ0FBa0JyQixTQUFqRCxFQUE0RCxLQUE1RCxDQUFkLGlCQUNHLG9GQUNJO0FBQUksYUFBTyxFQUFDLEdBQVo7QUFBZ0IsZUFBUyxFQUFDO0FBQTFCLE9BQ0tELDZDQUFNLENBQUN6QixLQUFLLENBQUMwQixTQUFQLENBQU4sQ0FBd0J1QixNQUF4QixDQUErQixJQUEvQixDQURMLENBREosQ0FGUixlQVFJLDJEQUFDLCtEQUFEO0FBQ0ksV0FBSyxFQUFFakQsS0FEWDtBQUVJLFlBQU0sRUFBRU0sTUFGWjtBQUdJLHFCQUFlLEVBQUVGLGVBSHJCO0FBSUksbUJBQWEsRUFBRUMsYUFKbkI7QUFLSSxnQkFBVSxFQUFFSixVQUxoQjtBQU1JLHNCQUFnQixFQUFFTSxnQkFOdEI7QUFPSSxlQUFTLEVBQUVnQyxjQVBmO0FBUUksb0JBQWMsRUFBRS9CLGNBUnBCO0FBU0ksc0JBQWdCLEVBQUVDO0FBVHRCLE1BUkosRUFtQktKLGFBQWEsS0FBS0wsS0FBSyxDQUFDVyxFQUF4QixpQkFDRyxvRkFDSTtBQUFJLGFBQU8sRUFBQztBQUFaLG9CQUNJLDJEQUFDLHVFQUFEO0FBQWMsV0FBSyxFQUFFWDtBQUFyQixNQURKLENBREosQ0FwQlIsQ0FETztBQUFBLEdBQVgsQ0FaUixDQVpKLENBRkosZUF5REk7QUFDSSxTQUFLLEVBQUU7QUFDSGtELGdCQUFVLEVBQUVmLE9BQU8sSUFBSUMsYUFBWCxHQUEyQixTQUEzQixHQUF1QyxRQURoRDtBQUVIZSxZQUFNLEVBQUUsZ0JBRkw7QUFHSEMsZUFBUyxFQUFFO0FBSFI7QUFEWCxrQkFPSTtBQUFRLGFBQVMsRUFBQyxpQkFBbEI7QUFBb0MsV0FBTyxFQUFFWjtBQUE3QyxLQUNLSixhQUFhLGdCQUFHLHNIQUFILEdBQWMsa0JBRGhDLENBUEosQ0F6REosZUFvRUk7QUFBSyxTQUFLLEVBQUU7QUFBRWlCLGVBQVMsRUFBRTtBQUFiO0FBQVosSUFwRUosQ0FESjtBQXdFSCxDOzs7Ozs7Ozs7Ozs7QUN6R0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxTQUFTQyxPQUFULEdBQW1CO0FBQ3RCLHNCQUNJLG9GQUNJO0FBQUksV0FBTyxFQUFFO0FBQWIsOEVBQzBFLEdBRDFFLGVBRUksMkRBQUMsd0RBQUQ7QUFBTSxNQUFFLEVBQUM7QUFBVCxnREFGSixDQURKLENBREo7QUFRSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR08sU0FBU0MsTUFBVCxPQUFvQztBQUFBLE1BQWxCQyxVQUFrQixRQUFsQkEsVUFBa0I7QUFBQSxNQUFON0MsRUFBTSxRQUFOQSxFQUFNOztBQUN2QyxrQkFBNEI4QyxzREFBUSxDQUFDLElBQUQsQ0FBcEM7QUFBQTtBQUFBLE1BQU9yQyxNQUFQO0FBQUEsTUFBZXNDLFNBQWY7O0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlDLEdBQUcsR0FBRyxFQUFWOztBQUNBLFFBQUlKLFVBQUosRUFBZ0I7QUFDWkksU0FBRyxvREFBNkNKLFVBQTdDLENBQUg7QUFDSCxLQUZELE1BRU87QUFDSEksU0FBRyx3QkFBaUJqRCxFQUFqQixDQUFIO0FBQ0g7O0FBQ0RrRCxtREFBRyxDQUFDQyxHQUFKLENBQVFGLEdBQVIsRUFBYUcsSUFBYixDQUFrQkwsU0FBbEI7QUFDSCxHQVJRLEVBUU4sQ0FBQ0YsVUFBRCxFQUFhN0MsRUFBYixDQVJNLENBQVQ7QUFVQSxTQUFPUyxNQUFNLGdCQUNULHFGQUNJO0FBQ0ksYUFBUyxFQUFDLGFBRGQ7QUFFSSxVQUFNLE1BRlY7QUFHSSxXQUFPLEVBQUU7QUFBQSxhQUFNNEMsa0VBQWdCLENBQUM1QyxNQUFELEVBQVM7QUFBQSxlQUFNNkMsT0FBTyxDQUFDQyxJQUFSLENBQWEsU0FBYixDQUFOO0FBQUEsT0FBVCxDQUF0QjtBQUFBO0FBSGIsc0NBREosZUFRSSx1RUFBSzlDLE1BQU0sQ0FBQytDLElBQVosQ0FSSixlQVNJO0FBQUssU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRTtBQUFaO0FBQVosa0JBQ0ksMkRBQUMsOEVBQUQ7QUFBaUIsY0FBVSxFQUFFaEQsTUFBTSxDQUFDbkI7QUFBcEMsSUFESixlQUVJO0FBQU8sYUFBUyxFQUFDO0FBQWpCLGtCQUNJLHVGQUNJLG9GQUNJLHNGQURKLGVBRUksdUVBQ0ttQixNQUFNLENBQUNpRCxZQUFQLENBQW9CaEQsR0FBcEIsQ0FBd0IsVUFBQUYsV0FBVztBQUFBLHdCQUNoQztBQUFLLFdBQUssRUFBRTtBQUFFZ0MsY0FBTSxFQUFFO0FBQVYsT0FBWjtBQUEyQixTQUFHLEVBQUVoQztBQUFoQyxPQUNLQSxXQURMLENBRGdDO0FBQUEsR0FBbkMsQ0FETCxDQUZKLENBREosQ0FESixDQUZKLENBVEosZUEwQkksMkRBQUMsK0RBQUQ7QUFBYSxnQkFBWSxFQUFFO0FBQUUwQixlQUFTLEVBQUV6QixNQUFNLENBQUNUO0FBQXBCO0FBQTNCLElBMUJKLENBRFMsR0E2QlQsSUE3Qko7QUE4QkgsQyIsImZpbGUiOiJwZXJzb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IEZpbHRlclByb3BlcnR5TGluayB9IGZyb20gJ2xpYi9jb21wb25lbnRzL0ZpbHRlclByb3BlcnR5TGluaydcbmltcG9ydCB7IFByb3BlcnR5IH0gZnJvbSAnbGliL2NvbXBvbmVudHMvUHJvcGVydHknXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnbGliL2NvbXBvbmVudHMvTGluaydcblxuY29uc3QgZXZlbnROYW1lTWFwID0gZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC5wcm9wZXJ0aWVzLiRldmVudF90eXBlID09PSAnY2xpY2snKSByZXR1cm4gJ2NsaWNrZWQgJ1xuICAgIGlmIChldmVudC5wcm9wZXJ0aWVzLiRldmVudF90eXBlID09PSAnY2hhbmdlJykgcmV0dXJuICd0eXBlZCBzb21ldGhpbmcgaW50byAnXG4gICAgaWYgKGV2ZW50LnByb3BlcnRpZXMuJGV2ZW50X3R5cGUgPT09ICdzdWJtaXQnKSByZXR1cm4gJ3N1Ym1pdHRlZCAnXG4gICAgcmV0dXJuIGV2ZW50LmV2ZW50XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFdmVudFJvdyh7XG4gICAgZXZlbnQsXG4gICAgaGlnaGxpZ2h0RXZlbnRzLFxuICAgIHNlbGVjdGVkRXZlbnQsXG4gICAgcHJvcGVydGllcyxcbiAgICBzZWFyY2gsXG4gICAgc2V0U2VsZWN0ZWRFdmVudCxcbiAgICBmaWx0ZXJzRW5hYmxlZCxcbiAgICBzaG93TGlua1RvUGVyc29uLFxufSkge1xuICAgIGxldCBwYXJhbXMgPSBbJyRjdXJyZW50X3VybCcsICckbGliJ11cbiAgICByZXR1cm4gKFxuICAgICAgICA8dHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17J2N1cnNvci1wb2ludGVyIGV2ZW50LXJvdyAnICsgKGhpZ2hsaWdodEV2ZW50c1tldmVudC5pZF0gJiYgJ2V2ZW50LXJvdy1uZXcnKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkRXZlbnQoc2VsZWN0ZWRFdmVudCAhPT0gZXZlbnQuaWQgPyBldmVudC5pZCA6IGZhbHNlKX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIHtldmVudE5hbWVNYXAoZXZlbnQpfVxuICAgICAgICAgICAgICAgIHtldmVudC5lbGVtZW50cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHByZSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDAsIGRpc3BsYXk6ICdpbmxpbmUnIH19PiZsdDt7ZXZlbnQuZWxlbWVudHNbMF0udGFnX25hbWV9Jmd0OzwvcHJlPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2V2ZW50LmVsZW1lbnRzLmxlbmd0aCA+IDAgJiYgZXZlbnQuZWxlbWVudHNbMF0udGV4dCAmJiAnIHdpdGggdGV4dCBcIicgKyBldmVudC5lbGVtZW50c1swXS50ZXh0ICsgJ1wiJ31cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAge3Nob3dMaW5rVG9QZXJzb24gPyAoXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL3BlcnNvbi8ke2VuY29kZVVSSUNvbXBvbmVudChldmVudC5kaXN0aW5jdF9pZCl9JHtzZWFyY2h9YH0gY2xhc3NOYW1lPVwicGgtbm8tY2FwdHVyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2V2ZW50LnBlcnNvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnBlcnNvblxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAge3BhcmFtcy5tYXAocGFyYW1SZXF1ZXN0ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcGFyYW0gPSBwYXJhbVJlcXVlc3RcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBldmVudC5wcm9wZXJ0aWVzW3BhcmFtXVxuXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtID09PSAnJGN1cnJlbnRfdXJsJyAmJiAhdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW0gPSAnJHNjcmVlbidcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBldmVudC5wcm9wZXJ0aWVzW3BhcmFtXVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e3BhcmFtfSB0aXRsZT17dmFsdWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2ZpbHRlcnNFbmFibGVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJQcm9wZXJ0eUxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk9e3BhcmFtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZXZlbnQucHJvcGVydGllc1twYXJhbV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnM9e3sgcHJvcGVydGllcyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9wZXJ0eSB2YWx1ZT17ZXZlbnQucHJvcGVydGllc1twYXJhbV19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPHRkPnttb21lbnQoZXZlbnQudGltZXN0YW1wKS5mcm9tTm93KCl9PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICApXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VBY3Rpb25zLCB1c2VWYWx1ZXMgfSBmcm9tICdrZWEnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcblxuaW1wb3J0IHsgVGFibGVSb3dMb2FkaW5nIH0gZnJvbSAnbGliL3V0aWxzJ1xuaW1wb3J0IHsgUHJvcGVydHlGaWx0ZXJzIH0gZnJvbSAnbGliL2NvbXBvbmVudHMvUHJvcGVydHlGaWx0ZXJzL1Byb3BlcnR5RmlsdGVycydcblxuaW1wb3J0IHsgRXZlbnREZXRhaWxzIH0gZnJvbSAnc2NlbmVzL2V2ZW50cy9FdmVudERldGFpbHMnXG5pbXBvcnQgeyBFdmVudFJvdyB9IGZyb20gJ3NjZW5lcy9ldmVudHMvRXZlbnRSb3cnXG5pbXBvcnQgeyBOb0l0ZW1zIH0gZnJvbSAnc2NlbmVzL2V2ZW50cy9Ob0l0ZW1zJ1xuaW1wb3J0IHsgZXZlbnRzVGFibGVMb2dpYyB9IGZyb20gJ3NjZW5lcy9ldmVudHMvZXZlbnRzVGFibGVMb2dpYydcbmltcG9ydCB7IFNwaW4gfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgcm91dGVyIH0gZnJvbSAna2VhLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIEV2ZW50c1RhYmxlKHsgZml4ZWRGaWx0ZXJzLCBmaWx0ZXJzRW5hYmxlZCA9IHRydWUgfSkge1xuICAgIGNvbnN0IGxvZ2ljID0gZXZlbnRzVGFibGVMb2dpYyh7IGZpeGVkRmlsdGVycyB9KVxuICAgIGNvbnN0IHtcbiAgICAgICAgcHJvcGVydGllcyxcbiAgICAgICAgZXZlbnRzLFxuICAgICAgICBpc0xvYWRpbmcsXG4gICAgICAgIGhhc05leHQsXG4gICAgICAgIGlzTG9hZGluZ05leHQsXG4gICAgICAgIHNlbGVjdGVkRXZlbnQsXG4gICAgICAgIG5ld0V2ZW50cyxcbiAgICAgICAgaGlnaGxpZ2h0RXZlbnRzLFxuICAgIH0gPSB1c2VWYWx1ZXMobG9naWMpXG4gICAgY29uc3QgeyB1cGRhdGVQcm9wZXJ0eSwgc2V0U2VsZWN0ZWRFdmVudCwgZmV0Y2hOZXh0RXZlbnRzLCBmbGlwU29ydCwgcHJlcGVuZE5ld0V2ZW50cyB9ID0gdXNlQWN0aW9ucyhsb2dpYylcbiAgICBjb25zdCB7XG4gICAgICAgIGxvY2F0aW9uOiB7IHNlYXJjaCB9LFxuICAgIH0gPSB1c2VWYWx1ZXMocm91dGVyKVxuXG4gICAgY29uc3Qgc2hvd0xpbmtUb1BlcnNvbiA9ICFmaXhlZEZpbHRlcnM/LnBlcnNvbl9pZFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudHNcIj5cbiAgICAgICAgICAgIHtmaWx0ZXJzRW5hYmxlZCA/IDxQcm9wZXJ0eUZpbHRlcnMgcGFnZUtleT1cIkV2ZW50c1RhYmxlXCIgLz4gOiBudWxsfVxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCIgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+RXZlbnQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBlcnNvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+UGF0aCAvIFNjcmVlbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+U291cmNlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBvbkNsaWNrPXtmbGlwU29ydH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2hlbiA8aSBjbGFzc05hbWU9XCJmaSBmbGF0aWNvbi1zb3J0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHtpc0xvYWRpbmcgJiYgPFRhYmxlUm93TG9hZGluZyBjb2xTcGFuPXs1fSBhc092ZXJsYXk9e2V2ZW50cy5sZW5ndGggPiAwfSAvPn1cbiAgICAgICAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydldmVudC1uZXctZXZlbnRzICcgKyAobmV3RXZlbnRzLmxlbmd0aCA+IDAgPyAnc2hvdycgOiAnaGlkZScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJlcGVuZE5ld0V2ZW50cyhuZXdFdmVudHMpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlRoZXJlIGFyZSB7bmV3RXZlbnRzLmxlbmd0aH0gbmV3IGV2ZW50cy4gQ2xpY2sgaGVyZSB0byBsb2FkIHRoZW0uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICB7IWV2ZW50cyB8fCBldmVudHMubGVuZ3RoID09PSAwID8gPE5vSXRlbXMgLz4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICB7ZXZlbnRzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudHMubWFwKChldmVudCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtldmVudC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCA+IDAgJiYgIW1vbWVudChldmVudC50aW1lc3RhbXApLmlzU2FtZShldmVudHNbaW5kZXggLSAxXS50aW1lc3RhbXAsICdkYXknKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCI1XCIgY2xhc3NOYW1lPVwiZXZlbnQtZGF5LXNlcGFyYXRvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9tZW50KGV2ZW50LnRpbWVzdGFtcCkuZm9ybWF0KCdMTCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXZlbnRSb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50PXtldmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaD17c2VhcmNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0RXZlbnRzPXtoaWdobGlnaHRFdmVudHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEV2ZW50PXtzZWxlY3RlZEV2ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcz17cHJvcGVydGllc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkRXZlbnQ9e3NldFNlbGVjdGVkRXZlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGaWx0ZXI9e3VwZGF0ZVByb3BlcnR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyc0VuYWJsZWQ9e2ZpbHRlcnNFbmFibGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0xpbmtUb1BlcnNvbj17c2hvd0xpbmtUb1BlcnNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkRXZlbnQgPT09IGV2ZW50LmlkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV2ZW50RGV0YWlscyBldmVudD17ZXZlbnR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhhc05leHQgfHwgaXNMb2FkaW5nTmV4dCA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICcycmVtIGF1dG8gNXJlbScsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e2ZldGNoTmV4dEV2ZW50c30+XG4gICAgICAgICAgICAgICAgICAgIHtpc0xvYWRpbmdOZXh0ID8gPFNwaW4gLz4gOiAnTG9hZCBtb3JlIGV2ZW50cyd9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnNXJlbScgfX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiaW1wb3J0IHsgTGluayB9IGZyb20gJ2xpYi9jb21wb25lbnRzL0xpbmsnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBmdW5jdGlvbiBOb0l0ZW1zKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXs0fT5cbiAgICAgICAgICAgICAgICBZb3UgZG9uJ3QgaGF2ZSBhbnkgaXRlbXMgaGVyZS4gSWYgeW91IGhhdmVuJ3QgaW50ZWdyYXRlZCBQb3N0SG9nIHlldCx7JyAnfVxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3NldHVwXCI+Y2xpY2sgaGVyZSB0byBzZXQgUG9zdEhvZyB1cCBvbiB5b3VyIGFwcDwvTGluaz5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgKVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEV2ZW50c1RhYmxlIH0gZnJvbSAnLi4vZXZlbnRzL0V2ZW50c1RhYmxlJ1xuaW1wb3J0IGFwaSBmcm9tICdsaWIvYXBpJ1xuaW1wb3J0IHsgUHJvcGVydGllc1RhYmxlIH0gZnJvbSAnbGliL2NvbXBvbmVudHMvUHJvcGVydGllc1RhYmxlJ1xuaW1wb3J0IHsgZGVsZXRlUGVyc29uRGF0YSB9IGZyb20gJ2xpYi91dGlscydcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnXG5cbmV4cG9ydCBmdW5jdGlvbiBQZXJzb24oeyBkaXN0aW5jdElkLCBpZCB9KSB7XG4gICAgY29uc3QgW3BlcnNvbiwgc2V0UGVyc29uXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgdXJsID0gJydcbiAgICAgICAgaWYgKGRpc3RpbmN0SWQpIHtcbiAgICAgICAgICAgIHVybCA9IGBhcGkvcGVyc29uL2J5X2Rpc3RpbmN0X2lkLz9kaXN0aW5jdF9pZD0ke2Rpc3RpbmN0SWR9YFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXJsID0gYGFwaS9wZXJzb24vJHtpZH1gXG4gICAgICAgIH1cbiAgICAgICAgYXBpLmdldCh1cmwpLnRoZW4oc2V0UGVyc29uKVxuICAgIH0sIFtkaXN0aW5jdElkLCBpZF0pXG5cbiAgICByZXR1cm4gcGVyc29uID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICBkYW5nZXJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVQZXJzb25EYXRhKHBlcnNvbiwgKCkgPT4gaGlzdG9yeS5wdXNoKCcvcGVvcGxlJykpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIERlbGV0ZSBhbGwgZGF0YSBvbiB0aGlzIHBlcnNvblxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8aDE+e3BlcnNvbi5uYW1lfTwvaDE+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiA3NTAgfX0+XG4gICAgICAgICAgICAgICAgPFByb3BlcnRpZXNUYWJsZSBwcm9wZXJ0aWVzPXtwZXJzb24ucHJvcGVydGllc30gLz5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5EaXN0aW5jdCBJRHM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BlcnNvbi5kaXN0aW5jdF9pZHMubWFwKGRpc3RpbmN0X2lkID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwcmUgc3R5bGU9e3sgbWFyZ2luOiAwIH19IGtleT17ZGlzdGluY3RfaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaXN0aW5jdF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8RXZlbnRzVGFibGUgZml4ZWRGaWx0ZXJzPXt7IHBlcnNvbl9pZDogcGVyc29uLmlkIH19IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICkgOiBudWxsXG59XG4iXSwic291cmNlUm9vdCI6IiJ9